using Microsoft.EntityFrameworkCore;
using Server.Models.Base;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Server.Models.Entities;

[Index("UserId", Name = "IX_UserTokens_UserId")]
public partial class UserToken : BaseEntity
{
    public UserToken() : base() {
    }
    public int? UserId { get; set; }

    [Required]
    [StringLength(150)]
    public required string TokenType { get; set; }

    [Required]
    public required string TokenText { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime? TokenExpiry { get; set; }

    [JsonIgnore]
    [ForeignKey("UserId")]
    [InverseProperty("UserTokens")]
    public virtual User? User { get; set; }
}
