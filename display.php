<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Visitors</title>
    <style>
        *{
            list-style-type: none;
            text-decoration: none;
            text-align: center;
        }
        .register{
            padding: 5px;
        }
        a{
            color: black;
        }
       table,thead,td{
        border: 2px solid black;
        
       }
       a{
        width: 10%px;
        padding: 5px;
        height: 30px;
        color: white;
       }
       td{
        height: 30px;
       }
       a:hover{
        background-color: white;
        color: black;
        cursor: pointer;
       }
       thead{
        color: white;
        background-color: gray;
       }
       tbody{
        color: black;
        background-color: gray;
       }
       table{
        width: 45%;
       }
      
    </style>
</head>
<body>
   <div class="maindiv"></div>
    <h1>Details who has Visited the Site</h1>           
     <br> 
          <div class="register">
            <table cellspacing= "0">
                <th colspan="13">Registration Info</th>
                <tr>
                    <td>ID</td>
                    <td>Firstname</td>
                    <td>Middlename</td>
                    <td>Lastname</td>
                    <td>Contact</td>
                    <td>Email</td>
                    <td>Password</td>
                    <td>Confirm Password</td>
                    <td colspan="2">Operation</td>
                </tr>
                <?php  
             include 'connection.php';
             $selectquery = " select * from register ";
             $query = mysqli_query($conn, $selectquery);
             $num = mysqli_num_rows($query);
             while($res = mysqli_fetch_array($query)){
                ?>
                <tr>
                    <td><?php echo $res['id'] ?></td>
                    <td><?php echo $res['Firstname'] ?></td>
                    <td><?php echo $res['Middlename'] ?></td>
                    <td><?php echo $res['Lastname'] ?></td>
                    <td><?php echo $res['Contact'] ?></td>
                    <td><?php echo $res['Email'] ?></td>
                    <td><?php echo $res['Password'] ?></td>
                    <td><?php echo $res['Cpassword'] ?></td>
                    <td><a href="update_in_register.php?id=<?php echo $res['id'];?>">Update</a></td></td>
                    <td><a href="delete_in_register.php?id=<?php echo $res['id'];?>">Delete</a></td></td>
                </tr>
                <?php
             }
            ?> 
     </body>
</html>