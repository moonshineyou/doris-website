"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[284058],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var i=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,y=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return t?i.createElement(y,l(l({ref:n},u),{},{components:t})):i.createElement(y,l({ref:n},u))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},167550:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var i=t(58168),r=(t(296540),t(15680));const a={title:"TIME_ROUND",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-functions/date-time-functions/time-round",id:"sql-manual/sql-functions/date-time-functions/time-round",title:"TIME_ROUND",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/date-time-functions/time-round.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/time-round",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/time-round",draft:!1,tags:[],version:"current",frontMatter:{title:"TIME_ROUND",language:"en"},sidebar:"docs",previous:{title:"STR_TO_DATE",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/str-to-date"},next:{title:"TIMEDIFF",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/timediff"}},p={},s=[{value:"time_round",id:"time_round",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},d="wrapper";function c(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,i.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"time_round"},"time_round"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"DATETIME TIME_ROUND(DATETIME expr)\nDATETIME TIME_ROUND(DATETIME expr, INT period)\nDATETIME TIME_ROUND(DATETIME expr, DATETIME origin)\nDATETIME TIME_ROUND(DATETIME expr, INT period, DATETIME origin)\n")),(0,r.yg)("p",null,"The function name ",(0,r.yg)("inlineCode",{parentName:"p"},"TIME_ROUND")," consists of two parts, Each part consists of the following optional values."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"TIME"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"SECOND"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"MINUTE"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"HOUR"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"DAY"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"WEEK"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"MONTH"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"YEAR")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"ROUND"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"FLOOR"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"CEIL"))),(0,r.yg)("p",null,"Returns the upper/lower bound of ",(0,r.yg)("inlineCode",{parentName:"p"},"expr"),"."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"period")," specifies how many ",(0,r.yg)("inlineCode",{parentName:"li"},"TIME")," units, the default is ",(0,r.yg)("inlineCode",{parentName:"li"},"1"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"origin")," specifies the start time of the period, the default is ",(0,r.yg)("inlineCode",{parentName:"li"},"1970-01-01T00:00:00"),", the start time of ",(0,r.yg)("inlineCode",{parentName:"li"},"WEEK")," is Sunday, which is ",(0,r.yg)("inlineCode",{parentName:"li"},"1970-01-04T00:00:00"),". Could be larger than ",(0,r.yg)("inlineCode",{parentName:"li"},"expr"),"."),(0,r.yg)("li",{parentName:"ul"},"Please try to choose common ",(0,r.yg)("inlineCode",{parentName:"li"},"period"),", such as 3 ",(0,r.yg)("inlineCode",{parentName:"li"},"MONTH"),", 90 ",(0,r.yg)("inlineCode",{parentName:"li"},"MINUTE"),". If you set a uncommon ",(0,r.yg)("inlineCode",{parentName:"li"},"period"),", please also specify ",(0,r.yg)("inlineCode",{parentName:"li"},"origin"),".")),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"\nMySQL> SELECT YEAR_FLOOR('20200202000000');\n+------------------------------+\n| year_floor('20200202000000') |\n+------------------------------+\n| 2020-01-01 00:00:00          |\n+------------------------------+\n\n\nMySQL> SELECT MONTH_CEIL(CAST('2020-02-02 13:09:20' AS DATETIME), 3); --quarter\n+--------------------------------------------------------+\n| month_ceil(CAST('2020-02-02 13:09:20' AS DATETIME), 3) |\n+--------------------------------------------------------+\n| 2020-04-01 00:00:00                                    |\n+--------------------------------------------------------+\n\n\nMySQL> SELECT WEEK_CEIL('2020-02-02 13:09:20', '2020-01-06'); --monday\n+---------------------------------------------------------+\n| week_ceil('2020-02-02 13:09:20', '2020-01-06 00:00:00') |\n+---------------------------------------------------------+\n| 2020-02-03 00:00:00                                     |\n+---------------------------------------------------------+\n\n\nMySQL> SELECT MONTH_CEIL(CAST('2020-02-02 13:09:20' AS DATETIME), 3, CAST('1970-01-09 00:00:00' AS DATETIME)); --next rent day\n+-------------------------------------------------------------------------------------------------+\n| month_ceil(CAST('2020-02-02 13:09:20' AS DATETIME), 3, CAST('1970-01-09 00:00:00' AS DATETIME)) |\n+-------------------------------------------------------------------------------------------------+\n| 2020-04-09 00:00:00                                                                             |\n+-------------------------------------------------------------------------------------------------+\n\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"TIME_ROUND\n")))}c.isMDXComponent=!0}}]);