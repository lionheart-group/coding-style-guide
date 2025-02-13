"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([["5933"],{419:function(e,t,n){n.r(t),n.d(t,{default:()=>o,frontMatter:()=>l,metadata:()=>i,assets:()=>r,toc:()=>c,contentTitle:()=>d});var i=JSON.parse('{"id":"fegg/basic/templates/helpers/sethidden","title":"Application::setHidden","description":"Set hidden data","source":"@site/docs/fegg/basic/templates/helpers/sethidden.mdx","sourceDirName":"fegg/basic/templates/helpers","slug":"/fegg/basic/templates/helpers/sethidden","permalink":"/coding-style-guide/ja/docs/fegg/basic/templates/helpers/sethidden","draft":false,"unlisted":false,"editUrl":"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/basic/templates/helpers/sethidden.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"fegg","previous":{"title":"Application::setSiteinfo","permalink":"/coding-style-guide/ja/docs/fegg/basic/templates/helpers/setsiteinfo"},"next":{"title":"Application::setHtmlHeader","permalink":"/coding-style-guide/ja/docs/fegg/basic/templates/helpers/sethtmlheader"}}'),s=n("5893"),a=n("65");let l={sidebar_position:2},d="Application::setHidden",r={},c=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2},{value:"Assigning Multiple Parameters",id:"assigning-multiple-parameters",level:3}];function h(e){let t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"applicationsethidden",children:"Application::setHidden"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Set hidden data"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",children:'public void Application::setHidden( mixed $name, [ string $value = "" ] )\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Set input field hidden to your template from controller. In template, write ",(0,s.jsx)(t.code,{children:"{{ hidden }}"}),", this will display ",(0,s.jsx)(t.code,{children:'<input type="hidden">'})," with your assigned name and value."]}),"\n",(0,s.jsxs)(t.p,{children:["See also ",(0,s.jsx)(t.a,{href:"#",children:"Hidden"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Data type"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Remarks"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"$id"}),(0,s.jsx)(t.td,{children:"string / array"}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:["hidden name. If in array, syntax must be ",(0,s.jsx)(t.code,{children:"array($name => $value)"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"$value"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:'""'}),(0,s.jsx)(t.td,{children:"hidden value"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",metastring:'title="Controller"',children:"$this->setHidden( 'foo', 'bar' );\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",metastring:'title="Template"',children:"{{ hidden }}\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",metastring:'title="Output"',children:'<input type="hidden" name="foo" value="bar">\n'})}),"\n",(0,s.jsx)(t.h3,{id:"assigning-multiple-parameters",children:"Assigning Multiple Parameters"}),"\n",(0,s.jsx)(t.p,{children:"You can assign multiple parameters."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",metastring:'title="Controller"',children:"$params = array(\n    'foo' => 'bar',\n    'baz' => 'qux',\n);\n$this->setHidden($params);\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",metastring:'title="Template"',children:"{{ hidden }}\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",metastring:'title="Output"',children:'<input type="hidden" name="foo" value="bar">\n<input type="hidden" name="baz" value="qux">\n'})})]})}function o(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},65:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return l}});var i=n(7294);let s={},a=i.createContext(s);function l(e){let t=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);