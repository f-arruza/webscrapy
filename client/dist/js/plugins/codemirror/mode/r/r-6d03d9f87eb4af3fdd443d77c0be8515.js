(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("r",function(e){function t(e){for(var t=e.split(" "),n={},r=0;r<t.length;++r)n[t[r]]=!0
return n}function n(e,t){o=null
var n=e.next()
if("#"==n)return e.skipToEnd(),"comment"
if("0"==n&&e.eat("x"))return e.eatWhile(/[\da-f]/i),"number"
if("."==n&&e.eat(/\d/))return e.match(/\d*(?:e[+\-]?\d+)?/),"number"
if(/\d/.test(n))return e.match(/\d*(?:\.\d+)?(?:e[+\-]\d+)?L?/),"number"
if("'"==n||'"'==n)return t.tokenize=r(n),"string"
if("."==n&&e.match(/.[.\d]+/))return"keyword"
if(/[\w\.]/.test(n)&&"_"!=n){e.eatWhile(/[\w\.]/)
var i=e.current()
return c.propertyIsEnumerable(i)?"atom":u.propertyIsEnumerable(i)?(f.propertyIsEnumerable(i)&&!e.match(/\s*if(\s+|$)/,!1)&&(o="block"),"keyword"):l.propertyIsEnumerable(i)?"builtin":"variable"}return"%"==n?(e.skipTo("%")&&e.next(),"variable-2"):"<"==n&&e.eat("-")?"arrow":"="==n&&t.ctx.argList?"arg-is":d.test(n)?"$"==n?"dollar":(e.eatWhile(d),"operator"):/[\(\){}\[\];]/.test(n)?(o=n,";"==n?"semi":null):null}function r(e){return function(t,r){if(t.eat("\\")){var i=t.next()
return"x"==i?t.match(/^[a-f0-9]{2}/i):("u"==i||"U"==i)&&t.eat("{")&&t.skipTo("}")?t.next():"u"==i?t.match(/^[a-f0-9]{4}/i):"U"==i?t.match(/^[a-f0-9]{8}/i):/[0-7]/.test(i)&&t.match(/^[0-7]{1,2}/),"string-2"}for(var a;null!=(a=t.next());){if(a==e){r.tokenize=n
break}if("\\"==a){t.backUp(1)
break}}return"string"}}function i(e,t,n){e.ctx={type:t,indent:e.indent,align:null,column:n.column(),prev:e.ctx}}function a(e){e.indent=e.ctx.indent,e.ctx=e.ctx.prev}var o,c=t("NULL NA Inf NaN NA_integer_ NA_real_ NA_complex_ NA_character_"),l=t("list quote bquote eval return call parse deparse"),u=t("if else repeat while function for in next break"),f=t("if else repeat while function for"),d=/[+\-*\/^<>=!&|~$:]/
return{startState:function(){return{tokenize:n,ctx:{type:"top",indent:-e.indentUnit,align:!1},indent:0,afterIdent:!1}},token:function(e,t){if(e.sol()&&(null==t.ctx.align&&(t.ctx.align=!1),t.indent=e.indentation()),e.eatSpace())return null
var n=t.tokenize(e,t)
"comment"!=n&&null==t.ctx.align&&(t.ctx.align=!0)
var r=t.ctx.type
return";"!=o&&"{"!=o&&"}"!=o||"block"!=r||a(t),"{"==o?i(t,"}",e):"("==o?(i(t,")",e),t.afterIdent&&(t.ctx.argList=!0)):"["==o?i(t,"]",e):"block"==o?i(t,"block",e):o==r&&a(t),t.afterIdent="variable"==n||"keyword"==n,n},indent:function(t,r){if(t.tokenize!=n)return 0
var i=r&&r.charAt(0),a=t.ctx,o=i==a.type
return"block"==a.type?a.indent+("{"==i?0:e.indentUnit):a.align?a.column+(o?0:1):a.indent+(o?0:e.indentUnit)},lineComment:"#"}}),e.defineMIME("text/x-rsrc","r")})