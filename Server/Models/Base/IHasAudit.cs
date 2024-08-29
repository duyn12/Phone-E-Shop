using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models.Base
{
    public interface IHasAudit
    {
        int? CreatedByUserId { get; set; }
        DateTime? CreatedAtUtc { get; set; }
        int? UpdatedByUserId { get; set; }
        DateTime? UpdatedAtUtc { get; set; }



        //not mapped



        [NotMapped]
        string? CreatedByUserName { get; set; }
        [NotMapped]
        string? UpdatedByUserName { get; set; }
        [NotMapped]
        string? CreatedAtString { get; set; }
        [NotMapped]
        string? UpdatedAtString { get; set; }
    }
}
