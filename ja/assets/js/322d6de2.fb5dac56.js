"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[9228],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),u=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,g=c["".concat(d,".").concat(m)]||c[m]||p[m]||i;return r?a.createElement(g,l(l({ref:t},s),{},{components:r})):a.createElement(g,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7484:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:1},l="Validation::required",o={unversionedId:"fegg/library/validation/methods/required",id:"fegg/library/validation/methods/required",title:"Validation::required",description:"Check required",source:"@site/docs/fegg/library/validation/methods/required.mdx",sourceDirName:"fegg/library/validation/methods",slug:"/fegg/library/validation/methods/required",permalink:"/coding-style-guide/ja/docs/fegg/library/validation/methods/required",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/validation/methods/required.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"fegg",previous:{title:"Configuration",permalink:"/coding-style-guide/ja/docs/fegg/library/validation/configuration"},next:{title:"Validation::alphameric",permalink:"/coding-style-guide/ja/docs/fegg/library/validation/methods/alphameric"}},d={},u=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"validationrequired"},"Validation::required"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Check required")),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"public boolean Validation::required( string $name, mixed $value, [ mixed $code = '' ] )\n")),(0,n.kt)("h2",{id:"arguments"},"Arguments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Data type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"$name"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Item label")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"$value"),(0,n.kt)("td",{parentName:"tr",align:null},"mixed"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Check field value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"$code"),(0,n.kt)("td",{parentName:"tr",align:null},"mixed"),(0,n.kt)("td",{parentName:"tr",align:null},'""'),(0,n.kt)("td",{parentName:"tr",align:null},"Error code or Error message")))),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Controller"',title:'"Controller"'},"$validation = $this->getClass('Validation');\n\n// If $value is not empty\n$successName = 'Success Field';\n$successVar  = 'foo';\n$validation->required('success', $successVar, array('@required', $successName));\n\nvar_dump($validation->isError()); // -> false\nvar_dump($validation->getErrorMessage()); // -> null\n\n// If $value is empty\n$failedName = 'Failed Field';\n$failedVar  = null;\n$validation->required('failed', $failedVar, array('@required', $failedName));\n\nvar_dump($validation->isError()); // -> true\nvar_dump($validation->getErrorMessage());\n// -> \"failed\" => \"<strong>Failed Field</strong> \u306f\u534a\u89d2\u82f1\u6570\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\"\n")))}p.isMDXComponent=!0}}]);