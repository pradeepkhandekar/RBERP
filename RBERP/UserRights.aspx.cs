using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class UserRights : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //if (CommanDataLoad.CheckUserRights("19", Request.Cookies["userid"].Value.ToString()) == 0)
        //{
        //    Response.Write("Please Login Again");
        //    ClientScript.RegisterClientScriptBlock(this.GetType(), "NO ACCESS", "<script language=javascript>javascript:subRedirectToDefault1();</script>");
        //    return;
        //}
        if (!IsPostBack)
        {
            CommanDataLoad.Load_CommanDropDown(ddluser, "", "Select UserId,UserName from usr_login order by UserName", "2", "UserId", "UserName", "Group Rights", "");
       
        }
    }
   
    protected void ddlgroup_SelectedIndexChanged(object sender, EventArgs e)
    {
        string[] param = new string[2];
        param[0] = "Userid";
        param[1] = ddluser.SelectedValue;
        CommanDataLoad.Load_CheckBoxList(chk, "sp_select_User_group", "1", "GroupId", "GroupName", "Group Rights", param);

    }
    

    protected void btnsubmit_Click(object sender, EventArgs e)
    {
        CommanDataLoad.Load_CommanDropDown(ddluser, "", "Select UserId,UserName from usr_login where username like '%" + txtuser.Text + "%' order by UserName", "2", "UserId", "UserName", "Group Rights", "");
    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        string strDump = "";
        int i = 0;
        int j = 0;

        strDump = "delete from usergroup where userid=" + ddluser.SelectedValue + ";";

        j = 0;
        while (j < chk.Items.Count)
        {
            if (chk.Items[j].Selected == true)
            {
                strDump = strDump + "Insert into usergroup (userid,Groupid,eUserId,ip,sysdate)";
                strDump = strDump + "values(" + ddluser.SelectedValue + "," + chk.Items[j].Value + "," + CommanDataLoad.UserId + ",'" + Request.UserHostAddress + "',getdate());";
            }
            j = j + 1;
        }

        int rowaffected = CommanDataLoad.ExecuteNonQuery(strDump, "2", "Group Rights Item", "");



        if (rowaffected > 0)
        {
            Response.Write("<script>alert('Record Inserted Successfully.');</script>");
        }
        else
        {
            Response.Write("<script>alert('Technical error Please contact RupeeBoss Development Team');</script>");
        }
    }
}