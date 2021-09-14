"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[590],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,b=u["".concat(c,".").concat(h)]||u[h]||p[h]||r;return n?o.createElement(b,i(i({ref:t},l),{},{components:n})):o.createElement(b,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3487:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],d={title:"Webhooks",sidebar_position:4},c=void 0,s={unversionedId:"provider/daemon/webhooks",id:"provider/daemon/webhooks",isDocsHomePage:!1,title:"Webhooks",description:"The daemon supports handling webhooks that can be invoked whenever a certain event occurs during its lifecycle. Following, there's the list of all events a webhook can be registered for:",source:"@site/docs/provider/daemon/webhooks.md",sourceDirName:"provider/daemon",slug:"/provider/daemon/webhooks",permalink:"/docs/provider/daemon/webhooks",editUrl:"https://github.com/tdex-network/dev-portal/edit/master/docs/provider/daemon/webhooks.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Webhooks",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Deposit funds",permalink:"/docs/provider/daemon/deposit_funds"},next:{title:"Registry",permalink:"/docs/provider/registry"}},l=[{value:"Add webhook",id:"add-webhook",children:[]},{value:"List webhooks",id:"list-webhooks",children:[]},{value:"Remove webhook",id:"remove-webhook",children:[]},{value:"Event payload",id:"event-payload",children:[{value:"TRADE_SETTLED",id:"trade_settled",children:[]},{value:"ACCOUNT_WITHDRAW",id:"account_withdraw",children:[]}]}],p={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The daemon supports handling webhooks that can be invoked whenever a certain event occurs during its lifecycle. Following, there's the list of all events a webhook can be registered for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#event-payload",title:"trade_settled"},"TRADE_SETTLED")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#event-payload",title:"account_withdraw"},"ACCOUNT_WITHDRAW")),(0,r.kt)("li",{parentName:"ul"},"ACCOUNT_LOW_BALANCE (coming soon)")),(0,r.kt)("p",null,"A webhook is defined by an event for which it's registered to, an endpoint that is invoked whenever the event occurs, and optionally a secret used to sign a ",(0,r.kt)("a",{parentName:"p",href:"https://jwt.io/introduction"},"JWT token")," to authenticate requests."),(0,r.kt)("h2",{id:"add-webhook"},"Add webhook"),(0,r.kt)("p",null,"A webhook can be added to those handled by the daemon with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# To add a secured webhook\n$ tdex addwebhook --action TRADE_SETTLED --endpoint http://localhost:8888/endpoint --secret supersecret\n# To add a non-secured webhook\n$ tdex addwebhook --action TRADE_SETTLED --endpoint http://localhost:8888/endpoint\n# hook id: 00000-000-000-0000\n")),(0,r.kt)("p",null,"The daemon in response returns the id of the newly webhook created."),(0,r.kt)("h2",{id:"list-webhooks"},"List webhooks"),(0,r.kt)("p",null,"You can list all the webhooks registered for some specific event with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ tdex listwebhooks --action TRADE_SETTLED\n# [\n#   {\n#     "id": 00000-000-000-0000,\n#     "action": "TRADE_SETTLED",\n#     "endpoint": "http://localhost:8888/endpoint",\n#     "is_secured": true\n#   }\n# ]\n')),(0,r.kt)("p",null,"A list of webhooks showing their id, event, endpoint and wheter a secret is set is returned."),(0,r.kt)("h2",{id:"remove-webhook"},"Remove webhook"),(0,r.kt)("p",null,"A webhook can be removed by specifing its id with the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ tdex removewebhook --id 00000-000-000-0000\n# removed hook with id: 00000-000-000-0000\n")),(0,r.kt)("p",null,"In response, you get the confirmation os the removal of the webhook"),(0,r.kt)("h2",{id:"event-payload"},"Event payload"),(0,r.kt)("p",null,"In this section you can find the payload sent by the daemon to a webhook endpoint whenever a certain event occurs. All payloads are represented in JSON format."),(0,r.kt)("p",null,"As mentioned, the daemon takes care of authenticating its requests by adding a JWT token. The daemon produces a signatures using the HMAC-SHA256 scheme, therefore the same must be used by the web server exposing the endpoint being invoked."),(0,r.kt)("h3",{id:"trade_settled"},"TRADE_SETTLED"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "txid": "68790873e2e56a86844f367f9c3d64ebadc1c6d61d8cda6df0dff8010139ea95",\n  "swap": {\n    "amount_p": 1447,\n    "asset_p":  "6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d",\n    "amount_r": 41790673,\n    "asset_r":  "ce091c998b83c78bb71a632313ba3760f1763d9cfcffae02258ffa9865a37bd2"\n  },\n  "price": {\n    "base_price":  0.00003462495088,\n    "quote_price": 28880.90739460\n  },\n  "market": {\n    "base_asset":  "6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d",\n    "quote_asset": "ce091c998b83c78bb71a632313ba3760f1763d9cfcffae02258ffa9865a37bd2"\n  },\n  "balance": {\n    "base_balance":  57556016,\n    "quote_balance": 376940871878\n  }\n}\n')),(0,r.kt)("h3",{id:"account_withdraw"},"ACCOUNT_WITHDRAW"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "market": {\n        "base_asset":  "6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d",\n        "quote_asset": "ce091c998b83c78bb71a632313ba3760f1763d9cfcffae02258ffa9865a37bd2"\n    },\n    "amount_withdraw": {\n    "base_amount": 10000000,\n        "quote_amount": 1000000000000,\n    },\n    "receiving_address": "lq1qqval07apclpjrlru50x3px9x2606fhy6h2m7km7zhgxjmqf8kxzm36mn7hxypzcuw7nk0mt25a658nzlysvjkkejc4kcuxqsc",\n    "txid": "b0ad86c8efcc4eadc74aab471196d7e0773f328ca7bb54dbe4eea1c7cf8c7445",\n  "balance": {\n    "base_balance": 47556016,\n    "quote_balance": 276940871878\n  }\n}\n')))}u.isMDXComponent=!0}}]);