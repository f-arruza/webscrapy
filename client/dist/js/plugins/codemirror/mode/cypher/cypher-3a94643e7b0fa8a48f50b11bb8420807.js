(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
var t=function(e){return new RegExp("^(?:"+e.join("|")+")$","i")}
e.defineMode("cypher",function(n){var r=function(e){var t=e.next()
if('"'===t||"'"===t)return e.match(/.+?["']/),"string"
if(/[{}\(\),\.;\[\]]/.test(t))return t,"node"
if("/"===t&&e.eat("/"))return e.skipToEnd(),"comment"
if(d.test(t))return e.eatWhile(d),null
if(e.eatWhile(/[_\w\d]/),e.eat(":"))return e.eatWhile(/[\w\d_\-]/),"atom"
var n=e.current()
return c.test(n)?"builtin":s.test(n)?"def":l.test(n)?"keyword":"variable"},i=function(e,t,n){return e.context={prev:e.context,indent:e.indent,col:n,type:t}},o=function(e){return e.indent=e.context.indent,e.context=e.context.prev},a=n.indentUnit,c=t(["abs","acos","allShortestPaths","asin","atan","atan2","avg","ceil","coalesce","collect","cos","cot","count","degrees","e","endnode","exp","extract","filter","floor","haversin","head","id","labels","last","left","length","log","log10","lower","ltrim","max","min","node","nodes","percentileCont","percentileDisc","pi","radians","rand","range","reduce","rel","relationship","relationships","replace","right","round","rtrim","shortestPath","sign","sin","split","sqrt","startnode","stdev","stdevp","str","substring","sum","tail","tan","timestamp","toFloat","toInt","trim","type","upper"]),s=t(["all","and","any","has","in","none","not","or","single","xor"]),l=t(["as","asc","ascending","assert","by","case","commit","constraint","create","csv","cypher","delete","desc","descending","distinct","drop","else","end","false","fieldterminator","foreach","from","headers","in","index","is","limit","load","match","merge","null","on","optional","order","periodic","remove","return","scan","set","skip","start","then","true","union","unique","unwind","using","when","where","with"]),d=/[*+\-<>=&|~%^]/
return{startState:function(){return{tokenize:r,context:null,indent:0,col:0}},token:function(e,t){if(e.sol()&&(t.context&&null==t.context.align&&(t.context.align=!1),t.indent=e.indentation()),e.eatSpace())return null
var n=t.tokenize(e,t)
if("comment"!==n&&t.context&&null==t.context.align&&"pattern"!==t.context.type&&(t.context.align=!0),/[\]\}\)]/.test(void 0)){for(;t.context&&"pattern"===t.context.type;)o(t)
t.context&&void 0===t.context.type&&o(t)}else/atom|string|variable/.test(n)&&t.context&&(/[\}\]]/.test(t.context.type)?i(t,"pattern",e.column()):"pattern"!==t.context.type||t.context.align||(t.context.align=!0,t.context.col=e.column()))
return n},indent:function(t,n){var r=n&&n.charAt(0),i=t.context
if(/[\]\}]/.test(r))for(;i&&"pattern"===i.type;)i=i.prev
var o=i&&r===i.type
return i?"keywords"===i.type?e.commands.newlineAndIndent:i.align?i.col+(o?0:1):i.indent+(o?0:a):0}}}),e.modeExtensions.cypher={autoFormatLineBreaks:function(e){for(var t,n,r,n=e.split("\n"),r=/\s+\b(return|where|order by|match|with|skip|limit|create|delete|set)\b\s/g,t=0;t<n.length;t++)n[t]=n[t].replace(r," \n$1 ").trim()
return n.join("\n")}},e.defineMIME("application/x-cypher-query","cypher")})
