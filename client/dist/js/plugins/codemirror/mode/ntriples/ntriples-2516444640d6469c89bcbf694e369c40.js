(function(_){"object"==typeof exports&&"object"==typeof module?_(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],_):_(CodeMirror)})(function(_){"use strict"
_.defineMode("ntriples",function(){function _(_,I){var R,n=_.location
R=n==e.PRE_SUBJECT&&"<"==I?e.WRITING_SUB_URI:n==e.PRE_SUBJECT&&"_"==I?e.WRITING_BNODE_URI:n==e.PRE_PRED&&"<"==I?e.WRITING_PRED_URI:n==e.PRE_OBJ&&"<"==I?e.WRITING_OBJ_URI:n==e.PRE_OBJ&&"_"==I?e.WRITING_OBJ_BNODE:n==e.PRE_OBJ&&'"'==I?e.WRITING_OBJ_LITERAL:n==e.WRITING_SUB_URI&&">"==I?e.PRE_PRED:n==e.WRITING_BNODE_URI&&" "==I?e.PRE_PRED:n==e.WRITING_PRED_URI&&">"==I?e.PRE_OBJ:n==e.WRITING_OBJ_URI&&">"==I?e.POST_OBJ:n==e.WRITING_OBJ_BNODE&&" "==I?e.POST_OBJ:n==e.WRITING_OBJ_LITERAL&&'"'==I?e.POST_OBJ:n==e.WRITING_LIT_LANG&&" "==I?e.POST_OBJ:n==e.WRITING_LIT_TYPE&&">"==I?e.POST_OBJ:n==e.WRITING_OBJ_LITERAL&&"@"==I?e.WRITING_LIT_LANG:n==e.WRITING_OBJ_LITERAL&&"^"==I?e.WRITING_LIT_TYPE:" "!=I||n!=e.PRE_SUBJECT&&n!=e.PRE_PRED&&n!=e.PRE_OBJ&&n!=e.POST_OBJ?n==e.POST_OBJ&&"."==I?e.PRE_SUBJECT:e.ERROR:n,_.location=R}var e={PRE_SUBJECT:0,WRITING_SUB_URI:1,WRITING_BNODE_URI:2,PRE_PRED:3,WRITING_PRED_URI:4,PRE_OBJ:5,WRITING_OBJ_URI:6,WRITING_OBJ_BNODE:7,WRITING_OBJ_LITERAL:8,WRITING_LIT_LANG:9,WRITING_LIT_TYPE:10,POST_OBJ:11,ERROR:12}
return{startState:function(){return{location:e.PRE_SUBJECT,uris:[],anchors:[],bnodes:[],langs:[],types:[]}},token:function(e,I){var R=e.next()
if("<"==R){_(I,R)
var n=""
return e.eatWhile(function(_){return"#"!=_&&">"!=_&&(n+=_,!0)}),(I.uris.push(n),e.match("#",!1))?"variable":(e.next(),_(I,">"),"variable")}if("#"==R){var t=""
return e.eatWhile(function(_){return">"!=_&&" "!=_&&(t+=_,!0)}),I.anchors.push(t),"variable-2"}if(">"==R)return _(I,">"),"variable"
if("_"==R){_(I,R)
var r=""
return e.eatWhile(function(_){return" "!=_&&(r+=_,!0)}),I.bnodes.push(r),e.next(),_(I," "),"builtin"}if('"'==R)return _(I,R),e.eatWhile(function(_){return'"'!=_}),e.next(),"@"!=e.peek()&&"^"!=e.peek()&&_(I,'"'),"string"
if("@"==R){_(I,"@")
var i=""
return e.eatWhile(function(_){return" "!=_&&(i+=_,!0)}),I.langs.push(i),e.next(),_(I," "),"string-2"}if("^"==R){e.next(),_(I,"^")
var T=""
return e.eatWhile(function(_){return">"!=_&&(T+=_,!0)}),I.types.push(T),e.next(),_(I,">"),"variable"}" "==R&&_(I,R),"."==R&&_(I,R)}}}),_.defineMIME("text/n-triples","ntriples")})
