"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[628],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1325:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={slug:"tdex-terraform-deploy",title:"Deploy a TDEX Daemon to AWS with Terraform",author:"Alexander K",author_title:"TDEX Contributor",tags:["terraform","automation","tdex","deploy"]},s=void 0,c={permalink:"/blog/tdex-terraform-deploy",editUrl:"https://github.com/tdex-network/dev-portal/edit/master/blog/blog/2021-09-01-tdex-terraform-automation.md",source:"@site/blog/2021-09-01-tdex-terraform-automation.md",title:"Deploy a TDEX Daemon to AWS with Terraform",description:"Configure and run TDex box easily using Terraform automation.",date:"2021-09-01T00:00:00.000Z",formattedDate:"September 1, 2021",tags:[{label:"terraform",permalink:"/blog/tags/terraform"},{label:"automation",permalink:"/blog/tags/automation"},{label:"tdex",permalink:"/blog/tags/tdex"},{label:"deploy",permalink:"/blog/tags/deploy"}],readingTime:1.625,truncated:!0},p=[{value:"Create user and obtain AWS Keys",id:"create-user-and-obtain-aws-keys",children:[]},{value:"Install Terraform",id:"install-terraform",children:[]},{value:"Proceed with cloning and deploy",id:"proceed-with-cloning-and-deploy",children:[]}],u={toc:p};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Configure and run TDex box easily using Terraform automation. "),(0,o.kt)("h3",{id:"create-user-and-obtain-aws-keys"},"Create user and obtain AWS Keys"),(0,o.kt)("p",null,"As a first step it is required to obtain AWS access and secret keys. Best practice is to create new user in AWS IAM.\nPlease navigate to Services > IAM page > Add user.\nProceed with opening AWS IAM users page, and click on Add user. Provide user with name, and below, for the Access type select Programmatic access. ",(0,o.kt)("img",{alt:"Add User",src:r(3422).Z}),"\nNext, make sure that your AWS account(access key) has all required privileges to create EC2 instances and S3 access.\nPermissions you need (EC2 full, S3 full, VPC access)\n",(0,o.kt)("img",{alt:"Attach permissions",src:r(8978).Z})),(0,o.kt)("p",null,"Once you add Permissions and Tags, click Create user. That will bring you to latest page provided with AWS Access and Secret Keys.\nCopy your keys to safe place and do not share it with anyone.\n",(0,o.kt)("img",{alt:"Attach permissions",src:r(275).Z})),(0,o.kt)("p",null,"Check the documentation ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html"},"here")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"install-terraform"},"Install Terraform"),(0,o.kt)("p",null,"Next step is to install Terraform on your machine.\nThe easiest way is to follow its documentation ",(0,o.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/cli/install/apt.html"},"here")," \\\nOr follow this installation for APT Packages for Debian and Ubuntu"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -\n$ sudo apt-add-repository "deb [arch=$(dpkg --print-architecture)] https://apt.releases.hashicorp.com $(lsb_release -cs) main"\n$ sudo apt install terraform\n')),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"proceed-with-cloning-and-deploy"},"Proceed with cloning and deploy"),(0,o.kt)("p",null,"Clone the TDex Box repository and enter its directory. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/tdex-network/tdex-box.git\ncd tdex-box\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"On the AWS AMI Marketplace, find Ubuntu 20.04 public AMI, accessible in the region you are planing to deploy service and copy it's AMI ID. "),(0,o.kt)("p",null,"Once you have everything in place, just execute deploy.sh and it will prompt you for all the parameters in order provided above.\nPlease enter parameters carefully. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ cd terabox/\n$ chmod +x deploy.sh\n$ ./deploy.sh\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Deploy",src:r(9113).Z})),(0,o.kt)("p",null,"Since it is good practice to have backup enabled, please provide S3 bucket name when deploying."))}d.isMDXComponent=!0},3422:function(e,t,r){t.Z=r.p+"assets/images/add-user-11d882df7faae15f701edb54ee2ab67c.png"},8978:function(e,t,r){t.Z=r.p+"assets/images/attach-perms-617d07e15336bce352380e648778a124.png"},9113:function(e,t,r){t.Z=r.p+"assets/images/deploy-3bf69430842f2fe5c689a7f8fe254acd.png"},275:function(e,t,r){t.Z=r.p+"assets/images/user-keys-bf94f5fd19fa23443ecccf24126a65b9.png"}}]);