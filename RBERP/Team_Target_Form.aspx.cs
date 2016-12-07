using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace RBERP
{
    public partial class Team_Target_Form : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {

            }
        }

        protected void btnShow_Click(object sender, EventArgs e)
        {
            Load_Grid();

        }
        
        protected void Load_Grid()
        {
            try
            {
              
                string[] param = new string[6];
                param[0] = "Empcode";
                param[1] = Request.Cookies["empcode"].Value.ToString();
                param[2] = "Month";
                param[3] = ddlMonth.SelectedValue;
                param[4] = "Year";
                param[5] = ddlYear.SelectedValue;

                CommanDataLoad.Load_Gridview(GridView1, "USP_Load_Team", "1", "Team_Target_Form", param);
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
                if (GridView1.Rows.Count > 0)
                {

                    int j = 0, cnt = 0;
                    while (j < GridView1.Rows.Count)
                    {
                        TextBox txtIndividualTarget = (TextBox)GridView1.Rows[j].Cells[5].FindControl("txtIndividualTarget");
                        TextBox txtTeamTarget = (TextBox)GridView1.Rows[j].Cells[6].FindControl("txtTeamTarget");
                        if (txtIndividualTarget.Text != "" && txtTeamTarget.Text != "")
                        {
                            cnt = cnt + 1;
                        }
                        j = j + 1;
                    }
                    if (cnt > 0)
                    {
                        int i = 0;
                        while (i < GridView1.Rows.Count)
                        {
                            TextBox txtIndividualTarget = (TextBox)GridView1.Rows[i].Cells[5].FindControl("txtIndividualTarget");
                            TextBox txtTeamTarget = (TextBox)GridView1.Rows[i].Cells[6].FindControl("txtTeamTarget");
                            if (txtIndividualTarget.Text != "" && txtTeamTarget.Text != "")
                            {
                                string[] param = new string[16];
                                param[0] = "Emp_Id";
                                param[1] = GridView1.Rows[i].Cells[1].Text;
                                param[2] = "Designation_Id";
                                param[3] = GridView1.Rows[i].Cells[3].Text;
                                param[4] = "Individual_Target";
                                param[5] = txtIndividualTarget.Text;
                                param[6] = "Team_Target";
                                param[7] = txtTeamTarget.Text;
                                param[8] = "Year";
                                param[9] = ddlYear.SelectedValue;
                                param[10] = "Month";
                                param[11] = ddlMonth.SelectedValue;
                                param[12] = "Empcode";
                                param[13] = Request.Cookies["empcode"].Value.ToString();
                                param[14] = "Ip_Addr";
                                param[15] = ClsConnection.StrIP;

                                CommanDataLoad.ExecuteNonQuery("USP_Insert_Team_Target_Monthly", "1", "Team_Target_Form", param);

                            }
                            
                            i = i + 1;
                        }

                        Response.Write("<script>alert('Record Inserted Successfully.');</script>");
                        ClearControls();
                    }
                    else
                    {
                        lblmsg.Text = "Enter Atleast One Individual & Team Target...";
                        return;
                    }

                }
            }
            catch (Exception ex)
            {
                lblmsg.Text = "Some Error" + ex.Message.ToString();
                //Console.WriteLine("Some ERROR" + ex.Message.ToString());
            }

        }
        protected void ClearControls()
        {
            GridView1.DataSource = "";
            GridView1.DataBind();
        }
        protected void btnReset_Click(object sender, EventArgs e)
        {
            ClearControls();
        }

        protected void GridView1_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if(e.Row.RowIndex==0)
            {
                e.Row.Font.Bold = true;
                e.Row.ForeColor = System.Drawing.Color.Red;
                e.Row.BackColor = System.Drawing.Color.Yellow;
                e.Row.Enabled = false;

            }
        }
    }
}