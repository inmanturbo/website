"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[92700],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97384:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var n=r(83117),a=r(80102),s=(r(67294),r(3905)),i=["components"],o={},l="self-service-password",c={unversionedId:"charts/incubator/self-service-password/index",id:"charts/incubator/self-service-password/index",title:"self-service-password",description:"Self Service Password is a PHP application that allows users to change their password in an LDAP directory.",source:"@site/docs/charts/incubator/self-service-password/index.md",sourceDirName:"charts/incubator/self-service-password",slug:"/charts/incubator/self-service-password/",permalink:"/docs/charts/incubator/self-service-password/",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/incubator/self-service-password/index.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/incubator/radicale/CHANGELOG"},next:{title:"Changelog",permalink:"/docs/charts/incubator/self-service-password/CHANGELOG"}},p={},u=[{value:"Source Code",id:"source-code",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Installing the Chart",id:"installing-the-chart",level:2},{value:"Upgrading, Rolling Back and Uninstalling the Chart",id:"upgrading-rolling-back-and-uninstalling-the-chart",level:2},{value:"Connecting to other apps",id:"connecting-to-other-apps",level:5},{value:"Support",id:"support",level:2}],d={toc:u};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"self-service-password"},"self-service-password"),(0,s.kt)("p",null,"Self Service Password is a PHP application that allows users to change their password in an LDAP directory."),(0,s.kt)("p",null,"TrueCharts are designed to be installed as TrueNAS SCALE app only. We can not guarantee this charts works as a stand-alone helm installation.\n",(0,s.kt)("strong",{parentName:"p"},"This chart is not maintained by the upstream project and any issues with the chart should be raised ",(0,s.kt)("a",{parentName:"strong",href:"https://github.com/truecharts/apps/issues/new/choose"},"here"))),(0,s.kt)("h2",{id:"source-code"},"Source Code"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/tiredofit/docker-self-service-password"},"https://github.com/tiredofit/docker-self-service-password")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/tiredofit/self-service-password"},"https://hub.docker.com/r/tiredofit/self-service-password")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://self-service-password.readthedocs.io/en/latest"},"https://self-service-password.readthedocs.io/en/latest"))),(0,s.kt)("h2",{id:"requirements"},"Requirements"),(0,s.kt)("p",null,"Kubernetes: ",(0,s.kt)("inlineCode",{parentName:"p"},">=1.16.0-0")),(0,s.kt)("h2",{id:"dependencies"},"Dependencies"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Repository"),(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Version"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://library-charts.truecharts.org"},"https://library-charts.truecharts.org")),(0,s.kt)("td",{parentName:"tr",align:null},"common"),(0,s.kt)("td",{parentName:"tr",align:null},"10.4.4")))),(0,s.kt)("h2",{id:"installing-the-chart"},"Installing the Chart"),(0,s.kt)("p",null,"To install this App on TrueNAS SCALE check our ",(0,s.kt)("a",{parentName:"p",href:"https://truecharts.org/manual/Quick-Start%20Guides/02-Installing-an-App/"},"Quick-Start Guide"),"."),(0,s.kt)("h2",{id:"upgrading-rolling-back-and-uninstalling-the-chart"},"Upgrading, Rolling Back and Uninstalling the Chart"),(0,s.kt)("p",null,"To upgrade, rollback or delete this App from TrueNAS SCALE check our ",(0,s.kt)("a",{parentName:"p",href:"https://truecharts.org/manual/Quick-Start%20Guides/04-Upgrade-rollback-delete-an-App/"},"Quick-Start Guide"),"."),(0,s.kt)("h5",{id:"connecting-to-other-apps"},"Connecting to other apps"),(0,s.kt)("p",null,"If you need to connect this App to other Apps on TrueNAS SCALE, please refer to our ",(0,s.kt)("a",{parentName:"p",href:"https://truecharts.org/manual/Quick-Start%20Guides/06-linking-apps/"},"Linking Apps Internally")," quick-start guide."),(0,s.kt)("h2",{id:"support"},"Support"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Please check our ",(0,s.kt)("a",{parentName:"li",href:"https://truecharts.org/manual/Quick-Start%20Guides/01-Adding-TrueCharts/"},"quick-start guides")," first."),(0,s.kt)("li",{parentName:"ul"},"See the ",(0,s.kt)("a",{parentName:"li",href:"https://truecharts.org"},"Wiki")),(0,s.kt)("li",{parentName:"ul"},"Check our ",(0,s.kt)("a",{parentName:"li",href:"https://discord.gg/tVsPTHWTtr"},"Discord")),(0,s.kt)("li",{parentName:"ul"},"Open a ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/truecharts/apps/issues/new/choose"},"issue"))),(0,s.kt)("hr",null),(0,s.kt)("p",null,"All Rights Reserved - The TrueCharts Project"))}h.isMDXComponent=!0}}]);