using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Web.Services;


namespace RBERP
{
    public partial class Lead_Assign_TeleCaller_New : System.Web.UI.Page
    {
        public DataSet ds = new DataSet();
        protected void Page_Load(object sender, EventArgs e)
        {
            //Session["empcode"] = "RB40000043";
            //Response.Cookies["empcode"].Value = "RB40000043";
            if (!IsPostBack)
            {

                CommanDataLoad.Load_CommanDropDown(ddlstatus, "", "select * from lead_Status_Master order by lead_status asc", "0", "lead_Status_id", "Lead_Status", "Lead_status_Master", "");
                BindGrid();
            }
        }

        private void BindGrid()
        {
            ds = new DataSet();
            if (hfCityId.Value == "") hfCityId.Value = "0";
            if (hfemp.Value == "") hfemp.Value = "0";
           // DataSet ds = new DataSet();
            string[] param = new string[6];
            param[0] = "empcode";
            if (Request.QueryString.Count > 0)
            {
                param[1] = Request.QueryString["emp_code"].ToString();
            }
            else
            {
                param[1] = Session["empcode"].ToString();
            }
            // param[1] = hfemp.Value;
            param[2] = "cityid";
            param[3] = hfCityId.Value;
            param[4] = "@Status_Id";
            param[5] = ddlstatus.SelectedValue;
            ds = CommanDataLoad.ExecuteDataSet("SpDispLeads_Telecaller", "1", "Lead Assign Telecaller New", param);
            //tlist.InnerHtml = "";
            //if (ds != null)
            //{
            //    if (ds.Tables[0].Rows.Count > 0)
            //    {
            //        String UnreadText = "";
            //        Int32 i = 0;
            //        for (i = 0; i < ds.Tables[0].Rows.Count; i++)
            //        {

            //            UnreadText += "<tr style='FONT-SIZE: 12pt;font face ='Arial' >";


            //            UnreadText += "			<td class=\"center\"><input class=\"checkbox\" id='chk' value=" + ds.Tables[0].Rows[i]["lead_id"] + " name=\"check[]\" type =checkbox /> </td>";
            //            UnreadText += "			<td class=\"center\">" + ds.Tables[0].Rows[i]["lead_id"].ToString() + "</td>";
            //            UnreadText += "			<td class=\"center\">" + ds.Tables[0].Rows[i]["name"].ToString() + "</td>";
            //            UnreadText += "			<td class=\"left\">" + ds.Tables[0].Rows[i]["companyname"].ToString() + "</td>";
            //            UnreadText += "			<td class=\"center\">" + ds.Tables[0].Rows[i]["Designation"].ToString() + "</td>";
            //            UnreadText += "			<td class=\"left\">" + ds.Tables[0].Rows[i]["phone"].ToString() + "</td>";
            //            UnreadText += "			<td class=\"center\">" + ds.Tables[0].Rows[i]["mobile"].ToString() + "</td>";
            //            UnreadText += "			<td class=\"center\">" + ds.Tables[0].Rows[i]["city_name"].ToString() + "</td>";
            //            UnreadText += "			<td class=\"center\">" + ds.Tables[0].Rows[i]["email"].ToString() + "</td>";
            //            UnreadText += "			<td class=\"center\">" + ds.Tables[0].Rows[i]["Profession_name"].ToString() + "</td>";
            //            UnreadText += "			<td class=\"center\">" + ds.Tables[0].Rows[i]["monthlyincome"].ToString() + "</td>";
            //            UnreadText += "			<td class=\"center\">" + ds.Tables[0].Rows[i]["Product_name"].ToString() + "</td>";
            //            UnreadText += "			<td class=\"center\">" + ds.Tables[0].Rows[i]["lead_source"].ToString() + "</td>";
            //            UnreadText += "			<td class=\"center\">" + ds.Tables[0].Rows[i]["assign"].ToString() + "</td>";
            //            UnreadText += "			<td class=\"center\">" + ds.Tables[0].Rows[i]["lead_type"].ToString() + "</td>";
            //            UnreadText += "			<td class=\"center\">" + ds.Tables[0].Rows[i]["lead_status"].ToString() + "</td>";
            //            UnreadText += "		</tr>";
            //            tlist.InnerHtml = UnreadText;

            //            //i++;
            //        }
            // }
            //}
        }

       
        
        [WebMethod]
        public static string[] GetCities(string prefix)
        {
            List<string> data = new List<string>();

            DataSet ds = CommanDataLoad.ExecuteDataSet("select City_name, City_Id from City_master where City_Name like '%" + prefix + "%'", "2", "Lead Assign Telecaller New", "");
            int i = 0;
            while (i < ds.Tables[0].Rows.Count)
            {
                data.Add(string.Format("{0}-{1}", ds.Tables[0].Rows[i]["City_Name"], ds.Tables[0].Rows[i]["City_ID"]));

                i = i + 1;
            }

            return data.ToArray();
        }

        [WebMethod(enableSession: true)]
        public static string[] Getemp(string prefix)
        {
            List<string> data = new List<string>();
            string empcode = HttpContext.Current.Request.Cookies["empcode"].Value.ToString();
            DataSet ds = CommanDataLoad.ExecuteDataSet("select emp_code,name from dbo.get_child_emp('" + empcode + "') where name like '%" + prefix + "%'   order by name", "2", "Lead Assign Telecaller New", "");
            int i = 0;
            while (i < ds.Tables[0].Rows.Count)
            {
                data.Add(string.Format("{0}-{1}", ds.Tables[0].Rows[i][1], ds.Tables[0].Rows[i][0]));

                i = i + 1;
            }

            return data.ToArray();
        }

        [WebMethod]
        public static void DeleteData(string prefix)
        {

            string[] param1 = new string[2];
            param1[0] = "str";
            param1[1] = prefix;
            int a = CommanDataLoad.ExecuteNonQuery("USP_Delete_Lead_Telecaller", "1", "Lead Assign Telecaller New", param1);

        }

        [WebMethod]
        public static void UpdateData(string prefix, string emp_code)
        {
            string[] param = new string[4];
            param[0] = "str";
            param[1] = prefix;
            param[2] = "emp_code";
            param[3] = emp_code;

            int a = CommanDataLoad.ExecuteNonQuery("USP_Update_Lead_Telecaller", "1", "Lead Assign Telecaller New", param);

        }

        protected void btnRefresh_Click(object sender, EventArgs e)
        {
            BindGrid();
        }

        protected void ddlstatus_SelectedIndexChanged(object sender, EventArgs e)
        {
            BindGrid();
        }
    }
}