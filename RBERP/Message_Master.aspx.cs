using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Text;

namespace RBERP
{
    public partial class Message_Master : System.Web.UI.Page
    {
        //Boolean checkExits=false;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                BindGrid();
            }

        }

        private void BindGrid()
        {
            CommanDataLoad.Load_Gridview(GridView1, "USP_Load_MessageMaster", "1", "Message_Master", "");
        }



        protected void btnReset_Click(object sender, EventArgs e)
        {
            if (txtMessage.Text != "" && TextArea1.Text != "")
            {
                ClearControls();
            }
            else
            {

                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Enter Values  In Data field ')", true);
            }
        }

        protected void ClearControls()
        {
            txtMessage.Text = "";
            TextArea1.Text = "";
           
            
        }

        protected void btnsubmit_Click(object sender, EventArgs e)
        {
            if(Session["checkExits"]==null || Session["checkExits"].ToString()=="")
            {
          
            if (txtMessage.Text!= "" && TextArea1.Text != "")
            {
                string[] param = new string[12];
                param[0] = "messageTitle";
                param[1] = txtMessage.Text;
                param[2] = "messageBody";
                param[3] = TextArea1.Text;
                param[4] = "is_Active";
                if (Active.Checked == true)
                {
                    param[5] = "1";
                }
                else
                {
                    param[5] = "0";
                }
                param[6] = "IP_address";
                param[7] = ClsConnection.StrIP;
                param[8] = "UserId";
                param[9] = ClsConnection.Userid;

                param[10] = "MessageId";
                param[11] = lblid.Text;

                int rowaffected = CommanDataLoad.ExecuteNonQuery("usp_insert_message_Master", "1", "Message_Master", param);
                if (rowaffected > 0)
                {
                    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Record Saved Successfully')", true);
                    ClearControls();
                    BindGrid();
                }
            }
            }
            else
            {
                //ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Enter Values In Data field ')", true);
                //ClearControls();
                update_data();
            }
            // ClearControls();
            Session["checkExits"] = "";
        }

        protected void GridView1_SelectedIndexChanged(object sender, EventArgs e)
        {
           
            Session["checkExits"] = "Edit";
           Label lblmsg = (Label)GridView1.SelectedRow.FindControl("lblEdit");
           lblid.Text = GridView1.SelectedRow.Cells[0].Text;
            txtMessage.Text = GridView1.SelectedRow.Cells[1].Text;
            TextArea1.Text = GridView1.SelectedRow.Cells[2].Text;

            if (GridView1.SelectedRow.Cells[3].Text == "Yes")
            {
                Active.Checked = true;
               Active.Text= GridView1.SelectedRow.Cells[3].Text;

            }
            else
                Active.Checked = false;
            Active.Text = GridView1.SelectedRow.Cells[3].Text;


        }

        protected void update_data()
        {
        try {


                string[] param = new string[8];
                param[0] = "Message_Id";
                param[1] = lblid.Text;
                param[2] = "messageTitle";
                param[3] = txtMessage.Text;
                param[4] = "messageBody";
                param[5] = TextArea1.Text;

                param[6] = "Is_Active";
                if (Active.Checked == true)
                {
                    param[7] = "1";
                }
                else
                {
                    param[7] = "0";
                }
             

                int rowaffected = CommanDataLoad.ExecuteNonQuery("USP_Update_message_Master", "1", "Message_Master", param);
                if (rowaffected > 0)
                {
                    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Record updated Successfully')", true);
                    ClearControls();
                    BindGrid();

                }
            }

        catch (Exception ex)
            {


            }
        }

        protected void GridView1_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            GridView1.PageIndex = e.NewPageIndex;
            BindGrid();
        }
    }









}
    
