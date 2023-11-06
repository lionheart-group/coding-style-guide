"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[3021],{629:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var n=t(5893),a=t(1151);const r={sidebar_position:7},d="Validation::time",s={id:"fegg/library/validation/methods/time",title:"Validation::time",description:"Check valid time character (: 0-9)",source:"@site/docs/fegg/library/validation/methods/time.mdx",sourceDirName:"fegg/library/validation/methods",slug:"/fegg/library/validation/methods/time",permalink:"/coding-style-guide/ja/docs/fegg/library/validation/methods/time",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/validation/methods/time.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"fegg",previous:{title:"Validation::tel",permalink:"/coding-style-guide/ja/docs/fegg/library/validation/methods/tel"},next:{title:"Validation::url",permalink:"/coding-style-guide/ja/docs/fegg/library/validation/methods/url"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function c(e){const i={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"validationtime",children:"Validation::time"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"Check valid time character (: 0-9)"}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-php",children:"public boolean Validation::time( string $name, mixed $value, [ mixed $code = '' ] )\n"})}),"\n",(0,n.jsx)(i.h2,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Name"}),(0,n.jsx)(i.th,{children:"Data type"}),(0,n.jsx)(i.th,{children:"Default"}),(0,n.jsx)(i.th,{children:"Remarks"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"$name"}),(0,n.jsx)(i.td,{children:"string"}),(0,n.jsx)(i.td,{}),(0,n.jsx)(i.td,{children:"Item label"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"$value"}),(0,n.jsx)(i.td,{children:"mixed"}),(0,n.jsx)(i.td,{}),(0,n.jsx)(i.td,{children:"Check field value"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"$code"}),(0,n.jsx)(i.td,{children:"mixed"}),(0,n.jsx)(i.td,{children:'""'}),(0,n.jsx)(i.td,{children:"Error code or Error message"})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-php",metastring:'title="Controller"',children:"$validation = $this->getClass('Validation');\n\n// If $value is Tel string\n$successName = 'Success Field';\n$successVar  = '00:00:00';\n$validation->time('success', $successVar, array('@time', $successName));\n\nvar_dump($validation->isError()); // -> false\nvar_dump($validation->getErrorMessage()); // -> null\n\n// If $value is not Tel string\n$failedName = 'Failed Field';\n$failedVar  = '2000/01/01';\n$validation->time('failed', $failedVar, array('@time', $failedName));\n\nvar_dump($validation->isError()); // -> true\nvar_dump($validation->getErrorMessage());\n// -> \"failed\" => \"<strong>Failed Field</strong> \u306e\u6642\u9593\u3067\u306f\u767b\u9332\u3067\u304d\u307e\u305b\u3093\"\n"})})]})}function h(e={}){const{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,i,t)=>{t.d(i,{Z:()=>s,a:()=>d});var n=t(7294);const a={},r=n.createContext(a);function d(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);