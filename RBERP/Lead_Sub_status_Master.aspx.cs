using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

public partial class Lead_Sub_status_Master : System.Web.UI.Page
{
    private string isactive;
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            CommanDataLoad.Load_CommanDropDown(ddlstatus, "", "select * from lead_Status_Master order by lead_status asc", "0", "lead_Status_id", "Lead_Status", "Lead_status_Master", "");
            BindGrid();
        }
    }

   
    private void ClearControls()
    {
        txtleadSubstatus.Text = "";
        ddlstatus.SelectedIndex = 0;
        chkactive.Checked = false;
        txtleadSubstatus.Focus();
    }
    private void BindGrid()
    {
        CommanDataLoad.Load_Gridview(dgleadstatuslist, "select Lead_Sub_Status_Id,Lead_Sub_Status,lead_Status_Master.Lead_Status, Case When Lead_SubStatus_Master.Is_Active = 1 Then 'Y' else 'N' end as Is_Active from Lead_SubStatus_Master left join lead_Status_Master on Lead_SubStatus_Master.Lead_Status = lead_Status_Master.Lead_Status_Id order by Lead_Sub_Status_Id", "0", "Lead_status_Master", "");
    }

    protected void btnsubmit_Click(object sender, EventArgs e)
    {
        try
        {
            if (txtleadSubstatus.Text == "")
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please enter Lead Sub Status')", true);
                return;
            }

            if (ddlstatus.SelectedIndex == 0)
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please select Lead Status')", true);
                return;
            }

            if (chkactive.Checked == true)
            {
                isactive = "1";
            }
            else
            {
                isactive = "0";
            }


            DateTime localdate = DateTime.Now;

            string[] param = new string[12];
            param[0] = "Lead_Sub_Status";
            param[1] = txtleadSubstatus.Text;
            param[2] = "Lead_Status";
            param[3] = ddlstatus.SelectedValue;
            param[4] = "Is_Active";
            param[5] = isactive;
            param[6] = "Created_on";
            param[7] = string.Format("{0:s}", localdate);
            param[8] = "userid";
            param[9] = ClsConnection.Userid;
            param[10] = "ip";
            param[11] = ClsConnection.StrIP;



            int rowaffected = CommanDataLoad.ExecuteNonQuery("SpInsLead_Sub_Status_Master", "1", "Lead_Sub_status_Master", param);
            if (rowaffected > 0)
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Record Saved Successfully')", true);
                BindGrid();
            }

            ClearControls();

        }

        catch (Exception ex)
        {
            ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Some Error' + ex.Message.ToString();)", true);

        }
    }

    protected void btnsubmit0_Click(object sender, EventArgs e)
    {
        ClearControls();
    }
}