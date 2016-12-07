using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

namespace RBERP
{
    public partial class Lead_Assign_Telecaller : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
             // Session["empcode"] = "RB40000401";
                CommanDataLoad.Load_CommanDropDown(ddltelecaller, "", "select * from employee_master where reporting_emp='"+ Request.Cookies["empcode"].Value.ToString() +"' order by emp_name asc", "0", "emp_code", "emp_name", "Employee_Master", "");
                CommanDataLoad.Load_CommanDropDown(ddlCity, "", "Get_CityState", "1", "City_Id", "City_Name", "City_Master", "");
                CommanDataLoad.Load_CommanDropDown(ddlstatus, "", "select * from lead_Status_Master order by lead_status asc", "0", "lead_Status_id", "Lead_Status", "Lead_status_Master", "");
                BindGrid();
            }
        }
        public void BindGrid()
        {
            string[] param = new string[6];
            param[0] = "empcode";
            param[1] = Request.Cookies["empcode"].Value.ToString();
            param[2] = "cityid";
            param[3] = ddlCity.SelectedValue;
            param[4] = "@Status_Id";
            param[5] = ddlstatus.SelectedValue;
            //param[1] = "RB40000401";
            CommanDataLoad.Load_Gridview(dglead, "SpDispLeads_Telecaller", "1", "Lead_Assign_Telecaller", param);
        }

        protected void btnsubmit_Click(object sender, EventArgs e)
        {
            int cnt = 0;
            if (ddltelecaller.SelectedItem.Text == "Select One")
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please select Telecaller')", true);
                return;
            }
            
            for (int i = 0; i < dglead.Rows.Count; i++)
            {
                // Access the CheckBox
               
                CheckBox cb = (CheckBox)dglead.Rows[i].FindControl("chkselect");
                if (cb.Checked == true)
                {
                    cnt = cnt + 1;

                    int rowaffected = CommanDataLoad.ExecuteNonQuery("update lead_data set emp_code='" + ddltelecaller.SelectedValue + "',lead_date=getdate() where lead_id=" + dglead.Rows[i].Cells[1].Text + "", "0", "Lead Assing Telecaller", "");

                }
            }
            if(cnt==0)
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Select at least one Lead..')", true);
            }
            else
            {
            ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Record Saved Successfully')", true);
            BindGrid();
            }

        }

        protected void dglead_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            dglead.PageIndex = e.NewPageIndex;
            BindGrid();
        }

        protected void btndelete_Click(object sender, EventArgs e)
        {
            int cnt = 0;
            for (int i = 0; i < dglead.Rows.Count; i++)
            {
                // Access the CheckBox

                CheckBox cb = (CheckBox)dglead.Rows[i].FindControl("chkselect");
                if (cb.Checked == true)
                {
                    cnt = cnt + 1;

                    int rowaffected = CommanDataLoad.ExecuteNonQuery("update lead_data set Is_Delete='Y' where lead_id=" + dglead.Rows[i].Cells[1].Text + "", "0", "Lead Assing Telecaller", "");

                }
            }
            if (cnt == 0)
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Select at least one Lead to Delete..')", true);
            }
            else
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Record Saved Successfully')", true);
                BindGrid();
            }
        }

        protected void ddlCity_SelectedIndexChanged(object sender, EventArgs e)
        {
            BindGrid();
        }

        protected void ddlstatus_SelectedIndexChanged(object sender, EventArgs e)
        {
            BindGrid();
        }
    }
}