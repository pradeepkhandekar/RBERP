<%@ Page Language="C#" AutoEventWireup="true" Inherits="Designation_Master" CodeBehind="Designation_Master.aspx.cs" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script language="javascript" type="text/javascript" src="Code/BackOfficeModuleCode.js?0"></script>
    <style type="text/css">

.txt
{
   font-family: "Helvetica Neue", "Lucida Grande", "Segoe UI", Arial, Helvetica, Verdana, sans-serif;
    font-size:medium;
    text-decoration:none;
}

a:link, a:visited
{
    color: #034af3;
}

        .style1
        {
            width: 163px;
        }
    </style>
    <link href="Styles/Site.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <form id="form2" runat="server">
    <div>
    <table class="tbl" align="center">
        <tr>
            <td align="center" class="style2" colspan="2">
                <asp:Label ID="Label1" runat="server" style="font-weight: 700; color: #0099FF" 
                    Text="Designation Master"></asp:Label>
            </td>
        </tr>
        <tr>
            <td align="center" class="style2" colspan="2">
                <hr />&nbsp;</td>
        </tr>
        <tr>
            <td align="right" class="style1">
                <asp:Literal ID="Literal1" runat="server" Text="Desg Id :"></asp:Literal>
            </td>
            <td>
                <asp:Label ID="lblid" runat="server" ForeColor="Red"></asp:Label>
            </td>
        </tr>
        <tr>
            <td align="right" class="style1">
                Designation&nbsp; :</td>
            <td>
                <asp:TextBox ID="txtDesignation" runat="server" Width="200px"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
                    ControlToValidate="txtDesignation" ErrorMessage="Please Enter  Designation " 
                    ForeColor="Red" SetFocusOnError="True">*</asp:RequiredFieldValidator>
            </td>
        </tr>
        <tr>
            <td align="right" class="style1">
                &nbsp;</td>
            <td>
                <asp:Label ID="lblmsg" runat="server" ForeColor="Red"></asp:Label>
            </td>
        </tr>
        <tr>
            <td align="right" class="style1">
                &nbsp;</td>
            <td>
                   
                    <asp:Button ID="Button2" runat="server" OnClick="Button2_Click" Text="Submit" />
                    &nbsp;&nbsp;
                    <asp:Button ID="Button1" runat="server" Text="Reset" OnClick="Button1_Click1" />
                    
            </td>
        </tr>
        <tr>
            <td align="right" class="style1">
                &nbsp;</td>
            <td>
                &nbsp;</td>
                
        </tr>
        <tr>
            <td align="center" class="style3" colspan="2">
                <asp:Panel ID="Panel1" runat="server">
                    <asp:GridView ID="GridView1" runat="server" 
    CellPadding="4" ForeColor="#333333" AutoGenerateColumns="False" 
                        onselectedindexchanged="GridView1_SelectedIndexChanged">
                        <AlternatingRowStyle BackColor="White" />
                        <Columns>
                            <asp:CommandField ShowSelectButton="True" />
                            <asp:TemplateField HeaderText="Sr No">
                            <ItemTemplate>
                            <%#Container.DataItemIndex+1 %>
                            </ItemTemplate>
                            </asp:TemplateField>
                            <asp:BoundField HeaderText="Desg ID" DataField="Designation_ID" 
                                SortExpression="Designation_ID" />
                            <asp:BoundField HeaderText="Designation" DataField="Designation" 
                                SortExpression="Designation" />
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
                    <asp:ValidationSummary ID="ValidationSummary1" runat="server" 
                        ShowMessageBox="True" ShowSummary="False" />
                </asp:Panel>
            </td>
        </tr>
        <tr>
            <td class="style1">
                &nbsp;</td>
            <td>
                &nbsp;</td>
        </tr>
    </table>
   
    </div>
   
    </form>
    
</body>
</html>
