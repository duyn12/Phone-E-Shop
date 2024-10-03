using Server.Models.Base;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models.Entities;

public class AuditLog : BaseEntity
{
    [Required]
    [StringLength(100)]
    public string Username { get; set; }

    [Required]
    [StringLength(45)]
    public string Ip { get; set; }

    [Required]
    [StringLength(100)]
    public string Service { get; set; }

    [Required]
    [StringLength(100)]
    public string Action { get; set; }

    [Required]
    [StringLength(50)]
    public string Status { get; set; }

    public string Description { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime Timestamp { get; set; }
}
