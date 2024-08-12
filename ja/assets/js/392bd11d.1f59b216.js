"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[4032],{4644:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=i(5893),n=i(1151);const s={sidebar_position:2},a="Application::getCookie",r={id:"fegg/basic/parameters/cookie/getcookie",title:"Application::getCookie",description:"Get COOKIE data",source:"@site/docs/fegg/basic/parameters/cookie/getcookie.mdx",sourceDirName:"fegg/basic/parameters/cookie",slug:"/fegg/basic/parameters/cookie/getcookie",permalink:"/coding-style-guide/ja/docs/fegg/basic/parameters/cookie/getcookie",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/basic/parameters/cookie/getcookie.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"fegg",previous:{title:"Application::setCookie",permalink:"/coding-style-guide/ja/docs/fegg/basic/parameters/cookie/setcookie"},next:{title:"Application::unsetCookie",permalink:"/coding-style-guide/ja/docs/fegg/basic/parameters/cookie/unsetcookie"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2},{value:"Get all cookie datas",id:"get-all-cookie-datas",level:3}];function d(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"applicationgetcookie",children:"Application::getCookie"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Get COOKIE data"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-php",children:'public void Application::getCookie( [ string $name = "" ] )\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Get COOKIE data. If you omit argument, ",(0,o.jsx)(t.code,{children:"getCookie"})," return all COOKIE data."]}),"\n",(0,o.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,o.jsx)(t.th,{style:{textAlign:"left"},children:"Data type"}),(0,o.jsx)(t.th,{style:{textAlign:"left"},children:"Default"}),(0,o.jsx)(t.th,{style:{textAlign:"left"},children:"Remarks"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:"$name"}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,o.jsx)(t.td,{style:{textAlign:"left"}}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:"Cookie param key"})]})})]}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-php",metastring:'title="Controller - First.php"',children:"$this->setCookie('foo', 'bar');\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-php",metastring:'title="Controller - Second.php"',children:"$this->getCookie('foo'); // -> bar\n"})}),"\n",(0,o.jsx)(t.h3,{id:"get-all-cookie-datas",children:"Get all cookie datas"}),"\n",(0,o.jsxs)(t.p,{children:["If you omit argument, ",(0,o.jsx)(t.code,{children:"getCookie"})," return all COOKIE data."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-php",metastring:'title="Controller - First.php"',children:"$this->setCookie('foo', 'bar');\n$this->setCookie('baz', 'qux');\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-php",metastring:'title="Controller - Second.php"',children:"var_dump( $this->getCookie() );\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",metastring:'title="Output"',children:'array(2) { ["foo"]=> string(3) "bar" ["baz"]=> string(3) "qux" }\n'})})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>a});var o=i(7294);const n={},s=o.createContext(n);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);