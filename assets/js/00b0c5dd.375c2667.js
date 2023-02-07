"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[4600],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>s});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=c(n),s=a,g=u["".concat(l,".").concat(s)]||u[s]||m[s]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o="Embed flexible image",p={unversionedId:"html/tips/picture",id:"html/tips/picture",title:"Embed flexible image",description:"` and ` are able to provide flexible image by several conditions.",source:"@site/docs/02-html/06-tips/01-picture.mdx",sourceDirName:"02-html/06-tips",slug:"/html/tips/picture",permalink:"/coding-style-guide/docs/html/tips/picture",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/02-html/06-tips/01-picture.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"html",previous:{title:"convert:webp",permalink:"/coding-style-guide/docs/html/task-runner/scripts/convert-webp"},next:{title:"Flex box layout",permalink:"/coding-style-guide/docs/html/tips/flex"}},l={},c=[{value:"Condition by window width",id:"condition-by-window-width",level:2},{value:"Condition by image format",id:"condition-by-image-format",level:2},{value:"Combinate window width and image format",id:"combinate-window-width-and-image-format",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"embed-flexible-image"},"Embed flexible image"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<picture>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<source>")," are able to provide flexible image by several conditions."),(0,a.kt)("h2",{id:"condition-by-window-width"},"Condition by window width"),(0,a.kt)("p",null,"You can add condition by adding ",(0,a.kt)("inlineCode",{parentName:"p"},"media")," attribute to ",(0,a.kt)("inlineCode",{parentName:"p"},"<source>")," tag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<picture>\n    \x3c!-- Under 750px width window --\x3e\n    <source media="(max-width: 750px)" srcset="path/to/sp-image.jpg">\n    \x3c!-- Default image --\x3e\n    <img src="path/to/pc-image.jpg">\n</picture>\n')),(0,a.kt)("h2",{id:"condition-by-image-format"},"Condition by image format"),(0,a.kt)("p",null,"You can add condition by adding ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," attribute to ",(0,a.kt)("inlineCode",{parentName:"p"},"<source>")," tag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<picture>\n    \x3c!-- If Browser is supported WebP format --\x3e\n    <source type="image/webp" srcset="path/to/pc-image.webp">\n    \x3c!-- Default image --\x3e\n    <img src="path/to/pc-image.jpg">\n</picture>\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Format"),(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"WebP"),(0,a.kt)("td",{parentName:"tr",align:null},"image/webp")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"JPEG"),(0,a.kt)("td",{parentName:"tr",align:null},"image/jpeg")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PNG"),(0,a.kt)("td",{parentName:"tr",align:null},"image/png")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GIF"),(0,a.kt)("td",{parentName:"tr",align:null},"image/gif")))),(0,a.kt)("h2",{id:"combinate-window-width-and-image-format"},"Combinate window width and image format"),(0,a.kt)("p",null,"You can combinate each condition."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<picture>\n    \x3c!-- If Browser is supported WebP format and Under 750px width window --\x3e\n    <source type="image/webp" media="(max-width: 750px)" srcset="path/to/sp-image.webp">\n    \x3c!-- Under 750px width window --\x3e\n    <source media="(max-width: 750px)" srcset="path/to/sp-image.jpg">\n    \x3c!-- If Browser is supported WebP format --\x3e\n    <source type="image/webp" srcset="path/to/pc-image.webp">\n    \x3c!-- Default image --\x3e\n    <img src="path/to/pc-image.jpg">\n</picture>\n')))}m.isMDXComponent=!0}}]);