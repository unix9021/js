/*!jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license*/
!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
     : t(e)
}
("undefined" != typeof window ? window : this, (function (e, t) {
        "use strict";
        var n = [],
        i = e.document,
        r = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        l = n.indexOf,
        c = {},
        u = c.toString,
        d = c.hasOwnProperty,
        p = d.toString,
        f = p.call(Object),
        m = {},
        h = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        g = function (e) {
            return null != e && e === e.window
        },
        v = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };
        function y(e, t, n) {
            var r,
            o,
            a = (n = n || i).createElement("script");
            if (a.text = e, t)
                for (r in v)
                    (o = t[r] || t.getAttribute && t.getAttribute(r)) && a.setAttribute(r, o);
            n.head.appendChild(a).parentNode.removeChild(a)
        }
        function x(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[u.call(e)] || "object" : typeof e
        }
        var b = "3.4.1",
        w = function (e, t) {
            return new w.fn.init(e, t)
        },
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        function k(e) {
            var t = !!e && "length" in e && e.length,
            n = x(e);
            return !h(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
        }
        w.fn = w.prototype = {
            jquery: b,
            constructor: w,
            length: 0,
            toArray: function () {
                return o.call(this)
            },
            get: function (e) {
                return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function (e) {
                var t = w.merge(this.constructor(), e);
                return t.prevObject = this,
                t
            },
            each: function (e) {
                return w.each(this, e)
            },
            map: function (e) {
                return this.pushStack(w.map(this, (function (t, n) {
                            return e.call(t, n, t)
                        })))
            },
            slice: function () {
                return this.pushStack(o.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (e) {
                var t = this.length,
                n = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= n && n < t ? [this[n]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor()
            },
            push: s,
            sort: n.sort,
            splice: n.splice
        },
        w.extend = w.fn.extend = function () {
            var e,
            t,
            n,
            i,
            r,
            o,
            a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || h(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        i = e[t], "__proto__" !== t && a !== i && (c && i && (w.isPlainObject(i) || (r = Array.isArray(i))) ? (n = a[t], o = r && !Array.isArray(n) ? [] : r || w.isPlainObject(n) ? n : {}, r = !1, a[t] = w.extend(c, o, i)) : void 0 !== i && (a[t] = i));
            return a
        },
        w.extend({
            expando: "jQuery" + (b + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e)
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t,
                n;
                return !(!e || "[object Object]" !== u.call(e) || (t = r(e)) && ("function" != typeof(n = d.call(t, "constructor") && t.constructor) || p.call(n) !== f))
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            globalEval: function (e, t) {
                y(e, {
                    nonce: t && t.nonce
                })
            },
            each: function (e, t) {
                var n,
                i = 0;
                if (k(e))
                    for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i]))
                            break;
                return e
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(C, "")
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (k(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)),
                n
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : l.call(t, e, n)
            },
            merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                    e[r++] = t[i];
                return e.length = r,
                e
            },
            grep: function (e, t, n) {
                for (var i = [], r = 0, o = e.length, a = !n; r < o; r++)
                    !t(e[r], r) !== a && i.push(e[r]);
                return i
            },
            map: function (e, t, n) {
                var i,
                r,
                o = 0,
                s = [];
                if (k(e))
                    for (i = e.length; o < i; o++)
                        null != (r = t(e[o], o, n)) && s.push(r);
                else
                    for (o in e)
                        null != (r = t(e[o], o, n)) && s.push(r);
                return a.apply([], s)
            },
            guid: 1,
            support: m
        }),
        "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
        w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (e, t) {
                c["[object " + t + "]"] = t.toLowerCase()
            }));
        var T = function (e) {
            var t,
            n,
            i,
            r,
            o,
            a,
            s,
            l,
            c,
            u,
            d,
            p,
            f,
            m,
            h,
            g,
            v,
            y,
            x,
            b = "sizzle" + 1 * new Date,
            w = e.document,
            C = 0,
            k = 0,
            T = le(),
            _ = le(),
            $ = le(),
            E = le(),
            S = function (e, t) {
                return e === t && (d = !0),
                0
            },
            j = {}
            .hasOwnProperty,
            A = [],
            D = A.pop,
            N = A.push,
            L = A.push,
            I = A.slice,
            F = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t)
                        return n;
                return -1
            },
            q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            O = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            H = "\\[" + P + "*(" + O + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + P + "*\\]",
            R = ":(" + O + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
            M = new RegExp(P + "+", "g"),
            B = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
            U = new RegExp("^" + P + "*," + P + "*"),
            W = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            z = new RegExp(P + "|>"),
            X = new RegExp(R),
            V = new RegExp("^" + O + "$"),
            G = {
                ID: new RegExp("^#(" + O + ")"),
                CLASS: new RegExp("^\\.(" + O + ")"),
                TAG: new RegExp("^(" + O + "|[*])"),
                ATTR: new RegExp("^" + H),
                PSEUDO: new RegExp("^" + R),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + q + ")$", "i"),
                needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
            },
            J = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
            ne = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            re = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function () {
                p()
            },
            ae = be((function (e) {
                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                    }), {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                L.apply(A = I.call(w.childNodes), w.childNodes),
                A[w.childNodes.length].nodeType
            } catch (t) {
                L = {
                    apply: A.length ? function (e, t) {
                        N.apply(e, I.call(t))
                    }
                     : function (e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++]; );
                        e.length = n - 1
                    }
                }
            }
            function se(e, t, i, r) {
                var o,
                s,
                c,
                u,
                d,
                m,
                v,
                y = t && t.ownerDocument,
                C = t ? t.nodeType : 9;
                if (i = i || [], "string" != typeof e || !e || 1 !== C && 9 !== C && 11 !== C)
                    return i;
                if (!r && ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, h)) {
                    if (11 !== C && (d = Z.exec(e)))
                        if (o = d[1]) {
                            if (9 === C) {
                                if (!(c = t.getElementById(o)))
                                    return i;
                                if (c.id === o)
                                    return i.push(c), i
                            } else if (y && (c = y.getElementById(o)) && x(t, c) && c.id === o)
                                return i.push(c), i
                        } else {
                            if (d[2])
                                return L.apply(i, t.getElementsByTagName(e)), i;
                            if ((o = d[3]) && n.getElementsByClassName && t.getElementsByClassName)
                                return L.apply(i, t.getElementsByClassName(o)), i
                        }
                    if (n.qsa && !E[e + " "] && (!g || !g.test(e)) && (1 !== C || "object" !== t.nodeName.toLowerCase())) {
                        if (v = e, y = t, 1 === C && z.test(e)) {
                            for ((u = t.getAttribute("id")) ? u = u.replace(ie, re) : t.setAttribute("id", u = b), s = (m = a(e)).length; s--; )
                                m[s] = "#" + u + " " + xe(m[s]);
                            v = m.join(","),
                            y = ee.test(e) && ve(t.parentNode) || t
                        }
                        try {
                            return L.apply(i, y.querySelectorAll(v)),
                            i
                        } catch (t) {
                            E(e, !0)
                        } finally {
                            u === b && t.removeAttribute("id")
                        }
                    }
                }
                return l(e.replace(B, "$1"), t, i, r)
            }
            function le() {
                var e = [];
                return function t(n, r) {
                    return e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                    t[n + " "] = r
                }
            }
            function ce(e) {
                return e[b] = !0,
                e
            }
            function ue(e) {
                var t = f.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t),
                    t = null
                }
            }
            function de(e, t) {
                for (var n = e.split("|"), r = n.length; r--; )
                    i.attrHandle[n[r]] = t
            }
            function pe(e, t) {
                var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (i)
                    return i;
                if (n)
                    for (; n = n.nextSibling; )
                        if (n === t)
                            return -1;
                return e ? 1 : -1
            }
            function fe(e) {
                return function (t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }
            function me(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }
            function he(e) {
                return function (t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }
            function ge(e) {
                return ce((function (t) {
                        return t = +t,
                        ce((function (n, i) {
                                for (var r, o = e([], n.length, t), a = o.length; a--; )
                                    n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                            }))
                    }))
            }
            function ve(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            for (t in n = se.support = {}, o = se.isXML = function (e) {
                var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement;
                return !J.test(t || n && n.nodeName || "HTML")
            }, p = se.setDocument = function (e) {
                var t,
                r,
                a = e ? e.ownerDocument || e : w;
                return a !== f && 9 === a.nodeType && a.documentElement && (m = (f = a).documentElement, h = !o(f), w !== f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", oe, !1) : r.attachEvent && r.attachEvent("onunload", oe)), n.attributes = ue((function (e) {
                                return e.className = "i",
                                !e.getAttribute("className")
                            })), n.getElementsByTagName = ue((function (e) {
                                return e.appendChild(f.createComment("")),
                                !e.getElementsByTagName("*").length
                            })), n.getElementsByClassName = K.test(f.getElementsByClassName), n.getById = ue((function (e) {
                                return m.appendChild(e).id = b,
                                !f.getElementsByName || !f.getElementsByName(b).length
                            })), n.getById ? (i.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }, i.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && h) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }) : (i.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }, i.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && h) {
                            var n,
                            i,
                            r,
                            o = t.getElementById(e);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === e)
                                    return [o];
                                for (r = t.getElementsByName(e), i = 0; o = r[i++]; )
                                    if ((n = o.getAttributeNode("id")) && n.value === e)
                                        return [o]
                            }
                            return []
                        }
                    }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                }
                     : function (e, t) {
                    var n,
                    i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[r++]; )
                            1 === n.nodeType && i.push(n);
                            return i
                        }
                        return o
                    }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
                        if (void 0 !== t.getElementsByClassName && h)
                            return t.getElementsByClassName(e)
                    }, v = [], g = [], (n.qsa = K.test(f.querySelectorAll)) && (ue((function (e) {
                                    m.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                                    e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"),
                                    e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + q + ")"),
                                    e.querySelectorAll("[id~=" + b + "-]").length || g.push("~="),
                                    e.querySelectorAll(":checked").length || g.push(":checked"),
                                    e.querySelectorAll("a#" + b + "+*").length || g.push(".#.+[+~]")
                                })), ue((function (e) {
                                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                    var t = f.createElement("input");
                                    t.setAttribute("type", "hidden"),
                                    e.appendChild(t).setAttribute("name", "D"),
                                    e.querySelectorAll("[name=d]").length && g.push("name" + P + "*[*^$|!~]?="),
                                    2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                                    m.appendChild(e).disabled = !0,
                                    2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                                    e.querySelectorAll("*,:x"),
                                    g.push(",.*:")
                                }))), (n.matchesSelector = K.test(y = m.matches || m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && ue((function (e) {
                                n.disconnectedMatch = y.call(e, "*"),
                                y.call(e, "[s!='']:x"),
                                v.push("!=", R)
                            })), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = K.test(m.compareDocumentPosition), x = t || K.test(m.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    }
                         : function (e, t) {
                        if (t)
                            for (; t = t.parentNode; )
                                if (t === e)
                                    return !0;
                        return !1
                    }, S = t ? function (e, t) {
                        if (e === t)
                            return d = !0, 0;
                        var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === f || e.ownerDocument === w && x(w, e) ? -1 : t === f || t.ownerDocument === w && x(w, t) ? 1 : u ? F(u, e) - F(u, t) : 0 : 4 & i ? -1 : 1)
                    }
                         : function (e, t) {
                        if (e === t)
                            return d = !0, 0;
                        var n,
                        i = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                        if (!r || !o)
                            return e === f ? -1 : t === f ? 1 : r ? -1 : o ? 1 : u ? F(u, e) - F(u, t) : 0;
                        if (r === o)
                            return pe(e, t);
                        for (n = e; n = n.parentNode; )
                            a.unshift(n);
                        for (n = t; n = n.parentNode; )
                            s.unshift(n);
                        for (; a[i] === s[i]; )
                            i++;
                        return i ? pe(a[i], s[i]) : a[i] === w ? -1 : s[i] === w ? 1 : 0
                    }),
                    f
                }, se.matches = function (e, t) {
                    return se(e, null, null, t)
                }, se.matchesSelector = function (e, t) {
                    if ((e.ownerDocument || e) !== f && p(e), n.matchesSelector && h && !E[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t)))
                        try {
                            var i = y.call(e, t);
                            if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                return i
                        } catch (e) {
                            E(t, !0)
                        }
                    return 0 < se(t, f, null, [e]).length
                }, se.contains = function (e, t) {
                    return (e.ownerDocument || e) !== f && p(e),
                    x(e, t)
                }, se.attr = function (e, t) {
                    (e.ownerDocument || e) !== f && p(e);
                    var r = i.attrHandle[t.toLowerCase()],
                    o = r && j.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !h) : void 0;
                    return void 0 !== o ? o : n.attributes || !h ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                }, se.escape = function (e) {
                    return (e + "").replace(ie, re)
                }, se.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, se.uniqueSort = function (e) {
                    var t,
                    i = [],
                    r = 0,
                    o = 0;
                    if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(S), d) {
                        for (; t = e[o++]; )
                            t === e[o] && (r = i.push(o));
                        for (; r--; )
                            e.splice(i[r], 1)
                    }
                    return u = null,
                    e
                }, r = se.getText = function (e) {
                    var t,
                    n = "",
                    i = 0,
                    o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent)
                                return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling)
                                n += r(e)
                        } else if (3 === o || 4 === o)
                            return e.nodeValue
                    } else
                        for (; t = e[i++]; )
                            n += r(t);
                    return n
                }, (i = se.selectors = {
                            cacheLength: 50,
                            createPseudo: ce,
                            match: G,
                            attrHandle: {},
                            find: {},
                            relative: {
                                ">": {
                                    dir: "parentNode",
                                    first: !0
                                },
                                " ": {
                                    dir: "parentNode"
                                },
                                "+": {
                                    dir: "previousSibling",
                                    first: !0
                                },
                                "~": {
                                    dir: "previousSibling"
                                }
                            },
                            preFilter: {
                                ATTR: function (e) {
                                    return e[1] = e[1].replace(te, ne),
                                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                    e.slice(0, 4)
                                },
                                CHILD: function (e) {
                                    return e[1] = e[1].toLowerCase(),
                                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] =  + (e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] =  + (e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                                    e
                                },
                                PSEUDO: function (e) {
                                    var t,
                                    n = !e[6] && e[2];
                                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                                }
                            },
                            filter: {
                                TAG: function (e) {
                                    var t = e.replace(te, ne).toLowerCase();
                                    return "*" === e ? function () {
                                        return !0
                                    }
                                     : function (e) {
                                        return e.nodeName && e.nodeName.toLowerCase() === t
                                    }
                                },
                                CLASS: function (e) {
                                    var t = T[e + " "];
                                    return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && T(e, (function (e) {
                                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                        }))
                                },
                                ATTR: function (e, t, n) {
                                    return function (i) {
                                        var r = se.attr(i, e);
                                        return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && -1 < r.indexOf(n) : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? -1 < (" " + r.replace(M, " ") + " ").indexOf(n) : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                                    }
                                },
                                CHILD: function (e, t, n, i, r) {
                                    var o = "nth" !== e.slice(0, 3),
                                    a = "last" !== e.slice(-4),
                                    s = "of-type" === t;
                                    return 1 === i && 0 === r ? function (e) {
                                        return !!e.parentNode
                                    }
                                     : function (t, n, l) {
                                        var c,
                                        u,
                                        d,
                                        p,
                                        f,
                                        m,
                                        h = o !== a ? "nextSibling" : "previousSibling",
                                        g = t.parentNode,
                                        v = s && t.nodeName.toLowerCase(),
                                        y = !l && !s,
                                        x = !1;
                                        if (g) {
                                            if (o) {
                                                for (; h; ) {
                                                    for (p = t; p = p[h]; )
                                                        if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)
                                                            return !1;
                                                    m = h = "only" === e && !m && "nextSibling"
                                                }
                                                return !0
                                            }
                                            if (m = [a ? g.firstChild : g.lastChild], a && y) {
                                                for (x = (f = (c = (u = (d = (p = g)[b] || (p[b] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === C && c[1]) && c[2], p = f && g.childNodes[f]; p = ++f && p && p[h] || (x = f = 0) || m.pop(); )
                                                    if (1 === p.nodeType && ++x && p === t) {
                                                        u[e] = [C, f, x];
                                                        break
                                                    }
                                            } else if (y && (x = f = (c = (u = (d = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === C && c[1]), !1 === x)
                                                for (; (p = ++f && p && p[h] || (x = f = 0) || m.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++x || (y && ((u = (d = p[b] || (p[b] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] = [C, x]), p !== t)); );
                                            return (x -= r) === i || x % i == 0 && 0 <= x / i
                                        }
                                    }
                                },
                                PSEUDO: function (e, t) {
                                    var n,
                                    r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                                    return r[b] ? r(t) : 1 < r.length ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function (e, n) {
                                                for (var i, o = r(e, t), a = o.length; a--; )
                                                    e[i = F(e, o[a])] = !(n[i] = o[a])
                                            })) : function (e) {
                                        return r(e, 0, n)
                                    }) : r
                                }
                            },
                            pseudos: {
                                not: ce((function (e) {
                                        var t = [],
                                        n = [],
                                        i = s(e.replace(B, "$1"));
                                        return i[b] ? ce((function (e, t, n, r) {
                                                for (var o, a = i(e, null, r, []), s = e.length; s--; )
                                                    (o = a[s]) && (e[s] = !(t[s] = o))
                                            })) : function (e, r, o) {
                                            return t[0] = e,
                                            i(t, null, o, n),
                                            t[0] = null,
                                            !n.pop()
                                        }
                                    })),
                                has: ce((function (e) {
                                        return function (t) {
                                            return 0 < se(e, t).length
                                        }
                                    })),
                                contains: ce((function (e) {
                                        return e = e.replace(te, ne),
                                        function (t) {
                                            return -1 < (t.textContent || r(t)).indexOf(e)
                                        }
                                    })),
                                lang: ce((function (e) {
                                        return V.test(e || "") || se.error("unsupported lang: " + e),
                                        e = e.replace(te, ne).toLowerCase(),
                                        function (t) {
                                            var n;
                                            do {
                                                if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                                    return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                            } while ((t = t.parentNode) && 1 === t.nodeType);
                                            return !1
                                        }
                                    })),
                                target: function (t) {
                                    var n = e.location && e.location.hash;
                                    return n && n.slice(1) === t.id
                                },
                                root: function (e) {
                                    return e === m
                                },
                                focus: function (e) {
                                    return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                                },
                                enabled: he(!1),
                                disabled: he(!0),
                                checked: function (e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                                },
                                selected: function (e) {
                                    return e.parentNode && e.parentNode.selectedIndex,
                                    !0 === e.selected
                                },
                                empty: function (e) {
                                    for (e = e.firstChild; e; e = e.nextSibling)
                                        if (e.nodeType < 6)
                                            return !1;
                                    return !0
                                },
                                parent: function (e) {
                                    return !i.pseudos.empty(e)
                                },
                                header: function (e) {
                                    return Y.test(e.nodeName)
                                },
                                input: function (e) {
                                    return Q.test(e.nodeName)
                                },
                                button: function (e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && "button" === e.type || "button" === t
                                },
                                text: function (e) {
                                    var t;
                                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                                },
                                first: ge((function () {
                                        return [0]
                                    })),
                                last: ge((function (e, t) {
                                        return [t - 1]
                                    })),
                                eq: ge((function (e, t, n) {
                                        return [n < 0 ? n + t : n]
                                    })),
                                even: ge((function (e, t) {
                                        for (var n = 0; n < t; n += 2)
                                            e.push(n);
                                        return e
                                    })),
                                odd: ge((function (e, t) {
                                        for (var n = 1; n < t; n += 2)
                                            e.push(n);
                                        return e
                                    })),
                                lt: ge((function (e, t, n) {
                                        for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; )
                                            e.push(i);
                                        return e
                                    })),
                                gt: ge((function (e, t, n) {
                                        for (var i = n < 0 ? n + t : n; ++i < t; )
                                            e.push(i);
                                        return e
                                    }))
                            }
                        }).pseudos.nth = i.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                })i.pseudos[t] = fe(t);
            for (t in {
                submit: !0,
                reset: !0
            })
                i.pseudos[t] = me(t);
            function ye() {}
            function xe(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++)
                    i += e[t].value;
                return i
            }
            function be(e, t, n) {
                var i = t.dir,
                r = t.next,
                o = r || i,
                a = n && "parentNode" === o,
                s = k++;
                return t.first ? function (t, n, r) {
                    for (; t = t[i]; )
                        if (1 === t.nodeType || a)
                            return e(t, n, r);
                    return !1
                }
                 : function (t, n, l) {
                    var c,
                    u,
                    d,
                    p = [C, s];
                    if (l) {
                        for (; t = t[i]; )
                            if ((1 === t.nodeType || a) && e(t, n, l))
                                return !0
                    } else
                        for (; t = t[i]; )
                            if (1 === t.nodeType || a)
                                if (u = (d = t[b] || (t[b] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase())
                                    t = t[i] || t;
                                else {
                                    if ((c = u[o]) && c[0] === C && c[1] === s)
                                        return p[2] = c[2];
                                    if ((u[o] = p)[2] = e(t, n, l))
                                        return !0
                                }
                    return !1
                }
            }
            function we(e) {
                return 1 < e.length ? function (t, n, i) {
                    for (var r = e.length; r--; )
                        if (!e[r](t, n, i))
                            return !1;
                    return !0
                }
                 : e[0]
            }
            function Ce(e, t, n, i, r) {
                for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++)
                    (o = e[s]) && (n && !n(o, i, r) || (a.push(o), c && t.push(s)));
                return a
            }
            function ke(e, t, n, i, r, o) {
                return i && !i[b] && (i = ke(i)),
                r && !r[b] && (r = ke(r, o)),
                ce((function (o, a, s, l) {
                        var c,
                        u,
                        d,
                        p = [],
                        f = [],
                        m = a.length,
                        h = o || function (e, t, n) {
                            for (var i = 0, r = t.length; i < r; i++)
                                se(e, t[i], n);
                            return n
                        }
                        (t || "*", s.nodeType ? [s] : s, []),
                        g = !e || !o && t ? h : Ce(h, p, e, s, l),
                        v = n ? r || (o ? e : m || i) ? [] : a : g;
                        if (n && n(g, v, s, l), i)
                            for (c = Ce(v, f), i(c, [], s, l), u = c.length; u--; )
                                (d = c[u]) && (v[f[u]] = !(g[f[u]] = d));
                        if (o) {
                            if (r || e) {
                                if (r) {
                                    for (c = [], u = v.length; u--; )
                                        (d = v[u]) && c.push(g[u] = d);
                                    r(null, v = [], c, l)
                                }
                                for (u = v.length; u--; )
                                    (d = v[u]) && -1 < (c = r ? F(o, d) : p[u]) && (o[c] = !(a[c] = d))
                            }
                        } else
                            v = Ce(v === a ? v.splice(m, v.length) : v), r ? r(null, a, v, l) : L.apply(a, v)
                    }))
            }
            function Te(e) {
                for (var t, n, r, o = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], l = a ? 1 : 0, u = be((function (e) {
                                return e === t
                            }), s, !0), d = be((function (e) {
                                return -1 < F(t, e)
                            }), s, !0), p = [function (e, n, i) {
                            var r = !a && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                            return t = null,
                            r
                        }
                    ]; l < o; l++)
                    if (n = i.relative[e[l].type])
                        p = [be(we(p), n)];
                    else {
                        if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) {
                            for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                            return ke(1 < l && we(p), 1 < l && xe(e.slice(0, l - 1).concat({
                                        value: " " === e[l - 2].type ? "*" : ""
                                    })).replace(B, "$1"), n, l < r && Te(e.slice(l, r)), r < o && Te(e = e.slice(r)), r < o && xe(e))
                        }
                        p.push(n)
                    }
                return we(p)
            }
            return ye.prototype = i.filters = i.pseudos,
            i.setFilters = new ye,
            a = se.tokenize = function (e, t) {
                var n,
                r,
                o,
                a,
                s,
                l,
                c,
                u = _[e + " "];
                if (u)
                    return t ? 0 : u.slice(0);
                for (s = e, l = [], c = i.preFilter; s; ) {
                    for (a in n && !(r = U.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), n = !1, (r = W.exec(s)) && (n = r.shift(), o.push({
                                value: n,
                                type: r[0].replace(B, " ")
                            }), s = s.slice(n.length)), i.filter)
                        !(r = G[a].exec(s)) || c[a] && !(r = c[a](r)) || (n = r.shift(), o.push({
                                value: n,
                                type: a,
                                matches: r
                            }), s = s.slice(n.length));
                    if (!n)
                        break
                }
                return t ? s.length : s ? se.error(e) : _(e, l).slice(0)
            },
            s = se.compile = function (e, t) {
                var n,
                r,
                o,
                s,
                l,
                u,
                d = [],
                m = [],
                g = $[e + " "];
                if (!g) {
                    for (t || (t = a(e)), n = t.length; n--; )
                        (g = Te(t[n]))[b] ? d.push(g) : m.push(g);
                    (g = $(e, (r = m, s = 0 < (o = d).length, l = 0 < r.length, u = function (e, t, n, a, u) {
                                    var d,
                                    m,
                                    g,
                                    v = 0,
                                    y = "0",
                                    x = e && [],
                                    b = [],
                                    w = c,
                                    k = e || l && i.find.TAG("*", u),
                                    T = C += null == w ? 1 : Math.random() || .1,
                                    _ = k.length;
                                    for (u && (c = t === f || t || u); y !== _ && null != (d = k[y]); y++) {
                                        if (l && d) {
                                            for (m = 0, t || d.ownerDocument === f || (p(d), n = !h); g = r[m++]; )
                                                if (g(d, t || f, n)) {
                                                    a.push(d);
                                                    break
                                                }
                                            u && (C = T)
                                        }
                                        s && ((d = !g && d) && v--, e && x.push(d))
                                    }
                                    if (v += y, s && y !== v) {
                                        for (m = 0; g = o[m++]; )
                                            g(x, b, t, n);
                                        if (e) {
                                            if (0 < v)
                                                for (; y--; )
                                                    x[y] || b[y] || (b[y] = D.call(a));
                                            b = Ce(b)
                                        }
                                        L.apply(a, b),
                                        u && !e && 0 < b.length && 1 < v + o.length && se.uniqueSort(a)
                                    }
                                    return u && (C = T, c = w),
                                    x
                                }, s ? ce(u) : u))).selector = e
                }
                return g
            },
            l = se.select = function (e, t, n, r) {
                var o,
                l,
                c,
                u,
                d,
                p = "function" == typeof e && e,
                f = !r && a(e = p.selector || e);
                if (n = n || [], 1 === f.length) {
                    if (2 < (l = f[0] = f[0].slice(0)).length && "ID" === (c = l[0]).type && 9 === t.nodeType && h && i.relative[l[1].type]) {
                        if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0]))
                            return n;
                        p && (t = t.parentNode),
                        e = e.slice(l.shift().value.length)
                    }
                    for (o = G.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o], !i.relative[u = c.type]); )
                        if ((d = i.find[u]) && (r = d(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                            if (l.splice(o, 1), !(e = r.length && xe(l)))
                                return L.apply(n, r), n;
                            break
                        }
                }
                return (p || s(e, f))(r, t, !h, n, !t || ee.test(e) && ve(t.parentNode) || t),
                n
            },
            n.sortStable = b.split("").sort(S).join("") === b,
            n.detectDuplicates = !!d,
            p(),
            n.sortDetached = ue((function (e) {
                        return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
                    })),
            ue((function (e) {
                    return e.innerHTML = "<a href='#'></a>",
                    "#" === e.firstChild.getAttribute("href")
                })) || de("type|href|height|width", (function (e, t, n) {
                    if (!n)
                        return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                })),
            n.attributes && ue((function (e) {
                    return e.innerHTML = "<input/>",
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                })) || de("value", (function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase())
                        return e.defaultValue
                })),
            ue((function (e) {
                    return null == e.getAttribute("disabled")
                })) || de(q, (function (e, t, n) {
                    var i;
                    if (!n)
                        return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                })),
            se
        }
        (e);
        w.find = T,
        w.expr = T.selectors,
        w.expr[":"] = w.expr.pseudos,
        w.uniqueSort = w.unique = T.uniqueSort,
        w.text = T.getText,
        w.isXMLDoc = T.isXML,
        w.contains = T.contains,
        w.escapeSelector = T.escape;
        var _ = function (e, t, n) {
            for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (r && w(e).is(n))
                        break;
                    i.push(e)
                }
            return i
        },
        $ = function (e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        E = w.expr.match.needsContext;
        function S(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function A(e, t, n) {
            return h(t) ? w.grep(e, (function (e, i) {
                    return !!t.call(e, i, e) !== n
                })) : t.nodeType ? w.grep(e, (function (e) {
                    return e === t !== n
                })) : "string" != typeof t ? w.grep(e, (function (e) {
                    return -1 < l.call(t, e) !== n
                })) : w.filter(t, e, n)
        }
        w.filter = function (e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType ? w.find.matchesSelector(i, e) ? [i] : [] : w.find.matches(e, w.grep(t, (function (e) {
                        return 1 === e.nodeType
                    })))
        },
        w.fn.extend({
            find: function (e) {
                var t,
                n,
                i = this.length,
                r = this;
                if ("string" != typeof e)
                    return this.pushStack(w(e).filter((function () {
                                for (t = 0; t < i; t++)
                                    if (w.contains(r[t], this))
                                        return !0
                            })));
                for (n = this.pushStack([]), t = 0; t < i; t++)
                    w.find(e, r[t], n);
                return 1 < i ? w.uniqueSort(n) : n
            },
            filter: function (e) {
                return this.pushStack(A(this, e || [], !1))
            },
            not: function (e) {
                return this.pushStack(A(this, e || [], !0))
            },
            is: function (e) {
                return !!A(this, "string" == typeof e && E.test(e) ? w(e) : e || [], !1).length
            }
        });
        var D,
        N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (w.fn.init = function (e, t, n) {
            var r,
            o;
            if (!e)
                return this;
            if (n = n || D, "string" == typeof e) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : N.exec(e)) || !r[1] && t)
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), j.test(r[1]) && w.isPlainObject(t))
                        for (r in t)
                            h(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return (o = i.getElementById(r[2])) && (this[0] = o, this.length = 1),
                this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : h(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
        }).prototype = w.fn,
        D = w(i);
        var L = /^(?:parents|prev(?:Until|All))/,
        I = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        function F(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e
        }
        w.fn.extend({
            has: function (e) {
                var t = w(e, this),
                n = t.length;
                return this.filter((function () {
                        for (var e = 0; e < n; e++)
                            if (w.contains(this, t[e]))
                                return !0
                    }))
            },
            closest: function (e, t) {
                var n,
                i = 0,
                r = this.length,
                o = [],
                a = "string" != typeof e && w(e);
                if (!E.test(e))
                    for (; i < r; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            }
                return this.pushStack(1 < o.length ? w.uniqueSort(o) : o)
            },
            index: function (e) {
                return e ? "string" == typeof e ? l.call(w(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (e, t) {
                return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
            },
            addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }),
        w.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function (e) {
                return _(e, "parentNode")
            },
            parentsUntil: function (e, t, n) {
                return _(e, "parentNode", n)
            },
            next: function (e) {
                return F(e, "nextSibling")
            },
            prev: function (e) {
                return F(e, "previousSibling")
            },
            nextAll: function (e) {
                return _(e, "nextSibling")
            },
            prevAll: function (e) {
                return _(e, "previousSibling")
            },
            nextUntil: function (e, t, n) {
                return _(e, "nextSibling", n)
            },
            prevUntil: function (e, t, n) {
                return _(e, "previousSibling", n)
            },
            siblings: function (e) {
                return $((e.parentNode || {}).firstChild, e)
            },
            children: function (e) {
                return $(e.firstChild)
            },
            contents: function (e) {
                return void 0 !== e.contentDocument ? e.contentDocument : (S(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
            }
        }, (function (e, t) {
                w.fn[e] = function (n, i) {
                    var r = w.map(this, t, n);
                    return "Until" !== e.slice(-5) && (i = n),
                    i && "string" == typeof i && (r = w.filter(i, r)),
                    1 < this.length && (I[e] || w.uniqueSort(r), L.test(e) && r.reverse()),
                    this.pushStack(r)
                }
            }));
        var q = /[^\x20\t\r\n\f]+/g;
        function P(e) {
            return e
        }
        function O(e) {
            throw e
        }
        function H(e, t, n, i) {
            var r;
            try {
                e && h(r = e.promise) ? r.call(e).done(t).fail(n) : e && h(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        w.Callbacks = function (e) {
            var t,
            n;
            e = "string" == typeof e ? (t = e, n = {}, w.each(t.match(q) || [], (function (e, t) {
                            n[t] = !0
                        })), n) : w.extend({}, e);
            var i,
            r,
            o,
            a,
            s = [],
            l = [],
            c = -1,
            u = function () {
                for (a = a || e.once, o = i = !0; l.length; c = -1)
                    for (r = l.shift(); ++c < s.length; )
                        !1 === s[c].apply(r[0], r[1]) && e.stopOnFalse && (c = s.length, r = !1);
                e.memory || (r = !1),
                i = !1,
                a && (s = r ? [] : "")
            },
            d = {
                add: function () {
                    return s && (r && !i && (c = s.length - 1, l.push(r)), function t(n) {
                        w.each(n, (function (n, i) {
                                h(i) ? e.unique && d.has(i) || s.push(i) : i && i.length && "string" !== x(i) && t(i)
                            }))
                    }
                        (arguments), r && !i && u()),
                    this
                },
                remove: function () {
                    return w.each(arguments, (function (e, t) {
                            for (var n; -1 < (n = w.inArray(t, s, n)); )
                                s.splice(n, 1), n <= c && c--
                        })),
                    this
                },
                has: function (e) {
                    return e ? -1 < w.inArray(e, s) : 0 < s.length
                },
                empty: function () {
                    return s && (s = []),
                    this
                },
                disable: function () {
                    return a = l = [],
                    s = r = "",
                    this
                },
                disabled: function () {
                    return !s
                },
                lock: function () {
                    return a = l = [],
                    r || i || (s = r = ""),
                    this
                },
                locked: function () {
                    return !!a
                },
                fireWith: function (e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), i || u()),
                    this
                },
                fire: function () {
                    return d.fireWith(this, arguments),
                    this
                },
                fired: function () {
                    return !!o
                }
            };
            return d
        },
        w.extend({
            Deferred: function (t) {
                var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
                i = "pending",
                r = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments),
                        this
                    },
                    catch : function (e) {
                        return r.then(null, e)
                    },
                pipe: function () {
                    var e = arguments;
                    return w.Deferred((function (t) {
                            w.each(n, (function (n, i) {
                                    var r = h(e[i[4]]) && e[i[4]];
                                    o[i[1]]((function () {
                                            var e = r && r.apply(this, arguments);
                                            e && h(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                        }))
                                })),
                            e = null
                        })).promise()
                },
                then: function (t, i, r) {
                    var o = 0;
                    function a(t, n, i, r) {
                        return function () {
                            var s = this,
                            l = arguments,
                            c = function () {
                                var e,
                                c;
                                if (!(t < o)) {
                                    if ((e = i.apply(s, l)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                        c = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                        h(c) ? r ? c.call(e, a(o, n, P, r), a(o, n, O, r)) : (o++, c.call(e, a(o, n, P, r), a(o, n, O, r), a(o, n, P, n.notifyWith))) : (i !== P && (s = void 0, l = [e]), (r || n.resolveWith)(s, l))
                                    }
                                },
                                u = r ? c : function () {
                                    try {
                                        c()
                                    } catch (e) {
                                        w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, u.stackTrace),
                                        o <= t + 1 && (i !== O && (s = void 0, l = [e]), n.rejectWith(s, l))
                                    }
                                };
                                t ? u() : (w.Deferred.getStackHook && (u.stackTrace = w.Deferred.getStackHook()), e.setTimeout(u))
                            }
                        }
                        return w.Deferred((function (e) {
                                n[0][3].add(a(0, e, h(r) ? r : P, e.notifyWith)),
                                n[1][3].add(a(0, e, h(t) ? t : P)),
                                n[2][3].add(a(0, e, h(i) ? i : O))
                            })).promise()
                    },
                    promise: function (e) {
                        return null != e ? w.extend(e, r) : r
                    }
                },
                o = {};
                return w.each(n, (function (e, t) {
                        var a = t[2],
                        s = t[5];
                        r[t[1]] = a.add,
                        s && a.add((function () {
                                i = s
                            }), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                        a.add(t[3].fire),
                        o[t[0]] = function () {
                            return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                            this
                        },
                        o[t[0] + "With"] = a.fireWith
                    })),
                r.promise(o),
                t && t.call(o, o),
                o
            },
            when: function (e) {
                var t = arguments.length,
                n = t,
                i = Array(n),
                r = o.call(arguments),
                a = w.Deferred(),
                s = function (e) {
                    return function (n) {
                        i[e] = this,
                        r[e] = 1 < arguments.length ? o.call(arguments) : n,
                        --t || a.resolveWith(i, r)
                    }
                };
                if (t <= 1 && (H(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || h(r[n] && r[n].then)))
                    return a.then();
                for (; n--; )
                    H(r[n], s(n), a.reject);
                return a.promise()
            }
        });
        var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        w.Deferred.exceptionHook = function (t, n) {
            e.console && e.console.warn && t && R.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
        },
        w.readyException = function (t) {
            e.setTimeout((function () {
                    throw t
                }))
        };
        var M = w.Deferred();
        function B() {
            i.removeEventListener("DOMContentLoaded", B),
            e.removeEventListener("load", B),
            w.ready()
        }
        w.fn.ready = function (e) {
            return M.then(e).catch((function (e) {
                    w.readyException(e)
                })),
            this
        },
        w.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0) !== e && 0 < --w.readyWait || M.resolveWith(i, [w])
            }
        }),
        w.ready.then = M.then,
        "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(w.ready) : (i.addEventListener("DOMContentLoaded", B), e.addEventListener("load", B));
        var U = function (e, t, n, i, r, o, a) {
            var s = 0,
            l = e.length,
            c = null == n;
            if ("object" === x(n))
                for (s in r = !0, n)
                    U(e, t, s, n[s], !0, o, a);
            else if (void 0 !== i && (r = !0, h(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
                            return c.call(w(e), n)
                        })), t))
                for (; s < l; s++)
                    t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
        },
        W = /^-ms-/,
        z = /-([a-z])/g;
        function X(e, t) {
            return t.toUpperCase()
        }
        function V(e) {
            return e.replace(W, "ms-").replace(z, X)
        }
        var G = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
        function J() {
            this.expando = w.expando + J.uid++
        }
        J.uid = 1,
        J.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0
                        }))),
                t
            },
            set: function (e, t, n) {
                var i,
                r = this.cache(e);
                if ("string" == typeof t)
                    r[V(t)] = n;
                else
                    for (i in t)
                        r[V(i)] = t[i];
                return r
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
            },
            access: function (e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function (e, t) {
                var n,
                i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(V) : (t = V(t))in i ? [t] : t.match(q) || []).length;
                        for (; n--; )
                            delete i[t[n]]
                    }
                    (void 0 === t || w.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !w.isEmptyObject(t)
            }
        };
        var Q = new J,
        Y = new J,
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;
        function ee(e, t, n) {
            var i,
            r;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                    try {
                        n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : K.test(r) ? JSON.parse(r) : r)
                    } catch (e) {}
                    Y.set(e, t, n)
                } else
                    n = void 0;
            return n
        }
        w.extend({
            hasData: function (e) {
                return Y.hasData(e) || Q.hasData(e)
            },
            data: function (e, t, n) {
                return Y.access(e, t, n)
            },
            removeData: function (e, t) {
                Y.remove(e, t)
            },
            _data: function (e, t, n) {
                return Q.access(e, t, n)
            },
            _removeData: function (e, t) {
                Q.remove(e, t)
            }
        }),
        w.fn.extend({
            data: function (e, t) {
                var n,
                i,
                r,
                o = this[0],
                a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (r = Y.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--; )
                            a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = V(i.slice(5)), ee(o, i, r[i]));
                        Q.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each((function () {
                        Y.set(this, e)
                    })) : U(this, (function (t) {
                        var n;
                        if (o && void 0 === t)
                            return void 0 !== (n = Y.get(o, e)) || void 0 !== (n = ee(o, e)) ? n : void 0;
                        this.each((function () {
                                Y.set(this, e, t)
                            }))
                    }), null, t, 1 < arguments.length, null, !0)
            },
            removeData: function (e) {
                return this.each((function () {
                        Y.remove(this, e)
                    }))
            }
        }),
        w.extend({
            queue: function (e, t, n) {
                var i;
                if (e)
                    return t = (t || "fx") + "queue", i = Q.get(e, t), n && (!i || Array.isArray(n) ? i = Q.access(e, t, w.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = w.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = w._queueHooks(e, t);
                "inprogress" === r && (r = n.shift(), i--),
                r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, (function () {
                            w.dequeue(e, t)
                        }), o)),
                !i && o && o.empty.fire()
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return Q.get(e, n) || Q.access(e, n, {
                    empty: w.Callbacks("once memory").add((function () {
                            Q.remove(e, [t + "queue", n])
                        }))
                })
            }
        }),
        w.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--),
                arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each((function () {
                        var n = w.queue(this, e, t);
                        w._queueHooks(this, e),
                        "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
                    }))
            },
            dequeue: function (e) {
                return this.each((function () {
                        w.dequeue(this, e)
                    }))
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", [])
            },
            promise: function (e, t) {
                var n,
                i = 1,
                r = w.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                    --i || r.resolveWith(o, [o])
                };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--; )
                    (n = Q.get(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                return s(),
                r.promise(t)
            }
        });
        var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        re = i.documentElement,
        oe = function (e) {
            return w.contains(e.ownerDocument, e)
        },
        ae = {
            composed: !0
        };
        re.getRootNode && (oe = function (e) {
            return w.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
        });
        var se = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === w.css(e, "display")
        },
        le = function (e, t, n, i) {
            var r,
            o,
            a = {};
            for (o in t)
                a[o] = e.style[o], e.style[o] = t[o];
            for (o in r = n.apply(e, i || []), t)
                e.style[o] = a[o];
            return r
        };
        function ce(e, t, n, i) {
            var r,
            o,
            a = 20,
            s = i ? function () {
                return i.cur()
            }
             : function () {
                return w.css(e, t, "")
            },
            l = s(),
            c = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            u = e.nodeType && (w.cssNumber[t] || "px" !== c && +l) && ne.exec(w.css(e, t));
            if (u && u[3] !== c) {
                for (l /= 2, c = c || u[3], u = +l || 1; a--; )
                    w.style(e, t, u + c), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), u /= o;
                u *= 2,
                w.style(e, t, u + c),
                n = n || []
            }
            return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)),
            r
        }
        var ue = {};
        function de(e, t) {
            for (var n, i, r, o, a, s, l, c = [], u = 0, d = e.length; u < d; u++)
                (i = e[u]).style && (n = i.style.display, t ? ("none" === n && (c[u] = Q.get(i, "display") || null, c[u] || (i.style.display = "")), "" === i.style.display && se(i) && (c[u] = (l = a = o = void 0, a = (r = i).ownerDocument, s = r.nodeName, (l = ue[s]) || (o = a.body.appendChild(a.createElement(s)), l = w.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), ue[s] = l)))) : "none" !== n && (c[u] = "none", Q.set(i, "display", n)));
            for (u = 0; u < d; u++)
                null != c[u] && (e[u].style.display = c[u]);
            return e
        }
        w.fn.extend({
            show: function () {
                return de(this, !0)
            },
            hide: function () {
                return de(this)
            },
            toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function () {
                        se(this) ? w(this).show() : w(this).hide()
                    }))
            }
        });
        var pe = /^(?:checkbox|radio)$/i,
        fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        me = /^$|^module$|\/(?:java|ecma)script/i,
        he = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        function ge(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
            void 0 === t || t && S(e, t) ? w.merge([e], n) : n
        }
        function ve(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
        }
        he.optgroup = he.option,
        he.tbody = he.tfoot = he.colgroup = he.caption = he.thead,
        he.th = he.td;
        var ye,
        xe,
        be = /<|&#?\w+;/;
        function we(e, t, n, i, r) {
            for (var o, a, s, l, c, u, d = t.createDocumentFragment(), p = [], f = 0, m = e.length; f < m; f++)
                if ((o = e[f]) || 0 === o)
                    if ("object" === x(o))
                        w.merge(p, o.nodeType ? [o] : o);
                    else if (be.test(o)) {
                        for (a = a || d.appendChild(t.createElement("div")), s = (fe.exec(o) || ["", ""])[1].toLowerCase(), l = he[s] || he._default, a.innerHTML = l[1] + w.htmlPrefilter(o) + l[2], u = l[0]; u--; )
                            a = a.lastChild;
                        w.merge(p, a.childNodes),
                        (a = d.firstChild).textContent = ""
                    } else
                        p.push(t.createTextNode(o));
            for (d.textContent = "", f = 0; o = p[f++]; )
                if (i && -1 < w.inArray(o, i))
                    r && r.push(o);
                else if (c = oe(o), a = ge(d.appendChild(o), "script"), c && ve(a), n)
                    for (u = 0; o = a[u++]; )
                        me.test(o.type || "") && n.push(o);
            return d
        }
        ye = i.createDocumentFragment().appendChild(i.createElement("div")),
        (xe = i.createElement("input")).setAttribute("type", "radio"),
        xe.setAttribute("checked", "checked"),
        xe.setAttribute("name", "t"),
        ye.appendChild(xe),
        m.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked,
        ye.innerHTML = "<textarea>x</textarea>",
        m.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
        var Ce = /^key/,
        ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Te = /^([^.]*)(?:\.(.+)|)/;
        function _e() {
            return !0
        }
        function $e() {
            return !1
        }
        function Ee(e, t) {
            return e === function () {
                try {
                    return i.activeElement
                } catch (e) {}
            }
            () == ("focus" === t)
        }
        function Se(e, t, n, i, r, o) {
            var a,
            s;
            if ("object" == typeof t) {
                for (s in "string" != typeof n && (i = i || n, n = void 0), t)
                    Se(e, s, n, i, t[s], o);
                return e
            }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r)
                r = $e;
            else if (!r)
                return e;
            return 1 === o && (a = r, (r = function (e) {
                    return w().off(e),
                    a.apply(this, arguments)
                }).guid = a.guid || (a.guid = w.guid++)),
            e.each((function () {
                    w.event.add(this, t, r, i, n)
                }))
        }
        function je(e, t, n) {
            n ? (Q.set(e, t, !1), w.event.add(e, t, {
                    namespace: !1,
                    handler: function (e) {
                        var i,
                        r,
                        a = Q.get(this, t);
                        if (1 & e.isTrigger && this[t]) {
                            if (a.length)
                                (w.event.special[t] || {}).delegateType && e.stopPropagation();
                            else if (a = o.call(arguments), Q.set(this, t, a), i = n(this, t), this[t](), a !== (r = Q.get(this, t)) || i ? Q.set(this, t, !1) : r = {}, a !== r)
                                return e.stopImmediatePropagation(), e.preventDefault(), r.value
                        } else
                            a.length && (Q.set(this, t, {
                                    value: w.event.trigger(w.extend(a[0], w.Event.prototype), a.slice(1), this)
                                }), e.stopImmediatePropagation())
                    }
                })) : void 0 === Q.get(e, t) && w.event.add(e, t, _e)
        }
        w.event = {
            global: {},
            add: function (e, t, n, i, r) {
                var o,
                a,
                s,
                l,
                c,
                u,
                d,
                p,
                f,
                m,
                h,
                g = Q.get(e);
                if (g)
                    for (n.handler && (n = (o = n).handler, r = o.selector), r && w.find.matchesSelector(re, r), n.guid || (n.guid = w.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function (t) {
                            return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                        }), c = (t = (t || "").match(q) || [""]).length; c--; )
                        f = h = (s = Te.exec(t[c]) || [])[1], m = (s[2] || "").split(".").sort(), f && (d = w.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = w.event.special[f] || {}, u = w.extend({
                                type: f,
                                origType: h,
                                data: i,
                                handler: n,
                                guid: n.guid,
                                selector: r,
                                needsContext: r && w.expr.match.needsContext.test(r),
                                namespace: m.join(".")
                            }, o), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, m, a) || e.addEventListener && e.addEventListener(f, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, u) : p.push(u), w.event.global[f] = !0)
            },
            remove: function (e, t, n, i, r) {
                var o,
                a,
                s,
                l,
                c,
                u,
                d,
                p,
                f,
                m,
                h,
                g = Q.hasData(e) && Q.get(e);
                if (g && (l = g.events)) {
                    for (c = (t = (t || "").match(q) || [""]).length; c--; )
                        if (f = h = (s = Te.exec(t[c]) || [])[1], m = (s[2] || "").split(".").sort(), f) {
                            for (d = w.event.special[f] || {}, p = l[f = (i ? d.delegateType : d.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--; )
                                u = p[o], !r && h !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(o, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                            a && !p.length && (d.teardown && !1 !== d.teardown.call(e, m, g.handle) || w.removeEvent(e, f, g.handle), delete l[f])
                        } else
                            for (f in l)
                                w.event.remove(e, f + t[c], n, i, !0);
                    w.isEmptyObject(l) && Q.remove(e, "handle events")
                }
            },
            dispatch: function (e) {
                var t,
                n,
                i,
                r,
                o,
                a,
                s = w.event.fix(e),
                l = new Array(arguments.length),
                c = (Q.get(this, "events") || {})[s.type] || [],
                u = w.event.special[s.type] || {};
                for (l[0] = s, t = 1; t < arguments.length; t++)
                    l[t] = arguments[t];
                if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
                    for (a = w.event.handlers.call(this, s, c), t = 0; (r = a[t++]) && !s.isPropagationStopped(); )
                        for (s.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                            s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (i = ((w.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, s),
                    s.result
                }
            },
            handlers: function (e, t) {
                var n,
                i,
                r,
                o,
                a,
                s = [],
                l = t.delegateCount,
                c = e.target;
                if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                            for (o = [], a = {}, n = 0; n < l; n++)
                                void 0 === a[r = (i = t[n]).selector + " "] && (a[r] = i.needsContext ? -1 < w(r, this).index(c) : w.find(r, this, null, [c]).length), a[r] && o.push(i);
                            o.length && s.push({
                                elem: c,
                                handlers: o
                            })
                        }
                return c = this,
                l < t.length && s.push({
                    elem: c,
                    handlers: t.slice(l)
                }),
                s
            },
            addProp: function (e, t) {
                Object.defineProperty(w.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: h(t) ? function () {
                        if (this.originalEvent)
                            return t(this.originalEvent)
                    }
                     : function () {
                        if (this.originalEvent)
                            return this.originalEvent[e]
                    },
                    set: function (t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function (e) {
                return e[w.expando] ? e : new w.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function (e) {
                        var t = this || e;
                        return pe.test(t.type) && t.click && S(t, "input") && je(t, "click", _e),
                        !1
                    },
                    trigger: function (e) {
                        var t = this || e;
                        return pe.test(t.type) && t.click && S(t, "input") && je(t, "click"),
                        !0
                    },
                    _default: function (e) {
                        var t = e.target;
                        return pe.test(t.type) && t.click && S(t, "input") && Q.get(t, "click") || S(t, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        },
        w.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        },
        w.Event = function (e, t) {
            if (!(this instanceof w.Event))
                return new w.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? _e : $e, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e,
            t && w.extend(this, t),
            this.timeStamp = e && e.timeStamp || Date.now(),
            this[w.expando] = !0
        },
        w.Event.prototype = {
            constructor: w.Event,
            isDefaultPrevented: $e,
            isPropagationStopped: $e,
            isImmediatePropagationStopped: $e,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = _e,
                e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = _e,
                e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = _e,
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        w.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
                var t = e.button;
                return null == e.which && Ce.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, w.event.addProp),
        w.each({
            focus: "focusin",
            blur: "focusout"
        }, (function (e, t) {
                w.event.special[e] = {
                    setup: function () {
                        return je(this, e, Ee),
                        !1
                    },
                    trigger: function () {
                        return je(this, e),
                        !0
                    },
                    delegateType: t
                }
            })),
        w.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, (function (e, t) {
                w.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                        var n,
                        i = e.relatedTarget,
                        r = e.handleObj;
                        return i && (i === this || w.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t),
                        n
                    }
                }
            })),
        w.fn.extend({
            on: function (e, t, n, i) {
                return Se(this, e, t, n, i)
            },
            one: function (e, t, n, i) {
                return Se(this, e, t, n, i, 1)
            },
            off: function (e, t, n) {
                var i,
                r;
                if (e && e.preventDefault && e.handleObj)
                    return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e)
                        this.off(r, t, e[r]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0),
                !1 === n && (n = $e),
                this.each((function () {
                        w.event.remove(this, e, n, t)
                    }))
            }
        });
        var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        De = /<script|<style|<link/i,
        Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function Ie(e, t) {
            return S(e, "table") && S(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
        }
        function Fe(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
        }
        function qe(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
            e
        }
        function Pe(e, t) {
            var n,
            i,
            r,
            o,
            a,
            s,
            l,
            c;
            if (1 === t.nodeType) {
                if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), c = o.events))
                    for (r in delete a.handle, a.events = {}, c)
                        for (n = 0, i = c[r].length; n < i; n++)
                            w.event.add(t, r, c[r][n]);
                Y.hasData(e) && (s = Y.access(e), l = w.extend({}, s), Y.set(t, l))
            }
        }
        function Oe(e, t, n, i) {
            t = a.apply([], t);
            var r,
            o,
            s,
            l,
            c,
            u,
            d = 0,
            p = e.length,
            f = p - 1,
            g = t[0],
            v = h(g);
            if (v || 1 < p && "string" == typeof g && !m.checkClone && Ne.test(g))
                return e.each((function (r) {
                        var o = e.eq(r);
                        v && (t[0] = g.call(this, r, o.html())),
                        Oe(o, t, n, i)
                    }));
            if (p && (o = (r = we(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
                for (l = (s = w.map(ge(r, "script"), Fe)).length; d < p; d++)
                    c = r, d !== f && (c = w.clone(c, !0, !0), l && w.merge(s, ge(c, "script"))), n.call(e[d], c, d);
                if (l)
                    for (u = s[s.length - 1].ownerDocument, w.map(s, qe), d = 0; d < l; d++)
                        c = s[d], me.test(c.type || "") && !Q.access(c, "globalEval") && w.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && !c.noModule && w._evalUrl(c.src, {
                                nonce: c.nonce || c.getAttribute("nonce")
                            }) : y(c.textContent.replace(Le, ""), c, u))
            }
            return e
        }
        function He(e, t, n) {
            for (var i, r = t ? w.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
                n || 1 !== i.nodeType || w.cleanData(ge(i)), i.parentNode && (n && oe(i) && ve(ge(i, "script")), i.parentNode.removeChild(i));
            return e
        }
        w.extend({
            htmlPrefilter: function (e) {
                return e.replace(Ae, "<$1></$2>")
            },
            clone: function (e, t, n) {
                var i,
                r,
                o,
                a,
                s,
                l,
                c,
                u = e.cloneNode(!0),
                d = oe(e);
                if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                    for (a = ge(u), i = 0, r = (o = ge(e)).length; i < r; i++)
                        s = o[i], "input" === (c = (l = a[i]).nodeName.toLowerCase()) && pe.test(s.type) ? l.checked = s.checked : "input" !== c && "textarea" !== c || (l.defaultValue = s.defaultValue);
                if (t)
                    if (n)
                        for (o = o || ge(e), a = a || ge(u), i = 0, r = o.length; i < r; i++)
                            Pe(o[i], a[i]);
                    else
                        Pe(e, u);
                return 0 < (a = ge(u, "script")).length && ve(a, !d && ge(e, "script")),
                u
            },
            cleanData: function (e) {
                for (var t, n, i, r = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                    if (G(n)) {
                        if (t = n[Q.expando]) {
                            if (t.events)
                                for (i in t.events)
                                    r[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
                            n[Q.expando] = void 0
                        }
                        n[Y.expando] && (n[Y.expando] = void 0)
                    }
            }
        }),
        w.fn.extend({
            detach: function (e) {
                return He(this, e, !0)
            },
            remove: function (e) {
                return He(this, e)
            },
            text: function (e) {
                return U(this, (function (e) {
                        return void 0 === e ? w.text(this) : this.empty().each((function () {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                            }))
                    }), null, e, arguments.length)
            },
            append: function () {
                return Oe(this, arguments, (function (e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ie(this, e).appendChild(e)
                    }))
            },
            prepend: function () {
                return Oe(this, arguments, (function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Ie(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    }))
            },
            before: function () {
                return Oe(this, arguments, (function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    }))
            },
            after: function () {
                return Oe(this, arguments, (function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    }))
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (w.cleanData(ge(e, !1)), e.textContent = "");
                return this
            },
            clone: function (e, t) {
                return e = null != e && e,
                t = null == t ? e : t,
                this.map((function () {
                        return w.clone(this, e, t)
                    }))
            },
            html: function (e) {
                return U(this, (function (e) {
                        var t = this[0] || {},
                        n = 0,
                        i = this.length;
                        if (void 0 === e && 1 === t.nodeType)
                            return t.innerHTML;
                        if ("string" == typeof e && !De.test(e) && !he[(fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = w.htmlPrefilter(e);
                            try {
                                for (; n < i; n++)
                                    1 === (t = this[n] || {}).nodeType && (w.cleanData(ge(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }), null, e, arguments.length)
            },
            replaceWith: function () {
                var e = [];
                return Oe(this, arguments, (function (t) {
                        var n = this.parentNode;
                        w.inArray(this, e) < 0 && (w.cleanData(ge(this)), n && n.replaceChild(t, this))
                    }), e)
            }
        }),
        w.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, (function (e, t) {
                w.fn[e] = function (e) {
                    for (var n, i = [], r = w(e), o = r.length - 1, a = 0; a <= o; a++)
                        n = a === o ? this : this.clone(!0), w(r[a])[t](n), s.apply(i, n.get());
                    return this.pushStack(i)
                }
            }));
        var Re = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        Me = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e),
            n.getComputedStyle(t)
        },
        Be = new RegExp(ie.join("|"), "i");
        function Ue(e, t, n) {
            var i,
            r,
            o,
            a,
            s = e.style;
            return (n = n || Me(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = w.style(e, t)), !m.pixelBoxStyles() && Re.test(a) && Be.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)),
            void 0 !== a ? a + "" : a
        }
        function We(e, t) {
            return {
                get: function () {
                    if (!e())
                        return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }
        !function () {
            function t() {
                if (u) {
                    c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                    re.appendChild(c).appendChild(u);
                    var t = e.getComputedStyle(u);
                    r = "1%" !== t.top,
                    l = 12 === n(t.marginLeft),
                    u.style.right = "60%",
                    s = 36 === n(t.right),
                    o = 36 === n(t.width),
                    u.style.position = "absolute",
                    a = 12 === n(u.offsetWidth / 3),
                    re.removeChild(c),
                    u = null
                }
            }
            function n(e) {
                return Math.round(parseFloat(e))
            }
            var r,
            o,
            a,
            s,
            l,
            c = i.createElement("div"),
            u = i.createElement("div");
            u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === u.style.backgroundClip, w.extend(m, {
                    boxSizingReliable: function () {
                        return t(),
                        o
                    },
                    pixelBoxStyles: function () {
                        return t(),
                        s
                    },
                    pixelPosition: function () {
                        return t(),
                        r
                    },
                    reliableMarginLeft: function () {
                        return t(),
                        l
                    },
                    scrollboxSize: function () {
                        return t(),
                        a
                    }
                }))
        }
        ();
        var ze = ["Webkit", "Moz", "ms"],
        Xe = i.createElement("div").style,
        Ve = {};
        function Ge(e) {
            return w.cssProps[e] || Ve[e] || (e in Xe ? e : Ve[e] = function (e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = ze.length; n--; )
                    if ((e = ze[n] + t)in Xe)
                        return e
            }
                (e) || e)
        }
        var Je = /^(none|table(?!-c[ea]).+)/,
        Qe = /^--/,
        Ye = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ke = {
            letterSpacing: "0",
            fontWeight: "400"
        };
        function Ze(e, t, n) {
            var i = ne.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }
        function et(e, t, n, i, r, o) {
            var a = "width" === t ? 1 : 0,
            s = 0,
            l = 0;
            if (n === (i ? "border" : "content"))
                return 0;
            for (; a < 4; a += 2)
                "margin" === n && (l += w.css(e, n + ie[a], !0, r)), i ? ("content" === n && (l -= w.css(e, "padding" + ie[a], !0, r)), "margin" !== n && (l -= w.css(e, "border" + ie[a] + "Width", !0, r))) : (l += w.css(e, "padding" + ie[a], !0, r), "padding" !== n ? l += w.css(e, "border" + ie[a] + "Width", !0, r) : s += w.css(e, "border" + ie[a] + "Width", !0, r));
            return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5)) || 0),
            l
        }
        function tt(e, t, n) {
            var i = Me(e),
            r = (!m.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, i),
            o = r,
            a = Ue(e, t, i),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Re.test(a)) {
                if (!n)
                    return a;
                a = "auto"
            }
            return (!m.boxSizingReliable() && r || "auto" === a || !parseFloat(a) && "inline" === w.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === w.css(e, "boxSizing", !1, i), (o = s in e) && (a = e[s])),
            (a = parseFloat(a) || 0) + et(e, t, n || (r ? "border" : "content"), o, i, a) + "px"
        }
        function nt(e, t, n, i, r) {
            return new nt.prototype.init(e, t, n, i, r)
        }
        w.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = Ue(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function (e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r,
                    o,
                    a,
                    s = V(t),
                    l = Qe.test(t),
                    c = e.style;
                    if (l || (t = Ge(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n)
                        return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : c[t];
                    "string" == (o = typeof n) && (r = ne.exec(n)) && r[1] && (n = ce(e, t, r), o = "number"),
                    null != n && n == n && ("number" !== o || l || (n += r && r[3] || (w.cssNumber[s] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
                }
            },
            css: function (e, t, n, i) {
                var r,
                o,
                a,
                s = V(t);
                return Qe.test(t) || (t = Ge(s)),
                (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)),
                void 0 === r && (r = Ue(e, t, i)),
                "normal" === r && t in Ke && (r = Ke[t]),
                "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
            }
        }),
        w.each(["height", "width"], (function (e, t) {
                w.cssHooks[t] = {
                    get: function (e, n, i) {
                        if (n)
                            return !Je.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, i) : le(e, Ye, (function () {
                                    return tt(e, t, i)
                                }))
                    },
                    set: function (e, n, i) {
                        var r,
                        o = Me(e),
                        a = !m.scrollboxSize() && "absolute" === o.position,
                        s = (a || i) && "border-box" === w.css(e, "boxSizing", !1, o),
                        l = i ? et(e, t, i, s, o) : 0;
                        return s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - et(e, t, "border", !1, o) - .5)),
                        l && (r = ne.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = w.css(e, t)),
                        Ze(0, n, l)
                    }
                }
            })),
        w.cssHooks.marginLeft = We(m.reliableMarginLeft, (function (e, t) {
                    if (t)
                        return (parseFloat(Ue(e, "marginLeft")) || e.getBoundingClientRect().left - le(e, {
                                marginLeft: 0
                            }, (function () {
                                    return e.getBoundingClientRect().left
                                }))) + "px"
                })),
        w.each({
            margin: "",
            padding: "",
            border: "Width"
        }, (function (e, t) {
                w.cssHooks[e + t] = {
                    expand: function (n) {
                        for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                            r[e + ie[i] + t] = o[i] || o[i - 2] || o[0];
                        return r
                    }
                },
                "margin" !== e && (w.cssHooks[e + t].set = Ze)
            })),
        w.fn.extend({
            css: function (e, t) {
                return U(this, (function (e, t, n) {
                        var i,
                        r,
                        o = {},
                        a = 0;
                        if (Array.isArray(t)) {
                            for (i = Me(e), r = t.length; a < r; a++)
                                o[t[a]] = w.css(e, t[a], !1, i);
                            return o
                        }
                        return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
                    }), e, t, 1 < arguments.length)
            }
        }),
        ((w.Tween = nt).prototype = {
                constructor: nt,
                init: function (e, t, n, i, r, o) {
                    this.elem = e,
                    this.prop = n,
                    this.easing = r || w.easing._default,
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = i,
                    this.unit = o || (w.cssNumber[n] ? "" : "px")
                },
                cur: function () {
                    var e = nt.propHooks[this.prop];
                    return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
                },
                run: function (e) {
                    var t,
                    n = nt.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                    this.now = (this.end - this.start) * t + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : nt.propHooks._default.set(this),
                    this
                }
            }).init.prototype = nt.prototype,
        (nt.propHooks = {
                _default: {
                    get: function (e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function (e) {
                        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }).scrollTop = nt.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        w.easing = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        w.fx = nt.prototype.init,
        w.fx.step = {};
        var it,
        rt,
        ot,
        at,
        st = /^(?:toggle|show|hide)$/,
        lt = /queueHooks$/;
        function ct() {
            rt && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(ct) : e.setTimeout(ct, w.fx.interval), w.fx.tick())
        }
        function ut() {
            return e.setTimeout((function () {
                    it = void 0
                })),
            it = Date.now()
        }
        function dt(e, t) {
            var n,
            i = 0,
            r = {
                height: e
            };
            for (t = t ? 1 : 0; i < 4; i += 2 - t)
                r["margin" + (n = ie[i])] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e),
            r
        }
        function pt(e, t, n) {
            for (var i, r = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = r.length; o < a; o++)
                if (i = r[o].call(n, t, e))
                    return i
        }
        function ft(e, t, n) {
            var i,
            r,
            o = 0,
            a = ft.prefilters.length,
            s = w.Deferred().always((function () {
                        delete l.elem
                    })),
            l = function () {
                if (r)
                    return !1;
                for (var t = it || ut(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, a = c.tweens.length; o < a; o++)
                    c.tweens[o].run(i);
                return s.notifyWith(e, [c, i, n]),
                i < 1 && a ? n : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
            },
            c = s.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {},
                    easing: w.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: it || ut(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = w.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i),
                    i
                },
                stop: function (t) {
                    var n = 0,
                    i = t ? c.tweens.length : 0;
                    if (r)
                        return this;
                    for (r = !0; n < i; n++)
                        c.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]),
                    this
                }
            }),
            u = c.props;
            for (function (e, t) {
                var n,
                i,
                r,
                o,
                a;
                for (n in e)
                    if (r = t[i = V(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = w.cssHooks[i]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[i], o)
                            n in e || (e[n] = o[n], t[n] = r);
                        else
                            t[i] = r
                }
                    (u, c.opts.specialEasing); o < a; o++)if (i = ft.prefilters[o].call(c, e, u, c.opts))
                    return h(i.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
            return w.map(u, pt, c),
            h(c.opts.start) && c.opts.start.call(e, c),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
            w.fx.timer(w.extend(l, {
                    elem: e,
                    anim: c,
                    queue: c.opts.queue
                })),
            c
        }
        w.Animation = w.extend(ft, {
            tweeners: {
                "*": [function (e, t) {
                        var n = this.createTween(e, t);
                        return ce(n.elem, e, ne.exec(t), n),
                        n
                    }
                ]
            },
            tweener: function (e, t) {
                h(e) ? (t = e, e = ["*"]) : e = e.match(q);
                for (var n, i = 0, r = e.length; i < r; i++)
                    n = e[i], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
            },
            prefilters: [function (e, t, n) {
                    var i,
                    r,
                    o,
                    a,
                    s,
                    l,
                    c,
                    u,
                    d = "width" in t || "height" in t,
                    p = this,
                    f = {},
                    m = e.style,
                    h = e.nodeType && se(e),
                    g = Q.get(e, "fxshow");
                    for (i in n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                                a.unqueued || s()
                            }), a.unqueued++, p.always((function () {
                                    p.always((function () {
                                            a.unqueued--,
                                            w.queue(e, "fx").length || a.empty.fire()
                                        }))
                                }))), t)
                        if (r = t[i], st.test(r)) {
                            if (delete t[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
                                if ("show" !== r || !g || void 0 === g[i])
                                    continue;
                                h = !0
                            }
                            f[i] = g && g[i] || w.style(e, i)
                        }
                    if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(f))
                        for (i in d && 1 === e.nodeType && (n.overflow = [m.overflow, m.overflowX, m.overflowY], null == (c = g && g.display) && (c = Q.get(e, "display")), "none" === (u = w.css(e, "display")) && (c ? u = c : (de([e], !0), c = e.style.display || c, u = w.css(e, "display"), de([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === w.css(e, "float") && (l || (p.done((function () {
                                                m.display = c
                                            })), null == c && (u = m.display, c = "none" === u ? "" : u)), m.display = "inline-block")), n.overflow && (m.overflow = "hidden", p.always((function () {
                                        m.overflow = n.overflow[0],
                                        m.overflowX = n.overflow[1],
                                        m.overflowY = n.overflow[2]
                                    }))), l = !1, f)
                            l || (g ? "hidden" in g && (h = g.hidden) : g = Q.access(e, "fxshow", {
                                    display: c
                                }), o && (g.hidden = !h), h && de([e], !0), p.done((function () {
                                        for (i in h || de([e]), Q.remove(e, "fxshow"), f)
                                            w.style(e, i, f[i])
                                    }))), l = pt(h ? g[i] : 0, i, p), i in g || (g[i] = l.start, h && (l.end = l.start, l.start = 0))
                }
            ],
            prefilter: function (e, t) {
                t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
            }
        }),
        w.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? w.extend({}, e) : {
                complete: n || !n && t || h(e) && e,
                duration: e,
                easing: n && t || t && !h(t) && t
            };
            return w.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in w.fx.speeds ? i.duration = w.fx.speeds[i.duration] : i.duration = w.fx.speeds._default),
            null != i.queue && !0 !== i.queue || (i.queue = "fx"),
            i.old = i.complete,
            i.complete = function () {
                h(i.old) && i.old.call(this),
                i.queue && w.dequeue(this, i.queue)
            },
            i
        },
        w.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(se).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function (e, t, n, i) {
                var r = w.isEmptyObject(e),
                o = w.speed(t, n, i),
                a = function () {
                    var t = ft(this, w.extend({}, e), o);
                    (r || Q.get(this, "finish")) && t.stop(!0)
                };
                return a.finish = a,
                r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop,
                    t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0),
                t && !1 !== e && this.queue(e || "fx", []),
                this.each((function () {
                        var t = !0,
                        r = null != e && e + "queueHooks",
                        o = w.timers,
                        a = Q.get(this);
                        if (r)
                            a[r] && a[r].stop && i(a[r]);
                        else
                            for (r in a)
                                a[r] && a[r].stop && lt.test(r) && i(a[r]);
                        for (r = o.length; r--; )
                            o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                        !t && n || w.dequeue(this, e)
                    }))
            },
            finish: function (e) {
                return !1 !== e && (e = e || "fx"),
                this.each((function () {
                        var t,
                        n = Q.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = w.timers,
                        a = i ? i.length : 0;
                        for (n.finish = !0, w.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--; )
                            o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < a; t++)
                            i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    }))
            }
        }),
        w.each(["toggle", "show", "hide"], (function (e, t) {
                var n = w.fn[t];
                w.fn[t] = function (e, i, r) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, i, r)
                }
            })),
        w.each({
            slideDown: dt("show"),
            slideUp: dt("hide"),
            slideToggle: dt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, (function (e, t) {
                w.fn[e] = function (e, n, i) {
                    return this.animate(t, e, n, i)
                }
            })),
        w.timers = [],
        w.fx.tick = function () {
            var e,
            t = 0,
            n = w.timers;
            for (it = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || w.fx.stop(),
            it = void 0
        },
        w.fx.timer = function (e) {
            w.timers.push(e),
            w.fx.start()
        },
        w.fx.interval = 13,
        w.fx.start = function () {
            rt || (rt = !0, ct())
        },
        w.fx.stop = function () {
            rt = null
        },
        w.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        w.fn.delay = function (t, n) {
            return t = w.fx && w.fx.speeds[t] || t,
            n = n || "fx",
            this.queue(n, (function (n, i) {
                    var r = e.setTimeout(n, t);
                    i.stop = function () {
                        e.clearTimeout(r)
                    }
                }))
        },
        ot = i.createElement("input"),
        at = i.createElement("select").appendChild(i.createElement("option")),
        ot.type = "checkbox",
        m.checkOn = "" !== ot.value,
        m.optSelected = at.selected,
        (ot = i.createElement("input")).value = "t",
        ot.type = "radio",
        m.radioValue = "t" === ot.value;
        var mt,
        ht = w.expr.attrHandle;
        w.fn.extend({
            attr: function (e, t) {
                return U(this, w.attr, e, t, 1 < arguments.length)
            },
            removeAttr: function (e) {
                return this.each((function () {
                        w.removeAttr(this, e)
                    }))
            }
        }),
        w.extend({
            attr: function (e, t, n) {
                var i,
                r,
                o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (r = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = w.find.attr(e, t)) ? void 0 : i)
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!m.radioValue && "radio" === t && S(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                            t
                        }
                    }
                }
            },
            removeAttr: function (e, t) {
                var n,
                i = 0,
                r = t && t.match(q);
                if (r && 1 === e.nodeType)
                    for (; n = r[i++]; )
                        e.removeAttribute(n)
            }
        }),
        mt = {
            set: function (e, t, n) {
                return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n),
                n
            }
        },
        w.each(w.expr.match.bool.source.match(/\w+/g), (function (e, t) {
                var n = ht[t] || w.find.attr;
                ht[t] = function (e, t, i) {
                    var r,
                    o,
                    a = t.toLowerCase();
                    return i || (o = ht[a], ht[a] = r, r = null != n(e, t, i) ? a : null, ht[a] = o),
                    r
                }
            }));
        var gt = /^(?:input|select|textarea|button)$/i,
        vt = /^(?:a|area)$/i;
        function yt(e) {
            return (e.match(q) || []).join(" ")
        }
        function xt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }
        function bt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(q) || []
        }
        w.fn.extend({
            prop: function (e, t) {
                return U(this, w.prop, e, t, 1 < arguments.length)
            },
            removeProp: function (e) {
                return this.each((function () {
                        delete this[w.propFix[e] || e]
                    }))
            }
        }),
        w.extend({
            prop: function (e, t, n) {
                var i,
                r,
                o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, r = w.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = w.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : gt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for : "htmlFor", class: "className"
        }
    }),
    m.optSelected || (w.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex,
                null
            },
            set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }),
    w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
            w.propFix[this.toLowerCase()] = this
        })),
    w.fn.extend({
        addClass: function (e) {
            var t,
            n,
            i,
            r,
            o,
            a,
            s,
            l = 0;
            if (h(e))
                return this.each((function (t) {
                        w(this).addClass(e.call(this, t, xt(this)))
                    }));
                if ((t = bt(e)).length)
                    for (; n = this[l++]; )
                        if (r = xt(n), i = 1 === n.nodeType && " " + yt(r) + " ") {
                            for (a = 0; o = t[a++]; )
                                i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            r !== (s = yt(i)) && n.setAttribute("class", s)
                        }
                return this
            },
            removeClass: function (e) {
                var t,
                n,
                i,
                r,
                o,
                a,
                s,
                l = 0;
                if (h(e))
                    return this.each((function (t) {
                            w(this).removeClass(e.call(this, t, xt(this)))
                        }));
                if (!arguments.length)
                    return this.attr("class", "");
                if ((t = bt(e)).length)
                    for (; n = this[l++]; )
                        if (r = xt(n), i = 1 === n.nodeType && " " + yt(r) + " ") {
                            for (a = 0; o = t[a++]; )
                                for (; -1 < i.indexOf(" " + o + " "); )
                                    i = i.replace(" " + o + " ", " ");
                            r !== (s = yt(i)) && n.setAttribute("class", s)
                        }
                return this
            },
            toggleClass: function (e, t) {
                var n = typeof e,
                i = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : h(e) ? this.each((function (n) {
                        w(this).toggleClass(e.call(this, n, xt(this), t), t)
                    })) : this.each((function () {
                        var t,
                        r,
                        o,
                        a;
                        if (i)
                            for (r = 0, o = w(this), a = bt(e); t = a[r++]; )
                                o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        else
                            void 0 !== e && "boolean" !== n || ((t = xt(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""))
                    }))
            },
            hasClass: function (e) {
                var t,
                n,
                i = 0;
                for (t = " " + e + " "; n = this[i++]; )
                    if (1 === n.nodeType && -1 < (" " + yt(xt(n)) + " ").indexOf(t))
                        return !0;
                return !1
            }
        });
        var wt = /\r/g;
        w.fn.extend({
            val: function (e) {
                var t,
                n,
                i,
                r = this[0];
                return arguments.length ? (i = h(e), this.each((function (n) {
                            var r;
                            1 === this.nodeType && (null == (r = i ? e.call(this, n, w(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = w.map(r, (function (e) {
                                                    return null == e ? "" : e + ""
                                                }))), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                        }))) : r ? (t = w.valHooks[r.type] || w.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(wt, "") : null == n ? "" : n : void 0
            }
        }),
        w.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = w.find.attr(e, "value");
                        return null != t ? t : yt(w.text(e))
                    }
                },
                select: {
                    get: function (e) {
                        var t,
                        n,
                        i,
                        r = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        l = a ? o + 1 : r.length;
                        for (i = o < 0 ? l : a ? o : 0; i < l; i++)
                            if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
                                if (t = w(n).val(), a)
                                    return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function (e, t) {
                        for (var n, i, r = e.options, o = w.makeArray(t), a = r.length; a--; )
                            ((i = r[a]).selected = -1 < w.inArray(w.valHooks.option.get(i), o)) && (n = !0);
                        return n || (e.selectedIndex = -1),
                        o
                    }
                }
            }
        }),
        w.each(["radio", "checkbox"], (function () {
                w.valHooks[this] = {
                    set: function (e, t) {
                        if (Array.isArray(t))
                            return e.checked = -1 < w.inArray(w(e).val(), t)
                    }
                },
                m.checkOn || (w.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            })),
        m.focusin = "onfocusin" in e;
        var Ct = /^(?:focusinfocus|focusoutblur)$/,
        kt = function (e) {
            e.stopPropagation()
        };
        w.extend(w.event, {
            trigger: function (t, n, r, o) {
                var a,
                s,
                l,
                c,
                u,
                p,
                f,
                m,
                v = [r || i],
                y = d.call(t, "type") ? t.type : t,
                x = d.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = m = l = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !Ct.test(y + w.event.triggered) && (-1 < y.indexOf(".") && (y = (x = y.split(".")).shift(), x.sort()), u = y.indexOf(":") < 0 && "on" + y, (t = t[w.expando] ? t : new w.Event(y, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : w.makeArray(n, [t]), f = w.event.special[y] || {}, o || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                    if (!o && !f.noBubble && !g(r)) {
                        for (c = f.delegateType || y, Ct.test(c + y) || (s = s.parentNode); s; s = s.parentNode)
                            v.push(s), l = s;
                        l === (r.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || e)
                    }
                    for (a = 0; (s = v[a++]) && !t.isPropagationStopped(); )
                        m = s, t.type = 1 < a ? c : f.bindType || y, (p = (Q.get(s, "events") || {})[t.type] && Q.get(s, "handle")) && p.apply(s, n), (p = u && s[u]) && p.apply && G(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                    return t.type = y,
                    o || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(v.pop(), n) || !G(r) || u && h(r[y]) && !g(r) && ((l = r[u]) && (r[u] = null), w.event.triggered = y, t.isPropagationStopped() && m.addEventListener(y, kt), r[y](), t.isPropagationStopped() && m.removeEventListener(y, kt), w.event.triggered = void 0, l && (r[u] = l)),
                    t.result
                }
            },
            simulate: function (e, t, n) {
                var i = w.extend(new w.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                w.event.trigger(i, null, t)
            }
        }),
        w.fn.extend({
            trigger: function (e, t) {
                return this.each((function () {
                        w.event.trigger(e, t, this)
                    }))
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n)
                    return w.event.trigger(e, t, n, !0)
            }
        }),
        m.focusin || w.each({
            focus: "focusin",
            blur: "focusout"
        }, (function (e, t) {
                var n = function (e) {
                    w.event.simulate(t, e.target, w.event.fix(e))
                };
                w.event.special[t] = {
                    setup: function () {
                        var i = this.ownerDocument || this,
                        r = Q.access(i, t);
                        r || i.addEventListener(e, n, !0),
                        Q.access(i, t, (r || 0) + 1)
                    },
                    teardown: function () {
                        var i = this.ownerDocument || this,
                        r = Q.access(i, t) - 1;
                        r ? Q.access(i, t, r) : (i.removeEventListener(e, n, !0), Q.remove(i, t))
                    }
                }
            }));
        var Tt = e.location,
        _t = Date.now(),
        $t = /\?/;
        w.parseXML = function (t) {
            var n;
            if (!t || "string" != typeof t)
                return null;
            try {
                n = (new e.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                n = void 0
            }
            return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t),
            n
        };
        var Et = /\[\]$/,
        St = /\r?\n/g,
        jt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;
        function Dt(e, t, n, i) {
            var r;
            if (Array.isArray(t))
                w.each(t, (function (t, r) {
                        n || Et.test(e) ? i(e, r) : Dt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
                    }));
            else if (n || "object" !== x(t))
                i(e, t);
            else
                for (r in t)
                    Dt(e + "[" + r + "]", t[r], n, i)
        }
        w.param = function (e, t) {
            var n,
            i = [],
            r = function (e, t) {
                var n = h(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (null == e)
                return "";
            if (Array.isArray(e) || e.jquery && !w.isPlainObject(e))
                w.each(e, (function () {
                        r(this.name, this.value)
                    }));
            else
                for (n in e)
                    Dt(n, e[n], t, r);
            return i.join("&")
        },
        w.fn.extend({
            serialize: function () {
                return w.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map((function () {
                        var e = w.prop(this, "elements");
                        return e ? w.makeArray(e) : this
                    })).filter((function () {
                        var e = this.type;
                        return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !jt.test(e) && (this.checked || !pe.test(e))
                    })).map((function (e, t) {
                        var n = w(this).val();
                        return null == n ? null : Array.isArray(n) ? w.map(n, (function (e) {
                                return {
                                    name: t.name,
                                    value: e.replace(St, "\r\n")
                                }
                            })) : {
                            name: t.name,
                            value: n.replace(St, "\r\n")
                        }
                    })).get()
            }
        });
        var Nt = /%20/g,
        Lt = /#.*$/,
        It = /([?&])_=[^&]*/,
        Ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        qt = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Ot = {},
        Ht = {},
        Rt = "*/".concat("*"),
        Mt = i.createElement("a");
        function Bt(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i,
                r = 0,
                o = t.toLowerCase().match(q) || [];
                if (h(n))
                    for (; i = o[r++]; )
                        "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }
        function Ut(e, t, n, i) {
            var r = {},
            o = e === Ht;
            function a(s) {
                var l;
                return r[s] = !0,
                w.each(e[s] || [], (function (e, s) {
                        var c = s(t, n, i);
                        return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1)
                    })),
                l
            }
            return a(t.dataTypes[0]) || !r["*"] && a("*")
        }
        function Wt(e, t) {
            var n,
            i,
            r = w.ajaxSettings.flatOptions || {};
            for (n in t)
                void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && w.extend(!0, e, i),
            e
        }
        Mt.href = Tt.href,
        w.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Tt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Rt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": w.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (e, t) {
                return t ? Wt(Wt(e, w.ajaxSettings), t) : Wt(w.ajaxSettings, e)
            },
            ajaxPrefilter: Bt(Ot),
            ajaxTransport: Bt(Ht),
            ajax: function (t, n) {
                "object" == typeof t && (n = t, t = void 0),
                n = n || {};
                var r,
                o,
                a,
                s,
                l,
                c,
                u,
                d,
                p,
                f,
                m = w.ajaxSetup({}, n),
                h = m.context || m,
                g = m.context && (h.nodeType || h.jquery) ? w(h) : w.event,
                v = w.Deferred(),
                y = w.Callbacks("once memory"),
                x = m.statusCode || {},
                b = {},
                C = {},
                k = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (u) {
                            if (!s)
                                for (s = {}; t = Ft.exec(a); )
                                    s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = s[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function () {
                        return u ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == u && (e = C[e.toLowerCase()] = C[e.toLowerCase()] || e, b[e] = t),
                        this
                    },
                    overrideMimeType: function (e) {
                        return null == u && (m.mimeType = e),
                        this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (u)
                                T.always(e[T.status]);
                            else
                                for (t in e)
                                    x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || k;
                        return r && r.abort(t),
                        _(0, t),
                        this
                    }
                };
                if (v.promise(T), m.url = ((t || m.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), m.type = n.method || n.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(q) || [""], null == m.crossDomain) {
                    c = i.createElement("a");
                    try {
                        c.href = m.url,
                        c.href = c.href,
                        m.crossDomain = Mt.protocol + "//" + Mt.host != c.protocol + "//" + c.host
                    } catch (t) {
                        m.crossDomain = !0
                    }
                }
                if (m.data && m.processData && "string" != typeof m.data && (m.data = w.param(m.data, m.traditional)), Ut(Ot, m, n, T), u)
                    return T;
                for (p in(d = w.event && m.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !qt.test(m.type), o = m.url.replace(Lt, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Nt, "+")) : (f = m.url.slice(o.length), m.data && (m.processData || "string" == typeof m.data) && (o += ($t.test(o) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (o = o.replace(It, "$1"), f = ($t.test(o) ? "&" : "?") + "_=" + _t++ + f), m.url = o + f), m.ifModified && (w.lastModified[o] && T.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && T.setRequestHeader("If-None-Match", w.etag[o])), (m.data && m.hasContent && !1 !== m.contentType || n.contentType) && T.setRequestHeader("Content-Type", m.contentType), T.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : m.accepts["*"]), m.headers)
                    T.setRequestHeader(p, m.headers[p]);
                if (m.beforeSend && (!1 === m.beforeSend.call(h, T, m) || u))
                    return T.abort();
                if (k = "abort", y.add(m.complete), T.done(m.success), T.fail(m.error), r = Ut(Ht, m, n, T)) {
                    if (T.readyState = 1, d && g.trigger("ajaxSend", [T, m]), u)
                        return T;
                    m.async && 0 < m.timeout && (l = e.setTimeout((function () {
                                    T.abort("timeout")
                                }), m.timeout));
                    try {
                        u = !1,
                        r.send(b, _)
                    } catch (t) {
                        if (u)
                            throw t;
                        _(-1, t)
                    }
                } else
                    _(-1, "No Transport");
                function _(t, n, i, s) {
                    var c,
                    p,
                    f,
                    b,
                    C,
                    k = n;
                    u || (u = !0, l && e.clearTimeout(l), r = void 0, a = s || "", T.readyState = 0 < t ? 4 : 0, c = 200 <= t && t < 300 || 304 === t, i && (b = function (e, t, n) {
                            for (var i, r, o, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
                                l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (i)
                                for (r in s)
                                    if (s[r] && s[r].test(i)) {
                                        l.unshift(r);
                                        break
                                    }
                            if (l[0]in n)
                                o = l[0];
                            else {
                                for (r in n) {
                                    if (!l[0] || e.converters[r + " " + l[0]]) {
                                        o = r;
                                        break
                                    }
                                    a || (a = r)
                                }
                                o = o || a
                            }
                            if (o)
                                return o !== l[0] && l.unshift(o), n[o]
                        }
                            (m, T, i)), b = function (e, t, n, i) {
                        var r,
                        o,
                        a,
                        s,
                        l,
                        c = {},
                        u = e.dataTypes.slice();
                        if (u[1])
                            for (a in e.converters)
                                c[a.toLowerCase()] = e.converters[a];
                        for (o = u.shift(); o; )
                            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                                if ("*" === o)
                                    o = l;
                                else if ("*" !== l && l !== o) {
                                    if (!(a = c[l + " " + o] || c["* " + o]))
                                        for (r in c)
                                            if ((s = r.split(" "))[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                                !0 === a ? a = c[r] : !0 !== c[r] && (o = s[0], u.unshift(s[1]));
                                                break
                                            }
                                    if (!0 !== a)
                                        if (a && e.throws)
                                            t = a(t);
                                        else
                                            try {
                                                t = a(t)
                                            } catch (e) {
                                                return {
                                                    state: "parsererror",
                                                    error: a ? e : "No conversion from " + l + " to " + o
                                                }
                                            }
                                }
                        return {
                            state: "success",
                            data: t
                        }
                    }
                        (m, b, T, c), c ? (m.ifModified && ((C = T.getResponseHeader("Last-Modified")) && (w.lastModified[o] = C), (C = T.getResponseHeader("etag")) && (w.etag[o] = C)), 204 === t || "HEAD" === m.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = b.state, p = b.data, c = !(f = b.error))) : (f = k, !t && k || (k = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || k) + "", c ? v.resolveWith(h, [p, k, T]) : v.rejectWith(h, [T, k, f]), T.statusCode(x), x = void 0, d && g.trigger(c ? "ajaxSuccess" : "ajaxError", [T, m, c ? p : f]), y.fireWith(h, [T, k]), d && (g.trigger("ajaxComplete", [T, m]), --w.active || w.event.trigger("ajaxStop")))
                }
                return T
            },
            getJSON: function (e, t, n) {
                return w.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return w.get(e, void 0, t, "script")
            }
        }),
        w.each(["get", "post"], (function (e, t) {
                w[t] = function (e, n, i, r) {
                    return h(n) && (r = r || i, i = n, n = void 0),
                    w.ajax(w.extend({
                            url: e,
                            type: t,
                            dataType: r,
                            data: n,
                            success: i
                        }, w.isPlainObject(e) && e))
                }
            })),
        w._evalUrl = function (e, t) {
            return w.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function () {}
                },
                dataFilter: function (e) {
                    w.globalEval(e, t)
                }
            })
        },
        w.fn.extend({
            wrapAll: function (e) {
                var t;
                return this[0] && (h(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function () {
                            for (var e = this; e.firstElementChild; )
                                e = e.firstElementChild;
                            return e
                        })).append(this)),
                this
            },
            wrapInner: function (e) {
                return h(e) ? this.each((function (t) {
                        w(this).wrapInner(e.call(this, t))
                    })) : this.each((function () {
                        var t = w(this),
                        n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    }))
            },
            wrap: function (e) {
                var t = h(e);
                return this.each((function (n) {
                        w(this).wrapAll(t ? e.call(this, n) : e)
                    }))
            },
            unwrap: function (e) {
                return this.parent(e).not("body").each((function () {
                        w(this).replaceWith(this.childNodes)
                    })),
                this
            }
        }),
        w.expr.pseudos.hidden = function (e) {
            return !w.expr.pseudos.visible(e)
        },
        w.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        },
        w.ajaxSettings.xhr = function () {
            try {
                return new e.XMLHttpRequest
            } catch (e) {}
        };
        var zt = {
            0: 200,
            1223: 204
        },
        Xt = w.ajaxSettings.xhr();
        m.cors = !!Xt && "withCredentials" in Xt,
        m.ajax = Xt = !!Xt,
        w.ajaxTransport((function (t) {
                var n,
                i;
                if (m.cors || Xt && !t.crossDomain)
                    return {
                        send: function (r, o) {
                            var a,
                            s = t.xhr();
                            if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                                for (a in t.xhrFields)
                                    s[a] = t.xhrFields[a];
                            for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r)
                                s.setRequestHeader(a, r[a]);
                            n = function (e) {
                                return function () {
                                    n && (n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(zt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                            binary: s.response
                                        }
                                             : {
                                            text: s.responseText
                                        }, s.getAllResponseHeaders()))
                                }
                            },
                            s.onload = n(),
                            i = s.onerror = s.ontimeout = n("error"),
                            void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function () {
                                4 === s.readyState && e.setTimeout((function () {
                                        n && i()
                                    }))
                            },
                            n = n("abort");
                            try {
                                s.send(t.hasContent && t.data || null)
                            } catch (r) {
                                if (n)
                                    throw r
                            }
                        },
                        abort: function () {
                            n && n()
                        }
                    }
            })),
        w.ajaxPrefilter((function (e) {
                e.crossDomain && (e.contents.script = !1)
            })),
        w.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (e) {
                    return w.globalEval(e),
                    e
                }
            }
        }),
        w.ajaxPrefilter("script", (function (e) {
                void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET")
            })),
        w.ajaxTransport("script", (function (e) {
                var t,
                n;
                if (e.crossDomain || e.scriptAttrs)
                    return {
                        send: function (r, o) {
                            t = w("<script>").attr(e.scriptAttrs || {}).prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function (e) {
                                    t.remove(),
                                    n = null,
                                    e && o("error" === e.type ? 404 : 200, e.type)
                                }),
                            i.head.appendChild(t[0])
                        },
                        abort: function () {
                            n && n()
                        }
                    }
            }));
        var Vt,
        Gt = [],
        Jt = /(=)\?(?=&|$)|\?\?/;
        w.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var e = Gt.pop() || w.expando + "_" + _t++;
                return this[e] = !0,
                e
            }
        }),
        w.ajaxPrefilter("json jsonp", (function (t, n, i) {
                var r,
                o,
                a,
                s = !1 !== t.jsonp && (Jt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Jt.test(t.data) && "data");
                if (s || "jsonp" === t.dataTypes[0])
                    return r = t.jsonpCallback = h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Jt, "$1" + r) : !1 !== t.jsonp && (t.url += ($t.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
                        return a || w.error(r + " was not called"),
                        a[0]
                    },
                t.dataTypes[0] = "json",
                o = e[r],
                e[r] = function () {
                    a = arguments
                },
                i.always((function () {
                        void 0 === o ? w(e).removeProp(r) : e[r] = o,
                        t[r] && (t.jsonpCallback = n.jsonpCallback, Gt.push(r)),
                        a && h(o) && o(a[0]),
                        a = o = void 0
                    })),
                "script"
            })),
        m.createHTMLDocument = ((Vt = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length),
        w.parseHTML = function (e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((r = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(r)) : t = i), a = !n && [], (o = j.exec(e)) ? [t.createElement(o[1])] : (o = we([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes)));
            var r,
            o,
            a
        },
        w.fn.load = function (e, t, n) {
            var i,
            r,
            o,
            a = this,
            s = e.indexOf(" ");
            return -1 < s && (i = yt(e.slice(s)), e = e.slice(0, s)),
            h(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"),
            0 < a.length && w.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            }).done((function (e) {
                    o = arguments,
                    a.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e)
                })).always(n && function (e, t) {
                a.each((function () {
                        n.apply(this, o || [e.responseText, t, e])
                    }))
            }),
            this
        },
        w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (e, t) {
                w.fn[t] = function (e) {
                    return this.on(t, e)
                }
            })),
        w.expr.pseudos.animated = function (e) {
            return w.grep(w.timers, (function (t) {
                    return e === t.elem
                })).length
        },
        w.offset = {
            setOffset: function (e, t, n) {
                var i,
                r,
                o,
                a,
                s,
                l,
                c = w.css(e, "position"),
                u = w(e),
                d = {};
                "static" === c && (e.style.position = "relative"),
                s = u.offset(),
                o = w.css(e, "top"),
                l = w.css(e, "left"),
                ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (a = (i = u.position()).top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0),
                h(t) && (t = t.call(e, n, w.extend({}, s))),
                null != t.top && (d.top = t.top - s.top + a),
                null != t.left && (d.left = t.left - s.left + r),
                "using" in t ? t.using.call(e, d) : u.css(d)
            }
        },
        w.fn.extend({
            offset: function (e) {
                if (arguments.length)
                    return void 0 === e ? this : this.each((function (t) {
                            w.offset.setOffset(this, e, t)
                        }));
                var t,
                n,
                i = this[0];
                return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                }
                 : void 0
            },
            position: function () {
                if (this[0]) {
                    var e,
                    t,
                    n,
                    i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                    if ("fixed" === w.css(i, "position"))
                        t = i.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position"); )
                            e = e.parentNode;
                        e && e !== i && 1 === e.nodeType && ((r = w(e).offset()).top += w.css(e, "borderTopWidth", !0), r.left += w.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - r.top - w.css(i, "marginTop", !0),
                        left: t.left - r.left - w.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map((function () {
                        for (var e = this.offsetParent; e && "static" === w.css(e, "position"); )
                            e = e.offsetParent;
                        return e || re
                    }))
            }
        }),
        w.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, (function (e, t) {
                var n = "pageYOffset" === t;
                w.fn[e] = function (i) {
                    return U(this, (function (e, i, r) {
                            var o;
                            if (g(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r)
                                return o ? o[t] : e[i];
                            o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
                        }), e, i, arguments.length)
                }
            })),
        w.each(["top", "left"], (function (e, t) {
                w.cssHooks[t] = We(m.pixelPosition, (function (e, n) {
                            if (n)
                                return n = Ue(e, t), Re.test(n) ? w(e).position()[t] + "px" : n
                        }))
            })),
        w.each({
            Height: "height",
            Width: "width"
        }, (function (e, t) {
                w.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, (function (n, i) {
                        w.fn[i] = function (r, o) {
                            var a = arguments.length && (n || "boolean" != typeof r),
                            s = n || (!0 === r || !0 === o ? "margin" : "border");
                            return U(this, (function (t, n, r) {
                                    var o;
                                    return g(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? w.css(t, n, s) : w.style(t, n, r, s)
                                }), t, a ? r : void 0, a)
                        }
                    }))
            })),
        w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (e, t) {
                w.fn[t] = function (e, n) {
                    return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
                }
            })),
        w.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        w.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function (e, t) {
                return this.off(e, null, t)
            },
            delegate: function (e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }),
        w.proxy = function (e, t) {
            var n,
            i,
            r;
            if ("string" == typeof t && (n = e[t], t = e, e = n), h(e))
                return i = o.call(arguments, 2), (r = function () {
                    return e.apply(t || this, i.concat(o.call(arguments)))
                }).guid = e.guid = e.guid || w.guid++, r
        },
        w.holdReady = function (e) {
            e ? w.readyWait++ : w.ready(!0)
        },
        w.isArray = Array.isArray,
        w.parseJSON = JSON.parse,
        w.nodeName = S,
        w.isFunction = h,
        w.isWindow = g,
        w.camelCase = V,
        w.type = x,
        w.now = Date.now,
        w.isNumeric = function (e) {
            var t = w.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        "function" == typeof define && define.amd && define("jquery", [], (function () {
                return w
            }));
        var Qt = e.jQuery,
        Yt = e.$;
        return w.noConflict = function (t) {
            return e.$ === w && (e.$ = Yt),
            t && e.jQuery === w && (e.jQuery = Qt),
            w
        },
        t || (e.jQuery = e.$ = w),
        w
    })), UI.dark_mode && document.write('<meta name="theme-color" content="#273139">'), UI.dark_mode ? document.write('<link rel="stylesheet" href="//rawcdn.githack.com/cheems/goindex-extended/b46bb643bb1c1314b669142e5e62d96a877b952b/css/mdui_v2_dark.min.css">') : document.write('<link rel="stylesheet" href="//rawcdn.githack.com/cheems/goindex-extended/b46bb643bb1c1314b669142e5e62d96a877b952b/css/mdui_v2.min.css">'), UI.dark_mode ? document.write('<link rel="stylesheet" href="//rawcdn.githack.com/cheems/goindex-extended/f9af6b2192974a4a9c1b222efed8d29ca6cd1927/css/nexmoe_v2_dark.min.css">') : document.write('<link rel="stylesheet" href="//rawcdn.githack.com/cheems/goindex-extended/f9af6b2192974a4a9c1b222efed8d29ca6cd1927/css/nexmoe_v2.min.css">'), document.write('<script src="//rawcdn.githack.com/cheems/goindex-extended/295ceaf2d64b2cb8578b21c0313d75b7bc8738a1/js/mdui.min.js"><\/script>'), document.write('<script src="//rawcdn.githack.com/cheems/goindex-extended/295ceaf2d64b2cb8578b21c0313d75b7bc8738a1/js/flv.min.js"><\/script>'), document.write('<script src="//yuno.pw/go/DPlayer.js"><\/script>'), document.write('<script src="//cdn.jsdelivr.net/npm/marked@4.2.12/marked.min.js"><\/script>'), document.write("<style>.mdui-appbar .mdui-toolbar{height:56px;font-size:1pc}.mdui-toolbar>i{opacity:.5}.mdui-toolbar>i{padding:0}.mdui-toolbar>a:hover,a.active,a.mdui-typo-headline{opacity:1}.mdui-container{max-width:1120px}.mdui-list-item{transition:none}.mdui-list>.th{background-color:initial}.mdui-list-item>a{width:100%;line-height:3pc}.mdui-list-item{margin:2px 0;padding:0}.mdui-toolbar>a:last-child{opacity:1; color: #000}@media screen and (max-width:10px){.mdui-list-item .mdui-text-right{display:none}.mdui-container{width:100%!important;margin:0}}</style>"), UI.dark_mode && document.write("<style>* {box-sizing: border-box}body{color:rgba(255,255,255,.87);background-color:#1E252F}.mdui-theme-primary-${UI.main_color} .mdui-color-theme{background-color:#1E252F!important} .nexmoe-item{background-color: #ffffff0d!important;box-shadow:0 0.2em 1em rgb(0 0 0 / 30%)!important} .mdui-list-item{border: 0px solid rgb(255 255 255 / 10%)!important}.mdui-toolbar>a:last-child{color: #FFF}.mdui-select-menu{box-shadow: 0 0.2em 1em rgba(100, 100, 100, 0.2)!important} .mdui-text-color-blue-grey-500{color: #e3e4e5 !important} .mdui-textfield-label{color: rgba(255, 255, 255, .54)!important}</style>"), UI.hide_actions_tab && document.write("<style>.dummyclass{display: none!important}</style>"), "" === UI.helpURL && document.write("<style>.dummyclass2{display: none!important}</style>");
