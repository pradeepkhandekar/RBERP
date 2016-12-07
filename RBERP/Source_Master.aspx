<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Source_Master.aspx.cs" Inherits="RBERP.Source_Master" %>

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
        .tbl {}
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
                        <asp:Label ID="Label1" runat="server" Text="Source Master"
                            Style="color: #0099FF; font-size: large; font-weight: 700;"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td align="center" class="auto-style1">
                        <hr />
                    </td>
                </tr>
                <tr>
                    <td align="center" class="auto-style1">
                        <table class="auto-style4">
                            <tr>
                                <td align="right">Sub Division</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtsource" runat="server" Width="200px"></asp:TextBox>
                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="txtsource" ErrorMessage="Please Enter Source.." ForeColor="Red" SetFocusOnError="True">*</asp:RequiredFieldValidator>
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
                                    AutoGenerateColumns="False" CellPadding="4" ForeColor="#333333" PageSize="20"
                                    CssClass="tbl" OnRowCommand="GridView1_RowCommand" DataKeyNames="source_id" AllowPaging="True" OnPageIndexChanging="GridView1_PageIndexChanging" Width="680px">
                                    <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
                                    <Columns>

                                        <asp:TemplateField HeaderText="Sr No">
                                            <ItemTemplate>
                                                <%#Container.DataItemIndex+1 %>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:BoundField HeaderText="Source Id" DataField="source_id"
                                            SortExpression="source_id" />
                                        <asp:BoundField HeaderText="Source Name" DataField="Source_Name"
                                            SortExpression="Source_Name" />
                                       
                                        <asp:BoundField HeaderText="Is Active" DataField="Is_Active"
                                            SortExpression="Is_Active" />
                                        <asp:BoundField HeaderText="Created Date" DataField="Datetime_Added"
                                            SortExpression="Datetime_Added" />
                                        <asp:TemplateField HeaderText="Edit" Visible="False">
                                            <ItemTemplate>
                                                <asp:LinkButton ID="lblEdit" runat="server" CommandName="ShowPopup"
                                                    CausesValidation="false" CommandArgument='<%#Eval("source_id") %>'>Edit</asp:LinkButton>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                    </Columns>
                                    <EditRowStyle BackColor="#999999" />
                                    <FooterStyle BackColor="#5D7B9D" Font-Bold="True" ForeColor="White" />
                                    <HeaderStyle BackColor="#5D7B9D" Font-Bold="True" ForeColor="White" />
                                    <PagerStyle BackColor="#284775" ForeColor="White" HorizontalAlign="Center" />
                                    <RowStyle BackColor="#F7F6F3" ForeColor="#333333" />
                                    <SelectedRowStyle BackColor="#E2DED6" Font-Bold="True" ForeColor="#333333" />
                                    <SortedAscendingCellStyle BackColor="#E9E7E2" />
                                    <SortedAscendingHeaderStyle BackColor="#506C8C" />
                                    <SortedDescendingCellStyle BackColor="#FFFDF8" />
                                    <SortedDescendingHeaderStyle BackColor="#6F8DAE" />
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
                            <td align="right">Source Id</td>
                            <td align="center" class="auto-style1">:</td>
                            <td align="left">
                                <asp:Label ID="lblsourceId" runat="server"></asp:Label>
                            </td>
                        </tr>
                        
                        <tr>
                            <td align="right">Source Name</td>
                            <td align="center" class="auto-style1">:</td>
                            <td align="left">
                                <asp:TextBox ID="txtesource" runat="server" Width="200px"></asp:TextBox>
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
