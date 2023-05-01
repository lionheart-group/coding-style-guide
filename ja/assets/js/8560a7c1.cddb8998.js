"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[9550],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4768:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i="v0.1.0",l={permalink:"/coding-style-guide/ja/updated/2023/05/01/v0.1.0",editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/i18n/ja/docusaurus-plugin-content-blog/2023-05-01-v0.1.0.md",source:"@site/i18n/ja/docusaurus-plugin-content-blog/2023-05-01-v0.1.0.md",title:"v0.1.0",description:"- WordPress\u306e\u30ac\u30a4\u30c9\u30e9\u30a4\u30f3\u3092\u4e00\u90e8\u4f5c\u6210\u3057\u307e\u3057\u305f",date:"2023-05-01T00:00:00.000Z",formattedDate:"2023\u5e745\u67081\u65e5",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{},nextItem:{title:"v0.0.8",permalink:"/coding-style-guide/ja/updated/2023/02/07/v0.0.8"}},c={authorsImageUrls:[]},p=[],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/wordpress"},"WordPress\u306e\u30ac\u30a4\u30c9\u30e9\u30a4\u30f3\u3092\u4e00\u90e8\u4f5c\u6210\u3057\u307e\u3057\u305f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/javascript/scroll"},"Scroll Action JavaScript\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u7d39\u4ecb\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/javascript/modal"},"Modal JavaScript\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u7d39\u4ecb\u3092\u66f4\u65b0\u3057\u307e\u3057\u305f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/javascript/validation"},"Validation JavaScript\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u7d39\u4ecb\u3092\u66f4\u65b0\u3057\u307e\u3057\u305f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/env/docker"},"Docker\u74b0\u5883\u306e\u8aac\u660e\u3092\u66f4\u65b0\u3057\u307e\u3057\u305f")),(0,a.kt)("li",{parentName:"ul"},"Docusaurs\u3068\u4f9d\u5b58\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u66f4\u65b0\u3057\u307e\u3057\u305f"),(0,a.kt)("li",{parentName:"ul"},"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u69cb\u9020\u3092\u8abf\u6574\u3057\u307e\u3057\u305f"),(0,a.kt)("li",{parentName:"ul"},"\u66f4\u65b0\u5c65\u6b74\u306e\u4e00\u89a7\u30fb\u8a73\u7d30\u30da\u30fc\u30b8\u3092\u4f5c\u6210\u3057\u307e\u3057\u305f"),(0,a.kt)("li",{parentName:"ul"},"\u30c8\u30c3\u30d7\u30da\u30fc\u30b8\u3092\u66f4\u65b0\u3057\u307e\u3057\u305f")))}s.isMDXComponent=!0}}]);