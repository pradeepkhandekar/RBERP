using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Text;

public partial class Bank_Master : System.Web.UI.Page
{
    
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            BindGrid();
        }

    }
        
    private void ClearControls()
    {
        txtBankNm.Text = "";
        txtAddress.Text = "";        
        txtBankNm.Focus();
    }
    private void BindGrid()
    {
        CommanDataLoad.Load_Gridview(GridView1, "USP_Load_BankMaster", "1", "Bank Master", "");
    }
    

    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        try
        {

            string[] param = new string[10];
            param[0] = "Bank_Name";
            param[1] = txtBankNm.Text;
            param[2] = "Bank_Address";
            param[3] = txtAddress.Text;
            param[4] = "Is_Active";
            if (chkIsActive.Checked == true)
            {
                param[5] ="1";
            }
            else
            {
                param[5] = "0";
            }           
            param[6] = "IpAddr";
            param[7] = ClsConnection.StrIP;
            param[8] = "UserId";
            param[9] = ClsConnection.Userid;
            
            int rowaffected = CommanDataLoad.ExecuteNonQuery("USP_Insert_Bank_Master", "1", "Bank_Master", param);
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

    protected void btnReset_Click(object sender, EventArgs e)
    {
        ClearControls();
    }

    protected void GridView1_PageIndexChanging(object sender, GridViewPageEventArgs e)
    {
        GridView1.PageIndex = e.NewPageIndex;
        BindGrid();
    }

    protected void GridView1_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        if (e.CommandName == "ShowPopup")
        {
            LinkButton btndetails = (LinkButton)e.CommandSource;
            GridViewRow gvrow = (GridViewRow)btndetails.NamingContainer;
            string Bankid = "";
            Bankid = GridView1.DataKeys[gvrow.RowIndex].Value.ToString();

            Load_Bank_Detail(Bankid);
        }
    }

    void Popup(bool isDisplay)
    {
        StringBuilder builder = new StringBuilder();
        if (isDisplay)
        {
            builder.Append("<script language=JavaScript> ShowPopup(); </script>\n");
            Page.ClientScript.RegisterStartupScript(this.GetType(), "ShowPopup", builder.ToString());
        }
        else
        {
            builder.Append("<script language=JavaScript> HidePopup(); </script>\n");
            Page.ClientScript.RegisterStartupScript(this.GetType(), "HidePopup", builder.ToString());
        }
    }

    protected void Load_Bank_Detail(string Bank_Id)
    {

        try
        {
            string[] param = new string[2];
            param[0] = "Bank_Id";
            param[1] = Bank_Id;

            DataSet ds = new DataSet();
            ds = CommanDataLoad.ExecuteDataSet("USP_Load_Bank_Detail", "1", "Edit Bank Master", param);

            if (ds != null)
            {
                lblBankId.Text = ds.Tables[0].Rows[0]["Bank_Id"].ToString();
                txtBankName.Text = ds.Tables[0].Rows[0]["Bank_Name"].ToString();
                txtBankAddress.Text = ds.Tables[0].Rows[0]["Bank_Address"].ToString();
                if (ds.Tables[0].Rows[0]["Is_Active"].ToString() == "1")
                {
                    chkIsAct.Checked = true;
                }
                else
                {
                    chkIsAct.Checked = false;
                }
                Popup(true);
            }
            else
            {
                Popup(false);
            }

        }
        catch (Exception ex)
        {
            //lblmsg.Text = "Some Error" + ex.Message.ToString();            
        }
    }


    protected void btnUpdate_Click(object sender, EventArgs e)
    {
        if (txtBankName.Text == "")
        {
            ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Enter Bank Name')", true);
            return;
        }

        if (txtBankName.Text == "")
        {
            ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Enter Bank Address')", true);
            return;
        }

        Update_Data();
    }

    protected void Update_Data()
    {
        try
        {
            string[] param = new string[12];
            param[0] = "Bank_Id";
            param[1] = lblBankId.Text;
            param[2] = "Bank_Name";
            param[3] = txtBankName.Text;
            param[4] = "Bank_Address";
            param[5] = txtBankAddress.Text;
            param[6] = "Is_Active";
            if (chkIsAct.Checked == true)
            {
                param[7] = "1";
            }
            else
            {
                param[7] = "0";
            }
            param[8] = "Userid";
            param[9] = ClsConnection.Userid;
            param[10] = "Ip_Addr";
            param[11] = ClsConnection.StrIP;

            int rowaffected = CommanDataLoad.ExecuteNonQuery("USP_Update_Bank_Master", "1", "Bank Master", param);

            if (rowaffected > 0)
            {
                Response.Write("<script>alert('Record Updated Successfully.');</script>");
            }
            Popup(false);
            BindGrid();
            ClearControls();
        }
        catch (Exception ex)
        {
            //lblmsg.Text = "Some Error" + ex.Message.ToString();            
        }
    }
}