(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../htmlmixed/htmlmixed"),require("../../addon/mode/overlay")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../htmlmixed/htmlmixed","../../addon/mode/overlay"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("django:inner",function(){function e(e,t){e.eatWhile(/[^\{]/)
var o=e.next()
if("{"==o&&(o=e.eat(/\{|%|#/)))return t.tokenize=n(o),"tag"}function n(n){return"{"==n&&(n="}"),function(o,i){return o.next()==n&&o.eat("}")?(i.tokenize=e,"tag"):o.match(t)?"keyword":"#"==n?"comment":"string"}}var t=["block","endblock","for","endfor","in","true","false","loop","none","self","super","if","endif","as","not","and","else","import","with","endwith","without","context","ifequal","endifequal","ifnotequal","endifnotequal","extends","include","load","length","comment","endcomment","empty"]
return t=new RegExp("^(("+t.join(")|(")+"))\\b"),{startState:function(){return{tokenize:e}},token:function(e,n){return n.tokenize(e,n)}}}),e.defineMode("django",function(n){var t=e.getMode(n,"text/html"),o=e.getMode(n,"django:inner")
return e.overlayMode(t,o)}),e.defineMIME("text/x-django","django")})
