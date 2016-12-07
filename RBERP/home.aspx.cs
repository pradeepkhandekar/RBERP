using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text;
using System.Data;
using System.Net;
using System.Data.SqlClient;

namespace RBERP
{
    public partial class home : System.Web.UI.Page
    {
        private const string udcErrorSource = "home.aspx";

        StringBuilder sbmenus;
        StringBuilder sbAdded;
        protected void Page_Load(object sender, EventArgs e)
        {
            DataSet ds = new DataSet();
            //bool blnResult = false;
            //string strUserGroup = "";
            //   Session["UserName"] = "Admin";
            string strIP = "";
            //int intBOSessionId;
            DataSet dsMenus;
            //strUserGroup = clsBOMisc.strGetCookie(this, "BO_UserGroupId", "");

            // ClientScript.RegisterClientScriptBlock(this.GetType(), "NO ACCESS", "<script language=javascript>javascript:subRedirectToDefault1();</script>");
            try
            {
                if ( Request.Cookies["UserId"].Value.ToString() == "")
                {
                    Response.Redirect("default.aspx?msg=Your session expired, Please login again....!");
                }
            }
            catch
            {
                Response.Redirect("default.aspx?msg=Your session expired, Please login again....!");

            }

            strIP = Request.UserHostAddress.ToString();
            try
            {
                string strUserId = Session["UserName"].ToString();

                tdwelcome.Attributes.Add("class", "lblDefault");
                tdwelcome.Attributes.Add("style", "color:#000");
                tdwelcome.InnerHtml = "Welcome, " + strUserId + " | <a href=\"default.aspx\">Logout</a> | <a href=\"Change_password.aspx\">Change Password</a>";

                string[] Param = new string[4];
                Param[0] = "strUserLogin";
                Param[1] = strUserId;
                Param[2] = "userid";
                Param[3] = Request.Cookies["UserId"].Value.ToString();

                ds = CommanDataLoad.ExecuteDataSet("[uspUser_Menu]", "1", "Home", Param);

                if (ds.Tables[0].Rows.Count > 0)
                {
                    dsMenus = ds;
                    sbmenus = new StringBuilder();
                    sbAdded = new StringBuilder();

                    sbmenus.Append("<ul class='nav'><li>");
                    for (int i = 0; i < dsMenus.Tables[0].Rows.Count; i++)
                    {
                        if (dsMenus.Tables[0].Rows[i]["Menu_Name"].ToString() == "Logout")
                            continue;

                        if (sbAdded.ToString().IndexOf(dsMenus.Tables[0].Rows[i]["Menu_Parent"].ToString() + ",") < 0 && Convert.ToInt32(dsMenus.Tables[0].Rows[i]["Menu_Level"].ToString()) > 0)
                            continue;

                        if (sbAdded.ToString().IndexOf(dsMenus.Tables[0].Rows[i]["Menu_Name"].ToString() + ",") < 0 || Convert.ToInt32(dsMenus.Tables[0].Rows[i]["Menu_Level"]) == 0)
                        {
                            CreateMenu(dsMenus, dsMenus.Tables[0].Rows[i]["Menu_Name"].ToString(), dsMenus.Tables[0].Rows[i]["Menu_Action"].ToString(), dsMenus.Tables[0].Rows[i]["Menu_Level"].ToString());
                        }

                    }
                    sbmenus.Append("</ul>");
                    menus.InnerHtml = sbmenus.ToString();
                }
                else
                {
                    ClientScript.RegisterClientScriptBlock(this.GetType(), "OnSessionClosed", "<script language=javascript>subRedirectToDefault();</script>");
                    return;
                }

            }
            catch (Exception ex)
            {
                // clsBOMisc.subDisplayError(this, udcErrorSource, udcErrorMethod, "ERROR", ex.ToString());
            }
            //   objDB.blnCloseConnection();
            //Response.Redirect("Admin_Dashboard_Sales.aspx");

        }

        private void CreateMenu(DataSet dsMenus, string strmenu, string strlink, string intlevel)
        {
            sbAdded.Append(strmenu + ",");

            //check if the menu has any child
            var submenus = from m in dsMenus.Tables[0].AsEnumerable().ToList()
                           where m.Field<string>("Menu_Parent") == strmenu
                           select new { name = m.Field<string>("Menu_Name"), link = m.Field<string>("Menu_Action"), level = (int?)m.Field<byte>("Menu_Level") ?? 0 };


            if (submenus.Count() > 0) //if has submenus
            {
                //add the current menu
                if (Convert.ToInt32(intlevel) == 0)
                {
                    sbmenus.Append("<li class='dropdown'>");
                    if (strlink == "")
                        sbmenus.Append("<a data-toggle='dropdown' class='dropdown-toggle' href=\"#\">" + Server.HtmlEncode(strmenu) + "<b class='caret'></b></a>");
                    else
                        sbmenus.Append("<a data-toggle='dropdown' class='dropdown-toggle' onclick=\"" + strlink + "\">" + Server.HtmlEncode(strmenu) + "<b class='caret'></b></a>");
                }
                else
                {
                    sbmenus.Append("<li class='dropdown-submenu'>");
                    if (strlink == "")
                        sbmenus.Append("<a href=\"#\">" + Server.HtmlEncode(strmenu) + "</a>");
                    else
                        sbmenus.Append("<a onclick=\"" + strlink + "\">" + Server.HtmlEncode(strmenu) + "</a>");
                }


                sbmenus.Append("<ul class='dropdown-menu'>");
                foreach (var submenu in submenus)
                {
                    CreateMenu(dsMenus, submenu.name, submenu.link, submenu.level.ToString());
                }
                sbmenus.Append("</ul>");
            }
            else //if does not have sub menu
            {
                //add the current menu
                sbmenus.Append("<li>");
                if (strlink == "")
                    sbmenus.Append("<a href=\"#\">" + Server.HtmlEncode(strmenu) + "</a>");
                else
                    sbmenus.Append("<a onclick=\"" + strlink + "\">" + Server.HtmlEncode(strmenu) + "</a>");
            }
            sbmenus.Append("</li>");
        }


    }
}



