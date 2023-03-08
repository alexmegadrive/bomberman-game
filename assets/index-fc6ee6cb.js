var Th=Object.defineProperty;var bh=(t,e,n)=>e in t?Th(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var T=(t,e,n)=>(bh(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_h=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Fa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(d=64)),s.push(n[l],n[h],n[d],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ua(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_h(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||u==null||h==null)throw Error();const d=r<<2|a>>4;if(s.push(d),u!==64){const m=a<<4&240|u>>2;if(s.push(m),h!==64){const E=u<<6&192|h;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Sh=function(t){const e=Ua(t);return Fa.encodeByteArray(e,!0)},Yn=function(t){return Sh(t).replace(/\./g,"")},Va=function(t){try{return Fa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh=()=>Ah().__FIREBASE_DEFAULTS__,Ch=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Dh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Va(t[1]);return e&&JSON.parse(e)},tr=()=>{try{return kh()||Ch()||Dh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ba=t=>{var e,n;return(n=(e=tr())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Nh=t=>{const e=Ba(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Rh=()=>{var t;return(t=tr())===null||t===void 0?void 0:t.config},$a=t=>{var e;return(e=tr())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Yn(JSON.stringify(n)),Yn(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(se())}function qa(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ph(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xh(){const t=se();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ja(){try{return typeof indexedDB=="object"}catch{return!1}}function Ha(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function Uh(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh="FirebaseError";class ge extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Fh,Object.setPrototypeOf(this,ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ft.prototype.create)}}class ft{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Vh(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ge(i,a,s)}}function Vh(t,e){return t.replace(Bh,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Bh=/\{\$([^}]+)}/g;function $h(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function en(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(lo(r)&&lo(o)){if(!en(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function lo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function qh(t,e){const n=new jh(t,e);return n.subscribe.bind(n)}class jh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Hh(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=si),i.error===void 0&&(i.error=si),i.complete===void 0&&(i.complete=si);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function si(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh=1e3,zh=2,Gh=4*60*60*1e3,Wh=.5;function ho(t,e=Kh,n=zh){const s=e*Math.pow(n,t),i=Math.round(Wh*s*(Math.random()-.5)*2);return Math.min(Gh,s+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t){return t&&t._delegate?t._delegate:t}class me{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Lh;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yh(e))try{this.getOrInitializeService({instanceIdentifier:Ye})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ye){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ye){return this.instances.has(e)}getOptions(e=Ye){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Xh(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ye){return this.component?this.component.multipleInstances?e:Ye:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xh(t){return t===Ye?void 0:t}function Yh(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Qh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var R;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(R||(R={}));const Zh={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},ed=R.INFO,td={[R.DEBUG]:"log",[R.VERBOSE]:"log",[R.INFO]:"info",[R.WARN]:"warn",[R.ERROR]:"error"},nd=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=td[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Es{constructor(e){this.name=e,this._logLevel=ed,this._logHandler=nd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in R))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,R.DEBUG,...e),this._logHandler(this,R.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,R.VERBOSE,...e),this._logHandler(this,R.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,R.INFO,...e),this._logHandler(this,R.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,R.WARN,...e),this._logHandler(this,R.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,R.ERROR,...e),this._logHandler(this,R.ERROR,...e)}}const sd=(t,e)=>e.some(n=>t instanceof n);let fo,po;function id(){return fo||(fo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rd(){return po||(po=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ka=new WeakMap,bi=new WeakMap,za=new WeakMap,ii=new WeakMap,nr=new WeakMap;function od(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(qe(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ka.set(n,t)}).catch(()=>{}),nr.set(e,t),e}function ad(t){if(bi.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});bi.set(t,e)}let _i={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||za.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cd(t){_i=t(_i)}function ud(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ri(this),e,...n);return za.set(s,e.sort?e.sort():[e]),qe(s)}:rd().includes(t)?function(...e){return t.apply(ri(this),e),qe(Ka.get(this))}:function(...e){return qe(t.apply(ri(this),e))}}function ld(t){return typeof t=="function"?ud(t):(t instanceof IDBTransaction&&ad(t),sd(t,id())?new Proxy(t,_i):t)}function qe(t){if(t instanceof IDBRequest)return od(t);if(ii.has(t))return ii.get(t);const e=ld(t);return e!==t&&(ii.set(t,e),nr.set(e,t)),e}const ri=t=>nr.get(t);function Ga(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=qe(o);return s&&o.addEventListener("upgradeneeded",c=>{s(qe(o.result),c.oldVersion,c.newVersion,qe(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const hd=["get","getKey","getAll","getAllKeys","count"],dd=["put","add","delete","clear"],oi=new Map;function mo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(oi.get(e))return oi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=dd.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||hd.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return oi.set(e,r),r}cd(t=>({...t,get:(e,n,s)=>mo(e,n)||t.get(e,n,s),has:(e,n)=>!!mo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function pd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Si="@firebase/app",go="0.9.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=new Es("@firebase/app"),md="@firebase/app-compat",gd="@firebase/analytics-compat",yd="@firebase/analytics",vd="@firebase/app-check-compat",wd="@firebase/app-check",Id="@firebase/auth",Ed="@firebase/auth-compat",Td="@firebase/database",bd="@firebase/database-compat",_d="@firebase/functions",Sd="@firebase/functions-compat",Ad="@firebase/installations",kd="@firebase/installations-compat",Cd="@firebase/messaging",Dd="@firebase/messaging-compat",Nd="@firebase/performance",Rd="@firebase/performance-compat",Ld="@firebase/remote-config",Od="@firebase/remote-config-compat",Md="@firebase/storage",Pd="@firebase/storage-compat",xd="@firebase/firestore",Ud="@firebase/firestore-compat",Fd="firebase",Vd="9.16.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai="[DEFAULT]",Bd={[Si]:"fire-core",[md]:"fire-core-compat",[yd]:"fire-analytics",[gd]:"fire-analytics-compat",[wd]:"fire-app-check",[vd]:"fire-app-check-compat",[Id]:"fire-auth",[Ed]:"fire-auth-compat",[Td]:"fire-rtdb",[bd]:"fire-rtdb-compat",[_d]:"fire-fn",[Sd]:"fire-fn-compat",[Ad]:"fire-iid",[kd]:"fire-iid-compat",[Cd]:"fire-fcm",[Dd]:"fire-fcm-compat",[Nd]:"fire-perf",[Rd]:"fire-perf-compat",[Ld]:"fire-rc",[Od]:"fire-rc-compat",[Md]:"fire-gcs",[Pd]:"fire-gcs-compat",[xd]:"fire-fst",[Ud]:"fire-fst-compat","fire-js":"fire-js",[Fd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new Map,ki=new Map;function $d(t,e){try{t.container.addComponent(e)}catch(n){ot.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ee(t){const e=t.name;if(ki.has(e))return ot.debug(`There were multiple attempts to register component ${e}.`),!1;ki.set(e,t);for(const n of Jn.values())$d(n,t);return!0}function pt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},je=new ft("app","Firebase",qd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new me("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw je.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=Vd;function sr(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ai,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw je.create("bad-app-name",{appName:String(i)});if(n||(n=Rh()),!n)throw je.create("no-options");const r=Jn.get(i);if(r){if(en(n,r.options)&&en(s,r.config))return r;throw je.create("duplicate-app",{appName:i})}const o=new Jh(i);for(const c of ki.values())o.addComponent(c);const a=new jd(n,s,o);return Jn.set(i,a),a}function ir(t=Ai){const e=Jn.get(t);if(!e&&t===Ai)return sr();if(!e)throw je.create("no-app",{appName:t});return e}function de(t,e,n){var s;let i=(s=Bd[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ot.warn(a.join(" "));return}Ee(new me(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="firebase-heartbeat-database",Kd=1,tn="firebase-heartbeat-store";let ai=null;function Wa(){return ai||(ai=Ga(Hd,Kd,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(tn)}}}).catch(t=>{throw je.create("idb-open",{originalErrorMessage:t.message})})),ai}async function zd(t){try{return(await Wa()).transaction(tn).objectStore(tn).get(Qa(t))}catch(e){if(e instanceof ge)ot.warn(e.message);else{const n=je.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ot.warn(n.message)}}}async function yo(t,e){try{const s=(await Wa()).transaction(tn,"readwrite");return await s.objectStore(tn).put(e,Qa(t)),s.done}catch(n){if(n instanceof ge)ot.warn(n.message);else{const s=je.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ot.warn(s.message)}}}function Qa(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=1024,Wd=30*24*60*60*1e3;class Qd{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Yd(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=vo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Wd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=vo(),{heartbeatsToSend:n,unsentEntries:s}=Xd(this._heartbeatsCache.heartbeats),i=Yn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function vo(){return new Date().toISOString().substring(0,10)}function Xd(t,e=Gd){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),wo(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),wo(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Yd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ja()?Ha().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await zd(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function wo(t){return Yn(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(t){Ee(new me("platform-logger",e=>new fd(e),"PRIVATE")),Ee(new me("heartbeat",e=>new Qd(e),"PRIVATE")),de(Si,go,t),de(Si,go,"esm2017"),de("fire-js","")}Jd("");var Zd="firebase",ef="9.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */de(Zd,ef,"app");const Xa="@firebase/installations",rr="0.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya=1e4,Ja=`w:${rr}`,Za="FIS_v2",tf="https://firebaseinstallations.googleapis.com/v1",nf=60*60*1e3,sf="installations",rf="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},at=new ft(sf,rf,of);function ec(t){return t instanceof ge&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc({projectId:t}){return`${tf}/projects/${t}/installations`}function nc(t){return{token:t.token,requestStatus:2,expiresIn:cf(t.expiresIn),creationTime:Date.now()}}async function sc(t,e){const s=(await e.json()).error;return at.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function ic({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function af(t,{refreshToken:e}){const n=ic(t);return n.append("Authorization",uf(e)),n}async function rc(t){const e=await t();return e.status>=500&&e.status<600?t():e}function cf(t){return Number(t.replace("s","000"))}function uf(t){return`${Za} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lf({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=tc(t),i=ic(t),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Za,appId:t.appId,sdkVersion:Ja},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await rc(()=>fetch(s,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:nc(u.authToken)}}else throw await sc("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df=/^[cdef][\w-]{21}$/,Ci="";function ff(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=pf(t);return df.test(n)?n:Ci}catch{return Ci}}function pf(t){return hf(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=new Map;function cc(t,e){const n=Ts(t);uc(n,e),mf(n,e)}function uc(t,e){const n=ac.get(t);if(n)for(const s of n)s(e)}function mf(t,e){const n=gf();n&&n.postMessage({key:t,fid:e}),yf()}let Je=null;function gf(){return!Je&&"BroadcastChannel"in self&&(Je=new BroadcastChannel("[Firebase] FID Change"),Je.onmessage=t=>{uc(t.data.key,t.data.fid)}),Je}function yf(){ac.size===0&&Je&&(Je.close(),Je=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf="firebase-installations-database",wf=1,ct="firebase-installations-store";let ci=null;function or(){return ci||(ci=Ga(vf,wf,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ct)}}})),ci}async function Zn(t,e){const n=Ts(t),i=(await or()).transaction(ct,"readwrite"),r=i.objectStore(ct),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&cc(t,e.fid),e}async function lc(t){const e=Ts(t),s=(await or()).transaction(ct,"readwrite");await s.objectStore(ct).delete(e),await s.done}async function bs(t,e){const n=Ts(t),i=(await or()).transaction(ct,"readwrite"),r=i.objectStore(ct),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&cc(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ar(t){let e;const n=await bs(t.appConfig,s=>{const i=If(s),r=Ef(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===Ci?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function If(t){const e=t||{fid:ff(),registrationStatus:0};return hc(e)}function Ef(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(at.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Tf(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:bf(t)}:{installationEntry:e}}async function Tf(t,e){try{const n=await lf(t,e);return Zn(t.appConfig,n)}catch(n){throw ec(n)&&n.customData.serverCode===409?await lc(t.appConfig):await Zn(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function bf(t){let e=await Io(t.appConfig);for(;e.registrationStatus===1;)await oc(100),e=await Io(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await ar(t);return s||n}return e}function Io(t){return bs(t,e=>{if(!e)throw at.create("installation-not-found");return hc(e)})}function hc(t){return _f(t)?{fid:t.fid,registrationStatus:0}:t}function _f(t){return t.registrationStatus===1&&t.registrationTime+Ya<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sf({appConfig:t,heartbeatServiceProvider:e},n){const s=Af(t,n),i=af(t,n),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Ja,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await rc(()=>fetch(s,a));if(c.ok){const u=await c.json();return nc(u)}else throw await sc("Generate Auth Token",c)}function Af(t,{fid:e}){return`${tc(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cr(t,e=!1){let n;const s=await bs(t.appConfig,r=>{if(!dc(r))throw at.create("not-registered");const o=r.authToken;if(!e&&Df(o))return r;if(o.requestStatus===1)return n=kf(t,e),r;{if(!navigator.onLine)throw at.create("app-offline");const a=Rf(r);return n=Cf(t,a),a}});return n?await n:s.authToken}async function kf(t,e){let n=await Eo(t.appConfig);for(;n.authToken.requestStatus===1;)await oc(100),n=await Eo(t.appConfig);const s=n.authToken;return s.requestStatus===0?cr(t,e):s}function Eo(t){return bs(t,e=>{if(!dc(e))throw at.create("not-registered");const n=e.authToken;return Lf(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Cf(t,e){try{const n=await Sf(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Zn(t.appConfig,s),n}catch(n){if(ec(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await lc(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Zn(t.appConfig,s)}throw n}}function dc(t){return t!==void 0&&t.registrationStatus===2}function Df(t){return t.requestStatus===2&&!Nf(t)}function Nf(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+nf}function Rf(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Lf(t){return t.requestStatus===1&&t.requestTime+Ya<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Of(t){const e=t,{installationEntry:n,registrationPromise:s}=await ar(e);return s?s.catch(console.error):cr(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mf(t,e=!1){const n=t;return await Pf(n),(await cr(n,e)).token}async function Pf(t){const{registrationPromise:e}=await ar(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(t){if(!t||!t.options)throw ui("App Configuration");if(!t.name)throw ui("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ui(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ui(t){return at.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc="installations",Uf="installations-internal",Ff=t=>{const e=t.getProvider("app").getImmediate(),n=xf(e),s=pt(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Vf=t=>{const e=t.getProvider("app").getImmediate(),n=pt(e,fc).getImmediate();return{getId:()=>Of(n),getToken:i=>Mf(n,i)}};function Bf(){Ee(new me(fc,Ff,"PUBLIC")),Ee(new me(Uf,Vf,"PRIVATE"))}Bf();de(Xa,rr);de(Xa,rr,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="analytics",$f="firebase_id",qf="origin",jf=60*1e3,Hf="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",pc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=new Es("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Kf(t,e){const n=document.createElement("script");n.src=`${pc}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function zf(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Gf(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const c=(await mc(n)).find(u=>u.measurementId===i);c&&await e[c.appId]}}catch(a){oe.error(a)}t("config",i,r)}async function Wf(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await mc(n);for(const c of o){const u=a.find(h=>h.measurementId===c),l=u&&e[u.appId];if(l)r.push(l);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){oe.error(r)}}function Qf(t,e,n,s){async function i(r,o,a){try{r==="event"?await Wf(t,e,n,o,a):r==="config"?await Gf(t,e,n,s,o,a):r==="consent"?t("consent","update",a):t("set",o)}catch(c){oe.error(c)}}return i}function Xf(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=Qf(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function Yf(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(pc)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},fe=new ft("analytics","Analytics",Jf);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf=30,ep=1e3;class tp{constructor(e={},n=ep){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const gc=new tp;function np(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function sp(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:np(s)},r=Hf.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw fe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function ip(t,e=gc,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw fe.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw fe.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ap;return setTimeout(async()=>{a.abort()},n!==void 0?n:jf),yc({appId:s,apiKey:i,measurementId:r},o,a,e)}async function yc(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=gc){var r;const{appId:o,measurementId:a}=t;try{await rp(s,e)}catch(c){if(a)return oe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await sp(t);return i.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!op(u)){if(i.deleteThrottleMetadata(o),a)return oe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw c}const l=Number((r=u==null?void 0:u.customData)===null||r===void 0?void 0:r.httpStatus)===503?ho(n,i.intervalMillis,Zf):ho(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(o,h),oe.debug(`Calling attemptFetch again in ${l} millis`),yc(t,h,s,i)}}function rp(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(fe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function op(t){if(!(t instanceof ge)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class ap{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function cp(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function up(){if(ja())try{await Ha()}catch(t){return oe.warn(fe.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return oe.warn(fe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function lp(t,e,n,s,i,r,o){var a;const c=ip(t);c.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&oe.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>oe.error(m)),e.push(c);const u=up().then(m=>{if(m)return s.getId()}),[l,h]=await Promise.all([c,u]);Yf(r)||Kf(r,l.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[qf]="firebase",d.update=!0,h!=null&&(d[$f]=h),i("config",l.measurementId,d),l.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e){this.app=e}_delete(){return delete Gt[this.app.options.appId],Promise.resolve()}}let Gt={},To=[];const bo={};let li="dataLayer",dp="gtag",_o,vc,So=!1;function fp(){const t=[];if(qa()&&t.push("This is a browser extension environment."),Uh()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=fe.create("invalid-analytics-context",{errorInfo:e});oe.warn(n.message)}}function pp(t,e,n){fp();const s=t.options.appId;if(!s)throw fe.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)oe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw fe.create("no-api-key");if(Gt[s]!=null)throw fe.create("already-exists",{id:s});if(!So){zf(li);const{wrappedGtag:r,gtagCore:o}=Xf(Gt,To,bo,li,dp);vc=r,_o=o,So=!0}return Gt[s]=lp(t,To,bo,e,_o,li,n),new hp(t)}function mp(t=ir()){t=ce(t);const e=pt(t,es);return e.isInitialized()?e.getImmediate():gp(t)}function gp(t,e={}){const n=pt(t,es);if(n.isInitialized()){const i=n.getImmediate();if(en(e,n.getOptions()))return i;throw fe.create("already-initialized")}return n.initialize({options:e})}function yp(t,e,n,s){t=ce(t),cp(vc,Gt[t.app.options.appId],e,n,s).catch(i=>oe.error(i))}const Ao="@firebase/analytics",ko="0.9.1";function vp(){Ee(new me(es,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return pp(s,i,n)},"PUBLIC")),Ee(new me("analytics-internal",t,"PRIVATE")),de(Ao,ko),de(Ao,ko,"esm2017");function t(e){try{const n=e.getProvider(es).getImmediate();return{logEvent:(s,i,r)=>yp(n,s,i,r)}}catch(n){throw fe.create("interop-component-reg-failed",{reason:n})}}}vp();var wp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g,ur=ur||{},S=wp||self;function ts(){}function _s(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function vn(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Ip(t){return Object.prototype.hasOwnProperty.call(t,hi)&&t[hi]||(t[hi]=++Ep)}var hi="closure_uid_"+(1e9*Math.random()>>>0),Ep=0;function Tp(t,e,n){return t.call.apply(t.bind,arguments)}function bp(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function te(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?te=Tp:te=bp,te.apply(null,arguments)}function xn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function X(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function We(){this.s=this.s,this.o=this.o}var _p=0;We.prototype.s=!1;We.prototype.na=function(){!this.s&&(this.s=!0,this.M(),_p!=0)&&Ip(this)};We.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const wc=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function lr(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Co(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(_s(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function ne(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ne.prototype.h=function(){this.defaultPrevented=!0};var Sp=function(){if(!S.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{S.addEventListener("test",ts,e),S.removeEventListener("test",ts,e)}catch{}return t}();function ns(t){return/^[\s\xa0]*$/.test(t)}var Do=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function di(t,e){return t<e?-1:t>e?1:0}function Ss(){var t=S.navigator;return t&&(t=t.userAgent)?t:""}function ye(t){return Ss().indexOf(t)!=-1}function hr(t){return hr[" "](t),t}hr[" "]=ts;function Ap(t){var e=Dp;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var kp=ye("Opera"),St=ye("Trident")||ye("MSIE"),Ic=ye("Edge"),Di=Ic||St,Ec=ye("Gecko")&&!(Ss().toLowerCase().indexOf("webkit")!=-1&&!ye("Edge"))&&!(ye("Trident")||ye("MSIE"))&&!ye("Edge"),Cp=Ss().toLowerCase().indexOf("webkit")!=-1&&!ye("Edge");function Tc(){var t=S.document;return t?t.documentMode:void 0}var ss;e:{var fi="",pi=function(){var t=Ss();if(Ec)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ic)return/Edge\/([\d\.]+)/.exec(t);if(St)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Cp)return/WebKit\/(\S+)/.exec(t);if(kp)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(pi&&(fi=pi?pi[1]:""),St){var mi=Tc();if(mi!=null&&mi>parseFloat(fi)){ss=String(mi);break e}}ss=fi}var Dp={};function Np(){return Ap(function(){let t=0;const e=Do(String(ss)).split("."),n=Do("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=di(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||di(i[2].length==0,r[2].length==0)||di(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var Ni;if(S.document&&St){var No=Tc();Ni=No||parseInt(ss,10)||void 0}else Ni=void 0;var Rp=Ni;function nn(t,e){if(ne.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ec){e:{try{hr(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Lp[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&nn.X.h.call(this)}}X(nn,ne);var Lp={2:"touch",3:"pen",4:"mouse"};nn.prototype.h=function(){nn.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var wn="closure_listenable_"+(1e6*Math.random()|0),Op=0;function Mp(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++Op,this.ba=this.ea=!1}function As(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function dr(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function bc(t){const e={};for(const n in t)e[n]=t[n];return e}const Ro="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _c(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Ro.length;r++)n=Ro[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ks(t){this.src=t,this.g={},this.h=0}ks.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Li(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Mp(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function Ri(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=wc(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(As(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Li(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var fr="closure_lm_"+(1e6*Math.random()|0),gi={};function Sc(t,e,n,s,i){if(s&&s.once)return kc(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Sc(t,e[r],n,s,i);return null}return n=gr(n),t&&t[wn]?t.N(e,n,vn(s)?!!s.capture:!!s,i):Ac(t,e,n,!1,s,i)}function Ac(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=vn(i)?!!i.capture:!!i,a=mr(t);if(a||(t[fr]=a=new ks(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=Pp(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Sp||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Dc(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Pp(){function t(n){return e.call(t.src,t.listener,n)}const e=xp;return t}function kc(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)kc(t,e[r],n,s,i);return null}return n=gr(n),t&&t[wn]?t.O(e,n,vn(s)?!!s.capture:!!s,i):Ac(t,e,n,!0,s,i)}function Cc(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Cc(t,e[r],n,s,i);else s=vn(s)?!!s.capture:!!s,n=gr(n),t&&t[wn]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Li(r,n,s,i),-1<n&&(As(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=mr(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Li(e,n,s,i)),(n=-1<t?e[t]:null)&&pr(n))}function pr(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[wn])Ri(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Dc(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=mr(e))?(Ri(n,t),n.h==0&&(n.src=null,e[fr]=null)):As(t)}}}function Dc(t){return t in gi?gi[t]:gi[t]="on"+t}function xp(t,e){if(t.ba)t=!0;else{e=new nn(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&pr(t),t=n.call(s,e)}return t}function mr(t){return t=t[fr],t instanceof ks?t:null}var yi="__closure_events_fn_"+(1e9*Math.random()>>>0);function gr(t){return typeof t=="function"?t:(t[yi]||(t[yi]=function(e){return t.handleEvent(e)}),t[yi])}function G(){We.call(this),this.i=new ks(this),this.P=this,this.I=null}X(G,We);G.prototype[wn]=!0;G.prototype.removeEventListener=function(t,e,n,s){Cc(this,t,e,n,s)};function Q(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new ne(e,t);else if(e instanceof ne)e.target=e.target||t;else{var i=e;e=new ne(s,t),_c(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Un(o,s,!0,e)&&i}if(o=e.g=t,i=Un(o,s,!0,e)&&i,i=Un(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Un(o,s,!1,e)&&i}G.prototype.M=function(){if(G.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)As(n[s]);delete t.g[e],t.h--}}this.I=null};G.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};G.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Un(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Ri(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var yr=S.JSON.stringify;function Up(){var t=Lc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Fp{constructor(){this.h=this.g=null}add(e,n){const s=Nc.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Nc=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Vp,t=>t.reset());class Vp{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Bp(t){S.setTimeout(()=>{throw t},0)}function Rc(t,e){Oi||$p(),Mi||(Oi(),Mi=!0),Lc.add(t,e)}var Oi;function $p(){var t=S.Promise.resolve(void 0);Oi=function(){t.then(qp)}}var Mi=!1,Lc=new Fp;function qp(){for(var t;t=Up();){try{t.h.call(t.g)}catch(n){Bp(n)}var e=Nc;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Mi=!1}function Cs(t,e){G.call(this),this.h=t||1,this.g=e||S,this.j=te(this.lb,this),this.l=Date.now()}X(Cs,G);g=Cs.prototype;g.ca=!1;g.R=null;g.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Q(this,"tick"),this.ca&&(vr(this),this.start()))}};g.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function vr(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}g.M=function(){Cs.X.M.call(this),vr(this),delete this.g};function wr(t,e,n){if(typeof t=="function")n&&(t=te(t,n));else if(t&&typeof t.handleEvent=="function")t=te(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:S.setTimeout(t,e||0)}function Oc(t){t.g=wr(()=>{t.g=null,t.i&&(t.i=!1,Oc(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class jp extends We{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Oc(this)}M(){super.M(),this.g&&(S.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function sn(t){We.call(this),this.h=t,this.g={}}X(sn,We);var Lo=[];function Mc(t,e,n,s){Array.isArray(n)||(n&&(Lo[0]=n.toString()),n=Lo);for(var i=0;i<n.length;i++){var r=Sc(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Pc(t){dr(t.g,function(e,n){this.g.hasOwnProperty(n)&&pr(e)},t),t.g={}}sn.prototype.M=function(){sn.X.M.call(this),Pc(this)};sn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ds(){this.g=!0}Ds.prototype.Aa=function(){this.g=!1};function Hp(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Kp(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function It(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Gp(t,n)+(s?" "+s:"")})}function zp(t,e){t.info(function(){return"TIMEOUT: "+e})}Ds.prototype.info=function(){};function Gp(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return yr(n)}catch{return e}}var mt={},Oo=null;function Ns(){return Oo=Oo||new G}mt.Pa="serverreachability";function xc(t){ne.call(this,mt.Pa,t)}X(xc,ne);function rn(t){const e=Ns();Q(e,new xc(e))}mt.STAT_EVENT="statevent";function Uc(t,e){ne.call(this,mt.STAT_EVENT,t),this.stat=e}X(Uc,ne);function re(t){const e=Ns();Q(e,new Uc(e,t))}mt.Qa="timingevent";function Fc(t,e){ne.call(this,mt.Qa,t),this.size=e}X(Fc,ne);function In(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return S.setTimeout(function(){t()},e)}var Rs={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Vc={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ir(){}Ir.prototype.h=null;function Mo(t){return t.h||(t.h=t.i())}function Bc(){}var En={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Er(){ne.call(this,"d")}X(Er,ne);function Tr(){ne.call(this,"c")}X(Tr,ne);var Pi;function Ls(){}X(Ls,Ir);Ls.prototype.g=function(){return new XMLHttpRequest};Ls.prototype.i=function(){return{}};Pi=new Ls;function Tn(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new sn(this),this.O=Wp,t=Di?125:void 0,this.T=new Cs(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new $c}function $c(){this.i=null,this.g="",this.h=!1}var Wp=45e3,xi={},is={};g=Tn.prototype;g.setTimeout=function(t){this.O=t};function Ui(t,e,n){t.K=1,t.v=Ms(Le(e)),t.s=n,t.P=!0,qc(t,null)}function qc(t,e){t.F=Date.now(),bn(t),t.A=Le(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Xc(n.i,"t",s),t.C=0,n=t.l.H,t.h=new $c,t.g=yu(t.l,n?e:null,!t.s),0<t.N&&(t.L=new jp(te(t.La,t,t.g),t.N)),Mc(t.S,t.g,"readystatechange",t.ib),e=t.H?bc(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),rn(),Hp(t.j,t.u,t.A,t.m,t.U,t.s)}g.ib=function(t){t=t.target;const e=this.L;e&&ke(t)==3?e.l():this.La(t)};g.La=function(t){try{if(t==this.g)e:{const l=ke(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Di||this.g&&(this.h.h||this.g.fa()||Fo(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?rn(3):rn(2)),Os(this);var n=this.g.aa();this.Y=n;t:if(jc(this)){var s=Fo(this.g);t="";var i=s.length,r=ke(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ze(this),Wt(this);var o="";break t}this.h.i=new S.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Kp(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ns(a)){var u=a;break t}}u=null}if(n=u)It(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Fi(this,n);else{this.i=!1,this.o=3,re(12),Ze(this),Wt(this);break e}}this.P?(Hc(this,l,o),Di&&this.i&&l==3&&(Mc(this.S,this.T,"tick",this.hb),this.T.start())):(It(this.j,this.m,o,null),Fi(this,o)),l==4&&Ze(this),this.i&&!this.I&&(l==4?fu(this.l,this):(this.i=!1,bn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,re(12)):(this.o=0,re(13)),Ze(this),Wt(this)}}}catch{}finally{}};function jc(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Hc(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=Qp(t,n),i==is){e==4&&(t.o=4,re(14),s=!1),It(t.j,t.m,null,"[Incomplete Response]");break}else if(i==xi){t.o=4,re(15),It(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else It(t.j,t.m,i,null),Fi(t,i);jc(t)&&i!=is&&i!=xi&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,re(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Dr(e),e.K=!0,re(11))):(It(t.j,t.m,n,"[Invalid Chunked Response]"),Ze(t),Wt(t))}g.hb=function(){if(this.g){var t=ke(this.g),e=this.g.fa();this.C<e.length&&(Os(this),Hc(this,t,e),this.i&&t!=4&&bn(this))}};function Qp(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?is:(n=Number(e.substring(n,s)),isNaN(n)?xi:(s+=1,s+n>e.length?is:(e=e.substr(s,n),t.C=s+n,e)))}g.cancel=function(){this.I=!0,Ze(this)};function bn(t){t.V=Date.now()+t.O,Kc(t,t.O)}function Kc(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=In(te(t.gb,t),e)}function Os(t){t.B&&(S.clearTimeout(t.B),t.B=null)}g.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(zp(this.j,this.A),this.K!=2&&(rn(),re(17)),Ze(this),this.o=2,Wt(this)):Kc(this,this.V-t)};function Wt(t){t.l.G==0||t.I||fu(t.l,t)}function Ze(t){Os(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,vr(t.T),Pc(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Fi(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Vi(n.h,t))){if(!t.J&&Vi(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)as(n),Us(n);else break e;Cr(n),re(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=In(te(n.cb,n),6e3));if(1>=Zc(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else et(n,11)}else if((t.J||n.g==t)&&as(n),!ns(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const E=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var r=s.h;r.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(br(r,r.h),r.h=null))}if(s.D){const C=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(s.za=C,P(s.F,s.D,C))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=gu(s,s.H?s.ka:null,s.V),o.J){eu(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Os(a),bn(a)),s.g=o}else hu(s);0<n.i.length&&Fs(n)}else u[0]!="stop"&&u[0]!="close"||et(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?et(n,7):kr(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}rn(4)}catch{}}function Xp(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(_s(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Yp(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(_s(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function zc(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(_s(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Yp(t),s=Xp(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var Gc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jp(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function st(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof st){this.h=e!==void 0?e:t.h,rs(this,t.j),this.s=t.s,this.g=t.g,os(this,t.m),this.l=t.l,e=t.i;var n=new on;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Po(this,n),this.o=t.o}else t&&(n=String(t).match(Gc))?(this.h=!!e,rs(this,n[1]||"",!0),this.s=jt(n[2]||""),this.g=jt(n[3]||"",!0),os(this,n[4]),this.l=jt(n[5]||"",!0),Po(this,n[6]||"",!0),this.o=jt(n[7]||"")):(this.h=!!e,this.i=new on(null,this.h))}st.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ht(e,xo,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ht(e,xo,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ht(n,n.charAt(0)=="/"?tm:em,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ht(n,sm)),t.join("")};function Le(t){return new st(t)}function rs(t,e,n){t.j=n?jt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function os(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Po(t,e,n){e instanceof on?(t.i=e,im(t.i,t.h)):(n||(e=Ht(e,nm)),t.i=new on(e,t.h))}function P(t,e,n){t.i.set(e,n)}function Ms(t){return P(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function jt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ht(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Zp),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Zp(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var xo=/[#\/\?@]/g,em=/[#\?:]/g,tm=/[#\?]/g,nm=/[#\?@]/g,sm=/#/g;function on(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Qe(t){t.g||(t.g=new Map,t.h=0,t.i&&Jp(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}g=on.prototype;g.add=function(t,e){Qe(this),this.i=null,t=Mt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Wc(t,e){Qe(t),e=Mt(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Qc(t,e){return Qe(t),e=Mt(t,e),t.g.has(e)}g.forEach=function(t,e){Qe(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};g.oa=function(){Qe(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};g.W=function(t){Qe(this);let e=[];if(typeof t=="string")Qc(this,t)&&(e=e.concat(this.g.get(Mt(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};g.set=function(t,e){return Qe(this),this.i=null,t=Mt(this,t),Qc(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};g.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Xc(t,e,n){Wc(t,e),0<n.length&&(t.i=null,t.g.set(Mt(t,e),lr(n)),t.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Mt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function im(t,e){e&&!t.j&&(Qe(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Wc(this,s),Xc(this,i,n))},t)),t.j=e}var rm=class{constructor(e,n){this.h=e,this.g=n}};function Yc(t){this.l=t||om,S.PerformanceNavigationTiming?(t=S.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(S.g&&S.g.Ga&&S.g.Ga()&&S.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var om=10;function Jc(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Zc(t){return t.h?1:t.g?t.g.size:0}function Vi(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function br(t,e){t.g?t.g.add(e):t.h=e}function eu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Yc.prototype.cancel=function(){if(this.i=tu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function tu(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return lr(t.i)}function _r(){}_r.prototype.stringify=function(t){return S.JSON.stringify(t,void 0)};_r.prototype.parse=function(t){return S.JSON.parse(t,void 0)};function am(){this.g=new _r}function cm(t,e,n){const s=n||"";try{zc(t,function(i,r){let o=i;vn(i)&&(o=yr(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function um(t,e){const n=new Ds;if(S.Image){const s=new Image;s.onload=xn(Fn,n,s,"TestLoadImage: loaded",!0,e),s.onerror=xn(Fn,n,s,"TestLoadImage: error",!1,e),s.onabort=xn(Fn,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=xn(Fn,n,s,"TestLoadImage: timeout",!1,e),S.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Fn(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function _n(t){this.l=t.ac||null,this.j=t.jb||!1}X(_n,Ir);_n.prototype.g=function(){return new Ps(this.l,this.j)};_n.prototype.i=function(t){return function(){return t}}({});function Ps(t,e){G.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Sr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}X(Ps,G);var Sr=0;g=Ps.prototype;g.open=function(t,e){if(this.readyState!=Sr)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,an(this)};g.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||S).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sn(this)),this.readyState=Sr};g.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,an(this)),this.g&&(this.readyState=3,an(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof S.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;nu(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function nu(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}g.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Sn(this):an(this),this.readyState==3&&nu(this)}};g.Va=function(t){this.g&&(this.response=this.responseText=t,Sn(this))};g.Ua=function(t){this.g&&(this.response=t,Sn(this))};g.ga=function(){this.g&&Sn(this)};function Sn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,an(t)}g.setRequestHeader=function(t,e){this.v.append(t,e)};g.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function an(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ps.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var lm=S.JSON.parse;function F(t){G.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=su,this.K=this.L=!1}X(F,G);var su="",hm=/^https?$/i,dm=["POST","PUT"];g=F.prototype;g.Ka=function(t){this.L=t};g.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Pi.g(),this.C=this.u?Mo(this.u):Mo(Pi),this.g.onreadystatechange=te(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Uo(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=S.FormData&&t instanceof S.FormData,!(0<=wc(dm,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ou(this),0<this.B&&((this.K=fm(this.g))?(this.g.timeout=this.B,this.g.ontimeout=te(this.qa,this)):this.A=wr(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Uo(this,r)}};function fm(t){return St&&Np()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}g.qa=function(){typeof ur<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Q(this,"timeout"),this.abort(8))};function Uo(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,iu(t),xs(t)}function iu(t){t.D||(t.D=!0,Q(t,"complete"),Q(t,"error"))}g.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Q(this,"complete"),Q(this,"abort"),xs(this))};g.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xs(this,!0)),F.X.M.call(this)};g.Ha=function(){this.s||(this.F||this.v||this.l?ru(this):this.fb())};g.fb=function(){ru(this)};function ru(t){if(t.h&&typeof ur<"u"&&(!t.C[1]||ke(t)!=4||t.aa()!=2)){if(t.v&&ke(t)==4)wr(t.Ha,0,t);else if(Q(t,"readystatechange"),ke(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(Gc)[1]||null;if(!i&&S.self&&S.self.location){var r=S.self.location.protocol;i=r.substr(0,r.length-1)}s=!hm.test(i?i.toLowerCase():"")}n=s}if(n)Q(t,"complete"),Q(t,"success");else{t.m=6;try{var o=2<ke(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",iu(t)}}finally{xs(t)}}}}function xs(t,e){if(t.g){ou(t);const n=t.g,s=t.C[0]?ts:null;t.g=null,t.C=null,e||Q(t,"ready");try{n.onreadystatechange=s}catch{}}}function ou(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(S.clearTimeout(t.A),t.A=null)}function ke(t){return t.g?t.g.readyState:0}g.aa=function(){try{return 2<ke(this)?this.g.status:-1}catch{return-1}};g.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),lm(e)}};function Fo(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case su:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}g.Ea=function(){return this.m};g.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function au(t){let e="";return dr(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ar(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=au(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):P(t,e,n))}function qt(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function cu(t){this.Ca=0,this.i=[],this.j=new Ds,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=qt("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=qt("baseRetryDelayMs",5e3,t),this.bb=qt("retryDelaySeedMs",1e4,t),this.$a=qt("forwardChannelMaxRetries",2,t),this.ta=qt("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Yc(t&&t.concurrentRequestLimit),this.Fa=new am,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}g=cu.prototype;g.ma=8;g.G=1;function kr(t){if(uu(t),t.G==3){var e=t.U++,n=Le(t.F);P(n,"SID",t.I),P(n,"RID",e),P(n,"TYPE","terminate"),An(t,n),e=new Tn(t,t.j,e,void 0),e.K=2,e.v=Ms(Le(n)),n=!1,S.navigator&&S.navigator.sendBeacon&&(n=S.navigator.sendBeacon(e.v.toString(),"")),!n&&S.Image&&(new Image().src=e.v,n=!0),n||(e.g=yu(e.l,null),e.g.da(e.v)),e.F=Date.now(),bn(e)}mu(t)}function Us(t){t.g&&(Dr(t),t.g.cancel(),t.g=null)}function uu(t){Us(t),t.u&&(S.clearTimeout(t.u),t.u=null),as(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&S.clearTimeout(t.m),t.m=null)}function Fs(t){Jc(t.h)||t.m||(t.m=!0,Rc(t.Ja,t),t.C=0)}function pm(t,e){return Zc(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=In(te(t.Ja,t,e),pu(t,t.C)),t.C++,!0)}g.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Tn(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=bc(r),_c(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=lu(this,i,e),n=Le(this.F),P(n,"RID",t),P(n,"CVER",22),this.D&&P(n,"X-HTTP-Session-Id",this.D),An(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(au(r)))+"&"+e:this.o&&Ar(n,this.o,r)),br(this.h,i),this.Ya&&P(n,"TYPE","init"),this.O?(P(n,"$req",e),P(n,"SID","null"),i.Z=!0,Ui(i,n,null)):Ui(i,n,e),this.G=2}}else this.G==3&&(t?Vo(this,t):this.i.length==0||Jc(this.h)||Vo(this))};function Vo(t,e){var n;e?n=e.m:n=t.U++;const s=Le(t.F);P(s,"SID",t.I),P(s,"RID",n),P(s,"AID",t.T),An(t,s),t.o&&t.s&&Ar(s,t.o,t.s),n=new Tn(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=lu(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),br(t.h,n),Ui(n,s,e)}function An(t,e){t.ia&&dr(t.ia,function(n,s){P(e,s,n)}),t.l&&zc({},function(n,s){P(e,s,n)})}function lu(t,e,n){n=Math.min(t.i.length,n);var s=t.l?te(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let u=i[c].h;const l=i[c].g;if(u-=r,0>u)r=Math.max(0,i[c].h-100),a=!1;else try{cm(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function hu(t){t.g||t.u||(t.Z=1,Rc(t.Ia,t),t.A=0)}function Cr(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=In(te(t.Ia,t),pu(t,t.A)),t.A++,!0)}g.Ia=function(){if(this.u=null,du(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=In(te(this.eb,this),t)}};g.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,re(10),Us(this),du(this))};function Dr(t){t.B!=null&&(S.clearTimeout(t.B),t.B=null)}function du(t){t.g=new Tn(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Le(t.sa);P(e,"RID","rpc"),P(e,"SID",t.I),P(e,"CI",t.L?"0":"1"),P(e,"AID",t.T),P(e,"TYPE","xmlhttp"),An(t,e),t.o&&t.s&&Ar(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ms(Le(e)),n.s=null,n.P=!0,qc(n,t)}g.cb=function(){this.v!=null&&(this.v=null,Us(this),Cr(this),re(19))};function as(t){t.v!=null&&(S.clearTimeout(t.v),t.v=null)}function fu(t,e){var n=null;if(t.g==e){as(t),Dr(t),t.g=null;var s=2}else if(Vi(t.h,e))n=e.D,eu(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Ns(),Q(s,new Fc(s,n)),Fs(t)}else hu(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&pm(t,e)||s==2&&Cr(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:et(t,5);break;case 4:et(t,10);break;case 3:et(t,6);break;default:et(t,2)}}}function pu(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function et(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=te(t.kb,t);n||(n=new st("//www.google.com/images/cleardot.gif"),S.location&&S.location.protocol=="http"||rs(n,"https"),Ms(n)),um(n.toString(),s)}else re(2);t.G=0,t.l&&t.l.va(e),mu(t),uu(t)}g.kb=function(t){t?(this.j.info("Successfully pinged google.com"),re(2)):(this.j.info("Failed to ping google.com"),re(1))};function mu(t){if(t.G=0,t.la=[],t.l){const e=tu(t.h);(e.length!=0||t.i.length!=0)&&(Co(t.la,e),Co(t.la,t.i),t.h.i.length=0,lr(t.i),t.i.length=0),t.l.ua()}}function gu(t,e,n){var s=n instanceof st?Le(n):new st(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),os(s,s.m);else{var i=S.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new st(null,void 0);s&&rs(r,s),e&&(r.g=e),i&&os(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&P(s,n,e),P(s,"VER",t.ma),An(t,s),s}function yu(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new F(new _n({jb:!0})):new F(t.ra),e.Ka(t.H),e}function vu(){}g=vu.prototype;g.xa=function(){};g.wa=function(){};g.va=function(){};g.ua=function(){};g.Ra=function(){};function cs(){if(St&&!(10<=Number(Rp)))throw Error("Environmental error: no available transport.")}cs.prototype.g=function(t,e){return new ue(t,e)};function ue(t,e){G.call(this),this.g=new cu(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!ns(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ns(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Pt(this)}X(ue,G);ue.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;re(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=gu(t,null,t.V),Fs(t)};ue.prototype.close=function(){kr(this.g)};ue.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=yr(t),t=n);e.i.push(new rm(e.ab++,t)),e.G==3&&Fs(e)};ue.prototype.M=function(){this.g.l=null,delete this.j,kr(this.g),delete this.g,ue.X.M.call(this)};function wu(t){Er.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}X(wu,Er);function Iu(){Tr.call(this),this.status=1}X(Iu,Tr);function Pt(t){this.g=t}X(Pt,vu);Pt.prototype.xa=function(){Q(this.g,"a")};Pt.prototype.wa=function(t){Q(this.g,new wu(t))};Pt.prototype.va=function(t){Q(this.g,new Iu)};Pt.prototype.ua=function(){Q(this.g,"b")};cs.prototype.createWebChannel=cs.prototype.g;ue.prototype.send=ue.prototype.u;ue.prototype.open=ue.prototype.m;ue.prototype.close=ue.prototype.close;Rs.NO_ERROR=0;Rs.TIMEOUT=8;Rs.HTTP_ERROR=6;Vc.COMPLETE="complete";Bc.EventType=En;En.OPEN="a";En.CLOSE="b";En.ERROR="c";En.MESSAGE="d";G.prototype.listen=G.prototype.N;F.prototype.listenOnce=F.prototype.O;F.prototype.getLastError=F.prototype.Oa;F.prototype.getLastErrorCode=F.prototype.Ea;F.prototype.getStatus=F.prototype.aa;F.prototype.getResponseJson=F.prototype.Sa;F.prototype.getResponseText=F.prototype.fa;F.prototype.send=F.prototype.da;F.prototype.setWithCredentials=F.prototype.Ka;var mm=function(){return new cs},gm=function(){return Ns()},vi=Rs,ym=Vc,vm=mt,Bo={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},wm=_n,Vn=Bc,Im=F;const $o="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}J.UNAUTHENTICATED=new J(null),J.GOOGLE_CREDENTIALS=new J("google-credentials-uid"),J.FIRST_PARTY=new J("first-party-uid"),J.MOCK_USER=new J("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xt="9.16.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=new Es("@firebase/firestore");function qo(){return ut.logLevel}function y(t,...e){if(ut.logLevel<=R.DEBUG){const n=e.map(Nr);ut.debug(`Firestore (${xt}): ${t}`,...n)}}function Oe(t,...e){if(ut.logLevel<=R.ERROR){const n=e.map(Nr);ut.error(`Firestore (${xt}): ${t}`,...n)}}function Bi(t,...e){if(ut.logLevel<=R.WARN){const n=e.map(Nr);ut.warn(`Firestore (${xt}): ${t}`,...n)}}function Nr(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t="Unexpected state"){const e=`FIRESTORE (${xt}) INTERNAL ASSERTION FAILED: `+t;throw Oe(e),new Error(e)}function M(t,e){t||b()}function k(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class v extends ge{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Em{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(J.UNAUTHENTICATED))}shutdown(){}}class Tm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bm{constructor(e){this.t=e,this.currentUser=J.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Ne;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ne,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ne)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(M(typeof s.accessToken=="string"),new Eu(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return M(e===null||typeof e=="string"),new J(e)}}class _m{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=J.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(M(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Sm{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new _m(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(J.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Am{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class km{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(M(typeof n.token=="string"),this.A=n.token,new Am(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Cm(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function L(t,e){return t<e?-1:t>e?1:0}function At(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new v(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new v(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new v(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new v(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return j.fromMillis(Date.now())}static fromDate(e){return j.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new j(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?L(this.nanoseconds,e.nanoseconds):L(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.timestamp=e}static fromTimestamp(e){return new A(e)}static min(){return new A(new j(0,0))}static max(){return new A(new j(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,n,s){n===void 0?n=0:n>e.length&&b(),s===void 0?s=e.length-n:s>e.length-n&&b(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return cn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof cn?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class x extends cn{construct(e,n,s){return new x(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new v(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new x(n)}static emptyPath(){return new x([])}}const Dm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ee extends cn{construct(e,n,s){return new ee(e,n,s)}static isValidIdentifier(e){return Dm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ee.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ee(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new v(f.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new v(f.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new v(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new v(f.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ee(n)}static emptyPath(){return new ee([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.path=e}static fromPath(e){return new w(x.fromString(e))}static fromName(e){return new w(x.fromString(e).popFirst(5))}static empty(){return new w(x.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&x.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return x.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new w(new x(e.slice()))}}function Nm(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=A.fromTimestamp(s===1e9?new j(n+1,0):new j(n,s));return new Ke(i,w.empty(),e)}function Rm(t){return new Ke(t.readTime,t.key,-1)}class Ke{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ke(A.min(),w.empty(),-1)}static max(){return new Ke(A.max(),w.empty(),-1)}}function Lm(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=w.comparator(t.documentKey,e.documentKey),n!==0?n:L(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(t){if(t.code!==f.FAILED_PRECONDITION||t.message!==Om)throw t;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new p((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):p.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):p.reject(n)}static resolve(e){return new p((n,s)=>{n(e)})}static reject(e){return new p((n,s)=>{s(e)})}static waitFor(e){return new p((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=p.resolve(!1);for(const s of e)n=n.next(i=>i?p.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new p((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===r&&s(o)},l=>i(l))}})}static doWhile(e,n){return new p((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Cn(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Rr.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class un{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new un("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof un&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ut(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function bu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(t){return t==null}function us(t){return t===0&&1/t==-1/0}function xm(t){return typeof t=="number"&&Number.isInteger(t)&&!us(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ie(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new ie(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return L(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ie.EMPTY_BYTE_STRING=new ie("");const Um=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ze(t){if(M(!!t),typeof t=="string"){let e=0;const n=Um.exec(t);if(M(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:B(t.seconds),nanos:B(t.nanos)}}function B(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function kt(t){return typeof t=="string"?ie.fromBase64String(t):ie.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Su(t){const e=t.mapValue.fields.__previous_value__;return _u(e)?Su(e):e}function ln(t){const e=ze(t.mapValue.fields.__local_write_time__.timestampValue);return new j(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function lt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?_u(t)?4:Fm(t)?9007199254740991:10:b()}function Te(t,e){if(t===e)return!0;const n=lt(t);if(n!==lt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ln(t).isEqual(ln(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=ze(s.timestampValue),o=ze(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return kt(s.bytesValue).isEqual(kt(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return B(s.geoPointValue.latitude)===B(i.geoPointValue.latitude)&&B(s.geoPointValue.longitude)===B(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return B(s.integerValue)===B(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=B(s.doubleValue),o=B(i.doubleValue);return r===o?us(r)===us(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return At(t.arrayValue.values||[],e.arrayValue.values||[],Te);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(jo(r)!==jo(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Te(r[a],o[a])))return!1;return!0}(t,e);default:return b()}}function hn(t,e){return(t.values||[]).find(n=>Te(n,e))!==void 0}function Ct(t,e){if(t===e)return 0;const n=lt(t),s=lt(e);if(n!==s)return L(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return L(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=B(i.integerValue||i.doubleValue),a=B(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ho(t.timestampValue,e.timestampValue);case 4:return Ho(ln(t),ln(e));case 5:return L(t.stringValue,e.stringValue);case 6:return function(i,r){const o=kt(i),a=kt(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=L(o[c],a[c]);if(u!==0)return u}return L(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=L(B(i.latitude),B(r.latitude));return o!==0?o:L(B(i.longitude),B(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Ct(o[c],a[c]);if(u)return u}return L(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Bn.mapValue&&r===Bn.mapValue)return 0;if(i===Bn.mapValue)return 1;if(r===Bn.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=L(a[l],u[l]);if(h!==0)return h;const d=Ct(o[a[l]],c[u[l]]);if(d!==0)return d}return L(a.length,u.length)}(t.mapValue,e.mapValue);default:throw b()}}function Ho(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return L(t,e);const n=ze(t),s=ze(e),i=L(n.seconds,s.seconds);return i!==0?i:L(n.nanos,s.nanos)}function Dt(t){return $i(t)}function $i(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=ze(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?kt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,w.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=$i(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${$i(s.fields[a])}`;return r+"}"}(t.mapValue):b();var e,n}function qi(t){return!!t&&"integerValue"in t}function Lr(t){return!!t&&"arrayValue"in t}function Ko(t){return!!t&&"nullValue"in t}function zo(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function jn(t){return!!t&&"mapValue"in t}function Qt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ut(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Qt(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Fm(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,n){this.position=e,this.inclusive=n}}function Go(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=w.comparator(w.fromName(o.referenceValue),n.key):s=Ct(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Wo(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Te(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{}class q extends Au{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Bm(e,n,s):n==="array-contains"?new jm(e,s):n==="in"?new Hm(e,s):n==="not-in"?new Km(e,s):n==="array-contains-any"?new zm(e,s):new q(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new $m(e,s):new qm(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ct(n,this.value)):n!==null&&lt(this.value)===lt(n)&&this.matchesComparison(Ct(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class be extends Au{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new be(e,n)}matches(e){return ku(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function ku(t){return t.op==="and"}function Cu(t){return Vm(t)&&ku(t)}function Vm(t){for(const e of t.filters)if(e instanceof be)return!1;return!0}function ji(t){if(t instanceof q)return t.field.canonicalString()+t.op.toString()+Dt(t.value);if(Cu(t))return t.filters.map(e=>ji(e)).join(",");{const e=t.filters.map(n=>ji(n)).join(",");return`${t.op}(${e})`}}function Du(t,e){return t instanceof q?function(n,s){return s instanceof q&&n.op===s.op&&n.field.isEqual(s.field)&&Te(n.value,s.value)}(t,e):t instanceof be?function(n,s){return s instanceof be&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&Du(r,s.filters[o]),!0):!1}(t,e):void b()}function Nu(t){return t instanceof q?function(e){return`${e.field.canonicalString()} ${e.op} ${Dt(e.value)}`}(t):t instanceof be?function(e){return e.op.toString()+" {"+e.getFilters().map(Nu).join(" ,")+"}"}(t):"Filter"}class Bm extends q{constructor(e,n,s){super(e,n,s),this.key=w.fromName(s.referenceValue)}matches(e){const n=w.comparator(e.key,this.key);return this.matchesComparison(n)}}class $m extends q{constructor(e,n){super(e,"in",n),this.keys=Ru("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class qm extends q{constructor(e,n){super(e,"not-in",n),this.keys=Ru("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ru(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>w.fromName(s.referenceValue))}class jm extends q{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Lr(n)&&hn(n.arrayValue,this.value)}}class Hm extends q{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&hn(this.value.arrayValue,n)}}class Km extends q{constructor(e,n){super(e,"not-in",n)}matches(e){if(hn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!hn(this.value.arrayValue,n)}}class zm extends q{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Lr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>hn(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n="asc"){this.field=e,this.dir=n}}function Gm(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,n){this.comparator=e,this.root=n||W.EMPTY}insert(e,n){return new K(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,W.BLACK,null,null))}remove(e){return new K(this.comparator,this.root.remove(e,this.comparator).copy(null,null,W.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $n(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $n(this.root,e,this.comparator,!1)}getReverseIterator(){return new $n(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $n(this.root,e,this.comparator,!0)}}class $n{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class W{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??W.RED,this.left=i??W.EMPTY,this.right=r??W.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new W(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return W.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return W.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,W.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,W.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}W.EMPTY=null,W.RED=!0,W.BLACK=!1;W.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(t,e,n,s,i){return this}insert(t,e,n){return new W(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.comparator=e,this.data=new K(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qo(this.data.getIterator())}getIteratorFrom(e){return new Qo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof H)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new H(this.comparator);return n.data=e,n}}class Qo{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.fields=e,e.sort(ee.comparator)}static empty(){return new pe([])}unionWith(e){let n=new H(ee.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new pe(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return At(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.value=e}static empty(){return new le({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!jn(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qt(n)}setAll(e){let n=ee.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Qt(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());jn(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Te(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];jn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Ut(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new le(Qt(this.value))}}function Lu(t){const e=[];return Ut(t.fields,(n,s)=>{const i=new ee([n]);if(jn(s)){const r=Lu(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new pe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Z(e,0,A.min(),A.min(),A.min(),le.empty(),0)}static newFoundDocument(e,n,s,i){return new Z(e,1,n,A.min(),s,i,0)}static newNoDocument(e,n){return new Z(e,2,n,A.min(),A.min(),le.empty(),0)}static newUnknownDocument(e,n){return new Z(e,3,n,A.min(),A.min(),le.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(A.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=le.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=le.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=A.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Z&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Z(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function Xo(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Wm(t,e,n,s,i,r,o)}function Or(t){const e=k(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>ji(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Vs(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Dt(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Dt(s)).join(",")),e.ft=n}return e.ft}function Mr(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Gm(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Du(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Wo(t.startAt,e.startAt)&&Wo(t.endAt,e.endAt)}function Hi(t){return w.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function Qm(t,e,n,s,i,r,o,a){return new Bs(t,e,n,s,i,r,o,a)}function Pr(t){return new Bs(t)}function Yo(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Xm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ym(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Jm(t){return t.collectionGroup!==null}function Et(t){const e=k(t);if(e.dt===null){e.dt=[];const n=Ym(e),s=Xm(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Xt(n)),e.dt.push(new Xt(ee.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Xt(ee.keyField(),r))}}}return e.dt}function Me(t){const e=k(t);if(!e._t)if(e.limitType==="F")e._t=Xo(e.path,e.collectionGroup,Et(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Et(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Xt(r.field,o))}const s=e.endAt?new ls(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ls(e.startAt.position,e.startAt.inclusive):null;e._t=Xo(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e._t}function Ki(t,e,n){return new Bs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $s(t,e){return Mr(Me(t),Me(e))&&t.limitType===e.limitType}function Ou(t){return`${Or(Me(t))}|lt:${t.limitType}`}function zi(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Nu(s)).join(", ")}]`),Vs(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Dt(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Dt(s)).join(",")),`Target(${n})`}(Me(t))}; limitType=${t.limitType})`}function xr(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):w.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of Et(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Go(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Et(n),s)||n.endAt&&!function(i,r,o){const a=Go(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Et(n),s))}(t,e)}function Zm(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Mu(t){return(e,n)=>{let s=!1;for(const i of Et(t)){const r=eg(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function eg(t,e,n){const s=t.field.isKeyField()?w.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Ct(a,c):b()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return b()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:us(e)?"-0":e}}function xu(t){return{integerValue:""+t}}function tg(t,e){return xm(e)?xu(e):Pu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(){this._=void 0}}function ng(t,e,n){return t instanceof hs?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof dn?Fu(t,e):t instanceof fn?Vu(t,e):function(s,i){const r=Uu(s,i),o=Jo(r)+Jo(s.gt);return qi(r)&&qi(s.gt)?xu(o):Pu(s.yt,o)}(t,e)}function sg(t,e,n){return t instanceof dn?Fu(t,e):t instanceof fn?Vu(t,e):n}function Uu(t,e){return t instanceof ds?qi(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class hs extends qs{}class dn extends qs{constructor(e){super(),this.elements=e}}function Fu(t,e){const n=Bu(e);for(const s of t.elements)n.some(i=>Te(i,s))||n.push(s);return{arrayValue:{values:n}}}class fn extends qs{constructor(e){super(),this.elements=e}}function Vu(t,e){let n=Bu(e);for(const s of t.elements)n=n.filter(i=>!Te(i,s));return{arrayValue:{values:n}}}class ds extends qs{constructor(e,n){super(),this.yt=e,this.gt=n}}function Jo(t){return B(t.integerValue||t.doubleValue)}function Bu(t){return Lr(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ig(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof dn&&s instanceof dn||n instanceof fn&&s instanceof fn?At(n.elements,s.elements,Te):n instanceof ds&&s instanceof ds?Te(n.gt,s.gt):n instanceof hs&&s instanceof hs}(t.transform,e.transform)}class rg{constructor(e,n){this.version=e,this.transformResults=n}}class Re{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Re}static exists(e){return new Re(void 0,e)}static updateTime(e){return new Re(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hn(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class js{}function $u(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ju(t.key,Re.none()):new Dn(t.key,t.data,Re.none());{const n=t.data,s=le.empty();let i=new H(ee.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new gt(t.key,s,new pe(i.toArray()),Re.none())}}function og(t,e,n){t instanceof Dn?function(s,i,r){const o=s.value.clone(),a=ea(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof gt?function(s,i,r){if(!Hn(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=ea(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(qu(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Yt(t,e,n,s){return t instanceof Dn?function(i,r,o,a){if(!Hn(i.precondition,r))return o;const c=i.value.clone(),u=ta(i.fieldTransforms,a,r);return c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof gt?function(i,r,o,a){if(!Hn(i.precondition,r))return o;const c=ta(i.fieldTransforms,a,r),u=r.data;return u.setAll(qu(i)),u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(i,r,o){return Hn(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function ag(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Uu(s.transform,i||null);r!=null&&(n===null&&(n=le.empty()),n.set(s.field,r))}return n||null}function Zo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&At(n,s,(i,r)=>ig(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Dn extends js{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class gt extends js{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function qu(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function ea(t,e,n){const s=new Map;M(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,sg(o,a,n[i]))}return s}function ta(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,ng(r,o,e))}return s}class ju extends js{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cg extends js{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V,N;function lg(t){switch(t){default:return b();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function Hu(t){if(t===void 0)return Oe("GRPC error has no .code"),f.UNKNOWN;switch(t){case V.OK:return f.OK;case V.CANCELLED:return f.CANCELLED;case V.UNKNOWN:return f.UNKNOWN;case V.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case V.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case V.INTERNAL:return f.INTERNAL;case V.UNAVAILABLE:return f.UNAVAILABLE;case V.UNAUTHENTICATED:return f.UNAUTHENTICATED;case V.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case V.NOT_FOUND:return f.NOT_FOUND;case V.ALREADY_EXISTS:return f.ALREADY_EXISTS;case V.PERMISSION_DENIED:return f.PERMISSION_DENIED;case V.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case V.ABORTED:return f.ABORTED;case V.OUT_OF_RANGE:return f.OUT_OF_RANGE;case V.UNIMPLEMENTED:return f.UNIMPLEMENTED;case V.DATA_LOSS:return f.DATA_LOSS;default:return b()}}(N=V||(V={}))[N.OK=0]="OK",N[N.CANCELLED=1]="CANCELLED",N[N.UNKNOWN=2]="UNKNOWN",N[N.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",N[N.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",N[N.NOT_FOUND=5]="NOT_FOUND",N[N.ALREADY_EXISTS=6]="ALREADY_EXISTS",N[N.PERMISSION_DENIED=7]="PERMISSION_DENIED",N[N.UNAUTHENTICATED=16]="UNAUTHENTICATED",N[N.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",N[N.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",N[N.ABORTED=10]="ABORTED",N[N.OUT_OF_RANGE=11]="OUT_OF_RANGE",N[N.UNIMPLEMENTED=12]="UNIMPLEMENTED",N[N.INTERNAL=13]="INTERNAL",N[N.UNAVAILABLE=14]="UNAVAILABLE",N[N.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ut(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return bu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=new K(w.comparator);function Pe(){return hg}const Ku=new K(w.comparator);function Kt(...t){let e=Ku;for(const n of t)e=e.insert(n.key,n);return e}function zu(t){let e=Ku;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function tt(){return Jt()}function Gu(){return Jt()}function Jt(){return new Ft(t=>t.toString(),(t,e)=>t.isEqual(e))}const dg=new K(w.comparator),fg=new H(w.comparator);function D(...t){let e=fg;for(const n of t)e=e.add(n);return e}const pg=new H(L);function Wu(){return pg}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Nn.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Hs(A.min(),i,Wu(),Pe(),D())}}class Nn{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Nn(s,n,D(),D(),D())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n,s,i){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=i}}class Qu{constructor(e,n){this.targetId=e,this.Et=n}}class Xu{constructor(e,n,s=ie.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class na{constructor(){this.At=0,this.Rt=ia(),this.bt=ie.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=D(),n=D(),s=D();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:b()}}),new Nn(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=ia()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class mg{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Pe(),this.qt=sa(),this.Ut=new H(L)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:b()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,s=e.Et.count,i=this.Yt(n);if(i){const r=i.target;if(Hi(r))if(s===0){const o=new w(r.path);this.Qt(n,o,Z.newNoDocument(o,A.min()))}else M(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&Hi(a.target)){const c=new w(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Z.newNoDocument(c,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=D();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new Hs(e,n,this.Ut,this.Lt,s);return this.Lt=Pe(),this.qt=sa(),this.Ut=new H(L),i}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new na,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new H(L),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||y("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new na),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function sa(){return new K(w.comparator)}function ia(){return new K(w.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),yg=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),vg=(()=>({and:"AND",or:"OR"}))();class wg{constructor(e,n){this.databaseId=e,this.wt=n}}function fs(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Yu(t,e){return t.wt?e.toBase64():e.toUint8Array()}function Ig(t,e){return fs(t,e.toTimestamp())}function ve(t){return M(!!t),A.fromTimestamp(function(e){const n=ze(e);return new j(n.seconds,n.nanos)}(t))}function Ur(t,e){return function(n){return new x(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Ju(t){const e=x.fromString(t);return M(nl(e)),e}function Gi(t,e){return Ur(t.databaseId,e.path)}function wi(t,e){const n=Ju(e);if(n.get(1)!==t.databaseId.projectId)throw new v(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new v(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new w(Zu(n))}function Wi(t,e){return Ur(t.databaseId,e)}function Eg(t){const e=Ju(t);return e.length===4?x.emptyPath():Zu(e)}function Qi(t){return new x(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Zu(t){return M(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ra(t,e,n){return{name:Gi(t,e),fields:n.value.mapValue.fields}}function Tg(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,u){return c.wt?(M(u===void 0||typeof u=="string"),ie.fromBase64String(u||"")):(M(u===void 0||u instanceof Uint8Array),ie.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:Hu(c.code);return new v(u,c.message||"")}(o);n=new Xu(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=wi(t,s.document.name),r=ve(s.document.updateTime),o=s.document.createTime?ve(s.document.createTime):A.min(),a=new le({mapValue:{fields:s.document.fields}}),c=Z.newFoundDocument(i,r,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new Kn(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=wi(t,s.document),r=s.readTime?ve(s.readTime):A.min(),o=Z.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Kn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=wi(t,s.document),r=s.removedTargetIds||[];n=new Kn([],r,i,null)}else{if(!("filter"in e))return b();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new ug(i),o=s.targetId;n=new Qu(o,r)}}return n}function bg(t,e){let n;if(e instanceof Dn)n={update:ra(t,e.key,e.value)};else if(e instanceof ju)n={delete:Gi(t,e.key)};else if(e instanceof gt)n={update:ra(t,e.key,e.data),updateMask:Lg(e.fieldMask)};else{if(!(e instanceof cg))return b();n={verify:Gi(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof hs)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof dn)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof fn)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ds)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw b()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Ig(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:b()}(t,e.precondition)),n}function _g(t,e){return t&&t.length>0?(M(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?ve(s.updateTime):ve(i);return r.isEqual(A.min())&&(r=ve(i)),new rg(r,s.transformResults||[])}(n,e))):[]}function Sg(t,e){return{documents:[Wi(t,e.path)]}}function Ag(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Wi(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Wi(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return tl(be.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:vt(l.field),direction:Dg(l.dir)}}(u))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,u){return c.wt||Vs(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function kg(t){let e=Eg(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){M(s===1);const l=n.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let r=[];n.where&&(r=function(l){const h=el(l);return h instanceof be&&Cu(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Xt(wt(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Vs(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new ls(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new ls(d,h)}(n.endAt)),Qm(e,i,o,r,a,"F",c,u)}function Cg(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return b()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function el(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=wt(e.unaryFilter.field);return q.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=wt(e.unaryFilter.field);return q.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=wt(e.unaryFilter.field);return q.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=wt(e.unaryFilter.field);return q.create(r,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(t):t.fieldFilter!==void 0?function(e){return q.create(wt(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return be.create(e.compositeFilter.filters.map(n=>el(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return b()}}(e.compositeFilter.op))}(t):b()}function Dg(t){return gg[t]}function Ng(t){return yg[t]}function Rg(t){return vg[t]}function vt(t){return{fieldPath:t.canonicalString()}}function wt(t){return ee.fromServerFormat(t.fieldPath)}function tl(t){return t instanceof q?function(e){if(e.op==="=="){if(zo(e.value))return{unaryFilter:{field:vt(e.field),op:"IS_NAN"}};if(Ko(e.value))return{unaryFilter:{field:vt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(zo(e.value))return{unaryFilter:{field:vt(e.field),op:"IS_NOT_NAN"}};if(Ko(e.value))return{unaryFilter:{field:vt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vt(e.field),op:Ng(e.op),value:e.value}}}(t):t instanceof be?function(e){const n=e.getFilters().map(s=>tl(s));return n.length===1?n[0]:{compositeFilter:{op:Rg(e.op),filters:n}}}(t):b()}function Lg(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function nl(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&og(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Yt(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Yt(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Gu();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=$u(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(A.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),D())}isEqual(e){return this.batchId===e.batchId&&At(this.mutations,e.mutations,(n,s)=>Zo(n,s))&&At(this.baseMutations,e.baseMutations,(n,s)=>Zo(n,s))}}class Fr{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){M(e.mutations.length===s.length);let i=dg;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Fr(e,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n,s,i,r=A.min(),o=A.min(),a=ie.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new it(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new it(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new it(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e){this.ie=e}}function xg(t){const e=kg({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ki(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(){this.Je=new Fg}addToCollectionParentIndex(e,n){return this.Je.add(n),p.resolve()}getCollectionParents(e,n){return p.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return p.resolve()}deleteFieldIndex(e,n){return p.resolve()}getDocumentsMatchingTarget(e,n){return p.resolve(null)}getIndexType(e,n){return p.resolve(0)}getFieldIndexes(e,n){return p.resolve([])}getNextCollectionGroupToUpdate(e){return p.resolve(null)}getMinOffset(e,n){return p.resolve(Ke.min())}getMinOffsetFromCollectionGroup(e,n){return p.resolve(Ke.min())}updateCollectionGroup(e,n,s){return p.resolve()}updateIndexEntries(e,n){return p.resolve()}}class Fg{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new H(x.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new H(x.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Nt(0)}static vn(){return new Nt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(){this.changes=new Ft(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Z.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?p.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Yt(s.mutation,i,pe.empty(),j.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,D()).next(()=>s))}getLocalViewOfDocuments(e,n,s=D()){const i=tt();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Kt();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=tt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,D()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Pe();const o=Jt(),a=Jt();return n.forEach((c,u)=>{const l=s.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof gt)?r=r.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Yt(l.mutation,u,l.mutation.getFieldMask(),j.now())):o.set(u.key,pe.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new Bg(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Jt();let i=new K((o,a)=>o-a),r=D();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||pe.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(i.get(a.batchId)||D()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Gu();l.forEach(d=>{if(!r.has(d)){const m=$u(n.get(d),s.get(d));m!==null&&h.set(d,m),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return p.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return w.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Jm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):p.resolve(tt());let a=-1,c=r;return o.next(u=>p.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(l)?p.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,c,u,D())).next(l=>({batchId:a,changes:zu(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new w(n)).next(s=>{let i=Kt();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Kt();return this.indexManager.getCollectionParents(e,i).next(o=>p.forEach(o,a=>{const c=function(u,l){return new Bs(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{r=r.insert(l,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(r=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,Z.newInvalidDocument(u)))});let o=Kt();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&Yt(u.mutation,c,pe.empty(),j.now()),xr(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return p.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:ve(s.createTime)}),p.resolve()}getNamedQuery(e,n){return p.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:xg(s.bundledQuery),readTime:ve(s.readTime)}}(n)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(){this.overlays=new K(w.comparator),this.es=new Map}getOverlay(e,n){return p.resolve(this.overlays.get(n))}getOverlays(e,n){const s=tt();return p.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.oe(e,n,r)}),p.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),p.resolve()}getOverlaysForCollection(e,n,s){const i=tt(),r=n.length+1,o=new w(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return p.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new K((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=r.get(u.largestBatchId);l===null&&(l=tt(),r=r.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=tt(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return p.resolve(a)}oe(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Mg(n,s));let r=this.es.get(n);r===void 0&&(r=D(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(){this.ns=new H(z.ss),this.rs=new H(z.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new z(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new z(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new w(new x([])),s=new z(n,e),i=new z(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new w(new x([])),s=new z(n,e),i=new z(n,e+1);let r=D();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new z(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class z{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return w.comparator(e.key,n.key)||L(e._s,n._s)}static os(e,n){return L(e._s,n._s)||w.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new H(z.ss)}checkEmpty(e){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Og(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new z(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(e,n){return p.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return p.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new z(n,0),i=new z(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),p.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new H(L);return n.forEach(i=>{const r=new z(i,0),o=new z(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),p.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;w.isDocumentKey(r)||(r=r.child(""));const o=new z(new w(r),0);let a=new H(L);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c._s)),!0)},o),p.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){M(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return p.forEach(n.mutations,i=>{const r=new z(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new z(n,0),i=this.gs.firstAfterOrEqual(s);return p.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,p.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e){this.Es=e,this.docs=new K(w.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return p.resolve(s?s.document.mutableCopy():Z.newInvalidDocument(n))}getEntries(e,n){let s=Pe();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Z.newInvalidDocument(i))}),p.resolve(s)}getAllFromCollection(e,n,s){let i=Pe();const r=new w(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Lm(Rm(c),s)<=0||(i=i.insert(c.key,c.mutableCopy()))}return p.resolve(i)}getAllFromCollectionGroup(e,n,s,i){b()}As(e,n){return p.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new zg(this)}getSize(e){return p.resolve(this.size)}}class zg extends Vg{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),p.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e){this.persistence=e,this.Rs=new Ft(n=>Or(n),Mr),this.lastRemoteSnapshotVersion=A.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Vr,this.targetCount=0,this.vs=Nt.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),p.resolve()}getLastRemoteSnapshotVersion(e){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return p.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),p.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Nt(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,p.resolve()}updateTargetData(e,n){return this.Dn(n),p.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),p.waitFor(r).next(()=>i)}getTargetCount(e){return p.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return p.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),p.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),p.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),p.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return p.resolve(s)}containsKey(e,n){return p.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Rr(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Gg(this),this.indexManager=new Ug,this.remoteDocumentCache=function(s){return new Kg(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new Pg(n),this.Ns=new qg(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jg,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new Hg(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){y("MemoryPersistence","Starting transaction:",e);const i=new Qg(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,n){return p.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class Qg extends Mm{constructor(e){super(),this.currentSequenceNumber=e}}class Br{constructor(e){this.persistence=e,this.Fs=new Vr,this.$s=null}static Bs(e){return new Br(e)}get Ls(){if(this.$s)return this.$s;throw b()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),p.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),p.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),p.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Ls,s=>{const i=w.fromPath(s);return this.qs(e,i).next(r=>{r||n.removeEntry(i,A.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return p.or([()=>p.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=D(),i=D();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new $r(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Oi(e,n,i,s)).next(r=>r||this.Mi(e,n))}ki(e,n){if(Yo(n))return p.resolve(null);let s=Me(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ki(n,null,"F"),s=Me(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=D(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(e,Ki(n,null,"F")):this.Bi(e,u,n,c)}))})))}Oi(e,n,s,i){return Yo(n)||i.isEqual(A.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(e,n):(qo()<=R.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),zi(n)),this.Bi(e,o,n,Nm(i,-1)))})}Fi(e,n){let s=new H(Mu(e));return n.forEach((i,r)=>{xr(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,n){return qo()<=R.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",zi(n)),this.Ni.getDocumentsMatchingQuery(e,n,Ke.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new K(L),this.Ui=new Ft(r=>Or(r),Mr),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $g(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function Jg(t,e,n,s){return new Yg(t,e,n,s)}async function sl(t,e){const n=k(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=D();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of r){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function Zg(t,e){const n=k(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=p.resolve();return h.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(E=>{const C=c.docVersions.get(m);M(C!==null),E.version.compareTo(C)<0&&(l.applyToRemoteDocument(E,c),E.isValidDocument()&&(E.setReadTime(c.commitVersion),u.addEntry(E)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=D();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function il(t){const e=k(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function ey(t,e){const n=k(t),s=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(r,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(r,l.addedDocuments,h)));let m=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(ie.EMPTY_BYTE_STRING,A.min()).withLastLimboFreeSnapshotVersion(A.min()):l.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(l.resumeToken,s)),i=i.insert(h,m),function(E,C,O){return E.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(d,m,l)&&a.push(n.Cs.updateTargetData(r,m))});let c=Pe(),u=D();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,l))}),a.push(ty(r,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!s.isEqual(A.min())){const l=n.Cs.getLastRemoteSnapshotVersion(r).next(h=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(l)}return p.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(n.qi=i,r))}function ty(t,e,n){let s=D(),i=D();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Pe();return n.forEach((a,c)=>{const u=r.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(A.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:i}})}function ny(t,e){const n=k(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function sy(t,e){const n=k(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,p.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new it(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.qi.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function Xi(t,e,n){const s=k(t),i=s.qi.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Cn(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(i.target)}function oa(t,e,n){const s=k(t);let i=A.min(),r=D();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=k(a),h=l.Ui.get(u);return h!==void 0?p.resolve(l.qi.get(h)):l.Cs.getTargetData(c,u)}(s,o,Me(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:A.min(),n?r:D())).next(a=>(iy(s,Zm(e),a),{documents:a,Hi:r})))}function iy(t,e,n){let s=t.Ki.get(e)||A.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class aa{constructor(){this.activeTargetIds=Wu()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ry{constructor(){this.Lr=new aa,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new aa,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,i,r){const o=this.ho(e,n);y("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(c=>(y("RestConnection","Received: ",c),c),c=>{throw Bi("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,i,r,o){return this.ao(e,n,s,i,r)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+xt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,n){const s=ay[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,i){return new Promise((r,o)=>{const a=new Im;a.setWithCredentials(!0),a.listenOnce(ym.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case vi.NO_ERROR:const u=a.getResponseJson();y("Connection","XHR received:",JSON.stringify(u)),r(u);break;case vi.TIMEOUT:y("Connection",'RPC "'+e+'" timed out'),o(new v(f.DEADLINE_EXCEEDED,"Request time out"));break;case vi.HTTP_ERROR:const l=a.getStatus();if(y("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const m=function(E){const C=E.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(C)>=0?C:f.UNKNOWN}(d.status);o(new v(m,d.message))}else o(new v(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new v(f.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{y("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}wo(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=mm(),o=gm(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new wm({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=i.join("");y("Connection","Creating WebChannel: "+c,a);const u=r.createWebChannel(c,a);let l=!1,h=!1;const d=new cy({Hr:E=>{h?y("Connection","Not sending because WebChannel is closed:",E):(l||(y("Connection","Opening WebChannel transport."),u.open(),l=!0),y("Connection","WebChannel sending:",E),u.send(E))},Jr:()=>u.close()}),m=(E,C,O)=>{E.listen(C,Y=>{try{O(Y)}catch($){setTimeout(()=>{throw $},0)}})};return m(u,Vn.EventType.OPEN,()=>{h||y("Connection","WebChannel transport opened.")}),m(u,Vn.EventType.CLOSE,()=>{h||(h=!0,y("Connection","WebChannel transport closed"),d.io())}),m(u,Vn.EventType.ERROR,E=>{h||(h=!0,Bi("Connection","WebChannel transport errored:",E),d.io(new v(f.UNAVAILABLE,"The operation could not be completed")))}),m(u,Vn.EventType.MESSAGE,E=>{var C;if(!h){const O=E.data[0];M(!!O);const Y=O,$=Y.error||((C=Y[0])===null||C===void 0?void 0:C.error);if($){y("Connection","WebChannel received error:",$);const Ue=$.status;let Se=function(Bt){const $t=V[Bt];if($t!==void 0)return Hu($t)}(Ue),Xe=$.message;Se===void 0&&(Se=f.INTERNAL,Xe="Unknown error status: "+Ue+" with message "+$.message),h=!0,d.io(new v(Se,Xe)),u.close()}else y("Connection","WebChannel received:",O),d.ro(O)}}),m(o,vm.STAT_EVENT,E=>{E.stat===Bo.PROXY?y("Connection","Detected buffering proxy"):E.stat===Bo.NOPROXY&&y("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Ii(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(t){return new wg(t,!0)}class rl{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,n,s,i,r,o,a,c){this.Hs=e,this.vo=s,this.Vo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new rl(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(Oe(n.toString()),Oe("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===n&&this.Go(s,i)},s=>{e(()=>{const i=new v(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ly extends ol{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.yt=r}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=Tg(this.yt,e),s=function(i){if(!("targetChange"in i))return A.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?A.min():r.readTime?ve(r.readTime):A.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Qi(this.yt),n.addTarget=function(i,r){let o;const a=r.target;return o=Hi(a)?{documents:Sg(i,a)}:{query:Ag(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Yu(i,r.resumeToken):r.snapshotVersion.compareTo(A.min())>0&&(o.readTime=fs(i,r.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=Cg(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Qi(this.yt),n.removeTarget=e,this.Bo(n)}}class hy extends ol{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.yt=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(M(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=_g(e.writeResults,e.commitTime),s=ve(e.commitTime);return this.listener.Zo(s,n)}return M(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Qi(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>bg(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=i,this.nu=!1}su(){if(this.nu)throw new v(f.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.ao(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new v(f.UNKNOWN,i.toString())})}_o(e,n,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new v(f.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class fy{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Oe(n),this.ou=!1):y("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{yt(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=k(a);c._u.add(4),await Rn(c),c.gu.set("Unknown"),c._u.delete(4),await zs(c)}(this))})}),this.gu=new fy(s,i)}}async function zs(t){if(yt(t))for(const e of t.wu)await e(!0)}async function Rn(t){for(const e of t.wu)await e(!1)}function al(t,e){const n=k(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Hr(n)?jr(n):Vt(n).ko()&&qr(n,e))}function cl(t,e){const n=k(t),s=Vt(n);n.du.delete(e),s.ko()&&ul(n,e),n.du.size===0&&(s.ko()?s.Fo():yt(n)&&n.gu.set("Unknown"))}function qr(t,e){t.yu.Ot(e.targetId),Vt(t).zo(e)}function ul(t,e){t.yu.Ot(e),Vt(t).Ho(e)}function jr(t){t.yu=new mg({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Vt(t).start(),t.gu.uu()}function Hr(t){return yt(t)&&!Vt(t).No()&&t.du.size>0}function yt(t){return k(t)._u.size===0}function ll(t){t.yu=void 0}async function my(t){t.du.forEach((e,n)=>{qr(t,e)})}async function gy(t,e){ll(t),Hr(t)?(t.gu.hu(e),jr(t)):t.gu.set("Unknown")}async function yy(t,e,n){if(t.gu.set("Online"),e instanceof Xu&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ps(t,s)}else if(e instanceof Kn?t.yu.Kt(e):e instanceof Qu?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(A.min()))try{const s=await il(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.yu.Zt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(c);u&&i.du.set(c,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.du.get(a);if(!c)return;i.du.set(a,c.withResumeToken(ie.EMPTY_BYTE_STRING,c.snapshotVersion)),ul(i,a);const u=new it(c.target,a,1,c.sequenceNumber);qr(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){y("RemoteStore","Failed to raise snapshot:",s),await ps(t,s)}}async function ps(t,e,n){if(!Cn(e))throw e;t._u.add(1),await Rn(t),t.gu.set("Offline"),n||(n=()=>il(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await zs(t)})}function hl(t,e){return e().catch(n=>ps(t,n,e))}async function Gs(t){const e=k(t),n=Ge(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;vy(e);)try{const i=await ny(e.localStore,s);if(i===null){e.fu.length===0&&n.Fo();break}s=i.batchId,wy(e,i)}catch(i){await ps(e,i)}dl(e)&&fl(e)}function vy(t){return yt(t)&&t.fu.length<10}function wy(t,e){t.fu.push(e);const n=Ge(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function dl(t){return yt(t)&&!Ge(t).No()&&t.fu.length>0}function fl(t){Ge(t).start()}async function Iy(t){Ge(t).eu()}async function Ey(t){const e=Ge(t);for(const n of t.fu)e.Xo(n.mutations)}async function Ty(t,e,n){const s=t.fu.shift(),i=Fr.from(s,e,n);await hl(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Gs(t)}async function by(t,e){e&&Ge(t).Yo&&await async function(n,s){if(i=s.code,lg(i)&&i!==f.ABORTED){const r=n.fu.shift();Ge(n).Mo(),await hl(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Gs(n)}var i}(t,e),dl(t)&&fl(t)}async function ua(t,e){const n=k(t);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const s=yt(n);n._u.add(3),await Rn(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await zs(n)}async function _y(t,e){const n=k(t);e?(n._u.delete(2),await zs(n)):e||(n._u.add(2),await Rn(n),n.gu.set("Unknown"))}function Vt(t){return t.pu||(t.pu=function(e,n,s){const i=k(e);return i.su(),new ly(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(t.datastore,t.asyncQueue,{Yr:my.bind(null,t),Zr:gy.bind(null,t),Wo:yy.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Hr(t)?jr(t):t.gu.set("Unknown")):(await t.pu.stop(),ll(t))})),t.pu}function Ge(t){return t.Iu||(t.Iu=function(e,n,s){const i=k(e);return i.su(),new hy(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(t.datastore,t.asyncQueue,{Yr:Iy.bind(null,t),Zr:by.bind(null,t),tu:Ey.bind(null,t),Zo:Ty.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Gs(t)):(await t.Iu.stop(),t.fu.length>0&&(y("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Ne,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Kr(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new v(f.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zr(t,e){if(Oe("AsyncQueue",`${e}: ${t}`),Cn(t))return new v(f.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.comparator=e?(n,s)=>e(n,s)||w.comparator(n.key,s.key):(n,s)=>w.comparator(n.key,s.key),this.keyedMap=Kt(),this.sortedSet=new K(this.comparator)}static emptySet(e){return new Tt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Tt)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Tt;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(){this.Tu=new K(w.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):b():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Rt{constructor(e,n,s,i,r,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Rt(e,n,Tt.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$s(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(){this.Au=void 0,this.listeners=[]}}class Ay{constructor(){this.queries=new Ft(e=>Ou(e),$s),this.onlineState="Unknown",this.Ru=new Set}}async function pl(t,e){const n=k(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Sy),i)try{r.Au=await n.onListen(s)}catch(o){const a=zr(o,`Initialization of query '${zi(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.bu(n.onlineState),r.Au&&e.Pu(r.Au)&&Gr(n)}async function ml(t,e){const n=k(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function ky(t,e){const n=k(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Pu(i)&&(s=!0);o.Au=i}}s&&Gr(n)}function Cy(t,e,n){const s=k(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Gr(t){t.Ru.forEach(e=>{e.next()})}class gl{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Rt(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Rt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e){this.key=e}}class vl{constructor(e){this.key=e}}class Dy{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=D(),this.mutatedKeys=D(),this.Gu=Mu(e),this.Qu=new Tt(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new la,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),m=xr(this.query,h)?h:null,E=!!d&&this.mutatedKeys.has(d.key),C=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let O=!1;d&&m?d.data.isEqual(m.data)?E!==C&&(s.track({type:3,doc:m}),O=!0):this.Hu(d,m)||(s.track({type:2,doc:m}),O=!0,(c&&this.Gu(m,c)>0||u&&this.Gu(m,u)<0)&&(a=!0)):!d&&m?(s.track({type:0,doc:m}),O=!0):d&&!m&&(s.track({type:1,doc:d}),O=!0,(c||u)&&(a=!0)),O&&(m?(o=o.add(m),r=C?r.add(l):r.delete(l)):(o=o.delete(l),r=r.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),r=r.delete(l.key),s.track({type:1,doc:l})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Eu();r.sort((u,l)=>function(h,d){const m=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return m(h)-m(d)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,r.length!==0||c?{snapshot:new Rt(this.query,e.Qu,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new la,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=D(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new vl(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new yl(s))}),n}tc(e){this.qu=e.Hi,this.Ku=D();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Rt.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class Ny{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Ry{constructor(e){this.key=e,this.nc=!1}}class Ly{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Ft(a=>Ou(a),$s),this.rc=new Map,this.oc=new Set,this.uc=new K(w.comparator),this.cc=new Map,this.ac=new Vr,this.hc={},this.lc=new Map,this.fc=Nt.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function Oy(t,e){const n=jy(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await sy(n.localStore,Me(e));n.isPrimaryClient&&al(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await My(n,e,s,a==="current",o.resumeToken)}return i}async function My(t,e,n,s,i){t._c=(h,d,m)=>async function(E,C,O,Y){let $=C.view.Wu(O);$.$i&&($=await oa(E.localStore,C.query,!1).then(({documents:Xe})=>C.view.Wu(Xe,$)));const Ue=Y&&Y.targetChanges.get(C.targetId),Se=C.view.applyChanges($,E.isPrimaryClient,Ue);return da(E,C.targetId,Se.Xu),Se.snapshot}(t,h,d,m);const r=await oa(t.localStore,e,!0),o=new Dy(e,r.Hi),a=o.Wu(r.documents),c=Nn.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,c);da(t,n,u.Xu);const l=new Ny(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function Py(t,e){const n=k(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!$s(r,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Xi(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),cl(n.remoteStore,s.targetId),Yi(n,s.targetId)}).catch(kn)):(Yi(n,s.targetId),await Xi(n.localStore,s.targetId,!0))}async function xy(t,e,n){const s=Hy(t);try{const i=await function(r,o){const a=k(r),c=j.now(),u=o.reduce((d,m)=>d.add(m.key),D());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=Pe(),E=D();return a.Gi.getEntries(d,u).next(C=>{m=C,m.forEach((O,Y)=>{Y.isValidDocument()||(E=E.add(O))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(C=>{l=C;const O=[];for(const Y of o){const $=ag(Y,l.get(Y.key).overlayedDocument);$!=null&&O.push(new gt(Y.key,$,Lu($.value.mapValue),Re.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,O,o)}).next(C=>{h=C;const O=C.applyToLocalDocumentSet(l,E);return a.documentOverlayCache.saveOverlays(d,C.batchId,O)})}).then(()=>({batchId:h.batchId,changes:zu(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.hc[r.currentUser.toKey()];c||(c=new K(L)),c=c.insert(o,a),r.hc[r.currentUser.toKey()]=c}(s,i.batchId,n),await Ln(s,i.changes),await Gs(s.remoteStore)}catch(i){const r=zr(i,"Failed to persist write");n.reject(r)}}async function wl(t,e){const n=k(t);try{const s=await ey(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(M(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?M(o.nc):i.removedDocuments.size>0&&(M(o.nc),o.nc=!1))}),await Ln(n,s,e)}catch(s){await kn(s)}}function ha(t,e,n){const s=k(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=k(r);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&Gr(a)}(s.eventManager,e),i.length&&s.sc.Wo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Uy(t,e,n){const s=k(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new K(w.comparator);o=o.insert(r,Z.newNoDocument(r,A.min()));const a=D().add(r),c=new Hs(A.min(),new Map,new H(L),o,a);await wl(s,c),s.uc=s.uc.remove(r),s.cc.delete(e),Wr(s)}else await Xi(s.localStore,e,!1).then(()=>Yi(s,e,n)).catch(kn)}async function Fy(t,e){const n=k(t),s=e.batch.batchId;try{const i=await Zg(n.localStore,e);El(n,s,null),Il(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ln(n,i)}catch(i){await kn(i)}}async function Vy(t,e,n){const s=k(t);try{const i=await function(r,o){const a=k(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(M(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);El(s,e,n),Il(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ln(s,i)}catch(i){await kn(i)}}function Il(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function El(t,e,n){const s=k(t);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function Yi(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||Tl(t,s)})}function Tl(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(cl(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Wr(t))}function da(t,e,n){for(const s of n)s instanceof yl?(t.ac.addReference(s.key,e),By(t,s)):s instanceof vl?(y("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Tl(t,s.key)):b()}function By(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(y("SyncEngine","New document in limbo: "+n),t.oc.add(s),Wr(t))}function Wr(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new w(x.fromString(e)),s=t.fc.next();t.cc.set(s,new Ry(n)),t.uc=t.uc.insert(n,s),al(t.remoteStore,new it(Me(Pr(n.path)),s,2,Rr.at))}}async function Ln(t,e,n){const s=k(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=$r.Ci(c.targetId,u);r.push(l)}}))}),await Promise.all(o),s.sc.Wo(i),await async function(a,c){const u=k(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>p.forEach(c,h=>p.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>p.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Cn(l))throw l;y("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.qi.get(h),m=d.snapshotVersion,E=d.withLastLimboFreeSnapshotVersion(m);u.qi=u.qi.insert(h,E)}}}(s.localStore,r))}async function $y(t,e){const n=k(t);if(!n.currentUser.isEqual(e)){y("SyncEngine","User change. New user:",e.toKey());const s=await sl(n.localStore,e);n.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new v(f.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ln(n,s.ji)}}function qy(t,e){const n=k(t),s=n.cc.get(e);if(s&&s.nc)return D().add(s.key);{let i=D();const r=n.rc.get(e);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function jy(t){const e=k(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=wl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Uy.bind(null,e),e.sc.Wo=ky.bind(null,e.eventManager),e.sc.wc=Cy.bind(null,e.eventManager),e}function Hy(t){const e=k(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Fy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Vy.bind(null,e),e}class Ky{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Ks(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return Jg(this.persistence,new Xg,e.initialUser,this.yt)}yc(e){return new Wg(Br.Bs,this.yt)}gc(e){return new ry}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class zy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ha(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=$y.bind(null,this.syncEngine),await _y(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ay}createDatastore(e){const n=Ks(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new uy(i));var i;return function(r,o,a,c){return new dy(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>ha(this.syncEngine,a,0),o=ca.C()?new ca:new oy,new py(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,u){const l=new Ly(s,i,r,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=k(e);y("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Rn(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(t,e,n){if(!n)throw new v(f.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Gy(t,e,n,s){if(e===!0&&s===!0)throw new v(f.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fa(t){if(!w.isDocumentKey(t))throw new v(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function pa(t){if(w.isDocumentKey(t))throw new v(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qr(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":b()}function ht(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new v(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qr(t);throw new v(f.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=new Map;class ga{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new v(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new v(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Gy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ga({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new v(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new v(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ga(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Em;switch(n.type){case"gapi":const s=n.client;return new Sm(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new v(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ma.get(e);n&&(y("ComponentProvider","Removing Datastore"),ma.delete(e),n.terminate())}(this),Promise.resolve()}}function Wy(t,e,n,s={}){var i;const r=(t=ht(t,Ws))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Bi("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=J.MOCK_USER;else{o=Oh(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new v(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new J(c)}t._authCredentials=new Tm(new Eu(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new He(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ae(this.firestore,e,this._key)}}class Qs{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Qs(this.firestore,e,this._query)}}class He extends Qs{constructor(e,n,s){super(e,n,Pr(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ae(this.firestore,null,new w(e))}withConverter(e){return new He(this.firestore,e,this._path)}}function Qy(t,e,...n){if(t=ce(t),bl("collection","path",e),t instanceof Ws){const s=x.fromString(e,...n);return pa(s),new He(t,null,s)}{if(!(t instanceof ae||t instanceof He))throw new v(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(x.fromString(e,...n));return pa(s),new He(t.firestore,null,s)}}function Ji(t,e,...n){if(t=ce(t),arguments.length===1&&(e=Tu.R()),bl("doc","path",e),t instanceof Ws){const s=x.fromString(e,...n);return fa(s),new ae(t,null,new w(s))}{if(!(t instanceof ae||t instanceof He))throw new v(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(x.fromString(e,...n));return fa(s),new ae(t.firestore,t instanceof He?t.converter:null,new w(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Oe("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=J.UNAUTHENTICATED,this.clientId=Tu.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{y("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(y("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ne;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=zr(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Yy(t,e){t.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await sl(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Jy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Zy(t);y("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>ua(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>ua(e.remoteStore,r)),t.onlineComponents=e}async function Zy(t){return t.offlineComponents||(y("FirestoreClient","Using default OfflineComponentProvider"),await Yy(t,new Ky)),t.offlineComponents}async function Sl(t){return t.onlineComponents||(y("FirestoreClient","Using default OnlineComponentProvider"),await Jy(t,new zy)),t.onlineComponents}function ev(t){return Sl(t).then(e=>e.syncEngine)}async function Al(t){const e=await Sl(t),n=e.eventManager;return n.onListen=Oy.bind(null,e.syncEngine),n.onUnlisten=Py.bind(null,e.syncEngine),n}function tv(t,e,n={}){const s=new Ne;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const u=new _l({next:h=>{r.enqueueAndForget(()=>ml(i,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new v(f.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new v(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new gl(Pr(o.path),u,{includeMetadataChanges:!0,Nu:!0});return pl(i,l)}(await Al(t),t.asyncQueue,e,n,s)),s.promise}function nv(t,e,n={}){const s=new Ne;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const u=new _l({next:h=>{r.enqueueAndForget(()=>ml(i,l)),h.fromCache&&a.source==="server"?c.reject(new v(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new gl(o,u,{includeMetadataChanges:!0,Nu:!0});return pl(i,l)}(await Al(t),t.asyncQueue,e,n,s)),s.promise}class sv{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new rl(this,"async_queue_retry"),this.Wc=()=>{const n=Ii();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Ii();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Ii();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Ne;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Cn(e))throw e;y("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Oe("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Kr.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.Uc.push(i),i}zc(){this.Kc&&b()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class Xs extends Ws{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new sv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Cl(this),this._firestoreClient.terminate()}}function kl(t,e){const n=typeof t=="object"?t:ir(),s=typeof t=="string"?t:e||"(default)",i=pt(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Nh("firestore");r&&Wy(i,...r)}return i}function Xr(t){return t._firestoreClient||Cl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Cl(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new Pm(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Xy(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Lt(ie.fromBase64String(e))}catch(n){throw new v(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Lt(ie.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new v(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new v(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new v(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return L(this._lat,e._lat)||L(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=/^__.*__$/;class rv{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new gt(e,this.data,this.fieldMask,n,this.fieldTransforms):new Dn(e,this.data,n,this.fieldTransforms)}}function Nl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class Zr{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Zr(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return ms(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Nl(this.sa)&&iv.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class ov{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||Ks(e)}da(e,n,s,i=!1){return new Zr({sa:e,methodName:n,fa:s,path:ee.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function av(t){const e=t._freezeSettings(),n=Ks(t._databaseId);return new ov(t._databaseId,!!e.ignoreUndefinedProperties,n)}function cv(t,e,n,s,i,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,i);Ml("Data must be an object, but it was:",o,s);const a=Ll(s,o);let c,u;if(r.merge)c=new pe(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const l=[];for(const h of r.mergeFields){const d=uv(e,h,n);if(!o.contains(d))throw new v(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);hv(l,d)||l.push(d)}c=new pe(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new rv(new le(a),c,u)}function Rl(t,e){if(Ol(t=ce(t)))return Ml("Unsupported field value:",e,t),Ll(t,e);if(t instanceof Dl)return function(n,s){if(!Nl(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Rl(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=ce(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return tg(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=j.fromDate(n);return{timestampValue:fs(s.yt,i)}}if(n instanceof j){const i=new j(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:fs(s.yt,i)}}if(n instanceof Jr)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Lt)return{bytesValue:Yu(s.yt,n._byteString)};if(n instanceof ae){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ur(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Qr(n)}`)}(t,e)}function Ll(t,e){const n={};return bu(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ut(t,(s,i)=>{const r=Rl(i,e.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Ol(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof j||t instanceof Jr||t instanceof Lt||t instanceof ae||t instanceof Dl)}function Ml(t,e,n){if(!Ol(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Qr(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function uv(t,e,n){if((e=ce(e))instanceof Yr)return e._internalPath;if(typeof e=="string")return Pl(t,e);throw ms("Field path arguments must be of type string or ",t,!1,void 0,n)}const lv=new RegExp("[~\\*/\\[\\]]");function Pl(t,e,n){if(e.search(lv)>=0)throw ms(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Yr(...e.split("."))._internalPath}catch{throw ms(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ms(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new v(f.INVALID_ARGUMENT,a+t+c)}function hv(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ul("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class dv extends xl{data(){return super.data()}}function Ul(t,e){return typeof e=="string"?Pl(t,e):e instanceof Yr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new v(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pv{convertValue(e,n="none"){switch(lt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return B(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(kt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw b()}}convertObject(e,n){const s={};return Ut(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Jr(B(e.latitude),B(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Su(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ln(e));default:return null}}convertTimestamp(e){const n=ze(e);return new j(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=x.fromString(e);M(nl(s));const i=new un(s.get(1),s.get(3)),r=new w(s.popFirst(5));return i.isEqual(n)||Oe(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Fl extends xl{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Ul("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class zn extends Fl{data(e={}){return super.data(e)}}class gv{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new zt(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new zn(this._firestore,this._userDataWriter,s.key,s,new zt(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new v(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new zn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new zt(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new zn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new zt(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:yv(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function yv(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(t){t=ht(t,ae);const e=ht(t.firestore,Xs);return tv(Xr(e),t._key).then(n=>Ev(e,t,n))}class Bl extends pv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ae(this.firestore,null,n)}}function vv(t){t=ht(t,Qs);const e=ht(t.firestore,Xs),n=Xr(e),s=new Bl(e);return fv(t._query),nv(n,t._query).then(i=>new gv(e,s,t,i))}function wv(t,e,n){t=ht(t,ae);const s=ht(t.firestore,Xs),i=mv(t.converter,e,n);return Iv(s,[cv(av(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Re.none())])}function Iv(t,e){return function(n,s){const i=new Ne;return n.asyncQueue.enqueueAndForget(async()=>xy(await ev(n),s,i)),i.promise}(Xr(t),e)}function Ev(t,e,n){const s=n.docs.get(e._key),i=new Bl(t);return new Fl(t,i,e._key,s,new zt(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){xt=n})(yn),Ee(new me("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Xs(new bm(n.getProvider("auth-internal")),new km(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new v(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new un(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),de($o,"3.8.1",t),de($o,"3.8.1","esm2017")})();const $l={apiKey:"AIzaSyC5iFCKYQ9hq5J4es6mnov_PzXGFwJ8o4I",authDomain:"rsclone-97ff3.firebaseapp.com",projectId:"rsclone-97ff3",storageBucket:"rsclone-97ff3.appspot.com",messagingSenderId:"178694911715",appId:"1:178694911715:web:7b4172d67664448f8877d6",measurementId:"G-RF1XX29RQ3"},ql=sr($l),gs=kl(ql);mp(ql);class Tv{constructor(){T(this,"textStartX");T(this,"textStartY");T(this,"charStartX");T(this,"charStartY");T(this,"width");T(this,"height");T(this,"fieldSquareLength");T(this,"fieldStartX");T(this,"ceilsNum");T(this,"enteredLevel");T(this,"auth");T(this,"fieldMatrix");T(this,"level");T(this,"charSpeed");T(this,"enemySpeed");T(this,"curLvlEnemies");T(this,"enemyCounter");T(this,"curLvlTimer");T(this,"curTimer");T(this,"bombSpeed");T(this,"activeBombs");T(this,"lives");T(this,"curLvlScore");T(this,"score");T(this,"buttons");T(this,"_isMuted");T(this,"_volume");T(this,"uid");T(this,"userName");T(this,"gameOver");T(this,"superBombActive");T(this,"shieldActive");T(this,"berserkActive");T(this,"maxBombs");T(this,"bombIsPlanting");T(this,"highScore");if(this.width=window.innerWidth,this.height=window.innerHeight,this.fieldSquareLength=this.height/this.ceilsNum,this.fieldStartX=this.width/2-this.height/2,this.level=1,this.ceilsNum=11+3*Math.floor((this.level-1)/3),this.enteredLevel=1,this.charSpeed=160,this.curLvlEnemies=10,this.enemyCounter=0,this.bombSpeed=1600,this.curLvlScore=0,this.highScore=0,this.curLvlTimer=120,this.score=0,this.curTimer=this.curLvlTimer,this.fieldMatrix=void 0,this.enemySpeed=80,this.lives=3,this._isMuted=!1,this._volume=.5,this.buttons={arrowUp:"UP",arrowDown:"DOWN",arrowLeft:"LEFT",arrowRight:"RIGHT",bombSet:"SPACE",bombRemove:"SHIFT",start:"ENTER"},this.activeBombs=[],this.gameOver=!1,this.maxBombs=1,this.bombIsPlanting=!1,this.superBombActive=!1,this.shieldActive=!1,this.berserkActive=!1,this.berserkActive=!1,this.auth="authorization",localStorage.getItem("uid")){const e=localStorage.getItem("uid");this.uid=e||""}if(localStorage.getItem("userName")){const e=localStorage.getItem("userName");this.userName=e||""}}async saveToBd(){let e=!0;Object.entries(this).forEach(n=>{n[1]===void 0&&(e=!1)}),e&&await wv(Ji(gs,"users",this.uid),{ceilsNum:this.ceilsNum,lives:this.lives,uid:this.uid,userName:this.userName,score:this.curLvlScore+this.score,highScore:this.highScore,isMuted:this.isMuted,volume:this.volume,buttons:this.buttons,fieldMatrix:JSON.stringify(this.fieldMatrix),bombIsPlanting:this.bombIsPlanting,maxBombs:this.maxBombs,activeBombs:this.activeBombs,level:this.level,enemySpeed:this.enemySpeed,curTimer:this.curTimer,shieldActive:this.shieldActive,superBombActive:this.superBombActive,curLvlTimer:this.curLvlTimer,curLvlScore:this.curLvlScore,bombSpeed:this.bombSpeed,enemyCounter:this.enemyCounter,curLvlEnemies:this.curLvlEnemies,charSpeed:this.charSpeed,gameOver:this.gameOver,berserkActive:this.berserkActive}).catch(()=>{I.saveToBd()})}async takeFromBD(){const e=Ji(gs,"users",this.uid),n=await Vl(e);if(n.exists()){const s=n.data();Object.assign(this,s),this.fieldMatrix=JSON.parse(s.fieldMatrix)}return n.exists()}resetGame(){this.ceilsNum=11+3*Math.floor((I.level-1)/3),this.score=0,this.curLvlScore=0,this.lives=3,this.level=Number(this.enteredLevel),this.curLvlEnemies=this.level+2,this.enemyCounter=0,this.bombSpeed=this.bombSpeed<1e3?1e3:2e3-this.level*100,this.enemySpeed=this.enemySpeed>200?200:70+this.level*10,this.curLvlTimer=110+this.level*20,this.shieldActive=!1,this.berserkActive=!1,this.charSpeed=160,this.bombIsPlanting=!1,this.superBombActive=!1,this.berserkActive=!1,this.maxBombs=1,this.curTimer=this.curLvlTimer,this.activeBombs=[],this.fieldMatrix=void 0,this.fieldSquareLength=this.height/this.ceilsNum,this.charStartX=this.fieldStartX+1.5*this.fieldSquareLength,this.charStartY=this.height-1.5*this.fieldSquareLength,this.textStartX=this.fieldStartX+.5*this.fieldSquareLength,this.textStartY=.3*this.fieldSquareLength}nextLvl(){this.score+=this.curLvlScore,this.curLvlScore=0,this.curLvlEnemies++,this.bombSpeed>1e3&&(this.bombSpeed-=100),this.enemySpeed<200&&(this.enemySpeed+=20),this.level%2===0&&(this.charSpeed+=5),this.curLvlTimer+=20,this.curTimer=this.curLvlTimer,this.activeBombs=[],this.level===1&&(this.ceilsNum=11+3*Math.floor((I.level-1)/3),this.fieldSquareLength=this.height/this.ceilsNum)}set isMuted(e){this._isMuted=e;const n=document.querySelector(".setting__sound-input"),s=document.querySelector(".setting__sound-mute"),i=document.querySelector(".bgAudio");s&&n&&i&&(s.innerHTML=s.innerHTML==="🔇"?"🔈":"🔇",n.value=s.innerHTML==="🔇"?"1":"0",i.volume=Number(n.value))}get isMuted(){return this._isMuted}set volume(e){this._volume=e;const n=document.querySelector(".setting__sound-input"),s=document.querySelector(".setting__sound-mute"),i=document.querySelector(".bgAudio");n&&s&&i&&(s.innerHTML=n.value==="0"?"🔈":"🔇",i.volume=Number(n.value))}get volume(){return this._volume}generateRandomUsername(){this.userName=`Player #${Date.now()}`,this.saveUsernameToLocalStorage()}saveUsernameToLocalStorage(){localStorage.setItem("userName",this.userName)}}const I=new Tv,bv="modulepreload",_v=function(t){return"/bomberman-game/"+t},ya={},va=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=_v(r),r in ya)return;ya[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let l=i.length-1;l>=0;l--){const h=i[l];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":bv,o||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),o)return new Promise((l,h)=>{u.addEventListener("load",l),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};function eo(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function jl(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Sv=jl,Hl=new ft("auth","Firebase",jl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=new Es("@firebase/auth");function Gn(t,...e){wa.logLevel<=R.ERROR&&wa.error(`Auth (${yn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(t,...e){throw to(t,...e)}function we(t,...e){return to(t,...e)}function Kl(t,e,n){const s=Object.assign(Object.assign({},Sv()),{[e]:n});return new ft("auth","Firebase",s).create(e,{appName:t.name})}function Av(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&_e(t,"argument-error"),Kl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function to(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Hl.create(t,...e)}function _(t,e,...n){if(!t)throw to(e,...n)}function Ce(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Gn(e),new Error(e)}function xe(t,e){t||Ce(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=new Map;function De(t){xe(t instanceof Function,"Expected a class definition");let e=Ia.get(t);return e?(xe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ia.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(t,e){const n=pt(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(en(r,e??{}))return i;_e(i,"already-initialized")}return n.initialize({options:e})}function Cv(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(De);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Dv(){return Ea()==="http:"||Ea()==="https:"}function Ea(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dv()||qa()||"connection"in navigator)?navigator.onLine:!0}function Rv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,n){this.shortDelay=e,this.longDelay=n,xe(n>e,"Short delay should be less than long delay!"),this.isMobile=Mh()||Ph()}get(){return Nv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(t,e){xe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ce("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ce("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ce("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov=new On(3e4,6e4);function Mv(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ys(t,e,n,s,i={}){return Gl(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=gn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),zl.fetch()(Wl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function Gl(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Lv),e);try{const i=new xv(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw qn(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw qn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw qn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw qn(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Kl(t,l,u);_e(t,l)}}catch(i){if(i instanceof ge)throw i;_e(t,"network-request-failed")}}async function Pv(t,e,n,s,i={}){const r=await Ys(t,e,n,s,i);return"mfaPendingCredential"in r&&_e(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Wl(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?no(t.config,i):`${t.config.apiScheme}://${i}`}class xv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(we(this.auth,"network-request-failed")),Ov.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qn(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=we(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uv(t,e){return Ys(t,"POST","/v1/accounts:delete",e)}async function Fv(t,e){return Ys(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Vv(t,e=!1){const n=ce(t),s=await n.getIdToken(e),i=so(s);_(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Zt(Ei(i.auth_time)),issuedAtTime:Zt(Ei(i.iat)),expirationTime:Zt(Ei(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ei(t){return Number(t)*1e3}function so(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Gn("JWT malformed, contained fewer than 3 sections"),null;try{const i=Va(n);return i?JSON.parse(i):(Gn("Failed to decode base64 JWT payload"),null)}catch(i){return Gn("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Bv(t){const e=so(t);return _(e,"internal-error"),_(typeof e.exp<"u","internal-error"),_(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ge&&$v(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function $v({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zt(this.lastLoginAt),this.creationTime=Zt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ys(t){var e;const n=t.auth,s=await t.getIdToken(),i=await pn(t,Fv(n,{idToken:s}));_(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Kv(r.providerUserInfo):[],a=Hv(t.providerData,o),c=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ql(r.createdAt,r.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function jv(t){const e=ce(t);await ys(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Hv(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Kv(t){return t.map(e=>{var{providerId:n}=e,s=eo(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zv(t,e){const n=await Gl(t,{},async()=>{const s=gn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Wl(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zl.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_(typeof e.idToken<"u","internal-error"),_(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return _(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await zv(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new mn;return s&&(_(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(_(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(_(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mn,this.toJSON())}_performRefresh(){return Ce("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t,e){_(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rt{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=eo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ql(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await pn(this,this.stsTokenManager.getToken(this.auth,e));return _(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Vv(this,e)}reload(){return jv(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new rt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ys(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await pn(this,Uv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,O=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,Y=(u=n.createdAt)!==null&&u!==void 0?u:void 0,$=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:Ue,emailVerified:Se,isAnonymous:Xe,providerData:Bt,stsTokenManager:$t}=n;_(Ue&&$t,e,"internal-error");const Ih=mn.fromJSON(this.name,$t);_(typeof Ue=="string",e,"internal-error"),Fe(h,e.name),Fe(d,e.name),_(typeof Se=="boolean",e,"internal-error"),_(typeof Xe=="boolean",e,"internal-error"),Fe(m,e.name),Fe(E,e.name),Fe(C,e.name),Fe(O,e.name),Fe(Y,e.name),Fe($,e.name);const ni=new rt({uid:Ue,auth:e,email:d,emailVerified:Se,displayName:h,isAnonymous:Xe,photoURL:E,phoneNumber:m,tenantId:C,stsTokenManager:Ih,createdAt:Y,lastLoginAt:$});return Bt&&Array.isArray(Bt)&&(ni.providerData=Bt.map(Eh=>Object.assign({},Eh))),O&&(ni._redirectEventId=O),ni}static async _fromIdTokenResponse(e,n,s=!1){const i=new mn;i.updateFromServerResponse(n);const r=new rt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ys(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Xl.type="NONE";const Ta=Xl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t,e,n){return`firebase:${t}:${e}:${n}`}class bt{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Wn(this.userKey,i.apiKey,r),this.fullPersistenceKey=Wn("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new bt(De(Ta),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||De(Ta);const o=Wn(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=rt._fromJSON(e,l);u!==r&&(a=h),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new bt(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new bt(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(th(e))return"Blackberry";if(nh(e))return"Webos";if(io(e))return"Safari";if((e.includes("chrome/")||Jl(e))&&!e.includes("edge/"))return"Chrome";if(eh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Yl(t=se()){return/firefox\//i.test(t)}function io(t=se()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jl(t=se()){return/crios\//i.test(t)}function Zl(t=se()){return/iemobile/i.test(t)}function eh(t=se()){return/android/i.test(t)}function th(t=se()){return/blackberry/i.test(t)}function nh(t=se()){return/webos/i.test(t)}function Js(t=se()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Gv(t=se()){var e;return Js(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Wv(){return xh()&&document.documentMode===10}function sh(t=se()){return Js(t)||eh(t)||nh(t)||th(t)||/windows phone/i.test(t)||Zl(t)}function Qv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(t,e=[]){let n;switch(t){case"Browser":n=ba(se());break;case"Worker":n=`${ba(se())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _a(this),this.idTokenSubscription=new _a(this),this.beforeStateQueue=new Xv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hl,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=De(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await bt.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ys(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Rv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ce(e):null;return n&&_(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(De(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ft("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&De(e)||this._popupRedirectResolver;_(n,this,"argument-error"),this.redirectPersistenceManager=await bt.create(this,[De(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return _(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ih(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Zs(t){return ce(t)}class _a{constructor(e){this.auth=e,this.observer=null,this.addObserver=qh(n=>this.observer=n)}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Jv(t,e,n){const s=Zs(t);_(s._canInitEmulator,s,"emulator-config-failed"),_(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=rh(e),{host:o,port:a}=Zv(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ew()}function rh(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Zv(t){const e=rh(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Sa(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Sa(o)}}}function Sa(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ew(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ce("not implemented")}_getIdTokenResponse(e){return Ce("not implemented")}_linkToIdToken(e,n){return Ce("not implemented")}_getReauthenticationResolver(e){return Ce("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _t(t,e){return Pv(t,"POST","/v1/accounts:signInWithIdp",Mv(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="http://localhost";class dt extends oh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new dt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_e("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=eo(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new dt(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _t(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,_t(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_t(e,n)}buildRequest(){const e={requestUri:tw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=gn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends ro{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends Mn{constructor(){super("facebook.com")}static credential(e){return dt._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ve.credentialFromTaggedObject(e)}static credentialFromError(e){return Ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ve.credential(e.oauthAccessToken)}catch{return null}}}Ve.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ve.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends Mn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return dt._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ae.credential(n,s)}catch{return null}}}Ae.GOOGLE_SIGN_IN_METHOD="google.com";Ae.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends Mn{constructor(){super("github.com")}static credential(e){return dt._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Be.credential(e.oauthAccessToken)}catch{return null}}}Be.GITHUB_SIGN_IN_METHOD="github.com";Be.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends Mn{constructor(){super("twitter.com")}static credential(e,n){return dt._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return $e.credential(n,s)}catch{return null}}}$e.TWITTER_SIGN_IN_METHOD="twitter.com";$e.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await rt._fromIdTokenResponse(e,s,i),o=Aa(s);return new Ot({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Aa(s);return new Ot({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Aa(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs extends ge{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,vs.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new vs(e,n,s,i)}}function ah(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?vs._fromErrorAndOperation(t,r,e,s):r})}async function nw(t,e,n=!1){const s=await pn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ot._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sw(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await pn(t,ah(s,i,e,t),n);_(r.idToken,s,"internal-error");const o=so(r.idToken);_(o,s,"internal-error");const{sub:a}=o;return _(t.uid===a,s,"user-mismatch"),Ot._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&_e(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iw(t,e,n=!1){const s="signIn",i=await ah(t,s,e),r=await Ot._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function rw(t,e,n,s){return ce(t).onIdTokenChanged(e,n,s)}function ow(t,e,n){return ce(t).beforeAuthStateChanged(e,n)}const ws="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ws,"1"),this.storage.removeItem(ws),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(){const t=se();return io(t)||Js(t)}const cw=1e3,uw=10;class uh extends ch{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=aw()&&Qv(),this.fallbackToPolling=sh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Wv()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,uw):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},cw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}uh.type="LOCAL";const lw=uh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh extends ch{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}lh.type="SESSION";const hh=lh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new ei(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,r)),c=await hw(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ei.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const u=oo("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(l),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return window}function fw(t){Ie().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(){return typeof Ie().WorkerGlobalScope<"u"&&typeof Ie().importScripts=="function"}async function pw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gw(){return dh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="firebaseLocalStorageDb",yw=1,Is="firebaseLocalStorage",ph="fbase_key";class Pn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ti(t,e){return t.transaction([Is],e?"readwrite":"readonly").objectStore(Is)}function vw(){const t=indexedDB.deleteDatabase(fh);return new Pn(t).toPromise()}function er(){const t=indexedDB.open(fh,yw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Is,{keyPath:ph})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Is)?e(s):(s.close(),await vw(),e(await er()))})})}async function ka(t,e,n){const s=ti(t,!0).put({[ph]:e,value:n});return new Pn(s).toPromise()}async function ww(t,e){const n=ti(t,!1).get(e),s=await new Pn(n).toPromise();return s===void 0?null:s.value}function Ca(t,e){const n=ti(t,!0).delete(e);return new Pn(n).toPromise()}const Iw=800,Ew=3;class mh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await er(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Ew)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ei._getInstance(gw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pw(),!this.activeServiceWorker)return;this.sender=new dw(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await er();return await ka(e,ws,"1"),await Ca(e,ws),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ka(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>ww(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ca(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=ti(i,!1).getAll();return new Pn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Iw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mh.type="LOCAL";const Tw=mh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _w(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=we("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",bw().appendChild(s)})}function Sw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new On(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(t,e){return e?De(e):(_(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends oh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _t(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _t(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _t(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Aw(t){return iw(t.auth,new ao(t),t.bypassAuthState)}function kw(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),sw(n,new ao(t),t.bypassAuthState)}async function Cw(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),nw(n,new ao(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Aw;case"linkViaPopup":case"linkViaRedirect":return Cw;case"reauthViaPopup":case"reauthViaRedirect":return kw;default:_e(this.auth,"internal-error")}}resolve(e){xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=new On(2e3,1e4);async function Nw(t,e,n){const s=Zs(t);Av(t,e,ro);const i=gh(s,n);return new nt(s,"signInViaPopup",e,i).executeNotNull()}class nt extends yh{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,nt.currentPopupAction&&nt.currentPopupAction.cancel(),nt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){xe(this.filter.length===1,"Popup operations only handle one event");const e=oo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(we(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(we(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(we(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Dw.get())};e()}}nt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw="pendingRedirect",Qn=new Map;class Lw extends yh{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Qn.get(this.auth._key());if(!e){try{const s=await Ow(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Qn.set(this.auth._key(),e)}return this.bypassAuthState||Qn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ow(t,e){const n=xw(e),s=Pw(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Mw(t,e){Qn.set(t._key(),e)}function Pw(t){return De(t._redirectPersistence)}function xw(t){return Wn(Rw,t.config.apiKey,t.name)}async function Uw(t,e,n=!1){const s=Zs(t),i=gh(s,e),o=await new Lw(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=10*60*1e3;class Vw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Bw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!vh(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(we(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Fw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Da(e))}saveEventToCache(e){this.cachedEventUids.add(Da(e)),this.lastProcessedEventTime=Date.now()}}function Da(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function vh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Bw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vh(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $w(t,e={}){return Ys(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jw=/^https?/;async function Hw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $w(t);for(const n of e)try{if(Kw(n))return}catch{}_e(t,"unauthorized-domain")}function Kw(t){const e=Zi(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!jw.test(n))return!1;if(qw.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=new On(3e4,6e4);function Na(){const t=Ie().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Gw(t){return new Promise((e,n)=>{var s,i,r;function o(){Na(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Na(),n(we(t,"network-request-failed"))},timeout:zw.get()})}if(!((i=(s=Ie().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Ie().gapi)===null||r===void 0)&&r.load)o();else{const a=Sw("iframefcb");return Ie()[a]=()=>{gapi.load?o():n(we(t,"network-request-failed"))},_w(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Xn=null,e})}let Xn=null;function Ww(t){return Xn=Xn||Gw(t),Xn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=new On(5e3,15e3),Xw="__/auth/iframe",Yw="emulator/auth/iframe",Jw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eI(t){const e=t.config;_(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?no(e,Yw):`https://${t.config.authDomain}/${Xw}`,s={apiKey:e.apiKey,appName:t.name,v:yn},i=Zw.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${gn(s).slice(1)}`}async function tI(t){const e=await Ww(t),n=Ie().gapi;return _(n,t,"internal-error"),e.open({where:document.body,url:eI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jw,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=we(t,"network-request-failed"),a=Ie().setTimeout(()=>{r(o)},Qw.get());function c(){Ie().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sI=500,iI=600,rI="_blank",oI="http://localhost";class Ra{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aI(t,e,n,s=sI,i=iI){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},nI),{width:s.toString(),height:i.toString(),top:r,left:o}),u=se().toLowerCase();n&&(a=Jl(u)?rI:n),Yl(u)&&(e=e||oI,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[m,E])=>`${d}${m}=${E},`,"");if(Gv(u)&&a!=="_self")return cI(e||"",a),new Ra(null);const h=window.open(e||"",a,l);_(h,t,"popup-blocked");try{h.focus()}catch{}return new Ra(h)}function cI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI="__/auth/handler",lI="emulator/auth/handler";function La(t,e,n,s,i,r){_(t.config.authDomain,t,"auth-domain-config-required"),_(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:yn,eventId:i};if(e instanceof ro){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$h(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(r||{}))o[c]=u}if(e instanceof Mn){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${hI(t)}?${gn(a).slice(1)}`}function hI({config:t}){return t.emulator?no(t,lI):`https://${t.authDomain}/${uI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti="webStorageSupport";class dI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hh,this._completeRedirectFn=Uw,this._overrideRedirectResult=Mw}async _openPopup(e,n,s,i){var r;xe((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=La(e,n,s,Zi(),i);return aI(e,o,oo())}async _openRedirect(e,n,s,i){return await this._originValidation(e),fw(La(e,n,s,Zi(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(xe(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await tI(e),s=new Vw(e);return n.register("authEvent",i=>(_(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ti,{type:Ti},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Ti];o!==void 0&&n(!!o),_e(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Hw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return sh()||io()||Js()}}const fI=dI;var Oa="@firebase/auth",Ma="0.21.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gI(t){Ee(new me("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,c)=>{_(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),_(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ih(t)},l=new Yv(a,c,u);return Cv(l,n),l})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ee(new me("auth-internal",e=>{const n=Zs(e.getProvider("auth").getImmediate());return(s=>new pI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),de(Oa,Ma,mI(t)),de(Oa,Ma,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=5*60,vI=$a("authIdTokenMaxAge")||yI;let Pa=null;const wI=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>vI)return;const i=n==null?void 0:n.token;Pa!==i&&(Pa=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function II(t=ir()){const e=pt(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kv(t,{popupRedirectResolver:fI,persistence:[Tw,lw,hh]}),s=$a("authTokenSyncURL");if(s){const r=wI(s);ow(n,r,()=>r(n.currentUser)),rw(n,o=>r(o))}const i=Ba("auth");return i&&Jv(n,`http://${i}`),n}gI("Browser");const he=(t,e)=>{const n=t.querySelector(e);if(!n)throw new Error(`There is no element with selector ${e}`);return n},co=new Ae;co.addScope("https://www.googleapis.com/auth/contacts.readonly");const wh=sr($l),uo=II(wh);uo.languageCode="it";kl(wh);class EI{constructor(e,n){T(this,"auth");T(this,"provider");this.auth=e,this.provider=n}googleAuth(){Nw(uo,co).then(e=>{const n=e.user;I.uid=n.uid,I.userName=n.displayName,I.saveUsernameToLocalStorage(),localStorage.setItem("uid",n.uid),I.auth="authorized";const s=he(document,".auth");s.dataset.content=I.auth,s.innerHTML=`${I.auth}${I.auth==="authorized"?`: ${I.userName}`:""}`,s.disabled=!0,U.start.setContinueButtonState()}).catch(e=>console.error(e))}}const TI=new EI(uo,co),bI="/bomberman-game/assets/github-2c327a71.png",_I="/bomberman-game/assets/logo-rs-5949ea57.svg";const SI="/bomberman-game/assets/title-screen-34056d71.mp3";class AI{constructor(){T(this,"uid");T(this,"phaser");T(this,"gameScene");T(this,"canvas");this.phaser,this.gameScene,this.uid=I.uid}renderUI(){this.playBgAudio();const e=I.auth==="authorized";this.canvas=document.querySelector("canvas"),this.canvas&&(this.canvas.style.display="none");let n=document.querySelector(".main");n||(n=document.createElement("main"),n.classList.add("main"),document.body.prepend(n)),n.innerHTML=`
    <section class="logo"></section>
    <nav class="nav">

      <div class="instruction">Please, use arrow keys to navigate</div>
      <button data-content="start" class="nav-item start active article">Start</button>
      <button data-content="continue" class="nav-item continue article">Continue</button>
      <button data-content="settings" class="nav-item settings article">Settings</button>
      <button data-content="authorization" class="nav-item auth article" ${e?"disabled":""}>${I.auth}${I.auth==="authorized"?`: ${I.userName}`:""}</button>
      <button data-content="leaderboard" class="nav-item settings article">Leaderboard</button>
    </nav>
    <footer class="footer">
      <section class="github">
        <div class="github__logo">
          <img class="github__img" src="${bI}" alt="Github logo"/>
        </div>
        <a data-content="Alex" href="https://github.com/alexmegadrive" class="footer-link">Alex</a>
        <a data-content="Gleb" href="https://github.com/killthecreator" class="footer-link">Gleb</a>
        <a data-content="Olga" href="https://github.com/HelgaAthame" class="footer-link">Olga</a>
      </section>
      <section class="year">2023</section>
      <section class="rs footer-link">
        <a href="https://rs.school/js/">
          <img class="rs-school__img" src="${_I}" alt="RS School JS Front-end course"/>
        </a>
      </section>
    </footer>
    `,document.addEventListener("keydown",async function s(i){document.removeEventListener("keydown",s),i.code!=="Enter"&&U.start.addBGAudio()}),this.setContinueButtonState(),this.navigateMenuListeners()}addBGAudio(){if(!document.querySelector(".bgAudio")){const n=new Audio(SI);n.classList.add("bgAudio"),n.loop=!0,n.volume=.5,document.body.append(n),n.play()}}playBgAudio(){const e=document.querySelector(".bgAudio");e&&e.play()}async setContinueButtonState(){this.uid=I.uid;const e=he(document,".continue");if(I.gameOver){e.disabled=!0;return}if(this.uid){const n=Ji(gs,"users",this.uid),i=(await Vl(n)).exists();e.disabled=!i}else e.disabled=!this.canvas}navigateMenuListeners(){let e=0,n=2;const s=document.querySelectorAll(".article"),i=document.querySelectorAll(".footer-link");document.addEventListener("keydown",async function r(o){function a(){s.forEach(u=>{u.classList.remove("active")}),i.forEach(u=>{u.classList.remove("active")})}o.ctrlKey&&o.shiftKey&&(o.key==="L"||o.key==="l"||o.key==="Д"||o.key==="д")&&(U.start.drawPopup(),document.addEventListener("keydown",U.start.popupKeyControl));const c=document.querySelector(".level-popup");if(!c||c.style.display==="none")switch(o.code){case"ArrowUp":a(),e>0&&e--,s[e].classList.add("active");break;case"ArrowDown":a(),e<s.length-1&&e++,s[e].classList.add("active");break;case"ArrowLeft":a(),n>0&&n--,i[n].classList.add("active");break;case"ArrowRight":a(),n<i.length-1&&n++,i[n].classList.add("active");break;case"Enter":const u=document.querySelector(".active");if(u)switch(u.dataset.content){case"authorization":u.disabled===!1&&(TI.googleAuth(),U.start.setContinueButtonState());break;case"start":U.start.handleStartGame(),document.removeEventListener("keydown",r);break;case"continue":u.disabled===!1&&(U.start.handleContinueGame(),document.removeEventListener("keydown",r));break;case"settings":U.settings.renderUI(),document.removeEventListener("keydown",r);break;case"leaderboard":U.scores.renderUI(),document.removeEventListener("keydown",r);break;case"Olga":u.click();break;case"Gleb":u.click();break;case"Alex":u.click();break;default:U.start.pauseBGAudio(),u.click();break}break}})}async handleContinueGame(){this.phaser?(this.canvas.style.display="initial",this.gameScene.resumeEvent(),this.gameScene.scene.resume()):(await I.takeFromBD(),this.phaser=await va(()=>import("./phaser-718194c1.js"),[]),this.gameScene=this.phaser.gameScene),I.gameOver=!1}async handleStartGame(){this.pauseBGAudio(),I.uid||I.generateRandomUsername(),I.resetGame();const e=he(document,"main");e.innerHTML=`
    <div class="begin">LEVEL ${I.level}</div>
  `,setTimeout(async()=>{this.canvas&&(this.canvas.style.display="initial"),this.phaser?this.phaser.gameScene.restartGame():(this.phaser=await va(()=>import("./phaser-718194c1.js"),[]),this.gameScene=this.phaser.gameScene)},500)}pauseBGAudio(){const e=document.querySelector(".bgAudio");e&&e.pause()}drawPopup(){let e=document.querySelector(".level-popup");e||(e=document.createElement("div"),e.classList.add("level-popup"),e.innerHTML=`
        <div class="popup__wrapper">
          <form id="popup__form">
            <label for="popup__input">Level Num </label>
            <br>
            <input id="popup__input" type="text" value="1" min="1" max="12" class="form_elem popup__input" autocomplete="off">
            <br>
            <button class="popup__button form_elem" type="submit" form="popup__form">OK</button>
          </form>
        </div>
      `),document.body.append(e);let n=he(document,"#popup__form");n.addEventListener("submit",i);let s=he(document,".popup__input");s.addEventListener("input",()=>{(s.value.length>2||!s.value.match(/^[1-9]+[0-9]*$/)||Number(s.value)>12)&&(s.value=s.value.slice(0,s.value.length-1))});function i(r){r.preventDefault(),s.value&&(n.removeEventListener("submit",i),e.style.display="none",I.enteredLevel=s.value,document.removeEventListener("keydown",U.start.popupKeyControl))}e.style.display="flex"}popupKeyControl(e){let n=0;const s=document.querySelectorAll(".form_elem");function i(){s.forEach(r=>r.classList.remove("active"))}switch(e.code){case"ArrowUp":i(),n=0,s[n].classList.add("active"),s[n].focus();break;case"ArrowDown":i(),n=1,s[n].classList.add("active"),s[n].focus();break}}}const xa={A:"A",AltRight:"ALT",AltLeft:"ALT",B:"B",Backspace:"BACKSPACE",Backslash:"BACKWARD_SLASH",C:"C",CapsLock:"CAPS_LOCK",BracketRight:"CLOSED_BRACKET",Comma:"COMMA",ControlLeft:"CONTROL",ControlRight:"CONTROL",D:"D",Delete:"DELETE",ArrowDown:"DOWN",E:"E",Digit8:"EIGHT",End:"END",Enter:"ENTER",Equal:"EQUALS",Esc:"ESC",F:"F",F1:"F1",F2:"F2",F3:"F3",F4:"F4",F5:"F5",F6:"F6",F7:"F7",F8:"F8",F9:"F9",F10:"F10",F11:"F11",F12:"F12",F13:"F13",F14:"F14",F15:"F15",Digit5:"FIVE",Digit4:"FOUR",G:"G",H:"H",Home:"HOME",I:"I",Insert:"INSERT",J:"J",K:"K",L:"L",ArrowLeft:"LEFT",M:"M",Minus:"MINUS",N:"N",Digit9:"NINE",NumLock:"NUM_LOCK",Numpad0:"NUMPAD_0",Numpad1:"NUMPAD_1",Numpad2:"NUMPAD_2",Numpad3:"NUMPAD_3",Numpad4:"NUMPAD_4",Numpad5:"NUMPAD_5",Numpad6:"NUMPAD_6",Numpad7:"NUMPAD_7",Numpad8:"NUMPAD_8",Numpad9:"NUMPAD_9",NumpadAdd:"NUMPAD_ADD",NumpadDecimal:"NUMPAD_DECIMAL",NumpadDivide:"NUMPAD_DIVIDE",NumpadEnter:"NUMPAD_ENTER",NumpadMultiply:"NUMPAD_MULTIPLY",NumpadSubtract:"NUMPAD_SUBTRACT",O:"O",Digit1:"ONE",BracketLeft:"OPEN_BRACKET",P:"P",PageDown:"PAGE_DOWN",PageUp:"PAGE_UP",Period:"PERIOD",Q:"Q",Slash:"QUESTION_MARK",Quote:"QUOTES",R:"R",ArrowRight:"RIGHT",S:"S",Digit7:"SEVEN",ShiftRight:"SHIFT",ShiftLeft:"SHIFT",Digit6:"SIX",Space:"SPACE",T:"T",Tab:"TAB",Digit3:"THREE",Digit2:"TWO",U:"U",ArrowUp:"UP",V:"V",W:"W",X:"X",Y:"Y",Z:"Z",Digit0:"ZERO"};class kI{async renderUI(){const e=document.querySelector("canvas");e&&(e.style.display="none");const n=he(document,"main");n.innerHTML=`
      <section class="setting__title">settings</section>
      <section class="setting__wrapper">
        <div class="setting__table">
          <div class="setting__button">
            <div class="sign">🠕</div>
            <div class="key">${I.buttons.arrowUp}</div>
          </div>
          <div class="setting__button">
            <div class="sign">🠗</div>
            <div class="key">${I.buttons.arrowDown}</div>
          </div>
          <div class="setting__button">
            <div class="sign">🠔</div>
            <div class="key">${I.buttons.arrowLeft}</div>
          </div>
          <div class="setting__button">
            <div class="sign">🠖</div>
            <div class="key">${I.buttons.arrowRight}</div>
          </div>
          <div class="setting__button">
            <div class="sign">SET BOMB</div>
            <div class="key">${I.buttons.bombSet}</div>
          </div>
          <div class="setting__button">
            <div class="sign">REMOVE BOMB</div>
            <div class="key">${I.buttons.bombRemove}</div>
          </div>
          <div class="setting__button">
            <div class="sign">start</div>
            <div class="key">${I.buttons.start}</div>
          </div>
        </div>
        <div class="setting__sound">
          <div class="setting__sound-wrapper">
            <input class="setting__sound-input" value="0.5" type="range" min="0" max="1" step="0.01"/>
          </div>
          <div class="setting__sound-mute">${I.volume===0?"🔈":"🔇"}</div>
        </div>
      </section>
      <section class="setting__save">
        <button class="setting__save-button">SAVE</button>
      </section>
    `,this.configSoundLevel(),this.configSoundMute(),this.moveMenu()}configSoundLevel(){const e=he(document,".setting__sound-input");e.value=I.volume.toString(),e.addEventListener("input",()=>{I.volume=Number(e.value)})}configSoundMute(){he(document,".setting__sound-mute").addEventListener("click",()=>{I.isMuted=!I.isMuted})}findKey(e){const s=Object.entries(xa).find(i=>i[1]===e);return s?s[0].length===1?`Key${s[0]}`:s[0]:""}moveMenu(){let e=0;const n=document.querySelectorAll(".sign"),s=document.querySelectorAll(".key"),i=he(document,".setting__save-button");let r;document.addEventListener("keydown",async function o(a){function c(){n.forEach(u=>{u.classList.remove("active")}),s.forEach(u=>{u.classList.remove("blink")}),i.classList.remove("active")}switch(a.code){case"Escape":U.start.renderUI();case U.settings.findKey(I.buttons.arrowUp):c(),e>0&&e--,n[e].classList.add("active"),s[e].classList.add("blink"),r=s[e];break;case U.settings.findKey(I.buttons.arrowDown):c(),e<n.length&&e++,e<n.length?(n[e].classList.add("active"),s[e].classList.add("blink"),r=s[e]):i.classList.add("active");break;case U.settings.findKey(I.buttons.start):i.classList.contains("active")&&(I.buttons={arrowUp:s[0].innerHTML,arrowDown:s[1].innerHTML,arrowLeft:s[2].innerHTML,arrowRight:s[3].innerHTML,bombSet:s[4].innerHTML,bombRemove:s[5].innerHTML,start:s[6].innerHTML},I.saveToBd(),document.removeEventListener("keydown",o),U.start.renderUI());default:const u=a.code.startsWith("Key")?a.code.slice(3):a.code;if(u){const l=xa[u];r&&(r.textContent=l)}}})}}class CI{renderUI(){const e=document.querySelector("canvas");e.style.display="none";const n=he(document,"main");n.innerHTML=`
      <section class="welcome-meaasge">
        LEVEL ${I.level++} COMPLETED !
      </section>
      <section class="win-text">
        <article class="win-enter">press ENTER to continue</article>
        <article class="win-esc">press ESC to go to start menu</article>
      </section>
    `,this.addListeners(),I.saveToBd(),I.fieldMatrix=void 0}addListeners(){const e=async n=>{if(n.code==="Enter"){const s=he(document,"main");s.innerHTML=`
          <div class="begin">LEVEL ${I.level}</div>
        `;const i=document.querySelector("canvas");setTimeout(async()=>{i.style.display="initial",document.removeEventListener("keydown",e),I.fieldMatrix=void 0,U.start.phaser.gameScene.fieldMatrix=Array(I.ceilsNum).fill([]).map(()=>Array(I.ceilsNum).fill({x:0,y:0,object:null})),U.start.phaser.gameScene.generateGameField(),U.start.phaser.gameScene.restartScene()},500)}n.code==="Esc"&&(document.removeEventListener("keydown",e),U.start.renderUI())};document.addEventListener("keydown",e)}}class DI{async renderUI(){const e=he(document,"main"),n=(await this.getUsers()).map((s,i)=>`
        <tr>
            <td>${i+1}</td>
            <td>${s.userName}</td>
            <td>${s.highScore}</td>
        </tr>`);e.innerHTML=`
        <table>
            <tr>
                <th>Position</th>
                <th>Name</th>
                <th>Score</th>
            </tr>
            ${n.join("")}

        </table>
        `,this.backToMenu()}async getUsers(){const e=await vv(Qy(gs,"users")),n=[];return e.forEach(r=>{n.push(r.data())}),n.sort((r,o)=>-(r.highScore-o.highScore)).slice(0,10)}backToMenu(){document.addEventListener("keydown",e=>{if(e.code==="Escape"){U.start.renderUI();return}})}}class NI{constructor(e,n,s,i){T(this,"start");T(this,"settings");T(this,"win");T(this,"scores");this.start=e,this.settings=n,this.win=s,this.scores=i}}const U=new NI(new AI,new kI,new CI,new DI);class RI{constructor(e,n){T(this,"view");T(this,"model");this.view=e,this.model=n}}const LI=new RI(U,I);LI.view.start.renderUI();window.addEventListener("unload",async()=>{await I.saveToBd()});export{I as m,U as v};
