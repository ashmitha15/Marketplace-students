<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    session_start();
	$con=mysqli_connect("localhost","root","","mercado_escolar");
    $arrorders = array(
    );
    $u=$_POST['name'];
    $q="select * from cart where user_id='$u'";
	$res=mysqli_query($con,$q);
    while(($row=mysqli_fetch_array($res))!=NULL)
	{
        $q1="INSERT INTO `orders`(`user_id`, `oid`, `name`, `cost`) VALUES ('$u',1,'$row[1]','$row[2]')";
        $res=mysqli_query($con,$q1);
	}
    $q1="DELETE FROM `cart` WHERE user_id='$u'";
    sleep(2);
    $res=mysqli_query($con,$q1);
    $q="select * from orders where user_id='$u'";
	$res=mysqli_query($con,$q);
    while(($row=mysqli_fetch_array($res))!=NULL)
	{
        $orders=array(
            $row[1],$row[2]
        );
        array_push($arrorders,$orders);
    }
    echo json_encode($arrorders);
?>