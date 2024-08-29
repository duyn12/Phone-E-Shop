using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Server.Models.Entities;

public partial class Role
{
    [Key]
    public int Id { get; set; }

    [Required]
    [StringLength(150)]
    public string Title { get; set; }

    [StringLength(500)]
    public string Description { get; set; }

    [Required]
    public string Permissions { get; set; }

    [Required]
    [StringLength(100)]
    public string DefaultHome { get; set; }

    [StringLength(100)]
    public string UpdatedBy { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime? UpdatedAt { get; set; }

    [JsonIgnore]
    [InverseProperty("Role")]
    public virtual ICollection<User> Users { get; set; } = new List<User>();
}
