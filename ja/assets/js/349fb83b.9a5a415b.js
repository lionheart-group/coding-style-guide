"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[1415],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>O,frontMatter:()=>f,metadata:()=>b,toc:()=>v});var r=n(7462),o=n(7294),a=n(3905);const i={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let s;const c=new Uint8Array(16);function l(){if(!s&&(s="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!s))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(c)}const d=[];for(let k=0;k<256;++k)d.push((k+256).toString(16).slice(1));function u(e,t=0){return(d[e[t+0]]+d[e[t+1]]+d[e[t+2]]+d[e[t+3]]+"-"+d[e[t+4]]+d[e[t+5]]+"-"+d[e[t+6]]+d[e[t+7]]+"-"+d[e[t+8]]+d[e[t+9]]+"-"+d[e[t+10]]+d[e[t+11]]+d[e[t+12]]+d[e[t+13]]+d[e[t+14]]+d[e[t+15]]).toLowerCase()}const p=function(e,t,n){if(i.randomUUID&&!t&&!e)return i.randomUUID();const r=(e=e||{}).random||(e.rng||l)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=r[e];return t}return u(r)},m={height:300,boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center",border:"2 solid",margin:"1em 0",padding:"1em"},h=e=>{let{hash:t,user:n,defaultTab:a="css,result",height:i=300,preview:s=!0,editable:c=!1,themeId:l=!1,style:d={},title:u=""}=e;const h=(0,o.useRef)(!1),f=(0,o.useRef)(p());(0,o.useEffect)((()=>{if(!h.current)return h.current=!0,(()=>{const e=document.createElement("script");e.src="https://cpwebassets.codepen.io/assets/embed/ei.js",e.async=!0,e.id=f.current,document.body.appendChild(e)})(),()=>{document.body.removeChild(document.getElementById(f.current)),h.current=!1}}),[]);const y=(0,o.useMemo)((()=>{const e={};return t&&(e["data-slug-hash"]=t),n&&(e["data-user"]=n),a&&(e["data-default-tab"]=a),i&&(e["data-height"]=i),s&&(e["data-preview"]=s),c&&(e["data-editable"]=c),l&&(e["data-theme-id"]=l),e}),[]);return o.createElement(o.Fragment,null,o.createElement("p",(0,r.Z)({className:"codepen"},y,{style:{...m,...d}}),o.createElement("span",null,"See the Pen ",o.createElement("a",{href:`https://codepen.io/${n}/pen/${t}`},u)," by ",n," (",o.createElement("a",{href:`https://codepen.io/${n}`},"@",n),") on ",o.createElement("a",{href:"https://codepen.io"},"CodePen"),".")))},f={sidebar_position:6},y="Accordion",b={unversionedId:"html/tips/accordion",id:"html/tips/accordion",title:"Accordion",description:"Now, all the modern browsers are supporting ` and ` tags. It's able to implement accordion functions and good for accessibility. Please check how to implement to accordion by using those tags.",source:"@site/docs/html/tips/accordion.mdx",sourceDirName:"html/tips",slug:"/html/tips/accordion",permalink:"/coding-style-guide/ja/docs/html/tips/accordion",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/html/tips/accordion.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"html",previous:{title:":has selector",permalink:"/coding-style-guide/ja/docs/html/tips/has"}},g={},v=[{value:"No styles",id:"no-styles",level:2},{value:"With styles",id:"with-styles",level:2},{value:"With animations",id:"with-animations",level:2}],w={toc:v};function O(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"accordion"},"Accordion"),(0,a.kt)("p",null,"Now, all the modern browsers are supporting ",(0,a.kt)("inlineCode",{parentName:"p"},"<details>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<summary>")," tags. It's able to implement accordion functions and good for accessibility. Please check how to implement to accordion by using those tags."),(0,a.kt)("h2",{id:"no-styles"},"No styles"),(0,a.kt)(h,{hash:"NWMNPqv",user:"sushat4692",defaultTab:"html,result",mdxType:"Codepen"}),(0,a.kt)("h2",{id:"with-styles"},"With styles"),(0,a.kt)(h,{hash:"ExLKaVr",user:"sushat4692",defaultTab:"css,result",mdxType:"Codepen"}),(0,a.kt)("h2",{id:"with-animations"},"With animations"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This example is using ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API"},"Web Animation API"),", but of course you can use jQuery animation instead.")),(0,a.kt)(h,{hash:"OJZNPzj",user:"sushat4692",defaultTab:"css,result",mdxType:"Codepen"}))}O.isMDXComponent=!0}}]);