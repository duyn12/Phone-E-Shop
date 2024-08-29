using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Server.Models.Entities;

namespace Server.Models.Configurations
{
    public class ApplicationUserConfiguration : BaseConfiguration<ApplicationUser>
    {
        public override void Configure(EntityTypeBuilder<ApplicationUser> builder)
        {
            base.Configure(builder);

            builder.Property(c => c.UserName).HasMaxLength(100);
            builder.Property(c => c.NormalizedUserName).HasMaxLength(100);
            builder.Property(c => c.Email).HasMaxLength(100);
            builder.Property(c => c.NormalizedEmail).HasMaxLength(100);
            builder.Property(c => c.FullName).HasMaxLength(100);
            builder.Property(c => c.JobTitle).HasMaxLength(100);
            builder.Property(c => c.Address).HasMaxLength(100);
            builder.Property(c => c.City).HasMaxLength(100);
            builder.Property(c => c.State).HasMaxLength(100);
            builder.Property(c => c.Country).HasMaxLength(100);
            builder.Property(c => c.ZipCode).HasMaxLength(100);
            builder.Property(c => c.PhoneNumber).HasMaxLength(50);
            builder.Property(c => c.Avatar).HasMaxLength(50);

            builder.Property(c => c.IsDefaultAdmin).HasDefaultValue(false);
            builder.Property(c => c.IsOnline).HasDefaultValue(false);
            builder.Property(c => c.IsNotDeleted).HasDefaultValue(true);
        }


    }
}
