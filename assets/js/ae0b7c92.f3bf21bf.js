"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[3101],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},g=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),d=c(r),u=o,m=d["".concat(p,".").concat(u)]||d[u]||s[u]||a;return r?n.createElement(m,i(i({ref:t},g),{},{components:r})):n.createElement(m,i({ref:t},g))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5538:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:24},i="Model::getPager",l={unversionedId:"fegg/library/model/methods/getpager",id:"fegg/library/model/methods/getpager",title:"Model::getPager",description:"Get variables for making pager",source:"@site/docs/fegg/library/model/methods/getpager.mdx",sourceDirName:"fegg/library/model/methods",slug:"/fegg/library/model/methods/getpager",permalink:"/coding-style-guide/docs/fegg/library/model/methods/getpager",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/model/methods/getpager.mdx",tags:[],version:"current",sidebarPosition:24,frontMatter:{sidebar_position:24},sidebar:"fegg",previous:{title:"Model::find",permalink:"/coding-style-guide/docs/fegg/library/model/methods/find"},next:{title:"Model::one",permalink:"/coding-style-guide/docs/fegg/library/model/methods/one"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}],g={toc:c};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modelgetpager"},"Model::getPager"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Get variables for making pager")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"public array Model::getPager()\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Controller"',title:'"Controller"'},"$model = new Model(false, array(\n    'table'   => 'cms_news',\n    'id'      => 'news_id',\n    'visible' => 'visible',\n));\n\n$records = $model->listMax(5)->current(2)->find();\n$pager = $model->getPager();\n\nvar_dump($pager);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Output"',title:'"Output"'},'array(2) {\n    ["current_page"]=> int(2)\n    ["page_min"]=> int(1)\n    ["page_max"]=> int(6)\n    ["previous_page"]=> int(1)\n    ["next_page"]=> int(3)\n    ["last_page"]=> int(10)\n    ["number_of_records"]=> int(50)\n}\n')))}s.isMDXComponent=!0}}]);