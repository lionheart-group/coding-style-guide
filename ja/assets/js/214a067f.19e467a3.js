"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[1900],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6463:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:1},o="\u30bf\u30b9\u30af\u30e9\u30f3\u30ca\u30fc\u306b\u3064\u3044\u3066",l={unversionedId:"html/task-runner/index",id:"html/task-runner/index",title:"\u30bf\u30b9\u30af\u30e9\u30f3\u30ca\u30fc\u306b\u3064\u3044\u3066",description:"Node.js\u3092\u5229\u7528\u3057\u305f\u5e7e\u3064\u304b\u306e\u30bf\u30b9\u30af\u30e9\u30f3\u30ca\u30fc\u3092\u7528\u610f\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u5fc5\u8981\u306a\u5834\u5408\u306f\u30b3\u30c1\u30e9\u3092\u5229\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/html/task-runner/index.mdx",sourceDirName:"html/task-runner",slug:"/html/task-runner/",permalink:"/coding-style-guide/ja/docs/html/task-runner/",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/html/task-runner/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"html",previous:{title:"Utility",permalink:"/coding-style-guide/ja/docs/html/methodologies/object/utility"},next:{title:"watch",permalink:"/coding-style-guide/ja/docs/html/task-runner/scripts/watch"}},c={},s=[{value:"\u7528\u610f\u3055\u308c\u3066\u3044\u308b\u30bf\u30b9\u30af\u30e9\u30f3\u30ca\u30fc",id:"\u7528\u610f\u3055\u308c\u3066\u3044\u308b\u30bf\u30b9\u30af\u30e9\u30f3\u30ca\u30fc",level:2}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u30bf\u30b9\u30af\u30e9\u30f3\u30ca\u30fc\u306b\u3064\u3044\u3066"},"\u30bf\u30b9\u30af\u30e9\u30f3\u30ca\u30fc\u306b\u3064\u3044\u3066"),(0,a.kt)("p",null,"Node.js\u3092\u5229\u7528\u3057\u305f\u5e7e\u3064\u304b\u306e\u30bf\u30b9\u30af\u30e9\u30f3\u30ca\u30fc\u3092\u7528\u610f\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u5fc5\u8981\u306a\u5834\u5408\u306f\u30b3\u30c1\u30e9\u3092\u5229\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("h2",{id:"\u7528\u610f\u3055\u308c\u3066\u3044\u308b\u30bf\u30b9\u30af\u30e9\u30f3\u30ca\u30fc"},"\u7528\u610f\u3055\u308c\u3066\u3044\u308b\u30bf\u30b9\u30af\u30e9\u30f3\u30ca\u30fc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/html/task-runner/scripts/watch"},"watch"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"SCSS\u30d5\u30a1\u30a4\u30eb\u3092\u76e3\u8996\u3057\u3066\u30d5\u30a1\u30a4\u30eb\u5909\u66f4\u6642\u306b\u30d3\u30eb\u30c9\u3059\u308b\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/html/task-runner/scripts/build-scss"},"build:scss"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"SCSS\u30d5\u30a1\u30a4\u30eb\u3092CSS\u306b\u30d3\u30eb\u30c9\u3059\u308b\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/html/task-runner/scripts/optimize-image"},"optimize:image"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"JPG, PNG\u30d5\u30a1\u30a4\u30eb\u306e\u5727\u7e2e\u3092\u884c\u3046\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/html/task-runner/scripts/convert-webp"},"convert:webp"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"JPG, PNG\u30d5\u30a1\u30a4\u30eb\u304b\u3089WebP\u5f62\u5f0f\u306b\u5909\u63db\u3059\u308b\u3002")))))}p.isMDXComponent=!0}}]);