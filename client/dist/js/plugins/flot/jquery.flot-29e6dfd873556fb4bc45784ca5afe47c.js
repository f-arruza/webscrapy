(function(t){t.color={},t.color.make=function(i,e,o,n){var a={}
return a.r=i||0,a.g=e||0,a.b=o||0,a.a=null!=n?n:1,a.add=function(t,i){for(var e=0;e<t.length;++e)a[t.charAt(e)]+=i
return a.normalize()},a.scale=function(t,i){for(var e=0;e<t.length;++e)a[t.charAt(e)]*=i
return a.normalize()},a.toString=function(){return a.a>=1?"rgb("+[a.r,a.g,a.b].join(",")+")":"rgba("+[a.r,a.g,a.b,a.a].join(",")+")"},a.normalize=function(){function t(t,i,e){return i<t?t:i>e?e:i}return a.r=t(0,parseInt(a.r),255),a.g=t(0,parseInt(a.g),255),a.b=t(0,parseInt(a.b),255),a.a=t(0,a.a,1),a},a.clone=function(){return t.color.make(a.r,a.b,a.g,a.a)},a.normalize()},t.color.extract=function(i,e){var o
do{if(""!=(o=i.css(e).toLowerCase())&&"transparent"!=o)break
i=i.parent()}while(i.length&&!t.nodeName(i.get(0),"body"))
return"rgba(0, 0, 0, 0)"==o&&(o="transparent"),t.color.parse(o)},t.color.parse=function(e){var o,n=t.color.make
if(o=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(e))return n(parseInt(o[1],10),parseInt(o[2],10),parseInt(o[3],10))
if(o=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(e))return n(parseInt(o[1],10),parseInt(o[2],10),parseInt(o[3],10),parseFloat(o[4]))
if(o=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(e))return n(2.55*parseFloat(o[1]),2.55*parseFloat(o[2]),2.55*parseFloat(o[3]))
if(o=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(e))return n(2.55*parseFloat(o[1]),2.55*parseFloat(o[2]),2.55*parseFloat(o[3]),parseFloat(o[4]))
if(o=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(e))return n(parseInt(o[1],16),parseInt(o[2],16),parseInt(o[3],16))
if(o=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(e))return n(parseInt(o[1]+o[1],16),parseInt(o[2]+o[2],16),parseInt(o[3]+o[3],16))
var a=t.trim(e).toLowerCase()
return"transparent"==a?n(255,255,255,0):(o=i[a]||[0,0,0],n(o[0],o[1],o[2]))}
var i={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery),function(t){function i(i,e){var o=e.children("."+i)[0]
if(null==o&&(o=document.createElement("canvas"),o.className=i,t(o).css({direction:"ltr",position:"absolute",left:0,top:0}).appendTo(e),!o.getContext)){if(!window.G_vmlCanvasManager)throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.")
o=window.G_vmlCanvasManager.initElement(o)}this.element=o
var n=this.context=o.getContext("2d"),a=window.devicePixelRatio||1,r=n.webkitBackingStorePixelRatio||n.mozBackingStorePixelRatio||n.msBackingStorePixelRatio||n.oBackingStorePixelRatio||n.backingStorePixelRatio||1
this.pixelRatio=a/r,this.resize(e.width(),e.height()),this.textContainer=null,this.text={},this._textCache={}}function e(e,n,a,r){function l(t,i){i=[ut].concat(i)
for(var e=0;e<t.length;++e)t[e].apply(this,i)}function s(t){Z=c(t),m(),x()}function c(i){for(var e=[],o=0;o<i.length;++o){var n=t.extend(!0,{},tt.series)
null!=i[o].data?(n.data=i[o].data,delete i[o].data,t.extend(!0,n,i[o]),i[o].data=n.data):n.data=i[o],e.push(n)}return e}function h(t,i){var e=t[i+"axis"]
return"object"==typeof e&&(e=e.n),"number"!=typeof e&&(e=1),e}function f(){return t.grep(rt.concat(lt),function(t){return t})}function u(t){var i,e,o={}
for(i=0;i<rt.length;++i)(e=rt[i])&&e.used&&(o["x"+e.n]=e.c2p(t.left))
for(i=0;i<lt.length;++i)(e=lt[i])&&e.used&&(o["y"+e.n]=e.c2p(t.top))
return void 0!==o.x1&&(o.x=o.x1),void 0!==o.y1&&(o.y=o.y1),o}function d(t){var i,e,o,n={}
for(i=0;i<rt.length;++i)if((e=rt[i])&&e.used&&(o="x"+e.n,null==t[o]&&1==e.n&&(o="x"),null!=t[o])){n.left=e.p2c(t[o])
break}for(i=0;i<lt.length;++i)if((e=lt[i])&&e.used&&(o="y"+e.n,null==t[o]&&1==e.n&&(o="y"),null!=t[o])){n.top=e.p2c(t[o])
break}return n}function p(i,e){return i[e-1]||(i[e-1]={n:e,direction:i==rt?"x":"y",options:t.extend(!0,{},i==rt?tt.xaxis:tt.yaxis)}),i[e-1]}function m(){var i,e=Z.length,o=-1
for(i=0;i<Z.length;++i){var n=Z[i].color
null!=n&&(e--,"number"==typeof n&&n>o&&(o=n))}e<=o&&(e=o+1)
var a,r=[],l=tt.colors,s=l.length,c=0
for(i=0;i<e;i++)a=t.color.parse(l[i%s]||"#666"),i%s==0&&i&&(c=c>=0?c<.5?-c-.2:0:-c),r[i]=a.scale("rgb",1+c)
var f,u=0
for(i=0;i<Z.length;++i){if(f=Z[i],null==f.color?(f.color=r[u].toString(),++u):"number"==typeof f.color&&(f.color=r[f.color].toString()),null==f.lines.show){var d,m=!0
for(d in f)if(f[d]&&f[d].show){m=!1
break}m&&(f.lines.show=!0)}null==f.lines.zero&&(f.lines.zero=!!f.lines.fill),f.xaxis=p(rt,h(f,"x")),f.yaxis=p(lt,h(f,"y"))}}function x(){function i(t,i,e){i<t.datamin&&i!=-b&&(t.datamin=i),e>t.datamax&&e!=b&&(t.datamax=e)}var e,o,n,a,r,s,c,h,u,d,p,m,x=Number.POSITIVE_INFINITY,g=Number.NEGATIVE_INFINITY,b=Number.MAX_VALUE
for(t.each(f(),function(t,i){i.datamin=x,i.datamax=g,i.used=!1}),e=0;e<Z.length;++e)r=Z[e],r.datapoints={points:[]},l(ft.processRawData,[r,r.data,r.datapoints])
for(e=0;e<Z.length;++e){if(r=Z[e],p=r.data,!(m=r.datapoints.format)){if(m=[],m.push({x:!0,number:!0,required:!0}),m.push({y:!0,number:!0,required:!0}),r.bars.show||r.lines.show&&r.lines.fill){var v=!!(r.bars.show&&r.bars.zero||r.lines.show&&r.lines.zero)
m.push({y:!0,number:!0,required:!1,defaultValue:0,autoscale:v}),r.bars.horizontal&&(delete m[m.length-1].y,m[m.length-1].x=!0)}r.datapoints.format=m}if(null==r.datapoints.pointsize){r.datapoints.pointsize=m.length,c=r.datapoints.pointsize,s=r.datapoints.points
var k=r.lines.show&&r.lines.steps
for(r.xaxis.used=r.yaxis.used=!0,o=n=0;o<p.length;++o,n+=c){d=p[o]
var y=null==d
if(!y)for(a=0;a<c;++a)h=d[a],u=m[a],u&&(u.number&&null!=h&&(h=+h,isNaN(h)?h=null:h==1/0?h=b:h==-1/0&&(h=-b)),null==h&&(u.required&&(y=!0),null!=u.defaultValue&&(h=u.defaultValue))),s[n+a]=h
if(y)for(a=0;a<c;++a)h=s[n+a],null!=h&&(u=m[a],!1!==u.autoscale&&(u.x&&i(r.xaxis,h,h),u.y&&i(r.yaxis,h,h))),s[n+a]=null
else if(k&&n>0&&null!=s[n-c]&&s[n-c]!=s[n]&&s[n-c+1]!=s[n+1]){for(a=0;a<c;++a)s[n+c+a]=s[n+a]
s[n+1]=s[n-c+1],n+=c}}}}for(e=0;e<Z.length;++e)r=Z[e],l(ft.processDatapoints,[r,r.datapoints])
for(e=0;e<Z.length;++e){r=Z[e],s=r.datapoints.points,c=r.datapoints.pointsize,m=r.datapoints.format
var w=x,M=x,T=g,C=g
for(o=0;o<s.length;o+=c)if(null!=s[o])for(a=0;a<c;++a)h=s[o+a],(u=m[a])&&!1!==u.autoscale&&h!=b&&h!=-b&&(u.x&&(h<w&&(w=h),h>T&&(T=h)),u.y&&(h<M&&(M=h),h>C&&(C=h)))
if(r.bars.show){var S
switch(r.bars.align){case"left":S=0
break
case"right":S=-r.bars.barWidth
break
default:S=-r.bars.barWidth/2}r.bars.horizontal?(M+=S,C+=S+r.bars.barWidth):(w+=S,T+=S+r.bars.barWidth)}i(r.xaxis,w,T),i(r.yaxis,M,C)}t.each(f(),function(t,i){i.datamin==x&&(i.datamin=null),i.datamax==g&&(i.datamax=null)})}function g(){pt&&clearTimeout(pt),ot.unbind("mousemove",B),ot.unbind("mouseleave",G),ot.unbind("click",_),l(ft.shutdown,[ot])}function b(t){function i(t){return t}var e,o,n=t.options.transform||i,a=t.options.inverseTransform
"x"==t.direction?(e=t.scale=ct/Math.abs(n(t.max)-n(t.min)),o=Math.min(n(t.max),n(t.min))):(e=t.scale=ht/Math.abs(n(t.max)-n(t.min)),e=-e,o=Math.max(n(t.max),n(t.min))),t.p2c=n==i?function(t){return(t-o)*e}:function(t){return(n(t)-o)*e},t.c2p=a?function(t){return a(o+t/e)}:function(t){return o+t/e}}function v(t){for(var i=t.options,e=t.ticks||[],o=i.labelWidth||0,n=i.labelHeight||0,a=o||("x"==t.direction?Math.floor(it.width/(e.length||1)):null),r=t.direction+"Axis "+t.direction+t.n+"Axis",l="flot-"+t.direction+"-axis flot-"+t.direction+t.n+"-axis "+r,s=i.font||"flot-tick-label tickLabel",c=0;c<e.length;++c){var h=e[c]
if(h.label){var f=it.getTextInfo(l,h.label,s,null,a)
o=Math.max(o,f.width),n=Math.max(n,f.height)}}t.labelWidth=i.labelWidth||o,t.labelHeight=i.labelHeight||n}function k(i){var e=i.labelWidth,o=i.labelHeight,n=i.options.position,a="x"===i.direction,r=i.options.tickLength,l=tt.grid.axisMargin,s=tt.grid.labelMargin,c=!0,h=!0,f=!0,u=!1
t.each(a?rt:lt,function(t,e){e&&(e.show||e.reserveSpace)&&(e===i?u=!0:e.options.position===n&&(u?h=!1:c=!1),u||(f=!1))}),h&&(l=0),null==r&&(r=f?"full":5),isNaN(+r)||(s+=+r),a?(o+=s,"bottom"==n?(st.bottom+=o+l,i.box={top:it.height-st.bottom,height:o}):(i.box={top:st.top+l,height:o},st.top+=o+l)):(e+=s,"left"==n?(i.box={left:st.left+l,width:e},st.left+=e+l):(st.right+=e+l,i.box={left:it.width-st.right,width:e})),i.position=n,i.tickLength=r,i.box.padding=s,i.innermost=c}function y(t){"x"==t.direction?(t.box.left=st.left-t.labelWidth/2,t.box.width=it.width-st.left-st.right+t.labelWidth):(t.box.top=st.top-t.labelHeight/2,t.box.height=it.height-st.bottom-st.top+t.labelHeight)}function w(){var i,e=tt.grid.minBorderMargin
if(null==e)for(e=0,i=0;i<Z.length;++i)e=Math.max(e,2*(Z[i].points.radius+Z[i].points.lineWidth/2))
var o={left:e,right:e,top:e,bottom:e}
t.each(f(),function(t,i){i.reserveSpace&&i.ticks&&i.ticks.length&&("x"===i.direction?(o.left=Math.max(o.left,i.labelWidth/2),o.right=Math.max(o.right,i.labelWidth/2)):(o.bottom=Math.max(o.bottom,i.labelHeight/2),o.top=Math.max(o.top,i.labelHeight/2)))}),st.left=Math.ceil(Math.max(o.left,st.left)),st.right=Math.ceil(Math.max(o.right,st.right)),st.top=Math.ceil(Math.max(o.top,st.top)),st.bottom=Math.ceil(Math.max(o.bottom,st.bottom))}function M(){var i,e=f(),o=tt.grid.show
for(var n in st){var a=tt.grid.margin||0
st[n]="number"==typeof a?a:a[n]||0}l(ft.processOffset,[st])
for(var n in st)"object"==typeof tt.grid.borderWidth?st[n]+=o?tt.grid.borderWidth[n]:0:st[n]+=o?tt.grid.borderWidth:0
if(t.each(e,function(t,i){var e=i.options
i.show=null==e.show?i.used:e.show,i.reserveSpace=null==e.reserveSpace?i.show:e.reserveSpace,T(i)}),o){var r=t.grep(e,function(t){return t.show||t.reserveSpace})
for(t.each(r,function(t,i){C(i),S(i),W(i,i.ticks),v(i)}),i=r.length-1;i>=0;--i)k(r[i])
w(),t.each(r,function(t,i){y(i)})}ct=it.width-st.left-st.right,ht=it.height-st.bottom-st.top,t.each(e,function(t,i){b(i)}),o&&P(),j()}function T(t){var i=t.options,e=+(null!=i.min?i.min:t.datamin),o=+(null!=i.max?i.max:t.datamax),n=o-e
if(0==n){var a=0==o?1:.01
null==i.min&&(e-=a),null!=i.max&&null==i.min||(o+=a)}else{var r=i.autoscaleMargin
null!=r&&(null==i.min&&(e-=n*r)<0&&null!=t.datamin&&t.datamin>=0&&(e=0),null==i.max&&(o+=n*r)>0&&null!=t.datamax&&t.datamax<=0&&(o=0))}t.min=e,t.max=o}function C(i){var e,n=i.options
e="number"==typeof n.ticks&&n.ticks>0?n.ticks:.3*Math.sqrt("x"==i.direction?it.width:it.height)
var a=(i.max-i.min)/e,r=-Math.floor(Math.log(a)/Math.LN10),l=n.tickDecimals
null!=l&&r>l&&(r=l)
var s,c=Math.pow(10,-r),h=a/c
if(h<1.5?s=1:h<3?(s=2,h>2.25&&(null==l||r+1<=l)&&(s=2.5,++r)):s=h<7.5?5:10,s*=c,null!=n.minTickSize&&s<n.minTickSize&&(s=n.minTickSize),i.delta=a,i.tickDecimals=Math.max(0,null!=l?l:r),i.tickSize=n.tickSize||s,"time"==n.mode&&!i.tickGenerator)throw new Error("Time mode requires the flot.time plugin.")
if(i.tickGenerator||(i.tickGenerator=function(t){var i,e=[],n=o(t.min,t.tickSize),a=0,r=Number.NaN
do{i=r,r=n+a*t.tickSize,e.push(r),++a}while(r<t.max&&r!=i)
return e},i.tickFormatter=function(t,i){var e=i.tickDecimals?Math.pow(10,i.tickDecimals):1,o=""+Math.round(t*e)/e
if(null!=i.tickDecimals){var n=o.indexOf("."),a=-1==n?0:o.length-n-1
if(a<i.tickDecimals)return(a?o:o+".")+(""+e).substr(1,i.tickDecimals-a)}return o}),t.isFunction(n.tickFormatter)&&(i.tickFormatter=function(t,i){return""+n.tickFormatter(t,i)}),null!=n.alignTicksWithAxis){var f=("x"==i.direction?rt:lt)[n.alignTicksWithAxis-1]
if(f&&f.used&&f!=i){var u=i.tickGenerator(i)
if(u.length>0&&(null==n.min&&(i.min=Math.min(i.min,u[0])),null==n.max&&u.length>1&&(i.max=Math.max(i.max,u[u.length-1]))),i.tickGenerator=function(t){var i,e,o=[]
for(e=0;e<f.ticks.length;++e)i=(f.ticks[e].v-f.min)/(f.max-f.min),i=t.min+i*(t.max-t.min),o.push(i)
return o},!i.mode&&null==n.tickDecimals){var d=Math.max(0,1-Math.floor(Math.log(i.delta)/Math.LN10)),p=i.tickGenerator(i)
p.length>1&&/\..*0$/.test((p[1]-p[0]).toFixed(d))||(i.tickDecimals=d)}}}}function S(i){var e=i.options.ticks,o=[]
null==e||"number"==typeof e&&e>0?o=i.tickGenerator(i):e&&(o=t.isFunction(e)?e(i):e)
var n,a
for(i.ticks=[],n=0;n<o.length;++n){var r=null,l=o[n]
"object"==typeof l?(a=+l[0],l.length>1&&(r=l[1])):a=+l,null==r&&(r=i.tickFormatter(a,i)),isNaN(a)||i.ticks.push({v:a,label:r})}}function W(t,i){t.options.autoscaleMargin&&i.length>0&&(null==t.options.min&&(t.min=Math.min(t.min,i[0].v)),null==t.options.max&&i.length>1&&(t.max=Math.max(t.max,i[i.length-1].v)))}function z(){it.clear(),l(ft.drawBackground,[nt])
var t=tt.grid
t.show&&t.backgroundColor&&A(),t.show&&!t.aboveData&&F()
for(var i=0;i<Z.length;++i)l(ft.drawSeries,[nt,Z[i]]),N(Z[i])
l(ft.draw,[nt]),t.show&&t.aboveData&&F(),it.render(),X()}function I(t,i){for(var e,o,n,a,r=f(),l=0;l<r.length;++l)if(e=r[l],e.direction==i&&(a=i+e.n+"axis",t[a]||1!=e.n||(a=i+"axis"),t[a])){o=t[a].from,n=t[a].to
break}if(t[a]||(e="x"==i?rt[0]:lt[0],o=t[i+"1"],n=t[i+"2"]),null!=o&&null!=n&&o>n){var s=o
o=n,n=s}return{from:o,to:n,axis:e}}function A(){nt.save(),nt.translate(st.left,st.top),nt.fillStyle=K(tt.grid.backgroundColor,ht,0,"rgba(255, 255, 255, 0)"),nt.fillRect(0,0,ct,ht),nt.restore()}function F(){var i,e,o,n
nt.save(),nt.translate(st.left,st.top)
var a=tt.grid.markings
if(a)for(t.isFunction(a)&&(e=ut.getAxes(),e.xmin=e.xaxis.min,e.xmax=e.xaxis.max,e.ymin=e.yaxis.min,e.ymax=e.yaxis.max,a=a(e)),i=0;i<a.length;++i){var r=a[i],l=I(r,"x"),s=I(r,"y")
if(null==l.from&&(l.from=l.axis.min),null==l.to&&(l.to=l.axis.max),null==s.from&&(s.from=s.axis.min),null==s.to&&(s.to=s.axis.max),!(l.to<l.axis.min||l.from>l.axis.max||s.to<s.axis.min||s.from>s.axis.max)){l.from=Math.max(l.from,l.axis.min),l.to=Math.min(l.to,l.axis.max),s.from=Math.max(s.from,s.axis.min),s.to=Math.min(s.to,s.axis.max)
var c=l.from===l.to,h=s.from===s.to
if(!c||!h)if(l.from=Math.floor(l.axis.p2c(l.from)),l.to=Math.floor(l.axis.p2c(l.to)),s.from=Math.floor(s.axis.p2c(s.from)),s.to=Math.floor(s.axis.p2c(s.to)),c||h){var u=r.lineWidth||tt.grid.markingsLineWidth,d=u%2?.5:0
nt.beginPath(),nt.strokeStyle=r.color||tt.grid.markingsColor,nt.lineWidth=u,c?(nt.moveTo(l.to+d,s.from),nt.lineTo(l.to+d,s.to)):(nt.moveTo(l.from,s.to+d),nt.lineTo(l.to,s.to+d)),nt.stroke()}else nt.fillStyle=r.color||tt.grid.markingsColor,nt.fillRect(l.from,s.to,l.to-l.from,s.from-s.to)}}e=f(),o=tt.grid.borderWidth
for(var p=0;p<e.length;++p){var m,x,g,b,v=e[p],k=v.box,y=v.tickLength
if(v.show&&0!=v.ticks.length){for(nt.lineWidth=1,"x"==v.direction?(m=0,x="full"==y?"top"==v.position?0:ht:k.top-st.top+("top"==v.position?k.height:0)):(x=0,m="full"==y?"left"==v.position?0:ct:k.left-st.left+("left"==v.position?k.width:0)),v.innermost||(nt.strokeStyle=v.options.color,nt.beginPath(),g=b=0,"x"==v.direction?g=ct+1:b=ht+1,1==nt.lineWidth&&("x"==v.direction?x=Math.floor(x)+.5:m=Math.floor(m)+.5),nt.moveTo(m,x),nt.lineTo(m+g,x+b),nt.stroke()),nt.strokeStyle=v.options.tickColor,nt.beginPath(),i=0;i<v.ticks.length;++i){var w=v.ticks[i].v
g=b=0,isNaN(w)||w<v.min||w>v.max||"full"==y&&("object"==typeof o&&o[v.position]>0||o>0)&&(w==v.min||w==v.max)||("x"==v.direction?(m=v.p2c(w),b="full"==y?-ht:y,"top"==v.position&&(b=-b)):(x=v.p2c(w),g="full"==y?-ct:y,"left"==v.position&&(g=-g)),1==nt.lineWidth&&("x"==v.direction?m=Math.floor(m)+.5:x=Math.floor(x)+.5),nt.moveTo(m,x),nt.lineTo(m+g,x+b))}nt.stroke()}}o&&(n=tt.grid.borderColor,"object"==typeof o||"object"==typeof n?("object"!=typeof o&&(o={top:o,right:o,bottom:o,left:o}),"object"!=typeof n&&(n={top:n,right:n,bottom:n,left:n}),o.top>0&&(nt.strokeStyle=n.top,nt.lineWidth=o.top,nt.beginPath(),nt.moveTo(0-o.left,0-o.top/2),nt.lineTo(ct,0-o.top/2),nt.stroke()),o.right>0&&(nt.strokeStyle=n.right,nt.lineWidth=o.right,nt.beginPath(),nt.moveTo(ct+o.right/2,0-o.top),nt.lineTo(ct+o.right/2,ht),nt.stroke()),o.bottom>0&&(nt.strokeStyle=n.bottom,nt.lineWidth=o.bottom,nt.beginPath(),nt.moveTo(ct+o.right,ht+o.bottom/2),nt.lineTo(0,ht+o.bottom/2),nt.stroke()),o.left>0&&(nt.strokeStyle=n.left,nt.lineWidth=o.left,nt.beginPath(),nt.moveTo(0-o.left/2,ht+o.bottom),nt.lineTo(0-o.left/2,0),nt.stroke())):(nt.lineWidth=o,nt.strokeStyle=tt.grid.borderColor,nt.strokeRect(-o/2,-o/2,ct+o,ht+o))),nt.restore()}function P(){t.each(f(),function(t,i){var e,o,n,a,r,l=i.box,s=i.direction+"Axis "+i.direction+i.n+"Axis",c="flot-"+i.direction+"-axis flot-"+i.direction+i.n+"-axis "+s,h=i.options.font||"flot-tick-label tickLabel"
if(it.removeText(c),i.show&&0!=i.ticks.length)for(var f=0;f<i.ticks.length;++f)e=i.ticks[f],!e.label||e.v<i.min||e.v>i.max||("x"==i.direction?(a="center",o=st.left+i.p2c(e.v),"bottom"==i.position?n=l.top+l.padding:(n=l.top+l.height-l.padding,r="bottom")):(r="middle",n=st.top+i.p2c(e.v),"left"==i.position?(o=l.left+l.width-l.padding,a="right"):o=l.left+l.padding),it.addText(c,o,n,e.label,h,null,null,a,r))})}function N(t){t.lines.show&&D(t),t.bars.show&&R(t),t.points.show&&L(t)}function D(t){function i(t,i,e,o,n){var a=t.points,r=t.pointsize,l=null,s=null
nt.beginPath()
for(var c=r;c<a.length;c+=r){var h=a[c-r],f=a[c-r+1],u=a[c],d=a[c+1]
if(null!=h&&null!=u){if(f<=d&&f<n.min){if(d<n.min)continue
h=(n.min-f)/(d-f)*(u-h)+h,f=n.min}else if(d<=f&&d<n.min){if(f<n.min)continue
u=(n.min-f)/(d-f)*(u-h)+h,d=n.min}if(f>=d&&f>n.max){if(d>n.max)continue
h=(n.max-f)/(d-f)*(u-h)+h,f=n.max}else if(d>=f&&d>n.max){if(f>n.max)continue
u=(n.max-f)/(d-f)*(u-h)+h,d=n.max}if(h<=u&&h<o.min){if(u<o.min)continue
f=(o.min-h)/(u-h)*(d-f)+f,h=o.min}else if(u<=h&&u<o.min){if(h<o.min)continue
d=(o.min-h)/(u-h)*(d-f)+f,u=o.min}if(h>=u&&h>o.max){if(u>o.max)continue
f=(o.max-h)/(u-h)*(d-f)+f,h=o.max}else if(u>=h&&u>o.max){if(h>o.max)continue
d=(o.max-h)/(u-h)*(d-f)+f,u=o.max}h==l&&f==s||nt.moveTo(o.p2c(h)+i,n.p2c(f)+e),l=u,s=d,nt.lineTo(o.p2c(u)+i,n.p2c(d)+e)}}nt.stroke()}nt.save(),nt.translate(st.left,st.top),nt.lineJoin="round"
var e=t.lines.lineWidth,o=t.shadowSize
if(e>0&&o>0){nt.lineWidth=o,nt.strokeStyle="rgba(0,0,0,0.1)"
var n=Math.PI/18
i(t.datapoints,Math.sin(n)*(e/2+o/2),Math.cos(n)*(e/2+o/2),t.xaxis,t.yaxis),nt.lineWidth=o/2,i(t.datapoints,Math.sin(n)*(e/2+o/4),Math.cos(n)*(e/2+o/4),t.xaxis,t.yaxis)}nt.lineWidth=e,nt.strokeStyle=t.color
var a=H(t.lines,t.color,0,ht)
a&&(nt.fillStyle=a,function(t,i,e){for(var o=t.points,n=t.pointsize,a=Math.min(Math.max(0,e.min),e.max),r=0,l=!1,s=1,c=0,h=0;;){if(n>0&&r>o.length+n)break
r+=n
var f=o[r-n],u=o[r-n+s],d=o[r],p=o[r+s]
if(l){if(n>0&&null!=f&&null==d){h=r,n=-n,s=2
continue}if(n<0&&r==c+n){nt.fill(),l=!1,n=-n,s=1,r=c=h+n
continue}}if(null!=f&&null!=d){if(f<=d&&f<i.min){if(d<i.min)continue
u=(i.min-f)/(d-f)*(p-u)+u,f=i.min}else if(d<=f&&d<i.min){if(f<i.min)continue
p=(i.min-f)/(d-f)*(p-u)+u,d=i.min}if(f>=d&&f>i.max){if(d>i.max)continue
u=(i.max-f)/(d-f)*(p-u)+u,f=i.max}else if(d>=f&&d>i.max){if(f>i.max)continue
p=(i.max-f)/(d-f)*(p-u)+u,d=i.max}if(l||(nt.beginPath(),nt.moveTo(i.p2c(f),e.p2c(a)),l=!0),u>=e.max&&p>=e.max)nt.lineTo(i.p2c(f),e.p2c(e.max)),nt.lineTo(i.p2c(d),e.p2c(e.max))
else if(u<=e.min&&p<=e.min)nt.lineTo(i.p2c(f),e.p2c(e.min)),nt.lineTo(i.p2c(d),e.p2c(e.min))
else{var m=f,x=d
u<=p&&u<e.min&&p>=e.min?(f=(e.min-u)/(p-u)*(d-f)+f,u=e.min):p<=u&&p<e.min&&u>=e.min&&(d=(e.min-u)/(p-u)*(d-f)+f,p=e.min),u>=p&&u>e.max&&p<=e.max?(f=(e.max-u)/(p-u)*(d-f)+f,u=e.max):p>=u&&p>e.max&&u<=e.max&&(d=(e.max-u)/(p-u)*(d-f)+f,p=e.max),f!=m&&nt.lineTo(i.p2c(m),e.p2c(u)),nt.lineTo(i.p2c(f),e.p2c(u)),nt.lineTo(i.p2c(d),e.p2c(p)),d!=x&&(nt.lineTo(i.p2c(d),e.p2c(p)),nt.lineTo(i.p2c(x),e.p2c(p)))}}}}(t.datapoints,t.xaxis,t.yaxis)),e>0&&i(t.datapoints,0,0,t.xaxis,t.yaxis),nt.restore()}function L(t){function i(t,i,e,o,n,a,r,l){for(var s=t.points,c=t.pointsize,h=0;h<s.length;h+=c){var f=s[h],u=s[h+1]
null==f||f<a.min||f>a.max||u<r.min||u>r.max||(nt.beginPath(),f=a.p2c(f),u=r.p2c(u)+o,"circle"==l?nt.arc(f,u,i,0,n?Math.PI:2*Math.PI,!1):l(nt,f,u,i,n),nt.closePath(),e&&(nt.fillStyle=e,nt.fill()),nt.stroke())}}nt.save(),nt.translate(st.left,st.top)
var e=t.points.lineWidth,o=t.shadowSize,n=t.points.radius,a=t.points.symbol
if(0==e&&(e=1e-4),e>0&&o>0){var r=o/2
nt.lineWidth=r,nt.strokeStyle="rgba(0,0,0,0.1)",i(t.datapoints,n,null,r+r/2,!0,t.xaxis,t.yaxis,a),nt.strokeStyle="rgba(0,0,0,0.2)",i(t.datapoints,n,null,r/2,!0,t.xaxis,t.yaxis,a)}nt.lineWidth=e,nt.strokeStyle=t.color,i(t.datapoints,n,H(t.points,t.color),0,!1,t.xaxis,t.yaxis,a),nt.restore()}function O(t,i,e,o,n,a,r,l,s,c,h){var f,u,d,p,m,x,g,b,v
c?(b=x=g=!0,m=!1,f=e,u=t,p=i+o,d=i+n,u<f&&(v=u,u=f,f=v,m=!0,x=!1)):(m=x=g=!0,b=!1,f=t+o,u=t+n,d=e,(p=i)<d&&(v=p,p=d,d=v,b=!0,g=!1)),u<r.min||f>r.max||p<l.min||d>l.max||(f<r.min&&(f=r.min,m=!1),u>r.max&&(u=r.max,x=!1),d<l.min&&(d=l.min,b=!1),p>l.max&&(p=l.max,g=!1),f=r.p2c(f),d=l.p2c(d),u=r.p2c(u),p=l.p2c(p),a&&(s.fillStyle=a(d,p),s.fillRect(f,p,u-f,d-p)),h>0&&(m||x||g||b)&&(s.beginPath(),s.moveTo(f,d),m?s.lineTo(f,p):s.moveTo(f,p),g?s.lineTo(u,p):s.moveTo(u,p),x?s.lineTo(u,d):s.moveTo(u,d),b?s.lineTo(f,d):s.moveTo(f,d),s.stroke()))}function R(t){nt.save(),nt.translate(st.left,st.top),nt.lineWidth=t.bars.lineWidth,nt.strokeStyle=t.color
var i
switch(t.bars.align){case"left":i=0
break
case"right":i=-t.bars.barWidth
break
default:i=-t.bars.barWidth/2}var e=t.bars.fill?function(i,e){return H(t.bars,t.color,i,e)}:null;(function(i,e,o,n,a,r){for(var l=i.points,s=i.pointsize,c=0;c<l.length;c+=s)null!=l[c]&&O(l[c],l[c+1],l[c+2],e,o,n,a,r,nt,t.bars.horizontal,t.bars.lineWidth)})(t.datapoints,i,i+t.bars.barWidth,e,t.xaxis,t.yaxis),nt.restore()}function H(i,e,o,n){var a=i.fill
if(!a)return null
if(i.fillColor)return K(i.fillColor,o,n,e)
var r=t.color.parse(e)
return r.a="number"==typeof a?a:.4,r.normalize(),r.toString()}function j(){if(null!=tt.legend.container?t(tt.legend.container).html(""):e.find(".legend").remove(),tt.legend.show){for(var i,o,n=[],a=[],r=!1,l=tt.legend.labelFormatter,s=0;s<Z.length;++s)i=Z[s],i.label&&(o=l?l(i.label,i):i.label)&&a.push({label:o,color:i.color})
if(tt.legend.sorted)if(t.isFunction(tt.legend.sorted))a.sort(tt.legend.sorted)
else if("reverse"==tt.legend.sorted)a.reverse()
else{var c="descending"!=tt.legend.sorted
a.sort(function(t,i){return t.label==i.label?0:t.label<i.label!=c?1:-1})}for(var s=0;s<a.length;++s){var h=a[s]
s%tt.legend.noColumns==0&&(r&&n.push("</tr>"),n.push("<tr>"),r=!0),n.push('<td class="legendColorBox"><div style="border:1px solid '+tt.legend.labelBoxBorderColor+';padding:1px"><div style="width:4px;height:0;border:5px solid '+h.color+';overflow:hidden"></div></div></td><td class="legendLabel">'+h.label+"</td>")}if(r&&n.push("</tr>"),0!=n.length){var f='<table style="font-size:smaller;color:'+tt.grid.color+'">'+n.join("")+"</table>"
if(null!=tt.legend.container)t(tt.legend.container).html(f)
else{var u="",d=tt.legend.position,p=tt.legend.margin
null==p[0]&&(p=[p,p]),"n"==d.charAt(0)?u+="top:"+(p[1]+st.top)+"px;":"s"==d.charAt(0)&&(u+="bottom:"+(p[1]+st.bottom)+"px;"),"e"==d.charAt(1)?u+="right:"+(p[0]+st.right)+"px;":"w"==d.charAt(1)&&(u+="left:"+(p[0]+st.left)+"px;")
var m=t('<div class="legend">'+f.replace('style="','style="position:absolute;'+u+";")+"</div>").appendTo(e)
if(0!=tt.legend.backgroundOpacity){var x=tt.legend.backgroundColor
null==x&&(x=tt.grid.backgroundColor,x=x&&"string"==typeof x?t.color.parse(x):t.color.extract(m,"background-color"),x.a=1,x=x.toString())
var g=m.children()
t('<div style="position:absolute;width:'+g.width()+"px;height:"+g.height()+"px;"+u+"background-color:"+x+';"> </div>').prependTo(m).css("opacity",tt.legend.backgroundOpacity)}}}}}function E(t,i,e){var o,n,a,r=tt.grid.mouseActiveRadius,l=r*r+1,s=null
for(o=Z.length-1;o>=0;--o)if(e(Z[o])){var c=Z[o],h=c.xaxis,f=c.yaxis,u=c.datapoints.points,d=h.c2p(t),p=f.c2p(i),m=r/h.scale,x=r/f.scale
if(a=c.datapoints.pointsize,h.options.inverseTransform&&(m=Number.MAX_VALUE),f.options.inverseTransform&&(x=Number.MAX_VALUE),c.lines.show||c.points.show)for(n=0;n<u.length;n+=a){var g=u[n],b=u[n+1]
if(null!=g&&!(g-d>m||g-d<-m||b-p>x||b-p<-x)){var v=Math.abs(h.p2c(g)-t),k=Math.abs(f.p2c(b)-i),y=v*v+k*k
y<l&&(l=y,s=[o,n/a])}}if(c.bars.show&&!s){var w,M
switch(c.bars.align){case"left":w=0
break
case"right":w=-c.bars.barWidth
break
default:w=-c.bars.barWidth/2}for(M=w+c.bars.barWidth,n=0;n<u.length;n+=a){var g=u[n],b=u[n+1],T=u[n+2]
null!=g&&((Z[o].bars.horizontal?d<=Math.max(T,g)&&d>=Math.min(T,g)&&p>=b+w&&p<=b+M:d>=g+w&&d<=g+M&&p>=Math.min(T,b)&&p<=Math.max(T,b))&&(s=[o,n/a]))}}}return s?(o=s[0],n=s[1],a=Z[o].datapoints.pointsize,{datapoint:Z[o].datapoints.points.slice(n*a,(n+1)*a),dataIndex:n,series:Z[o],seriesIndex:o}):null}function B(t){tt.grid.hoverable&&V("plothover",t,function(t){return 0!=t.hoverable})}function G(t){tt.grid.hoverable&&V("plothover",t,function(t){return!1})}function _(t){V("plotclick",t,function(t){return 0!=t.clickable})}function V(t,i,o){var n=ot.offset(),a=i.pageX-n.left-st.left,r=i.pageY-n.top-st.top,l=u({left:a,top:r})
l.pageX=i.pageX,l.pageY=i.pageY
var s=E(a,r,o)
if(s&&(s.pageX=parseInt(s.series.xaxis.p2c(s.datapoint[0])+n.left+st.left,10),s.pageY=parseInt(s.series.yaxis.p2c(s.datapoint[1])+n.top+st.top,10)),tt.grid.autoHighlight){for(var c=0;c<dt.length;++c){var h=dt[c]
h.auto!=t||s&&h.series==s.series&&h.point[0]==s.datapoint[0]&&h.point[1]==s.datapoint[1]||Q(h.series,h.point)}s&&q(s.series,s.datapoint,t)}e.trigger(t,[l,s])}function X(){var t=tt.interaction.redrawOverlayInterval
if(-1==t)return void Y()
pt||(pt=setTimeout(Y,t))}function Y(){pt=null,at.save(),et.clear(),at.translate(st.left,st.top)
var t,i
for(t=0;t<dt.length;++t)i=dt[t],i.series.bars.show?$(i.series,i.point):J(i.series,i.point)
at.restore(),l(ft.drawOverlay,[at])}function q(t,i,e){if("number"==typeof t&&(t=Z[t]),"number"==typeof i){var o=t.datapoints.pointsize
i=t.datapoints.points.slice(o*i,o*(i+1))}var n=U(t,i);-1==n?(dt.push({series:t,point:i,auto:e}),X()):e||(dt[n].auto=!1)}function Q(t,i){if(null==t&&null==i)return dt=[],void X()
if("number"==typeof t&&(t=Z[t]),"number"==typeof i){var e=t.datapoints.pointsize
i=t.datapoints.points.slice(e*i,e*(i+1))}var o=U(t,i);-1!=o&&(dt.splice(o,1),X())}function U(t,i){for(var e=0;e<dt.length;++e){var o=dt[e]
if(o.series==t&&o.point[0]==i[0]&&o.point[1]==i[1])return e}return-1}function J(i,e){var o=e[0],n=e[1],a=i.xaxis,r=i.yaxis,l="string"==typeof i.highlightColor?i.highlightColor:t.color.parse(i.color).scale("a",.5).toString()
if(!(o<a.min||o>a.max||n<r.min||n>r.max)){var s=i.points.radius+i.points.lineWidth/2
at.lineWidth=s,at.strokeStyle=l
var c=1.5*s
o=a.p2c(o),n=r.p2c(n),at.beginPath(),"circle"==i.points.symbol?at.arc(o,n,c,0,2*Math.PI,!1):i.points.symbol(at,o,n,c,!1),at.closePath(),at.stroke()}}function $(i,e){var o,n="string"==typeof i.highlightColor?i.highlightColor:t.color.parse(i.color).scale("a",.5).toString(),a=n
switch(i.bars.align){case"left":o=0
break
case"right":o=-i.bars.barWidth
break
default:o=-i.bars.barWidth/2}at.lineWidth=i.bars.lineWidth,at.strokeStyle=n,O(e[0],e[1],e[2]||0,o,o+i.bars.barWidth,function(){return a},i.xaxis,i.yaxis,at,i.bars.horizontal,i.bars.lineWidth)}function K(i,e,o,n){if("string"==typeof i)return i
for(var a=nt.createLinearGradient(0,o,0,e),r=0,l=i.colors.length;r<l;++r){var s=i.colors[r]
if("string"!=typeof s){var c=t.color.parse(n)
null!=s.brightness&&(c=c.scale("rgb",s.brightness)),null!=s.opacity&&(c.a*=s.opacity),s=c.toString()}a.addColorStop(r/(l-1),s)}return a}var Z=[],tt={colors:["#edc240","#afd8f8","#cb4b4b","#4da74d","#9440ed"],legend:{show:!0,noColumns:1,labelFormatter:null,labelBoxBorderColor:"#ccc",container:null,position:"ne",margin:5,backgroundColor:null,backgroundOpacity:.85,sorted:null},xaxis:{show:null,position:"bottom",mode:null,font:null,color:null,tickColor:null,transform:null,inverseTransform:null,min:null,max:null,autoscaleMargin:null,ticks:null,tickFormatter:null,labelWidth:null,labelHeight:null,reserveSpace:null,tickLength:null,alignTicksWithAxis:null,tickDecimals:null,tickSize:null,minTickSize:null},yaxis:{autoscaleMargin:.02,position:"left"},xaxes:[],yaxes:[],series:{points:{show:!1,radius:3,lineWidth:2,fill:!0,fillColor:"#ffffff",symbol:"circle"},lines:{lineWidth:2,fill:!1,fillColor:null,steps:!1},bars:{show:!1,lineWidth:2,barWidth:1,fill:!0,fillColor:null,align:"left",horizontal:!1,zero:!0},shadowSize:3,highlightColor:null},grid:{show:!0,aboveData:!1,color:"#545454",backgroundColor:null,borderColor:null,tickColor:null,margin:0,labelMargin:5,axisMargin:8,borderWidth:2,minBorderMargin:null,markings:null,markingsColor:"#f4f4f4",markingsLineWidth:2,clickable:!1,hoverable:!1,autoHighlight:!0,mouseActiveRadius:10},interaction:{redrawOverlayInterval:1e3/60},hooks:{}},it=null,et=null,ot=null,nt=null,at=null,rt=[],lt=[],st={left:0,right:0,top:0,bottom:0},ct=0,ht=0,ft={processOptions:[],processRawData:[],processDatapoints:[],processOffset:[],drawBackground:[],drawSeries:[],draw:[],bindEvents:[],drawOverlay:[],shutdown:[]},ut=this
ut.setData=s,ut.setupGrid=M,ut.draw=z,ut.getPlaceholder=function(){return e},ut.getCanvas=function(){return it.element},ut.getPlotOffset=function(){return st},ut.width=function(){return ct},ut.height=function(){return ht},ut.offset=function(){var t=ot.offset()
return t.left+=st.left,t.top+=st.top,t},ut.getData=function(){return Z},ut.getAxes=function(){var i={}
return t.each(rt.concat(lt),function(t,e){e&&(i[e.direction+(1!=e.n?e.n:"")+"axis"]=e)}),i},ut.getXAxes=function(){return rt},ut.getYAxes=function(){return lt},ut.c2p=u,ut.p2c=d,ut.getOptions=function(){return tt},ut.highlight=q,ut.unhighlight=Q,ut.triggerRedrawOverlay=X,ut.pointOffset=function(t){return{left:parseInt(rt[h(t,"x")-1].p2c(+t.x)+st.left,10),top:parseInt(lt[h(t,"y")-1].p2c(+t.y)+st.top,10)}},ut.shutdown=g,ut.destroy=function(){g(),e.removeData("plot").empty(),Z=[],tt=null,it=null,et=null,ot=null,nt=null,at=null,rt=[],lt=[],ft=null,dt=[],ut=null},ut.resize=function(){var t=e.width(),i=e.height()
it.resize(t,i),et.resize(t,i)},ut.hooks=ft,function(){for(var e={Canvas:i},o=0;o<r.length;++o){var n=r[o]
n.init(ut,e),n.options&&t.extend(!0,tt,n.options)}}(),function(i){t.extend(!0,tt,i),i&&i.colors&&(tt.colors=i.colors),null==tt.xaxis.color&&(tt.xaxis.color=t.color.parse(tt.grid.color).scale("a",.22).toString()),null==tt.yaxis.color&&(tt.yaxis.color=t.color.parse(tt.grid.color).scale("a",.22).toString()),null==tt.xaxis.tickColor&&(tt.xaxis.tickColor=tt.grid.tickColor||tt.xaxis.color),null==tt.yaxis.tickColor&&(tt.yaxis.tickColor=tt.grid.tickColor||tt.yaxis.color),null==tt.grid.borderColor&&(tt.grid.borderColor=tt.grid.color),null==tt.grid.tickColor&&(tt.grid.tickColor=t.color.parse(tt.grid.color).scale("a",.22).toString())
var o,n,a,r=e.css("font-size"),s=r?+r.replace("px",""):13,c={style:e.css("font-style"),size:Math.round(.8*s),variant:e.css("font-variant"),weight:e.css("font-weight"),family:e.css("font-family")}
for(a=tt.xaxes.length||1,o=0;o<a;++o)n=tt.xaxes[o],n&&!n.tickColor&&(n.tickColor=n.color),n=t.extend(!0,{},tt.xaxis,n),tt.xaxes[o]=n,n.font&&(n.font=t.extend({},c,n.font),n.font.color||(n.font.color=n.color),n.font.lineHeight||(n.font.lineHeight=Math.round(1.15*n.font.size)))
for(a=tt.yaxes.length||1,o=0;o<a;++o)n=tt.yaxes[o],n&&!n.tickColor&&(n.tickColor=n.color),n=t.extend(!0,{},tt.yaxis,n),tt.yaxes[o]=n,n.font&&(n.font=t.extend({},c,n.font),n.font.color||(n.font.color=n.color),n.font.lineHeight||(n.font.lineHeight=Math.round(1.15*n.font.size)))
for(tt.xaxis.noTicks&&null==tt.xaxis.ticks&&(tt.xaxis.ticks=tt.xaxis.noTicks),tt.yaxis.noTicks&&null==tt.yaxis.ticks&&(tt.yaxis.ticks=tt.yaxis.noTicks),tt.x2axis&&(tt.xaxes[1]=t.extend(!0,{},tt.xaxis,tt.x2axis),tt.xaxes[1].position="top",null==tt.x2axis.min&&(tt.xaxes[1].min=null),null==tt.x2axis.max&&(tt.xaxes[1].max=null)),tt.y2axis&&(tt.yaxes[1]=t.extend(!0,{},tt.yaxis,tt.y2axis),tt.yaxes[1].position="right",null==tt.y2axis.min&&(tt.yaxes[1].min=null),null==tt.y2axis.max&&(tt.yaxes[1].max=null)),tt.grid.coloredAreas&&(tt.grid.markings=tt.grid.coloredAreas),tt.grid.coloredAreasColor&&(tt.grid.markingsColor=tt.grid.coloredAreasColor),tt.lines&&t.extend(!0,tt.series.lines,tt.lines),tt.points&&t.extend(!0,tt.series.points,tt.points),tt.bars&&t.extend(!0,tt.series.bars,tt.bars),null!=tt.shadowSize&&(tt.series.shadowSize=tt.shadowSize),null!=tt.highlightColor&&(tt.series.highlightColor=tt.highlightColor),o=0;o<tt.xaxes.length;++o)p(rt,o+1).options=tt.xaxes[o]
for(o=0;o<tt.yaxes.length;++o)p(lt,o+1).options=tt.yaxes[o]
for(var h in ft)tt.hooks[h]&&tt.hooks[h].length&&(ft[h]=ft[h].concat(tt.hooks[h]))
l(ft.processOptions,[tt])}(a),function(){e.css("padding",0).children().filter(function(){return!t(this).hasClass("flot-overlay")&&!t(this).hasClass("flot-base")}).remove(),"static"==e.css("position")&&e.css("position","relative"),it=new i("flot-base",e),et=new i("flot-overlay",e),nt=it.context,at=et.context,ot=t(et.element).unbind()
var o=e.data("plot")
o&&(o.shutdown(),et.clear()),e.data("plot",ut)}(),s(n),M(),z();(function(){tt.grid.hoverable&&(ot.mousemove(B),ot.bind("mouseleave",G)),tt.grid.clickable&&ot.click(_),l(ft.bindEvents,[ot])})()
var dt=[],pt=null}function o(t,i){return i*Math.floor(t/i)}var n=Object.prototype.hasOwnProperty
t.fn.detach||(t.fn.detach=function(){return this.each(function(){this.parentNode&&this.parentNode.removeChild(this)})}),i.prototype.resize=function(t,i){if(t<=0||i<=0)throw new Error("Invalid dimensions for plot, width = "+t+", height = "+i)
var e=this.element,o=this.context,n=this.pixelRatio
this.width!=t&&(e.width=t*n,e.style.width=t+"px",this.width=t),this.height!=i&&(e.height=i*n,e.style.height=i+"px",this.height=i),o.restore(),o.save(),o.scale(n,n)},i.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)},i.prototype.render=function(){var t=this._textCache
for(var i in t)if(n.call(t,i)){var e=this.getTextLayer(i),o=t[i]
e.hide()
for(var a in o)if(n.call(o,a)){var r=o[a]
for(var l in r)if(n.call(r,l)){for(var s,c=r[l].positions,h=0;s=c[h];h++)s.active?s.rendered||(e.append(s.element),s.rendered=!0):(c.splice(h--,1),s.rendered&&s.element.detach())
0==c.length&&delete r[l]}}e.show()}},i.prototype.getTextLayer=function(i){var e=this.text[i]
return null==e&&(null==this.textContainer&&(this.textContainer=t("<div class='flot-text'></div>").css({position:"absolute",top:0,left:0,bottom:0,right:0,"font-size":"smaller",color:"#545454"}).insertAfter(this.element)),e=this.text[i]=t("<div></div>").addClass(i).css({position:"absolute",top:0,left:0,bottom:0,right:0}).appendTo(this.textContainer)),e},i.prototype.getTextInfo=function(i,e,o,n,a){var r,l,s,c
if(e=""+e,r="object"==typeof o?o.style+" "+o.variant+" "+o.weight+" "+o.size+"px/"+o.lineHeight+"px "+o.family:o,l=this._textCache[i],null==l&&(l=this._textCache[i]={}),s=l[r],null==s&&(s=l[r]={}),null==(c=s[e])){var h=t("<div></div>").html(e).css({position:"absolute","max-width":a,top:-9999}).appendTo(this.getTextLayer(i))
"object"==typeof o?h.css({font:r,color:o.color}):"string"==typeof o&&h.addClass(o),c=s[e]={width:h.outerWidth(!0),height:h.outerHeight(!0),element:h,positions:[]},h.detach()}return c},i.prototype.addText=function(t,i,e,o,n,a,r,l,s){var c=this.getTextInfo(t,o,n,a,r),h=c.positions
"center"==l?i-=c.width/2:"right"==l&&(i-=c.width),"middle"==s?e-=c.height/2:"bottom"==s&&(e-=c.height)
for(var f,u=0;f=h[u];u++)if(f.x==i&&f.y==e)return void(f.active=!0)
f={active:!0,rendered:!1,element:h.length?c.element.clone():c.element,x:i,y:e},h.push(f),f.element.css({top:Math.round(e),left:Math.round(i),"text-align":l})},i.prototype.removeText=function(t,i,e,o,a,r){if(null==o){var l=this._textCache[t]
if(null!=l)for(var s in l)if(n.call(l,s)){var c=l[s]
for(var h in c)if(n.call(c,h))for(var f,u=c[h].positions,d=0;f=u[d];d++)f.active=!1}}else for(var f,u=this.getTextInfo(t,o,a,r).positions,d=0;f=u[d];d++)f.x==i&&f.y==e&&(f.active=!1)},t.plot=function(i,o,n){return new e(t(i),o,n,t.plot.plugins)},t.plot.version="0.8.3",t.plot.plugins=[],t.fn.plot=function(i,e){return this.each(function(){t.plot(this,i,e)})}}(jQuery)
