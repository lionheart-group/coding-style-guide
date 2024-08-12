"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[6204],{3568:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=d(5893),n=d(1151);const i={sidebar_position:33},l="Model::deleteWhere",s={id:"fegg/library/model/methods/deletewhere",title:"Model::deleteWhere",description:"Execute Logical Delete the records by specified condition",source:"@site/docs/fegg/library/model/methods/deletewhere.mdx",sourceDirName:"fegg/library/model/methods",slug:"/fegg/library/model/methods/deletewhere",permalink:"/coding-style-guide/docs/fegg/library/model/methods/deletewhere",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/model/methods/deletewhere.mdx",tags:[],version:"current",sidebarPosition:33,frontMatter:{sidebar_position:33},sidebar:"fegg",previous:{title:"Model::update",permalink:"/coding-style-guide/docs/fegg/library/model/methods/update"},next:{title:"Model::delete",permalink:"/coding-style-guide/docs/fegg/library/model/methods/delete"}},o={},c=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function a(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"modeldeletewhere",children:"Model::deleteWhere"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Execute Logical Delete the records by specified condition"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",children:"public void Model::deleteWhere( string $where, array $wh_data )\n"})}),"\n",(0,r.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Data type"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Remarks"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"$where"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Deleting condition query"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"$wh_data"}),(0,r.jsx)(t.td,{children:"array"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Deleting condition data"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",metastring:'title="Controller"',children:"$model = new Model(false, array(\n    'table'   => 'cms_news',\n    'id'      => 'news_id',\n    'visible' => 'visible',\n));\n\n$model->deleteWhere($item, $data, 'id = ?', [1]);\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,t,d)=>{d.d(t,{Z:()=>s,a:()=>l});var r=d(7294);const n={},i=r.createContext(n);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);