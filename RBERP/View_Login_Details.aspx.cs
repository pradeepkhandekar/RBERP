using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;


namespace RBERP
{
    public partial class View_Login_Details : System.Web.UI.Page
    {

        double tot_no_files_bh = 0, tot_sanction_amt = 0, tot_disburesd_amt = 0;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                if (Convert.ToString(Request.QueryString["type"]) == "BH")
                {
                    Fill_Grid();
                }

            }
        }

        protected void grdDetails_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow | e.Row.RowType == DataControlRowType.Separator)
            {
                //HyperLink hpname = e.Row.FindControl("hpname") as HyperLink;
                //HyperLink hptfiles = e.Row.FindControl("hptfiles") as HyperLink;


                //hpname.Attributes["onclick"] = String.Format("return ShowForm('{0}','{1}','{2}','{3}','{4}');", e.Row.Cells[5].Text, txtfromdt.Text, txttodt.Text, "BH", "0");
                //hptfiles.Attributes["onclick"] = String.Format("return ShowForm_login('{0}','{1}','{2}','{3}','{4}');", e.Row.Cells[5].Text, txtfromdt.Text, txttodt.Text, "BH", "0");


                // e.Row.Cells[0].Text = Convert.ToString(Convert.ToUInt32(e.Row.RowIndex + 1));
                tot_no_files_bh += Convert.ToInt32(DataBinder.Eval(e.Row.DataItem, "login_amt"));
                tot_sanction_amt += Convert.ToInt32(DataBinder.Eval(e.Row.DataItem, "sanction_amt"));
                tot_disburesd_amt += Convert.ToInt32(DataBinder.Eval(e.Row.DataItem, "disbursed_amt"));

                e.Row.Cells[6].Text = Convert.ToDouble(DataBinder.Eval(e.Row.DataItem, "login_amt")).ToString("#,##0");
                e.Row.Cells[7].Text = Convert.ToDouble(DataBinder.Eval(e.Row.DataItem, "sanction_amt")).ToString("#,##0");
                e.Row.Cells[8].Text = Convert.ToDouble(DataBinder.Eval(e.Row.DataItem, "disbursed_amt")).ToString("#,##0");



            }
            else if (e.Row.RowType == DataControlRowType.Footer)
            {
                e.Row.Cells[0].Text = "Totals:";


                e.Row.Cells[6].Text = tot_no_files_bh.ToString("#,##0");
                e.Row.Cells[7].Text = tot_sanction_amt.ToString("#,##0");
                e.Row.Cells[8].Text = tot_disburesd_amt.ToString("#,##0");




                e.Row.Font.Bold = true;
            }
        }

        public void Fill_Grid()
        {
            try
            {
                string[] param1 = new string[6];
                param1[0] = "fdate";
                param1[1] = Convert.ToString(Request.QueryString["fdate"]);
                param1[2] = "tdate";
                param1[3] = Convert.ToString(Request.QueryString["tdate"]);
                param1[4] = "Reporting_emp";
                param1[5] = Convert.ToString(Request.QueryString["emp_code"]);
                //param1[5] = "RB40000043";
                CommanDataLoad.Load_Gridview(grdDetails, "usp_load_File_Detail", "1", "admin_dashboard_sales_report", param1);
            }

            catch
            {
                throw;
            }
            finally
            {

            }
        }

    }

}