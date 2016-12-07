<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Sub_Division_Master.aspx.cs" Inherits="RBERP.Sub_Division_Master" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script language="javascript" type="text/javascript" src="Code/BackOfficeModuleCode.js?0"></script>

    <style type="text/css">
        .style1 {
            width: 100%;
        }

        .web_dialog_title {
            border-bottom: solid 2px #336699;
            background-color: #336699;
            padding: 4px;
            color: White;
            font-weight: bold;
        }
        .web_dialog_title a {
                color: White;
                text-decoration: none;
            }

        .align_right {
            text-align: right;
        }

        #modalpopupstyle {
            position: fixed;
            /*top: 50%;*/
            left: 50%;
            margin-left: -190px;
            margin-top: -100px;
            background-color: #ffffff;
            border: 2px solid #336699;
            padding: 0px;
            z-index: 102;
            font-family: Verdana;
            font-size: 10pt;
            display: none;
        }
    </style>

    <script src="scripts/jquery-1.4.1.min.js" type="text/javascript"></script>
    <link href="Styles/Site.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript">
        function ShowPopup() {
            $('#modalpopupstyle').show();
            $('#<%=panel_Commercial.ClientID %>').show();
        }
        function HidePopup() {
            $('#modalpopupstyle').hide();
            $('#<%=panel_Commercial.ClientID %>').hide();
        }
        $(".btnClose").live('click', function () {
            HidePopup();
        });
    </script>
    <link href="Styles/Site.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <form id="form1" runat="server">
        <div>

            <table class="tbl" width="100%">
                <tr>
                    <td align="center" class="auto-style1">
                        <asp:Label ID="Label1" runat="server" Text="Sub Division Master"
                            Style="color: #0099FF; font-size: large; font-weight: 700;"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td align="center" class="auto-style1">
                        <hr />
                    </td>
                </tr>
                <tr>
                    <td align="center" class="auto-style1">&nbsp;</td>
                </tr>
                <tr>
                    <td align="center" class="auto-style1">
                        <table class="auto-style4">
                            <tr>
                                <td align="right">Select Division </td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:DropDownList ID="ddlDivision" runat="server" Width="200px">
                                    </asp:DropDownList>
                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="ddlDivision" ErrorMessage="Please Select Division..." ForeColor="Red" InitialValue="-1" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                                </td>
                            </tr>
                            <tr>
                                <td align="right">Sub Division</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtSubDivision" runat="server" Width="200px"></asp:TextBox>
                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="txtSubDivision" ErrorMessage="Please Enter Sub Division..." ForeColor="Red" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                                </td>
                            </tr>
                            <tr>
                                <td align="right">Is Active</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:CheckBox ID="chkIsActive" runat="server" Checked="True" />
                                </td>
                            </tr>
                            <tr>
                                <td align="center" colspan="3">
                                    <asp:Label ID="lblmsg" runat="server" ForeColor="Red"></asp:Label>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" colspan="3">
                                    <asp:ValidationSummary ID="ValidationSummary1" runat="server"
                                        ShowMessageBox="True" ShowSummary="False" Width="200px" ForeColor="Red" />
                                </td>
                            </tr>
                            <tr>
                                <td align="center" colspan="3">
                                    <asp:Button ID="btnSubmit" runat="server" Text="Submit" OnClick="btnSubmit_Click" />
                                    &nbsp;<asp:Button ID="btnReset" runat="server" CausesValidation="False" Text="Reset" OnClick="btnReset_Click" />
                                </td>
                            </tr>

                        </table>
                        <tr>
                            <td align="center">

                                <asp:GridView ID="GridView1" runat="server"
                                    AutoGenerateColumns="False" CellPadding="4" ForeColor="#333333" PageSize="5"
                                    CssClass="tbl" OnRowCommand="GridView1_RowCommand" DataKeyNames="Sub_Division_Id" AllowPaging="True" OnPageIndexChanging="GridView1_PageIndexChanging">
                                    <AlternatingRowStyle BackColor="White" />
                                    <Columns>

                                        <asp:TemplateField HeaderText="Sr No">
                                            <ItemTemplate>
                                                <%#Container.DataItemIndex+1 %>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:BoundField HeaderText="Sub Division Id" DataField="Sub_Division_Id"
                                            SortExpression="Sub_Division_Id" />
                                        <asp:BoundField HeaderText="Division Name" DataField="Division_Name"
                                            SortExpression="Division_Name" />
                                        <asp:BoundField HeaderText="Sub Division Name" DataField="Sub_Division_Name"
                                            SortExpression="Sub_Division_Name" />
                                        <asp:BoundField HeaderText="Is Active" DataField="Is_Active"
                                            SortExpression="Is_Active" />
                                        <asp:BoundField HeaderText="Created Date" DataField="Datetime_Added"
                                            SortExpression="Datetime_Added" />
                                        <asp:TemplateField HeaderText="Edit">
                                            <ItemTemplate>
                                                <asp:LinkButton ID="lblEdit" runat="server" CommandName="ShowPopup"
                                                    CausesValidation="false" CommandArgument='<%#Eval("Sub_Division_Id") %>'>Edit</asp:LinkButton>
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
                    </td>
                </tr>
            </table>


            <div id="modalpopupstyle">
                <asp:Panel ID="panel_Commercial" runat="server" BackColor="#f7f6f3">
                    <table cellpadding="4" cellspacing="2" style="width: 380px; height: 200px">
                        <tr>
                            <td class="web_dialog_title" colspan="2">Edit Sub Division</td>
                            <td class="web_dialog_title align_right">
                                <asp:Button ID="btnClose" runat="server" Text="Close" CausesValidation="false" />
                            </td>
                        </tr>
                        <tr>
                            <td align="right">Sub Division Id</td>
                            <td align="center" class="auto-style1">:</td>
                            <td align="left">
                                <asp:Label ID="lblSubDivisionId" runat="server"></asp:Label>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">Division Name</td>
                            <td align="center" class="auto-style1">:</td>
                            <td align="left">
                                <asp:DropDownList ID="ddlDiv" runat="server" Width="200px">
                                </asp:DropDownList>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">Sub Division</td>
                            <td align="center" class="auto-style1">:</td>
                            <td align="left">
                                <asp:TextBox ID="txtSubDiv" runat="server" Width="200px"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">Is Active</td>
                            <td align="center" class="auto-style1">:</td>
                            <td align="left">
                                <asp:CheckBox ID="chkIsAct" runat="server" Checked="True" />
                            </td>
                        </tr>
                        <tr>
                            <td align="center" colspan="3">
                                <asp:Button ID="btnUpdate" runat="server" OnClick="btnUpdate_Click" Text="Update" CausesValidation="False" />
                            </td>
                        </tr>
                    </table>
                </asp:Panel>
            </div>
        </div>
    </form>
</body>
</html>
