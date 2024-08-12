"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[3006],{8171:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var d=t(5893),n=t(1151);const i={sidebar_position:20},o="Model::order",s={id:"fegg/library/model/methods/order",title:"Model::order",description:"Set Order Parameter",source:"@site/docs/fegg/library/model/methods/order.mdx",sourceDirName:"fegg/library/model/methods",slug:"/fegg/library/model/methods/order",permalink:"/coding-style-guide/docs/fegg/library/model/methods/order",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/model/methods/order.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"fegg",previous:{title:"Model::havingClose",permalink:"/coding-style-guide/docs/fegg/library/model/methods/havingclose"},next:{title:"Model::join",permalink:"/coding-style-guide/docs/fegg/library/model/methods/join"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function a(e){const r={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.header,{children:(0,d.jsx)(r.h1,{id:"modelorder",children:"Model::order"})}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsx)(r.p,{children:"Set Order Parameter"}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-php",children:"public self Model::order( string $order, [ string $duration = 'ASC' ] )\n"})}),"\n",(0,d.jsx)(r.h2,{id:"arguments",children:"Arguments"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Name"}),(0,d.jsx)(r.th,{children:"Data type"}),(0,d.jsx)(r.th,{children:"Default"}),(0,d.jsx)(r.th,{children:"Remarks"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"$order"}),(0,d.jsx)(r.td,{children:"string"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"Ordering target column"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"$duration"}),(0,d.jsx)(r.td,{children:"string"}),(0,d.jsx)(r.td,{children:"'ASC'"}),(0,d.jsx)(r.td,{children:"Set the ordering duration"})]})]})]}),"\n",(0,d.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-php",metastring:'title="Controller"',children:"$model = new Model(false, array(\n    'table'   => 'cms_news',\n    'id'      => 'news_id',\n    'visible' => 'visible',\n));\n\n// SELECT * FROM cms_news ORDER BY created DESC\n$records = $model->order('created', 'DESC')->find();\n"})})]})}function h(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>s,a:()=>o});var d=t(7294);const n={},i=d.createContext(n);function o(e){const r=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),d.createElement(i.Provider,{value:r},e.children)}}}]);