(function(i){function n(i){function n(i,n){n.series.curvedLines.active&&i.hooks.processDatapoints.unshift(r)}function r(i,n,r){var t=r.points.length/r.pointsize
if(1==n.curvedLines.apply&&void 0===n.originSeries&&t>1.5)if(n.lines.fill){var s=e(r,n.curvedLines,1),o=e(r,n.curvedLines,2)
r.pointsize=3,r.points=[]
for(var a=0,p=0,v=0;v<s.length||a<o.length;)s[v]==o[a]?(r.points[p]=s[v],r.points[p+1]=s[v+1],r.points[p+2]=o[a+1],a+=2,v+=2):s[v]<o[a]?(r.points[p]=s[v],r.points[p+1]=s[v+1],r.points[p+2]=p>0?r.points[p-1]:null,v+=2):(r.points[p]=o[a],r.points[p+1]=p>1?r.points[p-2]:null,r.points[p+2]=o[a+1],a+=2),p+=3}else n.lines.lineWidth>0&&(r.points=e(r,n.curvedLines,1),r.pointsize=2)}function e(i,n,r){var e=i.points,t=i.pointsize,s=n.curvePointFactor*(e.length/t),o=new Array,a=new Array,p=-1,v=-1,u=0
if(n.fit){var f
if(void 0===n.fitPointDist){var l=e[0]
f=(e[e.length-t]-l)/5e4}else f=n.fitPointDist
for(var c=0;c<e.length;c+=t){var h,d
p=c,v=c+r,h=e[p]-f,d=e[p]+f
for(var g=2;h==e[p]||d==e[p];)h=e[p]-f*g,d=e[p]+f*g,g++
o[u]=h,a[u]=e[v],u++,o[u]=e[p],a[u]=e[v],u++,o[u]=d,a[u]=e[v],u++}}else for(var c=0;c<e.length;c+=t)p=c,v=c+r,o[u]=e[p],a[u]=e[v],u++
var y=o.length,w=new Array,A=new Array
w[0]=0,w[y-1]=0,A[0]=0
for(var c=1;c<y-1;++c){var L=o[c+1]-o[c-1]
if(0==L)return[]
var P=(o[c]-o[c-1])/L,z=P*w[c-1]+2
w[c]=(P-1)/z,A[c]=(a[c+1]-a[c])/(o[c+1]-o[c])-(a[c]-a[c-1])/(o[c]-o[c-1]),A[c]=(6*A[c]/(o[c+1]-o[c-1])-P*A[c-1])/z}for(var u=y-2;u>=0;--u)w[u]=w[u]*w[u+1]+A[u]
var D=(o[y-1]-o[0])/(s-1),k=new Array,F=new Array,j=new Array
for(k[0]=o[0],F[0]=a[0],j.push(k[0]),j.push(F[0]),u=1;u<s;++u){k[u]=k[0]+u*D
for(var m=y-1,M=0;m-M>1;){var O=Math.round((m+M)/2)
o[O]>k[u]?m=O:M=O}var Q=o[m]-o[M]
if(0==Q)return[]
var S=(o[m]-k[u])/Q,W=(k[u]-o[M])/Q
F[u]=S*a[M]+W*a[m]+((S*S*S-S)*w[M]+(W*W*W-W)*w[m])*(Q*Q)/6,j.push(k[u]),j.push(F[u])}return j}i.hooks.processOptions.push(n)}var r={series:{curvedLines:{active:!1,apply:!1,fit:!1,curvePointFactor:20,fitPointDist:void 0}}}
i.plot.plugins.push({init:n,options:r,name:"curvedLines",version:"0.5"})})(jQuery)
