"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[4916],{7618:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>d,metadata:()=>s,toc:()=>c});var n=r(5893),o=r(1151);const d={sidebar_position:22},i="Model::group",s={id:"fegg/library/model/methods/group",title:"Model::group",description:"Set Group Parameter",source:"@site/docs/fegg/library/model/methods/group.mdx",sourceDirName:"fegg/library/model/methods",slug:"/fegg/library/model/methods/group",permalink:"/coding-style-guide/docs/fegg/library/model/methods/group",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/model/methods/group.mdx",tags:[],version:"current",sidebarPosition:22,frontMatter:{sidebar_position:22},sidebar:"fegg",previous:{title:"Model::join",permalink:"/coding-style-guide/docs/fegg/library/model/methods/join"},next:{title:"Model::find",permalink:"/coding-style-guide/docs/fegg/library/model/methods/find"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function a(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"modelgroup",children:"Model::group"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Set Group Parameter"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:"public self Model::group( string $group )\n"})}),"\n",(0,n.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Data type"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Remarks"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"$group"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Group column"})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",metastring:'title="Controller"',children:"$model = new Model(false, array(\n    'table'   => 'cms_news',\n    'id'      => 'news_id',\n    'visible' => 'visible',\n));\n\n$model->group('user_id');\n\n// SELECT *\n// FROM cms_news\n// GROUP BY user_id\n$records = $model->find();\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>i});var n=r(7294);const o={},d=n.createContext(o);function i(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);