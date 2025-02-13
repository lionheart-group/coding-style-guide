"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([["1002"],{2685:function(e,l,r){r.r(l),r.d(l,{default:()=>j,frontMatter:()=>c,metadata:()=>n,assets:()=>h,toc:()=>a,contentTitle:()=>t});var n=JSON.parse('{"id":"fegg/library/model/index","title":"Introduction","description":"Extended Database Library for LH project","source":"@site/docs/fegg/library/model/index.mdx","sourceDirName":"fegg/library/model","slug":"/fegg/library/model/","permalink":"/coding-style-guide/ja/docs/fegg/library/model/","draft":false,"unlisted":false,"editUrl":"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/model/index.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"fegg","previous":{"title":"DB_pdo::slaveServer","permalink":"/coding-style-guide/ja/docs/fegg/library/database/methods/slaveserver"},"next":{"title":"Model::\\\\_\\\\_construct","permalink":"/coding-style-guide/ja/docs/fegg/library/model/methods/construct"}}'),s=r("5893"),d=r("65"),i=r("7294");let o=e=>{let{children:l,color:r}=e,[n,d]=(0,i.useState)("rgb(185, 28, 28)"),[o,c]=(0,i.useState)("white");return(0,i.useEffect)(()=>{switch(r){case"red":d("rgb(185, 28, 28)"),c("white");break;case"blue":d("rgb(29, 78, 216)"),c("white");break;case"green":d("rgb(4, 120, 87)"),c("white");break;case"yellow":d("rgb(252, 211, 77)"),c("rgb(55, 65, 81)");break;case"white":d("rgb(229, 231, 235)"),c("rgb(55, 65, 81)")}},[r]),(0,s.jsx)("span",{style:{background:n,color:o,fontSize:".9em",padding:".15em .35em",fontWeight:"bold",borderRadius:".2em",marginLeft:".2em"},children:l})},c={sidebar_position:1},t="Introduction",h={},a=[{value:"How to use",id:"how-to-use",level:2},{value:"Methods",id:"methods",level:2}];function x(e){let l={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.header,{children:(0,s.jsx)(l.h1,{id:"introduction",children:"Introduction"})}),"\n","\n",(0,s.jsxs)(l.blockquote,{children:["\n",(0,s.jsx)(l.p,{children:"Extended Database Library for LH project"}),"\n"]}),"\n",(0,s.jsx)(l.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.code,{children:"Model"})," is already imported on ",(0,s.jsx)(l.code,{children:"Controller"}),", so you can call without include."]}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-php",metastring:'title="Controller"',children:"$model = new Model(false, array(\n  'table'   => 'cms_news',\n  'id'      => 'news_id',\n  'visible' => 'visible',\n));\n\n$records = $model->find();\n"})}),"\n",(0,s.jsx)(l.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/construct",children:"Model::__construct"})," ",(0,s.jsx)(o,{color:"yellow",children:"Important"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Model class constructor"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/settablename",children:"Model::setTableName"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Set Table Name"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/gettablename",children:"Model::getTableName"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Get Table name"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/setprimary",children:"Model::setPrimary"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Set Primary ID name"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/getprimary",children:"Model::getPrimary"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Get Primary ID name"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/setvisible",children:"Model::setVisible"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Set Visible flag name"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/getvisible",children:"Model::getVisible"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Get Visible flag name"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/setbindparam",children:"Model::setBindParam"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Set Bind Parameter types"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/addbindparam",children:"Model::addBindParam"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Add Bind Parameter types"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/getbindparam",children:"Model::getBindParam"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Get Bind Parameter types"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/select",children:"Model::select"})," ",(0,s.jsx)(o,{color:"yellow",children:"Important"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Set Select Parameter"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/listmax",children:"Model::listMax"})," ",(0,s.jsx)(o,{color:"yellow",children:"Important"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Set ListMax Parameter"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/current",children:"Model::current"})," ",(0,s.jsx)(o,{color:"yellow",children:"Important"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Set Current Page Parameter"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/where",children:"Model::where"})," ",(0,s.jsx)(o,{color:"yellow",children:"Important"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Set Where Parameter"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/whereopen",children:"Model::whereOpen"})," ",(0,s.jsx)(o,{color:"yellow",children:"Important"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Add open bracket on Where query"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/whereclose",children:"Model::whereClose"})," ",(0,s.jsx)(o,{color:"yellow",children:"Important"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Add close bracket on Where query"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/having",children:"Model::having"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Set Having Parameter"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/havingopen",children:"Model::havingOpen"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Add open bracket on Having query"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/havingclose",children:"Model::havingClose"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Add close bracket on Having query"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/order",children:"Model::order"})," ",(0,s.jsx)(o,{color:"yellow",children:"Important"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Set Order Parameter"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/join",children:"Model::join"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Set Join Parameter"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/group",children:"Model::group"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Set Group Parameter"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/find",children:"Model::find"})," ",(0,s.jsx)(o,{color:"yellow",children:"Important"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Get rows designated count"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/getpager",children:"Model::getPager"})," ",(0,s.jsx)(o,{color:"yellow",children:"Important"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Get variables for making pager"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/one",children:"Model::one"})," ",(0,s.jsx)(o,{color:"yellow",children:"Important"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Get one row from the records"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/count",children:"Model::count"})," ",(0,s.jsx)(o,{color:"yellow",children:"Important"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Get the number of record's count"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/id",children:"Model::id"})," ",(0,s.jsx)(o,{color:"yellow",children:"Important"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Get one record by specified primary ID"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/setoptions",children:"Model::setOptions"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Setting option parameter"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/resetoptions",children:"Model::resetOptions"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Reset Options Data"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/insert",children:"Model::insert"})," ",(0,s.jsx)(o,{color:"yellow",children:"Important"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Execute Insert data"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/updatewhere",children:"Model::updateWhere"})," ",(0,s.jsx)(o,{color:"yellow",children:"Important"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Execute Update the records by specified condition"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/update",children:"Model::update"})," ",(0,s.jsx)(o,{color:"yellow",children:"Important"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Execute Update the record by specified primary ID"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/deletewhere",children:"Model::deleteWhere"})," ",(0,s.jsx)(o,{color:"yellow",children:"Important"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Execute Logical Delete the records by specified condition"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/delete",children:"Model::delete"})," ",(0,s.jsx)(o,{color:"yellow",children:"Important"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Execute Logical Delete the record by specified primary ID"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/erasewhere",children:"Model::eraseWhere"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Execute Physical Delete the records by specified condition"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/erase",children:"Model::erase"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Execute Physical Delete the record by specified primary ID"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/create",children:"Model::create"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Execute Create Table"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/droptable",children:"Model::dropTable"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Execute Drop table"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/dropindex",children:"Model::dropIndex"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Execute Drop index"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/alteraddcolumn",children:"Model::alterAddColumn"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Execute Alter Add Column"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/alterrenameto",children:"Model::alterRenameTo"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Execute Alter Rename"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/pragma",children:"Model::pragma"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Execute Pragma"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/reset",children:"Model::reset"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Reset Model"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/debug",children:"Model::debug"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Get last executed query"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/unsetregularusequery",children:"Model::unsetRegularUseQuery"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Disable automatic append query for a current query flag"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/unsetregularusequeryfortable",children:"Model::unsetRegularUseQueryForTable"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Disable automatic append query of the table for a current query flag"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"/docs/fegg/library/model/methods/disabledregularusequery",children:"Model::disabledRegularUseQuery"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Disable automatic append query flag"}),"\n"]}),"\n"]}),"\n"]})]})}function j(e={}){let{wrapper:l}={...(0,d.a)(),...e.components};return l?(0,s.jsx)(l,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},65:function(e,l,r){r.d(l,{Z:function(){return o},a:function(){return i}});var n=r(7294);let s={},d=n.createContext(s);function i(e){let l=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(l):{...l,...e}},[l,e])}function o(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(d.Provider,{value:l},e.children)}}}]);