(function(){var e={},t=null,n=null,i=null,o=null,r={},a=window.devicePixelRatio||1,l=16*a,c={width:7,height:9,font:10*a+"px arial",colour:"#ffffff",background:"#F03D25",fallback:!0,crossOrigin:!0,abbreviate:!0},u=function(){var e=navigator.userAgent.toLowerCase()
return function(t){return-1!==e.indexOf(t)}}(),f={ie:u("msie"),chrome:u("chrome"),webkit:u("chrome")||u("safari"),safari:u("safari")&&!u("chrome"),mozilla:u("mozilla")&&!u("chrome")&&!u("safari")},m=function(){for(var e=document.getElementsByTagName("link"),t=0,n=e.length;t<n;t++)if((e[t].getAttribute("rel")||"").match(/\bicon\b/))return e[t]
return!1},d=function(){for(var e=document.getElementsByTagName("link"),t=document.getElementsByTagName("head")[0],n=0,i=e.length;n<i;n++){void 0!==e[n]&&(e[n].getAttribute("rel")||"").match(/\bicon\b/)&&t.removeChild(e[n])}},g=function(){if(!n||!t){var e=m()
n=t=e?e.getAttribute("href"):"/favicon.ico"}return t},h=function(){return o||(o=document.createElement("canvas"),o.width=l,o.height=l),o},s=function(e){d()
var t=document.createElement("link")
t.type="image/x-icon",t.rel="icon",t.href=e,document.getElementsByTagName("head")[0].appendChild(t)},b=function(e,t){if(!h().getContext||f.ie||f.safari||"force"===r.fallback)return v(e)
var n=h().getContext("2d"),t=t||"#000000",o=g()
i=document.createElement("img"),i.onload=function(){n.clearRect(0,0,l,l),n.drawImage(i,0,0,i.width,i.height,0,0,l,l),(e+"").length>0&&k(n,e,t),T()},!o.match(/^data/)&&r.crossOrigin&&(i.crossOrigin="anonymous"),i.src=o},v=function(e){if(r.fallback){var t=document.title
"("===t[0]&&(t=t.slice(t.indexOf(" "))),document.title=(e+"").length>0?"("+e+") "+t:t}},k=function(e,t,n){"number"==typeof t&&t>99&&r.abbreviate&&(t=w(t))
var i=(t+"").length-1,o=r.width*a+6*a*i,c=r.height*a,u=l-c,m=l-o-a,d=16*a,g=16*a,h=2*a
e.font=(f.webkit?"bold ":"")+r.font,e.fillStyle=r.background,e.strokeStyle=r.background,e.lineWidth=a,e.beginPath(),e.moveTo(m+h,u),e.quadraticCurveTo(m,u,m,u+h),e.lineTo(m,d-h),e.quadraticCurveTo(m,d,m+h,d),e.lineTo(g-h,d),e.quadraticCurveTo(g,d,g,d-h),e.lineTo(g,u+h),e.quadraticCurveTo(g,u,g-h,u),e.closePath(),e.fill(),e.beginPath(),e.strokeStyle="rgba(0,0,0,0.3)",e.moveTo(m+h/2,d),e.lineTo(g-h/2,d),e.stroke(),e.fillStyle=r.colour,e.textAlign="right",e.textBaseline="top",e.fillText(t,2===a?29:15,f.mozilla?7*a:6*a)},T=function(){h().getContext&&s(h().toDataURL())},w=function(e){for(var t=[["G",1e9],["M",1e6],["k",1e3]],n=0;n<t.length;++n)if(e>=t[n][1]){e=y(e/t[n][1])+t[n][0]
break}return e},y=function(e,t){return new Number(e).toFixed(t)}
e.setOptions=function(e){r={}
for(var t in c)r[t]=e.hasOwnProperty(t)?e[t]:c[t]
return this},e.setImage=function(e){return t=e,T(),this},e.setBubble=function(e,t){return e=e||"",b(e,t),this},e.reset=function(){s(n)},e.setOptions(c),window.Tinycon=e,"function"==typeof define&&define.amd&&define(e)})()
