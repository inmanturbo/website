"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[58232],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56342:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={},s="Installation Notes",p={unversionedId:"charts/stable/joplin-server/installation_notes",id:"charts/stable/joplin-server/installation_notes",title:"Installation Notes",description:"- To set the variable App Base Url correctly:",source:"@site/docs/charts/stable/joplin-server/installation_notes.md",sourceDirName:"charts/stable/joplin-server",slug:"/charts/stable/joplin-server/installation_notes",permalink:"/docs/charts/stable/joplin-server/installation_notes",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/joplin-server/installation_notes.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/stable/joplin-server/CHANGELOG"},next:{title:"Changelog",permalink:"/docs/charts/stable/k8s-gateway/CHANGELOG"}},u={},c=[],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation-notes"},"Installation Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To set the variable ",(0,i.kt)("inlineCode",{parentName:"li"},"App Base Url")," correctly:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If you are accessing it ",(0,i.kt)("em",{parentName:"li"},"without")," ingress/domain -> ",(0,i.kt)("inlineCode",{parentName:"li"},"http://IP:PORT"),"."),(0,i.kt)("li",{parentName:"ul"},"If ingress is enabled, set it to ",(0,i.kt)("inlineCode",{parentName:"li"},"https://app.mydomain.tld:443"),"."),(0,i.kt)("li",{parentName:"ul"},"No matter which option you choose it ",(0,i.kt)("strong",{parentName:"li"},"must")," end with the correct ",(0,i.kt)("inlineCode",{parentName:"li"},":PORT"),".")))),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To enable the ",(0,i.kt)("inlineCode",{parentName:"li"},"mailer")," options just set ",(0,i.kt)("inlineCode",{parentName:"li"},"Mailer Enabled")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Mailer Host")," to the smtp service that you use, eg ",(0,i.kt)("inlineCode",{parentName:"li"},"smtp.example.com")),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Mailer Port")," to the smtp service port, eg ",(0,i.kt)("inlineCode",{parentName:"li"},"465"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"587"),", etc."),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Mailer Secure")," to ",(0,i.kt)("strong",{parentName:"li"},"true")," if you need SSL/HTTPS."),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Mailer Auth User")," to email as the username."),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Mailer Auth Password")," to your email's password."),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Mailer No Reply Name")," to whatever you want."),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Mailer No Reply Email")," to the default email for ",(0,i.kt)("inlineCode",{parentName:"li"},"no reply"),".")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you are using google as the SMTP service, your email password will ",(0,i.kt)("em",{parentName:"p"},"not")," work. You need to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"app password")," instead. find out more ",(0,i.kt)("a",{parentName:"p",href:"https://support.google.com/accounts/answer/185833?hl=en"},"here"),".")))}d.isMDXComponent=!0}}]);