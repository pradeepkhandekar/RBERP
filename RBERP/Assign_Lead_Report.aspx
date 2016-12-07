<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Assign_Lead_Report.aspx.cs" Inherits="RBERP.Assign_Lead_Report" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        .style1 {
            width: 100%;
        }
         .lnkview {
        cursor: pointer;
    }
.hide {
    display: none;
}
    </style>


   <script type="text/javascript">
    var popupWindow = null;

    function ShowForm(Emp_Code, fdate, tdate,type,lead_status_id) {
        var left = 300,
            top = 300,
            popupWindow = window.open("View_Assign_Lead_Detail.aspx?Emp_Code=" + Emp_Code + "&fdate=" + fdate + "&tdate=" + tdate + "&type=" + type + "&lead_status_id=" + lead_status_id, "UserListDialog", "width=900, height=750, resizable, top=" + top + ", left=" + left);
        // popupWindow.focus();
        return false;
    }
    function parent_disable() {
        if (popupWindow && !popupWindow.closed)
            popupWindow.focus();
    }
</script>
    
</head>
<body>
    <form id="form1" runat="server">
        <div>

            <table class="tbl" width="100%">
                <tr>
                    <td align="center" class="auto-style1" colspan="2">
                        <asp:Label ID="Label1" runat="server" Text="Lead Report"
                            Style="color: #0099FF; font-size: large; font-weight: 700;"></asp:Label>
                        <hr />
                    </td>
                </tr>
                <tr>
                    <td align="center" class="auto-style1" colspan="2">
                        <asp:ToolkitScriptManager ID="ToolkitScriptManager1" runat="server">
                        </asp:ToolkitScriptManager>
                        <table width="600px">
                            <tr>
                                <td align="right">From Date</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtfromdt" runat="server" Width="110px"></asp:TextBox>
                                    <asp:CalendarExtender ID="CalendarExtender1" runat="server" TargetControlID="txtfromdt"></asp:CalendarExtender>
                                </td>
                                <td align="right">To Date</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txttodt" runat="server" Width="110px"></asp:TextBox>
                                    <asp:CalendarExtender ID="CalendarExtender2" runat="server" TargetControlID="txttodt"></asp:CalendarExtender>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" colspan="6">&nbsp;</td>
                            </tr>
                            <tr>
                                <td align="center" colspan="6">
                                    <asp:ValidationSummary ID="ValidationSummary1" runat="server"
                                        ShowMessageBox="True" ShowSummary="False" Width="200px" ForeColor="Red" />
                                </td>
                            </tr>
                            <tr>
                                <td align="center" colspan="6">
                                    <asp:Button ID="btnShow" runat="server" Text="Show" OnClick="btnShow_Click" />
                                    &nbsp;<asp:Button ID="btnReset" runat="server" CausesValidation="False" Text="Reset" OnClick="btnReset_Click" />
                                </td>
                            </tr>

                        </table>
                    </td>
                </tr>
                        <tr>
                            <td align="center">

                               <%-- <asp:Panel ID="Panel2" runat="server" GroupingText="Lead Detail" Height="500px" ScrollBars="Both">--%>
                                    <asp:GridView ID="GridView1" runat="server"
                                    AutoGenerateColumns="False" CellPadding="4" ForeColor="#333333"
                                    CssClass="tbl" DataKeyNames="Emp_Code" PageSize="5" OnRowDataBound="GridView1_RowDataBound" ShowFooter="True" Font-Names="Verdana" Font-Size="10pt">
                                        <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
                                        <Columns>
                                            <asp:TemplateField HeaderText="Sr No">
                                                <ItemTemplate>
                                                    <%#Container.DataItemIndex+1 %>
                                                </ItemTemplate>
                                            </asp:TemplateField>
                                            <asp:BoundField HeaderText="Emp Code" DataField="Emp_Code"
                                            SortExpression="Emp_Code" />
                                            <asp:BoundField HeaderText="Employee Name" DataField="Emp_Name"
                                            SortExpression="Emp_Name" >
                                            <ItemStyle HorizontalAlign="Left" />
                                            </asp:BoundField>
                                            <asp:TemplateField HeaderText="Lead Count" ControlStyle-CssClass="lnkview">
                                                <ItemTemplate>
                                                    <asp:HyperLink ID="hpLeadCnt" runat="server" Text='<%# Eval("Lead_Count") %>' Font-Underline="True"></asp:HyperLink>
                                                </ItemTemplate>
                                                <ControlStyle CssClass="lnkview" />
                                                <FooterStyle HorizontalAlign="Center" />
                                                <ItemStyle HorizontalAlign="Center" />
                                            </asp:TemplateField>
                                            <asp:TemplateField HeaderText="FollowUp Count" ControlStyle-CssClass="lnkview">
                                                <ItemTemplate>
                                                    <asp:HyperLink ID="hpCalledCnt" runat="server" Text='<%# Eval("Called_Count") %>' Font-Underline="True"></asp:HyperLink>
                                                </ItemTemplate>
                                                <ControlStyle CssClass="lnkview" />
                                                <FooterStyle HorizontalAlign="Center" />
                                                <ItemStyle HorizontalAlign="Center" />
                                            </asp:TemplateField>
                                            <asp:TemplateField HeaderText="Pendig Call Count" ControlStyle-CssClass="lnkview">
                                                <ItemTemplate>
                                                    <asp:HyperLink ID="hpUncalledCnt" runat="server" Text='<%# Eval("uncalled_Count") %>' Font-Underline="True"></asp:HyperLink>
                                                </ItemTemplate>
                                                <ControlStyle CssClass="lnkview" />
                                                <FooterStyle HorizontalAlign="Center" />
                                                <ItemStyle HorizontalAlign="Center" />
                                            </asp:TemplateField>

                                             <asp:TemplateField HeaderText="Demo Given" ControlStyle-CssClass="lnkview">
                                                <ItemTemplate>
                                                    <asp:HyperLink ID="hpdemoCnt" runat="server" Text='<%# Eval("Demo_Given") %>' Font-Underline="True"></asp:HyperLink>
                                                </ItemTemplate>
                                                <ControlStyle CssClass="lnkview" />
                                                <FooterStyle HorizontalAlign="Center" />
                                                <ItemStyle HorizontalAlign="Center" />
                                            </asp:TemplateField>
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
<%--                                </asp:Panel>--%>

                            </td>
                            <td align="center" valign="top">

                               <%-- <asp:Panel ID="Panel1" runat="server" GroupingText="Lead Detail Status Wise" Height="500px" ScrollBars="Both">--%>
                                    <asp:GridView ID="GridView2" runat="server"
                                    AutoGenerateColumns="False" CellPadding="4" ForeColor="#333333"
                                    CssClass="tbl" DataKeyNames="Lead_Status_Id" PageSize="5" ShowFooter="True" Font-Names="Verdana" Font-Size="10pt" OnRowDataBound="GridView2_RowDataBound">
                                        <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
                                        <Columns>
                                            <asp:TemplateField HeaderText="Sr No">
                                                <ItemTemplate>
                                                    <%#Container.DataItemIndex+1 %>
                                                </ItemTemplate>
                                            </asp:TemplateField>
                                            <asp:BoundField HeaderText="Lead Status" DataField="lead_status"
                                            SortExpression="lead_status" >
                                            <ItemStyle HorizontalAlign="Left" />
                                            </asp:BoundField>
                                            <asp:TemplateField HeaderText="Lead Count" ControlStyle-CssClass="lnkview">
                                                <ItemTemplate>
                                                    <asp:HyperLink ID="hpLeadCnt1" runat="server" Text='<%# Eval("lead_cnt") %>' Font-Underline="True"></asp:HyperLink>
                                                </ItemTemplate>
                                                <ControlStyle CssClass="lnkview" />
                                                <FooterStyle HorizontalAlign="Center" />
                                                <ItemStyle HorizontalAlign="Center" />
                                            </asp:TemplateField>
                                            <asp:BoundField DataField="Lead_Status_Id" HeaderText="Lead_Status_Id" ItemStyle-CssClass="hide" HeaderStyle-CssClass="hide">
                                            <FooterStyle HorizontalAlign="Center" CssClass="hide" />
                                            <HeaderStyle CssClass="hide" />
                                            <ItemStyle HorizontalAlign="Center" />
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
                               <%-- </asp:Panel>--%>

                            </td>
                        </tr>
                    </td>
                </tr>

                        <tr>
                            <td align="center">

                                &nbsp;</td>
                            <td align="center">

                                &nbsp;</td>
                        </tr>
                    
            </table>

        </div>
    </form>
</body>
</html>
