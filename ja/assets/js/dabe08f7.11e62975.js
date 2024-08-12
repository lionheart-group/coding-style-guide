"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[503],{5059:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var o=t(5893),i=t(1151);const l={sidebar_position:2},s="Controller",r={id:"fegg/basic/controller",title:"Controller",description:"About Controller",source:"@site/docs/fegg/basic/controller.mdx",sourceDirName:"fegg/basic",slug:"/fegg/basic/controller",permalink:"/coding-style-guide/ja/docs/fegg/basic/controller",draft:!1,unlisted:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/basic/controller.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"fegg",previous:{title:"URL",permalink:"/coding-style-guide/ja/docs/fegg/basic/url"},next:{title:"About Template",permalink:"/coding-style-guide/ja/docs/fegg/basic/templates/"}},a={},c=[{value:"About Controller",id:"about-controller",level:2},{value:"What is a Controller?",id:"what-is-a-controller",level:3},{value:"Class",id:"class",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Initialize",id:"initialize",level:3},{value:"Method",id:"method",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Template of Controller class",id:"template-of-controller-class",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"controller",children:"Controller"})}),"\n",(0,o.jsx)(e.h2,{id:"about-controller",children:"About Controller"}),"\n",(0,o.jsx)(e.h3,{id:"what-is-a-controller",children:"What is a Controller?"}),"\n",(0,o.jsx)(e.p,{children:"Controllers are the basis of the application, as it determines how requests are being handled in HTTP. A Controller is a class file that is named associated with a URI."}),"\n",(0,o.jsxs)(e.p,{children:["URL and Controller are closely related. (see ",(0,o.jsx)(e.a,{href:"/docs/fegg/basic/url",children:"URL"}),")"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"http://exaple.com/foo/bar\n"})}),"\n",(0,o.jsxs)(e.p,{children:["In the example above, the framework will try to find a ",(0,o.jsx)(e.code,{children:"bar"})," function in the controller named ",(0,o.jsx)(e.strong,{children:"Foo.php"})," and load it."]}),"\n",(0,o.jsxs)(e.p,{children:["If the URL accessed from the given example, it would load in ",(0,o.jsx)(e.strong,{children:"code/application/Foo.php"})," given that this file exists."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-php",metastring:'title="code/application/Foo.php"',children:"<?php\n\nclass Foo extends Application\n{\n    function bar(){\n        //process here...\n    }\n}\n"})}),"\n",(0,o.jsx)(e.h3,{id:"class",children:"Class"}),"\n",(0,o.jsxs)(e.p,{children:["You should have the same name class and file name, and extends ",(0,o.jsx)(e.code,{children:"Application"})," class."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-php",metastring:'title="code/application/Controller.php"',children:"<?php\n\nclass Controller extends Application\n{\n\n}\n"})}),"\n",(0,o.jsx)(e.h3,{id:"constructor",children:"Constructor"}),"\n",(0,o.jsxs)(e.p,{children:["You sould call parent(",(0,o.jsx)(e.code,{children:"Application"}),") class constructor."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-php",metastring:'title="code/application/Controller.php"',children:"<?php\n\nclass Controller extends Application\n{\n    /**\n     * Constructor\n     */\n    function __construct()\n    {\n        parent::__construct();\n    }\n}\n"})}),"\n",(0,o.jsx)(e.h3,{id:"initialize",children:"Initialize"}),"\n",(0,o.jsx)(e.p,{children:"Fegg have a Initialize method apart from constructor."}),"\n",(0,o.jsxs)(e.p,{children:["It is ",(0,o.jsx)(e.code,{children:"__init()"})," method that called after the constructor."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-php",metastring:'title="code/application/Controller.php"',children:"<?php\n\nclass Controller extends Application\n{\n    /**\n     * Initialize\n     */\n    function __init()\n    {\n        // inityalize process\n    }\n}\n"})}),"\n",(0,o.jsxs)(e.p,{children:["The difference between __init and constructor is that __init is run after make self instance, so ",(0,o.jsx)(e.strong,{children:"it can use Application method by"})," ",(0,o.jsx)(e.code,{children:"$this"}),"."]}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsx)(e.p,{children:"You can omit a initialize."})}),"\n",(0,o.jsx)(e.h3,{id:"method",children:"Method"}),"\n",(0,o.jsx)(e.p,{children:"Run a second segment name method in URL."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-php",metastring:'title="code/application/Controller.php"',children:"<?php\n\nclass Controller extends Application\n{\n    // Run this function by http://example.com/controller/foo\n    function foo()\n    {\n        // any process\n    }\n}\n"})}),"\n",(0,o.jsxs)(e.p,{children:["If second segment is empty and you don\u2019t edit basic settings, run the ",(0,o.jsx)(e.code,{children:"index()"})," method."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-php",metastring:'title="code/application/Controller.php"',children:"<?php\n\nclass Controller extends Application\n{\n    // Run this function by http://example.com/controller/index\n    //   or http://example.com/controller/\n    function index()\n    {\n        // any process\n    }\n}\n"})}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsxs)(e.p,{children:["See ",(0,o.jsx)(e.a,{href:"/docs/fegg/first/config",children:"Initial settings"})," about initial method name."]})}),"\n",(0,o.jsxs)(e.p,{children:["If you want to make a secret method, you should add ",(0,o.jsx)(e.strong,{children:"underbar(_)"})," head of method name."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-php",metastring:'title="code/application/Controller.php"',children:"// http://example.com/controller/_secret\n//   -> This URL don't call _secret() method\n\n<?php\n\nclass Controller extends Application\n{\n    // This method is secret from URL dispatcher\n    function _secret()\n    {\n        // any process\n    }\n}\n"})}),"\n",(0,o.jsx)(e.h3,{id:"arguments",children:"Arguments"}),"\n",(0,o.jsx)(e.p,{children:"Third segment later are passed to a method."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-php",metastring:'title="code/application/Controller.php"',children:'<?php\n\nclass Controller extends Application\n{\n    // $param will be assigned "bar"\n    //   by http://example.com/controller/foo/bar\n    function foo( $param )\n    {\n        echo $param; // bar\n    }\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"Third segment later are all passed."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-php",metastring:'title="code/application/Controller.php"',children:'<?php\n\nclass Controller extends Application\n{\n    // $param1 will be "bar" and $param2 will be "baz"\n    //   by http://example.com/controller/foo/bar/baz\n    function foo( $param1, $param2 )\n    {\n        echo $param1; // bar\n        echo $param2; // baz\n    }\n}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"template-of-controller-class",children:"Template of Controller class"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-php",metastring:'title="code/application/Index.php"',children:"<?php\n/**\n * Index Class\n * // This file name should be Index.php\n */\nclass Index extends Application\n{\n    /**\n     * Constructor\n     */\n    function __construct() {\n        parent::__construct();\n    }\n\n    /**\n     * Initialize progress\n     * This method run after making self instance.\n     * So, it can use Application class method, for example \"$this->in()\".\n     * It is the difference between __init and construct.\n     * If this method is nothing, initializing progress is omitted.\n     */\n    function __init()\n    {\n    }\n\n    /**\n     * Common progress\n     * If you add the underbar(_) head of method name, it be internal method.\n     * So, it can't called by URL dispatcher.\n     */\n    function _common()\n    {\n    }\n\n    /**\n     * Default page display method\n     * If you input only class name URL, run this method.\n     * It is not necessary, but recommend be that default page display method name is index.\n     */\n    function index()\n    {\n        // Common progress\n        $this->_common();\n\n        // Display compiled template\n        $this->displayPage('index');\n    }\n}\n/* End Of File: Index.php */\n"})})]})}function p(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>r,a:()=>s});var o=t(7294);const i={},l=o.createContext(i);function s(n){const e=o.useContext(l);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),o.createElement(l.Provider,{value:e},n.children)}}}]);