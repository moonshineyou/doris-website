"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[453690],{15680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>c});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),g=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},y=function(e){var t=g(e.components);return n.createElement(m.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),p=g(a),u=r,c=p["".concat(m,".").concat(u)]||p[u]||s[u]||l;return a?n.createElement(c,i(i({ref:t},y),{},{components:a})):n.createElement(c,i({ref:t},y))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=a[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},276769:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var n=a(58168),r=(a(296540),a(15680));const l={title:"referential_constraints",language:"en"},i=void 0,o={unversionedId:"admin-manual/system-tables/information_schema/referential_constraints",id:"version-2.1/admin-manual/system-tables/information_schema/referential_constraints",title:"referential_constraints",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/admin-manual/system-tables/information_schema/referential_constraints.md",sourceDirName:"admin-manual/system-tables/information_schema",slug:"/admin-manual/system-tables/information_schema/referential_constraints",permalink:"/docs/admin-manual/system-tables/information_schema/referential_constraints",draft:!1,tags:[],version:"2.1",frontMatter:{title:"referential_constraints",language:"en"},sidebar:"docs",previous:{title:"profiling",permalink:"/docs/admin-manual/system-tables/information_schema/profiling"},next:{title:"routines",permalink:"/docs/admin-manual/system-tables/information_schema/routines"}},m={},g=[{value:"Overview",id:"overview",level:2},{value:"Database",id:"database",level:2},{value:"Table Information",id:"table-information",level:2}],y={toc:g},p="wrapper";function s(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"This table is only used for compatibility with MySQL behavior. It is always empty."),(0,r.yg)("h2",{id:"database"},"Database"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"information_schema")),(0,r.yg)("h2",{id:"table-information"},"Table Information"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Column Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CONSTRAINT_CATALOG"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(64)"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CONSTRAINT_SCHEMA"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(64)"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CONSTRAINT_NAME"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(64)"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"UNIQUE_CONSTRAINT_CATALOG"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(64)"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"UNIQUE_CONSTRAINT_SCHEMA"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(64)"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"UNIQUE_CONSTRAINT_NAME"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(64)"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MATCH_OPTION"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(64)"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"UPDATE_RULE"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(64)"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DELETE_RULE"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(64)"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TABLE_NAME"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(64)"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"REFERENCED_TABLE_NAME"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(64)"),(0,r.yg)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);