"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[2498],{9553:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var a=n(5893),r=n(1151);const t={sidebar_position:3},l="Validation::numeric",s={id:"fegg/library/validation/methods/numeric",title:"Validation::numeric",description:"Check numeric or not",source:"@site/docs/fegg/library/validation/methods/numeric.mdx",sourceDirName:"fegg/library/validation/methods",slug:"/fegg/library/validation/methods/numeric",permalink:"/coding-style-guide/ja/docs/fegg/library/validation/methods/numeric",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/validation/methods/numeric.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"fegg",previous:{title:"Validation::alphameric",permalink:"/coding-style-guide/ja/docs/fegg/library/validation/methods/alphameric"},next:{title:"Validation::date",permalink:"/coding-style-guide/ja/docs/fegg/library/validation/methods/date"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2},{value:"Optional Flag",id:"optional-flag",level:3}];function o(e){const i={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h1,{id:"validationnumeric",children:"Validation::numeric"}),"\n",(0,a.jsxs)(i.blockquote,{children:["\n",(0,a.jsx)(i.p,{children:"Check numeric or not"}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-php",children:"public boolean Validation::numeric( string $name, mixed $value, [ mixed $code = '', boolean $decimalPointFlag = false, boolean $minusFlag = false ] )\n"})}),"\n",(0,a.jsx)(i.h2,{id:"arguments",children:"Arguments"}),"\n",(0,a.jsxs)(i.table,{children:[(0,a.jsx)(i.thead,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.th,{children:"Name"}),(0,a.jsx)(i.th,{children:"Data type"}),(0,a.jsx)(i.th,{children:"Default"}),(0,a.jsx)(i.th,{children:"Remarks"})]})}),(0,a.jsxs)(i.tbody,{children:[(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"$name"}),(0,a.jsx)(i.td,{children:"string"}),(0,a.jsx)(i.td,{}),(0,a.jsx)(i.td,{children:"Item label"})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"$value"}),(0,a.jsx)(i.td,{children:"mixed"}),(0,a.jsx)(i.td,{}),(0,a.jsx)(i.td,{children:"Check field value"})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"$code"}),(0,a.jsx)(i.td,{children:"mixed"}),(0,a.jsx)(i.td,{children:'""'}),(0,a.jsx)(i.td,{children:"Error code or Error message"})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"$decimalPointFlag"}),(0,a.jsx)(i.td,{children:"boolean"}),(0,a.jsx)(i.td,{children:"false"}),(0,a.jsx)(i.td,{children:'Allow including "."'})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"$minusFlag"}),(0,a.jsx)(i.td,{children:"boolean"}),(0,a.jsx)(i.td,{children:"false"}),(0,a.jsx)(i.td,{children:'Allow including "-"'})]})]})]}),"\n",(0,a.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-php",metastring:'title="Controller"',children:"$validation = $this->getClass('Validation');\n\n// If $value is numeric\n$successName = 'Success Field';\n$successVar  = '123';\n$validation->numeric('success', $successVar, array('@numeric', $successName));\n\nvar_dump($validation->isError()); // -> false\nvar_dump($validation->getErrorMessage()); // -> null\n\n// If $value is not numeric\n$failedName = 'Failed Field';\n$failedVar  = 'abc123';\n$validation->numeric('failed', $failedVar, array('@numeric', $failedName));\n\nvar_dump($validation->isError()); // -> true\nvar_dump($validation->getErrorMessage());\n// -> \"failed\" => \"<strong>Failed Field</strong> \u306f \u534a\u89d2\u6570\u5b57\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\"\n"})}),"\n",(0,a.jsx)(i.h3,{id:"optional-flag",children:"Optional Flag"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-php",metastring:'title="Controller"',children:"// If $value is negative numeric\n$failedName = 'Failed Field';\n$failedVar  = '-10';\n$validation->numeric('failed', $failedVar, array('@numeric', $failedName));\n\nvar_dump($validation->isError()); // -> true\nvar_dump($validation->getErrorMessage());\n// -> \"failed\" => \"<strong>Failed Field</strong> \u306f \u534a\u89d2\u6570\u5b57\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\"\n\n// If $value is negative numeric with activate $minusFlag\n$successName = 'success Field';\n$successVar  = '-10';\n$validation->numeric('success', $successVar, array('@numeric_minus', $successName), false, true);\n\nvar_dump($validation->isError()); // -> false\nvar_dump($validation->getErrorMessage()); -> null\n"})})]})}function u(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>s,a:()=>l});var a=n(7294);const r={},t=a.createContext(r);function l(e){const i=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(t.Provider,{value:i},e.children)}}}]);