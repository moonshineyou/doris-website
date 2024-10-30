"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[531519],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(s,".").concat(d)]||u[d]||O[d]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},268762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>O,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const o={title:"STOP-ROUTINE-LOAD",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/STOP-ROUTINE-LOAD",id:"version-2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STOP-ROUTINE-LOAD",title:"STOP-ROUTINE-LOAD",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STOP-ROUTINE-LOAD.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STOP-ROUTINE-LOAD",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STOP-ROUTINE-LOAD",draft:!1,tags:[],version:"2.0",frontMatter:{title:"STOP-ROUTINE-LOAD",language:"en"},sidebar:"docs",previous:{title:"RESUME-ROUTINE-LOAD",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/RESUME-ROUTINE-LOAD"},next:{title:"CREATE-SYNC-JOB",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-SYNC-JOB"}},s={},c=[{value:"STOP-ROUTINE-LOAD",id:"stop-routine-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function O(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"stop-routine-load"},"STOP-ROUTINE-LOAD"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"STOP ROUTINE LOAD"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"User stops a Routine Load job. A stopped job cannot be rerun."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"STOP ROUTINE LOAD FOR job_name;\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Stop the routine import job named test1."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"STOP ROUTINE LOAD FOR test1;\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"STOP, ROUTINE, LOAD\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}O.isMDXComponent=!0}}]);