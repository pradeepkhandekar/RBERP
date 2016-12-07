<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Bank_Pay_Out_Master.aspx.cs" Inherits="RBERP.Bank_Pay_Out_Master" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>

<style type="text/css">
    .style1 {
        width: 100%;
    }

    .lnkview {
        cursor: pointer;
    }

    .hide {
        display: none;
    }
</style>


<script type="text/javascript">
    var popupWindow = null;

    function ShowForm(Id) {
        var left = 300,
            top = 300,
            popupWindow = window.open("View_Playout_Detail.aspx?Id=" + Id , "UserListDialog", "width=900, height=400, resizable, top=" + top + ", left=" + left);
        // popupWindow.focus();
        return false;
    }
    function parent_disable() {
        if (popupWindow && !popupWindow.closed)
            popupWindow.focus();
    }
</script>
<body>
    <form id="form1" runat="server">
        <div>
            so<table class="auto-style1" align="center">
                <tr>
                    <td colspan="4" align="Center"><strong>Bank Pay Out Master</strong></td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td align="right">Select Bank</td>
                    <td align="left">
                        <asp:DropDownList ID="ddlbank" runat="server" Width="300px">
                        </asp:DropDownList>
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="ddlbank" ErrorMessage="Please Select Bank.." InitialValue="-1">*</asp:RequiredFieldValidator>
                    </td>
                    <td align="right">Select Product</td>
                    <td align="left">
                        <asp:DropDownList ID="ddlproduct" runat="server" Width="300px">
                        </asp:DropDownList>
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="ddlproduct" ErrorMessage="Please Select Product.." InitialValue="-1">*</asp:RequiredFieldValidator>
                    </td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td colspan="4" align="center">
                        <asp:Panel ID="pnlpayout" runat="server" GroupingText="PayOut Detail">
                            <table class="auto-style2">
                                <tr>
                                    <td align="left">Sr No.</td>
                                    <td align="center">From</td>
                                    <td align="center">To</td>
                                    <td align="center">Payout(%)</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <asp:TextBox ID="txtpayfrom1" runat="server"></asp:TextBox>
                                    </td>
                                    <asp:FilteredTextBoxExtender ID="FilteredTextBoxExtender1" runat="server" TargetControlID="txtpayfrom1" ValidChars="0123456789.,"></asp:FilteredTextBoxExtender>
                                    <td>
                                        <asp:TextBox ID="txtpayto1" runat="server"></asp:TextBox>
                                        <asp:FilteredTextBoxExtender ID="FilteredTextBoxExtender2" runat="server" TargetControlID="txtpayto1" ValidChars="0123456789.,"></asp:FilteredTextBoxExtender>
                                    </td>
                                    <td>
                                        <asp:TextBox ID="txtpayper1" runat="server"></asp:TextBox>
                                        <asp:FilteredTextBoxExtender ID="FilteredTextBoxExtender3" runat="server" TargetControlID="txtpayper1" ValidChars="0123456789.,"></asp:FilteredTextBoxExtender>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <asp:TextBox ID="txtpayfrom2" runat="server"></asp:TextBox>
                                        <asp:FilteredTextBoxExtender ID="FilteredTextBoxExtender4" runat="server" TargetControlID="txtpayfrom2" ValidChars="0123456789.,"></asp:FilteredTextBoxExtender>
                                    </td>
                                    <td>
                                        <asp:TextBox ID="txtpayto2" runat="server"></asp:TextBox>
                                        <asp:FilteredTextBoxExtender ID="FilteredTextBoxExtender5" runat="server" TargetControlID="txtpayfrom1" ValidChars="0123456789.,"></asp:FilteredTextBoxExtender>
                                    </td>
                                    <td>
                                        <asp:TextBox ID="txtpayper2" runat="server"></asp:TextBox>
                                        <asp:FilteredTextBoxExtender ID="FilteredTextBoxExtender6" runat="server" TargetControlID="txtpayper2" ValidChars="0123456789.,"></asp:FilteredTextBoxExtender>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                        <asp:TextBox ID="txtpayfrom3" runat="server"></asp:TextBox>
                                        <asp:FilteredTextBoxExtender ID="FilteredTextBoxExtender7" runat="server" TargetControlID="txtpayfrom3" ValidChars="0123456789.,"></asp:FilteredTextBoxExtender>
                                    </td>
                                    <td>
                                        <asp:TextBox ID="txtpayto3" runat="server"></asp:TextBox>
                                        <asp:FilteredTextBoxExtender ID="FilteredTextBoxExtender8" runat="server" TargetControlID="txtpayto3" ValidChars="0123456789.,"></asp:FilteredTextBoxExtender>
                                    </td>
                                    <td>
                                        <asp:TextBox ID="txtpayper3" runat="server"></asp:TextBox>
                                        <asp:FilteredTextBoxExtender ID="FilteredTextBoxExtender9" runat="server" TargetControlID="txtpayper3" ValidChars="0123456789.,"></asp:FilteredTextBoxExtender>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>
                                        <asp:TextBox ID="txtpayfrom4" runat="server"></asp:TextBox>
                                        <asp:FilteredTextBoxExtender ID="FilteredTextBoxExtender10" runat="server" TargetControlID="txtpayfrom4" ValidChars="0123456789.,"></asp:FilteredTextBoxExtender>
                                    </td>
                                    <td>
                                        <asp:TextBox ID="txtpayto4" runat="server"></asp:TextBox>
                                        <asp:FilteredTextBoxExtender ID="FilteredTextBoxExtender11" runat="server" TargetControlID="txtpayto4" ValidChars="0123456789.,"></asp:FilteredTextBoxExtender>
                                    </td>
                                    <td>
                                        <asp:TextBox ID="txtpayper4" runat="server"></asp:TextBox>
                                        <asp:FilteredTextBoxExtender ID="FilteredTextBoxExtender12" runat="server" TargetControlID="txtpayper4" ValidChars="0123456789.,"></asp:FilteredTextBoxExtender>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>
                                        <asp:TextBox ID="txtpayfrom5" runat="server"></asp:TextBox>
                                        <asp:FilteredTextBoxExtender ID="FilteredTextBoxExtender13" runat="server" TargetControlID="txtpayfrom5" ValidChars="0123456789.,"></asp:FilteredTextBoxExtender>
                                    </td>
                                    <td>
                                        <asp:TextBox ID="txtpayto5" runat="server"></asp:TextBox>
                                        <asp:FilteredTextBoxExtender ID="FilteredTextBoxExtender14" runat="server" TargetControlID="txtpayto5" ValidChars="0123456789.,"></asp:FilteredTextBoxExtender>
                                    </td>
                                    <td>
                                        <asp:TextBox ID="txtpayper5" runat="server"></asp:TextBox>
                                        <asp:FilteredTextBoxExtender ID="FilteredTextBoxExtender15" runat="server" TargetControlID="txtpayper5" ValidChars="0123456789.,"></asp:FilteredTextBoxExtender>
                                    </td>
                                </tr>
                            </table>
                        </asp:Panel>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style3"></td>
                    <td class="auto-style3"></td>
                    <td class="auto-style3"></td>
                    <td class="auto-style3"></td>
                </tr>
                <tr>
                    <td>Processing(%)</td>
                    <td>
                        <asp:TextBox ID="txtprocssper" runat="server"></asp:TextBox>
                        <asp:FilteredTextBoxExtender ID="FilteredTextBoxExtender16" runat="server" TargetControlID="txtprocssper" ValidChars="0123456789.,"></asp:FilteredTextBoxExtender>
                    </td>
                    <td>Flat Payout(%)</td>
                    <td>
                        <asp:TextBox ID="txtflat" runat="server"></asp:TextBox>
                        <asp:FilteredTextBoxExtender ID="txtflat_FilteredTextBoxExtender" runat="server" TargetControlID="txtflat" ValidChars="0123456789.,"></asp:FilteredTextBoxExtender>
                    </td>
                </tr>
                <tr>
                    <td colspan="4" align="center">
                        <asp:Button ID="btnsubmit" runat="server" Text="Submit" OnClick="btnsubmit_Click" />
                    </td>
                </tr>
                <tr>
                    <td colspan="4" align="center">
                        <asp:GridView ID="grdbank" runat="server" AutoGenerateColumns="False" CellPadding="4" ForeColor="#333333" OnRowDataBound="grdbank_RowDataBound">
                            <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
                            <Columns>
                                <asp:TemplateField HeaderText="Sr No">
                                    <ItemTemplate>
                                        <%#Container.DataItemIndex+1 %>
                                    </ItemTemplate>
                                </asp:TemplateField>
                                <%-- <asp:BoundField DataField="bank_name" HeaderText="Bank Name">
                            <ItemStyle HorizontalAlign="Left" />
                            </asp:BoundField>--%>
                                <asp:TemplateField HeaderText="Bank Name" ControlStyle-CssClass="lnkview">
                                    <ItemTemplate>
                                        <asp:HyperLink ID="hpLeadCnt1" runat="server" Text='<%# Eval("bank_name") %>' Font-Underline="True"></asp:HyperLink>
                                    </ItemTemplate>
                                    <ControlStyle CssClass="lnkview" />

                                    <ItemStyle HorizontalAlign="left" />
                                </asp:TemplateField>

                                <asp:BoundField DataField="product_name" HeaderText="Product Name">
                                    <ItemStyle HorizontalAlign="Left" />
                                </asp:BoundField>

                                 <asp:BoundField DataField="Id" HeaderText="Id">
                                    <HeaderStyle CssClass="hide" />
                                    <ItemStyle HorizontalAlign="Left" CssClass="hide" />
                                </asp:BoundField>
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
                <tr>
                    <td>&nbsp;</td>
                    <td>
                        <asp:ToolkitScriptManager ID="ToolkitScriptManager1" runat="server"></asp:ToolkitScriptManager>
                            
                    </td>
                    <td>&nbsp;</td>
                    <td>
                        <asp:ValidationSummary ID="ValidationSummary1" runat="server" ShowMessageBox="True" ShowSummary="False" />
                    </td>
                </tr>
            </table>
        </div>
    </form>
</body>
</html>
