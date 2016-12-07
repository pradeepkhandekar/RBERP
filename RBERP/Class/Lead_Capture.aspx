<%@ page language="C#" autoeventwireup="true" codebehind="Lead_Capture.aspx.cs" inherits="RBERP.Lead_Capture" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <div>

                <table class="tbl" >
                    <tr>
                        <td colspan="2" align="center" width="900px">
                            <asp:label id="Label1" runat="server" text="Lead"
                                style="color: #0099FF; font-size: large; font-weight: 700;"></asp:label>
                        </td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" width="900px" align="center">
                            <hr />
                        </td>
                    </tr>
                     <tr>
                        <td align="center" colspan="2" style="width: 1800px" width="900px">
                            <asp:label id="lblmsg" runat="server" forecolor="Red"></asp:label>
                        </td>
                         <td>

                         </td>
                    </tr>
                    <tr>
                        <td align="right" class="style3">Name 
                    : </td>
                        <td width="900px">
                            <asp:textbox id="Name" name="Name" runat="server" maxlength="50"></asp:textbox>
                            <asp:requiredfieldvalidator id="RequiredFieldValidator1" runat="server"
                                controltovalidate="Name"
                                errormessage="&nbsp;&nbsp;Please Enter Name" forecolor="Red"
                                setfocusonerror="True"></asp:requiredfieldvalidator>
                        </td>
                    </tr>

                    <tr>
                        <td align="right" class="style3">Mobile No 
                    : </td>
                        <td width="900px">
                            <asp:textbox id="txtMobile" runat="server" maxlength="10"></asp:textbox>
                            <asp:requiredfieldvalidator id="RequiredFieldValidator2" runat="server"
                                controltovalidate="txtMobile"
                                errormessage="&nbsp;&nbsp;Please Enter Mobile Number" forecolor="Red"
                                setfocusonerror="True"></asp:requiredfieldvalidator>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" class="style3">Email Id
                    : </td>
                        <td width="900px">
                            <asp:textbox id="txtEmailId" runat="server" maxlength="30"></asp:textbox>
                            <asp:requiredfieldvalidator id="RequiredFieldValidator3" runat="server"
                                controltovalidate="txtEmailId"
                                errormessage="&nbsp;&nbsp;Please Enter Email Id" forecolor="Red"
                                setfocusonerror="True"></asp:requiredfieldvalidator>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" class="style3">Monthly Income
                    : </td>
                        <td width="900px">
                            <asp:textbox id="txtIncome" runat="server" maxlength="10"></asp:textbox>
                            <asp:requiredfieldvalidator id="RequiredFieldValidator4" runat="server"
                                controltovalidate="txtIncome"
                                errormessage="&nbsp;&nbsp;Please Enter Monthly Income" forecolor="Red"
                                setfocusonerror="True"></asp:requiredfieldvalidator>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" class="style3">Date Of Birth
                    : </td>
                        <td width="900px">
                            <asp:textbox id="txtDob" name="txtDob" runat="server"></asp:textbox>

                        </td>
                    </tr>
                    <tr>
                        <td align="right" class="style3">PAN Card Number
                    : </td>
                        <td width="900px">
                            <asp:textbox id="txtPan" runat="server" maxlength="12"></asp:textbox>
                            <asp:requiredfieldvalidator id="RequiredFieldValidator5" runat="server"
                                controltovalidate="txtPan"
                                errormessage="&nbsp;&nbsp;Please Enter PAN Number" forecolor="Red"
                                setfocusonerror="True"></asp:requiredfieldvalidator>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" class="style3">Address
                    : </td>
                        <td width="900px">
                            <asp:textbox id="txtAddress" runat="server" textmode="multiline" maxlength="100"></asp:textbox>

                        </td>
                    </tr>
                    <tr>
                        <td align="right" class="style3">State
                    : </td>
                        <td width="900px">
                            <asp:dropdownlist id="ddlState" runat="server" width="148px">              
                            </asp:dropdownlist>

                        </td>
                    </tr>
                    <tr>
                        <td align="right" class="style3">City
                    : </td>
                        <td width="900px">
                            <asp:dropdownlist id="ddlCity" runat="server" width="148px">
                           </asp:dropdownlist>

                        </td>
                    </tr>
                    <tr>
                        <td align="right" class="style3">Profession
                    : </td>
                        <td width="900px">
                            <asp:dropdownlist id="ddlProfession" runat="server" width="148px">
                            </asp:dropdownlist>

                        </td>
                    </tr>
                    <tr>
                        <td align="right" class="style3">Loan For
                    : </td>
                        <td width="900px">
                            <asp:dropdownlist id="ddlProduct" runat="server" width="148px">
                            </asp:dropdownlist>

                        </td>
                    </tr>
                   
                    <tr>
                        <td align="center" colspan="2" style="width: 1800px" width="900px">&nbsp;</td>
                    </tr>
                    <tr>
                        <td align="right" class="style3">&nbsp;</td>
                        <td width="900px">
                            <asp:imagebutton id="Submit" runat="server" text="Submit" onclick="Submit_Click" />
                        </td>
                    </tr>
                    <tr>
                        <td align="center" colspan="2" width="900px"></td>
                    </tr>
                </table>

            </div>
        </div>
    </form>
</body>
</html>

<script >
    $(function () {
        $("#txtDob").datepicker(
            {
                changeMonth: true,
                changeYear: true,
                yearRange: 'c-60:c',
                dateFormat: 'dd-mm-yy',
                maxDate: '-18y'
            });
    });

</script>