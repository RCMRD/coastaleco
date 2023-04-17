Ext.define("Ext.grid.feature.RowBody",{extend:"Ext.grid.feature.Feature",alias:"feature.rowbody",rowBodyCls:Ext.baseCSSPrefix+"grid-row-body",rowBodyHiddenCls:Ext.baseCSSPrefix+"grid-row-body-hidden",rowBodyTdSelector:"td."+Ext.baseCSSPrefix+"grid-cell-rowbody",eventPrefix:"rowbody",eventSelector:"tr."+Ext.baseCSSPrefix+"grid-rowbody-tr",tableTpl:{before:function(n){var t=n.view,i=t.rowValues;this.rowBody.setup(n.rows,i)},after:function(n){var t=n.view,i=t.rowValues;this.rowBody.cleanup(n.rows,i)},priority:100},extraRowTpl:["{%","values.view.rowBodyFeature.setupRowData(values.record, values.recordIndex, values);","this.nextTpl.applyOut(values, out, parent);","%}",'<tr class="'+Ext.baseCSSPrefix+'grid-rowbody-tr {rowBodyCls}">','<td class="'+Ext.baseCSSPrefix+'grid-cell-rowbody" colspan="{rowBodyColspan}">','<div class="'+Ext.baseCSSPrefix+'grid-rowbody {rowBodyDivCls}">{rowBody}<\/div>',"<\/td>","<\/tr>",{priority:100,syncRowHeights:function(n,t){var e=this.owner,i=Ext.fly(n).down(e.eventSelector,!0),r,u,f;i&&(r=Ext.fly(t).down(e.eventSelector,!0))&&((u=i.offsetHeight)>(f=r.offsetHeight)?Ext.fly(r).setHeight(u):f>u&&Ext.fly(i).setHeight(f))},syncContent:function(n,t){var i=this.owner,r=Ext.fly(n).down(i.eventSelector,!0),u;r&&(u=Ext.fly(t).down(i.eventSelector,!0))&&Ext.fly(r).syncContent(u)}}],init:function(n){var t=this,i=t.view;i.rowBodyFeature=t;i.findFeature("rowwrap")||(n.mon(i,{element:"el",mousedown:t.onMouseDown,scope:t}),t.mon(n.getStore(),"remove",t.onStoreRemove,t));i.headerCt.on({columnschanged:t.onColumnsChanged,scope:t});i.addTableTpl(t.tableTpl).rowBody=t;i.addRowTpl(Ext.XTemplate.getTpl(this,"extraRowTpl"));t.callParent(arguments)},onStoreRemove:function(n,t,i){var u=this.view,r;u.rendered&&(r=u.getNode(i),r&&(r=Ext.fly(r).next(this.eventSelector),r&&r.remove()))},onMouseDown:function(n){var i=this,t=n.getTarget(i.eventSelector);t&&Ext.fly(t=t.previousSibling).is(i.view.getItemSelector())&&(n.target=t,i.view.handleEvent(n))},getSelectedRow:function(n,t){var i=n.getNode(t,!1);return i?Ext.fly(i).down(this.eventSelector):null},onColumnsChanged:function(n){for(var i=this.view.el.query(this.rowBodyTdSelector),r=n.getVisibleGridColumns().length,u=i.length,t=0;t<u;++t)i[t].colSpan=r},setupRowData:function(n,t,i){this.getAdditionalData&&Ext.apply(i,this.getAdditionalData(n.data,t,n,i))},setup:function(n,t){t.rowBodyCls=this.rowBodyCls;t.rowBodyColspan=t.view.getGridColumns().length},cleanup:function(n,t){t.rowBodyCls=t.rowBodyColspan=t.rowBody=null}})