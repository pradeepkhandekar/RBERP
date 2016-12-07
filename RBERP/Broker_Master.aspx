<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Broker_Master.aspx.cs" Inherits="RBERP.Broker_Master" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


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
            top: 30%;
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

        function SelectAllCheckboxes(spanChk) {
            // Added as ASPX uses SPAN for checkbox
            var oItem = spanChk.children;
            var theBox = (spanChk.type == "checkbox") ? spanChk : spanChk.children.item[0];
            var grdControl = document.getElementById('<% = gvBrokerProd.ClientID %>');
            xState = theBox.checked;

            if (grdControl == null) return false;
            var chkRemove = "chk";
            var Inputs = grdControl.getElementsByTagName("input");

            for (var n = 0; n < Inputs.length; ++n) {
                if (Inputs[n].type == 'checkbox' && Inputs[n].id.indexOf(chkRemove, 0) >= 0) {
                    if (xState == true)
                        Inputs[n].checked = true;
                    else
                        Inputs[n].checked = false;
                }
            }
        }
    </script>  
</head>
<body>
    <form id="form1" runat="server">
        <div>

            <table align="center" class="style1">
                <tr>
                    <td colspan="3" align="center"><strong>Broker Master</strong></td>
                </tr>
                <tr>
                    <td align="center" colspan="3">&nbsp;</td>

                </tr>
                <tr>
                    <td align="center" colspan="3">
                        <table width="800px">
                            <tr>
                                <td align="right">Broker Name</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtbroker" runat="server" Width="250px"></asp:TextBox>
                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="txtbroker" ErrorMessage="Please Enter Broker Name..." ForeColor="Red" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                                </td>
                            </tr>
                            <tr>
                                <td align="right">Contact No</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtcontact" runat="server" Width="250px"></asp:TextBox>
                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ControlToValidate="txtcontact" ErrorMessage="Please Enter Contact No..." ForeColor="Red" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                                </td>
                            </tr>
                            <tr>
                                <td align="right">PAN No</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtPAN" runat="server" Width="250px"></asp:TextBox>
                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="txtPAN" ErrorMessage="Please Enter PAN No..." ForeColor="Red" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                                </td>
                            </tr>
                            <tr>
                                <td align="right">Email Id</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtEmail" runat="server" Width="250px"></asp:TextBox>
                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator5" runat="server" ControlToValidate="txtEmail" ErrorMessage="Please Enter Email Id..." ForeColor="Red" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                                </td>
                            </tr>
                            <tr>
                                <td align="right">&nbsp;Assign Employee</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:DropDownList ID="ddlEmployee" runat="server" Width="250px">
                                    </asp:DropDownList>
                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" ControlToValidate="ddlEmployee" ErrorMessage="Please Select Emp Code..." ForeColor="Red" SetFocusOnError="True" InitialValue="-1">*</asp:RequiredFieldValidator>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" colspan="3">&nbsp;</td>
                            </tr>
                            <tr>
                                <td align="center" colspan="3">
                                    <asp:Panel ID="Panel1" runat="server" Height="250px" ScrollBars="Vertical" Width="600px">

                                        <asp:GridView ID="gvBrokerProd" runat="server" AutoGenerateColumns="False" CellPadding="4" Font-Size="9pt" ForeColor="#333333">
                                            <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
                                            <Columns>
                                                <asp:TemplateField HeaderText="Sr No">
                                                    <ItemTemplate>
                                                        <%#Container.DataItemIndex+1 %>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:BoundField DataField="Product_Id" HeaderText="Product Id">
                                                    <ItemStyle HorizontalAlign="Left" />
                                                </asp:BoundField>
                                                <asp:BoundField DataField="Product_Name" HeaderText="Product Name">
                                                    <ItemStyle HorizontalAlign="Left" />
                                                </asp:BoundField>
                                                <asp:TemplateField HeaderText="Payout %">
                                                    <ItemTemplate>
                                                        <asp:TextBox ID="txtPayoutper" runat="server" Text='<%# Eval("Payoutper") %>' Width="80px"></asp:TextBox>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField HeaderText="Select">
                                                    <ItemTemplate>
                                                        <asp:CheckBox ID="chk" runat="server" />
                                                    </ItemTemplate>
                                                    <HeaderTemplate>
                                                        <input id="Checkbox2" runat="server" name="CheckAll" onclick="SelectAllCheckboxes(this)"
                                                            type="checkbox" />
                                                    </HeaderTemplate>
                                                    <HeaderStyle ForeColor="White" />
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

                                    </asp:Panel>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" colspan="3">
                                    <asp:Label ID="lblmsg" runat="server" Width="300px"></asp:Label>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" colspan="3">
                                    <asp:ValidationSummary ID="ValidationSummary1" runat="server" ForeColor="Red" ShowMessageBox="True" Width="250px" ShowSummary="False" />
                                </td>
                            </tr>
                            <tr>
                                <td align="center" colspan="3">
                                    <asp:Button ID="btnsubmit" runat="server" OnClick="btnsubmit_Click" Text="Submit" />
                                    &nbsp;<asp:Button ID="btnreset" runat="server" OnClick="btnreset_Click" Text="Reset" CausesValidation="False" />
                                </td>
                            </tr>
                        </table>
                    </td>

                </tr>

                <tr>
                    <td align="center" colspan="3">&nbsp;</td>
                </tr>

                <tr>
                    <td align="center" colspan="3">
                        <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" CellPadding="4" Font-Size="11pt" ForeColor="#333333" DataKeyNames="Broker_Id" OnPageIndexChanging="GridView1_PageIndexChanging" OnRowCommand="GridView1_RowCommand">
                            <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
                            <Columns>
                                <asp:TemplateField HeaderText="Sr No">
                                    <ItemTemplate>
                                        <%#Container.DataItemIndex+1 %>
                                    </ItemTemplate>
                                </asp:TemplateField>
                                <asp:BoundField DataField="Broker_Id" HeaderText="Broker Id">
                                    <ItemStyle HorizontalAlign="Left" />
                                </asp:BoundField>
                                <asp:BoundField DataField="Broker_Name" HeaderText="Broker Name">
                                    <ItemStyle HorizontalAlign="Left" />
                                </asp:BoundField>
                                <asp:BoundField DataField="contact_no" HeaderText="Contact No">
                                    <ItemStyle HorizontalAlign="Left" />
                                </asp:BoundField>
                                  <asp:BoundField DataField="PAN_no" HeaderText="PAN">
                                    <ItemStyle HorizontalAlign="Center" />
                                </asp:BoundField>
                                <asp:BoundField DataField="Email_Id" HeaderText="Email Id">
                                    <ItemStyle HorizontalAlign="Left" />
                                </asp:BoundField>
                                <asp:BoundField DataField="Emp_Name" HeaderText="Assign Employee">
                                    <ItemStyle HorizontalAlign="Left" />
                                </asp:BoundField>                              
                                <asp:TemplateField HeaderText="Edit">
                                    <ItemTemplate>
                                        <asp:LinkButton ID="lblEdit" runat="server" CommandName="ShowPopup"
                                            CausesValidation="false" CommandArgument='<%#Eval("Broker_Id") %>'>Edit</asp:LinkButton>
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

                <tr>
                    <td align="right">&nbsp;</td>
                    <td>&nbsp;</td>
                    <td align="left">&nbsp;</td>

                </tr>
            </table>

            <div id="modalpopupstyle">
                <asp:Panel ID="panel_Commercial" runat="server" BackColor="#f7f6f3">
                    <table cellpadding="4" cellspacing="2" style="width: 600px; height: 200px">
                        <tr>
                            <td class="web_dialog_title" colspan="2">Edit Broker Master</td>
                            <td class="web_dialog_title align_right">
                                <asp:Button ID="btnClose" runat="server" Text="Close" CausesValidation="false" />
                            </td>
                        </tr>
                        <tr>
                            <td align="right">Broker Id</td>
                            <td align="center">:</td>
                            <td align="left">
                                <asp:Label ID="lblBrokerId" runat="server"></asp:Label>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">Broker Name</td>
                            <td align="center">:</td>
                            <td align="left">
                                <asp:TextBox ID="txtBrokerName" runat="server" Width="200px"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">Contact No</td>
                            <td align="center">:</td>
                            <td align="left">
                                <asp:TextBox ID="txtContactNo" runat="server" Width="200px"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">PAN No</td>
                            <td align="center">:</td>
                            <td align="left">
                                <asp:TextBox ID="txtPANNo" runat="server" Width="200px"></asp:TextBox>
                            </td>
                        </tr>
                         <tr>
                            <td align="right">Email Id</td>
                            <td align="center">:</td>
                            <td align="left">
                                <asp:TextBox ID="txtEmailid" runat="server" Width="200px"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">Employee</td>
                            <td align="center">:</td>
                            <td align="left">
                                <asp:DropDownList ID="ddlEmp" runat="server" Width="200px">
                                </asp:DropDownList>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" colspan="3">
                                <asp:Panel ID="Panel2" runat="server" Height="250px" ScrollBars="Vertical" Width="600px">
                                    <asp:GridView ID="gvbpchild" runat="server" AutoGenerateColumns="False" CellPadding="4" Font-Size="9pt" ForeColor="#333333" OnRowDataBound="gvbpchild_RowDataBound">
                                        <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
                                        <Columns>
                                            <asp:TemplateField HeaderText="Sr No">
                                                <ItemTemplate>
                                                    <%#Container.DataItemIndex+1 %>
                                                </ItemTemplate>
                                            </asp:TemplateField>
                                            <asp:BoundField DataField="Product_Id" HeaderText="Product Id">
                                                <ItemStyle HorizontalAlign="Left" />
                                            </asp:BoundField>
                                            <asp:BoundField DataField="Product_Name" HeaderText="Product Name">
                                                <ItemStyle HorizontalAlign="Left" />
                                            </asp:BoundField>
                                            <asp:TemplateField HeaderText="Payout %">
                                                <ItemTemplate>
                                                    <asp:TextBox ID="txtPayoutper" runat="server" Text='<%# Eval("Payout") %>' Width="80px"></asp:TextBox>
                                                </ItemTemplate>
                                            </asp:TemplateField>
                                            <asp:TemplateField HeaderText="Select">
                                                <ItemTemplate>
                                                    <asp:CheckBox ID="chk" runat="server" />
                                                </ItemTemplate>
                                                <HeaderTemplate>
                                                    <input id="Checkbox2" runat="server" name="CheckAll" onclick="SelectAllCheckboxes(this)"
                                                        type="checkbox" />
                                                </HeaderTemplate>
                                                <HeaderStyle ForeColor="White" />
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
                                </asp:Panel>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" colspan="3">
                                <asp:Button ID="btnUpdate" runat="server" CausesValidation="False" OnClick="btnUpdate_Click" Text="Update" />
                            </td>
                        </tr>
                    </table>
                </asp:Panel>
            </div>
        </div>
    </form>
</body>
</html>
