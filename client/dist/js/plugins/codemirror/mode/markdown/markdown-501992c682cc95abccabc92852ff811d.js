(function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror",require("../xml/xml"))):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../xml/xml"],t):t(CodeMirror)})(function(t){"use strict"
t.defineMode("markdown",function(e,n){function i(t,e,n){return e.f=e.inline=n,n(t,e)}function r(t,e,n){return e.f=e.block=n,n(t,e)}function a(t){return t.linkTitle=!1,t.em=!1,t.strong=!1,t.quote=0,x||t.f!=l||(t.f=m,t.block=o),t.trailingSpace=0,t.trailingSpaceNewLine=!1,t.thisLineHasContent=!1,null}function o(t,e){var a=t.sol(),o=!1!==e.list
!1!==e.list&&e.indentationDiff>=0?(e.indentationDiff<4&&(e.indentation-=e.indentationDiff),e.list=null):!1!==e.list&&e.indentation>0?(e.list=null,e.listDepth=Math.floor(e.indentation/4)):!1!==e.list&&(e.list=!1,e.listDepth=0)
var l=null
if(e.indentationDiff>=4)return e.indentation-=4,t.skipToEnd(),q
if(t.eatSpace())return null
if(l=t.match(A))return e.header=l[0].length<=6?l[0].length:6,n.highlightFormatting&&(e.formatting="header"),e.f=e.inline,s(e)
if(e.prevLineHasContent&&(l=t.match(P)))return e.header="="==l[0].charAt(0)?1:2,n.highlightFormatting&&(e.formatting="header"),e.f=e.inline,s(e)
if(t.eat(">"))return e.indentation++,e.quote=a?1:e.quote+1,n.highlightFormatting&&(e.formatting="quote"),t.eatSpace(),s(e)
if("["===t.peek())return i(t,e,d)
if(t.match(W,!0))return T
if((!e.prevLineHasContent||o)&&(t.match(I,!1)||t.match(R,!1))){var f=null
return t.match(I,!0)?f="ul":(t.match(R,!0),f="ol"),e.indentation+=4,e.list=!0,e.listDepth++,n.taskLists&&t.match(U,!1)&&(e.taskList=!0),e.f=e.inline,n.highlightFormatting&&(e.formatting=["list","list-"+f]),s(e)}return n.fencedCodeBlocks&&t.match(/^```([\w+#]*)/,!0)?(e.localMode=b(RegExp.$1),e.localMode&&(e.localState=e.localMode.startState()),r(t,e,h),n.highlightFormatting&&(e.formatting="code-block"),e.code=!0,s(e)):i(t,e,e.inline)}function l(t,e){var n=S.token(t,e.htmlState)
return(x&&null===e.htmlState.tagStart&&!e.htmlState.context||e.md_inside&&t.current().indexOf(">")>-1)&&(e.f=m,e.block=o,e.htmlState=null),n}function h(t,e){if(t.sol()&&t.match(/^```/,!0)){e.localMode=e.localState=null,e.f=m,e.block=o,n.highlightFormatting&&(e.formatting="code-block"),e.code=!0
var i=s(e)
return e.code=!1,i}return e.localMode?e.localMode.token(t,e.localState):(t.skipToEnd(),q)}function s(t){var e=[]
if(t.formatting){e.push(B),"string"==typeof t.formatting&&(t.formatting=[t.formatting])
for(var i=0;i<t.formatting.length;i++)e.push(B+"-"+t.formatting[i]),"header"===t.formatting[i]&&e.push(B+"-"+t.formatting[i]+"-"+t.header),"quote"===t.formatting[i]&&(!n.maxBlockquoteDepth||n.maxBlockquoteDepth>=t.quote?e.push(B+"-"+t.formatting[i]+"-"+t.quote):e.push("error"))}if(t.taskOpen)return e.push("meta"),e.length?e.join(" "):null
if(t.taskClosed)return e.push("property"),e.length?e.join(" "):null
if(t.linkHref)return e.push(E),e.length?e.join(" "):null
if(t.strong&&e.push(O),t.em&&e.push(N),t.linkText&&e.push($),t.code&&e.push(q),t.header&&(e.push(M),e.push(M+"-"+t.header)),t.quote&&(e.push(w),!n.maxBlockquoteDepth||n.maxBlockquoteDepth>=t.quote?e.push(w+"-"+t.quote):e.push(w+"-"+n.maxBlockquoteDepth)),!1!==t.list){var r=(t.listDepth-1)%3
r?1===r?e.push(D):e.push(H):e.push(C)}return t.trailingSpaceNewLine?e.push("trailing-space-new-line"):t.trailingSpace&&e.push("trailing-space-"+(t.trailingSpace%2?"a":"b")),e.length?e.join(" "):null}function f(t,e){if(t.match(z,!0))return s(e)}function m(e,i){var a=i.text(e,i)
if(void 0!==a)return a
if(i.list)return i.list=null,s(i)
if(i.taskList){return"x"!==e.match(U,!0)[1]?i.taskOpen=!0:i.taskClosed=!0,n.highlightFormatting&&(i.formatting="task"),i.taskList=!1,s(i)}if(i.taskOpen=!1,i.taskClosed=!1,i.header&&e.match(/^#+$/,!0))return n.highlightFormatting&&(i.formatting="header"),s(i)
var o=e.sol(),h=e.next()
if("\\"===h&&(e.next(),n.highlightFormatting)){var f=s(i)
return f?f+" formatting-escape":"formatting-escape"}if(i.linkTitle){i.linkTitle=!1
var m=h
"("===h&&(m=")"),m=(m+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")
var u="^\\s*(?:[^"+m+"\\\\]+|\\\\\\\\|\\\\.)"+m
if(e.match(new RegExp(u),!0))return E}if("`"===h){var d=i.formatting
n.highlightFormatting&&(i.formatting="code")
var p=s(i),k=e.pos
e.eatWhile("`")
var v=1+e.pos-k
return i.code?v===F?(i.code=!1,p):(i.formatting=d,s(i)):(F=v,i.code=!0,s(i))}if(i.code)return s(i)
if("!"===h&&e.match(/\[[^\]]*\] ?(?:\(|\[)/,!1))return e.match(/\[[^\]]*\]/),i.inline=i.f=c,y
if("["===h&&e.match(/.*\](\(| ?\[)/,!1))return i.linkText=!0,n.highlightFormatting&&(i.formatting="link"),s(i)
if("]"===h&&i.linkText){n.highlightFormatting&&(i.formatting="link")
var f=s(i)
return i.linkText=!1,i.inline=i.f=c,f}if("<"===h&&e.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/,!1)){i.f=i.inline=g,n.highlightFormatting&&(i.formatting="link")
var f=s(i)
return f?f+=" ":f="",f+j}if("<"===h&&e.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/,!1)){i.f=i.inline=g,n.highlightFormatting&&(i.formatting="link")
var f=s(i)
return f?f+=" ":f="",f+_}if("<"===h&&e.match(/^\w/,!1)){if(-1!=e.string.indexOf(">")){/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(e.string.substring(1,e.string.indexOf(">")))&&(i.md_inside=!0)}return e.backUp(1),i.htmlState=t.startState(S),r(e,i,l)}if("<"===h&&e.match(/^\/\w*?>/))return i.md_inside=!1,"tag"
var x=!1
if(!n.underscoresBreakWords&&"_"===h&&"_"!==e.peek()&&e.match(/(\w)/,!1)){var L=e.pos-2
if(L>=0){var b=e.string.charAt(L)
"_"!==b&&b.match(/(\w)/,!1)&&(x=!0)}}if("*"===h||"_"===h&&!x)if(o&&" "===e.peek());else{if(i.strong===h&&e.eat(h)){n.highlightFormatting&&(i.formatting="strong")
var p=s(i)
return i.strong=!1,p}if(!i.strong&&e.eat(h))return i.strong=h,n.highlightFormatting&&(i.formatting="strong"),s(i)
if(i.em===h){n.highlightFormatting&&(i.formatting="em")
var p=s(i)
return i.em=!1,p}if(!i.em)return i.em=h,n.highlightFormatting&&(i.formatting="em"),s(i)}else if(" "===h&&(e.eat("*")||e.eat("_"))){if(" "===e.peek())return s(i)
e.backUp(1)}return" "===h&&(e.match(/ +$/,!1)?i.trailingSpace++:i.trailingSpace&&(i.trailingSpaceNewLine=!0)),s(i)}function g(t,e){if(">"===t.next()){e.f=e.inline=m,n.highlightFormatting&&(e.formatting="link")
var i=s(e)
return i?i+=" ":i="",i+j}return t.match(/^[^>]+/,!0),j}function c(t,e){if(t.eatSpace())return null
var i=t.next()
return"("===i||"["===i?(e.f=e.inline=u("("===i?")":"]"),n.highlightFormatting&&(e.formatting="link-string"),e.linkHref=!0,s(e)):"error"}function u(t){return function(e,i){if(e.next()===t){i.f=i.inline=m,n.highlightFormatting&&(i.formatting="link-string")
var r=s(i)
return i.linkHref=!1,r}return e.match(v(t),!0)&&e.backUp(1),i.linkHref=!0,s(i)}}function d(t,e){return t.match(/^[^\]]*\]:/,!1)?(e.f=p,t.next(),n.highlightFormatting&&(e.formatting="link"),e.linkText=!0,s(e)):i(t,e,m)}function p(t,e){if(t.match(/^\]:/,!0)){e.f=e.inline=k,n.highlightFormatting&&(e.formatting="link")
var i=s(e)
return e.linkText=!1,i}return t.match(/^[^\]]+/,!0),$}function k(t,e){return t.eatSpace()?null:(t.match(/^[^\s]+/,!0),void 0===t.peek()?e.linkTitle=!0:t.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/,!0),e.f=e.inline=m,E)}function v(t){return G[t]||(t=(t+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1"),G[t]=new RegExp("^(?:[^\\\\]|\\\\.)*?("+t+")")),G[t]}var x=t.modes.hasOwnProperty("xml"),S=t.getMode(e,x?{name:"xml",htmlMode:!0}:"text/plain"),L={html:"htmlmixed",js:"javascript",json:"application/json",c:"text/x-csrc","c++":"text/x-c++src",java:"text/x-java",csharp:"text/x-csharp","c#":"text/x-csharp",scala:"text/x-scala"},b=function(){var n,i,r={},a={},o=[]
for(var l in t.modes)t.modes.propertyIsEnumerable(l)&&o.push(l)
for(n=0;n<o.length;n++)r[o[n]]=o[n]
var h=[]
for(var l in t.mimeModes)t.mimeModes.propertyIsEnumerable(l)&&h.push({mime:l,mode:t.mimeModes[l]})
for(n=0;n<h.length;n++)i=h[n].mime,a[i]=h[n].mime
for(var s in L)(L[s]in r||L[s]in a)&&(r[s]=L[s])
return function(n){return r[n]?t.getMode(e,r[n]):null}}()
void 0===n.highlightFormatting&&(n.highlightFormatting=!1),void 0===n.maxBlockquoteDepth&&(n.maxBlockquoteDepth=0),void 0===n.underscoresBreakWords&&(n.underscoresBreakWords=!0),void 0===n.fencedCodeBlocks&&(n.fencedCodeBlocks=!1),void 0===n.taskLists&&(n.taskLists=!1)
var F=0,M="header",q="comment",w="quote",C="variable-2",D="variable-3",H="keyword",T="hr",y="tag",B="formatting",j="link",_="link",$="link",E="string",N="em",O="strong",W=/^([*\-=_])(?:\s*\1){2,}\s*$/,I=/^[*\-+]\s+/,R=/^[0-9]+\.\s+/,U=/^\[(x| )\](?=\s)/,A=/^#+/,P=/^(?:\={1,}|-{1,})$/,z=/^[^#!\[\]*_\\<>` "'(]+/,G=[],J={startState:function(){return{f:o,prevLineHasContent:!1,thisLineHasContent:!1,block:o,htmlState:null,indentation:0,inline:m,text:f,formatting:!1,linkText:!1,linkHref:!1,linkTitle:!1,em:!1,strong:!1,header:0,taskList:!1,list:!1,listDepth:0,quote:0,trailingSpace:0,trailingSpaceNewLine:!1}},copyState:function(e){return{f:e.f,prevLineHasContent:e.prevLineHasContent,thisLineHasContent:e.thisLineHasContent,block:e.block,htmlState:e.htmlState&&t.copyState(S,e.htmlState),indentation:e.indentation,localMode:e.localMode,localState:e.localMode?t.copyState(e.localMode,e.localState):null,inline:e.inline,text:e.text,formatting:!1,linkTitle:e.linkTitle,em:e.em,strong:e.strong,header:e.header,taskList:e.taskList,list:e.list,listDepth:e.listDepth,quote:e.quote,trailingSpace:e.trailingSpace,trailingSpaceNewLine:e.trailingSpaceNewLine,md_inside:e.md_inside}},token:function(t,e){if(e.formatting=!1,t.sol()){var n=!!e.header
if(e.header=0,t.match(/^\s*$/,!0)||n)return e.prevLineHasContent=!1,a(e),n?this.token(t,e):null
e.prevLineHasContent=e.thisLineHasContent,e.thisLineHasContent=!0,e.taskList=!1,e.code=!1,e.trailingSpace=0,e.trailingSpaceNewLine=!1,e.f=e.block
var i=t.match(/^\s*/,!0)[0].replace(/\t/g,"    ").length,r=4*Math.floor((i-e.indentation)/4)
r>4&&(r=4)
var o=e.indentation+r
if(e.indentationDiff=o-e.indentation,e.indentation=o,i>0)return null}var l=e.f(t,e)
return t.start==t.pos?this.token(t,e):l},innerMode:function(t){return t.block==l?{state:t.htmlState,mode:S}:t.localState?{state:t.localState,mode:t.localMode}:{state:t,mode:J}},blankLine:a,getType:s,fold:"markdown"}
return J},"xml"),t.defineMIME("text/x-markdown","markdown")})
