"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[9823],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=l,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(g,i(i({ref:t},o),{},{components:n})):a.createElement(g,i({ref:t},o))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:l,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const r={title:"Transclude"},i=void 0,c={unversionedId:"fegg/basic/templates/rules/transclude",id:"fegg/basic/templates/rules/transclude",title:"Transclude",description:"transclude, section",source:"@site/docs/05-fegg/03-basic/03-templates/04-rules/05-transclude.mdx",sourceDirName:"05-fegg/03-basic/03-templates/04-rules",slug:"/fegg/basic/templates/rules/transclude",permalink:"/coding-style-guide/docs/fegg/basic/templates/rules/transclude",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/05-fegg/03-basic/03-templates/04-rules/05-transclude.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Transclude"},sidebar:"fegg",previous:{title:"Include",permalink:"/coding-style-guide/docs/fegg/basic/templates/rules/include"},next:{title:"Checked/Selected",permalink:"/coding-style-guide/docs/fegg/basic/templates/rules/checked_selected"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Mutiple transclude",id:"mutiple-transclude",level:3}],o={toc:s};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"transclude, section")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"{{ transclude 'foo/bar' }}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"{{ section baz }}\n{{ end section baz }}\n")),(0,l.kt)("p",null,"Transclude the other template. ",(0,l.kt)("inlineCode",{parentName:"p"},"{{ transclude }}")," specify target template and display at ",(0,l.kt)("inlineCode",{parentName:"p"},"{{ section }}")," area."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Template - layout.tpl"',title:'"Template',"-":!0,'layout.tpl"':!0},'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Page title</title>\n</head>\n<body>\n    {{ section content }}\n    {{ end section content }}\n</body>\n</html>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Template - index.tpl"',title:'"Template',"-":!0,'index.tpl"':!0},"{{ transclude 'layout' }}\n\n{{ section content }}\n    <p>This is a index content.</p>\n{{ end section content }}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Output"',title:'"Output"'},'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Page title</title>\n</head>\n<body>\n    <p>This is a index content.</p>\n</body>\n</html>\n')),(0,l.kt)("h3",{id:"mutiple-transclude"},"Mutiple transclude"),(0,l.kt)("p",null,"It can be mutiple transclude."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Template - grandparent.tpl"',title:'"Template',"-":!0,'grandparent.tpl"':!0},'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Page title</title>\n</head>\n<body>\n    <p>This is grandparent content.</p>\n\n    {{ section content }}\n    {{ end section content }}\n</body>\n</html>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Template - parent.tpl"',title:'"Template',"-":!0,'parent.tpl"':!0},"{{ transclude 'grandparent' }}\n\n{{ section content }}\n<div class=\"parent-box\">\n    <p>This is parent content.</p>\n\n    {{ section main }}\n    {{ end section main }}\n</div>\n{{ end section content }}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Template - child.tpl"',title:'"Template',"-":!0,'child.tpl"':!0},"{{ transclude 'parent' }}\n\n{{ section main }}\n<div class=\"child-box\">\n    <p>This is child content.</p>\n</div>\n{{ end section main }}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Output"',title:'"Output"'},'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Page title</title>\n</head>\n<body>\n    <p>This is grandparent content.</p>\n\n    <div class="parent-box">\n        <p>This is child content.</p>\n\n        <div class="child-box">\n            <p>This is child content.</p>\n        </div>\n    </div>\n</body>\n</html>\n')))}d.isMDXComponent=!0}}]);