<?php
session_start();
?>
<!DOCTYPE html>  
<html>  
<head>  
<meta name="viewport" content="width=device-width, initial-scale=1">  
<style>  

body{  
  font-family: Calibri, Helvetica, sans-serif;  
  background-color: lightblue;  
}  
.container {  
    padding: 50px;  
  background-color: lightblue;  
}  
  
input[type=text], input[type=password], textarea {  
  width: 100%;  
  padding: 15px;  
  margin: 5px 0 22px 0;  
  display: inline-block;  
  border: none;  
  background: #f1f1f1;  
}  
input[type=text]:focus, input[type=password]:focus {  
  background-color: orange;  
  outline: none;  
}  
 div{  
       padding: 10px 0;  
     }  
hr {  
  border: 1px solid #f1f1f1;  
  margin-bottom: 25px;  
}  
.registerbtn {  
  background-color: #4CAF50;  
  color: white;  
  padding: 16px 20px;  
  margin: 8px 0;  
  border: none;  
  cursor: pointer;  
  width: 100%;  
  opacity: 0.9;  
}  
.registerbtn:hover {  
  opacity: 1;  
}  
</style>  
</head>  
<body>  
<form method="POST">  
  <div class="container">  
  <center><h1 style="text-align: center"> Registration Form</h1></center>  
  <hr>  
  <label> Firstname </label>   
<input type="text" name="firstname" placeholder= "Firstname" size="15" required />   
<label> Middlename: </label>   
<input type="text" name="middlename" placeholder="Middlename" size="15" required />   
<label> Lastname: </label>    
<input type="text" name="lastname" placeholder="Lastname" size="15"required />   
<div>  
<label>   
Phone :  
</label>  
<input type="text" name="country code" placeholder="Country Code"  value="+91" size="2"/>   
<input type="text" name="phone" placeholder="phone no." size="10" required>   
 <label for="email"><b>Email</b></label>  
 <input type="text" placeholder="Enter Email" name="email" required>  
  
    <label><b>Password</b></label>  
    <input type="password" placeholder="Enter Password" name="psw" required>  
  
    <label><b>Re-type Password</b></label>  
    <input type="password" placeholder="Retype Password" name="psw-repeat" required>  
    <button type="submit" class="registerbtn" name="register">Register</button>    
    <br>
    <h4 style="margin-left: 50%">or</h4>
    <center><h3>Have an Account? <a href="login.php">Login Here</a></h3></center>
</form>  
</body>  
</html>  

<?php
$server = 'localhost';
$username = "root";
$password = "";
$db = 'vishal'; 

$conn = mysqli_connect($server, $username, $password, $db);
if(isset($_POST['register']))
{
    $fname = $_POST['firstname'];
    $mname = $_POST['middlename'];
    $lname = $_POST['lastname'];
    $contact = $_POST['phone'];
    $mail = $_POST['email'];
    $pass = $_POST['psw'];
    $cpass = $_POST['psw-repeat'];
    

    $pas = password_hash($pass,PASSWORD_BCRYPT);
    $cpas = password_hash($cpass,PASSWORD_BCRYPT);
   
    $emailquery = " select * from register where email='$mail' ";
    $query = mysqli_query($conn, $emailquery);
    $emailcount = mysqli_num_rows($query);

    if($emailcount > 0){
      ?>
      <script>
        alert("Email Already Exists");
      </script>
      <?php
      } 
      else if($pass === $cpass){
       $insert = "INSERT INTO `register`(`Firstname`, `Middlename`, `Lastname`, `Contact`,`Email`, `Password`, `Cpassword`)
       VALUES ('$fname','$mname','$lname','$contact','$mail','$pas','$cpas')";
       $res = mysqli_query($conn, $insert);
           if($res){
               ?>
               <script>
               alert("Registration Succesfull");
               location.replace("login.php");
               </script>
               <?php
           }else{
             ?>
               <script>
               alert("Registration Unsuccessful");
             </script>
             <?php 
           }   
       }
       else{
        ?>
        <script>
          alert("Password Not Matching");
         </script>
        <?php
        }
      }
?>
