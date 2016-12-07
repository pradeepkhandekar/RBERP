<%@ Page Language="C#" AutoEventWireup="true" Inherits="RBERP.User_List" Codebehind="User_List.aspx.cs" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        .auto-style1 {
            width: 900px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <table align="center" class="auto-style1">
             <tr align="center">
                <td colspan="3" ><strong>User List</strong></td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td colspan="3" align="center">
                    <asp:GridView ID="dgemployeelist" runat="server" BackColor="White" BorderColor="#3366CC" 
                        BorderStyle="None" BorderWidth="1px" CellPadding="4" AutoGenerateColumns="False" 
                    AllowPaging="true" PagerSettings-Position="TopAndBottom" OnPageIndexChanging="dgemployeelist_PageIndexChanging" PageSize="50">
                        <Columns>
                           
                            <asp:BoundField DataField="userid" HeaderText="UserId">
                            <ItemStyle HorizontalAlign="Center" />
                            </asp:BoundField>
                            <asp:BoundField DataField="userName" HeaderText="User Name">
                            <ItemStyle HorizontalAlign="Left" />
                            </asp:BoundField>
                           
                            <asp:BoundField DataField="Email_id" HeaderText="Email">
                            <ItemStyle HorizontalAlign="Left" />
                            </asp:BoundField>
                            
                           
                            <asp:BoundField DataField="emp_code" HeaderText="Emp Code">
                            <ItemStyle HorizontalAlign="Left" />
                            </asp:BoundField>
                              <asp:BoundField DataField="mobile" HeaderText="Mobile No">
                            <ItemStyle HorizontalAlign="Center" />
                            </asp:BoundField>
                            
                            
                        </Columns>
                        <FooterStyle BackColor="#99CCCC" ForeColor="#003399" />
                        <HeaderStyle BackColor="#003399" Font-Bold="True" ForeColor="#CCCCFF" />
                        <PagerSettings Position="TopAndBottom" />
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
                <td colspan="3">&nbsp;</td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
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
