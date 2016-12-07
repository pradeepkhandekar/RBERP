<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="LogRequest.aspx.cs" Inherits="RBERP.LogRequest" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">

        .style1
        {
            width: 222px;
        }
        .style2
        {
            height: 20px;
        }
        .auto-style1 {
            width: 222px;
            height: 20px;
        }
    </style>

     <script language="javascript" type="text/javascript" src="Code/BackOfficeModuleCode.js?0"></script>
   
  
    <link href="Styles/Site.css" rel="stylesheet" type="text/css" />

</head>
<body>
    <form id="form1" runat="server" enctype="multipart/form-data">
    <div >
    
        <table class="tbl" align="center" dir="ltr" aria-setsize="500">
            <tr>
                <td align="center" colspan="4">
                    <asp:Label ID="Label1" runat="server" style="color: #0099FF; font-weight: 700; font-size: x-large;" 
                        Text="New Request"></asp:Label>
                </td>
            </tr>
            <tr>
                <td align="center" colspan="4">
                    <hr />&nbsp;</td>
            </tr>
            <tr>
                <td align="right" class="style22">
                    Request Type&nbsp;:</td>
                <td class="style1">
                    <asp:DropDownList ID="ddlrequesttype" runat="server" Width="205px">
                        <asp:ListItem Value="0">-- Select One  --</asp:ListItem>
                    </asp:DropDownList>
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="ddlrequesttype" ErrorMessage="Please select the Request Type...?" Font-Bold="True" Font-Names="Verdana" ForeColor="Red" InitialValue="-1" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                        </td>
                <td align="right" class="style3">
                    &nbsp;</td>
                <td class="style2">
                        <br />
                        </td>
            </tr>
            <tr>
                <td class="style23" align="right">
                    Your Reporting Authority :</td>
                <td class="style1">
                    <asp:DropDownList ID="ddlreportingauth" runat="server" Width="205px">
                        <asp:ListItem Value="0">-- Select One  --</asp:ListItem>
                    </asp:DropDownList>
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="ddlreportingauth" ErrorMessage="Please select the Reporting Authority...?" Font-Bold="True" Font-Names="Verdana" ForeColor="Red" InitialValue="-1" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                        </td>
                <td class="style8" align="right">
                    &nbsp; </td>
                <td class="style2">
                        <br />
                        </td>
            </tr>
            <tr>
                <td class="style22" align="right">
                    &nbsp;Request Title:</td>
                <td align="char" colspan="3">
                    <asp:TextBox ID="txtrequesttitle" runat="server" Width="500px"></asp:TextBox>
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ControlToValidate="txtrequesttitle" ErrorMessage="Please select the Request Type...?" Font-Bold="True" Font-Names="Verdana" ForeColor="Red" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                </td>
            </tr>
            <tr>
                <td class="style24" align="right">
                    Description :</td>
                <td class="style1" align="left">
                    <asp:TextBox ID="txtshortdescription" runat="server" Height="50px" TextMode="MultiLine" Width="500px"></asp:TextBox>
                </td>
                <td class="style12">
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" ControlToValidate="txtshortdescription" ErrorMessage="Please select the Description...?" Font-Bold="True" Font-Names="Verdana" ForeColor="Red" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                </td>
                <td class="style2">
                    &nbsp;</td>
            </tr>
            <tr>
                <td class="style24" align="right">
                    Reason For Change :</td>
                <td class="style1" align="left">
                    <asp:TextBox ID="txtreasonforchange" runat="server" Height="50px" TextMode="MultiLine" Width="500px"></asp:TextBox>
                </td>
                <td class="style12">
                    &nbsp;</td>
                <td class="style2">
                    &nbsp;</td>
            </tr>
            <tr>
                <td class="style24" align="left" colspan="4">
                    <span style="color: rgb(0, 0, 255); font-family: Verdana; font-size: 13.3333px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); display: inline !important; float: none;">Please attached supporting document for above request.</span></td>
            </tr>
            <tr>
                <td class="style2" align="right">
                    Attach Document 1 :</td>
                <td class="auto-style1" align="left">
                    <asp:FileUpload ID="FileUpload1" runat="server" />
                    </td>
                <td class="style2">
                    </td>
                <td class="style2">
                    </td>
            </tr>
            <tr>
                <td class="style24" align="right">
                    Attach Document 2 :</td>
                <td class="auto-style1" align="left">
                    <asp:FileUpload ID="FileUpload2" runat="server" />
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
                &nbsp;<asp:Button ID="btnreset" runat="server"  Text="Reset" />
                    </td>
                <td class="style2">
                    &nbsp;</td>
            </tr>
            <tr>
                <td class="style22">
                    &nbsp;</td>
                <td class="style1">
                    <asp:ValidationSummary ID="ValidationSummary1" runat="server" ShowMessageBox="True" ShowSummary="False" />
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
