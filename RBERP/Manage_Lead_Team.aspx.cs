using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace RBERP 
{
    public partial class Manage_Lead_Team : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                //CommanDataLoad.Load_CommanDropDown(ddlteam, "", "select * from employee_master where reporting_emp='RB40000098' order by emp_name asc", "0", "emp_code", "emp_name", "Manage_Lead_Team", "");
                BindGrid();
            }
        }
        private void BindGrid()
        {
            string[] param = new string[2];
            param[0] = "emp_code";
            //  param[1] = "RB40000098";
            param[1] = Request.Cookies["empcode"].Value.ToString();
            CommanDataLoad.Load_Gridview(dgteam, "SpDispLeadTeamMembers", "1", "Manage_Leads_Team", param);


        }

        protected void dgteam_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            dgteam.PageIndex = e.NewPageIndex;
            BindGrid();
        }
    }
}