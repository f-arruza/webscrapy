(function(){function o(o){test.mode(o,r,Array.prototype.slice.call(arguments,1))}var r=CodeMirror.getMode({indentUnit:2},"ruby")
o("divide_equal_operator","[variable bar] [operator /=] [variable foo]"),o("divide_equal_operator_no_spacing","[variable foo][operator /=][number 42]")})()
