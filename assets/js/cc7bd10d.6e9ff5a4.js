"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[286623],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var a=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),p=o,g=u["".concat(d,".").concat(p)]||u[p]||m[p]||i;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},200045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(58168),o=(n(296540),n(15680));const i={title:"Compiling with Docker (Recommended)",language:"en"},r=void 0,l={unversionedId:"install/source-install/compilation-with-docker",id:"install/source-install/compilation-with-docker",title:"Compiling with Docker (Recommended)",description:"\x3c!--",source:"@site/docs/install/source-install/compilation-with-docker.md",sourceDirName:"install/source-install",slug:"/install/source-install/compilation-with-docker",permalink:"/docs/dev/install/source-install/compilation-with-docker",draft:!1,tags:[],version:"current",frontMatter:{title:"Compiling with Docker (Recommended)",language:"en"},sidebar:"docs",next:{title:"Compiling with LDB Toolchain (Recommended)",permalink:"/docs/dev/install/source-install/compilation-with-ldb-toolchain"}},d={},s=[{value:"Install Docker",id:"install-docker",level:2},{value:"Download build image",id:"download-build-image",level:2},{value:"Compile Doris",id:"compile-doris",level:2},{value:"1. Download Doris source code",id:"1-download-doris-source-code",level:3},{value:"2. Run build image",id:"2-run-build-image",level:3},{value:"3. Execute the build",id:"3-execute-the-build",level:3},{value:"Build your own development environment image",id:"build-your-own-development-environment-image",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"This guide is about how to compile Doris using the official compilation image provided. As this image is maintained by the Apache Doris team and is regularly updated with the necessary dependencies, it is the recommended way of compilation for users."),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Currently, this is not supported in the compute-storage decoupled mode.")),(0,o.yg)("h2",{id:"install-docker"},"Install Docker"),(0,o.yg)("p",null,"In CentOS, execute the following command: "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"yum install docker\n")),(0,o.yg)("p",null,"Or refer to the ",(0,o.yg)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"official Docker installation doc"),"."),(0,o.yg)("h2",{id:"download-build-image"},"Download build image"),(0,o.yg)("p",null,'For different versions of Doris, you need to download different build images. The "apache/doris:build-env-ldb-toolchain-latest" image is used for compiling the latest master code, and it is regularly updated to align with the master.'),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Image Version"),(0,o.yg)("th",{parentName:"tr",align:null},"Doris Version"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"apache/doris:build-env-for-2.0"),(0,o.yg)("td",{parentName:"tr",align:null},"2.0.x")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"apache/doris:build-env-for-2.0-no-avx2"),(0,o.yg)("td",{parentName:"tr",align:null},"2.0.x")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"apache/doris:build-env-ldb-toolchain-latest"),(0,o.yg)("td",{parentName:"tr",align:null},"master")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"apache/doris:build-env-ldb-toolchain-no-avx2-latest"),(0,o.yg)("td",{parentName:"tr",align:null},"master")))),(0,o.yg)("p",null,"Take Doris 2.0 as an example, download and check the correponding Docker image."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"# Choose docker.io/apache/doris:build-env-for-2.0\n$ docker pull apache/doris:build-env-for-2.0\n\n# Check if it is downloaded\n$ docker images\nREPOSITORY      TAG                  IMAGE ID        CREATED       SIZE\napache/doris    build-env-for-2.0    f29cf1979dba    3 days ago    3.3GB\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note:")," "),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},'Download the right image version for the Doris version that you\'re working with. The image version number is aligned with the Doris version number. For example, you should use "apache/doris:build-env-for-2.0" to compile Doris 2.0.'),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"apache/doris:build-env-ldb-toolchain-latest")," is used for compiling the latest master code and is updated along with the master. You can check the update time in the ",(0,o.yg)("inlineCode",{parentName:"li"},"docker/README.md")," file."),(0,o.yg)("li",{parentName:"ul"},'Images with "no-avx2" in their names contain third-party libraries that can run on CPUs that do not support AVX2 instructions. Using these images, you can compile Doris with the "USE_AVX2=0".'),(0,o.yg)("li",{parentName:"ul"},"For information about changes in the compilation image, please see ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/blob/master/thirdparty/CHANGELOG.md"},"ChangeLog"),"."),(0,o.yg)("li",{parentName:"ul"},"The Docker compilation image includes both JDK 8 and JDK 17. You can check the default JDK version by running ",(0,o.yg)("inlineCode",{parentName:"li"},"java -version"),", and switch between versions using the following commands. For versions earlier than 2.1 (inclusive), please use JDK 8. For versions later than 3.0 (inclusive) or the master branch, please use JDK 17.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"# Switch to JDK 8\nexport JAVA_HOME=/usr/lib/jvm/java-1.8.0\nexport PATH=$JAVA_HOME/bin/:$PATH\n\n# Switch to JDK 17\nexport JAVA_HOME=/usr/lib/jvm/jdk-17.0.2/\nexport PATH=$JAVA_HOME/bin/:$PATH\n")),(0,o.yg)("h2",{id:"compile-doris"},"Compile Doris"),(0,o.yg)("h3",{id:"1-download-doris-source-code"},"1. Download Doris source code"),(0,o.yg)("p",null,"Log in to the host machine and obtain the latest code from the Doris 2.0 branch via git clone."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Plain"},"$ git clone -b branch-2.0 https://github.com/apache/doris.git\n")),(0,o.yg)("p",null,'After downloading, assume that the source code path is in the "doris-branch-2.0" directory.'),(0,o.yg)("h3",{id:"2-run-build-image"},"2. Run build image"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Plain"},"# Pre-build a Maven .m2 directory on the host machine to reuse the downloaded Java libraries in Docker.\nmkdir ~/.m2 \n\n# Run the build image\ndocker run -it --network=host --name mydocker -v ~/.m2:/root/.m2 -v ~/doris-branch-2.0:/root/doris-branch-2.0/ apache/doris:build-env-for-2.0  \n\n# After successful execution, it should be in the Docker.\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note:")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"It is recommended to run the image by mounting the local Doris source code directory. This way, the compiled binary files will be stored on the host machine and will not be lost when the container exits."),(0,o.yg)("li",{parentName:"ul"},"It is also recommended to mount the ",(0,o.yg)("inlineCode",{parentName:"li"},".m2")," directory of Maven in the image to a directory on the host machine. This prevents repeated downloads of Maven dependencies each time the image is started for compilation."),(0,o.yg)("li",{parentName:"ul"},"When running the image for compilation, if there is a need to download additional files, it is suggested to use the host mode. The host mode does not require the use of ",(0,o.yg)("inlineCode",{parentName:"li"},"-p")," for port mapping and allows sharing the network IP and ports with the host machine."),(0,o.yg)("li",{parentName:"ul"},"Below are explanations for some of the parameters used in the ",(0,o.yg)("inlineCode",{parentName:"li"},"docker run")," command:")),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"-v"),(0,o.yg)("td",{parentName:"tr",align:null},"Mount a storage volume to a specific directory within a container.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"--name"),(0,o.yg)("td",{parentName:"tr",align:null},"Specify a name for the container to use the assigned name in future container management.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"--network"),(0,o.yg)("td",{parentName:"tr",align:null},'Container network settings: "bridge" uses the Docker daemon\'s specified bridge network, "host" allows the container to use the host\'s network, "container:NAME_or_ID" uses the network of another container by sharing IP and port resources, "none" enables the container to use its own network (similar to --net=bridge) without any additional configuration.')))),(0,o.yg)("h3",{id:"3-execute-the-build"},"3. Execute the build"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Plain"},"# By default, it builds the AVX2 version.\n$ sh build.sh\n\n# If you need the no AVX2 version, add USE_AVX2=0.\n$ USE_AVX2=0 sh build.sh\n\n# To compile a debug version of BE, add BUILD_TYPE=Debug.\n$ BUILD_TYPE=Debug sh build.sh\n")),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("strong",{parentName:"p"},"To check if the machine supports AVX2:")),(0,o.yg)("p",{parentName:"admonition"},"$ cat /proc/cpuinfo | grep avx2")),(0,o.yg)("p",null,"After compilation, the output file is in the ",(0,o.yg)("inlineCode",{parentName:"p"},"output/")," directory."),(0,o.yg)("h2",{id:"build-your-own-development-environment-image"},"Build your own development environment image"),(0,o.yg)("p",null,"You can create a Doris development environment image by referring to the ",(0,o.yg)("inlineCode",{parentName:"p"},"docker/README.md")," file."))}m.isMDXComponent=!0}}]);