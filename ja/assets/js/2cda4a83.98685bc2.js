"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[2807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"Git"},i=void 0,l={unversionedId:"env/git",id:"env/git",title:"Git",description:"\u30e9\u30a4\u30aa\u30f3\u30cf\u30fc\u30c8\u3067\u306fGitLab\u3092\u5229\u7528\u3057\u3066\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e\u7ba1\u7406\u3092\u3057\u3066\u3044\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/01-env/03-git.mdx",sourceDirName:"01-env",slug:"/env/git",permalink:"/coding-style-guide/ja/docs/env/git",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/01-env/03-git.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Git"},sidebar:"env",previous:{title:"Atom",permalink:"/coding-style-guide/ja/docs/env/editor/atom"},next:{title:"Node.js (Volta)",permalink:"/coding-style-guide/ja/docs/env/node"}},p={},c=[{value:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"macOS",id:"macos",level:3},{value:"Windows",id:"windows",level:3}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u30e9\u30a4\u30aa\u30f3\u30cf\u30fc\u30c8\u3067\u306f",(0,o.kt)("a",{parentName:"p",href:"https://gitlab.com"},"GitLab"),"\u3092\u5229\u7528\u3057\u3066\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e\u7ba1\u7406\u3092\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,"GitLab\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e\u53d6\u5f97\u30fb\u7de8\u96c6\u3092\u884c\u3046\u306b\u306f\u3001Git\u30b3\u30de\u30f3\u30c9\u3092\u5229\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,o.kt)("h3",{id:"macos"},"macOS"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew"),"\u3092\u5229\u7528\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3092\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Homebrew")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Git")),(0,o.kt)("p",null,"Homebrew\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u5f8c\u3001\u4e0b\u8a18\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install git\n")),(0,o.kt)("h3",{id:"windows"},"Windows"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://scoop.sh"},"Scoop"),"\u3092\u5229\u7528\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3092\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Scoop")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')\n\n# \u307e\u305f\u306f\u4e0b\u8a18\u3067\u3082\u53ef\niwr -useb get.scoop.sh | iex\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Git")),(0,o.kt)("p",null,"Scoop\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u5f8c\u3001\u4e0b\u8a18\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scoop install git\n")))}u.isMDXComponent=!0}}]);