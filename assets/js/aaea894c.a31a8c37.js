"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[5686],{2867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var i=n(5893),s=n(1151);const l={sidebar_position:3},o="Utility",r={id:"html/methodologies/object/utility",title:"Utility",description:"Utility classes define small and simple styles used to adjust minimal style changes that are difficult to or not appropriate to define in the Object modifiers of Component and Project layer.",source:"@site/docs/html/methodologies/object/utility.mdx",sourceDirName:"html/methodologies/object",slug:"/html/methodologies/object/utility",permalink:"/coding-style-guide/docs/html/methodologies/object/utility",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/html/methodologies/object/utility.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"html",previous:{title:"Project",permalink:"/coding-style-guide/docs/html/methodologies/object/project"},next:{title:"About Task Runner",permalink:"/coding-style-guide/docs/html/task-runner/"}},c={},d=[{value:"Typical Utility classes",id:"typical-utility-classes",level:2},{value:".u-<code>{**}</code>-only",id:"u--only",level:3},{value:".u-font-sans / .u-font-serif",id:"u-font-sans--u-font-serif",level:3},{value:".u-anchor-tel",id:"u-anchor-tel",level:3},{value:"And more...",id:"and-more",level:3}];function a(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"utility",children:"Utility"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Utility classes define small and simple styles used to adjust minimal style changes that are difficult to or not appropriate to define in the Object modifiers of Component and Project layer."}),"\n",(0,i.jsxs)(t.p,{children:["Utility classes can prevent Object modifiers in the Component and Project layer from increasing inexhaustibly. In addition, Utility classes can be used to apply margins such as ",(0,i.jsx)(t.code,{children:".mbs { margin-bottom: 10px; }"})," that the Object itself should not hold."]}),"\n",(0,i.jsx)(t.p,{children:"In addition, helper classes that define the rule sets such as the clearfix technique should also be included in this layer."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["You must use ",(0,i.jsx)(t.code,{children:".u-"})," prefix for Utility."]}),"\n",(0,i.jsx)(t.h2,{id:"typical-utility-classes",children:"Typical Utility classes"}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"There is a possibility to created unique Utility classes for each web site, so please check this just a reference."})}),"\n",(0,i.jsxs)(t.h3,{id:"u--only",children:[".u-",(0,i.jsx)(t.code,{children:"{**}"}),"-only"]}),"\n",(0,i.jsx)(t.p,{children:"Display only each break points layout."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Class Name"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"<= 750px"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"750px < and <= 1060px"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"1060px <"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:".u-pc-only"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:".u-under-pc-only"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:".u-tb-only"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:".u-over-sp-only"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:".u-sp-only"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]})]})]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"The above breakpoint is just an example. You can change the breakpoint according to your project."})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Before, we used these styles as ",(0,i.jsx)(t.code,{children:".pc"})," and ",(0,i.jsx)(t.code,{children:".sp"})," class names."]})}),"\n",(0,i.jsx)(t.h3,{id:"u-font-sans--u-font-serif",children:".u-font-sans / .u-font-serif"}),"\n",(0,i.jsx)(t.p,{children:"Display text as Sans-serif or Serif font."}),"\n",(0,i.jsx)(t.h3,{id:"u-anchor-tel",children:".u-anchor-tel"}),"\n",(0,i.jsx)(t.p,{children:"Style for tel link. This class is used to prevent to click the tel link on the PC devices."}),"\n",(0,i.jsx)(t.h3,{id:"and-more",children:"And more..."}),"\n",(0,i.jsx)(t.p,{children:"There are many Utility classes that are used in each project. Please check the Utility classes that are used in your project."})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var i=n(7294);const s={},l=i.createContext(s);function o(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);