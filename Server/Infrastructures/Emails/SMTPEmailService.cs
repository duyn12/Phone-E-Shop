using MailKit.Net.Smtp;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.Extensions.Options;
using MimeKit;
using Server.Common.AppSettings;
using Server.Models.Entities;

namespace Server.Infrastructures.Emails
{
    public class SMTPEmailService : IEmailSender<ApplicationUser>
    {
        private readonly SmtpConfiguration _smtpConfiguration;

        public SMTPEmailService(IOptions<SmtpConfiguration> smtpConfiguration)
        {
            _smtpConfiguration = smtpConfiguration.Value;
        }

        public Task SendConfirmationLinkAsync(ApplicationUser user, string email, string confirmationLink)
        {
            throw new NotImplementedException();
        }

        public async Task SendEmailAsync(string email, string subject, string htmlMessage)
        {
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress(_smtpConfiguration.UserName, _smtpConfiguration.UserName));
            message.To.Add(new MailboxAddress("", email));
            message.Subject = subject;

            var bodyBuilder = new BodyBuilder
            {
                HtmlBody = htmlMessage
            };

            message.Body = bodyBuilder.ToMessageBody();

            using var client = new SmtpClient();
            await client.ConnectAsync(_smtpConfiguration.Host, _smtpConfiguration.Port, true);
            await client.AuthenticateAsync(_smtpConfiguration.UserName, _smtpConfiguration.Password);
            await client.SendAsync(message);
            await client.DisconnectAsync(true);
        }

        public Task SendPasswordResetCodeAsync(ApplicationUser user, string email, string resetCode)
        {
            throw new NotImplementedException();
        }

        public Task SendPasswordResetLinkAsync(ApplicationUser user, string email, string resetLink)
        {
            throw new NotImplementedException();
        }
    }
}
