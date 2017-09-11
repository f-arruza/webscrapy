(function(r){"object"==typeof exports&&"object"==typeof module?r(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],r):r(CodeMirror)})(function(r){"use strict"
r.defineMode("http",function(){function r(r,e){return r.skipToEnd(),e.cur=u,"error"}function e(e,n){return e.match(/^HTTP\/\d\.\d/)?(n.cur=t,"keyword"):e.match(/^[A-Z]+/)&&/[ \t]/.test(e.peek())?(n.cur=o,"keyword"):r(e,n)}function t(e,t){var o=e.match(/^\d+/)
if(!o)return r(e,t)
t.cur=n
var i=Number(o[0])
return i>=100&&i<200?"positive informational":i>=200&&i<300?"positive success":i>=300&&i<400?"positive redirect":i>=400&&i<500?"negative client-error":i>=500&&i<600?"negative server-error":"error"}function n(r,e){return r.skipToEnd(),e.cur=u,null}function o(r,e){return r.eatWhile(/\S/),e.cur=i,"string-2"}function i(e,t){return e.match(/^HTTP\/\d\.\d$/)?(t.cur=u,"keyword"):r(e,t)}function u(r){return r.sol()&&!r.eat(/[ \t]/)?r.match(/^.*?:/)?"atom":(r.skipToEnd(),"error"):(r.skipToEnd(),"string")}function c(r){return r.skipToEnd(),null}return{token:function(r,e){var t=e.cur
return t!=u&&t!=c&&r.eatSpace()?null:t(r,e)},blankLine:function(r){r.cur=c},startState:function(){return{cur:e}}}}),r.defineMIME("message/http","http")})
