using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using RBERP.Class;


public partial class Designation_Master : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //if (CommanDataLoad.CheckUserRights("23", Request.Cookies["userid"].Value.ToString()) == 0)
        //{
        //    Response.Write("Please Login Again");
        //    ClientScript.RegisterClientScriptBlock(this.GetType(), "NO ACCESS", "<script language=javascript>javascript:subRedirectToDefault1();</script>");
        //    return;
        //}
        BindGrid();


    }

    private void BindGrid()
    {
        CommanDataLoad.Load_Gridview(GridView1, "select * from [Designation_Master] ", "0", "Designation_master", "");
    }


    



    private void ClearControls()
    {
       
        txtDesignation.Text = "";
        
    }
   
    protected void GridView1_SelectedIndexChanged(object sender, EventArgs e)
    {
        Label lbldept = (Label)GridView1.SelectedRow.FindControl("Label2");
    
        lblid.Text = GridView1.SelectedRow.Cells[2].Text;
        txtDesignation.Text=GridView1.SelectedRow.Cells[3].Text;
    }

   


    //protected void btnsubmit_Click(object sender, EventArgs e)
    //{
    //    try
    //    {

    //        string[] param = new string[10];

    //        param[0] = "Designation_Name";
    //        param[1] = txtDesignation.Text;
    //        param[2] = "ip";
    //        param[3] = ClsConnection.StrIP;
    //        param[4] = "userid";
    //        param[5] = ClsConnection.Userid;
    //        param[6] = "desigid";
    //        param[7] = lblid.Text;
    //        param[8] = "deptid";
    //        param[9] = DdlDept.SelectedValue;

    //        int rowaffected = CommanDataLoad.ExecuteNonQuery("usp_Designation_Master_Insert", "1", "Designation_Master", param);
    //        if (rowaffected > 0)
    //        {
    //            Response.Write("<script>alert('Record Saved Successfully.');</script>");
    //        }
    //        BindGrid();
    //        ClearControls();

    //    }
    //    catch (Exception ex)
    //    {
    //        lblmsg.Text = "Some Error" + ex.Message.ToString();
    //        //Console.WriteLine("Some ERROR" + ex.Message.ToString());
    //    }
    //}

   
    protected void Button1_Click1(object sender, EventArgs e)
    {
        txtDesignation.Text = "";
    }

    protected void Button2_Click(object sender, EventArgs e)
    {
        
            try
            {

                string[] param = new string[8];

                param[0] = "Designation_Name";
                param[1] = txtDesignation.Text;
                param[2] = "ip";
                param[3] = ClsConnection.StrIP;
                param[4] = "userid";
                param[5] = ClsConnection.Userid;
                param[6] = "desigid";
                param[7] = lblid.Text;
             

                int rowaffected = CommanDataLoad.ExecuteNonQuery("usp_Designation_Master_Insert", "1", "Designation_Master", param);
                if (rowaffected > 0)
                {
                    Response.Write("<script>alert('Record Saved Successfully.');</script>");
                }
                BindGrid();
                ClearControls();

            }
            catch (Exception ex)
            {
                lblmsg.Text = "Some Error" + ex.Message.ToString();
                //Console.WriteLine("Some ERROR" + ex.Message.ToString());
            }
        }



    // protected void GridView1_SelectedIndexChanged(object sender, EventArgs e)
    // {
    //     //id.Text = GridView1.SelectedRow.Cells[2].Text;
    //     txtDesignation.Text = GridView1.SelectedRow.Cells[3].Text;

    //}
    //protected void ImageButton1_Click(object sender, ImageClickEventArgs e)
    //{
    //    GridViewExportUtil.Export("Employee_Designation.xls", GridView1);
    //}

}