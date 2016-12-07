<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Admin_Dashboard_Sales.aspx.cs" Inherits="RBERP.Admin_Dashboard_Sales" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>

<script type="text/javascript">
    var popupWindow = null;

    function ShowForm(Emp_Code, fdate, tdate, type) {
        var left = 300,
            top = 300,
            popupWindow = window.open("View_Dashboard_Detail.aspx?Emp_Code=" + Emp_Code + "&fdate=" + fdate + "&tdate=" + tdate + "&type=" + type, "UserListDialog", "width=900, height=750, resizable, top=" + top + ", left=" + left);
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

            <table align="center" class="auto-style1">
                <tr>
                    <td align="Center" colspan="5"><strong>Reports</strong></td>
                </tr>
                <tr>
                    <td align="right">FromDate</td>
                    <td align="left">
                        <asp:TextBox ID="txtfromdt" runat="server" Width="110px"></asp:TextBox>
                        <asp:CalendarExtender ID="CalendarExtender1" runat="server" TargetControlID="txtfromdt"></asp:CalendarExtender>
                    </td>
                    <td align="right">Todate</td>
                    <td align="left">
                        <asp:TextBox ID="txttodt" runat="server" Width="110px"></asp:TextBox>
                        <asp:CalendarExtender ID="CalendarExtender2" runat="server" TargetControlID="txttodt"></asp:CalendarExtender>
                    </td>
                    <td align="left">
                        <asp:Button ID="btngenerate" runat="server" OnClick="btngenerate_Click" Text="Generate Report" />
                    </td>
                </tr>
                <tr>
                    <td align="center" colspan="5">&nbsp;</td>
                </tr>
                <tr>
                    <td align="center" colspan="5">
                        <asp:Panel ID="pnlBH" runat="server" GroupingText="BH Wise Report" HorizontalAlign="Left">
                            <asp:GridView ID="grdSales" runat="server" AutoGenerateColumns="False" CellPadding="4" ForeColor="#333333" Font-Names="Verdana" Font-Size="10pt" OnRowDataBound="grdSales_RowDataBound" ShowFooter="True">
                                <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
                                <Columns>
                                    <asp:TemplateField HeaderText="Manager" ControlStyle-CssClass="lnkview">
                                        <ItemTemplate>
                                            <asp:HyperLink ID="hpname" runat="server" Text='<%# Eval("name") %>'></asp:HyperLink>
                                        </ItemTemplate>
                                        <FooterStyle HorizontalAlign="Center" />
                                        <ItemStyle HorizontalAlign="left" Font-Underline="True"
                                             />
                                    </asp:TemplateField>

                                    <%--                                    <asp:BoundField DataField="tot_no_of_files" HeaderText="Total number of files">
                                        <ItemStyle HorizontalAlign="Center" />
                                        <FooterStyle HorizontalAlign="Center" />
                                    </asp:BoundField>--%>

                                    <asp:TemplateField HeaderText="Total number of files">
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
                                        <ItemStyle HorizontalAlign="Right" />
                                        <FooterStyle HorizontalAlign="Right" />
                                    </asp:BoundField>
                                    <asp:BoundField DataField="SanctionAmt" HeaderText="Sanction Amount">
                                        <ItemStyle HorizontalAlign="Right" />
                                        <FooterStyle HorizontalAlign="Right" />
                                    </asp:BoundField>
                                    <asp:BoundField DataField="DisurbsAmt" HeaderText="Total Loan Amt Disbursed">
                                        <ItemStyle HorizontalAlign="Right" />
                                        <FooterStyle HorizontalAlign="Right" />
                                    </asp:BoundField>

                                    <asp:BoundField DataField="emp_code" HeaderText="Emp Code">
                                        <HeaderStyle CssClass="hide" />
                                        <ItemStyle HorizontalAlign="Center" CssClass="hide" />
                                        <FooterStyle HorizontalAlign="Center" CssClass="hide" />
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
                        </asp:Panel>
                    </td>
                </tr>
                <tr>
                    <td align="center" colspan="5">
                        <asp:Panel ID="pnlProduct" runat="server" GroupingText="Product Wise Report" HorizontalAlign="Left">
                            <asp:GridView ID="grdproduct" runat="server" AutoGenerateColumns="False" CellPadding="4" ForeColor="#333333" Font-Names="Verdana" Font-Size="10pt" OnRowDataBound="grdproduct_RowDataBound" ShowFooter="True">
                                <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
                                <Columns>
                                    <%--   <asp:TemplateField HeaderText="Product Type">
                                        <ItemTemplate>
                                            <asp:HyperLink ID="hppname" runat="server" Text='<%# Eval("product_name") %>'></asp:HyperLink>
                                        </ItemTemplate>
                                        <FooterStyle HorizontalAlign="Center" />
                                        <ItemStyle HorizontalAlign="left" Font-Underline="True"
                                            CssClass="lnkview" />
                                    </asp:TemplateField>--%>
                                    <asp:BoundField DataField="product_name" HeaderText="Product Type">
                                        <ItemStyle HorizontalAlign="Left" />
                                    </asp:BoundField>
                                    <asp:BoundField DataField="no_of_files" HeaderText="Total number of files">
                                        <ItemStyle HorizontalAlign="Center" />
                                        <FooterStyle HorizontalAlign="Center" />
                                    </asp:BoundField>
                                       <%--<asp:BoundField DataField="Prev_Login_Amt" HeaderText="Prev.Login Amount">
                                        <ItemStyle HorizontalAlign="Right" />
                                        <FooterStyle HorizontalAlign="Right" />
                                    </asp:BoundField>--%>
                                    <asp:BoundField DataField="loginamt" HeaderText="Login Amount">
                                        <ItemStyle HorizontalAlign="Right" />
                                        <FooterStyle HorizontalAlign="Right" />
                                    </asp:BoundField>
                                    <asp:BoundField DataField="SanctionAmt" HeaderText="Sanction Amount">
                                        <ItemStyle HorizontalAlign="Right" />
                                        <FooterStyle HorizontalAlign="Right" />
                                    </asp:BoundField>
                                    <asp:BoundField DataField="DisurbsAmt" HeaderText="Total Loan Amt Disbursed">
                                        <ItemStyle HorizontalAlign="Right" />
                                        <FooterStyle HorizontalAlign="Right" />
                                    </asp:BoundField>
                                    <asp:BoundField DataField="product_id" HeaderText="Product Id">
                                        <HeaderStyle CssClass="hide" />
                                        <ItemStyle HorizontalAlign="Center" CssClass="hide" />
                                        <FooterStyle HorizontalAlign="Center" CssClass="hide" />
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
                        </asp:Panel>
                    </td>
                </tr>
                <tr>
                    <td align="center" colspan="5">
                        <asp:Panel ID="pnlloc" runat="server" GroupingText="Location Wise Report" HorizontalAlign="Left">
                            <asp:GridView ID="grdlocation" runat="server" AutoGenerateColumns="False" CellPadding="4" ForeColor="#333333" Font-Names="Verdana" Font-Size="10pt"  ShowFooter="True" OnRowDataBound="grdlocation_RowDataBound">
                                <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
                                <Columns>
                                    <asp:BoundField DataField="Loaction" HeaderText="Location">
                                        <ItemStyle HorizontalAlign="Left" />
                                    </asp:BoundField>
                                    <asp:BoundField DataField="no_of_files" HeaderText="Total number of files">
                                        <ItemStyle HorizontalAlign="Center" />
                                        <FooterStyle HorizontalAlign="Center" />
                                    </asp:BoundField>
                                    <asp:BoundField DataField="loginamt" HeaderText="Login Amount">
                                        <ItemStyle HorizontalAlign="Right" />
                                        <FooterStyle HorizontalAlign="Right" />
                                    </asp:BoundField>
                                    <asp:BoundField DataField="SanctionAmt" HeaderText="Sanction Amount">
                                        <ItemStyle HorizontalAlign="Right" />
                                        <FooterStyle HorizontalAlign="Right" />
                                    </asp:BoundField>
                                    <asp:BoundField DataField="DisurbsAmt" HeaderText="Total Loan Amt Disbursed">
                                        <ItemStyle HorizontalAlign="Right" />
                                        <FooterStyle HorizontalAlign="Right" />
                                    </asp:BoundField>
                                    <asp:BoundField DataField="city_id" HeaderText="Id">
                                        <HeaderStyle CssClass="hide" />
                                        <ItemStyle HorizontalAlign="Center" CssClass="hide" />
                                        <FooterStyle HorizontalAlign="Center" CssClass="hide" />
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
                        </asp:Panel>
                    </td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>
                        <asp:ToolkitScriptManager ID="ToolkitScriptManager1" runat="server">
                        </asp:ToolkitScriptManager>
                    </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
            </table>

        </div>
    </form>
</body>
</html>
