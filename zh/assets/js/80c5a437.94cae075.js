"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[58188],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1502:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={},s="Installation Notes",c={unversionedId:"charts/stable/handbrake/installation_notes",id:"charts/stable/handbrake/installation_notes",title:"Installation Notes",description:"- If you enable Ingress for this app, you need to have SECURE_CONNECTION set to false and Port Type set to HTTP, otherwise you may run into errors for Too many redirects.",source:"@site/docs/charts/stable/handbrake/installation_notes.md",sourceDirName:"charts/stable/handbrake",slug:"/charts/stable/handbrake/installation_notes",permalink:"/zh/docs/charts/stable/handbrake/installation_notes",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/handbrake/installation_notes.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/zh/docs/charts/stable/handbrake/CHANGELOG"},next:{title:"haste-server",permalink:"/zh/docs/charts/stable/haste-server/"}},u={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation-notes"},"Installation Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you enable ",(0,o.kt)("inlineCode",{parentName:"li"},"Ingress")," for this app, you need to have ",(0,o.kt)("inlineCode",{parentName:"li"},"SECURE_CONNECTION")," set to ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Port Type")," set to ",(0,o.kt)("inlineCode",{parentName:"li"},"HTTP"),", otherwise you may run into errors for ",(0,o.kt)("inlineCode",{parentName:"li"},"Too many redirects"),"."),(0,o.kt)("li",{parentName:"ul"},"You can't enable ",(0,o.kt)("inlineCode",{parentName:"li"},"Ingress")," for ",(0,o.kt)("inlineCode",{parentName:"li"},"VNC")," If you want to use ",(0,o.kt)("inlineCode",{parentName:"li"},"VNC"),", you must set this service to ",(0,o.kt)("inlineCode",{parentName:"li"},"Simple")," instead"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"VNC")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"SECURE_CONNECTION")," set ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),", only works with very few clients. One of them is ",(0,o.kt)("inlineCode",{parentName:"li"},"SSVNC"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SECURE_CONNECTION")," affects both ",(0,o.kt)("inlineCode",{parentName:"li"},"WebUI")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"VNC"),".")),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you are passing through devices such as ",(0,o.kt)("inlineCode",{parentName:"li"},"Optical Drives"),", you have to Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Container Security Settings")," and set ",(0,o.kt)("inlineCode",{parentName:"li"},"PUID")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),".")))}m.isMDXComponent=!0}}]);