const nav_style_colors = {
    red: {
        "background-color": "#932020",
        color: "#FFF"
    },
    pink: {
        "background-color": "#FF4081",
        color: "#FFF"
    },
    purple: {
        "background-color": "#E040FB",
        color: "#FFF"
    },
    "deep-purple": {
        "background-color": "#7C4DFF",
        color: "#FFF"
    },
    indigo: {
        "background-color": "#536DFE",
        color: "#FFF"
    },
    blue: {
        "background-color": "#335CA1",
        color: "#FFF"
    },
    "light-blue": {
        "background-color": "#40C4FF",
        color: "#FFF"
    },
    cyan: {
        "background-color": "#18FFFF",
        color: "#000"
    },
    teal: {
        "background-color": "#64FFDA",
        color: "#000"
    },
    green: {
        "background-color": "#69F0AE",
        color: "#FFF"
    },
    "light-green": {
        "background-color": "#B2FF59",
        color: "#000"
    },
    lime: {
        "background-color": "#EEFF41",
        color: "#000"
    },
    yellow: {
        "background-color": "#FFFF00",
        color: "#000"
    },
    amber: {
        "background-color": "#FFD740",
        color: "#FFF"
    },
    orange: {
        "background-color": "#FFAB40",
        color: "#FFF"
    },
    "deep-orange": {
        "background-color": "#FF6E40",
        color: "#FFF"
    }
};
function init() {
    document.siteName = $("title").html(),
    $("body").addClass(`mdui-theme-primary-${UI.main_color} mdui-theme-accent-${UI.accent_color}`);
    var e = `\n<div class="mdui-container">\n\t<div class="mdui-container-fluid">\n\t\t<div id="nav" class="mdui-toolbar nexmoe-item nav-style"> </div>\n    </div>\n\t<div class="mdui-container-fluid">\n\t\t<div id="head_md" class="mdui-typo nexmoe-item" style="display:none;padding: 20px 0;"></div>\n\t\t<div id="content" class="nexmoe-item"></div>\n\t \t<div id="readme_md" class="mdui-typo nexmoe-item" style="display:none; padding: 20px 0;"></div>\n  </div>\n  <div class="mdui-center mdui-text-center mdui-text-color-blue-grey-5001" style="margin-bottom: 20px">${UI.footer_text}</div>\n  `;
    UI.credits ? e += '\n    <div style="margin-bottom: 20px" class="mdui-center mdui-text-center">\n      <a href="https://github.com/cheems/goindex-extended" target="_blank">\n        <img src="https://img.shields.io/static/v1?label=cheems&amp;message=goindex-extended&amp;color=1E89F2&amp;labelColor=374455&amp;logo=github" alt="cheems - goindex-extended">\n      </a>\n    </div>\n    </div>\n    ' : e += "\n    </div>\n    ",
    $("body").html(e)
}
document.write(`<style>.nav-style > a:hover {background-color: ${nav_style_colors[UI.accent_color]["background-color"]}!important; color: ${nav_style_colors[UI.accent_color].color}!important}</style>`), document.write("<style>.dummyclass3{max-width: 600px}@media screen and (max-width:1120px){.dummyclass3{display:none}}</style>");
const Os = {
    isWindows: navigator.platform.toUpperCase().indexOf("WIN") > -1,
    isMac: navigator.platform.toUpperCase().indexOf("MAC") > -1,
    isMacLike: /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),
    isIos: /(iPhone|iPod|iPad)/i.test(navigator.platform),
    isMobile: /Android|webOS|iPhone|iPad|iPod|iOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
};
function getDocumentHeight() {
    var e = document;
    return Math.max(e.body.scrollHeight, e.documentElement.scrollHeight, e.body.offsetHeight, e.documentElement.offsetHeight, e.body.clientHeight, e.documentElement.clientHeight)
}
function render(e) {
    e.indexOf("?") > 0 && (e = e.substr(0, e.indexOf("?"))),
    UI.title_include_path || UI.title_include_drive_name ? title(e) : $("title").html(`${document.siteName}`),
    nav(e);
    window.MODEL.is_search_page ? (window.scroll_status = {
            event_bound: !1,
            loading_lock: !1
        }, render_search_result_list()) : e.match(/\/\d+:$/g) || "/" == e.substr(-1) ? (window.scroll_status = {
            event_bound: !1,
            loading_lock: !1
        }, list(e)) : file(e)
}
function title(e) {
    "/" !== e.slice(-1) ? e = decodeURIComponent(e.trim("/").split("/").slice(-1)[0].replaceAll("%5C%5C", "%5C")) : "full-path" === UI.title_include_path ? e = decodeURIComponent(e.replaceAll("%5C%5C", "%5C")) : "current-directory" === UI.title_include_path && (e = "/" + decodeURIComponent(e.trim("/").split("/").slice(-1)[0].replaceAll("%5C%5C", "%5C")) + "/");
    var t = window.current_drive_order || 0,
    n = window.drive_names[t];
    e = e.replace(`/${t}:`, "");
    var i = window.MODEL,
    r = `${document.siteName}`;
    UI.title_include_drive_name && (r += ` - ${n}`),
    i.is_search_page ? (r += ` - Search Result for ${i.q}`, $("title").html(r)) : (UI.title_include_path && (r += ` - ${e}`), $("title").html(r))
}
function nav(e) {
    var t = window.MODEL,
    n = "",
    r = window.current_drive_order || 0,
    o = window.drive_names;
    if (n += '<select class="mdui-select" onchange="window.location.href=this.value" mdui-select style="overflow:visible;">', o.forEach(((e, t) => {
                n += `<option value="/${t}:/"  ${t===r?'selected="selected"':""} >${e}</option>`
            })), n += '</select><div class="mdui-toolbar nav-style dummyclass3" style="margin-top:0px!important">', n += `<a href="/${r}:/" class="mdui-typo-headline folder" style="background-color:transparent">${document.siteName}</a>`, !t.is_search_page) {
        var a = e.trim("/").split("/"),
        s = "/";
        if (a.length > 1)
            for (i in a.shift(), a) {
                var l = a[i];
                if (l = decodeURIComponent(l.replaceAll("%5C%5C", "%5C")), s += encodeURIComponent(l).replaceAll("%5C", "%5C%5C").replace(/[!'()*]/g, escape) + "/", "" == l)
                    break;
                n += `<i class="mdui-icon material-icons mdui-icon-dark folder" style="margin:0;">chevron_right</i><a class="folder" style="background-color:transparent;max-width:230px" href="/${r}:${s}">${l}</a>`
            }
    }
    n += "</div>";
    var c = t.is_search_page && t.q || "";
    const u = Os.isMobile;
    var d = `<div class="mdui-toolbar-spacer"></div>\n        <div id="search_bar" class="mdui-textfield mdui-textfield-expandable mdui-float-right ${t.is_search_page?"mdui-textfield-expanded":""}" style="max-width:${u?300:400}px">\n            <button class="mdui-textfield-icon mdui-btn mdui-btn-icon" onclick="if($('#search_bar').hasClass('mdui-textfield-expanded') && $('#search_bar_form>input').val()) $('#search_bar_form').submit(); $('.mdui-select').addClass('hidedropdown');">\n                <i class="mdui-icon material-icons">search</i>\n            </button>\n            <form id="search_bar_form" method="get" action="/${r}:search">\n            <input class="mdui-textfield-input" type="text" name="q" placeholder="Search in current index" value="${c}"/>\n            </form>\n            <button class="mdui-textfield-close mdui-btn mdui-btn-icon" onclick="$('.mdui-select').removeClass('hidedropdown');"><i class="mdui-icon material-icons">close</i></button>\n        </div>\n        <button class="mdui-textfield-icon mdui-btn mdui-btn-icon dummyclass2" onclick="window.open('${UI.helpURL}','_blank')">\n          <i class="mdui-icon material-icons">help_outline</i>\n        </button>`;
    n += d,
    $("#nav").html(n),
    mdui.mutation(),
    mdui.updateTextFields()
}
function requestListPath(e, t, n, i) {
    var r = {
        password: t.password || null,
        page_token: t.page_token || null,
        page_index: t.page_index || 0
    };
    $.post(e, r, (function (t, o) {
            var a = jQuery.parseJSON(t);
            a && a.error && "401" == a.error.code ? i && i(e) : a && a.data && n && n(a, e, r)
        }))
}
function requestSearch(e, t) {
    var n = {
        q: e.q || null,
        page_token: e.page_token || null,
        page_index: e.page_index || 0
    };
    $.post(`/${window.current_drive_order}:search`, n, (function (e, i) {
            var r = jQuery.parseJSON(e);
            r && r.data && t && t(r, n)
        }))
}
function list(e) {
    $("#content").html('\n\t <div class="mdui-row"> \n\t  <ul class="mdui-list"> \n\t   <li class="mdui-list-item th"> \n\t    <div class="mdui-col-xs-12 mdui-col-sm-7">\n\t     File\n\t<i class="mdui-icon material-icons icon-sort" data-sort="name" data-order="more">expand_more</i>\n\t    </div> \n\t    <div class="mdui-col-sm-3 mdui-text-right">\n\t\tDate Modified\n\t<i class="mdui-icon material-icons icon-sort" data-sort="date" data-order="downward">expand_more</i>\n\t    </div> \n\t    <div class="mdui-col-sm-2 mdui-text-right">\n\t     Size\n\t<i class="mdui-icon material-icons icon-sort" data-sort="size" data-order="downward">expand_more</i>\n\t    </div>\n      <div class="mdui-col-sm-2 mdui-text-right dummyclass">\n    Actions\n  <i class="mdui-icon material-icons icon-sort" data-sort="size" data-order="downward">expand_more</i>\n    </div>  \n\t    </li> \n\t  </ul> \n\t </div> \n\t <div class="mdui-row"> \n\t  <ul id="list" class="mdui-list"> \n\t  </ul> \n\t  <div id="count" class="mdui-hidden mdui-center mdui-text-center mdui-m-b-3 mdui-typo-subheading mdui-text-color-blue-grey-500">Total <span class="number"></span> item(s)</div>\n\t </div>\n\t');
    var t = localStorage.getItem("password" + e);
    $("#list").html('<div class="mdui-progress"><div class="mdui-progress-indeterminate"></div></div>'),
    $("#readme_md").hide().html(""),
    $("#head_md").hide().html(""),
    requestListPath(e, {
        password: t
    }, (function e(t, n, i) {
            $("#list").data("nextPageToken", t.nextPageToken).data("curPageIndex", t.curPageIndex),
            $("#spinner").remove(),
            null === t.nextPageToken ? ($(window).off("scroll"), window.scroll_status.event_bound = !1, window.scroll_status.loading_lock = !1, append_files_to_list(n, t.data.files)) : (append_files_to_list(n, t.data.files), !0 !== window.scroll_status.event_bound && ($(window).on("scroll", (function () {
                            var t = $(this).scrollTop(),
                            r = getDocumentHeight();
                            if (t + $(this).height() > r - (Os.isMobile ? 130 : 80)) {
                                if (!0 === window.scroll_status.loading_lock)
                                    return;
                                window.scroll_status.loading_lock = !0,
                                $('<div id="spinner" class="mdui-spinner mdui-spinner-colorful mdui-center"></div>').insertBefore("#readme_md"),
                                mdui.updateSpinners();
                                let t = $("#list");
                                requestListPath(n, {
                                    password: i.password,
                                    page_token: t.data("nextPageToken"),
                                    page_index: t.data("curPageIndex") + 1
                                }, e, null)
                            }
                        })), window.scroll_status.event_bound = !0)),
            !0 === window.scroll_status.loading_lock && (window.scroll_status.loading_lock = !1)
        }), (function (e) {
            $("#spinner").remove();
            var t = prompt("Directory encrypted, Please enter the Password", "");
            localStorage.setItem("password" + e, t),
            null != t && "" != t ? list(e) : history.go(-1)
        }))
}
function append_files_to_list(e, t) {
    var n = $("#list"),
    r = null === n.data("nextPageToken"),
    o = "0" == n.data("curPageIndex");
    html = "";
    let a = [];
    for (i in t) {
        var s = t[i],
        l = e + encodeURIComponent(s.name).replaceAll("%5C", "%5C%5C").replace(/[!'()*]/g, escape) + "/";
        if (null == s.size && (s.size = ""), s.modifiedTime = utc2local(s.modifiedTime), s.size = formatFileSize(s.size), "application/vnd.google-apps.folder" == s.mimeType)
            html += `<li class="mdui-list-item mdui-ripple"><a href="${l}" class="folder">\n\t            <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate" title="${s.name}">\n\t            <i class="mdui-icon material-icons">folder_open</i>\n\t              ${s.name}\n\t            </div>\n\t            <div class="mdui-col-sm-3 mdui-text-right">${s.modifiedTime}</div>\n\t            <div class="mdui-col-sm-2 mdui-text-right">${s.size}</div>\n\t            </a>\n              <div class="mdui-col-sm-2 mdui-text-right dummyclass">\n\t              <button onclick="window.open('${l}','_blank')" class="mdui-textfield-icon mdui-btn mdui-btn-icon dummyclass" style="float: right;">\n                  <i class="mdui-icon material-icons dummyclass">launch</i>\n                </button>\n                <button onclick="(function setClipboard(value) {var tempInput = document.createElement('input');tempInput.style = 'position: absolute; left: -1000px; top: -1000px';tempInput.value = value;document.body.appendChild(tempInput);tempInput.select();document.execCommand('copy');document.body.removeChild(tempInput);})(window.location.protocol + '//' + window.location.hostname + '${l}')" class="mdui-textfield-icon mdui-btn mdui-btn-icon dummyclass" style="float: right;">\n                  <i class="mdui-icon material-icons dummyclass">content_copy</i>\n                </button>\n              </div>\n\t        </li>`;
        else {
            var c = l = e + encodeURIComponent(s.name).replaceAll("%5C", "%5C%5C").replace(/[!'()*]/g, escape);
            const t = e + s.name;
            var u = "file";
            r && "README.md" == s.name && !UI.hide_readme_md && get_file(l, s, (function (e) {
                    markdown("#readme_md", e)
                })),
            "HEAD.md" != s.name || UI.hide_head_md || get_file(l, s, (function (e) {
                    markdown("#head_md", e)
                }));
            var d = l.split(".").pop().toLowerCase();
            "|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|flac|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|pdf|".indexOf(`|${d}|`) >= 0 && (a.push(t), l += "?a=view", u += " view"),
            "" === s.size && (s.size = "— — —"),
            html += `<li class="mdui-list-item file mdui-ripple" target="_blank"><a gd-type="${s.mimeType}" href="${l}" class="${u}">\n\t          <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate" title="${s.name}">\n\t          <i class="mdui-icon material-icons">insert_drive_file</i>\n\t            ${s.name}\n\t          </div>\n\t          <div class="mdui-col-sm-3 mdui-text-right">${s.modifiedTime}</div>\n\t          <div class="mdui-col-sm-2 mdui-text-right">${s.size}</div>\n\t          </a>\n            <div class="mdui-col-sm-2 mdui-text-right dummyclass">\n\t            <button onclick="window.open('${c}','_self')" class="mdui-textfield-icon mdui-btn mdui-btn-icon dummyclass" style="float: right;">\n                <i class="mdui-icon material-icons dummyclass">file_download</i>\n              </button>\n              <button onclick="window.open('${l}','_blank')" class="mdui-textfield-icon mdui-btn mdui-btn-icon dummyclass" style="float: right;">\n                <i class="mdui-icon material-icons dummyclass">launch</i>\n              </button>\n              <button onclick="(function setClipboard(value) {var tempInput = document.createElement('input');tempInput.style = 'position: absolute; left: -1000px; top: -1000px';tempInput.value = value;document.body.appendChild(tempInput);tempInput.select();document.execCommand('copy');document.body.removeChild(tempInput);})(window.location.protocol + '//' + window.location.hostname + '${c}')" class="mdui-textfield-icon mdui-btn mdui-btn-icon dummyclass" style="float: right;">\n                <i class="mdui-icon material-icons dummyclass">content_copy</i>\n              </button>\n            </div>\n\t      </li>`
        }
    }
    if (a.length > 0) {
        let t = localStorage.getItem(e),
        n = a;
        if (!o && t) {
            let e;
            try {
                e = JSON.parse(t),
                Array.isArray(e) || (e = [])
            } catch (t) {
                e = []
            }
            n = e.concat(a)
        }
        localStorage.setItem(e, JSON.stringify(n))
    }
    n.html(("0" == n.data("curPageIndex") ? "" : n.html()) + html),
    r && $("#count").removeClass("mdui-hidden").find(".number").text(n.find("li.mdui-list-item").length)
}
function render_search_result_list() {
    $("#content").html('\n\t<div id="head_md" class="mdui-typo" style="display:none;padding: 20px 0;"></div>\n\n\t <div class="mdui-row"> \n\t  <ul class="mdui-list"> \n\t   <li class="mdui-list-item th"> \n\t    <div class="mdui-col-xs-12 mdui-col-sm-7">\n\t     File\n\t<i class="mdui-icon material-icons icon-sort" data-sort="name" data-order="more">expand_more</i>\n\t    </div> \n\t    <div class="mdui-col-sm-3 mdui-text-right">\n\t     Date Modified\n\t<i class="mdui-icon material-icons icon-sort" data-sort="date" data-order="downward">expand_more</i>\n\t    </div> \n\t    <div class="mdui-col-sm-2 mdui-text-right">\n\t     Size\n\t<i class="mdui-icon material-icons icon-sort" data-sort="size" data-order="downward">expand_more</i>\n\t    </div> \n\t    </li> \n\t  </ul> \n\t </div> \n\t <div class="mdui-row"> \n\t  <ul id="list" class="mdui-list"> \n\t  </ul> \n\t  <div id="count" class="mdui-hidden mdui-center mdui-text-center mdui-m-b-3 mdui-typo-subheading mdui-text-color-blue-grey-500">Total <span class="number"></span> item(s)</div>\n\t </div>\n\t <div id="readme_md" class="mdui-typo" style="display:none; padding: 20px 0;"></div>\n\t'),
    $("#list").html('<div class="mdui-progress"><div class="mdui-progress-indeterminate"></div></div>'),
    $("#readme_md").hide().html(""),
    $("#head_md").hide().html(""),
    requestSearch({
        q: window.MODEL.q
    }, (function e(t, n) {
            $("#list").data("nextPageToken", t.nextPageToken).data("curPageIndex", t.curPageIndex),
            $("#spinner").remove(),
            null === t.nextPageToken ? ($(window).off("scroll"), window.scroll_status.event_bound = !1, window.scroll_status.loading_lock = !1, append_search_result_to_list(t.data.files)) : (append_search_result_to_list(t.data.files), !0 !== window.scroll_status.event_bound && ($(window).on("scroll", (function () {
                            var t = $(this).scrollTop(),
                            n = getDocumentHeight();
                            if (t + $(this).height() > n - (Os.isMobile ? 130 : 80)) {
                                if (!0 === window.scroll_status.loading_lock)
                                    return;
                                window.scroll_status.loading_lock = !0,
                                $('<div id="spinner" class="mdui-spinner mdui-spinner-colorful mdui-center"></div>').insertBefore("#readme_md"),
                                mdui.updateSpinners();
                                let t = $("#list");
                                requestSearch({
                                    q: window.MODEL.q,
                                    page_token: t.data("nextPageToken"),
                                    page_index: t.data("curPageIndex") + 1
                                }, e)
                            }
                        })), window.scroll_status.event_bound = !0)),
            !0 === window.scroll_status.loading_lock && (window.scroll_status.loading_lock = !1)
        }))
}
function append_search_result_to_list(e) {
    var t = $("#list"),
    n = null === t.data("nextPageToken");
    for (i in html = "", e) {
        var r = e[i];
        if (null == r.size && (r.size = ""), r.modifiedTime = utc2local(r.modifiedTime), r.size = formatFileSize(r.size), "application/vnd.google-apps.folder" == r.mimeType)
            html += `<li class="mdui-list-item mdui-ripple"><a id="${r.id}" onclick="onSearchResultItemClick(this)" class="folder">\n\t            <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate" title="${r.name}">\n\t            <i class="mdui-icon material-icons">folder_open</i>\n\t              ${r.name}\n\t            </div>\n\t            <div class="mdui-col-sm-3 mdui-text-right">${r.modifiedTime}</div>\n\t            <div class="mdui-col-sm-2 mdui-text-right">${r.size}</div>\n\t            </a>\n\t        </li>`;
        else {
            var o = "file",
            a = r.name.split(".").pop().toLowerCase();
            "|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|flac|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${a}|`) >= 0 && (o += " view"),
            "" === r.size && (r.size = "— — —"),
            html += `<li class="mdui-list-item file mdui-ripple" target="_blank"><a id="${r.id}" gd-type="${r.mimeType}" onclick="onSearchResultItemClick(this)" class="${o}">\n\t          <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate" title="${r.name}">\n\t          <i class="mdui-icon material-icons">insert_drive_file</i>\n\t            ${r.name}\n\t          </div>\n\t          <div class="mdui-col-sm-3 mdui-text-right">${r.modifiedTime}</div>\n\t          <div class="mdui-col-sm-2 mdui-text-right">${r.size}</div>\n\t          </a>\n\t      </li>`
        }
    }
    t.html(("0" == t.data("curPageIndex") ? "" : t.html()) + html),
    n && $("#count").removeClass("mdui-hidden").find(".number").text(t.find("li.mdui-list-item").length)
}
function onSearchResultItemClick(e) {
    var t = $(e).hasClass("view"),
    n = window.current_drive_order,
    i = mdui.dialog({
        title: "",
        content: '<div class="mdui-text-center mdui-typo-title mdui-m-b-1">Getting Target Path...</div><div class="mdui-spinner mdui-spinner-colorful mdui-center"></div>',
        history: !1,
        modal: !0,
        closeOnEsc: !0
    });
    mdui.updateSpinners(),
    $.post(`/${n}:id2path`, {
        id: e.id
    }, (function (e) {
            if (e) {
                i.close();
                var r = `/${n}:${e}${t?"?a=view":""}`;
                i = mdui.dialog({
                    title: '<i class="mdui-icon material-icons"></i>Target Path',
                    content: `<a href="${r}">${e}</a>`,
                    history: !1,
                    modal: !0,
                    closeOnEsc: !0,
                    buttons: [{
                            text: "Open in same tab",
                            onClick: function () {
                                window.location.href = r
                            }
                        }, {
                            text: "Open in new tab",
                            onClick: function () {
                                window.open(r)
                            }
                        }, {
                            text: "Cancel"
                        }
                    ]
                })
            } else
                i.close(), i = mdui.dialog({
                    title: '<i class="mdui-icon material-icons">&#xe811;</i>Failed to get the target path',
                    content: "It may be because this item does not exist in the Folder! It may also be because the file [Shared with me] has not been added to Personal Drive!",
                    history: !1,
                    modal: !0,
                    closeOnEsc: !0,
                    buttons: [{
                            text: "WTF ???"
                        }
                    ]
                })
        }))
}
function get_file(e, t, n) {
    var i = "file_path_" + e + t.modifiedTime,
    r = localStorage.getItem(i);
    if (null != r)
        return n(r);
    $.get(e, (function (e) {
            localStorage.setItem(i, e),
            n(e)
        }))
}
function file(e) {
    var t = e.split("/").pop().split(".").pop().toLowerCase().replace("?a=view", "").toLowerCase();
    return "|html|php|css|go|java|js|json|txt|sh|md|".indexOf(`|${t}|`) >= 0 ? file_code(e) : "|mp4|webm|avi|".indexOf(`|${t}|`) >= 0 || "|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${t}|`) >= 0 ? file_video(e) : "|mp3|flac|wav|ogg|m4a|".indexOf(`|${t}|`) >= 0 ? file_audio(e) : "|bmp|jpg|jpeg|png|gif|".indexOf(`|${t}|`) >= 0 ? file_image(e) : "pdf" === t ? file_pdf(e) : void 0
}
function file_code(e) {
    var t = {
        html: "html",
        php: "php",
        css: "css",
        go: "golang",
        java: "java",
        js: "javascript",
        json: "json",
        txt: "Text",
        sh: "sh",
        md: "Markdown"
    },
    n = e.split("/").pop(),
    i = decodeURIComponent(e.trim("/").split("/").slice(-1)[0].replaceAll("%5C%5C", "%5C")),
    r = n.split(".").pop().toLowerCase(),
    o = window.location.origin + e,
    a = `\n<div class="mdui-container">\n<pre id="editor" ></pre>\n</div>\n<div class="mdui-textfield">\n\t<label class="mdui-textfield-label">File Name</label>\n\t<input class="mdui-textfield-input" type="text" value="${i}"/>\n</div>\n<div class="mdui-textfield">\n\t<label class="mdui-textfield-label">Download Link</label>\n\t<input class="mdui-textfield-input" type="text" value="${o}"/>\n</div>\n<a href="${o}" class="mdui-fab mdui-fab-fixed mdui-ripple mdui-color-theme-accent"><i class="mdui-icon material-icons">file_download</i></a>\n\n<script src="//cdn.jsdelivr.net/gh/cheems/goindex-extended/js/ace.js"><\/script>\n<script src="//cdn.jsdelivr.net/gh/cheems/goindex-extended/js/ext-language_tools.js"><\/script>\n\t`;
    $("#content").html(a),
    $.get(e, (function (e) {
            $("#editor").html($("<div/>").text(e).html());
            var n = "Text";
            null != t[r] && (n = t[r]);
            var i = ace.edit("editor");
            i.setTheme("ace/theme/ambiance"),
            i.setFontSize(18),
            i.session.setMode("ace/mode/" + n),
            i.setOptions({
                enableBasicAutocompletion: !0,
                enableSnippets: !0,
                enableLiveAutocompletion: !0,
                maxLines: 1 / 0
            })
        }))
}
function copyToClipboard(e) {
    const t = $("<input>");
    $("body").append(t),
    t.val(e).select(),
    document.execCommand("copy"),
    t.remove()
}
function file_video(path) {
  const url = window.location.origin + path;
  var file_name = decodeURIComponent(path.trim("/").split("/").slice(-1)[0].replaceAll("%5C%5C", "%5C"));
  let player_items = [
    { text: "Microsoft Edge", href: `microsoft-edge:${url}?a=view` },
//  { text: "MPC-HC", href: `mpchc://${url}` },
//  { text: "VLC", href: `vlc://${url}` },
    { text: "PotPlayer", href: `potplayer://${url}` },
    { text: "nPlayer", href: `nplayer:${url}` },
  ]
    .map(
      (it) =>
        `<li class="mdui-menu-item"><a href="${it.href}" class="mdui-ripple">${it.text}</a></li>`
    )
    .join("");
  player_items += `<li class="mdui-divider"></li>
                   <li class="mdui-menu-item"><a id="copy-link" class="mdui-ripple">Copy Link</a></li>`;
  const playBtn = `
      <button class="mdui-btn mdui-ripple mdui-color-theme-accent" mdui-menu="{target:'#player-items'}">
        <i class="mdui-icon material-icons">&#xe039;</i>Play In External Player<i class="mdui-icon material-icons">&#xe5cf;</i>
      </button>
      <ul class="mdui-menu" id="player-items">${player_items}</ul>`;
  const content = `
<div class="mdui-container-fluid">
	<br>
	<div class="mdui-video-fluid mdui-center" id="dplayer"></div>
	<br>${playBtn}
  <div class="mdui-textfield">
	  <label class="mdui-textfield-label">File Name</label>
	  <input class="mdui-textfield-input" type="text" value="${file_name}"/>
  </div>
	<div class="mdui-textfield">
	  <label class="mdui-textfield-label">Download Link</label>
	  <input class="mdui-textfield-input" type="text" value="${url}"/>
	</div>
</div>
<a href="${url}" class="mdui-fab mdui-fab-fixed mdui-ripple mdui-color-theme-accent"><i class="mdui-icon material-icons">file_download</i></a>
	`;
  $("#content").html(content);
  $("#copy-link").on("click", () => {
    copyToClipboard(url);
    mdui.snackbar("Copied to clipboard!");
  });
  const dp = new DPlayer({
    container: document.getElementById("dplayer"),
    autoplay: false,
	theme: '#7493C1',
	loop: true,
    screenshot: false,
    preload: "auto",
	hotkey: true,
	volume: 0.3,
	mutex: true,
    video: {
      quality: [{ url: url, type: "normal" }],
      autoplay: false,
      defaultQuality: 0,
    },
  });
}
function file_audio(e) {
    var t = window.location.origin + e,
    n = `\n<div class="mdui-container-fluid">\n\t<br>\n\t<audio class="mdui-center" preload controls>\n\t  <source src="${t}"">\n\t</audio>\n\t<br>\n\t\x3c!-- ???? --\x3e\n  <div class="mdui-textfield">\n\t  <label class="mdui-textfield-label">File Name</label>\n\t  <input class="mdui-textfield-input" type="text" value="${decodeURIComponent(e.trim("/").split("/").slice(-1)[0].replaceAll("%5C%5C","%5C"))}"/>\n  </div>\n\t<div class="mdui-textfield">\n\t  <label class="mdui-textfield-label">Download Link</label>\n\t  <input class="mdui-textfield-input" type="text" value="${t}"/>\n\t</div>\n</div>\n<a href="${t}" class="mdui-fab mdui-fab-fixed mdui-ripple mdui-color-theme-accent"><i class="mdui-icon material-icons">file_download</i></a>\n\t`;
    $("#content").html(n)
}
function file_pdf(e) {
    const t = window.location.origin + e,
    n = `${t}?inline=true`;
    var i = `\n\t<object data="${n}" type="application/pdf" name="${decodeURI(e.slice(e.lastIndexOf("/")+1,e.length))}" style="width:100%;height:94vh;"><embed src="${n}" type="application/pdf"/></object>\n  <br>\n\t\x3c!-- ???? --\x3e\n  <div class="mdui-textfield">\n\t  <label class="mdui-textfield-label">File Name</label>\n\t  <input class="mdui-textfield-input" type="text" value="${decodeURIComponent(e.trim("/").split("/").slice(-1)[0].replaceAll("%5C%5C","%5C"))}"/>\n  </div>\n\t<div class="mdui-textfield">\n\t  <label class="mdui-textfield-label">Download Link</label>\n\t  <input class="mdui-textfield-input" type="text" value="${t}"/>\n\t</div>\n  <a href="${t}" class="mdui-fab mdui-fab-fixed mdui-ripple mdui-color-theme-accent"><i class="mdui-icon material-icons">file_download</i></a>\n\t`;
    $("#content").removeClass("mdui-container").addClass("mdui-container-fluid").css({
        padding: 0
    }).html(i)
}
function file_image(e) {
    var t = window.location.origin + e,
    n = decodeURIComponent(e.trim("/").split("/").slice(-1)[0].replaceAll("%5C%5C", "%5C"));
    const i = window.location.pathname,
    r = i.lastIndexOf("/"),
    o = i.slice(0, r + 1);
    let a = localStorage.getItem(o),
    s = "";
    if (a) {
        try {
            a = JSON.parse(a),
            Array.isArray(a) || (a = [])
        } catch (e) {
            a = []
        }
        if (a.length > 0 && a.includes(e)) {
            let t = a.length,
            n = a.indexOf(e),
            i = n - 1 > -1 ? a[n - 1] : null,
            r = n + 1 < t ? a[n + 1] : null;
            s = `\n            <div class="mdui-container">\n                <div class="mdui-row-xs-2 mdui-m-b-1">\n                    <div class="mdui-col">\n                        ${i?` < button id = "leftBtn" data - filepath = "${i}" class = "mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple" > Previous <  / button > `:'<button class="mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple" disabled>Previous</button>'}\n                    </div>\n                    <div class="mdui-col">\n                        ${r?` < button id = "rightBtn" data - filepath = "${r}" class = "mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple" > Next <  / button > `:'<button class="mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple" disabled>Next</button>'}\n                    </div> \n                </div>\n            </div>\n            `
        }
    }
    var l = `\n<div class="mdui-container-fluid">\n    <br>\n    <div id="imgWrap">\n        ${s}\n\t    <img class="mdui-img-fluid" src="${t}"/>\n    </div>\n\t<br>\n  <div class="mdui-textfield">\n\t  <label class="mdui-textfield-label">File Name</label>\n\t  <input class="mdui-textfield-input" type="text" value="${n}"/>\n  </div>\n\t<div class="mdui-textfield">\n\t  <label class="mdui-textfield-label">Download Link</label>\n\t  <input class="mdui-textfield-input" type="text" value="${t}"/>\n\t</div>\n        <br>\n</div>\n<a href="${t}" class="mdui-fab mdui-fab-fixed mdui-ripple mdui-color-theme-accent"><i class="mdui-icon material-icons">file_download</i></a>\n    `;
    $("#content").html(l),
    $("#leftBtn, #rightBtn").click((e => {
            let t = $(e.target);
            ["I", "SPAN"].includes(e.target.nodeName) && (t = $(e.target).parent());
            const n = t.attr("data-filepath");
            t.attr("data-direction");
            file(n)
        }))
}
function utc2local(e) {
    var t = e.indexOf("T"),
    n = e.indexOf("Z"),
    i = e.substr(0, t) + " " + e.substr(t + 1, n - t - 1),
    r = (new Date).getTimezoneOffset() / -60;
    navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0 ? (timestamp = new Date(Date.parse(e)), timestamp = timestamp.getTime() - 60 * r * 60 * 1e3) : (timestamp = new Date(Date.parse(i)), timestamp = timestamp.getTime()),
    timestamp /= 1e3;
    var o = timestamp + 60 * r * 60,
    a = 1900 + (o = new Date(1e3 * o)).getYear(),
    s = "0" + (o.getMonth() + 1),
    l = "0" + o.getDate(),
    c = "0" + o.getHours(),
    u = "0" + o.getMinutes(),
    d = "0" + o.getSeconds();
    return a + "-" + s.substring(s.length - 2, s.length) + "-" + l.substring(l.length - 2, l.length) + " " + c.substring(c.length - 2, c.length) + ":" + u.substring(u.length - 2, u.length) + ":" + d.substring(d.length - 2, d.length)
}
function formatFileSize(e) {
    return e >= 1073741824 ? e = (e / 1073741824).toFixed(2) + " GB" : e >= 1048576 ? e = (e / 1048576).toFixed(2) + " MB" : e >= 1024 ? e = (e / 1024).toFixed(2) + " KB" : e > 1 ? e += " bytes" : 1 == e ? e += " byte" : e = "",
    e
}
function markdown(e, t) {
    var n = marked.parse(t);
    $(e).show().html(n)
}
String.prototype.trim = function (e) {
    return e ? this.replace(new RegExp("^\\" + e + "+|\\" + e + "+$", "g"), "") : this.replace(/^\s+|\s+$/g, "")
}, window.onpopstate = function () {
    render(window.location.pathname)
}, $((function () {
        init(),
        render(window.location.pathname)
    }));
