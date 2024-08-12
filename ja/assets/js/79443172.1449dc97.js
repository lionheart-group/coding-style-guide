"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[9348],{1736:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=l(5893),i=l(1151);const a={sidebar_position:3},r="Loop",s={id:"fegg/basic/templates/rules/loop",title:"Loop",description:"loop, foreach",source:"@site/docs/fegg/basic/templates/rules/loop.mdx",sourceDirName:"fegg/basic/templates/rules",slug:"/fegg/basic/templates/rules/loop",permalink:"/coding-style-guide/ja/docs/fegg/basic/templates/rules/loop",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/basic/templates/rules/loop.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"fegg",previous:{title:"If",permalink:"/coding-style-guide/ja/docs/fegg/basic/templates/rules/if"},next:{title:"Include",permalink:"/coding-style-guide/ja/docs/fegg/basic/templates/rules/include"}},t={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"loop",id:"loop-1",level:3},{value:"foreach",id:"foreach",level:3}];function d(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"loop",children:"Loop"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"loop, foreach"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"{{ loop $foo = $bar to $baz }}\n{{ end }}\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"{{ loop }}"})," run looping until ",(0,o.jsx)(n.code,{children:"{{ end }}"})," by assigned variables. It is same to ",(0,o.jsx)(n.code,{children:"for( $foo=$bar; $bar<=$baz; $foo++ )"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"{{ foreach $array as $key => $val }}\n{{ end foreach }}\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"{{ foreach }}"})," run looping until ",(0,o.jsx)(n.code,{children:"{{ end foreach }}"})," by assigned array variable. You can get loop count from ",(0,o.jsx)(n.code,{children:"$foreachIndex"})," in ",(0,o.jsx)(n.code,{children:"{{ foreach }}"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.h3,{id:"loop-1",children:"loop"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",metastring:'title="Template"',children:"// $bar = 1, $baz = 5\n\n<ul>\n    {{ loop $foo = $bar to $baz }}\n    <li>{{ $foo }}</li>\n    {{ end }}\n</ul>\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",metastring:'title="Output"',children:"<ul>\n    <li>1</li>\n    <li>2</li>\n    <li>3</li>\n    <li>4</li>\n    <li>5</li>\n</ul>\n"})}),"\n",(0,o.jsx)(n.h3,{id:"foreach",children:"foreach"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",metastring:'title="Template"',children:"// $array = array( 'foo' => 'bar', 'baz' => 'qux' );\n\n<ul>\n    {{ foreach $array as $key => $val }}\n    <li>{{ $foreachIndex }} : {{ $key }} => {{ $val }}</li>\n    {{ end foreach }}\n</ul>\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",metastring:'title="Output"',children:"<ul>\n    <li>0 : foo => bar</li>\n    <li>1 : bar => qux</li>\n</ul>\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,l)=>{l.d(n,{Z:()=>s,a:()=>r});var o=l(7294);const i={},a=o.createContext(i);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);