!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t()
else if("function"==typeof define&&define.amd)define([],t)
else{var e
e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Clipboard=t()}}(function(){return function t(e,n,o){function r(c,a){if(!n[c]){if(!e[c]){var s="function"==typeof require&&require
if(!a&&s)return s(c,!0)
if(i)return i(c,!0)
var u=new Error("Cannot find module '"+c+"'")
throw u.code="MODULE_NOT_FOUND",u}var l=n[c]={exports:{}}
e[c][0].call(l.exports,function(t){var n=e[c][1][t]
return r(n||t)},l,l.exports,t,e,n,o)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<o.length;c++)r(o[c])
return r}({1:[function(t,e,n){var o=t("matches-selector")
e.exports=function(t,e,n){for(var r=n?t:t.parentNode;r&&r!==document;){if(o(r,e))return r
r=r.parentNode}}},{"matches-selector":2}],2:[function(t,e,n){function o(t,e){if(i)return i.call(t,e)
for(var n=t.parentNode.querySelectorAll(e),o=0;o<n.length;++o)if(n[o]==t)return!0
return!1}var r=Element.prototype,i=r.matchesSelector||r.webkitMatchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector
e.exports=o},{}],3:[function(t,e,n){function o(t,e,n,o){var i=r.apply(this,arguments)
return t.addEventListener(n,i),{destroy:function(){t.removeEventListener(n,i)}}}function r(t,e,n,o){return function(n){n.delegateTarget=i(n.target,e,!0),n.delegateTarget&&o.call(t,n)}}var i=t("closest")
e.exports=o},{closest:1}],4:[function(t,e,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t)
return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.function=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},{}],5:[function(t,e,n){function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments")
if(!a.string(e))throw new TypeError("Second argument must be a String")
if(!a.function(n))throw new TypeError("Third argument must be a Function")
if(a.node(t))return r(t,e,n)
if(a.nodeList(t))return i(t,e,n)
if(a.string(t))return c(t,e,n)
throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function r(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function i(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function c(t,e,n){return s(document.body,t,e,n)}var a=t("./is"),s=t("delegate")
e.exports=o},{"./is":4,delegate:3}],6:[function(t,e,n){function o(t){var e
if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName)t.focus(),t.setSelectionRange(0,t.value.length),e=t.value
else{t.hasAttribute("contenteditable")&&t.focus()
var n=window.getSelection(),o=document.createRange()
o.selectNodeContents(t),n.removeAllRanges(),n.addRange(o),e=n.toString()}return e}e.exports=o},{}],7:[function(t,e,n){function o(){}o.prototype={on:function(t,e,n){var o=this.e||(this.e={})
return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){r.off(t,o),e.apply(n,arguments)}var r=this
return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length
for(o;r>o;o++)n[o].fn.apply(n[o].ctx,e)
return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[]
if(o&&e)for(var i=0,c=o.length;c>i;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i])
return r.length?n[t]=r:delete n[t],this}},e.exports=o},{}],8:[function(t,e,n){"use strict"
function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.__esModule=!0
var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=t("select"),c=function(t){return t&&t.__esModule?t:{default:t}}(i),a=function(){function t(e){o(this,t),this.resolveOptions(e),this.initSelection()}return t.prototype.resolveOptions=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0]
this.action=t.action,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""},t.prototype.initSelection=function(){if(this.text&&this.target)throw new Error('Multiple attributes declared, use either "target" or "text"')
if(this.text)this.selectFake()
else{if(!this.target)throw new Error('Missing required attributes, use either "target" or "text"')
this.selectTarget()}},t.prototype.selectFake=function(){var t=this
this.removeFake(),this.fakeHandler=document.body.addEventListener("click",function(){return t.removeFake()}),this.fakeElem=document.createElement("textarea"),this.fakeElem.style.position="absolute",this.fakeElem.style.left="-9999px",this.fakeElem.style.top=(window.pageYOffset||document.documentElement.scrollTop)+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=c.default(this.fakeElem),this.copyText()},t.prototype.removeFake=function(){this.fakeHandler&&(document.body.removeEventListener("click"),this.fakeHandler=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)},t.prototype.selectTarget=function(){this.selectedText=c.default(this.target),this.copyText()},t.prototype.copyText=function(){var t=void 0
try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)},t.prototype.handleResult=function(t){t?this.emitter.emit("success",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)}):this.emitter.emit("error",{action:this.action,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})},t.prototype.clearSelection=function(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()},t.prototype.destroy=function(){this.removeFake()},r(t,[{key:"action",set:function(){var t=arguments.length<=0||void 0===arguments[0]?"copy":arguments[0]
if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!=typeof t||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element')
this._target=t}},get:function(){return this._target}}]),t}()
n.default=a,e.exports=n.default},{select:6}],9:[function(t,e,n){"use strict"
function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function c(t,e){var n="data-clipboard-"+t
if(e.hasAttribute(n))return e.getAttribute(n)}n.__esModule=!0
var a=t("./clipboard-action"),s=o(a),u=t("tiny-emitter"),l=o(u),f=t("good-listener"),d=o(f),h=function(t){function e(n,o){r(this,e),t.call(this),this.resolveOptions(o),this.listenClick(n)}return i(e,t),e.prototype.resolveOptions=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0]
this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText},e.prototype.listenClick=function(t){var e=this
this.listener=d.default(t,"click",function(t){return e.onClick(t)})},e.prototype.onClick=function(t){var e=t.delegateTarget||t.currentTarget
this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s.default({action:this.action(e),target:this.target(e),text:this.text(e),trigger:e,emitter:this})},e.prototype.defaultAction=function(t){return c("action",t)},e.prototype.defaultTarget=function(t){var e=c("target",t)
return e?document.querySelector(e):void 0},e.prototype.defaultText=function(t){return c("text",t)},e.prototype.destroy=function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)},e}(l.default)
n.default=h,e.exports=n.default},{"./clipboard-action":8,"good-listener":5,"tiny-emitter":7}]},{},[9])(9)})
