"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[1250],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var l=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,i=function(e,t){if(null==e)return{};var a,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=l.createContext({}),s=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},m=function(e){var t=s(e.components);return l.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(a),d=i,f=u["".concat(o,".").concat(d)]||u[d]||c[d]||r;return a?l.createElement(f,n(n({ref:t},m),{},{components:a})):l.createElement(f,n({ref:t},m))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,n=new Array(r);n[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,n[1]=p;for(var s=2;s<r;s++)n[s]=a[s];return l.createElement.apply(null,n)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9903:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var l=a(7462),i=(a(7294),a(3905));const r={title:"About Template",slug:"/fegg/basic/templates"},n=void 0,p={unversionedId:"fegg/basic/templates/index",id:"fegg/basic/templates/index",title:"About Template",description:"About Template",source:"@site/docs/05-fegg/03-basic/03-templates/01-index.mdx",sourceDirName:"05-fegg/03-basic/03-templates",slug:"/fegg/basic/templates",permalink:"/coding-style-guide/ja/docs/fegg/basic/templates",draft:!1,editUrl:"https://gitlab.com/lionheart-group/coding-style-guide/-/edit/master/docs/05-fegg/03-basic/03-templates/01-index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"About Template",slug:"/fegg/basic/templates"},sidebar:"fegg",previous:{title:"Controller",permalink:"/coding-style-guide/ja/docs/fegg/basic/controller"},next:{title:"Application::displayTemplate",permalink:"/coding-style-guide/ja/docs/fegg/basic/templates/methods/displaytemplate"}},o={},s=[{value:"About Template",id:"about-template",level:2},{value:"Display methods",id:"display-methods",level:2},{value:"Template helper methods",id:"template-helper-methods",level:2},{value:"Template rules",id:"template-rules",level:2},{value:"Modifiers",id:"modifiers",level:2},{value:"How to use modifiers",id:"how-to-use-modifiers",level:3},{value:"noescape",id:"noescape",level:3},{value:"br",id:"br",level:3}],m={toc:s};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,l.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"about-template"},"About Template"),(0,i.kt)("p",null,"Fegg is equipped with its own template engine where you can separate application code (PHP Code) and display (HTML/CSS). Fegg uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"{{}}")," tag for your application code in the template file. It runs a method that compile templates from Controller class."),(0,i.kt)("p",null,"Template files are save under the ",(0,i.kt)("strong",{parentName:"p"},"code/template/")," directory with name format of ",(0,i.kt)("inlineCode",{parentName:"p"},"template_name.tpl"),"."),(0,i.kt)("h2",{id:"display-methods"},"Display methods"),(0,i.kt)("p",null,"Display methods call the template file from Controller class."),(0,i.kt)("p",null,"Below are the display methods in Fegg but it is recommended to use only the ",(0,i.kt)("inlineCode",{parentName:"p"},"displayPage")," method to avoid Clickjacking attacks."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/basic/templates/methods/displaytemplate"},"Application::displayTemplate"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Display compiled template"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/basic/templates/methods/fetchtemplate"},"Application::fetchTemplate"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Return compiled template into a string"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/basic/templates/methods/fetchpage"},"Application::fetchPage"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Return compiled template with declared controller and template variables into a string"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/basic/templates/methods/displaypage"},"Application::displayPage"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Display compiled template with declared controller and template variables and taking precautionary measures on Clickjacking attacks")))),(0,i.kt)("h2",{id:"template-helper-methods"},"Template helper methods"),(0,i.kt)("p",null,"Template helper methods are used for passing special variable to the template."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/basic/templates/helpers/setsiteinfo"},"Application::setSiteinfo"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set website information (ex. title, description, keywords)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/basic/templates/helpers/sethidden"},"Application::setHidden"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set hidden data"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/basic/templates/helpers/sethtmlHeader"},"Application::setHtmlHeader"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set HTML Header")))),(0,i.kt)("h2",{id:"template-rules"},"Template rules"),(0,i.kt)("p",null,"There are several operating notation for template file."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/basic/templates/rules/variable"},"Variable"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The use of variables in the template"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/basic/templates/rules/if"},"If"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"if, else, else if"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/basic/templates/rules/loop"},"Loop"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"loop, foreach"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/basic/templates/rules/include"},"Include"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"include, include head, head, include foot, foot"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/basic/templates/rules/transclude"},"Transclude"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"transclude, section"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/basic/templates/rules/checked_selected"},"Checked/Selected"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"checked, selected"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/basic/templates/rules/options"},"Options"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Make option tags"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/basic/templates/rules/hidden"},"Hidden"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Display hidden tag"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/basic/templates/rules/code"},"Code"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"call, code")))),(0,i.kt)("h2",{id:"modifiers"},"Modifiers"),(0,i.kt)("h3",{id:"how-to-use-modifiers"},"How to use modifiers"),(0,i.kt)("p",null,"You can modify the returned values of your variable in your application code in template using modifiers."),(0,i.kt)("p",null,"Modifiers are separated from the variable using pipe symbol ( | ) and may have an optional argument separated by colon symbol ( : ). Multiple modifiers can be chained, it modifies the variable from left to right. Thus, the output of the first filtering is applied to the next filtering."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{{ $var|noescape|function:param }}\n")),(0,i.kt)("h3",{id:"noescape"},"noescape"),(0,i.kt)("p",null,"Fegg is automatically escaping character values. If you don\u2019t want a escaping value, you can use the noescape modifier."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Controller"',title:'"Controller"'},"$this->page['foo'] = '<p>bar</p>';\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Template"',title:'"Template"'},"{{ $page.foo }} -> <p>bar</p>\n{{ $page.foo|noescape }} -> bar\n")),(0,i.kt)("h3",{id:"br"},"br"),(0,i.kt)("p",null,"Insert HTML line breaks for all newline (","\\","n) found in a string."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Controller"',title:'"Controller"'},"$this->page['foo'] = \"This is a test text.\\n This is a new line text.\";\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Template"',title:'"Template"'},"{{ $page.foo }} -> This is a test text. This is a new line text.\n{{ $page.foo|br }} -> This is a test text.\n                      This is a new line text.\n")))}c.isMDXComponent=!0}}]);