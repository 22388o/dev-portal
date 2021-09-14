"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[386],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,f=s["".concat(p,".").concat(m)]||s[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4413:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],d={title:"Run Standalone",sidebar_position:3},p=void 0,c={unversionedId:"provider/daemon/getting_started/run_standalone",id:"provider/daemon/getting_started/run_standalone",isDocsHomePage:!1,title:"Run Standalone",description:"In order to run the daemon as a standalone executable you need to:",source:"@site/docs/provider/daemon/getting_started/run_standalone.md",sourceDirName:"provider/daemon/getting_started",slug:"/provider/daemon/getting_started/run_standalone",permalink:"/docs/provider/daemon/getting_started/run_standalone",editUrl:"https://github.com/tdex-network/dev-portal/edit/master/docs/provider/daemon/getting_started/run_standalone.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Run Standalone",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Run with Docker",permalink:"/docs/provider/daemon/getting_started/run_docker"},next:{title:"Run in Production",permalink:"/docs/provider/daemon/getting_started/run_prod"}},l=[],u={toc:l};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In order to run the daemon as a standalone executable you need to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the latest ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tdex-network/tdex-daemon/releases"},"releases")," of daemon (",(0,o.kt)("em",{parentName:"p"},"tdexd"),") and CLI (",(0,o.kt)("em",{parentName:"p"},"tdex"),") for Linux or MacOS.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Move the binaries into a folder in your ",(0,o.kt)("em",{parentName:"p"},"PATH")," (eg. ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),") and rename the daemon as just ",(0,o.kt)("inlineCode",{parentName:"p"},"tdexd")," and the CLI as ",(0,o.kt)("inlineCode",{parentName:"p"},"tdex"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Give them executable permissions. (eg. ",(0,o.kt)("inlineCode",{parentName:"p"},"chmod a+x /usr/local/bin/tdexd")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"chmod a+x /usr/local/bin/tdex"),")"))),(0,o.kt)("p",null,"Now you're ready to start it up:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# Run on Liquid network connecting to blockstream.info for sourcing blockchain data\n$ tdexd\n\n# Run on Liquid connecting to a local explorer\n$ export TDEX_EXPLORER_ENDPOINT="http://127.0.0.1:3001"\n$ tdexd\n\n# Run on Regtest connecting to a local explorer and using regtest LBTC asset hash.\n$ export TDEX_NETWORK="regtest"\n$ export TDEX_BASE_ASSET="5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225"\n$ export TDEX_EXPLORER_ENDPOINT="http://127.0.0.1:3001"\n$ tdexd\n\n# Run on Liquid and specify USDt as base asset instead of default L-BTC\n$ export TDEX_BASE_ASSET="ce091c998b83c78bb71a632313ba3760f1763d9cfcffae02258ffa9865a37bd2"\n$ tdexd\n')),(0,o.kt)("p",null,"By default, you can find the data directory at the path ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.tdex-daemon")," if using Linux or ",(0,o.kt)("inlineCode",{parentName:"p"},"~/Library/Application\\ Support/Tdex-daemon")," if using MacOs instead."),(0,o.kt)("p",null,"You can change the default path by exporting it into the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"TDEX_DATA_DIR_PATH"),". "),(0,o.kt)("p",null,"Next step is to ",(0,o.kt)("a",{parentName:"p",href:"/docs/provider/daemon/getting_started/configure_cli"},"configure the operator CLI"),"."))}s.isMDXComponent=!0}}]);