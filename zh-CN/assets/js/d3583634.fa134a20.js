"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[465649],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>s});var t=a(296540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=t.createContext({}),g=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},u=function(e){var n=g(e.components);return t.createElement(o.Provider,{value:n},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),y=g(a),d=l,s=y["".concat(o,".").concat(d)]||y[d]||m[d]||r;return a?t.createElement(s,i(i({ref:n},u),{},{components:a})):t.createElement(s,i({ref:n},u))}));function s(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[y]="string"==typeof e?e:l,i[1]=p;for(var g=2;g<r;g++)i[g]=a[g];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},797205:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>g});var t=a(58168),l=(a(296540),a(15680));const r={title:"Delete \u64cd\u4f5c",language:"zh-CN"},i=void 0,p={unversionedId:"data-operate/delete/delete-manual",id:"data-operate/delete/delete-manual",title:"Delete \u64cd\u4f5c",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data-operate/delete/delete-manual.md",sourceDirName:"data-operate/delete",slug:"/data-operate/delete/delete-manual",permalink:"/zh-CN/docs/dev/data-operate/delete/delete-manual",draft:!1,tags:[],version:"current",frontMatter:{title:"Delete \u64cd\u4f5c",language:"zh-CN"},sidebar:"docs",previous:{title:"\u4e3b\u952e\u6a21\u578b\u7684\u66f4\u65b0\u4e8b\u52a1",permalink:"/zh-CN/docs/dev/data-operate/update/unique-update-transaction"},next:{title:"\u6279\u91cf\u5220\u9664",permalink:"/zh-CN/docs/dev/data-operate/delete/batch-delete-manual"}},o={},g=[{value:"\u901a\u8fc7\u6307\u5b9a\u8fc7\u6ee4\u8c13\u8bcd\u6765\u5220\u9664",id:"\u901a\u8fc7\u6307\u5b9a\u8fc7\u6ee4\u8c13\u8bcd\u6765\u5220\u9664",level:2},{value:"\u5fc5\u987b\u7684\u53c2\u6570",id:"\u5fc5\u987b\u7684\u53c2\u6570",level:3},{value:"\u53ef\u9009\u7684\u53c2\u6570",id:"\u53ef\u9009\u7684\u53c2\u6570",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:3},{value:"\u901a\u8fc7\u4f7f\u7528 Using \u5b50\u53e5\u6765\u5220\u9664",id:"\u901a\u8fc7\u4f7f\u7528-using-\u5b50\u53e5\u6765\u5220\u9664",level:2},{value:"\u5fc5\u987b\u7684\u53c2\u6570",id:"\u5fc5\u987b\u7684\u53c2\u6570-1",level:3},{value:"\u53ef\u9009\u7684\u53c2\u6570",id:"\u53ef\u9009\u7684\u53c2\u6570-1",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879-1",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b-1",level:3},{value:"\u7ed3\u679c\u8fd4\u56de",id:"\u7ed3\u679c\u8fd4\u56de",level:2},{value:"\u6267\u884c\u6210\u529f",id:"\u6267\u884c\u6210\u529f",level:3},{value:"\u63d0\u4ea4\u6210\u529f\uff0c\u4f46\u672a\u53ef\u89c1",id:"\u63d0\u4ea4\u6210\u529f\u4f46\u672a\u53ef\u89c1",level:3},{value:"\u63d0\u4ea4\u5931\u8d25\uff0c\u4e8b\u52a1\u53d6\u6d88",id:"\u63d0\u4ea4\u5931\u8d25\u4e8b\u52a1\u53d6\u6d88",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3},{value:"\u76f8\u5173\u914d\u7f6e",id:"\u76f8\u5173\u914d\u7f6e",level:2},{value:"\u67e5\u770b\u5386\u53f2\u8bb0\u5f55",id:"\u67e5\u770b\u5386\u53f2\u8bb0\u5f55",level:2}],u={toc:g},y="wrapper";function m(e){let{components:n,...a}=e;return(0,l.yg)(y,(0,t.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Delete \u64cd\u4f5c\u8bed\u53e5\u901a\u8fc7 MySQL \u534f\u8bae\uff0c\u5bf9\u6307\u5b9a\u7684 table \u6216\u8005 partition \u4e2d\u7684\u6570\u636e\u8fdb\u884c\u6309\u6761\u4ef6\u5220\u9664\u3002Delete \u5220\u9664\u64cd\u4f5c\u4e0d\u540c\u4e8e\u57fa\u4e8e\u5bfc\u5165\u7684\u6279\u91cf\u5220\u9664\uff0c\u5b83\u7c7b\u4f3c Insert into \u8bed\u53e5\uff0c\u662f\u4e00\u4e2a\u540c\u6b65\u8fc7\u7a0b\u3002\u6240\u6709\u7684 Delete \u64cd\u4f5c\u5728 Doris \u4e2d\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u5bfc\u5165\u4f5c\u4e1a\uff0c\u4e00\u822c Delete \u8bed\u53e5\u9700\u8981\u6307\u5b9a\u8868\u548c\u5206\u533a\u4ee5\u53ca\u5220\u9664\u7684\u6761\u4ef6\u6765\u7b5b\u9009\u8981\u5220\u9664\u7684\u6570\u636e\uff0c\u5e76\u5c06\u4f1a\u540c\u65f6\u5220\u9664 base \u8868\u548c rollup \u8868\u7684\u6570\u636e\u3002"),(0,l.yg)("p",null,"Delete \u64cd\u4f5c\u7684\u8bed\u6cd5\u8be6\u89c1 ",(0,l.yg)("a",{parentName:"p",href:"../../sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/DELETE"},"DELETE")," \u8bed\u6cd5\u3002\u4e0d\u540c\u4e8e Insert into \u547d\u4ee4\uff0cdelete \u4e0d\u80fd\u624b\u52a8\u6307\u5b9a",(0,l.yg)("inlineCode",{parentName:"p"},"label"),"\uff0c\u6709\u5173 label \u7684\u6982\u5ff5\u53ef\u4ee5\u67e5\u770b ",(0,l.yg)("a",{parentName:"p",href:"../../data-operate/import/insert-into-manual"},"Insert Into")," \u6587\u6863\u3002"),(0,l.yg)("h2",{id:"\u901a\u8fc7\u6307\u5b9a\u8fc7\u6ee4\u8c13\u8bcd\u6765\u5220\u9664"},"\u901a\u8fc7\u6307\u5b9a\u8fc7\u6ee4\u8c13\u8bcd\u6765\u5220\u9664"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM table_name [table_alias]\n    [PARTITION partition_name | PARTITIONS (partition_name [, partition_name])]\n    WHERE column_name op { value | value_list } [ AND column_name op { value | value_list } ...];\n")),(0,l.yg)("h3",{id:"\u5fc5\u987b\u7684\u53c2\u6570"},"\u5fc5\u987b\u7684\u53c2\u6570"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"table_name: \u6307\u5b9a\u9700\u8981\u5220\u9664\u6570\u636e\u7684\u8868")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"column_name: \u5c5e\u4e8e table_name \u7684\u5217")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"op: \u903b\u8f91\u6bd4\u8f83\u64cd\u4f5c\u7b26\uff0c\u53ef\u9009\u7c7b\u578b\u5305\u62ec\uff1a=, >, <, >=, <=, !=, in, not in")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"value | value_list: \u505a\u903b\u8f91\u6bd4\u8f83\u7684\u503c\u6216\u503c\u5217\u8868"))),(0,l.yg)("h3",{id:"\u53ef\u9009\u7684\u53c2\u6570"},"\u53ef\u9009\u7684\u53c2\u6570"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"PARTITION partition_name | PARTITIONS (partition_name ","[, partition_name]","): \u6307\u5b9a\u6267\u884c\u5220\u9664\u6570\u636e\u7684\u5206\u533a\u540d\uff0c\u5982\u679c\u8868\u4e0d\u5b58\u5728\u6b64\u5206\u533a\uff0c\u5219\u62a5\u9519")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"table_alias: \u8868\u7684\u522b\u540d"))),(0,l.yg)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u4f7f\u7528\u8868\u6a21\u578b Aggregate \u65f6\uff0c\u53ea\u80fd\u6307\u5b9a Key \u5217\u4e0a\u7684\u6761\u4ef6\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5f53\u9009\u5b9a\u7684 Key \u5217\u4e0d\u5b58\u5728\u4e8e\u67d0\u4e2a Rollup \u4e2d\u65f6\uff0c\u65e0\u6cd5\u8fdb\u884c Delete\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u6761\u4ef6\u4e4b\u95f4\u53ea\u80fd\u662f\u201c\u4e0e\u201d\u7684\u5173\u7cfb\u3002\u82e5\u5e0c\u671b\u8fbe\u6210\u201c\u6216\u201d\u7684\u5173\u7cfb\uff0c\u9700\u8981\u5c06\u6761\u4ef6\u5206\u5199\u5728\u4e24\u4e2a DELETE \u8bed\u53e5\u4e2d\uff1b")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5982\u679c\u4e3a\u5206\u533a\u8868\uff0c\u9700\u8981\u6307\u5b9a\u5206\u533a\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\uff0cDoris \u4f1a\u4ece\u6761\u4ef6\u4e2d\u63a8\u65ad\u51fa\u5206\u533a\u3002\u4e24\u79cd\u60c5\u51b5\u4e0b\uff0cDoris \u65e0\u6cd5\u4ece\u6761\u4ef6\u4e2d\u63a8\u65ad\u51fa\u5206\u533a\uff1a1) \u6761\u4ef6\u4e2d\u4e0d\u5305\u542b\u5206\u533a\u5217\uff1b2) \u5206\u533a\u5217\u7684 op \u4e3a not in\u3002\u5f53\u5206\u533a\u8868\u672a\u6307\u5b9a\u5206\u533a\uff0c\u6216\u8005\u65e0\u6cd5\u4ece\u6761\u4ef6\u4e2d\u63a8\u65ad\u5206\u533a\u7684\u65f6\u5019\uff0c\u9700\u8981\u8bbe\u7f6e\u4f1a\u8bdd\u53d8\u91cf delete_without_partition \u4e3a true\uff0c\u6b64\u65f6 Delete \u4f1a\u5e94\u7528\u5230\u6240\u6709\u5206\u533a\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u8be5\u8bed\u53e5\u53ef\u80fd\u4f1a\u964d\u4f4e\u6267\u884c\u540e\u4e00\u6bb5\u65f6\u95f4\u5185\u7684\u67e5\u8be2\u6548\u7387\u3002\u5f71\u54cd\u7a0b\u5ea6\u53d6\u51b3\u4e8e\u8bed\u53e5\u4e2d\u6307\u5b9a\u7684\u5220\u9664\u6761\u4ef6\u7684\u6570\u91cf\u3002\u6307\u5b9a\u7684\u6761\u4ef6\u8d8a\u591a\uff0c\u5f71\u54cd\u8d8a\u5927\u3002"))),(0,l.yg)("h3",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"1. \u5220\u9664 my_table partition p1 \u4e2d k1 \u5217\u503c\u4e3a 3 \u7684\u6570\u636e\u884c")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM my_table PARTITION p1\n    WHERE k1 = 3;\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},'2. \u5220\u9664 my_table partition p1 \u4e2d k1 \u5217\u503c\u5927\u4e8e\u7b49\u4e8e 3 \u4e14 k2 \u5217\u503c\u4e3a "abc" \u7684\u6570\u636e\u884c')),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'DELETE FROM my_table PARTITION p1\nWHERE k1 = 3 AND k2 = "abc";\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},'3. \u5220\u9664 my_table partition p1, p2 \u4e2d k1 \u5217\u503c\u5927\u4e8e\u7b49\u4e8e 3 \u4e14 k2 \u5217\u503c\u4e3a "abc" \u7684\u6570\u636e\u884c')),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'DELETE FROM my_table PARTITIONS (p1, p2)\nWHERE k1 = 3 AND k2 = "abc";\n')),(0,l.yg)("h2",{id:"\u901a\u8fc7\u4f7f\u7528-using-\u5b50\u53e5\u6765\u5220\u9664"},"\u901a\u8fc7\u4f7f\u7528 Using \u5b50\u53e5\u6765\u5220\u9664"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM table_name [table_alias]\n    [PARTITION partition_name | PARTITIONS (partition_name [, partition_name])]\n    [USING additional_tables]\n    WHERE condition\n")),(0,l.yg)("h3",{id:"\u5fc5\u987b\u7684\u53c2\u6570-1"},"\u5fc5\u987b\u7684\u53c2\u6570"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"table_name: \u6307\u5b9a\u9700\u8981\u5220\u9664\u6570\u636e\u7684\u8868")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"WHERE condition: \u6307\u5b9a\u4e00\u4e2a\u7528\u4e8e\u9009\u62e9\u5220\u9664\u884c\u7684\u6761\u4ef6"))),(0,l.yg)("h3",{id:"\u53ef\u9009\u7684\u53c2\u6570-1"},"\u53ef\u9009\u7684\u53c2\u6570"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"PARTITION partition_name | PARTITIONS (partition_name ","[, partition_name]","): \u6307\u5b9a\u6267\u884c\u5220\u9664\u6570\u636e\u7684\u5206\u533a\u540d\uff0c\u5982\u679c\u8868\u4e0d\u5b58\u5728\u6b64\u5206\u533a\uff0c\u5219\u62a5\u9519")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"table_alias: \u8868\u7684\u522b\u540d"))),(0,l.yg)("h3",{id:"\u6ce8\u610f\u4e8b\u9879-1"},"\u6ce8\u610f\u4e8b\u9879"),(0,l.yg)("p",null,"\u6b64\u79cd\u5f62\u5f0f\u53ea\u80fd\u5728 UNIQUE KEY \u6a21\u578b\u8868\u4e0a\u4f7f\u7528"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u53ea\u80fd\u5728\u8868\u6a21\u578b UNIQUE Key \u8868\u6a21\u578b\u4e0a\u4f7f\u7528\uff0c\u53ea\u80fd\u6307\u5b9a key \u5217\u4e0a\u7684\u6761\u4ef6\u3002")),(0,l.yg)("h3",{id:"\u4f7f\u7528\u793a\u4f8b-1"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.yg)("p",null,"\u4f7f\u7528",(0,l.yg)("inlineCode",{parentName:"p"},"t2"),"\u548c",(0,l.yg)("inlineCode",{parentName:"p"},"t3"),"\u8868\u8fde\u63a5\u7684\u7ed3\u679c\uff0c\u5220\u9664",(0,l.yg)("inlineCode",{parentName:"p"},"t1"),"\u4e2d\u7684\u6570\u636e\uff0c\u5220\u9664\u7684\u8868\u53ea\u652f\u6301 unique \u6a21\u578b"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},"-- \u521b\u5efat1, t2, t3\u4e09\u5f20\u8868\nCREATE TABLE t1\n  (id INT, c1 BIGINT, c2 STRING, c3 DOUBLE, c4 DATE)\nUNIQUE KEY (id)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1', \"function_column.sequence_col\" = \"c4\");\n\nCREATE TABLE t2\n  (id INT, c1 BIGINT, c2 STRING, c3 DOUBLE, c4 DATE)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1');\n\nCREATE TABLE t3\n  (id INT)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1');\n\n-- \u63d2\u5165\u6570\u636e\nINSERT INTO t1 VALUES\n  (1, 1, '1', 1.0, '2000-01-01'),\n  (2, 2, '2', 2.0, '2000-01-02'),\n  (3, 3, '3', 3.0, '2000-01-03');\n\nINSERT INTO t2 VALUES\n  (1, 10, '10', 10.0, '2000-01-10'),\n  (2, 20, '20', 20.0, '2000-01-20'),\n  (3, 30, '30', 30.0, '2000-01-30'),\n  (4, 4, '4', 4.0, '2000-01-04'),\n  (5, 5, '5', 5.0, '2000-01-05');\n\nINSERT INTO t3 VALUES\n  (1),\n  (4),\n  (5);\n\n-- \u5220\u9664 t1 \u4e2d\u7684\u6570\u636e\nDELETE FROM t1\n  USING t2 INNER JOIN t3 ON t2.id = t3.id\n  WHERE t1.id = t2.id;\n")),(0,l.yg)("p",null,"\u9884\u671f\u7ed3\u679c\u4e3a\uff0c\u5220\u9664\u4e86",(0,l.yg)("inlineCode",{parentName:"p"},"t1"),"\u8868",(0,l.yg)("inlineCode",{parentName:"p"},"id"),"\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"1"),"\u7684\u5217"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"+----+----+----+--------+------------+\n| id | c1 | c2 | c3     | c4         |\n+----+----+----+--------+------------+\n| 2  | 2  | 2  |    2.0 | 2000-01-02 |\n| 3  | 3  | 3  |    3.0 | 2000-01-03 |\n+----+----+----+--------+------------+\n")),(0,l.yg)("h2",{id:"\u7ed3\u679c\u8fd4\u56de"},"\u7ed3\u679c\u8fd4\u56de"),(0,l.yg)("p",null,"Delete \u547d\u4ee4\u662f\u4e00\u4e2a SQL \u547d\u4ee4\uff0c\u8fd4\u56de\u7ed3\u679c\u662f\u540c\u6b65\u7684\uff0c\u5206\u4e3a\u4ee5\u4e0b\u51e0\u79cd\uff1a"),(0,l.yg)("h3",{id:"\u6267\u884c\u6210\u529f"},"\u6267\u884c\u6210\u529f"),(0,l.yg)("p",null,"\u5982\u679c Delete \u987a\u5229\u6267\u884c\u5b8c\u6210\u5e76\u53ef\u89c1\uff0c\u5c06\u8fd4\u56de\u4e0b\u5217\u7ed3\u679c\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"Query OK"),"\u8868\u793a\u6210\u529f"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},"mysql delete from test_tbl PARTITION p1 where k1 = 1;\nQuery OK, 0 rows affected (0.04 sec)\n{'label':'delete_e7830c72-eb14-4cb9-bbb6-eebd4511d251', 'status':'VISIBLE', 'txnId':'4005'}\n")),(0,l.yg)("h3",{id:"\u63d0\u4ea4\u6210\u529f\u4f46\u672a\u53ef\u89c1"},"\u63d0\u4ea4\u6210\u529f\uff0c\u4f46\u672a\u53ef\u89c1"),(0,l.yg)("p",null,"Doris \u7684\u4e8b\u52a1\u63d0\u4ea4\u5206\u4e3a\u4e24\u6b65\uff1a\u63d0\u4ea4\u548c\u53d1\u5e03\u7248\u672c\uff0c\u53ea\u6709\u5b8c\u6210\u4e86\u53d1\u5e03\u7248\u672c\u6b65\u9aa4\uff0c\u7ed3\u679c\u624d\u5bf9\u7528\u6237\u662f\u53ef\u89c1\u7684\u3002\u82e5\u5df2\u7ecf\u63d0\u4ea4\u6210\u529f\u4e86\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u8ba4\u4e3a\u6700\u7ec8\u4e00\u5b9a\u4f1a\u53d1\u5e03\u6210\u529f\uff0cDoris \u4f1a\u5c1d\u8bd5\u5728\u63d0\u4ea4\u5b8c\u540e\u7b49\u5f85\u53d1\u5e03\u4e00\u6bb5\u65f6\u95f4\uff0c\u5982\u679c\u8d85\u65f6\u540e\u5373\u4f7f\u53d1\u5e03\u7248\u672c\u8fd8\u672a\u5b8c\u6210\u4e5f\u4f1a\u4f18\u5148\u8fd4\u56de\u7ed9\u7528\u6237\uff0c\u63d0\u793a\u7528\u6237\u63d0\u4ea4\u5df2\u7ecf\u5b8c\u6210\u3002\u82e5\u5982\u679c Delete \u5df2\u7ecf\u63d0\u4ea4\u5e76\u6267\u884c\uff0c\u4f46\u662f\u4ecd\u672a\u53d1\u5e03\u7248\u672c\u548c\u53ef\u89c1\uff0c\u5c06\u8fd4\u56de\u4e0b\u5217\u7ed3\u679c"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql delete from test_tbl PARTITION p1 where k1 = 1;\nQuery OK, 0 rows affected (0.04 sec)\n{'label':'delete_e7830c72-eb14-4cb9-bbb6-eebd4511d251', 'status':'COMMITTED', 'txnId':'4005', 'err':'delete job is committed but may be taking effect later' }\n")),(0,l.yg)("p",null,"\u7ed3\u679c\u4f1a\u540c\u65f6\u8fd4\u56de\u4e00\u4e2a json \u5b57\u7b26\u4e32\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"affected rows"),"\uff1a\u8868\u793a\u6b64\u6b21\u5220\u9664\u5f71\u54cd\u7684\u884c\uff0c\u7531\u4e8e Doris \u7684\u5220\u9664\u76ee\u524d\u662f\u903b\u8f91\u5220\u9664\uff0c\u56e0\u6b64\u5bf9\u4e8e\u8fd9\u4e2a\u503c\u662f\u6052\u4e3a 0\uff1b")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"label"),"\uff1a\u81ea\u52a8\u751f\u6210\u7684 label\uff0c\u662f\u8be5\u5bfc\u5165\u4f5c\u4e1a\u7684\u6807\u8bc6\u3002\u6bcf\u4e2a\u5bfc\u5165\u4f5c\u4e1a\uff0c\u90fd\u6709\u4e00\u4e2a\u5728\u5355 Database \u5185\u90e8\u552f\u4e00\u7684 Label\uff1b")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"status"),"\uff1a\u8868\u793a\u6570\u636e\u5220\u9664\u662f\u5426\u53ef\u89c1\uff0c\u5982\u679c\u53ef\u89c1\u5219\u663e\u793a",(0,l.yg)("inlineCode",{parentName:"p"},"VISIBLE"),"\uff0c\u5982\u679c\u4e0d\u53ef\u89c1\u5219\u663e\u793a",(0,l.yg)("inlineCode",{parentName:"p"},"COMMITTED"),"\uff1b")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"txnId"),"\uff1a\u8fd9\u4e2a Delete job \u5bf9\u5e94\u7684\u4e8b\u52a1 id\uff1b")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"err"),"\uff1a\u5b57\u6bb5\u4f1a\u663e\u793a\u4e00\u4e9b\u672c\u6b21\u5220\u9664\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"))),(0,l.yg)("h3",{id:"\u63d0\u4ea4\u5931\u8d25\u4e8b\u52a1\u53d6\u6d88"},"\u63d0\u4ea4\u5931\u8d25\uff0c\u4e8b\u52a1\u53d6\u6d88"),(0,l.yg)("p",null,"\u5982\u679c Delete \u8bed\u53e5\u6ca1\u6709\u63d0\u4ea4\u6210\u529f\uff0c\u5c06\u4f1a\u88ab Doris \u81ea\u52a8\u4e2d\u6b62\uff0c\u8fd4\u56de\u4e0b\u5217\u7ed3\u679c"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql delete from test_tbl partition p1 where k1  80;\nERROR 1064 (HY000): errCode = 2, detailMessage = {\u9519\u8bef\u539f\u56e0}\n")),(0,l.yg)("p",null,"\u6bd4\u5982\u8bf4\u4e00\u4e2a\u8d85\u65f6\u7684\u5220\u9664\uff0c\u5c06\u4f1a\u8fd4\u56de ",(0,l.yg)("inlineCode",{parentName:"p"},"timeout")," \u65f6\u95f4\u548c\u672a\u5b8c\u6210\u7684",(0,l.yg)("inlineCode",{parentName:"p"},"(tablet=replica)")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql delete from test_tbl partition p1 where k1  80;\nERROR 1064 (HY000): errCode = 2, detailMessage = failed to delete replicas from job: 4005, Unfinished replicas:10000=60000, 10001=60000, 10002=60000\n")),(0,l.yg)("h3",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.yg)("p",null,"\u5bf9\u4e8e Delete \u64cd\u4f5c\u8fd4\u56de\u7ed3\u679c\u7684\u6b63\u786e\u5904\u7406\u903b\u8f91\u4e3a\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5982\u679c\u8fd4\u56de\u7ed3\u679c\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"ERROR 1064 (HY000)"),"\uff0c\u5219\u8868\u793a\u5220\u9664\u5931\u8d25\uff1b")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5982\u679c\u8fd4\u56de\u7ed3\u679c\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"Query OK"),"\uff0c\u5219\u8868\u793a\u5220\u9664\u6267\u884c\u6210\u529f\uff1b"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5982\u679c",(0,l.yg)("inlineCode",{parentName:"p"},"status"),"\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"COMMITTED"),"\uff0c\u8868\u793a\u6570\u636e\u4ecd\u4e0d\u53ef\u89c1\uff0c\u7528\u6237\u53ef\u4ee5\u7a0d\u7b49\u4e00\u6bb5\u65f6\u95f4\u518d\u7528",(0,l.yg)("inlineCode",{parentName:"p"},"show delete"),"\u547d\u4ee4\u67e5\u770b\u7ed3\u679c\uff1b")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5982\u679c",(0,l.yg)("inlineCode",{parentName:"p"},"status"),"\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"VISIBLE"),"\uff0c\u8868\u793a\u6570\u636e\u5220\u9664\u6210\u529f\u3002"))))),(0,l.yg)("h2",{id:"\u76f8\u5173\u914d\u7f6e"},"\u76f8\u5173\u914d\u7f6e"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"TIMEOUT \u914d\u7f6e")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"insert_timeout"),(0,l.yg)("p",{parentName:"li"},"\u56e0\u4e3a Delete \u672c\u8eab\u662f\u4e00\u4e2a SQL \u547d\u4ee4\u4e14\u88ab\u89c6\u4e3a\u4e00\u79cd\u7279\u6b8a\u7684\u5bfc\u5165\uff0c\u56e0\u6b64\u5220\u9664\u8bed\u53e5\u4f1a\u53d7 Session \u4e2d\u7684",(0,l.yg)("inlineCode",{parentName:"p"},"insert_timeout"),"\u503c\u5f71\u54cd\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,l.yg)("inlineCode",{parentName:"p"},"SET insert_timeout = xxx"),"\u6765\u589e\u52a0\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u79d2\u3002"))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"IN \u8c13\u8bcd\u914d\u7f6e")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"max_allowed_in_element_num_of_delete")),(0,l.yg)("p",{parentName:"li"},"\u5982\u679c\u7528\u6237\u5728\u4f7f\u7528 in \u8c13\u8bcd\u65f6\u9700\u8981\u5360\u7528\u7684\u5143\u7d20\u6bd4\u8f83\u591a\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u6b64\u9879\u8c03\u6574\u5141\u8bb8\u643a\u5e26\u7684\u5143\u7d20\u4e0a\u9650\uff0c\u9ed8\u8ba4\u503c\u4e3a 1024\u3002"))),(0,l.yg)("h2",{id:"\u67e5\u770b\u5386\u53f2\u8bb0\u5f55"},"\u67e5\u770b\u5386\u53f2\u8bb0\u5f55"),(0,l.yg)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 show delete \u8bed\u53e5\u67e5\u770b\u5386\u53f2\u4e0a\u5df2\u6267\u884c\u5b8c\u6210\u7684\u5220\u9664\u8bb0\u5f55\u3002"),(0,l.yg)("p",null,"\u8bed\u6cd5\u5982\u4e0b"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW DELETE [FROM db_name]\n")),(0,l.yg)("p",null,"\u4f7f\u7528\u793a\u4f8b"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql show delete from test_db;\n+-----------+---------------+---------------------+-----------------+----------+\n| TableName | PartitionName | CreateTime          | DeleteCondition | State    |\n+-----------+---------------+---------------------+-----------------+----------+\n| empty_tbl | p3            | 2020-04-15 23:09:35 | k1 EQ "1"       | FINISHED |\n| test_tbl  | p4            | 2020-04-15 23:09:53 | k1 GT "80"      | FINISHED |\n+-----------+---------------+---------------------+-----------------+----------+\n2 rows in set (0.00 sec)\n')))}m.isMDXComponent=!0}}]);