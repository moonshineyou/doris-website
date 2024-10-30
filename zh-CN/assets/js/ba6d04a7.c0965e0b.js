"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[371766],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(r),g=a,y=m["".concat(c,".").concat(g)]||m[g]||b[g]||i;return r?n.createElement(y,s(s({ref:t},p),{},{components:r})):n.createElement(y,s({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},860408:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(58168),a=(r(296540),r(15680));const i={title:"Smartbi",language:"zh-CN"},s=void 0,o={unversionedId:"ecosystem/bi/smartbi",id:"ecosystem/bi/smartbi",title:"Smartbi",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/ecosystem/bi/smartbi.md",sourceDirName:"ecosystem/bi",slug:"/ecosystem/bi/smartbi",permalink:"/zh-CN/docs/dev/ecosystem/bi/smartbi",draft:!1,tags:[],version:"current",frontMatter:{title:"Smartbi",language:"zh-CN"},sidebar:"ecosystem",previous:{title:"Quick BI",permalink:"/zh-CN/docs/dev/ecosystem/bi/quickbi"}},c={},l=[{value:"Smartbi \u4ecb\u7ecd",id:"smartbi-\u4ecb\u7ecd",level:2},{value:"\u6570\u636e\u8fde\u63a5\u4e0e\u5e94\u7528",id:"\u6570\u636e\u8fde\u63a5\u4e0e\u5e94\u7528",level:2}],p={toc:l},m="wrapper";function b(e){let{components:t,...i}=e;return(0,a.yg)(m,(0,n.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"smartbi-\u4ecb\u7ecd"},"Smartbi \u4ecb\u7ecd"),(0,a.yg)("p",null,"Smartbi \u662f\u8f6f\u4ef6\u670d\u52a1\u3001\u5e94\u7528\u8fde\u63a5\u5668\u7684\u96c6\u5408\uff0c\u5176\u53ef\u4ee5\u8fde\u63a5\u5230\u591a\u79cd\u6570\u636e\u6e90\uff0c\u5305\u62ec Oracle\u3001SQL Server\u3001MySQL \u548c Doris \u7b49\uff0c\u4ee5\u4fbf\u7528\u6237\u53ef\u4ee5\u8f7b\u677e\u5730\u6574\u5408\u548c\u6e05\u6d17\u6570\u636e\u3002\u501f\u52a9 Smartbi \u7684\u6570\u636e\u5efa\u6a21\u529f\u80fd\uff0c\u7528\u6237\u4e0d\u4ec5\u53ef\u4ee5\u521b\u5efa\u590d\u6742\u7684\u5173\u7cfb\u6a21\u578b\uff0c\u8fd8\u80fd\u7f16\u5199\u6570\u636e\u5206\u6790\u8868\u8fbe\u5f0f\u5e76\u5efa\u7acb\u6570\u636e\u5173\u7cfb\uff0c\u4ece\u800c\u4e3a\u9ad8\u7ea7\u7684\u6570\u636e\u5206\u6790\u548c\u53ef\u89c6\u5316\u5960\u5b9a\u57fa\u7840\u3002Smartbi \u63d0\u4f9b\u4e86\u4e30\u5bcc\u591a\u6837\u7684\u53ef\u89c6\u5316\u9009\u9879\uff0c\u5305\u62ec\u5404\u79cd\u7c7b\u578b\u7684\u56fe\u8868\u3001\u5730\u7406\u5730\u56fe\u3001\u4ea4\u4e92\u5f0f\u4eea\u8868\u677f\uff0c\u4ee5\u53ca\u652f\u6301\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u53ef\u89c6\u5316\u5de5\u5177\u3002\u8fd9\u4e9b\u529f\u80fd\u5f3a\u5927\u7684\u5de5\u5177\u5e2e\u52a9\u7528\u6237\u66f4\u76f4\u89c2\u3001\u66f4\u5168\u9762\u5730\u7406\u89e3\u548c\u5c55\u793a\u4ed6\u4eec\u7684\u6570\u636e\uff0c\u63d0\u5347\u6570\u636e\u5206\u6790\u7684\u6548\u679c\u548c\u6548\u7387\u3002"),(0,a.yg)("h2",{id:"\u6570\u636e\u8fde\u63a5\u4e0e\u5e94\u7528"},"\u6570\u636e\u8fde\u63a5\u4e0e\u5e94\u7528"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u767b\u5f55 Smartbi \u4e4b\u540e\u70b9\u51fb\u6570\u636e\u8fde\u63a5\u3002"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{alt:"main page",src:r(890024).A,width:"1800",height:"1408"}))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5728\u6570\u636e\u8fde\u63a5\u9875\u9762\u4e2d\u53ef\u4ee5\u770b\u5230\u5404\u4e2a\u5f85\u8fde\u63a5\u7684\u6570\u636e\u5e93\u5217\u8868\uff0c\u9009\u62e9 Doris \u6570\u636e\u5e93\u3002"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{alt:"selectdb",src:r(691651).A,width:"326",height:"338"}))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5728\u9009\u62e9\u6570\u636e\u5e93\u4e4b\u540e\uff0c\u586b\u5199 Doris \u6570\u636e\u5e93\u7684\u8fde\u63a5\u4fe1\u606f\u3002"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{alt:"data source connection",src:r(374074).A,width:"2038",height:"1080"}))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u82e5\u586b\u5199\u4fe1\u606f\u65e0\u8bef\uff0c\u4e14\u8fde\u63a5\u6210\u529f\u540e\u4f1a\u663e\u793a\u6d4b\u8bd5\u901a\u8fc7\u3002"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{alt:"test passed",src:r(130581).A,width:"512",height:"270"}))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u8fde\u63a5\u6210\u529f\u540e\uff0c\u5728\u6570\u636e\u5206\u6790\u6a21\u5757\u7535\u5b50\u670d\u52a1\u770b\u677f\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u8bbe\u7f6e\u6240\u9700\u8981\u7684\u62a5\u8868\u4fe1\u606f\u3002"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{alt:"data analysis",src:r(761484).A,width:"732",height:"832"})))))}b.isMDXComponent=!0},890024:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/bi-smartbi-en-1-ba1fe7838e1e6c444dc7be097a31fbda.png"},691651:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/bi-smartbi-en-2-68da5c476c7b3b5316bb5bf61719d9d4.png"},374074:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/bi-smartbi-en-3-eb95d02a9bcc6bec0debb34927b6c4d2.png"},130581:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/bi-smartbi-en-4-12c850b0f35e5704a2c3a4beed202a01.png"},761484:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/bi-smartbi-en-5-e01aa9d2d89867b981bce724215fbab5.png"}}]);