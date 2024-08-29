using Microsoft.EntityFrameworkCore;
using Server.Models.Base;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Server.Models.Entities;

[Index("RoleId", Name = "IX_Users_RoleId")]
[Index("Email", Name = "UQ_Users_Email", IsUnique = true)]
[Index("UserName", Name = "UQ_Users_UserName", IsUnique = true)]
public partial class User : BaseEntity
{
    public User() : base() { 
    }
    public required int RoleId { get; set; }

    [Required]
    [StringLength(150)]
    public required string FullName { get; set; }

    [Required]
    [StringLength(100)]
    public required string UserName { get; set; }

    [Required]
    [StringLength(150)]
    public required string Email { get; set; }

    [Required]
    [StringLength(300)]
    public required string Password { get; set; }

    [StringLength(20)]
    public string? Phone { get; set; }

    [StringLength(300)]
    public string? AvatarUrl { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime? LastLogin { get; set; }

    public bool? IsOnline { get; set; }

    public bool IsActive { get; set; } = false;

    public bool IsTwoFactorEnabled { get; set; } = false;

    [ForeignKey("RoleId")]
    [InverseProperty("Users")]
    public virtual Role? Role { get; set; }

    [JsonIgnore]
    [InverseProperty("User")]
    public virtual ICollection<UserToken> UserTokens { get; set; } = new List<UserToken>();

}
