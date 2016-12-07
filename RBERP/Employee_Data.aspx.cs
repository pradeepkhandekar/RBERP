using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

using System.Data.SqlClient;
using System.Configuration;
using System.Drawing;
using System.Web.Mail;

namespace RBERP
{
    public partial class Employee_Data : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if(!IsPostBack)
            {
                BindGrid();
            }
        }


        private void BindGrid()
    {
        DataSet ds = new DataSet();
        ds = CommanDataLoad.ExecuteDataSet("SpDispEmployee_List", "1", "Employee List", "");
        if (ds != null)
        {
            if (ds.Tables[0].Rows.Count > 0)
            {
                    String UnreadText = "";
                    Int32 i = 0;
                    for (i=0; i<ds.Tables[0].Rows.Count;i++)
                    {

                        UnreadText += "<tr style='FONT-SIZE: 12pt;font face ='Arial' >";
                        UnreadText += "			<td  class=\"left\">" + ds.Tables[0].Rows[i]["EmployeeName"].ToString() + "</td>";
                        UnreadText += "			<td class=\"center\">" + ds.Tables[0].Rows[i]["EmpCode"].ToString() + "</td>";
                        UnreadText += "			<td class=\"center\">" + ds.Tables[0].Rows[i]["Company"].ToString() + "</td>";
                        UnreadText += "			<td class=\"left\">" + ds.Tables[0].Rows[i]["EMailID"].ToString() + "</td>";
                        UnreadText += "			<td class=\"center\">" + ds.Tables[0].Rows[i]["Department"].ToString() + "</td>";
                        UnreadText += "			<td class=\"left\">" + ds.Tables[0].Rows[i]["Reporting_Emp_name"].ToString() + "</td>";
                        UnreadText += "			<td class=\"center\">" + ds.Tables[0].Rows[i]["empid"].ToString() + "</td>";
                        UnreadText += "			<td class=\"center\">";
                        UnreadText += "				<a class=\"btn btn-info\" href=\"Employee_Master_Edit.aspx?empid=" + ds.Tables[0].Rows[i]["empid"] + "\">";
                        UnreadText += "					<i class=\"icon-edit icon-white\"></i>  ";
                        UnreadText += "					Edit";
                        UnreadText += "				</a>";
                      
                        UnreadText += "			</td>";
                        UnreadText += "		</tr>";
                        tlist.InnerHtml = UnreadText;
                        
                        //i++;
                    }
                }
        }
    }
    }
}