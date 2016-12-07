using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

public partial class Employee_Master_Edit : System.Web.UI.Page
{

    string isactive = "";
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {

            CommanDataLoad.Load_CommanDropDown(ddledept, "", "select department_id,department_name from department_Master order by department_name asc", "0", "department_id", "department_name", "department_Master", "");
            CommanDataLoad.Load_CommanDropDown(ddledesignation, "", "select designation_id,designation from designation_Master order by designation asc", "0", "designation_id", "designation", "designation_Master", "");
            CommanDataLoad.Load_CommanDropDown(ddlcom, "", "select Company_id,company_name from company_Master", "0", "Company_id", "company_name", "Company_Master", "");
            CommanDataLoad.Load_CommanDropDown(ddlereporting, "", "select emp_code,emp_name from employee_Master order by emp_name asc", "0", "emp_code", "emp_name", "Employee_Master", "");
            Load_Employee_EditData();

            string[] Param = new string[2];
            Param[0] = "emp";
            Param[1] = Convert.ToInt16(Request.QueryString["EmpId"]).ToString();

            CommanDataLoad.Load_Gridview(GridView1, "sp_get_login_history", "1", "Edit employee", Param);



        }
    }
    private void ClearControls()
    {
        txtecode.Text = "";
        txtename.Text = "";
        ddlcom.SelectedValue = "-1";
        txteml.Text = "";
        txteaddress.Text = "";
        txtedob.Text = "";
        txtemobileno.Text = "";
        ddledept.SelectedValue = "-1";
        ddledesignation.SelectedValue = "-1";

        txtectc.Text = "";
        txtevariable.Text = "";
        chkeactive.Checked = false;
        txtecode.Focus();
    }

    public void Update_Employee_Data()
    {
        try
        {

            if (txtename.Text == "")
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Enter Employee Name')", true);
                return;
            }


            if (ddlereporting.SelectedValue == "-1")
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Select Reporting')", true);
                return;
            }
            //if (ddledept.SelectedValue == "-1")
            //{
            //    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Select Department')", true);
            //    return;
            //}
            //if (ddledesignation.SelectedValue == "-1")
            //{
            //    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Select Designation')", true);
            //    return;
            //}

            //if (txtedob.Text == "")
            //{
            //    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Enter Date of Birth')", true);
            //    return;
            //}

            //if (txtectc.Text == "")
            //{
            //    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Enter CTC')", true);
            //    return;
            //}

            //if (txtevariable.Text == "")
            //{
            //    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Enter Variable')", true);
            //    return;
            //}
            //if (txtemobileno.Text == "")
            //{
            //    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Enter Mobile No')", true);
            //    return;
            //}

            if (chkeactive.Checked == true)
            {
                isactive = "1";
            }
            else
            {
                isactive = "0";
            }





            string[] param = new string[26];
            param[0] = "Emp_Name";
            param[1] = txtename.Text;

            param[2] = "Emp_Code";
            param[3] = txtecode.Text;

            param[4] = "Company_Id";
            param[5] = ddlcom.SelectedValue;

            param[6] = "Email_Id";
            param[7] = txteml.Text;

            param[8] = "Address";
            param[9] = txteaddress.Text;

            param[10] = "DOB";
            param[11] = txtedob.Text;

            param[12] = "Mobile";
            param[13] = txtemobileno.Text;

            param[14] = "Is_Active";
            param[15] = isactive;



            param[16] = "Designation_Id";
            param[17] = ddledesignation.SelectedValue;


            param[18] = "Department_Id";
            param[19] = ddledept.SelectedValue;

            param[20] = "CTC";
            if (txtectc.Text == "")
            {
                param[21] = "0";
            }
            else
            {
                param[21] = txtectc.Text;
            }
            param[22] = "Variable";
            if (txtevariable.Text == "")
            {
                param[23] = "0";
            }
            else
            {

                param[23] = txtevariable.Text;
            }
            param[24] = "Reporting_emp";
            param[25] = ddlereporting.SelectedValue;



            int rowaffected = CommanDataLoad.ExecuteNonQuery("Usp_Update_EmployeeMaster", "1", "UpdEmployee_Master", param);
            if (rowaffected > 0)
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Record Saved Successfully')", true);
                Response.Redirect("Employee_Data.aspx");
            }

            ClearControls();

        }

        catch (Exception ex)
        {
            //ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Some Error' + ex.Message.ToString();)", true);
            throw;
        }
    }
    public void Load_Employee_EditData()
    {
        string[] Param = new string[2];
        Param[0] = "EmpId";
        Param[1] = Convert.ToInt16(Request.QueryString["EmpId"]).ToString();
        DataSet ds = new DataSet();
        ds = CommanDataLoad.ExecuteDataSet("USP_EditEmployee_List", "1", "Edit", Param);
        if (ds != null)
        {
            if (ds.Tables[0].Rows.Count > 0)
            {
                txtename.Text = ds.Tables[0].Rows[0]["EmployeeName"].ToString();
                txtecode.Text = ds.Tables[0].Rows[0]["EmpCode"].ToString();
                txtectc.Text = ds.Tables[0].Rows[0]["ctc"].ToString();
                txteml.Text = ds.Tables[0].Rows[0]["EMailID"].ToString();
                txtevariable.Text = ds.Tables[0].Rows[0]["variable"].ToString();
                if (Convert.ToInt32(ds.Tables[0].Rows[0]["company_id"]) > 0)
                {
                    ddlcom.SelectedValue = Convert.ToInt32(ds.Tables[0].Rows[0]["company_id"]).ToString();
                }
                else
                {
                    ddlcom.SelectedValue = "-1";
                }
                if (Convert.ToInt16(ds.Tables[0].Rows[0]["Department_Id"]) > 0)
                {
                    ddledept.SelectedValue = Convert.ToInt16(ds.Tables[0].Rows[0]["Department_Id"]).ToString();
                }
                else
                {
                    ddledept.SelectedValue = "-1";
                }
                if (Convert.ToInt16(ds.Tables[0].Rows[0]["Designation_Id"]) > 0)
                {
                    ddledesignation.SelectedValue = Convert.ToInt16(ds.Tables[0].Rows[0]["Designation_Id"]).ToString();
                }
                else
                {
                    ddledesignation.SelectedValue = "-1";
                }
                txteaddress.Text = ds.Tables[0].Rows[0]["Address"].ToString();
                txtemobileno.Text = ds.Tables[0].Rows[0]["Mobile"].ToString();
                txtedob.Text = ds.Tables[0].Rows[0]["DOB"].ToString();

                if (Convert.ToString(ds.Tables[0].Rows[0]["reporting_emp"]) != "")
                {
                    ddlereporting.SelectedValue = Convert.ToString(ds.Tables[0].Rows[0]["reporting_emp"]).ToString();
                }
                else
                {
                    ddlereporting.SelectedValue = "-1";
                }
                if (Convert.ToInt16(ds.Tables[0].Rows[0]["IsActive"]) == 1)
                {
                    chkeactive.Checked = true;

                }
                else
                {
                    chkeactive.Checked = false;
                }

            }
            else
            {
                ClearControls();
            }
        }
    }




    protected void btnupdate_Click(object sender, EventArgs e)
    {
        Update_Employee_Data();
    }

    protected void btnback_Click(object sender, EventArgs e)
    {
        Response.Redirect("Employee_Data.aspx");
    }
}

