"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[88],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},961:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"CLI",sidebar_position:4},s=void 0,d={unversionedId:"trader/cli",id:"trader/cli",isDocsHomePage:!1,title:"CLI",description:"Command line interface for making swaps and trades on TDEX",source:"@site/docs/trader/cli.md",sourceDirName:"trader",slug:"/trader/cli",permalink:"/docs/trader/cli",editUrl:"https://github.com/tdex-network/dev-portal/edit/master/docs/trader/cli.md",version:"current",sidebarPosition:4,frontMatter:{title:"CLI",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Browser App",permalink:"/docs/trader/browser"},next:{title:"JavaScript",permalink:"/docs/trader/SDK/javascript"}},u=[{value:"Commands",id:"commands",children:[{value:"Info",id:"info",children:[]},{value:"Network",id:"network",children:[]},{value:"Wallet",id:"wallet",children:[]},{value:"Provider",id:"provider",children:[]},{value:"Market",id:"market",children:[]},{value:"Trade",id:"trade",children:[]},{value:"Run the daemon",id:"run-the-daemon",children:[]},{value:"Use <code>tdex-cli</code> to trade",id:"use-tdex-cli-to-trade",children:[]}]}],c={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Command line interface for making swaps and trades on TDEX"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u2b07\ufe0f Install")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Install with ",(0,l.kt)("strong",{parentName:"li"},"yarn"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ yarn global add tdex-cli\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Install with ",(0,l.kt)("strong",{parentName:"li"},"npm"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm i -g tdex-cli\n")),(0,l.kt)("p",null,"By default, the ",(0,l.kt)("inlineCode",{parentName:"p"},"tdex-cli")," will use the ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.tdex-cli")," as data directory, current state and private key will be stored in there."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Custom datadir (optional)")),(0,l.kt)("p",null,"Configure custom directory for data persistence. You should have write permissions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ export TDEX_CLI_PATH=/absolute/path/to/data/dir\n$ tdex-cli help\n")),(0,l.kt)("h2",{id:"commands"},"Commands"),(0,l.kt)("h3",{id:"info"},"Info"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Show current persisted state")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ tdex-cli info\n")),(0,l.kt)("h3",{id:"network"},"Network"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Set the network to work against")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"NOTICE With the --explorer flag you can set your own electrum REST server (Blockstream/electrs) for connecting to the blockchain.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# Mainnet\n# This uses blockstream.info as explorer\n$ tdex-cli network liquid\n# Regtest\n# This uses nigiri.network as explorer\n$ tdex-cli network regtest\n# Custom Esplora\n$ tdex-cli network regtest --explorer http://localhost:3001\n")),(0,l.kt)("h3",{id:"wallet"},"Wallet"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create or Restore Wallet")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ tdex-cli wallet\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Generate a new address")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ tdex-cli wallet address\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Get Wallet Balance")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ tdex-cli wallet balance\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Send from Wallet")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ tdex-cli wallet send\n")),(0,l.kt)("h3",{id:"provider"},"Provider"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Select and connect to a liquidity provider")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ tdex-cli connect https://provider.tdex.network:9945\n")),(0,l.kt)("p",null,"From this point, all the commands will work against this selected provider."),(0,l.kt)("h3",{id:"market"},"Market"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"List all available markets for current provider")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ tdex-cli market list\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Select a market to use for trading")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ tdex-cli market LBTC-USDt\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Get current exchange rate for selected market")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ tdex-cli market price\n")),(0,l.kt)("h3",{id:"trade"},"Trade"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Start a swap against the selected provider")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ tdex-cli trade\n")),(0,l.kt)("h1",{id:"advanced-buysell-example-on-regtest-with-nigiri"},"Advanced: BUY/SELL example on regtest with Nigiri"),(0,l.kt)("p",null,"This example shows how to buy and sell tokens using a tdex daemon running on a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/vulpemventures/nigiri"},"Nigiri")," regtest network and ",(0,l.kt)("inlineCode",{parentName:"p"},"tdex-cli"),"."),(0,l.kt)("h3",{id:"run-the-daemon"},"Run the daemon"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Clone and build the daemon from ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/TDex-network/tdex-daemon"},"Tdex-network/tdex-daemon"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ git clone https://github.com/TDex-network/tdex-daemon\n$ cd tdex-daemon\n$ make build-linux\n$ make build-cli-linux\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Launch the tdex daemon")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"make run-linux")," sets env variables such as the daemon use the default nigiri regtest network."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ nigiri start --liquid\n$ make run-linux\n")),(0,l.kt)("p",null,"Then let's use the operator CLI to setting up our daemon."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# init the cli configuration\n$ ./build/tdex-linux-amd64 config init\n# generate a new mnemonic\n$ SEED=$(./build/tdex-linux-amd64 genseed)\n# init the provider's wallet\n$ ./build/tdex-linux-amd64 init --seed $SEED --password secret\n# unlock the wallet using the password\n$ ./build/tdex-linux-amd64 unlock --password secret\n")),(0,l.kt)("p",null,"Next, we need to fund the ",(0,l.kt)("strong",{parentName:"p"},"fee account")," of our provider. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./build/tdex-linux-amd64 depositfee\n# the wallet will return a confidential address, we need to send some LBTC to this one\n# here, we use nigiri faucet for example\n# /!\\ REPLACE by your deposit address /!\\\n$ nigiri faucet --liquid YOUR_FEE_ACCOUNT_ADDRESS_HERE\n")),(0,l.kt)("p",null,"Well, now let's create a market:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# first create an empty market\n$ ./build/tdex-linux-amd64 depositmarket\n# this will return an address, we need to send it some LBTC and some ALTCOIN\n# again, let's use nigiri for that\n# let's fund the market address with LBTC\n# LBTC will be the base asset of the market\n$ nigiri faucet --liquid YOUR_MARKET_ADDRESS\n# Let's generate a new ALTCOIN and send 100 assets to the market address\n# The generated altcoin will be the quote_asset\n$ nigiri mint YOUR_MARKET_ADDRESS 100\n# /!\\ Copy the altcoin asset hash in the clipboard!\n")),(0,l.kt)("p",null,"We need to open the new market, by default a new market is not tradable."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# Select the market using `config set`\n$ ./build/tdex-linux-amd64 config set base_asset 5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225\n$ ./build/tdex-linux-amd64 config set quote_asset ALTCOIN_ASSET_HASH_HERE\n# Then make the market tradable\n$ ./build/tdex-linux-amd64 open\n")),(0,l.kt)("p",null,"Congrats! The daemon is running and has a tradable market LBTC/ALTCOIN."),(0,l.kt)("h3",{id:"use-tdex-cli-to-trade"},"Use ",(0,l.kt)("inlineCode",{parentName:"h3"},"tdex-cli")," to trade"),(0,l.kt)("p",null,"Now we will use ",(0,l.kt)("inlineCode",{parentName:"p"},"tdex-cli"),", the CLI for traders."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# set up network to regtest + config local nigiri explorer\n$ tdex-cli network regtest --explorer http://127.0.0.1:3001\n# connect to localhost daemon\n$ tdex-cli connect localhost:9945\n# generate new wallet (or import it from seed) using wallet\n$ tdex-cli wallet\n# let's generate a new address and fund it\n$ tdex-cli wallet address\n$ nigiri faucet --liquid TRADER_ADDRESS_HERE\n")),(0,l.kt)("p",null,"Our trader account owns LBTC, thus he can use ",(0,l.kt)("inlineCode",{parentName:"p"},"trade")," to SELL them (and so buy some altcoins!)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# list the market available\n$ tdex-cli market list\n# copy the market recently created, it should be something like 'LBTC-6f02'\n# then select this market (replace by your market pair!)\n$ tdex-cli market LBTC-6f02\n# use `trade` and select SELL and follow the instructions\n$ tdex-cli trade\n")),(0,l.kt)("p",null,"We have sent 1 LBTC and receive 50.125 ALTCOINs ! Now I BUY some LBTC using my ALTCOINs:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# Select the BUY option this time!\n$ tdex-cli trade\n# and follow the instructions, try to buy 1 BTC\n")))}p.isMDXComponent=!0}}]);