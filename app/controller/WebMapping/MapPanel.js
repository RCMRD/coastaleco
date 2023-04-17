Ext.require([
    'GeoExt.panel.Map',
    'GeoExt.data.FeatureStore',
    'GeoExt.grid.column.Symbolizer',
    'GeoExt.selection.FeatureModel',
    'Ext.tree.plugin.TreeViewDragDrop',
    'GeoExt.panel.Map',
    'GeoExt.tree.OverlayLayerContainer',
    'GeoExt.tree.BaseLayerContainer',
    'GeoExt.data.LayerTreeModel',
    'GeoExt.tree.View',
    'GeoExt.tree.Column',
	'Ext.util.Point',
	'GeoExt.container.VectorLegend',
	'GeoExt.window.Popup',
	'GeoExt.panel.Legend',
    'GeoExt.container.WmsLegend'
]);

var map, africa_outline;
var LayerLegend, SouthPanel, WestPanel, help_popup;
var zoomInCtrl, zoomOutCtrl, navigationHistoryCtrl;
var layer_legend_tree, layers_tree_store, selected_record_latitude_value, selected_record_longitude_value;
//var apiKey = "AtFFb9kcfL5tn_1VGMNC_N8Q3Z6tZaoQhWuJFhekSQmJRE2zUt3ik5XbHZWO721l";
Ext.define('coastaleco.controller.WebMapping.MapPanel', 
{
	extend: 'Ext.app.Controller',	
	views: 	['WebMapping.MapPanel','WebMapping.MainToolbar','WebMapping.EcoSearchMapForm', 'WebMapping.EcoSearchStatForm', 'WebMapping.GeoExtMapPanel'],
	controllers: ['WebMapping.ButonOnclickActions'],
    stores: [],
    initComponent: function() 
	{

	}
});
