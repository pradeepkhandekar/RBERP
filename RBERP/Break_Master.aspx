<%@ Page Language="C#" AutoEventWireup="true" Inherits="Break_Master" CodeBehind="Break_Master.aspx.cs" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        .auto-style1 {
            width: 100%;
        }
        .auto-style2 {
            height: 20px;
        }
        .auto-style3 {
            height: 47px;
        }
        .auto-style4 {
            height: 26px;
        }
        .auto-style5 {
            height: 20px;
            width: 431px;
        }
        .auto-style6 {
            width: 431px;
        }
        .auto-style7 {
            height: 26px;
            width: 431px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <table class="auto-style1" style="font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 10pt">
            <tr>
                <td align="center"colspan="3" class="auto-style2"><strong>Break Master</strong></td>
            </tr>
            <tr>
                <td class="auto-style5"></td>
                <td class="auto-style2">&nbsp;</td>
                <td class="auto-style2"></td>
            </tr>
            <tr>
                <td  align="right" class="auto-style6">Break Type</td>
                <td>:</td>
                <td>
                    <asp:TextBox ID="txtbreakname" runat="server" Width="240px" TabIndex="1"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td  align="right" class="auto-style7">Time</td>
                <td class="auto-style4">:</td>
                <td class="auto-style4">
                    <asp:DropDownList ID="ddltime" runat="server">
                        <asp:ListItem Value="0">--Select Time--</asp:ListItem>
                        <asp:ListItem Value="1300">13:00</asp:ListItem>
                        <asp:ListItem Value="1600">16:00</asp:ListItem>
                    </asp:DropDownList>
                </td>
            </tr>
            <tr>
                <td align="right" class="auto-style6">Is Active</td>
                <td>:</td>
                <td>
                    <asp:CheckBox ID="chkactive" runat="server" />
                </td>
            </tr>
            <tr>
                <td align="center"colspan="3" class="auto-style3">
                &nbsp;<asp:Button ID="btnsubmit" runat="server" OnClick="btnsubmit_Click" Text="Submit" />
                    <asp:Button ID="btnreset0" runat="server" OnClick="btnreset_Click" Text="Reset" />
                </td>
            </tr>
            <tr>
                <td align="center"colspan="3" class="auto-style3">
                    <asp:GridView ID="dgbreaklist" runat="server" BackColor="White" BorderColor="#3366CC" BorderStyle="None" BorderWidth="1px" CellPadding="4" AutoGenerateColumns="False" Height="109px" Width="668px">
                        <Columns>
                            <asp:BoundField DataField="Break_Type" HeaderText="Break Type">
                            <ItemStyle HorizontalAlign="Center" />
                            </asp:BoundField>
                            <asp:BoundField DataField="Time" HeaderText="Time">
                            <ItemStyle HorizontalAlign="Center" />
                            </asp:BoundField>
                            <asp:BoundField DataField="Is_Active" HeaderText="Is Active">
                            <ItemStyle HorizontalAlign="Center" />
                            </asp:BoundField>
                            <asp:BoundField DataField="Created_On" HeaderText="Created On">
                            <ItemStyle HorizontalAlign="Center" />
                            </asp:BoundField>
                        </Columns>
                        <FooterStyle BackColor="#99CCCC" ForeColor="#003399" />
                        <HeaderStyle BackColor="#003399" Font-Bold="True" ForeColor="#CCCCFF" />
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
            <tr>
                <td class="auto-style6">&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
        </table>
    
    </div>
    </form>
</body>
</html>