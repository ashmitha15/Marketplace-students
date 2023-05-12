<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    session_start();
	$con=mysqli_connect("localhost","root","","mercado_escolar");
    $arrclubs = array(
    );
    $q="select * from clubs";
	$res=mysqli_query($con,$q);
    while(($row=mysqli_fetch_array($res))!=NULL)
	{
		$clubs=array(
            $row[1],$row[2],$row[3]
        );
        array_push($arrclubs,$clubs);
	}
    echo json_encode($arrclubs);
?>