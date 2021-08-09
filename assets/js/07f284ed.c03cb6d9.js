"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[509],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),m=s,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4302:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=n(7462),s=n(3366),r=(n(7294),n(3905)),i=["components"],o={},d="JavaScript",l={unversionedId:"trader/SDK/javascript",id:"trader/SDK/javascript",isDocsHomePage:!1,title:"JavaScript",description:"JavaScript SDK for building trader-facing applications on top of TDEX",source:"@site/docs/trader/SDK/javascript.md",sourceDirName:"trader/SDK",slug:"/trader/SDK/javascript",permalink:"/docs/trader/SDK/javascript",editUrl:"https://github.com/tdex-network/dev-portal/edit/master/docs/trader/SDK/javascript.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CLI",permalink:"/docs/trader/cli"},next:{title:"Overview",permalink:"/docs/provider/intro"}},p=[{value:"\u2b07\ufe0f Install",id:"\ufe0f-install",children:[]},{value:"\ud83d\udcc4 Usage",id:"-usage",children:[{value:"Identity",id:"identity",children:[]},{value:"Trade",id:"trade",children:[]},{value:"Swap",id:"swap",children:[]}]}],c={toc:p};function u(e){var t=e.components,n=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"javascript"},"JavaScript"),(0,r.kt)("p",null,"JavaScript SDK for building trader-facing applications on top of TDEX"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/TDex-network/tdex-sdk"},"https://github.com/TDex-network/tdex-sdk")),(0,r.kt)("h2",{id:"\ufe0f-install"},"\u2b07\ufe0f Install"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install with ",(0,r.kt)("strong",{parentName:"li"},"yarn"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ yarn add tdex-sdk\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install with ",(0,r.kt)("strong",{parentName:"li"},"npm"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm install --save tdex-sdk\n")),(0,r.kt)("h2",{id:"-usage"},"\ud83d\udcc4 Usage"),(0,r.kt)("h3",{id:"identity"},"Identity"),(0,r.kt)("p",null,"Identities are Javascript objects representing the trader's private key(s). They come from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vulpemventures/ldk"},"Liquid Development Kit (LDK)")," and implement the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vulpemventures/ldk/blob/master/src/identity/identity.ts#L32-L52"},"IdentityInterface"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"tdex-sdk")," re-exports LDK classes, types and functions."),(0,r.kt)("h4",{id:"instanciate-a-mnemonic-identity"},"Instanciate a ",(0,r.kt)("inlineCode",{parentName:"h4"},"Mnemonic")," Identity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { IdentityOpts, MnemonicOpts, IdentityType, Mnemonic } from "tdex-sdk";\n\nconst options: IdentityOpts<MnemonicOpts> = {\n  chain: "regtest",\n  type: IdentityType.Mnemonic,\n  opts: {\n    mnemonic: "<MNEMONIC WORDS>",\n  },\n};\n\nconst identity = new Mnemonic(options);\n')),(0,r.kt)("h4",{id:"restore-your-identity"},"Restore your Identity"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Restorer")," are functions using to restore the mnemonic ",(0,r.kt)("strong",{parentName:"p"},"addresses"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"mnemonicRestorerFromEsplora")," is one of the restorer exported by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vulpemventures/ldk"},"LDK"),". It requests an Esplora endpoint to inspect the blockchain. It follows the spec described by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki#the-key-tree"},"BIP32"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const identity = await mnemonicRestorerFromEsplora(new Mnemonic(options))({\n  esploraURL: "https://blockstream.info/liquid/api", // blockstream explorer URL\n  gapLimit: 20, // default gap limit for BIP44/BIP32 wallet\n});\n\n// the identity\'s addresses already used are re-generated\nconst notUsedAddress = await identity.getNextAddress();\n')),(0,r.kt)("h4",{id:"fetch-and-unblind-utxos"},"Fetch and unblind UTXOS"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fetchAndUnblindUtxos")," uses an Esplora endpoint to fetch the identity's unspents."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const addrs = await identity.getAddresses(); // return all the addresses restored/generated\nconst utxos = await fetchAndUnblindUtxos(\n  addrs, // addrs contains the private blinding keys using to unblind the utxos\n  "https://blockstream.info/liquid/api"\n);\n')),(0,r.kt)("h4",{id:"send-a-confidential-transaction-with-mnemonic"},"Send a confidential transaction with Mnemonic"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import {\n  walletFromAddresses,\n  Mnemonic,\n  IdentityType,\n  greedyCoinSelector,\n  address,\n  mnemonicRestorerFromEsplora,\n  decodePset,\n} from "tdex-sdk";\n\n// we\'ll send 850 sats of LBTC (5ac9f65...)\nconst recipientInfos = {\n  value: 850,\n  asset: "5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225",\n  address:\n    "Azpk3oLvSDtYScUcWTc2VDyqj78HmNqPuoYDEGMZtPNLEJmNz33cy36S1cJXAAoikLVf2Zv4muNM2FCQ",\n};\n\nconst network = "regtest"; // "liquid" for mainchain\nconst esploraURL = "http://localhost:3001"; // LDK uses Esplora endpoints to fetch blockchain data\n// you can use Nigiri to run a local regtest node: https://nigiri.vulpem.com/\n\n// Create the Identity\nconst identity = new Mnemonic({\n  chain: network,\n  type: IdentityType.Mnemonic,\n  opts: {\n    mnemonic: "<MNEMONIC WORDS>",\n  },\n});\n\n// Let\'s use Esplora to re-generate already used addresses (LDK restorer)\nconst restoredIdentity = await mnemonicRestorerFromEsplora(identity)({\n  esploraURL,\n  gapLimit: 20,\n});\n\n// Get addresses from identity\nconst addresses = await restoredIdentity.getAddresses();\n\n// create a WalletInterface object from addresses, we\'ll use it to build the PSET\n// `walletFromAddresses` will fetch and unblind unspents.\nconst wallet = await walletFromAddresses(addresses, esploraURL, network);\n\nconst changeAddress = await identity.getNextChangeAddress();\n\n// buildTx lets to create PSET ready to be signed by Identity\nlet tx = wallet.buildTx(\n  wallet.createTx(), // -> create an empty PSET\n  [recipientInfos], // the outputs to create\n  greedyCoinSelector(), // how the build must select the unspents to fund the transaction\n  (asset) => changeAddress.confidentialAddress, // specify to builder the change address to use\n  true // will add the fee output, default to false\n);\n\n// we can blind our transaction using identity\ntx = await identity.blindPset(\n  tx,\n  [0, 1], // 1 is change, 0 is the recipient output\n  new Map().set(\n    0, // here, we only need to specify blinding key for outputs not owned by our identity\n    address.fromConfidential(recipientInfos.address).blindingKey.toString("hex")\n  )\n);\n\n// Now we can sign with identity abstraction\nconst signedTx = await identity.signPset(tx);\n\n// finalize the tx and encode to hex\nconst finalizedTx = decodePset(signedTx)\n  .finalizeAllInputs()\n  .extractTransaction()\n  .toHex();\n\n// finalizedTx can be broadcasted\nconsole.log(finalizedTx);\n')),(0,r.kt)("h3",{id:"trade"},"Trade"),(0,r.kt)("p",null,"Trade against a Liquidity provider in the TDEX network. This fully implements ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tdex-network/tdex-specs/blob/master/04-trade-protocol.md"},(0,r.kt)("strong",{parentName:"a"},"BOTD#4"))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Trade")," object provides the API using to interact with TDex daemons. The constructor takes a configuration object with the following options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"providerUrl"),": the TDex daemon endpoint, hosted by a Liquidity provider."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"explorerUrl"),": the Esplora endpoint using to get blockchain data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"utxos"),": the trader's unspents. You can ",(0,r.kt)("a",{parentName:"li",href:"#fetch-and-unblind-utxos"},"fetch them")," with LDK."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"coinSelector"),": specify the strategy used to select utxos during transaction creation.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const trade = new Trade({\n  providerUrl: "provider.tdex.network:9945",\n  explorerUrl: "https://blockstream.info/liquid/api",\n  utxos: traderUtxos, // an array of UtxoInterface\n  coinSelector: greedyCoinSelector(), // this is exported by tdex-sdk\n});\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"utxos")," are ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vulpemventures/ldk/blob/master/src/types.ts#L33"},"JS objects")," wrapping utxo's data. They can be fetched without LDK. However, they ",(0,r.kt)("strong",{parentName:"p"},"must")," be unblinded in case of ",(0,r.kt)("a",{parentName:"p",href:"https://elementsproject.org/features/confidential-transactions"},"confidential outputs"),".")),(0,r.kt)("h4",{id:"market"},"Market"),(0,r.kt)("p",null,"We'll trade on LBTC<->USDT market. ",(0,r.kt)("inlineCode",{parentName:"p"},"MarketInterface")," describes the market with asset hashes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const market = {\n  baseAsset: "6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d", // L-BTC\n  quoteAsset:\n    "c5870288a7c9eb5db398a5b5e7221feb9753134439e8ed9f569b0eea5a423330", // USDT\n};\n')),(0,r.kt)("h4",{id:"sell-l-btc"},"Sell L-BTC"),(0,r.kt)("p",null,"Then, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Trade")," instance, we are able to sell 10 000 sats of L-BTC. At this step, you need an ",(0,r.kt)("a",{parentName:"p",href:"#identity"},"IdentityInterface")," in order to sign the PSET."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// sell ALWAYS send baseAsset and receive quoteAsset\n// `trade` will select the baseAsset unspents.\nconst tradeTxID = await trade.sell({\n  market, // our MarketInterface object\n  amount: 100000, // expressed in satoshis\n  asset: market.baseAsset,\n  identity: identityInterface,\n});\n")),(0,r.kt)("h4",{id:"buy-l-btc"},"Buy L-BTC"),(0,r.kt)("p",null,"Contrary to ",(0,r.kt)("inlineCode",{parentName:"p"},"trade.sell"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"trade.buy")," function lets to buy the baseAsset (L-BTC here)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// sell ALWAYS send quoteAsset and receive baseAsset\n// `trade` will select the quoteAsset unspents.\nconst tradeTxID = await trade.buy({\n  market, // our MarketInterface object\n  amount: 100000, // expressed in satoshis\n  asset: market.baseAsset,\n  identity: identityInterface,\n});\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"asset")," parameter is using to specify the amount of base or quote asset in a trade. Thus, if u want to sell the ",(0,r.kt)("strong",{parentName:"p"},"base asset")," in order to receive a certain amount of ",(0,r.kt)("strong",{parentName:"p"},"quote asset"),", you can specify it in ",(0,r.kt)("inlineCode",{parentName:"p"},"sell()")," parameter object."),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// sell baseAsset and receive quoteAsset\nconst tradeTxID = await trade.sell({\n  market,\n  amount: 50000,\n  asset: market.quoteAsset, // receive 50000 sats of *quoteAsset* but still send *baseAsset*!\n  identity: identityInterface,\n});\n"))),(0,r.kt)("h4",{id:"preview"},"Preview"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"trade.preview")," method can be used to compute market's prices."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const {\n  assetToBeSent\n  amountToBeSent // amount of baseAsset satoshis to sell in order to receive 50000 quoteAsset\n  assetToReceive\n  amountToReceive\n} = await trade.preview({\n  market,\n  tradeType: TradeType.SELL,\n  amount: 50000,\n  asset: market.quoteAsset\n});\n")),(0,r.kt)("h3",{id:"swap"},"Swap"),(0,r.kt)("p",null,"Create manually Swap messages without connecting to a provider. This fully implements ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tdex-network/tdex-specs/blob/master/03-swap-protocol.md"},(0,r.kt)("strong",{parentName:"a"},"BOTD#3"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { Swap } from "tdex-sdk";\n\nconst swap = new Swap({ chain: "regtest" });\n\nconst LBTC = "5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225";\nconst USDT = "c5870288a7c9eb5db398a5b5e7221feb9753134439e8ed9f569b0eea5a423330";\n\n// Alice starts a swap proposal\n//\n// You need to create and provide an unsigned transaction that has\n// enough inputs to cover amountToBeSent and the desired output\n// in case of confidential inputs/outputs, you also need to provide the blinding keys.\nconst swapRequestMessage = await swap.request({\n  assetToBeSent: USDT,\n  amountToBeSent: 300,\n  assetToReceive: LBTC,\n  amountToReceive: 0.05,\n  psetBase64: "...",\n  inputBlindingKeys: {},\n  outputBlindingKeys: {},\n});\n\n//Bob parses the request and inspect the terms\nlet json = Swap.parse({\n  message: swapRequestMessage,\n  type: "SwapRequest",\n});\n\n// Bob provides the transaction with his signed inputs and outputs\n// he also needs to add its blinding keys\nconst swapAcceptMessage = await swap.accept({\n  message: swapRequestMessage,\n  psetBase64: "...",\n  inputBlindingKeys: {},\n  outputBlindingKeys: {},\n});\n\n//Alice can parse again the message and inspect the terms (optional)\njson = Swap.parse({\n  message: swapAcceptMessage,\n  type: "SwapAccept",\n});\n\n// Alice adds his signed inputs to the transaction\nconst swapCompleteMessage = await swap.complete({\n  message: swapAcceptMessage,\n  psetBase64: "...",\n});\n\n// Alice can sends the completed swap to Bob\n// Now Bob finalize the transaction and broadcast it\n')))}u.isMDXComponent=!0}}]);