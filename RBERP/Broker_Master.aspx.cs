using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

using System.Data.SqlClient;
using System.Configuration;
using System.Drawing;
using System.Web.Mail;
using System.Text;

namespace RBERP
{
    public partial class Broker_Master : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                CommanDataLoad.Load_CommanDropDown(ddlEmployee, "", "select * from dbo.get_child_emp('" + Request.Cookies["empcode"].Value.ToString() + "')   order by name asc", "0", "emp_code", "name", "Broker Master", "");
                Load_Grid();
                BindGrid();
            }
        }

        protected void Load_Grid()
        {
            CommanDataLoad.Load_Gridview(gvBrokerProd, "USP_Load_BrokerProdList", "1", "Broker_Master", "");
        }

        protected void btnsubmit_Click(object sender, EventArgs e)
        {
            string strPass = CommanDataLoad.Generate(6, 8);

            try
            {
                string[] param = new string[16];

                param[0] = "Broker_Name";
                param[1] = txtbroker.Text;
                param[2] = "Ip_address";
                param[3] = ClsConnection.StrIP;
                param[4] = "UserId";
                param[5] = ClsConnection.Userid;
                param[6] = "Contact_No";
                param[7] = txtcontact.Text;
                param[8] = "PAN_No";
                param[9] = txtPAN.Text;
                param[10] = "Emp_Code";
                param[11] = ddlEmployee.SelectedValue;
                param[12] = "Email_Id";
                param[13] = txtEmail.Text;
                param[14] = "UserPassword";
                param[15] = CommanDataLoad.EncryptPassword(strPass);
                Send_mail(strPass);
                int rowaffect =0;
                DataSet ds = new DataSet();
                ds = CommanDataLoad.ExecuteDataSet("Usp_Insert_BrokerDetail", "1", "Broker Master", param);
                if (ds != null)
                {
                    string brokId = ds.Tables[0].Rows[0]["BrokerId"].ToString();
                    int i = 0;
                    while (i < gvBrokerProd.Rows.Count)
                    {
                        CheckBox chk = (CheckBox)gvBrokerProd.Rows[i].FindControl("chk");
                        if (chk.Checked==true)
                        {
                            TextBox txtPayout = (TextBox)gvBrokerProd.Rows[i].FindControl("txtPayoutper");
                            string[] param1 = new string[6];

                            param1[0] = "Broker_Id";
                            param1[1] = brokId;
                            param1[2] = "Product_Id";
                            param1[3] = gvBrokerProd.Rows[i].Cells[1].Text;
                            param1[4] = "PayoutPer";
                            param1[5] = txtPayout.Text;
                            rowaffect = CommanDataLoad.ExecuteNonQuery("USP_Insert_BrokerProductMapping", "1", "Broker Master", param1);
                            
                        }
                        i = i + 1;

                    }
                    if (rowaffect > 0)
                    {
                        Response.Write("<script>alert('Record Saved Successfully.');</script>");
                        //BindGrid();
                    }
                }                
                ClearControls();
                BindGrid();
                Load_Grid();
            }

            catch (Exception ex)
            {
                lblmsg.Text = "Some Error" + ex.Message.ToString();
            }

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
            strBody.Append("Dear " + txtbroker.Text + ",<br />");
            strBody.Append("<br />Your email id is your user name for RupeeBoss.com ERP login :" + txtEmail.Text + "<br />Your Password is :" + strPass + "<br />");
            strBody.Append("<br />URL to access your account http://erp.rupeeboss.com <br />");
            strBody.Append("<br />Thanks You<br /><br />Software Team<br />");
            strBody.Append("RupeeBoss.Com<br />");
            strBody.Append("<a href='mailto:software.Support@rupeeboss.com'>Software.Support@rupeeboss.com</a><br />");

            strBody.Append("91.9920298619<br /> </td></tr></table>");
            ClsSendMail.Send_Mail_Direct(txtEmail.Text, strBody.ToString(), "Welcome to RupeeBoss.com", "software.support@rupeeboss.com");

        }


        private void BindGrid()
        {
            string[] param1 = new string[2];

            param1[0] = "Emp_Code";
            param1[1] = Request.Cookies["empcode"].Value.ToString();
            CommanDataLoad.Load_Gridview(GridView1, "Usp_Load_BrokerDetail", "1", "Broker_Master", param1);
        }

        public void ClearControls()
        {
            txtPAN.Text = "";
            txtcontact.Text = "";
            txtbroker.Text = "";
            txtEmail.Text = "";
            ddlEmployee.SelectedIndex = -1;

        }
        protected void btnreset_Click(object sender, EventArgs e)
        {
            ClearControls();
        }

        protected void GridView1_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            if (e.CommandName == "ShowPopup")
            {
                LinkButton btndetails = (LinkButton)e.CommandSource;
                GridViewRow gvrow = (GridViewRow)btndetails.NamingContainer;
                string Brokerid = "";
                Brokerid = GridView1.DataKeys[gvrow.RowIndex].Value.ToString();
                Load_Broker_Detail(Brokerid);
            }
        }

        protected void GridView1_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            GridView1.PageIndex = e.NewPageIndex;
            BindGrid();
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

        protected void Load_Broker_Detail(string Broker_Id)
        {

            try
            {
                string[] param = new string[2];
                param[0] = "Broker_Id";
                param[1] = Broker_Id;

                DataSet ds = new DataSet();
                ds = CommanDataLoad.ExecuteDataSet("USP_Load_Broker_Detail", "1", "Edit Broker Master", param);

                if (ds != null)
                {
                    lblBrokerId.Text = ds.Tables[0].Rows[0]["Broker_Id"].ToString();
                    txtBrokerName.Text = ds.Tables[0].Rows[0]["Broker_Name"].ToString();
                    txtContactNo.Text = ds.Tables[0].Rows[0]["Contact_No"].ToString();
                    txtPANNo.Text = ds.Tables[0].Rows[0]["PAN_No"].ToString();
                    txtEmailid.Text = ds.Tables[0].Rows[0]["Email_Id"].ToString();
                    Load_Child();
                    ddlEmp.SelectedValue = ds.Tables[0].Rows[0]["Emp_Code"].ToString();                                      
                    CommanDataLoad.Load_Gridview(gvbpchild, "USP_Load_BrokerProductDetail", "1", "Broker_Master", param);
                                  
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

        void Load_Child()
        {
            CommanDataLoad.Load_CommanDropDown(ddlEmp, "", "Select * from Employee_Master", "0", "Emp_Code", "Emp_Name", "Broker Master", "");
        }

        protected void btnUpdate_Click(object sender, EventArgs e)
        {
            if (txtBrokerName.Text == "")
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Enter Broker Name')", true);
                return;
            }
            if (txtContactNo.Text == "")
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Enter Contact No')", true);
                return;
            }
            if (txtPANNo.Text == "")
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Enter PAN No')", true);
                return;
            }

            if (txtEmailid.Text == "")
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Enter Email Id')", true);
                return;
            }

            if (ddlEmp.SelectedValue == "-1")
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Select Emp Code')", true);
                return;
            }
                                    
            Update_Data();
        }

        protected void Update_Data()
        {
            try
            {
                string[] param = new string[16];
                param[0] = "Broker_Id";
                param[1] = lblBrokerId.Text;
                param[2] = "Broker_Name";
                param[3] = txtBrokerName.Text;
                param[4] = "Contact_No";
                param[5] = txtContactNo.Text;
                param[6] = "PAN_No";
                param[7] = txtPANNo.Text;
                param[8] = "Emp_Code";
                param[9] = ddlEmp.SelectedValue;               
                param[10] = "UserId";
                param[11] = ClsConnection.Userid;
                param[12] = "Ip_address";
                param[13] = ClsConnection.StrIP;
                param[14] = "Email_Id";
                param[15] = txtEmailid.Text;

                int rowaffected = CommanDataLoad.ExecuteNonQuery("USP_Update_Broker_Master", "1", "Broker Master", param);
                int UpdateRowChild = 0;
                if (rowaffected > 0)
                {
                    int i = 0;
                    while (i < gvbpchild.Rows.Count)
                    {
                        CheckBox chk = (CheckBox)gvbpchild.Rows[i].FindControl("chk");
                        if (chk.Checked == true)
                        {
                            TextBox txtPayout = (TextBox)gvbpchild.Rows[i].FindControl("txtPayoutper");

                            string[] param1 = new string[6];
                            param1[0] = "Broker_Id";
                            param1[1] = lblBrokerId.Text;
                            param1[2] = "Product_Id";
                            param1[3] = gvbpchild.Rows[i].Cells[1].Text;
                            param1[4] = "PayoutPer";
                            param1[5] = txtPayout.Text;
                            UpdateRowChild = CommanDataLoad.ExecuteNonQuery("USP_Insert_BrokerProductMapping", "1", "Broker Master", param1);

                        }
                        i = i + 1;
                    }
                    if (UpdateRowChild>0)
                    {
                        Response.Write("<script>alert('Record Updated Successfully.');</script>");
                    }
                    
                }
                Popup(false);
                BindGrid();
                Load_Grid();
                ClearControls();
            }
            catch (Exception ex)
            {
                //lblmsg.Text = "Some Error" + ex.Message.ToString();            
            }
        }

        protected void gvbpchild_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                TextBox txtPayoutper = (TextBox)e.Row.FindControl("txtPayoutper");
                CheckBox chk = (CheckBox)e.Row.FindControl("chk");
                if (txtPayoutper.Text !="")
                {
                    chk.Checked = true;
                }
                else
                {
                    chk.Checked = false;
                }

            }
        }  
    }


}