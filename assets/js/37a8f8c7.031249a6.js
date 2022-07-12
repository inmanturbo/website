"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6877],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79327:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return c}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],u={slug:"Docker-Compose on TrueNAS SCALE using TrueCharts",title:"Docker-Compose on TrueNAS SCALE using TrueCharts",authors:["ornias"]},s=void 0,l={permalink:"/blog/Docker-Compose on TrueNAS SCALE using TrueCharts",source:"@site/blog/06-03-2022-docker-compose.md",title:"Docker-Compose on TrueNAS SCALE using TrueCharts",description:"From the early stages of TrueNAS SCALE development, we\u2019ve read many complaints about the fact docker-compose wasn\u2019t supported by TrueNAS SCALE. It\u2019s understandable, as it\u2019s one of the most used docker deployment options for home users.",date:"2022-07-12T23:19:51.000Z",formattedDate:"July 12, 2022",tags:[],readingTime:1.63,hasTruncateMarker:!1,authors:[{name:"Kjeld Schouten-Lebbing",title:"Founder of TrueCharts",url:"https://github.com/Ornias",imageURL:"https://github.com/Ornias.png",key:"ornias"}],frontMatter:{slug:"Docker-Compose on TrueNAS SCALE using TrueCharts",title:"Docker-Compose on TrueNAS SCALE using TrueCharts",authors:["ornias"]},nextItem:{title:"Helm as a foundation",permalink:"/blog/Helm as a foundation"}},p={authorsImageUrls:[void 0]},c=[],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"From the early stages of TrueNAS SCALE development, we\u2019ve read many complaints about the fact docker-compose wasn\u2019t supported by TrueNAS SCALE. It\u2019s understandable, as it\u2019s one of the most used docker deployment options for home users."),(0,a.kt)("p",null,"The TrueNAS SCALE community has figured out interesting ways to enable Docker-Compose. But this approaches all have a number of downsides:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It's not future proof, it can be nuked permanently and without warning, with any TrueNAS SCALE update.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It inherently breaks SCALE Applications and often even requires those to be disabled.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"There is no support for this work-around."))),(0,a.kt)("p",null,"To solve this problem, we\u2019ve decided to take matters into our own hands. We are glad to finally announce our solution:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Docker-Compose Application for TrueNAS SCALE by TrueCharts")),(0,a.kt)("p",null,"It\u2019s designed from the ground up, to give users nearly the same experience as running Docker-Compose on the host system, and even contains some nice tweaks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It\u2019s fully backed by TrueNAS SCALE Applications, so it will survive updates.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"There is a GUI option to input your Docker-Compose file, that will survive reboots.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Completely self-contained, and will not modify the default docker stack.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Fully compatible to run alongside other TrueNAS SCALE Applications, so you can easily migrate your Docker-Compose applications to TrueNAS SCALE Applications.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We are your support if the application does not work as advertised."))),(0,a.kt)("p",null,"All with just one caveat:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Docker-Compose command has to be executed from inside the container shell.")),(0,a.kt)("p",null,"We based our solution on the official Docker-in-Docker container by Docker, with some added tooling to optimize it for single-container deployments. Perhaps most interestingly, the container has native access to ",(0,a.kt)("inlineCode",{parentName:"p"},"/mnt"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"/root")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"/cluster"),", so you can work with your containers like you\u2019re working on the host."),(0,a.kt)("p",null,"With this in place we hope that TrueNAS SCALE can finally start to fill the big shoes of solutions like Unraid and TrueNAS Core and give the community what they want, not just what they need!"))}d.isMDXComponent=!0}}]);