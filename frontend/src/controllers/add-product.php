<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    session_start();
	$con=mysqli_connect("localhost","root","","mercado_escolar");
    $name = $_POST['name'];
    $u=$_POST['userid'];
    $description = $_POST['description'];
    $price = $_POST['price'];
    $category = $_POST['category'];
    $photo = $_POST['photo1'];
    $q="INSERT INTO `products`(`user_id`, `name`, `description`, `price`, `category`, `photo`) VALUES ('$u','$name','$description','$price','$category','$photo')";
	if(mysqli_query($con,$q))
        echo('true');
    else
        echo('false');
?>