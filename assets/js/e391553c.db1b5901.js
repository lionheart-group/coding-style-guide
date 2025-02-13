"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([["9137"],{5550:function(e,t,r){r.r(t),r.d(t,{default:()=>u,frontMatter:()=>i,metadata:()=>n,assets:()=>o,toc:()=>c,contentTitle:()=>s});var n=JSON.parse('{"id":"fegg/library/model/methods/current","title":"Model::current","description":"Set Current Page Parameter","source":"@site/docs/fegg/library/model/methods/current.mdx","sourceDirName":"fegg/library/model/methods","slug":"/fegg/library/model/methods/current","permalink":"/coding-style-guide/docs/fegg/library/model/methods/current","draft":false,"unlisted":false,"editUrl":"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/model/methods/current.mdx","tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"sidebar_position":13},"sidebar":"fegg","previous":{"title":"Model::listMax","permalink":"/coding-style-guide/docs/fegg/library/model/methods/listmax"},"next":{"title":"Model::where","permalink":"/coding-style-guide/docs/fegg/library/model/methods/where"}}'),d=r("5893"),l=r("65");let i={sidebar_position:13},s="Model::current",o={},c=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function a(e){let t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.header,{children:(0,d.jsx)(t.h1,{id:"modelcurrent",children:"Model::current"})}),"\n",(0,d.jsxs)(t.blockquote,{children:["\n",(0,d.jsx)(t.p,{children:"Set Current Page Parameter"}),"\n"]}),"\n",(0,d.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-php",children:"public self Model::current( [ number $current = 1 ] )\n"})}),"\n",(0,d.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Data type"}),(0,d.jsx)(t.th,{children:"Default"}),(0,d.jsx)(t.th,{children:"Remarks"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"$current"}),(0,d.jsx)(t.td,{children:"number"}),(0,d.jsx)(t.td,{children:"1"}),(0,d.jsx)(t.td,{children:"Current page number"})]})})]}),"\n",(0,d.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-php",metastring:'title="Controller"',children:"$model = new Model(false, array(\n    'table'   => 'cms_news',\n    'id'      => 'news_id',\n    'visible' => 'visible',\n));\n\n// Get 2nd page's 5 records\n$records = $model->listMax(5)->current(2)->find();\n"})})]})}function u(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},65:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return i}});var n=r(7294);let d={},l=n.createContext(d);function i(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);