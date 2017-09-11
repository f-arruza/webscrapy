(function(t,e){function a(){var t=this
t.id=null,t.busy=!1,t.start=function(e,a){t.busy||(t.stop(),t.id=setTimeout(function(){e(),t.id=null,t.busy=!1},a),t.busy=!0)},t.stop=function(){null!==t.id&&(clearTimeout(t.id),t.id=null,t.busy=!1)}}function i(i,o,n){var r=this
r.id=n,r.table=i,r.options=o,r.breakpoints=[],r.breakpointNames="",r.columns={},r.plugins=e.footable.plugins.load(r)
var l=r.options,s=l.classes,d=l.events,f=l.triggers,p=0
return r.timers={resize:new a,register:function(t){return r.timers[t]=new a,r.timers[t]}},r.init=function(){var a=t(e),i=t(r.table)
if(e.footable.plugins.init(r),i.hasClass(s.loaded))return void r.raise(d.alreadyInitialized)
r.raise(d.initializing),i.addClass(s.loading),i.find(l.columnDataSelector).each(function(){var t=r.getColumnData(this)
r.columns[t.index]=t})
for(var o in l.breakpoints)r.breakpoints.push({name:o,width:l.breakpoints[o]}),r.breakpointNames+=o+" "
r.breakpoints.sort(function(t,e){return t.width-e.width}),i.unbind(f.initialize).bind(f.initialize,function(){i.removeData("footable_info"),i.data("breakpoint",""),i.trigger(f.resize),i.removeClass(s.loading),i.addClass(s.loaded).addClass(s.main),r.raise(d.initialized)}).unbind(f.redraw).bind(f.redraw,function(){r.redraw()}).unbind(f.resize).bind(f.resize,function(){r.resize()}).unbind(f.expandFirstRow).bind(f.expandFirstRow,function(){i.find(l.toggleSelector).first().not("."+s.detailShow).trigger(f.toggleRow)}).unbind(f.expandAll).bind(f.expandAll,function(){i.find(l.toggleSelector).not("."+s.detailShow).trigger(f.toggleRow)}).unbind(f.collapseAll).bind(f.collapseAll,function(){i.find("."+s.detailShow).trigger(f.toggleRow)}),i.trigger(f.initialize),a.bind("resize.footable",function(){r.timers.resize.stop(),r.timers.resize.start(function(){r.raise(f.resize)},l.delay)})},r.addRowToggle=function(){if(l.addRowToggle){var e=t(r.table),a=!1
e.find("span."+s.toggle).remove()
for(var i in r.columns){var o=r.columns[i]
if(o.toggle){a=!0
var n="> tbody > tr:not(."+s.detail+",."+s.disabled+") > td:nth-child("+(parseInt(o.index,10)+1)+"),> tbody > tr:not(."+s.detail+",."+s.disabled+") > th:nth-child("+(parseInt(o.index,10)+1)+")"
return void e.find(n).not("."+s.detailCell).prepend(t(l.toggleHTMLElement).addClass(s.toggle))}}a||e.find("> tbody > tr:not(."+s.detail+",."+s.disabled+") > td:first-child").add("> tbody > tr:not(."+s.detail+",."+s.disabled+") > th:first-child").not("."+s.detailCell).prepend(t(l.toggleHTMLElement).addClass(s.toggle))}},r.setColumnClasses=function(){var e=t(r.table)
for(var a in r.columns){var i=r.columns[a]
if(null!==i.className){var o="",n=!0
t.each(i.matches,function(t,e){n||(o+=", "),o+="> tbody > tr:not(."+s.detail+") > td:nth-child("+(parseInt(e,10)+1)+")",n=!1}),e.find(o).not("."+s.detailCell).addClass(i.className)}}},r.bindToggleSelectors=function(){var e=t(r.table)
r.hasAnyBreakpointColumn()&&(e.find(l.toggleSelector).unbind(f.toggleRow).bind(f.toggleRow,function(){var e=t(this).is("tr")?t(this):t(this).parents("tr:first")
r.toggleDetail(e)}),e.find(l.toggleSelector).unbind("click.footable").bind("click.footable",function(a){e.is(".breakpoint")&&t(a.target).is("td,th,."+s.toggle)&&t(this).trigger(f.toggleRow)}))},r.parse=function(t,e){return(l.parsers[e.type]||l.parsers.alpha)(t)},r.getColumnData=function(e){var a=t(e),i=a.data("hide"),o=a.index()
i=i||"",i=jQuery.map(i.split(","),function(t){return jQuery.trim(t)})
var n={index:o,hide:{},type:a.data("type")||"alpha",name:a.data("name")||t.trim(a.text()),ignore:a.data("ignore")||!1,toggle:a.data("toggle")||!1,className:a.data("class")||null,matches:[],names:{},group:a.data("group")||null,groupName:null,isEditable:a.data("editable")}
if(null!==n.group){var s=t(r.table).find('> thead > tr.footable-group-row > th[data-group="'+n.group+'"], > thead > tr.footable-group-row > td[data-group="'+n.group+'"]').first()
n.groupName=r.parse(s,{type:"alpha"})}var f=parseInt(a.prev().attr("colspan")||0,10)
p+=f>1?f-1:0
var u=parseInt(a.attr("colspan")||0,10),c=n.index+p
if(u>1){var g=a.data("names")
g=g||"",g=g.split(",")
for(var b=0;u>b;b++)n.matches.push(b+c),g.length>b&&(n.names[b+c]=g[b])}else n.matches.push(c)
n.hide.default="all"===a.data("hide")||t.inArray("default",i)>=0
var h=!1
for(var m in l.breakpoints)n.hide[m]="all"===a.data("hide")||t.inArray(m,i)>=0,h=h||n.hide[m]
return n.hasBreakpoint=h,r.raise(d.columnData,{column:{data:n,th:e}}).column.data},r.getViewportWidth=function(){return window.innerWidth||(document.body?document.body.offsetWidth:0)},r.calculateWidth=function(t,e){return jQuery.isFunction(l.calculateWidthOverride)?l.calculateWidthOverride(t,e):(e.viewportWidth<e.width&&(e.width=e.viewportWidth),e.parentWidth<e.width&&(e.width=e.parentWidth),e)},r.hasBreakpointColumn=function(t){for(var e in r.columns)if(r.columns[e].hide[t]){if(r.columns[e].ignore)continue
return!0}return!1},r.hasAnyBreakpointColumn=function(){for(var t in r.columns)if(r.columns[t].hasBreakpoint)return!0
return!1},r.resize=function(){var e=t(r.table)
if(e.is(":visible")){if(!r.hasAnyBreakpointColumn())return void e.trigger(f.redraw)
var a={width:e.width(),viewportWidth:r.getViewportWidth(),parentWidth:e.parent().width()}
a=r.calculateWidth(e,a)
var i=e.data("footable_info")
if(e.data("footable_info",a),r.raise(d.resizing,{old:i,info:a}),!i||i&&i.width&&i.width!==a.width){for(var o,n=null,l=0;r.breakpoints.length>l;l++)if((o=r.breakpoints[l])&&o.width&&a.width<=o.width){n=o
break}var s=null===n?"default":n.name,p=r.hasBreakpointColumn(s),u=e.data("breakpoint")
e.data("breakpoint",s).removeClass("default breakpoint").removeClass(r.breakpointNames).addClass(s+(p?" breakpoint":"")),s!==u&&(e.trigger(f.redraw),r.raise(d.breakpoint,{breakpoint:s,info:a}))}r.raise(d.resized,{old:i,info:a})}},r.redraw=function(){r.addRowToggle(),r.bindToggleSelectors(),r.setColumnClasses()
var e=t(r.table),a=e.data("breakpoint"),i=r.hasBreakpointColumn(a)
e.find("> tbody > tr:not(."+s.detail+")").data("detail_created",!1).end().find("> thead > tr:last-child > th").each(function(){var i=r.columns[t(this).index()],o="",n=!0
t.each(i.matches,function(t,e){n||(o+=", ")
var a=e+1
o+="> tbody > tr:not(."+s.detail+") > td:nth-child("+a+")",o+=", > tfoot > tr:not(."+s.detail+") > td:nth-child("+a+")",o+=", > colgroup > col:nth-child("+a+")",n=!1}),o+=', > thead > tr[data-group-row="true"] > th[data-group="'+i.group+'"]'
var l=e.find(o).add(this)
if(""!==a&&(!1===i.hide[a]?l.addClass("footable-visible").show():l.removeClass("footable-visible").hide()),1===e.find("> thead > tr.footable-group-row").length){var d=e.find('> thead > tr:last-child > th[data-group="'+i.group+'"]:visible, > thead > tr:last-child > th[data-group="'+i.group+'"]:visible'),f=e.find('> thead > tr.footable-group-row > th[data-group="'+i.group+'"], > thead > tr.footable-group-row > td[data-group="'+i.group+'"]'),p=0
t.each(d,function(){p+=parseInt(t(this).attr("colspan")||1,10)}),p>0?f.attr("colspan",p).show():f.hide()}}).end().find("> tbody > tr."+s.detailShow).each(function(){r.createOrUpdateDetailRow(this)}),e.find("[data-bind-name]").each(function(){r.toggleInput(this)}),e.find("> tbody > tr."+s.detailShow+":visible").each(function(){var e=t(this).next()
e.hasClass(s.detail)&&(i?e.show():e.hide())}),e.find("> thead > tr > th.footable-last-column, > tbody > tr > td.footable-last-column").removeClass("footable-last-column"),e.find("> thead > tr > th.footable-first-column, > tbody > tr > td.footable-first-column").removeClass("footable-first-column"),e.find("> thead > tr, > tbody > tr").find("> th.footable-visible:last, > td.footable-visible:last").addClass("footable-last-column").end().find("> th.footable-visible:first, > td.footable-visible:first").addClass("footable-first-column"),r.raise(d.redrawn)},r.toggleDetail=function(e){var a=e.jquery?e:t(e),i=a.next()
a.hasClass(s.detailShow)?(a.removeClass(s.detailShow),i.hasClass(s.detail)&&i.hide(),r.raise(d.rowCollapsed,{row:a[0]})):(r.createOrUpdateDetailRow(a[0]),a.addClass(s.detailShow).next().show(),r.raise(d.rowExpanded,{row:a[0]}))},r.removeRow=function(e){var a=e.jquery?e:t(e)
a.hasClass(s.detail)&&(a=a.prev())
var i=a.next()
!0===a.data("detail_created")&&i.remove(),a.remove(),r.raise(d.rowRemoved)},r.appendRow=function(e){var a=e.jquery?e:t(e)
t(r.table).find("tbody").append(a),r.redraw()},r.getColumnFromTdIndex=function(e){var a=null
for(var i in r.columns)if(t.inArray(e,r.columns[i].matches)>=0){a=r.columns[i]
break}return a},r.createOrUpdateDetailRow=function(e){var a,i=t(e),o=i.next(),n=[]
if(!0===i.data("detail_created"))return!0
if(i.is(":hidden"))return!1
if(r.raise(d.rowDetailUpdating,{row:i,detail:o}),i.find("> td:hidden").each(function(){var e=t(this).index(),a=r.getColumnFromTdIndex(e),i=a.name
if(!0===a.ignore)return!0
e in a.names&&(i=a.names[e])
var o=t(this).attr("data-bind-name")
if(null!=o&&t(this).is(":empty")){var l=t("."+s.detailInnerValue+'[data-bind-value="'+o+'"]')
t(this).html(t(l).contents().detach())}var d
return!1!==a.isEditable&&(a.isEditable||t(this).find(":input").length>0)&&(null==o&&(o="bind-"+t.now()+"-"+e,t(this).attr("data-bind-name",o)),d=t(this).contents().detach()),d||(d=t(this).contents().clone(!0,!0)),n.push({name:i,value:r.parse(this,a),display:d,group:a.group,groupName:a.groupName,bindName:o}),!0}),0===n.length)return!1
var f=i.find("> td:visible").length,p=o.hasClass(s.detail)
return p||(o=t('<tr class="'+s.detail+'"><td class="'+s.detailCell+'"><div class="'+s.detailInner+'"></div></td></tr>'),i.after(o)),o.find("> td:first").attr("colspan",f),a=o.find("."+s.detailInner).empty(),l.createDetail(a,n,l.createGroupedDetail,l.detailSeparator,s),i.data("detail_created",!0),r.raise(d.rowDetailUpdated,{row:i,detail:o}),!p},r.raise=function(e,a){!0===r.options.debug&&t.isFunction(r.options.log)&&r.options.log(e,"event"),a=a||{}
var i={ft:r}
t.extend(!0,i,a)
var o=t.Event(e,i)
return o.ft||t.extend(!0,o,i),t(r.table).trigger(o),o},r.reset=function(){var e=t(r.table)
e.removeData("footable_info").data("breakpoint","").removeClass(s.loading).removeClass(s.loaded),e.find(l.toggleSelector).unbind(f.toggleRow).unbind("click.footable"),e.find("> tbody > tr").removeClass(s.detailShow),e.find("> tbody > tr."+s.detail).remove(),r.raise(d.reset)},r.toggleInput=function(e){var a=t(e).attr("data-bind-name")
if(null!=a){var i=t("."+s.detailInnerValue+'[data-bind-value="'+a+'"]')
null!=i&&(t(e).is(":visible")?t(i).is(":empty")||t(e).html(t(i).contents().detach()):t(e).is(":empty")||t(i).html(t(e).contents().detach()))}},r.init(),r}e.footable={options:{delay:100,breakpoints:{phone:480,tablet:1024},parsers:{alpha:function(e){return t(e).data("value")||t.trim(t(e).text())},numeric:function(e){var a=t(e).data("value")||t(e).text().replace(/[^0-9.\-]/g,"")
return a=parseFloat(a),isNaN(a)&&(a=0),a}},addRowToggle:!0,calculateWidthOverride:null,toggleSelector:" > tbody > tr:not(.footable-row-detail)",columnDataSelector:"> thead > tr:last-child > th, > thead > tr:last-child > td",detailSeparator:":",toggleHTMLElement:"<span />",createGroupedDetail:function(t){for(var e={_none:{name:null,data:[]}},a=0;t.length>a;a++){var i=t[a].group
null!==i?(i in e||(e[i]={name:t[a].groupName||t[a].group,data:[]}),e[i].data.push(t[a])):e._none.data.push(t[a])}return e},createDetail:function(e,a,i,o,n){var r=i(a)
for(var l in r)if(0!==r[l].data.length){"_none"!==l&&e.append('<div class="'+n.detailInnerGroup+'">'+r[l].name+"</div>")
for(var s=0;r[l].data.length>s;s++){var d=r[l].data[s].name?o:""
e.append(t("<div></div>").addClass(n.detailInnerRow).append(t("<div></div>").addClass(n.detailInnerName).append(r[l].data[s].name+d)).append(t("<div></div>").addClass(n.detailInnerValue).attr("data-bind-value",r[l].data[s].bindName).append(r[l].data[s].display)))}}},classes:{main:"footable",loading:"footable-loading",loaded:"footable-loaded",toggle:"footable-toggle",disabled:"footable-disabled",detail:"footable-row-detail",detailCell:"footable-row-detail-cell",detailInner:"footable-row-detail-inner",detailInnerRow:"footable-row-detail-row",detailInnerGroup:"footable-row-detail-group",detailInnerName:"footable-row-detail-name",detailInnerValue:"footable-row-detail-value",detailShow:"footable-detail-show"},triggers:{initialize:"footable_initialize",resize:"footable_resize",redraw:"footable_redraw",toggleRow:"footable_toggle_row",expandFirstRow:"footable_expand_first_row",expandAll:"footable_expand_all",collapseAll:"footable_collapse_all"},events:{alreadyInitialized:"footable_already_initialized",initializing:"footable_initializing",initialized:"footable_initialized",resizing:"footable_resizing",resized:"footable_resized",redrawn:"footable_redrawn",breakpoint:"footable_breakpoint",columnData:"footable_column_data",rowDetailUpdating:"footable_row_detail_updating",rowDetailUpdated:"footable_row_detail_updated",rowCollapsed:"footable_row_collapsed",rowExpanded:"footable_row_expanded",rowRemoved:"footable_row_removed",reset:"footable_reset"},debug:!1,log:null},version:{major:0,minor:5,toString:function(){return e.footable.version.major+"."+e.footable.version.minor},parse:function(t){var e=/(\d+)\.?(\d+)?\.?(\d+)?/.exec(t)
return{major:parseInt(e[1],10)||0,minor:parseInt(e[2],10)||0,patch:parseInt(e[3],10)||0}}},plugins:{_validate:function(a){if(!t.isFunction(a))return!0===e.footable.options.debug&&console.error('Validation failed, expected type "function", received type "{0}".',typeof a),!1
var i=new a
return"string"!=typeof i.name?(!0===e.footable.options.debug&&console.error('Validation failed, plugin does not implement a string property called "name".',i),!1):t.isFunction(i.init)?(!0===e.footable.options.debug&&console.log('Validation succeeded for plugin "'+i.name+'".',i),!0):(!0===e.footable.options.debug&&console.error('Validation failed, plugin "'+i.name+'" does not implement a function called "init".',i),!1)},registered:[],register:function(a,i){e.footable.plugins._validate(a)&&(e.footable.plugins.registered.push(a),"object"==typeof i&&t.extend(!0,e.footable.options,i))},load:function(t){var a,i,o=[]
for(i=0;e.footable.plugins.registered.length>i;i++)try{a=e.footable.plugins.registered[i],o.push(new a(t))}catch(t){!0===e.footable.options.debug&&console.error(t)}return o},init:function(t){for(var a=0;t.plugins.length>a;a++)try{t.plugins[a].init(t)}catch(t){!0===e.footable.options.debug&&console.error(t)}}}}
var o=0
t.fn.footable=function(a){a=a||{}
var n=t.extend(!0,{},e.footable.options,a)
return this.each(function(){o++
var e=new i(this,n,o)
t(this).data("footable",e)})}})(jQuery,window),function(t,e,a){function i(e){var a=t("<th>"+e.title+"</th>")
return t.isPlainObject(e.data)&&a.data(e.data),t.isPlainObject(e.style)&&a.css(e.style),e.className&&a.addClass(e.className),a}function o(e,a){var o=e.find("thead")
0===o.size()&&(o=t("<thead>").appendTo(e))
for(var n=t("<tr>").appendTo(o),r=0,l=a.cols.length;l>r;r++)n.append(i(a.cols[r]))}function n(e){var a=e.find("tbody")
0===a.size()&&(a=t("<tbody>").appendTo(e))}function r(e,a,i){if(i){e.attr("data-page-size",i["page-size"])
var o=e.find("tfoot")
0===o.size()&&(o=t('<tfoot class="hide-if-no-paging"></tfoot>').appendTo(e)),o.append("<tr><td colspan="+a.length+"></td></tr>")
t("<div>").appendTo(o.find("tr:last-child td")).addClass(i["pagination-class"])}}function l(e){for(var a=e[0],i=0,o=e.length;o>i;i++){var n=e[i]
if(n.data&&(!0===n.data.toggle||"true"===n.data.toggle))return}a.data=t.extend(a.data,{toggle:!0})}function s(t,e,a){0===t.find("tr.emptyInfo").size()&&t.find("tbody").append('<tr class="emptyInfo"><td colspan="'+e.length+'">'+a+"</td></tr>")}function d(e,a,i,o){e.find("tr:not(."+i+")").each(function(){var e=t(this),i=a.data("index"),n=parseInt(e.data("index"),0),r=n+o
n>=i&&this!==a.get(0)&&e.attr("data-index",r).data("index",r)})}function f(){function e(e,a,i){var o=t("<td>")
return e.formatter?o.html(e.formatter(a,o,i)):o.html(a||""),o}var i=this
i.name="Footable Grid",i.init=function(e){var d=e.options.classes.toggle,f=e.options.classes.detail,p=e.options.grid
if(p.cols){i.footable=e
var u=t(e.table)
u.data("grid",i),t.isPlainObject(p.data)&&u.data(p.data),i._items=[],l(p.cols),p.showCheckbox&&(p.multiSelect=!0,p.cols.unshift({title:p.checkboxFormatter(!0),name:"",data:{"sort-ignore":!0},formatter:p.checkboxFormatter})),p.showIndex&&p.cols.unshift({title:"#",name:"index",data:{"sort-ignore":!0},formatter:p.indexFormatter}),o(u,p),n(u),r(u,p.cols,p.pagination),u.off(".grid").on({"footable_initialized.grid":function(){p.url||p.ajax?t.ajax(p.ajax||{url:p.url}).then(function(t){i.newItem(t),e.raise(p.events.loaded)},function(){throw"load data from "+(p.url||p.ajax.url)+" fail"}):(i.newItem(p.items||[]),e.raise(p.events.loaded))},"footable_sorted.grid footable_grid_created.grid footable_grid_removed.grid":function(){p.showIndex&&i.getItem().length>0&&u.find("tbody tr:not(."+f+")").each(function(e){var a=t(this).find("td:first")
a.html(p.indexFormatter(null,a,e))})},"footable_redrawn.grid footable_row_removed.grid":function(){0===i.getItem().length&&p.showEmptyInfo&&s(u,p.cols,p.emptyInfo)}}).on({"click.grid":function(i){if(t(i.target).closest("td").find(">."+d).size()>0)return!0
var o=t(i.currentTarget)
return!!o.hasClass(f)||(p.multiSelect||o.hasClass(p.activeClass)||u.find("tbody tr."+p.activeClass).removeClass(p.activeClass),o.toggleClass(p.activeClass),p.showCheckbox&&o.find("input:checkbox.check").prop("checked",function(t,e){return i.target===this?e:!e}),e.toggleDetail(o),a)}},"tbody tr").on("click.grid","thead input:checkbox.checkAll",function(t){var e=!!t.currentTarget.checked
e?u.find("tbody tr").addClass(p.activeClass):u.find("tbody tr").removeClass(p.activeClass),u.find("tbody input:checkbox.check").prop("checked",e)})}},i.getSelected=function(){var e=i.footable.options.grid
return t(i.footable.table).find("tbody>tr."+e.activeClass).map(function(){return t(this).data("index")})},i.getItem=function(e){return e!==a?t.isArray(e)?t.map(e,function(t){return i._items[t]}):i._items[e]:i._items},i._makeRow=function(a,o){var n,r=i.footable.options.grid
if(t.isFunction(r.template))n=t(r.template(t.extend({},{__index:o},a)))
else{n=t("<tr>")
for(var l=0,s=r.cols.length;s>l;l++){var d=r.cols[l]
n.append(e(d,a[d.name]||"",o))}}return n.attr("data-index",o),n},i.newItem=function(e,o,n){var r=t(i.footable.table).find("tbody"),l=i.footable.options.classes.detail
if(r.find("tr.emptyInfo").remove(),t.isArray(e)){for(var s;s=e.pop();)i.newItem(s,o,!0)
return i.footable.redraw(),i.footable.raise(i.footable.options.grid.events.created,{item:e,index:o}),a}if(t.isPlainObject(e)){var f,p=i._items.length
if(o===a||0>o||o>p)f=i._makeRow(e,p++),i._items.push(e),r.append(f)
else{if(f=i._makeRow(e,o),0===o)i._items.unshift(e),r.prepend(f)
else{var u=r.find("tr[data-index="+(o-1)+"]")
i._items.splice(o,0,e),!0===u.data("detail_created")&&(u=u.next()),u.after(f)}d(r,f,l,1)}n||(i.footable.redraw(),i.footable.raise(i.footable.options.grid.events.created,{item:e,index:o}))}},i.setItem=function(e,a){if(t.isPlainObject(e)){var o=t(i.footable.table).find("tbody"),n=i._makeRow(e,a)
t.extend(i._items[a],e)
o.find("tr").eq(a).html(n.html()),i.footable.redraw(),i.footable.raise(i.footable.options.grid.events.updated,{item:e,index:a})}},i.removeItem=function(e){var o=t(i.footable.table).find("tbody"),n=i.footable.options.classes.detail,r=[]
if(t.isArray(e)){for(var l;l=e.pop();)r.push(i.removeItem(l))
return i.footable.raise(i.footable.options.grid.events.removed,{item:r,index:e}),r}if(e===a)o.find("tr").each(function(){r.push(i._items.shift()),i.footable.removeRow(this)})
else{var s=o.find("tr[data-index="+e+"]")
r=i._items.splice(e,1)[0],i.footable.removeRow(s),d(o,s,n,-1)}return i.footable.raise(i.footable.options.grid.events.removed,{item:r,index:e}),r}}if(e.footable===a||null===e.foobox)throw Error("Please check and make sure footable.js is included in the page and is loaded prior to this script.")
var p={grid:{enabled:!0,data:null,template:null,cols:null,items:null,url:null,ajax:null,activeClass:"active",multiSelect:!1,showIndex:!1,showCheckbox:!1,showEmptyInfo:!1,emptyInfo:'<p class="text-center text-warning">No Data</p>',pagination:{"page-size":20,"pagination-class":"pagination pagination-centered"},indexFormatter:function(t,e,a){return a+1},checkboxFormatter:function(t){return'<input type="checkbox" class="'+(t?"checkAll":"check")+'">'},events:{loaded:"footable_grid_loaded",created:"footable_grid_created",removed:"footable_grid_removed",updated:"footable_grid_updated"}}}
e.footable.plugins.register(f,p)}(jQuery,window),function(t,e,a){function i(){var e=this
e.name="Footable Filter",e.init=function(a){if(e.footable=a,!0===a.options.filter.enabled){if(!1===t(a.table).data("filter"))return
a.timers.register("filter"),t(a.table).unbind(".filtering").bind({"footable_initialized.filtering":function(){var i=t(a.table),o={input:i.data("filter")||a.options.filter.input,timeout:i.data("filter-timeout")||a.options.filter.timeout,minimum:i.data("filter-minimum")||a.options.filter.minimum,disableEnter:i.data("filter-disable-enter")||a.options.filter.disableEnter}
o.disableEnter&&t(o.input).keypress(function(t){return window.event?13!==window.event.keyCode:13!==t.which}),i.bind("footable_clear_filter",function(){t(o.input).val(""),e.clearFilter()}),i.bind("footable_filter",function(t,a){e.filter(a.filter)}),t(o.input).keyup(function(i){a.timers.filter.stop(),27===i.which&&t(o.input).val(""),a.timers.filter.start(function(){var a=t(o.input).val()||""
e.filter(a)},o.timeout)})},"footable_redrawn.filtering":function(){var i=t(a.table),o=i.data("filter-string")
o&&e.filter(o)}}).data("footable-filter",e)}},e.filter=function(a){var i=e.footable,o=t(i.table),n=o.data("filter-minimum")||i.options.filter.minimum,r=!a,l=i.raise("footable_filtering",{filter:a,clear:r})
if(!(l&&!1===l.result||l.filter&&n>l.filter.length))if(l.clear)e.clearFilter()
else{var s=l.filter.split(" ")
o.find("> tbody > tr").hide().addClass("footable-filtered")
var d=o.find("> tbody > tr:not(.footable-row-detail)")
t.each(s,function(t,e){e&&e.length>0&&(o.data("current-filter",e),d=d.filter(i.options.filter.filterFunction))}),d.each(function(){e.showRow(this,i),t(this).removeClass("footable-filtered")}),o.data("filter-string",l.filter),i.raise("footable_filtered",{filter:l.filter,clear:!1})}},e.clearFilter=function(){var a=e.footable,i=t(a.table)
i.find("> tbody > tr:not(.footable-row-detail)").removeClass("footable-filtered").each(function(){e.showRow(this,a)}),i.removeData("filter-string"),a.raise("footable_filtered",{clear:!0})},e.showRow=function(e,a){var i=t(e),o=i.next(),n=t(a.table)
i.is(":visible")||(n.hasClass("breakpoint")&&i.hasClass("footable-detail-show")&&o.hasClass("footable-row-detail")?(i.add(o).show(),a.createOrUpdateDetailRow(e)):i.show())}}if(void 0===e.footable||null===e.footable)throw Error("Please check and make sure footable.js is included in the page and is loaded prior to this script.")
var o={filter:{enabled:!0,input:".footable-filter",timeout:300,minimum:2,disableEnter:!1,filterFunction:function(){var e=t(this),a=e.parents("table:first"),i=a.data("current-filter").toUpperCase(),o=e.find("td").text()
return a.data("filter-text-only")||e.find("td[data-value]").each(function(){o+=t(this).data("value")}),o.toUpperCase().indexOf(i)>=0}}}
e.footable.plugins.register(i,o)}(jQuery,window),function(t,e,a){function i(e){var a=t(e.table),i=a.data()
this.pageNavigation=i.pageNavigation||e.options.pageNavigation,this.pageSize=i.pageSize||e.options.pageSize,this.firstText=i.firstText||e.options.firstText,this.previousText=i.previousText||e.options.previousText,this.nextText=i.nextText||e.options.nextText,this.lastText=i.lastText||e.options.lastText,this.limitNavigation=parseInt(i.limitNavigation||e.options.limitNavigation||n.limitNavigation,10),this.limitPreviousText=i.limitPreviousText||e.options.limitPreviousText,this.limitNextText=i.limitNextText||e.options.limitNextText,this.limit=this.limitNavigation>0,this.currentPage=i.currentPage||0,this.pages=[],this.control=!1}function o(){var e=this
e.name="Footable Paginate",e.init=function(a){if(!0===a.options.paginate){if(!1===t(a.table).data("page"))return
e.footable=a,t(a.table).unbind(".paging").bind({"footable_initialized.paging footable_row_removed.paging footable_redrawn.paging footable_sorted.paging footable_filtered.paging":function(){e.setupPaging()}}).data("footable-paging",e)}},e.setupPaging=function(){var a=e.footable,o=t(a.table).find("> tbody")
a.pageInfo=new i(a),e.createPages(a,o),e.createNavigation(a,o),e.fillPage(a,o,a.pageInfo.currentPage)},e.createPages=function(e,a){var i=1,o=e.pageInfo,n=i*o.pageSize,r=[],l=[]
o.pages=[]
var s=a.find("> tr:not(.footable-filtered,.footable-row-detail)")
s.each(function(t,e){r.push(e),t===n-1?(o.pages.push(r),i++,n=i*o.pageSize,r=[]):t>=s.length-s.length%o.pageSize&&l.push(e)}),l.length>0&&o.pages.push(l),o.currentPage>=o.pages.length&&(o.currentPage=o.pages.length-1),0>o.currentPage&&(o.currentPage=0),1===o.pages.length?t(e.table).addClass("no-paging"):t(e.table).removeClass("no-paging")},e.createNavigation=function(a){var i=t(a.table).find(a.pageInfo.pageNavigation)
if(0===i.length){if(i=t(a.pageInfo.pageNavigation),i.parents("table:first").length>0&&i.parents("table:first")!==t(a.table))return
i.length>1&&!0===a.options.debug&&console.error("More than one pagination control was found!")}if(0!==i.length){i.is("ul")||(0===i.find("ul:first").length&&i.append("<ul />"),i=i.find("ul")),i.find("li").remove()
var o=a.pageInfo
o.control=i,o.pages.length>0&&(i.append('<li class="footable-page-arrow"><a data-page="first" href="#first">'+a.pageInfo.firstText+"</a>"),i.append('<li class="footable-page-arrow"><a data-page="prev" href="#prev">'+a.pageInfo.previousText+"</a></li>"),o.limit&&i.append('<li class="footable-page-arrow"><a data-page="limit-prev" href="#limit-prev">'+a.pageInfo.limitPreviousText+"</a></li>"),o.limit||t.each(o.pages,function(t,e){e.length>0&&i.append('<li class="footable-page"><a data-page="'+t+'" href="#">'+(t+1)+"</a></li>")}),o.limit&&(i.append('<li class="footable-page-arrow"><a data-page="limit-next" href="#limit-next">'+a.pageInfo.limitNextText+"</a></li>"),e.createLimited(i,o,0)),i.append('<li class="footable-page-arrow"><a data-page="next" href="#next">'+a.pageInfo.nextText+"</a></li>"),i.append('<li class="footable-page-arrow"><a data-page="last" href="#last">'+a.pageInfo.lastText+"</a></li>")),i.off("click","a[data-page]").on("click","a[data-page]",function(n){n.preventDefault()
var r=t(this).data("page"),l=o.currentPage
if("first"===r)l=0
else if("prev"===r)l>0&&l--
else if("next"===r)o.pages.length-1>l&&l++
else if("last"===r)l=o.pages.length-1
else if("limit-prev"===r){l=-1
var s=i.find(".footable-page:first a").data("page")
e.createLimited(i,o,s-o.limitNavigation),e.setPagingClasses(i,o.currentPage,o.pages.length)}else if("limit-next"===r){l=-1
var d=i.find(".footable-page:last a").data("page")
e.createLimited(i,o,d+1),e.setPagingClasses(i,o.currentPage,o.pages.length)}else l=r
if(l>=0){if(o.limit&&o.currentPage!=l){for(var f=l;0!=f%o.limitNavigation;)f-=1
e.createLimited(i,o,f)}e.paginate(a,l)}}),e.setPagingClasses(i,o.currentPage,o.pages.length)}},e.createLimited=function(t,e,a){a=a||0,t.find("li.footable-page").remove()
var i,o,n=t.find('li.footable-page-arrow > a[data-page="limit-prev"]').parent(),r=t.find('li.footable-page-arrow > a[data-page="limit-next"]').parent()
for(i=e.pages.length-1;i>=0;i--)o=e.pages[i],i>=a&&a+e.limitNavigation>i&&o.length>0&&n.after('<li class="footable-page"><a data-page="'+i+'" href="#">'+(i+1)+"</a></li>")
0===a?n.hide():n.show(),a+e.limitNavigation>=e.pages.length?r.hide():r.show()},e.paginate=function(a,i){var o=a.pageInfo
if(o.currentPage!==i){var n=t(a.table).find("> tbody"),r=a.raise("footable_paging",{page:i,size:o.pageSize})
if(r&&!1===r.result)return
e.fillPage(a,n,i),o.control.find("li").removeClass("active disabled"),e.setPagingClasses(o.control,o.currentPage,o.pages.length)}},e.setPagingClasses=function(t,e,a){t.find("li.footable-page > a[data-page="+e+"]").parent().addClass("active"),e>=a-1&&(t.find('li.footable-page-arrow > a[data-page="next"]').parent().addClass("disabled"),t.find('li.footable-page-arrow > a[data-page="last"]').parent().addClass("disabled")),1>e&&(t.find('li.footable-page-arrow > a[data-page="first"]').parent().addClass("disabled"),t.find('li.footable-page-arrow > a[data-page="prev"]').parent().addClass("disabled"))},e.fillPage=function(a,i,o){a.pageInfo.currentPage=o,t(a.table).data("currentPage",o),i.find("> tr").hide(),t(a.pageInfo.pages[o]).each(function(){e.showRow(this,a)}),a.raise("footable_page_filled")},e.showRow=function(e,a){var i=t(e),o=i.next()
t(a.table).hasClass("breakpoint")&&i.hasClass("footable-detail-show")&&o.hasClass("footable-row-detail")?(i.add(o).show(),a.createOrUpdateDetailRow(e)):i.show()}}if(void 0===e.footable||null===e.footable)throw Error("Please check and make sure footable.js is included in the page and is loaded prior to this script.")
var n={paginate:!0,pageSize:10,pageNavigation:".pagination",firstText:"&laquo;",previousText:"&lsaquo;",nextText:"&rsaquo;",lastText:"&raquo;",limitNavigation:0,limitPreviousText:"...",limitNextText:"..."}
e.footable.plugins.register(o,n)}(jQuery,window),function(t,e,a){function i(){var e=this
e.name="Footable Sortable",e.init=function(i){e.footable=i,!0===i.options.sort&&t(i.table).unbind(".sorting").bind({"footable_initialized.sorting":function(){var a,o,n=t(i.table),r=(n.find("> tbody"),i.options.classes.sort)
if(!1!==n.data("sort")){n.find("> thead > tr:last-child > th, > thead > tr:last-child > td").each(function(){var e=t(this)
!0===i.columns[e.index()].sort.ignore||e.hasClass(r.sortable)||(e.addClass(r.sortable),t("<span />").addClass(r.indicator).appendTo(e))}),n.find("> thead > tr:last-child > th."+r.sortable+", > thead > tr:last-child > td."+r.sortable).unbind("click.footable").bind("click.footable",function(a){a.preventDefault(),o=t(this)
var i=!o.hasClass(r.sorted)
return e.doSort(o.index(),i),!1})
for(var l in i.columns)if(a=i.columns[l],a.sort.initial){var s="descending"!==a.sort.initial
e.doSort(a.index,s)
break}}},"footable_redrawn.sorting":function(){var o=t(i.table),n=i.options.classes.sort
o.data("sorted")>=0&&o.find("> thead > tr:last-child > th").each(function(i){var o=t(this)
return o.hasClass(n.sorted)||o.hasClass(n.descending)?(e.doSort(i),a):a})},"footable_column_data.sorting":function(e){var a=t(e.column.th)
e.column.data.sort=e.column.data.sort||{},e.column.data.sort.initial=a.data("sort-initial")||!1,e.column.data.sort.ignore=a.data("sort-ignore")||!1,e.column.data.sort.selector=a.data("sort-selector")||null
var i=a.data("sort-match")||0
i>=e.column.data.matches.length&&(i=0),e.column.data.sort.match=e.column.data.matches[i]}}).data("footable-sort",e)},e.doSort=function(i,o){var n=e.footable
if(!1!==t(n.table).data("sort")){var r=t(n.table),l=r.find("> tbody"),s=n.columns[i],d=r.find("> thead > tr:last-child > th:eq("+i+")"),f=n.options.classes.sort,p=n.options.events.sort
if(o=o===a?d.hasClass(f.sorted):"toggle"===o?!d.hasClass(f.sorted):o,!0===s.sort.ignore)return!0
var u=n.raise(p.sorting,{column:s,direction:o?"ASC":"DESC"})
u&&!1===u.result||(r.data("sorted",s.index),r.find("> thead > tr:last-child > th, > thead > tr:last-child > td").not(d).removeClass(f.sorted+" "+f.descending),o===a&&(o=d.hasClass(f.sorted)),o?d.removeClass(f.descending).addClass(f.sorted):d.removeClass(f.sorted).addClass(f.descending),e.sort(n,l,s,o),n.bindToggleSelectors(),n.raise(p.sorted,{column:s,direction:o?"ASC":"DESC"}))}},e.rows=function(e,i,o){var n=[]
return i.find("> tr").each(function(){var i=t(this),r=null
if(i.hasClass(e.options.classes.detail))return!0
i.next().hasClass(e.options.classes.detail)&&(r=i.next().get(0))
var l={row:i,detail:r}
return o!==a&&(l.value=e.parse(this.cells[o.sort.match],o)),n.push(l),!0}).detach(),n},e.sort=function(t,a,i,o){var n=e.rows(t,a,i),r=t.options.sorters[i.type]||t.options.sorters.alpha
n.sort(function(t,e){return o?r(t.value,e.value):r(e.value,t.value)})
for(var l=0;n.length>l;l++)a.append(n[l].row),null!==n[l].detail&&a.append(n[l].detail)}}if(e.footable===a||null===e.footable)throw Error("Please check and make sure footable.js is included in the page and is loaded prior to this script.")
var o={sort:!0,sorters:{alpha:function(t,e){return"string"==typeof t&&(t=t.toLowerCase()),"string"==typeof e&&(e=e.toLowerCase()),t===e?0:e>t?-1:1},numeric:function(t,e){return t-e}},classes:{sort:{sortable:"footable-sortable",sorted:"footable-sorted",descending:"footable-sorted-desc",indicator:"footable-sort-indicator"}},events:{sort:{sorting:"footable_sorting",sorted:"footable_sorted"}}}
e.footable.plugins.register(i,o)}(jQuery,window),function(t,e,a){function i(){var e=this
e.name="Footable Striping",e.init=function(a){e.footable=a,t(a.table).unbind("striping").bind({"footable_initialized.striping footable_row_removed.striping footable_redrawn.striping footable_sorted.striping footable_filtered.striping":function(){!1!==t(this).data("striping")&&e.setupStriping(a)}})},e.setupStriping=function(e){var a=0
t(e.table).find("> tbody > tr:not(.footable-row-detail)").each(function(){var i=t(this)
i.removeClass(e.options.classes.striping.even).removeClass(e.options.classes.striping.odd),0==a%2?i.addClass(e.options.classes.striping.even):i.addClass(e.options.classes.striping.odd),a++})}}if(void 0===e.footable||null===e.foobox)throw Error("Please check and make sure footable.js is included in the page and is loaded prior to this script.")
var o={striping:{enabled:!0},classes:{striping:{odd:"footable-odd",even:"footable-even"}}}
e.footable.plugins.register(i,o)}(jQuery,window),function(t,e,a){function i(t,e){e=e||location.hash
var i=RegExp("&"+t+"(?:=([^&]*))?(?=&|$)","i")
return(e=e.replace(/^\#/,"&").match(i))?e[1]===a?"":decodeURIComponent(e[1]):a}function o(e,a){var i=t(e.table).find("tbody").find("tr:not(.footable-row-detail, .footable-filtered)").length
t(e.table).data("status_num_total",i)
var o=t(e.table).find("tbody").find("tr:not(.footable-row-detail)").filter(":visible").length
t(e.table).data("status_num_shown",o)
var n=t(e.table).data("sorted"),r=t(e.table).find("th")[n],l=t(r).hasClass("footable-sorted-desc")
if(t(e.table).data("status_descending",l),e.pageInfo){var s=e.pageInfo.currentPage
t(e.table).data("status_pagenum",s)}var d="",f=t(e.table).data("filter")
t(f).length&&(d=t(f).val()),t(e.table).data("status_filter_val",d)
var p,u,c
if("footable_row_expanded"==a.type&&(p=a.row)&&(u=t(e.table).data("expanded_rows"),c=[],u&&(c=u.split(",")),c.push(p.rowIndex),t(e.table).data("expanded_rows",c.join(","))),"footable_row_collapsed"==a.type&&(p=a.row)){u=t(e.table).data("expanded_rows"),c=[],u&&(c=u.split(","))
var g=[]
for(var b in c)if(c[b]==p.rowIndex){g=c.splice(b,1)
break}t(e.table).data("expanded_rows",g.join(","))}}function n(){var e=this
e.name="Footable LucidBookmarkable",e.init=function(e){e.options.bookmarkable.enabled&&t(e.table).bind({footable_initialized:function(){var o=e.table.id,n=i(o+"_f"),r=i(o+"_p"),l=i(o+"_s"),s=i(o+"_d"),d=i(o+"_e")
if(n){var f=t(e.table).data("filter")
t(f).val(n),t(e.table).trigger("footable_filter",{filter:n})}if(r&&t(e.table).data("currentPage",r),l!==a){var p=t(e.table).data("footable-sort"),u=!0
"true"==s&&(u=!1),p.doSort(l,u)}else t(e.table).trigger("footable_setup_paging")
if(d){var c=d.split(",")
for(var g in c){t(e.table.rows[c[g]]).find("> td:first").trigger("footable_toggle_row")}}e.lucid_bookmark_read=!0},"footable_page_filled footable_redrawn footable_filtered footable_sorted footable_row_expanded footable_row_collapsed":function(i){if(o(e,i),e.lucid_bookmark_read){var n=e.table.id,r=n+"_f",l=n+"_p",s=n+"_s",d=n+"_d",f=n+"_e",p=location.hash.replace(/^\#/,"&"),u=[r,l,s,d,f]
for(var c in u){var g=RegExp("&"+u[c]+"=([^&]*)","g")
p=p.replace(g,"")}var b={}
b[r]=t(e.table).data("status_filter_val"),b[l]=t(e.table).data("status_pagenum"),b[s]=t(e.table).data("sorted"),b[d]=t(e.table).data("status_descending"),b[f]=t(e.table).data("expanded_rows")
var h=[]
for(var m in b)b[m]!==a&&h.push(m+"="+encodeURIComponent(b[m]))
p.length&&h.push(p),location.hash=h.join("&")}}})}}if(e.footable===a||null===e.foobox)throw Error("Please check and make sure footable.js is included in the page and is loaded prior to this script.")
var r={bookmarkable:{enabled:!1}}
e.footable.plugins.register(n,r)}(jQuery,window)
