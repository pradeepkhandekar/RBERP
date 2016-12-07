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
    public partial class Bank_Product_Web : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack )
            {
                Load_Bank();
                Load_Product();
                Load_Grid();
            }
        }

        protected void Load_Bank()
        {
            CommanDataLoad.Load_CommanDropDown(ddlBank, "", "USP_Load_Bank", "1", "Bank_Id", "Bank_Name", "Bank_Master", "");

        }

        protected void Load_Product()
        {
            CommanDataLoad.Load_CommanDropDown(ddlProduct, "", "Get_Product", "1", "Product_Id", "Product_Name", "Product_Master", "");
            
        }

        decimal GetTextboxValue(String textboxText)
        {
            return Convert.ToDecimal(string.IsNullOrEmpty(textboxText) ? "0" : textboxText);
        }


        protected void btnSubmit_Click(object sender, EventArgs e)
        {
            if (Session["checkExits"] == null || Session["checkExits"].ToString() =="")
            {
                try
                {
                    string[] param = new string[46];
                    param[0] = "Bank_Id";
                    param[1] = ddlBank.SelectedValue;
                    param[2] = "Product_Id";
                    param[3] = ddlProduct.SelectedValue;
                    param[4] = "Min_Age";
                    if (!string.IsNullOrEmpty(txtMinAge.Text))
                    {
                        param[5] = (txtMinAge.Text);
                    }
                    else
                    {
                        param[5] = "0";
                    }
                    param[6] = "Max_Age";
                    if (!string.IsNullOrEmpty(txtMaxAge.Text))
                    {
                        param[7] = (txtMaxAge.Text);
                    }
                    else
                    {
                        param[7] = "0";
                    }
                    param[8] = "Min_Intrest";
                    if (!string.IsNullOrEmpty(txtMinInte.Text))
                    {
                        param[9] = (txtMinInte.Text);
                    }
                    else
                    {
                        param[9] = "0";
                    }
                    param[10] = "Max_Intrest";
                    if (!string.IsNullOrEmpty(txtMaxInte.Text))
                    {
                        param[11] = (txtMaxInte.Text);
                    }
                    else
                    {
                        param[11] = "0";
                    }
                    param[12] = "ProcessingFee";
                    if (!string.IsNullOrEmpty(txtProFee.Text))
                    {
                        param[13] = (txtProFee.Text);
                    }
                    else
                    {
                        param[13] = "0";
                    }
                    param[14] = "ProcessingFeeType";
                    if (!string.IsNullOrEmpty(txtProFeeType.Text))
                    {
                        param[15] = (txtProFeeType.Text);
                    }
                    else
                    {
                        param[15] = "0";
                    }
                    param[16] = "Min_Loan";
                    if (!string.IsNullOrEmpty(txtMinLoan.Text))
                    {
                        param[17] = (txtMinLoan.Text);
                    }
                    else
                    {
                        param[17] = "0";
                    }
                    param[18] = "Max_Loan";
                    if (!string.IsNullOrEmpty(txtMaxLoan.Text))
                    {
                        param[19] = (txtMaxLoan.Text);
                    }
                    else
                    {
                        param[19] = "0";
                    }
                    param[20] = "Min_Loan_Amt";
                    if (!string.IsNullOrEmpty(txtMinLAmt.Text))
                    {
                        param[21] = (txtMinLAmt.Text);
                    }
                    else
                    {
                        param[21] = "0";
                    }
                    param[22] = "Max_Loan_Amt";
                    if (!string.IsNullOrEmpty(txtMaxLAmt.Text))
                    {
                        param[23] = (txtMaxLAmt.Text);
                    }
                    else
                    {
                        param[23] = "0";
                    }
                    param[24] = "Min_Income_Salary";
                    if (!string.IsNullOrEmpty(txtMinInSal.Text))
                    {
                        param[25] = (txtMinInSal.Text);
                    }
                    else
                    {
                        param[25] = "0";
                    }
                    param[26] = "Min_Income_Self";
                    if (!string.IsNullOrEmpty(txtMinInSelf.Text))
                    {
                        param[27] = (txtMinInSelf.Text);
                    }
                    else
                    {
                        param[27] = "0";
                    }
                    param[28] = "Min_Tenure";
                    if (!string.IsNullOrEmpty(txtMinTen.Text))
                    {
                        param[29] = (txtMinTen.Text);
                    }
                    else
                    {
                        param[29] = "0";
                    }
                    param[30] = "Prepay_Charges";
                    if (!string.IsNullOrEmpty(txtPreCharge.Text))
                    {
                        param[31] = (txtPreCharge.Text);
                    }
                    else
                    {
                        param[31] = "0";
                    }
                    param[32] = "Closer_Charges";
                    if (!string.IsNullOrEmpty(txtCloserCharge.Text))
                    {
                        param[33] = (txtCloserCharge.Text);
                    }
                    else
                    {
                        param[33] = "0";
                    }
                    param[34] = "MinCredit_Score";
                    if (!string.IsNullOrEmpty(txtMinCreSco.Text))
                    {
                        param[35] = (txtMinCreSco.Text);
                    }
                    else
                    {
                        param[35] = "0";
                    }
                    param[36] = "Msg";
                    param[37] = txtMsg.Text;
                    param[38] = "Max_Tenure";
                    if (!string.IsNullOrEmpty(txtMaxTenure.Text))
                    {
                        param[39] = (txtMaxTenure.Text);
                    }
                    else
                    {
                        param[39] = "0";
                    }
                    param[40] = "guarantor_required";
                    param[41] = txtGuarantor.Text;
                    param[42] = "Ip_Address";
                    param[43] = ClsConnection.StrIP;
                    param[44] = "UserId";
                    param[45] = ClsConnection.Userid;
                    int rowaffected = CommanDataLoad.ExecuteNonQuery("USP_Insert_Bank_Product_Web", "1", "Bank Product Web", param);
                    if (rowaffected > 0)
                    {
                        Response.Write("<script>alert('Record Saved Successfully.');</script>");
                        ClearControls();
                        Load_Grid();
                    }
                    else

                    {
                        ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Enter Values In Data field ')", true);
                    }
                    Session["checkExits"] = "";
                }


                catch (Exception ex)
                {
                    //lblmsg.Text = "Some Error" + ex.Message.ToString();            
                }
            }
            else
            {
                update_data();
            }
              Session["checkExits"] = "";
        }

        protected void Load_Grid()
        {
            try
            {
                CommanDataLoad.Load_Gridview(GridView1, "USP_Load_Bank_Product_Web", "1", "Bank_Product_Web", "");
            }
            catch (Exception ex)
            {
                //lblmsg.Text = "Some Error" + ex.Message.ToString();            
            }
        }
            protected void update_data()
        {
            try
            {
                string[] param = new string[48];
                param[0] = "Bank_Id";
                param[1] = ddlBank.SelectedValue;
                param[2] = "Product_Id";
                param[3] = ddlProduct.SelectedValue;
                param[4] = "Min_Age";
                if (!string.IsNullOrEmpty(txtMinAge.Text))
                {
                    param[5] = (txtMinAge.Text);
                }
                else
                {
                    param[5] = "0";
                }
                param[6] = "Max_Age";
                if (!string.IsNullOrEmpty(txtMaxAge.Text))
                {
                    param[7] = (txtMaxAge.Text);
                }
                else
                {
                    param[7] = "0";
                }
                param[8] = "Min_Intrest";
                if (!string.IsNullOrEmpty(txtMinInte.Text))
                {
                    param[9] = (txtMinInte.Text);
                }
                else
                {
                    param[9] = "0";
                }
                param[10] = "Max_Intrest";
                if (!string.IsNullOrEmpty(txtMaxInte.Text))
                {
                    param[11] = (txtMaxInte.Text);
                }
                else
                {
                    param[11] = "0";
                }
                param[12] = "ProcessingFee";
                if (!string.IsNullOrEmpty(txtProFee.Text))
                {
                    param[13] = (txtProFee.Text);
                }
                else
                {
                    param[13] = "0";
                }
                param[14] = "ProcessingFeeType";
                if (!string.IsNullOrEmpty(txtProFeeType.Text))
                {
                    param[15] = (txtProFeeType.Text);
                }
                else
                {
                    param[15] = "0";
                }
                param[16] = "Min_Loan";
                if (!string.IsNullOrEmpty(txtMinLoan.Text))
                {
                    param[17] = (txtMinLoan.Text);
                }
                else
                {
                    param[17] = "0";
                }
                param[18] = "Max_Loan";
                if (!string.IsNullOrEmpty(txtMaxLoan.Text))
                {
                    param[19] = (txtMaxLoan.Text);
                }
                else
                {
                    param[19] = "0";
                }
                param[20] = "Min_Loan_Amt";
                if (!string.IsNullOrEmpty(txtMinLAmt.Text))
                {
                    param[21] = (txtMinLAmt.Text);
                }
                else
                {
                    param[21] = "0";
                }
                param[22] = "Max_Loan_Amt";
                if (!string.IsNullOrEmpty(txtMaxLAmt.Text))
                {
                    param[23] = (txtMaxLAmt.Text);
                }
                else
                {
                    param[23] = "0";
                }
                param[24] = "Min_Income_Salary";
                if (!string.IsNullOrEmpty(txtMinInSal.Text))
                {
                    param[25] = (txtMinInSal.Text);
                }
                else
                {
                    param[25] = "0";
                }
                param[26] = "Min_Income_Self";
                if (!string.IsNullOrEmpty(txtMinInSelf.Text))
                {
                    param[27] = (txtMinInSelf.Text);
                }
                else
                {
                    param[27] = "0";
                }
                param[28] = "Min_Tenure";
                if (!string.IsNullOrEmpty(txtMinTen.Text))
                {
                    param[29] = (txtMinTen.Text);
                }
                else
                {
                    param[29] = "0";
                }
                param[30] = "Prepay_Charges";
                if (!string.IsNullOrEmpty(txtPreCharge.Text))
                {
                    param[31] = (txtPreCharge.Text);
                }
                else
                {
                    param[31] = "0";
                }
                param[32] = "Closer_Charges";
                if (!string.IsNullOrEmpty(txtCloserCharge.Text))
                {
                    param[33] = (txtCloserCharge.Text);
                }
                else
                {
                    param[33] = "0";
                }
                param[34] = "MinCredit_Score";
                if (!string.IsNullOrEmpty(txtMinCreSco.Text))
                {
                    param[35] = (txtMinCreSco.Text);
                }
                else
                {
                    param[35] = "0";
                }
                param[36] = "Msg";
                param[37] = txtMsg.Text;
                param[38] = "Max_Tenure";
                if (!string.IsNullOrEmpty(txtMaxTenure.Text))
                {
                    param[39] = (txtMaxTenure.Text);
                }
                else
                {
                    param[39] = "0";
                }
                param[40] = "guarantor_required";
                param[41] = txtGuarantor.Text;
                param[42] = "Ip_Address";
                param[43] = ClsConnection.StrIP;
                param[44] = "UserId";
                param[45] = ClsConnection.Userid;

                param[46] = "ID_Bank_Product";
                param[47] = lblBank_Pro_Id.Text;
                int rowaffected = CommanDataLoad.ExecuteNonQuery("USP_Update_Bank_prod_web", "1", "Bank Product Web", param);
                if (rowaffected > 0)
                {
                    Response.Write("<script>alert('Record updated Successfully.');</script>");

                    btnSubmit.Text = "Submit";
                    ClearControls();
                    Load_Grid();

                }
                //else
                //{
                //    lblmsg.Text = "Some Error Found...!";
                //}
            }
            catch (Exception ex)
            {
                lblmsg.Text = "Some Error" + ex.Message.ToString();            
            }
          }

        protected void btnReset_Click(object sender, EventArgs e)
        {
            
            ClearControls();
        }
        protected void ClearControls()
        {
            ddlBank.SelectedIndex = -1;
            ddlProduct.SelectedIndex = -1;
            txtMinAge.Text = "";
            txtMaxAge.Text = "";
            txtMinInte.Text = "";
            txtMaxInte.Text = "";
            txtProFee.Text = "";
            txtProFeeType.Text = "";
            txtMinLoan.Text = "";
            txtMaxLoan.Text = "";
            txtMinLAmt.Text = "";
            txtMaxLAmt.Text = "";
            txtMinInSal.Text = "";
            txtMinInSelf.Text = "";
            txtMinTen.Text = "";
            txtPreCharge.Text = "";
            txtCloserCharge.Text = "";
            txtMinCreSco.Text = "";
            txtMsg.Text = "";
            txtMaxTenure.Text = "";
            txtGuarantor.Text = "";
        }

        protected void GridView1_SelectedIndexChanged(object sender, EventArgs e)
        {


            DataSet ds = new DataSet();
            Session["checkExits"] = "Edit";

            btnSubmit.Text = "Update";
            string[] param = new string[2];
            param[0] = "ID_Bank_Product";
            param[1] = GridView1.SelectedRow.Cells[1].Text;
            ds = CommanDataLoad.ExecuteDataSet("USP_Load_Bank_Product_Web_Edit", "1", "Edit Bank_Product_Web", param);
            //lblid.Text = GridView1.SelectedRow.Cells[1].Text;
            //lblid.Text = lblBank_Pro_Id.Text;
            //ddlBank.SelectedValue = GridView1.SelectedRow.Cells[2].Text;
            ddlProduct.SelectedValue = Convert.ToInt32(ds.Tables[0].Rows[0]["product_id"]).ToString();
            if(Convert.ToInt32(ds.Tables[0].Rows[0]["Bank_id"]).ToString()!="0")
            {
            ddlBank.SelectedValue = Convert.ToInt32(ds.Tables[0].Rows[0]["Bank_id"]).ToString();
            }
            else
            {
                ddlBank.SelectedIndex = -1;
            }
            btnSubmit.CausesValidation = true;
            lblBank_Pro_Id.Text = GridView1.SelectedRow.Cells[1].Text;
            lblid.Text = lblBank_Pro_Id.Text;
            //ddlBank.Items[ddlBank.SelectedIndex].Text = GridView1.SelectedRow.Cells[2].Text;
            //ddlProduct.Items[ddlProduct.SelectedIndex].Text = GridView1.SelectedRow.Cells[3].Text;
            txtMinAge.Text = ds.Tables[0].Rows[0]["Min_Age"].ToString();
            txtMaxAge.Text = ds.Tables[0].Rows[0]["Max_Age"].ToString();
            txtMinInte.Text = ds.Tables[0].Rows[0]["Min_Intrest"].ToString();
            txtMaxInte.Text = ds.Tables[0].Rows[0]["Max_Intrest"].ToString();
            txtProFee.Text = ds.Tables[0].Rows[0]["ProcessingFee"].ToString();
            txtProFeeType.Text = ds.Tables[0].Rows[0]["ProcessingFeeType"].ToString();
            txtMinLoan.Text = ds.Tables[0].Rows[0]["Min_Loan"].ToString();
            txtMaxLoan.Text = ds.Tables[0].Rows[0]["Max_Loan"].ToString();
            txtMinLAmt.Text = ds.Tables[0].Rows[0]["Min_Loan_Amt"].ToString();
            txtMaxLAmt.Text = ds.Tables[0].Rows[0]["Max_Loan_Amt"].ToString();
            txtMinInSal.Text = ds.Tables[0].Rows[0]["Min_Income_Salary"].ToString();
            txtMinInSelf.Text = ds.Tables[0].Rows[0]["Min_Income_Self"].ToString();
            txtMinTen.Text = ds.Tables[0].Rows[0]["Min_Tenure"].ToString();
            txtPreCharge.Text = ds.Tables[0].Rows[0]["Prepay_Charges"].ToString();
            txtCloserCharge.Text = ds.Tables[0].Rows[0]["Closer_Charges"].ToString();
            txtMinCreSco.Text = ds.Tables[0].Rows[0]["MinCredit_Score"].ToString();
            //txtMinAge.Text = GridView1.SelectedRow.Cells[4].Text;
            //txtMaxAge.Text = GridView1.SelectedRow.Cells[5].Text;
            //txtMinInte.Text = GridView1.SelectedRow.Cells[6].Text;
            //txtMaxInte.Text = GridView1.SelectedRow.Cells[7].Text;
            //txtProFee.Text = GridView1.SelectedRow.Cells[8].Text;
            //txtProFeeType.Text = GridView1.SelectedRow.Cells[9].Text;
            //txtMinLoan.Text = GridView1.SelectedRow.Cells[10].Text;
            //txtMaxLoan.Text = GridView1.SelectedRow.Cells[11].Text;
            //txtMinLAmt.Text = GridView1.SelectedRow.Cells[12].Text;
            //txtMaxLAmt.Text = GridView1.SelectedRow.Cells[13].Text;
            //txtMinInSal.Text = GridView1.SelectedRow.Cells[14].Text;
            //txtMinInSelf.Text = GridView1.SelectedRow.Cells[15].Text;
            //txtMinTen.Text = GridView1.SelectedRow.Cells[16].Text;
            //txtPreCharge.Text = GridView1.SelectedRow.Cells[17].Text;
            //txtCloserCharge.Text = GridView1.SelectedRow.Cells[18].Text;
            //txtMinCreSco.Text = GridView1.SelectedRow.Cells[19].Text;

            if (!string.IsNullOrEmpty(ds.Tables[0].Rows[0]["Msg"].ToString()))
            {

                txtMsg.Text = ds.Tables[0].Rows[0]["Msg"].ToString();

            }
            else
            {
                txtMsg.Text = "";
            }
            //if (!string.IsNullOrEmpty(GridView1.SelectedRow.Cells[20].Text))
            //{
            //    txtMsg.Text = "";
            //}
            //else
            //{
            //    txtMsg.Text = GridView1.SelectedRow.Cells[20].Text;
            //}
            //txtMaxTenure.Text = GridView1.SelectedRow.Cells[21].Text;
            txtMaxTenure.Text = ds.Tables[0].Rows[0]["Max_Tenure"].ToString();
            if (!string.IsNullOrEmpty(ds.Tables[0].Rows[0]["guarantor_required"].ToString()))
            {

                txtGuarantor.Text = ds.Tables[0].Rows[0]["guarantor_required"].ToString();
            }
            else
            {
                txtGuarantor.Text = "";
            }
            //if (!string.IsNullOrEmpty(GridView1.SelectedRow.Cells[22].Text))
            //{
            //    txtGuarantor.Text = "";
            //}
            //else
            //{
            //    txtGuarantor.Text = GridView1.SelectedRow.Cells[22].Text;
            //}

        }
        protected void GridView1_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            GridView1.PageIndex = e.NewPageIndex;
            Load_Grid();
        }
    }
    
}