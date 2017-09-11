!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof exports?require("jquery"):jQuery)}(function(t){"use strict"
var i=t(window),e=t(document),h=window.location,a=!0,s=!1,r=null,n="undefined",o="directive",d=".cropper",g=/^(e|n|w|s|ne|nw|sw|se|all|crop|move|zoom)$/,l=/^(x|y|width|height)$/,c=/^(naturalWidth|naturalHeight|width|height|aspectRatio|ratio|rotate)$/,p="cropper-modal",f="cropper-hidden",m="cropper-invisible",u="cropper-crop",w="cropper-disabled",v="mousedown touchstart",x="mousemove touchmove",b="mouseup mouseleave touchend touchleave touchcancel",y="wheel mousewheel DOMMouseScroll",$="resize"+d,D="dblclick",W="build"+d,H="built"+d,C="dragstart"+d,k="dragmove"+d,R="dragend"+d,z=function(t){return"number"==typeof t},L=function(i,e){this.element=i,this.$element=t(i),this.defaults=t.extend({},L.DEFAULTS,t.isPlainObject(e)?e:{}),this.$original=r,this.ready=s,this.built=s,this.cropped=s,this.rotated=s,this.disabled=s,this.replaced=s,this.init()},Y=Math.round,X=Math.sqrt,_=Math.min,T=Math.max,I=Math.abs,M=Math.sin,E=Math.cos,P=parseFloat
L.prototype={constructor:L,support:{canvas:t.isFunction(t("<canvas>")[0].getContext)},init:function(){var i=this.defaults
t.each(i,function(t,e){switch(t){case"aspectRatio":i[t]=I(P(e))||NaN
break
case"autoCropArea":i[t]=I(P(e))||.8
break
case"minWidth":case"minHeight":i[t]=I(P(e))||0
break
case"maxWidth":case"maxHeight":i[t]=I(P(e))||1/0}}),this.image={rotate:0},this.load()},load:function(){var i,e,h=this,s=this.$element,r=this.element,n=this.image,o=""
s.is("img")?e=s.prop("src"):s.is("canvas")&&this.support.canvas&&(e=r.toDataURL()),e&&(this.replaced&&(n.rotate=0),this.defaults.checkImageOrigin&&(s.prop("crossOrigin")||this.isCrossOriginURL(e))&&(o=" crossOrigin"),this.$clone=i=t("<img"+o+' src="'+e+'">'),i.one("load",function(){n.naturalWidth=this.naturalWidth||i.width(),n.naturalHeight=this.naturalHeight||i.height(),n.aspectRatio=n.naturalWidth/n.naturalHeight,h.url=e,h.ready=a,h.build()}),i.addClass(m).prependTo("body"))},isCrossOriginURL:function(t){var i=t.match(/^(https?:)\/\/([^\:\/\?#]+):?(\d*)/i)
return!i||i[1]===h.protocol&&i[2]===h.hostname&&i[3]===h.port?s:a},build:function(){var i,h,s=this.$element,r=this.defaults
this.ready&&(this.built&&this.unbuild(),s.one(W,r.build),i=t.Event(W),s.trigger(i),i.isDefaultPrevented()||(this.$cropper=h=t(L.TEMPLATE),s.addClass(f),this.$clone.removeClass(m).prependTo(h),this.rotated||(this.$original=this.$clone.clone(),this.$original.addClass(f).prependTo(this.$cropper),this.originalImage=t.extend({},this.image)),this.$container=s.parent(),this.$container.append(h),this.$canvas=h.find(".cropper-canvas"),this.$dragger=h.find(".cropper-dragger"),this.$viewer=h.find(".cropper-viewer"),r.autoCrop?this.cropped=a:this.$dragger.addClass(f),r.dragCrop&&this.setDragMode("crop"),r.modal&&this.$canvas.addClass(p),!r.dashed&&this.$dragger.find(".cropper-dashed").addClass(f),!r.movable&&this.$dragger.find(".cropper-face").data(o,"move"),!r.resizable&&this.$dragger.find(".cropper-line, .cropper-point").addClass(f),this.$scope=r.multiple?this.$cropper:e,this.addListeners(),this.initPreview(),this.built=a,this.update(),s.one(H,r.built),s.trigger(H)))},unbuild:function(){this.built&&(this.built=s,this.removeListeners(),this.$preview.empty(),this.$preview=r,this.$dragger=r,this.$canvas=r,this.$container=r,this.$cropper.remove(),this.$cropper=r)},update:function(t){this.initContainer(),this.initCropper(),this.initImage(),this.initDragger(),t?(this.setData(t,a),this.setDragMode("crop")):this.setData(this.defaults.data)},resize:function(){clearTimeout(this.resizing),this.resizing=setTimeout(t.proxy(this.update,this,this.getData()),200)},preview:function(){var i=this.image,e=this.dragger,h=i.width,a=i.height,s=e.left-i.left,r=e.top-i.top
this.$viewer.find("img").css({width:Y(h),height:Y(a),marginLeft:-Y(s),marginTop:-Y(r)}),this.$preview.each(function(){var i=t(this),n=i.width()/e.width
i.find("img").css({width:Y(h*n),height:Y(a*n),marginLeft:-Y(s*n),marginTop:-Y(r*n)})})},addListeners:function(){var e=this.defaults
this.$element.on(C,e.dragstart).on(k,e.dragmove).on(R,e.dragend),this.$cropper.on(v,this._dragstart=t.proxy(this.dragstart,this)).on(D,this._dblclick=t.proxy(this.dblclick,this)),e.zoomable&&this.$cropper.on(y,this._wheel=t.proxy(this.wheel,this)),this.$scope.on(x,this._dragmove=t.proxy(this.dragmove,this)).on(b,this._dragend=t.proxy(this.dragend,this)),i.on($,this._resize=t.proxy(this.resize,this))},removeListeners:function(){var t=this.defaults
this.$element.off(C,t.dragstart).off(k,t.dragmove).off(R,t.dragend),this.$cropper.off(v,this._dragstart).off(D,this._dblclick),t.zoomable&&this.$cropper.off(y,this._wheel),this.$scope.off(x,this._dragmove).off(b,this._dragend),i.off($,this._resize)},initPreview:function(){var i='<img src="'+this.url+'">'
this.$preview=t(this.defaults.preview),this.$viewer.html(i),this.$preview.html(i).find("img").css("cssText","min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;")},initContainer:function(){var t=this.$container
this.container={width:T(t.width(),300),height:T(t.height(),150)}},initCropper:function(){var t,i=this.container,e=this.image
e.naturalWidth*i.height/e.naturalHeight-i.width>=0?(t={width:i.width,height:i.width/e.aspectRatio,left:0},t.top=(i.height-t.height)/2):(t={width:i.height*e.aspectRatio,height:i.height,top:0},t.left=(i.width-t.width)/2),this.$cropper.css({width:Y(t.width),height:Y(t.height),left:Y(t.left),top:Y(t.top)}),this.cropper=t},initImage:function(){var i=this.image,e=this.cropper,h={_width:e.width,_height:e.height,width:e.width,height:e.height,left:0,top:0,ratio:e.width/i.naturalWidth}
this.defaultImage=t.extend({},i,h),i._width!==e.width||i._height!==e.height?t.extend(i,h):(i=t.extend({},h,i),this.replaced&&(this.replaced=s,i.ratio=h.ratio)),this.image=i,this.renderImage()},renderImage:function(t){var i=this.image
"zoom"===t&&(i.left-=(i.width-i.oldWidth)/2,i.top-=(i.height-i.oldHeight)/2),i.left=_(T(i.left,i._width-i.width),0),i.top=_(T(i.top,i._height-i.height),0),this.$clone.css({width:Y(i.width),height:Y(i.height),marginLeft:Y(i.left),marginTop:Y(i.top)}),t&&(this.defaults.done(this.getData()),this.preview())},initDragger:function(){var i,e=this.defaults,h=this.cropper,a=e.aspectRatio||this.image.aspectRatio,s=this.image.ratio
i=h.height*a-h.width>=0?{height:h.width/a,width:h.width,left:0,top:(h.height-h.width/a)/2,maxWidth:h.width,maxHeight:h.width/a}:{height:h.height,width:h.height*a,left:(h.width-h.height*a)/2,top:0,maxWidth:h.height*a,maxHeight:h.height},i.minWidth=0,i.minHeight=0,e.aspectRatio?(isFinite(e.maxWidth)?(i.maxWidth=_(i.maxWidth,e.maxWidth*s),i.maxHeight=i.maxWidth/a):isFinite(e.maxHeight)&&(i.maxHeight=_(i.maxHeight,e.maxHeight*s),i.maxWidth=i.maxHeight*a),e.minWidth>0?(i.minWidth=T(0,e.minWidth*s),i.minHeight=i.minWidth/a):e.minHeight>0&&(i.minHeight=T(0,e.minHeight*s),i.minWidth=i.minHeight*a)):(i.maxWidth=_(i.maxWidth,e.maxWidth*s),i.maxHeight=_(i.maxHeight,e.maxHeight*s),i.minWidth=T(0,e.minWidth*s),i.minHeight=T(0,e.minHeight*s)),i.minWidth=_(i.maxWidth,i.minWidth),i.minHeight=_(i.maxHeight,i.minHeight),i.height*=e.autoCropArea,i.width*=e.autoCropArea,i.left=(h.width-i.width)/2,i.top=(h.height-i.height)/2,i.oldLeft=i.left,i.oldTop=i.top,this.defaultDragger=i,this.dragger=t.extend({},i)},renderDragger:function(){var t=this.dragger,i=this.cropper
t.width>t.maxWidth?(t.width=t.maxWidth,t.left=t.oldLeft):t.width<t.minWidth&&(t.width=t.minWidth,t.left=t.oldLeft),t.height>t.maxHeight?(t.height=t.maxHeight,t.top=t.oldTop):t.height<t.minHeight&&(t.height=t.minHeight,t.top=t.oldTop),t.left=_(T(t.left,0),i.width-t.width),t.top=_(T(t.top,0),i.height-t.height),t.oldLeft=t.left,t.oldTop=t.top,this.dragger=t,this.disabled||this.defaults.done(this.getData()),this.$dragger.css({width:Y(t.width),height:Y(t.height),left:Y(t.left),top:Y(t.top)}),this.preview()},reset:function(i){this.cropped&&(i&&(this.defaults.data={}),this.image=t.extend({},this.defaultImage),this.renderImage(),this.dragger=t.extend({},this.defaultDragger),this.setData(this.defaults.data))},clear:function(){this.cropped&&(this.cropped=s,this.setData({x:0,y:0,width:0,height:0}),this.$canvas.removeClass(p),this.$dragger.addClass(f))},destroy:function(){var t=this.$element
this.ready&&(this.unbuild(),t.removeClass(f).removeData("cropper"),this.rotated&&t.attr("src",this.$original.attr("src")))},replace:function(i,e){var h,r=this,n=this.$element,o=this.element
i&&i!==this.url&&i!==n.attr("src")&&(e||(this.rotated=s,this.replaced=a),n.is("img")?(n.attr("src",i),this.load()):n.is("canvas")&&this.support.canvas&&(h=o.getContext("2d"),t('<img src="'+i+'">').one("load",function(){o.width=this.width,o.height=this.height,h.clearRect(0,0,o.width,o.height),h.drawImage(this,0,0),r.load()})))},setData:function(i,e){var h=this.cropper,a=this.dragger,s=this.image,o=this.defaults.aspectRatio
this.built&&typeof i!==n&&((i===r||t.isEmptyObject(i))&&(a=t.extend({},this.defaultDragger)),t.isPlainObject(i)&&!t.isEmptyObject(i)&&(e||(this.defaults.data=i),i=this.transformData(i),z(i.x)&&i.x<=h.width-s.left&&(a.left=i.x+s.left),z(i.y)&&i.y<=h.height-s.top&&(a.top=i.y+s.top),o?z(i.width)&&i.width<=a.maxWidth&&i.width>=a.minWidth?(a.width=i.width,a.height=a.width/o):z(i.height)&&i.height<=a.maxHeight&&i.height>=a.minHeight&&(a.height=i.height,a.width=a.height*o):(z(i.width)&&i.width<=a.maxWidth&&i.width>=a.minWidth&&(a.width=i.width),z(i.height)&&i.height<=a.maxHeight&&i.height>=a.minHeight&&(a.height=i.height))),this.dragger=a,this.renderDragger())},getData:function(t){var i=this.dragger,e=this.image,h={}
return this.built&&(h={x:i.left-e.left,y:i.top-e.top,width:i.width,height:i.height},h=this.transformData(h,a,t)),h},transformData:function(i,e,h){var a=this.image.ratio,s={}
return t.each(i,function(t,i){i=P(i),l.test(t)&&!isNaN(i)&&(s[t]=e?h?Y(i/a):i/a:i*a)}),s},setAspectRatio:function(t){var i="auto"===t
t=P(t),(i||!isNaN(t)&&t>0)&&(this.defaults.aspectRatio=i?NaN:t,this.built&&(this.initDragger(),this.renderDragger()))},getImageData:function(){var i={}
return this.ready&&t.each(this.image,function(t,e){c.test(t)&&(i[t]=e)}),i},getDataURL:function(i,e,h){var a,s=t("<canvas>")[0],r=this.getData(),n=""
return t.isPlainObject(i)||(h=e,e=i,i={}),i=t.extend({width:r.width,height:r.height},i),this.cropped&&this.support.canvas&&(s.width=i.width,s.height=i.height,a=s.getContext("2d"),"image/jpeg"===e&&(a.fillStyle="#fff",a.fillRect(0,0,i.width,i.height)),a.drawImage(this.$clone[0],r.x,r.y,r.width,r.height,0,0,i.width,i.height),n=s.toDataURL(e,h)),n},setDragMode:function(t){var i=this.$canvas,e=this.defaults,h=s,r=s
if(this.built&&!this.disabled){switch(t){case"crop":e.dragCrop&&(h=a,i.data(o,t))
break
case"move":r=a,i.data(o,t)
break
default:i.removeData(o)}i.toggleClass(u,h).toggleClass("cropper-move",r)}},enable:function(){this.built&&(this.disabled=s,this.$cropper.removeClass(w))},disable:function(){this.built&&(this.disabled=a,this.$cropper.addClass(w))},rotate:function(t){var i=this.image
t=P(t)||0,this.built&&0!==t&&!this.disabled&&this.defaults.rotatable&&this.support.canvas&&(this.rotated=a,t=i.rotate=(i.rotate+t)%360,this.replace(this.getRotatedDataURL(t),!0))},getRotatedDataURL:function(i){var e=t("<canvas>")[0],h=e.getContext("2d"),a=i*Math.PI/180,s=I(i)%180,r=s>90?180-s:s,n=r*Math.PI/180,o=this.originalImage,d=o.naturalWidth,g=o.naturalHeight,l=I(d*E(n)+g*M(n)),c=I(d*M(n)+g*E(n))
return e.width=l,e.height=c,h.save(),h.translate(l/2,c/2),h.rotate(a),h.drawImage(this.$original[0],-d/2,-g/2,d,g),h.restore(),e.toDataURL()},zoom:function(t){var i,e,h,a=this.image
t=P(t),this.built&&t&&!this.disabled&&this.defaults.zoomable&&(i=a.width*(1+t),e=a.height*(1+t),(h=i/a._width)>10||(1>h&&(i=a._width,e=a._height),this.setDragMode(1>=h?"crop":"move"),a.oldWidth=a.width,a.oldHeight=a.height,a.width=i,a.height=e,a.ratio=a.width/a.naturalWidth,this.renderImage("zoom")))},dblclick:function(){this.disabled||this.setDragMode(this.$canvas.hasClass(u)?"move":"crop")},wheel:function(t){var i,e=t.originalEvent,h=117.25
this.disabled||(t.preventDefault(),e.deltaY?(i=e.deltaY,i=i%5==0?i/5:i%h==0?i/h:i/166.66665649414062):i=e.wheelDelta?-e.wheelDelta/120:e.detail?e.detail/3:0,this.zoom(.1*i))},dragstart:function(i){var e,h,r,n=i.originalEvent.touches,d=i
if(!this.disabled){if(n){if((r=n.length)>1){if(!this.defaults.zoomable||2!==r)return
d=n[1],this.startX2=d.pageX,this.startY2=d.pageY,e="zoom"}d=n[0]}if(e=e||t(d.target).data(o),g.test(e)){if(i.preventDefault(),h=t.Event(C),this.$element.trigger(h),h.isDefaultPrevented())return
this.directive=e,this.cropping=s,this.startX=d.pageX,this.startY=d.pageY,"crop"===e&&(this.cropping=a,this.$canvas.addClass(p))}}},dragmove:function(i){var e,h,a=i.originalEvent.touches,s=i
if(!this.disabled){if(a){if((h=a.length)>1){if(!this.defaults.zoomable||2!==h)return
s=a[1],this.endX2=s.pageX,this.endY2=s.pageY}s=a[0]}if(this.directive){if(i.preventDefault(),e=t.Event(k),this.$element.trigger(e),e.isDefaultPrevented())return
this.endX=s.pageX,this.endY=s.pageY,this.dragging()}}},dragend:function(i){var e
if(!this.disabled&&this.directive){if(i.preventDefault(),e=t.Event(R),this.$element.trigger(e),e.isDefaultPrevented())return
this.cropping&&(this.cropping=s,this.$canvas.toggleClass(p,this.cropped&&this.defaults.modal)),this.directive=""}},dragging:function(){var t,i=this.directive,e=this.image,h=this.cropper,r=h.width,n=h.height,o=this.dragger,d=o.width,g=o.height,l=o.left,c=o.top,p=l+d,m=c+g,u=a,w=this.defaults,v=w.aspectRatio,x={x:this.endX-this.startX,y:this.endY-this.startY}
switch(v&&(x.X=x.y*v,x.Y=x.x/v),i){case"all":l+=x.x,c+=x.y
break
case"e":if(x.x>=0&&(p>=r||v&&(0>=c||m>=n))){u=s
break}d+=x.x,v&&(g=d/v,c-=x.Y/2),0>d&&(i="w",d=0)
break
case"n":if(x.y<=0&&(0>=c||v&&(0>=l||p>=r))){u=s
break}g-=x.y,c+=x.y,v&&(d=g*v,l+=x.X/2),0>g&&(i="s",g=0)
break
case"w":if(x.x<=0&&(0>=l||v&&(0>=c||m>=n))){u=s
break}d-=x.x,l+=x.x,v&&(g=d/v,c+=x.Y/2),0>d&&(i="e",d=0)
break
case"s":if(x.y>=0&&(m>=n||v&&(0>=l||p>=r))){u=s
break}g+=x.y,v&&(d=g*v,l-=x.X/2),0>g&&(i="n",g=0)
break
case"ne":if(v){if(x.y<=0&&(0>=c||p>=r)){u=s
break}g-=x.y,c+=x.y,d=g*v}else x.x>=0?r>p?d+=x.x:x.y<=0&&0>=c&&(u=s):d+=x.x,x.y<=0?c>0&&(g-=x.y,c+=x.y):(g-=x.y,c+=x.y)
0>g&&(i="sw",g=0,d=0)
break
case"nw":if(v){if(x.y<=0&&(0>=c||0>=l)){u=s
break}g-=x.y,c+=x.y,d=g*v,l+=x.X}else x.x<=0?l>0?(d-=x.x,l+=x.x):x.y<=0&&0>=c&&(u=s):(d-=x.x,l+=x.x),x.y<=0?c>0&&(g-=x.y,c+=x.y):(g-=x.y,c+=x.y)
0>g&&(i="se",g=0,d=0)
break
case"sw":if(v){if(x.x<=0&&(0>=l||m>=n)){u=s
break}d-=x.x,l+=x.x,g=d/v}else x.x<=0?l>0?(d-=x.x,l+=x.x):x.y>=0&&m>=n&&(u=s):(d-=x.x,l+=x.x),x.y>=0?n>m&&(g+=x.y):g+=x.y
0>d&&(i="ne",g=0,d=0)
break
case"se":if(v){if(x.x>=0&&(p>=r||m>=n)){u=s
break}d+=x.x,g=d/v}else x.x>=0?r>p?d+=x.x:x.y>=0&&m>=n&&(u=s):d+=x.x,x.y>=0?n>m&&(g+=x.y):g+=x.y
0>d&&(i="nw",g=0,d=0)
break
case"move":e.left+=x.x,e.top+=x.y,this.renderImage("move"),u=s
break
case"zoom":w.zoomable&&(this.zoom(function(t,i,e,h,a,s){return(X(a*a+s*s)-X(e*e+h*h))/X(t*t+i*i)}(e.width,e.height,I(this.startX-this.startX2),I(this.startY-this.startY2),I(this.endX-this.endX2),I(this.endY-this.endY2))),this.endX2=this.startX2,this.endY2=this.startY2)
break
case"crop":x.x&&x.y&&(t=this.$cropper.offset(),l=this.startX-t.left,c=this.startY-t.top,d=o.minWidth,g=o.minHeight,x.x>0?x.y>0?i="se":(i="ne",c-=g):x.y>0?(i="sw",l-=d):(i="nw",l-=d,c-=g),this.cropped||(this.cropped=a,this.$dragger.removeClass(f)))}u&&(o.width=d,o.height=g,o.left=l,o.top=c,this.directive=i,this.renderDragger()),this.startX=this.endX,this.startY=this.endY}},L.TEMPLATE=function(t,i){return i=i.split(","),t.replace(/\d+/g,function(t){return i[t]})}('<0 6="5-container"><0 6="5-canvas"></0><0 6="5-dragger"><1 6="5-viewer"></1><1 6="5-8 8-h"></1><1 6="5-8 8-v"></1><1 6="5-face" 3-2="all"></1><1 6="5-7 7-e" 3-2="e"></1><1 6="5-7 7-n" 3-2="n"></1><1 6="5-7 7-w" 3-2="w"></1><1 6="5-7 7-s" 3-2="s"></1><1 6="5-4 4-e" 3-2="e"></1><1 6="5-4 4-n" 3-2="n"></1><1 6="5-4 4-w" 3-2="w"></1><1 6="5-4 4-s" 3-2="s"></1><1 6="5-4 4-ne" 3-2="ne"></1><1 6="5-4 4-nw" 3-2="nw"></1><1 6="5-4 4-sw" 3-2="sw"></1><1 6="5-4 4-se" 3-2="se"></1></0></0>',"div,span,directive,data,point,cropper,class,line,dashed"),L.DEFAULTS={aspectRatio:"auto",autoCropArea:.8,data:{},done:t.noop,preview:"",multiple:s,autoCrop:a,dragCrop:a,dashed:a,modal:a,movable:a,resizable:a,zoomable:a,rotatable:a,checkImageOrigin:a,minWidth:0,minHeight:0,maxWidth:1/0,maxHeight:1/0,build:r,built:r,dragstart:r,dragmove:r,dragend:r},L.setDefaults=function(i){t.extend(L.DEFAULTS,i)},L.other=t.fn.cropper,t.fn.cropper=function(i){var e,h=[].slice.call(arguments,1)
return this.each(function(){var a,s=t(this),r=s.data("cropper")
r||s.data("cropper",r=new L(this,i)),"string"==typeof i&&t.isFunction(a=r[i])&&(e=a.apply(r,h))}),typeof e!==n?e:this},t.fn.cropper.Constructor=L,t.fn.cropper.setDefaults=L.setDefaults,t.fn.cropper.noConflict=function(){return t.fn.cropper=L.other,this}})
