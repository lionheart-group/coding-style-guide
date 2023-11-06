"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[272],{1120:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=t(5893),l=t(1151);const s={sidebar_position:6},o="VirtualBox",r={id:"env/virtualbox",title:"VirtualBox",description:"on M1 mac, VirtualBox won't work, so please implement local environment by Docker.",source:"@site/docs/env/virtualbox.mdx",sourceDirName:"env",slug:"/env/virtualbox",permalink:"/coding-style-guide/docs/env/virtualbox",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/env/virtualbox.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"env",previous:{title:"Docker",permalink:"/coding-style-guide/docs/env/docker"},next:{title:"Dnsmasq",permalink:"/coding-style-guide/docs/env/dnsmasq"}},a={},c=[{value:"Install Applications",id:"install-applications",level:2},{value:"How to install",id:"how-to-install",level:3},{value:"Check the installation",id:"check-the-installation",level:3},{value:"Set up Local environment",id:"set-up-local-environment",level:2},{value:"Initial setting up",id:"initial-setting-up",level:3},{value:"After that",id:"after-that",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"virtualbox",children:"VirtualBox"}),"\n",(0,i.jsx)(e.admonition,{title:"Deprecated",type:"danger",children:(0,i.jsxs)(e.p,{children:["on M1 mac, VirtualBox won't work, so please implement local environment by ",(0,i.jsx)(e.a,{href:"/docs/env/docker",children:"Docker"}),"."]})}),"\n",(0,i.jsx)(e.h2,{id:"install-applications",children:"Install Applications"}),"\n",(0,i.jsx)(e.p,{children:"You need installing following applications."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://www.virtualbox.org/",children:"VirtualBox"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://www.vagrantup.com/",children:"Vagrant"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://brew.sh/",children:"Homebrew"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://git-scm.com/",children:"Git"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://www.ansible.com/",children:"Ansible"})}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"how-to-install",children:"How to install"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"VirtualBox"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["Access to ",(0,i.jsx)(e.a,{href:"https://www.virtualbox.org/",children:"website"}),", and click download button."]}),"\n",(0,i.jsx)(e.li,{children:'Click "OS X hosts" link'}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Vagrant"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["Access to ",(0,i.jsx)(e.a,{href:"https://www.vagrantup.com/",children:"website"}),", and click download button."]}),"\n",(0,i.jsx)(e.li,{children:'Click macOS > "64-bit" link'}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Homebrew and Git"})}),"\n",(0,i.jsxs)(e.p,{children:["Please check ",(0,i.jsx)(e.a,{href:"/docs/env/git",children:"Git page"}),"."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Ansible"})}),"\n",(0,i.jsx)(e.p,{children:"After installing Homebrew."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"brew install ansible\n"})}),"\n",(0,i.jsx)(e.h3,{id:"check-the-installation",children:"Check the installation"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# Vagrant\nvagrant -v\n  > Vagrant *.*.*\n\n# Git\ngit --version\n  > git version *.*.*\n\n# Ansible\nansible --version\n  > ansible *.*.*\n"})}),"\n",(0,i.jsx)(e.h2,{id:"set-up-local-environment",children:"Set up Local environment"}),"\n",(0,i.jsxs)(e.p,{children:["There are ansible template of local environment on ",(0,i.jsx)(e.a,{href:"https://github.com/sushat4692/VagrantAnsible",children:"GitHub"}),"."]}),"\n",(0,i.jsx)(e.h3,{id:"initial-setting-up",children:"Initial setting up"}),"\n",(0,i.jsx)(e.p,{children:"Open Terminal, and run following commands."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# Creating Developing Directory\nmkdir ~/Virtual\n\n# Anywhere is OK, move to your favorite place\n# For example, into your user directory\ncd ~/\n\n# Getting datas from GitHub\ngit clone https://github.com/sushat4692/VagrantAnsible.git\n\n# Move to downloaded directory\ncd VagrantAnsible\n\n# Running Vagrant command\nvagrant up --provision\n"})}),"\n",(0,i.jsx)(e.h2,{id:"after-that",children:"After that"}),"\n",(0,i.jsxs)(e.p,{children:["After you setting up, you can use local environment and it's related localhost to ",(0,i.jsx)(e.code,{children:"~/Virtual"}),"."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"http://foo.localhost/ -> ~/Virtual/foo/htdocs\nhttp://bar.localhost/ -> ~/Virtual/bar/htdocs\n"})})]})}function h(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>r,a:()=>o});var i=t(7294);const l={},s=i.createContext(l);function o(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:o(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);