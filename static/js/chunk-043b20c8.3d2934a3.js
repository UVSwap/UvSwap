(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-043b20c8"],{1148:function(t,e,n){"use strict";var r=n("a691"),i=n("1d80");t.exports="".repeat||function(t){var e=String(i(this)),n="",a=r(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(n+=e);return n}},"3a0a":function(t,e,n){"use strict";n("8d84")},"408a":function(t,e,n){var r=n("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),i=n("5899"),a="["+i+"]",c=RegExp("^"+a+a+"*"),o=RegExp(a+a+"*$"),s=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},7156:function(t,e,n){var r=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var a,c;return i&&"function"==typeof(a=e.constructor)&&a!==n&&r(c=a.prototype)&&c!==n.prototype&&i(t,c),t}},"8d84":function(t,e,n){},a9e3:function(t,e,n){"use strict";var r=n("83ab"),i=n("da84"),a=n("94ca"),c=n("6eeb"),o=n("5135"),s=n("c6b6"),u=n("7156"),d=n("c04e"),f=n("d039"),l=n("7c73"),b=n("241c").f,p=n("06cf").f,h=n("9bf2").f,v=n("58a8").trim,O="Number",g=i[O],j=g.prototype,w=s(l(j))==O,I=function(t){var e,n,r,i,a,c,o,s,u=d(t,!1);if("string"==typeof u&&u.length>2)if(u=v(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+u}for(a=u.slice(2),c=a.length,o=0;o<c;o++)if(s=a.charCodeAt(o),s<48||s>i)return NaN;return parseInt(a,r)}return+u};if(a(O,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var k,m=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof m&&(w?f((function(){j.valueOf.call(n)})):s(n)!=O)?u(new g(I(e)),n,m):I(e)},x=r?b(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),N=0;x.length>N;N++)o(g,k=x[N])&&!o(m,k)&&h(m,k,p(g,k));m.prototype=j,j.constructor=m,c(i,O,m)}},b680:function(t,e,n){"use strict";var r=n("23e7"),i=n("a691"),a=n("408a"),c=n("1148"),o=n("d039"),s=1..toFixed,u=Math.floor,d=function(t,e,n){return 0===e?n:e%2===1?d(t,e-1,n*t):d(t*t,e/2,n)},f=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},l=function(t,e,n){var r=-1,i=n;while(++r<6)i+=e*t[r],t[r]=i%1e7,i=u(i/1e7)},b=function(t,e){var n=6,r=0;while(--n>=0)r+=t[n],t[n]=u(r/e),r=r%e*1e7},p=function(t){var e=6,n="";while(--e>=0)if(""!==n||0===e||0!==t[e]){var r=String(t[e]);n=""===n?r:n+c.call("0",7-r.length)+r}return n},h=s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){s.call({})}));r({target:"Number",proto:!0,forced:h},{toFixed:function(t){var e,n,r,o,s=a(this),u=i(t),h=[0,0,0,0,0,0],v="",O="0";if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(v="-",s=-s),s>1e-21)if(e=f(s*d(2,69,1))-69,n=e<0?s*d(2,-e,1):s/d(2,e,1),n*=4503599627370496,e=52-e,e>0){l(h,0,n),r=u;while(r>=7)l(h,1e7,0),r-=7;l(h,d(10,r,1),0),r=e-1;while(r>=23)b(h,1<<23),r-=23;b(h,1<<r),l(h,1,1),b(h,2),O=p(h)}else l(h,0,n),l(h,1<<-e,0),O=p(h)+c.call("0",u);return u>0?(o=O.length,O=v+(o<=u?"0."+c.call("0",u-o)+O:O.slice(0,o-u)+"."+O.slice(o-u))):O=v+O,O}})},d57d:function(t,e,n){"use strict";n.r(e);n("b680"),n("a9e3");var r=n("7a23"),i=Object(r["U"])("data-v-391de6d9");Object(r["D"])("data-v-391de6d9");var a={class:"container"},c={class:"mining"},o={class:"li"},s={class:"key"},u={class:"value"},d={class:"li"},f={class:"key"},l={class:"value"},b={key:0,class:"noDate"};Object(r["B"])();var p,h=i((function(t,e,n,p,h,v){var O=Object(r["I"])("HeadTop"),g=Object(r["I"])("van-list");return Object(r["A"])(),Object(r["h"])("div",a,[Object(r["k"])(O,{title:t.$t("index.挖礦記錄")},null,8,["title"]),Object(r["k"])("div",c,[Object(r["k"])(g,{loading:t.loading,"onUpdate:loading":e[1]||(e[1]=function(e){return t.loading=e}),finished:t.finished,"immediate-check":!1,"finished-text":t.$t("index.沒有更多了"),onLoad:t.onLoad},{default:i((function(){return[(Object(r["A"])(!0),Object(r["h"])(r["a"],null,Object(r["G"])(t.list,(function(e,n){return Object(r["A"])(),Object(r["h"])("div",{class:"ul",key:n},[Object(r["k"])("div",o,[Object(r["k"])("div",s,Object(r["M"])(t.$t("index.挖礦所得")),1),Object(r["k"])("div",u,Object(r["M"])(Number(e.reward/Math.pow(10,18)).toFixed(4))+"UV",1)]),Object(r["k"])("div",d,[Object(r["k"])("div",f,Object(r["M"])(t.$t("index.領取時間")),1),Object(r["k"])("div",l,Object(r["M"])(t.$dateformat(1e3*e.time,"yyyy-mm-dd HH:MM:ss")),1)])])})),128)),t.list.length?Object(r["i"])("",!0):(Object(r["A"])(),Object(r["h"])("div",b,Object(r["M"])(t.$t("index.暫無更多數據")),1))]})),_:1},8,["loading","finished","finished-text","onLoad"])])])})),v=n("5530"),O=n("2909"),g=n("8785"),j=n("1da1"),w=(n("99af"),n("96cf"),n("1a2e")),I=n("47e2"),k=n("5502"),m=n("6cce"),x=n("5184"),N={components:{HeadTop:w["a"]},setup:function(){var t=Object(k["b"])(),e=Object(I["b"])(),n=e.t,i=Object(r["E"])({$t:n,address:Object(r["f"])((function(){return t.state.accounts[0]})),web3:Object(r["f"])((function(){return t.state.provider})),balance:0,loading:!1,finished:!1,limit:6,page:1,list:[],initContract:function(){i.initData()},initData:function(){i.getList()},onLoad:function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i.page=i.page+1,t.next=3,i.getList();case 3:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),getList:function(){i.loading=!1,m["a"].clients.lpStakeClient.query({query:Object(x["a"])(p||(p=Object(g["a"])(["query rewardPaidLists($first: Int!, $skip: Int!, $user: Bytes!) {\n            rewardPaidLists(first: $first, skip: $skip,where: {user: $user}) {\n              id\n              reward\n              user\n              time\n            }\n          }"]))),variables:{first:i.limit,skip:(i.page-1)*i.limit,user:i.address.toLowerCase()},fetchPolicy:"no-cache"}).then((function(t){var e=t.data.rewardPaidLists;e.length<i.limit&&(i.finished=!0),i.list=[].concat(Object(O["a"])(i.list),Object(O["a"])(e)),i.loading=!1}))}});i.address&&i.initContract(),Object(r["Q"])((function(){return i.address}),(function(t){t&&i.initContract()}));var a=Object(r["N"])(i);return Object(v["a"])({},a)}};n("3a0a");N.render=h,N.__scopeId="data-v-391de6d9";e["default"]=N}}]);
//# sourceMappingURL=chunk-043b20c8.3d2934a3.js.map