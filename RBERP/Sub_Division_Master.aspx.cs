using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Text;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace RBERP
{
    public partial class Sub_Division_Master : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack )
            {
                Load_Division();
            }
        }

        protected void Load_Division()
        {
            CommanDataLoad.Load_CommanDropDown(ddlDivision, "", "USP_Load_Division", "1", "Division_Id", "Division_Name", "Division_Master", "");
        }

        protected void btnSubmit_Click(object sender, EventArgs e)
        {
            try
            {
                string[] param = new string[10];
                param[0] = "Division_Id";
                param[1] = ddlDivision.SelectedValue;
                param[2] = "Sub_Division_Name";
                param[3] = txtSubDivision.Text;
                param[4] = "Is_Active";
                if(chkIsActive.Checked == true )
                {
                    param[5] = "Y";
                }
                else
                {
                    param[5] = "N";
                }               
                param[6] = "UserId";
                param[7] = ClsConnection.Userid;
                param[8] = "Ip_Addr";
                param[9] = ClsConnection.StrIP;

                int rowaffected = CommanDataLoad.ExecuteNonQuery("USP_Insert_Sub_Division", "1", "Sub Division Master", param);
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
                CommanDataLoad.Load_Gridview(GridView1, "USP_Load_Sub_Division", "1", "Sub Division Master", "");
            }
            catch (Exception ex)
            {
                //lblmsg.Text = "Some Error" + ex.Message.ToString();            
            }
        }

        public void ClearControls()
        {
            ddlDivision.SelectedIndex = -1;
            txtSubDivision.Text = "";
            chkIsActive.Checked = true;
        }

        protected void btnReset_Click(object sender, EventArgs e)
        {
            ClearControls();
        }

        protected void GridView1_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            if (e.CommandName == "ShowPopup")
            {
                LinkButton btndetails = (LinkButton)e.CommandSource;
                GridViewRow gvrow = (GridViewRow)btndetails.NamingContainer;
                string subdivid = "";
                subdivid = GridView1.DataKeys[gvrow.RowIndex].Value.ToString();

                Load_Sub_Division_Detail(subdivid);
            }
        }

        protected void GridView1_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            GridView1.PageIndex = e.NewPageIndex;
            Load_Grid();
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


        protected void Load_Sub_Division_Detail(string Sub_Division_Id)
        {

            try
            {
                string[] param = new string[2];
                param[0] = "Sub_Division_Id";
                param[1] = Sub_Division_Id;

                DataSet ds = new DataSet();
                ds = CommanDataLoad.ExecuteDataSet("USP_Load_Sub_Division_Detail", "1", "Edit Sub Division Master", param);

                if (ds != null)
                {
                    lblSubDivisionId.Text = ds.Tables[0].Rows[0]["Sub_Division_Id"].ToString();
                    Load_Div();
                    ddlDiv.SelectedValue = ds.Tables[0].Rows[0]["Division_Id"].ToString();                   
                    txtSubDiv.Text = ds.Tables[0].Rows[0]["Sub_Division_Name"].ToString();
                    if (ds.Tables[0].Rows[0]["Is_Active"].ToString() =="Y")
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

        protected void Load_Div()
        {
            CommanDataLoad.Load_CommanDropDown(ddlDiv, "", "USP_Load_Division", "1", "Division_Id", "Division_Name", "Division_Master", "");

        }

        protected void btnUpdate_Click(object sender, EventArgs e)
        {
            if (txtSubDiv.Text == "")
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Enter Sub Division Name')", true);
                return;
            }

            if (ddlDiv.SelectedValue == "-1")
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Select Division Name')", true);
                return;
            }

            Update_Data();
        }

        protected void Update_Data()
        {
            try
            {
                string[] param = new string[12];
                param[0] = "Sub_Division_Id";
                param[1] = lblSubDivisionId.Text;
                param[2] = "Division_Id";
                param[3] = ddlDiv.SelectedValue;
                param[4] = "Sub_Division_Name";
                param[5] = txtSubDiv.Text;
                param[6] = "Is_Active";
                if (chkIsAct.Checked == true)
                {
                    param[7] = "Y";
                }
                else
                {
                    param[7] = "N";
                }
                param[8] = "Userid";
                param[9] = ClsConnection.Userid;
                param[10] = "Ip_Addr";
                param[11] = ClsConnection.StrIP;

                int rowaffected = CommanDataLoad.ExecuteNonQuery("USP_Update_Sub_Division", "1", "Sub Division Master", param);
                
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