"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[5139],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,b=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return r?a.createElement(b,l(l({ref:t},d),{},{components:r})):a.createElement(b,l({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7982:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:2},l="Slider / Carousel",o={unversionedId:"javascript/slider",id:"javascript/slider",title:"Slider / Carousel",description:'For Slider/Carousel libraries, we can recommend "Splide" to use.',source:"@site/docs/javascript/slider.mdx",sourceDirName:"javascript",slug:"/javascript/slider",permalink:"/coding-style-guide/ja/docs/javascript/slider",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/javascript/slider.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"javascript",previous:{title:"JavaScript",permalink:"/coding-style-guide/ja/docs/javascript/"},next:{title:"Modal",permalink:"/coding-style-guide/ja/docs/javascript/modal"}},s={},p=[{value:"Deprecated libraries",id:"deprecated-libraries",level:2}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"slider--carousel"},"Slider / Carousel"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},'For Slider/Carousel libraries, we can recommend "Splide" to use.')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Libary name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Last updated"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://splidejs.com/"},"Splide")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://img.shields.io/github/last-commit/Splidejs/splide",alt:"Last Updated"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://swiperjs.com/"},"Swiper")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://img.shields.io/github/last-commit/nolimits4web/swiper",alt:"Last Updated"}))))),(0,n.kt)("h2",{id:"deprecated-libraries"},"Deprecated libraries"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Libary name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Last updated"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://kenwheeler.github.io/slick/"},"Slick")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://img.shields.io/github/last-commit/kenwheeler/slick",alt:"Last Updated"}))))))}c.isMDXComponent=!0}}]);