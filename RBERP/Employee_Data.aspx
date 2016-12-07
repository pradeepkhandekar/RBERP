<%@ Page Language="C#" AutoEventWireup="True" CodeBehind="Employee_Data.aspx.cs" Inherits="RBERP.Employee_Data" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <script src="js/jquery-1.11.1.min.js"></script>
    <script src="js/jquery.dataTables.min.js"></script>
    <link href="css/bootstrap-theme.css" rel="stylesheet" />
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="css/dataTables.jqueryui.css" rel="stylesheet" />
    <script type="text/javascript">
        $(document).ready(function () {
            $('#example').dataTable({
                "bLengthChange": true,
                "paging": true,
                "sPaginationType": "full_numbers" ,                    //For Different Paging  Style
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
<body>
    <form id="form1" runat="server">
    <div align="center" > <tr>
                    <td align="center" class="auto-style5">
                       <strong>Employee List</strong></td>
                </tr>
     <div style ="margin-top:30px" >
            <table class="table table-striped table-bordered " style="font-family: Serif;"
                border="1px" id="example"  >
                <thead >
                   
                    <tr>
                        <th>Employee Name
                        </th>
                        <th>EmpCode
                        </th>
                        <th>Company
                        </th>
                        <th>Email
                        </th>
                        <th>Department
                        </th>
                         <th>Reporting Emp
                        </th>
                         <th>EmpId
                        </th>
                        <th>Actions
                        </th>
                    </tr>
                </thead>
                <tbody id="tlist" runat="server">
                </tbody>
            </table>
        </div>
    </div>
    </form>
</body>
</html>
