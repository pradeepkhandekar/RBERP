using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace RBERP
{
    public partial class Bank_Pay_Out_Master : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                CommanDataLoad.Load_CommanDropDown(ddlproduct, "", "select product_id,product_name from product_master order by Product_Name", "0", "product_id", "product_name", "product_master", "");
                CommanDataLoad.Load_CommanDropDown(ddlbank, "", "select bank_id,bank_name from Bank_master order by bank_name", "0", "bank_id", "bank_name", "Bank_master", "");
                BindGrid();
            }
        }

        public void ClearControls()
        {
            txtpayfrom1.Text = "";
            txtpayfrom2.Text = "";
            txtpayfrom3.Text = "";
            txtpayfrom4.Text = "";
            txtpayfrom5.Text = "";
            txtpayper1.Text = "";
            txtpayper2.Text = "";
            txtpayper3.Text = "";
            txtpayper4.Text = "";
            txtpayper5.Text = "";
            txtpayto1.Text = "";
            txtpayto2.Text = "";
            txtpayto3.Text = "";
            txtpayto4.Text = "";
            txtpayto5.Text = "";
            txtprocssper.Text = "";
            txtflat.Text = "";
            ddlbank.SelectedIndex = 0;
            ddlproduct.SelectedIndex = 0;

        }

        protected void btnsubmit_Click(object sender, EventArgs e)
        {
            try
            {
                string[] param = new string[42];

                param[0] = "Bank_Id";
                param[1] = ddlbank.SelectedValue;

                param[2] = "Product_Id";
                param[3] = ddlproduct.SelectedValue;

                param[4] = "Payoutfrom1";
                if (txtpayfrom1.Text != "")
                {
                    param[5] = txtpayfrom1.Text;
                }
                else
                {
                    param[5] = "0";
                }
                param[6] = "Payoutfrom2";
                if (txtpayfrom2.Text != "")
                {
                    param[7] = txtpayfrom2.Text;
                }
                else
                {
                    param[7] = "0";
                }


                param[8] = "Payoutfrom3";
                if (txtpayfrom3.Text != "")
                { param[9] = txtpayfrom3.Text; }
                else
                { param[9] = "0"; }


                param[10] = "Payoutfrom4";
                if (txtpayfrom4.Text != "")
                { param[11] = txtpayfrom4.Text; }
                else
                { param[11] = "0"; }

                param[12] = "Payoutfrom5";
                if (txtpayfrom5.Text != "")
                { param[13] = txtpayfrom5.Text; }
                else
                { param[13] = "0"; }


                param[14] = "Payoutto1";
                if (txtpayto1.Text != "")
                { param[15] = txtpayto1.Text; }
                else
                { param[15] = "0"; }


                param[16] = "Payoutto2";
                if (txtpayto2.Text != "")
                { param[17] = txtpayto2.Text; }
                else
                { param[17] = "0"; }


                param[18] = "Payoutto3";
                if (txtpayto3.Text != "")
                { param[19] = txtpayto3.Text; }
                else
                { param[19] = "0"; }

                param[20] = "Payoutto4";
                if (txtpayto4.Text != "")
                { param[21] = txtpayto4.Text; }
                else
                { param[21] = "0"; }


                param[22] = "Payoutto5";
                if (txtpayto5.Text != "")
                { param[23] = txtpayto5.Text; }
                else
                { param[23] = "0"; }


                param[24] = "Payoutper1";
                if (txtpayper1.Text != "")
                { param[25] = txtpayper1.Text; }
                else
                { param[25] = "0"; }

                param[26] = "Payoutper2";
                if (txtpayper2.Text != "")
                { param[27] = txtpayper2.Text; }
                else
                { param[27] = "0"; }

                param[28] = "Payoutper3";
                if (txtpayper3.Text != "")
                { param[29] = txtpayper3.Text; }
                else
                { param[29] = "0"; }


                param[30] = "Payoutper4";
                if (txtpayper4.Text != "")
                {
                    param[31] = txtpayper4.Text;
                }
                else
                {
                    param[31] = "0";
                }

                param[32] = "Payoutper5";
                if (txtpayper5.Text != "")
                {
                    param[33] = txtpayper5.Text;
                }
                else
                {
                    param[33] = "0";
                }

                param[34] = "Processing_Per";
                if (txtprocssper.Text != "")
                {
                    param[35] = txtprocssper.Text;
                }
                else
                {
                    param[35] = "0";
                }

                param[36] = "Ip_Address";
                param[37] = ClsConnection.StrIP;

                param[38] = "UserId";
                param[39] = ClsConnection.Userid;

                param[40] = "flat_Per";
                if (txtflat.Text != "")
                {
                    param[41] = txtflat.Text;
                }
                else
                {
                    param[41] = "0";
                }

                int rowaffected = CommanDataLoad.ExecuteNonQuery("Usp_Insert_BankPayout", "1", "Bank Payout Master", param);
                if (rowaffected > 0)
                {
                    Response.Write("<script>alert('Record Saved Successfully.');</script>");
                    //BindGrid();
                }

                ClearControls();
                BindGrid();

            }
            catch (Exception ex)
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Some Error' + ex.Message.ToString();)", true);

            }

        }
        private void BindGrid()
        {
            CommanDataLoad.Load_Gridview(grdbank, "Usp_Load_BankPayout", "1", "Message_Master", "");
        }

        protected void grdbank_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow | e.Row.RowType == DataControlRowType.Separator)
            {
                HyperLink hpLeadCnt1 = e.Row.FindControl("hpLeadCnt1") as HyperLink;
                hpLeadCnt1.Attributes["onclick"] = String.Format("return ShowForm('{0}');", e.Row.Cells[3].Text);




              

            }

        }
    }
}