"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[2748],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),c=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return l.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(o,".").concat(m)]||d[m]||u[m]||r;return n?l.createElement(g,p(p({ref:t},s),{},{components:n})):l.createElement(g,p({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,p=new Array(r);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<r;c++)p[c]=n[c];return l.createElement.apply(null,p)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5755:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var l=n(7462),a=(n(7294),n(3905));const r={title:"Include"},p=void 0,i={unversionedId:"fegg/basic/templates/rules/include",id:"fegg/basic/templates/rules/include",title:"Include",description:"include, include head, head, include foot, foot",source:"@site/docs/05-fegg/03-basic/03-templates/04-rules/04-include.mdx",sourceDirName:"05-fegg/03-basic/03-templates/04-rules",slug:"/fegg/basic/templates/rules/include",permalink:"/coding-style-guide/docs/fegg/basic/templates/rules/include",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/05-fegg/03-basic/03-templates/04-rules/04-include.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Include"},sidebar:"fegg",previous:{title:"Loop",permalink:"/coding-style-guide/docs/fegg/basic/templates/rules/loop"},next:{title:"Transclude",permalink:"/coding-style-guide/docs/fegg/basic/templates/rules/transclude"}},o={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"include, include head, head, include foot, foot")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"{{ include 'foo/bar' }}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"{{ include head 'foo/bar' }}\n{{ head }}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"{{ include foot 'foo/bar' }}\n{{ foot }}\n")),(0,a.kt)("p",null,"Include another template."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{{ include }}")," read template and display writed place, but ",(0,a.kt)("inlineCode",{parentName:"p"},"{{ include head }}")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"{{ include foot }}")," read template and display at ",(0,a.kt)("inlineCode",{parentName:"p"},"{{ head }}")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"{{ foot }}"),"."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Template - child.tpl"',title:'"Template',"-":!0,'child.tpl"':!0},"<p>This file is child.tpl</p>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Template - parent.tpl"',title:'"Template',"-":!0,'parent.tpl"':!0},"<p>This file is parent.tpl</p>\n{{ include 'parts' }}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Output"',title:'"Output"'},"<p>This file is child.tpl</p>\n<p>This file is parent.tpl</p>\n")),(0,a.kt)("p",null,"If use ",(0,a.kt)("inlineCode",{parentName:"p"},"{{ include head }}")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"{{ include foot }}"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Template - header.tpl"',title:'"Template',"-":!0,'header.tpl"':!0},'<link rel="stylesheet" type="text/css" href="path/to/style.css">\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Template - footer.tpl"',title:'"Template',"-":!0,'footer.tpl"':!0},'<script type="text/javascript" src="path/to/script.js"><\/script>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Template - parent.tpl"',title:'"Template',"-":!0,'parent.tpl"':!0},"{{ include head 'header' }}\n{{ include foot 'footer' }}\n\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Page title</title>\n\n    {{ head }}\n\n</head>\n<body>\n    something\n\n    {{ foot }}\n\n</body>\n</html>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Output"',title:'"Output"'},'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Page title</title>\n\n    <link rel="stylesheet" type="text/css" href="path/to/style.css">\n\n</head>\n<body>\n    something\n\n    <script type="text/javascript" src="path/to/script.js"><\/script>\n\n</body>\n</html>\n')))}u.isMDXComponent=!0}}]);