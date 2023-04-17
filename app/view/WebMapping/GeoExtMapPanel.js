Ext.define('coastaleco.view.WebMapping.GeoExtMapPanel', 
{
    extend: 'GeoExt.panel.Map',
	alias: 'widget.GeoExtMapPanel',
	id: 'GeoExtMapPanelId',
    border: 'false',
    layout: 'fit',
    region: 'center',
	width: '100%',
	height:'100%',
	center: '41.012,-9.86',
    zoom: 8,
    initComponent: function() 
	{
        var me = this,
            items = [], ctrl;

        var options = {
            projection: new OpenLayers.Projection("EPSG:900913"),
            displayProjection: new OpenLayers.Projection("EPSG:4326"),
            units: "m",
            sphericalMercator: true
        };
		map = new OpenLayers.Map('map', options);

		map.addControl(new OpenLayers.Control.LayerSwitcher());
		map.addControl(new OpenLayers.Control.Navigation({dragPanOptions: {enableKinetic: true}}));
		map.addControl(new OpenLayers.Control.Scale());
		map.addControl(new OpenLayers.Control.LoadingPanel()); 

		 africa_outline = new OpenLayers.Layer.Vector( "Africa", 
		{
			isBaseLayer: true, displayInLayerSwitcher: false, visibility: true,
			projection:  new OpenLayers.Projection('EPSG:4326'),
			strategies: [new OpenLayers.Strategy.Fixed()],
			protocol: new OpenLayers.Protocol.HTTP ({
				url:  "data/webmapping/africa.json",
				format: new OpenLayers.Format.GeoJSON
				({
						extractStyles: true,
						extractAttributes: true
				})
			})
		});
		
		ghyb = new OpenLayers.Layer.Google(
        "Google Satellite with Streets",
        {isBaseLayer: true,type: google.maps.MapTypeId.HYBRID, numZoomLevels: 15,visibility:true, transitionEffect: 'resize'}
		);

		gphy = new OpenLayers.Layer.Google(
		"Google Physical Terrain",
		{isBaseLayer: true, type: google.maps.MapTypeId.TERRAIN, visibility:false, numZoomLevels: 15, transitionEffect: 'resize'}
		);

		gmap = new OpenLayers.Layer.Google(
			"Google Streets", // the default
			{isBaseLayer: true,numZoomLevels: 15,visibility:false, transitionEffect: 'resize'}
		);

		gsat = new OpenLayers.Layer.Google(
			"Google Satellite",
			{isBaseLayer: true,type: google.maps.MapTypeId.SATELLITE, numZoomLevels: 15,visibility:false, transitionEffect: 'resize'}
		);

		mapbox_satellite = new OpenLayers.Layer.XYZ("Mapbox Satellite",
			["http://a.tiles.mapbox.com/v4/mapbox.satellite/${z}/${x}/${y}.png?access_token=pk.eyJ1Ijoid29uZGllIiwiYSI6InlKcXpXT1UifQ.BQ3hMXdyffGusTRN8JnWOg"], {
		    sphericalMercator: true,
		    wrapDateLine: true,
		    numZoomLevels: 15,
		    transitionEffect: 'resize'
		});

		mapbox_streets_satellite = new OpenLayers.Layer.XYZ("Mapbox Satellite with Streets",
			["http://a.tiles.mapbox.com/v4/mapbox.streets-satellite/${z}/${x}/${y}.png?access_token=pk.eyJ1Ijoid29uZGllIiwiYSI6InlKcXpXT1UifQ.BQ3hMXdyffGusTRN8JnWOg"], {
		    sphericalMercator: true,
		    wrapDateLine: true,
		    numZoomLevels: 15,
		    transitionEffect: 'resize'
		});
        map.addLayers([mapbox_streets_satellite,  mapbox_satellite, gphy, ghyb, gmap, gsat]);

		map.addControl(new OpenLayers.Control.MousePosition
		(	{
                numDigits: 6,
                prefix: '(Lon/Lat)',
                emptyString: ''
			}
		));
		
		zoomInCtrl = new OpenLayers.Control.ZoomIn();
		map.addControl(zoomInCtrl);

		zoomOutCtrl = new OpenLayers.Control.ZoomOut();
		map.addControl(zoomOutCtrl);
		
		navigationHistoryCtrl = new OpenLayers.Control.NavigationHistory();
        map.addControl(navigationHistoryCtrl);



        //zoom box and pan controls
        OpenLayers.Control.CustomNavToolbar = OpenLayers.Class(OpenLayers.Control.Panel, {

            initialize: function(options) {
                OpenLayers.Control.Panel.prototype.initialize.apply(this, [options]);
                this.addControls([
                    new OpenLayers.Control.Navigation(),
                    //Here it come
                    new OpenLayers.Control.ZoomBox({alwaysZoom:true})
                ]);
                // To make the custom navtoolbar use the regular navtoolbar style
                this.displayClass = 'olControlNavToolbar'
            },

            /**
             * Method: draw
             * calls the default draw, and then activates mouse defaults.
             */
            draw: function() {
                var div = OpenLayers.Control.Panel.prototype.draw.apply(this, arguments);
                this.defaultControl = this.controls[0];
                return div;
            }
        });

        var panel = new OpenLayers.Control.CustomNavToolbar();
        map.addControl(panel);


        //When there is internet use this

		//No Internet
		//map.addLayers([africa_outline]);
		map.addControl(new OpenLayers.Control.ZoomBox());
		map.setCenter(new OpenLayers.LonLat(41.01,-9.86).transform(
				new OpenLayers.Projection("EPSG:4326"),
				map.getProjectionObject()
			), 6 );

        Ext.apply(me, 
		{
            map: map
        });
        me.callParent(arguments);

    }
});