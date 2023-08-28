"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[8013],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3194:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>j,frontMatter:()=>h,metadata:()=>b,toc:()=>v});var n=r(7462),o=r(7294),a=r(3905);const i={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let s;const c=new Uint8Array(16);function l(){if(!s&&(s="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!s))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(c)}const d=[];for(let k=0;k<256;++k)d.push((k+256).toString(16).slice(1));function u(e,t=0){return(d[e[t+0]]+d[e[t+1]]+d[e[t+2]]+d[e[t+3]]+"-"+d[e[t+4]]+d[e[t+5]]+"-"+d[e[t+6]]+d[e[t+7]]+"-"+d[e[t+8]]+d[e[t+9]]+"-"+d[e[t+10]]+d[e[t+11]]+d[e[t+12]]+d[e[t+13]]+d[e[t+14]]+d[e[t+15]]).toLowerCase()}const p=function(e,t,r){if(i.randomUUID&&!t&&!e)return i.randomUUID();const n=(e=e||{}).random||(e.rng||l)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(let e=0;e<16;++e)t[r+e]=n[e];return t}return u(n)},m={height:300,boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center",border:"2 solid",margin:"1em 0",padding:"1em"},f=e=>{let{hash:t,user:r,defaultTab:a="css,result",height:i=300,preview:s=!0,editable:c=!1,themeId:l=!1,style:d={},title:u=""}=e;const f=(0,o.useRef)(!1),h=(0,o.useRef)(p());(0,o.useEffect)((()=>{if(!f.current)return f.current=!0,(()=>{const e=document.createElement("script");e.src="https://cpwebassets.codepen.io/assets/embed/ei.js",e.async=!0,e.id=h.current,document.body.appendChild(e)})(),()=>{document.body.removeChild(document.getElementById(h.current)),f.current=!1}}),[]);const y=(0,o.useMemo)((()=>{const e={};return t&&(e["data-slug-hash"]=t),r&&(e["data-user"]=r),a&&(e["data-default-tab"]=a),i&&(e["data-height"]=i),s&&(e["data-preview"]=s),c&&(e["data-editable"]=c),l&&(e["data-theme-id"]=l),e}),[]);return o.createElement(o.Fragment,null,o.createElement("p",(0,n.Z)({className:"codepen"},y,{style:{...m,...d}}),o.createElement("span",null,"See the Pen ",o.createElement("a",{href:`https://codepen.io/${r}/pen/${t}`},u)," by ",r," (",o.createElement("a",{href:`https://codepen.io/${r}`},"@",r),") on ",o.createElement("a",{href:"https://codepen.io"},"CodePen"),".")))},h={sidebar_position:6},y="\u30a2\u30b3\u30fc\u30c7\u30a3\u30aa\u30f3\u306e\u5b9f\u88c5",b={unversionedId:"html/tips/accordion",id:"html/tips/accordion",title:"\u30a2\u30b3\u30fc\u30c7\u30a3\u30aa\u30f3\u306e\u5b9f\u88c5",description:"2023\u5e745\u6708\u73fe\u5728\u3001\u5168\u3066\u306e\u30e2\u30c0\u30f3\u30d6\u30e9\u30a6\u30b6\u306f`\u3068`\u30bf\u30b0\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002\u3053\u308c\u3089\u306e\u30bf\u30b0\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u30a2\u30b3\u30fc\u30c7\u30a3\u30aa\u30f3\u6a5f\u80fd\u3092\u30a2\u30af\u30bb\u30b7\u30d3\u30ea\u30c6\u30a3\u3092\u4fdd\u3061\u306a\u304c\u3089\u5b9f\u73fe\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/html/tips/accordion.mdx",sourceDirName:"html/tips",slug:"/html/tips/accordion",permalink:"/coding-style-guide/ja/docs/html/tips/accordion",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/html/tips/accordion.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"html",previous:{title:":has\u7591\u4f3c\u30af\u30e9\u30b9\u306e\u4f7f\u3044\u65b9",permalink:"/coding-style-guide/ja/docs/html/tips/has"}},g={},v=[{value:"\u30b9\u30bf\u30a4\u30eb\u306a\u3057",id:"\u30b9\u30bf\u30a4\u30eb\u306a\u3057",level:2},{value:"\u30b9\u30bf\u30a4\u30eb\u9069\u7528",id:"\u30b9\u30bf\u30a4\u30eb\u9069\u7528",level:2},{value:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u4ed8\u304d",id:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u4ed8\u304d",level:2}],O={toc:v};function j(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},O,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u30a2\u30b3\u30fc\u30c7\u30a3\u30aa\u30f3\u306e\u5b9f\u88c5"},"\u30a2\u30b3\u30fc\u30c7\u30a3\u30aa\u30f3\u306e\u5b9f\u88c5"),(0,a.kt)("p",null,"2023\u5e745\u6708\u73fe\u5728\u3001",(0,a.kt)("a",{parentName:"p",href:"https://caniuse.com/details"},"\u5168\u3066\u306e\u30e2\u30c0\u30f3\u30d6\u30e9\u30a6\u30b6\u306f",(0,a.kt)("inlineCode",{parentName:"a"},"<details>"),"\u3068",(0,a.kt)("inlineCode",{parentName:"a"},"<summary>"),"\u30bf\u30b0\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002"),"\u3053\u308c\u3089\u306e\u30bf\u30b0\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u30a2\u30b3\u30fc\u30c7\u30a3\u30aa\u30f3\u6a5f\u80fd\u3092\u30a2\u30af\u30bb\u30b7\u30d3\u30ea\u30c6\u30a3\u3092\u4fdd\u3061\u306a\u304c\u3089\u5b9f\u73fe\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u30b9\u30bf\u30a4\u30eb\u306a\u3057"},"\u30b9\u30bf\u30a4\u30eb\u306a\u3057"),(0,a.kt)(f,{hash:"NWMNPqv",user:"sushat4692",defaultTab:"html,result",mdxType:"Codepen"}),(0,a.kt)("h2",{id:"\u30b9\u30bf\u30a4\u30eb\u9069\u7528"},"\u30b9\u30bf\u30a4\u30eb\u9069\u7528"),(0,a.kt)(f,{hash:"ExLKaVr",user:"sushat4692",defaultTab:"css,result",mdxType:"Codepen"}),(0,a.kt)("h2",{id:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u4ed8\u304d"},"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u4ed8\u304d"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u3053\u306e\u4f8b\u3067\u306f",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/ja-JP/docs/Web/API/Web_Animations_API"},"Web Animation API"),"\u3092\u5229\u7528\u3057\u3066\u3044\u307e\u3059\u304c\u3001jQuery\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u3063\u3066\u3082\u554f\u984c\u3042\u308a\u307e\u305b\u3093\u3002")),(0,a.kt)(f,{hash:"OJZNPzj",user:"sushat4692",defaultTab:"css,result",mdxType:"Codepen"}))}j.isMDXComponent=!0}}]);