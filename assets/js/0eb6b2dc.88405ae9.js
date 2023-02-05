"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[9715],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"Migrations from Old rules"},l=void 0,i={unversionedId:"html/methodologies/migrations",id:"html/methodologies/migrations",title:"Migrations from Old rules",description:"Don't use tag selector",source:"@site/docs/02-html/04-methodologies/02-migrations.mdx",sourceDirName:"02-html/04-methodologies",slug:"/html/methodologies/migrations",permalink:"/coding-style-guide/docs/html/methodologies/migrations",draft:!1,editUrl:"https://gitlab.com/lionheart-group/coding-style-guide/-/edit/master/docs/02-html/04-methodologies/02-migrations.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Migrations from Old rules"},sidebar:"html",previous:{title:"About Methodologies",permalink:"/coding-style-guide/docs/html/methodologies"},next:{title:"File name and Class name",permalink:"/coding-style-guide/docs/html/methodologies/important/name"}},s={},c=[{value:"Don&#39;t use tag selector",id:"dont-use-tag-selector",level:2},{value:"Removed Views layer",id:"removed-views-layer",level:2},{value:"Change Utility class names",id:"change-utility-class-names",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"dont-use-tag-selector"},"Don't use tag selector"),(0,o.kt)("p",null,"We allowed the child selector, but we changed the rule. Because, child selector has a week point. When you change the tag structures (e.g. when you change ",(0,o.kt)("inlineCode",{parentName:"p"},"<span>")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"<a>"),"), child selector won't be available."),(0,o.kt)("p",null,"Detail: ",(0,o.kt)("a",{parentName:"p",href:"/docs/html/methodologies/important/selector"},"Don't use tag selector")),(0,o.kt)("h2",{id:"removed-views-layer"},"Removed Views layer"),(0,o.kt)("p",null,"We removed ",(0,o.kt)("inlineCode",{parentName:"p"},"Views")," layer, and we use ",(0,o.kt)("inlineCode",{parentName:"p"},"Project")," as define patterns which are unique layout for each page."),(0,o.kt)("p",null,"Then, you don't need to import each page's css from HTML."),(0,o.kt)("p",null,"Detail: ",(0,o.kt)("a",{parentName:"p",href:"/docs/html/methodologies/object/project"},"Project")),(0,o.kt)("h2",{id:"change-utility-class-names"},"Change Utility class names"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The class of displaying PC or SP style",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".sp"),", ",(0,o.kt)("inlineCode",{parentName:"li"},".pc")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},".u-sp-only"),", ",(0,o.kt)("inlineCode",{parentName:"li"},".u-pc-only")))),(0,o.kt)("li",{parentName:"ul"},"The class of enabling anchor only displaying SP layout",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".u-tel-anchor")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},".u-anchor-tel")),(0,o.kt)("li",{parentName:"ul"},"Also, you can assign this class to ",(0,o.kt)("inlineCode",{parentName:"li"},"<a href>")," instead ",(0,o.kt)("inlineCode",{parentName:"li"},"<span data-href>"))))))}u.isMDXComponent=!0}}]);