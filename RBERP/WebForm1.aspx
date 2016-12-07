<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="RBERP.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        Select a file to upload: 
                <asp:FileUpload ID="FileUpload" Width="450px" runat="server" />
            <p><input type="button" id="btImport" value="Import Data" runat="server" onserverclick="ImportFromExcel" /></p>
            <p><asp:Label id="lblConfirm" runat="server"></asp:Label></p>
    
    </div>
        <div>
            <table>
                <tr>
                    <td>
                        <asp:Label ID="lblempcode" runat="server" Text="Emp Code:- "></asp:Label>
                    </td>
                    <td><asp:TextBox ID="txtEmpCode" runat="server"></asp:TextBox></td>
                </tr>
                <tr>
                    <td>
                        <asp:Label ID="lblname" runat="server" Text="Name:- "></asp:Label>
                    </td>
                    <td><asp:TextBox ID="txtname" runat="server"></asp:TextBox></td>
                </tr>
                 <tr>
                    <td>
                        <asp:Label ID="lblmobno" runat="server" Text="Mobile Number:- "></asp:Label>
                    </td>
                    <td><asp:TextBox ID="txtmobno" runat="server"></asp:TextBox></td>
                </tr>
                 <tr>
                    <td>
                        <asp:Label ID="lbladdr" runat="server" Text="Address-: "></asp:Label>
                    </td>
                    <td><asp:TextBox ID="txtaddress" runat="server"></asp:TextBox></td>
                </tr>
            </table>
            

        </div>
    </form>
</body>
</html>
