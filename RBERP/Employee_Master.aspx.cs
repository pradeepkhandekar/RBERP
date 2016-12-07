using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

using System.Data.SqlClient;
using System.Configuration;
using System.Drawing;
using System.Web.Mail;

public partial class Employee_Master : System.Web.UI.Page
{
    private string isactive;
    //private DropDownList ddldept;

    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            CommanDataLoad.Load_CommanDropDown(ddlcompany, "", "select Company_id,company_name from company_Master", "0", "Company_id", "company_name", "Company_Master", "");
            //CommanDataLoad.Load_CommanDropDown(ddlreportingauth, "", "select Empid,emp_name from employee_Master order by emp_name asc", "0", "empid", "emp_name", "Employee_Master", "");
            CommanDataLoad.Load_CommanDropDown(ddldesignation, "", "select designation_id,designation from designation_Master order by designation asc", "0", "designation_id", "designation", "designation_Master", "");
            CommanDataLoad.Load_CommanDropDown(ddldept, "", "select department_id,department_name from department_Master order by department_name asc", "0", "department_id", "department_name", "department_Master", "");
            CommanDataLoad.Load_CommanDropDown(ddlreportingauth, "", "select emp_code,emp_name from employee_Master order by emp_name asc", "0", "emp_code", "emp_name", "Employee_Master", "");

            //dgemployeelist.DataSource = BindGrid();
            //dgemployeelist.DataBind();
            txtctc.Text = "0";
            txtvariable.Text = "0";
        }
    }
    private void ClearControls()
    {
        txtempcode.Text = "";
        txtempname.Text = "";
        ddlcompany.SelectedValue = "-1";
        txtemailid.Text = "";
        txtaddress.Text = "";
        txtdateofbirth.Text = "";
        txtmobileno.Text = "";
        ddldept.SelectedValue = "-1";
        ddldesignation.SelectedValue = "-1";

        txtctc.Text = "";
        txtvariable.Text = "";
        chkactive.Checked = false;
        txtempcode.Focus();
    }
    protected void btnsubmit_Click(object sender, EventArgs e)
    {

        try
        {
            if (txtempcode.Text == "")
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Enter Employee Code')", true);
                return;
            }

            if (txtempname.Text == "")
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Enter Employee Name')", true);
                return;
            }

            if (ddlcompany.SelectedValue == "-1")
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Select Company')", true);
                return;
            }

            if (txtdateofbirth.Text == "")
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Enter Date of Birth')", true);
                return;
            }

            if (txtdateofjoining.Text == "")
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Please Enter Date of Joining')", true);
                return;
            }

            if (chkactive.Checked == true)
            {
                isactive = "1";
            }
            else
            {
                isactive = "0";
            }

            DateTime localdate = DateTime.Now;
            String Birthdate, Joindate;
            if (txtdateofbirth.Text!="")
            {
                Birthdate = txtdateofbirth.Text;
            }
            else
            {
                Birthdate = DBNull.Value.ToString();
            }
            if (txtdateofjoining.Text != "")
            {
                Joindate = txtdateofjoining.Text;
            }
            else
            {
                Joindate = DBNull.Value.ToString();
            }
                 
            string[] param = new string[36];
            param[0] = "Emp_Name";
            param[1] = txtempname.Text;
            param[2] = "Emp_Code";
            param[3] = txtempcode.Text;
            param[4] = "Company_Id";
            param[5] = ddlcompany.SelectedValue;
            param[6] = "Email_Id";
            param[7] = txtemailid.Text;
            param[8] = "Address";
            param[9] = txtaddress.Text;
            param[10] = "DOB";
            param[11] = string.Format("{0:MM/dd/yyyy}", Birthdate);
            param[12] = "Mobile";
            param[13] = txtmobileno.Text;
            param[14] = "Reporting_Emp";
            param[15] = ddlreportingauth.SelectedValue;
            param[16] = "Is_Active";
            param[17] = isactive;
            param[18] = "Created_on";
            param[19] = string.Format("{0:s}", localdate);
            param[20] = "DOJ";
            param[21] = string.Format("{0:MM/dd/yyyy}", Joindate);
            param[22] = "ip";
            param[23] = ClsConnection.StrIP;
            param[24] = "userid";
            param[25] = "1";
            param[26] = "Designation_Id";
            param[27] = ddldesignation.SelectedValue;
            param[28] = "Band";
            param[29] = ddlband.SelectedValue;
            param[30] = "Department_Id";
            param[31] = ddldept.SelectedValue;
            param[32] = "CTC";
            param[33] = txtctc.Text;
            param[34] = "Variable";
            param[35] = txtvariable.Text;





            int rowaffected = CommanDataLoad.ExecuteNonQuery("SpInsEmployee_Master", "1", "Employee_Master", param);
            if (rowaffected > 0)
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Record Saved Successfully')", true);
               
            }

            ClearControls();

        }

        catch (Exception ex)
        {
            ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert('Some Error' + ex.Message.ToString();)", true);

        }
    }

    protected void btnreset_Click(object sender, EventArgs e)
    {
        ClearControls();
    }
    


    
}