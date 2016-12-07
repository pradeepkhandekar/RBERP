using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;
using System.Text;

public partial class Change_password : System.Web.UI.Page
{
   
    protected void Page_Load(object sender, EventArgs e)
    {

    }
   
    private void Clear()
    {
        txtOldPassword.Text = string.Empty;
        txtNewPassword.Text = string.Empty;
        txtConfirmPassword.Text = string.Empty;
    }

 

    protected void btnreset_Click1(object sender, EventArgs e)
    { Clear();
        Lblmessage.Text = string.Empty;

    }

    protected void btnsubmit_Click(object sender, EventArgs e)
    {

        DataSet ds = new DataSet();
        ds = CommanDataLoad.ExecuteDataSet("Select * from usr_login where UserId='" + HttpContext.Current.Session["UserId"] + "'", "2", "Change_password", "");
        if (ds != null)
        {
            if (ds.Tables[0].Rows.Count > 0)
            {

                string str1 = CommanDataLoad.DecryptPassword(Convert.ToString(ds.Tables[0].Rows[0]["pass"].ToString()));

                if (txtOldPassword.Text == str1)
                {


                    if (txtNewPassword.Text == txtConfirmPassword.Text)
                    {
                        string str = "update usr_login set pass='" + CommanDataLoad.EncryptPassword(txtNewPassword.Text) + "' where UserId='" + HttpContext.Current.Session["UserId"] + "'";
                        CommanDataLoad.ExecuteNonQuery(str, "2", "Change Pass", "");
                        Lblmessage.Text = "Your Password Changed Successfully...!!!";
                        Response.Redirect("Default.aspx?msg=Password changed successfully...!");
                    }
                }
                else
                {
                    Lblmessage.Text = "Please enter correct current password...!!!, Please login now with new password..!";
                }
            }
        }
    }
}




