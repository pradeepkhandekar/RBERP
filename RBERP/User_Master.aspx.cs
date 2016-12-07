using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text;
using System.Data;

public partial class User_Master : System.Web.UI.Page
{
   
    protected void Page_Load(object sender, EventArgs e)
    {
        //if (CommanDataLoad.CheckUserRights("25", Request.Cookies["userid"].Value.ToString()) == 0)
        //{
        //    Response.Write("Please Login Again");
        //    ClientScript.RegisterClientScriptBlock(this.GetType(), "NO ACCESS", "<script language=javascript>javascript:subRedirectToDefault1();</script>");
        //    return;
        //}
        if (!IsPostBack)
        {
            Load_Group();
            Load_Company();
            
          
        }
        
    }


 
    private void Load_Company()
    {
        CommanDataLoad.Load_CommanDropDown(ddlcompany, "", " select * from Company_Master", "0", "Company_Id", "Company_Name", "", "");
    }

    private void Load_Group()
    {
        CommanDataLoad.Load_CommanDropDown(ddlGroupid, "", " select * from group_Master", "0", "Groupid", "GroupName", "", "");
    }
  
    void Send_mail(string strPass)
    {
        StringBuilder strBody = new StringBuilder();
        strBody.Append("<table class='style1'>");
        strBody.Append("<tr><td>");
        strBody.Append("<img alt='rupeeboss.com' width='120px' src='http://erp.rupeeboss.com/Common/Images/Logo.png' ");
        strBody.Append("style='height: 100px' /></td>");
        strBody.Append("<td style='font-weight: bold; font-family: Verdana; font-size: 14px; '");
        strBody.Append("valign='middle'>");
        strBody.Append("Welcome to  <span style='color: #FF0000'> RupeeBoss.com ERP </span></td>");
        strBody.Append("</tr><tr><td colspan='2' class='style2' style='font-family: Verdana; font-size: 12px'>");
        strBody.Append("Dear " + txtusername.Text + ",<br />");
        strBody.Append("<br />Your email id is your user name for RupeeBoss.com ERP login :" + txtemail.Text + "<br />Your Password is :" + strPass + "<br />");
        strBody.Append("<br />URL to access your account http://erp.rupeeboss.com <br />");
        strBody.Append("<br />Thanks You<br /><br />Software Team<br />");
        strBody.Append("RupeeBoss.Com<br />");
        strBody.Append("<a href='mailto:software.Support@rupeeboss.com'>Software.Support@rupeeboss.com</a><br />");
   
        strBody.Append("91.9920298619<br /> </td></tr></table>");
        ClsSendMail.Send_Mail_Direct( txtemail.Text,  strBody.ToString(), "Welcome to RupeeBoss.com","software.support@rupeeboss.com");

    }

    private void ClearControls()
    {
        ddlGroupid.SelectedIndex = -1;
        ddlcompany.SelectedIndex = -1;

        txtusername.Text = "";
        txtemail.Text = "";
        txtmobile.Text = "";
    
    }
   

    protected void btnsubmit_Click(object sender, EventArgs e)
    {
        string strPass = CommanDataLoad.Generate(6, 8);
        // strPass = "admin";
        try
        {
            string[] param = new string[16];
            param[0] = "UserName";
            param[1] = txtusername.Text;
            param[2] = "Email";
            param[3] = txtemail.Text;
            param[4] = "UserPassword";
            param[5] = CommanDataLoad.EncryptPassword(strPass);
            param[6] = "GroupId";
            param[7] = ddlGroupid.SelectedValue;
            param[8] = "ip";
            param[9] = ClsConnection.StrIP;
            param[10] = "Mobile";
            param[11] = txtmobile.Text;
            param[12] = "Company_Id";
            param[13] = ddlcompany.SelectedValue;
            param[14] = "empcode";
            param[15] = txtempcode.Text;
            Send_mail(strPass);
            int rowaffected = CommanDataLoad.ExecuteNonQuery("Usp_User_master_insert", "1", "User_Master", param);
            if (rowaffected > 0)
            {
                Response.Write("<script>alert('Record Inserted Successfully.');</script>");
            }
            ClearControls();
            //GridView1.DataBind();

        }
        catch (Exception ex)
        {
            lblmsg.Text = "Some Error" + ex.Message.ToString();
            //Console.WriteLine("Some ERROR" + ex.Message.ToString());
        }
    }

    protected void btnreset_Click(object sender, EventArgs e)
    {
        ClearControls();

    }
}