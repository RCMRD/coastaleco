Ext.define('coastaleco.view.WebMapping.MainToolbar', 
{
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.MainToolbar',
    id:'MainToolbar_id',
	region: 'north',
    initComponent: function() 
	{
        var me = this;
        Ext.applyIf(me, {
            items: 
			[           
				{
					xtype: 'toolbar',
					height: 33,
					items: 
					[
						{
							xtype: 'button',
							tooltip: "Zoom In",
							cls:'tools_cls', 
							icon: 'assets/images/zoom-in.png',
							action: 'map_zoom_in'
						},
						'-',
						{
							xtype: 'button',
							tooltip: "Zoom Out",
							cls:'tools_cls', 
							icon: 'assets/images/zoom-out.png',
							action: 'map_zoom_out'
						},
						'-',
						{
							xtype: 'button',
							tooltip: "Default Map Extent",
							icon: 'assets/images/default.png',
							cls:'tools_cls', 
							action: 'map_default_map_extent'
						},
						'-',

						{
							xtype: 'button',
							tooltip: "Previous in History",
							cls:'tools_cls', 
							icon: 'assets/images/undo.png',
							action: 'navigation_history_previous'
						},	
						'-',		
						{
							xtype: 'button',
							tooltip: "Next in History",
							icon: 'assets/images/redo.png',
							cls:'tools_cls', 
							action: 'navigation_history_next'
						},
						'-',
						{
							xtype: 'combobox',
							allowBlank: true,
							emptyText:'Zoom to Countries',
							width: 142,
							labelWidth: 119,
							margin: "10 0 0 0",
							id:  'Zoom_to_Countries_Id',
							name:  'Zoom_to_Countries_Name',
							queryMode: 'local',
							displayField: 'country',
							store : [
								"All Countries", "Kenya", "Tanzania", "Mozambique", "Madagascar"
							],
							typeAhead: true,
							//value:'All Countries',
							lastQuery:'',
							triggerAction: 'all',
							selectOnFocus:true
						},
						{
							xtype: 'button',
							tooltip: "Click to Zoom into the Selected Countries",
							icon: 'assets/images/zoom-in-l.png',
							cls:'tools_countries_cls', 
							action: 'zoom_to_countries'
						}
					]
				},
                '->',
                {
                    xtype: 'toolbar',
                    height: 33,
                    id:'menubar_id',
                    items:[
                        {
                            xtype:'button',
                            text:'About',
                            tooltip: "About the Project",
                            icon: 'assets/images/about.png',
                            enableToggle: true,
                            cls:'menu_cls',
                            action: 'about_us'
                        },
                        '-',
                        {
                            xtype:'button',
                            text:'Help',
                            tooltip: "Help",
                            icon: 'assets/images/help.png',
                            enableToggle: true,
                            cls:'menu_cls',
                            action: 'help'
                        },
                        '-',
                        {
                            xtype:'button',
                            text: 'Contact',
                            cls:'menu_cls',
                            tooltip: "Contact Us",
                            icon: 'assets/images/contactus.png',
                            enableToggle: true,
                            action: 'contact_us'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});