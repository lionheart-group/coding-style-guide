"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([["6597"],{5832:function(e,t,i){i.r(t),i.d(t,{default:()=>p,frontMatter:()=>r,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>a});var s=JSON.parse('{"id":"fegg/basic/templates/helpers/setsiteinfo","title":"Application::setSiteinfo","description":"Set website information (ex. title, description, keywords)","source":"@site/docs/fegg/basic/templates/helpers/setsiteinfo.mdx","sourceDirName":"fegg/basic/templates/helpers","slug":"/fegg/basic/templates/helpers/setsiteinfo","permalink":"/coding-style-guide/ja/docs/fegg/basic/templates/helpers/setsiteinfo","draft":false,"unlisted":false,"editUrl":"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/basic/templates/helpers/setsiteinfo.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"fegg","previous":{"title":"Application::displayPage","permalink":"/coding-style-guide/ja/docs/fegg/basic/templates/methods/displaypage"},"next":{"title":"Application::setHidden","permalink":"/coding-style-guide/ja/docs/fegg/basic/templates/helpers/sethidden"}}'),n=i("5893"),l=i("65");let r={sidebar_position:1},a="Application::setSiteinfo",d={},o=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function c(e){let t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"applicationsetsiteinfo",children:"Application::setSiteinfo"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Set website information (ex. title, description, keywords)"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:"public void Application::setSiteinfo( string $id, string $value )\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Set website information (ex. title, description, keywords). Assigned values will be stored in ",(0,n.jsx)(t.code,{children:"$site"})," variable that you can use in template."]}),"\n",(0,n.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Data type"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Remarks"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"$id"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Key"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"$value"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Value"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",metastring:'title="Controller"',children:"$this->setSiteinfo( 'title', 'Site Title' );\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",metastring:'title="Template"',children:"<title>{{ $site.title }}</title>\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",metastring:'title="Output"',children:"<title>Site Title</title>\n"})})]})}function p(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},65:function(e,t,i){i.d(t,{Z:function(){return a},a:function(){return r}});var s=i(7294);let n={},l=s.createContext(n);function r(e){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);