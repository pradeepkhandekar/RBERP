<%@ Page Language="C#" AutoEventWireup="True" CodeBehind="Employee_Master_Edit.aspx.cs" Inherits="Employee_Master_Edit" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>

<%@ Register assembly="AjaxControlToolkit" namespace="AjaxControlToolkit" tagprefix="asp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<script runat="server">

   
</script>


<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Edit Call Status Master</title>
</head>
<body>
    <form id="form1" runat="server">
 <table align="center" class="auto-style9">
                                            <tr>
                                                <td align="center" colspan="4">Edit Employee Master</td>
                                            </tr>
                                            <tr>
                                                <td align="right" colspan="4">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td align="right">EmpCode:</td>
                                                <td align="left">
                                                    <asp:TextBox ID="txtecode" runat="server" TabIndex="1" Width="154px" ReadOnly="true"></asp:TextBox>
                                                </td>
                                                <td align="right">Designation:</td>
                                                <td>
                                                    <asp:DropDownList ID="ddledesignation" runat="server" TabIndex="9" Width="233px">
                                                    </asp:DropDownList>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="right">Emp Name:</td>
                                                <td align="left">
                                                    <asp:TextBox ID="txtename" runat="server" TabIndex="1" Width="154px"></asp:TextBox>
                                                </td>
                                                <td align="right">Reporting Auth:</td>
                                                <td align="left">
                                                    <asp:DropDownList ID="ddlereporting" runat="server" DataTextField="emp_name" DataValueField="empid" TabIndex="10" Width="230px">
                                                    </asp:DropDownList>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="right">Company:</td>
                                                <td align="left">
                                                    <asp:DropDownList ID="ddlcom" runat="server" TabIndex="9" Width="233px">
                                                    </asp:DropDownList>
                                                </td>
                                                <td align="right">Department:</td>
                                                <td align="left">
                                                    <asp:DropDownList ID="ddledept" runat="server" TabIndex="9" Width="233px">
                                                    </asp:DropDownList>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="right">Email:</td>
                                                <td align="left">
                                                    <asp:TextBox ID="txteml" runat="server" TabIndex="1" Width="154px"></asp:TextBox>
                                                </td>
                                                <td align="right">IsActive:</td>
                                                <td align="left">
                                                    <asp:CheckBox ID="chkeactive" runat="server" TabIndex="13" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="right">Address</td>
                                                <td align="left">
                                                    <asp:TextBox ID="txteaddress" runat="server" TabIndex="1" Width="154px"></asp:TextBox>
                                                </td>
                                                <td align="right">CTC:</td>
                                                <td align="left">
                                                    <asp:TextBox ID="txtectc" runat="server" TabIndex="1" Width="154px"></asp:TextBox>
                                                    <asp:FilteredTextBoxExtender ID="FilteredTextBoxExtender2" runat="server" ValidChars="0123456789." TargetControlID="txtectc"></asp:FilteredTextBoxExtender>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="right">DOB:</td>
                                                <td align="left">
                                                    <asp:TextBox ID="txtedob" runat="server" TabIndex="1" Width="154px"></asp:TextBox>
                                                    <asp:CalendarExtender ID="CalendarExtender1" runat="server" TargetControlID="txtedob"></asp:CalendarExtender>
                                                </td>
                                                <td align="right">Variable</td>
                                                <td align="left">
                                                    <asp:TextBox ID="txtevariable" runat="server" TabIndex="1" Width="154px"></asp:TextBox>
                                                    <asp:FilteredTextBoxExtender ID="FilteredTextBoxExtender3" runat="server" ValidChars="0123456789.," TargetControlID="txtevariable"></asp:FilteredTextBoxExtender>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="right">MobileNo:</td>
                                                <td align="left">
                                                    <asp:TextBox ID="txtemobileno" runat="server" TabIndex="1" Width="154px"></asp:TextBox>
                                                    <asp:FilteredTextBoxExtender ID="FilteredTextBoxExtender1" runat="server" ValidChars="0123456789" TargetControlID="txtemobileno"></asp:FilteredTextBoxExtender>
                                                </td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td align="center" colspan="4">
                                                    <asp:Button ID="btnupdate" runat="server" OnClick="btnupdate_Click" Text="Update" />
                                                    <asp:Button ID="btnback" runat="server" OnClick="btnback_Click" Text="Back" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="right" colspan="4">
                                                    <asp:ToolkitScriptManager ID="ToolkitScriptManager1" runat="server">
                                                    </asp:ToolkitScriptManager>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" colspan="4">
                                                    <asp:GridView ID="GridView1" runat="server" CellPadding="4" ForeColor="#333333">
                                                        <AlternatingRowStyle BackColor="White" />
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
                                            </table>
    </form>
</body>
</html>
