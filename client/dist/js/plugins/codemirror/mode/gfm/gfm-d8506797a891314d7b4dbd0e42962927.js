(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../markdown/markdown"),require("../../addon/mode/overlay")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../markdown/markdown","../../addon/mode/overlay"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("gfm",function(o,n){function r(e){return e.code=!1,null}var t=0,a={startState:function(){return{code:!1,codeBlock:!1,ateSpace:!1}},copyState:function(e){return{code:e.code,codeBlock:e.codeBlock,ateSpace:e.ateSpace}},token:function(e,o){if(o.combineTokens=null,o.codeBlock)return e.match(/^```/)?(o.codeBlock=!1,null):(e.skipToEnd(),null)
if(e.sol()&&(o.code=!1),e.sol()&&e.match(/^```/))return e.skipToEnd(),o.codeBlock=!0,null
if("`"===e.peek()){e.next()
var n=e.pos
e.eatWhile("`")
var r=1+e.pos-n
return o.code?r===t&&(o.code=!1):(t=r,o.code=!0),null}if(o.code)return e.next(),null
if(e.eatSpace())return o.ateSpace=!0,null
if(e.sol()||o.ateSpace){if(o.ateSpace=!1,e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?:[a-f0-9]{7,40}\b)/))return o.combineTokens=!0,"link"
if(e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/))return o.combineTokens=!0,"link"}return e.match(/^((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?«»“”‘’]))/i)&&"]("!=e.string.slice(e.start-2,e.start)?(o.combineTokens=!0,"link"):(e.next(),null)},blankLine:r},c={underscoresBreakWords:!1,taskLists:!0,fencedCodeBlocks:!0}
for(var d in n)c[d]=n[d]
return c.name="markdown",e.defineMIME("gfmBase",c),e.overlayMode(e.getMode(o,"gfmBase"),a)},"markdown")})
