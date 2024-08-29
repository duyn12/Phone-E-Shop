using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Server.Data;
using Server.DTOs.Auth;
using Server.Helpers;
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
        private readonly IConfiguration _config;
        private readonly UserManager<ApplicationUser> _userManager;
        public AuthController(ApplicationDbContext dbContext, IConfiguration configuration, UserManager<ApplicationUser> userManager) : base(dbContext)
        {
            _config = configuration;
            _userManager = userManager;
        }

        [HttpPost]
        public async Task<IActionResult> Register(string email, string password)
        {
            // Kiểm tra tính hợp lệ của dữ liệu đăng ký
            if (ModelState.IsValid)
            {
                var user = new ApplicationUser
                {
                    UserName = email,
                    Email = email,
                    FullName = email,
                };

                // Tạo người dùng mới
                var result = await _userManager.CreateAsync(user, password);
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
        //[HttpPost]
        //public async Task<IActionResult> Login(LoginDTO login)
        //{
        //    // Check if the login data is valid
        //    if (ModelState.IsValid)
        //    {
        //        // Check if a user with the provided email/username and active status exists
        //        var user = await _dbContext.Users.FirstOrDefaultAsync(x => (x.Email == login.Email || x.UserName == login.Email) && x.IsActive.Equals(true));

        //        // Check if the user exists and the password matches
        //        if (user != null && user.Password == Encryption.GetMD5(login.Password))
        //        {
        //            if (user.IsTwoFactorEnabled)
        //            {
        //                if (!string.IsNullOrEmpty(login.PassCode))
        //                {
        //                    var loginToken = _dbContext.UserTokens.FirstOrDefault(x => x.TokenType == "login_verification" && x.TokenText == login.PassCode && x.TokenExpiry >= DateTime.UtcNow);
        //                    if (loginToken != null)
        //                    {
        //                        return await LoginUser(user, login);
        //                    }
        //                    else
        //                    {
        //                        return BadRequest(new { message = "Enter valid pass code." });
        //                    }
        //                }

        //                // send email and 
        //                //else
        //                //{
        //                //    // Create a new user token for password reset
        //                //    var usertoken = new UserToken()
        //                //    {
        //                //        UserId = user.Id,
        //                //        TokenType = "login_verification",
        //                //        TokenText = General.GeneratePasscode(8),
        //                //        TokenExpiry = DateTime.UtcNow.AddMinutes(6),
        //                //        CreatedAt = DateTime.UtcNow,
        //                //    };
        //                //    _dbContext.UserTokens.Add(usertoken);
        //                //    await _dbContext.SaveChangesAsync();
        //                //    var template = _dbContext.HtmlTemplates.FirstOrDefault(x => x.Name == "login_verification");
        //                //    var host = HttpContext.Request.Host;
        //                //    var isSend = SendEmail.LoginVerificationEmail(GetAppSetting(), user.UserName, user.Email, usertoken.TokenText, String.Format("https://{0}", host), template.Content, template.Subject);

        //                //    if (!isSend)
        //                //    {
        //                //        AuditLog log = new()
        //                //        {
        //                //            Username = user.UserName,
        //                //            Ip = HttpContext.Connection.RemoteIpAddress == null ? "-" : HttpContext.Connection.RemoteIpAddress.ToString(),
        //                //            Service = "Account",
        //                //            Action = "Login Verification",
        //                //            Status = "error",
        //                //            Timestamp = DateTime.UtcNow,
        //                //            Description = JsonSerializer.Serialize(new { user.Email, message = "Error while sending mail." }),
        //                //        };
        //                //        await SaveLog(log);
        //                //    }

        //                //    return Ok(new { IsEmailSent = true });
        //                //}
        //            }
        //            else
        //            {
        //                return await LoginUser(user, login);
        //            }
        //        }
        //    }

        //    // Return bad request if login is unsuccessful
        //    return BadRequest();
        //}

        //private async Task<IActionResult> LoginUser(User user, LoginDTO login)
        //{
        //    // Retrieve user role and set token expiration based on remember me option
        //    var role = _dbContext.Roles.FirstOrDefault(x => x.Id == user.RoleId);
        //    var expiry = login.IsRemember ? DateTime.UtcNow.AddDays(7) : DateTime.UtcNow.AddHours(1);

        //    // Generate JWT token
        //    var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["JWT:Secret"]));
        //    var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
        //    var tokeOptions = new JwtSecurityToken(
        //        issuer: _config["JWT:ValidIssuer"],
        //        audience: _config["JWT:ValidAudience"],
        //        claims: GetClaims(user, role, GetAppSetting().DefaultTimezone),
        //        expires: expiry,
        //        signingCredentials: signinCredentials
        //    );
        //    var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);

        //    // Update last login time for the user
        //    user.LastLogin = DateTime.UtcNow;
        //    _dbContext.Users.Update(user);
        //    await _dbContext.SaveChangesAsync();

        //    // Log the successful login attempt
        //    AuditLog log = new()
        //    {
        //        Username = user.UserName,
        //        Ip = HttpContext.Connection.RemoteIpAddress == null ? "-" : HttpContext.Connection.RemoteIpAddress.ToString(),
        //        Service = "Account",
        //        Action = "Login",
        //        Status = "success",
        //        Timestamp = DateTime.UtcNow,
        //        Description = String.Empty
        //    };
        //    await SaveLog(log);

        //    // Return token and user info on successful login
        //    return Ok(new { Token = tokenString, user.UserName, user.FullName, user.Email, user.AvatarUrl, role.DefaultHome, role.Permissions });
        //}

        //// GET: api/auth/logout
        //// Endpoint for user logout.
        //[HttpGet]
        //[Authorize]
        //public async Task<IActionResult> LogOut()
        //{
        //    // Sign out the user (invalidate the JWT token)
        //    await HttpContext.SignOutAsync(JwtBearerDefaults.AuthenticationScheme);

        //    // Return OK response indicating successful logout
        //    return Ok();
        //}

        //// POST: api/auth/forgotpassword
        //// Endpoint for handling forgot password requests.
        //[HttpPost]
        //public async Task<IActionResult> ForgotPassword(ForgotPasswordDTO forgot)
        //{
        //    // Check if a user with the provided email exists and is active
        //    var user = _dbContext.Users.FirstOrDefault(x => x.Email == forgot.Email && x.IsActive.Equals(true));

        //    if (user != null)
        //    {
        //        // Generate a unique password reset token
        //        var usertoken = _dbContext.UserTokens.FirstOrDefault(x => x.UserId == user.Id && x.TokenType == "reset_password");
        //        var token = Guid.NewGuid().ToString();

        //        if (usertoken == null)
        //        {
        //            // Create a new user token for password reset
        //            usertoken = new UserToken()
        //            {
        //                UserId = user.Id,
        //                TokenType = "reset_password",
        //                TokenText = Encryption.GetMD5(token),
        //                TokenExpiry = DateTime.UtcNow.AddHours(3),
        //                CreatedAtUtc = DateTime.UtcNow,
        //            };
        //            _dbContext.UserTokens.Add(usertoken);
        //        }
        //        else
        //        {
        //            // Update the existing user token for password reset
        //            usertoken.UserId = user.Id;
        //            usertoken.TokenText = Encryption.GetMD5(token);
        //            usertoken.TokenType = "reset_password";
        //            usertoken.TokenExpiry = DateTime.UtcNow.AddHours(3);
        //            usertoken.CreatedAtUtc = DateTime.UtcNow;
        //            _dbContext.UserTokens.Update(usertoken);
        //        }
        //        _dbContext.SaveChanges();

        //        //// Retrieve the host and email template for password reset
        //        //var host = HttpContext.Request.Host;
        //        //var template = _dbContext.HtmlTemplates.FirstOrDefault(x => x.Name == "reset_password");

        //        //// Send a password reset email
        //        //var isSend = SendEmail.ResetPassEmail(GetAppSetting(), user.UserName, user.Email, usertoken.TokenText, String.Format("https://{0}", host), template.Content, template.Subject);

        //        //// Log the email sending status
        //        //if (isSend)
        //        //{
        //        //    AuditLog log = new()
        //        //    {
        //        //        Username = user.UserName,
        //        //        Ip = HttpContext.Connection.RemoteIpAddress == null ? "-" : HttpContext.Connection.RemoteIpAddress.ToString(),
        //        //        Service = "Account",
        //        //        Action = "Forgot Password",
        //        //        Status = "success",
        //        //        Timestamp = DateTime.UtcNow,
        //        //        Description = JsonSerializer.Serialize(new { user.Email, message = "Mail sent successfully." }),
        //        //    };
        //        //    await SaveLog(log);
        //        //}
        //        //else
        //        //{
        //        AuditLog log = new()
        //        {
        //            Username = user.UserName,
        //            Ip = HttpContext.Connection.RemoteIpAddress == null ? "-" : HttpContext.Connection.RemoteIpAddress.ToString(),
        //            Service = "Account",
        //            Action = "Forgot Password",
        //            Status = "error",
        //            Timestamp = DateTime.UtcNow,
        //            Description = JsonSerializer.Serialize(new { user.Email, message = "Error while sending mail." }),
        //        };
        //        await SaveLog(log);
        //        //}

        //    }
        //    else
        //    {
        //        // Log an error if the email doesn't exist
        //        AuditLog log = new()
        //        {
        //            Username = "-",
        //            Ip = HttpContext.Connection.RemoteIpAddress == null ? "-" : HttpContext.Connection.RemoteIpAddress.ToString(),
        //            Service = "Account",
        //            Action = "Forgot Password",
        //            Status = "error",
        //            Timestamp = DateTime.UtcNow,
        //            Description = JsonSerializer.Serialize(new { forgot.Email, message = "Email not exist." }),
        //        };
        //        await SaveLog(log);
        //    }

        //    // Return an OK response
        //    return Ok();
        //}

        //// POST: api/auth/resetpassword
        //// Endpoint for resetting user password.
        //[HttpPost]
        //public async Task<IActionResult> ResetPassword(ResetPasswordDTO pass)
        //{
        //    // Check if the provided model state is valid
        //    if (ModelState.IsValid)
        //    {
        //        // Retrieve the user associated with the provided email
        //        var user = await _dbContext.Users.FirstOrDefaultAsync(u => u.Email == pass.Email);

        //        // Check if the user exists
        //        if (user != null)
        //        {
        //            // Check if the reset password link is expired
        //            var usertoken = _dbContext.UserTokens.FirstOrDefault(x => x.UserId == user.Id && x.TokenType == "reset_password" && x.TokenExpiry >= DateTime.UtcNow);

        //            // Check if the token matches
        //            if (usertoken == null || usertoken.TokenText != pass.Token)
        //            {
        //                return BadRequest(new { message = "Reset password link expired." });
        //            }
        //            else
        //            {
        //                // Update the user's password and token expiry
        //                user.Password = Encryption.GetMD5(pass.NewPassword);
        //                _dbContext.Users.Update(user);

        //                usertoken.TokenExpiry = DateTime.UtcNow;

        //                _dbContext.SaveChanges();

        //                // Retrieve the host and email template for password reset success
        //                //var host = HttpContext.Request.Host;
        //                //var template = _dbContext.HtmlTemplates.FirstOrDefault(x => x.Name == "reset_password_success");

        //                //// Send a password reset success email
        //                //var isSend = SendEmail.ResetPassSuccess(GetAppSetting(), user.UserName, user.Email, String.Format("https://{0}", host), template.Content, template.Subject);

        //                //// Log the email sending status
        //                //if (isSend)
        //                //{
        //                //    var log = new AuditLog()
        //                //    {
        //                //        Username = user.UserName,
        //                //        Ip = HttpContext.Connection.RemoteIpAddress == null ? "-" : HttpContext.Connection.RemoteIpAddress.ToString(),
        //                //        Service = "Account",
        //                //        Action = "Reset Password",
        //                //        Status = "success",
        //                //        Timestamp = DateTime.UtcNow,
        //                //        Description = "Email sent successfully."
        //                //    };
        //                //    await SaveLog(log);
        //                //}
        //                //else
        //                //{
        //                var log = new AuditLog()
        //                {
        //                    Username = user.UserName,
        //                    Ip = HttpContext.Connection.RemoteIpAddress == null ? "-" : HttpContext.Connection.RemoteIpAddress.ToString(),
        //                    Service = "Account",
        //                    Action = "Reset Password",
        //                    Status = "error",
        //                    Timestamp = DateTime.UtcNow,
        //                    Description = "Email failed to send."
        //                };
        //                await SaveLog(log);
        //                //}

        //                // Return success message
        //                return Ok(new { message = "Password reset successfully." });
        //            }
        //        }
        //    }

        //    // Return bad request if validation fails
        //    return BadRequest();
        //}

        //// GET: api/auth/myprofile
        //// Endpoint for retrieving the user's profile, requires authentication.
        //[HttpGet]
        //[Authorize]
        //public async Task<IActionResult> MyProfile()
        //{
        //    // Retrieve the username of the authenticated user
        //    var userName = User.FindFirstValue(ClaimTypes.NameIdentifier);

        //    // Retrieve user information based on the username
        //    var user = await _dbContext.Users.FirstOrDefaultAsync(x => x.UserName == userName);

        //    if (user != null)
        //    {
        //        // Return user profile information
        //        return Ok(new { user.FullName, user.AvatarUrl, user.UserName, user.Email, user.Phone, user.IsTwoFactorEnabled });
        //    }

        //    // Return bad request if user information is not found
        //    return BadRequest();
        //}

        //// POST: api/auth/updateprofileimage
        //// Updates the user's profile image.
        //[HttpPost]
        //[RequestSizeLimit(5 * 1024 * 1024)]
        //[Authorize]
        //public async Task<IActionResult> UpdateProfileImage([FromForm] IFormFile image)
        //{
        //    // Retrieve the username of the authenticated user
        //    var userName = User.FindFirstValue(ClaimTypes.NameIdentifier);

        //    // Retrieve user information based on the username
        //    var user = await _dbContext.Users.FirstOrDefaultAsync(x => x.UserName == userName);

        //    if (user != null)
        //    {
        //        if (image != null)
        //        {
        //            // Set the path for storing uploaded images
        //            string path = Path.GetFullPath($"{Directory.GetCurrentDirectory()}/AppFiles/Uploaded/Company/1/Users");

        //            // Upload the new image and handle the result
        //            var res = await FileManager.UploadImageAsync(image, path);
        //            if (res["status"] == "error")
        //            {
        //                return BadRequest(new { message = res.GetValueOrDefault("message") });
        //            }

        //            // Delete the previous profile image if it exists
        //            if (!string.IsNullOrEmpty(user.AvatarUrl))
        //            {
        //                string existingPath = Path.GetFullPath($"{Directory.GetCurrentDirectory()}/AppFiles/Uploaded/Company/1/Users/{user.AvatarUrl}");
        //                FileManager.DeleteFile(existingPath);
        //            }

        //            // Update the user's profile image URL
        //            user.AvatarUrl = res.GetValueOrDefault("message");
        //            await _dbContext.SaveChangesAsync();
        //            return Ok();
        //        }
        //        return BadRequest();
        //    }

        //    return BadRequest();
        //}

        //// GET: api/auth/updatetwofactorauth
        //// Endpoint for changing two factor authentication.
        //[HttpGet]
        //[Authorize]
        //public async Task<IActionResult> UpdateTwoFactorAuth()
        //{
        //    // Retrieve the username of the authenticated user
        //    var userName = User.FindFirstValue(ClaimTypes.NameIdentifier);

        //    // Retrieve user based on the username
        //    var user = await _dbContext.Users.FirstOrDefaultAsync(s => s.UserName == userName);

        //    // Check if the user exists
        //    if (user != null)
        //    {
        //        user.IsTwoFactorEnabled = !user.IsTwoFactorEnabled;
        //        await _dbContext.SaveChangesAsync();
        //        return Ok();
        //    }

        //    // Return bad request if validation fails
        //    return BadRequest();
        //}

        //// POST: api/auth/changepassword
        //// Endpoint for changing user password, requires authentication.
        //[HttpPost]
        //[Authorize]
        //public async Task<IActionResult> ChangePassword(ChangePasswordDTO pass)
        //{
        //    // Retrieve the username of the authenticated user
        //    var userName = User.FindFirstValue(ClaimTypes.NameIdentifier);

        //    // Retrieve user based on the username
        //    var user = await _dbContext.Users.FirstOrDefaultAsync(s => s.UserName == userName);

        //    // Check if the provided model state is valid
        //    if (ModelState.IsValid)
        //    {
        //        // Check if the user exists
        //        if (user != null)
        //        {
        //            // Check if the old password matches
        //            if (user.Password != Encryption.GetMD5(pass.OldPassword))
        //            {
        //                return BadRequest(new { message = "Enter valid old password." });
        //            }
        //            else
        //            {
        //                // Update the user's password
        //                user.Password = Encryption.GetMD5(pass.NewPassword);
        //                _dbContext.Users.Update(user);
        //                _dbContext.SaveChanges();

        //                // Log the password change
        //                var log = new AuditLog()
        //                {
        //                    Username = userName,
        //                    Ip = HttpContext.Connection.RemoteIpAddress == null ? "-" : HttpContext.Connection.RemoteIpAddress.ToString(),
        //                    Service = "Account",
        //                    Action = "Change Password",
        //                    Status = "success",
        //                    Timestamp = DateTime.UtcNow,
        //                    Description = "Password changed successfully."
        //                };
        //                await SaveLog(log);

        //                // Return success message
        //                return Ok(new { message = "Password changed successfully." });
        //            }
        //        }
        //    }

        //    // Return bad request if validation fails
        //    return BadRequest();
        //}

        //// Private Functions
        //private static List<Claim> GetClaims(User user, Role role, string timezone)
        //{
        //    // Initialize a list to store claims
        //    var claims = new List<Claim>() {
        //        new Claim(ClaimTypes.Sid, user.Id.ToString()),
        //        new Claim(ClaimTypes.NameIdentifier, user.UserName),
        //        new Claim(ClaimTypes.Name, user.FullName),
        //        new Claim(ClaimTypes.Role, role.Title),
        //        new Claim("Timezone", timezone)
        //    };

        //    // Add permissions as claims based on the role
        //    if (role.Permissions == "all")
        //    {
        //        // Add all available permissions as claims
        //        //foreach (var permission in Permissions.GetAllPermissions())
        //        //{
        //        //    claims.Add(new Claim(permission, permission));
        //        //}
        //    }
        //    else
        //    {
        //        // Add specific permissions as claims
        //        try
        //        {
        //            var permissions = role.Permissions.Split(',');
        //            foreach (var permission in permissions)
        //            {
        //                claims.Add(new Claim(permission, permission));
        //            }
        //        }
        //        catch
        //        {
        //            // Return null if an error occurs during permission retrieval
        //            return new List<Claim>();
        //        }
        //    }

        //    // Return the list of claims
        //    return claims;
        //}

    }
}
