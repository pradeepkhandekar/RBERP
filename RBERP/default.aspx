<%@ Page Language="C#" AutoEventWireup="true" EnableEventValidation="false" CodeBehind="_default.aspx.cs" Inherits="_default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Welcome to RupeeBoss.com - ERP</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <style>
  body {background:#dedede;}
  .login-ic {
    background:#8a8a8a; border:1px solid #ddd;
    margin-bottom: 1.5em;
	height:42px;
}
.login-ic1 i {
    background: url(m.png)no-repeat 6px 6px;
    
}
.login-ic i.icon {
    background: url(l.png)no-repeat 6px 6px;
}
.login-ic input[type="text"], .login-ic input[type="password"] {
    float: left;
    background: none;
    outline: none;
    font-weight: 400;
    color: #fff;
    padding: 10px 16px;
    border: none;
    width:100%;
    display: inline-block;
    margin-left: 7px;
	
}
.log-bwn input[type="submit"] {
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    padding: 13px 0;
    background:#55a8fd;
    display: inline-block;
    width: 100%;
    outline: none;
	margin:0px;
    border: 2px solid #5e9fe2;
    cursor: pointer;
    text-transform: uppercase;
	transition:all 0.2s linear;-moz-transition:all 0.2s linear;-webkit-transition:all 0.2s linear;
}
.log-bwn input[type="submit"]:hover {background:#ed1c24;transition:all 0.2s linear;-moz-transition:all 0.2s linear;-webkit-transition:all 0.2s linear;}
.login-top {
    display: block;
    margin: 0 auto;
	
}
.login {text-align:center;}
 .form {border:1px dashed #ddd;}
 .login-top {background: #ffffff;
    padding: 18px;
    border: 1px solid #cecece;
    margin: 5px;}
 .top-bar {margin-bottom:10px;display:block; border-bottom:1px dashed #eee;padding:10px 0px;background:#fff;}
 .container {
  margin-right: auto;
  margin-left: auto;

}
.sider {padding:5px;display:block;}
.sider div {margin-bottom:10px;color:#888;background:#fff;}
.sider div p {padding:10px;}
.login {padding-bottom:20px;display:block;text-transform:uppercase;color:#ccc;margin:5px;} 
.bottom {bottom:0;padding:20px; text-align:center;background:#fff;border:1px solid #ddd;margin-top:40px;}
.top-hedr {color: #ccc;text-shadow: 1px 1px 1px #999;-moz-text-shadow: 1px 1px 1px #999;-webkit-text-shadow: 1px 1px 1px #999; font-size: 42px; text-transform: uppercase; font-weight:normal;}
.login-top a {padding:5px text-align:center;}
.logo img {text-align:center;}
.pass a{text-align:center;padding:10px; display: block;}
.pass a:hover {color:#ccc;}
.sider h3 {    margin: 0px;color: #fff;font-size: 16px;text-transform: uppercase;background: #55a8fd;padding: 8px;}
.bold {font-weight: bold;}
.sider tr td {padding:5px; text-align:center;border:1px solid #eee;}

@media screen and (max-width:480px) {
  .top-hedr {font-size:21px;}
}
  </style>
</head>

<body>
    <form id="form1" runat="server">
    <div>
    <div class="container-fluid top-bar">
<div class="container">
<div class="col-md-4 ">
<h1 class="logo text-center"><img src="logo.png" width="175" height="47"></h1>
</div>
<div class="col-md-8"><h3 class="top-hedr">Rupeeboss.com <b>- ERP</b></h3></div>

    <div class="col-md-12">
        <marquee style="background-color:yellow;height:28px;">
           
        <asp:Label ID="lblnews" runat="server" Font-Size="14" ForeColor="Red"></asp:Label>
        </marquee>
       
</div>
</div>

<div class="container">
      <div class="col-md-4 sider">
	  
	  	<div>
	  <h3 class="text-center">Top Performer</h3>
	  <table width="100%" border="1">
         <tr><td class="bold">Sr. No.</td><td class="bold">Name</td><td class="bold">Amount in Cr</td> </tr>
         <tr><td>1.</td><td>Name</td><td>Amount in Cr</td> </tr>
         <tr><td>2</td><td>Name</td><td>Amount in Cr</td> </tr>
         <tr><td>3.</td><td>Name</td><td>Amount in Cr</td> </tr>
         <tr><td>4</td><td>Name</td><td>Amount in Cr</td> </tr>
         <tr><td>5</td><td>Name</td><td>Amount in Cr</td> </tr>
	 </table>
			</div>
	  	<div>
	  <h3 class="text-center">Topper's in Contact Center</h3>
	  <table width="100%" border="1">
         <tr><td class="bold">Sr. No.</td><td class="bold">Name</td><td class="bold">Amount in Cr</td> </tr>
         <tr><td>1.</td><td>Name</td><td>Amount in Cr</td> </tr>
         <tr><td>2</td><td>Name</td><td>Amount in Cr</td> </tr>
         <tr><td>3.</td><td>Name</td><td>Amount in Cr</td> </tr>
         <tr><td>4</td><td>Name</td><td>Amount in Cr</td> </tr>
         <tr><td>5</td><td>Name</td><td>Amount in Cr</td> </tr>
	 </table>
			</div>
	 
	  
	  
	  </div>
	  
      <div class="col-md-4">
      <div class="login-top">
      <h1 class="login">Login
					</h1>
          <h5><asp:Label ID="lblmsg" runat="server" ></asp:Label></h5>
			<form>
                <div>
                    <asp:CheckBox ID="chk" runat="server" Text=" PolicyBoss Employee" ForeColor="Red" />
							<div class="clear"> </div>
				</div>
				<div class="login-ic">
                    <i class="icon"></i>
					<input type="text" runat="server" value="User name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'User name';}" id="txtuser">
					<div class="clear"> </div>
				</div>
				<div class="login-ic">
					<i class="icon"></i>
					<input type="password" runat="server" value="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'password';}" id="txtpass">
					<div class="clear"> </div>
				</div>
			
				<div class="log-bwn">
                      <asp:Button ID="Button1" runat="server" onclick="Button1_Click" Text="Login" CssClass="bottom" />

					&nbsp;</div>
				<span class="pass"><a href="Forgot_Password.aspx">Forgot Passwordt Password</a></span>
				</form>
				
	  </div>
	  <div class="sider">
			<div>
	  <h3 class="text-center">Current Month Business</h3>
	  <table width="100%" border="1">
         <tr><td>Total Login(Cr)</td>
             <td>:</td>
             <td></td>
         </tr>
         <tr><td>Total Sanctioned(Cr)</td>
             <td>:</td>
             <td></td>
         </tr>
         <tr><td>Total Disbursement(Cr)</td>
             <td>:</td>
             <td></td>
         </tr>
	 </table>

			</div>
			</div>
      </div>
	  
      <div class="col-md-4 sider">
        
	    <div>

	  <h3 class="text-center">Current Month Top Performer</h3>
	  <table width="100%" border="1">
         <tr><td class="bold">Sr. No.</td><td class="bold">Name</td><td class="bold">Amount in Cr</td> </tr>
         <tr><td>1.</td><td>Name</td><td>Amount in Cr</td> </tr>
         <tr><td>2</td><td>Name</td><td>Amount in Cr</td> </tr>
         <tr><td>3.</td><td>Name</td><td>Amount in Cr</td> </tr>
         <tr><td>4</td><td>Name</td><td>Amount in Cr</td> </tr>
         <tr><td>5</td><td>Name</td><td>Amount in Cr</td> </tr>
	 </table>
	  </div>
	  <div>
	  <h3 class="text-center">Top Perfoming Team</h3>
	  <table width="100%" border="1">
         <tr><td class="bold">Sr. No.</td><td class="bold">Team Name</td><td class="bold">Amount in Cr</td> </tr>
         <tr><td>1.</td><td>Name</td><td>Amount in Cr</td> </tr>
         <tr><td>2</td><td>Name</td><td>Amount in Cr</td> </tr>
         <tr><td>3.</td><td>Name</td><td>Amount in Cr</td> </tr>
         <tr><td>4</td><td>Name</td><td>Amount in Cr</td> </tr>
         <tr><td>5</td><td>Name</td><td>Amount in Cr</td> </tr>
	 </table>
	  </div>
	 
	 
	  
	  </div>
</div>
<div class="container">
   <div class="col-md-12 bottom">
   <footer>Design, Developed & Maintained by RupeeBoss Software Team.</footer>
   </div>
</div>
    </div>
    </form>
</body>
</html>
