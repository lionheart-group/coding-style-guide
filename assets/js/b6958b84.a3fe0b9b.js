"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[658],{2368:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=o(5893),i=o(1151);const s={sidebar_position:4},l="Place of media query",a={id:"html/methodologies/important/media_query",title:"Place of media query",description:"Please write a style of one element for PC/SP collectively.",source:"@site/docs/html/methodologies/important/media_query.mdx",sourceDirName:"html/methodologies/important",slug:"/html/methodologies/important/media_query",permalink:"/coding-style-guide/docs/html/methodologies/important/media_query",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/html/methodologies/important/media_query.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"html",previous:{title:"Don't use tag selector",permalink:"/coding-style-guide/docs/html/methodologies/important/selector"},next:{title:"Don't use single class for Modifier",permalink:"/coding-style-guide/docs/html/methodologies/important/modifier"}},r={},d=[{value:"Example",id:"example",level:2}];function c(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"place-of-media-query",children:"Place of media query"})}),"\n",(0,n.jsx)(t.p,{children:"Please write a style of one element for PC/SP collectively."}),"\n",(0,n.jsx)(t.admonition,{title:"TIPS",type:"tip",children:(0,n.jsx)(t.p,{children:"We separated PC/SP layout the above and the bottom."})}),"\n",(0,n.jsx)(t.admonition,{title:"REASON",type:"info",children:(0,n.jsx)(t.p,{children:"You can find the same style with PC and SP easily when you write it collectively."})}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(t.admonition,{title:"BAD",type:"danger",children:[(0,n.jsx)(t.p,{children:"Please don't write a different layout style to the bottom of a file."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scss",metastring:'title="scss/object/component/_foo.scss"',children:".c-foo {\n    // something PC layout style\n    &__foo {\n        // something PC layout style\n    }\n}\n\n@include mq_sp {\n    .c-foo {\n        // something SP layout style\n        &__foo {\n            // something SP layout style\n        }\n    }\n}\n"})})]}),"\n",(0,n.jsxs)(t.admonition,{title:"GOOD",type:"tip",children:[(0,n.jsxs)(t.p,{children:["Please write media query under the each ",(0,n.jsx)(t.code,{children:".c-foo"})," and ",(0,n.jsx)(t.code,{children:".c-foo__bar"})," styles."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scss",metastring:'title="scss/object/component/_foo.scss"',children:".c-foo {\n    // something PC layout style\n    @include mq_sp {\n        // something SP layout style\n    }\n\n    &__foo {\n        // something PC layout style\n        @include mq_sp {\n            // something SP layout style\n        }\n    }\n}\n"})})]})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>l});var n=o(7294);const i={},s=n.createContext(i);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);