<%@ Page Language="C#" AutoEventWireup="True" Inherits="User_Master" CodeBehind="User_Master.aspx.cs" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script language="javascript" type="text/javascript" src="Code/BackOfficeModuleCode.js?0"></script>
   
    
    <style type="text/css">
        .style1
        {
            width: 222px;
        }
        .style2
        {
            height: 20px;
        }
    </style>
    
   
    
    <link href="Styles/Site.css" rel="stylesheet" type="text/css" />
    
   
    
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <table class="tbl" align="center" dir="ltr">
            <tr>
                <td align="center" colspan="4">
                    <asp:Label ID="Label1" runat="server" style="color: #0099FF; font-weight: 700; font-size: x-large;" 
                        Text="User Master"></asp:Label>
                </td>
            </tr>
            <tr>
                <td align="center" colspan="4">
                    <hr />&nbsp;</td>
            </tr>
            <tr>
                <td align="right" class="style22">
                    &nbsp;</td>
                <td class="style1">
                    <br />
                </td>
                <td align="right" class="style3">
                    &nbsp;</td>
                <td class="style2">
                            &nbsp;</td>
            </tr>
            <tr>
                <td align="right" class="style22">
                    User Name&nbsp;:</td>
                <td class="style1">
                <asp:TextBox ID="txtusername" runat="server" Width="200px"></asp:TextBox>
                        </td>
                <td align="right" class="style3">
                    Email :</td>
                <td class="style2">
                <asp:TextBox ID="txtemail" runat="server" Width="200px"></asp:TextBox>
                        <br />
                        </td>
            </tr>
            <tr>
                <td class="style23" align="right">
                    Company Name :</td>
                <td class="style1">
                    <asp:DropDownList ID="ddlcompany" runat="server" Width="205px">
                        <asp:ListItem Value="0">-- Select One  --</asp:ListItem>
                    </asp:DropDownList>
                        <br />
                        </td>
                <td class="style8" align="right">
                    Employee Code :&nbsp; </td>
                <td class="style2">
                <asp:TextBox ID="txtempcode" runat="server" Width="200px"></asp:TextBox>
                        <br />
                        </td>
            </tr>
            <tr>
                <td class="style22" align="right">
                    &nbsp;Group Name:</td>
                <td class="style1" align="char">
                    <asp:DropDownList ID="ddlGroupid" runat="server" Width="205px">
                        <asp:ListItem Value="0">-- Select One  --</asp:ListItem>
                    </asp:DropDownList>
                        </td>
                <td class="style3" align="right">
                    Mobile :</td>
                <td class="style2">
                <asp:TextBox ID="txtmobile" runat="server" Width="200px"></asp:TextBox>
                        </td>
            </tr>
            <tr>
                <td class="style24" align="right">
                    &nbsp;</td>
                <td class="style1" align="right">
                    &nbsp;</td>
                <td class="style12">
                    &nbsp;</td>
                <td class="style2">
                    &nbsp;</td>
            </tr>
            <tr>
                <td class="style2" align="center" colspan="4">
                    <asp:Label ID="lblmsg" runat="server" ForeColor="Red"></asp:Label>
                </td>
            </tr>
            <tr>
                <td class="style22">
                    &nbsp;</td>
                <td align="right" class="style1">
                    <asp:Button ID="btnsubmit" runat="server" OnClick="btnsubmit_Click" Text="Submit" />
                </td>
                <td class="style3">
                    <asp:Button ID="btnreset" runat="server" OnClick="btnreset_Click" Text="Reset" />
                </td>
                <td class="style2">
                    &nbsp;</td>
            </tr>
            <tr>
                <td class="style22">
                    &nbsp;</td>
                <td class="style1">
                    &nbsp;</td>
                <td class="style3">
                    &nbsp;</td>
                <td class="style2">
                    &nbsp;</td>
            </tr>
            <tr>
                <td class="style25">
                    </td>
                <td class="style1">
                    &nbsp;</td>
                <td class="style16">
                    </td>
                <td class="style2">
                    </td>
            </tr>
            </table>
    
    </div>
    </form>
</body>
</html>
