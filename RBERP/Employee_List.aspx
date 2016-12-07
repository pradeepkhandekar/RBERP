<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Employee_List.aspx.cs" Inherits="RBERP.Employee_List" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>





<!DOCTYPE html>
<script runat="server">


   
</script>


<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
      
        </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <table class="auto-style1" align="Center" >
            <tr align="center">
                <td colspan="3" ><strong>Employee List</strong></td>
            </tr>
            <tr>
                <td align="center"class="auto-style5" colspan="3">
                    <%--<asp:HiddenField ID="hdnGrid" runat="server" />
                     <asp:ModalPopupExtender ID="mpe_Commercial" runat="server" TargetControlID="hdnGrid"
                        BackgroundCssClass="modalBackground" PopupControlID="panel_Commercial" 
                    CancelControlID="but_MPEClose"></asp:ModalPopupExtender>--%>
                     <asp:HiddenField ID="hdnGrid" runat="server" />
                    <asp:ModalPopupExtender ID="mpe_Commercial" runat="server" TargetControlID="hdnGrid"
                        BackgroundCssClass="modalBackground" PopupControlID="panel_Commercial" 
                    CancelControlID="Button1"></asp:ModalPopupExtender>
                   
                    <asp:ToolkitScriptManager ID="ToolkitScriptManager1" runat="server">
                    </asp:ToolkitScriptManager>
                </td>
            </tr>
            <tr >
                <td align="center" colspan="3" class="auto-style3" style="vertical-align: middle">
                    <asp:GridView ID="dgemployeelist" runat="server" BackColor="White" BorderColor="#3366CC" 
                        BorderStyle="None" BorderWidth="1px" CellPadding="4" AutoGenerateColumns="False" 
                        OnRowCommand="dgemployeelist_RowCommand" DataKeyNames="EMPId" AllowPaging="true" PagerSettings-Position="TopAndBottom" OnPageIndexChanging="dgemployeelist_PageIndexChanging">
                        <Columns>
                              <asp:TemplateField  HeaderText="Edit" HeaderStyle-Width="60" ItemStyle-Width="60" >
                                            <ItemTemplate>
                                                <asp:LinkButton ID="lnkuploadro" runat="server" 
                                                    CommandArgument='<%#Eval("Empid","{0}") %>' CommandName="RowItemDuration">Edit</asp:LinkButton>
                                            </ItemTemplate>
                                            <HeaderStyle ForeColor="White" />
                                               <ItemStyle Width="60px" />
                                            </asp:TemplateField>
                            <asp:BoundField DataField="empcode" HeaderText="EmpCode">
                            <ItemStyle HorizontalAlign="Center" />
                            </asp:BoundField>
                            <asp:BoundField DataField="EmployeeName" HeaderText="Employee Name">
                            <ItemStyle HorizontalAlign="Left" />
                            </asp:BoundField>
                            <asp:BoundField DataField="Company" HeaderText="Company">
                            <ItemStyle HorizontalAlign="Left" />
                            </asp:BoundField>
                            <asp:BoundField DataField="Emailid" HeaderText="Email">
                            <ItemStyle HorizontalAlign="Left" />
                            </asp:BoundField>
                            
                           
                            <asp:BoundField DataField="Department" HeaderText="Department">
                            <ItemStyle HorizontalAlign="Left" />
                            </asp:BoundField>
                              <asp:BoundField DataField="empId" HeaderText="EmpId">
                            <ItemStyle HorizontalAlign="Center" />
                            </asp:BoundField>
                            
                            
                        </Columns>
                        <FooterStyle BackColor="#99CCCC" ForeColor="#003399" />
                        <HeaderStyle BackColor="#003399" Font-Bold="True" ForeColor="#CCCCFF" />
                        <PagerSettings Position="TopAndBottom" />
                        <PagerStyle BackColor="#99CCCC" ForeColor="#003399" HorizontalAlign="Left" />
                        <RowStyle BackColor="White" ForeColor="#003399" />
                        <SelectedRowStyle BackColor="#009999" Font-Bold="True" ForeColor="#CCFF99" />
                        <SortedAscendingCellStyle BackColor="#EDF6F6" />
                        <SortedAscendingHeaderStyle BackColor="#0D4AC4" />
                        <SortedDescendingCellStyle BackColor="#D6DFDF" />
                        <SortedDescendingHeaderStyle BackColor="#002876" />
                    </asp:GridView>
                </td>
            </tr>
            <tr>
                <td colspan="3" aria-invalid="false" style="top: auto; vertical-align: middle;">
                      <asp:Panel ID="panel_Commercial" runat="server" BackColor="#f7f6f3" >
                        <table cellpadding="4" cellspacing="2" class="txt" style="border: 3px Solid #003399; background-color: White; height: 347px; width: 649px;">
                            <tr>
                                <td align="center" bgcolor="gainsboro" style="height: 48px">
                                    <h3>Edit Employee Master
                                        <asp:Label ID="lblempid" runat="server"></asp:Label>
                                    </h3>
                                </td>
                                <td align="center" bgcolor="gainsboro" style="height: 48px">
                                    <asp:Button ID="Button1" runat="server" Text="Close" />
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <table align="center" class="auto-style9">
                                        <tr>
                                            <td align="right">EmpCode:</td>
                                            <td align="left">
                                                <asp:TextBox ID="txtecode" runat="server" TabIndex="1" Width="154px" ReadOnly="true"></asp:TextBox>
                                            </td>
                                            <td align="right">Designation:</td>
                                            <td>
                                                <asp:DropDownList ID="ddledesignation" runat="server" TabIndex="9" Width="233px">
                                                </asp:DropDownList>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="right">Emp Name:</td>
                                            <td align="left">
                                                <asp:TextBox ID="txtename" runat="server" TabIndex="1" Width="154px"></asp:TextBox>
                                            </td>
                                            <td align="right">Reporting Auth:</td>
                                            <td align="left">
                                                <asp:DropDownList ID="ddlereporting" runat="server" DataTextField="emp_name" DataValueField="empid" TabIndex="10" Width="230px">
                                                </asp:DropDownList>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="right">Company:</td>
                                            <td align="left">
                                                <asp:DropDownList ID="ddlcom" runat="server" TabIndex="9" Width="233px">
                                                </asp:DropDownList>
                                            </td>
                                            <td align="right">Department:</td>
                                            <td align="left">
                                                <asp:DropDownList ID="ddledept" runat="server" TabIndex="9" Width="233px">
                                                </asp:DropDownList>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="right">Email:</td>
                                            <td align="left">
                                                <asp:TextBox ID="txteml" runat="server" TabIndex="1" Width="154px"></asp:TextBox>
                                            </td>
                                            <td align="right">IsActive:</td>
                                            <td align="left">
                                                <asp:CheckBox ID="chkeactive" runat="server" TabIndex="13" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="right">Address</td>
                                            <td align="left">
                                                <asp:TextBox ID="txteaddress" runat="server" TabIndex="1" Width="154px"></asp:TextBox>
                                            </td>
                                            <td align="right">CTC:</td>
                                            <td align="left">
                                                <asp:TextBox ID="txtectc" runat="server" TabIndex="1" Width="154px"></asp:TextBox>
                                                <asp:FilteredTextBoxExtender ID="FilteredTextBoxExtender2" runat="server" ValidChars="0123456789." TargetControlID="txtectc"></asp:FilteredTextBoxExtender>
                                                 </td>
                                        </tr>
                                        <tr>
                                            <td align="right">DOB:</td>
                                            <td align="left">
                                                <asp:TextBox ID="txtedob" runat="server" TabIndex="1" Width="154px"></asp:TextBox>
                                                <asp:CalendarExtender ID="CalendareExtender12" runat="server" TargetControlID="txtedob"></asp:CalendarExtender>
                                            </td>
                                            <td align="right">Variable</td>
                                            <td align="left">
                                                <asp:TextBox ID="txtevariable" runat="server" TabIndex="1" Width="154px"></asp:TextBox>
                                                <asp:FilteredTextBoxExtender ID="FilteredTextBoxExtender3" runat="server" ValidChars="0123456789.," TargetControlID="txtevariable"></asp:FilteredTextBoxExtender>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="right">
                                                MobileNo:</td>
                                            <td align="left">
                                                <asp:TextBox ID="txtemobileno" runat="server" TabIndex="1" Width="154px"></asp:TextBox>
                                                <asp:FilteredTextBoxExtender ID="FilteredTextBoxExtender1" runat="server" ValidChars="0123456789" TargetControlID="txtemobileno"></asp:FilteredTextBoxExtender>
                                                 </td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td align="center" colspan="4">
                                                <asp:Button ID="btnupdate" runat="server" OnClick="btnupdate_Click" Text="Update" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="right" colspan="4">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td align="right">&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td align="right">&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </asp:Panel>
            </tr>
        </table>
    
    </div>
    </form>
</body>
</html>
