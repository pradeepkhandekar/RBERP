<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Lead_Capture_RB.aspx.cs" Inherits="RBERP.Lead_Capture_RB" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>



<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <title></title>

    <style type="text/css">
       
        .auto-style3 {
            align-content:right;
        }

        </style>
    <SCRIPT language=Javascript>
      function isNumberKey(evt)
      {
         var charCode = (evt.which) ? evt.which : evt.keyCode;
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;    
         return true;
      }
   </SCRIPT>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <div aria-busy="False" style="align-content:center">
                    <asp:ToolkitScriptManager ID="ToolkitScriptManager1" runat="server">
                        </asp:ToolkitScriptManager>
                <table class="tbl"  style="align:center; font-family: verdana, Geneva, Tahoma, sans-serif; font-size: 10pt" border="0">
                    <tr>
                        <td align="center" colspan="7">
                            <asp:Label ID="lblmsg" runat="server" ForeColor="Red"></asp:Label>
                        </td>
                        <td align="center">
                            &nbsp;</td>
                    </tr>

                    <tr>
                        <td align="center"  colspan="8">
                            <asp:Label ID="Label1" runat="server" Text="Lead Capture"
                                Style="color: #0099FF; font-size: large; font-weight: 700;"></asp:Label>
                        </td>
                    </tr>

                    <tr>
                        <td align="right"  colspan="8">
                            <asp:Button ID="btnsubmit" runat="server" OnClick="btnsubmit_Click" Text="Submit" TabIndex="20" />
                            <asp:Button ID="btnreset" runat="server" Text="Reset " TabIndex="21" OnClick="btnreset_Click" />
                        </td>
                    </tr>

                    <tr>
                        <td align="right"  colspan="8">
                            &nbsp;</td>
                    </tr>

                    <tr>
                        <td align="right" style="width: 250px;" >Name </td>
                        <td align="right" >:</td>
                        <td >
                            <asp:TextBox ID="Name" name="Name" runat="server" MaxLength="50" TabIndex="1" Width="200px"></asp:TextBox>
                        </td>
                        <td style="width: 100px" >
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="Name" ErrorMessage="Please enter customer name.....!" ForeColor="Red" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                        </td>
                        <td class="auto-style3" style="width: 200px;" align="right">Designation</td>
                        <td >:</td>
                        <td >
                            <asp:TextBox ID="txtdesignation" runat="server" MaxLength="10" TabIndex="10" Width="200px"></asp:TextBox>
                        </td>
                        <td >
                            &nbsp;</td>
                    </tr>

                    <tr>
                        <td align="right" class="auto-style3" style="width: 250px;">Mobile No </td>
                        <td align="right" class="auto-style3">:</td>
                        <td >
                            <asp:TextBox ID="txtMobile" runat="server" MaxLength="10" TabIndex="2" Width="200px"></asp:TextBox>
                        </td>
                        <td style="width: 100px" >
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="txtMobile" ErrorMessage="Please enter mobile number.....!" ForeColor="Red" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                        </td>
                        <td style="width: 200px;"  align="right">PAN No.</td>
                        <td >:</td>
                        <td >
                            <asp:TextBox ID="txtPan" runat="server" MaxLength="10" TabIndex="11" Width="200px"></asp:TextBox>

                        </td>
                        <td >
                            &nbsp;</td>
                    </tr>

                    <tr>
                        <td align="right" class="auto-style3" style="width: 250px;" align="right">Email Id </td>
                        <td align="right" class="auto-style3">:</td>
                        <td >
                            <asp:TextBox ID="txtEmailId" runat="server" MaxLength="30" TabIndex="3" Width="200px"></asp:TextBox>
                        </td>
                        <td style="width: 100px" >
                            &nbsp;</td>
                        <td  rowspan="2" style="width: 200px;" align="right">Address</td>
                        <td  rowspan="2">:</td>
                        <td  rowspan="2">
                            <asp:TextBox ID="txtAddress" runat="server" TextMode="multiline" MaxLength="100" Height="38px" TabIndex="12" Width="206px"></asp:TextBox>

                        </td>
                        <td  rowspan="2">
                            &nbsp;</td>
                    </tr>

                    <tr>
                        <td align="right" class="auto-style3" style="width: 250px;">Vertical Name</td>
                        <td align="right" class="auto-style3">:</td>
                        <td class="auto-style3">
                            <asp:DropDownList ID="ddlVertical" runat="server" Width="203px" TabIndex="9" Font-Size="9pt">
                            </asp:DropDownList>

                        </td>
                        <td style="width: 100px" >
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ControlToValidate="ddlVertical" ErrorMessage="Please select verticale name.....!" ForeColor="Red" InitialValue="0" SetFocusOnError="True">*</asp:RequiredFieldValidator>

                        </td>
                    </tr>
                    <tr>
                        <td align="right" class="auto-style3" style="width: 250px;">Monthly Income </td>
                        <td align="right" class="auto-style3">:</td>
                        <td >
                            <asp:TextBox ID="txtIncome" runat="server" MaxLength="10" TabIndex="4" Width="200px">0</asp:TextBox>
                        </td>
                        <td style="width: 100px" >
                            <asp:RangeValidator ID="RangeValidator1" runat="server" ControlToValidate="txtIncome" ErrorMessage="Please enter proper monthly income..!" ForeColor="Red" MaximumValue="9999999999" MinimumValue="10000" SetFocusOnError="True" Type="Double">*</asp:RangeValidator>
                        </td>
                        <td style="width: 200px;" align="right" >State</td>
                        <td >:</td>
                        <td class="auto-style3">
                            <asp:DropDownList ID="ddlState" runat="server" Width="210px" TabIndex="13" AutoPostBack="True" OnSelectedIndexChanged="ddlState_SelectedIndexChanged" Font-Size="9pt">
                            </asp:DropDownList>

                        </td>
                        <td >
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator7" runat="server" ControlToValidate="ddlState" ErrorMessage="Please select state nam.....!" ForeColor="Red" InitialValue="0" SetFocusOnError="True">*</asp:RequiredFieldValidator>

                        </td>
                    </tr>
                    <tr>
                        <td align="right" class="auto-style3" style="width: 250px;">Date Of Birth </td>
                        <td align="right" class="auto-style3">:</td>
                        <td >
                            <asp:TextBox ID="txtDob" name="txtDob" runat="server" TabIndex="5" Width="200px"></asp:TextBox>
                             
                            <asp:CalendarExtender ID="CalendarExtender2" runat="server" TargetControlID="txtDob" Format="MM/dd/yyyy"></asp:CalendarExtender>
           
                        </td>
                        <td style="width: 100px" >
                            <asp:RangeValidator ID="RangeValidator3" runat="server" ControlToValidate="txtDob" ErrorMessage="Please enter proper monthly income..!" ForeColor="Red" MaximumValue="12/30/2015" MinimumValue="12/30/1950" SetFocusOnError="True" Type="Date">*</asp:RangeValidator>
           
                        </td>
                        <td style="width: 200px;" align="right">City</td>
                        <td >:</td>
                        <td class="auto-style3" >
                            <asp:DropDownList ID="ddlCity" runat="server" Width="210px" TabIndex="14" Font-Size="9pt">
                            </asp:DropDownList>

                        </td>
                        <td>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator8" runat="server" ControlToValidate="ddlCity" ErrorMessage="Please select city name.....!" ForeColor="Red" InitialValue="0" SetFocusOnError="True">*</asp:RequiredFieldValidator>

                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="color:blue;" colspan="3">Date format MM/DD/YYYY e.g. 11/27/1967</td>
                        <td style="width: 100px" >
                            &nbsp;</td>
                        <td  class="auto-style3" align="right">Company Name</td>
                        <td >:</td>
                        <td>
                            <asp:TextBox ID="txtcompanyname" runat="server" TabIndex="8" Width="200px"></asp:TextBox>

                        </td>
                        <td>
                            &nbsp;</td>
                    </tr>
                    <tr>
                        <td align="right" class="auto-style3" style="width: 250px;">Status</td>
                        <td align="right" class="auto-style3">:</td>
                        <td class="auto-style3" >
                            <asp:DropDownList ID="ddlstatus" runat="server" Width="203px" TabIndex="6" Font-Size="9pt">
                            </asp:DropDownList>

                        </td>
                        <td style="width: 100px" >
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" ControlToValidate="ddlstatus" ErrorMessage="Please select lead status.....!" ForeColor="Red" InitialValue="-1" SetFocusOnError="True">*</asp:RequiredFieldValidator>

                        </td>
                        <td style="width: 200px;" align="right">Profession</td>
                        <td >:</td>
                        <td class="auto-style3" >
                            <asp:DropDownList ID="ddlProfession" runat="server" Width="210px" TabIndex="15" Font-Size="9pt">
                            </asp:DropDownList>

                        </td>
                        <td>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator9" runat="server" ControlToValidate="ddlProfession" ErrorMessage="Please select profession.....!" ForeColor="Red" InitialValue="0" SetFocusOnError="True">*</asp:RequiredFieldValidator>

                        </td>
                    </tr>
                    <tr>
                        <td align="right" class="auto-style3" style="width: 250px;">Next Date</td>
                        <td align="right" class="auto-style3">:</td>
                        <td >
                            <asp:TextBox ID="txtndate" name="txtDob" runat="server" TabIndex="7" Width="200px"></asp:TextBox>
    <asp:CalendarExtender ID="CalendarExtender1" runat="server" TargetControlID="txtndate"></asp:CalendarExtender>
                
                        </td>
                        <td style="width: 100px" >
                            <asp:RangeValidator ID="RangeValidator4" runat="server" ControlToValidate="txtndate" ErrorMessage="Please enter proper next date .!" ForeColor="Red" MaximumValue="12/30/2017" MinimumValue="12/30/1950" SetFocusOnError="True" Type="Date">*</asp:RangeValidator>
           
                        </td>
                        <td style="width: 200px;" align="right">Product</td>
                        <td >&nbsp;</td>
                        <td class="auto-style3">
                            <asp:DropDownList ID="ddlproduct" runat="server" Width="210px" TabIndex="16" Font-Size="9pt">
                            </asp:DropDownList>

                        </td>
                        <td>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator10" runat="server" ControlToValidate="ddlproduct" ErrorMessage="Please select product.....!" ForeColor="Red" InitialValue="0" SetFocusOnError="True">*</asp:RequiredFieldValidator>

                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="color:blue;" colspan="3">(MM/DD/YYYY) e.g. 11/30/2016</td>
                        <td style="width: 100px" >
                            &nbsp;</td>
                        <td style="width: 200px;" align="right">Loan Amount</td>
                        <td >:</td>
                        <td>
                            <asp:TextBox ID="txtLoanAmt"  onkeypress="return isNumberKey(event)" runat="server" MaxLength="10" TabIndex="11" Width="200px">0</asp:TextBox>&nbsp;</td>
                        <td>
                            <asp:RangeValidator ID="RangeValidator2" runat="server" ControlToValidate="txtLoanAmt" ErrorMessage="Please enter loan amount..!" ForeColor="Red" MaximumValue="9999999999" MinimumValue="10000" SetFocusOnError="True" Type="Double">*</asp:RangeValidator>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" class="auto-style3" style="width: 250px;">Lead Type</td>
                        <td align="right" class="auto-style3">:</td>
                        <td class="auto-style3" >
                            <asp:DropDownList ID="ddlleadtype" runat="server" Width="203px" TabIndex="9" Font-Size="9pt">
                                <asp:ListItem Value="0">Select</asp:ListItem>
                            
                            </asp:DropDownList>

                        </td>
                        <td style="width: 100px" >
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator5" runat="server" ControlToValidate="ddlleadtype" ErrorMessage="Please select lead type.....!" ForeColor="Red" InitialValue="0" SetFocusOnError="True">*</asp:RequiredFieldValidator>

                        </td>
                        <td style="width: 200px;" align="right">Source</td>
                        <td >:</td>
                        <td class="auto-style3">
                            <asp:DropDownList ID="ddlsouce" runat="server" Width="210px" TabIndex="18" Font-Size="9pt">
                            </asp:DropDownList>

                        </td>
                        <td>
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator11" runat="server" ControlToValidate="ddlsouce" ErrorMessage="Please select source.....!" ForeColor="Red" InitialValue="-1" SetFocusOnError="True">*</asp:RequiredFieldValidator>

                        </td>
                    </tr>
                    <tr>
                        <td align="right" class="auto-style3" style="width: 250px;">Assign To</td>
                        <td align="right" class="auto-style3">:</td>
                        <td class="auto-style3" >
                            <asp:DropDownList ID="ddlassign" runat="server" Width="203px" TabIndex="6" Font-Size="9pt">
                            </asp:DropDownList>

                        </td>
                        <td style="width: 100px" >
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator6" runat="server" ControlToValidate="ddlassign" ErrorMessage="Please select lead assign to.....!" ForeColor="Red" InitialValue="0" SetFocusOnError="True">*</asp:RequiredFieldValidator>

                        </td>
                        <td style="width: 200px;" align="right">Bank</td>
                        <td >:</td>
                        <td class="auto-style3" >
                            <asp:DropDownList ID="ddlBank" runat="server" Width="210px" TabIndex="19" Font-Size="9pt">
                            </asp:DropDownList>

                        </td>
                        <td>
                            &nbsp;</td>
                    </tr>
                    <tr>
                        <td align="right" class="auto-style3" style="width: 250px;">Broker Name</td>
                        <td align="right" class="auto-style3">:</td>
                        <td class="auto-style3">
                            <asp:DropDownList ID="ddlbroker" runat="server" Width="203px" TabIndex="6" Font-Size="9pt">
                            </asp:DropDownList>

                        </td>
                        <td style="width: 100px" >
                            &nbsp;</td>
                        <td align="right">Demo</td>
                        <td >:</td>
                        <td>
                            <asp:CheckBox ID="chkdemo" runat="server" Text="Is Demo Given?" />
                        </td>
                        <td>
                            &nbsp;</td>
                    </tr>
                    <tr>
                        <td align="center" class="auto-style2" colspan="7">
                            <asp:Label ID="lblUserId" runat="server" Visible="False"></asp:Label>
                            <asp:ValidationSummary ID="ValidationSummary1" runat="server" ForeColor="Red" ShowMessageBox="True" ShowSummary="False" />
                        </td>
                        <td align="center" class="auto-style2">
                            &nbsp;</td>
                    </tr>
                    <tr>
                        <td align="center" class="auto-style2" colspan="7">
                            &nbsp;&nbsp;
                            </td>
                        <td align="center" class="auto-style2">
                            &nbsp;</td>
                    </tr>
                </table>

            </div>
        </div>
    </form>
</body>
</html>

