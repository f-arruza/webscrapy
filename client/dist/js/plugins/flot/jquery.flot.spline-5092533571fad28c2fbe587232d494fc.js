(function(i){"use strict"
function e(i,e,s,t,n,o,l){var a,r,c,p,u,h,f,d,v=Math.pow,x=Math.sqrt
return a=x(v(s-i,2)+v(t-e,2)),r=x(v(n-s,2)+v(o-t,2)),c=l*a/(a+r),p=l-c,u=s+c*(i-n),h=t+c*(e-o),f=s-p*(i-n),d=t-p*(e-o),[u,h,f,d]}function s(e,s,t,n,o){var l=i.color.parse(o)
l.a="number"==typeof n?n:.3,l.normalize(),l=l.toString(),s.beginPath(),s.moveTo(e[0][0],e[0][1])
for(var a=e.length,r=0;r<a;r++)s[e[r][3]].apply(s,e[r][2])
s.stroke(),s.lineWidth=0,s.lineTo(e[a-1][0],t),s.lineTo(e[0][0],t),s.closePath(),!1!==n&&(s.fillStyle=l,s.fill())}function t(i,e,s,t){(void 0===e||"bezier"!==e&&"quadratic"!==e)&&(e="quadratic"),e+="CurveTo",0==o.length?o.push([s[0],s[1],t.concat(s.slice(2)),e]):"quadraticCurveTo"==e&&2==s.length?(t=t.slice(0,2).concat(s),o.push([s[0],s[1],t,e])):o.push([s[2],s[3],t.concat(s.slice(2)),e])}function n(n,l,a){if(!0===a.splines.show){var r,c,p,u=[],h=a.splines.tension||.5,f=a.datapoints.points,d=a.datapoints.pointsize,v=n.getPlotOffset(),x=f.length,g=[]
if(o=[],x/d<4)return void i.extend(a.lines,a.splines)
for(r=0;r<x;r+=d)c=f[r],p=f[r+1],null==c||c<a.xaxis.min||c>a.xaxis.max||p<a.yaxis.min||p>a.yaxis.max||g.push(a.xaxis.p2c(c)+v.left,a.yaxis.p2c(p)+v.top)
for(x=g.length,r=0;r<x-2;r+=2)u=u.concat(e.apply(this,g.slice(r,r+6).concat([h])))
for(l.save(),l.strokeStyle=a.color,l.lineWidth=a.splines.lineWidth,t(l,"quadratic",g.slice(0,4),u.slice(0,2)),r=2;r<x-3;r+=2)t(l,"bezier",g.slice(r,r+4),u.slice(2*r-2,2*r+2))
t(l,"quadratic",g.slice(x-2,x),[u[2*x-10],u[2*x-9],g[x-4],g[x-3]]),s(o,l,n.height()+10,a.splines.fill,a.color),l.restore()}}var o=[]
i.plot.plugins.push({init:function(i){i.hooks.drawSeries.push(n)},options:{series:{splines:{show:!1,lineWidth:2,tension:.5,fill:!1}}},name:"spline",version:"0.8.2"})})(jQuery)
