"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[3599],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(g,l(l({ref:t},c),{},{components:a})):n.createElement(g,l({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8165:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={title:"Application::displayPage"},l=void 0,o={unversionedId:"fegg/basic/templates/methods/displaypage",id:"fegg/basic/templates/methods/displaypage",title:"Application::displayPage",description:"Display compiled template with automatically variables and taking measures for Clickjacking",source:"@site/docs/05-fegg/03-basic/03-templates/02-methods/04-displaypage.mdx",sourceDirName:"05-fegg/03-basic/03-templates/02-methods",slug:"/fegg/basic/templates/methods/displaypage",permalink:"/coding-style-guide/ja/docs/fegg/basic/templates/methods/displaypage",draft:!1,editUrl:"https://gitlab.com/lionheart-group/coding-style-guide/-/edit/master/docs/05-fegg/03-basic/03-templates/02-methods/04-displaypage.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Application::displayPage"},sidebar:"fegg",previous:{title:"Application::fetchPage",permalink:"/coding-style-guide/ja/docs/fegg/basic/templates/methods/fetchpage"},next:{title:"Application::setSiteinfo",permalink:"/coding-style-guide/ja/docs/fegg/basic/templates/helpers/setsiteinfo"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}],c={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Display compiled template with automatically variables and taking measures for Clickjacking")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"public string Application::fetchPage( string $template )\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"displayPage")," method is equipped with the X-Frame-Options HTTP response header set to Deny so that no other contents from the other sites are embedded into your website."),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$template"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Template file name")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="code/application/Foo.php"',title:'"code/application/Foo.php"'},"<?php\n\nclass Foo extends Application\n{\n    function bar(){\n        $this->displayPage( 'foo/bar' );\n    }\n}\n")),(0,r.kt)("p",null,"Displays the ",(0,r.kt)("a",{parentName:"p",href:"/docs/fegg/basic/templates/methods/fetchpage"},"Application::fetchPage")," result after taking precautionary measures from Clickjacking attack."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"It is recommended to use ",(0,r.kt)("inlineCode",{parentName:"p"},"displayPage")," method in compiling your template file for the security of your web users/visitors.")))}m.isMDXComponent=!0}}]);