(function(){function t(t){test.mode(t,e,Array.prototype.slice.call(arguments,1))}var e=CodeMirror.getMode({tabSize:4,indentUnit:2},"haml")
t("elementName","[tag %h1] Hey There"),t("oneElementPerLine","[tag %h1] Hey There %h2"),t("idSelector","[tag %h1][attribute #test] Hey There"),t("classSelector","[tag %h1][attribute .hello] Hey There"),t("docType","[tag !!! XML]"),t("comment","[comment / Hello WORLD]"),t("notComment","[tag %h1] This is not a / comment "),t("attributes",'[tag %a]([variable title][operator =][string "test"]){[atom :title] [operator =>] [string "test"]}'),t("htmlCode","[tag&bracket <][tag h1][tag&bracket >]Title[tag&bracket </][tag h1][tag&bracket >]"),t("rubyBlock","[operator =][variable-2 @item]"),t("selectorRubyBlock","[tag %a.selector=] [variable-2 @item]"),t("nestedRubyBlock","[tag %a]",'   [operator =][variable puts] [string "test"]'),t("multilinePlaintext","[tag %p]","  Hello,","  World"),t("multilineRuby","[tag %p]","  [comment -# this is a comment]","     [comment and this is a comment too]","  Date/Time","  [operator -] [variable now] [operator =] [tag DateTime][operator .][property now]","  [tag %strong=] [variable now]",'  [operator -] [keyword if] [variable now] [operator >] [tag DateTime][operator .][property parse]([string "December 31, 2006"])','     [operator =][string "Happy"]','     [operator =][string "Belated"]','     [operator =][string "Birthday"]'),t("multilineComment","[comment /]","  [comment Multiline]","  [comment Comment]"),t("hamlComment","[comment -# this is a comment]"),t("multilineHamlComment","[comment -# this is a comment]","   [comment and this is a comment too]"),t("multilineHTMLComment","[comment \x3c!--]","  [comment what a comment]","  [comment --\x3e]"),t("hamlAfterRubyTag","[attribute .block]","  [tag %strong=] [variable now]","  [attribute .test]","     [operator =][variable now]","  [attribute .right]"),t("stretchedRuby",'[operator =] [variable puts] [string "Hello"],','   [string "World"]'),t("interpolationInHashAttribute",'[tag %div]{[atom :id] [operator =>] [string "#{][variable test][string }_#{][variable ting][string }"]} test'),t("interpolationInHTMLAttribute",'[tag %div]([variable title][operator =][string "#{][variable test][string }_#{][variable ting]()[string }"]) Test')})()
