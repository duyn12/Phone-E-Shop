﻿using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Server.Common.AppSettings;
using Server.Models.Entities;

namespace Server.Data.System
{
    public static class DefaultUser
    {
        public static async Task GenerateAsync(
            UserManager<ApplicationUser>? userManager,
            IOptions<ApplicationConfiguration>? appConfig,
            IFileImageService? fileImageService
            )
        {
            if (companyService != null)
            {
                var defaultCompany = await companyService.GetDefaultCompanyAsync();

                if (defaultCompany != null)
                {

                    var adminUser = new ApplicationUser
                    {
                        UserName = appConfig?.Value.DefaultAdminEmail,
                        Email = appConfig?.Value.DefaultAdminEmail,
                        FullName = appConfig?.Value.DefaultAdminFullName,
                        EmailConfirmed = true,
                        IsDefaultAdmin = true,
                        PasswordHash = "AQAAAAIAAYagAAAAEPv93sD4WEDe3Na3dPy03xLmAC8GRUSUNSvvVoMeoA/E8cgzQCiJS/Afbl5A17mOtg=="
                    };

                    if (userManager != null)
                    {

                        var adminPassword = appConfig?.Value.DefaultPassword;
                        await userManager.CreateAsync(adminUser, adminPassword ?? string.Empty);
                        await userManager.AddToRoleAsync(adminUser, appConfig?.Value.RoleInternalName ?? string.Empty);

                        var avatarPath = Path.Combine("wwwroot", "default-avatar.png");
                        using (var stream = File.OpenRead(avatarPath))
                        {
                            var file = new FormFile(stream, 0, stream.Length, Path.GetFileName(stream.Name), Path.GetFileName(stream.Name))
                            {
                                Headers = new HeaderDictionary(),
                                ContentType = "image/png"
                            };

                            if (fileImageService != null)
                            {
                                var avatarId = await fileImageService.UploadImageAsync(file);
                                adminUser.Avatar = avatarId.ToString();
                                await userManager.UpdateAsync(adminUser);

                            }
                        }

                    }

                }

            }
        }
    }
}