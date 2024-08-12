"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[770],{9139:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>g,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var s=t(5893),i=t(1151);const n={sidebar_position:19},a="Validation::setErrorMessage",o={id:"fegg/library/validation/methods/seterrormessage",title:"Validation::setErrorMessage",description:"Set Error message",source:"@site/docs/fegg/library/validation/methods/seterrormessage.mdx",sourceDirName:"fegg/library/validation/methods",slug:"/fegg/library/validation/methods/seterrormessage",permalink:"/coding-style-guide/docs/fegg/library/validation/methods/seterrormessage",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/validation/methods/seterrormessage.mdx",tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_position:19},sidebar:"fegg",previous:{title:"Validation::setError",permalink:"/coding-style-guide/docs/fegg/library/validation/methods/seterror"},next:{title:"Validation::isError",permalink:"/coding-style-guide/docs/fegg/library/validation/methods/iserror"}},d={},l=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function c(e){const r={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"validationseterrormessage",children:"Validation::setErrorMessage"})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"Set Error message"}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-php",children:"public boolean Validation::setErrorMessage( string $name, string $message )\n"})}),"\n",(0,s.jsx)(r.h2,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Data type"}),(0,s.jsx)(r.th,{children:"Default"}),(0,s.jsx)(r.th,{children:"Remarks"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"$name"}),(0,s.jsx)(r.td,{children:"string"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"Item label"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"$message"}),(0,s.jsx)(r.td,{children:"string"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"Error message"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-php",metastring:'title="Controller"',children:"$validation = $this->getClass('Validation');\n\nvar_dump($validation->isError()); // -> false\nvar_dump($validation->getErrorMessage()); // -> null\n\n// Set error message\n$validation->setErrorMessage('failed', 'Something Error');\n\nvar_dump($validation->isError()); // -> true\nvar_dump($validation->getErrorMessage());\n// -> \"failed\" => \"Something Error\"\n"})})]})}function g(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>a});var s=t(7294);const i={},n=s.createContext(i);function a(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);