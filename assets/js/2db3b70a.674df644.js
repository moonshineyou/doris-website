"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[664472],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>v});var i=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),s=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(o.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,v=p["".concat(o,".").concat(m)]||p[m]||d[m]||a;return t?i.createElement(v,l(l({ref:n},c),{},{components:t})):i.createElement(v,l({ref:n},c))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=m;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u[p]="string"==typeof e?e:r,l[1]=u;for(var s=2;s<a;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},724639:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var i=t(58168),r=(t(296540),t(15680));const a={title:"width_bucket",language:"en"},l=void 0,u={unversionedId:"sql-manual/sql-functions/width-bucket",id:"version-1.2/sql-manual/sql-functions/width-bucket",title:"width_bucket",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/width-bucket.md",sourceDirName:"sql-manual/sql-functions",slug:"/sql-manual/sql-functions/width-bucket",permalink:"/docs/1.2/sql-manual/sql-functions/width-bucket",draft:!1,tags:[],version:"1.2",frontMatter:{title:"width_bucket",language:"en"},sidebar:"docs",previous:{title:"DIGITAL-MASKING",permalink:"/docs/1.2/sql-manual/sql-functions/digital-masking"},next:{title:"SET-PROPERTY",permalink:"/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY"}},o={},s=[{value:"width_bucket",id:"width_bucket",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,i.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"width_bucket"},"width_bucket"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"Constructs equi-width histograms, in which the histogram range is divided into intervals of identical size, and returns the bucket number into which the value of an expression falls, after it has been evaluated. The function returns an integer value or null (if any input is null)."),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"INT width_bucket(Expr expr, T min_value, T max_value, INT num_buckets)")),(0,r.yg)("h4",{id:"arguments"},"Arguments"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"expr")," -\nThe expression for which the histogram is created. This expression must evaluate to a numeric value or to a value that can be implicitly converted to a numeric value."),(0,r.yg)("p",null,"The value must be within the range of ",(0,r.yg)("inlineCode",{parentName:"p"},"-(2^53 - 1)")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"2^53 - 1")," (inclusive)."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"min_value")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"max_value")," -\nThe low and high end points of the acceptable range for the expression. The end points must also evaluate to numeric values and not be equal."),(0,r.yg)("p",null,"The low and high end points must be within the range of ",(0,r.yg)("inlineCode",{parentName:"p"},"-(2^53 - 1)")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"2^53 - 1")," (inclusive). In addition, the difference between these points must be less than ",(0,r.yg)("inlineCode",{parentName:"p"},"2^53")," (i.e. ",(0,r.yg)("inlineCode",{parentName:"p"},"abs(max_value - min_value) < 2^53)"),"."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"num_buckets")," -\nThe desired number of buckets; must be a positive integer value. A value from the expression is assigned to each bucket, and the function then returns the corresponding bucket number."),(0,r.yg)("h4",{id:"returned-value"},"Returned value"),(0,r.yg)("p",null,"It returns the bucket number into which the value of an expression falls."),(0,r.yg)("p",null,"When an expression falls outside the range, the function returns:"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"0")," if the expression is less than ",(0,r.yg)("inlineCode",{parentName:"p"},"min_value"),"."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"num_buckets + 1")," if the expression is greater than or equal to ",(0,r.yg)("inlineCode",{parentName:"p"},"max_value"),"."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"null")," if any input is ",(0,r.yg)("inlineCode",{parentName:"p"},"null"),"."),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'DROP TABLE IF EXISTS width_bucket_test;\n\nCREATE TABLE IF NOT EXISTS width_bucket_test (\n              `k1` int NULL COMMENT "",\n              `v1` date NULL COMMENT "",\n              `v2` double NULL COMMENT "",\n              `v3` bigint NULL COMMENT ""\n            ) ENGINE=OLAP\n            DUPLICATE KEY(`k1`)\n            DISTRIBUTED BY HASH(`k1`) BUCKETS 1\n            PROPERTIES (\n            "replication_allocation" = "tag.location.default: 1",\n            "storage_format" = "V2"\n            );\n\nINSERT INTO width_bucket_test VALUES (1, "2022-11-18", 290000.00, 290000),\n                                      (2, "2023-11-18", 320000.00, 320000),\n                                      (3, "2024-11-18", 399999.99, 399999), \n                                      (4, "2025-11-18", 400000.00, 400000), \n                                      (5, "2026-11-18", 470000.00, 470000), \n                                      (6, "2027-11-18", 510000.00, 510000), \n                                      (7, "2028-11-18", 610000.00, 610000), \n                                      (8, null, null, null);\n\nSELECT * FROM width_bucket_test ORDER BY k1;                                      \n\n+------+------------+-----------+--------+\n| k1   | v1         | v2        | v3     |\n+------+------------+-----------+--------+\n|    1 | 2022-11-18 |    290000 | 290000 |\n|    2 | 2023-11-18 |    320000 | 320000 |\n|    3 | 2024-11-18 | 399999.99 | 399999 |\n|    4 | 2025-11-18 |    400000 | 400000 |\n|    5 | 2026-11-18 |    470000 | 470000 |\n|    6 | 2027-11-18 |    510000 | 510000 |\n|    7 | 2028-11-18 |    610000 | 610000 |\n|    8 | NULL       |      NULL |   NULL |\n+------+------------+-----------+--------+\n\nSELECT k1, v1, v2, v3, width_bucket(v1, date(\'2023-11-18\'), date(\'2027-11-18\'), 4) AS w FROM width_bucket_test ORDER BY k1;\n\n+------+------------+-----------+--------+------+\n| k1   | v1         | v2        | v3     | w    |\n+------+------------+-----------+--------+------+\n|    1 | 2022-11-18 |    290000 | 290000 |    0 |\n|    2 | 2023-11-18 |    320000 | 320000 |    1 |\n|    3 | 2024-11-18 | 399999.99 | 399999 |    2 |\n|    4 | 2025-11-18 |    400000 | 400000 |    3 |\n|    5 | 2026-11-18 |    470000 | 470000 |    4 |\n|    6 | 2027-11-18 |    510000 | 510000 |    5 |\n|    7 | 2028-11-18 |    610000 | 610000 |    5 |\n|    8 | NULL       |      NULL |   NULL | NULL |\n+------+------------+-----------+--------+------+\n\nSELECT k1, v1, v2, v3, width_bucket(v2, 200000, 600000, 4) AS w FROM width_bucket_test ORDER BY k1;\n\n+------+------------+-----------+--------+------+\n| k1   | v1         | v2        | v3     | w    |\n+------+------------+-----------+--------+------+\n|    1 | 2022-11-18 |    290000 | 290000 |    1 |\n|    2 | 2023-11-18 |    320000 | 320000 |    2 |\n|    3 | 2024-11-18 | 399999.99 | 399999 |    2 |\n|    4 | 2025-11-18 |    400000 | 400000 |    3 |\n|    5 | 2026-11-18 |    470000 | 470000 |    3 |\n|    6 | 2027-11-18 |    510000 | 510000 |    4 |\n|    7 | 2028-11-18 |    610000 | 610000 |    5 |\n|    8 | NULL       |      NULL |   NULL | NULL |\n+------+------------+-----------+--------+------+\n\nSELECT k1, v1, v2, v3, width_bucket(v3, 200000, 600000, 4) AS w FROM width_bucket_test ORDER BY k1;\n\n+------+------------+-----------+--------+------+\n| k1   | v1         | v2        | v3     | w    |\n+------+------------+-----------+--------+------+\n|    1 | 2022-11-18 |    290000 | 290000 |    1 |\n|    2 | 2023-11-18 |    320000 | 320000 |    2 |\n|    3 | 2024-11-18 | 399999.99 | 399999 |    2 |\n|    4 | 2025-11-18 |    400000 | 400000 |    3 |\n|    5 | 2026-11-18 |    470000 | 470000 |    3 |\n|    6 | 2027-11-18 |    510000 | 510000 |    4 |\n|    7 | 2028-11-18 |    610000 | 610000 |    5 |\n|    8 | NULL       |      NULL |   NULL | NULL |\n+------+------------+-----------+--------+------+\n\n')),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("p",null,"WIDTH_BUCKET"))}d.isMDXComponent=!0}}]);