<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    session_start();
	$con=mysqli_connect("localhost","root","","mercado_escolar");
    $email = $_POST['emailId'];
    $password = $_POST['password'];
    $dob = $_POST['dob'];
    $name = $_POST['name'];
    $gender = $_POST['gender'];
    $address = $_POST['address'];
    $major = $_POST['major'];
    $university = $_POST['university'];
    $photo = $_POST['photo1'];
    $type = $_POST['type'];
    $q="select * from users";
	$res=mysqli_query($con,$q);
    $flag='true';
	while(($row=mysqli_fetch_array($res))!=NULL)
	{
        if($row[2]==$email)
        {
            $flag='false';
            break;
        }
    }
    if($flag=='true')
    {
        $con=mysqli_connect("localhost","root","","mercado_escolar");
        $q='SELECT COUNT(user_id) FROM users WHERE 1';
        $res=mysqli_query($con,$q); 
        while(($row=mysqli_fetch_array($res))!=NULL)
            $c=$row[0]+1;
        $q="INSERT INTO users VALUES('$c','$name','$email','$dob','$password','$address','$gender','$major','$university','$type','$photo')";
        if(mysqli_query($con,$q))
        {
            echo("true");
        }
        else
        {
            echo("false");
        }
        mysqli_close($con);
    }
    else {
        echo('user already registered');
    }
?>