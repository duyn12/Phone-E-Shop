using Microsoft.AspNetCore.Mvc;
using Server.Data;
using Server.Models.Entities;
using System.Security.Claims;
using System.Text.Json;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseController : ControllerBase
    {
        protected readonly ApplicationDbContext _dbContext;
        protected AppSetting _appSetting;
        public BaseController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        //protected AppSetting GetAppSetting()
        //{
        //    _appSetting ??= _dbContext.AppSettings.FirstOrDefault(x => x.Id == 1);
        //    return _appSetting;
        //}

        //protected int GetUserId()
        //{
        //    return Convert.ToInt32(User.FindFirstValue(ClaimTypes.Sid));
        //}

        protected async Task SaveLog(AuditLog log)
        {
            try
            {
                _dbContext.AuditLogs.Add(log);
                await _dbContext.SaveChangesAsync();
            }
            catch { }
        }
        // Localize
        //protected string Localize(string culture, string name)
        //{
        //    var rsc = _dbContext.StringResources.FirstOrDefault(x => x.LanguageName.Equals(culture) && x.Name.ToLower().Equals(name.ToLower()));
        //    if (rsc == null)
        //    {
        //        return name;
        //    }
        //    return rsc.Value;
        //}

        // Helper method to handle server errors
        protected IActionResult HandleServerError(Exception ex, string message)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, message);
        }

        protected async Task<IActionResult> HandleServerError(Exception ex, string message, string service, string action)
        {
            var userName = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var innerException = ex.InnerException?.Message != null ? $"{ex.InnerException.Message}" : string.Empty;

            AuditLog log = new()
            {
                Username = !string.IsNullOrEmpty(userName) ? userName : string.Empty,
                Ip = HttpContext.Connection.RemoteIpAddress == null ? "-" : HttpContext.Connection.RemoteIpAddress.ToString(),
                Service = service,
                Action = action,
                Status = "error",
                Timestamp = DateTime.UtcNow,
                Description = JsonSerializer.Serialize(new { Exception = ex.Message, InnerException = innerException }),
            };

            try
            {
                //await SaveLog(log);
            }
            catch { }

            return StatusCode(StatusCodes.Status500InternalServerError, message);
        }
    }
}
