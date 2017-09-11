(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("coffeescript",function(e){function t(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}function n(e,t){if(e.sol()){null===t.scope.align&&(t.scope.align=!1)
var n=t.scope.offset
if(e.eatSpace()){var i=e.indentation()
return i>n&&"coffee"==t.scope.type?"indent":i<n?"dedent":null}n>0&&c(e,t)}if(e.eatSpace())return null
var f=e.peek()
if(e.match("####"))return e.skipToEnd(),"comment"
if(e.match("###"))return t.tokenize=o,t.tokenize(e,t)
if("#"===f)return e.skipToEnd(),"comment"
if(e.match(/^-?[0-9\.]/,!1)){var m=!1
if(e.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i)&&(m=!0),e.match(/^-?\d+\.\d*/)&&(m=!0),e.match(/^-?\.\d+/)&&(m=!0),m)return"."==e.peek()&&e.backUp(1),"number"
var h=!1
if(e.match(/^-?0x[0-9a-f]+/i)&&(h=!0),e.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/)&&(h=!0),e.match(/^-?0(?![\dx])/i)&&(h=!0),h)return"number"}if(e.match(k))return t.tokenize=r(e.current(),!1,"string"),t.tokenize(e,t)
if(e.match(y)){if("/"!=e.current()||e.match(/^.*\//,!1))return t.tokenize=r(e.current(),!0,"string-2"),t.tokenize(e,t)
e.backUp(1)}return e.match(p)||e.match(d)?"operator":e.match(s)?"punctuation":e.match(g)?"atom":e.match(v)?"keyword":e.match(u)?"variable":e.match(l)?"property":(e.next(),a)}function r(t,r,o){return function(i,c){for(;!i.eol();)if(i.eatWhile(/[^'"\/\\]/),i.eat("\\")){if(i.next(),r&&i.eol())return o}else{if(i.match(t))return c.tokenize=n,o
i.eat(/['"\/]/)}return r&&(e.mode.singleLineStringErrors?o=a:c.tokenize=n),o}}function o(e,t){for(;!e.eol();){if(e.eatWhile(/[^#]/),e.match("###")){t.tokenize=n
break}e.eatWhile("#")}return"comment"}function i(t,n,r){r=r||"coffee"
for(var o=0,i=!1,c=null,f=n.scope;f;f=f.prev)if("coffee"===f.type||"}"==f.type){o=f.offset+e.indentUnit
break}"coffee"!==r?(i=null,c=t.column()+t.current().length):n.scope.align&&(n.scope.align=!1),n.scope={offset:o,type:r,prev:n.scope,align:i,alignOffset:c}}function c(e,t){if(t.scope.prev){if("coffee"===t.scope.type){for(var n=e.indentation(),r=!1,o=t.scope;o;o=o.prev)if(n===o.offset){r=!0
break}if(!r)return!0
for(;t.scope.prev&&t.scope.offset!==n;)t.scope=t.scope.prev
return!1}return t.scope=t.scope.prev,!1}}function f(e,t){var n=t.tokenize(e,t),r=e.current()
if("."===r)return n=t.tokenize(e,t),r=e.current(),/^\.[\w$]+$/.test(r)?"variable":a
"return"===r&&(t.dedent=!0),("->"!==r&&"=>"!==r||t.lambda||e.peek())&&"indent"!==n||i(e,t)
var o="[({".indexOf(r)
if(-1!==o&&i(e,t,"])}".slice(o,o+1)),m.exec(r)&&i(e,t),"then"==r&&c(e,t),"dedent"===n&&c(e,t))return a
if(-1!==(o="])}".indexOf(r))){for(;"coffee"==t.scope.type&&t.scope.prev;)t.scope=t.scope.prev
t.scope.type==r&&(t.scope=t.scope.prev)}return t.dedent&&e.eol()&&("coffee"==t.scope.type&&t.scope.prev&&(t.scope=t.scope.prev),t.dedent=!1),n}var a="error",p=/^(?:->|=>|\+[+=]?|-[\-=]?|\*[\*=]?|\/[\/=]?|[=!]=|<[><]?=?|>>?=?|%=?|&=?|\|=?|\^=?|\~|!|\?|(or|and|\|\||&&|\?)=)/,s=/^(?:[()\[\]{},:`=;]|\.\.?\.?)/,u=/^[_A-Za-z$][_A-Za-z$0-9]*/,l=/^(@|this\.)[_A-Za-z$][_A-Za-z$0-9]*/,d=t(["and","or","not","is","isnt","in","instanceof","typeof"]),m=["for","while","loop","if","unless","else","switch","try","catch","finally","class"],h=["break","by","continue","debugger","delete","do","in","of","new","return","then","this","@","throw","when","until","extends"],v=t(m.concat(h))
m=t(m)
var k=/^('{3}|\"{3}|['\"])/,y=/^(\/{3}|\/)/,b=["Infinity","NaN","undefined","null","true","false","on","off","yes","no"],g=t(b)
return{startState:function(e){return{tokenize:n,scope:{offset:e||0,type:"coffee",prev:null,align:!1},lastToken:null,lambda:!1,dedent:0}},token:function(e,t){var n=null===t.scope.align&&t.scope
n&&e.sol()&&(n.align=!1)
var r=f(e,t)
return n&&r&&"comment"!=r&&(n.align=!0),t.lastToken={style:r,content:e.current()},e.eol()&&e.lambda&&(t.lambda=!1),r},indent:function(e,t){if(e.tokenize!=n)return 0
var r=e.scope,o=t&&"])}".indexOf(t.charAt(0))>-1
if(o)for(;"coffee"==r.type&&r.prev;)r=r.prev
var i=o&&r.type===t.charAt(0)
return r.align?r.alignOffset-(i?1:0):(i?r.prev:r).offset},lineComment:"#",fold:"indent"}}),e.defineMIME("text/x-coffeescript","coffeescript")})
