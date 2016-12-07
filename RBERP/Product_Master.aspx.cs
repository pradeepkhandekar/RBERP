using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
public partial class Product_Master : System.Web.UI.Page
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
        txtproductname.Text = "";
        chkactive.Checked = false;
        txtproductname.Focus();
    }
    private void BindGrid()
    {
        CommanDataLoad.Load_Gridview(dgproductlist, "select * from Product_master", "0", "Product", "");
    }



    protected void btnsubmit_Click(object sender, EventArgs e)
    {
        try
        {
            if (txtproductname.Text == "")
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please enter Product Name')", true);
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
            param[0] = "Product_name";
            param[1] = txtproductname.Text;
            param[2] = "Is_Active";
            param[3] = isactive;
            param[4] = "Created_on";
            param[5] = string.Format("{0:s}", localdate);
            param[6] = "userid";
            param[7] = ClsConnection.Userid;
            param[8] = "ip";
            param[9] = ClsConnection.StrIP;



            int rowaffected = CommanDataLoad.ExecuteNonQuery("SpInsProduct_Master", "1", "Product_Master", param);
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