<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="VerticalStatusLeadDetails.aspx.cs" Inherits="RBERP.VerticalStatusLeadDetails" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <table width="100%">
                <tr>
                    <td align="center">
                        <asp:Label ID="Label1" runat="server" Text="Lead Details"
                            Style="color: #0099FF; font-size: large; font-weight: 700;"></asp:Label>

                    </td>

                </tr>
                <tr>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td align="center">

                        <asp:GridView ID="GridView1" runat="server"
                            AutoGenerateColumns="False" CellPadding="4" ForeColor="#333333" PageSize="5"
                            CssClass="tbl" >
                            <AlternatingRowStyle BackColor="White" />
                            <Columns>

                                <asp:TemplateField HeaderText="Sr No">
                                    <ItemTemplate>
                                        <%#Container.DataItemIndex+1 %>
                                    </ItemTemplate>
                                </asp:TemplateField>
                                <asp:BoundField HeaderText="Lead Id" DataField="Lead_id"
                                    SortExpression="Lead_id" />
                                <asp:BoundField HeaderText="Customer Name" DataField="CName"
                                    SortExpression="CName" />
                                <asp:BoundField HeaderText="Mobile No" DataField="mobile"
                                    SortExpression="mobile" />
                                 <asp:BoundField HeaderText="Profession" DataField="profession"
                                    SortExpression="profession" /> 
                                <asp:BoundField HeaderText="City" DataField="City_Name"
                                    SortExpression="City_Name" />
                                <asp:BoundField HeaderText="State" DataField="state_name"
                                    SortExpression="state_name" />
                                   <asp:BoundField HeaderText="Lead Status" DataField="Lead_Status"
                                    SortExpression="Lead_Status" />
                                   <asp:BoundField HeaderText="Vertical Name" DataField="Vertical_Name"
                                    SortExpression="Vertical_Name" />
                            </Columns>
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
                    <td align="center">

                        &nbsp;</td>
                </tr>
            </table>
        </div>
    </form>
</body>
</html>
