using System;
using System.IO;
using System.Security.Cryptography;

namespace BookMyShow.CommonLibrary
{

    /// <summary>
    /// Encryption and Decryption using DES algorithm
    /// </summary>
    public class clsBODES
    {

        const string udcErrorSource = "clsBODES";

        /// <summary>
        /// Encrypts the data using 2 "64-bit" keys.
        /// </summary>
        /// <param name="strData">Data to be encrypted</param>
        /// <returns>Encrypted data</returns>
        public static string strEncrypt(string strData, string strKey1, string strKey2)
        {

            const string udcErrorMethod = "strEncrypt(string)";
            string strReturnData = "";

            try
            {
                MemoryStream ms = new MemoryStream();
                DESCryptoServiceProvider objKey = new DESCryptoServiceProvider();
                //string strKey1 = clsSettings.Get("Security", "Key1", "FIRSTKEY");
                //string strKey2 = clsSettings.Get("Security", "Key2", "SECONDKEY");

                objKey.Key = objLockKey(strKey1);
                objKey.IV = objLockKey(strKey2);

                CryptoStream encStream = new CryptoStream(ms, objKey.CreateEncryptor(), CryptoStreamMode.Write);
                StreamWriter sw = new StreamWriter(encStream);
                sw.WriteLine(strData);
                sw.Close();
                encStream.Close();

                byte[] bytData = ms.ToArray();

                foreach (byte bytChar in bytData)
                {
                    strReturnData += bytChar.ToString().PadLeft(3, Convert.ToChar("0"));
                }
                ms.Close();

            }
            catch (Exception ex)
            {
                clsLog.blnLogError(udcErrorSource, udcErrorMethod, "strEncrypt('" + strData + "');", ex.Message.ToString());
            }

            return strReturnData;
        }

        /// <summary>
        /// Decrypts the data which was encrypted.
        /// </summary>
        /// <param name="strData">Data to decrypt</param>
        /// <returns>Decrypted data</returns>
        public static string strDecrypt(string strData, string strKey1, string strKey2)
        {

            const string udcErrorMethod = "strDecrypt(string)";
            string strReturnData = "";

            try
            {

                DESCryptoServiceProvider objKey = new DESCryptoServiceProvider();
                //string strKey1 = clsSettings.Get("Security", "Key1", "FIRSTKEY");
                //string strKey2 = clsSettings.Get("Security", "Key2", "SECONDKEY");

                objKey.Key = objLockKey(strKey1);
                objKey.IV = objLockKey(strKey2);

                Int16 intLength = Convert.ToInt16((strData.Length / 3));
                byte[] bytData = new byte[intLength];

                for (Int16 intCount = 0; intCount < intLength; intCount++)
                {
                    string strChar = strData.Substring((intCount * 3), 3);
                    bytData[intCount] = Convert.ToByte(strChar);
                }
                MemoryStream ms = new MemoryStream(bytData);

                CryptoStream encStream = new CryptoStream(ms, objKey.CreateDecryptor(), CryptoStreamMode.Read);
                StreamReader sr = new StreamReader(encStream);
                strReturnData = sr.ReadLine();
                sr.Close();
                encStream.Close();
                ms.Close();
            }
            catch (Exception ex)
            {
                clsLog.blnLogError(udcErrorSource, udcErrorMethod, "strDecrypt('" + strData + "')", ex.Message.ToString());
            }

            return strReturnData;

        }

        /// <summary>
        /// Method to convert string into byte to be used for encryption / decryption keys
        /// </summary>
        /// <param name="strPassword">8 character code to be used as key</param>
        /// <returns>Byte array which can be used as key</returns>
        private static byte[] objLockKey(string strPassword)
        {

            const string udcErrorMethod = "objLockKey(string)";
            byte[] objKey = new byte[strPassword.Length];

            try
            {
                const int intKeyLength = 8;
                strPassword = strPassword.PadRight(intKeyLength, Convert.ToChar(".")).Substring(0, intKeyLength);
                for (int intCount = 0; intCount < strPassword.Length; intCount++)
                {
                    objKey[intCount] = Convert.ToByte(Convert.ToChar(strPassword.Substring(intCount, 1)));
                }
            }
            catch (Exception ex)
            {
                clsLog.blnLogError(udcErrorSource, udcErrorMethod, "objLockKey('" + strPassword + "')", ex.Message.ToString());
            }

            return objKey;

        }
    }

}
