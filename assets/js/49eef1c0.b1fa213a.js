"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[1523],{8845:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var t=n(5893),l=n(1151);const s={sidebar_position:3},r="Atom",o={id:"env/editor/atom",title:"Atom",description:"Atom and all repositories under Atom will be archived on December 15, 2022. so, please don't start using this app.",source:"@site/docs/env/editor/atom.mdx",sourceDirName:"env/editor",slug:"/env/editor/atom",permalink:"/coding-style-guide/docs/env/editor/atom",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/env/editor/atom.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"env",previous:{title:"Visual Studio Code",permalink:"/coding-style-guide/docs/env/editor/vscode"},next:{title:"Git",permalink:"/coding-style-guide/docs/env/git"}},d={},a=[{value:"Installation",id:"installation",level:2},{value:"Manual install",id:"manual-install",level:3},{value:"macOS",id:"macos",level:3},{value:"Windows",id:"windows",level:3},{value:"editorconfig",id:"editorconfig",level:2},{value:"Required plugin",id:"required-plugin",level:3},{value:"Settings",id:"settings",level:3},{value:"stylelint",id:"stylelint",level:2},{value:"Required plugin",id:"required-plugin-1",level:3},{value:"Settings",id:"settings-1",level:3},{value:"eslint",id:"eslint",level:2},{value:"Required plugin",id:"required-plugin-2",level:3},{value:"Settings",id:"settings-2",level:3}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"atom",children:"Atom"}),"\n",(0,t.jsx)(i.admonition,{title:"Deprecated",type:"danger",children:(0,t.jsx)(i.p,{children:"Atom and all repositories under Atom will be archived on December 15, 2022. so, please don't start using this app."})}),"\n",(0,t.jsx)(i.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(i.h3,{id:"manual-install",children:"Manual install"}),"\n",(0,t.jsxs)(i.p,{children:["You can download installer from ",(0,t.jsx)(i.a,{href:"https://atom.io/",children:"Official website"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"macos",children:"macOS"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Homebrew Cask"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"brew install --cask atom\n"})}),"\n",(0,t.jsx)(i.h3,{id:"windows",children:"Windows"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Scoop"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"scoop install atom\n"})}),"\n",(0,t.jsx)(i.h2,{id:"editorconfig",children:"editorconfig"}),"\n",(0,t.jsxs)(i.p,{children:["Our project has ",(0,t.jsx)(i.a,{href:"https://editorconfig.org/",children:"EditorConfig"})," setting file (.editorconfig). EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs."]}),"\n",(0,t.jsx)(i.h3,{id:"required-plugin",children:"Required plugin"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://atom.io/packages/editorconfig",children:"editorconfig"})}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"settings",children:"Settings"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"insert_final_newline"})," and ",(0,t.jsx)(i.code,{children:"trim_trailing_whitespace"})," are conflicted with default plugin. so, you need to disable the plugin ",(0,t.jsx)(i.code,{children:"whitespace"}),"."]}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Open preferences (",(0,t.jsx)(i.code,{children:"\u2318 + ,"}),")"]}),"\n",(0,t.jsx)(i.li,{children:'Click "Packages"'}),"\n",(0,t.jsx)(i.li,{children:'Click "Disable" button of "whitespace"'}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"stylelint",children:"stylelint"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://stylelint.io/",children:"stylelint"})," helps you avoid errors and enforce conventions in your styles."]}),"\n",(0,t.jsx)(i.p,{children:"After you install the following plugin and settings, stylelint will automatically check and fix your syntax."}),"\n",(0,t.jsx)(i.h3,{id:"required-plugin-1",children:"Required plugin"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://atom.io/packages/linter",children:"linter"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://atom.io/packages/linter-stylelint",children:"linter-stylelint"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://atom.io/packages/linter-ui-default",children:"linter-ui-default"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://atom.io/packages/intentions",children:"intentions"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://atom.io/packages/busy-signal",children:"busy-signal"})}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"settings-1",children:"Settings"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Open preferences (",(0,t.jsx)(i.code,{children:"\u2318 + ,"}),")"]}),"\n",(0,t.jsx)(i.li,{children:'Click "Packages"'}),"\n",(0,t.jsx)(i.li,{children:'Click "Settings" of "linter-stylelint"'}),"\n",(0,t.jsx)(i.li,{children:'Put a check "Attempt to fix styles on save"'}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"eslint",children:"eslint"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://eslint.org/",children:"ESLint"})," statically analyzes your code to quickly find problems."]}),"\n",(0,t.jsx)(i.p,{children:"After you install the following plugin and settings, ESLint will automatically check and fix your syntax."}),"\n",(0,t.jsx)(i.h3,{id:"required-plugin-2",children:"Required plugin"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://atom.io/packages/linter",children:"linter"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://atom.io/packages/linter-eslint",children:"linter-eslint"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://atom.io/packages/linter-ui-default",children:"linter-ui-default"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://atom.io/packages/intentions",children:"intentions"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://atom.io/packages/busy-signal",children:"busy-signal"})}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"settings-2",children:"Settings"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Open preferences (",(0,t.jsx)(i.code,{children:"\u2318 + ,"}),")"]}),"\n",(0,t.jsx)(i.li,{children:'Click "Packages"'}),"\n",(0,t.jsx)(i.li,{children:'Click "Settings" of "linter-eslint"'}),"\n",(0,t.jsx)(i.li,{children:'Put a check "Automatic Fixes" > "Fix errors on save"'}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>o,a:()=>r});var t=n(7294);const l={},s=t.createContext(l);function r(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);