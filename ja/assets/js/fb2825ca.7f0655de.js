"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[4008],{3067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>i});var r=n(5893),l=n(1151);const o={sidebar_position:41},d="Model::alterRenameTo",a={id:"fegg/library/model/methods/alterrenameto",title:"Model::alterRenameTo",description:"Execute Alter Rename",source:"@site/docs/fegg/library/model/methods/alterrenameto.mdx",sourceDirName:"fegg/library/model/methods",slug:"/fegg/library/model/methods/alterrenameto",permalink:"/coding-style-guide/ja/docs/fegg/library/model/methods/alterrenameto",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/model/methods/alterrenameto.mdx",tags:[],version:"current",sidebarPosition:41,frontMatter:{sidebar_position:41},sidebar:"fegg",previous:{title:"Model::alterAddColumn",permalink:"/coding-style-guide/ja/docs/fegg/library/model/methods/alteraddcolumn"},next:{title:"Model::pragma",permalink:"/coding-style-guide/ja/docs/fegg/library/model/methods/pragma"}},s={},i=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function c(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"modelalterrenameto",children:"Model::alterRenameTo"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Execute Alter Rename"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",children:"public void Model::alterRenameTo( string $rename )\n"})}),"\n",(0,r.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Data type"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Remarks"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"$rename"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Rename to table name"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",metastring:'title="Controller"',children:"$model = new Model(true, array(\n    'table'   => 'cms_news',\n));\n\n// ALTER TABLE cms_news TO cms_news_ex\n$model->alterRenameTo('cms_news_ex');\n"})})]})}function m(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>d});var r=n(7294);const l={},o=r.createContext(l);function d(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);