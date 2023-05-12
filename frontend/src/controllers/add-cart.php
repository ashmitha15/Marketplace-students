<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    session_start();
	$con=mysqli_connect("localhost","root","","mercado_escolar");
    $name = $_POST['name'];
    $user=$_POST["userid"];
    $price = $_POST['price'];
    $q="INSERT INTO `cart`(`user_id`, `name`, `cost`) VALUES ('$user','$name','$price')";
	if(mysqli_query($con,$q))
        echo('true');
    else
        echo('false');
?>