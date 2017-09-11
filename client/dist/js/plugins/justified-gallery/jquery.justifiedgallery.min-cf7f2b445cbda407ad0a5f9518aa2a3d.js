(function(e){e.fn.justifiedGallery=function(t){function i(e,t){return'<div class="jg-error '+t+'"style="">'+e+"</div>"}function n(t,i,n){e(t).find(".jg-loading").fadeOut(500,function(){e(this).remove(),r(e,t,i,0,n),e.isFunction(n.onComplete)&&n.onComplete.call(this,t)})}function a(e,t,i,n){var a,r,l=0
for(a=0;a<e.length;a++){e[a].nh=Math.ceil(t[e[a].indx].height*((t[e[a].indx].width+i)/t[e[a].indx].width)),e[a].nw=t[e[a].indx].width+i
var s=e[a],g=e[a].nw,f=e[a].nh,d=void 0,d=g>f?g:f
s.suffix=100>=d?n.sizeRangeSuffixes.lt100:240>=d?n.sizeRangeSuffixes.lt240:320>=d?n.sizeRangeSuffixes.lt320:500>=d?n.sizeRangeSuffixes.lt500:640>=d?n.sizeRangeSuffixes.lt640:n.sizeRangeSuffixes.lt1024,e[a].l=l,n.fixedHeight||(0==a?r=e[a].nh:r>e[a].nh&&(r=e[a].nh)),l+=e[a].nw+n.margins}for(n.fixedHeight&&(r=n.rowHeight),i="",a=0;a<e.length;a++)l=t[e[a].indx],s=e[a].nh,g=void 0,g='<div class="jg-image" style="left:'+e[a].l+'px">',g+=' <a href="'+l.href+'" ',void 0!==l.rel&&(g+='rel="'+l.rel+'"'),void 0!==l.target&&(g+='target="'+l.target+'"'),g+='title="'+l.title+'">',g+='  <img alt="'+l.alt+'" src="'+l.src+e[a].suffix+l.extension+'"',g+='style="width: '+e[a].nw+"px; height: "+s+'px;">',n.captions&&(g+='  <div style="bottom:'+(s-r)+'px;" class="jg-image-label">'+l.alt+"</div>"),g+=" </a></div>",i+=g
return'<div class="jg-row" style="height: '+r+"px; margin-bottom:"+n.margins+'px;">'+i+"</div>"}function r(e,t,n,l,s){var g,f,l=[],d=0,o=e(t).width()
for(g=f=0;f<n.length;f++)null!=n[f]&&(d+n[f].width+s.margins<=o?(d+=n[f].width+s.margins,l[g]=Array(5),l[g].indx=f,g++):(g=Math.ceil((o-d+1)/l.length),e(t).append(a(l,n,g,s)),l=[],l[0]=Array(5),l[0].indx=f,g=1,d=n[f].width+s.margins))
g=s.justifyLastRow?Math.ceil((o-d+1)/l.length):0,e(t).append(a(l,n,g,s)),s.captions&&(e(t).find(".jg-image").mouseenter(function(t){e(t.currentTarget).find(".jg-image-label").stop(),e(t.currentTarget).find(".jg-image-label").fadeTo(500,.7)}),e(t).find(".jg-image").mouseleave(function(t){e(t.currentTarget).find(".jg-image-label").stop(),e(t.currentTarget).find(".jg-image-label").fadeTo(500,0)})),e(t).find(".jg-resizedImageNotFound").remove(),e(t).find(".jg-image img").load(function(){e(this).fadeTo(500,1)}).error(function(){e(t).prepend(i("The image can't be loaded: \""+e(this).attr("src")+'"',"jg-resizedImageNotFound"))}).each(function(){this.complete&&e(this).load()})
var h=setInterval(function(){o!=e(t).width()&&(e(t).find(".jg-row").remove(),clearInterval(h),r(e,t,n,o,s))},s.refreshTime)}var l=e.extend({sizeRangeSuffixes:{lt100:"_t",lt240:"_m",lt320:"_n",lt500:"",lt640:"_z",lt1024:"_b"},rowHeight:120,margins:1,justifyLastRow:!0,fixedHeight:!1,captions:!0,rel:null,target:null,extension:/\.[^.]+$/,refreshTime:500,onComplete:null},t)
return this.each(function(t,a){e(a).addClass("justifiedGallery")
var r=0,s=Array(e(a).find("img").length)
0!=s.length&&(e(a).append('<div class="jg-loading"><div class="jg-loading-img"></div></div>'),e(a).find("a").each(function(t,g){var f=e(g).find("img")
s[t]=Array(5),s[t].src=void 0!==e(f).data("safe-src")?e(f).data("safe-src"):e(f).attr("src"),s[t].alt=e(f).attr("alt"),s[t].href=e(g).attr("href"),s[t].title=e(g).attr("title"),s[t].rel=null!=l.rel?l.rel:e(g).attr("rel"),s[t].target=null!=l.target?l.target:e(g).attr("target"),s[t].extension=s[t].src.match(l.extension)[0],e(g).remove(),f=new Image,e(f).load(function(){s[t].width=s[t].height!=l.rowHeight?Math.ceil(this.width/(this.height/l.rowHeight)):this.width,s[t].height=l.rowHeight
var e=RegExp("("+l.sizeRangeSuffixes.lt100+"|"+l.sizeRangeSuffixes.lt240+"|"+l.sizeRangeSuffixes.lt320+"|"+l.sizeRangeSuffixes.lt500+"|"+l.sizeRangeSuffixes.lt640+"|"+l.sizeRangeSuffixes.lt1024+")$")
s[t].src=s[t].src.replace(l.extension,"").replace(e,""),++r==s.length&&n(a,s,l)}),e(f).error(function(){e(a).prepend(i("The image can't be loaded: \""+s[t].src+'"',"jg-usedPrefixImageNotFound")),s[t]=null,++r==s.length&&n(a,s,l)}),e(f).attr("src",s[t].src)}))})}})(jQuery)
