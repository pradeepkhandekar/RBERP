using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;

namespace BackOffice.Class
{
    public class clsHandler : IHttpHandler
    {

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
            //System.Web.HttpContext.Current.Response.Flush();
            System.Web.HttpContext.Current.ApplicationInstance.CompleteRequest();//.Response.End();
        }
        #endregion


        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}