"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[4168],{196:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var c=o(5893),r=o(1151);const s={sidebar_position:5},t="Docker",d={id:"env/docker",title:"Docker",description:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/env/docker.mdx",sourceDirName:"env",slug:"/env/docker",permalink:"/coding-style-guide/ja/docs/env/docker",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/env/docker.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"env",previous:{title:"Node.js (Volta)",permalink:"/coding-style-guide/ja/docs/env/node"},next:{title:"VirtualBox",permalink:"/coding-style-guide/ja/docs/env/virtualbox"}},i={},l=[{value:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"\u30ed\u30fc\u30ab\u30eb\u74b0\u5883\u306e\u8a2d\u5b9a",id:"\u30ed\u30fc\u30ab\u30eb\u74b0\u5883\u306e\u8a2d\u5b9a",level:2},{value:"\u30ed\u30fc\u30ab\u30eb\u958b\u767a\u74b0\u5883",id:"\u30ed\u30fc\u30ab\u30eb\u958b\u767a\u74b0\u5883",level:3},{value:"Docker\u3092\u64cd\u4f5c\u3059\u308b\u30b3\u30de\u30f3\u30c9",id:"docker\u3092\u64cd\u4f5c\u3059\u308b\u30b3\u30de\u30f3\u30c9",level:2},{value:"PHP\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u5207\u308a\u66ff\u3048",id:"php\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u5207\u308a\u66ff\u3048",level:3},{value:"Docker\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\u5f8c",id:"docker\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\u5f8c",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"docker",children:"Docker"}),"\n",(0,c.jsx)(n.h2,{id:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"https://www.docker.com/products/docker-desktop",children:"Docker Desktop"}),"\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u5fc5\u8981\u3067\u3059\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u30ed\u30fc\u30ab\u30eb\u74b0\u5883\u306e\u8a2d\u5b9a",children:"\u30ed\u30fc\u30ab\u30eb\u74b0\u5883\u306e\u8a2d\u5b9a"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"https://github.com/sushat4692/docker-lamp",children:"GitHub"}),"\u306bDockerfile\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c\u5b58\u5728\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u30ed\u30fc\u30ab\u30eb\u958b\u767a\u74b0\u5883",children:"\u30ed\u30fc\u30ab\u30eb\u958b\u767a\u74b0\u5883"}),"\n",(0,c.jsx)(n.p,{children:"Terminal\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3057\u3066\u3001\u4e0b\u8a18\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"# \u958b\u767a\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u6e96\u5099\nmkdir ~/Virtual\n\n# \u30e6\u30fc\u30b6\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u79fb\u52d5\uff08\u3069\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3067\u3082\u554f\u984c\u3042\u308a\u307e\u305b\u3093\uff09\ncd ~/\n\n# GitHub\u3088\u308a\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u53d6\u5f97\ngit clone https://github.com/sushat4692/VagrantAnsible.git\n\n# \u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u305f\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u79fb\u52d5\ncd docker-lamp\n\n# `.env.sample`\u3092\u8907\u88fd\u3057\u3066`.env`\u3092\u4f5c\u6210\ncp .env.sample .env\n\n# Docker\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\ndocker-compose up\n"})}),"\n",(0,c.jsx)(n.h2,{id:"docker\u3092\u64cd\u4f5c\u3059\u308b\u30b3\u30de\u30f3\u30c9",children:"Docker\u3092\u64cd\u4f5c\u3059\u308b\u30b3\u30de\u30f3\u30c9"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"# \u30b3\u30f3\u30c6\u30ca\u306e\u30d3\u30eb\u30c9\u30fb\u8d77\u52d5\n./command.sh up\n\n# \u30b3\u30f3\u30c6\u30ca\u306e\u958b\u59cb\n./command.sh start\n\n# \u30b3\u30f3\u30c6\u30ca\u306e\u505c\u6b62\n./command.sh stop\n\n# \u30b3\u30f3\u30c6\u30ca\u3001\u30a4\u30e1\u30fc\u30b8\u3001\u30dc\u30ea\u30e5\u30fc\u30e0\u306e\u524a\u9664\n./command.sh delete\n"})}),"\n",(0,c.jsx)(n.h3,{id:"php\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u5207\u308a\u66ff\u3048",children:"PHP\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u5207\u308a\u66ff\u3048"}),"\n",(0,c.jsx)(n.p,{children:"\u3053\u306eDocker\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306f\u3001\u4e0b\u8a18\u306e\u3088\u3046\u306b\u30b3\u30de\u30f3\u30c9\u306b\u3088\u3063\u3066PHP\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u5207\u308a\u66ff\u3048\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"./command.sh up {version number}\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u3082\u3057PHP8.1\u3067\u8d77\u52d5\u3059\u308b\u5834\u5408\u306f\u4e0b\u8a18\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"./command.sh up 81\n"})}),"\n",(0,c.jsx)(n.h2,{id:"docker\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\u5f8c",children:"Docker\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\u5f8c"}),"\n",(0,c.jsxs)(n.p,{children:["\u521d\u671f\u8a2d\u5b9a\u5f8c\u3001\u30ed\u30fc\u30ab\u30eb\u74b0\u5883\u3092\u5229\u7528\u3059\u308b\u4e8b\u304c\u53ef\u80fd\u3067\u3059\u3002\u307e\u305f\u3001localhost\u306f",(0,c.jsx)(n.code,{children:"~/Virtual"}),"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u9023\u643a\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"http://foo.localhost/ -> ~/Virtual/foo/htdocs\nhttp://bar.localhost/ -> ~/Virtual/bar/htdocs\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>d,a:()=>t});var c=o(7294);const r={},s=c.createContext(r);function t(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);