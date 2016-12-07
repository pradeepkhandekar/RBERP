<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Lead_capture_Master.aspx.cs" Inherits="RBERP.Lead_capture_Master" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        .auto-style1 {
            width: 100%;
        }
        .auto-style2 {
            height: 26px;
        }
    </style>
</head>
<body>
    
    <form id="form1" runat="server">
    
    <table class="auto-style1">
        <tr>
            <td colspan="2"align="center" >Lead_Capture_Master</td>
        </tr>
        <tr>
            <td align="right" class="auto-style2">Enter Name</td>
            <td class="auto-style2">
                <asp:TextBox ID="txtname" runat="server"></asp:TextBox>
            </td>
        </tr>
        <tr>
            <td align="right">Enter Email Id</td>
            <td>
                <asp:TextBox ID="txtemail" runat="server" Height="22px"></asp:TextBox>
            </td>
        </tr>
        <tr>
            <td align="right">Enter Mobile</td>
            <td>
                <asp:TextBox ID="txtmobile" runat="server" Height="16px"></asp:TextBox>
            </td>
        </tr>
        <tr>
            <td align="right">Remark</td>
            <td>
                <asp:TextBox ID="txtremark" runat="server" Height="63px" TextMode="MultiLine"></asp:TextBox>
                 <asp:RequiredFieldValidator runat="server" id="reqName"  controltovalidate="txtremark" errormessage="Please Enter Remark!" ForeColor="Red"/>
            </td>
        </tr>
        <tr>
            <td align="right">
                <asp:Button ID="btnsubmit" runat="server" Text="Submit" OnClick="btnsubmit_Click" />
            </td>
            <td>
                <asp:Button ID="btnreset" runat="server" Text="Reset" OnClick="btnreset_Click" />
            </td>
        </tr>
    </table>
    </form>
</body>
</html>
