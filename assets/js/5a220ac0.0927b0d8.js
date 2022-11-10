"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[62309],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},66077:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],c={},l="How-To",u={unversionedId:"charts/stable/unifi/how-to",id:"charts/stable/unifi/how-to",title:"How-To",description:"L3 Adoption (DNS)",source:"@site/docs/charts/stable/unifi/how-to.md",sourceDirName:"charts/stable/unifi",slug:"/charts/stable/unifi/how-to",permalink:"/docs/charts/stable/unifi/how-to",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/unifi/how-to.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/stable/unifi/CHANGELOG"},next:{title:"Changelog",permalink:"/docs/charts/stable/unmanic/CHANGELOG"}},s={},p=[{value:"L3 Adoption (DNS)",id:"l3-adoption-dns",level:2}],f={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to"},"How-To"),(0,i.kt)("h2",{id:"l3-adoption-dns"},"L3 Adoption (DNS)"),(0,i.kt)("p",null,"One solution to solve problems when trying to adopt devices is to\ncorrectly configure your DNS server."),(0,i.kt)("p",null,"By default all Unifi Devices try to resolve ",(0,i.kt)("inlineCode",{parentName:"p"},"unifi.localdomain"),",\nto find the controller. Even adopted devices, uses this as a fallback."),(0,i.kt)("p",null,"What you have to do is configure your DNS server, to resolve\n",(0,i.kt)("inlineCode",{parentName:"p"},"unifi.localdomain")," to the IP of your Unifi Controller. So the devices can find the\ncontroller."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"localdomain")," with whatever domain you have on your LAN.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This will only work if you use the default port (8080), on your Unifi controller")),(0,i.kt)("p",null,"For more information and solutions for L3 Adoption you can read this\n",(0,i.kt)("a",{parentName:"p",href:"https://help.ui.com/hc/en-us/articles/204909754-UniFi-Network-Layer-3-Adoption"},"article"),"\non Unifi's website."))}d.isMDXComponent=!0}}]);