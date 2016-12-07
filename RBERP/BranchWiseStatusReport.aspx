<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="BranchWiseStatusReport.aspx.cs" Inherits="RBERP.BranchWiseStatusReport" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <table class="tbl" width="100%">
                <tr>
                    <td align="center" class="auto-style1">
                        <asp:Label ID="Label1" runat="server" Text="Vertical Wise Status Report"
                            Style="color: #0099FF; font-size: large; font-weight: 700;"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td align="center" class="auto-style1">
                        <hr />
                    </td>
                </tr>
                <tr>
                    <td align="center" class="auto-style1">&nbsp;</td>
                </tr>
                <tr>
                    <td align="center" class="auto-style1">
                         <asp:GridView ID="GridView1" runat="server" CellPadding="4" ForeColor="#333333" PageSize="5"
                                    CssClass="tbl" OnRowDataBound="GridView1_RowDataBound">
                                    <AlternatingRowStyle BackColor="White" />
                                    <EditRowStyle BackColor="#2461BF" />
                                    <FooterStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
                                    <HeaderStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
                                    <PagerStyle BackColor="#2461BF" ForeColor="White" HorizontalAlign="Center" />
                                    <RowStyle BackColor="#EFF3FB" />
                                    <SelectedRowStyle BackColor="#D1DDF1" Font-Bold="True" ForeColor="#333333" />
                                    <SortedAscendingCellStyle BackColor="#F5F7FB" />
                                    <SortedAscendingHeaderStyle BackColor="#6D95E1" />
                                    <SortedDescendingCellStyle BackColor="#E9EBEF" />
                                    <SortedDescendingHeaderStyle BackColor="#4870BE" />
                                </asp:GridView>

                    </td>
                </tr>
                <tr>
                    <td align="center" class="auto-style1">&nbsp;</td>
                </tr>
                <tr>
                    <td align="center" class="auto-style1">&nbsp;</td>
                </tr>
                <tr>
                    <td align="center" class="auto-style1">&nbsp;</td>
                </tr>
                <tr>
                    <td align="center" class="auto-style1">&nbsp;</td>
                </tr>
            </table>
        </div>
    </form>
</body>
</html>
