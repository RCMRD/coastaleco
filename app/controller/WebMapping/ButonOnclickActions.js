var flag, format, centroids, seagrass_kenya_layer, mangroves_kenya_layer, mangroves_tanzania_layer, mangroves_mozambique_layer, mangroves_madagascar_layer, mangroves_all_layer;
var pureCoverage = false;
var chartsearchlayerurl;

function search_ecosystems() {
	entered_source_id=Ext.getCmp('source_id').getValue();
	entered_ecosystem_id=Ext.getCmp('ecosystem_id').getValue();
	entered_countries_id=Ext.getCmp('countries_id').getValue();
    ecosystem_value_lower = entered_ecosystem_id.toLowerCase();
    countries_value_lower = entered_countries_id.toLowerCase();

	if (entered_ecosystem_id==null && entered_countries_id ==null)	{
		Ext.Msg.alert("Search Error", "Please specify all search parameter.");
	}
	else if (entered_ecosystem_id!==null && entered_countries_id ==null)	{
		Ext.Msg.alert("Search Error", "Please select one country or All Countries.");
	}
	else if (entered_ecosystem_id==null && entered_countries_id !==null)	{
		Ext.Msg.alert("Search Error", "Please select one ecosystem.");
	}
	else if (entered_source_id=="Landsat7" && entered_countries_id!=="Kenya"){
		Ext.Msg.alert("Search Error", "There is no Landsat7 data for "+entered_countries_id+
			          ".<br>Please try Landsat8.");
	}
	else if (entered_source_id=="Landsat8" && entered_countries_id=="Kenya"){
		Ext.Msg.alert("Search Error", "There is no Landsat8 data for Kenya.<br>Please try Landsat7.");
	}
	else {
		//Load mangroves data for all countries. 
		if (entered_ecosystem_id == "Mangroves" && entered_countries_id !== null) {
			// load your layers here
			// remove it as the above function returns*/
			if (entered_countries_id == "Kenya"){
			  	if (map.getLayersByName("Mangrove Forest Kenya").length > 0) {
			  		map.setCenter(
					new OpenLayers.LonLat(40.224663, -2.999370).transform(
					new OpenLayers.Projection("EPSG:4326"),
					map.getProjectionObject() ), 
					8);
			  		return;
			   	} else {
				  	if (map.getLayersByName("Mangrove Forest Tanzania").length > 0) {
				      	 	map.removeLayer(mangroves_tanzania_layer);
				   	}
				  	if (map.getLayersByName("Mangrove Forest Mozambique").length > 0) {
				      	 	map.removeLayer(mangroves_mozambique_layer);
				   	}
				  	if (map.getLayersByName("Mangrove Forest Madagascar").length > 0) {
				      	 	map.removeLayer(mangroves_madagascar_layer);
				   	}
				   	if (map.getLayersByName("Mangrove Forest All Countries").length > 0) {
				      	 	map.removeLayer(mangroves_all_layer);
				   	}
				  
                    // setup tiled layer
                    mangroves_kenya_layer = new OpenLayers.Layer.WMS(
                        "Mangrove Forest Kenya", config.geoserver.url,
                        {
                            "LAYERS": 'coastaleco:mangroves_kenya_cover',
                            "STYLES": '',
                            transparent: true,
                            // bgcolor: "0xffffff",
                            format: 'image/png'
                        },
                        {
                            buffer: 0,
                            displayOutsideMaxExtent: true,
                            isBaseLayer: false,
                            yx : {'EPSG:4326' : true}
                        }
                    );
					map.addLayer(mangroves_kenya_layer);

					map.setCenter(
					new OpenLayers.LonLat(40.224663, -2.999370).transform(
					new OpenLayers.Projection("EPSG:4326"),
					map.getProjectionObject() ), 
					8);

				}				
			}
			if (entered_countries_id == "Tanzania"){
					map.setCenter(
					new OpenLayers.LonLat(39.499565, -7.276754).transform(
					new OpenLayers.Projection("EPSG:4326"),
					map.getProjectionObject() ), 
					7);
				if (map.getLayersByName("Mangrove Forest Tanzania").length > 0) {
			  		return;
			   	} else {
			   
				  	if (map.getLayersByName("Mangrove Forest Kenya").length > 0) {
				      	map.removeLayer(mangroves_kenya_layer);
				   	}
				  	if (map.getLayersByName("Mangrove Forest Mozambique").length > 0) {
			      	 	map.removeLayer(mangroves_mozambique_layer);
				   	}
				  	if (map.getLayersByName("Mangrove Forest Madagascar").length > 0) {
				      	map.removeLayer(mangroves_madagascar_layer);
				   	}
				   	if (map.getLayersByName("Mangrove Forest All Countries").length > 0) {
				      	 	map.removeLayer(mangroves_all_layer);
				   	}					  

                    mangroves_tanzania_layer = new OpenLayers.Layer.WMS(
                        "Mangrove Forest Tanzania", config.geoserver.url,
                        {
                            "LAYERS": 'coastaleco:mangroves_tanzania_cover',
                            "STYLES": '',
                            transparent: true,
                            // bgcolor: "0xffffff",
                            format: 'image/png'
                        },
                        {
                            buffer: 0,
                            displayOutsideMaxExtent: true,
                            isBaseLayer: false,
                            yx : {'EPSG:4326' : true}
                        }
                    );
					map.addLayer(mangroves_tanzania_layer);	
					map.setCenter(
					new OpenLayers.LonLat(39.499565, -7.276754).transform(
					new OpenLayers.Projection("EPSG:4326"),
					map.getProjectionObject() ), 
					7);

				}

			}
			if (entered_countries_id == "Mozambique"){
			
				if (map.getLayersByName("Mangrove Forest Mozambique").length > 0) {
				  	map.setCenter (
					new OpenLayers.LonLat(37.075464, -18.100592).transform(
					new OpenLayers.Projection("EPSG:4326"),
					map.getProjectionObject() ), 
					6);

				  	return;
				} else {
				  	if (map.getLayersByName("Mangrove Forest Kenya").length > 0) {
				      	map.removeLayer(mangroves_kenya_layer);
				   	}
				  	if (map.getLayersByName("Mangrove Forest Tanzania").length > 0) {
				      	map.removeLayer(mangroves_tanzania_layer);
				   	}
				  	if (map.getLayersByName("Mangrove Forest Madagascar").length > 0) {
				      	map.removeLayer(mangroves_madagascar_layer);
				   	}
				   	if (map.getLayersByName("Mangrove Forest All Countries").length > 0) {
				      	map.removeLayer(mangroves_all_layer);
				   	}

                    mangroves_mozambique_layer = new OpenLayers.Layer.WMS(
                        "Mangrove Forest Mozambique", config.geoserver.url,
                        {
                            "LAYERS": 'coastaleco:mangroves_mozambique_cover',
                            "STYLES": '',
                            transparent: true,
                            // bgcolor: "0xffffff",
                            format: 'image/png'
                        },
                        {
                            buffer: 0,
                            displayOutsideMaxExtent: true,
                            isBaseLayer: false,
                            yx : {'EPSG:4326' : true}
                        }
                    );
	            	map.addLayer(mangroves_mozambique_layer);	
					map.setCenter(
					new OpenLayers.LonLat(37.075464, -18.100592).transform(
					new OpenLayers.Projection("EPSG:4326"),
					map.getProjectionObject() ), 
					6);

				}

			}
			if (entered_countries_id == "Madagascar"){

				if (map.getLayerIndex(mangroves_madagascar_layer) > 10) {
				  	map.setCenter(
					new OpenLayers.LonLat(37.075464, -18.100592).transform(
					new OpenLayers.Projection("EPSG:4326"),
					map.getProjectionObject() ), 
					6);

                    return;
				} else {
				  	if (map.getLayersByName("Mangrove Forest Kenya").length > 0) {
				      	map.removeLayer(mangroves_kenya_layer);
				   	}
				  	if (map.getLayersByName("Mangrove Forest Mozambique").length > 0) {
				      	map.removeLayer(mangroves_mozambique_layer);
				   	}
				  	if (map.getLayersByName("Mangrove Forest Tanzania").length > 0) {
				      	map.removeLayer(mangroves_tanzania_layer);
				   	}
				   	if (map.getLayersByName("Mangrove Forest All Countries").length > 0) {

				      	 	map.removeLayer(mangroves_all_layer);
				   	}				   	

                    mangroves_madagascar_layer = new OpenLayers.Layer.WMS(
                        "Mangrove Forest Madagascar", config.geoserver.url, {
                            "LAYERS": 'coastaleco:mangroves_madagascar_cover',
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

					//End loading ecosystem layer
					map.addLayer(mangroves_madagascar_layer);
					map.setCenter(
					new OpenLayers.LonLat(45.271264, -15.800590).transform(
					new OpenLayers.Projection("EPSG:4326"),
					map.getProjectionObject() ), 
					7);
				}

			}		
			if (entered_countries_id == "All Countries"){
				map.removeLayer(mangroves_kenya_layer);
				map.removeLayer(mangroves_tanzania_layer);
				map.removeLayer(mangroves_mozambique_layer);
				map.removeLayer(mangroves_madagascar_layer);

				mangroves_all_layer = new OpenLayers.Layer.Vector( "Mangrove Forest All Countries", {
					isBaseLayer: false, displayInLayerSwitcher: true, visibility: true,  styleMap: ecosystem_style_map,
					projection:  new OpenLayers.Projection('EPSG:4326'),
					strategies: [new OpenLayers.Strategy.Fixed()],
					protocol: new OpenLayers.Protocol.HTTP
					({
						url: ecosystem_data_layer_url,
						format: new OpenLayers.Format.GeoJSON
						({
								extractStyles: true,
								extractAttributes: true
						})
					})		
				});
				map.addLayer(mangroves_all_layer);	
				map.setCenter(
				new OpenLayers.LonLat(41.012,-9.86).transform(
				new OpenLayers.Projection("EPSG:4326"),
				map.getProjectionObject() ), 
				6);
			}

		}
		else if (entered_ecosystem_id == "Seagrass" && entered_countries_id !== null) {
            if (entered_countries_id == "Kenya") {
                var seagrass_kenya_landsat8 = new OpenLayers.Layer.WMS(
                    "Seagrass Kenya", config2.geoserver.url,
                    {
                        "LAYERS": 'coastaleco2:seagrass_kenya_landsat8',
                        "STYLES": '',
                        transparent: true,
                        format: 'image/png'
                    },
                    {
                        buffer: 0,
                        displayOutsideMaxExtent: true,
                        isBaseLayer: false,
                        yx: {'EPSG:4326': true}
                    }
                );


                map.addLayer(seagrass_kenya_landsat8);
                map.setCenter(
                    new OpenLayers.LonLat(40.224663, -2.999370).transform(
                        new OpenLayers.Projection("EPSG:4326"),
                        map.getProjectionObject()),
                    8);
            }
            if (entered_countries_id == "Tanzania") {
                var seagrass_tanzania_landsat8 = new OpenLayers.Layer.WMS(
                    "Seagrass Tanzania", config2.geoserver.url,
                    {
                        "LAYERS": 'coastaleco2:seagrass_tanzania_landsat8',
                        "STYLES": '',
                        transparent: true,
                        format: 'image/png'
                    },
                    {
                        buffer: 0,
                        displayOutsideMaxExtent: true,
                        isBaseLayer: false,
                        yx: {'EPSG:4326': true}
                    }
                );


                map.addLayer(seagrass_tanzania_landsat8);
                map.setCenter(
                    new OpenLayers.LonLat(39.499565, -7.276754).transform(
                        new OpenLayers.Projection("EPSG:4326"),
                        map.getProjectionObject()),
                    8);
            }
            if (entered_countries_id == "Mozambique") {
                var seagrass_mozambique_landsat8 = new OpenLayers.Layer.WMS(
                    "Seagrass Mozambique", config2.geoserver.url,
                    {
                        "LAYERS": 'coastaleco2:seagrass_mozambique_landsat8',
                        "STYLES": '',
                        transparent: true,
                        format: 'image/png'
                    },
                    {
                        buffer: 0,
                        displayOutsideMaxExtent: true,
                        isBaseLayer: false,
                        yx: {'EPSG:4326': true}
                    }
                );


                map.addLayer(seagrass_mozambique_landsat8);
                map.setCenter(
                    new OpenLayers.LonLat(37.075464, -18.100592).transform(
                        new OpenLayers.Projection("EPSG:4326"),
                        map.getProjectionObject()),
                    8);
            }
            if (entered_countries_id == "Madagascar") {
                var seagrass_madagascar_landsat8 = new OpenLayers.Layer.WMS(
                    "Seagrass Madagascar", config2.geoserver.url,
                    {
                        "LAYERS": 'coastaleco2:seagrass_madagascar_landsat8',
                        "STYLES": '',
                        transparent: true,
                        format: 'image/png'
                    },
                    {
                        buffer: 0,
                        displayOutsideMaxExtent: true,
                        isBaseLayer: false,
                        yx: {'EPSG:4326': true}
                    }
                );


                map.addLayer(seagrass_madagascar_landsat8);
                map.setCenter(
                    new OpenLayers.LonLat(46.16, -19.49).transform(
                        new OpenLayers.Projection("EPSG:4326"),
                        map.getProjectionObject() ),
                    6);
            }

		}
        else if (entered_ecosystem_id == "Coastal Erosion" && entered_countries_id !== "") {
            var erosion_hotspots_select_style = new OpenLayers.Style({graphicYOffset: -24});
            var erosion_hotspots_default_style = new OpenLayers.Style({graphicYOffset: -24});

            var erosion_hotspots_style_map = new OpenLayers.StyleMap({
                'default': erosion_hotspots_default_style,
                'select': erosion_hotspots_select_style
            });


            //Start creating symbology rules
            var default_erosion_hotspots_marker = new OpenLayers.Rule({
                title: "Hotspots",
                symbolizer: {
                    'pointRadius': 10,
                    'cursor': "pointer",
                    externalGraphic: "assets/images/degradation.png"
                    //graphicYOffset: 2
                }
            });


            //Start creating symbology rules
            var selected_erosion_hotspots_marker = new OpenLayers.Rule({
                title: "Hotspots",
                symbolizer: {
                    'pointRadius': 12,
                    'cursor': "pointer"
                }
            });

            erosion_hotspots_default_style.addRules([default_erosion_hotspots_marker]);
            erosion_hotspots_select_style.addRules([selected_erosion_hotspots_marker]);


            if (map.getLayersByName( "Coastal Degradation/ Erosion Hotspots").length > 0) {
                map.removeLayer(erosion_hotspots);
            }
            erosion_hotspots = new OpenLayers.Layer.Vector( "Coastal Degradation/ Erosion Hotspots", {
                isBaseLayer: false, displayInLayerSwitcher: true, visibility: true,
                projection:  new OpenLayers.Projection('EPSG:4326'),
                styleMap:erosion_hotspots_style_map,
                transparent: true,
                strategies: [new OpenLayers.Strategy.Fixed()],
                protocol: new OpenLayers.Protocol.HTTP
                ({
                    url:  "data/webmapping/coastalErosionSearch.php?ecosystem="+entered_ecosystem_id+'&country='+entered_countries_id,
                    format: new OpenLayers.Format.GeoJSON
                    ({
                        extractStyles: true,
                        extractAttributes: true
                    })
                })
            });

            //Make map to zoom on search of coastal erosion
            if (entered_countries_id=="Kenya") {

                map.setCenter(
                    new OpenLayers.LonLat(40.224663, -2.999370).transform(
                        new OpenLayers.Projection("EPSG:4326"),
                        map.getProjectionObject() ),
                    8);
            }
            if (entered_countries_id=="Tanzania") {
                map.setCenter(
                    new OpenLayers.LonLat(39.499565, -7.276754).transform(
                        new OpenLayers.Projection("EPSG:4326"),
                        map.getProjectionObject() ),
                    7);
            }
            if (entered_countries_id=="Mozambique") {
                map.setCenter (
                    new OpenLayers.LonLat(37.075464, -18.100592).transform(
                        new OpenLayers.Projection("EPSG:4326"),
                        map.getProjectionObject() ),
                    6);
            }
            if (entered_countries_id=="Madagascar") {
                map.setCenter(
                    new OpenLayers.LonLat(37.075464, -18.100592).transform(
                        new OpenLayers.Projection("EPSG:4326"),
                        map.getProjectionObject() ),
                    5);
            }
            map.addLayers([erosion_hotspots]);
            // define "createPopup" function . This function loops through each marker properties to show on the popup
            function createPopup(feature) {

                var details = '<div class="popup_output">';
                details += '<div  class="marker_popup_content">'+
                '<div class="columnA" ><strong>Site: </strong>'+
                feature.attributes.site+'</div>'+
                '<div class="columnA" ><strong>Longitude: </strong>'+
                feature.attributes.lon+'</div>'+
                '<div class="columnA"><strong>Latitude: </strong>'+
                feature.attributes.lat+'</div>'+
                '<div class="columnA" ><strong>Degradation: </strong>'+
                feature.attributes.degradation+'</div>'+
                '<div class="columnA" ><strong>Causative Agents: </strong>'+
                feature.attributes.causative+'</div>'+
                '<div class="columnA"><strong>Country: </strong>'+
                feature.attributes.country+'</div>';
                details += '</div>';
                details += '</div>';

                var markerPopup = new GeoExt.Popup({
                    title:  feature.attributes.site+' Degradation/ Erosion Site',
                    height:300,
                    width: 350,
                    location: feature,
                    cls:'popup_cls',
                    bodyPadding:'6px',
                    bodyStyle:'background:rgba(228, 225, 213, 0.83);',
                    html: details,
                    maximizable: true,
                    collapsible: true,
                    anchored: true,
                    moveable: true,
                    animCollapse: true,
                    shadow: true,
                    listeners: {
                        maximize: function (){
                            Ext.select('img.popup_img').setStyle('height',( (Ext.getBody().getViewSize().height*80 ) / 100)+'px');
                            Ext.select('img.popup_img').setStyle('width', 'auto');
                            Ext.select('img.popup_img').setStyle('max-height',( (Ext.getBody().getViewSize().height*80 ) / 100)+'px');
                        },
                        restore: function (){
                            Ext.select('img.popup_img').setStyle('width', '100%');
                            Ext.select('img.popup_img').setStyle('height', 'auto');
                            Ext.select('img.popup_img').setStyle('max-height', '320px');
                        }
                    }
                });


                // unselect feature when the popup
                // is closed
                markerPopup.on({
                    close: function () {
                        if (OpenLayers.Util.indexOf(erosion_hotspots.selectedFeatures, this.feature) > -1) {
                            unselect.unselect(erosion_hotspots.selectedFeatures.feature);
                        }
                    }
                });
                markerPopup.show();
            }

            // create popup on "featureselected"
            erosion_hotspots.events.on({
                featureselected: function (e) {
                    createPopup(e.feature);
                }
            });

            var select_erosion_hotspots = new OpenLayers.Control.SelectFeature(
                erosion_hotspots
            );
            map.addControl(select_erosion_hotspots);
            select_erosion_hotspots.activate();


        }
	}
	//Determine the download link.

	switch(entered_ecosystem_id) {
		    case "Mangroves":
          		var downloadlink='<a href="data/download/mangroves/'+countries_value_lower+'/'+entered_source_id.toLowerCase()+'/'
          		+entered_ecosystem_id+'_'+ countries_value_lower+'_'+entered_source_id.toLowerCase()+'.zip">'+ecosystem_value_lower+
          		'_'+ countries_value_lower+'_'+entered_source_id.toLowerCase()+'.zip';
            break;
            case "Coastal Erosion":
                var downloadlink='<a href="data/download/coastal_erosion/'+countries_value_lower+'/'+entered_source_id.toLowerCase()+'/'
                + countries_value_lower+'.zip">'+countries_value_lower+'.zip';
            break;
            default:
			    var downloadlink='<a href="data/download/seagrass/'+countries_value_lower+'/'+entered_source_id.toLowerCase()+'/'
				+entered_ecosystem_id+'_'+ countries_value_lower+'_'+entered_source_id+'.zip">'+ecosystem_value_lower+
				'_'+ countries_value_lower+'_'+entered_source_id.toLowerCase()+'.zip';
	        break;
	}

	var message='Download Mangrove Forest Shape File<br>';
	tolower_downloadlink= downloadlink.toLowerCase();
	Ext.getCmp('download_id').update(message+tolower_downloadlink);
}

function phpsearch() {
	    Ext.define('Ext.chart.theme.ColumnTheme', {
        extend: 'Ext.chart.theme.Base',
        constructor: function(config) {
            this.callParent([Ext.apply({ 
               
                colors: ['rgb(148, 174, 10)']

            }, config)]);
        }
    });
	entered_ecosystem_id=Ext.getCmp('ecosystem_stat_id').getValue();
	entered_countries_id=Ext.getCmp('countries_stat_id').getValue();
	if (entered_ecosystem_id==null && entered_countries_id == null)	{
			Ext.Msg.alert("Search Error","Please specify at least one search parameter.");
	}
	else if (entered_ecosystem_id!==null && entered_countries_id == null) {
		Ext.Msg.alert("Search Error","Please select one country or All Countries.");
	}
	else if (entered_ecosystem_id==null && entered_countries_id !== null) {
		Ext.Msg.alert("Search Error","Please select one ecosystem.");
	}
	else {
		if (entered_ecosystem_id == "Mangroves" && entered_countries_id !== null && entered_countries_id !== "All Countries") {
			Ext.Msg.alert("Search Error",'Specific country statistics is not available. Please select "All Countries" from countries drop down menu to get data for all countries.');

		}
		if (entered_countries_id == "All Countries"){
			chartsearchlayerurl="data/webmapping/coastaleco_mangroves_chart.php?ecosystem=Mangroves&countries=All Countries"; 
			var SelectedEcoChartStore = Ext.create('Ext.data.JsonStore', {
                fields: [
                    { name: "name", type: "Category" },
                    { name: "mangrove_area", type: "integer" }
                ],
                autoDestroy: true,
                proxy: {
                    type: 'ajax',
                    url:chartsearchlayerurl,
                    reader: {
                        type: 'json'
                    }
                },
                remoteSort: false,
                autoLoad: true
			});
			  

			var chart2 = Ext.create('Ext.chart.Chart', {
			 		xtype: 'chart',
					id: 'EcoChartId',
					style: 'background:#fff',
					animate: true,	
					store: SelectedEcoChartStore,

					legend: {position: 'top',visible: true},
					axes: 
					[{
						type: 'Category',
						position: 'left',
						fields: ['name'],
						title: 'Countries',
						grid: true,
						minimum: 0
					}, 
					{
						type: 'Numeric',
						position: 'bottom',
						fields: ['mangrove_area'],
						title: 'Area (Sq. Km)'
					}],
					series: 
					[{
						type: 'bar',
						axis: 'left',
						highlight: true,
			    		stacked: true,						
						tips:
						{
						  trackMouse: true,
						  width: 250,
						  height: 28,
						  renderer: function(storeItem, item) {
							this.setTitle(storeItem.get('name') + ': ' + storeItem.get('mangrove_area') + ' Sq. Killometers');
						  }
						},
						
						label: {
						  display: 'insideEnd',
							field: 'mangrove_area',
							orientation: 'horizontal',
							color: '#333',
						  'text-anchor': 'middle'
						},
						xField: 'name',
						yField: 'mangrove_area', 
						title:'Mangroves Area'
					}]
			}); 


			var chart_popup = new Ext.Window({
				    extend: 'Ext.window.Window',
					frame: true,
					width: 900,
					height: 500,
					maximizable: true,
					minimizable:true, 
					title: 'Mangrove Forest Statistics',
					layout: 'border',
					listeners: {
				        "minimize": function (window, opts) {
				            window.collapse();
				            window.setWidth(250);
				            window.alignTo(Ext.getBody(), 'bl-bl')
				        }
				    },
				    tools: [{
				        type: 'restore',
				        handler: function (evt, toolEl, owner, tool) {
				            var window = owner.up('window');
				            window.setWidth(900);
				            window.expand('', false);
				            window.center();
				        }
				    }],
				 	tbar: [{
				        text: 'Save',
				        handler: function() {
				            Ext.MessageBox.confirm('Confirm Download', 'Would you like to download the chart as an image?', function(choice){
				                if(choice == 'yes'){
				                    chart2.save({
				                        type: 'image/png'
				                    });
				                }
				            });
				        }
				    }],

					items:[chart2]
			});
			chart_popup.show();
	
			var downloadlink_stat='<a type="text/csv" target="_blank" href="data/download/mangroves/statistics/all/mangroves_area.csv">mangroves_area.csv';
			var message_stat='Download Statistical Table For Mangrove<br>';
			//tolower_downloadlink=downloadlink.toLowerCase();
			Ext.getCmp('download_id').update(message_stat+downloadlink_stat);

		}
		else{
			var downloadlink='No data to download';
			Ext.getCmp('download_id').update(downloadlink);

		}

	}


}


function show_help_wizard() {

    var navigate = function (panel, direction) {
        var layout = panel.getLayout();
        layout[direction]();
        Ext.getCmp('move_prev').setDisabled(!layout.getPrev());
        Ext.getCmp('move_next').setDisabled(!layout.getNext());
    };

    //The show_map_elements_fun makes the map elements panel appear with opacity 1 and others 0.1
    function show_mapsearch_fun() {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '#westpanel_id, .tophead, .x-tab-after-title,#GeoExtMapPanelId,#MainToolbar_id, .x-splitter,.x-tab-default-top' +
        '{opacity:0.1;} #eastpanel_id, #searchform_id-outerCt,  .x-tab-active {opacity:1;}';
        document.getElementsByTagName('head')[0].appendChild(style);
        var searchform_id = document.getElementById("searchform_id-outerCt");
        Ext.getCmp('formstabsID').setActiveTab('searchform_id');
    }

    function show_stat_fun() {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '#westpanel_id, .tophead, .x-tab-after-title, #GeoExtMapPanelId,#MainToolbar_id, .x-splitter,.x-tab-default-top' +
        '{opacity:0.1;} #eastpanel_id, #searchform_id-outerCt, .x-tab-active {opacity:1;}';
        document.getElementsByTagName('head')[0].appendChild(style);
        var searchform_id = document.getElementById("searchform_id-outerCt");
        Ext.getCmp('formstabsID').setActiveTab('stat_search_id');

    }

    function show_download_fun() {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '#westpanel_id, .tophead, .x-tab-after-title, #GeoExtMapPanelId,#MainToolbar_id, .x-splitter, .x-tab-default-top' +
        '{opacity:0.1;} #eastpanel_id, #searchform_id-outerCt, .x-tab-active  {opacity:1;}';
        document.getElementsByTagName('head')[0].appendChild(style);
        var searchform_id = document.getElementById("searchform_id-outerCt");
        Ext.getCmp('formstabsID').setActiveTab('download_id');

    }

    function show_map_elements_fun() {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '#eastpanel_id, #logopanelID, .tophead, #MapPanelId,  #GeoExtMapPanelId,#MainToolbar_id,' +
        ' .x-splitter {opacity:0.1;}#westpanel_id{opacity:1;}';
        document.getElementsByTagName('head')[0].appendChild(style);
        var searchform_id = document.getElementById("searchform_id-outerCt");
    }

    function show_map_fun() {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '#eastpanel_id, #logopanelID, .tophead,#westpanel_id, .x-splitter, ' +
        '#MainToolbar_id{opacity:0.1;}  #MapPanelId, #GeoExtMapPanelId{opacity:1;}';
        document.getElementsByTagName('head')[0].appendChild(style);
        var searchform_id = document.getElementById("searchform_id-outerCt");
    }

    function show_toolbar_fun() {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '#eastpanel_id, #logopanelID, .tophead,#westpanel_id, .x-splitter, ' +
        '#GeoExtMapPanelId{opacity:0.1;}  #MapPanelId, #MainToolbar_id {opacity:1;}';
        document.getElementsByTagName('head')[0].appendChild(style);
        var searchform_id = document.getElementById("searchform_id-outerCt");
    }

    function reset_opacity() {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '#westpanel_id, .tophead,#logopanelID, .x-tab-after-title, #MainToolbar_id, .x-splitter,' +
        '#eastpanel_id, #searchform_id-outerCt,#GeoExtMapPanelId,.x-tab-default-top,.x-tab-active, #MapPanelId,  #MainToolbar_id{opacity:1}'
        document.getElementsByTagName('head')[0].appendChild(style);
        var searchform_id = document.getElementById("searchform_id-outerCt");
        Ext.getCmp('formstabsID').setActiveTab('searchform_id');
    }

    function all_low_opacity() {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '#eastpanel_id, #logopanelID, .tophead, #westpanel_id, .x-splitter, ' +
        '#GeoExtMapPanelId,  #MapPanelId {opacity:0.1;}';
        document.getElementsByTagName('head')[0].appendChild(style);
        var searchform_id = document.getElementById("searchform_id-outerCt");
    }


    var cancel_wizard_button = Ext.create('Ext.Button', {
        text: 'Cancel',
        cls: 'secondary_button',
        handler: function () {
            this.up('window').close();
        }
    });


    var help_wizard = Ext.create('Ext.panel.Panel', {
        height: 272,
        id: 'help_wizard_id',
        alias: 'widget.HelpWizard',
        layout: 'card',
        autoDestroy: true,
        bodyStyle: 'padding:15px',
        defaults: {
        //applied to each contained panel
            border: false
        },
        animate: true,
        //just an example of one possible navigation scheme, using buttons
        bbar: [{
            id: 'move_prev',
            text: 'Back',
            handler: function (btn) {
                navigate(btn.up("panel"), "prev");
                if (Ext.getCmp('card-0').isVisible() === true) {
                    reset_opacity();
                }
                if (Ext.getCmp('card-last').isVisible() === true) {
                    reset_opacity();
                }
                if (Ext.getCmp('card-1').isVisible() === true) {
                    show_map_elements_fun();
                }
                if (Ext.getCmp('card-2').isVisible() === true) {
                    show_mapsearch_fun();
                }
                if (Ext.getCmp('card-3').isVisible() === true) {
                    show_stat_fun();
                }
                if (Ext.getCmp('card-4').isVisible() === true) {
                    show_download_fun();
                }
                if (Ext.getCmp('card-5').isVisible() === true) {
                    show_map_fun();
                }
                if (Ext.getCmp('card-6').isVisible() === true) {
                    show_toolbar_fun();
                }
                var nexttext = Ext.getCmp('move_next');
                switch (Ext.getCmp('card-last').isVisible()) {
                    case false:
                        nexttext.setText('Next');
                        break;
                    case true:
                        nexttext.setText('Done');
                        break;
                    default:
                        nexttext.setText('Next');
                        break;
                }
            },
            disabled: true
        }, '->', // greedy spacer so that the buttons are aligned to each side
            {
                id: 'cancel_button',
                xtype: 'button',
                cls: 'secondary_button',
                text: 'Cancel',
                handler: function () {
                    this.up('window').close();
                }
            }, '->',
            {
                id: 'move_next',
                text: 'Next',
                handler: function (btn) {
                    navigate(btn.up("panel"), "next");
                    if (Ext.getCmp('card-0').isVisible() === true) {
                        reset_opacity();
                    }
                    if (Ext.getCmp('card-last').isVisible() === true) {
                        reset_opacity();
                    }
                    if (Ext.getCmp('card-1').isVisible() === true) {
                        show_map_elements_fun();
                    }
                    if (Ext.getCmp('card-2').isVisible() === true) {
                        show_mapsearch_fun();
                    }
                    if (Ext.getCmp('card-3').isVisible() === true) {
                        show_stat_fun();
                    }
                    if (Ext.getCmp('card-4').isVisible() === true) {
                        show_download_fun();
                    }
                    if (Ext.getCmp('card-5').isVisible() === true) {
                        show_map_fun();
                    }
                    if (Ext.getCmp('card-6').isVisible() === true) {
                        show_toolbar_fun();
                    }
                    switch (Ext.getCmp('card-last').isVisible()) {
                        case false:
                            this.setText('Next');
                            break;
                        case true:
                            this.setText('Done');
                            break;
                        default:
                            this.setText('Next');
                            break;
                    }
                }
            }],
        // the panels (or "cards") within the layout
        items: [{
            id: 'card-0',
            itemId: 'card-0',
            html: '<h2>Welcome to the Quick Start Guide!</h2><div class="wizardtxt"><p>Please follow' +
            ' this wizard to quickly start using the web map. Click the next' +
            ' button to learn about each components.</p>' +
            'You can run this quick start guide again by clicking on this <img src="assets/images/help.png">' +
            ' toolbar button. <br>If you don\'t wish to continue click on the cancel betton below.</div><span class="wizard_navigation">Step 1 of 8<br></span>'//,
            //   items: [cancel_wizard_button]
        },
            {
                id: 'card-1',
                html: '<h2>Map Elements</h2><div class="wizardtxt">The map Elements, located on the left side of your screen, is composed of a the Layers and the Symbology.<br>' +
                '<strong>The Layers panel</strong> is composed of Base Maps and Overlays.' +
                'There is no layer loaded under Overlays because you did not ' +
                'make any search yet.<br><br><strong>The Symbology panel</strong> shows the legend of the loaded data on the map. You can ' +
                'see the Symbology panel by clicking on this button. </div><span class="wizard_navigation">Step 2 of 8' +
                '</span><br>'
            },
            {
                id: 'card-2',
                html: '<h2>Map Query</h2><div class="wizardtxt">The Map Query tab, located on the right side of your screen, enables you search by data source, ecosystems and countries.<br>' +
                'When you click on "show on map" button, you will see the search result appearing on the map maily for the coastal areas.</div>' +
                '<span class="wizard_navigation">Step 3 of 8' +
                '</span><br>'
            },
            {
                id: 'card-3',
                html: '<h2>Statistical Query</h2><div class="wizardtxt">The Statistical Query tab, located on the right side of your screen, enables you search by data source, ecosystems and countries.<br>' +
                'When you click on "Show Statistics" button, you will a chart appearing on top of the window.' +
                '</div><span class="wizard_navigation">Step 4 of 8' +
                '</span><br>'
            },
            {
                id: 'card-4',
                html: '<h2>Downloads</h2><div class="wizardtxt">The Downloads tab, located on the right side of your screen, enables you download shape files and csv files.' +
                ' The download tab will be populated with data when you make a map or statistical search.' +
                '</div><span class="wizard_navigation">Step 5 of 8' +
                '</span><br>'
            },
            {
                id: 'card-5',
                html: '<h2>The Map</h2><div class="wizardtxt">The Map panel, located at the center of the screen visualizes all layers. At the top left, the map has zoom in and zoom out buttons, the select and zoom and the pan buttons that disables the select and zoon button.' +
                ' On the top right corner, the layer switcher is located, that enables the select and unselect layers. All baselayers are found here in addition to all other layers.'+
                'At the bottom right hand side of the map, the scale bar is located. The scale bar shows the current scale of the map view and changes when the map is zoomed.'+
                '</div><span class="wizard_navigation">Step 6 of 8' +
                '</span><br>'
            },
            {
                id: 'card-6',
                html: '<h2>The Toolbar</h2><div class="wizardtxt">The Toolbar, located above the Map Panel, has option to control the map, and read more about the tool.<br>' +
                'Hover your mouse cursor on each tool buttons to read what the do.' +
                '</div><span class="wizard_navigation">Step 7 of 8' +
                '</span><br>'
            },
            {
                id: 'card-last',
                html: '<h2>Quick Start Guide Complete!</h2><div class="wizardtxt">Close this window to start using the application.' +
                'You can run this quick start guide by clicking on this <img src="assets/images/help.png"> toolbar button.</div><span class="wizard_navigation">Step 8 of 8' +
                '</span>'
            }
        ]

    });
    help_popup = new Ext.Window({
        extend: 'Ext.window.Window',
        title: 'Quick Start Guide',
        frame: true,
        width: 500,
        height: 300,
        listeners: {
            'close': function (win) {
                reset_opacity();

            }
        },
        items: [help_wizard]
    });
    help_popup.show();
    //function run_popup_wizard() {
    //    if (Ext.util.Cookies.get('help_read') != 'yes') {
    //        //all_low_opacity();
    //        help_popup.show();
    //
    //    }
    //
    //}


}

Ext.require('Ext.util.Cookies');
var delay_popup_guide = new Ext.util.DelayedTask(function () {
    if (Ext.util.Cookies.get('help_read') !== 'yes') {
        show_help_wizard();
    }
    var myCookie = Ext.util.Cookies.set('help_read', 'yes');
});
Ext.onReady(function() {
    delay_popup_guide.delay(7000);
});


Ext.define('coastaleco.controller.WebMapping.ButonOnclickActions', 
{
    extend: 'Ext.app.Controller',
	stores:	[],
	views: 	[],

    init: function()
	{
		
        this.control(
		{			
			'EcoSearchMapForm button[action=SearchEco]':
			{
                click:function()
				{
			   
					var loadingPanel = new OpenLayers.Control.LoadingPanel();
					map.addControl(loadingPanel);    
							//show the control
					loadingPanel.maximizeControl();
					// load your layers here
					// remove it as the above function returns
					//flag="no_flag";
					search_ecosystems();

					loadingPanel.minimizeControl();


                }
            },	
			 'EcoSearchStatForm button[action=SearchEco_Stat]':
			{
				click: function() {
					phpsearch();				
  				}
			},
            'EcoSearchMapForm combobox[name=countries_name]': {
                select:function() {
                    Ext.getCmp('source_id').setValue("");

                    ecosystem_value=Ext.getCmp('ecosystem_id').getValue().toLowerCase();
                    country_value=Ext.getCmp('countries_id').getValue().toLowerCase();
                    if (ecosystem_value =="mangroves" || ecosystem_value == "seagrass") {
                        SourceStore.proxy.url='data/webmapping/selectSource.php?ecosystem='+ecosystem_value+'&country='+country_value;
                        SourceStore.reload();
                        SourceStore.reload({
                            callback: function (records, operation, success) {
                                Ext.getCmp('source_id').setValue(SourceStore.data.items[0].data.source);
                            }
                        });

                    }
                }
            },
            'EcoSearchMapForm combobox[name=ecosystem_name]': {
                select: function () {
                    Ext.getCmp('source_id').setValue("");
                }
            },
			'MapPanel button[action=map_zoom_in]':
			{
                click:function()
				{	
					zoomInCtrl.trigger();
                }
            },
			'MapPanel button[action=map_zoom_out]':
			{
                click:function()
				{	
					zoomOutCtrl.trigger();
                }
            },
			'MapPanel button[action=navigation_history_previous]':
			{
                click:function()
				{	
					navigationHistoryCtrl.previousTrigger();
                }
            },
			'MapPanel button[action=navigation_history_next]':
			{
                click:function()
				{	
					navigationHistoryCtrl.nextTrigger();
                }
            },
			'MapPanel button[action=about_us]':
			{
				click: function ()
				{
                    if( (typeof about === 'undefined') || (about.hidden===true)  ) {
                        about = new Ext.Window
                        ({
                            width: 500,
                            height: 400,
                            maximizable: true,
                            autoScroll: true,
                            title: 'About the Project',
                            autoLoad: {
                                url: 'assets/pages/about.html'
                            }
                        });
                        about.show();
                    }
                    else{
                        return false;
                    }
				}
			},
			'MapPanel button[action=useful_links]':
			{
				click: function ()
				{
                    if( (typeof links === 'undefined') || (links.hidden===true)  ) {
                        var links = new Ext.Window({
                            width: 270,
                            height: 130,
                            autoScroll: true,
                            title: 'Useful Links',
                            autoLoad: {
                                url: 'assets/pages/useful_links.html'
                            }
                        });
                        links.show();
                    }
                    else{
                        return false;
                    }
				}
			}, 
			'MapPanel button[action=help]':
			{
				click: function ()
				{
                    if( (typeof help_popup === 'undefined') || ( help_popup.hidden===true)  ){
                        show_help_wizard();
                    }
                    else {
                        return false;
                    }

				}
			},
            'MapPanel button[action=contact_us]':
            {
                click: function ()
                {
                    if( (typeof links === 'undefined') || (links.hidden===true)  ) {
                        var contact = new Ext.Window({
                            width: 550,
                            height: 430,
                            autoScroll: true,
                            title: 'Contact Us',
                            autoLoad: {
                                url: 'assets/pages/contact.html'
                            }
                        });
                        contact.show();
                    }
                    else{
                        return false;
                    }
                }
            },
            'MapPanel button[action=map_default_map_extent]':
			{
				click: function() 
				{
					map.setCenter(
						new OpenLayers.LonLat(41.01,-9.86).transform(
						new OpenLayers.Projection("EPSG:4326"),
						map.getProjectionObject()
																	 ), 
					6);
				}
			},
			'MapPanel button[action=load_all_boreholes]':
			{
				click: function() 
				{
					flag="load_all";
					search_ecosystems()
				}
			},
			'MapPanel button[action=zoom_to_countries]':
			{
				click: function() 
				{
					var selected_country=Ext.getCmp('Zoom_to_Countries_Id').getValue();
					if(selected_country==null)
					{
						Ext.Msg.alert("No selection","Please select a country you want to Zoom to");
					}
					else if(selected_country=="All Countries")
					{
						map.setCenter(
						new OpenLayers.LonLat(41.012,-9.86).transform(
						new OpenLayers.Projection("EPSG:4326"),
						map.getProjectionObject() ), 
						6);
					}	
					else if(selected_country=="Kenya")
					{
						map.setCenter(
						new OpenLayers.LonLat(40.224663, -2.999370).transform(
						new OpenLayers.Projection("EPSG:4326"),
						map.getProjectionObject() ), 
						8);
					}
					else if(selected_country=="Tanzania")
					{
						map.setCenter(
						new OpenLayers.LonLat(39.499565, -7.276754).transform(
						new OpenLayers.Projection("EPSG:4326"),
						map.getProjectionObject() ), 
						7);
					}
					else if(selected_country=="Mozambique")
					{
						map.setCenter(
						new OpenLayers.LonLat(37.075464, -18.100592).transform(
						new OpenLayers.Projection("EPSG:4326"),
						map.getProjectionObject() ), 
						6);
					}
					else if(selected_country=="Madagascar")
					{
                        map.setCenter(
                        new OpenLayers.LonLat(46.16, -19.49).transform(
                            new OpenLayers.Projection("EPSG:4326"),
                            map.getProjectionObject() ),
                            6);
					}

				}
				
			}

		});
			
        
    }
	
});