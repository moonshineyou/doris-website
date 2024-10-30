"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[247064],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(y,a(a({ref:n},u),{},{components:t})):r.createElement(y,a({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},232597:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(58168),o=(t(296540),t(15680));const i={title:"WINDOW-FUNCTION-LEAD",language:"en"},a=void 0,l={unversionedId:"sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LEAD",id:"version-1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LEAD",title:"WINDOW-FUNCTION-LEAD",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LEAD.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LEAD",permalink:"/docs/1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LEAD",draft:!1,tags:[],version:"1.2",frontMatter:{title:"WINDOW-FUNCTION-LEAD",language:"en"},sidebar:"docs",previous:{title:"WINDOW-FUNCTION-FIRST_VALUE",permalink:"/docs/1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-FIRST-VALUE"},next:{title:"WINDOW-FUNCTION-ROW_NUMBER",permalink:"/docs/1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-ROW-NUMBER"}},s={},c=[{value:"WINDOW FUNCTION LEAD",id:"window-function-lead",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"window-function-lead"},"WINDOW FUNCTION LEAD"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("p",null,"The LEAD() method is used to calculate the value of the current line several lines backwards."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"LEAD(expr, offset, default) OVER (partition_by_clause order_by_clause)\n")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("p",null,"Calculate the trend of the closing price of the second day compared with the closing price of the day, that is, the closing price of the second day is higher or lower than that of the day."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'select stock_symbol, closing_date, closing_price,    \ncase   \n(lead(closing_price,1, 0)   \nover (partition by stock_symbol order by closing_date)-closing_price) > 0   \nwhen true then "higher"   \nwhen false then "flat or lower"    \nend as "trending"   \nfrom stock_ticker    \norder by closing_date;\n\n| stock_symbol | closing_date        | closing_price | trending      |\n|--------------|---------------------|---------------|---------------|\n| JDR          | 2014-09-13 00:00:00 | 12.86         | higher        |\n| JDR          | 2014-09-14 00:00:00 | 12.89         | higher        |\n| JDR          | 2014-09-15 00:00:00 | 12.94         | flat or lower |\n| JDR          | 2014-09-16 00:00:00 | 12.55         | higher        |\n| JDR          | 2014-09-17 00:00:00 | 14.03         | higher        |\n| JDR          | 2014-09-18 00:00:00 | 14.75         | flat or lower |\n| JDR          | 2014-09-19 00:00:00 | 13.98         | flat or lower |\n')),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"WINDOW,FUNCTION,LEAD\n")))}p.isMDXComponent=!0}}]);