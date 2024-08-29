using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using Server.Models.Base;

namespace Server.Models.Configurations
{
    public abstract class BaseConfiguration<TEntity> : IEntityTypeConfiguration<TEntity> where TEntity : class, IHasId, IHasAudit, IHasSoftDelete
    {
        public virtual void Configure(EntityTypeBuilder<TEntity> builder)
        {
            builder.HasKey(e => e.Id);
            ConfigureBaseProperties(builder);
        }

        protected virtual void ConfigureBaseProperties(EntityTypeBuilder<TEntity> builder)
        {
            builder.Property(e => e.Id).HasMaxLength(50);
            builder.Property(e => e.CreatedByUserId).HasMaxLength(50);

            builder.Property(e => e.CreatedAtUtc)
                .HasColumnType("datetime")
                .HasConversion(
                    v => v.HasValue ? v.Value.ToUniversalTime() : (DateTime?)null,
                    v => v.HasValue ? DateTime.SpecifyKind(v.Value, DateTimeKind.Utc) : DateTime.MinValue
                );

            builder.Property(e => e.UpdatedByUserId).HasMaxLength(50);

            builder.Property(e => e.UpdatedAtUtc)
                .HasColumnType("datetime")
                .HasConversion(
                    v => v.HasValue ? v.Value.ToUniversalTime() : (DateTime?)null,
                    v => v.HasValue ? DateTime.SpecifyKind(v.Value, DateTimeKind.Utc) : DateTime.MinValue
                );

            builder.Property(e => e.IsNotDeleted).HasDefaultValue(true);
        }
    }
}
