using Server.Data;
using Server.Models.Base;

namespace Server.Infrastructures.Repositories.Interface
{
    public interface IAuditColumnTransformer
    {
        Task TransformAsync(IHasAudit entity, ApplicationDbContext context);
    }
}
