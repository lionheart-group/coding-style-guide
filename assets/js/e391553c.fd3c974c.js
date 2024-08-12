"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[8505],{6490:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=t(5893),d=t(1151);const s={sidebar_position:13},i="Model::current",l={id:"fegg/library/model/methods/current",title:"Model::current",description:"Set Current Page Parameter",source:"@site/docs/fegg/library/model/methods/current.mdx",sourceDirName:"fegg/library/model/methods",slug:"/fegg/library/model/methods/current",permalink:"/coding-style-guide/docs/fegg/library/model/methods/current",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/model/methods/current.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"fegg",previous:{title:"Model::listMax",permalink:"/coding-style-guide/docs/fegg/library/model/methods/listmax"},next:{title:"Model::where",permalink:"/coding-style-guide/docs/fegg/library/model/methods/where"}},o={},c=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function a(e){const r={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"modelcurrent",children:"Model::current"})}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Set Current Page Parameter"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-php",children:"public self Model::current( [ number $current = 1 ] )\n"})}),"\n",(0,n.jsx)(r.h2,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Data type"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Remarks"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"$current"}),(0,n.jsx)(r.td,{children:"number"}),(0,n.jsx)(r.td,{children:"1"}),(0,n.jsx)(r.td,{children:"Current page number"})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-php",metastring:'title="Controller"',children:"$model = new Model(false, array(\n    'table'   => 'cms_news',\n    'id'      => 'news_id',\n    'visible' => 'visible',\n));\n\n// Get 2nd page's 5 records\n$records = $model->listMax(5)->current(2)->find();\n"})})]})}function h(e={}){const{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>l,a:()=>i});var n=t(7294);const d={},s=n.createContext(d);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);