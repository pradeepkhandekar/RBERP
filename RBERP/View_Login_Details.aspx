<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="View_Login_Details.aspx.cs" Inherits="RBERP.View_Login_Details" %>

<!DOCTYPE html>


<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        .auto-style1 {
            height: 22px;
        }
        .auto-style2 {
            height: 18px;
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
                    Lead Detail</td>
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
                                        CellPadding="4" ForeColor="#333333" Width="850px" Font-Names="Verdana"  ShowFooter="True" OnRowDataBound="grdDetails_RowDataBound">
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
                                          
                                            <asp:BoundField DataField="name" HeaderText="Customer Name">
                                            <FooterStyle HorizontalAlign="Center" />
                                            <ItemStyle HorizontalAlign="Left" />
                                            </asp:BoundField>
                                            <asp:BoundField DataField="mobile" HeaderText="Mobile No">
                                            <FooterStyle HorizontalAlign="Center" />
                                            <ItemStyle HorizontalAlign="center" />
                                            </asp:BoundField>
                                            <asp:BoundField DataField="product_name" HeaderText="Product Name" >
                                            <FooterStyle HorizontalAlign="Center" />
                                            <ItemStyle HorizontalAlign="Left" />
                                            </asp:BoundField>
                                            <asp:BoundField DataField="bank_name" HeaderText="Bank Name" 
                                                >
                                            <FooterStyle HorizontalAlign="Center" />
                                            <ItemStyle HorizontalAlign="Left" />  
                                            </asp:BoundField>
                                             <asp:BoundField DataField="lead_status" HeaderText="Lead Status" 
                                                >
                                            <FooterStyle HorizontalAlign="left" />
                                            <ItemStyle HorizontalAlign="left" />  
                                            </asp:BoundField>
                                             <asp:BoundField DataField="login_amt" HeaderText="Login Amt" 
                                                >
                                            <FooterStyle HorizontalAlign="right" />
                                            <ItemStyle HorizontalAlign="right" />  
                                            </asp:BoundField>
                                              <asp:BoundField DataField="sanction_amt" HeaderText="Sanction Amt" 
                                                >
                                            <FooterStyle HorizontalAlign="right" />
                                            <ItemStyle HorizontalAlign="right" />  
                                            </asp:BoundField>
                                              <asp:BoundField DataField="disbursed_amt" HeaderText="Disbursed Amt" 
                                                >
                                            <FooterStyle HorizontalAlign="right" />
                                            <ItemStyle HorizontalAlign="right" />  
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
