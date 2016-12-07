using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace RBERP
{
    public partial class Lead_capture_Master : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
               
            }


        }
        protected void ClearControls()
        {
            txtname.Text = "";
            txtemail.Text = "";
            txtmobile.Text = "";
            txtremark.Text = "";


        }
        protected void btnsubmit_Click(object sender, EventArgs e)
        {
            if(txtname.Text!="" && txtemail.Text!="" && txtmobile.Text!="" && txtremark.Text!="")
            { 
            string[] param = new string[8];
            param[0] = "name";
            param[1] = txtname.Text;
            param[2] = "email";
            param[3] = txtemail.Text;
            param[4] = "mobile";
            param[5] = txtmobile.Text;
            param[6] = "Remark";
            param[7] = txtremark.Text;
            int rowaffected = CommanDataLoad.ExecuteNonQuery("usp_insert_lead_Master", "1", "Lead_Capture_Master", param);
                if (rowaffected > 0)
                {
                    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Record Saved Successfully')", true);
                    ClearControls();

            }  }
        }

        protected void btnreset_Click(object sender, EventArgs e)
        {
            txtname.Text = "";
            txtemail.Text = "";
            txtmobile.Text = "";
            txtremark.Text = "";

        }
    }
}