using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
public partial class State_Master : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            BindGrid();
        }
    }

    
    private void ClearControls()
    {
        txtstatename.Text = "";
       chkactive.Checked = false;
        txtstatename.Focus();
    }
    private void BindGrid()
    {
        CommanDataLoad.Load_Gridview(dgstatelist, "select * from state_master", "0", "State", "");
    }

    protected void btnsubmit_Click(object sender, EventArgs e)
    {
        try
        {
            if (txtstatename.Text == "")
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please enter State Name')", true);
                return;
            }

            DateTime localdate = DateTime.Now;
            string[] param = new string[8];

            param[0] = "State_name";
            param[1] = txtstatename.Text;
            param[2] = "Is_Active";
            param[3] = "1";
            param[4] = "Created_on";
            param[5] = string.Format("{0:s}", localdate);
            param[6] = "cuserid";
            param[7] = ClsConnection.Userid;




            int rowaffected = CommanDataLoad.ExecuteNonQuery("SpInsState_Master", "1", "State_Master", param);
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