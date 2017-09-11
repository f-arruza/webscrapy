(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("sass",function(e){function t(e,t){var n=e.peek()
return")"===n?(e.next(),t.tokenizer=u,"operator"):"("===n?(e.next(),e.eatSpace(),"operator"):"'"===n||'"'===n?(t.tokenizer=r(e.next()),"string"):(t.tokenizer=r(")",!1),"string")}function n(e,t){return function(n,r){return n.sol()&&n.indentation()<=e?(r.tokenizer=u,u(n,r)):(t&&n.skipTo("*/")?(n.next(),n.next(),r.tokenizer=u):n.next(),"comment")}}function r(e,t){function n(r,i){var a=r.next(),s=r.peek(),f=r.string.charAt(r.pos-2)
return"\\"!==a&&s===e||a===e&&"\\"!==f?(a!==e&&t&&r.next(),i.tokenizer=u,"string"):"#"===a&&"{"===s?(i.tokenizer=o(n),r.next(),"operator"):"string"}return null==t&&(t=!0),n}function o(e){return function(t,n){return"}"===t.peek()?(t.next(),n.tokenizer=e,"operator"):u(t,n)}}function i(t){if(0==t.indentCount){t.indentCount++
var n=t.scopes[0].offset,r=n+e.indentUnit
t.scopes.unshift({offset:r})}}function a(e){1!=e.scopes.length&&e.scopes.shift()}function u(e,a){var s=e.peek()
if(e.match("/*"))return a.tokenizer=n(e.indentation(),!0),a.tokenizer(e,a)
if(e.match("//"))return a.tokenizer=n(e.indentation(),!1),a.tokenizer(e,a)
if(e.match("#{"))return a.tokenizer=o(u),"operator"
if("."===s)return e.next(),e.match(/^[\w-]+/)?(i(a),"atom"):"#"===e.peek()?(i(a),"atom"):"operator"
if("#"===s){if(e.next(),e.match(/[0-9a-fA-F]{6}|[0-9a-fA-F]{3}/))return"number"
if(e.match(/^[\w-]+/))return i(a),"atom"
if("#"===e.peek())return i(a),"atom"}return e.match(/^-?[0-9\.]+/)?"number":e.match(/^(px|em|in)\b/)?"unit":e.match(c)?"keyword":e.match(/^url/)&&"("===e.peek()?(a.tokenizer=t,"atom"):"$"===s?(e.next(),e.eatWhile(/[\w-]/),":"===e.peek()?(e.next(),"variable-2"):"variable-3"):"!"===s?(e.next(),e.match(/^[\w]+/)?"keyword":"operator"):"="===s?(e.next(),e.match(/^[\w-]+/)?(i(a),"meta"):"operator"):"+"===s?(e.next(),e.match(/^[\w-]+/)?"variable-3":"operator"):e.match(/^@(else if|if|media|else|for|each|while|mixin|function)/)?(i(a),"meta"):"@"===s?(e.next(),e.eatWhile(/[\w-]/),"meta"):'"'===s||"'"===s?(e.next(),a.tokenizer=r(s),"string"):":"==s&&e.match(k)?"keyword":e.eatWhile(/[\w-&]/)?":"!==e.peek()||e.match(k,!1)?"atom":"property":e.match(m)?"operator":(e.next(),null)}function s(t,n){t.sol()&&(n.indentCount=0)
var r=n.tokenizer(t,n),o=t.current()
if("@return"===o&&a(n),"atom"===r&&i(n),null!==r){for(var u=t.pos-o.length,s=u+e.indentUnit*n.indentCount,f=[],c=0;c<n.scopes.length;c++){var p=n.scopes[c]
p.offset<=s&&f.push(p)}n.scopes=f}return r}var f=["true","false","null","auto"],c=new RegExp("^"+f.join("|")),p=["\\(","\\)","=",">","<","==",">=","<=","\\+","-","\\!=","/","\\*","%","and","or","not"],m=function(e){return new RegExp("^"+e.join("|"))}(p),k=/^::?[\w\-]+/
return{startState:function(){return{tokenizer:u,scopes:[{offset:0,type:"sass"}],indentCount:0,definedVars:[],definedMixins:[]}},token:function(e,t){var n=s(e,t)
return t.lastToken={style:n,content:e.current()},n},indent:function(e){return e.scopes[0].offset}}}),e.defineMIME("text/x-sass","sass")})
