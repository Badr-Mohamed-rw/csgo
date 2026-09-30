(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Lx(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var cd={exports:{}},fo={},ud={exports:{}},Mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm;function Dx(){if(Vm)return Mt;Vm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),_=Symbol.iterator;function g(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,C={};function x(O,te,Ne){this.props=O,this.context=te,this.refs=C,this.updater=Ne||S}x.prototype.isReactComponent={},x.prototype.setState=function(O,te){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,te,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function v(){}v.prototype=x.prototype;function L(O,te,Ne){this.props=O,this.context=te,this.refs=C,this.updater=Ne||S}var N=L.prototype=new v;N.constructor=L,T(N,x.prototype),N.isPureReactComponent=!0;var w=Array.isArray,P=Object.prototype.hasOwnProperty,D={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function E(O,te,Ne){var Ve,Ge={},ae=null,ye=null;if(te!=null)for(Ve in te.ref!==void 0&&(ye=te.ref),te.key!==void 0&&(ae=""+te.key),te)P.call(te,Ve)&&!k.hasOwnProperty(Ve)&&(Ge[Ve]=te[Ve]);var he=arguments.length-2;if(he===1)Ge.children=Ne;else if(1<he){for(var Te=Array(he),Fe=0;Fe<he;Fe++)Te[Fe]=arguments[Fe+2];Ge.children=Te}if(O&&O.defaultProps)for(Ve in he=O.defaultProps,he)Ge[Ve]===void 0&&(Ge[Ve]=he[Ve]);return{$$typeof:s,type:O,key:ae,ref:ye,props:Ge,_owner:D.current}}function I(O,te){return{$$typeof:s,type:O.type,key:te,ref:O.ref,props:O.props,_owner:O._owner}}function j(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function W(O){var te={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ne){return te[Ne]})}var $=/\/+/g;function fe(O,te){return typeof O=="object"&&O!==null&&O.key!=null?W(""+O.key):te.toString(36)}function re(O,te,Ne,Ve,Ge){var ae=typeof O;(ae==="undefined"||ae==="boolean")&&(O=null);var ye=!1;if(O===null)ye=!0;else switch(ae){case"string":case"number":ye=!0;break;case"object":switch(O.$$typeof){case s:case e:ye=!0}}if(ye)return ye=O,Ge=Ge(ye),O=Ve===""?"."+fe(ye,0):Ve,w(Ge)?(Ne="",O!=null&&(Ne=O.replace($,"$&/")+"/"),re(Ge,te,Ne,"",function(Fe){return Fe})):Ge!=null&&(j(Ge)&&(Ge=I(Ge,Ne+(!Ge.key||ye&&ye.key===Ge.key?"":(""+Ge.key).replace($,"$&/")+"/")+O)),te.push(Ge)),1;if(ye=0,Ve=Ve===""?".":Ve+":",w(O))for(var he=0;he<O.length;he++){ae=O[he];var Te=Ve+fe(ae,he);ye+=re(ae,te,Ne,Te,Ge)}else if(Te=g(O),typeof Te=="function")for(O=Te.call(O),he=0;!(ae=O.next()).done;)ae=ae.value,Te=Ve+fe(ae,he++),ye+=re(ae,te,Ne,Te,Ge);else if(ae==="object")throw te=String(O),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return ye}function q(O,te,Ne){if(O==null)return O;var Ve=[],Ge=0;return re(O,Ve,"","",function(ae){return te.call(Ne,ae,Ge++)}),Ve}function z(O){if(O._status===-1){var te=O._result;te=te(),te.then(function(Ne){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ne)},function(Ne){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ne)}),O._status===-1&&(O._status=0,O._result=te)}if(O._status===1)return O._result.default;throw O._result}var G={current:null},H={transition:null},K={ReactCurrentDispatcher:G,ReactCurrentBatchConfig:H,ReactCurrentOwner:D};function ie(){throw Error("act(...) is not supported in production builds of React.")}return Mt.Children={map:q,forEach:function(O,te,Ne){q(O,function(){te.apply(this,arguments)},Ne)},count:function(O){var te=0;return q(O,function(){te++}),te},toArray:function(O){return q(O,function(te){return te})||[]},only:function(O){if(!j(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Mt.Component=x,Mt.Fragment=t,Mt.Profiler=a,Mt.PureComponent=L,Mt.StrictMode=r,Mt.Suspense=d,Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,Mt.act=ie,Mt.cloneElement=function(O,te,Ne){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ve=T({},O.props),Ge=O.key,ae=O.ref,ye=O._owner;if(te!=null){if(te.ref!==void 0&&(ae=te.ref,ye=D.current),te.key!==void 0&&(Ge=""+te.key),O.type&&O.type.defaultProps)var he=O.type.defaultProps;for(Te in te)P.call(te,Te)&&!k.hasOwnProperty(Te)&&(Ve[Te]=te[Te]===void 0&&he!==void 0?he[Te]:te[Te])}var Te=arguments.length-2;if(Te===1)Ve.children=Ne;else if(1<Te){he=Array(Te);for(var Fe=0;Fe<Te;Fe++)he[Fe]=arguments[Fe+2];Ve.children=he}return{$$typeof:s,type:O.type,key:Ge,ref:ae,props:Ve,_owner:ye}},Mt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},Mt.createElement=E,Mt.createFactory=function(O){var te=E.bind(null,O);return te.type=O,te},Mt.createRef=function(){return{current:null}},Mt.forwardRef=function(O){return{$$typeof:f,render:O}},Mt.isValidElement=j,Mt.lazy=function(O){return{$$typeof:y,_payload:{_status:-1,_result:O},_init:z}},Mt.memo=function(O,te){return{$$typeof:p,type:O,compare:te===void 0?null:te}},Mt.startTransition=function(O){var te=H.transition;H.transition={};try{O()}finally{H.transition=te}},Mt.unstable_act=ie,Mt.useCallback=function(O,te){return G.current.useCallback(O,te)},Mt.useContext=function(O){return G.current.useContext(O)},Mt.useDebugValue=function(){},Mt.useDeferredValue=function(O){return G.current.useDeferredValue(O)},Mt.useEffect=function(O,te){return G.current.useEffect(O,te)},Mt.useId=function(){return G.current.useId()},Mt.useImperativeHandle=function(O,te,Ne){return G.current.useImperativeHandle(O,te,Ne)},Mt.useInsertionEffect=function(O,te){return G.current.useInsertionEffect(O,te)},Mt.useLayoutEffect=function(O,te){return G.current.useLayoutEffect(O,te)},Mt.useMemo=function(O,te){return G.current.useMemo(O,te)},Mt.useReducer=function(O,te,Ne){return G.current.useReducer(O,te,Ne)},Mt.useRef=function(O){return G.current.useRef(O)},Mt.useState=function(O){return G.current.useState(O)},Mt.useSyncExternalStore=function(O,te,Ne){return G.current.useSyncExternalStore(O,te,Ne)},Mt.useTransition=function(){return G.current.useTransition()},Mt.version="18.3.1",Mt}var Gm;function Kf(){return Gm||(Gm=1,ud.exports=Dx()),ud.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm;function Ix(){if(Hm)return fo;Hm=1;var s=Kf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,d,p){var y,_={},g=null,S=null;p!==void 0&&(g=""+p),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(S=d.ref);for(y in d)r.call(d,y)&&!l.hasOwnProperty(y)&&(_[y]=d[y]);if(f&&f.defaultProps)for(y in d=f.defaultProps,d)_[y]===void 0&&(_[y]=d[y]);return{$$typeof:e,type:f,key:g,ref:S,props:_,_owner:a.current}}return fo.Fragment=t,fo.jsx=u,fo.jsxs=u,fo}var Wm;function Ux(){return Wm||(Wm=1,cd.exports=Ix()),cd.exports}var A=Ux(),Dl={},dd={exports:{}},ii={},fd={exports:{}},hd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm;function Fx(){return Xm||(Xm=1,(function(s){function e(H,K){var ie=H.length;H.push(K);e:for(;0<ie;){var O=ie-1>>>1,te=H[O];if(0<a(te,K))H[O]=K,H[ie]=te,ie=O;else break e}}function t(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var K=H[0],ie=H.pop();if(ie!==K){H[0]=ie;e:for(var O=0,te=H.length,Ne=te>>>1;O<Ne;){var Ve=2*(O+1)-1,Ge=H[Ve],ae=Ve+1,ye=H[ae];if(0>a(Ge,ie))ae<te&&0>a(ye,Ge)?(H[O]=ye,H[ae]=ie,O=ae):(H[O]=Ge,H[Ve]=ie,O=Ve);else if(ae<te&&0>a(ye,ie))H[O]=ye,H[ae]=ie,O=ae;else break e}}return K}function a(H,K){var ie=H.sortIndex-K.sortIndex;return ie!==0?ie:H.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var d=[],p=[],y=1,_=null,g=3,S=!1,T=!1,C=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(H){for(var K=t(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=H)r(p),K.sortIndex=K.expirationTime,e(d,K);else break;K=t(p)}}function w(H){if(C=!1,N(H),!T)if(t(d)!==null)T=!0,z(P);else{var K=t(p);K!==null&&G(w,K.startTime-H)}}function P(H,K){T=!1,C&&(C=!1,v(E),E=-1),S=!0;var ie=g;try{for(N(K),_=t(d);_!==null&&(!(_.expirationTime>K)||H&&!W());){var O=_.callback;if(typeof O=="function"){_.callback=null,g=_.priorityLevel;var te=O(_.expirationTime<=K);K=s.unstable_now(),typeof te=="function"?_.callback=te:_===t(d)&&r(d),N(K)}else r(d);_=t(d)}if(_!==null)var Ne=!0;else{var Ve=t(p);Ve!==null&&G(w,Ve.startTime-K),Ne=!1}return Ne}finally{_=null,g=ie,S=!1}}var D=!1,k=null,E=-1,I=5,j=-1;function W(){return!(s.unstable_now()-j<I)}function $(){if(k!==null){var H=s.unstable_now();j=H;var K=!0;try{K=k(!0,H)}finally{K?fe():(D=!1,k=null)}}else D=!1}var fe;if(typeof L=="function")fe=function(){L($)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,q=re.port2;re.port1.onmessage=$,fe=function(){q.postMessage(null)}}else fe=function(){x($,0)};function z(H){k=H,D||(D=!0,fe())}function G(H,K){E=x(function(){H(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,z(P))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(H){switch(g){case 1:case 2:case 3:var K=3;break;default:K=g}var ie=g;g=K;try{return H()}finally{g=ie}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,K){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ie=g;g=H;try{return K()}finally{g=ie}},s.unstable_scheduleCallback=function(H,K,ie){var O=s.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?O+ie:O):ie=O,H){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=ie+te,H={id:y++,callback:K,priorityLevel:H,startTime:ie,expirationTime:te,sortIndex:-1},ie>O?(H.sortIndex=ie,e(p,H),t(d)===null&&H===t(p)&&(C?(v(E),E=-1):C=!0,G(w,ie-O))):(H.sortIndex=te,e(d,H),T||S||(T=!0,z(P))),H},s.unstable_shouldYield=W,s.unstable_wrapCallback=function(H){var K=g;return function(){var ie=g;g=K;try{return H.apply(this,arguments)}finally{g=ie}}}})(hd)),hd}var jm;function Ox(){return jm||(jm=1,fd.exports=Fx()),fd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym;function kx(){if(Ym)return ii;Ym=1;var s=Kf(),e=Ox();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},_={};function g(n){return d.call(_,n)?!0:d.call(y,n)?!1:p.test(n)?_[n]=!0:(y[n]=!0,!1)}function S(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,o,c){if(i===null||typeof i>"u"||S(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,o,c,h,m,b){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=b}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,L);x[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,L);x[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,L);x[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function N(n,i,o,c){var h=x.hasOwnProperty(i)?x[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,h,c)&&(o=null),c||h===null?g(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):h.mustUseProperty?n[h.propertyName]=o===null?h.type===3?!1:"":o:(i=h.attributeName,c=h.attributeNamespace,o===null?n.removeAttribute(i):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var w=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),D=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),W=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),fe=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),G=Symbol.for("react.offscreen"),H=Symbol.iterator;function K(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Object.assign,O;function te(n){if(O===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var Ne=!1;function Ve(n,i){if(!n||Ne)return"";Ne=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(me){var c=me}Reflect.construct(n,[],i)}else{try{i.call()}catch(me){c=me}n.call(i.prototype)}else{try{throw Error()}catch(me){c=me}n()}}catch(me){if(me&&c&&typeof me.stack=="string"){for(var h=me.stack.split(`
`),m=c.stack.split(`
`),b=h.length-1,B=m.length-1;1<=b&&0<=B&&h[b]!==m[B];)B--;for(;1<=b&&0<=B;b--,B--)if(h[b]!==m[B]){if(b!==1||B!==1)do if(b--,B--,0>B||h[b]!==m[B]){var Y=`
`+h[b].replace(" at new "," at ");return n.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",n.displayName)),Y}while(1<=b&&0<=B);break}}}finally{Ne=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?te(n):""}function Ge(n){switch(n.tag){case 5:return te(n.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return n=Ve(n.type,!1),n;case 11:return n=Ve(n.type.render,!1),n;case 1:return n=Ve(n.type,!0),n;default:return""}}function ae(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case D:return"Portal";case I:return"Profiler";case E:return"StrictMode";case fe:return"Suspense";case re:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case W:return(n.displayName||"Context")+".Consumer";case j:return(n._context.displayName||"Context")+".Provider";case $:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case q:return i=n.displayName||null,i!==null?i:ae(n.type)||"Memo";case z:i=n._payload,n=n._init;try{return ae(n(i))}catch{}}return null}function ye(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function he(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Te(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Fe(n){var i=Te(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(b){c=""+b,m.call(this,b)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ze(n){n._valueTracker||(n._valueTracker=Fe(n))}function lt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=Te(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function $e(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function wt(n,i){var o=i.checked;return ie({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function ft(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=he(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function dt(n,i){i=i.checked,i!=null&&N(n,"checked",i,!1)}function kt(n,i){dt(n,i);var o=he(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?It(n,i.type,o):i.hasOwnProperty("defaultValue")&&It(n,i.type,he(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Bt(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function It(n,i,o){(i!=="number"||$e(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ut=Array.isArray;function Tt(n,i,o,c){if(n=n.options,i){i={};for(var h=0;h<o.length;h++)i["$"+o[h]]=!0;for(o=0;o<n.length;o++)h=i.hasOwnProperty("$"+n[o].value),n[o].selected!==h&&(n[o].selected=h),h&&c&&(n[o].defaultSelected=!0)}else{for(o=""+he(o),i=null,h=0;h<n.length;h++){if(n[h].value===o){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function zt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Z(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Ut(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:he(o)}}function sn(n,i){var o=he(i.value),c=he(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function Et(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function U(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function M(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?U(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ne,le=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ne=ne||document.createElement("div"),ne.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ne.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ge(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Re={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ue=["Webkit","ms","Moz","O"];Object.keys(Re).forEach(function(n){Ue.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Re[i]=Re[n]})});function xe(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Re.hasOwnProperty(n)&&Re[n]?(""+i).trim():i+"px"}function Se(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,h=xe(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,h):n[o]=h}}var Le=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(n,i){if(i){if(Le[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ke(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var De=null;function se(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var V=null,ve=null,F=null;function Me(n){if(n=$a(n)){if(typeof V!="function")throw Error(t(280));var i=n.stateNode;i&&(i=qo(i),V(n.stateNode,n.type,i))}}function X(n){ve?F?F.push(n):F=[n]:ve=n}function Ee(){if(ve){var n=ve,i=F;if(F=ve=null,Me(n),i)for(n=0;n<i.length;n++)Me(i[n])}}function _e(n,i){return n(i)}function we(){}var Be=!1;function He(n,i,o){if(Be)return n(i,o);Be=!0;try{return _e(n,i,o)}finally{Be=!1,(ve!==null||F!==null)&&(we(),Ee())}}function Ct(n,i){var o=n.stateNode;if(o===null)return null;var c=qo(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var Nt=!1;if(f)try{var cn={};Object.defineProperty(cn,"passive",{get:function(){Nt=!0}}),window.addEventListener("test",cn,cn),window.removeEventListener("test",cn,cn)}catch{Nt=!1}function ai(n,i,o,c,h,m,b,B,Y){var me=Array.prototype.slice.call(arguments,3);try{i.apply(o,me)}catch(Ae){this.onError(Ae)}}var tr=!1,Sr=null,Bn=!1,zn=null,Mr={onError:function(n){tr=!0,Sr=n}};function Er(n,i,o,c,h,m,b,B,Y){tr=!1,Sr=null,ai.apply(Mr,arguments)}function ts(n,i,o,c,h,m,b,B,Y){if(Er.apply(this,arguments),tr){if(tr){var me=Sr;tr=!1,Sr=null}else throw Error(t(198));Bn||(Bn=!0,zn=me)}}function Vn(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function Ls(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Pa(n){if(Vn(n)!==n)throw Error(t(188))}function Lo(n){var i=n.alternate;if(!i){if(i=Vn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var h=o.return;if(h===null)break;var m=h.alternate;if(m===null){if(c=h.return,c!==null){o=c;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===o)return Pa(h),n;if(m===c)return Pa(h),i;m=m.sibling}throw Error(t(188))}if(o.return!==c.return)o=h,c=m;else{for(var b=!1,B=h.child;B;){if(B===o){b=!0,o=h,c=m;break}if(B===c){b=!0,c=h,o=m;break}B=B.sibling}if(!b){for(B=m.child;B;){if(B===o){b=!0,o=m,c=h;break}if(B===c){b=!0,c=m,o=h;break}B=B.sibling}if(!b)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function ns(n){return n=Lo(n),n!==null?Na(n):null}function Na(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Na(n);if(i!==null)return i;n=n.sibling}return null}var is=e.unstable_scheduleCallback,La=e.unstable_cancelCallback,Do=e.unstable_shouldYield,Dc=e.unstable_requestPaint,en=e.unstable_now,Ic=e.unstable_getCurrentPriorityLevel,Da=e.unstable_ImmediatePriority,R=e.unstable_UserBlockingPriority,ee=e.unstable_NormalPriority,pe=e.unstable_LowPriority,ue=e.unstable_IdlePriority,ce=null,Oe=null;function Ye(n){if(Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(ce,n,void 0,(n.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:ht,Qe=Math.log,nt=Math.LN2;function ht(n){return n>>>=0,n===0?32:31-(Qe(n)/nt|0)|0}var pt=64,et=4194304;function Pt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function jt(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,h=n.suspendedLanes,m=n.pingedLanes,b=o&268435455;if(b!==0){var B=b&~h;B!==0?c=Pt(B):(m&=b,m!==0&&(c=Pt(m)))}else b=o&~h,b!==0?c=Pt(b):m!==0&&(c=Pt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,m=i&-i,h>=m||h===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-Ie(i),h=1<<o,c|=n[o],i&=~h;return c}function Qt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vt(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,m=n.pendingLanes;0<m;){var b=31-Ie(m),B=1<<b,Y=h[b];Y===-1?((B&o)===0||(B&c)!==0)&&(h[b]=Qt(B,i)):Y<=i&&(n.expiredLanes|=B),m&=~B}}function un(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Xe(){var n=pt;return pt<<=1,(pt&4194240)===0&&(pt=64),n}function wn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function yt(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ie(i),n[i]=o}function $n(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var h=31-Ie(o),m=1<<h;i[h]=0,c[h]=-1,n[h]=-1,o&=~m}}function Zn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-Ie(o),h=1<<c;h&i|n[c]&i&&(n[c]|=i),o&=~h}}var St=0;function nr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ft,qt,Ri,Gt,Ci,zi=!1,rs=[],wr=null,Tr=null,br=null,Ia=new Map,Ua=new Map,Ar=[],ev="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wh(n,i){switch(n){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":Ia.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ua.delete(i.pointerId)}}function Fa(n,i,o,c,h,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[h]},i!==null&&(i=$a(i),i!==null&&qt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function tv(n,i,o,c,h){switch(i){case"focusin":return wr=Fa(wr,n,i,o,c,h),!0;case"dragenter":return Tr=Fa(Tr,n,i,o,c,h),!0;case"mouseover":return br=Fa(br,n,i,o,c,h),!0;case"pointerover":var m=h.pointerId;return Ia.set(m,Fa(Ia.get(m)||null,n,i,o,c,h)),!0;case"gotpointercapture":return m=h.pointerId,Ua.set(m,Fa(Ua.get(m)||null,n,i,o,c,h)),!0}return!1}function Th(n){var i=ss(n.target);if(i!==null){var o=Vn(i);if(o!==null){if(i=o.tag,i===13){if(i=Ls(o),i!==null){n.blockedOn=i,Ci(n.priority,function(){Ri(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Io(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Fc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);De=c,o.target.dispatchEvent(c),De=null}else return i=$a(o),i!==null&&qt(i),n.blockedOn=o,!1;i.shift()}return!0}function bh(n,i,o){Io(n)&&o.delete(i)}function nv(){zi=!1,wr!==null&&Io(wr)&&(wr=null),Tr!==null&&Io(Tr)&&(Tr=null),br!==null&&Io(br)&&(br=null),Ia.forEach(bh),Ua.forEach(bh)}function Oa(n,i){n.blockedOn===i&&(n.blockedOn=null,zi||(zi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,nv)))}function ka(n){function i(h){return Oa(h,n)}if(0<rs.length){Oa(rs[0],n);for(var o=1;o<rs.length;o++){var c=rs[o];c.blockedOn===n&&(c.blockedOn=null)}}for(wr!==null&&Oa(wr,n),Tr!==null&&Oa(Tr,n),br!==null&&Oa(br,n),Ia.forEach(i),Ua.forEach(i),o=0;o<Ar.length;o++)c=Ar[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<Ar.length&&(o=Ar[0],o.blockedOn===null);)Th(o),o.blockedOn===null&&Ar.shift()}var Ds=w.ReactCurrentBatchConfig,Uo=!0;function iv(n,i,o,c){var h=St,m=Ds.transition;Ds.transition=null;try{St=1,Uc(n,i,o,c)}finally{St=h,Ds.transition=m}}function rv(n,i,o,c){var h=St,m=Ds.transition;Ds.transition=null;try{St=4,Uc(n,i,o,c)}finally{St=h,Ds.transition=m}}function Uc(n,i,o,c){if(Uo){var h=Fc(n,i,o,c);if(h===null)Jc(n,i,c,Fo,o),wh(n,c);else if(tv(h,n,i,o,c))c.stopPropagation();else if(wh(n,c),i&4&&-1<ev.indexOf(n)){for(;h!==null;){var m=$a(h);if(m!==null&&Ft(m),m=Fc(n,i,o,c),m===null&&Jc(n,i,c,Fo,o),m===h)break;h=m}h!==null&&c.stopPropagation()}else Jc(n,i,c,null,o)}}var Fo=null;function Fc(n,i,o,c){if(Fo=null,n=se(c),n=ss(n),n!==null)if(i=Vn(n),i===null)n=null;else if(o=i.tag,o===13){if(n=Ls(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Fo=n,null}function Ah(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ic()){case Da:return 1;case R:return 4;case ee:case pe:return 16;case ue:return 536870912;default:return 16}default:return 16}}var Rr=null,Oc=null,Oo=null;function Rh(){if(Oo)return Oo;var n,i=Oc,o=i.length,c,h="value"in Rr?Rr.value:Rr.textContent,m=h.length;for(n=0;n<o&&i[n]===h[n];n++);var b=o-n;for(c=1;c<=b&&i[o-c]===h[m-c];c++);return Oo=h.slice(n,1<c?1-c:void 0)}function ko(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Bo(){return!0}function Ch(){return!1}function oi(n){function i(o,c,h,m,b){this._reactName=o,this._targetInst=h,this.type=c,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(o=n[B],this[B]=o?o(m):m[B]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Bo:Ch,this.isPropagationStopped=Ch,this}return ie(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Bo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Bo)},persist:function(){},isPersistent:Bo}),i}var Is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kc=oi(Is),Ba=ie({},Is,{view:0,detail:0}),sv=oi(Ba),Bc,zc,za,zo=ie({},Ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==za&&(za&&n.type==="mousemove"?(Bc=n.screenX-za.screenX,zc=n.screenY-za.screenY):zc=Bc=0,za=n),Bc)},movementY:function(n){return"movementY"in n?n.movementY:zc}}),Ph=oi(zo),av=ie({},zo,{dataTransfer:0}),ov=oi(av),lv=ie({},Ba,{relatedTarget:0}),Vc=oi(lv),cv=ie({},Is,{animationName:0,elapsedTime:0,pseudoElement:0}),uv=oi(cv),dv=ie({},Is,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),fv=oi(dv),hv=ie({},Is,{data:0}),Nh=oi(hv),pv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=gv[n])?!!i[n]:!1}function Gc(){return vv}var xv=ie({},Ba,{key:function(n){if(n.key){var i=pv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ko(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?mv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gc,charCode:function(n){return n.type==="keypress"?ko(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ko(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),_v=oi(xv),yv=ie({},zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lh=oi(yv),Sv=ie({},Ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gc}),Mv=oi(Sv),Ev=ie({},Is,{propertyName:0,elapsedTime:0,pseudoElement:0}),wv=oi(Ev),Tv=ie({},zo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),bv=oi(Tv),Av=[9,13,27,32],Hc=f&&"CompositionEvent"in window,Va=null;f&&"documentMode"in document&&(Va=document.documentMode);var Rv=f&&"TextEvent"in window&&!Va,Dh=f&&(!Hc||Va&&8<Va&&11>=Va),Ih=" ",Uh=!1;function Fh(n,i){switch(n){case"keyup":return Av.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Us=!1;function Cv(n,i){switch(n){case"compositionend":return Oh(i);case"keypress":return i.which!==32?null:(Uh=!0,Ih);case"textInput":return n=i.data,n===Ih&&Uh?null:n;default:return null}}function Pv(n,i){if(Us)return n==="compositionend"||!Hc&&Fh(n,i)?(n=Rh(),Oo=Oc=Rr=null,Us=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Dh&&i.locale!=="ko"?null:i.data;default:return null}}var Nv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Nv[n.type]:i==="textarea"}function Bh(n,i,o,c){X(c),i=Xo(i,"onChange"),0<i.length&&(o=new kc("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var Ga=null,Ha=null;function Lv(n){ip(n,0)}function Vo(n){var i=zs(n);if(lt(i))return n}function Dv(n,i){if(n==="change")return i}var zh=!1;if(f){var Wc;if(f){var Xc="oninput"in document;if(!Xc){var Vh=document.createElement("div");Vh.setAttribute("oninput","return;"),Xc=typeof Vh.oninput=="function"}Wc=Xc}else Wc=!1;zh=Wc&&(!document.documentMode||9<document.documentMode)}function Gh(){Ga&&(Ga.detachEvent("onpropertychange",Hh),Ha=Ga=null)}function Hh(n){if(n.propertyName==="value"&&Vo(Ha)){var i=[];Bh(i,Ha,n,se(n)),He(Lv,i)}}function Iv(n,i,o){n==="focusin"?(Gh(),Ga=i,Ha=o,Ga.attachEvent("onpropertychange",Hh)):n==="focusout"&&Gh()}function Uv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Vo(Ha)}function Fv(n,i){if(n==="click")return Vo(i)}function Ov(n,i){if(n==="input"||n==="change")return Vo(i)}function kv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Pi=typeof Object.is=="function"?Object.is:kv;function Wa(n,i){if(Pi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var h=o[c];if(!d.call(i,h)||!Pi(n[h],i[h]))return!1}return!0}function Wh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Xh(n,i){var o=Wh(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Wh(o)}}function jh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?jh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Yh(){for(var n=window,i=$e();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=$e(n.document)}return i}function jc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Bv(n){var i=Yh(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&jh(o.ownerDocument.documentElement,o)){if(c!==null&&jc(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=o.textContent.length,m=Math.min(c.start,h);c=c.end===void 0?m:Math.min(c.end,h),!n.extend&&m>c&&(h=c,c=m,m=h),h=Xh(o,m);var b=Xh(o,c);h&&b&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==b.node||n.focusOffset!==b.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(b.node,b.offset)):(i.setEnd(b.node,b.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var zv=f&&"documentMode"in document&&11>=document.documentMode,Fs=null,Yc=null,Xa=null,qc=!1;function qh(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;qc||Fs==null||Fs!==$e(c)||(c=Fs,"selectionStart"in c&&jc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Xa&&Wa(Xa,c)||(Xa=c,c=Xo(Yc,"onSelect"),0<c.length&&(i=new kc("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=Fs)))}function Go(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var Os={animationend:Go("Animation","AnimationEnd"),animationiteration:Go("Animation","AnimationIteration"),animationstart:Go("Animation","AnimationStart"),transitionend:Go("Transition","TransitionEnd")},Kc={},Kh={};f&&(Kh=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Ho(n){if(Kc[n])return Kc[n];if(!Os[n])return n;var i=Os[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Kh)return Kc[n]=i[o];return n}var $h=Ho("animationend"),Zh=Ho("animationiteration"),Qh=Ho("animationstart"),Jh=Ho("transitionend"),ep=new Map,tp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(n,i){ep.set(n,i),l(i,[n])}for(var $c=0;$c<tp.length;$c++){var Zc=tp[$c],Vv=Zc.toLowerCase(),Gv=Zc[0].toUpperCase()+Zc.slice(1);Cr(Vv,"on"+Gv)}Cr($h,"onAnimationEnd"),Cr(Zh,"onAnimationIteration"),Cr(Qh,"onAnimationStart"),Cr("dblclick","onDoubleClick"),Cr("focusin","onFocus"),Cr("focusout","onBlur"),Cr(Jh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ja));function np(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,ts(c,i,void 0,n),n.currentTarget=null}function ip(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],h=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var b=c.length-1;0<=b;b--){var B=c[b],Y=B.instance,me=B.currentTarget;if(B=B.listener,Y!==m&&h.isPropagationStopped())break e;np(h,B,me),m=Y}else for(b=0;b<c.length;b++){if(B=c[b],Y=B.instance,me=B.currentTarget,B=B.listener,Y!==m&&h.isPropagationStopped())break e;np(h,B,me),m=Y}}}if(Bn)throw n=zn,Bn=!1,zn=null,n}function Kt(n,i){var o=i[su];o===void 0&&(o=i[su]=new Set);var c=n+"__bubble";o.has(c)||(rp(i,n,2,!1),o.add(c))}function Qc(n,i,o){var c=0;i&&(c|=4),rp(o,n,c,i)}var Wo="_reactListening"+Math.random().toString(36).slice(2);function Ya(n){if(!n[Wo]){n[Wo]=!0,r.forEach(function(o){o!=="selectionchange"&&(Hv.has(o)||Qc(o,!1,n),Qc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Wo]||(i[Wo]=!0,Qc("selectionchange",!1,i))}}function rp(n,i,o,c){switch(Ah(i)){case 1:var h=iv;break;case 4:h=rv;break;default:h=Uc}o=h.bind(null,i,o,n),h=void 0,!Nt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,o,{capture:!0,passive:h}):n.addEventListener(i,o,!0):h!==void 0?n.addEventListener(i,o,{passive:h}):n.addEventListener(i,o,!1)}function Jc(n,i,o,c,h){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var B=c.stateNode.containerInfo;if(B===h||B.nodeType===8&&B.parentNode===h)break;if(b===4)for(b=c.return;b!==null;){var Y=b.tag;if((Y===3||Y===4)&&(Y=b.stateNode.containerInfo,Y===h||Y.nodeType===8&&Y.parentNode===h))return;b=b.return}for(;B!==null;){if(b=ss(B),b===null)return;if(Y=b.tag,Y===5||Y===6){c=m=b;continue e}B=B.parentNode}}c=c.return}He(function(){var me=m,Ae=se(o),Ce=[];e:{var be=ep.get(n);if(be!==void 0){var je=kc,Ze=n;switch(n){case"keypress":if(ko(o)===0)break e;case"keydown":case"keyup":je=_v;break;case"focusin":Ze="focus",je=Vc;break;case"focusout":Ze="blur",je=Vc;break;case"beforeblur":case"afterblur":je=Vc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":je=Ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":je=ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":je=Mv;break;case $h:case Zh:case Qh:je=uv;break;case Jh:je=wv;break;case"scroll":je=sv;break;case"wheel":je=bv;break;case"copy":case"cut":case"paste":je=fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":je=Lh}var Je=(i&4)!==0,ln=!Je&&n==="scroll",oe=Je?be!==null?be+"Capture":null:be;Je=[];for(var Q=me,de;Q!==null;){de=Q;var Pe=de.stateNode;if(de.tag===5&&Pe!==null&&(de=Pe,oe!==null&&(Pe=Ct(Q,oe),Pe!=null&&Je.push(qa(Q,Pe,de)))),ln)break;Q=Q.return}0<Je.length&&(be=new je(be,Ze,null,o,Ae),Ce.push({event:be,listeners:Je}))}}if((i&7)===0){e:{if(be=n==="mouseover"||n==="pointerover",je=n==="mouseout"||n==="pointerout",be&&o!==De&&(Ze=o.relatedTarget||o.fromElement)&&(ss(Ze)||Ze[ir]))break e;if((je||be)&&(be=Ae.window===Ae?Ae:(be=Ae.ownerDocument)?be.defaultView||be.parentWindow:window,je?(Ze=o.relatedTarget||o.toElement,je=me,Ze=Ze?ss(Ze):null,Ze!==null&&(ln=Vn(Ze),Ze!==ln||Ze.tag!==5&&Ze.tag!==6)&&(Ze=null)):(je=null,Ze=me),je!==Ze)){if(Je=Ph,Pe="onMouseLeave",oe="onMouseEnter",Q="mouse",(n==="pointerout"||n==="pointerover")&&(Je=Lh,Pe="onPointerLeave",oe="onPointerEnter",Q="pointer"),ln=je==null?be:zs(je),de=Ze==null?be:zs(Ze),be=new Je(Pe,Q+"leave",je,o,Ae),be.target=ln,be.relatedTarget=de,Pe=null,ss(Ae)===me&&(Je=new Je(oe,Q+"enter",Ze,o,Ae),Je.target=de,Je.relatedTarget=ln,Pe=Je),ln=Pe,je&&Ze)t:{for(Je=je,oe=Ze,Q=0,de=Je;de;de=ks(de))Q++;for(de=0,Pe=oe;Pe;Pe=ks(Pe))de++;for(;0<Q-de;)Je=ks(Je),Q--;for(;0<de-Q;)oe=ks(oe),de--;for(;Q--;){if(Je===oe||oe!==null&&Je===oe.alternate)break t;Je=ks(Je),oe=ks(oe)}Je=null}else Je=null;je!==null&&sp(Ce,be,je,Je,!1),Ze!==null&&ln!==null&&sp(Ce,ln,Ze,Je,!0)}}e:{if(be=me?zs(me):window,je=be.nodeName&&be.nodeName.toLowerCase(),je==="select"||je==="input"&&be.type==="file")var tt=Dv;else if(kh(be))if(zh)tt=Ov;else{tt=Uv;var at=Iv}else(je=be.nodeName)&&je.toLowerCase()==="input"&&(be.type==="checkbox"||be.type==="radio")&&(tt=Fv);if(tt&&(tt=tt(n,me))){Bh(Ce,tt,o,Ae);break e}at&&at(n,be,me),n==="focusout"&&(at=be._wrapperState)&&at.controlled&&be.type==="number"&&It(be,"number",be.value)}switch(at=me?zs(me):window,n){case"focusin":(kh(at)||at.contentEditable==="true")&&(Fs=at,Yc=me,Xa=null);break;case"focusout":Xa=Yc=Fs=null;break;case"mousedown":qc=!0;break;case"contextmenu":case"mouseup":case"dragend":qc=!1,qh(Ce,o,Ae);break;case"selectionchange":if(zv)break;case"keydown":case"keyup":qh(Ce,o,Ae)}var ot;if(Hc)e:{switch(n){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else Us?Fh(n,o)&&(ut="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ut="onCompositionStart");ut&&(Dh&&o.locale!=="ko"&&(Us||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&Us&&(ot=Rh()):(Rr=Ae,Oc="value"in Rr?Rr.value:Rr.textContent,Us=!0)),at=Xo(me,ut),0<at.length&&(ut=new Nh(ut,n,null,o,Ae),Ce.push({event:ut,listeners:at}),ot?ut.data=ot:(ot=Oh(o),ot!==null&&(ut.data=ot)))),(ot=Rv?Cv(n,o):Pv(n,o))&&(me=Xo(me,"onBeforeInput"),0<me.length&&(Ae=new Nh("onBeforeInput","beforeinput",null,o,Ae),Ce.push({event:Ae,listeners:me}),Ae.data=ot))}ip(Ce,i)})}function qa(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Xo(n,i){for(var o=i+"Capture",c=[];n!==null;){var h=n,m=h.stateNode;h.tag===5&&m!==null&&(h=m,m=Ct(n,o),m!=null&&c.unshift(qa(n,m,h)),m=Ct(n,i),m!=null&&c.push(qa(n,m,h))),n=n.return}return c}function ks(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function sp(n,i,o,c,h){for(var m=i._reactName,b=[];o!==null&&o!==c;){var B=o,Y=B.alternate,me=B.stateNode;if(Y!==null&&Y===c)break;B.tag===5&&me!==null&&(B=me,h?(Y=Ct(o,m),Y!=null&&b.unshift(qa(o,Y,B))):h||(Y=Ct(o,m),Y!=null&&b.push(qa(o,Y,B)))),o=o.return}b.length!==0&&n.push({event:i,listeners:b})}var Wv=/\r\n?/g,Xv=/\u0000|\uFFFD/g;function ap(n){return(typeof n=="string"?n:""+n).replace(Wv,`
`).replace(Xv,"")}function jo(n,i,o){if(i=ap(i),ap(n)!==i&&o)throw Error(t(425))}function Yo(){}var eu=null,tu=null;function nu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var iu=typeof setTimeout=="function"?setTimeout:void 0,jv=typeof clearTimeout=="function"?clearTimeout:void 0,op=typeof Promise=="function"?Promise:void 0,Yv=typeof queueMicrotask=="function"?queueMicrotask:typeof op<"u"?function(n){return op.resolve(null).then(n).catch(qv)}:iu;function qv(n){setTimeout(function(){throw n})}function ru(n,i){var o=i,c=0;do{var h=o.nextSibling;if(n.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(c===0){n.removeChild(h),ka(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=h}while(o);ka(i)}function Pr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function lp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var Bs=Math.random().toString(36).slice(2),Vi="__reactFiber$"+Bs,Ka="__reactProps$"+Bs,ir="__reactContainer$"+Bs,su="__reactEvents$"+Bs,Kv="__reactListeners$"+Bs,$v="__reactHandles$"+Bs;function ss(n){var i=n[Vi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[ir]||o[Vi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=lp(n);n!==null;){if(o=n[Vi])return o;n=lp(n)}return i}n=o,o=n.parentNode}return null}function $a(n){return n=n[Vi]||n[ir],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function zs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function qo(n){return n[Ka]||null}var au=[],Vs=-1;function Nr(n){return{current:n}}function $t(n){0>Vs||(n.current=au[Vs],au[Vs]=null,Vs--)}function Yt(n,i){Vs++,au[Vs]=n.current,n.current=i}var Lr={},Cn=Nr(Lr),Qn=Nr(!1),as=Lr;function Gs(n,i){var o=n.type.contextTypes;if(!o)return Lr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},m;for(m in o)h[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function Jn(n){return n=n.childContextTypes,n!=null}function Ko(){$t(Qn),$t(Cn)}function cp(n,i,o){if(Cn.current!==Lr)throw Error(t(168));Yt(Cn,i),Yt(Qn,o)}function up(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,ye(n)||"Unknown",h));return ie({},o,c)}function $o(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Lr,as=Cn.current,Yt(Cn,n),Yt(Qn,Qn.current),!0}function dp(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=up(n,i,as),c.__reactInternalMemoizedMergedChildContext=n,$t(Qn),$t(Cn),Yt(Cn,n)):$t(Qn),Yt(Qn,o)}var rr=null,Zo=!1,ou=!1;function fp(n){rr===null?rr=[n]:rr.push(n)}function Zv(n){Zo=!0,fp(n)}function Dr(){if(!ou&&rr!==null){ou=!0;var n=0,i=St;try{var o=rr;for(St=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}rr=null,Zo=!1}catch(h){throw rr!==null&&(rr=rr.slice(n+1)),is(Da,Dr),h}finally{St=i,ou=!1}}return null}var Hs=[],Ws=0,Qo=null,Jo=0,xi=[],_i=0,os=null,sr=1,ar="";function ls(n,i){Hs[Ws++]=Jo,Hs[Ws++]=Qo,Qo=n,Jo=i}function hp(n,i,o){xi[_i++]=sr,xi[_i++]=ar,xi[_i++]=os,os=n;var c=sr;n=ar;var h=32-Ie(c)-1;c&=~(1<<h),o+=1;var m=32-Ie(i)+h;if(30<m){var b=h-h%5;m=(c&(1<<b)-1).toString(32),c>>=b,h-=b,sr=1<<32-Ie(i)+h|o<<h|c,ar=m+n}else sr=1<<m|o<<h|c,ar=n}function lu(n){n.return!==null&&(ls(n,1),hp(n,1,0))}function cu(n){for(;n===Qo;)Qo=Hs[--Ws],Hs[Ws]=null,Jo=Hs[--Ws],Hs[Ws]=null;for(;n===os;)os=xi[--_i],xi[_i]=null,ar=xi[--_i],xi[_i]=null,sr=xi[--_i],xi[_i]=null}var li=null,ci=null,Jt=!1,Ni=null;function pp(n,i){var o=Ei(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function mp(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,li=n,ci=Pr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,li=n,ci=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=os!==null?{id:sr,overflow:ar}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Ei(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,li=n,ci=null,!0):!1;default:return!1}}function uu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function du(n){if(Jt){var i=ci;if(i){var o=i;if(!mp(n,i)){if(uu(n))throw Error(t(418));i=Pr(o.nextSibling);var c=li;i&&mp(n,i)?pp(c,o):(n.flags=n.flags&-4097|2,Jt=!1,li=n)}}else{if(uu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Jt=!1,li=n}}}function gp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;li=n}function el(n){if(n!==li)return!1;if(!Jt)return gp(n),Jt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!nu(n.type,n.memoizedProps)),i&&(i=ci)){if(uu(n))throw vp(),Error(t(418));for(;i;)pp(n,i),i=Pr(i.nextSibling)}if(gp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){ci=Pr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}ci=null}}else ci=li?Pr(n.stateNode.nextSibling):null;return!0}function vp(){for(var n=ci;n;)n=Pr(n.nextSibling)}function Xs(){ci=li=null,Jt=!1}function fu(n){Ni===null?Ni=[n]:Ni.push(n)}var Qv=w.ReactCurrentBatchConfig;function Za(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var h=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(b){var B=h.refs;b===null?delete B[m]:B[m]=b},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function tl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function xp(n){var i=n._init;return i(n._payload)}function _p(n){function i(oe,Q){if(n){var de=oe.deletions;de===null?(oe.deletions=[Q],oe.flags|=16):de.push(Q)}}function o(oe,Q){if(!n)return null;for(;Q!==null;)i(oe,Q),Q=Q.sibling;return null}function c(oe,Q){for(oe=new Map;Q!==null;)Q.key!==null?oe.set(Q.key,Q):oe.set(Q.index,Q),Q=Q.sibling;return oe}function h(oe,Q){return oe=Vr(oe,Q),oe.index=0,oe.sibling=null,oe}function m(oe,Q,de){return oe.index=de,n?(de=oe.alternate,de!==null?(de=de.index,de<Q?(oe.flags|=2,Q):de):(oe.flags|=2,Q)):(oe.flags|=1048576,Q)}function b(oe){return n&&oe.alternate===null&&(oe.flags|=2),oe}function B(oe,Q,de,Pe){return Q===null||Q.tag!==6?(Q=id(de,oe.mode,Pe),Q.return=oe,Q):(Q=h(Q,de),Q.return=oe,Q)}function Y(oe,Q,de,Pe){var tt=de.type;return tt===k?Ae(oe,Q,de.props.children,Pe,de.key):Q!==null&&(Q.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===z&&xp(tt)===Q.type)?(Pe=h(Q,de.props),Pe.ref=Za(oe,Q,de),Pe.return=oe,Pe):(Pe=Tl(de.type,de.key,de.props,null,oe.mode,Pe),Pe.ref=Za(oe,Q,de),Pe.return=oe,Pe)}function me(oe,Q,de,Pe){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==de.containerInfo||Q.stateNode.implementation!==de.implementation?(Q=rd(de,oe.mode,Pe),Q.return=oe,Q):(Q=h(Q,de.children||[]),Q.return=oe,Q)}function Ae(oe,Q,de,Pe,tt){return Q===null||Q.tag!==7?(Q=gs(de,oe.mode,Pe,tt),Q.return=oe,Q):(Q=h(Q,de),Q.return=oe,Q)}function Ce(oe,Q,de){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Q=id(""+Q,oe.mode,de),Q.return=oe,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case P:return de=Tl(Q.type,Q.key,Q.props,null,oe.mode,de),de.ref=Za(oe,null,Q),de.return=oe,de;case D:return Q=rd(Q,oe.mode,de),Q.return=oe,Q;case z:var Pe=Q._init;return Ce(oe,Pe(Q._payload),de)}if(Ut(Q)||K(Q))return Q=gs(Q,oe.mode,de,null),Q.return=oe,Q;tl(oe,Q)}return null}function be(oe,Q,de,Pe){var tt=Q!==null?Q.key:null;if(typeof de=="string"&&de!==""||typeof de=="number")return tt!==null?null:B(oe,Q,""+de,Pe);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case P:return de.key===tt?Y(oe,Q,de,Pe):null;case D:return de.key===tt?me(oe,Q,de,Pe):null;case z:return tt=de._init,be(oe,Q,tt(de._payload),Pe)}if(Ut(de)||K(de))return tt!==null?null:Ae(oe,Q,de,Pe,null);tl(oe,de)}return null}function je(oe,Q,de,Pe,tt){if(typeof Pe=="string"&&Pe!==""||typeof Pe=="number")return oe=oe.get(de)||null,B(Q,oe,""+Pe,tt);if(typeof Pe=="object"&&Pe!==null){switch(Pe.$$typeof){case P:return oe=oe.get(Pe.key===null?de:Pe.key)||null,Y(Q,oe,Pe,tt);case D:return oe=oe.get(Pe.key===null?de:Pe.key)||null,me(Q,oe,Pe,tt);case z:var at=Pe._init;return je(oe,Q,de,at(Pe._payload),tt)}if(Ut(Pe)||K(Pe))return oe=oe.get(de)||null,Ae(Q,oe,Pe,tt,null);tl(Q,Pe)}return null}function Ze(oe,Q,de,Pe){for(var tt=null,at=null,ot=Q,ut=Q=0,Mn=null;ot!==null&&ut<de.length;ut++){ot.index>ut?(Mn=ot,ot=null):Mn=ot.sibling;var Dt=be(oe,ot,de[ut],Pe);if(Dt===null){ot===null&&(ot=Mn);break}n&&ot&&Dt.alternate===null&&i(oe,ot),Q=m(Dt,Q,ut),at===null?tt=Dt:at.sibling=Dt,at=Dt,ot=Mn}if(ut===de.length)return o(oe,ot),Jt&&ls(oe,ut),tt;if(ot===null){for(;ut<de.length;ut++)ot=Ce(oe,de[ut],Pe),ot!==null&&(Q=m(ot,Q,ut),at===null?tt=ot:at.sibling=ot,at=ot);return Jt&&ls(oe,ut),tt}for(ot=c(oe,ot);ut<de.length;ut++)Mn=je(ot,oe,ut,de[ut],Pe),Mn!==null&&(n&&Mn.alternate!==null&&ot.delete(Mn.key===null?ut:Mn.key),Q=m(Mn,Q,ut),at===null?tt=Mn:at.sibling=Mn,at=Mn);return n&&ot.forEach(function(Gr){return i(oe,Gr)}),Jt&&ls(oe,ut),tt}function Je(oe,Q,de,Pe){var tt=K(de);if(typeof tt!="function")throw Error(t(150));if(de=tt.call(de),de==null)throw Error(t(151));for(var at=tt=null,ot=Q,ut=Q=0,Mn=null,Dt=de.next();ot!==null&&!Dt.done;ut++,Dt=de.next()){ot.index>ut?(Mn=ot,ot=null):Mn=ot.sibling;var Gr=be(oe,ot,Dt.value,Pe);if(Gr===null){ot===null&&(ot=Mn);break}n&&ot&&Gr.alternate===null&&i(oe,ot),Q=m(Gr,Q,ut),at===null?tt=Gr:at.sibling=Gr,at=Gr,ot=Mn}if(Dt.done)return o(oe,ot),Jt&&ls(oe,ut),tt;if(ot===null){for(;!Dt.done;ut++,Dt=de.next())Dt=Ce(oe,Dt.value,Pe),Dt!==null&&(Q=m(Dt,Q,ut),at===null?tt=Dt:at.sibling=Dt,at=Dt);return Jt&&ls(oe,ut),tt}for(ot=c(oe,ot);!Dt.done;ut++,Dt=de.next())Dt=je(ot,oe,ut,Dt.value,Pe),Dt!==null&&(n&&Dt.alternate!==null&&ot.delete(Dt.key===null?ut:Dt.key),Q=m(Dt,Q,ut),at===null?tt=Dt:at.sibling=Dt,at=Dt);return n&&ot.forEach(function(Nx){return i(oe,Nx)}),Jt&&ls(oe,ut),tt}function ln(oe,Q,de,Pe){if(typeof de=="object"&&de!==null&&de.type===k&&de.key===null&&(de=de.props.children),typeof de=="object"&&de!==null){switch(de.$$typeof){case P:e:{for(var tt=de.key,at=Q;at!==null;){if(at.key===tt){if(tt=de.type,tt===k){if(at.tag===7){o(oe,at.sibling),Q=h(at,de.props.children),Q.return=oe,oe=Q;break e}}else if(at.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===z&&xp(tt)===at.type){o(oe,at.sibling),Q=h(at,de.props),Q.ref=Za(oe,at,de),Q.return=oe,oe=Q;break e}o(oe,at);break}else i(oe,at);at=at.sibling}de.type===k?(Q=gs(de.props.children,oe.mode,Pe,de.key),Q.return=oe,oe=Q):(Pe=Tl(de.type,de.key,de.props,null,oe.mode,Pe),Pe.ref=Za(oe,Q,de),Pe.return=oe,oe=Pe)}return b(oe);case D:e:{for(at=de.key;Q!==null;){if(Q.key===at)if(Q.tag===4&&Q.stateNode.containerInfo===de.containerInfo&&Q.stateNode.implementation===de.implementation){o(oe,Q.sibling),Q=h(Q,de.children||[]),Q.return=oe,oe=Q;break e}else{o(oe,Q);break}else i(oe,Q);Q=Q.sibling}Q=rd(de,oe.mode,Pe),Q.return=oe,oe=Q}return b(oe);case z:return at=de._init,ln(oe,Q,at(de._payload),Pe)}if(Ut(de))return Ze(oe,Q,de,Pe);if(K(de))return Je(oe,Q,de,Pe);tl(oe,de)}return typeof de=="string"&&de!==""||typeof de=="number"?(de=""+de,Q!==null&&Q.tag===6?(o(oe,Q.sibling),Q=h(Q,de),Q.return=oe,oe=Q):(o(oe,Q),Q=id(de,oe.mode,Pe),Q.return=oe,oe=Q),b(oe)):o(oe,Q)}return ln}var js=_p(!0),yp=_p(!1),nl=Nr(null),il=null,Ys=null,hu=null;function pu(){hu=Ys=il=null}function mu(n){var i=nl.current;$t(nl),n._currentValue=i}function gu(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function qs(n,i){il=n,hu=Ys=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(ei=!0),n.firstContext=null)}function yi(n){var i=n._currentValue;if(hu!==n)if(n={context:n,memoizedValue:i,next:null},Ys===null){if(il===null)throw Error(t(308));Ys=n,il.dependencies={lanes:0,firstContext:n}}else Ys=Ys.next=n;return i}var cs=null;function vu(n){cs===null?cs=[n]:cs.push(n)}function Sp(n,i,o,c){var h=i.interleaved;return h===null?(o.next=o,vu(i)):(o.next=h.next,h.next=o),i.interleaved=o,or(n,c)}function or(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Ir=!1;function xu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function lr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Ur(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Lt&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,or(n,o)}return h=c.interleaved,h===null?(i.next=i,vu(c)):(i.next=h.next,h.next=i),c.interleaved=i,or(n,o)}function rl(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Zn(n,o)}}function Ep(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var h=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var b={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?h=m=b:m=m.next=b,o=o.next}while(o!==null);m===null?h=m=i:m=m.next=i}else h=m=i;o={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function sl(n,i,o,c){var h=n.updateQueue;Ir=!1;var m=h.firstBaseUpdate,b=h.lastBaseUpdate,B=h.shared.pending;if(B!==null){h.shared.pending=null;var Y=B,me=Y.next;Y.next=null,b===null?m=me:b.next=me,b=Y;var Ae=n.alternate;Ae!==null&&(Ae=Ae.updateQueue,B=Ae.lastBaseUpdate,B!==b&&(B===null?Ae.firstBaseUpdate=me:B.next=me,Ae.lastBaseUpdate=Y))}if(m!==null){var Ce=h.baseState;b=0,Ae=me=Y=null,B=m;do{var be=B.lane,je=B.eventTime;if((c&be)===be){Ae!==null&&(Ae=Ae.next={eventTime:je,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var Ze=n,Je=B;switch(be=i,je=o,Je.tag){case 1:if(Ze=Je.payload,typeof Ze=="function"){Ce=Ze.call(je,Ce,be);break e}Ce=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=Je.payload,be=typeof Ze=="function"?Ze.call(je,Ce,be):Ze,be==null)break e;Ce=ie({},Ce,be);break e;case 2:Ir=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,be=h.effects,be===null?h.effects=[B]:be.push(B))}else je={eventTime:je,lane:be,tag:B.tag,payload:B.payload,callback:B.callback,next:null},Ae===null?(me=Ae=je,Y=Ce):Ae=Ae.next=je,b|=be;if(B=B.next,B===null){if(B=h.shared.pending,B===null)break;be=B,B=be.next,be.next=null,h.lastBaseUpdate=be,h.shared.pending=null}}while(!0);if(Ae===null&&(Y=Ce),h.baseState=Y,h.firstBaseUpdate=me,h.lastBaseUpdate=Ae,i=h.shared.interleaved,i!==null){h=i;do b|=h.lane,h=h.next;while(h!==i)}else m===null&&(h.shared.lanes=0);fs|=b,n.lanes=b,n.memoizedState=Ce}}function wp(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=o,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var Qa={},Gi=Nr(Qa),Ja=Nr(Qa),eo=Nr(Qa);function us(n){if(n===Qa)throw Error(t(174));return n}function _u(n,i){switch(Yt(eo,i),Yt(Ja,n),Yt(Gi,Qa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:M(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=M(i,n)}$t(Gi),Yt(Gi,i)}function Ks(){$t(Gi),$t(Ja),$t(eo)}function Tp(n){us(eo.current);var i=us(Gi.current),o=M(i,n.type);i!==o&&(Yt(Ja,n),Yt(Gi,o))}function yu(n){Ja.current===n&&($t(Gi),$t(Ja))}var tn=Nr(0);function al(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Su=[];function Mu(){for(var n=0;n<Su.length;n++)Su[n]._workInProgressVersionPrimary=null;Su.length=0}var ol=w.ReactCurrentDispatcher,Eu=w.ReactCurrentBatchConfig,ds=0,nn=null,mn=null,yn=null,ll=!1,to=!1,no=0,Jv=0;function Pn(){throw Error(t(321))}function wu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Pi(n[o],i[o]))return!1;return!0}function Tu(n,i,o,c,h,m){if(ds=m,nn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ol.current=n===null||n.memoizedState===null?ix:rx,n=o(c,h),to){m=0;do{if(to=!1,no=0,25<=m)throw Error(t(301));m+=1,yn=mn=null,i.updateQueue=null,ol.current=sx,n=o(c,h)}while(to)}if(ol.current=dl,i=mn!==null&&mn.next!==null,ds=0,yn=mn=nn=null,ll=!1,i)throw Error(t(300));return n}function bu(){var n=no!==0;return no=0,n}function Hi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?nn.memoizedState=yn=n:yn=yn.next=n,yn}function Si(){if(mn===null){var n=nn.alternate;n=n!==null?n.memoizedState:null}else n=mn.next;var i=yn===null?nn.memoizedState:yn.next;if(i!==null)yn=i,mn=n;else{if(n===null)throw Error(t(310));mn=n,n={memoizedState:mn.memoizedState,baseState:mn.baseState,baseQueue:mn.baseQueue,queue:mn.queue,next:null},yn===null?nn.memoizedState=yn=n:yn=yn.next=n}return yn}function io(n,i){return typeof i=="function"?i(n):i}function Au(n){var i=Si(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=mn,h=c.baseQueue,m=o.pending;if(m!==null){if(h!==null){var b=h.next;h.next=m.next,m.next=b}c.baseQueue=h=m,o.pending=null}if(h!==null){m=h.next,c=c.baseState;var B=b=null,Y=null,me=m;do{var Ae=me.lane;if((ds&Ae)===Ae)Y!==null&&(Y=Y.next={lane:0,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null}),c=me.hasEagerState?me.eagerState:n(c,me.action);else{var Ce={lane:Ae,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null};Y===null?(B=Y=Ce,b=c):Y=Y.next=Ce,nn.lanes|=Ae,fs|=Ae}me=me.next}while(me!==null&&me!==m);Y===null?b=c:Y.next=B,Pi(c,i.memoizedState)||(ei=!0),i.memoizedState=c,i.baseState=b,i.baseQueue=Y,o.lastRenderedState=c}if(n=o.interleaved,n!==null){h=n;do m=h.lane,nn.lanes|=m,fs|=m,h=h.next;while(h!==n)}else h===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Ru(n){var i=Si(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,h=o.pending,m=i.memoizedState;if(h!==null){o.pending=null;var b=h=h.next;do m=n(m,b.action),b=b.next;while(b!==h);Pi(m,i.memoizedState)||(ei=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,c]}function bp(){}function Ap(n,i){var o=nn,c=Si(),h=i(),m=!Pi(c.memoizedState,h);if(m&&(c.memoizedState=h,ei=!0),c=c.queue,Cu(Pp.bind(null,o,c,n),[n]),c.getSnapshot!==i||m||yn!==null&&yn.memoizedState.tag&1){if(o.flags|=2048,ro(9,Cp.bind(null,o,c,h,i),void 0,null),Sn===null)throw Error(t(349));(ds&30)!==0||Rp(o,i,h)}return h}function Rp(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=nn.updateQueue,i===null?(i={lastEffect:null,stores:null},nn.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Cp(n,i,o,c){i.value=o,i.getSnapshot=c,Np(i)&&Lp(n)}function Pp(n,i,o){return o(function(){Np(i)&&Lp(n)})}function Np(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Pi(n,o)}catch{return!0}}function Lp(n){var i=or(n,1);i!==null&&Ui(i,n,1,-1)}function Dp(n){var i=Hi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:io,lastRenderedState:n},i.queue=n,n=n.dispatch=nx.bind(null,nn,n),[i.memoizedState,n]}function ro(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=nn.updateQueue,i===null?(i={lastEffect:null,stores:null},nn.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function Ip(){return Si().memoizedState}function cl(n,i,o,c){var h=Hi();nn.flags|=n,h.memoizedState=ro(1|i,o,void 0,c===void 0?null:c)}function ul(n,i,o,c){var h=Si();c=c===void 0?null:c;var m=void 0;if(mn!==null){var b=mn.memoizedState;if(m=b.destroy,c!==null&&wu(c,b.deps)){h.memoizedState=ro(i,o,m,c);return}}nn.flags|=n,h.memoizedState=ro(1|i,o,m,c)}function Up(n,i){return cl(8390656,8,n,i)}function Cu(n,i){return ul(2048,8,n,i)}function Fp(n,i){return ul(4,2,n,i)}function Op(n,i){return ul(4,4,n,i)}function kp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Bp(n,i,o){return o=o!=null?o.concat([n]):null,ul(4,4,kp.bind(null,i,n),o)}function Pu(){}function zp(n,i){var o=Si();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&wu(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function Vp(n,i){var o=Si();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&wu(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function Gp(n,i,o){return(ds&21)===0?(n.baseState&&(n.baseState=!1,ei=!0),n.memoizedState=o):(Pi(o,i)||(o=Xe(),nn.lanes|=o,fs|=o,n.baseState=!0),i)}function ex(n,i){var o=St;St=o!==0&&4>o?o:4,n(!0);var c=Eu.transition;Eu.transition={};try{n(!1),i()}finally{St=o,Eu.transition=c}}function Hp(){return Si().memoizedState}function tx(n,i,o){var c=Br(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},Wp(n))Xp(i,o);else if(o=Sp(n,i,o,c),o!==null){var h=Hn();Ui(o,n,c,h),jp(o,i,c)}}function nx(n,i,o){var c=Br(n),h={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(Wp(n))Xp(i,h);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var b=i.lastRenderedState,B=m(b,o);if(h.hasEagerState=!0,h.eagerState=B,Pi(B,b)){var Y=i.interleaved;Y===null?(h.next=h,vu(i)):(h.next=Y.next,Y.next=h),i.interleaved=h;return}}catch{}finally{}o=Sp(n,i,h,c),o!==null&&(h=Hn(),Ui(o,n,c,h),jp(o,i,c))}}function Wp(n){var i=n.alternate;return n===nn||i!==null&&i===nn}function Xp(n,i){to=ll=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function jp(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Zn(n,o)}}var dl={readContext:yi,useCallback:Pn,useContext:Pn,useEffect:Pn,useImperativeHandle:Pn,useInsertionEffect:Pn,useLayoutEffect:Pn,useMemo:Pn,useReducer:Pn,useRef:Pn,useState:Pn,useDebugValue:Pn,useDeferredValue:Pn,useTransition:Pn,useMutableSource:Pn,useSyncExternalStore:Pn,useId:Pn,unstable_isNewReconciler:!1},ix={readContext:yi,useCallback:function(n,i){return Hi().memoizedState=[n,i===void 0?null:i],n},useContext:yi,useEffect:Up,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,cl(4194308,4,kp.bind(null,i,n),o)},useLayoutEffect:function(n,i){return cl(4194308,4,n,i)},useInsertionEffect:function(n,i){return cl(4,2,n,i)},useMemo:function(n,i){var o=Hi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=Hi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=tx.bind(null,nn,n),[c.memoizedState,n]},useRef:function(n){var i=Hi();return n={current:n},i.memoizedState=n},useState:Dp,useDebugValue:Pu,useDeferredValue:function(n){return Hi().memoizedState=n},useTransition:function(){var n=Dp(!1),i=n[0];return n=ex.bind(null,n[1]),Hi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=nn,h=Hi();if(Jt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),Sn===null)throw Error(t(349));(ds&30)!==0||Rp(c,i,o)}h.memoizedState=o;var m={value:o,getSnapshot:i};return h.queue=m,Up(Pp.bind(null,c,m,n),[n]),c.flags|=2048,ro(9,Cp.bind(null,c,m,o,i),void 0,null),o},useId:function(){var n=Hi(),i=Sn.identifierPrefix;if(Jt){var o=ar,c=sr;o=(c&~(1<<32-Ie(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=no++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Jv++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},rx={readContext:yi,useCallback:zp,useContext:yi,useEffect:Cu,useImperativeHandle:Bp,useInsertionEffect:Fp,useLayoutEffect:Op,useMemo:Vp,useReducer:Au,useRef:Ip,useState:function(){return Au(io)},useDebugValue:Pu,useDeferredValue:function(n){var i=Si();return Gp(i,mn.memoizedState,n)},useTransition:function(){var n=Au(io)[0],i=Si().memoizedState;return[n,i]},useMutableSource:bp,useSyncExternalStore:Ap,useId:Hp,unstable_isNewReconciler:!1},sx={readContext:yi,useCallback:zp,useContext:yi,useEffect:Cu,useImperativeHandle:Bp,useInsertionEffect:Fp,useLayoutEffect:Op,useMemo:Vp,useReducer:Ru,useRef:Ip,useState:function(){return Ru(io)},useDebugValue:Pu,useDeferredValue:function(n){var i=Si();return mn===null?i.memoizedState=n:Gp(i,mn.memoizedState,n)},useTransition:function(){var n=Ru(io)[0],i=Si().memoizedState;return[n,i]},useMutableSource:bp,useSyncExternalStore:Ap,useId:Hp,unstable_isNewReconciler:!1};function Li(n,i){if(n&&n.defaultProps){i=ie({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Nu(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:ie({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var fl={isMounted:function(n){return(n=n._reactInternals)?Vn(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=Hn(),h=Br(n),m=lr(c,h);m.payload=i,o!=null&&(m.callback=o),i=Ur(n,m,h),i!==null&&(Ui(i,n,h,c),rl(i,n,h))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=Hn(),h=Br(n),m=lr(c,h);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=Ur(n,m,h),i!==null&&(Ui(i,n,h,c),rl(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Hn(),c=Br(n),h=lr(o,c);h.tag=2,i!=null&&(h.callback=i),i=Ur(n,h,c),i!==null&&(Ui(i,n,c,o),rl(i,n,c))}};function Yp(n,i,o,c,h,m,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,b):i.prototype&&i.prototype.isPureReactComponent?!Wa(o,c)||!Wa(h,m):!0}function qp(n,i,o){var c=!1,h=Lr,m=i.contextType;return typeof m=="object"&&m!==null?m=yi(m):(h=Jn(i)?as:Cn.current,c=i.contextTypes,m=(c=c!=null)?Gs(n,h):Lr),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=fl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=m),i}function Kp(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&fl.enqueueReplaceState(i,i.state,null)}function Lu(n,i,o,c){var h=n.stateNode;h.props=o,h.state=n.memoizedState,h.refs={},xu(n);var m=i.contextType;typeof m=="object"&&m!==null?h.context=yi(m):(m=Jn(i)?as:Cn.current,h.context=Gs(n,m)),h.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Nu(n,i,m,o),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&fl.enqueueReplaceState(h,h.state,null),sl(n,o,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function $s(n,i){try{var o="",c=i;do o+=Ge(c),c=c.return;while(c);var h=o}catch(m){h=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:h,digest:null}}function Du(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Iu(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var ax=typeof WeakMap=="function"?WeakMap:Map;function $p(n,i,o){o=lr(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){_l||(_l=!0,Ku=c),Iu(n,i)},o}function Zp(n,i,o){o=lr(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;o.payload=function(){return c(h)},o.callback=function(){Iu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){Iu(n,i),typeof c!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})}),o}function Qp(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new ax;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(o)||(h.add(o),n=yx.bind(null,n,i,o),i.then(n,n))}function Jp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function em(n,i,o,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=lr(-1,1),i.tag=2,Ur(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var ox=w.ReactCurrentOwner,ei=!1;function Gn(n,i,o,c){i.child=n===null?yp(i,null,o,c):js(i,n.child,o,c)}function tm(n,i,o,c,h){o=o.render;var m=i.ref;return qs(i,h),c=Tu(n,i,o,c,m,h),o=bu(),n!==null&&!ei?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,cr(n,i,h)):(Jt&&o&&lu(i),i.flags|=1,Gn(n,i,c,h),i.child)}function nm(n,i,o,c,h){if(n===null){var m=o.type;return typeof m=="function"&&!nd(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,im(n,i,m,c,h)):(n=Tl(o.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&h)===0){var b=m.memoizedProps;if(o=o.compare,o=o!==null?o:Wa,o(b,c)&&n.ref===i.ref)return cr(n,i,h)}return i.flags|=1,n=Vr(m,c),n.ref=i.ref,n.return=i,i.child=n}function im(n,i,o,c,h){if(n!==null){var m=n.memoizedProps;if(Wa(m,c)&&n.ref===i.ref)if(ei=!1,i.pendingProps=c=m,(n.lanes&h)!==0)(n.flags&131072)!==0&&(ei=!0);else return i.lanes=n.lanes,cr(n,i,h)}return Uu(n,i,o,c,h)}function rm(n,i,o){var c=i.pendingProps,h=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Yt(Qs,ui),ui|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Yt(Qs,ui),ui|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:o,Yt(Qs,ui),ui|=c}else m!==null?(c=m.baseLanes|o,i.memoizedState=null):c=o,Yt(Qs,ui),ui|=c;return Gn(n,i,h,o),i.child}function sm(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Uu(n,i,o,c,h){var m=Jn(o)?as:Cn.current;return m=Gs(i,m),qs(i,h),o=Tu(n,i,o,c,m,h),c=bu(),n!==null&&!ei?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,cr(n,i,h)):(Jt&&c&&lu(i),i.flags|=1,Gn(n,i,o,h),i.child)}function am(n,i,o,c,h){if(Jn(o)){var m=!0;$o(i)}else m=!1;if(qs(i,h),i.stateNode===null)pl(n,i),qp(i,o,c),Lu(i,o,c,h),c=!0;else if(n===null){var b=i.stateNode,B=i.memoizedProps;b.props=B;var Y=b.context,me=o.contextType;typeof me=="object"&&me!==null?me=yi(me):(me=Jn(o)?as:Cn.current,me=Gs(i,me));var Ae=o.getDerivedStateFromProps,Ce=typeof Ae=="function"||typeof b.getSnapshotBeforeUpdate=="function";Ce||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(B!==c||Y!==me)&&Kp(i,b,c,me),Ir=!1;var be=i.memoizedState;b.state=be,sl(i,c,b,h),Y=i.memoizedState,B!==c||be!==Y||Qn.current||Ir?(typeof Ae=="function"&&(Nu(i,o,Ae,c),Y=i.memoizedState),(B=Ir||Yp(i,o,B,c,be,Y,me))?(Ce||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=Y),b.props=c,b.state=Y,b.context=me,c=B):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{b=i.stateNode,Mp(n,i),B=i.memoizedProps,me=i.type===i.elementType?B:Li(i.type,B),b.props=me,Ce=i.pendingProps,be=b.context,Y=o.contextType,typeof Y=="object"&&Y!==null?Y=yi(Y):(Y=Jn(o)?as:Cn.current,Y=Gs(i,Y));var je=o.getDerivedStateFromProps;(Ae=typeof je=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(B!==Ce||be!==Y)&&Kp(i,b,c,Y),Ir=!1,be=i.memoizedState,b.state=be,sl(i,c,b,h);var Ze=i.memoizedState;B!==Ce||be!==Ze||Qn.current||Ir?(typeof je=="function"&&(Nu(i,o,je,c),Ze=i.memoizedState),(me=Ir||Yp(i,o,me,c,be,Ze,Y)||!1)?(Ae||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,Ze,Y),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,Ze,Y)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||B===n.memoizedProps&&be===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&be===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ze),b.props=c,b.state=Ze,b.context=Y,c=me):(typeof b.componentDidUpdate!="function"||B===n.memoizedProps&&be===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&be===n.memoizedState||(i.flags|=1024),c=!1)}return Fu(n,i,o,c,m,h)}function Fu(n,i,o,c,h,m){sm(n,i);var b=(i.flags&128)!==0;if(!c&&!b)return h&&dp(i,o,!1),cr(n,i,m);c=i.stateNode,ox.current=i;var B=b&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&b?(i.child=js(i,n.child,null,m),i.child=js(i,null,B,m)):Gn(n,i,B,m),i.memoizedState=c.state,h&&dp(i,o,!0),i.child}function om(n){var i=n.stateNode;i.pendingContext?cp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&cp(n,i.context,!1),_u(n,i.containerInfo)}function lm(n,i,o,c,h){return Xs(),fu(h),i.flags|=256,Gn(n,i,o,c),i.child}var Ou={dehydrated:null,treeContext:null,retryLane:0};function ku(n){return{baseLanes:n,cachePool:null,transitions:null}}function cm(n,i,o){var c=i.pendingProps,h=tn.current,m=!1,b=(i.flags&128)!==0,B;if((B=b)||(B=n!==null&&n.memoizedState===null?!1:(h&2)!==0),B?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Yt(tn,h&1),n===null)return du(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(b=c.children,n=c.fallback,m?(c=i.mode,m=i.child,b={mode:"hidden",children:b},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=b):m=bl(b,c,0,null),n=gs(n,c,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=ku(o),i.memoizedState=Ou,n):Bu(i,b));if(h=n.memoizedState,h!==null&&(B=h.dehydrated,B!==null))return lx(n,i,b,c,B,h,o);if(m){m=c.fallback,b=i.mode,h=n.child,B=h.sibling;var Y={mode:"hidden",children:c.children};return(b&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=Y,i.deletions=null):(c=Vr(h,Y),c.subtreeFlags=h.subtreeFlags&14680064),B!==null?m=Vr(B,m):(m=gs(m,b,o,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,b=n.child.memoizedState,b=b===null?ku(o):{baseLanes:b.baseLanes|o,cachePool:null,transitions:b.transitions},m.memoizedState=b,m.childLanes=n.childLanes&~o,i.memoizedState=Ou,c}return m=n.child,n=m.sibling,c=Vr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function Bu(n,i){return i=bl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function hl(n,i,o,c){return c!==null&&fu(c),js(i,n.child,null,o),n=Bu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function lx(n,i,o,c,h,m,b){if(o)return i.flags&256?(i.flags&=-257,c=Du(Error(t(422))),hl(n,i,b,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,h=i.mode,c=bl({mode:"visible",children:c.children},h,0,null),m=gs(m,h,b,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&js(i,n.child,null,b),i.child.memoizedState=ku(b),i.memoizedState=Ou,m);if((i.mode&1)===0)return hl(n,i,b,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var B=c.dgst;return c=B,m=Error(t(419)),c=Du(m,c,void 0),hl(n,i,b,c)}if(B=(b&n.childLanes)!==0,ei||B){if(c=Sn,c!==null){switch(b&-b){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|b))!==0?0:h,h!==0&&h!==m.retryLane&&(m.retryLane=h,or(n,h),Ui(c,n,h,-1))}return td(),c=Du(Error(t(421))),hl(n,i,b,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=Sx.bind(null,n),h._reactRetry=i,null):(n=m.treeContext,ci=Pr(h.nextSibling),li=i,Jt=!0,Ni=null,n!==null&&(xi[_i++]=sr,xi[_i++]=ar,xi[_i++]=os,sr=n.id,ar=n.overflow,os=i),i=Bu(i,c.children),i.flags|=4096,i)}function um(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),gu(n.return,i,o)}function zu(n,i,o,c,h){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:h}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=h)}function dm(n,i,o){var c=i.pendingProps,h=c.revealOrder,m=c.tail;if(Gn(n,i,c.children,o),c=tn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&um(n,o,i);else if(n.tag===19)um(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Yt(tn,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(o=i.child,h=null;o!==null;)n=o.alternate,n!==null&&al(n)===null&&(h=o),o=o.sibling;o=h,o===null?(h=i.child,i.child=null):(h=o.sibling,o.sibling=null),zu(i,!1,h,o,m);break;case"backwards":for(o=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&al(n)===null){i.child=h;break}n=h.sibling,h.sibling=o,o=h,h=n}zu(i,!0,o,null,m);break;case"together":zu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function pl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function cr(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),fs|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=Vr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=Vr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function cx(n,i,o){switch(i.tag){case 3:om(i),Xs();break;case 5:Tp(i);break;case 1:Jn(i.type)&&$o(i);break;case 4:_u(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;Yt(nl,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Yt(tn,tn.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?cm(n,i,o):(Yt(tn,tn.current&1),n=cr(n,i,o),n!==null?n.sibling:null);Yt(tn,tn.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return dm(n,i,o);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Yt(tn,tn.current),c)break;return null;case 22:case 23:return i.lanes=0,rm(n,i,o)}return cr(n,i,o)}var fm,Vu,hm,pm;fm=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Vu=function(){},hm=function(n,i,o,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,us(Gi.current);var m=null;switch(o){case"input":h=wt(n,h),c=wt(n,c),m=[];break;case"select":h=ie({},h,{value:void 0}),c=ie({},c,{value:void 0}),m=[];break;case"textarea":h=zt(n,h),c=zt(n,c),m=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Yo)}qe(o,c);var b;o=null;for(me in h)if(!c.hasOwnProperty(me)&&h.hasOwnProperty(me)&&h[me]!=null)if(me==="style"){var B=h[me];for(b in B)B.hasOwnProperty(b)&&(o||(o={}),o[b]="")}else me!=="dangerouslySetInnerHTML"&&me!=="children"&&me!=="suppressContentEditableWarning"&&me!=="suppressHydrationWarning"&&me!=="autoFocus"&&(a.hasOwnProperty(me)?m||(m=[]):(m=m||[]).push(me,null));for(me in c){var Y=c[me];if(B=h!=null?h[me]:void 0,c.hasOwnProperty(me)&&Y!==B&&(Y!=null||B!=null))if(me==="style")if(B){for(b in B)!B.hasOwnProperty(b)||Y&&Y.hasOwnProperty(b)||(o||(o={}),o[b]="");for(b in Y)Y.hasOwnProperty(b)&&B[b]!==Y[b]&&(o||(o={}),o[b]=Y[b])}else o||(m||(m=[]),m.push(me,o)),o=Y;else me==="dangerouslySetInnerHTML"?(Y=Y?Y.__html:void 0,B=B?B.__html:void 0,Y!=null&&B!==Y&&(m=m||[]).push(me,Y)):me==="children"?typeof Y!="string"&&typeof Y!="number"||(m=m||[]).push(me,""+Y):me!=="suppressContentEditableWarning"&&me!=="suppressHydrationWarning"&&(a.hasOwnProperty(me)?(Y!=null&&me==="onScroll"&&Kt("scroll",n),m||B===Y||(m=[])):(m=m||[]).push(me,Y))}o&&(m=m||[]).push("style",o);var me=m;(i.updateQueue=me)&&(i.flags|=4)}},pm=function(n,i,o,c){o!==c&&(i.flags|=4)};function so(n,i){if(!Jt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Nn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var h=n.child;h!==null;)o|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)o|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function ux(n,i,o){var c=i.pendingProps;switch(cu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nn(i),null;case 1:return Jn(i.type)&&Ko(),Nn(i),null;case 3:return c=i.stateNode,Ks(),$t(Qn),$t(Cn),Mu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(el(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ni!==null&&(Qu(Ni),Ni=null))),Vu(n,i),Nn(i),null;case 5:yu(i);var h=us(eo.current);if(o=i.type,n!==null&&i.stateNode!=null)hm(n,i,o,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Nn(i),null}if(n=us(Gi.current),el(i)){c=i.stateNode,o=i.type;var m=i.memoizedProps;switch(c[Vi]=i,c[Ka]=m,n=(i.mode&1)!==0,o){case"dialog":Kt("cancel",c),Kt("close",c);break;case"iframe":case"object":case"embed":Kt("load",c);break;case"video":case"audio":for(h=0;h<ja.length;h++)Kt(ja[h],c);break;case"source":Kt("error",c);break;case"img":case"image":case"link":Kt("error",c),Kt("load",c);break;case"details":Kt("toggle",c);break;case"input":ft(c,m),Kt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Kt("invalid",c);break;case"textarea":Z(c,m),Kt("invalid",c)}qe(o,m),h=null;for(var b in m)if(m.hasOwnProperty(b)){var B=m[b];b==="children"?typeof B=="string"?c.textContent!==B&&(m.suppressHydrationWarning!==!0&&jo(c.textContent,B,n),h=["children",B]):typeof B=="number"&&c.textContent!==""+B&&(m.suppressHydrationWarning!==!0&&jo(c.textContent,B,n),h=["children",""+B]):a.hasOwnProperty(b)&&B!=null&&b==="onScroll"&&Kt("scroll",c)}switch(o){case"input":ze(c),Bt(c,m,!0);break;case"textarea":ze(c),Et(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Yo)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{b=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=U(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=b.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=b.createElement(o,{is:c.is}):(n=b.createElement(o),o==="select"&&(b=n,c.multiple?b.multiple=!0:c.size&&(b.size=c.size))):n=b.createElementNS(n,o),n[Vi]=i,n[Ka]=c,fm(n,i,!1,!1),i.stateNode=n;e:{switch(b=ke(o,c),o){case"dialog":Kt("cancel",n),Kt("close",n),h=c;break;case"iframe":case"object":case"embed":Kt("load",n),h=c;break;case"video":case"audio":for(h=0;h<ja.length;h++)Kt(ja[h],n);h=c;break;case"source":Kt("error",n),h=c;break;case"img":case"image":case"link":Kt("error",n),Kt("load",n),h=c;break;case"details":Kt("toggle",n),h=c;break;case"input":ft(n,c),h=wt(n,c),Kt("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=ie({},c,{value:void 0}),Kt("invalid",n);break;case"textarea":Z(n,c),h=zt(n,c),Kt("invalid",n);break;default:h=c}qe(o,h),B=h;for(m in B)if(B.hasOwnProperty(m)){var Y=B[m];m==="style"?Se(n,Y):m==="dangerouslySetInnerHTML"?(Y=Y?Y.__html:void 0,Y!=null&&le(n,Y)):m==="children"?typeof Y=="string"?(o!=="textarea"||Y!=="")&&ge(n,Y):typeof Y=="number"&&ge(n,""+Y):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?Y!=null&&m==="onScroll"&&Kt("scroll",n):Y!=null&&N(n,m,Y,b))}switch(o){case"input":ze(n),Bt(n,c,!1);break;case"textarea":ze(n),Et(n);break;case"option":c.value!=null&&n.setAttribute("value",""+he(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?Tt(n,!!c.multiple,m,!1):c.defaultValue!=null&&Tt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Yo)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Nn(i),null;case 6:if(n&&i.stateNode!=null)pm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=us(eo.current),us(Gi.current),el(i)){if(c=i.stateNode,o=i.memoizedProps,c[Vi]=i,(m=c.nodeValue!==o)&&(n=li,n!==null))switch(n.tag){case 3:jo(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&jo(c.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Vi]=i,i.stateNode=c}return Nn(i),null;case 13:if($t(tn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Jt&&ci!==null&&(i.mode&1)!==0&&(i.flags&128)===0)vp(),Xs(),i.flags|=98560,m=!1;else if(m=el(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Vi]=i}else Xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Nn(i),m=!1}else Ni!==null&&(Qu(Ni),Ni=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(tn.current&1)!==0?gn===0&&(gn=3):td())),i.updateQueue!==null&&(i.flags|=4),Nn(i),null);case 4:return Ks(),Vu(n,i),n===null&&Ya(i.stateNode.containerInfo),Nn(i),null;case 10:return mu(i.type._context),Nn(i),null;case 17:return Jn(i.type)&&Ko(),Nn(i),null;case 19:if($t(tn),m=i.memoizedState,m===null)return Nn(i),null;if(c=(i.flags&128)!==0,b=m.rendering,b===null)if(c)so(m,!1);else{if(gn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(b=al(n),b!==null){for(i.flags|=128,so(m,!1),c=b.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)m=o,n=c,m.flags&=14680066,b=m.alternate,b===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=b.childLanes,m.lanes=b.lanes,m.child=b.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=b.memoizedProps,m.memoizedState=b.memoizedState,m.updateQueue=b.updateQueue,m.type=b.type,n=b.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Yt(tn,tn.current&1|2),i.child}n=n.sibling}m.tail!==null&&en()>Js&&(i.flags|=128,c=!0,so(m,!1),i.lanes=4194304)}else{if(!c)if(n=al(b),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),so(m,!0),m.tail===null&&m.tailMode==="hidden"&&!b.alternate&&!Jt)return Nn(i),null}else 2*en()-m.renderingStartTime>Js&&o!==1073741824&&(i.flags|=128,c=!0,so(m,!1),i.lanes=4194304);m.isBackwards?(b.sibling=i.child,i.child=b):(o=m.last,o!==null?o.sibling=b:i.child=b,m.last=b)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=en(),i.sibling=null,o=tn.current,Yt(tn,c?o&1|2:o&1),i):(Nn(i),null);case 22:case 23:return ed(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ui&1073741824)!==0&&(Nn(i),i.subtreeFlags&6&&(i.flags|=8192)):Nn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function dx(n,i){switch(cu(i),i.tag){case 1:return Jn(i.type)&&Ko(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ks(),$t(Qn),$t(Cn),Mu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return yu(i),null;case 13:if($t(tn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Xs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return $t(tn),null;case 4:return Ks(),null;case 10:return mu(i.type._context),null;case 22:case 23:return ed(),null;case 24:return null;default:return null}}var ml=!1,Ln=!1,fx=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function Zs(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){an(n,i,c)}else o.current=null}function Gu(n,i,o){try{o()}catch(c){an(n,i,c)}}var mm=!1;function hx(n,i){if(eu=Uo,n=Yh(),jc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var h=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var b=0,B=-1,Y=-1,me=0,Ae=0,Ce=n,be=null;t:for(;;){for(var je;Ce!==o||h!==0&&Ce.nodeType!==3||(B=b+h),Ce!==m||c!==0&&Ce.nodeType!==3||(Y=b+c),Ce.nodeType===3&&(b+=Ce.nodeValue.length),(je=Ce.firstChild)!==null;)be=Ce,Ce=je;for(;;){if(Ce===n)break t;if(be===o&&++me===h&&(B=b),be===m&&++Ae===c&&(Y=b),(je=Ce.nextSibling)!==null)break;Ce=be,be=Ce.parentNode}Ce=je}o=B===-1||Y===-1?null:{start:B,end:Y}}else o=null}o=o||{start:0,end:0}}else o=null;for(tu={focusedElem:n,selectionRange:o},Uo=!1,Ke=i;Ke!==null;)if(i=Ke,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ke=n;else for(;Ke!==null;){i=Ke;try{var Ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ze!==null){var Je=Ze.memoizedProps,ln=Ze.memoizedState,oe=i.stateNode,Q=oe.getSnapshotBeforeUpdate(i.elementType===i.type?Je:Li(i.type,Je),ln);oe.__reactInternalSnapshotBeforeUpdate=Q}break;case 3:var de=i.stateNode.containerInfo;de.nodeType===1?de.textContent="":de.nodeType===9&&de.documentElement&&de.removeChild(de.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Pe){an(i,i.return,Pe)}if(n=i.sibling,n!==null){n.return=i.return,Ke=n;break}Ke=i.return}return Ze=mm,mm=!1,Ze}function ao(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var m=h.destroy;h.destroy=void 0,m!==void 0&&Gu(i,o,m)}h=h.next}while(h!==c)}}function gl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function Hu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function gm(n){var i=n.alternate;i!==null&&(n.alternate=null,gm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Vi],delete i[Ka],delete i[su],delete i[Kv],delete i[$v])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function vm(n){return n.tag===5||n.tag===3||n.tag===4}function xm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||vm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Wu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Yo));else if(c!==4&&(n=n.child,n!==null))for(Wu(n,i,o),n=n.sibling;n!==null;)Wu(n,i,o),n=n.sibling}function Xu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Xu(n,i,o),n=n.sibling;n!==null;)Xu(n,i,o),n=n.sibling}var Tn=null,Di=!1;function Fr(n,i,o){for(o=o.child;o!==null;)_m(n,i,o),o=o.sibling}function _m(n,i,o){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(ce,o)}catch{}switch(o.tag){case 5:Ln||Zs(o,i);case 6:var c=Tn,h=Di;Tn=null,Fr(n,i,o),Tn=c,Di=h,Tn!==null&&(Di?(n=Tn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Tn.removeChild(o.stateNode));break;case 18:Tn!==null&&(Di?(n=Tn,o=o.stateNode,n.nodeType===8?ru(n.parentNode,o):n.nodeType===1&&ru(n,o),ka(n)):ru(Tn,o.stateNode));break;case 4:c=Tn,h=Di,Tn=o.stateNode.containerInfo,Di=!0,Fr(n,i,o),Tn=c,Di=h;break;case 0:case 11:case 14:case 15:if(!Ln&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var m=h,b=m.destroy;m=m.tag,b!==void 0&&((m&2)!==0||(m&4)!==0)&&Gu(o,i,b),h=h.next}while(h!==c)}Fr(n,i,o);break;case 1:if(!Ln&&(Zs(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(B){an(o,i,B)}Fr(n,i,o);break;case 21:Fr(n,i,o);break;case 22:o.mode&1?(Ln=(c=Ln)||o.memoizedState!==null,Fr(n,i,o),Ln=c):Fr(n,i,o);break;default:Fr(n,i,o)}}function ym(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new fx),i.forEach(function(c){var h=Mx.bind(null,n,c);o.has(c)||(o.add(c),c.then(h,h))})}}function Ii(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var h=o[c];try{var m=n,b=i,B=b;e:for(;B!==null;){switch(B.tag){case 5:Tn=B.stateNode,Di=!1;break e;case 3:Tn=B.stateNode.containerInfo,Di=!0;break e;case 4:Tn=B.stateNode.containerInfo,Di=!0;break e}B=B.return}if(Tn===null)throw Error(t(160));_m(m,b,h),Tn=null,Di=!1;var Y=h.alternate;Y!==null&&(Y.return=null),h.return=null}catch(me){an(h,i,me)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Sm(i,n),i=i.sibling}function Sm(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ii(i,n),Wi(n),c&4){try{ao(3,n,n.return),gl(3,n)}catch(Je){an(n,n.return,Je)}try{ao(5,n,n.return)}catch(Je){an(n,n.return,Je)}}break;case 1:Ii(i,n),Wi(n),c&512&&o!==null&&Zs(o,o.return);break;case 5:if(Ii(i,n),Wi(n),c&512&&o!==null&&Zs(o,o.return),n.flags&32){var h=n.stateNode;try{ge(h,"")}catch(Je){an(n,n.return,Je)}}if(c&4&&(h=n.stateNode,h!=null)){var m=n.memoizedProps,b=o!==null?o.memoizedProps:m,B=n.type,Y=n.updateQueue;if(n.updateQueue=null,Y!==null)try{B==="input"&&m.type==="radio"&&m.name!=null&&dt(h,m),ke(B,b);var me=ke(B,m);for(b=0;b<Y.length;b+=2){var Ae=Y[b],Ce=Y[b+1];Ae==="style"?Se(h,Ce):Ae==="dangerouslySetInnerHTML"?le(h,Ce):Ae==="children"?ge(h,Ce):N(h,Ae,Ce,me)}switch(B){case"input":kt(h,m);break;case"textarea":sn(h,m);break;case"select":var be=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!m.multiple;var je=m.value;je!=null?Tt(h,!!m.multiple,je,!1):be!==!!m.multiple&&(m.defaultValue!=null?Tt(h,!!m.multiple,m.defaultValue,!0):Tt(h,!!m.multiple,m.multiple?[]:"",!1))}h[Ka]=m}catch(Je){an(n,n.return,Je)}}break;case 6:if(Ii(i,n),Wi(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,m=n.memoizedProps;try{h.nodeValue=m}catch(Je){an(n,n.return,Je)}}break;case 3:if(Ii(i,n),Wi(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{ka(i.containerInfo)}catch(Je){an(n,n.return,Je)}break;case 4:Ii(i,n),Wi(n);break;case 13:Ii(i,n),Wi(n),h=n.child,h.flags&8192&&(m=h.memoizedState!==null,h.stateNode.isHidden=m,!m||h.alternate!==null&&h.alternate.memoizedState!==null||(qu=en())),c&4&&ym(n);break;case 22:if(Ae=o!==null&&o.memoizedState!==null,n.mode&1?(Ln=(me=Ln)||Ae,Ii(i,n),Ln=me):Ii(i,n),Wi(n),c&8192){if(me=n.memoizedState!==null,(n.stateNode.isHidden=me)&&!Ae&&(n.mode&1)!==0)for(Ke=n,Ae=n.child;Ae!==null;){for(Ce=Ke=Ae;Ke!==null;){switch(be=Ke,je=be.child,be.tag){case 0:case 11:case 14:case 15:ao(4,be,be.return);break;case 1:Zs(be,be.return);var Ze=be.stateNode;if(typeof Ze.componentWillUnmount=="function"){c=be,o=be.return;try{i=c,Ze.props=i.memoizedProps,Ze.state=i.memoizedState,Ze.componentWillUnmount()}catch(Je){an(c,o,Je)}}break;case 5:Zs(be,be.return);break;case 22:if(be.memoizedState!==null){wm(Ce);continue}}je!==null?(je.return=be,Ke=je):wm(Ce)}Ae=Ae.sibling}e:for(Ae=null,Ce=n;;){if(Ce.tag===5){if(Ae===null){Ae=Ce;try{h=Ce.stateNode,me?(m=h.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(B=Ce.stateNode,Y=Ce.memoizedProps.style,b=Y!=null&&Y.hasOwnProperty("display")?Y.display:null,B.style.display=xe("display",b))}catch(Je){an(n,n.return,Je)}}}else if(Ce.tag===6){if(Ae===null)try{Ce.stateNode.nodeValue=me?"":Ce.memoizedProps}catch(Je){an(n,n.return,Je)}}else if((Ce.tag!==22&&Ce.tag!==23||Ce.memoizedState===null||Ce===n)&&Ce.child!==null){Ce.child.return=Ce,Ce=Ce.child;continue}if(Ce===n)break e;for(;Ce.sibling===null;){if(Ce.return===null||Ce.return===n)break e;Ae===Ce&&(Ae=null),Ce=Ce.return}Ae===Ce&&(Ae=null),Ce.sibling.return=Ce.return,Ce=Ce.sibling}}break;case 19:Ii(i,n),Wi(n),c&4&&ym(n);break;case 21:break;default:Ii(i,n),Wi(n)}}function Wi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(vm(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(ge(h,""),c.flags&=-33);var m=xm(n);Xu(n,m,h);break;case 3:case 4:var b=c.stateNode.containerInfo,B=xm(n);Wu(n,B,b);break;default:throw Error(t(161))}}catch(Y){an(n,n.return,Y)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function px(n,i,o){Ke=n,Mm(n)}function Mm(n,i,o){for(var c=(n.mode&1)!==0;Ke!==null;){var h=Ke,m=h.child;if(h.tag===22&&c){var b=h.memoizedState!==null||ml;if(!b){var B=h.alternate,Y=B!==null&&B.memoizedState!==null||Ln;B=ml;var me=Ln;if(ml=b,(Ln=Y)&&!me)for(Ke=h;Ke!==null;)b=Ke,Y=b.child,b.tag===22&&b.memoizedState!==null?Tm(h):Y!==null?(Y.return=b,Ke=Y):Tm(h);for(;m!==null;)Ke=m,Mm(m),m=m.sibling;Ke=h,ml=B,Ln=me}Em(n)}else(h.subtreeFlags&8772)!==0&&m!==null?(m.return=h,Ke=m):Em(n)}}function Em(n){for(;Ke!==null;){var i=Ke;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Ln||gl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Ln)if(o===null)c.componentDidMount();else{var h=i.elementType===i.type?o.memoizedProps:Li(i.type,o.memoizedProps);c.componentDidUpdate(h,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&wp(i,m,c);break;case 3:var b=i.updateQueue;if(b!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}wp(i,b,o)}break;case 5:var B=i.stateNode;if(o===null&&i.flags&4){o=B;var Y=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":Y.autoFocus&&o.focus();break;case"img":Y.src&&(o.src=Y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var me=i.alternate;if(me!==null){var Ae=me.memoizedState;if(Ae!==null){var Ce=Ae.dehydrated;Ce!==null&&ka(Ce)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ln||i.flags&512&&Hu(i)}catch(be){an(i,i.return,be)}}if(i===n){Ke=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ke=o;break}Ke=i.return}}function wm(n){for(;Ke!==null;){var i=Ke;if(i===n){Ke=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ke=o;break}Ke=i.return}}function Tm(n){for(;Ke!==null;){var i=Ke;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{gl(4,i)}catch(Y){an(i,o,Y)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(Y){an(i,h,Y)}}var m=i.return;try{Hu(i)}catch(Y){an(i,m,Y)}break;case 5:var b=i.return;try{Hu(i)}catch(Y){an(i,b,Y)}}}catch(Y){an(i,i.return,Y)}if(i===n){Ke=null;break}var B=i.sibling;if(B!==null){B.return=i.return,Ke=B;break}Ke=i.return}}var mx=Math.ceil,vl=w.ReactCurrentDispatcher,ju=w.ReactCurrentOwner,Mi=w.ReactCurrentBatchConfig,Lt=0,Sn=null,dn=null,bn=0,ui=0,Qs=Nr(0),gn=0,oo=null,fs=0,xl=0,Yu=0,lo=null,ti=null,qu=0,Js=1/0,ur=null,_l=!1,Ku=null,Or=null,yl=!1,kr=null,Sl=0,co=0,$u=null,Ml=-1,El=0;function Hn(){return(Lt&6)!==0?en():Ml!==-1?Ml:Ml=en()}function Br(n){return(n.mode&1)===0?1:(Lt&2)!==0&&bn!==0?bn&-bn:Qv.transition!==null?(El===0&&(El=Xe()),El):(n=St,n!==0||(n=window.event,n=n===void 0?16:Ah(n.type)),n)}function Ui(n,i,o,c){if(50<co)throw co=0,$u=null,Error(t(185));yt(n,o,c),((Lt&2)===0||n!==Sn)&&(n===Sn&&((Lt&2)===0&&(xl|=o),gn===4&&zr(n,bn)),ni(n,c),o===1&&Lt===0&&(i.mode&1)===0&&(Js=en()+500,Zo&&Dr()))}function ni(n,i){var o=n.callbackNode;Vt(n,i);var c=jt(n,n===Sn?bn:0);if(c===0)o!==null&&La(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&La(o),i===1)n.tag===0?Zv(Am.bind(null,n)):fp(Am.bind(null,n)),Yv(function(){(Lt&6)===0&&Dr()}),o=null;else{switch(nr(c)){case 1:o=Da;break;case 4:o=R;break;case 16:o=ee;break;case 536870912:o=ue;break;default:o=ee}o=Um(o,bm.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function bm(n,i){if(Ml=-1,El=0,(Lt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(ea()&&n.callbackNode!==o)return null;var c=jt(n,n===Sn?bn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=wl(n,c);else{i=c;var h=Lt;Lt|=2;var m=Cm();(Sn!==n||bn!==i)&&(ur=null,Js=en()+500,ps(n,i));do try{xx();break}catch(B){Rm(n,B)}while(!0);pu(),vl.current=m,Lt=h,dn!==null?i=0:(Sn=null,bn=0,i=gn)}if(i!==0){if(i===2&&(h=un(n),h!==0&&(c=h,i=Zu(n,h))),i===1)throw o=oo,ps(n,0),zr(n,c),ni(n,en()),o;if(i===6)zr(n,c);else{if(h=n.current.alternate,(c&30)===0&&!gx(h)&&(i=wl(n,c),i===2&&(m=un(n),m!==0&&(c=m,i=Zu(n,m))),i===1))throw o=oo,ps(n,0),zr(n,c),ni(n,en()),o;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ms(n,ti,ur);break;case 3:if(zr(n,c),(c&130023424)===c&&(i=qu+500-en(),10<i)){if(jt(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){Hn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=iu(ms.bind(null,n,ti,ur),i);break}ms(n,ti,ur);break;case 4:if(zr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var b=31-Ie(c);m=1<<b,b=i[b],b>h&&(h=b),c&=~m}if(c=h,c=en()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*mx(c/1960))-c,10<c){n.timeoutHandle=iu(ms.bind(null,n,ti,ur),c);break}ms(n,ti,ur);break;case 5:ms(n,ti,ur);break;default:throw Error(t(329))}}}return ni(n,en()),n.callbackNode===o?bm.bind(null,n):null}function Zu(n,i){var o=lo;return n.current.memoizedState.isDehydrated&&(ps(n,i).flags|=256),n=wl(n,i),n!==2&&(i=ti,ti=o,i!==null&&Qu(i)),n}function Qu(n){ti===null?ti=n:ti.push.apply(ti,n)}function gx(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var h=o[c],m=h.getSnapshot;h=h.value;try{if(!Pi(m(),h))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function zr(n,i){for(i&=~Yu,i&=~xl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-Ie(i),c=1<<o;n[o]=-1,i&=~c}}function Am(n){if((Lt&6)!==0)throw Error(t(327));ea();var i=jt(n,0);if((i&1)===0)return ni(n,en()),null;var o=wl(n,i);if(n.tag!==0&&o===2){var c=un(n);c!==0&&(i=c,o=Zu(n,c))}if(o===1)throw o=oo,ps(n,0),zr(n,i),ni(n,en()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ms(n,ti,ur),ni(n,en()),null}function Ju(n,i){var o=Lt;Lt|=1;try{return n(i)}finally{Lt=o,Lt===0&&(Js=en()+500,Zo&&Dr())}}function hs(n){kr!==null&&kr.tag===0&&(Lt&6)===0&&ea();var i=Lt;Lt|=1;var o=Mi.transition,c=St;try{if(Mi.transition=null,St=1,n)return n()}finally{St=c,Mi.transition=o,Lt=i,(Lt&6)===0&&Dr()}}function ed(){ui=Qs.current,$t(Qs)}function ps(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,jv(o)),dn!==null)for(o=dn.return;o!==null;){var c=o;switch(cu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ko();break;case 3:Ks(),$t(Qn),$t(Cn),Mu();break;case 5:yu(c);break;case 4:Ks();break;case 13:$t(tn);break;case 19:$t(tn);break;case 10:mu(c.type._context);break;case 22:case 23:ed()}o=o.return}if(Sn=n,dn=n=Vr(n.current,null),bn=ui=i,gn=0,oo=null,Yu=xl=fs=0,ti=lo=null,cs!==null){for(i=0;i<cs.length;i++)if(o=cs[i],c=o.interleaved,c!==null){o.interleaved=null;var h=c.next,m=o.pending;if(m!==null){var b=m.next;m.next=h,c.next=b}o.pending=c}cs=null}return n}function Rm(n,i){do{var o=dn;try{if(pu(),ol.current=dl,ll){for(var c=nn.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}ll=!1}if(ds=0,yn=mn=nn=null,to=!1,no=0,ju.current=null,o===null||o.return===null){gn=1,oo=i,dn=null;break}e:{var m=n,b=o.return,B=o,Y=i;if(i=bn,B.flags|=32768,Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var me=Y,Ae=B,Ce=Ae.tag;if((Ae.mode&1)===0&&(Ce===0||Ce===11||Ce===15)){var be=Ae.alternate;be?(Ae.updateQueue=be.updateQueue,Ae.memoizedState=be.memoizedState,Ae.lanes=be.lanes):(Ae.updateQueue=null,Ae.memoizedState=null)}var je=Jp(b);if(je!==null){je.flags&=-257,em(je,b,B,m,i),je.mode&1&&Qp(m,me,i),i=je,Y=me;var Ze=i.updateQueue;if(Ze===null){var Je=new Set;Je.add(Y),i.updateQueue=Je}else Ze.add(Y);break e}else{if((i&1)===0){Qp(m,me,i),td();break e}Y=Error(t(426))}}else if(Jt&&B.mode&1){var ln=Jp(b);if(ln!==null){(ln.flags&65536)===0&&(ln.flags|=256),em(ln,b,B,m,i),fu($s(Y,B));break e}}m=Y=$s(Y,B),gn!==4&&(gn=2),lo===null?lo=[m]:lo.push(m),m=b;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var oe=$p(m,Y,i);Ep(m,oe);break e;case 1:B=Y;var Q=m.type,de=m.stateNode;if((m.flags&128)===0&&(typeof Q.getDerivedStateFromError=="function"||de!==null&&typeof de.componentDidCatch=="function"&&(Or===null||!Or.has(de)))){m.flags|=65536,i&=-i,m.lanes|=i;var Pe=Zp(m,B,i);Ep(m,Pe);break e}}m=m.return}while(m!==null)}Nm(o)}catch(tt){i=tt,dn===o&&o!==null&&(dn=o=o.return);continue}break}while(!0)}function Cm(){var n=vl.current;return vl.current=dl,n===null?dl:n}function td(){(gn===0||gn===3||gn===2)&&(gn=4),Sn===null||(fs&268435455)===0&&(xl&268435455)===0||zr(Sn,bn)}function wl(n,i){var o=Lt;Lt|=2;var c=Cm();(Sn!==n||bn!==i)&&(ur=null,ps(n,i));do try{vx();break}catch(h){Rm(n,h)}while(!0);if(pu(),Lt=o,vl.current=c,dn!==null)throw Error(t(261));return Sn=null,bn=0,gn}function vx(){for(;dn!==null;)Pm(dn)}function xx(){for(;dn!==null&&!Do();)Pm(dn)}function Pm(n){var i=Im(n.alternate,n,ui);n.memoizedProps=n.pendingProps,i===null?Nm(n):dn=i,ju.current=null}function Nm(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=ux(o,i,ui),o!==null){dn=o;return}}else{if(o=dx(o,i),o!==null){o.flags&=32767,dn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{gn=6,dn=null;return}}if(i=i.sibling,i!==null){dn=i;return}dn=i=n}while(i!==null);gn===0&&(gn=5)}function ms(n,i,o){var c=St,h=Mi.transition;try{Mi.transition=null,St=1,_x(n,i,o,c)}finally{Mi.transition=h,St=c}return null}function _x(n,i,o,c){do ea();while(kr!==null);if((Lt&6)!==0)throw Error(t(327));o=n.finishedWork;var h=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if($n(n,m),n===Sn&&(dn=Sn=null,bn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||yl||(yl=!0,Um(ee,function(){return ea(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=Mi.transition,Mi.transition=null;var b=St;St=1;var B=Lt;Lt|=4,ju.current=null,hx(n,o),Sm(o,n),Bv(tu),Uo=!!eu,tu=eu=null,n.current=o,px(o),Dc(),Lt=B,St=b,Mi.transition=m}else n.current=o;if(yl&&(yl=!1,kr=n,Sl=h),m=n.pendingLanes,m===0&&(Or=null),Ye(o.stateNode),ni(n,en()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)h=i[o],c(h.value,{componentStack:h.stack,digest:h.digest});if(_l)throw _l=!1,n=Ku,Ku=null,n;return(Sl&1)!==0&&n.tag!==0&&ea(),m=n.pendingLanes,(m&1)!==0?n===$u?co++:(co=0,$u=n):co=0,Dr(),null}function ea(){if(kr!==null){var n=nr(Sl),i=Mi.transition,o=St;try{if(Mi.transition=null,St=16>n?16:n,kr===null)var c=!1;else{if(n=kr,kr=null,Sl=0,(Lt&6)!==0)throw Error(t(331));var h=Lt;for(Lt|=4,Ke=n.current;Ke!==null;){var m=Ke,b=m.child;if((Ke.flags&16)!==0){var B=m.deletions;if(B!==null){for(var Y=0;Y<B.length;Y++){var me=B[Y];for(Ke=me;Ke!==null;){var Ae=Ke;switch(Ae.tag){case 0:case 11:case 15:ao(8,Ae,m)}var Ce=Ae.child;if(Ce!==null)Ce.return=Ae,Ke=Ce;else for(;Ke!==null;){Ae=Ke;var be=Ae.sibling,je=Ae.return;if(gm(Ae),Ae===me){Ke=null;break}if(be!==null){be.return=je,Ke=be;break}Ke=je}}}var Ze=m.alternate;if(Ze!==null){var Je=Ze.child;if(Je!==null){Ze.child=null;do{var ln=Je.sibling;Je.sibling=null,Je=ln}while(Je!==null)}}Ke=m}}if((m.subtreeFlags&2064)!==0&&b!==null)b.return=m,Ke=b;else e:for(;Ke!==null;){if(m=Ke,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:ao(9,m,m.return)}var oe=m.sibling;if(oe!==null){oe.return=m.return,Ke=oe;break e}Ke=m.return}}var Q=n.current;for(Ke=Q;Ke!==null;){b=Ke;var de=b.child;if((b.subtreeFlags&2064)!==0&&de!==null)de.return=b,Ke=de;else e:for(b=Q;Ke!==null;){if(B=Ke,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:gl(9,B)}}catch(tt){an(B,B.return,tt)}if(B===b){Ke=null;break e}var Pe=B.sibling;if(Pe!==null){Pe.return=B.return,Ke=Pe;break e}Ke=B.return}}if(Lt=h,Dr(),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(ce,n)}catch{}c=!0}return c}finally{St=o,Mi.transition=i}}return!1}function Lm(n,i,o){i=$s(o,i),i=$p(n,i,1),n=Ur(n,i,1),i=Hn(),n!==null&&(yt(n,1,i),ni(n,i))}function an(n,i,o){if(n.tag===3)Lm(n,n,o);else for(;i!==null;){if(i.tag===3){Lm(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Or===null||!Or.has(c))){n=$s(o,n),n=Zp(i,n,1),i=Ur(i,n,1),n=Hn(),i!==null&&(yt(i,1,n),ni(i,n));break}}i=i.return}}function yx(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=Hn(),n.pingedLanes|=n.suspendedLanes&o,Sn===n&&(bn&o)===o&&(gn===4||gn===3&&(bn&130023424)===bn&&500>en()-qu?ps(n,0):Yu|=o),ni(n,i)}function Dm(n,i){i===0&&((n.mode&1)===0?i=1:(i=et,et<<=1,(et&130023424)===0&&(et=4194304)));var o=Hn();n=or(n,i),n!==null&&(yt(n,i,o),ni(n,o))}function Sx(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Dm(n,o)}function Mx(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(o=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Dm(n,o)}var Im;Im=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Qn.current)ei=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return ei=!1,cx(n,i,o);ei=(n.flags&131072)!==0}else ei=!1,Jt&&(i.flags&1048576)!==0&&hp(i,Jo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;pl(n,i),n=i.pendingProps;var h=Gs(i,Cn.current);qs(i,o),h=Tu(null,i,c,n,h,o);var m=bu();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Jn(c)?(m=!0,$o(i)):m=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,xu(i),h.updater=fl,i.stateNode=h,h._reactInternals=i,Lu(i,c,n,o),i=Fu(null,i,c,!0,m,o)):(i.tag=0,Jt&&m&&lu(i),Gn(null,i,h,o),i=i.child),i;case 16:c=i.elementType;e:{switch(pl(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=wx(c),n=Li(c,n),h){case 0:i=Uu(null,i,c,n,o);break e;case 1:i=am(null,i,c,n,o);break e;case 11:i=tm(null,i,c,n,o);break e;case 14:i=nm(null,i,c,Li(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Li(c,h),Uu(n,i,c,h,o);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Li(c,h),am(n,i,c,h,o);case 3:e:{if(om(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,h=m.element,Mp(n,i),sl(i,c,null,o);var b=i.memoizedState;if(c=b.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){h=$s(Error(t(423)),i),i=lm(n,i,c,o,h);break e}else if(c!==h){h=$s(Error(t(424)),i),i=lm(n,i,c,o,h);break e}else for(ci=Pr(i.stateNode.containerInfo.firstChild),li=i,Jt=!0,Ni=null,o=yp(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Xs(),c===h){i=cr(n,i,o);break e}Gn(n,i,c,o)}i=i.child}return i;case 5:return Tp(i),n===null&&du(i),c=i.type,h=i.pendingProps,m=n!==null?n.memoizedProps:null,b=h.children,nu(c,h)?b=null:m!==null&&nu(c,m)&&(i.flags|=32),sm(n,i),Gn(n,i,b,o),i.child;case 6:return n===null&&du(i),null;case 13:return cm(n,i,o);case 4:return _u(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=js(i,null,c,o):Gn(n,i,c,o),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Li(c,h),tm(n,i,c,h,o);case 7:return Gn(n,i,i.pendingProps,o),i.child;case 8:return Gn(n,i,i.pendingProps.children,o),i.child;case 12:return Gn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,m=i.memoizedProps,b=h.value,Yt(nl,c._currentValue),c._currentValue=b,m!==null)if(Pi(m.value,b)){if(m.children===h.children&&!Qn.current){i=cr(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var B=m.dependencies;if(B!==null){b=m.child;for(var Y=B.firstContext;Y!==null;){if(Y.context===c){if(m.tag===1){Y=lr(-1,o&-o),Y.tag=2;var me=m.updateQueue;if(me!==null){me=me.shared;var Ae=me.pending;Ae===null?Y.next=Y:(Y.next=Ae.next,Ae.next=Y),me.pending=Y}}m.lanes|=o,Y=m.alternate,Y!==null&&(Y.lanes|=o),gu(m.return,o,i),B.lanes|=o;break}Y=Y.next}}else if(m.tag===10)b=m.type===i.type?null:m.child;else if(m.tag===18){if(b=m.return,b===null)throw Error(t(341));b.lanes|=o,B=b.alternate,B!==null&&(B.lanes|=o),gu(b,o,i),b=m.sibling}else b=m.child;if(b!==null)b.return=m;else for(b=m;b!==null;){if(b===i){b=null;break}if(m=b.sibling,m!==null){m.return=b.return,b=m;break}b=b.return}m=b}Gn(n,i,h.children,o),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,qs(i,o),h=yi(h),c=c(h),i.flags|=1,Gn(n,i,c,o),i.child;case 14:return c=i.type,h=Li(c,i.pendingProps),h=Li(c.type,h),nm(n,i,c,h,o);case 15:return im(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Li(c,h),pl(n,i),i.tag=1,Jn(c)?(n=!0,$o(i)):n=!1,qs(i,o),qp(i,c,h),Lu(i,c,h,o),Fu(null,i,c,!0,n,o);case 19:return dm(n,i,o);case 22:return rm(n,i,o)}throw Error(t(156,i.tag))};function Um(n,i){return is(n,i)}function Ex(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ei(n,i,o,c){return new Ex(n,i,o,c)}function nd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function wx(n){if(typeof n=="function")return nd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$)return 11;if(n===q)return 14}return 2}function Vr(n,i){var o=n.alternate;return o===null?(o=Ei(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Tl(n,i,o,c,h,m){var b=2;if(c=n,typeof n=="function")nd(n)&&(b=1);else if(typeof n=="string")b=5;else e:switch(n){case k:return gs(o.children,h,m,i);case E:b=8,h|=8;break;case I:return n=Ei(12,o,i,h|2),n.elementType=I,n.lanes=m,n;case fe:return n=Ei(13,o,i,h),n.elementType=fe,n.lanes=m,n;case re:return n=Ei(19,o,i,h),n.elementType=re,n.lanes=m,n;case G:return bl(o,h,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case j:b=10;break e;case W:b=9;break e;case $:b=11;break e;case q:b=14;break e;case z:b=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Ei(b,o,i,h),i.elementType=n,i.type=c,i.lanes=m,i}function gs(n,i,o,c){return n=Ei(7,n,c,i),n.lanes=o,n}function bl(n,i,o,c){return n=Ei(22,n,c,i),n.elementType=G,n.lanes=o,n.stateNode={isHidden:!1},n}function id(n,i,o){return n=Ei(6,n,null,i),n.lanes=o,n}function rd(n,i,o){return i=Ei(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Tx(n,i,o,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wn(0),this.expirationTimes=wn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wn(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function sd(n,i,o,c,h,m,b,B,Y){return n=new Tx(n,i,o,B,Y),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Ei(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},xu(m),n}function bx(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function Fm(n){if(!n)return Lr;n=n._reactInternals;e:{if(Vn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Jn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Jn(o))return up(n,o,i)}return i}function Om(n,i,o,c,h,m,b,B,Y){return n=sd(o,c,!0,n,h,m,b,B,Y),n.context=Fm(null),o=n.current,c=Hn(),h=Br(o),m=lr(c,h),m.callback=i??null,Ur(o,m,h),n.current.lanes=h,yt(n,h,c),ni(n,c),n}function Al(n,i,o,c){var h=i.current,m=Hn(),b=Br(h);return o=Fm(o),i.context===null?i.context=o:i.pendingContext=o,i=lr(m,b),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Ur(h,i,b),n!==null&&(Ui(n,h,b,m),rl(n,h,b)),b}function Rl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function km(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function ad(n,i){km(n,i),(n=n.alternate)&&km(n,i)}function Ax(){return null}var Bm=typeof reportError=="function"?reportError:function(n){console.error(n)};function od(n){this._internalRoot=n}Cl.prototype.render=od.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Al(n,i,null,null)},Cl.prototype.unmount=od.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;hs(function(){Al(null,n,null,null)}),i[ir]=null}};function Cl(n){this._internalRoot=n}Cl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Gt();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Ar.length&&i!==0&&i<Ar[o].priority;o++);Ar.splice(o,0,n),o===0&&Th(n)}};function ld(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Pl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function zm(){}function Rx(n,i,o,c,h){if(h){if(typeof c=="function"){var m=c;c=function(){var me=Rl(b);m.call(me)}}var b=Om(i,c,n,0,null,!1,!1,"",zm);return n._reactRootContainer=b,n[ir]=b.current,Ya(n.nodeType===8?n.parentNode:n),hs(),b}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var B=c;c=function(){var me=Rl(Y);B.call(me)}}var Y=sd(n,0,!1,null,null,!1,!1,"",zm);return n._reactRootContainer=Y,n[ir]=Y.current,Ya(n.nodeType===8?n.parentNode:n),hs(function(){Al(i,Y,o,c)}),Y}function Nl(n,i,o,c,h){var m=o._reactRootContainer;if(m){var b=m;if(typeof h=="function"){var B=h;h=function(){var Y=Rl(b);B.call(Y)}}Al(i,b,n,h)}else b=Rx(o,i,n,h,c);return Rl(b)}Ft=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=Pt(i.pendingLanes);o!==0&&(Zn(i,o|1),ni(i,en()),(Lt&6)===0&&(Js=en()+500,Dr()))}break;case 13:hs(function(){var c=or(n,1);if(c!==null){var h=Hn();Ui(c,n,1,h)}}),ad(n,1)}},qt=function(n){if(n.tag===13){var i=or(n,134217728);if(i!==null){var o=Hn();Ui(i,n,134217728,o)}ad(n,134217728)}},Ri=function(n){if(n.tag===13){var i=Br(n),o=or(n,i);if(o!==null){var c=Hn();Ui(o,n,i,c)}ad(n,i)}},Gt=function(){return St},Ci=function(n,i){var o=St;try{return St=n,i()}finally{St=o}},V=function(n,i,o){switch(i){case"input":if(kt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var h=qo(c);if(!h)throw Error(t(90));lt(c),kt(c,h)}}}break;case"textarea":sn(n,o);break;case"select":i=o.value,i!=null&&Tt(n,!!o.multiple,i,!1)}},_e=Ju,we=hs;var Cx={usingClientEntryPoint:!1,Events:[$a,zs,qo,X,Ee,Ju]},uo={findFiberByHostInstance:ss,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Px={bundleType:uo.bundleType,version:uo.version,rendererPackageName:uo.rendererPackageName,rendererConfig:uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ns(n),n===null?null:n.stateNode},findFiberByHostInstance:uo.findFiberByHostInstance||Ax,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ll.isDisabled&&Ll.supportsFiber)try{ce=Ll.inject(Px),Oe=Ll}catch{}}return ii.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cx,ii.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ld(i))throw Error(t(200));return bx(n,i,null,o)},ii.createRoot=function(n,i){if(!ld(n))throw Error(t(299));var o=!1,c="",h=Bm;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=sd(n,1,!1,null,null,o,!1,c,h),n[ir]=i.current,Ya(n.nodeType===8?n.parentNode:n),new od(i)},ii.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ns(i),n=n===null?null:n.stateNode,n},ii.flushSync=function(n){return hs(n)},ii.hydrate=function(n,i,o){if(!Pl(i))throw Error(t(200));return Nl(null,n,i,!0,o)},ii.hydrateRoot=function(n,i,o){if(!ld(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,h=!1,m="",b=Bm;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(b=o.onRecoverableError)),i=Om(i,null,n,1,o??null,h,!1,m,b),n[ir]=i.current,Ya(n),c)for(n=0;n<c.length;n++)o=c[n],h=o._getVersion,h=h(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,h]:i.mutableSourceEagerHydrationData.push(o,h);return new Cl(i)},ii.render=function(n,i,o){if(!Pl(i))throw Error(t(200));return Nl(null,n,i,!1,o)},ii.unmountComponentAtNode=function(n){if(!Pl(n))throw Error(t(40));return n._reactRootContainer?(hs(function(){Nl(null,null,n,!1,function(){n._reactRootContainer=null,n[ir]=null})}),!0):!1},ii.unstable_batchedUpdates=Ju,ii.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!Pl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Nl(n,i,o,!1,c)},ii.version="18.3.1-next-f1338f8080-20240426",ii}var qm;function Bx(){if(qm)return dd.exports;qm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),dd.exports=kx(),dd.exports}var Km;function zx(){if(Km)return Dl;Km=1;var s=Bx();return Dl.createRoot=s.createRoot,Dl.hydrateRoot=s.hydrateRoot,Dl}var Vx=zx();const Gx=Lx(Vx);var it=Kf();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $f="185",Hx=0,$m=1,Wx=2,wo=1,pg=2,Mo=3,Jr=0,ri=1,mi=2,Qi=0,_a=1,gr=2,Zm=3,Qm=4,Xx=5,Es=100,jx=101,Yx=102,qx=103,Kx=104,$x=200,Zx=201,Qx=202,Jx=203,Jd=204,ef=205,e_=206,t_=207,n_=208,i_=209,r_=210,s_=211,a_=212,o_=213,l_=214,tf=0,nf=1,rf=2,Ma=3,sf=4,af=5,of=6,lf=7,mg=0,c_=1,u_=2,Ji=0,Zf=1,Qf=2,Jf=3,bc=4,eh=5,th=6,nh=7,gg=300,As=301,Ea=302,pd=303,md=304,Ac=306,Rs=1e3,vr=1001,cf=1002,An=1003,d_=1004,Il=1005,Rn=1006,gd=1007,Ts=1008,gi=1009,vg=1010,xg=1011,To=1012,ih=1013,er=1014,Ki=1015,vi=1016,rh=1017,sh=1018,bo=1020,_g=35902,yg=35899,Sg=1021,Mg=1022,Bi=1023,_r=1026,bs=1027,Eg=1028,ah=1029,Cs=1030,oh=1031,lh=1033,cc=33776,uc=33777,dc=33778,fc=33779,uf=35840,df=35841,ff=35842,hf=35843,pf=36196,mf=37492,gf=37496,vf=37488,xf=37489,gc=37490,_f=37491,yf=37808,Sf=37809,Mf=37810,Ef=37811,wf=37812,Tf=37813,bf=37814,Af=37815,Rf=37816,Cf=37817,Pf=37818,Nf=37819,Lf=37820,Df=37821,If=36492,Uf=36494,Ff=36495,Of=36283,kf=36284,vc=36285,Bf=36286,f_=3200,zf=0,h_=1,Kr="",vn="srgb",xc="srgb-linear",_c="linear",Ot="srgb",ta=7680,Jm=519,p_=512,m_=513,g_=514,ch=515,v_=516,x_=517,uh=518,__=519,Vf=35044,e0="300 es",$i=2e3,Ao=2001;function y_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function yc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function S_(){const s=yc("canvas");return s.style.display="block",s}const t0={};function Sc(...s){const e="THREE."+s.shift();console.log(e,...s)}function wg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ct(...s){s=wg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function At(...s){s=wg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ya(...s){const e=s.join(" ");e in t0||(t0[e]=!0,ct(...s))}function M_(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const E_={[tf]:nf,[rf]:of,[sf]:lf,[Ma]:af,[nf]:tf,[of]:rf,[lf]:sf,[af]:Ma};class Ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vd=Math.PI/180,Gf=180/Math.PI;function Zr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function Rt(s,e,t){return Math.max(e,Math.min(t,s))}function w_(s,e){return(s%e+e)%e}function xd(s,e,t){return(1-t)*s+t*e}function qi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ht(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const _h=class _h{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_h.prototype.isVector2=!0;let rt=_h;class Aa{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,u,f){let d=r[a+0],p=r[a+1],y=r[a+2],_=r[a+3],g=l[u+0],S=l[u+1],T=l[u+2],C=l[u+3];if(_!==C||d!==g||p!==S||y!==T){let x=d*g+p*S+y*T+_*C;x<0&&(g=-g,S=-S,T=-T,C=-C,x=-x);let v=1-f;if(x<.9995){const L=Math.acos(x),N=Math.sin(L);v=Math.sin(v*L)/N,f=Math.sin(f*L)/N,d=d*v+g*f,p=p*v+S*f,y=y*v+T*f,_=_*v+C*f}else{d=d*v+g*f,p=p*v+S*f,y=y*v+T*f,_=_*v+C*f;const L=1/Math.sqrt(d*d+p*p+y*y+_*_);d*=L,p*=L,y*=L,_*=L}}e[t]=d,e[t+1]=p,e[t+2]=y,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,a,l,u){const f=r[a],d=r[a+1],p=r[a+2],y=r[a+3],_=l[u],g=l[u+1],S=l[u+2],T=l[u+3];return e[t]=f*T+y*_+d*S-p*g,e[t+1]=d*T+y*g+p*_-f*S,e[t+2]=p*T+y*S+f*g-d*_,e[t+3]=y*T-f*_-d*g-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,u=e._order,f=Math.cos,d=Math.sin,p=f(r/2),y=f(a/2),_=f(l/2),g=d(r/2),S=d(a/2),T=d(l/2);switch(u){case"XYZ":this._x=g*y*_+p*S*T,this._y=p*S*_-g*y*T,this._z=p*y*T+g*S*_,this._w=p*y*_-g*S*T;break;case"YXZ":this._x=g*y*_+p*S*T,this._y=p*S*_-g*y*T,this._z=p*y*T-g*S*_,this._w=p*y*_+g*S*T;break;case"ZXY":this._x=g*y*_-p*S*T,this._y=p*S*_+g*y*T,this._z=p*y*T+g*S*_,this._w=p*y*_-g*S*T;break;case"ZYX":this._x=g*y*_-p*S*T,this._y=p*S*_+g*y*T,this._z=p*y*T-g*S*_,this._w=p*y*_+g*S*T;break;case"YZX":this._x=g*y*_+p*S*T,this._y=p*S*_+g*y*T,this._z=p*y*T-g*S*_,this._w=p*y*_-g*S*T;break;case"XZY":this._x=g*y*_-p*S*T,this._y=p*S*_-g*y*T,this._z=p*y*T+g*S*_,this._w=p*y*_+g*S*T;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],u=t[1],f=t[5],d=t[9],p=t[2],y=t[6],_=t[10],g=r+f+_;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(y-d)*S,this._y=(l-p)*S,this._z=(u-a)*S}else if(r>f&&r>_){const S=2*Math.sqrt(1+r-f-_);this._w=(y-d)/S,this._x=.25*S,this._y=(a+u)/S,this._z=(l+p)/S}else if(f>_){const S=2*Math.sqrt(1+f-r-_);this._w=(l-p)/S,this._x=(a+u)/S,this._y=.25*S,this._z=(d+y)/S}else{const S=2*Math.sqrt(1+_-r-f);this._w=(u-a)/S,this._x=(l+p)/S,this._y=(d+y)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,u=e._w,f=t._x,d=t._y,p=t._z,y=t._w;return this._x=r*y+u*f+a*p-l*d,this._y=a*y+u*d+l*f-r*p,this._z=l*y+u*p+r*d-a*f,this._w=u*y-r*f-a*d-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,a=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,a=-a,l=-l,u=-u,f=-f);let d=1-t;if(f<.9995){const p=Math.acos(f),y=Math.sin(p);d=Math.sin(d*p)/y,t=Math.sin(t*p)/y,this._x=this._x*d+r*t,this._y=this._y*d+a*t,this._z=this._z*d+l*t,this._w=this._w*d+u*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+a*t,this._z=this._z*d+l*t,this._w=this._w*d+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const yh=class yh{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(n0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(n0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,u=e.y,f=e.z,d=e.w,p=2*(u*a-f*r),y=2*(f*t-l*a),_=2*(l*r-u*t);return this.x=t+d*p+u*_-f*y,this.y=r+d*y+f*p-l*_,this.z=a+d*_+l*y-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,u=t.x,f=t.y,d=t.z;return this.x=a*d-l*f,this.y=l*u-r*d,this.z=r*f-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return _d.copy(this).projectOnVector(e),this.sub(_d)}reflect(e){return this.sub(_d.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yh.prototype.isVector3=!0;let J=yh;const _d=new J,n0=new Aa,Sh=class Sh{constructor(e,t,r,a,l,u,f,d,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,f,d,p)}set(e,t,r,a,l,u,f,d,p){const y=this.elements;return y[0]=e,y[1]=a,y[2]=f,y[3]=t,y[4]=l,y[5]=d,y[6]=r,y[7]=u,y[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],f=r[3],d=r[6],p=r[1],y=r[4],_=r[7],g=r[2],S=r[5],T=r[8],C=a[0],x=a[3],v=a[6],L=a[1],N=a[4],w=a[7],P=a[2],D=a[5],k=a[8];return l[0]=u*C+f*L+d*P,l[3]=u*x+f*N+d*D,l[6]=u*v+f*w+d*k,l[1]=p*C+y*L+_*P,l[4]=p*x+y*N+_*D,l[7]=p*v+y*w+_*k,l[2]=g*C+S*L+T*P,l[5]=g*x+S*N+T*D,l[8]=g*v+S*w+T*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],d=e[6],p=e[7],y=e[8];return t*u*y-t*f*p-r*l*y+r*f*d+a*l*p-a*u*d}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],d=e[6],p=e[7],y=e[8],_=y*u-f*p,g=f*d-y*l,S=p*l-u*d,T=t*_+r*g+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=_*C,e[1]=(a*p-y*r)*C,e[2]=(f*r-a*u)*C,e[3]=g*C,e[4]=(y*t-a*d)*C,e[5]=(a*l-f*t)*C,e[6]=S*C,e[7]=(r*d-p*t)*C,e[8]=(u*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,u,f){const d=Math.cos(l),p=Math.sin(l);return this.set(r*d,r*p,-r*(d*u+p*f)+u+e,-a*p,a*d,-a*(-p*u+d*f)+f+t,0,0,1),this}scale(e,t){return ya("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yd.makeScale(e,t)),this}rotate(e){return ya("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yd.makeRotation(-e)),this}translate(e,t){return ya("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Sh.prototype.isMatrix3=!0;let mt=Sh;const yd=new mt,i0=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),r0=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function T_(){const s={enabled:!0,workingColorSpace:xc,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ot&&(a.r=xr(a.r),a.g=xr(a.g),a.b=xr(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ot&&(a.r=Sa(a.r),a.g=Sa(a.g),a.b=Sa(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Kr?_c:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return ya("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return ya("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[xc]:{primaries:e,whitePoint:r,transfer:_c,toXYZ:i0,fromXYZ:r0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:e,whitePoint:r,transfer:Ot,toXYZ:i0,fromXYZ:r0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}}),s}const bt=T_();function xr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Sa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let na;class b_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{na===void 0&&(na=yc("canvas")),na.width=e.width,na.height=e.height;const a=na.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=na}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=xr(l[u]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(xr(t[r]/255)*255):t[r]=xr(t[r]);return{data:t,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let A_=0;class dh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=Zr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?l.push(Sd(a[u].image)):l.push(Sd(a[u]))}else l=Sd(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function Sd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?b_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let R_=0;const Md=new J;class On extends Ps{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,r=vr,a=vr,l=Rn,u=Ts,f=Bi,d=gi,p=On.DEFAULT_ANISOTROPY,y=Kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=Zr(),this.name="",this.source=new dh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Md).x}get height(){return this.source.getSize(Md).y}get depth(){return this.source.getSize(Md).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ct(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ct(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rs:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case cf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rs:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case cf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=gg;On.DEFAULT_ANISOTROPY=1;const Mh=class Mh{constructor(e=0,t=0,r=0,a=1){this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const d=e.elements,p=d[0],y=d[4],_=d[8],g=d[1],S=d[5],T=d[9],C=d[2],x=d[6],v=d[10];if(Math.abs(y-g)<.01&&Math.abs(_-C)<.01&&Math.abs(T-x)<.01){if(Math.abs(y+g)<.1&&Math.abs(_+C)<.1&&Math.abs(T+x)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(p+1)/2,w=(S+1)/2,P=(v+1)/2,D=(y+g)/4,k=(_+C)/4,E=(T+x)/4;return N>w&&N>P?N<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(N),a=D/r,l=k/r):w>P?w<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(w),r=D/a,l=E/a):P<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(P),r=k/l,a=E/l),this.set(r,a,l,t),this}let L=Math.sqrt((x-T)*(x-T)+(_-C)*(_-C)+(g-y)*(g-y));return Math.abs(L)<.001&&(L=1),this.x=(x-T)/L,this.y=(_-C)/L,this.z=(g-y)/L,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this.w=Rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this.w=Rt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Mh.prototype.isVector4=!0;let rn=Mh;class C_ extends Ps{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:r.depth},l=new On(a),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new dh(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends C_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Tg extends On{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class P_ extends On{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tc=class Tc{constructor(e,t,r,a,l,u,f,d,p,y,_,g,S,T,C,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,f,d,p,y,_,g,S,T,C,x)}set(e,t,r,a,l,u,f,d,p,y,_,g,S,T,C,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=a,v[1]=l,v[5]=u,v[9]=f,v[13]=d,v[2]=p,v[6]=y,v[10]=_,v[14]=g,v[3]=S,v[7]=T,v[11]=C,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,a=1/ia.setFromMatrixColumn(e,0).length(),l=1/ia.setFromMatrixColumn(e,1).length(),u=1/ia.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),d=Math.cos(a),p=Math.sin(a),y=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const g=u*y,S=u*_,T=f*y,C=f*_;t[0]=d*y,t[4]=-d*_,t[8]=p,t[1]=S+T*p,t[5]=g-C*p,t[9]=-f*d,t[2]=C-g*p,t[6]=T+S*p,t[10]=u*d}else if(e.order==="YXZ"){const g=d*y,S=d*_,T=p*y,C=p*_;t[0]=g+C*f,t[4]=T*f-S,t[8]=u*p,t[1]=u*_,t[5]=u*y,t[9]=-f,t[2]=S*f-T,t[6]=C+g*f,t[10]=u*d}else if(e.order==="ZXY"){const g=d*y,S=d*_,T=p*y,C=p*_;t[0]=g-C*f,t[4]=-u*_,t[8]=T+S*f,t[1]=S+T*f,t[5]=u*y,t[9]=C-g*f,t[2]=-u*p,t[6]=f,t[10]=u*d}else if(e.order==="ZYX"){const g=u*y,S=u*_,T=f*y,C=f*_;t[0]=d*y,t[4]=T*p-S,t[8]=g*p+C,t[1]=d*_,t[5]=C*p+g,t[9]=S*p-T,t[2]=-p,t[6]=f*d,t[10]=u*d}else if(e.order==="YZX"){const g=u*d,S=u*p,T=f*d,C=f*p;t[0]=d*y,t[4]=C-g*_,t[8]=T*_+S,t[1]=_,t[5]=u*y,t[9]=-f*y,t[2]=-p*y,t[6]=S*_+T,t[10]=g-C*_}else if(e.order==="XZY"){const g=u*d,S=u*p,T=f*d,C=f*p;t[0]=d*y,t[4]=-_,t[8]=p*y,t[1]=g*_+C,t[5]=u*y,t[9]=S*_-T,t[2]=T*_-S,t[6]=f*y,t[10]=C*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(N_,e,L_)}lookAt(e,t,r){const a=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),Hr.crossVectors(r,di),Hr.lengthSq()===0&&(Math.abs(r.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),Hr.crossVectors(r,di)),Hr.normalize(),Ul.crossVectors(di,Hr),a[0]=Hr.x,a[4]=Ul.x,a[8]=di.x,a[1]=Hr.y,a[5]=Ul.y,a[9]=di.y,a[2]=Hr.z,a[6]=Ul.z,a[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],f=r[4],d=r[8],p=r[12],y=r[1],_=r[5],g=r[9],S=r[13],T=r[2],C=r[6],x=r[10],v=r[14],L=r[3],N=r[7],w=r[11],P=r[15],D=a[0],k=a[4],E=a[8],I=a[12],j=a[1],W=a[5],$=a[9],fe=a[13],re=a[2],q=a[6],z=a[10],G=a[14],H=a[3],K=a[7],ie=a[11],O=a[15];return l[0]=u*D+f*j+d*re+p*H,l[4]=u*k+f*W+d*q+p*K,l[8]=u*E+f*$+d*z+p*ie,l[12]=u*I+f*fe+d*G+p*O,l[1]=y*D+_*j+g*re+S*H,l[5]=y*k+_*W+g*q+S*K,l[9]=y*E+_*$+g*z+S*ie,l[13]=y*I+_*fe+g*G+S*O,l[2]=T*D+C*j+x*re+v*H,l[6]=T*k+C*W+x*q+v*K,l[10]=T*E+C*$+x*z+v*ie,l[14]=T*I+C*fe+x*G+v*O,l[3]=L*D+N*j+w*re+P*H,l[7]=L*k+N*W+w*q+P*K,l[11]=L*E+N*$+w*z+P*ie,l[15]=L*I+N*fe+w*G+P*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],u=e[1],f=e[5],d=e[9],p=e[13],y=e[2],_=e[6],g=e[10],S=e[14],T=e[3],C=e[7],x=e[11],v=e[15],L=d*S-p*g,N=f*S-p*_,w=f*g-d*_,P=u*S-p*y,D=u*g-d*y,k=u*_-f*y;return t*(C*L-x*N+v*w)-r*(T*L-x*P+v*D)+a*(T*N-C*P+v*k)-l*(T*w-C*D+x*k)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[1],u=e[5],f=e[9],d=e[2],p=e[6],y=e[10];return t*(u*y-f*p)-r*(l*y-f*d)+a*(l*p-u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],d=e[6],p=e[7],y=e[8],_=e[9],g=e[10],S=e[11],T=e[12],C=e[13],x=e[14],v=e[15],L=t*f-r*u,N=t*d-a*u,w=t*p-l*u,P=r*d-a*f,D=r*p-l*f,k=a*p-l*d,E=y*C-_*T,I=y*x-g*T,j=y*v-S*T,W=_*x-g*C,$=_*v-S*C,fe=g*v-S*x,re=L*fe-N*$+w*W+P*j-D*I+k*E;if(re===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/re;return e[0]=(f*fe-d*$+p*W)*q,e[1]=(a*$-r*fe-l*W)*q,e[2]=(C*k-x*D+v*P)*q,e[3]=(g*D-_*k-S*P)*q,e[4]=(d*j-u*fe-p*I)*q,e[5]=(t*fe-a*j+l*I)*q,e[6]=(x*w-T*k-v*N)*q,e[7]=(y*k-g*w+S*N)*q,e[8]=(u*$-f*j+p*E)*q,e[9]=(r*j-t*$-l*E)*q,e[10]=(T*D-C*w+v*L)*q,e[11]=(_*w-y*D-S*L)*q,e[12]=(f*I-u*W-d*E)*q,e[13]=(t*W-r*I+a*E)*q,e[14]=(C*N-T*P-x*L)*q,e[15]=(y*P-_*N+g*L)*q,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,u=e.x,f=e.y,d=e.z,p=l*u,y=l*f;return this.set(p*u+r,p*f-a*d,p*d+a*f,0,p*f+a*d,y*f+r,y*d-a*u,0,p*d-a*f,y*d+a*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,u=t._y,f=t._z,d=t._w,p=l+l,y=u+u,_=f+f,g=l*p,S=l*y,T=l*_,C=u*y,x=u*_,v=f*_,L=d*p,N=d*y,w=d*_,P=r.x,D=r.y,k=r.z;return a[0]=(1-(C+v))*P,a[1]=(S+w)*P,a[2]=(T-N)*P,a[3]=0,a[4]=(S-w)*D,a[5]=(1-(g+v))*D,a[6]=(x+L)*D,a[7]=0,a[8]=(T+N)*k,a[9]=(x-L)*k,a[10]=(1-(g+C))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=ia.set(a[0],a[1],a[2]).length();const f=ia.set(a[4],a[5],a[6]).length(),d=ia.set(a[8],a[9],a[10]).length();l<0&&(u=-u),Fi.copy(this);const p=1/u,y=1/f,_=1/d;return Fi.elements[0]*=p,Fi.elements[1]*=p,Fi.elements[2]*=p,Fi.elements[4]*=y,Fi.elements[5]*=y,Fi.elements[6]*=y,Fi.elements[8]*=_,Fi.elements[9]*=_,Fi.elements[10]*=_,t.setFromRotationMatrix(Fi),r.x=u,r.y=f,r.z=d,this}makePerspective(e,t,r,a,l,u,f=$i,d=!1){const p=this.elements,y=2*l/(t-e),_=2*l/(r-a),g=(t+e)/(t-e),S=(r+a)/(r-a);let T,C;if(d)T=l/(u-l),C=u*l/(u-l);else if(f===$i)T=-(u+l)/(u-l),C=-2*u*l/(u-l);else if(f===Ao)T=-u/(u-l),C=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=y,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=_,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,a,l,u,f=$i,d=!1){const p=this.elements,y=2/(t-e),_=2/(r-a),g=-(t+e)/(t-e),S=-(r+a)/(r-a);let T,C;if(d)T=1/(u-l),C=u/(u-l);else if(f===$i)T=-2/(u-l),C=-(u+l)/(u-l);else if(f===Ao)T=-1/(u-l),C=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=y,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=_,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=T,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Tc.prototype.isMatrix4=!0;let Zt=Tc;const ia=new J,Fi=new Zt,N_=new J(0,0,0),L_=new J(1,1,1),Hr=new J,Ul=new J,di=new J,s0=new Zt,a0=new Aa;class es{constructor(e=0,t=0,r=0,a=es.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],f=a[8],d=a[1],p=a[5],y=a[9],_=a[2],g=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-y,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Rt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-y,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-y,S),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return s0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(s0,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return a0.setFromEuler(this),this.setFromQuaternion(a0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}es.DEFAULT_ORDER="XYZ";class fh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let D_=0;const o0=new J,ra=new Aa,dr=new Zt,Fl=new J,ho=new J,I_=new J,U_=new Aa,l0=new J(1,0,0),c0=new J(0,1,0),u0=new J(0,0,1),d0={type:"added"},F_={type:"removed"},sa={type:"childadded",child:null},Ed={type:"childremoved",child:null};class Xt extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D_++}),this.uuid=Zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new J,t=new es,r=new Aa,a=new J(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Zt},normalMatrix:{value:new mt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ra.setFromAxisAngle(e,t),this.quaternion.multiply(ra),this}rotateOnWorldAxis(e,t){return ra.setFromAxisAngle(e,t),this.quaternion.premultiply(ra),this}rotateX(e){return this.rotateOnAxis(l0,e)}rotateY(e){return this.rotateOnAxis(c0,e)}rotateZ(e){return this.rotateOnAxis(u0,e)}translateOnAxis(e,t){return o0.copy(e).applyQuaternion(this.quaternion),this.position.add(o0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(l0,e)}translateY(e){return this.translateOnAxis(c0,e)}translateZ(e){return this.translateOnAxis(u0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Fl.copy(e):Fl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dr.lookAt(ho,Fl,this.up):dr.lookAt(Fl,ho,this.up),this.quaternion.setFromRotationMatrix(dr),a&&(dr.extractRotation(a.matrixWorld),ra.setFromRotationMatrix(dr),this.quaternion.premultiply(ra.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(At("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(d0),sa.child=e,this.dispatchEvent(sa),sa.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(F_),Ed.child=e,this.dispatchEvent(Ed),Ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(dr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(d0),sa.child=e,this.dispatchEvent(sa),sa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,e,I_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,U_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,a=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*a,l[13]+=r-l[1]*t-l[5]*r-l[9]*a,l[14]+=a-l[2]*t-l[6]*r-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,y=d.length;p<y;p++){const _=d[p];l(e.shapes,_)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(l(e.materials,this.material[d]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];a.animations.push(l(e.animations,d))}}if(t){const f=u(e.geometries),d=u(e.materials),p=u(e.textures),y=u(e.images),_=u(e.shapes),g=u(e.skeletons),S=u(e.animations),T=u(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),p.length>0&&(r.textures=p),y.length>0&&(r.images=y),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=a,r;function u(f){const d=[];for(const p in f){const y=f[p];delete y.metadata,d.push(y)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Xt.DEFAULT_UP=new J(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Un extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O_={type:"move"};class wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,u=null;const f=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const C of e.hand.values()){const x=t.getJointPose(C,r),v=this._getHandJoint(p,C);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const y=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],g=y.position.distanceTo(_.position),S=.02,T=.005;p.inputState.pinching&&g>S+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=S-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(O_)))}return f!==null&&(f.visible=a!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Un;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const bg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wr={h:0,s:0,l:0},Ol={h:0,s:0,l:0};function Td(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class xt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=bt.workingColorSpace){return this.r=e,this.g=t,this.b=r,bt.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=bt.workingColorSpace){if(e=w_(e,1),t=Rt(t,0,1),r=Rt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Td(u,l,e+1/3),this.g=Td(u,l,e),this.b=Td(u,l,e-1/3)}return bt.colorSpaceToWorking(this,a),this}setStyle(e,t=vn){function r(l){l!==void 0&&parseFloat(l)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ct("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){const r=bg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return bt.workingToColorSpace(In.copy(this),e),Math.round(Rt(In.r*255,0,255))*65536+Math.round(Rt(In.g*255,0,255))*256+Math.round(Rt(In.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(In.copy(this),t);const r=In.r,a=In.g,l=In.b,u=Math.max(r,a,l),f=Math.min(r,a,l);let d,p;const y=(f+u)/2;if(f===u)d=0,p=0;else{const _=u-f;switch(p=y<=.5?_/(u+f):_/(2-u-f),u){case r:d=(a-l)/_+(a<l?6:0);break;case a:d=(l-r)/_+2;break;case l:d=(r-a)/_+4;break}d/=6}return e.h=d,e.s=p,e.l=y,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=vn){bt.workingToColorSpace(In.copy(this),e);const t=In.r,r=In.g,a=In.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Wr),this.setHSL(Wr.h+e,Wr.s+t,Wr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Wr),e.getHSL(Ol);const r=xd(Wr.h,Ol.h,t),a=xd(Wr.s,Ol.s,t),l=xd(Wr.l,Ol.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new xt;xt.NAMES=bg;class hh{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new xt(e),this.near=t,this.far=r}clone(){return new hh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class k_ extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new es,this.environmentIntensity=1,this.environmentRotation=new es,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Oi=new J,fr=new J,bd=new J,hr=new J,aa=new J,oa=new J,f0=new J,Ad=new J,Rd=new J,Cd=new J,Pd=new rn,Nd=new rn,Ld=new rn;class bi{constructor(e=new J,t=new J,r=new J){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),Oi.subVectors(e,t),a.cross(Oi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){Oi.subVectors(a,t),fr.subVectors(r,t),bd.subVectors(e,t);const u=Oi.dot(Oi),f=Oi.dot(fr),d=Oi.dot(bd),p=fr.dot(fr),y=fr.dot(bd),_=u*p-f*f;if(_===0)return l.set(0,0,0),null;const g=1/_,S=(p*d-f*y)*g,T=(u*y-f*d)*g;return l.set(1-S-T,T,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,hr)===null?!1:hr.x>=0&&hr.y>=0&&hr.x+hr.y<=1}static getInterpolation(e,t,r,a,l,u,f,d){return this.getBarycoord(e,t,r,a,hr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,hr.x),d.addScaledVector(u,hr.y),d.addScaledVector(f,hr.z),d)}static getInterpolatedAttribute(e,t,r,a,l,u){return Pd.setScalar(0),Nd.setScalar(0),Ld.setScalar(0),Pd.fromBufferAttribute(e,t),Nd.fromBufferAttribute(e,r),Ld.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Pd,l.x),u.addScaledVector(Nd,l.y),u.addScaledVector(Ld,l.z),u}static isFrontFacing(e,t,r,a){return Oi.subVectors(r,t),fr.subVectors(e,t),Oi.cross(fr).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),Oi.cross(fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return bi.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let u,f;aa.subVectors(a,r),oa.subVectors(l,r),Ad.subVectors(e,r);const d=aa.dot(Ad),p=oa.dot(Ad);if(d<=0&&p<=0)return t.copy(r);Rd.subVectors(e,a);const y=aa.dot(Rd),_=oa.dot(Rd);if(y>=0&&_<=y)return t.copy(a);const g=d*_-y*p;if(g<=0&&d>=0&&y<=0)return u=d/(d-y),t.copy(r).addScaledVector(aa,u);Cd.subVectors(e,l);const S=aa.dot(Cd),T=oa.dot(Cd);if(T>=0&&S<=T)return t.copy(l);const C=S*p-d*T;if(C<=0&&p>=0&&T<=0)return f=p/(p-T),t.copy(r).addScaledVector(oa,f);const x=y*T-S*_;if(x<=0&&_-y>=0&&S-T>=0)return f0.subVectors(l,a),f=(_-y)/(_-y+(S-T)),t.copy(a).addScaledVector(f0,f);const v=1/(x+C+g);return u=C*v,f=g*v,t.copy(r).addScaledVector(aa,u).addScaledVector(oa,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class No{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,ki):ki.fromBufferAttribute(l,u),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),kl.copy(r.boundingBox)),kl.applyMatrix4(e.matrixWorld),this.union(kl)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(po),Bl.subVectors(this.max,po),la.subVectors(e.a,po),ca.subVectors(e.b,po),ua.subVectors(e.c,po),Xr.subVectors(ca,la),jr.subVectors(ua,ca),vs.subVectors(la,ua);let t=[0,-Xr.z,Xr.y,0,-jr.z,jr.y,0,-vs.z,vs.y,Xr.z,0,-Xr.x,jr.z,0,-jr.x,vs.z,0,-vs.x,-Xr.y,Xr.x,0,-jr.y,jr.x,0,-vs.y,vs.x,0];return!Dd(t,la,ca,ua,Bl)||(t=[1,0,0,0,1,0,0,0,1],!Dd(t,la,ca,ua,Bl))?!1:(zl.crossVectors(Xr,jr),t=[zl.x,zl.y,zl.z],Dd(t,la,ca,ua,Bl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pr=[new J,new J,new J,new J,new J,new J,new J,new J],ki=new J,kl=new No,la=new J,ca=new J,ua=new J,Xr=new J,jr=new J,vs=new J,po=new J,Bl=new J,zl=new J,xs=new J;function Dd(s,e,t,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){xs.fromArray(s,l);const f=a.x*Math.abs(xs.x)+a.y*Math.abs(xs.y)+a.z*Math.abs(xs.z),d=e.dot(xs),p=t.dot(xs),y=r.dot(xs);if(Math.max(-Math.max(d,p,y),Math.min(d,p,y))>f)return!1}return!0}const fn=new J,Vl=new rt;let B_=0;class Ai extends Ps{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:B_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Vf,this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Vl.fromBufferAttribute(this,t),Vl.applyMatrix3(e),this.setXY(t,Vl.x,Vl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=qi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ht(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),r=Ht(r,this.array),a=Ht(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),r=Ht(r,this.array),a=Ht(a,this.array),l=Ht(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vf&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ag extends Ai{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Rg extends Ai{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class pn extends Ai{constructor(e,t,r){super(new Float32Array(e),t,r)}}const z_=new No,mo=new J,Id=new J;class Rc{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):z_.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mo.subVectors(e,this.center);const t=mo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(mo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Id.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mo.copy(e.center).add(Id)),this.expandByPoint(mo.copy(e.center).sub(Id))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let V_=0;const wi=new Zt,Ud=new Xt,da=new J,fi=new No,go=new No,En=new J;class kn extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=Zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(y_(e)?Rg:Ag)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new mt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,t,r){return wi.makeTranslation(e,t,r),this.applyMatrix4(wi),this}scale(e,t,r){return wi.makeScale(e,t,r),this.applyMatrix4(wi),this}lookAt(e){return Ud.lookAt(e),Ud.updateMatrix(),this.applyMatrix4(Ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(da).negate(),this.translate(da.x,da.y,da.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new pn(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new No);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];fi.setFromBufferAttribute(l),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const r=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];go.setFromBufferAttribute(f),this.morphTargetsRelative?(En.addVectors(fi.min,go.min),fi.expandByPoint(En),En.addVectors(fi.max,go.max),fi.expandByPoint(En)):(fi.expandByPoint(go.min),fi.expandByPoint(go.max))}fi.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)En.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(En));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],d=this.morphTargetsRelative;for(let p=0,y=f.count;p<y;p++)En.fromBufferAttribute(f,p),d&&(da.fromBufferAttribute(e,p),En.add(da)),a=Math.max(a,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Ai(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],d=[];for(let E=0;E<r.count;E++)f[E]=new J,d[E]=new J;const p=new J,y=new J,_=new J,g=new rt,S=new rt,T=new rt,C=new J,x=new J;function v(E,I,j){p.fromBufferAttribute(r,E),y.fromBufferAttribute(r,I),_.fromBufferAttribute(r,j),g.fromBufferAttribute(l,E),S.fromBufferAttribute(l,I),T.fromBufferAttribute(l,j),y.sub(p),_.sub(p),S.sub(g),T.sub(g);const W=1/(S.x*T.y-T.x*S.y);isFinite(W)&&(C.copy(y).multiplyScalar(T.y).addScaledVector(_,-S.y).multiplyScalar(W),x.copy(_).multiplyScalar(S.x).addScaledVector(y,-T.x).multiplyScalar(W),f[E].add(C),f[I].add(C),f[j].add(C),d[E].add(x),d[I].add(x),d[j].add(x))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let E=0,I=L.length;E<I;++E){const j=L[E],W=j.start,$=j.count;for(let fe=W,re=W+$;fe<re;fe+=3)v(e.getX(fe+0),e.getX(fe+1),e.getX(fe+2))}const N=new J,w=new J,P=new J,D=new J;function k(E){P.fromBufferAttribute(a,E),D.copy(P);const I=f[E];N.copy(I),N.sub(P.multiplyScalar(P.dot(I))).normalize(),w.crossVectors(D,I);const W=w.dot(d[E])<0?-1:1;u.setXYZW(E,N.x,N.y,N.z,W)}for(let E=0,I=L.length;E<I;++E){const j=L[E],W=j.start,$=j.count;for(let fe=W,re=W+$;fe<re;fe+=3)k(e.getX(fe+0)),k(e.getX(fe+1)),k(e.getX(fe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Ai(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const a=new J,l=new J,u=new J,f=new J,d=new J,p=new J,y=new J,_=new J;if(e)for(let g=0,S=e.count;g<S;g+=3){const T=e.getX(g+0),C=e.getX(g+1),x=e.getX(g+2);a.fromBufferAttribute(t,T),l.fromBufferAttribute(t,C),u.fromBufferAttribute(t,x),y.subVectors(u,l),_.subVectors(a,l),y.cross(_),f.fromBufferAttribute(r,T),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,x),f.add(y),d.add(y),p.add(y),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(C,d.x,d.y,d.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let g=0,S=t.count;g<S;g+=3)a.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),y.subVectors(u,l),_.subVectors(a,l),y.cross(_),r.setXYZ(g+0,y.x,y.y,y.z),r.setXYZ(g+1,y.x,y.y,y.z),r.setXYZ(g+2,y.x,y.y,y.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(f,d){const p=f.array,y=f.itemSize,_=f.normalized,g=new p.constructor(d.length*y);let S=0,T=0;for(let C=0,x=d.length;C<x;C++){f.isInterleavedBufferAttribute?S=d[C]*f.data.stride+f.offset:S=d[C]*y;for(let v=0;v<y;v++)g[T++]=p[S++]}return new Ai(g,y,_)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,r=this.index.array,a=this.attributes;for(const f in a){const d=a[f],p=e(d,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const d=[],p=l[f];for(let y=0,_=p.length;y<_;y++){const g=p[y],S=e(g,r);d.push(S)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const p=r[d];e.data.attributes[d]=p.toJSON(e.data)}const a={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],y=[];for(let _=0,g=p.length;_<g;_++){const S=p[_];y.push(S.toJSON(e.data))}y.length>0&&(a[d]=y,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const p in a){const y=a[p];this.setAttribute(p,y.clone(t))}const l=e.morphAttributes;for(const p in l){const y=[],_=l[p];for(let g=0,S=_.length;g<S;g++)y.push(_[g].clone(t));this.morphAttributes[p]=y}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,y=u.length;p<y;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class G_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vf,this.updateRanges=[],this.version=0,this.uuid=Zr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let a=0,l=this.stride;a<l;a++)this.array[e+a]=t.array[r+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Wn=new J;class Mc{constructor(e,t,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)Wn.fromBufferAttribute(this,t),Wn.applyMatrix4(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Wn.fromBufferAttribute(this,t),Wn.applyNormalMatrix(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Wn.fromBufferAttribute(this,t),Wn.transformDirection(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=qi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ht(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qi(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),r=Ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),r=Ht(r,this.array),a=Ht(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),r=Ht(r,this.array),a=Ht(a,this.array),l=Ht(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this.data.array[e+3]=l,this}clone(e){if(e===void 0){Sc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return new Ai(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Mc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Sc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let H_=0;class Ns extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=Zr(),this.name="",this.type="Material",this.blending=_a,this.side=Jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jd,this.blendDst=ef,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ta,this.stencilZFail=ta,this.stencilZPass=ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ct(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ct(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector2&&r&&r.isVector2||a&&a.isEuler&&r&&r.isEuler||a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==_a&&(r.blending=this.blending),this.side!==Jr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Jd&&(r.blendSrc=this.blendSrc),this.blendDst!==ef&&(r.blendDst=this.blendDst),this.blendEquation!==Es&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ma&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ta&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ta&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ta&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const f in l){const d=l[f];delete d.metadata,u.push(d)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new xt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new rt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ro extends Ns{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let fa;const vo=new J,ha=new J,pa=new J,ma=new rt,xo=new rt,Cg=new Zt,Gl=new J,_o=new J,Hl=new J,h0=new rt,Fd=new rt,p0=new rt;class Ec extends Xt{constructor(e=new Ro){if(super(),this.isSprite=!0,this.type="Sprite",fa===void 0){fa=new kn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new G_(t,5);fa.setIndex([0,1,2,0,2,3]),fa.setAttribute("position",new Mc(r,3,0,!1)),fa.setAttribute("uv",new Mc(r,2,3,!1))}this.geometry=fa,this.material=e,this.center=new rt(.5,.5),this.count=1}raycast(e,t){e.camera===null&&At('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ha.setFromMatrixScale(this.matrixWorld),Cg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),pa.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ha.multiplyScalar(-pa.z);const r=this.material.rotation;let a,l;r!==0&&(l=Math.cos(r),a=Math.sin(r));const u=this.center;Wl(Gl.set(-.5,-.5,0),pa,u,ha,a,l),Wl(_o.set(.5,-.5,0),pa,u,ha,a,l),Wl(Hl.set(.5,.5,0),pa,u,ha,a,l),h0.set(0,0),Fd.set(1,0),p0.set(1,1);let f=e.ray.intersectTriangle(Gl,_o,Hl,!1,vo);if(f===null&&(Wl(_o.set(-.5,.5,0),pa,u,ha,a,l),Fd.set(0,1),f=e.ray.intersectTriangle(Gl,Hl,_o,!1,vo),f===null))return;const d=e.ray.origin.distanceTo(vo);d<e.near||d>e.far||t.push({distance:d,point:vo.clone(),uv:bi.getInterpolation(vo,Gl,_o,Hl,h0,Fd,p0,new rt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Wl(s,e,t,r,a,l){ma.subVectors(s,t).addScalar(.5).multiply(r),a!==void 0?(xo.x=l*ma.x-a*ma.y,xo.y=a*ma.x+l*ma.y):xo.copy(ma),s.copy(e),s.x+=xo.x,s.y+=xo.y,s.applyMatrix4(Cg)}const mr=new J,Od=new J,Xl=new J,Yr=new J,kd=new J,jl=new J,Bd=new J;class ph{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mr.copy(this.origin).addScaledVector(this.direction,t),mr.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Od.copy(e).add(t).multiplyScalar(.5),Xl.copy(t).sub(e).normalize(),Yr.copy(this.origin).sub(Od);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Xl),f=Yr.dot(this.direction),d=-Yr.dot(Xl),p=Yr.lengthSq(),y=Math.abs(1-u*u);let _,g,S,T;if(y>0)if(_=u*d-f,g=u*f-d,T=l*y,_>=0)if(g>=-T)if(g<=T){const C=1/y;_*=C,g*=C,S=_*(_+u*g+2*f)+g*(u*_+g+2*d)+p}else g=l,_=Math.max(0,-(u*g+f)),S=-_*_+g*(g+2*d)+p;else g=-l,_=Math.max(0,-(u*g+f)),S=-_*_+g*(g+2*d)+p;else g<=-T?(_=Math.max(0,-(-u*l+f)),g=_>0?-l:Math.min(Math.max(-l,-d),l),S=-_*_+g*(g+2*d)+p):g<=T?(_=0,g=Math.min(Math.max(-l,-d),l),S=g*(g+2*d)+p):(_=Math.max(0,-(u*l+f)),g=_>0?l:Math.min(Math.max(-l,-d),l),S=-_*_+g*(g+2*d)+p);else g=u>0?-l:l,_=Math.max(0,-(u*g+f)),S=-_*_+g*(g+2*d)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(Od).addScaledVector(Xl,g),S}intersectSphere(e,t){mr.subVectors(e.center,this.origin);const r=mr.dot(this.direction),a=mr.dot(mr)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),f=r-u,d=r+u;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,u,f,d;const p=1/this.direction.x,y=1/this.direction.y,_=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,a=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,a=(e.min.x-g.x)*p),y>=0?(l=(e.min.y-g.y)*y,u=(e.max.y-g.y)*y):(l=(e.max.y-g.y)*y,u=(e.min.y-g.y)*y),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),_>=0?(f=(e.min.z-g.z)*_,d=(e.max.z-g.z)*_):(f=(e.max.z-g.z)*_,d=(e.min.z-g.z)*_),r>d||f>a)||((f>r||r!==r)&&(r=f),(d<a||a!==a)&&(a=d),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,mr)!==null}intersectTriangle(e,t,r,a,l){kd.subVectors(t,e),jl.subVectors(r,e),Bd.crossVectors(kd,jl);let u=this.direction.dot(Bd),f;if(u>0){if(a)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Yr.subVectors(this.origin,e);const d=f*this.direction.dot(jl.crossVectors(Yr,jl));if(d<0)return null;const p=f*this.direction.dot(kd.cross(Yr));if(p<0||d+p>u)return null;const y=-f*Yr.dot(Bd);return y<0?null:this.at(y/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qn extends Ns{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new es,this.combine=mg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const m0=new Zt,_s=new ph,Yl=new Rc,g0=new J,ql=new J,Kl=new J,$l=new J,zd=new J,Zl=new J,v0=new J,Ql=new J;class st extends Xt{constructor(e=new kn,t=new qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Zl.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const y=f[d],_=l[d];y!==0&&(zd.fromBufferAttribute(_,e),u?Zl.addScaledVector(zd,y):Zl.addScaledVector(zd.sub(t),y))}t.add(Zl)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Yl.copy(r.boundingSphere),Yl.applyMatrix4(l),_s.copy(e.ray).recast(e.near),!(Yl.containsPoint(_s.origin)===!1&&(_s.intersectSphere(Yl,g0)===null||_s.origin.distanceToSquared(g0)>(e.far-e.near)**2))&&(m0.copy(l).invert(),_s.copy(e.ray).applyMatrix4(m0),!(r.boundingBox!==null&&_s.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,_s)))}_computeIntersections(e,t,r){let a;const l=this.geometry,u=this.material,f=l.index,d=l.attributes.position,p=l.attributes.uv,y=l.attributes.uv1,_=l.attributes.normal,g=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let T=0,C=g.length;T<C;T++){const x=g[T],v=u[x.materialIndex],L=Math.max(x.start,S.start),N=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let w=L,P=N;w<P;w+=3){const D=f.getX(w),k=f.getX(w+1),E=f.getX(w+2);a=Jl(this,v,e,r,p,y,_,D,k,E),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const T=Math.max(0,S.start),C=Math.min(f.count,S.start+S.count);for(let x=T,v=C;x<v;x+=3){const L=f.getX(x),N=f.getX(x+1),w=f.getX(x+2);a=Jl(this,u,e,r,p,y,_,L,N,w),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(u))for(let T=0,C=g.length;T<C;T++){const x=g[T],v=u[x.materialIndex],L=Math.max(x.start,S.start),N=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let w=L,P=N;w<P;w+=3){const D=w,k=w+1,E=w+2;a=Jl(this,v,e,r,p,y,_,D,k,E),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const T=Math.max(0,S.start),C=Math.min(d.count,S.start+S.count);for(let x=T,v=C;x<v;x+=3){const L=x,N=x+1,w=x+2;a=Jl(this,u,e,r,p,y,_,L,N,w),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}}}function W_(s,e,t,r,a,l,u,f){let d;if(e.side===ri?d=r.intersectTriangle(u,l,a,!0,f):d=r.intersectTriangle(a,l,u,e.side===Jr,f),d===null)return null;Ql.copy(f),Ql.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Ql);return p<t.near||p>t.far?null:{distance:p,point:Ql.clone(),object:s}}function Jl(s,e,t,r,a,l,u,f,d,p){s.getVertexPosition(f,ql),s.getVertexPosition(d,Kl),s.getVertexPosition(p,$l);const y=W_(s,e,t,r,ql,Kl,$l,v0);if(y){const _=new J;bi.getBarycoord(v0,ql,Kl,$l,_),a&&(y.uv=bi.getInterpolatedAttribute(a,f,d,p,_,new rt)),l&&(y.uv1=bi.getInterpolatedAttribute(l,f,d,p,_,new rt)),u&&(y.normal=bi.getInterpolatedAttribute(u,f,d,p,_,new J),y.normal.dot(r.direction)>0&&y.normal.multiplyScalar(-1));const g={a:f,b:d,c:p,normal:new J,materialIndex:0};bi.getNormal(ql,Kl,$l,g.normal),y.face=g,y.barycoord=_}return y}class X_ extends On{constructor(e=null,t=1,r=1,a,l,u,f,d,p=An,y=An,_,g){super(null,u,f,d,p,y,a,l,_,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vd=new J,j_=new J,Y_=new mt;class Ms{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=Vd.subVectors(r,t).cross(j_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const a=e.delta(Vd),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(a,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Y_.getNormalMatrix(e),a=this.coplanarPoint(Vd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new Rc,q_=new rt(.5,.5),ec=new J;class mh{constructor(e=new Ms,t=new Ms,r=new Ms,a=new Ms,l=new Ms,u=new Ms){this.planes=[e,t,r,a,l,u]}set(e,t,r,a,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=$i,r=!1){const a=this.planes,l=e.elements,u=l[0],f=l[1],d=l[2],p=l[3],y=l[4],_=l[5],g=l[6],S=l[7],T=l[8],C=l[9],x=l[10],v=l[11],L=l[12],N=l[13],w=l[14],P=l[15];if(a[0].setComponents(p-u,S-y,v-T,P-L).normalize(),a[1].setComponents(p+u,S+y,v+T,P+L).normalize(),a[2].setComponents(p+f,S+_,v+C,P+N).normalize(),a[3].setComponents(p-f,S-_,v-C,P-N).normalize(),r)a[4].setComponents(d,g,x,w).normalize(),a[5].setComponents(p-d,S-g,v-x,P-w).normalize();else if(a[4].setComponents(p-d,S-g,v-x,P-w).normalize(),t===$i)a[5].setComponents(p+d,S+g,v+x,P+w).normalize();else if(t===Ao)a[5].setComponents(d,g,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){ys.center.set(0,0,0);const t=q_.distanceTo(e.center);return ys.radius=.7071067811865476+t,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(ec.x=a.normal.x>0?e.max.x:e.min.x,ec.y=a.normal.y>0?e.max.y:e.min.y,ec.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ec)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pg extends Ns{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const x0=new Zt,Hf=new ph,tc=new Rc,nc=new J;class K_ extends Xt{constructor(e=new kn,t=new Pg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),tc.copy(r.boundingSphere),tc.applyMatrix4(a),tc.radius+=l,e.ray.intersectsSphere(tc)===!1)return;x0.copy(a).invert(),Hf.copy(e.ray).applyMatrix4(x0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,p=r.index,_=r.attributes.position;if(p!==null){const g=Math.max(0,u.start),S=Math.min(p.count,u.start+u.count);for(let T=g,C=S;T<C;T++){const x=p.getX(T);nc.fromBufferAttribute(_,x),_0(nc,x,d,a,e,t,this)}}else{const g=Math.max(0,u.start),S=Math.min(_.count,u.start+u.count);for(let T=g,C=S;T<C;T++)nc.fromBufferAttribute(_,T),_0(nc,T,d,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function _0(s,e,t,r,a,l,u){const f=Hf.distanceSqToPoint(s);if(f<t){const d=new J;Hf.closestPointToPoint(s,d),d.applyMatrix4(r);const p=a.ray.origin.distanceTo(d);if(p<a.near||p>a.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Ng extends On{constructor(e=[],t=As,r,a,l,u,f,d,p,y){super(e,t,r,a,l,u,f,d,p,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zi extends On{constructor(e,t,r,a,l,u,f,d,p){super(e,t,r,a,l,u,f,d,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wa extends On{constructor(e,t,r=er,a,l,u,f=An,d=An,p,y=_r,_=1){if(y!==_r&&y!==bs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:_};super(g,a,l,u,f,d,y,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $_ extends wa{constructor(e,t=er,r=As,a,l,u=An,f=An,d,p=_r){const y={width:e,height:e,depth:1},_=[y,y,y,y,y,y];super(e,e,t,r,a,l,u,f,d,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Lg extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Wt extends kn{constructor(e=1,t=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const f=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const d=[],p=[],y=[],_=[];let g=0,S=0;T("z","y","x",-1,-1,r,t,e,u,l,0),T("z","y","x",1,-1,r,t,-e,u,l,1),T("x","z","y",1,1,e,r,t,a,u,2),T("x","z","y",1,-1,e,r,-t,a,u,3),T("x","y","z",1,-1,e,t,r,a,l,4),T("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(d),this.setAttribute("position",new pn(p,3)),this.setAttribute("normal",new pn(y,3)),this.setAttribute("uv",new pn(_,2));function T(C,x,v,L,N,w,P,D,k,E,I){const j=w/k,W=P/E,$=w/2,fe=P/2,re=D/2,q=k+1,z=E+1;let G=0,H=0;const K=new J;for(let ie=0;ie<z;ie++){const O=ie*W-fe;for(let te=0;te<q;te++){const Ne=te*j-$;K[C]=Ne*L,K[x]=O*N,K[v]=re,p.push(K.x,K.y,K.z),K[C]=0,K[x]=0,K[v]=D>0?1:-1,y.push(K.x,K.y,K.z),_.push(te/k),_.push(1-ie/E),G+=1}}for(let ie=0;ie<E;ie++)for(let O=0;O<k;O++){const te=g+O+q*ie,Ne=g+O+q*(ie+1),Ve=g+(O+1)+q*(ie+1),Ge=g+(O+1)+q*ie;d.push(te,Ne,Ge),d.push(Ne,Ve,Ge),H+=6}f.addGroup(S,H,I),S+=H,g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Co extends kn{constructor(e=1,t=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:a},t=Math.max(3,t);const l=[],u=[],f=[],d=[],p=new J,y=new rt;u.push(0,0,0),f.push(0,0,1),d.push(.5,.5);for(let _=0,g=3;_<=t;_++,g+=3){const S=r+_/t*a;p.x=e*Math.cos(S),p.y=e*Math.sin(S),u.push(p.x,p.y,p.z),f.push(0,0,1),y.x=(u[g]/e+1)/2,y.y=(u[g+1]/e+1)/2,d.push(y.x,y.y)}for(let _=1;_<=t;_++)l.push(_,_+1,0);this.setIndex(l),this.setAttribute("position",new pn(u,3)),this.setAttribute("normal",new pn(f,3)),this.setAttribute("uv",new pn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Qr extends kn{constructor(e=1,t=1,r=1,a=32,l=1,u=!1,f=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:a,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:d};const p=this;a=Math.floor(a),l=Math.floor(l);const y=[],_=[],g=[],S=[];let T=0;const C=[],x=r/2;let v=0;L(),u===!1&&(e>0&&N(!0),t>0&&N(!1)),this.setIndex(y),this.setAttribute("position",new pn(_,3)),this.setAttribute("normal",new pn(g,3)),this.setAttribute("uv",new pn(S,2));function L(){const w=new J,P=new J;let D=0;const k=(t-e)/r;for(let E=0;E<=l;E++){const I=[],j=E/l,W=j*(t-e)+e;for(let $=0;$<=a;$++){const fe=$/a,re=fe*d+f,q=Math.sin(re),z=Math.cos(re);P.x=W*q,P.y=-j*r+x,P.z=W*z,_.push(P.x,P.y,P.z),w.set(q,k,z).normalize(),g.push(w.x,w.y,w.z),S.push(fe,1-j),I.push(T++)}C.push(I)}for(let E=0;E<a;E++)for(let I=0;I<l;I++){const j=C[I][E],W=C[I+1][E],$=C[I+1][E+1],fe=C[I][E+1];(e>0||I!==0)&&(y.push(j,W,fe),D+=3),(t>0||I!==l-1)&&(y.push(W,$,fe),D+=3)}p.addGroup(v,D,0),v+=D}function N(w){const P=T,D=new rt,k=new J;let E=0;const I=w===!0?e:t,j=w===!0?1:-1;for(let $=1;$<=a;$++)_.push(0,x*j,0),g.push(0,j,0),S.push(.5,.5),T++;const W=T;for(let $=0;$<=a;$++){const re=$/a*d+f,q=Math.cos(re),z=Math.sin(re);k.x=I*z,k.y=x*j,k.z=I*q,_.push(k.x,k.y,k.z),g.push(0,j,0),D.x=q*.5+.5,D.y=z*.5*j+.5,S.push(D.x,D.y),T++}for(let $=0;$<a;$++){const fe=P+$,re=W+$;w===!0?y.push(re,re+1,fe):y.push(re+1,re,fe),E+=3}p.addGroup(v,E,w===!0?1:2),v+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Kn extends kn{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,u=t/2,f=Math.floor(r),d=Math.floor(a),p=f+1,y=d+1,_=e/f,g=t/d,S=[],T=[],C=[],x=[];for(let v=0;v<y;v++){const L=v*g-u;for(let N=0;N<p;N++){const w=N*_-l;T.push(w,-L,0),C.push(0,0,1),x.push(N/f),x.push(1-v/d)}}for(let v=0;v<d;v++)for(let L=0;L<f;L++){const N=L+p*v,w=L+p*(v+1),P=L+1+p*(v+1),D=L+1+p*v;S.push(N,w,D),S.push(w,P,D)}this.setIndex(S),this.setAttribute("position",new pn(T,3)),this.setAttribute("normal",new pn(C,3)),this.setAttribute("uv",new pn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kn(e.width,e.height,e.widthSegments,e.heightSegments)}}class gh extends kn{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const d=Math.min(u+f,Math.PI);let p=0;const y=[],_=new J,g=new J,S=[],T=[],C=[],x=[];for(let v=0;v<=r;v++){const L=[],N=v/r,w=u+N*f,P=e*Math.cos(w),D=Math.sqrt(e*e-P*P);let k=0;v===0&&u===0?k=.5/t:v===r&&d===Math.PI&&(k=-.5/t);for(let E=0;E<=t;E++){const I=E/t,j=a+I*l;_.x=-D*Math.cos(j),_.y=P,_.z=D*Math.sin(j),T.push(_.x,_.y,_.z),g.copy(_).normalize(),C.push(g.x,g.y,g.z),x.push(I+k,1-N),L.push(p++)}y.push(L)}for(let v=0;v<r;v++)for(let L=0;L<t;L++){const N=y[v][L+1],w=y[v][L],P=y[v+1][L],D=y[v+1][L+1];(v!==0||u>0)&&S.push(N,w,D),(v!==r-1||d<Math.PI)&&S.push(w,P,D)}this.setIndex(S),this.setAttribute("position",new pn(T,3)),this.setAttribute("normal",new pn(C,3)),this.setAttribute("uv",new pn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ta(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];if(y0(a))a.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone();else if(Array.isArray(a))if(y0(a[0])){const l=[];for(let u=0,f=a.length;u<f;u++)l[u]=a[u].clone();e[t][r]=l}else e[t][r]=a.slice();else e[t][r]=a}}return e}function Yn(s){const e={};for(let t=0;t<s.length;t++){const r=Ta(s[t]);for(const a in r)e[a]=r[a]}return e}function y0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Z_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Dg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const Po={clone:Ta,merge:Yn};var Q_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,J_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends Ns{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Q_,this.fragmentShader=J_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ta(e.uniforms),this.uniformsGroups=Z_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(this.uniforms[r]={},a.type){case"t":this.uniforms[r].value=t[a.value]||null;break;case"c":this.uniforms[r].value=new xt().setHex(a.value);break;case"v2":this.uniforms[r].value=new rt().fromArray(a.value);break;case"v3":this.uniforms[r].value=new J().fromArray(a.value);break;case"v4":this.uniforms[r].value=new rn().fromArray(a.value);break;case"m3":this.uniforms[r].value=new mt().fromArray(a.value);break;case"m4":this.uniforms[r].value=new Zt().fromArray(a.value);break;default:this.uniforms[r].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Ig extends Fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vt extends Ns{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zf,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new es,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ey extends Ns{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=f_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ty extends Ns{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Cc extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class ny extends Cc{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Gd=new Zt,S0=new J,M0=new J;class Ug{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mh,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;S0.setFromMatrixPosition(e.matrixWorld),t.position.copy(S0),M0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(M0),t.updateMatrixWorld(),Gd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gd,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ao||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Gd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ic=new J,rc=new Aa,Xi=new J;class Fg extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=$i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ic,rc,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ic,rc,Xi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(ic,rc,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ic,rc,Xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const qr=new J,E0=new rt,w0=new rt;class pi extends Fg{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gf*2*Math.atan(Math.tan(vd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qr.x,qr.y).multiplyScalar(-e/qr.z),qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(qr.x,qr.y).multiplyScalar(-e/qr.z)}getViewSize(e,t){return this.getViewBounds(e,E0,w0),t.subVectors(w0,E0)}setViewOffset(e,t,r,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vd*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;l+=u.offsetX*a/d,t-=u.offsetY*r/p,a*=u.width/d,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class iy extends Ug{constructor(){super(new pi(90,1,.5,500)),this.isPointLightShadow=!0}}class Wf extends Cc{constructor(e,t,r=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new iy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Pc extends Fg{constructor(e=-1,t=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=y*this.view.offsetY,d=f-y*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ry extends Ug{constructor(){super(new Pc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class T0 extends Cc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new ry}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class sy extends Cc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ga=-90,va=1;class ay extends Xt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new pi(ga,va,e,t);a.layers=this.layers,this.add(a);const l=new pi(ga,va,e,t);l.layers=this.layers,this.add(l);const u=new pi(ga,va,e,t);u.layers=this.layers,this.add(u);const f=new pi(ga,va,e,t);f.layers=this.layers,this.add(f);const d=new pi(ga,va,e,t);d.layers=this.layers,this.add(d);const p=new pi(ga,va,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,u,f,d]=t;for(const p of t)this.remove(p);if(e===$i)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Ao)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,d,p,y]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,y),e.setRenderTarget(_,g,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class oy extends pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ly{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=cy.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function cy(){this._document.hidden===!1&&this.reset()}const b0=new Zt;class Og{constructor(e,t,r=0,a=1/0){this.ray=new ph(e,t),this.near=r,this.far=a,this.camera=null,this.layers=new fh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):At("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return b0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(b0),this}intersectObject(e,t=!0,r=[]){return Xf(e,this,r,t),r.sort(A0),r}intersectObjects(e,t=!0,r=[]){for(let a=0,l=e.length;a<l;a++)Xf(e[a],this,r,t);return r.sort(A0),r}}function A0(s,e){return s.distance-e.distance}function Xf(s,e,t,r){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(a=!1),a===!0&&r===!0){const l=s.children;for(let u=0,f=l.length;u<f;u++)Xf(l[u],e,t,!0)}}class uy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ct("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Eh=class Eh{constructor(e,t,r,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,a){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=a,this}};Eh.prototype.isMatrix2=!0;let R0=Eh;function C0(s,e,t,r){const a=dy(r);switch(t){case Sg:return s*e;case Eg:return s*e/a.components*a.byteLength;case ah:return s*e/a.components*a.byteLength;case Cs:return s*e*2/a.components*a.byteLength;case oh:return s*e*2/a.components*a.byteLength;case Mg:return s*e*3/a.components*a.byteLength;case Bi:return s*e*4/a.components*a.byteLength;case lh:return s*e*4/a.components*a.byteLength;case cc:case uc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case dc:case fc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case df:case hf:return Math.max(s,16)*Math.max(e,8)/4;case uf:case ff:return Math.max(s,8)*Math.max(e,8)/2;case pf:case mf:case vf:case xf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case gf:case gc:case _f:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Mf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case wf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Tf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case bf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Af:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Rf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Pf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Nf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Lf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Df:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case If:case Uf:case Ff:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Of:case kf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case vc:case Bf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dy(s){switch(s){case gi:case vg:return{byteLength:1,components:1};case To:case xg:case vi:return{byteLength:2,components:1};case rh:case sh:return{byteLength:2,components:4};case er:case ih:case Ki:return{byteLength:4,components:1};case _g:case yg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$f}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$f);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kg(){let s=null,e=!1,t=null,r=null;function a(l,u){t(l,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function fy(s){const e=new WeakMap;function t(f,d){const p=f.array,y=f.usage,_=p.byteLength,g=s.createBuffer();s.bindBuffer(d,g),s.bufferData(d,p,y),f.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,d,p){const y=d.array,_=d.updateRanges;if(s.bindBuffer(p,f),_.length===0)s.bufferSubData(p,0,y);else{_.sort((S,T)=>S.start-T.start);let g=0;for(let S=1;S<_.length;S++){const T=_[g],C=_[S];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++g,_[g]=C)}_.length=g+1;for(let S=0,T=_.length;S<T;S++){const C=_[S];s.bufferSubData(p,C.start*y.BYTES_PER_ELEMENT,y,C.start,C.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(s.deleteBuffer(d.buffer),e.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const y=e.get(f);(!y||y.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,d),p.version=f.version}}return{get:a,remove:l,update:u}}var hy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,py=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,my=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_y=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,My=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ey=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ty=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,by=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ay=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ny=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ly=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Dy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Iy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Fy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Oy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ky=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,By=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,jy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Yy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ky=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$y=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,sS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,aS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mS=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,gS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_S=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ES=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,PS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,LS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,DS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,US=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,FS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,OS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,HS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$S=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ZS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,QS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,JS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,t1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,i1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,o1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,l1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,c1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,u1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,d1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,f1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const h1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,y1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,S1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,M1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,R1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,L1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,I1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,U1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,k1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,G1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,X1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,j1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_t={alphahash_fragment:hy,alphahash_pars_fragment:py,alphamap_fragment:my,alphamap_pars_fragment:gy,alphatest_fragment:vy,alphatest_pars_fragment:xy,aomap_fragment:_y,aomap_pars_fragment:yy,batching_pars_vertex:Sy,batching_vertex:My,begin_vertex:Ey,beginnormal_vertex:wy,bsdfs:Ty,iridescence_fragment:by,bumpmap_pars_fragment:Ay,clipping_planes_fragment:Ry,clipping_planes_pars_fragment:Cy,clipping_planes_pars_vertex:Py,clipping_planes_vertex:Ny,color_fragment:Ly,color_pars_fragment:Dy,color_pars_vertex:Iy,color_vertex:Uy,common:Fy,cube_uv_reflection_fragment:Oy,defaultnormal_vertex:ky,displacementmap_pars_vertex:By,displacementmap_vertex:zy,emissivemap_fragment:Vy,emissivemap_pars_fragment:Gy,colorspace_fragment:Hy,colorspace_pars_fragment:Wy,envmap_fragment:Xy,envmap_common_pars_fragment:jy,envmap_pars_fragment:Yy,envmap_pars_vertex:qy,envmap_physical_pars_fragment:sS,envmap_vertex:Ky,fog_vertex:$y,fog_pars_vertex:Zy,fog_fragment:Qy,fog_pars_fragment:Jy,gradientmap_pars_fragment:eS,lightmap_pars_fragment:tS,lights_lambert_fragment:nS,lights_lambert_pars_fragment:iS,lights_pars_begin:rS,lights_toon_fragment:aS,lights_toon_pars_fragment:oS,lights_phong_fragment:lS,lights_phong_pars_fragment:cS,lights_physical_fragment:uS,lights_physical_pars_fragment:dS,lights_fragment_begin:fS,lights_fragment_maps:hS,lights_fragment_end:pS,lightprobes_pars_fragment:mS,logdepthbuf_fragment:gS,logdepthbuf_pars_fragment:vS,logdepthbuf_pars_vertex:xS,logdepthbuf_vertex:_S,map_fragment:yS,map_pars_fragment:SS,map_particle_fragment:MS,map_particle_pars_fragment:ES,metalnessmap_fragment:wS,metalnessmap_pars_fragment:TS,morphinstance_vertex:bS,morphcolor_vertex:AS,morphnormal_vertex:RS,morphtarget_pars_vertex:CS,morphtarget_vertex:PS,normal_fragment_begin:NS,normal_fragment_maps:LS,normal_pars_fragment:DS,normal_pars_vertex:IS,normal_vertex:US,normalmap_pars_fragment:FS,clearcoat_normal_fragment_begin:OS,clearcoat_normal_fragment_maps:kS,clearcoat_pars_fragment:BS,iridescence_pars_fragment:zS,opaque_fragment:VS,packing:GS,premultiplied_alpha_fragment:HS,project_vertex:WS,dithering_fragment:XS,dithering_pars_fragment:jS,roughnessmap_fragment:YS,roughnessmap_pars_fragment:qS,shadowmap_pars_fragment:KS,shadowmap_pars_vertex:$S,shadowmap_vertex:ZS,shadowmask_pars_fragment:QS,skinbase_vertex:JS,skinning_pars_vertex:e1,skinning_vertex:t1,skinnormal_vertex:n1,specularmap_fragment:i1,specularmap_pars_fragment:r1,tonemapping_fragment:s1,tonemapping_pars_fragment:a1,transmission_fragment:o1,transmission_pars_fragment:l1,uv_pars_fragment:c1,uv_pars_vertex:u1,uv_vertex:d1,worldpos_vertex:f1,background_vert:h1,background_frag:p1,backgroundCube_vert:m1,backgroundCube_frag:g1,cube_vert:v1,cube_frag:x1,depth_vert:_1,depth_frag:y1,distance_vert:S1,distance_frag:M1,equirect_vert:E1,equirect_frag:w1,linedashed_vert:T1,linedashed_frag:b1,meshbasic_vert:A1,meshbasic_frag:R1,meshlambert_vert:C1,meshlambert_frag:P1,meshmatcap_vert:N1,meshmatcap_frag:L1,meshnormal_vert:D1,meshnormal_frag:I1,meshphong_vert:U1,meshphong_frag:F1,meshphysical_vert:O1,meshphysical_frag:k1,meshtoon_vert:B1,meshtoon_frag:z1,points_vert:V1,points_frag:G1,shadow_vert:H1,shadow_frag:W1,sprite_vert:X1,sprite_frag:j1},We={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Yi={basic:{uniforms:Yn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Yn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new xt(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Yn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Yn([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Yn([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new xt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Yn([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Yn([We.points,We.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Yn([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Yn([We.common,We.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Yn([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Yn([We.sprite,We.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:Yn([We.common,We.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:Yn([We.lights,We.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Yi.physical={uniforms:Yn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const sc={r:0,b:0,g:0},Y1=new Zt,Bg=new mt;Bg.set(-1,0,0,0,1,0,0,0,1);function q1(s,e,t,r,a,l){const u=new xt(0);let f=a===!0?0:1,d,p,y=null,_=0,g=null;function S(L){let N=L.isScene===!0?L.background:null;if(N&&N.isTexture){const w=L.backgroundBlurriness>0;N=e.get(N,w)}return N}function T(L){let N=!1;const w=S(L);w===null?x(u,f):w&&w.isColor&&(x(w,1),N=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,l):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||N)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(L,N){const w=S(N);w&&(w.isCubeTexture||w.mapping===Ac)?(p===void 0&&(p=new st(new Wt(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Ta(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(P,D,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=w,p.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Y1.makeRotationFromEuler(N.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Bg),p.material.toneMapped=bt.getTransfer(w.colorSpace)!==Ot,(y!==w||_!==w.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,y=w,_=w.version,g=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null)):w&&w.isTexture&&(d===void 0&&(d=new st(new Kn(2,2),new Fn({name:"BackgroundMaterial",uniforms:Ta(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:Jr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=w,d.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,d.material.toneMapped=bt.getTransfer(w.colorSpace)!==Ot,w.matrixAutoUpdate===!0&&w.updateMatrix(),d.material.uniforms.uvTransform.value.copy(w.matrix),(y!==w||_!==w.version||g!==s.toneMapping)&&(d.material.needsUpdate=!0,y=w,_=w.version,g=s.toneMapping),d.layers.enableAll(),L.unshift(d,d.geometry,d.material,0,0,null))}function x(L,N){L.getRGB(sc,Dg(s)),t.buffers.color.setClear(sc.r,sc.g,sc.b,N,l)}function v(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(L,N=1){u.set(L),f=N,x(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(L){f=L,x(u,f)},render:T,addToRenderList:C,dispose:v}}function K1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=g(null);let l=a,u=!1;function f(W,$,fe,re,q){let z=!1;const G=_(W,re,fe,$);l!==G&&(l=G,p(l.object)),z=S(W,re,fe,q),z&&T(W,re,fe,q),q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(z||u)&&(u=!1,w(W,$,fe,re),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function d(){return s.createVertexArray()}function p(W){return s.bindVertexArray(W)}function y(W){return s.deleteVertexArray(W)}function _(W,$,fe,re){const q=re.wireframe===!0;let z=r[$.id];z===void 0&&(z={},r[$.id]=z);const G=W.isInstancedMesh===!0?W.id:0;let H=z[G];H===void 0&&(H={},z[G]=H);let K=H[fe.id];K===void 0&&(K={},H[fe.id]=K);let ie=K[q];return ie===void 0&&(ie=g(d()),K[q]=ie),ie}function g(W){const $=[],fe=[],re=[];for(let q=0;q<t;q++)$[q]=0,fe[q]=0,re[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:fe,attributeDivisors:re,object:W,attributes:{},index:null}}function S(W,$,fe,re){const q=l.attributes,z=$.attributes;let G=0;const H=fe.getAttributes();for(const K in H)if(H[K].location>=0){const O=q[K];let te=z[K];if(te===void 0&&(K==="instanceMatrix"&&W.instanceMatrix&&(te=W.instanceMatrix),K==="instanceColor"&&W.instanceColor&&(te=W.instanceColor)),O===void 0||O.attribute!==te||te&&O.data!==te.data)return!0;G++}return l.attributesNum!==G||l.index!==re}function T(W,$,fe,re){const q={},z=$.attributes;let G=0;const H=fe.getAttributes();for(const K in H)if(H[K].location>=0){let O=z[K];O===void 0&&(K==="instanceMatrix"&&W.instanceMatrix&&(O=W.instanceMatrix),K==="instanceColor"&&W.instanceColor&&(O=W.instanceColor));const te={};te.attribute=O,O&&O.data&&(te.data=O.data),q[K]=te,G++}l.attributes=q,l.attributesNum=G,l.index=re}function C(){const W=l.newAttributes;for(let $=0,fe=W.length;$<fe;$++)W[$]=0}function x(W){v(W,0)}function v(W,$){const fe=l.newAttributes,re=l.enabledAttributes,q=l.attributeDivisors;fe[W]=1,re[W]===0&&(s.enableVertexAttribArray(W),re[W]=1),q[W]!==$&&(s.vertexAttribDivisor(W,$),q[W]=$)}function L(){const W=l.newAttributes,$=l.enabledAttributes;for(let fe=0,re=$.length;fe<re;fe++)$[fe]!==W[fe]&&(s.disableVertexAttribArray(fe),$[fe]=0)}function N(W,$,fe,re,q,z,G){G===!0?s.vertexAttribIPointer(W,$,fe,q,z):s.vertexAttribPointer(W,$,fe,re,q,z)}function w(W,$,fe,re){C();const q=re.attributes,z=fe.getAttributes(),G=$.defaultAttributeValues;for(const H in z){const K=z[H];if(K.location>=0){let ie=q[H];if(ie===void 0&&(H==="instanceMatrix"&&W.instanceMatrix&&(ie=W.instanceMatrix),H==="instanceColor"&&W.instanceColor&&(ie=W.instanceColor)),ie!==void 0){const O=ie.normalized,te=ie.itemSize,Ne=e.get(ie);if(Ne===void 0)continue;const Ve=Ne.buffer,Ge=Ne.type,ae=Ne.bytesPerElement,ye=Ge===s.INT||Ge===s.UNSIGNED_INT||ie.gpuType===ih;if(ie.isInterleavedBufferAttribute){const he=ie.data,Te=he.stride,Fe=ie.offset;if(he.isInstancedInterleavedBuffer){for(let ze=0;ze<K.locationSize;ze++)v(K.location+ze,he.meshPerAttribute);W.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ze=0;ze<K.locationSize;ze++)x(K.location+ze);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let ze=0;ze<K.locationSize;ze++)N(K.location+ze,te/K.locationSize,Ge,O,Te*ae,(Fe+te/K.locationSize*ze)*ae,ye)}else{if(ie.isInstancedBufferAttribute){for(let he=0;he<K.locationSize;he++)v(K.location+he,ie.meshPerAttribute);W.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let he=0;he<K.locationSize;he++)x(K.location+he);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let he=0;he<K.locationSize;he++)N(K.location+he,te/K.locationSize,Ge,O,te*ae,te/K.locationSize*he*ae,ye)}}else if(G!==void 0){const O=G[H];if(O!==void 0)switch(O.length){case 2:s.vertexAttrib2fv(K.location,O);break;case 3:s.vertexAttrib3fv(K.location,O);break;case 4:s.vertexAttrib4fv(K.location,O);break;default:s.vertexAttrib1fv(K.location,O)}}}}L()}function P(){I();for(const W in r){const $=r[W];for(const fe in $){const re=$[fe];for(const q in re){const z=re[q];for(const G in z)y(z[G].object),delete z[G];delete re[q]}}delete r[W]}}function D(W){if(r[W.id]===void 0)return;const $=r[W.id];for(const fe in $){const re=$[fe];for(const q in re){const z=re[q];for(const G in z)y(z[G].object),delete z[G];delete re[q]}}delete r[W.id]}function k(W){for(const $ in r){const fe=r[$];for(const re in fe){const q=fe[re];if(q[W.id]===void 0)continue;const z=q[W.id];for(const G in z)y(z[G].object),delete z[G];delete q[W.id]}}}function E(W){for(const $ in r){const fe=r[$],re=W.isInstancedMesh===!0?W.id:0,q=fe[re];if(q!==void 0){for(const z in q){const G=q[z];for(const H in G)y(G[H].object),delete G[H];delete q[z]}delete fe[re],Object.keys(fe).length===0&&delete r[$]}}}function I(){j(),u=!0,l!==a&&(l=a,p(l.object))}function j(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:I,resetDefaultState:j,dispose:P,releaseStatesOfGeometry:D,releaseStatesOfObject:E,releaseStatesOfProgram:k,initAttributes:C,enableAttribute:x,disableUnusedAttributes:L}}function $1(s,e,t){let r;function a(d){r=d}function l(d,p){s.drawArrays(r,d,p),t.update(p,r,1)}function u(d,p,y){y!==0&&(s.drawArraysInstanced(r,d,p,y),t.update(p,r,y))}function f(d,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,p,0,y);let g=0;for(let S=0;S<y;S++)g+=p[S];t.update(g,r,1)}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function Z1(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(k){return!(k!==Bi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const E=k===vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==gi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Ki&&!E)}function d(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const y=d(p);y!==p&&(ct("WebGLRenderer:",p,"not supported, using",y,"instead."),p=y);const _=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:L,maxVaryings:N,maxFragmentUniforms:w,maxSamples:P,samples:D}}function Q1(s){const e=this;let t=null,r=0,a=!1,l=!1;const u=new Ms,f=new mt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const S=_.length!==0||g||r!==0||a;return a=g,r=_.length,S},this.beginShadows=function(){l=!0,y(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,g){t=y(_,g,0)},this.setState=function(_,g,S){const T=_.clippingPlanes,C=_.clipIntersection,x=_.clipShadows,v=s.get(_);if(!a||T===null||T.length===0||l&&!x)l?y(null):p();else{const L=l?0:r,N=L*4;let w=v.clippingState||null;d.value=w,w=y(T,g,N,S);for(let P=0;P!==N;++P)w[P]=t[P];v.clippingState=w,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=L}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function y(_,g,S,T){const C=_!==null?_.length:0;let x=null;if(C!==0){if(x=d.value,T!==!0||x===null){const v=S+C*4,L=g.matrixWorldInverse;f.getNormalMatrix(L),(x===null||x.length<v)&&(x=new Float32Array(v));for(let N=0,w=S;N!==C;++N,w+=4)u.copy(_[N]).applyMatrix4(L,f),u.normal.toArray(x,w),x[w+3]=u.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,x}}const $r=4,P0=[.125,.215,.35,.446,.526,.582],ws=20,J1=256,yo=new Pc,N0=new xt;let Hd=null,Wd=0,Xd=0,jd=!1;const eM=new J;class L0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,a=100,l={}){const{size:u=256,position:f=eM}=l;Hd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),Xd=this._renderer.getActiveMipmapLevel(),jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,a,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=U0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=I0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hd,Wd,Xd),this._renderer.xr.enabled=jd,e.scissorTest=!1,xa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===Ea?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),Xd=this._renderer.getActiveMipmapLevel(),jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:vi,format:Bi,colorSpace:xc,depthBuffer:!1},a=D0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=D0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tM(l)),this._blurMaterial=iM(l,e,t),this._ggxMaterial=nM(l,e,t)}return a}_compileMaterial(e){const t=new st(new kn,e);this._renderer.compile(t,yo)}_sceneToCubeUV(e,t,r,a,l){const d=new pi(90,1,t,r),p=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,S=_.toneMapping;_.getClearColor(N0),_.toneMapping=Ji,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(a),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new st(new Wt,new qn({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,x=C.material;let v=!1;const L=e.background;L?L.isColor&&(x.color.copy(L),e.background=null,v=!0):(x.color.copy(N0),v=!0);for(let N=0;N<6;N++){const w=N%3;w===0?(d.up.set(0,p[N],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+y[N],l.y,l.z)):w===1?(d.up.set(0,0,p[N]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+y[N],l.z)):(d.up.set(0,p[N],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+y[N]));const P=this._cubeSize;xa(a,w*P,N>2?P:0,P,P),_.setRenderTarget(a),v&&_.render(C,d),_.render(e,d)}_.toneMapping=S,_.autoClear=g,e.background=L}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===As||e.mapping===Ea;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=U0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=I0());const l=a?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;xa(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,yo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const a=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const d=u.uniforms,p=r/(this._lodMeshes.length-1),y=t/(this._lodMeshes.length-1),_=Math.sqrt(p*p-y*y),g=0+p*1.25,S=_*g,{_lodMax:T}=this,C=this._sizeLods[r],x=3*C*(r>T-$r?r-T+$r:0),v=4*(this._cubeSize-C);d.envMap.value=e.texture,d.roughness.value=S,d.mipInt.value=T-t,xa(l,x,v,3*C,2*C),a.setRenderTarget(l),a.render(f,yo),d.envMap.value=l.texture,d.roughness.value=0,d.mipInt.value=T-r,xa(e,x,v,3*C,2*C),a.setRenderTarget(e),a.render(f,yo)}_blur(e,t,r,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,a,"latitudinal",l),this._halfBlur(u,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,u,f){const d=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");const y=3,_=this._lodMeshes[a];_.material=p;const g=p.uniforms,S=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ws-1),C=l/T,x=isFinite(l)?1+Math.floor(y*C):ws;x>ws&&ct(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ws}`);const v=[];let L=0;for(let k=0;k<ws;++k){const E=k/C,I=Math.exp(-E*E/2);v.push(I),k===0?L+=I:k<x&&(L+=2*I)}for(let k=0;k<v.length;k++)v[k]=v[k]/L;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=v,g.latitudinal.value=u==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:N}=this;g.dTheta.value=T,g.mipInt.value=N-r;const w=this._sizeLods[a],P=3*w*(a>N-$r?a-N+$r:0),D=4*(this._cubeSize-w);xa(t,P,D,3*w,2*w),d.setRenderTarget(t),d.render(_,yo)}}function tM(s){const e=[],t=[],r=[];let a=s;const l=s-$r+1+P0.length;for(let u=0;u<l;u++){const f=Math.pow(2,a);e.push(f);let d=1/f;u>s-$r?d=P0[u-s+$r-1]:u===0&&(d=0),t.push(d);const p=1/(f-2),y=-p,_=1+p,g=[y,y,_,y,_,_,y,y,_,_,y,_],S=6,T=6,C=3,x=2,v=1,L=new Float32Array(C*T*S),N=new Float32Array(x*T*S),w=new Float32Array(v*T*S);for(let D=0;D<S;D++){const k=D%3*2/3-1,E=D>2?0:-1,I=[k,E,0,k+2/3,E,0,k+2/3,E+1,0,k,E,0,k+2/3,E+1,0,k,E+1,0];L.set(I,C*T*D),N.set(g,x*T*D);const j=[D,D,D,D,D,D];w.set(j,v*T*D)}const P=new kn;P.setAttribute("position",new Ai(L,C)),P.setAttribute("uv",new Ai(N,x)),P.setAttribute("faceIndex",new Ai(w,v)),r.push(new st(P,null)),a>$r&&a--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function D0(s,e,t){const r=new si(s,e,t);return r.texture.mapping=Ac,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function xa(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function nM(s,e,t){return new Fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:J1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Nc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function iM(s,e,t){const r=new Float32Array(ws),a=new J(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function I0(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function U0(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Nc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class zg extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Ng(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Wt(5,5,5),l=new Fn({name:"CubemapFromEquirect",uniforms:Ta(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ri,blending:Qi});l.uniforms.tEquirect.value=t;const u=new st(a,l),f=t.minFilter;return t.minFilter===Ts&&(t.minFilter=Rn),new ay(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,a);e.setRenderTarget(l)}}function rM(s){let e=new WeakMap,t=new WeakMap,r=null;function a(g,S=!1){return g==null?null:S?u(g):l(g)}function l(g){if(g&&g.isTexture){const S=g.mapping;if(S===pd||S===md)if(e.has(g)){const T=e.get(g).texture;return f(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const C=new zg(T.height);return C.fromEquirectangularTexture(s,g),e.set(g,C),g.addEventListener("dispose",p),f(C.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const S=g.mapping,T=S===pd||S===md,C=S===As||S===Ea;if(T||C){let x=t.get(g);const v=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return r===null&&(r=new L0(s)),x=T?r.fromEquirectangular(g,x):r.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),x.texture;if(x!==void 0)return x.texture;{const L=g.image;return T&&L&&L.height>0||C&&L&&d(L)?(r===null&&(r=new L0(s)),x=T?r.fromEquirectangular(g):r.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),g.addEventListener("dispose",y),x.texture):null}}}return g}function f(g,S){return S===pd?g.mapping=As:S===md&&(g.mapping=Ea),g}function d(g){let S=0;const T=6;for(let C=0;C<T;C++)g[C]!==void 0&&S++;return S===T}function p(g){const S=g.target;S.removeEventListener("dispose",p);const T=e.get(S);T!==void 0&&(e.delete(S),T.dispose())}function y(g){const S=g.target;S.removeEventListener("dispose",y);const T=t.get(S);T!==void 0&&(t.delete(S),T.dispose())}function _(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:_}}function sM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const a=s.getExtension(r);return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&ya("WebGLRenderer: "+r+" extension not supported."),a}}}function aM(s,e,t,r){const a={},l=new WeakMap;function u(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",u),delete a[g.id];const S=l.get(g);S&&(e.remove(S),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(_,g){return a[g.id]===!0||(g.addEventListener("dispose",u),a[g.id]=!0,t.memory.geometries++),g}function d(_){const g=_.attributes;for(const S in g)e.update(g[S],s.ARRAY_BUFFER)}function p(_){const g=[],S=_.index,T=_.attributes.position;let C=0;if(T===void 0)return;if(S!==null){const L=S.array;C=S.version;for(let N=0,w=L.length;N<w;N+=3){const P=L[N+0],D=L[N+1],k=L[N+2];g.push(P,D,D,k,k,P)}}else{const L=T.array;C=T.version;for(let N=0,w=L.length/3-1;N<w;N+=3){const P=N+0,D=N+1,k=N+2;g.push(P,D,D,k,k,P)}}const x=new(T.count>=65535?Rg:Ag)(g,1);x.version=C;const v=l.get(_);v&&e.remove(v),l.set(_,x)}function y(_){const g=l.get(_);if(g){const S=_.index;S!==null&&g.version<S.version&&p(_)}else p(_);return l.get(_)}return{get:f,update:d,getWireframeAttribute:y}}function oM(s,e,t){let r;function a(_){r=_}let l,u;function f(_){l=_.type,u=_.bytesPerElement}function d(_,g){s.drawElements(r,g,l,_*u),t.update(g,r,1)}function p(_,g,S){S!==0&&(s.drawElementsInstanced(r,g,l,_*u,S),t.update(g,r,S))}function y(_,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,_,0,S);let C=0;for(let x=0;x<S;x++)C+=g[x];t.update(C,r,1)}this.setMode=a,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=y}function lM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:At("WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function cM(s,e,t){const r=new WeakMap,a=new rn;function l(u,f,d){const p=u.morphTargetInfluences,y=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=y!==void 0?y.length:0;let g=r.get(f);if(g===void 0||g.count!==_){let j=function(){E.dispose(),r.delete(f),f.removeEventListener("dispose",j)};var S=j;g!==void 0&&g.texture.dispose();const T=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],N=f.morphAttributes.color||[];let w=0;T===!0&&(w=1),C===!0&&(w=2),x===!0&&(w=3);let P=f.attributes.position.count*w,D=1;P>e.maxTextureSize&&(D=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const k=new Float32Array(P*D*4*_),E=new Tg(k,P,D,_);E.type=Ki,E.needsUpdate=!0;const I=w*4;for(let W=0;W<_;W++){const $=v[W],fe=L[W],re=N[W],q=P*D*4*W;for(let z=0;z<$.count;z++){const G=z*I;T===!0&&(a.fromBufferAttribute($,z),k[q+G+0]=a.x,k[q+G+1]=a.y,k[q+G+2]=a.z,k[q+G+3]=0),C===!0&&(a.fromBufferAttribute(fe,z),k[q+G+4]=a.x,k[q+G+5]=a.y,k[q+G+6]=a.z,k[q+G+7]=0),x===!0&&(a.fromBufferAttribute(re,z),k[q+G+8]=a.x,k[q+G+9]=a.y,k[q+G+10]=a.z,k[q+G+11]=re.itemSize===4?a.w:1)}}g={count:_,texture:E,size:new rt(P,D)},r.set(f,g),f.addEventListener("dispose",j)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let T=0;for(let x=0;x<p.length;x++)T+=p[x];const C=f.morphTargetsRelative?1:1-T;d.getUniforms().setValue(s,"morphTargetBaseInfluence",C),d.getUniforms().setValue(s,"morphTargetInfluences",p)}d.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function uM(s,e,t,r,a){let l=new WeakMap;function u(p){const y=a.render.frame,_=p.geometry,g=e.get(p,_);if(l.get(g)!==y&&(e.update(g),l.set(g,y)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==y&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,y))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==y&&(S.update(),l.set(S,y))}return g}function f(){l=new WeakMap}function d(p){const y=p.target;y.removeEventListener("dispose",d),r.releaseStatesOfObject(y),t.remove(y.instanceMatrix),y.instanceColor!==null&&t.remove(y.instanceColor)}return{update:u,dispose:f}}const dM={[Zf]:"LINEAR_TONE_MAPPING",[Qf]:"REINHARD_TONE_MAPPING",[Jf]:"CINEON_TONE_MAPPING",[bc]:"ACES_FILMIC_TONE_MAPPING",[th]:"AGX_TONE_MAPPING",[nh]:"NEUTRAL_TONE_MAPPING",[eh]:"CUSTOM_TONE_MAPPING"};function fM(s,e,t,r,a,l){const u=new si(e,t,{type:s,depthBuffer:a,stencilBuffer:l,samples:r?4:0,depthTexture:a?new wa(e,t):void 0}),f=new si(e,t,{type:vi,depthBuffer:!1,stencilBuffer:!1}),d=new kn;d.setAttribute("position",new pn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new pn([0,2,0,0,2,0],2));const p=new Ig({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),y=new st(d,p),_=new Pc(-1,1,1,-1,0,1);let g=null,S=null,T=!1,C,x=null,v=[],L=!1;this.setSize=function(N,w){u.setSize(N,w),f.setSize(N,w);for(let P=0;P<v.length;P++){const D=v[P];D.setSize&&D.setSize(N,w)}},this.setEffects=function(N){v=N,L=v.length>0&&v[0].isRenderPass===!0;const w=u.width,P=u.height;for(let D=0;D<v.length;D++){const k=v[D];k.setSize&&k.setSize(w,P)}},this.begin=function(N,w){if(T||N.toneMapping===Ji&&v.length===0)return!1;if(x=w,w!==null){const P=w.width,D=w.height;(u.width!==P||u.height!==D)&&this.setSize(P,D)}return L===!1&&N.setRenderTarget(u),C=N.toneMapping,N.toneMapping=Ji,!0},this.hasRenderPass=function(){return L},this.end=function(N,w){N.toneMapping=C,T=!0;let P=u,D=f;for(let k=0;k<v.length;k++){const E=v[k];if(E.enabled!==!1&&(E.render(N,D,P,w),E.needsSwap!==!1)){const I=P;P=D,D=I}}if(g!==N.outputColorSpace||S!==N.toneMapping){g=N.outputColorSpace,S=N.toneMapping,p.defines={},bt.getTransfer(g)===Ot&&(p.defines.SRGB_TRANSFER="");const k=dM[S];k&&(p.defines[k]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=P.texture,N.setRenderTarget(x),N.render(y,_),x=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),f.dispose(),d.dispose(),p.dispose()}}const Vg=new On,jf=new wa(1,1),Gg=new Tg,Hg=new P_,Wg=new Ng,F0=[],O0=[],k0=new Float32Array(16),B0=new Float32Array(9),z0=new Float32Array(4);function Ra(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=F0[a];if(l===void 0&&(l=new Float32Array(a),F0[a]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function xn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function _n(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Lc(s,e){let t=O0[e];t===void 0&&(t=new Int32Array(e),O0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function hM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function pM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2fv(this.addr,e),_n(t,e)}}function mM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;s.uniform3fv(this.addr,e),_n(t,e)}}function gM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4fv(this.addr,e),_n(t,e)}}function vM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(xn(t,r))return;z0.set(r),s.uniformMatrix2fv(this.addr,!1,z0),_n(t,r)}}function xM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(xn(t,r))return;B0.set(r),s.uniformMatrix3fv(this.addr,!1,B0),_n(t,r)}}function _M(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(xn(t,r))return;k0.set(r),s.uniformMatrix4fv(this.addr,!1,k0),_n(t,r)}}function yM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function SM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2iv(this.addr,e),_n(t,e)}}function MM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;s.uniform3iv(this.addr,e),_n(t,e)}}function EM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4iv(this.addr,e),_n(t,e)}}function wM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function TM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2uiv(this.addr,e),_n(t,e)}}function bM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;s.uniform3uiv(this.addr,e),_n(t,e)}}function AM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4uiv(this.addr,e),_n(t,e)}}function RM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(jf.compareFunction=t.isReversedDepthBuffer()?uh:ch,l=jf):l=Vg,t.setTexture2D(e||l,a)}function CM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Hg,a)}function PM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Wg,a)}function NM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Gg,a)}function LM(s){switch(s){case 5126:return hM;case 35664:return pM;case 35665:return mM;case 35666:return gM;case 35674:return vM;case 35675:return xM;case 35676:return _M;case 5124:case 35670:return yM;case 35667:case 35671:return SM;case 35668:case 35672:return MM;case 35669:case 35673:return EM;case 5125:return wM;case 36294:return TM;case 36295:return bM;case 36296:return AM;case 35678:case 36198:case 36298:case 36306:case 35682:return RM;case 35679:case 36299:case 36307:return CM;case 35680:case 36300:case 36308:case 36293:return PM;case 36289:case 36303:case 36311:case 36292:return NM}}function DM(s,e){s.uniform1fv(this.addr,e)}function IM(s,e){const t=Ra(e,this.size,2);s.uniform2fv(this.addr,t)}function UM(s,e){const t=Ra(e,this.size,3);s.uniform3fv(this.addr,t)}function FM(s,e){const t=Ra(e,this.size,4);s.uniform4fv(this.addr,t)}function OM(s,e){const t=Ra(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function kM(s,e){const t=Ra(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function BM(s,e){const t=Ra(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function zM(s,e){s.uniform1iv(this.addr,e)}function VM(s,e){s.uniform2iv(this.addr,e)}function GM(s,e){s.uniform3iv(this.addr,e)}function HM(s,e){s.uniform4iv(this.addr,e)}function WM(s,e){s.uniform1uiv(this.addr,e)}function XM(s,e){s.uniform2uiv(this.addr,e)}function jM(s,e){s.uniform3uiv(this.addr,e)}function YM(s,e){s.uniform4uiv(this.addr,e)}function qM(s,e,t){const r=this.cache,a=e.length,l=Lc(t,a);xn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=jf:u=Vg;for(let f=0;f!==a;++f)t.setTexture2D(e[f]||u,l[f])}function KM(s,e,t){const r=this.cache,a=e.length,l=Lc(t,a);xn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||Hg,l[u])}function $M(s,e,t){const r=this.cache,a=e.length,l=Lc(t,a);xn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||Wg,l[u])}function ZM(s,e,t){const r=this.cache,a=e.length,l=Lc(t,a);xn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||Gg,l[u])}function QM(s){switch(s){case 5126:return DM;case 35664:return IM;case 35665:return UM;case 35666:return FM;case 35674:return OM;case 35675:return kM;case 35676:return BM;case 5124:case 35670:return zM;case 35667:case 35671:return VM;case 35668:case 35672:return GM;case 35669:case 35673:return HM;case 5125:return WM;case 36294:return XM;case 36295:return jM;case 36296:return YM;case 35678:case 36198:case 36298:case 36306:case 35682:return qM;case 35679:case 36299:case 36307:return KM;case 35680:case 36300:case 36308:case 36293:return $M;case 36289:case 36303:case 36311:case 36292:return ZM}}class JM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=LM(t.type)}}class eE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=QM(t.type)}}class tE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const f=a[l];f.setValue(e,t[f.id],r)}}}const Yd=/(\w+)(\])?(\[|\.)?/g;function V0(s,e){s.seq.push(e),s.map[e.id]=e}function nE(s,e,t){const r=s.name,a=r.length;for(Yd.lastIndex=0;;){const l=Yd.exec(r),u=Yd.lastIndex;let f=l[1];const d=l[2]==="]",p=l[3];if(d&&(f=f|0),p===void 0||p==="["&&u+2===a){V0(t,p===void 0?new JM(f,s,e):new eE(f,s,e));break}else{let _=t.map[f];_===void 0&&(_=new tE(f),V0(t,_)),t=_}}}class hc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),d=e.getUniformLocation(t,f.name);nE(f,d,this)}const a=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(u):l.push(u);a.length>0&&(this.seq=a.concat(l))}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,u=t.length;l!==u;++l){const f=t[l],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&r.push(u)}return r}}function G0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const iE=37297;let rE=0;function sE(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const H0=new mt;function aE(s){bt._getMatrix(H0,bt.workingColorSpace,s);const e=`mat3( ${H0.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(s)){case _c:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function W0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+sE(s.getShaderSource(e),f)}else return l}function oE(s,e){const t=aE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const lE={[Zf]:"Linear",[Qf]:"Reinhard",[Jf]:"Cineon",[bc]:"ACESFilmic",[th]:"AgX",[nh]:"Neutral",[eh]:"Custom"};function cE(s,e){const t=lE[e];return t===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ac=new J;function uE(){bt.getLuminanceCoefficients(ac);const s=ac.x.toFixed(4),e=ac.y.toFixed(4),t=ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function fE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function hE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function Eo(s){return s!==""}function X0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function j0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yf(s){return s.replace(pE,gE)}const mE=new Map;function gE(s,e){let t=_t[e];if(t===void 0){const r=mE.get(e);if(r!==void 0)t=_t[r],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Yf(t)}const vE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Y0(s){return s.replace(vE,xE)}function xE(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function q0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const _E={[wo]:"SHADOWMAP_TYPE_PCF",[Mo]:"SHADOWMAP_TYPE_VSM"};function yE(s){return _E[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const SE={[As]:"ENVMAP_TYPE_CUBE",[Ea]:"ENVMAP_TYPE_CUBE",[Ac]:"ENVMAP_TYPE_CUBE_UV"};function ME(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":SE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const EE={[Ea]:"ENVMAP_MODE_REFRACTION"};function wE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":EE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const TE={[mg]:"ENVMAP_BLENDING_MULTIPLY",[c_]:"ENVMAP_BLENDING_MIX",[u_]:"ENVMAP_BLENDING_ADD"};function bE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":TE[s.combine]||"ENVMAP_BLENDING_NONE"}function AE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function RE(s,e,t,r){const a=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const d=yE(t),p=ME(t),y=wE(t),_=bE(t),g=AE(t),S=dE(t),T=fE(l),C=a.createProgram();let x,v,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Eo).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Eo).join(`
`),v.length>0&&(v+=`
`)):(x=[q0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+y:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),v=[q0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+y:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?_t.tonemapping_pars_fragment:"",t.toneMapping!==Ji?cE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,oE("linearToOutputTexel",t.outputColorSpace),uE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Eo).join(`
`)),u=Yf(u),u=X0(u,t),u=j0(u,t),f=Yf(f),f=X0(f,t),f=j0(f,t),u=Y0(u),f=Y0(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",t.glslVersion===e0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===e0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=L+x+u,w=L+v+f,P=G0(a,a.VERTEX_SHADER,N),D=G0(a,a.FRAGMENT_SHADER,w);a.attachShader(C,P),a.attachShader(C,D),t.index0AttributeName!==void 0?a.bindAttribLocation(C,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C);function k(W){if(s.debug.checkShaderErrors){const $=a.getProgramInfoLog(C)||"",fe=a.getShaderInfoLog(P)||"",re=a.getShaderInfoLog(D)||"",q=$.trim(),z=fe.trim(),G=re.trim();let H=!0,K=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,C,P,D);else{const ie=W0(a,P,"vertex"),O=W0(a,D,"fragment");At("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(C,a.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+q+`
`+ie+`
`+O)}else q!==""?ct("WebGLProgram: Program Info Log:",q):(z===""||G==="")&&(K=!1);K&&(W.diagnostics={runnable:H,programLog:q,vertexShader:{log:z,prefix:x},fragmentShader:{log:G,prefix:v}})}a.deleteShader(P),a.deleteShader(D),E=new hc(a,C),I=hE(a,C)}let E;this.getUniforms=function(){return E===void 0&&k(this),E};let I;this.getAttributes=function(){return I===void 0&&k(this),I};let j=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=a.getProgramParameter(C,iE)),j},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rE++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=P,this.fragmentShader=D,this}let CE=0;class PE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new NE(e),t.set(e,r)),r}}class NE{constructor(e){this.id=CE++,this.code=e,this.usedTimes=0}}function LE(s){return s===Cs||s===gc||s===vc}function DE(s,e,t,r,a,l){const u=new fh,f=new PE,d=new Set,p=[],y=new Map,_=r.logarithmicDepthBuffer;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(E){return d.add(E),E===0?"uv":`uv${E}`}function C(E,I,j,W,$,fe){const re=W.fog,q=$.geometry,z=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?W.environment:null,G=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,H=e.get(E.envMap||z,G),K=H&&H.mapping===Ac?H.image.height:null,ie=S[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&ct("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const O=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,te=O!==void 0?O.length:0;let Ne=0;q.morphAttributes.position!==void 0&&(Ne=1),q.morphAttributes.normal!==void 0&&(Ne=2),q.morphAttributes.color!==void 0&&(Ne=3);let Ve,Ge,ae,ye;if(ie){const He=Yi[ie];Ve=He.vertexShader,Ge=He.fragmentShader}else{Ve=E.vertexShader,Ge=E.fragmentShader;const He=f.getVertexShaderStage(E),Ct=f.getFragmentShaderStage(E);f.update(E,He,Ct),ae=He.id,ye=Ct.id}const he=s.getRenderTarget(),Te=s.state.buffers.depth.getReversed(),Fe=$.isInstancedMesh===!0,ze=$.isBatchedMesh===!0,lt=!!E.map,$e=!!E.matcap,wt=!!H,ft=!!E.aoMap,dt=!!E.lightMap,kt=!!E.bumpMap&&E.wireframe===!1,Bt=!!E.normalMap,It=!!E.displacementMap,Ut=!!E.emissiveMap,Tt=!!E.metalnessMap,zt=!!E.roughnessMap,Z=E.anisotropy>0,sn=E.clearcoat>0,Et=E.dispersion>0,U=E.iridescence>0,M=E.sheen>0,ne=E.transmission>0,le=Z&&!!E.anisotropyMap,ge=sn&&!!E.clearcoatMap,Re=sn&&!!E.clearcoatNormalMap,Ue=sn&&!!E.clearcoatRoughnessMap,xe=U&&!!E.iridescenceMap,Se=U&&!!E.iridescenceThicknessMap,Le=M&&!!E.sheenColorMap,qe=M&&!!E.sheenRoughnessMap,ke=!!E.specularMap,De=!!E.specularColorMap,se=!!E.specularIntensityMap,V=ne&&!!E.transmissionMap,ve=ne&&!!E.thicknessMap,F=!!E.gradientMap,Me=!!E.alphaMap,X=E.alphaTest>0,Ee=!!E.alphaHash,_e=!!E.extensions;let we=Ji;E.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(we=s.toneMapping);const Be={shaderID:ie,shaderType:E.type,shaderName:E.name,vertexShader:Ve,fragmentShader:Ge,defines:E.defines,customVertexShaderID:ae,customFragmentShaderID:ye,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:ze,batchingColor:ze&&$._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&$.instanceColor!==null,instancingMorph:Fe&&$.morphTexture!==null,outputColorSpace:he===null?s.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:bt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:lt,matcap:$e,envMap:wt,envMapMode:wt&&H.mapping,envMapCubeUVHeight:K,aoMap:ft,lightMap:dt,bumpMap:kt,normalMap:Bt,displacementMap:It,emissiveMap:Ut,normalMapObjectSpace:Bt&&E.normalMapType===h_,normalMapTangentSpace:Bt&&E.normalMapType===zf,packedNormalMap:Bt&&E.normalMapType===zf&&LE(E.normalMap.format),metalnessMap:Tt,roughnessMap:zt,anisotropy:Z,anisotropyMap:le,clearcoat:sn,clearcoatMap:ge,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ue,dispersion:Et,iridescence:U,iridescenceMap:xe,iridescenceThicknessMap:Se,sheen:M,sheenColorMap:Le,sheenRoughnessMap:qe,specularMap:ke,specularColorMap:De,specularIntensityMap:se,transmission:ne,transmissionMap:V,thicknessMap:ve,gradientMap:F,opaque:E.transparent===!1&&E.blending===_a&&E.alphaToCoverage===!1,alphaMap:Me,alphaTest:X,alphaHash:Ee,combine:E.combine,mapUv:lt&&T(E.map.channel),aoMapUv:ft&&T(E.aoMap.channel),lightMapUv:dt&&T(E.lightMap.channel),bumpMapUv:kt&&T(E.bumpMap.channel),normalMapUv:Bt&&T(E.normalMap.channel),displacementMapUv:It&&T(E.displacementMap.channel),emissiveMapUv:Ut&&T(E.emissiveMap.channel),metalnessMapUv:Tt&&T(E.metalnessMap.channel),roughnessMapUv:zt&&T(E.roughnessMap.channel),anisotropyMapUv:le&&T(E.anisotropyMap.channel),clearcoatMapUv:ge&&T(E.clearcoatMap.channel),clearcoatNormalMapUv:Re&&T(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&T(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&T(E.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&T(E.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&T(E.sheenColorMap.channel),sheenRoughnessMapUv:qe&&T(E.sheenRoughnessMap.channel),specularMapUv:ke&&T(E.specularMap.channel),specularColorMapUv:De&&T(E.specularColorMap.channel),specularIntensityMapUv:se&&T(E.specularIntensityMap.channel),transmissionMapUv:V&&T(E.transmissionMap.channel),thicknessMapUv:ve&&T(E.thicknessMap.channel),alphaMapUv:Me&&T(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Bt||Z),vertexNormals:!!q.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!q.attributes.uv&&(lt||Me),fog:!!re,useFog:E.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||q.attributes.normal===void 0&&Bt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Te,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Ne,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:fe.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&j.length>0,shadowMapType:s.shadowMap.type,toneMapping:we,decodeVideoTexture:lt&&E.map.isVideoTexture===!0&&bt.getTransfer(E.map.colorSpace)===Ot,decodeVideoTextureEmissive:Ut&&E.emissiveMap.isVideoTexture===!0&&bt.getTransfer(E.emissiveMap.colorSpace)===Ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===mi,flipSided:E.side===ri,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:_e&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&E.extensions.multiDraw===!0||ze)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Be.vertexUv1s=d.has(1),Be.vertexUv2s=d.has(2),Be.vertexUv3s=d.has(3),d.clear(),Be}function x(E){const I=[];if(E.shaderID?I.push(E.shaderID):(I.push(E.customVertexShaderID),I.push(E.customFragmentShaderID)),E.defines!==void 0)for(const j in E.defines)I.push(j),I.push(E.defines[j]);return E.isRawShaderMaterial===!1&&(v(I,E),L(I,E),I.push(s.outputColorSpace)),I.push(E.customProgramCacheKey),I.join()}function v(E,I){E.push(I.precision),E.push(I.outputColorSpace),E.push(I.envMapMode),E.push(I.envMapCubeUVHeight),E.push(I.mapUv),E.push(I.alphaMapUv),E.push(I.lightMapUv),E.push(I.aoMapUv),E.push(I.bumpMapUv),E.push(I.normalMapUv),E.push(I.displacementMapUv),E.push(I.emissiveMapUv),E.push(I.metalnessMapUv),E.push(I.roughnessMapUv),E.push(I.anisotropyMapUv),E.push(I.clearcoatMapUv),E.push(I.clearcoatNormalMapUv),E.push(I.clearcoatRoughnessMapUv),E.push(I.iridescenceMapUv),E.push(I.iridescenceThicknessMapUv),E.push(I.sheenColorMapUv),E.push(I.sheenRoughnessMapUv),E.push(I.specularMapUv),E.push(I.specularColorMapUv),E.push(I.specularIntensityMapUv),E.push(I.transmissionMapUv),E.push(I.thicknessMapUv),E.push(I.combine),E.push(I.fogExp2),E.push(I.sizeAttenuation),E.push(I.morphTargetsCount),E.push(I.morphAttributeCount),E.push(I.numDirLights),E.push(I.numPointLights),E.push(I.numSpotLights),E.push(I.numSpotLightMaps),E.push(I.numHemiLights),E.push(I.numRectAreaLights),E.push(I.numDirLightShadows),E.push(I.numPointLightShadows),E.push(I.numSpotLightShadows),E.push(I.numSpotLightShadowsWithMaps),E.push(I.numLightProbes),E.push(I.shadowMapType),E.push(I.toneMapping),E.push(I.numClippingPlanes),E.push(I.numClipIntersection),E.push(I.depthPacking)}function L(E,I){u.disableAll(),I.instancing&&u.enable(0),I.instancingColor&&u.enable(1),I.instancingMorph&&u.enable(2),I.matcap&&u.enable(3),I.envMap&&u.enable(4),I.normalMapObjectSpace&&u.enable(5),I.normalMapTangentSpace&&u.enable(6),I.clearcoat&&u.enable(7),I.iridescence&&u.enable(8),I.alphaTest&&u.enable(9),I.vertexColors&&u.enable(10),I.vertexAlphas&&u.enable(11),I.vertexUv1s&&u.enable(12),I.vertexUv2s&&u.enable(13),I.vertexUv3s&&u.enable(14),I.vertexTangents&&u.enable(15),I.anisotropy&&u.enable(16),I.alphaHash&&u.enable(17),I.batching&&u.enable(18),I.dispersion&&u.enable(19),I.batchingColor&&u.enable(20),I.gradientMap&&u.enable(21),I.packedNormalMap&&u.enable(22),I.vertexNormals&&u.enable(23),E.push(u.mask),u.disableAll(),I.fog&&u.enable(0),I.useFog&&u.enable(1),I.flatShading&&u.enable(2),I.logarithmicDepthBuffer&&u.enable(3),I.reversedDepthBuffer&&u.enable(4),I.skinning&&u.enable(5),I.morphTargets&&u.enable(6),I.morphNormals&&u.enable(7),I.morphColors&&u.enable(8),I.premultipliedAlpha&&u.enable(9),I.shadowMapEnabled&&u.enable(10),I.doubleSided&&u.enable(11),I.flipSided&&u.enable(12),I.useDepthPacking&&u.enable(13),I.dithering&&u.enable(14),I.transmission&&u.enable(15),I.sheen&&u.enable(16),I.opaque&&u.enable(17),I.pointsUvs&&u.enable(18),I.decodeVideoTexture&&u.enable(19),I.decodeVideoTextureEmissive&&u.enable(20),I.alphaToCoverage&&u.enable(21),I.numLightProbeGrids>0&&u.enable(22),I.hasPositionAttribute&&u.enable(23),E.push(u.mask)}function N(E){const I=S[E.type];let j;if(I){const W=Yi[I];j=Po.clone(W.uniforms)}else j=E.uniforms;return j}function w(E,I){let j=y.get(I);return j!==void 0?++j.usedTimes:(j=new RE(s,I,E,a),p.push(j),y.set(I,j)),j}function P(E){if(--E.usedTimes===0){const I=p.indexOf(E);p[I]=p[p.length-1],p.pop(),y.delete(E.cacheKey),E.destroy()}}function D(E){f.remove(E)}function k(){f.dispose()}return{getParameters:C,getProgramCacheKey:x,getUniforms:N,acquireProgram:w,releaseProgram:P,releaseShaderCache:D,programs:p,dispose:k}}function IE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function a(u,f,d){s.get(u)[f]=d}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function UE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function K0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function $0(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function u(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function f(g,S,T,C,x,v){let L=s[e];return L===void 0?(L={id:g.id,object:g,geometry:S,material:T,materialVariant:u(g),groupOrder:C,renderOrder:g.renderOrder,z:x,group:v},s[e]=L):(L.id=g.id,L.object=g,L.geometry=S,L.material=T,L.materialVariant=u(g),L.groupOrder=C,L.renderOrder=g.renderOrder,L.z=x,L.group=v),e++,L}function d(g,S,T,C,x,v){const L=f(g,S,T,C,x,v);T.transmission>0?r.push(L):T.transparent===!0?a.push(L):t.push(L)}function p(g,S,T,C,x,v){const L=f(g,S,T,C,x,v);T.transmission>0?r.unshift(L):T.transparent===!0?a.unshift(L):t.unshift(L)}function y(g,S,T){t.length>1&&t.sort(g||UE),r.length>1&&r.sort(S||K0),a.length>1&&a.sort(S||K0),T&&(t.reverse(),r.reverse(),a.reverse())}function _(){for(let g=e,S=s.length;g<S;g++){const T=s[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:d,unshift:p,finish:_,sort:y}}function FE(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new $0,s.set(r,[u])):a>=l.length?(u=new $0,l.push(u)):u=l[a],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function OE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new xt};break;case"SpotLight":t={position:new J,direction:new J,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new J,halfWidth:new J,halfHeight:new J};break}return s[e.id]=t,t}}}function kE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let BE=0;function zE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function VE(s){const e=new OE,t=kE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new J);const a=new J,l=new Zt,u=new Zt;function f(p){let y=0,_=0,g=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let S=0,T=0,C=0,x=0,v=0,L=0,N=0,w=0,P=0,D=0,k=0;p.sort(zE);for(let I=0,j=p.length;I<j;I++){const W=p[I],$=W.color,fe=W.intensity,re=W.distance;let q=null;if(W.shadow&&W.shadow.map&&(W.shadow.map.texture.format===Cs?q=W.shadow.map.texture:q=W.shadow.map.depthTexture||W.shadow.map.texture),W.isAmbientLight)y+=$.r*fe,_+=$.g*fe,g+=$.b*fe;else if(W.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(W.sh.coefficients[z],fe);k++}else if(W.isDirectionalLight){const z=e.get(W);if(z.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const G=W.shadow,H=t.get(W);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,r.directionalShadow[S]=H,r.directionalShadowMap[S]=q,r.directionalShadowMatrix[S]=W.shadow.matrix,L++}r.directional[S]=z,S++}else if(W.isSpotLight){const z=e.get(W);z.position.setFromMatrixPosition(W.matrixWorld),z.color.copy($).multiplyScalar(fe),z.distance=re,z.coneCos=Math.cos(W.angle),z.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),z.decay=W.decay,r.spot[C]=z;const G=W.shadow;if(W.map&&(r.spotLightMap[P]=W.map,P++,G.updateMatrices(W),W.castShadow&&D++),r.spotLightMatrix[C]=G.matrix,W.castShadow){const H=t.get(W);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,r.spotShadow[C]=H,r.spotShadowMap[C]=q,w++}C++}else if(W.isRectAreaLight){const z=e.get(W);z.color.copy($).multiplyScalar(fe),z.halfWidth.set(W.width*.5,0,0),z.halfHeight.set(0,W.height*.5,0),r.rectArea[x]=z,x++}else if(W.isPointLight){const z=e.get(W);if(z.color.copy(W.color).multiplyScalar(W.intensity),z.distance=W.distance,z.decay=W.decay,W.castShadow){const G=W.shadow,H=t.get(W);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,H.shadowCameraNear=G.camera.near,H.shadowCameraFar=G.camera.far,r.pointShadow[T]=H,r.pointShadowMap[T]=q,r.pointShadowMatrix[T]=W.shadow.matrix,N++}r.point[T]=z,T++}else if(W.isHemisphereLight){const z=e.get(W);z.skyColor.copy(W.color).multiplyScalar(fe),z.groundColor.copy(W.groundColor).multiplyScalar(fe),r.hemi[v]=z,v++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=We.LTC_FLOAT_1,r.rectAreaLTC2=We.LTC_FLOAT_2):(r.rectAreaLTC1=We.LTC_HALF_1,r.rectAreaLTC2=We.LTC_HALF_2)),r.ambient[0]=y,r.ambient[1]=_,r.ambient[2]=g;const E=r.hash;(E.directionalLength!==S||E.pointLength!==T||E.spotLength!==C||E.rectAreaLength!==x||E.hemiLength!==v||E.numDirectionalShadows!==L||E.numPointShadows!==N||E.numSpotShadows!==w||E.numSpotMaps!==P||E.numLightProbes!==k)&&(r.directional.length=S,r.spot.length=C,r.rectArea.length=x,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=w+P-D,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=k,E.directionalLength=S,E.pointLength=T,E.spotLength=C,E.rectAreaLength=x,E.hemiLength=v,E.numDirectionalShadows=L,E.numPointShadows=N,E.numSpotShadows=w,E.numSpotMaps=P,E.numLightProbes=k,r.version=BE++)}function d(p,y){let _=0,g=0,S=0,T=0,C=0;const x=y.matrixWorldInverse;for(let v=0,L=p.length;v<L;v++){const N=p[v];if(N.isDirectionalLight){const w=r.directional[_];w.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(x),_++}else if(N.isSpotLight){const w=r.spot[S];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(x),S++}else if(N.isRectAreaLight){const w=r.rectArea[T];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(x),u.identity(),l.copy(N.matrixWorld),l.premultiply(x),u.extractRotation(l),w.halfWidth.set(N.width*.5,0,0),w.halfHeight.set(0,N.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),T++}else if(N.isPointLight){const w=r.point[g];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(x),g++}else if(N.isHemisphereLight){const w=r.hemi[C];w.direction.setFromMatrixPosition(N.matrixWorld),w.direction.transformDirection(x),C++}}}return{setup:f,setupView:d,state:r}}function Z0(s){const e=new VE(s),t=[],r=[],a=[];function l(g){_.camera=g,t.length=0,r.length=0,a.length=0}function u(g){t.push(g)}function f(g){r.push(g)}function d(g){a.push(g)}function p(){e.setup(t)}function y(g){e.setupView(t,g)}const _={lightsArray:t,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:_,setupLights:p,setupLightsView:y,pushLight:u,pushShadow:f,pushLightProbeGrid:d}}function GE(s){let e=new WeakMap;function t(a,l=0){const u=e.get(a);let f;return u===void 0?(f=new Z0(s),e.set(a,[f])):l>=u.length?(f=new Z0(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const HE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,XE=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],jE=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Q0=new Zt,So=new J,qd=new J;function YE(s,e,t){let r=new mh;const a=new rt,l=new rt,u=new rn,f=new ey,d=new ty,p={},y=t.maxTextureSize,_={[Jr]:ri,[ri]:Jr,[mi]:mi},g=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:HE,fragmentShader:WE}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const T=new kn;T.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new st(T,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wo;let v=this.type;this.render=function(D,k,E){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||D.length===0)return;this.type===pg&&(ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=wo);const I=s.getRenderTarget(),j=s.getActiveCubeFace(),W=s.getActiveMipmapLevel(),$=s.state;$.setBlending(Qi),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const fe=v!==this.type;fe&&k.traverse(function(re){re.material&&(Array.isArray(re.material)?re.material.forEach(q=>q.needsUpdate=!0):re.material.needsUpdate=!0)});for(let re=0,q=D.length;re<q;re++){const z=D[re],G=z.shadow;if(G===void 0){ct("WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);const H=G.getFrameExtents();a.multiply(H),l.copy(G.mapSize),(a.x>y||a.y>y)&&(a.x>y&&(l.x=Math.floor(y/H.x),a.x=l.x*H.x,G.mapSize.x=l.x),a.y>y&&(l.y=Math.floor(y/H.y),a.y=l.y*H.y,G.mapSize.y=l.y));const K=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=K,G.map===null||fe===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Mo){if(z.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new si(a.x,a.y,{format:Cs,type:vi,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),G.map.texture.name=z.name+".shadowMap",G.map.depthTexture=new wa(a.x,a.y,Ki),G.map.depthTexture.name=z.name+".shadowMapDepth",G.map.depthTexture.format=_r,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=An,G.map.depthTexture.magFilter=An}else z.isPointLight?(G.map=new zg(a.x),G.map.depthTexture=new $_(a.x,er)):(G.map=new si(a.x,a.y),G.map.depthTexture=new wa(a.x,a.y,er)),G.map.depthTexture.name=z.name+".shadowMap",G.map.depthTexture.format=_r,this.type===wo?(G.map.depthTexture.compareFunction=K?uh:ch,G.map.depthTexture.minFilter=Rn,G.map.depthTexture.magFilter=Rn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=An,G.map.depthTexture.magFilter=An);G.camera.updateProjectionMatrix()}const ie=G.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<ie;O++){if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,O),s.clear();else{O===0&&(s.setRenderTarget(G.map),s.clear());const te=G.getViewport(O);u.set(l.x*te.x,l.y*te.y,l.x*te.z,l.y*te.w),$.viewport(u)}if(z.isPointLight){const te=G.camera,Ne=G.matrix,Ve=z.distance||te.far;Ve!==te.far&&(te.far=Ve,te.updateProjectionMatrix()),So.setFromMatrixPosition(z.matrixWorld),te.position.copy(So),qd.copy(te.position),qd.add(XE[O]),te.up.copy(jE[O]),te.lookAt(qd),te.updateMatrixWorld(),Ne.makeTranslation(-So.x,-So.y,-So.z),Q0.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Q0,te.coordinateSystem,te.reversedDepth)}else G.updateMatrices(z);r=G.getFrustum(),w(k,E,G.camera,z,this.type)}G.isPointLightShadow!==!0&&this.type===Mo&&L(G,E),G.needsUpdate=!1}v=this.type,x.needsUpdate=!1,s.setRenderTarget(I,j,W)};function L(D,k){const E=e.update(C);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,S.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new si(a.x,a.y,{format:Cs,type:vi})),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(k,null,E,g,C,null),S.uniforms.shadow_pass.value=D.mapPass.texture,S.uniforms.resolution.value=D.mapSize,S.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(k,null,E,S,C,null)}function N(D,k,E,I){let j=null;const W=E.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(W!==void 0)j=W;else if(j=E.isPointLight===!0?d:f,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const $=j.uuid,fe=k.uuid;let re=p[$];re===void 0&&(re={},p[$]=re);let q=re[fe];q===void 0&&(q=j.clone(),re[fe]=q,k.addEventListener("dispose",P)),j=q}if(j.visible=k.visible,j.wireframe=k.wireframe,I===Mo?j.side=k.shadowSide!==null?k.shadowSide:k.side:j.side=k.shadowSide!==null?k.shadowSide:_[k.side],j.alphaMap=k.alphaMap,j.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,j.map=k.map,j.clipShadows=k.clipShadows,j.clippingPlanes=k.clippingPlanes,j.clipIntersection=k.clipIntersection,j.displacementMap=k.displacementMap,j.displacementScale=k.displacementScale,j.displacementBias=k.displacementBias,j.wireframeLinewidth=k.wireframeLinewidth,j.linewidth=k.linewidth,E.isPointLight===!0&&j.isMeshDistanceMaterial===!0){const $=s.properties.get(j);$.light=E}return j}function w(D,k,E,I,j){if(D.visible===!1)return;if(D.layers.test(k.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&j===Mo)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,D.matrixWorld);const fe=e.update(D),re=D.material;if(Array.isArray(re)){const q=fe.groups;for(let z=0,G=q.length;z<G;z++){const H=q[z],K=re[H.materialIndex];if(K&&K.visible){const ie=N(D,K,I,j);D.onBeforeShadow(s,D,k,E,fe,ie,H),s.renderBufferDirect(E,null,fe,ie,D,H),D.onAfterShadow(s,D,k,E,fe,ie,H)}}}else if(re.visible){const q=N(D,re,I,j);D.onBeforeShadow(s,D,k,E,fe,q,null),s.renderBufferDirect(E,null,fe,q,D,null),D.onAfterShadow(s,D,k,E,fe,q,null)}}const $=D.children;for(let fe=0,re=$.length;fe<re;fe++)w($[fe],k,E,I,j)}function P(D){D.target.removeEventListener("dispose",P);for(const E in p){const I=p[E],j=D.target.uuid;j in I&&(I[j].dispose(),delete I[j])}}}function qE(s,e){function t(){let F=!1;const Me=new rn;let X=null;const Ee=new rn(0,0,0,0);return{setMask:function(_e){X!==_e&&!F&&(s.colorMask(_e,_e,_e,_e),X=_e)},setLocked:function(_e){F=_e},setClear:function(_e,we,Be,He,Ct){Ct===!0&&(_e*=He,we*=He,Be*=He),Me.set(_e,we,Be,He),Ee.equals(Me)===!1&&(s.clearColor(_e,we,Be,He),Ee.copy(Me))},reset:function(){F=!1,X=null,Ee.set(-1,0,0,0)}}}function r(){let F=!1,Me=!1,X=null,Ee=null,_e=null;return{setReversed:function(we){if(Me!==we){const Be=e.get("EXT_clip_control");we?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),Me=we;const He=_e;_e=null,this.setClear(He)}},getReversed:function(){return Me},setTest:function(we){we?he(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(we){X!==we&&!F&&(s.depthMask(we),X=we)},setFunc:function(we){if(Me&&(we=E_[we]),Ee!==we){switch(we){case tf:s.depthFunc(s.NEVER);break;case nf:s.depthFunc(s.ALWAYS);break;case rf:s.depthFunc(s.LESS);break;case Ma:s.depthFunc(s.LEQUAL);break;case sf:s.depthFunc(s.EQUAL);break;case af:s.depthFunc(s.GEQUAL);break;case of:s.depthFunc(s.GREATER);break;case lf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ee=we}},setLocked:function(we){F=we},setClear:function(we){_e!==we&&(_e=we,Me&&(we=1-we),s.clearDepth(we))},reset:function(){F=!1,X=null,Ee=null,_e=null,Me=!1}}}function a(){let F=!1,Me=null,X=null,Ee=null,_e=null,we=null,Be=null,He=null,Ct=null;return{setTest:function(Nt){F||(Nt?he(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(Nt){Me!==Nt&&!F&&(s.stencilMask(Nt),Me=Nt)},setFunc:function(Nt,cn,ai){(X!==Nt||Ee!==cn||_e!==ai)&&(s.stencilFunc(Nt,cn,ai),X=Nt,Ee=cn,_e=ai)},setOp:function(Nt,cn,ai){(we!==Nt||Be!==cn||He!==ai)&&(s.stencilOp(Nt,cn,ai),we=Nt,Be=cn,He=ai)},setLocked:function(Nt){F=Nt},setClear:function(Nt){Ct!==Nt&&(s.clearStencil(Nt),Ct=Nt)},reset:function(){F=!1,Me=null,X=null,Ee=null,_e=null,we=null,Be=null,He=null,Ct=null}}}const l=new t,u=new r,f=new a,d=new WeakMap,p=new WeakMap;let y={},_={},g={},S=new WeakMap,T=[],C=null,x=!1,v=null,L=null,N=null,w=null,P=null,D=null,k=null,E=new xt(0,0,0),I=0,j=!1,W=null,$=null,fe=null,re=null,q=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,H=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(K)[1]),G=H>=1):K.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),G=H>=2);let ie=null,O={};const te=s.getParameter(s.SCISSOR_BOX),Ne=s.getParameter(s.VIEWPORT),Ve=new rn().fromArray(te),Ge=new rn().fromArray(Ne);function ae(F,Me,X,Ee){const _e=new Uint8Array(4),we=s.createTexture();s.bindTexture(F,we),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Be=0;Be<X;Be++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(Me,0,s.RGBA,1,1,Ee,0,s.RGBA,s.UNSIGNED_BYTE,_e):s.texImage2D(Me+Be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_e);return we}const ye={};ye[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),ye[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ye[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),he(s.DEPTH_TEST),u.setFunc(Ma),kt(!1),Bt($m),he(s.CULL_FACE),ft(Qi);function he(F){y[F]!==!0&&(s.enable(F),y[F]=!0)}function Te(F){y[F]!==!1&&(s.disable(F),y[F]=!1)}function Fe(F,Me){return g[F]!==Me?(s.bindFramebuffer(F,Me),g[F]=Me,F===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Me),F===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Me),!0):!1}function ze(F,Me){let X=T,Ee=!1;if(F){X=S.get(Me),X===void 0&&(X=[],S.set(Me,X));const _e=F.textures;if(X.length!==_e.length||X[0]!==s.COLOR_ATTACHMENT0){for(let we=0,Be=_e.length;we<Be;we++)X[we]=s.COLOR_ATTACHMENT0+we;X.length=_e.length,Ee=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,Ee=!0);Ee&&s.drawBuffers(X)}function lt(F){return C!==F?(s.useProgram(F),C=F,!0):!1}const $e={[Es]:s.FUNC_ADD,[jx]:s.FUNC_SUBTRACT,[Yx]:s.FUNC_REVERSE_SUBTRACT};$e[qx]=s.MIN,$e[Kx]=s.MAX;const wt={[$x]:s.ZERO,[Zx]:s.ONE,[Qx]:s.SRC_COLOR,[Jd]:s.SRC_ALPHA,[r_]:s.SRC_ALPHA_SATURATE,[n_]:s.DST_COLOR,[e_]:s.DST_ALPHA,[Jx]:s.ONE_MINUS_SRC_COLOR,[ef]:s.ONE_MINUS_SRC_ALPHA,[i_]:s.ONE_MINUS_DST_COLOR,[t_]:s.ONE_MINUS_DST_ALPHA,[s_]:s.CONSTANT_COLOR,[a_]:s.ONE_MINUS_CONSTANT_COLOR,[o_]:s.CONSTANT_ALPHA,[l_]:s.ONE_MINUS_CONSTANT_ALPHA};function ft(F,Me,X,Ee,_e,we,Be,He,Ct,Nt){if(F===Qi){x===!0&&(Te(s.BLEND),x=!1);return}if(x===!1&&(he(s.BLEND),x=!0),F!==Xx){if(F!==v||Nt!==j){if((L!==Es||P!==Es)&&(s.blendEquation(s.FUNC_ADD),L=Es,P=Es),Nt)switch(F){case _a:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gr:s.blendFunc(s.ONE,s.ONE);break;case Zm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:At("WebGLState: Invalid blending: ",F);break}else switch(F){case _a:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Zm:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qm:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",F);break}N=null,w=null,D=null,k=null,E.set(0,0,0),I=0,v=F,j=Nt}return}_e=_e||Me,we=we||X,Be=Be||Ee,(Me!==L||_e!==P)&&(s.blendEquationSeparate($e[Me],$e[_e]),L=Me,P=_e),(X!==N||Ee!==w||we!==D||Be!==k)&&(s.blendFuncSeparate(wt[X],wt[Ee],wt[we],wt[Be]),N=X,w=Ee,D=we,k=Be),(He.equals(E)===!1||Ct!==I)&&(s.blendColor(He.r,He.g,He.b,Ct),E.copy(He),I=Ct),v=F,j=!1}function dt(F,Me){F.side===mi?Te(s.CULL_FACE):he(s.CULL_FACE);let X=F.side===ri;Me&&(X=!X),kt(X),F.blending===_a&&F.transparent===!1?ft(Qi):ft(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),u.setFunc(F.depthFunc),u.setTest(F.depthTest),u.setMask(F.depthWrite),l.setMask(F.colorWrite);const Ee=F.stencilWrite;f.setTest(Ee),Ee&&(f.setMask(F.stencilWriteMask),f.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),f.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ut(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function kt(F){W!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),W=F)}function Bt(F){F!==Hx?(he(s.CULL_FACE),F!==$&&(F===$m?s.cullFace(s.BACK):F===Wx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),$=F}function It(F){F!==fe&&(G&&s.lineWidth(F),fe=F)}function Ut(F,Me,X){F?(he(s.POLYGON_OFFSET_FILL),(re!==Me||q!==X)&&(re=Me,q=X,u.getReversed()&&(Me=-Me),s.polygonOffset(Me,X))):Te(s.POLYGON_OFFSET_FILL)}function Tt(F){F?he(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function zt(F){F===void 0&&(F=s.TEXTURE0+z-1),ie!==F&&(s.activeTexture(F),ie=F)}function Z(F,Me,X){X===void 0&&(ie===null?X=s.TEXTURE0+z-1:X=ie);let Ee=O[X];Ee===void 0&&(Ee={type:void 0,texture:void 0},O[X]=Ee),(Ee.type!==F||Ee.texture!==Me)&&(ie!==X&&(s.activeTexture(X),ie=X),s.bindTexture(F,Me||ye[F]),Ee.type=F,Ee.texture=Me)}function sn(){const F=O[ie];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Et(){try{s.compressedTexImage2D(...arguments)}catch(F){At("WebGLState:",F)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(F){At("WebGLState:",F)}}function M(){try{s.texSubImage2D(...arguments)}catch(F){At("WebGLState:",F)}}function ne(){try{s.texSubImage3D(...arguments)}catch(F){At("WebGLState:",F)}}function le(){try{s.compressedTexSubImage2D(...arguments)}catch(F){At("WebGLState:",F)}}function ge(){try{s.compressedTexSubImage3D(...arguments)}catch(F){At("WebGLState:",F)}}function Re(){try{s.texStorage2D(...arguments)}catch(F){At("WebGLState:",F)}}function Ue(){try{s.texStorage3D(...arguments)}catch(F){At("WebGLState:",F)}}function xe(){try{s.texImage2D(...arguments)}catch(F){At("WebGLState:",F)}}function Se(){try{s.texImage3D(...arguments)}catch(F){At("WebGLState:",F)}}function Le(F){return _[F]!==void 0?_[F]:s.getParameter(F)}function qe(F,Me){_[F]!==Me&&(s.pixelStorei(F,Me),_[F]=Me)}function ke(F){Ve.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),Ve.copy(F))}function De(F){Ge.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),Ge.copy(F))}function se(F,Me){let X=p.get(Me);X===void 0&&(X=new WeakMap,p.set(Me,X));let Ee=X.get(F);Ee===void 0&&(Ee=s.getUniformBlockIndex(Me,F.name),X.set(F,Ee))}function V(F,Me){const Ee=p.get(Me).get(F);d.get(Me)!==Ee&&(s.uniformBlockBinding(Me,Ee,F.__bindingPointIndex),d.set(Me,Ee))}function ve(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),y={},_={},ie=null,O={},g={},S=new WeakMap,T=[],C=null,x=!1,v=null,L=null,N=null,w=null,P=null,D=null,k=null,E=new xt(0,0,0),I=0,j=!1,W=null,$=null,fe=null,re=null,q=null,Ve.set(0,0,s.canvas.width,s.canvas.height),Ge.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:he,disable:Te,bindFramebuffer:Fe,drawBuffers:ze,useProgram:lt,setBlending:ft,setMaterial:dt,setFlipSided:kt,setCullFace:Bt,setLineWidth:It,setPolygonOffset:Ut,setScissorTest:Tt,activeTexture:zt,bindTexture:Z,unbindTexture:sn,compressedTexImage2D:Et,compressedTexImage3D:U,texImage2D:xe,texImage3D:Se,pixelStorei:qe,getParameter:Le,updateUBOMapping:se,uniformBlockBinding:V,texStorage2D:Re,texStorage3D:Ue,texSubImage2D:M,texSubImage3D:ne,compressedTexSubImage2D:le,compressedTexSubImage3D:ge,scissor:ke,viewport:De,reset:ve}}function KE(s,e,t,r,a,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new rt,y=new WeakMap,_=new Set;let g;const S=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(U,M){return T?new OffscreenCanvas(U,M):yc("canvas")}function x(U,M,ne){let le=1;const ge=Et(U);if((ge.width>ne||ge.height>ne)&&(le=ne/Math.max(ge.width,ge.height)),le<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Re=Math.floor(le*ge.width),Ue=Math.floor(le*ge.height);g===void 0&&(g=C(Re,Ue));const xe=M?C(Re,Ue):g;return xe.width=Re,xe.height=Ue,xe.getContext("2d").drawImage(U,0,0,Re,Ue),ct("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Re+"x"+Ue+")."),xe}else return"data"in U&&ct("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),U;return U}function v(U){return U.generateMipmaps}function L(U){s.generateMipmap(U)}function N(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(U,M,ne,le,ge,Re=!1){if(U!==null){if(s[U]!==void 0)return s[U];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Ue;le&&(Ue=e.get("EXT_texture_norm16"),Ue||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xe=M;if(M===s.RED&&(ne===s.FLOAT&&(xe=s.R32F),ne===s.HALF_FLOAT&&(xe=s.R16F),ne===s.UNSIGNED_BYTE&&(xe=s.R8),ne===s.UNSIGNED_SHORT&&Ue&&(xe=Ue.R16_EXT),ne===s.SHORT&&Ue&&(xe=Ue.R16_SNORM_EXT)),M===s.RED_INTEGER&&(ne===s.UNSIGNED_BYTE&&(xe=s.R8UI),ne===s.UNSIGNED_SHORT&&(xe=s.R16UI),ne===s.UNSIGNED_INT&&(xe=s.R32UI),ne===s.BYTE&&(xe=s.R8I),ne===s.SHORT&&(xe=s.R16I),ne===s.INT&&(xe=s.R32I)),M===s.RG&&(ne===s.FLOAT&&(xe=s.RG32F),ne===s.HALF_FLOAT&&(xe=s.RG16F),ne===s.UNSIGNED_BYTE&&(xe=s.RG8),ne===s.UNSIGNED_SHORT&&Ue&&(xe=Ue.RG16_EXT),ne===s.SHORT&&Ue&&(xe=Ue.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(ne===s.UNSIGNED_BYTE&&(xe=s.RG8UI),ne===s.UNSIGNED_SHORT&&(xe=s.RG16UI),ne===s.UNSIGNED_INT&&(xe=s.RG32UI),ne===s.BYTE&&(xe=s.RG8I),ne===s.SHORT&&(xe=s.RG16I),ne===s.INT&&(xe=s.RG32I)),M===s.RGB_INTEGER&&(ne===s.UNSIGNED_BYTE&&(xe=s.RGB8UI),ne===s.UNSIGNED_SHORT&&(xe=s.RGB16UI),ne===s.UNSIGNED_INT&&(xe=s.RGB32UI),ne===s.BYTE&&(xe=s.RGB8I),ne===s.SHORT&&(xe=s.RGB16I),ne===s.INT&&(xe=s.RGB32I)),M===s.RGBA_INTEGER&&(ne===s.UNSIGNED_BYTE&&(xe=s.RGBA8UI),ne===s.UNSIGNED_SHORT&&(xe=s.RGBA16UI),ne===s.UNSIGNED_INT&&(xe=s.RGBA32UI),ne===s.BYTE&&(xe=s.RGBA8I),ne===s.SHORT&&(xe=s.RGBA16I),ne===s.INT&&(xe=s.RGBA32I)),M===s.RGB&&(ne===s.UNSIGNED_SHORT&&Ue&&(xe=Ue.RGB16_EXT),ne===s.SHORT&&Ue&&(xe=Ue.RGB16_SNORM_EXT),ne===s.UNSIGNED_INT_5_9_9_9_REV&&(xe=s.RGB9_E5),ne===s.UNSIGNED_INT_10F_11F_11F_REV&&(xe=s.R11F_G11F_B10F)),M===s.RGBA){const Se=Re?_c:bt.getTransfer(ge);ne===s.FLOAT&&(xe=s.RGBA32F),ne===s.HALF_FLOAT&&(xe=s.RGBA16F),ne===s.UNSIGNED_BYTE&&(xe=Se===Ot?s.SRGB8_ALPHA8:s.RGBA8),ne===s.UNSIGNED_SHORT&&Ue&&(xe=Ue.RGBA16_EXT),ne===s.SHORT&&Ue&&(xe=Ue.RGBA16_SNORM_EXT),ne===s.UNSIGNED_SHORT_4_4_4_4&&(xe=s.RGBA4),ne===s.UNSIGNED_SHORT_5_5_5_1&&(xe=s.RGB5_A1)}return(xe===s.R16F||xe===s.R32F||xe===s.RG16F||xe===s.RG32F||xe===s.RGBA16F||xe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function P(U,M){let ne;return U?M===null||M===er||M===bo?ne=s.DEPTH24_STENCIL8:M===Ki?ne=s.DEPTH32F_STENCIL8:M===To&&(ne=s.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===er||M===bo?ne=s.DEPTH_COMPONENT24:M===Ki?ne=s.DEPTH_COMPONENT32F:M===To&&(ne=s.DEPTH_COMPONENT16),ne}function D(U,M){return v(U)===!0||U.isFramebufferTexture&&U.minFilter!==An&&U.minFilter!==Rn?Math.log2(Math.max(M.width,M.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?M.mipmaps.length:1}function k(U){const M=U.target;M.removeEventListener("dispose",k),I(M),M.isVideoTexture&&y.delete(M),M.isHTMLTexture&&_.delete(M)}function E(U){const M=U.target;M.removeEventListener("dispose",E),W(M)}function I(U){const M=r.get(U);if(M.__webglInit===void 0)return;const ne=U.source,le=S.get(ne);if(le){const ge=le[M.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&j(U),Object.keys(le).length===0&&S.delete(ne)}r.remove(U)}function j(U){const M=r.get(U);s.deleteTexture(M.__webglTexture);const ne=U.source,le=S.get(ne);delete le[M.__cacheKey],u.memory.textures--}function W(U){const M=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(M.__webglFramebuffer[le]))for(let ge=0;ge<M.__webglFramebuffer[le].length;ge++)s.deleteFramebuffer(M.__webglFramebuffer[le][ge]);else s.deleteFramebuffer(M.__webglFramebuffer[le]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[le])}else{if(Array.isArray(M.__webglFramebuffer))for(let le=0;le<M.__webglFramebuffer.length;le++)s.deleteFramebuffer(M.__webglFramebuffer[le]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let le=0;le<M.__webglColorRenderbuffer.length;le++)M.__webglColorRenderbuffer[le]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[le]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const ne=U.textures;for(let le=0,ge=ne.length;le<ge;le++){const Re=r.get(ne[le]);Re.__webglTexture&&(s.deleteTexture(Re.__webglTexture),u.memory.textures--),r.remove(ne[le])}r.remove(U)}let $=0;function fe(){$=0}function re(){return $}function q(U){$=U}function z(){const U=$;return U>=a.maxTextures&&ct("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+a.maxTextures),$+=1,U}function G(U){const M=[];return M.push(U.wrapS),M.push(U.wrapT),M.push(U.wrapR||0),M.push(U.magFilter),M.push(U.minFilter),M.push(U.anisotropy),M.push(U.internalFormat),M.push(U.format),M.push(U.type),M.push(U.generateMipmaps),M.push(U.premultiplyAlpha),M.push(U.flipY),M.push(U.unpackAlignment),M.push(U.colorSpace),M.join()}function H(U,M){const ne=r.get(U);if(U.isVideoTexture&&Z(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&ne.__version!==U.version){const le=U.image;if(le===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(ne,U,M);return}}else U.isExternalTexture&&(ne.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture,s.TEXTURE0+M)}function K(U,M){const ne=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&ne.__version!==U.version){Te(ne,U,M);return}else U.isExternalTexture&&(ne.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ne.__webglTexture,s.TEXTURE0+M)}function ie(U,M){const ne=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&ne.__version!==U.version){Te(ne,U,M);return}t.bindTexture(s.TEXTURE_3D,ne.__webglTexture,s.TEXTURE0+M)}function O(U,M){const ne=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&ne.__version!==U.version){Fe(ne,U,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture,s.TEXTURE0+M)}const te={[Rs]:s.REPEAT,[vr]:s.CLAMP_TO_EDGE,[cf]:s.MIRRORED_REPEAT},Ne={[An]:s.NEAREST,[d_]:s.NEAREST_MIPMAP_NEAREST,[Il]:s.NEAREST_MIPMAP_LINEAR,[Rn]:s.LINEAR,[gd]:s.LINEAR_MIPMAP_NEAREST,[Ts]:s.LINEAR_MIPMAP_LINEAR},Ve={[p_]:s.NEVER,[__]:s.ALWAYS,[m_]:s.LESS,[ch]:s.LEQUAL,[g_]:s.EQUAL,[uh]:s.GEQUAL,[v_]:s.GREATER,[x_]:s.NOTEQUAL};function Ge(U,M){if(M.type===Ki&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Rn||M.magFilter===gd||M.magFilter===Il||M.magFilter===Ts||M.minFilter===Rn||M.minFilter===gd||M.minFilter===Il||M.minFilter===Ts)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,te[M.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,te[M.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,te[M.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,Ne[M.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,Ne[M.minFilter]),M.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,Ve[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===An||M.minFilter!==Il&&M.minFilter!==Ts||M.type===Ki&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function ae(U,M){let ne=!1;U.__webglInit===void 0&&(U.__webglInit=!0,M.addEventListener("dispose",k));const le=M.source;let ge=S.get(le);ge===void 0&&(ge={},S.set(le,ge));const Re=G(M);if(Re!==U.__cacheKey){ge[Re]===void 0&&(ge[Re]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,ne=!0),ge[Re].usedTimes++;const Ue=ge[U.__cacheKey];Ue!==void 0&&(ge[U.__cacheKey].usedTimes--,Ue.usedTimes===0&&j(M)),U.__cacheKey=Re,U.__webglTexture=ge[Re].texture}return ne}function ye(U,M,ne){return Math.floor(Math.floor(U/ne)/M)}function he(U,M,ne,le){const Re=U.updateRanges;if(Re.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,ne,le,M.data);else{Re.sort((qe,ke)=>qe.start-ke.start);let Ue=0;for(let qe=1;qe<Re.length;qe++){const ke=Re[Ue],De=Re[qe],se=ke.start+ke.count,V=ye(De.start,M.width,4),ve=ye(ke.start,M.width,4);De.start<=se+1&&V===ve&&ye(De.start+De.count-1,M.width,4)===V?ke.count=Math.max(ke.count,De.start+De.count-ke.start):(++Ue,Re[Ue]=De)}Re.length=Ue+1;const xe=t.getParameter(s.UNPACK_ROW_LENGTH),Se=t.getParameter(s.UNPACK_SKIP_PIXELS),Le=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let qe=0,ke=Re.length;qe<ke;qe++){const De=Re[qe],se=Math.floor(De.start/4),V=Math.ceil(De.count/4),ve=se%M.width,F=Math.floor(se/M.width),Me=V,X=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(s.UNPACK_SKIP_ROWS,F),t.texSubImage2D(s.TEXTURE_2D,0,ve,F,Me,X,ne,le,M.data)}U.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,xe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(s.UNPACK_SKIP_ROWS,Le)}}function Te(U,M,ne){let le=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(le=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(le=s.TEXTURE_3D);const ge=ae(U,M),Re=M.source;t.bindTexture(le,U.__webglTexture,s.TEXTURE0+ne);const Ue=r.get(Re);if(Re.version!==Ue.__version||ge===!0){if(t.activeTexture(s.TEXTURE0+ne),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const X=bt.getPrimaries(bt.workingColorSpace),Ee=M.colorSpace===Kr?null:bt.getPrimaries(M.colorSpace),_e=M.colorSpace===Kr||X===Ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let Se=x(M.image,!1,a.maxTextureSize);Se=sn(M,Se);const Le=l.convert(M.format,M.colorSpace),qe=l.convert(M.type);let ke=w(M.internalFormat,Le,qe,M.normalized,M.colorSpace,M.isVideoTexture);Ge(le,M);let De;const se=M.mipmaps,V=M.isVideoTexture!==!0,ve=Ue.__version===void 0||ge===!0,F=Re.dataReady,Me=D(M,Se);if(M.isDepthTexture)ke=P(M.format===bs,M.type),ve&&(V?t.texStorage2D(s.TEXTURE_2D,1,ke,Se.width,Se.height):t.texImage2D(s.TEXTURE_2D,0,ke,Se.width,Se.height,0,Le,qe,null));else if(M.isDataTexture)if(se.length>0){V&&ve&&t.texStorage2D(s.TEXTURE_2D,Me,ke,se[0].width,se[0].height);for(let X=0,Ee=se.length;X<Ee;X++)De=se[X],V?F&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,De.width,De.height,Le,qe,De.data):t.texImage2D(s.TEXTURE_2D,X,ke,De.width,De.height,0,Le,qe,De.data);M.generateMipmaps=!1}else V?(ve&&t.texStorage2D(s.TEXTURE_2D,Me,ke,Se.width,Se.height),F&&he(M,Se,Le,qe)):t.texImage2D(s.TEXTURE_2D,0,ke,Se.width,Se.height,0,Le,qe,Se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){V&&ve&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,ke,se[0].width,se[0].height,Se.depth);for(let X=0,Ee=se.length;X<Ee;X++)if(De=se[X],M.format!==Bi)if(Le!==null)if(V){if(F)if(M.layerUpdates.size>0){const _e=C0(De.width,De.height,M.format,M.type);for(const we of M.layerUpdates){const Be=De.data.subarray(we*_e/De.data.BYTES_PER_ELEMENT,(we+1)*_e/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,we,De.width,De.height,1,Le,Be)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,De.width,De.height,Se.depth,Le,De.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,ke,De.width,De.height,Se.depth,0,De.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?F&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,De.width,De.height,Se.depth,Le,qe,De.data):t.texImage3D(s.TEXTURE_2D_ARRAY,X,ke,De.width,De.height,Se.depth,0,Le,qe,De.data)}else{V&&ve&&t.texStorage2D(s.TEXTURE_2D,Me,ke,se[0].width,se[0].height);for(let X=0,Ee=se.length;X<Ee;X++)De=se[X],M.format!==Bi?Le!==null?V?F&&t.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,De.width,De.height,Le,De.data):t.compressedTexImage2D(s.TEXTURE_2D,X,ke,De.width,De.height,0,De.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?F&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,De.width,De.height,Le,qe,De.data):t.texImage2D(s.TEXTURE_2D,X,ke,De.width,De.height,0,Le,qe,De.data)}else if(M.isDataArrayTexture)if(V){if(ve&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,ke,Se.width,Se.height,Se.depth),F)if(M.layerUpdates.size>0){const X=C0(Se.width,Se.height,M.format,M.type);for(const Ee of M.layerUpdates){const _e=Se.data.subarray(Ee*X/Se.data.BYTES_PER_ELEMENT,(Ee+1)*X/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ee,Se.width,Se.height,1,Le,qe,_e)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Le,qe,Se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ke,Se.width,Se.height,Se.depth,0,Le,qe,Se.data);else if(M.isData3DTexture)V?(ve&&t.texStorage3D(s.TEXTURE_3D,Me,ke,Se.width,Se.height,Se.depth),F&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Le,qe,Se.data)):t.texImage3D(s.TEXTURE_3D,0,ke,Se.width,Se.height,Se.depth,0,Le,qe,Se.data);else if(M.isFramebufferTexture){if(ve)if(V)t.texStorage2D(s.TEXTURE_2D,Me,ke,Se.width,Se.height);else{let X=Se.width,Ee=Se.height;for(let _e=0;_e<Me;_e++)t.texImage2D(s.TEXTURE_2D,_e,ke,X,Ee,0,Le,qe,null),X>>=1,Ee>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const X=s.canvas;if(X.hasAttribute("layoutsubtree")||X.setAttribute("layoutsubtree","true"),Se.parentNode!==X){X.appendChild(Se),_.add(M),X.onpaint=Ee=>{const _e=Ee.changedElements;for(const we of _)_e.includes(we.image)&&(we.needsUpdate=!0)},X.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Se);else{const _e=s.RGBA,we=s.RGBA,Be=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,_e,we,Be,Se)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(se.length>0){if(V&&ve){const X=Et(se[0]);t.texStorage2D(s.TEXTURE_2D,Me,ke,X.width,X.height)}for(let X=0,Ee=se.length;X<Ee;X++)De=se[X],V?F&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,Le,qe,De):t.texImage2D(s.TEXTURE_2D,X,ke,Le,qe,De);M.generateMipmaps=!1}else if(V){if(ve){const X=Et(Se);t.texStorage2D(s.TEXTURE_2D,Me,ke,X.width,X.height)}F&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Le,qe,Se)}else t.texImage2D(s.TEXTURE_2D,0,ke,Le,qe,Se);v(M)&&L(le),Ue.__version=Re.version,M.onUpdate&&M.onUpdate(M)}U.__version=M.version}function Fe(U,M,ne){if(M.image.length!==6)return;const le=ae(U,M),ge=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+ne);const Re=r.get(ge);if(ge.version!==Re.__version||le===!0){t.activeTexture(s.TEXTURE0+ne);const Ue=bt.getPrimaries(bt.workingColorSpace),xe=M.colorSpace===Kr?null:bt.getPrimaries(M.colorSpace),Se=M.colorSpace===Kr||Ue===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Le=M.isCompressedTexture||M.image[0].isCompressedTexture,qe=M.image[0]&&M.image[0].isDataTexture,ke=[];for(let we=0;we<6;we++)!Le&&!qe?ke[we]=x(M.image[we],!0,a.maxCubemapSize):ke[we]=qe?M.image[we].image:M.image[we],ke[we]=sn(M,ke[we]);const De=ke[0],se=l.convert(M.format,M.colorSpace),V=l.convert(M.type),ve=w(M.internalFormat,se,V,M.normalized,M.colorSpace),F=M.isVideoTexture!==!0,Me=Re.__version===void 0||le===!0,X=ge.dataReady;let Ee=D(M,De);Ge(s.TEXTURE_CUBE_MAP,M);let _e;if(Le){F&&Me&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ee,ve,De.width,De.height);for(let we=0;we<6;we++){_e=ke[we].mipmaps;for(let Be=0;Be<_e.length;Be++){const He=_e[Be];M.format!==Bi?se!==null?F?X&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Be,0,0,He.width,He.height,se,He.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Be,ve,He.width,He.height,0,He.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Be,0,0,He.width,He.height,se,V,He.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Be,ve,He.width,He.height,0,se,V,He.data)}}}else{if(_e=M.mipmaps,F&&Me){_e.length>0&&Ee++;const we=Et(ke[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ee,ve,we.width,we.height)}for(let we=0;we<6;we++)if(qe){F?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,ke[we].width,ke[we].height,se,V,ke[we].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ve,ke[we].width,ke[we].height,0,se,V,ke[we].data);for(let Be=0;Be<_e.length;Be++){const Ct=_e[Be].image[we].image;F?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Be+1,0,0,Ct.width,Ct.height,se,V,Ct.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Be+1,ve,Ct.width,Ct.height,0,se,V,Ct.data)}}else{F?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,se,V,ke[we]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ve,se,V,ke[we]);for(let Be=0;Be<_e.length;Be++){const He=_e[Be];F?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Be+1,0,0,se,V,He.image[we]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Be+1,ve,se,V,He.image[we])}}}v(M)&&L(s.TEXTURE_CUBE_MAP),Re.__version=ge.version,M.onUpdate&&M.onUpdate(M)}U.__version=M.version}function ze(U,M,ne,le,ge,Re){const Ue=l.convert(ne.format,ne.colorSpace),xe=l.convert(ne.type),Se=w(ne.internalFormat,Ue,xe,ne.normalized,ne.colorSpace),Le=r.get(M),qe=r.get(ne);if(qe.__renderTarget=M,!Le.__hasExternalTextures){const ke=Math.max(1,M.width>>Re),De=Math.max(1,M.height>>Re);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,Re,Se,ke,De,M.depth,0,Ue,xe,null):t.texImage2D(ge,Re,Se,ke,De,0,Ue,xe,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),zt(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,ge,qe.__webglTexture,0,Tt(M)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,le,ge,qe.__webglTexture,Re),t.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(U,M,ne){if(s.bindRenderbuffer(s.RENDERBUFFER,U),M.depthBuffer){const le=M.depthTexture,ge=le&&le.isDepthTexture?le.type:null,Re=P(M.stencilBuffer,ge),Ue=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;zt(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Tt(M),Re,M.width,M.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt(M),Re,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Re,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ue,s.RENDERBUFFER,U)}else{const le=M.textures;for(let ge=0;ge<le.length;ge++){const Re=le[ge],Ue=l.convert(Re.format,Re.colorSpace),xe=l.convert(Re.type),Se=w(Re.internalFormat,Ue,xe,Re.normalized,Re.colorSpace);zt(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Tt(M),Se,M.width,M.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt(M),Se,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Se,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function $e(U,M,ne){const le=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=r.get(M.depthTexture);if(ge.__renderTarget=M,(!ge.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),le){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,M.depthTexture.addEventListener("dispose",k)),ge.__webglTexture===void 0){ge.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),Ge(s.TEXTURE_CUBE_MAP,M.depthTexture);const Le=l.convert(M.depthTexture.format),qe=l.convert(M.depthTexture.type);let ke;M.depthTexture.format===_r?ke=s.DEPTH_COMPONENT24:M.depthTexture.format===bs&&(ke=s.DEPTH24_STENCIL8);for(let De=0;De<6;De++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,ke,M.width,M.height,0,Le,qe,null)}}else H(M.depthTexture,0);const Re=ge.__webglTexture,Ue=Tt(M),xe=le?s.TEXTURE_CUBE_MAP_POSITIVE_X+ne:s.TEXTURE_2D,Se=M.depthTexture.format===bs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===_r)zt(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,xe,Re,0,Ue):s.framebufferTexture2D(s.FRAMEBUFFER,Se,xe,Re,0);else if(M.depthTexture.format===bs)zt(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,xe,Re,0,Ue):s.framebufferTexture2D(s.FRAMEBUFFER,Se,xe,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function wt(U){const M=r.get(U),ne=U.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==U.depthTexture){const le=U.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),le){const ge=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,le.removeEventListener("dispose",ge)};le.addEventListener("dispose",ge),M.__depthDisposeCallback=ge}M.__boundDepthTexture=le}if(U.depthTexture&&!M.__autoAllocateDepthBuffer)if(ne)for(let le=0;le<6;le++)$e(M.__webglFramebuffer[le],U,le);else{const le=U.texture.mipmaps;le&&le.length>0?$e(M.__webglFramebuffer[0],U,0):$e(M.__webglFramebuffer,U,0)}else if(ne){M.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[le]),M.__webglDepthbuffer[le]===void 0)M.__webglDepthbuffer[le]=s.createRenderbuffer(),lt(M.__webglDepthbuffer[le],U,!1);else{const ge=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=M.__webglDepthbuffer[le];s.bindRenderbuffer(s.RENDERBUFFER,Re),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Re)}}else{const le=U.texture.mipmaps;if(le&&le.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),lt(M.__webglDepthbuffer,U,!1);else{const ge=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Re),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Re)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ft(U,M,ne){const le=r.get(U);M!==void 0&&ze(le.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ne!==void 0&&wt(U)}function dt(U){const M=U.texture,ne=r.get(U),le=r.get(M);U.addEventListener("dispose",E);const ge=U.textures,Re=U.isWebGLCubeRenderTarget===!0,Ue=ge.length>1;if(Ue||(le.__webglTexture===void 0&&(le.__webglTexture=s.createTexture()),le.__version=M.version,u.memory.textures++),Re){ne.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(M.mipmaps&&M.mipmaps.length>0){ne.__webglFramebuffer[xe]=[];for(let Se=0;Se<M.mipmaps.length;Se++)ne.__webglFramebuffer[xe][Se]=s.createFramebuffer()}else ne.__webglFramebuffer[xe]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){ne.__webglFramebuffer=[];for(let xe=0;xe<M.mipmaps.length;xe++)ne.__webglFramebuffer[xe]=s.createFramebuffer()}else ne.__webglFramebuffer=s.createFramebuffer();if(Ue)for(let xe=0,Se=ge.length;xe<Se;xe++){const Le=r.get(ge[xe]);Le.__webglTexture===void 0&&(Le.__webglTexture=s.createTexture(),u.memory.textures++)}if(U.samples>0&&zt(U)===!1){ne.__webglMultisampledFramebuffer=s.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let xe=0;xe<ge.length;xe++){const Se=ge[xe];ne.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ne.__webglColorRenderbuffer[xe]);const Le=l.convert(Se.format,Se.colorSpace),qe=l.convert(Se.type),ke=w(Se.internalFormat,Le,qe,Se.normalized,Se.colorSpace,U.isXRRenderTarget===!0),De=Tt(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,De,ke,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,ne.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(ne.__webglDepthRenderbuffer=s.createRenderbuffer(),lt(ne.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Re){t.bindTexture(s.TEXTURE_CUBE_MAP,le.__webglTexture),Ge(s.TEXTURE_CUBE_MAP,M);for(let xe=0;xe<6;xe++)if(M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)ze(ne.__webglFramebuffer[xe][Se],U,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Se);else ze(ne.__webglFramebuffer[xe],U,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);v(M)&&L(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let xe=0,Se=ge.length;xe<Se;xe++){const Le=ge[xe],qe=r.get(Le);let ke=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ke=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ke,qe.__webglTexture),Ge(ke,Le),ze(ne.__webglFramebuffer,U,Le,s.COLOR_ATTACHMENT0+xe,ke,0),v(Le)&&L(ke)}t.unbindTexture()}else{let xe=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(xe=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,le.__webglTexture),Ge(xe,M),M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)ze(ne.__webglFramebuffer[Se],U,M,s.COLOR_ATTACHMENT0,xe,Se);else ze(ne.__webglFramebuffer,U,M,s.COLOR_ATTACHMENT0,xe,0);v(M)&&L(xe),t.unbindTexture()}U.depthBuffer&&wt(U)}function kt(U){const M=U.textures;for(let ne=0,le=M.length;ne<le;ne++){const ge=M[ne];if(v(ge)){const Re=N(U),Ue=r.get(ge).__webglTexture;t.bindTexture(Re,Ue),L(Re),t.unbindTexture()}}}const Bt=[],It=[];function Ut(U){if(U.samples>0){if(zt(U)===!1){const M=U.textures,ne=U.width,le=U.height;let ge=s.COLOR_BUFFER_BIT;const Re=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=r.get(U),xe=M.length>1;if(xe)for(let Le=0;Le<M.length;Le++)t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const Se=U.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Le=0;Le<M.length;Le++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),xe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Le]);const qe=r.get(M[Le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,qe,0)}s.blitFramebuffer(0,0,ne,le,0,0,ne,le,ge,s.NEAREST),d===!0&&(Bt.length=0,It.length=0,Bt.push(s.COLOR_ATTACHMENT0+Le),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Bt.push(Re),It.push(Re),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,It)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Bt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xe)for(let Le=0;Le<M.length;Le++){t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Le]);const qe=r.get(M[Le]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,qe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&d){const M=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Tt(U){return Math.min(a.maxSamples,U.samples)}function zt(U){const M=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Z(U){const M=u.render.frame;y.get(U)!==M&&(y.set(U,M),U.update())}function sn(U,M){const ne=U.colorSpace,le=U.format,ge=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ne!==xc&&ne!==Kr&&(bt.getTransfer(ne)===Ot?(le!==Bi||ge!==gi)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",ne)),M}function Et(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=z,this.resetTextureUnits=fe,this.getTextureUnits=re,this.setTextureUnits=q,this.setTexture2D=H,this.setTexture2DArray=K,this.setTexture3D=ie,this.setTextureCube=O,this.rebindTextures=ft,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=zt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function $E(s,e){function t(r,a=Kr){let l;const u=bt.getTransfer(a);if(r===gi)return s.UNSIGNED_BYTE;if(r===rh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===sh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===_g)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===yg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===vg)return s.BYTE;if(r===xg)return s.SHORT;if(r===To)return s.UNSIGNED_SHORT;if(r===ih)return s.INT;if(r===er)return s.UNSIGNED_INT;if(r===Ki)return s.FLOAT;if(r===vi)return s.HALF_FLOAT;if(r===Sg)return s.ALPHA;if(r===Mg)return s.RGB;if(r===Bi)return s.RGBA;if(r===_r)return s.DEPTH_COMPONENT;if(r===bs)return s.DEPTH_STENCIL;if(r===Eg)return s.RED;if(r===ah)return s.RED_INTEGER;if(r===Cs)return s.RG;if(r===oh)return s.RG_INTEGER;if(r===lh)return s.RGBA_INTEGER;if(r===cc||r===uc||r===dc||r===fc)if(u===Ot)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===cc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===uc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===dc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===cc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===uc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===dc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===uf||r===df||r===ff||r===hf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===uf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===df)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ff)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===hf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===pf||r===mf||r===gf||r===vf||r===xf||r===gc||r===_f)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===pf||r===mf)return u===Ot?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===gf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===vf)return l.COMPRESSED_R11_EAC;if(r===xf)return l.COMPRESSED_SIGNED_R11_EAC;if(r===gc)return l.COMPRESSED_RG11_EAC;if(r===_f)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===yf||r===Sf||r===Mf||r===Ef||r===wf||r===Tf||r===bf||r===Af||r===Rf||r===Cf||r===Pf||r===Nf||r===Lf||r===Df)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===yf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Sf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Mf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ef)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Tf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Af)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Rf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Cf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Pf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Nf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Lf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Df)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===If||r===Uf||r===Ff)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===If)return u===Ot?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Uf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ff)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Of||r===kf||r===vc||r===Bf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Of)return l.COMPRESSED_RED_RGTC1_EXT;if(r===kf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===vc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Bf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const ZE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class JE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Lg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Fn({vertexShader:ZE,fragmentShader:QE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new Kn(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ew extends Ps{constructor(e,t){super();const r=this;let a=null,l=1,u=null,f="local-floor",d=1,p=null,y=null,_=null,g=null,S=null,T=null;const C=typeof XRWebGLBinding<"u",x=new JE,v={},L=t.getContextAttributes();let N=null,w=null;const P=[],D=[],k=new rt;let E=null;const I=new pi;I.viewport=new rn;const j=new pi;j.viewport=new rn;const W=[I,j],$=new oy;let fe=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ye=P[ae];return ye===void 0&&(ye=new wd,P[ae]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(ae){let ye=P[ae];return ye===void 0&&(ye=new wd,P[ae]=ye),ye.getGripSpace()},this.getHand=function(ae){let ye=P[ae];return ye===void 0&&(ye=new wd,P[ae]=ye),ye.getHandSpace()};function q(ae){const ye=D.indexOf(ae.inputSource);if(ye===-1)return;const he=P[ye];he!==void 0&&(he.update(ae.inputSource,ae.frame,p||u),he.dispatchEvent({type:ae.type,data:ae.inputSource}))}function z(){a.removeEventListener("select",q),a.removeEventListener("selectstart",q),a.removeEventListener("selectend",q),a.removeEventListener("squeeze",q),a.removeEventListener("squeezestart",q),a.removeEventListener("squeezeend",q),a.removeEventListener("end",z),a.removeEventListener("inputsourceschange",G);for(let ae=0;ae<P.length;ae++){const ye=D[ae];ye!==null&&(D[ae]=null,P[ae].disconnect(ye))}fe=null,re=null,x.reset();for(const ae in v)delete v[ae];e.setRenderTarget(N),S=null,g=null,_=null,a=null,w=null,Ge.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){l=ae,r.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){f=ae,r.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ae){p=ae},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(a,t)),_},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(ae){if(a=ae,a!==null){if(N=e.getRenderTarget(),a.addEventListener("select",q),a.addEventListener("selectstart",q),a.addEventListener("selectend",q),a.addEventListener("squeeze",q),a.addEventListener("squeezestart",q),a.addEventListener("squeezeend",q),a.addEventListener("end",z),a.addEventListener("inputsourceschange",G),L.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(k),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Te=null,Fe=null;L.depth&&(Fe=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=L.stencil?bs:_r,Te=L.stencil?bo:er);const ze={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:l};_=this.getBinding(),g=_.createProjectionLayer(ze),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),w=new si(g.textureWidth,g.textureHeight,{format:Bi,type:gi,depthTexture:new wa(g.textureWidth,g.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const he={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,he),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),w=new si(S.framebufferWidth,S.framebufferHeight,{format:Bi,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=await a.requestReferenceSpace(f),Ge.setContext(a),Ge.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function G(ae){for(let ye=0;ye<ae.removed.length;ye++){const he=ae.removed[ye],Te=D.indexOf(he);Te>=0&&(D[Te]=null,P[Te].disconnect(he))}for(let ye=0;ye<ae.added.length;ye++){const he=ae.added[ye];let Te=D.indexOf(he);if(Te===-1){for(let ze=0;ze<P.length;ze++)if(ze>=D.length){D.push(he),Te=ze;break}else if(D[ze]===null){D[ze]=he,Te=ze;break}if(Te===-1)break}const Fe=P[Te];Fe&&Fe.connect(he)}}const H=new J,K=new J;function ie(ae,ye,he){H.setFromMatrixPosition(ye.matrixWorld),K.setFromMatrixPosition(he.matrixWorld);const Te=H.distanceTo(K),Fe=ye.projectionMatrix.elements,ze=he.projectionMatrix.elements,lt=Fe[14]/(Fe[10]-1),$e=Fe[14]/(Fe[10]+1),wt=(Fe[9]+1)/Fe[5],ft=(Fe[9]-1)/Fe[5],dt=(Fe[8]-1)/Fe[0],kt=(ze[8]+1)/ze[0],Bt=lt*dt,It=lt*kt,Ut=Te/(-dt+kt),Tt=Ut*-dt;if(ye.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Tt),ae.translateZ(Ut),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Fe[10]===-1)ae.projectionMatrix.copy(ye.projectionMatrix),ae.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const zt=lt+Ut,Z=$e+Ut,sn=Bt-Tt,Et=It+(Te-Tt),U=wt*$e/Z*zt,M=ft*$e/Z*zt;ae.projectionMatrix.makePerspective(sn,Et,U,M,zt,Z),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function O(ae,ye){ye===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ye.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(a===null)return;let ye=ae.near,he=ae.far;x.texture!==null&&(x.depthNear>0&&(ye=x.depthNear),x.depthFar>0&&(he=x.depthFar)),$.near=j.near=I.near=ye,$.far=j.far=I.far=he,(fe!==$.near||re!==$.far)&&(a.updateRenderState({depthNear:$.near,depthFar:$.far}),fe=$.near,re=$.far),$.layers.mask=ae.layers.mask|6,I.layers.mask=$.layers.mask&-5,j.layers.mask=$.layers.mask&-3;const Te=ae.parent,Fe=$.cameras;O($,Te);for(let ze=0;ze<Fe.length;ze++)O(Fe[ze],Te);Fe.length===2?ie($,I,j):$.projectionMatrix.copy(I.projectionMatrix),te(ae,$,Te)};function te(ae,ye,he){he===null?ae.matrix.copy(ye.matrixWorld):(ae.matrix.copy(he.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ye.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ye.projectionMatrix),ae.projectionMatrixInverse.copy(ye.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Gf*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(g===null&&S===null))return d},this.setFoveation=function(ae){d=ae,g!==null&&(g.fixedFoveation=ae),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ae)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh($)},this.getCameraTexture=function(ae){return v[ae]};let Ne=null;function Ve(ae,ye){if(y=ye.getViewerPose(p||u),T=ye,y!==null){const he=y.views;S!==null&&(e.setRenderTargetFramebuffer(w,S.framebuffer),e.setRenderTarget(w));let Te=!1;he.length!==$.cameras.length&&($.cameras.length=0,Te=!0);for(let $e=0;$e<he.length;$e++){const wt=he[$e];let ft=null;if(S!==null)ft=S.getViewport(wt);else{const kt=_.getViewSubImage(g,wt);ft=kt.viewport,$e===0&&(e.setRenderTargetTextures(w,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(w))}let dt=W[$e];dt===void 0&&(dt=new pi,dt.layers.enable($e),dt.viewport=new rn,W[$e]=dt),dt.matrix.fromArray(wt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(wt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(ft.x,ft.y,ft.width,ft.height),$e===0&&($.matrix.copy(dt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Te===!0&&$.cameras.push(dt)}const Fe=a.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const $e=_.getDepthInformation(he[0]);$e&&$e.isValid&&$e.texture&&x.init($e,a.renderState)}if(Fe&&Fe.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let $e=0;$e<he.length;$e++){const wt=he[$e].camera;if(wt){let ft=v[wt];ft||(ft=new Lg,v[wt]=ft);const dt=_.getCameraImage(wt);ft.sourceTexture=dt}}}}for(let he=0;he<P.length;he++){const Te=D[he],Fe=P[he];Te!==null&&Fe!==void 0&&Fe.update(Te,ye,p||u)}Ne&&Ne(ae,ye),ye.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ye}),T=null}const Ge=new kg;Ge.setAnimationLoop(Ve),this.setAnimationLoop=function(ae){Ne=ae},this.dispose=function(){}}}const tw=new Zt,Xg=new mt;Xg.set(-1,0,0,0,1,0,0,0,1);function nw(s,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function r(x,v){v.color.getRGB(x.fogColor.value,Dg(s)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function a(x,v,L,N,w){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?l(x,v):v.isMeshLambertMaterial?(l(x,v),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(l(x,v),_(x,v)):v.isMeshPhongMaterial?(l(x,v),y(x,v),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(l(x,v),g(x,v),v.isMeshPhysicalMaterial&&S(x,v,w)):v.isMeshMatcapMaterial?(l(x,v),T(x,v)):v.isMeshDepthMaterial?l(x,v):v.isMeshDistanceMaterial?(l(x,v),C(x,v)):v.isMeshNormalMaterial?l(x,v):v.isLineBasicMaterial?(u(x,v),v.isLineDashedMaterial&&f(x,v)):v.isPointsMaterial?d(x,v,L,N):v.isSpriteMaterial?p(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===ri&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===ri&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const L=e.get(v),N=L.envMap,w=L.envMapRotation;N&&(x.envMap.value=N,x.envMapRotation.value.setFromMatrix4(tw.makeRotationFromEuler(w)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Xg),x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function u(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function f(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function d(x,v,L,N){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*L,x.scale.value=N*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function y(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function _(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function g(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function S(x,v,L){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===ri&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=L.texture,x.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,v){v.matcap&&(x.matcap.value=v.matcap)}function C(x,v){const L=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(L.matrixWorld),x.nearDistance.value=L.shadow.camera.near,x.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function iw(s,e,t,r){let a={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(w,P){const D=P.program;r.uniformBlockBinding(w,D)}function p(w,P){let D=a[w.id];D===void 0&&(x(w),D=y(w),a[w.id]=D,w.addEventListener("dispose",L));const k=P.program;r.updateUBOMapping(w,k);const E=e.render.frame;l[w.id]!==E&&(g(w),l[w.id]=E)}function y(w){const P=_();w.__bindingPointIndex=P;const D=s.createBuffer(),k=w.__size,E=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,k,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,D),D}function _(){for(let w=0;w<f;w++)if(u.indexOf(w)===-1)return u.push(w),w;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const P=a[w.id],D=w.uniforms,k=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let E=0,I=D.length;E<I;E++){const j=D[E];if(Array.isArray(j))for(let W=0,$=j.length;W<$;W++)S(j[W],E,W,k);else S(j,E,0,k)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(w,P,D,k){if(C(w,P,D,k)===!0){const E=w.__offset,I=w.value;if(Array.isArray(I)){let j=0;for(let W=0;W<I.length;W++){const $=I[W],fe=v($);T($,w.__data,j),typeof $!="number"&&typeof $!="boolean"&&!$.isMatrix3&&!ArrayBuffer.isView($)&&(j+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(I,w.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,w.__data)}}function T(w,P,D){typeof w=="number"||typeof w=="boolean"?P[0]=w:w.isMatrix3?(P[0]=w.elements[0],P[1]=w.elements[1],P[2]=w.elements[2],P[3]=0,P[4]=w.elements[3],P[5]=w.elements[4],P[6]=w.elements[5],P[7]=0,P[8]=w.elements[6],P[9]=w.elements[7],P[10]=w.elements[8],P[11]=0):ArrayBuffer.isView(w)?P.set(new w.constructor(w.buffer,w.byteOffset,P.length)):w.toArray(P,D)}function C(w,P,D,k){const E=w.value,I=P+"_"+D;if(k[I]===void 0)return typeof E=="number"||typeof E=="boolean"?k[I]=E:ArrayBuffer.isView(E)?k[I]=E.slice():k[I]=E.clone(),!0;{const j=k[I];if(typeof E=="number"||typeof E=="boolean"){if(j!==E)return k[I]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(j.equals(E)===!1)return j.copy(E),!0}}return!1}function x(w){const P=w.uniforms;let D=0;const k=16;for(let I=0,j=P.length;I<j;I++){const W=Array.isArray(P[I])?P[I]:[P[I]];for(let $=0,fe=W.length;$<fe;$++){const re=W[$],q=Array.isArray(re.value)?re.value:[re.value];for(let z=0,G=q.length;z<G;z++){const H=q[z],K=v(H),ie=D%k,O=ie%K.boundary,te=ie+O;D+=O,te!==0&&k-te<K.storage&&(D+=k-te),re.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=D,D+=K.storage}}}const E=D%k;return E>0&&(D+=k-E),w.__size=D,w.__cache={},this}function v(w){const P={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(P.boundary=4,P.storage=4):w.isVector2?(P.boundary=8,P.storage=8):w.isVector3||w.isColor?(P.boundary=16,P.storage=12):w.isVector4?(P.boundary=16,P.storage=16):w.isMatrix3?(P.boundary=48,P.storage=48):w.isMatrix4?(P.boundary=64,P.storage=64):w.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(P.boundary=16,P.storage=w.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",w),P}function L(w){const P=w.target;P.removeEventListener("dispose",L);const D=u.indexOf(P.__bindingPointIndex);u.splice(D,1),s.deleteBuffer(a[P.id]),delete a[P.id],delete l[P.id]}function N(){for(const w in a)s.deleteBuffer(a[w]);u=[],a={},l={}}return{bind:d,update:p,dispose:N}}const rw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ji=null;function sw(){return ji===null&&(ji=new X_(rw,16,16,Cs,vi),ji.name="DFG_LUT",ji.minFilter=Rn,ji.magFilter=Rn,ji.wrapS=vr,ji.wrapT=vr,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}class aw{constructor(e={}){const{canvas:t=S_(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:S=gi}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=u;const C=S,x=new Set([lh,oh,ah]),v=new Set([gi,er,To,bo,rh,sh]),L=new Uint32Array(4),N=new Int32Array(4),w=new J;let P=null,D=null;const k=[],E=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const j=this;let W=!1,$=null,fe=null,re=null,q=null;this._outputColorSpace=vn;let z=0,G=0,H=null,K=-1,ie=null;const O=new rn,te=new rn;let Ne=null;const Ve=new xt(0);let Ge=0,ae=t.width,ye=t.height,he=1,Te=null,Fe=null;const ze=new rn(0,0,ae,ye),lt=new rn(0,0,ae,ye);let $e=!1;const wt=new mh;let ft=!1,dt=!1;const kt=new Zt,Bt=new J,It=new rn,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Tt=!1;function zt(){return H===null?he:1}let Z=r;function sn(R,ee){return t.getContext(R,ee)}try{const R={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:y,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$f}`),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",Nt,!1),t.addEventListener("webglcontextcreationerror",cn,!1),Z===null){const ee="webgl2";if(Z=sn(ee,R),Z===null)throw sn(ee)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw At("WebGLRenderer: "+R.message),R}let Et,U,M,ne,le,ge,Re,Ue,xe,Se,Le,qe,ke,De,se,V,ve,F,Me,X,Ee,_e,we;function Be(){Et=new sM(Z),Et.init(),Ee=new $E(Z,Et),U=new Z1(Z,Et,e,Ee),M=new qE(Z,Et),U.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),fe=Z.createFramebuffer(),re=Z.createFramebuffer(),q=Z.createFramebuffer(),ne=new lM(Z),le=new IE,ge=new KE(Z,Et,M,le,U,Ee,ne),Re=new rM(j),Ue=new fy(Z),_e=new K1(Z,Ue),xe=new aM(Z,Ue,ne,_e),Se=new uM(Z,xe,Ue,_e,ne),F=new cM(Z,U,ge),se=new Q1(le),Le=new DE(j,Re,Et,U,_e,se),qe=new nw(j,le),ke=new FE,De=new GE(Et),ve=new q1(j,Re,M,Se,T,d),V=new YE(j,Se,U),we=new iw(Z,ne,U,M),Me=new $1(Z,Et,ne),X=new oM(Z,Et,ne),ne.programs=Le.programs,j.capabilities=U,j.extensions=Et,j.properties=le,j.renderLists=ke,j.shadowMap=V,j.state=M,j.info=ne}Be(),C!==gi&&(I=new fM(C,t.width,t.height,f,a,l));const He=new ew(j,Z);this.xr=He,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const R=Et.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Et.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(R){R!==void 0&&(he=R,this.setSize(ae,ye,!1))},this.getSize=function(R){return R.set(ae,ye)},this.setSize=function(R,ee,pe=!0){if(He.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=R,ye=ee,t.width=Math.floor(R*he),t.height=Math.floor(ee*he),pe===!0&&(t.style.width=R+"px",t.style.height=ee+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,R,ee)},this.getDrawingBufferSize=function(R){return R.set(ae*he,ye*he).floor()},this.setDrawingBufferSize=function(R,ee,pe){ae=R,ye=ee,he=pe,t.width=Math.floor(R*pe),t.height=Math.floor(ee*pe),this.setViewport(0,0,R,ee)},this.setEffects=function(R){if(C===gi){At("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let ee=0;ee<R.length;ee++)if(R[ee].isOutputPass===!0){ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(ze)},this.setViewport=function(R,ee,pe,ue){R.isVector4?ze.set(R.x,R.y,R.z,R.w):ze.set(R,ee,pe,ue),M.viewport(O.copy(ze).multiplyScalar(he).round())},this.getScissor=function(R){return R.copy(lt)},this.setScissor=function(R,ee,pe,ue){R.isVector4?lt.set(R.x,R.y,R.z,R.w):lt.set(R,ee,pe,ue),M.scissor(te.copy(lt).multiplyScalar(he).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(R){M.setScissorTest($e=R)},this.setOpaqueSort=function(R){Te=R},this.setTransparentSort=function(R){Fe=R},this.getClearColor=function(R){return R.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(R=!0,ee=!0,pe=!0){let ue=0;if(R){let ce=!1;if(H!==null){const Oe=H.texture.format;ce=x.has(Oe)}if(ce){const Oe=H.texture.type,Ye=v.has(Oe),Ie=ve.getClearColor(),Qe=ve.getClearAlpha(),nt=Ie.r,ht=Ie.g,pt=Ie.b;Ye?(L[0]=nt,L[1]=ht,L[2]=pt,L[3]=Qe,Z.clearBufferuiv(Z.COLOR,0,L)):(N[0]=nt,N[1]=ht,N[2]=pt,N[3]=Qe,Z.clearBufferiv(Z.COLOR,0,N))}else ue|=Z.COLOR_BUFFER_BIT}ee&&(ue|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pe&&(ue|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ue!==0&&Z.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),$=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",cn,!1),ve.dispose(),ke.dispose(),De.dispose(),le.dispose(),Re.dispose(),Se.dispose(),_e.dispose(),we.dispose(),Le.dispose(),He.dispose(),He.removeEventListener("sessionstart",Er),He.removeEventListener("sessionend",ts),Vn.stop()};function Ct(R){R.preventDefault(),Sc("WebGLRenderer: Context Lost."),W=!0}function Nt(){Sc("WebGLRenderer: Context Restored."),W=!1;const R=ne.autoReset,ee=V.enabled,pe=V.autoUpdate,ue=V.needsUpdate,ce=V.type;Be(),ne.autoReset=R,V.enabled=ee,V.autoUpdate=pe,V.needsUpdate=ue,V.type=ce}function cn(R){At("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ai(R){const ee=R.target;ee.removeEventListener("dispose",ai),tr(ee)}function tr(R){Sr(R),le.remove(R)}function Sr(R){const ee=le.get(R).programs;ee!==void 0&&(ee.forEach(function(pe){Le.releaseProgram(pe)}),R.isShaderMaterial&&Le.releaseShaderCache(R))}this.renderBufferDirect=function(R,ee,pe,ue,ce,Oe){ee===null&&(ee=Ut);const Ye=ce.isMesh&&ce.matrixWorld.determinantAffine()<0,Ie=en(R,ee,pe,ue,ce);M.setMaterial(ue,Ye);let Qe=pe.index,nt=1;if(ue.wireframe===!0){if(Qe=xe.getWireframeAttribute(pe),Qe===void 0)return;nt=2}const ht=pe.drawRange,pt=pe.attributes.position;let et=ht.start*nt,Pt=(ht.start+ht.count)*nt;Oe!==null&&(et=Math.max(et,Oe.start*nt),Pt=Math.min(Pt,(Oe.start+Oe.count)*nt)),Qe!==null?(et=Math.max(et,0),Pt=Math.min(Pt,Qe.count)):pt!=null&&(et=Math.max(et,0),Pt=Math.min(Pt,pt.count));const jt=Pt-et;if(jt<0||jt===1/0)return;_e.setup(ce,ue,Ie,pe,Qe);let Qt,Vt=Me;if(Qe!==null&&(Qt=Ue.get(Qe),Vt=X,Vt.setIndex(Qt)),ce.isMesh)ue.wireframe===!0?(M.setLineWidth(ue.wireframeLinewidth*zt()),Vt.setMode(Z.LINES)):Vt.setMode(Z.TRIANGLES);else if(ce.isLine){let un=ue.linewidth;un===void 0&&(un=1),M.setLineWidth(un*zt()),ce.isLineSegments?Vt.setMode(Z.LINES):ce.isLineLoop?Vt.setMode(Z.LINE_LOOP):Vt.setMode(Z.LINE_STRIP)}else ce.isPoints?Vt.setMode(Z.POINTS):ce.isSprite&&Vt.setMode(Z.TRIANGLES);if(ce.isBatchedMesh)if(Et.get("WEBGL_multi_draw"))Vt.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else{const un=ce._multiDrawStarts,Xe=ce._multiDrawCounts,wn=ce._multiDrawCount,yt=Qe?Ue.get(Qe).bytesPerElement:1,$n=le.get(ue).currentProgram.getUniforms();for(let Zn=0;Zn<wn;Zn++)$n.setValue(Z,"_gl_DrawID",Zn),Vt.render(un[Zn]/yt,Xe[Zn])}else if(ce.isInstancedMesh)Vt.renderInstances(et,jt,ce.count);else if(pe.isInstancedBufferGeometry){const un=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,Xe=Math.min(pe.instanceCount,un);Vt.renderInstances(et,jt,Xe)}else Vt.render(et,jt)};function Bn(R,ee,pe){R.transparent===!0&&R.side===mi&&R.forceSinglePass===!1?(R.side=ri,R.needsUpdate=!0,is(R,ee,pe),R.side=Jr,R.needsUpdate=!0,is(R,ee,pe),R.side=mi):is(R,ee,pe)}this.compile=function(R,ee,pe=null){pe===null&&(pe=R),D=De.get(pe),D.init(ee),E.push(D),pe.traverseVisible(function(ce){ce.isLight&&ce.layers.test(ee.layers)&&(D.pushLight(ce),ce.castShadow&&D.pushShadow(ce))}),R!==pe&&R.traverseVisible(function(ce){ce.isLight&&ce.layers.test(ee.layers)&&(D.pushLight(ce),ce.castShadow&&D.pushShadow(ce))}),D.setupLights();const ue=new Set;return R.traverse(function(ce){if(!(ce.isMesh||ce.isPoints||ce.isLine||ce.isSprite))return;const Oe=ce.material;if(Oe)if(Array.isArray(Oe))for(let Ye=0;Ye<Oe.length;Ye++){const Ie=Oe[Ye];Bn(Ie,pe,ce),ue.add(Ie)}else Bn(Oe,pe,ce),ue.add(Oe)}),D=E.pop(),ue},this.compileAsync=function(R,ee,pe=null){const ue=this.compile(R,ee,pe);return new Promise(ce=>{function Oe(){if(ue.forEach(function(Ye){le.get(Ye).currentProgram.isReady()&&ue.delete(Ye)}),ue.size===0){ce(R);return}setTimeout(Oe,10)}Et.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let zn=null;function Mr(R){zn&&zn(R)}function Er(){Vn.stop()}function ts(){Vn.start()}const Vn=new kg;Vn.setAnimationLoop(Mr),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(R){zn=R,He.setAnimationLoop(R),R===null?Vn.stop():Vn.start()},He.addEventListener("sessionstart",Er),He.addEventListener("sessionend",ts),this.render=function(R,ee){if(ee!==void 0&&ee.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;$!==null&&$.renderStart(R,ee);const pe=He.enabled===!0&&He.isPresenting===!0,ue=I!==null&&(H===null||pe)&&I.begin(j,H);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera(ee),ee=He.getCamera()),R.isScene===!0&&R.onBeforeRender(j,R,ee,H),D=De.get(R,E.length),D.init(ee),D.state.textureUnits=ge.getTextureUnits(),E.push(D),kt.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),wt.setFromProjectionMatrix(kt,$i,ee.reversedDepth),dt=this.localClippingEnabled,ft=se.init(this.clippingPlanes,dt),P=ke.get(R,k.length),P.init(),k.push(P),He.enabled===!0&&He.isPresenting===!0){const Ye=j.xr.getDepthSensingMesh();Ye!==null&&Ls(Ye,ee,-1/0,j.sortObjects)}Ls(R,ee,0,j.sortObjects),P.finish(),j.sortObjects===!0&&P.sort(Te,Fe,ee.reversedDepth),Tt=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,Tt&&ve.addToRenderList(P,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ft===!0&&se.beginShadows();const ce=D.state.shadowsArray;if(V.render(ce,R,ee),ft===!0&&se.endShadows(),(ue&&I.hasRenderPass())===!1){const Ye=P.opaque,Ie=P.transmissive;if(D.setupLights(),ee.isArrayCamera){const Qe=ee.cameras;if(Ie.length>0)for(let nt=0,ht=Qe.length;nt<ht;nt++){const pt=Qe[nt];Lo(Ye,Ie,R,pt)}Tt&&ve.render(R);for(let nt=0,ht=Qe.length;nt<ht;nt++){const pt=Qe[nt];Pa(P,R,pt,pt.viewport)}}else Ie.length>0&&Lo(Ye,Ie,R,ee),Tt&&ve.render(R),Pa(P,R,ee)}H!==null&&G===0&&(ge.updateMultisampleRenderTarget(H),ge.updateRenderTargetMipmap(H)),ue&&I.end(j),R.isScene===!0&&R.onAfterRender(j,R,ee),_e.resetDefaultState(),K=-1,ie=null,E.pop(),E.length>0?(D=E[E.length-1],ge.setTextureUnits(D.state.textureUnits),ft===!0&&se.setGlobalState(j.clippingPlanes,D.state.camera)):D=null,k.pop(),k.length>0?P=k[k.length-1]:P=null,$!==null&&$.renderEnd()};function Ls(R,ee,pe,ue){if(R.visible===!1)return;if(R.layers.test(ee.layers)){if(R.isGroup)pe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(ee);else if(R.isLightProbeGrid)D.pushLightProbeGrid(R);else if(R.isLight)D.pushLight(R),R.castShadow&&D.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||wt.intersectsSprite(R)){ue&&It.setFromMatrixPosition(R.matrixWorld).applyMatrix4(kt);const Ye=Se.update(R),Ie=R.material;Ie.visible&&P.push(R,Ye,Ie,pe,It.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||wt.intersectsObject(R))){const Ye=Se.update(R),Ie=R.material;if(ue&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),It.copy(R.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),It.copy(Ye.boundingSphere.center)),It.applyMatrix4(R.matrixWorld).applyMatrix4(kt)),Array.isArray(Ie)){const Qe=Ye.groups;for(let nt=0,ht=Qe.length;nt<ht;nt++){const pt=Qe[nt],et=Ie[pt.materialIndex];et&&et.visible&&P.push(R,Ye,et,pe,It.z,pt)}}else Ie.visible&&P.push(R,Ye,Ie,pe,It.z,null)}}const Oe=R.children;for(let Ye=0,Ie=Oe.length;Ye<Ie;Ye++)Ls(Oe[Ye],ee,pe,ue)}function Pa(R,ee,pe,ue){const{opaque:ce,transmissive:Oe,transparent:Ye}=R;D.setupLightsView(pe),ft===!0&&se.setGlobalState(j.clippingPlanes,pe),ue&&M.viewport(O.copy(ue)),ce.length>0&&ns(ce,ee,pe),Oe.length>0&&ns(Oe,ee,pe),Ye.length>0&&ns(Ye,ee,pe),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Lo(R,ee,pe,ue){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ue.id]===void 0){const et=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ue.id]=new si(1,1,{generateMipmaps:!0,type:et?vi:gi,minFilter:Ts,samples:Math.max(4,U.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace})}const Oe=D.state.transmissionRenderTarget[ue.id],Ye=ue.viewport||O;Oe.setSize(Ye.z*j.transmissionResolutionScale,Ye.w*j.transmissionResolutionScale);const Ie=j.getRenderTarget(),Qe=j.getActiveCubeFace(),nt=j.getActiveMipmapLevel();j.setRenderTarget(Oe),j.getClearColor(Ve),Ge=j.getClearAlpha(),Ge<1&&j.setClearColor(16777215,.5),j.clear(),Tt&&ve.render(pe);const ht=j.toneMapping;j.toneMapping=Ji;const pt=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),D.setupLightsView(ue),ft===!0&&se.setGlobalState(j.clippingPlanes,ue),ns(R,pe,ue),ge.updateMultisampleRenderTarget(Oe),ge.updateRenderTargetMipmap(Oe),Et.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Pt=0,jt=ee.length;Pt<jt;Pt++){const Qt=ee[Pt],{object:Vt,geometry:un,material:Xe,group:wn}=Qt;if(Xe.side===mi&&Vt.layers.test(ue.layers)){const yt=Xe.side;Xe.side=ri,Xe.needsUpdate=!0,Na(Vt,pe,ue,un,Xe,wn),Xe.side=yt,Xe.needsUpdate=!0,et=!0}}et===!0&&(ge.updateMultisampleRenderTarget(Oe),ge.updateRenderTargetMipmap(Oe))}j.setRenderTarget(Ie,Qe,nt),j.setClearColor(Ve,Ge),pt!==void 0&&(ue.viewport=pt),j.toneMapping=ht}function ns(R,ee,pe){const ue=ee.isScene===!0?ee.overrideMaterial:null;for(let ce=0,Oe=R.length;ce<Oe;ce++){const Ye=R[ce],{object:Ie,geometry:Qe,group:nt}=Ye;let ht=Ye.material;ht.allowOverride===!0&&ue!==null&&(ht=ue),Ie.layers.test(pe.layers)&&Na(Ie,ee,pe,Qe,ht,nt)}}function Na(R,ee,pe,ue,ce,Oe){R.onBeforeRender(j,ee,pe,ue,ce,Oe),R.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ce.onBeforeRender(j,ee,pe,ue,R,Oe),ce.transparent===!0&&ce.side===mi&&ce.forceSinglePass===!1?(ce.side=ri,ce.needsUpdate=!0,j.renderBufferDirect(pe,ee,ue,ce,R,Oe),ce.side=Jr,ce.needsUpdate=!0,j.renderBufferDirect(pe,ee,ue,ce,R,Oe),ce.side=mi):j.renderBufferDirect(pe,ee,ue,ce,R,Oe),R.onAfterRender(j,ee,pe,ue,ce,Oe)}function is(R,ee,pe){ee.isScene!==!0&&(ee=Ut);const ue=le.get(R),ce=D.state.lights,Oe=D.state.shadowsArray,Ye=ce.state.version,Ie=Le.getParameters(R,ce.state,Oe,ee,pe,D.state.lightProbeGridArray),Qe=Le.getProgramCacheKey(Ie);let nt=ue.programs;ue.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?ee.environment:null,ue.fog=ee.fog;const ht=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ue.envMap=Re.get(R.envMap||ue.environment,ht),ue.envMapRotation=ue.environment!==null&&R.envMap===null?ee.environmentRotation:R.envMapRotation,nt===void 0&&(R.addEventListener("dispose",ai),nt=new Map,ue.programs=nt);let pt=nt.get(Qe);if(pt!==void 0){if(ue.currentProgram===pt&&ue.lightsStateVersion===Ye)return Do(R,Ie),pt}else Ie.uniforms=Le.getUniforms(R),$!==null&&R.isNodeMaterial&&$.build(R,pe,Ie),R.onBeforeCompile(Ie,j),pt=Le.acquireProgram(Ie,Qe),nt.set(Qe,pt),ue.uniforms=Ie.uniforms;const et=ue.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(et.clippingPlanes=se.uniform),Do(R,Ie),ue.needsLights=Da(R),ue.lightsStateVersion=Ye,ue.needsLights&&(et.ambientLightColor.value=ce.state.ambient,et.lightProbe.value=ce.state.probe,et.directionalLights.value=ce.state.directional,et.directionalLightShadows.value=ce.state.directionalShadow,et.spotLights.value=ce.state.spot,et.spotLightShadows.value=ce.state.spotShadow,et.rectAreaLights.value=ce.state.rectArea,et.ltc_1.value=ce.state.rectAreaLTC1,et.ltc_2.value=ce.state.rectAreaLTC2,et.pointLights.value=ce.state.point,et.pointLightShadows.value=ce.state.pointShadow,et.hemisphereLights.value=ce.state.hemi,et.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,et.spotLightMatrix.value=ce.state.spotLightMatrix,et.spotLightMap.value=ce.state.spotLightMap,et.pointShadowMatrix.value=ce.state.pointShadowMatrix),ue.lightProbeGrid=D.state.lightProbeGridArray.length>0,ue.currentProgram=pt,ue.uniformsList=null,pt}function La(R){if(R.uniformsList===null){const ee=R.currentProgram.getUniforms();R.uniformsList=hc.seqWithValue(ee.seq,R.uniforms)}return R.uniformsList}function Do(R,ee){const pe=le.get(R);pe.outputColorSpace=ee.outputColorSpace,pe.batching=ee.batching,pe.batchingColor=ee.batchingColor,pe.instancing=ee.instancing,pe.instancingColor=ee.instancingColor,pe.instancingMorph=ee.instancingMorph,pe.skinning=ee.skinning,pe.morphTargets=ee.morphTargets,pe.morphNormals=ee.morphNormals,pe.morphColors=ee.morphColors,pe.morphTargetsCount=ee.morphTargetsCount,pe.numClippingPlanes=ee.numClippingPlanes,pe.numIntersection=ee.numClipIntersection,pe.vertexAlphas=ee.vertexAlphas,pe.vertexTangents=ee.vertexTangents,pe.toneMapping=ee.toneMapping}function Dc(R,ee){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;w.setFromMatrixPosition(ee.matrixWorld);for(let pe=0,ue=R.length;pe<ue;pe++){const ce=R[pe];if(ce.texture!==null&&ce.boundingBox.containsPoint(w))return ce}return null}function en(R,ee,pe,ue,ce){ee.isScene!==!0&&(ee=Ut),ge.resetTextureUnits();const Oe=ee.fog,Ye=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial?ee.environment:null,Ie=H===null?j.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:bt.workingColorSpace,Qe=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial&&!ue.envMap||ue.isMeshPhongMaterial&&!ue.envMap,nt=Re.get(ue.envMap||Ye,Qe),ht=ue.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pt=!!pe.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),et=!!pe.morphAttributes.position,Pt=!!pe.morphAttributes.normal,jt=!!pe.morphAttributes.color;let Qt=Ji;ue.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Qt=j.toneMapping);const Vt=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,un=Vt!==void 0?Vt.length:0,Xe=le.get(ue),wn=D.state.lights;if(ft===!0&&(dt===!0||R!==ie)){const Gt=R===ie&&ue.id===K;se.setState(ue,R,Gt)}let yt=!1;ue.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==wn.state.version||Xe.outputColorSpace!==Ie||ce.isBatchedMesh&&Xe.batching===!1||!ce.isBatchedMesh&&Xe.batching===!0||ce.isBatchedMesh&&Xe.batchingColor===!0&&ce.colorTexture===null||ce.isBatchedMesh&&Xe.batchingColor===!1&&ce.colorTexture!==null||ce.isInstancedMesh&&Xe.instancing===!1||!ce.isInstancedMesh&&Xe.instancing===!0||ce.isSkinnedMesh&&Xe.skinning===!1||!ce.isSkinnedMesh&&Xe.skinning===!0||ce.isInstancedMesh&&Xe.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&Xe.instancingColor===!1&&ce.instanceColor!==null||ce.isInstancedMesh&&Xe.instancingMorph===!0&&ce.morphTexture===null||ce.isInstancedMesh&&Xe.instancingMorph===!1&&ce.morphTexture!==null||Xe.envMap!==nt||ue.fog===!0&&Xe.fog!==Oe||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==se.numPlanes||Xe.numIntersection!==se.numIntersection)||Xe.vertexAlphas!==ht||Xe.vertexTangents!==pt||Xe.morphTargets!==et||Xe.morphNormals!==Pt||Xe.morphColors!==jt||Xe.toneMapping!==Qt||Xe.morphTargetsCount!==un||!!Xe.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,Xe.__version=ue.version);let $n=Xe.currentProgram;yt===!0&&($n=is(ue,ee,ce),$&&ue.isNodeMaterial&&$.onUpdateProgram(ue,$n,Xe));let Zn=!1,St=!1,nr=!1;const Ft=$n.getUniforms(),qt=Xe.uniforms;if(M.useProgram($n.program)&&(Zn=!0,St=!0,nr=!0),ue.id!==K&&(K=ue.id,St=!0),Xe.needsLights){const Gt=Dc(D.state.lightProbeGridArray,ce);Xe.lightProbeGrid!==Gt&&(Xe.lightProbeGrid=Gt,St=!0)}if(Zn||ie!==R){M.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ft.setValue(Z,"projectionMatrix",R.projectionMatrix),Ft.setValue(Z,"viewMatrix",R.matrixWorldInverse);const Ci=Ft.map.cameraPosition;Ci!==void 0&&Ci.setValue(Z,Bt.setFromMatrixPosition(R.matrixWorld)),U.logarithmicDepthBuffer&&Ft.setValue(Z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Ft.setValue(Z,"isOrthographic",R.isOrthographicCamera===!0),ie!==R&&(ie=R,St=!0,nr=!0)}if(Xe.needsLights&&(wn.state.directionalShadowMap.length>0&&Ft.setValue(Z,"directionalShadowMap",wn.state.directionalShadowMap,ge),wn.state.spotShadowMap.length>0&&Ft.setValue(Z,"spotShadowMap",wn.state.spotShadowMap,ge),wn.state.pointShadowMap.length>0&&Ft.setValue(Z,"pointShadowMap",wn.state.pointShadowMap,ge)),ce.isSkinnedMesh){Ft.setOptional(Z,ce,"bindMatrix"),Ft.setOptional(Z,ce,"bindMatrixInverse");const Gt=ce.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),Ft.setValue(Z,"boneTexture",Gt.boneTexture,ge))}ce.isBatchedMesh&&(Ft.setOptional(Z,ce,"batchingTexture"),Ft.setValue(Z,"batchingTexture",ce._matricesTexture,ge),Ft.setOptional(Z,ce,"batchingIdTexture"),Ft.setValue(Z,"batchingIdTexture",ce._indirectTexture,ge),Ft.setOptional(Z,ce,"batchingColorTexture"),ce._colorsTexture!==null&&Ft.setValue(Z,"batchingColorTexture",ce._colorsTexture,ge));const Ri=pe.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&F.update(ce,pe,$n),(St||Xe.receiveShadow!==ce.receiveShadow)&&(Xe.receiveShadow=ce.receiveShadow,Ft.setValue(Z,"receiveShadow",ce.receiveShadow)),(ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial)&&ue.envMap===null&&ee.environment!==null&&(qt.envMapIntensity.value=ee.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=sw()),St){if(Ft.setValue(Z,"toneMappingExposure",j.toneMappingExposure),Xe.needsLights&&Ic(qt,nr),Oe&&ue.fog===!0&&qe.refreshFogUniforms(qt,Oe),qe.refreshMaterialUniforms(qt,ue,he,ye,D.state.transmissionRenderTarget[R.id]),Xe.needsLights&&Xe.lightProbeGrid){const Gt=Xe.lightProbeGrid;qt.probesSH.value=Gt.texture,qt.probesMin.value.copy(Gt.boundingBox.min),qt.probesMax.value.copy(Gt.boundingBox.max),qt.probesResolution.value.copy(Gt.resolution)}hc.upload(Z,La(Xe),qt,ge)}if(ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(hc.upload(Z,La(Xe),qt,ge),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Ft.setValue(Z,"center",ce.center),Ft.setValue(Z,"modelViewMatrix",ce.modelViewMatrix),Ft.setValue(Z,"normalMatrix",ce.normalMatrix),Ft.setValue(Z,"modelMatrix",ce.matrixWorld),ue.uniformsGroups!==void 0){const Gt=ue.uniformsGroups;for(let Ci=0,zi=Gt.length;Ci<zi;Ci++){const rs=Gt[Ci];we.update(rs,$n),we.bind(rs,$n)}}return $n}function Ic(R,ee){R.ambientLightColor.needsUpdate=ee,R.lightProbe.needsUpdate=ee,R.directionalLights.needsUpdate=ee,R.directionalLightShadows.needsUpdate=ee,R.pointLights.needsUpdate=ee,R.pointLightShadows.needsUpdate=ee,R.spotLights.needsUpdate=ee,R.spotLightShadows.needsUpdate=ee,R.rectAreaLights.needsUpdate=ee,R.hemisphereLights.needsUpdate=ee}function Da(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(R,ee,pe){const ue=le.get(R);ue.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),le.get(R.texture).__webglTexture=ee,le.get(R.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:pe,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,ee){const pe=le.get(R);pe.__webglFramebuffer=ee,pe.__useDefaultFramebuffer=ee===void 0},this.setRenderTarget=function(R,ee=0,pe=0){H=R,z=ee,G=pe;let ue=null,ce=!1,Oe=!1;if(R){const Ie=le.get(R);if(Ie.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(Z.FRAMEBUFFER,Ie.__webglFramebuffer),O.copy(R.viewport),te.copy(R.scissor),Ne=R.scissorTest,M.viewport(O),M.scissor(te),M.setScissorTest(Ne),K=-1;return}else if(Ie.__webglFramebuffer===void 0)ge.setupRenderTarget(R);else if(Ie.__hasExternalTextures)ge.rebindTextures(R,le.get(R.texture).__webglTexture,le.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ht=R.depthTexture;if(Ie.__boundDepthTexture!==ht){if(ht!==null&&le.has(ht)&&(R.width!==ht.image.width||R.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(R)}}const Qe=R.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Oe=!0);const nt=le.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(nt[ee])?ue=nt[ee][pe]:ue=nt[ee],ce=!0):R.samples>0&&ge.useMultisampledRTT(R)===!1?ue=le.get(R).__webglMultisampledFramebuffer:Array.isArray(nt)?ue=nt[pe]:ue=nt,O.copy(R.viewport),te.copy(R.scissor),Ne=R.scissorTest}else O.copy(ze).multiplyScalar(he).floor(),te.copy(lt).multiplyScalar(he).floor(),Ne=$e;if(pe!==0&&(ue=fe),M.bindFramebuffer(Z.FRAMEBUFFER,ue)&&M.drawBuffers(R,ue),M.viewport(O),M.scissor(te),M.setScissorTest(Ne),ce){const Ie=le.get(R.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie.__webglTexture,pe)}else if(Oe){const Ie=ee;for(let Qe=0;Qe<R.textures.length;Qe++){const nt=le.get(R.textures[Qe]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+Qe,nt.__webglTexture,pe,Ie)}}else if(R!==null&&pe!==0){const Ie=le.get(R.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ie.__webglTexture,pe)}K=-1},this.readRenderTargetPixels=function(R,ee,pe,ue,ce,Oe,Ye,Ie=0){if(!(R&&R.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=le.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ye!==void 0&&(Qe=Qe[Ye]),Qe){M.bindFramebuffer(Z.FRAMEBUFFER,Qe);try{const nt=R.textures[Ie],ht=nt.format,pt=nt.type;if(R.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Ie),!U.textureFormatReadable(ht)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(pt)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=R.width-ue&&pe>=0&&pe<=R.height-ce&&Z.readPixels(ee,pe,ue,ce,Ee.convert(ht),Ee.convert(pt),Oe)}finally{const nt=H!==null?le.get(H).__webglFramebuffer:null;M.bindFramebuffer(Z.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(R,ee,pe,ue,ce,Oe,Ye,Ie=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=le.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ye!==void 0&&(Qe=Qe[Ye]),Qe)if(ee>=0&&ee<=R.width-ue&&pe>=0&&pe<=R.height-ce){M.bindFramebuffer(Z.FRAMEBUFFER,Qe);const nt=R.textures[Ie],ht=nt.format,pt=nt.type;if(R.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Ie),!U.textureFormatReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,et),Z.bufferData(Z.PIXEL_PACK_BUFFER,Oe.byteLength,Z.STREAM_READ),Z.readPixels(ee,pe,ue,ce,Ee.convert(ht),Ee.convert(pt),0);const Pt=H!==null?le.get(H).__webglFramebuffer:null;M.bindFramebuffer(Z.FRAMEBUFFER,Pt);const jt=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await M_(Z,jt,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,et),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Oe),Z.deleteBuffer(et),Z.deleteSync(jt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,ee=null,pe=0){const ue=Math.pow(2,-pe),ce=Math.floor(R.image.width*ue),Oe=Math.floor(R.image.height*ue),Ye=ee!==null?ee.x:0,Ie=ee!==null?ee.y:0;ge.setTexture2D(R,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,pe,0,0,Ye,Ie,ce,Oe),M.unbindTexture()},this.copyTextureToTexture=function(R,ee,pe=null,ue=null,ce=0,Oe=0){let Ye,Ie,Qe,nt,ht,pt,et,Pt,jt;const Qt=R.isCompressedTexture?R.mipmaps[Oe]:R.image;if(pe!==null)Ye=pe.max.x-pe.min.x,Ie=pe.max.y-pe.min.y,Qe=pe.isBox3?pe.max.z-pe.min.z:1,nt=pe.min.x,ht=pe.min.y,pt=pe.isBox3?pe.min.z:0;else{const qt=Math.pow(2,-ce);Ye=Math.floor(Qt.width*qt),Ie=Math.floor(Qt.height*qt),R.isDataArrayTexture?Qe=Qt.depth:R.isData3DTexture?Qe=Math.floor(Qt.depth*qt):Qe=1,nt=0,ht=0,pt=0}ue!==null?(et=ue.x,Pt=ue.y,jt=ue.z):(et=0,Pt=0,jt=0);const Vt=Ee.convert(ee.format),un=Ee.convert(ee.type);let Xe;ee.isData3DTexture?(ge.setTexture3D(ee,0),Xe=Z.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(ge.setTexture2DArray(ee,0),Xe=Z.TEXTURE_2D_ARRAY):(ge.setTexture2D(ee,0),Xe=Z.TEXTURE_2D),M.activeTexture(Z.TEXTURE0),M.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,ee.flipY),M.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),M.pixelStorei(Z.UNPACK_ALIGNMENT,ee.unpackAlignment);const wn=M.getParameter(Z.UNPACK_ROW_LENGTH),yt=M.getParameter(Z.UNPACK_IMAGE_HEIGHT),$n=M.getParameter(Z.UNPACK_SKIP_PIXELS),Zn=M.getParameter(Z.UNPACK_SKIP_ROWS),St=M.getParameter(Z.UNPACK_SKIP_IMAGES);M.pixelStorei(Z.UNPACK_ROW_LENGTH,Qt.width),M.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Qt.height),M.pixelStorei(Z.UNPACK_SKIP_PIXELS,nt),M.pixelStorei(Z.UNPACK_SKIP_ROWS,ht),M.pixelStorei(Z.UNPACK_SKIP_IMAGES,pt);const nr=R.isDataArrayTexture||R.isData3DTexture,Ft=ee.isDataArrayTexture||ee.isData3DTexture;if(R.isDepthTexture){const qt=le.get(R),Ri=le.get(ee),Gt=le.get(qt.__renderTarget),Ci=le.get(Ri.__renderTarget);M.bindFramebuffer(Z.READ_FRAMEBUFFER,Gt.__webglFramebuffer),M.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let zi=0;zi<Qe;zi++)nr&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,le.get(R).__webglTexture,ce,pt+zi),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,le.get(ee).__webglTexture,Oe,jt+zi)),Z.blitFramebuffer(nt,ht,Ye,Ie,et,Pt,Ye,Ie,Z.DEPTH_BUFFER_BIT,Z.NEAREST);M.bindFramebuffer(Z.READ_FRAMEBUFFER,null),M.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(ce!==0||R.isRenderTargetTexture||le.has(R)){const qt=le.get(R),Ri=le.get(ee);M.bindFramebuffer(Z.READ_FRAMEBUFFER,re),M.bindFramebuffer(Z.DRAW_FRAMEBUFFER,q);for(let Gt=0;Gt<Qe;Gt++)nr?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,qt.__webglTexture,ce,pt+Gt):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,qt.__webglTexture,ce),Ft?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ri.__webglTexture,Oe,jt+Gt):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ri.__webglTexture,Oe),ce!==0?Z.blitFramebuffer(nt,ht,Ye,Ie,et,Pt,Ye,Ie,Z.COLOR_BUFFER_BIT,Z.NEAREST):Ft?Z.copyTexSubImage3D(Xe,Oe,et,Pt,jt+Gt,nt,ht,Ye,Ie):Z.copyTexSubImage2D(Xe,Oe,et,Pt,nt,ht,Ye,Ie);M.bindFramebuffer(Z.READ_FRAMEBUFFER,null),M.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Ft?R.isDataTexture||R.isData3DTexture?Z.texSubImage3D(Xe,Oe,et,Pt,jt,Ye,Ie,Qe,Vt,un,Qt.data):ee.isCompressedArrayTexture?Z.compressedTexSubImage3D(Xe,Oe,et,Pt,jt,Ye,Ie,Qe,Vt,Qt.data):Z.texSubImage3D(Xe,Oe,et,Pt,jt,Ye,Ie,Qe,Vt,un,Qt):R.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Oe,et,Pt,Ye,Ie,Vt,un,Qt.data):R.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Oe,et,Pt,Qt.width,Qt.height,Vt,Qt.data):Z.texSubImage2D(Z.TEXTURE_2D,Oe,et,Pt,Ye,Ie,Vt,un,Qt);M.pixelStorei(Z.UNPACK_ROW_LENGTH,wn),M.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,yt),M.pixelStorei(Z.UNPACK_SKIP_PIXELS,$n),M.pixelStorei(Z.UNPACK_SKIP_ROWS,Zn),M.pixelStorei(Z.UNPACK_SKIP_IMAGES,St),Oe===0&&ee.generateMipmaps&&Z.generateMipmap(Xe),M.unbindTexture()},this.initRenderTarget=function(R){le.get(R).__webglFramebuffer===void 0&&ge.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ge.setTextureCube(R,0):R.isData3DTexture?ge.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ge.setTexture2DArray(R,0):ge.setTexture2D(R,0),M.unbindTexture()},this.resetState=function(){z=0,G=0,H=null,M.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}}const pc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ca{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ow=new Pc(-1,1,1,-1,0,1);class lw extends kn{constructor(){super(),this.setAttribute("position",new pn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pn([0,2,0,0,2,0],2))}}const cw=new lw;class vh{constructor(e){this._mesh=new st(cw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ow)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class uw extends Ca{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Fn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Po.clone(e.uniforms),this.material=new Fn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new vh(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class J0 extends Ca{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){const a=e.getContext(),l=e.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let u,f;this.inverse?(u=0,f=1):(u=1,f=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),l.buffers.stencil.setFunc(a.ALWAYS,u,4294967295),l.buffers.stencil.setClear(f),l.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(a.EQUAL,1,4294967295),l.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),l.buffers.stencil.setLocked(!0)}}class dw extends Ca{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class fw{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const r=e.getSize(new rt);this._width=r.width,this._height=r.height,t=new si(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new uw(pc),this.copyPass.material.blending=Qi,this.timer=new ly}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let r=!1;for(let a=0,l=this.passes.length;a<l;a++){const u=this.passes[a];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),u.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),u.needsSwap){if(r){const f=this.renderer.getContext(),d=this.renderer.state.buffers.stencil;d.setFunc(f.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),d.setFunc(f.EQUAL,1,4294967295)}this.swapBuffers()}J0!==void 0&&(u instanceof J0?r=!0:u instanceof dw&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new rt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const r=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(r,a),this.renderTarget2.setSize(r,a);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(r,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class hw extends Ca{constructor(e,t,r=null,a=null,l=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=a,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new xt}render(e,t,r){const a=e.autoClear;e.autoClear=!1;let l,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(l=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),e.autoClear=a}}const pw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ba extends Ca{constructor(e,t=1,r,a){super(),this.strength=t,this.radius=r,this.threshold=a,this.resolution=e!==void 0?new rt(e.x,e.y):new rt(256,256),this.clearColor=new xt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new si(l,u,{type:vi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let y=0;y<this.nMips;y++){const _=new si(l,u,{type:vi});_.texture.name="UnrealBloomPass.h"+y,_.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(_);const g=new si(l,u,{type:vi});g.texture.name="UnrealBloomPass.v"+y,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),l=Math.round(l/2),u=Math.round(u/2)}const f=pw;this.highPassUniforms=Po.clone(f.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Fn({uniforms:this.highPassUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader}),this.separableBlurMaterials=[];const d=[6,10,14,18,22];l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let y=0;y<this.nMips;y++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(d[y])),this.separableBlurMaterials[y].uniforms.invSize.value=new rt(1/l,1/u),l=Math.round(l/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new J(1,1,1),new J(1,1,1),new J(1,1,1),new J(1,1,1),new J(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Po.clone(pc.uniforms),this.blendMaterial=new Fn({uniforms:this.copyUniforms,vertexShader:pc.vertexShader,fragmentShader:pc.fragmentShader,premultipliedAlpha:!0,blending:gr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new xt,this._oldClearAlpha=1,this._basic=new qn,this._fsQuad=new vh(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let r=Math.round(e/2),a=Math.round(t/2);this.renderTargetBright.setSize(r,a);for(let l=0;l<this.nMips;l++)this.renderTargetsHorizontal[l].setSize(r,a),this.renderTargetsVertical[l].setSize(r,a),this.separableBlurMaterials[l].uniforms.invSize.value=new rt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2)}render(e,t,r,a,l){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const u=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),l&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let f=this.renderTargetBright;for(let d=0;d<this.nMips;d++)this._fsQuad.material=this.separableBlurMaterials[d],this.separableBlurMaterials[d].uniforms.colorTexture.value=f.texture,this.separableBlurMaterials[d].uniforms.direction.value=ba.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[d]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[d].uniforms.colorTexture.value=this.renderTargetsHorizontal[d].texture,this.separableBlurMaterials[d].uniforms.direction.value=ba.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[d]),e.clear(),this._fsQuad.render(e),f=this.renderTargetsVertical[d];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,l&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(r),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=u}_getSeparableBlurMaterial(e){const t=[],r=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(r*r))/r);return new Fn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new rt(.5,.5)},direction:{value:new rt(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Fn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}ba.BlurDirectionX=new rt(1,0);ba.BlurDirectionY=new rt(0,1);const oc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class mw extends Ca{constructor(){super(),this.isOutputPass=!0,this.uniforms=Po.clone(oc.uniforms),this.material=new Ig({name:oc.name,uniforms:this.uniforms,vertexShader:oc.vertexShader,fragmentShader:oc.fragmentShader}),this._fsQuad=new vh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},bt.getTransfer(this._outputColorSpace)===Ot&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Zf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Qf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Jf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===bc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===th?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===nh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===eh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const gw=.45,vw=.6,xw=typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints>0);function Xn(s,e,t=1,r=1){const a=document.createElement("canvas");a.width=a.height=s;const l=a.getContext("2d");e(l,s);const u=new Zi(a);return u.wrapS=u.wrapT=Rs,u.repeat.set(t,r),u.colorSpace=vn,u.anisotropy=8,u}function yr(s,e,t,r,a){for(let l=0;l<t;l++){s.fillStyle=r[Math.random()*r.length|0],s.globalAlpha=a*(.4+Math.random()*.6);const u=1+Math.random()*2.4;s.fillRect(Math.random()*e,Math.random()*e,u,u)}s.globalAlpha=1}function _w(s,e){const t=s.createLinearGradient(0,0,e,e);t.addColorStop(0,"#c2a878"),t.addColorStop(.5,"#b89e70"),t.addColorStop(1,"#c8ac7c"),s.fillStyle=t,s.fillRect(0,0,e,e),s.globalAlpha=.18;for(let r=0;r<35;r++){const a=["#8f7448","#dcc596","#a08960","#d4b88a","#96805a"];s.fillStyle=a[r%a.length],s.beginPath(),s.ellipse(Math.random()*e,Math.random()*e,16+Math.random()*56,10+Math.random()*40,Math.random()*3,0,7),s.fill()}s.globalAlpha=1,yr(s,e,4500,["#b09463","#d4bc8c","#a8895a","#cbb283","#9b7f50","#8a7550"],.5),s.globalAlpha=.22,s.strokeStyle="#7d6238",s.lineWidth=1.2;for(let r=0;r<10;r++){let a=Math.random()*e,l=Math.random()*e;s.beginPath(),s.moveTo(a,l);for(let u=0;u<6;u++)a+=(Math.random()-.5)*46,l+=(Math.random()-.5)*46,s.lineTo(a,l);s.stroke()}s.globalAlpha=.5;for(let r=0;r<46;r++)s.fillStyle=["#8d7a52","#a3906a","#6f5c3a"][Math.random()*3|0],s.beginPath(),s.ellipse(Math.random()*e,Math.random()*e,1.6+Math.random()*2.6,1.2+Math.random()*2,Math.random()*3,0,7),s.fill();s.globalAlpha=.5,s.strokeStyle="#7a7440",s.lineWidth=1;for(let r=0;r<40;r++){const a=Math.random()*e,l=Math.random()*e;for(let u=0;u<3;u++)s.beginPath(),s.moveTo(a+u*2-2,l),s.lineTo(a+u*2-2+(Math.random()-.5)*5,l-4-Math.random()*4),s.stroke()}s.globalAlpha=.1,s.strokeStyle="#6e5a38",s.lineWidth=9;for(const r of[0,26])s.beginPath(),s.moveTo(r,0),s.bezierCurveTo(r+40,e*.3,r-30,e*.7,r+20,e),s.stroke();s.globalAlpha=1}function eg(s,e,t){const r=s.createLinearGradient(0,0,0,e);r.addColorStop(0,"#c9b183"),r.addColorStop(.5,"#c4ac7e"),r.addColorStop(1,"#ceb385"),s.fillStyle=r,s.fillRect(0,0,e,e);const a=32,l=64;for(let u=0;u<e/a;u++){const f=u%2?l/2:0;for(let d=-1;d<e/l+1;d++){const p=d*l+f,y=u*a,_=.85+Math.random()*.25,g=Math.floor(201*_),S=Math.floor(177*_),T=Math.floor(131*_);s.fillStyle="rgba(0,0,0,0.15)",s.fillRect(p+3,y+3,l-4,a-4),s.fillStyle=`rgb(${g},${S},${T})`,s.fillRect(p+2,y+2,l-4,a-4),yr(s,e,28,["#b39a6c","#d8c39a","#a58c5e","#bfa575"],.35),s.globalAlpha=.3,s.fillStyle="#8f7a52",s.fillRect(p+2,y+a-5,l-4,3),s.globalAlpha=1}s.fillStyle="#a08a5f",s.fillRect(0,u*a,e,2)}s.globalAlpha=.3;for(let u=0;u<(t?16:8);u++){s.fillStyle="#6e5b3d",s.beginPath();const f=Math.random()*e,d=Math.random()*e;s.moveTo(f,d);for(let p=0;p<5;p++)s.lineTo(f+(Math.random()-.5)*26,d+(Math.random()-.5)*22);s.closePath(),s.fill()}s.globalAlpha=.14;for(let u=0;u<10;u++){const f=Math.random()*e;s.fillStyle="#6e5b3d",s.fillRect(f,0,4+Math.random()*9,30+Math.random()*90)}s.globalAlpha=1}function yw(s,e){s.fillStyle="#c4ad82",s.fillRect(0,0,e,e),yr(s,e,1900,["#b09a70","#d3bd92","#a28b60"],.4),s.fillStyle="#a68d60",s.fillRect(0,e-46,e,46),s.fillStyle="#8f7850",s.fillRect(0,e-46,e,4),s.globalAlpha=.28,s.strokeStyle="#77623e",s.lineWidth=1.4;for(let t=0;t<7;t++){let r=Math.random()*e,a=Math.random()*e*.7;s.beginPath(),s.moveTo(r,a);for(let l=0;l<7;l++)r+=(Math.random()-.5)*30,a+=Math.random()*22,s.lineTo(r,a);s.stroke()}s.globalAlpha=.5;for(let t=0;t<14;t++){const r=Math.random()*e,a=Math.random()*e;s.fillStyle="#5f4c30",s.beginPath(),s.arc(r,a,2,0,7),s.fill(),s.fillStyle="#3f3120",s.beginPath(),s.arc(r,a,1,0,7),s.fill()}s.globalAlpha=1}function Sw(s,e){s.fillStyle="#8a5c2e",s.fillRect(0,0,e,e);for(let t=0;t<e;t+=42){const r=.92+Math.random()*.16;s.fillStyle=`rgb(${138*r|0},${92*r|0},${46*r|0})`,s.fillRect(0,t,e,40),s.globalAlpha=.3,s.strokeStyle="#5f3d1c";for(let a=0;a<7;a++){const l=t+4+Math.random()*34;s.beginPath(),s.moveTo(0,l),s.bezierCurveTo(e*.3,l+3,e*.6,l-3,e,l+1),s.stroke()}s.globalAlpha=1,s.fillStyle="#4e3115",s.fillRect(0,t+39,e,3)}yr(s,e,900,["#7a4e24","#9c6c3a","#6b441f"],.4),s.strokeStyle="#3f2810",s.lineWidth=14,s.strokeRect(4,4,e-8,e-8),s.lineWidth=10,s.beginPath(),s.moveTo(0,0),s.lineTo(e,e),s.moveTo(e,0),s.lineTo(0,e),s.stroke(),s.save(),s.translate(e/2,e/2),s.rotate(-.06),s.font="900 46px Rubik, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillStyle="rgba(232,222,192,0.85)",s.fillText("AMMO",0,-10),s.font="700 22px Rubik, sans-serif",s.fillStyle="rgba(122,40,28,0.85)",s.fillText("7.62×39",0,30),s.restore(),s.fillStyle="#2c1c0a";for(const[t,r]of[[14,14],[e-14,14],[14,e-14],[e-14,e-14],[e/2,e/2]])s.beginPath(),s.arc(t,r,4,0,7),s.fill()}function tg(s,e,t,r){s.fillStyle=t,s.fillRect(0,0,e,e);for(let a=0;a<e;a+=16)s.fillStyle="rgba(0,0,0,0.32)",s.fillRect(a,0,6,e),s.fillStyle="rgba(255,255,255,0.12)",s.fillRect(a+8,0,3,e);yr(s,e,1400,["rgba(0,0,0,.4)","rgba(255,255,255,.12)"],.35),s.globalAlpha=.24;for(let a=0;a<14;a++){const l=Math.random()*e;s.fillStyle="#6e3418",s.fillRect(l,Math.random()*e*.4,3+Math.random()*7,30+Math.random()*90)}s.globalAlpha=1,s.font="900 44px Rubik, sans-serif",s.textAlign="center",s.fillStyle="rgba(240,235,220,0.92)",s.fillText(r,e/2,e/2+12),s.strokeStyle="rgba(240,235,220,0.5)",s.lineWidth=3,s.strokeRect(26,e/2-38,e-52,82),s.strokeStyle="rgba(0,0,0,0.55)",s.lineWidth=12,s.strokeRect(2,2,e-4,e-4)}function Mw(s,e){s.fillStyle="#7a3a2a",s.fillRect(0,0,e,e),yr(s,e,700,["rgba(0,0,0,.4)","rgba(255,255,255,.1)"],.4),s.fillStyle="rgba(0,0,0,0.5)",s.fillRect(0,10,e,7),s.fillRect(0,e-17,e,7),s.save(),s.fillStyle="#d8b23a",s.fillRect(0,e/2-16,e,32),s.beginPath(),s.rect(0,e/2-16,e,32),s.clip(),s.fillStyle="#171310";for(let t=-32;t<e+32;t+=32)s.beginPath(),s.moveTo(t,e/2+16),s.lineTo(t+16,e/2-16),s.lineTo(t+32,e/2-16),s.lineTo(t+16,e/2+16),s.fill();s.restore(),s.font="900 20px Rubik, sans-serif",s.textAlign="center",s.fillStyle="rgba(240,230,210,0.85)",s.fillText("FUEL",e/2,e/2-26)}function ng(s,e,t){s.fillStyle=t,s.fillRect(0,0,e,e);for(let r=0;r<e;r+=36){const a=.9+Math.random()*.18;s.fillStyle=`rgba(0,0,0,${.16-a*.06})`,s.fillRect(0,r,e,34),s.globalAlpha=.35,s.strokeStyle="rgba(40,24,8,0.7)";for(let l=0;l<5;l++){const u=r+3+Math.random()*28;s.beginPath(),s.moveTo(0,u),s.bezierCurveTo(e*.3,u+2,e*.7,u-2,e,u+1),s.stroke()}s.globalAlpha=1,s.fillStyle="rgba(30,18,6,0.75)",s.fillRect(0,r+33,e,3),s.fillStyle="#241505",s.beginPath(),s.arc(8,r+17,3,0,7),s.fill(),s.beginPath(),s.arc(e-8,r+17,3,0,7),s.fill()}yr(s,e,500,["rgba(40,24,8,.5)","rgba(255,220,170,.12)"],.4)}function Ew(s,e){const t=["#a8432e","#d8c9a4"];for(let r=0;r<e;r+=32)s.fillStyle=t[r/32%2],s.fillRect(r,0,32,e);s.globalAlpha=.16;for(let r=0;r<e;r+=4)s.fillStyle=r%8?"rgba(0,0,0,0.5)":"rgba(255,255,255,0.5)",s.fillRect(0,r,e,2);s.globalAlpha=.25,yr(s,e,700,["rgba(60,20,10,.6)","rgba(255,240,210,.3)"],.3),s.globalAlpha=1,s.fillStyle="rgba(60,25,12,0.85)",s.fillRect(0,e-10,e,10)}function ww(s,e){s.fillStyle="#1d1e20",s.fillRect(0,0,e,e);for(let t=0;t<e;t+=14)s.fillStyle="rgba(255,255,255,0.05)",s.fillRect(t,0,6,e),s.fillStyle="rgba(0,0,0,0.55)",s.fillRect(t+7,0,5,e);s.fillStyle="rgba(255,255,255,0.14)",s.fillRect(0,e/2-8,e,3),s.fillRect(0,e/2+6,e,2)}function Tw(s,e){s.fillStyle="#8a7350",s.fillRect(0,0,e,e);for(let t=0;t<e;t+=22){s.fillStyle=t%44?"#6f5a3c":"#9c855e",s.fillRect(0,t,e,20),s.fillStyle="rgba(40,28,14,0.6)",s.beginPath();for(let r=0;r<=e;r+=12){const a=t+18+Math.sin(r*.5)*3;r===0?s.moveTo(r,a):s.lineTo(r,a)}s.lineTo(e,t+22),s.lineTo(0,t+22),s.fill()}yr(s,e,500,["rgba(50,36,18,.4)","rgba(210,185,140,.2)"],.4)}function bw(s,e){s.clearRect(0,0,e,e);const t=e/2;s.strokeStyle="#3f5a28",s.lineWidth=5,s.beginPath(),s.moveTo(t,8),s.quadraticCurveTo(t,e*.6,t,e-10),s.stroke();for(let r=20;r<e-16;r+=12){const a=r/e,l=Math.sin(a*Math.PI)*(e*.46)+12;for(const u of[-1,1])s.fillStyle=`rgba(${62+(a*40|0)},${104-(a*30|0)},40,0.95)`,s.beginPath(),s.moveTo(t,r),s.quadraticCurveTo(t+u*l*.55,r-8,t+u*l,r+14),s.quadraticCurveTo(t+u*l*.5,r+10,t,r+6),s.closePath(),s.fill()}}function Aw(s,e){s.clearRect(0,0,e,e);for(let t=0;t<12;t++){const r=e*.2+Math.random()*e*.6,a=e*.35+Math.random()*e*.35,l=e*(.1+Math.random()*.14),u=s.createRadialGradient(r,a,1,r,a,l);u.addColorStop(0,"rgba(255,252,244,0.85)"),u.addColorStop(1,"rgba(255,252,244,0)"),s.fillStyle=u,s.beginPath(),s.arc(r,a,l,0,7),s.fill()}}function Rw(s){const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d"),r=t.createRadialGradient(64,64,4,64,64,64);return r.addColorStop(0,s),r.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=r,t.fillRect(0,0,128,128),new Zi(e)}function jg(s,e,t,r,a,l){const u=gw;let f=s.x+e;for(const p of a)p.top<=s.y+u||f+r>p.minX&&f-r<p.maxX&&s.z+r>p.minZ&&s.z-r<p.maxZ&&(e>0?f=Math.min(f,p.minX-r):e<0&&(f=Math.max(f,p.maxX+r)));s.x=f;let d=s.z+t;for(const p of a)p.top<=s.y+u||s.x+r>p.minX&&s.x-r<p.maxX&&d+r>p.minZ&&d-r<p.maxZ&&(t>0?d=Math.min(d,p.minZ-r):t<0&&(d=Math.max(d,p.maxZ+r)));s.z=d,l&&(s.x=Math.max(l.minX+r,Math.min(l.maxX-r,s.x)),s.z=Math.max(l.minZ+r,Math.min(l.maxZ-r,s.z)))}function ig(s,e,t,r,a){let l=0;for(const u of a)u.top<=t+vw&&u.top>l&&s+r>u.minX&&s-r<u.maxX&&e+r>u.minZ&&e-r<u.maxZ&&(l=u.top);return l}function Cw(s,e=!0){const t=new Un,r=[],a=[],l=1.5,u=Xn(256,_w,10,10),f=new vt({map:u,roughness:1}),d=Xn(256,(se,V)=>eg(se,V,!0),17,2),p=Xn(256,(se,V)=>eg(se,V,!1),6,2),y=Xn(256,yw,5,2),_=new vt({map:d,roughness:.95}),g=new vt({map:p,roughness:.95}),S=new vt({map:y,roughness:.92}),T=Xn(256,Sw),C=Xn(256,(se,V)=>tg(se,V,"#9c4f28","MIRAGE"),2,1),x=Xn(256,(se,V)=>tg(se,V,"#57613c","DUST"),2,1),v=Xn(128,Mw,2,1),L=new vt({map:T,roughness:.9}),N=new vt({map:C,roughness:.7,metalness:.3}),w=new vt({map:x,roughness:.7,metalness:.3}),P=new vt({map:v,roughness:.65,metalness:.35}),D=new vt({color:11772015,roughness:1}),k=Xn(128,(se,V)=>ng(se,V,"#8d6b3e"),2,2),E=new vt({map:k,roughness:.92}),I=Xn(128,(se,V)=>ng(se,V,"#7c5d34"),3,1),j=new vt({map:I,roughness:.95,side:mi}),W=Xn(128,Ew,4,1),$=new vt({map:W,roughness:.85,side:mi}),fe=new vt({map:Xn(64,ww,3,1),roughness:.9}),re=Xn(64,Tw,2,3),q=new vt({map:re,roughness:.95}),z=Xn(128,bw),G=new vt({map:z,transparent:!0,alphaTest:.45,side:mi,roughness:.9});new vt({color:2303531,roughness:.6,metalness:.5});const H=new vt({color:4869973,roughness:.7,metalness:.4}),K=(se,V,ve,F,Me,X,Ee,_e=!0,we=0)=>{const Be=new st(new Wt(se,V,ve),Ee);return Be.position.set(F,Me,X),Be.rotation.y=we,Be.castShadow=!0,Be.receiveShadow=!0,t.add(Be),r.push(Be),_e&&a.push({minX:F-se/2,maxX:F+se/2,minZ:X-ve/2,maxZ:X+ve/2,top:Me+V/2}),Be},ie=(se,V,ve,F,Me,X,Ee=!0)=>{const _e=new st(new Qr(se,se*1.06,V,16),X);return _e.position.set(ve,F,Me),_e.castShadow=!0,_e.receiveShadow=!0,t.add(_e),r.push(_e),Ee&&a.push({minX:ve-se,maxX:ve+se,minZ:Me-se,maxZ:Me+se,top:F+V/2}),_e},O=(se,V,ve,F,Me=0,X=1)=>{const Ee=new st(new Kn(V,V),new qn({map:se,transparent:!0,opacity:X,depthWrite:!1}));Ee.rotation.x=-Math.PI/2,Ee.rotation.z=Me,Ee.position.set(ve,.02,F),Ee.renderOrder=1,t.add(Ee)},te=new st(new Kn(64,64),f);te.rotation.x=-Math.PI/2,te.receiveShadow=!0,t.add(te),r.push(te),K(42,5,1,0,2.5,-20.5,_),K(42,5,1,0,2.5,20.5,_),K(1,5,42,-20.5,2.5,0,_),K(1,5,42,20.5,2.5,0,_);const Ne=new vt({color:6048819,roughness:.9}),Ve=new vt({color:1845043,roughness:.25,metalness:.6}),Ge=(se,V,ve)=>{const F=new Un,Me=new st(new Wt(1.3,1.6,.12),Ne),X=new st(new Wt(1,1.3,.14),Ve),Ee=new st(new Wt(1.5,.1,.3),Ne);Ee.position.y=-.85,F.add(Me,X,Ee),Me.castShadow=!0,F.position.set(se,2.6,V),F.rotation.y=ve,t.add(F)};Ge(-8,-19.95,0),Ge(5,-19.95,0),Ge(19.95,-6,Math.PI/2),Ge(-19.95,9,Math.PI/2);const ae=new st(new Wt(.9,.62,.42),new vt({color:12104354,roughness:.8}));ae.position.set(-2.5,3.1,-19.75),ae.castShadow=!0,t.add(ae),r.push(ae),K(10,3,.9,-6,1.5,-2,S),K(.9,3,9,7,1.5,4,S),K(7,3,.9,12,1.5,-8,g),K(.9,3,7,-13,1.5,7,g);const ye=(()=>{const se=document.createElement("canvas");se.width=128,se.height=64;const V=se.getContext("2d");V.clearRect(0,0,128,64),V.fillStyle="rgba(225,80,40,0.8)",V.beginPath(),V.moveTo(8,20),V.lineTo(78,20),V.lineTo(78,8),V.lineTo(120,32),V.lineTo(78,56),V.lineTo(78,44),V.lineTo(8,44),V.closePath(),V.fill();const ve=new Zi(se);return ve.colorSpace=vn,ve})(),he=(se,V,ve,F)=>{const Me=new st(new Kn(2.2,1.1),new qn({map:ye,transparent:!0,depthWrite:!1}));Me.position.set(se,V,ve),Me.rotation.y=F,t.add(Me)};he(-6,1.7,-1.53,Math.PI),he(12,1.7,-7.53,Math.PI),K(6.4,2.9,2.7,-12,1.45,-9,N),K(6.4,2.9,2.7,12,1.45,10,w);const Te=(se,V,ve=1)=>{K(1.4,1.4,1.4,se,.7,V,L),ve>1&&K(1.4,1.4,1.4,se,2.1,V,L)};Te(-3,13,2),Te(4.2,9),Te(-14,-4),Te(14,-13,2),Te(.5,-6),Te(9.5,2),Te(-8.5,2.5),Te(16.5,5),Te(-16.5,13),Te(6,-15),Te(-5,-13),Te(10.8,8.6);const Fe=(se,V)=>ie(.45,1.15,se,.575,V,P);Fe(-1.6,-11),Fe(-.6,-11.4),Fe(10.5,15),Fe(-10.5,15.5),Fe(2.5,1.5),K(2.6,.85,.8,-7,.42,9,D),K(2.6,.85,.8,9,.42,-2.5,D),K(.8,.85,2.6,-2,.42,5.5,D);const ze=16.3,lt=15.2,$e=2.3;for(const[se,V]of[[-1.5,-1.5],[1.5,-1.5],[-1.5,1.5],[1.5,1.5]])K(.24,$e,.24,ze+se,$e/2,lt+V,H);K(3.6,.3,3.6,ze,$e-.15,lt,E);for(let se=0;se<6;se++){const V=.38*(6-se);K(.5,V,1.3,ze-2.05-se*.5,V/2,lt,E)}K(.06,.95,1.3,ze-1.78,$e+.47,lt-1.12,H,!1),K(.06,.95,1.3,ze-1.78,$e+.47,lt+1.12,H,!1),K(3.6,.95,.06,ze,$e+.47,lt-1.78,H,!1),K(3.6,.95,.06,ze,$e+.47,lt+1.78,H,!1),K(.14,1.7,.14,ze-1.6,$e+.85,lt-1.6,H,!1),K(.14,1.7,.14,ze+1.6,$e+.85,lt-1.6,H,!1),K(.14,1.7,.14,ze-1.6,$e+.85,lt+1.6,H,!1),K(.14,1.7,.14,ze+1.6,$e+.85,lt+1.6,H,!1);const wt=K(4.1,.12,4.1,ze,$e+1.78,lt,$,!1);wt.rotation.z=.06,K(1.5,.55,.55,ze-1.45,$e+.27,lt-.6,D),K(1.5,.55,.55,ze-1.45,$e+.27,lt+.6,D);const ft=-13.2,dt=13.4;K(2.6,.95,.9,ft,.475,dt,E),K(.09,2.3,.09,ft-1.5,1.15,dt-.55,H),K(.09,2.3,.09,ft+1.5,1.15,dt-.55,H);const kt=K(3.6,.07,2.1,ft,2.25,dt+.25,$,!1);kt.rotation.x=.22,K(.5,.5,.5,ft-.7,1.2,dt,L),K(.42,.42,.42,ft+.55,1.16,dt+.1,L);const Bt=(se,V)=>{ie(.07,3.4,se,1.7,V,H),K(.7,.07,.07,se+.32,3.36,V,H,!1);const ve=new st(new Wt(.34,.12,.2),new vt({color:2764081,roughness:.6}));ve.position.set(se+.66,3.3,V),ve.castShadow=!0,t.add(ve),r.push(ve);const F=new st(new Co(.07,12),new qn({color:16773832}));if(F.rotation.x=Math.PI/2,F.position.set(se+.66,3.235,V),t.add(F),!xw){const Me=new Wf(16768926,7,9,2);Me.position.set(se+.66,3.1,V),t.add(Me)}};Bt(-4.5,8.5),Bt(8.5,-4.5);for(let se=0;se<3;se++)K(3,1.5,.09,-6+se*3.05,.75,-18.6,j),K(.12,1.7,.12,-7.5+se*3.05,.85,-18.6,H);K(.12,1.7,.12,1.6,.85,-18.6,H),K(1.7,.16,1.25,2,.08,12.5,E),K(1.7,.16,1.25,2,.24,12.5,E),K(.95,.95,.95,2.05,.8,12.5,L);const It=(se,V,ve)=>{const F=new st(new Qr(.52,.52,.34,18),fe);F.position.set(se,V,ve),F.castShadow=!0,F.receiveShadow=!0,t.add(F),r.push(F)};It(-8.2,.17,-8.2),It(-8.2,.51,-8.2),It(-8.2,.85,-8.2),a.push({minX:-8.7,maxX:-7.7,minZ:-8.7,maxZ:-7.7,top:1.02}),It(-9.3,.17,-7.6);const Ut=(se,V,ve)=>{const F=new st(new Qr(.14,.22,ve,10),q);F.position.set(se,ve/2,V),F.rotation.z=.06,F.castShadow=!0,t.add(F),r.push(F),a.push({minX:se-.24,maxX:se+.24,minZ:V-.24,maxZ:V+.24,top:.3});for(let Me=0;Me<7;Me++){const X=new st(new Kn(2.7,.85),G);X.position.set(se,ve-.05,V),X.rotation.y=Me/7*Math.PI*2,X.rotateX(-.55-Math.random()*.25),X.translateZ(1.2),X.castShadow=!0,t.add(X),r.push(X)}};Ut(-18.2,18.2,4.6),Ut(18.4,-17.8,5.2),Ut(-17.8,-16.5,4.2);const Tt=(se,V)=>{const ve=document.createElement("canvas");ve.width=ve.height=256;const F=ve.getContext("2d");F.clearRect(0,0,256,256),F.strokeStyle=V,F.globalAlpha=.75,F.lineWidth=14,F.beginPath(),F.arc(128,128,96,0,7),F.stroke(),F.font="900 150px Rubik, sans-serif",F.textAlign="center",F.textBaseline="middle",F.fillStyle=V,F.fillText(se,128,138);const Me=new Zi(ve);return Me.colorSpace=vn,Me};O(Tt("A","rgba(220,190,120,0.9)"),3.4,13.5,-13.5,.3,.55),O(Tt("B","rgba(220,190,120,0.9)"),3.4,-13.5,13.8,-.2,.55);const zt=(()=>{const se=document.createElement("canvas");se.width=64,se.height=256;const V=se.getContext("2d");V.clearRect(0,0,64,256),V.fillStyle="rgba(60,48,30,0.5)";for(const F of[10,40]){V.fillRect(F,0,9,256),V.fillStyle="rgba(130,110,75,0.5)";for(let Me=0;Me<256;Me+=14)V.fillRect(F+2,Me,5,5);V.fillStyle="rgba(60,48,30,0.5)"}const ve=new Zi(se);return ve.wrapS=ve.wrapT=Rs,ve.colorSpace=vn,ve})(),Z=(se,V,ve,F,Me)=>{const X=new st(new Kn(ve,F),new qn({map:zt,transparent:!0,opacity:.4,depthWrite:!1}));X.rotation.x=-Math.PI/2,X.rotation.z=Me,X.position.set(se,.015,V),X.renderOrder=1,t.add(X)};Z(-1.2,-8,1.1,16,.06),Z(4.5,6,1.1,10,-.4);const sn=(()=>{const se=document.createElement("canvas");se.width=se.height=128;const V=se.getContext("2d");V.clearRect(0,0,128,128);const ve=V.createRadialGradient(64,64,6,64,64,62);return ve.addColorStop(0,"rgba(80,62,38,0.5)"),ve.addColorStop(1,"rgba(80,62,38,0)"),V.fillStyle=ve,V.fillRect(0,0,128,128),new Zi(se)})();for(const[se,V,ve]of[[-12,-9,9],[12,10,9],[.5,-6,3.5],[-13.2,13.4,5],[16.3,15.2,6.5]]){const F=new st(new Kn(ve,ve),new qn({map:sn,transparent:!0,depthWrite:!1}));F.rotation.x=-Math.PI/2,F.position.set(se,.012,V),F.renderOrder=1,t.add(F)}const Et=new Wt(.09,.05,.09),U=new vt({color:10193507,roughness:1});for(let se=0;se<(e?170:70);se++){const V=new st(Et,U);V.position.set((Math.random()-.5)*56,.02,(Math.random()-.5)*56),V.rotation.y=Math.random()*Math.PI;const ve=.5+Math.random()*1.6;V.scale.set(ve,.4+Math.random(),ve),V.receiveShadow=!0,t.add(V)}const M=[[-8,4],[12,-6],[-14,8],[6,12],[-4,-10]];for(const[se,V]of M)Fe(se,V);Te(-10,6),Te(8,-12),Te(15,2),Te(-6,-8,2);const ne=new st(new Co(6,24),new qn({color:16774096,fog:!1}));ne.position.set(-38,34,-52),ne.lookAt(0,0,0),t.add(ne);const le=new Ec(new Ro({map:Rw("rgba(255,235,190,0.95)"),color:16770744,transparent:!0,opacity:.85,blending:gr,depthWrite:!1,fog:!1}));le.position.set(-38,34,-51),le.scale.set(32,32,1),t.add(le);const ge=new Un;ge.name="clouds";const Re=Xn(256,Aw),Ue=e?8:4;for(let se=0;se<Ue;se++){const V=new Ec(new Ro({map:Re,transparent:!0,opacity:.75,depthWrite:!1,fog:!1})),ve=se/Ue*Math.PI*2,F=42+Math.random()*26;V.position.set(Math.cos(ve)*F,21+Math.random()*10,Math.sin(ve)*F);const Me=16+Math.random()*14;V.scale.set(Me,Me*.55,1),ge.add(V)}t.add(ge);const xe=e?240:110,Se=new kn,Le=new Float32Array(xe*3);for(let se=0;se<xe;se++)Le[se*3]=(Math.random()-.5)*56,Le[se*3+1]=Math.random()*6,Le[se*3+2]=(Math.random()-.5)*56;Se.setAttribute("position",new Ai(Le,3));const qe=new K_(Se,new Pg({color:16773320,size:.05,transparent:!0,opacity:.5}));qe.name="dust",t.add(qe),t.scale.setScalar(l),s.add(t);const ke=[u,d,p,y,T,C,x,v,k];for(const se of ke)se.repeat.multiplyScalar(l),e||(se.anisotropy=2);const De={minX:-19.4*l,maxX:19.4*l,minZ:-19.4*l,maxZ:19.4*l,top:5*l};for(const se of a)se.minX*=l,se.maxX*=l,se.minZ*=l,se.maxZ*=l,se.top*=l;return{solids:r,colliders:a,bounds:De,botSpawns:[{x:-15,z:-15},{x:-6,z:-17},{x:6,z:-17},{x:15,z:-15},{x:-17,z:-3},{x:17,z:-3},{x:-10,z:-9},{x:10,z:-9},{x:-17,z:12},{x:17,z:-13}].map(se=>({x:se.x*l,z:se.z*l})),playerSpawn:{x:0,z:16*l}}}const rg={ru:{play:"В БОЙ",settings:"НАСТРОЙКИ",howto:"УПРАВЛЕНИЕ",briefing:"БРИФИНГ",controls:"УПРАВЛЕНИЕ",resume:"ПРОДОЛЖИТЬ",toMenu:"В МЕНЮ",restart:"ЕЩЁ РАЗ",paused:"ПАУЗА",pausedSub:"ОПЕРАЦИЯ ПРИОСТАНОВЛЕНА",matchOver:"МАТЧ ЗАВЕРШЁН",victory:"ПОБЕДА",defeat:"ПОРАЖЕНИЕ",eliminated:"УСТРАНЕНО",deaths:"СМЕРТЕЙ",record:"РЕКОРД",totalKills:"ВСЕГО ФРАГОВ",matches:"МАТЧЕЙ",bestStreak:"ЛУЧШАЯ СЕРИЯ",round:"РАУНД",roundWon:"РАУНД ВЫИГРАН",roundLost:"РАУНД ПРОИГРАН",youKilled:"ВЫ УБИТЫ",roundLostSub:"раунд потерян",enemies:"ОСТАЛОСЬ",roundSub:"противников",score:"счёт",bonus:"БОНУС",forWin:"за победу",forRound:"за раунд",you:"ВЫ",bots:"БОТЫ",reload:"ПЕРЕЗАРЯДКА",sound:"ЗВУК",sensitivity:"ЧУВСТВИТЕЛЬНОСТЬ",quality:"КАЧЕСТВО ГРАФИКИ",qAuto:"АВТО",qHigh:"ВЫСОКОЕ",qLow:"НИЗКОЕ",language:"ЯЗЫК",resetProgress:"СБРОСИТЬ ПРОГРЕСС",resetDone:"Прогресс сброшен",close:"ЗАКРЫТЬ",watchAd:"РЕКЛАМА",adReward:"Посмотреть рекламу — +2 гранаты в следующем матче",adNoSdk:"Реклама доступна на платформе Яндекс Игры",fullscreen:"ИГРАТЬ НА ВЕСЬ ЭКРАН",rotate:"ПОВЕРНИТЕ УСТРОЙСТВО",rotateSub:"Игра поддерживает горизонтальную ориентацию",clickToLock:"ДВИГАЙТЕ МЫШЬ — ОБЗОР · ЛКМ — ОГОНЬ",hintDesktop:"WASD — движение · ЛКМ — огонь · TAB — арсенал · 1–6 / колесо — смена · ПКМ — оптика · R — перезарядка · G — граната",mobileHint:`СЛЕВА — ДЖОЙСТИК · СПРАВА — ОБЗОР
КРАСНАЯ КНОПКА — ОГОНЬ`,guest:"Гость",loading:"ЗАГРУЗКА",movement:"передвижение",mouse:"обзор — движение мыши, курсор в бою скрыт",shoot:"огонь",reloadKey:"перезарядка",grenade:"граната",walk:"тихий шаг — точность выше",jump:"прыжок — запрыгивайте на ящики и вышку",arsenal:"арсенал: AK-47, UZI, P90, AWP, Deagle и нож",quickSwap:"быстрая смена оружия",scopeKey:"оптика AWP ×4",escKey:"пауза",touchJoy:"левая зона — джойстик движения",touchLook:"правая зона — обзор (веди пальцем)",touchFire:"красная кнопка — огонь (удерживай)",touchSlots:"слоты оружия сверху — тап для выбора",touchPause:"пауза (справа сверху)",touchSensor:"· СЕНСОР",brief1:"Карта — Dust II: лонг A, мид с дверями, туннели на B, вышка снайпера.",brief2:"Арсенал — TAB: AK-47, UZI, P90, AWP, Deagle и нож. Колесо мыши листает стволы.",brief3:"Хедшот — урон ×4. AWP убивает с тела, ПКМ — оптика.",brief4:"Матч до 3 побед, раунд — 1:55. Боты злеют с каждым раундом.",tagline:"БРАУЗЕРНЫЙ ШУТЕР · THREE.JS",desc:"Зачистите точку. Шесть стволов, гранаты и живые боты, которые стрейфят и дают очередь в ответ. Возьмите 3 раунда быстрее, чем вас застрелят.",startHint:"КЛИК — ЗАХВАТ МЫШИ · ESC — ПАУЗА",startHintTouch:"СЕНСОРНОЕ УПРАВЛЕНИЕ · ДЖОЙСТИК + ЗОНА ОБЗОРА",version:"v2.0 · YANDEX GAMES READY"},en:{play:"PLAY",settings:"SETTINGS",howto:"CONTROLS",briefing:"BRIEFING",controls:"CONTROLS",resume:"RESUME",toMenu:"MAIN MENU",restart:"PLAY AGAIN",paused:"PAUSED",pausedSub:"OPERATION SUSPENDED",matchOver:"MATCH OVER",victory:"VICTORY",defeat:"DEFEAT",eliminated:"ELIMINATED",deaths:"DEATHS",record:"BEST",totalKills:"TOTAL KILLS",matches:"MATCHES",bestStreak:"BEST STREAK",round:"ROUND",roundWon:"ROUND WON",roundLost:"ROUND LOST",youKilled:"YOU DIED",roundLostSub:"round lost",enemies:"LEFT",roundSub:"enemies",score:"score",bonus:"BONUS",forWin:"for win",forRound:"for round",you:"YOU",bots:"BOTS",reload:"RELOADING",sound:"SOUND",sensitivity:"SENSITIVITY",quality:"GRAPHICS QUALITY",qAuto:"AUTO",qHigh:"HIGH",qLow:"LOW",language:"LANGUAGE",resetProgress:"RESET PROGRESS",resetDone:"Progress reset",close:"CLOSE",watchAd:"AD",adReward:"Watch an ad — +2 grenades in the next match",adNoSdk:"Ads are available on Yandex Games",fullscreen:"GO FULLSCREEN",rotate:"ROTATE YOUR DEVICE",rotateSub:"The game supports landscape orientation",clickToLock:"MOVE MOUSE — LOOK · LMB — FIRE",hintDesktop:"WASD — move · LMB — fire · TAB — arsenal · 1–6 / wheel — swap · RMB — scope · R — reload · G — grenade",mobileHint:`LEFT — JOYSTICK · RIGHT — LOOK
RED BUTTON — FIRE`,guest:"Guest",loading:"LOADING",movement:"movement",mouse:"look — move the mouse, cursor is hidden",shoot:"fire",reloadKey:"reload",grenade:"grenade",walk:"walk — better accuracy",jump:"jump — climb crates and the tower",arsenal:"arsenal: AK-47, UZI, P90, AWP, Deagle and knife",quickSwap:"quick weapon swap",scopeKey:"AWP scope ×4",escKey:"pause",touchJoy:"left zone — movement joystick",touchLook:"right zone — look (drag finger)",touchFire:"red button — fire (hold)",touchSlots:"weapon slots on top — tap to select",touchPause:"pause (top right)",touchSensor:"· TOUCH",brief1:"Map — Dust II: long A, mid doors, B tunnels, sniper tower.",brief2:"Arsenal — TAB: AK-47, UZI, P90, AWP, Deagle and knife. Mouse wheel cycles weapons.",brief3:"Headshot — ×4 damage. AWP one-shots to the body, RMB — scope.",brief4:"First to 3 round wins, round is 1:55. Bots get angrier each round.",tagline:"BROWSER FPS · THREE.JS",desc:"Clear the point. Six guns, grenades and live bots that strafe and burst back. Take 3 rounds before they take you.",startHint:"CLICK — MOUSE CAPTURE · ESC — PAUSE",startHintTouch:"TOUCH CONTROLS · JOYSTICK + LOOK ZONE",version:"v2.0 · YANDEX GAMES READY"}};let xh="ru";function Pw(s){var t;return(typeof navigator<"u"&&((t=navigator.language)==null?void 0:t.toLowerCase())||"ru").startsWith("ru")?"ru":"en"}function sg(s){xh=s}function Yg(){return xh}function on(s){return rg[xh][s]??rg.ru[s]??s}const Nw={ru:["Феникс","Гюрза","Кобра","Шакал","Коршун","Таран","Волк","Гадюка","Беркут","Росомаха"],en:["Phoenix","Viper","Cobra","Jackal","Kite","Ram","Wolf","Adder","Eagle","Wolverine"]};let gt=null,qg=!1,lc=null;const Kd=()=>new Promise(s=>{if(window.YaGames)return s(window.YaGames);const e=Date.now(),t=window.setInterval(()=>{window.YaGames?(window.clearInterval(t),s(window.YaGames)):Date.now()-e>2500&&(window.clearInterval(t),s(null))},120)}),ag=s=>new Promise(e=>{const t=document.createElement("script");t.src=s,t.onload=()=>e(!0),t.onerror=()=>{t.remove(),e(!1)},document.head.appendChild(t)});function Lw(){return lc||(lc=(async()=>{var s,e;try{let t=await Kd();if(t||await ag("/sdk.js")&&(t=await Kd()),t||await ag("https://sdk.games.s3.yandex.net/sdk.js")&&(t=await Kd()),!t)return null;gt=await t.init(),window.__ysdk=gt,qg=!0;try{(e=(s=gt.features)==null?void 0:s.LoadingAPI)==null||e.ready()}catch{}}catch{gt=null}return gt})(),lc)}const $d=()=>qg&&gt!==null,og=()=>{var s,e;try{(e=(s=gt==null?void 0:gt.features)==null?void 0:s.GameplayAPI)==null||e.start()}catch{}},qf=()=>{var s,e;try{(e=(s=gt==null?void 0:gt.features)==null?void 0:s.GameplayAPI)==null||e.stop()}catch{}};function Dw(s){if(!(gt!=null&&gt.adv)){s==null||s();return}try{gt.adv.showFullscreenAdv({callbacks:{onClose:()=>s==null?void 0:s(),onError:()=>s==null?void 0:s()}})}catch{s==null||s()}}function Iw(){var e,t;return(((t=(e=gt==null?void 0:gt.environment)==null?void 0:e.i18n)==null?void 0:t.lang)||"").toLowerCase().startsWith("ru")?"ru":"en"}function Uw(s){var r,a;const e=()=>s(),t=()=>s();try{(r=gt==null?void 0:gt.on)==null||r.call(gt,"game_api_pause",e),(a=gt==null?void 0:gt.on)==null||a.call(gt,"game_api_resume",t)}catch{}return()=>{var l,u;try{(l=gt==null?void 0:gt.off)==null||l.call(gt,"game_api_pause",e),(u=gt==null?void 0:gt.off)==null||u.call(gt,"game_api_resume",t)}catch{}}}const Kg="cs3d_cloud_v1";async function lg(s){if(localStorage.setItem(Kg,JSON.stringify(s)),!!gt)try{await(await gt.getPlayer({scopes:!1})).setData(s,!0)}catch{}}async function Fw(){if(gt)try{const e=await(await gt.getPlayer({scopes:!1})).getData();if(e&&Object.keys(e).length)return e}catch{}try{const s=localStorage.getItem(Kg);if(s)return JSON.parse(s)}catch{}return null}function cg(s,e){const t=document.createElement("canvas");t.width=t.height=256;const r=t.getContext("2d"),a=r.createLinearGradient(0,0,256,256);a.addColorStop(0,s),a.addColorStop(1,e[0]),r.fillStyle=a,r.fillRect(0,0,256,256);for(let u=0;u<80;u++){r.fillStyle=e[Math.random()*e.length|0],r.globalAlpha=.4+Math.random()*.5,r.beginPath();const f=8+Math.random()*24;r.ellipse(Math.random()*256,Math.random()*256,f,f*.7,Math.random()*Math.PI,0,7),r.fill()}r.globalAlpha=.2;for(let u=0;u<500;u++)r.fillStyle=Math.random()>.5?"#000000":"#ffffff",r.fillRect(Math.random()*256,Math.random()*256,1+Math.random()*2,1+Math.random()*2);r.globalAlpha=.15;for(let u=0;u<15;u++){r.fillStyle="#000000";const f=Math.random()*256;r.fillRect(f,0,2+Math.random()*4,256)}r.globalAlpha=1;const l=new Zi(t);return l.wrapS=l.wrapT=Rs,l.colorSpace=vn,l}class Ow{constructor(e,t,r,a,l){this.group=new Un,this.hitboxes=[],this.hp=100,this.alive=!0,this.name="БОТ",this.muzzle=new Xt,this.legL=new Xt,this.legR=new Xt,this.armL=new Xt,this.armR=new Xt,this.headG=new Xt,this.mats=[],this.strafeDir=Math.random()<.5?1:-1,this.strafeT=1,this.burstLeft=0,this.nextShot=0,this.nextBurst=.8+Math.random()*1.2,this.blockedT=0,this.lastX=0,this.lastZ=0,this.flashT=0,this.deathT=0,this.phase=Math.random()*10,this.prefRange=9+Math.random()*9,this.ray=new Og,this.tmpA=new J,this.tmpB=new J,this.idleT=0,this.name=e,this.speed=a,this.hooks=l,this.group.position.set(t,0,r),this.lastX=t,this.lastZ=r;const u=cg("#6d6b4f",["#4c4a35","#7d7a58","#3a3a2a","#8a8462","#5a5840"]),f=cg("#4a4a3a",["#33332a","#5c5a44","#282820","#3f3f30"]),d=(ye,he,Te=.92)=>{const Fe=new vt({color:he?16777215:ye,map:he,roughness:Te,metalness:.05});return Fe.emissive=new xt(16722432),Fe.emissiveIntensity=0,this.mats.push(Fe),Fe},p=d(16777215,u,.88),y=d(16777215,f,.9),_=d(13209183,void 0,.75),g=d(3027494,void 0,.85),S=d(2237724,void 0,.8),T=d(2301979,void 0,.85),C=d(16777215,f,.7),x=d(2764068,void 0,.88),v=new vt({color:2829875,roughness:.5,metalness:.6}),L=new vt({color:8145444,roughness:.7,metalness:.05}),N=(ye,he,Te,Fe)=>new st(new Wt(ye,he,Te),Fe),w=(ye,he,Te,Fe,ze=12)=>new st(new Qr(ye,he,Te,ze),Fe),P=(ye,he,Te,Fe=!0)=>(ye.castShadow=Fe,ye.userData={bot:this,part:he},Te.add(ye),this.hitboxes.push(ye),ye),D=(ye,he)=>{const Te=N(.17,.46,.2,y);Te.position.y=-.23,P(Te,"legs",he);const Fe=N(.15,.42,.18,y);Fe.position.y=-.66,P(Fe,"legs",he);const ze=N(.17,.13,.12,S);ze.position.set(0,-.46,.08),P(ze,"legs",he,!1);const lt=N(.17,.14,.3,T);lt.position.set(0,-.9,.045),P(lt,"legs",he),he.position.set(ye,.96,0),this.group.add(he)};D(-.13,this.legL),D(.13,this.legR);const k=N(.52,.58,.28,p);k.position.y=1.26,P(k,"body",this.group);const E=N(.46,.36,.34,g);E.position.y=1.3,P(E,"body",this.group,!1);for(let ye=-1;ye<=1;ye++){const he=N(.1,.12,.06,S);he.position.set(ye*.13,1.24,.2),P(he,"body",this.group,!1)}const I=N(.08,.4,.36,S);I.position.set(-.14,1.34,0),P(I,"body",this.group,!1);const j=N(.08,.4,.36,S);j.position.set(.14,1.34,0),P(j,"body",this.group,!1);const W=N(.4,.42,.16,g);W.position.set(0,1.28,-.24),P(W,"body",this.group);const $=w(.07,.07,.38,S);$.rotation.z=Math.PI/2,$.position.set(0,1.52,-.26),P($,"body",this.group,!1),this.headG.position.y=1.62,this.group.add(this.headG);const fe=w(.06,.07,.08,_);fe.position.y=-.06,P(fe,"head",this.headG,!1);const re=N(.23,.26,.24,_);re.position.y=.06,P(re,"head",this.headG);const q=N(.2,.09,.05,S);q.position.set(0,-.02,.12),P(q,"head",this.headG,!1);const z=w(.17,.145,.16,C,14);z.position.y=.2,P(z,"head",this.headG);const G=w(.185,.185,.03,C,14);G.position.y=.125,P(G,"head",this.headG,!1);const H=N(.2,.06,.03,S);H.position.set(0,.1,.13),P(H,"head",this.headG,!1);const K=(ye,he,Te,Fe)=>{const ze=N(.13,.34,.14,p);ze.position.y=-.15,P(ze,"arms",he);const lt=N(.11,.3,.12,p);lt.position.set(0,-.32,Fe),lt.rotation.x=Te,P(lt,"arms",he);const $e=N(.11,.1,.13,x);$e.position.set(0,-.42,Fe+Math.sin(Te)*.16),$e.rotation.x=Te,P($e,"arms",he,!1),he.position.set(ye,1.5,0),this.group.add(he)};K(-.33,this.armL,-1.15,.22),K(.33,this.armR,-.75,.1);const ie=new Un;ie.position.set(.14,1.16,.3),this.group.add(ie);const O=N(.07,.1,.5,v);P(O,"body",ie,!1);const te=w(.018,.018,.34,v);te.rotation.x=Math.PI/2,te.position.set(0,.02,.4),P(te,"body",ie,!1);const Ne=N(.06,.07,.2,L);Ne.position.set(0,-.005,.22),P(Ne,"body",ie,!1);const Ve=N(.055,.18,.09,v);Ve.position.set(0,-.13,-.02),Ve.rotation.x=-.22,P(Ve,"body",ie,!1);const Ge=N(.06,.09,.2,L);Ge.position.set(0,-.01,-.34),P(Ge,"body",ie,!1),this.muzzle.position.set(.14,1.19,.68),this.group.add(this.muzzle);const ae=new qn({color:16761707,transparent:!0,opacity:0,blending:gr,depthWrite:!1});this.flash=new st(new Kn(.4,.4),ae),this.flash.position.copy(this.muzzle.position),this.flash.position.z+=.12,this.group.add(this.flash)}hasLOS(e){const t=this.tmpA.copy(this.group.position);t.y+=1.5;const r=this.tmpB.copy(e).sub(t),a=r.length();return a<.001?!0:(this.ray.set(t,r.normalize()),this.ray.far=a-.5,this.ray.intersectObjects(this.hooks.solids,!1).length===0)}fireAt(e,t){const r=new J;this.muzzle.getWorldPosition(r);const a=this.hooks.playerSpeedXZ(),l=Math.max(.06,Math.min(.4,.36-t*.009-a*.045)),u=Math.random()<l,f=e.clone();u||(f.x+=(Math.random()-.5)*1.6,f.y+=(Math.random()-.5)*1,f.z+=(Math.random()-.5)*1.6),this.hooks.tracer(r,f,16753229),this.flash.material.opacity=.95,this.flash.rotation.z=Math.random()*Math.PI,this.flashT=.045,this.hooks.sfx.enemyShoot(t),u&&this.hooks.damagePlayer(6+Math.random()*8,this.group.position)}hit(e,t){if(!this.alive)return!1;const r=e==="legs"?.75:e==="arms"?.85:1;this.hp-=t*r,this.flashT=Math.max(this.flashT,.02);for(const a of this.mats)a.emissiveIntensity=.9;return this.hp<=0?(this.alive=!1,this.deathT=0,!0):!1}update(e,t){const r=this.group.position;if(!this.alive){this.deathT+=e,this.group.rotation.x=-Math.min(1,this.deathT/.28)*(Math.PI/2),this.deathT>1.4&&(r.y-=e*1.1);for(const L of this.mats)L.emissiveIntensity=Math.max(0,L.emissiveIntensity-e*4);return this.deathT<2.6}const a=t.x-r.x,l=t.z-r.z,u=Math.hypot(a,l)||.001;this.group.lookAt(t.x,r.y,t.z);const f=this.hooks.playerEye(),d=this.hasLOS(f);this.strafeT-=e,this.strafeT<=0&&(this.strafeT=.7+Math.random()*1.5,Math.random()<.75&&(this.strafeDir*=-1));let p=0,y=0;!d||u>this.prefRange?(p=a/u,y=l/u):(p=-l/u*this.strafeDir,y=a/u*this.strafeDir,u<this.prefRange-3&&(p-=a/u*.7,y-=l/u*.7));const _=this.speed*(d&&u<=this.prefRange?.7:1),g=r.x,S=r.z;jg(r,p*_*e,y*_*e,.38,this.hooks.colliders,this.hooks.bounds);const T=Math.hypot(r.x-g,r.z-S);T<_*e*.25?(this.blockedT+=e,this.blockedT>.45&&(this.blockedT=0,this.strafeDir*=-1,this.prefRange=5.5+Math.random()*7.5)):this.blockedT=0,this.lastX,this.lastZ,this.lastX=r.x,this.lastZ=r.z;const C=T>.002;this.phase+=e*(2+_);const x=C?Math.sin(this.phase*4.2)*.62:0;this.legL.rotation.x=x,this.legR.rotation.x=-x,this.armL.rotation.x=C?Math.sin(this.phase*4.2)*.1:0,this.armR.rotation.x=C?-Math.sin(this.phase*4.2)*.08:0;const v=C?Math.abs(Math.sin(this.phase*4.2))*.05:Math.sin(this.time2(e))*.012;this.group.position.y=v,this.headG.rotation.y=Math.sin(this.phase*.7)*.06;for(const L of this.mats)L.emissiveIntensity=Math.max(0,L.emissiveIntensity-e*5);return this.flashT>0&&(this.flashT-=e,this.flash.material.opacity=Math.max(0,this.flashT/.045)),this.flash.lookAt(f),this.burstLeft>0?(this.nextShot-=e,this.nextShot<=0&&(d&&u<52&&this.fireAt(f,u),this.burstLeft--,this.nextShot=.13,this.burstLeft===0&&(this.nextBurst=Math.max(.4,1.1+Math.random()*1.2-u*.012)))):(this.nextBurst-=e,this.nextBurst<=0&&d&&u<52&&(this.burstLeft=2+(Math.random()*3|0),this.nextShot=.06)),!0}time2(e){return this.idleT+=e,this.idleT*2}dispose(e){e.remove(this.group),this.group.traverse(t=>{const r=t;r.geometry&&r.geometry.dispose()});for(const t of this.mats)t.dispose()}}class kw{constructor(){this.ctx=null,this.master=null,this.noise=null,this.volume=.8,this.muted=!1}setVolume(e){this.volume=Math.max(0,Math.min(1,e)),this.applyGain()}setMuted(e){this.muted=e,this.applyGain(),e&&this.ctx&&this.ctx.state==="running"&&this.ctx.suspend(),!e&&this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}applyGain(){this.master&&(this.master.gain.value=this.muted?0:this.volume*.5)}ensure(){if(this.ctx){this.ctx.state==="suspended"&&!this.muted&&this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e;const t=this.ctx.createDynamicsCompressor();t.threshold.value=-16,t.ratio.value=9,t.connect(this.ctx.destination),this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:this.volume*.5,this.master.connect(t);const r=this.ctx.sampleRate;this.noise=this.ctx.createBuffer(1,r,this.ctx.sampleRate);const a=this.noise.getChannelData(0);for(let l=0;l<r;l++)a[l]=Math.random()*2-1}burst(e){if(!this.ctx||!this.master||!this.noise)return;const t=this.ctx,r=t.currentTime+(e.delay||0),a=t.createBufferSource();a.buffer=this.noise,a.loop=!0;const l=t.createBiquadFilter();l.type=e.type||"lowpass",l.Q.value=.7,l.frequency.setValueAtTime(e.from,r),l.frequency.exponentialRampToValueAtTime(Math.max(40,e.to),r+e.dur);const u=t.createGain();u.gain.setValueAtTime(e.vol,r),u.gain.exponentialRampToValueAtTime(1e-4,r+e.dur),a.connect(l),l.connect(u),u.connect(this.master),a.start(r),a.stop(r+e.dur+.05)}tone(e,t,r,a="sine",l,u=0){if(!this.ctx||!this.master)return;const f=this.ctx,d=f.currentTime+u,p=f.createOscillator();p.type=a,p.frequency.setValueAtTime(e,d),l&&p.frequency.exponentialRampToValueAtTime(Math.max(20,l),d+t);const y=f.createGain();y.gain.setValueAtTime(r,d),y.gain.exponentialRampToValueAtTime(1e-4,d+t),p.connect(y),y.connect(this.master),p.start(d),p.stop(d+t+.05)}shoot(){this.burst({dur:.14,vol:.5,from:1700,to:170}),this.burst({dur:.05,vol:.22,from:3800,to:900,type:"highpass"}),this.tone(150,.13,.5,"triangle",42)}smg(){this.burst({dur:.08,vol:.34,from:2100,to:320}),this.burst({dur:.03,vol:.14,from:4200,to:1100,type:"highpass"}),this.tone(190,.07,.3,"triangle",60)}shotgun(){this.burst({dur:.22,vol:.7,from:900,to:90}),this.burst({dur:.08,vol:.3,from:2600,to:500,type:"highpass"}),this.tone(95,.2,.6,"triangle",34),this.burst({dur:.06,vol:.25,from:1400,to:300,delay:.42})}lmg(){this.burst({dur:.1,vol:.42,from:1500,to:200}),this.burst({dur:.04,vol:.18,from:3400,to:800,type:"highpass"}),this.tone(130,.1,.4,"triangle",46)}zeus(){this.tone(2400,.25,.3,"sawtooth",120),this.burst({dur:.3,vol:.35,from:5e3,to:300,type:"highpass"}),this.tone(90,.3,.4,"sine",30)}knife(){this.burst({dur:.12,vol:.2,from:3e3,to:700,type:"bandpass"}),this.tone(320,.08,.15,"triangle",700)}pistol(){this.burst({dur:.1,vol:.42,from:2600,to:320}),this.burst({dur:.04,vol:.18,from:4200,to:1400,type:"highpass"}),this.tone(220,.09,.34,"triangle",70)}sniper(){this.burst({dur:.42,vol:.8,from:1300,to:55}),this.burst({dur:.12,vol:.3,from:4200,to:700,type:"highpass"}),this.tone(88,.42,.62,"sine",26)}zoom(e){this.tone(e?620:1050,.05,.13,"square",e?1150:520)}buy(){this.tone(1320,.06,.17,"square"),this.tone(1760,.09,.15,"square",void 0,.055)}deny(){this.tone(230,.13,.2,"square",150)}switchW(){this.burst({dur:.05,vol:.12,from:1500,to:500}),this.tone(500,.04,.1,"square",800,.03)}enemyShoot(e){const t=Math.max(.06,Math.min(.3,2.4/Math.max(4,e)));this.burst({dur:.12,vol:t,from:1100,to:150}),this.tone(120,.1,t*.8,"triangle",40)}dry(){this.tone(1900,.045,.14,"square",1200)}hit(e){this.tone(e?2500:1650,.06,.2,"square",e?1900:1250)}kill(){this.tone(880,.09,.22,"square"),this.tone(1318,.14,.22,"square",void 0,.075)}hurt(){this.burst({dur:.16,vol:.35,from:520,to:90}),this.tone(95,.22,.4,"sine",42)}step(){this.burst({dur:.05,vol:.06,from:640,to:180})}jump(){this.burst({dur:.09,vol:.08,from:400,to:900,type:"bandpass"})}reload(){this.tone(950,.05,.18,"square",600),this.tone(700,.06,.2,"square",420,.42),this.burst({dur:.07,vol:.16,from:2200,to:500,delay:1.05}),this.tone(1150,.05,.2,"square",800,1.05)}pin(){this.tone(2300,.05,.18,"square",1600)}boom(){this.burst({dur:.65,vol:.85,from:900,to:55}),this.burst({dur:.22,vol:.35,from:3200,to:400,type:"highpass"}),this.tone(72,.55,.7,"sine",30)}beep(e=880,t=.1,r=.2){this.tone(e,t,r,"square")}win(){[523,659,784,1046].forEach((e,t)=>this.tone(e,.16,.22,"square",void 0,t*.11))}lose(){[392,330,262,196].forEach((e,t)=>this.tone(e,.22,.22,"triangle",void 0,t*.15))}}const Bw=()=>Nw[Yg()],ug=115,Zd=3,mc=typeof window<"u"&&(window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window);function zw(){try{const s=document.createElement("canvas"),e=s.getContext("webgl")||s.getContext("experimental-webgl");if(!e)return!0;const t=e.getExtension("WEBGL_debug_renderer_info");if(!t)return!1;const r=String(e.getParameter(t.UNMASKED_RENDERER_WEBGL)).toLowerCase(),a=String(e.getParameter(t.UNMASKED_VENDOR_WEBGL)).toLowerCase(),l=r+" "+a;return/swiftshader|llvmpipe|mesa/.test(l)?!0:/intel/.test(l)&&/hd graphics/.test(l)&&!/uhd|iris/.test(l)}catch{return!1}}const $g=zw(),hn=mc||$g,hi={ak:{name:"AK-47",short:"AK-47",cat:"Винтовка",dmg:27,cd:.096,mag:30,res:90,auto:!0,reload:2.5,recoil:.013,recoilYaw:.008,kick:.16,base:.0035,grow:.02,movePen:.006,recover:4.2,speed:1,reward:300,sound:"rifle",gun:{body:[.072,.092,.5],bodyMat:"metal",bodyColor:3816770,barrelLen:.3,barrelR:.016,barrelY:.022,handguard:[.066,.07,.24],handguardMat:"wood",stock:{l:.24,drop:.02,mat:"wood",color:9067052},mag:{w:.056,h:.2,d:.1,tilt:.24,z:.04},grip:!0,gasTube:!0,muzzle:{len:.07,r:.02}}},awp:{name:"AWP",short:"AWP",cat:"Снайперка",dmg:115,cd:1.35,mag:5,res:30,auto:!1,reload:3.7,recoil:.09,recoilYaw:.004,kick:.05,base:.0012,grow:.03,movePen:0,recover:1.1,speed:.88,reward:100,sound:"sniper",gun:{body:[.06,.088,.6],bodyMat:"poly",bodyColor:4871743,barrelLen:.5,barrelR:.014,barrelY:.015,stock:{l:.26,drop:.035,mat:"poly",color:4871743},scope:{len:.26,r:.03,zoom:4},mag:{w:.05,h:.11,d:.08,tilt:.08,z:.02},grip:!0,bipod:!0,boltHandle:!0,muzzle:{len:.1,r:.024}}},deagle:{name:"Desert Eagle",short:"DEAGLE",cat:"Пистолет",dmg:53,cd:.24,mag:7,res:35,auto:!1,reload:2.2,recoil:.038,recoilYaw:.006,kick:.1,base:.004,grow:.05,movePen:.035,recover:2.4,speed:1.02,reward:300,sound:"pistol",gun:{body:[.046,.05,.26],bodyMat:"metal",bodyColor:10199464,barrelLen:.05,barrelR:.013,barrelY:.02,pistol:!0,slideColor:13225684,serrations:!0,mag:{w:.04,h:.02,d:.06,tilt:-.22,z:.1}}},uzi:{name:"UZI",short:"UZI",cat:"ПП",dmg:13,cd:.072,mag:32,res:128,auto:!0,reload:2.6,recoil:.01,recoilYaw:.009,kick:.075,base:.0055,grow:.02,movePen:.015,recover:3.6,speed:1.05,reward:600,sound:"smg",gun:{body:[.06,.082,.36],bodyMat:"metal",bodyColor:3356219,barrelLen:.13,barrelR:.011,barrelY:.024,mag:{w:.046,h:.17,d:.07,tilt:0,z:.02},stock:{l:.2,drop:-.028,mat:"poly",color:2303531},boltHandle:!0,muzzle:{len:.06,r:.017}}},p90:{name:"P90",short:"P90",cat:"ПП",dmg:14,cd:.066,mag:50,res:100,auto:!0,reload:3.3,recoil:.008,recoilYaw:.007,kick:.07,base:.005,grow:.016,movePen:.013,recover:3.8,speed:1.04,reward:600,sound:"smg",gun:{body:[.068,.11,.5],bodyMat:"poly",bodyColor:6121540,barrelLen:.14,barrelR:.012,barrelY:.005,bullpup:!0,topMag:!0,muzzle:{len:.05,r:.02}}},knife:{name:"M48 Tomahawk",short:"НОЖ",cat:"Ближний бой",dmg:60,cd:.45,mag:0,res:0,auto:!0,reload:0,recoil:0,recoilYaw:0,kick:.05,base:0,grow:0,movePen:0,recover:5,speed:1.06,reward:1500,sound:"knife",melee:!0,gun:{body:[.026,.03,.13],bodyMat:"poly",bodyColor:3356734,barrelLen:0,barrelR:0,blade:{len:.17,w:.036}}}},jn=["ak","uzi","p90","awp","deagle","knife"];class Vw{constructor(e,t){this.state="attract",this.scene=new k_,this.clock=new uy,this.raf=0,this.time=0,this.attractT=0,this.sfx=new kw,this.pos=new J,this.vel=new J,this.yaw=0,this.pitch=0,this.recoilPitch=0,this.recoilYaw=0,this.kick=0,this.spread=0,this.shake=0,this.bobT=0,this.stepAcc=0,this.onGround=!0,this.locked=!1,this.hp=100,this.armor=0,this.nades=1,this.reloading=!1,this.reloadT=0,this.reloadTotal=1.9,this.reloadAnim=0,this.cooldown=0,this.firing=!1,this.grenadeBonus=0,this.joyX=0,this.joyY=0,this.lookDX=0,this.lookDY=0,this.touchJump=!1,this.equipped="deagle",this.ammo={},this.scoped=!1,this.switchAnim=1,this.lastCX=0,this.lastCY=0,this.mouseInit=!1,this.keys={},this.deathT=0,this.sens=1,this.qualitySetting="auto",this.round=0,this.scoreA=0,this.scoreB=0,this.kills=0,this.deaths=0,this.roundT=ug,this.bots=[],this.nadesFly=[],this.particles=[],this.tracers=[],this.shells=[],this.decals=[],this.bloomPass=null,this.perfFrames=0,this.perfAcc=0,this.degraded=!1,this.weapon=new Un,this.weaponModels={},this.weaponMuzzles={},this.wheelOpen=!1,this.wheelIndex=0,this.flashT=0,this.boomT=0,this.ray=new Og,this.tmpV=new J,this.tmpD=new J,this.roundTimeout=0,this.onKeyDown=d=>{if(d.code==="Space"&&d.preventDefault(),this.keys[d.code]=!0,this.state!=="playing")return;if(d.code==="Escape"&&!this.locked){this.pause();return}if(d.code==="Tab"){d.preventDefault(),this.openWheel();return}if(this.wheelOpen)return;d.code==="KeyR"&&this.startReload(),d.code==="KeyG"&&this.throwNade();const p=["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9"].indexOf(d.code);p>=0&&p<jn.length&&this.switchTo(jn[p])},this.onKeyUp=d=>{this.keys[d.code]=!1,d.code==="Tab"&&(d.preventDefault(),this.closeWheel(!0))},this.onWheel=d=>{this.state!=="playing"||this.wheelOpen||this.cycleWeapon(d.deltaY>0?1:-1)},this.onMouseMove=d=>{if(this.wheelOpen){this.wheelPick(d.clientX,d.clientY);return}if(this.state==="playing")if(this.locked){const p=.0032*this.sens;this.yaw-=d.movementX*p,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch-d.movementY*p))}else{if(!this.mouseInit){this.lastCX=d.clientX,this.lastCY=d.clientY,this.mouseInit=!0;return}const p=d.movementX??d.clientX-this.lastCX,y=d.movementY??d.clientY-this.lastCY;this.lastCX=d.clientX,this.lastCY=d.clientY;const _=.0045*this.sens;this.yaw-=p*_,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch-y*_))}},this.onMouseDown=d=>{this.sfx.ensure(),this.state==="playing"&&(d.button===0?(this.firing=!0,this.tryShoot(),this.locked||this.requestLock()):d.button===2&&(this.equipped==="awp"?this.toggleScope():(this.firing=!0,this.tryShoot())))},this.onMouseUp=d=>{(d.button===0||d.button===2)&&(this.firing=!1)},this.onLockChange=()=>{const d=document.pointerLockElement===this.renderer.domElement;this.locked&&!d&&this.state==="playing"&&!this.wheelOpen&&this.pause(),this.mouseInit=!1,this.locked=d,this.wheelOpen||this.hooks.lockedChange(d)},this.onResize=()=>{const d=this.container.clientWidth,p=this.container.clientHeight;this.camera.aspect=d/p,this.camera.updateProjectionMatrix(),this.renderer.setSize(d,p),this.composer.setSize(d,p)},this.onVisibility=()=>{document.hidden?(this.sfx.setMuted(!0),this.state==="playing"&&this.pause()):this.sfx.setMuted(!1)},this.onContext=d=>d.preventDefault(),this.loop=()=>{this.raf=requestAnimationFrame(this.loop);const d=Math.min(.05,this.clock.getDelta());this.time+=d,!this.degraded&&this.state!=="attract"&&this.perfFrames<180&&(this.perfAcc+=d,this.perfFrames++,this.perfFrames===180&&this.perfAcc/180>.04&&(this.degraded=!0,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,hn?.66:1.1)),this.composer.setSize(this.container.clientWidth,this.container.clientHeight),this.bloomPass&&(this.bloomPass.enabled=!1)));const p=this.scene.getObjectByName("dust");p&&(p.rotation.y+=d*.012);const y=this.scene.getObjectByName("clouds");if(y&&(y.rotation.y+=d*.007),this.state==="attract"){this.attractT+=d*.09;const S=17;this.camera.position.set(Math.sin(this.attractT)*S,7.5+Math.sin(this.attractT*.6)*2,Math.cos(this.attractT)*S),this.camera.lookAt(0,1.2,0),this.weapon.visible=!1}else this.weapon.visible=!0,this.state==="playing"?this.updatePlaying(d):this.state==="dying"&&this.updateDying(d),this.updateFx(d),this.state!=="playing"&&this.updateNades(d);const _=this.renderer.domElement,g=this.state==="playing"||this.state==="dying"?"none":"";_.dataset.cur!==g&&(_.dataset.cur=g,_.style.cursor=g),this.composer.render()},this.container=e,this.hooks=t,this.renderer=new aw({antialias:!hn,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,hn?1:1.75)),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=hn?wo:pg,e.appendChild(this.renderer.domElement),this.renderer.toneMapping=bc,this.renderer.toneMappingExposure=1.06,this.scene.background=this.makeSkyTexture(),this.scene.fog=new hh(13156264,hn?34:48,hn?105:155),this.camera=new pi(75,e.clientWidth/e.clientHeight,.05,320),this.camera.rotation.order="YXZ",this.scene.add(this.camera);const r=new ny(13624053,10193507,1.1);this.scene.add(r);const a=new T0(16772300,2.6);if(a.position.set(-39,57,-27),a.castShadow=!0,a.shadow.mapSize.set(hn?1024:2048,hn?1024:2048),a.shadow.camera.left=-52,a.shadow.camera.right=52,a.shadow.camera.top=52,a.shadow.camera.bottom=-52,a.shadow.camera.far=200,a.shadow.bias=-6e-4,this.scene.add(a),this.scene.add(new sy(8952234,.4)),!hn){const d=new T0(14268810,.5);d.position.set(30,9,36),this.scene.add(d)}this.map=Cw(this.scene,!hn),this.gunLight=new Wf(16761707,0,9,2),this.gunLight.position.set(.3,-.15,-.7),this.camera.add(this.gunLight),this.boomLight=new Wf(16748608,0,22,2),this.scene.add(this.boomLight),this.boomFlash=new Ec(new Ro({map:this.makeGlowTex(),color:16763024,transparent:!0,opacity:0,blending:gr,depthWrite:!1})),this.boomFlash.scale.set(9,9,1),this.scene.add(this.boomFlash),this.buildWeapons(),this.flash=this.buildFlash(.55),this.weaponMuzzles[this.equipped].add(this.flash);for(let d=0;d<(hn?10:24);d++){const p=new st(new Wt(1,1,1),new qn({color:16765562,transparent:!0,opacity:0,blending:gr,depthWrite:!1}));p.visible=!1,this.scene.add(p),this.tracers.push({m:p,life:0})}const l=new Wt(.016,.05,.016),u=new vt({color:14263361,metalness:.85,roughness:.35});for(let d=0;d<(hn?8:22);d++){const p=new st(l,u);p.visible=!1,this.scene.add(p),this.shells.push({m:p,v:new J,rv:new J,life:0})}const f=new Kn(.1,.1);for(let d=0;d<(hn?14:40);d++){const p=new st(f,new qn({color:1314826,transparent:!0,opacity:0,depthWrite:!1}));p.visible=!1,this.scene.add(p),this.decals.push({m:p,life:0})}this.composer=new fw(this.renderer),this.composer.addPass(new hw(this.scene,this.camera)),this.bloomPass=new ba(new rt(e.clientWidth,e.clientHeight),.6,.4,.85),this.bloomPass.enabled=!hn,this.composer.addPass(this.bloomPass),this.composer.addPass(new mw),this.pos.set(this.map.playerSpawn.x,0,this.map.playerSpawn.z),this.bindEvents(),this.loop()}addGrenadeBonus(e){this.grenadeBonus+=e}makeSkyTexture(){const e=document.createElement("canvas");e.width=16,e.height=512;const t=e.getContext("2d"),r=t.createLinearGradient(0,0,0,512);r.addColorStop(0,"#4f7db5"),r.addColorStop(.42,"#7fa8cc"),r.addColorStop(.66,"#b9c4c4"),r.addColorStop(.82,"#d8c9a8"),r.addColorStop(1,"#e5d3ae"),t.fillStyle=r,t.fillRect(0,0,16,512);const a=new Zi(e);return a.colorSpace=vn,a.magFilter=Rn,a}texCanvas(e,t){const r=document.createElement("canvas");r.width=r.height=e;const a=r.getContext("2d");t(a,e);const l=new Zi(r);return l.wrapS=l.wrapT=Rs,l.colorSpace=vn,l.anisotropy=4,l}texMetal(e){return this.texCanvas(128,(t,r)=>{t.fillStyle=e,t.fillRect(0,0,r,r);for(let a=0;a<300;a++)t.fillStyle=Math.random()>.5?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.10)",t.fillRect(Math.random()*r,Math.random()*r,1+Math.random()*2.2,1);t.globalAlpha=.09,t.strokeStyle="#ffffff";for(let a=0;a<24;a++){const l=Math.random()*r;t.beginPath(),t.moveTo(0,l),t.lineTo(r,l+(Math.random()-.5)*5),t.stroke()}t.globalAlpha=1})}texWood(){return this.texCanvas(128,(e,t)=>{e.fillStyle="#8a5a2c",e.fillRect(0,0,t,t);for(let r=0;r<26;r++){e.strokeStyle=`rgba(58,32,10,${.14+Math.random()*.26})`,e.lineWidth=1+Math.random()*2.2;const a=Math.random()*t;e.beginPath(),e.moveTo(a,0),e.bezierCurveTo(a+9,t*.3,a-9,t*.62,a+(Math.random()-.5)*12,t),e.stroke()}for(let r=0;r<220;r++)e.fillStyle="rgba(38,20,6,0.14)",e.fillRect(Math.random()*t,Math.random()*t,1.6,1.6);e.globalAlpha=.07,e.fillStyle="#eec27f";for(let r=0;r<6;r++)e.beginPath(),e.ellipse(Math.random()*t,Math.random()*t,16+Math.random()*22,5+Math.random()*4,0,0,7),e.fill();e.globalAlpha=1})}texPolymer(e){return this.texCanvas(128,(t,r)=>{t.fillStyle=e,t.fillRect(0,0,r,r);for(let a=0;a<460;a++)t.fillStyle=Math.random()>.5?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.12)",t.fillRect(Math.random()*r,Math.random()*r,1.7,1.7);t.globalAlpha=.08,t.strokeStyle="#000000";for(let a=0;a<11;a++){const l=Math.random()*r,u=Math.random()*r;t.beginPath(),t.moveTo(l,u),t.lineTo(l+(Math.random()-.5)*34,u+(Math.random()-.5)*34),t.stroke()}t.globalAlpha=1})}buildGunModel(e){var $,fe,re,q;const t=new Un,r=new Xt,a=z=>`#${z.toString(16).padStart(6,"0")}`,l=this.texMetal(a(e.bodyMat==="metal"?e.bodyColor:2829875)),u=this.texWood(),f=this.texPolymer(a(e.bodyColor)),d=new vt({map:l,bumpMap:l,bumpScale:.3,roughness:.42,metalness:.78}),p=new vt({map:this.texMetal("#17191c"),bumpMap:this.texMetal("#17191c"),bumpScale:.25,roughness:.38,metalness:.85}),y=new vt({map:u,bumpMap:u,bumpScale:.5,roughness:.68,metalness:.05}),_=new vt({map:f,bumpMap:f,bumpScale:.35,roughness:.82,metalness:.08}),g=this.texPolymer("#6e6848"),S=new vt({map:g,bumpMap:g,bumpScale:.55,roughness:.9,metalness:.03}),T=e.bodyMat==="wood"?y:e.bodyMat==="poly"?_:d,C=new vt({color:14278371,roughness:.22,metalness:.95}),x=(z,G,H,K,ie,O,te,Ne=0,Ve=0,Ge=0)=>{const ae=new st(new Wt(z,G,H),K);return ae.position.set(ie,O,te),ae.rotation.set(Ne,Ve,Ge),t.add(ae),ae},v=(z,G,H,K,ie,O,te,Ne=14)=>{const Ve=new st(new Qr(z,G,H,Ne),K);return Ve.rotation.x=Math.PI/2,Ve.position.set(ie,O,te),t.add(Ve),Ve},[L,N,w]=e.body,P=e.barrelY??.015,D=(z,G,H,K=0,ie=!1)=>{const O=new Un,te=new st(new Wt(.082,.075,.085),S);O.add(te);const Ne=new st(new Wt(.084,ie?.05:.045,.06),S);Ne.position.set(0,ie?.055:-.012,-.06),Ne.rotation.x=ie?.5:-.4,O.add(Ne);const Ve=new st(new Wt(.084,.03,.05),S);Ve.position.set(0,.035,-.02),O.add(Ve);const Ge=new st(new Wt(.026,.028,.06),S);Ge.position.set(.048,.008,-.03),O.add(Ge);const ae=new st(new Wt(.07,.06,.1),S);ae.position.set(.01,-.005,.09),O.add(ae);const ye=new st(new Wt(.075,.062,.26),S);return ye.position.set(.05,-.02,.26),ye.rotation.set(.18,-.15,0),O.add(ye),O.position.set(z,G,H),O.rotation.x=K,t.add(O),O};if(e.melee&&e.blade){const z=e.blade;x(.03,.034,.13,_,0,.005,.075),x(.032,.012,.03,p,0,-.014,.05),x(.032,.012,.03,p,0,-.014,.085),x(.034,.016,.018,p,0,.005,.148),x(.052,.014,.02,d,0,.012,0),x(z.w,.008,z.len,C,0,.02,-z.len/2-.01),x(z.w*.92,.003,z.len,new vt({color:16054266,roughness:.12,metalness:1}),0,.0155,-z.len/2-.01),x(z.w*.3,.004,z.len*.9,p,0,.026,-z.len/2-.015);const G=x(z.w*.62,.007,z.w*.62,C,0,.02,-z.len-.01-z.w*.2,0,Math.PI/4);return G.scale.z=.55,D(0,0,.07,-1.15),r.position.set(0,.02,-z.len-.05),t.add(r),{group:t,muzzle:r}}if(e.pistol){const z=new vt({map:this.texMetal(a(e.slideColor??13225684)),roughness:.3,metalness:.85});if(x(L,N*.9,w,d,0,-.006,0),x(L*1.04,N*.62,w*1.02,z,0,N*.5,0),e.serrations)for(let G=0;G<6;G++)x(.002,N*.5,.008,p,L*.53,N*.5,w*.28+G*.012),x(.002,N*.5,.008,p,-L*.53,N*.5,w*.28+G*.012);return v(e.barrelR*.9,e.barrelR*.9,.06,p,0,N*.5,-w/2-.02),x(.012,.03,.012,z,0,N*.86,-w*.4),x(L*.8,.02,.016,z,0,N*.84,w*.34),x(L*.9,.05,.05,p,0,N*.16,w*.44),x(L*.94,N*1.5,.075,d,0,-N*1.05,w*.26,-.2),x(L*.8,.05,.02,p,0,-N*1.62,w*.2),x(.018,.04,.05,p,0,-N*.55,w*.05),x(.008,.03,.014,p,0,-N*.36,.02),x(L*.5,.028,.014,p,0,N*.62,w*.52,-.5),D(0,-N*1,w*.26,-.2),D(0,-N*1.22,w*.24,-.1),r.position.set(0,N*.5,-w/2-.055),t.add(r),{group:t,muzzle:r}}x(L,N,w,T,0,0,0);const k=Math.floor(w/.045);for(let z=0;z<k;z++)x(L*.5,.011,.016,p,0,N/2+.005,-w/2+.03+z*.045);let E=-w/2;if(e.barrelLen>0&&(v(e.barrelR,e.barrelR,e.barrelLen,p,0,P,E-e.barrelLen/2),E-=e.barrelLen),e.muzzle&&(v(e.muzzle.r,e.muzzle.r,e.muzzle.len,d,0,P,E-e.muzzle.len/2),v(e.muzzle.r*.55,e.muzzle.r*.55,e.muzzle.len*.5,p,0,P,E-e.muzzle.len*.55),E-=e.muzzle.len),e.gasTube&&(v(.011,.011,((($=e.handguard)==null?void 0:$[2])??.2)*.95,d,0,P+N*.42,-w/2-(((fe=e.handguard)==null?void 0:fe[2])??.2)*.47),x(L*.7,N*.5,.03,d,0,P+N*.28,-w/2-(((re=e.handguard)==null?void 0:re[2])??.2)-.015),x(.008,.05,.008,p,0,P+N*.62,-w/2-(((q=e.handguard)==null?void 0:q[2])??.2)-.015),x(.044,.02,.014,p,0,N/2+.02,w*.3),x(.012,.03,.05,p,L*.42,.02,w*.05)),e.handguard){const[z,G,H]=e.handguard,K=e.handguardMat==="wood"?y:_;x(z,G,H,K,0,P-G*.12,-w/2-H/2+.012),x(z*.86,G*.4,H*.96,p,0,P+G*.42,-w/2-H/2+.012);for(let ie=0;ie<3;ie++)x(.004,G*.5,.045,p,z*.505,P-G*.12,-w/2-.05-ie*.07),x(.004,G*.5,.045,p,-z*.505,P-G*.12,-w/2-.05-ie*.07)}if(e.mag){const z=e.mag;x(z.w,z.h,z.d,p,z.x??0,-N/2-z.h/2+.025,(z.z??0)+.02,z.tilt),x(z.w*.9,.02,z.d*.9,d,z.x??0,-N/2-z.h+.03,(z.z??0)+.02+Math.sin(z.tilt)*z.h*.45,z.tilt)}if(e.topMag){const z=new vt({color:10135650,roughness:.4,metalness:.1,transparent:!0,opacity:.55});x(L*.92,.024,w*.86,z,0,N/2+.012,-.01);for(let G=0;G<8;G++)x(.008,.02,.014,new vt({color:14201946,metalness:.8,roughness:.35}),0,N/2+.012,-w*.3+G*.045)}if(e.bullpup&&(x(L*.9,N*1.12,.09,T,0,-.004,w/2+.035),x(L*.94,N*.9,.02,p,0,-.004,w/2+.085),x(L*.8,.03,.1,p,0,N/2+.012,w*.28),x(L*.7,.05,.12,T,0,-N/2-.02,-w*.3,-.55),x(.016,.05,.05,p,L*.4,.01,-w*.34),x(.016,.05,.05,p,-L*.4,.01,-w*.34)),e.stock){const z=e.stock,G=z.mat==="wood"?y:new vt({map:this.texPolymer(a(z.color)),roughness:.8,metalness:.12});x(L*.88,N*1.05,z.l*.5,G,0,-z.drop*.35,w/2+z.l*.25),x(L*.92,N*1.4,z.l*.5,G,0,-z.drop,w/2+z.l*.75),x(L*.96,N*1.45,.018,p,0,-z.drop,w/2+z.l+.002)}if(e.grip&&(x(L*.85,.115,.06,T,0,-N/2-.055,w*.3,-.22),x(L*.7,.03,.02,p,0,-N/2-.1,w*.16)),e.scope){const z=e.scope,G=N/2+z.r+.024;v(z.r,z.r,z.len,p,0,G,-.02),v(z.r*1.45,z.r,.055,p,0,G,-.02-z.len/2),v(z.r*1.2,z.r,.05,p,0,G,-.02+z.len/2);const H=new st(new Co(z.r*1.3,20),new qn({color:10474751}));H.position.set(0,G,-.02+z.len/2+.027),H.rotation.y=Math.PI,t.add(H),x(.014,.05,.03,p,0,N/2+.01,-.06),x(.014,.05,.03,p,0,N/2+.01,.04),x(.004,.02,.004,p,0,G+z.r+.012,-.1)}e.bipod&&(x(.012,.2,.012,p,.02,-N/2-.08,-w*.36,.45,0,.28),x(.012,.2,.012,p,-.02,-N/2-.08,-w*.36,.45,0,-.28),x(.05,.02,.05,p,0,-N/2-.012,-w*.36)),e.boltHandle&&(x(.012,.012,.07,d,L*.55,-.005,w*.1,0,0,.7),v(.011,.011,.024,d,L*.58,-.035,w*.07));const I=e.handguard,j=e.bullpup?-w*.3:w*.3,W=e.bullpup?-.55:-.22;return D(0,-N/2-.075,j,W),I?D(0,P-I[1]*.5-.05,-w/2-I[2]*.55,.2,!0):e.bullpup?D(0,-N*.75,-w*.05,.3,!0):D(0,-N*.5,-w*.42,.3,!0),r.position.set(0,P,E-.02),t.add(r),{group:t,muzzle:r}}buildWeapons(){const e=this.weapon;for(const t of jn){const{group:r,muzzle:a}=t==="ak"?this.buildAK47():this.buildGunModel(hi[t].gun);this.weaponModels[t]=r,this.weaponMuzzles[t]=a,e.add(r),r.visible=!1}e.position.set(.24,-.22,-.45),this.camera.add(e)}buildAK47(){const e=new Un,t=new Xt,r=this.texMetal("#3a3d42"),a=this.texWood(),l=new vt({map:r,bumpMap:r,bumpScale:.3,roughness:.45,metalness:.75}),u=new vt({map:this.texMetal("#1a1c20"),roughness:.4,metalness:.8}),f=new vt({map:a,bumpMap:a,bumpScale:.5,roughness:.7,metalness:.05}),d=new vt({color:2764068,roughness:.9}),p=(S,T,C,x,v,L,N,w=0,P=0,D=0)=>{const k=new st(new Wt(S,T,C),x);return k.position.set(v,L,N),k.rotation.set(w,P,D),e.add(k),k},y=(S,T,C,x,v,L,N)=>{const w=new st(new Qr(S,T,C,16),x);return w.rotation.x=Math.PI/2,w.position.set(v,L,N),e.add(w),w};p(.075,.095,.5,l,0,0,-.04),y(.016,.016,.36,u,0,.022,-.46),y(.011,.011,.28,l,0,.045,-.42),p(.068,.072,.24,f,0,-.004,-.28);for(let S=0;S<4;S++)p(.062,.015,.008,u,0,-.004,-.2-S*.05);const _=new Un;_.position.set(0,-.16,.03),_.rotation.x=.22,p(.058,.2,.1,l,0,0,0);for(let S=0;S<3;S++)p(.06,.008,.102,u,0,-.06+S*.06,0);e.add(_),p(.06,.085,.24,f,0,-.012,.3),p(.055,.075,.02,u,0,-.012,.42),p(.05,.11,.055,f,0,-.1,.12,-.25),p(.012,.05,.012,u,0,.078,-.6),p(.05,.03,.02,u,0,.062,.1),y(.02,.02,.06,l,0,.022,-.66),p(.035,.008,.05,u,0,.022,-.66),p(.07,.04,.15,l,0,.04,.05),p(.014,.045,.014,l,.04,.045,.1);const g=(S,T,C,x=0)=>{const v=new Un,L=new st(new Wt(.082,.075,.085),d);v.add(L);const N=new st(new Wt(.084,.045,.06),d);N.position.set(0,-.012,-.06),N.rotation.x=-.4,v.add(N);const w=new st(new Wt(.075,.062,.26),d);w.position.set(.05,-.02,.26),w.rotation.set(.18,-.15,0),v.add(w),v.position.set(S,T,C),v.rotation.x=x,e.add(v)};return g(0,-.004,-.28,.2),g(0,-.1,.12,-.25),t.position.set(0,.022,-.69),e.add(t),{group:e,muzzle:t}}makeGlowTex(){const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d"),r=t.createRadialGradient(64,64,2,64,64,64);return r.addColorStop(0,"rgba(255,240,200,1)"),r.addColorStop(.35,"rgba(255,180,90,0.8)"),r.addColorStop(1,"rgba(255,120,40,0)"),t.fillStyle=r,t.fillRect(0,0,128,128),new Zi(e)}buildFlash(e){const t=new qn({color:16763258,transparent:!0,opacity:0,blending:gr,depthWrite:!1,side:mi}),r=new Un,a=new st(new Kn(e,e),t),l=new st(new Kn(e,e*.36),t);l.rotation.z=Math.PI/2,r.add(a,l);const u=new Ec(new Ro({map:this.makeGlowTex(),color:16757866,transparent:!0,opacity:0,blending:gr,depthWrite:!1}));u.scale.set(e*2.6,e*2.6,1),r.add(u);const f=new st(new Kn(.01,.01),t);return f.add(r),f}bindEvents(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("wheel",this.onWheel,{passive:!0}),window.addEventListener("resize",this.onResize),document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mousedown",this.onMouseDown),document.addEventListener("mouseup",this.onMouseUp),document.addEventListener("pointerlockchange",this.onLockChange),document.addEventListener("visibilitychange",this.onVisibility),this.renderer.domElement.addEventListener("contextmenu",this.onContext)}requestLock(){try{const e=this.renderer.domElement.requestPointerLock();e&&typeof e.catch=="function"&&e.catch(()=>{})}catch{}}startMatch(){this.sfx.ensure(),og(),this.scoreA=0,this.scoreB=0,this.round=0,this.kills=0,this.deaths=0,this.equipped="deagle",this.applyWeaponVisibility(),this.hooks.score(0,0),this.hooks.kills(0),this.startRound()}resume(){this.state==="paused"&&(this.state="playing",this.sfx.setMuted(!1),og(),this.requestLock())}pause(){this.state==="playing"&&(this.state="paused",this.firing=!1,this.mouseInit=!1,qf(),this.scoped&&this.toggleScope(!1),document.pointerLockElement?document.exitPointerLock():this.hooks.lockedChange(!1))}toMenu(){window.clearTimeout(this.roundTimeout),this.clearEntities(),this.state="attract",qf(),this.scoped&&this.toggleScope(!1),document.pointerLockElement&&document.exitPointerLock()}setMoveInput(e,t){this.joyX=Math.max(-1,Math.min(1,e)),this.joyY=Math.max(-1,Math.min(1,t))}addLook(e,t){this.lookDX+=e,this.lookDY+=t}setFiring(e){if(this.state!=="playing"){this.firing=!1;return}this.firing=e,e&&this.tryShoot()}doJump(){this.state==="playing"&&(this.touchJump=!0)}doReload(){this.state==="playing"&&this.startReload()}doGrenade(){this.state==="playing"&&this.throwNade()}doScope(){this.state==="playing"&&this.equipped==="awp"&&this.toggleScope()}switchWeaponByIndex(e){e>=0&&e<jn.length&&this.switchTo(jn[e])}cycleWeaponPub(e){this.cycleWeapon(e)}setSettings(e){e.volume!==void 0&&this.sfx.setVolume(e.volume),e.sens!==void 0&&(this.sens=Math.max(.3,Math.min(2.5,e.sens))),e.quality!==void 0&&(this.qualitySetting=e.quality,this.applyQuality())}applyQuality(){const e=this.qualitySetting;let t,r;e==="low"?(t=1,r=!1):e==="high"?(t=Math.min(window.devicePixelRatio||1,1.75),r=!0):(t=Math.min(window.devicePixelRatio||1,hn?1:1.75),r=!hn),this.renderer.setPixelRatio(t),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.composer.setSize(this.container.clientWidth,this.container.clientHeight),this.bloomPass&&(this.bloomPass.enabled=r),this.degraded=e==="low"}setAudioPaused(e){this.sfx.setMuted(e)}dispose(){cancelAnimationFrame(this.raf),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("wheel",this.onWheel),window.removeEventListener("resize",this.onResize),document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mousedown",this.onMouseDown),document.removeEventListener("mouseup",this.onMouseUp),document.removeEventListener("pointerlockchange",this.onLockChange),document.removeEventListener("visibilitychange",this.onVisibility),this.renderer.domElement.removeEventListener("contextmenu",this.onContext),this.renderer.dispose(),this.renderer.domElement.parentElement===this.container&&this.container.removeChild(this.renderer.domElement)}clearEntities(){for(const e of this.bots)e.dispose(this.scene);this.bots=[];for(const e of this.nadesFly)this.scene.remove(e.m);this.nadesFly=[];for(const e of this.particles)e.life=0,e.m.visible=!1}startRound(){this.round++,this.clearEntities();const e=this.map.playerSpawn;this.pos.set(e.x,0,e.z),this.vel.set(0,0,0),this.yaw=0,this.pitch=0,this.recoilPitch=0,this.recoilYaw=0,this.spread=0,this.shake=0,this.kick=0,this.hp=100,this.armor=100;for(const l of jn)this.ammo[l]={mag:hi[l].mag,res:hi[l].res};this.nades=Math.min(3,this.round)+this.grenadeBonus,this.grenadeBonus=0,this.reloading=!1,this.firing=!1,this.scoped=!1,this.hooks.scoped(!1),this.roundT=ug;const t=Math.min(10,3+this.round),r=[...this.map.botSpawns].sort(()=>Math.random()-.5),a={colliders:this.map.colliders,bounds:this.map.bounds,solids:this.map.solids,playerEye:()=>this.tmpV.set(this.pos.x,this.pos.y+1.55,this.pos.z),playerSpeedXZ:()=>Math.hypot(this.vel.x,this.vel.z),tracer:(l,u,f)=>this.spawnTracer(l,u,f),damagePlayer:(l,u)=>this.damagePlayer(l,u),sfx:this.sfx};for(let l=0;l<t;l++){const u=r[l%r.length],f=Bw(),d=new Ow(f[l%f.length],u.x+(Math.random()-.5),u.z+(Math.random()-.5),(3+this.round*.22+Math.random()*.3)*1.35,a);d.group.rotation.y=Math.random()*Math.PI*2,this.scene.add(d.group),d.group.updateMatrixWorld(!0),this.bots.push(d)}this.state="playing",Zd-this.scoreA,this.hooks.banner({title:`${on("round")} ${this.round}`,sub:`${on("roundSub")}: ${t}`,tone:"info"}),this.sfx.beep(760,.12,.22),this.requestLock()}endRound(e){if(this.state!=="playing"&&this.state!=="dying")return;this.state="roundEnd",this.firing=!1,this.scoped&&this.toggleScope(!1),this.camera.fov=75,this.camera.updateProjectionMatrix(),e?this.scoreA++:this.scoreB++,this.hooks.score(this.scoreA,this.scoreB),document.pointerLockElement&&document.exitPointerLock();const t=this.scoreA>=Zd||this.scoreB>=Zd;this.hooks.banner({title:on(e?"roundWon":"roundLost"),sub:`${on("score")} ${this.scoreA} : ${this.scoreB}`,tone:e?"win":"lose"}),e?this.sfx.win():this.sfx.lose(),this.roundTimeout=window.setTimeout(()=>{t?this.finish(this.scoreA>this.scoreB):this.startRound()},3100)}finish(e){this.scoped&&this.toggleScope(!1),this.camera.fov=75,this.camera.updateProjectionMatrix(),this.hooks.over({result:e?"victory":"defeat",kills:this.kills,deaths:this.deaths,won:this.scoreA,lost:this.scoreB}),this.clearEntities(),this.state="attract"}startReload(){const e=hi[this.equipped];if(e.melee||e.reload<=0)return;const t=this.ammo[this.equipped];if(!(this.reloading||t.mag>=e.mag||this.state!=="playing")){if(t.res<=0){this.sfx.dry();return}this.scoped&&this.toggleScope(!1),this.reloading=!0,this.reloadTotal=e.reload,this.reloadT=e.reload,this.reloadAnim=0,this.sfx.reload()}}tryShoot(){if(this.state!=="playing"||this.cooldown>0||this.reloading||this.switchAnim<1||this.wheelOpen)return;const e=hi[this.equipped];if(e.melee){this.meleeAttack(e);return}const t=this.ammo[this.equipped];if(t.mag<=0){this.sfx.dry(),this.firing=!1,e.reload>0&&this.startReload();return}t.mag--,this.cooldown=e.cd,e.sound==="sniper"?this.sfx.sniper():e.sound==="pistol"?this.sfx.pistol():e.sound==="smg"?this.sfx.smg():this.sfx.shoot();const r=e.sound==="sniper";this.flashT=r?.07:.04,this.flash.rotation.z=Math.random()*Math.PI;const a=(r?1.2:e.sound==="pistol"?.55:.75)+Math.random()*.5;this.flash.scale.set(a,a,a),this.gunLight.intensity=r?40:26,this.kick=Math.min(1.6,this.kick+1),this.recoilPitch+=e.recoil+Math.random()*e.recoil*.5,this.recoilYaw+=(Math.random()-.5)*e.recoilYaw*2,this.spread=Math.min(1,this.spread+(this.onGround?e.kick:e.kick*1.6)),this.spawnShell(),this.camera.getWorldDirection(this.tmpD);const l=Math.hypot(this.vel.x,this.vel.z);let u;e.sound==="sniper"?u=this.scoped?.0012+this.spread*.004:.075+this.spread*.03+(l>1.2?.05:0):u=e.base+this.spread*e.grow+(l>1.2?e.movePen:0)+(this.onGround?0:.012),this.tmpD.x+=(Math.random()-.5)*2*u,this.tmpD.y+=(Math.random()-.5)*2*u,this.tmpD.z+=(Math.random()-.5)*2*u,this.tmpD.normalize(),this.camera.getWorldPosition(this.tmpV),this.ray.set(this.tmpV,this.tmpD),this.ray.far=140;const f=[...this.map.solids];for(const _ of this.bots)_.alive&&f.push(..._.hitboxes);const d=this.ray.intersectObjects(f,!1),p=new J;this.weaponMuzzles[this.equipped].getWorldPosition(p);const y=d.length?d[0].point:this.tmpV.clone().addScaledVector(this.tmpD,120);if(this.spawnTracer(p,y,e.sound==="sniper"?16771488:16765562),this.burst(p,10263184,2,.6,.6,-2.2),d.length){const _=d[0].object.userData;if(_.bot&&_.bot.alive){const g=_.part==="head",S=_.bot.hit(_.part||"body",g?e.dmg*4:e.dmg);this.burst(d[0].point,10361627,g?16:10,3.4,.5),S?this.onBotKilled(_.bot,g):(this.hooks.hitmark(g?"head":"hit"),this.sfx.hit(g))}else if(this.burst(d[0].point,14205066,7,2.6,.35),this.burst(d[0].point,16773304,4,3.4,.25),d[0].face){const g=new J().copy(d[0].face.normal).transformDirection(d[0].object.matrixWorld);this.addDecal(d[0].point,g)}}}meleeAttack(e){this.cooldown=e.cd,this.kick=Math.min(1.6,this.kick+1),this.sfx.knife(),this.camera.getWorldDirection(this.tmpD),this.camera.getWorldPosition(this.tmpV),this.ray.set(this.tmpV,this.tmpD),this.ray.far=2.4;const t=[];for(const a of this.bots)a.alive&&t.push(...a.hitboxes);const r=this.ray.intersectObjects(t,!1);if(r.length){const a=r[0].object.userData;if(a.bot&&a.bot.alive){const l=a.part==="head",u=a.bot.hit(a.part||"body",l?e.dmg*2:e.dmg);this.burst(r[0].point,10361627,14,3.6,.5),u?this.onBotKilled(a.bot,l):(this.hooks.hitmark(l?"head":"hit"),this.sfx.hit(l))}}}onBotKilled(e,t){this.kills++,this.hooks.kills(this.kills),this.hooks.hitmark("kill"),this.hooks.feed({killer:"ВЫ",victim:e.name,head:t,byPlayer:!0}),this.sfx.kill();const r=e.group.position;this.burst(new J(r.x,r.y+1,r.z),10361627,18,4.2,.7)}damagePlayer(e,t){if(this.state!=="playing")return;let r=e;if(this.armor>0){const f=Math.min(this.armor,r*.5);this.armor-=f,r-=f}this.hp-=r,this.shake=Math.min(1.2,this.shake+r/22);const a=t.x-this.pos.x,l=t.z-this.pos.z,u=this.normAngle(this.yaw+Math.PI-Math.atan2(a,l));if(this.hooks.damage(r,u),this.sfx.hurt(),this.hp<=0){this.hp=0,this.deaths++;const f=this.bots.find(d=>d.group.position===t);this.hooks.feed({killer:f?f.name:"Взрыв",victim:"ВЫ",head:!1,byPlayer:!1}),this.state="dying",this.deathT=0,this.firing=!1,this.hooks.banner({title:on("youKilled"),sub:on("roundLostSub"),tone:"lose"}),this.sfx.lose()}}normAngle(e){for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}switchTo(e){this.equipped===e||this.state!=="playing"||(this.equipped=e,this.reloading=!1,this.firing=!1,this.scoped&&this.toggleScope(!1),this.switchAnim=0,this.applyWeaponVisibility(),this.sfx.switchW())}applyWeaponVisibility(){for(const e of jn)this.weaponModels[e].visible=e===this.equipped;this.weaponMuzzles[this.equipped].add(this.flash)}cycleWeapon(e){if(this.state!=="playing")return;const t=jn.indexOf(this.equipped),r=jn.length;this.switchTo(jn[(t+e+r)%r])}openWheel(){this.state!=="playing"||this.wheelOpen||(this.wheelOpen=!0,this.firing=!1,this.wheelIndex=jn.indexOf(this.equipped),document.pointerLockElement&&document.exitPointerLock(),this.emitWheel())}closeWheel(e){this.wheelOpen&&(this.wheelOpen=!1,e&&this.switchTo(jn[this.wheelIndex]),this.hooks.wheel(null),this.requestLock())}emitWheel(){this.hooks.wheel({items:jn.map(e=>({id:e,name:hi[e].name,short:hi[e].short,cat:hi[e].cat})),active:this.wheelIndex})}wheelPick(e,t){if(!this.wheelOpen)return;const r=window.innerWidth/2,a=window.innerHeight/2,l=e-r,u=t-a;if(Math.hypot(l,u)<40)return;let f=Math.atan2(u,l)+Math.PI/2;f<0&&(f+=Math.PI*2);const d=jn.length;this.wheelIndex=Math.round(f/(Math.PI*2)*d)%d,this.emitWheel()}toggleScope(e){if(!hi[this.equipped].gun.scope&&e!==!1)return;const r=e!==void 0?e:!this.scoped;r!==this.scoped&&(this.scoped=r,this.spread=Math.min(this.spread,.15),this.sfx.zoom(r),this.hooks.scoped(r))}spawnShell(){const e=this.shells.find(l=>l.life<=0);if(!e)return;e.m.visible=!0,this.camera.getWorldPosition(this.tmpV);const t=new J(1,0,0).applyQuaternion(this.camera.quaternion),r=new J(0,1,0).applyQuaternion(this.camera.quaternion),a=new J(0,0,-1).applyQuaternion(this.camera.quaternion);e.m.position.copy(this.tmpV).addScaledVector(t,.22).addScaledVector(r,-.1).addScaledVector(a,.2),e.v.copy(t).multiplyScalar(1.6+Math.random()*1.2).addScaledVector(r,1.6+Math.random()*1.4).addScaledVector(a,.5),e.rv.set((Math.random()-.5)*25,(Math.random()-.5)*25,(Math.random()-.5)*25),e.life=1.1}addDecal(e,t){const r=this.decals.find(l=>l.life<=0);if(!r)return;r.m.position.copy(e).addScaledVector(t,.015),r.m.lookAt(this.tmpV.copy(e).add(t)),r.m.rotation.z=Math.random()*Math.PI;const a=.7+Math.random()*.9;r.m.scale.set(a,a,a),r.m.visible=!0,r.life=10}throwNade(){if(this.nades<=0||this.state!=="playing")return;this.nades--,this.sfx.pin();const e=new st(new gh(.09,10,8),new vt({color:4016684,roughness:.6}));e.castShadow=!0,this.camera.getWorldPosition(this.tmpV),this.camera.getWorldDirection(this.tmpD),e.position.copy(this.tmpV).addScaledVector(this.tmpD,.5);const t=this.tmpD.clone().multiplyScalar(13.5);t.y+=3.4,t.x+=this.vel.x*.35,t.z+=this.vel.z*.35,this.scene.add(e),this.nadesFly.push({m:e,v:t,fuse:1.45})}updateNades(e){for(let t=this.nadesFly.length-1;t>=0;t--){const r=this.nadesFly[t];r.v.y-=21*e,r.m.position.addScaledVector(r.v,e);const a=r.m.position,l=ig(a.x,a.z,a.y,.09,this.map.colliders);r.v.y<=0&&a.y<=l+.09&&(a.y=l+.09,r.v.y=Math.abs(r.v.y)*.42,r.v.x*=.72,r.v.z*=.72);for(const f of this.map.colliders)if(a.x>f.minX-.09&&a.x<f.maxX+.09&&a.z>f.minZ-.09&&a.z<f.maxZ+.09&&a.y<f.top){const d=a.x-(f.minX-.09),p=f.maxX+.09-a.x,y=a.z-(f.minZ-.09),_=f.maxZ+.09-a.z,g=Math.min(d,p,y,_);g===d?(a.x=f.minX-.09,r.v.x=-Math.abs(r.v.x)*.5):g===p?(a.x=f.maxX+.09,r.v.x=Math.abs(r.v.x)*.5):g===y?(a.z=f.minZ-.09,r.v.z=-Math.abs(r.v.z)*.5):(a.z=f.maxZ+.09,r.v.z=Math.abs(r.v.z)*.5)}r.fuse-=e;const u=r.fuse<.5?1+Math.sin(this.time*30)*.15:1;r.m.scale.set(u,u,u),r.fuse<=0&&(this.explode(a.clone()),this.scene.remove(r.m),this.nadesFly.splice(t,1))}}explode(e){this.sfx.boom(),this.boomLight.position.copy(e),this.boomLight.intensity=260,this.boomFlash.position.copy(e),this.boomT=.3,this.shake=Math.min(1.4,this.shake+.9),this.burst(e,16748608,26,9,.7,5),this.burst(e,16769184,18,12,.4,6),this.burst(e,5591114,20,5,1.1,2);for(const r of this.bots){if(!r.alive)continue;const a=r.group.position.distanceTo(e);a<6.5&&r.hit("body",130*(1-a/6.5))&&this.onBotKilled(r,!1)}const t=Math.hypot(this.pos.x-e.x,this.pos.z-e.z);t<5.5&&this.damagePlayer(50*(1-t/5.5),e)}burst(e,t,r,a,l,u=9){for(let f=0;f<r;f++){let d=this.particles.find(y=>y.life<=0);if(!d){if(this.particles.length>(hn?90:280))return;const y=new st(new Wt(.06,.06,.06),new qn({color:t,transparent:!0}));this.scene.add(y),d={m:y,v:new J,g:u,life:0,max:1},this.particles.push(d)}d.m.material.color.set(t),d.m.visible=!0,d.m.position.copy(e),d.v.set((Math.random()-.5)*2,Math.random()*1.4,(Math.random()-.5)*2).normalize().multiplyScalar(a*(.4+Math.random()*.8)),d.g=u,d.max=l*(.6+Math.random()*.7),d.life=d.max;const p=.6+Math.random();d.m.scale.set(p,p,p)}}spawnTracer(e,t,r){const a=this.tracers.find(d=>d.life<=0);if(!a)return;const l=e.clone().add(t).multiplyScalar(.5),u=e.distanceTo(t);a.m.position.copy(l),a.m.scale.set(.022,.022,Math.max(.1,u)),a.m.lookAt(t);const f=a.m.material;f.color.set(r),f.opacity=.85,a.m.visible=!0,a.life=.07}updateFx(e){for(const t of this.particles)if(!(t.life<=0)){if(t.life-=e,t.life<=0){t.m.visible=!1;continue}t.v.y-=t.g*e,t.m.position.addScaledVector(t.v,e),t.m.position.y<.02&&(t.m.position.y=.02,t.v.y=Math.abs(t.v.y)*.3,t.v.x*=.7,t.v.z*=.7),t.m.material.opacity=Math.min(1,t.life/t.max*1.4)}for(const t of this.shells)if(!(t.life<=0)){if(t.life-=e,t.life<=0){t.m.visible=!1;continue}t.v.y-=13*e,t.m.position.addScaledVector(t.v,e),t.m.position.y<.02&&(t.m.position.y=.02,t.v.y=Math.abs(t.v.y)*.35,t.v.x*=.6,t.v.z*=.6,t.rv.multiplyScalar(.5)),t.m.rotation.x+=t.rv.x*e,t.m.rotation.y+=t.rv.y*e,t.m.rotation.z+=t.rv.z*e}for(const t of this.decals)if(!(t.life<=0)){if(t.life-=e,t.life<=0){t.m.visible=!1;continue}t.m.material.opacity=Math.min(.7,t.life*.5)}for(const t of this.tracers)if(!(t.life<=0)){if(t.life-=e,t.life<=0){t.m.visible=!1;continue}t.m.material.opacity=t.life/.07*.85}if(this.flashT>0?(this.flashT-=e,this.setFlashOpacity(Math.max(0,this.flashT/.04))):this.setFlashOpacity(0),this.gunLight.intensity=Math.max(0,this.gunLight.intensity-e*260),this.boomT>0){this.boomT-=e;const t=Math.max(0,this.boomT/.3);this.boomLight.intensity=t*260,this.boomFlash.material.opacity=t*.95;const r=6+(1-t)*9;this.boomFlash.scale.set(r,r,1)}else this.boomFlash.material.opacity>0&&(this.boomFlash.material.opacity=0);this.recoilPitch*=Math.exp(-9*e),this.recoilYaw*=Math.exp(-9*e),this.kick=Math.max(0,this.kick-e*9),this.shake=Math.max(0,this.shake-e*2.6)}setFlashOpacity(e){this.flash.traverse(t=>{const r=t;r.material&&(r.material.opacity=e)})}updateDying(e){this.deathT+=e,this.camera.position.set(this.pos.x,Math.max(.45,this.pos.y+1.55-this.deathT*1.4),this.pos.z),this.camera.rotation.set(this.pitch*.4-this.deathT*.25,this.yaw,Math.min(1.15,this.deathT*1.6)),this.deathT>1.9&&this.endRound(!1)}updatePlaying(e){if(this.lookDX!==0||this.lookDY!==0){const re=.0042*this.sens;this.yaw-=this.lookDX*re,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch-this.lookDY*re)),this.lookDX=0,this.lookDY=0}const t=re=>Math.max(-1,Math.min(1,re)),r=t((this.keys.KeyW?1:0)-(this.keys.KeyS?1:0)+this.joyY),a=t((this.keys.KeyD?1:0)-(this.keys.KeyA?1:0)+this.joyX),l=!!this.keys.ShiftLeft||!!this.keys.ShiftRight,u=hi[this.equipped],f=(l?2.6:5.7)*u.speed*(this.scoped?.42:1),d=Math.sin(this.yaw),p=Math.cos(this.yaw);let y=-d*r+p*a,_=-p*r-d*a;const g=Math.hypot(y,_);g>.01?(y=y/g*f,_=_/g*f):(y=0,_=0);const S=this.onGround?1-Math.exp(-13*e):1-Math.exp(-3.2*e);this.vel.x+=(y-this.vel.x)*S,this.vel.z+=(_-this.vel.z)*S,(this.keys.Space||this.touchJump)&&this.onGround&&(this.vel.y=9,this.onGround=!1,this.sfx.jump()),this.touchJump=!1,this.vel.y=Math.max(-18,this.vel.y-24*e),this.pos.y+=this.vel.y*e,jg(this.pos,this.vel.x*e,this.vel.z*e,.42,this.map.colliders,this.map.bounds);const T=ig(this.pos.x,this.pos.z,this.pos.y,.42,this.map.colliders);this.vel.y<=0&&this.pos.y<=T?(this.pos.y=T,this.vel.y=0,this.onGround=!0):this.onGround=this.pos.y<=T+.03;const C=Math.hypot(this.vel.x,this.vel.z);if(this.onGround&&C>.6){this.bobT+=C*e*1.5,this.stepAcc+=C*e;const re=l?2.4:1.9;this.stepAcc>re&&(this.stepAcc=0,this.sfx.step())}const x=this.onGround&&C>.6?Math.sin(this.bobT*2)*.032*Math.min(1,C/5):0,v=(Math.random()-.5)*this.shake*.05,L=(Math.random()-.5)*this.shake*.05,N=(Math.random()-.5)*this.shake*.03;this.camera.position.set(this.pos.x+v,this.pos.y+1.55+x+L,this.pos.z),this.camera.rotation.set(this.pitch+this.recoilPitch+L*.4,this.yaw+this.recoilYaw,N);const w=this.scoped?18:75;Math.abs(this.camera.fov-w)>.05&&(this.camera.fov+=(w-this.camera.fov)*Math.min(1,16*e),this.camera.updateProjectionMatrix());const P=this.weapon;P.visible=!this.scoped;const D=Math.sin(Math.min(1,this.switchAnim)*Math.PI)*(this.switchAnim>=1?0:.16),k=.24+Math.sin(this.bobT)*.006*Math.min(1,C/5)-this.vel.x*.004*p-this.vel.z*.004*-d;P.position.x+=(k-P.position.x)*Math.min(1,12*e),P.position.y=-.22+Math.abs(Math.cos(this.bobT))*.008*Math.min(1,C/5)-D,P.position.z=-.45+this.kick*.055;let E=this.kick*.1;if(this.reloading){const re=1-this.reloadT/this.reloadTotal;if(re<.3){const q=re/.3;E-=Math.sin(q*Math.PI/2)*.9,P.position.y-=Math.sin(q*Math.PI/2)*.08}else if(re<.7){E-=.9,P.position.y-=.08;const q=(re-.3)/.4;P.position.y+=Math.sin(q*Math.PI*2)*.01}else{const q=(re-.7)/.3;E-=(1-q)*.9,P.position.y-=(1-q)*.08}}this.switchAnim<1&&(E-=Math.sin(this.switchAnim*Math.PI)*.5),P.rotation.x=E,P.rotation.z=this.kick*.02;const I=C>1.2;this.spread=Math.max(0,this.spread-e*u.recover*(I?.45:1)-(this.onGround&&!I?e*1.2:0));const j=hi[this.equipped];if(this.cooldown=Math.max(0,this.cooldown-e),this.switchAnim=Math.min(1,this.switchAnim+e/.28),this.reloading&&(this.reloadT-=e,this.reloadAnim=1-this.reloadT/this.reloadTotal,this.reloadT<=0)){this.reloading=!1,this.reloadAnim=0;const re=this.ammo[this.equipped],q=Math.min(j.mag-re.mag,re.res);re.mag+=q,re.res-=q}this.firing&&j.auto&&this.tryShoot();const W=this.tmpV.set(this.pos.x,this.pos.y+1.55,this.pos.z);let $=0;for(let re=this.bots.length-1;re>=0;re--){const q=this.bots[re],z=q.update(e,W);q.alive&&$++,z||(q.dispose(this.scene),this.bots.splice(re,1))}for(let re=0;re<this.bots.length;re++)for(let q=re+1;q<this.bots.length;q++){const z=this.bots[re].group.position,G=this.bots[q].group.position,H=G.x-z.x,K=G.z-z.z,ie=Math.hypot(H,K);if(ie<.9&&ie>.001){const O=(.9-ie)/2;z.x-=H/ie*O,z.z-=K/ie*O,G.x+=H/ie*O,G.z+=K/ie*O}}this.updateNades(e),this.roundT-=e,$===0&&this.bots.every(re=>!re.alive)?(this.roundT=Math.max(this.roundT,.9),this.endRound(!0)):this.roundT<=0&&(this.roundT=0,this.endRound(!1));const fe=this.ammo[this.equipped];this.hooks.hud({hp:Math.max(0,Math.ceil(this.hp)),armor:Math.max(0,Math.ceil(this.armor)),mag:fe.mag,res:fe.res,nades:this.nades,timer:Math.max(0,Math.ceil(this.roundT)),spreadPx:Math.round(this.scoped?2:5+this.spread*30+(I?4:0)),enemies:$,reloading:this.reloading,weapon:`${jn.indexOf(this.equipped)+1}·${hi[this.equipped].short}`,melee:!!hi[this.equipped].melee}),this.hooks.radar({px:this.pos.x,pz:this.pos.z,yaw:this.yaw,dots:this.bots.filter(re=>re.alive).map(re=>({x:re.group.position.x,z:re.group.position.z}))})}}const Gw=["AK-47","UZI","P90","AWP","DEAGLE","НОЖ"],dg={volume:.8,sens:1,quality:"auto",lang:"ru"},wc={wins:0,losses:0,kills:0,deaths:0,matches:0,bestKills:0},Zg="cs3d_settings_v2",Qg="cs3d_progress_v2";function Qd(){try{const s=localStorage.getItem(Zg);if(s)return{...dg,...JSON.parse(s)}}catch{}return{...dg}}function Hw(s){try{localStorage.setItem(Zg,JSON.stringify(s))}catch{}}function Ww(){try{const s=localStorage.getItem(Qg);if(s)return{...wc,...JSON.parse(s)}}catch{}return{...wc}}function fg(s){try{localStorage.setItem(Qg,JSON.stringify(s))}catch{}}const Ti=(s,e)=>{s&&s.dataset.v!==e&&(s.dataset.v=e,s.textContent=e)},hg=(s,e)=>{s&&(s.classList.remove(e),s.offsetWidth,s.classList.add(e))},Xw=()=>A.jsx("svg",{viewBox:"0 0 16 16",className:"h-3.5 w-3.5 fill-current",children:A.jsx("path",{d:"M8 1a6 6 0 0 0-6 6c0 2.2 1.2 4 3 5v3h2v-2h2v2h2v-3c1.8-1 3-2.8 3-5a6 6 0 0 0-6-6zM5.5 9A1.5 1.5 0 1 1 7 7.5 1.5 1.5 0 0 1 5.5 9zm5 0A1.5 1.5 0 1 1 12 7.5 1.5 1.5 0 0 1 10.5 9z"})}),jw=()=>A.jsx("svg",{viewBox:"0 0 16 16",className:"h-4 w-4 fill-current",children:A.jsx("path",{d:"M8 1 2 3.5v4C2 11.6 4.6 14.6 8 15.5c3.4-.9 6-3.9 6-8v-4L8 1z"})}),Jg=({dim:s})=>A.jsxs("svg",{viewBox:"0 0 16 16",className:`h-4 w-4 ${s?"opacity-25":""}`,children:[A.jsx("path",{className:"fill-current",d:"M9 2h3v1.5h-2l-1 1.6A5 5 0 1 1 6.2 4L9 2z"}),A.jsx("circle",{cx:"8",cy:"9.5",r:"4.2",fill:"none",stroke:"currentColor",strokeWidth:"1.4"})]}),Yw=()=>A.jsx("span",{className:"mx-1.5 rounded-sm border border-[#3a4a5c] bg-[#141c25] px-1.5 py-px text-[10px] font-semibold tracking-wider text-[#9fb2c6]",children:"AK-47"});function Ss({children:s,className:e,onDown:t,onUp:r,title:a}){return A.jsx("button",{"aria-label":a,className:`pointer-events-auto flex touch-none select-none items-center justify-center rounded-full border font-display transition-transform duration-75 active:scale-90 ${e??""}`,onPointerDown:l=>{l.stopPropagation(),l.currentTarget.setPointerCapture(l.pointerId),t==null||t()},onPointerUp:l=>{l.stopPropagation(),r==null||r()},onPointerCancel:l=>{l.stopPropagation(),r==null||r()},onContextMenu:l=>l.preventDefault(),children:s})}function qw({game:s,activeWeapon:e,onSelectWeapon:t,onPause:r,ts:a,compact:l}){const u=it.useRef(null),f=it.useRef(null),d=it.useRef(null),p=Math.round(Math.min(60,Math.max(40,window.innerWidth*.08))*Math.max(a,.7)),y=Math.round(p*.85),_=it.useRef({}),g=()=>{var v;(v=s())==null||v.setMoveInput(0,0),f.current&&(f.current.style.opacity="0"),d.current&&(d.current.style.transform="translate(0px,0px)")},S=v=>{if(v.pointerType==="mouse")return;const L=u.current.getBoundingClientRect(),N=v.clientX<L.width*.42?"move":"look";N==="move"&&Object.values(_.current).some(w=>w.role==="move")||(v.currentTarget.setPointerCapture(v.pointerId),_.current[v.pointerId]={role:N,ox:v.clientX,oy:v.clientY,lx:v.clientX,ly:v.clientY},N==="move"&&f.current&&(f.current.style.opacity="1",f.current.style.left=`${v.clientX}px`,f.current.style.top=`${v.clientY}px`))},T=v=>{var N,w;const L=_.current[v.pointerId];if(L)if(L.role==="move"){let P=v.clientX-L.ox,D=v.clientY-L.oy;const k=Math.hypot(P,D),E=p*.15;if(k<E)P=0,D=0;else{const j=(Math.min(k,p)-E)/(p-E);P=P/k*p*j,D=D/k*p*j}if(d.current){d.current.style.transform=`translate(${P}px,${D}px)`;const I=Math.min(1,k/p);d.current.style.opacity=String(.7+I*.3)}(N=s())==null||N.setMoveInput(P/p,-D/p)}else(w=s())==null||w.addLook((v.clientX-L.lx)*1.2,(v.clientY-L.ly)*1.2),L.lx=v.clientX,L.ly=v.clientY},C=v=>{const L=_.current[v.pointerId];L&&(L.role==="move"&&g(),delete _.current[v.pointerId])},x=s;return A.jsxs(A.Fragment,{children:[A.jsx("div",{ref:u,className:"absolute inset-0 z-30 touch-none",onPointerDown:S,onPointerMove:T,onPointerUp:C,onPointerCancel:C}),A.jsx("div",{ref:f,className:"pointer-events-none fixed z-30 rounded-full border-2 border-[#f2a33c]/40 bg-[#f2a33c]/5",style:{opacity:0,width:p*2+16,height:p*2+16,marginLeft:-(p+8),marginTop:-(p+8)},children:A.jsx("div",{ref:d,className:"absolute left-1/2 top-1/2 rounded-full border-2 border-[#f2a33c]/70 bg-[#f2a33c]/25",style:{width:y,height:y,marginLeft:-y/2,marginTop:-y/2}})}),A.jsx("div",{className:`pointer-events-auto absolute left-1/2 z-40 flex -translate-x-1/2 gap-1 ${l?"top-14":"top-16"}`,children:Gw.map((v,L)=>A.jsx(Ss,{title:v,onDown:()=>t(L),className:`rounded-md text-[calc(11px*var(--ts,1))] tracking-wider ${l?"h-[calc(2rem*var(--ts,1))] w-[calc(2rem*var(--ts,1))] px-0":"h-[calc(2.25rem*var(--ts,1))] px-[calc(0.6rem*var(--ts,1))]"} ${e===L?"border-[#f2a33c] bg-[#3a2a12]/90 text-[#f2a33c]":"border-[#2b3844] bg-[#12181f]/80 text-[#8b98a7]"}`,children:A.jsxs("span",{className:"skew-x-0",children:[L+1,!l&&`·${v}`]})},v))}),A.jsx(Ss,{title:"Пауза",onDown:r,className:"absolute right-2 top-2 z-40 h-[calc(2.4rem*var(--ts,1))] w-[calc(2.4rem*var(--ts,1))] border-[#2b3844] bg-[#12181f]/85 text-[#c8d2dd]",children:A.jsx("svg",{viewBox:"0 0 16 16",className:"fill-current",style:{width:"calc(0.95rem*var(--ts,1))",height:"calc(0.95rem*var(--ts,1))"},children:A.jsx("path",{d:"M4 2h3v12H4zM9 2h3v12H9z"})})}),A.jsxs("div",{className:`absolute right-2 z-40 flex flex-col items-end gap-[calc(0.6rem*var(--ts,1))] ${l?"bottom-3":"bottom-5"}`,children:[A.jsxs("div",{className:"flex gap-[calc(0.55rem*var(--ts,1))]",children:[A.jsx(Ss,{title:"Прицел",onDown:()=>{var v;return(v=x())==null?void 0:v.doScope()},className:"h-[calc(2.6rem*var(--ts,1))] w-[calc(2.6rem*var(--ts,1))] border-[#2b3844] bg-[#12181f]/85 text-[calc(10px*var(--ts,1))] text-[#c8d2dd]",children:"ОПТ"}),A.jsx(Ss,{title:"Перезарядка",onDown:()=>{var v;return(v=x())==null?void 0:v.doReload()},className:"h-[calc(2.6rem*var(--ts,1))] w-[calc(2.6rem*var(--ts,1))] border-[#2b3844] bg-[#12181f]/85 text-[calc(10px*var(--ts,1))] text-[#c8d2dd]",children:"R"}),A.jsx(Ss,{title:"Граната",onDown:()=>{var v;return(v=x())==null?void 0:v.doGrenade()},className:"h-[calc(2.6rem*var(--ts,1))] w-[calc(2.6rem*var(--ts,1))] border-[#2b3844] bg-[#12181f]/85 text-[#c9d68a]",children:A.jsx(Jg,{})})]}),A.jsxs("div",{className:"flex items-end gap-[calc(0.7rem*var(--ts,1))]",children:[A.jsx(Ss,{title:"Прыжок",onDown:()=>{var v;return(v=x())==null?void 0:v.doJump()},className:"h-[calc(3.2rem*var(--ts,1))] w-[calc(3.2rem*var(--ts,1))] border-[#2b3844] bg-[#12181f]/85 text-[#c8d2dd]",children:A.jsx("svg",{viewBox:"0 0 16 16",className:"fill-current",style:{width:"calc(1.15rem*var(--ts,1))",height:"calc(1.15rem*var(--ts,1))"},children:A.jsx("path",{d:"M8 2 2 9h4v5h4V9h4z"})})}),A.jsx(Ss,{title:"Огонь",onDown:()=>{var v;return(v=x())==null?void 0:v.setFiring(!0)},onUp:()=>{var v;return(v=x())==null?void 0:v.setFiring(!1)},className:"h-[calc(4.6rem*var(--ts,1))] w-[calc(4.6rem*var(--ts,1))] border-2 border-[#e0453a] bg-[#e0453a]/25 text-[#ff8a80]",children:A.jsxs("svg",{viewBox:"0 0 16 16",className:"fill-current",style:{width:"calc(1.8rem*var(--ts,1))",height:"calc(1.8rem*var(--ts,1))"},children:[A.jsx("circle",{cx:"8",cy:"8",r:"3"}),A.jsx("path",{d:"M8 1v3M8 12v3M1 8h3M12 8h3",stroke:"currentColor",strokeWidth:"1.6"})]})})]})]})]})}function Kw(){var De,se;const s=it.useRef(null),e=it.useRef(null),t=it.useRef(null),[r,a]=it.useState("menu"),[l,u]=it.useState(!1),[f,d]=it.useState([]),[p,y]=it.useState(null),[_,g]=it.useState(null),[S,T]=it.useState(!1),[C,x]=it.useState(1),[v,L]=it.useState(!1),[N,w]=it.useState(!1),[P,D]=it.useState(null),[k,E]=it.useState(!1),[I]=it.useState(()=>mc),[j,W]=it.useState(2),[$,fe]=it.useState(()=>Math.max(.55,Math.min(1,Math.min(window.innerWidth,window.innerHeight)/800)));it.useEffect(()=>{const V=()=>fe(Math.max(.55,Math.min(1,Math.min(window.innerWidth,window.innerHeight)/800)));return window.addEventListener("resize",V),window.addEventListener("orientationchange",V),()=>{window.removeEventListener("resize",V),window.removeEventListener("orientationchange",V)}},[]);const re=window.innerWidth<560||I&&window.innerWidth<860,[q,z]=it.useState(()=>Qd()),[G,H]=it.useState(()=>Ww()),[K,ie]=it.useState(!1),[O,te]=it.useState(!1),[Ne,Ve]=it.useState(()=>Yg()),[Ge,ae]=it.useState(!1),ye=it.useRef(null),he=it.useRef(null),Te=it.useRef(null),Fe=it.useRef(null),ze=it.useRef(null),lt=it.useRef(null),$e=it.useRef(null),wt=it.useRef(null),ft=it.useRef(null),dt=it.useRef(null),kt=it.useRef(null),Bt=it.useRef(null),It=it.useRef(null),Ut=it.useRef(null),Tt=it.useRef(null),zt=it.useRef(null),Z=it.useRef(null),sn=it.useRef(0),Et=it.useRef(0),U=it.useRef(null),M=it.useRef(!1),ne=it.useRef(0),le=it.useRef(!1),ge=it.useRef(1);it.useEffect(()=>{if(!s.current)return;const V=X=>{const Ee=t.current;if(!Ee)return;const _e=Ee.getContext("2d");if(!_e)return;const we=150,Be=we/2;_e.clearRect(0,0,we,we),_e.save(),_e.translate(Be,Be),_e.beginPath(),_e.arc(0,0,Be-2,0,7),_e.fillStyle="rgba(11,17,23,0.85)",_e.fill(),_e.strokeStyle="rgba(242,163,60,0.55)",_e.lineWidth=1.5,_e.stroke(),_e.beginPath(),_e.arc(0,0,(Be-2)*.55,0,7),_e.strokeStyle="rgba(139,152,167,0.22)",_e.lineWidth=1,_e.stroke();const He=(Be-8)/32,Ct=Math.cos(X.yaw),Nt=Math.sin(X.yaw),cn=(Bn,zn)=>[Bn*Ct-zn*Nt,Bn*Nt+zn*Ct];_e.strokeStyle="rgba(139,152,167,0.3)",_e.beginPath(),[[-30,-30],[30,-30],[30,30],[-30,30]].forEach(([Bn,zn],Mr)=>{const[Er,ts]=cn(Bn-X.px,zn-X.pz);Mr===0?_e.moveTo(Er*He,ts*He):_e.lineTo(Er*He,ts*He)}),_e.closePath(),_e.stroke();const[tr,Sr]=cn(0,-1);_e.fillStyle="#f2a33c",_e.beginPath(),_e.arc(tr*(Be-9),Sr*(Be-9),2.4,0,7),_e.fill();for(const Bn of X.dots){const[zn,Mr]=cn(Bn.x-X.px,Bn.z-X.pz);Math.hypot(zn,Mr)*He>Be-8||(_e.fillStyle="#e0453a",_e.fillRect(zn*He-2.5,Mr*He-2.5,5,5))}_e.fillStyle="#eae6dc",_e.beginPath(),_e.moveTo(0,-6),_e.lineTo(4.4,5),_e.lineTo(-4.4,5),_e.closePath(),_e.fill(),_e.restore()},ve=X=>{Ti(ye.current,String(X.hp)),Ti(Te.current,String(X.armor)),he.current&&(he.current.style.width=`${X.hp}%`,he.current.style.background=X.hp>55?"#7fb069":X.hp>25?"#f2a33c":"#e0453a"),Fe.current&&(Fe.current.style.width=`${X.armor}%`);const Ee=ze.current;Ti(Ee,String(X.mag)),Ee&&(Ee.style.color=X.mag===0?"#e0453a":X.mag<=5?"#f2a33c":"#eae6dc"),Ti(lt.current,`/ ${X.res}`);const _e=Math.floor(X.timer/60),we=String(X.timer%60).padStart(2,"0");Ti($e.current,`${_e}:${we}`),$e.current&&$e.current.classList.toggle("blink-fast",X.timer<=10),Ti(wt.current,`${on("enemies")}: ${X.enemies}`),Bt.current&&Bt.current.style.setProperty("--g",`${X.spreadPx}px`),Z.current&&(Z.current.style.display=X.reloading?"block":"none");const Be=X.hp>0&&X.hp<35;Be!==le.current&&(le.current=Be,T(Be)),X.nades!==ge.current&&(ge.current=X.nades,x(X.nades)),Ti(U.current,X.weapon);const He=parseInt(X.weapon,10)-1;Number.isNaN(He)||W(Ct=>Ct===He?Ct:He),X.melee&&(Ti(ze.current,"—"),Ti(lt.current,"")),X.melee!==M.current&&(M.current=X.melee,E(X.melee))},F=new Vw(s.current,{hud:ve,score:(X,Ee)=>{Ti(ft.current,String(X)),Ti(dt.current,String(Ee))},kills:X=>Ti(kt.current,String(X)),hitmark:X=>{const Ee=It.current;Ee&&(Ee.classList.toggle("kill",X==="kill"),Ee.style.color=X==="kill"?"#e0453a":X==="head"?"#f2a33c":"#ffffff",hg(Ee,"go"))},damage:(X,Ee)=>{const _e=Ut.current;_e&&(_e.style.transition="none",_e.style.opacity=String(Math.min(.9,.3+X/40)),window.clearTimeout(sn.current),sn.current=window.setTimeout(()=>{_e&&(_e.style.transition="opacity .5s ease",_e.style.opacity="0")},90)),Tt.current&&(Tt.current.style.transform=`rotate(${Ee}rad)`),hg(zt.current,"show")},feed:X=>{const Ee=++ne.current;d(_e=>[{...X,id:Ee},..._e].slice(0,5)),window.setTimeout(()=>d(_e=>_e.filter(we=>we.id!==Ee)),4200)},banner:X=>{window.clearTimeout(Et.current),y({...X,id:++ne.current}),Et.current=window.setTimeout(()=>y(null),2700)},radar:V,over:X=>{g(X),a("over")},scoped:X=>w(X),wheel:X=>D(X),lockedChange:X=>{u(X);const Ee=e.current;!X&&Ee&&Ee.state==="paused"&&a("paused")}});e.current=F;const Me=Qd();return F.setSettings({volume:Me.volume,sens:Me.sens,quality:Me.quality}),()=>{F.dispose(),e.current=null}},[]),it.useEffect(()=>{let V=null;Lw().then(()=>{const F=$d()?Iw():Pw(),X=Qd().lang||F;sg(X),Ve(X),Fw().then(Ee=>{Ee&&H({...wc,...Ee})}),V=Uw(()=>{const Ee=e.current;Ee&&Ee.state==="playing"&&(Ee.pause(),a("paused"))})});const ve=()=>ae(mc&&window.innerHeight>window.innerWidth);return ve(),window.addEventListener("orientationchange",ve),window.addEventListener("resize",ve),()=>{window.removeEventListener("orientationchange",ve),window.removeEventListener("resize",ve),V==null||V()}},[]);const Re=V=>{var F;const ve={...q,...V};z(ve),Hw(ve),V.lang&&(sg(V.lang),Ve(V.lang)),(F=e.current)==null||F.setSettings({volume:ve.volume,sens:ve.sens,quality:ve.quality})},Ue=V=>{const ve={wins:G.wins+(V.result==="victory"?1:0),losses:G.losses+(V.result==="defeat"?1:0),kills:G.kills+V.kills,deaths:G.deaths+V.deaths,matches:G.matches+1,bestKills:Math.max(G.bestKills,V.kills)};H(ve),fg(ve),lg(ve)},xe=()=>{var V;if(d([]),g(null),qe(!1),L(!0),window.setTimeout(()=>L(!1),9e3),a("play"),mc)try{const ve=document.documentElement;ve.requestFullscreen&&!document.fullscreenElement&&ve.requestFullscreen().catch(()=>{})}catch{}(V=e.current)==null||V.startMatch()},Se=it.useRef(null);it.useEffect(()=>{_&&Se.current!==_&&(Se.current=_,Ue(_))},[_]);const[Le,qe]=it.useState(!1),ke=()=>{var V;$d()&&(qf(),(V=e.current)==null||V.setAudioPaused(!0),Dw(()=>{var ve,F;(ve=e.current)==null||ve.setAudioPaused(!1),(F=e.current)==null||F.addGrenadeBonus(2),qe(!0)}))};return A.jsxs("div",{className:"font-body relative h-full w-full touch-none select-none overflow-hidden overscroll-none bg-[#0d1218] text-[#eae6dc]",style:{"--ts":String($)},children:[A.jsx("div",{ref:s,className:"absolute inset-0 touch-none"}),(r==="play"||r==="paused")&&A.jsxs("div",{className:"pointer-events-none absolute inset-0 z-20",children:[P&&A.jsxs("div",{className:"pointer-events-none absolute inset-0 flex items-center justify-center",children:[A.jsx("div",{className:"absolute inset-0 bg-[#0a0e13]/70"}),A.jsxs("div",{className:"relative h-[420px] w-[420px]",children:[A.jsx("div",{className:"absolute left-1/2 top-1/2 h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2b3844] bg-[#12181f]/90"}),A.jsxs("div",{className:"font-display absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center",children:[A.jsx("div",{className:"text-[13px] tracking-widest text-[#f2a33c]",children:(De=P.items[P.active])==null?void 0:De.short}),A.jsx("div",{className:"mt-0.5 text-[9px] tracking-[0.2em] text-[#8b98a7]",children:(se=P.items[P.active])==null?void 0:se.cat})]}),P.items.map((V,ve)=>{const F=P.items.length,Me=ve/F*Math.PI*2-Math.PI/2,X=165,Ee=Math.cos(Me)*X,_e=Math.sin(Me)*X,we=ve===P.active;return A.jsxs("div",{className:`absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center border px-2.5 py-1.5 text-center transition-colors duration-75 ${we?"border-[#f2a33c] bg-[#221409]/95":"border-[#2b3844] bg-[#12181f]/85"}`,style:{left:`calc(50% + ${Ee}px)`,top:`calc(50% + ${_e}px)`},children:[A.jsx("span",{className:`font-display text-[12px] leading-tight ${we?"text-[#f2a33c]":"text-[#c8d2dd]"}`,children:V.short}),A.jsx("span",{className:"text-[8px] tracking-[0.15em] text-[#8b98a7]",children:V.cat})]},V.id)})]}),A.jsx("div",{className:"absolute bottom-14 left-1/2 -translate-x-1/2 text-[11px] font-semibold tracking-[0.25em] text-[#8b98a7]",children:"ВЕДИТЕ МЫШЬ — ВЫБОР · ОТПУСТИТЕ TAB"})]}),A.jsx("div",{className:"pointer-events-none absolute inset-0 z-10",style:{background:"radial-gradient(ellipse at center, transparent 58%, rgba(4,7,11,0.45) 100%)"}}),A.jsxs("div",{className:"absolute left-1/2 top-3 flex -translate-x-1/2 items-stretch",children:[A.jsxs("div",{className:"flex items-center gap-2 border border-[#2b4a63] bg-[#101b26]/90 px-4 py-1.5",children:[A.jsx("span",{className:"text-[10px] font-bold tracking-widest text-[#6fb7e8]",children:"ВЫ"}),A.jsx("span",{ref:ft,className:"font-display text-xl leading-none text-[#6fb7e8]",children:"0"})]}),A.jsxs("div",{className:"flex flex-col items-center justify-center border-y border-[#3a4a5c] bg-[#12181f]/95 px-5 py-1",children:[A.jsx("span",{ref:$e,className:"font-display text-2xl leading-none tracking-wider",children:"1:55"}),A.jsx("span",{ref:wt,className:"mt-0.5 text-[10px] font-semibold tracking-[0.2em] text-[#8b98a7]",children:"ОСТАЛОСЬ: 0"})]}),A.jsxs("div",{className:"flex items-center gap-2 border border-[#5c3a24] bg-[#221409]/90 px-4 py-1.5",children:[A.jsx("span",{ref:dt,className:"font-display text-xl leading-none text-[#f2a33c]",children:"0"}),A.jsx("span",{className:"text-[10px] font-bold tracking-widest text-[#f2a33c]",children:"БОТЫ"})]})]}),A.jsxs("div",{className:"absolute left-4 top-4",children:[A.jsxs("div",{className:"relative",children:[A.jsx("canvas",{ref:t,width:150,height:150,className:"h-[150px] w-[150px] max-[560px]:h-[96px] max-[560px]:w-[96px]"}),A.jsx("div",{className:"radar-sweep absolute inset-0 rounded-full border border-[#f2a33c]/30"})]}),A.jsxs("div",{className:"mt-1.5 border border-[#2b3844] bg-[#12181f]/90 px-3 py-1 text-[11px] font-bold tracking-widest text-[#8b98a7]",children:["УСТРАНЕНО: ",A.jsx("span",{ref:kt,className:"font-display text-sm text-[#f2a33c]",children:"0"})]})]}),A.jsx("div",{className:"absolute right-4 top-4 flex flex-col items-end gap-1",children:f.map(V=>A.jsxs("div",{className:"feed-in flex items-center border border-[#2b3844] bg-[#12181f]/90 px-2.5 py-1 text-[12px] font-semibold",children:[A.jsx("span",{className:V.byPlayer&&V.killer==="ВЫ"?"text-[#6fb7e8]":"text-[#f2a33c]",children:V.killer}),V.head?A.jsx("span",{className:"mx-1.5 text-[#e0453a]",children:A.jsx(Xw,{})}):V.killer==="Снабжение"||V.killer==="МАГАЗИН"?A.jsx("span",{className:"mx-1.5 text-[#7fd08a]",children:"»"}):A.jsx(Yw,{}),A.jsx("span",{className:V.victim==="ВЫ"?"text-[#e0453a]":"text-[#c8d2dd]",children:V.victim})]},V.id))}),A.jsxs("div",{ref:Bt,className:"xh absolute left-1/2 top-1/2 z-10 h-0 w-0",style:{display:N?"none":void 0},children:[A.jsx("span",{className:"xh-t"}),A.jsx("span",{className:"xh-b"}),A.jsx("span",{className:"xh-l"}),A.jsx("span",{className:"xh-r"}),A.jsx("span",{className:"xh-dot"})]}),N&&A.jsxs("div",{className:"pointer-events-none absolute inset-0 z-10",children:[A.jsx("div",{className:"absolute inset-0",style:{background:"radial-gradient(circle at center, transparent 27.5%, rgba(4,7,9,0.985) 29%)"}}),A.jsx("div",{className:"absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-black/85"}),A.jsx("div",{className:"absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-black/85"}),A.jsx("div",{className:"absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/70"}),A.jsx("div",{className:"absolute bottom-[16%] left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-[0.3em] text-[#8b98a7]/70",children:"AWP · 4× ОПТИКА"})]}),A.jsx("div",{ref:It,className:"hitmark absolute left-1/2 top-1/2 z-10 -ml-[11px] -mt-[11px]",children:A.jsx("svg",{viewBox:"0 0 22 22",className:"h-[22px] w-[22px] stroke-current",strokeWidth:"2.4",fill:"none",children:A.jsx("path",{d:"M3 3 8 8M19 3l-5 5M3 19l5-5M19 19l-5-5"})})}),A.jsx("div",{className:"absolute left-1/2 top-1/2 z-10",children:A.jsx("div",{ref:zt,className:"dmg-arrow",children:A.jsx("div",{ref:Tt,children:A.jsx("svg",{viewBox:"0 0 24 24",className:"absolute -translate-x-1/2 fill-[#e0453a]",style:{top:-116,left:0,width:26,height:26,filter:"drop-shadow(0 0 6px rgba(224,69,58,.8))"},children:A.jsx("path",{d:"M12 2 22 18h-7v4h-6v-4H2z"})})})})}),A.jsx("div",{ref:Z,className:"blink-fast absolute left-1/2 top-[57%] -translate-x-1/2 text-[13px] font-bold tracking-[0.3em] text-[#f2a33c]",style:{display:"none"},children:"ПЕРЕЗАРЯДКА"}),p&&A.jsxs("div",{className:"absolute left-1/2 top-[30%] -translate-x-1/2 text-center",children:[A.jsx("div",{className:"banner-in font-display text-5xl md:text-6xl",style:{color:p.tone==="win"?"#f2a33c":p.tone==="lose"?"#e0453a":"#eae6dc",textShadow:"0 4px 0 rgba(0,0,0,.55), 0 0 44px rgba(0,0,0,.6)"},children:p.title}),p.sub&&A.jsx("div",{className:"banner-sub-in mt-2 text-sm font-semibold tracking-[0.35em] text-[#c8d2dd] uppercase",style:{textShadow:"0 2px 6px rgba(0,0,0,.8)"},children:p.sub})]},p.id),A.jsxs("div",{className:"absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-1.5 border border-[#2b3844] bg-[#12181f]/85 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-[#8b98a7] md:flex",children:[A.jsx("span",{className:"key",children:"TAB"})," АРСЕНАЛ · ",A.jsx("span",{className:"key",children:"1–9"})," / КОЛЕСО — СМЕНА"]}),A.jsxs("div",{className:`absolute left-2 w-36 md:left-5 md:w-[240px] ${I?"bottom-[calc(9.5rem*var(--ts,1))]":"bottom-5"}`,children:[A.jsxs("div",{className:"flex items-end gap-3 border border-[#2b3844] bg-[#12181f]/90 px-4 py-2.5",children:[A.jsx("svg",{viewBox:"0 0 24 24",className:"mb-1 h-6 w-6 fill-[#e0453a]",children:A.jsx("path",{d:"M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"})}),A.jsxs("div",{className:"flex-1",children:[A.jsxs("div",{className:"flex items-baseline justify-between",children:[A.jsx("span",{ref:ye,className:"font-display text-3xl leading-none",children:"100"}),A.jsx("span",{className:"text-[10px] font-bold tracking-widest text-[#8b98a7]",children:"HP"})]}),A.jsx("div",{className:"mt-1.5 h-[7px] w-full bg-[#232d38]",children:A.jsx("div",{ref:he,className:"h-full w-full transition-[width] duration-200"})})]})]}),A.jsxs("div",{className:"mt-1.5 flex items-center gap-3 border border-[#2b3844] bg-[#12181f]/90 px-4 py-2",children:[A.jsx("span",{className:"text-[#6fb7e8]",children:A.jsx(jw,{})}),A.jsx("div",{className:"flex-1",children:A.jsx("div",{className:"h-[5px] w-full bg-[#232d38]",children:A.jsx("div",{ref:Fe,className:"h-full w-full bg-[#6fb7e8] transition-[width] duration-200"})})}),A.jsx("span",{ref:Te,className:"font-display text-base leading-none text-[#6fb7e8]",children:"100"})]})]}),A.jsxs("div",{className:`absolute right-2 text-right md:right-5 ${I?"bottom-[calc(9.5rem*var(--ts,1))]":"bottom-5"}`,children:[A.jsxs("div",{className:"border border-[#2b3844] bg-[#12181f]/90 px-3 py-1.5 md:px-5 md:py-2.5",children:[A.jsxs("div",{className:"flex items-baseline justify-end gap-2",children:[k&&A.jsx("span",{className:"font-display text-sm tracking-widest text-[#f2a33c]",children:"БЛИЖНИЙ БОЙ"}),A.jsx("span",{ref:ze,className:`font-display text-3xl leading-none md:text-5xl ${k?"hidden":""}`,children:"30"}),A.jsx("span",{ref:lt,className:`font-display text-base leading-none text-[#8b98a7] md:text-lg ${k?"hidden":""}`,children:"/ 90"})]}),A.jsxs("div",{className:"mt-1 text-[9px] font-bold tracking-[0.25em] text-[#8b98a7] md:text-[10px]",children:[A.jsx("span",{ref:U,children:"3·DEAGLE"}),!I&&A.jsx("span",{className:"ml-2 text-[#5f6d7d]",children:"TAB — АРСЕНАЛ"})]})]}),A.jsxs("div",{className:"mt-1.5 flex items-center justify-end gap-1.5 border border-[#2b3844] bg-[#12181f]/90 px-4 py-1.5 text-[#c9d68a]",children:[A.jsx("span",{className:"mr-1 text-[10px] font-bold tracking-widest text-[#8b98a7]",children:"ГРАНАТЫ"}),Array.from({length:Math.max(3,C)}).map((V,ve)=>A.jsx(Jg,{dim:ve>=C},ve))]})]}),v&&!I&&A.jsx("div",{className:"absolute bottom-6 left-1/2 -translate-x-1/2 border border-[#2b3844] bg-[#12181f]/85 px-4 py-1.5 text-[11px] font-semibold tracking-wider text-[#8b98a7]",children:"WASD — движение · ЛКМ — огонь · TAB — арсенал · 1–6 / колесо — смена · ПКМ — оптика · R — перезарядка · G — граната"}),v&&I&&A.jsxs("div",{className:"absolute bottom-32 left-4 z-40 max-w-[46vw] border border-[#2b3844] bg-[#12181f]/85 px-3 py-1.5 text-[10px] font-semibold leading-relaxed tracking-wider text-[#8b98a7]",children:["СЛЕВА — ДЖОЙСТИК · СПРАВА — ОБЗОР",A.jsx("br",{}),"КРАСНАЯ КНОПКА — ОГОНЬ"]}),!I&&!l&&r==="play"&&A.jsxs("div",{className:"absolute left-1/2 top-[62%] -translate-x-1/2 border border-[#f2a33c]/60 bg-[#221409]/90 px-5 py-2 text-center text-sm font-bold tracking-[0.14em] text-[#f2a33c]",children:["ДВИГАЙТЕ МЫШЬ — ОБЗОР · ЛКМ — ОГОНЬ",A.jsx("div",{className:"mt-0.5 text-[10px] font-semibold tracking-[0.2em] text-[#8b98a7]",children:"R — ПЕРЕЗАРЯДКА · G — ГРАНАТА · КРАЙ ЭКРАНА: ВЕРНИТЕ МЫШЬ В ЦЕНТР"})]}),A.jsx("div",{ref:Ut,className:"vignette absolute inset-0 z-30"}),S&&A.jsx("div",{className:"lowhp-pulse pointer-events-none absolute inset-0 z-30"})]}),I&&r==="play"&&A.jsx(qw,{game:()=>e.current,activeWeapon:j,onSelectWeapon:V=>{var ve;return(ve=e.current)==null?void 0:ve.switchWeaponByIndex(V)},onPause:()=>{var V;return(V=e.current)==null?void 0:V.pause()},ts:$,compact:re}),r==="menu"&&A.jsxs("div",{className:"absolute inset-0 z-40",children:[A.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(135deg, rgba(10,14,19,.98) 0%, rgba(15,20,28,.95) 50%, rgba(10,14,19,.92) 100%)"}}),A.jsx("div",{className:"smoke absolute inset-0"}),A.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f2a33c] to-transparent opacity-60"}),A.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f2a33c] to-transparent opacity-60"}),A.jsxs("div",{className:"relative flex h-full flex-col justify-start gap-6 overflow-y-auto px-4 py-8 md:flex-row md:items-center md:justify-between md:overflow-visible md:px-12 lg:px-20",children:[A.jsxs("div",{className:"max-w-xl",children:[A.jsxs("div",{className:"mb-3 flex items-center gap-3",children:[A.jsx("div",{className:"h-[2px] w-12 bg-gradient-to-r from-[#f2a33c] to-transparent"}),A.jsx("span",{className:"text-[10px] font-bold tracking-[0.5em] text-[#8b98a7] uppercase",children:"Browser FPS"})]}),A.jsxs("div",{className:"mb-4 inline-flex items-center gap-2 rounded-sm border border-[#2b3844] bg-[#12181f]/90 px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] backdrop-blur-sm",children:[A.jsx("span",{className:`inline-block h-2 w-2 rounded-full ${hn?"bg-[#f2a33c] animate-pulse":"bg-[#7fd08a]"}`}),A.jsx("span",{className:hn?"text-[#f2a33c]":"text-[#7fd08a]",children:hn?$g?"OPTIMIZED MODE":"MOBILE MODE":"FULL QUALITY"})]}),A.jsxs("h1",{className:"title-glow font-display text-[56px] leading-[0.85] tracking-tight md:text-[110px] lg:text-[130px]",children:[A.jsx("span",{className:"text-[#eae6dc]",children:"CS"}),A.jsx("span",{className:"text-[#f2a33c]",children:" 3D"})]}),A.jsxs("p",{className:"mt-4 max-w-md text-[14px] leading-relaxed text-[#aab6c4] md:text-[15px]",children:["Зачистите точку на карте ",A.jsx("span",{className:"font-bold text-[#f2a33c]",children:"Dust II"}),". Шесть стволов, гранаты и живые боты. Возьмите ",A.jsx("span",{className:"font-bold text-[#eae6dc]",children:"3 раунда"})," быстрее, чем вас застрелят."]}),A.jsx("button",{onClick:xe,className:"btn-blade mt-8 inline-block bg-[#f2a33c] px-12 py-4 text-xl text-[#14100a] hover:bg-[#ffc069]",children:A.jsx("span",{className:"inline-block skew-x-[8deg]",children:on("play")})}),A.jsxs("div",{className:"mt-3 flex gap-2.5",children:[A.jsx("button",{onClick:()=>ie(!0),className:"btn-blade border border-[#3a4a5c] bg-[#182029] px-5 py-2.5 text-sm text-[#c8d2dd] hover:border-[#f2a33c]",children:A.jsx("span",{className:"inline-block skew-x-[8deg]",children:on("settings")})}),A.jsx("button",{onClick:()=>te(!0),className:"btn-blade border border-[#3a4a5c] bg-[#182029] px-5 py-2.5 text-sm text-[#c8d2dd] hover:border-[#f2a33c]",children:A.jsx("span",{className:"inline-block skew-x-[8deg]",children:on("howto")})})]}),A.jsx("div",{className:"mt-4 text-[11px] font-semibold tracking-[0.25em] text-[#5f6d7d]",children:I?"СЕНСОРНОЕ УПРАВЛЕНИЕ · ДЖОЙСТИК + ЗОНА ОБЗОРА":"КЛИК — ЗАХВАТ МЫШИ · ESC — ПАУЗА"}),A.jsx("div",{className:"mt-5 grid max-w-md grid-cols-4 gap-2",children:[{v:G.wins,l:"ПОБЕД"},{v:G.bestKills,l:"РЕКОРД ФРАГОВ"},{v:G.kills,l:"ВСЕГО ФРАГОВ"},{v:G.matches,l:"МАТЧЕЙ"}].map(V=>A.jsxs("div",{className:"border border-[#2b3844] bg-[#12181f]/85 px-2 py-2 text-center",children:[A.jsx("div",{className:"font-display text-xl text-[#f2a33c]",children:V.v}),A.jsx("div",{className:"mt-0.5 text-[8px] font-bold tracking-[0.15em] text-[#8b98a7]",children:V.l})]},V.l))})]}),A.jsxs("div",{className:"flex w-full max-w-sm flex-col gap-4",children:[A.jsxs("div",{className:"border border-[#2b3844] bg-[#12181f]/95",children:[A.jsxs("div",{className:"border-b border-[#2b3844] bg-[#182029] px-4 py-2 text-[11px] font-bold tracking-[0.3em] text-[#f2a33c]",children:["УПРАВЛЕНИЕ ",I&&A.jsx("span",{className:"ml-1 text-[#6fb7e8]",children:"· СЕНСОР"})]}),I?A.jsxs("div",{className:"grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2 px-4 py-3 text-[12px] text-[#aab6c4]",children:[A.jsx("span",{className:"key",children:"◐"}),A.jsx("span",{children:"левая зона — джойстик движения"}),A.jsx("span",{className:"key",children:"◑"}),A.jsx("span",{children:"правая зона — обзор (веди пальцем)"}),A.jsx("span",{className:"key",children:"●"}),A.jsx("span",{children:"красная кнопка — огонь (удерживай)"}),A.jsx("span",{className:"key",children:"R"}),A.jsx("span",{children:"кнопка перезарядки"}),A.jsx("span",{className:"key",children:"G"}),A.jsx("span",{children:"кнопка гранаты"}),A.jsx("span",{className:"key",children:"⌖"}),A.jsx("span",{children:"кнопка прыжка — запрыгивай на ящики и контейнеры"}),A.jsx("span",{className:"key",children:"1–6"}),A.jsx("span",{children:"слоты оружия сверху — тап для выбора"}),A.jsx("span",{className:"key",children:"ОПТ"}),A.jsx("span",{children:"оптика AWP ×4"}),A.jsx("span",{className:"key",children:"▮▮"}),A.jsx("span",{children:"пауза (справа сверху)"})]}):A.jsxs("div",{className:"grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2 px-4 py-3 text-[12px] text-[#aab6c4]",children:[A.jsxs("span",{children:[A.jsx("span",{className:"key",children:"W"})," ",A.jsx("span",{className:"key",children:"A"})," ",A.jsx("span",{className:"key",children:"S"})," ",A.jsx("span",{className:"key",children:"D"})]}),A.jsx("span",{children:"передвижение"}),A.jsx("span",{children:A.jsx("span",{className:"key",children:"МЫШЬ"})}),A.jsx("span",{children:"обзор — движение мыши, курсор в бою скрыт"}),A.jsx("span",{children:A.jsx("span",{className:"key",children:"ЛКМ"})}),A.jsx("span",{children:"огонь из AK-47"}),A.jsx("span",{children:A.jsx("span",{className:"key",children:"R"})}),A.jsx("span",{children:"перезарядка"}),A.jsx("span",{children:A.jsx("span",{className:"key",children:"G"})}),A.jsx("span",{children:"граната"}),A.jsx("span",{children:A.jsx("span",{className:"key",children:"SHIFT"})}),A.jsx("span",{children:"тихий шаг — точность выше"}),A.jsx("span",{children:A.jsx("span",{className:"key",children:"SPACE"})}),A.jsx("span",{children:"прыжок — можно запрыгивать на ящики и контейнеры"}),A.jsx("span",{children:A.jsx("span",{className:"key",children:"TAB"})}),A.jsx("span",{children:"арсенал: AK-47, UZI, P90, AWP, Deagle и нож"}),A.jsxs("span",{children:[A.jsx("span",{className:"key",children:"1"}),"–",A.jsx("span",{className:"key",children:"9"})," / колесо"]}),A.jsx("span",{children:"быстрая смена оружия"}),A.jsx("span",{children:A.jsx("span",{className:"key",children:"ПКМ"})}),A.jsx("span",{children:"оптика AWP ×4"}),A.jsx("span",{children:A.jsx("span",{className:"key",children:"ESC"})}),A.jsx("span",{children:"пауза"})]})]}),A.jsxs("div",{className:"border border-[#2b3844] bg-[#12181f]/95",children:[A.jsx("div",{className:"border-b border-[#2b3844] bg-[#182029] px-4 py-2 text-[11px] font-bold tracking-[0.3em] text-[#f2a33c]",children:"БРИФИНГ"}),A.jsxs("ul",{className:"space-y-1.5 px-4 py-3 text-[12px] leading-relaxed text-[#aab6c4]",children:[A.jsxs("li",{children:["Карта — ",A.jsx("span",{className:"font-bold text-[#f2a33c]",children:"Dust II"}),": лонг A, мид, вышка с лестницей — заберитесь на неё или на контейнеры."]}),A.jsxs("li",{children:["Арсенал — ",A.jsx("span",{className:"key",children:"TAB"}),": AK-47, UZI, P90, AWP, Deagle и нож. Колесо мыши листает стволы."]}),A.jsxs("li",{children:[A.jsx("span",{className:"font-bold text-[#eae6dc]",children:"Хедшот"})," — урон ×4. AWP убивает с тела, ",A.jsx("span",{className:"key",children:"ПКМ"})," — оптика ×4."]}),A.jsxs("li",{children:[A.jsx("span",{className:"key",children:"SPACE"})," — прыжок: запрыгивайте на ящики, бочки и контейнеры для обзора сверху."]}),A.jsxs("li",{children:["Матч до ",A.jsx("span",{className:"font-bold text-[#f2a33c]",children:"3 побед"}),", раунд — 1:55. Боты злеют с каждым раундом."]})]})]})]})]})]}),r==="paused"&&A.jsx("div",{className:"absolute inset-0 z-40 flex items-center justify-center bg-[#0a0e13]/85",children:A.jsxs("div",{className:"w-[380px] border border-[#2b3844] bg-[#12181f]",children:[A.jsx("div",{className:"hazard h-1.5 w-full opacity-70"}),A.jsxs("div",{className:"px-8 py-7",children:[A.jsx("div",{className:"font-display text-4xl tracking-wider",children:on("paused")}),A.jsx("div",{className:"mt-1 text-[11px] font-semibold tracking-[0.3em] text-[#8b98a7]",children:on("pausedSub")}),A.jsxs("div",{className:"mt-6 flex flex-col gap-2.5",children:[A.jsx("button",{onClick:()=>{var V;(V=e.current)==null||V.resume(),a("play")},className:"btn-blade bg-[#f2a33c] px-6 py-3 text-base text-[#14100a] hover:bg-[#ffc069]",children:A.jsx("span",{className:"inline-block skew-x-[8deg]",children:on("resume")})}),A.jsx("button",{onClick:()=>{ie(!0)},className:"btn-blade border border-[#3a4a5c] bg-[#182029] px-6 py-3 text-base text-[#c8d2dd] hover:border-[#f2a33c]",children:A.jsx("span",{className:"inline-block skew-x-[8deg]",children:on("settings")})}),A.jsx("button",{onClick:()=>{var V;(V=e.current)==null||V.toMenu(),a("menu")},className:"btn-blade border border-[#3a4a5c] bg-[#182029] px-6 py-3 text-base text-[#c8d2dd] hover:border-[#f2a33c]",children:A.jsx("span",{className:"inline-block skew-x-[8deg]",children:on("toMenu")})})]}),A.jsxs("div",{className:"mt-6 border-t border-[#2b3844] pt-4 text-[11px] leading-relaxed text-[#5f6d7d]",children:[A.jsx("span",{className:"key",children:"W"}),A.jsx("span",{className:"key",children:"A"}),A.jsx("span",{className:"key",children:"S"}),A.jsx("span",{className:"key",children:"D"})," движение · ",A.jsx("span",{className:"key",children:"ЛКМ"})," огонь · ",A.jsx("span",{className:"key",children:"R"})," перезарядка · ",A.jsx("span",{className:"key",children:"G"})," граната"]})]})]})}),r==="over"&&_&&A.jsx("div",{className:"absolute inset-0 z-40 flex items-center justify-center bg-[#0a0e13]/80 p-4",children:A.jsxs("div",{className:"w-full max-w-[440px] border border-[#2b3844] bg-[#12181f]",children:[A.jsx("div",{className:"hazard h-1.5 w-full opacity-70"}),A.jsxs("div",{className:"max-h-[75vh] overflow-y-auto px-6 py-6 text-center md:px-10 md:py-8",children:[A.jsx("div",{className:"text-[11px] font-bold tracking-[0.4em] text-[#8b98a7]",children:on("matchOver")}),A.jsx("div",{className:"title-glow font-display mt-2 text-6xl",style:{color:_.result==="victory"?"#f2a33c":"#e0453a"},children:_.result==="victory"?on("victory"):on("defeat")}),A.jsxs("div",{className:"font-display mt-3 text-3xl text-[#eae6dc]",children:[A.jsx("span",{className:"text-[#6fb7e8]",children:_.won}),A.jsx("span",{className:"mx-2 text-[#5f6d7d]",children:":"}),A.jsx("span",{className:"text-[#f2a33c]",children:_.lost})]}),A.jsxs("div",{className:"mt-6 grid grid-cols-2 gap-2.5",children:[A.jsxs("div",{className:"border border-[#2b3844] bg-[#182029] px-4 py-3",children:[A.jsx("div",{className:"font-display text-3xl text-[#f2a33c]",children:_.kills}),A.jsx("div",{className:"mt-0.5 text-[10px] font-bold tracking-[0.25em] text-[#8b98a7]",children:on("eliminated")})]}),A.jsxs("div",{className:"border border-[#2b3844] bg-[#182029] px-4 py-3",children:[A.jsx("div",{className:"font-display text-3xl text-[#e0453a]",children:_.deaths}),A.jsx("div",{className:"mt-0.5 text-[10px] font-bold tracking-[0.25em] text-[#8b98a7]",children:on("deaths")})]})]}),A.jsxs("div",{className:"mt-7 flex flex-col gap-2.5",children:[A.jsx("button",{onClick:xe,className:"btn-blade bg-[#f2a33c] px-6 py-3 text-base text-[#14100a] hover:bg-[#ffc069]",children:A.jsx("span",{className:"inline-block skew-x-[8deg]",children:on("restart")})}),A.jsx("button",{onClick:()=>{var V;(V=e.current)==null||V.toMenu(),a("menu")},className:"btn-blade border border-[#3a4a5c] bg-[#182029] px-6 py-3 text-base text-[#c8d2dd] hover:border-[#f2a33c]",children:A.jsx("span",{className:"inline-block skew-x-[8deg]",children:"В МЕНЮ"})})]})]})]})}),K&&A.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-[#0a0e13]/85 p-4",children:A.jsxs("div",{className:"w-full max-w-md border border-[#2b3844] bg-[#12181f]",children:[A.jsx("div",{className:"hazard h-1.5 w-full opacity-70"}),A.jsxs("div",{className:"px-7 py-6",children:[A.jsxs("div",{className:"flex items-center justify-between",children:[A.jsx("div",{className:"font-display text-3xl tracking-wider",children:"НАСТРОЙКИ"}),A.jsx("button",{onClick:()=>ie(!1),className:"border border-[#3a4a5c] bg-[#182029] px-3 py-1.5 text-xs font-bold tracking-widest text-[#c8d2dd] hover:border-[#f2a33c]",children:"✕"})]}),A.jsxs("div",{className:"mt-5",children:[A.jsxs("div",{className:"mb-1.5 flex justify-between text-[11px] font-bold tracking-[0.2em] text-[#8b98a7]",children:[A.jsx("span",{children:"ГРОМКОСТЬ"}),A.jsxs("span",{className:"text-[#f2a33c]",children:[Math.round(q.volume*100),"%"]})]}),A.jsx("input",{type:"range",min:0,max:100,value:Math.round(q.volume*100),onChange:V=>Re({volume:Number(V.target.value)/100}),className:"w-full accent-[#f2a33c]"})]}),A.jsxs("div",{className:"mt-4",children:[A.jsxs("div",{className:"mb-1.5 flex justify-between text-[11px] font-bold tracking-[0.2em] text-[#8b98a7]",children:[A.jsx("span",{children:"ЧУВСТВИТЕЛЬНОСТЬ МЫШИ"}),A.jsxs("span",{className:"text-[#f2a33c]",children:[q.sens.toFixed(1),"×"]})]}),A.jsx("input",{type:"range",min:30,max:250,value:Math.round(q.sens*100),onChange:V=>Re({sens:Number(V.target.value)/100}),className:"w-full accent-[#f2a33c]"})]}),A.jsxs("div",{className:"mt-4",children:[A.jsx("div",{className:"mb-1.5 text-[11px] font-bold tracking-[0.2em] text-[#8b98a7]",children:"КАЧЕСТВО ГРАФИКИ"}),A.jsx("div",{className:"flex gap-2",children:["auto","high","low"].map(V=>A.jsx("button",{onClick:()=>Re({quality:V}),className:`flex-1 border px-3 py-2 text-xs font-bold tracking-widest ${q.quality===V?"border-[#f2a33c] bg-[#3a2a12]/80 text-[#f2a33c]":"border-[#3a4a5c] bg-[#182029] text-[#8b98a7] hover:border-[#f2a33c]"}`,children:V==="auto"?"АВТО":V==="high"?"ВЫСОКОЕ":"НИЗКОЕ"},V))})]}),A.jsxs("div",{className:"mt-4",children:[A.jsx("div",{className:"mb-1.5 text-[11px] font-bold tracking-[0.2em] text-[#8b98a7]",children:"ЯЗЫК"}),A.jsx("div",{className:"flex gap-2",children:["ru","en"].map(V=>A.jsx("button",{onClick:()=>Re({lang:V}),className:`flex-1 border px-3 py-2 text-sm font-bold tracking-widest ${q.lang===V?"border-[#f2a33c] bg-[#3a2a12]/80 text-[#f2a33c]":"border-[#3a4a5c] bg-[#182029] text-[#8b98a7] hover:border-[#f2a33c]"}`,children:V==="ru"?"РУССКИЙ":"ENGLISH"},V))})]}),A.jsx("button",{onClick:()=>{const V={...wc};H(V),fg(V),lg(V)},className:"mt-5 w-full border border-[#5c2a24] bg-[#221409] px-4 py-2 text-xs font-bold tracking-[0.2em] text-[#e0453a] hover:border-[#e0453a]",children:"СБРОСИТЬ ПРОГРЕСС"})]})]})}),O&&A.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-[#0a0e13]/85 p-4",children:A.jsxs("div",{className:"w-full max-w-lg border border-[#2b3844] bg-[#12181f]",children:[A.jsx("div",{className:"hazard h-1.5 w-full opacity-70"}),A.jsxs("div",{className:"max-h-[80vh] overflow-y-auto px-7 py-6",children:[A.jsxs("div",{className:"flex items-center justify-between",children:[A.jsx("div",{className:"font-display text-3xl tracking-wider",children:"УПРАВЛЕНИЕ"}),A.jsx("button",{onClick:()=>te(!1),className:"border border-[#3a4a5c] bg-[#182029] px-3 py-1.5 text-xs font-bold tracking-widest text-[#c8d2dd] hover:border-[#f2a33c]",children:"✕"})]}),A.jsxs("div",{className:"mt-4 space-y-2 text-[13px] leading-relaxed text-[#aab6c4]",children:[I?A.jsxs(A.Fragment,{children:[A.jsxs("p",{children:[A.jsx("span",{className:"key",children:"◐"})," левая зона — джойстик движения"]}),A.jsxs("p",{children:[A.jsx("span",{className:"key",children:"◑"})," правая зона — обзор (веди пальцем)"]}),A.jsxs("p",{children:[A.jsx("span",{className:"key",children:"●"})," красная кнопка — огонь (удерживай)"]}),A.jsxs("p",{children:[A.jsx("span",{className:"key",children:"⌖"})," — прыжок · ",A.jsx("span",{className:"key",children:"R"})," — перезарядка · ",A.jsx("span",{className:"key",children:"G"})," — граната"]}),A.jsxs("p",{children:[A.jsx("span",{className:"key",children:"1–6"})," — слоты оружия сверху (тап для выбора)"]}),A.jsxs("p",{children:[A.jsx("span",{className:"key",children:"ОПТ"})," — оптика AWP · ",A.jsx("span",{className:"key",children:"▮▮"})," — пауза"]})]}):A.jsxs(A.Fragment,{children:[A.jsxs("p",{children:[A.jsx("span",{className:"key",children:"W"}),A.jsx("span",{className:"key",children:"A"}),A.jsx("span",{className:"key",children:"S"}),A.jsx("span",{className:"key",children:"D"})," — передвижение"]}),A.jsxs("p",{children:[A.jsx("span",{className:"key",children:"МЫШЬ"})," — обзор (движение мыши, курсор в бою скрыт)"]}),A.jsxs("p",{children:[A.jsx("span",{className:"key",children:"ЛКМ"})," — огонь · ",A.jsx("span",{className:"key",children:"ПКМ"})," — оптика AWP ×4"]}),A.jsxs("p",{children:[A.jsx("span",{className:"key",children:"R"})," — перезарядка · ",A.jsx("span",{className:"key",children:"G"})," — граната"]}),A.jsxs("p",{children:[A.jsx("span",{className:"key",children:"SHIFT"})," — тихий шаг (выше точность) · ",A.jsx("span",{className:"key",children:"SPACE"})," — прыжок"]}),A.jsxs("p",{children:[A.jsx("span",{className:"key",children:"TAB"})," — арсенал · ",A.jsx("span",{className:"key",children:"1"}),"–",A.jsx("span",{className:"key",children:"9"})," / колесо — смена оружия"]}),A.jsxs("p",{children:[A.jsx("span",{className:"key",children:"ESC"})," — пауза"]})]}),A.jsx("p",{className:"border-t border-[#2b3844] pt-3 text-[12px] text-[#8b98a7]",children:"Прыгайте на ящики, бочки и контейнеры, чтобы занять высоту. Хедшот — урон ×4. AWP убивает с тела."})]})]})]})}),r==="over"&&$d()&&!Le&&A.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-6 z-40 flex justify-center",children:A.jsx("button",{onClick:ke,className:"btn-blade pointer-events-auto border border-[#7fd08a] bg-[#0f1b14]/95 px-6 py-2.5 text-sm text-[#7fd08a] hover:bg-[#16291c]",children:A.jsx("span",{className:"inline-block skew-x-[8deg]",children:"📺 РЕКЛАМА: +2 ГРАНАТЫ В СЛЕДУЮЩЕМ МАТЧЕ"})})})]})}Gx.createRoot(document.getElementById("root")).render(A.jsx(Kw,{}));
