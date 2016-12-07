<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Bank_Product_Mapping.aspx.cs" Inherits="RBERP.Bank_Product_Mapping" %>



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
                        <asp:Label ID="Label1" runat="server" Text="Bank Product Mapping"
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
                      
                    </td>
                </tr>
                <tr>
                    <td align="center" class="auto-style1">
                        <table width="800px">
                            <tr>
                                <td align="right">Select Bank </td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:DropDownList ID="ddlBank" runat="server" Width="200px">
                                    </asp:DropDownList>
                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="ddlBank" ErrorMessage="Please Select Bank..." ForeColor="Red" InitialValue="-1" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                                </td>
                                <td align="right">Select City </td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:DropDownList ID="ddlCity" runat="server" Width="200px">
                                    </asp:DropDownList>
                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="ddlCity" ErrorMessage="Please Select City..." ForeColor="Red" InitialValue="-1" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                                </td>
                            </tr>
                            <tr>
                                <td align="right">Product</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:DropDownList ID="ddlProduct" runat="server" Width="200px">
                                    </asp:DropDownList>
                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ControlToValidate="ddlProduct" ErrorMessage="Please Select Product..." ForeColor="Red" InitialValue="-1" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                                   
                                </td>
                                <td align="right">Contact Person</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtContactPerson" runat="server" Width="200px"></asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td align="right">Mobile No</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtMobileNo" runat="server" Width="200px"></asp:TextBox>
                                </td>
                                <td align="right">Designation</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtDesignation" runat="server" Width="200px"></asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td align="right">LandLine No</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtLandlineNo" runat="server" Width="200px"></asp:TextBox>
                                </td>
                                <td align="right">Email Id</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtEmailId" runat="server" Width="200px"></asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td align="right">Fax No</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtFaxNo" runat="server" Width="200px"></asp:TextBox>
                                </td>
                                <td align="right">&nbsp;</td>
                                <td align="center">&nbsp;</td>
                                <td align="left">
                                    &nbsp;</td>
                            </tr>
                            <tr>
                                <td align="center" colspan="6">&nbsp;</td>
                            </tr>
                            <tr>
                                <td align="center" colspan="6">
                                    <asp:Label ID="lblmsg" runat="server" ForeColor="Red"></asp:Label>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" colspan="6">
                                    <asp:ValidationSummary ID="ValidationSummary1" runat="server"
                                        ShowMessageBox="True" ShowSummary="False" Width="200px" ForeColor="Red" />
                                </td>
                            </tr>
                            <tr>
                                <td align="center" colspan="6">
                                    <asp:Button ID="btnSubmit" runat="server" Text="Submit" OnClick="btnSubmit_Click" />
                                    &nbsp;<asp:Button ID="btnReset" runat="server" CausesValidation="False" Text="Reset" OnClick="btnReset_Click" />
                                </td>
                            </tr>

                        </table>
                        <tr>
                            <td align="center">

                                <asp:GridView ID="GridView1" runat="server"
                                    AutoGenerateColumns="False" CellPadding="4" ForeColor="#333333" PageSize="5"
                                    CssClass="tbl" OnRowCommand="GridView1_RowCommand" DataKeyNames="Map_Id" AllowPaging="True" OnPageIndexChanging="GridView1_PageIndexChanging">
                                    <AlternatingRowStyle BackColor="White" />
                                    <Columns>

                                        <asp:TemplateField HeaderText="Sr No">
                                            <ItemTemplate>
                                                <%#Container.DataItemIndex+1 %>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:BoundField HeaderText="Map Id" DataField="Map_Id"
                                            SortExpression="Map_Id" />
                                        <asp:BoundField HeaderText="Bank Name" DataField="Bank_Name"
                                            SortExpression="Bank_Name" />
                                        <asp:BoundField HeaderText="City" DataField="City_Name"
                                            SortExpression="City_Name" />
                                         <asp:BoundField HeaderText="Product" DataField="Product_Name"
                                            SortExpression="Product_Name" />
                                        <asp:BoundField HeaderText="Contact Person" DataField="Contact_Person"
                                            SortExpression="Contact_Person" />
                                        <asp:BoundField HeaderText="Designation" DataField="Designation"
                                            SortExpression="Designation" />
                                         <asp:BoundField HeaderText="Mobile No" DataField="Mobile_No"
                                            SortExpression="Mobile_No" />
                                          <asp:BoundField HeaderText="Landline No" DataField="Landline_No"
                                            SortExpression="Landline_No" />
                                           <asp:BoundField HeaderText="FAX" DataField="Fax_No"
                                            SortExpression="Fax_No" />
                                         <asp:BoundField HeaderText="Email Id" DataField="Email_Id"
                                            SortExpression="Email_Id" />
                                        <asp:TemplateField HeaderText="Edit">
                                            <ItemTemplate>
                                                <asp:LinkButton ID="lblEdit" runat="server" CommandName="ShowPopup"
                                                    CausesValidation="false" CommandArgument='<%#Eval("Map_Id") %>'>Edit</asp:LinkButton>
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
                    <table cellpadding="4" cellspacing="2" style="width: 700px; height: 200px">
                        <tr>
                            <td class="web_dialog_title" colspan="5">Edit Bank Product Mapping</td>
                            <td class="web_dialog_title align_right">
                                <asp:Button ID="btnClose" runat="server" Text="Close" CausesValidation="false" />
                            </td>
                        </tr>
                        <tr>
                            <td align="right">Map Id</td>
                            <td align="center" class="auto-style1">:</td>
                            <td align="left">
                                <asp:Label ID="lblMapId" runat="server"></asp:Label>
                            </td>
                              <td align="right"></td>
                            <td align="center" class="auto-style1"></td>
                            <td align="left">
                                
                            </td>
                        </tr>

                        <tr>
                            <td align="right">Bank Name</td>
                            <td align="center" class="auto-style1">:</td>
                            <td align="left">
                               <asp:DropDownList ID="ddlbName" runat="server" Width="200px">
                                </asp:DropDownList>
                            </td>
                              <td align="right">City</td>
                            <td align="center" class="auto-style1">:</td>
                            <td align="left">
                                
                                <asp:DropDownList ID="ddlcName" runat="server" Width="200px">
                                </asp:DropDownList>
                                
                            </td>
                        </tr>
                        <tr>
                            <td align="right">Product</td>
                            <td align="center" class="auto-style1">:</td>
                            <td align="left">
                                <asp:DropDownList ID="ddlpName" runat="server" Width="200px">
                                </asp:DropDownList>
                            </td>
                              <td align="right">Contact Person</td>
                            <td align="center" class="auto-style1">:</td>
                            <td align="left">
                                <asp:TextBox ID="txtcPerson" runat="server" Width="200px"></asp:TextBox>
                            </td>
                        </tr>
                         <tr>
                            <td align="right">Designation</td>
                            <td align="center" class="auto-style1">:</td>
                            <td align="left">
                               
                                <asp:TextBox ID="txtDesign" runat="server" Width="200px"></asp:TextBox>
                               
                            </td>
                              <td align="right">Mobile No</td>
                            <td align="center" class="auto-style1">:</td>
                            <td align="left">
                                <asp:TextBox ID="txtmNo" runat="server" Width="200px"></asp:TextBox>
                             </td>
                        </tr>
                        <tr>
                            <td align="right">Landline No</td>
                            <td align="center" class="auto-style1">:</td>
                            <td align="left">
                              
                                <asp:TextBox ID="txtlandNo" runat="server" Width="200px"></asp:TextBox>
                              
                            </td>
                              <td align="right">Fax No</td>
                            <td align="center" class="auto-style1">:</td>
                            <td align="left">
                                <asp:TextBox ID="txtfNo" runat="server" Width="200px"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">Email Id</td>
                            <td align="center" class="auto-style1">:</td>
                            <td align="left">
                                <asp:TextBox ID="txteId" runat="server" Width="200px"></asp:TextBox>
                            </td>
                            <td align="right">&nbsp;</td>
                            <td align="center" class="auto-style1">&nbsp;</td>
                            <td align="left">&nbsp;</td>
                        </tr>
                        <tr>
                            <td align="center" colspan="6">
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
