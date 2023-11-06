"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[4752],{5516:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>t,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var r=n(5893),l=n(1151);const a={sidebar_position:1},s="Introduction",d={id:"fegg/library/validation/index",title:"Introduction",description:"Providing some functions for validation",source:"@site/docs/fegg/library/validation/index.mdx",sourceDirName:"fegg/library/validation",slug:"/fegg/library/validation/",permalink:"/coding-style-guide/ja/docs/fegg/library/validation/",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/validation/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"fegg",previous:{title:"About Extension libraries",permalink:"/coding-style-guide/ja/docs/fegg/library/"},next:{title:"Configuration",permalink:"/coding-style-guide/ja/docs/fegg/library/validation/configuration"}},t={},o=[{value:"How to use",id:"how-to-use",level:2},{value:"Methods",id:"methods",level:2}];function c(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsx)(i.p,{children:"Providing some functions for validation"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,r.jsxs)(i.p,{children:["You can load ",(0,r.jsx)(i.code,{children:"Validation"})," class through ",(0,r.jsx)(i.code,{children:"Application::getClass"})," method."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-php",metastring:'title="Controller"',children:"$validation = $this->getClass('Validation');\n\n// Check Required\n$name = 'Field Label';\n$id   = 'field_name';\n$validation->required($id, $this->in($id), array('@required', $name));\n\n// Get Error\n$errorMessage = $validation->getErrorMessage();\n"})}),"\n",(0,r.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/docs/fegg/library/validation/methods/required",children:"Validation::required"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Check required"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/docs/fegg/library/validation/methods/alphameric",children:"Validation::alphameric"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Check alphanumeric or not"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/docs/fegg/library/validation/methods/numeric",children:"Validation::numeric"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Check numeric or not"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/docs/fegg/library/validation/methods/date",children:"Validation::date"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Check valid date string"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/docs/fegg/library/validation/methods/email",children:"Validation::email"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Check valid E-mail string"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/docs/fegg/library/validation/methods/tel",children:"Validation::tel"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Check valid tel character (+ - 0-9)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/docs/fegg/library/validation/methods/time",children:"Validation::time"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Check valid time character (: 0-9)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/docs/fegg/library/validation/methods/url",children:"Validation::url"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Check valid url character"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/docs/fegg/library/validation/methods/zipcode",children:"Validation::zipcode"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Check valid zip code character (for JP only)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/docs/fegg/library/validation/methods/userid",children:"Validation::userId"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Check allowed character for UserID (- _ . 0-9)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/docs/fegg/library/validation/methods/password",children:"Validation::password"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Check allowed character to Password"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/docs/fegg/library/validation/methods/maxbyte",children:"Validation::maxbyte"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Check character byte"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/docs/fegg/library/validation/methods/length",children:"Validation::length"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Check character length"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/docs/fegg/library/validation/methods/maxlength",children:"Validation::maxlength"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Check character less than maximum length"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/docs/fegg/library/validation/methods/minlength",children:"Validation::minlength"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Check character more than minimum length"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/docs/fegg/library/validation/methods/hankaku",children:"Validation::hankaku"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Check half-width character for Multi byte string language"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/docs/fegg/library/validation/methods/katakana",children:"Validation::katakana"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Check Katakana chracter for Japanese language"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/docs/fegg/library/validation/methods/seterror",children:"Validation::setError"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Set Error status"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/docs/fegg/library/validation/methods/seterrormessage",children:"Validation::setErrorMessage"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Set Error message"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/docs/fegg/library/validation/methods/iserror",children:"Validation::isError"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Confirm Error status"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/docs/fegg/library/validation/methods/geterrormessage",children:"Validation::getErrorMessage"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Get Error message"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>d,a:()=>s});var r=n(7294);const l={},a=r.createContext(l);function s(e){const i=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(a.Provider,{value:i},e.children)}}}]);