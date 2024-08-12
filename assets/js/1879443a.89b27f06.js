"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[5090],{1593:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=r(5893),n=r(1151),s=r(4866),l=r(5162);const o={wrap:"wrap_AuSl",wrap__label:"wrap__label_u2Xg",before:"before_mCoe",before__image:"before__image_uurQ",after:"after_OKcL"},i={sidebar_position:4},c="Aspect Ratio",u={id:"html/tips/aspect-ratio",title:"Aspect Ratio",description:"After finished supporting IE11, we can use aspect-ratio property.",source:"@site/docs/html/tips/aspect-ratio.mdx",sourceDirName:"html/tips",slug:"/html/tips/aspect-ratio",permalink:"/coding-style-guide/docs/html/tips/aspect-ratio",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/html/tips/aspect-ratio.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"html",previous:{title:"Grid layout",permalink:"/coding-style-guide/docs/html/tips/grid"},next:{title:":has selector",permalink:"/coding-style-guide/docs/html/tips/has"}},d={},p=[];function h(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"aspect-ratio",children:"Aspect Ratio"})}),"\n",(0,a.jsxs)(t.p,{children:["After finished supporting IE11, we can use ",(0,a.jsx)(t.code,{children:"aspect-ratio"})," property."]}),"\n",(0,a.jsx)(t.p,{children:"The following 2 images are square images and cropped 16/4 ratio. it looks same, but it's implemented different approach."}),"\n",(0,a.jsxs)("div",{className:o.wrap,children:[(0,a.jsxs)("div",{className:o.wrap__item,children:[(0,a.jsx)("p",{className:o.wrap__label,children:"Before"}),(0,a.jsx)("div",{className:o.before,children:(0,a.jsx)("img",{src:"https://via.placeholder.com/640",className:o.before__image})})]}),(0,a.jsxs)("div",{className:o.wrap__item,children:[(0,a.jsx)("p",{className:o.wrap__label,children:"After"}),(0,a.jsx)("img",{src:"https://via.placeholder.com/640",className:o.after})]})]}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsxs)(l.Z,{value:"before",label:"Before",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<div class="c-before">\n    <img src="(...)" class="c-before__image">\n</div>\n'})}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-scss",children:".c-before {\n    position: relative;\n    padding-top: 56.25%;\n}\n.c-before__image {\n    position: absolute;\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n}\n"})})]}),(0,a.jsxs)(l.Z,{value:"after",label:"After",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<img src="(...)" class="c-after">\n'})}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-scss",children:".c-after {\n    object-fit: cover;\n    width: 100%;\n    aspect-ratio: 16 / 9;\n}\n"})})]})]})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5162:(e,t,r)=>{r.d(t,{Z:()=>l});r(7294);var a=r(512);const n={tabItem:"tabItem_Ymn6"};var s=r(5893);function l(e){let{children:t,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(n.tabItem,l),hidden:r,children:t})}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(7294),n=r(512),s=r(2466),l=r(6550),o=r(469),i=r(1980),c=r(7392),u=r(812);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,c.lx)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=p(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[c,d]=m({queryString:r,groupId:n}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,u.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),g=(()=>{const e=c??f;return h({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(5893);function x(e){let{className:t,block:r,selectedValue:a,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const t=e.currentTarget,r=i.indexOf(t),n=o[r].value;n!==a&&(c(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,n.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function _(e){let{lazy:t,children:r,selectedValue:s}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,n.Z)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,n.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(_,{...t,...e})]})}function w(e){const t=(0,b.Z)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},1151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>l});var a=r(7294);const n={},s=a.createContext(n);function l(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);