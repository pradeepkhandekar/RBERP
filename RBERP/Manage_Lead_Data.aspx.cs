using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
namespace RBERP
{
    public partial class Manage_Lead_Data : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if(!IsPostBack)
            {
                
                lblvlid.Text = Request.QueryString["leadid"].ToString();
                Load_Bank();
                Load_Assign_To();
                Load_lead_Status();
                Bind_Valid_PopUpGrid();
                BindTime();
                txtvfollowupdate.Text = DateTime.Now.Date.ToShortDateString();

                string[] Param = new string[2];
                Param[0] = "empcode";
                Param[1] = Request.Cookies["empcode"].Value.ToString();
                CommanDataLoad.Load_CommanDropDown(ddlproduct, "", "Get_Product", "1", "product_id", "product_name", "Manage Lead Data", "");
                CommanDataLoad.Load_CommanDropDown(ddlbroker, "", "sp_load_broker", "1", "broker_id", "broker_name", "Lead Capture", Param);

                Load_Data();

            }

        }
        void Load_Data()
        {
            DataSet ds = new DataSet();
            ds = CommanDataLoad.ExecuteDataSet("Select * from lead_Data where lead_id=" + Request.QueryString["leadid"].ToString() + "", "2", "");

            if(ds.Tables.Count>0)
            {
                if(ds.Tables[0].Rows.Count>0)
                { DataRow dr = ds.Tables[0].Rows[0];
                    Name.Text = dr["Name"].ToString();
                    txtMobile.Text = dr["mobile"].ToString();
                    txtvremark.Text = dr["remark"].ToString();
                    txtvfollowupdate.Text = DateTime.Now.ToShortDateString();
                    if (dr["bank_id"].ToString() != "0" && dr["bank_id"].ToString() != "-1" && dr["bank_id"].ToString() != "")
                    {
                        ddlBank.SelectedValue = dr["bank_id"].ToString();
                    }
                    if (dr["broker_id"].ToString() != "0" && dr["broker_id"].ToString() != "-1" && dr["broker_id"].ToString() != "")
                    {
                        ddlbroker.SelectedValue = dr["broker_id"].ToString();
                    }
                    if (dr["lead_status_id"].ToString() != "0" && dr["lead_status_id"].ToString() != "-1" && dr["lead_status_id"].ToString() != "")
                    {
                        ddlvleadstatus.SelectedValue = dr["lead_status_id"].ToString();
                    }

                    if (dr["productid"].ToString() != "0" && dr["productid"].ToString() != "-1" && dr["productid"].ToString() != "")
                    {
                        ddlproduct.SelectedValue = dr["productid"].ToString();
                    }

                    if (dr["emp_code"].ToString() != "0" && dr["emp_code"].ToString() != "-1" && dr["emp_code"].ToString() != "")
                    {
                        ddlvAssignTo.SelectedValue = dr["emp_code"].ToString();
                    }
                    
                    if (dr["demo_given"].ToString()=="1")
                    {
                        chkdemo.Checked = true;
                    }
                    else
                    {
                        chkdemo.Checked = false;
                    }

                }
            }
        }
        protected void BindTime()
        {
            DateTime StartTime = DateTime.ParseExact("09:00", "HH:mm", null);
            DateTime EndTime = DateTime.ParseExact("20:55", "HH:mm", null);
            TimeSpan Interval = new TimeSpan(0, 15, 0);
            ddlvTime.Items.Clear();

            while (StartTime <= EndTime)
            {
                ddlvTime.Items.Add(StartTime.ToShortTimeString());

                StartTime = StartTime.Add(Interval);
            }
            ddlvTime.Items.Insert(0, new ListItem("--Select--", "-1"));

        }

        void Load_Bank()
        {
            CommanDataLoad.Load_CommanDropDown(ddlBank, "", "USP_Load_Bank", "1", "Bank_Id", "Bank_Name", "Bank_Master", "");
        }
        void Load_Assign_To()
        {
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
            param1[1] = Request.QueryString["leadid"].ToString();
            CommanDataLoad.Load_Gridview(dgValidlead, "spdispManageLeadData_history", "1", "Manage_Leads", param1);
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
        protected void btnupd_Click(object sender, EventArgs e)
        {
           
            if (vleadidhidden.Text != "")
            {
                string[] param = new string[26];
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
                param[18] = "demogiven";
                if (chkdemo.Checked)
                    param[19] = "1";
                else
                    param[19] = "0";

                param[20] = "productid";
                param[21] = ddlproduct.SelectedValue;
                param[22] = "mobile";
                param[23] = txtMobile.Text;
                param[24] = "name";
                param[25] = Name.Text;


                int rowaffected = CommanDataLoad.ExecuteNonQuery("SpUpdLead_Data_History", "1", "Manage_Leads_Self", param);
                if (rowaffected > 0)
                {
                    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Record Updated Successfully')", true);
                    Bind_Valid_PopUpGrid();

                }
                else
                {
                    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Something wrong, Please check all data is correct entered')", true);

                }
            }
            else
            {
                string[] param = new string[24];
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
                param[16] = "demogiven";
                if (chkdemo.Checked)
                    param[17] = "1";
                else
                    param[17] = "0";

                param[18] = "productid";
                param[19] = ddlproduct.SelectedValue;
                param[20] = "mobile";
                param[21] = txtMobile.Text;
                param[22] = "name";
                param[23] = Name.Text;

                int rowaffected = CommanDataLoad.ExecuteNonQuery("spInsLead_data_History", "1", "Manage_Leads_Self", param);
                if (rowaffected > 0)
                {
                    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Record Saved Successfully')", true);
                    Bind_Valid_PopUpGrid();
                   
                }
                else
                {
                    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Something wrong, Please check all data is correct entered')", true);

                }
            }
        }

        protected void btnres_Click(object sender, EventArgs e)
        {
            Response.Redirect("Manage_leads.aspx");

            //Clear_data_Valid();
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
        }
        
    }
}