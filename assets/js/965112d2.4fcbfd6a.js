"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[6357],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),m=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(d.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(n),u=r,p=c["".concat(d,".").concat(u)]||c[u]||g[u]||l;return n?a.createElement(p,i(i({ref:t},s),{},{components:n})):a.createElement(p,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={title:"Validation::maxlength"},i=void 0,o={unversionedId:"fegg/library/validation/methods/maxlength",id:"fegg/library/validation/methods/maxlength",title:"Validation::maxlength",description:"Check character less than maximum length",source:"@site/docs/05-fegg/04-library/01-validation/03-methods/14-maxlength.mdx",sourceDirName:"05-fegg/04-library/01-validation/03-methods",slug:"/fegg/library/validation/methods/maxlength",permalink:"/coding-style-guide/docs/fegg/library/validation/methods/maxlength",draft:!1,editUrl:"https://gitlab.com/lionheart-group/coding-style-guide/-/edit/master/docs/05-fegg/04-library/01-validation/03-methods/14-maxlength.mdx",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Validation::maxlength"},sidebar:"fegg",previous:{title:"Validation::length",permalink:"/coding-style-guide/docs/fegg/library/validation/methods/length"},next:{title:"Validation::minlength",permalink:"/coding-style-guide/docs/fegg/library/validation/methods/minlength"}},d={},m=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}],s={toc:m};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Check character less than maximum length")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"public boolean Validation::maxlength( string $name, mixed $value, numeric $length, [ mixed $code = '' ] )\n")),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Item label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$value"),(0,r.kt)("td",{parentName:"tr",align:null},"mixed"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Check field value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$length"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specific length value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$code"),(0,r.kt)("td",{parentName:"tr",align:null},"mixed"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Error code or Error message")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Controller"',title:'"Controller"'},"$validation = $this->getClass('Validation');\n\n// If $value is less than equal specific length\n$successName = 'Success Field';\n$successVar  = 'foo';\n$length      = 5;\n$validation->maxlength('success', $successVar, $length, array('@maxlength', $successName, $length));\n\nvar_dump($validation->isError()); // -> false\nvar_dump($validation->getErrorMessage()); // -> null\n\n// If $value is more than specific length\n$failedName = 'Failed Field';\n$failedVar  = 'failed';\n$length     = 5;\n$validation->maxlength('failed', $failedVar, $length, array('@maxlength', $failedName, $length));\n\nvar_dump($validation->isError()); // -> true\nvar_dump($validation->getErrorMessage());\n// -> \"failed\" => \"<strong>Failed Field</strong> \u306f <strong>5</strong> \u6587\u5b57\u4ee5\u5185\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\"\n")))}g.isMDXComponent=!0}}]);