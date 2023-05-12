<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    session_start();
	$con=mysqli_connect("localhost","root","","mercado_escolar");
    $arrproducts = array(
    );
    $q="SELECT * FROM users where type='student'";
	$res=mysqli_query($con,$q);
    while(($row=mysqli_fetch_array($res))!=NULL)
	{
		$products=array(
            $row[0],$row[1],$row[2],$row[3],$row[5],$row[6],$row[7],$row[8],$row[4]
        );
        array_push($arrproducts,$products);
	}
    echo json_encode($arrproducts);
?>