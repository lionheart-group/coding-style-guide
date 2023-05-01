"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[5224],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),g=s(n),m=o,u=g["".concat(c,".").concat(m)]||g[m]||p[m]||l;return n?r.createElement(u,i(i({ref:t},d),{},{components:n})):r.createElement(u,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=g;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const l={sidebar_position:19},i="Model::havingClose",a={unversionedId:"fegg/library/model/methods/havingclose",id:"fegg/library/model/methods/havingclose",title:"Model::havingClose",description:"Add close bracket on Having query",source:"@site/docs/fegg/library/model/methods/havingclose.mdx",sourceDirName:"fegg/library/model/methods",slug:"/fegg/library/model/methods/havingclose",permalink:"/coding-style-guide/docs/fegg/library/model/methods/havingclose",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/model/methods/havingclose.mdx",tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_position:19},sidebar:"fegg",previous:{title:"Model::havingOpen",permalink:"/coding-style-guide/docs/fegg/library/model/methods/havingopen"},next:{title:"Model::order",permalink:"/coding-style-guide/docs/fegg/library/model/methods/order"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modelhavingclose"},"Model::havingClose"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Add close bracket on Having query")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"public self Model::havingClose()\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Controller"',title:'"Controller"'},"$model = new Model(false, array(\n  'table'   => 'cms_news',\n  'id'      => 'news_id',\n  'visible' => 'visible',\n));\n\n//\n$model->having('news_id = ?', array(1));\n$model->havingOpen();\n$model->having('title = ?', array('foo'));\n$model->having('created_at <= ?', array('2021-01-01'), 'OR');\n$model->havingClose();\n\n// SELECT *\n// FROM cms_news\n// HAVING\n//   news_id = 1\n//   AND (\n//     title = 'foo'\n//     OR created_at <= '2021-01-01'\n//   )\n$records = $model->find();\n")))}p.isMDXComponent=!0}}]);