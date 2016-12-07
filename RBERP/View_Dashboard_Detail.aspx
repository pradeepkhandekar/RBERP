<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="View_Dashboard_Detail.aspx.cs" Inherits="View_Dashboard_Detail" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>

    <script type="text/javascript">
    var popupWindow = null;

    function ShowForm(Emp_Code, fdate, tdate,type) {
        var left = 300,
            top = 300,
            popupWindow = window.open("View_Dashboard_Detail.aspx?Emp_Code=" + Emp_Code + "&fdate=" + fdate + "&tdate=" + tdate + "&type=" + type , "UserListDialog", "width=900, height=750, resizable, top=" + top + ", left=" + left);
        // popupWindow.focus();
        return false;
    }
    function parent_disable() {
        if (popupWindow && !popupWindow.closed)
            popupWindow.focus();
    }

    function ShowForm_login(Emp_Code, fdate, tdate, type) {
        var left = 300,
            top = 300,
            popupWindow = window.open("View_login_Details.aspx?Emp_Code=" + Emp_Code + "&fdate=" + fdate + "&tdate=" + tdate + "&type=" + type, "UserListDialog", "width=900, height=750, resizable, top=" + top + ", left=" + left);
        // popupWindow.focus();
        return false;
    }
    function parent_disable() {
        if (popupWindow && !popupWindow.closed)
            popupWindow.focus();
    }


</script>
    <style>
    .lnkview {
        cursor: pointer;
    }
     .hide{
        display:none;
    }
</style>
<body>
    <form id="form1" runat="server">
    <div>
    
        <table style="width: 100%; ">
            <tr style="font-weight: bold; color: #000000">
                <td align="center" 
                    style="font-size: 11pt; font-family: Verdana; font-weight: bold">
                    View 
                    Detail</td>
            </tr>
            <tr>
                <td align="center" style="font-size: 8pt" valign="top">
                    &nbsp;</td>
            </tr>
            <tr>
                <td align="center" style="font-size: 9pt" valign="top">
                    <asp:Panel ID="Pnlpropertylist" runat="server" 
                        GroupingText="View Detail"   ScrollBars="Vertical" Height="600px" 
                        ForeColor="#003366">
                        <table>
                            <tr>
                                <td align="left">
                                    <asp:GridView ID="grdDetails" runat="server" AutoGenerateColumns="False" 
                                        CellPadding="4" ForeColor="#333333" Width="850px" Font-Names="Verdana" OnRowDataBound="grdDetails_RowDataBound" ShowFooter="True">
                                        <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
                                        <Columns>
                                            <asp:TemplateField HeaderText="Sr.no">
                                                <EditItemTemplate>
                                                    <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
                                                </EditItemTemplate>
                                                <ItemTemplate>
                                                <%# Container.DataItemIndex +1 %>
                                                </ItemTemplate>
                                            </asp:TemplateField>
                                             <asp:TemplateField HeaderText="Manager" ItemStyle-CssClass="lnkview">
                                        <ItemTemplate>
                                            <asp:HyperLink ID="hpname" runat="server" Text='<%# Eval("name") %>'></asp:HyperLink>
                                        </ItemTemplate>
                                        <FooterStyle HorizontalAlign="left" />
                                        <ItemStyle HorizontalAlign="left" Font-Underline="True"
                                            CssClass="lnkview" />
                                    </asp:TemplateField>
                                               <asp:TemplateField HeaderText="Total number of files" ItemStyle-CssClass="lnkview">
                                        <ItemTemplate>
                                            <asp:HyperLink ID="hptfiles" runat="server" Text='<%# Eval("tot_no_of_files") %>'></asp:HyperLink>
                                        </ItemTemplate>
                                        <FooterStyle HorizontalAlign="Center" />
                                        <ItemStyle HorizontalAlign="Center" Font-Underline="True"
                                            CssClass="lnkview" />
                                    </asp:TemplateField>
                                             <asp:BoundField DataField="Prev_Login_Amt" HeaderText="Prev.Login Amount">
                                        <ItemStyle HorizontalAlign="Right" />
                                        <FooterStyle HorizontalAlign="Right" />
                                    </asp:BoundField>
                                            <asp:BoundField DataField="loginamt" HeaderText="Login Amount">
                                            <FooterStyle HorizontalAlign="Center" />
                                            <ItemStyle HorizontalAlign="center" />
                                            </asp:BoundField>
                                            <asp:BoundField DataField="SanctionAmt" HeaderText="Sanction Amount">
                                            <FooterStyle HorizontalAlign="Center" />
                                            <ItemStyle HorizontalAlign="Center" />
                                            </asp:BoundField>
                                            <asp:BoundField DataField="DisurbsAmt" HeaderText="Total Amt Disbursed" >
                                            <FooterStyle HorizontalAlign="Center" />
                                            <ItemStyle HorizontalAlign="Center" />
                                            </asp:BoundField>
                                            
                                            <asp:BoundField DataField="emp_code" HeaderText="EmpCode" >
                                            
                                            <FooterStyle CssClass="hide" />
                                            <HeaderStyle CssClass="hide" />
                                            <ItemStyle CssClass="hide" />
                                            </asp:BoundField>
                                            
                                        </Columns>
                                        <EditRowStyle BackColor="#999999" />
                                        <FooterStyle BackColor="#5D7B9D" Font-Bold="True" ForeColor="White" />
                                        <HeaderStyle BackColor="#5D7B9D" Font-Bold="True" ForeColor="White" />
                                        <PagerStyle BackColor="#284775" ForeColor="White" HorizontalAlign="Center" />
                                        <RowStyle BackColor="#F7F6F3" ForeColor="#333333" />
                                        <SelectedRowStyle BackColor="#E2DED6" Font-Bold="True" ForeColor="#333333" />
                                        <SortedAscendingCellStyle BackColor="#E9E7E2" />
                                        <SortedAscendingHeaderStyle BackColor="#506C8C" />
                                        <SortedDescendingCellStyle BackColor="#FFFDF8" />
                                        <SortedDescendingHeaderStyle BackColor="#6F8DAE" />
                                    </asp:GridView>
                                </td>
                            </tr>
                        </table>
                    </asp:Panel>
                </td>
            </tr>
            <tr>
                <td align="center">
                    &nbsp;</td>
            </tr>
        </table>
    
    </div>
    </form>
</body>
</html>
