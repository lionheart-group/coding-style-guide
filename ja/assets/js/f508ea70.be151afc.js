"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[1597],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9219:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={title:"PHPStorm"},a=void 0,l={unversionedId:"env/editor/phpstorm",id:"env/editor/phpstorm",title:"PHPStorm",description:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/01-env/02-editor/02-phpstorm.mdx",sourceDirName:"01-env/02-editor",slug:"/env/editor/phpstorm",permalink:"/coding-style-guide/ja/docs/env/editor/phpstorm",draft:!1,editUrl:"https://gitlab.com/lionheart-group/coding-style-guide/-/edit/master/docs/01-env/02-editor/02-phpstorm.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"PHPStorm"},sidebar:"env",previous:{title:"\u63a8\u5968\u30a8\u30c7\u30a3\u30bf",permalink:"/coding-style-guide/ja/docs/env/editor"},next:{title:"Visual Studio Code",permalink:"/coding-style-guide/ja/docs/env/editor/vscode"}},p={},c=[{value:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"\u30ad\u30fc\u30de\u30c3\u30d7\u306e\u8a2d\u5b9a",id:"\u30ad\u30fc\u30de\u30c3\u30d7\u306e\u8a2d\u5b9a",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,o.kt)("p",null,"\u4e0b\u8a18URL\u3088\u308a",(0,o.kt)("strong",{parentName:"p"},"JetBrains ToolBox App"),"\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3001\u305d\u3061\u3089\u304b\u3089",(0,o.kt)("strong",{parentName:"p"},"PHPStorm"),"\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002"),(0,o.kt)("admonition",{title:"M1 mac\u3092\u5229\u7528\u3057\u3066\u3044\u308b\u5834\u5408",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u300c.dmg (macOS Apple Silicon)\u300d\u3092\u9078\u629e\u3057\u3066\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/toolbox-app/"},"https://www.jetbrains.com/toolbox-app/")),(0,o.kt)("h2",{id:"\u30ad\u30fc\u30de\u30c3\u30d7\u306e\u8a2d\u5b9a"},"\u30ad\u30fc\u30de\u30c3\u30d7\u306e\u8a2d\u5b9a"),(0,o.kt)("p",null,"\u3053\u308c\u307e\u3067VSCode\u3092\u5229\u7528\u3057\u3066\u3044\u305f\u5834\u5408\u3001VSCode\u306b\u306a\u308b\u3079\u304f\u5bc4\u305b\u308b\u305f\u3081\u306bKeymap\u306e\u8a2d\u5b9a\u3092\u5909\u66f4\u3059\u308b\u306e\u3092\u30aa\u30b9\u30b9\u30e1\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u8a2d\u5b9a\u753b\u9762\u3092\u958b\u304f (",(0,o.kt)("inlineCode",{parentName:"li"},"\u2318 + ,"),")"),(0,o.kt)("li",{parentName:"ol"},"\u5de6\u30e1\u30cb\u30e5\u30fc\u306e\u300cKepmap\u300d\u3092\u9078\u629e"),(0,o.kt)("li",{parentName:"ol"},"\u30bb\u30ec\u30af\u30c8\u30dc\u30c3\u30af\u30b9\u306e\u4e2d\u306e\u300cVSCode (macOS)\u300d\u3092\u9078\u629e"),(0,o.kt)("li",{parentName:"ol"},"(\u4efb\u610f) \u5909\u66f4\u304c\u5fc5\u8981\u306a\u30ad\u30fc\u30de\u30c3\u30d7\u304c\u3042\u308c\u3070\u5909\u66f4\u3057\u307e\u3059"),(0,o.kt)("li",{parentName:"ol"},"\u753b\u9762\u53f3\u4e0b\u306e\u300cOK\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af")))}u.isMDXComponent=!0}}]);