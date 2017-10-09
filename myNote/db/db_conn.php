<?php
define('db_local',"localhost");
define('db_user',"root");
define('db_pass',"maher123");
define('db_name', "notebook");

$conn = mysqli_connect(db_local,db_user,db_pass,db_name);
 if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

?>