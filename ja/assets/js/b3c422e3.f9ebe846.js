"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[8369],{8377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>d,metadata:()=>i,toc:()=>c});var o=n(5893),r=n(1151);const d={sidebar_position:44},s="Model::debug",i={id:"fegg/library/model/methods/debug",title:"Model::debug",description:"Get last executed query",source:"@site/docs/fegg/library/model/methods/debug.mdx",sourceDirName:"fegg/library/model/methods",slug:"/fegg/library/model/methods/debug",permalink:"/coding-style-guide/ja/docs/fegg/library/model/methods/debug",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/model/methods/debug.mdx",tags:[],version:"current",sidebarPosition:44,frontMatter:{sidebar_position:44},sidebar:"fegg",previous:{title:"Model::reset",permalink:"/coding-style-guide/ja/docs/fegg/library/model/methods/reset"},next:{title:"Model::unsetRegularUseQuery",permalink:"/coding-style-guide/ja/docs/fegg/library/model/methods/unsetregularusequery"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}];function a(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"modeldebug",children:"Model::debug"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Get last executed query"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-php",children:"public string Model::debug()\n"})}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-php",metastring:'title="Controller"',children:"$model = new Model(true, array(\n    'table'   => 'cms_news',\n));\n\n$model->where('news = ?', [1])\n    ->listMax(5)\n    ->current(2)\n    ->find();\n\necho $model->debug();\n// -> SELECT * FROM cms_news WHERE news = 1 LIMIT 5, 5\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var o=n(7294);const r={},d=o.createContext(r);function s(e){const t=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(d.Provider,{value:t},e.children)}}}]);