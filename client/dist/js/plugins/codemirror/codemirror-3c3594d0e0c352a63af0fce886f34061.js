(function(e){if("object"==typeof exports&&"object"==typeof module)module.exports=e()
else{if("function"==typeof define&&define.amd)return define([],e)
this.CodeMirror=e()}})(function(){"use strict"
function e(r,n){if(!(this instanceof e))return new e(r,n)
this.options=n=n?gi(n):{},gi(Do,n,!1),p(n)
var i=n.value
"string"==typeof i&&(i=new nl(i,n.mode)),this.doc=i
var o=this.display=new t(r,i)
o.wrapper.CodeMirror=this,c(this),a(this),n.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),n.autofocus&&!uo&&kt(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,focused:!1,suppressEdits:!1,pasteIncoming:!1,cutIncoming:!1,draggingText:!1,highlight:new ai},Qi&&Ji<11&&setTimeout(vi(St,this,!0),20),Nt(this),Ai(),Je(this),this.curOp.forceUpdate=!0,Hn(this,i),n.autofocus&&!uo||Si()==o.input?setTimeout(vi(Zt,this),20):Qt(this)
for(var l in Io)Io.hasOwnProperty(l)&&Io[l](this,n[l],Eo)
w(this)
for(var s=0;s<Fo.length;++s)Fo[s](this)
tt(this)}function t(e,t){var r=this,n=r.input=wi("textarea",null,null,"position: absolute; padding: 0; width: 1px; height: 1em; outline: none")
eo?n.style.width="1000px":n.setAttribute("wrap","off"),ao&&(n.style.border="1px solid black"),n.setAttribute("autocorrect","off"),n.setAttribute("autocapitalize","off"),n.setAttribute("spellcheck","false"),r.inputDiv=wi("div",[n],null,"overflow: hidden; position: relative; width: 3px; height: 0px;"),r.scrollbarH=wi("div",[wi("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar"),r.scrollbarV=wi("div",[wi("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),r.scrollbarFiller=wi("div",null,"CodeMirror-scrollbar-filler"),r.gutterFiller=wi("div",null,"CodeMirror-gutter-filler"),r.lineDiv=wi("div",null,"CodeMirror-code"),r.selectionDiv=wi("div",null,null,"position: relative; z-index: 1"),r.cursorDiv=wi("div",null,"CodeMirror-cursors"),r.measure=wi("div",null,"CodeMirror-measure"),r.lineMeasure=wi("div",null,"CodeMirror-measure"),r.lineSpace=wi("div",[r.measure,r.lineMeasure,r.selectionDiv,r.cursorDiv,r.lineDiv],null,"position: relative; outline: none"),r.mover=wi("div",[wi("div",[r.lineSpace],"CodeMirror-lines")],null,"position: relative"),r.sizer=wi("div",[r.mover],"CodeMirror-sizer"),r.heightForcer=wi("div",null,null,"position: absolute; height: "+dl+"px; width: 1px;"),r.gutters=wi("div",null,"CodeMirror-gutters"),r.lineGutter=null,r.scroller=wi("div",[r.sizer,r.heightForcer,r.gutters],"CodeMirror-scroll"),r.scroller.setAttribute("tabIndex","-1"),r.wrapper=wi("div",[r.inputDiv,r.scrollbarH,r.scrollbarV,r.scrollbarFiller,r.gutterFiller,r.scroller],"CodeMirror"),Qi&&Ji<8&&(r.gutters.style.zIndex=-1,r.scroller.style.paddingRight=0),ao&&(n.style.width="0px"),eo||(r.scroller.draggable=!0),oo&&(r.inputDiv.style.height="1px",r.inputDiv.style.position="absolute"),Qi&&Ji<8&&(r.scrollbarH.style.minHeight=r.scrollbarV.style.minWidth="18px"),e.appendChild?e.appendChild(r.wrapper):e(r.wrapper)
r.viewFrom=r.viewTo=t.first,r.view=[],r.externalMeasured=null,r.viewOffset=0,r.lastSizeC=0,r.updateLineNumbers=null,r.lineNumWidth=r.lineNumInnerWidth=r.lineNumChars=null,r.prevInput="",r.alignWidgets=!1,r.pollingFast=!1,r.poll=new ai,r.cachedCharWidth=r.cachedTextHeight=r.cachedPaddingH=null,r.inaccurateSelection=!1,r.maxLine=null,r.maxLineLength=0,r.maxLineChanged=!1,r.wheelDX=r.wheelDY=r.wheelStartX=r.wheelStartY=null,r.shift=!1,r.selForContextMenu=null}function r(t){t.doc.mode=e.getMode(t.options,t.doc.modeOption),n(t)}function n(e){e.doc.iter(function(e){e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null)}),e.doc.frontier=e.doc.first,Ce(e,100),e.state.modeGen++,e.curOp&&pt(e)}function i(e){e.options.lineWrapping?(Ti(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth=""):(Mi(e.display.wrapper,"CodeMirror-wrap"),d(e)),l(e),pt(e),Be(e),setTimeout(function(){m(e)},100)}function o(e){var t=Ze(e.display),r=e.options.lineWrapping,n=r&&Math.max(5,e.display.scroller.clientWidth/Qe(e.display)-3)
return function(i){if(tn(e.doc,i))return 0
var o=0
if(i.widgets)for(var l=0;l<i.widgets.length;l++)i.widgets[l].height&&(o+=i.widgets[l].height)
return r?o+(Math.ceil(i.text.length/n)||1)*t:o+t}}function l(e){var t=e.doc,r=o(e)
t.iter(function(e){var t=r(e)
t!=e.height&&Dn(e,t)})}function s(e){var t=Ko[e.options.keyMap],r=t.style
e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-keymap-\S+/g,"")+(r?" cm-keymap-"+r:"")}function a(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),Be(e)}function u(e){c(e),pt(e),setTimeout(function(){b(e)},20)}function c(e){var t=e.display.gutters,r=e.options.gutters
xi(t)
for(var n=0;n<r.length;++n){var i=r[n],o=t.appendChild(wi("div",null,"CodeMirror-gutter "+i))
"CodeMirror-linenumbers"==i&&(e.display.lineGutter=o,o.style.width=(e.display.lineNumWidth||1)+"px")}t.style.display=n?"":"none",f(e)}function f(e){var t=e.display.gutters.offsetWidth
e.display.sizer.style.marginLeft=t+"px",e.display.scrollbarH.style.left=e.options.fixedGutter?t+"px":0}function h(e){if(0==e.height)return 0
for(var t,r=e.text.length,n=e;t=Yr(n);){var i=t.find(0,!0)
n=i.from.line,r+=i.from.ch-i.to.ch}for(n=e;t=$r(n);){var i=t.find(0,!0)
r-=n.text.length-i.from.ch,n=i.to.line,r+=n.text.length-i.to.ch}return r}function d(e){var t=e.display,r=e.doc
t.maxLine=An(r,r.first),t.maxLineLength=h(t.maxLine),t.maxLineChanged=!0,r.iter(function(e){var r=h(e)
r>t.maxLineLength&&(t.maxLineLength=r,t.maxLine=e)})}function p(e){var t=hi(e.gutters,"CodeMirror-linenumbers");-1==t&&e.lineNumbers?e.gutters=e.gutters.concat(["CodeMirror-linenumbers"]):t>-1&&!e.lineNumbers&&(e.gutters=e.gutters.slice(0),e.gutters.splice(t,1))}function g(e){return e.display.scroller.clientHeight-e.display.wrapper.clientHeight<dl-3}function v(e){var t=e.display.scroller
return{clientHeight:t.clientHeight,barHeight:e.display.scrollbarV.clientHeight,scrollWidth:t.scrollWidth,clientWidth:t.clientWidth,hScrollbarTakesSpace:g(e),barWidth:e.display.scrollbarH.clientWidth,docHeight:Math.round(e.doc.height+Te(e.display))}}function m(e,t){t||(t=v(e))
var r=e.display,n=Wi(r.measure),i=t.docHeight+dl,o=t.scrollWidth>t.clientWidth
o&&t.scrollWidth<=t.clientWidth+1&&n>0&&!t.hScrollbarTakesSpace&&(o=!1)
var l=i>t.clientHeight
if(l?(r.scrollbarV.style.display="block",r.scrollbarV.style.bottom=o?n+"px":"0",r.scrollbarV.firstChild.style.height=Math.max(0,i-t.clientHeight+(t.barHeight||r.scrollbarV.clientHeight))+"px"):(r.scrollbarV.style.display="",r.scrollbarV.firstChild.style.height="0"),o?(r.scrollbarH.style.display="block",r.scrollbarH.style.right=l?n+"px":"0",r.scrollbarH.firstChild.style.width=t.scrollWidth-t.clientWidth+(t.barWidth||r.scrollbarH.clientWidth)+"px"):(r.scrollbarH.style.display="",r.scrollbarH.firstChild.style.width="0"),o&&l?(r.scrollbarFiller.style.display="block",r.scrollbarFiller.style.height=r.scrollbarFiller.style.width=n+"px"):r.scrollbarFiller.style.display="",o&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(r.gutterFiller.style.display="block",r.gutterFiller.style.height=n+"px",r.gutterFiller.style.width=r.gutters.offsetWidth+"px"):r.gutterFiller.style.display="",!e.state.checkedOverlayScrollbar&&t.clientHeight>0){if(0===n){var s=co&&!lo?"12px":"18px"
r.scrollbarV.style.minWidth=r.scrollbarH.style.minHeight=s
var a=function(t){ei(t)!=r.scrollbarV&&ei(t)!=r.scrollbarH&&ut(e,Wt)(t)}
ul(r.scrollbarV,"mousedown",a),ul(r.scrollbarH,"mousedown",a)}e.state.checkedOverlayScrollbar=!0}}function y(e,t,r){var n=r&&null!=r.top?Math.max(0,r.top):e.scroller.scrollTop
n=Math.floor(n-Me(e))
var i=r&&null!=r.bottom?r.bottom:n+e.wrapper.clientHeight,o=En(t,n),l=En(t,i)
if(r&&r.ensure){var s=r.ensure.from.line,a=r.ensure.to.line
if(s<o)return{from:s,to:En(t,Pn(An(t,s))+e.wrapper.clientHeight)}
if(Math.min(a,t.lastLine())>=l)return{from:En(t,Pn(An(t,a))-e.wrapper.clientHeight),to:a}}return{from:o,to:Math.max(l,o+1)}}function b(e){var t=e.display,r=t.view
if(t.alignWidgets||t.gutters.firstChild&&e.options.fixedGutter){for(var n=C(t)-t.scroller.scrollLeft+e.doc.scrollLeft,i=t.gutters.offsetWidth,o=n+"px",l=0;l<r.length;l++)if(!r[l].hidden){e.options.fixedGutter&&r[l].gutter&&(r[l].gutter.style.left=o)
var s=r[l].alignable
if(s)for(var a=0;a<s.length;a++)s[a].style.left=o}e.options.fixedGutter&&(t.gutters.style.left=n+i+"px")}}function w(e){if(!e.options.lineNumbers)return!1
var t=e.doc,r=x(e.options,t.first+t.size-1),n=e.display
if(r.length!=n.lineNumChars){var i=n.measure.appendChild(wi("div",[wi("div",r)],"CodeMirror-linenumber CodeMirror-gutter-elt")),o=i.firstChild.offsetWidth,l=i.offsetWidth-o
return n.lineGutter.style.width="",n.lineNumInnerWidth=Math.max(o,n.lineGutter.offsetWidth-l),n.lineNumWidth=n.lineNumInnerWidth+l,n.lineNumChars=n.lineNumInnerWidth?r.length:-1,n.lineGutter.style.width=n.lineNumWidth+"px",f(e),!0}return!1}function x(e,t){return String(e.lineNumberFormatter(t+e.firstLineNumber))}function C(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function L(e,t,r){var n=e.display
this.viewport=t,this.visible=y(n,e.doc,t),this.editorIsHidden=!n.wrapper.offsetWidth,this.wrapperHeight=n.wrapper.clientHeight,this.oldViewFrom=n.viewFrom,this.oldViewTo=n.viewTo,this.oldScrollerWidth=n.scroller.clientWidth,this.force=r,this.dims=O(e)}function S(e,t){var r=e.display,n=e.doc
if(t.editorIsHidden)return vt(e),!1
if(!t.force&&t.visible.from>=r.viewFrom&&t.visible.to<=r.viewTo&&(null==r.updateLineNumbers||r.updateLineNumbers>=r.viewTo)&&0==wt(e))return!1
w(e)&&(vt(e),t.dims=O(e))
var i=n.first+n.size,o=Math.max(t.visible.from-e.options.viewportMargin,n.first),l=Math.min(i,t.visible.to+e.options.viewportMargin)
r.viewFrom<o&&o-r.viewFrom<20&&(o=Math.max(n.first,r.viewFrom)),r.viewTo>l&&r.viewTo-l<20&&(l=Math.min(i,r.viewTo)),mo&&(o=Jr(e.doc,o),l=en(e.doc,l))
var s=o!=r.viewFrom||l!=r.viewTo||r.lastSizeC!=t.wrapperHeight
bt(e,o,l),r.viewOffset=Pn(An(e.doc,r.viewFrom)),e.display.mover.style.top=r.viewOffset+"px"
var a=wt(e)
if(!s&&0==a&&!t.force&&(null==r.updateLineNumbers||r.updateLineNumbers>=r.viewTo))return!1
var u=Si()
return a>4&&(r.lineDiv.style.display="none"),W(e,r.updateLineNumbers,t.dims),a>4&&(r.lineDiv.style.display=""),u&&Si()!=u&&u.offsetHeight&&u.focus(),xi(r.cursorDiv),xi(r.selectionDiv),s&&(r.lastSizeC=t.wrapperHeight,Ce(e,400)),r.updateLineNumbers=null,!0}function k(e,t){for(var r=(t.force,t.viewport),n=!0;;n=!1){if(n&&e.options.lineWrapping&&t.oldScrollerWidth!=e.display.scroller.clientWidth)!0
else if(!1,r&&null!=r.top&&(r={top:Math.min(e.doc.height+Te(e.display)-dl-e.display.scroller.clientHeight,r.top)}),t.visible=y(e.display,e.doc,r),t.visible.from>=e.display.viewFrom&&t.visible.to<=e.display.viewTo)break
if(!S(e,t))break
H(e)
var i=v(e)
ye(e),T(e,i),m(e,i)}ri(e,"update",e),e.display.viewFrom==t.oldViewFrom&&e.display.viewTo==t.oldViewTo||ri(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo)}function M(e,t){var r=new L(e,t)
if(S(e,r)){H(e),k(e,r)
var n=v(e)
ye(e),T(e,n),m(e,n)}}function T(e,t){e.display.sizer.style.minHeight=e.display.heightForcer.style.top=t.docHeight+"px",e.display.gutters.style.height=Math.max(t.docHeight,t.clientHeight-dl)+"px"}function N(e,t){e.display.sizer.offsetWidth+e.display.gutters.offsetWidth<e.display.scroller.clientWidth-1&&(e.display.sizer.style.minHeight=e.display.heightForcer.style.top="0px",e.display.gutters.style.height=t.docHeight+"px")}function H(e){for(var t=e.display,r=t.lineDiv.offsetTop,n=0;n<t.view.length;n++){var i,o=t.view[n]
if(!o.hidden){if(Qi&&Ji<8){var l=o.node.offsetTop+o.node.offsetHeight
i=l-r,r=l}else{var s=o.node.getBoundingClientRect()
i=s.bottom-s.top}var a=o.line.height-i
if(i<2&&(i=Ze(t)),(a>.001||a<-.001)&&(Dn(o.line,i),A(o.line),o.rest))for(var u=0;u<o.rest.length;u++)A(o.rest[u])}}}function A(e){if(e.widgets)for(var t=0;t<e.widgets.length;++t)e.widgets[t].height=e.widgets[t].node.offsetHeight}function O(e){for(var t=e.display,r={},n={},i=t.gutters.clientLeft,o=t.gutters.firstChild,l=0;o;o=o.nextSibling,++l)r[e.options.gutters[l]]=o.offsetLeft+o.clientLeft+i,n[e.options.gutters[l]]=o.clientWidth
return{fixedPos:C(t),gutterTotalWidth:t.gutters.offsetWidth,gutterLeft:r,gutterWidth:n,wrapperWidth:t.wrapper.clientWidth}}function W(e,t,r){function n(t){var r=t.nextSibling
return eo&&co&&e.display.currentWheelTarget==t?t.style.display="none":t.parentNode.removeChild(t),r}for(var i=e.display,o=e.options.lineNumbers,l=i.lineDiv,s=l.firstChild,a=i.view,u=i.viewFrom,c=0;c<a.length;c++){var f=a[c]
if(f.hidden);else if(f.node){for(;s!=f.node;)s=n(s)
var h=o&&null!=t&&t<=u&&f.lineNumber
f.changes&&(hi(f.changes,"gutter")>-1&&(h=!1),D(e,f,u,r)),h&&(xi(f.lineNumber),f.lineNumber.appendChild(document.createTextNode(x(e.options,u)))),s=f.node.nextSibling}else{var d=G(e,f,u,r)
l.insertBefore(d,s)}u+=f.size}for(;s;)s=n(s)}function D(e,t,r,n){for(var i=0;i<t.changes.length;i++){var o=t.changes[i]
"text"==o?z(e,t):"gutter"==o?F(e,t,r,n):"class"==o?R(t):"widget"==o&&B(t,n)}t.changes=null}function I(e){return e.node==e.text&&(e.node=wi("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),Qi&&Ji<8&&(e.node.style.zIndex=2)),e.node}function E(e){var t=e.bgClass?e.bgClass+" "+(e.line.bgClass||""):e.line.bgClass
if(t&&(t+=" CodeMirror-linebackground"),e.background)t?e.background.className=t:(e.background.parentNode.removeChild(e.background),e.background=null)
else if(t){var r=I(e)
e.background=r.insertBefore(wi("div",null,t),r.firstChild)}}function P(e,t){var r=e.display.externalMeasured
return r&&r.line==t.line?(e.display.externalMeasured=null,t.measure=r.measure,r.built):mn(e,t)}function z(e,t){var r=t.text.className,n=P(e,t)
t.text==t.node&&(t.node=n.pre),t.text.parentNode.replaceChild(n.pre,t.text),t.text=n.pre,n.bgClass!=t.bgClass||n.textClass!=t.textClass?(t.bgClass=n.bgClass,t.textClass=n.textClass,R(t)):r&&(t.text.className=r)}function R(e){E(e),e.line.wrapClass?I(e).className=e.line.wrapClass:e.node!=e.text&&(e.node.className="")
var t=e.textClass?e.textClass+" "+(e.line.textClass||""):e.line.textClass
e.text.className=t||""}function F(e,t,r,n){t.gutter&&(t.node.removeChild(t.gutter),t.gutter=null)
var i=t.line.gutterMarkers
if(e.options.lineNumbers||i){var o=I(t),l=t.gutter=o.insertBefore(wi("div",null,"CodeMirror-gutter-wrapper","position: absolute; left: "+(e.options.fixedGutter?n.fixedPos:-n.gutterTotalWidth)+"px"),t.text)
if(!e.options.lineNumbers||i&&i["CodeMirror-linenumbers"]||(t.lineNumber=l.appendChild(wi("div",x(e.options,r),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+n.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),i)for(var s=0;s<e.options.gutters.length;++s){var a=e.options.gutters[s],u=i.hasOwnProperty(a)&&i[a]
u&&l.appendChild(wi("div",[u],"CodeMirror-gutter-elt","left: "+n.gutterLeft[a]+"px; width: "+n.gutterWidth[a]+"px"))}}}function B(e,t){e.alignable&&(e.alignable=null)
for(var r,n=e.node.firstChild;n;n=r){var r=n.nextSibling
"CodeMirror-linewidget"==n.className&&e.node.removeChild(n)}V(e,t)}function G(e,t,r,n){var i=P(e,t)
return t.text=t.node=i.pre,i.bgClass&&(t.bgClass=i.bgClass),i.textClass&&(t.textClass=i.textClass),R(t),F(e,t,r,n),V(t,n),t.node}function V(e,t){if(U(e.line,e,t,!0),e.rest)for(var r=0;r<e.rest.length;r++)U(e.rest[r],e,t,!1)}function U(e,t,r,n){if(e.widgets)for(var i=I(t),o=0,l=e.widgets;o<l.length;++o){var s=l[o],a=wi("div",[s.node],"CodeMirror-linewidget")
s.handleMouseEvents||(a.ignoreEvents=!0),K(s,a,t,r),n&&s.above?i.insertBefore(a,t.gutter||t.text):i.appendChild(a),ri(s,"redraw")}}function K(e,t,r,n){if(e.noHScroll){(r.alignable||(r.alignable=[])).push(t)
var i=n.wrapperWidth
t.style.left=n.fixedPos+"px",e.coverGutter||(i-=n.gutterTotalWidth,t.style.paddingLeft=n.gutterTotalWidth+"px"),t.style.width=i+"px"}e.coverGutter&&(t.style.zIndex=5,t.style.position="relative",e.noHScroll||(t.style.marginLeft=-n.gutterTotalWidth+"px"))}function X(e){return yo(e.line,e.ch)}function _(e,t){return bo(e,t)<0?t:e}function j(e,t){return bo(e,t)<0?e:t}function Y(e,t){this.ranges=e,this.primIndex=t}function $(e,t){this.anchor=e,this.head=t}function q(e,t){var r=e[t]
e.sort(function(e,t){return bo(e.from(),t.from())}),t=hi(e,r)
for(var n=1;n<e.length;n++){var i=e[n],o=e[n-1]
if(bo(o.to(),i.from())>=0){var l=j(o.from(),i.from()),s=_(o.to(),i.to()),a=o.empty()?i.from()==i.head:o.from()==o.head
n<=t&&--t,e.splice(--n,2,new $(a?s:l,a?l:s))}}return new Y(e,t)}function Z(e,t){return new Y([new $(e,t||e)],0)}function Q(e,t){return Math.max(e.first,Math.min(t,e.first+e.size-1))}function J(e,t){if(t.line<e.first)return yo(e.first,0)
var r=e.first+e.size-1
return t.line>r?yo(r,An(e,r).text.length):ee(t,An(e,t.line).text.length)}function ee(e,t){var r=e.ch
return null==r||r>t?yo(e.line,t):r<0?yo(e.line,0):e}function te(e,t){return t>=e.first&&t<e.first+e.size}function re(e,t){for(var r=[],n=0;n<t.length;n++)r[n]=J(e,t[n])
return r}function ne(e,t,r,n){if(e.cm&&e.cm.display.shift||e.extend){var i=t.anchor
if(n){var o=bo(r,i)<0
o!=bo(n,i)<0?(i=r,r=n):o!=bo(r,n)<0&&(r=n)}return new $(i,r)}return new $(n||r,r)}function ie(e,t,r,n){ce(e,new Y([ne(e,e.sel.primary(),t,r)],0),n)}function oe(e,t,r){for(var n=[],i=0;i<e.sel.ranges.length;i++)n[i]=ne(e,e.sel.ranges[i],t[i],null)
ce(e,q(n,e.sel.primIndex),r)}function le(e,t,r,n){var i=e.sel.ranges.slice(0)
i[t]=r,ce(e,q(i,e.sel.primIndex),n)}function se(e,t,r,n){ce(e,Z(t,r),n)}function ae(e,t){var r={ranges:t.ranges,update:function(t){this.ranges=[]
for(var r=0;r<t.length;r++)this.ranges[r]=new $(J(e,t[r].anchor),J(e,t[r].head))}}
return fl(e,"beforeSelectionChange",e,r),e.cm&&fl(e.cm,"beforeSelectionChange",e.cm,r),r.ranges!=t.ranges?q(r.ranges,r.ranges.length-1):t}function ue(e,t,r){var n=e.history.done,i=fi(n)
i&&i.ranges?(n[n.length-1]=t,fe(e,t,r)):ce(e,t,r)}function ce(e,t,r){fe(e,t,r),Kn(e,e.sel,e.cm?e.cm.curOp.id:NaN,r)}function fe(e,t,r){(li(e,"beforeSelectionChange")||e.cm&&li(e.cm,"beforeSelectionChange"))&&(t=ae(e,t)),he(e,pe(e,t,r&&r.bias||(bo(t.primary().head,e.sel.primary().head)<0?-1:1),!0)),r&&!1===r.scroll||!e.cm||yr(e.cm)}function he(e,t){t.equals(e.sel)||(e.sel=t,e.cm&&(e.cm.curOp.updateInput=e.cm.curOp.selectionChanged=!0,oi(e.cm)),ri(e,"cursorActivity",e))}function de(e){he(e,pe(e,e.sel,null,!1),gl)}function pe(e,t,r,n){for(var i,o=0;o<t.ranges.length;o++){var l=t.ranges[o],s=ge(e,l.anchor,r,n),a=ge(e,l.head,r,n);(i||s!=l.anchor||a!=l.head)&&(i||(i=t.ranges.slice(0,o)),i[o]=new $(s,a))}return i?q(i,t.primIndex):t}function ge(e,t,r,n){var i=!1,o=t,l=r||1
e.cantEdit=!1
e:for(;;){var s=An(e,o.line)
if(s.markedSpans)for(var a=0;a<s.markedSpans.length;++a){var u=s.markedSpans[a],c=u.marker
if((null==u.from||(c.inclusiveLeft?u.from<=o.ch:u.from<o.ch))&&(null==u.to||(c.inclusiveRight?u.to>=o.ch:u.to>o.ch))){if(n&&(fl(c,"beforeCursorEnter"),c.explicitlyCleared)){if(s.markedSpans){--a
continue}break}if(!c.atomic)continue
var f=c.find(l<0?-1:1)
if(0==bo(f,o)&&(f.ch+=l,f.ch<0?f=f.line>e.first?J(e,yo(f.line-1)):null:f.ch>s.text.length&&(f=f.line<e.first+e.size-1?yo(f.line+1,0):null),!f)){if(i)return n?(e.cantEdit=!0,yo(e.first,0)):ge(e,t,r,!0)
i=!0,f=t,l=-l}o=f
continue e}}return o}}function ve(e){for(var t=e.display,r=e.doc,n={},i=n.cursors=document.createDocumentFragment(),o=n.selection=document.createDocumentFragment(),l=0;l<r.sel.ranges.length;l++){var s=r.sel.ranges[l],a=s.empty();(a||e.options.showCursorWhenSelecting)&&be(e,s,i),a||we(e,s,o)}if(e.options.moveInputWithCursor){var u=_e(e,r.sel.primary().head,"div"),c=t.wrapper.getBoundingClientRect(),f=t.lineDiv.getBoundingClientRect()
n.teTop=Math.max(0,Math.min(t.wrapper.clientHeight-10,u.top+f.top-c.top)),n.teLeft=Math.max(0,Math.min(t.wrapper.clientWidth-10,u.left+f.left-c.left))}return n}function me(e,t){Ci(e.display.cursorDiv,t.cursors),Ci(e.display.selectionDiv,t.selection),null!=t.teTop&&(e.display.inputDiv.style.top=t.teTop+"px",e.display.inputDiv.style.left=t.teLeft+"px")}function ye(e){me(e,ve(e))}function be(e,t,r){var n=_e(e,t.head,"div",null,null,!e.options.singleCursorHeightPerLine),i=r.appendChild(wi("div"," ","CodeMirror-cursor"))
if(i.style.left=n.left+"px",i.style.top=n.top+"px",i.style.height=Math.max(0,n.bottom-n.top)*e.options.cursorHeight+"px",n.other){var o=r.appendChild(wi("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"))
o.style.display="",o.style.left=n.other.left+"px",o.style.top=n.other.top+"px",o.style.height=.85*(n.other.bottom-n.other.top)+"px"}}function we(e,t,r){function n(e,t,r,n){t<0&&(t=0),t=Math.round(t),n=Math.round(n),s.appendChild(wi("div",null,"CodeMirror-selected","position: absolute; left: "+e+"px; top: "+t+"px; width: "+(null==r?c-e:r)+"px; height: "+(n-t)+"px"))}function i(t,r,i){function o(r,n){return Xe(e,yo(t,r),"div",f,n)}var s,a,f=An(l,t),h=f.text.length
return Pi(zn(f),r||0,null==i?h:i,function(e,t,l){var f,d,p,g=o(e,"left")
if(e==t)f=g,d=p=g.left
else{if(f=o(t-1,"right"),"rtl"==l){var v=g
g=f,f=v}d=g.left,p=f.right}null==r&&0==e&&(d=u),f.top-g.top>3&&(n(d,g.top,null,g.bottom),d=u,g.bottom<f.top&&n(d,g.bottom,null,f.top)),null==i&&t==h&&(p=c),(!s||g.top<s.top||g.top==s.top&&g.left<s.left)&&(s=g),(!a||f.bottom>a.bottom||f.bottom==a.bottom&&f.right>a.right)&&(a=f),d<u+1&&(d=u),n(d,f.top,p-d,f.bottom)}),{start:s,end:a}}var o=e.display,l=e.doc,s=document.createDocumentFragment(),a=Ne(e.display),u=a.left,c=o.lineSpace.offsetWidth-a.right,f=t.from(),h=t.to()
if(f.line==h.line)i(f.line,f.ch,h.ch)
else{var d=An(l,f.line),p=An(l,h.line),g=Zr(d)==Zr(p),v=i(f.line,f.ch,g?d.text.length+1:null).end,m=i(h.line,g?0:null,h.ch).start
g&&(v.top<m.top-2?(n(v.right,v.top,null,v.bottom),n(u,m.top,m.left,m.bottom)):n(v.right,v.top,m.left-v.right,v.bottom)),v.bottom<m.top&&n(u,v.bottom,null,m.top)}r.appendChild(s)}function xe(e){if(e.state.focused){var t=e.display
clearInterval(t.blinker)
var r=!0
t.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?t.blinker=setInterval(function(){t.cursorDiv.style.visibility=(r=!r)?"":"hidden"},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(t.cursorDiv.style.visibility="hidden")}}function Ce(e,t){e.doc.mode.startState&&e.doc.frontier<e.display.viewTo&&e.state.highlight.set(t,vi(Le,e))}function Le(e){var t=e.doc
if(t.frontier<t.first&&(t.frontier=t.first),!(t.frontier>=e.display.viewTo)){var r=+new Date+e.options.workTime,n=Go(t.mode,ke(e,t.frontier)),i=[]
t.iter(t.frontier,Math.min(t.first+t.size,e.display.viewTo+500),function(o){if(t.frontier>=e.display.viewFrom){var l=o.styles,s=dn(e,o,n,!0)
o.styles=s.styles
var a=o.styleClasses,u=s.classes
u?o.styleClasses=u:a&&(o.styleClasses=null)
for(var c=!l||l.length!=o.styles.length||a!=u&&(!a||!u||a.bgClass!=u.bgClass||a.textClass!=u.textClass),f=0;!c&&f<l.length;++f)c=l[f]!=o.styles[f]
c&&i.push(t.frontier),o.stateAfter=Go(t.mode,n)}else gn(e,o.text,n),o.stateAfter=t.frontier%5==0?Go(t.mode,n):null
if(++t.frontier,+new Date>r)return Ce(e,e.options.workDelay),!0}),i.length&&at(e,function(){for(var t=0;t<i.length;t++)gt(e,i[t],"text")})}}function Se(e,t,r){for(var n,i,o=e.doc,l=r?-1:t-(e.doc.mode.innerMode?1e3:100),s=t;s>l;--s){if(s<=o.first)return o.first
var a=An(o,s-1)
if(a.stateAfter&&(!r||s<=o.frontier))return s
var u=yl(a.text,null,e.options.tabSize);(null==i||n>u)&&(i=s-1,n=u)}return i}function ke(e,t,r){var n=e.doc,i=e.display
if(!n.mode.startState)return!0
var o=Se(e,t,r),l=o>n.first&&An(n,o-1).stateAfter
return l=l?Go(n.mode,l):Vo(n.mode),n.iter(o,t,function(r){gn(e,r.text,l)
var s=o==t-1||o%5==0||o>=i.viewFrom&&o<i.viewTo
r.stateAfter=s?Go(n.mode,l):null,++o}),r&&(n.frontier=o),l}function Me(e){return e.lineSpace.offsetTop}function Te(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function Ne(e){if(e.cachedPaddingH)return e.cachedPaddingH
var t=Ci(e.measure,wi("pre","x")),r=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,n={left:parseInt(r.paddingLeft),right:parseInt(r.paddingRight)}
return isNaN(n.left)||isNaN(n.right)||(e.cachedPaddingH=n),n}function He(e,t,r){var n=e.options.lineWrapping,i=n&&e.display.scroller.clientWidth
if(!t.measure.heights||n&&t.measure.width!=i){var o=t.measure.heights=[]
if(n){t.measure.width=i
for(var l=t.text.firstChild.getClientRects(),s=0;s<l.length-1;s++){var a=l[s],u=l[s+1]
Math.abs(a.bottom-u.bottom)>2&&o.push((a.bottom+u.top)/2-r.top)}}o.push(r.bottom-r.top)}}function Ae(e,t,r){if(e.line==t)return{map:e.measure.map,cache:e.measure.cache}
for(var n=0;n<e.rest.length;n++)if(e.rest[n]==t)return{map:e.measure.maps[n],cache:e.measure.caches[n]}
for(var n=0;n<e.rest.length;n++)if(In(e.rest[n])>r)return{map:e.measure.maps[n],cache:e.measure.caches[n],before:!0}}function Oe(e,t){t=Zr(t)
var r=In(t),n=e.display.externalMeasured=new ht(e.doc,t,r)
n.lineN=r
var i=n.built=mn(e,n)
return n.text=i.pre,Ci(e.display.lineMeasure,i.pre),n}function We(e,t,r,n){return Ee(e,Ie(e,t),r,n)}function De(e,t){if(t>=e.display.viewFrom&&t<e.display.viewTo)return e.display.view[mt(e,t)]
var r=e.display.externalMeasured
return r&&t>=r.lineN&&t<r.lineN+r.size?r:void 0}function Ie(e,t){var r=In(t),n=De(e,r)
n&&!n.text?n=null:n&&n.changes&&D(e,n,r,O(e)),n||(n=Oe(e,t))
var i=Ae(n,t,r)
return{line:t,view:n,rect:null,map:i.map,cache:i.cache,before:i.before,hasHeights:!1}}function Ee(e,t,r,n,i){t.before&&(r=-1)
var o,l=r+(n||"")
return t.cache.hasOwnProperty(l)?o=t.cache[l]:(t.rect||(t.rect=t.view.text.getBoundingClientRect()),t.hasHeights||(He(e,t.view,t.rect),t.hasHeights=!0),o=Pe(e,t,r,n),o.bogus||(t.cache[l]=o)),{left:o.left,right:o.right,top:i?o.rtop:o.top,bottom:i?o.rbottom:o.bottom}}function Pe(e,t,r,n){for(var i,o,l,s,a=t.map,u=0;u<a.length;u+=3){var c=a[u],f=a[u+1]
if(r<c?(o=0,l=1,s="left"):r<f?(o=r-c,l=o+1):(u==a.length-3||r==f&&a[u+3]>r)&&(l=f-c,o=l-1,r>=f&&(s="right")),null!=o){if(i=a[u+2],c==f&&n==(i.insertLeft?"left":"right")&&(s=n),"left"==n&&0==o)for(;u&&a[u-2]==a[u-3]&&a[u-1].insertLeft;)i=a[2+(u-=3)],s="left"
if("right"==n&&o==f-c)for(;u<a.length-3&&a[u+3]==a[u+4]&&!a[u+5].insertLeft;)i=a[(u+=3)+2],s="right"
break}}var h
if(3==i.nodeType){for(var u=0;u<4;u++){for(;o&&bi(t.line.text.charAt(c+o));)--o
for(;c+l<f&&bi(t.line.text.charAt(c+l));)++l
if(Qi&&Ji<9&&0==o&&l==f-c)h=i.parentNode.getBoundingClientRect()
else if(Qi&&e.options.lineWrapping){var d=xl(i,o,l).getClientRects()
h=d.length?d["right"==n?d.length-1:0]:Lo}else h=xl(i,o,l).getBoundingClientRect()||Lo
if(h.left||h.right||0==o)break
l=o,o-=1,s="right"}Qi&&Ji<11&&(h=ze(e.display.measure,h))}else{o>0&&(s=n="right")
var d
h=e.options.lineWrapping&&(d=i.getClientRects()).length>1?d["right"==n?d.length-1:0]:i.getBoundingClientRect()}if(Qi&&Ji<9&&!o&&(!h||!h.left&&!h.right)){var p=i.parentNode.getClientRects()[0]
h=p?{left:p.left,right:p.left+Qe(e.display),top:p.top,bottom:p.bottom}:Lo}for(var g=h.top-t.rect.top,v=h.bottom-t.rect.top,m=(g+v)/2,y=t.view.measure.heights,u=0;u<y.length-1&&!(m<y[u]);u++);var b=u?y[u-1]:0,w=y[u],x={left:("right"==s?h.right:h.left)-t.rect.left,right:("left"==s?h.left:h.right)-t.rect.left,top:b,bottom:w}
return h.left||h.right||(x.bogus=!0),e.options.singleCursorHeightPerLine||(x.rtop=g,x.rbottom=v),x}function ze(e,t){if(!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI||!Ei(e))return t
var r=screen.logicalXDPI/screen.deviceXDPI,n=screen.logicalYDPI/screen.deviceYDPI
return{left:t.left*r,right:t.right*r,top:t.top*n,bottom:t.bottom*n}}function Re(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var t=0;t<e.rest.length;t++)e.measure.caches[t]={}}function Fe(e){e.display.externalMeasure=null,xi(e.display.lineMeasure)
for(var t=0;t<e.display.view.length;t++)Re(e.display.view[t])}function Be(e){Fe(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function Ge(){return window.pageXOffset||(document.documentElement||document.body).scrollLeft}function Ve(){return window.pageYOffset||(document.documentElement||document.body).scrollTop}function Ue(e,t,r,n){if(t.widgets)for(var i=0;i<t.widgets.length;++i)if(t.widgets[i].above){var o=on(t.widgets[i])
r.top+=o,r.bottom+=o}if("line"==n)return r
n||(n="local")
var l=Pn(t)
if("local"==n?l+=Me(e.display):l-=e.display.viewOffset,"page"==n||"window"==n){var s=e.display.lineSpace.getBoundingClientRect()
l+=s.top+("window"==n?0:Ve())
var a=s.left+("window"==n?0:Ge())
r.left+=a,r.right+=a}return r.top+=l,r.bottom+=l,r}function Ke(e,t,r){if("div"==r)return t
var n=t.left,i=t.top
if("page"==r)n-=Ge(),i-=Ve()
else if("local"==r||!r){var o=e.display.sizer.getBoundingClientRect()
n+=o.left,i+=o.top}var l=e.display.lineSpace.getBoundingClientRect()
return{left:n-l.left,top:i-l.top}}function Xe(e,t,r,n,i){return n||(n=An(e.doc,t.line)),Ue(e,n,We(e,n,t.ch,i),r)}function _e(e,t,r,n,i,o){function l(t,l){var s=Ee(e,i,t,l?"right":"left",o)
return l?s.left=s.right:s.right=s.left,Ue(e,n,s,r)}function s(e,t){var r=a[t],n=r.level%2
return e==zi(r)&&t&&r.level<a[t-1].level?(r=a[--t],e=Ri(r)-(r.level%2?0:1),n=!0):e==Ri(r)&&t<a.length-1&&r.level<a[t+1].level&&(r=a[++t],e=zi(r)-r.level%2,n=!1),n&&e==r.to&&e>r.from?l(e-1):l(e,n)}n=n||An(e.doc,t.line),i||(i=Ie(e,n))
var a=zn(n),u=t.ch
if(!a)return l(u)
var c=Xi(a,u),f=s(u,c)
return null!=El&&(f.other=s(u,El)),f}function je(e,t){var r=0,t=J(e.doc,t)
e.options.lineWrapping||(r=Qe(e.display)*t.ch)
var n=An(e.doc,t.line),i=Pn(n)+Me(e.display)
return{left:r,right:r,top:i,bottom:i+n.height}}function Ye(e,t,r,n){var i=yo(e,t)
return i.xRel=n,r&&(i.outside=!0),i}function $e(e,t,r){var n=e.doc
if((r+=e.display.viewOffset)<0)return Ye(n.first,0,!0,-1)
var i=En(n,r),o=n.first+n.size-1
if(i>o)return Ye(n.first+n.size-1,An(n,o).text.length,!0,1)
t<0&&(t=0)
for(var l=An(n,i);;){var s=qe(e,l,i,t,r),a=$r(l),u=a&&a.find(0,!0)
if(!a||!(s.ch>u.from.ch||s.ch==u.from.ch&&s.xRel>0))return s
i=In(l=u.to.line)}}function qe(e,t,r,n,i){function o(n){var i=_e(e,yo(r,n),"line",t,u)
return s=!0,l>i.bottom?i.left-a:l<i.top?i.left+a:(s=!1,i.left)}var l=i-Pn(t),s=!1,a=2*e.display.wrapper.clientWidth,u=Ie(e,t),c=zn(t),f=t.text.length,h=Fi(t),d=Bi(t),p=o(h),g=s,v=o(d),m=s
if(n>v)return Ye(r,d,m,1)
for(;;){if(c?d==h||d==ji(t,h,1):d-h<=1){for(var y=n<p||n-p<=v-n?h:d,b=n-(y==h?p:v);bi(t.text.charAt(y));)++y
return Ye(r,y,y==h?g:m,b<-1?-1:b>1?1:0)}var w=Math.ceil(f/2),x=h+w
if(c){x=h
for(var C=0;C<w;++C)x=ji(t,x,1)}var L=o(x)
L>n?(d=x,v=L,(m=s)&&(v+=1e3),f=w):(h=x,p=L,g=s,f-=w)}}function Ze(e){if(null!=e.cachedTextHeight)return e.cachedTextHeight
if(null==wo){wo=wi("pre")
for(var t=0;t<49;++t)wo.appendChild(document.createTextNode("x")),wo.appendChild(wi("br"))
wo.appendChild(document.createTextNode("x"))}Ci(e.measure,wo)
var r=wo.offsetHeight/50
return r>3&&(e.cachedTextHeight=r),xi(e.measure),r||1}function Qe(e){if(null!=e.cachedCharWidth)return e.cachedCharWidth
var t=wi("span","xxxxxxxxxx"),r=wi("pre",[t])
Ci(e.measure,r)
var n=t.getBoundingClientRect(),i=(n.right-n.left)/10
return i>2&&(e.cachedCharWidth=i),i||10}function Je(e){e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:null,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,id:++ko},So?So.ops.push(e.curOp):e.curOp.ownsGroup=So={ops:[e.curOp],delayedCallbacks:[]}}function et(e){var t=e.delayedCallbacks,r=0
do{for(;r<t.length;r++)t[r]()
for(var n=0;n<e.ops.length;n++){var i=e.ops[n]
if(i.cursorActivityHandlers)for(;i.cursorActivityCalled<i.cursorActivityHandlers.length;)i.cursorActivityHandlers[i.cursorActivityCalled++](i.cm)}}while(r<t.length)}function tt(e){var t=e.curOp,r=t.ownsGroup
if(r)try{et(r)}finally{So=null
for(var n=0;n<r.ops.length;n++)r.ops[n].cm.curOp=null
rt(r)}}function rt(e){for(var t=e.ops,r=0;r<t.length;r++)nt(t[r])
for(var r=0;r<t.length;r++)it(t[r])
for(var r=0;r<t.length;r++)ot(t[r])
for(var r=0;r<t.length;r++)lt(t[r])
for(var r=0;r<t.length;r++)st(t[r])}function nt(e){var t=e.cm,r=t.display
e.updateMaxLine&&d(t),e.mustUpdate=e.viewChanged||e.forceUpdate||null!=e.scrollTop||e.scrollToPos&&(e.scrollToPos.from.line<r.viewFrom||e.scrollToPos.to.line>=r.viewTo)||r.maxLineChanged&&t.options.lineWrapping,e.update=e.mustUpdate&&new L(t,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function it(e){e.updatedDisplay=e.mustUpdate&&S(e.cm,e.update)}function ot(e){var t=e.cm,r=t.display
e.updatedDisplay&&H(t),e.barMeasure=v(t),r.maxLineChanged&&!t.options.lineWrapping&&(e.adjustWidthTo=We(t,r.maxLine,r.maxLine.text.length).left+3,e.maxScrollLeft=Math.max(0,r.sizer.offsetLeft+e.adjustWidthTo+dl-r.scroller.clientWidth)),(e.updatedDisplay||e.selectionChanged)&&(e.newSelectionNodes=ve(t))}function lt(e){var t=e.cm
null!=e.adjustWidthTo&&(t.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<t.doc.scrollLeft&&Gt(t,Math.min(t.display.scroller.scrollLeft,e.maxScrollLeft),!0),t.display.maxLineChanged=!1),e.newSelectionNodes&&me(t,e.newSelectionNodes),e.updatedDisplay&&T(t,e.barMeasure),(e.updatedDisplay||e.startHeight!=t.doc.height)&&m(t,e.barMeasure),e.selectionChanged&&xe(t),t.state.focused&&e.updateInput&&St(t,e.typing)}function st(e){var t=e.cm,r=t.display,n=t.doc
if(null!=e.adjustWidthTo&&Math.abs(e.barMeasure.scrollWidth-t.display.scroller.scrollWidth)>1&&m(t),e.updatedDisplay&&k(t,e.update),null==r.wheelStartX||null==e.scrollTop&&null==e.scrollLeft&&!e.scrollToPos||(r.wheelStartX=r.wheelStartY=null),null!=e.scrollTop&&(r.scroller.scrollTop!=e.scrollTop||e.forceScroll)){var i=Math.max(0,Math.min(r.scroller.scrollHeight-r.scroller.clientHeight,e.scrollTop))
r.scroller.scrollTop=r.scrollbarV.scrollTop=n.scrollTop=i}if(null!=e.scrollLeft&&(r.scroller.scrollLeft!=e.scrollLeft||e.forceScroll)){var o=Math.max(0,Math.min(r.scroller.scrollWidth-r.scroller.clientWidth,e.scrollLeft))
r.scroller.scrollLeft=r.scrollbarH.scrollLeft=n.scrollLeft=o,b(t)}if(e.scrollToPos){var l=pr(t,J(n,e.scrollToPos.from),J(n,e.scrollToPos.to),e.scrollToPos.margin)
e.scrollToPos.isCursor&&t.state.focused&&dr(t,l)}var s=e.maybeHiddenMarkers,a=e.maybeUnhiddenMarkers
if(s)for(var u=0;u<s.length;++u)s[u].lines.length||fl(s[u],"hide")
if(a)for(var u=0;u<a.length;++u)a[u].lines.length&&fl(a[u],"unhide")
r.wrapper.offsetHeight&&(n.scrollTop=t.display.scroller.scrollTop),e.updatedDisplay&&eo&&(t.options.lineWrapping&&N(t,e.barMeasure),e.barMeasure.scrollWidth>e.barMeasure.clientWidth&&e.barMeasure.scrollWidth<e.barMeasure.clientWidth+1&&!g(t)&&m(t)),e.changeObjs&&fl(t,"changes",t,e.changeObjs)}function at(e,t){if(e.curOp)return t()
Je(e)
try{return t()}finally{tt(e)}}function ut(e,t){return function(){if(e.curOp)return t.apply(e,arguments)
Je(e)
try{return t.apply(e,arguments)}finally{tt(e)}}}function ct(e){return function(){if(this.curOp)return e.apply(this,arguments)
Je(this)
try{return e.apply(this,arguments)}finally{tt(this)}}}function ft(e){return function(){var t=this.cm
if(!t||t.curOp)return e.apply(this,arguments)
Je(t)
try{return e.apply(this,arguments)}finally{tt(t)}}}function ht(e,t,r){this.line=t,this.rest=Qr(t),this.size=this.rest?In(fi(this.rest))-r+1:1,this.node=this.text=null,this.hidden=tn(e,t)}function dt(e,t,r){for(var n,i=[],o=t;o<r;o=n){var l=new ht(e.doc,An(e.doc,o),o)
n=o+l.size,i.push(l)}return i}function pt(e,t,r,n){null==t&&(t=e.doc.first),null==r&&(r=e.doc.first+e.doc.size),n||(n=0)
var i=e.display
if(n&&r<i.viewTo&&(null==i.updateLineNumbers||i.updateLineNumbers>t)&&(i.updateLineNumbers=t),e.curOp.viewChanged=!0,t>=i.viewTo)mo&&Jr(e.doc,t)<i.viewTo&&vt(e)
else if(r<=i.viewFrom)mo&&en(e.doc,r+n)>i.viewFrom?vt(e):(i.viewFrom+=n,i.viewTo+=n)
else if(t<=i.viewFrom&&r>=i.viewTo)vt(e)
else if(t<=i.viewFrom){var o=yt(e,r,r+n,1)
o?(i.view=i.view.slice(o.index),i.viewFrom=o.lineN,i.viewTo+=n):vt(e)}else if(r>=i.viewTo){var o=yt(e,t,t,-1)
o?(i.view=i.view.slice(0,o.index),i.viewTo=o.lineN):vt(e)}else{var l=yt(e,t,t,-1),s=yt(e,r,r+n,1)
l&&s?(i.view=i.view.slice(0,l.index).concat(dt(e,l.lineN,s.lineN)).concat(i.view.slice(s.index)),i.viewTo+=n):vt(e)}var a=i.externalMeasured
a&&(r<a.lineN?a.lineN+=n:t<a.lineN+a.size&&(i.externalMeasured=null))}function gt(e,t,r){e.curOp.viewChanged=!0
var n=e.display,i=e.display.externalMeasured
if(i&&t>=i.lineN&&t<i.lineN+i.size&&(n.externalMeasured=null),!(t<n.viewFrom||t>=n.viewTo)){var o=n.view[mt(e,t)]
if(null!=o.node){var l=o.changes||(o.changes=[]);-1==hi(l,r)&&l.push(r)}}}function vt(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function mt(e,t){if(t>=e.display.viewTo)return null
if((t-=e.display.viewFrom)<0)return null
for(var r=e.display.view,n=0;n<r.length;n++)if((t-=r[n].size)<0)return n}function yt(e,t,r,n){var i,o=mt(e,t),l=e.display.view
if(!mo||r==e.doc.first+e.doc.size)return{index:o,lineN:r}
for(var s=0,a=e.display.viewFrom;s<o;s++)a+=l[s].size
if(a!=t){if(n>0){if(o==l.length-1)return null
i=a+l[o].size-t,o++}else i=a-t
t+=i,r+=i}for(;Jr(e.doc,r)!=r;){if(o==(n<0?0:l.length-1))return null
r+=n*l[o-(n<0?1:0)].size,o+=n}return{index:o,lineN:r}}function bt(e,t,r){var n=e.display
0==n.view.length||t>=n.viewTo||r<=n.viewFrom?(n.view=dt(e,t,r),n.viewFrom=t):(n.viewFrom>t?n.view=dt(e,t,n.viewFrom).concat(n.view):n.viewFrom<t&&(n.view=n.view.slice(mt(e,t))),n.viewFrom=t,n.viewTo<r?n.view=n.view.concat(dt(e,n.viewTo,r)):n.viewTo>r&&(n.view=n.view.slice(0,mt(e,r)))),n.viewTo=r}function wt(e){for(var t=e.display.view,r=0,n=0;n<t.length;n++){var i=t[n]
i.hidden||i.node&&!i.changes||++r}return r}function xt(e){e.display.pollingFast||e.display.poll.set(e.options.pollInterval,function(){Lt(e),e.state.focused&&xt(e)})}function Ct(e){function t(){Lt(e)||r?(e.display.pollingFast=!1,xt(e)):(r=!0,e.display.poll.set(60,t))}var r=!1
e.display.pollingFast=!0,e.display.poll.set(20,t)}function Lt(e){var t=e.display.input,r=e.display.prevInput,n=e.doc
if(!e.state.focused||Ol(t)&&!r||Tt(e)||e.options.disableInput)return!1
e.state.pasteIncoming&&e.state.fakedLastChar&&(t.value=t.value.substring(0,t.value.length-1),e.state.fakedLastChar=!1)
var i=t.value
if(i==r&&!e.somethingSelected())return!1
if(Qi&&Ji>=9&&e.display.inputHasSelection===i||co&&/[\uf700-\uf7ff]/.test(i))return St(e),!1
var o=!e.curOp
o&&Je(e),e.display.shift=!1,8203!=i.charCodeAt(0)||n.sel!=e.display.selForContextMenu||r||(r="​")
for(var l=0,s=Math.min(r.length,i.length);l<s&&r.charCodeAt(l)==i.charCodeAt(l);)++l
var a=i.slice(l),u=Al(a),c=null
e.state.pasteIncoming&&n.sel.ranges.length>1&&(Mo&&Mo.join("\n")==a?c=n.sel.ranges.length%Mo.length==0&&di(Mo,Al):u.length==n.sel.ranges.length&&(c=di(u,function(e){return[e]})))
for(var f=n.sel.ranges.length-1;f>=0;f--){var h=n.sel.ranges[f],d=h.from(),p=h.to()
l<r.length?d=yo(d.line,d.ch-(r.length-l)):e.state.overwrite&&h.empty()&&!e.state.pasteIncoming&&(p=yo(p.line,Math.min(An(n,p.line).text.length,p.ch+fi(u).length)))
var g=e.curOp.updateInput,v={from:d,to:p,text:c?c[f%c.length]:u,origin:e.state.pasteIncoming?"paste":e.state.cutIncoming?"cut":"+input"}
if(lr(e.doc,v),ri(e,"inputRead",e,v),a&&!e.state.pasteIncoming&&e.options.electricChars&&e.options.smartIndent&&h.head.ch<100&&(!f||n.sel.ranges[f-1].head.line!=h.head.line)){var m=e.getModeAt(h.head),y=Wo(v)
if(m.electricChars){for(var b=0;b<m.electricChars.length;b++)if(a.indexOf(m.electricChars.charAt(b))>-1){wr(e,y.line,"smart")
break}}else m.electricInput&&m.electricInput.test(An(n,y.line).text.slice(0,y.ch))&&wr(e,y.line,"smart")}}return yr(e),e.curOp.updateInput=g,e.curOp.typing=!0,i.length>1e3||i.indexOf("\n")>-1?t.value=e.display.prevInput="":e.display.prevInput=i,o&&tt(e),e.state.pasteIncoming=e.state.cutIncoming=!1,!0}function St(e,t){var r,n,i=e.doc
if(e.somethingSelected()){e.display.prevInput=""
var o=i.sel.primary()
r=Wl&&(o.to().line-o.from().line>100||(n=e.getSelection()).length>1e3)
var l=r?"-":n||e.getSelection()
e.display.input.value=l,e.state.focused&&wl(e.display.input),Qi&&Ji>=9&&(e.display.inputHasSelection=l)}else t||(e.display.prevInput=e.display.input.value="",Qi&&Ji>=9&&(e.display.inputHasSelection=null))
e.display.inaccurateSelection=r}function kt(e){"nocursor"==e.options.readOnly||uo&&Si()==e.display.input||e.display.input.focus()}function Mt(e){e.state.focused||(kt(e),Zt(e))}function Tt(e){return e.options.readOnly||e.doc.cantEdit}function Nt(e){function t(){e.state.focused&&setTimeout(vi(kt,e),0)}function r(t){ii(e,t)||al(t)}function n(t){if(e.somethingSelected())Mo=e.getSelections(),i.inaccurateSelection&&(i.prevInput="",i.inaccurateSelection=!1,i.input.value=Mo.join("\n"),wl(i.input))
else{for(var r=[],n=[],o=0;o<e.doc.sel.ranges.length;o++){var l=e.doc.sel.ranges[o].head.line,s={anchor:yo(l,0),head:yo(l+1,0)}
n.push(s),r.push(e.getRange(s.anchor,s.head))}"cut"==t.type?e.setSelections(n,null,gl):(i.prevInput="",i.input.value=r.join("\n"),wl(i.input)),Mo=r}"cut"==t.type&&(e.state.cutIncoming=!0)}var i=e.display
ul(i.scroller,"mousedown",ut(e,Wt)),Qi&&Ji<11?ul(i.scroller,"dblclick",ut(e,function(t){if(!ii(e,t)){var r=Ot(e,t)
if(r&&!zt(e,t)&&!At(e.display,t)){ll(t)
var n=e.findWordAt(r)
ie(e.doc,n.anchor,n.head)}}})):ul(i.scroller,"dblclick",function(t){ii(e,t)||ll(t)}),ul(i.lineSpace,"selectstart",function(e){At(i,e)||ll(e)}),go||ul(i.scroller,"contextmenu",function(t){Jt(e,t)}),ul(i.scroller,"scroll",function(){i.scroller.clientHeight&&(Bt(e,i.scroller.scrollTop),Gt(e,i.scroller.scrollLeft,!0),fl(e,"scroll",e))}),ul(i.scrollbarV,"scroll",function(){i.scroller.clientHeight&&Bt(e,i.scrollbarV.scrollTop)}),ul(i.scrollbarH,"scroll",function(){i.scroller.clientHeight&&Gt(e,i.scrollbarH.scrollLeft)}),ul(i.scroller,"mousewheel",function(t){Vt(e,t)}),ul(i.scroller,"DOMMouseScroll",function(t){Vt(e,t)}),ul(i.scrollbarH,"mousedown",t),ul(i.scrollbarV,"mousedown",t),ul(i.wrapper,"scroll",function(){i.wrapper.scrollTop=i.wrapper.scrollLeft=0}),ul(i.input,"keyup",function(t){$t.call(e,t)}),ul(i.input,"input",function(){Qi&&Ji>=9&&e.display.inputHasSelection&&(e.display.inputHasSelection=null),Ct(e)}),ul(i.input,"keydown",ut(e,jt)),ul(i.input,"keypress",ut(e,qt)),ul(i.input,"focus",vi(Zt,e)),ul(i.input,"blur",vi(Qt,e)),e.options.dragDrop&&(ul(i.scroller,"dragstart",function(t){Ft(e,t)}),ul(i.scroller,"dragenter",r),ul(i.scroller,"dragover",r),ul(i.scroller,"drop",ut(e,Rt))),ul(i.scroller,"paste",function(t){At(i,t)||(e.state.pasteIncoming=!0,kt(e),Ct(e))}),ul(i.input,"paste",function(){if(eo&&!e.state.fakedLastChar&&!(new Date-e.state.lastMiddleDown<200)){var t=i.input.selectionStart,r=i.input.selectionEnd
i.input.value+="$",i.input.selectionEnd=r,i.input.selectionStart=t,e.state.fakedLastChar=!0}e.state.pasteIncoming=!0,Ct(e)}),ul(i.input,"cut",n),ul(i.input,"copy",n),oo&&ul(i.sizer,"mouseup",function(){Si()==i.input&&i.input.blur(),kt(e)})}function Ht(e){var t=e.display
t.cachedCharWidth=t.cachedTextHeight=t.cachedPaddingH=null,e.setSize()}function At(e,t){for(var r=ei(t);r!=e.wrapper;r=r.parentNode)if(!r||r.ignoreEvents||r.parentNode==e.sizer&&r!=e.mover)return!0}function Ot(e,t,r,n){var i=e.display
if(!r){var o=ei(t)
if(o==i.scrollbarH||o==i.scrollbarV||o==i.scrollbarFiller||o==i.gutterFiller)return null}var l,s,a=i.lineSpace.getBoundingClientRect()
try{l=t.clientX-a.left,s=t.clientY-a.top}catch(t){return null}var u,c=$e(e,l,s)
if(n&&1==c.xRel&&(u=An(e.doc,c.line).text).length==c.ch){var f=yl(u,u.length,e.options.tabSize)-u.length
c=yo(c.line,Math.max(0,Math.round((l-Ne(e.display).left)/Qe(e.display))-f))}return c}function Wt(e){if(!ii(this,e)){var t=this,r=t.display
if(r.shift=e.shiftKey,At(r,e))return void(eo||(r.scroller.draggable=!1,setTimeout(function(){r.scroller.draggable=!0},100)))
if(!zt(t,e)){var n=Ot(t,e)
switch(window.focus(),ti(e)){case 1:n?Dt(t,e,n):ei(e)==r.scroller&&ll(e)
break
case 2:eo&&(t.state.lastMiddleDown=+new Date),n&&ie(t.doc,n),setTimeout(vi(kt,t),20),ll(e)
break
case 3:go&&Jt(t,e)}}}}function Dt(e,t,r){setTimeout(vi(Mt,e),0)
var n,i=+new Date
Co&&Co.time>i-400&&0==bo(Co.pos,r)?n="triple":xo&&xo.time>i-400&&0==bo(xo.pos,r)?(n="double",Co={time:i,pos:r}):(n="single",xo={time:i,pos:r})
var o=e.doc.sel,l=co?t.metaKey:t.ctrlKey
e.options.dragDrop&&Hl&&!Tt(e)&&"single"==n&&o.contains(r)>-1&&o.somethingSelected()?It(e,t,r,l):Et(e,t,r,n,l)}function It(e,t,r,n){var i=e.display,o=ut(e,function(l){eo&&(i.scroller.draggable=!1),e.state.draggingText=!1,cl(document,"mouseup",o),cl(i.scroller,"drop",o),Math.abs(t.clientX-l.clientX)+Math.abs(t.clientY-l.clientY)<10&&(ll(l),n||ie(e.doc,r),kt(e),Qi&&9==Ji&&setTimeout(function(){document.body.focus(),kt(e)},20))})
eo&&(i.scroller.draggable=!0),e.state.draggingText=o,i.scroller.dragDrop&&i.scroller.dragDrop(),ul(document,"mouseup",o),ul(i.scroller,"drop",o)}function Et(e,t,r,n,i){function o(t){if(0!=bo(g,t))if(g=t,"rect"==n){for(var i=[],o=e.options.tabSize,l=yl(An(u,r.line).text,r.ch,o),s=yl(An(u,t.line).text,t.ch,o),a=Math.min(l,s),d=Math.max(l,s),p=Math.min(r.line,t.line),v=Math.min(e.lastLine(),Math.max(r.line,t.line));p<=v;p++){var m=An(u,p).text,y=ui(m,a,o)
a==d?i.push(new $(yo(p,y),yo(p,y))):m.length>y&&i.push(new $(yo(p,y),yo(p,ui(m,d,o))))}i.length||i.push(new $(r,r)),ce(u,q(h.ranges.slice(0,f).concat(i),f),{origin:"*mouse",scroll:!1}),e.scrollIntoView(t)}else{var b=c,w=b.anchor,x=t
if("single"!=n){if("double"==n)var C=e.findWordAt(t)
else var C=new $(yo(t.line,0),J(u,yo(t.line+1,0)))
bo(C.anchor,w)>0?(x=C.head,w=j(b.from(),C.anchor)):(x=C.anchor,w=_(b.to(),C.head))}var i=h.ranges.slice(0)
i[f]=new $(J(u,w),x),ce(u,q(i,f),vl)}}function l(t){var r=++m,i=Ot(e,t,!0,"rect"==n)
if(i)if(0!=bo(i,g)){Mt(e),o(i)
var s=y(a,u);(i.line>=s.to||i.line<s.from)&&setTimeout(ut(e,function(){m==r&&l(t)}),150)}else{var c=t.clientY<v.top?-20:t.clientY>v.bottom?20:0
c&&setTimeout(ut(e,function(){m==r&&(a.scroller.scrollTop+=c,l(t))}),50)}}function s(t){m=1/0,ll(t),kt(e),cl(document,"mousemove",b),cl(document,"mouseup",w),u.history.lastSelOrigin=null}var a=e.display,u=e.doc
ll(t)
var c,f,h=u.sel
if(i&&!t.shiftKey?(f=u.sel.contains(r),c=f>-1?u.sel.ranges[f]:new $(r,r)):c=u.sel.primary(),t.altKey)n="rect",i||(c=new $(r,r)),r=Ot(e,t,!0,!0),f=-1
else if("double"==n){var d=e.findWordAt(r)
c=e.display.shift||u.extend?ne(u,c,d.anchor,d.head):d}else if("triple"==n){var p=new $(yo(r.line,0),J(u,yo(r.line+1,0)))
c=e.display.shift||u.extend?ne(u,c,p.anchor,p.head):p}else c=ne(u,c,r)
i?f>-1?le(u,f,c,vl):(f=u.sel.ranges.length,ce(u,q(u.sel.ranges.concat([c]),f),{scroll:!1,origin:"*mouse"})):(f=0,ce(u,new Y([c],0),vl),h=u.sel)
var g=r,v=a.wrapper.getBoundingClientRect(),m=0,b=ut(e,function(e){ti(e)?l(e):s(e)}),w=ut(e,s)
ul(document,"mousemove",b),ul(document,"mouseup",w)}function Pt(e,t,r,n,i){try{var o=t.clientX,l=t.clientY}catch(t){return!1}if(o>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1
n&&ll(t)
var s=e.display,a=s.lineDiv.getBoundingClientRect()
if(l>a.bottom||!li(e,r))return Jn(t)
l-=a.top-s.viewOffset
for(var u=0;u<e.options.gutters.length;++u){var c=s.gutters.childNodes[u]
if(c&&c.getBoundingClientRect().right>=o){return i(e,r,e,En(e.doc,l),e.options.gutters[u],t),Jn(t)}}}function zt(e,t){return Pt(e,t,"gutterClick",!0,ri)}function Rt(e){var t=this
if(!ii(t,e)&&!At(t.display,e)){ll(e),Qi&&(To=+new Date)
var r=Ot(t,e,!0),n=e.dataTransfer.files
if(r&&!Tt(t))if(n&&n.length&&window.FileReader&&window.File)for(var i=n.length,o=Array(i),l=0,s=0;s<i;++s)(function(e,n){var s=new FileReader
s.onload=ut(t,function(){if(o[n]=s.result,++l==i){r=J(t.doc,r)
var e={from:r,to:r,text:Al(o.join("\n")),origin:"paste"}
lr(t.doc,e),ue(t.doc,Z(r,Wo(e)))}}),s.readAsText(e)})(n[s],s)
else{if(t.state.draggingText&&t.doc.sel.contains(r)>-1)return t.state.draggingText(e),void setTimeout(vi(kt,t),20)
try{var o=e.dataTransfer.getData("Text")
if(o){if(t.state.draggingText&&!(co?e.metaKey:e.ctrlKey))var a=t.listSelections()
if(fe(t.doc,Z(r,r)),a)for(var s=0;s<a.length;++s)hr(t.doc,"",a[s].anchor,a[s].head,"drag")
t.replaceSelection(o,"around","paste"),kt(t)}}catch(e){}}}}function Ft(e,t){if(Qi&&(!e.state.draggingText||+new Date-To<100))return void al(t)
if(!ii(e,t)&&!At(e.display,t)&&(t.dataTransfer.setData("Text",e.getSelection()),t.dataTransfer.setDragImage&&!io)){var r=wi("img",null,null,"position: fixed; left: 0; top: 0;")
r.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",no&&(r.width=r.height=1,e.display.wrapper.appendChild(r),r._top=r.offsetTop),t.dataTransfer.setDragImage(r,0,0),no&&r.parentNode.removeChild(r)}}function Bt(e,t){Math.abs(e.doc.scrollTop-t)<2||(e.doc.scrollTop=t,$i||M(e,{top:t}),e.display.scroller.scrollTop!=t&&(e.display.scroller.scrollTop=t),e.display.scrollbarV.scrollTop!=t&&(e.display.scrollbarV.scrollTop=t),$i&&M(e),Ce(e,100))}function Gt(e,t,r){(r?t==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-t)<2)||(t=Math.min(t,e.display.scroller.scrollWidth-e.display.scroller.clientWidth),e.doc.scrollLeft=t,b(e),e.display.scroller.scrollLeft!=t&&(e.display.scroller.scrollLeft=t),e.display.scrollbarH.scrollLeft!=t&&(e.display.scrollbarH.scrollLeft=t))}function Vt(e,t){var r=t.wheelDeltaX,n=t.wheelDeltaY
null==r&&t.detail&&t.axis==t.HORIZONTAL_AXIS&&(r=t.detail),null==n&&t.detail&&t.axis==t.VERTICAL_AXIS?n=t.detail:null==n&&(n=t.wheelDelta)
var i=e.display,o=i.scroller
if(r&&o.scrollWidth>o.clientWidth||n&&o.scrollHeight>o.clientHeight){if(n&&co&&eo)e:for(var l=t.target,s=i.view;l!=o;l=l.parentNode)for(var a=0;a<s.length;a++)if(s[a].node==l){e.display.currentWheelTarget=l
break e}if(r&&!$i&&!no&&null!=Ho)return n&&Bt(e,Math.max(0,Math.min(o.scrollTop+n*Ho,o.scrollHeight-o.clientHeight))),Gt(e,Math.max(0,Math.min(o.scrollLeft+r*Ho,o.scrollWidth-o.clientWidth))),ll(t),void(i.wheelStartX=null)
if(n&&null!=Ho){var u=n*Ho,c=e.doc.scrollTop,f=c+i.wrapper.clientHeight
u<0?c=Math.max(0,c+u-50):f=Math.min(e.doc.height,f+u+50),M(e,{top:c,bottom:f})}No<20&&(null==i.wheelStartX?(i.wheelStartX=o.scrollLeft,i.wheelStartY=o.scrollTop,i.wheelDX=r,i.wheelDY=n,setTimeout(function(){if(null!=i.wheelStartX){var e=o.scrollLeft-i.wheelStartX,t=o.scrollTop-i.wheelStartY,r=t&&i.wheelDY&&t/i.wheelDY||e&&i.wheelDX&&e/i.wheelDX
i.wheelStartX=i.wheelStartY=null,r&&(Ho=(Ho*No+r)/(No+1),++No)}},200)):(i.wheelDX+=r,i.wheelDY+=n))}}function Ut(e,t,r){if("string"==typeof t&&!(t=Uo[t]))return!1
e.display.pollingFast&&Lt(e)&&(e.display.pollingFast=!1)
var n=e.display.shift,i=!1
try{Tt(e)&&(e.state.suppressEdits=!0),r&&(e.display.shift=!1),i=t(e)!=pl}finally{e.display.shift=n,e.state.suppressEdits=!1}return i}function Kt(e){var t=e.state.keyMaps.slice(0)
return e.options.extraKeys&&t.push(e.options.extraKeys),t.push(e.options.keyMap),t}function Xt(e,t){var r=Mr(e.options.keyMap),n=r.auto
clearTimeout(Ao),n&&!_o(t)&&(Ao=setTimeout(function(){Mr(e.options.keyMap)==r&&(e.options.keyMap=n.call?n.call(null,e):n,s(e))},50))
var i=jo(t,!0),o=!1
if(!i)return!1
var l=Kt(e)
return o=t.shiftKey?Xo("Shift-"+i,l,function(t){return Ut(e,t,!0)})||Xo(i,l,function(t){if("string"==typeof t?/^go[A-Z]/.test(t):t.motion)return Ut(e,t)}):Xo(i,l,function(t){return Ut(e,t)}),o&&(ll(t),xe(e),ri(e,"keyHandled",e,i,t)),o}function _t(e,t,r){var n=Xo("'"+r+"'",Kt(e),function(t){return Ut(e,t,!0)})
return n&&(ll(t),xe(e),ri(e,"keyHandled",e,"'"+r+"'",t)),n}function jt(e){var t=this
if(Mt(t),!ii(t,e)){Qi&&Ji<11&&27==e.keyCode&&(e.returnValue=!1)
var r=e.keyCode
t.display.shift=16==r||e.shiftKey
var n=Xt(t,e)
no&&(Oo=n?r:null,!n&&88==r&&!Wl&&(co?e.metaKey:e.ctrlKey)&&t.replaceSelection("",null,"cut")),18!=r||/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className)||Yt(t)}}function Yt(e){function t(e){18!=e.keyCode&&e.altKey||(Mi(r,"CodeMirror-crosshair"),cl(document,"keyup",t),cl(document,"mouseover",t))}var r=e.display.lineDiv
Ti(r,"CodeMirror-crosshair"),ul(document,"keyup",t),ul(document,"mouseover",t)}function $t(e){16==e.keyCode&&(this.doc.sel.shift=!1),ii(this,e)}function qt(e){var t=this
if(!(ii(t,e)||e.ctrlKey&&!e.altKey||co&&e.metaKey)){var r=e.keyCode,n=e.charCode
if(no&&r==Oo)return Oo=null,void ll(e)
if(!(no&&(!e.which||e.which<10)||oo)||!Xt(t,e)){_t(t,e,String.fromCharCode(null==n?r:n))||(Qi&&Ji>=9&&(t.display.inputHasSelection=null),Ct(t))}}}function Zt(e){"nocursor"!=e.options.readOnly&&(e.state.focused||(fl(e,"focus",e),e.state.focused=!0,Ti(e.display.wrapper,"CodeMirror-focused"),e.curOp||e.display.selForContextMenu==e.doc.sel||(St(e),eo&&setTimeout(vi(St,e,!0),0))),xt(e),xe(e))}function Qt(e){e.state.focused&&(fl(e,"blur",e),e.state.focused=!1,Mi(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1)},150)}function Jt(e,t){function r(){if(null!=i.input.selectionStart){var t=e.somethingSelected(),r=i.input.value="​"+(t?i.input.value:"")
i.prevInput=t?"":"​",i.input.selectionStart=1,i.input.selectionEnd=r.length,i.selForContextMenu=e.doc.sel}}function n(){if(i.inputDiv.style.position="relative",i.input.style.cssText=s,Qi&&Ji<9&&(i.scrollbarV.scrollTop=i.scroller.scrollTop=l),xt(e),null!=i.input.selectionStart){(!Qi||Qi&&Ji<9)&&r()
var t=0,n=function(){i.selForContextMenu==e.doc.sel&&0==i.input.selectionStart?ut(e,Uo.selectAll)(e):t++<10?i.detectingSelectAll=setTimeout(n,500):St(e)}
i.detectingSelectAll=setTimeout(n,200)}}if(!ii(e,t,"contextmenu")){var i=e.display
if(!At(i,t)&&!er(e,t)){var o=Ot(e,t),l=i.scroller.scrollTop
if(o&&!no){e.options.resetSelectionOnContextMenu&&-1==e.doc.sel.contains(o)&&ut(e,ce)(e.doc,Z(o),gl)
var s=i.input.style.cssText
if(i.inputDiv.style.position="absolute",i.input.style.cssText="position: fixed; width: 30px; height: 30px; top: "+(t.clientY-5)+"px; left: "+(t.clientX-5)+"px; z-index: 1000; background: "+(Qi?"rgba(255, 255, 255, .05)":"transparent")+"; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",eo)var a=window.scrollY
if(kt(e),eo&&window.scrollTo(null,a),St(e),e.somethingSelected()||(i.input.value=i.prevInput=" "),i.selForContextMenu=e.doc.sel,clearTimeout(i.detectingSelectAll),Qi&&Ji>=9&&r(),go){al(t)
var u=function(){cl(window,"mouseup",u),setTimeout(n,20)}
ul(window,"mouseup",u)}else setTimeout(n,50)}}}}function er(e,t){return!!li(e,"gutterContextMenu")&&Pt(e,t,"gutterContextMenu",!1,fl)}function tr(e,t){if(bo(e,t.from)<0)return e
if(bo(e,t.to)<=0)return Wo(t)
var r=e.line+t.text.length-(t.to.line-t.from.line)-1,n=e.ch
return e.line==t.to.line&&(n+=Wo(t).ch-t.to.ch),yo(r,n)}function rr(e,t){for(var r=[],n=0;n<e.sel.ranges.length;n++){var i=e.sel.ranges[n]
r.push(new $(tr(i.anchor,t),tr(i.head,t)))}return q(r,e.sel.primIndex)}function nr(e,t,r){return e.line==t.line?yo(r.line,e.ch-t.ch+r.ch):yo(r.line+(e.line-t.line),e.ch)}function ir(e,t,r){for(var n=[],i=yo(e.first,0),o=i,l=0;l<t.length;l++){var s=t[l],a=nr(s.from,i,o),u=nr(Wo(s),i,o)
if(i=s.to,o=u,"around"==r){var c=e.sel.ranges[l],f=bo(c.head,c.anchor)<0
n[l]=new $(f?u:a,f?a:u)}else n[l]=new $(a,a)}return new Y(n,e.sel.primIndex)}function or(e,t,r){var n={canceled:!1,from:t.from,to:t.to,text:t.text,origin:t.origin,cancel:function(){this.canceled=!0}}
return r&&(n.update=function(t,r,n,i){t&&(this.from=J(e,t)),r&&(this.to=J(e,r)),n&&(this.text=n),void 0!==i&&(this.origin=i)}),fl(e,"beforeChange",e,n),e.cm&&fl(e.cm,"beforeChange",e.cm,n),n.canceled?null:{from:n.from,to:n.to,text:n.text,origin:n.origin}}function lr(e,t,r){if(e.cm){if(!e.cm.curOp)return ut(e.cm,lr)(e,t,r)
if(e.cm.state.suppressEdits)return}if(!(li(e,"beforeChange")||e.cm&&li(e.cm,"beforeChange"))||(t=or(e,t,!0))){var n=vo&&!r&&Gr(e,t.from,t.to)
if(n)for(var i=n.length-1;i>=0;--i)sr(e,{from:n[i].from,to:n[i].to,text:i?[""]:t.text})
else sr(e,t)}}function sr(e,t){if(1!=t.text.length||""!=t.text[0]||0!=bo(t.from,t.to)){var r=rr(e,t)
Vn(e,t,r,e.cm?e.cm.curOp.id:NaN),cr(e,t,r,Rr(e,t))
var n=[]
Nn(e,function(e,r){r||-1!=hi(n,e.history)||(Qn(e.history,t),n.push(e.history)),cr(e,t,null,Rr(e,t))})}}function ar(e,t,r){if(!e.cm||!e.cm.state.suppressEdits){for(var n,i=e.history,o=e.sel,l="undo"==t?i.done:i.undone,s="undo"==t?i.undone:i.done,a=0;a<l.length&&(n=l[a],r?!n.ranges||n.equals(e.sel):n.ranges);a++);if(a!=l.length){for(i.lastOrigin=i.lastSelOrigin=null;n=l.pop(),n.ranges;){if(Xn(n,s),r&&!n.equals(e.sel))return void ce(e,n,{clearRedo:!1})
o=n}var u=[]
Xn(o,s),s.push({changes:u,generation:i.generation}),i.generation=n.generation||++i.maxGeneration
for(var c=li(e,"beforeChange")||e.cm&&li(e.cm,"beforeChange"),a=n.changes.length-1;a>=0;--a){var f=n.changes[a]
if(f.origin=t,c&&!or(e,f,!1))return void(l.length=0)
u.push(Fn(e,f))
var h=a?rr(e,f):fi(l)
cr(e,f,h,Br(e,f)),!a&&e.cm&&e.cm.scrollIntoView({from:f.from,to:Wo(f)})
var d=[]
Nn(e,function(e,t){t||-1!=hi(d,e.history)||(Qn(e.history,f),d.push(e.history)),cr(e,f,null,Br(e,f))})}}}}function ur(e,t){if(0!=t&&(e.first+=t,e.sel=new Y(di(e.sel.ranges,function(e){return new $(yo(e.anchor.line+t,e.anchor.ch),yo(e.head.line+t,e.head.ch))}),e.sel.primIndex),e.cm)){pt(e.cm,e.first,e.first-t,t)
for(var r=e.cm.display,n=r.viewFrom;n<r.viewTo;n++)gt(e.cm,n,"gutter")}}function cr(e,t,r,n){if(e.cm&&!e.cm.curOp)return ut(e.cm,cr)(e,t,r,n)
if(t.to.line<e.first)return void ur(e,t.text.length-1-(t.to.line-t.from.line))
if(!(t.from.line>e.lastLine())){if(t.from.line<e.first){var i=t.text.length-1-(e.first-t.from.line)
ur(e,i),t={from:yo(e.first,0),to:yo(t.to.line+i,t.to.ch),text:[fi(t.text)],origin:t.origin}}var o=e.lastLine()
t.to.line>o&&(t={from:t.from,to:yo(o,An(e,o).text.length),text:[t.text[0]],origin:t.origin}),t.removed=On(e,t.from,t.to),r||(r=rr(e,t)),e.cm?fr(e.cm,t,n):kn(e,t,n),fe(e,r,gl)}}function fr(e,t,r){var n=e.doc,i=e.display,l=t.from,s=t.to,a=!1,u=l.line
e.options.lineWrapping||(u=In(Zr(An(n,l.line))),n.iter(u,s.line+1,function(e){if(e==i.maxLine)return a=!0,!0})),n.sel.contains(t.from,t.to)>-1&&oi(e),kn(n,t,r,o(e)),e.options.lineWrapping||(n.iter(u,l.line+t.text.length,function(e){var t=h(e)
t>i.maxLineLength&&(i.maxLine=e,i.maxLineLength=t,i.maxLineChanged=!0,a=!1)}),a&&(e.curOp.updateMaxLine=!0)),n.frontier=Math.min(n.frontier,l.line),Ce(e,400)
var c=t.text.length-(s.line-l.line)-1
l.line!=s.line||1!=t.text.length||Sn(e.doc,t)?pt(e,l.line,s.line+1,c):gt(e,l.line,"text")
var f=li(e,"changes"),d=li(e,"change")
if(d||f){var p={from:l,to:s,text:t.text,removed:t.removed,origin:t.origin}
d&&ri(e,"change",e,p),f&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(p)}e.display.selForContextMenu=null}function hr(e,t,r,n,i){if(n||(n=r),bo(n,r)<0){var o=n
n=r,r=o}"string"==typeof t&&(t=Al(t)),lr(e,{from:r,to:n,text:t,origin:i})}function dr(e,t){var r=e.display,n=r.sizer.getBoundingClientRect(),i=null
if(t.top+n.top<0?i=!0:t.bottom+n.top>(window.innerHeight||document.documentElement.clientHeight)&&(i=!1),null!=i&&!so){var o=wi("div","​",null,"position: absolute; top: "+(t.top-r.viewOffset-Me(e.display))+"px; height: "+(t.bottom-t.top+dl)+"px; left: "+t.left+"px; width: 2px;")
e.display.lineSpace.appendChild(o),o.scrollIntoView(i),e.display.lineSpace.removeChild(o)}}function pr(e,t,r,n){null==n&&(n=0)
for(var i=0;i<5;i++){var o=!1,l=_e(e,t),s=r&&r!=t?_e(e,r):l,a=vr(e,Math.min(l.left,s.left),Math.min(l.top,s.top)-n,Math.max(l.left,s.left),Math.max(l.bottom,s.bottom)+n),u=e.doc.scrollTop,c=e.doc.scrollLeft
if(null!=a.scrollTop&&(Bt(e,a.scrollTop),Math.abs(e.doc.scrollTop-u)>1&&(o=!0)),null!=a.scrollLeft&&(Gt(e,a.scrollLeft),Math.abs(e.doc.scrollLeft-c)>1&&(o=!0)),!o)return l}}function gr(e,t,r,n,i){var o=vr(e,t,r,n,i)
null!=o.scrollTop&&Bt(e,o.scrollTop),null!=o.scrollLeft&&Gt(e,o.scrollLeft)}function vr(e,t,r,n,i){var o=e.display,l=Ze(e.display)
r<0&&(r=0)
var s=e.curOp&&null!=e.curOp.scrollTop?e.curOp.scrollTop:o.scroller.scrollTop,a=o.scroller.clientHeight-dl,u={}
i-r>a&&(i=r+a)
var c=e.doc.height+Te(o),f=r<l,h=i>c-l
if(r<s)u.scrollTop=f?0:r
else if(i>s+a){var d=Math.min(r,(h?c:i)-a)
d!=s&&(u.scrollTop=d)}var p=e.curOp&&null!=e.curOp.scrollLeft?e.curOp.scrollLeft:o.scroller.scrollLeft,g=o.scroller.clientWidth-dl-o.gutters.offsetWidth,v=n-t>g
return v&&(n=t+g),t<10?u.scrollLeft=0:t<p?u.scrollLeft=Math.max(0,t-(v?0:10)):n>g+p-3&&(u.scrollLeft=n+(v?0:10)-g),u}function mr(e,t,r){null==t&&null==r||br(e),null!=t&&(e.curOp.scrollLeft=(null==e.curOp.scrollLeft?e.doc.scrollLeft:e.curOp.scrollLeft)+t),null!=r&&(e.curOp.scrollTop=(null==e.curOp.scrollTop?e.doc.scrollTop:e.curOp.scrollTop)+r)}function yr(e){br(e)
var t=e.getCursor(),r=t,n=t
e.options.lineWrapping||(r=t.ch?yo(t.line,t.ch-1):t,n=yo(t.line,t.ch+1)),e.curOp.scrollToPos={from:r,to:n,margin:e.options.cursorScrollMargin,isCursor:!0}}function br(e){var t=e.curOp.scrollToPos
if(t){e.curOp.scrollToPos=null
var r=je(e,t.from),n=je(e,t.to),i=vr(e,Math.min(r.left,n.left),Math.min(r.top,n.top)-t.margin,Math.max(r.right,n.right),Math.max(r.bottom,n.bottom)+t.margin)
e.scrollTo(i.scrollLeft,i.scrollTop)}}function wr(e,t,r,n){var i,o=e.doc
null==r&&(r="add"),"smart"==r&&(o.mode.indent?i=ke(e,t):r="prev")
var l=e.options.tabSize,s=An(o,t),a=yl(s.text,null,l)
s.stateAfter&&(s.stateAfter=null)
var u,c=s.text.match(/^\s*/)[0]
if(n||/\S/.test(s.text)){if("smart"==r&&((u=o.mode.indent(i,s.text.slice(c.length),s.text))==pl||u>150)){if(!n)return
r="prev"}}else u=0,r="not"
"prev"==r?u=t>o.first?yl(An(o,t-1).text,null,l):0:"add"==r?u=a+e.options.indentUnit:"subtract"==r?u=a-e.options.indentUnit:"number"==typeof r&&(u=a+r),u=Math.max(0,u)
var f="",h=0
if(e.options.indentWithTabs)for(var d=Math.floor(u/l);d;--d)h+=l,f+="\t"
if(h<u&&(f+=ci(u-h)),f!=c)hr(o,f,yo(t,0),yo(t,c.length),"+input")
else for(var d=0;d<o.sel.ranges.length;d++){var p=o.sel.ranges[d]
if(p.head.line==t&&p.head.ch<c.length){var h=yo(t,c.length)
le(o,d,new $(h,h))
break}}s.stateAfter=null}function xr(e,t,r,n){var i=t,o=t
return"number"==typeof t?o=An(e,Q(e,t)):i=In(t),null==i?null:(n(o,i)&&e.cm&&gt(e.cm,i,r),o)}function Cr(e,t){for(var r=e.doc.sel.ranges,n=[],i=0;i<r.length;i++){for(var o=t(r[i]);n.length&&bo(o.from,fi(n).to)<=0;){var l=n.pop()
if(bo(l.from,o.from)<0){o.from=l.from
break}}n.push(o)}at(e,function(){for(var t=n.length-1;t>=0;t--)hr(e.doc,"",n[t].from,n[t].to,"+delete")
yr(e)})}function Lr(e,t,r,n,i){function o(){var t=s+r
return t<e.first||t>=e.first+e.size?f=!1:(s=t,c=An(e,t))}function l(e){var t=(i?ji:Yi)(c,a,r,!0)
if(null==t){if(e||!o())return f=!1
a=i?(r<0?Bi:Fi)(c):r<0?c.text.length:0}else a=t
return!0}var s=t.line,a=t.ch,u=r,c=An(e,s),f=!0
if("char"==n)l()
else if("column"==n)l(!0)
else if("word"==n||"group"==n)for(var h=null,d="group"==n,p=e.cm&&e.cm.getHelper(t,"wordChars"),g=!0;!(r<0)||l(!g);g=!1){var v=c.text.charAt(a)||"\n",m=mi(v,p)?"w":d&&"\n"==v?"n":!d||/\s/.test(v)?null:"p"
if(!d||g||m||(m="s"),h&&h!=m){r<0&&(r=1,l())
break}if(m&&(h=m),r>0&&!l(!g))break}var y=ge(e,yo(s,a),u,!0)
return f||(y.hitSide=!0),y}function Sr(e,t,r,n){var i,o=e.doc,l=t.left
if("page"==n){var s=Math.min(e.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight)
i=t.top+r*(s-(r<0?1.5:.5)*Ze(e.display))}else"line"==n&&(i=r>0?t.bottom+3:t.top-3)
for(;;){var a=$e(e,l,i)
if(!a.outside)break
if(r<0?i<=0:i>=o.height){a.hitSide=!0
break}i+=5*r}return a}function kr(t,r,n,i){e.defaults[t]=r,n&&(Io[t]=i?function(e,t,r){r!=Eo&&n(e,t,r)}:n)}function Mr(e){return"string"==typeof e?Ko[e]:e}function Tr(e,t,r,n,i){if(n&&n.shared)return Nr(e,t,r,n,i)
if(e.cm&&!e.cm.curOp)return ut(e.cm,Tr)(e,t,r,n,i)
var o=new $o(e,i),l=bo(t,r)
if(n&&gi(n,o,!1),l>0||0==l&&!1!==o.clearWhenEmpty)return o
if(o.replacedWith&&(o.collapsed=!0,o.widgetNode=wi("span",[o.replacedWith],"CodeMirror-widget"),n.handleMouseEvents||(o.widgetNode.ignoreEvents=!0),n.insertLeft&&(o.widgetNode.insertLeft=!0)),o.collapsed){if(qr(e,t.line,t,r,o)||t.line!=r.line&&qr(e,r.line,t,r,o))throw new Error("Inserting collapsed marker partially overlapping an existing one")
mo=!0}o.addToHistory&&Vn(e,{from:t,to:r,origin:"markText"},e.sel,NaN)
var s,a=t.line,u=e.cm
if(e.iter(a,r.line+1,function(e){u&&o.collapsed&&!u.options.lineWrapping&&Zr(e)==u.display.maxLine&&(s=!0),o.collapsed&&a!=t.line&&Dn(e,0),Er(e,new Wr(o,a==t.line?t.ch:null,a==r.line?r.ch:null)),++a}),o.collapsed&&e.iter(t.line,r.line+1,function(t){tn(e,t)&&Dn(t,0)}),o.clearOnEnter&&ul(o,"beforeCursorEnter",function(){o.clear()}),o.readOnly&&(vo=!0,(e.history.done.length||e.history.undone.length)&&e.clearHistory()),o.collapsed&&(o.id=++qo,o.atomic=!0),u){if(s&&(u.curOp.updateMaxLine=!0),o.collapsed)pt(u,t.line,r.line+1)
else if(o.className||o.title||o.startStyle||o.endStyle)for(var c=t.line;c<=r.line;c++)gt(u,c,"text")
o.atomic&&de(u.doc),ri(u,"markerAdded",u,o)}return o}function Nr(e,t,r,n,i){n=gi(n),n.shared=!1
var o=[Tr(e,t,r,n,i)],l=o[0],s=n.widgetNode
return Nn(e,function(e){s&&(n.widgetNode=s.cloneNode(!0)),o.push(Tr(e,J(e,t),J(e,r),n,i))
for(var a=0;a<e.linked.length;++a)if(e.linked[a].isParent)return
l=fi(o)}),new Zo(o,l)}function Hr(e){return e.findMarks(yo(e.first,0),e.clipPos(yo(e.lastLine())),function(e){return e.parent})}function Ar(e,t){for(var r=0;r<t.length;r++){var n=t[r],i=n.find(),o=e.clipPos(i.from),l=e.clipPos(i.to)
if(bo(o,l)){var s=Tr(e,o,l,n.primary,n.primary.type)
n.markers.push(s),s.parent=n}}}function Or(e){for(var t=0;t<e.length;t++){var r=e[t],n=[r.primary.doc]
Nn(r.primary.doc,function(e){n.push(e)})
for(var i=0;i<r.markers.length;i++){var o=r.markers[i];-1==hi(n,o.doc)&&(o.parent=null,r.markers.splice(i--,1))}}}function Wr(e,t,r){this.marker=e,this.from=t,this.to=r}function Dr(e,t){if(e)for(var r=0;r<e.length;++r){var n=e[r]
if(n.marker==t)return n}}function Ir(e,t){for(var r,n=0;n<e.length;++n)e[n]!=t&&(r||(r=[])).push(e[n])
return r}function Er(e,t){e.markedSpans=e.markedSpans?e.markedSpans.concat([t]):[t],t.marker.attachLine(e)}function Pr(e,t,r){if(e)for(var n,i=0;i<e.length;++i){var o=e[i],l=o.marker,s=null==o.from||(l.inclusiveLeft?o.from<=t:o.from<t)
if(s||o.from==t&&"bookmark"==l.type&&(!r||!o.marker.insertLeft)){var a=null==o.to||(l.inclusiveRight?o.to>=t:o.to>t);(n||(n=[])).push(new Wr(l,o.from,a?null:o.to))}}return n}function zr(e,t,r){if(e)for(var n,i=0;i<e.length;++i){var o=e[i],l=o.marker,s=null==o.to||(l.inclusiveRight?o.to>=t:o.to>t)
if(s||o.from==t&&"bookmark"==l.type&&(!r||o.marker.insertLeft)){var a=null==o.from||(l.inclusiveLeft?o.from<=t:o.from<t);(n||(n=[])).push(new Wr(l,a?null:o.from-t,null==o.to?null:o.to-t))}}return n}function Rr(e,t){var r=te(e,t.from.line)&&An(e,t.from.line).markedSpans,n=te(e,t.to.line)&&An(e,t.to.line).markedSpans
if(!r&&!n)return null
var i=t.from.ch,o=t.to.ch,l=0==bo(t.from,t.to),s=Pr(r,i,l),a=zr(n,o,l),u=1==t.text.length,c=fi(t.text).length+(u?i:0)
if(s)for(var f=0;f<s.length;++f){var h=s[f]
if(null==h.to){var d=Dr(a,h.marker)
d?u&&(h.to=null==d.to?null:d.to+c):h.to=i}}if(a)for(var f=0;f<a.length;++f){var h=a[f]
if(null!=h.to&&(h.to+=c),null==h.from){var d=Dr(s,h.marker)
d||(h.from=c,u&&(s||(s=[])).push(h))}else h.from+=c,u&&(s||(s=[])).push(h)}s&&(s=Fr(s)),a&&a!=s&&(a=Fr(a))
var p=[s]
if(!u){var g,v=t.text.length-2
if(v>0&&s)for(var f=0;f<s.length;++f)null==s[f].to&&(g||(g=[])).push(new Wr(s[f].marker,null,null))
for(var f=0;f<v;++f)p.push(g)
p.push(a)}return p}function Fr(e){for(var t=0;t<e.length;++t){var r=e[t]
null!=r.from&&r.from==r.to&&!1!==r.marker.clearWhenEmpty&&e.splice(t--,1)}return e.length?e:null}function Br(e,t){var r=Yn(e,t),n=Rr(e,t)
if(!r)return n
if(!n)return r
for(var i=0;i<r.length;++i){var o=r[i],l=n[i]
if(o&&l)e:for(var s=0;s<l.length;++s){for(var a=l[s],u=0;u<o.length;++u)if(o[u].marker==a.marker)continue e
o.push(a)}else l&&(r[i]=l)}return r}function Gr(e,t,r){var n=null
if(e.iter(t.line,r.line+1,function(e){if(e.markedSpans)for(var t=0;t<e.markedSpans.length;++t){var r=e.markedSpans[t].marker
!r.readOnly||n&&-1!=hi(n,r)||(n||(n=[])).push(r)}}),!n)return null
for(var i=[{from:t,to:r}],o=0;o<n.length;++o)for(var l=n[o],s=l.find(0),a=0;a<i.length;++a){var u=i[a]
if(!(bo(u.to,s.from)<0||bo(u.from,s.to)>0)){var c=[a,1],f=bo(u.from,s.from),h=bo(u.to,s.to);(f<0||!l.inclusiveLeft&&!f)&&c.push({from:u.from,to:s.from}),(h>0||!l.inclusiveRight&&!h)&&c.push({from:s.to,to:u.to}),i.splice.apply(i,c),a+=c.length-1}}return i}function Vr(e){var t=e.markedSpans
if(t){for(var r=0;r<t.length;++r)t[r].marker.detachLine(e)
e.markedSpans=null}}function Ur(e,t){if(t){for(var r=0;r<t.length;++r)t[r].marker.attachLine(e)
e.markedSpans=t}}function Kr(e){return e.inclusiveLeft?-1:0}function Xr(e){return e.inclusiveRight?1:0}function _r(e,t){var r=e.lines.length-t.lines.length
if(0!=r)return r
var n=e.find(),i=t.find(),o=bo(n.from,i.from)||Kr(e)-Kr(t)
if(o)return-o
var l=bo(n.to,i.to)||Xr(e)-Xr(t)
return l||t.id-e.id}function jr(e,t){var r,n=mo&&e.markedSpans
if(n)for(var i,o=0;o<n.length;++o)i=n[o],i.marker.collapsed&&null==(t?i.from:i.to)&&(!r||_r(r,i.marker)<0)&&(r=i.marker)
return r}function Yr(e){return jr(e,!0)}function $r(e){return jr(e,!1)}function qr(e,t,r,n,i){var o=An(e,t),l=mo&&o.markedSpans
if(l)for(var s=0;s<l.length;++s){var a=l[s]
if(a.marker.collapsed){var u=a.marker.find(0),c=bo(u.from,r)||Kr(a.marker)-Kr(i),f=bo(u.to,n)||Xr(a.marker)-Xr(i)
if(!(c>=0&&f<=0||c<=0&&f>=0)&&(c<=0&&(bo(u.to,r)>0||a.marker.inclusiveRight&&i.inclusiveLeft)||c>=0&&(bo(u.from,n)<0||a.marker.inclusiveLeft&&i.inclusiveRight)))return!0}}}function Zr(e){for(var t;t=Yr(e);)e=t.find(-1,!0).line
return e}function Qr(e){for(var t,r;t=$r(e);)e=t.find(1,!0).line,(r||(r=[])).push(e)
return r}function Jr(e,t){var r=An(e,t),n=Zr(r)
return r==n?t:In(n)}function en(e,t){if(t>e.lastLine())return t
var r,n=An(e,t)
if(!tn(e,n))return t
for(;r=$r(n);)n=r.find(1,!0).line
return In(n)+1}function tn(e,t){var r=mo&&t.markedSpans
if(r)for(var n,i=0;i<r.length;++i)if(n=r[i],n.marker.collapsed){if(null==n.from)return!0
if(!n.marker.widgetNode&&0==n.from&&n.marker.inclusiveLeft&&rn(e,t,n))return!0}}function rn(e,t,r){if(null==r.to){var n=r.marker.find(1,!0)
return rn(e,n.line,Dr(n.line.markedSpans,r.marker))}if(r.marker.inclusiveRight&&r.to==t.text.length)return!0
for(var i,o=0;o<t.markedSpans.length;++o)if(i=t.markedSpans[o],i.marker.collapsed&&!i.marker.widgetNode&&i.from==r.to&&(null==i.to||i.to!=r.from)&&(i.marker.inclusiveLeft||r.marker.inclusiveRight)&&rn(e,t,i))return!0}function nn(e,t,r){Pn(t)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&mr(e,null,r)}function on(e){if(null!=e.height)return e.height
if(!Li(document.body,e.node)){var t="position: relative;"
e.coverGutter&&(t+="margin-left: -"+e.cm.getGutterElement().offsetWidth+"px;"),Ci(e.cm.display.measure,wi("div",[e.node],null,t))}return e.height=e.node.offsetHeight}function ln(e,t,r,n){var i=new Qo(e,r,n)
return i.noHScroll&&(e.display.alignWidgets=!0),xr(e.doc,t,"widget",function(t){var r=t.widgets||(t.widgets=[])
if(null==i.insertAt?r.push(i):r.splice(Math.min(r.length-1,Math.max(0,i.insertAt)),0,i),i.line=t,!tn(e.doc,t)){var n=Pn(t)<e.doc.scrollTop
Dn(t,t.height+on(i)),n&&mr(e,null,i.height),e.curOp.forceUpdate=!0}return!0}),i}function sn(e,t,r,n){e.text=t,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),null!=e.order&&(e.order=null),Vr(e),Ur(e,r)
var i=n?n(e):1
i!=e.height&&Dn(e,i)}function an(e){e.parent=null,Vr(e)}function un(e,t){if(e)for(;;){var r=e.match(/(?:^|\s+)line-(background-)?(\S+)/)
if(!r)break
e=e.slice(0,r.index)+e.slice(r.index+r[0].length)
var n=r[1]?"bgClass":"textClass"
null==t[n]?t[n]=r[2]:new RegExp("(?:^|s)"+r[2]+"(?:$|s)").test(t[n])||(t[n]+=" "+r[2])}return e}function cn(t,r){if(t.blankLine)return t.blankLine(r)
if(t.innerMode){var n=e.innerMode(t,r)
return n.mode.blankLine?n.mode.blankLine(n.state):void 0}}function fn(e,t,r){for(var n=0;n<10;n++){var i=e.token(t,r)
if(t.pos>t.start)return i}throw new Error("Mode "+e.name+" failed to advance stream.")}function hn(t,r,n,i,o,l,s){var a=n.flattenSpans
null==a&&(a=t.options.flattenSpans)
var u,c=0,f=null,h=new Yo(r,t.options.tabSize)
for(""==r&&un(cn(n,i),l);!h.eol();){if(h.pos>t.options.maxHighlightLength?(a=!1,s&&gn(t,r,i,h.pos),h.pos=r.length,u=null):u=un(fn(n,h,i),l),t.options.addModeClass){var d=e.innerMode(n,i).mode.name
d&&(u="m-"+(u?d+" "+u:d))}a&&f==u||(c<h.start&&o(h.start,f),c=h.start,f=u),h.start=h.pos}for(;c<h.pos;){var p=Math.min(h.pos,c+5e4)
o(p,f),c=p}}function dn(e,t,r,n){var i=[e.state.modeGen],o={}
hn(e,t.text,e.doc.mode,r,function(e,t){i.push(e,t)},o,n)
for(var l=0;l<e.state.overlays.length;++l){var s=e.state.overlays[l],a=1,u=0
hn(e,t.text,s.mode,!0,function(e,t){for(var r=a;u<e;){var n=i[a]
n>e&&i.splice(a,1,e,i[a+1],n),a+=2,u=Math.min(e,n)}if(t)if(s.opaque)i.splice(r,a-r,e,"cm-overlay "+t),a=r+2
else for(;r<a;r+=2){var o=i[r+1]
i[r+1]=(o?o+" ":"")+"cm-overlay "+t}},o)}return{styles:i,classes:o.bgClass||o.textClass?o:null}}function pn(e,t){if(!t.styles||t.styles[0]!=e.state.modeGen){var r=dn(e,t,t.stateAfter=ke(e,In(t)))
t.styles=r.styles,r.classes?t.styleClasses=r.classes:t.styleClasses&&(t.styleClasses=null)}return t.styles}function gn(e,t,r,n){var i=e.doc.mode,o=new Yo(t,e.options.tabSize)
for(o.start=o.pos=n||0,""==t&&cn(i,r);!o.eol()&&o.pos<=e.options.maxHighlightLength;)fn(i,o,r),o.start=o.pos}function vn(e,t){if(!e||/^\s*$/.test(e))return null
var r=t.addModeClass?tl:el
return r[e]||(r[e]=e.replace(/\S+/g,"cm-$&"))}function mn(e,t){var r=wi("span",null,null,eo?"padding-right: .1px":null),n={pre:wi("pre",[r]),content:r,col:0,pos:0,cm:e}
t.measure={}
for(var i=0;i<=(t.rest?t.rest.length:0);i++){var o,l=i?t.rest[i-1]:t.line
n.pos=0,n.addToken=bn,(Qi||eo)&&e.getOption("lineWrapping")&&(n.addToken=wn(n.addToken)),Ii(e.display.measure)&&(o=zn(l))&&(n.addToken=xn(n.addToken,o)),n.map=[],Ln(l,n,pn(e,l)),l.styleClasses&&(l.styleClasses.bgClass&&(n.bgClass=Ni(l.styleClasses.bgClass,n.bgClass||"")),l.styleClasses.textClass&&(n.textClass=Ni(l.styleClasses.textClass,n.textClass||""))),0==n.map.length&&n.map.push(0,0,n.content.appendChild(Di(e.display.measure))),0==i?(t.measure.map=n.map,t.measure.cache={}):((t.measure.maps||(t.measure.maps=[])).push(n.map),(t.measure.caches||(t.measure.caches=[])).push({}))}return fl(e,"renderLine",e,t.line,n.pre),n.pre.className&&(n.textClass=Ni(n.pre.className,n.textClass||"")),n}function yn(e){var t=wi("span","•","cm-invalidchar")
return t.title="\\u"+e.charCodeAt(0).toString(16),t}function bn(e,t,r,n,i,o){if(t){var l=e.cm.options.specialChars,s=!1
if(l.test(t))for(var a=document.createDocumentFragment(),u=0;;){l.lastIndex=u
var c=l.exec(t),f=c?c.index-u:t.length-u
if(f){var h=document.createTextNode(t.slice(u,u+f))
Qi&&Ji<9?a.appendChild(wi("span",[h])):a.appendChild(h),e.map.push(e.pos,e.pos+f,h),e.col+=f,e.pos+=f}if(!c)break
if(u+=f+1,"\t"==c[0]){var d=e.cm.options.tabSize,p=d-e.col%d,h=a.appendChild(wi("span",ci(p),"cm-tab"))
e.col+=p}else{var h=e.cm.options.specialCharPlaceholder(c[0])
Qi&&Ji<9?a.appendChild(wi("span",[h])):a.appendChild(h),e.col+=1}e.map.push(e.pos,e.pos+1,h),e.pos++}else{e.col+=t.length
var a=document.createTextNode(t)
e.map.push(e.pos,e.pos+t.length,a),Qi&&Ji<9&&(s=!0),e.pos+=t.length}if(r||n||i||s){var g=r||""
n&&(g+=n),i&&(g+=i)
var v=wi("span",[a],g)
return o&&(v.title=o),e.content.appendChild(v)}e.content.appendChild(a)}}function wn(e){function t(e){for(var t=" ",r=0;r<e.length-2;++r)t+=r%2?" ":" "
return t+=" "}return function(r,n,i,o,l,s){e(r,n.replace(/ {3,}/g,t),i,o,l,s)}}function xn(e,t){return function(r,n,i,o,l,s){i=i?i+" cm-force-border":"cm-force-border"
for(var a=r.pos,u=a+n.length;;){for(var c=0;c<t.length;c++){var f=t[c]
if(f.to>a&&f.from<=a)break}if(f.to>=u)return e(r,n,i,o,l,s)
e(r,n.slice(0,f.to-a),i,o,null,s),o=null,n=n.slice(f.to-a),a=f.to}}}function Cn(e,t,r,n){var i=!n&&r.widgetNode
i&&(e.map.push(e.pos,e.pos+t,i),e.content.appendChild(i)),e.pos+=t}function Ln(e,t,r){var n=e.markedSpans,i=e.text,o=0
if(n)for(var l,s,a,u,c,f,h=i.length,d=0,p=1,g="",v=0;;){if(v==d){s=a=u=c="",f=null,v=1/0
for(var m=[],y=0;y<n.length;++y){var b=n[y],w=b.marker
b.from<=d&&(null==b.to||b.to>d)?(null!=b.to&&v>b.to&&(v=b.to,a=""),w.className&&(s+=" "+w.className),w.startStyle&&b.from==d&&(u+=" "+w.startStyle),w.endStyle&&b.to==v&&(a+=" "+w.endStyle),w.title&&!c&&(c=w.title),w.collapsed&&(!f||_r(f.marker,w)<0)&&(f=b)):b.from>d&&v>b.from&&(v=b.from),"bookmark"==w.type&&b.from==d&&w.widgetNode&&m.push(w)}if(f&&(f.from||0)==d&&(Cn(t,(null==f.to?h+1:f.to)-d,f.marker,null==f.from),null==f.to))return
if(!f&&m.length)for(var y=0;y<m.length;++y)Cn(t,0,m[y])}if(d>=h)break
for(var x=Math.min(h,v);;){if(g){var C=d+g.length
if(!f){var L=C>x?g.slice(0,x-d):g
t.addToken(t,L,l?l+s:s,u,d+L.length==v?a:"",c)}if(C>=x){g=g.slice(x-d),d=x
break}d=C,u=""}g=i.slice(o,o=r[p++]),l=vn(r[p++],t.cm.options)}}else for(var p=1;p<r.length;p+=2)t.addToken(t,i.slice(o,o=r[p]),vn(r[p+1],t.cm.options))}function Sn(e,t){return 0==t.from.ch&&0==t.to.ch&&""==fi(t.text)&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function kn(e,t,r,n){function i(e){return r?r[e]:null}function o(e,r,i){sn(e,r,i,n),ri(e,"change",e,t)}var l=t.from,s=t.to,a=t.text,u=An(e,l.line),c=An(e,s.line),f=fi(a),h=i(a.length-1),d=s.line-l.line
if(Sn(e,t)){for(var p=0,g=[];p<a.length-1;++p)g.push(new Jo(a[p],i(p),n))
o(c,c.text,h),d&&e.remove(l.line,d),g.length&&e.insert(l.line,g)}else if(u==c)if(1==a.length)o(u,u.text.slice(0,l.ch)+f+u.text.slice(s.ch),h)
else{for(var g=[],p=1;p<a.length-1;++p)g.push(new Jo(a[p],i(p),n))
g.push(new Jo(f+u.text.slice(s.ch),h,n)),o(u,u.text.slice(0,l.ch)+a[0],i(0)),e.insert(l.line+1,g)}else if(1==a.length)o(u,u.text.slice(0,l.ch)+a[0]+c.text.slice(s.ch),i(0)),e.remove(l.line+1,d)
else{o(u,u.text.slice(0,l.ch)+a[0],i(0)),o(c,f+c.text.slice(s.ch),h)
for(var p=1,g=[];p<a.length-1;++p)g.push(new Jo(a[p],i(p),n))
d>1&&e.remove(l.line+1,d-1),e.insert(l.line+1,g)}ri(e,"change",e,t)}function Mn(e){this.lines=e,this.parent=null
for(var t=0,r=0;t<e.length;++t)e[t].parent=this,r+=e[t].height
this.height=r}function Tn(e){this.children=e
for(var t=0,r=0,n=0;n<e.length;++n){var i=e[n]
t+=i.chunkSize(),r+=i.height,i.parent=this}this.size=t,this.height=r,this.parent=null}function Nn(e,t,r){function n(e,i,o){if(e.linked)for(var l=0;l<e.linked.length;++l){var s=e.linked[l]
if(s.doc!=i){var a=o&&s.sharedHist
r&&!a||(t(s.doc,a),n(s.doc,e,a))}}}n(e,null,!0)}function Hn(e,t){if(t.cm)throw new Error("This document is already in use.")
e.doc=t,t.cm=e,l(e),r(e),e.options.lineWrapping||d(e),e.options.mode=t.modeOption,pt(e)}function An(e,t){if((t-=e.first)<0||t>=e.size)throw new Error("There is no line "+(t+e.first)+" in the document.")
for(var r=e;!r.lines;)for(var n=0;;++n){var i=r.children[n],o=i.chunkSize()
if(t<o){r=i
break}t-=o}return r.lines[t]}function On(e,t,r){var n=[],i=t.line
return e.iter(t.line,r.line+1,function(e){var o=e.text
i==r.line&&(o=o.slice(0,r.ch)),i==t.line&&(o=o.slice(t.ch)),n.push(o),++i}),n}function Wn(e,t,r){var n=[]
return e.iter(t,r,function(e){n.push(e.text)}),n}function Dn(e,t){var r=t-e.height
if(r)for(var n=e;n;n=n.parent)n.height+=r}function In(e){if(null==e.parent)return null
for(var t=e.parent,r=hi(t.lines,e),n=t.parent;n;t=n,n=n.parent)for(var i=0;n.children[i]!=t;++i)r+=n.children[i].chunkSize()
return r+t.first}function En(e,t){var r=e.first
e:do{for(var n=0;n<e.children.length;++n){var i=e.children[n],o=i.height
if(t<o){e=i
continue e}t-=o,r+=i.chunkSize()}return r}while(!e.lines)
for(var n=0;n<e.lines.length;++n){var l=e.lines[n],s=l.height
if(t<s)break
t-=s}return r+n}function Pn(e){e=Zr(e)
for(var t=0,r=e.parent,n=0;n<r.lines.length;++n){var i=r.lines[n]
if(i==e)break
t+=i.height}for(var o=r.parent;o;r=o,o=r.parent)for(var n=0;n<o.children.length;++n){var l=o.children[n]
if(l==r)break
t+=l.height}return t}function zn(e){var t=e.order
return null==t&&(t=e.order=Pl(e.text)),t}function Rn(e){this.done=[],this.undone=[],this.undoDepth=1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e||1}function Fn(e,t){var r={from:X(t.from),to:Wo(t),text:On(e,t.from,t.to)}
return _n(e,r,t.from.line,t.to.line+1),Nn(e,function(e){_n(e,r,t.from.line,t.to.line+1)},!0),r}function Bn(e){for(;e.length;){if(!fi(e).ranges)break
e.pop()}}function Gn(e,t){return t?(Bn(e.done),fi(e.done)):e.done.length&&!fi(e.done).ranges?fi(e.done):e.done.length>1&&!e.done[e.done.length-2].ranges?(e.done.pop(),fi(e.done)):void 0}function Vn(e,t,r,n){var i=e.history
i.undone.length=0
var o,l=+new Date
if((i.lastOp==n||i.lastOrigin==t.origin&&t.origin&&("+"==t.origin.charAt(0)&&e.cm&&i.lastModTime>l-e.cm.options.historyEventDelay||"*"==t.origin.charAt(0)))&&(o=Gn(i,i.lastOp==n))){var s=fi(o.changes)
0==bo(t.from,t.to)&&0==bo(t.from,s.to)?s.to=Wo(t):o.changes.push(Fn(e,t))}else{var a=fi(i.done)
for(a&&a.ranges||Xn(e.sel,i.done),o={changes:[Fn(e,t)],generation:i.generation},i.done.push(o);i.done.length>i.undoDepth;)i.done.shift(),i.done[0].ranges||i.done.shift()}i.done.push(r),i.generation=++i.maxGeneration,i.lastModTime=i.lastSelTime=l,i.lastOp=i.lastSelOp=n,i.lastOrigin=i.lastSelOrigin=t.origin,s||fl(e,"historyAdded")}function Un(e,t,r,n){var i=t.charAt(0)
return"*"==i||"+"==i&&r.ranges.length==n.ranges.length&&r.somethingSelected()==n.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}function Kn(e,t,r,n){var i=e.history,o=n&&n.origin
r==i.lastSelOp||o&&i.lastSelOrigin==o&&(i.lastModTime==i.lastSelTime&&i.lastOrigin==o||Un(e,o,fi(i.done),t))?i.done[i.done.length-1]=t:Xn(t,i.done),i.lastSelTime=+new Date,i.lastSelOrigin=o,i.lastSelOp=r,n&&!1!==n.clearRedo&&Bn(i.undone)}function Xn(e,t){var r=fi(t)
r&&r.ranges&&r.equals(e)||t.push(e)}function _n(e,t,r,n){var i=t["spans_"+e.id],o=0
e.iter(Math.max(e.first,r),Math.min(e.first+e.size,n),function(r){r.markedSpans&&((i||(i=t["spans_"+e.id]={}))[o]=r.markedSpans),++o})}function jn(e){if(!e)return null
for(var t,r=0;r<e.length;++r)e[r].marker.explicitlyCleared?t||(t=e.slice(0,r)):t&&t.push(e[r])
return t?t.length?t:null:e}function Yn(e,t){var r=t["spans_"+e.id]
if(!r)return null
for(var n=0,i=[];n<t.text.length;++n)i.push(jn(r[n]))
return i}function $n(e,t,r){for(var n=0,i=[];n<e.length;++n){var o=e[n]
if(o.ranges)i.push(r?Y.prototype.deepCopy.call(o):o)
else{var l=o.changes,s=[]
i.push({changes:s})
for(var a=0;a<l.length;++a){var u,c=l[a]
if(s.push({from:c.from,to:c.to,text:c.text}),t)for(var f in c)(u=f.match(/^spans_(\d+)$/))&&hi(t,Number(u[1]))>-1&&(fi(s)[f]=c[f],delete c[f])}}}return i}function qn(e,t,r,n){r<e.line?e.line+=n:t<e.line&&(e.line=t,e.ch=0)}function Zn(e,t,r,n){for(var i=0;i<e.length;++i){var o=e[i],l=!0
if(o.ranges){o.copied||(o=e[i]=o.deepCopy(),o.copied=!0)
for(var s=0;s<o.ranges.length;s++)qn(o.ranges[s].anchor,t,r,n),qn(o.ranges[s].head,t,r,n)}else{for(var s=0;s<o.changes.length;++s){var a=o.changes[s]
if(r<a.from.line)a.from=yo(a.from.line+n,a.from.ch),a.to=yo(a.to.line+n,a.to.ch)
else if(t<=a.to.line){l=!1
break}}l||(e.splice(0,i+1),i=0)}}}function Qn(e,t){var r=t.from.line,n=t.to.line,i=t.text.length-(n-r)-1
Zn(e.done,r,n,i),Zn(e.undone,r,n,i)}function Jn(e){return null!=e.defaultPrevented?e.defaultPrevented:0==e.returnValue}function ei(e){return e.target||e.srcElement}function ti(e){var t=e.which
return null==t&&(1&e.button?t=1:2&e.button?t=3:4&e.button&&(t=2)),co&&e.ctrlKey&&1==t&&(t=3),t}function ri(e,t){var r=e._handlers&&e._handlers[t]
if(r){var n,i=Array.prototype.slice.call(arguments,2)
So?n=So.delayedCallbacks:hl?n=hl:(n=hl=[],setTimeout(ni,0))
for(var o=0;o<r.length;++o)n.push(function(e){return function(){e.apply(null,i)}}(r[o]))}}function ni(){var e=hl
hl=null
for(var t=0;t<e.length;++t)e[t]()}function ii(e,t,r){return fl(e,r||t.type,e,t),Jn(t)||t.codemirrorIgnore}function oi(e){var t=e._handlers&&e._handlers.cursorActivity
if(t)for(var r=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),n=0;n<t.length;++n)-1==hi(r,t[n])&&r.push(t[n])}function li(e,t){var r=e._handlers&&e._handlers[t]
return r&&r.length>0}function si(e){e.prototype.on=function(e,t){ul(this,e,t)},e.prototype.off=function(e,t){cl(this,e,t)}}function ai(){this.id=null}function ui(e,t,r){for(var n=0,i=0;;){var o=e.indexOf("\t",n);-1==o&&(o=e.length)
var l=o-n
if(o==e.length||i+l>=t)return n+Math.min(l,t-i)
if(i+=o-n,i+=r-i%r,n=o+1,i>=t)return n}}function ci(e){for(;bl.length<=e;)bl.push(fi(bl)+" ")
return bl[e]}function fi(e){return e[e.length-1]}function hi(e,t){for(var r=0;r<e.length;++r)if(e[r]==t)return r
return-1}function di(e,t){for(var r=[],n=0;n<e.length;n++)r[n]=t(e[n],n)
return r}function pi(e,t){var r
if(Object.create)r=Object.create(e)
else{var n=function(){}
n.prototype=e,r=new n}return t&&gi(t,r),r}function gi(e,t,r){t||(t={})
for(var n in e)!e.hasOwnProperty(n)||!1===r&&t.hasOwnProperty(n)||(t[n]=e[n])
return t}function vi(e){var t=Array.prototype.slice.call(arguments,1)
return function(){return e.apply(null,t)}}function mi(e,t){return t?!!(t.source.indexOf("\\w")>-1&&Ll(e))||t.test(e):Ll(e)}function yi(e){for(var t in e)if(e.hasOwnProperty(t)&&e[t])return!1
return!0}function bi(e){return e.charCodeAt(0)>=768&&Sl.test(e)}function wi(e,t,r,n){var i=document.createElement(e)
if(r&&(i.className=r),n&&(i.style.cssText=n),"string"==typeof t)i.appendChild(document.createTextNode(t))
else if(t)for(var o=0;o<t.length;++o)i.appendChild(t[o])
return i}function xi(e){for(var t=e.childNodes.length;t>0;--t)e.removeChild(e.firstChild)
return e}function Ci(e,t){return xi(e).appendChild(t)}function Li(e,t){if(e.contains)return e.contains(t)
for(;t=t.parentNode;)if(t==e)return!0}function Si(){return document.activeElement}function ki(e){return new RegExp("\\b"+e+"\\b\\s*")}function Mi(e,t){var r=ki(t)
r.test(e.className)&&(e.className=e.className.replace(r,""))}function Ti(e,t){ki(t).test(e.className)||(e.className+=" "+t)}function Ni(e,t){for(var r=e.split(" "),n=0;n<r.length;n++)r[n]&&!ki(r[n]).test(t)&&(t+=" "+r[n])
return t}function Hi(e){if(document.body.getElementsByClassName)for(var t=document.body.getElementsByClassName("CodeMirror"),r=0;r<t.length;r++){var n=t[r].CodeMirror
n&&e(n)}}function Ai(){Nl||(Oi(),Nl=!0)}function Oi(){var e
ul(window,"resize",function(){null==e&&(e=setTimeout(function(){e=null,kl=null,Hi(Ht)},100))}),ul(window,"blur",function(){Hi(Qt)})}function Wi(e){if(null!=kl)return kl
var t=wi("div",null,null,"width: 50px; height: 50px; overflow-x: scroll")
return Ci(e,t),t.offsetWidth&&(kl=t.offsetHeight-t.clientHeight),kl||0}function Di(e){if(null==Ml){var t=wi("span","​")
Ci(e,wi("span",[t,document.createTextNode("x")])),0!=e.firstChild.offsetHeight&&(Ml=t.offsetWidth<=1&&t.offsetHeight>2&&!(Qi&&Ji<8))}return Ml?wi("span","​"):wi("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px")}function Ii(e){if(null!=Tl)return Tl
var t=Ci(e,document.createTextNode("AخA")),r=xl(t,0,1).getBoundingClientRect()
if(!r||r.left==r.right)return!1
var n=xl(t,1,2).getBoundingClientRect()
return Tl=n.right-r.right<3}function Ei(e){if(null!=Dl)return Dl
var t=Ci(e,wi("span","x")),r=t.getBoundingClientRect(),n=xl(t,0,1).getBoundingClientRect()
return Dl=Math.abs(r.left-n.left)>1}function Pi(e,t,r,n){if(!e)return n(t,r,"ltr")
for(var i=!1,o=0;o<e.length;++o){var l=e[o];(l.from<r&&l.to>t||t==r&&l.to==t)&&(n(Math.max(l.from,t),Math.min(l.to,r),1==l.level?"rtl":"ltr"),i=!0)}i||n(t,r,"ltr")}function zi(e){return e.level%2?e.to:e.from}function Ri(e){return e.level%2?e.from:e.to}function Fi(e){var t=zn(e)
return t?zi(t[0]):0}function Bi(e){var t=zn(e)
return t?Ri(fi(t)):e.text.length}function Gi(e,t){var r=An(e.doc,t),n=Zr(r)
n!=r&&(t=In(n))
var i=zn(n),o=i?i[0].level%2?Bi(n):Fi(n):0
return yo(t,o)}function Vi(e,t){for(var r,n=An(e.doc,t);r=$r(n);)n=r.find(1,!0).line,t=null
var i=zn(n),o=i?i[0].level%2?Fi(n):Bi(n):n.text.length
return yo(null==t?In(n):t,o)}function Ui(e,t){var r=Gi(e,t.line),n=An(e.doc,r.line),i=zn(n)
if(!i||0==i[0].level){var o=Math.max(0,n.text.search(/\S/)),l=t.line==r.line&&t.ch<=o&&t.ch
return yo(r.line,l?0:o)}return r}function Ki(e,t,r){var n=e[0].level
return t==n||r!=n&&t<r}function Xi(e,t){El=null
for(var r,n=0;n<e.length;++n){var i=e[n]
if(i.from<t&&i.to>t)return n
if(i.from==t||i.to==t){if(null!=r)return Ki(e,i.level,e[r].level)?(i.from!=i.to&&(El=r),n):(i.from!=i.to&&(El=n),r)
r=n}}return r}function _i(e,t,r,n){if(!n)return t+r
do{t+=r}while(t>0&&bi(e.text.charAt(t)))
return t}function ji(e,t,r,n){var i=zn(e)
if(!i)return Yi(e,t,r,n)
for(var o=Xi(i,t),l=i[o],s=_i(e,t,l.level%2?-r:r,n);;){if(s>l.from&&s<l.to)return s
if(s==l.from||s==l.to)return Xi(i,s)==o?s:(l=i[o+=r],r>0==l.level%2?l.to:l.from)
if(!(l=i[o+=r]))return null
s=r>0==l.level%2?_i(e,l.to,-1,n):_i(e,l.from,1,n)}}function Yi(e,t,r,n){var i=t+r
if(n)for(;i>0&&bi(e.text.charAt(i));)i+=r
return i<0||i>e.text.length?null:i}var $i=/gecko\/\d/i.test(navigator.userAgent),qi=/MSIE \d/.test(navigator.userAgent),Zi=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),Qi=qi||Zi,Ji=Qi&&(qi?document.documentMode||6:Zi[1]),eo=/WebKit\//.test(navigator.userAgent),to=eo&&/Qt\/\d+\.\d+/.test(navigator.userAgent),ro=/Chrome\//.test(navigator.userAgent),no=/Opera\//.test(navigator.userAgent),io=/Apple Computer/.test(navigator.vendor),oo=/KHTML\//.test(navigator.userAgent),lo=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent),so=/PhantomJS/.test(navigator.userAgent),ao=/AppleWebKit/.test(navigator.userAgent)&&/Mobile\/\w+/.test(navigator.userAgent),uo=ao||/Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent),co=ao||/Mac/.test(navigator.platform),fo=/win/i.test(navigator.platform),ho=no&&navigator.userAgent.match(/Version\/(\d*\.\d*)/)
ho&&(ho=Number(ho[1])),ho&&ho>=15&&(no=!1,eo=!0)
var po=co&&(to||no&&(null==ho||ho<12.11)),go=$i||Qi&&Ji>=9,vo=!1,mo=!1,yo=e.Pos=function(e,t){if(!(this instanceof yo))return new yo(e,t)
this.line=e,this.ch=t},bo=e.cmpPos=function(e,t){return e.line-t.line||e.ch-t.ch}
Y.prototype={primary:function(){return this.ranges[this.primIndex]},equals:function(e){if(e==this)return!0
if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1
for(var t=0;t<this.ranges.length;t++){var r=this.ranges[t],n=e.ranges[t]
if(0!=bo(r.anchor,n.anchor)||0!=bo(r.head,n.head))return!1}return!0},deepCopy:function(){for(var e=[],t=0;t<this.ranges.length;t++)e[t]=new $(X(this.ranges[t].anchor),X(this.ranges[t].head))
return new Y(e,this.primIndex)},somethingSelected:function(){for(var e=0;e<this.ranges.length;e++)if(!this.ranges[e].empty())return!0
return!1},contains:function(e,t){t||(t=e)
for(var r=0;r<this.ranges.length;r++){var n=this.ranges[r]
if(bo(t,n.from())>=0&&bo(e,n.to())<=0)return r}return-1}},$.prototype={from:function(){return j(this.anchor,this.head)},to:function(){return _(this.anchor,this.head)},empty:function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch}}
var wo,xo,Co,Lo={left:0,right:0,top:0,bottom:0},So=null,ko=0,Mo=null,To=0,No=0,Ho=null
Qi?Ho=-.53:$i?Ho=15:ro?Ho=-.7:io&&(Ho=-1/3)
var Ao,Oo=null,Wo=e.changeEnd=function(e){return e.text?yo(e.from.line+e.text.length-1,fi(e.text).length+(1==e.text.length?e.from.ch:0)):e.to}
e.prototype={constructor:e,focus:function(){window.focus(),kt(this),Ct(this)},setOption:function(e,t){var r=this.options,n=r[e]
r[e]==t&&"mode"!=e||(r[e]=t,Io.hasOwnProperty(e)&&ut(this,Io[e])(this,t,n))},getOption:function(e){return this.options[e]},getDoc:function(){return this.doc},addKeyMap:function(e,t){this.state.keyMaps[t?"push":"unshift"](e)},removeKeyMap:function(e){for(var t=this.state.keyMaps,r=0;r<t.length;++r)if(t[r]==e||"string"!=typeof t[r]&&t[r].name==e)return t.splice(r,1),!0},addOverlay:ct(function(t,r){var n=t.token?t:e.getMode(this.options,t)
if(n.startState)throw new Error("Overlays may not be stateful.")
this.state.overlays.push({mode:n,modeSpec:t,opaque:r&&r.opaque}),this.state.modeGen++,pt(this)}),removeOverlay:ct(function(e){for(var t=this.state.overlays,r=0;r<t.length;++r){var n=t[r].modeSpec
if(n==e||"string"==typeof e&&n.name==e)return t.splice(r,1),this.state.modeGen++,void pt(this)}}),indentLine:ct(function(e,t,r){"string"!=typeof t&&"number"!=typeof t&&(t=null==t?this.options.smartIndent?"smart":"prev":t?"add":"subtract"),te(this.doc,e)&&wr(this,e,t,r)}),indentSelection:ct(function(e){for(var t=this.doc.sel.ranges,r=-1,n=0;n<t.length;n++){var i=t[n]
if(i.empty())i.head.line>r&&(wr(this,i.head.line,e,!0),r=i.head.line,n==this.doc.sel.primIndex&&yr(this))
else{var o=i.from(),l=i.to(),s=Math.max(r,o.line)
r=Math.min(this.lastLine(),l.line-(l.ch?0:1))+1
for(var a=s;a<r;++a)wr(this,a,e)
var u=this.doc.sel.ranges
0==o.ch&&t.length==u.length&&u[n].from().ch>0&&le(this.doc,n,new $(o,u[n].to()),gl)}}}),getTokenAt:function(e,t){var r=this.doc
e=J(r,e)
for(var n=ke(this,e.line,t),i=this.doc.mode,o=An(r,e.line),l=new Yo(o.text,this.options.tabSize);l.pos<e.ch&&!l.eol();){l.start=l.pos
var s=fn(i,l,n)}return{start:l.start,end:l.pos,string:l.current(),type:s||null,state:n}},getTokenTypeAt:function(e){e=J(this.doc,e)
var t,r=pn(this,An(this.doc,e.line)),n=0,i=(r.length-1)/2,o=e.ch
if(0==o)t=r[2]
else for(;;){var l=n+i>>1
if((l?r[2*l-1]:0)>=o)i=l
else{if(!(r[2*l+1]<o)){t=r[2*l+2]
break}n=l+1}}var s=t?t.indexOf("cm-overlay "):-1
return s<0?t:0==s?null:t.slice(0,s-1)},getModeAt:function(t){var r=this.doc.mode
return r.innerMode?e.innerMode(r,this.getTokenAt(t).state).mode:r},getHelper:function(e,t){return this.getHelpers(e,t)[0]},getHelpers:function(e,t){var r=[]
if(!Bo.hasOwnProperty(t))return Bo
var n=Bo[t],i=this.getModeAt(e)
if("string"==typeof i[t])n[i[t]]&&r.push(n[i[t]])
else if(i[t])for(var o=0;o<i[t].length;o++){var l=n[i[t][o]]
l&&r.push(l)}else i.helperType&&n[i.helperType]?r.push(n[i.helperType]):n[i.name]&&r.push(n[i.name])
for(var o=0;o<n._global.length;o++){var s=n._global[o]
s.pred(i,this)&&-1==hi(r,s.val)&&r.push(s.val)}return r},getStateAfter:function(e,t){var r=this.doc
return e=Q(r,null==e?r.first+r.size-1:e),ke(this,e+1,t)},cursorCoords:function(e,t){var r,n=this.doc.sel.primary()
return r=null==e?n.head:"object"==typeof e?J(this.doc,e):e?n.from():n.to(),_e(this,r,t||"page")},charCoords:function(e,t){return Xe(this,J(this.doc,e),t||"page")},coordsChar:function(e,t){return e=Ke(this,e,t||"page"),$e(this,e.left,e.top)},lineAtHeight:function(e,t){return e=Ke(this,{top:e,left:0},t||"page").top,En(this.doc,e+this.display.viewOffset)},heightAtLine:function(e,t){var r=!1,n=this.doc.first+this.doc.size-1
e<this.doc.first?e=this.doc.first:e>n&&(e=n,r=!0)
var i=An(this.doc,e)
return Ue(this,i,{top:0,left:0},t||"page").top+(r?this.doc.height-Pn(i):0)},defaultTextHeight:function(){return Ze(this.display)},defaultCharWidth:function(){return Qe(this.display)},setGutterMarker:ct(function(e,t,r){return xr(this.doc,e,"gutter",function(e){var n=e.gutterMarkers||(e.gutterMarkers={})
return n[t]=r,!r&&yi(n)&&(e.gutterMarkers=null),!0})}),clearGutter:ct(function(e){var t=this,r=t.doc,n=r.first
r.iter(function(r){r.gutterMarkers&&r.gutterMarkers[e]&&(r.gutterMarkers[e]=null,gt(t,n,"gutter"),yi(r.gutterMarkers)&&(r.gutterMarkers=null)),++n})}),addLineWidget:ct(function(e,t,r){return ln(this,e,t,r)}),removeLineWidget:function(e){e.clear()},lineInfo:function(e){if("number"==typeof e){if(!te(this.doc,e))return null
var t=e
if(!(e=An(this.doc,e)))return null}else{var t=In(e)
if(null==t)return null}return{line:t,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(e,t,r,n,i){var o=this.display
e=_e(this,J(this.doc,e))
var l=e.bottom,s=e.left
if(t.style.position="absolute",o.sizer.appendChild(t),"over"==n)l=e.top
else if("above"==n||"near"==n){var a=Math.max(o.wrapper.clientHeight,this.doc.height),u=Math.max(o.sizer.clientWidth,o.lineSpace.clientWidth);("above"==n||e.bottom+t.offsetHeight>a)&&e.top>t.offsetHeight?l=e.top-t.offsetHeight:e.bottom+t.offsetHeight<=a&&(l=e.bottom),s+t.offsetWidth>u&&(s=u-t.offsetWidth)}t.style.top=l+"px",t.style.left=t.style.right="","right"==i?(s=o.sizer.clientWidth-t.offsetWidth,t.style.right="0px"):("left"==i?s=0:"middle"==i&&(s=(o.sizer.clientWidth-t.offsetWidth)/2),t.style.left=s+"px"),r&&gr(this,s,l,s+t.offsetWidth,l+t.offsetHeight)},triggerOnKeyDown:ct(jt),triggerOnKeyPress:ct(qt),triggerOnKeyUp:$t,execCommand:function(e){if(Uo.hasOwnProperty(e))return Uo[e](this)},findPosH:function(e,t,r,n){var i=1
t<0&&(i=-1,t=-t)
for(var o=0,l=J(this.doc,e);o<t&&(l=Lr(this.doc,l,i,r,n),!l.hitSide);++o);return l},moveH:ct(function(e,t){var r=this
r.extendSelectionsBy(function(n){return r.display.shift||r.doc.extend||n.empty()?Lr(r.doc,n.head,e,t,r.options.rtlMoveVisually):e<0?n.from():n.to()},ml)}),deleteH:ct(function(e,t){var r=this.doc.sel,n=this.doc
r.somethingSelected()?n.replaceSelection("",null,"+delete"):Cr(this,function(r){var i=Lr(n,r.head,e,t,!1)
return e<0?{from:i,to:r.head}:{from:r.head,to:i}})}),findPosV:function(e,t,r,n){var i=1,o=n
t<0&&(i=-1,t=-t)
for(var l=0,s=J(this.doc,e);l<t;++l){var a=_e(this,s,"div")
if(null==o?o=a.left:a.left=o,s=Sr(this,a,i,r),s.hitSide)break}return s},moveV:ct(function(e,t){var r=this,n=this.doc,i=[],o=!r.display.shift&&!n.extend&&n.sel.somethingSelected()
if(n.extendSelectionsBy(function(l){if(o)return e<0?l.from():l.to()
var s=_e(r,l.head,"div")
null!=l.goalColumn&&(s.left=l.goalColumn),i.push(s.left)
var a=Sr(r,s,e,t)
return"page"==t&&l==n.sel.primary()&&mr(r,null,Xe(r,a,"div").top-s.top),a},ml),i.length)for(var l=0;l<n.sel.ranges.length;l++)n.sel.ranges[l].goalColumn=i[l]}),findWordAt:function(e){var t=this.doc,r=An(t,e.line).text,n=e.ch,i=e.ch
if(r){var o=this.getHelper(e,"wordChars");(e.xRel<0||i==r.length)&&n?--n:++i
for(var l=r.charAt(n),s=mi(l,o)?function(e){return mi(e,o)}:/\s/.test(l)?function(e){return/\s/.test(e)}:function(e){return!/\s/.test(e)&&!mi(e)};n>0&&s(r.charAt(n-1));)--n
for(;i<r.length&&s(r.charAt(i));)++i}return new $(yo(e.line,n),yo(e.line,i))},toggleOverwrite:function(e){null!=e&&e==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?Ti(this.display.cursorDiv,"CodeMirror-overwrite"):Mi(this.display.cursorDiv,"CodeMirror-overwrite"),fl(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return Si()==this.display.input},scrollTo:ct(function(e,t){null==e&&null==t||br(this),null!=e&&(this.curOp.scrollLeft=e),null!=t&&(this.curOp.scrollTop=t)}),getScrollInfo:function(){var e=this.display.scroller,t=dl
return{left:e.scrollLeft,top:e.scrollTop,height:e.scrollHeight-t,width:e.scrollWidth-t,clientHeight:e.clientHeight-t,clientWidth:e.clientWidth-t}},scrollIntoView:ct(function(e,t){if(null==e?(e={from:this.doc.sel.primary().head,to:null},null==t&&(t=this.options.cursorScrollMargin)):"number"==typeof e?e={from:yo(e,0),to:null}:null==e.from&&(e={from:e,to:null}),e.to||(e.to=e.from),e.margin=t||0,null!=e.from.line)br(this),this.curOp.scrollToPos=e
else{var r=vr(this,Math.min(e.from.left,e.to.left),Math.min(e.from.top,e.to.top)-e.margin,Math.max(e.from.right,e.to.right),Math.max(e.from.bottom,e.to.bottom)+e.margin)
this.scrollTo(r.scrollLeft,r.scrollTop)}}),setSize:ct(function(e,t){function r(e){return"number"==typeof e||/^\d+$/.test(String(e))?e+"px":e}var n=this
null!=e&&(n.display.wrapper.style.width=r(e)),null!=t&&(n.display.wrapper.style.height=r(t)),n.options.lineWrapping&&Fe(this)
var i=n.display.viewFrom
n.doc.iter(i,n.display.viewTo,function(e){if(e.widgets)for(var t=0;t<e.widgets.length;t++)if(e.widgets[t].noHScroll){gt(n,i,"widget")
break}++i}),n.curOp.forceUpdate=!0,fl(n,"refresh",this)}),operation:function(e){return at(this,e)},refresh:ct(function(){var e=this.display.cachedTextHeight
pt(this),this.curOp.forceUpdate=!0,Be(this),this.scrollTo(this.doc.scrollLeft,this.doc.scrollTop),f(this),(null==e||Math.abs(e-Ze(this.display))>.5)&&l(this),fl(this,"refresh",this)}),swapDoc:ct(function(e){var t=this.doc
return t.cm=null,Hn(this,e),Be(this),St(this),this.scrollTo(e.scrollLeft,e.scrollTop),this.curOp.forceScroll=!0,ri(this,"swapDoc",this,t),t}),getInputField:function(){return this.display.input},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},si(e)
var Do=e.defaults={},Io=e.optionHandlers={},Eo=e.Init={toString:function(){return"CodeMirror.Init"}}
kr("value","",function(e,t){e.setValue(t)},!0),kr("mode",null,function(e,t){e.doc.modeOption=t,r(e)},!0),kr("indentUnit",2,r,!0),kr("indentWithTabs",!1),kr("smartIndent",!0),kr("tabSize",4,function(e){n(e),Be(e),pt(e)},!0),kr("specialChars",/[\t\u0000-\u0019\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g,function(e,t){e.options.specialChars=new RegExp(t.source+(t.test("\t")?"":"|\t"),"g"),e.refresh()},!0),kr("specialCharPlaceholder",yn,function(e){e.refresh()},!0),kr("electricChars",!0),kr("rtlMoveVisually",!fo),kr("wholeLineUpdateBefore",!0),kr("theme","default",function(e){a(e),u(e)},!0),kr("keyMap","default",s),kr("extraKeys",null),kr("lineWrapping",!1,i,!0),kr("gutters",[],function(e){p(e.options),u(e)},!0),kr("fixedGutter",!0,function(e,t){e.display.gutters.style.left=t?C(e.display)+"px":"0",e.refresh()},!0),kr("coverGutterNextToScrollbar",!1,m,!0),kr("lineNumbers",!1,function(e){p(e.options),u(e)},!0),kr("firstLineNumber",1,u,!0),kr("lineNumberFormatter",function(e){return e},u,!0),kr("showCursorWhenSelecting",!1,ye,!0),kr("resetSelectionOnContextMenu",!0),kr("readOnly",!1,function(e,t){"nocursor"==t?(Qt(e),e.display.input.blur(),e.display.disabled=!0):(e.display.disabled=!1,t||St(e))}),kr("disableInput",!1,function(e,t){t||St(e)},!0),kr("dragDrop",!0),kr("cursorBlinkRate",530),kr("cursorScrollMargin",0),kr("cursorHeight",1,ye,!0),kr("singleCursorHeightPerLine",!0,ye,!0)
kr("workTime",100),kr("workDelay",100),kr("flattenSpans",!0,n,!0),kr("addModeClass",!1,n,!0),kr("pollInterval",100),kr("undoDepth",200,function(e,t){e.doc.history.undoDepth=t}),kr("historyEventDelay",1250),kr("viewportMargin",10,function(e){e.refresh()},!0),kr("maxHighlightLength",1e4,n,!0),kr("moveInputWithCursor",!0,function(e,t){t||(e.display.inputDiv.style.top=e.display.inputDiv.style.left=0)}),kr("tabindex",null,function(e,t){e.display.input.tabIndex=t||""}),kr("autofocus",null)
var Po=e.modes={},zo=e.mimeModes={}
e.defineMode=function(t,r){e.defaults.mode||"null"==t||(e.defaults.mode=t),arguments.length>2&&(r.dependencies=Array.prototype.slice.call(arguments,2)),Po[t]=r},e.defineMIME=function(e,t){zo[e]=t},e.resolveMode=function(t){if("string"==typeof t&&zo.hasOwnProperty(t))t=zo[t]
else if(t&&"string"==typeof t.name&&zo.hasOwnProperty(t.name)){var r=zo[t.name]
"string"==typeof r&&(r={name:r}),t=pi(r,t),t.name=r.name}else if("string"==typeof t&&/^[\w\-]+\/[\w\-]+\+xml$/.test(t))return e.resolveMode("application/xml")
return"string"==typeof t?{name:t}:t||{name:"null"}},e.getMode=function(t,r){var r=e.resolveMode(r),n=Po[r.name]
if(!n)return e.getMode(t,"text/plain")
var i=n(t,r)
if(Ro.hasOwnProperty(r.name)){var o=Ro[r.name]
for(var l in o)o.hasOwnProperty(l)&&(i.hasOwnProperty(l)&&(i["_"+l]=i[l]),i[l]=o[l])}if(i.name=r.name,r.helperType&&(i.helperType=r.helperType),r.modeProps)for(var l in r.modeProps)i[l]=r.modeProps[l]
return i},e.defineMode("null",function(){return{token:function(e){e.skipToEnd()}}}),e.defineMIME("text/plain","null")
var Ro=e.modeExtensions={}
e.extendMode=function(e,t){gi(t,Ro.hasOwnProperty(e)?Ro[e]:Ro[e]={})},e.defineExtension=function(t,r){e.prototype[t]=r},e.defineDocExtension=function(e,t){nl.prototype[e]=t},e.defineOption=kr
var Fo=[]
e.defineInitHook=function(e){Fo.push(e)}
var Bo=e.helpers={}
e.registerHelper=function(t,r,n){Bo.hasOwnProperty(t)||(Bo[t]=e[t]={_global:[]}),Bo[t][r]=n},e.registerGlobalHelper=function(t,r,n,i){e.registerHelper(t,r,i),Bo[t]._global.push({pred:n,val:i})}
var Go=e.copyState=function(e,t){if(!0===t)return t
if(e.copyState)return e.copyState(t)
var r={}
for(var n in t){var i=t[n]
i instanceof Array&&(i=i.concat([])),r[n]=i}return r},Vo=e.startState=function(e,t,r){return!e.startState||e.startState(t,r)}
e.innerMode=function(e,t){for(;e.innerMode;){var r=e.innerMode(t)
if(!r||r.mode==e)break
t=r.state,e=r.mode}return r||{mode:e,state:t}}
var Uo=e.commands={selectAll:function(e){e.setSelection(yo(e.firstLine(),0),yo(e.lastLine()),gl)},singleSelection:function(e){e.setSelection(e.getCursor("anchor"),e.getCursor("head"),gl)},killLine:function(e){Cr(e,function(t){if(t.empty()){var r=An(e.doc,t.head.line).text.length
return t.head.ch==r&&t.head.line<e.lastLine()?{from:t.head,to:yo(t.head.line+1,0)}:{from:t.head,to:yo(t.head.line,r)}}return{from:t.from(),to:t.to()}})},deleteLine:function(e){Cr(e,function(t){return{from:yo(t.from().line,0),to:J(e.doc,yo(t.to().line+1,0))}})},delLineLeft:function(e){Cr(e,function(e){return{from:yo(e.from().line,0),to:e.from()}})},delWrappedLineLeft:function(e){Cr(e,function(t){var r=e.charCoords(t.head,"div").top+5
return{from:e.coordsChar({left:0,top:r},"div"),to:t.from()}})},delWrappedLineRight:function(e){Cr(e,function(t){var r=e.charCoords(t.head,"div").top+5,n=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:r},"div")
return{from:t.from(),to:n}})},undo:function(e){e.undo()},redo:function(e){e.redo()},undoSelection:function(e){e.undoSelection()},redoSelection:function(e){e.redoSelection()},goDocStart:function(e){e.extendSelection(yo(e.firstLine(),0))},goDocEnd:function(e){e.extendSelection(yo(e.lastLine()))},goLineStart:function(e){e.extendSelectionsBy(function(t){return Gi(e,t.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(e){e.extendSelectionsBy(function(t){return Ui(e,t.head)},{origin:"+move",bias:1})},goLineEnd:function(e){e.extendSelectionsBy(function(t){return Vi(e,t.head.line)},{origin:"+move",bias:-1})},goLineRight:function(e){e.extendSelectionsBy(function(t){var r=e.charCoords(t.head,"div").top+5
return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:r},"div")},ml)},goLineLeft:function(e){e.extendSelectionsBy(function(t){var r=e.charCoords(t.head,"div").top+5
return e.coordsChar({left:0,top:r},"div")},ml)},goLineLeftSmart:function(e){e.extendSelectionsBy(function(t){var r=e.charCoords(t.head,"div").top+5,n=e.coordsChar({left:0,top:r},"div")
return n.ch<e.getLine(n.line).search(/\S/)?Ui(e,t.head):n},ml)},goLineUp:function(e){e.moveV(-1,"line")},goLineDown:function(e){e.moveV(1,"line")},goPageUp:function(e){e.moveV(-1,"page")},goPageDown:function(e){e.moveV(1,"page")},goCharLeft:function(e){e.moveH(-1,"char")},goCharRight:function(e){e.moveH(1,"char")},goColumnLeft:function(e){e.moveH(-1,"column")},goColumnRight:function(e){e.moveH(1,"column")},goWordLeft:function(e){e.moveH(-1,"word")},goGroupRight:function(e){e.moveH(1,"group")},goGroupLeft:function(e){e.moveH(-1,"group")},goWordRight:function(e){e.moveH(1,"word")},delCharBefore:function(e){e.deleteH(-1,"char")},delCharAfter:function(e){e.deleteH(1,"char")},delWordBefore:function(e){e.deleteH(-1,"word")},delWordAfter:function(e){e.deleteH(1,"word")},delGroupBefore:function(e){e.deleteH(-1,"group")},delGroupAfter:function(e){e.deleteH(1,"group")},indentAuto:function(e){e.indentSelection("smart")},indentMore:function(e){e.indentSelection("add")},indentLess:function(e){e.indentSelection("subtract")},insertTab:function(e){e.replaceSelection("\t")},insertSoftTab:function(e){for(var t=[],r=e.listSelections(),n=e.options.tabSize,i=0;i<r.length;i++){var o=r[i].from(),l=yl(e.getLine(o.line),o.ch,n)
t.push(new Array(n-l%n+1).join(" "))}e.replaceSelections(t)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){at(e,function(){for(var t=e.listSelections(),r=[],n=0;n<t.length;n++){var i=t[n].head,o=An(e.doc,i.line).text
if(o)if(i.ch==o.length&&(i=new yo(i.line,i.ch-1)),i.ch>0)i=new yo(i.line,i.ch+1),e.replaceRange(o.charAt(i.ch-1)+o.charAt(i.ch-2),yo(i.line,i.ch-2),i,"+transpose")
else if(i.line>e.doc.first){var l=An(e.doc,i.line-1).text
l&&e.replaceRange(o.charAt(0)+"\n"+l.charAt(l.length-1),yo(i.line-1,l.length-1),yo(i.line,1),"+transpose")}r.push(new $(i,i))}e.setSelections(r)})},newlineAndIndent:function(e){at(e,function(){for(var t=e.listSelections().length,r=0;r<t;r++){var n=e.listSelections()[r]
e.replaceRange("\n",n.anchor,n.head,"+input"),e.indentLine(n.from().line+1,null,!0),yr(e)}})},toggleOverwrite:function(e){e.toggleOverwrite()}},Ko=e.keyMap={}
Ko.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},Ko.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},Ko.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},Ko.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars"},Ko.default=co?Ko.macDefault:Ko.pcDefault
var Xo=e.lookupKey=function(e,t,r){function n(t){t=Mr(t)
var i=t[e]
if(!1===i)return"stop"
if(null!=i&&r(i))return!0
if(t.nofallthrough)return"stop"
var o=t.fallthrough
if(null==o)return!1
if("[object Array]"!=Object.prototype.toString.call(o))return n(o)
for(var l=0;l<o.length;++l){var s=n(o[l])
if(s)return s}return!1}for(var i=0;i<t.length;++i){var o=n(t[i])
if(o)return"stop"!=o}},_o=e.isModifierKey=function(e){var t=Il[e.keyCode]
return"Ctrl"==t||"Alt"==t||"Shift"==t||"Mod"==t},jo=e.keyName=function(e,t){if(no&&34==e.keyCode&&e.char)return!1
var r=Il[e.keyCode]
return null!=r&&!e.altGraphKey&&(e.altKey&&(r="Alt-"+r),(po?e.metaKey:e.ctrlKey)&&(r="Ctrl-"+r),(po?e.ctrlKey:e.metaKey)&&(r="Cmd-"+r),!t&&e.shiftKey&&(r="Shift-"+r),r)}
e.fromTextArea=function(t,r){function n(){t.value=a.getValue()}if(r||(r={}),r.value=t.value,!r.tabindex&&t.tabindex&&(r.tabindex=t.tabindex),!r.placeholder&&t.placeholder&&(r.placeholder=t.placeholder),null==r.autofocus){var i=Si()
r.autofocus=i==t||null!=t.getAttribute("autofocus")&&i==document.body}if(t.form&&(ul(t.form,"submit",n),!r.leaveSubmitMethodAlone)){var o=t.form,l=o.submit
try{var s=o.submit=function(){n(),o.submit=l,o.submit(),o.submit=s}}catch(e){}}t.style.display="none"
var a=e(function(e){t.parentNode.insertBefore(e,t.nextSibling)},r)
return a.save=n,a.getTextArea=function(){return t},a.toTextArea=function(){a.toTextArea=isNaN,n(),t.parentNode.removeChild(a.getWrapperElement()),t.style.display="",t.form&&(cl(t.form,"submit",n),"function"==typeof t.form.submit&&(t.form.submit=l))},a}
var Yo=e.StringStream=function(e,t){this.pos=this.start=0,this.string=e,this.tabSize=t||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0}
Yo.prototype={eol:function(){return this.pos>=this.string.length},sol:function(){return this.pos==this.lineStart},peek:function(){return this.string.charAt(this.pos)||void 0},next:function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},eat:function(e){var t=this.string.charAt(this.pos)
if("string"==typeof e)var r=t==e
else var r=t&&(e.test?e.test(t):e(t))
if(r)return++this.pos,t},eatWhile:function(e){for(var t=this.pos;this.eat(e););return this.pos>t},eatSpace:function(){for(var e=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos
return this.pos>e},skipToEnd:function(){this.pos=this.string.length},skipTo:function(e){var t=this.string.indexOf(e,this.pos)
if(t>-1)return this.pos=t,!0},backUp:function(e){this.pos-=e},column:function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=yl(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?yl(this.string,this.lineStart,this.tabSize):0)},indentation:function(){return yl(this.string,null,this.tabSize)-(this.lineStart?yl(this.string,this.lineStart,this.tabSize):0)},match:function(e,t,r){if("string"!=typeof e){var n=this.string.slice(this.pos).match(e)
return n&&n.index>0?null:(n&&!1!==t&&(this.pos+=n[0].length),n)}var i=function(e){return r?e.toLowerCase():e}
if(i(this.string.substr(this.pos,e.length))==i(e))return!1!==t&&(this.pos+=e.length),!0},current:function(){return this.string.slice(this.start,this.pos)},hideFirstChars:function(e,t){this.lineStart+=e
try{return t()}finally{this.lineStart-=e}}}
var $o=e.TextMarker=function(e,t){this.lines=[],this.type=t,this.doc=e}
si($o),$o.prototype.clear=function(){if(!this.explicitlyCleared){var e=this.doc.cm,t=e&&!e.curOp
if(t&&Je(e),li(this,"clear")){var r=this.find()
r&&ri(this,"clear",r.from,r.to)}for(var n=null,i=null,o=0;o<this.lines.length;++o){var l=this.lines[o],s=Dr(l.markedSpans,this)
e&&!this.collapsed?gt(e,In(l),"text"):e&&(null!=s.to&&(i=In(l)),null!=s.from&&(n=In(l))),l.markedSpans=Ir(l.markedSpans,s),null==s.from&&this.collapsed&&!tn(this.doc,l)&&e&&Dn(l,Ze(e.display))}if(e&&this.collapsed&&!e.options.lineWrapping)for(var o=0;o<this.lines.length;++o){var a=Zr(this.lines[o]),u=h(a)
u>e.display.maxLineLength&&(e.display.maxLine=a,e.display.maxLineLength=u,e.display.maxLineChanged=!0)}null!=n&&e&&this.collapsed&&pt(e,n,i+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,e&&de(e.doc)),e&&ri(e,"markerCleared",e,this),t&&tt(e),this.parent&&this.parent.clear()}},$o.prototype.find=function(e,t){null==e&&"bookmark"==this.type&&(e=1)
for(var r,n,i=0;i<this.lines.length;++i){var o=this.lines[i],l=Dr(o.markedSpans,this)
if(null!=l.from&&(r=yo(t?o:In(o),l.from),-1==e))return r
if(null!=l.to&&(n=yo(t?o:In(o),l.to),1==e))return n}return r&&{from:r,to:n}},$o.prototype.changed=function(){var e=this.find(-1,!0),t=this,r=this.doc.cm
e&&r&&at(r,function(){var n=e.line,i=In(e.line),o=De(r,i)
if(o&&(Re(o),r.curOp.selectionChanged=r.curOp.forceUpdate=!0),r.curOp.updateMaxLine=!0,!tn(t.doc,n)&&null!=t.height){var l=t.height
t.height=null
var s=on(t)-l
s&&Dn(n,n.height+s)}})},$o.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp
t.maybeHiddenMarkers&&-1!=hi(t.maybeHiddenMarkers,this)||(t.maybeUnhiddenMarkers||(t.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},$o.prototype.detachLine=function(e){if(this.lines.splice(hi(this.lines,e),1),!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;(t.maybeHiddenMarkers||(t.maybeHiddenMarkers=[])).push(this)}}
var qo=0,Zo=e.SharedTextMarker=function(e,t){this.markers=e,this.primary=t
for(var r=0;r<e.length;++r)e[r].parent=this}
si(Zo),Zo.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0
for(var e=0;e<this.markers.length;++e)this.markers[e].clear()
ri(this,"clear")}},Zo.prototype.find=function(e,t){return this.primary.find(e,t)}
var Qo=e.LineWidget=function(e,t,r){if(r)for(var n in r)r.hasOwnProperty(n)&&(this[n]=r[n])
this.cm=e,this.node=t}
si(Qo),Qo.prototype.clear=function(){var e=this.cm,t=this.line.widgets,r=this.line,n=In(r)
if(null!=n&&t){for(var i=0;i<t.length;++i)t[i]==this&&t.splice(i--,1)
t.length||(r.widgets=null)
var o=on(this)
at(e,function(){nn(e,r,-o),gt(e,n,"widget"),Dn(r,Math.max(0,r.height-o))})}},Qo.prototype.changed=function(){var e=this.height,t=this.cm,r=this.line
this.height=null
var n=on(this)-e
n&&at(t,function(){t.curOp.forceUpdate=!0,nn(t,r,n),Dn(r,r.height+n)})}
var Jo=e.Line=function(e,t,r){this.text=e,Ur(this,t),this.height=r?r(this):1}
si(Jo),Jo.prototype.lineNo=function(){return In(this)}
var el={},tl={}
Mn.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,t){for(var r=e,n=e+t;r<n;++r){var i=this.lines[r]
this.height-=i.height,an(i),ri(i,"delete")}this.lines.splice(e,t)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,t,r){this.height+=r,this.lines=this.lines.slice(0,e).concat(t).concat(this.lines.slice(e))
for(var n=0;n<t.length;++n)t[n].parent=this},iterN:function(e,t,r){for(var n=e+t;e<n;++e)if(r(this.lines[e]))return!0}},Tn.prototype={chunkSize:function(){return this.size},removeInner:function(e,t){this.size-=t
for(var r=0;r<this.children.length;++r){var n=this.children[r],i=n.chunkSize()
if(e<i){var o=Math.min(t,i-e),l=n.height
if(n.removeInner(e,o),this.height-=l-n.height,i==o&&(this.children.splice(r--,1),n.parent=null),0==(t-=o))break
e=0}else e-=i}if(this.size-t<25&&(this.children.length>1||!(this.children[0]instanceof Mn))){var s=[]
this.collapse(s),this.children=[new Mn(s)],this.children[0].parent=this}},collapse:function(e){for(var t=0;t<this.children.length;++t)this.children[t].collapse(e)},insertInner:function(e,t,r){this.size+=t.length,this.height+=r
for(var n=0;n<this.children.length;++n){var i=this.children[n],o=i.chunkSize()
if(e<=o){if(i.insertInner(e,t,r),i.lines&&i.lines.length>50){for(;i.lines.length>50;){var l=i.lines.splice(i.lines.length-25,25),s=new Mn(l)
i.height-=s.height,this.children.splice(n+1,0,s),s.parent=this}this.maybeSpill()}break}e-=o}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this
do{var t=e.children.splice(e.children.length-5,5),r=new Tn(t)
if(e.parent){e.size-=r.size,e.height-=r.height
var n=hi(e.parent.children,e)
e.parent.children.splice(n+1,0,r)}else{var i=new Tn(e.children)
i.parent=e,e.children=[i,r],e=i}r.parent=e.parent}while(e.children.length>10)
e.parent.maybeSpill()}},iterN:function(e,t,r){for(var n=0;n<this.children.length;++n){var i=this.children[n],o=i.chunkSize()
if(e<o){var l=Math.min(t,o-e)
if(i.iterN(e,l,r))return!0
if(0==(t-=l))break
e=0}else e-=o}}}
var rl=0,nl=e.Doc=function(e,t,r){if(!(this instanceof nl))return new nl(e,t,r)
null==r&&(r=0),Tn.call(this,[new Mn([new Jo("",null)])]),this.first=r,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.frontier=r
var n=yo(r,0)
this.sel=Z(n),this.history=new Rn(null),this.id=++rl,this.modeOption=t,"string"==typeof e&&(e=Al(e)),kn(this,{from:n,to:n,text:e}),ce(this,Z(n),gl)}
nl.prototype=pi(Tn.prototype,{constructor:nl,iter:function(e,t,r){r?this.iterN(e-this.first,t-e,r):this.iterN(this.first,this.first+this.size,e)},insert:function(e,t){for(var r=0,n=0;n<t.length;++n)r+=t[n].height
this.insertInner(e-this.first,t,r)},remove:function(e,t){this.removeInner(e-this.first,t)},getValue:function(e){var t=Wn(this,this.first,this.first+this.size)
return!1===e?t:t.join(e||"\n")},setValue:ft(function(e){var t=yo(this.first,0),r=this.first+this.size-1
lr(this,{from:t,to:yo(r,An(this,r).text.length),text:Al(e),origin:"setValue"},!0),ce(this,Z(t))}),replaceRange:function(e,t,r,n){t=J(this,t),r=r?J(this,r):t,hr(this,e,t,r,n)},getRange:function(e,t,r){var n=On(this,J(this,e),J(this,t))
return!1===r?n:n.join(r||"\n")},getLine:function(e){var t=this.getLineHandle(e)
return t&&t.text},getLineHandle:function(e){if(te(this,e))return An(this,e)},getLineNumber:function(e){return In(e)},getLineHandleVisualStart:function(e){return"number"==typeof e&&(e=An(this,e)),Zr(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return J(this,e)},getCursor:function(e){var t=this.sel.primary()
return null==e||"head"==e?t.head:"anchor"==e?t.anchor:"end"==e||"to"==e||!1===e?t.to():t.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:ft(function(e,t,r){se(this,J(this,"number"==typeof e?yo(e,t||0):e),null,r)}),setSelection:ft(function(e,t,r){se(this,J(this,e),J(this,t||e),r)}),extendSelection:ft(function(e,t,r){ie(this,J(this,e),t&&J(this,t),r)}),extendSelections:ft(function(e,t){oe(this,re(this,e))}),extendSelectionsBy:ft(function(e,t){oe(this,di(this.sel.ranges,e),t)}),setSelections:ft(function(e,t,r){if(e.length){for(var n=0,i=[];n<e.length;n++)i[n]=new $(J(this,e[n].anchor),J(this,e[n].head))
null==t&&(t=Math.min(e.length-1,this.sel.primIndex)),ce(this,q(i,t),r)}}),addSelection:ft(function(e,t,r){var n=this.sel.ranges.slice(0)
n.push(new $(J(this,e),J(this,t||e))),ce(this,q(n,n.length-1),r)}),getSelection:function(e){for(var t,r=this.sel.ranges,n=0;n<r.length;n++){var i=On(this,r[n].from(),r[n].to())
t=t?t.concat(i):i}return!1===e?t:t.join(e||"\n")},getSelections:function(e){for(var t=[],r=this.sel.ranges,n=0;n<r.length;n++){var i=On(this,r[n].from(),r[n].to())
!1!==e&&(i=i.join(e||"\n")),t[n]=i}return t},replaceSelection:function(e,t,r){for(var n=[],i=0;i<this.sel.ranges.length;i++)n[i]=e
this.replaceSelections(n,t,r||"+input")},replaceSelections:ft(function(e,t,r){for(var n=[],i=this.sel,o=0;o<i.ranges.length;o++){var l=i.ranges[o]
n[o]={from:l.from(),to:l.to(),text:Al(e[o]),origin:r}}for(var s=t&&"end"!=t&&ir(this,n,t),o=n.length-1;o>=0;o--)lr(this,n[o])
s?ue(this,s):this.cm&&yr(this.cm)}),undo:ft(function(){ar(this,"undo")}),redo:ft(function(){ar(this,"redo")}),undoSelection:ft(function(){ar(this,"undo",!0)}),redoSelection:ft(function(){ar(this,"redo",!0)}),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,t=0,r=0,n=0;n<e.done.length;n++)e.done[n].ranges||++t
for(var n=0;n<e.undone.length;n++)e.undone[n].ranges||++r
return{undo:t,redo:r}},clearHistory:function(){this.history=new Rn(this.history.maxGeneration)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:$n(this.history.done),undone:$n(this.history.undone)}},setHistory:function(e){var t=this.history=new Rn(this.history.maxGeneration)
t.done=$n(e.done.slice(0),null,!0),t.undone=$n(e.undone.slice(0),null,!0)},addLineClass:ft(function(e,t,r){return xr(this,e,"class",function(e){var n="text"==t?"textClass":"background"==t?"bgClass":"wrapClass"
if(e[n]){if(new RegExp("(?:^|\\s)"+r+"(?:$|\\s)").test(e[n]))return!1
e[n]+=" "+r}else e[n]=r
return!0})}),removeLineClass:ft(function(e,t,r){return xr(this,e,"class",function(e){var n="text"==t?"textClass":"background"==t?"bgClass":"wrapClass",i=e[n]
if(!i)return!1
if(null==r)e[n]=null
else{var o=i.match(new RegExp("(?:^|\\s+)"+r+"(?:$|\\s+)"))
if(!o)return!1
var l=o.index+o[0].length
e[n]=i.slice(0,o.index)+(o.index&&l!=i.length?" ":"")+i.slice(l)||null}return!0})}),markText:function(e,t,r){return Tr(this,J(this,e),J(this,t),r,"range")},setBookmark:function(e,t){var r={replacedWith:t&&(null==t.nodeType?t.widget:t),insertLeft:t&&t.insertLeft,clearWhenEmpty:!1,shared:t&&t.shared}
return e=J(this,e),Tr(this,e,e,r,"bookmark")},findMarksAt:function(e){e=J(this,e)
var t=[],r=An(this,e.line).markedSpans
if(r)for(var n=0;n<r.length;++n){var i=r[n];(null==i.from||i.from<=e.ch)&&(null==i.to||i.to>=e.ch)&&t.push(i.marker.parent||i.marker)}return t},findMarks:function(e,t,r){e=J(this,e),t=J(this,t)
var n=[],i=e.line
return this.iter(e.line,t.line+1,function(o){var l=o.markedSpans
if(l)for(var s=0;s<l.length;s++){var a=l[s]
i==e.line&&e.ch>a.to||null==a.from&&i!=e.line||i==t.line&&a.from>t.ch||r&&!r(a.marker)||n.push(a.marker.parent||a.marker)}++i}),n},getAllMarks:function(){var e=[]
return this.iter(function(t){var r=t.markedSpans
if(r)for(var n=0;n<r.length;++n)null!=r[n].from&&e.push(r[n].marker)}),e},posFromIndex:function(e){var t,r=this.first
return this.iter(function(n){var i=n.text.length+1
if(i>e)return t=e,!0
e-=i,++r}),J(this,yo(r,t))},indexFromPos:function(e){e=J(this,e)
var t=e.ch
return e.line<this.first||e.ch<0?0:(this.iter(this.first,e.line,function(e){t+=e.text.length+1}),t)},copy:function(e){var t=new nl(Wn(this,this.first,this.first+this.size),this.modeOption,this.first)
return t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,t.sel=this.sel,t.extend=!1,e&&(t.history.undoDepth=this.history.undoDepth,t.setHistory(this.getHistory())),t},linkedDoc:function(e){e||(e={})
var t=this.first,r=this.first+this.size
null!=e.from&&e.from>t&&(t=e.from),null!=e.to&&e.to<r&&(r=e.to)
var n=new nl(Wn(this,t,r),e.mode||this.modeOption,t)
return e.sharedHist&&(n.history=this.history),(this.linked||(this.linked=[])).push({doc:n,sharedHist:e.sharedHist}),n.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],Ar(n,Hr(this)),n},unlinkDoc:function(t){if(t instanceof e&&(t=t.doc),this.linked)for(var r=0;r<this.linked.length;++r){var n=this.linked[r]
if(n.doc==t){this.linked.splice(r,1),t.unlinkDoc(this),Or(Hr(this))
break}}if(t.history==this.history){var i=[t.id]
Nn(t,function(e){i.push(e.id)},!0),t.history=new Rn(null),t.history.done=$n(this.history.done,i),t.history.undone=$n(this.history.undone,i)}},iterLinkedDocs:function(e){Nn(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm}}),nl.prototype.eachLine=nl.prototype.iter
var il="iter insert remove copy getEditor".split(" ")
for(var ol in nl.prototype)nl.prototype.hasOwnProperty(ol)&&hi(il,ol)<0&&(e.prototype[ol]=function(e){return function(){return e.apply(this.doc,arguments)}}(nl.prototype[ol]))
si(nl)
var ll=e.e_preventDefault=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1},sl=e.e_stopPropagation=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},al=e.e_stop=function(e){ll(e),sl(e)},ul=e.on=function(e,t,r){if(e.addEventListener)e.addEventListener(t,r,!1)
else if(e.attachEvent)e.attachEvent("on"+t,r)
else{var n=e._handlers||(e._handlers={}),i=n[t]||(n[t]=[])
i.push(r)}},cl=e.off=function(e,t,r){if(e.removeEventListener)e.removeEventListener(t,r,!1)
else if(e.detachEvent)e.detachEvent("on"+t,r)
else{var n=e._handlers&&e._handlers[t]
if(!n)return
for(var i=0;i<n.length;++i)if(n[i]==r){n.splice(i,1)
break}}},fl=e.signal=function(e,t){var r=e._handlers&&e._handlers[t]
if(r)for(var n=Array.prototype.slice.call(arguments,2),i=0;i<r.length;++i)r[i].apply(null,n)},hl=null,dl=30,pl=e.Pass={toString:function(){return"CodeMirror.Pass"}},gl={scroll:!1},vl={origin:"*mouse"},ml={origin:"+move"}
ai.prototype.set=function(e,t){clearTimeout(this.id),this.id=setTimeout(t,e)}
var yl=e.countColumn=function(e,t,r,n,i){null==t&&-1==(t=e.search(/[^\s\u00a0]/))&&(t=e.length)
for(var o=n||0,l=i||0;;){var s=e.indexOf("\t",o)
if(s<0||s>=t)return l+(t-o)
l+=s-o,l+=r-l%r,o=s+1}},bl=[""],wl=function(e){e.select()}
ao?wl=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:Qi&&(wl=function(e){try{e.select()}catch(e){}}),[].indexOf&&(hi=function(e,t){return e.indexOf(t)}),[].map&&(di=function(e,t){return e.map(t)})
var xl,Cl=/[\u00df\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,Ll=e.isWordChar=function(e){return/\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||Cl.test(e))},Sl=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/
xl=document.createRange?function(e,t,r){var n=document.createRange()
return n.setEnd(e,r),n.setStart(e,t),n}:function(e,t,r){var n=document.body.createTextRange()
return n.moveToElementText(e.parentNode),n.collapse(!0),n.moveEnd("character",r),n.moveStart("character",t),n},Qi&&Ji<11&&(Si=function(){try{return document.activeElement}catch(e){return document.body}})
var kl,Ml,Tl,Nl=!1,Hl=function(){if(Qi&&Ji<9)return!1
var e=wi("div")
return"draggable"in e||"dragDrop"in e}(),Al=e.splitLines=3!="\n\nb".split(/\n/).length?function(e){for(var t=0,r=[],n=e.length;t<=n;){var i=e.indexOf("\n",t);-1==i&&(i=e.length)
var o=e.slice(t,"\r"==e.charAt(i-1)?i-1:i),l=o.indexOf("\r");-1!=l?(r.push(o.slice(0,l)),t+=l+1):(r.push(o),t=i+1)}return r}:function(e){return e.split(/\r\n?|\n/)},Ol=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch(e){return!1}}:function(e){try{var t=e.ownerDocument.selection.createRange()}catch(e){}return!(!t||t.parentElement()!=e)&&0!=t.compareEndPoints("StartToEnd",t)},Wl=function(){var e=wi("div")
return"oncopy"in e||(e.setAttribute("oncopy","return;"),"function"==typeof e.oncopy)}(),Dl=null,Il={3:"Enter",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",107:"=",109:"-",127:"Delete",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"}
e.keyNames=Il,function(){for(var e=0;e<10;e++)Il[e+48]=Il[e+96]=String(e)
for(var e=65;e<=90;e++)Il[e]=String.fromCharCode(e)
for(var e=1;e<=12;e++)Il[e+111]=Il[e+63235]="F"+e}()
var El,Pl=function(){function e(e){return e<=247?r.charAt(e):1424<=e&&e<=1524?"R":1536<=e&&e<=1773?n.charAt(e-1536):1774<=e&&e<=2220?"r":8192<=e&&e<=8203?"w":8204==e?"b":"L"}function t(e,t,r){this.level=e,this.from=t,this.to=r}var r="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",n="rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm",i=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,o=/[stwN]/,l=/[LRr]/,s=/[Lb1n]/,a=/[1n]/
return function(r){if(!i.test(r))return!1
for(var n,u=r.length,c=[],f=0;f<u;++f)c.push(n=e(r.charCodeAt(f)))
for(var f=0,h="L";f<u;++f){var n=c[f]
"m"==n?c[f]=h:h=n}for(var f=0,d="L";f<u;++f){var n=c[f]
"1"==n&&"r"==d?c[f]="n":l.test(n)&&(d=n,"r"==n&&(c[f]="R"))}for(var f=1,h=c[0];f<u-1;++f){var n=c[f]
"+"==n&&"1"==h&&"1"==c[f+1]?c[f]="1":","!=n||h!=c[f+1]||"1"!=h&&"n"!=h||(c[f]=h),h=n}for(var f=0;f<u;++f){var n=c[f]
if(","==n)c[f]="N"
else if("%"==n){for(var p=f+1;p<u&&"%"==c[p];++p);for(var g=f&&"!"==c[f-1]||p<u&&"1"==c[p]?"1":"N",v=f;v<p;++v)c[v]=g
f=p-1}}for(var f=0,d="L";f<u;++f){var n=c[f]
"L"==d&&"1"==n?c[f]="L":l.test(n)&&(d=n)}for(var f=0;f<u;++f)if(o.test(c[f])){for(var p=f+1;p<u&&o.test(c[p]);++p);for(var m="L"==(f?c[f-1]:"L"),y="L"==(p<u?c[p]:"L"),g=m||y?"L":"R",v=f;v<p;++v)c[v]=g
f=p-1}for(var b,w=[],f=0;f<u;)if(s.test(c[f])){var x=f
for(++f;f<u&&s.test(c[f]);++f);w.push(new t(0,x,f))}else{var C=f,L=w.length
for(++f;f<u&&"L"!=c[f];++f);for(var v=C;v<f;)if(a.test(c[v])){C<v&&w.splice(L,0,new t(1,C,v))
var S=v
for(++v;v<f&&a.test(c[v]);++v);w.splice(L,0,new t(2,S,v)),C=v}else++v
C<f&&w.splice(L,0,new t(1,C,f))}return 1==w[0].level&&(b=r.match(/^\s+/))&&(w[0].from=b[0].length,w.unshift(new t(0,0,b[0].length))),1==fi(w).level&&(b=r.match(/\s+$/))&&(fi(w).to-=b[0].length,w.push(new t(0,u-b[0].length,u))),w[0].level!=fi(w).level&&w.push(new t(w[0].level,u,u)),w}}()
return e.version="4.7.0",e})
