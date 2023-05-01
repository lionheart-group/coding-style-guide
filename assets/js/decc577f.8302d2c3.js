"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([[4510],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return n?i.createElement(g,r(r({ref:t},d),{},{components:n})):i.createElement(g,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(7462),o=(n(7294),n(3905));const a={sidebar_position:9},r="Uploaded media",s={unversionedId:"wordpress/howto/uploaded-media",id:"wordpress/howto/uploaded-media",title:"Uploaded media",description:"WordPress has the function that is able to trim/resize images that you upload, but it's needed to update setting on theme files to use this function. so, when you need to display thumbnail images for archive pages or something sliders, please check the following instruction to avoid downloading big resouces for viewer.",source:"@site/docs/wordpress/howto/uploaded-media.mdx",sourceDirName:"wordpress/howto",slug:"/wordpress/howto/uploaded-media",permalink:"/coding-style-guide/docs/wordpress/howto/uploaded-media",draft:!1,editUrl:"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/wordpress/howto/uploaded-media.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"wordpress",previous:{title:"Custom Block",permalink:"/coding-style-guide/docs/wordpress/howto/custom-block"},next:{title:"All in One SEO",permalink:"/coding-style-guide/docs/wordpress/plugins/general/all-in-one-seo"}},l={},p=[{value:"Settings",id:"settings",level:2},{value:"In Template",id:"in-template",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"uploaded-media"},"Uploaded media"),(0,o.kt)("p",null,"WordPress has the function that is able to trim/resize images that you upload, but it's needed to update setting on theme files to use this function. so, when you need to display thumbnail images for archive pages or something sliders, please check the following instruction to avoid downloading big resouces for viewer."),(0,o.kt)("h2",{id:"settings"},"Settings"),(0,o.kt)("p",null,"For enable to trim/resize specific size, you need to add ",(0,o.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/reference/functions/add_image_size/"},"add_image_size")," function into the theme."),(0,o.kt)("p",null,"On our theme template, you can find the place that you should put ",(0,o.kt)("inlineCode",{parentName:"p"},"add_image_size")," function in ",(0,o.kt)("inlineCode",{parentName:"p"},"include/init.php"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nadd_action('init', function() {\n    // \u30bf\u30a4\u30c8\u30eb\u306e\u6709\u52b9\u5316\n    // Enable Title\n    add_theme_support('title-tag');\n\n    // \u30a2\u30a4\u30ad\u30e3\u30c3\u30c1\u753b\u50cf\u306e\u6709\u52b9\u5316\n    // Enable Post Thumbnail\n    add_theme_support('post-thumbnails');\n\n    // \u30a2\u30a4\u30ad\u30e3\u30c3\u30c1\u753b\u50cf\u306e\u30b5\u30a4\u30ba\u8ffd\u52a0\n    // Adding image size for post thumbnail\n    add_image_size('name', 100, 100, true);\n\n    // P\u30bf\u30b0\u3092\u81ea\u52d5\u633f\u5165\u3055\u305b\u306a\u3044\n    // Disable automatically adding <p> tags\n    remove_filter('the_excerpt', 'wpautop');\n    remove_filter('the_content', 'wpautop');\n});\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"add_image_size")," parameter is like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"add_image_size(\n    'foo_image_size', // Image size identifier.\n    100, // Image width\n    100, // Image height\n    true // Image cropping behavior.\n         // If false, the image will be scaled (default),\n         // If true, image will be cropped to the specified dimensions\n         // using center positions.\n);\n")),(0,o.kt)("h2",{id:"in-template"},"In Template"),(0,o.kt)("p",null,"You can display thumbnail image by the specified size by the following function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n    if (has_post_thumbnail()):\n        the_post_thumbnail('foo_image_size');\n    else:\n?>\n        <img src=\"<?php the_asset_url('data/path/to/noimage.jpg') ?>\">\n<?php\n    endif;\n?>\n")),(0,o.kt)("p",null,"and, if you need to add specified class to thumbnaiil image ",(0,o.kt)("inlineCode",{parentName:"p"},"<img>")," tag, you can put attribute parameter to second argument."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n    if (has_post_thumbnail()):\n        the_post_thumbnail('foo_image_size', ['class' => 'c-image']);\n    else:\n?>\n        <img src=\"<?php the_asset_url('data/path/to/noimage.jpg') ?>\" class=\"c-image\">\n<?php\n    endif;\n?>\n")))}u.isMDXComponent=!0}}]);