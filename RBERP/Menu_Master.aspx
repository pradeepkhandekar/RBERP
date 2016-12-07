<%@ Page Title="" Language="C#"  AutoEventWireup="true" Inherits="Menu_Master" Codebehind="Menu_Master.aspx.cs" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title></title>
    <link href="css/style.css" rel="stylesheet" type="text/css" />
    <link href="Styles/Site.css" rel="stylesheet" type="text/css" />
    <style type="text/css">
        .style1
        {
            height: 29px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
    <table class="tbl">
        <tr>
            <td colspan="4" align="center">
                <asp:Label ID="lblhead" runat="server" ForeColor="#0099FF" style="font-weight:700; font-size:large;" Text="Menu Master" /></td>
        </tr>
        <tr>
            <td colspan="4">
                <hr /></td>
        </tr>
        <tr>
            <td>
                </td>
            <td>
                </td>
            <td>
                </td>
            <td>
                </td>
        </tr>
        <tr>
            <td align="right">
                Module Name:</td>
            <td>
                <asp:DropDownList ID="cbmodule" runat="server" 
                    onselectedindexchanged="cbmodule_SelectedIndexChanged">
                    <asp:ListItem>RBERP</asp:ListItem>
                </asp:DropDownList>
                </td>
            <td  align="right">
                Menu Name:</td>
            <td>
                <asp:TextBox ID="txtMenuName" runat="server" Width="271px"></asp:TextBox>
                </td>
        </tr>
        <tr>
            <td align="right">
                Parent Name:</td>
            <td>
                <asp:DropDownList ID="ddlParentName" runat="server" Width="148px">
                </asp:DropDownList>
                </td>
            <td align="right">
                Menu Level:</td>
            <td>
                <asp:DropDownList ID="ddlMenuLevel" runat="server" Width="148px">
                    <asp:ListItem Value="0">-- Select One --</asp:ListItem>
                    <asp:ListItem>0</asp:ListItem>
                    <asp:ListItem>1</asp:ListItem>
                    <asp:ListItem>2</asp:ListItem>
                    <asp:ListItem>3</asp:ListItem>
                    <asp:ListItem>4</asp:ListItem>
                    <asp:ListItem>5</asp:ListItem>
                    <asp:ListItem>6</asp:ListItem>
                    <asp:ListItem>7</asp:ListItem>
                    <asp:ListItem>8</asp:ListItem>
                    <asp:ListItem>9</asp:ListItem>
                    <asp:ListItem>10</asp:ListItem>
                </asp:DropDownList>
                </td>
        </tr>
        <tr>
            <td align="right">
                Menu Sequence:</td>
            <td>
                <asp:DropDownList ID="ddlMenuSequence" runat="server" Width="148px">
                    <asp:ListItem Value="0">-- Select One --</asp:ListItem>
                    <asp:ListItem>0</asp:ListItem>
                    <asp:ListItem>1</asp:ListItem>
                    <asp:ListItem>2</asp:ListItem>
                    <asp:ListItem>3</asp:ListItem>
                    <asp:ListItem>4</asp:ListItem>
                    <asp:ListItem>5</asp:ListItem>
                    <asp:ListItem>6</asp:ListItem>
                    <asp:ListItem>7</asp:ListItem>
                    <asp:ListItem>8</asp:ListItem>
                    <asp:ListItem>9</asp:ListItem>
                    <asp:ListItem>10</asp:ListItem>
                    <asp:ListItem>11</asp:ListItem>
                    <asp:ListItem>12</asp:ListItem>
                    <asp:ListItem>13</asp:ListItem>
                    <asp:ListItem>14</asp:ListItem>
                    <asp:ListItem>15</asp:ListItem>
                    <asp:ListItem>16</asp:ListItem>
                    <asp:ListItem>17</asp:ListItem>
                    <asp:ListItem>18</asp:ListItem>
                    <asp:ListItem>19</asp:ListItem>
                    <asp:ListItem>20</asp:ListItem>
                </asp:DropDownList>
                </td>
            <td align="right">
                Menu Type:</td>
            <td>
                <asp:DropDownList ID="ddlMenuType" runat="server" Width="148px">
                    <asp:ListItem Value="0">-- Select One --</asp:ListItem>
                    <asp:ListItem>URL</asp:ListItem>
                    <asp:ListItem>POP</asp:ListItem>
                </asp:DropDownList>
                </td>
        </tr>
        <tr>
            <td align="right">
                Menu Action:</td>
            <td>
                <asp:TextBox ID="txtlink" runat="server" Width="249px"></asp:TextBox>
                </td>
            <td>
                Menu Display:</td>
            <td>
                <asp:TextBox ID="txtmenudisplay" runat="server" Width="271px"></asp:TextBox>
                </td>
        </tr>
        <tr>
            <td>
                </td>
            <td>
                </td>
            <td>
                </td>
            <td>
                </td>
        </tr>
        <tr>
            <td align="center" colspan="4">
                <asp:Label ID="lblmsg" runat="server" ForeColor="Red"></asp:Label>
                </td>
        </tr>
        <tr>
            <td class="style1">
                </td>
            <td align="center" class="style1">
                <asp:Button ID="btnsubmit" runat="server" OnClick="btnsubmit_Click" Text="Submit" />
                </td>
            <td class="style1">
                <asp:Button ID="reset" runat="server" CausesValidation="False" OnClick="reset_Click1" Text="Reset" />
                </td>
            <td class="style1">
                </td>
        </tr>
        <tr>
            <td>
                </td>
            <td>
                </td>
            <td>
                </td>
            <td>
                </td>
        </tr>
        <tr>
            <td>
                &nbsp;</td>
            <td>
                <asp:ScriptManager ID="ScriptManager1" runat="server">
                </asp:ScriptManager>
                </td>
            <td>
                </td>
            <td>
                </td>
        </tr>
    </table>
  </div>
    </form>
</body>
</html>


