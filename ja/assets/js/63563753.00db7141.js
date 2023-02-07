"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[3754],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),s=p(r),c=a,g=s["".concat(o,".").concat(c)]||s[c]||u[c]||l;return r?n.createElement(g,i(i({ref:t},m),{},{components:r})):n.createElement(g,i({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},5245:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={title:"Model::addBindParam"},i=void 0,d={unversionedId:"fegg/library/model/methods/addbindparam",id:"fegg/library/model/methods/addbindparam",title:"Model::addBindParam",description:"Add Bind Parameter types",source:"@site/docs/05-fegg/04-library/03-model/02-methods/09-addbindparam.mdx",sourceDirName:"05-fegg/04-library/03-model/02-methods",slug:"/fegg/library/model/methods/addbindparam",permalink:"/coding-style-guide/ja/docs/fegg/library/model/methods/addbindparam",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/05-fegg/04-library/03-model/02-methods/09-addbindparam.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Model::addBindParam"},sidebar:"fegg",previous:{title:"Model::setBindParam",permalink:"/coding-style-guide/ja/docs/fegg/library/model/methods/setbindparam"},next:{title:"Model::getBindParam",permalink:"/coding-style-guide/ja/docs/fegg/library/model/methods/getbindparam"}},o={},p=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Prepared Type",id:"prepared-type",level:3},{value:"Example",id:"example",level:2}],m={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Add Bind Parameter types")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"public self Model::addBindParam( string $column, string $type )\n")),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Data type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"$column"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Bind Column")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"$type"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Bind Type")))),(0,a.kt)("h3",{id:"prepared-type"},"Prepared Type"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FLOAT")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"INTEGER")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DATE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DATETIME"))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Controller"',title:'"Controller"'},"$model = new Model();\n$model->addBindParam('news_id', 'INTEGER');\n$model->addBindParam('image_id', 'INTEGER');\n$model->addBindParam('file_id', 'INTEGER');\n$model->addBindParam('post_date', 'DATETIME');\n\n// Same with the following\n$model = new Model();\n$model->setBindParam(array(\n    'news_id'   => 'INTEGER',\n    'image_id'  => 'INTEGER',\n    'file_id'   => 'INTEGER',\n    'post_date' => 'DATETIME',\n));\n")))}u.isMDXComponent=!0}}]);