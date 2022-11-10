"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[69942],{3905:function(A,e,t){t.d(e,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function n(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function a(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,r)}return t}function i(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){n(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function l(A,e){if(null==A)return{};var t,r,n=function(A,e){if(null==A)return{};var t,r,n={},a=Object.keys(A);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(n[t]=A[t]);return n}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(n[t]=A[t])}return n}var o=r.createContext({}),s=function(A){var e=r.useContext(o),t=e;return A&&(t="function"==typeof A?A(e):i(i({},e),A)),t},u=function(A){var e=s(A.components);return r.createElement(o.Provider,{value:e},A.children)},d={inlineCode:"code",wrapper:function(A){var e=A.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(A,e){var t=A.components,n=A.mdxType,a=A.originalType,o=A.parentName,u=l(A,["components","mdxType","originalType","parentName"]),p=s(t),f=n,c=p["".concat(o,".").concat(f)]||p[f]||d[f]||a;return t?r.createElement(c,i(i({ref:e},u),{},{components:t})):r.createElement(c,i({ref:e},u))}));function f(A,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=A,l.mdxType="string"==typeof A?A:n,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},65276:function(A,e,t){t.r(e),t.d(e,{assets:function(){return u},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=t(83117),n=t(80102),a=(t(67294),t(3905)),i=["components"],l={},o="Add Traefik Basic Auth to Apps",s={unversionedId:"charts/stable/traefik/traefik-basicAuth-middleware",id:"charts/stable/traefik/traefik-basicAuth-middleware",title:"Add Traefik Basic Auth to Apps",description:"Our traefik chart has the ability to add various middlewares to the chart can add extra functionality to your setup. You can see the full list of middlewares inside the traefik menu options. In this guide we'll go over setting up the Basic Auth traefik middleware.",source:"@site/docs/charts/stable/traefik/traefik-basicAuth-middleware.md",sourceDirName:"charts/stable/traefik",slug:"/charts/stable/traefik/traefik-basicAuth-middleware",permalink:"/docs/charts/stable/traefik/traefik-basicAuth-middleware",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/traefik/traefik-basicAuth-middleware.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Theme Park",permalink:"/docs/charts/stable/traefik/theme-park-middleware"},next:{title:"Changelog",permalink:"/docs/charts/stable/transmission/CHANGELOG"}},u={},d=[{value:"Video Guide",id:"video-guide",level:2},{value:"Support",id:"support",level:2}],p={toc:d};function f(A){var e=A.components,l=(0,n.Z)(A,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"add-traefik-basic-auth-to-apps"},"Add Traefik Basic Auth to Apps"),(0,a.kt)("p",null,"Our ",(0,a.kt)("inlineCode",{parentName:"p"},"traefik")," chart has the ability to add various ",(0,a.kt)("inlineCode",{parentName:"p"},"middlewares")," to the chart can add extra functionality to your setup. You can see the full list of ",(0,a.kt)("inlineCode",{parentName:"p"},"middlewares")," inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"traefik")," menu options. In this guide we'll go over setting up the ",(0,a.kt)("inlineCode",{parentName:"p"},"Basic Auth")," traefik middleware."),(0,a.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Traefik installed (see previous steps of ",(0,a.kt)("inlineCode",{parentName:"li"},"SCALE Apps Manual"),")")),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Once ",(0,a.kt)("inlineCode",{parentName:"p"},"traefik")," is installed, scroll down to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Middlewares")," section"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"BasicAuth",src:t(6026).Z,width:"1164",height:"1095"})),(0,a.kt)("p",null,"When there, you can fill out the ",(0,a.kt)("inlineCode",{parentName:"p"},"Configure basicAuth")," section with as follows"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name the ",(0,a.kt)("inlineCode",{parentName:"li"},"basicAuth"),", most people choose ",(0,a.kt)("inlineCode",{parentName:"li"},"basic")),(0,a.kt)("li",{parentName:"ul"},"Add as name users as necessary, choosing a specific ",(0,a.kt)("inlineCode",{parentName:"li"},"Username")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Password")," for each user.")),(0,a.kt)("h1",{id:"adding-it-to-apps-using-ingress"},"Adding it to Apps using Ingress"),(0,a.kt)("p",null,"Once you have your ",(0,a.kt)("inlineCode",{parentName:"p"},"basicAuth")," setup, you need to add it to apps that have ",(0,a.kt)("inlineCode",{parentName:"p"},"Ingress"),"(Traefik) enabled, otherwise you cannot use this middleware."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"EnabledIngress",src:t(88233).Z,width:"1153",height:"178"})),(0,a.kt)("p",null,"Scroll to the section ",(0,a.kt)("inlineCode",{parentName:"p"},"Configure Traefik Middlewares")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Add")," to add a fillable section"),(0,a.kt)("li",{parentName:"ul"},"Write in the name of the ",(0,a.kt)("inlineCode",{parentName:"li"},"basicAuth")," from before. For most people that's basic as the example below.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ConfigureTraefikMiddlewares",src:t(74146).Z,width:"1143",height:"280"})),(0,a.kt)("h1",{id:"verify-authentication"},"Verify Authentication"),(0,a.kt)("p",null,"Once the ",(0,a.kt)("inlineCode",{parentName:"p"},"basicAuth")," is installed, please visit the ",(0,a.kt)("inlineCode",{parentName:"p"},"URL")," that you configured the ",(0,a.kt)("inlineCode",{parentName:"p"},"Ingress")," for. If everything is setup correctly you should see the Pop-Up below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"BasicAuthWorking",src:t(48098).Z,width:"474",height:"337"})),(0,a.kt)("h2",{id:"video-guide"},"Video Guide"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/hDdFKE5-c44",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,a.kt)("h2",{id:"support"},"Support"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you need more help you can also reach us using ",(0,a.kt)("a",{parentName:"li",href:"https://discord.gg/tVsPTHWTtr"},"Discord")," for real-time feedback and support.")))}f.isMDXComponent=!0},6026:function(A,e,t){e.Z=t.p+"assets/images/BasicAuth-26e6ad679825295a6edd478d9df281e6.png"},48098:function(A,e,t){e.Z=t.p+"assets/images/BasicAuthWorking-9a7f81414218beef278468065991ea26.png"},74146:function(A,e,t){e.Z=t.p+"assets/images/ConfigureTraefikMiddlewares-3fd8708adbff38cc40c0df4dd01c92d4.png"},88233:function(A,e){e.Z="data:image/png;base64,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"}}]);