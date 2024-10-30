"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[213838],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=i,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||o;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},579246:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(58168),i=(t(296540),t(15680));const o={title:"\u914d\u7f6e\u6587\u4ef6\u76ee\u5f55",language:"zh-CN"},a=void 0,l={unversionedId:"admin-manual/config/config-dir",id:"version-3.0/admin-manual/config/config-dir",title:"\u914d\u7f6e\u6587\u4ef6\u76ee\u5f55",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/config/config-dir.md",sourceDirName:"admin-manual/config",slug:"/admin-manual/config/config-dir",permalink:"/zh-CN/docs/3.0/admin-manual/config/config-dir",draft:!1,tags:[],version:"3.0",frontMatter:{title:"\u914d\u7f6e\u6587\u4ef6\u76ee\u5f55",language:"zh-CN"},sidebar:"docs",previous:{title:"FE \u9501\u7ba1\u7406",permalink:"/zh-CN/docs/3.0/admin-manual/maint-monitor/frontend-lock-manager"},next:{title:"FE \u914d\u7f6e\u9879",permalink:"/zh-CN/docs/3.0/admin-manual/config/fe-config"}},c={},s=[{value:"hdfs-site.xml \u548c hive-site.xml",id:"hdfs-sitexml-\u548c-hive-sitexml",level:2}],u={toc:s},p="wrapper";function f(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"FE \u548c BE \u7684\u914d\u7f6e\u6587\u4ef6\u76ee\u5f55\u4e3a ",(0,i.yg)("inlineCode",{parentName:"p"},"conf/"),"\u3002\u8fd9\u4e2a\u76ee\u5f55\u9664\u4e86\u5b58\u653e\u9ed8\u8ba4\u7684 fe.conf, be.conf \u7b49\u6587\u4ef6\u5916\uff0c\u4e5f\u88ab\u7528\u4e8e\u516c\u7528\u7684\u914d\u7f6e\u6587\u4ef6\u5b58\u653e\u76ee\u5f55\u3002"),(0,i.yg)("p",null,"\u7528\u6237\u53ef\u4ee5\u5728\u5176\u4e2d\u5b58\u653e\u4e00\u4e9b\u914d\u7f6e\u6587\u4ef6\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u8bfb\u53d6\u3002"),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"\u81ea Doris 1.2 \u7248\u672c\u540e\u652f\u6301\u8be5\u529f\u80fd")),(0,i.yg)("h2",{id:"hdfs-sitexml-\u548c-hive-sitexml"},"hdfs-site.xml \u548c hive-site.xml"),(0,i.yg)("p",null,"\u5728 Doris \u7684\u4e00\u4e9b\u529f\u80fd\u4e2d\uff0c\u9700\u8981\u8bbf\u95ee HDFS \u4e0a\u7684\u6570\u636e\uff0c\u6216\u8005\u8bbf\u95ee Hive metastore\u3002"),(0,i.yg)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5728\u529f\u80fd\u76f8\u5e94\u7684\u8bed\u53e5\u4e2d\uff0c\u624b\u52a8\u7684\u586b\u5199\u5404\u79cd HDFS/Hive \u7684\u53c2\u6570\u3002"),(0,i.yg)("p",null,"\u4f46\u8fd9\u4e9b\u53c2\u6570\u975e\u5e38\u591a\uff0c\u5982\u679c\u5168\u90e8\u624b\u52a8\u586b\u5199\uff0c\u975e\u5e38\u9ebb\u70e6\u3002"),(0,i.yg)("p",null,"\u56e0\u6b64\uff0c\u7528\u6237\u53ef\u4ee5\u5c06 HDFS \u6216 Hive \u7684\u914d\u7f6e\u6587\u4ef6 hdfs-site.xml/hive-site.xml \u76f4\u63a5\u653e\u7f6e\u5728 ",(0,i.yg)("inlineCode",{parentName:"p"},"conf/")," \u76ee\u5f55\u4e0b\u3002Doris \u4f1a\u81ea\u52a8\u8bfb\u53d6\u8fd9\u4e9b\u914d\u7f6e\u6587\u4ef6\u3002"),(0,i.yg)("p",null,"\u800c\u7528\u6237\u5728\u547d\u4ee4\u4e2d\u586b\u5199\u7684\u914d\u7f6e\uff0c\u4f1a\u8986\u76d6\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u914d\u7f6e\u9879\u3002"),(0,i.yg)("p",null,"\u8fd9\u6837\uff0c\u7528\u6237\u4ec5\u9700\u586b\u5199\u5c11\u91cf\u7684\u914d\u7f6e\uff0c\u5373\u53ef\u5b8c\u6210\u5bf9 HDFS/Hive \u7684\u8bbf\u95ee\u3002"))}f.isMDXComponent=!0}}]);