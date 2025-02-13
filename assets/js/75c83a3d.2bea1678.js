"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([["6231"],{1363:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>l,metadata:()=>i,assets:()=>d,toc:()=>c,contentTitle:()=>r});var i=JSON.parse('{"id":"fegg/basic/templates/methods/fetchtemplate","title":"Application::fetchTemplate","description":"Return compiled template into a string","source":"@site/docs/fegg/basic/templates/methods/fetchtemplate.mdx","sourceDirName":"fegg/basic/templates/methods","slug":"/fegg/basic/templates/methods/fetchtemplate","permalink":"/coding-style-guide/docs/fegg/basic/templates/methods/fetchtemplate","draft":false,"unlisted":false,"editUrl":"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/basic/templates/methods/fetchtemplate.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"fegg","previous":{"title":"Application::displayTemplate","permalink":"/coding-style-guide/docs/fegg/basic/templates/methods/displaytemplate"},"next":{"title":"Application::fetchPage","permalink":"/coding-style-guide/docs/fegg/basic/templates/methods/fetchpage"}}'),s=n("5893"),a=n("65");let l={sidebar_position:2},r="Application::fetchTemplate",d={},c=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function o(e){let t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"applicationfetchtemplate",children:"Application::fetchTemplate"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Return compiled template into a string"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",children:"public string Application::fetchTemplate( string $template, [ array $assignedValue = array() ] )\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Returns the ",(0,s.jsx)(t.a,{href:"/docs/fegg/basic/templates/methods/displaytemplate",children:"Application::displayTemplate"})," into string without displaying the output."]}),"\n",(0,s.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Data type"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Remarks"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"$template"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Template file name"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"$assignedValue"}),(0,s.jsx)(t.td,{children:"array"}),(0,s.jsx)(t.td,{children:"array()"}),(0,s.jsx)(t.td,{children:"Arguments for template"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",children:"$content = $this->fetchTemplate( 'foo/bar' );\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This assigned the ",(0,s.jsx)(t.a,{href:"/docs/fegg/basic/templates/methods/displaytemplate",children:"Application::displayTemplate"})," to $content variable from compiled template."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"You should not include the \u201C.tpl\u201D extension in the parameter."})})]})}function p(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},65:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return l}});var i=n(7294);let s={},a=i.createContext(s);function l(e){let t=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);