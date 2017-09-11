(function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror"),require("../htmlmixed/htmlmixed"),require("../smarty/smarty")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../htmlmixed/htmlmixed","../smarty/smarty"],t):t(CodeMirror)})(function(t){"use strict"
t.defineMode("smartymixed",function(e){function l(t){return t.replace(/[^\s\w]/g,"\\$&")}var i=t.getMode(e,"htmlmixed"),a=t.getMode(e,"smarty"),r={rightDelimiter:"}",leftDelimiter:"{"}
e.hasOwnProperty("leftDelimiter")&&(r.leftDelimiter=e.leftDelimiter),e.hasOwnProperty("rightDelimiter")&&(r.rightDelimiter=e.rightDelimiter)
var n=l(r.leftDelimiter),o=l(r.rightDelimiter),m={smartyComment:new RegExp("^"+o+"\\*"),literalOpen:new RegExp(n+"literal"+o),literalClose:new RegExp(n+"/literal"+o),hasLeftDelimeter:new RegExp(".*"+n),htmlHasLeftDelimeter:new RegExp("[^<>]*"+n)},c={chain:function(t,e,l){return e.tokenize=l,l(t,e)},cleanChain:function(t,e,l){return e.tokenize=null,e.localState=null,e.localMode=null,"string"==typeof l?l||null:l(t,e)},maybeBackup:function(t,e,l){var i=t.current(),a=i.search(e)
return a>-1?t.backUp(i.length-a):i.match(/<\/?$/)&&(t.backUp(i.length),t.match(e,!1)||t.match(i[0])),l}},h={html:function(t,e){var l=e.htmlMixedState.htmlState.context&&e.htmlMixedState.htmlState.context.tagName?e.htmlMixedState.htmlState.context.tagName:null
return!e.inLiteral&&t.match(m.htmlHasLeftDelimeter,!1)&&null===l?(e.tokenize=h.smarty,e.localMode=a,e.localState=a.startState(i.indent(e.htmlMixedState,"")),c.maybeBackup(t,r.leftDelimiter,a.token(t,e.localState))):!e.inLiteral&&t.match(r.leftDelimiter,!1)?(e.tokenize=h.smarty,e.localMode=a,e.localState=a.startState(i.indent(e.htmlMixedState,"")),c.maybeBackup(t,r.leftDelimiter,a.token(t,e.localState))):i.token(t,e.htmlMixedState)},smarty:function(t,e){if(t.match(r.leftDelimiter,!1)){if(t.match(m.smartyComment,!1))return c.chain(t,e,h.inBlock("comment","*"+r.rightDelimiter))}else if(t.match(r.rightDelimiter,!1))return t.eat(r.rightDelimiter),e.tokenize=h.html,e.localMode=i,e.localState=e.htmlMixedState,"tag"
return c.maybeBackup(t,r.rightDelimiter,a.token(t,e.localState))},inBlock:function(t,e){return function(l,i){for(;!l.eol();){if(l.match(e)){c.cleanChain(l,i,"")
break}l.next()}return t}}}
return{startState:function(){var t=i.startState()
return{token:h.html,localMode:null,localState:null,htmlMixedState:t,tokenize:null,inLiteral:!1}},copyState:function(e){var l=null,r=e.tokenize||e.token
return e.localState&&(l=t.copyState(r!=h.html?a:i,e.localState)),{token:e.token,tokenize:e.tokenize,localMode:e.localMode,localState:l,htmlMixedState:t.copyState(i,e.htmlMixedState),inLiteral:e.inLiteral}},token:function(t,e){if(t.match(r.leftDelimiter,!1)){if(!e.inLiteral&&t.match(m.literalOpen,!0))return e.inLiteral=!0,"keyword"
if(e.inLiteral&&t.match(m.literalClose,!0))return e.inLiteral=!1,"keyword"}return e.inLiteral&&e.localState!=e.htmlMixedState&&(e.tokenize=h.html,e.localMode=i,e.localState=e.htmlMixedState),(e.tokenize||e.token)(t,e)},indent:function(e,l){return e.localMode==a||e.inLiteral&&!e.localMode||m.hasLeftDelimeter.test(l)?t.Pass:i.indent(e.htmlMixedState,l)},innerMode:function(t){return{state:t.localState||t.htmlMixedState,mode:t.localMode||i}}}},"htmlmixed","smarty"),t.defineMIME("text/x-smarty","smartymixed")})
