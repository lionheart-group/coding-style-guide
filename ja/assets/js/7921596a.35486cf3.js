"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([["1295"],{6077:function(e,t,l){l.r(t),l.d(t,{default:()=>c,frontMatter:()=>s,metadata:()=>a,assets:()=>d,toc:()=>o,contentTitle:()=>r});var a=JSON.parse('{"id":"fegg/basic/templates/methods/displaytemplate","title":"Application::displayTemplate","description":"Display compiled template","source":"@site/docs/fegg/basic/templates/methods/displaytemplate.mdx","sourceDirName":"fegg/basic/templates/methods","slug":"/fegg/basic/templates/methods/displaytemplate","permalink":"/coding-style-guide/ja/docs/fegg/basic/templates/methods/displaytemplate","draft":false,"unlisted":false,"editUrl":"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/basic/templates/methods/displaytemplate.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"fegg","previous":{"title":"About Template","permalink":"/coding-style-guide/ja/docs/fegg/basic/templates/"},"next":{"title":"Application::fetchTemplate","permalink":"/coding-style-guide/ja/docs/fegg/basic/templates/methods/fetchtemplate"}}'),n=l("5893"),i=l("65");let s={sidebar_position:1},r="Application::displayTemplate",d={},o=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function p(e){let t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"applicationdisplaytemplate",children:"Application::displayTemplate"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Display compiled template"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:"public void Application::displayTemplate( string $template, [ array $assignedValue = array() ] )\n"})}),"\n",(0,n.jsx)(t.p,{children:"Read template file -> compile -> display output."}),"\n",(0,n.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Data type"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Remarks"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"$template"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Template file name"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"$assignedValue"}),(0,n.jsx)(t.td,{children:"array"}),(0,n.jsx)(t.td,{children:"array()"}),(0,n.jsx)(t.td,{children:"Arguments for template"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(t.p,{children:["This reads the ",(0,n.jsx)(t.strong,{children:"bar.tpl"})," template file in ",(0,n.jsx)(t.strong,{children:"code/template/foo/bar.tpl"}),", compile it and display the compiled output."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",metastring:'title="code/application/Foo.php"',children:"<?php\n\nclass Foo extends Application\n{\n    function bar(){\n        $this->displayTemplate( 'foo/bar' );\n    }\n}\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"You should not include the \u201C.tpl\u201D extension in the parameter."})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",metastring:'title="code/template/foo/bar.tpl"',children:"<p>Variable : {{ $page.baz }}</p>\n<p>If else : {{ if true }}True{{ end }}</p>\n<p>Loop  : {{ foreach $array as $k => $v }}{{ end foreach }}</p>\n<p>Template rule  : {{ follow Fegg template rules }}</p>\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",metastring:'title="Output"',children:"Variable :\nIf else : True\nLoop  :\nTemplate rule  : {{ follow Fegg template rules }}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Notice here the codes inside the ",(0,n.jsx)(t.code,{children:"{{}}"})," in first 3 lines of paragraph in template file. In Fegg, these are the examples and valid syntax of application code following the ",(0,n.jsx)(t.a,{href:"/docs/fegg/basic/templates#template-rules",children:"Template rules"}),", otherwise it will return as display or parse an error."]})]})}function c(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},65:function(e,t,l){l.d(t,{Z:function(){return r},a:function(){return s}});var a=l(7294);let n={},i=a.createContext(n);function s(e){let t=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);