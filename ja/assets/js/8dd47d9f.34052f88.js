"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[1909],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2603:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},l="URL",i={unversionedId:"fegg/basic/url",id:"fegg/basic/url",title:"URL",description:"URL and Controller class",source:"@site/docs/fegg/basic/url.mdx",sourceDirName:"fegg/basic",slug:"/fegg/basic/url",permalink:"/coding-style-guide/ja/docs/fegg/basic/url",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/basic/url.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"fegg",previous:{title:"Initial settings",permalink:"/coding-style-guide/ja/docs/fegg/first/config"},next:{title:"Controller",permalink:"/coding-style-guide/ja/docs/fegg/basic/controller"}},p={},s=[{value:"URL and Controller class",id:"url-and-controller-class",level:2},{value:"Example",id:"example",level:2},{value:"Routing",id:"routing",level:2},{value:"Wildcards",id:"wildcards",level:3},{value:"Example",id:"example-1",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"url"},"URL"),(0,o.kt)("h2",{id:"url-and-controller-class"},"URL and Controller class"),(0,o.kt)("p",null,"Fegg FW also adopted the segment-based-approach. Here is how the URL and Controller class relationship work."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://example.com/class/function/param1/param2...\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Class of Controller"),(0,o.kt)("li",{parentName:"ol"},"Method of Controller class"),(0,o.kt)("li",{parentName:"ol"},"Arguments for Method")),(0,o.kt)("p",null,"You can have a more flexible URL by setting up your URL structure in ",(0,o.kt)("a",{parentName:"p",href:"#routing"},"Routing")," file."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="URL"',title:'"URL"'},"http://example.com/post/edit/1\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Running method"',title:'"Running','method"':!0},"<?php\n// code/application/Post.php\n\nclass Post extends Application\n{\n\n    // ...\n\n    public function edit( $id )\n    {\n        echo $id; // Result: 1\n    }\n\n    // ...\n\n}\n")),(0,o.kt)("h2",{id:"routing"},"Routing"),(0,o.kt)("p",null,"You can set your URL structure without URL and Controller class relation by configuring your route file."),(0,o.kt)("p",null,"You may set your ",(0,o.kt)("inlineCode",{parentName:"p"},"$route")," in array in ",(0,o.kt)("strong",{parentName:"p"},"code/config/route.php"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$route['from'] = 'to';\n")),(0,o.kt)("p",null,"As described above, the Key of array is a segment of URL, whereas the Value of array is the value after remapping."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Routes will run in order when they are defined. Higher routes will always take precedence over lower ones.")),(0,o.kt)("h3",{id:"wildcards"},"Wildcards"),(0,o.kt)("p",null,"There are 2 types of available wildcards (",(0,o.kt)("inlineCode",{parentName:"p"},":any"),", ",(0,o.kt)("inlineCode",{parentName:"p"},":num"),") you may use before mapping key."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},":any")," is ",(0,o.kt)("strong",{parentName:"p"},"any types of words"),". ",(0,o.kt)("inlineCode",{parentName:"p"},":num")," is ",(0,o.kt)("strong",{parentName:"p"},"limited only numbers"),"."),(0,o.kt)("h3",{id:"example-1"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="code/config/route.php"',title:'"code/config/route.php"'},"<?php\n\n$route['foo'] = 'bar';\n// http://example.com/foo -> code/application/Bar.php\n\n$route['item/:any'] = 'product/item_lookup/$1';\n// http://example.com/item/foobar -> code/application/Product.php -> Product::item_lookup( 'foobar' )\n\n$route['archive/edit/:num'] = 'post/edit/$1';\n// http://example.com/archive/edit/1 -> code/application/Post.php -> Post::edit( 1 )\n\n$route['news/post_:num.html'] = 'news/detail/$1';\n// http://example.com/news/post_1.html -> code/application/News.php -> News::detail( 1 )\n")))}u.isMDXComponent=!0}}]);