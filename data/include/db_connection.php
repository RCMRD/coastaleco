<?php 

	$db_handle = pg_connect("host=localhost port=5432 dbname=coastaleco user=postgres password=Africa02"); 
	if (!$db_handle)
	{
		echo 'Connection attempt failed.';   
	}
?>