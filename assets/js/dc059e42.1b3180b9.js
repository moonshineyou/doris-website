"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[813961],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>f});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",_={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(t),d=i,f=p["".concat(l,".").concat(d)]||p[d]||_[d]||o;return t?r.createElement(f,s(s({ref:n},c),{},{components:t})):r.createElement(f,s({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},168152:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>_,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=t(58168),i=(t(296540),t(15680));const o={title:"IPV4_STRING_TO_NUM_OR_DEFAULT",language:"en"},s=void 0,a={unversionedId:"sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-default",id:"version-3.0/sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-default",title:"IPV4_STRING_TO_NUM_OR_DEFAULT",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-default.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-default",permalink:"/docs/3.0/sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-default",draft:!1,tags:[],version:"3.0",frontMatter:{title:"IPV4_STRING_TO_NUM_OR_DEFAULT",language:"en"},sidebar:"docs",previous:{title:"IPV4_STRING_TO_NUM",permalink:"/docs/3.0/sql-manual/sql-functions/ip-functions/ipv4-string-to-num"},next:{title:"IPV4_STRING_TO_NUM_OR_NULL",permalink:"/docs/3.0/sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-null"}},l={},u=[{value:"IPV4_STRING_TO_NUM_OR_DEFAULT",id:"ipv4_string_to_num_or_default",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function _(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"ipv4_string_to_num_or_default"},"IPV4_STRING_TO_NUM_OR_DEFAULT"),(0,i.yg)("p",null,"IPV4_STRING_TO_NUM_OR_DEFAULT"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"BIGINT IPV4_STRING_TO_NUM_OR_DEFAULT(VARCHAR ipv4_string)")),(0,i.yg)("p",null,"Takes a string containing an IPv4 address in the format A.B.C.D (dot-separated numbers in decimal form). Returns a BIGINT number representing the corresponding IPv4 address in big endian."),(0,i.yg)("h4",{id:"notice"},"Notice"),(0,i.yg)("p",null,"If the input string is not a valid IPv4 address or ",(0,i.yg)("inlineCode",{parentName:"p"},"NULL"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"0")," is returned."),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select ipv4_string_to_num_or_default('192.168.0.1'); \n+----------------------------------------------+ \n| ipv4_string_to_num_or_default('192.168.0.1') | \n+----------------------------------------------+ \n| 3232235521                                   | \n+----------------------------------------------+ \n1 row in set (0.01 sec)\n\nmysql> select str, ipv4_string_to_num_or_default(str) from ipv4_str; \n+-----------------+------------------------------------+ \n|str              | ipv4_string_to_num_or_default(str) | \n+-----------------+------------------------------------+ \n| 0.0.0.0         | 0                                  | \n| 127.0.0.1       | 2130706433                         | \n| 255.255.255.255 | 4294967295                         | \n| invalid         | 0                                  | \n+-----------------+------------------------------------+ \n4 rows in set (0.01 sec)\n\nmysql> select addr_src, ipv4_string_to_num_or_default(addr_src) from ipv4_string_test where addr_src is null;\n+----------+-----------------------------------------+\n| addr_src | ipv4_string_to_num_or_default(addr_src) |\n+----------+-----------------------------------------+\n| NULL     |                                       0 |\n+----------+-----------------------------------------+\n1 row in set (0.09 sec)\n")),(0,i.yg)("h3",{id:"keywords"},"Keywords"),(0,i.yg)("p",null,"IPV4_STRING_TO_NUM_OR_DEFAULT, IP"))}_.isMDXComponent=!0}}]);