using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Web.Services;
using System.Configuration;
using System.Data.SqlClient;
namespace RBERP
{
    public partial class Manage_Leads : System.Web.UI.Page
    {
        public DataSet ds = new DataSet();
        protected void Page_Load(object sender, EventArgs e)
        {
           //Session["empcode"] = "RB40000043";
           // Response.Cookies["empcode"].Value = "RB40000043";
       
            if (!IsPostBack)
            {
               
                txtfromdt.Text = DateTime.Now.AddDays(-1).ToShortDateString();
                txttodt.Text = DateTime.Now.ToShortDateString();
               BindGrid();
            }
        }
        [WebMethod]
        public static void CloneData(string prefix)
        {
            string[] param1 = new string[2];
            param1[0] = "str";
            param1[1] = prefix;
           int a= CommanDataLoad.ExecuteNonQuery("sp_clone_lead_data", "1", "Manage Lead", param1);
            
        }
        [WebMethod]
        public static void DeleteData(string prefix)
        {

            string[] param1 = new string[2];
            param1[0] = "str";
            param1[1] = prefix;
            int a = CommanDataLoad.ExecuteNonQuery("sp_delete_lead_data", "1", "Manage Lead", param1);


        }
        [WebMethod]
        public static string[] GetCities(string prefix)
        {
            List<string> data = new List<string>();

          DataSet ds = CommanDataLoad.ExecuteDataSet("select City_name, City_Id from City_master where is_active=1 and City_Name like '%"+ prefix + "%'", "2", "Manage Lead","");
            int i = 0;
            while (i < ds.Tables[0].Rows.Count  )
            {
                data.Add(string.Format("{0}-{1}", ds.Tables[0].Rows[i]["City_Name"], ds.Tables[0].Rows[i]["City_ID"]));

                i = i + 1;
            }
        
            return data.ToArray();
        }
        [WebMethod]
        public static string[] Getstatus(string prefix)
        {
            List<string> data = new List<string>();

            DataSet ds = CommanDataLoad.ExecuteDataSet("select lead_status_id, lead_status  from lead_status_master where lead_status like '%" + prefix + "%' order by lead_status", "2", "Manage Lead", "");
            int i = 0;
            while (i < ds.Tables[0].Rows.Count)
            {
                data.Add(string.Format("{0}-{1}", ds.Tables[0].Rows[i][1], ds.Tables[0].Rows[i][0]));

                i = i + 1;
            }

            return data.ToArray();
        }

        [WebMethod(enableSession:true)]
        public static string[] Getemp(string prefix)
        {
            List<string> data = new List<string>();
            string empcode = HttpContext.Current.Request.Cookies["empcode"].Value.ToString();
            DataSet ds = CommanDataLoad.ExecuteDataSet("select emp_code,name from dbo.get_child_emp('" + empcode + "') where name like '%"+ prefix +"%'   order by name", "2", "Manage Lead", "");
            int i = 0;
            while (i < ds.Tables[0].Rows.Count)
            {
                data.Add(string.Format("{0}-{1}", ds.Tables[0].Rows[i][1], ds.Tables[0].Rows[i][0]));

                i = i + 1;
            }

            return data.ToArray();
        }

        //[WebMethod(enableSession: true)]
        //public static Class.ClsManageLeads[] BindDatatable(String prefix)
        //{
        //    string empcode = HttpContext.Current.Request.Cookies["empcode"].Value.ToString();
        //    DataSet ds = new DataSet();
        //    string[] param1 = new string[12];
        //    param1[0] = "empcode";
        //    // param1[1] = "RB40000401";
        //    if (HttpContext.Current.Request.QueryString.Count > 0)
        //    {
        //        param1[1] = HttpContext.Current.Request.QueryString["emp_code"].ToString();
        //    }
        //    else
        //    {
        //        param1[1] = empcode.ToString();
        //    }
        //    param1[2] = "cityid";
        //    param1[3] = "0";
        //    param1[4] = "Lead_Status_id";
        //    param1[5] ="0";
        //    param1[6] = "Emp_Code";
        //    param1[7] = "0";
        //    param1[8] = "fdate";
        //    param1[9] = "";
        //    param1[10] = "tdate";
        //    param1[11] = "";
        //    ds = CommanDataLoad.ExecuteDataSet("SpDispManageLeadData", "1", "Manage Lead List", param1);
       
        //    List<Class.ClsManageLeads> Data = new List<Class.ClsManageLeads>();
        //    if (ds != null)
        //    {
        //        if (ds.Tables[0].Rows.Count > 0)
        //        {
                
