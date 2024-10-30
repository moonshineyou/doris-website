"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[819185],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),y=r,g=p["".concat(m,".").concat(y)]||p[y]||u[y]||l;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},511385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(58168),r=(n(296540),n(15680));const l={title:"column_privileges",language:"en"},i=void 0,o={unversionedId:"admin-manual/system-tables/information_schema/column_privileges",id:"admin-manual/system-tables/information_schema/column_privileges",title:"column_privileges",description:"\x3c!--",source:"@site/docs/admin-manual/system-tables/information_schema/column_privileges.md",sourceDirName:"admin-manual/system-tables/information_schema",slug:"/admin-manual/system-tables/information_schema/column_privileges",permalink:"/docs/dev/admin-manual/system-tables/information_schema/column_privileges",draft:!1,tags:[],version:"current",frontMatter:{title:"column_privileges",language:"en"},sidebar:"docs",previous:{title:"collations",permalink:"/docs/dev/admin-manual/system-tables/information_schema/collations"},next:{title:"column_statistics",permalink:"/docs/dev/admin-manual/system-tables/information_schema/column_statistics"}},m={},s=[{value:"Overview",id:"overview",level:2},{value:"Database",id:"database",level:2},{value:"Table Information",id:"table-information",level:2}],c={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"This table is solely used for compatibility with MySQL behavior and is always empty. It does not truly reflect the column permission information of Doris."),(0,r.yg)("h2",{id:"database"},"Database"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"information_schema\n")),(0,r.yg)("h2",{id:"table-information"},"Table Information"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Column Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"GRANTEE"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(128)"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TABLE_CATALOG"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(512)"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TABLE_SCHEMA"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(64)"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TABLE_NAME"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(64)"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"COLUMN_NAME"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(64)"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PRIVILEGE_TYPE"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(64)"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"IS_GRANTABLE"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(3)"),(0,r.yg)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);