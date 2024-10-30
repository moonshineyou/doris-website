"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[74580],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),A=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=A(e.components);return r.createElement(s.Provider,{value:n},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=A(t),u=a,y=g["".concat(s,".").concat(u)]||g[u]||p[u]||o;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[g]="string"==typeof e?e:a,i[1]=l;for(var A=2;A<o;A++)i[A]=t[A];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},776874:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>A});var r=t(58168),a=(t(296540),t(15680));const o={title:"MAP_AGG",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-functions/aggregate-functions/map-agg",id:"version-3.0/sql-manual/sql-functions/aggregate-functions/map-agg",title:"MAP_AGG",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/aggregate-functions/map-agg.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/map-agg",permalink:"/docs/3.0/sql-manual/sql-functions/aggregate-functions/map-agg",draft:!1,tags:[],version:"3.0",frontMatter:{title:"MAP_AGG",language:"en"},sidebar:"docs",previous:{title:"FOREACH",permalink:"/docs/3.0/sql-manual/sql-functions/aggregate-functions/foreach"},next:{title:"BITMAP_AGG",permalink:"/docs/3.0/sql-manual/sql-functions/aggregate-functions/bitmap-agg"}},s={},A=[{value:"MAP_AGG",id:"map_agg",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:A},g="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(g,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"map_agg"},"MAP_AGG"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"MAP_AGG(expr1, expr2)")),(0,a.yg)("p",null,"Returns a map consists of expr1 as the key and expr2 as the corresponding value."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'MySQL > select `n_nationkey`, `n_name`, `n_regionkey` from `nation`;\n+-------------+----------------+-------------+\n| n_nationkey | n_name         | n_regionkey |\n+-------------+----------------+-------------+\n|           0 | ALGERIA        |           0 |\n|           1 | ARGENTINA      |           1 |\n|           2 | BRAZIL         |           1 |\n|           3 | CANADA         |           1 |\n|           4 | EGYPT          |           4 |\n|           5 | ETHIOPIA       |           0 |\n|           6 | FRANCE         |           3 |\n|           7 | GERMANY        |           3 |\n|           8 | INDIA          |           2 |\n|           9 | INDONESIA      |           2 |\n|          10 | IRAN           |           4 |\n|          11 | IRAQ           |           4 |\n|          12 | JAPAN          |           2 |\n|          13 | JORDAN         |           4 |\n|          14 | KENYA          |           0 |\n|          15 | MOROCCO        |           0 |\n|          16 | MOZAMBIQUE     |           0 |\n|          17 | PERU           |           1 |\n|          18 | CHINA          |           2 |\n|          19 | ROMANIA        |           3 |\n|          20 | SAUDI ARABIA   |           4 |\n|          21 | VIETNAM        |           2 |\n|          22 | RUSSIA         |           3 |\n|          23 | UNITED KINGDOM |           3 |\n|          24 | UNITED STATES  |           1 |\n+-------------+----------------+-------------+\n\nMySQL > select `n_regionkey`, map_agg(`n_nationkey`, `n_name`) from `nation` group by `n_regionkey`;\n+-------------+---------------------------------------------------------------------------+\n| n_regionkey | map_agg(`n_nationkey`, `n_name`)                                          |\n+-------------+---------------------------------------------------------------------------+\n|           1 | {1:"ARGENTINA", 2:"BRAZIL", 3:"CANADA", 17:"PERU", 24:"UNITED STATES"}    |\n|           0 | {0:"ALGERIA", 5:"ETHIOPIA", 14:"KENYA", 15:"MOROCCO", 16:"MOZAMBIQUE"}    |\n|           3 | {6:"FRANCE", 7:"GERMANY", 19:"ROMANIA", 22:"RUSSIA", 23:"UNITED KINGDOM"} |\n|           4 | {4:"EGYPT", 10:"IRAN", 11:"IRAQ", 13:"JORDAN", 20:"SAUDI ARABIA"}         |\n|           2 | {8:"INDIA", 9:"INDONESIA", 12:"JAPAN", 18:"CHINA", 21:"VIETNAM"}          |\n+-------------+---------------------------------------------------------------------------+\n\nMySQL > select n_regionkey, map_agg(`n_name`, `n_nationkey` % 5) from `nation` group by `n_regionkey`;\n+-------------+------------------------------------------------------------------------+\n| n_regionkey | map_agg(`n_name`, (`n_nationkey` % 5))                                 |\n+-------------+------------------------------------------------------------------------+\n|           2 | {"INDIA":3, "INDONESIA":4, "JAPAN":2, "CHINA":3, "VIETNAM":1}          |\n|           0 | {"ALGERIA":0, "ETHIOPIA":0, "KENYA":4, "MOROCCO":0, "MOZAMBIQUE":1}    |\n|           3 | {"FRANCE":1, "GERMANY":2, "ROMANIA":4, "RUSSIA":2, "UNITED KINGDOM":3} |\n|           1 | {"ARGENTINA":1, "BRAZIL":2, "CANADA":3, "PERU":2, "UNITED STATES":4}   |\n|           4 | {"EGYPT":4, "IRAN":0, "IRAQ":1, "JORDAN":3, "SAUDI ARABIA":0}          |\n+-------------+------------------------------------------------------------------------+\n')),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"MAP_AGG"))}p.isMDXComponent=!0}}]);