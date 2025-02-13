"use strict";(self.webpackChunklionheart_coding_style_guide=self.webpackChunklionheart_coding_style_guide||[]).push([["6135"],{5133:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>t,assets:()=>g,toc:()=>l,contentTitle:()=>a});var t=JSON.parse('{"id":"fegg/library/validation/configuration","title":"Configuration","description":"You can change error message on code/config/validation_error_message.php.","source":"@site/docs/fegg/library/validation/configuration.mdx","sourceDirName":"fegg/library/validation","slug":"/fegg/library/validation/configuration","permalink":"/coding-style-guide/ja/docs/fegg/library/validation/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/lionheart-group/coding-style-guide/edit/master/docs/fegg/library/validation/configuration.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"fegg","previous":{"title":"Introduction","permalink":"/coding-style-guide/ja/docs/fegg/library/validation/"},"next":{"title":"Validation::required","permalink":"/coding-style-guide/ja/docs/fegg/library/validation/methods/required"}}'),o=r("5893"),i=r("65");let s={sidebar_position:2},a="Configuration",g={},l=[];function d(e){let n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"configuration",children:"Configuration"})}),"\n",(0,o.jsxs)(n.p,{children:["You can change error message on ",(0,o.jsx)(n.strong,{children:"code/config/validation_error_message.php"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",metastring:'title="validation_error_message.php"',children:"<?php\n/**\n * \u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8\u5B9A\u7FA9\n * Definition of Error message to Validation Class.\n *\n * @see Validation.php\n */\n// @item should be Alphanumeric.\n$validation_error_message['@alphameric'] = '<strong>%s</strong> \u306F\u534A\u89D2\u82F1\u6570\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044';\n// @item is not Date format.\n$validation_error_message['@date'] = '<strong>%s</strong> \u306E\u65E5\u4ED8\u3067\u306F\u767B\u9332\u3067\u304D\u307E\u305B\u3093';\n// @item is not Email format.\n$validation_error_message['@email'] = '<strong>%s</strong> \u306F\u767B\u9332\u3067\u304D\u306A\u3044\u5F62\u5F0F\u3067\u3059';\n// @item should be half size character.\n$validation_error_message['@hankaku'] = '<strong>%s</strong> \u306F\u534A\u89D2\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044';\n// @item should be KATAKANA.\n$validation_error_message['@katakana'] = '<strong>%s</strong> \u306F\u30AB\u30BF\u30AB\u30CA\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044';\n// @item should be length less than @maxlength.\n$validation_error_message['@maxlength'] = '<strong>%s</strong> \u306F <strong>%s</strong> \u6587\u5B57\u4EE5\u5185\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044';\n// @item should be length greater than @maxlength.\n$validation_error_message['@minlength'] = '<strong>%s</strong> \u306F <strong>%s</strong> \u6587\u5B57\u4EE5\u4E0A\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044';\n// @item should be Numeric.\n$validation_error_message['@numeric'] = '<strong>%s</strong> \u306F \u534A\u89D2\u6570\u5B57\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044';\n// @item should be Numeric to Integers or Decimals.\n$validation_error_message['@numeric_decimalpoint'] = '<strong>%s</strong> \u306F \u534A\u89D2\u306E\u6574\u6570\u3082\u3057\u304F\u306F\u5C0F\u6570\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044';\n// @item should be half size character to Numeric and Minus sign.\n$validation_error_message['@numeric_minus'] = '<strong>%s</strong> \u306F \u6570\u5B57\u3001\u30DE\u30A4\u30CA\u30B9\u7B26\u53F7\u3068\u3082\u534A\u89D2\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044';\n// @item is unable character type.\n$validation_error_message['@password'] = '<strong>%s</strong> \u306F\u767B\u9332\u3067\u304D\u306A\u3044\u5F62\u5F0F\u3067\u3059';\n// @item should be mixing of alphanumeric.\n$validation_error_message['@password_mixed_letters'] = '<strong>%s</strong> \u306F\u534A\u89D2\u82F1\u6570\u306E\u6DF7\u5408\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044';\n// @item is required.\n$validation_error_message['@required'] = '<strong>%s</strong> \u3092\u3054\u5165\u529B\u304F\u3060\u3055\u3044';\n// @item is not Tel format.\n$validation_error_message['@tel'] = '<stron>%s</strong> \u306F\u767B\u9332\u3067\u304D\u306A\u3044\u5F62\u5F0F\u3067\u3059';\n// @item is not Time format.\n$validation_error_message['@time'] = '<stron>%s</strong> \u306E\u6642\u9593\u3067\u306F\u767B\u9332\u3067\u304D\u307E\u305B\u3093';\n// @item is not URL format.\n$validation_error_message['@url'] = '<stron>%s</strong> \u306F\u767B\u9332\u3067\u304D\u306A\u3044\u5F62\u5F0F\u3067\u3059';\n// @item is not Time format.\n$validation_error_message['@userid'] = '<stron>%s</strong> \u306F\u767B\u9332\u3067\u304D\u306A\u3044\u5F62\u5F0F\u3067\u3059';\n// @item is not Zipcode format.\n$validation_error_message['@zipcode'] = '<stron>%s</strong> \u306F\u767B\u9332\u3067\u304D\u306A\u3044\u5F62\u5F0F\u3067\u3059';\n"})})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},65:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return s}});var t=r(7294);let o={},i=t.createContext(o);function s(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);