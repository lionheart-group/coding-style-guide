"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[9722],{7389:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var t=n(5893),o=n(1151);const i={sidebar_position:2},l="Migrations from Old rules",r={id:"html/methodologies/migrations",title:"Migrations from Old rules",description:"Don't use tag selector",source:"@site/docs/html/methodologies/migrations.mdx",sourceDirName:"html/methodologies",slug:"/html/methodologies/migrations",permalink:"/coding-style-guide/docs/html/methodologies/migrations",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/html/methodologies/migrations.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"html",previous:{title:"About Methodologies",permalink:"/coding-style-guide/docs/html/methodologies/"},next:{title:"File name and Class name",permalink:"/coding-style-guide/docs/html/methodologies/important/name"}},c={},d=[{value:"Don&#39;t use tag selector",id:"dont-use-tag-selector",level:2},{value:"Removed Views layer",id:"removed-views-layer",level:2},{value:"Change Utility class names",id:"change-utility-class-names",level:2}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"migrations-from-old-rules",children:"Migrations from Old rules"}),"\n",(0,t.jsx)(s.h2,{id:"dont-use-tag-selector",children:"Don't use tag selector"}),"\n",(0,t.jsxs)(s.p,{children:["We allowed the child selector, but we changed the rule. Because, child selector has a week point. When you change the tag structures (e.g. when you change ",(0,t.jsx)(s.code,{children:"<span>"})," to ",(0,t.jsx)(s.code,{children:"<a>"}),"), child selector won't be available."]}),"\n",(0,t.jsxs)(s.p,{children:["Detail: ",(0,t.jsx)(s.a,{href:"/docs/html/methodologies/important/selector",children:"Don't use tag selector"})]}),"\n",(0,t.jsx)(s.h2,{id:"removed-views-layer",children:"Removed Views layer"}),"\n",(0,t.jsxs)(s.p,{children:["We removed ",(0,t.jsx)(s.code,{children:"Views"})," layer, and we use ",(0,t.jsx)(s.code,{children:"Project"})," as define patterns which are unique layout for each page."]}),"\n",(0,t.jsx)(s.p,{children:"Then, you don't need to import each page's css from HTML."}),"\n",(0,t.jsxs)(s.p,{children:["Detail: ",(0,t.jsx)(s.a,{href:"/docs/html/methodologies/object/project",children:"Project"})]}),"\n",(0,t.jsx)(s.h2,{id:"change-utility-class-names",children:"Change Utility class names"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["The class of displaying PC or SP style","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:".sp"}),", ",(0,t.jsx)(s.code,{children:".pc"})," -> ",(0,t.jsx)(s.code,{children:".u-sp-only"}),", ",(0,t.jsx)(s.code,{children:".u-pc-only"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["The class of enabling anchor only displaying SP layout","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:".u-tel-anchor"})," -> ",(0,t.jsx)(s.code,{children:".u-anchor-tel"})]}),"\n",(0,t.jsxs)(s.li,{children:["Also, you can assign this class to ",(0,t.jsx)(s.code,{children:"<a href>"})," instead ",(0,t.jsx)(s.code,{children:"<span data-href>"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>l});var t=n(7294);const o={},i=t.createContext(o);function l(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);