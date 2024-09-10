namespace Server.Common.AppSettings
{
    public class ApplicationConfiguration
    {
        public string AppName { get; set; } = string.Empty;
        public bool IsDemoVersion { get; set; } = false;
        public bool IsDevelopment { get; set; } = true;
        public string DefaultAdminEmail { get; set; } = string.Empty;
        public string DefaultAdminFullName { get; set; } = string.Empty;
        public string DefaultPassword { get; set; } = string.Empty;
        public bool TwoFactorEnabled { get; set; } = false;
        public bool ExternalLoginEnabled { get; set; } = false;
        public string RoleSuperAdmin { get; set; } = string.Empty;
    }
}
