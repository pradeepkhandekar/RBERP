using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Department_Master : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //if (CommanDataLoad.CheckUserRights("22", Request.Cookies["userid"].Value.ToString()) == 0)
        //{
        //    Response.Write("Please Login Again");
        //    ClientScript.RegisterClientScriptBlock(this.GetType(), "NO ACCESS", "<script language=javascript>javascript:subRedirectToDefault1();</script>");
        //    return;
        //}
        if (!Page.IsPostBack)
        {
            BindGrid();            
        }
    }

    private void BindGrid()
    {
        CommanDataLoad.Load_Gridview(GridView1, "select * from Department_Master", "0", "Department", "");
    }
   
    private void ClearControls()
    {

        lblmsg.Text = "";
        Department_Name.Text = "";
    }
    protected void Reset_Click(object sender, ImageClickEventArgs e)
    {

        Department_Name.Text = "";
    }

    protected void GridView1_SelectedIndexChanged(object sender, EventArgs e)
    {
        lblid.Text = GridView1.SelectedRow.Cells[2].Text;
        Department_Name.Text = GridView1.SelectedRow.Cells[3].Text;
    }

    protected void btnsubmit_Click(object sender, EventArgs e)
    {
        try
        {
            string[] param = new string[6];

            param[0] = "Department_Name";
            param[1] = Department_Name.Text;
            param[2] = "ip";
            param[3] = ClsConnection.StrIP;
            param[4] = "UserId";
            param[5] = ClsConnection.Userid;


            int rowaffected = CommanDataLoad.ExecuteNonQuery("Usp_insert_Department_Master", "1", "Department Master", param);
            if (rowaffected > 0)
            {
                Response.Write("<script>alert('Record Saved Successfully.');</script>");
                BindGrid();
            }

            ClearControls();
            BindGrid();
        }

        catch (Exception ex)
        {
            lblmsg.Text = "Some Error" + ex.Message.ToString();
            //Console.WriteLine("Some ERROR" + ex.Message.ToString());            
        }
    }

    protected void btnreset_Click(object sender, EventArgs e)
    {
        ClearControls();
    }
}