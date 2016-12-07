using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace RBERP
{
    public partial class Target_Report : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if(!IsPostBack)
            {
                Lod_Grid_Data();

            }
        }
        public void Lod_Grid_Data()
        {
            string[] Param = new string[2];
            Param[0] = "emp_code";
            Param[1] = Request.Cookies["empcode"].Value.ToString();
            //Param[1] ="131";
            CommanDataLoad.Load_Gridview(GridView1, "Usp_Load_TargetedData", "1", "Target_Report", Param);
            
        }
       
        protected void GridView1_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow || e.Row.RowType == DataControlRowType.Separator)
            {
                e.Row.Cells[0].Text = Convert.ToInt32(e.Row.RowIndex + 1).ToString();

            }
        }
    }
}