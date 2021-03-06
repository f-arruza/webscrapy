(function(){var t
t=jQuery,t.fn.extend({prettyTextDiff:function(e){var n,i
return i={originalContainer:".original",changedContainer:".changed",diffContainer:".diff",cleanup:!0,debug:!1},i=t.extend(i,e),t.fn.prettyTextDiff.debug("Options: ",i,i),n=new diff_match_patch,this.each(function(){var e,f,r,a
return i.originalContent&&i.changedContent?(a=t("<div />").html(i.originalContent).text(),e=t("<div />").html(i.changedContent).text()):(a=t(i.originalContainer,this).text(),e=t(i.changedContainer,this).text()),t.fn.prettyTextDiff.debug("Original text found: ",a,i),t.fn.prettyTextDiff.debug("Changed  text found: ",e,i),r=n.diff_main(a,e),i.cleanup&&n.diff_cleanupSemantic(r),t.fn.prettyTextDiff.debug("Diffs: ",r,i),f=t.map(r,function(e){return t.fn.prettyTextDiff.createHTML(e)}),t(i.diffContainer,this).html(f.join("")),this})}}),t.fn.prettyTextDiff.debug=function(t,e,n){if(n.debug)return console.log(t,e)},t.fn.prettyTextDiff.createHTML=function(t){var e,n,i,f,r,a,c
switch([],i=/&/g,r=/</g,f=/>/g,a=/\n/g,n=t[0],e=t[1],c=e.replace(i,"&amp;").replace(r,"&lt;").replace(f,"&gt;").replace(a,"<br>"),n){case DIFF_INSERT:return"<ins>"+c+"</ins>"
case DIFF_DELETE:return"<del>"+c+"</del>"
case DIFF_EQUAL:return"<span>"+c+"</span>"}}}).call(this)
