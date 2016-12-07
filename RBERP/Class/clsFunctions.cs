using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Data;
using System.Data.OleDb;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Net;
using BackOffice.clsTrans;


namespace BackOffice.common
{
    public static class clsFunctions
    {
        
        public static SqlConnection mySqlConnection = new SqlConnection(@"Data Source=192.168.1.41;Initial Catalog=BMS_20111112;Persist Security Info=True;User ID=backupbms11;Password=backupbms1234");


        public static DataTable FillDataTable(string strQry)
        {
            try
            {
                if (mySqlConnection.State == ConnectionState.Closed)
                    mySqlConnection.Open();

                SqlDataAdapter Adpt = new SqlDataAdapter(strQry, mySqlConnection);
                DataTable dt = new DataTable();
                Adpt.Fill(dt);
                return dt;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public static DataSet FillDS(string strQry)
        {
            try
            {
                if (mySqlConnection.State == ConnectionState.Closed)
                    mySqlConnection.Open();

                SqlDataAdapter Adpt = new SqlDataAdapter(strQry, mySqlConnection);
                DataSet ds = new DataSet();
                Adpt.Fill(ds);
                return ds;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public static string ReadUrl(string strURLPath)
        {
            try
            {
                using (WebClient client = new WebClient())
                {
                    return client.DownloadString(AppDomain.CurrentDomain.BaseDirectory + strURLPath);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        public static string strConvertForJavaScript(string strData)
        {
            strData = strData.Replace(@"'", @"\'");
            strData = strData.Replace(Convert.ToString(Convert.ToChar(13)), "\t");
            strData = strData.Replace(Convert.ToString(Convert.ToChar(10)), "");
            return strData;
        }

        public static void ShowError(Page objPage, Exception ex)
        {
            string strMessage = String.Format("<script language=javascript>alert('{0}');</script>", clsFunctions.strConvertForJavaScript(ex.ToString()));
            objPage.ClientScript.RegisterStartupScript(objPage.GetType(), "ErrorMessage", strMessage);
        }


        public static void ShowMessage(Page objPage, string strMsg)
        {
            string strMessage = String.Format("<script language=javascript>alert('{0}');</script>", clsFunctions.strConvertForJavaScript(strMsg));
            objPage.ClientScript.RegisterStartupScript(objPage.GetType(), "ErrorMessage", strMessage);
        }

        public static string GetString(Page objPage, string str)
        {
            string result = string.Empty;
            foreach (var c in str)
            {
                int ascii = (int)c;
                if (!((ascii >= 48 && ascii <= 57) || ascii == 44 || ascii == 46))
                    result += c;
            }
            return result;
        }

        public static string GetNum(Page objPage, string str)
        {
            string result = string.Empty;
            foreach (var c in str)
            {
                int ascii = (int)c;
                if (((ascii >= 48 && ascii <= 57) || ascii == 44 || ascii == 46))
                    result += c;
            }
            return result;
        }

        public static string CancelTrans(System.Web.UI.Page objPage)
        {
            try
            {
                wsTrans objTrans = new wsTrans() { Url = "http://test.bookmyshow.com/services/wsTrans.asmx" };
                udsTransData objCancelTrans = objTrans.objExecute(strGetCookie(objPage, "appCode", "null"), strGetCookie(objPage, "venueCode", "null"), Convert.ToInt32(clsFunctions.strGetCookie(objPage, "transId", "0")), "CancelTrans", "866", "", "", "", "", "", "", "", "", "");

                string strCancelTrans = objCancelTrans.strData;
                string strException = objCancelTrans.strException;
                objPage.Response.Cookies["transId"].Expires = DateTime.Now.AddYears(-30);
                if (strException != "" || strException != null)
                    return strException;
                else
                    return "True";
            }
            catch (Exception)
            {

                throw;
            }
        }

        #region blnSetCookie
        public static bool blnSetCookie(System.Web.UI.Page objPage, string strName, string strValue)
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

        #region blnClearCookie
        public static bool blnClearCookie(System.Web.UI.Page objPage, string strName)
        {
            try
            {
                objPage.Response.Cookies[strName].Expires = DateTime.Now.AddYears(-30);
                return true;
            }
            catch
            {
            }
            return false;
        }

        #endregion

        public static bool blnClearAllCookies(System.Web.UI.Page objPage)
        {
            try
            {
                if (strGetCookie(objPage, "transId", "0") != "0")
                    CancelTrans(objPage);
                objPage.Response.Cookies["appCode"].Expires = DateTime.Now.AddYears(-30);
                objPage.Response.Cookies["venueCode"].Expires = DateTime.Now.AddYears(-30);
                objPage.Response.Cookies["sessionId"].Expires = DateTime.Now.AddYears(-30);
                objPage.Response.Cookies["sId"].Expires = DateTime.Now.AddYears(-30);
                objPage.Response.Cookies["qty"].Expires = DateTime.Now.AddYears(-30);
                objPage.Response.Cookies["cinemaId"].Expires = DateTime.Now.AddYears(-30);
                objPage.Response.Cookies["transId"].Expires = DateTime.Now.AddYears(-30);
                return true;
            }
            catch
            {
            }
            return false;

        }
        #region subExportToExcel
        public static void subExportToExcel(Page objPage, DataTable dtData, string strFileName)
        {
            objPage.EnableViewState = false;
            HttpContext.Current.Response.Clear();
            HttpContext.Current.Response.Charset = "";
            HttpContext.Current.Response.Buffer = true;
            HttpContext.Current.Response.ContentType = "application/vnd.ms-excel";
            HttpContext.Current.Response.AddHeader("content-disposition", "attachment;filename=" + strFileName + ".Xls");
            System.IO.StringWriter swWriter = new System.IO.StringWriter();
            System.Web.UI.HtmlTextWriter hwHtmlWriter = new System.Web.UI.HtmlTextWriter(swWriter);
            System.Web.UI.WebControls.DataGrid dgData = new System.Web.UI.WebControls.DataGrid();
            dgData.DataSource = dtData;
            dgData.DataBind();
            dgData.RenderControl(hwHtmlWriter);
            HttpContext.Current.Response.Write(swWriter.ToString());
            System.Web.HttpContext.Current.Response.End();
        }
        #endregion
    }
}