"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[2635],{1625:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var n=s(5893),i=s(1151);const l={sidebar_position:1},r="Application::setSession",a={id:"fegg/basic/parameters/session/setsession",title:"Application::setSession",description:"Set SESSION data (and call session_start)",source:"@site/docs/fegg/basic/parameters/session/setsession.mdx",sourceDirName:"fegg/basic/parameters/session",slug:"/fegg/basic/parameters/session/setsession",permalink:"/coding-style-guide/docs/fegg/basic/parameters/session/setsession",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/basic/parameters/session/setsession.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"fegg",previous:{title:"Application::in",permalink:"/coding-style-guide/docs/fegg/basic/parameters/post_get/in"},next:{title:"Application::getSession",permalink:"/coding-style-guide/docs/fegg/basic/parameters/session/getsession"}},o={},d=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function c(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"applicationsetsession",children:"Application::setSession"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Set SESSION data (and call session_start)"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:"public void Application::setSession( string $name, mixed $value )\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Set SESSION data and automatically call ",(0,n.jsx)(t.code,{children:"session_start"})," method."]}),"\n",(0,n.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Data type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Default"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Remarks"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"$name"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Session param key"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"$method"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"mixed"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Value"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",metastring:'title="Controller"',children:"$this->setSession('foo', 'bar');\n"})})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>r});var n=s(7294);const i={},l=n.createContext(i);function r(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);