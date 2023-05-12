<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    session_start();
	$con=mysqli_connect("localhost","root","","mercado_escolar");
    $arrproducts = array(
    );
    $q="SELECT COUNT(*), university FROM users GROUP BY university";
	$res=mysqli_query($con,$q);
    while(($row=mysqli_fetch_array($res))!=NULL)
	{
		$products=array(
            $row[0],$row[1]
        );
        array_push($arrproducts,$products);
	}
    echo json_encode($arrproducts);
?>