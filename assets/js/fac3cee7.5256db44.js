"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[66745],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23094:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={},s="Installation Guide",u={unversionedId:"charts/stable/rcon-webadmin/installation",id:"charts/stable/rcon-webadmin/installation",title:"Installation Guide",description:"Credentials",source:"@site/docs/charts/stable/rcon-webadmin/installation.md",sourceDirName:"charts/stable/rcon-webadmin",slug:"/charts/stable/rcon-webadmin/installation",permalink:"/docs/charts/stable/rcon-webadmin/installation",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/rcon-webadmin/installation.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/stable/rcon-webadmin/CHANGELOG"},next:{title:"Changelog",permalink:"/docs/charts/stable/readarr/CHANGELOG"}},c={},p=[{value:"Credentials",id:"credentials",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Notes",id:"notes",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation-guide"},"Installation Guide"),(0,i.kt)("h2",{id:"credentials"},"Credentials"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"RWA USERNAME")," to any username for the web interface, defaults to ",(0,i.kt)("strong",{parentName:"li"},"admin"),"."),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"RWA PASSWORD")," to a secure password for the web interface."),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"RWA RCON PASSWORD")," to the password for the initial RCON server to control.")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"RWA ADMIN")," to ",(0,i.kt)("strong",{parentName:"li"},"true")," to make the initial user a admin."),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"RWA ENV")," to ",(0,i.kt)("strong",{parentName:"li"},"true")," to use env variables. Setting this to ",(0,i.kt)("strong",{parentName:"li"},"false")," will use all default values."),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"RWA_WEB_RCON")," to ",(0,i.kt)("strong",{parentName:"li"},"true")," to enable web rcon ",(0,i.kt)("em",{parentName:"li"},"if")," supported by the game server"),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"RWA_READ_ONLY_WIDGET_OPTIONS")," to ",(0,i.kt)("strong",{parentName:"li"},"true")," to prevent the initial user changing options in the widget options tab"),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"RWA GAME")," to a game such as minecraft | rust | csgo | other."),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"RWA SERVER NAME")," to a custom name for the initial server."),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"RWA RCON HOST")," To the initial RCON server IP to control. Cluster URL may work, but was not tested."),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"RWA RCON PORT")," To the port number of the initial RCON server to control."),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"RWA_RESTRICT_COMMANDS")," to prevent the initial user user executing these commands"),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"RWA_RESTRICT_WIDGETS")," to hide this list of widgets from the initial user")),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It's assumed that all game servers or services have secure passwords for RCON, blank or no passwords at all will ",(0,i.kt)("strong",{parentName:"li"},"NOT")," work and its advisable to set a secure password for both the web interface of this chart and also the rcon service too.")))}d.isMDXComponent=!0}}]);