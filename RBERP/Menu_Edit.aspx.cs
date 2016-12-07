using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;
using System.Text;

public partial class Menu_Edit : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //if (CommanDataLoad.CheckUserRights("17", Request.Cookies["userid"].Value.ToString()) == 0)
        //{
        //    Response.Write("Please Login Again");
        //    ClientScript.RegisterClientScriptBlock(this.GetType(), "NO ACCESS", "<script language=javascript>javascript:subRedirectToDefault1();</script>");
        //    return;
        //}


        if (Page.IsPostBack == false)
        {
            Load_Module();
            
        }
    }
    void Load_Module()
    {
        CommanDataLoad.Load_CommanDropDown(ddlmodule, "", "select distinct module_name from menu_master order by module_name ", "0", "module_name", "module_name", "Menu Edit", "");
    }
    protected void ddlmodule_SelectedIndexChanged(object sender, EventArgs e)
    {
        CommanDataLoad.Load_CommanDropDown(ddlmenu, "", "select MenuMasterID, Menu_Name from menu_master where menu_action='' and module_name='" + ddlmodule.SelectedValue +"' order by Menu_Name", "0", "Menu_Name", "Menu_Name", "Menu Edit", "");

    }
    

    protected void Load_Grid()
    {
        try
        {
            string[] param = new string[2];
            param[0] = "Menu_Parent";
            param[1] = ddlmenu.SelectedValue;

            CommanDataLoad.Load_Gridview(GridView1, "USP_Load_MenuList", "1", "Menu Edit", param);
        }
        catch (Exception ex)
        {
            //lblmsg.Text = "Some Error" + ex.Message.ToString();            
        }
    }
    
    protected void btnShow_Click(object sender, EventArgs e)
    {
        if (ddlmodule.SelectedValue =="-1")
        {
            ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Select Module Name')", true);
            return;
        }

        if (ddlmenu.SelectedValue =="-1")
        {
            ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Selet Menu Name')", true);
            return;
        }

        Load_Grid();
    }

    protected void btnReset_Click(object sender, EventArgs e)
    {
        ClearControls();
    }

    public void ClearControls()
    {
        ddlmenu.SelectedIndex = -1;
        ddlmodule.SelectedIndex = -1;
        GridView1.DataSource = "";
        GridView1.DataBind();
    }

    protected void GridView1_PageIndexChanging(object sender, GridViewPageEventArgs e)
    {
        GridView1.PageIndex = e.NewPageIndex;
        Load_Grid();
    }

    protected void GridView1_RowCommand(object sender, GridViewCommandEventArgs e)
    {
       
        if (e.CommandName == "ShowPopup")
        {
            LinkButton btndetails = (LinkButton)e.CommandSource;
            GridViewRow gvrow = (GridViewRow)btndetails.NamingContainer;
            string Menu_Id = "";
            Menu_Id = GridView1.DataKeys[gvrow.RowIndex].Value.ToString();
            Load_Menu_Details(Menu_Id);
        }
    }

    void Popup(bool isDisplay)
    {
        StringBuilder builder = new StringBuilder();
        if (isDisplay)
        {
            builder.Append("<script language=JavaScript> ShowPopup(); </script>\n");
            Page.ClientScript.RegisterStartupScript(this.GetType(), "ShowPopup", builder.ToString());
        }
        else
        {
            builder.Append("<script language=JavaScript> HidePopup(); </script>\n");
            Page.ClientScript.RegisterStartupScript(this.GetType(), "HidePopup", builder.ToString());
        }
    }

    protected void Load_Menu_Details(string MenuId)
    {
        try
        {
            string[] param = new string[2];
            param[0] = "Menu_Id";
            param[1] = MenuId;

            DataSet ds = new DataSet();
            ds = CommanDataLoad.ExecuteDataSet("USP_Load_Menu_Details", "1", "Menu Edit", param);

            if (ds != null)
            {
                lblMenuId.Text = ds.Tables[0].Rows[0]["MenuId"].ToString();
                txtModuleNm.Text = ds.Tables[0].Rows[0]["Module_Name"].ToString();
                txtMenuNm.Text = ds.Tables[0].Rows[0]["Menu_Name"].ToString();
                ddlMenuSequence.SelectedValue = ds.Tables[0].Rows[0]["Menu_Sequence"].ToString();               
                ddlMenuType.SelectedValue = ds.Tables[0].Rows[0]["Menu_Type"].ToString();
                txtlink.Text = ds.Tables[0].Rows[0]["Menu_URL"].ToString();
                txtmenudisplay.Text = ds.Tables[0].Rows[0]["menu_display"].ToString();
                Popup(true);
            }
            else
            {
                Popup(false);
            }

        }
        catch (Exception ex)
        {
            //lblmsg.Text = "Some Error" + ex.Message.ToString();            
        }
    }

    protected void btnUpdate_Click(object sender, EventArgs e)
    {
        try
        {
            string[] param = new string[14];
            param[0] = "Menu_Id";
            param[1] = lblMenuId.Text;
            param[2] = "Menu_Sequence";
            param[3] = ddlMenuSequence.SelectedValue;
            param[4] = "Menu_Type";
            param[5] = ddlMenuType.SelectedValue;
            param[6] = "Menu_Action";
            param[7] = txtlink.Text;
            param[8] = "Menu_Display";
            param[9] = txtmenudisplay.Text;
            param[10] = "Ip";
            param[11] = ClsConnection.StrIP;
            param[12] = "Userid";
            param[13] = ClsConnection.Userid;

            int rowaffected = CommanDataLoad.ExecuteNonQuery("USP_Update_Menu", "1", "Menu Edit", param);
            if (rowaffected > 0)
            {
                Response.Write("<script>alert('Record Updated Successfully.');</script>");
            }
            Popup(false);
            Load_Grid();
            ClearControls();
        }
        catch (Exception ex)
        {
            //lblmsg.Text = "Some Error" + ex.Message.ToString();            
        }
    }
}