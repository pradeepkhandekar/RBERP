using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

public partial class Lead_Status_Master : System.Web.UI.Page
{
    private string isactive;
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            BindGrid();
        }
    }

   
    private void ClearControls()
    {
        txtleadstatus.Text = "";
        chkactive.Checked = false;
        txtleadstatus.Focus();
    }
    private void BindGrid()
    {
        CommanDataLoad.Load_Gridview(dgleadstatuslist, "select Lead_Status_Id,Lead_Status,case when is_active=1 then 'Y' else 'N' end as Is_Active,convert(varchar,Created_On,103) as Created_On from Lead_Status_master order by Lead_Status", "0", "Lead Status", "");
    }

    protected void btnsubmit_Click(object sender, EventArgs e)
    {
        try
        {
            if (txtleadstatus.Text == "")
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please enter Lead Status')", true);
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

            string[] param = new string[10];
            param[0] = "Lead_Status";
            param[1] = txtleadstatus.Text;
            param[2] = "Is_Active";
            param[3] = isactive;
            param[4] = "Created_on";
            param[5] = string.Format("{0:s}", localdate);
            param[6] = "userid";
            param[7] = ClsConnection.Userid;
            param[8] = "ip";
            param[9] = ClsConnection.StrIP;



            int rowaffected = CommanDataLoad.ExecuteNonQuery("SpInsLead_Status_Master", "1", "Lead_Status_Master", param);
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