Ext.define("Ext.XTemplateParser",{constructor:function(n){Ext.apply(this,n)},doTpl:Ext.emptyFn,parse:function(n){var i=this,p=n.length,w={elseif:"elif"},y=i.topRe,b=i.actionsRe,o,u,s,r,f,a,l,v,h,e,t,c;for(i.level=0,i.stack=u=[],o=0;o<p;o=e){if(y.lastIndex=o,r=y.exec(n),!r){i.doText(n.substring(o,p));break}if(h=r.index,e=y.lastIndex,o<h&&i.doText(n.substring(o,h)),r[1])e=n.indexOf("%}",h+2),i.doEval(n.substring(h+2,e)),e+=2;else if(r[2])e=n.indexOf("]}",h+2),i.doExpr(n.substring(h+2,e)),e+=2;else if(r[3])i.doTag(r[3]);else if(r[4]){for(t=null;(v=b.exec(r[4]))!==null;)s=v[2]||v[3],s&&(s=Ext.String.htmlDecode(s),f=v[1],f=w[f]||f,t=t||{},a=t[f],typeof a=="string"?t[f]=[a,s]:a?t[f].push(s):t[f]=s);t?t["if"]?(i.doIf(t["if"],t),u.push({type:"if"})):t["switch"]?(i.doSwitch(t["switch"],t),u.push({type:"switch"})):t["case"]?i.doCase(t["case"],t):t.elif?i.doElseIf(t.elif,t):t["for"]?(++i.level,(c=i.propRe.exec(r[4]))&&(t.propName=c[1]||c[2]),i.doFor(t["for"],t),u.push({type:"for",actions:t})):t.foreach?(++i.level,(c=i.propRe.exec(r[4]))&&(t.propName=c[1]||c[2]),i.doForEach(t.foreach,t),u.push({type:"foreach",actions:t})):t.exec&&(i.doExec(t.exec,t),u.push({type:"exec",actions:t})):i.elseRe.test(r[4])?i.doElse():i.defaultRe.test(r[4])?i.doDefault():(i.doTpl(),u.push({type:"tpl"}))}else r[0].length===5?u.push({type:"tpl"}):(l=u.pop(),i.doEnd(l.type,l.actions),(l.type=="for"||l.type=="foreach")&&--i.level)}},topRe:/(?:(\{\%)|(\{\[)|\{([^{}]+)\})|(?:<tpl([^>]*)\>)|(?:<\/tpl>)/g,actionsRe:/\s*(elif|elseif|if|for|foreach|exec|switch|case|eval|between)\s*\=\s*(?:(?:"([^"]*)")|(?:'([^']*)'))\s*/g,propRe:/prop=(?:(?:"([^"]*)")|(?:'([^']*)'))/,defaultRe:/^\s*default\s*$/,elseRe:/^\s*else\s*$/})