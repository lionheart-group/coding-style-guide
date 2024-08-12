"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[791],{7044:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var t=s(5893),n=s(1151);const r={sidebar_position:3},i="Basic post type",a={id:"wordpress/howto/basic-post",title:"Basic post type",description:"When you use WordPress Basic Post type, please update archive.php and single.php template file.",source:"@site/docs/wordpress/howto/basic-post.mdx",sourceDirName:"wordpress/howto",slug:"/wordpress/howto/basic-post",permalink:"/coding-style-guide/docs/wordpress/howto/basic-post",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/wordpress/howto/basic-post.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"wordpress",previous:{title:"Component",permalink:"/coding-style-guide/docs/wordpress/howto/component"},next:{title:"Custom Post Type / Taxonomy",permalink:"/coding-style-guide/docs/wordpress/howto/custom-post"}},c={},p=[{value:"How to change archive page url",id:"how-to-change-archive-page-url",level:2},{value:"How to change detail page url",id:"how-to-change-detail-page-url",level:2}];function d(e){const o={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"basic-post-type",children:"Basic post type"})}),"\n",(0,t.jsxs)(o.p,{children:["When you use WordPress Basic Post type, please update ",(0,t.jsx)(o.code,{children:"archive.php"})," and ",(0,t.jsx)(o.code,{children:"single.php"})," template file."]}),"\n",(0,t.jsx)(o.h2,{id:"how-to-change-archive-page-url",children:"How to change archive page url"}),"\n",(0,t.jsxs)(o.p,{children:["LH WordPress template is able to change basic post type archive url. When you need to change basic post type archive url, please check ",(0,t.jsx)(o.code,{children:"config.php"}),"."]}),"\n",(0,t.jsx)(o.p,{children:"After changin the following function's value,"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-php",children:"<?php\n\n/**\n * \u6295\u7a3f\u30a2\u30fc\u30ab\u30a4\u30d6\u306e\u30b9\u30e9\u30c3\u30b0\n * Slug of post archive URL\n */\nfunction get_post_slug() {\n    return 'news';\n}\n"})}),"\n",(0,t.jsxs)(o.p,{children:["you need to display ",(0,t.jsx)(o.code,{children:"settings"})," -> ",(0,t.jsx)(o.code,{children:"permalinks"})," page of WordPress admin page. (When you show this page, WordPress apply permalink setting from template also)"]}),"\n",(0,t.jsx)(o.h2,{id:"how-to-change-detail-page-url",children:"How to change detail page url"}),"\n",(0,t.jsxs)(o.p,{children:["You can change basic post type detail page url by ",(0,t.jsx)(o.code,{children:"settings"})," -> ",(0,t.jsx)(o.code,{children:"permalinks"})," page of WordPress admin page."]})]})}function l(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,o,s)=>{s.d(o,{Z:()=>a,a:()=>i});var t=s(7294);const n={},r=t.createContext(n);function i(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);