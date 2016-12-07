using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Data.OleDb;

namespace RBERP
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void ImportFromExcel(object sender, EventArgs e)
        {
            // CHECK IF A FILE HAS BEEN SELECTED.
            if ((FileUpload.HasFile))
            {

                if (!Convert.IsDBNull(FileUpload.PostedFile) &
                    FileUpload.PostedFile.ContentLength > 0)
                {

                    //FIRST, SAVE THE SELECTED FILE IN THE ROOT DIRECTORY.
                    FileUpload.SaveAs(Server.MapPath(".") + "\\" + FileUpload.FileName);

                    SqlBulkCopy oSqlBulk = null;

                    // SET A CONNECTION WITH THE EXCEL FILE.
                    OleDbConnection myExcelConn = new OleDbConnection
                        ("Provider=Microsoft.ACE.OLEDB.12.0; " +
                            "Data Source=" + Server.MapPath(".") + "\\" + FileUpload.FileName +
                            ";Extended Properties=Excel 12.0;");
                    try
                    {
                        myExcelConn.Open();

                        // GET DATA FROM EXCEL SHEET.
                        OleDbCommand objOleDB =
                            new OleDbCommand("SELECT *FROM [Sheet1$]", myExcelConn);

                        // READ THE DATA EXTRACTED FROM THE EXCEL FILE.
                        OleDbDataReader objBulkReader = null;
                        objBulkReader = objOleDB.ExecuteReader();

                        objBulkReader.Read();
                        //while (objBulkReader.Read())
                        //{
                        //    if (objBulkReader["EmpCode"].ToString() != "")
                        //    { 
                        //        txtEmpCode.Text  =  objBulkReader["EmpCode"].ToString();
                        //    }
                        //    if (objBulkReader["EmpName"].ToString() != "")
                        //    {
                        //        txtname.Text = objBulkReader["EmpName"].ToString();
                        //    }
                        //    if (objBulkReader["MobileNumber"].ToString() != "")
                        //    {
                        //        txtmobno.Text = objBulkReader["MobileNumber"].ToString();
                        //    }
                        //    if (objBulkReader["Address"].ToString() != "")
                        //    {
                        //        txtaddress.Text = objBulkReader["Address"].ToString();
                        //    }
                        //}

                        // SET THE CONNECTION STRING.
                        string sCon = "server=49.50.77.98,1433\\DBServer;database=RupeeBoss;uid=rb;password=Kotak@123;";

                        using (SqlConnection con = new SqlConnection(sCon))
                        {
                            con.Open();

                            // FINALLY, LOAD DATA INTO THE DATABASE TABLE.
                            oSqlBulk = new SqlBulkCopy(con);
                            oSqlBulk.DestinationTableName = "EmpDetails"; // TABLE NAME.
                            oSqlBulk.WriteToServer(objBulkReader);

                            //SqlCommand cmd = new SqlCommand();
                            //cmd.CommandType = CommandType.StoredProcedure;
                            //cmd.CommandText = "usp_updt_cityIds";

                            //cmd.EndExecuteNonQuery();


                           
                                using (SqlCommand cmd = new SqlCommand("usp_updt_cityIds", con))
                                {
                                    cmd.CommandType = CommandType.StoredProcedure;
                                  //  con.Open();
                                    cmd.ExecuteNonQuery();
                                }

                           

                        }

                        lblConfirm.Text = "DATA IMPORTED SUCCESSFULLY.";
                        lblConfirm.Attributes.Add("style", "color:green");

                    }
                    catch (Exception ex)
                    {

                        lblConfirm.Text = ex.Message;
                        lblConfirm.Attributes.Add("style", "color:red");

                    }
                    finally
                    {
                        // CLEAR.
                        //oSqlBulk.Close();
                        //oSqlBulk = null;
                        myExcelConn.Close();
                        myExcelConn = null;
                    }
                }
            }
        }
    }
}