(function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)})(function(t){"use strict"
t.defineMode("stex",function(){function t(t,e){t.cmdState.push(e)}function e(t){return t.cmdState.length>0?t.cmdState[t.cmdState.length-1]:null}function n(t){var e=t.cmdState.pop()
e&&e.closeBracket()}function r(t){for(var e=t.cmdState,n=e.length-1;n>=0;n--){var r=e[n]
if("DEFAULT"!=r.name)return r}return{styleIdentifier:function(){return null}}}function i(t,e,n){return function(){this.name=t,this.bracketNo=0,this.style=e,this.styles=n,this.argument=null,this.styleIdentifier=function(){return this.styles[this.bracketNo-1]||null},this.openBracket=function(){return this.bracketNo++,"bracket"},this.closeBracket=function(){}}}function a(t,e){t.f=e}function c(n,i){var c
if(n.match(/^\\[a-zA-Z@]+/)){var s=n.current().slice(1)
return c=m[s]||m.DEFAULT,c=new c,t(i,c),a(i,f),c.style}if(n.match(/^\\[$&%#{}_]/))return"tag"
if(n.match(/^\\[,;!\/\\]/))return"tag"
if(n.match("\\["))return a(i,function(t,e){return o(t,e,"\\]")}),"keyword"
if(n.match("$$"))return a(i,function(t,e){return o(t,e,"$$")}),"keyword"
if(n.match("$"))return a(i,function(t,e){return o(t,e,"$")}),"keyword"
var l=n.next()
return"%"==l?(n.eol()||a(i,u),"comment"):"}"==l||"]"==l?(c=e(i))?(c.closeBracket(l),a(i,f),"bracket"):"error":"{"==l||"["==l?(c=m.DEFAULT,c=new c,t(i,c),"bracket"):/\d/.test(l)?(n.eatWhile(/[\w.%]/),"atom"):(n.eatWhile(/[\w\-_]/),c=r(i),"begin"==c.name&&(c.argument=n.current()),c.styleIdentifier())}function u(t,e){return t.skipToEnd(),a(e,c),"comment"}function o(t,e,n){if(t.eatSpace())return null
if(t.match(n))return a(e,c),"keyword"
if(t.match(/^\\[a-zA-Z@]+/))return"tag"
if(t.match(/^[a-zA-Z]+/))return"variable-2"
if(t.match(/^\\[$&%#{}_]/))return"tag"
if(t.match(/^\\[,;!\/]/))return"tag"
if(t.match(/^[\^_&]/))return"tag"
if(t.match(/^[+\-<>|=,\/@!*:;'"`~#?]/))return null
if(t.match(/^(\d+\.\d*|\d*\.\d+|\d+)/))return"number"
var r=t.next()
return"{"==r||"}"==r||"["==r||"]"==r||"("==r||")"==r?"bracket":"%"==r?(t.eol()||t.skipToEnd(),"comment"):"error"}function f(t,r){var i,u=t.peek()
return"{"==u||"["==u?(i=e(r),i.openBracket(u),t.eat(u),a(r,c),"bracket"):/[ \t\r]/.test(u)?(t.eat(u),null):(a(r,c),n(r),c(t,r))}var m={}
return m.importmodule=i("importmodule","tag",["string","builtin"]),m.documentclass=i("documentclass","tag",["","atom"]),m.usepackage=i("usepackage","tag",["atom"]),m.begin=i("begin","tag",["atom"]),m.end=i("end","tag",["atom"]),m.DEFAULT=function(){this.name="DEFAULT",this.style="tag",this.styleIdentifier=this.openBracket=this.closeBracket=function(){}},{startState:function(){return{cmdState:[],f:c}},copyState:function(t){return{cmdState:t.cmdState.slice(),f:t.f}},token:function(t,e){return e.f(t,e)},lineComment:"%"}}),t.defineMIME("text/x-stex","stex"),t.defineMIME("text/x-latex","stex")})
