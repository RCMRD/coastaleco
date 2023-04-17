
function search_ecosystems() {
    source_value=Ext.getCmp('source_id').getValue();
    ecosystem_value=Ext.getCmp('ecosystem_id').getValue();
    countries_value=Ext.getCmp('countries_id').getValue();

    ecosystem_value_lower = ecosystem_value.toLowerCase();
    countries_value_lower = countries_value.toLowerCase();
    source_value_lower = source_value.toLowerCase();

    //If layer is loaded already, zoom to the coordinates
    if ((map.getLayersByName("Mangrove Forest "+countries_value).length > 0) &&
    (typeof window["custom_vulnerability_index_layer" +'_'+ oldValue] !== 'undefined')) {
        map.setCenter(
            new OpenLayers.LonLat(40.224663, -2.999370).transform(
                new OpenLayers.Projection("EPSG:4326"),
                map.getProjectionObject() ),
            8);

    } else {

        // setup tiled layer
        window['mangroves_'+countries_value_lower+'_'+source_value_lower] = new OpenLayers.Layer.WMS(
            "Mangrove Forest "+countries_value, config.geoserver.url,
            {
                "LAYERS": 'coastaleco:mangroves_'+countries_value_lower+'_'+source_value_lower,
                "STYLES": '',
                transparent: true,
                format: 'image/png'
            },
            {
                buffer: 0,
                displayOutsideMaxExtent: true,
                isBaseLayer: false,
                yx : {'EPSG:4326' : true}
            }
        );
        map.addLayer(window['mangroves_'+countries_value_lower+'_'+source_value_lower]);

        map.setCenter(
            new OpenLayers.LonLat(40.224663, -2.999370).transform(
                new OpenLayers.Projection("EPSG:4326"),
                map.getProjectionObject() ),
            8);

    }

    //Determine the download link.
    switch(entered_ecosystem_id) {
        case "Mangroves":
            var downloadlink='<a href="data/download/mangroves/'+entered_countries_id+'/'+entered_source_id+'/'
                +entered_ecosystem_id+'_'+ entered_countries_id+'_'+entered_source_id+'.zip">'+entered_ecosystem_id+
                '_'+ entered_countries_id+'_'+entered_source_id+'.zip';
            break;
        default:
            var downloadlink='<a href="data/download/seagrass/'+entered_countries_id+'/'+entered_source_id+'/'
                +entered_ecosystem_id+'_'+ entered_countries_id+'_'+entered_source_id+'.zip">'+entered_ecosystem_id+
                '_'+ entered_countries_id+'_'+entered_source_id+'.zip';
            break;
    }

    var message='Download Mangrove Forest Shape File<br>';
    tolower_downloadlink= downloadlink.toLowerCase();
    Ext.getCmp('download_id').update(message+tolower_downloadlink);
}
