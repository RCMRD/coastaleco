<?php
include('../include/db_connection.php');

function selectCoastalErosion ($ecosystem, $country) {

    if (isset($ecosystem) && isset($country)) {
        $geojson = array(
            'type'      => 'FeatureCollection',
            'features'  => array()
        );
        if ($ecosystem == "Coastal Erosion") {
            //for counting the total records in the table
            $selected_values = "SELECT gid, site, long, lat, degradatio, causative, country
            FROM coastal_erosion_hotspots
            WHERE country = '$country'";

            $rs_count = pg_query($selected_values);

            //name of the json array which will hold the json output
            $json_output = array();
            //loop to access the database field elements
            while ($row = pg_fetch_assoc($rs_count)) {
                $feature = array(  // create the feature part of the geojson.
                    'geometry' => array(
                        'type' => 'Point',
                        'coordinates' => array((float)$row['long'], (float)$row['lat'])
                    ),
                    'type' => 'Feature',
                    'properties' => array(
                        'gid' => $row['gid'],
                        'site' => $row['site'],
                        'lon' => (float)$row['long'],
                        'lat' => (float)$row['lat'],
                        'degradation' => $row['degradatio'],
                        'causative' => $row['causative'],
                        'country' => $row['country']
                    )
                );
                array_push($geojson['features'], $feature);
            }

            header('Content-type: application/json', true);
            echo json_encode($geojson);
        }
    }
}
selectCoastalErosion ($_GET['ecosystem'], $_GET['country']);
?>