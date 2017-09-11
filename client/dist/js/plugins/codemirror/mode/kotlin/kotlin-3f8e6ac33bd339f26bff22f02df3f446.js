(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("kotlin",function(e,t){function n(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0
return t}function r(e,t){var n=e.next()
if('"'==n||"'"==n)return i(n,e,t)
if("."==n&&e.eat("*"))return"word"
if(/[\[\]{}\(\),;\:\.]/.test(n))return c=n,null
if(/\d/.test(n))return e.eat(/eE/)&&(e.eat(/\+\-/),e.eatWhile(/\d/)),"number"
if("/"==n){if(e.eat("*"))return t.tokenize.push(u),u(e,t)
if(e.eat("/"))return e.skipToEnd(),"comment"
if(l(t.lastToken))return i(n,e,t)}if("-"==n&&e.eat(">"))return c="->",null
if(/[\-+*&%=<>!?|\/~]/.test(n))return e.eatWhile(/[\-+*&%=<>|~]/),"operator"
e.eatWhile(/[\w\$_]/)
var r=e.current()
return h.propertyIsEnumerable(r)?"atom":k.propertyIsEnumerable(r)?(y.propertyIsEnumerable(r)&&(c="newstatement"),"softKeyword"):m.propertyIsEnumerable(r)?(y.propertyIsEnumerable(r)&&(c="newstatement"),"keyword"):"word"}function i(e,t,n){function r(t,n){for(var u,l=!1,s=!i;null!=(u=t.next());){if(u==e&&!l){if(!i)break
if(t.match(e+e)){s=!0
break}}if('"'==e&&"$"==u&&!l&&t.eat("{"))return n.tokenize.push(o()),"string"
if("$"==u&&!l&&!t.eat(" "))return n.tokenize.push(a()),"string"
l=!l&&"\\"==u}return d&&n.tokenize.push(r),s&&n.tokenize.pop(),"string"}var i=!1
if("/"!=e&&t.eat(e)){if(!t.eat(e))return"string"
i=!0}return n.tokenize.push(r),r(t,n)}function o(){function e(e,n){if("}"==e.peek()){if(0==--t)return n.tokenize.pop(),n.tokenize[n.tokenize.length-1](e,n)}else"{"==e.peek()&&t++
return r(e,n)}var t=1
return e.isBase=!0,e}function a(){function e(e,t){if(e.eat(/[\w]/)){if(e.eatWhile(/[\w]/))return t.tokenize.pop(),"word"}return t.tokenize.pop(),"string"}return e.isBase=!0,e}function u(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize.pop()
break}r="*"==n}return"comment"}function l(e){return!e||"operator"==e||"->"==e||/[\.\[\{\(,;:]/.test(e)||"newstatement"==e||"keyword"==e||"proplabel"==e}function s(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function f(e,t,n){return e.context=new s(e.indented,t,n,null,e.context)}function p(e){var t=e.context.type
return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}var c,d=t.multiLineStrings,m=n("package continue return object while break class data trait throw super when type this else This try val var fun for is in if do as true false null get set"),k=n("import where by get set abstract enum open annotation override private public internal protected catch out vararg inline finally final ref"),y=n("catch class do else finally for if where try while enum"),h=n("null true false this")
return r.isBase=!0,{startState:function(t){return{tokenize:[r],context:new s((t||0)-e.indentUnit,0,"top",!1),indented:0,startOfLine:!0,lastToken:null}},token:function(e,t){var n=t.context
if(e.sol()&&(null==n.align&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0,"statement"!=n.type||l(t.lastToken)||(p(t),n=t.context)),e.eatSpace())return null
c=null
var r=t.tokenize[t.tokenize.length-1](e,t)
if("comment"==r)return r
if(null==n.align&&(n.align=!0),";"!=c&&":"!=c||"statement"!=n.type)if("->"==c&&"statement"==n.type&&"}"==n.prev.type)p(t),t.context.align=!1
else if("{"==c)f(t,e.column(),"}")
else if("["==c)f(t,e.column(),"]")
else if("("==c)f(t,e.column(),")")
else if("}"==c){for(;"statement"==n.type;)n=p(t)
for("}"==n.type&&(n=p(t));"statement"==n.type;)n=p(t)}else c==n.type?p(t):("}"==n.type||"top"==n.type||"statement"==n.type&&"newstatement"==c)&&f(t,e.column(),"statement")
else p(t)
return t.startOfLine=!1,t.lastToken=c||r,r},indent:function(t,n){if(!t.tokenize[t.tokenize.length-1].isBase)return 0
var r=n&&n.charAt(0),i=t.context
"statement"!=i.type||l(t.lastToken)||(i=i.prev)
var o=r==i.type
return"statement"==i.type?i.indented+("{"==r?0:e.indentUnit):i.align?i.column+(o?0:1):i.indented+(o?0:e.indentUnit)},electricChars:"{}"}}),e.defineMIME("text/x-kotlin","kotlin")})
