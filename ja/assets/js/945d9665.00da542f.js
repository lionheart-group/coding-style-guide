"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[9162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:6},i="VirtualBox",o={unversionedId:"env/virtualbox",id:"env/virtualbox",title:"VirtualBox",description:"M1 mac\u3067\u306fVirtualBox\u304c\u52d5\u4f5c\u3057\u307e\u305b\u3093\u306e\u3067\u3001Docker\u306b\u3088\u308b\u74b0\u5883\u69cb\u7bc9\u3092\u304a\u9858\u3044\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/env/virtualbox.mdx",sourceDirName:"env",slug:"/env/virtualbox",permalink:"/coding-style-guide/ja/docs/env/virtualbox",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/env/virtualbox.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"env",previous:{title:"Docker",permalink:"/coding-style-guide/ja/docs/env/docker"},next:{title:"Dnsmasq",permalink:"/coding-style-guide/ja/docs/env/dnsmasq"}},p={},u=[{value:"\u5fc5\u8981\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",id:"\u5fc5\u8981\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",level:2},{value:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",level:3},{value:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306e\u78ba\u8a8d",id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306e\u78ba\u8a8d",level:3},{value:"\u30ed\u30fc\u30ab\u30eb\u74b0\u5883\u306e\u8a2d\u5b9a",id:"\u30ed\u30fc\u30ab\u30eb\u74b0\u5883\u306e\u8a2d\u5b9a",level:2},{value:"\u521d\u671f\u8a2d\u5b9a",id:"\u521d\u671f\u8a2d\u5b9a",level:3},{value:"Vagrant\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\u5f8c",id:"vagrant\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\u5f8c",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"virtualbox"},"VirtualBox"),(0,a.kt)("admonition",{title:"\u975e\u63a8\u5968",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"M1 mac\u3067\u306fVirtualBox\u304c\u52d5\u4f5c\u3057\u307e\u305b\u3093\u306e\u3067\u3001",(0,a.kt)("a",{parentName:"p",href:"/docs/env/docker"},"Docker"),"\u306b\u3088\u308b\u74b0\u5883\u69cb\u7bc9\u3092\u304a\u9858\u3044\u3057\u307e\u3059\u3002")),(0,a.kt)("h2",{id:"\u5fc5\u8981\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"},"\u5fc5\u8981\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"),(0,a.kt)("p",null,"\u4e0b\u8a18\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.virtualbox.org/"},"VirtualBox")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.vagrantup.com/"},"Vagrant")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://brew.sh/"},"Homebrew")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"Git")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.ansible.com/"},"Ansible"))),(0,a.kt)("h3",{id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5"},"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"VirtualBox")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.virtualbox.org/"},"\u516c\u5f0f\u30b5\u30a4\u30c8"),"\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ol"},'"OS X hosts"\u306e\u30ea\u30f3\u30af\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Vagrant")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.vagrantup.com/"},"\u516c\u5f0f\u30b5\u30a4\u30c8"),"\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ol"},'macOS\u306e\u4e2d\u306e"64-bit"\u306e\u30ea\u30f3\u30af\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Homebrew\u3068Git")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/env/git"},"Git\u306e\u8aac\u660e\u30da\u30fc\u30b8"),"\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Ansible")),(0,a.kt)("p",null,"Homebrew\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u5f8c\u3001\u4e0b\u8a18\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew install ansible\n")),(0,a.kt)("h3",{id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306e\u78ba\u8a8d"},"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306e\u78ba\u8a8d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Vagrant\nvagrant -v\n  > Vagrant *.*.*\n\n# Git\ngit --version\n  > git version *.*.*\n\n# Ansible\nansible --version\n  > ansible *.*.*\n")),(0,a.kt)("h2",{id:"\u30ed\u30fc\u30ab\u30eb\u74b0\u5883\u306e\u8a2d\u5b9a"},"\u30ed\u30fc\u30ab\u30eb\u74b0\u5883\u306e\u8a2d\u5b9a"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sushat4692/VagrantAnsible"},"GitHub"),"\u306bVagrant\u74b0\u5883\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c\u5b58\u5728\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"\u521d\u671f\u8a2d\u5b9a"},"\u521d\u671f\u8a2d\u5b9a"),(0,a.kt)("p",null,"Terminal\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3057\u3066\u3001\u4e0b\u8a18\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u958b\u767a\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u6e96\u5099\nmkdir ~/Virtual\n\n# \u30e6\u30fc\u30b6\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u79fb\u52d5\uff08\u3069\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3067\u3082\u554f\u984c\u3042\u308a\u307e\u305b\u3093\uff09\ncd ~/\n\n# GitHub\u3088\u308a\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u53d6\u5f97\ngit clone https://github.com/sushat4692/VagrantAnsible.git\n\n# \u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u305f\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u79fb\u52d5\ncd VagrantAnsible\n\n# Vagrant\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\nvagrant up --provision\n")),(0,a.kt)("h2",{id:"vagrant\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\u5f8c"},"Vagrant\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\u5f8c"),(0,a.kt)("p",null,"\u521d\u671f\u8a2d\u5b9a\u5f8c\u3001\u30ed\u30fc\u30ab\u30eb\u74b0\u5883\u3092\u5229\u7528\u3059\u308b\u4e8b\u304c\u53ef\u80fd\u3067\u3059\u3002\u307e\u305f\u3001localhost\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"~/Virtual"),"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u9023\u643a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http://foo.localhost/ -> ~/Virtual/foo/htdocs\nhttp://bar.localhost/ -> ~/Virtual/bar/htdocs\n")))}c.isMDXComponent=!0}}]);