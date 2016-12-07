<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="View_Playout_Detail.aspx.cs" Inherits="RBERP.View_Playout_Detail" %>

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
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <table style="width: 100%; ">
            <tr style="font-weight: bold; color: #000000">
                <td align="center" 
                    style="font-size: 11pt; font-family: Verdana; font-weight: bold" class="auto-style1">
                    View 
                    PayOut Detail</td>
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
                                        CellPadding="4" ForeColor="#333333" Width="850px" Font-Names="Verdana" OnRowDataBound="grdDetails_RowDataBound">
                                        <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
                                        <Columns>
                                            <asp:TemplateField HeaderText="Sr.no">
                                                <EditItemTemplate>
                                                    <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
                                                </EditItemTemplate>
                                                <ItemTemplate>
                                                <%# Container.DataItemIndex +1 %>
                                                </ItemTemplate>
                                                <ItemStyle HorizontalAlign="Center" />
                                            </asp:TemplateField>
                                          
                                            <asp:BoundField DataField="payoutfrom" HeaderText="Payout From">
                                            <FooterStyle HorizontalAlign="Center" />
                                            <ItemStyle HorizontalAlign="Center" />
                                            </asp:BoundField>
                                            <asp:BoundField DataField="payoutto" HeaderText="Payout To">
                                            <FooterStyle HorizontalAlign="Center" />
                                            <ItemStyle HorizontalAlign="center" />
                                            </asp:BoundField>
                                            <asp:BoundField DataField="Payoutper" HeaderText="Payout Percentage" >
                                            <FooterStyle HorizontalAlign="Center" />
                                            <ItemStyle HorizontalAlign="Center" />
                                            </asp:BoundField>
                                            <asp:BoundField DataField="Processing_Per" HeaderText="Processing Percentage" 
                                                >
                                            <FooterStyle HorizontalAlign="Center" />
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
