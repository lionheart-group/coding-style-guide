"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[107],{1642:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>a});var i=t(5893),r=t(1151);const d={sidebar_position:18},o="Model::havingOpen",s={id:"fegg/library/model/methods/havingopen",title:"Model::havingOpen",description:"Add open bracket on Having query",source:"@site/docs/fegg/library/model/methods/havingopen.mdx",sourceDirName:"fegg/library/model/methods",slug:"/fegg/library/model/methods/havingopen",permalink:"/coding-style-guide/docs/fegg/library/model/methods/havingopen",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/model/methods/havingopen.mdx",tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"fegg",previous:{title:"Model::having",permalink:"/coding-style-guide/docs/fegg/library/model/methods/having"},next:{title:"Model::havingClose",permalink:"/coding-style-guide/docs/fegg/library/model/methods/havingclose"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function c(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"modelhavingopen",children:"Model::havingOpen"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Add open bracket on Having query"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"public self Model::havingOpen( [ string $andOr = 'AND' ] )\n"})}),"\n",(0,i.jsx)(n.h2,{id:"arguments",children:"Arguments"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Data type"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Remarks"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"$andOr"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"'AND'"}),(0,i.jsx)(n.td,{children:"Condition chain from the previous query AND or OR"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",metastring:'title="Controller"',children:"$model = new Model(false, array(\n  'table'   => 'cms_news',\n  'id'      => 'news_id',\n  'visible' => 'visible',\n));\n\n$model->having('news_id = ?', array(1));\n$model->havingOpen();\n$model->having('title = ?', array('foo'));\n$model->having('created_at <= ?', array('2021-01-01'), 'OR');\n$model->havingClose();\n\n// SELECT *\n// FROM cms_news\n// HAVING\n//   news_id = 1\n//   AND (\n//     title = 'foo'\n//     OR created_at <= '2021-01-01'\n//   )\n$records = $model->find();\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var i=t(7294);const r={},d=i.createContext(r);function o(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);