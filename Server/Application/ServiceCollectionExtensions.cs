using Microsoft.AspNetCore.Identity;
using Server.Infrastructures.Emails;
using Server.Models.Entities;
namespace Server.Application
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddAllCustomServices(this IServiceCollection services)
        {
            services.AddTransient<IEmailSender<ApplicationUser>, SMTPEmailService>();
            services.AddScoped<SMTPEmailService>();
            return services;
        }
    }
}
