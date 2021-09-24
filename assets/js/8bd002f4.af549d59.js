"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[7401],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:e},s),{},{components:r})):n.createElement(m,i({ref:e},s))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},177:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={title:"Install",sidebar_position:1},c=void 0,p={unversionedId:"trader/SDK/Javascript/install",id:"trader/SDK/Javascript/install",isDocsHomePage:!1,title:"Install",description:"JavaScript SDK for building trader-facing applications on top of TDEX",source:"@site/docs/trader/SDK/Javascript/install.md",sourceDirName:"trader/SDK/Javascript",slug:"/trader/SDK/Javascript/install",permalink:"/docs/trader/SDK/Javascript/install",editUrl:"https://github.com/tdex-network/dev-portal/edit/master/docs/trader/SDK/Javascript/install.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Install",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"CLI",permalink:"/docs/trader/cli"},next:{title:"Identity",permalink:"/docs/trader/SDK/Javascript/Identity"}},s=[],u={toc:s};function d(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"JavaScript SDK for building trader-facing applications on top of TDEX"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/TDex-network/tdex-sdk"},"https://github.com/TDex-network/tdex-sdk")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install with ",(0,o.kt)("strong",{parentName:"li"},"yarn"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add tdex-sdk\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install with ",(0,o.kt)("strong",{parentName:"li"},"npm"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install --save tdex-sdk\n")))}d.isMDXComponent=!0}}]);