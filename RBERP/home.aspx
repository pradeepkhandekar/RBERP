<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="home.aspx.cs" Inherits="RBERP.home" %>
<!DOCTYPE html>
<html lang="en">
<head id="Head1" runat="server">
    <title>Welcome to RupeeBoss.com ERP </title>
    <meta http-equiv="Cache-Control" content="no-cache" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <!-- Mobile viewport optimized: h5bp.com/viewport -->
    <meta name="viewport" content="width=device-width">
    <link href="Common/BackOffice.css" rel="stylesheet" type="text/css" />
    
    <link href="Common/main.css" rel="stylesheet" type="text/css" />
	<link rel="stylesheet" href="Common/bootstrap.css" type="text/css" />
    
	
    <link rel="apple-touch-icon" href="Common/img/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="Common/img/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="Common/img/apple-touch-icon-114x114.png">
    
    <%--<link rel="shortcut icon" href="http://in.bookmyshow.com/favicon.ico" type="image/x-icon" />--%>

    <script language="javascript" type="text/javascript" src="Code/BackOfficeModuleCode.js?0"></script>
    
    <script type="text/javascript" src="Code/jquery-ui.js"></script>
    
    <script type="text/javascript" src="Code/jquery.uniform.js"></script>
    <%--    <script type="text/javascript" src="Code/jquery.blockUI.js"></script>--%>
    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
  <link rel="stylesheet" href="Common/bootstrap-responsive.css" type="text/css" />
  <script type="text/javascript" src="Code/jquery-1.8.3.js"></script>
  <script type="text/javascript" src="Code/bootstrap.js"></script>
  
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
</head>
<body>
    <script language="javascript" type="text/javascript">

        function subGoToUrl(strURL, blnIsParent, strModuleName) {
            if (blnIsParent == false) {
                document.getElementById('frmContent').src = strURL;
            }
            else {
                parent.location.href = strURL;
            }
        }
        function subClickAnchor() {
            document.getElementById('lnkMyProfile').click();
        }       
    </script>
	<div class="container">
	 <div class="col-md-12">
    <form id="frmMenu" runat="server">
    <input type="hidden" id="hdnUserGroupId" runat="server" value="" />
    <div id="InnerDiv" class="container">
            
 
            
            <div style="display: none;">
                <a target='frmContent' id="lnkMyProfile" href='MyProfile.aspx'>My Profile</a></div>
        </div>
        <div class="navbar">
            <div class="navbar-inner">
                <div class="container">
				<div class="logo" style="width: 250px; float: left">
                <img alt="" src="Common/Images/Logo.png"/>
            </div>
                    <a data-target=".nav-collapse" data-toggle="collapse" href="#collapse" class="btn btn-navbar"><span
                        class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
                    </a>
                    <div class="nav-collapse collapse" id="menus" runat="server">
                    </div>
					<div class="fr pr10" style="float: right; margin-top:12px; text-align: right; margin-right: 10px;">
                <label runat="server" id="tdwelcome">
                </label>
            </div>
                </div>
            </div>
        </div>
        <div id="content">
            <iframe id="frmContent" src="Admin_Dashboard_Sales.aspx" style="border: solid 0px black; width: 100%; height: 700px;
                text-align: center" frameborder="0" runat="server" />
        </div>
    </div>
    </form>
	</div>
	</div>
    <script type="text/javascript">


        $('#frmContent').load(function () {
            //change the height of page to height of frame
            if ($("#frmContent").contents().find("html").height() > 700) {
                $("#frmContent").height($("#frmContent").contents().find("html").height());
            };

            //check level of page
            var chkSlash = $('#frmContent').attr("src").match(/\//g);
            var count = 0;
            if (chkSlash != null)
                count = chkSlash.length;



            // add uniform css to all pages
            var cssLink = document.createElement("link");
            var cssLink1 = document.createElement("link");

            if (count == 0) {
                cssLink.href = "Common/uniform.default.css";
                cssLink1.href = "Common/bootstrap.css";
            }
            else if (count == 1) {
                cssLink.href = "../Common/uniform.default.css";
                cssLink1.href = "../Common/bootstrap.css";
            }
            else if (count == 2) {
                cssLink.href = "../../Common/uniform.default.css";
                cssLink1.href = "../../Common/bootstrap.css";
            }


            cssLink.rel = "stylesheet";
            cssLink.type = "text/css";
            cssLink1.rel = "stylesheet";
            cssLink1.type = "text/css";
            var $head = $("#frmContent").contents().find("head");
            $head.append(cssLink);
            $head.append(cssLink1);


            //change the button desgin
            $('#frmContent').contents().find("button, input[type='button'], input[type='submit']").not(".ui-multiselect").css("background-image", "");
            $('#frmContent').contents().find("button, input[type='button'], input[type='submit']").not(".ui-multiselect").css("width", "");
            $('#frmContent').contents().find("button, input[type='button'], input[type='submit']").not(".ui-multiselect").addClass("btn btn-primary");

            //apply uniform
            $('#frmContent').contents().find("table").find("input, textarea, select").not("button, input[type='button'], input[type='submit'], input[type='radio']").uniform();

            //update uniform
            $('#frmContent').contents().find("table").find(":checkbox").click(function () {
                $('#frmContent').contents().find("table").find("input, textarea, select").not("button, input[type='button'], input[type='submit'], input[type='radio']").uniform();
            });

            //blocking ui on button click
            //            $('#frmContent').contents().find("table").find("button, input[type='button'], input[type='submit']").click(function () {
            //                $.blockUI({ css: {
            //                    border: 'none',
            //                    padding: '15px',
            //                    backgroundColor: '#000',
            //                    '-webkit-border-radius': '10px',
            //                    '-moz-border-radius': '10px',
            //                    opacity: .5,
            //                    color: '#fff'
            //                }
            //            }); 

            //            $.unblockUI;
            //        });

            //update uniform
            $('#frmContent').contents().find("table").find("select").change(function () {
                $('#frmContent').contents().find("table").find("input, textarea, select").not("button, input[type='button'], input[type='submit'], input[type='radio']").uniform();
            });

            // change the label with for alignment
            //            var max = 0;
            //            $('#frmContent').contents().find("label").each(function () {
            //                if ($(this).width() > max)
            //                    max = $(this).width();
            //            });
            //            $('#frmContent').contents().find("label").width(max);

            //reset width
            //            $('#frmContent').contents().find("table#DGDetails").find("th").find('label').each(function () {
            //                $(this).css("width", "");
            //            });
        });

        //update uniform from other pages
        function UpdateUniform() {
            $('#frmContent').contents().find("table").find("input, textarea, select").not("button, input[type='button'], input[type='submit']").uniform();
        }

        //menu related code      


        //     
    </script>
</body>
</html>
