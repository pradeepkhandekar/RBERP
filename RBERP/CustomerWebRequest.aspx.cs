using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace RBERP
{
    public partial class CustomerWebRequest : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            string Source = "", CustomerName = "", MobileNo = "", Email = "", Profession = "", CityId = "", Product = "", MonthlyIncome = "";
            NameValueCollection nvc = Request.Form;

            if (!string.IsNullOrEmpty(nvc["source"]))
            {
                Source = nvc["source"];

                if (Source == "13")
                {

                    if (!string.IsNullOrEmpty(nvc["name"]))
                    {
                        CustomerName = nvc["name"];
                    }

                    if (!string.IsNullOrEmpty(nvc["product"]))
                    {
                        Product = nvc["product"];
                    }

                    if (!string.IsNullOrEmpty(nvc["income"]))
                    {
                        MonthlyIncome = nvc["income"];
                    }

                    if (!string.IsNullOrEmpty(nvc["profession"]))
                    {
                        Profession = nvc["profession"];
                    }

                    if (!string.IsNullOrEmpty(nvc["contact"]))
                    {
                        MobileNo = nvc["contact"];
                    }
                    if (!string.IsNullOrEmpty(nvc["email"]))
                    {
                        Email = nvc["email"];
                    }
                    if (!string.IsNullOrEmpty(nvc["city"]))
                    {
                        CityId = nvc["city"];
                    }
                    int i = DirectWebsiteLead(CustomerName, MobileNo, Email, CityId, Profession, Product, MonthlyIncome);
                }

            }
            else
            {
                int i = InsertData();
            }

        }

        protected int DirectWebsiteLead(string CName, string MobileNo, string Email, string CityId, string Profession, string Product_Id, string MonthlyIncome)
        {
            int result = 0;

            try
            {
                string[] param = new string[14];
                param[0] = "CName";
                param[1] = CName;
                param[2] = "MobileNo";
                param[3] = MobileNo;
                param[4] = "City_Id";
                param[5] = CityId;
                param[6] = "Email";
                param[7] = Email;
                param[8] = "Profession";
                param[9] = Profession;
                param[10] = "MonthlyIncome";
                param[11] = MonthlyIncome;
                param[12] = "Product_Id";
                param[13] = Product_Id;


                int rowaffected = CommanDataLoad.ExecuteNonQuery("USP_Insert_LeadRawData_Website", "1", "Customer Web Request", param);
                if (rowaffected > 0)
                {
                    //Response.Write("<script>alert('Record Insert Successfully.');</script>");
                    result = 1;
                    Response.Write(result);
                }
                else
                {
                    result = 0;
                    Response.Write(result);
                }
                return result;

            }

            catch (Exception ex)
            {
                result = 0;
                //lblmsg.Text = "Some Error" + ex.Message.ToString();            
            }
            return result;

        }

        public int InsertData()
        {
            int result = 0;

            string CustomerName = "", Email = "", ContactNo = "", Type = "";

            try
            {

                NameValueCollection nvc1 = Request.Form;

                if (!string.IsNullOrEmpty(nvc1["name"]))
                {
                    CustomerName = nvc1["name"];
                }
                else
                {
                    result = 0;
                    return result;
                }

                if (!string.IsNullOrEmpty(nvc1["email"]))
                {
                    Email = nvc1["email"];
                }

                if (!string.IsNullOrEmpty(nvc1["contact"]))
                {
                    ContactNo = nvc1["contact"];
                }

                if (!string.IsNullOrEmpty(nvc1["form"]))
                {
                    Type = nvc1["form"];
                }

                string[] param = new string[8];
                param[0] = "CustName";
                param[1] = CustomerName;
                param[2] = "MobileNo";
                param[3] = ContactNo;
                param[4] = "Email_Id";
                param[5] = Email;
                param[6] = "Type";
                param[7] = Type;
                int rowaffected = CommanDataLoad.ExecuteNonQuery("USP_Insert_CustomerWebReq", "1", "Customer Web Request", param);
                if (rowaffected > 0)
                {
                    //Response.Write("<script>alert('Record Insert Successfully.');</script>");
                    result = 1;
                    Response.Write(result);
                }
                else
                {
                    result = 0;
                    Response.Write(result);
                }
                return result;

            }

            catch (Exception ex)
            {
                result = 0;
                //lblmsg.Text = "Some Error" + ex.Message.ToString();            
            }
            return result;

        }
    }
}