<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    session_start();
    $name=$_POST['name'];
	$con=mysqli_connect("localhost","root","","mercado_escolar");
    $q="DELETE FROM products where name='$name'";
    if(mysqli_query($con,$q))
    {
        echo("true");
    }
    else
    {
        echo("false");
    }
    mysqli_close($con);
?>