"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[8770],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=i,f=d["".concat(c,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1},a="About Other methods",s={unversionedId:"fegg/basic/others/index",id:"fegg/basic/others/index",title:"About Other methods",description:"Fegg has other methods that you may use in your application code and display.",source:"@site/docs/fegg/basic/others/index.mdx",sourceDirName:"fegg/basic/others",slug:"/fegg/basic/others/",permalink:"/coding-style-guide/docs/fegg/basic/others/",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/basic/others/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"fegg",previous:{title:"Application::unsetCookie",permalink:"/coding-style-guide/docs/fegg/basic/parameters/cookie/unsetcookie"},next:{title:"Application::loadConfig",permalink:"/coding-style-guide/docs/fegg/basic/others/config/loadconfig"}},c={},l=[{value:"Config",id:"config",level:2},{value:"Ticket",id:"ticket",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"about-other-methods"},"About Other methods"),(0,i.kt)("p",null,"Fegg has other methods that you may use in your application code and display."),(0,i.kt)("h2",{id:"config"},"Config"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/basic/others/config/loadconfig"},"Application::loadConfig"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Loading config file")))),(0,i.kt)("h2",{id:"ticket"},"Ticket"),(0,i.kt)("p",null,"Ticket is useful in securing your own form processing. Setting ticket will return a hashed random string using md5 function and is going to be a part of your session. This ticket can also be applied as ",(0,i.kt)("a",{parentName:"p",href:"/docs/fegg/basic/templates/rules/hidden"},"Hidden")," input on the form. That means this ticket exists both on the server and client side and we can match them once the form is submitted and validate if they are the same."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/basic/others/tickets/setticket"},"Application::setTicket"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set ticket data and start ticket session"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/basic/others/tickets/useticket"},"Application::useTicket"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use ticket once and destroy ticket session")))))}p.isMDXComponent=!0}}]);