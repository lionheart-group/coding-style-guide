"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([["368"],{2675:function(e,i,t){t.r(i),t.d(i,{default:()=>h,frontMatter:()=>a,metadata:()=>n,assets:()=>s,toc:()=>o,contentTitle:()=>l});var n=JSON.parse('{"id":"fegg/library/validation/methods/zipcode","title":"Validation::zipcode","description":"Check valid zip code character (for JP only)","source":"@site/docs/fegg/library/validation/methods/zipcode.mdx","sourceDirName":"fegg/library/validation/methods","slug":"/fegg/library/validation/methods/zipcode","permalink":"/coding-style-guide/docs/fegg/library/validation/methods/zipcode","draft":false,"unlisted":false,"editUrl":"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/validation/methods/zipcode.mdx","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_position":9},"sidebar":"fegg","previous":{"title":"Validation::url","permalink":"/coding-style-guide/docs/fegg/library/validation/methods/url"},"next":{"title":"Validation::userId","permalink":"/coding-style-guide/docs/fegg/library/validation/methods/userid"}}'),d=t("5893"),r=t("65");let a={sidebar_position:9},l="Validation::zipcode",s={},o=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function c(e){let i={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.header,{children:(0,d.jsx)(i.h1,{id:"validationzipcode",children:"Validation::zipcode"})}),"\n",(0,d.jsxs)(i.blockquote,{children:["\n",(0,d.jsx)(i.p,{children:"Check valid zip code character (for JP only)"}),"\n"]}),"\n",(0,d.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-php",children:"public boolean Validation::zipcode( string $name, mixed $value, [ mixed $code = '' ] )\n"})}),"\n",(0,d.jsx)(i.h2,{id:"arguments",children:"Arguments"}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"Name"}),(0,d.jsx)(i.th,{children:"Data type"}),(0,d.jsx)(i.th,{children:"Default"}),(0,d.jsx)(i.th,{children:"Remarks"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"$name"}),(0,d.jsx)(i.td,{children:"string"}),(0,d.jsx)(i.td,{}),(0,d.jsx)(i.td,{children:"Item label"})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"$value"}),(0,d.jsx)(i.td,{children:"mixed"}),(0,d.jsx)(i.td,{}),(0,d.jsx)(i.td,{children:"Check field value"})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"$code"}),(0,d.jsx)(i.td,{children:"mixed"}),(0,d.jsx)(i.td,{children:'""'}),(0,d.jsx)(i.td,{children:"Error code or Error message"})]})]})]}),"\n",(0,d.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-php",metastring:'title="Controller"',children:"$validation = $this->getClass('Validation');\n\n// If $value is Zip code string\n$successName = 'Success Field';\n$successVar  = '100-0001';\n$validation->zipcode('success', $successVar, array('@zipcode', $successName));\n\nvar_dump($validation->isError()); // -> false\nvar_dump($validation->getErrorMessage()); // -> null\n\n// If $value is not Zip code string\n$failedName = 'Failed Field';\n$failedVar  = '000-000-0000';\n$validation->zipcode('failed', $failedVar, array('@zipcode', $failedName));\n\nvar_dump($validation->isError()); // -> true\nvar_dump($validation->getErrorMessage());\n// -> \"failed\" => \"<strong>Failed Field</strong> \u306F\u767B\u9332\u3067\u304D\u306A\u3044\u5F62\u5F0F\u3067\u3059\"\n"})})]})}function h(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,d.jsx)(i,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},65:function(e,i,t){t.d(i,{Z:function(){return l},a:function(){return a}});var n=t(7294);let d={},r=n.createContext(d);function a(e){let i=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);