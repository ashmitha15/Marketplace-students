<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    session_start();
	$con=mysqli_connect("localhost","root","","mercado_escolar");
    $u=$_POST['userid'];
    $name = $_POST['name'];
    $description = $_POST['description'];
    $photo = $_POST['photo1'];
    $q="INSERT INTO `clubs`(`user_id`, `name`, `description`, `photo`) VALUES ('$u','$name','$description','$photo')";
	if(mysqli_query($con,$q))
        echo('true');
    else
        echo('false');
?>