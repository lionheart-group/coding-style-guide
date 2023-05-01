"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[965],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=r.createContext({}),u=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,g=d["".concat(m,".").concat(p)]||d[p]||s[p]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:2},a="\u4ee3\u8868\u7684\u306amixin",l={unversionedId:"html/methodologies/foundation/mixin",id:"html/methodologies/foundation/mixin",title:"\u4ee3\u8868\u7684\u306amixin",description:"mq_sp",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/html/methodologies/foundation/mixin.mdx",sourceDirName:"html/methodologies/foundation",slug:"/html/methodologies/foundation/mixin",permalink:"/coding-style-guide/ja/docs/html/methodologies/foundation/mixin",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/html/methodologies/foundation/mixin.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"html",previous:{title:"Foundation",permalink:"/coding-style-guide/ja/docs/html/methodologies/foundation/"},next:{title:"Layout",permalink:"/coding-style-guide/ja/docs/html/methodologies/layout"}},m={},u=[{value:"mq_sp",id:"mq_sp",level:2},{value:"mq_pc",id:"mq_pc",level:2},{value:"mq_under",id:"mq_under",level:2},{value:"mq_over",id:"mq_over",level:2},{value:"get_vw",id:"get_vw",level:2}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4ee3\u8868\u7684\u306amixin"},"\u4ee3\u8868\u7684\u306amixin"),(0,o.kt)("h2",{id:"mq_sp"},"mq_sp"),(0,o.kt)("p",null,"SP\u5411\u3051\u30ec\u30a4\u30a2\u30a6\u30c8\u7528@media\u751f\u6210"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"@include mq_sp {\n    // SP\u30ec\u30a4\u30a2\u30a6\u30c8\u30b9\u30bf\u30a4\u30eb\n}\n\n// @media (max-width: (\u30d6\u30ec\u30a4\u30af\u30dd\u30a4\u30f3\u30c8)px)\n")),(0,o.kt)("h2",{id:"mq_pc"},"mq_pc"),(0,o.kt)("p",null,"PC\u5411\u3051\u30ec\u30a4\u30a2\u30a6\u30c8\u7528@media\u751f\u6210"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"@include mq_pc {\n    // PC\u30ec\u30a4\u30a2\u30a6\u30c8\u30b9\u30bf\u30a4\u30eb\n}\n\n// @media (min-width: (\u30d6\u30ec\u30a4\u30af\u30dd\u30a4\u30f3\u30c8) + 1px)\n")),(0,o.kt)("h2",{id:"mq_under"},"mq_under"),(0,o.kt)("p",null,"\u6307\u5b9a\u30b5\u30a4\u30ba\u4ee5\u4e0a\u5411\u3051@media\u751f\u6210"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"@include mq_under(number) {\n    // \u6307\u5b9a\u30b5\u30a4\u30ba\u4ee5\u4e0a\u5411\u3051\u30b9\u30bf\u30a4\u30eb\n}\n\n// @media (min-width: (number) + 1px)\n")),(0,o.kt)("h2",{id:"mq_over"},"mq_over"),(0,o.kt)("p",null,"\u6307\u5b9a\u30b5\u30a4\u30ba\u4ee5\u4e0b\u5411\u3051@media\u751f\u6210"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"@include mq_over(number) {\n    // \u6307\u5b9a\u30b5\u30a4\u30ba\u4ee5\u4e0b\u5411\u3051\u30b9\u30bf\u30a4\u30eb\n}\n\n// @media (max-width: (number)px)\n")),(0,o.kt)("h2",{id:"get_vw"},"get_vw"),(0,o.kt)("p",null,"px\u304b\u3089vw\u3092\u8a08\u7b97"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"get_vw(\u5143px, \u57fa\u6e96\u5e45)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},".c-foo {\n    font-size: get_vw(16, 1000);\n    // -> (100 / 1000) * 16\n    // -> font-size: 1.6vw\n}\n")))}s.isMDXComponent=!0}}]);