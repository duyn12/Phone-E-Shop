using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Server.Common.AppSettings;
using Server.Data.System;
using Server.Models.Entities;

namespace Server.Data
{
    public static class DbInitializer
    {
        public static async Task InitializeAsync(
            IServiceProvider services
            )
        {

            var context = services.GetRequiredService<ApplicationDbContext>();
            if (context.Users.Any())
            {
                return;
            }
            var appConfig = services.GetRequiredService<IOptions<ApplicationConfiguration>>();
            var userManager = services.GetRequiredService<UserManager<ApplicationUser>>();
            var roleManager = services.GetRequiredService<RoleManager<IdentityRole>>();
            await DefaultRole.GenerateAsync(roleManager, appConfig);
            await DefaultUser.GenerateAsync(userManager, appConfig);
        }

        public static DateTime[] GetRandomDays(int year, int month, int count)
        {
            Random random = new Random();
            int daysInMonth = DateTime.DaysInMonth(year, month);
            DateTime[] dates = new DateTime[Math.Min(count, daysInMonth)];

            for (int i = 0; i < dates.Length; i++)
            {
                dates[i] = DateTime.MinValue;
            }

            for (int i = 0; i < count; i++)
            {
                int day = random.Next(1, daysInMonth + 1);
                DateTime date = new DateTime(year, month, day);

                while (Array.IndexOf(dates, date) != -1)
                {
                    day = random.Next(1, daysInMonth + 1);
                    date = new DateTime(year, month, day);
                }

                dates[i] = date;
            }

            return dates;
        }

        public static string GetRandomString(string[] strings, Random random)
        {
            int randomIndex = random.Next(0, strings.Length);
            return strings[randomIndex];
        }
        public static double GetRandomValue(double[] targetValues, Random random)
        {
            int randomIndex = random.Next(0, targetValues.Length);
            return targetValues[randomIndex];

        }
        public static int GetRandomValue(int[] targetValues, Random random)
        {
            int randomIndex = random.Next(0, targetValues.Length);
            return targetValues[randomIndex];

        }
    }
}
