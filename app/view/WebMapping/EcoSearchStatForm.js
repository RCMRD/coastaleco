Ext.define('coastaleco.view.WebMapping.EcoSearchStatForm', 
{
    extend: 'Ext.form.Panel',
    alias: 'widget.EcoSearchStatForm',
    bodyPadding: 2,
	minWidth:250, 
	height: 150,
	id:'stat_search_id',
	layout:'anchor',
    title: 'Statistical Query',
    collapsible:true,
	frame: true,
	labelWidth: 25, 
	items:
	[
		{
			xtype: 'combobox',
			fieldLabel: 'Ecosystem',
			allowBlank: true,
			emptyText:'Select Ecosystem',
			minWidth: 150,
			margin: "10 0 0 0",
			id:  'ecosystem_stat_id',
			name:  'ecosystem_stat_name',
			queryMode: 'local',
			displayField: 'ecosystem',
			//store: 'WebMapping.DivisionsStore',
			store:["Mangroves"],
			typeAhead: true,
			lastQuery:'',
			triggerAction: 'all',
			value: 'Mangroves',
			selectOnFocus:true
		},	
		{
			xtype: 'combobox',
			fieldLabel: 'Countries',
			allowBlank: true,
			minWidth: 150,
			margin: "10 0 0 0",
			id:  'countries_stat_id',
			emptyText:'Select Countries',
			typeAhead: true,
			store : [
						"All Countries"
					], 
			value:"All Countries"
		},
        {
			xtype:'panel',
			height:80,
			bodyStyle:'margin-top:5px; margin-botton:5px;',
			bodyPadding:'5px',
			html:'<strong>Note: </strong>Statistics is only available for all countries.'
		}

	],	
	buttons:
	[
		{
			text: 'Show Statistics',
			width: 150,
			action: 'SearchEco_Stat'
		}
	]

});
