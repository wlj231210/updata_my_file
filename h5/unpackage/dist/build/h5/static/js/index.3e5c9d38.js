(function(e){function n(n){for(var o,i,u=n[0],c=n[1],s=n[2],f=0,l=[];f<u.length;f++)i=u[f],r[i]&&l.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(n);while(l.length)l.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,i=1;i<t.length;i++){var c=t[i];0!==r[c]&&(o=!1)}o&&(a.splice(n--,1),e=u(u.s=t[0]))}return e}var o={},r={index:0},a=[];function i(e){return u.p+"static/js/"+({"pages-index-index":"pages-index-index","pages-login-login":"pages-login-login","pages-main-main":"pages-main-main","pages-pwd-pwd":"pages-pwd-pwd","pages-reg-reg":"pages-reg-reg","pages-user-user":"pages-user-user"}[e]||e)+"."+{"pages-index-index":"93752ac3","pages-login-login":"a640a2bd","pages-main-main":"c9aefbf0","pages-pwd-pwd":"31321092","pages-reg-reg":"30343b0c","pages-user-user":"f1c9e5f5"}[e]+".js"}function u(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,o){t=r[e]=[n,o]}));n.push(t[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e),a=function(n){c.onerror=c.onload=null,clearTimeout(s);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");i.type=o,i.request=a,t[1](i)}r[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(n)},u.m=e,u.c=o,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)u.d(t,o,function(n){return e[n]}.bind(null,o));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var f=0;f<c.length;f++)n(c[f]);var d=s;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("eb3a")},"013b":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=o},"0d21":function(e,n,t){"use strict";var o,r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},a=[];t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return o}))},"0d93":function(e,n,t){"use strict";(function(e){var n=t("ee27"),o=n(t("e143"));e["____A05CBA2____"]=!0,delete e["____A05CBA2____"],e.__uniConfig={tabBar:{color:"#7a7e83",selectedColor:"#0faeff",backgroundColor:"#ffffff",list:[{pagePath:"pages/main/main",text:"首页",iconPath:"static/img/home.png",selectedIconPath:"static/img/homeHL.png",redDot:!1,badge:""},{pagePath:"pages/user/user",text:"我的",iconPath:"static/img/user.png",selectedIconPath:"static/img/userHL.png",redDot:!1,badge:""}],borderStyle:"black"},globalStyle:{navigationBarTextStyle:"white",navigationBarBackgroundColor:"#0faeff",backgroundColor:"#fbf9fe"}},e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig.publicPath="/",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},o.default.component("pages-main-main",(function(e){var n={component:t.e("pages-main-main").then(function(){return e(t("8bde"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-login-login",(function(e){var n={component:t.e("pages-login-login").then(function(){return e(t("119f"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-reg-reg",(function(e){var n={component:t.e("pages-reg-reg").then(function(){return e(t("6d69"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-pwd-pwd",(function(e){var n={component:t.e("pages-pwd-pwd").then(function(){return e(t("d270"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-user-user",(function(e){var n={component:t.e("pages-user-user").then(function(){return e(t("46ca"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-index-index",(function(e){var n={component:t.e("pages-index-index").then(function(){return e(t("43dc"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/main/main",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationBarTitleText:"登录模板"})},[e("pages-main-main",{slot:"page"})])}},meta:{id:1,name:"pages-main-main",isNVue:!1,pagePath:"pages/main/main",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:44}},{path:"/pages/login/login",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"登录"})},[e("pages-login-login",{slot:"page"})])}},meta:{name:"pages-login-login",isNVue:!1,pagePath:"pages/login/login",windowTop:44}},{path:"/pages/reg/reg",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"注册"})},[e("pages-reg-reg",{slot:"page"})])}},meta:{name:"pages-reg-reg",isNVue:!1,pagePath:"pages/reg/reg",windowTop:44}},{path:"/pages/pwd/pwd",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"找回密码"})},[e("pages-pwd-pwd",{slot:"page"})])}},meta:{name:"pages-pwd-pwd",isNVue:!1,pagePath:"pages/pwd/pwd",windowTop:44}},{path:"/pages/user/user",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"我的"})},[e("pages-user-user",{slot:"page"})])}},meta:{id:2,name:"pages-user-user",isNVue:!1,pagePath:"pages/user/user",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-index-index",{slot:"page"})])}},meta:{name:"pages-index-index",isNVue:!1,pagePath:"pages/index/index",windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}]}).call(this,t("c8ba"))},"2cd8":function(e,n,t){var o=t("24fb");n=o(!1),n.push([e.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */.iconfont{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.iconsupplier:before{content:"\\e61f"}.iconcaiwuxinxi-copy:before{content:"\\e641"}.iconkuaisukaidian:before{content:"\\e6ea"}.iconicon-test1:before{content:"\\e620"}.icontuihuodan:before{content:"\\e671"}.iconshiyongbangzhu:before{content:"\\e62a"}.iconfq_yingfukuan:before{content:"\\e623"}.iconxinyongedu:before{content:"\\e66e"}.icontuihuodingdan:before{content:"\\e6b3"}.iconcaiwu:before{content:"\\e70e"}.iconsaomiao:before{content:"\\e61e"}.iconshaixuan:before{content:"\\e648"}.iconliuyanbeizhu:before{content:"\\e65a"}.icondaipingjia:before{content:"\\e614"}.icondaifahuo:before{content:"\\e615"}.icondaishouhuo:before{content:"\\e617"}.icondaifukuan:before{content:"\\e618"}.iconshouhou:before{content:"\\e70b"}.icondingdan:before{content:"\\e61d"}.iconbianji:before{content:"\\e627"}.icondingwei:before{content:"\\e613"}.iconkefu:before{content:"\\e622"}.iconyou:before{content:"\\e638"}.iconicon-test:before{content:"\\e61c"}.icongengduo:before{content:"\\e670"}.iconqingchu:before{content:"\\e635"}.iconfanhui:before{content:"\\e65c"}.iconshanchu:before{content:"\\e612"}.iconlaba:before{content:"\\ea61"}.iconxiaoxi:before{content:"\\e60d"}.iconsousou:before{content:"\\e60e"}.iconbaozhang:before{content:"\\e64b"}.iconnew:before{content:"\\e674"}.iconxinpin3:before{content:"\\e60f"}.iconremai:before{content:"\\e60c"}.iconhottubiao:before{content:"\\e609"}.iconjiarugouwuche:before{content:"\\e60a"}.iconjiarugouwuche1:before{content:"\\e6be"}.iconadd-fill:before{content:"\\e6ab"}.iconadd:before{content:"\\e6ac"}.iconico:before{content:"\\e607"}.iconbaoyou:before{content:"\\e656"}.iconyouhuiquan:before{content:"\\e64f"}.icongengduomore:before{content:"\\e619"}.iconzengsongjine:before{content:"\\e6b2"}.iconjifen:before{content:"\\e61b"}.iconzengpin:before{content:"\\e62c"}.iconzhekou:before{content:"\\e610"}.iconkajuan:before{content:"\\e611"}.iconxiugaimima:before{content:"\\e62b"}.iconshou:before{content:"\\e903"}.iconshouji:before{content:"\\e684"}.iconrenminbi:before{content:"\\e606"}.iconhaibao:before{content:"\\e6dc"}.iconlink:before{content:"\\e605"}.iconweixin:before{content:"\\e633"}.iconfenxiang:before{content:"\\e67e"}.iconyemianbucunzai:before{content:"\\e739"}.icondianpubucunzai:before{content:"\\e604"}.iconjianshezhong:before{content:"\\e98b"}.icondianpudayang:before{content:"\\e608"}.iconzanwudingdan:before{content:"\\e65b"}.icongeren:before{content:"\\e603"}.icon1:before{content:"\\e602"}.iconkong:before{content:"\\e601"}.iconjiazaizhong:before{content:"\\e63b"}.iconjiazaizhong1:before{content:"\\e616"}.iconcart:before{content:"\\e60b"}.iconbuju:before{content:"\\e61a"}.icondianpu:before{content:"\\e600"}@font-face{font-family:iconfont;  /* project id 1320979 */src:url(https://at.alicdn.com/t/font_1320979_hje51enudla.eot);src:url(https://at.alicdn.com/t/font_1320979_hje51enudla.eot#iefix) format("embedded-opentype"),url(https://at.alicdn.com/t/font_1320979_hje51enudla.woff2) format("woff2"),url(https://at.alicdn.com/t/font_1320979_hje51enudla.woff) format("woff"),url(https://at.alicdn.com/t/font_1320979_hje51enudla.ttf) format("truetype"),url(https://at.alicdn.com/t/font_1320979_hje51enudla.svg#iconfont) format("svg")}.custom_text{color:#ff547b!important}.custom_text2{color:#fff!important}.custom_btn1{background-color:#ff547b!important;border-color:#ff547b!important;color:#fff!important;border-radius:0}.custom_btn1 > .am-badge-text{background-color:#ff547b!important;border-color:#ff547b!important}.custom_btn1::before,.custom_btn2::before,.custom_btn_ghost::before{border:0!important}.custom_btn2{background-color:#ffe6e8!important;color:#ff547b!important;border-color:#ffe6e8!important;border-radius:0}.custom_btn_ghost{border-color:#ff547b!important;color:#ff547b!important}.am-badge-text{color:#ff547b!important;border:1px solid #ff547b!important}.bar-tab-active{color:#ff547b!important;border-left:3px solid #ff547b!important;background:#f5f5f9}.am-tabs-default-bar-tab-active{color:#ff547b!important}.am-tabs-default-bar-underline{border:1px #ff547b solid!important}.searchlist-page .searchlist-main .filter .selected{color:#ff547b!important}.am-modal-button-group-h .am-modal-button{color:#ff547b!important}.am-modal-button-group-h .am-modal-button:first-child{color:#333!important}.am-checkbox-inner{border-color:#ff547b!important;background:#ff547b!important}.am-activity-indicator-spinner{font-family:iconfont!important;background-image:none;width:auto;font-size:30px;height:auto}.am-activity-indicator-spinner:before{content:"\\\\e63b";color:#ff547b!important}.custom_border{border:1px dashed #ff547b!important}.border{-webkit-box-shadow:%?1?% %?1?% %?1?% %?1?% #000;box-shadow:%?1?% %?1?% %?1?% %?1?% #000}\n/* 头条小程序需要把 iconfont 样式放到组件外 */\n/*每个页面公共css */uni-page-body{min-height:100%;display:-webkit-box;display:-webkit-flex;display:flex;font-size:16px}\n\n\n\n\n\n/* 原生组件模式下需要注意组件外部样式 */m-input{width:100%;\n\t/* min-height: 100%; */display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1}.content{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background-color:#efeff4;padding:10px}.input-group{background-color:#fff;margin-top:20px;position:relative}.input-group::before{position:absolute;right:0;top:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.input-group::after{position:absolute;right:0;bottom:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.input-row{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;position:relative;font-size:18px;line-height:40px}.input-row .title{width:72px;padding-left:15px}.input-row.border::after{position:absolute;right:0;bottom:0;left:8px;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.btn-row{margin-top:25px;padding:10px}uni-button.primary{background-color:#0faeff}',""]),e.exports=n},4949:function(e,n,t){"use strict";var o=t("ee27");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t("f3f3")),a=o(t("bb6a")),i=o(t("d998")),u=o(t("4d2d")),c=(0,r.default)({stateCode:a.default},i.default,{},u.default);n.default=c},"4d2d":function(e,n,t){"use strict";var o=t("ee27");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,t("96cf");var r=o(t("c964")),a=o(t("d8b3")),i=t("d5d1"),u={getTemplate:function(e){return(0,r.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,a.default.post("".concat(i.base,"/sales/template/getTemplate"),e,{}).then((function(e){return e.data})).catch((function(e){console.log("服务器出错")}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()}};n.default=u},6020:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t("cee0"),r=o.axios;n.default=r},"65ef":function(e,n,t){"use strict";t.r(n);var o=t("0d21"),r=t("e93c");for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);t("6a45");var i,u=t("f0c5"),c=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);n["default"]=c.exports},"6a45":function(e,n,t){"use strict";var o=t("a8cd"),r=t.n(o);r.a},"6ad1":function(e,n,t){(function(n){t("a4d3"),t("e01a"),t("99af"),t("4160"),t("c975"),t("a15b"),t("fb6a"),t("c19f"),t("82da"),t("ace4"),t("accc"),t("f4b3"),t("d3b7"),t("4d63"),t("ac1f"),t("25f0"),t("3ca3"),t("466d"),t("5319"),t("841c"),t("1276"),t("498a"),t("159b"),t("ddb0"),t("2b3d"),t("bf19"),function(n,t){e.exports=t()}(0,(function(){return function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){e.exports=t(1)},function(e,n,t){"use strict";function o(e){var n=new i(e),t=a(i.prototype.request,n);return r.extend(t,i.prototype,n),r.extend(t,n),t}var r=t(2),a=t(3),i=t(5),u=t(22),c=t(11),s=o(c);s.Axios=i,s.create=function(e){return o(u(s.defaults,e))},s.Cancel=t(23),s.CancelToken=t(24),s.isCancel=t(10),s.all=function(e){return Promise.all(e)},s.spread=t(25),e.exports=s,e.exports.default=s},function(e,n,t){"use strict";function o(e){return"[object Array]"===S.call(e)}function r(e){return"[object ArrayBuffer]"===S.call(e)}function a(e){return"undefined"!=typeof FormData&&e instanceof FormData}function i(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function u(e){return"string"==typeof e}function c(e){return"number"==typeof e}function s(e){return"undefined"==typeof e}function f(e){return null!==e&&"object"==typeof e}function d(e){return"[object Date]"===S.call(e)}function l(e){return"[object File]"===S.call(e)}function p(e){return"[object Blob]"===S.call(e)}function g(e){return"[object Function]"===S.call(e)}function m(e){return f(e)&&g(e.pipe)}function b(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function h(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function y(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document}function v(e,n){if(null!==e&&"undefined"!=typeof e)if("object"!=typeof e&&(e=[e]),o(e))for(var t=0,r=e.length;t<r;t++)n.call(null,e[t],t,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.call(null,e[a],a,e)}function _(){function e(e,t){"object"==typeof n[t]&&"object"==typeof e?n[t]=_(n[t],e):n[t]=e}for(var n={},t=0,o=arguments.length;t<o;t++)v(arguments[t],e);return n}function x(){function e(e,t){"object"==typeof n[t]&&"object"==typeof e?n[t]=x(n[t],e):n[t]="object"==typeof e?x({},e):e}for(var n={},t=0,o=arguments.length;t<o;t++)v(arguments[t],e);return n}function w(e,n,t){return v(n,(function(n,o){e[o]=t&&"function"==typeof n?C(n,t):n})),e}var C=t(3),j=t(4),S=Object.prototype.toString;e.exports={isArray:o,isArrayBuffer:r,isBuffer:j,isFormData:a,isArrayBufferView:i,isString:u,isNumber:c,isObject:f,isUndefined:s,isDate:d,isFile:l,isBlob:p,isFunction:g,isStream:m,isURLSearchParams:b,isStandardBrowserEnv:y,forEach:v,merge:_,deepMerge:x,extend:w,trim:h}},function(e,n){"use strict";e.exports=function(e,n){return function(){for(var t=new Array(arguments.length),o=0;o<t.length;o++)t[o]=arguments[o];return e.apply(n,t)}}},function(e,n){
/*!
    * Determine if an object is a Buffer
    *
    * @author   Feross Aboukhadijeh <https://feross.org>
    * @license  MIT
    */
e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},function(e,n,t){"use strict";function o(e){this.defaults=e,this.interceptors={request:new i,response:new i}}var r=t(2),a=t(6),i=t(7),u=t(8),c=t(22);o.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=c(this.defaults,e),e.method=e.method?e.method.toLowerCase():"get";var n=[u,void 0],t=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){n.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){n.push(e.fulfilled,e.rejected)}));n.length;)t=t.then(n.shift(),n.shift());return t},o.prototype.getUri=function(e){return e=c(this.defaults,e),a(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){o.prototype[e]=function(n,t){return this.request(r.merge(t||{},{method:e,url:n}))}})),r.forEach(["post","put","patch"],(function(e){o.prototype[e]=function(n,t,o){return this.request(r.merge(o||{},{method:e,url:n,data:t}))}})),e.exports=o},function(e,n,t){"use strict";function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var r=t(2);e.exports=function(e,n,t){if(!n)return e;var a;if(t)a=t(n);else if(r.isURLSearchParams(n))a=n.toString();else{var i=[];r.forEach(n,(function(e,n){null!==e&&"undefined"!=typeof e&&(r.isArray(e)?n+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(o(n)+"="+o(e))})))})),a=i.join("&")}if(a){var u=e.indexOf("#");-1!==u&&(e=e.slice(0,u)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},function(e,n,t){"use strict";function o(){this.handlers=[]}var r=t(2);o.prototype.use=function(e,n){return this.handlers.push({fulfilled:e,rejected:n}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(n){null!==n&&e(n)}))},e.exports=o},function(e,n,t){"use strict";function o(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var r=t(2),a=t(9),i=t(10),u=t(11),c=t(20),s=t(21);e.exports=function(e){o(e),e.baseURL&&!c(e.url)&&(e.url=s(e.baseURL,e.url)),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],(function(n){delete e.headers[n]}));var n=e.adapter||u.adapter;return n(e).then((function(n){return o(e),n.data=a(n.data,n.headers,e.transformResponse),n}),(function(n){return i(n)||(o(e),n&&n.response&&(n.response.data=a(n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)}))}},function(e,n,t){"use strict";var o=t(2);e.exports=function(e,n,t){return o.forEach(t,(function(t){e=t(e,n)})),e}},function(e,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,o){"use strict";function r(e,n){!i.isUndefined(e)&&i.isUndefined(e["Content-Type"])&&(e["Content-Type"]=n)}function a(){var e;return"undefined"!=typeof n&&"[object process]"===Object.prototype.toString.call(n)?e=o(13):"undefined"!=typeof XMLHttpRequest&&(e=o(13)),e}var i=o(2),u=o(12),c={"Content-Type":"application/x-www-form-urlencoded"},s={adapter:a(),transformRequest:[function(e,n){return u(n,"Accept"),u(n,"Content-Type"),i.isFormData(e)||i.isArrayBuffer(e)||i.isBuffer(e)||i.isStream(e)||i.isFile(e)||i.isBlob(e)?e:i.isArrayBufferView(e)?e.buffer:i.isURLSearchParams(e)?(r(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):i.isObject(e)?(r(n,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};i.forEach(["delete","get","head"],(function(e){s.headers[e]={}})),i.forEach(["post","put","patch"],(function(e){s.headers[e]=i.merge(c)})),e.exports=s},function(e,n,t){"use strict";var o=t(2);e.exports=function(e,n){o.forEach(e,(function(t,o){o!==n&&o.toUpperCase()===n.toUpperCase()&&(e[n]=t,delete e[o])}))}},function(e,n,t){"use strict";var o=t(2),r=t(14),a=t(6),i=t(17),u=t(18),c=t(15);e.exports=function(e){return new Promise((function(n,s){var f=e.data,d=e.headers;o.isFormData(f)&&delete d["Content-Type"];var l=new XMLHttpRequest;if(e.auth){var p=e.auth.username||"",g=e.auth.password||"";d.Authorization="Basic "+btoa(p+":"+g)}if(l.open(e.method.toUpperCase(),a(e.url,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,l.onreadystatechange=function(){if(l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var t="getAllResponseHeaders"in l?i(l.getAllResponseHeaders()):null,o=e.responseType&&"text"!==e.responseType?l.response:l.responseText,a={data:o,status:l.status,statusText:l.statusText,headers:t,config:e,request:l};r(n,s,a),l=null}},l.onabort=function(){l&&(s(c("Request aborted",e,"ECONNABORTED",l)),l=null)},l.onerror=function(){s(c("Network Error",e,null,l)),l=null},l.ontimeout=function(){s(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",l)),l=null},o.isStandardBrowserEnv()){var m=t(19),b=(e.withCredentials||u(e.url))&&e.xsrfCookieName?m.read(e.xsrfCookieName):void 0;b&&(d[e.xsrfHeaderName]=b)}if("setRequestHeader"in l&&o.forEach(d,(function(e,n){"undefined"==typeof f&&"content-type"===n.toLowerCase()?delete d[n]:l.setRequestHeader(n,e)})),e.withCredentials&&(l.withCredentials=!0),e.responseType)try{l.responseType=e.responseType}catch(n){if("json"!==e.responseType)throw n}"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){l&&(l.abort(),s(e),l=null)})),void 0===f&&(f=null),l.send(f)}))}},function(e,n,t){"use strict";var o=t(15);e.exports=function(e,n,t){var r=t.config.validateStatus;!r||r(t.status)?e(t):n(o("Request failed with status code "+t.status,t.config,null,t.request,t))}},function(e,n,t){"use strict";var o=t(16);e.exports=function(e,n,t,r,a){var i=new Error(e);return o(i,n,t,r,a)}},function(e,n){"use strict";e.exports=function(e,n,t,o,r){return e.config=n,t&&(e.code=t),e.request=o,e.response=r,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,n,t){"use strict";var o=t(2),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var n,t,a,i={};return e?(o.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),n=o.trim(e.substr(0,a)).toLowerCase(),t=o.trim(e.substr(a+1)),n){if(i[n]&&r.indexOf(n)>=0)return;i[n]="set-cookie"===n?(i[n]?i[n]:[]).concat([t]):i[n]?i[n]+", "+t:t}})),i):i}},function(e,n,t){"use strict";var o=t(2);e.exports=o.isStandardBrowserEnv()?function(){function e(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}var n,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");return n=e(window.location.href),function(t){var r=o.isString(t)?e(t):t;return r.protocol===n.protocol&&r.host===n.host}}():function(){return function(){return!0}}()},function(e,n,t){"use strict";var o=t(2);e.exports=o.isStandardBrowserEnv()?function(){return{write:function(e,n,t,r,a,i){var u=[];u.push(e+"="+encodeURIComponent(n)),o.isNumber(t)&&u.push("expires="+new Date(t).toGMTString()),o.isString(r)&&u.push("path="+r),o.isString(a)&&u.push("domain="+a),!0===i&&u.push("secure"),document.cookie=u.join("; ")},read:function(e){var n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,n){"use strict";e.exports=function(e,n){return n?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e}},function(e,n,t){"use strict";var o=t(2);e.exports=function(e,n){n=n||{};var t={};return o.forEach(["url","method","params","data"],(function(e){"undefined"!=typeof n[e]&&(t[e]=n[e])})),o.forEach(["headers","auth","proxy"],(function(r){o.isObject(n[r])?t[r]=o.deepMerge(e[r],n[r]):"undefined"!=typeof n[r]?t[r]=n[r]:o.isObject(e[r])?t[r]=o.deepMerge(e[r]):"undefined"!=typeof e[r]&&(t[r]=e[r])})),o.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],(function(o){"undefined"!=typeof n[o]?t[o]=n[o]:"undefined"!=typeof e[o]&&(t[o]=e[o])})),t}},function(e,n){"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},function(e,n,t){"use strict";function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var n;this.promise=new Promise((function(e){n=e}));var t=this;e((function(e){t.reason||(t.reason=new r(e),n(t.reason))}))}var r=t(23);o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e,n=new o((function(n){e=n}));return{token:n,cancel:e}},e.exports=o},function(e,n){"use strict";e.exports=function(e){return function(n){return e.apply(null,n)}}}])}))}).call(this,t("4362"))},"91a8":function(e,n,t){"use strict";var o=t("ee27");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t("e143")),a=o(t("2f62"));r.default.use(a.default);var i=new a.default.Store({state:{forcedLogin:!1,hasLogin:!1,userName:""},mutations:{login:function(e,n){e.userName=n||"新用户",e.hasLogin=!0},logout:function(e){e.userName="",e.hasLogin=!1}}}),u=i;n.default=u},a8cd:function(e,n,t){var o=t("2cd8");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=t("4f06").default;r("2a89a28c",o,!0,{sourceMap:!1,shadowMode:!1})},bb6a:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={"-1":"服务异常",0:"成功",1001:"参数错误",1002:"用户名或密码错误",1003:"验证码错误",1004:"两次密码不一致",1005:"账号已存在",1006:"上传身份证错误",1007:"版本号不能喝上次提交的相同",1101:"资源已存在",1102:"资源不存在",1201:"无改动内容",3001:"未登录",3002:"未认证开发者"};n.default=o},c411:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={pages:{"pages/main/main":{navigationBarTitleText:"登录模板"},"pages/login/login":{navigationBarTitleText:"登录"},"pages/reg/reg":{navigationBarTitleText:"注册"},"pages/pwd/pwd":{navigationBarTitleText:"找回密码"},"pages/user/user":{navigationBarTitleText:"我的"},"pages/index/index":{}},globalStyle:{navigationBarTextStyle:"white",navigationBarBackgroundColor:"#0faeff",backgroundColor:"#fbf9fe"}};n.default=o},cee0:function(e,n,t){"use strict";var o=t("ee27");t("d3b7"),t("25f0"),Object.defineProperty(n,"__esModule",{value:!0});var r={axios:!0};Object.defineProperty(n,"axios",{enumerable:!0,get:function(){return a.default}});var a=o(t("6ad1")),i=o(t("1db5")),u=t("dc29"),c=o(t("4f3f")),s=t("ae5b");function f(e,n){!i.default.isUndefined(e)&&i.default.isUndefined(e["Content-Type"])&&(e["Content-Type"]=n)}Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||Object.defineProperty(n,e,{enumerable:!0,get:function(){return s[e]}}))})),a.default.defaults.transformRequest=[function(e,n){return(0,c.default)(n,"Accept"),(0,c.default)(n,"Content-Type"),i.default.isFormData(e)||i.default.isArrayBuffer(e)||i.default.isBuffer(e)||i.default.isStream(e)||i.default.isFile(e)||i.default.isBlob(e)?e:i.default.isArrayBufferView(e)?e.buffer:i.default.isURLSearchParams(e)?(f(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):i.default.isObject(e)?(f(n,"application/json;charset=utf-8"),JSON.stringify(e)):e}],a.default.defaults.adapter=u.adapter},d5d1:function(e,n){e.exports={base:"https://www.wanglijian.top/v2"}},d8b3:function(e,n,t){"use strict";var o=t("ee27");t("d3b7"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t("6020")),a=r.default.create({baseURL:Object({VUE_APP_INDEX_CSS_HASH:"cdf7f91b",VUE_APP_PLATFORM:"h5",NODE_ENV:"production",BASE_URL:"/"}).BASE_API,timeout:1e4});r.default.CancelToken;a.interceptors.response.use((function(e){if(!e.status||200!==e.status||"error"!==e.data.status)return e;alert(e.data.msg)}),(function(e){return 504===e.response.status||404===e.response.status?alert("服务器出错"):403===e.response.status?alert("权限不足,请联系管理员!"):alert("未知错误!"),{data:{code:300,dataMap:{},message:"网络出错"}}})),a.interceptors.request.use((function(e){return e.timeout=3e4,e}),(function(e){return alert("请求超时"),Promise.reject(e)}));var i=a;n.default=i},d998:function(e,n,t){"use strict";var o=t("ee27");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,t("96cf");var r=o(t("c964")),a=o(t("d8b3")),i=t("d5d1"),u={login:function(e){return(0,r.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,a.default.post("".concat(i.base,"/v3/user/login"),e,{}).then((function(e){return e.data})).catch((function(e){console.log("服务器出错")}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()},getFileUrl:function(e){return(0,r.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,a.default.get("".concat(i.base,"/v3/user/getFileUrl?pageNum=")+e.pageNum+"&pageSize="+e.pageSize,{headers:{token:uni.getStorageSync("token")?uni.getStorageSync("token"):""}}).then((function(e){return e.data})).catch((function(e){message.error("服务器出错")}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()}};n.default=u},dc29:function(e,n,t){"use strict";var o=t("ee27");t("d3b7"),Object.defineProperty(n,"__esModule",{value:!0}),n.adapter=void 0;var r=o(t("d0af")),a=t("1db5"),i=o(t("cbac")),u=o(t("c6ce")),c=o(t("c78d")),s=function(e){return new Promise((function(n,t){var o=((0,a.isString)(e.method)?e.method:"GET").toUpperCase(),s=(0,u.default)(e.url,e.params,e.paramsSerializer),f=(0,a.isObject)(e.headers)?e.headers:{},d=e.data,l=null,p=null;if(!l){var g=uni.request({method:o,url:s,header:f,data:"POST"===o||"PUT"===o||"PATCH"===o?d:"",responseType:"arraybuffer"===e.responseType?"arraybuffer":"text",dataType:"json"===e.responseType?"json":e.responseType});p=g.abort,l=g.then((function(n){var t=(0,r.default)(n,2),o=(t[0],t[1]);return{data:o.data,status:o.statusCode,statusText:"",headers:o.header,config:e,request:g}}))}l.then((function(e){(0,c.default)(n,t,e)})).catch((function(){var n=(0,i.default)("网络错误",e,void 0,l);t(n)})),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&p(),t(e)}))}))};n.adapter=s},e08d:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={appid:"__UNI__A05CBA2"};n.default=o},e93c:function(e,n,t){"use strict";t.r(n);var o=t("013b"),r=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,(function(){return o[e]}))}(a);n["default"]=r.a},eb3a:function(e,n,t){"use strict";var o=t("ee27"),r=o(t("f3f3"));t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("0d93"),t("1c31"),t("921b");var a=o(t("e143")),i=o(t("65ef")),u=o(t("4949")),c=o(t("91a8"));a.default.config.productionTip=!1,a.default.prototype.$store=c.default,a.default.prototype.$api=u.default,i.default.mpType="app";var s=new a.default((0,r.default)({store:c.default},i.default));s.$mount()}});