<?php
  session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
   
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="Style_in_login_in_Xammp.css">
    <!--font awesome icons-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/solid.min.css" integrity="sha512-pZlKGs7nEqF4zoG0egeK167l6yovsuL8ap30d07kA5AJUq+WysFlQ02DLXAmN3n0+H3JVz5ni8SJZnrOaYXWBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>
 <body background="background.jpg">      
    <h1 style="color: orangered; text-align: center; margin-top: 2% "><i>Welcome</i></h1>
<div class="login" style="height: 62%; margin-left: 27%; border-color: skin">
       <div id="form">
        <h2 style="color: orange">Login</h2>
            <form method="POST">
                <label style="color: lightpink">Enter Email</label><br>
                <input type="email" required  name="email"  style="color:aqua; border-bottom-color: lightpink"><br><br>
                <label style="color: lightpink">Password</label><br>
                <input type="password" required name="password" style="color:aqua; border-bottom-color: lightpink"><br><br>
                <button style="text-align: center;" id="logb" name="submit">Login</button><br><br>
                <a id="checkform" href="display.php">Check Form</a>
            </form>
   </div>
</div>
    <script src="script.js"></script> 
</body>
</html>
<?php
$username = "root";
$password = "";
$server = 'localhost';
$db = 'vishal';

$con = mysqli_connect($server, $username, $password, $db);

if(isset($_POST['submit']))
{
    $mail = $_POST['email'];
    $pass = $_POST['password'];
    
    $emailquery = " select * from register where email='$mail' ";
    $query = mysqli_query($con, $emailquery);
    $emailcount = mysqli_num_rows($query);
    if($emailcount > 0){
      $emailpass = mysqli_fetch_assoc($query);
      $dbpass = $emailpass['Password'];
      $passdecode = password_verify($pass,$dbpass);

      if($passdecode){
            ?>
            <script>
                alert("Login Successfull");
                location.replace("home.php");
            </script>
            <?php
      }      
      else{
        ?>
        <script>
            alert("Password Not Matching");
        </script>
        <?php
      }
    } 
    else{
        ?>
        <script>
            alert("Invalid Email");
        </script>
        <?php
    }
} 
?>