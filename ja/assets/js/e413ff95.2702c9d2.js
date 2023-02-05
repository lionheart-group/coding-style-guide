"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[9426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const l={title:"Layout"},a=void 0,i={unversionedId:"html/methodologies/layout",id:"html/methodologies/layout",title:"Layout",description:"\u30da\u30fc\u30b8\u3092\u69cb\u6210\u3059\u308b\u30d8\u30c3\u30c0\u30fc\u3084\u30e1\u30a4\u30f3\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u30a8\u30ea\u30a2\u3001\u30b5\u30a4\u30c9\u30d0\u30fc\u3084\u30d5\u30c3\u30bf\u30fc\u3068\u3044\u3063\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5171\u901a\u306e\u30b3\u30f3\u30c6\u30ca\u30fc\u30d6\u30ed\u30c3\u30af\u306e\u30b9\u30bf\u30a4\u30eb\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/02-html/04-methodologies/05-layout.mdx",sourceDirName:"02-html/04-methodologies",slug:"/html/methodologies/layout",permalink:"/coding-style-guide/ja/docs/html/methodologies/layout",draft:!1,editUrl:"https://gitlab.com/lionheart-group/coding-style-guide/-/edit/master/docs/02-html/04-methodologies/05-layout.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Layout"},sidebar:"html",previous:{title:"\u4ee3\u8868\u7684\u306amixin",permalink:"/coding-style-guide/ja/docs/html/methodologies/foundation/mixin"},next:{title:"Component",permalink:"/coding-style-guide/ja/docs/html/methodologies/object/component"}},c={},s=[{value:"\u4f8b",id:"\u4f8b",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u30da\u30fc\u30b8\u3092\u69cb\u6210\u3059\u308b\u30d8\u30c3\u30c0\u30fc\u3084\u30e1\u30a4\u30f3\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u30a8\u30ea\u30a2\u3001\u30b5\u30a4\u30c9\u30d0\u30fc\u3084\u30d5\u30c3\u30bf\u30fc\u3068\u3044\u3063\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5171\u901a\u306e\u30b3\u30f3\u30c6\u30ca\u30fc\u30d6\u30ed\u30c3\u30af\u306e\u30b9\u30bf\u30a4\u30eb\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002")),(0,o.kt)("p",null,"FLOCSS\u3067\u306fid\u3082\u53ef\u3067\u3057\u305f\u304c\u3001\u539f\u5247",(0,o.kt)("inlineCode",{parentName:"p"},".l-"),"\u3068\u3044\u3046\u63a5\u982d\u8f9e\u3092\u5229\u7528\u3057\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u4f8b"},"\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<header class="l-header">\n    <p class="l-header__logo">\n        <img class="l-header__logo__image">\n    </p>\n</header>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"// scss/layout/_header.scss\n.l-header {\n    &__logo {\n        &__image {\n        }\n    }\n}\n")))}p.isMDXComponent=!0}}]);