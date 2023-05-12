<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    session_start();
	$con=mysqli_connect("localhost","root","","mercado_escolar");
    $user = $_POST['email'];
    $password=$_POST['password'];
    $q="select * from users";
	$res=mysqli_query($con,$q);
    $flag=false;
    while(($row=mysqli_fetch_array($res))!=NULL)
	{
		if($row[2]==$user&&$row[4]==$password)
		{
			$flag=true;
			break;
		}
	}
    if($flag==true)
	{
		echo($row[0]);
		echo ($row[9]);
	}
	else
	{
		echo ('false');
	}
    
?>