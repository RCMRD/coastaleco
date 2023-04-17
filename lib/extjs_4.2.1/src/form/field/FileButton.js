Ext.define("Ext.form.field.FileButton",{extend:"Ext.button.Button",alias:"widget.filebutton",childEls:["btnEl","btnWrap","btnInnerEl","btnIconEl","fileInputEl"],inputCls:Ext.baseCSSPrefix+"form-file-input",cls:Ext.baseCSSPrefix+"form-file-btn",preventDefault:!1,renderTpl:['<span id="{id}-btnWrap" class="{baseCls}-wrap','<tpl if="splitCls"> {splitCls}<\/tpl>','{childElCls}" unselectable="on">','<span id="{id}-btnEl" class="{baseCls}-button">','<span id="{id}-btnInnerEl" class="{baseCls}-inner {innerCls}','{childElCls}" unselectable="on">',"{text}","<\/span>",'<span role="img" id="{id}-btnIconEl" class="{baseCls}-icon-el {iconCls}','{childElCls} {glyphCls}" unselectable="on" style="','<tpl if="iconUrl">background-image:url({iconUrl});<\/tpl>','<tpl if="glyph && glyphFontFamily">font-family:{glyphFontFamily};<\/tpl>">','<tpl if="glyph">&#{glyph};<\/tpl><tpl if="iconCls || iconUrl">&#160;<\/tpl>',"<\/span>","<\/span>","<\/span>",'<input id="{id}-fileInputEl" class="{childElCls} {inputCls}" type="file" size="1" name="{inputName}">'],getTemplateArgs:function(){var n=this.callParent();return n.inputCls=this.inputCls,n.inputName=this.inputName,n},afterRender:function(){var n=this;n.callParent(arguments);n.fileInputEl.on("change",n.fireChange,n)},fireChange:function(n){this.fireEvent("change",this,n,this.fileInputEl.dom.value)},createFileInput:function(n){var t=this;t.fileInputEl=t.el.createChild({name:t.inputName,id:n?undefined:t.id+"-fileInputEl",cls:t.inputCls,tag:"input",type:"file",size:1});t.fileInputEl.on("change",t.fireChange,t)},reset:function(n){n&&this.fileInputEl.remove();this.createFileInput(!n)},restoreInput:function(n){this.fileInputEl.remove();n=Ext.get(n);this.el.appendChild(n);this.fileInputEl=n},onDisable:function(){this.callParent();this.fileInputEl.dom.disabled=!0},onEnable:function(){this.callParent();this.fileInputEl.dom.disabled=!1}})