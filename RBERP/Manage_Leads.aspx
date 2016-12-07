<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Manage_Leads.aspx.cs" Inherits="RBERP.Manage_Leads" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">


    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script src="http://ajax.aspnetcdn.com/ajax/jquery.ui/1.8.9/jquery-ui.js" type="text/javascript"></script>
<link href="http://ajax.aspnetcdn.com/ajax/jquery.ui/1.8.9/themes/start/jquery-ui.css"
    rel="stylesheet" type="text/css" />

   <%-- <script src="js/jquery-1.11.1.min.js"></script>--%>
    <script src="js/jquery.dataTables.min.js"></script>
    <link href="css/bootstrap-theme.css" rel="stylesheet" />
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="css/dataTables.jqueryui.css" rel="stylesheet" />

    <script type="text/javascript">
        $(document).ready(function () {
            $('#example').dataTable({
                "bLengthChange": true,
                "paging": true,
                "sPaginationType": "full_numbers",                    //For Different Paging  Style
                // "scrollY": 400,                                     // For Scrolling
                "jQueryUI": true                                      //Enabling JQuery UI(User InterFace)
            });
        });
    </script>
    <style type="text/css">
        .paging_full_numbers span.paginate_button {
            background-color: #fff;
        }

            .paging_full_numbers span.paginate_button:hover {
                background-color: #ccc;
            }

        .paging_full_numbers span.paginate_active {
            background-color: #99B3FF;
        }
    </style>
</head>
   
    <script type="text/javascript">

        $(function () {
            $("#txtcity").autocomplete({
                source: function (request, response) {

                    $.ajax({
                        url: '<%=ResolveUrl("Manage_Leads.aspx/GetCities") %>',
                    data: "{ 'prefix': '" + request.term + "'}",
                    dataType: "json",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    success: function (data) {
                        response($.map(data.d, function (item) {
                            return {
                                label: item.split('-')[0],
                                val: item.split('-')[1]
                            }
                        }))
                    },
                    error: function (response) {
                        alert(response.responseText);
                    },
                    failure: function (response) {
                        alert(response.responseText);
                    }
                });
              },
                    select: function (e, i) {
                        $("[id$=hfCityId]").val(i.item.val);
                    },
                    minLength: 1
                });
            });




    $(function () {
        $("#txtstatus").autocomplete({
            source: function (request, response) {

                $.ajax({
                    url: '<%=ResolveUrl("Manage_Leads.aspx/GetStatus") %>',
                    data: "{ 'prefix': '" + request.term + "'}",
                    dataType: "json",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    success: function (data) {
                        response($.map(data.d, function (item) {
                            return {
                                label: item.split('-')[0],
                                val: item.split('-')[1]
                            }
                        }))
                    },
                    error: function (response) {
                        alert(response.responseText);
                    },
                    failure: function (response) {
                        alert(response.responseText);
                    }
                });
              },
                    select: function (e, i) {
                        $("[id$=hfstatus]").val(i.item.val);
                    },
                    minLength: 1
                });
            });

    $(function () {
        $("#txtemp").autocomplete({
            source: function (request, response) {

                $.ajax({
                    url: '<%=ResolveUrl("Manage_Leads.aspx/Getemp") %>',
                    data: "{ 'prefix': '" + request.term + "'}",
                    dataType: "json",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    success: function (data) {
                        response($.map(data.d, function (item) {
                            return {
                                label: item.split('-')[0],
                                val: item.split('-')[1]
                            }
                        }))
                    },
                    error: function (response) {
                        alert(response.responseText);
                    },
                    failure: function (response) {
                        alert(response.responseText);
                    }
                });
              },
                    select: function (e, i) {
                        $("[id$=hfemp]").val(i.item.val);
                    },
                    minLength: 1
                });
            });


    function Clonedata() {
        var cboxes = document.getElementsByName('check[]');
        var len = cboxes.length;
        var leadids = '';
        for (var i = 0; i < len; i++) {
            if (cboxes[i].checked) {
                leadids += "," + cboxes[i].value;
            }
            //  alert(leadids);
            //  alert(i + (cboxes[i].checked ? ' checked ' : ' unchecked ') + cboxes[i].value);
        }

        $.ajax({
            url: '<%=ResolveUrl("Manage_Leads.aspx/CloneData") %>',
                data: "{ 'prefix': '" + leadids + "'}",
                dataType: "json",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    // alert(data.d);
                },
                error: function (response) {
                    alert(response.responseText);
                },
                failure: function (response) {
                    alert(response.responseText);
                }
            });

        }
        function DeleteData() {
            var cboxes = document.getElementsByName('check[]');
            var len = cboxes.length;
            var leadids = '';
            for (var i = 0; i < len; i++) {
                if (cboxes[i].checked) {
                    leadids += "," + cboxes[i].value;
                }
                //  alert(leadids);
                //  alert(i + (cboxes[i].checked ? ' checked ' : ' unchecked ') + cboxes[i].value);
            }

            $.ajax({
                url: '<%=ResolveUrl("Manage_Leads.aspx/DeleteData") %>',
                data: "{ 'prefix': '" + leadids + "'}",
                dataType: "json",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                     alert("Record deleted successfully...! Please click on show button refresh list.");
                },
                error: function (response) {
                    alert(response.responseText);
                },
                failure: function (response) {
                    alert(response.responseText);
                }
            });
        }


        function getdata() {
            var cityid = '444';

            $.ajax({
                url: '<%=ResolveUrl("Manage_Leads.aspx/BindDatatable") %>',
                    data: "{ 'prefix': '" + cityid + "'}",
                    dataType: "json",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    success: function (data) {
                        for (var i = 0; i < data.d.length; i++) {
                            $("#tlist").append("<tr> <td>" + data.d[i].leadid + "</td>  <td>" + data.d[i].name + "</td>    <td>" + data.d[i].lead_status + "</td>   </tr>");
                            //alert(JSON.stringify(data));
                        }
                    },
                    error: function (response) {
                        alert(response.responseText);
                    },
                    failure: function (response) {
                        alert(response.responseText);
                    }
                });

                

            //$.ajax({
            //    url: "Manage_Leads.aspx/BindDatatable",
            //    data: "{}",
            //    dataType: "json",
            //    type: "POST",
            //    contentType: "application/json; charset=utf-8",
            //    success: function (data) {
            //        for (var i = 0; i < data.d.length; i++) {
            //            $("#example").append("<tr> <td>  data.d[i].leadid %></td>  <td>"+  data.d[i].name +"</td>    <td>"+  data.d[i].lead_status +"</td>   </tr>");
            //            alert(JSON.stringify(data));
            //        }
            //    },
            //    error: function (result) {
            //        alert("Error");
            //    }
            //});

        }
        function deleteRecordConfirm() {

            if (confirm('Are you sure, you want to delete this lead?')) {
                DeleteData();
                return true;
            }
            else {
                return false;
            }
        }


