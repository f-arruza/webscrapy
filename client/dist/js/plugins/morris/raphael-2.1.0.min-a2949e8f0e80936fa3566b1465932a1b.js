(function(t){var e,r,i="0.3.4",n="hasOwnProperty",a=/[\.\/]/,s=function(){},o=function(t,e){return t-e},l={n:{}},h=function(t,i){var n,a=r,s=Array.prototype.slice.call(arguments,2),l=h.listeners(t),u=0,c=[],f={},p=[],d=e
e=t,r=0
for(var g=0,v=l.length;g<v;g++)"zIndex"in l[g]&&(c.push(l[g].zIndex),l[g].zIndex<0&&(f[l[g].zIndex]=l[g]))
for(c.sort(o);c[u]<0;)if(n=f[c[u++]],p.push(n.apply(i,s)),r)return r=a,p
for(g=0;g<v;g++)if("zIndex"in(n=l[g]))if(n.zIndex==c[u]){if(p.push(n.apply(i,s)),r)break
do{if(u++,(n=f[c[u]])&&p.push(n.apply(i,s)),r)break}while(n)}else f[n.zIndex]=n
else if(p.push(n.apply(i,s)),r)break
return r=a,e=d,p.length?p:null}
h.listeners=function(t){var e,r,i,n,s,o,h,u,c=t.split(a),f=l,p=[f],d=[]
for(n=0,s=c.length;n<s;n++){for(u=[],o=0,h=p.length;o<h;o++)for(f=p[o].n,r=[f[c[n]],f["*"]],i=2;i--;)(e=r[i])&&(u.push(e),d=d.concat(e.f||[]))
p=u}return d},h.on=function(t,e){for(var r=t.split(a),i=l,n=0,o=r.length;n<o;n++)i=i.n,!i[r[n]]&&(i[r[n]]={n:{}}),i=i[r[n]]
for(i.f=i.f||[],n=0,o=i.f.length;n<o;n++)if(i.f[n]==e)return s
return i.f.push(e),function(t){+t==+t&&(e.zIndex=+t)}},h.stop=function(){r=1},h.nt=function(t){return t?new RegExp("(?:\\.|\\/|^)"+t+"(?:\\.|\\/|$)").test(e):e},h.off=h.unbind=function(t,e){var r,i,s,o,h,u,c,f=t.split(a),p=[l]
for(o=0,h=f.length;o<h;o++)for(u=0;u<p.length;u+=s.length-2){if(s=[u,1],r=p[u].n,"*"!=f[o])r[f[o]]&&s.push(r[f[o]])
else for(i in r)r[n](i)&&s.push(r[i])
p.splice.apply(p,s)}for(o=0,h=p.length;o<h;o++)for(r=p[o];r.n;){if(e){if(r.f){for(u=0,c=r.f.length;u<c;u++)if(r.f[u]==e){r.f.splice(u,1)
break}!r.f.length&&delete r.f}for(i in r.n)if(r.n[n](i)&&r.n[i].f){var d=r.n[i].f
for(u=0,c=d.length;u<c;u++)if(d[u]==e){d.splice(u,1)
break}!d.length&&delete r.n[i].f}}else{delete r.f
for(i in r.n)r.n[n](i)&&r.n[i].f&&delete r.n[i].f}r=r.n}},h.once=function(t,e){var r=function(){var i=e.apply(this,arguments)
return h.unbind(t,r),i}
return h.on(t,r)},h.version=i,h.toString=function(){return"You are running Eve "+i},"undefined"!=typeof module&&module.exports?module.exports=h:"undefined"!=typeof define?define("eve",[],function(){return h}):t.eve=h})(this),function(){function t(t){for(var e=0;e<ae.length;e++)ae[e].el.paper==t&&ae.splice(e--,1)}function e(t,e,r,n,s,o){r=Q(r)
var l,h,u,c,f,p,d=t.ms,g={},v={},y={}
if(n)for(_=0,w=ae.length;_<w;_++){var m=ae[_]
if(m.el.id==e.id&&m.anim==t){m.percent!=r?(ae.splice(_,1),u=1):h=m,e.attr(m.totalOrigin)
break}}else n=+v
for(var _=0,w=t.percents.length;_<w;_++){if(t.percents[_]==r||t.percents[_]>n*t.top){r=t.percents[_],f=t.percents[_-1]||0,d=d/t.top*(r-f),c=t.percents[_+1],l=t.anim[r]
break}n&&e.attr(t.anim[t.percents[_]])}if(l){if(h)h.initstatus=n,h.start=new Date-h.ms*n
else{for(var C in l)if(l[k](C)&&(et[k](C)||e.paper.customAttributes[k](C)))switch(g[C]=e.attr(C),null==g[C]&&(g[C]=tt[C]),v[C]=l[C],et[C]){case Y:y[C]=(v[C]-g[C])/d
break
case"colour":g[C]=x.getRGB(g[C])
var B=x.getRGB(v[C])
y[C]={r:(B.r-g[C].r)/d,g:(B.g-g[C].g)/d,b:(B.b-g[C].b)/d}
break
case"path":var S=Ft(g[C],v[C]),A=S[1]
for(g[C]=S[0],y[C]=[],_=0,w=g[C].length;_<w;_++){y[C][_]=[0]
for(var N=1,L=g[C][_].length;N<L;N++)y[C][_][N]=(A[_][N]-g[C][_][N])/d}break
case"transform":var M=e._,F=qt(M[C],v[C])
if(F)for(g[C]=F.from,v[C]=F.to,y[C]=[],y[C].real=!0,_=0,w=g[C].length;_<w;_++)for(y[C][_]=[g[C][_][0]],N=1,L=g[C][_].length;N<L;N++)y[C][_][N]=(v[C][_][N]-g[C][_][N])/d
else{var R=e.matrix||new a,P={_:{transform:M.transform},getBBox:function(){return e.getBBox(1)}}
g[C]=[R.a,R.b,R.c,R.d,R.e,R.f],It(P,v[C]),v[C]=P._.transform,y[C]=[(P.matrix.a-R.a)/d,(P.matrix.b-R.b)/d,(P.matrix.c-R.c)/d,(P.matrix.d-R.d)/d,(P.matrix.e-R.e)/d,(P.matrix.f-R.f)/d]}break
case"csv":var I=z(l[C])[E](b),j=z(g[C])[E](b)
if("clip-rect"==C)for(g[C]=j,y[C]=[],_=j.length;_--;)y[C][_]=(I[_]-g[C][_])/d
v[C]=I
break
default:for(I=[][T](l[C]),j=[][T](g[C]),y[C]=[],_=e.paper.customAttributes[C].length;_--;)y[C][_]=((I[_]||0)-(j[_]||0))/d}var q=l.easing,D=x.easing_formulas[q]
if(!D)if((D=z(q).match($))&&5==D.length){var V=D
D=function(t){return i(t,+V[1],+V[2],+V[3],+V[4],d)}}else D=ct
if(p=l.start||t.start||+new Date,m={anim:t,percent:r,timestamp:p,start:p+(t.del||0),status:0,initstatus:n||0,stop:!1,ms:d,easing:D,from:g,diff:y,to:v,el:e,callback:l.callback,prev:f,next:c,repeat:o||t.times,origin:e.attr(),totalOrigin:s},ae.push(m),n&&!h&&!u&&(m.stop=!0,m.start=new Date-d*n,1==ae.length))return oe()
u&&(m.start=new Date-m.ms*n),1==ae.length&&se(oe)}eve("raphael.anim.start."+e.id,e,t)}}function r(t,e){var r=[],i={}
if(this.ms=e,this.times=1,t){for(var n in t)t[k](n)&&(i[Q(n)]=t[n],r.push(Q(n)))
r.sort(ht)}this.anim=i,this.top=r[r.length-1],this.percents=r}function i(t,e,r,i,n,a){function s(t,e){var r,i,n,a,s,c
for(n=t,c=0;c<8;c++){if(a=o(n)-t,D(a)<e)return n
if(s=(3*u*n+2*h)*n+l,D(s)<1e-6)break
n-=a/s}if(r=0,i=1,n=t,n<r)return r
if(n>i)return i
for(;r<i;){if(a=o(n),D(a-t)<e)return n
t>a?r=n:i=n,n=(i-r)/2+r}return n}function o(t){return((u*t+h)*t+l)*t}var l=3*e,h=3*(i-e)-l,u=1-l-h,c=3*r,f=3*(n-r)-c,p=1-c-f
return function(t,e){var r=s(t,e)
return((p*r+f)*r+c)*r}(t,1/(200*a))}function n(){return this.x+M+this.y+M+this.width+" × "+this.height}function a(t,e,r,i,n,a){null!=t?(this.a=+t,this.b=+e,this.c=+r,this.d=+i,this.e=+n,this.f=+a):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function s(t,e,r){t=x._path2curve(t),e=x._path2curve(e)
for(var i,n,a,s,l,h,u,c,f,p,d=r?0:[],g=0,v=t.length;g<v;g++){var y=t[g]
if("M"==y[0])i=l=y[1],n=h=y[2]
else{"C"==y[0]?(f=[i,n].concat(y.slice(1)),i=f[6],n=f[7]):(f=[i,n,i,n,l,h,l,h],i=l,n=h)
for(var m=0,b=e.length;m<b;m++){var _=e[m]
if("M"==_[0])a=u=_[1],s=c=_[2]
else{"C"==_[0]?(p=[a,s].concat(_.slice(1)),a=p[6],s=p[7]):(p=[a,s,a,s,u,c,u,c],a=u,s=c)
var w=o(f,p,r)
if(r)d+=w
else{for(var k=0,C=w.length;k<C;k++)w[k].segment1=g,w[k].segment2=m,w[k].bez1=f,w[k].bez2=p
d=d.concat(w)}}}}}return d}function o(t,e,r){var i=x.bezierBBox(t),n=x.bezierBBox(e)
if(!x.isBBoxIntersect(i,n))return r?0:[]
for(var a=u.apply(0,t),s=u.apply(0,e),o=~~(a/5),h=~~(s/5),c=[],f=[],p={},d=r?0:[],g=0;g<o+1;g++){var v=x.findDotsAtSegment.apply(x,t.concat(g/o))
c.push({x:v.x,y:v.y,t:g/o})}for(g=0;g<h+1;g++)v=x.findDotsAtSegment.apply(x,e.concat(g/h)),f.push({x:v.x,y:v.y,t:g/h})
for(g=0;g<o;g++)for(var y=0;y<h;y++){var m=c[g],b=c[g+1],_=f[y],w=f[y+1],k=D(b.x-m.x)<.001?"y":"x",C=D(w.x-_.x)<.001?"y":"x",B=l(m.x,m.y,b.x,b.y,_.x,_.y,w.x,w.y)
if(B){if(p[B.x.toFixed(4)]==B.y.toFixed(4))continue
p[B.x.toFixed(4)]=B.y.toFixed(4)
var S=m.t+D((B[k]-m[k])/(b[k]-m[k]))*(b.t-m.t),A=_.t+D((B[C]-_[C])/(w[C]-_[C]))*(w.t-_.t)
S>=0&&S<=1&&A>=0&&A<=1&&(r?d++:d.push({x:B.x,y:B.y,t1:S,t2:A}))}}return d}function l(t,e,r,i,n,a,s,o){if(!(j(t,r)<q(n,s)||q(t,r)>j(n,s)||j(e,i)<q(a,o)||q(e,i)>j(a,o))){var l=(t*i-e*r)*(n-s)-(t-r)*(n*o-a*s),h=(t*i-e*r)*(a-o)-(e-i)*(n*o-a*s),u=(t-r)*(a-o)-(e-i)*(n-s)
if(!u)return
var c=l/u,f=h/u,p=+c.toFixed(2),d=+f.toFixed(2)
if(p<+q(t,r).toFixed(2)||p>+j(t,r).toFixed(2)||p<+q(n,s).toFixed(2)||p>+j(n,s).toFixed(2)||d<+q(e,i).toFixed(2)||d>+j(e,i).toFixed(2)||d<+q(a,o).toFixed(2)||d>+j(a,o).toFixed(2))return
return{x:c,y:f}}}function h(t,e,r,i,n,a,s,o,l){if(!(l<0||u(t,e,r,i,n,a,s,o)<l)){var h,c=.5,f=1-c
for(h=u(t,e,r,i,n,a,s,o,f);D(h-l)>.01;)c/=2,f+=(h<l?1:-1)*c,h=u(t,e,r,i,n,a,s,o,f)
return f}}function u(t,e,r,i,n,a,s,o,l){null==l&&(l=1),l=l>1?1:l<0?0:l
for(var h=l/2,u=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],f=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],p=0,d=0;d<12;d++){var g=h*u[d]+h,v=c(g,t,r,n,s),x=c(g,e,i,a,o),y=v*v+x*x
p+=f[d]*I.sqrt(y)}return h*p}function c(t,e,r,i,n){return t*(t*(-3*e+9*r-9*i+3*n)+6*e-12*r+6*i)-3*e+3*r}function f(t,e){for(var r=[],i=0,n=t.length;n-2*!e>i;i+=2){var a=[{x:+t[i-2],y:+t[i-1]},{x:+t[i],y:+t[i+1]},{x:+t[i+2],y:+t[i+3]},{x:+t[i+4],y:+t[i+5]}]
e?i?n-4==i?a[3]={x:+t[0],y:+t[1]}:n-2==i&&(a[2]={x:+t[0],y:+t[1]},a[3]={x:+t[2],y:+t[3]}):a[0]={x:+t[n-2],y:+t[n-1]}:n-4==i?a[3]=a[2]:i||(a[0]={x:+t[i],y:+t[i+1]}),r.push(["C",(-a[0].x+6*a[1].x+a[2].x)/6,(-a[0].y+6*a[1].y+a[2].y)/6,(a[1].x+6*a[2].x-a[3].x)/6,(a[1].y+6*a[2].y-a[3].y)/6,a[2].x,a[2].y])}return r}function p(){return this.hex}function d(t,e,r){function i(){var n=Array.prototype.slice.call(arguments,0),a=n.join("␀"),s=i.cache=i.cache||{},o=i.count=i.count||[]
return s[k](a)?(g(o,a),r?r(s[a]):s[a]):(o.length>=1e3&&delete s[o.shift()],o.push(a),s[a]=t[A](e,n),r?r(s[a]):s[a])}return i}function g(t,e){for(var r=0,i=t.length;r<i;r++)if(t[r]===e)return t.push(t.splice(r,1)[0])}function v(t){if(Object(t)!==t)return t
var e=new t.constructor
for(var r in t)t[k](r)&&(e[r]=v(t[r]))
return e}function x(t){if(x.is(t,"function"))return y?t():eve.on("raphael.DOMload",t)
if(x.is(t,W))return x._engine.create[A](x,t.splice(0,3+x.is(t[0],Y))).add(t)
var e=Array.prototype.slice.call(arguments,0)
if(x.is(e[e.length-1],"function")){var r=e.pop()
return y?r.call(x._engine.create[A](x,e)):eve.on("raphael.DOMload",function(){r.call(x._engine.create[A](x,e))})}return x._engine.create[A](x,arguments)}x.version="2.1.0",x.eve=eve
var y,m,b=/[, ]+/,_={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},w=/\{(\d+)\}/g,k="hasOwnProperty",C={doc:document,win:window},B={was:Object.prototype[k].call(C.win,"Raphael"),is:C.win.Raphael},S=function(){this.ca=this.customAttributes={}},A="apply",T="concat",N="createTouch"in C.doc,L="",M=" ",z=String,E="split",F="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[E](M),R={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},P=z.prototype.toLowerCase,I=Math,j=I.max,q=I.min,D=I.abs,V=I.pow,O=I.PI,Y="number",G="string",W="array",X=Object.prototype.toString,H=(x._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),U={NaN:1,Infinity:1,"-Infinity":1},$=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,Z=I.round,Q=parseFloat,J=parseInt,K=z.prototype.toUpperCase,tt=x._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},et=x._availableAnimAttrs={blur:Y,"clip-rect":"csv",cx:Y,cy:Y,fill:"colour","fill-opacity":Y,"font-size":Y,height:Y,opacity:Y,path:"path",r:Y,rx:Y,ry:Y,stroke:"colour","stroke-opacity":Y,"stroke-width":Y,transform:"transform",width:Y,x:Y,y:Y},rt=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,it={hs:1,rg:1},nt=/,?([achlmqrstvxz]),?/gi,at=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,st=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,ot=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,lt=(x._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,{}),ht=function(t,e){return Q(t)-Q(e)},ut=function(){},ct=function(t){return t},ft=x._rectPath=function(t,e,r,i,n){return n?[["M",t+n,e],["l",r-2*n,0],["a",n,n,0,0,1,n,n],["l",0,i-2*n],["a",n,n,0,0,1,-n,n],["l",2*n-r,0],["a",n,n,0,0,1,-n,-n],["l",0,2*n-i],["a",n,n,0,0,1,n,-n],["z"]]:[["M",t,e],["l",r,0],["l",0,i],["l",-r,0],["z"]]},pt=function(t,e,r,i){return null==i&&(i=r),[["M",t,e],["m",0,-i],["a",r,i,0,1,1,0,2*i],["a",r,i,0,1,1,0,-2*i],["z"]]},dt=x._getPath={path:function(t){return t.attr("path")},circle:function(t){var e=t.attrs
return pt(e.cx,e.cy,e.r)},ellipse:function(t){var e=t.attrs
return pt(e.cx,e.cy,e.rx,e.ry)},rect:function(t){var e=t.attrs
return ft(e.x,e.y,e.width,e.height,e.r)},image:function(t){var e=t.attrs
return ft(e.x,e.y,e.width,e.height)},text:function(t){var e=t._getBBox()
return ft(e.x,e.y,e.width,e.height)}},gt=x.mapPath=function(t,e){if(!e)return t
var r,i,n,a,s,o,l
for(t=Ft(t),n=0,s=t.length;n<s;n++)for(l=t[n],a=1,o=l.length;a<o;a+=2)r=e.x(l[a],l[a+1]),i=e.y(l[a],l[a+1]),l[a]=r,l[a+1]=i
return t}
if(x._g=C,x.type=C.win.SVGAngle||C.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==x.type){var vt,xt=C.doc.createElement("div")
if(xt.innerHTML='<v:shape adj="1"/>',vt=xt.firstChild,vt.style.behavior="url(#default#VML)",!vt||"object"!=typeof vt.adj)return x.type=L
xt=null}x.svg=!(x.vml="VML"==x.type),x._Paper=S,x.fn=m=S.prototype=x.prototype,x._id=0,x._oid=0,x.is=function(t,e){return e=P.call(e),"finite"==e?!U[k](+t):"array"==e?t instanceof Array:"null"==e&&null===t||e==typeof t&&null!==t||"object"==e&&t===Object(t)||"array"==e&&Array.isArray&&Array.isArray(t)||X.call(t).slice(8,-1).toLowerCase()==e},x.angle=function(t,e,r,i,n,a){if(null==n){var s=t-r,o=e-i
return s||o?(180+180*I.atan2(-o,-s)/O+360)%360:0}return x.angle(t,e,n,a)-x.angle(r,i,n,a)},x.rad=function(t){return t%360*O/180},x.deg=function(t){return 180*t/O%360},x.snapTo=function(t,e,r){if(r=x.is(r,"finite")?r:10,x.is(t,W)){for(var i=t.length;i--;)if(D(t[i]-e)<=r)return t[i]}else{t=+t
var n=e%t
if(n<r)return e-n
if(n>t-r)return e-n+t}return e}
x.createUUID=function(t,e){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t,e).toUpperCase()}}(/[xy]/g,function(t){var e=16*I.random()|0
return("x"==t?e:3&e|8).toString(16)})
x.setWindow=function(t){eve("raphael.setWindow",x,C.win,t),C.win=t,C.doc=C.win.document,x._engine.initWin&&x._engine.initWin(C.win)}
var yt=function(t){if(x.vml){var e,r=/^\s+|\s+$/g
try{var i=new ActiveXObject("htmlfile")
i.write("<body>"),i.close(),e=i.body}catch(t){e=createPopup().document.body}var n=e.createTextRange()
yt=d(function(t){try{e.style.color=z(t).replace(r,L)
var i=n.queryCommandValue("ForeColor")
return i=(255&i)<<16|65280&i|(16711680&i)>>>16,"#"+("000000"+i.toString(16)).slice(-6)}catch(t){return"none"}})}else{var a=C.doc.createElement("i")
a.title="Raphaël Colour Picker",a.style.display="none",C.doc.body.appendChild(a),yt=d(function(t){return a.style.color=t,C.doc.defaultView.getComputedStyle(a,L).getPropertyValue("color")})}return yt(t)},mt=function(){return"hsb("+[this.h,this.s,this.b]+")"},bt=function(){return"hsl("+[this.h,this.s,this.l]+")"},_t=function(){return this.hex},wt=function(t,e,r){if(null==e&&x.is(t,"object")&&"r"in t&&"g"in t&&"b"in t&&(r=t.b,e=t.g,t=t.r),null==e&&x.is(t,G)){var i=x.getRGB(t)
t=i.r,e=i.g,r=i.b}return(t>1||e>1||r>1)&&(t/=255,e/=255,r/=255),[t,e,r]},kt=function(t,e,r,i){t*=255,e*=255,r*=255
var n={r:t,g:e,b:r,hex:x.rgb(t,e,r),toString:_t}
return x.is(i,"finite")&&(n.opacity=i),n}
x.color=function(t){var e
return x.is(t,"object")&&"h"in t&&"s"in t&&"b"in t?(e=x.hsb2rgb(t),t.r=e.r,t.g=e.g,t.b=e.b,t.hex=e.hex):x.is(t,"object")&&"h"in t&&"s"in t&&"l"in t?(e=x.hsl2rgb(t),t.r=e.r,t.g=e.g,t.b=e.b,t.hex=e.hex):(x.is(t,"string")&&(t=x.getRGB(t)),x.is(t,"object")&&"r"in t&&"g"in t&&"b"in t?(e=x.rgb2hsl(t),t.h=e.h,t.s=e.s,t.l=e.l,e=x.rgb2hsb(t),t.v=e.b):(t={hex:"none"},t.r=t.g=t.b=t.h=t.s=t.v=t.l=-1)),t.toString=_t,t},x.hsb2rgb=function(t,e,r,i){this.is(t,"object")&&"h"in t&&"s"in t&&"b"in t&&(r=t.b,e=t.s,t=t.h,i=t.o),t*=360
var n,a,s,o,l
return t=t%360/60,l=r*e,o=l*(1-D(t%2-1)),n=a=s=r-l,t=~~t,n+=[l,o,0,0,o,l][t],a+=[o,l,l,o,0,0][t],s+=[0,0,o,l,l,o][t],kt(n,a,s,i)},x.hsl2rgb=function(t,e,r,i){this.is(t,"object")&&"h"in t&&"s"in t&&"l"in t&&(r=t.l,e=t.s,t=t.h),(t>1||e>1||r>1)&&(t/=360,e/=100,r/=100),t*=360
var n,a,s,o,l
return t=t%360/60,l=2*e*(r<.5?r:1-r),o=l*(1-D(t%2-1)),n=a=s=r-l/2,t=~~t,n+=[l,o,0,0,o,l][t],a+=[o,l,l,o,0,0][t],s+=[0,0,o,l,l,o][t],kt(n,a,s,i)},x.rgb2hsb=function(t,e,r){r=wt(t,e,r),t=r[0],e=r[1],r=r[2]
var i,n,a,s
return a=j(t,e,r),s=a-q(t,e,r),i=0==s?null:a==t?(e-r)/s:a==e?(r-t)/s+2:(t-e)/s+4,i=(i+360)%6*60/360,n=0==s?0:s/a,{h:i,s:n,b:a,toString:mt}},x.rgb2hsl=function(t,e,r){r=wt(t,e,r),t=r[0],e=r[1],r=r[2]
var i,n,a,s,o,l
return s=j(t,e,r),o=q(t,e,r),l=s-o,i=0==l?null:s==t?(e-r)/l:s==e?(r-t)/l+2:(t-e)/l+4,i=(i+360)%6*60/360,a=(s+o)/2,n=0==l?0:a<.5?l/(2*a):l/(2-2*a),{h:i,s:n,l:a,toString:bt}},x._path2string=function(){return this.join(",").replace(nt,"$1")}
x._preload=function(t,e){var r=C.doc.createElement("img")
r.style.cssText="position:absolute;left:-9999em;top:-9999em",r.onload=function(){e.call(this),this.onload=null,C.doc.body.removeChild(this)},r.onerror=function(){C.doc.body.removeChild(this)},C.doc.body.appendChild(r),r.src=t}
x.getRGB=d(function(t){if(!t||(t=z(t)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:p}
if("none"==t)return{r:-1,g:-1,b:-1,hex:"none",toString:p}
!it[k](t.toLowerCase().substring(0,2))&&"#"!=t.charAt()&&(t=yt(t))
var e,r,i,n,a,s,o=t.match(H)
return o?(o[2]&&(i=J(o[2].substring(5),16),r=J(o[2].substring(3,5),16),e=J(o[2].substring(1,3),16)),o[3]&&(i=J((a=o[3].charAt(3))+a,16),r=J((a=o[3].charAt(2))+a,16),e=J((a=o[3].charAt(1))+a,16)),o[4]&&(s=o[4][E](rt),e=Q(s[0]),"%"==s[0].slice(-1)&&(e*=2.55),r=Q(s[1]),"%"==s[1].slice(-1)&&(r*=2.55),i=Q(s[2]),"%"==s[2].slice(-1)&&(i*=2.55),"rgba"==o[1].toLowerCase().slice(0,4)&&(n=Q(s[3])),s[3]&&"%"==s[3].slice(-1)&&(n/=100)),o[5]?(s=o[5][E](rt),e=Q(s[0]),"%"==s[0].slice(-1)&&(e*=2.55),r=Q(s[1]),"%"==s[1].slice(-1)&&(r*=2.55),i=Q(s[2]),"%"==s[2].slice(-1)&&(i*=2.55),("deg"==s[0].slice(-3)||"°"==s[0].slice(-1))&&(e/=360),"hsba"==o[1].toLowerCase().slice(0,4)&&(n=Q(s[3])),s[3]&&"%"==s[3].slice(-1)&&(n/=100),x.hsb2rgb(e,r,i,n)):o[6]?(s=o[6][E](rt),e=Q(s[0]),"%"==s[0].slice(-1)&&(e*=2.55),r=Q(s[1]),"%"==s[1].slice(-1)&&(r*=2.55),i=Q(s[2]),"%"==s[2].slice(-1)&&(i*=2.55),("deg"==s[0].slice(-3)||"°"==s[0].slice(-1))&&(e/=360),"hsla"==o[1].toLowerCase().slice(0,4)&&(n=Q(s[3])),s[3]&&"%"==s[3].slice(-1)&&(n/=100),x.hsl2rgb(e,r,i,n)):(o={r:e,g:r,b:i,toString:p},o.hex="#"+(16777216|i|r<<8|e<<16).toString(16).slice(1),x.is(n,"finite")&&(o.opacity=n),o)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:p}},x),x.hsb=d(function(t,e,r){return x.hsb2rgb(t,e,r).hex}),x.hsl=d(function(t,e,r){return x.hsl2rgb(t,e,r).hex}),x.rgb=d(function(t,e,r){return"#"+(16777216|r|e<<8|t<<16).toString(16).slice(1)}),x.getColor=function(t){var e=this.getColor.start=this.getColor.start||{h:0,s:1,b:t||.75},r=this.hsb2rgb(e.h,e.s,e.b)
return e.h+=.075,e.h>1&&(e.h=0,e.s-=.2,e.s<=0&&(this.getColor.start={h:0,s:1,b:e.b})),r.hex},x.getColor.reset=function(){delete this.start},x.parsePathString=function(t){if(!t)return null
var e=Ct(t)
if(e.arr)return St(e.arr)
var r={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},i=[]
return x.is(t,W)&&x.is(t[0],W)&&(i=St(t)),i.length||z(t).replace(at,function(t,e,n){var a=[],s=e.toLowerCase()
if(n.replace(ot,function(t,e){e&&a.push(+e)}),"m"==s&&a.length>2&&(i.push([e][T](a.splice(0,2))),s="l",e="m"==e?"l":"L"),"r"==s)i.push([e][T](a))
else for(;a.length>=r[s]&&(i.push([e][T](a.splice(0,r[s]))),r[s]););}),i.toString=x._path2string,e.arr=St(i),i},x.parseTransformString=d(function(t){if(!t)return null
var e=[]
return x.is(t,W)&&x.is(t[0],W)&&(e=St(t)),e.length||z(t).replace(st,function(t,r,i){var n=[]
P.call(r)
i.replace(ot,function(t,e){e&&n.push(+e)}),e.push([r][T](n))}),e.toString=x._path2string,e})
var Ct=function(t){var e=Ct.ps=Ct.ps||{}
return e[t]?e[t].sleep=100:e[t]={sleep:100},setTimeout(function(){for(var r in e)e[k](r)&&r!=t&&!--e[r].sleep&&delete e[r]}),e[t]}
x.findDotsAtSegment=function(t,e,r,i,n,a,s,o,l){var h=1-l,u=V(h,3),c=V(h,2),f=l*l,p=f*l,d=u*t+3*c*l*r+3*h*l*l*n+p*s,g=u*e+3*c*l*i+3*h*l*l*a+p*o,v=t+2*l*(r-t)+f*(n-2*r+t),x=e+2*l*(i-e)+f*(a-2*i+e),y=r+2*l*(n-r)+f*(s-2*n+r),m=i+2*l*(a-i)+f*(o-2*a+i),b=h*t+l*r,_=h*e+l*i,w=h*n+l*s,k=h*a+l*o,C=90-180*I.atan2(v-y,x-m)/O
return(v>y||x<m)&&(C+=180),{x:d,y:g,m:{x:v,y:x},n:{x:y,y:m},start:{x:b,y:_},end:{x:w,y:k},alpha:C}},x.bezierBBox=function(t,e,r,i,n,a,s,o){x.is(t,"array")||(t=[t,e,r,i,n,a,s,o])
var l=Et.apply(null,t)
return{x:l.min.x,y:l.min.y,x2:l.max.x,y2:l.max.y,width:l.max.x-l.min.x,height:l.max.y-l.min.y}},x.isPointInsideBBox=function(t,e,r){return e>=t.x&&e<=t.x2&&r>=t.y&&r<=t.y2},x.isBBoxIntersect=function(t,e){var r=x.isPointInsideBBox
return r(e,t.x,t.y)||r(e,t.x2,t.y)||r(e,t.x,t.y2)||r(e,t.x2,t.y2)||r(t,e.x,e.y)||r(t,e.x2,e.y)||r(t,e.x,e.y2)||r(t,e.x2,e.y2)||(t.x<e.x2&&t.x>e.x||e.x<t.x2&&e.x>t.x)&&(t.y<e.y2&&t.y>e.y||e.y<t.y2&&e.y>t.y)},x.pathIntersection=function(t,e){return s(t,e)},x.pathIntersectionNumber=function(t,e){return s(t,e,1)},x.isPointInsidePath=function(t,e,r){var i=x.pathBBox(t)
return x.isPointInsideBBox(i,e,r)&&s(t,[["M",e,r],["H",i.x2+10]],1)%2==1},x._removedFactory=function(t){return function(){eve("raphael.log",null,"Raphaël: you are calling to method “"+t+"” of removed object",t)}}
var Bt=x.pathBBox=function(t){var e=Ct(t)
if(e.bbox)return e.bbox
if(!t)return{x:0,y:0,width:0,height:0,x2:0,y2:0}
t=Ft(t)
for(var r,i=0,n=0,a=[],s=[],o=0,l=t.length;o<l;o++)if(r=t[o],"M"==r[0])i=r[1],n=r[2],a.push(i),s.push(n)
else{var h=Et(i,n,r[1],r[2],r[3],r[4],r[5],r[6])
a=a[T](h.min.x,h.max.x),s=s[T](h.min.y,h.max.y),i=r[5],n=r[6]}var u=q[A](0,a),c=q[A](0,s),f=j[A](0,a),p=j[A](0,s),d={x:u,y:c,x2:f,y2:p,width:f-u,height:p-c}
return e.bbox=v(d),d},St=function(t){var e=v(t)
return e.toString=x._path2string,e},At=x._pathToRelative=function(t){var e=Ct(t)
if(e.rel)return St(e.rel)
x.is(t,W)&&x.is(t&&t[0],W)||(t=x.parsePathString(t))
var r=[],i=0,n=0,a=0,s=0,o=0
"M"==t[0][0]&&(i=t[0][1],n=t[0][2],a=i,s=n,o++,r.push(["M",i,n]))
for(var l=o,h=t.length;l<h;l++){var u=r[l]=[],c=t[l]
if(c[0]!=P.call(c[0]))switch(u[0]=P.call(c[0]),u[0]){case"a":u[1]=c[1],u[2]=c[2],u[3]=c[3],u[4]=c[4],u[5]=c[5],u[6]=+(c[6]-i).toFixed(3),u[7]=+(c[7]-n).toFixed(3)
break
case"v":u[1]=+(c[1]-n).toFixed(3)
break
case"m":a=c[1],s=c[2]
default:for(var f=1,p=c.length;f<p;f++)u[f]=+(c[f]-(f%2?i:n)).toFixed(3)}else{u=r[l]=[],"m"==c[0]&&(a=c[1]+i,s=c[2]+n)
for(var d=0,g=c.length;d<g;d++)r[l][d]=c[d]}var v=r[l].length
switch(r[l][0]){case"z":i=a,n=s
break
case"h":i+=+r[l][v-1]
break
case"v":n+=+r[l][v-1]
break
default:i+=+r[l][v-2],n+=+r[l][v-1]}}return r.toString=x._path2string,e.rel=St(r),r},Tt=x._pathToAbsolute=function(t){var e=Ct(t)
if(e.abs)return St(e.abs)
if(x.is(t,W)&&x.is(t&&t[0],W)||(t=x.parsePathString(t)),!t||!t.length)return[["M",0,0]]
var r=[],i=0,n=0,a=0,s=0,o=0
"M"==t[0][0]&&(i=+t[0][1],n=+t[0][2],a=i,s=n,o++,r[0]=["M",i,n])
for(var l,h,u=3==t.length&&"M"==t[0][0]&&"R"==t[1][0].toUpperCase()&&"Z"==t[2][0].toUpperCase(),c=o,p=t.length;c<p;c++){if(r.push(l=[]),h=t[c],h[0]!=K.call(h[0]))switch(l[0]=K.call(h[0]),l[0]){case"A":l[1]=h[1],l[2]=h[2],l[3]=h[3],l[4]=h[4],l[5]=h[5],l[6]=+(h[6]+i),l[7]=+(h[7]+n)
break
case"V":l[1]=+h[1]+n
break
case"H":l[1]=+h[1]+i
break
case"R":for(var d=[i,n][T](h.slice(1)),g=2,v=d.length;g<v;g++)d[g]=+d[g]+i,d[++g]=+d[g]+n
r.pop(),r=r[T](f(d,u))
break
case"M":a=+h[1]+i,s=+h[2]+n
default:for(g=1,v=h.length;g<v;g++)l[g]=+h[g]+(g%2?i:n)}else if("R"==h[0])d=[i,n][T](h.slice(1)),r.pop(),r=r[T](f(d,u)),l=["R"][T](h.slice(-2))
else for(var y=0,m=h.length;y<m;y++)l[y]=h[y]
switch(l[0]){case"Z":i=a,n=s
break
case"H":i=l[1]
break
case"V":n=l[1]
break
case"M":a=l[l.length-2],s=l[l.length-1]
default:i=l[l.length-2],n=l[l.length-1]}}return r.toString=x._path2string,e.abs=St(r),r},Nt=function(t,e,r,i){return[t,e,r,i,r,i]},Lt=function(t,e,r,i,n,a){var s=1/3,o=2/3
return[s*t+o*r,s*e+o*i,s*n+o*r,s*a+o*i,n,a]},Mt=function(t,e,r,i,n,a,s,o,l,h){var u,c=120*O/180,f=O/180*(+n||0),p=[],g=d(function(t,e,r){return{x:t*I.cos(r)-e*I.sin(r),y:t*I.sin(r)+e*I.cos(r)}})
if(h)C=h[0],B=h[1],w=h[2],k=h[3]
else{u=g(t,e,-f),t=u.x,e=u.y,u=g(o,l,-f),o=u.x,l=u.y
var v=(I.cos(O/180*n),I.sin(O/180*n),(t-o)/2),x=(e-l)/2,y=v*v/(r*r)+x*x/(i*i)
y>1&&(y=I.sqrt(y),r*=y,i*=y)
var m=r*r,b=i*i,_=(a==s?-1:1)*I.sqrt(D((m*b-m*x*x-b*v*v)/(m*x*x+b*v*v))),w=_*r*x/i+(t+o)/2,k=_*-i*v/r+(e+l)/2,C=I.asin(((e-k)/i).toFixed(9)),B=I.asin(((l-k)/i).toFixed(9))
C=t<w?O-C:C,B=o<w?O-B:B,C<0&&(C=2*O+C),B<0&&(B=2*O+B),s&&C>B&&(C-=2*O),!s&&B>C&&(B-=2*O)}var S=B-C
if(D(S)>c){var A=B,N=o,L=l
B=C+c*(s&&B>C?1:-1),o=w+r*I.cos(B),l=k+i*I.sin(B),p=Mt(o,l,r,i,n,0,s,N,L,[B,A,w,k])}S=B-C
var M=I.cos(C),z=I.sin(C),F=I.cos(B),R=I.sin(B),P=I.tan(S/4),j=4/3*r*P,q=4/3*i*P,V=[t,e],Y=[t+j*z,e-q*M],G=[o+j*R,l-q*F],W=[o,l]
if(Y[0]=2*V[0]-Y[0],Y[1]=2*V[1]-Y[1],h)return[Y,G,W][T](p)
p=[Y,G,W][T](p).join()[E](",")
for(var X=[],H=0,U=p.length;H<U;H++)X[H]=H%2?g(p[H-1],p[H],f).y:g(p[H],p[H+1],f).x
return X},zt=function(t,e,r,i,n,a,s,o,l){var h=1-l
return{x:V(h,3)*t+3*V(h,2)*l*r+3*h*l*l*n+V(l,3)*s,y:V(h,3)*e+3*V(h,2)*l*i+3*h*l*l*a+V(l,3)*o}},Et=d(function(t,e,r,i,n,a,s,o){var l,h=n-2*r+t-(s-2*n+r),u=2*(r-t)-2*(n-r),c=t-r,f=(-u+I.sqrt(u*u-4*h*c))/2/h,p=(-u-I.sqrt(u*u-4*h*c))/2/h,d=[e,o],g=[t,s]
return D(f)>"1e12"&&(f=.5),D(p)>"1e12"&&(p=.5),f>0&&f<1&&(l=zt(t,e,r,i,n,a,s,o,f),g.push(l.x),d.push(l.y)),p>0&&p<1&&(l=zt(t,e,r,i,n,a,s,o,p),g.push(l.x),d.push(l.y)),h=a-2*i+e-(o-2*a+i),u=2*(i-e)-2*(a-i),c=e-i,f=(-u+I.sqrt(u*u-4*h*c))/2/h,p=(-u-I.sqrt(u*u-4*h*c))/2/h,D(f)>"1e12"&&(f=.5),D(p)>"1e12"&&(p=.5),f>0&&f<1&&(l=zt(t,e,r,i,n,a,s,o,f),g.push(l.x),d.push(l.y)),p>0&&p<1&&(l=zt(t,e,r,i,n,a,s,o,p),g.push(l.x),d.push(l.y)),{min:{x:q[A](0,g),y:q[A](0,d)},max:{x:j[A](0,g),y:j[A](0,d)}}}),Ft=x._path2curve=d(function(t,e){var r=!e&&Ct(t)
if(!e&&r.curve)return St(r.curve)
for(var i=Tt(t),n=e&&Tt(e),a={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},s={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},o=(function(t,e){var r,i
if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y]
switch(!(t[0]in{T:1,Q:1})&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2]
break
case"A":t=["C"][T](Mt[A](0,[e.x,e.y][T](t.slice(1))))
break
case"S":r=e.x+(e.x-(e.bx||e.x)),i=e.y+(e.y-(e.by||e.y)),t=["C",r,i][T](t.slice(1))
break
case"T":e.qx=e.x+(e.x-(e.qx||e.x)),e.qy=e.y+(e.y-(e.qy||e.y)),t=["C"][T](Lt(e.x,e.y,e.qx,e.qy,t[1],t[2]))
break
case"Q":e.qx=t[1],e.qy=t[2],t=["C"][T](Lt(e.x,e.y,t[1],t[2],t[3],t[4]))
break
case"L":t=["C"][T](Nt(e.x,e.y,t[1],t[2]))
break
case"H":t=["C"][T](Nt(e.x,e.y,t[1],e.y))
break
case"V":t=["C"][T](Nt(e.x,e.y,e.x,t[1]))
break
case"Z":t=["C"][T](Nt(e.x,e.y,e.X,e.Y))}return t}),l=function(t,e){if(t[e].length>7){t[e].shift()
for(var r=t[e];r.length;)t.splice(e++,0,["C"][T](r.splice(0,6)))
t.splice(e,1),c=j(i.length,n&&n.length||0)}},h=function(t,e,r,a,s){t&&e&&"M"==t[s][0]&&"M"!=e[s][0]&&(e.splice(s,0,["M",a.x,a.y]),r.bx=0,r.by=0,r.x=t[s][1],r.y=t[s][2],c=j(i.length,n&&n.length||0))},u=0,c=j(i.length,n&&n.length||0);u<c;u++){i[u]=o(i[u],a),l(i,u),n&&(n[u]=o(n[u],s)),n&&l(n,u),h(i,n,a,s,u),h(n,i,s,a,u)
var f=i[u],p=n&&n[u],d=f.length,g=n&&p.length
a.x=f[d-2],a.y=f[d-1],a.bx=Q(f[d-4])||a.x,a.by=Q(f[d-3])||a.y,s.bx=n&&(Q(p[g-4])||s.x),s.by=n&&(Q(p[g-3])||s.y),s.x=n&&p[g-2],s.y=n&&p[g-1]}return n||(r.curve=St(i)),n?[i,n]:i},null,St),Rt=(x._parseDots=d(function(t){for(var e=[],r=0,i=t.length;r<i;r++){var n={},a=t[r].match(/^([^:]*):?([\d\.]*)/)
if(n.color=x.getRGB(a[1]),n.color.error)return null
n.color=n.color.hex,a[2]&&(n.offset=a[2]+"%"),e.push(n)}for(r=1,i=e.length-1;r<i;r++)if(!e[r].offset){for(var s=Q(e[r-1].offset||0),o=0,l=r+1;l<i;l++)if(e[l].offset){o=e[l].offset
break}o||(o=100,l=i),o=Q(o)
for(var h=(o-s)/(l-r+1);r<l;r++)s+=h,e[r].offset=s+"%"}return e}),x._tear=function(t,e){t==e.top&&(e.top=t.prev),t==e.bottom&&(e.bottom=t.next),t.next&&(t.next.prev=t.prev),t.prev&&(t.prev.next=t.next)}),Pt=(x._tofront=function(t,e){e.top!==t&&(Rt(t,e),t.next=null,t.prev=e.top,e.top.next=t,e.top=t)},x._toback=function(t,e){e.bottom!==t&&(Rt(t,e),t.next=e.bottom,t.prev=null,e.bottom.prev=t,e.bottom=t)},x._insertafter=function(t,e,r){Rt(t,r),e==r.top&&(r.top=t),e.next&&(e.next.prev=t),t.next=e.next,t.prev=e,e.next=t},x._insertbefore=function(t,e,r){Rt(t,r),e==r.bottom&&(r.bottom=t),e.prev&&(e.prev.next=t),t.prev=e.prev,e.prev=t,t.next=e},x.toMatrix=function(t,e){var r=Bt(t),i={_:{transform:L},getBBox:function(){return r}}
return It(i,e),i.matrix}),It=(x.transformPath=function(t,e){return gt(t,Pt(t,e))},x._extractTransform=function(t,e){if(null==e)return t._.transform
e=z(e).replace(/\.{3}|\u2026/g,t._.transform||L)
var r=x.parseTransformString(e),i=0,n=0,s=0,o=1,l=1,h=t._,u=new a
if(h.transform=r||[],r)for(var c=0,f=r.length;c<f;c++){var p,d,g,v,y,m=r[c],b=m.length,_=z(m[0]).toLowerCase(),w=m[0]!=_,k=w?u.invert():0
"t"==_&&3==b?w?(p=k.x(0,0),d=k.y(0,0),g=k.x(m[1],m[2]),v=k.y(m[1],m[2]),u.translate(g-p,v-d)):u.translate(m[1],m[2]):"r"==_?2==b?(y=y||t.getBBox(1),u.rotate(m[1],y.x+y.width/2,y.y+y.height/2),i+=m[1]):4==b&&(w?(g=k.x(m[2],m[3]),v=k.y(m[2],m[3]),u.rotate(m[1],g,v)):u.rotate(m[1],m[2],m[3]),i+=m[1]):"s"==_?2==b||3==b?(y=y||t.getBBox(1),u.scale(m[1],m[b-1],y.x+y.width/2,y.y+y.height/2),o*=m[1],l*=m[b-1]):5==b&&(w?(g=k.x(m[3],m[4]),v=k.y(m[3],m[4]),u.scale(m[1],m[2],g,v)):u.scale(m[1],m[2],m[3],m[4]),o*=m[1],l*=m[2]):"m"==_&&7==b&&u.add(m[1],m[2],m[3],m[4],m[5],m[6]),h.dirtyT=1,t.matrix=u}t.matrix=u,h.sx=o,h.sy=l,h.deg=i,h.dx=n=u.e,h.dy=s=u.f,1==o&&1==l&&!i&&h.bbox?(h.bbox.x+=+n,h.bbox.y+=+s):h.dirtyT=1}),jt=function(t){var e=t[0]
switch(e.toLowerCase()){case"t":return[e,0,0]
case"m":return[e,1,0,0,1,0,0]
case"r":return 4==t.length?[e,0,t[2],t[3]]:[e,0]
case"s":return 5==t.length?[e,1,1,t[3],t[4]]:3==t.length?[e,1,1]:[e,1]}},qt=x._equaliseTransform=function(t,e){e=z(e).replace(/\.{3}|\u2026/g,t),t=x.parseTransformString(t)||[],e=x.parseTransformString(e)||[]
for(var r,i,n,a,s=j(t.length,e.length),o=[],l=[],h=0;h<s;h++){if(n=t[h]||jt(e[h]),a=e[h]||jt(n),n[0]!=a[0]||"r"==n[0].toLowerCase()&&(n[2]!=a[2]||n[3]!=a[3])||"s"==n[0].toLowerCase()&&(n[3]!=a[3]||n[4]!=a[4]))return
for(o[h]=[],l[h]=[],r=0,i=j(n.length,a.length);r<i;r++)r in n&&(o[h][r]=n[r]),r in a&&(l[h][r]=a[r])}return{from:o,to:l}}
x._getContainer=function(t,e,r,i){var n
if(null!=(n=null!=i||x.is(t,"object")?t:C.doc.getElementById(t)))return n.tagName?null==e?{container:n,width:n.style.pixelWidth||n.offsetWidth,height:n.style.pixelHeight||n.offsetHeight}:{container:n,width:e,height:r}:{container:1,x:t,y:e,width:r,height:i}},x.pathToRelative=At,x._engine={},x.path2curve=Ft,x.matrix=function(t,e,r,i,n,s){return new a(t,e,r,i,n,s)},function(t){function e(t){var e=I.sqrt(r(t))
t[0]&&(t[0]/=e),t[1]&&(t[1]/=e)}function r(t){return t[0]*t[0]+t[1]*t[1]}t.add=function(t,e,r,i,n,s){var o,l,h,u,c=[[],[],[]],f=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],p=[[t,r,n],[e,i,s],[0,0,1]]
for(t&&t instanceof a&&(p=[[t.a,t.c,t.e],[t.b,t.d,t.f],[0,0,1]]),o=0;o<3;o++)for(l=0;l<3;l++){for(u=0,h=0;h<3;h++)u+=f[o][h]*p[h][l]
c[o][l]=u}this.a=c[0][0],this.b=c[1][0],this.c=c[0][1],this.d=c[1][1],this.e=c[0][2],this.f=c[1][2]},t.invert=function(){var t=this,e=t.a*t.d-t.b*t.c
return new a(t.d/e,-t.b/e,-t.c/e,t.a/e,(t.c*t.f-t.d*t.e)/e,(t.b*t.e-t.a*t.f)/e)},t.clone=function(){return new a(this.a,this.b,this.c,this.d,this.e,this.f)},t.translate=function(t,e){this.add(1,0,0,1,t,e)},t.scale=function(t,e,r,i){null==e&&(e=t),(r||i)&&this.add(1,0,0,1,r,i),this.add(t,0,0,e,0,0),(r||i)&&this.add(1,0,0,1,-r,-i)},t.rotate=function(t,e,r){t=x.rad(t),e=e||0,r=r||0
var i=+I.cos(t).toFixed(9),n=+I.sin(t).toFixed(9)
this.add(i,n,-n,i,e,r),this.add(1,0,0,1,-e,-r)},t.x=function(t,e){return t*this.a+e*this.c+this.e},t.y=function(t,e){return t*this.b+e*this.d+this.f},t.get=function(t){return+this[z.fromCharCode(97+t)].toFixed(4)},t.toString=function(){return x.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},t.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},t.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},t.split=function(){var t={}
t.dx=this.e,t.dy=this.f
var i=[[this.a,this.c],[this.b,this.d]]
t.scalex=I.sqrt(r(i[0])),e(i[0]),t.shear=i[0][0]*i[1][0]+i[0][1]*i[1][1],i[1]=[i[1][0]-i[0][0]*t.shear,i[1][1]-i[0][1]*t.shear],t.scaley=I.sqrt(r(i[1])),e(i[1]),t.shear/=t.scaley
var n=-i[0][1],a=i[1][1]
return a<0?(t.rotate=x.deg(I.acos(a)),n<0&&(t.rotate=360-t.rotate)):t.rotate=x.deg(I.asin(n)),t.isSimple=!(+t.shear.toFixed(9)||t.scalex.toFixed(9)!=t.scaley.toFixed(9)&&t.rotate),t.isSuperSimple=!+t.shear.toFixed(9)&&t.scalex.toFixed(9)==t.scaley.toFixed(9)&&!t.rotate,t.noRotation=!+t.shear.toFixed(9)&&!t.rotate,t},t.toTransformString=function(t){var e=t||this[E]()
return e.isSimple?(e.scalex=+e.scalex.toFixed(4),e.scaley=+e.scaley.toFixed(4),e.rotate=+e.rotate.toFixed(4),(e.dx||e.dy?"t"+[e.dx,e.dy]:L)+(1!=e.scalex||1!=e.scaley?"s"+[e.scalex,e.scaley,0,0]:L)+(e.rotate?"r"+[e.rotate,0,0]:L)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(a.prototype)
var Dt=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/)
"Apple Computer, Inc."==navigator.vendor&&(Dt&&Dt[1]<4||"iP"==navigator.platform.slice(0,2))||"Google Inc."==navigator.vendor&&Dt&&Dt[1]<8?m.safari=function(){var t=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"})
setTimeout(function(){t.remove()})}:m.safari=ut
for(var Vt=function(){this.returnValue=!1},Ot=function(){return this.originalEvent.preventDefault()},Yt=function(){this.cancelBubble=!0},Gt=function(){return this.originalEvent.stopPropagation()},Wt=function(){return C.doc.addEventListener?function(t,e,r,i){var n=N&&R[e]?R[e]:e,a=function(n){var a=C.doc.documentElement.scrollTop||C.doc.body.scrollTop,s=C.doc.documentElement.scrollLeft||C.doc.body.scrollLeft,o=n.clientX+s,l=n.clientY+a
if(N&&R[k](e))for(var h=0,u=n.targetTouches&&n.targetTouches.length;h<u;h++)if(n.targetTouches[h].target==t){var c=n
n=n.targetTouches[h],n.originalEvent=c,n.preventDefault=Ot,n.stopPropagation=Gt
break}return r.call(i,n,o,l)}
return t.addEventListener(n,a,!1),function(){return t.removeEventListener(n,a,!1),!0}}:C.doc.attachEvent?function(t,e,r,i){var n=function(t){t=t||C.win.event
var e=C.doc.documentElement.scrollTop||C.doc.body.scrollTop,n=C.doc.documentElement.scrollLeft||C.doc.body.scrollLeft,a=t.clientX+n,s=t.clientY+e
return t.preventDefault=t.preventDefault||Vt,t.stopPropagation=t.stopPropagation||Yt,r.call(i,t,a,s)}
return t.attachEvent("on"+e,n),function(){return t.detachEvent("on"+e,n),!0}}:void 0}(),Xt=[],Ht=function(t){for(var e,r=t.clientX,i=t.clientY,n=C.doc.documentElement.scrollTop||C.doc.body.scrollTop,a=C.doc.documentElement.scrollLeft||C.doc.body.scrollLeft,s=Xt.length;s--;){if(e=Xt[s],N){for(var o,l=t.touches.length;l--;)if(o=t.touches[l],o.identifier==e.el._drag.id){r=o.clientX,i=o.clientY,(t.originalEvent?t.originalEvent:t).preventDefault()
break}}else t.preventDefault()
var h,u=e.el.node,c=u.nextSibling,f=u.parentNode,p=u.style.display
C.win.opera&&f.removeChild(u),u.style.display="none",h=e.el.paper.getElementByPoint(r,i),u.style.display=p,C.win.opera&&(c?f.insertBefore(u,c):f.appendChild(u)),h&&eve("raphael.drag.over."+e.el.id,e.el,h),r+=a,i+=n,eve("raphael.drag.move."+e.el.id,e.move_scope||e.el,r-e.el._drag.x,i-e.el._drag.y,r,i,t)}},Ut=function(t){x.unmousemove(Ht).unmouseup(Ut)
for(var e,r=Xt.length;r--;)e=Xt[r],e.el._drag={},eve("raphael.drag.end."+e.el.id,e.end_scope||e.start_scope||e.move_scope||e.el,t)
Xt=[]},$t=x.el={},Zt=F.length;Zt--;)(function(t){x[t]=$t[t]=function(e,r){return x.is(e,"function")&&(this.events=this.events||[],this.events.push({name:t,f:e,unbind:Wt(this.shape||this.node||C.doc,t,e,r||this)})),this},x["un"+t]=$t["un"+t]=function(e){for(var r=this.events||[],i=r.length;i--;)if(r[i].name==t&&r[i].f==e)return r[i].unbind(),r.splice(i,1),!r.length&&delete this.events,this
return this}})(F[Zt])
$t.data=function(t,e){var r=lt[this.id]=lt[this.id]||{}
if(1==arguments.length){if(x.is(t,"object")){for(var i in t)t[k](i)&&this.data(i,t[i])
return this}return eve("raphael.data.get."+this.id,this,r[t],t),r[t]}return r[t]=e,eve("raphael.data.set."+this.id,this,e,t),this},$t.removeData=function(t){return null==t?lt[this.id]={}:lt[this.id]&&delete lt[this.id][t],this},$t.hover=function(t,e,r,i){return this.mouseover(t,r).mouseout(e,i||r)},$t.unhover=function(t,e){return this.unmouseover(t).unmouseout(e)}
var Qt=[]
$t.drag=function(t,e,r,i,n,a){function s(s){(s.originalEvent||s).preventDefault()
var o=C.doc.documentElement.scrollTop||C.doc.body.scrollTop,l=C.doc.documentElement.scrollLeft||C.doc.body.scrollLeft
this._drag.x=s.clientX+l,this._drag.y=s.clientY+o,this._drag.id=s.identifier,!Xt.length&&x.mousemove(Ht).mouseup(Ut),Xt.push({el:this,move_scope:i,start_scope:n,end_scope:a}),e&&eve.on("raphael.drag.start."+this.id,e),t&&eve.on("raphael.drag.move."+this.id,t),r&&eve.on("raphael.drag.end."+this.id,r),eve("raphael.drag.start."+this.id,n||i||this,s.clientX+l,s.clientY+o,s)}return this._drag={},Qt.push({el:this,start:s}),this.mousedown(s),this},$t.onDragOver=function(t){t?eve.on("raphael.drag.over."+this.id,t):eve.unbind("raphael.drag.over."+this.id)},$t.undrag=function(){for(var t=Qt.length;t--;)Qt[t].el==this&&(this.unmousedown(Qt[t].start),Qt.splice(t,1),eve.unbind("raphael.drag.*."+this.id))
!Qt.length&&x.unmousemove(Ht).unmouseup(Ut)},m.circle=function(t,e,r){var i=x._engine.circle(this,t||0,e||0,r||0)
return this.__set__&&this.__set__.push(i),i},m.rect=function(t,e,r,i,n){var a=x._engine.rect(this,t||0,e||0,r||0,i||0,n||0)
return this.__set__&&this.__set__.push(a),a},m.ellipse=function(t,e,r,i){var n=x._engine.ellipse(this,t||0,e||0,r||0,i||0)
return this.__set__&&this.__set__.push(n),n},m.path=function(t){t&&!x.is(t,G)&&!x.is(t[0],W)&&(t+=L)
var e=x._engine.path(x.format[A](x,arguments),this)
return this.__set__&&this.__set__.push(e),e},m.image=function(t,e,r,i,n){var a=x._engine.image(this,t||"about:blank",e||0,r||0,i||0,n||0)
return this.__set__&&this.__set__.push(a),a},m.text=function(t,e,r){var i=x._engine.text(this,t||0,e||0,z(r))
return this.__set__&&this.__set__.push(i),i},m.set=function(t){!x.is(t,"array")&&(t=Array.prototype.splice.call(arguments,0,arguments.length))
var e=new he(t)
return this.__set__&&this.__set__.push(e),e},m.setStart=function(t){this.__set__=t||this.set()},m.setFinish=function(t){var e=this.__set__
return delete this.__set__,e},m.setSize=function(t,e){return x._engine.setSize.call(this,t,e)},m.setViewBox=function(t,e,r,i,n){return x._engine.setViewBox.call(this,t,e,r,i,n)},m.top=m.bottom=null,m.raphael=x
var Jt=function(t){var e=t.getBoundingClientRect(),r=t.ownerDocument,i=r.body,n=r.documentElement,a=n.clientTop||i.clientTop||0,s=n.clientLeft||i.clientLeft||0
return{y:e.top+(C.win.pageYOffset||n.scrollTop||i.scrollTop)-a,x:e.left+(C.win.pageXOffset||n.scrollLeft||i.scrollLeft)-s}}
m.getElementByPoint=function(t,e){var r=this,i=r.canvas,n=C.doc.elementFromPoint(t,e)
if(C.win.opera&&"svg"==n.tagName){var a=Jt(i),s=i.createSVGRect()
s.x=t-a.x,s.y=e-a.y,s.width=s.height=1
var o=i.getIntersectionList(s,null)
o.length&&(n=o[o.length-1])}if(!n)return null
for(;n.parentNode&&n!=i.parentNode&&!n.raphael;)n=n.parentNode
return n==r.canvas.parentNode&&(n=i),n=n&&n.raphael?r.getById(n.raphaelid):null},m.getById=function(t){for(var e=this.bottom;e;){if(e.id==t)return e
e=e.next}return null},m.forEach=function(t,e){for(var r=this.bottom;r;){if(!1===t.call(e,r))return this
r=r.next}return this},m.getElementsByPoint=function(t,e){var r=this.set()
return this.forEach(function(i){i.isPointInside(t,e)&&r.push(i)}),r},$t.isPointInside=function(t,e){var r=this.realPath=this.realPath||dt[this.type](this)
return x.isPointInsidePath(r,t,e)},$t.getBBox=function(t){if(this.removed)return{}
var e=this._
return t?(!e.dirty&&e.bboxwt||(this.realPath=dt[this.type](this),e.bboxwt=Bt(this.realPath),e.bboxwt.toString=n,e.dirty=0),e.bboxwt):((e.dirty||e.dirtyT||!e.bbox)&&(!e.dirty&&this.realPath||(e.bboxwt=0,this.realPath=dt[this.type](this)),e.bbox=Bt(gt(this.realPath,this.matrix)),e.bbox.toString=n,e.dirty=e.dirtyT=0),e.bbox)},$t.clone=function(){if(this.removed)return null
var t=this.paper[this.type]().attr(this.attr())
return this.__set__&&this.__set__.push(t),t},$t.glow=function(t){if("text"==this.type)return null
t=t||{}
var e={width:(t.width||10)+(+this.attr("stroke-width")||1),fill:t.fill||!1,opacity:t.opacity||.5,offsetx:t.offsetx||0,offsety:t.offsety||0,color:t.color||"#000"},r=e.width/2,i=this.paper,n=i.set(),a=this.realPath||dt[this.type](this)
a=this.matrix?gt(a,this.matrix):a
for(var s=1;s<r+1;s++)n.push(i.path(a).attr({stroke:e.color,fill:e.fill?e.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(e.width/r*s).toFixed(3),opacity:+(e.opacity/r).toFixed(3)}))
return n.insertBefore(this).translate(e.offsetx,e.offsety)}
var Kt=function(t,e,r,i,n,a,s,o,l){return null==l?u(t,e,r,i,n,a,s,o):x.findDotsAtSegment(t,e,r,i,n,a,s,o,h(t,e,r,i,n,a,s,o,l))},te=function(t,e){return function(r,i,n){r=Ft(r)
for(var a,s,o,l,h,u="",c={},f=0,p=0,d=r.length;p<d;p++){if(o=r[p],"M"==o[0])a=+o[1],s=+o[2]
else{if(l=Kt(a,s,o[1],o[2],o[3],o[4],o[5],o[6]),f+l>i){if(e&&!c.start){if(h=Kt(a,s,o[1],o[2],o[3],o[4],o[5],o[6],i-f),u+=["C"+h.start.x,h.start.y,h.m.x,h.m.y,h.x,h.y],n)return u
c.start=u,u=["M"+h.x,h.y+"C"+h.n.x,h.n.y,h.end.x,h.end.y,o[5],o[6]].join(),f+=l,a=+o[5],s=+o[6]
continue}if(!t&&!e)return h=Kt(a,s,o[1],o[2],o[3],o[4],o[5],o[6],i-f),{x:h.x,y:h.y,alpha:h.alpha}}f+=l,a=+o[5],s=+o[6]}u+=o.shift()+o}return c.end=u,h=t?f:e?c:x.findDotsAtSegment(a,s,o[0],o[1],o[2],o[3],o[4],o[5],1),h.alpha&&(h={x:h.x,y:h.y,alpha:h.alpha}),h}},ee=te(1),re=te(),ie=te(0,1)
x.getTotalLength=ee,x.getPointAtLength=re,x.getSubpath=function(t,e,r){if(this.getTotalLength(t)-r<1e-6)return ie(t,e).end
var i=ie(t,r,1)
return e?ie(i,e).end:i},$t.getTotalLength=function(){if("path"==this.type)return this.node.getTotalLength?this.node.getTotalLength():ee(this.attrs.path)},$t.getPointAtLength=function(t){if("path"==this.type)return re(this.attrs.path,t)},$t.getSubpath=function(t,e){if("path"==this.type)return x.getSubpath(this.attrs.path,t,e)}
var ne=x.easing_formulas={linear:function(t){return t},"<":function(t){return V(t,1.7)},">":function(t){return V(t,.48)},"<>":function(t){var e=.48-t/1.04,r=I.sqrt(.1734+e*e),i=r-e,n=V(D(i),1/3)*(i<0?-1:1),a=-r-e,s=V(D(a),1/3)*(a<0?-1:1),o=n+s+.5
return 3*(1-o)*o*o+o*o*o},backIn:function(t){var e=1.70158
return t*t*((e+1)*t-e)},backOut:function(t){t-=1
var e=1.70158
return t*t*((e+1)*t+e)+1},elastic:function(t){return t==!!t?t:V(2,-10*t)*I.sin(2*(t-.075)*O/.3)+1},bounce:function(t){var e,r=7.5625,i=2.75
return t<1/i?e=r*t*t:t<2/i?(t-=1.5/i,e=r*t*t+.75):t<2.5/i?(t-=2.25/i,e=r*t*t+.9375):(t-=2.625/i,e=r*t*t+.984375),e}}
ne.easeIn=ne["ease-in"]=ne["<"],ne.easeOut=ne["ease-out"]=ne[">"],ne.easeInOut=ne["ease-in-out"]=ne["<>"],ne["back-in"]=ne.backIn,ne["back-out"]=ne.backOut
var ae=[],se=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){setTimeout(t,16)},oe=function(){for(var t=+new Date,r=0;r<ae.length;r++){var i=ae[r]
if(!i.el.removed&&!i.paused){var n,a,s=t-i.start,o=i.ms,l=i.easing,h=i.from,u=i.diff,c=i.to,f=(i.t,i.el),p={},d={}
if(i.initstatus?(s=(i.initstatus*i.anim.top-i.prev)/(i.percent-i.prev)*o,i.status=i.initstatus,delete i.initstatus,i.stop&&ae.splice(r--,1)):i.status=(i.prev+(i.percent-i.prev)*(s/o))/i.anim.top,!(s<0))if(s<o){var g=l(s/o)
for(var v in h)if(h[k](v)){switch(et[v]){case Y:n=+h[v]+g*o*u[v]
break
case"colour":n="rgb("+[le(Z(h[v].r+g*o*u[v].r)),le(Z(h[v].g+g*o*u[v].g)),le(Z(h[v].b+g*o*u[v].b))].join(",")+")"
break
case"path":n=[]
for(var y=0,m=h[v].length;y<m;y++){n[y]=[h[v][y][0]]
for(var b=1,_=h[v][y].length;b<_;b++)n[y][b]=+h[v][y][b]+g*o*u[v][y][b]
n[y]=n[y].join(M)}n=n.join(M)
break
case"transform":if(u[v].real)for(n=[],y=0,m=h[v].length;y<m;y++)for(n[y]=[h[v][y][0]],b=1,_=h[v][y].length;b<_;b++)n[y][b]=h[v][y][b]+g*o*u[v][y][b]
else{var w=function(t){return+h[v][t]+g*o*u[v][t]}
n=[["m",w(0),w(1),w(2),w(3),w(4),w(5)]]}break
case"csv":if("clip-rect"==v)for(n=[],y=4;y--;)n[y]=+h[v][y]+g*o*u[v][y]
break
default:var C=[][T](h[v])
for(n=[],y=f.paper.customAttributes[v].length;y--;)n[y]=+C[y]+g*o*u[v][y]}p[v]=n}f.attr(p),function(t,e,r){setTimeout(function(){eve("raphael.anim.frame."+t,e,r)})}(f.id,f,i.anim)}else{if(function(t,e,r){setTimeout(function(){eve("raphael.anim.frame."+e.id,e,r),eve("raphael.anim.finish."+e.id,e,r),x.is(t,"function")&&t.call(e)})}(i.callback,f,i.anim),f.attr(c),ae.splice(r--,1),i.repeat>1&&!i.next){for(a in c)c[k](a)&&(d[a]=i.totalOrigin[a])
i.el.attr(d),e(i.anim,i.el,i.anim.percents[0],null,i.totalOrigin,i.repeat-1)}i.next&&!i.stop&&e(i.anim,i.el,i.next,null,i.totalOrigin,i.repeat)}}}x.svg&&f&&f.paper&&f.paper.safari(),ae.length&&se(oe)},le=function(t){return t>255?255:t<0?0:t}
$t.animateWith=function(t,i,n,a,s,o){var l=this
if(l.removed)return o&&o.call(l),l
var h=n instanceof r?n:x.animation(n,a,s,o)
e(h,l,h.percents[0],null,l.attr())
for(var u=0,c=ae.length;u<c;u++)if(ae[u].anim==i&&ae[u].el==t){ae[c-1].start=ae[u].start
break}return l},$t.onAnimation=function(t){return t?eve.on("raphael.anim.frame."+this.id,t):eve.unbind("raphael.anim.frame."+this.id),this},r.prototype.delay=function(t){var e=new r(this.anim,this.ms)
return e.times=this.times,e.del=+t||0,e},r.prototype.repeat=function(t){var e=new r(this.anim,this.ms)
return e.del=this.del,e.times=I.floor(j(t,0))||1,e},x.animation=function(t,e,i,n){if(t instanceof r)return t
!x.is(i,"function")&&i||(n=n||i||null,i=null),t=Object(t),e=+e||0
var a,s,o={}
for(s in t)t[k](s)&&Q(s)!=s&&Q(s)+"%"!=s&&(a=!0,o[s]=t[s])
return a?(i&&(o.easing=i),n&&(o.callback=n),new r({100:o},e)):new r(t,e)},$t.animate=function(t,i,n,a){var s=this
if(s.removed)return a&&a.call(s),s
var o=t instanceof r?t:x.animation(t,i,n,a)
return e(o,s,o.percents[0],null,s.attr()),s},$t.setTime=function(t,e){return t&&null!=e&&this.status(t,q(e,t.ms)/t.ms),this},$t.status=function(t,r){var i,n,a=[],s=0
if(null!=r)return e(t,this,-1,q(r,1)),this
for(i=ae.length;s<i;s++)if(n=ae[s],n.el.id==this.id&&(!t||n.anim==t)){if(t)return n.status
a.push({anim:n.anim,status:n.status})}return t?0:a},$t.pause=function(t){for(var e=0;e<ae.length;e++)ae[e].el.id==this.id&&(!t||ae[e].anim==t)&&!1!==eve("raphael.anim.pause."+this.id,this,ae[e].anim)&&(ae[e].paused=!0)
return this},$t.resume=function(t){for(var e=0;e<ae.length;e++)if(ae[e].el.id==this.id&&(!t||ae[e].anim==t)){var r=ae[e]
!1!==eve("raphael.anim.resume."+this.id,this,r.anim)&&(delete r.paused,this.status(r.anim,r.status))}return this},$t.stop=function(t){for(var e=0;e<ae.length;e++)ae[e].el.id==this.id&&(!t||ae[e].anim==t)&&!1!==eve("raphael.anim.stop."+this.id,this,ae[e].anim)&&ae.splice(e--,1)
return this},eve.on("raphael.remove",t),eve.on("raphael.clear",t),$t.toString=function(){return"Raphaël’s object"}
var he=function(t){if(this.items=[],this.length=0,this.type="set",t)for(var e=0,r=t.length;e<r;e++)t[e]&&(t[e].constructor==$t.constructor||t[e].constructor==he)&&(this[this.items.length]=this.items[this.items.length]=t[e],this.length++)},ue=he.prototype
ue.push=function(){for(var t,e,r=0,i=arguments.length;r<i;r++)(t=arguments[r])&&(t.constructor==$t.constructor||t.constructor==he)&&(e=this.items.length,this[e]=this.items[e]=t,this.length++)
return this},ue.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},ue.forEach=function(t,e){for(var r=0,i=this.items.length;r<i;r++)if(!1===t.call(e,this.items[r],r))return this
return this}
for(var ce in $t)$t[k](ce)&&(ue[ce]=function(t){return function(){var e=arguments
return this.forEach(function(r){r[t][A](r,e)})}}(ce))
ue.attr=function(t,e){if(t&&x.is(t,W)&&x.is(t[0],"object"))for(var r=0,i=t.length;r<i;r++)this.items[r].attr(t[r])
else for(var n=0,a=this.items.length;n<a;n++)this.items[n].attr(t,e)
return this},ue.clear=function(){for(;this.length;)this.pop()},ue.splice=function(t,e,r){t=t<0?j(this.length+t,0):t,e=j(0,q(this.length-t,e))
var i,n=[],a=[],s=[]
for(i=2;i<arguments.length;i++)s.push(arguments[i])
for(i=0;i<e;i++)a.push(this[t+i])
for(;i<this.length-t;i++)n.push(this[t+i])
var o=s.length
for(i=0;i<o+n.length;i++)this.items[t+i]=this[t+i]=i<o?s[i]:n[i-o]
for(i=this.items.length=this.length-=e-o;this[i];)delete this[i++]
return new he(a)},ue.exclude=function(t){for(var e=0,r=this.length;e<r;e++)if(this[e]==t)return this.splice(e,1),!0},ue.animate=function(t,e,r,i){(x.is(r,"function")||!r)&&(i=r||null)
var n,a,s=this.items.length,o=s,l=this
if(!s)return this
i&&(a=function(){!--s&&i.call(l)}),r=x.is(r,G)?r:a
var h=x.animation(t,e,r,a)
for(n=this.items[--o].animate(h);o--;)this.items[o]&&!this.items[o].removed&&this.items[o].animateWith(n,h,h)
return this},ue.insertAfter=function(t){for(var e=this.items.length;e--;)this.items[e].insertAfter(t)
return this},ue.getBBox=function(){for(var t=[],e=[],r=[],i=[],n=this.items.length;n--;)if(!this.items[n].removed){var a=this.items[n].getBBox()
t.push(a.x),e.push(a.y),r.push(a.x+a.width),i.push(a.y+a.height)}return t=q[A](0,t),e=q[A](0,e),r=j[A](0,r),i=j[A](0,i),{x:t,y:e,x2:r,y2:i,width:r-t,height:i-e}},ue.clone=function(t){t=new he
for(var e=0,r=this.items.length;e<r;e++)t.push(this.items[e].clone())
return t},ue.toString=function(){return"Raphaël‘s set"},x.registerFont=function(t){if(!t.face)return t
this.fonts=this.fonts||{}
var e={w:t.w,face:{},glyphs:{}},r=t.face["font-family"]
for(var i in t.face)t.face[k](i)&&(e.face[i]=t.face[i])
if(this.fonts[r]?this.fonts[r].push(e):this.fonts[r]=[e],!t.svg){e.face["units-per-em"]=J(t.face["units-per-em"],10)
for(var n in t.glyphs)if(t.glyphs[k](n)){var a=t.glyphs[n]
if(e.glyphs[n]={w:a.w,k:{},d:a.d&&"M"+a.d.replace(/[mlcxtrv]/g,function(t){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[t]||"M"})+"z"},a.k)for(var s in a.k)a[k](s)&&(e.glyphs[n].k[s]=a.k[s])}}return t},m.getFont=function(t,e,r,i){if(i=i||"normal",r=r||"normal",e=+e||{normal:400,bold:700,lighter:300,bolder:800}[e]||400,x.fonts){var n=x.fonts[t]
if(!n){var a=new RegExp("(^|\\s)"+t.replace(/[^\w\d\s+!~.:_-]/g,L)+"(\\s|$)","i")
for(var s in x.fonts)if(x.fonts[k](s)&&a.test(s)){n=x.fonts[s]
break}}var o
if(n)for(var l=0,h=n.length;l<h&&(o=n[l],o.face["font-weight"]!=e||o.face["font-style"]!=r&&o.face["font-style"]||o.face["font-stretch"]!=i);l++);return o}},m.print=function(t,e,r,i,n,a,s){a=a||"middle",s=j(q(s||0,1),-1)
var o,l=z(r)[E](L),h=0,u=0,c=L
if(x.is(i,r)&&(i=this.getFont(i)),i){o=(n||16)/i.face["units-per-em"]
for(var f=i.face.bbox[E](b),p=+f[0],d=f[3]-f[1],g=0,v=+f[1]+("baseline"==a?d+ +i.face.descent:d/2),y=0,m=l.length;y<m;y++){if("\n"==l[y])h=0,w=0,u=0,g+=d
else{var _=u&&i.glyphs[l[y-1]]||{},w=i.glyphs[l[y]]
h+=u?(_.w||i.w)+(_.k&&_.k[l[y]]||0)+i.w*s:0,u=1}w&&w.d&&(c+=x.transformPath(w.d,["t",h*o,g*o,"s",o,o,p,v,"t",(t-p)/o,(e-v)/o]))}}return this.path(c).attr({fill:"#000",stroke:"none"})},m.add=function(t){if(x.is(t,"array"))for(var e,r=this.set(),i=0,n=t.length;i<n;i++)e=t[i]||{},_[k](e.type)&&r.push(this[e.type]().attr(e))
return r},x.format=function(t,e){var r=x.is(e,W)?[0][T](e):arguments
return t&&x.is(t,G)&&r.length-1&&(t=t.replace(w,function(t,e){return null==r[++e]?L:r[e]})),t||L},x.fullfill=function(){var t=/\{([^\}]+)\}/g,e=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,r=function(t,r,i){var n=i
return r.replace(e,function(t,e,r,i,a){e=e||i,n&&(e in n&&(n=n[e]),"function"==typeof n&&a&&(n=n()))}),n=(null==n||n==i?t:n)+""}
return function(e,i){return String(e).replace(t,function(t,e){return r(t,e,i)})}}(),x.ninja=function(){return B.was?C.win.Raphael=B.is:delete Raphael,x},x.st=ue,function(t,e,r){function i(){/in/.test(t.readyState)?setTimeout(i,9):x.eve("raphael.DOMload")}null==t.readyState&&t.addEventListener&&(t.addEventListener(e,r=function(){t.removeEventListener(e,r,!1),t.readyState="complete"},!1),t.readyState="loading"),i()}(document,"DOMContentLoaded"),B.was?C.win.Raphael=x:Raphael=x,eve.on("raphael.DOMload",function(){y=!0})}(),window.Raphael.svg&&function(t){var e="hasOwnProperty",r=String,i=parseFloat,n=parseInt,a=Math,s=a.max,o=a.abs,l=a.pow,h=/[, ]+/,u=t.eve,c="",f=" ",p="http://www.w3.org/1999/xlink",d={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},g={}
t.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version}
var v=function(i,n){if(n){"string"==typeof i&&(i=v(i))
for(var a in n)n[e](a)&&("xlink:"==a.substring(0,6)?i.setAttributeNS(p,a.substring(6),r(n[a])):i.setAttribute(a,r(n[a])))}else i=t._g.doc.createElementNS("http://www.w3.org/2000/svg",i),i.style&&(i.style.webkitTapHighlightColor="rgba(0,0,0,0)")
return i},x=function(e,n){var h="linear",u=e.id+n,f=.5,p=.5,d=e.node,g=e.paper,x=d.style,y=t._g.doc.getElementById(u)
if(!y){if(n=r(n).replace(t._radial_gradient,function(t,e,r){if(h="radial",e&&r){f=i(e),p=i(r)
var n=2*(p>.5)-1
l(f-.5,2)+l(p-.5,2)>.25&&(p=a.sqrt(.25-l(f-.5,2))*n+.5)&&.5!=p&&(p=p.toFixed(5)-1e-5*n)}return c}),n=n.split(/\s*\-\s*/),"linear"==h){var m=n.shift()
if(m=-i(m),isNaN(m))return null
var b=[0,0,a.cos(t.rad(m)),a.sin(t.rad(m))],_=1/(s(o(b[2]),o(b[3]))||1)
b[2]*=_,b[3]*=_,b[2]<0&&(b[0]=-b[2],b[2]=0),b[3]<0&&(b[1]=-b[3],b[3]=0)}var w=t._parseDots(n)
if(!w)return null
if(u=u.replace(/[\(\)\s,\xb0#]/g,"_"),e.gradient&&u!=e.gradient.id&&(g.defs.removeChild(e.gradient),delete e.gradient),!e.gradient){y=v(h+"Gradient",{id:u}),e.gradient=y,v(y,"radial"==h?{fx:f,fy:p}:{x1:b[0],y1:b[1],x2:b[2],y2:b[3],gradientTransform:e.matrix.invert()}),g.defs.appendChild(y)
for(var k=0,C=w.length;k<C;k++)y.appendChild(v("stop",{offset:w[k].offset?w[k].offset:k?"100%":"0%","stop-color":w[k].color||"#fff"}))}}return v(d,{fill:"url(#"+u+")",opacity:1,"fill-opacity":1}),x.fill=c,x.opacity=1,x.fillOpacity=1,1},y=function(t){var e=t.getBBox(1)
v(t.pattern,{patternTransform:t.matrix.invert()+" translate("+e.x+","+e.y+")"})},m=function(i,n,a){if("path"==i.type){for(var s,o,l,h,u,f=r(n).toLowerCase().split("-"),p=i.paper,x=a?"end":"start",y=i.node,m=i.attrs,b=m["stroke-width"],_=f.length,w="classic",k=3,C=3,B=5;_--;)switch(f[_]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":w=f[_]
break
case"wide":C=5
break
case"narrow":C=2
break
case"long":k=5
break
case"short":k=2}if("open"==w?(k+=2,C+=2,B+=2,l=1,h=a?4:1,u={fill:"none",stroke:m.stroke}):(h=l=k/2,u={fill:m.stroke,stroke:"none"}),i._.arrows?a?(i._.arrows.endPath&&g[i._.arrows.endPath]--,i._.arrows.endMarker&&g[i._.arrows.endMarker]--):(i._.arrows.startPath&&g[i._.arrows.startPath]--,i._.arrows.startMarker&&g[i._.arrows.startMarker]--):i._.arrows={},"none"!=w){var S="raphael-marker-"+w,A="raphael-marker-"+x+w+k+C
t._g.doc.getElementById(S)?g[S]++:(p.defs.appendChild(v(v("path"),{"stroke-linecap":"round",d:d[w],id:S})),g[S]=1)
var T,N=t._g.doc.getElementById(A)
N?(g[A]++,T=N.getElementsByTagName("use")[0]):(N=v(v("marker"),{id:A,markerHeight:C,markerWidth:k,orient:"auto",refX:h,refY:C/2}),T=v(v("use"),{"xlink:href":"#"+S,transform:(a?"rotate(180 "+k/2+" "+C/2+") ":c)+"scale("+k/B+","+C/B+")","stroke-width":(1/((k/B+C/B)/2)).toFixed(4)}),N.appendChild(T),p.defs.appendChild(N),g[A]=1),v(T,u)
var L=l*("diamond"!=w&&"oval"!=w)
a?(s=i._.arrows.startdx*b||0,o=t.getTotalLength(m.path)-L*b):(s=L*b,o=t.getTotalLength(m.path)-(i._.arrows.enddx*b||0)),u={},u["marker-"+x]="url(#"+A+")",(o||s)&&(u.d=Raphael.getSubpath(m.path,s,o)),v(y,u),i._.arrows[x+"Path"]=S,i._.arrows[x+"Marker"]=A,i._.arrows[x+"dx"]=L,i._.arrows[x+"Type"]=w,i._.arrows[x+"String"]=n}else a?(s=i._.arrows.startdx*b||0,o=t.getTotalLength(m.path)-s):(s=0,o=t.getTotalLength(m.path)-(i._.arrows.enddx*b||0)),i._.arrows[x+"Path"]&&v(y,{d:Raphael.getSubpath(m.path,s,o)}),delete i._.arrows[x+"Path"],delete i._.arrows[x+"Marker"],delete i._.arrows[x+"dx"],delete i._.arrows[x+"Type"],delete i._.arrows[x+"String"]
for(u in g)if(g[e](u)&&!g[u]){var M=t._g.doc.getElementById(u)
M&&M.parentNode.removeChild(M)}}},b={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},_=function(t,e,i){if(e=b[r(e).toLowerCase()]){for(var n=t.attrs["stroke-width"]||"1",a={round:n,square:n,butt:0}[t.attrs["stroke-linecap"]||i["stroke-linecap"]]||0,s=[],o=e.length;o--;)s[o]=e[o]*n+(o%2?1:-1)*a
v(t.node,{"stroke-dasharray":s.join(",")})}},w=function(i,a){var l=i.node,u=i.attrs,f=l.style.visibility
l.style.visibility="hidden"
for(var d in a)if(a[e](d)){if(!t._availableAttrs[e](d))continue
var g=a[d]
switch(u[d]=g,d){case"blur":i.blur(g)
break
case"href":case"title":case"target":var b=l.parentNode
if("a"!=b.tagName.toLowerCase()){var w=v("a")
b.insertBefore(w,l),w.appendChild(l),b=w}"target"==d?b.setAttributeNS(p,"show","blank"==g?"new":g):b.setAttributeNS(p,d,g)
break
case"cursor":l.style.cursor=g
break
case"transform":i.transform(g)
break
case"arrow-start":m(i,g)
break
case"arrow-end":m(i,g,1)
break
case"clip-rect":var C=r(g).split(h)
if(4==C.length){i.clip&&i.clip.parentNode.parentNode.removeChild(i.clip.parentNode)
var B=v("clipPath"),S=v("rect")
B.id=t.createUUID(),v(S,{x:C[0],y:C[1],width:C[2],height:C[3]}),B.appendChild(S),i.paper.defs.appendChild(B),v(l,{"clip-path":"url(#"+B.id+")"}),i.clip=S}if(!g){var A=l.getAttribute("clip-path")
if(A){var T=t._g.doc.getElementById(A.replace(/(^url\(#|\)$)/g,c))
T&&T.parentNode.removeChild(T),v(l,{"clip-path":c}),delete i.clip}}break
case"path":"path"==i.type&&(v(l,{d:g?u.path=t._pathToAbsolute(g):"M0,0"}),i._.dirty=1,i._.arrows&&("startString"in i._.arrows&&m(i,i._.arrows.startString),"endString"in i._.arrows&&m(i,i._.arrows.endString,1)))
break
case"width":if(l.setAttribute(d,g),i._.dirty=1,!u.fx)break
d="x",g=u.x
case"x":u.fx&&(g=-u.x-(u.width||0))
case"rx":if("rx"==d&&"rect"==i.type)break
case"cx":l.setAttribute(d,g),i.pattern&&y(i),i._.dirty=1
break
case"height":if(l.setAttribute(d,g),i._.dirty=1,!u.fy)break
d="y",g=u.y
case"y":u.fy&&(g=-u.y-(u.height||0))
case"ry":if("ry"==d&&"rect"==i.type)break
case"cy":l.setAttribute(d,g),i.pattern&&y(i),i._.dirty=1
break
case"r":"rect"==i.type?v(l,{rx:g,ry:g}):l.setAttribute(d,g),i._.dirty=1
break
case"src":"image"==i.type&&l.setAttributeNS(p,"href",g)
break
case"stroke-width":1==i._.sx&&1==i._.sy||(g/=s(o(i._.sx),o(i._.sy))||1),i.paper._vbSize&&(g*=i.paper._vbSize),l.setAttribute(d,g),u["stroke-dasharray"]&&_(i,u["stroke-dasharray"],a),i._.arrows&&("startString"in i._.arrows&&m(i,i._.arrows.startString),"endString"in i._.arrows&&m(i,i._.arrows.endString,1))
break
case"stroke-dasharray":_(i,g,a)
break
case"fill":var N=r(g).match(t._ISURL)
if(N){B=v("pattern")
var L=v("image")
B.id=t.createUUID(),v(B,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),v(L,{x:0,y:0,"xlink:href":N[1]}),B.appendChild(L),function(e){t._preload(N[1],function(){var t=this.offsetWidth,r=this.offsetHeight
v(e,{width:t,height:r}),v(L,{width:t,height:r}),i.paper.safari()})}(B),i.paper.defs.appendChild(B),v(l,{fill:"url(#"+B.id+")"}),i.pattern=B,i.pattern&&y(i)
break}var M=t.getRGB(g)
if(M.error){if(("circle"==i.type||"ellipse"==i.type||"r"!=r(g).charAt())&&x(i,g)){if("opacity"in u||"fill-opacity"in u){var z=t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g,c))
if(z){var E=z.getElementsByTagName("stop")
v(E[E.length-1],{"stop-opacity":("opacity"in u?u.opacity:1)*("fill-opacity"in u?u["fill-opacity"]:1)})}}u.gradient=g,u.fill="none"
break}}else delete a.gradient,delete u.gradient,!t.is(u.opacity,"undefined")&&t.is(a.opacity,"undefined")&&v(l,{opacity:u.opacity}),!t.is(u["fill-opacity"],"undefined")&&t.is(a["fill-opacity"],"undefined")&&v(l,{"fill-opacity":u["fill-opacity"]})
M[e]("opacity")&&v(l,{"fill-opacity":M.opacity>1?M.opacity/100:M.opacity})
case"stroke":M=t.getRGB(g),l.setAttribute(d,M.hex),"stroke"==d&&M[e]("opacity")&&v(l,{"stroke-opacity":M.opacity>1?M.opacity/100:M.opacity}),"stroke"==d&&i._.arrows&&("startString"in i._.arrows&&m(i,i._.arrows.startString),"endString"in i._.arrows&&m(i,i._.arrows.endString,1))
break
case"gradient":("circle"==i.type||"ellipse"==i.type||"r"!=r(g).charAt())&&x(i,g)
break
case"opacity":u.gradient&&!u[e]("stroke-opacity")&&v(l,{"stroke-opacity":g>1?g/100:g})
case"fill-opacity":if(u.gradient){(z=t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g,c)))&&(E=z.getElementsByTagName("stop"),v(E[E.length-1],{"stop-opacity":g}))
break}default:"font-size"==d&&(g=n(g,10)+"px")
var F=d.replace(/(\-.)/g,function(t){return t.substring(1).toUpperCase()})
l.style[F]=g,i._.dirty=1,l.setAttribute(d,g)}}k(i,a),l.style.visibility=f},k=function(i,a){if("text"==i.type&&(a[e]("text")||a[e]("font")||a[e]("font-size")||a[e]("x")||a[e]("y"))){var s=i.attrs,o=i.node,l=o.firstChild?n(t._g.doc.defaultView.getComputedStyle(o.firstChild,c).getPropertyValue("font-size"),10):10
if(a[e]("text")){for(s.text=a.text;o.firstChild;)o.removeChild(o.firstChild)
for(var h,u=r(a.text).split("\n"),f=[],p=0,d=u.length;p<d;p++)h=v("tspan"),p&&v(h,{dy:1.2*l,x:s.x}),h.appendChild(t._g.doc.createTextNode(u[p])),o.appendChild(h),f[p]=h}else for(f=o.getElementsByTagName("tspan"),p=0,d=f.length;p<d;p++)p?v(f[p],{dy:1.2*l,x:s.x}):v(f[0],{dy:0})
v(o,{x:s.x,y:s.y}),i._.dirty=1
var g=i._getBBox(),x=s.y-(g.y+g.height/2)
x&&t.is(x,"finite")&&v(f[0],{dy:x})}},C=function(e,r){this[0]=this.node=e,e.raphael=!0,this.id=t._oid++,e.raphaelid=this.id,this.matrix=t.matrix(),this.realPath=null,this.paper=r,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!r.bottom&&(r.bottom=this),this.prev=r.top,r.top&&(r.top.next=this),r.top=this,this.next=null},B=t.el
C.prototype=B,B.constructor=C,t._engine.path=function(t,e){var r=v("path")
e.canvas&&e.canvas.appendChild(r)
var i=new C(r,e)
return i.type="path",w(i,{fill:"none",stroke:"#000",path:t}),i},B.rotate=function(t,e,n){if(this.removed)return this
if(t=r(t).split(h),t.length-1&&(e=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&&(e=n),null==e||null==n){var a=this.getBBox(1)
e=a.x+a.width/2,n=a.y+a.height/2}return this.transform(this._.transform.concat([["r",t,e,n]])),this},B.scale=function(t,e,n,a){if(this.removed)return this
if(t=r(t).split(h),t.length-1&&(e=i(t[1]),n=i(t[2]),a=i(t[3])),t=i(t[0]),null==e&&(e=t),null==a&&(n=a),null==n||null==a)var s=this.getBBox(1)
return n=null==n?s.x+s.width/2:n,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([["s",t,e,n,a]])),this},B.translate=function(t,e){return this.removed?this:(t=r(t).split(h),t.length-1&&(e=i(t[1])),t=i(t[0])||0,e=+e||0,this.transform(this._.transform.concat([["t",t,e]])),this)},B.transform=function(r){var i=this._
if(null==r)return i.transform
if(t._extractTransform(this,r),this.clip&&v(this.clip,{transform:this.matrix.invert()}),this.pattern&&y(this),this.node&&v(this.node,{transform:this.matrix}),1!=i.sx||1!=i.sy){var n=this.attrs[e]("stroke-width")?this.attrs["stroke-width"]:1
this.attr({"stroke-width":n})}return this},B.hide=function(){return!this.removed&&this.paper.safari(this.node.style.display="none"),this},B.show=function(){return!this.removed&&this.paper.safari(this.node.style.display=""),this},B.remove=function(){if(!this.removed&&this.node.parentNode){var e=this.paper
e.__set__&&e.__set__.exclude(this),u.unbind("raphael.*.*."+this.id),this.gradient&&e.defs.removeChild(this.gradient),t._tear(this,e),"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.removeChild(this.node.parentNode):this.node.parentNode.removeChild(this.node)
for(var r in this)this[r]="function"==typeof this[r]?t._removedFactory(r):null
this.removed=!0}},B._getBBox=function(){if("none"==this.node.style.display){this.show()
var t=!0}var e={}
try{e=this.node.getBBox()}catch(t){}finally{e=e||{}}return t&&this.hide(),e},B.attr=function(r,i){if(this.removed)return this
if(null==r){var n={}
for(var a in this.attrs)this.attrs[e](a)&&(n[a]=this.attrs[a])
return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,n}if(null==i&&t.is(r,"string")){if("fill"==r&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient
if("transform"==r)return this._.transform
for(var s=r.split(h),o={},l=0,c=s.length;l<c;l++)r=s[l],r in this.attrs?o[r]=this.attrs[r]:t.is(this.paper.customAttributes[r],"function")?o[r]=this.paper.customAttributes[r].def:o[r]=t._availableAttrs[r]
return c-1?o:o[s[0]]}if(null==i&&t.is(r,"array")){for(o={},l=0,c=r.length;l<c;l++)o[r[l]]=this.attr(r[l])
return o}if(null!=i){var f={}
f[r]=i}else null!=r&&t.is(r,"object")&&(f=r)
for(var p in f)u("raphael.attr."+p+"."+this.id,this,f[p])
for(p in this.paper.customAttributes)if(this.paper.customAttributes[e](p)&&f[e](p)&&t.is(this.paper.customAttributes[p],"function")){var d=this.paper.customAttributes[p].apply(this,[].concat(f[p]))
this.attrs[p]=f[p]
for(var g in d)d[e](g)&&(f[g]=d[g])}return w(this,f),this},B.toFront=function(){if(this.removed)return this
"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.appendChild(this.node.parentNode):this.node.parentNode.appendChild(this.node)
var e=this.paper
return e.top!=this&&t._tofront(this,e),this},B.toBack=function(){if(this.removed)return this
var e=this.node.parentNode
"a"==e.tagName.toLowerCase()?e.parentNode.insertBefore(this.node.parentNode,this.node.parentNode.parentNode.firstChild):e.firstChild!=this.node&&e.insertBefore(this.node,this.node.parentNode.firstChild),t._toback(this,this.paper)
this.paper
return this},B.insertAfter=function(e){if(this.removed)return this
var r=e.node||e[e.length-1].node
return r.nextSibling?r.parentNode.insertBefore(this.node,r.nextSibling):r.parentNode.appendChild(this.node),t._insertafter(this,e,this.paper),this},B.insertBefore=function(e){if(this.removed)return this
var r=e.node||e[0].node
return r.parentNode.insertBefore(this.node,r),t._insertbefore(this,e,this.paper),this},B.blur=function(e){var r=this
if(0!=+e){var i=v("filter"),n=v("feGaussianBlur")
r.attrs.blur=e,i.id=t.createUUID(),v(n,{stdDeviation:+e||1.5}),i.appendChild(n),r.paper.defs.appendChild(i),r._blur=i,v(r.node,{filter:"url(#"+i.id+")"})}else r._blur&&(r._blur.parentNode.removeChild(r._blur),delete r._blur,delete r.attrs.blur),r.node.removeAttribute("filter")},t._engine.circle=function(t,e,r,i){var n=v("circle")
t.canvas&&t.canvas.appendChild(n)
var a=new C(n,t)
return a.attrs={cx:e,cy:r,r:i,fill:"none",stroke:"#000"},a.type="circle",v(n,a.attrs),a},t._engine.rect=function(t,e,r,i,n,a){var s=v("rect")
t.canvas&&t.canvas.appendChild(s)
var o=new C(s,t)
return o.attrs={x:e,y:r,width:i,height:n,r:a||0,rx:a||0,ry:a||0,fill:"none",stroke:"#000"},o.type="rect",v(s,o.attrs),o},t._engine.ellipse=function(t,e,r,i,n){var a=v("ellipse")
t.canvas&&t.canvas.appendChild(a)
var s=new C(a,t)
return s.attrs={cx:e,cy:r,rx:i,ry:n,fill:"none",stroke:"#000"},s.type="ellipse",v(a,s.attrs),s},t._engine.image=function(t,e,r,i,n,a){var s=v("image")
v(s,{x:r,y:i,width:n,height:a,preserveAspectRatio:"none"}),s.setAttributeNS(p,"href",e),t.canvas&&t.canvas.appendChild(s)
var o=new C(s,t)
return o.attrs={x:r,y:i,width:n,height:a,src:e},o.type="image",o},t._engine.text=function(e,r,i,n){var a=v("text")
e.canvas&&e.canvas.appendChild(a)
var s=new C(a,e)
return s.attrs={x:r,y:i,"text-anchor":"middle",text:n,font:t._availableAttrs.font,stroke:"none",fill:"#000"},s.type="text",w(s,s.attrs),s},t._engine.setSize=function(t,e){return this.width=t||this.width,this.height=e||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},t._engine.create=function(){var e=t._getContainer.apply(0,arguments),r=e&&e.container,i=e.x,n=e.y,a=e.width,s=e.height
if(!r)throw new Error("SVG container not found.")
var o,l=v("svg"),h="overflow:hidden;"
return i=i||0,n=n||0,a=a||512,s=s||342,v(l,{height:s,version:1.1,width:a,xmlns:"http://www.w3.org/2000/svg"}),1==r?(l.style.cssText=h+"position:absolute;left:"+i+"px;top:"+n+"px",t._g.doc.body.appendChild(l),o=1):(l.style.cssText=h+"position:relative",r.firstChild?r.insertBefore(l,r.firstChild):r.appendChild(l)),r=new t._Paper,r.width=a,r.height=s,r.canvas=l,r.clear(),r._left=r._top=0,o&&(r.renderfix=function(){}),r.renderfix(),r},t._engine.setViewBox=function(t,e,r,i,n){u("raphael.setViewBox",this,this._viewBox,[t,e,r,i,n])
var a,o,l=s(r/this.width,i/this.height),h=this.top,c=n?"meet":"xMinYMin"
for(null==t?(this._vbSize&&(l=1),delete this._vbSize,a="0 0 "+this.width+f+this.height):(this._vbSize=l,a=t+f+e+f+r+f+i),v(this.canvas,{viewBox:a,preserveAspectRatio:c});l&&h;)o="stroke-width"in h.attrs?h.attrs["stroke-width"]:1,h.attr({"stroke-width":o}),h._.dirty=1,h._.dirtyT=1,h=h.prev
return this._viewBox=[t,e,r,i,!!n],this},t.prototype.renderfix=function(){var t,e=this.canvas,r=e.style
try{t=e.getScreenCTM()||e.createSVGMatrix()}catch(r){t=e.createSVGMatrix()}var i=-t.e%1,n=-t.f%1;(i||n)&&(i&&(this._left=(this._left+i)%1,r.left=this._left+"px"),n&&(this._top=(this._top+n)%1,r.top=this._top+"px"))},t.prototype.clear=function(){t.eve("raphael.clear",this)
for(var e=this.canvas;e.firstChild;)e.removeChild(e.firstChild)
this.bottom=this.top=null,(this.desc=v("desc")).appendChild(t._g.doc.createTextNode("Created with Raphaël "+t.version)),e.appendChild(this.desc),e.appendChild(this.defs=v("defs"))},t.prototype.remove=function(){u("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas)
for(var e in this)this[e]="function"==typeof this[e]?t._removedFactory(e):null}
var S=t.st
for(var A in B)B[e](A)&&!S[e](A)&&(S[A]=function(t){return function(){var e=arguments
return this.forEach(function(r){r[t].apply(r,e)})}}(A))}(window.Raphael),window.Raphael.vml&&function(t){var e="hasOwnProperty",r=String,i=parseFloat,n=Math,a=n.round,s=n.max,o=n.min,l=n.abs,h="fill",u=/[, ]+/,c=t.eve,f=" ",p="",d={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},g=/([clmz]),?([^clmz]*)/gi,v=/ progid:\S+Blur\([^\)]+\)/g,x=/-?[^,\s-]+/g,y="position:absolute;left:0;top:0;width:1px;height:1px",m=21600,b={path:1,rect:1,image:1},_={circle:1,ellipse:1},w=function(e){var i=/[ahqstv]/gi,n=t._pathToAbsolute
if(r(e).match(i)&&(n=t._path2curve),i=/[clmz]/g,n==t._pathToAbsolute&&!r(e).match(i)){var s=r(e).replace(g,function(t,e,r){var i=[],n="m"==e.toLowerCase(),s=d[e]
return r.replace(x,function(t){n&&2==i.length&&(s+=i+d["m"==e?"l":"L"],i=[]),i.push(a(t*m))}),s+i})
return s}var o,l,h=n(e)
s=[]
for(var u=0,c=h.length;u<c;u++){o=h[u],"z"==(l=h[u][0].toLowerCase())&&(l="x")
for(var v=1,y=o.length;v<y;v++)l+=a(o[v]*m)+(v!=y-1?",":p)
s.push(l)}return s.join(f)},k=function(e,r,i){var n=t.matrix()
return n.rotate(-e,.5,.5),{dx:n.x(r,i),dy:n.y(r,i)}},C=function(t,e,r,i,n,a){var s=t._,o=t.matrix,u=s.fillpos,c=t.node,p=c.style,d=1,g="",v=m/e,x=m/r
if(p.visibility="hidden",e&&r){if(c.coordsize=l(v)+f+l(x),p.rotation=a*(e*r<0?-1:1),a){var y=k(a,i,n)
i=y.dx,n=y.dy}if(e<0&&(g+="x"),r<0&&(g+=" y")&&(d=-1),p.flip=g,c.coordorigin=i*-v+f+n*-x,u||s.fillsize){var b=c.getElementsByTagName(h)
b=b&&b[0],c.removeChild(b),u&&(y=k(a,o.x(u[0],u[1]),o.y(u[0],u[1])),b.position=y.dx*d+f+y.dy*d),s.fillsize&&(b.size=s.fillsize[0]*l(e)+f+s.fillsize[1]*l(r)),c.appendChild(b)}p.visibility="visible"}}
t.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version}
var B=function(t,e,i){for(var n=r(e).toLowerCase().split("-"),a=i?"end":"start",s=n.length,o="classic",l="medium",h="medium";s--;)switch(n[s]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":o=n[s]
break
case"wide":case"narrow":h=n[s]
break
case"long":case"short":l=n[s]}var u=t.node.getElementsByTagName("stroke")[0]
u[a+"arrow"]=o,u[a+"arrowlength"]=l,u[a+"arrowwidth"]=h},S=function(n,l){n.attrs=n.attrs||{}
var c=n.node,d=n.attrs,g=c.style,v=b[n.type]&&(l.x!=d.x||l.y!=d.y||l.width!=d.width||l.height!=d.height||l.cx!=d.cx||l.cy!=d.cy||l.rx!=d.rx||l.ry!=d.ry||l.r!=d.r),x=_[n.type]&&(d.cx!=l.cx||d.cy!=l.cy||d.r!=l.r||d.rx!=l.rx||d.ry!=l.ry),y=n
for(var k in l)l[e](k)&&(d[k]=l[k])
if(v&&(d.path=t._getPath[n.type](n),n._.dirty=1),l.href&&(c.href=l.href),l.title&&(c.title=l.title),l.target&&(c.target=l.target),l.cursor&&(g.cursor=l.cursor),"blur"in l&&n.blur(l.blur),(l.path&&"path"==n.type||v)&&(c.path=w(~r(d.path).toLowerCase().indexOf("r")?t._pathToAbsolute(d.path):d.path),"image"==n.type&&(n._.fillpos=[d.x,d.y],n._.fillsize=[d.width,d.height],C(n,1,1,0,0,0))),"transform"in l&&n.transform(l.transform),x){var S=+d.cx,T=+d.cy,N=+d.rx||+d.r||0,M=+d.ry||+d.r||0
c.path=t.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",a((S-N)*m),a((T-M)*m),a((S+N)*m),a((T+M)*m),a(S*m))}if("clip-rect"in l){var z=r(l["clip-rect"]).split(u)
if(4==z.length){z[2]=+z[2]+ +z[0],z[3]=+z[3]+ +z[1]
var E=c.clipRect||t._g.doc.createElement("div"),F=E.style
F.clip=t.format("rect({1}px {2}px {3}px {0}px)",z),c.clipRect||(F.position="absolute",F.top=0,F.left=0,F.width=n.paper.width+"px",F.height=n.paper.height+"px",c.parentNode.insertBefore(E,c),E.appendChild(c),c.clipRect=E)}l["clip-rect"]||c.clipRect&&(c.clipRect.style.clip="auto")}if(n.textpath){var R=n.textpath.style
l.font&&(R.font=l.font),l["font-family"]&&(R.fontFamily='"'+l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,p)+'"'),l["font-size"]&&(R.fontSize=l["font-size"]),l["font-weight"]&&(R.fontWeight=l["font-weight"]),l["font-style"]&&(R.fontStyle=l["font-style"])}if("arrow-start"in l&&B(y,l["arrow-start"]),"arrow-end"in l&&B(y,l["arrow-end"],1),null!=l.opacity||null!=l["stroke-width"]||null!=l.fill||null!=l.src||null!=l.stroke||null!=l["stroke-width"]||null!=l["stroke-opacity"]||null!=l["fill-opacity"]||null!=l["stroke-dasharray"]||null!=l["stroke-miterlimit"]||null!=l["stroke-linejoin"]||null!=l["stroke-linecap"]){var P=c.getElementsByTagName(h)
if(P=P&&P[0],!P&&(P=L(h)),"image"==n.type&&l.src&&(P.src=l.src),l.fill&&(P.on=!0),null!=P.on&&"none"!=l.fill&&null!==l.fill||(P.on=!1),P.on&&l.fill){var I=r(l.fill).match(t._ISURL)
if(I){P.parentNode==c&&c.removeChild(P),P.rotate=!0,P.src=I[1],P.type="tile"
var j=n.getBBox(1)
P.position=j.x+f+j.y,n._.fillpos=[j.x,j.y],t._preload(I[1],function(){n._.fillsize=[this.offsetWidth,this.offsetHeight]})}else P.color=t.getRGB(l.fill).hex,P.src=p,P.type="solid",t.getRGB(l.fill).error&&(y.type in{circle:1,ellipse:1}||"r"!=r(l.fill).charAt())&&A(y,l.fill,P)&&(d.fill="none",d.gradient=l.fill,P.rotate=!1)}if("fill-opacity"in l||"opacity"in l){var q=((+d["fill-opacity"]+1||2)-1)*((+d.opacity+1||2)-1)*((+t.getRGB(l.fill).o+1||2)-1)
q=o(s(q,0),1),P.opacity=q,P.src&&(P.color="none")}c.appendChild(P)
var D=c.getElementsByTagName("stroke")&&c.getElementsByTagName("stroke")[0],V=!1
!D&&(V=D=L("stroke")),(l.stroke&&"none"!=l.stroke||l["stroke-width"]||null!=l["stroke-opacity"]||l["stroke-dasharray"]||l["stroke-miterlimit"]||l["stroke-linejoin"]||l["stroke-linecap"])&&(D.on=!0),("none"==l.stroke||null===l.stroke||null==D.on||0==l.stroke||0==l["stroke-width"])&&(D.on=!1)
var O=t.getRGB(l.stroke)
D.on&&l.stroke&&(D.color=O.hex),q=((+d["stroke-opacity"]+1||2)-1)*((+d.opacity+1||2)-1)*((+O.o+1||2)-1)
var Y=.75*(i(l["stroke-width"])||1)
if(q=o(s(q,0),1),null==l["stroke-width"]&&(Y=d["stroke-width"]),l["stroke-width"]&&(D.weight=Y),Y&&Y<1&&(q*=Y)&&(D.weight=1),D.opacity=q,l["stroke-linejoin"]&&(D.joinstyle=l["stroke-linejoin"]||"miter"),D.miterlimit=l["stroke-miterlimit"]||8,l["stroke-linecap"]&&(D.endcap="butt"==l["stroke-linecap"]?"flat":"square"==l["stroke-linecap"]?"square":"round"),l["stroke-dasharray"]){var G={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"}
D.dashstyle=G[e](l["stroke-dasharray"])?G[l["stroke-dasharray"]]:p}V&&c.appendChild(D)}if("text"==y.type){y.paper.canvas.style.display=p
var W=y.paper.span,X=d.font&&d.font.match(/\d+(?:\.\d*)?(?=px)/)
g=W.style,d.font&&(g.font=d.font),d["font-family"]&&(g.fontFamily=d["font-family"]),d["font-weight"]&&(g.fontWeight=d["font-weight"]),d["font-style"]&&(g.fontStyle=d["font-style"]),X=i(d["font-size"]||X&&X[0])||10,g.fontSize=100*X+"px",y.textpath.string&&(W.innerHTML=r(y.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"))
var H=W.getBoundingClientRect()
y.W=d.w=(H.right-H.left)/100,y.H=d.h=(H.bottom-H.top)/100,y.X=d.x,y.Y=d.y+y.H/2,("x"in l||"y"in l)&&(y.path.v=t.format("m{0},{1}l{2},{1}",a(d.x*m),a(d.y*m),a(d.x*m)+1))
for(var U=["x","y","text","font","font-family","font-weight","font-style","font-size"],$=0,Z=U.length;$<Z;$++)if(U[$]in l){y._.dirty=1
break}switch(d["text-anchor"]){case"start":y.textpath.style["v-text-align"]="left",y.bbx=y.W/2
break
case"end":y.textpath.style["v-text-align"]="right",y.bbx=-y.W/2
break
default:y.textpath.style["v-text-align"]="center",y.bbx=0}y.textpath.style["v-text-kern"]=!0}},A=function(e,a,s){e.attrs=e.attrs||{}
var o=(e.attrs,Math.pow),l="linear",h=".5 .5"
if(e.attrs.gradient=a,a=r(a).replace(t._radial_gradient,function(t,e,r){return l="radial",e&&r&&(e=i(e),r=i(r),o(e-.5,2)+o(r-.5,2)>.25&&(r=n.sqrt(.25-o(e-.5,2))*(2*(r>.5)-1)+.5),h=e+f+r),p}),a=a.split(/\s*\-\s*/),"linear"==l){var u=a.shift()
if(u=-i(u),isNaN(u))return null}var c=t._parseDots(a)
if(!c)return null
if(e=e.shape||e.node,c.length){e.removeChild(s),s.on=!0,s.method="none",s.color=c[0].color,s.color2=c[c.length-1].color
for(var d=[],g=0,v=c.length;g<v;g++)c[g].offset&&d.push(c[g].offset+f+c[g].color)
s.colors=d.length?d.join():"0% "+s.color,"radial"==l?(s.type="gradientTitle",s.focus="100%",s.focussize="0 0",s.focusposition=h,s.angle=0):(s.type="gradient",s.angle=(270-u)%360),e.appendChild(s)}return 1},T=function(e,r){this[0]=this.node=e,e.raphael=!0,this.id=t._oid++,e.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=r,this.matrix=t.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!r.bottom&&(r.bottom=this),this.prev=r.top,r.top&&(r.top.next=this),r.top=this,this.next=null},N=t.el
T.prototype=N,N.constructor=T,N.transform=function(e){if(null==e)return this._.transform
var i,n=this.paper._viewBoxShift,a=n?"s"+[n.scale,n.scale]+"-1-1t"+[n.dx,n.dy]:p
n&&(i=e=r(e).replace(/\.{3}|\u2026/g,this._.transform||p)),t._extractTransform(this,a+e)
var s,o=this.matrix.clone(),l=this.skew,h=this.node,u=~r(this.attrs.fill).indexOf("-"),c=!r(this.attrs.fill).indexOf("url(")
if(o.translate(-.5,-.5),c||u||"image"==this.type)if(l.matrix="1 0 0 1",l.offset="0 0",s=o.split(),u&&s.noRotation||!s.isSimple){h.style.filter=o.toFilter()
var d=this.getBBox(),g=this.getBBox(1),v=d.x-g.x,x=d.y-g.y
h.coordorigin=v*-m+f+x*-m,C(this,1,1,v,x,0)}else h.style.filter=p,C(this,s.scalex,s.scaley,s.dx,s.dy,s.rotate)
else h.style.filter=p,l.matrix=r(o),l.offset=o.offset()
return i&&(this._.transform=i),this},N.rotate=function(t,e,n){if(this.removed)return this
if(null!=t){if(t=r(t).split(u),t.length-1&&(e=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&&(e=n),null==e||null==n){var a=this.getBBox(1)
e=a.x+a.width/2,n=a.y+a.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",t,e,n]])),this}},N.translate=function(t,e){return this.removed?this:(t=r(t).split(u),t.length-1&&(e=i(t[1])),t=i(t[0])||0,e=+e||0,this._.bbox&&(this._.bbox.x+=t,this._.bbox.y+=e),this.transform(this._.transform.concat([["t",t,e]])),this)},N.scale=function(t,e,n,a){if(this.removed)return this
if(t=r(t).split(u),t.length-1&&(e=i(t[1]),n=i(t[2]),a=i(t[3]),isNaN(n)&&(n=null),isNaN(a)&&(a=null)),t=i(t[0]),null==e&&(e=t),null==a&&(n=a),null==n||null==a)var s=this.getBBox(1)
return n=null==n?s.x+s.width/2:n,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([["s",t,e,n,a]])),this._.dirtyT=1,this},N.hide=function(){return!this.removed&&(this.node.style.display="none"),this},N.show=function(){return!this.removed&&(this.node.style.display=p),this},N._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},N.remove=function(){if(!this.removed&&this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),t.eve.unbind("raphael.*.*."+this.id),t._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape)
for(var e in this)this[e]="function"==typeof this[e]?t._removedFactory(e):null
this.removed=!0}},N.attr=function(r,i){if(this.removed)return this
if(null==r){var n={}
for(var a in this.attrs)this.attrs[e](a)&&(n[a]=this.attrs[a])
return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,n}if(null==i&&t.is(r,"string")){if(r==h&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient
for(var s=r.split(u),o={},l=0,f=s.length;l<f;l++)r=s[l],r in this.attrs?o[r]=this.attrs[r]:t.is(this.paper.customAttributes[r],"function")?o[r]=this.paper.customAttributes[r].def:o[r]=t._availableAttrs[r]
return f-1?o:o[s[0]]}if(this.attrs&&null==i&&t.is(r,"array")){for(o={},l=0,f=r.length;l<f;l++)o[r[l]]=this.attr(r[l])
return o}var p
null!=i&&(p={},p[r]=i),null==i&&t.is(r,"object")&&(p=r)
for(var d in p)c("raphael.attr."+d+"."+this.id,this,p[d])
if(p){for(d in this.paper.customAttributes)if(this.paper.customAttributes[e](d)&&p[e](d)&&t.is(this.paper.customAttributes[d],"function")){var g=this.paper.customAttributes[d].apply(this,[].concat(p[d]))
this.attrs[d]=p[d]
for(var v in g)g[e](v)&&(p[v]=g[v])}p.text&&"text"==this.type&&(this.textpath.string=p.text),S(this,p)}return this},N.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&t._tofront(this,this.paper),this},N.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),t._toback(this,this.paper)),this)},N.insertAfter=function(e){return this.removed?this:(e.constructor==t.st.constructor&&(e=e[e.length-1]),e.node.nextSibling?e.node.parentNode.insertBefore(this.node,e.node.nextSibling):e.node.parentNode.appendChild(this.node),t._insertafter(this,e,this.paper),this)},N.insertBefore=function(e){return this.removed?this:(e.constructor==t.st.constructor&&(e=e[0]),e.node.parentNode.insertBefore(this.node,e.node),t._insertbefore(this,e,this.paper),this)},N.blur=function(e){var r=this.node.runtimeStyle,i=r.filter
i=i.replace(v,p),0!=+e?(this.attrs.blur=e,r.filter=i+f+" progid:DXImageTransform.Microsoft.Blur(pixelradius="+(+e||1.5)+")",r.margin=t.format("-{0}px 0 0 -{0}px",a(+e||1.5))):(r.filter=i,r.margin=0,delete this.attrs.blur)},t._engine.path=function(t,e){var r=L("shape")
r.style.cssText=y,r.coordsize=m+f+m,r.coordorigin=e.coordorigin
var i=new T(r,e),n={fill:"none",stroke:"#000"}
t&&(n.path=t),i.type="path",i.path=[],i.Path=p,S(i,n),e.canvas.appendChild(r)
var a=L("skew")
return a.on=!0,r.appendChild(a),i.skew=a,i.transform(p),i},t._engine.rect=function(e,r,i,n,a,s){var o=t._rectPath(r,i,n,a,s),l=e.path(o),h=l.attrs
return l.X=h.x=r,l.Y=h.y=i,l.W=h.width=n,l.H=h.height=a,h.r=s,h.path=o,l.type="rect",l},t._engine.ellipse=function(t,e,r,i,n){var a=t.path()
a.attrs
return a.X=e-i,a.Y=r-n,a.W=2*i,a.H=2*n,a.type="ellipse",S(a,{cx:e,cy:r,rx:i,ry:n}),a},t._engine.circle=function(t,e,r,i){var n=t.path()
n.attrs
return n.X=e-i,n.Y=r-i,n.W=n.H=2*i,n.type="circle",S(n,{cx:e,cy:r,r:i}),n},t._engine.image=function(e,r,i,n,a,s){var o=t._rectPath(i,n,a,s),l=e.path(o).attr({stroke:"none"}),u=l.attrs,c=l.node,f=c.getElementsByTagName(h)[0]
return u.src=r,l.X=u.x=i,l.Y=u.y=n,l.W=u.width=a,l.H=u.height=s,u.path=o,l.type="image",f.parentNode==c&&c.removeChild(f),f.rotate=!0,f.src=r,f.type="tile",l._.fillpos=[i,n],l._.fillsize=[a,s],c.appendChild(f),C(l,1,1,0,0,0),l},t._engine.text=function(e,i,n,s){var o=L("shape"),l=L("path"),h=L("textpath")
i=i||0,n=n||0,s=s||"",l.v=t.format("m{0},{1}l{2},{1}",a(i*m),a(n*m),a(i*m)+1),l.textpathok=!0,h.string=r(s),h.on=!0,o.style.cssText=y,o.coordsize=m+f+m,o.coordorigin="0 0"
var u=new T(o,e),c={fill:"#000",stroke:"none",font:t._availableAttrs.font,text:s}
u.shape=o,u.path=l,u.textpath=h,u.type="text",u.attrs.text=r(s),u.attrs.x=i,u.attrs.y=n,u.attrs.w=1,u.attrs.h=1,S(u,c),o.appendChild(h),o.appendChild(l),e.canvas.appendChild(o)
var d=L("skew")
return d.on=!0,o.appendChild(d),u.skew=d,u.transform(p),u},t._engine.setSize=function(e,r){var i=this.canvas.style
return this.width=e,this.height=r,e==+e&&(e+="px"),r==+r&&(r+="px"),i.width=e,i.height=r,i.clip="rect(0 "+e+" "+r+" 0)",this._viewBox&&t._engine.setViewBox.apply(this,this._viewBox),this},t._engine.setViewBox=function(e,r,i,n,a){t.eve("raphael.setViewBox",this,this._viewBox,[e,r,i,n,a])
var o,l,h=this.width,u=this.height,c=1/s(i/h,n/u)
return a&&(o=u/n,l=h/i,i*o<h&&(e-=(h-i*o)/2/o),n*l<u&&(r-=(u-n*l)/2/l)),this._viewBox=[e,r,i,n,!!a],this._viewBoxShift={dx:-e,dy:-r,scale:c},this.forEach(function(t){t.transform("...")}),this}
var L
t._engine.initWin=function(t){var e=t.document
e.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)")
try{!e.namespaces.rvml&&e.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),L=function(t){return e.createElement("<rvml:"+t+' class="rvml">')}}catch(t){L=function(t){return e.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},t._engine.initWin(t._g.win),t._engine.create=function(){var e=t._getContainer.apply(0,arguments),r=e.container,i=e.height,n=e.width,a=e.x,s=e.y
if(!r)throw new Error("VML container not found.")
var o=new t._Paper,l=o.canvas=t._g.doc.createElement("div"),h=l.style
return a=a||0,s=s||0,n=n||512,i=i||342,o.width=n,o.height=i,n==+n&&(n+="px"),i==+i&&(i+="px"),o.coordsize=216e5+f+216e5,o.coordorigin="0 0",o.span=t._g.doc.createElement("span"),o.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",l.appendChild(o.span),h.cssText=t.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",n,i),1==r?(t._g.doc.body.appendChild(l),h.left=a+"px",h.top=s+"px",h.position="absolute"):r.firstChild?r.insertBefore(l,r.firstChild):r.appendChild(l),o.renderfix=function(){},o},t.prototype.clear=function(){t.eve("raphael.clear",this),this.canvas.innerHTML=p,this.span=t._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},t.prototype.remove=function(){t.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas)
for(var e in this)this[e]="function"==typeof this[e]?t._removedFactory(e):null
return!0}
var M=t.st
for(var z in N)N[e](z)&&!M[e](z)&&(M[z]=function(t){return function(){var e=arguments
return this.forEach(function(r){r[t].apply(r,e)})}}(z))}(window.Raphael)
