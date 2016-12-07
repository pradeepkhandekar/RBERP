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
        public string  sourcetype, cityNm;
        protected void Page_Load(object sender, EventArgs e)
        {
            
            if (!IsPostBack)
            {
                CommanDataLoad.Load_CommanDropDown(ddlstatus, "", "select * from lead_Status_Master order by lead_status asc", "0", "lead_Status_id", "Lead_Status", "Lead_status_Master", "");
                FillControl();
                //Load_Bank();
             
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
                            Load_City(cityNm);

                        }
                    }
                    Name.Text = Request.QueryString["cname"].ToString();
                    txtMobile.Text = Request.QueryString["cmobile"].ToString();
                    
                }
            }
        }

        private string Load_City(string CityNm)
        {
            string cityid="-1";
            string[] param = new string[2];
            param[0] = "City_Name";
            param[1] = CityNm;

            DataSet ds = CommanDataLoad.ExecuteDataSet("USP_Load_CityIDbyCityNm", "1", "", param);
            if (ds != null)
            {
               cityid = ds.Tables[0].Rows[0]["City_Id"].ToString();
            }
            else
            {
                cityid = "-1";
            }
            return cityid;
        }
        private void FillControl()
        {
            string[] param = new string[1];
            //FillCity(param);
            //FillState(param);
            FillProduct(param);
            //FillProfession(param);
            load_source();
            Load_Vertical(param);
            ddlstatus.SelectedItem.Text = "New";
            ddlstatus.SelectedValue = "43";
            ddlsouce.SelectedValue = "15";
            ddlsouce.SelectedItem.Text = "Policy Boss";
          
           // CommanDataLoad.Load_CommanDropDown(ddlassign, "", "sp_get_downteam", "1", "emp_code", "emp_name", "Lead Capture", Param);
            //if(ddlassign.Items.Count>0)
            //{
            //    ddlassign.SelectedValue= Request.Cookies["empcode"].Value.ToString();
            //}

        }
        private void load_source()
        {
            CommanDataLoad.Load_CommanDropDown(ddlsouce, "", "Select * from source_master order by source_name asc", "2", "source_id", "source_name", "Load Capture", "");

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

       
       

        protected void btnsubmit_Click(object sender, EventArgs e)
        {
            try
            {
                string strid= Load_City(txtcityname.Text);

                if (Name.Text == "")
                {
                    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please enter Name')", true);
                    return;
                }

               

                if (txtMobile.Text == "")
                {
                    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please enter Mobile No')", true);
                    return;
                }


            

                //if (txtPan.Text == "")
                //{
                //    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please enter PAN No.')", true);
                //    return;
                //}

              
                if (ddlsouce.SelectedItem.Text == "Select One")
                {
                    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Select Source')", true);
                    return;
                }
               
              

                if (ddlproduct.SelectedItem.Text == "Select")
                {
                    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Select Product')", true);
                    return;
                }
              

                if (ddlVertical.SelectedItem.Text == "Select")
                {
                    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Select Vertical')", true);
                    return;
                }

                if (ddlstatus.SelectedItem.Text == "Select One")
                {
                    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Select Status')", true);
                    return;
                }

                string[] param = new string[46];

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
                param[9] = "";
                param[10] = "monthlyincome";
                param[11] = "0";
                param[12] = "dob";
                param[13] = "";
                param[14] = "pan";
                param[15] = "";
                param[16] = "address";
                param[17] = "";
                param[18] = "cityid";
                param[19] = strid;
                param[20] = "stateid";
                param[21] = "";
                param[22] = "profession";
                param[23] = "";
                param[24] = "productid";
                param[25] = ddlproduct.SelectedValue;
                param[26] = "companyname";
                param[27] = "";
                param[28] = "Designation";
                param[29] ="NA";
                param[30] = "lead_type";
                param[31] = "";
                param[32] = "source_id";
                param[33] = ddlsouce.SelectedValue;
                param[34] = "status_id";
                param[35] = ddlstatus.SelectedValue;
                param[36] = "ndate";
                param[37] = "";
                param[38] = "empcode";
                param[39] = lblUserId.Text;


                param[40] = "Vertical_Id";
                param[41] = ddlVertical.SelectedValue;
                param[42] = "loan_amt";
                //if (txtLoanAmt.Text != "")
                //{
                  //  param[43] = txtLoanAmt.Text;
                //}
                //else
                //{
                param[43] = "0.00";
                //}
                param[44] = "Bank_Id";
                param[45] = "";

                int rowaffected = CommanDataLoad.ExecuteNonQuery("Insert_Lead", "1", "", param);
                if (rowaffected > 0)
                {
                    Response.Write("<script>alert('Record Saved Successfully.');</script>");
                    // BindGrid();
                }
                else
                {
                    Response.Write("<script>alert('Something wrong please check your data...!.');</script>");
                }
                
                ClearControls();
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
            
            txtMobile.Text = "";
           
          
            ddlproduct.SelectedValue = "0";
         
         
            ddlstatus.SelectedItem.Text = "New";
            ddlsouce.SelectedItem.Text = "PolicyBoss";
            ddlstatus.SelectedValue = "43";
            ddlsouce.SelectedValue = "15";
            ddlVertical.SelectedIndex = -1;
          
          
            lblUserId.Text = "";
            Name.Focus();
            CommanDataLoad.Load_CommanDropDown(ddlstatus, "", "select * from lead_Status_Master order by lead_status asc", "0", "lead_Status_id", "Lead_Status", "Lead_status_Master", "");

        }


        protected void ddlState_SelectedIndexChanged(object sender, EventArgs e)
        {
            string[] param = new string[2];
            param[0] = "state_id";
            param[1] = "";
           // FillCity(param);
        }

        protected void btnreset_Click(object sender, EventArgs e)
        {
            ClearControls();
        }
    }
}