<?php
// Connection
$host = "localhost";
$dbname = "portfolio";
$user = "root";
$password = "root";

$connection = new mysqli($host, $user, $password, $dbname);

if(!$connection){
  echo ('Error connecting to database.');
}


// Add to db
if (isset($_POST['send'])) {
  $full_name = $_POST['full-name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  $insert = "INSERT INTO `messages`(`full_name`, `email`, `subject`, `message`) 
                VALUES ('$full_name', '$email', '$subject', '$message')";

  $result = $connection->query($insert);

  if($result){
    header('Location: send.html');
  }
  else{
    echo('Error adding data');
  }
}