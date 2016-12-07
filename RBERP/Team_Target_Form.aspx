<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Team_Target_Form.aspx.cs" Inherits="RBERP.Team_Target_Form" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    </head>
<body>
    <form id="form1" runat="server">
        <div>
            <table class="tbl">
                <tr>
                    <td align="center" width="900px">
                        <asp:Label ID="Label1" runat="server" Text="Assign Monthly Team Target"
                            Style="color: #0099FF; font-size: large; font-weight: 700;"></asp:Label></td>
                    </td>
                </tr>
                <tr>
                    <td width="900px" align="center">
                        <hr />
                    </td>
                </tr>
                <tr>
                    <td align="center" class="style3">
                                    <asp:ToolkitScriptManager ID="ToolkitScriptManager1" runat="server">
                                    </asp:ToolkitScriptManager>
                                </td>
                </tr>
                <tr>
                    <td align="center" class="style3">
                        <table width="600px">
                            <tr>
                                <td align="right" valign="middle" width="100">Select Year</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:DropDownList ID="ddlYear" runat="server" Width="100px">
                                        <asp:ListItem Selected="True" Value="-1">Select One</asp:ListItem>
                                        <asp:ListItem>2016</asp:ListItem>
                                        <asp:ListItem>2017</asp:ListItem>
                                        <asp:ListItem>2018</asp:ListItem>
                                        <asp:ListItem>2019</asp:ListItem>
                                        <asp:ListItem>2020</asp:ListItem>
                                        <asp:ListItem>2021</asp:ListItem>
                                        <asp:ListItem>2022</asp:ListItem>
                                        <asp:ListItem>2023</asp:ListItem>
                                        <asp:ListItem>2024</asp:ListItem>
                                        <asp:ListItem>2025</asp:ListItem>
                                    </asp:DropDownList>
                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="ddlYear" ErrorMessage="Please Select Year..." ForeColor="Red" InitialValue="-1" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                                </td>
                                <td align="right" valign="middle" width="100">Select Month</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:DropDownList ID="ddlMonth" runat="server" Width="100px">
                                        <asp:ListItem Selected="True" Value="-1">Select One</asp:ListItem>
                                        <asp:ListItem>Jan</asp:ListItem>
                                        <asp:ListItem>Feb</asp:ListItem>
                                        <asp:ListItem>Mar</asp:ListItem>
                                        <asp:ListItem>Apr</asp:ListItem>
                                        <asp:ListItem>May</asp:ListItem>
                                        <asp:ListItem>Jun</asp:ListItem>
                                        <asp:ListItem>Jul</asp:ListItem>
                                        <asp:ListItem>Aug</asp:ListItem>
                                        <asp:ListItem>Sep</asp:ListItem>
                                        <asp:ListItem>Oct</asp:ListItem>
                                        <asp:ListItem>Nov</asp:ListItem>
                                        <asp:ListItem>Dec</asp:ListItem>
                                    </asp:DropDownList>
                                    &nbsp;<asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="ddlMonth" ErrorMessage="Please Select Month..." ForeColor="Red" InitialValue="-1" SetFocusOnError="True">*</asp:RequiredFieldValidator>
&nbsp;&nbsp;</td>
                                <td align="left" valign="middle">
                                    <asp:Button ID="btnShow" runat="server" OnClick="btnShow_Click" Text="Show" />
                                </td>
                            </tr>
                            <tr>
                                <td colspan="6">
                                    <asp:ValidationSummary ID="ValidationSummary1" runat="server"
                                        ShowMessageBox="True" ShowSummary="False" Width="200px" Font-Bold="True" ForeColor="Red" />
                                </td>
                                <td>
                                    &nbsp;</td>
                            </tr>
                            <tr>
                                <td>
                                    &nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="center" class="style3">
                        <asp:Label ID="lblmsg" runat="server" ForeColor="Red"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td align="center" class="style3">
                            <asp:GridView ID="GridView1" runat="server"
                            AutoGenerateColumns="False" CellPadding="4" ForeColor="#333333" PageSize="5"
                            CssClass="tbl" OnRowDataBound="GridView1_RowDataBound">
                                <AlternatingRowStyle BackColor="White" />
                                <Columns>
                                    <asp:TemplateField HeaderText="Sr No">
                                        <ItemTemplate>
                                            <%#Container.DataItemIndex+1 %>
                                        </ItemTemplate>
                                    </asp:TemplateField>
                                    <asp:BoundField HeaderText="Employee Id" DataField="EmpId"
                                    SortExpression="EmpId"></asp:BoundField>
                                    <asp:BoundField HeaderText="Employee Name" DataField="Emp_Name"
                                    SortExpression="Emp_Name" />
                                    <asp:BoundField HeaderText="Designation Id" DataField="Designation_Id"
                                    SortExpression="Designation_Id" ></asp:BoundField>
                                    <asp:BoundField HeaderText="Designation" DataField="Designation"
                                    SortExpression="Designation" />
                                    <asp:TemplateField HeaderText="Individual Target">
                                        <ItemTemplate>
                                            <asp:TextBox ID="txtIndividualTarget" runat="server" Width="120px" Text='<%# Eval("Individual_Target") %>'></asp:TextBox>
                                            <asp:FilteredTextBoxExtender ID="FilteredTextBoxExtender1" runat="server" FilterType="Numbers, Custom"
                                            TargetControlID="txtIndividualTarget" ValidChars=".,">
                                            </asp:FilteredTextBoxExtender>
                                        </ItemTemplate>
                                    </asp:TemplateField>
                                    <asp:TemplateField HeaderText="Team Target">
                                        <ItemTemplate>
                                            <asp:TextBox ID="txtTeamTarget" runat="server" Width="120px" Text='<%# Eval("Team_Target") %>'></asp:TextBox>
                                            <asp:FilteredTextBoxExtender ID="FilteredTextBoxExtender2" runat="server" FilterType="Numbers, Custom"
                                            TargetControlID="txtTeamTarget" ValidChars=".,">
                                            </asp:FilteredTextBoxExtender>
                                        </ItemTemplate>
                                    </asp:TemplateField>
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
                    <td align="center" class="style3">
                        &nbsp;</td>
                </tr>
                <tr>
                    <td align="center" style="width: 1800px" width="900px">
                        &nbsp;</td>
                </tr>
                <tr>
                    <td align="center" width="900px" class="auto-style3">
                        <asp:Button ID="btnSubmit" runat="server" OnClick="btnSubmit_Click" Text="Submit" CausesValidation="False" />
                        &nbsp;<asp:Button ID="btnReset" runat="server" CausesValidation="False" OnClick="btnReset_Click" Text="Reset" />
                    </td>
                </tr>
                <tr>
                    <td align="center" width="900px">&nbsp;</td>
                </tr>
            </table>

        </div>

    </form>
</body>
</html>
