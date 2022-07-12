"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[56423],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=i,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},74706:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(83117),i=r(80102),o=(r(67294),r(3905)),a=["components"],l={},s="Important Notes",c={unversionedId:"charts/stable/fireflyiii/installation_notes",id:"charts/stable/fireflyiii/installation_notes",title:"Important Notes",description:'The Firefly III developers have decided to split their program into multiple different add-on containers, implementing these ourselves into the App is EXTREMELY time-consuming. While we would appreciate people with experience building Helm Charts and adding the feature containers, we have decided to flag them "out of scope" for True Charts.',source:"@site/docs/charts/stable/fireflyiii/installation_notes.md",sourceDirName:"charts/stable/fireflyiii",slug:"/charts/stable/fireflyiii/installation_notes",permalink:"/docs/charts/stable/fireflyiii/installation_notes",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/fireflyiii/installation_notes.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/stable/fireflyiii/CHANGELOG"},next:{title:"Input Validation",permalink:"/docs/charts/stable/fireflyiii/validation"}},u={},p=[],f={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"important-notes"},"Important Notes"),(0,o.kt)("p",null,'The Firefly III developers have decided to split their program into multiple different add-on containers, implementing these ourselves into the App is EXTREMELY time-consuming. While we would appreciate people with experience building Helm Charts and adding the feature containers, we have decided to flag them "out of scope" for True Charts.'),(0,o.kt)("p",null,"If you really want to use them, you can use custom-app or big-blue-button. However, we do not actively support such a setup."))}d.isMDXComponent=!0}}]);