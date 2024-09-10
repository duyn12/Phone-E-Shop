using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Server.Common.AppSettings;

namespace Server.Data.System
{
    public static class DefaultRole
    {
        public static async Task GenerateAsync(
            RoleManager<IdentityRole>? roleManager,
            IOptions<ApplicationConfiguration>? appConfig
            )
        {
            if (roleManager != null)
            {
                await roleManager.CreateAsync(new IdentityRole(appConfig?.Value.RoleSuperAdmin ?? string.Empty));

            }
        }
    }
}
