$(function(){var t=$("iframe[src^='http://player.vimeo.com'], iframe[src^='http://www.youtube.com'], object, embed"),e=$("figure")
t.each(function(){$(this).attr("data-aspectRatio",this.height/this.width).removeAttr("height").removeAttr("width")}),$(window).resize(function(){var i=e.width()
t.each(function(){var t=$(this)
t.width(i).height(i*t.attr("data-aspectRatio"))})}).resize()})
