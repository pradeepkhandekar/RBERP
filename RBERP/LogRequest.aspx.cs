using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using RBERP.Class;
using System.Text;


namespace RBERP
{
    public partial class LogRequest : System.Web.UI.Page
    {
        public string serverLocation_1 = "";
        public string serverLocation_2 = "";
        protected void Page_Load(object sender, EventArgs e)
        {
            if(!IsPostBack)
            {
                Load_Req_Category();
                Load_Reporting_Auth();
            }           
        }

        private void Load_Req_Category()
        {
            CommanDataLoad.Load_CommanDropDown(ddlrequesttype, "", "Usp_Load_Soft_Request_Category", "0", "Category_ID", "Category_Name", "LogRequest", "");
        }

        private void Load_Reporting_Auth()
        {
            string[] param = new string[2];
            param[0] = "Emp_Code";
            param[1] = Request.Cookies["empcode"].Value.ToString();
            //param[1] = "RB40000255";
            CommanDataLoad.Load_CommanDropDown(ddlreportingauth, "", "Usp_Load_Reporting_Authority", "1", "Reporting_emp", "Emp_Name", "LogRequest", param);
        }

        private void Find_Req_Id()
        {
            DataSet ds = new DataSet();
            ds = CommanDataLoad.ExecuteDataSet("Usp_RequestId_Max", "1", "LogRequest", "");
            if (ds != null)
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    lblrequestid.Text = ds.Tables[0].Rows[0]["Request_Id"].ToString();
                }
            }
        }

        protected void btnsubmit_Click(object sender, EventArgs e)
        {
            try
            {
                Find_Req_Id();
                load_Document();

                string[] param = new string[32];
                param[0] = "Request_ID";
                param[1] = lblrequestid.Text;
                param[2] = "Requested_By";
                param[3] = Request.Cookies["empcode"].Value.ToString();
                //param[3] = "RB40000255";
                param[4] = "RequestType";
                param[5] = ddlrequesttype.SelectedValue;
                param[6] = "ReportAuthId";
                param[7] = ddlreportingauth.SelectedValue;
                param[8] = "RequestTitle";
                param[9] = txtrequesttitle.Text;
                param[10] = "Short_Description";
                param[11] = txtshortdescription.Text;
                param[12] = "Detail_Description";
                param[13] = txtreasonforchange.Text;
                param[14] = "Document_URL_1";
                if(serverLocation_1=="")
                {
                    param[15] = null;
                }
                else
                {
                    param[15] = serverLocation_1.ToString();
                }
                    
                param[16] = "Document_URL_2";
                if (serverLocation_2 == "")
                {
                    param[17] = null;
                }
                else
                {
                    param[17] = serverLocation_2.ToString();
                }

                param[18] = "CategoryId";
                param[19] = ddlrequesttype.SelectedValue;
                param[20] = "Dept";
                param[21] = null;
                param[22] = "Port";
                param[23] = null;
                param[24] = "User_Approve_Flag";
                param[25] = null;
                param[26] = "HOD_Approve_Flag";
                param[27] = null;
                param[28] = "IpAddress";
                param[29] = Request.UserHostAddress;
                param[30] = "UserId";
                param[31] = Request.Cookies["UserId"].Value.ToString();
                //param[31] = "122";

                int rowaffected = CommanDataLoad.ExecuteNonQuery("Soft_insert_Request_master", "1", "LogRequest", param);
                if (rowaffected > 0)
                {
                    Response.Write("<script>alert('Request Id: " + lblrequestid.Text + " Created Successfully.');</script>");
                }
                Send_mail();
                ClearControls();
            }
            catch (Exception ex)
            {
                lblmsg.Text = "Some Error" + ex.Message.ToString();
            }
        }

        private void ClearControls()
        {
            ddlrequesttype.SelectedIndex = -1;
            ddlreportingauth.SelectedIndex = -1;

            txtrequesttitle.Text = "";
            txtshortdescription.Text = "";
            txtreasonforchange.Text = "";
  
        }

        public void load_Document()
        {

            if ((FileUpload1.PostedFile != null) && (FileUpload1.PostedFile.ContentLength > 0))
            {
                string strpath1;
                //strpath1 = "\\" + lblrequestid.Text + DateTime.Now.Ticks.ToString() + FileUpload1.FileName;
                strpath1 = "\\" + lblrequestid.Text + FileUpload1.FileName;
                string location = Server.MapPath("Document_1") + strpath1;
                serverLocation_1 = "Document_1" + strpath1;
                try
                {
                    FileUpload1.PostedFile.SaveAs(location);
                }
                catch (Exception ex)
                {
                    throw;
                }
                finally
                {

                }
            }

            if ((FileUpload2.PostedFile != null) && (FileUpload2.PostedFile.ContentLength > 0))
            {
                string strpath2;
                strpath2 = "\\" + lblrequestid.Text + FileUpload2.FileName;
                string location1 = Server.MapPath("Document_2") + strpath2;
                serverLocation_2 = "Document_2" + strpath2;
                try
                {
                    FileUpload2.PostedFile.SaveAs(location1);
                }
                catch (Exception ex)
                {
                    throw;
                }
                finally
                {

                }
            }
        }

        void Send_mail()
        {
            Load_Emp_Details();
            StringBuilder strBody = new StringBuilder();
            strBody.Append("<table><tr><td><span style='FONT-SIZE: 10pt; FONT-FAMILY: Verdana'>Dear User  " + lblusername.Text + ",</span></td></tr>");
            strBody.Append("<tr><td colspan=2>&nbsp;</tr>");
            strBody.Append("<tr><td><span style='FONT-SIZE: 10pt; FONT-FAMILY: Verdana'>New Request Generated :-</span></td></tr>");
            strBody.Append("<tr><td colspan=2><table width='500 px' id=tab1e border=1 style='FONT-SIZE: 10pt; FONT-FAMILY: Verdana' cellSpacing=0 cellPadding=-1>");
            strBody.Append("<tr><td bgcolor='#8CC3F7' style='width:100px'> Request No. </td><td Align='Center' style='width:10px'>:</td><td Align='Left' style='width:400px'>" + lblrequestid.Text + "</td></tr> ");
            strBody.Append("<tr><td bgcolor='#8CC3F7'style='width:100px'> Requested By </td><td Align='Center' style='width:10px'>:</td><td Align='Left' style='width:400px'>" + lblusername.Text + " " + Session["LastName"] + "</td></tr>");
            strBody.Append("<tr><td bgcolor='#8CC3F7' style='width:100px'> Request Title </td><td Align='Center' style='width:10px'>:</td><td Align='Left' style='width:400px'>" + txtrequesttitle.Text + "</td></tr>");
            strBody.Append("<tr><td bgcolor='#8CC3F7' style='width:100px'> Description </td><td Align='Center' style='width:10px'>:</td><td align='Left' style='width:400px'>" + txtshortdescription.Text + "</td></tr>");
            strBody.Append("<tr><td bgcolor='#8CC3F7' style='width:100px'> Reason for change </td><td Align='Center' style='width:10px'>:</td><td Align='Left' style='width:400px'>" + txtreasonforchange.Text + "</td></tr>");
            strBody.Append("</table></td></tr>");
            strBody.Append("<tr><td colspan=2>&nbsp;</tr>");
            strBody.Append("<tr><td colspan=2>&nbsp;</tr>");
            strBody.Append("<tr><td colspan=2><span style='FONT-SIZE: 10pt; FONT-FAMILY: Verdana'>Thanks & Regards,</span></td></tr>");
            strBody.Append("<tr><td colspan=2><span style='FONT-SIZE: 10pt; FONT-FAMILY: Verdana'>Software Team</span></td></tr>");
            strBody.Append("<tr><td colspan=2></tr>");
            strBody.Append("<tr><td colspan=2><span style='FONT-SIZE: 10pt; FONT-FAMILY: Verdana'>Note:- Please do not reply to the mail, this is a system auto generated mail.");
            strBody.Append("</span></td></tr></table>");

            string maillist = "";
            maillist = lbluseremail.Text; //+ ";" + lblreportingemail.Text;
            ClsSendMail.Send_Mail_Direct(maillist.ToString(), strBody.ToString(), "New Software Request No. " + lblrequestid.Text + "", "software.support@rupeeboss.com");
        }

        private void Load_Emp_Details()
        {
            string[] param = new string[2];
            param[0] = "Emp_Code";
            param[1] = Request.Cookies["empcode"].Value.ToString();
            //param[1] = "RB40000255";

            DataSet ds = new DataSet();
            ds = CommanDataLoad.ExecuteDataSet("Usp_Load_User_Detail_Sp", "1", "LogRequest", param);
            if (ds != null)
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    lblusername.Text = ds.Tables[0].Rows[0]["Emp_Name"].ToString();
                    lbluseremail.Text = ds.Tables[0].Rows[0]["Email_Id"].ToString();
                    lblreportingemail.Text = ds.Tables[0].Rows[0]["Reporting_Email_Id"].ToString();
                }
            }
        }

    }
}