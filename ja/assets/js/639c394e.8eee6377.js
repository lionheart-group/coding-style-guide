"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[1653],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>u});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),p=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=p(a),u=n,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return a?r.createElement(g,o(o({ref:e},c),{},{components:a})):r.createElement(g,o({ref:e},c))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3764:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={title:"SVG"},o=void 0,l={unversionedId:"javascript/svg",id:"javascript/svg",title:"SVG",description:"| Libary name                                     | Remarks                        | Last updated                                                                          |",source:"@site/docs/03-javascript/06-svg.mdx",sourceDirName:"03-javascript",slug:"/javascript/svg",permalink:"/coding-style-guide/ja/docs/javascript/svg",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/03-javascript/06-svg.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"SVG"},sidebar:"javascript",previous:{title:"Animation",permalink:"/coding-style-guide/ja/docs/javascript/animation"},next:{title:"WebGL (Canvas)",permalink:"/coding-style-guide/ja/docs/javascript/webgl"}},s={},p=[],c={toc:p};function d(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Libary name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Remarks"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Last updated"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://maxwellito.github.io/vivus/"},"vivus.js")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Line drawing animation"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://img.shields.io/github/last-commit/maxwellito/vivus",alt:"Last Updated"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://svgjs.dev/"},"SVG.js")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Manipulating and animating SVG"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://img.shields.io/github/last-commit/svgdotjs/svg.js",alt:"Last Updated"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapsvg.io/"},"Snap.svg")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Animating SVG"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://img.shields.io/github/last-commit/adobe-webplatform/snap.svg",alt:"Last Updated"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://bonsaijs.org/"},"BonsaiJS")),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("img",{parentName:"td",src:"https://img.shields.io/github/last-commit/uxebu/bonsai",alt:"Last Updated"}))))))}d.isMDXComponent=!0}}]);