using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;


namespace RBERP
{
    public partial class View_Playout_Detail : System.Web.UI.Page
    {

       
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                
                    Fill_Grid();
              

            }
        }

        protected void grdDetails_RowDataBound(object sender, GridViewRowEventArgs e)
        {
           
        }

        public void Fill_Grid()
        {
            try
            {
                string[] param1 = new string[2];
                param1[0] = "Id";
                param1[1] = Convert.ToString(Request.QueryString["Id"]);
               
                CommanDataLoad.Load_Gridview(grdDetails, "Usp_LoadPayout_Details", "1", "playout_detail", param1);
            }

            catch
            {
                throw;
            }
            finally
            {

            }
        }

    }

}