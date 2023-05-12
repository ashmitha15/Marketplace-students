<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    session_start();
	$con=mysqli_connect("localhost","root","","mercado_escolar");
    $arrProfile = array(
    );
    $user=$_POST["name"];
    $q="select * from users where user_id='$user'";
	$res=mysqli_query($con,$q);
    while(($row=mysqli_fetch_array($res))!=NULL)
	{
		$profile=array(
            $row[1],$row[2],$row[3],$row[5],$row[6],$row[7],$row[8],$row[10],$row[4]
        );
        array_push($arrProfile,$profile);
	}
    echo json_encode($arrProfile);
?>