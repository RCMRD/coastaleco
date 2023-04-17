<?php
//Searches for available data sources in the downloads directory, to display it on the search drop down.
function selectSouce ($ecosystem, $country) {


        $attributes = [];
        foreach (new DirectoryIterator("../download/" . $ecosystem . "/" . $country . "/") as $folderInfo) {
            if (!$folderInfo->isDot() && $folderInfo->isDir()) {
                $attributes[] = array(
                    'source'=> $folderInfo->getFilename(),
                    'name' => str_replace('_', ' ', ucfirst($folderInfo->getFilename()) )
                );
            }
        }
        header('Content-type: application/json', true);
        //output of the data in json
        echo json_encode($attributes, JSON_UNESCAPED_SLASHES);

}
if (isset($_GET['ecosystem']) && isset($_GET['country'])) {
    selectSouce ($_GET['ecosystem'], $_GET['country']);
}



?>