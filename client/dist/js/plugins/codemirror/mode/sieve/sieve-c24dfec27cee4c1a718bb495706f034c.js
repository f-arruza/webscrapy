(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("sieve",function(e){function n(e){for(var n={},t=e.split(" "),r=0;r<t.length;++r)n[t[r]]=!0
return n}function t(e,n){var t=e.next()
if("/"==t&&e.eat("*"))return n.tokenize=i,i(e,n)
if("#"===t)return e.skipToEnd(),"comment"
if('"'==t)return n.tokenize=o(t),n.tokenize(e,n)
if("("==t)return n._indent.push("("),n._indent.push("{"),null
if("{"===t)return n._indent.push("{"),null
if(")"==t&&(n._indent.pop(),n._indent.pop()),"}"===t)return n._indent.pop(),null
if(","==t)return null
if(";"==t)return null
if(/[{}\(\),;]/.test(t))return null
if(/\d/.test(t))return e.eatWhile(/[\d]/),e.eat(/[KkMmGg]/),"number"
if(":"==t)return e.eatWhile(/[a-zA-Z_]/),e.eatWhile(/[a-zA-Z0-9_]/),"operator"
e.eatWhile(/\w/)
var f=e.current()
return"text"==f&&e.eat(":")?(n.tokenize=r,"string"):u.propertyIsEnumerable(f)?"keyword":l.propertyIsEnumerable(f)?"atom":null}function r(e,n){return n._multiLineString=!0,e.sol()?("."==e.next()&&e.eol()&&(n._multiLineString=!1,n.tokenize=t),"string"):(e.eatSpace(),"#"==e.peek()?(e.skipToEnd(),"comment"):(e.skipToEnd(),"string"))}function i(e,n){for(var r,i=!1;null!=(r=e.next());){if(i&&"/"==r){n.tokenize=t
break}i="*"==r}return"comment"}function o(e){return function(n,r){for(var i,o=!1;null!=(i=n.next())&&(i!=e||o);)o=!o&&"\\"==i
return o||(r.tokenize=t),"string"}}var u=n("if elsif else stop require"),l=n("true false not"),f=e.indentUnit
return{startState:function(e){return{tokenize:t,baseIndent:e||0,_indent:[]}},token:function(e,n){return e.eatSpace()?null:(n.tokenize||t)(e,n)},indent:function(e,n){var t=e._indent.length
return n&&"}"==n[0]&&t--,t<0&&(t=0),t*f},electricChars:"}"}}),e.defineMIME("application/sieve","sieve")})
