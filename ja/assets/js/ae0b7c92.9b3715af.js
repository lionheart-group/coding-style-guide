"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[3101],{829:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(5893),i=t(1151);const o={sidebar_position:24},a="Model::getPager",s={id:"fegg/library/model/methods/getpager",title:"Model::getPager",description:"Get variables for making pager",source:"@site/docs/fegg/library/model/methods/getpager.mdx",sourceDirName:"fegg/library/model/methods",slug:"/fegg/library/model/methods/getpager",permalink:"/coding-style-guide/ja/docs/fegg/library/model/methods/getpager",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/model/methods/getpager.mdx",tags:[],version:"current",sidebarPosition:24,frontMatter:{sidebar_position:24},sidebar:"fegg",previous:{title:"Model::find",permalink:"/coding-style-guide/ja/docs/fegg/library/model/methods/find"},next:{title:"Model::one",permalink:"/coding-style-guide/ja/docs/fegg/library/model/methods/one"}},d={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}];function c(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"modelgetpager",children:"Model::getPager"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Get variables for making pager"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"public array Model::getPager()\n"})}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",metastring:'title="Controller"',children:"$model = new Model(false, array(\n    'table'   => 'cms_news',\n    'id'      => 'news_id',\n    'visible' => 'visible',\n));\n\n$records = $model->listMax(5)->current(2)->find();\n$pager = $model->getPager();\n\nvar_dump($pager);\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",metastring:'title="Output"',children:'array(2) {\n    ["current_page"]=> int(2)\n    ["page_min"]=> int(1)\n    ["page_max"]=> int(6)\n    ["previous_page"]=> int(1)\n    ["next_page"]=> int(3)\n    ["last_page"]=> int(10)\n    ["number_of_records"]=> int(50)\n}\n'})})]})}function g(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var r=t(7294);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);