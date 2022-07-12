"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[21494],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=c(r),f=o,d=h["".concat(u,".").concat(f)]||h[f]||p[f]||a;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},99395:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],s={slug:"Introducing: TrueCharts Container Repository",title:"Introducing: TrueCharts Container Repository",authors:["ornias"]},u=void 0,c={permalink:"/blog/Introducing: TrueCharts Container Repository",source:"@site/blog/24-01-2022-introducing-tccr.md",title:"Introducing: TrueCharts Container Repository",description:"The last year we\u2019ve grown at an ever-increasing pace, doubling code and users every few months. Some issues could be fixed quickly and easily, while other issues were vastly more complex. One of those issues happened to be the convoluted mess of different container sources.",date:"2022-07-12T23:19:51.000Z",formattedDate:"July 12, 2022",tags:[],readingTime:1.28,hasTruncateMarker:!1,authors:[{name:"Kjeld Schouten-Lebbing",title:"Founder of TrueCharts",url:"https://github.com/Ornias",imageURL:"https://github.com/Ornias.png",key:"ornias"}],frontMatter:{slug:"Introducing: TrueCharts Container Repository",title:"Introducing: TrueCharts Container Repository",authors:["ornias"]},prevItem:{title:"Meet TrueCharts - the First App Store for TrueNAS SCALE",permalink:"/blog/Meet TrueCharts - the First App Store for TrueNAS SCALE"}},l={authorsImageUrls:[void 0]},p=[],h={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The last year we\u2019ve grown at an ever-increasing pace, doubling code and users every few months. Some issues could be fixed quickly and easily, while other issues were vastly more complex. One of those issues happened to be the convoluted mess of different container sources."),(0,a.kt)("p",null,"These container sources all had different tag formats, rate limits, downtimes, and one even decided to start deleting tags, leading to applications breaking. This, obviously, was not the experience we wanted our users to have."),(0,a.kt)("p",null,"Therefore, we\u2019ve spent the better part of December setting up our own container distribution system. The TrueCharts Container Repository, or TCCR in short. TCCR is a combination of containers we\u2019ve fully built ourselves and containers we mirror, screen and re-tag into a standardized format. Doing this also allowed us to ensure ",(0,a.kt)("em",{parentName:"p"},"all")," containers are available from multiple sources: GHCR, Quay and Dockerhub."),(0,a.kt)("p",null,"To achieve this, we\u2019ve partnered with scarf.sh, which allows us to easily switch between container sources for our repository, while also giving us something new: metrics. We can finally see which containers are popular and which are not, but we can also see if there are people still using older versions of applications. This allows us to improve our decision-making process: which apps to work on and which older versions to keep supporting."),(0,a.kt)("p",null,"All of you have (under the hood), already been running TCCR and we\u2019ve only had a handful of issues related to it. We\u2019re happy to have created something that again, highlights us as the number 1 source for TrueNAS SCALE Applications."))}f.isMDXComponent=!0}}]);