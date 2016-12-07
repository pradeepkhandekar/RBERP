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
    public partial class Source_Master : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack )
            {
                Load_Grid();
            }
        }

     
        protected void btnSubmit_Click(object sender, EventArgs e)
        {
            try
            {
                string[] param = new string[8];
                param[0] = "source_name";
                param[1] = txtsource.Text;
               
                param[2] = "Is_Active";
                if(chkIsActive.Checked == true )
                {
                    param[3] = "Y";
                }
                else
                {
                    param[3] = "N";
                }               
                param[4] = "UserId";
                param[5] = ClsConnection.Userid;
                param[6] = "Ip_Addr";
                param[7] = ClsConnection.StrIP;

                int rowaffected = CommanDataLoad.ExecuteNonQuery("USP_Insert_Source", "1", "Source Master", param);
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
                CommanDataLoad.Load_Gridview(GridView1, "USP_Load_SourceNAme", "1", "Source Master", "");
            }
            catch (Exception ex)
            {
                //lblmsg.Text = "Some Error" + ex.Message.ToString();            
            }
        }

        public void ClearControls()
        {
           
            txtsource.Text = "";
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
                string source_id = "";
                source_id = GridView1.DataKeys[gvrow.RowIndex].Value.ToString();

                Load_Source_Detail(source_id);
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


        protected void Load_Source_Detail(string Source_Id)
        {

            try
            {
                string[] param = new string[2];
                param[0] = "source_id";
                param[1] = Source_Id;

                DataSet ds = new DataSet();
                ds = CommanDataLoad.ExecuteDataSet("USP_Load_Source_Detail", "1", "Edit Source Master", param);

                if (ds != null)
                {
                    txtsource.Text = ds.Tables[0].Rows[0]["source_Id"].ToString();
                   
                               
                  
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

     

        protected void btnUpdate_Click(object sender, EventArgs e)
        {
            if (txtsource.Text == "")
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Enter Sub Division Name')", true);
                return;
            }

          

            Update_Data();
        }

        protected void Update_Data()
        {
            try
            {
                string[] param = new string[11];
                param[0] = "source_id";
                param[1] = lblsourceId.Text;
               
                param[2] = "Source_Name";
                param[3] = txtesource.Text;
                param[4] = "Is_Active";
                if (chkIsAct.Checked == true)
                {
                    param[5] = "Y";
                }
                else
                {
                    param[6] = "N";
                }
                param[7] = "Userid";
                param[8] = ClsConnection.Userid;
                param[9] = "Ip_Addr";
                param[10] = ClsConnection.StrIP;

                int rowaffected = CommanDataLoad.ExecuteNonQuery("USP_Update_Source", "1", "Source Master", param);
                
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