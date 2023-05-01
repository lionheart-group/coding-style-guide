"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[5781],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=o,f=m["".concat(u,".").concat(p)]||m[p]||d[p]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),o=n(6010);const a="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(7462),o=n(7294),a=n(6010),i=n(6775),l=n(1980),u=n(7392),s=n(12);function c(e){return function(e){var t;return(null==(t=o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=d(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[u,c]=p({queryString:n,groupId:r}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,s.Nk)(n);return[r,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),g=(()=>{const e=u??f;return m({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,a]),tabValues:a}}var b=n(2466),g=n(2389);const h="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,b.o5)(),d=e=>{const t=e.currentTarget,n=s.indexOf(t),r=u[n].value;r!==i&&(c(t),l(r))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:d},l,{className:(0,a.Z)("tabs__item",y,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return o.createElement("div",{className:(0,a.Z)("tabs-container",h)},o.createElement(v,(0,r.Z)({},e,t)),o.createElement(k,(0,r.Z)({},e,t)))}function E(e){const t=(0,g.Z)();return o.createElement(w,(0,r.Z)({key:String(t)},e))}},7034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>h,frontMatter:()=>d,metadata:()=>p,toc:()=>b});var r=n(7462),o=(n(7294),n(3905));const a="sample_buttons_ip46",i="sample_buttons__button_LBK1",l="is-red_Lku2",u="is-blue_wRyR";var s=n(4866),c=n(5162);const d={sidebar_position:5},m="Modifier\u3060\u3051\u306e\u30af\u30e9\u30b9\u306f\u4f5c\u3089\u306a\u3044\u3053\u3068",p={unversionedId:"html/methodologies/important/modifier",id:"html/methodologies/important/modifier",title:"Modifier\u3060\u3051\u306e\u30af\u30e9\u30b9\u306f\u4f5c\u3089\u306a\u3044\u3053\u3068",description:'"Modifier"\u306f\u4e00\u3064\u306e\u30af\u30e9\u30b9\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002\u5fc5\u305aComponent\u3068\u4f75\u7528\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u306a\u305c\u306a\u3089\u3001"Modifier"\u306fComponent\u306e\u7570\u306a\u308b\u72b6\u614b\u3092\u793a\u3059\u30e2\u30ce\u306b\u4f7f\u3046\u305f\u3081\u306e\u30e2\u30ce\u3068\u306a\u308b\u305f\u3081\u3067\u3059\u3002',source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/html/methodologies/important/modifier.mdx",sourceDirName:"html/methodologies/important",slug:"/html/methodologies/important/modifier",permalink:"/coding-style-guide/ja/docs/html/methodologies/important/modifier",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/html/methodologies/important/modifier.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"html",previous:{title:"\u30e1\u30c7\u30a3\u30a2\u30af\u30a8\u30ea\u306e\u8a18\u8ff0\u4f4d\u7f6e",permalink:"/coding-style-guide/ja/docs/html/methodologies/important/media_query"},next:{title:"Foundation",permalink:"/coding-style-guide/ja/docs/html/methodologies/foundation/"}},f={},b=[{value:"\u4e8b\u4f8b",id:"\u4e8b\u4f8b",level:2},{value:"Modifier\u304c\u5fc5\u8981\u306b\u306a\u308b\u4e8b\u4f8b",id:"modifier\u304c\u5fc5\u8981\u306b\u306a\u308b\u4e8b\u4f8b",level:2}],g={toc:b};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modifier\u3060\u3051\u306e\u30af\u30e9\u30b9\u306f\u4f5c\u3089\u306a\u3044\u3053\u3068"},"Modifier\u3060\u3051\u306e\u30af\u30e9\u30b9\u306f\u4f5c\u3089\u306a\u3044\u3053\u3068"),(0,o.kt)("p",null,'"Modifier"\u306f\u4e00\u3064\u306e\u30af\u30e9\u30b9\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002\u5fc5\u305aComponent\u3068\u4f75\u7528\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u306a\u305c\u306a\u3089\u3001"Modifier"\u306fComponent\u306e\u7570\u306a\u308b\u72b6\u614b\u3092\u793a\u3059\u30e2\u30ce\u306b\u4f7f\u3046\u305f\u3081\u306e\u30e2\u30ce\u3068\u306a\u308b\u305f\u3081\u3067\u3059\u3002'),(0,o.kt)("h2",{id:"\u4e8b\u4f8b"},"\u4e8b\u4f8b"),(0,o.kt)("admonition",{title:"BAD",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},'"Modifier"\u304c\u4e00\u3064\u306e\u30af\u30e9\u30b9\u3068\u3057\u3066\u5ba3\u8a00\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u826f\u304f\u3042\u308a\u307e\u305b\u3093\u3002'),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-scss"},".c-component {\n    .is-child {\n        // something style\n    }\n}\n"))),(0,o.kt)("admonition",{title:"GOOD",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},'"Component"\u3068\u3057\u3066\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002'),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-scss"},".c-component {\n    &__child {\n        // something style\n    }\n}\n"))),(0,o.kt)("h2",{id:"modifier\u304c\u5fc5\u8981\u306b\u306a\u308b\u4e8b\u4f8b"},"Modifier\u304c\u5fc5\u8981\u306b\u306a\u308b\u4e8b\u4f8b"),(0,o.kt)("p",null,"\u4f8b\u3048\u3070\u4e0b\u8a18\u306e\u3088\u3046\u306a\u30dc\u30bf\u30f3\u3092\u5b9f\u88c5\u3059\u308b\u5834\u5408\u3001"),(0,o.kt)("div",{className:a},(0,o.kt)("button",{className:i},"Button"),(0,o.kt)("button",{className:`${i} ${l}`},"Button"),(0,o.kt)("button",{className:`${i} ${u}`},"Button")),(0,o.kt)("p",null,"\u9055\u3044\u306f\u80cc\u666f\u3068\u7dda\u306e\u8272\u3057\u304b\u3042\u308a\u307e\u305b\u3093\u3002\u305d\u306e\u70ba\u3001\u3053\u306e\u5834\u5408\u306fModifier\u3092\u5229\u7528\u3059\u308b\u69d8\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"scss",label:"SCSS",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"// `.c-button` \u306f\u5143\u3068\u306a\u308bComponent\u3067\u3059\n.c-button {\n    color: #fff;\n    appearance: none;\n    border: none;\n    background: transparent;\n    font-family: inherit;\n    cursor: pointer;\n    padding: 1rem 2rem;\n    border-radius: .25rem;\n\n    // \u7070\u8272\u306e\u30dc\u30bf\u30f3\u7528\u306eModifier\n    &.is-gray {\n        border: 1px solid #999;\n        background: #333;\n    }\n\n    // \u8d64\u8272\u306e\u30dc\u30bf\u30f3\u7528\u306eModifier\n    &.is-red {\n        border: 1px solid #f00;\n        background: #c00;\n    }\n\n    // \u9752\u8272\u306e\u30dc\u30bf\u30f3\u7528\u306eModifier\n    &.is-blue {\n        border: 1px solid #00f;\n        background: #333;\n    }\n}\n"))),(0,o.kt)(c.Z,{value:"html",label:"HTML",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<button class="c-button is-gray">Button</button>\n<button class="c-button is-red">Button</button>\n<button class="c-button is-blue">Button</button>\n')))))}h.isMDXComponent=!0}}]);