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
  background-color: pink;  
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
  <?php

$username = "root";
$password = "";
$server = 'localhost';
$db = 'vishal';

$connect = mysqli_connect($server, $username, $password, $db);

  $ids = $_GET['id'];
  $show = " select * from register where id=$ids ";
  $showdata = mysqli_query($connect,$show);
  $array = mysqli_fetch_assoc($showdata);
if(isset($_POST['register']))
{
    $idss =  $_GET['id'];
    $fname = $_POST['firstname'];
    $mname = $_POST['middlename'];
    $lname = $_POST['lastname'];
    $cont = $_POST['phone']; // Update the name to match the form field
    $mail = $_POST['email'];
    $pass = $_POST['psw']; // Update the name to match the form field
    $cpass = $_POST['psw-repeat']; // Update the name to match the form field
    $ppass = password_hash($pass,PASSWORD_BCRYPT);
    $ccpass = password_hash($cpass,PASSWORD_BCRYPT);
    
    $update = "UPDATE `register` SET `Firstname`='$fname',`Middlename`='$mname',`Lastname`='$lname',`Contact`='$cont',`Email`='$mail',`Password`='$ppass',`Cpassword`='$ccpass' WHERE id=$idss";
    $res = mysqli_query($connect,$update);
    if($res){
        ?>
        <script>
            alert("Data Updated Successfully!!");
            location.replace("login.php");
        </script>
    <?php
    }else{
        ?>
        <script>
            alert("Data not Updated");
        </script>
        <?php
    }
} 
?>     
  <center><h1 style="text-align: center"> Update</h1></center>  
  <hr>  
  <label> Firstname </label>   
<input type="text" value="<?php echo $array['Firstname'] ?>" name="firstname" placeholder= "Firstname" size="15" required />   
<label> Middlename: </label>   
<input type="text" value="<?php echo $array['Middlename'] ?>" name="middlename" placeholder="Middlename" size="15" required />   
<label> Lastname: </label>    
<input type="text" value="<?php echo $array['Lastname'] ?>" name="lastname" placeholder="Lastname" size="15"required />   
<div>  
<label>   
Phone :  
</label>  
<input type="text" name="country code" placeholder="Country Code"  value="+91" size="2"/>   
<input type="text" value="<?php echo $array['Contact'] ?>" name="phone" placeholder="phone no." size="10" required>   
 <label for="email"><b>Email</b></label>  
 <input type="text" value="<?php echo $array['Email'] ?>" placeholder="Enter Email" name="email" required>  
  
    <label><b>Password</b></label>  
    <input type="password" placeholder="Enter Password" name="psw" required>  
  
    <label><b>Re-type Password</b></label>  
    <input type="password" placeholder="Retype Password" name="psw-repeat" required>  
    <button type="submit" class="registerbtn" name="register">Update</button>    
</form>  
</body>  
</html>
