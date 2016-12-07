l<%@ Page Language="C#" AutoEventWireup="true" Inherits="Department_Master" CodeBehind="Department_Master.aspx.cs" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head runat="server"><title></title><script language="javascript" type="text/javascript" src="Code/BackOfficeModuleCode.js?0"></script><style type="text/css">

        .style1
        {
            width: 100%;
        }
        .style3
        {
            width: 635px;
        }
    </style><link href="Styles/Site.css" rel="stylesheet" type="text/css" /></head><body><form id="form1" runat="server">
    <div>
    
        <table class="tbl">
            <tr>
                <td colspan="5" align="center" width="900px">
                     <asp:Label ID="Label1" runat="server" Text="Department Master" 
                    style="color: #0099FF; font-size: large; font-weight: 700;"></asp:Label></td>
         </td>
            </tr>
            <tr>
                <td colspan="5" width="900px" align="center">
                    <hr /></td>
            </tr>
            <tr>
                <td align="right" class="style3">
                    Id:</td>
                <td align="right" class="style3">
                    &nbsp;</td>
                <td align="right" class="style3">
                    &nbsp;</td>
                <td align="right" class="style3">
                    &nbsp;</td>
                <td width="900px">
                    <asp:Label ID="lblid" runat="server" ForeColor="Red"></asp:Label>
                </td>
            </tr>
            <tr>
                <td align="right" class="style3">
                    Department Name 
                    : </td>
                <td align="right" class="style3">
                    &nbsp;</td>
                <td align="left" class="style3">
                    <asp:TextBox ID="Department_Name" runat="server"></asp:TextBox>
                </td>
                <td align="right" class="style3">
                    &nbsp;</td>
                <td width="900px">
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
                        ControlToValidate="Department_Name" 
                        ErrorMessage="Please Enter The Department NAme" ForeColor="Red" 
                        SetFocusOnError="True">*</asp:RequiredFieldValidator>
                </td>
            </tr>
            <tr>
                <td align="center" colspan="5" style="width: 1800px" width="900px">
                    <asp:Label ID="lblmsg" runat="server" ForeColor="Red"></asp:Label>
                    </td>
            </tr>
            <tr>
                <td align="center" colspan="5" style="width: 1800px" width="900px">
                    &nbsp;</td>
            </tr>
            <tr>
                <td align="righ&nbsp;</td>
                <td width="900px">
                    &nbsp;</td>
                <td align="righ&nbsp;</td>
                <td width="900px">
                    &nbsp;</td>
                <td align="righ&nbsp;</td>
                <td width="900px">
                    <asp:Button ID="btnsubmit" runat="server" OnClick="btnsubmit_Click" Text="Submit" />
                    &nbsp;<asp:Button ID="btnreset" runat="server" OnClick="btnreset_Click" Text="Reset" />
                </td>
                <td align="righ&nbsp;</td>
                <td width="900px">
                    &nbsp;</td>
            </tr>
            <tr>
                <td align="center" colspan="5" width="900px">
                    </td>
            </tr>
        </table>
    
    </div>
    <table class="style1">
        <tr>
            <td align="center">
                <asp:GridView ID="GridView1" runat="server" AllowPaging="True" 
                    AutoGenerateColumns="False" CellPadding="4" ForeColor="#333333" PageSize="5" 
                    CssClass="tbl" onselectedindexchanged="GridView1_SelectedIndexChanged">
                    <AlternatingRowStyle BackColor="White" />
                    <Columns>
                        <asp:CommandField ShowSelectButton="True" />
                        <asp:TemplateField HeaderText="Sr No">
                        <ItemTemplate>
                        <%#Container.DataItemIndex+1 %>
                        </ItemTemplate>
                        </asp:TemplateField>
                        <asp:BoundField HeaderText="Dept Id" DataField="Department_ID" 
                            SortExpression="Department_ID" />
                        <asp:BoundField HeaderText="Dept Name" DataField="Department_Name" 
                            SortExpression="Department_Name" />
                    </Columns>
                    <EditRowStyle BackColor="#2461BF" />
                    <FooterStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
                    <HeaderStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
                    <PagerStyle BackColor="#2461BF" ForeColor="White" HorizontalAlign="Center" />
                    <RowStyle BackColor="#EFF3FB" />
                    <SelectedRowStyle BackColor="#D1DDF1" Font-Bold="True" ForeColor="#333333" />
                    <SortedAscendingCellStyle BackColor="#F5F7FB" />
                    <SortedAscendingHeaderStyle BackColor="#6D95E1" />
                    <SortedDescendingCellStyle BackColor="#E9EBEF" />
                    <SortedDescendingHeaderStyle BackColor="#4870BE" />
                </asp:GridView>
            </td>
        </tr>
        <tr>
            <td align="center">
                <asp:ValidationSummary ID="ValidationSummary1" runat="server" 
                    ShowMessageBox="True" ShowSummary="False" Width="200px" />
            </td>
        </tr>
    </table>
    </form>
</body>
</html>
