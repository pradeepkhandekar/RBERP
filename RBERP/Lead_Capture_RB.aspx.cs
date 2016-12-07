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
    public partial class Lead_Capture_RB : System.Web.UI.Page
    {
        public string  sourcetype, cityNm;
        protected void Page_Load(object sender, EventArgs e)
        {
         //   Response.Cookies["empcode"].Value = "RB40000401";
            if (!IsPostBack)
            {
                CommanDataLoad.Load_CommanDropDown(ddlstatus, "", "select * from lead_Status_Master order by lead_status asc", "0", "lead_Status_id", "Lead_Status", "Lead_status_Master", "");
                FillControl();
                Load_Bank();
                txtDob.Text = DateTime.Today.AddYears(-20).ToShortDateString();
                txtndate.Text = DateTime.Today.ToShortDateString();
                if (Request.QueryString["source"] != ""  && Request.QueryString["source"]!=null)
                {
                    string str = Request.QueryString["source"];
                    string[] strArr = null;
                    char[] splitchar = { ':' };
                    strArr = str.Split(splitchar);
                   
                    lblUserId.Text = strArr[0];
                    sourcetype = strArr[1];
                    Load_SourceType(sourcetype);
                    ddlsouce.SelectedValue = "15";
                    ddlstatus.SelectedValue = "41";
                    if (strArr.Length > 2)
                    {
                        if (strArr[2] != "")
                        {
                            cityNm = strArr[2];
                            Load_State(cityNm);

                        }
                    }
                    Name.Text = Request.QueryString["cname"].ToString();
                    txtMobile.Text = Request.QueryString["cmobile"].ToString();
                    
                }
            }
        }


        private void FillControl()
        {
            string[] param = new string[1];
            FillCity(param);
            FillState(param);
            FillProduct(param);
            FillProfession(param);
            ddlleadtype.Items.Insert(1, "Hot");
            ddlleadtype.Items.Insert(2, "Warm");

            load_source();
            Load_Vertical(param);
            string[] Param = new string[2];
            Param[0] = "empcode";
            Param[1] = Request.Cookies["empcode"].Value.ToString();
            CommanDataLoad.Load_CommanDropDown(ddlassign, "", "sp_get_downteam", "1", "emp_code", "emp_name", "Lead Capture", Param);
            CommanDataLoad.Load_CommanDropDown(ddlbroker, "", "sp_load_broker", "1", "broker_id", "broker_name", "Lead Capture", Param);

            if (ddlassign.Items.Count>0)
            {
                ddlassign.SelectedValue= Request.Cookies["empcode"].Value.ToString();
            }


        }
        private void load_source()
        {
            CommanDataLoad.Load_CommanDropDown(ddlsouce, "", "Select * from source_master order by source_name asc", "2", "source_id", "source_name", "Load Capture", "");

        }

        void Load_Bank()
        {
            CommanDataLoad.Load_CommanDropDown(ddlBank, "", "USP_Load_Bank", "1", "Bank_Id", "Bank_Name", "Bank_Master", "");
        }
        private void Load_Vertical(string[] param)
        {
            DataSet ds = CommanDataLoad.ExecuteDataSet("USP_Load_Vertical_Master", "1", "", param);

            if (ds != null)
            {
                ddlVertical.DataSource = ds;
                ddlVertical.DataTextField = "Vertical_Name";
                ddlVertical.DataValueField = "Vertical_Id";
                ddlVertical.DataBind();
            }
            ddlVertical.Items.Insert(0, new ListItem("Select", "0"));
        }


        private void Load_State(string CityName)
        {
            string[] param = new string[2];
            param[0] = "City_Name";
            param[1] = CityName;

            DataSet ds = CommanDataLoad.ExecuteDataSet("USP_Load_StateByCityNm", "1", "", param);
            if (ds != null)
            {
                ddlState.SelectedValue = ds.Tables[0].Rows[0]["state_id"].ToString();
                string[] param1 = new string[2];
                param1[0] = "state_id";
                param1[1] = ddlState.SelectedValue;
                FillCity(param1);
                Load_City(CityName);
            }
            else
            {
                ddlState.SelectedIndex = -1;
            }
        }

        private void Load_City(string CityNm)
        {
            string[] param = new string[2];
            param[0] = "City_Name";
            param[1] = CityNm;

            DataSet ds = CommanDataLoad.ExecuteDataSet("USP_Load_StateByCityNm", "1", "", param);
            if (ds != null)
            {
                ddlCity.SelectedValue = ds.Tables[0].Rows[0]["City_Id"].ToString();
            }
            else
            {
                ddlCity.SelectedIndex = -1;
            }
        }

        private void Load_SourceType(string SourceNm)
        {
            string[] param = new string[2];
            param[0] = "source_name";
            param[1] = SourceNm;

            DataSet ds = CommanDataLoad.ExecuteDataSet("USP_Load_SourceType", "1", "", param);
            if (ds != null)
            {
                ddlsouce.SelectedValue = ds.Tables[0].Rows[0]["source_id"].ToString();
            }
            else
            {
                ddlsouce.SelectedIndex = -1;
            }
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
                ddlproduct.DataSource = ds;
                ddlproduct.DataTextField = "Product_Name";
                ddlproduct.DataValueField = "Product_Id";
                ddlproduct.DataBind();
            }
            ddlproduct.Items.Insert(0, new ListItem("Select", "0"));
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

        protected void btnsubmit_Click(object sender, EventArgs e)
        {
            try
            {
                string strmsg = "0";
                strmsg=  CommanDataLoad.Check_Duplicate_Record("select 1 from lead_data where mobile='"+ txtMobile.Text+"' ", "2", "lead capture", "");
                if(strmsg!="0")
                {
                    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Record is already exists..!')", true);

                    return;
                }
                
                string[] param = new string[50];

                param[0] = "name";
                param[1] = Name.Text;
                param[2] = "ip";
                param[3] = ClsConnection.StrIP;
                param[4] = "UserId";
                if (lblUserId.Text != "")
                {
                    param[5] = lblUserId.Text;
                }
                else
                {
                    param[5] = ClsConnection.Userid;
                }

                param[6] = "mobile";
                param[7] = txtMobile.Text;
                param[8] = "email";
                param[9] = txtEmailId.Text;
                param[10] = "monthlyincome";
                param[11] = txtIncome.Text;
                param[12] = "dob";
                param[13] = txtDob.Text.Trim();//!= "" ? CommonValidation.GetYYYY_MM_DD(txtDob.Text) : "";
                param[14] = "pan";
                param[15] = txtPan.Text;
                param[16] = "address";
                param[17] = txtAddress.Text;
                param[18] = "cityid";
                param[19] = ddlCity.SelectedValue;
                param[20] = "stateid";
                param[21] = ddlState.SelectedValue;
                param[22] = "profession";
                param[23] = ddlProfession.SelectedValue;
                param[24] = "productid";
                param[25] = ddlproduct.SelectedValue;
                param[26] = "companyname";
                param[27] = txtcompanyname.Text;
                param[28] = "Designation";
                param[29] = txtdesignation.Text;
                param[30] = "lead_type";
                param[31] = ddlleadtype.SelectedValue;
                param[32] = "source_id";
                param[33] = ddlsouce.SelectedValue;
                param[34] = "status_id";
                param[35] = ddlstatus.SelectedValue;
                param[36] = "ndate";
                param[37] = txtndate.Text;
                param[38] = "empcode";
                if (lblUserId.Text != "")
                {
                    param[39] = lblUserId.Text;
                }
                else
                {
                    if (ddlassign.SelectedIndex > 0)
                    {
                        param[39] = Request.Cookies["empcode"].Value.ToString();
                    }
                    else
                    {
                        param[39] = Request.Cookies["empcode"].Value.ToString();
                    }
                }
                param[40] = "Vertical_Id";
                param[41] = ddlVertical.SelectedValue;
                param[42] = "loan_amt";
                if (txtLoanAmt.Text != "")
                {
                    param[43] = txtLoanAmt.Text;
                }
                else
                {
                    param[43] = "0.00";
                }
                param[44] = "Bank_Id";
                param[45] = ddlBank.SelectedValue;
                param[46] = "broker_id";
                param[47] = ddlbroker.SelectedValue;
                param[48] = "demogiven";
                if(chkdemo.Checked)
                param[49] = "1";
                else
                param[49] = "0";
                int rowaffected = CommanDataLoad.ExecuteNonQuery("Insert_Lead", "1", "", param);
                if (rowaffected > 0)
                {
                    Response.Write("<script>alert('Record Saved Successfully.');</script>");
                    // BindGrid();
                    ClearControls();
                }
                else
                {
                    Response.Write("<script>alert('Something wrong..!, Might be you entered mobile number is already exists in database please verify and update again.');</script>");
                }


                //GridView1.DataBind();
            }

            catch (Exception ex)
            {
                lblmsg.Text = "Some Error" + ex.Message.ToString();
                //Console.WriteLine("Some ERROR" + ex.Message.ToString());            
            }

        }

        protected void ClearControls()
        {
            Name.Text = "";
            txtAddress.Text = "";
            txtEmailId.Text = "";
            txtIncome.Text = "";
            txtMobile.Text = "";
            txtPan.Text = "";
            ddlCity.SelectedValue = "0";
            ddlproduct.SelectedValue = "0";
            ddlProfession.SelectedValue = "0";
            ddlState.SelectedValue = "0";
            txtDob.Text = "";
            txtcompanyname.Text = "";
            txtdesignation.Text = "";
            ddlstatus.SelectedItem.Text = "Select";
            ddlleadtype.SelectedItem.Text = "Select";
            txtndate.Text = "";
            ddlVertical.SelectedIndex = -1;
            ddlBank.SelectedIndex = -1;
            txtLoanAmt.Text = "";
            lblUserId.Text = "";
            Name.Focus();
            CommanDataLoad.Load_CommanDropDown(ddlstatus, "", "select * from lead_Status_Master order by lead_status asc", "0", "lead_Status_id", "Lead_Status", "Lead_status_Master", "");

        }


        protected void ddlState_SelectedIndexChanged(object sender, EventArgs e)
        {
            string[] param = new string[2];
            param[0] = "state_id";
            param[1] = ddlState.SelectedValue;
            FillCity(param);
        }

        protected void btnreset_Click(object sender, EventArgs e)
        {
            ClearControls();
        }
    }
}