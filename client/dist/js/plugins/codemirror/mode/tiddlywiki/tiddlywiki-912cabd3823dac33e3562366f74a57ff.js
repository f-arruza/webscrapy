(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("tiddlywiki",function(){function e(e,t,r){return t.tokenize=r,r(e,t)}function t(e,t,r){return l=e,m=r,t}function r(r,l){var m,d=r.sol()
if(l.block=!1,m=r.peek(),d&&/[<\/\*{}\-]/.test(m)){if(r.match($))return l.block=!0,e(r,l,o)
if(r.match(x))return t("quote","quote")
if(r.match(b)||r.match(p))return t("code","comment")
if(r.match(g)||r.match(v)||r.match(y)||r.match(w))return t("code","comment")
if(r.match(k))return t("hr","hr")}if(m=r.next(),d&&/[\/\*!#;:>|]/.test(m)){if("!"==m)return r.skipToEnd(),t("header","header")
if("*"==m)return r.eatWhile("*"),t("list","comment")
if("#"==m)return r.eatWhile("#"),t("list","comment")
if(";"==m)return r.eatWhile(";"),t("list","comment")
if(":"==m)return r.eatWhile(":"),t("list","comment")
if(">"==m)return r.eatWhile(">"),t("quote","quote")
if("|"==m)return t("table","header")}if("{"==m&&r.match(/\{\{/))return e(r,l,o)
if(/[hf]/i.test(m)&&/[ti]/i.test(r.peek())&&r.match(/\b(ttps?|tp|ile):\/\/[\-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/i))return t("link","link")
if('"'==m)return t("string","string")
if("~"==m)return t("text","brace")
if(/[\[\]]/.test(m)&&r.peek()==m)return r.next(),t("brace","brace")
if("@"==m)return r.eatWhile(h),t("link","link")
if(/\d/.test(m))return r.eatWhile(/\d/),t("number","number")
if("/"==m){if(r.eat("%"))return e(r,l,n)
if(r.eat("/"))return e(r,l,a)}if("_"==m&&r.eat("_"))return e(r,l,u)
if("-"==m&&r.eat("-")){if(" "!=r.peek())return e(r,l,c)
if(" "==r.peek())return t("text","brace")}if("'"==m&&r.eat("'"))return e(r,l,i)
if("<"!=m)return t(m)
if(r.eat("<"))return e(r,l,f)
r.eatWhile(/[\w\$_]/)
var z=r.current(),W=s.propertyIsEnumerable(z)&&s[z]
return W?t(W.type,W.style,z):t("text",null,z)}function n(e,n){for(var i,o=!1;i=e.next();){if("/"==i&&o){n.tokenize=r
break}o="%"==i}return t("comment","comment")}function i(e,n){for(var i,o=!1;i=e.next();){if("'"==i&&o){n.tokenize=r
break}o="'"==i}return t("text","strong")}function o(e,n){var i=n.block
return i&&e.current()?t("code","comment"):!i&&e.match(W)?(n.tokenize=r,t("code","comment")):i&&e.sol()&&e.match(z)?(n.tokenize=r,t("code","comment")):(e.next(),t("code","comment"))}function a(e,n){for(var i,o=!1;i=e.next();){if("/"==i&&o){n.tokenize=r
break}o="/"==i}return t("text","em")}function u(e,n){for(var i,o=!1;i=e.next();){if("_"==i&&o){n.tokenize=r
break}o="_"==i}return t("text","underlined")}function c(e,n){for(var i,o=!1;i=e.next();){if("-"==i&&o){n.tokenize=r
break}o="-"==i}return t("text","strikethrough")}function f(e,n){var i,o,a
return"<<"==e.current()?t("brace","macro"):(i=e.next())?">"==i&&">"==e.peek()?(e.next(),n.tokenize=r,t("brace","macro")):(e.eatWhile(/[\w\$_]/),o=e.current(),a=d.propertyIsEnumerable(o)&&d[o],a?t(a.type,a.style,o):t("macro",null,o)):(n.tokenize=r,t(i))}var l,m,s={},d=function(){function e(e){return{type:e,style:"macro"}}return{allTags:e("allTags"),closeAll:e("closeAll"),list:e("list"),newJournal:e("newJournal"),newTiddler:e("newTiddler"),permaview:e("permaview"),saveChanges:e("saveChanges"),search:e("search"),slider:e("slider"),tabs:e("tabs"),tag:e("tag"),tagging:e("tagging"),tags:e("tags"),tiddler:e("tiddler"),timeline:e("timeline"),today:e("today"),version:e("version"),option:e("option"),with:e("with"),filter:e("filter")}}(),h=/[\w_\-]/i,k=/^\-\-\-\-+$/,b=/^\/\*\*\*$/,p=/^\*\*\*\/$/,x=/^<<<$/,g=/^\/\/\{\{\{$/,v=/^\/\/\}\}\}$/,y=/^<!--\{\{\{-->$/,w=/^<!--\}\}\}-->$/,$=/^\{\{\{$/,z=/^\}\}\}$/,W=/.*?\}\}\}/
return{startState:function(){return{tokenize:r,indented:0,level:0}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)},electricChars:""}}),e.defineMIME("text/x-tiddlywiki","tiddlywiki")})
