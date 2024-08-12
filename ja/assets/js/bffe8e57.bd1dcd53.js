"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[7305],{1315:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var t=r(5893),a=r(1151);const l={sidebar_position:9},s="Code",o={id:"fegg/basic/templates/rules/code",title:"Code",description:"call, code",source:"@site/docs/fegg/basic/templates/rules/code.mdx",sourceDirName:"fegg/basic/templates/rules",slug:"/fegg/basic/templates/rules/code",permalink:"/coding-style-guide/ja/docs/fegg/basic/templates/rules/code",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/basic/templates/rules/code.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"fegg",previous:{title:"Hidden",permalink:"/coding-style-guide/ja/docs/fegg/basic/templates/rules/hidden"},next:{title:"About Parameters",permalink:"/coding-style-guide/ja/docs/fegg/basic/parameters/"}},c={},i=[{value:"Example",id:"example",level:2},{value:"code",id:"code-1",level:3},{value:"call",id:"call",level:3}];function d(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"code",children:"Code"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"call, code"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"{{ code some_php_scripts(); }}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Run writed PHP scripts, like ",(0,t.jsx)(n.code,{children:"eval"})," method."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"{{ call '/controller/method/params' }}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Call another Controller methods."}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.h3,{id:"code-1",children:"code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",metastring:'title="Template"',children:"{{ code phpinfo(); }}\n// Run phpinfo();\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",metastring:'title="Template"',children:"{{ code $array = array('foo', 'bar'); var_dump( array_reverse($array) ); }}\n// Run $array = array('foo', 'bar'); var_dump( array_reverse($array) );\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="Output"',children:'array(2) { [0]=> string(3) "bar" [1]=> string(3) "foo" }\n'})}),"\n",(0,t.jsx)(n.h3,{id:"call",children:"call"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",metastring:'title="Template"',children:"{{ call '/controller/method/params' }}\n// Call Controller::method('params');\n\n{{ call '/Person/get/id/1' }}\n// Call Person::get('id', '1');\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>s});var t=r(7294);const a={},l=t.createContext(a);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);