<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    session_start();
	$con=mysqli_connect("localhost","root","","mercado_escolar");
    $category='misc';
    $u=$_POST['userid'];
    $name = $_POST['name'];
    $description = $_POST['description'];
    $price = $_POST['price'];
    $category = $_POST['category'];
    $q="UPDATE `products` SET `user_id`='$u',`description`='$description',`price`='$price',`category`='$category' WHERE name='$name'";
	if(mysqli_query($con,$q))
        echo('true');
    else
        echo('false');
?>