<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    session_start();
	$con=mysqli_connect("localhost","root","","mercado_escolar");
    $name = $_POST['name'];
    $q="UPDATE `products` SET `flag`='true' WHERE name='$name'";
	if(mysqli_query($con,$q))
        echo('true');
    else
        echo('false');
?>