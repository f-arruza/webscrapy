!function(e){function n(e,n){if(!n||"function"==typeof n)return e
for(var t in n)e[t]=n[t]
return e}function t(e,n,r){for(var a in n)a in e?"string"==typeof e[a]||e[a]instanceof String||"string"==typeof n[a]||n[a]instanceof String?r&&(e[a]=n[a]):t(e[a],n[a],r):e[a]=n[a]
return e}function r(e,n,t){var r,a=0,o=e.length,i=void 0===o||"[object Array]"!==Object.prototype.toString.apply(e)||"function"==typeof e
if(t)if(i){for(r in e)if(!1===n.apply(e[r],t))break}else for(;o>a&&!1!==n.apply(e[a++],t););else if(i){for(r in e)if(!1===n.call(e[r],r,e[r]))break}else for(;o>a&&!1!==n.call(e[a],a,e[a++]););return e}function a(e){return"string"==typeof e?e.replace(/[&<>"'\/]/g,function(e){return J[e]}):e}function o(e){var n=function(e){if(window.XMLHttpRequest)return e(null,new XMLHttpRequest)
if(window.ActiveXObject)try{return e(null,new ActiveXObject("Msxml2.XMLHTTP"))}catch(n){return e(null,new ActiveXObject("Microsoft.XMLHTTP"))}return e(new Error)},t=function(e){if("string"==typeof e)return e
var n=[]
for(var t in e)e.hasOwnProperty(t)&&n.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t]))
return n.join("&")},r=function(e){e=e.replace(/\r\n/g,"\n")
for(var n="",t=0;t<e.length;t++){var r=e.charCodeAt(t)
128>r?n+=String.fromCharCode(r):r>127&&2048>r?(n+=String.fromCharCode(r>>6|192),n+=String.fromCharCode(63&r|128)):(n+=String.fromCharCode(r>>12|224),n+=String.fromCharCode(r>>6&63|128),n+=String.fromCharCode(63&r|128))}return n},a=function(e){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
e=r(e)
var t,a,o,i,s,u,l,f="",c=0
do{t=e.charCodeAt(c++),a=e.charCodeAt(c++),o=e.charCodeAt(c++),i=t>>2,s=(3&t)<<4|a>>4,u=(15&a)<<2|o>>6,l=63&o,isNaN(a)?u=l=64:isNaN(o)&&(l=64),f+=n.charAt(i)+n.charAt(s)+n.charAt(u)+n.charAt(l),t=a=o="",i=s=u=l=""}while(c<e.length)
return f},o=function(){for(var e=arguments[0],n=1;n<arguments.length;n++){var t=arguments[n]
for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])}return e},i=function(e,r,a,s){"function"==typeof a&&(s=a,a={}),a.cache=a.cache||!1,a.data=a.data||{},a.headers=a.headers||{},a.jsonp=a.jsonp||!1,a.async=void 0===a.async||a.async
var u,l=o({accept:"*/*","content-type":"application/x-www-form-urlencoded;charset=UTF-8"},i.headers,a.headers)
if(u="application/json"===l["content-type"]?JSON.stringify(a.data):t(a.data),"GET"===e){var f=[]
if(u&&(f.push(u),u=null),a.cache||f.push("_="+(new Date).getTime()),a.jsonp&&(f.push("callback="+a.jsonp),f.push("jsonp="+a.jsonp)),f=f.join("&"),f.length>1&&(r+=r.indexOf("?")>-1?"&"+f:"?"+f),a.jsonp){var c=document.getElementsByTagName("head")[0],p=document.createElement("script")
return p.type="text/javascript",p.src=r,void c.appendChild(p)}}n(function(n,t){if(n)return s(n)
t.open(e,r,a.async)
for(var o in l)l.hasOwnProperty(o)&&t.setRequestHeader(o,l[o])
t.onreadystatechange=function(){if(4===t.readyState){var e=t.responseText||""
if(!s)return
s(t.status,{text:function(){return e},json:function(){try{return JSON.parse(e)}catch(e){return W.error("Can not parse JSON. URL: "+r),{}}}})}},t.send(u)})};({authBasic:function(e,n){i.headers.Authorization="Basic "+a(e+":"+n)},connect:function(e,n,t){return i("CONNECT",e,n,t)},del:function(e,n,t){return i("DELETE",e,n,t)},get:function(e,n,t){return i("GET",e,n,t)},head:function(e,n,t){return i("HEAD",e,n,t)},headers:function(e){i.headers=e||{}},isAllowed:function(e,n,t){this.options(e,function(e,r){t(-1!==r.text().indexOf(n))})},options:function(e,n,t){return i("OPTIONS",e,n,t)},patch:function(e,n,t){return i("PATCH",e,n,t)},post:function(e,n,t){return i("POST",e,n,t)},put:function(e,n,t){return i("PUT",e,n,t)},trace:function(e,n,t){return i("TRACE",e,n,t)}})[e.type?e.type.toLowerCase():"get"](e.url,e,function(n,t){200===n||0===n&&t.text()?e.success(t.json(),n,null):e.error(t.text(),n,null)})}function i(e,n){"function"==typeof e&&(n=e,e={}),e=e||{},W.extend(U,e),delete U.fixLng,U.functions&&(delete U.functions,W.extend(W,e.functions)),"string"==typeof U.ns&&(U.ns={namespaces:[U.ns],defaultNs:U.ns}),"string"==typeof U.fallbackNS&&(U.fallbackNS=[U.fallbackNS]),("string"==typeof U.fallbackLng||"boolean"==typeof U.fallbackLng)&&(U.fallbackLng=[U.fallbackLng]),U.interpolationPrefixEscaped=W.regexEscape(U.interpolationPrefix),U.interpolationSuffixEscaped=W.regexEscape(U.interpolationSuffix),U.lng||(U.lng=W.detectLanguage()),K=W.toLanguages(U.lng),I=K[0],W.log("currentLng set to: "+I),U.useCookie&&W.cookie.read(U.cookieName)!==I&&W.cookie.create(U.cookieName,I,U.cookieExpirationTime,U.cookieDomain),U.detectLngFromLocalStorage&&"undefined"!=typeof document&&window.localStorage&&W.localStorage.setItem("i18next_lng",I)
var t=_
e.fixLng&&(t=function(e,n){return n=n||{},n.lng=n.lng||t.lng,_(e,n)},t.lng=I),Z.setCurrentLng(I),V&&U.setJqueryExt?S&&S():w&&w()
var r
if(V&&V.Deferred&&(r=V.Deferred()),!U.resStore){var a=W.toLanguages(U.lng)
"string"==typeof U.preload&&(U.preload=[U.preload])
for(var o=0,i=U.preload.length;i>o;o++)for(var s=W.toLanguages(U.preload[o]),u=0,l=s.length;l>u;u++)a.indexOf(s[u])<0&&a.push(s[u])
return H.sync.load(a,U,function(e,a){z=a,B=!0,n&&n(e,t),r&&(e?r.reject:r.resolve)(e||t)}),r?r.promise():void 0}return z=U.resStore,B=!0,n&&n(null,t),r&&r.resolve(t),r?r.promise():void 0}function s(){return B}function u(e,n){"string"==typeof e&&(e=[e])
for(var t=0,r=e.length;r>t;t++)U.preload.indexOf(e[t])<0&&U.preload.push(e[t])
return i(n)}function l(e,n,t,r,a){"string"!=typeof n?(t=n,n=U.ns.defaultNs):U.ns.namespaces.indexOf(n)<0&&U.ns.namespaces.push(n),z[e]=z[e]||{},z[e][n]=z[e][n]||{},r?W.deepExtend(z[e][n],t,a):W.extend(z[e][n],t),U.useLocalStorage&&G._storeLocal(z)}function f(e,n){"string"!=typeof n&&(n=U.ns.defaultNs),z[e]=z[e]||{}
var t=z[e][n]||{},r=!1
for(var a in t)t.hasOwnProperty(a)&&(r=!0)
return r}function c(e,n){return"string"!=typeof n&&(n=U.ns.defaultNs),z[e]=z[e]||{},W.extend({},z[e][n])}function p(e,n){"string"!=typeof n&&(n=U.ns.defaultNs),z[e]=z[e]||{},z[e][n]={},U.useLocalStorage&&G._storeLocal(z)}function d(e,n,t,r){"string"!=typeof n?(resource=n,n=U.ns.defaultNs):U.ns.namespaces.indexOf(n)<0&&U.ns.namespaces.push(n),z[e]=z[e]||{},z[e][n]=z[e][n]||{}
for(var a=t.split(U.keyseparator),o=0,i=z[e][n];a[o];)o==a.length-1?i[a[o]]=r:(null==i[a[o]]&&(i[a[o]]={}),i=i[a[o]]),o++
U.useLocalStorage&&G._storeLocal(z)}function g(e,n,t){"string"!=typeof n?(t=n,n=U.ns.defaultNs):U.ns.namespaces.indexOf(n)<0&&U.ns.namespaces.push(n)
for(var r in t)"string"==typeof t[r]&&d(e,n,r,t[r])}function h(e){U.ns.defaultNs=e}function y(e,n){m([e],n)}function m(e,n){var t={dynamicLoad:U.dynamicLoad,resGetPath:U.resGetPath,getAsync:U.getAsync,customLoad:U.customLoad,ns:{namespaces:e,defaultNs:""}},r=W.toLanguages(U.lng)
"string"==typeof U.preload&&(U.preload=[U.preload])
for(var a=0,o=U.preload.length;o>a;a++)for(var i=W.toLanguages(U.preload[a]),s=0,u=i.length;u>s;s++)r.indexOf(i[s])<0&&r.push(i[s])
for(var l=[],f=0,c=r.length;c>f;f++){var p=!1,d=z[r[f]]
if(d)for(var g=0,h=e.length;h>g;g++)d[e[g]]||(p=!0)
else p=!0
p&&l.push(r[f])}l.length?H.sync._fetch(l,t,function(t,r){var a=e.length*l.length
W.each(e,function(e,t){U.ns.namespaces.indexOf(t)<0&&U.ns.namespaces.push(t),W.each(l,function(e,o){z[o]=z[o]||{},z[o][t]=r[o][t],0===--a&&n&&(U.useLocalStorage&&H.sync._storeLocal(z),n())})})}):n&&n()}function v(e,n,t){return"function"==typeof n?(t=n,n={}):n||(n={}),n.lng=e,i(n,t)}function x(){return I}function b(){return["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam"].some(function(e){return new RegExp("^"+e).test(I)})?"rtl":"ltr"}function k(e){z={},v(I,e)}function L(){window.i18next=window.i18n,q?window.i18n=q:delete window.i18n}function S(){function e(e,n,t){if(0!==n.length){var r="text"
if(0===n.indexOf("[")){var a=n.split("]")
n=a[1],r=a[0].substr(1,a[0].length-1)}n.indexOf(";")===n.length-1&&(n=n.substr(0,n.length-2))
var o
if("html"===r)o=U.defaultValueFromContent?V.extend({defaultValue:e.html()},t):t,e.html(V.t(n,o))
else if("text"===r)o=U.defaultValueFromContent?V.extend({defaultValue:e.text()},t):t,e.text(V.t(n,o))
else if("prepend"===r)o=U.defaultValueFromContent?V.extend({defaultValue:e.html()},t):t,e.prepend(V.t(n,o))
else if("append"===r)o=U.defaultValueFromContent?V.extend({defaultValue:e.html()},t):t,e.append(V.t(n,o))
else if(0===r.indexOf("data-")){var i=r.substr("data-".length)
o=U.defaultValueFromContent?V.extend({defaultValue:e.data(i)},t):t
var s=V.t(n,o)
e.data(i,s),e.attr(r,s)}else o=U.defaultValueFromContent?V.extend({defaultValue:e.attr(r)},t):t,e.attr(r,V.t(n,o))}}function n(n,t){var r=n.attr(U.selectorAttr)
if(r||void 0===r||!1===r||(r=n.text()||n.val()),r){var a=n,o=n.data("i18n-target")
if(o&&(a=n.find(o)||n),t||!0!==U.useDataAttrOptions||(t=n.data("i18n-options")),t=t||{},r.indexOf(";")>=0){var i=r.split(";")
V.each(i,function(n,r){""!==r&&e(a,r,t)})}else e(a,r,t)
if(!0===U.useDataAttrOptions){var s=V.extend({lng:"non",lngs:[],_origLng:"non"},t)
delete s.lng,delete s.lngs,delete s._origLng,n.data("i18n-options",s)}}}V.t=V.t||_,V.fn.i18n=function(e){return this.each(function(){n(V(this),e),V(this).find("["+U.selectorAttr+"]").each(function(){n(V(this),e)})})}}function w(){function e(e,n,t){if(0!==n.length){var r="text"
if(0===n.indexOf("[")){var a=n.split("]")
n=a[1],r=a[0].substr(1,a[0].length-1)}n.indexOf(";")===n.length-1&&(n=n.substr(0,n.length-2)),"html"===r?e.innerHTML=_(n,t):"text"===r?e.textContent=_(n,t):"prepend"===r?e.insertAdjacentHTML(_(n,t),"afterbegin"):"append"===r?e.insertAdjacentHTML(_(n,t),"beforeend"):e.setAttribute(r,_(n,t))}}function n(n,t){var r=n.getAttribute(U.selectorAttr)
if(r||void 0===r||!1===r||(r=n.textContent||n.value),r){var a=n,o=n.getAttribute("i18n-target")
if(o&&(a=n.querySelector(o)||n),r.indexOf(";")>=0)for(var i=r.split(";"),s=0,u=i.length;u>s;s++)""!==i[s]&&e(a,i[s],t)
else e(a,r,t)}}H.translateObject=function(e,t){for(var r=e.querySelectorAll("["+U.selectorAttr+"]"),a=0,o=r.length;o>a;a++)n(r[a],t)}}function O(e,n,t,r){if(!e)return e
if(r=r||n,e.indexOf(r.interpolationPrefix||U.interpolationPrefix)<0)return e
var a=r.interpolationPrefix?W.regexEscape(r.interpolationPrefix):U.interpolationPrefixEscaped,o=r.interpolationSuffix?W.regexEscape(r.interpolationSuffix):U.interpolationSuffixEscaped,i=r.keyseparator||U.keyseparator,s=n.replace&&"object"==typeof n.replace?n.replace:n,u=new RegExp([a,"(.+?)","(HTML)?",o].join(""),"g"),l=r.escapeInterpolation||U.escapeInterpolation
return e.replace(u,function(e,n,t){for(var r=s,a=n;a.indexOf(i)>=0&&"object"==typeof r&&r;){var o=a.slice(0,a.indexOf(i))
a=a.slice(a.indexOf(i)+1),r=r[o]}return r&&"object"==typeof r&&r.hasOwnProperty(a)?(r[a],l&&!t?W.escape(r[a]):r[a]):e})}function N(e,n){var t=W.extend({},n)
for(delete t.postProcess,delete t.isFallbackLookup;-1!=e.indexOf(U.reusePrefix)&&!(++D>U.maxRecursion);){var r=e.lastIndexOf(U.reusePrefix),a=e.indexOf(U.reuseSuffix,r)+U.reuseSuffix.length,o=e.substring(r,a),i=o.replace(U.reusePrefix,"").replace(U.reuseSuffix,"")
if(r>=a)return W.error("there is an missing closing in following translation value",e),""
if(-1!=i.indexOf(",")){var s=i.indexOf(",")
if(-1!=i.indexOf("{",s)&&-1!=i.indexOf("}",s)){var u=i.indexOf("{",s),l=i.indexOf("}",u)+"}".length
try{t=W.extend(t,JSON.parse(i.substring(u,l))),i=i.substring(0,s)}catch(e){}}}var f=M(i,t)
e=e.replace(o,W.regexReplacementEscape(f))}return e}function j(e){return e.context&&("string"==typeof e.context||"number"==typeof e.context)}function P(e){return void 0!==e.count&&"string"!=typeof e.count}function C(e){return void 0!==e.indefinite_article&&"string"!=typeof e.indefinite_article&&e.indefinite_article}function T(e,n){n=n||{}
var t=A(e,n),r=F(e,n)
return void 0!==r||r===t}function _(e,n){return B?(D=0,M.apply(null,arguments)):(W.log("i18next not finished initialization. you might have called t function before loading resources finished."),n&&n.defaultValue?n.detaultValue:"")}function A(e,n){return void 0!==n.defaultValue?n.defaultValue:e}function E(){for(var e=[],n=1;n<arguments.length;n++)e.push(arguments[n])
return{postProcess:"sprintf",sprintf:e}}function M(e,n){if(void 0!==n&&"object"!=typeof n?"sprintf"===U.shortcutFunction?n=E.apply(null,arguments):"defaultValue"===U.shortcutFunction&&(n={defaultValue:n}):n=n||{},"object"==typeof U.defaultVariables&&(n=W.extend({},U.defaultVariables,n)),void 0===e||null===e||""===e)return""
"number"==typeof e&&(e=String(e)),"string"==typeof e&&(e=[e])
var t=e[0]
if(e.length>1)for(var r=0;r<e.length&&(t=e[r],!T(t,n));r++);var a,o=A(t,n),i=F(t,n),s=n.nsseparator||U.nsseparator,u=n.lng?W.toLanguages(n.lng,n.fallbackLng):K,l=n.ns||U.ns.defaultNs
t.indexOf(s)>-1&&(a=t.split(s),l=a[0],t=a[1]),void 0===i&&U.sendMissing&&"function"==typeof U.missingKeyHandler&&(n.lng?U.missingKeyHandler(u[0],l,t,o,u):U.missingKeyHandler(U.lng,l,t,o,u))
var f
f="string"==typeof U.postProcess&&""!==U.postProcess?[U.postProcess]:"array"==typeof U.postProcess||"object"==typeof U.postProcess?U.postProcess:[],"string"==typeof n.postProcess&&""!==n.postProcess?f=f.concat([n.postProcess]):("array"==typeof n.postProcess||"object"==typeof n.postProcess)&&(f=f.concat(n.postProcess)),void 0!==i&&f.length&&f.forEach(function(e){ee[e]&&(i=ee[e](i,t,n))})
var c=o
return o.indexOf(s)>-1&&(a=o.split(s),c=a[1]),c===t&&U.parseMissingKey&&(o=U.parseMissingKey(o)),void 0===i&&(o=O(o,n),o=N(o,n),f.length&&(i=A(t,n),f.forEach(function(e){ee[e]&&(i=ee[e](i,t,n))}))),void 0!==i?i:o}function F(e,n){n=n||{}
var t,r,a=A(e,n),o=K
if(!z)return a
if("cimode"===o[0].toLowerCase())return a
if(n.lngs&&(o=n.lngs),n.lng&&(o=W.toLanguages(n.lng,n.fallbackLng),!z[o[0]])){var i=U.getAsync
U.getAsync=!1,H.sync.load(o,U,function(e,n){W.extend(z,n),U.getAsync=i})}var s=n.ns||U.ns.defaultNs,u=n.nsseparator||U.nsseparator
if(e.indexOf(u)>-1){var l=e.split(u)
s=l[0],e=l[1]}if(j(n)){t=W.extend({},n),delete t.context,t.defaultValue=U.contextNotFound
if((r=_(s+u+e+"_"+n.context,t))!=U.contextNotFound)return O(r,{context:n.context})}if(P(n,o[0])){t=W.extend({lngs:[o[0]]},n),delete t.count,t._origLng=t._origLng||t.lng||o[0],delete t.lng,t.defaultValue=U.pluralNotFound
var f
if(Z.needsPlural(o[0],n.count)){f=s+u+e+U.pluralSuffix
var c=Z.get(o[0],n.count)
c>=0?f=f+"_"+c:1===c&&(f=s+u+e)}else f=s+u+e
if((r=_(f,t))!=U.pluralNotFound)return O(r,{count:n.count,interpolationPrefix:n.interpolationPrefix,interpolationSuffix:n.interpolationSuffix})
if(!(o.length>1))return t.lng=t._origLng,delete t._origLng,r=_(s+u+e,t),O(r,{count:n.count,interpolationPrefix:n.interpolationPrefix,interpolationSuffix:n.interpolationSuffix})
var p=o.slice()
if(p.shift(),n=W.extend(n,{lngs:p}),n._origLng=t._origLng,delete n.lng,(r=_(s+u+e,n))!=U.pluralNotFound)return r}if(C(n)){var d=W.extend({},n)
delete d.indefinite_article,d.defaultValue=U.indefiniteNotFound
if((r=_(s+u+e+(n.count&&!P(n,o[0])||!n.count?U.indefiniteSuffix:""),d))!=U.indefiniteNotFound)return r}for(var g,h=n.keyseparator||U.keyseparator,y=e.split(h),m=0,v=o.length;v>m&&void 0===g;m++){for(var x=o[m],b=0,k=z[x]&&z[x][s];y[b];)k=k&&k[y[b]],b++
if(void 0!==k&&(!U.showKeyIfEmpty||""!==k)){var L=Object.prototype.toString.apply(k)
if("string"==typeof k)k=O(k,n),k=N(k,n)
else if("[object Array]"!==L||U.returnObjectTrees||n.returnObjectTrees){if(null===k&&!0===U.fallbackOnNull)k=void 0
else if(null!==k)if(U.returnObjectTrees||n.returnObjectTrees){if("[object Number]"!==L&&"[object Function]"!==L&&"[object RegExp]"!==L){var S="[object Array]"===L?[]:{}
W.each(k,function(t){S[t]=M(s+u+e+h+t,n)}),k=S}}else U.objectTreeKeyHandler&&"function"==typeof U.objectTreeKeyHandler?k=U.objectTreeKeyHandler(e,k,x,s,n):(k="key '"+s+":"+e+" ("+x+")' returned an object instead of string.",W.log(k))}else k=k.join("\n"),k=O(k,n),k=N(k,n)
"string"==typeof k&&""===k.trim()&&!0===U.fallbackOnEmpty&&(k=void 0),g=k}}if(void 0===g&&!n.isFallbackLookup&&(!0===U.fallbackToDefaultNS||U.fallbackNS&&U.fallbackNS.length>0)){if(n.isFallbackLookup=!0,U.fallbackNS.length){for(var w=0,T=U.fallbackNS.length;T>w;w++)if((g=F(U.fallbackNS[w]+u+e,n))||""===g&&!1===U.fallbackOnEmpty){var E=g.indexOf(u)>-1?g.split(u)[1]:g,R=a.indexOf(u)>-1?a.split(u)[1]:a
if(E!==R)break}}else n.ns=U.ns.defaultNs,g=F(e,n)
n.isFallbackLookup=!1}return g}function R(){var e,n=U.lngWhitelist||[],t=[]
if("undefined"!=typeof window&&function(){for(var e=window.location.search.substring(1),n=e.split("&"),r=0;r<n.length;r++){var a=n[r].indexOf("=")
if(a>0){n[r].substring(0,a)==U.detectLngQS&&t.push(n[r].substring(a+1))}}}(),U.useCookie&&"undefined"!=typeof document){var r=W.cookie.read(U.cookieName)
r&&t.push(r)}if(U.detectLngFromLocalStorage&&"undefined"!=typeof window&&window.localStorage){var a=W.localStorage.getItem("i18next_lng")
a&&t.push(a)}if("undefined"!=typeof navigator){if(navigator.languages)for(var o=0;o<navigator.languages.length;o++)t.push(navigator.languages[o])
navigator.userLanguage&&t.push(navigator.userLanguage),navigator.language&&t.push(navigator.language)}return function(){for(var r=0;r<t.length;r++){var a=t[r]
if(a.indexOf("-")>-1){var o=a.split("-")
a=U.lowerCaseLng?o[0].toLowerCase()+"-"+o[1].toLowerCase():o[0].toLowerCase()+"-"+o[1].toUpperCase()}if(0===n.length||n.indexOf(a)>-1){e=a
break}}}(),e||(e=U.fallbackLng[0]),e}Array.prototype.indexOf||(Array.prototype.indexOf=function(e){"use strict"
if(null==this)throw new TypeError
var n=Object(this),t=n.length>>>0
if(0===t)return-1
var r=0
if(arguments.length>0&&(r=Number(arguments[1]),r!=r?r=0:0!=r&&r!=1/0&&r!=-1/0&&(r=(r>0||-1)*Math.floor(Math.abs(r)))),r>=t)return-1
for(var a=r>=0?r:Math.max(t-Math.abs(r),0);t>a;a++)if(a in n&&n[a]===e)return a
return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(e){"use strict"
if(null==this)throw new TypeError
var n=Object(this),t=n.length>>>0
if(0===t)return-1
var r=t
arguments.length>1&&(r=Number(arguments[1]),r!=r?r=0:0!=r&&r!=1/0&&r!=-1/0&&(r=(r>0||-1)*Math.floor(Math.abs(r))))
for(var a=r>=0?Math.min(r,t-1):t-Math.abs(r);a>=0;a--)if(a in n&&n[a]===e)return a
return-1}),"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")})
var I,V=e.jQuery||e.Zepto,H={},z={},D=0,K=[],B=!1,G={},q=null
"undefined"!=typeof module&&module.exports?module.exports=H:(V&&(V.i18n=V.i18n||H),e.i18n&&(q=e.i18n),e.i18n=H),G={load:function(e,n,t){n.useLocalStorage?G._loadLocal(e,n,function(r,a){for(var o=[],i=0,s=e.length;s>i;i++)a[e[i]]||o.push(e[i])
o.length>0?G._fetch(o,n,function(e,n){W.extend(a,n),G._storeLocal(n),t(e,a)}):t(r,a)}):G._fetch(e,n,function(e,n){t(e,n)})},_loadLocal:function(e,n,t){var r={},a=(new Date).getTime()
if(window.localStorage){var o=e.length
W.each(e,function(e,i){var s=W.localStorage.getItem("res_"+i)
s&&(s=JSON.parse(s),s.i18nStamp&&s.i18nStamp+n.localStorageExpirationTime>a&&(r[i]=s)),0===--o&&t(null,r)})}},_storeLocal:function(e){if(window.localStorage)for(var n in e)e[n].i18nStamp=(new Date).getTime(),W.localStorage.setItem("res_"+n,JSON.stringify(e[n]))},_fetch:function(e,n,t){var r=n.ns,a={}
if(n.dynamicLoad){var o=function(e,n){t(e,n)}
if("function"==typeof n.customLoad)n.customLoad(e,r.namespaces,n,o)
else{var i=O(n.resGetPath,{lng:e.join("+"),ns:r.namespaces.join("+")})
W.ajax({url:i,cache:n.cache,success:function(e){W.log("loaded: "+i),o(null,e)},error:function(e,n,t){W.log("failed loading: "+i),o("failed loading resource.json error: "+t)},dataType:"json",async:n.getAsync,timeout:n.ajaxTimeout})}}else{var s,u=r.namespaces.length*e.length
W.each(r.namespaces,function(r,o){W.each(e,function(e,r){var i=function(e,n){e&&(s=s||[],s.push(e)),a[r]=a[r]||{},a[r][o]=n,0===--u&&t(s,a)}
"function"==typeof n.customLoad?n.customLoad(r,o,n,i):G._fetchOne(r,o,n,i)})})}},_fetchOne:function(e,n,t,r){var a=O(t.resGetPath,{lng:e,ns:n})
W.ajax({url:a,cache:t.cache,success:function(e){W.log("loaded: "+a),r(null,e)},error:function(e,n,t){if(n&&200==n||e&&e.status&&200==e.status)W.error("There is a typo in: "+a)
else if(n&&404==n||e&&e.status&&404==e.status)W.log("Does not exist: "+a)
else{var o=n||(e&&e.status?e.status:null)
W.log(o+" when loading "+a)}r(t,{})},dataType:"json",async:t.getAsync,timeout:t.ajaxTimeout,headers:t.headers})},postMissing:function(e,n,t,r,a){var o={}
o[t]=r
var i=[]
if("fallback"===U.sendMissingTo&&!1!==U.fallbackLng[0])for(var s=0;s<U.fallbackLng.length;s++)i.push({lng:U.fallbackLng[s],url:O(U.resPostPath,{lng:U.fallbackLng[s],ns:n})})
else if("current"===U.sendMissingTo||"fallback"===U.sendMissingTo&&!1===U.fallbackLng[0])i.push({lng:e,url:O(U.resPostPath,{lng:e,ns:n})})
else if("all"===U.sendMissingTo)for(var s=0,u=a.length;u>s;s++)i.push({lng:a[s],url:O(U.resPostPath,{lng:a[s],ns:n})})
for(var l=0,f=i.length;f>l;l++){var c=i[l]
W.ajax({url:c.url,type:U.sendType,data:o,success:function(){W.log("posted missing key '"+t+"' to: "+c.url)
for(var e=t.split("."),a=0,o=z[c.lng][n];e[a];)o=o[e[a]]=a===e.length-1?r:o[e[a]]||{},a++},error:function(){W.log("failed posting missing key '"+t+"' to: "+c.url)},dataType:"json",async:U.postAsync,timeout:U.ajaxTimeout})}},reload:k}
var U={lng:void 0,load:"all",preload:[],lowerCaseLng:!1,returnObjectTrees:!1,fallbackLng:["dev"],fallbackNS:[],detectLngQS:"setLng",detectLngFromLocalStorage:!1,ns:{namespaces:["translation"],defaultNs:"translation"},fallbackOnNull:!0,fallbackOnEmpty:!1,fallbackToDefaultNS:!1,showKeyIfEmpty:!1,nsseparator:":",keyseparator:".",selectorAttr:"data-i18n",debug:!1,resGetPath:"locales/__lng__/__ns__.json",resPostPath:"locales/add/__lng__/__ns__",getAsync:!0,postAsync:!0,resStore:void 0,useLocalStorage:!1,localStorageExpirationTime:6048e5,dynamicLoad:!1,sendMissing:!1,sendMissingTo:"fallback",sendType:"POST",interpolationPrefix:"__",interpolationSuffix:"__",defaultVariables:!1,reusePrefix:"$t(",reuseSuffix:")",pluralSuffix:"_plural",pluralNotFound:["plural_not_found",Math.random()].join(""),contextNotFound:["context_not_found",Math.random()].join(""),escapeInterpolation:!1,indefiniteSuffix:"_indefinite",indefiniteNotFound:["indefinite_not_found",Math.random()].join(""),setJqueryExt:!0,defaultValueFromContent:!0,useDataAttrOptions:!1,cookieExpirationTime:void 0,useCookie:!0,cookieName:"i18next",cookieDomain:void 0,objectTreeKeyHandler:void 0,postProcess:void 0,parseMissingKey:void 0,missingKeyHandler:G.postMissing,ajaxTimeout:0,shortcutFunction:"sprintf"},J={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},$={create:function(e,n,t,r){var a
if(t){var o=new Date
o.setTime(o.getTime()+60*t*1e3),a="; expires="+o.toGMTString()}else a=""
r=r?"domain="+r+";":"",document.cookie=e+"="+n+a+";"+r+"path=/"},read:function(e){for(var n=e+"=",t=document.cookie.split(";"),r=0;r<t.length;r++){for(var a=t[r];" "==a.charAt(0);)a=a.substring(1,a.length)
if(0===a.indexOf(n))return a.substring(n.length,a.length)}return null},remove:function(e){this.create(e,"",-1)}},X={create:function(){},read:function(){return null},remove:function(){}},W={extend:V?V.extend:n,deepExtend:t,each:V?V.each:r,ajax:V?V.ajax:"undefined"!=typeof document?o:function(){},cookie:"undefined"!=typeof document?$:X,detectLanguage:R,escape:a,log:function(e){U.debug&&"undefined"!=typeof console&&console.log(e)},error:function(e){"undefined"!=typeof console&&console.error(e)},getCountyIndexOfLng:function(e){var n=0
return("nb-NO"===e||"nn-NO"===e||"nb-no"===e||"nn-no"===e)&&(n=1),n},toLanguages:function(e,n){function t(e){var n=e
if("string"==typeof e&&e.indexOf("-")>-1){var t=e.split("-")
n=U.lowerCaseLng?t[0].toLowerCase()+"-"+t[1].toLowerCase():t[0].toLowerCase()+"-"+t[1].toUpperCase()}else n=U.lowerCaseLng?e.toLowerCase():e
return n}var r=this.log
"string"==typeof(n=n||U.fallbackLng)&&(n=[n])
var a=[],o=U.lngWhitelist||!1,i=function(e){!o||o.indexOf(e)>-1?a.push(e):r("rejecting non-whitelisted language: "+e)}
if("string"==typeof e&&e.indexOf("-")>-1){var s=e.split("-")
"unspecific"!==U.load&&i(t(e)),"current"!==U.load&&i(t(s[this.getCountyIndexOfLng(e)]))}else i(t(e))
for(var u=0;u<n.length;u++)-1===a.indexOf(n[u])&&n[u]&&a.push(t(n[u]))
return a},regexEscape:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},regexReplacementEscape:function(e){return"string"==typeof e?e.replace(/\$/g,"$$$$"):e},localStorage:{setItem:function(e,n){if(window.localStorage)try{window.localStorage.setItem(e,n)}catch(n){W.log('failed to set value for key "'+e+'" to localStorage.')}},getItem:function(e,n){if(window.localStorage)try{return window.localStorage.getItem(e,n)}catch(n){return void W.log('failed to get value for key "'+e+'" from localStorage.')}}}}
W.applyReplacement=O
var Q=[["ach","Acholi",[1,2],1],["af","Afrikaans",[1,2],2],["ak","Akan",[1,2],1],["am","Amharic",[1,2],1],["an","Aragonese",[1,2],2],["ar","Arabic",[0,1,2,3,11,100],5],["arn","Mapudungun",[1,2],1],["ast","Asturian",[1,2],2],["ay","Aymará",[1],3],["az","Azerbaijani",[1,2],2],["be","Belarusian",[1,2,5],4],["bg","Bulgarian",[1,2],2],["bn","Bengali",[1,2],2],["bo","Tibetan",[1],3],["br","Breton",[1,2],1],["bs","Bosnian",[1,2,5],4],["ca","Catalan",[1,2],2],["cgg","Chiga",[1],3],["cs","Czech",[1,2,5],6],["csb","Kashubian",[1,2,5],7],["cy","Welsh",[1,2,3,8],8],["da","Danish",[1,2],2],["de","German",[1,2],2],["dev","Development Fallback",[1,2],2],["dz","Dzongkha",[1],3],["el","Greek",[1,2],2],["en","English",[1,2],2],["eo","Esperanto",[1,2],2],["es","Spanish",[1,2],2],["es_ar","Argentinean Spanish",[1,2],2],["et","Estonian",[1,2],2],["eu","Basque",[1,2],2],["fa","Persian",[1],3],["fi","Finnish",[1,2],2],["fil","Filipino",[1,2],1],["fo","Faroese",[1,2],2],["fr","French",[1,2],9],["fur","Friulian",[1,2],2],["fy","Frisian",[1,2],2],["ga","Irish",[1,2,3,7,11],10],["gd","Scottish Gaelic",[1,2,3,20],11],["gl","Galician",[1,2],2],["gu","Gujarati",[1,2],2],["gun","Gun",[1,2],1],["ha","Hausa",[1,2],2],["he","Hebrew",[1,2],2],["hi","Hindi",[1,2],2],["hr","Croatian",[1,2,5],4],["hu","Hungarian",[1,2],2],["hy","Armenian",[1,2],2],["ia","Interlingua",[1,2],2],["id","Indonesian",[1],3],["is","Icelandic",[1,2],12],["it","Italian",[1,2],2],["ja","Japanese",[1],3],["jbo","Lojban",[1],3],["jv","Javanese",[0,1],13],["ka","Georgian",[1],3],["kk","Kazakh",[1],3],["km","Khmer",[1],3],["kn","Kannada",[1,2],2],["ko","Korean",[1],3],["ku","Kurdish",[1,2],2],["kw","Cornish",[1,2,3,4],14],["ky","Kyrgyz",[1],3],["lb","Letzeburgesch",[1,2],2],["ln","Lingala",[1,2],1],["lo","Lao",[1],3],["lt","Lithuanian",[1,2,10],15],["lv","Latvian",[1,2,0],16],["mai","Maithili",[1,2],2],["mfe","Mauritian Creole",[1,2],1],["mg","Malagasy",[1,2],1],["mi","Maori",[1,2],1],["mk","Macedonian",[1,2],17],["ml","Malayalam",[1,2],2],["mn","Mongolian",[1,2],2],["mnk","Mandinka",[0,1,2],18],["mr","Marathi",[1,2],2],["ms","Malay",[1],3],["mt","Maltese",[1,2,11,20],19],["nah","Nahuatl",[1,2],2],["nap","Neapolitan",[1,2],2],["nb","Norwegian Bokmal",[1,2],2],["ne","Nepali",[1,2],2],["nl","Dutch",[1,2],2],["nn","Norwegian Nynorsk",[1,2],2],["no","Norwegian",[1,2],2],["nso","Northern Sotho",[1,2],2],["oc","Occitan",[1,2],1],["or","Oriya",[2,1],2],["pa","Punjabi",[1,2],2],["pap","Papiamento",[1,2],2],["pl","Polish",[1,2,5],7],["pms","Piemontese",[1,2],2],["ps","Pashto",[1,2],2],["pt","Portuguese",[1,2],2],["pt_br","Brazilian Portuguese",[1,2],2],["rm","Romansh",[1,2],2],["ro","Romanian",[1,2,20],20],["ru","Russian",[1,2,5],4],["sah","Yakut",[1],3],["sco","Scots",[1,2],2],["se","Northern Sami",[1,2],2],["si","Sinhala",[1,2],2],["sk","Slovak",[1,2,5],6],["sl","Slovenian",[5,1,2,3],21],["so","Somali",[1,2],2],["son","Songhay",[1,2],2],["sq","Albanian",[1,2],2],["sr","Serbian",[1,2,5],4],["su","Sundanese",[1],3],["sv","Swedish",[1,2],2],["sw","Swahili",[1,2],2],["ta","Tamil",[1,2],2],["te","Telugu",[1,2],2],["tg","Tajik",[1,2],1],["th","Thai",[1],3],["ti","Tigrinya",[1,2],1],["tk","Turkmen",[1,2],2],["tr","Turkish",[1,2],1],["tt","Tatar",[1],3],["ug","Uyghur",[1],3],["uk","Ukrainian",[1,2,5],4],["ur","Urdu",[1,2],2],["uz","Uzbek",[1,2],1],["vi","Vietnamese",[1],3],["wa","Walloon",[1,2],1],["wo","Wolof",[1],3],["yo","Yoruba",[1,2],2],["zh","Chinese",[1],3]],Y={1:function(e){return Number(e>1)},2:function(e){return Number(1!=e)},3:function(){return 0},4:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&4>=e%10&&(10>e%100||e%100>=20)?1:2)},5:function(e){return Number(0===e?0:1==e?1:2==e?2:e%100>=3&&10>=e%100?3:e%100>=11?4:5)},6:function(e){return Number(1==e?0:e>=2&&4>=e?1:2)},7:function(e){return Number(1==e?0:e%10>=2&&4>=e%10&&(10>e%100||e%100>=20)?1:2)},8:function(e){return Number(1==e?0:2==e?1:8!=e&&11!=e?2:3)},9:function(e){return Number(e>=2)},10:function(e){return Number(1==e?0:2==e?1:7>e?2:11>e?3:4)},11:function(e){return Number(1==e||11==e?0:2==e||12==e?1:e>2&&20>e?2:3)},12:function(e){return Number(e%10!=1||e%100==11)},13:function(e){return Number(0!==e)},14:function(e){return Number(1==e?0:2==e?1:3==e?2:3)},15:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(10>e%100||e%100>=20)?1:2)},16:function(e){return Number(e%10==1&&e%100!=11?0:0!==e?1:2)},17:function(e){return Number(1==e||e%10==1?0:1)},18:function(e){return Number(0==e?0:1==e?1:2)},19:function(e){return Number(1==e?0:0===e||e%100>1&&11>e%100?1:e%100>10&&20>e%100?2:3)},20:function(e){return Number(1==e?0:0===e||e%100>0&&20>e%100?1:2)},21:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)}},Z={rules:function(){var e,n={}
for(e=Q.length;e--;)n[Q[e][0]]={name:Q[e][1],numbers:Q[e][2],plurals:Y[Q[e][3]]}
return n}(),addRule:function(e,n){Z.rules[e]=n},setCurrentLng:function(e){if(!Z.currentRule||Z.currentRule.lng!==e){var n=e.split("-")
Z.currentRule={lng:e,rule:Z.rules[n[0]]}}},needsPlural:function(e,n){var t,r=e.split("-")
return!((t=Z.currentRule&&Z.currentRule.lng===e?Z.currentRule.rule:Z.rules[r[W.getCountyIndexOfLng(e)]])&&t.numbers.length<=1)&&1!==this.get(e,n)},get:function(e,n){var t=e.split("-")
return function(n,t){var r
if(r=Z.currentRule&&Z.currentRule.lng===e?Z.currentRule.rule:Z.rules[n]){var a
a=r.plurals(r.noAbs?t:Math.abs(t))
var o=r.numbers[a]
return 2===r.numbers.length&&1===r.numbers[0]&&(2===o?o=-1:1===o&&(o=1)),o}return 1===t?"1":"-1"}(t[W.getCountyIndexOfLng(e)],n)}},ee={},ne=function(e,n){ee[e]=n},te=function(){function e(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function n(e,n){for(var t=[];n>0;t[--n]=e);return t.join("")}var t=function(){return t.cache.hasOwnProperty(arguments[0])||(t.cache[arguments[0]]=t.parse(arguments[0])),t.format.call(null,t.cache[arguments[0]],arguments)}
return t.format=function(t,r){var a,o,i,s,u,l,f,c=1,p=t.length,d="",g=[]
for(o=0;p>o;o++)if("string"===(d=e(t[o])))g.push(t[o])
else if("array"===d){if(s=t[o],s[2])for(a=r[c],i=0;i<s[2].length;i++){if(!a.hasOwnProperty(s[2][i]))throw te('[sprintf] property "%s" does not exist',s[2][i])
a=a[s[2][i]]}else a=s[1]?r[s[1]]:r[c++]
if(/[^s]/.test(s[8])&&"number"!=e(a))throw te("[sprintf] expecting number but found %s",e(a))
switch(s[8]){case"b":a=a.toString(2)
break
case"c":a=String.fromCharCode(a)
break
case"d":a=parseInt(a,10)
break
case"e":a=s[7]?a.toExponential(s[7]):a.toExponential()
break
case"f":a=s[7]?parseFloat(a).toFixed(s[7]):parseFloat(a)
break
case"o":a=a.toString(8)
break
case"s":a=(a=String(a))&&s[7]?a.substring(0,s[7]):a
break
case"u":a=Math.abs(a)
break
case"x":a=a.toString(16)
break
case"X":a=a.toString(16).toUpperCase()}a=/[def]/.test(s[8])&&s[3]&&a>=0?"+"+a:a,l=s[4]?"0"==s[4]?"0":s[4].charAt(1):" ",f=s[6]-String(a).length,u=s[6]?n(l,f):"",g.push(s[5]?a+u:u+a)}return g.join("")},t.cache={},t.parse=function(e){for(var n=e,t=[],r=[],a=0;n;){if(null!==(t=/^[^\x25]+/.exec(n)))r.push(t[0])
else if(null!==(t=/^\x25{2}/.exec(n)))r.push("%")
else{if(null===(t=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(n)))throw"[sprintf] huh?"
if(t[2]){a|=1
var o=[],i=t[2],s=[]
if(null===(s=/^([a-z_][a-z_\d]*)/i.exec(i)))throw"[sprintf] huh?"
for(o.push(s[1]);""!==(i=i.substring(s[0].length));)if(null!==(s=/^\.([a-z_][a-z_\d]*)/i.exec(i)))o.push(s[1])
else{if(null===(s=/^\[(\d+)\]/.exec(i)))throw"[sprintf] huh?"
o.push(s[1])}t[2]=o}else a|=2
if(3===a)throw"[sprintf] mixing positional and named placeholders is not (yet) supported"
r.push(t)}n=n.substring(t[0].length)}return r},t}(),re=function(e,n){return n.unshift(e),te.apply(null,n)}
ne("sprintf",function(e,n,t){return t.sprintf?"[object Array]"===Object.prototype.toString.apply(t.sprintf)?re(e,t.sprintf):"object"==typeof t.sprintf?te(e,t.sprintf):e:e}),H.init=i,H.isInitialized=s,H.setLng=v,H.preload=u,H.addResourceBundle=l,H.hasResourceBundle=f,H.getResourceBundle=c,H.addResource=d,H.addResources=g,H.removeResourceBundle=p,H.loadNamespace=y,H.loadNamespaces=m,H.setDefaultNamespace=h,H.t=_,H.translate=_,H.exists=T,H.detectLanguage=W.detectLanguage,H.pluralExtensions=Z,H.sync=G,H.functions=W,H.lng=x,H.dir=b,H.addPostProcessor=ne,H.applyReplacement=W.applyReplacement,H.options=U,H.noConflict=L}("undefined"==typeof exports?window:exports)
