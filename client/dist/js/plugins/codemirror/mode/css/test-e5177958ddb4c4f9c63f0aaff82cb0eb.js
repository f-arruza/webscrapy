(function(){function o(o){test.mode(o,r,Array.prototype.slice.call(arguments,1))}var r=CodeMirror.getMode({indentUnit:2},"css")
o("atMediaUnknownType","[def @media] [attribute screen] [keyword and] [error foobarhello] { }"),o("atMediaUnknownProperty","[def @media] [attribute screen] [keyword and] ([error foobarhello]) { }"),o("atMediaMaxWidthNested","[def @media] [attribute screen] [keyword and] ([property max-width]: [number 25px]) { [tag foo] { } }"),o("tagSelector","[tag foo] { }"),o("classSelector","[qualifier .foo-bar_hello] { }"),o("idSelector","[builtin #foo] { [error #foo] }"),o("tagSelectorUnclosed","[tag foo] { [property margin]: [number 0] } [tag bar] { }"),o("tagStringNoQuotes","[tag foo] { [property font-family]: [variable hello] [variable world]; }"),o("tagStringDouble",'[tag foo] { [property font-family]: [string "hello world"]; }'),o("tagStringSingle","[tag foo] { [property font-family]: [string 'hello world']; }"),o("tagColorKeyword","[tag foo] {","  [property color]: [keyword black];","  [property color]: [keyword navy];","  [property color]: [keyword yellow];","}"),o("tagColorHex3","[tag foo] { [property background]: [atom #fff]; }"),o("tagColorHex6","[tag foo] { [property background]: [atom #ffffff]; }"),o("tagColorHex4","[tag foo] { [property background]: [atom&error #ffff]; }"),o("tagColorHexInvalid","[tag foo] { [property background]: [atom&error #ffg]; }"),o("tagNegativeNumber","[tag foo] { [property margin]: [number -5px]; }"),o("tagPositiveNumber","[tag foo] { [property padding]: [number 5px]; }"),o("tagVendor","[tag foo] { [meta -foo-][property box-sizing]: [meta -foo-][atom border-box]; }"),o("tagBogusProperty","[tag foo] { [property&error barhelloworld]: [number 0]; }"),o("tagTwoProperties","[tag foo] { [property margin]: [number 0]; [property padding]: [number 0]; }"),o("tagTwoPropertiesURL","[tag foo] { [property background]: [atom url]([string //example.com/foo.png]); [property padding]: [number 0]; }"),o("commentSGML","[comment \x3c!--comment--\x3e]"),o("commentSGML2","[comment \x3c!--comment]","[comment --\x3e] [tag div] {}"),o("indent_tagSelector","[tag strong], [tag em] {","  [property background]: [atom rgba](","    [number 255], [number 255], [number 0], [number .2]","  );","}"),o("indent_atMedia","[def @media] {","  [tag foo] {","    [property color]:","      [keyword yellow];","  }","}"),o("indent_comma","[tag foo] {","  [property font-family]: [variable verdana],","    [atom sans-serif];","}"),o("indent_parentheses","[tag foo]:[variable-3 before] {","  [property background]: [atom url](","[string     blahblah]","[string     etc]","[string   ]) [keyword !important];","}"),o("font_face","[def @font-face] {","  [property font-family]: [string 'myfont'];","  [error nonsense]: [string 'abc'];","  [property src]: [atom url]([string http://blah]),","    [atom url]([string http://foo]);","}"),o("empty_url","[def @import] [tag url]() [tag screen];"),o("parens","[qualifier .foo] {","  [property background-image]: [variable fade]([atom #000], [number 20%]);","  [property border-image]: [variable linear-gradient](","    [atom to] [atom bottom],","    [variable fade]([atom #000], [number 20%]) [number 0%],","    [variable fade]([atom #000], [number 20%]) [number 100%]","  );","}")})()