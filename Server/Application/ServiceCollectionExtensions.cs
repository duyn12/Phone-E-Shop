using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Server.Infrastructures.Emails;
using Server.Models.Entities;
namespace Server.Application
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddAllCustomServices(this IServiceCollection services)
        {
            services.AddTransient<IEmailSender<ApplicationUser>, SMTPEmailService>();
            return services;
        }
    }
}
