<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Lead_Assign_Telecaller.aspx.cs" Inherits="RBERP.Lead_Assign_Telecaller" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        .auto-style1 {
            width: 100%;
        }
    </style>
    <script type="text/javascript">
        function SelectAllCheckboxes(spanChk) {
            // Added as ASPX uses SPAN for checkbox
            var oItem = spanChk.children;
            var theBox = (spanChk.type == "checkbox") ? spanChk : spanChk.children.item[0];
            var grdControl = document.getElementById('<% = dglead.ClientID %>');
            xState = theBox.checked;

            if (grdControl == null) return false;
            var chkRemove = "chk";
            var Inputs = grdControl.getElementsByTagName("input");

            for (var n = 0; n < Inputs.length; ++n) {
                if (Inputs[n].type == 'checkbox' && Inputs[n].id.indexOf(chkRemove, 0) >= 0) {
                    if (xState == true)
                        Inputs[n].checked = true;
                    else
                        Inputs[n].checked = false;
                }
            }
        }
    </script>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <table class="auto-style1" style="font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 10pt">
                <tr>
                    <td align="center" colspan="3"><strong>Lead Assign to Telecaller</strong></td>
                    <td align="center">&nbsp;</td>
                </tr>
                <tr>
                    <td align="right">Select City</td>
                    <td align="center">:</td>
                    <td>
                        <asp:DropDownList ID="ddlCity" runat="server" Width="250px" AutoPostBack="True" OnSelectedIndexChanged="ddlCity_SelectedIndexChanged">
                        </asp:DropDownList>
                    </td>
                    <td>
                        &nbsp;</td>
                </tr>
                <tr>
                    <td align="right">Assign To</td>
                    <td align="center">:</td>
                    <td>
                        <asp:DropDownList ID="ddltelecaller" runat="server" Width="250px">
                        </asp:DropDownList>
                    </td>
                    <td>
                        &nbsp;</td>
                </tr>
                
                <tr>
                    <td align="right">Status</td>
                    <td align="center">:</td>
                    <td>
                        <asp:DropDownList ID="ddlstatus" runat="server" AutoPostBack="true" Width="250px" OnSelectedIndexChanged="ddlstatus_SelectedIndexChanged">
                        </asp:DropDownList>
                    </td>
                    <td>
                        &nbsp;</td>
                </tr>
                
                <tr>
                    <td colspan="3" align="center">
                        <asp:Button ID="btnsubmit" runat="server" OnClick="btnsubmit_Click" Text="Submit" />
                        &nbsp;&nbsp; <asp:Button ID="btndelete" runat="server" OnClick="btndelete_Click" Text="Delete" />
                    </td>
                    <td align="center">
                        &nbsp;</td>
                </tr>
                <tr>
                    <td align="center" colspan="4">
                        <asp:GridView ID="dglead" runat="server" AutoGenerateColumns="False"
                            BackColor="White" BorderColor="#3366CC" BorderStyle="None" BorderWidth="1px" CellPadding="4"
                            Font-Size="9pt" AllowPaging="True" OnPageIndexChanging="dglead_PageIndexChanging" PageSize="20">
                            <Columns>
                                <asp:TemplateField HeaderText="Select">
                                    <EditItemTemplate>
                                        <asp:CheckBox ID="CheckBox1" runat="server" />
                                    </EditItemTemplate>
                                    <ItemTemplate>
                                        <asp:CheckBox ID="chkselect" runat="server" />
                                    </ItemTemplate>
                                    <HeaderTemplate>
                                        <input id="Checkbox2" runat="server" name="CheckAll" onclick="SelectAllCheckboxes(this)"
                                            type="checkbox" />
                                    </HeaderTemplate>
                                    <HeaderStyle ForeColor="White" />
                                </asp:TemplateField>
                                <asp:BoundField DataField="lead_id" HeaderText="Ref. No." />
                                <asp:BoundField DataField="name" HeaderText="Customer Name" />
                                <asp:BoundField DataField="companyname" HeaderText="Company" />
                                <asp:BoundField DataField="Designation" HeaderText="Designation" />
                                <asp:BoundField DataField="phone" HeaderText="Contact No" />
                                <asp:BoundField DataField="mobile" HeaderText="Mobile" />
                                <asp:BoundField DataField="city_name" HeaderText="City" />
                                <asp:BoundField DataField="email" HeaderText="E-Mail ID" />
                                <asp:BoundField DataField="Profession_name" HeaderText="Profession" />
                                <asp:BoundField DataField="monthlyincome" HeaderText="Monthly Income" />
                                <asp:BoundField DataField="Product_name" HeaderText="Product" />
                                <asp:BoundField DataField="lead_source" HeaderText="Lead Source" />
                                <asp:BoundField DataField="assign" HeaderText="Assign" />
                                <asp:BoundField DataField="lead_type" HeaderText="Lead Type" />
                                <asp:BoundField DataField="lead_status" HeaderText="Lead Status" />
                                <asp:BoundField DataField="campaignName" HeaderText="Campaign Name">
                                <ItemStyle HorizontalAlign="Left" />    
                                </asp:BoundField>
                                <asp:BoundField DataField="Source_Name" HeaderText="Source Name">
                                <ItemStyle HorizontalAlign="Left" />    
                                </asp:BoundField>
                                <asp:BoundField DataField="Vertical_Name" HeaderText="Vertical Name">
                                <ItemStyle HorizontalAlign="Left" />    
                                </asp:BoundField>
                            </Columns>
                            <FooterStyle BackColor="#99CCCC" ForeColor="#003399" />
                            <HeaderStyle BackColor="#003399" Font-Bold="True" ForeColor="#CCCCFF" />
                            <PagerSettings Position="TopAndBottom" />
                            <PagerStyle BackColor="#99CCCC" ForeColor="#003399" HorizontalAlign="Left" />
                            <RowStyle BackColor="White" ForeColor="#003399" />
                            <SelectedRowStyle BackColor="#009999" Font-Bold="True" ForeColor="#CCFF99" />
                            <SortedAscendingCellStyle BackColor="#EDF6F6" />
                            <SortedAscendingHeaderStyle BackColor="#0D4AC4" />
                            <SortedDescendingCellStyle BackColor="#D6DFDF" />
                            <SortedDescendingHeaderStyle BackColor="#002876" />
                        </asp:GridView>
                    </td>
                </tr>
            </table>

        </div>
    </form>
</body>
</html>
