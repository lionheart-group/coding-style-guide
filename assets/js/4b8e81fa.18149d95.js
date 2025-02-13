"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([["4250"],{9673:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>s,toc:()=>a,contentTitle:()=>i});var t=JSON.parse('{"id":"fegg/library/model/methods/whereopen","title":"Model::whereOpen","description":"Add open bracket on Where query","source":"@site/docs/fegg/library/model/methods/whereopen.mdx","sourceDirName":"fegg/library/model/methods","slug":"/fegg/library/model/methods/whereopen","permalink":"/coding-style-guide/docs/fegg/library/model/methods/whereopen","draft":false,"unlisted":false,"editUrl":"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/model/methods/whereopen.mdx","tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"sidebar_position":15},"sidebar":"fegg","previous":{"title":"Model::where","permalink":"/coding-style-guide/docs/fegg/library/model/methods/where"},"next":{"title":"Model::whereClose","permalink":"/coding-style-guide/docs/fegg/library/model/methods/whereclose"}}'),d=r("5893"),o=r("65");let l={sidebar_position:15},i="Model::whereOpen",s={},a=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function c(e){let n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"modelwhereopen",children:"Model::whereOpen"})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"Add open bracket on Where query"}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-php",children:"public self Model::whereOpen( [ string $andOr = 'AND' ] )\n"})}),"\n",(0,d.jsx)(n.h2,{id:"arguments",children:"Arguments"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Data type"}),(0,d.jsx)(n.th,{children:"Default"}),(0,d.jsx)(n.th,{children:"Remarks"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"$andOr"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"'AND'"}),(0,d.jsx)(n.td,{children:"Condition chain from the previous query AND or OR"})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-php",metastring:'title="Controller"',children:"$model = new Model(false, array(\n  'table'   => 'cms_news',\n  'id'      => 'news_id',\n  'visible' => 'visible',\n));\n\n$model->where('news_id = ?', array(1));\n$model->whereOpen();\n$model->where('title = ?', array('foo'));\n$model->where('created_at <= ?', array('2021-01-01'), 'OR');\n$model->whereClose();\n\n// SELECT *\n// FROM cms_news\n// WHERE\n//   news_id = 1\n//   AND (\n//     title = 'foo'\n//     OR created_at <= '2021-01-01'\n//   )\n$records = $model->find();\n"})})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},65:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return l}});var t=r(7294);let d={},o=t.createContext(d);function l(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);