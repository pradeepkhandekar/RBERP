using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text.RegularExpressions;

namespace RBERP.Class
{
    public class CommonValidation
    {
        public static bool IsValidPositiveInteger(string strIntNo)
        {
            return Regex.IsMatch(strIntNo, @"^\d+$");
        }
        /// <summary>
        /// Check the Positive Number
        /// </summary>
        /// <param name="strIntNo"></param>
        /// <returns></returns>
        public static bool IsValidPositiveNumber(string strIntNo)
        {
            if (strIntNo.Trim().Length == 0)
                return false;
            return Regex.IsMatch(strIntNo, @"^\d*\.?\d*$");
        }
        /// <summary>
        /// Check Valid Mobile number
        /// </summary>
        /// <param name="strIntNo"></param>
        /// <returns></returns>
        public static bool IsValidMobileNumber(string strIntNo)
        {

            return Regex.IsMatch(strIntNo, @"^((\+)?(\d{2}[-]))?(\d{10}){1}?$");
        }
        /// <summary>
        /// Check valid Phone Number
        /// </summary>
        /// <param name="strIntNo"></param>
        /// <returns></returns>
        public static bool IsValidPhoneNumber(string strIntNo)
        {

            return Regex.IsMatch(strIntNo, @"^((\+)?(\d{2})[-])?(([\(])?((\d){3,5})([\)])?[-])|(\d{3,5})(\d{5,8}){1}?$");
        }
        /// <summary>
        /// Check valid Email Id
        /// </summary>
        /// <param name="strIntNo"></param>
        /// <returns></returns>
        public static bool IsValidEmailId(string strIntNo)
        {

            return Regex.IsMatch(strIntNo, @"^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$");
        }
        public static bool IsValidDate(string strDate)
        {
            //DateTime dt;
            //return DateTime.TryParseExact(strDate, "yyyy-MM-dd", CultureInfo.InvariantCulture, DateTimeStyles.None, out dt);
            return Regex.IsMatch(strDate, @"^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$");
        }

        public static bool IsValidAlphabetWithSpace(string _value)
        {
            if (_value == null || _value.Trim().Length == 0)
                return false;
            Regex _rex = new Regex(@"^[a-zA-Z]*$");
            return _rex.IsMatch(_value.Replace(" ", ""));
        }
        public static bool IsValidAlphabetWithOutSpace(string _value)
        {
            if (_value == null || _value.Trim().Length == 0)
                return false;
            Regex _rex = new Regex(@"^[a-zA-Z]*$");
            return _rex.IsMatch(_value);
        }
        public static bool IsValidAddress(string _value)
        {
            if (_value == null)
                return false;
            Regex _rex = new Regex(@"^[a-zA-z]|[a-zA-Z0-9@#$%&,-]");
            return _rex.IsMatch(_value);
        }
        public static bool IsDouble(string strVal)
        {
            bool isVal = true;
            try
            {
                double dt = double.Parse(strVal);
            }
            catch
            {
                isVal = false;
            }

            return isVal;
        }
        public static string GetYYYY_MM_DD(string _date)
        {
            if (_date == null || _date.Trim().Length == 0 || _date.Trim().Length < 10)
                return null;
            string dd = _date.Substring(0, 2);
            string mm = _date.Substring(3, 2);
            string yy = _date.Substring(6, 4);
            return (yy + "-" + mm + "-" + dd);
        }
        public static string GetYYYY_MM_DD(DateTime? _date)
        {
            if (_date == null)
                return null;
            else
                return Convert.ToDateTime(_date).ToString("yyyy-MM-dd");
        }
        public static Int32 ToInt32(string _numberString)
        {
            int number = 0;
            Int32.TryParse(_numberString, out number);
            return number;
        }
        public static DateTime ToDateTime(string _date)
        {
            if (_date == null || _date.Trim().Length == 0 || _date.Trim().Length < 10)
                return new DateTime(1900, 1, 1);
            string dd = _date.Substring(0, 2);
            string mm = _date.Substring(3, 2);
            string yy = _date.Substring(6, 4);
            return new DateTime(Convert.ToInt16(yy), Convert.ToInt16(mm), Convert.ToInt16(dd));
        }
    }
}
