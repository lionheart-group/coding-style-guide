"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[5536],{2567:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>o});var a=i(5893),n=i(1151);const d={sidebar_position:4},r="Validation::date",s={id:"fegg/library/validation/methods/date",title:"Validation::date",description:"Check valid date string",source:"@site/docs/fegg/library/validation/methods/date.mdx",sourceDirName:"fegg/library/validation/methods",slug:"/fegg/library/validation/methods/date",permalink:"/coding-style-guide/ja/docs/fegg/library/validation/methods/date",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/validation/methods/date.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"fegg",previous:{title:"Validation::numeric",permalink:"/coding-style-guide/ja/docs/fegg/library/validation/methods/numeric"},next:{title:"Validation::email",permalink:"/coding-style-guide/ja/docs/fegg/library/validation/methods/email"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function c(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"validationdate",children:"Validation::date"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Check valid date string"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",children:"public boolean Validation::date( string $name, mixed $value, [ mixed $code = '' ] )\n"})}),"\n",(0,a.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Data type"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Remarks"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"$name"}),(0,a.jsx)(t.td,{children:"string"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"Item label"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"$value"}),(0,a.jsx)(t.td,{children:"mixed"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"Check field value"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"$code"}),(0,a.jsx)(t.td,{children:"mixed"}),(0,a.jsx)(t.td,{children:'""'}),(0,a.jsx)(t.td,{children:"Error code or Error message"})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",metastring:'title="Controller"',children:"$validation = $this->getClass('Validation');\n\n// If $value is date string\n$successName = 'Success Field';\n$successVar  = '2017/01/01';\n$validation->date('success', $successVar, array('@date', $successName));\n\nvar_dump($validation->isError()); // -> false\nvar_dump($validation->getErrorMessage()); // -> null\n\n// If $value is not date string\n$failedName = 'Failed Field';\n$failedVar  = '00:00';\n$validation->date('failed', $failedVar, array('@date', $failedName));\n\nvar_dump($validation->isError()); // -> true\nvar_dump($validation->getErrorMessage());\n// -> \"failed\" => \"<strong>Failed Field</strong> \u306e\u65e5\u4ed8\u3067\u306f\u767b\u9332\u3067\u304d\u307e\u305b\u3093\"\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>r});var a=i(7294);const n={},d=a.createContext(n);function r(e){const t=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(d.Provider,{value:t},e.children)}}}]);