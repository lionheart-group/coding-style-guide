"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[9239],{3568:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=t(5893),i=t(1151);const a={sidebar_position:2},l="Application::getSession",r={id:"fegg/basic/parameters/session/getsession",title:"Application::getSession",description:"Get SESSION data",source:"@site/docs/fegg/basic/parameters/session/getsession.mdx",sourceDirName:"fegg/basic/parameters/session",slug:"/fegg/basic/parameters/session/getsession",permalink:"/coding-style-guide/ja/docs/fegg/basic/parameters/session/getsession",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/basic/parameters/session/getsession.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"fegg",previous:{title:"Application::setSession",permalink:"/coding-style-guide/ja/docs/fegg/basic/parameters/session/setsession"},next:{title:"Application::unsetSession",permalink:"/coding-style-guide/ja/docs/fegg/basic/parameters/session/unsetsession"}},o={},c=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2},{value:"Get all session datas",id:"get-all-session-datas",level:3}];function d(e){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"applicationgetsession",children:"Application::getSession"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Get SESSION data"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-php",children:'public void Application::getSession( [ string $name = "" ] )\n'})}),"\n",(0,n.jsxs)(s.p,{children:["Get SESSION data. If you omit argument, ",(0,n.jsx)(s.code,{children:"getSession"})," return all SESSION data."]}),"\n",(0,n.jsx)(s.h2,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Data type"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Default"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Remarks"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"$name"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsx)(s.td,{style:{textAlign:"left"}}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"Session param key"})]})})]}),"\n",(0,n.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-php",metastring:'title="Controller - First.php"',children:"$this->setSession('foo', 'bar');\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-php",metastring:'title="Controller - Second.php"',children:"$this->getSession('foo'); // -> bar\n"})}),"\n",(0,n.jsx)(s.h3,{id:"get-all-session-datas",children:"Get all session datas"}),"\n",(0,n.jsxs)(s.p,{children:["If you omit argument, ",(0,n.jsx)(s.code,{children:"getSession"})," return all SESSION data."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-php",metastring:'title="Controller - First.php"',children:"$this->setSession('foo', 'bar');\n$this->setSession('baz', 'qux');\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-php",metastring:'title="Controller - Second.php"',children:"var_dump( $this->getSession() );\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-html",metastring:'title="Output"',children:'array(2) { ["foo"]=> string(3) "bar" ["baz"]=> string(3) "qux" }\n'})})]})}function p(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>r,a:()=>l});var n=t(7294);const i={},a=n.createContext(i);function l(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);