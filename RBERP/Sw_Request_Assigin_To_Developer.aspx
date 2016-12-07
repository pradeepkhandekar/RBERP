<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Sw_Request_Assigin_To_Developer.aspx.cs" Inherits="RBERP.Sw_Request_Assigin_To_Developer" %>

<%@ Register assembly="AjaxControlToolkit" namespace="AjaxControlToolkit" tagprefix="asp" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">

        .style2
        {
            height: 20px;
        }
            

        .style1
        {
            width: 222px;
        }
        .auto-style1 {
            height: 19px;
        }
        .auto-style2 {
            width: 222px;
            height: 19px;
        }
        </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <table class="tbl" align="center" dir="ltr" aria-setsize="500">
            <tr>
                <td align="center" colspan="4">
                    <asp:Label ID="Label1" runat="server" style="color: #0099FF; font-weight: 700; font-size: x-large;" 
                        Text="Request Assign To Developer"></asp:Label>
                </td>
            </tr>
            <tr>
                <td align="center" colspan="4">
                    <hr />&nbsp;</td>
            </tr>
            <tr>
                <td align="right" class="style22">
                    Request No :</td>
                <td class="style1">
                    <asp:TextBox ID="txtrequestno" runat="server" Width="80px" ReadOnly="True" BackColor="#FFECFF"></asp:TextBox>
                        </td>
                <td align="right" class="style3">
                    &nbsp;</td>
                <td class="style2">
                        &nbsp;</td>
            </tr>
            <tr>
                <td align="right" class="style22">
                    Request Date :</td>
                <td class="style1">
                    <asp:TextBox ID="txtrequestdate" runat="server" Width="80px" ReadOnly="True" BackColor="#FFECFF"></asp:TextBox>
                        </td>
                <td align="right" class="style3">
                    &nbsp;</td>
                <td class="style2">
                        &nbsp;</td>
            </tr>
            <tr>
                <td align="right" class="auto-style1">
                    Requested By :</td>
                <td class="auto-style2">
                    <asp:TextBox ID="txtrequestedby" runat="server" Width="200px" ReadOnly="True" BackColor="#FFECFF"></asp:TextBox>
                        </td>
                <td align="right" class="auto-style1">
                    </td>
                <td class="auto-style1">
                        </td>
            </tr>
            <tr>
                <td class="style23" align="right">
                    Reporting Authority:</td>
                <td class="style1">
                    <asp:TextBox ID="txtreportingauth" runat="server" Width="200px" ReadOnly="True" BackColor="#FFECFF"></asp:TextBox>
                        </td>
                <td class="style8" align="right">
                    &nbsp; </td>
                <td class="style2">
                        <br />
                        </td>
            </tr>
            <tr>
                <td class="style22" align="right">
                    &nbsp;Request Title:sw</td>
                <td align="char" colspan="3">
                    <asp:TextBox ID="txtrequesttitle" runat="server" Width="500px" ReadOnly="True" BackColor="#FFECFF"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td class="style24" align="right">
                    Description :</td>
                <td class="style1" align="left">
                    <asp:TextBox ID="txtshortdescription" runat="server" Height="50px" TextMode="MultiLine" Width="500px" ReadOnly="True" BackColor="#FFECFF"></asp:TextBox>
                </td>
                <td class="style12">
                    &nbsp;</td>
                <td class="style2">
                    &nbsp;</td>
            </tr>
            <tr>
                <td class="style24" align="right">
                    Detail Description :</td>
                <td class="style1" align="left">
                    <asp:TextBox ID="txtreasonforchange" runat="server" Height="50px" TextMode="MultiLine" Width="500px" ReadOnly="True" BackColor="#FFECFF"></asp:TextBox>
                </td>
                <td class="style12">
                    &nbsp;</td>
                <td class="style2">
                    &nbsp;</td>
            </tr>
            <tr>
                <td class="style24" align="right">
                    Request Category :</td>
                <td class="style1" align="left">
                    <asp:TextBox ID="txtcategory" runat="server" Width="200px" ReadOnly="True" BackColor="#FFECFF"></asp:TextBox>
                        </td>
                <td class="style12">
                    &nbsp;</td>
                <td class="style2">
                    &nbsp;</td>
            </tr>
            <tr>
                <td class="style24" align="right">
                    Sub Category</td>
                <td class="style1" align="left">
                    <asp:TextBox ID="txtsubcategory" runat="server" Width="200px" ReadOnly="True" BackColor="#FFECFF"></asp:TextBox>
                        </td>
                <td class="style12">
                    &nbsp;</td>
                <td class="style2">
                    &nbsp;</td>
            </tr>
            <tr>
                <td class="style24" align="right">
                    Assigned To :</td>
                <td class="style1" align="left">
                    <asp:DropDownList ID="ddldevelpoer" runat="server" CausesValidation="True" CssClass="txt" Height="22px" Width="120px">
                        <asp:ListItem Value="-1">--Select One--</asp:ListItem>
                    </asp:DropDownList>
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="ddldevelpoer" ErrorMessage="Please select the Developer Name...?" Font-Bold="True" Font-Names="Verdana" ForeColor="Red" InitialValue="-1" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                        </td>
                <td class="style12">
                    &nbsp;</td>
                <td class="style2">
                    &nbsp;</td>
            </tr>
            <tr>
                <td class="style24" align="right">
                    Remark :</td>
                <td class="style1" align="left">
                    <asp:TextBox ID="txtremark" runat="server" Height="50px" TextMode="MultiLine" Width="500px"></asp:TextBox>
                </td>
                <td class="style12">
                    &nbsp;</td>
                <td class="style2">
                    &nbsp;</td>
            </tr>
            <tr>
                <td class="style24" align="right">
                    Start Date :</td>
                <td class="style1" align="left">
                    <asp:TextBox ID="txtstartdate" runat="server"></asp:TextBox>
                    <asp:CalendarExtender ID="CalendarExtender1" runat="server" TargetControlID="txtstartdate"></asp:CalendarExtender>
                </td>
                <td class="style12">
                    &nbsp;</td>
                <td class="style2">
                    &nbsp;</td>
            </tr>
            <tr>
                <td class="style24" align="right">
                    End Date :</td>
                <td class="style1" align="left">
                    <asp:TextBox ID="txtenddate" runat="server"></asp:TextBox>
                    <asp:CalendarExtender ID="CalendarExtender2" runat="server" TargetControlID="txtenddate"></asp:CalendarExtender>
                </td>
                <td class="style12">
                    &nbsp;</td>
                <td class="style2">
                    &nbsp;</td>
            </tr>
            <tr>
                <td class="style2" align="center" colspan="4">
                    <asp:Label ID="lblmsg" runat="server" ForeColor="Red"></asp:Label>
                &nbsp;<asp:Label ID="lblrequestid" runat="server" ForeColor="Red" Visible="False"></asp:Label>
                    <asp:Label ID="lbluseremail" runat="server" ForeColor="Red" Visible="False"></asp:Label>
                    <asp:Label ID="lblusername" runat="server" ForeColor="Red" Visible="False"></asp:Label>
                    <asp:Label ID="lblreportingemail" runat="server" ForeColor="Red" Visible="False"></asp:Label>
                    </td>
            </tr>
            <tr>
                <td class="style22">
                    &nbsp;</td>
                <td align="left" colspan="2">
                    <asp:Button ID="btnsubmit" runat="server" OnClick="btnsubmit_Click" Text="Submit" />
                </td>
                <td class="style2">
                    &nbsp;</td>
            </tr>
            <tr>
                <td class="style22">
                    &nbsp;</td>
                <td class="style1">
                    <asp:ValidationSummary ID="ValidationSummary1" runat="server" ShowMessageBox="True" ShowSummary="False" />
                        <asp:ToolkitScriptManager ID="ToolkitScriptManager1" runat="server">
                    </asp:ToolkitScriptManager>
                </td>
                <td class="style3">
                    &nbsp;</td>
                <td class="style2">
                    &nbsp;</td>
            </tr>

            </table>
    
    </div>
    </form>
</body>
</html>
