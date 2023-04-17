Ext.define("Ext.chart.Label",{requires:["Ext.draw.Color"],colorStringRe:/url\s*\(\s*#([^\/)]+)\s*\)/,constructor:function(){var n=this;n.label=Ext.applyIf(n.label||{},{display:"none",stackedDisplay:"none",color:"#000",field:"name",minMargin:50,font:"11px Helvetica, sans-serif",orientation:"horizontal",renderer:Ext.identityFn});n.label.display!=="none"&&(n.labelsGroup=n.chart.surface.getGroup(n.seriesId+"-labels"))},renderLabels:function(){var i=this,at=i.chart,it=at.gradients,rt=i.items,v=at.animate,f=i.label,ut=f.display,ft=f.stackedDisplay,p=f.renderer,kt=f.color,dt=[].concat(f.field),s=i.labelsGroup,w=(s||0)&&s.length,vt=i.chart.getChartStore(),yt=vt.getCount(),pt=(rt||0)&&rt.length,gt=pt/yt,ni=(it||0)&&it.length,e=Ext.draw.Color,et=[],b,u,ot,r,h,k,d,st,wt,ht,t,n,c,l,ct,g,a,o,bt,nt,tt,y,lt;if(ut!="none"&&s){if(pt==0)while(w--)et.push(w);else{for(u=0,ot=0,r=0;u<yt;u++)for(h=0,k=0;k<gt;k++){for(t=rt[ot],n=s.getAt(r),c=vt.getAt(u);this.__excludes&&this.__excludes[h];)h++;if(!t&&n&&(n.hide(!0),r++),t&&dt[k]){if(!n&&(n=i.onCreateLabel(c,t,u,ut),!n))break;n.setAttributes({fill:String(kt)},!0);i.onPlaceLabel(n,c,t,u,ut,v,h);if(r++,f.contrast&&t.sprite){if(l=t.sprite,o=v&&l._endStyle?l._endStyle.fill:v&&l._to?l._to.fill:l.attr.fill,o=o||l.attr.fill,ct=e.fromString(o),o&&!ct){for(o=o.match(i.colorStringRe)[1],d=0;d<ni;d++)if(b=it[d],b.id==o){ht=0;st=0;for(wt in b.stops)ht++,st+=e.fromString(b.stops[wt].color).getGrayscale();g=st/ht/255;break}}else g=ct.getGrayscale()/255;n.isOutside&&(g=1);a=e.fromString(n.attr.fill||n.attr.color).getHSL();a[2]=g>.5?.2:.8;n.setAttributes({fill:String(e.fromHSL.apply({},a))},!0)}if(i.stacked&&ft&&(t.totalPositiveValues||t.totalNegativeValues)){if(nt=t.totalPositiveValues||0,tt=t.totalNegativeValues||0,bt=nt+tt,ft=="total"?y=p(bt):ft=="balances"&&(nt==0&&tt==0?y=p(0):(y=p(nt),lt=p(tt))),y){n=s.getAt(r);n||(n=i.onCreateLabel(c,t,u,"over"));a=e.fromString(n.attr.color||n.attr.fill).getHSL();n.setAttributes({text:y,style:f.font,fill:String(e.fromHSL.apply({},a))},!0);i.onPlaceLabel(n,c,t,u,"over",v,h);r++}if(lt){n=s.getAt(r);n||(n=i.onCreateLabel(c,t,u,"under"));a=e.fromString(n.attr.color||n.attr.fill).getHSL();n.setAttributes({text:lt,style:f.font,fill:String(e.fromHSL.apply({},a))},!0);i.onPlaceLabel(n,c,t,u,"under",v,h);r++}}}ot++;h++}for(w=s.length;w>r;)et.push(r),r++}i.hideLabels(et)}},hideLabels:function(n){var i=this.labelsGroup,t=!!n&&n.length;if(i)if(t===!1)for(t=i.getCount();t--;)i.getAt(t).hide(!0);else while(t--)i.getAt(n[t]).hide(!0)}})