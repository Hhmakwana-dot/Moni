<!DOCTYPE html>
<html lang="en">
<head>
   
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hotel Kuber</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="Style_in_login_in_Xammp.css">
    <!--font awesome icons-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/solid.min.css" integrity="sha512-pZlKGs7nEqF4zoG0egeK167l6yovsuL8ap30d07kA5AJUq+WysFlQ02DLXAmN3n0+H3JVz5ni8SJZnrOaYXWBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>
 <body background="background.jpg">
    <div class="login" style="border-color: white; height: 60%; margin-left:30%">
       <div id="form">
        <h2>UPDATE</h2>
            <form method="POST">
            <?php

include 'connection.php';

$id = $_GET['id'];
$showquery = " select * from login where id=$id";
$showdata = mysqli_query($conn,$showquery);
$array = mysqli_fetch_array($showdata);

if(isset($_POST['submit']))
{
    $ids = $_GET['id'];
    $mail = $_POST['email'];
    $pass = $_POST['password'];
    $pass = password_hash($pass,PASSWORD_BCRYPT);
    $update = "update login set ID='$ids' ,Email='$mail',Password='$pass' WHERE id=$ids";

    $res = mysqli_query($conn,$update);
    if($res){
        ?>
        <script>
            alert("Data Updated Succesfully");
        </script>
        <?php
    }else{
      ?>
        <script>
        alert("Data Not Updated");
      </script>
      <?php 
    }
} 
?>
                <label style="color:white">Enter Email</label><br>
                <input type="email" required  name="email" value="<?php echo $array['Email'] ?>" style="color: aqua"><i class="fa-solid fa-envelope" style="color:white; margin-left:-3%"></i><br><br>
                <label style="color:white">Password</label><br>
                <input type="password" required name="password" value="<?php echo $array['Password'] ?>" style="color: aqua"><i class="fa-solid fa-lock" style="color:white; margin-left: -3%"></i><br><br>
                <button style="text-align: center;" id="logb" name="submit">Update</button><br><br>
                <a href="display.php">Check Form</a>
            </form>
   </div>
</div>
    <script src="script.js"></script>
</body>
</html>