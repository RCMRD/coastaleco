SourceModel = Ext.define('DownloadFileModel', {
    extend: 'Ext.data.Model',
    idProperty: 'source',
    extraParams:{
        level: '',
        component: '',
        current: ''
    },
    fields: [
        'name'
    ]
});

SourceStore = new Ext.data.Store({
    autoLoad: true,
    autoDestroy:true,
    type: 'json',
    id:'source_store_id',
    model: SourceModel,
    pageSize: 10,
    remoteSort: false,
    proxy: {
        type: 'ajax',
        actionMethods: 'GET',
        url: 'data/webmapping/selectSource.php',
        reader: {
            type: 'json'
        }
    },
    sorters: [
        {
            property : 'size',
            direction: 'ASC'
        }
    ]
});

Ext.define('coastaleco.view.WebMapping.EcoSearchMapForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.EcoSearchMapForm',
    bodyPadding: 2,
	minWidth:250, 
	height: 150,
	layout:'anchor',
    title: 'Map Query',
    id:'searchform_id',
    cls:'ecosearchMapform_cls',
    collapsible:true,
	frame: true,
	labelWidth: 25, 
	items:
	[

		{
			xtype: 'combobox',
			fieldLabel: 'Ecosystem',
			allowBlank: false,
			emptyText:'Select Ecosystem',
			minWidth: 150,
			margin: "10 0 0 0",
			id:  'ecosystem_id',
			name:  'ecosystem_name',
			queryMode: 'local',
			displayField: 'ecosystem',
			store:["Mangroves", "Seagrass", "Coastal Erosion"],
			typeAhead: true,
			lastQuery:'',
			triggerAction: 'all',
			selectOnFocus:true
		},	
		{
			xtype: 'combobox',
			fieldLabel: 'Countries',
			allowBlank: false,
			minWidth: 150,
			margin: "10 0 0 0",
			id:  'countries_id',
            name: 'countries_name',
			emptyText:'Select Countries',
			typeAhead: true,
			store : [
                "Kenya", "Tanzania", "Mozambique", "Madagascar"
            ]
		},
        {
            xtype: 'combobox',
            fieldLabel: 'Data Source Satellite',
            allowBlank: true,
            minWidth: 150,
            margin: "10 0 0 0",
            displayField: 'name',
            readOnly: true,
            valueField: 'source',
            id:  'source_id',
            emptyText:'Select Satellite',
            store : SourceStore,
            triggerAction: 'all',
            selectOnFocus:true
        }
	],	
	buttons:
	[
		{
			text: 'Show on Map',
			width: 150,
            formBind: true,
			action: 'SearchEco'
		}
		

	]

});
