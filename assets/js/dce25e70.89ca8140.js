"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[58235],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55102:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={},s=void 0,c={unversionedId:"charts/stable/omada-controller/installation_notes",id:"charts/stable/omada-controller/installation_notes",title:"installation_notes",description:"Installation Notes",source:"@site/docs/charts/stable/omada-controller/installation_notes.md",sourceDirName:"charts/stable/omada-controller",slug:"/charts/stable/omada-controller/installation_notes",permalink:"/docs/charts/stable/omada-controller/installation_notes",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/omada-controller/installation_notes.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/stable/omada-controller/CHANGELOG"},next:{title:"ombi",permalink:"/docs/charts/stable/ombi/"}},u={},p=[{value:"Installation Notes",id:"installation-notes",level:2},{value:"Finding APs / Omada Discovery Utility",id:"finding-aps--omada-discovery-utility",level:2}],d={toc:p};function m(t){var e=t.components,l=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"installation-notes"},"Installation Notes"),(0,o.kt)("p",null,"Our chart by default runs on interal port ",(0,o.kt)("inlineCode",{parentName:"p"},"443")," however those not running ",(0,o.kt)("inlineCode",{parentName:"p"},"Ingress")," may run into issues with other processes requesting port ",(0,o.kt)("inlineCode",{parentName:"p"},"443"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The Solution")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Advanced Settings")),(0,o.kt)("li",{parentName:"ul"},"Change ",(0,o.kt)("inlineCode",{parentName:"li"},"Target Port")," to 8043 to match the ",(0,o.kt)("inlineCode",{parentName:"li"},"external")," port as below")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Omada-HTTPS-8043",src:n(21927).Z,width:"1054",height:"1194"})),(0,o.kt)("h2",{id:"finding-aps--omada-discovery-utility"},"Finding APs / Omada Discovery Utility"),(0,o.kt)("p",null,"By default the ",(0,o.kt)("inlineCode",{parentName:"p"},"omada-controller")," chart doesn't support discovery by APs on the same network."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The solution")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One must use the ",(0,o.kt)("a",{parentName:"li",href:"https://www.tp-link.com/us/support/download/omada-software-controller/#Omada_Discovery_Utility"},(0,o.kt)("inlineCode",{parentName:"a"},"Omada Discovery Utility"))," and point APs to your ",(0,o.kt)("inlineCode",{parentName:"li"},"omada-controller"),"."),(0,o.kt)("li",{parentName:"ul"},"Please follow the directions on the ",(0,o.kt)("a",{parentName:"li",href:"https://www.tp-link.com/us/support/download/omada-software-controller/#Omada_Discovery_Utility"},"TP-Link Website")," to download and use this utility. They have a nice ",(0,o.kt)("a",{parentName:"li",href:"https://www.tp-link.com/ca/support/faq/3087/"},"FAQ")," that may be of use.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Omada-Discovery-Utility",src:n(63867).Z,width:"897",height:"627"})))}m.isMDXComponent=!0},63867:function(t,e,n){e.Z=n.p+"assets/images/Omada-Discovery-Utility-620d14c73fd9ab7ca0a9e02f9823f72b.png"},21927:function(t,e,n){e.Z=n.p+"assets/images/Omada-HTTPS-8043-067198ac174579ad98f4bb9afd5a1835.png"}}]);