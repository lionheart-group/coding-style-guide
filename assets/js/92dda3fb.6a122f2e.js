"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[5664],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:5},l="Layout",i={unversionedId:"html/methodologies/layout",id:"html/methodologies/layout",title:"Layout",description:"The layout layer defines the styles of large common containers such as the header area, main contents area, sidebar and footer.",source:"@site/docs/html/methodologies/layout.mdx",sourceDirName:"html/methodologies",slug:"/html/methodologies/layout",permalink:"/coding-style-guide/docs/html/methodologies/layout",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/html/methodologies/layout.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"html",previous:{title:"Typical mixins",permalink:"/coding-style-guide/docs/html/methodologies/foundation/mixin"},next:{title:"Component",permalink:"/coding-style-guide/docs/html/methodologies/object/component"}},s={},c=[{value:"Example",id:"example",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"layout"},"Layout"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The layout layer defines the styles of large common containers such as the header area, main contents area, sidebar and footer.")),(0,o.kt)("p",null,"FLOCSS allows to use id for ",(0,o.kt)("inlineCode",{parentName:"p"},"Layout"),", but we're using ",(0,o.kt)("inlineCode",{parentName:"p"},".l-")," prefix, unless you have special reason."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<header class="l-header">\n    <p class="l-header__logo">\n        <img class="l-header__logo__image">\n    </p>\n</header>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"// scss/layout/_header.scss\n.l-header {\n    &__logo {\n        &__image {\n        }\n    }\n}\n")))}p.isMDXComponent=!0}}]);