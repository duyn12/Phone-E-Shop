using System.ComponentModel.DataAnnotations;

namespace Server.DTOs.Auth
{
    public class ForgotPasswordDTO
    {
        [Required]
        public string Email { get; set; }
    }
}
