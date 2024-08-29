using System.Text.RegularExpressions;

namespace Server.Helpers
{
    public class General
    {
        public static bool IsValidEmail(string email)
        {
            // Define a regular expression for a simple email validation
            string pattern = @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";

            // Create a Regex object
            Regex regex = new Regex(pattern);

            // Use the IsMatch method to validate the email address
            return regex.IsMatch(email.ToLower());
        }
        public static string GeneratePasscode(int length)
        {
            // Create a random number generator
            Random random = new Random();

            // Generate a passcode with the specified length
            string passcode = "";
            for (int i = 0; i < length; i++)
            {
                passcode += random.Next(0, 10); // Generates a random digit (0 to 9)
            }

            return passcode;
        }
    }
}
