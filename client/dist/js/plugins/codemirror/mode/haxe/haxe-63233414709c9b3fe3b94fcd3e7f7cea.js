(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("haxe",function(e,t){function n(e,t,n){return t.tokenize=n,n(e,t)}function r(e,t){for(var n,r=!1;null!=(n=e.next());){if(n==t&&!r)return!1
r=!r&&"\\"==n}return r}function i(e,t,n){return G=e,H=n,t}function a(e,t){var a=e.next()
if('"'==a||"'"==a)return n(e,t,o(a))
if(/[\[\]{}\(\),;\:\.]/.test(a))return i(a)
if("0"==a&&e.eat(/x/i))return e.eatWhile(/[\da-f]/i),i("number","number")
if(/\d/.test(a)||"-"==a&&e.eat(/\d/))return e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),i("number","number")
if(t.reAllowed&&"~"==a&&e.eat(/\//))return r(e,"/"),e.eatWhile(/[gimsu]/),i("regexp","string-2")
if("/"==a)return e.eat("*")?n(e,t,u):e.eat("/")?(e.skipToEnd(),i("comment","comment")):(e.eatWhile(L),i("operator",null,e.current()))
if("#"==a)return e.skipToEnd(),i("conditional","meta")
if("@"==a)return e.eat(/:/),e.eatWhile(/[\w_]/),i("metadata","meta")
if(L.test(a))return e.eatWhile(L),i("operator",null,e.current())
var c
if(/[A-Z]/.test(a))return e.eatWhile(/[\w_<>]/),c=e.current(),i("type","variable-3",c)
e.eatWhile(/[\w_]/)
var c=e.current(),l=K.propertyIsEnumerable(c)&&K[c]
return l&&t.kwAllowed?i(l.type,l.style,c):i("variable","variable",c)}function o(e){return function(t,n){return r(t,e)||(n.tokenize=a),i("string","string")}}function u(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=a
break}r="*"==n}return i("comment","comment")}function c(e,t,n,r,i,a){this.indented=e,this.column=t,this.type=n,this.prev=i,this.info=a,null!=r&&(this.align=r)}function l(e,t){for(var n=e.localVars;n;n=n.next)if(n.name==t)return!0}function f(e,t,n,r,i){var a=e.cc
for(Q.state=e,Q.stream=i,Q.marked=null,Q.cc=a,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;){if((a.length?a.pop():w)(n,r)){for(;a.length&&a[a.length-1].lex;)a.pop()()
return Q.marked?Q.marked:"variable"==n&&l(e,r)?"variable-2":"variable"==n&&s(e,r)?"variable-3":t}}}function s(e,t){if(/[a-z]/.test(t.charAt(0)))return!1
for(var n=e.importedtypes.length,r=0;r<n;r++)if(e.importedtypes[r]==t)return!0}function d(e){for(var t=Q.state,n=t.importedtypes;n;n=n.next)if(n.name==e)return
t.importedtypes={name:e,next:t.importedtypes}}function m(){for(var e=arguments.length-1;e>=0;e--)Q.cc.push(arguments[e])}function p(){return m.apply(null,arguments),!0}function v(e){var t=Q.state
if(t.context){Q.marked="def"
for(var n=t.localVars;n;n=n.next)if(n.name==e)return
t.localVars={name:e,next:t.localVars}}}function y(){Q.state.context||(Q.state.localVars=R),Q.state.context={prev:Q.state.context,vars:Q.state.localVars}}function x(){Q.state.localVars=Q.state.context.vars,Q.state.context=Q.state.context.prev}function h(e,t){var n=function(){var n=Q.state
n.lexical=new c(n.indented,Q.stream.column(),e,null,n.lexical,t)}
return n.lex=!0,n}function b(){var e=Q.state
e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function k(e){function t(n){return n==e?p():";"==e?m():p(t)}return t}function w(e){return"@"==e?p(E):"var"==e?p(h("vardef"),P,k(";"),b):"keyword a"==e?p(h("form"),g,w,b):"keyword b"==e?p(h("form"),w,b):"{"==e?p(h("}"),y,O,b,x):";"==e?p():"attribute"==e?p(S):"function"==e?p(q):"for"==e?p(h("form"),k("("),h(")"),D,k(")"),b,w,b):"variable"==e?p(h("stat"),C):"switch"==e?p(h("form"),g,h("}","switch"),k("{"),O,b,b):"case"==e?p(g,k(":")):"default"==e?p(k(":")):"catch"==e?p(h("form"),y,k("("),$,k(")"),w,b,x):"import"==e?p(z,k(";")):"typedef"==e?p(M):m(h("stat"),g,k(";"),b)}function g(e){return N.hasOwnProperty(e)?p(V):"function"==e?p(q):"keyword c"==e?p(A):"("==e?p(h(")"),A,k(")"),b,V):"operator"==e?p(g):"["==e?p(h("]"),I(g,"]"),b,V):"{"==e?p(h("}"),I(Z,"}"),b,V):p()}function A(e){return e.match(/[;\}\)\],]/)?m():m(g)}function V(e,t){if("operator"==e&&/\+\+|--/.test(t))return p(V)
if("operator"==e||":"==e)return p(g)
if(";"!=e)return"("==e?p(h(")"),I(g,")"),b,V):"."==e?p(T,V):"["==e?p(h("]"),g,k("]"),b,V):void 0}function S(e){return"attribute"==e?p(S):"function"==e?p(q):"var"==e?p(P):void 0}function E(e){return":"==e?p(E):"variable"==e?p(E):"("==e?p(h(")"),I(W,")"),b,w):void 0}function W(e){if("variable"==e)return p()}function z(e,t){return"variable"==e&&/[A-Z]/.test(t.charAt(0))?(d(t),p()):"variable"==e||"property"==e||"."==e||"*"==t?p(z):void 0}function M(e,t){return"variable"==e&&/[A-Z]/.test(t.charAt(0))?(d(t),p()):"type"==e&&/[A-Z]/.test(t.charAt(0))?p():void 0}function C(e){return":"==e?p(b,w):m(V,k(";"),b)}function T(e){if("variable"==e)return Q.marked="property",p()}function Z(e){if("variable"==e&&(Q.marked="property"),N.hasOwnProperty(e))return p(k(":"),g)}function I(e,t){function n(r){return","==r?p(e,n):r==t?p():p(k(t))}return function(r){return r==t?p():m(e,n)}}function O(e){return"}"==e?p():m(w,O)}function P(e,t){return"variable"==e?(v(t),p(B,_)):p()}function _(e,t){return"="==t?p(g,_):","==e?p(P):void 0}function D(e,t){return"variable"==e&&v(t),p(h(")"),y,j,g,b,w,x)}function j(e,t){if("in"==t)return p()}function q(e,t){return"variable"==e?(v(t),p(q)):"new"==t?p(q):"("==e?p(h(")"),y,I($,")"),b,B,w,x):void 0}function B(e){if(":"==e)return p(F)}function F(e){return"type"==e?p():"variable"==e?p():"{"==e?p(h("}"),I(U,"}"),b):void 0}function U(e){if("variable"==e)return p(B)}function $(e,t){if("variable"==e)return v(t),p(B)}var G,H,J=e.indentUnit,K=function(){function e(e){return{type:e,style:"keyword"}}var t=e("keyword a"),n=e("keyword b"),r=e("keyword c"),i=e("operator"),a={type:"atom",style:"atom"},o={type:"attribute",style:"attribute"},u=e("typedef")
return{if:t,while:t,else:n,do:n,try:n,return:r,break:r,continue:r,new:r,throw:r,var:e("var"),inline:o,static:o,using:e("import"),public:o,private:o,cast:e("cast"),import:e("import"),macro:e("macro"),function:e("function"),catch:e("catch"),untyped:e("untyped"),callback:e("cb"),for:e("for"),switch:e("switch"),case:e("case"),default:e("default"),in:i,never:e("property_access"),trace:e("trace"),class:u,abstract:u,enum:u,interface:u,typedef:u,extends:u,implements:u,dynamic:u,true:a,false:a,null:a}}(),L=/[+\-*&%=<>!?|]/,N={atom:!0,number:!0,variable:!0,string:!0,regexp:!0},Q={state:null,column:null,marked:null,cc:null},R={name:"this",next:null}
return b.lex=!0,{startState:function(e){var n=["Int","Float","String","Void","Std","Bool","Dynamic","Array"]
return{tokenize:a,reAllowed:!0,kwAllowed:!0,cc:[],lexical:new c((e||0)-J,0,"block",!1),localVars:t.localVars,importedtypes:n,context:t.localVars&&{vars:t.localVars},indented:0}},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation()),e.eatSpace())return null
var n=t.tokenize(e,t)
return"comment"==G?n:(t.reAllowed=!("operator"!=G&&"keyword c"!=G&&!G.match(/^[\[{}\(,;:]$/)),t.kwAllowed="."!=G,f(t,n,G,H,e))},indent:function(e,t){if(e.tokenize!=a)return 0
var n=t&&t.charAt(0),r=e.lexical
"stat"==r.type&&"}"==n&&(r=r.prev)
var i=r.type,o=n==i
return"vardef"==i?r.indented+4:"form"==i&&"{"==n?r.indented:"stat"==i||"form"==i?r.indented+J:"switch"!=r.info||o?r.align?r.column+(o?0:1):r.indented+(o?0:J):r.indented+(/^(?:case|default)\b/.test(t)?J:2*J)},electricChars:"{}",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//"}}),e.defineMIME("text/x-haxe","haxe"),e.defineMode("hxml",function(){return{startState:function(){return{define:!1,inString:!1}},token:function(e,t){var n=e.peek(),r=e.sol()
if("#"==n)return e.skipToEnd(),"comment"
if(r&&"-"==n){var i="variable-2"
return e.eat(/-/),"-"==e.peek()&&(e.eat(/-/),i="keyword a"),"D"==e.peek()&&(e.eat(/[D]/),i="keyword c",t.define=!0),e.eatWhile(/[A-Z]/i),i}var n=e.peek()
return 0==t.inString&&"'"==n&&(t.inString=!0,n=e.next()),1==t.inString?(e.skipTo("'")||e.skipToEnd(),"'"==e.peek()&&(e.next(),t.inString=!1),"string"):(e.next(),null)},lineComment:"#"}}),e.defineMIME("text/x-hxml","hxml")})
