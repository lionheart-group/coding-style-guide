"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([["6152"],{552:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>o,assets:()=>a,toc:()=>r,contentTitle:()=>i});var o=JSON.parse('{"id":"env/node","title":"Node.js (Volta)","description":"Node.js\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u65B9\u6CD5\u306F\u69D8\u3005\u306A\u624B\u6CD5\u304C\u3042\u308A\u307E\u3059\u304C\u3001LH\u3067\u306F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u6BCE\u306B\u5FC5\u8981\u306A\u30D0\u30FC\u30B8\u30E7\u30F3\u304C\u7570\u306A\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/env/node.mdx","sourceDirName":"env","slug":"/env/node","permalink":"/coding-style-guide/ja/docs/env/node","draft":false,"unlisted":false,"editUrl":"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/env/node.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"env","previous":{"title":"Git","permalink":"/coding-style-guide/ja/docs/env/git"},"next":{"title":"pnpm (corepack)","permalink":"/coding-style-guide/ja/docs/env/pnpm"}}'),t=s("5893"),d=s("65");let l={sidebar_position:4},i="Node.js (Volta)",a={},r=[{value:"\u3059\u3067\u306BNode.js\u304C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308B\u5834\u5408",id:"\u3059\u3067\u306Bnodejs\u304C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308B\u5834\u5408",level:2},{value:"Node.js\u306E\u30A2\u30F3\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",id:"nodejs\u306E\u30A2\u30F3\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",level:3},{value:"Volta\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",id:"volta\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",level:2},{value:"\u6307\u5B9A\u306ENode.js\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",id:"\u6307\u5B9A\u306Enodejs\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",level:2}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"nodejs-volta",children:"Node.js (Volta)"})}),"\n",(0,t.jsx)(n.p,{children:"Node.js\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u65B9\u6CD5\u306F\u69D8\u3005\u306A\u624B\u6CD5\u304C\u3042\u308A\u307E\u3059\u304C\u3001LH\u3067\u306F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u6BCE\u306B\u5FC5\u8981\u306A\u30D0\u30FC\u30B8\u30E7\u30F3\u304C\u7570\u306A\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u305D\u3053\u3067\u3001LH\u3067\u306F",(0,t.jsx)(n.a,{href:"https://volta.sh/",children:"Volta"}),"\u306E\u5229\u7528\u3092\u304A\u3059\u3059\u3081\u3057\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u3059\u3067\u306Bnodejs\u304C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308B\u5834\u5408",children:"\u3059\u3067\u306BNode.js\u304C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308B\u5834\u5408"}),"\n",(0,t.jsx)(n.p,{children:"\u307E\u305A\u306F\u3058\u3081\u306B\u3001Node.js\u304C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308B\u5834\u6240\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"which node\n# -> /Users/(user name)/.volta/bin/node : \u3059\u3067\u306BVolta\u304C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u307E\u3059\n# -> /usr/local/bin/node (or other) : \u30A2\u30F3\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u304C\u5FC5\u8981\u3067\u3059\n"})}),"\n",(0,t.jsx)(n.h3,{id:"nodejs\u306E\u30A2\u30F3\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",children:"Node.js\u306E\u30A2\u30F3\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"}),"\n",(0,t.jsx)(n.p,{children:"\u65E2\u306BNode.js\u304C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u30A2\u30F3\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3092\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"brew uninstall node\n"})}),"\n",(0,t.jsx)(n.h2,{id:"volta\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",children:"Volta\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Volta\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\ncurl https://get.volta.sh | bash\n\n# LTS\u30D0\u30FC\u30B8\u30E7\u30F3\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\nvolta install node@lts\n\n# Node.js\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u5834\u6240\u3092\u78BA\u8A8D\nwhich node\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u6307\u5B9A\u306Enodejs\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",children:"\u6307\u5B9A\u306ENode.js\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"}),"\n",(0,t.jsx)(n.p,{children:"Volta\u306F\u6307\u5B9A\u306ENode.js\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# \u3082\u3057\u30D0\u30FC\u30B8\u30E7\u30F314\u306ENode.js\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u5834\u5408\nvolta install node@14\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u307E\u305F\u3001\u6307\u5B9A\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3060\u3051\u306B\u5BFE\u3057\u3066\u6307\u5B9A\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A9\u30EB\u30C0\u306E\u914D\u4E0B\u3067\u4E0B\u8A18\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u307E\u3059\nvolta pin node@14\n"})})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},65:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var o=s(7294);let t={},d=o.createContext(t);function l(e){let n=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);