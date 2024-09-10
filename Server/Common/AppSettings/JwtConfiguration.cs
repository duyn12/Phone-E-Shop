﻿namespace Server.Common.AppSettings
{
    public class JwtConfiguration
    {
        public string Audience { get; set; } = string.Empty;
        public string Issuer { get; set; } = string.Empty;
        public string Key { get; set; } = string.Empty;
    }
}
