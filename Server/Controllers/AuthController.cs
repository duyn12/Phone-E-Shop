using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Server.Common.AppSettings;
using Server.Data;
using Server.DTOs.Auth;
using Server.Infrastructures.Emails;
using Server.Models.Entities;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Text.Json;

namespace Server.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AuthController : BaseController
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SMTPEmailService _emailService;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly JwtConfiguration _jwtConfiguration;
        private readonly IConfiguration _configuration;
        public AuthController(
            ApplicationDbContext dbContext,
            UserManager<ApplicationUser> userManager,
            SMTPEmailService emailService,
            RoleManager<IdentityRole> roleManager,
            IOptions<JwtConfiguration> jwtConfiguration,
            IConfiguration configuration) : base(dbContext)
        {
            _userManager = userManager;
            _emailService = emailService;
            _roleManager = roleManager;
            _jwtConfiguration = jwtConfiguration.Value;
            _configuration = configuration;

        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody] RegisterDto register)
        {
            // Kiểm tra tính hợp lệ của dữ liệu đăng ký
            if (ModelState.IsValid)
            {
                var user = new ApplicationUser
                {
                    UserName = register.Email,
                    Email = register.Email,
                    FullName = register.Email,
                };

                // Tạo người dùng mới
                var result = await _userManager.CreateAsync(user, register.Password);
                if (result.Succeeded)
                {

                    return Ok(new { data = result, message = "Registration successful." });
                }

                // Trả về lỗi nếu không thành công
                return BadRequest(result.Errors);
            }

            // Trả về lỗi nếu dữ liệu không hợp lệ
            return BadRequest(ModelState);
        }


        // POST: api/auth/login
        // Endpoint for user login.

        [HttpPost]
        public async Task<IActionResult> Login([FromBody]LoginDTO login)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByEmailAsync(login.Email)
                            ?? await _userManager.FindByNameAsync(login.Email);

                if (user != null && user.IsNotDeleted)
                {
                    var passwordCheck = await _userManager.CheckPasswordAsync(user, login.Password);
                    if (passwordCheck)
                    {
                        if (user.TwoFactorEnabled)
                        {
                            if (!string.IsNullOrEmpty(login.PassCode))
                            {
                                var isTokenValid = await _userManager.VerifyTwoFactorTokenAsync(user, "Email", login.PassCode);
                                if (isTokenValid)
                                {
                                    return await LoginUser(user, login);
                                }
                                else
                                {
                                    return BadRequest(new { message = "Enter valid pass code." });
                                }
                            }
                            else
                            {
                                // Gửi mã xác thực qua email
                                var token = await _userManager.GenerateTwoFactorTokenAsync(user, "Email");
                                var isSend = await _emailService.SendEmailAsync(user.Email, "Login Verification", token);
                                if (!isSend)
                                {
                                    AuditLog log = new()
                                    {
                                        Username = user.UserName,
                                        Ip = HttpContext.Connection.RemoteIpAddress == null ? "-" : HttpContext.Connection.RemoteIpAddress.ToString(),
                                        Service = "Account",
                                        Action = "Login Verification",
                                        Status = "error",
                                        Timestamp = DateTime.UtcNow,
                                        Description = JsonSerializer.Serialize(new { user.Email, message = "Error while sending mail." }),
                                    };
                                    await SaveLog(log);
                                }
                                return Ok(new { IsEmailSent = true });
                            }
                        }
                        else
                        {
                            return await LoginUser(user, login);
                        }
                    }
                }
            }

            // Return bad request if login is unsuccessful
            return BadRequest(new { message = "Invalid login attempt." });
        }

        private async Task<IActionResult> LoginUser(ApplicationUser user, LoginDTO login)
        {
            // Retrieve user role and set token expiration based on remember me option
            var roleList = await _userManager.GetRolesAsync(user);
            var role = await _roleManager.FindByNameAsync(roleList.FirstOrDefault());
            var expiry = login.IsRemember ? DateTime.UtcNow.AddDays(7) : DateTime.UtcNow.AddHours(1);

            // Generate JWT token
            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtConfiguration.Key));
            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
            var tokenOptions = new JwtSecurityToken(
                issuer: _jwtConfiguration.Issuer,
                audience: _jwtConfiguration.Audience,
                claims: await GetClaims(user, role),
                expires: expiry,
                signingCredentials: signinCredentials
            );
            var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);



            // Update last login time for the user
            user.LastLogin = DateTime.UtcNow;
            await _dbContext.SaveChangesAsync();

            // Log the successful login attempt
            AuditLog log = new()
            {
                Username = user.UserName,
                Ip = HttpContext.Connection.RemoteIpAddress == null ? "-" : HttpContext.Connection.RemoteIpAddress.ToString(),
                Service = "Account",
                Action = "Login",
                Status = "success",
                Timestamp = DateTime.UtcNow,
                Description = String.Empty
            };
            await SaveLog(log);

            // Return token and user info on successful login
            return Ok(new { Token = tokenString });
        }

        // GET: api/auth/logout
        // Endpoint for user logout.
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> LogOut()
        {
            // Sign out the user (invalidate the JWT token)
            await HttpContext.SignOutAsync(JwtBearerDefaults.AuthenticationScheme);

            // Return OK response indicating successful logout
            return Ok();
        }

        // Private Functions
        private async Task<List<Claim>> GetClaims(ApplicationUser user, IdentityRole role)
        {
            // Initialize a list to store claims
            var claims = new List<Claim>() {
                new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            // Add specific permissions as claims
            try
            {
                var permissions = await _roleManager.GetClaimsAsync(role);
                foreach (var permission in permissions)
                {
                    claims.Add(new Claim("permission", permission.Value));
                }
            }
            catch
            {
                // Return null if an error occurs during permission retrieval
                return new List<Claim>();
            }

            //// Return the list of claims
            return claims;
        }

    }
}
