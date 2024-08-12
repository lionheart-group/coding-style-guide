"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[4132],{6257:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var n=i(5893),a=i(1151);const l={sidebar_position:6},r="Validation::tel",d={id:"fegg/library/validation/methods/tel",title:"Validation::tel",description:"Check valid tel character (+ - 0-9)",source:"@site/docs/fegg/library/validation/methods/tel.mdx",sourceDirName:"fegg/library/validation/methods",slug:"/fegg/library/validation/methods/tel",permalink:"/coding-style-guide/ja/docs/fegg/library/validation/methods/tel",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/validation/methods/tel.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"fegg",previous:{title:"Validation::email",permalink:"/coding-style-guide/ja/docs/fegg/library/validation/methods/email"},next:{title:"Validation::time",permalink:"/coding-style-guide/ja/docs/fegg/library/validation/methods/time"}},s={},o=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function c(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"validationtel",children:"Validation::tel"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Check valid tel character (+ - 0-9)"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:"public boolean Validation::tel( string $name, mixed $value, [ mixed $code = '' ] )\n"})}),"\n",(0,n.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Data type"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Remarks"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"$name"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Item label"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"$value"}),(0,n.jsx)(t.td,{children:"mixed"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Check field value"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"$code"}),(0,n.jsx)(t.td,{children:"mixed"}),(0,n.jsx)(t.td,{children:'""'}),(0,n.jsx)(t.td,{children:"Error code or Error message"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",metastring:'title="Controller"',children:"$validation = $this->getClass('Validation');\n\n// If $value is Tel string\n$successName = 'Success Field';\n$successVar  = '000-000-0000';\n$validation->tel('success', $successVar, array('@tel', $successName));\n\nvar_dump($validation->isError()); // -> false\nvar_dump($validation->getErrorMessage()); // -> null\n\n// If $value is not Tel string\n$failedName = 'Failed Field';\n$failedVar  = '2000/01/01';\n$validation->tel('failed', $failedVar, array('@tel', $failedName));\n\nvar_dump($validation->isError()); // -> true\nvar_dump($validation->getErrorMessage());\n// -> \"failed\" => \"<strong>Failed Field</strong> \u306f\u767b\u9332\u3067\u304d\u306a\u3044\u5f62\u5f0f\u3067\u3059\"\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>d,a:()=>r});var n=i(7294);const a={},l=n.createContext(a);function r(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);