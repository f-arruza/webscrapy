(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("jinja2",function(){function e(e,a){var c=e.peek()
if(a.incomment)return e.skipTo("#}")?(e.eatWhile(/\#|}/),a.incomment=!1):e.skipToEnd(),"comment"
if(a.intag){if(a.operator){if(a.operator=!1,e.match(i))return"atom"
if(e.match(o))return"number"}if(a.sign){if(a.sign=!1,e.match(i))return"atom"
if(e.match(o))return"number"}if(a.instring)return c==a.instring&&(a.instring=!1),e.next(),"string"
if("'"==c||'"'==c)return a.instring=c,e.next(),"string"
if(e.match(a.intag+"}")||e.eat("-")&&e.match(a.intag+"}"))return a.intag=!1,"tag"
if(e.match(t))return a.operator=!0,"operator"
if(e.match(r))a.sign=!0
else if(e.eat(" ")||e.sol()){if(e.match(n))return"keyword"
if(e.match(i))return"atom"
if(e.match(o))return"number"
e.sol()&&e.next()}else e.next()
return"variable"}if(e.eat("{")){if(c=e.eat("#"))return a.incomment=!0,e.skipTo("#}")?(e.eatWhile(/\#|}/),a.incomment=!1):e.skipToEnd(),"comment"
if(c=e.eat(/\{|%/))return a.intag=c,"{"==c&&(a.intag="}"),e.eat("-"),"tag"}e.next()}var n=["and","as","block","endblock","by","cycle","debug","else","elif","extends","filter","endfilter","firstof","for","endfor","if","endif","ifchanged","endifchanged","ifequal","endifequal","ifnotequal","endifnotequal","in","include","load","not","now","or","parsed","regroup","reversed","spaceless","endspaceless","ssi","templatetag","openblock","closeblock","openvariable","closevariable","openbrace","closebrace","opencomment","closecomment","widthratio","url","with","endwith","get_current_language","trans","endtrans","noop","blocktrans","endblocktrans","get_available_languages","get_current_language_bidi","plural"],t=/^[+\-*&%=<>!?|~^]/,r=/^[:\[\(\{]/,i=["true","false"],o=/^(\d[+\-\*\/])?\d+(\.\d+)?/
return n=new RegExp("(("+n.join(")|(")+"))\\b"),i=new RegExp("(("+i.join(")|(")+"))\\b"),{startState:function(){return{tokenize:e}},token:function(e,n){return n.tokenize(e,n)}}})})
