(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("dylan",function(e){function n(e,n,t){return n.tokenize=t,t(e,n)}function t(e,n,t){return p=e,y=t,n}function i(e,i){var a=e.peek()
if("'"==a||'"'==a)return e.next(),n(e,i,o(a,"string","string"))
if("/"==a)return e.next(),e.eat("*")?n(e,i,r):e.eat("/")?(e.skipToEnd(),t("comment","comment")):(e.skipTo(" "),t("operator","operator"))
if(/\d/.test(a))return e.match(/^\d*(?:\.\d*)?(?:e[+\-]?\d+)?/),t("number","number")
if("#"==a)return e.next(),a=e.peek(),'"'==a?(e.next(),n(e,i,o('"',"symbol","string-2"))):"b"==a?(e.next(),e.eatWhile(/[01]/),t("number","number")):"x"==a?(e.next(),e.eatWhile(/[\da-f]/i),t("number","number")):"o"==a?(e.next(),e.eatWhile(/[0-7]/),t("number","number")):(e.eatWhile(/[-a-zA-Z]/),t("hash","keyword"))
if(e.match("end"))return t("end","keyword")
for(var l in f)if(f.hasOwnProperty(l)){var s=f[l]
if(s instanceof Array&&s.some(function(n){return e.match(n)})||e.match(s))return t(l,m[l],e.current())}return e.match("define")?t("definition","def"):(e.eatWhile(/[\w\-]/),d[e.current()]?t(d[e.current()],b[e.current()],e.current()):e.current().match(c)?t("variable","variable"):(e.next(),t("other","variable-2")))}function r(e,n){for(var r,o=!1;r=e.next();){if("/"==r&&o){n.tokenize=i
break}o="*"==r}return t("comment","comment")}function o(e,n,r){return function(o,a){for(var l,c=!1;null!=(l=o.next());)if(l==e){c=!0
break}return c&&(a.tokenize=i),t(n,r)}}var a={unnamedDefinition:["interface"],namedDefinition:["module","library","macro","C-struct","C-union","C-function","C-callable-wrapper"],typeParameterizedDefinition:["class","C-subtype","C-mapped-subtype"],otherParameterizedDefinition:["method","function","C-variable","C-address"],constantSimpleDefinition:["constant"],variableSimpleDefinition:["variable"],otherSimpleDefinition:["generic","domain","C-pointer-type","table"],statement:["if","block","begin","method","case","for","select","when","unless","until","while","iterate","profiling","dynamic-bind"],separator:["finally","exception","cleanup","else","elseif","afterwards"],other:["above","below","by","from","handler","in","instance","let","local","otherwise","slot","subclass","then","to","keyed-by","virtual"],signalingCalls:["signal","error","cerror","break","check-type","abort"]}
a.otherDefinition=a.unnamedDefinition.concat(a.namedDefinition).concat(a.otherParameterizedDefinition),a.definition=a.typeParameterizedDefinition.concat(a.otherDefinition),a.parameterizedDefinition=a.typeParameterizedDefinition.concat(a.otherParameterizedDefinition),a.simpleDefinition=a.constantSimpleDefinition.concat(a.variableSimpleDefinition).concat(a.otherSimpleDefinition),a.keyword=a.statement.concat(a.separator).concat(a.other)
var l="[-_a-zA-Z?!*@<>$%]+",c=new RegExp("^"+l),f={symbolKeyword:l+":",symbolClass:"<"+l+">",symbolGlobal:"\\*"+l+"\\*",symbolConstant:"\\$"+l},m={symbolKeyword:"atom",symbolClass:"tag",symbolGlobal:"variable-2",symbolConstant:"variable-3"}
for(var s in f)f.hasOwnProperty(s)&&(f[s]=new RegExp("^"+f[s]))
f.keyword=[/^with(?:out)?-[-_a-zA-Z?!*@<>$%]+/]
var u={}
u.keyword="keyword",u.definition="def",u.simpleDefinition="def",u.signalingCalls="builtin"
var d={},b={};["keyword","definition","simpleDefinition","signalingCalls"].forEach(function(e){a[e].forEach(function(n){d[n]=e,b[n]=u[e]})})
var p,y
return{startState:function(){return{tokenize:i,currentIndent:0}},token:function(e,n){return e.eatSpace()?null:n.tokenize(e,n)},blockCommentStart:"/*",blockCommentEnd:"*/"}}),e.defineMIME("text/x-dylan","dylan")})
