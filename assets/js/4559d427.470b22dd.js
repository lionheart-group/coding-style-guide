"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[9664],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>u});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=m(o),u=r,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||i;return o?n.createElement(h,l(l({ref:t},p),{},{components:o})):n.createElement(h,l({ref:t},p))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,l=new Array(i);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var m=2;m<i;m++)l[m]=o[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},927:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>m});var n=o(7462),r=(o(7294),o(3905));const i={sidebar_position:1},l="About Methodologies",a={unversionedId:"html/methodologies/index",id:"html/methodologies/index",title:"About Methodologies",description:"There are different rules from the old version. Please see the reference migration guide. Migrations from Old rules",source:"@site/docs/html/methodologies/index.mdx",sourceDirName:"html/methodologies",slug:"/html/methodologies/",permalink:"/coding-style-guide/docs/html/methodologies/",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/html/methodologies/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"html",previous:{title:"Exporting rules",permalink:"/coding-style-guide/docs/html/image/export"},next:{title:"Migrations from Old rules",permalink:"/coding-style-guide/docs/html/methodologies/migrations"}},s={},m=[{value:"Enhanced rules",id:"enhanced-rules",level:2},{value:"SCSS directory structure",id:"scss-directory-structure",level:2},{value:"Important points",id:"important-points",level:2},{value:"Explaining of each layers",id:"explaining-of-each-layers",level:2}],p={toc:m};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"about-methodologies"},"About Methodologies"),(0,r.kt)("admonition",{title:"WARNING",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"There are different rules from the old version. Please see the reference migration guide. ",(0,r.kt)("a",{parentName:"p",href:"/docs/html/methodologies/migrations"},"Migrations from Old rules"))),(0,r.kt)("p",null,"Basically, We'll follow ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hiloki/flocss/blob/master/README_eng"},"FLOCSS")," CSS methodologies, and we have the enhanced rules."),(0,r.kt)("h2",{id:"enhanced-rules"},"Enhanced rules"),(0,r.kt)("p",null,"Originally in FLOCSS rules, ",(0,r.kt)("inlineCode",{parentName:"p"},"Project")," is defined combination of ",(0,r.kt)("inlineCode",{parentName:"p"},"Component"),", but we define that has own each page style."),(0,r.kt)("p",null,"And, originally, ",(0,r.kt)("inlineCode",{parentName:"p"},"Component"),' should make a small part, but the small component is not so useful in the case of "Web site". so, we define ',(0,r.kt)("inlineCode",{parentName:"p"},"Component")," that ",(0,r.kt)("strong",{parentName:"p"},"the element that included in multiple pages"),"."),(0,r.kt)("h2",{id:"scss-directory-structure"},"SCSS directory structure"),(0,r.kt)("p",null,"We prepare the directory structure same with FLOCSS basic rules."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- scss\n  \u251c foundation/\n  \u251c layout/\n  \u2514 object/\n      \u251c component/\n      \u251c project/\n      \u2514 utility/\n")),(0,r.kt)("h2",{id:"important-points"},"Important points"),(0,r.kt)("p",null,"We prepared several limitations, please see the following links."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/html/methodologies/important/name"},"File name and Class name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/html/methodologies/important/child"},"Don't include other component")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/html/methodologies/important/selector"},"Don't use tag selector")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/html/methodologies/important/media_query"},"Place of media query"))),(0,r.kt)("h2",{id:"explaining-of-each-layers"},"Explaining of each layers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/html/methodologies/foundation"},"Foundation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/html/methodologies/layout"},"Layout")),(0,r.kt)("li",{parentName:"ul"},"Object",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/html/methodologies/object/component"},"Component")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/html/methodologies/object/project"},"Project")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/html/methodologies/object/utility"},"Utility"))))))}c.isMDXComponent=!0}}]);