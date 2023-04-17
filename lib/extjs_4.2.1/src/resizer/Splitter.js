Ext.define("Ext.resizer.Splitter",{extend:"Ext.Component",requires:["Ext.XTemplate"],uses:["Ext.resizer.SplitterTracker"],alias:"widget.splitter",childEls:["collapseEl"],renderTpl:['<tpl if="collapsible===true">','<div id="{id}-collapseEl" class="',Ext.baseCSSPrefix,"collapse-el ",Ext.baseCSSPrefix,'layout-split-{collapseDir}{childElCls}">&#160;',"<\/div>","<\/tpl>"],baseCls:Ext.baseCSSPrefix+"splitter",collapsedClsInternal:Ext.baseCSSPrefix+"splitter-collapsed",canResize:!0,collapsible:!1,collapseOnDblClick:!0,defaultSplitMin:40,defaultSplitMax:1e3,collapseTarget:"next",horizontal:!1,vertical:!1,size:5,getTrackerConfig:function(){return{xclass:"Ext.resizer.SplitterTracker",el:this.el,splitter:this}},beforeRender:function(){var n=this,t=n.getCollapseTarget();n.callParent();t.collapsed&&n.addCls(n.collapsedClsInternal);n.canResize||n.addCls(n.baseCls+"-noresize");Ext.applyIf(n.renderData,{collapseDir:n.getCollapseDirection(),collapsible:n.collapsible||t.collapsible});n.protoEl.unselectable()},onRender:function(){var n=this,t;n.callParent(arguments);n.performCollapse!==!1&&(n.renderData.collapsible&&n.mon(n.collapseEl,"click",n.toggleTargetCmp,n),n.collapseOnDblClick&&n.mon(n.el,"dblclick",n.toggleTargetCmp,n));n.mon(n.getCollapseTarget(),{collapse:n.onTargetCollapse,expand:n.onTargetExpand,beforeexpand:n.onBeforeTargetExpand,beforecollapse:n.onBeforeTargetCollapse,scope:n});n.canResize&&(n.tracker=Ext.create(n.getTrackerConfig()),n.relayEvents(n.tracker,["beforedragstart","dragstart","dragend"]));t=n.collapseEl;t&&(t.lastCollapseDirCls=n.collapseDirProps[n.collapseDirection].cls)},getCollapseDirection:function(){var n=this,t=n.collapseDirection,i,r,u,f;return t||(i=n.collapseTarget,i.isComponent&&(t=i.collapseDirection),t||(f=n.ownerCt.layout.type,i.isComponent?(u=n.ownerCt.items,r=Number(u.indexOf(i)===u.indexOf(n)-1)<<1|Number(f==="hbox")):r=Number(n.collapseTarget==="prev")<<1|Number(f==="hbox"),t=["bottom","right","top","left"][r]),n.collapseDirection=t),n.setOrientation(t==="top"||t==="bottom"?"horizontal":"vertical"),t},getCollapseTarget:function(){var n=this;return n.collapseTarget.isComponent?n.collapseTarget:n.collapseTarget==="prev"?n.previousSibling():n.nextSibling()},setCollapseEl:function(n){var t=this.collapseEl;t&&t.setDisplayed(n)},onBeforeTargetExpand:function(){this.setCollapseEl("none")},onBeforeTargetCollapse:function(){this.setCollapseEl("none")},onTargetCollapse:function(){this.el.addCls([this.collapsedClsInternal,this.collapsedCls]);this.setCollapseEl("")},onTargetExpand:function(){this.el.removeCls([this.collapsedClsInternal,this.collapsedCls]);this.setCollapseEl("")},collapseDirProps:{top:{cls:Ext.baseCSSPrefix+"layout-split-top"},right:{cls:Ext.baseCSSPrefix+"layout-split-right"},bottom:{cls:Ext.baseCSSPrefix+"layout-split-bottom"},left:{cls:Ext.baseCSSPrefix+"layout-split-left"}},orientationProps:{horizontal:{opposite:"vertical",fixedAxis:"height",stretchedAxis:"width"},vertical:{opposite:"horizontal",fixedAxis:"width",stretchedAxis:"height"}},applyCollapseDirection:function(){var t=this,n=t.collapseEl,r=t.collapseDirProps[t.collapseDirection],i;n&&(i=n.lastCollapseDirCls,i&&n.removeCls(i),n.addCls(n.lastCollapseDirCls=r.cls))},applyOrientation:function(){var n=this,i=n.orientation,t=n.orientationProps[i],f=n.size,r=t.fixedAxis,u=t.stretchedAxis,e=n.baseCls+"-";n[i]=!0;n[t.opposite]=!1;n.hasOwnProperty(r)&&n[r]!=="100%"||(n[r]=f);n.hasOwnProperty(u)&&n[u]!==f||(n[u]="100%");n.removeCls(e+t.opposite);n.addCls(e+i)},setOrientation:function(n){var t=this;t.orientation!==n&&(t.orientation=n,t.applyOrientation())},updateOrientation:function(){delete this.collapseDirection;this.getCollapseDirection();this.applyCollapseDirection()},toggleTargetCmp:function(){var n=this.getCollapseTarget(),t=n.placeholder,i;Ext.isFunction(n.expand)&&Ext.isFunction(n.collapse)&&(i=t&&!t.hidden?!0:!n.hidden,i&&(n.collapsed?n.expand():n.collapseDirection?n.collapse():n.collapse(this.renderData.collapseDir)))},setSize:function(){var n=this;n.callParent(arguments);Ext.isIE&&n.el&&n.el.repaint()},beforeDestroy:function(){Ext.destroy(this.tracker);this.callParent()}})