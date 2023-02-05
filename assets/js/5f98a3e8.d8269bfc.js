"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[2764],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"Git"},l=void 0,i={unversionedId:"env/git",id:"env/git",title:"Git",description:"We're managing our project source code by GitLab.",source:"@site/docs/01-env/03-git.mdx",sourceDirName:"01-env",slug:"/env/git",permalink:"/coding-style-guide/docs/env/git",draft:!1,editUrl:"https://gitlab.com/lionheart-group/coding-style-guide/-/edit/master/docs/01-env/03-git.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Git"},sidebar:"env",previous:{title:"Atom",permalink:"/coding-style-guide/docs/env/editor/atom"},next:{title:"Node.js (Volta)",permalink:"/coding-style-guide/docs/env/node"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"For macOS",id:"for-macos",level:3},{value:"For Windows",id:"for-windows",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We're managing our project source code by ",(0,o.kt)("a",{parentName:"p",href:"https://gitlab.com"},"GitLab"),"."),(0,o.kt)("p",null,"When you download/upload to GitLab, you need to use Git command."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("h3",{id:"for-macos"},"For macOS"),(0,o.kt)("p",null,"You can install Git command through ",(0,o.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Homebrew")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Git")),(0,o.kt)("p",null,"After installing Homebrew."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install git\n")),(0,o.kt)("h3",{id:"for-windows"},"For Windows"),(0,o.kt)("p",null,"You can install Git command through ",(0,o.kt)("a",{parentName:"p",href:"https://scoop.sh"},"Scoop"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Scoop")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')\n\n# or shorter\niwr -useb get.scoop.sh | iex\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Git")),(0,o.kt)("p",null,"After installing Scoop."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scoop install git\n")))}u.isMDXComponent=!0}}]);