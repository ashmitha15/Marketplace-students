<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    session_start();
	$con=mysqli_connect("localhost","root","","mercado_escolar");
    $u=$_POST['userId'];
    // $email = $_POST['emailId'];
    $password = $_POST['password'];
    $dob = $_POST['dob'];
    $name = $_POST['name'];
    $gender = $_POST['gender'];
    $address = $_POST['address'];
    $major = $_POST['major'];
    $university = $_POST['university'];
    $q="UPDATE `users` SET `name`='$name',`dob`='$dob',`password`='$password',`address`='$address',`gender`='$gender',`major`='$major',`university`='$university' WHERE `user_id`='$u'";
	if(mysqli_query($con,$q))
        echo('true');
    else
        echo('false');
?>