"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[8023],{490:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var t=n(5893),i=n(1151);const r={sidebar_position:16},d="Validation::hankaku",l={id:"fegg/library/validation/methods/hankaku",title:"Validation::hankaku",description:"Check half-width character for Multi byte string language",source:"@site/docs/fegg/library/validation/methods/hankaku.mdx",sourceDirName:"fegg/library/validation/methods",slug:"/fegg/library/validation/methods/hankaku",permalink:"/coding-style-guide/docs/fegg/library/validation/methods/hankaku",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/validation/methods/hankaku.mdx",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"fegg",previous:{title:"Validation::minlength",permalink:"/coding-style-guide/docs/fegg/library/validation/methods/minlength"},next:{title:"Validation::katakana",permalink:"/coding-style-guide/docs/fegg/library/validation/methods/katakana"}},s={},o=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function c(e){const a={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"validationhankaku",children:"Validation::hankaku"}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Check half-width character for Multi byte string language"}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-php",children:"public boolean Validation::hankaku( string $name, mixed $value, [ mixed $code = '' ] )\n"})}),"\n",(0,t.jsx)(a.h2,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Name"}),(0,t.jsx)(a.th,{children:"Data type"}),(0,t.jsx)(a.th,{children:"Default"}),(0,t.jsx)(a.th,{children:"Remarks"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"$name"}),(0,t.jsx)(a.td,{children:"string"}),(0,t.jsx)(a.td,{}),(0,t.jsx)(a.td,{children:"Item label"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"$value"}),(0,t.jsx)(a.td,{children:"mixed"}),(0,t.jsx)(a.td,{}),(0,t.jsx)(a.td,{children:"Check field value"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"$code"}),(0,t.jsx)(a.td,{children:"mixed"}),(0,t.jsx)(a.td,{children:'""'}),(0,t.jsx)(a.td,{children:"Error code or Error message"})]})]})]}),"\n",(0,t.jsx)(a.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-php",metastring:'title="Controller"',children:"$validation = $this->getClass('Validation');\n\n// If $value has only half-width character\n$successName = 'Success Field';\n$successVar  = 'foo';\n$validation->hankaku('success', $successVar, array('@hankaku', $successName));\n\nvar_dump($validation->isError()); // -> false\nvar_dump($validation->getErrorMessage()); // -> null\n\n// If $value has not only half-width character\n$failedName = 'Failed Field';\n$failedVar  = '\u30c6\u30b9\u30c8';\n$validation->required('failed', $failedVar, array('@required', $failedName));\n\nvar_dump($validation->isError()); // -> true\nvar_dump($validation->getErrorMessage());\n// -> \"failed\" => \"<strong>Failed Field</strong> \u306f\u534a\u89d2\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\"\n"})})]})}function h(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>l,a:()=>d});var t=n(7294);const i={},r=t.createContext(i);function d(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);