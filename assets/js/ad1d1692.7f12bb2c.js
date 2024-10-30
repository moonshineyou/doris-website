"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[591511],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>b});var n=a(296540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(a),h=o,b=m["".concat(p,".").concat(h)]||m[h]||c[h]||i;return a?n.createElement(b,r(r({ref:t},d),{},{components:a})):n.createElement(b,r({ref:t},d))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},689466:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(58168),o=(a(296540),a(15680));const i={title:"Tablet Local Debug",language:"en"},r=void 0,l={unversionedId:"admin-manual/maint-monitor/tablet-local-debug",id:"version-2.0/admin-manual/maint-monitor/tablet-local-debug",title:"Tablet Local Debug",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/admin-manual/maint-monitor/tablet-local-debug.md",sourceDirName:"admin-manual/maint-monitor",slug:"/admin-manual/maint-monitor/tablet-local-debug",permalink:"/docs/2.0/admin-manual/maint-monitor/tablet-local-debug",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Tablet Local Debug",language:"en"},sidebar:"docs",previous:{title:"Monitoring and alarming",permalink:"/docs/2.0/admin-manual/maint-monitor/monitor-alert"},next:{title:"Metadata Operations and Maintenance",permalink:"/docs/2.0/admin-manual/maint-monitor/metadata-operation"}},p={},s=[{value:"1. Get information about the tablet",id:"1-get-information-about-the-tablet",level:2},{value:"2. Load Tablet locally",id:"2-load-tablet-locally",level:2}],d={toc:s},m="wrapper";function c(e){let{components:t,...a}=e;return(0,o.yg)(m,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"tablet-local-debug"},"Tablet Local Debug"),(0,o.yg)("p",null,"During the online operation of Doris, various bugs may occur due to various reasons. For example: the replica is inconsistent, the data exists in the version diff, etc."),(0,o.yg)("p",null,"At this time, it is necessary to copy the copy data of the tablet online to the local environment for reproduction, and then locate the problem."),(0,o.yg)("h2",{id:"1-get-information-about-the-tablet"},"1. Get information about the tablet"),(0,o.yg)("p",null,"The tablet id can be confirmed by the BE log, and then the information can be obtained by the following command (assuming the tablet id is 10020)."),(0,o.yg)("p",null,"Get information such as DbId/TableId/PartitionId where the tablet is located."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> show tablet 10020\\G\n*************************** 1. row ***************************\n       DbName: default_cluster:db1\n    TableName: tbl1\nPartitionName: tbl1\n    IndexName: tbl1\n         DbId: 10004\n      TableId: 10016\n  PartitionId: 10015\n      IndexId: 10017\n       IsSync: true\n        Order: 1\n    DetailCmd: SHOW PROC '/dbs/10004/10016/partitions/10015/10017/10020';\n")),(0,o.yg)("p",null,"Execute ",(0,o.yg)("inlineCode",{parentName:"p"},"DetailCmd")," in the previous step to obtain information such as BackendId/SchemaHash."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql>  SHOW PROC '/dbs/10004/10016/partitions/10015/10017/10020'\\G\n*************************** 1. row ***************************\n        ReplicaId: 10021\n        BackendId: 10003\n          Version: 3\nLstSuccessVersion: 3\n LstFailedVersion: -1\n    LstFailedTime: NULL\n       SchemaHash: 785778507\n    LocalDataSize: 780\n   RemoteDataSize: 0\n         RowCount: 2\n            State: NORMAL\n            IsBad: false\n     VersionCount: 3\n         PathHash: 7390150550643804973\n          MetaUrl: http://192.168.10.1:8040/api/meta/header/10020\n CompactionStatus: http://192.168.10.1:8040/api/compaction/show?tablet_id=10020\n")),(0,o.yg)("p",null,"Create tablet snapshot and get table creation statement"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'mysql> admin copy tablet 10020 properties("backend_id" = "10003", "version" = "2")\\G\n*************************** 1. row ***************************\n         TabletId: 10020\n        BackendId: 10003\n               Ip: 192.168.10.1\n             Path: /path/to/be/storage/snapshot/20220830101353.2.3600\nExpirationMinutes: 60\n  CreateTableStmt: CREATE TABLE `tbl1` (\n  `k1` int(11) NULL,\n  `k2` int(11) NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`k1`, `k2`)\nDISTRIBUTED BY HASH(k1) BUCKETS 1\nPROPERTIES (\n"replication_num" = "1",\n"version_info" = "2"\n);\n')),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"admin copy tablet")," command can generate a snapshot file of the corresponding replica and version for the specified tablet. Snapshot files are stored in the ",(0,o.yg)("inlineCode",{parentName:"p"},"Path")," directory of the BE node indicated by the ",(0,o.yg)("inlineCode",{parentName:"p"},"Ip")," field."),(0,o.yg)("p",null,"There will be a directory named tablet id under this directory, which will be packaged as a whole for later use. (Note that the directory is kept for a maximum of 60 minutes, after which it is automatically deleted)."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"cd /path/to/be/storage/snapshot/20220830101353.2.3600\ntar czf 10020.tar.gz 10020/\n")),(0,o.yg)("p",null,"The command will also generate the table creation statement corresponding to the tablet at the same time. Note that this table creation statement is not the original table creation statement, its bucket number and replica number are both 1, and the ",(0,o.yg)("inlineCode",{parentName:"p"},"versionInfo")," field is specified. This table building statement is used later when loading the tablet locally."),(0,o.yg)("p",null,"So far, we have obtained all the necessary information, the list is as follows:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Packaged tablet data, such as 10020.tar.gz."),(0,o.yg)("li",{parentName:"ol"},"Create a table statement.")),(0,o.yg)("h2",{id:"2-load-tablet-locally"},"2. Load Tablet locally"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Build a local debugging environment"),(0,o.yg)("p",{parentName:"li"}," Deploy a single-node Doris cluster (1FE, 1BE) locally, and the deployment version is the same as the online cluster. If the online deployment version is DORIS-1.1.1, the local environment also deploys the DORIS-1.1.1 version.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Create a table"),(0,o.yg)("p",{parentName:"li"}," Create a table in the local environment using the create table statement from the previous step.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Get the tablet information of the newly created table"),(0,o.yg)("p",{parentName:"li"}," Because the number of buckets and replicas of the newly created table is 1, there will only be one tablet with one replica:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"mysql> show tablets from tbl1\\G\n*************************** 1. row ***************************\n               TabletId: 10017\n              ReplicaId: 10018\n              BackendId: 10003\n             SchemaHash: 44622287\n                Version: 1\n      LstSuccessVersion: 1\n       LstFailedVersion: -1\n          LstFailedTime: NULL\n          LocalDataSize: 0\n         RemoteDataSize: 0\n               RowCount: 0\n                  State: NORMAL\nLstConsistencyCheckTime: NULL\n           CheckVersion: -1\n           VersionCount: -1\n               PathHash: 7390150550643804973\n                MetaUrl: http://192.168.10.1:8040/api/meta/header/10017\n       CompactionStatus: http://192.168.10.1:8040/api/compaction/show?tablet_id=10017\n")),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"mysql> show tablet 10017\\G\n*************************** 1. row ***************************\n       DbName: default_cluster:db1\n    TableName: tbl1\nPartitionName: tbl1\n    IndexName: tbl1\n         DbId: 10004\n      TableId: 10015\n  PartitionId: 10014\n      IndexId: 10016\n       IsSync: true\n        Order: 0\n    DetailCmd: SHOW PROC '/dbs/10004/10015/partitions/10014/10016/10017';\n")),(0,o.yg)("p",{parentName:"li"},"Here we will record the following information:"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"TableId"),(0,o.yg)("li",{parentName:"ul"},"PartitionId"),(0,o.yg)("li",{parentName:"ul"},"TabletId"),(0,o.yg)("li",{parentName:"ul"},"SchemaHash")),(0,o.yg)("p",{parentName:"li"},"At the same time, we also need to go to the data directory of the BE node in the debugging environment to confirm the shard id where the new tablet is located:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"cd /path/to/storage/data/*/10017 && pwd\n")),(0,o.yg)("p",{parentName:"li"},"This command will enter the directory where the tablet 10017 is located and display the path. Here we will see a path similar to the following:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"/path/to/storage/data/0/10017\n")),(0,o.yg)("p",{parentName:"li"},"where ",(0,o.yg)("inlineCode",{parentName:"p"},"0")," is the shard id.\n")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Modify Tablet Data"),(0,o.yg)("p",{parentName:"li"},"Unzip the tablet data package obtained in the first step. The editor opens the 10017.hdr.json file, and modifies the following fields to the information obtained in the previous step:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},'"table_id":10015\n"partition_id":10014\n"tablet_id":10017\n"schema_hash":44622287\n"shard_id":0\n'))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Load the tablet"),(0,o.yg)("p",{parentName:"li"}," First, stop the debug environment's BE process (./bin/stop_be.sh). Then copy all the .dat files in the same level directory of the 10017.hdr.json file to the ",(0,o.yg)("inlineCode",{parentName:"p"},"/path/to/storage/data/0/10017/44622287")," directory. This directory is the directory where the debugging environment tablet we obtained in step 3 is located. ",(0,o.yg)("inlineCode",{parentName:"p"},"10017/44622287")," are the tablet id and schema hash respectively."),(0,o.yg)("p",{parentName:"li"}," Delete the original tablet meta with the ",(0,o.yg)("inlineCode",{parentName:"p"},"meta_tool")," tool. The tool is located in the ",(0,o.yg)("inlineCode",{parentName:"p"},"be/lib")," directory."),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"./lib/meta_tool --root_path=/path/to/storage --operation=delete_meta --tablet_id=10017 --schema_hash=44622287\n")),(0,o.yg)("p",{parentName:"li"},"Where ",(0,o.yg)("inlineCode",{parentName:"p"},"/path/to/storage")," is the data root directory of BE. If the deletion is successful, the delete successfully log will appear."),(0,o.yg)("p",{parentName:"li"},"Load the new tablet meta via the ",(0,o.yg)("inlineCode",{parentName:"p"},"meta_tool")," tool."),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"./lib/meta_tool --root_path=/path/to/storage --operation=load_meta --json_meta_path=/path/to/10017.hdr.json\n")),(0,o.yg)("p",{parentName:"li"},"If the load is successful, the load successfully log will appear.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Verification"),(0,o.yg)("p",{parentName:"li"}," Restart the debug environment's BE process (./bin/start_be.sh). Query the table, if correct, you can query the data of the loaded tablet, or reproduce the online problem."))))}c.isMDXComponent=!0}}]);