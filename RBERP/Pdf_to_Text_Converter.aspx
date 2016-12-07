<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Pdf_to_Text_Converter.aspx.cs" Inherits="RBERP.Pdf_to_Text_Converter" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        .auto-style1 {
            height: 23px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:ToolkitScriptManager ID="ToolkitScriptManager1" runat="server">
            </asp:ToolkitScriptManager>
            <table class="tbl">
                <tr>
                    <td align="center" width="900px" colspan="3">
                        <asp:Label ID="Label1" runat="server" Text="PDF To Text Converter"
                            Style="color: #0099FF; font-size: large; font-weight: 700;"></asp:Label></td>
                    </td>
                </tr>
                <tr>
                    <td width="900px" align="center" colspan="3">
                        <hr />
                    </td>
                </tr>
                <tr>
                    <td align="right" class="style3">Upload File</td>
                    <td align="center" class="style3">:</td>
                    <td align="left" class="style3">
                        <asp:FileUpload ID="FileUpload1" runat="server" />
&nbsp;</td>
                </tr>
                <tr>
                    <td align="center" style="width: 1800px" width="900px" colspan="3">
                        <asp:Label ID="lblmsg" runat="server" ForeColor="Red"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td align="center" width="900px" class="auto-style3" colspan="3">
                        <asp:Button ID="btnSubmit" runat="server" OnClick="btnSubmit_Click" Text="Submit" />
                        &nbsp;<asp:Button ID="btnReset" runat="server" CausesValidation="False" OnClick="btnReset_Click" Text="Reset" />
                    </td>
                </tr>
                <tr>
                    <td align="center" width="900px" class="auto-style3" colspan="3">
                        &nbsp;</td>
                </tr>
                <tr>
                    <td align="center" width="900px" colspan="3">
                        <asp:TextBox ID="txtEditer" runat="server" Height="300px" TextMode="MultiLine" Width="600px"></asp:TextBox>
                    </td>
                </tr>
            </table>

        </div>
    </form>
</body>
</html>
