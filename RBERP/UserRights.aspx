<%@ Page Language="C#" AutoEventWireup="true" Inherits="UserRights" CodeBehind="UserRights.aspx.cs" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script language="javascript" type="text/javascript" src="Code/BackOfficeModuleCode.js?0"></script>
    <style type="text/css">

.txt
{
    margin-left:5px;
    font-size:10pt;
    font-family:Verdana;
    text-decoration:none;
}
.txthead
{
    margin-left:15px;
    font-size:13pt;
    font-weight:bold;
    font-family:Verdana;
    height: 28px;
    background-color:Gray;
    border-width:1px;
    border-color:Black;
    border-style:solid;
    
   
}

a:link, a:visited
{
    color: #034af3;
}

input {
  outline: none;
}

    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <table class="txt" width="99%">
            <tr>
                <td class="txthead" colspan="4">
                    User Rights Managment</td>
            </tr>
            <tr>
                <td align="right">
                    &nbsp;</td>
                <td>
                    &nbsp;</td>
                <td>
                    &nbsp;</td>
                <td>
                    &nbsp;</td>
            </tr>
            <tr>
                <td align="right">
                    User Name:</td>
                <td>
                    <asp:TextBox ID="txtuser" runat="server" Width="166px"></asp:TextBox>
                    <asp:Button ID="btnsubmit" runat="server" OnClick="btnsubmit_Click" Text="Load" />
                </td>
                <td>
                    &nbsp;</td>
                <td>
                    &nbsp;</td>
            </tr>
            <tr>
                <td align="right">
                    User Name:</td>
                <td>
                    <asp:DropDownList ID="ddluser" runat="server" AutoPostBack="True" 
                        onselectedindexchanged="ddlgroup_SelectedIndexChanged">
                    </asp:DropDownList>
                </td>
                <td>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
                        ControlToValidate="ddluser" ErrorMessage="Please select user name....!" 
                        ForeColor="Red" InitialValue="-1" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                </td>
                <td>
                    &nbsp;</td>
            </tr>
            <tr>
                <td align="right">
                    &nbsp;</td>
                <td>
                    Rights Group</td>
                <td>
                    &nbsp;</td>
                <td>
                    &nbsp;</td>
            </tr>
            <tr>
                <td align="right">
                    &nbsp;</td>
                <td>
                    <asp:CheckBoxList ID="chk" runat="server">
                    </asp:CheckBoxList>
                </td>
                <td>
                    &nbsp;</td>
                <td>
                    &nbsp;</td>
            </tr>
            <tr>
                <td>
                    &nbsp;</td>
                <td>
                    <asp:ValidationSummary ID="ValidationSummary1" runat="server" 
                        ShowMessageBox="True" ShowSummary="False" />
                </td>
                <td>
                    &nbsp;</td>
                <td>
                    &nbsp;</td>
            </tr>
            <tr>
                <td>
                    &nbsp;</td>
                <td>
                    <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Submit" />
                </td>
                <td>
                    &nbsp;</td>
                <td>
                    &nbsp;</td>
            </tr>
        </table>
    
    </div>
    </form>
</body>
</html>
