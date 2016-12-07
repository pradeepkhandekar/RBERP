<%@ Page Language="C#" AutoEventWireup="true" Inherits="User_Master_Edit" Codebehind="User_Master_Edit.aspx.cs" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script language="javascript" type="text/javascript" src="Code/BackOfficeModuleCode.js?0"></script>
    <style type="text/css">

        .style1
        {
            width: 222px;
        }
        .style2
        {
            width: 100%;
        }
    </style>
</head>

   
    
        <form id="form1" runat="server">

   
    
        <table class="style1" align="center" dir="ltr">
            <tr>
                <td align="center" colspan="4">
                    <asp:Label ID="Label1" runat="server" style="color: #0099FF; font-weight: 700; font-size: x-large;" 
                        Text="User Master Edit"></asp:Label>
                </td>
            </tr>
            <tr>
                <td align="center" colspan="4">
                    <hr />&nbsp;</td>
            </tr>
            <tr>
                <td align="right" class="style22">
                    User Id :</td>
                <td class="style1">
                    <asp:Label ID="id" runat="server" ForeColor="Red"></asp:Label>
                </td>
                <td align="right" class="style3">
                    &nbsp;</td>
                <td class="style2">
                            <asp:RegularExpressionValidator ID="RegularExpressionValidator1" runat="server" 
                    ControlToValidate="txtemail" 
                    ErrorMessage="&quot;Please enter valid email address&quot;" ForeColor="Red" 
                    SetFocusOnError="True" 
                    ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*"></asp:RegularExpressionValidator>
                        </td>
            </tr>
            <tr>
                <td align="right" class="style22">
                    UserName&nbsp;:<asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
                        ControlToValidate="txtusername" ErrorMessage="Please Enter User Name" 
                        ForeColor="Red" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                </td>
                <td class="style1">
                <asp:TextBox ID="txtusername" runat="server" Width="200px"></asp:TextBox>
                        </td>
                <td align="right" class="style3">
                    Email :<asp:RequiredFieldValidator ID="RequiredFieldValidator11" runat="server" 
                        ControlToValidate="txtemail" ErrorMessage="Please Enter Email" 
                        ForeColor="Red" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                </td>
                <td class="style2">
                <asp:TextBox ID="txtemail" runat="server" Width="200px"></asp:TextBox>
                        <br />
                        </td>
            </tr>
            <tr>
                <td class="style23" align="right">
                    CompanyName :<asp:RequiredFieldValidator ID="RequiredFieldValidator10" runat="server" 
                        ControlToValidate="ddlcompany" ErrorMessage="Please Enter company" 
                        ForeColor="Red" SetFocusOnError="True" InitialValue="0">*</asp:RequiredFieldValidator>
                </td>
                <td class="style1">
                    <asp:DropDownList ID="ddlcompany" runat="server" Width="205px">
                        <asp:ListItem Value="0">-- Select One  --</asp:ListItem>
                    </asp:DropDownList>
                        <br />
                        </td>
                <td class="style8" align="right">
                    VendorName :&nbsp; </td>
                <td class="style2">
                    <asp:DropDownList ID="ddlvendor" runat="server" Width="205px">
                        <asp:ListItem Value="0">-- Select One  --</asp:ListItem>
                    </asp:DropDownList>
                        <br />
                        </td>
            </tr>
            <tr>
                <td class="style22" align="right">
                    &nbsp;Group Name:<asp:RequiredFieldValidator ID="RequiredFieldValidator9" runat="server" 
                        ControlToValidate="ddlGroupid" ErrorMessage="Please Select Group" 
                        ForeColor="Red" SetFocusOnError="True" InitialValue="0">*</asp:RequiredFieldValidator>
                </td>
                <td class="style1" align="char">
                    <asp:DropDownList ID="ddlGroupid" runat="server" Width="205px">
                        <asp:ListItem Value="0">-- Select One  --</asp:ListItem>
                    </asp:DropDownList>
                        </td>
                <td class="style3" align="right">
                    Mobile :<asp:RequiredFieldValidator ID="RequiredFieldValidator12" runat="server" 
                        ControlToValidate="txtmobile" ErrorMessage="Please Enter Mobile" 
                        ForeColor="Red" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                </td>
                <td class="style2">
                <asp:TextBox ID="txtmobile" runat="server" Width="200px"></asp:TextBox>
                        </td>
            </tr>
            <tr>
                <td class="style24" align="right">
                    Password :<asp:RequiredFieldValidator ID="RequiredFieldValidator8" runat="server" 
                        ControlToValidate="txtPassword" ErrorMessage="Please Enter Password" 
                        ForeColor="Red" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                    </td>
                <td class="style1" align="right">
                <asp:TextBox ID="txtPassword" runat="server" Width="200px"></asp:TextBox>
                </td>
                <td class="style12">
                    ConfirmPassword:<asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" 
                        ControlToValidate="txtconfirmPassword" ErrorMessage="Please Enter Confirm password " 
                        ForeColor="Red" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                    </td>
                <td class="style2">
                <asp:TextBox ID="txtconfirmPassword" runat="server" Width="200px" 
                        TextMode="Password"></asp:TextBox>
                    </td>
            </tr>
            <tr>
                <td class="style24" align="right">
                    &nbsp;</td>
                <td class="style1" align="right">
                    &nbsp;</td>
                <td class="style12">
                    &nbsp;</td>
                <td class="style2">
                    <asp:CompareValidator ID="CompareValidator1" runat="server" 
                        ControlToCompare="txtPassword" ControlToValidate="txtconfirmPassword" 
                        ErrorMessage="Invalid Confirm Password" ForeColor="Red" SetFocusOnError="True">Invalid Confirm Password</asp:CompareValidator>
                    </td>
            </tr>
            <tr>
                <td class="style24" align="right">
                    &nbsp;</td>
                <td class="style1" align="right">
                    <asp:Label ID="lblmsg" runat="server" ForeColor="Red"></asp:Label>
                </td>
                <td class="style12">
                    &nbsp;</td>
                <td class="style2">
                    &nbsp;</td>
            </tr>
            <tr>
                <td class="style22">
                    &nbsp;</td>
                <td align="right" class="style1">
                    <asp:ImageButton ID="btnSubmit" runat="server" 
                        ImageUrl="~/Images/submit.gif" onclick="btnSubmit_Click" 
                        style="height: 25px" />
                </td>
                <td class="style3">
                    <asp:ImageButton ID="btnreset" runat="server" 
                        ImageUrl="~/Images/reset.gif" onclick="btnreset_Click" 
                        CausesValidation="False" />
                </td>
                <td class="style2">
                    &nbsp;</td>
            </tr>
            <tr>
                <td class="style22">
                    &nbsp;</td>
                <td class="style1">
                    &nbsp;</td>
                <td class="style3">
                    &nbsp;</td>
                <td class="style2">
                    &nbsp;</td>
            </tr>
            <tr>
                <td class="style25">
                    </td>
                <td class="style1">
                    <asp:ValidationSummary ID="ValidationSummary1" runat="server" 
                        ShowMessageBox="True" ShowSummary="False" />
                </td>
                <td class="style16">
                    &nbsp;</td>
                <td class="style2">
                    </td>
            </tr>
            <tr>
                <td class="style25">
                    &nbsp;</td>
                <td class="style1">
                    &nbsp;</td>
                <td class="style16">
                    &nbsp;</td>
                <td class="style2">
                    &nbsp;</td>
            </tr>
            </table>
    
  
        <table class="style2">
            <tr>
                <td align="center">
                    <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" 
                        CellPadding="4" DataKeyNames="UserId" DataSourceID="SqlDataSource1" 
                        ForeColor="#333333" 
                        onselectedindexchanged="GridView1_SelectedIndexChanged">
                        <AlternatingRowStyle BackColor="White" />
                        <Columns>

                         <asp:CommandField HeaderText="Edit" ShowSelectButton="True" />

                         <asp:TemplateField HeaderText="Sr No.">
                            <ItemTemplate>
                                <%#Container.DataItemIndex+1 %>
                            </ItemTemplate>
                            <ItemStyle Width="7%" HorizontalAlign="center" />
                        </asp:TemplateField>
                            <asp:BoundField DataField="UserId" HeaderText="User Id" InsertVisible="False" 
                                ReadOnly="True" SortExpression="UserId" />
                            <asp:BoundField DataField="UserName" HeaderText="User Name" 
                                SortExpression="UserName" />
                            <asp:BoundField DataField="GroupId" HeaderText="Group Id" 
                                SortExpression="GroupId" />
                            <asp:BoundField DataField="IsActive" HeaderText="IsActive" 
                                SortExpression="IsActive" />
                            <asp:BoundField DataField="Email" HeaderText="Email" SortExpression="Email" />
                            <asp:BoundField DataField="Mobile" HeaderText="Mobile" 
                                SortExpression="Mobile" />
                            <asp:BoundField DataField="Company_Id" HeaderText="Company Id" 
                                SortExpression="Company_Id" />
                            <asp:BoundField DataField="Vendor_Id" HeaderText="Vendor Id" 
                                SortExpression="Vendor_Id" />
                                <asp:BoundField DataField="UserPassword" HeaderText="User Password" 
                                SortExpression="User Password" />
                                <asp:TemplateField HeaderText="Delete">
                                <ItemTemplate>
                                    <asp:LinkButton ID="LinkButton1" runat="server" CommandName="Delete" 
                                        ForeColor="Black" 
                                        
                                        
                                        
                                        onclientclick="return confirm('Are you sure you want to delete these Record?')" 
                                        CausesValidation="False">Delete</asp:LinkButton>
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
                    <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
                        ConnectionString="<%$ ConnectionStrings:IBSBOConnectionString %>" 
                        DeleteCommand="DELETE FROM [User_master] WHERE [UserId] = @UserId" 
                        InsertCommand="INSERT INTO [User_master] ([UserName], [UserPassword], [GroupId], [IsActive], [Email], [Mobile], [Company_Id], [Vendor_Id], [ip], [sysdate], [Comapany_Id]) VALUES (@UserName, @UserPassword, @GroupId, @IsActive, @Email, @Mobile, @Company_Id, @Vendor_Id, @ip, @sysdate, @Comapany_Id)" 
                        SelectCommand="SELECT * FROM [User_master]" 
                        UpdateCommand="UPDATE [User_master] SET [UserName] = @UserName, [UserPassword] = @UserPassword, [GroupId] = @GroupId, [IsActive] = @IsActive, [Email] = @Email, [Mobile] = @Mobile, [Company_Id] = @Company_Id, [Vendor_Id] = @Vendor_Id, [ip] = @ip, [sysdate] = @sysdate, [Comapany_Id] = @Comapany_Id WHERE [UserId] = @UserId">
                        <DeleteParameters>
                            <asp:Parameter Name="UserId" Type="Int32" />
                        </DeleteParameters>
                        <InsertParameters>
                            <asp:Parameter Name="UserName" Type="String" />
                            <asp:Parameter Name="UserPassword" Type="String" />
                            <asp:Parameter Name="GroupId" Type="String" />
                            <asp:Parameter Name="IsActive" Type="String" />
                            <asp:Parameter Name="Email" Type="String" />
                            <asp:Parameter Name="Mobile" Type="String" />
                            <asp:Parameter Name="Company_Id" Type="Int32" />
                            <asp:Parameter Name="Vendor_Id" Type="Int32" />
                            <asp:Parameter Name="ip" Type="String" />
                            <asp:Parameter Name="sysdate" Type="DateTime" />
                            <asp:Parameter Name="Comapany_Id" Type="Int32" />
                        </InsertParameters>
                        <UpdateParameters>
                            <asp:Parameter Name="UserName" Type="String" />
                            <asp:Parameter Name="UserPassword" Type="String" />
                            <asp:Parameter Name="GroupId" Type="String" />
                            <asp:Parameter Name="IsActive" Type="String" />
                            <asp:Parameter Name="Email" Type="String" />
                            <asp:Parameter Name="Mobile" Type="String" />
                            <asp:Parameter Name="Company_Id" Type="Int32" />
                            <asp:Parameter Name="Vendor_Id" Type="Int32" />
                            <asp:Parameter Name="ip" Type="String" />
                            <asp:Parameter Name="sysdate" Type="DateTime" />
                            <asp:Parameter Name="Comapany_Id" Type="Int32" />
                            <asp:Parameter Name="UserId" Type="Int32" />
                        </UpdateParameters>
                    </asp:SqlDataSource>
                </td>
            </tr>
        </table>
        <p>
            &nbsp;</p>
        <p>
            &nbsp;</p>
    
  

</form>

    
  

</html>
