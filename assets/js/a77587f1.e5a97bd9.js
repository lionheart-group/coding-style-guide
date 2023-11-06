"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[7321],{9811:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>s,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var a=t(5893),n=t(1151);const l={sidebar_position:5},d="Validation::email",r={id:"fegg/library/validation/methods/email",title:"Validation::email",description:"Check valid E-mail string",source:"@site/docs/fegg/library/validation/methods/email.mdx",sourceDirName:"fegg/library/validation/methods",slug:"/fegg/library/validation/methods/email",permalink:"/coding-style-guide/docs/fegg/library/validation/methods/email",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/validation/methods/email.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"fegg",previous:{title:"Validation::date",permalink:"/coding-style-guide/docs/fegg/library/validation/methods/date"},next:{title:"Validation::tel",permalink:"/coding-style-guide/docs/fegg/library/validation/methods/tel"}},s={},o=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function c(e){const i={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h1,{id:"validationemail",children:"Validation::email"}),"\n",(0,a.jsxs)(i.blockquote,{children:["\n",(0,a.jsx)(i.p,{children:"Check valid E-mail string"}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-php",children:"public boolean Validation::email( string $name, mixed $value, [ mixed $code = '' ] )\n"})}),"\n",(0,a.jsx)(i.h2,{id:"arguments",children:"Arguments"}),"\n",(0,a.jsxs)(i.table,{children:[(0,a.jsx)(i.thead,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.th,{children:"Name"}),(0,a.jsx)(i.th,{children:"Data type"}),(0,a.jsx)(i.th,{children:"Default"}),(0,a.jsx)(i.th,{children:"Remarks"})]})}),(0,a.jsxs)(i.tbody,{children:[(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"$name"}),(0,a.jsx)(i.td,{children:"string"}),(0,a.jsx)(i.td,{}),(0,a.jsx)(i.td,{children:"Item label"})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"$value"}),(0,a.jsx)(i.td,{children:"mixed"}),(0,a.jsx)(i.td,{}),(0,a.jsx)(i.td,{children:"Check field value"})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"$code"}),(0,a.jsx)(i.td,{children:"mixed"}),(0,a.jsx)(i.td,{children:'""'}),(0,a.jsx)(i.td,{children:"Error code or Error message"})]})]})]}),"\n",(0,a.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-php",metastring:'title="Controller"',children:"$validation = $this->getClass('Validation');\n\n// If $value is E-mail string\n$successName = 'Success Field';\n$successVar  = 'email@example.com';\n$validation->email('success', $successVar, array('@email', $successName));\n\nvar_dump($validation->isError()); // -> false\nvar_dump($validation->getErrorMessage()); // -> null\n\n// If $value is not E-mail string\n$failedName = 'Failed Field';\n$failedVar  = 'Something not email text';\n$validation->email('failed', $failedVar, array('@email', $failedName));\n\nvar_dump($validation->isError()); // -> true\nvar_dump($validation->getErrorMessage());\n// -> \"failed\" => \"<strong>Failed Field</strong> \u306f\u767b\u9332\u3067\u304d\u306a\u3044\u5f62\u5f0f\u3067\u3059\"\n"})})]})}function m(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,i,t)=>{t.d(i,{Z:()=>r,a:()=>d});var a=t(7294);const n={},l=a.createContext(n);function d(e){const i=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),a.createElement(l.Provider,{value:i},e.children)}}}]);