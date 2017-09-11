(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
function t(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0
return t}e.defineMode("d",function(t,n){function r(e,t){var n=e.next()
if(b[n]){var r=b[n](e,t)
if(!1!==r)return r}if('"'==n||"'"==n||"`"==n)return t.tokenize=i(n),t.tokenize(e,t)
if(/[\[\]{}\(\),;\:\.]/.test(n))return c=n,null
if(/\d/.test(n))return e.eatWhile(/[\w\.]/),"number"
if("/"==n){if(e.eat("+"))return t.tokenize=o,a(e,t)
if(e.eat("*"))return t.tokenize=o,o(e,t)
if(e.eat("/"))return e.skipToEnd(),"comment"}if(k.test(n))return e.eatWhile(k),"operator"
e.eatWhile(/[\w\$_\xa1-\uffff]/)
var u=e.current()
return m.propertyIsEnumerable(u)?(y.propertyIsEnumerable(u)&&(c="newstatement"),"keyword"):p.propertyIsEnumerable(u)?(y.propertyIsEnumerable(u)&&(c="newstatement"),"builtin"):h.propertyIsEnumerable(u)?"atom":"variable"}function i(e){return function(t,n){for(var r,i=!1,o=!1;null!=(r=t.next());){if(r==e&&!i){o=!0
break}i=!i&&"\\"==r}return(o||!i&&!v)&&(n.tokenize=null),"string"}}function o(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=null
break}r="*"==n}return"comment"}function a(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=null
break}r="+"==n}return"comment"}function u(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function l(e,t,n){var r=e.indented
return e.context&&"statement"==e.context.type&&(r=e.context.indented),e.context=new u(r,t,n,null,e.context)}function s(e){var t=e.context.type
return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}var c,f=t.indentUnit,d=n.statementIndentUnit||f,m=n.keywords||{},p=n.builtin||{},y=n.blockKeywords||{},h=n.atoms||{},b=n.hooks||{},v=n.multiLineStrings,k=/[+\-*&%=<>!?|\/]/
return{startState:function(e){return{tokenize:null,context:new u((e||0)-f,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var n=t.context
if(e.sol()&&(null==n.align&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null
c=null
var i=(t.tokenize||r)(e,t)
if("comment"==i||"meta"==i)return i
if(null==n.align&&(n.align=!0),";"!=c&&":"!=c&&","!=c||"statement"!=n.type)if("{"==c)l(t,e.column(),"}")
else if("["==c)l(t,e.column(),"]")
else if("("==c)l(t,e.column(),")")
else if("}"==c){for(;"statement"==n.type;)n=s(t)
for("}"==n.type&&(n=s(t));"statement"==n.type;)n=s(t)}else c==n.type?s(t):(("}"==n.type||"top"==n.type)&&";"!=c||"statement"==n.type&&"newstatement"==c)&&l(t,e.column(),"statement")
else s(t)
return t.startOfLine=!1,i},indent:function(t,n){if(t.tokenize!=r&&null!=t.tokenize)return e.Pass
var i=t.context,o=n&&n.charAt(0)
"statement"==i.type&&"}"==o&&(i=i.prev)
var a=o==i.type
return"statement"==i.type?i.indented+("{"==o?0:d):i.align?i.column+(a?0:1):i.indented+(a?0:f)},electricChars:"{}"}})
var n="body catch class do else enum for foreach foreach_reverse if in interface mixin out scope struct switch try union unittest version while with"
e.defineMIME("text/x-d",{name:"d",keywords:t("abstract alias align asm assert auto break case cast cdouble cent cfloat const continue debug default delegate delete deprecated export extern final finally function goto immutable import inout invariant is lazy macro module new nothrow override package pragma private protected public pure ref return shared short static super synchronized template this throw typedef typeid typeof volatile __FILE__ __LINE__ __gshared __traits __vector __parameters "+n),blockKeywords:t(n),builtin:t("bool byte char creal dchar double float idouble ifloat int ireal long real short ubyte ucent uint ulong ushort wchar wstring void size_t sizediff_t"),atoms:t("exit failure success true false null"),hooks:{"@":function(e,t){return e.eatWhile(/[\w\$_]/),"meta"}}})})
