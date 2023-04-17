<?php
include('../include/db_connection.php');
if ($db_handle) {  

	$ecosystem=$_GET['ecosystem'];
	$country=$_GET['countries']; 
	if (isset($ecosystem) && isset($country) ) {
		if ($ecosystem=="Mangroves"){
			//for counting the total records in the table
			$selected_values = "SELECT * FROM vw_mangroves_area";
			
			$rs_count = pg_query($selected_values);
			$results = pg_num_rows($rs_count);
			
			//name of the json array which will hold the json output
			$json_output = array();
			$no= 1;
			//echo '{"mangroves_statistics":'; 
			//loop to access the database field elements
			while($row=pg_fetch_assoc($rs_count)) {
				$attributes = array
				(
					'name'=> $row['country'],
					//'coastal_length'=> $row['coastal_length'],
					'mangrove_area'=> (float)$row['area']
				);
				array_push($json_output, $attributes);
		    }

			header('Content-type: application/json',true);
			//output of the data in json
			echo json_encode($json_output);
			//$create="COPY (SELECT * FROM vw_mangroves_area) TO 'C:/xampp/htdocs/coastaleco/data/download/mangroves/statistics/all/mangroves_area.csv' DELIMITER ',' CSV HEADER";
			//$create_table = pg_query($create);
		}
		else {
			$selected_values = "SELECT name, total_area, forest_cover, mangrove_area, forest_percent_of_total_area, mangrove_percent_of_total_forest, coastal_length FROM stat_data WHERE name='$country'";  
			
			$rs_count = pg_query($selected_values);
			$results = pg_num_rows($rs_count);
			
			//name of the json array which will hold the json output
			$json_output = array();
			$no= 1;

			//loop to access the database field elements
			while($row=pg_fetch_assoc($rs_count)) {
				$attributes = array
				(
					'name'=> $row['name'],
					//'coastal_length'=> $row['coastal_length'],
					'mangrove_area'=> (float)$row['mangrove_area']
				);
				array_push($json_output, $attributes);
		    }
			header('Content-type: application/json',true);
			//output of the data in json
			echo json_encode($json_output);

		}
	}




	pg_close($db_handle);  
	
}

else
{   
    echo 'Connection attempt failed.';   
}  
?>
