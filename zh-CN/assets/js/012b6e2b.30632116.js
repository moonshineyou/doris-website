"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[638101],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(t),g=a,y=c["".concat(i,".").concat(g)]||c[g]||u[g]||o;return t?r.createElement(y,l(l({ref:n},d),{},{components:t})):r.createElement(y,l({ref:n},d))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=g;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[c]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},831486:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=t(58168),a=(t(296540),t(15680));const o={title:"\u670d\u52a1 Crash \u60c5\u51b5\u4e0b\u5982\u4f55\u8fdb\u5165\u5bb9\u5668",language:"zh-CN"},l=void 0,p={unversionedId:"install/cluster-deployment/k8s-deploy/debug-crash",id:"version-2.0/install/cluster-deployment/k8s-deploy/debug-crash",title:"\u670d\u52a1 Crash \u60c5\u51b5\u4e0b\u5982\u4f55\u8fdb\u5165\u5bb9\u5668",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/install/cluster-deployment/k8s-deploy/debug-crash.md",sourceDirName:"install/cluster-deployment/k8s-deploy",slug:"/install/cluster-deployment/k8s-deploy/debug-crash",permalink:"/zh-CN/docs/2.0/install/cluster-deployment/k8s-deploy/debug-crash",draft:!1,tags:[],version:"2.0",frontMatter:{title:"\u670d\u52a1 Crash \u60c5\u51b5\u4e0b\u5982\u4f55\u8fdb\u5165\u5bb9\u5668",language:"zh-CN"},sidebar:"docs",previous:{title:"\u670d\u52a1\u6269\u7f29\u5bb9",permalink:"/zh-CN/docs/2.0/install/cluster-deployment/k8s-deploy/expansion-and-contraction"},next:{title:"Doris on AWS",permalink:"/zh-CN/docs/2.0/install/cluster-deployment/doris-on-aws"}},i={},s=[{value:"\u542f\u52a8 Debug \u6a21\u5f0f",id:"\u542f\u52a8-debug-\u6a21\u5f0f",level:2},{value:"\u9000\u51fa Debug \u6a21\u5f0f",id:"\u9000\u51fa-debug-\u6a21\u5f0f",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],d={toc:s},c="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u5728 k8s \u73af\u5883\u4e2d\u670d\u52a1\u56e0\u4e3a\u4e00\u4e9b\u9884\u671f\u4e4b\u5916\u7684\u4e8b\u60c5\u4f1a\u8fdb\u5165 ",(0,a.yg)("inlineCode",{parentName:"p"},"CrashLoopBackOff")," \u72b6\u6001\uff0c\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl get pod --namespace ${namespace}")," \u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u6307\u5b9a namespace \u4e0b\u7684 pod \u72b6\u6001\u548c pod_name\u3002"),(0,a.yg)("p",null,"\u5728\u8fd9\u79cd\u72b6\u6001\u4e0b\uff0c\u5355\u7eaf\u901a\u8fc7 describe \u548c logs \u547d\u4ee4\u65e0\u6cd5\u5224\u5b9a\u670d\u52a1\u51fa\u95ee\u9898\u7684\u539f\u56e0\u3002\u5f53\u670d\u52a1\u8fdb\u5165 ",(0,a.yg)("inlineCode",{parentName:"p"},"CrashLoopBackOff")," \u72b6\u6001\u65f6\uff0c\u9700\u8981\u6709\u4e00\u79cd\u673a\u5236\u5141\u8bb8\u90e8\u7f72\u670d\u52a1\u7684 pod \u8fdb\u5165 ",(0,a.yg)("inlineCode",{parentName:"p"},"running")," \u72b6\u6001\u65b9\u4fbf\u7528\u6237\u901a\u8fc7 exec \u8fdb\u5165\u5bb9\u5668\u5185\u8fdb\u884c debug\u3002"),(0,a.yg)("p",null,"doris-operator \u63d0\u4f9b\u4e86 ",(0,a.yg)("inlineCode",{parentName:"p"},"debug")," \u7684\u8fd0\u884c\u6a21\u5f0f\uff0c\u672c\u8d28\u4e0a\u662f\u901a\u8fc7 debug \u8fdb\u7a0b\u5360\u7528\u5bf9\u5e94\u8282\u70b9\u7684\u63a2\u6d3b\u7aef\u53e3\uff0c\u7ed5\u8fc7 k8s \u63a2\u6d3b\u673a\u5236\uff0c\u5236\u9020\u4e00\u4e2a\u5e73\u7a33\u8fd0\u884c\u7684\u5bb9\u5668\u73af\u5883\u6765\u65b9\u4fbf\u7528\u6237\u8fdb\u5165\u5e76\u5b9a\u4f4d\u95ee\u9898\u3002"),(0,a.yg)("p",null,"\u4e0b\u9762\u63cf\u8ff0\u4e86\u5f53\u670d\u52a1\u8fdb\u5165 ",(0,a.yg)("inlineCode",{parentName:"p"},"CrashLoopBackOff")," \u65f6\u5982\u4f55\u8fdb\u5165 debug \u6a21\u5f0f\u8fdb\u884c\u4eba\u5de5 debug\uff0c\u4ee5\u53ca\u89e3\u51b3\u540e\u5982\u4f55\u6062\u590d\u5230\u6b63\u5e38\u542f\u52a8\u72b6\u6001\u3002"),(0,a.yg)("h2",{id:"\u542f\u52a8-debug-\u6a21\u5f0f"},"\u542f\u52a8 Debug \u6a21\u5f0f"),(0,a.yg)("p",null,"\u5f53\u670d\u52a1\u4e00\u4e2a pod \u8fdb\u5165 CrashLoopBackOff \u6216\u8005\u6b63\u5e38\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u65e0\u6cd5\u518d\u6b63\u5e38\u542f\u52a8\u65f6\uff0c\u901a\u8fc7\u4e00\u4e0b\u6b65\u9aa4\u8ba9\u670d\u52a1\u8fdb\u5165 ",(0,a.yg)("inlineCode",{parentName:"p"},"debug")," \u6a21\u5f0f\uff0c\u8fdb\u884c\u624b\u52a8\u542f\u52a8\u670d\u52a1\u67e5\u627e\u95ee\u9898\u3002"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"1.\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u7ed9\u8fd0\u884c\u6709\u95ee\u9898\u7684 pod \u8fdb\u884c\u6dfb\u52a0 annnotation")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"$ kubectl annotate pod ${pod_name} --namespace ${namespace} selectdb.com.doris/runmode=debug\n")),(0,a.yg)("p",null,"\u5f53\u670d\u52a1\u8fdb\u884c\u4e0b\u4e00\u6b21\u91cd\u542f\u65f6\u5019\uff0c\u670d\u52a1\u4f1a\u68c0\u6d4b\u5230\u6807\u8bc6 ",(0,a.yg)("inlineCode",{parentName:"p"},"debug")," \u6a21\u5f0f\u542f\u52a8\u7684 annotation \u5c31\u4f1a\u8fdb\u5165 ",(0,a.yg)("inlineCode",{parentName:"p"},"debug")," \u6a21\u5f0f\u542f\u52a8\uff0cpod \u72b6\u6001\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"running"),"\u3002"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"2.\u5f53\u670d\u52a1\u8fdb\u5165 ",(0,a.yg)("inlineCode",{parentName:"strong"},"debug")," \u6a21\u5f0f\uff0c\u6b64\u65f6\u670d\u52a1\u7684 pod \u663e\u793a\u4e3a\u6b63\u5e38\u72b6\u6001\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u8fdb\u5165 pod \u5185\u90e8")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"$ kubectl --namespace ${namespace} exec -ti ${pod_name} bash\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"3. ",(0,a.yg)("inlineCode",{parentName:"strong"},"debug")," \u4e0b\u624b\u52a8\u542f\u52a8\u670d\u52a1\uff0c\u5f53\u7528\u6237\u8fdb\u5165 pod \u5185\u90e8\uff0c\u901a\u8fc7\u4fee\u6539\u5bf9\u5e94\u914d\u7f6e\u6587\u4ef6\u6709\u5173\u7aef\u53e3\u8fdb\u884c\u624b\u52a8\u6267\u884c ",(0,a.yg)("inlineCode",{parentName:"strong"},"start_xx.sh")," \u811a\u672c\uff0c\u811a\u672c\u76ee\u5f55\u4e3a ",(0,a.yg)("inlineCode",{parentName:"strong"},"/opt/apache-doris/xx/bin")," \u4e0b\u3002")),(0,a.yg)("p",null,"FE \u9700\u8981\u4fee\u6539 ",(0,a.yg)("inlineCode",{parentName:"p"},"query_port"),"\uff0cBE \u9700\u8981\u4fee\u6539 ",(0,a.yg)("inlineCode",{parentName:"p"},"heartbeat_service_port"),"\n\u4e3b\u8981\u662f\u907f\u514d",(0,a.yg)("inlineCode",{parentName:"p"},"debug"),"\u6a21\u5f0f\u4e0b\u8fd8\u80fd\u901a\u8fc7 service \u8bbf\u95ee\u5230 crash \u7684\u8282\u70b9\u5bfc\u81f4\u8bef\u5bfc\u6d41\u3002"),(0,a.yg)("h2",{id:"\u9000\u51fa-debug-\u6a21\u5f0f"},"\u9000\u51fa Debug \u6a21\u5f0f"),(0,a.yg)("p",null,"\u5f53\u670d\u52a1\u5b9a\u4f4d\u5230\u95ee\u9898\u540e\u9700\u8981\u9000\u51fa ",(0,a.yg)("inlineCode",{parentName:"p"},"debug")," \u8fd0\u884c\uff0c\u6b64\u65f6\u53ea\u9700\u8981\u6309\u7167\u5982\u4e0b\u547d\u4ee4\u5220\u9664\u5bf9\u5e94\u7684 pod\uff0c\u670d\u52a1\u5c31\u4f1a\u6309\u7167\u6b63\u5e38\u7684\u6a21\u5f0f\u542f\u52a8\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"$ kubectl delete pod ${pod_name} --namespace ${namespace}\n")),(0,a.yg)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u8fdb\u5165 pod \u5185\u90e8\u540e\uff0c\u9700\u8981\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u7684\u7aef\u53e3\u4fe1\u606f\uff0c\u624d\u80fd\u624b\u52a8\u542f\u52a8 \u76f8\u5e94\u7684 Doris \u7ec4\u4ef6")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"FE \u9700\u8981\u4fee\u6539\u9ed8\u8ba4\u8def\u5f84\u4e3a\uff1a",(0,a.yg)("inlineCode",{parentName:"li"},"/opt/apache-doris/fe/conf/fe.conf")," \u7684 ",(0,a.yg)("inlineCode",{parentName:"li"},"query_port=9030")," \u914d\u7f6e\u3002"),(0,a.yg)("li",{parentName:"ul"},"BE \u9700\u8981\u4fee\u6539\u9ed8\u8ba4\u8def\u5f84\u4e3a\uff1a",(0,a.yg)("inlineCode",{parentName:"li"},"/opt/apache-doris/be/conf/be.conf")," \u7684 ",(0,a.yg)("inlineCode",{parentName:"li"},"heartbeat_service_port=9050")," \u914d\u7f6e\u3002")))}u.isMDXComponent=!0}}]);