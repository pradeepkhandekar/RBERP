<%@ Page Language="C#" AutoEventWireup="true" Inherits="City_Master" CodeBehind="City_Master.aspx.cs" %>

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
            height: 20px;
            width: 402px;
        }
        .auto-style5 {
            width: 402px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <table class="auto-style1" style="font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 10pt">
            <tr>
                <td align="center"colspan="3" class="auto-style2"><strong>City Master</strong></td>
            </tr>
            <tr>
                <td class="auto-style4"></td>
                <td class="auto-style2">&nbsp;</td>
                <td class="auto-style2"></td>
            </tr>
            <tr>
                <td  align="right" class="auto-style5">City Name</td>
                <td>:</td>
                <td>
                    <asp:TextBox ID="txtcityname" runat="server" Width="240px" TabIndex="1"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td  align="right" class="auto-style5">State</td>
                <td>:</td>
                <td>
                    <asp:DropDownList ID="ddlstate" runat="server" Width="250px">
                    </asp:DropDownList>
                </td>
            </tr>
            <tr>
                <td align="right" class="auto-style5">Is Active</td>
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
                    <asp:GridView ID="dgleadstatuslist" runat="server" BackColor="White" BorderColor="#3366CC" BorderStyle="None" BorderWidth="1px" CellPadding="4" AutoGenerateColumns="False" OnRowDataBound="dgleadstatuslist_RowDataBound">
                        <Columns>
                            <asp:BoundField HeaderText="Sr No">
                            <ItemStyle HorizontalAlign="Center" />
                            </asp:BoundField>
                            <asp:BoundField DataField="city_name" HeaderText="City Name">
                            <ItemStyle HorizontalAlign="Left" />
                            </asp:BoundField>
                            <asp:BoundField DataField="state_name" HeaderText="State Name">
                            <ItemStyle HorizontalAlign="Left" />
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
                <td class="auto-style5">&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
        </table>
    
    </div>
    </form>
</body>
</html>
