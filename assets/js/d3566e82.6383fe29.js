"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[1411],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(a),g=r,d=u["".concat(o,".").concat(g)]||u[g]||c[g]||l;return a?n.createElement(d,i(i({ref:t},m),{},{components:a})):n.createElement(d,i({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2697:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:3},i="Application::fetchPage",p={unversionedId:"fegg/basic/templates/methods/fetchpage",id:"fegg/basic/templates/methods/fetchpage",title:"Application::fetchPage",description:"Return compiled template with declared controller and template variables into a string",source:"@site/docs/fegg/basic/templates/methods/fetchpage.mdx",sourceDirName:"fegg/basic/templates/methods",slug:"/fegg/basic/templates/methods/fetchpage",permalink:"/coding-style-guide/docs/fegg/basic/templates/methods/fetchpage",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/basic/templates/methods/fetchpage.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"fegg",previous:{title:"Application::fetchTemplate",permalink:"/coding-style-guide/docs/fegg/basic/templates/methods/fetchtemplate"},next:{title:"Application::displayPage",permalink:"/coding-style-guide/docs/fegg/basic/templates/methods/displaypage"}},o={},s=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Appended arguments when compiling",id:"appended-arguments-when-compiling",level:2},{value:"Example",id:"example",level:2}],m={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"applicationfetchpage"},"Application::fetchPage"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Return compiled template with declared controller and template variables into a string")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"public string Application::fetchPage( string $template )\n")),(0,r.kt)("p",null,"Returns the ",(0,r.kt)("a",{parentName:"p",href:"/docs/fegg/basic/templates/methods/displaytemplate"},"Application::displayTemplate")," result into string after including the assigned variables in controller class that can be use in template file."),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$template"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Template file name")))),(0,r.kt)("h2",{id:"appended-arguments-when-compiling"},"Appended arguments when compiling"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Class name when running"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"config"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Basic configuration"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"languageCode"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Language code"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"site"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Site parameters, assigned from ",(0,r.kt)("a",{parentName:"li",href:"#"},"Template helper (Application::setSiteinfo)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"page"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Assigned from Controller class"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"in"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Requested parameters ($","_","POST / $","_","GET)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hiddenForTemplate"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Input hidden parameters, assigned from ",(0,r.kt)("a",{parentName:"li",href:"#"},"Template helper (Application::setHidden)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"session"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Session data"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"cookie"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Cookie data")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="code/application/Foo.php"',title:'"code/application/Foo.php"'},"// URI: http://example.com/foo/bar/?get=param\n\n<?php\n\nclass Foo extends Application\n{\n    function bar(){\n      $this->page['baz'] = 'qux';\n      $content = $this->fetchPage( 'foo/bar' );\n      echo $content;\n    }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="code/template/foo/bar.tpl"',title:'"code/template/foo/bar.tpl"'},"Baz params : {{ $page.baz }}\n$_GET[get] params : {{ $in.get }}\nController name : {{ $classsName }}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Output"',title:'"Output"'},"Baz params : qux\n$_GET[get] params : param\nController name : foo\n")),(0,r.kt)("p",null,"After assigning arguments for template, run the ",(0,r.kt)("a",{parentName:"p",href:"/docs/fegg/basic/templates/methods/fetchtemplate"},"Application::fetchTemplate")," method."))}c.isMDXComponent=!0}}]);