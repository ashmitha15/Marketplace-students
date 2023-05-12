<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    session_start();
	$con=mysqli_connect("localhost","root","","mercado_escolar");
    $arrproducts = array(
    );
    $q="SELECT * FROM joined_clubs";
	$res=mysqli_query($con,$q);
    while(($row=mysqli_fetch_array($res))!=NULL)
	{
		$products=array(
            $row[2],$row[1]
        );
        array_push($arrproducts,$products);
	}
    echo json_encode($arrproducts);
?>