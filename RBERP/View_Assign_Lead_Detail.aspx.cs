using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace RBERP
{
    public partial class View_Assign_Lead_Detail : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack )
            {
                Load_Grid();
            }
        }

        protected void Load_Grid()
        {
            try
            {
                string[] param1 = new string[10];
                param1[0] = "FromDt";
                param1[1] = Convert.ToString(Request.QueryString["fdate"]);
                param1[2] = "ToDt";
                param1[3] = Convert.ToString(Request.QueryString["tdate"]);
                param1[4] = "Emp_Code";
                param1[5] = Convert.ToString(Request.QueryString["Emp_Code"]);
                param1[6] = "Type";
                param1[7] = Convert.ToString(Request.QueryString["type"]);
                param1[8] = "lead_staus_id";
               if(Convert.ToString(Request.QueryString["lead_status_id"].ToString())!= "undefined")
                { param1[9] = Convert.ToString(Request.QueryString["lead_status_id"]); }
               else
                { param1[9] = "0"; }
              

                if (Convert.ToString(Request.QueryString["type"]).Contains("ST"))
                {
                    CommanDataLoad.Load_Gridview(grdDetails, "USP_Load_Lead_Detail_statusWise", "1", "View Assign Lead Detail", param1);
                }
                else
                {
                    CommanDataLoad.Load_Gridview(grdDetails, "USP_Load_Assign_Lead_Detail", "1", "View Assign Lead Detail", param1);
                }
                }

            catch
            {
                throw;
            }
            finally
            {

            }
        }

        protected void grdDetails_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            if (e.CommandName == "ShowPopup")
            {
                LinkButton btndetails = (LinkButton)e.CommandSource;
                GridViewRow gvrow = (GridViewRow)btndetails.NamingContainer;
                string Leadid = "";
                Leadid = grdDetails.DataKeys[gvrow.RowIndex].Value.ToString();

                Load_Lead_History(Leadid);
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
        protected void Load_Lead_History(string Lead_Id)
        {
            try
            {
                string[] param = new string[2];
                param[0] = "Lead_Id";
                param[1] = Lead_Id;

                CommanDataLoad.Load_Gridview(grdHistory, "USP_Load_Lead_Detail_History", "1", "View Assign Lead Detail", param);
                Popup(true);
            }
            catch (Exception ex)
            {
                //lblmsg.Text = "Some Error" + ex.Message.ToString();            
            }
        }
    }
}