</script>
<body>
    <form id="form1" runat="server">
        <asp:HiddenField ID="hfCityId" Value="0" runat="server" />
            <asp:HiddenField ID="hfstatus" Value="0"  runat="server" />
        <asp:HiddenField ID="hfemp"  Value="0" runat="server" />
        <asp:ToolkitScriptManager ID="ToolkitScriptManager1" runat="server">
                        </asp:ToolkitScriptManager>
    <div align="center" > <tr>
                    <td align="center" class="auto-style5">
                       <strong>Manage Leads</strong></td>
                </tr>
     <div style ="margin-top:30px" >
         <table>
             <tr><td>
                 <table><tr>
                     <td align="right">From Date</td><td align="left">
                        <asp:TextBox ID="txtfromdt" runat="server" Width="110px"></asp:TextBox>
                        <asp:CalendarExtender ID="CalendarExtender1" runat="server" TargetControlID="txtfromdt"></asp:CalendarExtender>
                     </td>
                     <td  align="right">To Date</td><td align="left">
                        <asp:TextBox ID="txttodt" runat="server" Width="110px"></asp:TextBox>
                        <asp:CalendarExtender ID="CalendarExtender2" runat="server" TargetControlID="txttodt"></asp:CalendarExtender>
                     </td>
                        </tr>
                     <tr >
                     <td  align="right">City Name</td><td>
                        <asp:TextBox ID="txtcity" runat="server" Width="200px" Height="18px"></asp:TextBox>
                    <asp:AutoCompleteExtender ID="AutoCompleteExtender1" runat="server" TargetControlID="txtcity"
         MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="1000"
         ServiceMethod="GetCities" >
    </asp:AutoCompleteExtender>
                </td>
                     <td  align="right">Employee Name</td><td  align="left">
                        <asp:TextBox ID="txtemp" runat="server" Width="200px"></asp:TextBox>
                    <asp:AutoCompleteExtender ID="txtemp_AutoCompleteExtender" runat="server" TargetControlID="txtemp"
         MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="1000"
         ServiceMethod="GetCities" >
    </asp:AutoCompleteExtender>
                         </td>
                        </tr>
                     <tr>
                     <td  align="right">Status </td><td align="left">
                        <asp:TextBox ID="txtstatus" runat="server" Width="200px"></asp:TextBox>
                    <asp:AutoCompleteExtender ID="txtstatus_AutoCompleteExtender" runat="server" TargetControlID="txtstatus"
         MinimumPrefixLength="1" EnableCaching="true" CompletionSetCount="1" CompletionInterval="1000"
         ServiceMethod="GetCities" >
    </asp:AutoCompleteExtender>
                         </td>
                     <td  align="right">&nbsp;</td><td align="left">
                         <asp:Button ID="Button1" runat="server" Text="Show" OnClick="Button1_Click" />
                         </td>
                        </tr>
                     <tr>
                     <td  align="right">&nbsp;</td><td align="left">
                         <input id="btnndelete" type="button" value="Delete" onclick="javascript: deleteRecordConfirm();" /></td>
                     <td  align="right">&nbsp;<input id="btnclone" type="button" value="Clone" onclick="return Clonedata()" /></td><td align="left">
                         &nbsp;</td>
                        </tr>
                     </table>

                 </td></tr>

                    <tr><td>
            <table class="table table-striped table-bordered " style="font-family: Serif;"
                border="1px" id="example"  >
                <thead >
                   
                    <tr>
                        <th>
                            <input id="select_all" type="checkbox" />
                        </th>
                        <th>Lead ID
                        </th>
                        <th>Cust. Name
                        </th>
                        <th>Emp Code
                        </th>  <th>Emp Name
                        </th>
                        <th>City
                        </th>
                         <th>Mobile No
                        </th> 
                        <th>Status
                        </th>
                         <th>Next Date
                        </th>
                       
                          <th>Remark
                        </th>
                        <th>Campaign Name
                        </th>
                        <th>Source Name
                        </th>
                        <th>Vertical Name
                        </th>
                    </tr>
                </thead>
                <tbody id="tlist" runat="server">
                    <%                     if (ds != null)
                        {
                            if (ds.Tables[0].Rows.Count > 0)
                            {
                                String UnreadText = "";
                                Int32 i = 0;
                                for (i = 0; i < ds.Tables[0].Rows.Count; i++)
                                { %>
 

                        <tr style='FONT-SIZE: 12pt;font face ='Arial' >

                      
                        			<td class="center"><input class="checkbox" id='chk' value=<%   Response.Write(ds.Tables[0].Rows[i]["leadid"].ToString());  %> 
                                         name="check[]" type =checkbox /> </td>


                        			<td class="center">
                        				<a  href="Manage_lead_data.aspx?leadid=<% Response.Write(ds.Tables[0].Rows[i]["leadid"].ToString()); %>"\>

                        				<%  Response.Write(ds.Tables[0].Rows[i]["leadid"].ToString()); %>
                        				</a>

                        			</td>
                        			<td class="left"><%  Response.Write(ds.Tables[0].Rows[i]["name"].ToString()); %></td>
                        			<td class="center"><%   Response.Write(ds.Tables[0].Rows[i]["emp_code"].ToString()); %></td>
                        			<td class="left"><%   Response.Write(ds.Tables[0].Rows[i]["emp_name"].ToString()); %></td>
                        			<td class="center"><%  Response.Write(ds.Tables[0].Rows[i]["City_Name"].ToString()); %></td>
                        			<td class="left"><%   Response.Write(ds.Tables[0].Rows[i]["Mobile"].ToString()); %></td>
                        			<td class="center"><%  Response.Write(ds.Tables[0].Rows[i]["leadstatus"].ToString()); %></td>
                        			<td class="center"><%  Response.Write(ds.Tables[0].Rows[i]["next_date"].ToString()); %></td>
                        			<td class="center"><% Response.Write(ds.Tables[0].Rows[i]["remark"].ToString()); %></td>
                                    <td class="center"><% Response.Write(ds.Tables[0].Rows[i]["campaignName"].ToString()); %></td>
                                    <td class="center"><% Response.Write(ds.Tables[0].Rows[i]["Source_Name"].ToString()); %></td>
                                    <td class="center"><% Response.Write(ds.Tables[0].Rows[i]["Vertical_Name"].ToString()); %></td>
                       
                        		</tr>
                       

                     <%
                                 }
                             }
                         } %>
                </tbody>
            </table>
                        </td></tr>
         </table>
        </div>
    </div>
    </form>
