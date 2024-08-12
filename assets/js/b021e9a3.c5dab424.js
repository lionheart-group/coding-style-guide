"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[749],{5650:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=t(5893),r=t(1151);const s={sidebar_position:43},d="Model::reset",l={id:"fegg/library/model/methods/reset",title:"Model::reset",description:"Reset Model",source:"@site/docs/fegg/library/model/methods/reset.mdx",sourceDirName:"fegg/library/model/methods",slug:"/fegg/library/model/methods/reset",permalink:"/coding-style-guide/docs/fegg/library/model/methods/reset",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/model/methods/reset.mdx",tags:[],version:"current",sidebarPosition:43,frontMatter:{sidebar_position:43},sidebar:"fegg",previous:{title:"Model::pragma",permalink:"/coding-style-guide/docs/fegg/library/model/methods/pragma"},next:{title:"Model::debug",permalink:"/coding-style-guide/docs/fegg/library/model/methods/debug"}},i={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}];function a(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"modelreset",children:"Model::reset"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Reset Model"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"public self Model::reset()\n"})}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",metastring:'title="Controller"',children:"$model = new Model(true, array(\n    'table'   => 'cms_news',\n));\n\n$model->where('news = ?', [1]);\n$model->listMax(5);\n$model->current(2);\n\n// SELECT * FROM cms_news WHERE news = 1 LIMIT 5, 5\n$model->find();\n\n$model->reset();\n\n// SELECT * FROM cms_news\n$model->find();\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>d});var o=t(7294);const r={},s=o.createContext(r);function d(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);