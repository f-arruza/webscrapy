!function(i){"use strict"
function n(n){return this.each(function(){var t=i(this),s=t.data("mm"),o=i.extend({},e.DEFAULTS,t.data(),"object"==typeof n&&n)
s||t.data("mm",s=new e(this,o)),"string"==typeof n&&s[n]()})}i.fn.emulateTransitionEnd=function(n){var e=!1,s=this
i(this).one("mmTransitionEnd",function(){e=!0})
var o=function(){e||i(s).trigger(t.end)}
return setTimeout(o,n),this}
var t=function(){var i=document.createElement("mm"),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"}
for(var t in n)if(void 0!==i.style[t])return{end:n[t]}
return!1}()
t&&(i.event.special.mmTransitionEnd={bindType:t.end,delegateType:t.end,handle:function(n){return i(n.target).is(this)?n.handleObj.handler.apply(this,arguments):void 0}})
var e=function(n,t){this.$element=i(n),this.options=i.extend({},e.DEFAULTS,t),this.transitioning=null,this.init()}
e.TRANSITION_DURATION=350,e.DEFAULTS={toggle:!0,doubleTapToGo:!1,activeClass:"active"},e.prototype.init=function(){var n=this,t=this.options.activeClass
this.$element.find("li."+t).has("ul").children("ul").addClass("collapse in"),this.$element.find("li").not("."+t).has("ul").children("ul").addClass("collapse"),this.options.doubleTapToGo&&this.$element.find("li."+t).has("ul").children("a").addClass("doubleTapToGo"),this.$element.find("li").has("ul").children("a").on("click.metisMenu",function(e){var s=i(this),o=s.parent("li"),a=o.children("ul")
return e.preventDefault(),o.hasClass(t)?n.hide(a):n.show(a),n.options.doubleTapToGo&&n.doubleTapToGo(s)&&"#"!==s.attr("href")&&""!==s.attr("href")?(e.stopPropagation(),void(document.location=s.attr("href"))):void 0})},e.prototype.doubleTapToGo=function(i){var n=this.$element
return i.hasClass("doubleTapToGo")?(i.removeClass("doubleTapToGo"),!0):i.parent().children("ul").length?(n.find(".doubleTapToGo").removeClass("doubleTapToGo"),i.addClass("doubleTapToGo"),!1):void 0},e.prototype.show=function(n){var s=this.options.activeClass,o=i(n),a=o.parent("li")
if(!this.transitioning&&!o.hasClass("in")){a.addClass(s),this.options.toggle&&this.hide(a.siblings().children("ul.in")),o.removeClass("collapse").addClass("collapsing").height(0),this.transitioning=1
var l=function(){o.removeClass("collapsing").addClass("collapse in").height(""),this.transitioning=0}
return t?void o.one("mmTransitionEnd",i.proxy(l,this)).emulateTransitionEnd(e.TRANSITION_DURATION).height(o[0].scrollHeight):l.call(this)}},e.prototype.hide=function(n){var s=this.options.activeClass,o=i(n)
if(!this.transitioning&&o.hasClass("in")){o.parent("li").removeClass(s),o.height(o.height())[0].offsetHeight,o.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1
var a=function(){this.transitioning=0,o.removeClass("collapsing").addClass("collapse")}
return t?void o.height(0).one("mmTransitionEnd",i.proxy(a,this)).emulateTransitionEnd(e.TRANSITION_DURATION):a.call(this)}}
var s=i.fn.metisMenu
i.fn.metisMenu=n,i.fn.metisMenu.Constructor=e,i.fn.metisMenu.noConflict=function(){return i.fn.metisMenu=s,this}}(jQuery)
