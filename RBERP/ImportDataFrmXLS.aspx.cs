using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data.OleDb;
using System.Data;

namespace RBERP
{
    public partial class ImportDataFrmXLS : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void ImportFromExcel(object sender, EventArgs e)
        {
            string sCon = ClsConnection.Connection();
            SqlConnection con1 = new SqlConnection(sCon);
            //con1.Open();
            //using (SqlCommand cmd = new SqlCommand("usp_del_empDetails", con1))
            //{
            //    cmd.CommandType = CommandType.StoredProcedure;
            //    //  con.Open();
            //    cmd.ExecuteNonQuery();
            //}
            //con1.Close();

            // CHECK IF A FILE HAS BEEN SELECTED.
            if ((FileUpload.HasFile))
            {

                if (!Convert.IsDBNull(FileUpload.PostedFile) &
                    FileUpload.PostedFile.ContentLength > 0)
                {

                    //FIRST, SAVE THE SELECTED FILE IN THE ROOT DIRECTORY.
                    string StrName = Request.Cookies["empcode"].Value.ToString() +"-"+ DateTime.Now.ToString().Replace("/", "-").Replace(" ", "-").Replace(":", "-");

                    FileUpload.SaveAs(Server.MapPath(".") + "\\exceluploaded\\"+ StrName + FileUpload.FileName);

                    SqlBulkCopy oSqlBulk = null;

                    // SET A CONNECTION WITH THE EXCEL FILE.
                    OleDbConnection myExcelConn = new OleDbConnection
                        ("Provider=Microsoft.ACE.OLEDB.12.0; " +
                            "Data Source=" + Server.MapPath(".") + "\\exceluploaded\\" + StrName + FileUpload.FileName +
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
                        var str = "";
                       // objBulkReader.Read();
                        //while (objBulkReader.Read())
                        //{
                        //    if (objBulkReader["Name"].ToString() != "")
                        //    {
                        //       str  = objBulkReader["Name"].ToString();
                        //    }
                        //    //if (objBulkReader["EmpName"].ToString() != "")
                        //    //{
                        //    //    txtname.Text = objBulkReader["EmpName"].ToString();
                        //    //}
                        //    //if (objBulkReader["MobileNumber"].ToString() != "")
                        //    //{
                        //    //    txtmobno.Text = objBulkReader["MobileNumber"].ToString();
                        //    //}
                        //    //if (objBulkReader["Address"].ToString() != "")
                        //    //{
                        //    //    txtaddress.Text = objBulkReader["Address"].ToString();
                        //    //}
                        //}

                        // SET THE CONNECTION STRING.
                        //string sCon = "server=49.50.77.98,1433\\DBServer;database=RupeeBoss;uid=rb;password=Kotak@123;";

                     
                       // sCon= "server=10.0.0.220\\DBServer;database=RupeeBoss;uid=rupeeboss;password=boss@rupee;";
                       // sCon = "server=49.50.77.98,1433\\DBServer;database=RupeeBoss;uid=rb;password=Kotak@123;";
                        using (con1 = new SqlConnection(sCon))
                        {
                            con1.Open();
                            oSqlBulk = new SqlBulkCopy(con1);
                            using (SqlCommand cmd = new SqlCommand("usp_del_empDetails", con1))
                            {
                                cmd.CommandType = CommandType.StoredProcedure;
                                //  con.Open();
                                cmd.ExecuteNonQuery();
                            }

                            // FINALLY, LOAD DATA INTO THE DATABASE TABLE.
                           
                            oSqlBulk.DestinationTableName = "EmpDetails"; // TABLE NAME.


                        

                            oSqlBulk.WriteToServer(objBulkReader);

                            //SqlCommand cmd = new SqlCommand();
                            //cmd.CommandType = CommandType.StoredProcedure;
                            //cmd.CommandText = "usp_updt_cityIds";

                            //cmd.EndExecuteNonQuery();



                            using (SqlCommand cmd = new SqlCommand("usp_updt_cityIds_newR", con1))
                            {
                                cmd.CommandType = CommandType.StoredProcedure;
                                SqlParameter sqlparam = new SqlParameter();
                                sqlparam = new SqlParameter("@empCode", Request.Cookies["empcode"].Value.ToString());
                                

                                cmd.Parameters.Add(sqlparam);

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