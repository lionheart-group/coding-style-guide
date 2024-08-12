"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[5188],{1670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=n(5893),i=n(1151);const o={sidebar_position:1},r="Application::in",l={id:"fegg/basic/parameters/post_get/in",title:"Application::in",description:"Get request data (POST/GET)",source:"@site/docs/fegg/basic/parameters/post_get/in.mdx",sourceDirName:"fegg/basic/parameters/post_get",slug:"/fegg/basic/parameters/post_get/in",permalink:"/coding-style-guide/docs/fegg/basic/parameters/post_get/in",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/basic/parameters/post_get/in.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"fegg",previous:{title:"About Parameters",permalink:"/coding-style-guide/docs/fegg/basic/parameters/"},next:{title:"Application::setSession",permalink:"/coding-style-guide/docs/fegg/basic/parameters/session/setsession"}},a={},c=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"applicationin",children:"Application::in"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Get request data (POST/GET)"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",children:'public void Application::in( [ string $name = "" ], [ type $method = "" ] )\n'})}),"\n",(0,s.jsx)(t.p,{children:"Get request data that automatically converted single/double quote and character code."}),"\n",(0,s.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Data type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Default"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Remarks"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"$name"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:'""'}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Request param key"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"$method"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:'""'}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"null or POST or GET"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",metastring:'title="Controller - GET"',children:"// http://example.com/?foo=get\n\necho $this->in('foo'); // -> get\necho $this->in('foo', 'get'); // -> get\necho $this->in('foo', 'post'); // -> NULL\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",metastring:'title="Controller - POST"',children:"// http://example.com/ : POST('foo' => 'post')\n\necho $this->in('foo'); // -> post\necho $this->in('foo', 'get'); // -> NULL\necho $this->in('foo', 'post'); // -> post\n"})}),"\n",(0,s.jsx)(t.p,{children:"If POST and GET have same name arguments, POST is priority than GET."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",metastring:'title="Controller - GET and POST"',children:"// http://example.com/?foo=get : POST('foo' => 'post')\n\necho $this->in('foo'); // -> post\necho $this->in('foo', 'get'); // -> get\necho $this->in('foo', 'post'); // -> post\n"})}),"\n",(0,s.jsx)(t.p,{children:"You can get all request data when omit a first argument."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",metastring:'title="Controller"',children:"// http://example.com/ : POST('foo' => 'bar', 'baz' => 'qux')\n\nvar_dump( $this->in() );\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",metastring:'title="Output"',children:'array(2) { ["foo"]=> string(3) "bar" ["baz"]=> string(3) "qux" }\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var s=n(7294);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);