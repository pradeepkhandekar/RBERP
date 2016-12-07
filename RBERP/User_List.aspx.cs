using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace RBERP
{
    public partial class User_List : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                BindGrid();
            }
        }
        private void BindGrid()
        {
            CommanDataLoad.Load_Gridview(dgemployeelist, "Usp_Load_User_Data", "1", "User_List", "");

        }

        protected void dgemployeelist_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            dgemployeelist.PageIndex = e.NewPageIndex;
            BindGrid();
        }
    }
}