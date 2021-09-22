"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[9671],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),c=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=n,f=p["".concat(u,".").concat(h)]||p[h]||d[h]||i;return r?o.createElement(f,a(a({ref:t},l),{},{components:r})):o.createElement(f,a({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9881:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),a=["components"],s={title:"Introduction",sidebar_position:1,slug:"/"},u=void 0,c={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introduction",description:"Welcome to TDEX's Documentation. This documentation is for learning how to trade on the TDEX Network or how to provide liquidity.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/tdex-network/dev-portal/edit/master/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Overview",permalink:"/docs/trader/intro"}},l=[{value:"What is TDEX",id:"what-is-tdex",children:[]},{value:"Get started",id:"get-started",children:[{value:"Get started as Trader",id:"get-started-as-trader",children:[]},{value:"Get started as Liquidity Provider",id:"get-started-as-liquidity-provider",children:[]}]},{value:"Protocol Specifications",id:"protocol-specifications",children:[]},{value:"Copyright",id:"copyright",children:[]}],d={toc:l};function p(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to TDEX's Documentation. This documentation is for learning how to trade on the TDEX Network or how to provide liquidity."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Be part of the community ",(0,i.kt)("a",{parentName:"li",href:"https://t.me/tdexnetwork"},"joining our Telegram channel"),"."),(0,i.kt)("li",{parentName:"ul"},"To stay in touch ",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/tdexnetwork"},"follow us on Twitter"),"."),(0,i.kt)("li",{parentName:"ul"},"To report bugs or ask for support ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tdex-network/support/issues/new"},"open an issue on the Github repository"),"."),(0,i.kt)("li",{parentName:"ul"},"To propose improvements on protocol ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tdex-network/tips/issues/new"},"open an issue on the Github repository"),".")),(0,i.kt)("h3",{id:"what-is-tdex"},"What is TDEX"),(0,i.kt)("p",null,"TDEX aims to create a global peer to peer network with an open interface for market makers to signal liquidity in different Liquid asset pairs and for traders a faster, non custodial and anonymous way to exchange ",(0,i.kt)("strong",{parentName:"p"},"Liquid assets"),".\nTo do that, we take advantage of the UTXO model and then the underlying capability of Elements Based networks to perform automated swaps, without the need of a trusted third party.\nThe system is built on top of TSWAP protocol - a protocol to interact within peers and performs swaps in an automated and pseudo-anonymous fashion.\nWe believe in the freedom of speech, of transacting, and humankind empowerment through technology. We want to help build a world which allows individuals to use freedom-enabling technologies, as they see fit, without asking anyone for permission. "),(0,i.kt)("p",null,"This is the reason why we have been developing TDEX as free open source software."),(0,i.kt)("h2",{id:"get-started"},"Get started"),(0,i.kt)("h3",{id:"get-started-as-trader"},(0,i.kt)("a",{parentName:"h3",href:"/docs/trader/intro"},"Get started as Trader")),(0,i.kt)("h3",{id:"get-started-as-liquidity-provider"},(0,i.kt)("a",{parentName:"h3",href:"/docs/provider/intro"},"Get started as Liquidity Provider")),(0,i.kt)("h2",{id:"protocol-specifications"},"Protocol Specifications"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/tdex-network/tdex-specs"},"Contribute to Protocol Specification")),(0,i.kt)("h2",{id:"copyright"},"Copyright"),(0,i.kt)("p",null,"By contributing to this repository, you agree to license your work under the MIT license unless specified otherwise at the top of the file itself. Any work contributed where you are not the original author must contain its license header with the original author(s) and source."))}p.isMDXComponent=!0}}]);