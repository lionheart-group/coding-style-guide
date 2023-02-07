"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[4210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Watchman"},i=void 0,l={unversionedId:"env/watchman",id:"env/watchman",title:"Watchman",description:"Watchman\u306f\u76f4\u8fd1\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u4e0d\u8981\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/01-env/08-watchman.mdx",sourceDirName:"01-env",slug:"/env/watchman",permalink:"/coding-style-guide/ja/docs/env/watchman",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/01-env/08-watchman.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Watchman"},sidebar:"env",previous:{title:"Dnsmasq",permalink:"/coding-style-guide/ja/docs/env/dnsmasq"}},c={},s=[{value:"macOS",id:"macos",level:2},{value:"Windows",id:"windows",level:2}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"\u975e\u63a8\u5968",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Watchman\u306f\u76f4\u8fd1\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u4e0d\u8981\u3067\u3059\u3002")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://facebook.github.io/watchman/"},"Watchman"),"\u3092\u4f7f\u3046\u3053\u3068\u3067\u30d5\u30a1\u30a4\u30eb\u5909\u66f4\u3092\u76e3\u8996\u3057\u3001SCSS\u306e\u30b3\u30f3\u30d1\u30a4\u30eb\u306a\u3069\u3092\u81ea\u52d5\u7684\u306b\u5b9f\u884c\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002"),(0,a.kt)("h2",{id:"macos"},"macOS"),(0,a.kt)("p",null,"Homebrew\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew install watchman\n")),(0,a.kt)("h2",{id:"windows"},"Windows"),(0,a.kt)("p",null,"Windows\u5411\u3051\u306b\u306f\u30a4\u30f3\u30b9\u30c8\u30fc\u30e9\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u82e5\u5e72\u624b\u9806\u304c\u8907\u96d1\u306b\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://facebook.github.io/watchman/docs/install.html#binary-downloads-for-linux-macos-and-windows-beta"},"\u516c\u5f0f\u30b5\u30a4\u30c8\u306b\u3082\u8aac\u660e"),"\u304c\u5b58\u5728\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebook/watchman/releases"},"GitHub Relase"),"\u3088\u308a\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u89e3\u51cd\u5f8c\u3001\u597d\u304d\u306a\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u30b3\u30d4\u30fc\u3057\u307e\u3059\uff08\u4f8b : ",(0,a.kt)("inlineCode",{parentName:"li"},"Program Files"),"\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u30b3\u30d4\u30fc\u3057\u305f\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306e",(0,a.kt)("inlineCode",{parentName:"li"},"bin"),"\u306b",(0,a.kt)("inlineCode",{parentName:"li"},"PATH"),"\u3092\u901a\u3057\u307e\u3059\uff08",(0,a.kt)("a",{parentName:"li",href:"https://helpdeskgeek.com/windows-10/add-windows-path-environment-variable/"},"PATH\u306e\u901a\u3057\u65b9\u306e\u53c2\u8003"),"\uff09\u3002")))}m.isMDXComponent=!0}}]);