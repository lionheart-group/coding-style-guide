"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[8587],{6085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var i=n(5893),s=n(1151);const d={sidebar_position:2},l="Application::setHidden",a={id:"fegg/basic/templates/helpers/sethidden",title:"Application::setHidden",description:"Set hidden data",source:"@site/docs/fegg/basic/templates/helpers/sethidden.mdx",sourceDirName:"fegg/basic/templates/helpers",slug:"/fegg/basic/templates/helpers/sethidden",permalink:"/coding-style-guide/docs/fegg/basic/templates/helpers/sethidden",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/basic/templates/helpers/sethidden.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"fegg",previous:{title:"Application::setSiteinfo",permalink:"/coding-style-guide/docs/fegg/basic/templates/helpers/setsiteinfo"},next:{title:"Application::setHtmlHeader",permalink:"/coding-style-guide/docs/fegg/basic/templates/helpers/sethtmlheader"}},r={},c=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2},{value:"Assigning Multiple Parameters",id:"assigning-multiple-parameters",level:3}];function o(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"applicationsethidden",children:"Application::setHidden"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Set hidden data"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-php",children:'public void Application::setHidden( mixed $name, [ string $value = "" ] )\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Set input field hidden to your template from controller. In template, write ",(0,i.jsx)(t.code,{children:"{{ hidden }}"}),", this will display ",(0,i.jsx)(t.code,{children:'<input type="hidden">'})," with your assigned name and value."]}),"\n",(0,i.jsxs)(t.p,{children:["See also ",(0,i.jsx)(t.a,{href:"#",children:"Hidden"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Data type"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Remarks"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"$id"}),(0,i.jsx)(t.td,{children:"string / array"}),(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:["hidden name. If in array, syntax must be ",(0,i.jsx)(t.code,{children:"array($name => $value)"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"$value"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:'""'}),(0,i.jsx)(t.td,{children:"hidden value"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-php",metastring:'title="Controller"',children:"$this->setHidden( 'foo', 'bar' );\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",metastring:'title="Template"',children:"{{ hidden }}\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",metastring:'title="Output"',children:'<input type="hidden" name="foo" value="bar">\n'})}),"\n",(0,i.jsx)(t.h3,{id:"assigning-multiple-parameters",children:"Assigning Multiple Parameters"}),"\n",(0,i.jsx)(t.p,{children:"You can assign multiple parameters."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-php",metastring:'title="Controller"',children:"$params = array(\n    'foo' => 'bar',\n    'baz' => 'qux',\n);\n$this->setHidden($params);\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",metastring:'title="Template"',children:"{{ hidden }}\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",metastring:'title="Output"',children:'<input type="hidden" name="foo" value="bar">\n<input type="hidden" name="baz" value="qux">\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>l});var i=n(7294);const s={},d=i.createContext(s);function l(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);