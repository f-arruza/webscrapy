(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("solr",function(){function e(e){return parseFloat(e,10).toString()===e}function t(e){return function(t,n){for(var r,i=!1;null!=(r=t.next())&&(r!=e||i);)i=!i&&"\\"==r
return i||(n.tokenize=o),"string"}}function n(e){return function(t,n){var r="operator"
return"+"==e?r+=" positive":"-"==e?r+=" negative":"|"==e?t.eat(/\|/):"&"==e?t.eat(/\&/):"^"==e&&(r+=" boost"),n.tokenize=o,r}}function r(t){return function(n,r){for(var u=t;(t=n.peek())&&null!=t.match(i);)u+=n.next()
return r.tokenize=o,f.test(u)?"operator":e(u)?"number":":"==n.peek()?"field":"string"}}function o(e,f){var c=e.next()
return'"'==c?f.tokenize=t(c):u.test(c)?f.tokenize=n(c):i.test(c)&&(f.tokenize=r(c)),f.tokenize!=o?f.tokenize(e,f):null}var i=/[^\s\|\!\+\-\*\?\~\^\&\:\(\)\[\]\{\}\^\"\\]/,u=/[\|\!\+\-\*\?\~\^\&]/,f=/^(OR|AND|NOT|TO)$/i
return{startState:function(){return{tokenize:o}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)}}}),e.defineMIME("text/x-solr","solr")})
