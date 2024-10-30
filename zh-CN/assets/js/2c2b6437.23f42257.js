"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[832650],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>c});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,g=y(e,["components","mdxType","originalType","parentName"]),d=p(n),s=r,c=d["".concat(o,".").concat(s)]||d[s]||m[s]||l;return n?a.createElement(c,i(i({ref:t},g),{},{components:n})):a.createElement(c,i({ref:t},g))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var y={};for(var o in t)hasOwnProperty.call(t,o)&&(y[o]=t[o]);y.originalType=e,y[d]="string"==typeof e?e:r,i[1]=y;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},946781:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>y,toc:()=>p});var a=n(58168),r=(n(296540),n(15680));const l={title:"yearweek",language:"zh-CN"},i=void 0,y={unversionedId:"sql-manual/sql-functions/date-time-functions/yearweek",id:"version-1.2/sql-manual/sql-functions/date-time-functions/yearweek",title:"yearweek",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/date-time-functions/yearweek.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/yearweek",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/yearweek",draft:!1,tags:[],version:"1.2",frontMatter:{title:"yearweek",language:"zh-CN"},sidebar:"docs",previous:{title:"weekofyear",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/weekofyear"},next:{title:"dayname",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/dayname"}},o={},p=[{value:"yearweek",id:"yearweek",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],g={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"yearweek"},"yearweek"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"INT YEARWEEK(DATE date[, INT mode])")),(0,r.yg)("p",null,"\u8fd4\u56de\u6307\u5b9a\u65e5\u671f\u7684\u5e74\u4efd\u548c\u661f\u671f\u6570\u3002mode\u7684\u503c\u9ed8\u8ba4\u4e3a0\u3002\n\u5f53\u65e5\u671f\u6240\u5728\u7684\u661f\u671f\u5c5e\u4e8e\u4e0a\u4e00\u5e74\u65f6\uff0c\u8fd4\u56de\u7684\u662f\u4e0a\u4e00\u5e74\u7684\u5e74\u4efd\u548c\u661f\u671f\u6570\uff1b\n\u5f53\u65e5\u671f\u6240\u5728\u7684\u661f\u671f\u5c5e\u4e8e\u4e0b\u4e00\u5e74\u65f6\uff0c\u8fd4\u56de\u7684\u662f\u4e0b\u4e00\u5e74\u7684\u5e74\u4efd\uff0c\u661f\u671f\u6570\u4e3a1\u3002\n\u53c2\u6570mode\u7684\u4f5c\u7528\u53c2\u89c1\u4e0b\u9762\u7684\u8868\u683c\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Mode"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u661f\u671f\u7684\u7b2c\u4e00\u5929"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u661f\u671f\u6570\u7684\u8303\u56f4"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u7b2c\u4e00\u4e2a\u661f\u671f\u7684\u5b9a\u4e49"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"0"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u661f\u671f\u65e5"),(0,r.yg)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u8fd9\u4e00\u5e74\u4e2d\u7684\u7b2c\u4e00\u4e2a\u661f\u671f\u65e5\u6240\u5728\u7684\u661f\u671f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"1"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u661f\u671f\u4e00"),(0,r.yg)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u8fd9\u4e00\u5e74\u7684\u65e5\u671f\u6240\u5360\u7684\u5929\u6570\u5927\u4e8e\u7b49\u4e8e4\u5929\u7684\u7b2c\u4e00\u4e2a\u661f\u671f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"2"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u661f\u671f\u65e5"),(0,r.yg)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u8fd9\u4e00\u5e74\u4e2d\u7684\u7b2c\u4e00\u4e2a\u661f\u671f\u65e5\u6240\u5728\u7684\u661f\u671f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"3"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u661f\u671f\u4e00"),(0,r.yg)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u8fd9\u4e00\u5e74\u7684\u65e5\u671f\u6240\u5360\u7684\u5929\u6570\u5927\u4e8e\u7b49\u4e8e4\u5929\u7684\u7b2c\u4e00\u4e2a\u661f\u671f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"4"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u661f\u671f\u65e5"),(0,r.yg)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u8fd9\u4e00\u5e74\u7684\u65e5\u671f\u6240\u5360\u7684\u5929\u6570\u5927\u4e8e\u7b49\u4e8e4\u5929\u7684\u7b2c\u4e00\u4e2a\u661f\u671f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"5"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u661f\u671f\u4e00"),(0,r.yg)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u8fd9\u4e00\u5e74\u4e2d\u7684\u7b2c\u4e00\u4e2a\u661f\u671f\u4e00\u6240\u5728\u7684\u661f\u671f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"6"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u661f\u671f\u65e5"),(0,r.yg)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u8fd9\u4e00\u5e74\u7684\u65e5\u671f\u6240\u5360\u7684\u5929\u6570\u5927\u4e8e\u7b49\u4e8e4\u5929\u7684\u7b2c\u4e00\u4e2a\u661f\u671f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"7"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u661f\u671f\u4e00"),(0,r.yg)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u8fd9\u4e00\u5e74\u4e2d\u7684\u7b2c\u4e00\u4e2a\u661f\u671f\u4e00\u6240\u5728\u7684\u661f\u671f")))),(0,r.yg)("p",null,"\u53c2\u6570\u4e3aDate\u6216\u8005Datetime\u7c7b\u578b"),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> select yearweek('2021-1-1');\n+----------------------+\n| yearweek('2021-1-1') |\n+----------------------+\n|               202052 |\n+----------------------+\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> select yearweek('2020-7-1');\n+----------------------+\n| yearweek('2020-7-1') |\n+----------------------+\n|               202026 |\n+----------------------+\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> select yearweek('2024-12-30',1);\n+------------------------------------+\n| yearweek('2024-12-30 00:00:00', 1) |\n+------------------------------------+\n|                             202501 |\n+------------------------------------+\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"YEARWEEK\n")))}m.isMDXComponent=!0}}]);