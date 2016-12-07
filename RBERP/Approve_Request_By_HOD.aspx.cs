using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using RBERP.Class;
using System.Data;
using System.Text;

namespace RBERP
{
    public partial class Approve_Request_By_HOD : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Load_Request_Details();
        }

        private void Load_Request_Details()
        {
            string[] param = new string[2];
            param[0] = "Request_Id";
            param[1] = Request.QueryString["Request_Id"].ToString();

            DataSet ds = new DataSet();
            ds = CommanDataLoad.ExecuteDataSet("Usp_Load_Request_Detail", "1", "Approve_Request_By_HOD", param);
            if (ds != null)
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    txtrequestno.Text = ds.Tables[0].Rows[0]["Request_ID"].ToString();
                    txtrequestdate.Text = ds.Tables[0].Rows[0]["Request_Date"].ToString();
                    txtreportingauth.Text = ds.Tables[0].Rows[0]["ReportAuthId"].ToString();
                    txtrequestedby.Text = ds.Tables[0].Rows[0]["Requested_By"].ToString();
                    txtrequesttitle.Text = ds.Tables[0].Rows[0]["RequestTitle"].ToString();
                    txtshortdescription.Text = ds.Tables[0].Rows[0]["Short_Description"].ToString();
                    txtreasonforchange.Text = ds.Tables[0].Rows[0]["Detail_Description"].ToString();
                    txtcategory.Text = ds.Tables[0].Rows[0]["RequestType"].ToString();
                }
            }
        }

        protected void btnsubmit_Click(object sender, EventArgs e)
        {
            try
            {
                string[] param = new string[12];
                param[0] = "Request_Id";
                param[1] = txtrequestno.Text;
                param[2] = "Remark";
                param[3] = txtremark.Text;
                param[4] = "HOD_Approve_Flag";
                param[5] = ddlapprove.SelectedValue;
                param[6] = "Update_IpAddress";
                param[7] = Request.UserHostAddress;
                param[8] = "Update_UserId";
                param[9] = Request.Cookies["UserId"].Value.ToString();
                //param[9] = "122";
                param[10] = "Update_by";
                param[11] = Request.Cookies["UserName"].Value.ToString();
                //param[11] = "p.n.Shetty";

                int rowaffected = CommanDataLoad.ExecuteNonQuery("Usp_Update_Authority_Approval", "1", "Approve_Request_By_HOD", param);
                if (rowaffected > 0)
                {
                    Response.Write("<script>alert('Request Id: " + txtrequestno.Text + " Approved Successfully.');</script>");
                }
            }
            catch (Exception ex)
            {
                lblmsg.Text = "Some Error" + ex.Message.ToString();
            }
        }
    }
}