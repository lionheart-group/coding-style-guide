"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[8170],{1746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>r});var s=n(5893),o=n(1151);const i={sidebar_position:7},c="Options",a={id:"fegg/basic/templates/rules/options",title:"Options",description:"Make option tags",source:"@site/docs/fegg/basic/templates/rules/options.mdx",sourceDirName:"fegg/basic/templates/rules",slug:"/fegg/basic/templates/rules/options",permalink:"/coding-style-guide/ja/docs/fegg/basic/templates/rules/options",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/basic/templates/rules/options.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"fegg",previous:{title:"Checked/Selected",permalink:"/coding-style-guide/ja/docs/fegg/basic/templates/rules/checked_selected"},next:{title:"Hidden",permalink:"/coding-style-guide/ja/docs/fegg/basic/templates/rules/hidden"}},l={},r=[{value:"Example",id:"example",level:2}];function d(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"options",children:"Options"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Make option tags"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",children:"{{ options source=$array selected=$selected }}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Make ",(0,s.jsx)(t.code,{children:"<option>"})," from ",(0,s.jsx)(t.code,{children:"$array"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",metastring:'title="Template"',children:"/*\n$values = array(\n    'foo' => 'bar',\n    'baz' => 'qux'\n);\n$selected = 'foo';\n*/\n\n<select name=\"select\">\n    {{ options source=$values selected=$selected }}\n</select>\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",metastring:'title="Output"',children:'<select name="select">\n    <option value="foo" selected="selected">bar</option>\n    <option value="baz">qux</option>\n</select>\n'})})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>c});var s=n(7294);const o={},i=s.createContext(o);function c(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);