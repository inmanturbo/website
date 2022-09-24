"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[88397],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=u(n),h=o,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(f,i(i({ref:e},c),{},{components:n})):r.createElement(f,i({ref:e},c))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58685:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],s={},l="Important Notes",u={unversionedId:"charts/enterprise/nextcloud/installation_notes",id:"charts/enterprise/nextcloud/installation_notes",title:"Important Notes",description:"Nextcloud is a VERY picky Application and is VERY hard to support.",source:"@site/docs/charts/enterprise/nextcloud/installation_notes.md",sourceDirName:"charts/enterprise/nextcloud",slug:"/charts/enterprise/nextcloud/installation_notes",permalink:"/docs/charts/enterprise/nextcloud/installation_notes",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/enterprise/nextcloud/installation_notes.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Installation Guide",permalink:"/docs/charts/enterprise/nextcloud/installation"},next:{title:"Migration Notes",permalink:"/docs/charts/enterprise/nextcloud/migration_guide"}},c={},p=[{value:"Installation Notes",id:"installation-notes",level:2}],d={toc:p};function h(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"important-notes"},"Important Notes"),(0,a.kt)("p",null,"Nextcloud is a VERY picky Application and is VERY hard to support.\nThe support staff on our Discord can help with the basic installation and\ngetting Ingress to run with the chart, as that is that is the only recommended and supported installation method since 15.X."),(0,a.kt)("p",null,"The support staff will not help with upgrades that fail from an earlier version than 15.X, we've included a\n",(0,a.kt)("a",{parentName:"p",href:"/docs/charts/enterprise/nextcloud/migration_guide"},"migration guide")," to help with this upgrade."),(0,a.kt)("p",null,"If you're having issues with the Nextcloud app/chart itself after basic installation we ask you not to file support\nrequests on our Discord or Github, unless your issue is clearly caused by TrueCharts. It's, however, fine to ask in an, appropiate, other, non-support, channel!"),(0,a.kt)("p",null,'While we consider the App layer "Stable", we simply cannot guarantee stability due to the nature of the Nextcloud Application inside the App.'),(0,a.kt)("h2",{id:"installation-notes"},"Installation Notes"),(0,a.kt)("p",null,"Nextcloud generates it's ",(0,a.kt)("inlineCode",{parentName:"p"},"config.php")," file on the first startup/installation. Therefore you have to set some values correctly on the first try.\nOtherwise you will have to either re-install the App or edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.php")," manually, with the latter being out of our support scope.\nThe mentioned values are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"User Data storage location, type (eg. PVC, hostPath).")),(0,a.kt)("p",null,"Also Nextcloud creates an Admin user on the first startup/installation. Changing them later, will have no effect.\nThe mentioned values are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NEXTCLOUD_ADMIN_USER"),(0,a.kt)("li",{parentName:"ul"},"NEXTCLOUD_ADMIN_PASSWORD")))}h.isMDXComponent=!0}}]);