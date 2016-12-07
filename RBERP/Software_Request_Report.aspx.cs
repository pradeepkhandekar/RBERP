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
    public partial class Software_Request_Report : System.Web.UI.Page
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
                //string[] param = new string[4];
                //param[0] = "Empcode";
                //param[1] = Request.Cookies["empcode"].Value.ToString();
                //param[2] = "Plan_Date";
                //param[3] = txtDate.Text;
                CommanDataLoad.Load_Gridview(GridView1, "Usp_Load_Sw_Request_Report", "0", "Software_Request_Report", "");
            }
            catch (Exception ex)
            {
                lblmsg.Text = "Some Error" + ex.Message.ToString();            
            }
        }

    }
}