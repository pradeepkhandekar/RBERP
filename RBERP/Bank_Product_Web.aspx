<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Bank_Product_Web.aspx.cs" Inherits="RBERP.Bank_Product_Web" %>



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
     <SCRIPT language=Javascript>
      function isNumberKeyDecimal(evt)
      {
         var charCode = (evt.which) ? evt.which : evt.keyCode;
         if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
            return false;    
         return true;
      }
   </SCRIPT>
   <SCRIPT language=Javascript>
      function isNumberKey(evt)
      {
         var charCode = (evt.which) ? evt.which : evt.keyCode;
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;    
         return true;
      }
   </SCRIPT>     
    <%--<script src="scripts/jquery-1.4.1.min.js" type="text/javascript"></script>
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

   
    </script>--%>
    <link href="Styles/Site.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <form id="form1" runat="server">
        <div>

            <table class="tbl" width="100%">
                <tr>
                    <td align="center" class="auto-style1">
                        <asp:Label ID="Label1" runat="server" Text="Bank Product Web"
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
                                <td align="right">Bank Id</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:Label ID="lblid" runat="server"></asp:Label>
                                </td>
                                <td align="right">&nbsp;</td>
                                <td align="center">&nbsp;</td>
                                <td align="left">
                                    &nbsp;</td>
                            </tr>
                            <tr>
                                <td align="right">Select Bank </td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:DropDownList ID="ddlBank" runat="server" Width="200px">
                                    </asp:DropDownList>
                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
                                        ControlToValidate="ddlBank" ErrorMessage="Please Select Bank..." ForeColor="Red" 
                                        InitialValue="-1" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                                </td>
                                <td align="right">Min Loan Amount </td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtMinLAmt" onkeypress="return isNumberKeyDecimal(event)" runat="server" Width="200px" TabIndex="1"></asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td align="right">Product</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:DropDownList ID="ddlProduct" runat="server" Width="200px" TabIndex="2">
                                    </asp:DropDownList>
                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" 
                                        ControlToValidate="ddlProduct" ErrorMessage="Please Select Product..." ForeColor="Red" InitialValue="-1" 
                                        SetFocusOnError="True">*</asp:RequiredFieldValidator>
                                   
                                </td>
                                <td align="right">Max Loan Amount</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtMaxLAmt" runat="server" onkeypress="return isNumberKeyDecimal(event)" Width="200px" TabIndex="3"></asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td align="right">Min Age</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtMinAge" runat="server" onkeypress="return isNumberKeyDecimal(event)" Width="200px" TabIndex="4"></asp:TextBox>
                                </td>
                                <td align="right">Min Income Salary</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtMinInSal" runat="server" onkeypress="return isNumberKeyDecimal(event)" Width="200px" TabIndex="5"></asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td align="right">Max Age</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtMaxAge" runat="server" onkeypress="return isNumberKeyDecimal(event)" Width="200px" TabIndex="6"></asp:TextBox>
                                </td>
                                <td align="right">Min Income Self</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtMinInSelf" runat="server" onkeypress="return isNumberKeyDecimal(event)" Width="200px" TabIndex="7"></asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td align="right">Min Interest</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtMinInte" runat="server" onkeypress="return isNumberKeyDecimal(event)" Width="200px" TabIndex="8"></asp:TextBox>
                                </td>
                                <td align="right">Min Tenure</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtMinTen" runat="server" onkeypress="return isNumberKeyDecimal(event)" Width="200px" TabIndex="9"></asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td align="right">Max Interest</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtMaxInte" runat="server" onkeypress="return isNumberKeyDecimal(event)" Width="200px" TabIndex="10"></asp:TextBox>
                                </td>
                                <td align="right">Prepay Charges</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtPreCharge" runat="server" onkeypress="return isNumberKeyDecimal(event)" Width="200px" TabIndex="11"></asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td align="right">Processing Fee</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtProFee" runat="server" onkeypress="return isNumberKeyDecimal(event)" Width="200px" TabIndex="12"></asp:TextBox>
                                </td>
                                <td align="right">Closer Charges</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtCloserCharge" runat="server" onkeypress="return isNumberKeyDecimal(event)" Width="200px" TabIndex="13"></asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td align="right">Processing Fee Type</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtProFeeType" runat="server" onkeypress="return isNumberKeyDecimal(event)" Width="200px" TabIndex="14"></asp:TextBox>
                                </td>
                                <td align="right">Min Credit Score</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtMinCreSco" runat="server" onkeypress="return isNumberKey(event)" Width="200px" TabIndex="15"></asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td align="right">Min Loan</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtMinLoan" runat="server" onkeypress="return isNumberKeyDecimal(event)" Width="200px" TabIndex="16"></asp:TextBox>
                                </td>
                                <td align="right">Message</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtMsg" runat="server" Width="200px" TabIndex="17"></asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td align="right">Max Loan</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtMaxLoan" runat="server" onkeypress="return isNumberKeyDecimal(event)" Width="200px" TabIndex="18"></asp:TextBox>
                                </td>
                                <td align="right">MaxTenure</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:TextBox ID="txtMaxTenure" runat="server" onkeypress="return isNumberKeyDecimal(event)" Width="200px" TabIndex="19"></asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td align="right">
                                    <asp:Label ID="lblBank_Pro_Id" runat="server" ForeColor="Red" Visible="False"></asp:Label>
                                </td>
                                <td align="center">&nbsp;</td>
                                <td align="left">
                                    &nbsp;</td>
                                <td align="right">Guarantor required</td>
                                <td align="center">&nbsp;</td>
                                <td align="left">
                                    <asp:TextBox ID="txtGuarantor" runat="server" Width="200px" TabIndex="20"></asp:TextBox>
                                </td>
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
                                    <asp:Button ID="btnSubmit" runat="server" Text="Submit" OnClick="btnSubmit_Click" TabIndex="21" />
                                    &nbsp;<asp:Button ID="btnReset" runat="server" CausesValidation="False" Text="Reset" OnClick="btnReset_Click" TabIndex="22" />
                                </td>
                            </tr>

                        </table>
                        <tr>
                            <td align="center">

                               <asp:GridView ID="GridView1" runat="server"
                                    AutoGenerateColumns="False" CellPadding="4" ForeColor="#333333"
                                    CssClass="tbl" AllowPaging="True" OnPageIndexChanging="GridView1_PageIndexChanging" OnSelectedIndexChanged="GridView1_SelectedIndexChanged" Font-Names="Verdana" Font-Size="10pt" PageSize="3" >
                                    <AlternatingRowStyle BackColor="White" />
                                    <Columns>
                                        <asp:TemplateField HeaderText="Sr No">
                                            <ItemTemplate>
                                                <%#Container.DataItemIndex+1 %>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                        <asp:BoundField HeaderText="Bank Product Id" DataField="ID_Bank_Product"
                                            SortExpression="ID_Bank_Product"  />
                                        <asp:BoundField HeaderText="Bank Name" DataField="Bank_Name"
                                            SortExpression="Bank_Name" />
                                         <asp:BoundField HeaderText="Product" DataField="Product_Name"
                                            SortExpression="Product_Name" />
                                        <asp:BoundField HeaderText="Min Age" DataField="Min_Age"
                                            SortExpression="Min_Age" Visible="False" />
                                        <asp:BoundField HeaderText="Max Age" DataField="Max_Age"
                                            SortExpression="Max_Age" />
                                        <asp:BoundField HeaderText="Min Intrest" DataField="Min_Intrest"
                                            SortExpression="Min_Intrest" Visible="False" />
                                        <asp:BoundField HeaderText="Max Intrest" DataField="Max_Intrest"
                                            SortExpression="Max_Intrest" />
                                        <asp:BoundField HeaderText="Processing Fee" DataField="ProcessingFee"
                                            SortExpression="ProcessingFee" />
                                        <asp:BoundField HeaderText="Processing Fee Type" DataField="ProcessingFeeType"
                                            SortExpression="ProcessingFeeType" />
                                        <asp:BoundField HeaderText="Min Loan" DataField="Min_Loan"
                                            SortExpression="Min_Loan" Visible="False" />
                                        <asp:BoundField HeaderText="Max Loan" DataField="Max_Loan"
                                            SortExpression="Max_Loan" />
                                        <asp:BoundField HeaderText="Min Loan Amt" DataField="Min_Loan_Amt"
                                            SortExpression="ProcessingFeeType" />
                                        <asp:BoundField HeaderText="Max Loan Amt" DataField="Max_Loan_Amt"
                                            SortExpression="ProcessingFeeType" Visible="False" />
                                        <asp:BoundField HeaderText="Min Income Salary" DataField="Min_Income_Salary"
                                            SortExpression="Min_Income_Salary" />
                                        <asp:BoundField HeaderText="Min Income Self" DataField="Min_Income_Self"
                                            SortExpression="Min_Income_Self" Visible="False" />
                                        <asp:BoundField HeaderText="Min Tenure" DataField="Min_Tenure"
                                            SortExpression="Min_Tenure" Visible="False" />
                                        <asp:BoundField HeaderText="Prepay Charges" DataField="Prepay_Charges"
                                            SortExpression="Prepay_Charges" Visible="False" />
                                        <asp:BoundField HeaderText="Closer Charges" DataField="Closer_Charges"
                                            SortExpression="Closer_Charges" Visible="False" />
                                        <asp:BoundField HeaderText="MinCredit Score" DataField="MinCredit_Score"
                                            SortExpression="MinCredit_Score" />
                                        <asp:BoundField HeaderText="Msg" DataField="Msg"
                                            SortExpression="Msg" />
                                        <asp:BoundField HeaderText="Max Tenure" DataField="Max_Tenure"
                                            SortExpression="Max_Tenure" Visible="False" />
                                            <asp:BoundField HeaderText="Guarantor required" DataField="guarantor_required"
                                            SortExpression="guarantor_required" Visible="False" />
                                        <%--<asp:BoundField HeaderText="Product_Id" DataField="Product_Id"
                                            SortExpression="Product_Id" />
                                        <asp:BoundField HeaderText="Bank_Id" DataField="Bank_Id"
                                            SortExpression="Bank_Id"  />--%>
                                              
                                      
                                        <asp:CommandField ShowSelectButton="True" HeaderText="Action" />
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
                               
                            </td>
                        </tr>
                    </table>
                </asp:Panel>
            </div>
        </div>
    </form>
</body>
</html>
