"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[49973],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},24642:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],l={},s="Installation Notes",c={unversionedId:"charts/stable/portainer-ce/installation-notes",id:"charts/stable/portainer-ce/installation-notes",title:"Installation Notes",description:"Actions done within Portainer-CE can be destructive",source:"@site/docs/charts/stable/portainer-ce/installation-notes.md",sourceDirName:"charts/stable/portainer-ce",slug:"/charts/stable/portainer-ce/installation-notes",permalink:"/docs/charts/stable/portainer-ce/installation-notes",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/portainer-ce/installation-notes.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/stable/portainer-ce/CHANGELOG"},next:{title:"Changelog",permalink:"/docs/charts/stable/posterr/CHANGELOG"}},p={},u=[{value:"Adding TrueCharts Helm repository",id:"adding-truecharts-helm-repository",level:2},{value:"Replacing default Helm repository with TrueCharts Helm repository",id:"replacing-default-helm-repository-with-truecharts-helm-repository",level:2}],d={toc:u};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation-notes"},"Installation Notes"),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Actions done within ",(0,o.kt)("inlineCode",{parentName:"p"},"Portainer-CE")," can be destructive\nfor your apps/charts and your data, if you don't know what\nare you doing.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"Portainer-CE")," is designed to work only with Helm Charts / Kubernetes.\nYou ",(0,o.kt)("strong",{parentName:"p"},"CANNOT")," use it to run docker, docker stacks or docker compose")),(0,o.kt)("h2",{id:"adding-truecharts-helm-repository"},"Adding TrueCharts Helm repository"),(0,o.kt)("p",null,"Navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"Home")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"local")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Helm")," on the sidebar"),(0,o.kt)("li",{parentName:"ul"},"Type ",(0,o.kt)("inlineCode",{parentName:"li"},"https://charts.truecharts.org")," under the ",(0,o.kt)("inlineCode",{parentName:"li"},"Additional Repositories")),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Add repository"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"add_repo",src:r(79083).Z,width:"1561",height:"343"})),(0,o.kt)("h2",{id:"replacing-default-helm-repository-with-truecharts-helm-repository"},"Replacing default Helm repository with TrueCharts Helm repository"),(0,o.kt)("p",null,"Navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings")," on the sidebar"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Under ",(0,o.kt)("inlineCode",{parentName:"li"},"Helm Repository")," replace ",(0,o.kt)("inlineCode",{parentName:"li"},"URL")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"https://charts.truecharts.org")),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Save settings"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"replace_repo",src:r(23964).Z,width:"1303",height:"631"})))}m.isMDXComponent=!0},79083:function(e,t,r){t.Z=r.p+"assets/images/add_repo-6b2423cba24e18dcfd0f90855731d10c.png"},23964:function(e,t,r){t.Z=r.p+"assets/images/replace_repo-da30bff278db1b54657b0c2027b9132b.png"}}]);