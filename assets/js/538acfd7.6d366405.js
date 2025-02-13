"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([["6430"],{6285:function(e,n,t){t.r(n),t.d(n,{default:()=>g,frontMatter:()=>r,metadata:()=>i,assets:()=>c,toc:()=>d,contentTitle:()=>o});var i=JSON.parse('{"id":"fegg/first/config","title":"Initial settings","description":"Basic settings","source":"@site/docs/fegg/first/config.mdx","sourceDirName":"fegg/first","slug":"/fegg/first/config","permalink":"/coding-style-guide/docs/fegg/first/config","draft":false,"unlisted":false,"editUrl":"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/first/config.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"fegg","previous":{"title":"Fegg Directory structure","permalink":"/coding-style-guide/docs/fegg/first/cont"},"next":{"title":"URL","permalink":"/coding-style-guide/docs/fegg/basic/url"}}'),s=t("5893"),a=t("65");let r={sidebar_position:2},o="Initial settings",c={},d=[{value:"Basic settings",id:"basic-settings",level:2},{value:"Other settings",id:"other-settings",level:2},{value:"Changing initial class and method name",id:"changing-initial-class-and-method-name",level:3}];function l(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"initial-settings",children:"Initial settings"})}),"\n",(0,s.jsx)(n.h2,{id:"basic-settings",children:"Basic settings"}),"\n",(0,s.jsxs)(n.p,{children:["You can change the basic setting in ",(0,s.jsx)(n.strong,{children:"fegg/settings.php"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Change the parameters of ",(0,s.jsx)(n.code,{children:"$settings"})," in accordance to your environment."]}),"\n",(0,s.jsx)(n.h2,{id:"other-settings",children:"Other settings"}),"\n",(0,s.jsx)(n.h3,{id:"changing-initial-class-and-method-name",children:"Changing initial class and method name"}),"\n",(0,s.jsxs)(n.p,{children:["By default, initial class and method name is set to 'Index' file name and its 'index' method respectively. If you want to change the initial class and method name you should set your parameters in ",(0,s.jsx)(n.strong,{children:"htdocs/index.php"})," as seen below."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",metastring:'title="htdocs/index.php"',children:"<?php\n\n// Default class name and method name if not set.\nif (!$fileName) {\n    $fileName = 'Index';\n}\nif (!$methodName) {\n    $methodName = 'index';\n}\n"})})]})}function g(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},65:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return r}});var i=t(7294);let s={},a=i.createContext(s);function r(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);