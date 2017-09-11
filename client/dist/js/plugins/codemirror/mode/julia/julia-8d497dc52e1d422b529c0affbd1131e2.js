(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("julia",function(e,t){function n(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}function r(e){var t=i(e)
return"["==t||"{"==t}function i(e){return 0==e.scopes.length?null:e.scopes[e.scopes.length-1]}function a(e,t){var n=t.leaving_expr
if(e.sol()&&(n=!1),t.leaving_expr=!1,n&&e.match(/^'+/))return"operator"
if(e.match(/^\.{2,3}/))return"operator"
if(e.eatSpace())return null
var a=e.peek()
if("#"===a)return e.skipToEnd(),"comment"
"["===a&&t.scopes.push("["),"{"===a&&t.scopes.push("{")
var l=i(t)
"["===l&&"]"===a&&(t.scopes.pop(),t.leaving_expr=!0),"{"===l&&"}"===a&&(t.scopes.pop(),t.leaving_expr=!0),")"===a&&(t.leaving_expr=!0)
var m
if(!r(t)&&(m=e.match(x,!1))&&t.scopes.push(m),!r(t)&&e.match(y,!1)&&t.scopes.pop(),r(t)&&e.match(/^end/))return"number"
if(e.match(/^=>/))return"operator"
if(e.match(/^[0-9\.]/,!1)){var p=RegExp(/^im\b/),h=!1
if(e.match(/^\d*\.(?!\.)\d+([ef][\+\-]?\d+)?/i)&&(h=!0),e.match(/^\d+\.(?!\.)\d*/)&&(h=!0),e.match(/^\.\d+/)&&(h=!0),h)return e.match(p),t.leaving_expr=!0,"number"
var d=!1
if(e.match(/^0x[0-9a-f]+/i)&&(d=!0),e.match(/^0b[01]+/i)&&(d=!0),e.match(/^0o[0-7]+/i)&&(d=!0),e.match(/^[1-9]\d*(e[\+\-]?\d+)?/)&&(d=!0),e.match(/^0(?![\dx])/i)&&(d=!0),d)return e.match(p),t.leaving_expr=!0,"number"}return e.match(/^(::)|(<:)/)?"operator":!n&&e.match(z)?"string":e.match(u)?"operator":e.match(g)?(t.tokenize=o(e.current()),t.tokenize(e,t)):e.match(_)?"meta":e.match(f)?null:e.match(b)?"keyword":e.match(v)?"builtin":e.match(s)?(t.leaving_expr=!0,"variable"):(e.next(),c)}function o(e){function n(n,o){for(;!n.eol();)if(n.eatWhile(/[^'"\\]/),n.eat("\\")){if(n.next(),r&&n.eol())return i}else{if(n.match(e))return o.tokenize=a,i
n.eat(/['"]/)}if(r){if(t.singleLineStringErrors)return c
o.tokenize=a}return i}for(;"rub".indexOf(e.charAt(0).toLowerCase())>=0;)e=e.substr(1)
var r=1==e.length,i="string"
return n.isString=!0,n}function l(e,t){F=null
var n=t.tokenize(e,t)
return"."===e.current()?(n=e.match(s,!1)?null:c,null===n&&"meta"===t.lastStyle&&(n="meta"),n):n}var c="error",u=t.operators||/^\.?[|&^\\%*+\-<>!=\/]=?|\?|~|:|\$|\.[<>]|<<=?|>>>?=?|\.[<>=]=|->?|\/\/|\bin\b/,f=t.delimiters||/^[;,()[\]{}]/,s=t.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*!*/,m=["begin","function","type","immutable","let","macro","for","while","quote","if","else","elseif","try","finally","catch","do"],p=["end","else","elseif","catch","finally"],h=["if","else","elseif","while","for","begin","let","end","do","try","catch","finally","return","break","continue","global","local","const","export","import","importall","using","function","macro","module","baremodule","type","immutable","quote","typealias","abstract","bitstype","ccall"],d=["true","false","enumerate","open","close","nothing","NaN","Inf","print","println","Int","Int8","Uint8","Int16","Uint16","Int32","Uint32","Int64","Uint64","Int128","Uint128","Bool","Char","Float16","Float32","Float64","Array","Vector","Matrix","String","UTF8String","ASCIIString","error","warn","info","@printf"],g=/^(`|'|"{3}|([br]?"))/,b=n(h),v=n(d),x=n(m),y=n(p),_=/^@[_A-Za-z][_A-Za-z0-9]*/,z=/^:[_A-Za-z][_A-Za-z0-9]*/,F=null
return{startState:function(){return{tokenize:a,scopes:[],leaving_expr:!1}},token:function(e,t){var n=l(e,t)
return t.lastStyle=n,n},indent:function(e,t){var n=0
return"end"!=t&&"]"!=t&&"}"!=t&&"else"!=t&&"elseif"!=t&&"catch"!=t&&"finally"!=t||(n=-1),4*(e.scopes.length+n)},lineComment:"#",fold:"indent",electricChars:"edlsifyh]}"}}),e.defineMIME("text/x-julia","julia")})
