"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2384],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99975:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={},c="Installation Notes",s={unversionedId:"charts/incubator/mkvcleaver/installation_notes",id:"charts/incubator/mkvcleaver/installation_notes",title:"Installation Notes",description:"- If you enable Ingress for this app, you need to have SECURE_CONNECTION set to false and Port Type set to HTTP, otherwise you may run into errors for Too many redirects.",source:"@site/docs/charts/incubator/mkvcleaver/installation_notes.md",sourceDirName:"charts/incubator/mkvcleaver",slug:"/charts/incubator/mkvcleaver/installation_notes",permalink:"/docs/charts/incubator/mkvcleaver/installation_notes",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/incubator/mkvcleaver/installation_notes.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/incubator/mkvcleaver/CHANGELOG"},next:{title:"piwigo",permalink:"/docs/charts/incubator/piwigo/"}},u={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation-notes"},"Installation Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you enable ",(0,i.kt)("inlineCode",{parentName:"li"},"Ingress")," for this app, you need to have ",(0,i.kt)("inlineCode",{parentName:"li"},"SECURE_CONNECTION")," set to ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Port Type")," set to ",(0,i.kt)("inlineCode",{parentName:"li"},"HTTP"),", otherwise you may run into errors for ",(0,i.kt)("inlineCode",{parentName:"li"},"Too many redirects"),"."),(0,i.kt)("li",{parentName:"ul"},"You can't enable ",(0,i.kt)("inlineCode",{parentName:"li"},"Ingress")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"VNC")," If you want to use ",(0,i.kt)("inlineCode",{parentName:"li"},"VNC"),", you must set this service to ",(0,i.kt)("inlineCode",{parentName:"li"},"Simple")," instead"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"VNC")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"SECURE_CONNECTION")," set ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", only works with very few clients. One of them is ",(0,i.kt)("inlineCode",{parentName:"li"},"SSVNC"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SECURE_CONNECTION")," affects both ",(0,i.kt)("inlineCode",{parentName:"li"},"WebUI")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"VNC"),".")),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you are passing through devices such as ",(0,i.kt)("inlineCode",{parentName:"li"},"Optical Drives"),", you have to Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Container Security Settings")," and set ",(0,i.kt)("inlineCode",{parentName:"li"},"PUID")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),".")))}f.isMDXComponent=!0}}]);