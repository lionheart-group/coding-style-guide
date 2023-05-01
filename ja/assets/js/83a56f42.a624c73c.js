"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[9180],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=o.createContext({}),p=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,g=u["".concat(d,".").concat(m)]||u[m]||s[m]||l;return r?o.createElement(g,a(a({ref:t},c),{},{components:r})):o.createElement(g,a({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},703:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const l={sidebar_position:38},a="Model::dropTable",i={unversionedId:"fegg/library/model/methods/droptable",id:"fegg/library/model/methods/droptable",title:"Model::dropTable",description:"Execute Drop table",source:"@site/docs/fegg/library/model/methods/droptable.mdx",sourceDirName:"fegg/library/model/methods",slug:"/fegg/library/model/methods/droptable",permalink:"/coding-style-guide/ja/docs/fegg/library/model/methods/droptable",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/model/methods/droptable.mdx",tags:[],version:"current",sidebarPosition:38,frontMatter:{sidebar_position:38},sidebar:"fegg",previous:{title:"Model::create",permalink:"/coding-style-guide/ja/docs/fegg/library/model/methods/create"},next:{title:"Model::dropIndex",permalink:"/coding-style-guide/ja/docs/fegg/library/model/methods/dropindex"}},d={},p=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}],c={toc:p};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"modeldroptable"},"Model::dropTable"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Execute Drop table")),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"public void Model::dropTable()\n")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Controller"',title:'"Controller"'},"$model = new Model(true, array(\n    'table'   => 'cms_news',\n));\n\n// DROP TABLE cms_news\n$model->dropTable();\n")))}s.isMDXComponent=!0}}]);