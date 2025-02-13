"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([["791"],{5606:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>n,assets:()=>s,toc:()=>o,contentTitle:()=>d});var n=JSON.parse('{"id":"fegg/library/validation/methods/tel","title":"Validation::tel","description":"Check valid tel character (+ - 0-9)","source":"@site/docs/fegg/library/validation/methods/tel.mdx","sourceDirName":"fegg/library/validation/methods","slug":"/fegg/library/validation/methods/tel","permalink":"/coding-style-guide/docs/fegg/library/validation/methods/tel","draft":false,"unlisted":false,"editUrl":"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/validation/methods/tel.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"fegg","previous":{"title":"Validation::email","permalink":"/coding-style-guide/docs/fegg/library/validation/methods/email"},"next":{"title":"Validation::time","permalink":"/coding-style-guide/docs/fegg/library/validation/methods/time"}}'),l=i("5893"),r=i("65");let a={sidebar_position:6},d="Validation::tel",s={},o=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function c(e){let t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"validationtel",children:"Validation::tel"})}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"Check valid tel character (+ - 0-9)"}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-php",children:"public boolean Validation::tel( string $name, mixed $value, [ mixed $code = '' ] )\n"})}),"\n",(0,l.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Data type"}),(0,l.jsx)(t.th,{children:"Default"}),(0,l.jsx)(t.th,{children:"Remarks"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"$name"}),(0,l.jsx)(t.td,{children:"string"}),(0,l.jsx)(t.td,{}),(0,l.jsx)(t.td,{children:"Item label"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"$value"}),(0,l.jsx)(t.td,{children:"mixed"}),(0,l.jsx)(t.td,{}),(0,l.jsx)(t.td,{children:"Check field value"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"$code"}),(0,l.jsx)(t.td,{children:"mixed"}),(0,l.jsx)(t.td,{children:'""'}),(0,l.jsx)(t.td,{children:"Error code or Error message"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-php",metastring:'title="Controller"',children:"$validation = $this->getClass('Validation');\n\n// If $value is Tel string\n$successName = 'Success Field';\n$successVar  = '000-000-0000';\n$validation->tel('success', $successVar, array('@tel', $successName));\n\nvar_dump($validation->isError()); // -> false\nvar_dump($validation->getErrorMessage()); // -> null\n\n// If $value is not Tel string\n$failedName = 'Failed Field';\n$failedVar  = '2000/01/01';\n$validation->tel('failed', $failedVar, array('@tel', $failedName));\n\nvar_dump($validation->isError()); // -> true\nvar_dump($validation->getErrorMessage());\n// -> \"failed\" => \"<strong>Failed Field</strong> \u306F\u767B\u9332\u3067\u304D\u306A\u3044\u5F62\u5F0F\u3067\u3059\"\n"})})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},65:function(e,t,i){i.d(t,{Z:function(){return d},a:function(){return a}});var n=i(7294);let l={},r=n.createContext(l);function a(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);