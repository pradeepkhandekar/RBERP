using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;

public partial class View_Dashboard_Detail : System.Web.UI.Page
{
    int tot_no_files_bh = 0, tot_no_files_pd = 0;
    double tot_login_amt_bh = 0, tot_amt_disbursed_bh = 0, tot_sanction_bh = 0, tot_prev_login_Amt_bh = 0;
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            if (Convert.ToString(Request.QueryString["type"]) == "BH")
            {
                Fill_Grid();
            }
            else
            {
                Fill_Grid_Product();
            }

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
            CommanDataLoad.Load_Gridview(grdDetails, "Usp_sales_report_employee_breakup", "1", "admin_dashboard_sales_report", param1);
        }

        catch
        {
            throw;
        }
        finally
        {

        }
    }

    public void Fill_Grid_Product()
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
            param1[6] = "Product_Id";
            param1[7] = Convert.ToString(Request.QueryString["Product_Id"]);
            //param1[5] = "RB40000043";
            CommanDataLoad.Load_Gridview(grdDetails, "Usp_Sales_report_Product_Detail", "1", "admin_dashboard_sales_report", param1);
        }

        catch
        {
            throw;
        }
        finally
        {

        }
    }


    protected void grdDetails_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow | e.Row.RowType == DataControlRowType.Separator)
        {
            HyperLink hpname = e.Row.FindControl("hpname") as HyperLink;
            HyperLink hptfiles = e.Row.FindControl("hptfiles") as HyperLink;


            hpname.NavigateUrl = "View_Dashboard_Detail.aspx?Emp_Code=" + e.Row.Cells[7].Text + "&fdate=" + Convert.ToString(Request.QueryString["fdate"]) + "&tdate=" + Convert.ToString(Request.QueryString["tdate"]) + "&type=BH";
            hpname.Target = "_Blank";
            //hpname.Attributes["onclick"] = String.Format("return ShowForm('{0}','{1}','{2}','{3}','{4}');", e.Row.Cells[6].Text, Convert.ToString(Request.QueryString["fdate"]), Convert.ToString(Request.QueryString["tdate"]), "BH", "0");
            hptfiles.Attributes["onclick"] = String.Format("return ShowForm_login('{0}','{1}','{2}','{3}','{4}');", e.Row.Cells[7].Text, Convert.ToString(Request.QueryString["fdate"]), Convert.ToString(Request.QueryString["tdate"]), "BH", "0");


            // e.Row.Cells[0].Text = Convert.ToString(Convert.ToUInt32(e.Row.RowIndex + 1));
            //tot_no_files_bh += Convert.ToInt32(DataBinder.Eval(e.Row.DataItem, "tot_no_of_files"));
            tot_no_files_bh += Convert.ToInt32(hptfiles.Text);
            tot_prev_login_Amt_bh += Convert.ToDouble(DataBinder.Eval(e.Row.DataItem, "Prev_Login_Amt"));
            tot_login_amt_bh += Convert.ToDouble(DataBinder.Eval(e.Row.DataItem, "loginamt"));
            tot_amt_disbursed_bh += Convert.ToDouble(DataBinder.Eval(e.Row.DataItem, "DisurbsAmt"));
            tot_sanction_bh += Convert.ToDouble(DataBinder.Eval(e.Row.DataItem, "SanctionAmt"));




        }
        else if (e.Row.RowType == DataControlRowType.Footer)
        {
            e.Row.Cells[0].Text = "Totals:";

            //e.Row.Cells[4].Text = amountTotal.ToString();
            e.Row.Cells[2].Text = tot_no_files_bh.ToString();
            e.Row.Cells[3].Text = tot_prev_login_Amt_bh.ToString();
            e.Row.Cells[4].Text = tot_login_amt_bh.ToString();
            e.Row.Cells[5].Text = tot_sanction_bh.ToString();
            e.Row.Cells[6].Text = tot_amt_disbursed_bh.ToString();



            e.Row.Font.Bold = true;
        }
    }
}