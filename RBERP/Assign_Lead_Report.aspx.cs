using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace RBERP
{
    public partial class Assign_Lead_Report : System.Web.UI.Page
    {
        Int32 tot_Lead_cnt = 0, Tot_Followup_Cnt = 0, Pending_cnt = 0, Status_Cnt = 0,tot_demo_cnt=0;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
                
            {
                //Panel1.Visible = false;
                //Panel2.Visible = false;
               // txtfromdt.Text = DateTime.Now.AddDays(-1).ToShortDateString();

                txtfromdt.Text = DateTime.Now.ToShortDateString();
                txttodt.Text = DateTime.Now.ToShortDateString();
            }
        }

        protected void btnShow_Click(object sender, EventArgs e)
        {
            Load_Grid();
        }
        protected void Load_Grid()
        {
            if (txtfromdt.Text == "")
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Select From Date')", true);
                return;
            }
            if (txttodt.Text == "")
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Select To Date')", true);
                return;
            }

            string[] param = new string[6];
            param[0] = "FromDt";
            param[1] = txtfromdt.Text;
            param[2] = "ToDt";
            param[3] = txttodt.Text;
            param[4] = "Emp_Code";
          param[5] = Request.Cookies["empcode"].Value.ToString();
            //param[5] = "RB40000043";

            CommanDataLoad.Load_Gridview(GridView1, "USP_Load_Lead_Count_Report_new", "1", "Assign Lead Report", param);
            CommanDataLoad.Load_Gridview(GridView2, "USP_Lead_Count_Report_StatusWise", "1", "Assign Lead Report", param);
            if(GridView1.Rows.Count>0 && GridView2.Rows.Count>0)
            {
                //Panel1.Visible = true;
                //Panel2.Visible = true;
            }
        }
        protected void ClearContols()
        {
            txtfromdt.Text = "";
            txttodt.Text = "";
        }

        protected void btnReset_Click(object sender, EventArgs e)
        {
            ClearContols();
        }

        protected void GridView1_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow | e.Row.RowType == DataControlRowType.Separator)
            {
                HyperLink hpLeadCnt = e.Row.FindControl("hpLeadCnt") as HyperLink;
                hpLeadCnt.Attributes["onclick"] = String.Format("return ShowForm('{0}','{1}','{2}','{3}');", e.Row.Cells[1].Text, txtfromdt.Text, txttodt.Text, "Total_Lead");

                HyperLink hpCalledCnt = e.Row.FindControl("hpCalledCnt") as HyperLink;
                hpCalledCnt.Attributes["onclick"] = String.Format("return ShowForm('{0}','{1}','{2}','{3}');", e.Row.Cells[1].Text, txtfromdt.Text, txttodt.Text, "Called_Lead");
                
                HyperLink hpUncalledCnt = e.Row.FindControl("hpUncalledCnt") as HyperLink;
                hpUncalledCnt.Attributes["onclick"] = String.Format("return ShowForm('{0}','{1}','{2}','{3}');", e.Row.Cells[1].Text, txtfromdt.Text, txttodt.Text, "Uncalled_Lead");

                HyperLink hpdemoCnt = e.Row.FindControl("hpdemoCnt") as HyperLink;
                hpdemoCnt.Attributes["onclick"] = String.Format("return ShowForm('{0}','{1}','{2}','{3}');", e.Row.Cells[1].Text, txtfromdt.Text, txttodt.Text, "Demo");


                tot_Lead_cnt += Convert.ToInt32(DataBinder.Eval(e.Row.DataItem, "Lead_Count"));
                Tot_Followup_Cnt += Convert.ToInt32(DataBinder.Eval(e.Row.DataItem, "Called_Count"));
                Pending_cnt += Convert.ToInt32(DataBinder.Eval(e.Row.DataItem, "uncalled_Count"));
                tot_demo_cnt += Convert.ToInt32(DataBinder.Eval(e.Row.DataItem, "demo_given"));
                
            }

            else if (e.Row.RowType == DataControlRowType.Footer)
            {
                e.Row.Cells[2].Text = "Totals:";

                //e.Row.Cells[4].Text = amountTotal.ToString();
                e.Row.Cells[3].Text = tot_Lead_cnt.ToString();
                e.Row.Cells[4].Text = Tot_Followup_Cnt.ToString();

                e.Row.Cells[5].Text = Pending_cnt.ToString();
                e.Row.Cells[6].Text = tot_demo_cnt.ToString();



                e.Row.Font.Bold = true;
            }
        }

        protected void GridView2_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow | e.Row.RowType == DataControlRowType.Separator)
            {
                HyperLink hpLeadCnt1 = e.Row.FindControl("hpLeadCnt1") as HyperLink;
                hpLeadCnt1.Attributes["onclick"] = String.Format("return ShowForm('{0}','{1}','{2}','{3}','{4}');", Request.Cookies["empcode"].Value.ToString() , txtfromdt.Text, txttodt.Text, "ST", e.Row.Cells[3].Text);//St=statuswise




                Status_Cnt += Convert.ToInt32(DataBinder.Eval(e.Row.DataItem, "lead_cnt"));
             
            }

            else if (e.Row.RowType == DataControlRowType.Footer)
            {
                e.Row.Cells[1].Text = "Totals:";

                //e.Row.Cells[4].Text = amountTotal.ToString();
                e.Row.Cells[2].Text = Status_Cnt.ToString();
               



                e.Row.Font.Bold = true;
            }
        }
    }
}