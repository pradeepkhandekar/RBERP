<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Daily_Planning.aspx.cs" Inherits="RBERP.Daily_Planning" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script language="javascript" type="text/javascript" src="Code/BackOfficeModuleCode.js?0"></script>
    <style type="text/css">
        .style1 {
            width: 100%;
        }

        .style3 {
        }
    </style>
    <link href="Styles/Site.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:ToolkitScriptManager ID="ToolkitScriptManager1" runat="server">
            </asp:ToolkitScriptManager>
            <table class="style1">
                <tr>
                    <td align="center" width="900px">
                        <asp:Label ID="Label1" runat="server" Text="Daily Planning"
                            Style="color: #0099FF; font-size: large; font-weight: 700;"></asp:Label></td>
                    </td>
                </tr>
                <tr>
                    <td width="900px" align="center">
                        <hr />
                    </td>
                </tr>
                <tr>
                    <td align="center">&nbsp;</td>
                </tr>
                <tr>
                    <td align="center">
                        <table align="center" width="600px">
                            <tr>
                                <td align="right">Select Date</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtDate" runat="server" OnTextChanged="txtDate_TextChanged" AutoPostBack="True" Width="100px"></asp:TextBox>

                                    <asp:CalendarExtender ID="CalendarExtender1" runat="server" TargetControlID="txtDate"></asp:CalendarExtender>
                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ControlToValidate="txtDate" ErrorMessage="Please Select Date..." ForeColor="Red" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                                </td>
                                <td align="right">&nbsp;</td>
                                <td align="center">&nbsp;</td>
                                <td align="left">&nbsp;</td>
                            </tr>
                            <tr>
                                <td align="right">Start Time</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:DropDownList ID="ddlStartTime" runat="server" Width="120px">
                                    </asp:DropDownList>
                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" ControlToValidate="ddlStartTime" ErrorMessage="Please Select Start Time..." ForeColor="Red" SetFocusOnError="True" InitialValue="-1">*</asp:RequiredFieldValidator>
                                </td>
                                <td align="right">End Time</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:DropDownList ID="ddlEndTime" runat="server"  AutoPostBack="true" Width="120px" OnSelectedIndexChanged="ddlEndTime_SelectedIndexChanged">
                                    </asp:DropDownList>
                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator5" runat="server" ControlToValidate="ddlEndTime" ErrorMessage="Please Select End Time..." ForeColor="Red" SetFocusOnError="True" InitialValue="-1">*</asp:RequiredFieldValidator>
                                </td>
                            </tr>
                            <tr>
                                <td align="right">Remark</td>
                                <td align="center">:</td>
                                <td align="left" colspan="4">
                                    <asp:TextBox ID="txtRemark" runat="server" Height="100px" TextMode="MultiLine" Width="400px"></asp:TextBox>
                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="txtRemark" ErrorMessage="Please Enter Remark..." ForeColor="Red" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                                </td>
                            </tr>
                            <tr>
                                <td align="right">Achievement</td>
                                <td align="center">:</td>
                                <td align="left" colspan="4">
                                    <asp:TextBox ID="txtAchieve" runat="server" Height="100px" TextMode="MultiLine" Width="400px"></asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" colspan="6">
                                    <asp:Label ID="lblmsg" runat="server" ForeColor="Red"></asp:Label>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" colspan="6">
                                    <asp:ValidationSummary ID="ValidationSummary1" runat="server"
                                        ShowMessageBox="True" ShowSummary="False" Width="200px" />
                                </td>
                            </tr>
                            <tr>
                                <td align="center" colspan="6">
                                    <asp:Button ID="btnSubmit" runat="server" OnClick="btnSubmit_Click" Text="Submit" />
                                    &nbsp;<asp:Button ID="btnReset" runat="server" CausesValidation="False" OnClick="btnReset_Click" Text="Reset" />
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="center" width="900px" class="auto-style3">&nbsp;</td>
                </tr>
                <tr>
                    <td align="center" width="900px">

                        <asp:HiddenField ID="hdnGrid" runat="server" />
                        <asp:ModalPopupExtender ID="mpe_Commercial" runat="server" TargetControlID="hdnGrid"
                            BackgroundCssClass="modalBackground" PopupControlID="panel_Commercial"
                            CancelControlID="but_MPEClose">
                        </asp:ModalPopupExtender>

                    </td>
                </tr>
            </table>

        </div>
        <table class="style1">
            <tr>
                <td align="center"></td>
            </tr>
            <tr>
                <td align="center">

                    <asp:GridView ID="GridView3" runat="server"
                        AutoGenerateColumns="False" CellPadding="4" ForeColor="#333333" PageSize="5"
                        CssClass="tbl" OnRowCommand="GridView3_RowCommand" OnSelectedIndexChanged="GridView3_SelectedIndexChanged">
                        <AlternatingRowStyle BackColor="White" />
                        <Columns>

                            <asp:TemplateField HeaderText="Sr No">
                                <ItemTemplate>
                                    <%#Container.DataItemIndex+1 %>
                                </ItemTemplate>
                            </asp:TemplateField>
                            <asp:BoundField HeaderText="Employee Name" DataField="Emp_Name"
                                SortExpression="Emp_Name" />
                            <asp:BoundField HeaderText="Emp Code" DataField="Empcode"
                                SortExpression="Empcode" />
                              <asp:BoundField HeaderText="Plan Date" DataField="Plan_Date"
                                SortExpression="Plan_Date" />
                            <asp:BoundField HeaderText="Start Time" DataField="StartTime"
                                SortExpression="StartTime" />
                            <asp:BoundField HeaderText="End Time" DataField="EndTime"
                                SortExpression="EndTime" />
                            <asp:BoundField HeaderText="User Remark" DataField="User_Remark"
                                SortExpression="User_Remark" />
                            <asp:BoundField HeaderText="Achievement" DataField="User_Achieve"
                                SortExpression="User_Achieve" />                          
                            <asp:TemplateField HeaderText="Lead Count">
                                <ItemTemplate>
                                    <asp:LinkButton ID="lbLeadcntself" runat="server" Text='<%# Bind("Lead_Count") %>' CommandName="RowItemDuration"
                                        CausesValidation="false" CommandArgument="<%# ((GridViewRow) Container).RowIndex %>"></asp:LinkButton>
                                </ItemTemplate>
                            </asp:TemplateField>
                            <asp:CommandField HeaderText="Edit" ShowSelectButton="True" />
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
                <td align="center">&nbsp;</td>
            </tr>
            <tr>
                <td align="center">

                    <asp:GridView ID="GridView1" runat="server" AllowPaging="True"
                        AutoGenerateColumns="False" CellPadding="4" ForeColor="#333333"
                        CssClass="tbl" OnRowCommand="GridView1_RowCommand" OnPageIndexChanging="GridView1_PageIndexChanging" PageSize="20">
                        <AlternatingRowStyle BackColor="White" />
                        <Columns>

                            <asp:TemplateField HeaderText="Sr No">
                                <ItemTemplate>
                                    <%#Container.DataItemIndex+1 %>
                                </ItemTemplate>
                            </asp:TemplateField>
                            <asp:BoundField HeaderText="Employee Name" DataField="Emp_Name"
                                SortExpression="Emp_Name" />
                            <asp:BoundField HeaderText="Emp Code" DataField="Empcode"
                                SortExpression="Empcode" />
                            <asp:BoundField HeaderText="Plan Date" DataField="Plan_Date"
                                SortExpression="Plan_Date" />
                            <asp:BoundField HeaderText="Start Time" DataField="StartTime"
                                SortExpression="StartTime" />
                             <asp:BoundField HeaderText="End Time" DataField="EndTime"
                                SortExpression="EndTime" />
                            <asp:BoundField HeaderText="User Remark" DataField="User_Remark"
                                SortExpression="User_Remark" />
                             <asp:BoundField HeaderText="Achievement" DataField="User_Achieve"
                                SortExpression="User_Achieve" />
                             
                            <asp:TemplateField HeaderText="Lead Count">
                                <ItemTemplate>
                                    <asp:LinkButton ID="lbLeadcntteam" runat="server" Text='<%# Bind("Lead_Count") %>' CommandName="RowItemDuration"
                                        CausesValidation="false" CommandArgument="<%# ((GridViewRow) Container).RowIndex %>"></asp:LinkButton>
                                </ItemTemplate>
                            </asp:TemplateField>
                        </Columns>
                        <EditRowStyle BackColor="#2461BF" />
                        <FooterStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
                        <HeaderStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
                        <PagerSettings PageButtonCount="5" />
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
                <td align="center">&nbsp;</td>
            </tr>
            <tr>
                <td align="center">&nbsp;</td>
            </tr>
            <tr>
                <td align="center">
                    <asp:Panel ID="panel_Commercial" runat="server" BackColor="#f7f6f3">
                        <table cellpadding="4" cellspacing="2" class="txt" style="border: 3px Solid #003399; background-color: White; height: 347px; width: 649px;">
                            <tr>
                                <td align="center" bgcolor="gainsboro" style="height: 48px">
                                    <h3>Lead Details</h3>
                                </td>
                                <td align="center" bgcolor="gainsboro" style="height: 48px">
                                    <asp:Button ID="but_MPEClose" runat="server" Text="Close" CausesValidation="false" />

                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <table align="center" class="auto-style9">
                                        <tr>
                                            <td align="center">
                                                <asp:GridView ID="GridView2" runat="server"
                                                    AutoGenerateColumns="False" CellPadding="4" ForeColor="#333333" PageSize="5"
                                                    CssClass="tbl">
                                                    <AlternatingRowStyle BackColor="White" />
                                                    <Columns>
                                                        <asp:TemplateField HeaderText="Sr No">
                                                            <ItemTemplate>
                                                                <%#Container.DataItemIndex+1 %>
                                                            </ItemTemplate>
                                                        </asp:TemplateField>
                                                        <asp:BoundField HeaderText="Lead Id" DataField="Lead_Id"
                                                            SortExpression="Lead_Id" />
                                                        <asp:BoundField DataField="Lead_Status" HeaderText="Lead Status" />
                                                        <asp:BoundField HeaderText="Lead Remark" DataField="Lead_Remark"
                                                            SortExpression="Lead_Remark" />
                                                        <asp:BoundField HeaderText="Datetime Created" DataField="Created_On"
                                                            SortExpression="Created_On" />
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
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </asp:Panel>
                </td>
            </tr>
        </table>
    </form>
</body>
</html>
