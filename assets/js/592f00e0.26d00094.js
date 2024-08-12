"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[831],{294:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=t(5893),n=t(1151);const s={sidebar_position:18},a="Validation::setError",o={id:"fegg/library/validation/methods/seterror",title:"Validation::setError",description:"Set Error status",source:"@site/docs/fegg/library/validation/methods/seterror.mdx",sourceDirName:"fegg/library/validation/methods",slug:"/fegg/library/validation/methods/seterror",permalink:"/coding-style-guide/docs/fegg/library/validation/methods/seterror",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/validation/methods/seterror.mdx",tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"fegg",previous:{title:"Validation::katakana",permalink:"/coding-style-guide/docs/fegg/library/validation/methods/katakana"},next:{title:"Validation::setErrorMessage",permalink:"/coding-style-guide/docs/fegg/library/validation/methods/seterrormessage"}},d={},l=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function c(e){const r={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"validationseterror",children:"Validation::setError"})}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"Set Error status"}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-php",children:"public boolean Validation::setError( string $name, [ mixed $code = '' ] )\n"})}),"\n",(0,i.jsx)(r.h2,{id:"arguments",children:"Arguments"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Name"}),(0,i.jsx)(r.th,{children:"Data type"}),(0,i.jsx)(r.th,{children:"Default"}),(0,i.jsx)(r.th,{children:"Remarks"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"$name"}),(0,i.jsx)(r.td,{children:"string"}),(0,i.jsx)(r.td,{}),(0,i.jsx)(r.td,{children:"Item label"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"$code"}),(0,i.jsx)(r.td,{children:"mixed"}),(0,i.jsx)(r.td,{children:'""'}),(0,i.jsx)(r.td,{children:"Error code or Error message"})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-php",metastring:'title="Controller"',children:"$validation = $this->getClass('Validation');\n\nvar_dump($validation->isError()); // -> false\nvar_dump($validation->getErrorMessage()); // -> null\n\n// Set error status\n$validation->setError('failed', 'Something Error');\n\nvar_dump($validation->isError()); // -> true\nvar_dump($validation->getErrorMessage());\n// -> \"failed\" => \"Something Error\"\n"})})]})}function h(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>a});var i=t(7294);const n={},s=i.createContext(n);function a(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);