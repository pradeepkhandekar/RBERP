using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using BookMyShow.CommonLibrary;
using OfficeOpenXml;
using OfficeOpenXml.Table;
using System.IO;

namespace BackOffice.Class
{
    /// <summary>
    /// Summary description for Handler
    /// </summary>
    public class Handler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            string strFileName = Convert.ToString(context.Request.QueryString["filename"]);
            string strSQL = HttpUtility.UrlDecode(context.Request.QueryString["query"]);                       
            clsDBEngine objDB = new clsDBEngine();
            objDB.blnOpenDataset(strSQL);
            DataTable objDT = objDB.dsData.Tables[0];
            //FileInfo newFile = new FileInfo(strFileName);

            using (ExcelPackage package = new ExcelPackage())
            {
                int intRowCount = objDT.Rows.Count;
                ExcelWorksheet worksheet = package.Workbook.Worksheets.Add("Report");

                //Load the datatable into the sheet, starting from cell A1. Print the column names on row 1
                worksheet.Cells["A1"].LoadFromDataTable(objDT, true, TableStyles.None);

                var dateColumns = from DataColumn d in objDT.Columns
                                  where d.DataType == typeof(DateTime) || d.ColumnName.Contains("Date")
                                  select d.Ordinal + 1;

                foreach (var dc in dateColumns)
                {
                    worksheet.Cells[2, dc, intRowCount + 1, dc].Style.Numberformat.Format = "d-MMM-yyyy  H:m:s";
                }

                ////Format the header for column 1-3
                //using (ExcelRange rng = worksheet.Cells["A1:C1"])
                //{
                //    rng.Style.Font.Bold = true;
                //    rng.Style.Fill.PatternType = ExcelFillStyle.Solid;                      //Set Pattern for the background to Solid
                //    rng.Style.Fill.BackgroundColor.SetColor(Color.FromArgb(79, 129, 189));  //Set color to dark blue
                //    rng.Style.Font.Color.SetColor(Color.White);
                //}

                ////Example how to Format Column 1 as numeric 
                //using (ExcelRange col = ws.Cells[2, 1, 2 + tbl.Rows.Count, 1])
                //{
                //    col.Style.Numberformat.Format = "#,##0.00";
                //    col.Style.HorizontalAlignment = ExcelHorizontalAlignment.Right;
                //}

                //Write it back to the client
                context.Response.ContentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
                context.Response.AddHeader("content-disposition", "attachment;  filename= " + strFileName + ".xlsx");
                context.Response.BinaryWrite(package.GetAsByteArray());
            }
           

            //context.Response.Clear();
            //context.Response.Charset = "";
            //context.Response.Buffer = true;
            //context.Response.ContentType = "application/vnd.ms-excel";
            //context.Response.AddHeader("content-disposition", "attachment;filename=" + strFileName + ".xlsx");
            //System.IO.StringWriter swWriter = new System.IO.StringWriter();
            //System.Web.UI.HtmlTextWriter hwHtmlWriter = new System.Web.UI.HtmlTextWriter(swWriter);
            //System.Web.UI.WebControls.GridView dgData = new System.Web.UI.WebControls.GridView();
            //dgData.DataSource = objDB.dsData;
            //dgData.DataBind();
            //dgData.RenderControl(hwHtmlWriter);
            //context.Response.Write(swWriter.ToString());
            //context.Response.Flush();
            //context.Response.End();         
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}
