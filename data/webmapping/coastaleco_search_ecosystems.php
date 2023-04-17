<?php
ini_set('memory_limit','1000M');
include('../../data/include/db_connection.php');
$geojson = array(
	'type'      => 'FeatureCollection',
	'features'  => array()
	);

$source=$_GET['source']; 
$ecosystem=$_GET['ecosystem'];
$country=$_GET['countries']; 

if (isset($ecosystem) && isset($country) ) {

	if ($ecosystem=="Mangroves" && $country=="Kenya"){
		$query="SELECT st_asgeojson from vw_mangroves_kenya";
	}
	if ($ecosystem=="Mangroves" && $country=="Tanzania"){
		$query="SELECT st_asgeojson from vw_mangroves_tanzania";
	
	}

	if ($ecosystem=="Mangroves" && $country=="Mozambique"){
		$query="SELECT st_asgeojson from vw_mangroves_mozambique";
		
	}
	if ($ecosystem=="Mangroves" && $country=="Madagascar"){
		$query="SELECT st_asgeojson from vw_mangroves_madagascar";
		
	}
	if ($ecosystem=="Mangroves" && $country=="All Countries"){
		$query="SELECT st_asgeojson from vw_mangroves_tanzania union 
				SELECT st_asgeojson from vw_mangroves_kenya union
				SELECT st_asgeojson from vw_mangroves_mozambique union
				SELECT st_asgeojson from vw_mangroves_madagascar";
		
	}
	// if ($ecosystem=="Sea-Grass" && $country=="Kenya"){
	// 	$query="SELECT st_asgeojson from vw_seagrass_kenya LIMIT 10000";
		
	// }
	$rs_count=pg_query($query);
	$results = pg_num_rows($rs_count);
	$row = pg_fetch_array($rs_count); 
	while($row = pg_fetch_array($rs_count)){                 	
		$feature = array(
			'type' => 'Feature',
	/*		'properties'=>array(
				//'gid'=> $row['gid'],
				//'class_name' => $row['class_name'],
				//'area' => $row['area']
			),*/
			'geometry' => json_decode($row['st_asgeojson'])


		);

		array_push($geojson['features'], $feature);
	}

	echo json_encode($geojson);
	pg_close($db_handle);   
	//header('Content-type: application/json',true);

	// $fp = fopen('geojson.json', 'w');
	// fwrite($fp, json_encode($geojson));
	// fclose($fp);

}






?>