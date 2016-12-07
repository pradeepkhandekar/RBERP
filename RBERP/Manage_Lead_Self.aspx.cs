using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Text;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace RBERP
{
    public partial class Manage_Lead_Self : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
          //  Response.Cookies["empcode"].Value = "RB40000401";

            if (!Page.IsPostBack)
            {
                CommanDataLoad.Load_CommanDropDown(ddlStatus, "Select All", "select * from lead_Status_Master order by lead_status asc", "0", "lead_Status_id", "Lead_Status", "Lead_status_Master", "");


                Load_lead_Status();
                Load_Assign_To();
                Load_City();
                Load_Bank();
                BindGrid();
                BindTime();

                //Util.JQueryUtils.RegisterTextBoxForDatePicker(Page, txtfollowup);
                ////RBERP.JQueryUtils.RegisterTextBoxForDatePicker(Page, txtfollowup);
                ////RBERP.JQueryUtils.RegisterTextBoxForDatePicker(Page, txtvfollowupdate);
            }
        }
        protected void BindTime()
        {
            DateTime StartTime = DateTime.ParseExact("00:00", "HH:mm", null);
            DateTime EndTime = DateTime.ParseExact("23:55", "HH:mm", null);
            TimeSpan Interval = new TimeSpan(0, 15, 0);
            ddlvTime.Items.Clear();
           
            while (StartTime <= EndTime)
            {
                ddlvTime.Items.Add(StartTime.ToShortTimeString());
               
                StartTime = StartTime.Add(Interval);
            }
            ddlvTime.Items.Insert(0, new ListItem("--Select--", "-1"));
            
        }

        private void BindGrid()
        {
            string[] param1 = new string[8];
            param1[0] = "empcode";
            // param1[1] = "RB40000401";
            if (Request.QueryString.Count > 0)
            {
                param1[1] = Request.QueryString["emp_code"].ToString();
            }
            else
            {
                param1[1] = Request.Cookies["empcode"].Value.ToString();
            }
     
            param1[2] = "cityid";
            param1[3] = ddlCity.SelectedValue;
            param1[4] = "Lead_Status_id";
            param1[5] = ddlStatus.SelectedValue;
            param1[6] = "Emp_Code";
            param1[7] = ddlEmployee.SelectedValue;
            CommanDataLoad.Load_Gridview(dgManageLeads, "SpDispManageLeadData", "1", "Manage_Leads_self", param1);

        }

        void Load_Bank()
        {
            CommanDataLoad.Load_CommanDropDown(ddlBank, "", "USP_Load_Bank", "1", "Bank_Id", "Bank_Name", "Bank_Master", "");
        }

        void Load_City()
        {
            CommanDataLoad.Load_CommanDropDown(ddlCity, "Select All", "Get_CityState", "1", "City_Id", "City_Name", "Manage_Leads_self", "");
        }
        void Load_Assign_To()
        {
            CommanDataLoad.Load_CommanDropDown(ddlEmployee, "Select All", "select * from dbo.get_child_emp('" + Request.Cookies["empcode"].Value.ToString() + "')   order by name asc", "0", "emp_code", "name", "Manage Lead Self", "");
            CommanDataLoad.Load_CommanDropDown(ddlvAssignTo, "", "select * from dbo.get_child_emp('" + Request.Cookies["empcode"].Value.ToString() + "')   order by name", "0", "emp_code", "name", "Manage Lead Self", "");

        }

        void Load_lead_Status()
        {
            CommanDataLoad.Load_CommanDropDown(ddlvleadstatus, "Select All", "select * from Lead_status_master order by Lead_Status asc", "0", "Lead_status_id", "Lead_Status", "Manage_Leads_self", "");
        }

        public void Bind_Valid_PopUpGrid()
        {

            string[] param1 = new string[2];
            param1[0] = "Lead_ID";
            param1[1] = lblvlid.Text;
            CommanDataLoad.Load_Gridview(dgValidlead, "spdispManageLeadData_history", "1", "Manage_Leads_self", param1);
        }

        public void Clear_data_Valid()
        {
            txtvfollowupdate.Text = "";
            txtvamt.Text = "";
            txtvremark.Text = "";
            ddlvleadstatus.SelectedIndex = 0;
            ddlvAssignTo.SelectedIndex = -1;
            ddlvTime.SelectedIndex = 0;

        }
        protected void btnShow_Click(object sender, EventArgs e)
        {
            BindGrid();
        }
        protected void ddlLeadType_SelectedIndexChanged(object sender, EventArgs e)
        {
            Load_Status();
        }

        protected void Load_Status()
        {
            CommanDataLoad.Load_CommanDropDown(ddlStatus, "Select All", "select * from Lead_status_master order by Lead_Status asc", "0", "Lead_status_id", "Lead_Status", "Manage_Leads_self", "");
        }

        protected void dgValidlead_SelectedIndexChanged(object sender, EventArgs e)
        {

            CommanDataLoad.Load_CommanDropDown(ddlvleadstatus, "", "select * from Lead_status_master order by Lead_Status asc", "0", "Lead_status_id", "Lead_Status", "Manage_Leads_self", "");
            CommanDataLoad.Load_CommanDropDown(ddlvAssignTo, "", "select * from dbo.get_child_emp('" + Request.Cookies["empcode"].Value.ToString() + "')   order by name", "0", "emp_code", "name", "Manage Lead Self", "");

            txtvfollowupdate.Text = DateTime.Now.Date.ToShortDateString();
            txtvamt.Text = dgValidlead.SelectedRow.Cells[2].Text;
            ddlvleadstatus.SelectedValue = dgValidlead.SelectedRow.Cells[6].Text;
            ddlvAssignTo.SelectedValue = dgValidlead.SelectedRow.Cells[7].Text;
            txtvremark.Text = dgValidlead.SelectedRow.Cells[4].Text;
            vleadidhidden.Text = dgValidlead.SelectedRow.Cells[5].Text;
            VPopup(true);

        }

        void VPopup(bool isDisplay)
        {
            StringBuilder builder = new StringBuilder();
            if (isDisplay)
            {
                builder.Append("<script language=JavaScript> ShowLeadPopup(); </script>\n");
                Page.ClientScript.RegisterStartupScript(this.GetType(), "ShowLeadPopup", builder.ToString());
            }
            else
            {
                builder.Append("<script language=JavaScript> HideLeadPopup(); </script>\n");
                Page.ClientScript.RegisterStartupScript(this.GetType(), "HideLeadPopup", builder.ToString());
            }
        }

        protected void btnres_Click(object sender, EventArgs e)
        {
            Clear_data_Valid();
            vleadidhidden.Text = "";
            VPopup(true);
        }
        protected void btnClose_Click(object sender, EventArgs e)
        {
            BindGrid();
        }

        protected void btnupd_Click(object sender, EventArgs e)
        {
            if (txtvamt.Text == "")
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please enter Amount')", true);
                return;
            }

            if (ddlvleadstatus.SelectedValue == "-1")
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Select Lead Status')", true);
                return;
            }
            if ( ddlvTime.SelectedValue == "-1")
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Select FollowUp Time')", true);
                return;
            }

            if (vleadidhidden.Text != "")
            {
                string[] param = new string[18];
                param[0] = "Lead_ID";
                param[1] = lblvlid.Text;
                param[2] = "Followup_date";
                param[3] = txtvfollowupdate.Text;
                param[4] = "Amount";
                param[5] = txtvamt.Text;
                param[6] = "lead_status_id";
                param[7] = ddlvleadstatus.SelectedValue;
                param[8] = "Remark";
                param[9] = txtvremark.Text;
                param[10] = "Lead_data_id";
                param[11] = vleadidhidden.Text;
                param[12] = "Emp_Code";
                param[13] = ddlvAssignTo.SelectedValue;
                param[14] = "Bank_Id";
                param[15] = ddlBank.SelectedValue;
                param[16] = "FollowTime";
                param[17] = ddlvTime.SelectedValue;

                int rowaffected = CommanDataLoad.ExecuteNonQuery("SpUpdLead_Data_History", "1", "Manage_Leads_Self", param);
                if (rowaffected > 0)
                {
                    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Record Updated Successfully')", true);
                    Bind_Valid_PopUpGrid();
                    VPopup(true);
                }
            }
            else
            {
                string[] param = new string[16];
                param[0] = "Lead_ID";
                param[1] = lblvlid.Text;
                param[2] = "Followup_date";
                param[3] = txtvfollowupdate.Text;
                param[4] = "Amount";
                param[5] = txtvamt.Text;
                param[6] = "lead_status_id";
                param[7] = ddlvleadstatus.SelectedValue;
                param[8] = "Remark";
                param[9] = txtvremark.Text;
                param[10] = "Emp_Code";
                param[11] = ddlvAssignTo.SelectedValue;
                param[12] = "Bank_Id";
                param[13] = ddlBank.SelectedValue;
                param[14] = "FollowTime";
                param[15] = ddlvTime.SelectedValue;

                int rowaffected = CommanDataLoad.ExecuteNonQuery("spInsLead_data_History", "1", "Manage_Leads_Self", param);
                if (rowaffected > 0)
                {
                    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Record Saved Successfully')", true);
                    Bind_Valid_PopUpGrid();
                    VPopup(true);
                }
            }


            //string[] param1 = new string[2];
            //param1[0] = "Lead_ID";
            //param1[1] = lblvlid.Text;
            //// CommanDataLoad.Load_Gridview(dgleadHistory, "USpDispManageLeadData_Raw_history", "1", "Manage_Leads_self", param1);
            //CommanDataLoad.Load_Gridview(dgManageLeads, "spdispManageLeadData_history", "1", "Manage_Leads_self", param1);
        }


        protected void dgManageLeads_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            if (e.CommandName == "ShowPopup")
            {

                LinkButton btndetails = (LinkButton)e.CommandSource;
                GridViewRow gvrow = (GridViewRow)btndetails.NamingContainer;
                lblvlid.Text = dgManageLeads.DataKeys[gvrow.RowIndex].Value.ToString();
                ddlvAssignTo.SelectedValue = gvrow.Cells[2].Text;
                Bind_Valid_PopUpGrid();
                VPopup(true);

            }
        }

        protected void dgManageLeads_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {

            dgManageLeads.PageIndex = e.NewPageIndex;
            BindGrid();
        }

    }
}