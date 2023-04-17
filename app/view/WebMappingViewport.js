layers_tree_store = Ext.create('Ext.data.TreeStore', {
	model: 'GeoExt.data.LayerTreeModel',
	root: 
	{
		expanded: true,
		children: 
		[

			{
				text: "Overlays",
				plugins: ['gx_overlaylayercontainer'],
				expanded: true
			},
            {
                text: "Base Maps",
                plugins: ['gx_baselayercontainer'],
                expanded: true
            }
        ]
	}
});

layer_legend_tree = Ext.create('GeoExt.tree.Panel', {
	title: "Layers",
	autoScroll: true,
 	viewConfig:
	{
		plugins: [{
			ptype: 'treeviewdragdrop',
			appendOnly: false
		}]
	},
	store: layers_tree_store,
	rootVisible: false,
	lines: false,
    listeners: {
        itemclick: function (view, node) {
            if (node.isLeaf()) {
                node.collapse();
                // some functionality to open the leaf(document) in a tabpanel
            } else if (node.isExpanded()) {
                node.collapse();
            } else {
                node.expand();
            }
        }
    }
});

legendPanel = Ext.create ('GeoExt.LegendPanel', {
	bodyStyle: 'padding:5px',
	autoScroll: true,
    height: 300,
	title: "Symbology",
	id:"legend_id",
	collapsible: true,
    defaults: {
        style: 'padding:5px',           
        baseParams: {
            FORMAT: 'image/png',
            LEGEND_OPTIONS: 'forceLabels:on;fontName=Verdana;fontSize:12',
            WIDTH:'16',
            HEIGHT:'12'
        }
    },
	lines: false,
	layers: [mangroves_kenya_layer, mangroves_tanzania_layer, mangroves_mozambique_layer, mangroves_madagascar_layer, seagrass_kenya_layer]
});


LogoPanel = new Ext.Panel({  
    region: 'east',
    xtype: 'panel',
    id: 'logopanelID',
    width: 318,
    animCollapse: true,
    collapsible: true,
    preventHeader: true,
    split: true,
    items:[
        {
            xtype: 'panel',
            html:'<div class="logos"><a target="new" href="http://www.usaid.gov/">' +
            '<img alt="USAID" width="124" height="37" src="assets/images/usaid.png"></a>&nbsp;&nbsp;&nbsp;' +
            '<a target="new" href="http://www.nasa.gov/">' +
            '<img alt="NASA" width="45" height="37" src="assets/images/nasa.png"></a><br><br>'+
            '<a target="new" href="https://servirglobal.net/">' +
            '<img alt="SERVIR Eastern and Southern Africa" width="272" height="34" class="servir" src="assets/images/servir.png"></a><br><br>' +
            '</div>'
        }
    ]
}); 
	
WestPanel = new Ext.Panel ({	
	region: 'west',
	xtype: 'panel',
	width: 250,
	id: 'westpanel_id',
	minWidth: 200,
	minHeight:400,
    listeners: {
        resize: Ext.Function.bind(function(comp, width, height,
                oldWidth, oldHeight, eOpts) {
            comp.doLayout();
        }, this)
    },
	title: 'Map Elements',
	collapsible: true,
	split: true,
	items: [layer_legend_tree, legendPanel]
});	



var FormTabs = Ext.create('Ext.tab.Panel', {
	id: "formstabsID",
	layout: 'card',
	//region: 'west',
	width:320,
	minWidth:200,
    height: 300, 
	animate: true,
	preventHeader: true,
     hideCollapseTool: true,
	collapsible: true,
    activeTab: 0,
    split: true,
    tabPosition: 'top',
    items: [
   
        {
          xtype: 'EcoSearchMapForm'
        },
        {
         xtype:'EcoSearchStatForm'
        },
        {
        	xtype:'panel',
        	id:'download_id',
        	title:'Downloads',
        	html: 'You can download shape files and tables for each query you make. Make a search and open this tab again to get downloadable files.'
        }
    ]
});

EastPanel = new Ext.Panel ({	
	region: 'east',
	xtype: 'panel',
	id:'eastpanel_id',
	cls:'eastpanel_cls',
	minWidth: 260,
	preventHeader: true,
     hideCollapseTool: true,
	collapsible: true,
    activeTab: 0,
	split: true,
	items:
	[FormTabs, LogoPanel]
});	



Ext.define('coastaleco.view.WebMappingViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.WebMappingViewport',
	id: 'viewportId',
	renderTo: Ext.getBody(),
    layout: {
        type: 'border'
    },
    initComponent: function() 
	{
        var me = this;
        Ext.applyIf(me, {
		items: 
		[
			{
				xtype: 'panel',
				region: 'north',
				height: 60, //orignal 60
				html: '<div class="x-panel-header-default"><h1 class="tophead">'+
                '<a target="new" href="http://www.rcmrd.org">' +
				'<img class="imghead" src="assets/images/rcmrd_head.png"></a>'+
				'Coastal and Marine Ecosystem Resources Visualization Tool</h1></div>'
			},
			{
				xtype: 'MapPanel'
			},
			WestPanel, EastPanel,SouthPanel, help_popup
		]
        });
 
        me.callParent(arguments);
    },
    handler: function () {

    }

});
