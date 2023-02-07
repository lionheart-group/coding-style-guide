"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[1997],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(a),m=n,g=c["".concat(d,".").concat(m)]||c[m]||u[m]||l;return a?r.createElement(g,i(i({ref:t},p),{},{components:a})):r.createElement(g,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3844:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const l={title:"Validation::password"},i=void 0,o={unversionedId:"fegg/library/validation/methods/password",id:"fegg/library/validation/methods/password",title:"Validation::password",description:"Check allowed character to Password",source:"@site/docs/05-fegg/04-library/01-validation/03-methods/11-password.mdx",sourceDirName:"05-fegg/04-library/01-validation/03-methods",slug:"/fegg/library/validation/methods/password",permalink:"/coding-style-guide/ja/docs/fegg/library/validation/methods/password",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/05-fegg/04-library/01-validation/03-methods/11-password.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Validation::password"},sidebar:"fegg",previous:{title:"Validation::userId",permalink:"/coding-style-guide/ja/docs/fegg/library/validation/methods/userid"},next:{title:"Validation::maxbyte",permalink:"/coding-style-guide/ja/docs/fegg/library/validation/methods/maxbyte"}},d={},s=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2},{value:"Optional Flag",id:"optional-flag",level:3}],p={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Check allowed character to Password")),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"public boolean Validation::password( string $name, mixed $value, [ mixed $code = '', boolean $mixedLettersFlag = false ] )\n")),(0,n.kt)("h2",{id:"arguments"},"Arguments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Data type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"$name"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Item label")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"$value"),(0,n.kt)("td",{parentName:"tr",align:null},"mixed"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Check field value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"$code"),(0,n.kt)("td",{parentName:"tr",align:null},"mixed"),(0,n.kt)("td",{parentName:"tr",align:null},'""'),(0,n.kt)("td",{parentName:"tr",align:null},"Error code or Error message")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"$mixedLettersFlag"),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"Required mixed letters alphanum flag")))),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Controller"',title:'"Controller"'},"$validation = $this->getClass('Validation');\n\n// If $value is alphanumeric\n$successName = 'Success Field';\n$successVar  = 'abcdefhijk';\n$validation->password('success', $successVar, array('@password', $successName));\n\nvar_dump($validation->isError()); // -> false\nvar_dump($validation->getErrorMessage()); // -> null\n\n// If $value is not alphanumeric\n$failedName = 'Failed Field';\n$failedVar  = '\u30d1\u30b9\u30ef\u30fc\u30c9';\n$validation->password('failed', $failedVar, array('@password', $failedName));\n\nvar_dump($validation->isError()); // -> true\nvar_dump($validation->getErrorMessage());\n// -> \"failed\" => \"<strong>Failed Field</strong> \u306f\u767b\u9332\u3067\u304d\u306a\u3044\u5f62\u5f0f\u3067\u3059\"\n")),(0,n.kt)("h3",{id:"optional-flag"},"Optional Flag"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Controller"',title:'"Controller"'},"// If $value is alphabet with disabled mixed letter flag\n$successName = 'Success Field';\n$successVar  = 'abcdefhijk';\n$validation->password('success', $successVar, array('@password', $successName));\n\nvar_dump($validation->isError()); // -> false\nvar_dump($validation->getErrorMessage()); // -> null\n\n// If $value is alphabet with enabled mixed letter flag\n$failedName = 'Failed Field';\n$failedVar  = 'abcdefhijk';\n$validation->password('failed', $failedVar, array('@password_mixed_letters', $failedName), true);\n\nvar_dump($validation->isError()); // -> true\nvar_dump($validation->getErrorMessage());\n// -> \"failed\" => \"<strong>Failed Field</strong> \u306f\u534a\u89d2\u82f1\u6570\u306e\u6df7\u5408\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\"\n")))}u.isMDXComponent=!0}}]);