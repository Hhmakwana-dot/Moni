<?php

 session_start();
 session_destroy();

 ?>
 <script>
    alert("Logout Successfully");
 </script>

 <?php
 header('location: login.php');
?>