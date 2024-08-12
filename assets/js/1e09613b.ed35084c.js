"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[987],{6004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=n(5893),o=n(1151);const s={sidebar_position:1},r="Fegg Directory structure",c={id:"fegg/first/cont",title:"Fegg Directory structure",description:"Below is the initial folders and files you will see. Fegg consists of 3 main folders - code, fegg and htdocs.",source:"@site/docs/fegg/first/cont.mdx",sourceDirName:"fegg/first",slug:"/fegg/first/cont",permalink:"/coding-style-guide/docs/fegg/first/cont",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/first/cont.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"fegg",previous:{title:"Fegg Coding Guide",permalink:"/coding-style-guide/docs/fegg/"},next:{title:"Initial settings",permalink:"/coding-style-guide/docs/fegg/first/config"}},d={},l=[];function a(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"fegg-directory-structure",children:"Fegg Directory structure"})}),"\n",(0,i.jsx)(t.p,{children:"Below is the initial folders and files you will see. Fegg consists of 3 main folders - code, fegg and htdocs."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"# The code folder organizes your application components. It has subfolders that contain your controller, template files, route,\n# cache and extension library. This folder is where you will work most of the time for the project development.\ncode/\n    application/\n        ***.php     # Controller classes\n    config/\n        route.php   # Set up a routing settings\n        ***.php     # Set up settings for other extension library\n    data/\n        ...         # Save cache file for Template engine and log file\n    lib/\n        ***.php     # Extension library classes\n    template/\n        ***.tpl     # Template files\n\n# The fegg folder is the Fegg core files. You don't need to edit these files.\nfegg/\n    Application.php # Fegg's Core file, include a basic class and functions\n    settings.php    # Set up basic settings for Fegg\n\n# The htdocs folder is where the document root is specified.\nhtdocs/\n    .htaccess\n    index.php  # Dispatcher file\n"})}),"\n",(0,i.jsx)(t.p,{children:"In this user guide, it makes a description of the case, which were constructed in the above directory structure."})]})}function g(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var i=n(7294);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);