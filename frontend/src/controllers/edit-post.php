<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    session_start();
	$con=mysqli_connect("localhost","root","","mercado_escolar");
    $u=$_POST['userid'];
    $photo = $_POST['photo1'];
    $description = $_POST['description'];
    $q="UPDATE `posts` SET `user_id`='$u',`description`='$description' WHERE photo='$photo'";
	if(mysqli_query($con,$q))
        echo('true');
    else
        echo('false');
?>