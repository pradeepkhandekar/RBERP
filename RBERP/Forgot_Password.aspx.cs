using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Text;
using System.Net;
using System.Net.Mail;


public partial class Forgot_Password : System.Web.UI.Page
{
    string str1, str2, str3;
    protected void Page_Load(object sender, EventArgs e)
    {

    }


    private void Clear()
    {
        TxtEmail.Value = "";
    }

    private void GetMessage()
    {
        StringBuilder _str = new StringBuilder();
        _str.Append("<script language='javascript'>");

        _str.Append("alert('Your password has been send to your email address');");
        _str.Append("</script>");
        RegisterStartupScript("Msg", _str.ToString());
        Response.Redirect("Default.aspx");
    }

    private void GetError()
    {
        StringBuilder _str = new StringBuilder();
        _str.Append("<script language='javascript'>");

        _str.Append("alert('Oops something went wrong');");
        _str.Append("</script>");
        RegisterStartupScript("Msg", _str.ToString());
    }

    protected void Button2_Click(object sender, EventArgs e)
    {
        TxtEmail.Value = "";
    }

    protected void Button3_Click(object sender, EventArgs e)
    {
        string[] Param = new string[2];
        Param[0] = "email";
        Param[1] = TxtEmail.Value;
     //   TxtEmail.Value = "Dsdsdsds";

      
        DataSet ds = new DataSet();

        ds = CommanDataLoad.ExecuteDataSet("User_Master_Password_Select", "1", "Forgot_Password", Param);

        if (ds != null)
        {
            
            if (ds.Tables[0].Rows.Count > 0)
            {
                str1 = ds.Tables[0].Rows[0]["email"].ToString();
                str2 = ds.Tables[0].Rows[0]["pass"].ToString();
                str3 = ds.Tables[0].Rows[0]["username"].ToString();
                string  mobile = ds.Tables[1].Rows[0]["mobile"].ToString();
                string name = ds.Tables[1].Rows[0]["emp_name"].ToString();
                // if (TxtEmail.Value == str1)
                //  {
                string strPass = CommanDataLoad.Generate(6, 8);
                    string str = "update usr_login set pass='" + CommanDataLoad.EncryptPassword(strPass) + "' where email='" + TxtEmail.Value + "' or empcode='"+ TxtEmail.Value +"'";
                    CommanDataLoad.ExecuteNonQuery(str, "2", "Change Pass", "");
                    String strbody = "";
                    strbody = strbody + "<table><tr><td><img alt='RupeeBoss.com' width='120px' src='http://erp.rupeeboss.com/Common/Images/Logo.png' ' /></td>";
                    strbody = strbody + "<td style='font-weight: bold; font-family: Verdana; font-size: 12px;' valign='middle'>";
                    strbody = strbody + "Welcome to RupeeBoss-ERP</td></tr></table>";
                    strbody = strbody + "<br/>Dear " + str3 + ",<br/>";
                    strbody = strbody + "<br/>Your Password is : " + strPass;
                    strbody = strbody + "<br/><br/>Thank You";
                    strbody = strbody + "<br /><br />RupeeBoss Software Team<br />";
                    strbody = strbody + "<br />+91.9920298619<br />";
                    strbody = strbody + "<br />software.support@rupeeboss.com<br /></p>";
                    string stra = "";
                    try
                    {
                        stra = ClsSendMail.Send_Mail_Direct(str1, strbody, "Password detail", "software.support@rupeeboss.com");
                    string smsbody = "Dear "+ name+", Your password for RB ERP and APP is "+ strPass ;
                    CommanDataLoad.Send_SMS_Save_Data(mobile, smsbody, Request.UserHostAddress);
                    GetMessage();
                         Clear();

                    }
                    catch (Exception ex)
                    {
                        Response.Write(stra + "--" + ex.Message);
                        //  GetError();
                    }
                    Response.Write(stra);
               // }
            }
            else
            {
                lblmsg.Text = "User not found";
            }
        }
        else
        {
            lblmsg.Text = "User not found";
        }
    }

    

    protected void lnkForgot_Click(object sender, EventArgs e)
    {
        Response.Redirect("Default.aspx");
    }

    
}