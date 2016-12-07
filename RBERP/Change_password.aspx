<%@ Page Language="C#" AutoEventWireup="true" Inherits="Change_password" Codebehind="Change_password.aspx.cs" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script language="javascript" type="text/javascript" src="Code/BackOfficeModuleCode.js?0"></script>
    <link href="Styles/site.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <form id="form1" runat="server">
    <table align="center" width="800px" >
        <tr>
            <td align="center" class="txthead">
                Change Password</td>
        </tr>
        <tr>
            <td align="center" >
                <hr />&nbsp;</td>
        </tr>
        <tr>
            <td >
                <table align="center" border="0" cellpadding="0" cellspacing="0" 
                    style="background-image: url('Images/login_bg.jpg'); vertical-align: middle; width: 417px; height: 218px">
                    <tr>
                        <td align="center" style="width: 416px">
                            <div>
                                <table border="0" cellpadding="0" cellspacing="0" class="tbl" 
                                    style="width: 378px">
                                    <tr>
                                        <td align="center" colspan="3" valign="middle">
                                            &nbsp;
                                        </td>
                                        <td align="center" style="height: 19px" valign="middle">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" colspan="4" valign="middle">
                                            <asp:Label ID="Lblmessage" runat="server" ForeColor="Red"></asp:Label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right" valign="middle">
                                           Current Password
                                        </td>
                                        <td align="left" 
                                            valign="middle">
                                            :
                                        </td>
                                        <td align="left" valign="middle">
                                            <asp:TextBox ID="txtOldPassword" runat="server" TextMode="Password" 
                                                Width="180px"></asp:TextBox>
                                        </td>
                                        <td align="left" valign="middle">
                                            <%--<asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" 
                                                                        ControlToValidate="txtOldPassword" ErrorMessage="Please enter Old Password ....!" 
                                                                        SetFocusOnError="True">*</asp:RequiredFieldValidator>--%>
                                            <asp:RequiredFieldValidator ID="RFVCurrentPassword" runat="server" 
                                                ControlToValidate="txtOldPassword" 
                                                ErrorMessage="Please Enter The Current Password...!!!" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right" style="height: 15px;" valign="middle">
                                            New Password
                                        </td>
                                        <td align="left" 
                                            valign="middle">
                                            :
                                        </td>
                                        <td align="left" style="height: 20px" valign="middle">
                                            <asp:TextBox ID="txtNewPassword" runat="server" TextMode="Password" 
                                                Width="180px"></asp:TextBox>
                                        </td>
                                        <td align="left" style="height: 15px" valign="middle">
                                            <%--<asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" 
                                                                        ControlToValidate="txtNewPassword" ErrorMessage="Please enter New Password ....!" 
                                                                        SetFocusOnError="True">*</asp:RequiredFieldValidator>--%>
                                            <asp:RequiredFieldValidator ID="RFVNEWPassword" runat="server" 
                                                ControlToValidate="txtNewPassword" 
                                                ErrorMessage="Please Enter The New Password...!!!" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right" style="height: 15px;" valign="middle">
                                            Confirm Password
                                        </td>
                                        <td align="left" 
                                            valign="middle">
                                            :
                                        </td>
                                        <td align="left" style="height: 20px" valign="middle">
                                            <asp:TextBox ID="txtConfirmPassword" runat="server" TextMode="Password" 
                                                Width="180px"></asp:TextBox>
                                        </td>
                                        <td align="left" style="height: 15px" valign="middle">
                                            <asp:RequiredFieldValidator ID="RfvConfirmPassword" runat="server" 
                                                ControlToValidate="txtConfirmPassword" 
                                                ErrorMessage="Please Enter The Confirm Password...!!!" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                                            <asp:CompareValidator ID="CompConfirm" runat="server" 
                                                ControlToCompare="txtNewPassword" ControlToValidate="txtConfirmPassword" 
                                                ErrorMessage="Confirm Password is Not Matched With New Password...!!!" 
                                                SetFocusOnError="True">*</asp:CompareValidator>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right" valign="middle">
                                            &nbsp;
                                        </td>
                                        <td align="left" style="width: 8px; height: 15px; font-weight: 700;" 
                                            valign="middle">
                                            &nbsp;
                                        </td>
                                        <td align="left" valign="middle">
                                            &nbsp;
                                        </td>
                                        <td align="left" style="height: 15px" valign="middle">
                                            &nbsp;
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right" valign="middle">
                                            <asp:Button ID="btnsubmit" runat="server" OnClick="btnsubmit_Click" Text="Submit" />
                                        </td>
                                        <td align="left" style="width: 8px; height: 15px; font-weight: 700;" 
                                            valign="middle">
                                            &nbsp;</td>
                                        <td align="left" valign="middle">
                                            <asp:Button ID="btnreset" runat="server" CausesValidation="False" OnClick="btnreset_Click1" Text="Reset" />
                                        </td>
                                        <td align="left" style="height: 15px" valign="middle">
                                            &nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td align="left" colspan="4" 
                                            valign="middle">
                                            &nbsp;
                                            &nbsp;
                                            </td>
                                    </tr>
                                    <tr>
                                        <td align="center" colspan="4" valign="middle">
                                            <asp:ValidationSummary ID="ValidationSummary1" runat="server" Height="36px" 
                                                ShowMessageBox="True" ShowSummary="False" Width="315px" />
                                        </td>
                                    </tr>
                                </table>
                                &nbsp;&nbsp;
                            </div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    </form>
</body>
</html>
