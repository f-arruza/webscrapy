(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../python/python"),require("../stex/stex"),require("../../addon/mode/overlay")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../python/python","../stex/stex","../../addon/mode/overlay"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("rst",function(t,a){var c=/^\*\*[^\*\s](?:[^\*]*[^\*\s])?\*\*/,n=/^\*[^\*\s](?:[^\*]*[^\*\s])?\*/,r=/^``[^`\s](?:[^`]*[^`\s])``/,m=/^(?:[\d]+(?:[\.,]\d+)*)/,o=/^(?:\s\+[\d]+(?:[\.,]\d+)*)/,s=/^(?:\s\-[\d]+(?:[\.,]\d+)*)/,h=new RegExp("^[Hh][Tt][Tt][Pp][Ss]?://(?:[\\d\\w.-]+)\\.(?:\\w{2,6})(?:/[\\d\\w\\#\\%\\&\\-\\.\\,\\/\\:\\=\\?\\~]+)*"),l={token:function(e){if(e.match(c)&&e.match(/\W+|$/,!1))return"strong"
if(e.match(n)&&e.match(/\W+|$/,!1))return"em"
if(e.match(r)&&e.match(/\W+|$/,!1))return"string-2"
if(e.match(m))return"number"
if(e.match(o))return"positive"
if(e.match(s))return"negative"
if(e.match(h))return"link"
for(;!(null==e.next()||e.match(c,!1)||e.match(n,!1)||e.match(r,!1)||e.match(m,!1)||e.match(o,!1)||e.match(s,!1)||e.match(h,!1)););return null}},i=e.getMode(t,a.backdrop||"rst-base")
return e.overlayMode(i,l,!0)},"python","stex"),e.defineMode("rst-base",function(t){function a(e){var t=Array.prototype.slice.call(arguments,1)
return e.replace(/{(\d+)}/g,function(e,a){return void 0!==t[a]?t[a]:e})}function c(t,a){var r=null
if(t.sol()&&t.match(Q,!1))l(a,s,{mode:d,local:e.startState(d)})
else if(t.sol()&&t.match(_))l(a,n),r="meta"
else if(t.sol()&&t.match(y))l(a,c),r="header"
else if(p(a)==C||t.match(C,!1))switch(i(a)){case 0:l(a,c,h(C,1)),t.match(/^:/),r="meta"
break
case 1:l(a,c,h(C,2)),t.match(w),r="keyword",t.current().match(/^(?:math|latex)/)&&(a.tmp_stex=!0)
break
case 2:l(a,c,h(C,3)),t.match(/^:`/),r="meta"
break
case 3:if(a.tmp_stex&&(a.tmp_stex=void 0,a.tmp={mode:u,local:e.startState(u)}),a.tmp){if("`"==t.peek()){l(a,c,h(C,4)),a.tmp=void 0
break}r=a.tmp.mode.token(t,a.tmp.local)
break}l(a,c,h(C,4)),t.match(R),r="string"
break
case 4:l(a,c,h(C,5)),t.match(/^`/),r="meta"
break
case 5:l(a,c,h(C,6)),t.match(f)
break
default:l(a,c)}else if(p(a)==H||t.match(H,!1))switch(i(a)){case 0:l(a,c,h(H,1)),t.match(/^`/),r="meta"
break
case 1:l(a,c,h(H,2)),t.match(R),r="string"
break
case 2:l(a,c,h(H,3)),t.match(/^`:/),r="meta"
break
case 3:l(a,c,h(H,4)),t.match(w),r="keyword"
break
case 4:l(a,c,h(H,5)),t.match(/^:/),r="meta"
break
case 5:l(a,c,h(H,6)),t.match(f)
break
default:l(a,c)}else if(p(a)==P||t.match(P,!1))switch(i(a)){case 0:l(a,c,h(P,1)),t.match(/^:/),r="meta"
break
case 1:l(a,c,h(P,2)),t.match(w),r="keyword"
break
case 2:l(a,c,h(P,3)),t.match(/^:/),r="meta"
break
case 3:l(a,c,h(P,4)),t.match(f)
break
default:l(a,c)}else if(p(a)==q||t.match(q,!1))switch(i(a)){case 0:l(a,c,h(q,1)),t.match(D),r="variable-2"
break
case 1:l(a,c,h(q,2)),t.match(/^_?_?/)&&(r="link")
break
default:l(a,c)}else if(t.match(T))l(a,c),r="quote"
else if(t.match(j))l(a,c),r="quote"
else if(t.match(I))l(a,c),t.peek()&&!t.peek().match(/^\W$/)||(r="link")
else if(p(a)==A||t.match(A,!1))switch(i(a)){case 0:!t.peek()||t.peek().match(/^\W$/)?l(a,c,h(A,1)):t.match(A)
break
case 1:l(a,c,h(A,2)),t.match(/^`/),r="link"
break
case 2:l(a,c,h(A,3)),t.match(R)
break
case 3:l(a,c,h(A,4)),t.match(/^`_/),r="link"
break
default:l(a,c)}else t.match(O)?l(a,m):t.next()&&l(a,c)
return r}function n(t,a){var m=null
if(p(a)==S||t.match(S,!1))switch(i(a)){case 0:l(a,n,h(S,1)),t.match(D),m="variable-2"
break
case 1:l(a,n,h(S,2)),t.match(F)
break
case 2:l(a,n,h(S,3)),t.match(G),m="keyword"
break
case 3:l(a,n,h(S,4)),t.match(J),m="meta"
break
default:l(a,c)}else if(p(a)==$||t.match($,!1))switch(i(a)){case 0:l(a,n,h($,1)),t.match(z),m="keyword",t.current().match(/^(?:math|latex)/)?a.tmp_stex=!0:t.current().match(/^python/)&&(a.tmp_py=!0)
break
case 1:l(a,n,h($,2)),t.match(B),m="meta",(t.match(/^latex\s*$/)||a.tmp_stex)&&(a.tmp_stex=void 0,l(a,s,{mode:u,local:e.startState(u)}))
break
case 2:l(a,n,h($,3)),(t.match(/^python\s*$/)||a.tmp_py)&&(a.tmp_py=void 0,l(a,s,{mode:d,local:e.startState(d)}))
break
default:l(a,c)}else if(p(a)==v||t.match(v,!1))switch(i(a)){case 0:l(a,n,h(v,1)),t.match(K),t.match(L),m="link"
break
case 1:l(a,n,h(v,2)),t.match(N),m="meta"
break
default:l(a,c)}else t.match(M)?(l(a,c),m="quote"):t.match(W)?(l(a,c),m="quote"):(t.eatSpace(),t.eol()?l(a,c):(t.skipToEnd(),l(a,r),m="comment"))
return m}function r(e,t){return o(e,t,"comment")}function m(e,t){return o(e,t,"meta")}function o(e,t,a){return e.eol()||e.eatSpace()?(e.skipToEnd(),a):(l(t,c),null)}function s(e,t){return t.ctx.mode&&t.ctx.local?e.sol()?(e.eatSpace()||l(t,c),null):t.ctx.mode.token(e,t.ctx.local):(l(t,c),null)}function h(e,t,a,c){return{phase:e,stage:t,mode:a,local:c}}function l(e,t,a){e.tok=t,e.ctx=a||{}}function i(e){return e.ctx.stage||0}function p(e){return e.ctx.phase}var d=e.getMode(t,"python"),u=e.getMode(t,"stex"),x="(?:\\s*|\\W|$)",f=new RegExp(a("^{0}",x)),k="(?:[^\\W\\d_](?:[\\w!\"#$%&'()\\*\\+,\\-\\./:;<=>\\?]*[^\\W_])?)",w=new RegExp(a("^{0}",k)),b=a("(?:{0}|`{1}`)",k,"(?:[^\\W\\d_](?:[\\w\\s!\"#$%&'()\\*\\+,\\-\\./:;<=>\\?]*[^\\W_])?)"),g="(?:[^\\s\\|](?:[^\\|]*[^\\s\\|])?)",E="(?:[^\\`]+)",R=new RegExp(a("^{0}",E)),y=new RegExp("^([!'#$%&\"()*+,-./:;<=>?@\\[\\\\\\]^_`{|}~])\\1{3,}\\s*$"),_=new RegExp(a("^\\.\\.{0}","\\s+")),v=new RegExp(a("^_{0}:{1}|^__:{1}",b,x)),$=new RegExp(a("^{0}::{1}",b,x)),S=new RegExp(a("^\\|{0}\\|{1}{2}::{3}",g,"\\s+",b,x)),M=new RegExp(a("^\\[(?:\\d+|#{0}?|\\*)]{1}",b,x)),W=new RegExp(a("^\\[{0}\\]{1}",b,x)),q=new RegExp(a("^\\|{0}\\|",g)),T=new RegExp(a("^\\[(?:\\d+|#{0}?|\\*)]_",b)),j=new RegExp(a("^\\[{0}\\]_",b)),I=new RegExp(a("^{0}__?",b)),A=new RegExp(a("^`{0}`_",E)),C=new RegExp(a("^:{0}:`{1}`{2}",k,E,x)),H=new RegExp(a("^`{1}`:{0}:{2}",k,E,x)),P=new RegExp(a("^:{0}:{1}",k,x)),z=new RegExp(a("^{0}",b)),B=new RegExp(a("^::{0}",x)),D=new RegExp(a("^\\|{0}\\|",g)),F=new RegExp(a("^{0}","\\s+")),G=new RegExp(a("^{0}",b)),J=new RegExp(a("^::{0}",x)),K=new RegExp("^_"),L=new RegExp(a("^{0}|_",b)),N=new RegExp(a("^:{0}",x)),O=new RegExp("^::\\s*$"),Q=new RegExp("^\\s+(?:>>>|In \\[\\d+\\]:)\\s")
return{startState:function(){return{tok:c,ctx:h(void 0,0)}},copyState:function(t){var a=t.ctx,c=t.tmp
return a.local&&(a={mode:a.mode,local:e.copyState(a.mode,a.local)}),c&&(c={mode:c.mode,local:e.copyState(c.mode,c.local)}),{tok:t.tok,ctx:a,tmp:c}},innerMode:function(e){return e.tmp?{state:e.tmp.local,mode:e.tmp.mode}:e.ctx.mode?{state:e.ctx.local,mode:e.ctx.mode}:null},token:function(e,t){return t.tok(e,t)}}},"python","stex"),e.defineMIME("text/x-rst","rst")})
