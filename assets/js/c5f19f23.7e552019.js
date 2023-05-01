"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[272],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:6},i="VirtualBox",o={unversionedId:"env/virtualbox",id:"env/virtualbox",title:"VirtualBox",description:"on M1 mac, VirtualBox won't work, so please implement local environment by Docker.",source:"@site/docs/env/virtualbox.mdx",sourceDirName:"env",slug:"/env/virtualbox",permalink:"/coding-style-guide/docs/env/virtualbox",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/env/virtualbox.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"env",previous:{title:"Docker",permalink:"/coding-style-guide/docs/env/docker"},next:{title:"Dnsmasq",permalink:"/coding-style-guide/docs/env/dnsmasq"}},p={},s=[{value:"Install Applications",id:"install-applications",level:2},{value:"How to install",id:"how-to-install",level:3},{value:"Check the installation",id:"check-the-installation",level:3},{value:"Set up Local environment",id:"set-up-local-environment",level:2},{value:"Initial setting up",id:"initial-setting-up",level:3},{value:"After that",id:"after-that",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"virtualbox"},"VirtualBox"),(0,r.kt)("admonition",{title:"Deprecated",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"on M1 mac, VirtualBox won't work, so please implement local environment by ",(0,r.kt)("a",{parentName:"p",href:"/docs/env/docker"},"Docker"),".")),(0,r.kt)("h2",{id:"install-applications"},"Install Applications"),(0,r.kt)("p",null,"You need installing following applications."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.virtualbox.org/"},"VirtualBox")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.vagrantup.com/"},"Vagrant")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://brew.sh/"},"Homebrew")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"Git")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.ansible.com/"},"Ansible"))),(0,r.kt)("h3",{id:"how-to-install"},"How to install"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"VirtualBox")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Access to ",(0,r.kt)("a",{parentName:"li",href:"https://www.virtualbox.org/"},"website"),", and click download button."),(0,r.kt)("li",{parentName:"ol"},'Click "OS X hosts" link')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Vagrant")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Access to ",(0,r.kt)("a",{parentName:"li",href:"https://www.vagrantup.com/"},"website"),", and click download button."),(0,r.kt)("li",{parentName:"ol"},'Click macOS > "64-bit" link')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Homebrew and Git")),(0,r.kt)("p",null,"Please check ",(0,r.kt)("a",{parentName:"p",href:"/docs/env/git"},"Git page"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ansible")),(0,r.kt)("p",null,"After installing Homebrew."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install ansible\n")),(0,r.kt)("h3",{id:"check-the-installation"},"Check the installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Vagrant\nvagrant -v\n  > Vagrant *.*.*\n\n# Git\ngit --version\n  > git version *.*.*\n\n# Ansible\nansible --version\n  > ansible *.*.*\n")),(0,r.kt)("h2",{id:"set-up-local-environment"},"Set up Local environment"),(0,r.kt)("p",null,"There are ansible template of local environment on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sushat4692/VagrantAnsible"},"GitHub"),"."),(0,r.kt)("h3",{id:"initial-setting-up"},"Initial setting up"),(0,r.kt)("p",null,"Open Terminal, and run following commands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Creating Developing Directory\nmkdir ~/Virtual\n\n# Anywhere is OK, move to your favorite place\n# For example, into your user directory\ncd ~/\n\n# Getting datas from GitHub\ngit clone https://github.com/sushat4692/VagrantAnsible.git\n\n# Move to downloaded directory\ncd VagrantAnsible\n\n# Running Vagrant command\nvagrant up --provision\n")),(0,r.kt)("h2",{id:"after-that"},"After that"),(0,r.kt)("p",null,"After you setting up, you can use local environment and it's related localhost to ",(0,r.kt)("inlineCode",{parentName:"p"},"~/Virtual"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http://foo.localhost/ -> ~/Virtual/foo/htdocs\nhttp://bar.localhost/ -> ~/Virtual/bar/htdocs\n")))}u.isMDXComponent=!0}}]);