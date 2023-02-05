"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[7505],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||l;return r?n.createElement(g,o(o({ref:t},d),{},{components:r})):n.createElement(g,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2510:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const l={title:"Model::__construct"},o=void 0,i={unversionedId:"fegg/library/model/methods/construct",id:"fegg/library/model/methods/construct",title:"Model::__construct",description:"Model class constructor",source:"@site/docs/05-fegg/04-library/03-model/02-methods/01-construct.mdx",sourceDirName:"05-fegg/04-library/03-model/02-methods",slug:"/fegg/library/model/methods/construct",permalink:"/coding-style-guide/ja/docs/fegg/library/model/methods/construct",draft:!1,editUrl:"https://gitlab.com/lionheart-group/coding-style-guide/-/edit/master/docs/05-fegg/04-library/03-model/02-methods/01-construct.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Model::__construct"},sidebar:"fegg",previous:{title:"Introduction",permalink:"/coding-style-guide/ja/docs/fegg/library/model"},next:{title:"Model::setTableName",permalink:"/coding-style-guide/ja/docs/fegg/library/model/methods/settablename"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Model class constructor")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"public self Model::__construct( [ boolean $is_admin = false, array $options = [] ] )\n")),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Data type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"$is_admin"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"Flag for displaying record that disabled visibility flag (For Admin page)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"$options"),(0,a.kt)("td",{parentName:"tr",align:null},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"[]"),(0,a.kt)("td",{parentName:"tr",align:null},"Model options")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Controller"',title:'"Controller"'},"// For client page (Don't display hidden record)\n$model = new Model(false, array(\n    // Operate to `cms_news` table\n    'table'   => 'cms_news',\n\n    // Primary ID is `id`\n    'id'      => 'news_id',\n\n    // Visibility flag is `visible`\n    'visible' => 'visible',\n\n    // Bind columns data type\n    'bind'    => array(\n        'news_id'   => 'INTEGER',\n        'image_id'  => 'INTEGER',\n        'file_id'   => 'INTEGER',\n        'post_date' => 'DATETIME',\n    ),\n));\n")))}p.isMDXComponent=!0}}]);