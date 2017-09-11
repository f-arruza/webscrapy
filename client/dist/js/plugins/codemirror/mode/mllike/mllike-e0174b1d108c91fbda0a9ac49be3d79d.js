(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("mllike",function(e,r){function t(e,t){var d=e.next()
if('"'===d)return t.tokenize=o,t.tokenize(e,t)
if("("===d&&e.eat("*"))return t.commentLevel++,t.tokenize=n,t.tokenize(e,t)
if("~"===d)return e.eatWhile(/\w/),"variable-2"
if("`"===d)return e.eatWhile(/\w/),"quote"
if("/"===d&&r.slashComments&&e.eat("/"))return e.skipToEnd(),"comment"
if(/\d/.test(d))return e.eatWhile(/[\d]/),e.eat(".")&&e.eatWhile(/[\d]/),"number"
if(/[+\-*&%=<>!?|]/.test(d))return"operator"
e.eatWhile(/\w/)
var l=e.current()
return i[l]||"variable"}function o(e,r){for(var o,n=!1,i=!1;null!=(o=e.next());){if('"'===o&&!i){n=!0
break}i=!i&&"\\"===o}return n&&!i&&(r.tokenize=t),"string"}function n(e,r){for(var o,n;r.commentLevel>0&&null!=(n=e.next());)"("===o&&"*"===n&&r.commentLevel++,"*"===o&&")"===n&&r.commentLevel--,o=n
return r.commentLevel<=0&&(r.tokenize=t),"comment"}var i={let:"keyword",rec:"keyword",in:"keyword",of:"keyword",and:"keyword",if:"keyword",then:"keyword",else:"keyword",for:"keyword",to:"keyword",while:"keyword",do:"keyword",done:"keyword",fun:"keyword",function:"keyword",val:"keyword",type:"keyword",mutable:"keyword",match:"keyword",with:"keyword",try:"keyword",open:"builtin",ignore:"builtin",begin:"keyword",end:"keyword"},d=r.extraWords||{}
for(var l in d)d.hasOwnProperty(l)&&(i[l]=r.extraWords[l])
return{startState:function(){return{tokenize:t,commentLevel:0}},token:function(e,r){return e.eatSpace()?null:r.tokenize(e,r)},blockCommentStart:"(*",blockCommentEnd:"*)",lineComment:r.slashComments?"//":null}}),e.defineMIME("text/x-ocaml",{name:"mllike",extraWords:{succ:"keyword",trace:"builtin",exit:"builtin",print_string:"builtin",print_endline:"builtin",true:"atom",false:"atom",raise:"keyword"}}),e.defineMIME("text/x-fsharp",{name:"mllike",extraWords:{abstract:"keyword",as:"keyword",assert:"keyword",base:"keyword",class:"keyword",default:"keyword",delegate:"keyword",downcast:"keyword",downto:"keyword",elif:"keyword",exception:"keyword",extern:"keyword",finally:"keyword",global:"keyword",inherit:"keyword",inline:"keyword",interface:"keyword",internal:"keyword",lazy:"keyword","let!":"keyword",member:"keyword",module:"keyword",namespace:"keyword",new:"keyword",null:"keyword",override:"keyword",private:"keyword",public:"keyword",return:"keyword","return!":"keyword",select:"keyword",static:"keyword",struct:"keyword",upcast:"keyword",use:"keyword","use!":"keyword",val:"keyword",when:"keyword",yield:"keyword","yield!":"keyword",List:"builtin",Seq:"builtin",Map:"builtin",Set:"builtin",int:"builtin",string:"builtin",raise:"builtin",failwith:"builtin",not:"builtin",true:"builtin",false:"builtin"},slashComments:!0})})
