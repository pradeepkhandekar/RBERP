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
    public partial class Software_Request_List_Report : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                Load_Grid();
            }
        }

        public void Load_Grid()
        {
            try
            {
                string[] param = new string[2];
                param[0] = "Requested_By";
                param[1] = Request.Cookies["empcode"].Value.ToString();
                //param[1] = "RB40000255";
                CommanDataLoad.Load_Gridview(GridView1, "Usp_Load_Sw_Request_Report", "1", "Software_Request_Report", param);
            }
            catch (Exception ex)
            {
                lblmsg.Visible = true;
                lblmsg.Text = "Some Error" + ex.Message.ToString();            
            }

            if (GridView1.Rows.Count > 0)
            {
                lblmsg.Visible = false;
            }
            else
            {
                lblmsg.Visible = true;
                lblmsg.Text = "No Pending Approval Request...!";
            }
        }
    }
}