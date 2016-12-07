using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Configuration;
using System.Data.SqlClient;
namespace RBERP
{
    public partial class onlineemp : System.Web.UI.Page
    {
        public string _centerMap = string.Empty;
        public string _markers = string.Empty;
        public int _mapZoomLevel = 5; // initial zoom level of the map
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!this.IsPostBack)
            {
                GetData();
            }

        }
        private DataTable GetData()
        {
            return CommanDataLoad.ExecuteDataSet("spdispGoogleMap", "1", "", "").Tables[0];

          
        }
    }
}