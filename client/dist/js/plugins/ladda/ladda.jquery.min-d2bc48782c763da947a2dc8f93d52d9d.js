(function(a,t){if(void 0===t)return console.error("jQuery required for Ladda.jQuery")
var d=[]
t=t.extend(t,{ladda:function(t){"stopAll"===t&&a.stopAll()}}),t.fn=t.extend(t.fn,{ladda:function(e){var i=d.slice.call(arguments,1)
return"bind"===e?(i.unshift(t(this).selector),a.bind.apply(a,i)):t(this).each(function(){var d,n=t(this)
void 0===e?n.data("ladda",a.create(this)):(d=n.data("ladda"),d[e].apply(d,i))}),this}})})(this.Ladda,this.jQuery)
