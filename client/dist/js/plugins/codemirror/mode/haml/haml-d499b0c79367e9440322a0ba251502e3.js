(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../htmlmixed/htmlmixed"),require("../ruby/ruby")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../htmlmixed/htmlmixed","../ruby/ruby"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("haml",function(t){function n(e){return function(t,n){return t.peek()==e&&1==n.rubyState.tokenize.length?(t.next(),n.tokenize=r,"closeAttributeTag"):i(t,n)}}function i(e,t){return e.match("-#")?(e.skipToEnd(),"comment"):u.token(e,t.rubyState)}function r(e,t){var r=e.peek()
if("comment"==t.previousToken.style&&t.indented>t.previousToken.indented)return e.skipToEnd(),"commentLine"
if(t.startOfLine){if("!"==r&&e.match("!!"))return e.skipToEnd(),"tag"
if(e.match(/^%[\w:#\.]+=/))return t.tokenize=i,"hamlTag"
if(e.match(/^%[\w:]+/))return"hamlTag"
if("/"==r)return e.skipToEnd(),"comment"}if((t.startOfLine||"hamlTag"==t.previousToken.style)&&("#"==r||"."==r))return e.match(/[\w-#\.]*/),"hamlAttribute"
if(t.startOfLine&&!e.match("--\x3e",!1)&&("="==r||"-"==r))return t.tokenize=i,t.tokenize(e,t)
if("hamlTag"==t.previousToken.style||"closeAttributeTag"==t.previousToken.style||"hamlAttribute"==t.previousToken.style){if("("==r)return t.tokenize=n(")"),t.tokenize(e,t)
if("{"==r)return t.tokenize=n("}"),t.tokenize(e,t)}return o.token(e,t.htmlState)}var o=e.getMode(t,{name:"htmlmixed"}),u=e.getMode(t,"ruby")
return{startState:function(){return{htmlState:o.startState(),rubyState:u.startState(),indented:0,previousToken:{style:null,indented:0},tokenize:r}},copyState:function(t){return{htmlState:e.copyState(o,t.htmlState),rubyState:e.copyState(u,t.rubyState),indented:t.indented,previousToken:t.previousToken,tokenize:t.tokenize}},token:function(e,t){if(e.sol()&&(t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null
var n=t.tokenize(e,t)
if(t.startOfLine=!1,n&&"commentLine"!=n&&(t.previousToken={style:n,indented:t.indented}),e.eol()&&t.tokenize==i){e.backUp(1)
var o=e.peek()
e.next(),o&&","!=o&&(t.tokenize=r)}return"hamlTag"==n?n="tag":"commentLine"==n?n="comment":"hamlAttribute"==n?n="attribute":"closeAttributeTag"==n&&(n=null),n}}},"htmlmixed","ruby"),e.defineMIME("text/x-haml","haml")})
