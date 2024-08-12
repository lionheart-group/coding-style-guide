"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[4249],{8534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var i=n(5893),a=n(1151);const l={sidebar_position:14},r="Validation::maxlength",d={id:"fegg/library/validation/methods/maxlength",title:"Validation::maxlength",description:"Check character less than maximum length",source:"@site/docs/fegg/library/validation/methods/maxlength.mdx",sourceDirName:"fegg/library/validation/methods",slug:"/fegg/library/validation/methods/maxlength",permalink:"/coding-style-guide/ja/docs/fegg/library/validation/methods/maxlength",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/validation/methods/maxlength.mdx",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"fegg",previous:{title:"Validation::length",permalink:"/coding-style-guide/ja/docs/fegg/library/validation/methods/length"},next:{title:"Validation::minlength",permalink:"/coding-style-guide/ja/docs/fegg/library/validation/methods/minlength"}},s={},o=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function c(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"validationmaxlength",children:"Validation::maxlength"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Check character less than maximum length"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-php",children:"public boolean Validation::maxlength( string $name, mixed $value, numeric $length, [ mixed $code = '' ] )\n"})}),"\n",(0,i.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Data type"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Remarks"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"$name"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Item label"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"$value"}),(0,i.jsx)(t.td,{children:"mixed"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Check field value"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"$length"}),(0,i.jsx)(t.td,{children:"numeric"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Specific length value"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"$code"}),(0,i.jsx)(t.td,{children:"mixed"}),(0,i.jsx)(t.td,{children:'""'}),(0,i.jsx)(t.td,{children:"Error code or Error message"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-php",metastring:'title="Controller"',children:"$validation = $this->getClass('Validation');\n\n// If $value is less than equal specific length\n$successName = 'Success Field';\n$successVar  = 'foo';\n$length      = 5;\n$validation->maxlength('success', $successVar, $length, array('@maxlength', $successName, $length));\n\nvar_dump($validation->isError()); // -> false\nvar_dump($validation->getErrorMessage()); // -> null\n\n// If $value is more than specific length\n$failedName = 'Failed Field';\n$failedVar  = 'failed';\n$length     = 5;\n$validation->maxlength('failed', $failedVar, $length, array('@maxlength', $failedName, $length));\n\nvar_dump($validation->isError()); // -> true\nvar_dump($validation->getErrorMessage());\n// -> \"failed\" => \"<strong>Failed Field</strong> \u306f <strong>5</strong> \u6587\u5b57\u4ee5\u5185\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\"\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>r});var i=n(7294);const a={},l=i.createContext(a);function r(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);