using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace RBERP
{
    public partial class Daily_Planning : System.Web.UI.Page
    {

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                
                txtDate.Text = DateTime.Now.ToString("MM/dd/yyyy");                
                Chk_Reporting();
                Load_Time();   
            }
        }
        
        public void Load_Time()
        {
            DateTime StartTime = DateTime.ParseExact("09:00", "HH:mm", null);
            DateTime EndTime = DateTime.ParseExact("21:00", "HH:mm", null);

            TimeSpan Interval = new TimeSpan(0, 15, 0);
            ddlStartTime.Items.Clear();
            ddlEndTime.Items.Clear();
            while (StartTime <= EndTime)
            {
                ddlStartTime.Items.Add(StartTime.TimeOfDay.ToString());
                ddlEndTime.Items.Add(StartTime.TimeOfDay.ToString());
                StartTime = StartTime.Add(Interval);
            }
            ddlStartTime.Items.Insert(0, new ListItem("--Select--", "-1"));
            ddlEndTime.Items.Insert(0, new ListItem("--Select--", "-1"));

        }

       

        public void Chk_Reporting()
        {
            try
            {
                string[] param = new string[2];
                param[0] = "Empcode";
                param[1] = Request.Cookies["empcode"].Value.ToString();

                DataSet ds = new DataSet();

                ds = CommanDataLoad.ExecuteDataSet("USP_Chk_ReportingEmp", "1", "Daily_Planning", param);

                if(ds.Tables[0].Rows.Count > 0)
                {
                   
                    Load_SelfGrid();
                    Load_Grid();
                }
                else
                {                    
                    Load_SelfGrid();
                }
               
            }
            catch (Exception ex)
            {
                //lblmsg.Text = "Some Error" + ex.Message.ToString();            
            }
        }

        public void Load_SelfGrid()
        {
            try
            {
                string[] param = new string[4];
                param[0] = "Empcode";
                param[1] = Request.Cookies["empcode"].Value.ToString();
                param[2] = "Plan_Date";
                param[3] = txtDate.Text;
                CommanDataLoad.Load_Gridview(GridView3, "USP_Load_EMP_Daily_Planing", "1", "Daily_Planing", param);
            }
            catch (Exception ex)
            {
                //lblmsg.Text = "Some Error" + ex.Message.ToString();            
            }
        }

        public void Load_Grid()
        {
            try
            {

                string[] param = new string[4];
                param[0] = "Empcode";
                param[1] = Request.Cookies["empcode"].Value.ToString();
                param[2] = "Plan_Date";
                param[3] = txtDate.Text;
                CommanDataLoad.Load_Gridview(GridView1, "USP_Load_EMP_Team_Daily_Planing", "1", "Daily_Planing", param);
            }
            catch (Exception ex)
            {
                //lblmsg.Text = "Some Error" + ex.Message.ToString();            
            }
        }

        protected void btnSubmit_Click(object sender, EventArgs e)
        {
            try
            {
                int rowaffected;
                string Emp_Code = Request.Cookies["empcode"].Value.ToString();
                //DateTime currentTime = new DateTime();
                //currentTime.TimeOfDay;
                if (Convert.ToDateTime(ddlStartTime.Text) > (Convert.ToDateTime(ddlEndTime.Text)))
                {
                    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Start date must be less than end Date')", true);
                    return;
                }
                string[] param = new string[14];
                param[0] = "Plan_Date";
                param[1] = txtDate.Text;
                param[2] = "StartTime";
                param[3] = ddlStartTime.SelectedValue;
                param[4] = "EndTime";
                param[5] = ddlEndTime.SelectedValue;
                param[6] = "User_Remark";
                param[7] = txtRemark.Text;
                param[8] = "User_Achieve";
                param[9] = txtAchieve.Text;
                param[10] = "Emp_Code";
                param[11] = Request.Cookies["empcode"].Value.ToString();
                param[12] = "Ip_Addr";
                param[13] = ClsConnection.StrIP;

                string[] param1 = new string[8];
                param1[0] = "Plan_Date";
                param1[1] = txtDate.Text;
                param1[2] = "StartTime";
                param1[3] = ddlStartTime.SelectedValue;
                param1[4] = "EndTime";
                param1[5] = ddlEndTime.SelectedValue;
                param1[6] = "Emp_Code";
                param1[7] = Request.Cookies["empcode"].Value.ToString();
                DataSet ds = new DataSet();
                ds = CommanDataLoad.ExecuteDataSet("Select * from Employee_Daily_Planning where StartTime = '" + ddlStartTime.SelectedValue + "' And EndTime = '" + ddlEndTime.SelectedValue + "' And Emp_Code = '" + Emp_Code + "' And Plan_Date = '" + txtDate.Text + "'", "2", "Daily_Planing", "");
                //ds = CommanDataLoad.ExecuteDataSet("usp_Load_Employee_planning", "1", "Daily_Planing", param1);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    rowaffected = CommanDataLoad.ExecuteNonQuery("USP_Update_Daily_Planning", "1", "Daily_Planing", param);
                }
                else
                {
                    
                    rowaffected = CommanDataLoad.ExecuteNonQuery("USP_Insert_Emp_Daily_Planing", "1", "Daily_Planing", param);
                }
                if (rowaffected > 0)
                {
                   Response.Write("<script>alert('Record Saved Successfully.');</script>");
                }
                Load_SelfGrid();
                ClearControls();
                ds.Tables.Clear();
            }
            catch (Exception ex)
            {
                //lblmsg.Text = "Some Error" + ex.Message.ToString();            
            }
        }

        protected void btnReset_Click(object sender, EventArgs e)
        {
            ClearControls();
        }

        public void ClearControls()
        {
            ddlStartTime.SelectedValue = "-1";
            ddlEndTime.SelectedValue = "-1";
            txtRemark.Text = "";
            txtAchieve.Text = "";
        }

        protected void GridView1_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            int index = 0;
            GridViewRow row;
            GridView grid = sender as GridView;

            if (e.CommandName == "RowItemDuration")
            {
                index = Convert.ToInt32(e.CommandArgument);
                row = grid.Rows[index];

                string Empcode = "", PlanDate = "", StartTime = "",EndTime="";
                Empcode = row.Cells[2].Text;
                PlanDate = row.Cells[3].Text;
                StartTime = row.Cells[4].Text;
                EndTime = row.Cells[5].Text;              

                mpe_Commercial.Show();
                Load_Lead_Details(Empcode, PlanDate, StartTime, EndTime);
            }
        }

        public void Load_Lead_Details(string Empcode, string PlanDate, string StartTime, string EndTime)
        {
            try
            {
                string[] param = new string[8];
                param[0] = "Empcode";
                param[1] = Empcode;
                param[2] = "Plan_Date";
                param[3] = PlanDate;
                param[4] = "StartTime";
                param[5] = StartTime;
                param[6] = "EndTime";
                param[7] = EndTime;

                CommanDataLoad.Load_Gridview(GridView2, "USP_Load_Emp_Lead_Detail", "1", "Daily_Planing", param);
            }
            catch (Exception ex)
            {
                //lblmsg.Text = "Some Error" + ex.Message.ToString();            
            }
        }

        protected void txtDate_TextChanged(object sender, EventArgs e)
        {
            Chk_Reporting();
        }

        protected void GridView1_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            GridView1.PageIndex = e.NewPageIndex;
            Load_Grid();
        }

        protected void GridView3_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            int index = 0;
            GridViewRow row;
            GridView grid = sender as GridView;

            if (e.CommandName == "RowItemDuration")
            {
                index = Convert.ToInt32(e.CommandArgument);
                row = grid.Rows[index];

                string Empcode = "", PlanDate = "", StartTime = "", EndTime = "";
                Empcode = row.Cells[2].Text;
                PlanDate = row.Cells[3].Text;
                StartTime = row.Cells[4].Text;
                EndTime = row.Cells[5].Text;

                mpe_Commercial.Show();
                Load_Lead_Details(Empcode, PlanDate, StartTime, EndTime);
            }
        }

        protected void GridView3_SelectedIndexChanged(object sender, EventArgs e)
        {
            txtDate.Text = GridView3.SelectedRow.Cells[3].Text;
            ddlStartTime.Text = GridView3.SelectedRow.Cells[4].Text;
            ddlEndTime.Text = GridView3.SelectedRow.Cells[5].Text;
            txtRemark.Text = GridView3.SelectedRow.Cells[6].Text;
            txtAchieve.Text = GridView3.SelectedRow.Cells[7].Text;
        }

        protected void ddlEndTime_SelectedIndexChanged(object sender, EventArgs e)
        {
            string Emp_Code = Request.Cookies["empcode"].Value.ToString();
            DataSet ds = new DataSet();
            ds = CommanDataLoad.ExecuteDataSet("Select User_Remark,User_Achieve from Employee_Daily_Planning where StartTime = '" + ddlStartTime.Text + "' And EndTime = '" + ddlEndTime.Text + "' And Plan_Date = '" + txtDate.Text +"' And Emp_Code = '" + Emp_Code + "'", "2", "Daily_Planning", "");
            if (ds != null)
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    txtRemark.Text = ds.Tables[0].Rows[0]["User_Remark"].ToString();
                    txtAchieve.Text = ds.Tables[0].Rows[0]["User_Achieve"].ToString();
                }
                else
                {
                    txtRemark.Text = "";
                    txtAchieve.Text = "";
                    ds.Tables.Clear();
                    Emp_Code = "";
                }
            }
            
           
        }
     }
}