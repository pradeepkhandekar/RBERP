using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Text;
using RBERP.Class;

namespace RBERP
{
    public partial class Sw_Request_Assigin_To_Developer : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if(!IsPostBack)
            {
                Load_Developer();
                Load_Request_Details();
            }
        }

        private void Load_Developer()
        {
            CommanDataLoad.Load_CommanDropDown(ddldevelpoer, "", "Usp_Load_Developer", "0", "emp_code", "name", "Sw_Request_Assigin_To_Developer", "");
        }

        private void Load_Request_Details()
        {
            string[] param = new string[2];
            param[0] = "Request_Id";
            param[1] = Request.QueryString["Request_Id"].ToString();

            DataSet ds = new DataSet();
            ds = CommanDataLoad.ExecuteDataSet("Usp_Load_Assign_Request_Detail", "1", "Sw_Request_Assigin_To_Developer", param);
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
                    txtsubcategory.Text = ds.Tables[0].Rows[0]["Sub_Category_Name"].ToString();
                }
            }
        }
        protected void btnsubmit_Click(object sender, EventArgs e)
        {
            try
            {
                string[] param = new string[10];
                param[0] = "Request_ID";
                param[1] = txtrequestno.Text;
                param[2] = "Assigned_To_Developer";
                param[3] = ddldevelpoer.SelectedValue;
                param[4] = "Remark";
                param[5] = txtremark.Text;
                param[6] = "Started_Date";
                param[7] = txtstartdate.Text;
                param[8] = "End_Date";
                param[9] = txtenddate.Text;

                int rowaffected = CommanDataLoad.ExecuteNonQuery("Usp_Update_Assign_Developer_Request", "1", "Sw_Request_Assigin_To_Developer", param);
                if (rowaffected > 0)
                {
                    Response.Write("<script>alert('Request Id: " + txtrequestno.Text + " Assign to Developer Successfully.');</script>");
                }
            }
            catch (Exception ex)
            {
                lblmsg.Visible = true;
                lblmsg.Text = "Some Error" + ex.Message.ToString();
            }
        }
    }
}