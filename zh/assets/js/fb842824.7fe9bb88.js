"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[89870],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),f=i,m=d["".concat(u,".").concat(f)]||d[f]||l[f]||a;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},907:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l}});var n=r(83117),i=r(80102),a=(r(67294),r(3905)),s=["components"],o={},u="08 - Installing Traefik",p={unversionedId:"manual/SCALE Apps/Quick-Start Guides/installing-Traefik",id:"manual/SCALE Apps/Quick-Start Guides/installing-Traefik",title:"08 - Installing Traefik",description:'Within TrueCharts our aim is to make it as easy as possible to secure your Apps. To support this we supply a separate Traefik "ingress" app, which has been pre-configured to provide secure and fast connections.',source:"@site/docs/manual/SCALE Apps/Quick-Start Guides/08-installing-Traefik.md",sourceDirName:"manual/SCALE Apps/Quick-Start Guides",slug:"/manual/SCALE Apps/Quick-Start Guides/installing-Traefik",permalink:"/zh/docs/manual/SCALE Apps/Quick-Start Guides/installing-Traefik",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/manual/SCALE Apps/Quick-Start Guides/08-installing-Traefik.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"manualSidebar",previous:{title:"07 - Adding Lets-Encrypt Certificates",permalink:"/zh/docs/manual/SCALE Apps/Quick-Start Guides/adding-letsencrypt"},next:{title:"09 - Exposing Apps using Ingress and Traefik",permalink:"/zh/docs/manual/SCALE Apps/Quick-Start Guides/add-ingress"}},c={},l=[{value:"Reminder",id:"reminder",level:2},{value:"Video Guide",id:"video-guide",level:2}],d={toc:l};function f(e){var t=e.components,r=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"08---installing-traefik"},"08 - Installing Traefik"),(0,a.kt)("p",null,'Within TrueCharts our aim is to make it as easy as possible to secure your Apps. To support this we supply a separate Traefik "ingress" app, which has been pre-configured to provide secure and fast connections.'),(0,a.kt)("h2",{id:"reminder"},"Reminder"),(0,a.kt)("p",null,"Traefik is part of the ",(0,a.kt)("inlineCode",{parentName:"p"},"stable")," train, so make sure you have it enabled as specified in ",(0,a.kt)("a",{parentName:"p",href:"https://truecharts.org/manual/Quick-Start%20Guides/01-Adding-TrueCharts/"},"Step 1")," of our Quick Start Guides"),(0,a.kt)("h2",{id:"video-guide"},"Video Guide"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.youtube.com/embed/bWNPfrKjawI",alt:"type:video"})))}f.isMDXComponent=!0}}]);