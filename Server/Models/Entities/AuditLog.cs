using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models.Entities;

public partial class AuditLog
{
    [Key]
    public int Id { get; set; }

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
