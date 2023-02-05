"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[422],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),m=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=m(r),u=a,g=c["".concat(d,".").concat(u)]||c[u]||s[u]||l;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},879:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const l={title:"Model::where"},o=void 0,i={unversionedId:"fegg/library/model/methods/where",id:"fegg/library/model/methods/where",title:"Model::where",description:"Set Where Parameter",source:"@site/docs/05-fegg/04-library/03-model/02-methods/14-where.mdx",sourceDirName:"05-fegg/04-library/03-model/02-methods",slug:"/fegg/library/model/methods/where",permalink:"/coding-style-guide/docs/fegg/library/model/methods/where",draft:!1,editUrl:"https://gitlab.com/lionheart-group/coding-style-guide/-/edit/master/docs/05-fegg/04-library/03-model/02-methods/14-where.mdx",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Model::where"},sidebar:"fegg",previous:{title:"Model::current",permalink:"/coding-style-guide/docs/fegg/library/model/methods/current"},next:{title:"Model::whereOpen",permalink:"/coding-style-guide/docs/fegg/library/model/methods/whereopen"}},d={},m=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2},{value:"Complex WHERE query",id:"complex-where-query",level:3}],p={toc:m};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Set Where Parameter")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"public self Model::where( string $query, [ array $data = [], string $andOr = 'AND' ] )\n")),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Data type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"$query"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Where query string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"$data"),(0,a.kt)("td",{parentName:"tr",align:null},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"[]"),(0,a.kt)("td",{parentName:"tr",align:null},"Where query parameter")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"$andOr"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"'AND'"),(0,a.kt)("td",{parentName:"tr",align:null},"Condition chain from the previous query AND or OR")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Controller"',title:'"Controller"'},"$model = new Model(false, array(\n  'table'   => 'cms_news',\n  'id'      => 'news_id',\n  'visible' => 'visible',\n));\n\n$model->where('news_id = ?', array(1));\n\n// Get filtered records\n// SELECT * FROM cms_news WHERE news_id = 1\n$records = $model->find();\n")),(0,a.kt)("h3",{id:"complex-where-query"},"Complex WHERE query"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Controller"',title:'"Controller"'},"$model = new Model(false, array(\n  'table'   => 'cms_news',\n  'id'      => 'news_id',\n  'visible' => 'visible',\n));\n\n$model->where('news_id = ?', array(1));\n$model->whereOpen();\n$model->where('title = ?', array('foo'));\n$model->where('created_at <= ?', array('2021-01-01'), 'OR');\n$model->whereClose();\n\n// SELECT *\n// FROM cms_news\n// WHERE\n//   news_id = 1\n//   AND (\n//     title = 'foo'\n//     OR created_at <= '2021-01-01'\n//   )\n$records = $model->find();\n")))}s.isMDXComponent=!0}}]);