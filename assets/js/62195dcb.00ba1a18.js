"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[22342],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),h=c(r),d=n,g=h["".concat(o,".").concat(d)]||h[d]||p[d]||l;return r?a.createElement(g,i(i({ref:t},s),{},{components:r})):a.createElement(g,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=h;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},68571:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var a=r(83117),n=r(80102),l=(r(67294),r(3905)),i=["components"],u={},o="guacd",c={unversionedId:"charts/stable/guacd/index",id:"charts/stable/guacd/index",title:"guacd",description:"Guacd - Apache Guacamole is a clientless remote desktop gateway.",source:"@site/docs/charts/stable/guacd/index.md",sourceDirName:"charts/stable/guacd",slug:"/charts/stable/guacd/",permalink:"/docs/charts/stable/guacd/",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/guacd/index.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/stable/guacamole-client/CHANGELOG"},next:{title:"Changelog",permalink:"/docs/charts/stable/guacd/CHANGELOG"}},s={},p=[{value:"Source Code",id:"source-code",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Installing the Chart",id:"installing-the-chart",level:2},{value:"Upgrading, Rolling Back and Uninstalling the Chart",id:"upgrading-rolling-back-and-uninstalling-the-chart",level:2},{value:"Connecting to other apps",id:"connecting-to-other-apps",level:5},{value:"Support",id:"support",level:2}],h={toc:p};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"guacd"},"guacd"),(0,l.kt)("p",null,"Guacd - Apache Guacamole is a clientless remote desktop gateway."),(0,l.kt)("p",null,"TrueCharts are designed to be installed as TrueNAS SCALE app only. We can not guarantee this charts works as a stand-alone helm installation.\n",(0,l.kt)("strong",{parentName:"p"},"This chart is not maintained by the upstream project and any issues with the chart should be raised ",(0,l.kt)("a",{parentName:"strong",href:"https://github.com/truecharts/apps/issues/new/choose"},"here"))),(0,l.kt)("h2",{id:"source-code"},"Source Code"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/guacamole/guacd"},"https://hub.docker.com/r/guacamole/guacd")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/guacamole-server"},"https://github.com/apache/guacamole-server"))),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("p",null,"Kubernetes: ",(0,l.kt)("inlineCode",{parentName:"p"},">=1.16.0-0")),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Repository"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Version"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://library-charts.truecharts.org"},"https://library-charts.truecharts.org")),(0,l.kt)("td",{parentName:"tr",align:null},"common"),(0,l.kt)("td",{parentName:"tr",align:null},"10.4.4")))),(0,l.kt)("h2",{id:"installing-the-chart"},"Installing the Chart"),(0,l.kt)("p",null,"To install this App on TrueNAS SCALE check our ",(0,l.kt)("a",{parentName:"p",href:"https://truecharts.org/manual/Quick-Start%20Guides/02-Installing-an-App/"},"Quick-Start Guide"),"."),(0,l.kt)("h2",{id:"upgrading-rolling-back-and-uninstalling-the-chart"},"Upgrading, Rolling Back and Uninstalling the Chart"),(0,l.kt)("p",null,"To upgrade, rollback or delete this App from TrueNAS SCALE check our ",(0,l.kt)("a",{parentName:"p",href:"https://truecharts.org/manual/Quick-Start%20Guides/04-Upgrade-rollback-delete-an-App/"},"Quick-Start Guide"),"."),(0,l.kt)("h5",{id:"connecting-to-other-apps"},"Connecting to other apps"),(0,l.kt)("p",null,"If you need to connect this App to other Apps on TrueNAS SCALE, please refer to our ",(0,l.kt)("a",{parentName:"p",href:"https://truecharts.org/manual/Quick-Start%20Guides/06-linking-apps/"},"Linking Apps Internally")," quick-start guide."),(0,l.kt)("h2",{id:"support"},"Support"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Please check our ",(0,l.kt)("a",{parentName:"li",href:"https://truecharts.org/manual/Quick-Start%20Guides/01-Adding-TrueCharts/"},"quick-start guides")," first."),(0,l.kt)("li",{parentName:"ul"},"See the ",(0,l.kt)("a",{parentName:"li",href:"https://truecharts.org"},"Wiki")),(0,l.kt)("li",{parentName:"ul"},"Check our ",(0,l.kt)("a",{parentName:"li",href:"https://discord.gg/tVsPTHWTtr"},"Discord")),(0,l.kt)("li",{parentName:"ul"},"Open a ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/truecharts/apps/issues/new/choose"},"issue"))),(0,l.kt)("hr",null),(0,l.kt)("p",null,"All Rights Reserved - The TrueCharts Project"))}d.isMDXComponent=!0}}]);