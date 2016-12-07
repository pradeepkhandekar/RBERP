<%@ Page Language="C#" AutoEventWireup="true" Inherits="Menu_Edit" CodeBehind="Menu_Edit.aspx.cs" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>


<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    
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
            top: 50%;
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
</head>
<body>
    <form id="form1" runat="server">
        <div>

            <table class="tbl" width="100%">
                <tr>
                    <td align="center">
                        <asp:Label ID="Label1" runat="server" Font-Bold="True" Font-Size="22pt"
                            ForeColor="#0066FF" Text="Edit Menu"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td align="right">
                        <hr />
                    </td>
                </tr>

                <tr>
                    <td align="center">&nbsp;</td>
                </tr>

                <tr>
                    <td align="center">
                        <table class="auto-style1">
                            <tr>
                                <td align="right">Module Name</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:DropDownList ID="ddlmodule" runat="server" AutoPostBack="True"
                                        OnSelectedIndexChanged="ddlmodule_SelectedIndexChanged">
                                    </asp:DropDownList>
                                </td>
                                <td align="right">Menu Name</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:DropDownList ID="ddlmenu" runat="server">
                                    </asp:DropDownList>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" colspan="6">&nbsp;</td>
                            </tr>
                            <tr>
                                <td align="center" colspan="6">
                                    <asp:Button ID="btnShow" runat="server" OnClick="btnShow_Click" Text="Show Menu" CausesValidation="False" />
                                    &nbsp;<asp:Button ID="btnReset" runat="server" Text="Reset" CausesValidation="False" OnClick="btnReset_Click" />
                                </td>
                            </tr>
                            <tr>
                                <td align="center" colspan="6">
                                    <asp:Label ID="lblmsg" runat="server" ForeColor="Red"></asp:Label>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td align="center">
                        <asp:GridView ID="GridView1" runat="server" AllowPaging="True"
                            AutoGenerateColumns="False" CellPadding="4" ForeColor="#333333" PageSize="10"
                            CssClass="tbl" Width="528px" OnPageIndexChanging="GridView1_PageIndexChanging" 
                            DataKeyNames="MenuMasterID" OnRowCommand="GridView1_RowCommand">
                            <AlternatingRowStyle BackColor="White" />
                            <Columns>

                                <asp:TemplateField HeaderText="Sr No">
                                    <ItemTemplate>
                                        <%#Container.DataItemIndex+1 %>
                                    </ItemTemplate>
                                </asp:TemplateField>
                                <asp:BoundField HeaderText="Menu Id" DataField="MenuMasterID"
                                    SortExpression="MenuMasterID" />
                                <asp:BoundField HeaderText="Menu Name" DataField="Module_Name"
                                    SortExpression="Module_Name" />
                                <asp:BoundField HeaderText="Parent Name" DataField="Menu_Name"
                                    SortExpression="Menu_Name" />
                                <asp:BoundField HeaderText="Sequence" DataField="Menu_Sequence"
                                    SortExpression="Menu_Sequence" />
                                <asp:BoundField DataField="Menu_Type" HeaderText="Menu Type" SortExpression="Menu_Type" />
                                <asp:BoundField DataField="Menu_URL" HeaderText="Menu URL" SortExpression="Menu_URL" />
                                <asp:BoundField DataField="menu_display" HeaderText="Display Menu" SortExpression="menu_display" />
                                <asp:TemplateField HeaderText="Edit">
                                    <ItemTemplate>
                                        <asp:LinkButton ID="lblEdit" runat="server" CommandName="ShowPopup"
                                            CausesValidation="false" CommandArgument="<%# ((GridViewRow) Container).RowIndex %>">Edit</asp:LinkButton>
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
                    <td align="center"></td>
                </tr>

            </table>

        </div>

        <div id="modalpopupstyle">
            <asp:Panel ID="panel_Commercial" runat="server" BackColor="#f7f6f3">
                <table cellpadding="4" cellspacing="2" style="width: 600px; height: 200px">
                    <tr>
                        <td class="web_dialog_title" colspan="5">Edit Menu</td>
                        <td class="web_dialog_title align_right">
                            <asp:Button ID="btnClose" runat="server" Text="Close" CausesValidation="false" />
                        </td>
                    </tr>
                    <tr>
                        <td align="right">Menu Id</td>
                        <td align="center">:</td>
                        <td align="left">
                            <asp:Label ID="lblMenuId" runat="server"></asp:Label>
                        </td>
                        <td align="right">Menu Sequence</td>
                        <td align="center">:</td>
                        <td align="left">
                            <asp:DropDownList ID="ddlMenuSequence" runat="server" Width="120px">
                                <asp:ListItem Value="-1">-- Select One --</asp:ListItem>
                                <asp:ListItem>0</asp:ListItem>
                                <asp:ListItem>1</asp:ListItem>
                                <asp:ListItem>2</asp:ListItem>
                                <asp:ListItem>3</asp:ListItem>
                                <asp:ListItem>4</asp:ListItem>
                                <asp:ListItem>5</asp:ListItem>
                                <asp:ListItem>6</asp:ListItem>
                                <asp:ListItem>7</asp:ListItem>
                                <asp:ListItem>8</asp:ListItem>
                                <asp:ListItem>9</asp:ListItem>
                                <asp:ListItem>10</asp:ListItem>
                                <asp:ListItem>11</asp:ListItem>
                                <asp:ListItem>12</asp:ListItem>
                                <asp:ListItem>13</asp:ListItem>
                                <asp:ListItem>14</asp:ListItem>
                                <asp:ListItem>15</asp:ListItem>
                                <asp:ListItem>16</asp:ListItem>
                                <asp:ListItem>17</asp:ListItem>
                                <asp:ListItem>18</asp:ListItem>
                                <asp:ListItem>19</asp:ListItem>
                                <asp:ListItem>20</asp:ListItem>
                            </asp:DropDownList>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ControlToValidate="ddlMenuSequence" ErrorMessage="Please Select Menu Sequence..." ForeColor="Red" InitialValue="-1" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">ModuleName</td>
                        <td align="center">:</td>
                        <td align="left">
                            <asp:TextBox ID="txtModuleNm" runat="server" ReadOnly="True" Width="148px"></asp:TextBox>
                        </td>
                        <td align="right">Menu Name</td>
                        <td align="center">:</td>
                        <td align="left">
                            <asp:TextBox ID="txtMenuNm" runat="server" ReadOnly="True" Width="200px"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">Menu Type</td>
                        <td align="center">:</td>
                        <td align="left">
                            <asp:DropDownList ID="ddlMenuType" runat="server" Width="148px">
                                <asp:ListItem Value="0">-- Select One --</asp:ListItem>
                                <asp:ListItem>URL</asp:ListItem>
                                <asp:ListItem>POP</asp:ListItem>
                            </asp:DropDownList>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" ControlToValidate="ddlMenuType" ErrorMessage="Please Select Menu Type..." ForeColor="Red" InitialValue="-1" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                        </td>
                        <td align="right">Menu Action</td>
                        <td align="center">:</td>
                        <td align="left">
                            <asp:TextBox ID="txtlink" runat="server" Width="200px"></asp:TextBox>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator6" runat="server" ControlToValidate="txtlink" ErrorMessage="Please Enter Menu Action..." ForeColor="Red" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">Menu Display</td>
                        <td align="center">:</td>
                        <td align="left">
                            <asp:TextBox ID="txtmenudisplay" runat="server" Width="149px"></asp:TextBox>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator5" runat="server" ControlToValidate="txtmenudisplay" ErrorMessage="Please Enter Menu Display..." ForeColor="Red" SetFocusOnError="True">*</asp:RequiredFieldValidator></td>
                        <td align="right">&nbsp;</td>
                        <td align="center">&nbsp;</td>
                        <td align="left">&nbsp;</td>
                    </tr>
                     <tr>
                        <td align="center" colspan="6">
                            <asp:ValidationSummary ID="ValidationSummary1" runat="server" ShowMessageBox="True" ShowModelStateErrors="True" Width="250px" ShowSummary="False" />
                          </td>
                    </tr>

                    <tr>
                        <td align="center" colspan="6">
                            <asp:Button ID="Button1" runat="server" OnClick="btnUpdate_Click" Text="Update" CausesValidation="False" />
                        </td>
                    </tr>
                </table>
            </asp:Panel>
        </div>
    </form>
</body>
</html>
