"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[534514],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,d=m["".concat(s,".").concat(g)]||m[g]||u[g]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},740670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(58168),a=(n(296540),n(15680));const i={title:"Apache Doris Flink Connector 24.0.0  just released!",description:"Dear community, We are excited to announce the official release of Apache Doris Flink Connector version 24.0.0 on September 5th, 2024.",summary:"Dear community, We are excited to announce the official release of Apache Doris Flink Connector version 24.0.0 on September 5th, 2024.",date:"2024-09-25",author:"Apache Doris",tags:["Best Practice"],image:"/images/release-flink-doris-connector-24.0.jpg"},o=void 0,l={permalink:"/blog/release-flink-doris-connector-24.0.0",source:"@site/blog/release-flink-doris-connector-24.0.0.md",title:"Apache Doris Flink Connector 24.0.0  just released!",description:"Dear community, We are excited to announce the official release of Apache Doris Flink Connector version 24.0.0 on September 5th, 2024.",date:"2024-09-25T00:00:00.000Z",formattedDate:"September 25, 2024",tags:[{label:"Best Practice",permalink:"/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris Flink Connector 24.0.0  just released!",description:"Dear community, We are excited to announce the official release of Apache Doris Flink Connector version 24.0.0 on September 5th, 2024.",summary:"Dear community, We are excited to announce the official release of Apache Doris Flink Connector version 24.0.0 on September 5th, 2024.",date:"2024-09-25",author:"Apache Doris",tags:["Best Practice"],image:"/images/release-flink-doris-connector-24.0.jpg"},prevItem:{title:"Apache Doris version 2.0.15 has been released",permalink:"/blog/release-note-2.0.15"},nextItem:{title:"Real-time data warehouse in TikTok based on Apache Doris",permalink:"/blog/real-time-data-warehouse-in-TikTok-based-on-doris"}},s={authorsImageUrls:[void 0]},p=[{value:"Behavioral Changes",id:"behavioral-changes",level:2},{value:"New Features",id:"new-features",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Credits",id:"credits",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Dear community, We are excited to announce the official release of Apache Doris Flink Connector version 24.0.0 on September 5th, 2024. This release brings several enhancements and new capabilities, including support for Flink 1.20 and high-speed data retrieval from Doris via Arrow Flight SQL. Additionally, the FlinkCDC version required for full database synchronization has been upgraded to 3.1.x for optimal performance."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Download Link: ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/doris-flink-connector/releases/tag/24.0.0"},"https://github.com/apache/doris-flink-connector/releases/tag/24.0.0"))),(0,a.yg)("h2",{id:"behavioral-changes"},"Behavioral Changes"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"FlinkCDC Upgrade: To leverage the full potential of this release, the FlinkCDC version used for full database synchronization must be upgraded to 3.1.x. Due to the incompatibility between FlinkCDC 3.1.x and earlier versions (e.g., 2.4), running full database synchronization jobs will require a stateless restart after upgrading FlinkCDC. Please refer to the ",(0,a.yg)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/qYW5Bw0IqUHUc8bnfWOIog"},"Apache Flink CDC 3.1.0 Release Announcement")," for details on compatibility.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Version Renaming: To maintain consistency with other Connectors (e.g., Spark and Kafka) and account for the aforementioned incompatibilities, the Connector version has been renamed to the 24.x series. See the discussion thread ",(0,a.yg)("a",{parentName:"p",href:"https://lists.apache.org/thread/8tp215yk0tkgtdfkjdl4svvbljnmxzst"},"DISCUSS","]"," About the next version change of Connector")," for more information."))),(0,a.yg)("h2",{id:"new-features"},"New Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Supported Flink v1.20.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"DB2 Database synchronization is supported.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"CDC Schema Change enhancement supported the use of the JSQLParser framework for DDL.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Supported Stream Load with GZ compression.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Enabled Arrow Flight SQL integration for high-speed data retrieval from Doris."))),(0,a.yg)("h2",{id:"improvements"},"Improvements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Upgraded FlinkCDC  to 3.1.1.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"JDBC parameter configuration for DB2/Postgres/SQLServer synchronization.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Optimized batch writing mode.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Refined CDC synchronization logic.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Supported MySQL full database synchronization with ",(0,a.yg)("inlineCode",{parentName:"p"},"INTEGER")," type."))),(0,a.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Resolved serialization issues with ",(0,a.yg)("inlineCode",{parentName:"p"},"MAP")," subtypes of ",(0,a.yg)("inlineCode",{parentName:"p"},"DATE"),"/ ",(0,a.yg)("inlineCode",{parentName:"p"},"DATETIME"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Fixed FlinkSQL projection pushdown bugs")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Resolved ",(0,a.yg)("inlineCode",{parentName:"p"},"DECIMAL")," type sync issues with MongoDB")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Compatibility update for Doris arrow-based timestamp reading")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Fixed non-effective delete events in CDC full database synchronization")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Corrected schema change logic when default values are null"))),(0,a.yg)("h2",{id:"credits"},"Credits"),(0,a.yg)("p",null,"@bingquanzhao\u3001@DongLiang-0\u3001@JasonLeeCoding\u3001@JNSimba@MaoMiMao\u3001@qg-lin@tmc9031\u3001@vinlee19"))}u.isMDXComponent=!0}}]);