"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[6345],{7905:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=a(5893),r=a(1151);const s={sidebar_position:2},i="Configuration",o={id:"fegg/library/database/configuration",title:"Configuration",description:"Database connect setting",source:"@site/docs/fegg/library/database/configuration.mdx",sourceDirName:"fegg/library/database",slug:"/fegg/library/database/configuration",permalink:"/coding-style-guide/ja/docs/fegg/library/database/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/database/configuration.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"fegg",previous:{title:"Introduction",permalink:"/coding-style-guide/ja/docs/fegg/library/database/"},next:{title:"DB_pdo::select",permalink:"/coding-style-guide/ja/docs/fegg/library/database/methods/select"}},d={},c=[{value:"Database connect setting",id:"database-connect-setting",level:3},{value:"Automatic append query configuration",id:"automatic-append-query-configuration",level:3}];function l(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"configuration",children:"Configuration"})}),"\n",(0,t.jsx)(n.h3,{id:"database-connect-setting",children:"Database connect setting"}),"\n",(0,t.jsxs)(n.p,{children:["You can change connect configuration on ",(0,t.jsx)(n.strong,{children:"code/config/database_config.php"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",metastring:'title="database_config.php"',children:"<?php\n/**\n * \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u63a5\u7d9a\u5148\u8a2d\u5b9a\n * Database connect information\n * @see Database.php\n */\n// \u672c\u756a\u74b0\u5883\n// Production environment\nif (false) {\n\n    // Database(Master)\u8a2d\u5b9a\uff08\uff11\u53f0\u3092\u60f3\u5b9a\uff09\n    // Database for Master\n    $database_config['master'] = array(\n        'dsn' => 'sqlite:'.FEGG_CODE_DIR.'/data/db/db.db',\n        'username' => '',\n        'password' => ''\n    );\n\n    // Database(Slave)\u8a2d\u5b9a\uff08\u8907\u6570\u53f0\u3092\u60f3\u5b9a\uff09\n    // Database for Slave\n    $database_config['slave'][] = array(\n        'dsn' => 'sqlite:'.FEGG_CODE_DIR.'/data/db/db.db',\n        'username' => '',\n        'password' => ''\n    );\n\n// \u958b\u767a\u74b0\u5883\n// Development Environment\n} else {\n\n    // Database(Master)\u8a2d\u5b9a\uff08\uff11\u53f0\u3092\u60f3\u5b9a\uff09\n    // Database for Master\n    $database_config['master'] = array(\n        'dsn' => 'sqlite:'.FEGG_CODE_DIR.'/data/db/db.db',\n        'username' => '',\n        'password' => ''\n    );\n\n    // Database(Slave)\u8a2d\u5b9a\uff08\u8907\u6570\u53f0\u3092\u60f3\u5b9a\uff09\n    // Database for Slave\n    $database_config['slave'][] = array(\n        'dsn' => 'sqlite:'.FEGG_CODE_DIR.'/data/db/db.db',\n        'username' => '',\n        'password' => ''\n    );\n\n}\n/* End of file database_config.php */\n"})}),"\n",(0,t.jsx)(n.h3,{id:"automatic-append-query-configuration",children:"Automatic append query configuration"}),"\n",(0,t.jsxs)(n.p,{children:["You can arrange automatic append query configuration on ",(0,t.jsx)(n.strong,{children:"code/config/database_regular_use_query.php"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",metastring:'title="database_regular_use_query.php"',children:"<?php\n/**\n * \u81ea\u52d5\u7684\u4ed8\u52a0\u30af\u30a8\u30ea\u30fc\n * Automatic append query\n * @see Database.php\n *\n * DB\u30af\u30e9\u30b9\u306eselect, insert, update, delete\u30e1\u30bd\u30c3\u30c9\u5b9f\u884c\u6642\u306b\u81ea\u52d5\u7684\u4ed8\u52a0\u3059\u308b\u30af\u30a8\u30ea\u30fc\n * \uff08\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u62e1\u5f35\u3057\u3066\u3044\u304f\u4e88\u5b9a\uff09\n *\n * Automaticaly append query that \"select\", \"insert\", \"update\", \"delete\" method in DB Class.\n */\n$database_regular_use_query = array(\n    // \u30c6\u30fc\u30d6\u30eb\u306b\u95a2\u308f\u3089\u305a\u4ed8\u52a0\u3055\u308c\u308b\u30af\u30a8\u30ea\u30fc\n    // Appended query regardless of table\n    'regular_use' => array(\n        'select' => array(\n            'where' => 'CURRENT_TABLE.valid = 1',\n            'order' => '',\n        ),\n        'count' => array(\n            'where' => 'CURRENT_TABLE.valid = 1',\n            'order' => '',\n        ),\n        'insert' => array(\n            'item' => 'modified = now(), created = now(), valid = 1',\n        ),\n        'update' => array(\n            'item' => \"modified = now()\",\n            'where' => '',\n        ),\n    ),\n\n    /*\n    // \u30c6\u30fc\u30d6\u30eb\u306b\u5fdc\u3058\u3066\u4ed8\u52a0\u3055\u308c\u308b\u30af\u30a8\u30ea\u30fc\n    // Appended query depending on table\n    'table' => array(\n        'table_name' => array(\n            'select' => array(\n                'where' => 'show_flag = 0',\n                'order' => '',\n            ),\n            'insert' => array(\n                'item' => 'update_time = now(), create_datetime = now()',\n            ),\n            'update' => array(\n                'item' => 'update_time = now()',\n                'where' => '',\n            ),\n        ),\n    ),\n    */\n);\n/* End of file database_regular_use_query.php */\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>i});var t=a(7294);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);