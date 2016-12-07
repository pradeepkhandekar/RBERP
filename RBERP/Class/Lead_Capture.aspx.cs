using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using RBERP.Class;

namespace RBERP
{
    public partial class Lead_Capture : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                FillControl();
            }
        }
        private void FillControl()
        {
            string[] param = new string[1];
            FillCity(param);
            FillState(param);
            FillProduct(param);
            FillProfession(param);

        }
        private void FillCity(string[] param)
        {

            DataSet ds = CommanDataLoad.ExecuteDataSet("Get_CityState", "1", "", param);
            
            if (ds != null)
            {
                ddlCity.DataSource = ds;
                ddlCity.DataTextField = "City_Name";
                ddlCity.DataValueField = "City_Id";
                ddlCity.DataBind();
            }
            ddlCity.Items.Insert(0, new ListItem("Select", "0"));
        }
        private void FillProduct(string[] param)
        {
            DataSet ds = CommanDataLoad.ExecuteDataSet("Get_Product", "1", "", param);
            
            if (ds != null)
            {
                ddlProduct.DataSource = ds;
                ddlProduct.DataTextField = "Product_Name";
                ddlProduct.DataValueField = "Product_Id";
                ddlProduct.DataBind();
            }
            ddlProduct.Items.Insert(0, new ListItem("Select", "0"));
        }

        private void FillState(string[] param)
        {
            DataSet ds = CommanDataLoad.ExecuteDataSet("Get_State", "1", "", param);
            
            if (ds != null)
            {
                ddlState.DataSource = ds;
                ddlState.DataTextField = "state_name";
                ddlState.DataValueField = "state_id";
                ddlState.DataBind();
            }
            ddlState.Items.Insert(0, new ListItem("Select", "0"));
        }
        private void FillProfession(string[] param)
        {
            DataSet ds = CommanDataLoad.ExecuteDataSet("Get_Profession", "1", "", param);
            
            if (ds != null)
            {
                ddlProfession.DataSource = ds;
                ddlProfession.DataTextField = "Profession_Name";
                ddlProfession.DataValueField = "Profession_id";
                ddlProfession.DataBind();
            }
            ddlProfession.Items.Insert(0, new ListItem("Select", "0"));
        }   
        protected void Submit_Click(object sender, ImageClickEventArgs e)
        {
            if (CheckField())
            {
                try
                {
                    string[] param = new string[26];

                    param[0] = "name";
                    param[1] = Name.Text;
                    param[2] = "ip";
                    param[3] = ClsConnection.StrIP;
                    param[4] = "UserId";
                    param[5] = ClsConnection.Userid;
                    param[6] = "mobile";
                    param[7] = txtMobile.Text;
                    param[8] = "email";
                    param[9] = txtEmailId.Text;
                    param[10] = "montlyincome";
                    param[11] = txtIncome.Text;
                    param[12] = "dob";
                    param[13] = txtDob.Text.Trim() != "" ? CommonValidation.GetYYYY_MM_DD(txtDob.Text) : "";
                    param[14] = "pan";
                    param[15] = txtPan.Text;
                    param[16] = "add1";
                    param[17] = txtAddress.Text;
                    param[18] = "cityid";
                    param[19] = ddlCity.SelectedValue;
                    param[20] = "stateid";
                    param[21] = ddlState.SelectedValue;
                    param[22] = "profession";
                    param[23] = ddlProfession.SelectedValue;
                    param[24] = "productid";
                    param[25] = ddlProduct.SelectedValue;



                    int rowaffected = CommanDataLoad.ExecuteNonQuery("Insert_Lead", "1", "", param);
                    if (rowaffected > 0)
                    {
                        Response.Write("<script>alert('Record Saved Successfully.');</script>");
                        // BindGrid();
                    }

                    //ClearControls();
                    //GridView1.DataBind();
                }

                catch (Exception ex)
                {
                    lblmsg.Text = "Some Error" + ex.Message.ToString();
                    //Console.WriteLine("Some ERROR" + ex.Message.ToString());            
                }
            }
        }

        private bool CheckField()
        {

            lblmsg.Text = "";
            string _str = string.Empty;

            if (!CommonValidation.IsValidAlphabetWithSpace(Name.Text.Trim()))
            {
                _str = "Please enter valid name.";
            }
            if (!CommonValidation.IsValidEmailId(txtEmailId.Text.Trim()))
            {
                _str += "</br>Please enter valid email id.";
            }
            if (!CommonValidation.IsValidMobileNumber(txtMobile.Text.Trim()))
            {
                _str += "</br>Please enter valid mobile number.";
            }
            if (!CommonValidation.IsValidPositiveNumber(txtIncome.Text.Trim()))
            {
                _str += "</br>Please enter valid monthly income.";
            }
            //if (!CommonValidation.IsValidDate(txtDob.Text.Trim()))
            //{
            //    _str += "</br>Please enter valid date of birth.";
            //}
            if (txtPan.Text.Trim()=="")
            {
                _str += "</br>Please enter valid PAN number.";
            }
            if (ddlState.SelectedIndex == 0)
            {
                _str += "</br>Please select state.";
            }
            
            if (ddlCity.SelectedIndex == 0)
            {
                _str += "</br>Please select city.";
            }
           
            if (ddlProduct.SelectedIndex == 0)
            {
                _str += "</br>Please select loan for.";
            }
            if (ddlProfession.SelectedIndex == 0)
            {
                _str += "</br>Please select profession.";
            }
           
           

            if (_str.Length > 0)
            {
                lblmsg.Text = _str;
               
                return false;
            }
            else
            {
                return true;
            }
        }
     
    }
}