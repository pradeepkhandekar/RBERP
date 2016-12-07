using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace RBERP
{
    public partial class VerticalStatusLeadDetails : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            if (!Page.IsPostBack )
            {
                Load_Grid();
            }

            if (Request.QueryString["Vertical_Id"] =="" && Request.QueryString["Lead_Status_id"] == "")
            {

            }
        }

        protected void Load_Grid()
        {
            try
            {
                string[] param = new string[6];
                param[0] = "Vertical_Id";
                param[1] = Request.QueryString["Vertical_Id"];
                param[2] = "Lead_Status_id";
                param[3] = Request.QueryString["Lead_Status_id"];
                param[4] = "Emp_Code";
                param[5] = Request.Cookies["empcode"].Value.ToString();
                CommanDataLoad.Load_Gridview(GridView1, "USP_Load_LeadDetail", "1", "Vertical Lead Details", param);


            }
            catch (Exception ex)
            {

            }
        }
    }
}