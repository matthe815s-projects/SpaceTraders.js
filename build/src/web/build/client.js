"use strict";
/*! For license information please see client.js.LICENSE.txt */
(function () {
    "use strict";
    var e, t, r = { 408: function (e, t) { var r = Symbol.for("react.element"), n = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), c = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), s = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), d = Symbol.iterator, y = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, _ = Object.assign, h = {}; function m(e, t, r) { this.props = e, this.context = t, this.refs = h, this.updater = r || y; } function v() { } function b(e, t, r) { this.props = e, this.context = t, this.refs = h, this.updater = r || y; } m.prototype.isReactComponent = {}, m.prototype.setState = function (e, t) { if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, e, t, "setState"); }, m.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate"); }, v.prototype = m.prototype; var S = b.prototype = new v; S.constructor = b, _(S, m.prototype), S.isPureReactComponent = !0; var E = Array.isArray, j = Object.prototype.hasOwnProperty, O = { current: null }, w = { key: !0, ref: !0, __self: !0, __source: !0 }; function g(e, t, n) { var u, o = {}, a = null, l = null; if (null != t)
            for (u in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (a = "" + t.key), t)
                j.call(t, u) && !w.hasOwnProperty(u) && (o[u] = t[u]); var c = arguments.length - 2; if (1 === c)
            o.children = n;
        else if (1 < c) {
            for (var i = Array(c), f = 0; f < c; f++)
                i[f] = arguments[f + 2];
            o.children = i;
        } if (e && e.defaultProps)
            for (u in c = e.defaultProps)
                void 0 === o[u] && (o[u] = c[u]); return { $$typeof: r, type: e, key: a, ref: l, props: o, _owner: O.current }; } function R(e) { return "object" == typeof e && null !== e && e.$$typeof === r; } var $ = /\/+/g; function k(e, t) { return "object" == typeof e && null !== e && null != e.key ? function (e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, (function (e) { return t[e]; })); }("" + e.key) : t.toString(36); } function P(e, t, u, o, a) { var l = typeof e; "undefined" !== l && "boolean" !== l || (e = null); var c = !1; if (null === e)
            c = !0;
        else
            switch (l) {
                case "string":
                case "number":
                    c = !0;
                    break;
                case "object": switch (e.$$typeof) {
                    case r:
                    case n: c = !0;
                }
            } if (c)
            return a = a(c = e), e = "" === o ? "." + k(c, 0) : o, E(a) ? (u = "", null != e && (u = e.replace($, "$&/") + "/"), P(a, t, u, "", (function (e) { return e; }))) : null != a && (R(a) && (a = function (e, t) { return { $$typeof: r, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }; }(a, u + (!a.key || c && c.key === a.key ? "" : ("" + a.key).replace($, "$&/") + "/") + e)), t.push(a)), 1; if (c = 0, o = "" === o ? "." : o + ":", E(e))
            for (var i = 0; i < e.length; i++) {
                var f = o + k(l = e[i], i);
                c += P(l, t, u, f, a);
            }
        else if (f = function (e) { return null === e || "object" != typeof e ? null : "function" == typeof (e = d && e[d] || e["@@iterator"]) ? e : null; }(e), "function" == typeof f)
            for (e = f.call(e), i = 0; !(l = e.next()).done;)
                c += P(l = l.value, t, u, f = o + k(l, i++), a);
        else if ("object" === l)
            throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."); return c; } function C(e, t, r) { if (null == e)
            return e; var n = [], u = 0; return P(e, n, "", "", (function (e) { return t.call(r, e, u++); })), n; } function x(e) { if (-1 === e._status) {
            var t = e._result;
            (t = t()).then((function (t) { 0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t); }), (function (t) { 0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t); })), -1 === e._status && (e._status = 0, e._result = t);
        } if (1 === e._status)
            return e._result.default; throw e._result; } var M = { current: null }, D = { transition: null }, I = { ReactCurrentDispatcher: M, ReactCurrentBatchConfig: D, ReactCurrentOwner: O }; t.Children = { map: C, forEach: function (e, t, r) { C(e, (function () { t.apply(this, arguments); }), r); }, count: function (e) { var t = 0; return C(e, (function () { t++; })), t; }, toArray: function (e) { return C(e, (function (e) { return e; })) || []; }, only: function (e) { if (!R(e))
                throw Error("React.Children.only expected to receive a single React element child."); return e; } }, t.Component = m, t.Fragment = u, t.Profiler = a, t.PureComponent = b, t.StrictMode = o, t.Suspense = f, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I, t.cloneElement = function (e, t, n) { if (null == e)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + "."); var u = _({}, e.props), o = e.key, a = e.ref, l = e._owner; if (null != t) {
            if (void 0 !== t.ref && (a = t.ref, l = O.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps)
                var c = e.type.defaultProps;
            for (i in t)
                j.call(t, i) && !w.hasOwnProperty(i) && (u[i] = void 0 === t[i] && void 0 !== c ? c[i] : t[i]);
        } var i = arguments.length - 2; if (1 === i)
            u.children = n;
        else if (1 < i) {
            c = Array(i);
            for (var f = 0; f < i; f++)
                c[f] = arguments[f + 2];
            u.children = c;
        } return { $$typeof: r, type: e.type, key: o, ref: a, props: u, _owner: l }; }, t.createContext = function (e) { return (e = { $$typeof: c, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }).Provider = { $$typeof: l, _context: e }, e.Consumer = e; }, t.createElement = g, t.createFactory = function (e) { var t = g.bind(null, e); return t.type = e, t; }, t.createRef = function () { return { current: null }; }, t.forwardRef = function (e) { return { $$typeof: i, render: e }; }, t.isValidElement = R, t.lazy = function (e) { return { $$typeof: p, _payload: { _status: -1, _result: e }, _init: x }; }, t.memo = function (e, t) { return { $$typeof: s, type: e, compare: void 0 === t ? null : t }; }, t.startTransition = function (e) { var t = D.transition; D.transition = {}; try {
            e();
        }
        finally {
            D.transition = t;
        } }, t.unstable_act = function () { throw Error("act(...) is not supported in production builds of React."); }, t.useCallback = function (e, t) { return M.current.useCallback(e, t); }, t.useContext = function (e) { return M.current.useContext(e); }, t.useDebugValue = function () { }, t.useDeferredValue = function (e) { return M.current.useDeferredValue(e); }, t.useEffect = function (e, t) { return M.current.useEffect(e, t); }, t.useId = function () { return M.current.useId(); }, t.useImperativeHandle = function (e, t, r) { return M.current.useImperativeHandle(e, t, r); }, t.useInsertionEffect = function (e, t) { return M.current.useInsertionEffect(e, t); }, t.useLayoutEffect = function (e, t) { return M.current.useLayoutEffect(e, t); }, t.useMemo = function (e, t) { return M.current.useMemo(e, t); }, t.useReducer = function (e, t, r) { return M.current.useReducer(e, t, r); }, t.useRef = function (e) { return M.current.useRef(e); }, t.useState = function (e) { return M.current.useState(e); }, t.useSyncExternalStore = function (e, t, r) { return M.current.useSyncExternalStore(e, t, r); }, t.useTransition = function () { return M.current.useTransition(); }, t.version = "18.2.0"; }, 294: function (e, t, r) { e.exports = r(408); }, 742: function (e, t, r) { var n = this && this.__createBinding || (Object.create ? function (e, t, r, n) { void 0 === n && (n = r); var u = Object.getOwnPropertyDescriptor(t, r); u && !("get" in u ? !t.__esModule : u.writable || u.configurable) || (u = { enumerable: !0, get: function () { return t[r]; } }), Object.defineProperty(e, n, u); } : function (e, t, r, n) { void 0 === n && (n = r), e[n] = t[r]; }), u = this && this.__setModuleDefault || (Object.create ? function (e, t) { Object.defineProperty(e, "default", { enumerable: !0, value: t }); } : function (e, t) { e.default = t; }), o = this && this.__importStar || function (e) { if (e && e.__esModule)
            return e; var t = {}; if (null != e)
            for (var r in e)
                "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r); return u(t, e), t; }, a = this && this.__importDefault || function (e) { return e && e.__esModule ? e : { default: e }; }; Object.defineProperty(t, "__esModule", { value: !0 }); var l = o(r(294)), c = a(r(955)); t.default = function () { var e = (0, l.useState)(0), t = e[0]; return e[1], l.default.createElement(l.default.Fragment, null, l.default.createElement("head", null, l.default.createElement("title", null, "SpaceTraders")), l.default.createElement("body", null, 0 === t ? l.default.createElement(c.default, null) : null)); }; }, 955: function (e, t, r) { var n = this && this.__importDefault || function (e) { return e && e.__esModule ? e : { default: e }; }; Object.defineProperty(t, "__esModule", { value: !0 }); var u = n(r(294)); function o() { return fetch("/api/ships").then((function (e) { return e.json(); })).then(console.log), u.default.createElement("div", null); } t.default = o, o.Ship = function (e) { var t = e.ship; return u.default.createElement("div", null, u.default.createElement("h3", null, t.symbol), u.default.createElement("p", null, t.fuel.current, " / ", t.fuel.capacity)); }; } }, n = {};
    function u(e) { var t = n[e]; if (void 0 !== t)
        return t.exports; var o = n[e] = { exports: {} }; return r[e].call(o.exports, o, o.exports, u), o.exports; }
    u.n = function (e) { var t = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return u.d(t, { a: t }), t; }, u.d = function (e, t) { for (var r in t)
        u.o(t, r) && !u.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] }); }, u.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, e = u(742), t = u.n(e), ReactDOM.render(React.createElement(t(), null), document.getElementById("root"));
})();
