"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[9602],{3905:(e,t,l)=>{l.d(t,{Zo:()=>m,kt:()=>d});var n=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},m=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(l),d=r,k=s["".concat(p,".").concat(d)]||s[d]||c[d]||a;return l?n.createElement(k,i(i({ref:t},m),{},{components:l})):n.createElement(k,i({ref:t},m))}));function d(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,i=new Array(a);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<a;u++)i[u]=l[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}s.displayName="MDXCreateElement"},5955:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=l(7462),r=(l(7294),l(3905));const a={sidebar_position:2},i="\u66f8\u304d\u51fa\u3057\u8a2d\u5b9a",o={unversionedId:"html/image/export",id:"html/image/export",title:"\u66f8\u304d\u51fa\u3057\u8a2d\u5b9a",description:"\u7528\u9014\u306b\u3088\u3063\u3066\u9069\u5207\u306a\u753b\u50cf\u5f62\u5f0f\u3092\u9078\u629e\u3057\u66f8\u304d\u51fa\u3057\u3092\u884c\u3046\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/html/image/export.mdx",sourceDirName:"html/image",slug:"/html/image/export",permalink:"/coding-style-guide/ja/docs/html/image/export",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/html/image/export.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"html",previous:{title:"\u547d\u540d\u898f\u5247",permalink:"/coding-style-guide/ja/docs/html/image/naming"},next:{title:"CSS\u69cb\u6210\u6848",permalink:"/coding-style-guide/ja/docs/html/methodologies/"}},p={},u=[{value:"\u9ad8\u89e3\u50cf\u5ea6\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u5bfe\u5fdc\u306b\u3064\u3044\u3066",id:"\u9ad8\u89e3\u50cf\u5ea6\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u5bfe\u5fdc\u306b\u3064\u3044\u3066",level:2},{value:"\u753b\u50cf\u5f62\u5f0f\u306e\u7279\u5fb4\u3068\u5224\u65ad\u57fa\u6e96\u306b\u3064\u3044\u3066",id:"\u753b\u50cf\u5f62\u5f0f\u306e\u7279\u5fb4\u3068\u5224\u65ad\u57fa\u6e96\u306b\u3064\u3044\u3066",level:2},{value:"JPEG <small>(.jpg)</small>",id:"jpeg-jpg",level:3},{value:"PNG <small>(.png)</small>",id:"png-png",level:3},{value:"SVG <small>(.svg)</small>",id:"svg-svg",level:3},{value:"Webp <small>(.webp)</small>",id:"webp-webp",level:3},{value:"\u305d\u306e\u4ed6\u5f62\u5f0f",id:"\u305d\u306e\u4ed6\u5f62\u5f0f",level:3},{value:"GIF <small>(.gif)</small>",id:"gif-gif",level:4}],m={toc:u};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u66f8\u304d\u51fa\u3057\u8a2d\u5b9a"},"\u66f8\u304d\u51fa\u3057\u8a2d\u5b9a"),(0,r.kt)("p",null,"\u7528\u9014\u306b\u3088\u3063\u3066\u9069\u5207\u306a\u753b\u50cf\u5f62\u5f0f\u3092\u9078\u629e\u3057\u66f8\u304d\u51fa\u3057\u3092\u884c\u3046\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",{id:"\u9ad8\u89e3\u50cf\u5ea6\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u5bfe\u5fdc\u306b\u3064\u3044\u3066"},"\u9ad8\u89e3\u50cf\u5ea6\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u5bfe\u5fdc\u306b\u3064\u3044\u3066"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30ed\u30b4\u3084\u30a2\u30a4\u30b3\u30f3\u306a\u3069\u306eSVG\u3067\u66f8\u304d\u51fa\u3059\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u30c7\u30b6\u30a4\u30f3\u4e0a\u304c\u30d1\u30b9\u306b\u306a\u3063\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u30c7\u30b6\u30a4\u30ca\u30fc\u306b\u9023\u7d61\u3057\u3066\u304f\u3060\u3055\u3044"),(0,r.kt)("li",{parentName:"ul"},"\u30d1\u30b9\u30c7\u30fc\u30bf\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u306f2\u500d\u306e\u30b5\u30a4\u30ba\u3067\u66f8\u304d\u51fa\u3059\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044"))),(0,r.kt)("li",{parentName:"ul"},"600px\u4ee5\u5185\u306e\u753b\u50cf\u306f2\u500d\u30b5\u30a4\u30ba\u3067\u66f8\u304d\u51fa\u3059\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044"),(0,r.kt)("li",{parentName:"ul"},"PC\u3068SP\u3067\u753b\u50cf\u6bd4\u7387\u304c\u540c\u3058\u5834\u5408\u306f\u540c\u3058\u753b\u50cf\u3092\u8868\u793a\u3055\u305b\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044"),(0,r.kt)("li",{parentName:"ul"},"PC\u3068SP\u3067\u7570\u306a\u308b\u753b\u50cf\u3092\u8868\u793a\u3059\u308b\u5834\u5408\u306f",(0,r.kt)("inlineCode",{parentName:"li"},"<picture>"),"\u30bf\u30b0\u3092\u5229\u7528\u3059\u308b\u69d8\u306b\u3057\u3066\u304f\u3060\u3055\u3044",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/html/tips/picture#condition-by-image-format"},"\u74b0\u5883\u306b\u3088\u308b\u753b\u50cf\u306e\u8868\u793a\u5206\u3051\u306e\u65b9\u6cd5\u306b\u3064\u3044\u3066"),"\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044")))),(0,r.kt)("h2",{id:"\u753b\u50cf\u5f62\u5f0f\u306e\u7279\u5fb4\u3068\u5224\u65ad\u57fa\u6e96\u306b\u3064\u3044\u3066"},"\u753b\u50cf\u5f62\u5f0f\u306e\u7279\u5fb4\u3068\u5224\u65ad\u57fa\u6e96\u306b\u3064\u3044\u3066"),(0,r.kt)("h3",{id:"jpeg-jpg"},"JPEG ",(0,r.kt)("small",null,"(.jpg)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JPEG\u5f62\u5f0f\u306f\u4e0d\u53ef\u9006\u306a\u5727\u7e2e\u5f62\u5f0f\u3067\u3001\u900f\u660e\u8272\u3092\u542b\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093"),(0,r.kt)("li",{parentName:"ul"},"\u5199\u771f\u306a\u3069\u591a\u5f69\u306a\u8272\u3092\u542b\u3093\u3067\u3044\u308b\u5834\u5408\u306f\u3001PNG\u753b\u50cf\u3060\u3068\u30b5\u30a4\u30ba\u304c\u81a8\u5927\u306b\u306a\u3063\u3066\u3057\u307e\u3046\u305f\u3081\u3001JPG\u753b\u50cf\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044"),(0,r.kt)("li",{parentName:"ul"},"\u7279\u306b\u6307\u5b9a\u304c\u306a\u3044\u9650\u308a\u54c1\u8cea\u306f",(0,r.kt)("strong",{parentName:"li"},"80%(0.8)\u3067\u66f8\u304d\u51fa\u3059"),"\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044")),(0,r.kt)("h3",{id:"png-png"},"PNG ",(0,r.kt)("small",null,"(.png)")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u534a\u900f\u660e\u306a\u8868\u73fe\u304c\u5fc5\u8981\u306a\u5834\u5408\u306b\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PNG\u5f62\u5f0f\u306f\u53ef\u9006\u306a\u5727\u7e2e\u5f62\u5f0f\u3067\u3001\u900f\u660e\u8272\u3092\u542b\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059"),(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u542b\u3093\u3060\u5f62\u5f0f(APNG)\u3082\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\u304c\u3001\u4e00\u90e8\u306e\u30d6\u30e9\u30a6\u30b6\u304c\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u305b\u3093\uff08IE11\u3081\u2026\uff09")),(0,r.kt)("h3",{id:"svg-svg"},"SVG ",(0,r.kt)("small",null,"(.svg)")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u30ed\u30b4\u30fb\u30a2\u30a4\u30b3\u30f3\u306a\u3069\u306e\u5358\u7d14\u306a\u30d1\u30b9\u306e\u7d44\u307f\u5408\u308f\u305b\u3067\u4f5c\u6210\u3057\u3066\u3044\u308b\u5834\u5408\u306b\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SVG\u5f62\u5f0f\u306f\u4e0a\u8a183\u7a2e\u306e\u753b\u50cf\u5f62\u5f0f\u3068\u306f\u7570\u306a\u308a\u3001\u30d9\u30af\u30bf\u30c7\u30fc\u30bf\u3067\u306e\u5f62\u5f0f\u306e\u305f\u3081\u3001\u3069\u308c\u3060\u3051\u62e1\u5927\u30fb\u7e2e\u5c0f\u3057\u3066\u3082\u52a3\u5316\u3057\u307e\u305b\u3093"),(0,r.kt)("li",{parentName:"ul"},"\u30b0\u30e9\u30c7\u30fc\u30b7\u30e7\u30f3\u306a\u3069\u306f\u30d6\u30e9\u30a6\u30b6\u306b\u3088\u3063\u3066\u8868\u73fe\u3055\u308c\u306a\u3044\u3053\u3068\u304c\u3042\u308b\u306e\u3067\u8981\u6ce8\u610f"),(0,r.kt)("li",{parentName:"ul"},"\u8907\u96d1\u306a\u30d1\u30b9\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30da\u30fc\u30b8\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u5f71\u97ff\u3059\u308b\u3053\u3068\u304c\u3042\u308b\u305f\u3081\u8981\u6ce8\u610f")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"SVG\u753b\u50cf\u3092\u66f8\u304d\u51fa\u3059\u969b\u306b\u306f\u30c6\u30ad\u30b9\u30c8\u8981\u7d20\u304c\u542b\u307e\u308c\u3066\u3044\u306a\u3044\u304b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3082\u3057\u542b\u307e\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u30d1\u30b9\u306b\u5909\u63db\u3092\u884c\u3063\u3066\u304b\u3089\u66f8\u304d\u51fa\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("h3",{id:"webp-webp"},"Webp ",(0,r.kt)("small",null,"(.webp)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"WebP\u306fWeb\u7528\u306b\u53ef\u9006/\u975e\u53ef\u9006\u5727\u7e2e\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u308b\u65b0\u3057\u3044\u5727\u7e2e\u5f62\u5f0f\u3067\u3059"),(0,r.kt)("li",{parentName:"ul"},"XD\u304b\u3089\u306f\u76f4\u63a5\u66f8\u304d\u51fa\u3059\u3053\u3068\u304c\u51fa\u6765\u306a\u3044\u305f\u3081\u3001JPEG/PNG/GIF\u5f62\u5f0f\u304b\u3089WebP\u5f62\u5f0f\u306b",(0,r.kt)("a",{parentName:"li",href:"/docs/html/task-runner/scripts/convert-webp"},(0,r.kt)("inlineCode",{parentName:"a"},"convert:webp"),"\u30bf\u30b9\u30af\u30e9\u30f3\u30ca\u30fc"),"\u3092\u5229\u7528\u3057\u3066\u5909\u63db\u3092\u3057\u3066\u304f\u3060\u3055\u3044")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"SVG\u753b\u50cf\u3092\u9664\u3044\u3066\u3001\u5404\u753b\u50cf\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"<picture>"),"\u30bf\u30b0\u3092\u7528\u3044\u3066WebP\u753b\u50cf\u3082\u8ffd\u52a0\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"<picture>"),"\u30bf\u30b0\u306e\u4f7f\u3044\u65b9\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"/docs/html/tips/picture#condition-by-image-format"},"\u74b0\u5883\u306b\u3088\u308b\u753b\u50cf\u306e\u8868\u793a\u5206\u3051\u306e\u65b9\u6cd5\u306b\u3064\u3044\u3066"),"\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("h3",{id:"\u305d\u306e\u4ed6\u5f62\u5f0f"},"\u305d\u306e\u4ed6\u5f62\u5f0f"),(0,r.kt)("h4",{id:"gif-gif"},"GIF ",(0,r.kt)("small",null,"(.gif)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GIF\u5f62\u5f0f\u306f\u540c\u3058\u69d8\u306b\u53ef\u9006\u306a\u5727\u7e2e\u5f62\u5f0f\u3067\u3001\u900f\u660e\u8272\u3092\u542b\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059"),(0,r.kt)("li",{parentName:"ul"},"GIF\u5f62\u5f0f\u306e\u5834\u5408\u306f\u900f\u660e\u8272\u306f\u900f\u660e/\u4e0d\u900f\u660e\u306e2\u629e\u306e\u307f\u3067\u3001\u534a\u900f\u660e\u306e\u8272\u3092\u542b\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u672c\u7684\u306b\u306f\u5229\u7528\u3059\u308b\u30b7\u30fc\u30f3\u306f\u3042\u308a\u307e\u305b\u3093\u304c\u3001GIF\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u304c\u5fc5\u8981\u306a\u5834\u5408\u306b\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044")))}c.isMDXComponent=!0}}]);