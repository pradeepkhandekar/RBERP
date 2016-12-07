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
    public partial class Sw_Request_List_Details : System.Web.UI.Page
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
                CommanDataLoad.Load_Gridview(GridView1, "Usp_Load_Sw_Request_List_Sp", "0", "Sw_Request_List_Details", "");
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
                lblmsg.Text = "Not found Request List...!";
            }
        }

    }

   
}