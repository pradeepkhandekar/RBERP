using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;


public partial class City_Master : System.Web.UI.Page
{
    private string isactive;
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            CommanDataLoad.Load_CommanDropDown(ddlstate, "", "select * from state_Master order by state_name asc", "0", "state_id", "state_name", "City_Master", "");
            BindGrid();
        }
    }

   
   
    private void ClearControls()
    {
        txtcityname.Text = "";
        ddlstate.SelectedItem.Text = "Select One";
        chkactive.Checked = false;
        txtcityname.Focus();
    }
    private void BindGrid()
    {
        CommanDataLoad.Load_Gridview(dgleadstatuslist, "Usp_Load_city", "1", "City Master", "");
    }

    protected void btnsubmit_Click(object sender, EventArgs e)
    {
        try
        {
            if (txtcityname.Text == "")
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please enter City Name')", true);
                return;
            }

            if (ddlstate.SelectedItem.Text == "--Select State--")
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Select State')", true);
                return;
            }

            if (chkactive.Checked == true)
            {
                isactive = "1";
            }
            else
            {
                isactive = "0";
            }

            DateTime localdate = DateTime.Now;
            string[] param = new string[12];
            param[0] = "City_Name";
            param[1] = txtcityname.Text;
            param[2] = "State_id";
            param[3] = ddlstate.SelectedValue;
            param[4] = "Is_Active";
            param[5] = isactive;
            param[6] = "Created_on";
            param[7] = string.Format("{0:s}", localdate);
            param[8] = "userid";
            param[9] = ClsConnection.Userid;
            param[10] = "ip";
            param[11] = ClsConnection.StrIP;



            int rowaffected = CommanDataLoad.ExecuteNonQuery("SpInsCity_Master", "1", "City_Master", param);
            if (rowaffected > 0)
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Record Saved Successfully')", true);
                BindGrid();
            }

            ClearControls();

        }

        catch (Exception ex)
        {
            ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Some Error' + ex.Message.ToString();)", true);

        }
    }

    protected void btnreset_Click(object sender, EventArgs e)
    {
        ClearControls();
    }

    protected void dgleadstatuslist_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow || e.Row.RowType == DataControlRowType.Separator)
        {
            e.Row.Cells[0].Text = Convert.ToInt32(e.Row.RowIndex + 1).ToString();

        }
    }
    }