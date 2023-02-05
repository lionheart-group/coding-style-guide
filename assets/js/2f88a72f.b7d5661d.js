"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[3203],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(r),d=n,u=g["".concat(p,".").concat(d)]||g[d]||m[d]||i;return r?a.createElement(u,o(o({ref:t},c),{},{components:r})):a.createElement(u,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5116:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const i={title:"Application::setCookie"},o=void 0,l={unversionedId:"fegg/basic/parameters/cookie/setcookie",id:"fegg/basic/parameters/cookie/setcookie",title:"Application::setCookie",description:"Set COOKIE data",source:"@site/docs/05-fegg/03-basic/04-parameters/04-cookie/01-setcookie.mdx",sourceDirName:"05-fegg/03-basic/04-parameters/04-cookie",slug:"/fegg/basic/parameters/cookie/setcookie",permalink:"/coding-style-guide/docs/fegg/basic/parameters/cookie/setcookie",draft:!1,editUrl:"https://gitlab.com/lionheart-group/coding-style-guide/-/edit/master/docs/05-fegg/03-basic/04-parameters/04-cookie/01-setcookie.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Application::setCookie"},sidebar:"fegg",previous:{title:"Application::unsetSession",permalink:"/coding-style-guide/docs/fegg/basic/parameters/session/unsetsession"},next:{title:"Application::getCookie",permalink:"/coding-style-guide/docs/fegg/basic/parameters/cookie/getcookie"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}],c={toc:s};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Set COOKIE data")),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},'public void Application::setCookie( string $name, string $value, [ string $expire = "" ], [ string $path = "/" ] )\n')),(0,n.kt)("p",null,"Set COOKIE data."),(0,n.kt)("h2",{id:"arguments"},"Arguments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Data type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Remarks"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cookie param key")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$value"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$expire"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},'""'),(0,n.kt)("td",{parentName:"tr",align:"left"},"Expired time")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$path"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Enabled path")))),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"If you omit third argument, expired time will be ",(0,n.kt)("strong",{parentName:"p"},"after 1 week")," (604800 seconds)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Controller"',title:'"Controller"'},"$this->setCookie('foo', 'bar');\n")),(0,n.kt)("p",null,"You can set a expired time at 3rd argument."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Controller"',title:'"Controller"'},"// This Cookie's expired time is after 60 seconds.\n$this->setCookie('foo', 'bar', 60);\n")),(0,n.kt)("p",null,"You can set a Enabled path at 4th argument."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Controller"',title:'"Controller"'},"// This Cookie enable under the \"/test/\" path.\n$this->setCookie('foo', 'bar', null, '/test/');\n")))}m.isMDXComponent=!0}}]);