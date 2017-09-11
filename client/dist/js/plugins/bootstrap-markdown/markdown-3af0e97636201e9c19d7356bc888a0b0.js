(function(e){function t(){return"Markdown.mk_block( "+uneval(this.toString())+", "+uneval(this.trailing)+", "+uneval(this.lineNumber)+" )"}function r(){var e=require("util")
return"Markdown.mk_block( "+e.inspect(this.toString())+", "+e.inspect(this.trailing)+", "+e.inspect(this.lineNumber)+" )"}function n(e){for(var t=0,r=-1;-1!==(r=e.indexOf("\n",r+1));)t++
return t}function i(e,t){function r(e){this.len_after=e,this.name="close_"+t}var n=e+"_state",i="strong"==e?"em_state":"strong_state"
return function(l,a){if(this[n][0]==t)return this[n].shift(),[l.length,new r(l.length-t.length)]
var s=this[i].slice(),o=this[n].slice()
this[n].unshift(t)
var c=this.processInline(l.substr(t.length)),h=c[c.length-1]
this[n].shift()
if(h instanceof r){c.pop()
return[l.length-h.len_after,[e].concat(c)]}return this[i]=s,this[n]=o,[t.length,t]}}function l(e){for(var t=e.split(""),r=[""],n=!1;t.length;){var i=t.shift()
switch(i){case" ":n?r[r.length-1]+=i:r.push("")
break
case"'":case'"':n=!n
break
case"\\":i=t.shift()
default:r[r.length-1]+=i}}return r}function s(e){return d(e)&&e.length>1&&"object"==typeof e[1]&&!d(e[1])?e[1]:void 0}function o(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function c(e){if("string"==typeof e)return o(e)
var t=e.shift(),r={},n=[]
for(!e.length||"object"!=typeof e[0]||e[0]instanceof Array||(r=e.shift());e.length;)n.push(arguments.callee(e.shift()))
var i=""
for(var l in r)i+=" "+l+'="'+o(r[l])+'"'
return"img"==t||"br"==t||"hr"==t?"<"+t+i+"/>":"<"+t+i+">"+n.join("")+"</"+t+">"}function h(e,t,r){var n
r=r||{}
var i=e.slice(0)
"function"==typeof r.preprocessTreeNode&&(i=r.preprocessTreeNode(i,t))
var l=s(i)
if(l){i[1]={}
for(n in l)i[1][n]=l[n]
l=i[1]}if("string"==typeof i)return i
switch(i[0]){case"header":i[0]="h"+i[1].level,delete i[1].level
break
case"bulletlist":i[0]="ul"
break
case"numberlist":i[0]="ol"
break
case"listitem":i[0]="li"
break
case"para":i[0]="p"
break
case"markdown":i[0]="html",l&&delete l.references
break
case"code_block":i[0]="pre",n=l?2:1
var a=["code"]
a.push.apply(a,i.splice(n)),i[n]=a
break
case"inlinecode":i[0]="code"
break
case"img":i[1].src=i[1].href,delete i[1].href
break
case"linebreak":i[0]="br"
break
case"link":i[0]="a"
break
case"link_ref":i[0]="a"
var o=t[l.ref]
if(!o)return l.original
delete l.ref,l.href=o.href,o.title&&(l.title=o.title),delete l.original
break
case"img_ref":i[0]="img"
var o=t[l.ref]
if(!o)return l.original
delete l.ref,l.src=o.href,o.title&&(l.title=o.title),delete l.original}if(n=1,l){for(var c in i[1])n=2
1===n&&i.splice(n,1)}for(;n<i.length;++n)i[n]=arguments.callee(i[n],t,r)
return i}function u(e){for(var t=s(e)?2:1;t<e.length;)"string"==typeof e[t]?t+1<e.length&&"string"==typeof e[t+1]?e[t]+=e.splice(t+1,1)[0]:++t:(arguments.callee(e[t]),++t)}var f=e.Markdown=function e(t){switch(typeof t){case"undefined":this.dialect=e.dialects.Gruber
break
case"object":this.dialect=t
break
default:if(!(t in e.dialects))throw new Error("Unknown Markdown dialect '"+String(t)+"'")
this.dialect=e.dialects[t]}this.em_state=[],this.strong_state=[],this.debug_indent=""}
e.parse=function(e,t){return new f(t).toTree(e)},e.toHTML=function(t,r,n){var i=e.toHTMLTree(t,r,n)
return e.renderJsonML(i)},e.toHTMLTree=function(e,t,r){"string"==typeof e&&(e=this.parse(e,t))
var n=s(e),i={}
n&&n.references&&(i=n.references)
var l=h(e,i,r)
return u(l),l}
var g=f.mk_block=function(e,n,i){1==arguments.length&&(n="\n\n")
var l=new String(e)
return l.trailing=n,l.inspect=r,l.toSource=t,void 0!=i&&(l.lineNumber=i),l}
f.prototype.split_blocks=function(e,t){var r,i=/([\s\S]+?)($|\n(?:\s*\n|$)+)/g,l=[],a=1
for(null!=(r=/^(\s*\n)/.exec(e))&&(a+=n(r[0]),i.lastIndex=r[0].length);null!==(r=i.exec(e));)l.push(g(r[1],r[2],a)),a+=n(r[0])
return l},f.prototype.processBlock=function(e,t){var r=this.dialect.block,n=r.__order__
if("__call__"in r)return r.__call__.call(this,e,t)
for(var i=0;i<n.length;i++){var l=r[n[i]].call(this,e,t)
if(l)return(!d(l)||l.length>0&&!d(l[0]))&&this.debug(n[i],"didn't return a proper array"),l}return[]},f.prototype.processInline=function(e){return this.dialect.inline.__call__.call(this,String(e))},f.prototype.toTree=function(e,t){var r=e instanceof Array?e:this.split_blocks(e),n=this.tree
try{for(this.tree=t||this.tree||["markdown"];r.length;){var i=this.processBlock(r.shift(),r)
i.length&&this.tree.push.apply(this.tree,i)}return this.tree}finally{t&&(this.tree=n)}},f.prototype.debug=function(){var e=Array.prototype.slice.call(arguments)
e.unshift(this.debug_indent),"undefined"!=typeof print&&print.apply(print,e),"undefined"!=typeof console&&void 0!==console.log&&console.log.apply(null,e)},f.prototype.loop_re_over_block=function(e,t,r){for(var n,i=t.valueOf();i.length&&null!=(n=e.exec(i));)i=i.substr(n[0].length),r.call(this,n)
return i},f.dialects={},f.dialects.Gruber={block:{atxHeader:function(e,t){var r=e.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/)
if(r){var n=["header",{level:r[1].length}]
return Array.prototype.push.apply(n,this.processInline(r[2])),r[0].length<e.length&&t.unshift(g(e.substr(r[0].length),e.trailing,e.lineNumber+2)),[n]}},setextHeader:function(e,t){var r=e.match(/^(.*)\n([-=])\2\2+(?:\n|$)/)
if(r){var n="="===r[2]?1:2,i=["header",{level:n},r[1]]
return r[0].length<e.length&&t.unshift(g(e.substr(r[0].length),e.trailing,e.lineNumber+2)),[i]}},code:function(e,t){var r=[],n=/^(?: {0,3}\t| {4})(.*)\n?/
if(e.match(n)){e:for(;;){var i=this.loop_re_over_block(n,e.valueOf(),function(e){r.push(e[1])})
if(i.length){t.unshift(g(i,e.trailing))
break e}if(!t.length)break e
if(!t[0].match(n))break e
r.push(e.trailing.replace(/[^\n]/g,"").substring(2)),e=t.shift()}return[["code_block",r.join("\n")]]}},horizRule:function(e,t){var r=e.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/)
if(r){var n=[["hr"]]
return r[1]&&n.unshift.apply(n,this.processBlock(r[1],[])),r[3]&&t.unshift(g(r[3])),n}},lists:function(){function e(e){return new RegExp("(?:^("+o+"{0,"+e+"} {0,3})("+l+")\\s+)|(^"+o+"{0,"+(e-1)+"}[ ]{0,4})")}function t(e){return e.replace(/ {0,3}\t/g,"    ")}function r(e,t,r,n){if(t)return void e.push(["para"].concat(r))
var i=e[e.length-1]instanceof Array&&"para"==e[e.length-1][0]?e[e.length-1]:e
n&&e.length>1&&r.unshift(n)
for(var l=0;l<r.length;l++){var a=r[l]
"string"==typeof a&&i.length>1&&"string"==typeof i[i.length-1]?i[i.length-1]+=a:i.push(a)}}function n(e,t){for(var r=new RegExp("^("+o+"{"+e+"}.*?\\n?)*$"),n=new RegExp("^"+o+"{"+e+"}","gm"),i=[];t.length>0;){if(r.exec(t[0])){var l=t.shift(),a=l.replace(n,"")
i.push(g(a,l.trailing,l.lineNumber))}break}return i}function i(e,t,r){var n=e.list,i=n[n.length-1]
if(!(i[1]instanceof Array&&"para"==i[1][0]))if(t+1==r.length)i.push(["para"].concat(i.splice(1)))
else{var l=i.pop()
i.push(["para"].concat(i.splice(1)),l)}}var l="[*+-]|\\d+\\.",a=/[*+-]/,s=new RegExp("^( {0,3})("+l+")[ \t]+"),o="(?: {0,3}\\t| {4})"
return function(l,o){function c(e){var t=a.exec(e[2])?["bulletlist"]:["numberlist"]
return p.push({list:t,indent:e[1]}),t}var h=l.match(s)
if(h){for(var u,f,p=[],g=c(h),d=!1,_=[p[0].list];;){for(var b=l.split(/(?=\n)/),k="",m=0;m<b.length;m++){var y="",w=b[m].replace(/^\n/,function(e){return y=e,""}),M=e(p.length)
if(h=w.match(M),void 0!==h[1]){k.length&&(r(u,d,this.processInline(k),y),d=!1,k=""),h[1]=t(h[1])
var x=Math.floor(h[1].length/4)+1
if(x>p.length)g=c(h),u.push(g),u=g[1]=["listitem"]
else{var S=!1
for(f=0;f<p.length;f++)if(p[f].indent==h[1]){g=p[f].list,p.splice(f+1),S=!0
break}S||(x++,x<=p.length?(p.splice(x),g=p[x-1].list):(g=c(h),u.push(g))),u=["listitem"],g.push(u)}y=""}w.length>h[0].length&&(k+=y+w.substr(h[0].length))}k.length&&(r(u,d,this.processInline(k),y),d=!1,k="")
var $=n(p.length,o)
$.length>0&&(v(p,i,this),u.push.apply(u,this.toTree($,[])))
var j=o[0]&&o[0].valueOf()||""
if(!j.match(s)&&!j.match(/^ /))break
l=o.shift()
var A=this.dialect.block.horizRule(l,o)
if(A){_.push.apply(_,A)
break}v(p,i,this),d=!0}return _}}}(),blockquote:function(e,t){if(e.match(/^>/m)){var r=[]
if(">"!=e[0]){for(var n=e.split(/\n/),i=[];n.length&&">"!=n[0][0];)i.push(n.shift())
e=n.join("\n"),r.push.apply(r,this.processBlock(i.join("\n"),[]))}for(;t.length&&">"==t[0][0];){var l=t.shift()
e=new String(e+e.trailing+l),e.trailing=l.trailing}var a=e.replace(/^> ?/gm,"")
this.tree
return r.push(this.toTree(a,["blockquote"])),r}},referenceDefn:function(e,t){var r=/^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/
if(e.match(r)){s(this.tree)||this.tree.splice(1,0,{})
var n=s(this.tree)
void 0===n.references&&(n.references={})
var i=this.loop_re_over_block(r,e,function(e){e[2]&&"<"==e[2][0]&&">"==e[2][e[2].length-1]&&(e[2]=e[2].substring(1,e[2].length-1))
var t=n.references[e[1].toLowerCase()]={href:e[2]}
void 0!==e[4]?t.title=e[4]:void 0!==e[5]&&(t.title=e[5])})
return i.length&&t.unshift(g(i,e.trailing)),[]}},para:function(e,t){return[["para"].concat(this.processInline(e))]}}},f.dialects.Gruber.inline={__oneElement__:function(e,t,r){var n,i
if(t=t||this.dialect.inline.__patterns__,!(n=new RegExp("([\\s\\S]*?)("+(t.source||t)+")").exec(e)))return[e.length,e]
if(n[1])return[n[1].length,n[1]]
var i
return n[2]in this.dialect.inline&&(i=this.dialect.inline[n[2]].call(this,e.substr(n.index),n,r||[])),i=i||[n[2].length,n[2]]},__call__:function(e,t){function r(e){"string"==typeof e&&"string"==typeof i[i.length-1]?i[i.length-1]+=e:i.push(e)}for(var n,i=[];e.length>0;)n=this.dialect.inline.__oneElement__.call(this,e,t,i),e=e.substr(n.shift()),v(n,r)
return i},"]":function(){},"}":function(){},"\\":function(e){return e.match(/^\\[\\`\*_{}\[\]()#\+.!\-]/)?[2,e[1]]:[1,"\\"]},"![":function(e){var t=e.match(/^!\[(.*?)\][ \t]*\([ \t]*(\S*)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/)
if(t){t[2]&&"<"==t[2][0]&&">"==t[2][t[2].length-1]&&(t[2]=t[2].substring(1,t[2].length-1)),t[2]=this.dialect.inline.__call__.call(this,t[2],/\\/)[0]
var r={alt:t[1],href:t[2]||""}
return void 0!==t[4]&&(r.title=t[4]),[t[0].length,["img",r]]}return t=e.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/),t?[t[0].length,["img_ref",{alt:t[1],ref:t[2].toLowerCase(),original:t[0]}]]:[2,"!["]},"[":function(e){var t=String(e),r=f.DialectHelpers.inline_until_char.call(this,e.substr(1),"]")
if(!r)return[1,"["]
var n,i,l=1+r[0],a=r[1]
e=e.substr(l)
var s=e.match(/^\s*\([ \t]*(\S+)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/)
if(s){var o=s[1]
if(l+=s[0].length,o&&"<"==o[0]&&">"==o[o.length-1]&&(o=o.substring(1,o.length-1)),!s[3])for(var c=1,h=0;h<o.length;h++)switch(o[h]){case"(":c++
break
case")":0==--c&&(l-=o.length-h,o=o.substring(0,h))}return o=this.dialect.inline.__call__.call(this,o,/\\/)[0],i={href:o||""},void 0!==s[3]&&(i.title=s[3]),n=["link",i].concat(a),[l,n]}return s=e.match(/^\s*\[(.*?)\]/),s?(l+=s[0].length,i={ref:(s[1]||String(a)).toLowerCase(),original:t.substr(0,l)},n=["link_ref",i].concat(a),[l,n]):1==a.length&&"string"==typeof a[0]?(i={ref:a[0].toLowerCase(),original:t.substr(0,l)},n=["link_ref",i,a[0]],[l,n]):[1,"["]},"<":function(e){var t
return null!=(t=e.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/))?t[3]?[t[0].length,["link",{href:"mailto:"+t[3]},t[3]]]:"mailto"==t[2]?[t[0].length,["link",{href:t[1]},t[1].substr("mailto:".length)]]:[t[0].length,["link",{href:t[1]},t[1]]]:[1,"<"]},"`":function(e){var t=e.match(/(`+)(([\s\S]*?)\1)/)
return t&&t[2]?[t[1].length+t[2].length,["inlinecode",t[3]]]:[1,"`"]},"  \n":function(e){return[3,["linebreak"]]}},f.dialects.Gruber.inline["**"]=i("strong","**"),f.dialects.Gruber.inline.__=i("strong","__"),f.dialects.Gruber.inline["*"]=i("em","*"),f.dialects.Gruber.inline._=i("em","_"),f.buildBlockOrder=function(e){var t=[]
for(var r in e)"__order__"!=r&&"__call__"!=r&&t.push(r)
e.__order__=t},f.buildInlinePatterns=function(e){var t=[]
for(var r in e)if(!r.match(/^__.*__$/)){var n=r.replace(/([\\.*+?|()\[\]{}])/g,"\\$1").replace(/\n/,"\\n")
t.push(1==r.length?n:"(?:"+n+")")}t=t.join("|"),e.__patterns__=t
var i=e.__call__
e.__call__=function(e,r){return void 0!=r?i.call(this,e,r):i.call(this,e,t)}},f.DialectHelpers={},f.DialectHelpers.inline_until_char=function(e,t){for(var r=0,n=[];;){if(e[r]==t)return r++,[r,n]
if(r>=e.length)return null
var i=this.dialect.inline.__oneElement__.call(this,e.substr(r))
r+=i[0],n.push.apply(n,i.slice(1))}},f.subclassDialect=function(e){function t(){}function r(){}return t.prototype=e.block,r.prototype=e.inline,{block:new t,inline:new r}},f.buildBlockOrder(f.dialects.Gruber.block),f.buildInlinePatterns(f.dialects.Gruber.inline),f.dialects.Maruku=f.subclassDialect(f.dialects.Gruber),f.dialects.Maruku.processMetaHash=function(e){for(var t=l(e),r={},n=0;n<t.length;++n)if(/^#/.test(t[n]))r.id=t[n].substring(1)
else if(/^\./.test(t[n]))r.class?r.class=r.class+t[n].replace(/./," "):r.class=t[n].substring(1)
else if(/\=/.test(t[n])){var i=t[n].split(/\=/)
r[i[0]]=i[1]}return r},f.dialects.Maruku.block.document_meta=function(e,t){if(!(e.lineNumber>1)&&e.match(/^(?:\w+:.*\n)*\w+:.*$/)){s(this.tree)||this.tree.splice(1,0,{})
var r=e.split(/\n/)
for(p in r){var n=r[p].match(/(\w+):\s*(.*)$/),i=n[1].toLowerCase(),l=n[2]
this.tree[1][i]=l}return[]}},f.dialects.Maruku.block.block_meta=function(e,t){var r=e.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/)
if(r){var n,i=this.dialect.processMetaHash(r[2])
if(""===r[1]){var l=this.tree[this.tree.length-1]
if(n=s(l),"string"==typeof l)return
n||(n={},l.splice(1,0,n))
for(a in i)n[a]=i[a]
return[]}var o=e.replace(/\n.*$/,""),c=this.processBlock(o,[])
n=s(c[0]),n||(n={},c[0].splice(1,0,n))
for(a in i)n[a]=i[a]
return c}},f.dialects.Maruku.block.definition_list=function(e,t){var r,n=/^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,i=["dl"]
if(s=e.match(n)){for(var l=[e];t.length&&n.exec(t[0]);)l.push(t.shift())
for(var a=0;a<l.length;++a){var s=l[a].match(n),o=s[1].replace(/\n$/,"").split(/\n/),c=s[2].split(/\n:\s+/)
for(r=0;r<o.length;++r)i.push(["dt",o[r]])
for(r=0;r<c.length;++r)i.push(["dd"].concat(this.processInline(c[r].replace(/(\n)\s+/,"$1"))))}return[i]}},f.dialects.Maruku.inline["{:"]=function(e,t,r){if(!r.length)return[2,"{:"]
var n=r[r.length-1]
if("string"==typeof n)return[2,"{:"]
var i=e.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/)
if(!i)return[2,"{:"]
var l=this.dialect.processMetaHash(i[1]),a=s(n)
a||(a={},n.splice(1,0,a))
for(var o in l)a[o]=l[o]
return[i[0].length,""]},f.buildBlockOrder(f.dialects.Maruku.block),f.buildInlinePatterns(f.dialects.Maruku.inline)
var v,d=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}
v=Array.prototype.forEach?function(e,t,r){return e.forEach(t,r)}:function(e,t,r){for(var n=0;n<e.length;n++)t.call(r||e,e[n],n,e)},e.renderJsonML=function(e,t){t=t||{},t.root=t.root||!1
var r=[]
if(t.root)r.push(c(e))
else for(e.shift(),!e.length||"object"!=typeof e[0]||e[0]instanceof Array||e.shift();e.length;)r.push(c(e.shift()))
return r.join("\n\n")}})(function(){return"undefined"==typeof exports?(window.markdown={},window.markdown):exports}())
