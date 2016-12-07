<%@ Page Language="C#" AutoEventWireup="true" CodeBehind ="Employee_Master.aspx.cs" Inherits="Employee_Master" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>

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
            width: 32px;
        }
        .auto-style4 {
            height: 20px;
            width: 32px;
        }
        .auto-style5 {
        }
        .auto-style6 {
            height: 20px;
            width: 154px;
        }
        .auto-style7 {
            height: 28px;
        }
        .auto-style8 {
            width: 32px;
            height: 28px;
        }
        .auto-style10 {
            height: 14px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <table class="auto-style1" style="font-family: verdana, Geneva, Tahoma, sans-serif; font-size: 10pt" border="1">
            <tr>
                <td align="center" colspan="7" class="auto-style2">
                    <asp:ToolkitScriptManager ID="ToolkitScriptManager1" runat="server">
                    </asp:ToolkitScriptManager>
                </td>
            </tr>
            <tr>
                <td align="center" colspan="7" class="auto-style2"><strong>Employee Master</strong></td>
            </tr>
            <tr>
                <td class="auto-style5">Employee Code</td>
                <td>:</td>
                <td class="auto-style3">
                    <asp:TextBox ID="txtempcode" runat="server" Width="154px" TabIndex="1"></asp:TextBox>
                </td>
                <td class="auto-style3" rowspan="9">
                    &nbsp;</td>
                <td>Department</td>
                <td>:</td>
                <td>
                    <asp:DropDownList ID="ddldept" runat="server" Width="230px" TabIndex="8">
                    </asp:DropDownList>
                </td>
            </tr>
            <tr>
                <td class="auto-style5">Employee Name</td>
                <td>:</td>
                <td class="auto-style3">
                    <asp:TextBox ID="txtempname" runat="server" Width="230px" TabIndex="2"></asp:TextBox>
                </td>
                <td>Designation</td>
                <td>:</td>
                <td>
                    <asp:DropDownList ID="ddldesignation" runat="server" Width="233px" TabIndex="9">
                    </asp:DropDownList>
                </td>
            </tr>
            <tr>
                <td class="auto-style6">Company Name</td>
                <td class="auto-style2">:</td>
                <td class="auto-style4">
                    <asp:DropDownList ID="ddlcompany" runat="server" Width="236px" TabIndex="3">
                    </asp:DropDownList>
                </td>
                <td class="auto-style2">Reporting Authority</td>
                <td class="auto-style2">:</td>
                <td class="auto-style2">
                    <asp:DropDownList ID="ddlreportingauth" runat="server" Width="230px" TabIndex="10" DataTextField="emp_name" DataValueField="empid">
                    </asp:DropDownList>
                </td>
            </tr>
            <tr>
                <td class="auto-style6">Address</td>
                <td class="auto-style2">:</td>
                <td class="auto-style4">
                    <asp:TextBox ID="txtaddress" runat="server" Height="16px" Width="260px" TabIndex="4"></asp:TextBox>
                </td>
                <td class="auto-style2">Date of Joining</td>
                <td class="auto-style2">:</td>
                <td class="auto-style2">
                    <asp:TextBox ID="txtdateofjoining" runat="server" Width="171px" TabIndex="11"></asp:TextBox>
                    <asp:CalendarExtender ID="CalendarExtender2" runat="server" TargetControlID="txtdateofjoining"></asp:CalendarExtender>
                </td>
            </tr>
            <tr>
                <td class="auto-style5">E-Mail ID</td>
                <td>:</td>
                <td class="auto-style3">
                    <asp:TextBox ID="txtemailid" runat="server" Width="228px" TabIndex="5"></asp:TextBox>
                </td>
                <td>Band</td>
                <td>:</td>
                <td>
                    <asp:DropDownList ID="ddlband" runat="server" Font-Names="Verdana" Font-Size="10pt" TabIndex="12">
                        <asp:ListItem Value="0">--Select Band--</asp:ListItem>
                        <asp:ListItem>1</asp:ListItem>
                        <asp:ListItem>2</asp:ListItem>
                        <asp:ListItem>3</asp:ListItem>
                        <asp:ListItem>4</asp:ListItem>
                        <asp:ListItem>5</asp:ListItem>
                    </asp:DropDownList>
                </td>
            </tr>
            <tr>
                <td class="auto-style5">Date of Birth</td>
                <td>:</td>
                <td class="auto-style3">
                    <asp:TextBox ID="txtdateofbirth" runat="server" Width="228px" TabIndex="6"></asp:TextBox>
                    <asp:CalendarExtender ID="CalendarExtender1" runat="server" TargetControlID="txtdateofbirth"></asp:CalendarExtender>
                </td>
                <td>Is Active</td>
                <td>:</td>
                <td>
                    <asp:CheckBox ID="chkactive" runat="server" TabIndex="13" />
                </td>
            </tr>
            <tr>
                <td class="auto-style5">Mobile No</td>
                <td>:</td>
                <td class="auto-style3">
                    <asp:TextBox ID="txtmobileno" runat="server" Width="228px" TabIndex="7"></asp:TextBox>
                     <asp:FilteredTextBoxExtender ID="FilteredTextBoxExtender14" runat="server" ValidChars="0123456789" TargetControlID="txtmobileno"></asp:FilteredTextBoxExtender>
                </td>
                <td>CTC</td>
                <td>:</td>
                <td>
                    <asp:TextBox ID="txtctc" runat="server"></asp:TextBox>
                     <asp:FilteredTextBoxExtender ID="FilteredTextBoxExtender15" runat="server" ValidChars="0123456789." TargetControlID="txtctc"></asp:FilteredTextBoxExtender>
                </td>
            </tr>
            <tr>
                <td class="auto-style7"></td>
                <td class="auto-style7"></td>
                <td class="auto-style8">
                </td>
                <td class="auto-style7">Variable</td>
                <td class="auto-style7">:</td>
                <td class="auto-style7">
                    <asp:TextBox ID="txtvariable" runat="server"></asp:TextBox>
                      <asp:FilteredTextBoxExtender ID="FilteredTextBoxExtender24" runat="server" ValidChars="0123456789." TargetControlID="txtvariable"></asp:FilteredTextBoxExtender>
                </td>
            </tr>
            <tr>
                <td class="auto-style5">&nbsp;</td>
                <td>&nbsp;</td>
                <td class="auto-style3">
                    &nbsp;</td>
                <td colspan="3">&nbsp;</td>
            </tr>
            <tr>
                <td class="auto-style5" colspan="7">&nbsp;</td>
            </tr>
            <tr>
                <td align="center"class="auto-style10" colspan="7">
                    <asp:Button ID="btnsubmit" runat="server" OnClick="btnsubmit_Click" Text="Submit" />
                    <asp:Button ID="btnreset" runat="server" OnClick="btnreset_Click" Text="Reset" />
                </td>
            </tr>
            </table>
    
    </div>
    </form>
</body>
</html>
