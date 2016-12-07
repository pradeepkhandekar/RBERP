<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Manage_Lead_Team.aspx.cs" Inherits="RBERP.Manage_Lead_Team" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>

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

        .modalPopup {
            background-color: #FFFFFF;
            width: 600px;
            height: 600px;
            border: 3px solid #0DA9D0;
        }

            .modalPopup .header {
                background-color: #2FBDF1;
                height: 30px;
                color: White;
                line-height: 30px;
                text-align: center;
                font-weight: bold;
            }

            .modalPopup .body {
                min-height: 150px;
                line-height: 30px;
                text-align: center;
                padding: 5px;
            }

            .modalPopup .footer {
                padding: 3px;
            }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div>

            <table class="auto-style1" style="font-family: verdana, Geneva, Tahoma, sans-serif; font-size: 10pt">
                <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <table class="auto-style1" style="font-family: verdana, Geneva, Tahoma, sans-serif; font-size: 10pt">
                        <tr>
                            <td align="center"><strong>Manage Leads (Team)</strong></td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>
                                <table class="auto-style1">
                                    <tr>
                                        <td align="center" class="auto-style2">
                                            <asp:GridView ID="dgteam" runat="server" BackColor="White" BorderColor="#3366CC" BorderStyle="None" BorderWidth="1px" CellPadding="4" AutoGenerateColumns="False" DataKeyNames="emp_code" AllowPaging="True" OnPageIndexChanging="dgteam_PageIndexChanging" PageSize="50">
                                                <Columns>
                                                    <asp:HyperLinkField DataNavigateUrlFields="emp_code" DataNavigateUrlFormatString="Manage_lead_Self.aspx?emp_code={0}" DataTextField="emp_code" HeaderText="Employee code" />
                                                    <asp:BoundField DataField="emp_name" HeaderText="Employee Name" />
                                                    <asp:BoundField DataField="mobile" HeaderText="Mobile" />
                                                    <asp:BoundField DataField="email_id" HeaderText="E-Mail" />
                                                </Columns>
                                                <FooterStyle BackColor="#99CCCC" ForeColor="#003399" />
                                                <HeaderStyle BackColor="#003399" Font-Bold="True" ForeColor="#CCCCFF" />
                                                <PagerSettings Position="TopAndBottom" />
                                                <PagerStyle BackColor="#99CCCC" ForeColor="#003399" HorizontalAlign="Left" />
                                                <RowStyle BackColor="White" ForeColor="#003399" />
                                                <SelectedRowStyle BackColor="#009999" Font-Bold="True" ForeColor="#CCFF99" />
                                                <SortedAscendingCellStyle BackColor="#EDF6F6" />
                                                <SortedAscendingHeaderStyle BackColor="#0D4AC4" />
                                                <SortedDescendingCellStyle BackColor="#D6DFDF" />
                                                <SortedDescendingHeaderStyle BackColor="#002876" />
                                            </asp:GridView>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center">&nbsp;</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                        </tr>
                    </table>
                </tr>
            </table>

        </div>
    </form>
</body>
</html>
