<%@ Page Language="C#" AutoEventWireup="true" Inherits="Group_Master" CodeBehind="Group_Master.aspx.cs" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script language="javascript" type="text/javascript" src="Code/BackOfficeModuleCode.js?0"></script>
    <style type="text/css">
           .btn{
         
            font-family: Raleway, Arial, sans-serif;
            font-size: 16px;
            font-weight: 400;
      
            transition: 0.5s;
	        text-decoration:none;
            background-color:blue;

            border: none;
            color: white;
            padding: 10px 20px;
            cursor:pointer;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            border-bottom-left-radius:15px;
            border-bottom-right-radius:15px;
             border-top-left-radius:15px;
            border-top-right-radius:15px;

        }
        .btn:hover {background-color:#ff0000;}
        .btn-primary {
            color: rgb(255, 255, 255);
            background-color: rgb(237, 28, 36);

        }

.txt
{
   font-family: "Helvetica Neue", "Lucida Grande", "Segoe UI", Arial, Helvetica, Verdana, sans-serif;
    font-size:medium;
    text-decoration:none;
}

        .style2
        {
            width: 100%;
        }

        .style1
        {
            width: 163px;
        }
    
        .style3
        {
            width: 163px;
            height: 26px;
        }
        .style4
        {
            height: 26px;
        }
    </style>
    <link href="css/style.css" rel="stylesheet" type="text/css" />
    <link href="Styles/Site.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
    <table class="txt" align="center">
        <tr>
            <td align="center" class="style2" colspan="2">
                <asp:Label ID="Label1" runat="server" style="font-weight: 700; color: #0099FF" 
                    Text="Group Master"></asp:Label>
            </td>
        </tr>
        <tr>
            <td align="center" class="style2" colspan="2">
                <hr />&nbsp;</td>
        </tr>
        <tr>
            <td align="right" class="style1">
                Group Id:</td>
            <td>
                <asp:Label ID="id" runat="server" ForeColor="Red"></asp:Label>
            </td>
        </tr>
        <tr>
            <td align="right" class="style1">
                Group Name:</td>
            <td>
                <asp:TextBox ID="txtGroupname" runat="server" Width="200px"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
                    ControlToValidate="txtGroupname" ErrorMessage="Please Enter Group Name" 
                    ForeColor="Red" SetFocusOnError="True">*</asp:RequiredFieldValidator>
            </td>
        </tr>
        <tr>
            <td align="right" class="style3">
                Is Admin:</td>
            <td class="style4">
                <asp:DropDownList ID="ddlisAdmin" runat="server">
                    <asp:ListItem Value="0">-- Select One --</asp:ListItem>
                    <asp:ListItem>Yes</asp:ListItem>
                    <asp:ListItem>No</asp:ListItem>
                </asp:DropDownList>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" 
                    ControlToValidate="ddlisAdmin" ErrorMessage="Please Select Admin" 
                    ForeColor="Red" SetFocusOnError="True" InitialValue="0">*</asp:RequiredFieldValidator>
            </td>
        </tr>
        <tr>
            <td align="right" class="style1">
                Is Active:</td>
            <td>
                            <asp:CheckBox ID="chkActive" runat="server" Checked="True" 
                                Text="Active" />
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
                
                    </td>
            <td>
                    &nbsp;<asp:Button ID="btnsubmit" runat="server" OnClick="btnsubmit_Click" Text="Submit" />
                    <asp:Button ID="btnreset" runat="server" OnClick="btnreset_Click" Text="Reset" />
            </td>
        </tr>
        <tr>
            <td align="center" class="style3" colspan="2">
                <asp:Panel ID="Panel1" runat="server">
                    <asp:ValidationSummary ID="ValidationSummary1" runat="server" 
                        ShowMessageBox="True" ShowSummary="False" />
                </asp:Panel>
            </td>
        </tr>
        </table>
   
    </div>
    <table class="style2">
        <tr>
            <td align="center">
                <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" 
                    CellPadding="4" 
                    ForeColor="#333333" 
                    onselectedindexchanged="GridView1_SelectedIndexChanged" CssClass="tbl">
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
    </table>
    </form>
</body>
</html>
