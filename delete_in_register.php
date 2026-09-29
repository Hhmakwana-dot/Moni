<?php
 include 'connection.php';
 $id = $_GET['id'];
 $delete = "delete from register where id={$id}";
 $query = mysqli_query($conn,$delete);
 header('location:display.php');
?>






<?php
// Database connection parameters
$servername = "localhost";
$username = "username";
$password = "your_password";
$database = "your_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Define your SQL delete statement
$sql_delete_query = "DELETE FROM your_table WHERE your_condition";

// Execute the delete statement
if ($conn->query($sql_delete_query) === TRUE) {
    echo "Data deleted successfully.";
} else {
    echo "Error deleting data: " . $conn->error;
}

// Close the database connection
$conn->close();
?>
