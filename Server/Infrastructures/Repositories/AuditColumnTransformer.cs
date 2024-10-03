using Microsoft.AspNetCore.Identity;
using Server.Data;
using Server.Infrastructures.Repositories.Interface;
using Server.Models.Base;
using Server.Models.Entities;

namespace Server.Infrastructures.Repositories
{
    public class AuditColumnTransformer : IAuditColumnTransformer
    {
        public readonly UserManager<ApplicationUser> _userManager;
        public AuditColumnTransformer(UserManager<ApplicationUser> userManager) {
            _userManager = userManager;
        }
        public async Task TransformAsync(IHasAudit entity, ApplicationDbContext context)
        {
            if (entity != null)
            {
                if (!String.IsNullOrEmpty(entity?.CreatedByUserId) && entity?.CreatedAtUtc is not null)
                {
                    var user = await _userManager.FindByIdAsync(entity.CreatedByUserId);
                    entity.CreatedByUserName = user?.UserName ?? "";

                    var localDateTime = ConvertUtcToTimeZone(entity.CreatedAtUtc.Value, "SE Asia Standard Time");
                    entity.CreatedAtString = localDateTime.ToString("dd MM yyyy | HH:mm");
                }

                if (!String.IsNullOrEmpty(entity?.UpdatedByUserId) && entity?.UpdatedAtUtc is not null)
                {
                    var user = await _userManager.FindByIdAsync(entity.UpdatedByUserId);
                    entity.UpdatedByUserName = user?.UserName ?? "";

                    var localDateTime = ConvertUtcToTimeZone(entity.UpdatedAtUtc.Value, "SE Asia Standard Time");
                    entity.UpdatedAtString = localDateTime.ToString("dd MM yyyy | HH:mm");
                }

            }
        }

        private DateTime ConvertUtcToTimeZone(DateTime utcDateTime, string timeZoneId)
        {
            TimeZoneInfo timeZone = TimeZoneInfo.FindSystemTimeZoneById(timeZoneId);
            return TimeZoneInfo.ConvertTimeFromUtc(utcDateTime, timeZone);
        }
    }
}
