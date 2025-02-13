"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([["3521"],{7166:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>c,metadata:()=>o,assets:()=>r,toc:()=>d,contentTitle:()=>l});var o=JSON.parse('{"id":"html/methodologies/object/project","title":"Project","description":"Define patterns which are unique to the project which consists of several components and other elements.","source":"@site/docs/html/methodologies/object/project.mdx","sourceDirName":"html/methodologies/object","slug":"/html/methodologies/object/project","permalink":"/coding-style-guide/docs/html/methodologies/object/project","draft":false,"unlisted":false,"editUrl":"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/html/methodologies/object/project.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"html","previous":{"title":"Component","permalink":"/coding-style-guide/docs/html/methodologies/object/component"},"next":{"title":"Utility","permalink":"/coding-style-guide/docs/html/methodologies/object/utility"}}'),s=t("5893"),i=t("65");let c={sidebar_position:2},l="Project",r={},d=[{value:"File naming rules",id:"file-naming-rules",level:2},{value:"Example",id:"example",level:2}];function h(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",del:"del",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"project",children:"Project"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.del,{children:"Define patterns which are unique to the project which consists of several components and other elements."})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.del,{children:"Elements that make up contents for your project come under this layer, such as an article list, user profile, or image gallery."})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Original FLOCLSS is defined the above, but it's hard to categorize in case of Web site project, there are many unique styles for each page, so we define ",(0,s.jsx)(n.code,{children:"Project"})," as ",(0,s.jsx)(n.strong,{children:"Define patterns which are unique layout for each page"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You must use ",(0,s.jsx)(n.code,{children:".p-"})," prefix for Project."]}),"\n",(0,s.jsx)(n.h2,{id:"file-naming-rules",children:"File naming rules"}),"\n",(0,s.jsxs)(n.p,{children:["Project is created for each page, so you must prepare the files naming related with URL. You should name ",(0,s.jsx)(n.strong,{children:'replaced "Slash(/)" to "Hyphen(-)" of URL'})," except for top page."]}),"\n",(0,s.jsx)(n.p,{children:'About top page file name is "_index.scss".'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"http://example.com/",children:"http://example.com/"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"_index.scss"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:".p-index"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"http://example.com/about/",children:"http://example.com/about/"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"_about.scss"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:".p-about"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"http://example.com/product/",children:"http://example.com/product/"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"_product.scss"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:".p-product"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"http://example.com/product/foo/",children:"http://example.com/product/foo/"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"_product-foo.scss"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:".p-product-foo"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<div class="p-index">\n    <section class="p-index__section">\n        <h2 class="p-index__section__head">SECTION TITLE</h2>\n\n        <ul class="p-index__section__nav">\n            <li class="p-index__section__nav__item">\n                <a href="#" class="c-button p-index__section__nav__anchor">BUTTON</a>\n            </li>\n        </ul>\n    </section>\n</div>\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-scss",metastring:'title="scss/object/project/_index.scss"',children:".p-index {\n    &__section {\n        // something style\n\n        &__head {\n            // something style\n        }\n\n        &__nav {\n            // something style\n\n            &__item {\n                // something style\n            }\n\n            &__anchor {\n                // something style\n            }\n        }\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.admonition,{title:"TIPS",type:"tip",children:[(0,s.jsxs)(n.p,{children:["This Example Project has has Component (",(0,s.jsx)(n.code,{children:".c-button"}),"), but you must NOT overwrite styles of those inside of Project. Please make Child Project (",(0,s.jsx)(n.code,{children:".p-index__section__nav__anchor"}),"), then you can define the style of that element."]}),(0,s.jsxs)(n.p,{children:["Reference : ",(0,s.jsx)(n.a,{href:"/docs/html/methodologies/important/child",children:"Don't include other component"})]})]})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},65:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return c}});var o=t(7294);let s={},i=o.createContext(s);function c(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);