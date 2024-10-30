"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[367977],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>f});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(t),p=i,f=u["".concat(s,".").concat(p)]||u[p]||m[p]||l;return t?r.createElement(f,a(a({ref:n},d),{},{components:t})):r.createElement(f,a({ref:n},d))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},565408:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(58168),i=(t(296540),t(15680));const l={title:"MILLISECONDS_ADD",language:"zh-CN"},a=void 0,o={unversionedId:"sql-manual/sql-functions/date-time-functions/milliseconds-add",id:"version-3.0/sql-manual/sql-functions/date-time-functions/milliseconds-add",title:"MILLISECONDS_ADD",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/date-time-functions/milliseconds-add.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/milliseconds-add",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/milliseconds-add",draft:!1,tags:[],version:"3.0",frontMatter:{title:"MILLISECONDS_ADD",language:"zh-CN"},sidebar:"docs",previous:{title:"MICROSECONDS_SUB",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/microseconds-sub"},next:{title:"MILLISECONDS_DIFF",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/milliseconds-diff"}},s={},c=[{value:"milliseconds_add",id:"milliseconds_add",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],d={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"milliseconds_add"},"milliseconds_add"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"DATETIMEV2 milliseconds_add(DATETIMEV2 basetime, INT delta)")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"basetime: DATETIMEV2 \u7c7b\u578b\u8d77\u59cb\u65f6\u95f4"),(0,i.yg)("li",{parentName:"ul"},"delta: \u4ece basetime \u8d77\u9700\u8981\u76f8\u52a0\u7684\u6beb\u79d2\u6570"),(0,i.yg)("li",{parentName:"ul"},"\u8fd4\u56de\u7c7b\u578b\u4e3a DATETIMEV2")),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select milliseconds_add('2023-09-08 16:02:08.435123', 1);\n+--------------------------------------------------------------------------+\n| milliseconds_add(cast('2023-09-08 16:02:08.435123' as DATETIMEV2(6)), 1) |\n+--------------------------------------------------------------------------+\n| 2023-09-08 16:02:08.436123                                               |\n+--------------------------------------------------------------------------+\n1 row in set (0.04 sec)\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"milliseconds_add\n")))}m.isMDXComponent=!0}}]);