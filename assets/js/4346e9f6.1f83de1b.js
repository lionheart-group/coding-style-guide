"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[9511],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,v=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:5},i="Docker",l={unversionedId:"env/docker",id:"env/docker",title:"Docker",description:"Install Applications",source:"@site/docs/env/docker.mdx",sourceDirName:"env",slug:"/env/docker",permalink:"/coding-style-guide/docs/env/docker",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/env/docker.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"env",previous:{title:"Node.js (Volta)",permalink:"/coding-style-guide/docs/env/node"},next:{title:"VirtualBox",permalink:"/coding-style-guide/docs/env/virtualbox"}},c={},s=[{value:"Install Applications",id:"install-applications",level:2},{value:"Set up Local environment",id:"set-up-local-environment",level:2},{value:"Initial setting up",id:"initial-setting-up",level:3},{value:"Operating Docker commands",id:"operating-docker-commands",level:2},{value:"How to change PHP versions",id:"how-to-change-php-versions",level:3},{value:"After that",id:"after-that",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker"},"Docker"),(0,o.kt)("h2",{id:"install-applications"},"Install Applications"),(0,o.kt)("p",null,"You need to install ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"Docker Desktop"),"."),(0,o.kt)("h2",{id:"set-up-local-environment"},"Set up Local environment"),(0,o.kt)("p",null,"There are Dockerfile template of local environment on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sushat4692/docker-lamp"},"GitHub"),"."),(0,o.kt)("h3",{id:"initial-setting-up"},"Initial setting up"),(0,o.kt)("p",null,"Open Terminal, and run following commands."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Creating Developing Directory\nmkdir ~/Virtual\n\n# Anywhere is OK, move to your favorite place\n# For example, into your user directory\ncd ~/\n\n# Getting datas from GitHub\ngit clone https://github.com/sushat4692/docker-lamp.git\n\n# Move to downloaded directory\ncd docker-lamp\n\n# Duplicate `.env.sample` to `.env`\ncp .env.sample .env\n")),(0,o.kt)("h2",{id:"operating-docker-commands"},"Operating Docker commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Up (Build and Start) containers\n./command.sh up\n\n# Start containers\n./command.sh start\n\n# Stop containers\n./command.sh stop\n\n# Delete containers, images and volumes\n./command.sh delete\n")),(0,o.kt)("h3",{id:"how-to-change-php-versions"},"How to change PHP versions"),(0,o.kt)("p",null,"This docker setting is able to change PHP version by the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./command.sh up {version number}\n")),(0,o.kt)("p",null,"so, for example if you want to run PHP 8.1:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./command.sh up 81\n")),(0,o.kt)("h2",{id:"after-that"},"After that"),(0,o.kt)("p",null,"After you setting up, you can use local environment and it's related localhost to ",(0,o.kt)("inlineCode",{parentName:"p"},"~/Virtual"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://foo.localhost/ -> ~/Virtual/foo/htdocs\nhttp://bar.localhost/ -> ~/Virtual/bar/htdocs\n")))}u.isMDXComponent=!0}}]);