"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([["1346"],{9778:function(e,t,n){n.r(t),n.d(t,{default:()=>m,frontMatter:()=>a,metadata:()=>d,assets:()=>s,toc:()=>o,contentTitle:()=>l});var d=JSON.parse('{"id":"fegg/library/model/methods/setbindparam","title":"Model::setBindParam","description":"Set Bind Parameter types","source":"@site/docs/fegg/library/model/methods/setbindparam.mdx","sourceDirName":"fegg/library/model/methods","slug":"/fegg/library/model/methods/setbindparam","permalink":"/coding-style-guide/docs/fegg/library/model/methods/setbindparam","draft":false,"unlisted":false,"editUrl":"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/model/methods/setbindparam.mdx","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"fegg","previous":{"title":"Model::getVisible","permalink":"/coding-style-guide/docs/fegg/library/model/methods/getvisible"},"next":{"title":"Model::addBindParam","permalink":"/coding-style-guide/docs/fegg/library/model/methods/addbindparam"}}'),r=n("5893"),i=n("65");let a={sidebar_position:8},l="Model::setBindParam",s={},o=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function c(e){let t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"modelsetbindparam",children:"Model::setBindParam"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Set Bind Parameter types"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",children:"public self Model::setBindParam( array $bind )\n"})}),"\n",(0,r.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Data type"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Remarks"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"$bind"}),(0,r.jsx)(t.td,{children:"array"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Bind Parameter types"})]})})]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Please see ",(0,r.jsx)(t.a,{href:"/docs/fegg/library/model/methods/addbindparam",children:"addBindParam"})," about allowed bind type"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",metastring:'title="Controller"',children:"$model = new Model();\n$model->setBindParam(array(\n    'news_id'   => 'INTEGER',\n    'image_id'  => 'INTEGER',\n    'file_id'   => 'INTEGER',\n    'post_date' => 'DATETIME',\n));\n\n// Same with the following\n$model = new Model(false, array(\n    'bind'    => array(\n        'news_id'   => 'INTEGER',\n        'image_id'  => 'INTEGER',\n        'file_id'   => 'INTEGER',\n        'post_date' => 'DATETIME',\n    ),\n));\n"})})]})}function m(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},65:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return a}});var d=n(7294);let r={},i=d.createContext(r);function a(e){let t=d.useContext(i);return d.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),d.createElement(i.Provider,{value:t},e.children)}}}]);