(function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror"),require("../xml/xml"),require("../javascript/javascript"),require("../css/css")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../xml/xml","../javascript/javascript","../css/css"],t):t(CodeMirror)})(function(t){"use strict"
t.defineMode("htmlmixed",function(e,a){function o(t,e){var a=e.htmlState.tagName
a&&(a=a.toLowerCase())
var o=r.token(t,e.htmlState)
if("script"==a&&/\btag\b/.test(o)&&">"==t.current()){var l=t.string.slice(Math.max(0,t.pos-100),t.pos).match(/\btype\s*=\s*("[^"]+"|'[^']+'|\S+)[^<]*$/i)
l=l?l[1]:"",l&&/[\"\']/.test(l.charAt(0))&&(l=l.slice(1,l.length-1))
for(var m=0;m<i.length;++m){var d=i[m]
if("string"==typeof d.matches?l==d.matches:d.matches.test(l)){d.mode&&(e.token=n,e.localMode=d.mode,e.localState=d.mode.startState&&d.mode.startState(r.indent(e.htmlState,"")))
break}}}else"style"==a&&/\btag\b/.test(o)&&">"==t.current()&&(e.token=c,e.localMode=s,e.localState=s.startState(r.indent(e.htmlState,"")))
return o}function l(t,e,a){var o=t.current(),l=o.search(e)
return l>-1?t.backUp(o.length-l):o.match(/<\/?$/)&&(t.backUp(o.length),t.match(e,!1)||t.match(o)),a}function n(t,e){return t.match(/^<\/\s*script\s*>/i,!1)?(e.token=o,e.localState=e.localMode=null,o(t,e)):l(t,/<\/\s*script\s*>/,e.localMode.token(t,e.localState))}function c(t,e){return t.match(/^<\/\s*style\s*>/i,!1)?(e.token=o,e.localState=e.localMode=null,o(t,e)):l(t,/<\/\s*style\s*>/,s.token(t,e.localState))}var r=t.getMode(e,{name:"xml",htmlMode:!0,multilineTagIndentFactor:a.multilineTagIndentFactor,multilineTagIndentPastTag:a.multilineTagIndentPastTag}),s=t.getMode(e,"css"),i=[],m=a&&a.scriptTypes
if(i.push({matches:/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^$/i,mode:t.getMode(e,"javascript")}),m)for(var d=0;d<m.length;++d){var u=m[d]
i.push({matches:u.matches,mode:u.mode&&t.getMode(e,u.mode)})}return i.push({matches:/./,mode:t.getMode(e,"text/plain")}),{startState:function(){return{token:o,localMode:null,localState:null,htmlState:r.startState()}},copyState:function(e){if(e.localState)var a=t.copyState(e.localMode,e.localState)
return{token:e.token,localMode:e.localMode,localState:a,htmlState:t.copyState(r,e.htmlState)}},token:function(t,e){return e.token(t,e)},indent:function(e,a){return!e.localMode||/^\s*<\//.test(a)?r.indent(e.htmlState,a):e.localMode.indent?e.localMode.indent(e.localState,a):t.Pass},innerMode:function(t){return{state:t.localState||t.htmlState,mode:t.localMode||r}}}},"xml","javascript","css"),t.defineMIME("text/html","htmlmixed")})
