(function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)})(function(t){"use strict"
t.defineMode("commonlisp",function(t){function e(t){for(var e;e=t.next();)if("\\"==e)t.next()
else if(!d.test(e)){t.backUp(1)
break}return t.current()}function n(t,n){if(t.eatSpace())return i="ws",null
if(t.match(u))return"number"
var c=t.next()
if("\\"==c&&(c=t.next()),'"'==c)return(n.tokenize=r)(t,n)
if("("==c)return i="open","bracket"
if(")"==c||"]"==c)return i="close","bracket"
if(";"==c)return t.skipToEnd(),i="ws","comment"
if(/['`,@]/.test(c))return null
if("|"==c)return t.skipTo("|")?(t.next(),"symbol"):(t.skipToEnd(),"error")
if("#"==c){var c=t.next()
return"["==c?(i="open","bracket"):/[+\-=\.']/.test(c)?null:/\d/.test(c)&&t.match(/^\d*#/)?null:"|"==c?(n.tokenize=o)(t,n):":"==c?(e(t),"meta"):"error"}var d=e(t)
return"."==d?null:(i="symbol","nil"==d||"t"==d?"atom":":"==d.charAt(0)?"keyword":"&"==d.charAt(0)?"variable-2":"variable")}function r(t,e){for(var r,o=!1;r=t.next();){if('"'==r&&!o){e.tokenize=n
break}o=!o&&"\\"==r}return"string"}function o(t,e){for(var r,o;r=t.next();){if("#"==r&&"|"==o){e.tokenize=n
break}o=r}return i="ws","comment"}var i,c=/^with|^def|^do|^prog|case$|^cond$|bind$|when$|unless$/,u=/^(?:[+\-]?(?:\d+|\d*\.\d+)(?:[efd][+\-]?\d+)?|[+\-]?\d+(?:\/[+\-]?\d+)?|#b[+\-]?[01]+|#o[+\-]?[0-7]+|#x[+\-]?[\da-f]+)/,d=/[^\s'`,@()\[\]";]/
return{startState:function(){return{ctx:{prev:null,start:0,indentTo:0},tokenize:n}},token:function(e,n){e.sol()&&"number"!=typeof n.ctx.indentTo&&(n.ctx.indentTo=n.ctx.start+1),i=null
var r=n.tokenize(e,n)
return"ws"!=i&&(null==n.ctx.indentTo?"symbol"==i&&c.test(e.current())?n.ctx.indentTo=n.ctx.start+t.indentUnit:n.ctx.indentTo="next":"next"==n.ctx.indentTo&&(n.ctx.indentTo=e.column())),"open"==i?n.ctx={prev:n.ctx,start:e.column(),indentTo:null}:"close"==i&&(n.ctx=n.ctx.prev||n.ctx),r},indent:function(t,e){var n=t.ctx.indentTo
return"number"==typeof n?n:t.ctx.start+1},lineComment:";;",blockCommentStart:"#|",blockCommentEnd:"|#"}}),t.defineMIME("text/x-common-lisp","commonlisp")})
