(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{"0866":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bg"},[e._m(0),r("form",{staticClass:"formBox",attrs:{action:""}},[e._m(1),r("div",{staticClass:"userName"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],attrs:{type:"text",placeholder:"请输入账号"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),r("span",{staticClass:"mark-error"},[e._v("请输入账号")])]),r("div",{staticClass:"userPassword"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.userPassword,expression:"userPassword"}],attrs:{type:"password",placeholder:"默认密码：手机号后六位"},domProps:{value:e.userPassword},on:{input:function(t){t.target.composing||(e.userPassword=t.target.value)}}}),r("span",{staticClass:"mark-error"},[e._v("请输入密码")])]),r("div",{staticClass:"keepMind"},[r("a-checkbox",{staticClass:"ignore",attrs:{defaultChecked:e.rememberID},on:{change:e.onChange}},[e._v("记住账号和密码")])],1),r("div",{staticClass:"submitBtn"},[r("a-button",{attrs:{type:"primary"},on:{click:e.loginHref}},[e._v(e._s(e.submitTxt))])],1)]),r("a",{staticClass:"ownership"},[e._v("© 2019 版权所有 上海标歆网络科技有限公司")])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"logo"},[n("img",{attrs:{src:r("ff87")}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"formTitle"},[r("h3",[e._v("玄鸟外服管理登录系统")])])}],s=r("bc3a"),a=r.n(s),i=(r("2f62"),void 0),c={data:function(){return{userName:"",userPassword:"",visible:!1,rememberID:!0,submitTxt:"登录",loginInfo:{}}},methods:{onChange:function(e){this.rememberID=e.target.checked},loginHref:function(){var e=this;this.submitTxt="登录中...";var t=this.httpsBasic.httpsBasic+"/user/User/companyLogin";a.a.post(t,{phone:this.userName,password:this.userPassword}).then(function(t){"200"==t.data.code?(window.localStorage.setItem("xnwfPcToken",t.data.data.token),e.rememberID?(window.localStorage.setItem("xnwfPcName",e.userName),window.localStorage.setItem("xnwfPcPassword",e.userPassword)):(window.localStorage.removeItem("xnwfPcName"),window.localStorage.removeItem("xnwfPcPassword")),e.$router.push({name:"visitLog"}),e.submitTxt="登录"):(e.$message.error(t.data.message),e.submitTxt="登录")}).catch(function(e){})},SET_TOKEN:function(e){console.log(e),i.this.$store.commit(e),window.localStorage.setItem("token",e)},GET_USER:function(e,t){e.user=t,window.localStorage.setItem("user",t)},GET_ROLE:function(e,t){e.role=t,window.localStorage.setItem("role",t)}},mounted:function(){null!=window.localStorage.getItem("xnwfPcName")?(this.userName=window.localStorage.getItem("xnwfPcName"),this.userPassword=window.localStorage.getItem("xnwfPcPassword")):(this.userName="",this.userPassword=""),-1!==navigator.userAgent.indexOf("iPhone")&&(window.wechaturl=window.location+""),-1!==navigator.userAgent.indexOf("miniProgram")&&(window.wechaturl=window.location+"")},computed:{},components:{}},u=c,f=(r("8010"),r("2877")),p=Object(f["a"])(u,n,o,!1,null,"0fac1730",null);t["default"]=p.exports},"0a06":function(e,t,r){"use strict";var n=r("c532"),o=r("30b5"),s=r("f6b4"),a=r("5270"),i=r("4a7b");function c(e){this.defaults=e,this.interceptors={request:new s,response:new s}}c.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=i(this.defaults,e),e.method=e.method?e.method.toLowerCase():"get";var t=[a,void 0],r=Promise.resolve(e);this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});while(t.length)r=r.then(t.shift(),t.shift());return r},c.prototype.getUri=function(e){return e=i(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],function(e){c.prototype[e]=function(t,r){return this.request(n.merge(r||{},{method:e,url:t}))}}),n.forEach(["post","put","patch"],function(e){c.prototype[e]=function(t,r,o){return this.request(n.merge(o||{},{method:e,url:t,data:r}))}}),e.exports=c},"0df6":function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"1c5f":function(e,t,r){},"1d2b":function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},2444:function(e,t,r){"use strict";(function(t){var n=r("c532"),o=r("c8af"),s={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function i(){var e;return"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t)?e=r("b50d"):"undefined"!==typeof XMLHttpRequest&&(e=r("b50d")),e}var c={adapter:i(),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],function(e){c.headers[e]={}}),n.forEach(["post","put","patch"],function(e){c.headers[e]=n.merge(s)}),e.exports=c}).call(this,r("f28c"))},"2d83":function(e,t,r){"use strict";var n=r("387f");e.exports=function(e,t,r,o,s){var a=new Error(e);return n(a,t,r,o,s)}},"2e67":function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"30b5":function(e,t,r){"use strict";var n=r("c532");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var s;if(r)s=r(t);else if(n.isURLSearchParams(t))s=t.toString();else{var a=[];n.forEach(t,function(e,t){null!==e&&"undefined"!==typeof e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))}))}),s=a.join("&")}if(s){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},"387f":function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},3934:function(e,t,r){"use strict";var n=r("c532");e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return function(){return!0}}()},"467f":function(e,t,r){"use strict";var n=r("2d83");e.exports=function(e,t,r){var o=r.config.validateStatus;!o||o(r.status)?e(r):t(n("Request failed with status code "+r.status,r.config,null,r.request,r))}},"4a7b":function(e,t,r){"use strict";var n=r("c532");e.exports=function(e,t){t=t||{};var r={};return n.forEach(["url","method","params","data"],function(e){"undefined"!==typeof t[e]&&(r[e]=t[e])}),n.forEach(["headers","auth","proxy"],function(o){n.isObject(t[o])?r[o]=n.deepMerge(e[o],t[o]):"undefined"!==typeof t[o]?r[o]=t[o]:n.isObject(e[o])?r[o]=n.deepMerge(e[o]):"undefined"!==typeof e[o]&&(r[o]=e[o])}),n.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(n){"undefined"!==typeof t[n]?r[n]=t[n]:"undefined"!==typeof e[n]&&(r[n]=e[n])}),r}},5270:function(e,t,r){"use strict";var n=r("c532"),o=r("c401"),s=r("2e67"),a=r("2444"),i=r("d925"),c=r("e683");function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){u(e),e.baseURL&&!i(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),n.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var t=e.adapter||a.adapter;return t(e).then(function(t){return u(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(u(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},"7a77":function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},"7aac":function(e,t,r){"use strict";var n=r("c532");e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,t,r,o,s,a){var i=[];i.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),n.isString(o)&&i.push("path="+o),n.isString(s)&&i.push("domain="+s),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},8010:function(e,t,r){"use strict";var n=r("1c5f"),o=r.n(n);o.a},"8df4":function(e,t,r){"use strict";var n=r("7a77");function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new n(e),t(r.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e,t=new o(function(t){e=t});return{token:t,cancel:e}},e.exports=o},b50d:function(e,t,r){"use strict";var n=r("c532"),o=r("467f"),s=r("30b5"),a=r("c345"),i=r("3934"),c=r("2d83");e.exports=function(e){return new Promise(function(t,u){var f=e.data,p=e.headers;n.isFormData(f)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",h=e.auth.password||"";p.Authorization="Basic "+btoa(l+":"+h)}if(d.open(e.method.toUpperCase(),s(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?a(d.getAllResponseHeaders()):null,n=e.responseType&&"text"!==e.responseType?d.response:d.responseText,s={data:n,status:d.status,statusText:d.statusText,headers:r,config:e,request:d};o(t,u,s),d=null}},d.onabort=function(){d&&(u(c("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){u(c("Network Error",e,null,d)),d=null},d.ontimeout=function(){u(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var m=r("7aac"),g=(e.withCredentials||i(e.url))&&e.xsrfCookieName?m.read(e.xsrfCookieName):void 0;g&&(p[e.xsrfHeaderName]=g)}if("setRequestHeader"in d&&n.forEach(p,function(e,t){"undefined"===typeof f&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(w){if("json"!==e.responseType)throw w}"function"===typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),u(e),d=null)}),void 0===f&&(f=null),d.send(f)})}},bc3a:function(e,t,r){e.exports=r("cee4")},c345:function(e,t,r){"use strict";var n=r("c532"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,s,a={};return e?(n.forEach(e.split("\n"),function(e){if(s=e.indexOf(":"),t=n.trim(e.substr(0,s)).toLowerCase(),r=n.trim(e.substr(s+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([r]):a[t]?a[t]+", "+r:r}}),a):a}},c401:function(e,t,r){"use strict";var n=r("c532");e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},c532:function(e,t,r){"use strict";var n=r("1d2b"),o=r("c7ce"),s=Object.prototype.toString;function a(e){return"[object Array]"===s.call(e)}function i(e){return"[object ArrayBuffer]"===s.call(e)}function c(e){return"undefined"!==typeof FormData&&e instanceof FormData}function u(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function f(e){return"string"===typeof e}function p(e){return"number"===typeof e}function d(e){return"undefined"===typeof e}function l(e){return null!==e&&"object"===typeof e}function h(e){return"[object Date]"===s.call(e)}function m(e){return"[object File]"===s.call(e)}function g(e){return"[object Blob]"===s.call(e)}function w(e){return"[object Function]"===s.call(e)}function v(e){return l(e)&&w(e.pipe)}function y(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function x(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function b(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function S(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),a(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function C(){var e={};function t(t,r){"object"===typeof e[r]&&"object"===typeof t?e[r]=C(e[r],t):e[r]=t}for(var r=0,n=arguments.length;r<n;r++)S(arguments[r],t);return e}function E(){var e={};function t(t,r){"object"===typeof e[r]&&"object"===typeof t?e[r]=E(e[r],t):e[r]="object"===typeof t?E({},t):t}for(var r=0,n=arguments.length;r<n;r++)S(arguments[r],t);return e}function N(e,t,r){return S(t,function(t,o){e[o]=r&&"function"===typeof t?n(t,r):t}),e}e.exports={isArray:a,isArrayBuffer:i,isBuffer:o,isFormData:c,isArrayBufferView:u,isString:f,isNumber:p,isObject:l,isUndefined:d,isDate:h,isFile:m,isBlob:g,isFunction:w,isStream:v,isURLSearchParams:y,isStandardBrowserEnv:b,forEach:S,merge:C,deepMerge:E,extend:N,trim:x}},c7ce:function(e,t){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&null!=e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},c8af:function(e,t,r){"use strict";var n=r("c532");e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},cee4:function(e,t,r){"use strict";var n=r("c532"),o=r("1d2b"),s=r("0a06"),a=r("4a7b"),i=r("2444");function c(e){var t=new s(e),r=o(s.prototype.request,t);return n.extend(r,s.prototype,t),n.extend(r,t),r}var u=c(i);u.Axios=s,u.create=function(e){return c(a(u.defaults,e))},u.Cancel=r("7a77"),u.CancelToken=r("8df4"),u.isCancel=r("2e67"),u.all=function(e){return Promise.all(e)},u.spread=r("0df6"),e.exports=u,e.exports.default=u},d925:function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},e683:function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},f6b4:function(e,t,r){"use strict";var n=r("c532");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},ff87:function(e,t,r){e.exports=r.p+"img/logoWhite.18e938fd.png"}}]);
//# sourceMappingURL=user.9eb27dc1.js.map