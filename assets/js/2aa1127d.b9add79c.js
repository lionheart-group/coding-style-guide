"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[8926],{4635:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>o});var s=i(5893),n=i(1151);const c={sidebar_position:1},l="Application::setTicket",r={id:"fegg/basic/others/tickets/setticket",title:"Application::setTicket",description:"Set ticket data and start ticket session",source:"@site/docs/fegg/basic/others/tickets/setticket.mdx",sourceDirName:"fegg/basic/others/tickets",slug:"/fegg/basic/others/tickets/setticket",permalink:"/coding-style-guide/docs/fegg/basic/others/tickets/setticket",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/basic/others/tickets/setticket.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"fegg",previous:{title:"Application::loadConfig",permalink:"/coding-style-guide/docs/fegg/basic/others/config/loadconfig"},next:{title:"Application::useTicket",permalink:"/coding-style-guide/docs/fegg/basic/others/tickets/useticket"}},a={},o=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"applicationsetticket",children:"Application::setTicket"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Set ticket data and start ticket session"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",children:"public void Application::setTicket( string $name )\n"})}),"\n",(0,s.jsx)(t.p,{children:"Set ticket data and start ticket session"}),"\n",(0,s.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Data type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Default"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Remarks"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"$name"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Ticket param key"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",metastring:'title="Controller"',children:"$this->setTicket('foo');\n\n$foo = $this->getSession('ticket_foo');\necho $foo;\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",metastring:'title="Output"',children:"670f2f1232f30d4d716c1bc9c8a58388\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Once the ",(0,s.jsx)(t.code,{children:"setTicket"})," method is called, it will return a hashed random string and will start a new session with your given parameter as key prefixed with ticket_, the returned string will be its value. This will also automatically use the ",(0,s.jsx)(t.code,{children:"setHidden"})," method that you can set on form for security evaluation."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",metastring:'title="Template"',children:"{{ hidden }}\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",metastring:'title="Output"',children:"<input type='hidden' name='ticket_foo' value='670f2f1232f30d4d716c1bc9c8a58388' />\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>l});var s=i(7294);const n={},c=s.createContext(n);function l(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);