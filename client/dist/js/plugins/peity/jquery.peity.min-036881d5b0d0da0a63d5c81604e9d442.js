(function(t,i,e){var s=function(e,s){var h=i.createElementNS("http://www.w3.org/2000/svg",e)
return t.each(s,function(t,i){h.setAttribute(t,i)}),h},h="createElementNS"in i&&s("svg",{}).createSVGRect,r=1/(window.devicePixelRatio||1),n=t.fn.peity=function(i,e){return h&&this.each(function(){var s=t(this),h=s.data("peity")
if(h)i&&(h.type=i),t.extend(h.opts,e)
else{var r=n.defaults[i],l={}
t.each(s.data(),function(t,i){t in r&&(l[t]=i)})
var p=t.extend({},r,l,e),h=new a(s,i,p)
s.change(function(){h.draw()}).data("peity",h)}h.draw()}),this},a=function(t,i,e){this.$el=t,this.type=i,this.opts=e},l=a.prototype
l.draw=function(){n.graphers[this.type].call(this,this.opts)},l.fill=function(){var i=this.opts.fill,e=i
return t.isFunction(e)||(e=function(t,e){return i[e%i.length]}),e},l.prepare=function(i,e){var h
return this.svg?h=t(this.svg).empty():(this.svg=s("svg",{class:"peity"}),this.$el.hide().after(this.svg),h=t(this.svg).data("peity",this)),this.svg.setAttribute("height",e),this.svg.setAttribute("width",i),h},l.values=function(){return t.map(this.$el.text().split(this.opts.delimiter),function(t){return parseFloat(t)})},n.defaults={},n.graphers={},n.register=function(t,i,e){this.defaults[t]=i,this.graphers[t]=e},n.register("pie",{delimiter:null,diameter:16,fill:["#ff9900","#fff4dd","#ffc66e"]},function(t){if(!t.delimiter){var i=this.$el.text().match(/[^0-9\.]/)
t.delimiter=i?i[0]:","}if(i=this.values(),"/"==t.delimiter)var h=i[0],i=[h,e.max(0,i[1]-h)]
for(var r=0,h=i.length,n=0;r<h;r++)n+=i[r]
for(var t=this.prepare(t.width||t.diameter,t.height||t.diameter),r=t.width(),a=t.height(),t=r/2,a=a/2,l=e.min(t,a),p=e.PI,o=this.fill(),d=-p/2,r=0;r<h;r++){var c,f=i[r],u=f/n
if(0!=u){if(1==u)c=s("circle",{cx:t,cy:a,r:l})
else{c=2*u*p
var u=d+c,g=l*e.cos(d)+t,d=l*e.sin(d)+a,v=l*e.cos(u)+t,m=l*e.sin(u)+a
c=s("path",{d:["M",t,a,"L",g,d,"A",l,l,0,c>p?1:0,1,v,m,"Z"].join(" ")}),d=u}c.setAttribute("fill",o.call(this,f,r,i)),this.svg.appendChild(c)}}}),n.register("line",{delimiter:",",fill:"#c6d9fd",height:16,max:null,min:0,stroke:"#4d89f9",strokeWidth:1,width:32},function(t){var i=this.values()
1==i.length&&i.push(i[0])
for(var h=e.max.apply(e,i.concat([t.max])),r=e.min.apply(e,i.concat([t.min])),n=this.prepare(t.width,t.height),a=n.width(),n=n.height()-t.strokeWidth,l=a/(i.length-1),h=h-r,p=0==h?n:n/h,o=n+r*p,h=[0,o],d=0;d<i.length;d++)h.push(d*l,n-p*(i[d]-r)+t.strokeWidth/2)
h.push(a,o),i=s("polygon",{fill:t.fill,points:h.join(" ")}),this.svg.appendChild(i),t.strokeWidth&&(t=s("polyline",{fill:"transparent",points:h.slice(2,h.length-2).join(" "),stroke:t.stroke,"stroke-width":t.strokeWidth,"stroke-linecap":"square"}),this.svg.appendChild(t))}),n.register("bar",{delimiter:",",fill:["#4D89F9"],gap:1,height:16,max:null,min:0,width:32},function(t){for(var i=this.values(),h=e.max.apply(e,i.concat([t.max])),n=e.min.apply(e,i.concat([t.min])),a=this.prepare(t.width,t.height),l=a.width(),a=a.height(),p=h-n,o=0==p?0:a/p,t=t.gap,l=(l+t)/i.length,d=this.fill(),c=0;c<i.length;c++){var f=i[c],u=a-o*(f-n),g=o*f
0==g?(g=r,(0>=n&&0<h||0==p)&&(u-=r)):0>g&&(u+=g,g=-g),f=s("rect",{fill:d.call(this,f,c,i),x:c*l,y:u,width:l-t,height:g}),this.svg.appendChild(f)}})})(jQuery,document,Math)
