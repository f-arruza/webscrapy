(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("shell",function(){function e(e,t){for(var n=t.split(" "),r=0;r<n.length;r++)i[n[r]]=e}function t(e,t){if(e.eatSpace())return null
var s=e.sol(),u=e.next()
if("\\"===u)return e.next(),null
if("'"===u||'"'===u||"`"===u)return t.tokens.unshift(n(u)),r(e,t)
if("#"===u)return s&&e.eat("!")?(e.skipToEnd(),"meta"):(e.skipToEnd(),"comment")
if("$"===u)return t.tokens.unshift(o),r(e,t)
if("+"===u||"="===u)return"operator"
if("-"===u)return e.eat("-"),e.eatWhile(/\w/),"attribute"
if(/\d/.test(u)&&(e.eatWhile(/\d/),e.eol()||!/\w/.test(e.peek())))return"number"
e.eatWhile(/[\w-]/)
var f=e.current()
return"="===e.peek()&&/\w+/.test(f)?"def":i.hasOwnProperty(f)?i[f]:null}function n(e){return function(t,n){for(var r,i=!1,s=!1;null!=(r=t.next());){if(r===e&&!s){i=!0
break}if("$"===r&&!s&&"'"!==e){s=!0,t.backUp(1),n.tokens.unshift(o)
break}s=!s&&"\\"===r}return!i&&s||n.tokens.shift(),"`"===e||")"===e?"quote":"string"}}function r(e,n){return(n.tokens[0]||t)(e,n)}var i={}
e("atom","true false"),e("keyword","if then do else elif while until for in esac fi fin fil done exit set unset export function"),e("builtin","ab awk bash beep cat cc cd chown chmod chroot clear cp curl cut diff echo find gawk gcc get git grep kill killall ln ls make mkdir openssl mv nc node npm ping ps restart rm rmdir sed service sh shopt shred source sort sleep ssh start stop su sudo tee telnet top touch vi vim wall wc wget who write yes zsh")
var o=function(e,t){t.tokens.length>1&&e.eat("$")
var i=e.next(),o=/\w/
return"{"===i&&(o=/[^}]/),"("===i?(t.tokens[0]=n(")"),r(e,t)):(/\d/.test(i)||(e.eatWhile(o),e.eat("}")),t.tokens.shift(),"def")}
return{startState:function(){return{tokens:[]}},token:function(e,t){return r(e,t)},lineComment:"#"}}),e.defineMIME("text/x-sh","shell")})
