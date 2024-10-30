"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[207313],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var r=t(296540);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(t),y=s,d=u["".concat(o,".").concat(y)]||u[y]||g[y]||i;return t?r.createElement(d,l(l({ref:n},c),{},{components:t})):r.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,l=new Array(i);l[0]=y;var a={};for(var o in n)hasOwnProperty.call(n,o)&&(a[o]=n[o]);a.originalType=e,a[u]="string"==typeof e?e:s,l[1]=a;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},548392:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=t(58168),s=(t(296540),t(15680));const i={title:"SPLIT_BY_STRING",language:"en"},l=void 0,a={unversionedId:"sql-manual/sql-functions/string-functions/split-by-string",id:"version-3.0/sql-manual/sql-functions/string-functions/split-by-string",title:"SPLIT_BY_STRING",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/string-functions/split-by-string.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/split-by-string",permalink:"/docs/3.0/sql-manual/sql-functions/string-functions/split-by-string",draft:!1,tags:[],version:"3.0",frontMatter:{title:"SPLIT_BY_STRING",language:"en"},sidebar:"docs",previous:{title:"SPLIT_PART",permalink:"/docs/3.0/sql-manual/sql-functions/string-functions/split-part"},next:{title:"SUBSTRING_INDEX",permalink:"/docs/3.0/sql-manual/sql-functions/string-functions/substring-index"}},o={},p=[{value:"split_by_string",id:"split_by_string",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value(s)",id:"returned-values",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},u="wrapper";function g(e){let{components:n,...t}=e;return(0,s.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"split_by_string"},"split_by_string"),(0,s.yg)("h3",{id:"description"},"description"),(0,s.yg)("h4",{id:"syntax"},"Syntax"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"ARRAY<STRING> split_by_string(STRING s, STRING separator)")),(0,s.yg)("p",null,"Splits a string into substrings separated by a string. It uses a constant string separator of multiple characters as the separator. If the string separator is empty, it will split the string s into an array of single characters."),(0,s.yg)("h4",{id:"arguments"},"Arguments"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"separator")," \u2014 The separator. Type: ",(0,s.yg)("inlineCode",{parentName:"p"},"String")),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"s")," \u2014 The string to split. Type: ",(0,s.yg)("inlineCode",{parentName:"p"},"String")),(0,s.yg)("h4",{id:"returned-values"},"Returned value(s)"),(0,s.yg)("p",null,"Returns an array of selected substrings. Empty substrings may be selected when:"),(0,s.yg)("p",null,"A non-empty separator occurs at the beginning or end of the string;"),(0,s.yg)("p",null,"There are multiple consecutive separators;"),(0,s.yg)("p",null,"The original string s is empty."),(0,s.yg)("p",null,"Type: ",(0,s.yg)("inlineCode",{parentName:"p"},"Array(String)")),(0,s.yg)("h3",{id:"example"},"example"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"select split_by_string('a1b1c1d','1');\n+---------------------------------+\n| split_by_string('a1b1c1d', '1') |\n+---------------------------------+\n| ['a', 'b', 'c', 'd']            |\n+---------------------------------+\n\nselect split_by_string(',,a,b,c,',',');\n+----------------------------------+\n| split_by_string(',,a,b,c,', ',') |\n+----------------------------------+\n| ['', '', 'a', 'b', 'c', '']      |\n+----------------------------------+\n\nSELECT split_by_string(NULL,',');\n+----------------------------+\n| split_by_string(NULL, ',') |\n+----------------------------+\n| NULL                       |\n+----------------------------+\n\nselect split_by_string('a,b,c,abcde',',');\n+-------------------------------------+\n| split_by_string('a,b,c,abcde', ',') |\n+-------------------------------------+\n| ['a', 'b', 'c', 'abcde']            |\n+-------------------------------------+\n\nselect split_by_string('1,,2,3,,4,5,,abcde', ',,');\n+---------------------------------------------+\n| split_by_string('1,,2,3,,4,5,,abcde', ',,') |\n+---------------------------------------------+\n| ['1', '2,3', '4,5', 'abcde']                |\n+---------------------------------------------+\n\nselect split_by_string(',,,,',',,');\n+-------------------------------+\n| split_by_string(',,,,', ',,') |\n+-------------------------------+\n| ['', '', '']                  |\n+-------------------------------+\n\nselect split_by_string(',,a,,b,,c,,',',,');\n+--------------------------------------+\n| split_by_string(',,a,,b,,c,,', ',,') |\n+--------------------------------------+\n| ['', 'a', 'b', 'c', '']              |\n+--------------------------------------+\n")),(0,s.yg)("h3",{id:"keywords"},"keywords"),(0,s.yg)("p",null,"SPLIT_BY_STRING,SPLIT"))}g.isMDXComponent=!0}}]);