<?php
require_once("db_conn.php");
 $id = $_POST['id'];

 $sql = " DELETE FROM `note` WHERE id=$id ;";
 if (mysqli_query($conn,$sql) ){
 	echo "success";
 }else
echo "faild";

$conn->close();
?>