"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[668],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,v=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return r?n.createElement(v,a(a({ref:t},c),{},{components:r})):n.createElement(v,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7650:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={sidebar_position:1},l="Overview",d={unversionedId:"provider/intro",id:"provider/intro",isDocsHomePage:!1,title:"Overview",description:"A Provider holds Liquid reserves of both a BASE_ASSET-QUOTE_ASSET in his non-custodial Liquid hot-wallet, running automated market-making strategies, either with or without an oracle. Providers are incentivized to be always on and need to expose a public reachable endpoint either via clearnet or using a Onion hidden service",source:"@site/docs/provider/intro.md",sourceDirName:"provider",slug:"/provider/intro",permalink:"/docs/provider/intro",editUrl:"https://github.com/tdex-network/dev-portal/edit/master/docs/provider/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"JavaScript",permalink:"/docs/trader/SDK/javascript"},next:{title:"Overview",permalink:"/docs/provider/daemon/overview"}},c=[{value:"Provide liquidity for traders and earn fees",id:"provide-liquidity-for-traders-and-earn-fees",children:[]},{value:"Register the provider on the network",id:"register-the-provider-on-the-network",children:[]}],p={toc:c};function u(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"Provider")," holds Liquid reserves of both a ",(0,i.kt)("em",{parentName:"p"},"BASE_ASSET-QUOTE_ASSET")," in his non-custodial Liquid hot-wallet, running automated market-making strategies, either with or without an oracle. Providers are incentivized to be always on and need to expose a public reachable endpoint either via clearnet or using a ",(0,i.kt)("a",{parentName:"p",href:"https://2019.www.torproject.org/docs/tor-onion-service.html"},"Onion hidden service")),(0,i.kt)("p",null,"A small provider's fee can be taken out of each trade and added to the reserves. While the ",(0,i.kt)("em",{parentName:"p"},"BASE_ASSET-QUOTE_ASSET")," reserve ratio is constantly shifting, fees make sure that the total combined reserve size increases with every trade.\nGuaranteed arbitrage opportunities from price fluctuations should push a steady flow of transactions through the system and increase the amount of fee revenue generated."),(0,i.kt)("p",null,"A liquidity provider has full control over the market making strategy to apply needed to calculate the ",(0,i.kt)("strong",{parentName:"p"},"market rate")," at which to accept trades. That being said, there is a possibility to apply an automated market-making relying only on the reserves balances and the amount requested by the trader, without the need to connect to an external price feed. The default strategy of the alpha daemond is the ",(0,i.kt)("em",{parentName:"p"},"constant product market-making"),". In short, this model generates a full order-book based on an initial price for the market. Every transaction that occurs on this market will adjust the prices of the market accordingly. It's a basic supply and demand automated market making system. "),(0,i.kt)("h3",{id:"provide-liquidity-for-traders-and-earn-fees"},"Provide liquidity for traders and earn fees"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/provider/daemon/overview"},"Install and run TDEX Daemon on your server")),(0,i.kt)("li",{parentName:"ul"},"Install and run on RaspiBlitz (Coming Soon)"),(0,i.kt)("li",{parentName:"ul"},"One-click deploy on Ocelot.net (Coming Soon)"),(0,i.kt)("li",{parentName:"ul"},"One-click deploy on Amazon Web Services (Coming Soon)")),(0,i.kt)("h3",{id:"register-the-provider-on-the-network"},"Register the provider on the network"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/provider/registry"},"Register your provider on TDEX registry")),(0,i.kt)("li",{parentName:"ul"},"Create your own registry (Coming soon)")))}u.isMDXComponent=!0}}]);