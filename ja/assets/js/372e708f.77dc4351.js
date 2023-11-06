"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[1001],{2393:(e,i,l)=>{l.r(i),l.d(i,{assets:()=>t,contentTitle:()=>o,default:()=>a,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=l(5893),r=l(1151);const s={sidebar_position:1},o="Introduction",d={id:"fegg/library/file/index",title:"Introduction",description:"Providing some functions for managing files/directories",source:"@site/docs/fegg/library/file/index.mdx",sourceDirName:"fegg/library/file",slug:"/fegg/library/file/",permalink:"/coding-style-guide/ja/docs/fegg/library/file/",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/file/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"fegg",previous:{title:"Model::disabledRegularUseQuery",permalink:"/coding-style-guide/ja/docs/fegg/library/model/methods/disabledregularusequery"},next:{title:"File::copyAll",permalink:"/coding-style-guide/ja/docs/fegg/library/file/methods/copyall"}},t={},c=[{value:"How to use",id:"how-to-use",level:2},{value:"Methods",id:"methods",level:2}];function h(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(i.p,{children:"Providing some functions for managing files/directories"}),"\n",(0,n.jsx)(i.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,n.jsxs)(i.p,{children:["You can load ",(0,n.jsx)(i.code,{children:"File"})," class through ",(0,n.jsx)(i.code,{children:"Application::getClass"})," method."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-php",metastring:'title="Controller"',children:"$file = $this->getClass('Tool/File');\n\n$file->copyAll('path/to/foo', 'path/to/bar');\n"})}),"\n",(0,n.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/docs/fegg/library/file/methods/copyall",children:"File::copyAll"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Copy all the files to another directory"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/docs/fegg/library/file/methods/copydirectory",children:"File::copyDirectory"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Copy specified directory to specified location"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/docs/fegg/library/file/methods/copyfile",children:"File::copyFile"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Copy specified file to specified location"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/docs/fegg/library/file/methods/createdirectory",children:"File::createDirectory"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Create directory to specified location"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/docs/fegg/library/file/methods/movefile",children:"File::moveFile"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Move specified file to specified location"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/docs/fegg/library/file/methods/readfile",children:"File::readFile"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Read specified file"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/docs/fegg/library/file/methods/removedirectory",children:"File::removeDirectory"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Delete specified directory and files in that directory"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/docs/fegg/library/file/methods/removeexpiredfile",children:"File::removeExpiredFile"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Delete specified file that elapsed specified time"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/docs/fegg/library/file/methods/removefile",children:"File::removeFile"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Delete specified file"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/docs/fegg/library/file/methods/touchdirectory",children:"File::touchDirectory"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Update modified date of files that inside of specified directory"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/docs/fegg/library/file/methods/writefile",children:"File::writeFile"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Put the file to the specified location"}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,i,l)=>{l.d(i,{Z:()=>d,a:()=>o});var n=l(7294);const r={},s=n.createContext(r);function o(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);