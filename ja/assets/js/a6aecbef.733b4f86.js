"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[9631],{1162:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var t=r(5893),i=r(1151);const d={sidebar_position:17},s="Model::having",l={id:"fegg/library/model/methods/having",title:"Model::having",description:"Set Having Parameter",source:"@site/docs/fegg/library/model/methods/having.mdx",sourceDirName:"fegg/library/model/methods",slug:"/fegg/library/model/methods/having",permalink:"/coding-style-guide/ja/docs/fegg/library/model/methods/having",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/model/methods/having.mdx",tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"fegg",previous:{title:"Model::whereClose",permalink:"/coding-style-guide/ja/docs/fegg/library/model/methods/whereclose"},next:{title:"Model::havingOpen",permalink:"/coding-style-guide/ja/docs/fegg/library/model/methods/havingopen"}},a={},o=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2},{value:"Complex HAVING query",id:"complex-having-query",level:3}];function c(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"modelhaving",children:"Model::having"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Set Having Parameter"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"public self Model::having( string $query, [ array $data = [], string $andOr = 'AND' ] )\n"})}),"\n",(0,t.jsx)(n.h2,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Data type"}),(0,t.jsx)(n.th,{children:"Default"}),(0,t.jsx)(n.th,{children:"Remarks"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$query"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Having query string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$data"}),(0,t.jsx)(n.td,{children:"array"}),(0,t.jsx)(n.td,{children:"[]"}),(0,t.jsx)(n.td,{children:"Having query parameter"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$andOr"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"'AND'"}),(0,t.jsx)(n.td,{children:"Condition chain from the previous query AND or OR"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",metastring:'title="Controller"',children:"$model = new Model(false, array(\n  'table'   => 'cms_news',\n  'id'      => 'news_id',\n  'visible' => 'visible',\n));\n\n$model->having('news_id = ?', array(1));\n\n// Get filtered records\n// SELECT * FROM cms_news HAVING news_id = 1\n$records = $model->find();\n"})}),"\n",(0,t.jsx)(n.h3,{id:"complex-having-query",children:"Complex HAVING query"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",metastring:'title="Controller"',children:"$model = new Model(false, array(\n  'table'   => 'cms_news',\n  'id'      => 'news_id',\n  'visible' => 'visible',\n));\n\n$model->having('news_id = ?', array(1));\n$model->havingOpen();\n$model->having('title = ?', array('foo'));\n$model->having('created_at <= ?', array('2021-01-01'), 'OR');\n$model->havingClose();\n\n// SELECT *\n// FROM cms_news\n// HAVING\n//   news_id = 1\n//   AND (\n//     title = 'foo'\n//     OR created_at <= '2021-01-01'\n//   )\n$records = $model->find();\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>s});var t=r(7294);const i={},d=t.createContext(i);function s(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);