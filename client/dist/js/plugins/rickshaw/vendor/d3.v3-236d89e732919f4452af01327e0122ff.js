d3=function(){function n(n){return null!=n&&!isNaN(n)}function t(n){return n.length}function e(n){for(var t=1;n*t%1;)t*=10
return t}function r(n,t){try{for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}catch(e){n.prototype=t}}function i(){}function o(){}function u(n,t,e){return function(){var r=e.apply(t,arguments)
return r===t?n:r}}function a(n,t){if(t in n)return t
t=t.charAt(0).toUpperCase()+t.substring(1)
for(var e=0,r=Co.length;r>e;++e){var i=Co[e]+t
if(i in n)return i}}function c(){}function l(){}function f(n){function t(){for(var t,r=e,i=-1,o=r.length;++i<o;)(t=r[i].on)&&t.apply(this,arguments)
return n}var e=[],r=new i
return t.on=function(t,i){var o,u=r.get(t)
return arguments.length<2?u&&u.on:(u&&(u.on=null,e=e.slice(0,o=e.indexOf(u)).concat(e.slice(o+1)),r.remove(t)),i&&e.push(r.set(t,{on:i})),n)},t}function s(){mo.event.preventDefault()}function h(){for(var n,t=mo.event;n=t.sourceEvent;)t=n
return t}function g(n){for(var t=new l,e=0,r=arguments.length;++e<r;)t[arguments[e]]=f(t)
return t.of=function(e,r){return function(i){try{var o=i.sourceEvent=mo.event
i.target=n,mo.event=i,t[i.type].apply(e,r)}finally{mo.event=o}}},t}function p(n){return jo(n,Oo),n}function d(n){return"function"==typeof n?n:function(){return Lo(n,this)}}function v(n){return"function"==typeof n?n:function(){return Ho(n,this)}}function y(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function i(){this.setAttribute(n,t)}function o(){this.setAttributeNS(n.space,n.local,t)}function u(){var e=t.apply(this,arguments)
null==e?this.removeAttribute(n):this.setAttribute(n,e)}function a(){var e=t.apply(this,arguments)
null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=mo.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?a:u:n.local?o:i}function m(n){return n.trim().replace(/\s+/g," ")}function M(n){return new RegExp("(?:^|\\s+)"+mo.requote(n)+"(?:\\s+|$)","g")}function x(n,t){function e(){for(var e=-1;++e<i;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<i;)n[e](this,r)}n=n.trim().split(/\s+/).map(b)
var i=n.length
return"function"==typeof t?r:e}function b(n){var t=M(n)
return function(e,r){if(i=e.classList)return r?i.add(n):i.remove(n)
var i=e.getAttribute("class")||""
r?(t.lastIndex=0,t.test(i)||e.setAttribute("class",m(i+" "+n))):e.setAttribute("class",m(i.replace(t," ")))}}function _(n,t,e){function r(){this.style.removeProperty(n)}function i(){this.style.setProperty(n,t,e)}function o(){var r=t.apply(this,arguments)
null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?o:i}function w(n,t){function e(){delete this[n]}function r(){this[n]=t}function i(){var e=t.apply(this,arguments)
null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?i:r}function S(n){return"function"==typeof n?n:(n=mo.ns.qualify(n)).local?function(){return bo.createElementNS(n.space,n.local)}:function(){return bo.createElementNS(this.namespaceURI,n)}}function E(n){return{__data__:n}}function k(n){return function(){return Po(this,n)}}function N(n){return arguments.length||(n=mo.ascending),function(t,e){return t&&e?n(t.__data__,e.__data__):!t-!e}}function A(n,t){for(var e=0,r=n.length;r>e;e++)for(var i,o=n[e],u=0,a=o.length;a>u;u++)(i=o[u])&&t(i,u,e)
return n}function T(n){return jo(n,Yo),n}function q(n){var t,e
return function(r,i,o){var u,a=n[o].update,c=a.length
for(o!=e&&(e=o,t=0),i>=t&&(t=i+1);!(u=a[t])&&++t<c;);return u}}function z(){var n=this.__transition__
n&&++n.active}function C(n,t,e){function r(){var t=this[u]
t&&(this.removeEventListener(n,t,t.$),delete this[u])}function i(){var i=l(t,xo(arguments))
r.call(this),this.addEventListener(n,this[u]=i,i.$=e),i._=t}function o(){var t,e=new RegExp("^__on([^.]+)"+mo.requote(n)+"$")
for(var r in this)if(t=r.match(e)){var i=this[r]
this.removeEventListener(t[1],i,i.$),delete this[r]}}var u="__on"+n,a=n.indexOf("."),l=D
a>0&&(n=n.substring(0,a))
var f=Uo.get(n)
return f&&(n=f,l=j),a?t?i:r:t?c:o}function D(n,t){return function(e){var r=mo.event
mo.event=e,t[0]=this.__data__
try{n.apply(this,t)}finally{mo.event=r}}}function j(n,t){var e=D(n,t)
return function(n){var t=this,r=n.relatedTarget
r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function L(){var n=".dragsuppress-"+ ++Vo,t="touchmove"+n,e="selectstart"+n,r="dragstart"+n,i="click"+n,o=mo.select(wo).on(t,s).on(e,s).on(r,s),u=_o.style,a=u[Zo]
return u[Zo]="none",function(t){function e(){o.on(i,null)}o.on(n,null),u[Zo]=a,t&&(o.on(i,function(){s(),e()},!0),setTimeout(e,0))}}function H(n,t){t.changedTouches&&(t=t.changedTouches[0])
var e=n.ownerSVGElement||n
if(e.createSVGPoint){var r=e.createSVGPoint()
if(0>Xo&&(wo.scrollX||wo.scrollY)){e=mo.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important")
var i=e[0][0].getScreenCTM()
Xo=!(i.f||i.e),e.remove()}return Xo?(r.x=t.pageX,r.y=t.pageY):(r.x=t.clientX,r.y=t.clientY),r=r.matrixTransform(n.getScreenCTM().inverse()),[r.x,r.y]}var o=n.getBoundingClientRect()
return[t.clientX-o.left-n.clientLeft,t.clientY-o.top-n.clientTop]}function F(n){return n>0?1:0>n?-1:0}function P(n){return n>1?0:-1>n?$o:Math.acos(n)}function O(n){return n>1?Wo:-1>n?-Wo:Math.asin(n)}function R(n){return((n=Math.exp(n))-1/n)/2}function Y(n){return((n=Math.exp(n))+1/n)/2}function I(n){return((n=Math.exp(2*n))-1)/(n+1)}function U(n){return(n=Math.sin(n/2))*n}function Z(){}function V(n,t,e){return new X(n,t,e)}function X(n,t,e){this.h=n,this.s=t,this.l=e}function $(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?o+(u-o)*n/60:180>n?u:240>n?o+(u-o)*(240-n)/60:o}function i(n){return Math.round(255*r(n))}var o,u
return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,u=.5>=e?e*(1+t):e+t-e*t,o=2*e-u,an(i(n+120),i(n),i(n-120))}function B(n,t,e){return new W(n,t,e)}function W(n,t,e){this.h=n,this.c=t,this.l=e}function J(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),G(e,Math.cos(n*=Ko)*t,Math.sin(n)*t)}function G(n,t,e){return new K(n,t,e)}function K(n,t,e){this.l=n,this.a=t,this.b=e}function Q(n,t,e){var r=(n+16)/116,i=r+t/500,o=r-e/200
return i=tn(i)*cu,r=tn(r)*lu,o=tn(o)*fu,an(rn(3.2404542*i-1.5371385*r-.4985314*o),rn(-.969266*i+1.8760108*r+.041556*o),rn(.0556434*i-.2040259*r+1.0572252*o))}function nn(n,t,e){return n>0?B(Math.atan2(e,t)*Qo,Math.sqrt(t*t+e*e),n):B(NaN,NaN,n)}function tn(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function en(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function rn(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function on(n){return an(n>>16,255&n>>8,255&n)}function un(n){return on(n)+""}function an(n,t,e){return new cn(n,t,e)}function cn(n,t,e){this.r=n,this.g=t,this.b=e}function ln(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function fn(n,t,e){var r,i,o,u=0,a=0,c=0
if(r=/([a-z]+)\((.*)\)/i.exec(n))switch(i=r[2].split(","),r[1]){case"hsl":return e(parseFloat(i[0]),parseFloat(i[1])/100,parseFloat(i[2])/100)
case"rgb":return t(pn(i[0]),pn(i[1]),pn(i[2]))}return(o=gu.get(n))?t(o.r,o.g,o.b):(null!=n&&"#"===n.charAt(0)&&(4===n.length?(u=n.charAt(1),u+=u,a=n.charAt(2),a+=a,c=n.charAt(3),c+=c):7===n.length&&(u=n.substring(1,3),a=n.substring(3,5),c=n.substring(5,7)),u=parseInt(u,16),a=parseInt(a,16),c=parseInt(c,16)),t(u,a,c))}function sn(n,t,e){var r,i,o=Math.min(n/=255,t/=255,e/=255),u=Math.max(n,t,e),a=u-o,c=(u+o)/2
return a?(i=.5>c?a/(u+o):a/(2-u-o),r=n==u?(t-e)/a+(e>t?6:0):t==u?(e-n)/a+2:(n-t)/a+4,r*=60):(r=NaN,i=c>0&&1>c?0:r),V(r,i,c)}function hn(n,t,e){n=gn(n),t=gn(t),e=gn(e)
var r=en((.4124564*n+.3575761*t+.1804375*e)/cu),i=en((.2126729*n+.7151522*t+.072175*e)/lu)
return G(116*i-16,500*(r-i),200*(i-en((.0193339*n+.119192*t+.9503041*e)/fu)))}function gn(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function pn(n){var t=parseFloat(n)
return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function dn(n){return"function"==typeof n?n:function(){return n}}function vn(n){return n}function yn(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),mn(t,e,n,r)}}function mn(n,t,e,r){function i(){var n,t=c.status
if(!t&&c.responseText||t>=200&&300>t||304===t){try{n=e.call(o,c)}catch(n){return void u.error.call(o,n)}u.load.call(o,n)}else u.error.call(o,c)}var o={},u=mo.dispatch("beforesend","progress","load","error"),a={},c=new XMLHttpRequest,l=null
return!wo.XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(n)||(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=i:c.onreadystatechange=function(){c.readyState>3&&i()},c.onprogress=function(n){var t=mo.event
mo.event=n
try{u.progress.call(o,c)}finally{mo.event=t}},o.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",o)},o.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",o):t},o.responseType=function(n){return arguments.length?(l=n,o):l},o.response=function(n){return e=n,o},["get","post"].forEach(function(n){o[n]=function(){return o.send.apply(o,[n].concat(xo(arguments)))}}),o.send=function(e,r,i){if(2===arguments.length&&"function"==typeof r&&(i=r,r=null),c.open(e,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),c.setRequestHeader)for(var f in a)c.setRequestHeader(f,a[f])
return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=l&&(c.responseType=l),null!=i&&o.on("error",i).on("load",function(n){i(null,n)}),u.beforesend.call(o,c),c.send(null==r?null:r),o},o.abort=function(){return c.abort(),o},mo.rebind(o,u,"on"),null==r?o:o.get(Mn(r))}function Mn(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function xn(){var n=_n(),t=wn()-n
t>24?(isFinite(t)&&(clearTimeout(yu),yu=setTimeout(xn,t)),vu=0):(vu=1,Mu(xn))}function bn(n,t,e){var r=arguments.length
2>r&&(t=0),3>r&&(e=Date.now()),mu.callback=n,mu.time=e+t}function _n(){var n=Date.now()
for(mu=pu;mu;)n>=mu.time&&(mu.flush=mu.callback(n-mu.time)),mu=mu.next
return n}function wn(){for(var n,t=pu,e=1/0;t;)t.flush?t=n?n.next=t.next:pu=t.next:(t.time<e&&(e=t.time),t=(n=t).next)
return du=n,e}function Sn(n,t){var e=Math.pow(10,3*Math.abs(8-t))
return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function En(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function kn(n){return n+""}function Nn(){}function An(n,t,e){var r=e.s=n+t,i=r-n,o=r-i
e.t=n-o+(t-i)}function Tn(n,t){n&&Au.hasOwnProperty(n.type)&&Au[n.type](n,t)}function qn(n,t,e){var r,i=-1,o=n.length-e
for(t.lineStart();++i<o;)r=n[i],t.point(r[0],r[1],r[2])
t.lineEnd()}function zn(n,t){var e=-1,r=n.length
for(t.polygonStart();++e<r;)qn(n[e],t,1)
t.polygonEnd()}function Cn(){function n(n,t){n*=Ko,t=t*Ko/2+$o/4
var e=n-r,u=Math.cos(t),a=Math.sin(t),c=o*a,l=i*u+c*Math.cos(e),f=c*Math.sin(e)
qu.add(Math.atan2(f,l)),r=n,i=u,o=a}var t,e,r,i,o
zu.point=function(u,a){zu.point=n,r=(t=u)*Ko,i=Math.cos(a=(e=a)*Ko/2+$o/4),o=Math.sin(a)},zu.lineEnd=function(){n(t,e)}}function Dn(n){var t=n[0],e=n[1],r=Math.cos(e)
return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function jn(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function Ln(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Hn(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function Fn(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function Pn(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2])
n[0]/=t,n[1]/=t,n[2]/=t}function On(n){return[Math.atan2(n[1],n[0]),O(n[2])]}function Rn(n,t){return Math.abs(n[0]-t[0])<Jo&&Math.abs(n[1]-t[1])<Jo}function Yn(n,t){n*=Ko
var e=Math.cos(t*=Ko)
In(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function In(n,t,e){++Cu,ju+=(n-ju)/Cu,Lu+=(t-Lu)/Cu,Hu+=(e-Hu)/Cu}function Un(){function n(n,i){n*=Ko
var o=Math.cos(i*=Ko),u=o*Math.cos(n),a=o*Math.sin(n),c=Math.sin(i),l=Math.atan2(Math.sqrt((l=e*c-r*a)*l+(l=r*u-t*c)*l+(l=t*a-e*u)*l),t*u+e*a+r*c)
Du+=l,Fu+=l*(t+(t=u)),Pu+=l*(e+(e=a)),Ou+=l*(r+(r=c)),In(t,e,r)}var t,e,r
Uu.point=function(i,o){i*=Ko
var u=Math.cos(o*=Ko)
t=u*Math.cos(i),e=u*Math.sin(i),r=Math.sin(o),Uu.point=n,In(t,e,r)}}function Zn(){Uu.point=Yn}function Vn(){function n(n,t){n*=Ko
var e=Math.cos(t*=Ko),u=e*Math.cos(n),a=e*Math.sin(n),c=Math.sin(t),l=i*c-o*a,f=o*u-r*c,s=r*a-i*u,h=Math.sqrt(l*l+f*f+s*s),g=r*u+i*a+o*c,p=h&&-P(g)/h,d=Math.atan2(h,g)
Ru+=p*l,Yu+=p*f,Iu+=p*s,Du+=d,Fu+=d*(r+(r=u)),Pu+=d*(i+(i=a)),Ou+=d*(o+(o=c)),In(r,i,o)}var t,e,r,i,o
Uu.point=function(u,a){t=u,e=a,Uu.point=n,u*=Ko
var c=Math.cos(a*=Ko)
r=c*Math.cos(u),i=c*Math.sin(u),o=Math.sin(a),In(r,i,o)},Uu.lineEnd=function(){n(t,e),Uu.lineEnd=Zn,Uu.point=Yn}}function Xn(){return!0}function $n(n,t,e,r,i){var o=[],u=[]
if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t]
if(Rn(e,r)){i.lineStart()
for(var a=0;t>a;++a)i.point((e=n[a])[0],e[1])
return void i.lineEnd()}var c={point:e,points:n,other:null,visited:!1,entry:!0,subject:!0},l={point:e,points:[e],other:c,visited:!1,entry:!1,subject:!1}
c.other=l,o.push(c),u.push(l),c={point:r,points:[r],other:null,visited:!1,entry:!1,subject:!0},l={point:r,points:[r],other:c,visited:!1,entry:!0,subject:!1},c.other=l,o.push(c),u.push(l)}}),u.sort(t),Bn(o),Bn(u),o.length){for(var a=0,c=e,l=u.length;l>a;++a)u[a].entry=c=!c
for(var f,s,h,g=o[0];;){for(f=g;f.visited;)if((f=f.next)===g)return
s=f.points,i.lineStart()
do{if(f.visited=f.other.visited=!0,f.entry){if(f.subject)for(var a=0;a<s.length;a++)i.point((h=s[a])[0],h[1])
else r(f.point,f.next.point,1,i)
f=f.next}else{if(f.subject){s=f.prev.points
for(var a=s.length;--a>=0;)i.point((h=s[a])[0],h[1])}else r(f.point,f.prev.point,-1,i)
f=f.prev}f=f.other,s=f.points}while(!f.visited)
i.lineEnd()}}}function Bn(n){if(t=n.length){for(var t,e,r=0,i=n[0];++r<t;)i.next=e=n[r],e.prev=i,i=e
i.next=e=n[0],e.prev=i}}function Wn(n,t,e,r){return function(i,o){function u(t,e){var r=i(t,e)
n(t=r[0],e=r[1])&&o.point(t,e)}function a(n,t){var e=i(n,t)
v.point(e[0],e[1])}function c(){m.point=a,v.lineStart()}function l(){m.point=u,v.lineEnd()}function f(n,t){d.push([n,t])
var e=i(n,t)
x.point(e[0],e[1])}function s(){x.lineStart(),d=[]}function h(){f(d[0][0],d[0][1]),x.lineEnd()
var n,t=x.clean(),e=M.buffer(),r=e.length
if(d.pop(),p.push(d),d=null,r){if(1&t){n=e[0]
var i,r=n.length-1,u=-1
for(o.lineStart();++u<r;)o.point((i=n[u])[0],i[1])
return void o.lineEnd()}r>1&&2&t&&e.push(e.pop().concat(e.shift())),g.push(e.filter(Jn))}}var g,p,d,v=t(o),y=i.invert(r[0],r[1]),m={point:u,lineStart:c,lineEnd:l,polygonStart:function(){m.point=f,m.lineStart=s,m.lineEnd=h,g=[],p=[],o.polygonStart()},polygonEnd:function(){m.point=u,m.lineStart=c,m.lineEnd=l,g=mo.merge(g)
var n=Qn(y,p)
g.length?$n(g,Kn,n,e,o):n&&(o.lineStart(),e(null,null,1,o),o.lineEnd()),o.polygonEnd(),g=p=null},sphere:function(){o.polygonStart(),o.lineStart(),e(null,null,1,o),o.lineEnd(),o.polygonEnd()}},M=Gn(),x=t(M)
return m}}function Jn(n){return n.length>1}function Gn(){var n,t=[]
return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:c,buffer:function(){var e=t
return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function Kn(n,t){return((n=n.point)[0]<0?n[1]-Wo-Jo:Wo-n[1])-((t=t.point)[0]<0?t[1]-Wo-Jo:Wo-t[1])}function Qn(n,t){var e=n[0],r=n[1],i=[Math.sin(e),-Math.cos(e),0],o=0,u=0
qu.reset()
for(var a=0,c=t.length;c>a;++a){var l=t[a],f=l.length
if(f)for(var s=l[0],h=s[0],g=s[1]/2+$o/4,p=Math.sin(g),d=Math.cos(g),v=1;;){v===f&&(v=0),n=l[v]
var y=n[0],m=n[1]/2+$o/4,M=Math.sin(m),x=Math.cos(m),b=y-h,_=Math.abs(b)>$o,w=p*M
if(qu.add(Math.atan2(w*Math.sin(b),d*x+w*Math.cos(b))),o+=_?b+(b>=0?2:-2)*$o:b,_^h>=e^y>=e){var S=Ln(Dn(s),Dn(n))
Pn(S)
var E=Ln(i,S)
Pn(E)
var k=(_^b>=0?-1:1)*O(E[2]);(r>k||r===k&&(S[0]||S[1]))&&(u+=_^b>=0?1:-1)}if(!v++)break
h=y,p=M,d=x,s=n}}return(-Jo>o||Jo>o&&0>qu)^1&u}function nt(n){var t,e=NaN,r=NaN,i=NaN
return{lineStart:function(){n.lineStart(),t=1},point:function(o,u){var a=o>0?$o:-$o,c=Math.abs(o-e)
Math.abs(c-$o)<Jo?(n.point(e,r=(r+u)/2>0?Wo:-Wo),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(o,r),t=0):i!==a&&c>=$o&&(Math.abs(e-i)<Jo&&(e-=i*Jo),Math.abs(o-a)<Jo&&(o-=a*Jo),r=tt(e,r,o,u),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=o,r=u),i=a},lineEnd:function(){n.lineEnd(),e=r=NaN},clean:function(){return 2-t}}}function tt(n,t,e,r){var i,o,u=Math.sin(n-e)
return Math.abs(u)>Jo?Math.atan((Math.sin(t)*(o=Math.cos(r))*Math.sin(e)-Math.sin(r)*(i=Math.cos(t))*Math.sin(n))/(i*o*u)):(t+r)/2}function et(n,t,e,r){var i
if(null==n)i=e*Wo,r.point(-$o,i),r.point(0,i),r.point($o,i),r.point($o,0),r.point($o,-i),r.point(0,-i),r.point(-$o,-i),r.point(-$o,0),r.point(-$o,i)
else if(Math.abs(n[0]-t[0])>Jo){var o=(n[0]<t[0]?1:-1)*$o
i=e*o/2,r.point(-o,i),r.point(0,i),r.point(o,i)}else r.point(t[0],t[1])}function rt(n){function t(n,t){return Math.cos(n)*Math.cos(t)>o}function e(n){var e,o,c,l,f
return{lineStart:function(){l=c=!1,f=1},point:function(s,h){var g,p=[s,h],d=t(s,h),v=u?d?0:i(s,h):d?i(s+(0>s?$o:-$o),h):0
if(!e&&(l=c=d)&&n.lineStart(),d!==c&&(g=r(e,p),(Rn(e,g)||Rn(p,g))&&(p[0]+=Jo,p[1]+=Jo,d=t(p[0],p[1]))),d!==c)f=0,d?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g
else if(a&&e&&u^d){var y
v&o||!(y=r(p,e,!0))||(f=0,u?(n.lineStart(),n.point(y[0][0],y[0][1]),n.point(y[1][0],y[1][1]),n.lineEnd()):(n.point(y[1][0],y[1][1]),n.lineEnd(),n.lineStart(),n.point(y[0][0],y[0][1])))}!d||e&&Rn(e,p)||n.point(p[0],p[1]),e=p,c=d,o=v},lineEnd:function(){c&&n.lineEnd(),e=null},clean:function(){return f|(l&&c)<<1}}}function r(n,t,e){var r=Dn(n),i=Dn(t),u=[1,0,0],a=Ln(r,i),c=jn(a,a),l=a[0],f=c-l*l
if(!f)return!e&&n
var s=o*c/f,h=-o*l/f,g=Ln(u,a),p=Fn(u,s)
Hn(p,Fn(a,h))
var d=g,v=jn(p,d),y=jn(d,d),m=v*v-y*(jn(p,p)-1)
if(!(0>m)){var M=Math.sqrt(m),x=Fn(d,(-v-M)/y)
if(Hn(x,p),x=On(x),!e)return x
var b,_=n[0],w=t[0],S=n[1],E=t[1]
_>w&&(b=_,_=w,w=b)
var k=w-_,N=Math.abs(k-$o)<Jo,A=N||Jo>k
if(!N&&S>E&&(b=S,S=E,E=b),A?N?S+E>0^x[1]<(Math.abs(x[0]-_)<Jo?S:E):S<=x[1]&&x[1]<=E:k>$o^(_<=x[0]&&x[0]<=w)){var T=Fn(d,(-v+M)/y)
return Hn(T,p),[x,On(T)]}}}function i(t,e){var r=u?n:$o-n,i=0
return-r>t?i|=1:t>r&&(i|=2),-r>e?i|=4:e>r&&(i|=8),i}var o=Math.cos(n),u=o>0,a=Math.abs(o)>Jo
return Wn(t,e,qt(n,6*Ko),u?[0,-n]:[-$o,n-$o])}function it(n,t,e,r){function i(r,i){return Math.abs(r[0]-n)<Jo?i>0?0:3:Math.abs(r[0]-e)<Jo?i>0?2:1:Math.abs(r[1]-t)<Jo?i>0?1:0:i>0?3:2}function o(n,t){return u(n.point,t.point)}function u(n,t){var e=i(n,1),r=i(t,1)
return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}function a(i,o){var u=o[0]-i[0],a=o[1]-i[1],c=[0,1]
return Math.abs(u)<Jo&&Math.abs(a)<Jo?n<=i[0]&&i[0]<=e&&t<=i[1]&&i[1]<=r:!!(ot(n-i[0],u,c)&&ot(i[0]-e,-u,c)&&ot(t-i[1],a,c)&&ot(i[1]-r,-a,c))&&(c[1]<1&&(o[0]=i[0]+c[1]*u,o[1]=i[1]+c[1]*a),c[0]>0&&(i[0]+=c[0]*u,i[1]+=c[0]*a),!0)}return function(c){function l(n){for(var t=0,e=m.length,r=n[1],i=0;e>i;++i)for(var o,u=1,a=m[i],c=a.length,l=a[0];c>u;++u)o=a[u],l[1]<=r?o[1]>r&&f(l,o,n)>0&&++t:o[1]<=r&&f(l,o,n)<0&&--t,l=o
return 0!==t}function f(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(e[0]-n[0])*(t[1]-n[1])}function s(o,a,c,l){var f=0,s=0
if(null==o||(f=i(o,c))!==(s=i(a,c))||u(o,a)<0^c>0)do{l.point(0===f||3===f?n:e,f>1?r:t)}while((f=(f+c+4)%4)!==s)
else l.point(a[0],a[1])}function h(i,o){return i>=n&&e>=i&&o>=t&&r>=o}function g(n,t){h(n,t)&&c.point(n,t)}function p(){q.point=v,m&&m.push(M=[]),k=!0,E=!1,w=S=NaN}function d(){y&&(v(x,b),_&&E&&T.rejoin(),y.push(T.buffer())),q.point=g,E&&c.lineEnd()}function v(n,t){n=Math.max(-Vu,Math.min(Vu,n)),t=Math.max(-Vu,Math.min(Vu,t))
var e=h(n,t)
if(m&&M.push([n,t]),k)x=n,b=t,_=e,k=!1,e&&(c.lineStart(),c.point(n,t))
else if(e&&E)c.point(n,t)
else{var r=[w,S],i=[n,t]
a(r,i)?(E||(c.lineStart(),c.point(r[0],r[1])),c.point(i[0],i[1]),e||c.lineEnd(),N=!1):e&&(c.lineStart(),c.point(n,t),N=!1)}w=n,S=t,E=e}var y,m,M,x,b,_,w,S,E,k,N,A=c,T=Gn(),q={point:g,lineStart:p,lineEnd:d,polygonStart:function(){c=T,y=[],m=[],N=!0},polygonEnd:function(){c=A,y=mo.merge(y)
var t=l([n,r]),e=N&&t,i=y.length;(e||i)&&(c.polygonStart(),e&&(c.lineStart(),s(null,null,1,c),c.lineEnd()),i&&$n(y,o,t,s,c),c.polygonEnd()),y=m=M=null}}
return q}}function ot(n,t,e){if(Math.abs(t)<Jo)return 0>=n
var r=n/t
if(t>0){if(r>e[1])return!1
r>e[0]&&(e[0]=r)}else{if(r<e[0])return!1
r<e[1]&&(e[1]=r)}return!0}function ut(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return(e=t.invert(e,r))&&n.invert(e[0],e[1])}),e}function at(n){var t=0,e=$o/3,r=_t(n),i=r(t,e)
return i.parallels=function(n){return arguments.length?r(t=n[0]*$o/180,e=n[1]*$o/180):[t/$o*180,e/$o*180]},i}function ct(n,t){function e(n,t){var e=Math.sqrt(o-2*i*Math.sin(t))/i
return[e*Math.sin(n*=i),u-e*Math.cos(n)]}var r=Math.sin(n),i=(r+Math.sin(t))/2,o=1+r*(2*i-r),u=Math.sqrt(o)/i
return e.invert=function(n,t){var e=u-t
return[Math.atan2(n,e)/i,O((o-(n*n+e*e)*i*i)/(2*i))]},e}function lt(){function n(n,t){$u+=i*n-r*t,r=n,i=t}var t,e,r,i
Ku.point=function(o,u){Ku.point=n,t=r=o,e=i=u},Ku.lineEnd=function(){n(t,e)}}function ft(n,t){Bu>n&&(Bu=n),n>Ju&&(Ju=n),Wu>t&&(Wu=t),t>Gu&&(Gu=t)}function st(){function n(n,t){u.push("M",n,",",t,o)}function t(n,t){u.push("M",n,",",t),a.point=e}function e(n,t){u.push("L",n,",",t)}function r(){a.point=n}function i(){u.push("Z")}var o=ht(4.5),u=[],a={point:n,lineStart:function(){a.point=t},lineEnd:r,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=r,a.point=n},pointRadius:function(n){return o=ht(n),a},result:function(){if(u.length){var n=u.join("")
return u=[],n}}}
return a}function ht(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function gt(n,t){ju+=n,Lu+=t,++Hu}function pt(){function n(n,r){var i=n-t,o=r-e,u=Math.sqrt(i*i+o*o)
Fu+=u*(t+n)/2,Pu+=u*(e+r)/2,Ou+=u,gt(t=n,e=r)}var t,e
na.point=function(r,i){na.point=n,gt(t=r,e=i)}}function dt(){na.point=gt}function vt(){function n(n,t){var e=n-r,o=t-i,u=Math.sqrt(e*e+o*o)
Fu+=u*(r+n)/2,Pu+=u*(i+t)/2,Ou+=u,u=i*n-r*t,Ru+=u*(r+n),Yu+=u*(i+t),Iu+=3*u,gt(r=n,i=t)}var t,e,r,i
na.point=function(o,u){na.point=n,gt(t=r=o,e=i=u)},na.lineEnd=function(){n(t,e)}}function yt(n){function t(t,e){n.moveTo(t,e),n.arc(t,e,u,0,Bo)}function e(t,e){n.moveTo(t,e),a.point=r}function r(t,e){n.lineTo(t,e)}function i(){a.point=t}function o(){n.closePath()}var u=4.5,a={point:t,lineStart:function(){a.point=e},lineEnd:i,polygonStart:function(){a.lineEnd=o},polygonEnd:function(){a.lineEnd=i,a.point=t},pointRadius:function(n){return u=n,a},result:c}
return a}function mt(n){function t(t){function r(e,r){e=n(e,r),t.point(e[0],e[1])}function i(){M=NaN,S.point=u,t.lineStart()}function u(r,i){var u=Dn([r,i]),a=n(r,i)
e(M,x,m,b,_,w,M=a[0],x=a[1],m=r,b=u[0],_=u[1],w=u[2],o,t),t.point(M,x)}function a(){S.point=r,t.lineEnd()}function c(){i(),S.point=l,S.lineEnd=f}function l(n,t){u(s=n,h=t),g=M,p=x,d=b,v=_,y=w,S.point=u}function f(){e(M,x,m,b,_,w,g,p,s,d,v,y,o,t),S.lineEnd=a,a()}var s,h,g,p,d,v,y,m,M,x,b,_,w,S={point:r,lineStart:i,lineEnd:a,polygonStart:function(){t.polygonStart(),S.lineStart=c},polygonEnd:function(){t.polygonEnd(),S.lineStart=i}}
return S}function e(t,o,u,a,c,l,f,s,h,g,p,d,v,y){var m=f-t,M=s-o,x=m*m+M*M
if(x>4*r&&v--){var b=a+g,_=c+p,w=l+d,S=Math.sqrt(b*b+_*_+w*w),E=Math.asin(w/=S),k=Math.abs(Math.abs(w)-1)<Jo?(u+h)/2:Math.atan2(_,b),N=n(k,E),A=N[0],T=N[1],q=A-t,z=T-o,C=M*q-m*z;(C*C/x>r||Math.abs((m*q+M*z)/x-.5)>.3||i>a*g+c*p+l*d)&&(e(t,o,u,a,c,l,A,T,k,b/=S,_/=S,w,v,y),y.point(A,T),e(A,T,k,b,_,w,f,s,h,g,p,d,v,y))}}var r=.5,i=Math.cos(30*Ko),o=16
return t.precision=function(n){return arguments.length?(o=(r=n*n)>0&&16,t):Math.sqrt(r)},t}function Mt(n){this.stream=n}function xt(n){var t=mt(function(t,e){return n([t*Qo,e*Qo])})
return function(n){var e=new Mt(n=t(n))
return e.point=function(t,e){n.point(t*Ko,e*Ko)},e}}function bt(n){return _t(function(){return n})()}function _t(n){function t(n){return n=a(n[0]*Ko,n[1]*Ko),[n[0]*h+c,l-n[1]*h]}function e(n){return(n=a.invert((n[0]-c)/h,(l-n[1])/h))&&[n[0]*Qo,n[1]*Qo]}function r(){a=ut(u=kt(y,m,M),o)
var n=o(d,v)
return c=g-n[0]*h,l=p+n[1]*h,i()}function i(){return f&&(f.valid=!1,f=null),t}var o,u,a,c,l,f,s=mt(function(n,t){return n=o(n,t),[n[0]*h+c,l-n[1]*h]}),h=150,g=480,p=250,d=0,v=0,y=0,m=0,M=0,x=Zu,b=vn,_=null,w=null
return t.stream=function(n){return f&&(f.valid=!1),f=wt(x(u,s(b(n)))),f.valid=!0,f},t.clipAngle=function(n){return arguments.length?(x=null==n?(_=n,Zu):rt((_=+n)*Ko),i()):_},t.clipExtent=function(n){return arguments.length?(w=n,b=n?it(n[0][0],n[0][1],n[1][0],n[1][1]):vn,i()):w},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],r()):[g,p]},t.center=function(n){return arguments.length?(d=n[0]%360*Ko,v=n[1]%360*Ko,r()):[d*Qo,v*Qo]},t.rotate=function(n){return arguments.length?(y=n[0]%360*Ko,m=n[1]%360*Ko,M=n.length>2?n[2]%360*Ko:0,r()):[y*Qo,m*Qo,M*Qo]},mo.rebind(t,s,"precision"),function(){return o=n.apply(this,arguments),t.invert=o.invert&&e,r()}}function wt(n){var t=new Mt(n)
return t.point=function(t,e){n.point(t*Ko,e*Ko)},t}function St(n,t){return[n,t]}function Et(n,t){return[n>$o?n-Bo:-$o>n?n+Bo:n,t]}function kt(n,t,e){return n?t||e?ut(At(n),Tt(t,e)):At(n):t||e?Tt(t,e):Et}function Nt(n){return function(t,e){return t+=n,[t>$o?t-Bo:-$o>t?t+Bo:t,e]}}function At(n){var t=Nt(n)
return t.invert=Nt(-n),t}function Tt(n,t){function e(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),f=l*r+a*i
return[Math.atan2(c*o-f*u,a*r-l*i),O(f*o+c*u)]}var r=Math.cos(n),i=Math.sin(n),o=Math.cos(t),u=Math.sin(t)
return e.invert=function(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),f=l*o-c*u
return[Math.atan2(c*o+l*u,a*r+f*i),O(f*r-a*i)]},e}function qt(n,t){var e=Math.cos(n),r=Math.sin(n)
return function(i,o,u,a){var c=u*t
null!=i?(i=zt(e,i),o=zt(e,o),(u>0?o>i:i>o)&&(i+=u*Bo)):(i=n+u*Bo,o=n-.5*c)
for(var l,f=i;u>0?f>o:o>f;f-=c)a.point((l=On([e,-r*Math.cos(f),-r*Math.sin(f)]))[0],l[1])}}function zt(n,t){var e=Dn(t)
e[0]-=n,Pn(e)
var r=P(-e[1])
return((-e[2]<0?-r:r)+2*Math.PI-Jo)%(2*Math.PI)}function Ct(n,t,e){var r=mo.range(n,t-Jo,e).concat(t)
return function(n){return r.map(function(t){return[n,t]})}}function Dt(n,t,e){var r=mo.range(n,t-Jo,e).concat(t)
return function(n){return r.map(function(t){return[t,n]})}}function jt(n){return n.source}function Lt(n){return n.target}function Ht(n,t,e,r){var i=Math.cos(t),o=Math.sin(t),u=Math.cos(r),a=Math.sin(r),c=i*Math.cos(n),l=i*Math.sin(n),f=u*Math.cos(e),s=u*Math.sin(e),h=2*Math.asin(Math.sqrt(U(r-t)+i*u*U(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*c+t*f,i=e*l+t*s,u=e*o+t*a
return[Math.atan2(i,r)*Qo,Math.atan2(u,Math.sqrt(r*r+i*i))*Qo]}:function(){return[n*Qo,t*Qo]}
return p.distance=h,p}function Ft(){function n(n,i){var o=Math.sin(i*=Ko),u=Math.cos(i),a=Math.abs((n*=Ko)-t),c=Math.cos(a)
ta+=Math.atan2(Math.sqrt((a=u*Math.sin(a))*a+(a=r*o-e*u*c)*a),e*o+r*u*c),t=n,e=o,r=u}var t,e,r
ea.point=function(i,o){t=i*Ko,e=Math.sin(o*=Ko),r=Math.cos(o),ea.point=n},ea.lineEnd=function(){ea.point=ea.lineEnd=c}}function Pt(n,t){function e(t,e){var r=Math.cos(t),i=Math.cos(e),o=n(r*i)
return[o*i*Math.sin(t),o*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),i=t(r),o=Math.sin(i),u=Math.cos(i)
return[Math.atan2(n*o,r*u),Math.asin(r&&e*o/r)]},e}function Ot(n,t){function e(n,t){var e=Math.abs(Math.abs(t)-Wo)<Jo?0:u/Math.pow(i(t),o)
return[e*Math.sin(o*n),u-e*Math.cos(o*n)]}var r=Math.cos(n),i=function(n){return Math.tan($o/4+n/2)},o=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(i(t)/i(n)),u=r*Math.pow(i(n),o)/o
return o?(e.invert=function(n,t){var e=u-t,r=F(o)*Math.sqrt(n*n+e*e)
return[Math.atan2(n,e)/o,2*Math.atan(Math.pow(u/r,1/o))-Wo]},e):Yt}function Rt(n,t){function e(n,t){var e=o-t
return[e*Math.sin(i*n),o-e*Math.cos(i*n)]}var r=Math.cos(n),i=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),o=r/i+n
return Math.abs(i)<Jo?St:(e.invert=function(n,t){var e=o-t
return[Math.atan2(n,e)/i,o-F(i)*Math.sqrt(n*n+e*e)]},e)}function Yt(n,t){return[n,Math.log(Math.tan($o/4+t/2))]}function It(n){var t,e=bt(n),r=e.scale,i=e.translate,o=e.clipExtent
return e.scale=function(){var n=r.apply(e,arguments)
return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=i.apply(e,arguments)
return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var u=o.apply(e,arguments)
if(u===e){if(t=null==n){var a=$o*r(),c=i()
o([[c[0]-a,c[1]-a],[c[0]+a,c[1]+a]])}}else t&&(u=null)
return u},e.clipExtent(null)}function Ut(n,t){var e=Math.cos(t)*Math.sin(n)
return[Math.log((1+e)/(1-e))/2,Math.atan2(Math.tan(t),Math.cos(n))]}function Zt(n){function t(t){function u(){l.push("M",o(n(f),a))}for(var c,l=[],f=[],s=-1,h=t.length,g=dn(e),p=dn(r);++s<h;)i.call(this,c=t[s],s)?f.push([+g.call(this,c,s),+p.call(this,c,s)]):f.length&&(u(),f=[])
return f.length&&u(),l.length?l.join(""):null}var e=Vt,r=Xt,i=Xn,o=$t,u=o.key,a=.7
return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(i=n,t):i},t.interpolate=function(n){return arguments.length?(u="function"==typeof n?o=n:(o=ca.get(n)||$t).key,t):u},t.tension=function(n){return arguments.length?(a=n,t):a},t}function Vt(n){return n[0]}function Xt(n){return n[1]}function $t(n){return n.join("L")}function Bt(n){return $t(n)+"Z"}function Wt(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1])
return e>1&&i.push("H",r[0]),i.join("")}function Jt(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("V",(r=n[t])[1],"H",r[0])
return i.join("")}function Gt(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("H",(r=n[t])[0],"V",r[1])
return i.join("")}function Kt(n,t){return n.length<4?$t(n):n[1]+te(n.slice(1,n.length-1),ee(n,t))}function Qt(n,t){return n.length<3?$t(n):n[0]+te((n.push(n[0]),n),ee([n[n.length-2]].concat(n,[n[1]]),t))}function ne(n,t){return n.length<3?$t(n):n[0]+te(n,ee(n,t))}function te(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return $t(n)
var e=n.length!=t.length,r="",i=n[0],o=n[1],u=t[0],a=u,c=1
if(e&&(r+="Q"+(o[0]-2*u[0]/3)+","+(o[1]-2*u[1]/3)+","+o[0]+","+o[1],i=n[1],c=2),t.length>1){a=t[1],o=n[c],c++,r+="C"+(i[0]+u[0])+","+(i[1]+u[1])+","+(o[0]-a[0])+","+(o[1]-a[1])+","+o[0]+","+o[1]
for(var l=2;l<t.length;l++,c++)o=n[c],a=t[l],r+="S"+(o[0]-a[0])+","+(o[1]-a[1])+","+o[0]+","+o[1]}if(e){var f=n[c]
r+="Q"+(o[0]+2*a[0]/3)+","+(o[1]+2*a[1]/3)+","+f[0]+","+f[1]}return r}function ee(n,t){for(var e,r=[],i=(1-t)/2,o=n[0],u=n[1],a=1,c=n.length;++a<c;)e=o,o=u,u=n[a],r.push([i*(u[0]-e[0]),i*(u[1]-e[1])])
return r}function re(n){if(n.length<3)return $t(n)
var t=1,e=n.length,r=n[0],i=r[0],o=r[1],u=[i,i,i,(r=n[1])[0]],a=[o,o,o,r[1]],c=[i,",",o,"L",ae(sa,u),",",ae(sa,a)]
for(n.push(n[e-1]);++t<=e;)r=n[t],u.shift(),u.push(r[0]),a.shift(),a.push(r[1]),ce(c,u,a)
return n.pop(),c.push("L",r),c.join("")}function ie(n){if(n.length<4)return $t(n)
for(var t,e=[],r=-1,i=n.length,o=[0],u=[0];++r<3;)t=n[r],o.push(t[0]),u.push(t[1])
for(e.push(ae(sa,o)+","+ae(sa,u)),--r;++r<i;)t=n[r],o.shift(),o.push(t[0]),u.shift(),u.push(t[1]),ce(e,o,u)
return e.join("")}function oe(n){for(var t,e,r=-1,i=n.length,o=i+4,u=[],a=[];++r<4;)e=n[r%i],u.push(e[0]),a.push(e[1])
for(t=[ae(sa,u),",",ae(sa,a)],--r;++r<o;)e=n[r%i],u.shift(),u.push(e[0]),a.shift(),a.push(e[1]),ce(t,u,a)
return t.join("")}function ue(n,t){var e=n.length-1
if(e)for(var r,i,o=n[0][0],u=n[0][1],a=n[e][0]-o,c=n[e][1]-u,l=-1;++l<=e;)r=n[l],i=l/e,r[0]=t*r[0]+(1-t)*(o+i*a),r[1]=t*r[1]+(1-t)*(u+i*c)
return re(n)}function ae(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function ce(n,t,e){n.push("C",ae(la,t),",",ae(la,e),",",ae(fa,t),",",ae(fa,e),",",ae(sa,t),",",ae(sa,e))}function le(n,t){return(t[1]-n[1])/(t[0]-n[0])}function fe(n){for(var t=0,e=n.length-1,r=[],i=n[0],o=n[1],u=r[0]=le(i,o);++t<e;)r[t]=(u+(u=le(i=o,o=n[t+1])))/2
return r[t]=u,r}function se(n){for(var t,e,r,i,o=[],u=fe(n),a=-1,c=n.length-1;++a<c;)t=le(n[a],n[a+1]),Math.abs(t)<Jo?u[a]=u[a+1]=0:(e=u[a]/t,r=u[a+1]/t,(i=e*e+r*r)>9&&(i=3*t/Math.sqrt(i),u[a]=i*e,u[a+1]=i*r))
for(a=-1;++a<=c;)i=(n[Math.min(c,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+u[a]*u[a])),o.push([i||0,u[a]*i||0])
return o}function he(n){return n.length<3?$t(n):n[0]+te(n,se(n))}function ge(n,t,e,r){var i,o,u,a,c,l
return i=r[n],o=i[0],u=i[1],i=r[t],a=i[0],c=i[1],i=r[e],l=i[0],(i[1]-u)*(a-o)-(c-u)*(l-o)>0}function pe(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function de(n,t,e,r){var i=n[0],o=e[0],u=t[0]-i,a=r[0]-o,c=n[1],l=e[1],f=t[1]-c,s=r[1]-l,h=(a*(c-l)-s*(i-o))/(s*u-a*f)
return[i+h*u,c+h*f]}function ve(n){var t=n[0],e=n[n.length-1]
return!(t[0]-e[0]||t[1]-e[1])}function ye(n,t){var e={list:n.map(function(n,t){return{index:t,x:n[0],y:n[1]}}).sort(function(n,t){return n.y<t.y?-1:n.y>t.y?1:n.x<t.x?-1:n.x>t.x?1:0}),bottomSite:null},r={list:[],leftEnd:null,rightEnd:null,init:function(){r.leftEnd=r.createHalfEdge(null,"l"),r.rightEnd=r.createHalfEdge(null,"l"),r.leftEnd.r=r.rightEnd,r.rightEnd.l=r.leftEnd,r.list.unshift(r.leftEnd,r.rightEnd)},createHalfEdge:function(n,t){return{edge:n,side:t,vertex:null,l:null,r:null}},insert:function(n,t){t.l=n,t.r=n.r,n.r.l=t,n.r=t},leftBound:function(n){var t=r.leftEnd
do{t=t.r}while(t!=r.rightEnd&&i.rightOf(t,n))
return t=t.l},del:function(n){n.l.r=n.r,n.r.l=n.l,n.edge=null},right:function(n){return n.r},left:function(n){return n.l},leftRegion:function(n){return null==n.edge?e.bottomSite:n.edge.region[n.side]},rightRegion:function(n){return null==n.edge?e.bottomSite:n.edge.region[ga[n.side]]}},i={bisect:function(n,t){var e={region:{l:n,r:t},ep:{l:null,r:null}},r=t.x-n.x,i=t.y-n.y,o=r>0?r:-r,u=i>0?i:-i
return e.c=n.x*r+n.y*i+.5*(r*r+i*i),o>u?(e.a=1,e.b=i/r,e.c/=r):(e.b=1,e.a=r/i,e.c/=i),e},intersect:function(n,t){var e=n.edge,r=t.edge
if(!e||!r||e.region.r==r.region.r)return null
var i=e.a*r.b-e.b*r.a
if(Math.abs(i)<1e-10)return null
var o,u,a=(e.c*r.b-r.c*e.b)/i,c=(r.c*e.a-e.c*r.a)/i,l=e.region.r,f=r.region.r
l.y<f.y||l.y==f.y&&l.x<f.x?(o=n,u=e):(o=t,u=r)
var s=a>=u.region.r.x
return s&&"l"===o.side||!s&&"r"===o.side?null:{x:a,y:c}},rightOf:function(n,t){var e=n.edge,r=e.region.r,i=t.x>r.x
if(i&&"l"===n.side)return 1
if(!i&&"r"===n.side)return 0
if(1===e.a){var o=t.y-r.y,u=t.x-r.x,a=0,c=0
if(!i&&e.b<0||i&&e.b>=0?c=a=o>=e.b*u:(c=t.x+t.y*e.b>e.c,e.b<0&&(c=!c),c||(a=1)),!a){var l=r.x-e.region.l.x
c=e.b*(u*u-o*o)<l*o*(1+2*u/l+e.b*e.b),e.b<0&&(c=!c)}}else{var f=e.c-e.a*t.x,s=t.y-f,h=t.x-r.x,g=f-r.y
c=s*s>h*h+g*g}return"l"===n.side?c:!c},endPoint:function(n,e,r){n.ep[e]=r,n.ep[ga[e]]&&t(n)},distance:function(n,t){var e=n.x-t.x,r=n.y-t.y
return Math.sqrt(e*e+r*r)}},o={list:[],insert:function(n,t,e){n.vertex=t,n.ystar=t.y+e
for(var r=0,i=o.list,u=i.length;u>r;r++){var a=i[r]
if(!(n.ystar>a.ystar||n.ystar==a.ystar&&t.x>a.vertex.x))break}i.splice(r,0,n)},del:function(n){for(var t=0,e=o.list,r=e.length;r>t&&e[t]!=n;++t);e.splice(t,1)},empty:function(){return 0===o.list.length},nextEvent:function(n){for(var t=0,e=o.list,r=e.length;r>t;++t)if(e[t]==n)return e[t+1]
return null},min:function(){var n=o.list[0]
return{x:n.vertex.x,y:n.ystar}},extractMin:function(){return o.list.shift()}}
r.init(),e.bottomSite=e.list.shift()
for(var u,a,c,l,f,s,h,g,p,d,v,y,m,M=e.list.shift();;)if(o.empty()||(u=o.min()),M&&(o.empty()||M.y<u.y||M.y==u.y&&M.x<u.x))a=r.leftBound(M),c=r.right(a),h=r.rightRegion(a),y=i.bisect(h,M),s=r.createHalfEdge(y,"l"),r.insert(a,s),d=i.intersect(a,s),d&&(o.del(a),o.insert(a,d,i.distance(d,M))),a=s,s=r.createHalfEdge(y,"r"),r.insert(a,s),d=i.intersect(s,c),d&&o.insert(s,d,i.distance(d,M)),M=e.list.shift()
else{if(o.empty())break
a=o.extractMin(),l=r.left(a),c=r.right(a),f=r.right(c),h=r.leftRegion(a),g=r.rightRegion(c),v=a.vertex,i.endPoint(a.edge,a.side,v),i.endPoint(c.edge,c.side,v),r.del(a),o.del(c),r.del(c),m="l",h.y>g.y&&(p=h,h=g,g=p,m="r"),y=i.bisect(h,g),s=r.createHalfEdge(y,m),r.insert(l,s),i.endPoint(y,ga[m],v),d=i.intersect(l,s),d&&(o.del(l),o.insert(l,d,i.distance(d,h))),(d=i.intersect(s,f))&&o.insert(s,d,i.distance(d,h))}for(a=r.right(r.leftEnd);a!=r.rightEnd;a=r.right(a))t(a.edge)}function me(n){return n.x}function Me(n){return n.y}function xe(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function be(n,t,e,r,i,o){if(!n(t,e,r,i,o)){var u=.5*(e+i),a=.5*(r+o),c=t.nodes
c[0]&&be(n,c[0],e,r,u,a),c[1]&&be(n,c[1],u,r,i,a),c[2]&&be(n,c[2],e,a,u,o),c[3]&&be(n,c[3],u,a,i,o)}}function _e(n,t){n=mo.rgb(n),t=mo.rgb(t)
var e=n.r,r=n.g,i=n.b,o=t.r-e,u=t.g-r,a=t.b-i
return function(n){return"#"+ln(Math.round(e+o*n))+ln(Math.round(r+u*n))+ln(Math.round(i+a*n))}}function we(n,t){var e,r={},i={}
for(e in n)e in t?r[e]=ke(n[e],t[e]):i[e]=n[e]
for(e in t)e in n||(i[e]=t[e])
return function(n){for(e in r)i[e]=r[e](n)
return i}}function Se(n,t){return t-=n=+n,function(e){return n+t*e}}function Ee(n,t){var e,r,i,o,u,a=0,c=[],l=[]
for(n+="",t+="",pa.lastIndex=0,r=0;e=pa.exec(t);++r)e.index&&c.push(t.substring(a,e.index)),l.push({i:c.length,x:e[0]}),c.push(null),a=pa.lastIndex
for(a<t.length&&c.push(t.substring(a)),r=0,o=l.length;(e=pa.exec(n))&&o>r;++r)if(u=l[r],u.x==e[0]){if(u.i)if(null==c[u.i+1])for(c[u.i-1]+=u.x,c.splice(u.i,1),i=r+1;o>i;++i)l[i].i--
else for(c[u.i-1]+=u.x+c[u.i+1],c.splice(u.i,2),i=r+1;o>i;++i)l[i].i-=2
else if(null==c[u.i+1])c[u.i]=u.x
else for(c[u.i]=u.x+c[u.i+1],c.splice(u.i+1,1),i=r+1;o>i;++i)l[i].i--
l.splice(r,1),o--,r--}else u.x=Se(parseFloat(e[0]),parseFloat(u.x))
for(;o>r;)u=l.pop(),null==c[u.i+1]?c[u.i]=u.x:(c[u.i]=u.x+c[u.i+1],c.splice(u.i+1,1)),o--
return 1===c.length?null==c[0]?(u=l[0].x,function(n){return u(n)+""}):function(){return t}:function(n){for(r=0;o>r;++r)c[(u=l[r]).i]=u.x(n)
return c.join("")}}function ke(n,t){for(var e,r=mo.interpolators.length;--r>=0&&!(e=mo.interpolators[r](n,t)););return e}function Ne(n,t){var e,r=[],i=[],o=n.length,u=t.length,a=Math.min(n.length,t.length)
for(e=0;a>e;++e)r.push(ke(n[e],t[e]))
for(;o>e;++e)i[e]=n[e]
for(;u>e;++e)i[e]=t[e]
return function(n){for(e=0;a>e;++e)i[e]=r[e](n)
return i}}function Ae(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function Te(n){return function(t){return 1-n(1-t)}}function qe(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function ze(n){return n*n}function Ce(n){return n*n*n}function De(n){if(0>=n)return 0
if(n>=1)return 1
var t=n*n,e=t*n
return 4*(.5>n?e:3*(n-t)+e-.75)}function je(n){return function(t){return Math.pow(t,n)}}function Le(n){return 1-Math.cos(n*Wo)}function He(n){return Math.pow(2,10*(n-1))}function Fe(n){return 1-Math.sqrt(1-n*n)}function Pe(n,t){var e
return arguments.length<2&&(t=.45),arguments.length?e=t/Bo*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*Bo/t)}}function Oe(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function Re(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Ye(n,t){n=mo.hcl(n),t=mo.hcl(t)
var e=n.h,r=n.c,i=n.l,o=t.h-e,u=t.c-r,a=t.l-i
return isNaN(u)&&(u=0,r=isNaN(r)?t.c:r),isNaN(o)?(o=0,e=isNaN(e)?t.h:e):o>180?o-=360:-180>o&&(o+=360),function(n){return J(e+o*n,r+u*n,i+a*n)+""}}function Ie(n,t){n=mo.hsl(n),t=mo.hsl(t)
var e=n.h,r=n.s,i=n.l,o=t.h-e,u=t.s-r,a=t.l-i
return isNaN(u)&&(u=0,r=isNaN(r)?t.s:r),isNaN(o)?(o=0,e=isNaN(e)?t.h:e):o>180?o-=360:-180>o&&(o+=360),function(n){return $(e+o*n,r+u*n,i+a*n)+""}}function Ue(n,t){n=mo.lab(n),t=mo.lab(t)
var e=n.l,r=n.a,i=n.b,o=t.l-e,u=t.a-r,a=t.b-i
return function(n){return Q(e+o*n,r+u*n,i+a*n)+""}}function Ze(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Ve(n){var t=[n.a,n.b],e=[n.c,n.d],r=$e(t),i=Xe(t,e),o=$e(Be(e,t,-i))||0
t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,i*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Qo,this.translate=[n.e,n.f],this.scale=[r,o],this.skew=o?Math.atan2(i,o)*Qo:0}function Xe(n,t){return n[0]*t[0]+n[1]*t[1]}function $e(n){var t=Math.sqrt(Xe(n,n))
return t&&(n[0]/=t,n[1]/=t),t}function Be(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function We(n,t){var e,r=[],i=[],o=mo.transform(n),u=mo.transform(t),a=o.translate,c=u.translate,l=o.rotate,f=u.rotate,s=o.skew,h=u.skew,g=o.scale,p=u.scale
return a[0]!=c[0]||a[1]!=c[1]?(r.push("translate(",null,",",null,")"),i.push({i:1,x:Se(a[0],c[0])},{i:3,x:Se(a[1],c[1])})):c[0]||c[1]?r.push("translate("+c+")"):r.push(""),l!=f?(l-f>180?f+=360:f-l>180&&(l+=360),i.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:Se(l,f)})):f&&r.push(r.pop()+"rotate("+f+")"),s!=h?i.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:Se(s,h)}):h&&r.push(r.pop()+"skewX("+h+")"),g[0]!=p[0]||g[1]!=p[1]?(e=r.push(r.pop()+"scale(",null,",",null,")"),i.push({i:e-4,x:Se(g[0],p[0])},{i:e-2,x:Se(g[1],p[1])})):(1!=p[0]||1!=p[1])&&r.push(r.pop()+"scale("+p+")"),e=i.length,function(n){for(var t,o=-1;++o<e;)r[(t=i[o]).i]=t.x(n)
return r.join("")}}function Je(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return(e-n)*t}}function Ge(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return Math.max(0,Math.min(1,(e-n)*t))}}function Ke(n){for(var t=n.source,e=n.target,r=nr(t,e),i=[t];t!==r;)t=t.parent,i.push(t)
for(var o=i.length;e!==r;)i.splice(o,0,e),e=e.parent
return i}function Qe(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent
return t.push(n),t}function nr(n,t){if(n===t)return n
for(var e=Qe(n),r=Qe(t),i=e.pop(),o=r.pop(),u=null;i===o;)u=i,i=e.pop(),o=r.pop()
return u}function tr(n){n.fixed|=2}function er(n){n.fixed&=-7}function rr(n){n.fixed|=4,n.px=n.x,n.py=n.y}function ir(n){n.fixed&=-5}function or(n,t,e){var r=0,i=0
if(n.charge=0,!n.leaf)for(var o,u=n.nodes,a=u.length,c=-1;++c<a;)null!=(o=u[c])&&(or(o,t,e),n.charge+=o.charge,r+=o.charge*o.cx,i+=o.charge*o.cy)
if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5)
var l=t*e[n.point.index]
n.charge+=n.pointCharge=l,r+=l*n.point.x,i+=l*n.point.y}n.cx=r/n.charge,n.cy=i/n.charge}function ur(n,t){return mo.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=fr,n}function ar(n){return n.children}function cr(n){return n.value}function lr(n,t){return t.value-n.value}function fr(n){return mo.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function sr(n){return n.x}function hr(n){return n.y}function gr(n,t,e){n.y0=t,n.y=e}function pr(n){return mo.range(n.length)}function dr(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0
return r}function vr(n){for(var t,e=1,r=0,i=n[0][1],o=n.length;o>e;++e)(t=n[e][1])>i&&(r=e,i=t)
return r}function yr(n){return n.reduce(mr,0)}function mr(n,t){return n+t[1]}function Mr(n,t){return xr(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function xr(n,t){for(var e=-1,r=+n[0],i=(n[1]-r)/t,o=[];++e<=t;)o[e]=i*e+r
return o}function br(n){return[mo.min(n),mo.max(n)]}function _r(n,t){return n.parent==t.parent?1:2}function wr(n){var t=n.children
return t&&t.length?t[0]:n._tree.thread}function Sr(n){var t,e=n.children
return e&&(t=e.length)?e[t-1]:n._tree.thread}function Er(n,t){var e=n.children
if(e&&(i=e.length))for(var r,i,o=-1;++o<i;)t(r=Er(e[o],t),n)>0&&(n=r)
return n}function kr(n,t){return n.x-t.x}function Nr(n,t){return t.x-n.x}function Ar(n,t){return n.depth-t.depth}function Tr(n,t){function e(n,r){var i=n.children
if(i&&(u=i.length))for(var o,u,a=null,c=-1;++c<u;)o=i[c],e(o,a),a=o
t(n,r)}e(n,null)}function qr(n){for(var t,e=0,r=0,i=n.children,o=i.length;--o>=0;)t=i[o]._tree,t.prelim+=e,t.mod+=e,e+=t.shift+(r+=t.change)}function zr(n,t,e){n=n._tree,t=t._tree
var r=e/(t.number-n.number)
n.change+=r,t.change-=r,t.shift+=e,t.prelim+=e,t.mod+=e}function Cr(n,t,e){return n._tree.ancestor.parent==t.parent?n._tree.ancestor:e}function Dr(n,t){return n.value-t.value}function jr(n,t){var e=n._pack_next
n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function Lr(n,t){n._pack_next=t,t._pack_prev=n}function Hr(n,t){var e=t.x-n.x,r=t.y-n.y,i=n.r+t.r
return.999*i*i>e*e+r*r}function Fr(n){function t(n){f=Math.min(n.x-n.r,f),s=Math.max(n.x+n.r,s),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(l=e.length)){var e,r,i,o,u,a,c,l,f=1/0,s=-1/0,h=1/0,g=-1/0
if(e.forEach(Pr),r=e[0],r.x=-r.r,r.y=0,t(r),l>1&&(i=e[1],i.x=i.r,i.y=0,t(i),l>2))for(o=e[2],Yr(r,i,o),t(o),jr(r,o),r._pack_prev=o,jr(o,i),i=r._pack_next,u=3;l>u;u++){Yr(r,i,o=e[u])
var p=0,d=1,v=1
for(a=i._pack_next;a!==i;a=a._pack_next,d++)if(Hr(a,o)){p=1
break}if(1==p)for(c=r._pack_prev;c!==a._pack_prev&&!Hr(c,o);c=c._pack_prev,v++);p?(v>d||d==v&&i.r<r.r?Lr(r,i=a):Lr(r=c,i),u--):(jr(r,o),i=o,t(o))}var y=(f+s)/2,m=(h+g)/2,M=0
for(u=0;l>u;u++)o=e[u],o.x-=y,o.y-=m,M=Math.max(M,o.r+Math.sqrt(o.x*o.x+o.y*o.y))
n.r=M,e.forEach(Or)}}function Pr(n){n._pack_next=n._pack_prev=n}function Or(n){delete n._pack_next,delete n._pack_prev}function Rr(n,t,e,r){var i=n.children
if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,i)for(var o=-1,u=i.length;++o<u;)Rr(i[o],t,e,r)}function Yr(n,t,e){var r=n.r+e.r,i=t.x-n.x,o=t.y-n.y
if(r&&(i||o)){var u=t.r+e.r,a=i*i+o*o
u*=u,r*=r
var c=.5+(r-u)/(2*a),l=Math.sqrt(Math.max(0,2*u*(r+a)-(r-=a)*r-u*u))/(2*a)
e.x=n.x+c*i+l*o,e.y=n.y+c*o-l*i}else e.x=n.x+r,e.y=n.y}function Ir(n){return 1+mo.max(n,function(n){return n.y})}function Ur(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Zr(n){var t=n.children
return t&&t.length?Zr(t[0]):n}function Vr(n){var t,e=n.children
return e&&(t=e.length)?Vr(e[t-1]):n}function Xr(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function $r(n,t){var e=n.x+t[3],r=n.y+t[0],i=n.dx-t[1]-t[3],o=n.dy-t[0]-t[2]
return 0>i&&(e+=i/2,i=0),0>o&&(r+=o/2,o=0),{x:e,y:r,dx:i,dy:o}}function Br(n){var t=n[0],e=n[n.length-1]
return e>t?[t,e]:[e,t]}function Wr(n){return n.rangeExtent?n.rangeExtent():Br(n.range())}function Jr(n,t,e,r){var i=e(n[0],n[1]),o=r(t[0],t[1])
return function(n){return o(i(n))}}function Gr(n,t){var e,r=0,i=n.length-1,o=n[r],u=n[i]
return o>u&&(e=r,r=i,i=e,e=o,o=u,u=e),n[r]=t.floor(o),n[i]=t.ceil(u),n}function Kr(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:Sa}function Qr(n,t,e,r){var i=[],o=[],u=0,a=Math.min(n.length,t.length)-1
for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++u<=a;)i.push(e(n[u-1],n[u])),o.push(r(t[u-1],t[u]))
return function(t){var e=mo.bisect(n,t,1,a)-1
return o[e](i[e](t))}}function ni(n,t,e,r){function i(){var i=Math.min(n.length,t.length)>2?Qr:Jr,c=r?Ge:Je
return u=i(n,t,c,e),a=i(t,n,c,ke),o}function o(n){return u(n)}var u,a
return o.invert=function(n){return a(n)},o.domain=function(t){return arguments.length?(n=t.map(Number),i()):n},o.range=function(n){return arguments.length?(t=n,i()):t},o.rangeRound=function(n){return o.range(n).interpolate(Ze)},o.clamp=function(n){return arguments.length?(r=n,i()):r},o.interpolate=function(n){return arguments.length?(e=n,i()):e},o.ticks=function(t){return ii(n,t)},o.tickFormat=function(t,e){return oi(n,t,e)},o.nice=function(t){return ei(n,t),i()},o.copy=function(){return ni(n,t,e,r)},i()}function ti(n,t){return mo.rebind(n,t,"range","rangeRound","interpolate","clamp")}function ei(n,t){return Gr(n,Kr(ri(n,t)[2]))}function ri(n,t){null==t&&(t=10)
var e=Br(n),r=e[1]-e[0],i=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),o=t/r*i
return.15>=o?i*=10:.35>=o?i*=5:.75>=o&&(i*=2),e[0]=Math.ceil(e[0]/i)*i,e[1]=Math.floor(e[1]/i)*i+.5*i,e[2]=i,e}function ii(n,t){return mo.range.apply(mo,ri(n,t))}function oi(n,t,e){var r=-Math.floor(Math.log(ri(n,t)[2])/Math.LN10+.01)
return mo.format(e?e.replace(_u,function(n,t,e,i,o,u,a,c,l,f){return[t,e,i,o,u,a,c,l||"."+(r-2*("%"===f)),f].join("")}):",."+r+"f")}function ui(n,t,e,r){function i(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function o(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function u(t){return n(i(t))}return u.invert=function(t){return o(n.invert(t))},u.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(i)),u):r},u.base=function(e){return arguments.length?(t=+e,n.domain(r.map(i)),u):t},u.nice=function(){var t=Gr(r.map(i),e?Math:ka)
return n.domain(t),r=t.map(o),u},u.ticks=function(){var n=Br(r),u=[],a=n[0],c=n[1],l=Math.floor(i(a)),f=Math.ceil(i(c)),s=t%1?2:t
if(isFinite(f-l)){if(e){for(;f>l;l++)for(var h=1;s>h;h++)u.push(o(l)*h)
u.push(o(l))}else for(u.push(o(l));l++<f;)for(var h=s-1;h>0;h--)u.push(o(l)*h)
for(l=0;u[l]<a;l++);for(f=u.length;u[f-1]>c;f--);u=u.slice(l,f)}return u},u.tickFormat=function(n,t){if(!arguments.length)return Ea
arguments.length<2?t=Ea:"function"!=typeof t&&(t=mo.format(t))
var r,a=Math.max(.1,n/u.ticks().length),c=e?(r=1e-12,Math.ceil):(r=-1e-12,Math.floor)
return function(n){return n/o(c(i(n)+r))<=a?t(n):""}},u.copy=function(){return ui(n.copy(),t,e,r)},ti(u,n)}function ai(n,t,e){function r(t){return n(i(t))}var i=ci(t),o=ci(1/t)
return r.invert=function(t){return o(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(i)),r):e},r.ticks=function(n){return ii(e,n)},r.tickFormat=function(n,t){return oi(e,n,t)},r.nice=function(n){return r.domain(ei(e,n))},r.exponent=function(u){return arguments.length?(i=ci(t=u),o=ci(1/t),n.domain(e.map(i)),r):t},r.copy=function(){return ai(n.copy(),t,e)},ti(r,n)}function ci(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function li(n,t){function e(e){return u[((o.get(e)||"range"===t.t&&o.set(e,n.push(e)))-1)%u.length]}function r(t,e){return mo.range(n.length).map(function(n){return t+e*n})}var o,u,a
return e.domain=function(r){if(!arguments.length)return n
n=[],o=new i
for(var u,a=-1,c=r.length;++a<c;)o.has(u=r[a])||o.set(u,n.push(u))
return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(u=n,a=0,t={t:"range",a:arguments},e):u},e.rangePoints=function(i,o){arguments.length<2&&(o=0)
var c=i[0],l=i[1],f=(l-c)/(Math.max(1,n.length-1)+o)
return u=r(n.length<2?(c+l)/2:c+f*o/2,f),a=0,t={t:"rangePoints",a:arguments},e},e.rangeBands=function(i,o,c){arguments.length<2&&(o=0),arguments.length<3&&(c=o)
var l=i[1]<i[0],f=i[l-0],s=i[1-l],h=(s-f)/(n.length-o+2*c)
return u=r(f+h*c,h),l&&u.reverse(),a=h*(1-o),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(i,o,c){arguments.length<2&&(o=0),arguments.length<3&&(c=o)
var l=i[1]<i[0],f=i[l-0],s=i[1-l],h=Math.floor((s-f)/(n.length-o+2*c)),g=s-f-(n.length-o)*h
return u=r(f+Math.round(g/2),h),l&&u.reverse(),a=Math.round(h*(1-o)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return a},e.rangeExtent=function(){return Br(t.a[0])},e.copy=function(){return li(n,t)},e.domain(n)}function fi(n,t){function e(){var e=0,o=t.length
for(i=[];++e<o;)i[e-1]=mo.quantile(n,e/o)
return r}function r(n){return isNaN(n=+n)?void 0:t[mo.bisect(i,n)]}var i
return r.domain=function(t){return arguments.length?(n=t.filter(function(n){return!isNaN(n)}).sort(mo.ascending),e()):n},r.range=function(n){return arguments.length?(t=n,e()):t},r.quantiles=function(){return i},r.invertExtent=function(e){return e=t.indexOf(e),0>e?[NaN,NaN]:[e>0?i[e-1]:n[0],e<i.length?i[e]:n[n.length-1]]},r.copy=function(){return fi(n,t)},e()}function si(n,t,e){function r(t){return e[Math.max(0,Math.min(u,Math.floor(o*(t-n))))]}function i(){return o=e.length/(t-n),u=e.length-1,r}var o,u
return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],i()):[n,t]},r.range=function(n){return arguments.length?(e=n,i()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?NaN:t/o+n,[t,t+1/o]},r.copy=function(){return si(n,t,e)},i()}function hi(n,t){function e(e){return e>=e?t[mo.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return hi(n,t)},e}function gi(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return ii(n,t)},t.tickFormat=function(t,e){return oi(n,t,e)},t.copy=function(){return gi(n)},t}function pi(n){return n.innerRadius}function di(n){return n.outerRadius}function vi(n){return n.startAngle}function yi(n){return n.endAngle}function mi(n){for(var t,e,r,i=-1,o=n.length;++i<o;)t=n[i],e=t[0],r=t[1]+za,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r)
return n}function Mi(n){function t(t){function c(){d.push("M",a(n(y),s),f,l(n(v.reverse()),s),"Z")}for(var h,g,p,d=[],v=[],y=[],m=-1,M=t.length,x=dn(e),b=dn(i),_=e===r?function(){return g}:dn(r),w=i===o?function(){return p}:dn(o);++m<M;)u.call(this,h=t[m],m)?(v.push([g=+x.call(this,h,m),p=+b.call(this,h,m)]),y.push([+_.call(this,h,m),+w.call(this,h,m)])):v.length&&(c(),v=[],y=[])
return v.length&&c(),d.length?d.join(""):null}var e=Vt,r=Vt,i=0,o=Xt,u=Xn,a=$t,c=a.key,l=a,f="L",s=.7
return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(i=o=n,t):o},t.y0=function(n){return arguments.length?(i=n,t):i},t.y1=function(n){return arguments.length?(o=n,t):o},t.defined=function(n){return arguments.length?(u=n,t):u},t.interpolate=function(n){return arguments.length?(c="function"==typeof n?a=n:(a=ca.get(n)||$t).key,l=a.reverse||a,f=a.closed?"M":"L",t):c},t.tension=function(n){return arguments.length?(s=n,t):s},t}function xi(n){return n.radius}function bi(n){return[n.x,n.y]}function _i(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]+za
return[e*Math.cos(r),e*Math.sin(r)]}}function wi(){return 64}function Si(){return"circle"}function Ei(n){var t=Math.sqrt(n/$o)
return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function ki(n,t){return jo(n,Pa),n.id=t,n}function Ni(n,t,e,r){var i=n.id
return A(n,"function"==typeof e?function(n,o,u){n.__transition__[i].tween.set(t,r(e.call(n,n.__data__,o,u)))}:(e=r(e),function(n){n.__transition__[i].tween.set(t,e)}))}function Ai(n){return null==n&&(n=""),function(){this.textContent=n}}function Ti(n,t,e,r){var o=n.__transition__||(n.__transition__={active:0,count:0}),u=o[e]
if(!u){var a=r.time
u=o[e]={tween:new i,time:a,ease:r.ease,delay:r.delay,duration:r.duration},++o.count,mo.timer(function(r){function i(r){return o.active>e?l():(o.active=e,u.event&&u.event.start.call(n,f,t),u.tween.forEach(function(e,r){(r=r.call(n,f,t))&&p.push(r)}),c(r||1)?1:void bn(c,h,a))}function c(r){if(o.active!==e)return l()
for(var i=r/g,a=s(i),c=p.length;c>0;)p[--c].call(n,a)
return i>=1?(u.event&&u.event.end.call(n,f,t),l()):void 0}function l(){return--o.count?delete o[e]:delete n.__transition__,1}var f=n.__data__,s=u.ease,h=u.delay,g=u.duration,p=[]
return r>=h?i(r-h):void bn(i,h,a)},0,a)}}function qi(n,t){n.attr("transform",function(n){return"translate("+t(n)+",0)"})}function zi(n,t){n.attr("transform",function(n){return"translate(0,"+t(n)+")"})}function Ci(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Di(n,t,e){function r(t){var e=n(t),r=o(e,1)
return r-t>t-e?e:r}function i(e){return t(e=n(new Va(e-1)),1),e}function o(n,e){return t(n=new Va(+n),e),n}function u(n,r,o){var u=i(n),a=[]
if(o>1)for(;r>u;)e(u)%o||a.push(new Date(+u)),t(u,1)
else for(;r>u;)a.push(new Date(+u)),t(u,1)
return a}function a(n,t,e){try{Va=Ci
var r=new Ci
return r._=n,u(r,t,e)}finally{Va=Date}}n.floor=n,n.round=r,n.ceil=i,n.offset=o,n.range=u
var c=n.utc=ji(n)
return c.floor=c,c.round=ji(r),c.ceil=ji(i),c.offset=ji(o),c.range=a,n}function ji(n){return function(t,e){try{Va=Ci
var r=new Ci
return r._=t,n(r,e)._}finally{Va=Date}}}function Li(n){function t(t){for(var r,i,o,u=[],a=-1,c=0;++a<e;)37===n.charCodeAt(a)&&(u.push(n.substring(c,a)),null!=(i=ac[r=n.charAt(++a)])&&(r=n.charAt(++a)),(o=cc[r])&&(r=o(t,null==i?"e"===r?" ":"0":i)),u.push(r),c=a+1)
return u.push(n.substring(c,a)),u.join("")}var e=n.length
return t.parse=function(t){var e={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null}
if(Hi(e,n,t,0)!=t.length)return null
"p"in e&&(e.H=e.H%12+12*e.p)
var r=null!=e.Z&&Va!==Ci,i=new(r?Ci:Va)
return"j"in e?i.setFullYear(e.y,0,e.j):"w"in e&&("W"in e||"U"in e)?(i.setFullYear(e.y,0,1),i.setFullYear(e.y,0,"W"in e?(e.w+6)%7+7*e.W-(i.getDay()+5)%7:e.w+7*e.U-(i.getDay()+6)%7)):i.setFullYear(e.y,e.m,e.d),i.setHours(e.H+Math.floor(e.Z/100),e.M+e.Z%100,e.S,e.L),r?i._:i},t.toString=function(){return n},t}function Hi(n,t,e,r){for(var i,o,u,a=0,c=t.length,l=e.length;c>a;){if(r>=l)return-1
if(37===(i=t.charCodeAt(a++))){if(u=t.charAt(a++),!(o=lc[u in ac?t.charAt(a++):u])||(r=o(n,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}function Fi(n){return new RegExp("^(?:"+n.map(mo.requote).join("|")+")","i")}function Pi(n){for(var t=new i,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e)
return t}function Oi(n,t,e){var r=0>n?"-":"",i=(r?-n:n)+"",o=i.length
return r+(e>o?new Array(e-o+1).join(t)+i:i)}function Ri(n,t,e){nc.lastIndex=0
var r=nc.exec(t.substring(e))
return r?(n.w=tc.get(r[0].toLowerCase()),e+r[0].length):-1}function Yi(n,t,e){Ka.lastIndex=0
var r=Ka.exec(t.substring(e))
return r?(n.w=Qa.get(r[0].toLowerCase()),e+r[0].length):-1}function Ii(n,t,e){fc.lastIndex=0
var r=fc.exec(t.substring(e,e+1))
return r?(n.w=+r[0],e+r[0].length):-1}function Ui(n,t,e){fc.lastIndex=0
var r=fc.exec(t.substring(e))
return r?(n.U=+r[0],e+r[0].length):-1}function Zi(n,t,e){fc.lastIndex=0
var r=fc.exec(t.substring(e))
return r?(n.W=+r[0],e+r[0].length):-1}function Vi(n,t,e){ic.lastIndex=0
var r=ic.exec(t.substring(e))
return r?(n.m=oc.get(r[0].toLowerCase()),e+r[0].length):-1}function Xi(n,t,e){ec.lastIndex=0
var r=ec.exec(t.substring(e))
return r?(n.m=rc.get(r[0].toLowerCase()),e+r[0].length):-1}function $i(n,t,e){return Hi(n,cc.c.toString(),t,e)}function Bi(n,t,e){return Hi(n,cc.x.toString(),t,e)}function Wi(n,t,e){return Hi(n,cc.X.toString(),t,e)}function Ji(n,t,e){fc.lastIndex=0
var r=fc.exec(t.substring(e,e+4))
return r?(n.y=+r[0],e+r[0].length):-1}function Gi(n,t,e){fc.lastIndex=0
var r=fc.exec(t.substring(e,e+2))
return r?(n.y=Qi(+r[0]),e+r[0].length):-1}function Ki(n,t,e){return/^[+-]\d{4}$/.test(t=t.substring(e,e+5))?(n.Z=+t,e+5):-1}function Qi(n){return n+(n>68?1900:2e3)}function no(n,t,e){fc.lastIndex=0
var r=fc.exec(t.substring(e,e+2))
return r?(n.m=r[0]-1,e+r[0].length):-1}function to(n,t,e){fc.lastIndex=0
var r=fc.exec(t.substring(e,e+2))
return r?(n.d=+r[0],e+r[0].length):-1}function eo(n,t,e){fc.lastIndex=0
var r=fc.exec(t.substring(e,e+3))
return r?(n.j=+r[0],e+r[0].length):-1}function ro(n,t,e){fc.lastIndex=0
var r=fc.exec(t.substring(e,e+2))
return r?(n.H=+r[0],e+r[0].length):-1}function io(n,t,e){fc.lastIndex=0
var r=fc.exec(t.substring(e,e+2))
return r?(n.M=+r[0],e+r[0].length):-1}function oo(n,t,e){fc.lastIndex=0
var r=fc.exec(t.substring(e,e+2))
return r?(n.S=+r[0],e+r[0].length):-1}function uo(n,t,e){fc.lastIndex=0
var r=fc.exec(t.substring(e,e+3))
return r?(n.L=+r[0],e+r[0].length):-1}function ao(n,t,e){var r=sc.get(t.substring(e,e+=2).toLowerCase())
return null==r?-1:(n.p=r,e)}function co(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=~~(Math.abs(t)/60),i=Math.abs(t)%60
return e+Oi(r,"0",2)+Oi(i,"0",2)}function lo(n,t,e){uc.lastIndex=0
var r=uc.exec(t.substring(e,e+1))
return r?e+r[0].length:-1}function fo(n){function t(n){try{Va=Ci
var t=new Va
return t._=n,e(t)}finally{Va=Date}}var e=Li(n)
return t.parse=function(n){try{Va=Ci
var t=e.parse(n)
return t&&t._}finally{Va=Date}},t.toString=e.toString,t}function so(n){return n.toISOString()}function ho(n,t,e){function r(t){return n(t)}function i(n,e){var r=n[1]-n[0],i=r/e,o=mo.bisect(gc,i)
return o==gc.length?[t.year,ri(n.map(function(n){return n/31536e6}),e)[2]]:o?t[i/gc[o-1]<gc[o]/i?o-1:o]:[yc,ri(n,e)[2]]}return r.invert=function(t){return go(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(go)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,go(+e+1),t).length}var o=r.domain(),u=Br(o),a=null==n?i(u,10):"number"==typeof n&&i(u,n)
return a&&(n=a[0],t=a[1]),r.domain(Gr(o,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=go(t-1)
return t},ceil:function(t){for(;e(t=n.ceil(t));)t=go(+t+1)
return t}}:n))},r.ticks=function(n,t){var e=Br(r.domain()),o=null==n?i(e,10):"number"==typeof n?i(e,n):!n.range&&[{range:n},t]
return o&&(n=o[0],t=o[1]),n.range(e[0],go(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return ho(n.copy(),t,e)},ti(r,n)}function go(n){return new Date(n)}function po(n){return function(t){for(var e=n.length-1,r=n[e];!r[1](t);)r=n[--e]
return r[0](t)}}function vo(n){return JSON.parse(n.responseText)}function yo(n){var t=bo.createRange()
return t.selectNode(bo.body),t.createContextualFragment(n.responseText)}var mo={version:"3.3.6"}
Date.now||(Date.now=function(){return+new Date})
var Mo=[].slice,xo=function(n){return Mo.call(n)},bo=document,_o=bo.documentElement,wo=window
try{xo(_o.childNodes)[0].nodeType}catch(n){xo=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t]
return e}}try{bo.createElement("div").style.setProperty("opacity",0,"")}catch(n){var So=wo.Element.prototype,Eo=So.setAttribute,ko=So.setAttributeNS,No=wo.CSSStyleDeclaration.prototype,Ao=No.setProperty
So.setAttribute=function(n,t){Eo.call(this,n,t+"")},So.setAttributeNS=function(n,t,e){ko.call(this,n,t,e+"")},No.setProperty=function(n,t,e){Ao.call(this,n,t+"",e)}}mo.ascending=function(n,t){return t>n?-1:n>t?1:n>=t?0:NaN},mo.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:NaN},mo.min=function(n,t){var e,r,i=-1,o=n.length
if(1===arguments.length){for(;++i<o&&!(null!=(e=n[i])&&e>=e);)e=void 0
for(;++i<o;)null!=(r=n[i])&&e>r&&(e=r)}else{for(;++i<o&&!(null!=(e=t.call(n,n[i],i))&&e>=e);)e=void 0
for(;++i<o;)null!=(r=t.call(n,n[i],i))&&e>r&&(e=r)}return e},mo.max=function(n,t){var e,r,i=-1,o=n.length
if(1===arguments.length){for(;++i<o&&!(null!=(e=n[i])&&e>=e);)e=void 0
for(;++i<o;)null!=(r=n[i])&&r>e&&(e=r)}else{for(;++i<o&&!(null!=(e=t.call(n,n[i],i))&&e>=e);)e=void 0
for(;++i<o;)null!=(r=t.call(n,n[i],i))&&r>e&&(e=r)}return e},mo.extent=function(n,t){var e,r,i,o=-1,u=n.length
if(1===arguments.length){for(;++o<u&&!(null!=(e=i=n[o])&&e>=e);)e=i=void 0
for(;++o<u;)null!=(r=n[o])&&(e>r&&(e=r),r>i&&(i=r))}else{for(;++o<u&&!(null!=(e=i=t.call(n,n[o],o))&&e>=e);)e=void 0
for(;++o<u;)null!=(r=t.call(n,n[o],o))&&(e>r&&(e=r),r>i&&(i=r))}return[e,i]},mo.sum=function(n,t){var e,r=0,i=n.length,o=-1
if(1===arguments.length)for(;++o<i;)isNaN(e=+n[o])||(r+=e)
else for(;++o<i;)isNaN(e=+t.call(n,n[o],o))||(r+=e)
return r},mo.mean=function(t,e){var r,i=t.length,o=0,u=-1,a=0
if(1===arguments.length)for(;++u<i;)n(r=t[u])&&(o+=(r-o)/++a)
else for(;++u<i;)n(r=e.call(t,t[u],u))&&(o+=(r-o)/++a)
return a?o:void 0},mo.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),i=+n[r-1],o=e-r
return o?i+o*(n[r]-i):i},mo.median=function(t,e){return arguments.length>1&&(t=t.map(e)),t=t.filter(n),t.length?mo.quantile(t.sort(mo.ascending),.5):void 0},mo.bisector=function(n){return{left:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);i>r;){var o=r+i>>>1
n.call(t,t[o],o)<e?r=o+1:i=o}return r},right:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);i>r;){var o=r+i>>>1
e<n.call(t,t[o],o)?i=o:r=o+1}return r}}}
var To=mo.bisector(function(n){return n})
mo.bisectLeft=To.left,mo.bisect=mo.bisectRight=To.right,mo.shuffle=function(n){for(var t,e,r=n.length;r;)e=0|Math.random()*r--,t=n[r],n[r]=n[e],n[e]=t
return n},mo.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]]
return r},mo.pairs=function(n){for(var t=0,e=n.length-1,r=n[0],i=new Array(0>e?0:e);e>t;)i[t]=[r,r=n[++t]]
return i},mo.zip=function(){if(!(i=arguments.length))return[]
for(var n=-1,e=mo.min(arguments,t),r=new Array(e);++n<e;)for(var i,o=-1,u=r[n]=new Array(i);++o<i;)u[o]=arguments[o][n]
return r},mo.transpose=function(n){return mo.zip.apply(mo,n)},mo.keys=function(n){var t=[]
for(var e in n)t.push(e)
return t},mo.values=function(n){var t=[]
for(var e in n)t.push(n[e])
return t},mo.entries=function(n){var t=[]
for(var e in n)t.push({key:e,value:n[e]})
return t},mo.merge=function(n){return Array.prototype.concat.apply([],n)},mo.range=function(n,t,r){if(arguments.length<3&&(r=1,arguments.length<2&&(t=n,n=0)),1/0==(t-n)/r)throw new Error("infinite range")
var i,o=[],u=e(Math.abs(r)),a=-1
if(n*=u,t*=u,0>(r*=u))for(;(i=n+r*++a)>t;)o.push(i/u)
else for(;(i=n+r*++a)<t;)o.push(i/u)
return o},mo.map=function(n){var t=new i
if(n instanceof i)n.forEach(function(n,e){t.set(n,e)})
else for(var e in n)t.set(e,n[e])
return t},r(i,{has:function(n){return qo+n in this},get:function(n){return this[qo+n]},set:function(n,t){return this[qo+n]=t},remove:function(n){return(n=qo+n)in this&&delete this[n]},keys:function(){var n=[]
return this.forEach(function(t){n.push(t)}),n},values:function(){var n=[]
return this.forEach(function(t,e){n.push(e)}),n},entries:function(){var n=[]
return this.forEach(function(t,e){n.push({key:t,value:e})}),n},forEach:function(n){for(var t in this)t.charCodeAt(0)===zo&&n.call(this,t.substring(1),this[t])}})
var qo="\0",zo=qo.charCodeAt(0)
mo.nest=function(){function n(t,a,c){if(c>=u.length)return r?r.call(o,a):e?a.sort(e):a
for(var l,f,s,h,g=-1,p=a.length,d=u[c++],v=new i;++g<p;)(h=v.get(l=d(f=a[g])))?h.push(f):v.set(l,[f])
return t?(f=t(),s=function(e,r){f.set(e,n(t,r,c))}):(f={},s=function(e,r){f[e]=n(t,r,c)}),v.forEach(s),f}function t(n,e){if(e>=u.length)return n
var r=[],i=a[e++]
return n.forEach(function(n,i){r.push({key:n,values:t(i,e)})}),i?r.sort(function(n,t){return i(n.key,t.key)}):r}var e,r,o={},u=[],a=[]
return o.map=function(t,e){return n(e,t,0)},o.entries=function(e){return t(n(mo.map,e,0),0)},o.key=function(n){return u.push(n),o},o.sortKeys=function(n){return a[u.length-1]=n,o},o.sortValues=function(n){return e=n,o},o.rollup=function(n){return r=n,o},o},mo.set=function(n){var t=new o
if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e])
return t},r(o,{has:function(n){return qo+n in this},add:function(n){return this[qo+n]=!0,n},remove:function(n){return(n=qo+n)in this&&delete this[n]},values:function(){var n=[]
return this.forEach(function(t){n.push(t)}),n},forEach:function(n){for(var t in this)t.charCodeAt(0)===zo&&n.call(this,t.substring(1))}}),mo.behavior={},mo.rebind=function(n,t){for(var e,r=1,i=arguments.length;++r<i;)n[e=arguments[r]]=u(n,t,t[e])
return n}
var Co=["webkit","ms","moz","Moz","o","O"]
mo.dispatch=function(){for(var n=new l,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=f(n)
return n},l.prototype.on=function(n,t){var e=n.indexOf("."),r=""
if(e>=0&&(r=n.substring(e+1),n=n.substring(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t)
if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null)
return this}},mo.event=null,mo.requote=function(n){return n.replace(Do,"\\$&")}
var Do=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,jo={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},Lo=function(n,t){return t.querySelector(n)},Ho=function(n,t){return t.querySelectorAll(n)},Fo=_o[a(_o,"matchesSelector")],Po=function(n,t){return Fo.call(n,t)}
"function"==typeof Sizzle&&(Lo=function(n,t){return Sizzle(n,t)[0]||null},Ho=function(n,t){return Sizzle.uniqueSort(Sizzle(n,t))},Po=Sizzle.matchesSelector),mo.selection=function(){return Io}
var Oo=mo.selection.prototype=[]
Oo.select=function(n){var t,e,r,i,o=[]
n=d(n)
for(var u=-1,a=this.length;++u<a;){o.push(t=[]),t.parentNode=(r=this[u]).parentNode
for(var c=-1,l=r.length;++c<l;)(i=r[c])?(t.push(e=n.call(i,i.__data__,c,u)),e&&"__data__"in i&&(e.__data__=i.__data__)):t.push(null)}return p(o)},Oo.selectAll=function(n){var t,e,r=[]
n=v(n)
for(var i=-1,o=this.length;++i<o;)for(var u=this[i],a=-1,c=u.length;++a<c;)(e=u[a])&&(r.push(t=xo(n.call(e,e.__data__,a,i))),t.parentNode=e)
return p(r)}
var Ro={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"}
mo.ns={prefix:Ro,qualify:function(n){var t=n.indexOf(":"),e=n
return t>=0&&(e=n.substring(0,t),n=n.substring(t+1)),Ro.hasOwnProperty(e)?{space:Ro[e],local:n}:n}},Oo.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node()
return n=mo.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(y(t,n[t]))
return this}return this.each(y(n,t))},Oo.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=n.trim().split(/^|\s+/g)).length,i=-1
if(t=e.classList){for(;++i<r;)if(!t.contains(n[i]))return!1}else for(t=e.getAttribute("class");++i<r;)if(!M(n[i]).test(t))return!1
return!0}for(t in n)this.each(x(t,n[t]))
return this}return this.each(x(n,t))},Oo.style=function(n,t,e){var r=arguments.length
if(3>r){if("string"!=typeof n){2>r&&(t="")
for(e in n)this.each(_(e,n[e],t))
return this}if(2>r)return wo.getComputedStyle(this.node(),null).getPropertyValue(n)
e=""}return this.each(_(n,t,e))},Oo.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n]
for(t in n)this.each(w(t,n[t]))
return this}return this.each(w(n,t))},Oo.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments)
this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},Oo.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments)
this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},Oo.append=function(n){return n=S(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},Oo.insert=function(n,t){return n=S(n),t=d(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments))})},Oo.remove=function(){return this.each(function(){var n=this.parentNode
n&&n.removeChild(this)})},Oo.data=function(n,t){function e(n,e){var r,o,u,a=n.length,s=e.length,h=Math.min(a,s),g=new Array(s),p=new Array(s),d=new Array(a)
if(t){var v,y=new i,m=new i,M=[]
for(r=-1;++r<a;)v=t.call(o=n[r],o.__data__,r),y.has(v)?d[r]=o:y.set(v,o),M.push(v)
for(r=-1;++r<s;)v=t.call(e,u=e[r],r),(o=y.get(v))?(g[r]=o,o.__data__=u):m.has(v)||(p[r]=E(u)),m.set(v,u),y.remove(v)
for(r=-1;++r<a;)y.has(M[r])&&(d[r]=n[r])}else{for(r=-1;++r<h;)o=n[r],u=e[r],o?(o.__data__=u,g[r]=o):p[r]=E(u)
for(;s>r;++r)p[r]=E(e[r])
for(;a>r;++r)d[r]=n[r]}p.update=g,p.parentNode=g.parentNode=d.parentNode=n.parentNode,c.push(p),l.push(g),f.push(d)}var r,o,u=-1,a=this.length
if(!arguments.length){for(n=new Array(a=(r=this[0]).length);++u<a;)(o=r[u])&&(n[u]=o.__data__)
return n}var c=T([]),l=p([]),f=p([])
if("function"==typeof n)for(;++u<a;)e(r=this[u],n.call(r,r.parentNode.__data__,u))
else for(;++u<a;)e(r=this[u],n)
return l.enter=function(){return c},l.exit=function(){return f},l},Oo.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},Oo.filter=function(n){var t,e,r,i=[]
"function"!=typeof n&&(n=k(n))
for(var o=0,u=this.length;u>o;o++){i.push(t=[]),t.parentNode=(e=this[o]).parentNode
for(var a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a)&&t.push(r)}return p(i)},Oo.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],i=r.length-1,o=r[i];--i>=0;)(e=r[i])&&(o&&o!==e.nextSibling&&o.parentNode.insertBefore(e,o),o=e)
return this},Oo.sort=function(n){n=N.apply(this,arguments)
for(var t=-1,e=this.length;++t<e;)this[t].sort(n)
return this.order()},Oo.each=function(n){return A(this,function(t,e,r){n.call(t,t.__data__,e,r)})},Oo.call=function(n){var t=xo(arguments)
return n.apply(t[0]=this,t),this},Oo.empty=function(){return!this.node()},Oo.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,i=e.length;i>r;r++){var o=e[r]
if(o)return o}return null},Oo.size=function(){var n=0
return this.each(function(){++n}),n}
var Yo=[]
mo.selection.enter=T,mo.selection.enter.prototype=Yo,Yo.append=Oo.append,Yo.empty=Oo.empty,Yo.node=Oo.node,Yo.call=Oo.call,Yo.size=Oo.size,Yo.select=function(n){for(var t,e,r,i,o,u=[],a=-1,c=this.length;++a<c;){r=(i=this[a]).update,u.push(t=[]),t.parentNode=i.parentNode
for(var l=-1,f=i.length;++l<f;)(o=i[l])?(t.push(r[l]=e=n.call(i.parentNode,o.__data__,l,a)),e.__data__=o.__data__):t.push(null)}return p(u)},Yo.insert=function(n,t){return arguments.length<2&&(t=q(this)),Oo.insert.call(this,n,t)},Oo.transition=function(){for(var n,t,e=ja||++Oa,r=[],i=La||{time:Date.now(),ease:De,delay:0,duration:250},o=-1,u=this.length;++o<u;){r.push(n=[])
for(var a=this[o],c=-1,l=a.length;++c<l;)(t=a[c])&&Ti(t,c,e,i),n.push(t)}return ki(r,e)},Oo.interrupt=function(){return this.each(z)},mo.select=function(n){var t=["string"==typeof n?Lo(n,bo):n]
return t.parentNode=_o,p([t])},mo.selectAll=function(n){var t=xo("string"==typeof n?Ho(n,bo):n)
return t.parentNode=_o,p([t])}
var Io=mo.select(_o)
Oo.on=function(n,t,e){var r=arguments.length
if(3>r){if("string"!=typeof n){2>r&&(t=!1)
for(e in n)this.each(C(e,n[e],t))
return this}if(2>r)return(r=this.node()["__on"+n])&&r._
e=!1}return this.each(C(n,t,e))}
var Uo=mo.map({mouseenter:"mouseover",mouseleave:"mouseout"})
Uo.forEach(function(n){"on"+n in bo&&Uo.remove(n)})
var Zo=a(_o.style,"userSelect"),Vo=0
mo.mouse=function(n){return H(n,h())}
var Xo=/WebKit/.test(wo.navigator.userAgent)?-1:0
mo.touches=function(n,t){return arguments.length<2&&(t=h().touches),t?xo(t).map(function(t){var e=H(n,t)
return e.identifier=t.identifier,e}):[]},mo.behavior.drag=function(){function n(){this.on("mousedown.drag",u).on("touchstart.drag",a)}function t(){return mo.event.changedTouches[0].identifier}function e(n,t){return mo.touches(n).filter(function(n){return n.identifier===t})[0]}function r(n,t,e,r){return function(){function u(){var n=t(f,g),e=n[0]-d[0],r=n[1]-d[1]
v|=e|r,d=n,s({type:"drag",x:n[0]+c[0],y:n[1]+c[1],dx:e,dy:r})}function a(){y.on(e+"."+p,null).on(r+"."+p,null),m(v&&mo.event.target===h),s({type:"dragend"})}var c,l=this,f=l.parentNode,s=i.of(l,arguments),h=mo.event.target,g=n(),p=null==g?"drag":"drag-"+g,d=t(f,g),v=0,y=mo.select(wo).on(e+"."+p,u).on(r+"."+p,a),m=L()
o?(c=o.apply(l,arguments),c=[c.x-d[0],c.y-d[1]]):c=[0,0],s({type:"dragstart"})}}var i=g(n,"drag","dragstart","dragend"),o=null,u=r(c,mo.mouse,"mousemove","mouseup"),a=r(t,e,"touchmove","touchend")
return n.origin=function(t){return arguments.length?(o=t,n):o},mo.rebind(n,i,"on")}
var $o=Math.PI,Bo=2*$o,Wo=$o/2,Jo=1e-6,Go=Jo*Jo,Ko=$o/180,Qo=180/$o,nu=Math.SQRT2,tu=2
mo.interpolateZoom=function(n,t){function e(n){var t=n*m
if(y){var e=Y(d),u=o/(tu*h)*(e*I(nu*t+d)-R(d))
return[r+u*l,i+u*f,o*e/Y(nu*t+d)]}return[r+n*l,i+n*f,o*Math.exp(nu*t)]}var r=n[0],i=n[1],o=n[2],u=t[0],a=t[1],c=t[2],l=u-r,f=a-i,s=l*l+f*f,h=Math.sqrt(s),g=(c*c-o*o+4*s)/(2*o*tu*h),p=(c*c-o*o-4*s)/(2*c*tu*h),d=Math.log(Math.sqrt(g*g+1)-g),v=Math.log(Math.sqrt(p*p+1)-p),y=v-d,m=(y||Math.log(c/o))/nu
return e.duration=1e3*m,e},mo.behavior.zoom=function(){function n(n){n.on(N,l).on(iu+".zoom",h).on(A,p).on("dblclick.zoom",d).on(q,f)}function t(n){return[(n[0]-S.x)/S.k,(n[1]-S.y)/S.k]}function e(n){return[n[0]*S.k+S.x,n[1]*S.k+S.y]}function r(n){S.k=Math.max(k[0],Math.min(k[1],n))}function i(n,t){t=e(t),S.x+=n[0]-t[0],S.y+=n[1]-t[1]}function o(){b&&b.domain(x.range().map(function(n){return(n-S.x)/S.k}).map(x.invert)),w&&w.domain(_.range().map(function(n){return(n-S.y)/S.k}).map(_.invert))}function u(n){n({type:"zoomstart"})}function a(n){o(),n({type:"zoom",scale:S.k,translate:[S.x,S.y]})}function c(n){n({type:"zoomend"})}function l(){function n(){f=1,i(mo.mouse(r),h),a(o)}function e(){s.on(A,wo===r?p:null).on(T,null),g(f&&mo.event.target===l),c(o)}var r=this,o=C.of(r,arguments),l=mo.event.target,f=0,s=mo.select(wo).on(A,n).on(T,e),h=t(mo.mouse(r)),g=L()
z.call(r),u(o)}function f(){function n(){var n=mo.touches(p)
return g=S.k,n.forEach(function(n){n.identifier in v&&(v[n.identifier]=t(n))}),n}function e(){for(var t=mo.event.changedTouches,e=0,o=t.length;o>e;++e)v[t[e].identifier]=null
var u=n(),c=Date.now()
if(1===u.length){if(500>c-M){var l=u[0],f=v[l.identifier]
r(2*S.k),i(l,f),s(),a(d)}M=c}else if(u.length>1){var l=u[0],h=u[1],g=l[0]-h[0],p=l[1]-h[1]
y=g*g+p*p}}function o(){for(var n,t,e,o,u=mo.touches(p),c=0,l=u.length;l>c;++c,o=null)if(e=u[c],o=v[e.identifier]){if(t)break
n=e,t=o}if(o){var f=(f=e[0]-n[0])*f+(f=e[1]-n[1])*f,s=y&&Math.sqrt(f/y)
n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+o[0])/2,(t[1]+o[1])/2],r(s*g)}M=null,i(n,t),a(d)}function h(){if(mo.event.touches.length){for(var t=mo.event.changedTouches,e=0,r=t.length;r>e;++e)delete v[t[e].identifier]
for(var i in v)return void n()}_.on(x,null).on(b,null),w.on(N,l).on(q,f),E(),c(d)}var g,p=this,d=C.of(p,arguments),v={},y=0,m=mo.event.changedTouches[0].identifier,x="touchmove.zoom-"+m,b="touchend.zoom-"+m,_=mo.select(wo).on(x,o).on(b,h),w=mo.select(p).on(N,null).on(q,e),E=L()
z.call(p),e(),u(d)}function h(){var n=C.of(this,arguments)
m?clearTimeout(m):(z.call(this),u(n)),m=setTimeout(function(){m=null,c(n)},50),s()
var e=y||mo.mouse(this)
v||(v=t(e)),r(Math.pow(2,.002*eu())*S.k),i(e,v),a(n)}function p(){v=null}function d(){var n=C.of(this,arguments),e=mo.mouse(this),o=t(e),l=Math.log(S.k)/Math.LN2
u(n),r(Math.pow(2,mo.event.shiftKey?Math.ceil(l)-1:Math.floor(l)+1)),i(e,o),a(n),c(n)}var v,y,m,M,x,b,_,w,S={x:0,y:0,k:1},E=[960,500],k=ru,N="mousedown.zoom",A="mousemove.zoom",T="mouseup.zoom",q="touchstart.zoom",C=g(n,"zoomstart","zoom","zoomend")
return n.event=function(n){n.each(function(){var n=C.of(this,arguments),t=S
ja?mo.select(this).transition().each("start.zoom",function(){S=this.__chart__||{x:0,y:0,k:1},u(n)}).tween("zoom:zoom",function(){var e=E[0],r=E[1],i=e/2,o=r/2,u=mo.interpolateZoom([(i-S.x)/S.k,(o-S.y)/S.k,e/S.k],[(i-t.x)/t.k,(o-t.y)/t.k,e/t.k])
return function(t){var r=u(t),c=e/r[2]
this.__chart__=S={x:i-r[0]*c,y:o-r[1]*c,k:c},a(n)}}).each("end.zoom",function(){c(n)}):(this.__chart__=S,u(n),a(n),c(n))})},n.translate=function(t){return arguments.length?(S={x:+t[0],y:+t[1],k:S.k},o(),n):[S.x,S.y]},n.scale=function(t){return arguments.length?(S={x:S.x,y:S.y,k:+t},o(),n):S.k},n.scaleExtent=function(t){return arguments.length?(k=null==t?ru:[+t[0],+t[1]],n):k},n.center=function(t){return arguments.length?(y=t&&[+t[0],+t[1]],n):y},n.size=function(t){return arguments.length?(E=t&&[+t[0],+t[1]],n):E},n.x=function(t){return arguments.length?(b=t,x=t.copy(),S={x:0,y:0,k:1},n):b},n.y=function(t){return arguments.length?(w=t,_=t.copy(),S={x:0,y:0,k:1},n):w},mo.rebind(n,C,"on")}
var eu,ru=[0,1/0],iu="onwheel"in bo?(eu=function(){return-mo.event.deltaY*(mo.event.deltaMode?120:1)},"wheel"):"onmousewheel"in bo?(eu=function(){return mo.event.wheelDelta},"mousewheel"):(eu=function(){return-mo.event.detail},"MozMousePixelScroll")
Z.prototype.toString=function(){return this.rgb()+""},mo.hsl=function(n,t,e){return 1===arguments.length?n instanceof X?V(n.h,n.s,n.l):fn(""+n,sn,V):V(+n,+t,+e)}
var ou=X.prototype=new Z
ou.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),V(this.h,this.s,this.l/n)},ou.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),V(this.h,this.s,n*this.l)},ou.rgb=function(){return $(this.h,this.s,this.l)},mo.hcl=function(n,t,e){return 1===arguments.length?n instanceof W?B(n.h,n.c,n.l):n instanceof K?nn(n.l,n.a,n.b):nn((n=hn((n=mo.rgb(n)).r,n.g,n.b)).l,n.a,n.b):B(+n,+t,+e)}
var uu=W.prototype=new Z
uu.brighter=function(n){return B(this.h,this.c,Math.min(100,this.l+au*(arguments.length?n:1)))},uu.darker=function(n){return B(this.h,this.c,Math.max(0,this.l-au*(arguments.length?n:1)))},uu.rgb=function(){return J(this.h,this.c,this.l).rgb()},mo.lab=function(n,t,e){return 1===arguments.length?n instanceof K?G(n.l,n.a,n.b):n instanceof W?J(n.l,n.c,n.h):hn((n=mo.rgb(n)).r,n.g,n.b):G(+n,+t,+e)}
var au=18,cu=.95047,lu=1,fu=1.08883,su=K.prototype=new Z
su.brighter=function(n){return G(Math.min(100,this.l+au*(arguments.length?n:1)),this.a,this.b)},su.darker=function(n){return G(Math.max(0,this.l-au*(arguments.length?n:1)),this.a,this.b)},su.rgb=function(){return Q(this.l,this.a,this.b)},mo.rgb=function(n,t,e){return 1===arguments.length?n instanceof cn?an(n.r,n.g,n.b):fn(""+n,an,$):an(~~n,~~t,~~e)}
var hu=cn.prototype=new Z
hu.brighter=function(n){n=Math.pow(.7,arguments.length?n:1)
var t=this.r,e=this.g,r=this.b,i=30
return t||e||r?(t&&i>t&&(t=i),e&&i>e&&(e=i),r&&i>r&&(r=i),an(Math.min(255,~~(t/n)),Math.min(255,~~(e/n)),Math.min(255,~~(r/n)))):an(i,i,i)},hu.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),an(~~(n*this.r),~~(n*this.g),~~(n*this.b))},hu.hsl=function(){return sn(this.r,this.g,this.b)},hu.toString=function(){return"#"+ln(this.r)+ln(this.g)+ln(this.b)}
var gu=mo.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074})
gu.forEach(function(n,t){gu.set(n,on(t))}),mo.functor=dn,mo.xhr=yn(vn),mo.dsv=function(n,t){function e(n,e,o){arguments.length<3&&(o=e,e=null)
var u=mo.xhr(n,t,o)
return u.row=function(n){return arguments.length?u.response(null==(e=n)?r:i(n)):e},u.row(e)}function r(n){return e.parse(n.responseText)}function i(n){return function(t){return e.parse(t.responseText,n)}}function u(t){return t.map(a).join(n)}function a(n){return c.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var c=new RegExp('["'+n+"\n]"),l=n.charCodeAt(0)
return e.parse=function(n,t){var r
return e.parseRows(n,function(n,e){if(r)return r(n,e-1)
var i=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}")
r=t?function(n,e){return t(i(n),e)}:i})},e.parseRows=function(n,t){function e(){if(f>=c)return u
if(i)return i=!1,o
var t=f
if(34===n.charCodeAt(t)){for(var e=t;e++<c;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}f=e+2
var r=n.charCodeAt(e+1)
return 13===r?(i=!0,10===n.charCodeAt(e+2)&&++f):10===r&&(i=!0),n.substring(t+1,e).replace(/""/g,'"')}for(;c>f;){var r=n.charCodeAt(f++),a=1
if(10===r)i=!0
else if(13===r)i=!0,10===n.charCodeAt(f)&&(++f,++a)
else if(r!==l)continue
return n.substring(t,f-a)}return n.substring(t)}for(var r,i,o={},u={},a=[],c=n.length,f=0,s=0;(r=e())!==u;){for(var h=[];r!==o&&r!==u;)h.push(r),r=e();(!t||(h=t(h,s++)))&&a.push(h)}return a},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t)
var r=new o,i=[]
return t.forEach(function(n){for(var t in n)r.has(t)||i.push(r.add(t))}),[i.map(a).join(n)].concat(t.map(function(t){return i.map(function(n){return a(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(u).join("\n")},e},mo.csv=mo.dsv(",","text/csv"),mo.tsv=mo.dsv("\t","text/tab-separated-values")
var pu,du,vu,yu,mu,Mu=wo[a(wo,"requestAnimationFrame")]||function(n){setTimeout(n,17)}
mo.timer=function(n,t,e){var r=arguments.length
2>r&&(t=0),3>r&&(e=Date.now())
var i=e+t,o={callback:n,time:i,next:null}
du?du.next=o:pu=o,du=o,vu||(yu=clearTimeout(yu),vu=1,Mu(xn))},mo.timer.flush=function(){_n(),wn()}
var xu=[3,3],bu=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"].map(Sn)
mo.formatPrefix=function(n,t){var e=0
return n&&(0>n&&(n*=-1),t&&(n=mo.round(n,En(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((0>=e?e+1:e-1)/3)))),bu[8+e/3]},mo.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)},mo.format=function(n){var t=_u.exec(n),e=t[1]||" ",r=t[2]||">",i=t[3]||"",o=t[4]||"",u=t[5],a=+t[6],c=t[7],l=t[8],f=t[9],s=1,h="",g=!1
switch(l&&(l=+l.substring(1)),(u||"0"===e&&"="===r)&&(u=e="0",r="=",c&&(a-=Math.floor((a-1)/4))),f){case"n":c=!0,f="g"
break
case"%":s=100,h="%",f="f"
break
case"p":s=100,h="%",f="r"
break
case"b":case"o":case"x":case"X":"#"===o&&(o="0"+f.toLowerCase())
case"c":case"d":g=!0,l=0
break
case"s":s=-1,f="r"}"#"===o?o="":"$"===o&&(o="$"),"r"!=f||l||(f="g"),null!=l&&("g"==f?l=Math.max(1,Math.min(21,l)):("e"==f||"f"==f)&&(l=Math.max(0,Math.min(20,l)))),f=wu.get(f)||kn
var p=u&&c
return function(n){if(g&&n%1)return""
var t=0>n||0===n&&0>1/n?(n=-n,"-"):i
if(0>s){var d=mo.formatPrefix(n,l)
n=d.scale(n),h=d.symbol}else n*=s
n=f(n,l)
var v=n.lastIndexOf("."),y=0>v?n:n.substring(0,v),m=0>v?"":"."+n.substring(v+1)
!u&&c&&(y=Su(y))
var M=o.length+y.length+m.length+(p?0:t.length),x=a>M?new Array(M=a-M+1).join(e):""
return p&&(y=Su(x+y)),t+=o,n=y+m,("<"===r?t+n+x:">"===r?x+t+n:"^"===r?x.substring(0,M>>=1)+t+n+x.substring(M):t+(p?n:x+n))+h}}
var _u=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,wu=mo.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=mo.round(n,En(n,t))).toFixed(Math.max(0,Math.min(20,En(n*(1+1e-15),t))))}}),Su=vn
if(xu){var Eu=xu.length
Su=function(n){for(var t=n.length,e=[],r=0,i=xu[0];t>0&&i>0;)e.push(n.substring(t-=i,t+i)),i=xu[r=(r+1)%Eu]
return e.reverse().join(",")}}mo.geo={},Nn.prototype={s:0,t:0,add:function(n){An(n,this.t,ku),An(ku.s,this.s,this),this.s?this.t+=ku.t:this.s=ku.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}}
var ku=new Nn
mo.geo.stream=function(n,t){n&&Nu.hasOwnProperty(n.type)?Nu[n.type](n,t):Tn(n,t)}
var Nu={Feature:function(n,t){Tn(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,i=e.length;++r<i;)Tn(e[r].geometry,t)}},Au={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){qn(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)qn(e[r],t,0)},Polygon:function(n,t){zn(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)zn(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,i=e.length;++r<i;)Tn(e[r],t)}}
mo.geo.area=function(n){return Tu=0,mo.geo.stream(n,zu),Tu}
var Tu,qu=new Nn,zu={sphere:function(){Tu+=4*$o},point:c,lineStart:c,lineEnd:c,polygonStart:function(){qu.reset(),zu.lineStart=Cn},polygonEnd:function(){var n=2*qu
Tu+=0>n?4*$o+n:n,zu.lineStart=zu.lineEnd=zu.point=c}}
mo.geo.bounds=function(){function n(n,t){M.push(x=[f=n,h=n]),s>t&&(s=t),t>g&&(g=t)}function t(t,e){var r=Dn([t*Ko,e*Ko])
if(y){var i=Ln(y,r),o=[i[1],-i[0],0],u=Ln(o,i)
Pn(u),u=On(u)
var c=t-p,l=c>0?1:-1,d=u[0]*Qo*l,v=Math.abs(c)>180
if(v^(d>l*p&&l*t>d)){var m=u[1]*Qo
m>g&&(g=m)}else if(d=(d+360)%360-180,v^(d>l*p&&l*t>d)){var m=-u[1]*Qo
s>m&&(s=m)}else s>e&&(s=e),e>g&&(g=e)
v?p>t?a(f,t)>a(f,h)&&(h=t):a(t,h)>a(f,h)&&(f=t):h>=f?(f>t&&(f=t),t>h&&(h=t)):t>p?a(f,t)>a(f,h)&&(h=t):a(t,h)>a(f,h)&&(f=t)}else n(t,e)
y=r,p=t}function e(){b.point=t}function r(){x[0]=f,x[1]=h,b.point=n,y=null}function i(n,e){if(y){var r=n-p
m+=Math.abs(r)>180?r+(r>0?360:-360):r}else d=n,v=e
zu.point(n,e),t(n,e)}function o(){zu.lineStart()}function u(){i(d,v),zu.lineEnd(),Math.abs(m)>Jo&&(f=-(h=180)),x[0]=f,x[1]=h,y=null}function a(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function l(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var f,s,h,g,p,d,v,y,m,M,x,b={point:n,lineStart:e,lineEnd:r,polygonStart:function(){b.point=i,b.lineStart=o,b.lineEnd=u,m=0,zu.polygonStart()},polygonEnd:function(){zu.polygonEnd(),b.point=n,b.lineStart=e,b.lineEnd=r,0>qu?(f=-(h=180),s=-(g=90)):m>Jo?g=90:-Jo>m&&(s=-90),x[0]=f,x[1]=h}}
return function(n){g=h=-(f=s=1/0),M=[],mo.geo.stream(n,b)
var t=M.length
if(t){M.sort(c)
for(var e,r=1,i=M[0],o=[i];t>r;++r)e=M[r],l(e[0],i)||l(e[1],i)?(a(i[0],e[1])>a(i[0],i[1])&&(i[1]=e[1]),a(e[0],i[1])>a(i[0],i[1])&&(i[0]=e[0])):o.push(i=e)
for(var u,e,p=-1/0,t=o.length-1,r=0,i=o[t];t>=r;i=e,++r)e=o[r],(u=a(i[1],e[0]))>p&&(p=u,f=e[0],h=i[1])}return M=x=null,1/0===f||1/0===s?[[NaN,NaN],[NaN,NaN]]:[[f,s],[h,g]]}}(),mo.geo.centroid=function(n){Cu=Du=ju=Lu=Hu=Fu=Pu=Ou=Ru=Yu=Iu=0,mo.geo.stream(n,Uu)
var t=Ru,e=Yu,r=Iu,i=t*t+e*e+r*r
return Go>i&&(t=Fu,e=Pu,r=Ou,Jo>Du&&(t=ju,e=Lu,r=Hu),i=t*t+e*e+r*r,Go>i)?[NaN,NaN]:[Math.atan2(e,t)*Qo,O(r/Math.sqrt(i))*Qo]}
var Cu,Du,ju,Lu,Hu,Fu,Pu,Ou,Ru,Yu,Iu,Uu={sphere:c,point:Yn,lineStart:Un,lineEnd:Zn,polygonStart:function(){Uu.lineStart=Vn},polygonEnd:function(){Uu.lineStart=Un}},Zu=Wn(Xn,nt,et,[-$o,-$o/2]),Vu=1e9
mo.geo.clipExtent=function(){var n,t,e,r,i,o,u={stream:function(n){return i&&(i.valid=!1),i=o(n),i.valid=!0,i},extent:function(a){return arguments.length?(o=it(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1]),i&&(i.valid=!1,i=null),u):[[n,t],[e,r]]}}
return u.extent([[0,0],[960,500]])},(mo.geo.conicEqualArea=function(){return at(ct)}).raw=ct,mo.geo.albers=function(){return mo.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},mo.geo.albersUsa=function(){function n(n){var o=n[0],u=n[1]
return t=null,e(o,u),t||(r(o,u),t)||i(o,u),t}var t,e,r,i,o=mo.geo.albers(),u=mo.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=mo.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,e){t=[n,e]}}
return n.invert=function(n){var t=o.scale(),e=o.translate(),r=(n[0]-e[0])/t,i=(n[1]-e[1])/t
return(i>=.12&&.234>i&&r>=-.425&&-.214>r?u:i>=.166&&.234>i&&r>=-.214&&-.115>r?a:o).invert(n)},n.stream=function(n){var t=o.stream(n),e=u.stream(n),r=a.stream(n)
return{point:function(n,i){t.point(n,i),e.point(n,i),r.point(n,i)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(o.precision(t),u.precision(t),a.precision(t),n):o.precision()},n.scale=function(t){return arguments.length?(o.scale(t),u.scale(.35*t),a.scale(t),n.translate(o.translate())):o.scale()},n.translate=function(t){if(!arguments.length)return o.translate()
var l=o.scale(),f=+t[0],s=+t[1]
return e=o.translate(t).clipExtent([[f-.455*l,s-.238*l],[f+.455*l,s+.238*l]]).stream(c).point,r=u.translate([f-.307*l,s+.201*l]).clipExtent([[f-.425*l+Jo,s+.12*l+Jo],[f-.214*l-Jo,s+.234*l-Jo]]).stream(c).point,i=a.translate([f-.205*l,s+.212*l]).clipExtent([[f-.214*l+Jo,s+.166*l+Jo],[f-.115*l-Jo,s+.234*l-Jo]]).stream(c).point,n},n.scale(1070)}
var Xu,$u,Bu,Wu,Ju,Gu,Ku={point:c,lineStart:c,lineEnd:c,polygonStart:function(){$u=0,Ku.lineStart=lt},polygonEnd:function(){Ku.lineStart=Ku.lineEnd=Ku.point=c,Xu+=Math.abs($u/2)}},Qu={point:ft,lineStart:c,lineEnd:c,polygonStart:c,polygonEnd:c},na={point:gt,lineStart:pt,lineEnd:dt,polygonStart:function(){na.lineStart=vt},polygonEnd:function(){na.point=gt,na.lineStart=pt,na.lineEnd=dt}}
mo.geo.transform=function(n){return{stream:function(t){var e=new Mt(t)
for(var r in n)e[r]=n[r]
return e}}},Mt.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},mo.geo.path=function(){function n(n){return n&&("function"==typeof a&&o.pointRadius(+a.apply(this,arguments)),u&&u.valid||(u=i(o)),mo.geo.stream(n,u)),o.result()}function t(){return u=null,n}var e,r,i,o,u,a=4.5
return n.area=function(n){return Xu=0,mo.geo.stream(n,i(Ku)),Xu},n.centroid=function(n){return ju=Lu=Hu=Fu=Pu=Ou=Ru=Yu=Iu=0,mo.geo.stream(n,i(na)),Iu?[Ru/Iu,Yu/Iu]:Ou?[Fu/Ou,Pu/Ou]:Hu?[ju/Hu,Lu/Hu]:[NaN,NaN]},n.bounds=function(n){return Ju=Gu=-(Bu=Wu=1/0),mo.geo.stream(n,i(Qu)),[[Bu,Wu],[Ju,Gu]]},n.projection=function(n){return arguments.length?(i=(e=n)?n.stream||xt(n):vn,t()):e},n.context=function(n){return arguments.length?(o=null==(r=n)?new st:new yt(n),"function"!=typeof a&&o.pointRadius(a),t()):r},n.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(o.pointRadius(+t),+t),n):a},n.projection(mo.geo.albersUsa()).context(null)},mo.geo.projection=bt,mo.geo.projectionMutator=_t,(mo.geo.equirectangular=function(){return bt(St)}).raw=St.invert=St,mo.geo.rotation=function(n){function t(t){return t=n(t[0]*Ko,t[1]*Ko),t[0]*=Qo,t[1]*=Qo,t}return n=kt(n[0]%360*Ko,n[1]*Ko,n.length>2?n[2]*Ko:0),t.invert=function(t){return t=n.invert(t[0]*Ko,t[1]*Ko),t[0]*=Qo,t[1]*=Qo,t},t},Et.invert=St,mo.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=kt(-n[0]*Ko,-n[1]*Ko,0).invert,i=[]
return e(null,null,1,{point:function(n,e){i.push(n=t(n,e)),n[0]*=Qo,n[1]*=Qo}}),{type:"Polygon",coordinates:[i]}}var t,e,r=[0,0],i=6
return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=qt((t=+r)*Ko,i*Ko),n):t},n.precision=function(r){return arguments.length?(e=qt(t*Ko,(i=+r)*Ko),n):i},n.angle(90)},mo.geo.distance=function(n,t){var e,r=(t[0]-n[0])*Ko,i=n[1]*Ko,o=t[1]*Ko,u=Math.sin(r),a=Math.cos(r),c=Math.sin(i),l=Math.cos(i),f=Math.sin(o),s=Math.cos(o)
return Math.atan2(Math.sqrt((e=s*u)*e+(e=l*f-c*s*a)*e),c*f+l*s*a)},mo.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return mo.range(Math.ceil(o/v)*v,i,v).map(h).concat(mo.range(Math.ceil(l/y)*y,c,y).map(g)).concat(mo.range(Math.ceil(r/p)*p,e,p).filter(function(n){return Math.abs(n%v)>Jo}).map(f)).concat(mo.range(Math.ceil(a/d)*d,u,d).filter(function(n){return Math.abs(n%y)>Jo}).map(s))}var e,r,i,o,u,a,c,l,f,s,h,g,p=10,d=p,v=90,y=360,m=2.5
return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(o).concat(g(c).slice(1),h(i).reverse().slice(1),g(l).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(o=+t[0][0],i=+t[1][0],l=+t[0][1],c=+t[1][1],o>i&&(t=o,o=i,i=t),l>c&&(t=l,l=c,c=t),n.precision(m)):[[o,l],[i,c]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],a=+t[0][1],u=+t[1][1],r>e&&(t=r,r=e,e=t),a>u&&(t=a,a=u,u=t),n.precision(m)):[[r,a],[e,u]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(v=+t[0],y=+t[1],n):[v,y]},n.minorStep=function(t){return arguments.length?(p=+t[0],d=+t[1],n):[p,d]},n.precision=function(t){return arguments.length?(m=+t,f=Ct(a,u,90),s=Dt(r,e,m),h=Ct(l,c,90),g=Dt(o,i,m),n):m},n.majorExtent([[-180,-90+Jo],[180,90-Jo]]).minorExtent([[-180,-80-Jo],[180,80+Jo]])},mo.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||i.apply(this,arguments)]}}var t,e,r=jt,i=Lt
return n.distance=function(){return mo.geo.distance(t||r.apply(this,arguments),e||i.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(i=t,e="function"==typeof t?null:t,n):i},n.precision=function(){return arguments.length?n:0},n},mo.geo.interpolate=function(n,t){return Ht(n[0]*Ko,n[1]*Ko,t[0]*Ko,t[1]*Ko)},mo.geo.length=function(n){return ta=0,mo.geo.stream(n,ea),ta}
var ta,ea={sphere:c,point:c,lineStart:Ft,lineEnd:c,polygonStart:c,polygonEnd:c},ra=Pt(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(mo.geo.azimuthalEqualArea=function(){return bt(ra)}).raw=ra
var ia=Pt(function(n){var t=Math.acos(n)
return t&&t/Math.sin(t)},vn);(mo.geo.azimuthalEquidistant=function(){return bt(ia)}).raw=ia,(mo.geo.conicConformal=function(){return at(Ot)}).raw=Ot,(mo.geo.conicEquidistant=function(){return at(Rt)}).raw=Rt
var oa=Pt(function(n){return 1/n},Math.atan);(mo.geo.gnomonic=function(){return bt(oa)}).raw=oa,Yt.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Wo]},(mo.geo.mercator=function(){return It(Yt)}).raw=Yt
var ua=Pt(function(){return 1},Math.asin);(mo.geo.orthographic=function(){return bt(ua)}).raw=ua
var aa=Pt(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(mo.geo.stereographic=function(){return bt(aa)}).raw=aa,Ut.invert=function(n,t){return[Math.atan2(R(n),Math.cos(t)),O(Math.sin(t)/Y(n))]},(mo.geo.transverseMercator=function(){return It(Ut)}).raw=Ut,mo.geom={},mo.svg={},mo.svg.line=function(){return Zt(vn)}
var ca=mo.map({linear:$t,"linear-closed":Bt,step:Wt,"step-before":Jt,"step-after":Gt,basis:re,"basis-open":ie,"basis-closed":oe,bundle:ue,cardinal:ne,"cardinal-open":Kt,"cardinal-closed":Qt,monotone:he})
ca.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)})
var la=[0,2/3,1/3,0],fa=[0,1/3,2/3,0],sa=[0,1/6,2/3,1/6]
mo.geom.hull=function(n){function t(n){if(n.length<3)return[]
var t,i,o,u,a,c,l,f,s,h,g,p,d=dn(e),v=dn(r),y=n.length,m=y-1,M=[],x=[],b=0
if(d===Vt&&r===Xt)t=n
else for(o=0,t=[];y>o;++o)t.push([+d.call(this,i=n[o],o),+v.call(this,i,o)])
for(o=1;y>o;++o)(t[o][1]<t[b][1]||t[o][1]==t[b][1]&&t[o][0]<t[b][0])&&(b=o)
for(o=0;y>o;++o)o!==b&&(c=t[o][1]-t[b][1],a=t[o][0]-t[b][0],M.push({angle:Math.atan2(c,a),index:o}))
for(M.sort(function(n,t){return n.angle-t.angle}),g=M[0].angle,h=M[0].index,s=0,o=1;m>o;++o){if(u=M[o].index,g==M[o].angle){if(a=t[h][0]-t[b][0],c=t[h][1]-t[b][1],l=t[u][0]-t[b][0],f=t[u][1]-t[b][1],a*a+c*c>=l*l+f*f){M[o].index=-1
continue}M[s].index=-1}g=M[o].angle,s=o,h=u}for(x.push(b),o=0,u=0;2>o;++u)M[u].index>-1&&(x.push(M[u].index),o++)
for(p=x.length;m>u;++u)if(!(M[u].index<0)){for(;!ge(x[p-2],x[p-1],M[u].index,t);)--p
x[p++]=M[u].index}var _=[]
for(o=p-1;o>=0;--o)_.push(n[x[o]])
return _}var e=Vt,r=Xt
return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},mo.geom.polygon=function(n){return jo(n,ha),n}
var ha=mo.geom.polygon.prototype=[]
ha.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],i=0;++t<e;)n=r,r=this[t],i+=n[1]*r[0]-n[0]*r[1]
return.5*i},ha.centroid=function(n){var t,e,r=-1,i=this.length,o=0,u=0,a=this[i-1]
for(arguments.length||(n=-1/(6*this.area()));++r<i;)t=a,a=this[r],e=t[0]*a[1]-a[0]*t[1],o+=(t[0]+a[0])*e,u+=(t[1]+a[1])*e
return[o*n,u*n]},ha.clip=function(n){for(var t,e,r,i,o,u,a=ve(n),c=-1,l=this.length-ve(this),f=this[l-1];++c<l;){for(t=n.slice(),n.length=0,i=this[c],o=t[(r=t.length-a)-1],e=-1;++e<r;)u=t[e],pe(u,f,i)?(pe(o,f,i)||n.push(de(o,u,f,i)),n.push(u)):pe(o,f,i)&&n.push(de(o,u,f,i)),o=u
a&&n.push(n[0]),f=i}return n},mo.geom.delaunay=function(n){var t=n.map(function(){return[]}),e=[]
return ye(n,function(e){t[e.region.l.index].push(n[e.region.r.index])}),t.forEach(function(t,r){var i=n[r],o=i[0],u=i[1]
t.forEach(function(n){n.angle=Math.atan2(n[0]-o,n[1]-u)}),t.sort(function(n,t){return n.angle-t.angle})
for(var a=0,c=t.length-1;c>a;a++)e.push([i,t[a],t[a+1]])}),e},mo.geom.voronoi=function(n){function t(n){var t,o,u,a=n.map(function(){return[]}),c=dn(e),l=dn(r),f=n.length,s=1e6
if(c===Vt&&l===Xt)t=n
else for(t=new Array(f),u=0;f>u;++u)t[u]=[+c.call(this,o=n[u],u),+l.call(this,o,u)]
if(ye(t,function(n){var t,e,r,i,o,u
1===n.a&&n.b>=0?(t=n.ep.r,e=n.ep.l):(t=n.ep.l,e=n.ep.r),1===n.a?(o=t?t.y:-s,r=n.c-n.b*o,u=e?e.y:s,i=n.c-n.b*u):(r=t?t.x:-s,o=n.c-n.a*r,i=e?e.x:s,u=n.c-n.a*i)
var c=[r,o],l=[i,u]
a[n.region.l.index].push(c,l),a[n.region.r.index].push(c,l)}),a=a.map(function(n,e){var r=t[e][0],i=t[e][1],o=n.map(function(n){return Math.atan2(n[0]-r,n[1]-i)}),u=mo.range(n.length).sort(function(n,t){return o[n]-o[t]})
return u.filter(function(n,t){return!t||o[n]-o[u[t-1]]>Jo}).map(function(t){return n[t]})}),a.forEach(function(n,e){var r=n.length
if(!r)return n.push([-s,-s],[-s,s],[s,s],[s,-s])
if(!(r>2)){var i=t[e],o=n[0],u=n[1],a=i[0],c=i[1],l=o[0],f=o[1],h=u[0],g=u[1],p=Math.abs(h-l),d=g-f
if(Math.abs(d)<Jo){var v=f>c?-s:s
n.push([-s,v],[s,v])}else if(Jo>p){var y=l>a?-s:s
n.push([y,-s],[y,s])}else{var v=(l-a)*(g-f)>(h-l)*(f-c)?s:-s,m=Math.abs(d)-p
Math.abs(m)<Jo?n.push([0>d?v:-v,v]):(m>0&&(v*=-1),n.push([-s,v],[s,v]))}}}),i)for(u=0;f>u;++u)i.clip(a[u])
for(u=0;f>u;++u)a[u].point=n[u]
return a}var e=Vt,r=Xt,i=null
return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.clipExtent=function(n){if(!arguments.length)return i&&[i[0],i[2]]
if(null==n)i=null
else{var e=+n[0][0],r=+n[0][1],o=+n[1][0],u=+n[1][1]
i=mo.geom.polygon([[e,r],[e,u],[o,u],[o,r]])}return t},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):i&&i[2]},t.links=function(n){var t,i,o,u=n.map(function(){return[]}),a=[],c=dn(e),l=dn(r),f=n.length
if(c===Vt&&l===Xt)t=n
else for(t=new Array(f),o=0;f>o;++o)t[o]=[+c.call(this,i=n[o],o),+l.call(this,i,o)]
return ye(t,function(t){var e=t.region.l.index,r=t.region.r.index
u[e][r]||(u[e][r]=u[r][e]=!0,a.push({source:n[e],target:n[r]}))}),a},t.triangles=function(n){if(e===Vt&&r===Xt)return mo.geom.delaunay(n)
for(var t,i=new Array(c),o=dn(e),u=dn(r),a=-1,c=n.length;++a<c;)(i[a]=[+o.call(this,t=n[a],a),+u.call(this,t,a)]).data=t
return mo.geom.delaunay(i).map(function(n){return n.map(function(n){return n.data})})},t)}
var ga={l:"r",r:"l"}
mo.geom.quadtree=function(n,t,e,r,i){function o(n){function o(n,t,e,r,i,o,u,a){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var c=n.x,f=n.y
if(null!=c)if(Math.abs(c-e)+Math.abs(f-r)<.01)l(n,t,e,r,i,o,u,a)
else{var s=n.point
n.x=n.y=n.point=null,l(n,s,c,f,i,o,u,a),l(n,t,e,r,i,o,u,a)}else n.x=e,n.y=r,n.point=t}else l(n,t,e,r,i,o,u,a)}function l(n,t,e,r,i,u,a,c){var l=.5*(i+a),f=.5*(u+c),s=e>=l,h=r>=f,g=(h<<1)+s
n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=xe()),s?i=l:a=l,h?u=f:c=f,o(n,t,e,r,i,u,a,c)}var f,s,h,g,p,d,v,y,m,M=dn(a),x=dn(c)
if(null!=t)d=t,v=e,y=r,m=i
else if(y=m=-(d=v=1/0),s=[],h=[],p=n.length,u)for(g=0;p>g;++g)f=n[g],f.x<d&&(d=f.x),f.y<v&&(v=f.y),f.x>y&&(y=f.x),f.y>m&&(m=f.y),s.push(f.x),h.push(f.y)
else for(g=0;p>g;++g){var b=+M(f=n[g],g),_=+x(f,g)
d>b&&(d=b),v>_&&(v=_),b>y&&(y=b),_>m&&(m=_),s.push(b),h.push(_)}var w=y-d,S=m-v
w>S?m=v+w:y=d+S
var E=xe()
if(E.add=function(n){o(E,n,+M(n,++g),+x(n,g),d,v,y,m)},E.visit=function(n){be(n,E,d,v,y,m)},g=-1,null==t){for(;++g<p;)o(E,n[g],s[g],h[g],d,v,y,m);--g}else n.forEach(E.add)
return s=h=n=f=null,E}var u,a=Vt,c=Xt
return(u=arguments.length)?(a=me,c=Me,3===u&&(i=e,r=t,e=t=0),o(n)):(o.x=function(n){return arguments.length?(a=n,o):a},o.y=function(n){return arguments.length?(c=n,o):c},o.extent=function(n){return arguments.length?(null==n?t=e=r=i=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],i=+n[1][1]),o):null==t?null:[[t,e],[r,i]]},o.size=function(n){return arguments.length?(null==n?t=e=r=i=null:(t=e=0,r=+n[0],i=+n[1]),o):null==t?null:[r-t,i-e]},o)},mo.interpolateRgb=_e,mo.interpolateObject=we,mo.interpolateNumber=Se,mo.interpolateString=Ee
var pa=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g
mo.interpolate=ke,mo.interpolators=[function(n,t){var e=typeof t
return("string"===e?gu.has(t)||/^(#|rgb\(|hsl\()/.test(t)?_e:Ee:t instanceof Z?_e:"object"===e?Array.isArray(t)?Ne:we:Se)(n,t)}],mo.interpolateArray=Ne
var da=function(){return vn},va=mo.map({linear:da,poly:je,quad:function(){return ze},cubic:function(){return Ce},sin:function(){return Le},exp:function(){return He},circle:function(){return Fe},elastic:Pe,back:Oe,bounce:function(){return Re}}),ya=mo.map({in:vn,out:Te,"in-out":qe,"out-in":function(n){return qe(Te(n))}})
mo.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.substring(0,t):n,r=t>=0?n.substring(t+1):"in"
return e=va.get(e)||da,r=ya.get(r)||vn,Ae(r(e.apply(null,Array.prototype.slice.call(arguments,1))))},mo.interpolateHcl=Ye,mo.interpolateHsl=Ie,mo.interpolateLab=Ue,mo.interpolateRound=Ze,mo.transform=function(n){var t=bo.createElementNS(mo.ns.prefix.svg,"g")
return(mo.transform=function(n){if(null!=n){t.setAttribute("transform",n)
var e=t.transform.baseVal.consolidate()}return new Ve(e?e.matrix:ma)})(n)},Ve.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"}
var ma={a:1,b:0,c:0,d:1,e:0,f:0}
mo.interpolateTransform=We,mo.layout={},mo.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Ke(n[e]))
return t}},mo.layout.chord=function(){function n(){var n,l,s,h,g,p={},d=[],v=mo.range(o),y=[]
for(e=[],r=[],n=0,h=-1;++h<o;){for(l=0,g=-1;++g<o;)l+=i[h][g]
d.push(l),y.push(mo.range(o)),n+=l}for(u&&v.sort(function(n,t){return u(d[n],d[t])}),a&&y.forEach(function(n,t){n.sort(function(n,e){return a(i[t][n],i[t][e])})}),n=(Bo-f*o)/n,l=0,h=-1;++h<o;){for(s=l,g=-1;++g<o;){var m=v[h],M=y[m][g],x=i[m][M],b=l,_=l+=x*n
p[m+"-"+M]={index:m,subindex:M,startAngle:b,endAngle:_,value:x}}r[m]={index:m,startAngle:s,endAngle:l,value:(l-s)/n},l+=f}for(h=-1;++h<o;)for(g=h-1;++g<o;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){e.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,i,o,u,a,c,l={},f=0
return l.matrix=function(n){return arguments.length?(o=(i=n)&&i.length,e=r=null,l):i},l.padding=function(n){return arguments.length?(f=n,e=r=null,l):f},l.sortGroups=function(n){return arguments.length?(u=n,e=r=null,l):u},l.sortSubgroups=function(n){return arguments.length?(a=n,e=null,l):a},l.sortChords=function(n){return arguments.length?(c=n,e&&t(),l):c},l.chords=function(){return e||n(),e},l.groups=function(){return r||n(),r},l},mo.layout.force=function(){function n(n){return function(t,e,r,i){if(t.point!==n){var o=t.cx-n.x,u=t.cy-n.y,a=1/Math.sqrt(o*o+u*u)
if(d>(i-e)*a){var c=t.charge*a*a
return n.px-=o*c,n.py-=u*c,!0}if(t.point&&isFinite(a)){var c=t.pointCharge*a*a
n.px-=o*c,n.py-=u*c}}return!t.charge}}function t(n){n.px=mo.event.x,n.py=mo.event.y,a.resume()}var e,r,i,o,u,a={},c=mo.dispatch("start","tick","end"),l=[1,1],f=.9,s=Ma,h=xa,g=-30,p=.1,d=.8,v=[],y=[]
return a.tick=function(){if((r*=.99)<.005)return c.end({type:"end",alpha:r=0}),!0
var t,e,a,s,h,d,m,M,x,b=v.length,_=y.length
for(e=0;_>e;++e)a=y[e],s=a.source,h=a.target,M=h.x-s.x,x=h.y-s.y,(d=M*M+x*x)&&(d=r*o[e]*((d=Math.sqrt(d))-i[e])/d,M*=d,x*=d,h.x-=M*(m=s.weight/(h.weight+s.weight)),h.y-=x*m,s.x+=M*(m=1-m),s.y+=x*m)
if((m=r*p)&&(M=l[0]/2,x=l[1]/2,e=-1,m))for(;++e<b;)a=v[e],a.x+=(M-a.x)*m,a.y+=(x-a.y)*m
if(g)for(or(t=mo.geom.quadtree(v),r,u),e=-1;++e<b;)(a=v[e]).fixed||t.visit(n(a))
for(e=-1;++e<b;)a=v[e],a.fixed?(a.x=a.px,a.y=a.py):(a.x-=(a.px-(a.px=a.x))*f,a.y-=(a.py-(a.py=a.y))*f)
c.tick({type:"tick",alpha:r})},a.nodes=function(n){return arguments.length?(v=n,a):v},a.links=function(n){return arguments.length?(y=n,a):y},a.size=function(n){return arguments.length?(l=n,a):l},a.linkDistance=function(n){return arguments.length?(s="function"==typeof n?n:+n,a):s},a.distance=a.linkDistance,a.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,a):h},a.friction=function(n){return arguments.length?(f=+n,a):f},a.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,a):g},a.gravity=function(n){return arguments.length?(p=+n,a):p},a.theta=function(n){return arguments.length?(d=+n,a):d},a.alpha=function(n){return arguments.length?(n=+n,r?r=n>0?n:0:n>0&&(c.start({type:"start",alpha:r=n}),mo.timer(a.tick)),a):r},a.start=function(){function n(n,e){for(var r,i=t(),o=-1,u=i.length;++o<u;)if(!isNaN(r=i[o][n]))return r
return Math.random()*e}function t(){if(!c){for(c=[],r=0;p>r;++r)c[r]=[]
for(r=0;d>r;++r){var n=y[r]
c[n.source.index].push(n.target),c[n.target.index].push(n.source)}}return c[e]}var e,r,c,f,p=v.length,d=y.length,m=l[0],M=l[1]
for(e=0;p>e;++e)(f=v[e]).index=e,f.weight=0
for(e=0;d>e;++e)f=y[e],"number"==typeof f.source&&(f.source=v[f.source]),"number"==typeof f.target&&(f.target=v[f.target]),++f.source.weight,++f.target.weight
for(e=0;p>e;++e)f=v[e],isNaN(f.x)&&(f.x=n("x",m)),isNaN(f.y)&&(f.y=n("y",M)),isNaN(f.px)&&(f.px=f.x),isNaN(f.py)&&(f.py=f.y)
if(i=[],"function"==typeof s)for(e=0;d>e;++e)i[e]=+s.call(this,y[e],e)
else for(e=0;d>e;++e)i[e]=s
if(o=[],"function"==typeof h)for(e=0;d>e;++e)o[e]=+h.call(this,y[e],e)
else for(e=0;d>e;++e)o[e]=h
if(u=[],"function"==typeof g)for(e=0;p>e;++e)u[e]=+g.call(this,v[e],e)
else for(e=0;p>e;++e)u[e]=g
return a.resume()},a.resume=function(){return a.alpha(.1)},a.stop=function(){return a.alpha(0)},a.drag=function(){return e||(e=mo.behavior.drag().origin(vn).on("dragstart.force",tr).on("drag.force",t).on("dragend.force",er)),arguments.length?void this.on("mouseover.force",rr).on("mouseout.force",ir).call(e):e},mo.rebind(a,c,"on")}
var Ma=20,xa=1
mo.layout.hierarchy=function(){function n(t,u,a){var c=i.call(e,t,u)
if(t.depth=u,a.push(t),c&&(l=c.length)){for(var l,f,s=-1,h=t.children=[],g=0,p=u+1;++s<l;)f=n(c[s],p,a),f.parent=t,h.push(f),g+=f.value
r&&h.sort(r),o&&(t.value=g)}else o&&(t.value=+o.call(e,t,u)||0)
return t}function t(n,r){var i=n.children,u=0
if(i&&(a=i.length))for(var a,c=-1,l=r+1;++c<a;)u+=t(i[c],l)
else o&&(u=+o.call(e,n,r)||0)
return o&&(n.value=u),u}function e(t){var e=[]
return n(t,0,e),e}var r=lr,i=ar,o=cr
return e.sort=function(n){return arguments.length?(r=n,e):r},e.children=function(n){return arguments.length?(i=n,e):i},e.value=function(n){return arguments.length?(o=n,e):o},e.revalue=function(n){return t(n,0),n},e},mo.layout.partition=function(){function n(t,e,r,i){var o=t.children
if(t.x=e,t.y=t.depth*i,t.dx=r,t.dy=i,o&&(u=o.length)){var u,a,c,l=-1
for(r=t.value?r/t.value:0;++l<u;)n(a=o[l],e,c=a.value*r,i),e+=c}}function t(n){var e=n.children,r=0
if(e&&(i=e.length))for(var i,o=-1;++o<i;)r=Math.max(r,t(e[o]))
return 1+r}function e(e,o){var u=r.call(this,e,o)
return n(u[0],0,i[0],i[1]/t(u[0])),u}var r=mo.layout.hierarchy(),i=[1,1]
return e.size=function(n){return arguments.length?(i=n,e):i},ur(e,r)},mo.layout.pie=function(){function n(o){var u=o.map(function(e,r){return+t.call(n,e,r)}),a=+("function"==typeof r?r.apply(this,arguments):r),c=(("function"==typeof i?i.apply(this,arguments):i)-a)/mo.sum(u),l=mo.range(o.length)
null!=e&&l.sort(e===ba?function(n,t){return u[t]-u[n]}:function(n,t){return e(o[n],o[t])})
var f=[]
return l.forEach(function(n){var t
f[n]={data:o[n],value:t=u[n],startAngle:a,endAngle:a+=t*c}}),f}var t=Number,e=ba,r=0,i=Bo
return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(i=t,n):i},n}
var ba={}
mo.layout.stack=function(){function n(a,c){var l=a.map(function(e,r){return t.call(n,e,r)}),f=l.map(function(t){return t.map(function(t,e){return[o.call(n,t,e),u.call(n,t,e)]})}),s=e.call(n,f,c)
l=mo.permute(l,s),f=mo.permute(f,s)
var h,g,p,d=r.call(n,f,c),v=l.length,y=l[0].length
for(g=0;y>g;++g)for(i.call(n,l[0][g],p=d[g],f[0][g][1]),h=1;v>h;++h)i.call(n,l[h][g],p+=f[h-1][g][1],f[h][g][1])
return a}var t=vn,e=pr,r=dr,i=gr,o=sr,u=hr
return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:_a.get(t)||pr,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:wa.get(t)||dr,n):r},n.x=function(t){return arguments.length?(o=t,n):o},n.y=function(t){return arguments.length?(u=t,n):u},n.out=function(t){return arguments.length?(i=t,n):i},n}
var _a=mo.map({"inside-out":function(n){var t,e,r=n.length,i=n.map(vr),o=n.map(yr),u=mo.range(r).sort(function(n,t){return i[n]-i[t]}),a=0,c=0,l=[],f=[]
for(t=0;r>t;++t)e=u[t],c>a?(a+=o[e],l.push(e)):(c+=o[e],f.push(e))
return f.reverse().concat(l)},reverse:function(n){return mo.range(n.length).reverse()},default:pr}),wa=mo.map({silhouette:function(n){var t,e,r,i=n.length,o=n[0].length,u=[],a=0,c=[]
for(e=0;o>e;++e){for(t=0,r=0;i>t;t++)r+=n[t][e][1]
r>a&&(a=r),u.push(r)}for(e=0;o>e;++e)c[e]=(a-u[e])/2
return c},wiggle:function(n){var t,e,r,i,o,u,a,c,l,f=n.length,s=n[0],h=s.length,g=[]
for(g[0]=c=l=0,e=1;h>e;++e){for(t=0,i=0;f>t;++t)i+=n[t][e][1]
for(t=0,o=0,a=s[e][0]-s[e-1][0];f>t;++t){for(r=0,u=(n[t][e][1]-n[t][e-1][1])/(2*a);t>r;++r)u+=(n[r][e][1]-n[r][e-1][1])/a
o+=u*n[t][e][1]}g[e]=c-=i?o/i*a:0,l>c&&(l=c)}for(e=0;h>e;++e)g[e]-=l
return g},expand:function(n){var t,e,r,i=n.length,o=n[0].length,u=1/i,a=[]
for(e=0;o>e;++e){for(t=0,r=0;i>t;t++)r+=n[t][e][1]
if(r)for(t=0;i>t;t++)n[t][e][1]/=r
else for(t=0;i>t;t++)n[t][e][1]=u}for(e=0;o>e;++e)a[e]=0
return a},zero:dr})
mo.layout.histogram=function(){function n(n,o){for(var u,a,c=[],l=n.map(e,this),f=r.call(this,l,o),s=i.call(this,f,l,o),o=-1,h=l.length,g=s.length-1,p=t?1:1/h;++o<g;)u=c[o]=[],u.dx=s[o+1]-(u.x=s[o]),u.y=0
if(g>0)for(o=-1;++o<h;)(a=l[o])>=f[0]&&a<=f[1]&&(u=c[mo.bisect(s,a,1,g)-1],u.y+=p,u.push(n[o]))
return c}var t=!0,e=Number,r=br,i=Mr
return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=dn(t),n):r},n.bins=function(t){return arguments.length?(i="number"==typeof t?function(n){return xr(n,t)}:dn(t),n):i},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},mo.layout.tree=function(){function n(n,o){function u(n,t){var r=n.children,i=n._tree
if(r&&(o=r.length)){for(var o,a,l,f=r[0],s=f,h=-1;++h<o;)l=r[h],u(l,a),s=c(l,a,s),a=l
qr(n)
var g=.5*(f._tree.prelim+l._tree.prelim)
t?(i.prelim=t._tree.prelim+e(n,t),i.mod=i.prelim-g):i.prelim=g}else t&&(i.prelim=t._tree.prelim+e(n,t))}function a(n,t){n.x=n._tree.prelim+t
var e=n.children
if(e&&(r=e.length)){var r,i=-1
for(t+=n._tree.mod;++i<r;)a(e[i],t)}}function c(n,t,r){if(t){for(var i,o=n,u=n,a=t,c=n.parent.children[0],l=o._tree.mod,f=u._tree.mod,s=a._tree.mod,h=c._tree.mod;a=Sr(a),o=wr(o),a&&o;)c=wr(c),u=Sr(u),u._tree.ancestor=n,i=a._tree.prelim+s-o._tree.prelim-l+e(a,o),i>0&&(zr(Cr(a,n,r),n,i),l+=i,f+=i),s+=a._tree.mod,l+=o._tree.mod,h+=c._tree.mod,f+=u._tree.mod
a&&!Sr(u)&&(u._tree.thread=a,u._tree.mod+=s-f),o&&!wr(c)&&(c._tree.thread=o,c._tree.mod+=l-h,r=n)}return r}var l=t.call(this,n,o),f=l[0]
Tr(f,function(n,t){n._tree={ancestor:n,prelim:0,mod:0,change:0,shift:0,number:t?t._tree.number+1:0}}),u(f),a(f,-f._tree.prelim)
var s=Er(f,Nr),h=Er(f,kr),g=Er(f,Ar),p=s.x-e(s,h)/2,d=h.x+e(h,s)/2,v=g.depth||1
return Tr(f,i?function(n){n.x*=r[0],n.y=n.depth*r[1],delete n._tree}:function(n){n.x=(n.x-p)/(d-p)*r[0],n.y=n.depth/v*r[1],delete n._tree}),l}var t=mo.layout.hierarchy().sort(null).value(null),e=_r,r=[1,1],i=!1
return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(i=null==(r=t),n):i?null:r},n.nodeSize=function(t){return arguments.length?(i=null!=(r=t),n):i?r:null},ur(n,t)},mo.layout.pack=function(){function n(n,o){var u=e.call(this,n,o),a=u[0],c=i[0],l=i[1],f=null==t?Math.sqrt:"function"==typeof t?t:function(){return t}
if(a.x=a.y=0,Tr(a,function(n){n.r=+f(n.value)}),Tr(a,Fr),r){var s=r*(t?1:Math.max(2*a.r/c,2*a.r/l))/2
Tr(a,function(n){n.r+=s}),Tr(a,Fr),Tr(a,function(n){n.r-=s})}return Rr(a,c/2,l/2,t?1:1/Math.max(2*a.r/c,2*a.r/l)),u}var t,e=mo.layout.hierarchy().sort(Dr),r=0,i=[1,1]
return n.size=function(t){return arguments.length?(i=t,n):i},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},ur(n,e)},mo.layout.cluster=function(){function n(n,o){var u,a=t.call(this,n,o),c=a[0],l=0
Tr(c,function(n){var t=n.children
t&&t.length?(n.x=Ur(t),n.y=Ir(t)):(n.x=u?l+=e(n,u):0,n.y=0,u=n)})
var f=Zr(c),s=Vr(c),h=f.x-e(f,s)/2,g=s.x+e(s,f)/2
return Tr(c,i?function(n){n.x=(n.x-c.x)*r[0],n.y=(c.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(g-h)*r[0],n.y=(1-(c.y?n.y/c.y:1))*r[1]}),a}var t=mo.layout.hierarchy().sort(null).value(null),e=_r,r=[1,1],i=!1
return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(i=null==(r=t),n):i?null:r},n.nodeSize=function(t){return arguments.length?(i=null!=(r=t),n):i?r:null},ur(n,t)},mo.layout.treemap=function(){function n(n,t){for(var e,r,i=-1,o=n.length;++i<o;)r=(e=n[i]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var o=e.children
if(o&&o.length){var u,a,c,l=s(e),f=[],h=o.slice(),p=1/0,d="slice"===g?l.dx:"dice"===g?l.dy:"slice-dice"===g?1&e.depth?l.dy:l.dx:Math.min(l.dx,l.dy)
for(n(h,l.dx*l.dy/e.value),f.area=0;(c=h.length)>0;)f.push(u=h[c-1]),f.area+=u.area,"squarify"!==g||(a=r(f,d))<=p?(h.pop(),p=a):(f.area-=f.pop().area,i(f,d,l,!1),d=Math.min(l.dx,l.dy),f.length=f.area=0,p=1/0)
f.length&&(i(f,d,l,!0),f.length=f.area=0),o.forEach(t)}}function e(t){var r=t.children
if(r&&r.length){var o,u=s(t),a=r.slice(),c=[]
for(n(a,u.dx*u.dy/t.value),c.area=0;o=a.pop();)c.push(o),c.area+=o.area,null!=o.z&&(i(c,o.z?u.dx:u.dy,u,!a.length),c.length=c.area=0)
r.forEach(e)}}function r(n,t){for(var e,r=n.area,i=0,o=1/0,u=-1,a=n.length;++u<a;)(e=n[u].area)&&(o>e&&(o=e),e>i&&(i=e))
return r*=r,t*=t,r?Math.max(t*i*p/r,r/(t*o*p)):1/0}function i(n,t,e,r){var i,o=-1,u=n.length,a=e.x,l=e.y,f=t?c(n.area/t):0
if(t==e.dx){for((r||f>e.dy)&&(f=e.dy);++o<u;)i=n[o],i.x=a,i.y=l,i.dy=f,a+=i.dx=Math.min(e.x+e.dx-a,f?c(i.area/f):0)
i.z=!0,i.dx+=e.x+e.dx-a,e.y+=f,e.dy-=f}else{for((r||f>e.dx)&&(f=e.dx);++o<u;)i=n[o],i.x=a,i.y=l,i.dx=f,l+=i.dy=Math.min(e.y+e.dy-l,f?c(i.area/f):0)
i.z=!1,i.dy+=e.y+e.dy-l,e.x+=f,e.dx-=f}}function o(r){var i=u||a(r),o=i[0]
return o.x=0,o.y=0,o.dx=l[0],o.dy=l[1],u&&a.revalue(o),n([o],o.dx*o.dy/o.value),(u?e:t)(o),h&&(u=i),i}var u,a=mo.layout.hierarchy(),c=Math.round,l=[1,1],f=null,s=Xr,h=!1,g="squarify",p=.5*(1+Math.sqrt(5))
return o.size=function(n){return arguments.length?(l=n,o):l},o.padding=function(n){function t(t){var e=n.call(o,t,t.depth)
return null==e?Xr(t):$r(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return $r(t,n)}if(!arguments.length)return f
var r
return s=null==(f=n)?Xr:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,o},o.round=function(n){return arguments.length?(c=n?Math.round:Number,o):c!=Number},o.sticky=function(n){return arguments.length?(h=n,u=null,o):h},o.ratio=function(n){return arguments.length?(p=n,o):p},o.mode=function(n){return arguments.length?(g=n+"",o):g},ur(o,a)},mo.random={normal:function(n,t){var e=arguments.length
return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,i
do{e=2*Math.random()-1,r=2*Math.random()-1,i=e*e+r*r}while(!i||i>1)
return n+t*e*Math.sqrt(-2*Math.log(i)/i)}},logNormal:function(){var n=mo.random.normal.apply(mo,arguments)
return function(){return Math.exp(n())}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random()
return t/n}}},mo.scale={}
var Sa={floor:vn,ceil:vn}
mo.scale.linear=function(){return ni([0,1],[0,1],ke,!1)},mo.scale.log=function(){return ui(mo.scale.linear().domain([0,1]),10,!0,[1,10])}
var Ea=mo.format(".0e"),ka={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}}
mo.scale.pow=function(){return ai(mo.scale.linear(),1,[0,1])},mo.scale.sqrt=function(){return mo.scale.pow().exponent(.5)},mo.scale.ordinal=function(){return li([],{t:"range",a:[[]]})},mo.scale.category10=function(){return mo.scale.ordinal().range(Na)},mo.scale.category20=function(){return mo.scale.ordinal().range(Aa)},mo.scale.category20b=function(){return mo.scale.ordinal().range(Ta)},mo.scale.category20c=function(){return mo.scale.ordinal().range(qa)}
var Na=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(un),Aa=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(un),Ta=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(un),qa=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(un)
mo.scale.quantile=function(){return fi([],[])},mo.scale.quantize=function(){return si(0,1,[0,1])},mo.scale.threshold=function(){return hi([.5],[0,1])},mo.scale.identity=function(){return gi([0,1])},mo.svg.arc=function(){function n(){var n=t.apply(this,arguments),o=e.apply(this,arguments),u=r.apply(this,arguments)+za,a=i.apply(this,arguments)+za,c=(u>a&&(c=u,u=a,a=c),a-u),l=$o>c?"0":"1",f=Math.cos(u),s=Math.sin(u),h=Math.cos(a),g=Math.sin(a)
return c>=Ca?n?"M0,"+o+"A"+o+","+o+" 0 1,1 0,"+-o+"A"+o+","+o+" 0 1,1 0,"+o+"M0,"+n+"A"+n+","+n+" 0 1,0 0,"+-n+"A"+n+","+n+" 0 1,0 0,"+n+"Z":"M0,"+o+"A"+o+","+o+" 0 1,1 0,"+-o+"A"+o+","+o+" 0 1,1 0,"+o+"Z":n?"M"+o*f+","+o*s+"A"+o+","+o+" 0 "+l+",1 "+o*h+","+o*g+"L"+n*h+","+n*g+"A"+n+","+n+" 0 "+l+",0 "+n*f+","+n*s+"Z":"M"+o*f+","+o*s+"A"+o+","+o+" 0 "+l+",1 "+o*h+","+o*g+"L0,0Z"}var t=pi,e=di,r=vi,i=yi
return n.innerRadius=function(e){return arguments.length?(t=dn(e),n):t},n.outerRadius=function(t){return arguments.length?(e=dn(t),n):e},n.startAngle=function(t){return arguments.length?(r=dn(t),n):r},n.endAngle=function(t){return arguments.length?(i=dn(t),n):i},n.centroid=function(){var n=(t.apply(this,arguments)+e.apply(this,arguments))/2,o=(r.apply(this,arguments)+i.apply(this,arguments))/2+za
return[Math.cos(o)*n,Math.sin(o)*n]},n}
var za=-Wo,Ca=Bo-Jo
mo.svg.line.radial=function(){var n=Zt(mi)
return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},Jt.reverse=Gt,Gt.reverse=Jt,mo.svg.area=function(){return Mi(vn)},mo.svg.area.radial=function(){var n=Mi(mi)
return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},mo.svg.chord=function(){function n(n,a){var c=t(this,o,n,a),l=t(this,u,n,a)
return"M"+c.p0+r(c.r,c.p1,c.a1-c.a0)+(e(c,l)?i(c.r,c.p1,c.r,c.p0):i(c.r,c.p1,l.r,l.p0)+r(l.r,l.p1,l.a1-l.a0)+i(l.r,l.p1,c.r,c.p0))+"Z"}function t(n,t,e,r){var i=t.call(n,e,r),o=a.call(n,i,r),u=c.call(n,i,r)+za,f=l.call(n,i,r)+za
return{r:o,a0:u,a1:f,p0:[o*Math.cos(u),o*Math.sin(u)],p1:[o*Math.cos(f),o*Math.sin(f)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>$o)+",1 "+t}function i(n,t,e,r){return"Q 0,0 "+r}var o=jt,u=Lt,a=xi,c=vi,l=yi
return n.radius=function(t){return arguments.length?(a=dn(t),n):a},n.source=function(t){return arguments.length?(o=dn(t),n):o},n.target=function(t){return arguments.length?(u=dn(t),n):u},n.startAngle=function(t){return arguments.length?(c=dn(t),n):c},n.endAngle=function(t){return arguments.length?(l=dn(t),n):l},n},mo.svg.diagonal=function(){function n(n,i){var o=t.call(this,n,i),u=e.call(this,n,i),a=(o.y+u.y)/2,c=[o,{x:o.x,y:a},{x:u.x,y:a},u]
return c=c.map(r),"M"+c[0]+"C"+c[1]+" "+c[2]+" "+c[3]}var t=jt,e=Lt,r=bi
return n.source=function(e){return arguments.length?(t=dn(e),n):t},n.target=function(t){return arguments.length?(e=dn(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},mo.svg.diagonal.radial=function(){var n=mo.svg.diagonal(),t=bi,e=n.projection
return n.projection=function(n){return arguments.length?e(_i(t=n)):t},n},mo.svg.symbol=function(){function n(n,r){return(Da.get(t.call(this,n,r))||Ei)(e.call(this,n,r))}var t=Si,e=wi
return n.type=function(e){return arguments.length?(t=dn(e),n):t},n.size=function(t){return arguments.length?(e=dn(t),n):e},n}
var Da=mo.map({circle:Ei,cross:function(n){var t=Math.sqrt(n/5)/2
return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*Fa)),e=t*Fa
return"M0,"+-t+"L"+e+",0 0,"+t+" "+-e+",0Z"},square:function(n){var t=Math.sqrt(n)/2
return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/Ha),e=t*Ha/2
return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/Ha),e=t*Ha/2
return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}})
mo.svg.symbolTypes=Da.keys()
var ja,La,Ha=Math.sqrt(3),Fa=Math.tan(30*Ko),Pa=[],Oa=0
Pa.call=Oo.call,Pa.empty=Oo.empty,Pa.node=Oo.node,Pa.size=Oo.size,mo.transition=function(n){return arguments.length?ja?n.transition():n:Io.transition()},mo.transition.prototype=Pa,Pa.select=function(n){var t,e,r,i=this.id,o=[]
n=d(n)
for(var u=-1,a=this.length;++u<a;){o.push(t=[])
for(var c=this[u],l=-1,f=c.length;++l<f;)(r=c[l])&&(e=n.call(r,r.__data__,l,u))?("__data__"in r&&(e.__data__=r.__data__),Ti(e,l,i,r.__transition__[i]),t.push(e)):t.push(null)}return ki(o,i)},Pa.selectAll=function(n){var t,e,r,i,o,u=this.id,a=[]
n=v(n)
for(var c=-1,l=this.length;++c<l;)for(var f=this[c],s=-1,h=f.length;++s<h;)if(r=f[s]){o=r.__transition__[u],e=n.call(r,r.__data__,s,c),a.push(t=[])
for(var g=-1,p=e.length;++g<p;)(i=e[g])&&Ti(i,g,u,o),t.push(i)}return ki(a,u)},Pa.filter=function(n){var t,e,r,i=[]
"function"!=typeof n&&(n=k(n))
for(var o=0,u=this.length;u>o;o++){i.push(t=[])
for(var e=this[o],a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a)&&t.push(r)}return ki(i,this.id)},Pa.tween=function(n,t){var e=this.id
return arguments.length<2?this.node().__transition__[e].tween.get(n):A(this,null==t?function(t){t.__transition__[e].tween.remove(n)}:function(r){r.__transition__[e].tween.set(n,t)})},Pa.attr=function(n,t){function e(){this.removeAttribute(a)}function r(){this.removeAttributeNS(a.space,a.local)}function i(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(a)
return e!==n&&(t=u(e,n),function(n){this.setAttribute(a,t(n))})})}function o(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(a.space,a.local)
return e!==n&&(t=u(e,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t])
return this}var u="transform"==n?We:ke,a=mo.ns.qualify(n)
return Ni(this,"attr."+n,t,a.local?o:i)},Pa.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(i))
return r&&function(n){this.setAttribute(i,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(i.space,i.local))
return r&&function(n){this.setAttributeNS(i.space,i.local,r(n))}}var i=mo.ns.qualify(n)
return this.tween("attr."+n,i.local?r:e)},Pa.style=function(n,t,e){function r(){this.style.removeProperty(n)}function i(t){return null==t?r:(t+="",function(){var r,i=wo.getComputedStyle(this,null).getPropertyValue(n)
return i!==t&&(r=ke(i,t),function(t){this.style.setProperty(n,r(t),e)})})}var o=arguments.length
if(3>o){if("string"!=typeof n){2>o&&(t="")
for(e in n)this.style(e,n[e],t)
return this}e=""}return Ni(this,"style."+n,t,i)},Pa.styleTween=function(n,t,e){function r(r,i){var o=t.call(this,r,i,wo.getComputedStyle(this,null).getPropertyValue(n))
return o&&function(t){this.style.setProperty(n,o(t),e)}}return arguments.length<3&&(e=""),this.tween("style."+n,r)},Pa.text=function(n){return Ni(this,"text",n,Ai)},Pa.remove=function(){return this.each("end.transition",function(){var n
this.__transition__.count<2&&(n=this.parentNode)&&n.removeChild(this)})},Pa.ease=function(n){var t=this.id
return arguments.length<1?this.node().__transition__[t].ease:("function"!=typeof n&&(n=mo.ease.apply(mo,arguments)),A(this,function(e){e.__transition__[t].ease=n}))},Pa.delay=function(n){var t=this.id
return A(this,"function"==typeof n?function(e,r,i){e.__transition__[t].delay=+n.call(e,e.__data__,r,i)}:(n=+n,function(e){e.__transition__[t].delay=n}))},Pa.duration=function(n){var t=this.id
return A(this,"function"==typeof n?function(e,r,i){e.__transition__[t].duration=Math.max(1,n.call(e,e.__data__,r,i))}:(n=Math.max(1,n),function(e){e.__transition__[t].duration=n}))},Pa.each=function(n,t){var e=this.id
if(arguments.length<2){var r=La,i=ja
ja=e,A(this,function(t,r,i){La=t.__transition__[e],n.call(t,t.__data__,r,i)}),La=r,ja=i}else A(this,function(r){var i=r.__transition__[e];(i.event||(i.event=mo.dispatch("start","end"))).on(n,t)})
return this},Pa.transition=function(){for(var n,t,e,r,i=this.id,o=++Oa,u=[],a=0,c=this.length;c>a;a++){u.push(n=[])
for(var t=this[a],l=0,f=t.length;f>l;l++)(e=t[l])&&(r=Object.create(e.__transition__[i]),r.delay+=r.duration,Ti(e,l,o,r)),n.push(e)}return ki(u,o)},mo.svg.axis=function(){function n(n){n.each(function(){var n,l=mo.select(this),f=this.__chart__||e,s=this.__chart__=e.copy(),h=null==c?s.ticks?s.ticks.apply(s,a):s.domain():c,g=null==t?s.tickFormat?s.tickFormat.apply(s,a):vn:t,p=l.selectAll(".tick").data(h,s),d=p.enter().insert("g",".domain").attr("class","tick").style("opacity",Jo),v=mo.transition(p.exit()).style("opacity",Jo).remove(),y=mo.transition(p).style("opacity",1),m=Wr(s),M=l.selectAll(".domain").data([0]),x=(M.enter().append("path").attr("class","domain"),mo.transition(M))
d.append("line"),d.append("text")
var b=d.select("line"),_=y.select("line"),w=p.select("text").text(g),S=d.select("text"),E=y.select("text")
switch(r){case"bottom":n=qi,b.attr("y2",i),S.attr("y",Math.max(i,0)+u),_.attr("x2",0).attr("y2",i),E.attr("x",0).attr("y",Math.max(i,0)+u),w.attr("dy",".71em").style("text-anchor","middle"),x.attr("d","M"+m[0]+","+o+"V0H"+m[1]+"V"+o)
break
case"top":n=qi,b.attr("y2",-i),S.attr("y",-(Math.max(i,0)+u)),_.attr("x2",0).attr("y2",-i),E.attr("x",0).attr("y",-(Math.max(i,0)+u)),w.attr("dy","0em").style("text-anchor","middle"),x.attr("d","M"+m[0]+","+-o+"V0H"+m[1]+"V"+-o)
break
case"left":n=zi,b.attr("x2",-i),S.attr("x",-(Math.max(i,0)+u)),_.attr("x2",-i).attr("y2",0),E.attr("x",-(Math.max(i,0)+u)).attr("y",0),w.attr("dy",".32em").style("text-anchor","end"),x.attr("d","M"+-o+","+m[0]+"H0V"+m[1]+"H"+-o)
break
case"right":n=zi,b.attr("x2",i),S.attr("x",Math.max(i,0)+u),_.attr("x2",i).attr("y2",0),E.attr("x",Math.max(i,0)+u).attr("y",0),w.attr("dy",".32em").style("text-anchor","start"),x.attr("d","M"+o+","+m[0]+"H0V"+m[1]+"H"+o)}if(s.rangeBand){var k=s.rangeBand()/2,N=function(n){return s(n)+k}
d.call(n,N),y.call(n,N)}else d.call(n,f),y.call(n,s),v.call(n,s)})}var t,e=mo.scale.linear(),r=Ra,i=6,o=6,u=3,a=[10],c=null
return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Ya?t+"":Ra,n):r},n.ticks=function(){return arguments.length?(a=arguments,n):a},n.tickValues=function(t){return arguments.length?(c=t,n):c},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length
return e?(i=+t,o=+arguments[e-1],n):i},n.innerTickSize=function(t){return arguments.length?(i=+t,n):i},n.outerTickSize=function(t){return arguments.length?(o=+t,n):o},n.tickPadding=function(t){return arguments.length?(u=+t,n):u},n.tickSubdivide=function(){return arguments.length&&n},n}
var Ra="bottom",Ya={top:1,right:1,bottom:1,left:1}
mo.svg.brush=function(){function n(o){o.each(function(){var o=mo.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",i).on("touchstart.brush",i),u=o.selectAll(".background").data([0])
u.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),o.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move")
var a=o.selectAll(".resize").data(v,vn)
a.exit().remove(),a.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return Ia[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),a.style("display",n.empty()?"none":null)
var f,s=mo.transition(o),h=mo.transition(u)
c&&(f=Wr(c),h.attr("x",f[0]).attr("width",f[1]-f[0]),e(s)),l&&(f=Wr(l),h.attr("y",f[0]).attr("height",f[1]-f[0]),r(s)),t(s)})}function t(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+f[+/e$/.test(n)]+","+h[+/^s/.test(n)]+")"})}function e(n){n.select(".extent").attr("x",f[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",f[1]-f[0])}function r(n){n.select(".extent").attr("y",h[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",h[1]-h[0])}function i(){function i(){32==mo.event.keyCode&&(A||(M=null,q[0]-=f[1],q[1]-=h[1],A=2),s())}function g(){32==mo.event.keyCode&&2==A&&(q[0]+=f[1],q[1]+=h[1],A=0,s())}function v(){var n=mo.mouse(b),i=!1
x&&(n[0]+=x[0],n[1]+=x[1]),A||(mo.event.altKey?(M||(M=[(f[0]+f[1])/2,(h[0]+h[1])/2]),q[0]=f[+(n[0]<M[0])],q[1]=h[+(n[1]<M[1])]):M=null),k&&y(n,c,0)&&(e(S),i=!0),N&&y(n,l,1)&&(r(S),i=!0),i&&(t(S),w({type:"brush",mode:A?"move":"resize"}))}function y(n,t,e){var r,i,a=Wr(t),c=a[0],l=a[1],s=q[e],g=e?h:f,v=g[1]-g[0]
return A&&(c-=s,l-=v+s),r=(e?d:p)?Math.max(c,Math.min(l,n[e])):n[e],A?i=(r+=s)+v:(M&&(s=Math.max(c,Math.min(l,2*M[e]-r))),r>s?(i=r,r=s):i=s),g[0]!=r||g[1]!=i?(e?u=null:o=null,g[0]=r,g[1]=i,!0):void 0}function m(){v(),S.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),mo.select("body").style("cursor",null),z.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),T(),w({type:"brushend"})}var M,x,b=this,_=mo.select(mo.event.target),w=a.of(b,arguments),S=mo.select(b),E=_.datum(),k=!/^(n|s)$/.test(E)&&c,N=!/^(e|w)$/.test(E)&&l,A=_.classed("extent"),T=L(),q=mo.mouse(b),z=mo.select(wo).on("keydown.brush",i).on("keyup.brush",g)
if(mo.event.changedTouches?z.on("touchmove.brush",v).on("touchend.brush",m):z.on("mousemove.brush",v).on("mouseup.brush",m),S.interrupt().selectAll("*").interrupt(),A)q[0]=f[0]-q[0],q[1]=h[0]-q[1]
else if(E){var C=+/w$/.test(E),D=+/^n/.test(E)
x=[f[1-C]-q[0],h[1-D]-q[1]],q[0]=f[C],q[1]=h[D]}else mo.event.altKey&&(M=q.slice())
S.style("pointer-events","none").selectAll(".resize").style("display",null),mo.select("body").style("cursor",_.style("cursor")),w({type:"brushstart"}),v()}var o,u,a=g(n,"brushstart","brush","brushend"),c=null,l=null,f=[0,0],h=[0,0],p=!0,d=!0,v=Ua[0]
return n.event=function(n){n.each(function(){var n=a.of(this,arguments),t={x:f,y:h,i:o,j:u},e=this.__chart__||t
this.__chart__=t,ja?mo.select(this).transition().each("start.brush",function(){o=e.i,u=e.j,f=e.x,h=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=Ne(f,t.x),r=Ne(h,t.y)
return o=u=null,function(i){f=t.x=e(i),h=t.y=r(i),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){o=t.i,u=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,v=Ua[!c<<1|!l],n):c},n.y=function(t){return arguments.length?(l=t,v=Ua[!c<<1|!l],n):l},n.clamp=function(t){return arguments.length?(c&&l?(p=!!t[0],d=!!t[1]):c?p=!!t:l&&(d=!!t),n):c&&l?[p,d]:c?p:l?d:null},n.extent=function(t){var e,r,i,a,s
return arguments.length?(c&&(e=t[0],r=t[1],l&&(e=e[0],r=r[0]),o=[e,r],c.invert&&(e=c(e),r=c(r)),e>r&&(s=e,e=r,r=s),(e!=f[0]||r!=f[1])&&(f=[e,r])),l&&(i=t[0],a=t[1],c&&(i=i[1],a=a[1]),u=[i,a],l.invert&&(i=l(i),a=l(a)),i>a&&(s=i,i=a,a=s),(i!=h[0]||a!=h[1])&&(h=[i,a])),n):(c&&(o?(e=o[0],r=o[1]):(e=f[0],r=f[1],c.invert&&(e=c.invert(e),r=c.invert(r)),e>r&&(s=e,e=r,r=s))),l&&(u?(i=u[0],a=u[1]):(i=h[0],a=h[1],l.invert&&(i=l.invert(i),a=l.invert(a)),i>a&&(s=i,i=a,a=s))),c&&l?[[e,i],[r,a]]:c?[e,r]:l&&[i,a])},n.clear=function(){return n.empty()||(f=[0,0],h=[0,0],o=u=null),n},n.empty=function(){return!!c&&f[0]==f[1]||!!l&&h[0]==h[1]},mo.rebind(n,a,"on")}
var Ia={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Ua=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Za=mo.time={},Va=Date,Xa=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
Ci.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){$a.setUTCDate.apply(this._,arguments)},setDay:function(){$a.setUTCDay.apply(this._,arguments)},setFullYear:function(){$a.setUTCFullYear.apply(this._,arguments)},setHours:function(){$a.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){$a.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){$a.setUTCMinutes.apply(this._,arguments)},setMonth:function(){$a.setUTCMonth.apply(this._,arguments)},setSeconds:function(){$a.setUTCSeconds.apply(this._,arguments)},setTime:function(){$a.setTime.apply(this._,arguments)}}
var $a=Date.prototype,Ba=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Wa=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],Ja=["January","February","March","April","May","June","July","August","September","October","November","December"],Ga=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
Za.year=Di(function(n){return n=Za.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),Za.years=Za.year.range,Za.years.utc=Za.year.utc.range,Za.day=Di(function(n){var t=new Va(2e3,0)
return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),Za.days=Za.day.range,Za.days.utc=Za.day.utc.range,Za.dayOfYear=function(n){var t=Za.year(n)
return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},Xa.forEach(function(n,t){n=n.toLowerCase(),t=7-t
var e=Za[n]=Di(function(n){return(n=Za.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=Za.year(n).getDay()
return Math.floor((Za.dayOfYear(n)+(e+t)%7)/7)-(e!==t)})
Za[n+"s"]=e.range,Za[n+"s"].utc=e.utc.range,Za[n+"OfYear"]=function(n){var e=Za.year(n).getDay()
return Math.floor((Za.dayOfYear(n)+(e+t)%7)/7)}}),Za.week=Za.sunday,Za.weeks=Za.sunday.range,Za.weeks.utc=Za.sunday.utc.range,Za.weekOfYear=Za.sundayOfYear,Za.format=Li
var Ka=Fi(Ba),Qa=Pi(Ba),nc=Fi(Wa),tc=Pi(Wa),ec=Fi(Ja),rc=Pi(Ja),ic=Fi(Ga),oc=Pi(Ga),uc=/^%/,ac={"-":"",_:" ",0:"0"},cc={a:function(n){return Wa[n.getDay()]},A:function(n){return Ba[n.getDay()]},b:function(n){return Ga[n.getMonth()]},B:function(n){return Ja[n.getMonth()]},c:Li("%a %b %e %X %Y"),d:function(n,t){return Oi(n.getDate(),t,2)},e:function(n,t){return Oi(n.getDate(),t,2)},H:function(n,t){return Oi(n.getHours(),t,2)},I:function(n,t){return Oi(n.getHours()%12||12,t,2)},j:function(n,t){return Oi(1+Za.dayOfYear(n),t,3)},L:function(n,t){return Oi(n.getMilliseconds(),t,3)},m:function(n,t){return Oi(n.getMonth()+1,t,2)},M:function(n,t){return Oi(n.getMinutes(),t,2)},p:function(n){return n.getHours()>=12?"PM":"AM"},S:function(n,t){return Oi(n.getSeconds(),t,2)},U:function(n,t){return Oi(Za.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return Oi(Za.mondayOfYear(n),t,2)},x:Li("%m/%d/%Y"),X:Li("%H:%M:%S"),y:function(n,t){return Oi(n.getFullYear()%100,t,2)},Y:function(n,t){return Oi(n.getFullYear()%1e4,t,4)},Z:co,"%":function(){return"%"}},lc={a:Ri,A:Yi,b:Vi,B:Xi,c:$i,d:to,e:to,H:ro,I:ro,j:eo,L:uo,m:no,M:io,p:ao,S:oo,U:Ui,w:Ii,W:Zi,x:Bi,X:Wi,y:Gi,Y:Ji,Z:Ki,"%":lo},fc=/^\s*\d+/,sc=mo.map({am:0,pm:1})
Li.utc=fo
var hc=fo("%Y-%m-%dT%H:%M:%S.%LZ")
Li.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?so:hc,so.parse=function(n){var t=new Date(n)
return isNaN(t)?null:t},so.toString=hc.toString,Za.second=Di(function(n){return new Va(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),Za.seconds=Za.second.range,Za.seconds.utc=Za.second.utc.range,Za.minute=Di(function(n){return new Va(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),Za.minutes=Za.minute.range,Za.minutes.utc=Za.minute.utc.range,Za.hour=Di(function(n){var t=n.getTimezoneOffset()/60
return new Va(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),Za.hours=Za.hour.range,Za.hours.utc=Za.hour.utc.range,Za.month=Di(function(n){return n=Za.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),Za.months=Za.month.range,Za.months.utc=Za.month.utc.range
var gc=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],pc=[[Za.second,1],[Za.second,5],[Za.second,15],[Za.second,30],[Za.minute,1],[Za.minute,5],[Za.minute,15],[Za.minute,30],[Za.hour,1],[Za.hour,3],[Za.hour,6],[Za.hour,12],[Za.day,1],[Za.day,2],[Za.week,1],[Za.month,1],[Za.month,3],[Za.year,1]],dc=[[Li("%Y"),Xn],[Li("%B"),function(n){return n.getMonth()}],[Li("%b %d"),function(n){return 1!=n.getDate()}],[Li("%a %d"),function(n){return n.getDay()&&1!=n.getDate()}],[Li("%I %p"),function(n){return n.getHours()}],[Li("%I:%M"),function(n){return n.getMinutes()}],[Li(":%S"),function(n){return n.getSeconds()}],[Li(".%L"),function(n){return n.getMilliseconds()}]],vc=po(dc)
pc.year=Za.year,Za.scale=function(){return ho(mo.scale.linear(),pc,vc)}
var yc={range:function(n,t,e){return mo.range(+n,+t,e).map(go)}},mc=pc.map(function(n){return[n[0].utc,n[1]]}),Mc=[[fo("%Y"),Xn],[fo("%B"),function(n){return n.getUTCMonth()}],[fo("%b %d"),function(n){return 1!=n.getUTCDate()}],[fo("%a %d"),function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],[fo("%I %p"),function(n){return n.getUTCHours()}],[fo("%I:%M"),function(n){return n.getUTCMinutes()}],[fo(":%S"),function(n){return n.getUTCSeconds()}],[fo(".%L"),function(n){return n.getUTCMilliseconds()}]],xc=po(Mc)
return mc.year=Za.year.utc,Za.scale.utc=function(){return ho(mo.scale.linear(),mc,xc)},mo.text=yn(function(n){return n.responseText}),mo.json=function(n,t){return mn(n,"application/json",vo,t)},mo.html=function(n,t){return mn(n,"text/html",yo,t)},mo.xml=yn(function(n){return n.responseXML}),mo}()
