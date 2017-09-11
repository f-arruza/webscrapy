(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("scheme",function(){function e(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0
return t}function t(e,t,n){this.indent=e,this.type=t,this.prev=n}function n(e,n,r){e.indentStack=new t(n,r,e.indentStack)}function r(e){e.indentStack=e.indentStack.prev}function i(e){return e.match(s)}function a(e){return e.match(m)}function c(e,t){return!0===t&&e.backUp(1),e.match(p)}function o(e){return e.match(u)}var l=e("λ case-lambda call/cc class define-class exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt #f floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? #t tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?"),d=e("define let letrec let* lambda"),s=new RegExp(/^(?:[-+]i|[-+][01]+#*(?:\/[01]+#*)?i|[-+]?[01]+#*(?:\/[01]+#*)?@[-+]?[01]+#*(?:\/[01]+#*)?|[-+]?[01]+#*(?:\/[01]+#*)?[-+](?:[01]+#*(?:\/[01]+#*)?)?i|[-+]?[01]+#*(?:\/[01]+#*)?)(?=[()\s;"]|$)/i),m=new RegExp(/^(?:[-+]i|[-+][0-7]+#*(?:\/[0-7]+#*)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?@[-+]?[0-7]+#*(?:\/[0-7]+#*)?|[-+]?[0-7]+#*(?:\/[0-7]+#*)?[-+](?:[0-7]+#*(?:\/[0-7]+#*)?)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?)(?=[()\s;"]|$)/i),u=new RegExp(/^(?:[-+]i|[-+][\da-f]+#*(?:\/[\da-f]+#*)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?@[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?[-+](?:[\da-f]+#*(?:\/[\da-f]+#*)?)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?)(?=[()\s;"]|$)/i),p=new RegExp(/^(?:[-+]i|[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)i|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)@[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)?i|(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*))(?=[()\s;"]|$)/i)
return{startState:function(){return{indentStack:null,indentation:0,mode:!1,sExprComment:!1}},token:function(e,t){if(null==t.indentStack&&e.sol()&&(t.indentation=e.indentation()),e.eatSpace())return null
var s=null
switch(t.mode){case"string":for(var m,u=!1;null!=(m=e.next());){if('"'==m&&!u){t.mode=!1
break}u=!u&&"\\"==m}s="string"
break
case"comment":for(var m,p=!1;null!=(m=e.next());){if("#"==m&&p){t.mode=!1
break}p="|"==m}s="comment"
break
case"s-expr-comment":if(t.mode=!1,"("!=e.peek()&&"["!=e.peek()){e.eatWhile(/[^\/s]/),s="comment"
break}t.sExprComment=0
default:var f=e.next()
if('"'==f)t.mode="string",s="string"
else if("'"==f)s="atom"
else if("#"==f)if(e.eat("|"))t.mode="comment",s="comment"
else if(e.eat(/[tf]/i))s="atom"
else if(e.eat(";"))t.mode="s-expr-comment",s="comment"
else{var h=null,g=!1,b=!0
e.eat(/[ei]/i)?g=!0:e.backUp(1),e.match(/^#b/i)?h=i:e.match(/^#o/i)?h=a:e.match(/^#x/i)?h=o:e.match(/^#d/i)?h=c:e.match(/^[-+0-9.]/,!1)?(b=!1,h=c):g||e.eat("#"),null!=h&&(b&&!g&&e.match(/^#[ei]/i),h(e)&&(s="number"))}else if(/^[-+0-9.]/.test(f)&&c(e,!0))s="number"
else if(";"==f)e.skipToEnd(),s="comment"
else if("("==f||"["==f){for(var x,v="",k=e.column();null!=(x=e.eat(/[^\s\(\[\;\)\]]/));)v+=x
v.length>0&&d.propertyIsEnumerable(v)?n(t,k+2,f):(e.eatSpace(),e.eol()||";"==e.peek()?n(t,k+1,f):n(t,k+e.current().length,f)),e.backUp(e.current().length-1),"number"==typeof t.sExprComment&&t.sExprComment++,s="bracket"}else")"==f||"]"==f?(s="bracket",null!=t.indentStack&&t.indentStack.type==(")"==f?"(":"[")&&(r(t),"number"==typeof t.sExprComment&&0==--t.sExprComment&&(s="comment",t.sExprComment=!1))):(e.eatWhile(/[\w\$_\-!$%&*+\.\/:<=>?@\^~]/),s=l&&l.propertyIsEnumerable(e.current())?"builtin":"variable")}return"number"==typeof t.sExprComment?"comment":s},indent:function(e){return null==e.indentStack?e.indentation:e.indentStack.indent},lineComment:";;"}}),e.defineMIME("text/x-scheme","scheme")})
