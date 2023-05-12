<?php 
header("Access-Control-Allow-Origin:  *");
header("Access-Control-Allow-Headers:  *");
move_uploaded_file($_FILES["image"]["tmp_name"], "image/" . $_FILES["image"]["name"]);
?>