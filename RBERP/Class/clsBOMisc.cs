#region Global Imports
using System;
using System.Configuration;
using System.Data;
using System.Collections.Specialized;
using System.IO;
using System.Text;
using System.Web;
using BookMyShow.CommonLibrary;
using BookMyShow.CommonLibrary.Cryptography;
#endregion

/// <summary>
/// Miscellaneous functions
/// </summary>
public class clsBOMisc
{
    #region Declaration
    const string udcErrorSource = "clsBOMisc";
    #endregion

    #region blnValidateDateRange
    public static bool blnValidateDateRange(System.Web.UI.Page objPage, DateTime dtmFromDate, DateTime dtmTillDate, Int16 intMaxDayDiff)
    {
        if (dtmFromDate >= dtmTillDate || dtmFromDate.AddMinutes((intMaxDayDiff * 24 * 60)) < dtmTillDate)
        {
            objPage.ClientScript.RegisterStartupScript(objPage.GetType(), "DateRange", "<script language=javascript>alert('Report date range can be of minimum 1 minute or maximum " + intMaxDayDiff + " day/s');</script>");
            return false;
        }
        return true;
    }
    #endregion

    #region blnSendForgotEmail
    public static bool blnSendForgotEmail(string strUserName, string strSubject)
    {
        const string udcErrorMethod = "subSendForgotEmail";
        const string strFromAddress = "tickets@BookMyShow.com";
        const string strFromName = "BookMyShow-BackOffice";
        string pstrHostName = clsSettings.Get("Common", "SMTPServer", "");
        string strFileName = System.AppDomain.CurrentDomain.BaseDirectory + "Common\\Templates\\ForgotPassword.tpl";
        string strBody = "";
        bool blnReturn = false;

        if (File.Exists(strFileName) == true)
        {
            StreamReader stmFile = new StreamReader(strFileName);
            strBody = stmFile.ReadToEnd();
            stmFile.Close();
        }

        strBody = strBody.Replace(("{%User_dtmDateTime%}"), DateTime.Now.ToString("d MMMM yyyy"));
        strBody = strBody.Replace(("{%User_strEmail%}"), strUserName);

        try
        {
            clsMail objMail = new clsMail();
            objMail.blnAddTo("Admin", clsSettings.Get("BackOffice", "ForgotMailRequest", "").ToString());
            //objMail.blnAddCC("Viraj", "virajp@Bigtree.in");
            objMail.blnAddFrom(strFromName, strFromAddress);
            blnReturn = objMail.blnSendMail(strSubject, strBody);
        }
        catch (Exception ex)
        {
            clsLog.blnLogError(udcErrorSource, udcErrorMethod, "Error sending mail !!!", ex.ToString());
        }
        return blnReturn;

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

    #region blnSetCookie
    public static bool blnSetCookie(System.Web.UI.Page objPage, string strName, string strValue, bool blnIsSecure)
    {
        try
        {
            objPage.Response.Cookies.Set(new System.Web.HttpCookie(objPage.Server.UrlEncode(strName), objPage.Server.UrlEncode(strValue)));
            //HttpCookie objCookie = new HttpCookie(objPage.Server.UrlEncode(strName), objPage.Server.UrlEncode(strValue));
            //objCookie.Secure = true;
            //objPage.Response.Cookies.Set(objCookie);
            return true;
        }
        catch
        {
        }
        return false;
    }
    #endregion

    #region strGetCookie
    public static string strGetCookie(System.Web.UI.Page objPage, string strName, string strDefaultValue)
    {
        try
        {
            return objPage.Server.UrlDecode(objPage.Request.Cookies.Get(objPage.Server.UrlDecode(strName)).Value);
        }
        catch
        {
        }
        return strDefaultValue;
    }
    #endregion

    #region strGetCookie
    public static string strGetCookie(System.Web.UI.MasterPage objPage, string strName, string strDefaultValue)
    {
        try
        {
            return objPage.Server.UrlDecode(objPage.Request.Cookies.Get(objPage.Server.UrlDecode(strName)).Value);
        }
        catch
        {
        }
        return strDefaultValue;
    }
    #endregion

    #region strDateDisplayFormat
    public static string strDateDisplayFormat()
    {
        return "d-MMM-yyyy 06:00";
    }
    #endregion

    #region strEncryptAdminPassword
    public static string strEncryptAdminPassword(string strPassword)
    {
       //return clsMisc.strMD5(strPassword);
        return clsHashing.strComputeHash(strPassword, udeHashingFunction.MD5);
   }
    #endregion

    //#region strDecryptPassword
    //public static string strDecryptPassword(string strPassword)
    //{
    //    //return clsDES.strDecrypt(strPassword);
    //    //return clsDES.strDecrypt(strPassword,);
    //}
    //#endregion

    #region intValidateBOUser
    public static Int32 intValidateBOUser(System.Web.UI.Page objPage, string strUserId, string strPassword)
    {
        Int32 intReturnValue;
        clsDBEngine objDB = new clsDBEngine();
        ///string strDec = strDecryptPassword(strPassword);
        string strEncPwd = strEncryptAdminPassword(strPassword);
        objDB.blnParamClear();
        objDB.blnParamAdd(ParameterDirection.Input, "@vcUserId", SqlDbType.VarChar, 50, strUserId);
        objDB.blnParamAdd(ParameterDirection.Input, "@vcPassword", SqlDbType.VarChar, 255, strEncPwd);
        objDB.blnParamAdd(ParameterDirection.Input, "@vcIPAddress", SqlDbType.VarChar, 20, objPage.Request.UserHostAddress.ToString());
        objDB.blnParamAdd(ParameterDirection.Output, "@intBOSessId", SqlDbType.Int, 4, 0);
        objDB.blnParamAdd(ParameterDirection.Output, "@vcCompanyCode", SqlDbType.VarChar, 10, "");
        objDB.blnParamAdd(ParameterDirection.Output, "@vcVenueCode", SqlDbType.VarChar, 10, "");
        objDB.blnParamAdd(ParameterDirection.Output, "@vcEventCode", SqlDbType.VarChar, 10, "");
        objDB.blnParamAdd(ParameterDirection.Output, "@vcAppCode", SqlDbType.VarChar, 20, "");
        intReturnValue = objDB.lngExecuteSP("spBOValidateAdmin");
        if (intReturnValue == 0)
        {
            blnSetCookie(objPage, "BO_SessId", objDB.objParamValue("@intBOSessId").ToString(), objPage.Request.IsSecureConnection);
            blnSetCookie(objPage, "BO_CompanyCode", objDB.objParamValue("@vcCompanyCode").ToString(), objPage.Request.IsSecureConnection);
            blnSetCookie(objPage, "BO_VenueCode", objDB.objParamValue("@vcVenueCode").ToString(), objPage.Request.IsSecureConnection);
            blnSetCookie(objPage, "BO_EventCode", objDB.objParamValue("@vcEventCode").ToString(), objPage.Request.IsSecureConnection);
            blnSetCookie(objPage, "BO_AppCode", objDB.objParamValue("@vcAppCode").ToString(), objPage.Request.IsSecureConnection);
            blnSetCookie(objPage, "BO_UserId", strUserId, objPage.Request.IsSecureConnection);
        }
        objDB.blnCloseConnection();
        objDB = null;
        return intReturnValue;
    }
    #endregion

    #region strGetCurrentUser
    public static string strGetCurrentUser(System.Web.UI.Page objPage)
    {
        string strUserName = "";
        try
        {
            strUserName = System.Web.HttpUtility.UrlDecode(objPage.Request.Cookies.Get("mtuData").Value.ToString()).Split(Convert.ToChar("|"))[1];
        }
        catch
        {
        }
        return strUserName;
    }
    #endregion

    #region subExportToExcel
    public static void subExportToExcel(System.Web.UI.Page objPage, DataSet dsData, string strFileName)
    {
        objPage.EnableViewState = false;
        HttpContext.Current.Response.Clear();
        HttpContext.Current.Response.Charset = "";
        HttpContext.Current.Response.Buffer = true;
        HttpContext.Current.Response.ContentType = "application/vnd.ms-excel";
        HttpContext.Current.Response.AddHeader("content-disposition", "attachment;filename=" + strFileName + ".xls");
        System.IO.StringWriter swWriter = new System.IO.StringWriter();
        System.Web.UI.HtmlTextWriter hwHtmlWriter = new System.Web.UI.HtmlTextWriter(swWriter);
        System.Web.UI.WebControls.DataGrid dgData = new System.Web.UI.WebControls.DataGrid();
        dgData.DataSource = dsData.Tables[0];
        dgData.DataBind();
        dgData.RenderControl(hwHtmlWriter);
        HttpContext.Current.Response.Write(swWriter.ToString());
        System.Web.HttpContext.Current.Response.End();
    }
    #endregion

    #region subDisplayError
    public static void subDisplayError(System.Web.UI.Page objPage, string strErrSource, string strErrFunction, string strErrStatement, string strErrMessage)
    {
        const string udcErrorMethod = "subDisplayError";

        try
        {
            string strMessage = "<script language=javascript>alert('Message Type: ERROR \tError Source: " + clsBOMisc.strConvertForJavaScript(clsBOMisc.strConvertForJavaScript(strErrSource)) + "\t\tError Method: " + clsBOMisc.strConvertForJavaScript(strErrFunction) + "\tError Statement: " + clsBOMisc.strConvertForJavaScript(strErrStatement) + "\tError Description: " + clsBOMisc.strConvertForJavaScript(strErrMessage) + "');</script>";
            objPage.ClientScript.RegisterStartupScript(objPage.GetType(), "ErrorMessage", strMessage);
            clsLog.blnLogError(strErrSource, strErrFunction, strErrStatement, strErrMessage);
        }
        catch (Exception ex)
        {
            string strMessage = "<script language=javascript>alert('Message Type: ERROR \tError Source: clsMisc.cs\t\tError Method: " + clsBOMisc.strConvertForJavaScript(udcErrorMethod) + "\tError Statement: ERROR\tError Description: " + clsBOMisc.strConvertForJavaScript(clsBOMisc.strConvertForJavaScript(ex.ToString())) + "');</script>";
            objPage.ClientScript.RegisterStartupScript(objPage.GetType(), "ErrorMessage", strMessage);
            clsLog.blnLogError(udcErrorSource, udcErrorMethod, strErrStatement, ex.ToString()); 
        }
    }
    #endregion 
    
    #region strBORights
    public static string strBORights(System.Web.UI.Page objPage, string strMenuName)
    {
        clsDBEngine objDB = new clsDBEngine();
        string strRights = "";

        objDB.blnParamClear();
        objDB.blnParamAdd(ParameterDirection.Input, "@strUserId", SqlDbType.VarChar, 50, strGetCookie(objPage, "BO_UserId", ""));
        objDB.blnParamAdd(ParameterDirection.Input, "@strModuleName", SqlDbType.VarChar, 20, strMenuName);
        objDB.blnParamAdd(ParameterDirection.Output, "@strRights", SqlDbType.VarChar, 10, "");
        if (objDB.lngExecuteSP("spBOGetRights") == 0)
        {
            strRights = objDB.objParamValue("@strRights").ToString();
        }
        objDB.blnCloseConnection();
        return strRights;
    }
    #endregion

    #region strGetData
    public static string strGetData(string strArrayName, string strSQL)
    {
        clsDBEngine objDB = new clsDBEngine();
        string strLine = "", strReturnData = "";
        int intLineCount = 0;

        strLine = "var " + strArrayName + " = new Array();\n";
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
        else
        {
            clsLog.blnLogError("clsMisc", "strGetData(" + strArrayName + ")", "SQL Failed : " + strSQL, objDB.strErrorMessage);
        }
        objDB.blnCloseConnection();
        return strReturnData;
    }
    #endregion

    #region nvcGetSection
    public static NameValueCollection nvcGetSection(string strSectionName)
    {
        NameValueCollection section = (NameValueCollection)System.Configuration.ConfigurationManager.GetSection(strSectionName);
        return section;
    }
    #endregion
}
