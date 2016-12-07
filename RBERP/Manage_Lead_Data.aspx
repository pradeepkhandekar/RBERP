<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Manage_Lead_Data.aspx.cs" Inherits="RBERP.Manage_Lead_Data" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
     <asp:TabContainer ID="TabContainer1" runat="server"     ActiveTabIndex="0" Height="100%" Width="100%" BorderColor="#3366FF" BorderStyle="Solid" BorderWidth="1px" Font-Bold="False">  
            <asp:TabPanel runat="server"  HeaderText="Follow Up Update" ID="TabPanel1">
                  <ContentTemplate>  
    <div>
        <table cellpadding="4" cellspacing="2" style="width: 550px; height: 400px">
                                    <tr>
                                        <td class="web_dialog_title" colspan="2">&nbsp;</td>
                                        <td class="web_dialog_title align_right">
                                            &nbsp;</td>
                                        <td class="web_dialog_title align_right">
                                            &nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td align="right">Lead Id</td>
                                        <td align="center" class="auto-style1">:</td>
                                        <td align="left">
                                            <asp:Label ID="lblvlid" runat="server"></asp:Label>
                                        </td>
                                        <td align="left">
                                            <asp:Button ID="btnupd" runat="server" CausesValidation="False" OnClick="btnupd_Click" Text="Update" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right">Name</td>
                                        <td align="center" class="auto-style1">:</td>
                                        <td align="left">
                            <asp:TextBox ID="Name" name="Name" runat="server" MaxLength="50" TabIndex="1" Width="200px"></asp:TextBox>
                                        </td>
                                        <td align="left">
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="Name" ErrorMessage="Please enter customer name.....!" ForeColor="Red" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right">Mobile No</td>
                                        <td align="center" class="auto-style1">:</td>
                                        <td align="left">
                            <asp:TextBox ID="txtMobile" runat="server" MaxLength="10" TabIndex="2" Width="200px"></asp:TextBox>
                                        </td>
                                        <td align="left">
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="txtMobile" ErrorMessage="Please enter mobile number.....!" ForeColor="Red" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right">Lead Status</td>
                                        <td align="center" class="auto-style1">:</td>
                                        <td align="left">
                                            <asp:DropDownList ID="ddlvleadstatus" runat="server" Width="200px">
                                            </asp:DropDownList>
                                        </td>
                                        <td align="left">
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" ControlToValidate="ddlvleadstatus" ErrorMessage="Please select lead status.....!" ForeColor="Red" InitialValue="-1" SetFocusOnError="True">*</asp:RequiredFieldValidator>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right">Product Name:</td>
                                        <td align="center" class="auto-style1">:</td>
                                        <td align="left">
                                            <asp:DropDownList ID="ddlproduct" runat="server" Width="200px">
                                            </asp:DropDownList>
                                        </td>
                                        <td align="left">
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator10" runat="server" ControlToValidate="ddlproduct" ErrorMessage="Please select product.....!" ForeColor="Red" InitialValue="0" SetFocusOnError="True">*</asp:RequiredFieldValidator>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right">Broker Name</td>
                                        <td align="center" class="auto-style1">:</td>
                                        <td align="left">
                            <asp:DropDownList ID="ddlbroker" runat="server" Width="203px" TabIndex="6" Font-Size="9pt">
                            </asp:DropDownList>

                                        </td>
                                        <td align="left">
                                            &nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td align="right"><span id="Datetype"></span>Date</td>
                                        <td align="center" class="auto-style1">:</td>
                                        <td align="left">
                                            <asp:TextBox ID="txtvfollowupdate" runat="server" Width="200px"></asp:TextBox>
                                            <asp:CalendarExtender ID="CalendarExtender2" runat="server" TargetControlID="txtvfollowupdate" Enabled="True"></asp:CalendarExtender>
                                        </td>
                                        <td align="left">
                            <asp:RangeValidator ID="RangeValidator4" runat="server" ControlToValidate="txtvfollowupdate" ErrorMessage="Please enter proper next date .!" ForeColor="Red" MaximumValue="12/30/2019" MinimumValue="12/30/1950" SetFocusOnError="True" Type="Date">*</asp:RangeValidator>
           
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right">Follow Time</td>
                                        <td align="center" class="auto-style1">:</td>
                                        <td align="left">
                                            <asp:DropDownList ID="ddlvTime" runat="server" Width="100px">
                                            </asp:DropDownList>
                                        </td>
                                        <td align="left">
                                            &nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td align="right">Amount</td>
                                        <td align="center" class="auto-style1">:</td>
                                        <td align="left">
                                            <asp:TextBox ID="txtvamt" runat="server" Width="200px">0</asp:TextBox>
                                        </td>
                                        <td align="left">
                            <asp:RangeValidator ID="RangeValidator2" runat="server" ControlToValidate="txtvamt" ErrorMessage="Please enter loan amount..!" ForeColor="Red" MaximumValue="9999999999" MinimumValue="10000" SetFocusOnError="True" Type="Double">*</asp:RangeValidator>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right">Assign To</td>
                                        <td align="center" class="auto-style1">:</td>
                                        <td align="left">

                                            <asp:DropDownList ID="ddlvAssignTo" runat="server" Width="200px">
                                            </asp:DropDownList>
                                        </td>
                                        <td align="left">

                            <asp:RequiredFieldValidator ID="RequiredFieldValidator6" runat="server" ControlToValidate="ddlvAssignTo" ErrorMessage="Please select lead assign to.....!" ForeColor="Red" InitialValue="0" SetFocusOnError="True">*</asp:RequiredFieldValidator>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right">Bank Name</td>
                                        <td align="center" class="auto-style1">:</td>
                                        <td align="left">
                                            <asp:DropDownList ID="ddlBank" runat="server" Width="200px">
                                            </asp:DropDownList>
                                        </td>
                                        <td align="left">
                                            &nbsp;</td>
                                    </tr>


                                    <tr>
                                        <td align="right">Demo Given</td>
                                        <td align="center" class="auto-style1">:</td>
                                        <td align="left">
                            <asp:CheckBox ID="chkdemo" runat="server" Text="Is Demo Given?" />
                                        </td>
                                        <td align="left">
                                            &nbsp;</td>
                                    </tr>


                                    <tr>
                                        <td align="right">Remark</td>
                                        <td align="center" class="auto-style1">:</td>
                                        <td align="left">
                                            <asp:TextBox ID="txtvremark" runat="server" Width="200px"></asp:TextBox>
                                        </td>
                                        <asp:Label ID="vleadidhidden" runat="server"></asp:Label>
                                    </tr>
                                    <tr>
                                        <td align="center" colspan="3">
                                            &nbsp;
                            <asp:ValidationSummary ID="ValidationSummary1" runat="server" ForeColor="Red" ShowMessageBox="True" ShowSummary="False" />
                                        </td>
                                        <td align="center">
                                            &nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td align="center" colspan="3">
                                                <asp:GridView ID="dgValidlead" runat="server" AutoGenerateColumns="False" BackColor="White" BorderColor="#3366CC" BorderStyle="None" BorderWidth="1px" CellPadding="4" DataKeyNames="LeadID" OnSelectedIndexChanged="dgValidlead_SelectedIndexChanged">
                                                    <Columns>
                                                        <asp:BoundField DataField="LeadID" HeaderText="Lead ID" />
                                                        <asp:BoundField DataField="LeadDate" HeaderText="Followup Date" />
                                                        <asp:BoundField DataField="amount" HeaderText="Amount" />
                                                        <asp:BoundField DataField="LeadStatus" HeaderText="Lead Status" />
                                                        <asp:BoundField DataField="Remark" HeaderText="Remarks" />
                                                        <asp:BoundField DataField="lead_Data_id" HeaderText="Lead Data ID" >
                                                        <ControlStyle BackColor="White" />
                                                        </asp:BoundField>
                                                        <asp:BoundField DataField="lead_status_id" HeaderText="Lead StatusId" >
                                                        <ControlStyle BackColor="White" />
                                                        </asp:BoundField>
                                                        <asp:BoundField DataField="empcode" HeaderText="Emp Code" >
                                                        <ControlStyle BackColor="White" />
                                                        </asp:BoundField>
                                                        <asp:ButtonField CommandName="Select" Text="Edit" />
                                                    </Columns>
                                                    <FooterStyle BackColor="#99CCCC" ForeColor="#003399" />
                                                    <HeaderStyle BackColor="#003399" Font-Bold="True" ForeColor="#CCCCFF" />
                                                    <PagerStyle BackColor="#99CCCC" ForeColor="#003399" HorizontalAlign="Left" />
                                                    <RowStyle BackColor="White" ForeColor="#003399" />
                                                    <SelectedRowStyle BackColor="#009999" Font-Bold="True" ForeColor="#CCFF99" />
                                                    <SortedAscendingCellStyle BackColor="#EDF6F6" />
                                                    <SortedAscendingHeaderStyle BackColor="#0D4AC4" />
                                                    <SortedDescendingCellStyle BackColor="#D6DFDF" />
                                                    <SortedDescendingHeaderStyle BackColor="#002876" />
                                                </asp:GridView>
                                        </td>
                                        <td align="center">
                                            &nbsp;</td>
                                    </tr>
                                </table>
                             <asp:ToolkitScriptManager ID="ToolkitScriptManager1" runat="server" CombineScripts="True">
                        </asp:ToolkitScriptManager>
                        </div>
                     </ContentTemplate>  
            </asp:TabPanel>  
            <asp:TabPanel ID="TabPanel2" runat="server" HeaderText="Documents">  
                <ContentTemplate></ContentTemplate>
            </asp:TabPanel>  
         
            <asp:TabPanel ID="TabPanel3" runat="server" HeaderText="Billing/Payout/Incentives">  
                <ContentTemplate></ContentTemplate>
            </asp:TabPanel>  
        </asp:TabContainer>  
          
    </form>
</body>
</html>
