"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[979016],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var o=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=r,y=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return t?o.createElement(y,a(a({ref:n},u),{},{components:t})):o.createElement(y,a({ref:n},u))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},537958:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=t(58168),r=(t(296540),t(15680));const i={title:"WINDOW_FUNCTION_LAG",language:"zh-CN"},a=void 0,l={unversionedId:"sql-manual/sql-functions/window-functions/window-function-lag",id:"version-2.1/sql-manual/sql-functions/window-functions/window-function-lag",title:"WINDOW_FUNCTION_LAG",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/window-functions/window-function-lag.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/window-function-lag",permalink:"/zh-CN/docs/sql-manual/sql-functions/window-functions/window-function-lag",draft:!1,tags:[],version:"2.1",frontMatter:{title:"WINDOW_FUNCTION_LAG",language:"zh-CN"},sidebar:"docs",previous:{title:"WINDOW_FUNCTION_LEAD",permalink:"/zh-CN/docs/sql-manual/sql-functions/window-functions/window-function-lead"},next:{title:"WINDOW_FUNCTION_ROW_NUMBER",permalink:"/zh-CN/docs/sql-manual/sql-functions/window-functions/window-function-row-number"}},c={},s=[{value:"WINDOW FUNCTION LAG",id:"window-function-lag",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},d="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,o.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"window-function-lag"},"WINDOW FUNCTION LAG"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("p",null,"LAG() \u65b9\u6cd5\u7528\u6765\u8ba1\u7b97\u5f53\u524d\u884c\u5411\u524d\u6570\u82e5\u5e72\u884c\u7684\u503c\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"LAG(expr, offset, default) OVER (partition_by_clause order_by_clause)\n")),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("p",null,"\u8ba1\u7b97\u524d\u4e00\u5929\u7684\u6536\u76d8\u4ef7"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'select stock_symbol, closing_date, closing_price,    \nlag(closing_price,1, 0) over (partition by stock_symbol order by closing_date) as "yesterday closing"   \nfrom stock_ticker   \norder by closing_date;\n\n| stock_symbol | closing_date        | closing_price | yesterday closing |\n|--------------|---------------------|---------------|-------------------|\n| JDR          | 2014-09-13 00:00:00 | 12.86         | 0                 |\n| JDR          | 2014-09-14 00:00:00 | 12.89         | 12.86             |\n| JDR          | 2014-09-15 00:00:00 | 12.94         | 12.89             |\n| JDR          | 2014-09-16 00:00:00 | 12.55         | 12.94             |\n| JDR          | 2014-09-17 00:00:00 | 14.03         | 12.55             |\n| JDR          | 2014-09-18 00:00:00 | 14.75         | 14.03             |\n| JDR          | 2014-09-19 00:00:00 | 13.98         | 14.75             |\n')),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"WINDOW,FUNCTION,LAG\n")))}p.isMDXComponent=!0}}]);