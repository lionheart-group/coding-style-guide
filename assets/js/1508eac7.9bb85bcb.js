"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[782],{4870:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var s=i(5893),n=i(1151);const l={sidebar_position:1},r="Application::setSiteinfo",d={id:"fegg/basic/templates/helpers/setsiteinfo",title:"Application::setSiteinfo",description:"Set website information (ex. title, description, keywords)",source:"@site/docs/fegg/basic/templates/helpers/setsiteinfo.mdx",sourceDirName:"fegg/basic/templates/helpers",slug:"/fegg/basic/templates/helpers/setsiteinfo",permalink:"/coding-style-guide/docs/fegg/basic/templates/helpers/setsiteinfo",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/basic/templates/helpers/setsiteinfo.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"fegg",previous:{title:"Application::displayPage",permalink:"/coding-style-guide/docs/fegg/basic/templates/methods/displaypage"},next:{title:"Application::setHidden",permalink:"/coding-style-guide/docs/fegg/basic/templates/helpers/sethidden"}},a={},o=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}];function c(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"applicationsetsiteinfo",children:"Application::setSiteinfo"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Set website information (ex. title, description, keywords)"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",children:"public void Application::setSiteinfo( string $id, string $value )\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Set website information (ex. title, description, keywords). Assigned values will be stored in ",(0,s.jsx)(t.code,{children:"$site"})," variable that you can use in template."]}),"\n",(0,s.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Data type"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Remarks"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"$id"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Key"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"$value"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Value"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",metastring:'title="Controller"',children:"$this->setSiteinfo( 'title', 'Site Title' );\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",metastring:'title="Template"',children:"<title>{{ $site.title }}</title>\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",metastring:'title="Output"',children:"<title>Site Title</title>\n"})})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>d,a:()=>r});var s=i(7294);const n={},l=s.createContext(n);function r(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);