"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([["4913"],{6115:function(e,i,r){r.r(i),r.d(i,{default:()=>u,frontMatter:()=>s,metadata:()=>t,assets:()=>l,toc:()=>o,contentTitle:()=>a});var t=JSON.parse('{"id":"fegg/library/validation/methods/userid","title":"Validation::userId","description":"Check allowed character for UserID (- \\\\_ . 0-9)","source":"@site/docs/fegg/library/validation/methods/userid.mdx","sourceDirName":"fegg/library/validation/methods","slug":"/fegg/library/validation/methods/userid","permalink":"/coding-style-guide/docs/fegg/library/validation/methods/userid","draft":false,"unlisted":false,"editUrl":"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/validation/methods/userid.mdx","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"fegg","previous":{"title":"Validation::zipcode","permalink":"/coding-style-guide/docs/fegg/library/validation/methods/zipcode"},"next":{"title":"Validation::password","permalink":"/coding-style-guide/docs/fegg/library/validation/methods/password"}}'),n=r("5893"),d=r("65");let s={sidebar_position:10},a="Validation::userId",l={},o=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function c(e){let i={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"validationuserid",children:"Validation::userId"})}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"Check allowed character for UserID (- _ . 0-9)"}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-php",children:"public boolean Validation::userId( string $name, mixed $value, [ mixed $code = '' ] )\n"})}),"\n",(0,n.jsx)(i.h2,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Name"}),(0,n.jsx)(i.th,{children:"Data type"}),(0,n.jsx)(i.th,{children:"Default"}),(0,n.jsx)(i.th,{children:"Remarks"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"$name"}),(0,n.jsx)(i.td,{children:"string"}),(0,n.jsx)(i.td,{}),(0,n.jsx)(i.td,{children:"Item label"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"$value"}),(0,n.jsx)(i.td,{children:"mixed"}),(0,n.jsx)(i.td,{}),(0,n.jsx)(i.td,{children:"Check field value"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"$code"}),(0,n.jsx)(i.td,{children:"mixed"}),(0,n.jsx)(i.td,{children:'""'}),(0,n.jsx)(i.td,{children:"Error code or Error message"})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-php",metastring:'title="Controller"',children:"$validation = $this->getClass('Validation');\n\n// If $value is UserID string\n$successName = 'Success Field';\n$successVar  = 'user_id123456';\n$validation->userId('success', $successVar, array('@userid', $successName));\n\nvar_dump($validation->isError()); // -> false\nvar_dump($validation->getErrorMessage()); // -> null\n\n// If $value is not UserID string\n$failedName = 'Failed Field';\n$failedVar  = 'not*user_id/123456';\n$validation->userId('failed', $failedVar, array('@userid', $failedName));\n\nvar_dump($validation->isError()); // -> true\nvar_dump($validation->getErrorMessage());\n// -> \"failed\" => \"<strong>Failed Field</strong> \u306F\u767B\u9332\u3067\u304D\u306A\u3044\u5F62\u5F0F\u3067\u3059\"\n"})})]})}function u(e={}){let{wrapper:i}={...(0,d.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},65:function(e,i,r){r.d(i,{Z:function(){return a},a:function(){return s}});var t=r(7294);let n={},d=t.createContext(n);function s(e){let i=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(d.Provider,{value:i},e.children)}}}]);