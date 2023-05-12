<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    session_start();
	$con=mysqli_connect("localhost","root","","mercado_escolar");
    $arrcart = array(
    );
    $u=$_POST['name'];
    $q="SELECT * from orders where user_id='$u'";
	$res=mysqli_query($con,$q);
    while(($row=mysqli_fetch_array($res))!=NULL)
	{
		$cart=array(
            $row[1],$row[2]
        );
        array_push($arrcart,$cart);
	}
    echo json_encode($arrcart);
?>