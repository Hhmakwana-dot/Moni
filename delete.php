<?php
 include 'connection.php';
 $id = $_GET['id'];
 $delete = "DELETE FROM `login` WHERE id=$id";
 $query = mysqli_query($conn,$delete);
 header('location:display.php');
?>