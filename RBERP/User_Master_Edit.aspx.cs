using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class User_Master_Edit : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            Load_Group();
            Load_Company();
            Load_Vendor();
        }

    }

    private void Load_Vendor()
    {
        CommanDataLoad.Load_CommanDropDown(ddlvendor, "", " select * from Vender_Master", "0", "Vender_Id", "Company_Name", "", "");
    }

    private void Load_Company()
    {
        CommanDataLoad.Load_CommanDropDown(ddlcompany, "", " select * from Company_Master", "0", "Company_Id", "Company_Name", "", "");
    }

    private void Load_Group()
    {
        CommanDataLoad.Load_CommanDropDown(ddlGroupid, "", " select * from group_Master", "0", "Groupid", "GroupName", "", "");
    }
    protected void btnSubmit_Click(object sender, ImageClickEventArgs e)
    {
        try
        {

            string[] param = new string[18];
            param[0] = "UserName";
            param[1] = txtusername.Text;
            param[2] = "Email";
            param[3] = txtemail.Text;
            param[4] = "UserPassword";
            param[5] = txtPassword.Text;
            param[6] = "GroupId";
            param[7] = ddlGroupid.SelectedValue;
            param[8] = "ip";
            param[9] = ClsConnection.StrIP;
            param[10] = "Mobile";
            param[11] = txtmobile.Text;
            param[12] = "Company_Id";
            param[13] = ddlcompany.SelectedValue;
            param[14] = "Vendor_Id";
            param[15] = ddlvendor.SelectedValue;
            param[16] = "UserId";
            param[17] = id.Text;

            int rowaffected = CommanDataLoad.ExecuteNonQuery("Usp_User_master_update", "1", "User_Master_Edit", param);
            if (rowaffected > 0)
            {
                Response.Write("<script>alert('Record Updated Successfully.');</script>");
            }
            ClearControls();
            GridView1.DataBind();
        }
        catch (Exception ex)
        {
            lblmsg.Text = "Some Error" + ex.Message.ToString();
            
        }
    }

    private void ClearControls()
    {

        ddlGroupid.SelectedIndex = -1;
        ddlvendor.SelectedIndex = -1;
        ddlcompany.SelectedIndex = -1;
        txtPassword.Text = "";
        txtusername.Text = "";
        txtemail.Text = "";
        txtmobile.Text = "";
        txtconfirmPassword.Text = "";
        id.Text = "";



    }
    protected void btnreset_Click(object sender, ImageClickEventArgs e)
    {
        txtPassword.Text = "";
        txtusername.Text = "";
        txtemail.Text = "";
        txtmobile.Text = "";
        txtconfirmPassword.Text = "";
        ddlGroupid.SelectedItem.Text = "--Select One --";
        ddlvendor.SelectedItem.Text = "--Select One --";
        ddlcompany.SelectedItem.Text = "--Select One --";
        id.Text = "";



    }

    protected void GridView1_SelectedIndexChanged(object sender, EventArgs e)
    {
        id.Text = GridView1.SelectedRow.Cells[2].Text;
        txtusername.Text = GridView1.SelectedRow.Cells[3].Text;
        ddlGroupid.SelectedValue = GridView1.SelectedRow.Cells[4].Text;
        txtemail.Text = GridView1.SelectedRow.Cells[6].Text;
        txtmobile.Text = GridView1.SelectedRow.Cells[7].Text;


        ddlcompany.SelectedValue = GridView1.SelectedRow.Cells[8].Text;
        ddlvendor.SelectedValue = GridView1.SelectedRow.Cells[9].Text;
        txtPassword.Text = GridView1.SelectedRow.Cells[10].Text;
        
    }
}