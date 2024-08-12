"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[5066],{2097:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=d(5893),n=d(1151);const i={sidebar_position:32},s="Model::update",l={id:"fegg/library/model/methods/update",title:"Model::update",description:"Execute Update the record by specified primary ID",source:"@site/docs/fegg/library/model/methods/update.mdx",sourceDirName:"fegg/library/model/methods",slug:"/fegg/library/model/methods/update",permalink:"/coding-style-guide/ja/docs/fegg/library/model/methods/update",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/model/methods/update.mdx",tags:[],version:"current",sidebarPosition:32,frontMatter:{sidebar_position:32},sidebar:"fegg",previous:{title:"Model::updateWhere",permalink:"/coding-style-guide/ja/docs/fegg/library/model/methods/updatewhere"},next:{title:"Model::deleteWhere",permalink:"/coding-style-guide/ja/docs/fegg/library/model/methods/deletewhere"}},a={},o=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function c(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"modelupdate",children:"Model::update"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Execute Update the record by specified primary ID"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",children:"public void Model::update( string $item, array $data, mixed $id )\n"})}),"\n",(0,r.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Data type"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Remarks"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"$item"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Updating columns"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"$data"}),(0,r.jsx)(t.td,{children:"array"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Updating datas"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"$id"}),(0,r.jsx)(t.td,{children:"mixed"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Updating target Primary ID"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",metastring:'title="Controller"',children:"$model = new Model(false, array(\n    'table'   => 'cms_news',\n    'id'      => 'news_id',\n    'visible' => 'visible',\n));\n\n$item = 'title, body';\n$data = array(\n    'title' => 'Sample title',\n    'body' => 'Sample body',\n);\n$model->update($item, $data, 1);\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,t,d)=>{d.d(t,{Z:()=>l,a:()=>s});var r=d(7294);const n={},i=r.createContext(n);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);