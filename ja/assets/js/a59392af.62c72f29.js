"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[3405],{2570:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>o});var n=i(5893),l=i(1151);const s={sidebar_position:7},d="Mail::send",r={id:"fegg/library/mail/methods/send",title:"Mail::send",description:"Send email",source:"@site/docs/fegg/library/mail/methods/send.mdx",sourceDirName:"fegg/library/mail/methods",slug:"/fegg/library/mail/methods/send",permalink:"/coding-style-guide/ja/docs/fegg/library/mail/methods/send",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/mail/methods/send.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"fegg",previous:{title:"Mail::pushAttached",permalink:"/coding-style-guide/ja/docs/fegg/library/mail/methods/pushattached"},next:{title:"Mail::sendWithFile",permalink:"/coding-style-guide/ja/docs/fegg/library/mail/methods/sendwithfile"}},a={},o=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"mailsend",children:"Mail::send"}),"\n",(0,n.jsx)(t.p,{children:"Send email"}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["If there is added attachment file, this method will call ",(0,n.jsx)(t.a,{href:"/docs/fegg/library/mail/methods/sendwithfile",children:"Mail::sendWithFile"})," automatically"]})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["If debug flag is enabled, this method will call ",(0,n.jsx)(t.a,{href:"/docs/fegg/library/mail/methods/log",children:"Mail::log"})," automatically"]})}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:"public self Mail::send( string $to, [ string $from_name = null, string $from_ad = null ] )\n"})}),"\n",(0,n.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Data type"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Remarks"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"$to"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Send email address"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"$from_name"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"null"}),(0,n.jsx)(t.td,{children:"Sender name"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"$from_ad"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"null"}),(0,n.jsx)(t.td,{children:"Sender address"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",metastring:'title="Controller"',children:"$mail = $this->getClass('Tool/Mail');\n$mail->subject('Mail subject');\n$mail->body('Mail body');\n\n$mail->send('mail@example.com', 'John Doe', 'from@example.com');\n"})})]})}function h(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>d});var n=i(7294);const l={},s=n.createContext(l);function d(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);