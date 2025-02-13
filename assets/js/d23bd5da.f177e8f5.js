"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([["1083"],{5568:function(e,i,a){a.r(i),a.d(i,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>s,toc:()=>o,contentTitle:()=>d});var r=JSON.parse('{"id":"fegg/library/validation/methods/alphameric","title":"Validation::alphameric","description":"Check alphanumeric or not","source":"@site/docs/fegg/library/validation/methods/alphameric.mdx","sourceDirName":"fegg/library/validation/methods","slug":"/fegg/library/validation/methods/alphameric","permalink":"/coding-style-guide/docs/fegg/library/validation/methods/alphameric","draft":false,"unlisted":false,"editUrl":"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/validation/methods/alphameric.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"fegg","previous":{"title":"Validation::required","permalink":"/coding-style-guide/docs/fegg/library/validation/methods/required"},"next":{"title":"Validation::numeric","permalink":"/coding-style-guide/docs/fegg/library/validation/methods/numeric"}}'),n=a("5893"),t=a("65");let l={sidebar_position:2},d="Validation::alphameric",s={},o=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function c(e){let i={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"validationalphameric",children:"Validation::alphameric"})}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"Check alphanumeric or not"}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-php",children:"public boolean Validation::alphameric( string $name, mixed $value, [ mixed $code = '' ] )\n"})}),"\n",(0,n.jsx)(i.h2,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Name"}),(0,n.jsx)(i.th,{children:"Data type"}),(0,n.jsx)(i.th,{children:"Default"}),(0,n.jsx)(i.th,{children:"Remarks"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"$name"}),(0,n.jsx)(i.td,{children:"string"}),(0,n.jsx)(i.td,{}),(0,n.jsx)(i.td,{children:"Item label"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"$value"}),(0,n.jsx)(i.td,{children:"mixed"}),(0,n.jsx)(i.td,{}),(0,n.jsx)(i.td,{children:"Check field value"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"$code"}),(0,n.jsx)(i.td,{children:"mixed"}),(0,n.jsx)(i.td,{children:'""'}),(0,n.jsx)(i.td,{children:"Error code or Error message"})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-php",metastring:'title="Controller"',children:"$validation = $this->getClass('Validation');\n\n// If $value is not alphanumeric\n$successName = 'Success Field';\n$successVar  = 'abc123';\n$validation->alphameric('success', $successVar, array('@alphameric', $successName));\n\nvar_dump($validation->isError()); // -> false\nvar_dump($validation->getErrorMessage()); // -> null\n\n// If $value is not alphanumeric\n$failedName = 'Failed Field';\n$failedVar  = 'abc!';\n$validation->alphameric('failed', $failedVar, array('@alphameric', $failedName));\n\nvar_dump($validation->isError()); // -> true\nvar_dump($validation->getErrorMessage());\n// -> \"failed\" => \"<strong>Failed Field</strong> \u306F\u534A\u89D2\u82F1\u6570\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\"\n"})})]})}function h(e={}){let{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},65:function(e,i,a){a.d(i,{Z:function(){return d},a:function(){return l}});var r=a(7294);let n={},t=r.createContext(n);function l(e){let i=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);