using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Server.Common.AppSettings;
using Server.Helpers;
using Server.Models.Entities;

namespace Server.Data.System
{
    public static class DefaultUser
    {
        public static async Task GenerateAsync(
            UserManager<ApplicationUser>? userManager,
            IOptions<ApplicationConfiguration>? appConfig
            )
        {
            var adminUser = new ApplicationUser
            {
                FullName = appConfig?.Value.DefaultAdminFullName,
                JobTitle = "Developer",
                Address = "VietNam",
                City = "Ho Chi Minh City",
                UserName = appConfig?.Value.DefaultAdminEmail,
                Email = appConfig?.Value.DefaultAdminEmail,
                EmailConfirmed = true,
                IsDefaultAdmin = true,
                PasswordHash = "AQAAAAIAAYagAAAAEPv93sD4WEDe3Na3dPy03xLmAC8GRUSUNSvvVoMeoA/E8cgzQCiJS/Afbl5A17mOtg==",
                PhoneNumber = "+0123456789",
                IsOnline = false,
                IsNotDeleted = true,
                ZipCode = "567",
                Avatar = "",
                CreatedAtUtc = DateTime.UtcNow,
                UpdatedAtUtc = DateTime.UtcNow,
                CreatedAtString = "superadmin",
                UpdatedAtString = "superadmin",
            };

            if (userManager != null)
            {

                var adminPassword = appConfig?.Value.DefaultPassword;
                await userManager.CreateAsync(adminUser, adminPassword ?? string.Empty);
                await userManager.AddToRoleAsync(adminUser, appConfig?.Value.RoleSuperAdmin ?? string.Empty);
            }
        }
    }
}