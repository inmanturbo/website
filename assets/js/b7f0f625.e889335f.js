"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[68292],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=l(r),f=n,h=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return r?o.createElement(h,i(i({ref:t},c),{},{components:r})):o.createElement(h,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},89651:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var o=r(83117),n=r(80102),a=(r(67294),r(3905)),i=["components"],u={slug:"Helm as a foundation",title:"Helm as a foundation",authors:["ornias"]},s=void 0,l={permalink:"/blog/Helm as a foundation",source:"@site/blog/06-06-2022-helm-foundation.md",title:"Helm as a foundation",description:"After some carefull consideration about how we want to move the project forward, we've decided to put our Helm Charts first and other solutions second.",date:"2022-11-02T11:12:22.006Z",formattedDate:"November 2, 2022",tags:[],readingTime:1.17,hasTruncateMarker:!1,authors:[{name:"Kjeld Schouten-Lebbing",title:"Founder of TrueCharts",url:"https://github.com/Ornias",imageURL:"https://github.com/Ornias.png",key:"ornias"}],frontMatter:{slug:"Helm as a foundation",title:"Helm as a foundation",authors:["ornias"]},prevItem:{title:"Docker-Compose on TrueNAS SCALE using TrueCharts",permalink:"/blog/Docker-Compose on TrueNAS SCALE using TrueCharts"},nextItem:{title:"Meet TrueCharts - the First App Store for TrueNAS SCALE",permalink:"/blog/Meet TrueCharts - the First App Store for TrueNAS SCALE"}},c={authorsImageUrls:[void 0]},p=[],m={toc:p};function f(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"After some carefull consideration about how we want to move the project forward, we've decided to put our Helm Charts first and other solutions second.\nOur reasoning to do this, is that we want to allow users to be more flexible in which kubernetes platform they use and experience all the awesome projects that are out there."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SCALE and TrueCharts")),(0,a.kt)("p",null,'What does this mean for our SCALE users? Not so much really: We will still fully support and build SCALE Apps.\nHowever, it does mean that we will more openly start calling our work "Charts" instead of "Apps" and some new Charts will not support SCALE out-of-the box.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Helm and TrueCharts")),(0,a.kt)("p",null,'We\'re also going to up our game considerably to support users wanting to customise the YAML directly with Helm. More Apps with more flexible configuration.\nAt the same time we\'re going to work on making the SCALE GUI generation more automated. While this might lead to a more "cluttered" GUI, it will bring things more in "sync" with the native Helm deployments we offer.'),(0,a.kt)("p",null,"For new developers all of this will offer a much easier experience: Just build the helm chart and submit the PR for it. No more bothering with being required to move through hunderds of rows of SCALE GUI description."),(0,a.kt)("p",null,"With all of these changes combined, we hope to being our awesome repository of Charts to more people, much faster!"))}f.isMDXComponent=!0}}]);