</body>
</html>
 <script type="text/javascript">


     var select_all = document.getElementById("select_all"); //select all checkbox
     var checkboxes = document.getElementsByClassName("checkbox"); //checkbox items

     //select all checkboxes
     select_all.addEventListener("change", function (e) {
         for (i = 0; i < checkboxes.length; i++) {
             checkboxes[i].checked = select_all.checked;
         }
     });


     for (var i = 0; i < checkboxes.length; i++) {
         checkboxes[i].addEventListener('change', function (e) { //".checkbox" change 
             //uncheck "select all", if one of the listed checkbox item is unchecked
             if (this.checked == false) {
                 select_all.checked = false;
             }
             //check "select all" if all checkbox items are checked
             if (document.querySelectorAll('.checkbox:checked').length == checkboxes.length) {
                 select_all.checked = true;
             }
         });
     }


     function test() {

         var cboxes = document.getElementsByName('check[]');
         var len = cboxes.length;
         var leadids = '';
         for (var i = 0; i < len; i++) {
             if (cboxes[i].checked) {
                 leadids += "," + cboxes[i].value;
             }
             alert(leadids);
             alert(i + (cboxes[i].checked ? ' checked ' : ' unchecked ') + cboxes[i].value);
         }
         //var favorite = [];

         //$("input:checkbox[name=check]:checked").each(function () {
         //   // alert($(this).val());
         //    favorite.push($(this).val());
         //});
         //alert("My favourite sports are: "+  favorite.join(", "));
     }

    </script>