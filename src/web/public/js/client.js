/*! For license information please see client.js.LICENSE.txt */
(()=>{"use strict";var e={408:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),s=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),y=Symbol.iterator,d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,h={};function m(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||d}function v(){}function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var S=b.prototype=new v;S.constructor=b,_(S,m.prototype),S.isPureReactComponent=!0;var E=Array.isArray,$=Object.prototype.hasOwnProperty,w={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var u,o={},a=null,c=null;if(null!=t)for(u in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)$.call(t,u)&&!R.hasOwnProperty(u)&&(o[u]=t[u]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var l=Array(i),f=0;f<i;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(u in i=e.defaultProps)void 0===o[u]&&(o[u]=i[u]);return{$$typeof:r,type:e,key:a,ref:c,props:o,_owner:w.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var C=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function g(e,t,u,o,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case n:i=!0}}if(i)return a=a(i=e),e=""===o?"."+x(i,0):o,E(a)?(u="",null!=e&&(u=e.replace(C,"$&/")+"/"),g(a,t,u,"",(function(e){return e}))):null!=a&&(j(a)&&(a=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,u+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),t.push(a)),1;if(i=0,o=""===o?".":o+":",E(e))for(var l=0;l<e.length;l++){var f=o+x(c=e[l],l);i+=g(c,t,u,f,a)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),l=0;!(c=e.next()).done;)i+=g(c=c.value,t,u,f=o+x(c,l++),a);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function O(e,t,r){if(null==e)return e;var n=[],u=0;return g(e,n,"","",(function(e){return t.call(r,e,u++)})),n}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},T={transition:null},D={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:T,ReactCurrentOwner:w};t.Children={map:O,forEach:function(e,t,r){O(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!j(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=u,t.Profiler=a,t.PureComponent=b,t.StrictMode=o,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var u=_({},e.props),o=e.key,a=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,c=w.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(l in t)$.call(t,l)&&!R.hasOwnProperty(l)&&(u[l]=void 0===t[l]&&void 0!==i?i[l]:t[l])}var l=arguments.length-2;if(1===l)u.children=n;else if(1<l){i=Array(l);for(var f=0;f<l;f++)i[f]=arguments[f+2];u.children=i}return{$$typeof:r,type:e.type,key:o,ref:a,props:u,_owner:c}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=j,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,r){return I.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,r){return I.current.useReducer(e,t,r)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return I.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return I.current.useTransition()},t.version="18.2.0"},294:(e,t,r)=>{e.exports=r(408)},78:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=n(r(294));t.default=function(e){var t=e.children;return u.default.createElement("html",null,u.default.createElement("head",null,u.default.createElement("title",null,"SpaceTraders"),u.default.createElement("script",{src:"/js/client.js"})),u.default.createElement("body",null,t))}}},t={};!function r(n){var u=t[n];if(void 0!==u)return u.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}(78)})();