using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
public partial class GroupRights : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //if (CommanDataLoad.CheckUserRights("20", Request.Cookies["userid"].Value.ToString()) == 0)
        //{
        //    Response.Write("Please Login Again");
        //    ClientScript.RegisterClientScriptBlock(this.GetType(), "NO ACCESS", "<script language=javascript>javascript:subRedirectToDefault1();</script>");
        //    return;
        //}
        if (!IsPostBack)
        {
            CommanDataLoad.Load_CommanDropDown(ddlgroup, "", "Select GroupId,GroupName from group_master order by groupname", "2", "GroupId", "GroupName", "Group Rights","");
        }
    }

   
    protected void ddlgroup_SelectedIndexChanged(object sender, EventArgs e)
    {
        
        string[] param = new string[2];
        param[0] = "groupid";
        param[1] = ddlgroup.SelectedValue;
        DataSet ds = new DataSet();
        SqlConnection con=new SqlConnection(ClsConnection.Connection());
        SqlCommand cmd= new SqlCommand("sp_select_group",con);
        cmd.CommandType= CommandType.StoredProcedure;
        cmd.Parameters.AddWithValue("@groupid",ddlgroup.SelectedValue);
        SqlDataAdapter da = new SqlDataAdapter(cmd);
        da.Fill(ds);
        //ds = CommanDataLoad.ExecuteDataSet("sp_select_group", "1", "Group Rights", param);
        if (ds != null)
        {
            if (ds.Tables[0].Rows.Count > 0)
            {
                TreeView1.Nodes.Clear();
                int i=0;
                TreeNode Parent = new TreeNode();
                TreeNode Cheild = new TreeNode();
                string StrParent = "";
                var ParantData = (from d in ds.Tables[0].AsEnumerable() where d.Field<string>("Menu_Level").Contains("0") select new { Menu_Name = d.Field<string>("Menu_Name"), Menu_Id = d.Field<int>("MenuMasterId") }).Distinct();
                if (ParantData.Count() > 0)
                {
                    i = 0;
                    while (i < ParantData.Count())
                    {
                        StrParent = ParantData.ElementAt(i).Menu_Name.ToString();
                        Parent = new TreeNode();
                        Parent.Text = StrParent;
                        Parent.Value = ParantData.ElementAt(i).Menu_Id.ToString();
                        var CheildData = (from d in ds.Tables[0].AsEnumerable() where d.Field<string>("Menu_Parent").Contains(StrParent) select new { Menu_Name = d.Field<string>("Menu_Name"), Menu_Id = d.Field<int>("MenuMasterId"), IsExits = d.Field<int>("IsExist") });
                       int j = 0;

                       while (j < CheildData.Count())
                       {
                           Cheild = new TreeNode();
                           Cheild.Text = CheildData.ElementAt(j).Menu_Name;
                           Cheild.Value = CheildData.ElementAt(j).Menu_Id.ToString();
                           if (CheildData.ElementAt(j).IsExits > 0)
                           {
                               Cheild.Checked = true;
                           }
                           else
                           {
                               Cheild.Checked = false;
                           }
                           Parent.ChildNodes.Add(Cheild);
                           j = j + 1;
                       }


                       TreeView1.Nodes.Add(Parent);
                        i = i + 1;
                    }
                }
            }
        }
    }

    protected void btnsubmit_Click(object sender, EventArgs e)
    {
        string strDump = "";
        int i = 0;
        int j = 0;

        strDump = "delete from group_rights where groupid=" + ddlgroup.SelectedValue + ";";
        while (i < TreeView1.Nodes.Count)
        {
            if (TreeView1.Nodes[i].Checked == true)
            {
                strDump = strDump + "Insert into Group_Rights (Menu_ID,Groupid,UserId,ip,sysdate)";
                strDump = strDump + "values(" + TreeView1.Nodes[i].Value + "," + ddlgroup.SelectedValue + "," + CommanDataLoad.UserId + ",'" + Request.UserHostAddress + "',getdate());";
            }
            j = 0;
            while (j < TreeView1.Nodes[i].ChildNodes.Count)
            {
                if (TreeView1.Nodes[i].ChildNodes[j].Checked == true)
                {
                    strDump = strDump + "Insert into Group_Rights (Menu_ID,Groupid,UserId,ip,sysdate)";
                    strDump = strDump + "values(" + TreeView1.Nodes[i].ChildNodes[j].Value + "," + ddlgroup.SelectedValue + "," + CommanDataLoad.UserId + ",'" + Request.UserHostAddress + "',getdate());";
                }
                j = j + 1;
            }


            i = i + 1;
        }
        int rowaffected = CommanDataLoad.ExecuteNonQuery(strDump, "2", "Group Rights Item", "");



        if (rowaffected > 0)
        {
            Response.Write("<script>alert('Record Inserted Successfully.');</script>");
        }
        else
        {
            Response.Write("<script>alert('Technical error Please contact CS Development Team');</script>");
        }
    }
}