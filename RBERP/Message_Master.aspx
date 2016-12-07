<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Message_Master.aspx.cs" Inherits="RBERP.Message_Master" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        .auto-style1 {
            width: 100%;
        }
        .auto-style4 {
            margin-left: 0px;
        }
        </style>
</head>
<body>

    <form id="form1" runat="server">
    <table class="auto-style1">
        <tr>
            <td align="center">
                        <asp:Label ID="Label1" runat="server" Text="Message Master"
                            Style="color: #0099FF; font-size: large; font-weight: 700;"></asp:Label>
                    </td>
        </tr>
        <tr>
            <td align="center"><hr /></td>
        </tr>
         <tr>
            <td align="center"></td>
        </tr>
         <tr>
            <td align="center">
                <table width="600px">
                    <tr>
                        <td align="right" >Message Id</td>
                        <td align="center">:</td>
                        <td align="left">
                            <asp:Label ID="lblid" runat="server"></asp:Label>&nbsp;</td>
                    </tr>
                    <tr>
                        <td align="right">Message Title</td>
                        <td align="center">:</td>
                        <td align="left">
                <asp:TextBox ID="txtMessage" runat="server"></asp:TextBox>
                             <asp:RequiredFieldValidator runat="server" id="reqName"  controltovalidate="txtmessage" errormessage="Please enter MessageTitle!" >*</asp:RequiredFieldValidator>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">Message Body</td>
                        <td align="center">:</td>
                        <td align="left">
                <asp:TextBox ID="TextArea1" runat="server" Height="78px" TextMode="MultiLine" Width="193px"></asp:TextBox>
                             <asp:RequiredFieldValidator runat="server" id="RequiredFieldValidator1" controltovalidate="TextArea1" errormessage="Please enter MessageBody!" >*</asp:RequiredFieldValidator>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">Is Active</td>
                        <td align="center">:</td>
                        <td align="left">
                <asp:CheckBox ID="Active" runat="server" Checked="True" />
                        </td>
                    </tr>
                    <tr>
                        <td align="center" colspan="3">&nbsp;</td>
                    </tr>
                    <tr>
                        <td align="center" colspan="3">
              
                <asp:Button ID="btnsubmit" runat="server" Text="Submit" OnClick="btnsubmit_Click"  Width="109px"  /> 
                &nbsp;<asp:Button runat="server" Text="Reset" ID="btnReset" OnClick="btnReset_Click" Width="102px" CausesValidation="False" />
                        </td>
                    </tr>
                </table>
             </td>
        </tr>
        <tr>
            <td align="center">
    
                &nbsp;</td>
        </tr>
        <tr>
            <td align="center">
    
                                <asp:GridView ID="GridView1" runat="server" 
                                    AutoGenerateColumns="False" CellPadding="4" PageSize="5"
                                    CssClass="tbl"  DataKeyNames="Message_Id" AllowPaging="True" OnSelectedIndexChanged="GridView1_SelectedIndexChanged"  OnPageIndexChanging="GridView1_PageIndexChanging" style="margin-left: 0px" Width="823px" ForeColor="#333333" >
                                    <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
                                    <Columns>

                                        <%-- <asp:TemplateField HeaderText="Sr No">
                                            <ItemTemplate>
                                                <%#Container.DataItemIndex+1 %>
                                            </ItemTemplate>
                                        </asp:TemplateField>--%>
                                        <asp:BoundField HeaderText="Message Id" DataField="Message_Id"
                                            SortExpression="Message_Id" />
                                        <asp:BoundField HeaderText="Message Title" DataField="messageTitle"
                                            SortExpression="messageTitle" />
                                        <asp:BoundField HeaderText="Message Body" DataField="messagebody"
                                            SortExpression="messagebody" />
                                        <asp:BoundField HeaderText="Is Active" DataField="IsActive"
                                            SortExpression="IsActive" />
                                      
                                        <asp:BoundField HeaderText="Created Date" DataField="Sysdate"
                                            SortExpression="Sysdate" />
                                         <asp:CommandField  HeaderText="Action" ShowSelectButton="True"  />
                                        <%--<asp:TemplateField HeaderText="Action">
                                           
                                            <ItemTemplate>
                                                <asp:LinkButton ID="lblEdit" runat="server" CommandName="ShowPopup"
                                                    CausesValidation="false" CommandArgument='<%#Eval("Message_Id") %>'>Edit</asp:LinkButton>
                                            </ItemTemplate>
                                        </asp:TemplateField>--%>
                                      <%--  <asp:TemplateField HeaderText="Action">
                                           
                                            <ItemTemplate>
                                                <asp:LinkButton ID="lblDelete" runat="server" CommandName="ShowPopup"
                                                    CausesValidation="false" CommandArgument='<%#Eval("Message_Id") %>'>Delete</asp:LinkButton>
                                            </ItemTemplate>
                                        </asp:TemplateField>--%>
                                    </Columns>
                                    <EditRowStyle BackColor="#999999" />
                                    <FooterStyle BackColor="#5D7B9D" ForeColor="White" Font-Bold="True" />
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
            <td aling="center" >
    
                &nbsp;</td>
        </tr>
    </table>
    
    </form>
</body>
</html>
