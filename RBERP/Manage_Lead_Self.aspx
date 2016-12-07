<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Manage_Lead_Self.aspx.cs" Inherits="RBERP.Manage_Lead_Self" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<script language="javascript" type="text/javascript" src="Code/BackOfficeModuleCode.js?0"></script>

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


    #modalpopuplead {
        position: fixed;
        top: 20%;
        left: 50%;
        margin-left: -190px;
        /* margin-top: -600px;*/
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

    function ShowLeadPopup() {
        $('#modalpopuplead').show();
        $('#<%=pnlvalidlead.ClientID %>').show();
        }
        function HideLeadPopup() {
            $('#modalpopuplead').hide();
            $('#<%=pnlvalidlead.ClientID %>').hide();
    }
    $(".btnClose").live('click', function () {
        HideLeadPopup();
    });
    $(document).ready(function () {
        $("#ddlvleadstatus").change(function () {

            var skillsSelect = document.getElementById("ddlvleadstatus");
            var selectedText = skillsSelect.options[skillsSelect.selectedIndex].text;
            if (selectedText != "Select One") {
                $('#Datetype').html(selectedText);
            }
        }).change();
    });

</script>


<body>
    <form id="form1" runat="server">
        <div>
            <table class="tbl" width="100%">
                <tr>
                    <td align="center" class="auto-style1">
                        <asp:Label ID="Label1" runat="server" Text="Manage Leads"
                            Style="color: #0099FF; font-size: large; font-weight: 700;"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td align="center" class="auto-style1">&nbsp;</td>
                </tr>
                <tr>
                    <td align="center" class="auto-style1">
                        <table width="700px">
                            <tr>
                                <td align="right" width="140px">Select City</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:DropDownList ID="ddlCity" runat="server" Width="200px">
                                    </asp:DropDownList>
                                </td>
                                <td align="right" width="140px">Employee</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:DropDownList ID="ddlEmployee" runat="server" Width="200px">
                                    </asp:DropDownList>
                                </td>
                            </tr>
                            <tr>
                                <td align="right" width="140px">Lead Status</td>
                                <td align="center">:</td>
                                <td align="left">
                                    <asp:DropDownList ID="ddlStatus" runat="server" Width="200px">
                                    </asp:DropDownList>
                                </td>
                                <td align="right" width="140px">&nbsp;</td>
                                <td align="center">&nbsp;</td>
                                <td align="left">
                                    <asp:Button ID="btnShow" runat="server" OnClick="btnShow_Click" Text="Show" />
                                </td>
                            </tr>
                            <tr>
                                <td align="center" colspan="6">
                                    &nbsp;</td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="center" class="auto-style1">&nbsp;</td>
                </tr>
                <tr>
                    <td align="center">

                        <asp:GridView ID="dgManageLeads" runat="server" BackColor="White" BorderColor="#3366CC"
                            BorderStyle="None" BorderWidth="1px" CellPadding="4" AutoGenerateColumns="False" DataKeyNames="LeadId" CommandName="ShowPopup" OnRowCommand="dgManageLeads_RowCommand" Font-Size="10pt" AllowPaging="True" PageSize="50" OnPageIndexChanging="dgManageLeads_PageIndexChanging">
                            <Columns>
                                <asp:HyperLinkField DataNavigateUrlFields="leadid" DataNavigateUrlFormatString="manage_lead_data.aspx?leadid={0}" DataTextField="leadid" HeaderText="Lead Id" Target="_blank" Text="Lead Id" />
                                <asp:BoundField DataField="name" HeaderText="Customer Name">
                                    <ItemStyle HorizontalAlign="Left" />
                                </asp:BoundField>
                                <asp:BoundField DataField="emp_code" HeaderText="Emp Code">
                                    <ItemStyle HorizontalAlign="Left" />
                                </asp:BoundField>
                                <asp:BoundField DataField="City_Name" HeaderText="City">
                                    <ItemStyle HorizontalAlign="Left" />
                                </asp:BoundField>
                                <asp:BoundField DataField="Bank_Name" HeaderText="Bank Name">
                                    <ItemStyle HorizontalAlign="Left" />
                                </asp:BoundField>
                                <asp:BoundField DataField="companyname" HeaderText="Company Name">
                                    <ItemStyle HorizontalAlign="Left" />
                                </asp:BoundField>
                                <asp:BoundField DataField="designation" HeaderText="Designation">
                                    <ItemStyle HorizontalAlign="Left" />
                                </asp:BoundField>
                                <asp:BoundField DataField="phone" HeaderText="Contact No">
                                    <ItemStyle HorizontalAlign="Center" />
                                </asp:BoundField>
                                <asp:BoundField DataField="mobile" HeaderText="Mobile">
                                    <ItemStyle HorizontalAlign="Center" />
                                </asp:BoundField>
                                <asp:BoundField DataField="LeadDate" HeaderText="Lead Date">
                                    <ItemStyle HorizontalAlign="Center" />
                                </asp:BoundField>
                                <asp:BoundField DataField="Next_date" HeaderText="Next FollowUp Date">
                                    <ItemStyle HorizontalAlign="Center" />
                                </asp:BoundField>
                                <asp:BoundField DataField="LeadStatus" HeaderText="Lead Status">
                                    <ItemStyle HorizontalAlign="Left" />
                                </asp:BoundField>
                                <asp:BoundField DataField="Remark" HeaderText="Remark">
                                    <ItemStyle HorizontalAlign="Left" />
                                    </asp:BoundField>
                                <asp:BoundField DataField="campaignName" HeaderText="Campaign Name">
                                    <ItemStyle HorizontalAlign="Left" />    
                                </asp:BoundField>
                                 <asp:BoundField DataField="Source_Name" HeaderText="Source Name">
                                    <ItemStyle HorizontalAlign="Left" />    
                                </asp:BoundField>
                                 <asp:BoundField DataField="Vertical_Name" HeaderText="Vertical Name">
                                    <ItemStyle HorizontalAlign="Left" />    
                                </asp:BoundField>

                                <asp:TemplateField HeaderText="Edit" Visible="False">
                                    <ItemTemplate>
                                        <asp:LinkButton ID="lblEditlead" runat="server" CommandName="ShowPopup"
                                            CausesValidation="false" CommandArgument='<%#Eval("leadid") %>'>Edit</asp:LinkButton>
                                    </ItemTemplate>
                                </asp:TemplateField>
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
                    <td align="center">&nbsp;</td>
                </tr>

                <tr>
                    <td align="center">
                        <asp:ToolkitScriptManager ID="ToolkitScriptManager1" runat="server">
                        </asp:ToolkitScriptManager>
                    </td>
                </tr>

                <tr>
                    <td align="center"></td>
                </tr>
                <tr>
                    <td align="center">


                        <div id="modalpopuplead">
                            <asp:Panel ID="pnlvalidlead" runat="server" BackColor="#f7f6f3">
                                <table cellpadding="4" cellspacing="2" style="width: 550px; height: 400px">
                                    <tr>
                                        <td class="web_dialog_title" colspan="2">Valid Lead Details</td>
                                        <td class="web_dialog_title align_right">
                                            <asp:Button ID="Button1" runat="server" CausesValidation="false" Text="Close" OnClick="btnClose_Click" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right">Lead Id</td>
                                        <td align="center" class="auto-style1">:</td>
                                        <td align="left">
                                            <asp:Label ID="lblvlid" runat="server"></asp:Label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right">Lead Status</td>
                                        <td align="center" class="auto-style1">:</td>
                                        <td align="left">
                                            <asp:DropDownList ID="ddlvleadstatus" CssClass="" runat="server" Width="200px">
                                            </asp:DropDownList>
                                        </td>
                                    </tr>
                                    <tr>
                                       
                                        <td align="right"><span id="Datetype"></span>&nbsp;Date</td>
                                        <td align="center" class="auto-style1">:</td>
                                        <td align="left">
                                            <asp:TextBox ID="txtvfollowupdate" runat="server" Width="200px"></asp:TextBox>
                                            <asp:CalendarExtender ID="CalendarExtender2" runat="server" TargetControlID="txtvfollowupdate"></asp:CalendarExtender>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right">Follow Time</td>
                                        <td align="center" class="auto-style1">:</td>
                                        <td align="left">
                                            <asp:DropDownList ID="ddlvTime" runat="server" Width="100px">
                                            </asp:DropDownList>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right">Amount</td>
                                        <td align="center" class="auto-style1">:</td>
                                        <td align="left">

                                            <asp:TextBox ID="txtvamt" runat="server" Width="200px">0</asp:TextBox>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right">Assign To</td>
                                        <td align="center" class="auto-style1">:</td>
                                        <td align="left">
                                            <asp:DropDownList ID="ddlvAssignTo" runat="server" Width="200px">
                                            </asp:DropDownList>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td align="right">Bank Name</td>
                                        <td align="center" class="auto-style1">:</td>
                                        <td align="left">
                                            <asp:DropDownList ID="ddlBank" runat="server" Width="200px">
                                            </asp:DropDownList>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right">
                                            Remark</td>
                                        <td align="center" class="auto-style1">:</td>
                                        <td align="left">
                                            <asp:TextBox ID="txtvremark" runat="server" Width="200px"></asp:TextBox>
                                        </td>
                                        <asp:Label ID="vleadidhidden" runat="server"></asp:Label>
                                    </tr>
                                    <tr>
                                        <td align="center" colspan="3">
                                            <asp:Button ID="btnupd" runat="server" CausesValidation="False" OnClick="btnupd_Click" Text="Update" />
                                            <asp:Button ID="btnres" runat="server" CausesValidation="false" OnClick="btnres_Click" Text="Reset" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" colspan="3">
                                            <asp:Panel ID="Panel1" runat="server" ScrollBars="Both">
                                                <asp:GridView ID="dgValidlead" runat="server" AutoGenerateColumns="False" BackColor="White" BorderColor="#3366CC" BorderStyle="None" BorderWidth="1px" CellPadding="4" DataKeyNames="LeadID" OnSelectedIndexChanged="dgValidlead_SelectedIndexChanged">
                                                    <Columns>
                                                        <asp:BoundField DataField="LeadID" HeaderText="Lead ID" />
                                                        <asp:BoundField DataField="LeadDate" HeaderText="Followup Date" />
                                                        <asp:BoundField DataField="amount" HeaderText="Amount" />
                                                        <asp:BoundField DataField="LeadStatus" HeaderText="Lead Status" />
                                                        <asp:BoundField DataField="Remark" HeaderText="Remarks" />
                                                        <asp:BoundField ControlStyle-BackColor="White" DataField="lead_Data_id" HeaderText="Lead Data ID" />
                                                        <asp:BoundField ControlStyle-BackColor="White" DataField="lead_status_id" HeaderText="Lead StatusId" />
                                                        <asp:BoundField ControlStyle-BackColor="White" DataField="empcode" HeaderText="Emp Code" />
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
                                            </asp:Panel>
                                        </td>
                                    </tr>
                                </table>
                            </asp:Panel>
                        </div>

                    </td>
                </tr>
            </table>
        </div>

    </form>

</body>

</html>
