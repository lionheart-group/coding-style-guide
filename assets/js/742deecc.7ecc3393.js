"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[2e3],{3738:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var s=i(5893),n=i(1151);const c={sidebar_position:2},l="Application::useTicket",r={id:"fegg/basic/others/tickets/useticket",title:"Application::useTicket",description:"Use ticket once and destroy ticket session",source:"@site/docs/fegg/basic/others/tickets/useticket.mdx",sourceDirName:"fegg/basic/others/tickets",slug:"/fegg/basic/others/tickets/useticket",permalink:"/coding-style-guide/docs/fegg/basic/others/tickets/useticket",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/basic/others/tickets/useticket.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"fegg",previous:{title:"Application::setTicket",permalink:"/coding-style-guide/docs/fegg/basic/others/tickets/setticket"},next:{title:"About Extension libraries",permalink:"/coding-style-guide/docs/fegg/library/"}},o={},d=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function a(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"applicationuseticket",children:"Application::useTicket"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Use ticket once and destroy ticket session"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",children:"public void Application::useTicket( string $name )\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Use ticket once and destroy ticket session. ",(0,s.jsx)(t.code,{children:"useTicket"})," will return boolean and will return TRUE only if the value in the hidden input is same with the ticket session in the server. See ",(0,s.jsx)(t.a,{href:"/docs/fegg/basic/others/tickets/setticket",children:"Application::setTicket"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Data type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Default"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Remarks"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"$name"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Ticket param key"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",metastring:'title="Controller"',children:"if($this->useTicket('foo'))\n{\n    //code\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>l});var s=i(7294);const n={},c=s.createContext(n);function l(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);