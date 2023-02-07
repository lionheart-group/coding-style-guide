"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[4438],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),p=o,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),o=n(6010);const a="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(7462),o=n(7294),a=n(6010),l=n(6775),i=n(1980),s=n(7392),u=n(12);function c(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=d(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[s,c]=p({queryString:n,groupId:r}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Nk)(n);return[r,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),h=(()=>{const e=s??f;return m({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),b(e)}),[c,b,a]),tabValues:a}}var b=n(2466),h=n(2389);const g="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,b.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=s[n].value;r!==l&&(c(t),i(r))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,a.Z)("tabs__item",y,null==i?void 0:i.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return o.createElement("div",{className:(0,a.Z)("tabs-container",g)},o.createElement(v,(0,r.Z)({},e,t)),o.createElement(k,(0,r.Z)({},e,t)))}function E(e){const t=(0,h.Z)();return o.createElement(w,(0,r.Z)({key:String(t)},e))}},3911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>g,frontMatter:()=>d,metadata:()=>p,toc:()=>b});var r=n(7462),o=(n(7294),n(3905));const a="sample_buttons_ip46",l="sample_buttons__button_LBK1",i="is-red_Lku2",s="is-blue_wRyR";var u=n(4866),c=n(5162);const d={},m="Don't use single class for Modifier",p={unversionedId:"html/methodologies/important/modifier",id:"html/methodologies/important/modifier",title:"Don't use single class for Modifier",description:'"Modifier" cannot use as one class, it\'s needed to use with other component. Because, "Modifier" represents a different state or version of "Components".',source:"@site/docs/02-html/04-methodologies/03-important/05-modifier.mdx",sourceDirName:"02-html/04-methodologies/03-important",slug:"/html/methodologies/important/modifier",permalink:"/coding-style-guide/docs/html/methodologies/important/modifier",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/02-html/04-methodologies/03-important/05-modifier.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"html",previous:{title:"Place of media query",permalink:"/coding-style-guide/docs/html/methodologies/important/media_query"},next:{title:"Foundation",permalink:"/coding-style-guide/docs/html/methodologies/foundation"}},f={},b=[{value:"Example",id:"example",level:2},{value:"Example of that is needed Modifier",id:"example-of-that-is-needed-modifier",level:2}],h={toc:b};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dont-use-single-class-for-modifier"},"Don't use single class for Modifier"),(0,o.kt)("p",null,'"Modifier" cannot use as one class, it\'s needed to use with other component. Because, "Modifier" represents a different state or version of "Components".'),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("admonition",{title:"BAD",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"This example is not good, because modifier is specified as single class."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-scss"},".c-component {\n    .is-child {\n        // something style\n    }\n}\n"))),(0,o.kt)("admonition",{title:"GOOD",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Please change to component"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-scss"},".c-component {\n    &__child {\n        // something style\n    }\n}\n"))),(0,o.kt)("h2",{id:"example-of-that-is-needed-modifier"},"Example of that is needed Modifier"),(0,o.kt)("p",null,"For example, if you need to implement like the following buttons."),(0,o.kt)("div",{className:a},(0,o.kt)("button",{className:l},"Button"),(0,o.kt)("button",{className:`${l} ${i}`},"Button"),(0,o.kt)("button",{className:`${l} ${s}`},"Button")),(0,o.kt)("p",null,"Its differences are just background and border colors. so, please use modifier."),(0,o.kt)(u.Z,{mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"scss",label:"SCSS",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"// `.c-button` is base style Component\n.c-button {\n    color: #fff;\n    appearance: none;\n    border: none;\n    background: transparent;\n    font-family: inherit;\n    cursor: pointer;\n    padding: 1rem 2rem;\n    border-radius: .25rem;\n\n    // For gray button modifier\n    &.is-gray {\n        border: 1px solid #999;\n        background: #333;\n    }\n\n    // For red button modifier\n    &.is-red {\n        border: 1px solid #f00;\n        background: #c00;\n    }\n\n    // For blue button modifier\n    &.is-blue {\n        border: 1px solid #00f;\n        background: #333;\n    }\n}\n"))),(0,o.kt)(c.Z,{value:"html",label:"HTML",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<button class="c-button is-gray">Button</button>\n<button class="c-button is-red">Button</button>\n<button class="c-button is-blue">Button</button>\n')))))}g.isMDXComponent=!0}}]);