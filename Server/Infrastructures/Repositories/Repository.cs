using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Server.Data;
using Server.Infrastructures.Repositories.Interface;
using Server.Models.Base;
using System.Security.Claims;

namespace Server.Infrastructures.Repositories
{
    public class Repository<T> : IRepository<T> where T : class, IHasId, IHasAudit, IHasSoftDelete
    {
        protected readonly ApplicationDbContext _context;
        protected readonly IHttpContextAccessor _httpContextAccessor;
        protected readonly IAuditColumnTransformer _auditColumnTransformer;
        protected readonly string _userId = string.Empty;

        public Repository(
            ApplicationDbContext context,
            IHttpContextAccessor httpContextAccessor,
            IAuditColumnTransformer auditColumnTransformer)
        {
            _context = context;
            _httpContextAccessor = httpContextAccessor;
            _auditColumnTransformer = auditColumnTransformer;
            _userId = GetUserId(_httpContextAccessor);
        }

        // lấy userId từ claim
        private static string GetUserId(IHttpContextAccessor httpContextAccessor)
        {
            return httpContextAccessor.HttpContext?.User?.FindFirstValue(ClaimTypes.NameIdentifier) ?? string.Empty;
        }
       
        // lấy tất cả dữ liệu
        public virtual IQueryable<T> GetAllArchive()
        {
            return _context.Set<T>()
                .Where(x => x.IsNotDeleted == true)
                .AsNoTracking();
        }
        // lấy tất cả dữ liệu không xoá mềm
        public virtual IQueryable<T> GetAll()
        {
            return _context.Set<T>()
                .Where(x => x.IsNotDeleted == false)
                .AsNoTracking();
        }

        public virtual async Task<T?> GetByIdAsync(string? id)
        {
            if (string.IsNullOrEmpty(id))
            {
                throw new Exception("Unable to process, id is null");
            }

            var entity = await _context.Set<T>()
                .FirstOrDefaultAsync(x => x.Id == id);

            if (entity != null)
            {
                await _auditColumnTransformer.TransformAsync(entity, _context);
            }

            return entity;
        }

        public virtual async Task<T?> GetFirstAsync()
        {
            var entity = await _context.Set<T>()
                .FirstOrDefaultAsync();

            if (entity != null)
            {
                await _auditColumnTransformer.TransformAsync(entity, _context);
            }

            return entity;
        }

        public virtual async Task AddAsync(T? entity)
        {
            if (entity != null)
            {
                if (entity is IHasAudit auditEntity && !string.IsNullOrEmpty(_userId))
                {
                    auditEntity.CreatedByUserId = _userId;
                }
                _context.Set<T>().Add(entity);
                await _context.SaveChangesAsync();
            }
            else
            {
                throw new Exception("Unable to process, entity is null");
            }
        }

        public virtual async Task UpdateAsync(T? entity)
        {
            if (entity != null)
            {
                if (entity is IHasAudit auditEntity && !string.IsNullOrEmpty(_userId))
                {
                    auditEntity.UpdatedByUserId = _userId;
                }
                if (entity is IHasAudit auditedEntity)
                {
                    auditedEntity.UpdatedAtUtc = DateTime.Now;
                }
                _context.Set<T>().Update(entity);
                await _context.SaveChangesAsync();

            }
            else
            {
                throw new Exception("Unable to process, entity is null");
            }
        }

        public virtual async Task DeleteAsync(string? id)
        {
            if (string.IsNullOrEmpty(id))
            {
                throw new Exception("Unable to process, id is null");
            }

            var entity = await _context.Set<T>()
                .FirstOrDefaultAsync(x => x.Id == id);

            if (entity != null)
            {

                if (entity is IHasAudit auditEntity && !string.IsNullOrEmpty(_userId))
                {
                    auditEntity.UpdatedByUserId = _userId;
                }
                if (entity is IHasAudit auditedEntity)
                {
                    auditedEntity.UpdatedAtUtc = DateTime.Now;
                }

                if (entity is IHasSoftDelete softDeleteEntity)
                {
                    softDeleteEntity.IsNotDeleted = false;
                    _context.Entry(entity).State = EntityState.Modified;
                }
                else
                {
                    _context.Set<T>().Remove(entity);
                }

                await _context.SaveChangesAsync();
            }
        }
    }
}
