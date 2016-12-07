using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace RBERP
{
    public partial class BranchWiseStatusReport : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                Load_Grid();
            }
        }

        protected void Load_Grid()
        {
            try
            {
                string[] param = new string[2];
                param[0] = "Emp_Code";
                param[1] = Request.Cookies["empcode"].Value.ToString();

                DataSet ds = new DataSet();
                ds = CommanDataLoad.ExecuteDataSet("USP_Load_VerticalWiseStatusRpt", "1", "Vertical Wise Status Report", param);

                if (ds.Tables[0].Rows.Count > 0)
                {
                    
                    DataTable dt = new DataTable();
                    int i = 0;
                    dt.Columns.Add("Sr.No.", typeof(string));
                    dt.Columns.Add("Vertical Name", typeof(string));

                    while (i < ds.Tables[2].Rows.Count)
                    {
                        dt.Columns.Add(ds.Tables[2].Rows[i].ItemArray[1].ToString(), typeof(string));// GetType(String));
                        i = i + 1;
                    }
                    dt.Columns.Add("Total", typeof(int));
                    string str;
                    i = 0;
                    int j = 0;
                    DataRow dr;
                    int Total = 0;
                    int[] StrTotal = new int[ds.Tables[2].Rows.Count];
                    while (i < ds.Tables[1].Rows.Count)
                    {
                        Total = 0;
                        dr = dt.NewRow();
                        dr[0] = i + 1;
                        dr[1] = ds.Tables[1].Rows[i].ItemArray[1] + "=" + ds.Tables[1].Rows[i].ItemArray[0];
                        j = 0;
                        while (j < ds.Tables[2].Rows.Count)
                        {

                            var results = from myRow in ds.Tables[0].AsEnumerable() where ((myRow.Field<int>("Vertical_Id") == Convert.ToInt16(ds.Tables[1].Rows[i].ItemArray[0].ToString())) && (myRow.Field<int>("Lead_Status_Id") == Convert.ToInt16(ds.Tables[2].Rows[j].ItemArray[0]))) select myRow.Field<int>("leadcnt");

                            dr[j + 2] = results.SingleOrDefault();
                            Total = Total + Convert.ToInt16(results.SingleOrDefault());
                            StrTotal[j] = StrTotal[j] + Convert.ToInt16(results.SingleOrDefault());
                            j = j + 1;
                        }

                        //    str = "<a target='_blank' href='SMN_FaultyStatus_Detail.aspx?region_id=" + ds.Tables[1].Rows[i].ItemArray[0].ToString() + "'>" + Total + "</a>";

                        dr[j + 2] = Total;

                        dt.Rows.Add(dr);
                       
                        i = i + 1;
                    }
                    Total = 0;
                    dr = dt.NewRow();
                    dr[0] = i + 1;
                    dr[1] = "Grand Total";
                    j = 0;
                    while (j < ds.Tables[2].Rows.Count)
                    {
                        dr[j + 2] = StrTotal[j];
                        Total = Total + Convert.ToInt16(dr[j + 2]);
                        j = j + 1;
                    }
                    dr[j + 2] = Total;
                    dt.Rows.Add(dr);
                    i = i + 1;

                    DataSet ds1 = new DataSet();
                    ds1.Tables.Add(dt);
                    GridView1.DataSource = ds1;
                    GridView1.DataBind();
                    
                    i = 0;
                    string[] StrRegion;
                    while (i < GridView1.Rows.Count - 1)
                    {
                        j = 0;
                        StrRegion = GridView1.Rows[i].Cells[1].Text.ToString().Split('=');
                        GridView1.Rows[i].Cells[1].Text = StrRegion[0];
                        while (j < ds.Tables[2].Rows.Count)
                        {
                            if (GridView1.Rows[i].Cells[j + 2].Text == "0")
                            {
                                GridView1.Rows[i].Cells[j + 2].Text = "0";
                            }
                            else
                            {
                                str = "<a  target='_blank' href='VerticalStatusLeadDetails.aspx?Vertical_Id=" + StrRegion[1] + "&Lead_Status_id=" + ds.Tables[2].Rows[j].ItemArray[0] + "'>" + GridView1.Rows[i].Cells[j + 2].Text + "</a>";
                                GridView1.Rows[i].Cells[j + 2].Text = str;
                            }
                            j = j + 1;
                        }

                        str = "<a target='_blank' href='VerticalStatusLeadDetails.aspx?Vertical_Id=" + StrRegion[1] + "'>" + GridView1.Rows[i].Cells[j + 2].Text + "</a>";

                        GridView1.Rows[i].Cells[j + 2].Text = str;
                        i = i + 1;
                    }

                    j = 0;
                    while (j < ds.Tables[2].Rows.Count)
                    {
                        str = "<a target='_blank' href='VerticalStatusLeadDetails.aspx?Lead_Status_id=" + ds.Tables[2].Rows[j].ItemArray[0] + "'>" + GridView1.Rows[i].Cells[j + 2].Text + "</a>";
                        GridView1.Rows[i].Cells[j + 2].Text = str;
                        j = j + 1;
                    }

                    GridView1.Rows[GridView1.Rows.Count - 1].Cells[GridView1.Rows[0].Cells.Count - 1].Text = "<a target='_blank' href='VerticalStatusLeadDetails.aspx?Lead_Status_id=0&Vertical_Id=0'>" + GridView1.Rows[GridView1.Rows.Count - 1].Cells[GridView1.Rows[0].Cells.Count - 1].Text + "</a>";

                }

            }
            catch (Exception ex)
            {
                //lblmsg.Text = "Some Error" + ex.Message.ToString();           
            }
        }

        protected void GridView1_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow || e.Row.RowType == DataControlRowType.Separator)
            {
                e.Row.Cells[0].Text = (Convert.ToInt16(e.Row.RowIndex) + 1).ToString();
            }
        }
    }
}