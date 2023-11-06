"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[4052],{2094:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=o(5893),t=o(1151);const l={sidebar_position:16},s="Model::whereClose",i={id:"fegg/library/model/methods/whereclose",title:"Model::whereClose",description:"Add close bracket on Where query",source:"@site/docs/fegg/library/model/methods/whereclose.mdx",sourceDirName:"fegg/library/model/methods",slug:"/fegg/library/model/methods/whereclose",permalink:"/coding-style-guide/docs/fegg/library/model/methods/whereclose",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/model/methods/whereclose.mdx",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"fegg",previous:{title:"Model::whereOpen",permalink:"/coding-style-guide/docs/fegg/library/model/methods/whereopen"},next:{title:"Model::having",permalink:"/coding-style-guide/docs/fegg/library/model/methods/having"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}];function a(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"modelwhereclose",children:"Model::whereClose"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Add close bracket on Where query"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"public self Model::whereClose()\n"})}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",metastring:'title="Controller"',children:"$model = new Model(false, array(\n  'table'   => 'cms_news',\n  'id'      => 'news_id',\n  'visible' => 'visible',\n));\n\n//\n$model->where('news_id = ?', array(1));\n$model->whereOpen();\n$model->where('title = ?', array('foo'));\n$model->where('created_at <= ?', array('2021-01-01'), 'OR');\n$model->whereClose();\n\n// SELECT *\n// FROM cms_news\n// WHERE\n//   news_id = 1\n//   AND (\n//     title = 'foo'\n//     OR created_at <= '2021-01-01'\n//   )\n$records = $model->find();\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>s});var r=o(7294);const t={},l=r.createContext(t);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);