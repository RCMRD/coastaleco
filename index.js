Ext.Loader.setConfig
({
    enabled: true,
	disableCaching: false,
    paths: {
        GeoExt: "lib/geoext2-2.0.3/src/GeoExt"
    }
});
Ext.application({
    name: 'coastaleco',
    appFolder: 'app',
	extend: 'Ext.app.Application',
    controllers: 
	[
        'coastaleco.controller.WebMapping.MapPanel'
    ],
    launch: function() 
	{
        Ext.tip.QuickTipManager.init();	
		Ext.create('coastaleco.view.WebMappingViewport');
    }
});