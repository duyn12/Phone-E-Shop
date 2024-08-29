using System.Security.Cryptography;
using System.Text;

namespace Server.Helpers
{
    public class Encryption
    {
        public static string GetMD5(string str)
        {
            // Create an instance of the MD5 algorithm
            using var md5 = MD5.Create();

            // Convert the input string to bytes using UTF-8 encoding
            byte[] fromData = Encoding.UTF8.GetBytes(str);

            // Compute the MD5 hash of the byte data
            byte[] targetData = md5.ComputeHash(fromData);

            // Convert the MD5 hash bytes to a hexadecimal string representation
            string byte2String = String.Empty;
            for (int i = 0; i < targetData.Length; i++)
            {
                // Convert each byte to a two-digit hexadecimal representation and append to the result string
                byte2String += targetData[i].ToString("x2");
            }

            // Return the computed MD5 hash as a string
            return byte2String;
        }
    }
}
