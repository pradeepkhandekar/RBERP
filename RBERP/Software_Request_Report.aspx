<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Software_Request_Report.aspx.cs" Inherits="RBERP.Software_Request_Report" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">


        .style1
        {
            width: 222px;
        }
        .style2
        {
            height: 20px;
        }
        .auto-style1 {
            height: 39px;
        }
        .auto-style2 {
            height: 23px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <table class="tbl" align="center" dir="ltr" aria-setsize="500">
            <tr>
                <td align="center" colspan="4">
                    <asp:Label ID="Label1" runat="server" style="color: #0099FF; font-weight: 700; font-size: x-large;" 
                        Text="Request Report"></asp:Label>
                </td>
            </tr>
            <tr>
                <td align="center" colspan="4" class="auto-style1">
                    <hr />&nbsp;</td>
            </tr>
            <tr>
                <td class="style2" align="center" colspan="4">
                    &nbsp;</td>
            </tr>
            <tr>
                <td align="center" class="auto-style2" colspan="4">

                    <asp:GridView ID="GridView1" runat="server"
                        AutoGenerateColumns="False" CellPadding="4" ForeColor="#333333" PageSize="5"
                        CssClass="tbl" Font-Names="Verdana" Font-Size="8.5pt">
                        <AlternatingRowStyle BackColor="White" />
                        <Columns>

                            <asp:TemplateField HeaderText="Sr No">
                                <ItemTemplate>
                                    <%#Container.DataItemIndex+1 %>
                                </ItemTemplate>
                                <ItemStyle HorizontalAlign="Center" />
                            </asp:TemplateField>
                            <asp:BoundField HeaderText="Request ID" DataField="Request_ID"
                                SortExpression="Request_ID" >
                            <ItemStyle HorizontalAlign="Center" />
                            </asp:BoundField>
                            <asp:BoundField HeaderText="Requested By" DataField="Requested_By"
                                SortExpression="Requested_By" />
                              <asp:BoundField HeaderText="Request Date" DataField="Request_Date"
                                SortExpression="Request_Date" />
                            <asp:BoundField HeaderText="Request Type" DataField="RequestType"
                                SortExpression="RequestType" />
                            <asp:BoundField HeaderText="Reporting Authority" DataField="ReportAuthId"
                                SortExpression="ReportAuthId" />
                            <asp:BoundField HeaderText="Request Title" DataField="RequestTitle"
                                SortExpression="RequestTitle" />
                            <asp:BoundField HeaderText="Description" DataField="Short_Description"
                                SortExpression="Short_Description" />                          
                          
                         <asp:BoundField HeaderText="Reason For Change" DataField="Detail_Description"
                                SortExpression="Detail_Description" />          
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
                <td class="style22">
                    &nbsp;</td>
                <td class="style1">
                    <asp:Label ID="lblmsg" runat="server" ForeColor="Red"></asp:Label>
                </td>
                <td class="style3">
                    &nbsp;</td>
                <td class="style2">
                    &nbsp;</td>
            </tr>

            </table>
    
    </div>
    </form>
</body>
</html>
