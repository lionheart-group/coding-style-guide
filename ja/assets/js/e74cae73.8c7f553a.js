"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[5996],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),l=n(6010),i=n(6775),o=n(1980),s=n(7392),u=n(12);function c(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=d(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,c]=m({queryString:n,groupId:r}),[f,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),b=(()=>{const e=s??f;return p({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),v(e)}),[c,v,l]),tabValues:l}}var v=n(2466),b=n(2389);const h="tabList__CuJ",g="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,v.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=s[n].value;r!==i&&(c(t),o(r))},p=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:d},o,{className:(0,l.Z)("tabs__item",g,null==o?void 0:o.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function x(e){const t=f(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",h)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return a.createElement(x,(0,r.Z)({key:String(t)},e))}},8974:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>y,frontMatter:()=>m,metadata:()=>v,toc:()=>h});var r=n(7462),a=(n(7294),n(3905)),l=n(4866),i=n(5162);const o="flexbetween_ZTUb",s="flexbetween__item_Z10z",u="is-3-column_yW87",c="is-blank_Wq3v",d="flex_iOjd",p="flex__item_cMme",m={sidebar_position:2},f="Flex box\u306e\u4f7f\u3044\u65b9",v={unversionedId:"html/tips/flex",id:"html/tips/flex",title:"Flex box\u306e\u4f7f\u3044\u65b9",description:"2\u30ab\u30e9\u30e0\u306e\u5834\u5408",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/html/tips/flex.mdx",sourceDirName:"html/tips",slug:"/html/tips/flex",permalink:"/coding-style-guide/ja/docs/html/tips/flex",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/html/tips/flex.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"html",previous:{title:"\u74b0\u5883\u306b\u3088\u308b\u753b\u50cf\u306e\u8868\u793a\u5206\u3051\u306e\u65b9\u6cd5\u306b\u3064\u3044\u3066",permalink:"/coding-style-guide/ja/docs/html/tips/picture"},next:{title:"Grid layout",permalink:"/coding-style-guide/ja/docs/html/tips/grid"}},b={},h=[{value:"2\u30ab\u30e9\u30e0\u306e\u5834\u5408",id:"2\u30ab\u30e9\u30e0\u306e\u5834\u5408",level:2},{value:"3\u30ab\u30e9\u30e0\u4ee5\u4e0a\u306e\u5834\u5408\u306e\u554f\u984c",id:"3\u30ab\u30e9\u30e0\u4ee5\u4e0a\u306e\u5834\u5408\u306e\u554f\u984c",level:2},{value:"\u89e3\u6c7a\u65b9\u6cd5",id:"\u89e3\u6c7a\u65b9\u6cd5",level:2}],g={toc:h};function y(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"flex-box\u306e\u4f7f\u3044\u65b9"},"Flex box\u306e\u4f7f\u3044\u65b9"),(0,a.kt)("h2",{id:"2\u30ab\u30e9\u30e0\u306e\u5834\u5408"},"2\u30ab\u30e9\u30e0\u306e\u5834\u5408"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"justify-content: between;"),"\u3092\u4f7f\u3063\u3066\u3082\u554f\u984c\u3042\u308a\u307e\u305b\u3093\u3002"),(0,a.kt)("div",{className:o},(0,a.kt)("div",{className:s}),(0,a.kt)("div",{className:s})),(0,a.kt)("h2",{id:"3\u30ab\u30e9\u30e0\u4ee5\u4e0a\u306e\u5834\u5408\u306e\u554f\u984c"},"3\u30ab\u30e9\u30e0\u4ee5\u4e0a\u306e\u5834\u5408\u306e\u554f\u984c"),(0,a.kt)("p",null,"3\u30ab\u30e9\u30e0\u4ee5\u4e0a\u306e\u5834\u5408\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"justify-content: between;"),"\u306f\u3001\u4e0b\u8a18\u306e\u69d8\u306b\u30ec\u30a4\u30a2\u30a6\u30c8\u306b\u7a7a\u304d\u304c\u751f\u3058\u3066\u3057\u307e\u3046\u4e8b\u304c\u767a\u751f\u3057\u3066\u3057\u307e\u3046\u305f\u3081\u63a8\u5968\u3057\u3066\u3044\u307e\u305b\u3093\u3002"),(0,a.kt)("div",{className:o},(0,a.kt)("div",{className:`${s} ${u}`}),(0,a.kt)("div",{className:`${s} ${u}`}),(0,a.kt)("div",{className:`${s} ${u}`}),(0,a.kt)("div",{className:`${s} ${u}`}),(0,a.kt)("div",{className:`${s} ${u} ${c}`},"BLANK"),(0,a.kt)("div",{className:`${s} ${u}`})),(0,a.kt)("h2",{id:"\u89e3\u6c7a\u65b9\u6cd5"},"\u89e3\u6c7a\u65b9\u6cd5"),(0,a.kt)("p",null,"\u89aa\u306e\u8981\u7d20\u306e\u5de6\u53f3\u306emargin\u306b\u8ca0\u306e\u5024\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u89e3\u6c7a\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002"),(0,a.kt)("div",{className:d},(0,a.kt)("div",{className:p}),(0,a.kt)("div",{className:p}),(0,a.kt)("div",{className:p}),(0,a.kt)("div",{className:p}),(0,a.kt)("div",{className:p})),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"scss",label:"SCSS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},".c-flex {\n    // \u5de6\u53f3\u306emargin\u306b\u4f59\u767d\u306e\u534a\u5206\u306e\u5024\u306e\u8ca0\u306e\u5024\u3092\u6307\u5b9a\u3057\u307e\u3059\n    margin: 0 -15px;\n\n    &__col {\n        height: 140px;\n\n        // \u5de6\u53f3\u306emargin\u306b\u4f59\u767d\u306e\u534a\u5206\u306e\u5024\u3092\u6307\u5b9a\u3057\u307e\u3059\n        margin: 0 15px;\n\n        // width\u306b100%\u304b\u30891\u884c\u306b\u8868\u793a\u3059\u308b\u30ab\u30e9\u30e0\u6570\u3067\u5272\u308a\u3001\u4f59\u767d\u306e\u5024\u3092\u5f15\u3044\u305f\u5024\u3092\u6307\u5b9a\u3057\u307e\u3059\n        width: calc(100% / 3 - 30px);\n\n        &:nth-child(n+4) {\n            margin-top: 30px;\n        }\n    }\n}\n"))),(0,a.kt)(i.Z,{value:"html",label:"HTML",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="c-flex">\n    <div class="c-flex__col"></div>\n    <div class="c-flex__col"></div>\n    <div class="c-flex__col"></div>\n    <div class="c-flex__col"></div>\n    <div class="c-flex__col"></div>\n</div>\n')))))}y.isMDXComponent=!0}}]);