"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[2030],{8944:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>r});var t=o(5893),i=o(1151);const s={sidebar_position:2},c="\u5225Component\u3092\u542b\u3081\u306a\u3044",d={id:"html/methodologies/important/child",title:"\u5225Component\u3092\u542b\u3081\u306a\u3044",description:"Component\u306e\u4e2d\u306b\u5225\u306eComponent\u3092\u542b\u3081\u306a\u3044\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u307e\u305f\u3001\u5b50Component\u3092\u5358\u72ec\u3067\u5229\u7528\u3057\u306a\u3044\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/html/methodologies/important/child.mdx",sourceDirName:"html/methodologies/important",slug:"/html/methodologies/important/child",permalink:"/coding-style-guide/ja/docs/html/methodologies/important/child",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/html/methodologies/important/child.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"html",previous:{title:"\u30d5\u30a1\u30a4\u30eb\u540d\u3068\u30af\u30e9\u30b9\u540d\u306e\u95a2\u4fc2\u306b\u3064\u3044\u3066",permalink:"/coding-style-guide/ja/docs/html/methodologies/important/name"},next:{title:"\u30bf\u30b0\u30bb\u30ec\u30af\u30bf\u306f\u4f7f\u7528\u3057\u306a\u3044\u3053\u3068",permalink:"/coding-style-guide/ja/docs/html/methodologies/important/selector"}},l={},r=[{value:"\u4e8b\u4f8b (1)",id:"\u4e8b\u4f8b-1",level:2},{value:"\u4e8b\u4f8b (2)",id:"\u4e8b\u4f8b-2",level:2}];function a(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"\u5225component\u3092\u542b\u3081\u306a\u3044",children:"\u5225Component\u3092\u542b\u3081\u306a\u3044"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Component\u306e\u4e2d\u306b\u5225\u306eComponent\u3092\u542b\u3081\u306a\u3044"}),"\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u307e\u305f\u3001",(0,t.jsx)(e.strong,{children:"\u5b50Component\u3092\u5358\u72ec\u3067\u5229\u7528\u3057\u306a\u3044"}),"\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(e.admonition,{title:"REASON",type:"info",children:(0,t.jsx)(e.p,{children:"Component\u306e\u7d44\u307f\u5408\u308f\u305b\u3067\u610f\u56f3\u3057\u306a\u3044\u30ec\u30a4\u30a2\u30a6\u30c8\u304c\u767a\u751f\u3057\u306a\u3044\u3088\u3046\u306b\u3001Component\u5185\u3067\u5b8c\u7d50\u3059\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"})}),"\n",(0,t.jsx)(e.h2,{id:"\u4e8b\u4f8b-1",children:"\u4e8b\u4f8b (1)"}),"\n",(0,t.jsxs)(e.admonition,{title:"BAD",type:"danger",children:[(0,t.jsx)(e.p,{children:"\u542b\u3081\u306a\u3044\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-html",children:'<div class="c-foo">\n    <div class="c-bar"></div>\n</div>\n'})}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-scss",children:"// scss/object/component/_foo.scss\n.c-foo {\n    // something style\n    .c-bar {\n        // something style\n    }\n}\n"})})]}),"\n",(0,t.jsxs)(e.admonition,{title:"GOOD",type:"tip",children:[(0,t.jsx)(e.p,{children:"\u4e0a\u8a18\u4f8b\u306e\u89e3\u6c7a\u4f5c\u306e\u4e00\u3064\u3068\u3057\u3066\u3001\u4f8b\u3048\u3070c-bar\u306b\u4e26\u5217\u3067c-foo\u306e\u5b50Component\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-html",children:'<div class="c-foo">\n    <div class="c-foo__child c-bar"></div>\n</div>\n'})}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-scss",children:"// scss/object/component/_foo.scss\n.c-foo {\n    // something style\n    &__child {\n        // something style\n    }\n}\n"})})]}),"\n",(0,t.jsx)(e.h2,{id:"\u4e8b\u4f8b-2",children:"\u4e8b\u4f8b (2)"}),"\n",(0,t.jsxs)(e.admonition,{title:"BAD",type:"danger",children:[(0,t.jsxs)(e.p,{children:["\u5b50Component",(0,t.jsx)(e.code,{children:".c-bar"}),"\u3092\u89aaComponent",(0,t.jsx)(e.code,{children:".c-bar__child"}),"\u7121\u3057\u3067\u5229\u7528\u3057\u306a\u3044\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-html",children:'<div class="c-foo">\n    <div class="c-bar__child"></div>\n</div>\n'})})]}),"\n",(0,t.jsxs)(e.admonition,{title:"GOOD",type:"tip",children:[(0,t.jsxs)(e.p,{children:["\u5b50Component",(0,t.jsx)(e.code,{children:".c-bar__child"}),"\u306f\u5fc5\u305a\u89aaComponent",(0,t.jsx)(e.code,{children:".c-bar"}),"\u5185\u306b\u542b\u307e\u308c\u308b\u69d8\u306b\u69cb\u7bc9\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-html",children:'<div class="c-foo">\n    <div class="c-bar">\n        <div class="c-bar__child"></div>\n    </div>\n</div>\n'})}),(0,t.jsx)(e.p,{children:"\u307e\u305f\u306f"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-html",children:'<div class="c-foo c-bar">\n    <div class="c-bar__child"></div>\n</div>\n'})})]})]})}function h(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},1151:(n,e,o)=>{o.d(e,{Z:()=>d,a:()=>c});var t=o(7294);const i={},s=t.createContext(i);function c(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);