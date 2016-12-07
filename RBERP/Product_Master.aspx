<%@ Page Language="C#" AutoEventWireup="true" Inherits="Product_Master" CodeBehind="Product_Master.aspx.cs" %>

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
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <table class="auto-style1" style="font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 10pt">
            <tr>
                <td align="center"colspan="3" class="auto-style2"><strong>Product Master</strong></td>
            </tr>
            <tr>
                <td class="auto-style2"></td>
                <td class="auto-style2">&nbsp;</td>
                <td class="auto-style2"></td>
            </tr>
            <tr>
                <td  align="right">Product Name</td>
                <td>:</td>
                <td>
                    <asp:TextBox ID="txtproductname" runat="server" Width="240px" TabIndex="1"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td align="right">Is Active</td>
                <td>:</td>
                <td>
                    <asp:CheckBox ID="chkactive" runat="server" />
                </td>
            </tr>
            <tr>
                <td align="center"colspan="3" class="auto-style3">
                &nbsp;<asp:Button ID="btnsubmit0" runat="server" OnClick="btnsubmit_Click" Text="Submit" />
                    <asp:Button ID="btnreset0" runat="server" OnClick="btnreset_Click" Text="Reset" />
                </td>
            </tr>
            <tr>
                <td align="center"colspan="3" class="auto-style3">
                    <asp:GridView ID="dgproductlist" runat="server" BackColor="White" BorderColor="#3366CC" BorderStyle="None" BorderWidth="1px" CellPadding="4">
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
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
        </table>
    
    </div>
    </form>
</body>
</html>
