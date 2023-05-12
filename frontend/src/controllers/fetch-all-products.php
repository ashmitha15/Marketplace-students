<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    session_start();
	$con=mysqli_connect("localhost","root","","mercado_escolar");
    $arrproducts = array(
    );
    $q="select * from products";
	$res=mysqli_query($con,$q);
    while(($row=mysqli_fetch_array($res))!=NULL)
	{
		$products=array(
            $row[1],$row[2],$row[3],$row[5],$row[4],$row[6],$row[7]
        );
        array_push($arrproducts,$products);
	}
    echo json_encode($arrproducts);
?>