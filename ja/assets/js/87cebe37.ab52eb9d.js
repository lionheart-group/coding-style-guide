"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[8523],{7973:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var n=d(5893),r=d(1151);const i={sidebar_position:31},s="Model::updateWhere",l={id:"fegg/library/model/methods/updatewhere",title:"Model::updateWhere",description:"Execute Update the records by specified condition",source:"@site/docs/fegg/library/model/methods/updatewhere.mdx",sourceDirName:"fegg/library/model/methods",slug:"/fegg/library/model/methods/updatewhere",permalink:"/coding-style-guide/ja/docs/fegg/library/model/methods/updatewhere",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/model/methods/updatewhere.mdx",tags:[],version:"current",sidebarPosition:31,frontMatter:{sidebar_position:31},sidebar:"fegg",previous:{title:"Model::insert",permalink:"/coding-style-guide/ja/docs/fegg/library/model/methods/insert"},next:{title:"Model::update",permalink:"/coding-style-guide/ja/docs/fegg/library/model/methods/update"}},a={},o=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function c(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"modelupdatewhere",children:"Model::updateWhere"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Execute Update the records by specified condition"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:"public void Model::updateWhere( string $item, array $data, string $where, array $wh_data )\n"})}),"\n",(0,n.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Data type"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Remarks"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"$item"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Updating columns"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"$data"}),(0,n.jsx)(t.td,{children:"array"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Updating datas"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"$where"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Updating condition query"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"$wh_data"}),(0,n.jsx)(t.td,{children:"array"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Updating condition data"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",metastring:'title="Controller"',children:"$model = new Model(false, array(\n    'table'   => 'cms_news',\n    'id'      => 'news_id',\n    'visible' => 'visible',\n));\n\n$item = 'title, body';\n$data = array(\n    'title' => 'Sample title',\n    'body' => 'Sample body',\n);\n$model->updateWhere($item, $data, 'id = ?', [1]);\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,d)=>{d.d(t,{Z:()=>l,a:()=>s});var n=d(7294);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);