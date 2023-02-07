"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[5036],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(a),u=n,g=d["".concat(s,".").concat(u)]||d[u]||c[u]||l;return a?r.createElement(g,i(i({ref:t},p),{},{components:a})):r.createElement(g,i({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1540:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const l={},i="Directory structure",o={unversionedId:"html/basic/directory",id:"html/basic/directory",title:"Directory structure",description:"Image/JS file's place should be adjust by URL",source:"@site/docs/02-html/02-basic/01-directory.mdx",sourceDirName:"02-html/02-basic",slug:"/html/basic/directory",permalink:"/coding-style-guide/docs/html/basic/directory",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/02-html/02-basic/01-directory.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"html",previous:{title:"HTML Coding Guide",permalink:"/coding-style-guide/docs/html"},next:{title:"Naming rules",permalink:"/coding-style-guide/docs/html/image/naming"}},s={},m=[{value:"Sample",id:"sample",level:2}],p={toc:m};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"directory-structure"},"Directory structure"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"- htdocs/  # Document root\n  \u2514 data/\n      \u251c scss/  # SCSS directories\n      \u2502  \u251c foundation/\n      \u2502  \u251c layout/\n      \u2502  \u251c object/\n      \u2502     \u251c component/\n      \u2502     \u251c project/\n      \u2502     \u2514 utility/\n      \u251c css/  # Compiled css (Won't include into Repository)\n      \u2514 img/  # Image directories\n          \u251c common/  # Common images\n          \u2514 views/   # Each page's images\n              \u2514 index/  # Top page's images\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Image/JS file's place should be adjust by URL")),(0,n.kt)("h2",{id:"sample"},"Sample"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://example.com/"},"http://example.com/"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Image")," : htdocs/data/img/views/index/"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SCSS")," : htdocs/data/scss/object/project/_index.scss"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"JS")," : htdocs/data/js/views/index.js"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://example.com/sample/"},"http://example.com/sample/"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Common for ",(0,n.kt)("inlineCode",{parentName:"li"},"sample"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Image")," : htdocs/data/img/views/sample/common/"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"JS")," : htdocs/data/js/views/sample/common.js"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Image")," : htdocs/data/img/views/sample/index/"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SCSS")," : htdocs/data/scss/object/project/_sample.scss"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"JS")," : htdocs/data/js/views/sample/index.js"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://example.com/sample/test.html"},"http://example.com/sample/test.html"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Common for ",(0,n.kt)("inlineCode",{parentName:"li"},"sample"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Image")," : htdocs/data/img/views/sample/common/"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"JS")," : htdocs/data/js/views/sample/common.js"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Image")," : htdocs/data/img/views/sample/test/"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SCSS")," : htdocs/data/scss/object/project/_sample-test.scss"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"JS")," : htdocs/data/js/views/sample/test.js"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://example.com/sample/test/"},"http://example.com/sample/test/"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Common for ",(0,n.kt)("inlineCode",{parentName:"li"},"sample"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Image")," : htdocs/data/img/views/sample/common/"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"JS")," : htdocs/data/js/views/sample/common.js"))),(0,n.kt)("li",{parentName:"ul"},"Common for ",(0,n.kt)("inlineCode",{parentName:"li"},"sample/test"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Image")," : htdocs/data/img/views/sample/test/common/"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"JS")," : htdocs/data/js/views/sample/test/common.js"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Image")," : htdocs/data/img/views/sample/test/index/"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SCSS")," : htdocs/data/scss/object/project/_sample-test.scss"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"JS")," : htdocs/data/js/views/sample/test/index.js")))))}c.isMDXComponent=!0}}]);