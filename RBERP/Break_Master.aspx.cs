using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

public partial class Break_Master : System.Web.UI.Page
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
        txtbreakname.Text = "";
        ddltime.SelectedValue = "0";
        chkactive.Checked = false;
        txtbreakname.Focus();
    }
    private void BindGrid()
    {
        CommanDataLoad.Load_Gridview(dgbreaklist, "select Break_Type ,Time ,case when is_active = 1 then 'Y' else 'N' end as Is_Active, convert(varchar, Created_On, 103) as Created_On from break_master", "0", "Break Master", "");
    }

    protected void btnsubmit_Click(object sender, EventArgs e)
    {
        try
        {
            if (txtbreakname.Text == "")
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please enter Break Type')", true);
                return;
            }


            if (ddltime.SelectedItem.Text == "--Select Time--")
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Select Time')", true);
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
            param[0] = "Break_Type";
            param[1] = txtbreakname.Text;
            param[2] = "Time";
            param[3] = ddltime.SelectedValue;
            param[4] = "Is_Active";
            param[5] = isactive;
            param[6] = "Created_on";
            param[7] = string.Format("{0:s}", localdate);
            param[8] = "userid";
            param[9] = ClsConnection.Userid;
            param[10] = "ip";
            param[11] = ClsConnection.StrIP;



            int rowaffected = CommanDataLoad.ExecuteNonQuery("SpInsBreak_Master", "1", "Break_Master", param);
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

    protected void btnreset_Click(object sender, EventArgs e)
    {
        ClearControls();
    }
}