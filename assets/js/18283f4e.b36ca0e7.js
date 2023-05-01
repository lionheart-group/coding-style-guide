"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[5788],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,c=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=l,k=d["".concat(i,".").concat(m)]||d[m]||s[m]||c;return n?a.createElement(k,r(r({ref:t},u),{},{components:n})):a.createElement(k,r({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var c=n.length,r=new Array(c);r[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var p=2;p<c;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>s,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const c={sidebar_position:6},r="Checked/Selected",o={unversionedId:"fegg/basic/templates/rules/checked_selected",id:"fegg/basic/templates/rules/checked_selected",title:"Checked/Selected",description:"checked, selected, options, hidden",source:"@site/docs/fegg/basic/templates/rules/checked_selected.mdx",sourceDirName:"fegg/basic/templates/rules",slug:"/fegg/basic/templates/rules/checked_selected",permalink:"/coding-style-guide/docs/fegg/basic/templates/rules/checked_selected",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/basic/templates/rules/checked_selected.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"fegg",previous:{title:"Transclude",permalink:"/coding-style-guide/docs/fegg/basic/templates/rules/transclude"},next:{title:"Options",permalink:"/coding-style-guide/docs/fegg/basic/templates/rules/options"}},i={},p=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Multiple checkbox",id:"multiple-checkbox",level:3}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"checkedselected"},"Checked/Selected"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"checked, selected, options, hidden")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"{{ checked key=$foo value=$bar }}\n")),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," find in ",(0,l.kt)("inlineCode",{parentName:"p"},"key"),", display ",(0,l.kt)("inlineCode",{parentName:"p"},'checked="checked"'),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"{{ selected key=$foo value=$bar }}\n")),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," find in ",(0,l.kt)("inlineCode",{parentName:"p"},"key"),", display ",(0,l.kt)("inlineCode",{parentName:"p"},'selected="selected"'),"."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Template"',title:'"Template"'},'/*\n$var  = \'value\';\n$same = \'value\';\n$diff = \'not value\';\n*/\n\n<input type="checkbox" name="radio" value="{{ $same }}"{{ checked key=$same value=$var }}> {{ $same }}\n<input type="checkbox" name="radio" value="{{ $diff }}"{{ checked key=$diff value=$var }}> {{ $diff }}\n\n<select name="select">\n    <option value="{{ $same }}"{{ checked key=$same value=$var }}>{{ $same }}</option>\n    <option value="{{ $diff }}"{{ checked key=$diff value=$var }}>{{ $diff }}</option>\n</select>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Output"',title:'"Output"'},'<input type="checkbox" name="radio" value="value" checked="checked"> value\n<input type="checkbox" name="radio" value="not value"> not value\n\n<select name="select">\n    <option value="value" selected="selected">value</option>\n    <option value="not value">not value</option>\n</select>\n')),(0,l.kt)("h3",{id:"multiple-checkbox"},"Multiple checkbox"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'template="Template"',template:'"Template"'},'/*\n$var   = array(\'value1\', \'value2\');\n$same1 = \'value1\';\n$same2 = \'value2\';\n$diff  = \'not value\';\n*/\n\n<input type="checkbox" name="checkbox[]" value="{{ $same1 }}"{{ checked key=$same1 value=$var }}> {{ $same1 }}\n<input type="checkbox" name="checkbox[]" value="{{ $same2 }}"{{ checked key=$same2 value=$var }}> {{ $same2 }}\n<input type="checkbox" name="checkbox[]" value="{{ $diff }}"{{ checked key=$diff value=$var }}> {{ $diff }}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'template="Output"',template:'"Output"'},'<input type="checkbox" name="checkbox[]" value="value1" checked="checked"> value\n<input type="checkbox" name="checkbox[]" value="value2" checked="checked"> value\n<input type="checkbox" name="checkbox[]" value="not value"> not value\n')))}s.isMDXComponent=!0}}]);