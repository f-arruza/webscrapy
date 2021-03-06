!function(e){e.idleTimer=function(i,t){var n
"object"==typeof i?(n=i,i=null):"number"==typeof i&&(n={timeout:i},i=null),t=t||document,n=e.extend({idle:!1,timeout:3e4,events:"mousemove keydown wheel DOMMouseScroll mousewheel mousedown touchstart touchmove MSPointerDown MSPointerMove"},n)
var r=e(t),l=r.data("idleTimerObj")||{},a=function(i){var n=e.data(t,"idleTimerObj")||{}
n.idle=!n.idle,n.olddate=+new Date
var r=e.Event((n.idle?"idle":"active")+".idleTimer")
e(t).trigger(r,[t,e.extend({},n),i])},d=function(i){var n=e.data(t,"idleTimerObj")||{}
if(null==n.remaining){if("mousemove"===i.type){if(i.pageX===n.pageX&&i.pageY===n.pageY)return
if(void 0===i.pageX&&void 0===i.pageY)return
if(200>+new Date-n.olddate)return}clearTimeout(n.tId),n.idle&&a(i),n.lastActive=+new Date,n.pageX=i.pageX,n.pageY=i.pageY,n.tId=setTimeout(a,n.timeout)}},u=function(){var i=e.data(t,"idleTimerObj")||{}
i.idle=i.idleBackup,i.olddate=+new Date,i.lastActive=i.olddate,i.remaining=null,clearTimeout(i.tId),i.idle||(i.tId=setTimeout(a,i.timeout))}
if(null===i&&void 0!==l.idle)return u(),r
if(null===i);else{if(null!==i&&void 0===l.idle)return!1
if("destroy"===i)return function(){var i=e.data(t,"idleTimerObj")||{}
clearTimeout(i.tId),r.removeData("idleTimerObj"),r.off("._idleTimer")}(),r
if("pause"===i)return function(){var i=e.data(t,"idleTimerObj")||{}
null==i.remaining&&(i.remaining=i.timeout-(+new Date-i.olddate),clearTimeout(i.tId))}(),r
if("resume"===i)return function(){var i=e.data(t,"idleTimerObj")||{}
null!=i.remaining&&(i.idle||(i.tId=setTimeout(a,i.remaining)),i.remaining=null)}(),r
if("reset"===i)return u(),r
if("getRemainingTime"===i)return function(){var i=e.data(t,"idleTimerObj")||{}
if(i.idle)return 0
if(null!=i.remaining)return i.remaining
var n=i.timeout-(+new Date-i.lastActive)
return 0>n&&(n=0),n}()
if("getElapsedTime"===i)return+new Date-l.olddate
if("getLastActiveTime"===i)return l.lastActive
if("isIdle"===i)return l.idle}return r.on(e.trim((n.events+" ").split(" ").join("._idleTimer ")),function(e){d(e)}),l=e.extend({},{olddate:+new Date,lastActive:+new Date,idle:n.idle,idleBackup:n.idle,timeout:n.timeout,remaining:null,tId:null,pageX:null,pageY:null}),l.idle||(l.tId=setTimeout(a,l.timeout)),e.data(t,"idleTimerObj",l),r},e.fn.idleTimer=function(i){return this[0]?e.idleTimer(i,this[0]):this}}(jQuery)
