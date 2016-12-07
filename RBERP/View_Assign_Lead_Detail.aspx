<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="View_Assign_Lead_Detail.aspx.cs" Inherits="RBERP.View_Assign_Lead_Detail" %>

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
            top: 50%;
            left: 30%;
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
         
         .lnkview {
        cursor: pointer;
    }
    </style>

    <script src="scripts/jquery-1.4.1.min.js" type="text/javascript"></script>   
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
            <table style="width: 100%;">
                <tr style="font-weight: bold; color: #000000">
                    <td align="center"
                        style="font-size: 11pt; font-family: Verdana; font-weight: bold">View Lead 
                    Detail</td>
                </tr>
                <tr>
                    <td align="center" style="font-size: 8pt" valign="top">&nbsp;</td>
                </tr>
                <tr>
                    <td align="center" style="font-size: 9pt" valign="top">
                        <asp:Panel ID="Pnlpropertylist" runat="server"
                            GroupingText="View Lead Detail" ScrollBars="Vertical" Height="600px"
                            ForeColor="#003366">
                            <table>
                                <tr>
                                    <td align="left">
                                        <asp:GridView ID="grdDetails" runat="server" AutoGenerateColumns="False"
                                            CellPadding="4" ForeColor="#333333" Width="850px" Font-Names="Verdana" DataKeyNames="Lead_Id" OnRowCommand="grdDetails_RowCommand">
                                            <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
                                            <Columns>
                                                <asp:TemplateField HeaderText="Sr.no">
                                                    <ItemTemplate>
                                                        <%# Container.DataItemIndex +1 %>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField HeaderText="Lead Id" ItemStyle-CssClass="lnkview">
                                                    <ItemTemplate>
                                                        <asp:LinkButton ID="lblleadid" runat="server" CommandName="ShowPopup"
                                                            CausesValidation="false" CommandArgument='<%#Eval("Lead_Id") %>' Text='<%#Eval("Lead_Id") %>'>
                                                        </asp:LinkButton>
                                                    </ItemTemplate>
                                                </asp:TemplateField>                                              
                                                <asp:BoundField DataField="name" HeaderText="Cust. Name" />
                                                <asp:BoundField DataField="mobile" HeaderText="Mobile No" />
                                                <asp:BoundField DataField="City_Name" HeaderText="City" />
                                                <asp:BoundField DataField="Product_Name" HeaderText="Product" />
                                                <asp:BoundField DataField="Lead_Status" HeaderText="Lead Status" />
                                                <asp:BoundField DataField="Remark" HeaderText="Remark" />

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
                            </table>
                        </asp:Panel>
                    </td>
                </tr>

            </table>
        </div>
        <div id="modalpopupstyle">
            <asp:Panel ID="panel_Commercial" runat="server" BackColor="#f7f6f3">
                <table cellpadding="4" cellspacing="2" style="width: 700px; height: 200px">
                    <tr>
                        <td class="web_dialog_title">View Lead History</td>
                        <td class="web_dialog_title align_right">
                            <asp:Button ID="btnClose" runat="server" Text="Close" CausesValidation="false" />
                        </td>
                    </tr>
                    <tr>
                        <td align="center" colspan="2">
                            <asp:GridView ID="grdHistory" runat="server" AutoGenerateColumns="False"
                                CellPadding="4" ForeColor="#333333" Width="600px" Font-Names="Verdana">
                                <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
                                <Columns>
                                    <asp:TemplateField HeaderText="Sr.no">
                                        <ItemTemplate>
                                            <%# Container.DataItemIndex +1 %>
                                        </ItemTemplate>
                                    </asp:TemplateField>
                                    <asp:BoundField DataField="Lead_Data_Id" HeaderText="History Id" />
                                    <asp:BoundField DataField="Lead_Id" HeaderText="Lead Id" />
                                    <asp:BoundField DataField="Lead_Status" HeaderText="Lead Status" />
                                    <asp:BoundField DataField="Remark" HeaderText="Remark" />
                                    <asp:BoundField DataField="Followup_Date" HeaderText="Followup Date" />
                                    <asp:BoundField DataField="Followup_Time" HeaderText="Followup Time" />
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
                    
                </table>
            </asp:Panel>
        </div>
    </form>
</body>
</html>
