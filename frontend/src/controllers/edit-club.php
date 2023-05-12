<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    session_start();
	$con=mysqli_connect("localhost","root","","mercado_escolar");
    $name = $_POST['name'];
    $u=$_POST['userid'];
    $description = $_POST['description'];
    $q="UPDATE `clubs` SET `user_id`='$u',`description`='$description' WHERE name='$name'";
	if(mysqli_query($con,$q))
        echo('true');
    else
        echo('false');
?>