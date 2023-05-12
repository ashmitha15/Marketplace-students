<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    session_start();
	$con=mysqli_connect("localhost","root","","mercado_escolar");
    $name = $_POST['userid'];
    $description = $_POST['description'];
    $photo = $_POST['photo1'];
    $q="INSERT INTO `posts`(`user_id`, `description`, `photo`) VALUES ('$name','$description','$photo')";
	if(mysqli_query($con,$q))
        echo('true');
    else
        echo('false');
?>