        //            Int32 i = 0;
        //            for (i = 0; i < ds.Tables[0].Rows.Count; i++)
        //            {
        //                Class.ClsManageLeads cl = new Class.ClsManageLeads();
        //                cl.LeadId = ds.Tables[0].Rows[i]["leadid"].ToString();
        //                cl.name = ds.Tables[0].Rows[i]["name"].ToString();
        //                cl.lead_status = ds.Tables[0].Rows[i]["leadstatus"].ToString();
        //                cl.mobile = ds.Tables[0].Rows[i]["mobile"].ToString();
        //                cl.leaddate = ds.Tables[0].Rows[i]["leaddate"].ToString();
        //                cl.nextdate = ds.Tables[0].Rows[i]["next_date"].ToString();
        //                cl.remark = ds.Tables[0].Rows[i]["remark"].ToString();
        //                cl.companyname = ds.Tables[0].Rows[i]["companyname"].ToString();
        //                cl.designation = ds.Tables[0].Rows[i]["designation"].ToString();
        //                cl.phone = ds.Tables[0].Rows[i]["phone"].ToString();
        //                cl.cityname = ds.Tables[0].Rows[i]["city_name"].ToString();
        //                cl.empcode = ds.Tables[0].Rows[i]["emp_code"].ToString();
        //                cl.bankname = ds.Tables[0].Rows[i]["bank_name"].ToString();
        //                cl.empname = ds.Tables[0].Rows[i]["emp_name"].ToString();
        //                Data.Add(cl);

        //            }
        //        }
        //    }
        //    return Data.ToArray();
        //}
        private void BindGrid()
        {
             ds = new DataSet();
            string[] param1 = new string[12];
            param1[0] = "empcode";
            // param1[1] = "RB40000401";
            if (Request.QueryString.Count > 0)
            {
                param1[1] = Request.QueryString["emp_code"].ToString();
            }
            else
            {
                param1[1] = Request.Cookies["empcode"].Value.ToString();
            }
            param1[2] = "cityid";
            param1[3] = hfCityId.Value;
            param1[4] = "Lead_Status_id";
            param1[5] = hfstatus.Value;
            param1[6] = "Emp_Code";
            param1[7] = hfemp.Value;
            param1[8] = "fdate";
            param1[9] = txtfromdt.Text;
            param1[10] = "tdate";
            param1[11] = txttodt.Text;
            ds = CommanDataLoad.ExecuteDataSet("SpDispManageLeadData", "1", "Manage Lead List", param1);
           // tlist.InnerHtml = "";
            //if (ds != null)
            //{
            //    if (ds.Tables[0].Rows.Count > 0)
            //    {
            //        String UnreadText = "";
            //        Int32 i = 0;
            //        for (i = 0; i < ds.Tables[0].Rows.Count; i++)
            //        {

            //            UnreadText += "<tr style='FONT-SIZE: 12pt;font face ='Arial' >";

                      
            //            UnreadText += "			<td class=\"center\"><input class=\"checkbox\" id='chk' value=" + ds.Tables[0].Rows[i]["leadid"] +" name=\"check[]\" type =checkbox /> </td>";


            //            UnreadText += "			<td class=\"center\">";
            //            UnreadText += "				<a  href=\"Manage_lead_data.aspx?leadid=" + ds.Tables[0].Rows[i]["leadid"] + "\">";

            //            UnreadText += "					"+ ds.Tables[0].Rows[i]["leadid"] + "";
            //            UnreadText += "				</a>";

            //            UnreadText += "			</td>";
            //            UnreadText += "			<td class=\"center\">" + ds.Tables[0].Rows[i]["name"].ToString() + "</td>";
            //            UnreadText += "			<td class=\"center\">" + ds.Tables[0].Rows[i]["emp_code"].ToString() + "</td>";
            //            UnreadText += "			<td class=\"left\">" + ds.Tables[0].Rows[i]["emp_name"].ToString() + "</td>";
            //            UnreadText += "			<td class=\"center\">" + ds.Tables[0].Rows[i]["City_Name"].ToString() + "</td>";
            //            UnreadText += "			<td class=\"left\">" + ds.Tables[0].Rows[i]["Mobile"].ToString() + "</td>";
            //            UnreadText += "			<td class=\"center\">" + ds.Tables[0].Rows[i]["leadstatus"].ToString() + "</td>";
            //            UnreadText += "			<td class=\"center\">" + ds.Tables[0].Rows[i]["next_date"].ToString() + "</td>";
            //            UnreadText += "			<td class=\"center\">" + ds.Tables[0].Rows[i]["remark"].ToString() + "</td>";

                       
            //            UnreadText += "		</tr>";
            //            tlist.InnerHtml = UnreadText;

            //            //i++;
            //        }
            //    }
            //}
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            BindGrid();
        }
    }
}