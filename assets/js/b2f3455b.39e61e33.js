"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[8160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=u(n),m=l,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return n?i.createElement(g,o(o({ref:t},d),{},{components:n})):i.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var i=n(7462),l=(n(7294),n(3905));const r={title:"Visual Studio Code"},o=void 0,a={unversionedId:"env/editor/vscode",id:"env/editor/vscode",title:"Visual Studio Code",description:"Installation",source:"@site/docs/01-env/02-editor/03-vscode.mdx",sourceDirName:"01-env/02-editor",slug:"/env/editor/vscode",permalink:"/coding-style-guide/docs/env/editor/vscode",draft:!1,editUrl:"https://gitlab.com/lionheart-group/coding-style-guide/-/edit/master/docs/01-env/02-editor/03-vscode.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Visual Studio Code"},sidebar:"env",previous:{title:"PHPStorm",permalink:"/coding-style-guide/docs/env/editor/phpstorm"},next:{title:"Atom",permalink:"/coding-style-guide/docs/env/editor/atom"}},s={},u=[{value:"Installation",id:"installation",level:2},{value:"Manual install",id:"manual-install",level:3},{value:"macOS",id:"macos",level:3},{value:"Windows",id:"windows",level:3},{value:"editorconfig",id:"editorconfig",level:2},{value:"Required plugin",id:"required-plugin",level:3},{value:"stylelint",id:"stylelint",level:2},{value:"Required plugin",id:"required-plugin-1",level:3},{value:"Settings",id:"settings",level:3},{value:"eslint",id:"eslint",level:2},{value:"Required plugin",id:"required-plugin-2",level:3},{value:"Settings",id:"settings-1",level:3}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("h3",{id:"manual-install"},"Manual install"),(0,l.kt)("p",null,"You can download installer from ",(0,l.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Official website"),"."),(0,l.kt)("h3",{id:"macos"},"macOS"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Homebrew Cask")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install --cask vscode\n")),(0,l.kt)("h3",{id:"windows"},"Windows"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Scoop")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scoop install vscode\n")),(0,l.kt)("h2",{id:"editorconfig"},"editorconfig"),(0,l.kt)("p",null,"Our project has ",(0,l.kt)("a",{parentName:"p",href:"https://editorconfig.org/"},"EditorConfig")," setting file (.editorconfig). EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs."),(0,l.kt)("h3",{id:"required-plugin"},"Required plugin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig"},"EditorConfig for VS Code"))),(0,l.kt)("h2",{id:"stylelint"},"stylelint"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://stylelint.io/"},"stylelint")," helps you avoid errors and enforce conventions in your styles."),(0,l.kt)("p",null,"After you install the following plugin and settings, stylelint will automatically check and fix your syntax."),(0,l.kt)("h3",{id:"required-plugin-1"},"Required plugin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint"},"stylelint"))),(0,l.kt)("h3",{id:"settings"},"Settings"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open preferences (",(0,l.kt)("inlineCode",{parentName:"li"},"\u2318 + ,"),")"),(0,l.kt)("li",{parentName:"ol"},"Click the top-right button and open ",(0,l.kt)("inlineCode",{parentName:"li"},"settings.json")," file"),(0,l.kt)("li",{parentName:"ol"},"Insert the following syntax\n",(0,l.kt)("inlineCode",{parentName:"li"},"editor.codeActionsOnSave")," is same with eslint configuration. so if it's already exists, just insert the content of it.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'"editor.codeActionsOnSave": {\n    "source.fixAll.stylelint": true\n}\n')),(0,l.kt)("h2",{id:"eslint"},"eslint"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint")," statically analyzes your code to quickly find problems."),(0,l.kt)("p",null,"After you install the following plugin and settings, ESLint will automatically check and fix your syntax."),(0,l.kt)("h3",{id:"required-plugin-2"},"Required plugin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"},"ESLint"))),(0,l.kt)("h3",{id:"settings-1"},"Settings"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open preferences (",(0,l.kt)("inlineCode",{parentName:"li"},"\u2318 + ,"),")"),(0,l.kt)("li",{parentName:"ol"},"Click the top-right button and open ",(0,l.kt)("inlineCode",{parentName:"li"},"settings.json")," file"),(0,l.kt)("li",{parentName:"ol"},"Insert the following syntax\n",(0,l.kt)("inlineCode",{parentName:"li"},"editor.codeActionsOnSave")," is same with stylelint configuration. so if it's already exists, just insert the content of it.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'"editor.codeActionsOnSave": {\n    "source.fixAll.eslint": true\n}\n')))}c.isMDXComponent=!0}}]);