(function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)})(function(t){"use strict"
function e(t,e,i){this.regExpFactory=t,this.state=e,this.stream=i,this.styles=s,this.state.specialChar=null}function i(){this.cache={},this.single={bc:"bc",bq:"bq",definitionList:/- [^(?::=)]+:=+/,definitionListEnd:/.*=:\s*$/,div:"div",drawTable:/\|.*\|/,foot:/fn\d+/,header:/h[1-6]/,html:/\s*<(?:\/)?(\w+)(?:[^>]+)?>(?:[^<]+<\/\1>)?/,link:/[^"]+":\S/,linkDefinition:/\[[^\s\]]+\]\S+/,list:/(?:#+|\*+)/,notextile:"notextile",para:"p",pre:"pre",table:"table",tableCellAttributes:/[\/\\]\d+/,tableHeading:/\|_\./,tableText:/[^"_\*\[\(\?\+~\^%@|-]+/,text:/[^!"_=\*\[\(<\?\+~\^%@-]+/},this.attributes={align:/(?:<>|<|>|=)/,selector:/\([^\(][^\)]+\)/,lang:/\[[^\[\]]+\]/,pad:/(?:\(+|\)+){1,2}/,css:/\{[^\}]+\}/}}var s={addition:"positive",attributes:"attribute",bold:"strong",cite:"keyword",code:"atom",definitionList:"number",deletion:"negative",div:"punctuation",em:"em",footnote:"variable",footCite:"qualifier",header:"header",html:"comment",image:"string",italic:"em",link:"link",linkDefinition:"link",list1:"variable-2",list2:"variable-3",list3:"keyword",notextile:"string-2",pre:"operator",p:"property",quote:"bracket",span:"quote",specialChar:"tag",strong:"strong",sub:"builtin",sup:"builtin",table:"variable-3",tableHeading:"operator"}
e.prototype.eat=function(t){return this.stream.match(this.regExpFactory.pattern(t),!0)},e.prototype.check=function(t){return this.stream.match(this.regExpFactory.pattern(t),!1)},e.prototype.setModeForNextToken=function(t){return this.state.mode=t},e.prototype.execMode=function(t){return this.setModeForNextToken(t).call(this)},e.prototype.startNewLine=function(){this.setModeForNextToken(r.newLayout),this.state.tableHeading=!1,"definitionList"===this.state.layoutType&&this.state.spanningLayout&&this.check("definitionListEnd")&&(this.state.spanningLayout=!1)},e.prototype.nextToken=function(){return this.state.mode.call(this)},e.prototype.styleFor=function(t){if(this.styles.hasOwnProperty(t))return this.styles[t]
throw"unknown token"},e.prototype.handlePhraseModifier=function(t){if("_"===t)return this.stream.eat("_")?this.togglePhraseModifier("italic",/^.*__/):this.togglePhraseModifier("em",/^.*_/)
if("*"===t)return this.stream.eat("*")?this.togglePhraseModifier("bold",/^.*\*\*/):this.togglePhraseModifier("strong",/^.*\*/)
if("["===t)return this.stream.match(/\d+\]/)&&(this.state.footCite=!0),this.tokenStyles()
if("("===t)return this.stream.match("r)")?this.state.specialChar="r":this.stream.match("tm)")?this.state.specialChar="tm":this.stream.match("c)")&&(this.state.specialChar="c"),this.tokenStyles()
if("<"===t&&this.stream.match(/(\w+)[^>]+>[^<]+<\/\1>/))return this.tokenStylesWith(this.styleFor("html"))
if("?"===t&&this.stream.eat("?"))return this.togglePhraseModifier("cite",/^.*\?\?/)
if("="===t&&this.stream.eat("="))return this.togglePhraseModifier("notextile",/^.*==/)
if("-"===t)return this.togglePhraseModifier("deletion",/^.*-/)
if("+"===t)return this.togglePhraseModifier("addition",/^.*\+/)
if("~"===t)return this.togglePhraseModifier("sub",/^.*~/)
if("^"===t)return this.togglePhraseModifier("sup",/^.*\^/)
if("%"===t)return this.togglePhraseModifier("span",/^.*%/)
if("@"===t)return this.togglePhraseModifier("code",/^.*@/)
if("!"===t){var e=this.togglePhraseModifier("image",/^.*(?:\([^\)]+\))?!/)
return this.stream.match(/^:\S+/),e}return this.tokenStyles()},e.prototype.togglePhraseModifier=function(t,e){if(this.state[t]){var i=this.tokenStyles()
return this.state[t]=!1,i}return this.stream.match(e,!1)&&(this.state[t]=!0,this.setModeForNextToken(r.attributes)),this.tokenStyles()},e.prototype.tokenStyles=function(){var t=this.textileDisabled(),e=[]
return t||(this.state.layoutType&&e.push(this.styleFor(this.state.layoutType)),e=e.concat(this.activeStyles("addition","bold","cite","code","deletion","em","footCite","image","italic","link","span","specialChar","strong","sub","sup","table","tableHeading")),"header"===this.state.layoutType&&e.push(this.styleFor("header")+"-"+this.state.header),e.length?e.join(" "):null)},e.prototype.textileDisabled=function(){var t=this.state.layoutType
switch(t){case"notextile":case"code":case"pre":return this.styleFor(t)
default:return this.state.notextile?this.styleFor("notextile")+(t?" "+this.styleFor(t):""):null}},e.prototype.tokenStylesWith=function(t){var e,i=this.textileDisabled()
return i||(e=this.tokenStyles(),t?e?e+" "+t:t:e)},e.prototype.activeStyles=function(){var t,e=[]
for(t=0;t<arguments.length;++t)this.state[arguments[t]]&&e.push(this.styleFor(arguments[t]))
return e},e.prototype.blankLine=function(){var t,e=this.state.spanningLayout,i=this.state.layoutType
for(t in this.state)this.state.hasOwnProperty(t)&&delete this.state[t]
this.setModeForNextToken(r.newLayout),e&&(this.state.layoutType=i,this.state.spanningLayout=!0)},i.prototype.pattern=function(t){return this.cache[t]||this.createRe(t)},i.prototype.createRe=function(t){switch(t){case"drawTable":return this.makeRe("^",this.single.drawTable,"$")
case"html":return this.makeRe("^",this.single.html,"(?:",this.single.html,")*","$")
case"linkDefinition":return this.makeRe("^",this.single.linkDefinition,"$")
case"listLayout":return this.makeRe("^",this.single.list,this.pattern("allAttributes"),"*\\s+")
case"tableCellAttributes":return this.makeRe("^",this.choiceRe(this.single.tableCellAttributes,this.pattern("allAttributes")),"+\\.")
case"type":return this.makeRe("^",this.pattern("allTypes"))
case"typeLayout":return this.makeRe("^",this.pattern("allTypes"),this.pattern("allAttributes"),"*\\.\\.?","(\\s+|$)")
case"attributes":return this.makeRe("^",this.pattern("allAttributes"),"+")
case"allTypes":return this.choiceRe(this.single.div,this.single.foot,this.single.header,this.single.bc,this.single.bq,this.single.notextile,this.single.pre,this.single.table,this.single.para)
case"allAttributes":return this.choiceRe(this.attributes.selector,this.attributes.css,this.attributes.lang,this.attributes.align,this.attributes.pad)
default:return this.makeRe("^",this.single[t])}},i.prototype.makeRe=function(){var t,e,i=""
for(t=0;t<arguments.length;++t)e=arguments[t],i+="string"==typeof e?e:e.source
return new RegExp(i)},i.prototype.choiceRe=function(){var t,e=[arguments[0]]
for(t=1;t<arguments.length;++t)e[2*t-1]="|",e[2*t]=arguments[t]
return e.unshift("(?:"),e.push(")"),this.makeRe.apply(this,e)}
var r={newLayout:function(){if(this.check("typeLayout"))return this.state.spanningLayout=!1,this.execMode(r.blockType)
if(!this.textileDisabled()){if(this.check("listLayout"))return this.execMode(r.list)
if(this.check("drawTable"))return this.execMode(r.table)
if(this.check("linkDefinition"))return this.execMode(r.linkDefinition)
if(this.check("definitionList"))return this.execMode(r.definitionList)
if(this.check("html"))return this.execMode(r.html)}return this.execMode(r.text)},blockType:function(){var t,e
return this.state.layoutType=null,(t=this.eat("type"))?(e=t[0],(t=e.match(this.regExpFactory.pattern("header")))?(this.state.layoutType="header",this.state.header=parseInt(t[0][1])):e.match(this.regExpFactory.pattern("bq"))?this.state.layoutType="quote":e.match(this.regExpFactory.pattern("bc"))?this.state.layoutType="code":e.match(this.regExpFactory.pattern("foot"))?this.state.layoutType="footnote":e.match(this.regExpFactory.pattern("notextile"))?this.state.layoutType="notextile":e.match(this.regExpFactory.pattern("pre"))?this.state.layoutType="pre":e.match(this.regExpFactory.pattern("div"))?this.state.layoutType="div":e.match(this.regExpFactory.pattern("table"))&&(this.state.layoutType="table"),this.setModeForNextToken(r.attributes),this.tokenStyles()):this.execMode(r.text)},text:function(){if(this.eat("text"))return this.tokenStyles()
var t=this.stream.next()
return'"'===t?this.execMode(r.link):this.handlePhraseModifier(t)},attributes:function(){return this.setModeForNextToken(r.layoutLength),this.eat("attributes")?this.tokenStylesWith(this.styleFor("attributes")):this.tokenStyles()},layoutLength:function(){return this.stream.eat(".")&&this.stream.eat(".")&&(this.state.spanningLayout=!0),this.setModeForNextToken(r.text),this.tokenStyles()},list:function(){var t,e=this.eat("list")
return this.state.listDepth=e[0].length,t=(this.state.listDepth-1)%3,this.state.layoutType=t?1===t?"list2":"list3":"list1",this.setModeForNextToken(r.attributes),this.tokenStyles()},link:function(){return this.setModeForNextToken(r.text),this.eat("link")?(this.stream.match(/\S+/),this.tokenStylesWith(this.styleFor("link"))):this.tokenStyles()},linkDefinition:function(){return this.stream.skipToEnd(),this.tokenStylesWith(this.styleFor("linkDefinition"))},definitionList:function(){return this.eat("definitionList"),this.state.layoutType="definitionList",this.stream.match(/\s*$/)?this.state.spanningLayout=!0:this.setModeForNextToken(r.attributes),this.tokenStyles()},html:function(){return this.stream.skipToEnd(),this.tokenStylesWith(this.styleFor("html"))},table:function(){return this.state.layoutType="table",this.execMode(r.tableCell)},tableCell:function(){return this.eat("tableHeading")?this.state.tableHeading=!0:this.stream.eat("|"),this.setModeForNextToken(r.tableCellAttributes),this.tokenStyles()},tableCellAttributes:function(){return this.setModeForNextToken(r.tableText),this.eat("tableCellAttributes")?this.tokenStylesWith(this.styleFor("attributes")):this.tokenStyles()},tableText:function(){return this.eat("tableText")?this.tokenStyles():"|"===this.stream.peek()?(this.setModeForNextToken(r.tableCell),this.tokenStyles()):this.handlePhraseModifier(this.stream.next())}}
t.defineMode("textile",function(){var t=new i
return{startState:function(){return{mode:r.newLayout}},token:function(i,s){var r=new e(t,s,i)
return i.sol()&&r.startNewLine(),r.nextToken()},blankLine:function(i){new e(t,i).blankLine()}}}),t.defineMIME("text/x-textile","textile")})
