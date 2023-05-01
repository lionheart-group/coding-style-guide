"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[7305],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return r?a.createElement(g,o(o({ref:t},s),{},{components:r})):a.createElement(g,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6154:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const l={sidebar_position:9},o="Code",i={unversionedId:"fegg/basic/templates/rules/code",id:"fegg/basic/templates/rules/code",title:"Code",description:"call, code",source:"@site/docs/fegg/basic/templates/rules/code.mdx",sourceDirName:"fegg/basic/templates/rules",slug:"/fegg/basic/templates/rules/code",permalink:"/coding-style-guide/ja/docs/fegg/basic/templates/rules/code",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/basic/templates/rules/code.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"fegg",previous:{title:"Hidden",permalink:"/coding-style-guide/ja/docs/fegg/basic/templates/rules/hidden"},next:{title:"About Parameters",permalink:"/coding-style-guide/ja/docs/fegg/basic/parameters/"}},c={},p=[{value:"Example",id:"example",level:2},{value:"code",id:"code-1",level:3},{value:"call",id:"call",level:3}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"code"},"Code"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"call, code")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"{{ code some_php_scripts(); }}\n")),(0,n.kt)("p",null,"Run writed PHP scripts, like ",(0,n.kt)("inlineCode",{parentName:"p"},"eval")," method."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"{{ call '/controller/method/params' }}\n")),(0,n.kt)("p",null,"Call another Controller methods."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("h3",{id:"code-1"},"code"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Template"',title:'"Template"'},"{{ code phpinfo(); }}\n// Run phpinfo();\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Template"',title:'"Template"'},"{{ code $array = array('foo', 'bar'); var_dump( array_reverse($array) ); }}\n// Run $array = array('foo', 'bar'); var_dump( array_reverse($array) );\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Output"',title:'"Output"'},'array(2) { [0]=> string(3) "bar" [1]=> string(3) "foo" }\n')),(0,n.kt)("h3",{id:"call"},"call"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Template"',title:'"Template"'},"{{ call '/controller/method/params' }}\n// Call Controller::method('params');\n\n{{ call '/Person/get/id/1' }}\n// Call Person::get('id', '1');\n")))}u.isMDXComponent=!0}}]);