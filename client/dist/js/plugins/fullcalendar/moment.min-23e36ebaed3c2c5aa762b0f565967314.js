(function(t){function e(t,e,n){switch(arguments.length){case 2:return null!=t?t:e
case 3:return null!=t?t:null!=e?e:n
default:throw new Error("Implement me")}}function n(t,e){return vt.call(t,e)}function s(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function a(t){!1===gt.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+t)}function i(t,e){var n=!0
return f(function(){return n&&(a(t),n=!1),e.apply(this,arguments)},e)}function r(t,e){fe[t]||(a(e),fe[t]=!0)}function o(t,e){return function(n){return y(t.call(this,n),e)}}function u(t,e){var n,s,a=12*(e.year()-t.year())+(e.month()-t.month()),i=t.clone().add(a,"months")
return 0>e-i?(n=t.clone().add(a-1,"months"),s=(e-i)/(i-n)):(n=t.clone().add(a+1,"months"),s=(e-i)/(n-i)),-(a+s)}function c(t,e,n){var s
return null==n?e:null!=t.meridiemHour?t.meridiemHour(e,n):null!=t.isPM?(s=t.isPM(n),s&&12>e&&(e+=12),s||12!==e||(e=0),e):e}function l(){}function d(t,e){!1!==e&&C(t),_(this,t),this._d=new Date(+t._d),!1===me&&(me=!0,gt.updateOffset(this),me=!1)}function h(t){var e=b(t),n=e.year||0,s=e.quarter||0,a=e.month||0,i=e.week||0,r=e.day||0,o=e.hour||0,u=e.minute||0,c=e.second||0,l=e.millisecond||0
this._milliseconds=+l+1e3*c+6e4*u+36e5*o,this._days=+r+7*i,this._months=+a+3*s+12*n,this._data={},this._locale=gt.localeData(),this._bubble()}function f(t,e){for(var s in e)n(e,s)&&(t[s]=e[s])
return n(e,"toString")&&(t.toString=e.toString),n(e,"valueOf")&&(t.valueOf=e.valueOf),t}function _(t,e){var n,s,a
if(void 0!==e._isAMomentObject&&(t._isAMomentObject=e._isAMomentObject),void 0!==e._i&&(t._i=e._i),void 0!==e._f&&(t._f=e._f),void 0!==e._l&&(t._l=e._l),void 0!==e._strict&&(t._strict=e._strict),void 0!==e._tzm&&(t._tzm=e._tzm),void 0!==e._isUTC&&(t._isUTC=e._isUTC),void 0!==e._offset&&(t._offset=e._offset),void 0!==e._pf&&(t._pf=e._pf),void 0!==e._locale&&(t._locale=e._locale),Gt.length>0)for(n in Gt)s=Gt[n],void 0!==(a=e[s])&&(t[s]=a)
return t}function m(t){return 0>t?Math.ceil(t):Math.floor(t)}function y(t,e,n){for(var s=""+Math.abs(t),a=t>=0;s.length<e;)s="0"+s
return(a?n?"+":"":"-")+s}function p(t,e){var n={milliseconds:0,months:0}
return n.months=e.month()-t.month()+12*(e.year()-t.year()),t.clone().add(n.months,"M").isAfter(e)&&--n.months,n.milliseconds=+e-+t.clone().add(n.months,"M"),n}function g(t,e){var n
return e=I(e,t),t.isBefore(e)?n=p(t,e):(n=p(e,t),n.milliseconds=-n.milliseconds,n.months=-n.months),n}function M(t,e){return function(n,s){var a,i
return null===s||isNaN(+s)||(r(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period)."),i=n,n=s,s=i),n="string"==typeof n?+n:n,a=gt.duration(n,s),D(this,a,t),this}}function D(t,e,n,s){var a=e._milliseconds,i=e._days,r=e._months
s=null==s||s,a&&t._d.setTime(+t._d+a*n),i&&ft(t,"Date",ht(t,"Date")+i*n),r&&dt(t,ht(t,"Month")+r*n),s&&gt.updateOffset(t,i||r)}function w(t){return"[object Array]"===Object.prototype.toString.call(t)}function Y(t){return"[object Date]"===Object.prototype.toString.call(t)||t instanceof Date}function v(t,e,n){var s,a=Math.min(t.length,e.length),i=Math.abs(t.length-e.length),r=0
for(s=0;a>s;s++)(n&&t[s]!==e[s]||!n&&S(t[s])!==S(e[s]))&&r++
return r+i}function k(t){if(t){var e=t.toLowerCase().replace(/(.)s$/,"$1")
t=re[t]||oe[e]||e}return t}function b(t){var e,s,a={}
for(s in t)n(t,s)&&(e=k(s))&&(a[e]=t[s])
return a}function S(t){var e=+t,n=0
return 0!==e&&isFinite(e)&&(n=e>=0?Math.floor(e):Math.ceil(e)),n}function T(t,e){return new Date(Date.UTC(t,e+1,0)).getUTCDate()}function O(t,e,n){return ot(gt([t,11,31+e-n]),e,n).week}function U(t){return W(t)?366:365}function W(t){return t%4==0&&t%100!=0||t%400==0}function C(t){var e
t._a&&-2===t._pf.overflow&&(e=t._a[bt]<0||t._a[bt]>11?bt:t._a[St]<1||t._a[St]>T(t._a[kt],t._a[bt])?St:t._a[Tt]<0||t._a[Tt]>24||24===t._a[Tt]&&(0!==t._a[Ot]||0!==t._a[Ut]||0!==t._a[Wt])?Tt:t._a[Ot]<0||t._a[Ot]>59?Ot:t._a[Ut]<0||t._a[Ut]>59?Ut:t._a[Wt]<0||t._a[Wt]>999?Wt:-1,t._pf._overflowDayOfYear&&(kt>e||e>St)&&(e=St),t._pf.overflow=e)}function G(e){return null==e._isValid&&(e._isValid=!isNaN(e._d.getTime())&&e._pf.overflow<0&&!e._pf.empty&&!e._pf.invalidMonth&&!e._pf.nullInput&&!e._pf.invalidFormat&&!e._pf.userInvalidated,e._strict&&(e._isValid=e._isValid&&0===e._pf.charsLeftOver&&0===e._pf.unusedTokens.length&&e._pf.bigHour===t)),e._isValid}function F(t){return t?t.toLowerCase().replace("_","-"):t}function P(t){for(var e,n,s,a,i=0;i<t.length;){for(a=F(t[i]).split("-"),e=a.length,n=F(t[i+1]),n=n?n.split("-"):null;e>0;){if(s=L(a.slice(0,e).join("-")))return s
if(n&&n.length>=e&&v(a,n,!0)>=e-1)break
e--}i++}return null}function L(t){var e=null
if(!Ct[t]&&Ft)try{e=gt.locale(),require("./locale/"+t),gt.locale(e)}catch(t){}return Ct[t]}function I(t,e){var n,s
return e._isUTC?(n=e.clone(),s=(gt.isMoment(t)||Y(t)?+t:+gt(t))-+n,n._d.setTime(+n._d+s),gt.updateOffset(n,!1),n):gt(t).local()}function x(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function H(t){var e,n,s=t.match(xt)
for(e=0,n=s.length;n>e;e++)s[e]=he[s[e]]?he[s[e]]:x(s[e])
return function(a){var i=""
for(e=0;n>e;e++)i+=s[e]instanceof Function?s[e].call(a,t):s[e]
return i}}function A(t,e){return t.isValid()?(e=z(e,t.localeData()),ue[e]||(ue[e]=H(e)),ue[e](t)):t.localeData().invalidDate()}function z(t,e){function n(t){return e.longDateFormat(t)||t}var s=5
for(Ht.lastIndex=0;s>=0&&Ht.test(t);)t=t.replace(Ht,n),Ht.lastIndex=0,s-=1
return t}function Z(t,e){var n=e._strict
switch(t){case"Q":return Rt
case"DDDD":return Qt
case"YYYY":case"GGGG":case"gggg":return n?Xt:Zt
case"Y":case"G":case"g":return te
case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return n?Kt:Et
case"S":if(n)return Rt
case"SS":if(n)return Bt
case"SSS":if(n)return Qt
case"DDD":return zt
case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return jt
case"a":case"A":return e._locale._meridiemParse
case"x":return $t
case"X":return Jt
case"Z":case"ZZ":return qt
case"T":return Vt
case"SSSS":return Nt
case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return n?Bt:At
case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return At
case"Do":return n?e._locale._ordinalParse:e._locale._ordinalParseLenient
default:return new RegExp(B(R(t.replace("\\",""))))}}function E(t){t=t||""
var e=t.match(qt)||[],n=e[e.length-1]||[],s=(n+"").match(ae)||["-",0,0],a=60*s[1]+S(s[2])
return"+"===s[0]?a:-a}function N(t,e,n){var s,a=n._a
switch(t){case"Q":null!=e&&(a[bt]=3*(S(e)-1))
break
case"M":case"MM":null!=e&&(a[bt]=S(e)-1)
break
case"MMM":case"MMMM":s=n._locale.monthsParse(e,t,n._strict),null!=s?a[bt]=s:n._pf.invalidMonth=e
break
case"D":case"DD":null!=e&&(a[St]=S(e))
break
case"Do":null!=e&&(a[St]=S(parseInt(e.match(/\d{1,2}/)[0],10)))
break
case"DDD":case"DDDD":null!=e&&(n._dayOfYear=S(e))
break
case"YY":a[kt]=gt.parseTwoDigitYear(e)
break
case"YYYY":case"YYYYY":case"YYYYYY":a[kt]=S(e)
break
case"a":case"A":n._meridiem=e
break
case"h":case"hh":n._pf.bigHour=!0
case"H":case"HH":a[Tt]=S(e)
break
case"m":case"mm":a[Ot]=S(e)
break
case"s":case"ss":a[Ut]=S(e)
break
case"S":case"SS":case"SSS":case"SSSS":a[Wt]=S(1e3*("0."+e))
break
case"x":n._d=new Date(S(e))
break
case"X":n._d=new Date(1e3*parseFloat(e))
break
case"Z":case"ZZ":n._useUTC=!0,n._tzm=E(e)
break
case"dd":case"ddd":case"dddd":s=n._locale.weekdaysParse(e),null!=s?(n._w=n._w||{},n._w.d=s):n._pf.invalidWeekday=e
break
case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":t=t.substr(0,1)
case"gggg":case"GGGG":case"GGGGG":t=t.substr(0,2),e&&(n._w=n._w||{},n._w[t]=S(e))
break
case"gg":case"GG":n._w=n._w||{},n._w[t]=gt.parseTwoDigitYear(e)}}function j(t){var n,s,a,i,r,o,u
n=t._w,null!=n.GG||null!=n.W||null!=n.E?(r=1,o=4,s=e(n.GG,t._a[kt],ot(gt(),1,4).year),a=e(n.W,1),i=e(n.E,1)):(r=t._locale._week.dow,o=t._locale._week.doy,s=e(n.gg,t._a[kt],ot(gt(),r,o).year),a=e(n.w,1),null!=n.d?(i=n.d,r>i&&++a):i=null!=n.e?n.e+r:r),u=ut(s,a,i,o,r),t._a[kt]=u.year,t._dayOfYear=u.dayOfYear}function q(t){var n,s,a,i,r=[]
if(!t._d){for(a=$(t),t._w&&null==t._a[St]&&null==t._a[bt]&&j(t),t._dayOfYear&&(i=e(t._a[kt],a[kt]),t._dayOfYear>U(i)&&(t._pf._overflowDayOfYear=!0),s=st(i,0,t._dayOfYear),t._a[bt]=s.getUTCMonth(),t._a[St]=s.getUTCDate()),n=0;3>n&&null==t._a[n];++n)t._a[n]=r[n]=a[n]
for(;7>n;n++)t._a[n]=r[n]=null==t._a[n]?2===n?1:0:t._a[n]
24===t._a[Tt]&&0===t._a[Ot]&&0===t._a[Ut]&&0===t._a[Wt]&&(t._nextDay=!0,t._a[Tt]=0),t._d=(t._useUTC?st:nt).apply(null,r),null!=t._tzm&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[Tt]=24)}}function V(t){var e
t._d||(e=b(t._i),t._a=[e.year,e.month,e.day||e.date,e.hour,e.minute,e.second,e.millisecond],q(t))}function $(t){var e=new Date
return t._useUTC?[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()]:[e.getFullYear(),e.getMonth(),e.getDate()]}function J(e){if(e._f===gt.ISO_8601)return void X(e)
e._a=[],e._pf.empty=!0
var n,s,a,i,r,o=""+e._i,u=o.length,l=0
for(a=z(e._f,e._locale).match(xt)||[],n=0;n<a.length;n++)i=a[n],s=(o.match(Z(i,e))||[])[0],s&&(r=o.substr(0,o.indexOf(s)),r.length>0&&e._pf.unusedInput.push(r),o=o.slice(o.indexOf(s)+s.length),l+=s.length),he[i]?(s?e._pf.empty=!1:e._pf.unusedTokens.push(i),N(i,s,e)):e._strict&&!s&&e._pf.unusedTokens.push(i)
e._pf.charsLeftOver=u-l,o.length>0&&e._pf.unusedInput.push(o),!0===e._pf.bigHour&&e._a[Tt]<=12&&(e._pf.bigHour=t),e._a[Tt]=c(e._locale,e._a[Tt],e._meridiem),q(e),C(e)}function R(t){return t.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,e,n,s,a){return e||n||s||a})}function B(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Q(t){var e,n,a,i,r
if(0===t._f.length)return t._pf.invalidFormat=!0,void(t._d=new Date(NaN))
for(i=0;i<t._f.length;i++)r=0,e=_({},t),null!=t._useUTC&&(e._useUTC=t._useUTC),e._pf=s(),e._f=t._f[i],J(e),G(e)&&(r+=e._pf.charsLeftOver,r+=10*e._pf.unusedTokens.length,e._pf.score=r,(null==a||a>r)&&(a=r,n=e))
f(t,n||e)}function X(t){var e,n,s=t._i,a=ee.exec(s)
if(a){for(t._pf.iso=!0,e=0,n=ne.length;n>e;e++)if(ne[e][1].exec(s)){t._f=ne[e][0]+(a[6]||" ")
break}for(e=0,n=se.length;n>e;e++)if(se[e][1].exec(s)){t._f+=se[e][0]
break}s.match(qt)&&(t._f+="Z"),J(t)}else t._isValid=!1}function K(t){X(t),!1===t._isValid&&(delete t._isValid,gt.createFromInputFallback(t))}function tt(t,e){var n,s=[]
for(n=0;n<t.length;++n)s.push(e(t[n],n))
return s}function et(e){var n,s=e._i
s===t?e._d=new Date:Y(s)?e._d=new Date(+s):null!==(n=Pt.exec(s))?e._d=new Date(+n[1]):"string"==typeof s?K(e):w(s)?(e._a=tt(s.slice(0),function(t){return parseInt(t,10)}),q(e)):"object"==typeof s?V(e):"number"==typeof s?e._d=new Date(s):gt.createFromInputFallback(e)}function nt(t,e,n,s,a,i,r){var o=new Date(t,e,n,s,a,i,r)
return 1970>t&&o.setFullYear(t),o}function st(t){var e=new Date(Date.UTC.apply(null,arguments))
return 1970>t&&e.setUTCFullYear(t),e}function at(t,e){if("string"==typeof t)if(isNaN(t)){if("number"!=typeof(t=e.weekdaysParse(t)))return null}else t=parseInt(t,10)
return t}function it(t,e,n,s,a){return a.relativeTime(e||1,!!n,t,s)}function rt(t,e,n){var s=gt.duration(t).abs(),a=Yt(s.as("s")),i=Yt(s.as("m")),r=Yt(s.as("h")),o=Yt(s.as("d")),u=Yt(s.as("M")),c=Yt(s.as("y")),l=a<ce.s&&["s",a]||1===i&&["m"]||i<ce.m&&["mm",i]||1===r&&["h"]||r<ce.h&&["hh",r]||1===o&&["d"]||o<ce.d&&["dd",o]||1===u&&["M"]||u<ce.M&&["MM",u]||1===c&&["y"]||["yy",c]
return l[2]=e,l[3]=+t>0,l[4]=n,it.apply({},l)}function ot(t,e,n){var s,a=n-e,i=n-t.day()
return i>a&&(i-=7),a-7>i&&(i+=7),s=gt(t).add(i,"d"),{week:Math.ceil(s.dayOfYear()/7),year:s.year()}}function ut(t,e,n,s,a){var i,r,o=st(t,0,1).getUTCDay()
return o=0===o?7:o,n=null!=n?n:a,i=a-o+(o>s?7:0)-(a>o?7:0),r=7*(e-1)+(n-a)+i+1,{year:r>0?t:t-1,dayOfYear:r>0?r:U(t-1)+r}}function ct(e){var n,s=e._i,a=e._f
return e._locale=e._locale||gt.localeData(e._l),null===s||a===t&&""===s?gt.invalid({nullInput:!0}):("string"==typeof s&&(e._i=s=e._locale.preparse(s)),gt.isMoment(s)?new d(s,!0):(a?w(a)?Q(e):J(e):et(e),n=new d(e),n._nextDay&&(n.add(1,"d"),n._nextDay=t),n))}function lt(t,e){var n,s
if(1===e.length&&w(e[0])&&(e=e[0]),!e.length)return gt()
for(n=e[0],s=1;s<e.length;++s)e[s][t](n)&&(n=e[s])
return n}function dt(t,e){var n
return"string"==typeof e&&"number"!=typeof(e=t.localeData().monthsParse(e))?t:(n=Math.min(t.date(),T(t.year(),e)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,n),t)}function ht(t,e){return t._d["get"+(t._isUTC?"UTC":"")+e]()}function ft(t,e,n){return"Month"===e?dt(t,n):t._d["set"+(t._isUTC?"UTC":"")+e](n)}function _t(t,e){return function(n){return null!=n?(ft(this,t,n),gt.updateOffset(this,e),this):ht(this,t)}}function mt(t){return 400*t/146097}function yt(t){return 146097*t/400}function pt(t){"undefined"==typeof ender&&(Mt=wt.moment,wt.moment=t?i("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",gt):gt)}for(var gt,Mt,Dt,wt="undefined"==typeof global||"undefined"!=typeof window&&window!==global.window?this:global,Yt=Math.round,vt=Object.prototype.hasOwnProperty,kt=0,bt=1,St=2,Tt=3,Ot=4,Ut=5,Wt=6,Ct={},Gt=[],Ft="undefined"!=typeof module&&module&&module.exports,Pt=/^\/?Date\((\-?\d+)/i,Lt=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,It=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,xt=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,Ht=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,At=/\d\d?/,zt=/\d{1,3}/,Zt=/\d{1,4}/,Et=/[+\-]?\d{1,6}/,Nt=/\d+/,jt=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,qt=/Z|[\+\-]\d\d:?\d\d/gi,Vt=/T/i,$t=/[\+\-]?\d+/,Jt=/[\+\-]?\d+(\.\d{1,3})?/,Rt=/\d/,Bt=/\d\d/,Qt=/\d{3}/,Xt=/\d{4}/,Kt=/[+-]?\d{6}/,te=/[+-]?\d+/,ee=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ne=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],se=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],ae=/([\+\-]|\d\d)/gi,ie=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),re={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},oe={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},ue={},ce={s:45,m:45,h:22,d:26,M:11},le="DDD w W M D d".split(" "),de="M D H h m s w W".split(" "),he={M:function(){return this.month()+1},MMM:function(t){return this.localeData().monthsShort(this,t)},MMMM:function(t){return this.localeData().months(this,t)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(t){return this.localeData().weekdaysMin(this,t)},ddd:function(t){return this.localeData().weekdaysShort(this,t)},dddd:function(t){return this.localeData().weekdays(this,t)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return y(this.year()%100,2)},YYYY:function(){return y(this.year(),4)},YYYYY:function(){return y(this.year(),5)},YYYYYY:function(){var t=this.year()
return(t>=0?"+":"-")+y(Math.abs(t),6)},gg:function(){return y(this.weekYear()%100,2)},gggg:function(){return y(this.weekYear(),4)},ggggg:function(){return y(this.weekYear(),5)},GG:function(){return y(this.isoWeekYear()%100,2)},GGGG:function(){return y(this.isoWeekYear(),4)},GGGGG:function(){return y(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return S(this.milliseconds()/100)},SS:function(){return y(S(this.milliseconds()/10),2)},SSS:function(){return y(this.milliseconds(),3)},SSSS:function(){return y(this.milliseconds(),3)},Z:function(){var t=this.utcOffset(),e="+"
return 0>t&&(t=-t,e="-"),e+y(S(t/60),2)+":"+y(S(t)%60,2)},ZZ:function(){var t=this.utcOffset(),e="+"
return 0>t&&(t=-t,e="-"),e+y(S(t/60),2)+y(S(t)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},x:function(){return this.valueOf()},X:function(){return this.unix()},Q:function(){return this.quarter()}},fe={},_e=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"],me=!1;le.length;)Dt=le.pop(),he[Dt+"o"]=function(t,e){return function(n){return this.localeData().ordinal(t.call(this,n),e)}}(he[Dt],Dt)
for(;de.length;)Dt=de.pop(),he[Dt+Dt]=o(he[Dt],2)
he.DDDD=o(he.DDD,3),f(l.prototype,{set:function(t){var e,n
for(n in t)e=t[n],"function"==typeof e?this[n]=e:this["_"+n]=e
this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(t){return this._months[t.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(t){return this._monthsShort[t.month()]},monthsParse:function(t,e,n){var s,a,i
for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;12>s;s++){if(a=gt.utc([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(i="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[s]=new RegExp(i.replace(".",""),"i")),n&&"MMMM"===e&&this._longMonthsParse[s].test(t))return s
if(n&&"MMM"===e&&this._shortMonthsParse[s].test(t))return s
if(!n&&this._monthsParse[s].test(t))return s}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(t){return this._weekdays[t.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(t){return this._weekdaysShort[t.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(t){return this._weekdaysMin[t.day()]},weekdaysParse:function(t){var e,n,s
for(this._weekdaysParse||(this._weekdaysParse=[]),e=0;7>e;e++)if(this._weekdaysParse[e]||(n=gt([2e3,1]).day(e),s="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[e]=new RegExp(s.replace(".",""),"i")),this._weekdaysParse[e].test(t))return e},_longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(t){var e=this._longDateFormat[t]
return!e&&this._longDateFormat[t.toUpperCase()]&&(e=this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t]=e),e},isPM:function(t){return"p"===(t+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(t,e,n){var s=this._calendar[t]
return"function"==typeof s?s.apply(e,[n]):s},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(t,e,n,s){var a=this._relativeTime[n]
return"function"==typeof a?a(t,e,n,s):a.replace(/%d/i,t)},pastFuture:function(t,e){var n=this._relativeTime[t>0?"future":"past"]
return"function"==typeof n?n(e):n.replace(/%s/i,e)},ordinal:function(t){return this._ordinal.replace("%d",t)},_ordinal:"%d",_ordinalParse:/\d{1,2}/,preparse:function(t){return t},postformat:function(t){return t},week:function(t){return ot(t,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},firstDayOfWeek:function(){return this._week.dow},firstDayOfYear:function(){return this._week.doy},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),gt=function(e,n,a,i){var r
return"boolean"==typeof a&&(i=a,a=t),r={},r._isAMomentObject=!0,r._i=e,r._f=n,r._l=a,r._strict=i,r._isUTC=!1,r._pf=s(),ct(r)},gt.suppressDeprecationWarnings=!1,gt.createFromInputFallback=i("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))}),gt.min=function(){return lt("isBefore",[].slice.call(arguments,0))},gt.max=function(){return lt("isAfter",[].slice.call(arguments,0))},gt.utc=function(e,n,a,i){var r
return"boolean"==typeof a&&(i=a,a=t),r={},r._isAMomentObject=!0,r._useUTC=!0,r._isUTC=!0,r._l=a,r._i=e,r._f=n,r._strict=i,r._pf=s(),ct(r).utc()},gt.unix=function(t){return gt(1e3*t)},gt.duration=function(t,e){var s,a,i,r,o=t,u=null
return gt.isDuration(t)?o={ms:t._milliseconds,d:t._days,M:t._months}:"number"==typeof t?(o={},e?o[e]=t:o.milliseconds=t):(u=Lt.exec(t))?(s="-"===u[1]?-1:1,o={y:0,d:S(u[St])*s,h:S(u[Tt])*s,m:S(u[Ot])*s,s:S(u[Ut])*s,ms:S(u[Wt])*s}):(u=It.exec(t))?(s="-"===u[1]?-1:1,i=function(t){var e=t&&parseFloat(t.replace(",","."))
return(isNaN(e)?0:e)*s},o={y:i(u[2]),M:i(u[3]),d:i(u[4]),h:i(u[5]),m:i(u[6]),s:i(u[7]),w:i(u[8])}):null==o?o={}:"object"==typeof o&&("from"in o||"to"in o)&&(r=g(gt(o.from),gt(o.to)),o={},o.ms=r.milliseconds,o.M=r.months),a=new h(o),gt.isDuration(t)&&n(t,"_locale")&&(a._locale=t._locale),a},gt.version="2.9.0",gt.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",gt.ISO_8601=function(){},gt.momentProperties=Gt,gt.updateOffset=function(){},gt.relativeTimeThreshold=function(e,n){return ce[e]!==t&&(n===t?ce[e]:(ce[e]=n,!0))},gt.lang=i("moment.lang is deprecated. Use moment.locale instead.",function(t,e){return gt.locale(t,e)}),gt.locale=function(t,e){var n
return t&&(n=void 0!==e?gt.defineLocale(t,e):gt.localeData(t))&&(gt.duration._locale=gt._locale=n),gt._locale._abbr},gt.defineLocale=function(t,e){return null!==e?(e.abbr=t,Ct[t]||(Ct[t]=new l),Ct[t].set(e),gt.locale(t),Ct[t]):(delete Ct[t],null)},gt.langData=i("moment.langData is deprecated. Use moment.localeData instead.",function(t){return gt.localeData(t)}),gt.localeData=function(t){var e
if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return gt._locale
if(!w(t)){if(e=L(t))return e
t=[t]}return P(t)},gt.isMoment=function(t){return t instanceof d||null!=t&&n(t,"_isAMomentObject")},gt.isDuration=function(t){return t instanceof h}
for(Dt=_e.length-1;Dt>=0;--Dt)(function(e){var n,s
if(0===e.indexOf("week"))n=7,s="day"
else{if(0!==e.indexOf("month"))return
n=12,s="month"}gt[e]=function(a,i){var r,o,u=gt._locale[e],c=[]
if("number"==typeof a&&(i=a,a=t),o=function(t){var e=gt().utc().set(s,t)
return u.call(gt._locale,e,a||"")},null!=i)return o(i)
for(r=0;n>r;r++)c.push(o(r))
return c}})(_e[Dt])
gt.normalizeUnits=function(t){return k(t)},gt.invalid=function(t){var e=gt.utc(NaN)
return null!=t?f(e._pf,t):e._pf.userInvalidated=!0,e},gt.parseZone=function(){return gt.apply(null,arguments).parseZone()},gt.parseTwoDigitYear=function(t){return S(t)+(S(t)>68?1900:2e3)},gt.isDate=Y,f(gt.fn=d.prototype,{clone:function(){return gt(this)},valueOf:function(){return+this._d-6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var t=gt(this).utc()
return 0<t.year()&&t.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():A(t,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):A(t,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var t=this
return[t.year(),t.month(),t.date(),t.hours(),t.minutes(),t.seconds(),t.milliseconds()]},isValid:function(){return G(this)},isDSTShifted:function(){return!!this._a&&(this.isValid()&&v(this._a,(this._isUTC?gt.utc(this._a):gt(this._a)).toArray())>0)},parsingFlags:function(){return f({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(t){return this.utcOffset(0,t)},local:function(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(this._dateUtcOffset(),"m")),this},format:function(t){var e=A(this,t||gt.defaultFormat)
return this.localeData().postformat(e)},add:M(1,"add"),subtract:M(-1,"subtract"),diff:function(t,e,n){var s,a,i=I(t,this),r=6e4*(i.utcOffset()-this.utcOffset())
return e=k(e),"year"===e||"month"===e||"quarter"===e?(a=u(this,i),"quarter"===e?a/=3:"year"===e&&(a/=12)):(s=this-i,a="second"===e?s/1e3:"minute"===e?s/6e4:"hour"===e?s/36e5:"day"===e?(s-r)/864e5:"week"===e?(s-r)/6048e5:s),n?a:m(a)},from:function(t,e){return gt.duration({to:this,from:t}).locale(this.locale()).humanize(!e)},fromNow:function(t){return this.from(gt(),t)},calendar:function(t){var e=t||gt(),n=I(e,this).startOf("day"),s=this.diff(n,"days",!0),a=-6>s?"sameElse":-1>s?"lastWeek":0>s?"lastDay":1>s?"sameDay":2>s?"nextDay":7>s?"nextWeek":"sameElse"
return this.format(this.localeData().calendar(a,this,gt(e)))},isLeapYear:function(){return W(this.year())},isDST:function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},day:function(t){var e=this._isUTC?this._d.getUTCDay():this._d.getDay()
return null!=t?(t=at(t,this.localeData()),this.add(t-e,"d")):e},month:_t("Month",!0),startOf:function(t){switch(t=k(t)){case"year":this.month(0)
case"quarter":case"month":this.date(1)
case"week":case"isoWeek":case"day":this.hours(0)
case"hour":this.minutes(0)
case"minute":this.seconds(0)
case"second":this.milliseconds(0)}return"week"===t?this.weekday(0):"isoWeek"===t&&this.isoWeekday(1),"quarter"===t&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(e){return e=k(e),e===t||"millisecond"===e?this:this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms")},isAfter:function(t,e){return e=k(void 0!==e?e:"millisecond"),"millisecond"===e?(t=gt.isMoment(t)?t:gt(t),+this>+t):(gt.isMoment(t)?+t:+gt(t))<+this.clone().startOf(e)},isBefore:function(t,e){var n
return e=k(void 0!==e?e:"millisecond"),"millisecond"===e?+(t=gt.isMoment(t)?t:gt(t))>+this:(n=gt.isMoment(t)?+t:+gt(t),+this.clone().endOf(e)<n)},isBetween:function(t,e,n){return this.isAfter(t,n)&&this.isBefore(e,n)},isSame:function(t,e){var n
return e=k(e||"millisecond"),"millisecond"===e?(t=gt.isMoment(t)?t:gt(t),+this==+t):(n=+gt(t),+this.clone().startOf(e)<=n&&n<=+this.clone().endOf(e))},min:i("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(t){return t=gt.apply(null,arguments),this>t?this:t}),max:i("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(t){return t=gt.apply(null,arguments),t>this?this:t}),zone:i("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",function(t,e){return null!=t?("string"!=typeof t&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()}),utcOffset:function(t,e){var n,s=this._offset||0
return null!=t?("string"==typeof t&&(t=E(t)),Math.abs(t)<16&&(t*=60),!this._isUTC&&e&&(n=this._dateUtcOffset()),this._offset=t,this._isUTC=!0,null!=n&&this.add(n,"m"),s!==t&&(!e||this._changeInProgress?D(this,gt.duration(t-s,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,gt.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?s:this._dateUtcOffset()},isLocal:function(){return!this._isUTC},isUtcOffset:function(){return this._isUTC},isUtc:function(){return this._isUTC&&0===this._offset},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(E(this._i)),this},hasAlignedHourOffset:function(t){return t=t?gt(t).utcOffset():0,(this.utcOffset()-t)%60==0},daysInMonth:function(){return T(this.year(),this.month())},dayOfYear:function(t){var e=Yt((gt(this).startOf("day")-gt(this).startOf("year"))/864e5)+1
return null==t?e:this.add(t-e,"d")},quarter:function(t){return null==t?Math.ceil((this.month()+1)/3):this.month(3*(t-1)+this.month()%3)},weekYear:function(t){var e=ot(this,this.localeData()._week.dow,this.localeData()._week.doy).year
return null==t?e:this.add(t-e,"y")},isoWeekYear:function(t){var e=ot(this,1,4).year
return null==t?e:this.add(t-e,"y")},week:function(t){var e=this.localeData().week(this)
return null==t?e:this.add(7*(t-e),"d")},isoWeek:function(t){var e=ot(this,1,4).week
return null==t?e:this.add(7*(t-e),"d")},weekday:function(t){var e=(this.day()+7-this.localeData()._week.dow)%7
return null==t?e:this.add(t-e,"d")},isoWeekday:function(t){return null==t?this.day()||7:this.day(this.day()%7?t:t-7)},isoWeeksInYear:function(){return O(this.year(),1,4)},weeksInYear:function(){var t=this.localeData()._week
return O(this.year(),t.dow,t.doy)},get:function(t){return t=k(t),this[t]()},set:function(t,e){var n
if("object"==typeof t)for(n in t)this.set(n,t[n])
else t=k(t),"function"==typeof this[t]&&this[t](e)
return this},locale:function(e){var n
return e===t?this._locale._abbr:(n=gt.localeData(e),null!=n&&(this._locale=n),this)},lang:i("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===t?this.localeData():this.locale(e)}),localeData:function(){return this._locale},_dateUtcOffset:function(){return 15*-Math.round(this._d.getTimezoneOffset()/15)}}),gt.fn.millisecond=gt.fn.milliseconds=_t("Milliseconds",!1),gt.fn.second=gt.fn.seconds=_t("Seconds",!1),gt.fn.minute=gt.fn.minutes=_t("Minutes",!1),gt.fn.hour=gt.fn.hours=_t("Hours",!0),gt.fn.date=_t("Date",!0),gt.fn.dates=i("dates accessor is deprecated. Use date instead.",_t("Date",!0)),gt.fn.year=_t("FullYear",!0),gt.fn.years=i("years accessor is deprecated. Use year instead.",_t("FullYear",!0)),gt.fn.days=gt.fn.day,gt.fn.months=gt.fn.month,gt.fn.weeks=gt.fn.week,gt.fn.isoWeeks=gt.fn.isoWeek,gt.fn.quarters=gt.fn.quarter,gt.fn.toJSON=gt.fn.toISOString,gt.fn.isUTC=gt.fn.isUtc,f(gt.duration.fn=h.prototype,{_bubble:function(){var t,e,n,s=this._milliseconds,a=this._days,i=this._months,r=this._data,o=0
r.milliseconds=s%1e3,t=m(s/1e3),r.seconds=t%60,e=m(t/60),r.minutes=e%60,n=m(e/60),r.hours=n%24,a+=m(n/24),o=m(mt(a)),a-=m(yt(o)),i+=m(a/30),a%=30,o+=m(i/12),i%=12,r.days=a,r.months=i,r.years=o},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this},weeks:function(){return m(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*S(this._months/12)},humanize:function(t){var e=rt(this,!t,this.localeData())
return t&&(e=this.localeData().pastFuture(+this,e)),this.localeData().postformat(e)},add:function(t,e){var n=gt.duration(t,e)
return this._milliseconds+=n._milliseconds,this._days+=n._days,this._months+=n._months,this._bubble(),this},subtract:function(t,e){var n=gt.duration(t,e)
return this._milliseconds-=n._milliseconds,this._days-=n._days,this._months-=n._months,this._bubble(),this},get:function(t){return t=k(t),this[t.toLowerCase()+"s"]()},as:function(t){var e,n
if("month"===(t=k(t))||"year"===t)return e=this._days+this._milliseconds/864e5,n=this._months+12*mt(e),"month"===t?n:n/12
switch(e=this._days+Math.round(yt(this._months/12)),t){case"week":return e/7+this._milliseconds/6048e5
case"day":return e+this._milliseconds/864e5
case"hour":return 24*e+this._milliseconds/36e5
case"minute":return 24*e*60+this._milliseconds/6e4
case"second":return 24*e*60*60+this._milliseconds/1e3
case"millisecond":return Math.floor(24*e*60*60*1e3)+this._milliseconds
default:throw new Error("Unknown unit "+t)}},lang:gt.fn.lang,locale:gt.fn.locale,toIsoString:i("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()}),toISOString:function(){var t=Math.abs(this.years()),e=Math.abs(this.months()),n=Math.abs(this.days()),s=Math.abs(this.hours()),a=Math.abs(this.minutes()),i=Math.abs(this.seconds()+this.milliseconds()/1e3)
return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(t?t+"Y":"")+(e?e+"M":"")+(n?n+"D":"")+(s||a||i?"T":"")+(s?s+"H":"")+(a?a+"M":"")+(i?i+"S":""):"P0D"},localeData:function(){return this._locale},toJSON:function(){return this.toISOString()}}),gt.duration.fn.toString=gt.duration.fn.toISOString
for(Dt in ie)n(ie,Dt)&&function(t){gt.duration.fn[t]=function(){return this._data[t]}}(Dt.toLowerCase())
gt.duration.fn.asMilliseconds=function(){return this.as("ms")},gt.duration.fn.asSeconds=function(){return this.as("s")},gt.duration.fn.asMinutes=function(){return this.as("m")},gt.duration.fn.asHours=function(){return this.as("h")},gt.duration.fn.asDays=function(){return this.as("d")},gt.duration.fn.asWeeks=function(){return this.as("weeks")},gt.duration.fn.asMonths=function(){return this.as("M")},gt.duration.fn.asYears=function(){return this.as("y")},gt.locale("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10
return t+(1===S(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th")}}),Ft?module.exports=gt:"function"==typeof define&&define.amd?(define(function(t,e,n){return n.config&&n.config()&&!0===n.config().noGlobal&&(wt.moment=Mt),gt}),pt(!0)):pt()}).call(this)
