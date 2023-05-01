"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[503],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return t?o.createElement(h,l(l({ref:n},s),{},{components:t})):o.createElement(h,l({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1733:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(7462),a=(t(7294),t(3905));const r={sidebar_position:2},l="Controller",i={unversionedId:"fegg/basic/controller",id:"fegg/basic/controller",title:"Controller",description:"About Controller",source:"@site/docs/fegg/basic/controller.mdx",sourceDirName:"fegg/basic",slug:"/fegg/basic/controller",permalink:"/coding-style-guide/ja/docs/fegg/basic/controller",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/basic/controller.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"fegg",previous:{title:"URL",permalink:"/coding-style-guide/ja/docs/fegg/basic/url"},next:{title:"About Template",permalink:"/coding-style-guide/ja/docs/fegg/basic/templates/"}},p={},c=[{value:"About Controller",id:"about-controller",level:2},{value:"What is a Controller?",id:"what-is-a-controller",level:3},{value:"Class",id:"class",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Initialize",id:"initialize",level:3},{value:"Method",id:"method",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Template of Controller class",id:"template-of-controller-class",level:2}],s={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"controller"},"Controller"),(0,a.kt)("h2",{id:"about-controller"},"About Controller"),(0,a.kt)("h3",{id:"what-is-a-controller"},"What is a Controller?"),(0,a.kt)("p",null,"Controllers are the basis of the application, as it determines how requests are being handled in HTTP. A Controller is a class file that is named associated with a URI."),(0,a.kt)("p",null,"URL and Controller are closely related. (see ",(0,a.kt)("a",{parentName:"p",href:"/docs/fegg/basic/url"},"URL"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http://exaple.com/foo/bar\n")),(0,a.kt)("p",null,"In the example above, the framework will try to find a ",(0,a.kt)("inlineCode",{parentName:"p"},"bar")," function in the controller named ",(0,a.kt)("strong",{parentName:"p"},"Foo.php")," and load it."),(0,a.kt)("p",null,"If the URL accessed from the given example, it would load in ",(0,a.kt)("strong",{parentName:"p"},"code/application/Foo.php")," given that this file exists."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="code/application/Foo.php"',title:'"code/application/Foo.php"'},"<?php\n\nclass Foo extends Application\n{\n    function bar(){\n        //process here...\n    }\n}\n")),(0,a.kt)("h3",{id:"class"},"Class"),(0,a.kt)("p",null,"You should have the same name class and file name, and extends ",(0,a.kt)("inlineCode",{parentName:"p"},"Application")," class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="code/application/Controller.php"',title:'"code/application/Controller.php"'},"<?php\n\nclass Controller extends Application\n{\n\n}\n")),(0,a.kt)("h3",{id:"constructor"},"Constructor"),(0,a.kt)("p",null,"You sould call parent(",(0,a.kt)("inlineCode",{parentName:"p"},"Application"),") class constructor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="code/application/Controller.php"',title:'"code/application/Controller.php"'},"<?php\n\nclass Controller extends Application\n{\n    /**\n     * Constructor\n     */\n    function __construct()\n    {\n        parent::__construct();\n    }\n}\n")),(0,a.kt)("h3",{id:"initialize"},"Initialize"),(0,a.kt)("p",null,"Fegg have a Initialize method apart from constructor."),(0,a.kt)("p",null,"It is ",(0,a.kt)("inlineCode",{parentName:"p"},"__init()")," method that called after the constructor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="code/application/Controller.php"',title:'"code/application/Controller.php"'},"<?php\n\nclass Controller extends Application\n{\n    /**\n     * Initialize\n     */\n    function __init()\n    {\n        // inityalize process\n    }\n}\n")),(0,a.kt)("p",null,"The difference between ","_","_","init and constructor is that ","_","_","init is run after make self instance, so ",(0,a.kt)("strong",{parentName:"p"},"it can use Application method by")," ",(0,a.kt)("inlineCode",{parentName:"p"},"$this"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can omit a initialize.")),(0,a.kt)("h3",{id:"method"},"Method"),(0,a.kt)("p",null,"Run a second segment name method in URL."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="code/application/Controller.php"',title:'"code/application/Controller.php"'},"<?php\n\nclass Controller extends Application\n{\n    // Run this function by http://example.com/controller/foo\n    function foo()\n    {\n        // any process\n    }\n}\n")),(0,a.kt)("p",null,"If second segment is empty and you don\u2019t edit basic settings, run the ",(0,a.kt)("inlineCode",{parentName:"p"},"index()")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="code/application/Controller.php"',title:'"code/application/Controller.php"'},"<?php\n\nclass Controller extends Application\n{\n    // Run this function by http://example.com/controller/index\n    //   or http://example.com/controller/\n    function index()\n    {\n        // any process\n    }\n}\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/fegg/first/config"},"Initial settings")," about initial method name.")),(0,a.kt)("p",null,"If you want to make a secret method, you should add ",(0,a.kt)("strong",{parentName:"p"},"underbar(","_",")")," head of method name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="code/application/Controller.php"',title:'"code/application/Controller.php"'},"// http://example.com/controller/_secret\n//   -> This URL don't call _secret() method\n\n<?php\n\nclass Controller extends Application\n{\n    // This method is secret from URL dispatcher\n    function _secret()\n    {\n        // any process\n    }\n}\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("p",null,"Third segment later are passed to a method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="code/application/Controller.php"',title:'"code/application/Controller.php"'},'<?php\n\nclass Controller extends Application\n{\n    // $param will be assigned "bar"\n    //   by http://example.com/controller/foo/bar\n    function foo( $param )\n    {\n        echo $param; // bar\n    }\n}\n')),(0,a.kt)("p",null,"Third segment later are all passed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="code/application/Controller.php"',title:'"code/application/Controller.php"'},'<?php\n\nclass Controller extends Application\n{\n    // $param1 will be "bar" and $param2 will be "baz"\n    //   by http://example.com/controller/foo/bar/baz\n    function foo( $param1, $param2 )\n    {\n        echo $param1; // bar\n        echo $param2; // baz\n    }\n}\n')),(0,a.kt)("h2",{id:"template-of-controller-class"},"Template of Controller class"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="code/application/Index.php"',title:'"code/application/Index.php"'},"<?php\n/**\n * Index Class\n * // This file name should be Index.php\n */\nclass Index extends Application\n{\n    /**\n     * Constructor\n     */\n    function __construct() {\n        parent::__construct();\n    }\n\n    /**\n     * Initialize progress\n     * This method run after making self instance.\n     * So, it can use Application class method, for example \"$this->in()\".\n     * It is the difference between __init and construct.\n     * If this method is nothing, initializing progress is omitted.\n     */\n    function __init()\n    {\n    }\n\n    /**\n     * Common progress\n     * If you add the underbar(_) head of method name, it be internal method.\n     * So, it can't called by URL dispatcher.\n     */\n    function _common()\n    {\n    }\n\n    /**\n     * Default page display method\n     * If you input only class name URL, run this method.\n     * It is not necessary, but recommend be that default page display method name is index.\n     */\n    function index()\n    {\n        // Common progress\n        $this->_common();\n\n        // Display compiled template\n        $this->displayPage('index');\n    }\n}\n/* End Of File: Index.php */\n")))}d.isMDXComponent=!0}}]);