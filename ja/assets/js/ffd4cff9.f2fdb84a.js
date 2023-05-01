"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[7852],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>c});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var m=n.createContext({}),p=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(r),c=i,g=u["".concat(m,".").concat(c)]||u[c]||d[c]||a;return r?n.createElement(g,l(l({ref:t},s),{},{components:r})):n.createElement(g,l({ref:t},s))}));function c(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8364:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:5},l="Trim::resizeTrim",o={unversionedId:"fegg/library/trim/methods/resizetrim",id:"fegg/library/trim/methods/resizetrim",title:"Trim::resizeTrim",description:"Resize the image with keeping ratio and tirmming overwrapped (Like object-fit: cover)",source:"@site/docs/fegg/library/trim/methods/resizetrim.mdx",sourceDirName:"fegg/library/trim/methods",slug:"/fegg/library/trim/methods/resizetrim",permalink:"/coding-style-guide/ja/docs/fegg/library/trim/methods/resizetrim",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/trim/methods/resizetrim.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"fegg",previous:{title:"Trim::resizeForce",permalink:"/coding-style-guide/ja/docs/fegg/library/trim/methods/resizeforce"},next:{title:"Trim::create",permalink:"/coding-style-guide/ja/docs/fegg/library/trim/methods/create"}},m={},p=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Crop position",id:"crop-position",level:3},{value:"Example",id:"example",level:2}],s={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"trimresizetrim"},"Trim::resizeTrim"),(0,i.kt)("p",null,"Resize the image with keeping ratio and tirmming overwrapped (Like ",(0,i.kt)("inlineCode",{parentName:"p"},"object-fit: cover"),")"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"public void Trim::resizeTrim( number $w, number $h, string $cp )\n")),(0,i.kt)("h2",{id:"arguments"},"Arguments"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Data type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"$w"),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Converted image width")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"$h"),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Converted image height")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"$cp"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Crop position")))),(0,i.kt)("h3",{id:"crop-position"},"Crop position"),(0,i.kt)("table",{style:{textAlign:"center"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"lt"),(0,i.kt)("td",null,"t"),(0,i.kt)("td",null,"rt")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"l"),(0,i.kt)("td",null,"m"),(0,i.kt)("td",null,"r")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"lb"),(0,i.kt)("td",null,"b"),(0,i.kt)("td",null,"rb")))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Controller"',title:'"Controller"'},"$trim = $this->getClass('Tool/RSS', 'https://example.com/feed');\n$trim->setImage('path/to/image.jpg', 'path/to/converted.jpg');\n\n$trim->resizeTrim(300, 300, 'm');\n")))}d.isMDXComponent=!0}}]);