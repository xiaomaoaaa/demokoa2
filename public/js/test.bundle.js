!function(e){function t(t){for(var i,s,a=t[0],c=t[1],u=t[2],l=0,f=[];l<a.length;l++)s=a[l],o[s]&&f.push(o[s][0]),o[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);for(d&&d(t);f.length;)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},o={1:0},r=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var d=c;r.push([73,0]),n()}({24:function(e,t,n){},25:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(65);t.default={components:{},created:function(){},data:function(){return{phoneNo:"",isauthcode:!1,isphone:!1,codetext:"获取验证码",codeNo:"",isdisabled:!0,isconfirm:!1,subform:null,timer:null,isrefer:!1,imgbaseurl:""}},mounted:function(){},methods:{blurscrollToTop:function(){(0,i.blurscrollToTop)()},isPhoneNum:function(){clearInterval(this.timer),this.codetext="获取验证码";/^1\d{10}$/.test(this.phoneNo)?(this.isphone=!0,this.isdisabled=!1,this.isauthcode?this.isconfirm=!0:this.isconfirm=!1):(this.isconfirm=!1,this.isdisabled=!0,this.isphone=!1)},isCodeNum:function(){6===this.codeNo.length?(this.isauthcode=!0,this.isphone?this.isconfirm=!0:this.isconfirm=!1):(this.isauthcode=!1,this.isconfirm=!1,this.isauthcode=!1)},getcode:function(){this.isdisabled=!0},confirm:function(){this.isconfirm=!1}}}},26:function(e,t,n){"use strict";n.r(t);var i=n(25),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t.default=o.a},46:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("div",{staticClass:"form"},[n("div",{staticClass:"unit"},[n("div",{staticClass:"phoneNo clearfix"},[n("label",[e._v("手机号")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneNo,expression:"phoneNo"}],attrs:{type:"tel",placeholder:"请输入手机号进行身份认证",name:"phoneNo",id:"phoneNo",maxlength:"11"},domProps:{value:e.phoneNo},on:{input:[function(t){t.target.composing||(e.phoneNo=t.target.value)},e.isPhoneNum]}})]),e._v(" "),n("div",{staticClass:"codeNo"},[n("label",[e._v("验证码")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.codeNo,expression:"codeNo"}],attrs:{type:"tel",placeholder:"请输入验证码",name:"codeNo",id:"codeNo",maxlength:"6"},domProps:{value:e.codeNo},on:{input:[function(t){t.target.composing||(e.codeNo=t.target.value)},e.isCodeNum],blur:e.blurscrollToTop}}),e._v(" "),n("button",{staticClass:"codesendbtn",attrs:{disabled:e.isdisabled},on:{click:e.getcode}},[e._v(e._s(e.codetext))])])]),e._v(" "),n("div",{staticClass:"next"},[n("button",{attrs:{disabled:!e.isconfirm},on:{click:e.confirm}},[e._v("验证")])])])])},o=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"extension"},[t("img",{attrs:{src:n(71)}}),this._v(" "),t("img",{attrs:{src:n(70)}}),this._v(" "),t("img",{attrs:{src:n(69)}}),this._v(" "),t("img",{attrs:{src:n(68)}}),this._v(" "),t("img",{attrs:{src:n(67)}}),this._v(" "),t("img",{attrs:{src:n(66)}})])}];i._withStripped=!0,n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},6:function(e,t,n){},64:function(e,t,n){"use strict";var i=n(24);n.n(i).a},65:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.applink=function(e){var t=document.getElementById("rootpath"),n=u("setypeId"),d=document.getElementById("type"),l={swId:n,swType:d};e&&Object.assign(l,e);if(l=JSON.stringify(l),l=encodeURI(l),o){var f=i.match(/os [\d._]*/gi),p=(f+"").replace(/[^0-9|_.]/gi,"").replace(/_/gi,"."),m=p+"";if("undefined"!=m&&m.length>0)if(p=p.substring(0,2),parseInt(p)>=9)window.location.href=a||c||s?"https://ssl2.xt.cn/appcg/downloadlx/download.html?textparam="+l:"shinyway://cn.igo.shinyway?textparam="+l;else{if(a||c||s)return document.write("<img src="+t+"/resources/gen/image/download_default.png  alt='APP下载' width='100%'/>"),!0;window.location.href="shinyway://cn.igo.shinyway?textparam="+l;var h=+new Date;setTimeout(function(){!window.document.webkitHidden&&setTimeout(function(){+new Date-h<2e3&&(window.location.href="https://itunes.apple.com/cn/app/%E5%87%BA%E5%9B%BD%E7%95%99%E5%AD%A6%E9%80%9A/id1098076579?mt=8")},500)},500)}}else if(r){if(a||c)return document.write("<img src="+t+"/resources/gen/image/download_default.png  alt='APP下载' width='100%'/>"),!0;window.location.href="shinyway://cn.igo.shinyway?textparam="+l;var h=+new Date;setTimeout(function(){!window.document.webkitHidden&&setTimeout(function(){+new Date-h<2e3&&(window.location.href="http://url.cn/58pVs8L")},500)},500)}},t.getParameter=u,t.transmit=function(e,t){if(o)t?jsBbridge(function(n){n.callHandler(e,t,function(e){})}):jsBbridge(function(t){t.callHandler(e,{},function(e){})});else{var n=JSON.stringify(t);t?swapp[e](n):swapp[e]()}},t.blurscrollToTop=function(){var e=(navigator.userAgent.match(/os [\d._]*/gi)+"").replace(/[^0-9|_.]/gi,"").replace(/_/gi,"."),t=e+"";"undefined"!=t&&t.length>0&&(e=e.substring(0,2),parseInt(e)>=12&&window.scrollTo(0,0))};u("share");var i=navigator.userAgent,o=!!i.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),r=i.indexOf("Android")>-1||i.indexOf("Linux")>-1,s=o&&/ QQ/i.test(navigator.userAgent),a=(r&&/MQQBrowser/i.test(navigator.userAgent)&&/QQ/i.test(navigator.userAgent.split("MQQBrowser")),/MicroMessenger/i.test(navigator.userAgent)),c=/WeiBo/i.test(navigator.userAgent);function u(e){var t=window.location.search,n=e.length,i=t.indexOf(e);if(-1==i)return"";i+=n+1;var o=t.indexOf("&",i);return-1==o?t.substring(i):t.substring(i,o)}window.jsBbridge=function(e){if(window.WebViewJavascriptBridge)return e(WebViewJavascriptBridge);if(document.addEventListener("WebViewJavascriptBridgeReady",function(){e(WebViewJavascriptBridge)},!1),window.WVJBCallbacks)return window.WVJBCallbacks.push(e);window.WVJBCallbacks=[e];var t=document.createElement("iframe");t.style.display="none",t.src="wvjbscheme://__BRIDGE_LOADED__",document.documentElement.appendChild(t),setTimeout(function(){document.documentElement.removeChild(t)},0)};t.formatTime=function(e,t){var n=new Date(e),i=n.getFullYear(),o=n.getMonth()+1,r=n.getDate(),s=n.getHours(),a=n.getMinutes(),c=n.getSeconds();return"hour"===t?[i,o,r].map(d).join("-")+" "+[s].map(d).join(":"):"minute"===t?[i,o,r].map(d).join("-")+" "+[s,a].map(d).join(":"):"second"===t?[i,o,r].map(d).join("-")+" "+[s,a,c].map(d).join(":"):[i,o,r].map(d).join("-")};var d=function(e){return(e=e.toString())[1]?e:"0"+e}},66:function(e,t,n){e.exports=n.p+"img/extension6.jpg"},67:function(e,t,n){e.exports=n.p+"img/extension5.jpg"},68:function(e,t,n){e.exports=n.p+"img/extension4.jpg"},69:function(e,t,n){e.exports=n.p+"img/extension3.jpg"},70:function(e,t,n){e.exports=n.p+"img/extension2.jpg"},71:function(e,t,n){e.exports=n.p+"img/extension1.jpg"},72:function(e,t,n){"use strict";n.r(t);var i=n(46),o=n(26);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n(64);var s=n(2),a=Object(s.a)(o.default,i.a,i.b,!1,null,"20957380",null);a.options.__file="src\\views\\test\\template.vue",t.default=a.exports},73:function(e,t,n){"use strict";var i=r(n(23));n(9),n(6);var o=r(n(72));function r(e){return e&&e.__esModule?e:{default:e}}new i.default({render:function(e){return e(o.default)}}).$mount("#app")},8:function(e,t,n){},9:function(e,t,n){"use strict";var i,o,r,s,a;n(8),i=document,o=window,r=i.documentElement,s="orientationchange"in window?"orientationchange":"resize",a=function(){var e=r.clientWidth;e&&(r.style.fontSize=e>=750?"100px":e/750*100+"px")},i.addEventListener&&(o.addEventListener(s,a,!1),i.addEventListener("DOMContentLoaded",a,!1))}});