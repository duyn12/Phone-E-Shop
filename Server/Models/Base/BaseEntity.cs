using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models.Base
{
    public class BaseEntity : IHasId, IHasAudit, IHasSoftDelete
    {
        public BaseEntity()
        {
            this.IsNotDeleted = true;
            this.CreatedAtUtc = DateTime.UtcNow;
        }

        //IHasId
        [Key]        
        public string Id { get; set; }


        //IHasAudit

        public string? CreatedByUserId { get; set; }
        public string? UpdatedByUserId { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedAtUtc { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? UpdatedAtUtc { get; set; }

        [NotMapped]
        public string? CreatedByUserName { get; set; }
        [NotMapped]
        public string? UpdatedByUserName { get; set; }
        [NotMapped]
        public string? CreatedAtString { get; set; }
        [NotMapped]
        public string? UpdatedAtString { get; set; }

        //IHasSoftDelete
        public bool IsNotDeleted { get; set; }
    }
}
