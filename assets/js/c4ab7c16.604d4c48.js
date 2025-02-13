"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([["798"],{3699:function(a,e,n){n.r(e),n.d(e,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>s,toc:()=>o,contentTitle:()=>d});var t=JSON.parse('{"id":"fegg/library/validation/methods/katakana","title":"Validation::katakana","description":"Check Katakana chracter for Japanese language","source":"@site/docs/fegg/library/validation/methods/katakana.mdx","sourceDirName":"fegg/library/validation/methods","slug":"/fegg/library/validation/methods/katakana","permalink":"/coding-style-guide/docs/fegg/library/validation/methods/katakana","draft":false,"unlisted":false,"editUrl":"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/validation/methods/katakana.mdx","tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"sidebar_position":17},"sidebar":"fegg","previous":{"title":"Validation::hankaku","permalink":"/coding-style-guide/docs/fegg/library/validation/methods/hankaku"},"next":{"title":"Validation::setError","permalink":"/coding-style-guide/docs/fegg/library/validation/methods/seterror"}}'),i=n("5893"),r=n("65");let l={sidebar_position:17},d="Validation::katakana",s={},o=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2},{value:"Optional Flag",id:"optional-flag",level:3}];function c(a){let e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...a.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"validationkatakana",children:"Validation::katakana"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"Check Katakana chracter for Japanese language"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-php",children:"public boolean Validation::katakana( string $name, mixed $value, [ mixed $code = '', boolean $zenkakuFlag = false ] )\n"})}),"\n",(0,i.jsx)(e.h2,{id:"arguments",children:"Arguments"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Name"}),(0,i.jsx)(e.th,{children:"Data type"}),(0,i.jsx)(e.th,{children:"Default"}),(0,i.jsx)(e.th,{children:"Remarks"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"$name"}),(0,i.jsx)(e.td,{children:"string"}),(0,i.jsx)(e.td,{}),(0,i.jsx)(e.td,{children:"Item label"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"$value"}),(0,i.jsx)(e.td,{children:"mixed"}),(0,i.jsx)(e.td,{}),(0,i.jsx)(e.td,{children:"Check field value"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"$code"}),(0,i.jsx)(e.td,{children:"mixed"}),(0,i.jsx)(e.td,{children:'""'}),(0,i.jsx)(e.td,{children:"Error code or Error message"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"$zenkakuFlag"}),(0,i.jsx)(e.td,{children:"boolean"}),(0,i.jsx)(e.td,{children:"false"}),(0,i.jsx)(e.td,{children:"Required full-width Katakana only flag"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-php",metastring:'title="Controller"',children:"$validation = $this->getClass('Validation');\n\n// If $value has only Japanese Katakana\n$successName = 'Success Field';\n$successVar  = '\u30C6\u30B9\u30C8';\n$validation->katakana('success', $successVar, array('@katakana', $successName));\n\nvar_dump($validation->isError()); // -> false\nvar_dump($validation->getErrorMessage()); // -> null\n\n// If $value has not only Japanese Katakana\n$failedName = 'Failed Field';\n$failedVar  = '\u3066\u3059\u3068';\n$validation->katakana('failed', $failedVar, array('@katakana', $failedName));\n\nvar_dump($validation->isError()); // -> true\nvar_dump($validation->getErrorMessage());\n// -> \"failed\" => \"<strong>Failed Field</strong> \u306F\u30AB\u30BF\u30AB\u30CA\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\"\n"})}),"\n",(0,i.jsx)(e.h3,{id:"optional-flag",children:"Optional Flag"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-php",metastring:'title="Controller"',children:"// If $value has half-width Katakana with disabled $zenkakuFlag\n$successName = 'Success Field';\n$successVar  = '\uFF83\uFF7D\uFF84';\n$validation->katakana('success', $successVar, array('@katakana', $successName));\n\nvar_dump($validation->isError()); // -> false\nvar_dump($validation->getErrorMessage()); // -> null\n\n// If $value has half-width Katakana with enabled $zenkakuFlag\n$failedName = 'Failed Field';\n$failedVar  = '\uFF83\uFF7D\uFF84';\n$validation->katakana('failed', $failedVar, array('@katakana', $failedName), true);\n\nvar_dump($validation->isError()); // -> true\nvar_dump($validation->getErrorMessage());\n// -> \"failed\" => \"<strong>Failed Field</strong> \u306F\u30AB\u30BF\u30AB\u30CA\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\"\n"})})]})}function h(a={}){let{wrapper:e}={...(0,r.a)(),...a.components};return e?(0,i.jsx)(e,{...a,children:(0,i.jsx)(c,{...a})}):c(a)}},65:function(a,e,n){n.d(e,{Z:function(){return d},a:function(){return l}});var t=n(7294);let i={},r=t.createContext(i);function l(a){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof a?a(e):{...e,...a}},[e,a])}function d(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(i):a.components||i:l(a.components),t.createElement(r.Provider,{value:e},a.children)}}}]);