"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[6693],{4915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var i=n(5893),s=n(1151);const o={sidebar_position:3},r="Application::unsetCookie",l={id:"fegg/basic/parameters/cookie/unsetcookie",title:"Application::unsetCookie",description:"Unset COOKIE data",source:"@site/docs/fegg/basic/parameters/cookie/unsetcookie.mdx",sourceDirName:"fegg/basic/parameters/cookie",slug:"/fegg/basic/parameters/cookie/unsetcookie",permalink:"/coding-style-guide/ja/docs/fegg/basic/parameters/cookie/unsetcookie",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/basic/parameters/cookie/unsetcookie.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"fegg",previous:{title:"Application::getCookie",permalink:"/coding-style-guide/ja/docs/fegg/basic/parameters/cookie/getcookie"},next:{title:"About Other methods",permalink:"/coding-style-guide/ja/docs/fegg/basic/others/"}},c={},a=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"applicationunsetcookie",children:"Application::unsetCookie"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Unset COOKIE data"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-php",children:'public void Application::unsetCookie( [ string $name = "" ] )\n'})}),"\n",(0,i.jsx)(t.p,{children:"Unset COOKIE data."}),"\n",(0,i.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Data type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Default"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Remarks"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"$name"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Cookie param key"})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-php",metastring:'title="Controller - First.php"',children:"$this->setCookie('foo', 'bar');\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-php",metastring:'title="Controller - Second.php"',children:"$this->getCookie('foo'); // -> bar\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-php",metastring:'title="Controller - Third.php"',children:"$this->unsetCookie('foo');\necho $this->getSession('foo'); // -> ''\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var i=n(7294);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);