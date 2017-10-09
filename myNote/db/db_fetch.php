<?php
require_once("db_conn.php");
$sql =" SELECT * FROM `note` ORDER BY piriority ,"." date ;" ;
$result = mysqli_query($conn,$sql);
$notes="";
$num = mysqli_num_rows($result);
if($num > 0) {
	while ($row = mysqli_fetch_assoc($result)) {
	$notes.="<li class='note'>
			 <div class='note-header piriority".$row['piriority']."'>
				 <span class='note-id hidden'>".$row['id']."</span>
				 <span id='logo'><img class='checked hidden' src='pic/symbol_check.ico'></span>
				 <span class='note-date'>".$row['date']."</span>
				 <span class='cancel'>x</span>
			</div>
			<div class='note-body'>
				<p>".$row['text']."</p>
			</div>
			<div class='note-footer'>
				<button class='delete'>Delete</button>
			</div>
		</li>";
	}
}

$conn->close();
echo $notes;
?>