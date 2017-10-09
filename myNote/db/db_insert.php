<?php
require_once("db_conn.php");

$piriority = $_POST['periority'];
$text = $_POST['text'];

$sql =" INSERT INTO `note`(`piriority`, `text`) VALUES ($piriority,'$text')" ;

	if (mysqli_query($conn,$sql) ){
	 	echo "success";
	 }else
		echo "faild to insert ".$text." ".$piriority;

$conn->close();
?>