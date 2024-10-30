"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[539472],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>d});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(a),u=r,d=p["".concat(o,".").concat(u)]||p[u]||y[u]||i;return a?n.createElement(d,l(l({ref:t},c),{},{components:a})):n.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},407993:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=a(58168),r=(a(296540),a(15680));const i={title:"session_variables",language:"zh-CN"},l=void 0,s={unversionedId:"admin-manual/system-tables/information_schema/session_variables",id:"admin-manual/system-tables/information_schema/session_variables",title:"session_variables",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/system-tables/information_schema/session_variables.md",sourceDirName:"admin-manual/system-tables/information_schema",slug:"/admin-manual/system-tables/information_schema/session_variables",permalink:"/zh-CN/docs/dev/admin-manual/system-tables/information_schema/session_variables",draft:!1,tags:[],version:"current",frontMatter:{title:"session_variables",language:"zh-CN"},sidebar:"docs",previous:{title:"schemata",permalink:"/zh-CN/docs/dev/admin-manual/system-tables/information_schema/schemata"},next:{title:"statistics",permalink:"/zh-CN/docs/dev/admin-manual/system-tables/information_schema/statistics"}},o={},m=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u6240\u5c5e\u6570\u636e\u5e93",id:"\u6240\u5c5e\u6570\u636e\u5e93",level:2},{value:"\u8868\u4fe1\u606f",id:"\u8868\u4fe1\u606f",level:2}],c={toc:m},p="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.yg)("p",null,"\u67e5\u770b\u4f1a\u8bdd\u53d8\u91cf\u4fe1\u606f\u3002"),(0,r.yg)("h2",{id:"\u6240\u5c5e\u6570\u636e\u5e93"},"\u6240\u5c5e\u6570\u636e\u5e93"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"information_schema")),(0,r.yg)("h2",{id:"\u8868\u4fe1\u606f"},"\u8868\u4fe1\u606f"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u5217\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"VARIABLE_NAME"),(0,r.yg)("td",{parentName:"tr",align:"left"},"varchar(64)"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u53d8\u91cf\u540d\u79f0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"VARIABLE_VALUE"),(0,r.yg)("td",{parentName:"tr",align:"left"},"varchar(1024)"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u5f53\u524d\u503c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"DEFAULT_VALUE"),(0,r.yg)("td",{parentName:"tr",align:"left"},"varchar(1024)"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"CHANGED"),(0,r.yg)("td",{parentName:"tr",align:"left"},"varchar(4)"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u5f53\u524d\u503c\u662f\u5426\u4e0d\u540c\u4e8e\u9ed8\u8ba4\u503c")))))}y.isMDXComponent=!0}}]);