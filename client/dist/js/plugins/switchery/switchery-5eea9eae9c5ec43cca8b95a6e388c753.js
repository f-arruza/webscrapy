(function(){function t(e,i,n){var s=t.resolve(e)
if(null==s){n=n||e,i=i||"root"
var o=new Error('Failed to require "'+n+'" from "'+i+'"')
throw o.path=n,o.parent=i,o.require=!0,o}var r=t.modules[s]
if(!r._resolving&&!r.exports){var a={}
a.exports={},a.client=a.component=!0,r._resolving=!0,r.call(this,a.exports,t.relative(s),a),delete r._resolving,r.exports=a.exports}return r.exports}t.modules={},t.aliases={},t.resolve=function(e){"/"===e.charAt(0)&&(e=e.slice(1))
for(var i=[e,e+".js",e+".json",e+"/index.js",e+"/index.json"],n=0;n<i.length;n++){var e=i[n]
if(t.modules.hasOwnProperty(e))return e
if(t.aliases.hasOwnProperty(e))return t.aliases[e]}},t.normalize=function(t,e){var i=[]
if("."!=e.charAt(0))return e
t=t.split("/"),e=e.split("/")
for(var n=0;n<e.length;++n)".."==e[n]?t.pop():"."!=e[n]&&""!=e[n]&&i.push(e[n])
return t.concat(i).join("/")},t.register=function(e,i){t.modules[e]=i},t.alias=function(e,i){if(!t.modules.hasOwnProperty(e))throw new Error('Failed to alias "'+e+'", it does not exist')
t.aliases[i]=e},t.relative=function(e){function i(t,e){for(var i=t.length;i--;)if(t[i]===e)return i
return-1}function n(i){return t(n.resolve(i),e,i)}var s=t.normalize(e,"..")
return n.resolve=function(n){var o=n.charAt(0)
if("/"==o)return n.slice(1)
if("."==o)return t.normalize(s,n)
var r=e.split("/"),a=i(r,"deps")+1
return a||(a=0),n=r.slice(0,a+1).join("/")+"/deps/"+n},n.exists=function(e){return t.modules.hasOwnProperty(n.resolve(e))},n},t.register("abpetkov-transitionize/transitionize.js",function(t,e,i){function n(t,e){if(!(this instanceof n))return new n(t,e)
this.element=t,this.props=e||{},this.init()}i.exports=n,n.prototype.isSafari=function(){return/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor)},n.prototype.init=function(){var t=[]
for(var e in this.props)t.push(e+" "+this.props[e])
this.element.style.transition=t.join(", "),this.isSafari()&&(this.element.style.webkitTransition=t.join(", "))}}),t.register("ftlabs-fastclick/lib/fastclick.js",function(t,e,i){function n(t){"use strict"
var e,i=this
if(this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=10,this.layer=t,!t||!t.nodeType)throw new TypeError("Layer must be a document node")
this.onClick=function(){return n.prototype.onClick.apply(i,arguments)},this.onMouse=function(){return n.prototype.onMouse.apply(i,arguments)},this.onTouchStart=function(){return n.prototype.onTouchStart.apply(i,arguments)},this.onTouchMove=function(){return n.prototype.onTouchMove.apply(i,arguments)},this.onTouchEnd=function(){return n.prototype.onTouchEnd.apply(i,arguments)},this.onTouchCancel=function(){return n.prototype.onTouchCancel.apply(i,arguments)},n.notNeeded(t)||(this.deviceIsAndroid&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,i,n){var s=Node.prototype.removeEventListener
"click"===e?s.call(t,e,i.hijacked||i,n):s.call(t,e,i,n)},t.addEventListener=function(e,i,n){var s=Node.prototype.addEventListener
"click"===e?s.call(t,e,i.hijacked||(i.hijacked=function(t){t.propagationStopped||i(t)}),n):s.call(t,e,i,n)}),"function"==typeof t.onclick&&(e=t.onclick,t.addEventListener("click",function(t){e(t)},!1),t.onclick=null))}n.prototype.deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,n.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),n.prototype.deviceIsIOS4=n.prototype.deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),n.prototype.deviceIsIOSWithBadTarget=n.prototype.deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),n.prototype.needsClick=function(t){"use strict"
switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0
break
case"input":if(this.deviceIsIOS&&"file"===t.type||t.disabled)return!0
break
case"label":case"video":return!0}return/\bneedsclick\b/.test(t.className)},n.prototype.needsFocus=function(t){"use strict"
switch(t.nodeName.toLowerCase()){case"textarea":return!0
case"select":return!this.deviceIsAndroid
case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly
default:return/\bneedsfocus\b/.test(t.className)}},n.prototype.sendClick=function(t,e){"use strict"
var i,n
document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),n=e.changedTouches[0],i=document.createEvent("MouseEvents"),i.initMouseEvent(this.determineEventType(t),!0,!0,window,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),i.forwardedTouchEvent=!0,t.dispatchEvent(i)},n.prototype.determineEventType=function(t){"use strict"
return this.deviceIsAndroid&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},n.prototype.focus=function(t){"use strict"
var e
this.deviceIsIOS&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},n.prototype.updateScrollParent=function(t){"use strict"
var e,i
if(!(e=t.fastClickScrollParent)||!e.contains(t)){i=t
do{if(i.scrollHeight>i.offsetHeight){e=i,t.fastClickScrollParent=i
break}i=i.parentElement}while(i)}e&&(e.fastClickLastScrollTop=e.scrollTop)},n.prototype.getTargetElementFromEventTarget=function(t){"use strict"
return t.nodeType===Node.TEXT_NODE?t.parentNode:t},n.prototype.onTouchStart=function(t){"use strict"
var e,i,n
if(t.targetTouches.length>1)return!0
if(e=this.getTargetElementFromEventTarget(t.target),i=t.targetTouches[0],this.deviceIsIOS){if(n=window.getSelection(),n.rangeCount&&!n.isCollapsed)return!0
if(!this.deviceIsIOS4){if(i.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1
this.lastTouchIdentifier=i.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=i.pageX,this.touchStartY=i.pageY,t.timeStamp-this.lastClickTime<200&&t.preventDefault(),!0},n.prototype.touchHasMoved=function(t){"use strict"
var e=t.changedTouches[0],i=this.touchBoundary
return Math.abs(e.pageX-this.touchStartX)>i||Math.abs(e.pageY-this.touchStartY)>i},n.prototype.onTouchMove=function(t){"use strict"
return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0)},n.prototype.findControl=function(t){"use strict"
return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},n.prototype.onTouchEnd=function(t){"use strict"
var e,i,n,s,o,r=this.targetElement
if(!this.trackingClick)return!0
if(t.timeStamp-this.lastClickTime<200)return this.cancelNextClick=!0,!0
if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,i=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,this.deviceIsIOSWithBadTarget&&(o=t.changedTouches[0],r=document.elementFromPoint(o.pageX-window.pageXOffset,o.pageY-window.pageYOffset)||r,r.fastClickScrollParent=this.targetElement.fastClickScrollParent),"label"===(n=r.tagName.toLowerCase())){if(e=this.findControl(r)){if(this.focus(r),this.deviceIsAndroid)return!1
r=e}}else if(this.needsFocus(r))return t.timeStamp-i>100||this.deviceIsIOS&&window.top!==window&&"input"===n?(this.targetElement=null,!1):(this.focus(r),this.deviceIsIOS4&&"select"===n||(this.targetElement=null,t.preventDefault()),!1)
return!(!this.deviceIsIOS||this.deviceIsIOS4||!(s=r.fastClickScrollParent)||s.fastClickLastScrollTop===s.scrollTop)||(this.needsClick(r)||(t.preventDefault(),this.sendClick(r,t)),!1)},n.prototype.onTouchCancel=function(){"use strict"
this.trackingClick=!1,this.targetElement=null},n.prototype.onMouse=function(t){"use strict"
return!this.targetElement||(!!t.forwardedTouchEvent||(!t.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1))))},n.prototype.onClick=function(t){"use strict"
var e
return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail||(e=this.onMouse(t),e||(this.targetElement=null),e)},n.prototype.destroy=function(){"use strict"
var t=this.layer
this.deviceIsAndroid&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},n.notNeeded=function(t){"use strict"
var e,i
if(void 0===window.ontouchstart)return!0
if(i=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!n.prototype.deviceIsAndroid)return!0
if(e=document.querySelector("meta[name=viewport]")){if(-1!==e.content.indexOf("user-scalable=no"))return!0
if(i>31&&window.innerWidth<=window.screen.width)return!0}}return"none"===t.style.msTouchAction},n.attach=function(t){"use strict"
return new n(t)},"undefined"!=typeof define&&define.amd?define(function(){"use strict"
return n}):void 0!==i&&i.exports?(i.exports=n.attach,i.exports.FastClick=n):window.FastClick=n}),t.register("switchery/switchery-5eea9eae9c5ec43cca8b95a6e388c753.js",function(t,e,i){function n(t,e){if(!(this instanceof n))return new n(t,e)
this.element=t,this.options=e||{}
for(var i in r)null==this.options[i]&&(this.options[i]=r[i])
null!=this.element&&"checkbox"==this.element.type&&this.init()}var s=e("transitionize"),o=e("fastclick")
i.exports=n
var r={color:"#64bd63",secondaryColor:"#dfdfdf",className:"switchery",disabled:!1,disabledOpacity:.5,speed:"0.4s"}
n.prototype.hide=function(){this.element.style.display="none"},n.prototype.show=function(){var t=this.create()
this.insertAfter(this.element,t)},n.prototype.create=function(){return this.switcher=document.createElement("span"),this.jack=document.createElement("small"),this.switcher.appendChild(this.jack),this.switcher.className=this.options.className,this.switcher},n.prototype.insertAfter=function(t,e){t.parentNode.insertBefore(e,t.nextSibling)},n.prototype.isChecked=function(){return this.element.checked},n.prototype.isDisabled=function(){return this.options.disabled||this.element.disabled},n.prototype.setPosition=function(t){var e=this.isChecked(),i=this.switcher,n=this.jack
t&&e?e=!1:t&&!e&&(e=!0),!0===e?(this.element.checked=!0,window.getComputedStyle?n.style.left=parseInt(window.getComputedStyle(i).width)-parseInt(window.getComputedStyle(n).width)+"px":n.style.left=parseInt(i.currentStyle.width)-parseInt(n.currentStyle.width)+"px",this.options.color&&this.colorize(),this.setSpeed()):(n.style.left=0,this.element.checked=!1,this.switcher.style.boxShadow="inset 0 0 0 0 "+this.options.secondaryColor,this.switcher.style.borderColor=this.options.secondaryColor,this.switcher.style.backgroundColor="",this.setSpeed())},n.prototype.setSpeed=function(){var t={},e={left:this.options.speed.replace(/[a-z]/,"")/2+"s"}
t=this.isChecked()?{border:this.options.speed,"box-shadow":this.options.speed,"background-color":3*this.options.speed.replace(/[a-z]/,"")+"s"}:{border:this.options.speed,"box-shadow":this.options.speed},s(this.switcher,t),s(this.jack,e)},n.prototype.setAttributes=function(){var t=this.element.getAttribute("id"),e=this.element.getAttribute("name")
t&&this.switcher.setAttribute("id",t),e&&this.switcher.setAttribute("name",e)},n.prototype.colorize=function(){this.switcher.style.backgroundColor=this.options.color,this.switcher.style.borderColor=this.options.color,this.switcher.style.boxShadow="inset 0 0 0 16px "+this.options.color},n.prototype.handleOnchange=function(t){if("function"!=typeof Event&&document.fireEvent)this.element.fireEvent("onchange")
else{var e=document.createEvent("HTMLEvents")
e.initEvent("change",!0,!0),this.element.dispatchEvent(e)}},n.prototype.handleChange=function(){var t=this,e=this.element
e.addEventListener?e.addEventListener("change",function(){t.setPosition()}):e.attachEvent("onchange",function(){t.setPosition()})},n.prototype.handleClick=function(){var t=this,e=this.switcher
!1===this.isDisabled()?(o(e),e.addEventListener?e.addEventListener("click",function(){t.setPosition(!0),t.handleOnchange(t.element.checked)}):e.attachEvent("onclick",function(){t.setPosition(!0),t.handleOnchange(t.element.checked)})):(this.element.disabled=!0,this.switcher.style.opacity=this.options.disabledOpacity)},n.prototype.disableLabel=function(){for(var t=this.element.parentNode,e=document.getElementsByTagName("label"),i=null,n=0;n<e.length;n++)e[n].getAttribute("for")===this.element.id&&(i=!0)
!0!==i&&"label"!==t.tagName.toLowerCase()||(t.addEventListener?t.addEventListener("click",function(t){t.preventDefault()}):t.attachEvent("onclick",function(t){t.returnValue=!1}))},n.prototype.markAsSwitched=function(){this.element.setAttribute("data-switchery",!0)},n.prototype.markedAsSwitched=function(){return this.element.getAttribute("data-switchery")},n.prototype.init=function(){this.hide(),this.show(),this.setPosition(),this.setAttributes(),this.markAsSwitched(),this.disableLabel(),this.handleChange(),this.handleClick()}}),t.alias("abpetkov-transitionize/transitionize.js","switchery/deps/transitionize/transitionize.js"),t.alias("abpetkov-transitionize/transitionize.js","switchery/deps/transitionize/index.js"),t.alias("abpetkov-transitionize/transitionize.js","transitionize/index.js"),t.alias("abpetkov-transitionize/transitionize.js","abpetkov-transitionize/index.js"),t.alias("ftlabs-fastclick/lib/fastclick.js","switchery/deps/fastclick/lib/fastclick.js"),t.alias("ftlabs-fastclick/lib/fastclick.js","switchery/deps/fastclick/index.js"),t.alias("ftlabs-fastclick/lib/fastclick.js","fastclick/index.js"),t.alias("ftlabs-fastclick/lib/fastclick.js","ftlabs-fastclick/index.js"),t.alias("switchery/switchery-5eea9eae9c5ec43cca8b95a6e388c753.js","switchery/index.js"),"object"==typeof exports?module.exports=t("switchery"):"function"==typeof define&&define.amd?define(function(){return t("switchery")}):this.Switchery=t("switchery")})()
