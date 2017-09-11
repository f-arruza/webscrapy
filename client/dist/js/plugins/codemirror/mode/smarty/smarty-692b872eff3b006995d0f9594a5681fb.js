(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("smarty",function(e){var t={rightDelimiter:"}",leftDelimiter:"{",smartyVersion:2}
e.hasOwnProperty("leftDelimiter")&&(t.leftDelimiter=e.leftDelimiter),e.hasOwnProperty("rightDelimiter")&&(t.rightDelimiter=e.rightDelimiter),e.hasOwnProperty("smartyVersion")&&3===e.smartyVersion&&(t.smartyVersion=3)
var r,i=["debug","extends","function","include","literal"],n={operatorChars:/[+\-*&%=<>!?]/,validIdentifier:/[a-zA-Z0-9_]/,stringChar:/['"]/},o={cont:function(e,t){return r=t,e},chain:function(e,t,r){return t.tokenize=r,r(e,t)}},a={tokenizer:function(e,i){if(e.match(t.leftDelimiter,!0)){if(e.eat("*"))return o.chain(e,i,a.inBlock("comment","*"+t.rightDelimiter))
i.depth++
var n=e.eol(),l=/\s/.test(e.peek())
return 3===t.smartyVersion&&"{"===t.leftDelimiter&&(n||l)?(i.depth--,null):(i.tokenize=a.smarty,r="startTag","tag")}return e.next(),null},smarty:function(e,l){if(e.match(t.rightDelimiter,!0))return 3===t.smartyVersion?--l.depth<=0&&(l.tokenize=a.tokenizer):l.tokenize=a.tokenizer,o.cont("tag",null)
if(e.match(t.leftDelimiter,!0))return l.depth++,o.cont("tag","startTag")
var f=e.next()
if("$"==f)return e.eatWhile(n.validIdentifier),o.cont("variable-2","variable")
if("|"==f)return o.cont("operator","pipe")
if("."==f)return o.cont("operator","property")
if(n.stringChar.test(f))return l.tokenize=a.inAttribute(f),o.cont("string","string")
if(n.operatorChars.test(f))return e.eatWhile(n.operatorChars),o.cont("operator","operator")
if("["==f||"]"==f)return o.cont("bracket","bracket")
if("("==f||")"==f)return o.cont("bracket","operator")
if(/\d/.test(f))return e.eatWhile(/\d/),o.cont("number","number")
if("variable"==l.last){if("@"==f)return e.eatWhile(n.validIdentifier),o.cont("property","property")
if("|"==f)return e.eatWhile(n.validIdentifier),o.cont("qualifier","modifier")}else{if("pipe"==l.last)return e.eatWhile(n.validIdentifier),o.cont("qualifier","modifier")
if("whitespace"==l.last)return e.eatWhile(n.validIdentifier),o.cont("attribute","modifier")}if("property"==l.last)return e.eatWhile(n.validIdentifier),o.cont("property",null)
if(/\s/.test(f))return r="whitespace",null
var u=""
"/"!=f&&(u+=f)
for(var s=null;s=e.eat(n.validIdentifier);)u+=s
for(var c=0,d=i.length;c<d;c++)if(i[c]==u)return o.cont("keyword","keyword")
return/\s/.test(f)?null:o.cont("tag","tag")},inAttribute:function(e){return function(t,r){for(var i=null,n=null;!t.eol();){if(n=t.peek(),t.next()==e&&"\\"!==i){r.tokenize=a.smarty
break}i=n}return"string"}},inBlock:function(e,t){return function(r,i){for(;!r.eol();){if(r.match(t)){i.tokenize=a.tokenizer
break}r.next()}return e}}}
return{startState:function(){return{tokenize:a.tokenizer,mode:"smarty",last:null,depth:0}},token:function(e,t){var i=t.tokenize(e,t)
return t.last=r,i},electricChars:""}}),e.defineMIME("text/x-smarty","smarty")})