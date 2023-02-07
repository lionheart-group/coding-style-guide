"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[6754],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>c});var r=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),m=function(e){var a=r.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},u=function(e){var a=m(e.components);return r.createElement(d.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=m(t),c=i,g=p["".concat(d,".").concat(c)]||p[c]||s[c]||l;return t?r.createElement(g,n(n({ref:a},u),{},{components:t})):r.createElement(g,n({ref:a},u))}));function c(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=t.length,n=new Array(l);n[0]=p;var o={};for(var d in a)hasOwnProperty.call(a,d)&&(o[d]=a[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,n[1]=o;for(var m=2;m<l;m++)n[m]=t[m];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7301:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>n,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=t(7462),i=(t(7294),t(3905));const l={title:"Introduction",slug:"/fegg/library/validation"},n=void 0,o={unversionedId:"fegg/library/validation/intro",id:"fegg/library/validation/intro",title:"Introduction",description:"Providing some functions for validation",source:"@site/docs/05-fegg/04-library/01-validation/01-intro.mdx",sourceDirName:"05-fegg/04-library/01-validation",slug:"/fegg/library/validation",permalink:"/coding-style-guide/docs/fegg/library/validation",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/05-fegg/04-library/01-validation/01-intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",slug:"/fegg/library/validation"},sidebar:"fegg",previous:{title:"About Extension libraries",permalink:"/coding-style-guide/docs/fegg/library"},next:{title:"Configuration",permalink:"/coding-style-guide/docs/fegg/library/validation/configuration"}},d={},m=[{value:"How to use",id:"how-to-use",level:2},{value:"Methods",id:"methods",level:2}],u={toc:m};function s(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Providing some functions for validation")),(0,i.kt)("h2",{id:"how-to-use"},"How to use"),(0,i.kt)("p",null,"You can load ",(0,i.kt)("inlineCode",{parentName:"p"},"Validation")," class through ",(0,i.kt)("inlineCode",{parentName:"p"},"Application::getClass")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Controller"',title:'"Controller"'},"$validation = $this->getClass('Validation');\n\n// Check Required\n$name = 'Field Label';\n$id   = 'field_name';\n$validation->required($id, $this->in($id), array('@required', $name));\n\n// Get Error\n$errorMessage = $validation->getErrorMessage();\n")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/library/validation/methods/required"},"Validation::required"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Check required"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/library/validation/methods/alphameric"},"Validation::alphameric"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Check alphanumeric or not"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/library/validation/methods/numeric"},"Validation::numeric"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Check numeric or not"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/library/validation/methods/date"},"Validation::date"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Check valid date string"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/library/validation/methods/email"},"Validation::email"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Check valid E-mail string"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/library/validation/methods/tel"},"Validation::tel"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Check valid tel character (+ - 0-9)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/library/validation/methods/time"},"Validation::time"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Check valid time character (: 0-9)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/library/validation/methods/url"},"Validation::url"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Check valid url character"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/library/validation/methods/zipcode"},"Validation::zipcode"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Check valid zip code character (for JP only)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/library/validation/methods/userid"},"Validation::userId"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Check allowed character for UserID (- _ . 0-9)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/library/validation/methods/password"},"Validation::password"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Check allowed character to Password"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/library/validation/methods/maxbyte"},"Validation::maxbyte"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Check character byte"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/library/validation/methods/length"},"Validation::length"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Check character length"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/library/validation/methods/maxlength"},"Validation::maxlength"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Check character less than maximum length"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/library/validation/methods/minlength"},"Validation::minlength"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Check character more than minimum length"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/library/validation/methods/hankaku"},"Validation::hankaku"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Check half-width character for Multi byte string language"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/library/validation/methods/katakana"},"Validation::katakana"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Check Katakana chracter for Japanese language"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/library/validation/methods/seterror"},"Validation::setError"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set Error status"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/library/validation/methods/seterrormessage"},"Validation::setErrorMessage"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set Error message"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/library/validation/methods/iserror"},"Validation::isError"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Confirm Error status"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/fegg/library/validation/methods/geterrormessage"},"Validation::getErrorMessage"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Get Error message")))))}s.isMDXComponent=!0}}]);