"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[43036],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,h=p["".concat(u,".").concat(m)]||p[m]||c[m]||l;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var s=2;s<l;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},93101:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c}});var i=n(83117),r=n(80102),l=(n(67294),n(3905)),o=["components"],a={},u="Contribution Guidelines",s={unversionedId:"manual/development/contributing",id:"manual/development/contributing",title:"Contribution Guidelines",description:"This project welcomes any and all input, but we need to have a few quality guidelines. These guidelines will be examplained here, in this document.",source:"@site/docs/manual/development/contributing.md",sourceDirName:"manual/development",slug:"/manual/development/contributing",permalink:"/zh/docs/manual/development/contributing",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/manual/development/contributing.md",tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"Common Library Chart",permalink:"/zh/docs/manual/development/common-libary"},next:{title:"Command Cheatsheet",permalink:"/zh/docs/manual/development/handycommands"}},d={},c=[{value:"GIT Guidelines",id:"git-guidelines",level:2},{value:"New to GIT",id:"new-to-git",level:3},{value:"Git and You",id:"git-and-you",level:3},{value:"Structure Guidelines",id:"structure-guidelines",level:2},{value:"Inclusion of files and folders",id:"inclusion-of-files-and-folders",level:3},{value:"Code Guidelines",id:"code-guidelines",level:2},{value:"Your code, your style, my review",id:"your-code-your-style-my-review",level:3},{value:"Apps requirements",id:"apps-requirements",level:4},{value:"Review Guidelines",id:"review-guidelines",level:2},{value:"Todo vs Feature vs bug",id:"todo-vs-feature-vs-bug",level:2},{value:"That&#39;s it!",id:"thats-it",level:3}],p={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"contribution-guidelines"},"Contribution Guidelines"),(0,l.kt)("p",null,"This project welcomes any and all input, but we need to have a few quality guidelines. These guidelines will be examplained here, in this document."),(0,l.kt)("h2",{id:"git-guidelines"},"GIT Guidelines"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"new-to-git"},"New to GIT"),(0,l.kt)("p",null,"If you have never used git before, you can look up our general reference on our wiki."),(0,l.kt)("h3",{id:"git-and-you"},"Git and You"),(0,l.kt)("p",null,"GIT is a fantastic system, but while using it we have a few guidelines to keep it fantastic for everyone."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Submit complete PR's."),(0,l.kt)("li",{parentName:"ul"},"Add ","[DNM]"," if you do not want your PR merged yet."),(0,l.kt)("li",{parentName:"ul"},"Always try and fill in the whole form, even for small PR's."),(0,l.kt)("li",{parentName:"ul"},"Don't close when a reviewer requests changes (just push the changes or ask for help)."),(0,l.kt)("li",{parentName:"ul"},"Explain what you did in your PR."),(0,l.kt)("li",{parentName:"ul"},"Be thorough."),(0,l.kt)("li",{parentName:"ul"},"If you can add screenshots to clarify."),(0,l.kt)("li",{parentName:"ul"},'Always try to add "Fixes #000" (where 000 is the Issue your PR fixes)'),(0,l.kt)("li",{parentName:"ul"},"found something you want to fix yourself? Please do make an issue too.")),(0,l.kt)("h2",{id:"structure-guidelines"},"Structure Guidelines"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"inclusion-of-files-and-folders"},"Inclusion of files and folders"),(0,l.kt)("p",null,"Although GIT is quite friendly in what it accepts in terms of files and folder changes in a commit, a reviewer's or bugfixer's time is not unlimited. For that reason, we have a few specific guidelines in regards to the inclusion of files and folders in your PR."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Only include files you actually changed."),(0,l.kt)("li",{parentName:"ul"},"Try not to include multiple changes in one PR"),(0,l.kt)("li",{parentName:"ul"},"Want to change the formatting of multiple files too? Make a separate PR.")),(0,l.kt)("h2",{id:"code-guidelines"},"Code Guidelines"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"your-code-your-style-my-review"},"Your code, your style, my review"),(0,l.kt)("p",null,"Here at TrueCharts, we value people having their own style. But your code needs to be reviewable and editable by others too. For that reason, we have a few basic coding guidelines"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Always")," explain regex in a comment within your code."),(0,l.kt)("li",{parentName:"ul"},"Write simple code and don't try to impress."),(0,l.kt)("li",{parentName:"ul"},"We will run (Basic) automated reformating of code once in a while."),(0,l.kt)("li",{parentName:"ul"},"Document your changes in your code and if need be, on the wiki."),(0,l.kt)("li",{parentName:"ul"},"All PR's should be able to pass our automated tests.")),(0,l.kt)("h4",{id:"apps-requirements"},"Apps requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Apps should always save user-specific data in a persistant location. That can be connected by both IXVolume or Hostpath"),(0,l.kt)("li",{parentName:"ul"},"Apps should not require the user to edit any config file themselves. All config changes should be either automated or using the UI"),(0,l.kt)("li",{parentName:"ul"},"Apps should not use default passwords, the user should always be forced(!) to put credentials in manually")),(0,l.kt)("h2",{id:"review-guidelines"},"Review Guidelines"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Even us review gods need some guidelines once in a while."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Let people learn from their mistakes"),(0,l.kt)("li",{parentName:"ul"},"Review instead of merging without comments"),(0,l.kt)("li",{parentName:"ul"},"Abide by these guidelines in your review"),(0,l.kt)("li",{parentName:"ul"},"Tests exist for a reason. Don't merge with test-failures")),(0,l.kt)("h2",{id:"todo-vs-feature-vs-bug"},"Todo vs Feature vs bug"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Please take note of the difference between a TODO and Feature"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Bug: An unexpected behavior of the script or a crash. Including, but not limited to, errors and warnings."),(0,l.kt)("li",{parentName:"ul"},"Todo: When you come across something that needs tweaking/adding during development, is not an unexpected behavior"),(0,l.kt)("li",{parentName:"ul"},"Feature: When you, out of personal preference, want something added or changed.")),(0,l.kt)("h3",{id:"thats-it"},"That's it!"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Someone will come along and review the changes. If everything looks good then they will merge it with the main repo. If you need any help don't be afraid to ask in the discord channel: ",(0,l.kt)("a",{parentName:"p",href:"https://discord.gg/tFcTpBp"},"https://discord.gg/tFcTpBp")))}m.isMDXComponent=!0}}]);