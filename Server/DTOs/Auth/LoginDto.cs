using System.ComponentModel.DataAnnotations;

namespace Server.DTOs.Auth
{
    public class LoginDTO
    {
        [Required]
        public string Email { get; set; } = string.Empty;

        [Required]
        public string Password { get; set; } = string.Empty;

        public string? PassCode { get; set; }

        public bool IsRemember { get; set; }
    }
}
