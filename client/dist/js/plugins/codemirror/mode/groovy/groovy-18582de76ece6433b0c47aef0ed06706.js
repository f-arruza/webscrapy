(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("groovy",function(e){function t(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0
return t}function n(e,t){var n=e.next()
if('"'==n||"'"==n)return r(n,e,t)
if(/[\[\]{}\(\),;\:\.]/.test(n))return f=n,null
if(/\d/.test(n))return e.eatWhile(/[\w\.]/),e.eat(/eE/)&&(e.eat(/\+\-/),e.eatWhile(/\d/)),"number"
if("/"==n){if(e.eat("*"))return t.tokenize.push(o),o(e,t)
if(e.eat("/"))return e.skipToEnd(),"comment"
if(a(t.lastToken))return r(n,e,t)}if("-"==n&&e.eat(">"))return f="->",null
if(/[+\-*&%=<>!?|\/~]/.test(n))return e.eatWhile(/[+\-*&%=<>|~]/),"operator"
if(e.eatWhile(/[\w\$_]/),"@"==n)return e.eatWhile(/[\w\$_\.]/),"meta"
if("."==t.lastToken)return"property"
if(e.eat(":"))return f="proplabel","property"
var i=e.current()
return d.propertyIsEnumerable(i)?"atom":c.propertyIsEnumerable(i)?(p.propertyIsEnumerable(i)&&(f="newstatement"),"keyword"):"variable"}function r(e,t,n){function r(t,n){for(var r,a=!1,l=!o;null!=(r=t.next());){if(r==e&&!a){if(!o)break
if(t.match(e+e)){l=!0
break}}if('"'==e&&"$"==r&&!a&&t.eat("{"))return n.tokenize.push(i()),"string"
a=!a&&"\\"==r}return l&&n.tokenize.pop(),"string"}var o=!1
if("/"!=e&&t.eat(e)){if(!t.eat(e))return"string"
o=!0}return n.tokenize.push(r),r(t,n)}function i(){function e(e,r){if("}"==e.peek()){if(0==--t)return r.tokenize.pop(),r.tokenize[r.tokenize.length-1](e,r)}else"{"==e.peek()&&t++
return n(e,r)}var t=1
return e.isBase=!0,e}function o(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize.pop()
break}r="*"==n}return"comment"}function a(e){return!e||"operator"==e||"->"==e||/[\.\[\{\(,;:]/.test(e)||"newstatement"==e||"keyword"==e||"proplabel"==e}function l(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function s(e,t,n){return e.context=new l(e.indented,t,n,null,e.context)}function u(e){var t=e.context.type
return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}var f,c=t("abstract as assert boolean break byte case catch char class const continue def default do double else enum extends final finally float for goto if implements import in instanceof int interface long native new package private protected public return short static strictfp super switch synchronized threadsafe throw throws transient try void volatile while"),p=t("catch class do else finally for if switch try while enum interface def"),d=t("null true false this")
return n.isBase=!0,{startState:function(t){return{tokenize:[n],context:new l((t||0)-e.indentUnit,0,"top",!1),indented:0,startOfLine:!0,lastToken:null}},token:function(e,t){var n=t.context
if(e.sol()&&(null==n.align&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0,"statement"!=n.type||a(t.lastToken)||(u(t),n=t.context)),e.eatSpace())return null
f=null
var r=t.tokenize[t.tokenize.length-1](e,t)
if("comment"==r)return r
if(null==n.align&&(n.align=!0),";"!=f&&":"!=f||"statement"!=n.type)if("->"==f&&"statement"==n.type&&"}"==n.prev.type)u(t),t.context.align=!1
else if("{"==f)s(t,e.column(),"}")
else if("["==f)s(t,e.column(),"]")
else if("("==f)s(t,e.column(),")")
else if("}"==f){for(;"statement"==n.type;)n=u(t)
for("}"==n.type&&(n=u(t));"statement"==n.type;)n=u(t)}else f==n.type?u(t):("}"==n.type||"top"==n.type||"statement"==n.type&&"newstatement"==f)&&s(t,e.column(),"statement")
else u(t)
return t.startOfLine=!1,t.lastToken=f||r,r},indent:function(t,n){if(!t.tokenize[t.tokenize.length-1].isBase)return 0
var r=n&&n.charAt(0),i=t.context
"statement"!=i.type||a(t.lastToken)||(i=i.prev)
var o=r==i.type
return"statement"==i.type?i.indented+("{"==r?0:e.indentUnit):i.align?i.column+(o?0:1):i.indented+(o?0:e.indentUnit)},electricChars:"{}",fold:"brace"}}),e.defineMIME("text/x-groovy","groovy")})
