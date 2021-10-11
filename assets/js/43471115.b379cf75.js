"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[8484],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),u=o,h=f["".concat(d,".").concat(u)]||f[u]||p[u]||a;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9491:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={title:"Overview",sidebar_position:1},d=void 0,l={unversionedId:"provider/feeder/overview",id:"provider/feeder/overview",isDocsHomePage:!1,title:"Overview",description:"TDEX Feeder is a service useful to feed one or more markets of one or more daemons with prices sourced from an exchange.",source:"@site/docs/provider/feeder/overview.md",sourceDirName:"provider/feeder",slug:"/provider/feeder/overview",permalink:"/docs/provider/feeder/overview",editUrl:"https://github.com/tdex-network/dev-portal/edit/master/docs/provider/feeder/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"TDexdconnect",permalink:"/docs/provider/tdexdconnect"},next:{title:"Getting Started",permalink:"/docs/provider/feeder/getting_started"}},s=[{value:"Configuration",id:"configuration",children:[{value:"JSON file",id:"json-file",children:[]},{value:"Environment variables",id:"environment-variables",children:[]}]},{value:"Connect to target with Tdexdconnect URL",id:"connect-to-target-with-tdexdconnect-url",children:[]},{value:"What&#39;s next?",id:"whats-next",children:[]}],p={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/tdex-network/tdex-feeder"},"TDEX Feeder")," is a service useful to feed one or more markets of one or more daemons with prices sourced from an exchange."),(0,a.kt)("p",null,"The prices are fed to the daemon by consuming its ",(0,a.kt)("inlineCode",{parentName:"p"},"UpdateMarketPrice")," RPC of the Operator interface.",(0,a.kt)("br",{parentName:"p"}),"\n","The daemon, therefore, requires to be fully initialized and synced in order to receive and store incoming prices.",(0,a.kt)("br",{parentName:"p"}),"\n","On the other side, the feeder must have the proper macaroon and TLS certificate to establish a secure connection with the Operator interface in case it has macaroon/TLS enabled."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"json-file"},"JSON file"),(0,a.kt)("p",null,"The Feeder is configured with a JSON file like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "price_feeder": "kraken",\n  "interval": 300000,\n  "markets": [\n    {\n      "base_asset": "6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d",\n      "quote_asset": "ce091c998b83c78bb71a632313ba3760f1763d9cfcffae02258ffa9865a37bd2",\n      "ticker": "XBT/USDT",\n      "targets": [\n        {\n          "macaroons_path": "",\n          "tls_cert_path": "",\n          "rpc_address": "localhost:9000"\n        }\n      ]\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"In this example, the service is configured to connect to Kraken exchange.",(0,a.kt)("br",{parentName:"p"}),"\n","It must forward incoming feeds related to the BTC/USDt market every 5 minutes (",(0,a.kt)("em",{parentName:"p"},"interval")," time expressed in milliseconds) to a daemon that can be reached at the address ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:9000")," via insecure connection (configured with macaroons auth/TLS encryption disabled). Take a look ",(0,a.kt)("a",{parentName:"p",href:"/docs/provider/feeder/getting_started#securely-connect-feeder-to-daemon"},"here")," to see how to connect them via a secure connection"),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"targets")," is defined as a JSON list in order to let the feeder forward incoming price feeds of a single market to multiple daemons if needed."),(0,a.kt)("p",null,"Similarly, ",(0,a.kt)("inlineCode",{parentName:"p"},"markets")," is also a JSON list therefore it's possible to configure the feeder to ask for feeds related to multiple markets. Each market has its own targets that will be updated periodically."),(0,a.kt)("p",null,"The latest version of this tool (v0.2.1 at the time of writing) supports only Kraken as price feeder."),(0,a.kt)("h3",{id:"environment-variables"},"Environment variables"),(0,a.kt)("p",null,"The feeder supports 2 optional configuration arguments that can be modified via environment variables:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FEEDER_CONFIG_PATH")," to change the path where to find the JSON file (defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"./config.json"),").",(0,a.kt)("br",{parentName:"li"}),"In this case, it's required to define the path, included the name of the JSON file itself - it can be different from the default one."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FEEDER_LOG_LEVEL")," to increase or decrease the verbosity of the service during its lifetime.")),(0,a.kt)("h2",{id:"connect-to-target-with-tdexdconnect-url"},"Connect to target with Tdexdconnect URL"),(0,a.kt)("p",null,"It is possible for the feeder to connect to its target daemons via ",(0,a.kt)("em",{parentName:"p"},"tdexdconnect")," URLs instead of explicitly specify the address and the paths to the TLS certificate and macaroon files."),(0,a.kt)("p",null,"Once you ",(0,a.kt)("a",{parentName:"p",href:"/docs/provider/tdexdconnect#generate-connection-url-for-tdex-feeder"},"obtain the connection URL")," for this service, you can use it in the config file like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "price_feeder": "kraken",\n  "interval": 300000,\n  "markets": [\n    {\n      "base_asset": "6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d",\n      "quote_asset": "ce091c998b83c78bb71a632313ba3760f1763d9cfcffae02258ffa9865a37bd2",\n      "ticker": "XBT/USDT",\n      "targets": [\n        {\n          "tdexdconnect_url": "tdexdconnect://localhost:9000?cert=MIICpzCCAk6gAwIBAgIRAL8OABMF9I4BA7qXQaqXwfIwCgYIKoZIzj0EAwIwQjENMAsGA1UEChMEdGRleDExMC8GA1UEAxMoTUJQZGlQaXJhbGJlcnRvLmhvbWVuZXQudGVsZWNvbWl0YWxpYS5pdDAeFw0yMTEwMDcxNDM2MTFaFw0yMjEwMDgxNDM2MTFaMEIxDTALBgNVBAoTBHRkZXgxMTAvBgNVBAMTKE1CUGRpUGlyYWxiZXJ0by5ob21lbmV0LnRlbGVjb21pdGFsaWEuaXQwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAAQ6ANPEW3WLpgD6ziosN7PdvRWwg7kYR9CrIu3qvZNychEPC9mUsXKpTVIr5B1xAaFVlCktJ97M_EtDxrUYujJOo4IBIzCCAR8wDgYDVR0PAQH_BAQDAgKkMA8GA1UdEwEB_wQFMAMBAf8wHQYDVR0OBBYEFOjOtc87r1eukTrhwXvns90Fmae4MIHcBgNVHREEgdQwgdGCKE1CUGRpUGlyYWxiZXJ0by5ob21lbmV0LnRlbGVjb21pdGFsaWEuaXSCCWxvY2FsaG9zdIIEdW5peIIKdW5peHBhY2tldIcEfwAAAYcQAAAAAAAAAAAAAAAAAAAAAYcQ_oAAAAAAAAAAAAAAAAAAAYcQ_oAAAAAAAAAQCEC_uSHHLIcEwKgB14cQ_oAAAAAAAACcVyn__lDMuocQ_oAAAAAAAADp7kZyxh-R8IcQ_oAAAAAAAABBBISbVTjXoYcQ_oAAAAAAAACu3kj__gARIjAKBggqhkjOPQQDAgNHADBEAiB92avtyxI535y1zgtEUYSoSpve6rU5mPPU5j7MLm16kwIgfZuZma37mh70_8b659p3yO1-BzI8jFwkzIzbaRnFnnQ&macaroon=AgEFdGRleGQChQEDChAaDhCJUurJJwLVwvzUH-hZEgEwGhUKBm1hcmtldBIEcmVhZBIFd3JpdGUaFwoIb3BlcmF0b3ISBHJlYWQSBXdyaXRlGg4KBXByaWNlEgV3cml0ZRoVCgZ3YWxsZXQSBHJlYWQSBXdyaXRlGhYKB3dlYmhvb2sSBHJlYWQSBXdyaXRlAAAGIHMNd7Gp6l1gYiChAySJ3JmhriJVxW8F7nF2b4aouZXl"\n        }\n      ]\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"In this example, the feeder connects to a daemon in localhost and updates the prices of the LBTC/USDt market every 5 minutes. The TLS certificate and the macaroon to be used for a secure connection are encoded in the URL instead of being presented within files."),(0,a.kt)("h2",{id:"whats-next"},"What's next?"),(0,a.kt)("p",null,"Now that you have completed the configuration, it's time to ",(0,a.kt)("a",{parentName:"p",href:"/docs/provider/feeder/getting_started"},"start your feeder"),"."))}f.isMDXComponent=!0}}]);