<%@ Page Language="C#" AutoEventWireup="true" Inherits="Forgot_Password" CodeBehind="Forgot_Password.aspx.cs" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<style>
   body {background:#eee;}
   .forgot {background:#fff;border:5px solid #ddd;padding:20px; margin-top:40px;    box-shadow: 0px 1px 3px 0px #ccc;}
   .pad {margin:5px;}
   .emil-id {padding:10px ;display:block;margin-bottom:10px;width:100%;border-radius:3px;border:1px solid #ddd;}
   .frm h2 {margin-top:10px;font-size:25px;margin-bottom:20px;color:#666;text-transform:uppercase;}
   .frm a {padding:10px;}
   
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
</style>
<script type="text/javascript" src="Code/jquery-1.8.3.js"></script>		
<script type="text/javascript" src="Code/bootstrap.js"></script>
</head>
    <body>
        <div class="container">
<row>
<div class="col-md-4"></div>
      <div class="col-md-4 forgot frm">
      <h2>Forgot  <b>Password </b>  </h2>
          <form runat="server" id="form1">
              Please put your employee code or email id . EMP Code eg.: RB40000212<br />
									
					
           <input  id="TxtEmail" runat="server" class="emil-id" name="username"
              
                required="required" 
                                        type="text" />
            <asp:Button ID="Button3" runat="server" OnClick="Button3_Click" Text="Submit" />
&nbsp;&nbsp;
<asp:Button ID="Button2" runat="server" Text="Reset" OnClick="Button2_Click"></asp:Button>
            <br />
            <asp:Label ID="lblmsg" runat="server"></asp:Label>
            </form>
      <p><a href="default.aspx">Back to Login</a></p>
      </div>
 <div class="col-md-4"></div>
</row>

  
        </div>
</body>
</html>