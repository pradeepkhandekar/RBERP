using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Globalization;

namespace RBERP
{
    public partial class Admin_Dashboard_Sales : System.Web.UI.Page
    {
        int tot_no_files_bh = 0, tot_no_files_pd = 0, tot_no_files_lc=0;
        double tot_login_amt_bh = 0, tot_amt_disbursed_bh = 0, tot_sanction_bh = 0, tot_Prev_Login_Amt_bh = 0;
        double tot_login_amt_pd = 0, tot_amt_disbursed_pd = 0, tot_sanction_pd = 0, tot_Prev_Login_Amt_pd = 0;
        double tot_login_amt_lc = 0, tot_amt_disbursed_lc = 0, tot_sanction_lc = 0, tot_Prev_Login_Amt_lc=0;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                //Session["empcode"] = "RB40000043";
               
                pnlBH.Visible = false;
                pnlProduct.Visible = false;

                var firstDayOfMonth = new DateTime(DateTime.Now.Year, DateTime.Now.Month, 1);
                // txtfromdt.Text = DateTime.Now.AddDays(-30).ToShortDateString();
                txtfromdt.Text = firstDayOfMonth.ToShortDateString();

                txttodt.Text = DateTime.Now.ToShortDateString();
                Bind_Employee_Sales();
                Bind_Product_Sales();
                Bind_Location_Sales();
                if (grdSales.Rows.Count > 0)
                {
                    pnlBH.Visible = true;
                }
                if (grdproduct.Rows.Count > 0)
                {
                    pnlProduct.Visible = true;
                }
                if (grdlocation.Rows.Count > 0)
                {
                    pnlloc.Visible = true;
                }
            }
        }
        public void Bind_Location_Sales()
        {

            string[] param1 = new string[6];
            param1[0] = "fdate";
            param1[1] = txtfromdt.Text;
            param1[2] = "tdate";
            param1[3] = txttodt.Text;
            param1[4] = "Reporting_emp";
            param1[5] = Request.Cookies["empcode"].Value.ToString();
            //  param1[5] = Session["empcode"].ToString();
            //param1[5] = "RB40000043";

            CommanDataLoad.Load_Gridview(grdlocation, "usp_Sales_report_Location", "1", "admin_dashboard_sales_report", param1);
        }

        protected void grdlocation_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow | e.Row.RowType == DataControlRowType.Separator)
            {
                //  HyperLink hppname = e.Row.FindControl("hppname") as HyperLink;



                // hppname.Attributes["onclick"] = String.Format("return ShowForm('{0}','{1}','{2}','{3}','{4}');", Session["empcode"].ToString(), txtfromdt.Text, txttodt.Text, "P", e.Row.Cells[5].Text);

                // e.Row.Cells[0].Text = Convert.ToString(Convert.ToUInt32(e.Row.RowIndex + 1));
                tot_no_files_lc += Convert.ToInt32(DataBinder.Eval(e.Row.DataItem, "no_of_files"));
                tot_login_amt_lc += Convert.ToDouble(DataBinder.Eval(e.Row.DataItem, "loginamt"));
                tot_amt_disbursed_lc += Convert.ToDouble(DataBinder.Eval(e.Row.DataItem, "DisurbsAmt"));
                tot_sanction_lc += Convert.ToDouble(DataBinder.Eval(e.Row.DataItem, "SanctionAmt"));

                e.Row.Cells[2].Text = Convert.ToDouble(DataBinder.Eval(e.Row.DataItem, "loginamt")).ToString("#,##0");
                e.Row.Cells[3].Text = Convert.ToDouble(DataBinder.Eval(e.Row.DataItem, "SanctionAmt")).ToString("#,##0");
                e.Row.Cells[4].Text = Convert.ToDouble(DataBinder.Eval(e.Row.DataItem, "DisurbsAmt")).ToString("#,##0");



            }
            else if (e.Row.RowType == DataControlRowType.Footer)
            {
                e.Row.Cells[0].Text = "Totals:";

                //e.Row.Cells[4].Text = amountTotal.ToString();
                e.Row.Cells[1].Text = tot_no_files_lc.ToString();
                e.Row.Cells[2].Text = tot_login_amt_lc.ToString("#,##0");
                e.Row.Cells[4].Text = tot_amt_disbursed_lc.ToString("#,##0");
                e.Row.Cells[3].Text = tot_sanction_lc.ToString("#,##0");



                e.Row.Font.Bold = true;
            }

        }

    

    public void Bind_Product_Sales()
        {

            string[] param1 = new string[6];
            param1[0] = "fdate";
            param1[1] = txtfromdt.Text;
            param1[2] = "tdate";
            param1[3] = txttodt.Text;
            param1[4] = "Reporting_emp";
           param1[5] = Request.Cookies["empcode"].Value.ToString(); 
            //  param1[5] = Session["empcode"].ToString();
            //param1[5] = "RB40000043";

            CommanDataLoad.Load_Gridview(grdproduct, "Usp_Sales_report_Product", "1", "admin_dashboard_sales_report", param1);
        }
        public void Bind_Employee_Sales()
        {

            string[] param1 = new string[6];
            param1[0] = "fdate";
            param1[1] = txtfromdt.Text;
            param1[2] = "tdate";
            param1[3] = txttodt.Text;
            param1[4] = "Reporting_emp";
             param1[5] = Request.Cookies["empcode"].Value.ToString();
           // param1[5] = Session["empcode"].ToString();
            //param1[5] = "RB40000043";
            CommanDataLoad.Load_Gridview(grdSales, "usp_sales_report_employee", "1", "admin_dashboard_sales_report", param1);
        }
        protected void btngenerate_Click(object sender, EventArgs e)
        {
            Bind_Employee_Sales();
            Bind_Product_Sales();
            Bind_Location_Sales();
            if (grdSales.Rows.Count > 0)
            {
                pnlBH.Visible = true;
            }
            if (grdproduct.Rows.Count > 0)
            {
                pnlProduct.Visible = true;
            }
            if (grdlocation.Rows.Count > 0)
            {
                pnlloc.Visible = true;
            }
        }

        protected void grdSales_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow | e.Row.RowType == DataControlRowType.Separator)
            {
                HyperLink hpname = e.Row.FindControl("hpname") as HyperLink;
                HyperLink hptfiles = e.Row.FindControl("hptfiles") as HyperLink;
               
                hpname.NavigateUrl = "View_Dashboard_Detail.aspx?Emp_Code=" + e.Row.Cells[6].Text + "&fdate=" + txtfromdt.Text + "&tdate=" + txttodt.Text + "&type=BH";
                hpname.Target = "_Blank";
               // hpname.Attributes["onclick"] = String.Format("return ShowForm('{0}','{1}','{2}','{3}','{4}');", e.Row.Cells[5].Text, txtfromdt.Text, txttodt.Text,"BH","0");
                hptfiles.Attributes["onclick"] = String.Format("return ShowForm_login('{0}','{1}','{2}','{3}','{4}');", e.Row.Cells[6].Text, txtfromdt.Text, txttodt.Text, "BH", "0");


                // e.Row.Cells[0].Text = Convert.ToString(Convert.ToUInt32(e.Row.RowIndex + 1));
                tot_no_files_bh += Convert.ToInt32(DataBinder.Eval(e.Row.DataItem, "tot_no_of_files"));
                tot_login_amt_bh += Convert.ToDouble(DataBinder.Eval(e.Row.DataItem, "loginamt"));
                tot_amt_disbursed_bh += Convert.ToDouble(DataBinder.Eval(e.Row.DataItem, "DisurbsAmt"));
                tot_sanction_bh += Convert.ToDouble(DataBinder.Eval(e.Row.DataItem, "SanctionAmt"));
                tot_Prev_Login_Amt_bh += Convert.ToDouble(DataBinder.Eval(e.Row.DataItem, "Prev_Login_Amt"));

                e.Row.Cells[2].Text = Convert.ToDouble(DataBinder.Eval(e.Row.DataItem, "Prev_Login_Amt")).ToString("#,##0");
                e.Row.Cells[3].Text = Convert.ToDouble(DataBinder.Eval(e.Row.DataItem, "loginamt")).ToString("#,##0");
                e.Row.Cells[4].Text = Convert.ToDouble(DataBinder.Eval(e.Row.DataItem, "SanctionAmt")).ToString("#,##0");
                e.Row.Cells[5].Text = Convert.ToDouble(DataBinder.Eval(e.Row.DataItem, "DisurbsAmt")).ToString("#,##0");



            }
            else if (e.Row.RowType == DataControlRowType.Footer)
            {
                e.Row.Cells[0].Text = "Totals:";

                //e.Row.Cells[4].Text = amountTotal.ToString();
                e.Row.Cells[1].Text = tot_no_files_bh.ToString();
                e.Row.Cells[2].Text = tot_Prev_Login_Amt_bh.ToString("#,##0");
                e.Row.Cells[3].Text =tot_login_amt_bh.ToString("#,##0");


                e.Row.Cells[4].Text =tot_sanction_bh.ToString("#,##0");
                e.Row.Cells[5].Text = tot_amt_disbursed_bh.ToString("#,##0");



                e.Row.Font.Bold = true;
            }


        }

        protected void grdproduct_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow | e.Row.RowType == DataControlRowType.Separator)
            {
              //  HyperLink hppname = e.Row.FindControl("hppname") as HyperLink;


              
               // hppname.Attributes["onclick"] = String.Format("return ShowForm('{0}','{1}','{2}','{3}','{4}');", Session["empcode"].ToString(), txtfromdt.Text, txttodt.Text, "P", e.Row.Cells[5].Text);

                // e.Row.Cells[0].Text = Convert.ToString(Convert.ToUInt32(e.Row.RowIndex + 1));
                tot_no_files_pd += Convert.ToInt32(DataBinder.Eval(e.Row.DataItem, "no_of_files"));
                tot_login_amt_pd += Convert.ToDouble(DataBinder.Eval(e.Row.DataItem, "loginamt"));
                tot_amt_disbursed_pd += Convert.ToDouble(DataBinder.Eval(e.Row.DataItem, "DisurbsAmt"));
                tot_sanction_pd += Convert.ToDouble(DataBinder.Eval(e.Row.DataItem, "SanctionAmt"));
               // tot_Prev_Login_Amt_pd += Convert.ToDouble(DataBinder.Eval(e.Row.DataItem, "Prev_Login_Amt"));

               // e.Row.Cells[2].Text = Convert.ToDouble(DataBinder.Eval(e.Row.DataItem, "Prev_Login_Amt")).ToString("#,##0");
                e.Row.Cells[2].Text=Convert.ToDouble( DataBinder.Eval(e.Row.DataItem, "loginamt")).ToString("#,##0");
                e.Row.Cells[3].Text = Convert.ToDouble(DataBinder.Eval(e.Row.DataItem, "SanctionAmt")).ToString("#,##0");
                e.Row.Cells[4].Text = Convert.ToDouble(DataBinder.Eval(e.Row.DataItem, "DisurbsAmt")).ToString("#,##0");



            }
            else if (e.Row.RowType == DataControlRowType.Footer)
            {
                e.Row.Cells[0].Text = "Totals:";

                //e.Row.Cells[4].Text = amountTotal.ToString();
                e.Row.Cells[1].Text = tot_no_files_pd.ToString();
               // e.Row.Cells[2].Text = tot_Prev_Login_Amt_pd.ToString("#,##0");
                e.Row.Cells[2].Text = tot_login_amt_pd.ToString("#,##0");
                e.Row.Cells[4].Text = tot_amt_disbursed_pd.ToString("#,##0");
                e.Row.Cells[3].Text = tot_sanction_pd.ToString("#,##0");



                e.Row.Font.Bold = true;
            }

        }

    }
}