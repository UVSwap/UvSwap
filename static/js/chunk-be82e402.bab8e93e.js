(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-be82e402"],{"005b":function(e,t,n){},"170c":function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address[]","name":"_base","type":"address[]"}],"name":"setBaseAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_router","type":"address"}],"name":"setRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"baseAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_fromToken","type":"address"},{"internalType":"address","name":"_toToken","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"getBestPathAmount","outputs":[{"internalType":"uint256","name":"bsetAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_lpAddress","type":"address"},{"internalType":"uint256","name":"_lpAmount","type":"uint256"},{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"getLpSwapToken","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"}],"name":"getPair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RouterAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]')},"38cf":function(e,t,n){var a=n("23e7"),r=n("1148");a({target:"String",proto:!0},{repeat:r})},"3fbb":function(e,t,n){"use strict";n("ab32")},"4e6c":function(e,t){e.exports="data:image/png;base64,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"},"7a71":function(e,t,n){"use strict";n("005b")},ab32:function(e,t,n){},bf17:function(e,t,n){"use strict";n.r(t);n("b0c0"),n("a9e3");var a=n("7a23"),r=n("4e6c"),i=n.n(r),s=Object(a["U"])("data-v-1a415502");Object(a["D"])("data-v-1a415502");var o={class:"container"},c={class:"upload"},l={class:"info-wrap"},d={class:"key"},u={class:"value"},p={class:"form"},b={class:"li flex-between"},m={class:"label"},f={class:"input-wrap flex-middle flex-between"},y={class:"li flex-between"},O={class:"label"},v={class:"input-wrap flex-middle flex-between"},j={class:"li",style:{display:"block"}},w={class:"label"},k={class:"textarea-wrap flex-middle flex-between"},A={class:"btn-wrap"},h=Object(a["k"])("img",{class:"img",src:i.a,alt:""},null,-1),g={class:"text"};Object(a["B"])();var x=s((function(e,t,n,r,i,x){var U=Object(a["I"])("HeadTop"),S=Object(a["I"])("van-field"),C=Object(a["I"])("van-button"),M=Object(a["I"])("van-dialog");return Object(a["A"])(),Object(a["h"])("div",o,[Object(a["k"])(U,{title:e.$t("index.上幣記錄")},{rightText:s((function(){return[Object(a["k"])("span",{onClick:t[1]||(t[1]=function(t){return e.$router.push({name:"RecordUploadToken"})})},Object(a["M"])(e.$t("index.記錄")),1)]})),_:1},8,["title"]),Object(a["k"])("div",c,[Object(a["k"])("div",l,[Object(a["k"])("div",d,Object(a["M"])(e.$t("index.上幣須知：")),1),Object(a["k"])("div",u,Object(a["M"])(e.$t("index.當前僅支持BSC鏈代幣，上幣前請先前往SWAP創建該代幣與USDT的流動性，創建成功後，支付key即上幣成功，並開放該代幣的的質押挖礦",{key:e.applyFee+" USDT"})),1)]),Object(a["k"])("div",p,[Object(a["k"])("div",b,[Object(a["k"])("div",m,Object(a["M"])(e.$t("index.代幣名字")),1),Object(a["k"])("div",f,[Object(a["k"])(S,{clearable:!0,modelValue:e.name,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.name=t}),placeholder:e.$t("index.請輸入项目名称")},null,8,["modelValue","placeholder"])])]),Object(a["k"])("div",y,[Object(a["k"])("div",O,Object(a["M"])(e.$t("index.合約地址")),1),Object(a["k"])("div",v,[Object(a["k"])(S,{clearable:!0,modelValue:e.token,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.token=t}),placeholder:e.$t("index.請輸入代币合約地址")},null,8,["modelValue","placeholder"])])]),Object(a["k"])("div",j,[Object(a["k"])("div",w,Object(a["M"])(e.$t("index.項目詳情")),1),Object(a["k"])("div",k,[Object(a["k"])(S,{modelValue:e.desc,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.desc=t}),rows:"1",type:"textarea",maxlength:"100",placeholder:e.$t("index.請輸入不多於key字",{key:100}),"show-word-limit":""},null,8,["modelValue","placeholder"])])])]),Object(a["k"])("div",A,[Number(e.usdtAllowance)>0?(Object(a["A"])(),Object(a["h"])(C,{key:0,class:"btn",loading:e.btnLoading,size:"large","loading-text":e.$t("index.提交")+"...",onClick:e.apply},{default:s((function(){return[Object(a["j"])(Object(a["M"])(e.$t("index.提交")),1)]})),_:1},8,["loading","loading-text","onClick"])):(Object(a["A"])(),Object(a["h"])(C,{key:1,class:"btn",loading:e.btnLoading,size:"large","loading-text":e.$t("index.授權")+"...",onClick:e.approveUsdt},{default:s((function(){return[Object(a["j"])(Object(a["M"])(e.$t("index.授權key",{key:"USDT"})),1)]})),_:1},8,["loading","loading-text","onClick"]))]),Object(a["k"])(M,{show:e.showDialog,"onUpdate:show":t[5]||(t[5]=function(t){return e.showDialog=t})},{default:s((function(){return[h,Object(a["k"])("div",g,Object(a["M"])(e.$t("index.上幣成功")),1)]})),_:1},8,["show"])])])})),U=n("5530"),S=n("1da1"),C=(n("96cf"),n("b680"),n("38cf"),n("1a2e")),M=n("47e2"),T=n("5502"),I=n("01ea"),G=n("722f"),R=n("79d6"),B=n("d399"),E=n("9d56"),z=n("901e"),D=n.n(z),Z=Object(a["U"])("data-v-8b19c410"),N=Z((function(e,t,n,r,i,s){return Object(a["A"])(),Object(a["h"])("div",null,[Object(a["k"])("input",{onChange:t[1]||(t[1]=function(){return r.getImages&&r.getImages.apply(r,arguments)}),multiple:n.multiple,type:"file",class:"btn",ref:"fileInput",accept:"image/*"},null,40,["multiple"])])})),L=(n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("06c5"));function V(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(L["a"])(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,i=e},f:function(){try{s||null==n["return"]||n["return"]()}finally{if(o)throw i}}}}n("d81d");var Q={props:{type:{default:"icon"},multiple:{default:!1}},setup:function(e,t){var n=t.emit,r=Object(M["b"])(),i=r.t,s=Object(a["m"])(),o=Object(a["E"])({$t:i,limitData:[{type:"icon",size:153600}],limitSize:0,temp:0,type:e.type,multiple:e.multiple}),c=function(e){var t=e.target.files;if(t&&t.length){B["a"].loading({duration:0});var n,a=V(t);try{for(a.s();!(n=a.n()).done;){var r=n.value;l(r)}}catch(i){a.e(i)}finally{a.f()}}},l=function(e){var t=e.size;if(o.limitData.map((function(e){e.type===o.type&&(o.limitSize=e.size)})),t>o.limitSize)return o.limitSize/1024/1024>=1?o.temp=o.limitSize/1024/1024+"MB":o.temp=o.limitSize/1024+"KB",Object(B["a"])(o.$t("index.圖片大小不能超過",{key:o.temp})),s.refs.fileInput.value="",B["a"].clear(),!1;d(e,(function(e){B["a"].clear(),n("imgSrc",e)}))},d=function(e,t){var n=new FileReader;n.onload=function(e){var n=e.target.result;t(n)},n.readAsDataURL(e)},u=Object(a["N"])(o);return Object(U["a"])(Object(U["a"])({},u),{},{getImages:c,compressor:l,getImgToBase64:d})}};n("cf23");Q.render=N,Q.__scopeId="data-v-8b19c410";var F=Q,W=n("170c"),Y={components:{HeadTop:C["a"],AppUpload:F},setup:function(){var e=Object(T["b"])(),t=Object(M["b"])(),n=t.t,r=Object(a["E"])({$t:n,address:Object(a["f"])((function(){return e.state.accounts[0]})),web3:Object(a["f"])((function(){return e.state.provider})),balance:0,imgSrc:"",name:"",token:"",desc:"",isPreview:!1,showDialog:!1,UvStakeContract:null,UsdtContract:null,RouterPathContract:null,usdtAllowance:0,applyFee:"0",btnLoading:!1,initContract:function(){r.UvStakeContract=new r.web3.eth.Contract(R,I["a"].uvStakeAddress),r.RouterPathContract=new r.web3.eth.Contract(W,I["a"].routerPath),r.UsdtContract=new r.web3.eth.Contract(G,I["a"].usdtAddress),r.initData()},initData:function(){r.getUsdtAllowance(),r.getApplyFee()},imgSrcHandle:function(e){r.imgSrc=e},getApplyFee:function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(){var t,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.UsdtContract.methods.decimals().call();case 2:return t=e.sent,e.next=5,r.UsdtContract.methods.balanceOf(r.address).call();case 5:return n=e.sent,e.next=8,r.UvStakeContract.methods.applyFee().call();case 8:a=e.sent,r.applyFee=new D.a(a).dividedBy(Math.pow(10,t)).toFixed(4),r.balanceOf=new D.a(n).dividedBy(Math.pow(10,t)).toFixed(4);case 11:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),getUsdtAllowance:function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.UsdtContract.methods.allowance(r.address,I["a"].uvStakeAddress).call();case 2:t=e.sent,r.usdtAllowance=t;case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),approveUsdt:function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r.btnLoading=!0,e.prev=1,e.next=4,r.UsdtContract.methods.approve(I["a"].uvStakeAddress,E["a"]).send({from:r.address});case 4:r.getUsdtAllowance(),r.btnLoading=!1,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),r.btnLoading=!1;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(){return e.apply(this,arguments)}return t}(),apply:function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r.name){e.next=3;break}return Object(B["a"])(r.$t("index.請輸入項目名稱")),e.abrupt("return");case 3:if(r.token){e.next=6;break}return Object(B["a"])(r.$t("index.請輸入合約地址")),e.abrupt("return");case 6:if(r.desc){e.next=9;break}return Object(B["a"])(r.$t("index.請輸入項目描述")),e.abrupt("return");case 9:return e.next=11,r.RouterPathContract.methods.getBestPathAmount(I["a"].usdtAddress,r.token,1+"0".repeat(18)).call();case 11:if(t=e.sent,!(Number(t)<=0)){e.next=15;break}return Object(B["a"])(r.$t("index.請先添加交易對")),e.abrupt("return");case 15:return r.btnLoading=!0,e.prev=16,e.next=19,r.UvStakeContract.methods.applyToken(r.name,r.token,r.desc).send({from:r.address});case 19:r.showDialog=!0,r.btnLoading=!1,e.next=26;break;case 23:e.prev=23,e.t0=e["catch"](16),Object(B["a"])(r.$t("index.代幣錯誤"));case 26:case"end":return e.stop()}}),e,null,[[16,23]])})));function t(){return e.apply(this,arguments)}return t}()});r.address&&r.initContract(),Object(a["Q"])((function(){return r.address}),(function(e){e&&r.initContract()}));var i=Object(a["N"])(r);return Object(U["a"])({},i)}};n("3fbb"),n("7a71");Y.render=x,Y.__scopeId="data-v-1a415502";t["default"]=Y},cf23:function(e,t,n){"use strict";n("f9c0")},d81d:function(e,t,n){"use strict";var a=n("23e7"),r=n("b727").map,i=n("1dde"),s=i("map");a({target:"Array",proto:!0,forced:!s},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},f9c0:function(e,t,n){}}]);
//# sourceMappingURL=chunk-be82e402.bab8e93e.js.map