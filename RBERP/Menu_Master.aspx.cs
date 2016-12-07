using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Menu_Master : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Page.IsPostBack == false)
        {
            Load_Parent();
        }

    }
    void Load_Parent()
    {
        string[] Param = new string[2];

        Param[0] = "Module";
        Param[1] = cbmodule.SelectedValue;
        CommanDataLoad.Load_CommanDropDown(ddlParentName, "", "usp_select_parent_menu", "1", "Menu_Name", "Menu_Name", "Menu Master", Param);
    }
  

        private void ClearControls()
          {

          
            txtMenuName.Text="";
            
            ddlMenuLevel.SelectedValue="";
            ddlMenuSequence.SelectedValue="";
            ddlMenuType.SelectedValue = "";
            txtlink.Text = "";
          
          }
     

     protected void cbmodule_SelectedIndexChanged(object sender, EventArgs e)
     {
         Load_Parent();
     }

    protected void btnsubmit_Click(object sender, EventArgs e)
    {
        try
        {
            string[] Param = new string[20];

            Param[0] = "Module_Name";
            Param[1] = cbmodule.SelectedValue;
            Param[2] = "Menu_Name";
            Param[3] = txtMenuName.Text;
            Param[4] = "Menu_Parent";
            if (ddlParentName.SelectedValue == "-1")
            {
                Param[5] = "";
            }
            else
            {
                Param[5] = ddlParentName.SelectedValue;
            }
            Param[6] = "Menu_Level";
            Param[7] = ddlMenuLevel.SelectedValue;
            Param[8] = "Menu_Sequence";
            Param[9] = ddlMenuSequence.SelectedValue;
            Param[10] = "Menu_Type";
            Param[11] = ddlMenuType.SelectedValue;
            Param[12] = "ip";
            Param[13] = ClsConnection.StrIP;
            Param[14] = "userid";
            Param[15] = ClsConnection.Userid;
            Param[16] = "Menu_Action";
            Param[17] = txtlink.Text;
            Param[18] = "Menu_Display";
            Param[19] = txtmenudisplay.Text;

            lblmsg.Text = "";
            int rowAffected = CommanDataLoad.ExecuteNonQuery("USP_Menu_Master_Insert", "1", "Menu Master", Param);
            if (rowAffected > 0)
            {
                Response.Write("<script>alert('Data Saved Succesfully');</script>");
            }
            ClearControls();
            Load_Parent();


        }
        catch (Exception ex)
        {
            lblmsg.Text = "Some Error" + ex.Message.ToString();
            //Console.WriteLine("Some ERROR" + ex.Message.ToString());
        }
    }

    protected void reset_Click1(object sender, EventArgs e)
    {
        txtMenuName.Text = "";
        //  ddlParentName.SelectedValue="0";
        ddlMenuLevel.SelectedValue = "0";
        ddlMenuSequence.SelectedValue = "0";
        ddlMenuType.SelectedValue = "0";
        txtlink.Text = "";
        lblmsg.Text = "";
        ClearControls();
    }
}


