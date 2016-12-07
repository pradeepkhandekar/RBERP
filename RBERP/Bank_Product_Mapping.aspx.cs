using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;


namespace RBERP
{
    public partial class Bank_Product_Mapping : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack )
            {
                Load_Bank();
                Load_Product();
                Load_City();
               
            }
        }

        protected void Load_Bank()
        {
            CommanDataLoad.Load_CommanDropDown(ddlBank, "", "USP_Load_Bank", "1", "Bank_Id", "Bank_Name", "Bank_Master", "");

        }

        protected void Load_Product()
        {
            CommanDataLoad.Load_CommanDropDown(ddlBank, "", "Get_Product", "1", "Product_Id", "Product_Name", "Product_Master", "");
            
        }

        protected void Load_City()
        {
            CommanDataLoad.Load_CommanDropDown(ddlCity, "", "Get_CityState", "1", "City_Id", "City_Name", "City_Master", "");

        }

        protected void btnSubmit_Click(object sender, EventArgs e)
        {
            try
            {
                string[] param = new string[22];
                param[0] = "Bank_Id";
                param[1] = ddlBank.SelectedValue;
                param[2] = "City_Id";
                param[3] = ddlCity.SelectedValue;
                param[4] = "Product_Id";
                param[5] = ddlProduct.SelectedValue;
                param[6] = "Contact_Person";
                param[7] = txtContactPerson.Text;
                param[8] = "Designation";
                param[9] = txtDesignation.Text;
                param[10] = "Mobile_No";
                param[11] = txtMobileNo.Text;
                param[12] = "Landline_No";
                param[13] = txtLandlineNo.Text;
                param[14] = "Fax_No";
                param[15] = txtFaxNo.Text;
                param[16] = "Email_Id";
                param[17] = txtEmailId.Text;
                param[18] = "UserId";
                param[19] = ClsConnection.Userid;
                param[20] = "Ip_Addr";
                param[21] = ClsConnection.StrIP;

                int rowaffected = CommanDataLoad.ExecuteNonQuery("USP_Insert_Bank_Product_Mapping", "1", "Bank Product Mapping", param);
                if (rowaffected > 0)
                {
                    Response.Write("<script>alert('Record Saved Successfully.');</script>");
                }
                Load_Grid();
                ClearControls();
            }
            catch (Exception ex)
            {
                //lblmsg.Text = "Some Error" + ex.Message.ToString();            
            }
        }

        protected void Load_Grid()
        {
            try
            {
                CommanDataLoad.Load_Gridview(GridView1, "USP_Load_Bank_Product_Mapping", "1", "Bank Product Mapping", "");
            }
            catch (Exception ex)
            {
                //lblmsg.Text = "Some Error" + ex.Message.ToString();            
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

        protected void btnReset_Click(object sender, EventArgs e)
        {
            ClearControls();
        }
        protected void ClearControls()
        {
            ddlBank.SelectedIndex = -1;
            ddlCity.SelectedIndex = -1;
            ddlProduct.SelectedIndex = -1;
            txtContactPerson.Text = "";
            txtDesignation.Text = "";
            txtMobileNo.Text = "";
            txtLandlineNo.Text = "";
            txtFaxNo.Text = "";
            txtEmailId.Text = "";
        }

        

        protected void GridView1_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            GridView1.PageIndex = e.NewPageIndex;
            Load_Grid();
        }

        protected void GridView1_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            if (e.CommandName == "ShowPopup")
            {
                LinkButton btndetails = (LinkButton)e.CommandSource;
                GridViewRow gvrow = (GridViewRow)btndetails.NamingContainer;
                string Mapid = "";
                Mapid = GridView1.DataKeys[gvrow.RowIndex].Value.ToString();

                Load_Bank_Mapping_Detail(Mapid);
            }
        }

        protected void Load_Bank_Mapping_Detail(string Map_Id)
        {

            try
            {
                string[] param = new string[2];
                param[0] = "Map_Id";
                param[1] = Map_Id;

                DataSet ds = new DataSet();
                ds = CommanDataLoad.ExecuteDataSet("USP_Bank_Product_Mapping_Detail", "1", "Edit Bank Product Mapping", param);

                if (ds != null)
                {
                    lblMapId.Text = ds.Tables[0].Rows[0]["Map_Id"].ToString();
                    Load_Bank();
                    ddlbName.SelectedValue = ds.Tables[0].Rows[0]["Bank_Id"].ToString();
                    Load_City();
                    ddlcName.SelectedValue = ds.Tables[0].Rows[0]["City_Id"].ToString();
                    Load_Product();
                    ddlpName.SelectedValue = ds.Tables[0].Rows[0]["Product_Id"].ToString();

                    txtcPerson.Text = ds.Tables[0].Rows[0]["Contact_Person"].ToString();
                    txtDesign.Text = ds.Tables[0].Rows[0]["Designation"].ToString();
                    txtmNo.Text = ds.Tables[0].Rows[0]["Mobile_No"].ToString();
                    txtlandNo.Text = ds.Tables[0].Rows[0]["Landline_No"].ToString();
                    txtfNo.Text = ds.Tables[0].Rows[0]["Fax_No"].ToString();
                    txteId.Text = ds.Tables[0].Rows[0]["Email_Id"].ToString();

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

            if (ddlbName.SelectedIndex == -1)
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Select Bank Name')", true);
                return;
            }
            if (ddlcName.SelectedIndex == -1)
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Select City')", true);
                return;
            }
            if (ddlpName.SelectedIndex == -1)
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Select Product')", true);
                return;
            }

            Update_Data();
        }

        protected void Update_Data()
        {
            try
            {
                string[] param = new string[24];
                param[0] = "Map_Id";
                param[1] = lblMapId.Text;
                param[2] = "Bank_Id";
                param[3] = ddlbName.SelectedValue;                
                param[4] = "City_Id";
                param[5] = ddlcName.SelectedValue;
                param[6] = "Product_Id";
                param[7] = ddlpName.SelectedValue;
                param[8] = "Contact_Person";
                param[9] = txtcPerson.Text;
                param[10] = "Designation";
                param[11] = txtDesign.Text;
                param[12] = "Mobile_No";
                param[13] = txtmNo.Text;
                param[14] = "Landline_No";
                param[15] = txtlandNo.Text;
                param[16] = "Fax_No";
                param[17] = txtfNo.Text;
                param[18] = "Email_Id";
                param[19] = txteId.Text;
                param[20] = "Userid";
                param[21] = ClsConnection.Userid;
                param[22] = "Ip_Addr";
                param[23] = ClsConnection.StrIP;

                int rowaffected = CommanDataLoad.ExecuteNonQuery("USP_Update_Bank_Product_Mapping", "1", "Edit Bank Product Mapping", param);

                if (rowaffected > 0)
                {
                    Response.Write("<script>alert('Record Updated Successfully.');</script>");
                }
                Popup(false);
                Load_Grid();
                ClearControls();
            }
            catch (Exception ex)
            {
                //lblmsg.Text = "Some Error" + ex.Message.ToString();            
            }
        }

    }
}