<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    session_start();
	$con=mysqli_connect("localhost","root","","mercado_escolar");
    $arrposts = array(
    );
    $q="select * from posts";
	$res=mysqli_query($con,$q);
    while(($row=mysqli_fetch_array($res))!=NULL)
	{
		$posts=array(
            $row[1],$row[2],
        );
        array_push($arrposts,$posts);
	}
    echo json_encode($arrposts);
?>