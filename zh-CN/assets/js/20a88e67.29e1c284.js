"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[876310],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var r=t(296540);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),f=s,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,a=new Array(o);a[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},587164:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(58168),s=(t(296540),t(15680));const o={title:"SECONDS_SUB",language:"zh-CN"},a=void 0,i={unversionedId:"sql-manual/sql-functions/date-time-functions/seconds-sub",id:"version-3.0/sql-manual/sql-functions/date-time-functions/seconds-sub",title:"SECONDS_SUB",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/date-time-functions/seconds-sub.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/seconds-sub",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/seconds-sub",draft:!1,tags:[],version:"3.0",frontMatter:{title:"SECONDS_SUB",language:"zh-CN"},sidebar:"docs",previous:{title:"SECONDS_DIFF",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/seconds-diff"},next:{title:"HOURS_ADD",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/hours-add"}},l={},c=[{value:"seconds_sub",id:"seconds_sub",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,s.yg)(d,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"seconds_sub"},"seconds_sub"),(0,s.yg)("h3",{id:"description"},"description"),(0,s.yg)("h4",{id:"syntax"},"Syntax"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"DATETIME SECONDS_SUB(DATETIME date, INT seconds)")),(0,s.yg)("p",null,"\u4ece\u65e5\u671f\u65f6\u95f4\u6216\u65e5\u671f\u51cf\u53bb\u6307\u5b9a\u79d2\u6570"),(0,s.yg)("p",null,"\u53c2\u6570 date \u53ef\u4ee5\u662f DATETIME \u6216\u8005 DATE \u7c7b\u578b\uff0c\u8fd4\u56de\u7c7b\u578b\u4e3a DATETIME\u3002"),(0,s.yg)("h3",{id:"example"},"example"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"mysql> select seconds_sub(\"2020-01-01 00:00:00\", 1);\n+---------------------------------------+\n| seconds_sub('2020-01-01 00:00:00', 1) |\n+---------------------------------------+\n| 2019-12-31 23:59:59                   |\n+---------------------------------------+\n")),(0,s.yg)("h3",{id:"keywords"},"keywords"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"SECONDS_SUB\n")))}p.isMDXComponent=!0}}]);