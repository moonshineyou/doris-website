"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[886789],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>f});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},551498:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(58168),o=(t(296540),t(15680));const i={title:"POW",language:"en"},a=void 0,l={unversionedId:"sql-manual/sql-functions/numeric-functions/pow",id:"version-2.1/sql-manual/sql-functions/numeric-functions/pow",title:"POW",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/numeric-functions/pow.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/pow",permalink:"/docs/sql-manual/sql-functions/numeric-functions/pow",draft:!1,tags:[],version:"2.1",frontMatter:{title:"POW",language:"en"},sidebar:"docs",previous:{title:"CBRT",permalink:"/docs/sql-manual/sql-functions/numeric-functions/cbrt"},next:{title:"DEGREES",permalink:"/docs/sql-manual/sql-functions/numeric-functions/degrees"}},s={},p=[{value:"pow",id:"pow",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"pow"},"pow"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("p",null,"Returns the value of the first argument raised to the power of the second argument."),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"The other aliases for this function are ",(0,o.yg)("inlineCode",{parentName:"p"},"power"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"fpow")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"dpow"),".")),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"DOUBLE pow(DOUBLE a, DOUBLE b)"),"\nReturns ",(0,o.yg)("inlineCode",{parentName:"p"},"a")," raised to the ",(0,o.yg)("inlineCode",{parentName:"p"},"b")," power."),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select pow(2,0);\n+---------------+\n| pow(2.0, 0.0) |\n+---------------+\n|             1 |\n+---------------+\nmysql> select pow(2,3);\n+---------------+\n| pow(2.0, 3.0) |\n+---------------+\n|             8 |\n+---------------+\nmysql> select pow(3,2.4);\n+--------------------+\n| pow(3.0, 2.4)      |\n+--------------------+\n| 13.966610165238235 |\n+--------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"POW, POWER, FPOW, DPOW\n")))}m.isMDXComponent=!0}}]);