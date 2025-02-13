"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([["8192"],{6552:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>n,assets:()=>s,toc:()=>o,contentTitle:()=>l});var n=JSON.parse('{"id":"fegg/library/validation/methods/time","title":"Validation::time","description":"Check valid time character (: 0-9)","source":"@site/docs/fegg/library/validation/methods/time.mdx","sourceDirName":"fegg/library/validation/methods","slug":"/fegg/library/validation/methods/time","permalink":"/coding-style-guide/ja/docs/fegg/library/validation/methods/time","draft":false,"unlisted":false,"editUrl":"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/validation/methods/time.mdx","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"fegg","previous":{"title":"Validation::tel","permalink":"/coding-style-guide/ja/docs/fegg/library/validation/methods/tel"},"next":{"title":"Validation::url","permalink":"/coding-style-guide/ja/docs/fegg/library/validation/methods/url"}}'),r=i("5893"),a=i("65");let d={sidebar_position:7},l="Validation::time",s={},o=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function c(e){let t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"validationtime",children:"Validation::time"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Check valid time character (: 0-9)"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",children:"public boolean Validation::time( string $name, mixed $value, [ mixed $code = '' ] )\n"})}),"\n",(0,r.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Data type"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Remarks"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"$name"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Item label"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"$value"}),(0,r.jsx)(t.td,{children:"mixed"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Check field value"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"$code"}),(0,r.jsx)(t.td,{children:"mixed"}),(0,r.jsx)(t.td,{children:'""'}),(0,r.jsx)(t.td,{children:"Error code or Error message"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",metastring:'title="Controller"',children:"$validation = $this->getClass('Validation');\n\n// If $value is Tel string\n$successName = 'Success Field';\n$successVar  = '00:00:00';\n$validation->time('success', $successVar, array('@time', $successName));\n\nvar_dump($validation->isError()); // -> false\nvar_dump($validation->getErrorMessage()); // -> null\n\n// If $value is not Tel string\n$failedName = 'Failed Field';\n$failedVar  = '2000/01/01';\n$validation->time('failed', $failedVar, array('@time', $failedName));\n\nvar_dump($validation->isError()); // -> true\nvar_dump($validation->getErrorMessage());\n// -> \"failed\" => \"<strong>Failed Field</strong> \u306E\u6642\u9593\u3067\u306F\u767B\u9332\u3067\u304D\u307E\u305B\u3093\"\n"})})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},65:function(e,t,i){i.d(t,{Z:function(){return l},a:function(){return d}});var n=i(7294);let r={},a=n.createContext(r);function d(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);