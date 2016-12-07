#region Global Imports
using System;
using System.Configuration;
using System.Data;
using System.Collections.Specialized;
using System.IO;
using System.Text;
using System.Web;
using BookMyShow.CommonLibrary;
#endregion


namespace BackOffice.Class
{
    public class clsBoUserData
    {
        #region Declaration
        const string udcErrorSource = "clsBOMisc";
        #endregion

        #region strGetData
      /// <summary>
        ///  Execute the sp and return collection of array the contain companies, cinemas, events and session data for given User
      /// </summary>
      /// <param name="strUserLogin"></param>
      /// <returns></returns>
        public static string strGetData(string strUserLogin)
        {
            clsDBEngine objDB = new clsDBEngine();
            string strSQL = "EXEC spForUserData @strUserLogin = '"+strUserLogin+"'";
            string strLine = "", strReturnData = "";
            int intLineCount = 0;
            string strArrayName = "arrcompanies";
            strLine = "<script type='text/javascript' language='javascript'>";
            strLine += "var "+strArrayName+" = new Array();\n";
            strReturnData += strLine;

            if (objDB.blnOpenResultSet(strSQL) == true)
            {
                while (objDB.blnResultsMoveNextRow() == true)
                {
                    strLine = "";
                    for (int intCount = 0; intCount < objDB.lngResultsNumCols; intCount++)
                    {
                        if (strLine.Length > 0)
                        {
                            strLine += ", ";
                        }
                        string strValue = strConvertForJavaScript(objDB.objResultsValue(intCount).ToString());
                        strLine += "'" + strValue + "'";
                    }
                    if (objDB.lngResultsNumCols > 1)
                    {
                        strLine = strArrayName + "[" + intLineCount + "] = new Array(" + strLine + ");\n";
                    }
                    else
                    {
                        strLine = strArrayName + "[" + intLineCount + "] = " + strLine + ";\n";
                    }
                    strReturnData += strLine;
                    intLineCount++;
                }
            }
            //For Cinema
            if (objDB.blnMoveNextResultSet())
            {
                intLineCount = 0;
                string arrCinema = "arrCinemas";
                strReturnData += "var "+arrCinema+" = new Array();\n";
                while (objDB.blnResultsMoveNextRow() == true)
                {
                    strLine = "";
                    for (int intCount = 0; intCount < objDB.lngResultsNumCols; intCount++)
                    {
                        if (strLine.Length > 0)
                        {
                            strLine += ", ";
                        }
                        string strValue = strConvertForJavaScript(objDB.objResultsValue(intCount).ToString());
                        strLine += "'" + strValue + "'";
                    }
                    if (objDB.lngResultsNumCols > 1)
                    {
                        strLine = arrCinema + "[" + intLineCount + "] = new Array(" + strLine + ");\n";
                    }
                    else
                    {
                        strLine = arrCinema + "[" + intLineCount + "] = " + strLine + ";\n";
                    }
                    strReturnData += strLine;
                    intLineCount++;
                }
            }
            if (objDB.blnMoveNextResultSet())
            {
                intLineCount = 0;
                string arrEvents = "arrEvents";
                strReturnData += "var " + arrEvents + " = new Array();\n";
                while (objDB.blnResultsMoveNextRow() == true)
                {
                    strLine = "";
                    for (int intCount = 0; intCount < objDB.lngResultsNumCols; intCount++)
                    {
                        if (strLine.Length > 0)
                        {
                            strLine += ", ";
                        }
                        string strValue = strConvertForJavaScript(objDB.objResultsValue(intCount).ToString());
                        strLine += "'" + strValue + "'";
                    }
                    if (objDB.lngResultsNumCols > 1)
                    {
                        strLine = arrEvents + "[" + intLineCount + "] = new Array(" + strLine + ");\n";
                    }
                    else
                    {
                        strLine = arrEvents + "[" + intLineCount + "] = " + strLine + ";\n";
                    }
                    strReturnData += strLine;
                    intLineCount++;
                }
            }
            if (objDB.blnMoveNextResultSet())
            {
                intLineCount = 0;
                string arrSession = "arrSessions";
                strReturnData += "var " + arrSession + " = new Array();\n";
                while (objDB.blnResultsMoveNextRow() == true)
                {
                    strLine = "";
                    for (int intCount = 0; intCount < objDB.lngResultsNumCols; intCount++)
                    {
                        if (strLine.Length > 0)
                        {
                            strLine += ", ";
                        }
                        string strValue = strConvertForJavaScript(objDB.objResultsValue(intCount).ToString());
                        strLine += "'" + strValue + "'";
                    }
                    if (objDB.lngResultsNumCols > 1)
                    {
                        strLine = arrSession + "[" + intLineCount + "] = new Array(" + strLine + ");\n";
                    }
                    else
                    {
                        strLine = arrSession + "[" + intLineCount + "] = " + strLine + ";\n";
                    }
                    strReturnData += strLine;
                    intLineCount++;
                }
            }
            else
            {
                clsLog.blnLogError("clsMisc", "strGetData()", "SQL Failed : " + strSQL, objDB.strErrorMessage);
            }
            strReturnData += "</script>";
            objDB.blnCloseConnection();
            return strReturnData;
        }
        #endregion


        #region strConvertForJavaScript
        public static string strConvertForJavaScript(string strData)
        {
            strData = strData.Replace(@"'", @"\'");
            strData = strData.Replace(Convert.ToString(Convert.ToChar(13)), "<BR>");
            strData = strData.Replace(Convert.ToString(Convert.ToChar(10)), "");
            return strData;
        }
        #endregion
    }
}