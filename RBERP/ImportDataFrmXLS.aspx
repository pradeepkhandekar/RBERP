<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ImportDataFrmXLS.aspx.cs" Inherits="RBERP.ImportDataFrmXLS" %>

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
            <br />
            <br />
            <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/CustomerData.xls">Download Sample File</asp:HyperLink>
            <p><input type="button" id="btImport" value="Import Data" runat="server" onserverclick="ImportFromExcel" /></p>
            <p><asp:Label id="lblConfirm" runat="server"></asp:Label></p>
    
    </div>
     
    </form>
</body>
</html>
