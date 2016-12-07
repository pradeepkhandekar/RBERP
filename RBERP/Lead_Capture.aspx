<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Lead_Capture.aspx.cs" Inherits="RBERP.Lead_Capture" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>



<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <title></title>
     <style type="text/css">

      
         button, input[type="button"], input[type="submit"]{
         
            font-family: Raleway, Arial, sans-serif;
            font-size: 16px;
            font-weight: 400;
      
            transition: 0.5s;
	        text-decoration:none;
            background-color:blue;

            border: none;
            color: white;
            padding: 10px 20px;
            cursor:pointer;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            border-bottom-left-radius:15px;
            border-bottom-right-radius:15px;
             border-top-left-radius:15px;
            border-top-right-radius:15px;

        }
        button, input[type="button"], input[type="submit"]:hover {background-color:#ff0000;
            border: none;

            color: white;
            padding: 10px 20px;
            cursor:pointer;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            border-bottom-left-radius:15px;
            border-bottom-right-radius:15px;
             border-top-left-radius:15px;
            border-top-right-radius:15px;

        }
       
        body, #InnerDiv, .container-fluid, .container
        {
            position: relative;
        }
        
        
        /*      .dropdown-submenu:hover > .dropdown-menu .dropdown-menu { display: none; }
.dropdown-submenu:hover .dropdown-submenu:hover > .dropdown-menu { display: block; }*/
        
        /*  shows the dropdown on hover*/
        .navbar ul.nav li:hover > ul.dropdown-menu
        {
            display: block;
        }
        
        
        /* before and after */
        .navbar .nav > li > .dropdown-menu::before, .navbar .nav > li > .dropdown-menu::after
        {
            display: none;
        }
    </style>
    <style type="text/css">
        .auto-style11 {
            width: 800px;
        }
        .auto-style12 {
            height: 23px;
        }
        .auto-style13 {
            height: 26px;
            width:130px;
            font-family:Verdana;
            font-size:12px;
            align:right;
        }
        .auto-style14 {
            height: 26px;
            width: 329px;
             font-family:Verdana;
            font-size:12px;
        }
        .auto-style15 {
            width: 329px;
             font-family:Verdana;
            font-size:12px;
        }
        .auto-style16 {
            height: 23px;
            width: 329px;
             font-family:Verdana;
            font-size:12px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <div aria-busy="False">
<table class="auto-style11" align="center">
            <tr>
                <td colspan="7" align="center">
                            <asp:Label ID="Label1" runat="server" Text="Lead Capture"
                                Style="color: #0099FF; font-size: large; font-weight: 700;"></asp:Label>
                        </td>
            </tr>
            <tr>
                <td colspan="7" align="center">
                            <asp:Label ID="lblmsg" runat="server" ForeColor="Red"></asp:Label>
                    <asp:ToolkitScriptManager ID="ToolkitScriptManager1" runat="server">
                        </asp:ToolkitScriptManager>
                </td>
            </tr>
            <tr>
                <td class="auto-style14" align="right">Name </td>
                <td class="auto-style13">:</td>
                <td class="auto-style13" align="left">
                            <asp:TextBox ID="Name" name="Name" runat="server" MaxLength="50" TabIndex="1" Width="200px"></asp:TextBox>
                        </td>
                <td class="auto-style13" align="left">
                            Mobile No 
                        </td>
                <td class="auto-style13" align="left">
                            :</td>
                <td class="auto-style13" align="left">
                            <asp:TextBox ID="txtMobile" runat="server" MaxLength="10" TabIndex="2" Width="200px"></asp:TextBox>
                        </td>
                <td class="auto-style13"></td>
            </tr>
            <tr>
                <td align="right" class="auto-style14">Vertical Name</td>
                <td class="auto-style13">:</td>
                <td align="left" class="auto-style13">
                            <asp:DropDownList ID="ddlVertical" runat="server" Width="203px" TabIndex="3" Font-Size="9pt">
                            </asp:DropDownList>

                        </td>
                <td align="left" class="auto-style13">
                            Status</td>
                <td align="left" class="auto-style13">
                            :</td>
                <td align="left" class="auto-style13">
                            <asp:DropDownList ID="ddlstatus" runat="server" Width="203px" TabIndex="4" Font-Size="9pt">
                            </asp:DropDownList>

                        </td>
                <td class="auto-style13"></td>
            </tr>
            <tr>
                <td align="right" class="auto-style14">City Name</td>
                <td class="auto-style13">:</td>
                <td align="left" class="auto-style13">
                            <asp:TextBox ID="txtcityname" name="Name" runat="server" MaxLength="50" TabIndex="1" Width="200px"></asp:TextBox>

                        </td>
                <td align="left" class="auto-style13">
                            Product</td>
                <td align="left" class="auto-style13">
                            </td>
                <td align="left" class="auto-style13">
                            <asp:DropDownList ID="ddlproduct" runat="server" Width="210px" Height="16px" TabIndex="6" Font-Size="9pt">
                            </asp:DropDownList>

                        </td>
                <td class="auto-style13"></td>
            </tr>
            <tr>
                <td align="right" class="auto-style14">&nbsp;</td>
                <td class="auto-style13">&nbsp;</td>
                <td align="left" class="auto-style13">
                            &nbsp;</td>
                <td align="left" class="auto-style13">
                            &nbsp;</td>
                <td align="left" class="auto-style13">
                            &nbsp;</td>
                <td align="left" class="auto-style13">
                            &nbsp;</td>
                <td class="auto-style13">&nbsp;</td>
            </tr>
            <tr>
                <td class="auto-style16"></td>
                <td class="auto-style12"></td>
                <td class="auto-style12"></td>
                <td class="auto-style12">&nbsp;</td>
                <td class="auto-style12">&nbsp;</td>
                <td class="auto-style12">&nbsp;</td>
                <td class="auto-style12"></td>
            </tr>
            <tr>
                <td colspan="7" align="center" class="auto-style2">
                            <asp:Button ID="btnsubmit" runat="server" OnClick="btnsubmit_Click" Text="Submit" TabIndex="8" />
                             &nbsp;&nbsp;
                            <asp:Button ID="btnreset" runat="server" Text="Reset " TabIndex="9" OnClick="btnreset_Click" Width="108px" />
                        </td>
            </tr>
            <tr>
                <td class="auto-style15">
                            <asp:Label ID="lblUserId" runat="server" Visible="False"></asp:Label>
                        </td>
                <td>&nbsp;</td>
                <td>
                            <asp:DropDownList ID="ddlsouce" runat="server" Width="210px" Height="16px" TabIndex="7" Font-Size="9pt" Visible="False">
                            </asp:DropDownList>

                        </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
        </table>
            </div>
        </div>
        
    </form>
</body>
</html>

