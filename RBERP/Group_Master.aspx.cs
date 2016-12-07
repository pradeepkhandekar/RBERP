using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Group_Master : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //if (CommanDataLoad.CheckUserRights("18", Request.Cookies["userid"].Value.ToString()) == 0)
        //{
        //    Response.Write("Please Login Again");
        //    ClientScript.RegisterClientScriptBlock(this.GetType(), "NO ACCESS", "<script language=javascript>javascript:subRedirectToDefault1();</script>");
        //    return;
        //}
     }
   



    private void ClearControls()
    {
        txtGroupname.Text = "";
        ddlisAdmin.SelectedIndex=-1;
       

    }
   

    protected void GridView1_SelectedIndexChanged(object sender, EventArgs e)
    {
        id.Text = GridView1.SelectedRow.Cells[2].Text;
        txtGroupname.Text = GridView1.SelectedRow.Cells[3].Text;
        ddlisAdmin.SelectedValue = GridView1.SelectedRow.Cells[4].Text;
        
    }

  

    protected void btnsubmit_Click(object sender, EventArgs e)
    {
        try
        {

            string[] param = new string[12];

            param[0] = "GroupName";
            param[1] = txtGroupname.Text;
            param[2] = "ISAdmin";
            param[3] = ddlisAdmin.SelectedValue;
            param[4] = "isActive";
            param[5] = chkActive.Checked.ToString();
            param[6] = "ip";
            param[7] = ClsConnection.StrIP;
            param[8] = "userid";
            param[9] = ClsConnection.Userid;
            param[10] = "Groupid";
            param[11] = id.Text;

            int rowaffected = CommanDataLoad.ExecuteNonQuery("Usp_Group_Master_Insert", "1", "Group_Master", param);
            if (id.Text != "")
            {
                Response.Write("<script>alert('Data updated Succesfully');</script>");
            }
            else
            {
                Response.Write("<script>alert('Data Inserted Succesfully');</script>");
            }

            GridView1.DataBind();
            ClearControls();

        }
        catch (Exception ex)
        {
            lblmsg.Text = "Some Error" + ex.Message.ToString();

        }
    }

    protected void btnreset_Click(object sender, EventArgs e)
    {
        txtGroupname.Text = "";
        ddlisAdmin.SelectedValue = "0";
    }
}