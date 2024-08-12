"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[8174],{5404:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>a});var s=i(5893),r=i(1151);const l={sidebar_position:1},o="About Extension libraries",t={id:"fegg/library/index",title:"About Extension libraries",description:"Fegg's goal is lightweight and less typing, so Core class has the only minimum required functions. That's why, if you want additional functions, you can install extension libraries.",source:"@site/docs/fegg/library/index.mdx",sourceDirName:"fegg/library",slug:"/fegg/library/",permalink:"/coding-style-guide/docs/fegg/library/",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"fegg",previous:{title:"Application::useTicket",permalink:"/coding-style-guide/docs/fegg/basic/others/tickets/useticket"},next:{title:"Introduction",permalink:"/coding-style-guide/docs/fegg/library/validation/"}},d={},a=[{value:"Extension Libraries",id:"extension-libraries",level:2},{value:"External Libraries",id:"external-libraries",level:2}];function c(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"about-extension-libraries",children:"About Extension libraries"})}),"\n",(0,s.jsx)(e.p,{children:"Fegg's goal is lightweight and less typing, so Core class has the only minimum required functions. That's why, if you want additional functions, you can install extension libraries."}),"\n",(0,s.jsx)(e.h2,{id:"extension-libraries",children:"Extension Libraries"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"/docs/fegg/library/validation",children:"Validation"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Providing some functions for validation"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"/docs/fegg/library/database",children:"Database"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Providing necessary functions for using database"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"/docs/fegg/library/model",children:"Model"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Extended Database Library for LH project"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"/docs/fegg/library/file",children:"File"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Providing some functions for managing files/directories"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"/docs/fegg/library/upload",children:"Upload"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Providing some functions for uploading/validating files"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"/docs/fegg/library/mail",children:"Mail"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Providing some functions for sending email"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"/docs/fegg/library/rss",children:"RSS"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Providing some functions for analyzing RSS document"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"/docs/fegg/library/trim",children:"Trim"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Providing some functions for processing image (especially image crop)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"external-libraries",children:"External Libraries"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"https://github.com/mustangostang/spyc",children:"Spyc"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"YAML document loader"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"https://github.com/pear/Services_JSON",children:"JSON"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Json document loader"}),"\n",(0,s.jsxs)(e.li,{children:["Mainly You don't need to use this, you can just use ",(0,s.jsx)(e.code,{children:"json_encode"})," and ",(0,s.jsx)(e.code,{children:"json_decode"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>t,a:()=>o});var s=i(7294);const r={},l=s.createContext(r);function o(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);