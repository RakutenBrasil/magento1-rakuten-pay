/*!
* jquery.inputmask.bundle.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2018 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 4.0.1-beta.0
*/

!function(e) {
    var t = {};
    function n(i) {
        if (t[i]) return t[i].exports;
        var a = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(a.exports, a, a.exports, n), a.l = !0, a.exports;
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: i
        });
    }, n.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return n.d(t, "a", t), t;
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 10);
}([ function(e, t, n) {
    "use strict";
    var i, a, r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    a = [ n(1), n(8), n(7) ], void 0 === (r = "function" == typeof (i = function(e, t, n, i) {
        var a = navigator.userAgent, r = f("touchstart"), s = /iemobile/i.test(a), l = !0;
        function u(t, n, a) {
            if (!(this instanceof u)) return new u(t, n, a);
            this.el = i, this.events = {}, this.maskset = i, this.refreshValue = !1, !0 !== a && (e.isPlainObject(t) ? n = t : (n = n || {},
            t && (n.alias = t)), this.opts = e.extend(!0, {}, this.defaults, n), this.noMasksCache = n && n.definitions !== i,
                this.userOptions = n || {}, this.isRTL = this.opts.numericInput, c(this.opts.alias, n, this.opts));
        }
        function c(t, n, a) {
            var r = u.prototype.aliases[t];
            return r ? (r.alias && c(r.alias, i, a), e.extend(!0, a, r), e.extend(!0, a, n),
                !0) : (null === a.mask && (a.mask = t), !1);
        }
        function p(t, n) {
            function a(t, a, r) {
                var o = !1;
                if (null !== t && "" !== t || ((o = null !== r.regex) ? t = (t = r.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (o = !0,
                    t = ".*")), 1 === t.length && !1 === r.greedy && 0 !== r.repeat && (r.placeholder = ""),
                r.repeat > 0 || "*" === r.repeat || "+" === r.repeat) {
                    var s = "*" === r.repeat ? 0 : "+" === r.repeat ? 1 : r.repeat;
                    t = r.groupmarker[0] + t + r.groupmarker[1] + r.quantifiermarker[0] + s + "," + r.repeat + r.quantifiermarker[1];
                }
                var l, c = o ? "regex_" + r.regex : r.numericInput ? t.split("").reverse().join("") : t;
                return u.prototype.masksCache[c] === i || !0 === n ? (l = {
                    mask: t,
                    maskToken: u.prototype.analyseMask(t, o, r),
                    validPositions: {},
                    _buffer: i,
                    buffer: i,
                    tests: {},
                    excludes: {},
                    metadata: a,
                    maskLength: i
                }, !0 !== n && (u.prototype.masksCache[c] = l, l = e.extend(!0, {}, u.prototype.masksCache[c]))) : l = e.extend(!0, {}, u.prototype.masksCache[c]),
                    l;
            }
            if (e.isFunction(t.mask) && (t.mask = t.mask(t)), e.isArray(t.mask)) {
                if (t.mask.length > 1) {
                    if (null === t.keepStatic) {
                        t.keepStatic = "auto";
                        for (var r = 0; r < t.mask.length; r++) if (t.mask[r].charAt(0) !== t.mask[0].charAt(0)) {
                            t.keepStatic = !0;
                            break;
                        }
                    }
                    var o = t.groupmarker[0];
                    return e.each(t.isRTL ? t.mask.reverse() : t.mask, function(n, a) {
                        o.length > 1 && (o += t.groupmarker[1] + t.alternatormarker + t.groupmarker[0]),
                            a.mask === i || e.isFunction(a.mask) ? o += a : o += a.mask;
                    }), a(o += t.groupmarker[1], t.mask, t);
                }
                t.mask = t.mask.pop();
            }
            return t.mask && t.mask.mask !== i && !e.isFunction(t.mask.mask) ? a(t.mask.mask, t.mask, t) : a(t.mask, t.mask, t);
        }
        function f(e) {
            var t = n.createElement("input"), i = "on" + e, a = i in t;
            return a || (t.setAttribute(i, "return;"), a = "function" == typeof t[i]), t = null,
                a;
        }
        function m(a, c, p) {
            c = c || this.maskset, (p = p || this.opts).insertMode = l || p.insertMode;
            var d, h, g, v, k = this, y = this.el, b = this.isRTL, x = !1, P = !1, S = !1, A = !1;
            function C(e, t, n, a, r) {
                var o = p.greedy;
                r && (p.greedy = !1), t = t || 0;
                var s, l, u, c = [], f = 0, m = M();
                do {
                    if (!0 === e && E().validPositions[f]) l = (u = r && !0 === E().validPositions[f].match.optionality && E().validPositions[f + 1] === i && (!0 === E().validPositions[f].generatedInput || E().validPositions[f].input == p.skipOptionalPartCharacter && f > 0) ? _(f, R(f, s, f - 1)) : E().validPositions[f]).match,
                        s = u.locator.slice(), c.push(!0 === n ? u.input : !1 === n ? l.nativeDef : W(f, l)); else {
                        l = (u = j(f, s, f - 1)).match, s = u.locator.slice();
                        var d = !0 !== a && (!1 !== p.jitMasking ? p.jitMasking : l.jit);
                        !1 === d || d === i || f < m || "number" == typeof d && isFinite(d) && d > f ? c.push(!1 === n ? l.nativeDef : W(f, l)) : l.jit && l.optionalQuantifier;
                    }
                    "auto" === p.keepStatic && l.newBlockMarker && null !== l.fn && (p.keepStatic = f - 1),
                        f++;
                } while ((g === i || f < g) && (null !== l.fn || "" !== l.def) || t > f);
                return "" === c[c.length - 1] && c.pop(), !1 === n && E().maskLength !== i || (E().maskLength = f - 1),
                    p.greedy = o, c;
            }
            function E() {
                return c;
            }
            function w(e) {
                var t = E();
                t.buffer = i, !0 !== e && (t.validPositions = {}, t.p = 0);
            }
            function M(e, t, n) {
                var a = -1, r = -1, o = n || E().validPositions;
                for (var s in e === i && (e = -1), o) {
                    var l = parseInt(s);
                    o[l] && (t || !0 !== o[l].generatedInput) && (l <= e && (a = l), l >= e && (r = l));
                }
                return -1 === a || a == e ? r : -1 == r ? a : e - a < r - e ? a : r;
            }
            function D(e) {
                var t = e.locator[e.alternation];
                return "string" == typeof t && t.length > 0 && (t = t.split(",")[0]), t !== i ? t.toString() : "";
            }
            function O(e, t) {
                var n = (e.alternation != i ? e.mloc[D(e)] : e.locator).join("");
                if ("" !== n) for (;n.length < t; ) n += "0";
                return n;
            }
            function _(e, t) {
                for (var n, a, r, s = O(F(e = e > 0 ? e - 1 : 0)), l = 0; l < t.length; l++) {
                    var u = t[l];
                    n = O(u, s.length);
                    var c = Math.abs(n - s);
                    (a === i || "" !== n && c < a || r && r.match.optionality && "master" === r.match.newBlockMarker && (!u.match.optionality || !u.match.newBlockMarker) || r && r.match.optionalQuantifier && !u.match.optionalQuantifier) && (a = c,
                        r = u);
                }
                return r;
            }
            function j(e, t, n) {
                return E().validPositions[e] || _(e, R(e, t ? t.slice() : t, n));
            }
            function F(e, t) {
                return E().validPositions[e] ? E().validPositions[e] : (t || R(e))[0];
            }
            function T(e, t) {
                for (var n = !1, i = R(e), a = 0; a < i.length; a++) if (i[a].match && i[a].match.def === t) {
                    n = !0;
                    break;
                }
                return n;
            }
            function R(t, n, a) {
                var r, o = E().maskToken, s = n ? a : 0, l = n ? n.slice() : [ 0 ], u = [], c = !1, f = n ? n.join("") : "";
                function m(n, a, o, l) {
                    function d(o, l, h) {
                        function g(t, n) {
                            var i = 0 === e.inArray(t, n.matches);
                            return i || e.each(n.matches, function(e, a) {
                                if (!0 === a.isQuantifier ? i = g(t, n.matches[e - 1]) : !0 === a.isOptional ? i = g(t, a) : !0 === a.isAlternate && (i = g(t, a)),
                                    i) return !1;
                            }), i;
                        }
                        function v(t, n, a) {
                            var r, o;
                            if ((E().tests[t] || E().validPositions[t]) && e.each(E().tests[t] || [ E().validPositions[t] ], function(e, t) {
                                if (t.mloc[n]) return r = t, !1;
                                var s = a !== i ? a : t.alternation, l = t.locator[s] !== i ? t.locator[s].toString().indexOf(n) : -1;
                                (o === i || l < o) && -1 !== l && (r = t, o = l);
                            }), r) {
                                var s = r.locator[r.alternation];
                                return (r.mloc[n] || r.mloc[s] || r.locator).slice((a !== i ? a : r.alternation) + 1);
                            }
                            return a !== i ? v(t, n) : i;
                        }
                        function k(e, t) {
                            function n(e) {
                                for (var t, n, i = [], a = 0, r = e.length; a < r; a++) if ("-" === e.charAt(a)) for (n = e.charCodeAt(a + 1); ++t < n; ) i.push(String.fromCharCode(t)); else t = e.charCodeAt(a),
                                    i.push(e.charAt(a));
                                return i.join("");
                            }
                            return p.regex && null !== e.match.fn && null !== t.match.fn ? -1 !== n(t.match.def.replace(/[\[\]]/g, "")).indexOf(n(e.match.def.replace(/[\[\]]/g, ""))) : e.match.def === t.match.nativeDef;
                        }
                        function y(e, t) {
                            if (t === i || e.alternation === t.alternation && -1 === e.locator[e.alternation].toString().indexOf(t.locator[t.alternation])) {
                                e.mloc = e.mloc || {};
                                var n = e.locator[e.alternation];
                                if (n !== i) {
                                    if ("string" == typeof n && (n = n.split(",")[0]), e.mloc[n] === i && (e.mloc[n] = e.locator.slice()),
                                    t !== i) {
                                        for (var a in t.mloc) "string" == typeof a && (a = a.split(",")[0]), e.mloc[a] === i && (e.mloc[a] = t.mloc[a]);
                                        e.locator[e.alternation] = Object.keys(e.mloc).join(",");
                                    }
                                    return !0;
                                }
                                e.alternation = i;
                            }
                            return !1;
                        }
                        if (s > 5e3) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + E().mask;
                        if (s === t && o.matches === i) return u.push({
                            match: o,
                            locator: l.reverse(),
                            cd: f,
                            mloc: {}
                        }), !0;
                        if (o.matches !== i) {
                            if (o.isGroup && h !== o) {
                                if (o = d(n.matches[e.inArray(o, n.matches) + 1], l, h)) return !0;
                            } else if (o.isOptional) {
                                var b = o;
                                if (o = m(o, a, l, h)) {
                                    if (e.each(u, function(e, t) {
                                        t.match.optionality = !0;
                                    }), r = u[u.length - 1].match, h !== i || !g(r, b)) return !0;
                                    c = !0, s = t;
                                }
                            } else if (o.isAlternator) {
                                var x, P = o, S = [], A = u.slice(), C = l.length, w = a.length > 0 ? a.shift() : -1;
                                if (-1 === w || "string" == typeof w) {
                                    var M, D = s, O = a.slice(), _ = [];
                                    if ("string" == typeof w) _ = w.split(","); else for (M = 0; M < P.matches.length; M++) _.push(M.toString());
                                    if (E().excludes[t]) {
                                        for (var j = _.slice(), F = 0, T = E().excludes[t].length; F < T; F++) _.splice(_.indexOf(E().excludes[t][F].toString()), 1);
                                        0 === _.length && (E().excludes[t] = i, _ = j);
                                    }
                                    (!0 === p.keepStatic || isFinite(parseInt(p.keepStatic)) && D >= p.keepStatic) && (_ = _.slice(0, 1));
                                    for (var R = !1, N = 0; N < _.length; N++) {
                                        M = parseInt(_[N]), u = [], a = "string" == typeof w && v(s, M, C) || O.slice(),
                                            P.matches[M] && d(P.matches[M], [ M ].concat(l), h) ? o = !0 : 0 === N && (R = !0),
                                            x = u.slice(), s = D, u = [];
                                        for (var G = 0; G < x.length; G++) {
                                            var I = x[G], B = !1;
                                            I.match.jit = I.match.jit || R, I.alternation = I.alternation || C, y(I);
                                            for (var L = 0; L < S.length; L++) {
                                                var H = S[L];
                                                if ("string" != typeof w || I.alternation !== i && -1 !== e.inArray(I.locator[I.alternation].toString(), _)) {
                                                    if (I.match.nativeDef === H.match.nativeDef) {
                                                        B = !0, y(H, I);
                                                        break;
                                                    }
                                                    if (k(I, H)) {
                                                        y(I, H) && (B = !0, S.splice(S.indexOf(H), 0, I));
                                                        break;
                                                    }
                                                    if (k(H, I)) {
                                                        y(H, I);
                                                        break;
                                                    }
                                                    if (q = H, null === (z = I).match.fn && null !== q.match.fn && q.match.fn.test(z.match.def, E(), t, !1, p, !1)) {
                                                        y(I, H) && (B = !0, S.splice(S.indexOf(H), 0, I));
                                                        break;
                                                    }
                                                }
                                            }
                                            B || S.push(I);
                                        }
                                    }
                                    u = A.concat(S), s = t, c = u.length > 0, o = S.length > 0, a = O.slice();
                                } else o = d(P.matches[w] || n.matches[w], [ w ].concat(l), h);
                                if (o) return !0;
                            } else if (o.isQuantifier && h !== n.matches[e.inArray(o, n.matches) - 1]) for (var V = o, K = a.length > 0 ? a.shift() : 0; K < (isNaN(V.quantifier.max) ? K + 1 : V.quantifier.max) && s <= t; K++) {
                                var U = n.matches[e.inArray(V, n.matches) - 1];
                                if (o = d(U, [ K ].concat(l), U)) {
                                    if ((r = u[u.length - 1].match).optionalQuantifier = K > V.quantifier.min - 1, r.jit = K + U.matches.indexOf(r) >= V.quantifier.jit,
                                    g(r, U) && K > V.quantifier.min - 1) {
                                        c = !0, s = t;
                                        break;
                                    }
                                    if (V.quantifier.jit !== i && isNaN(V.quantifier.max) && r.optionalQuantifier && E().validPositions[t - 1] === i) {
                                        u.pop(), c = !0, s = t, f = i;
                                        break;
                                    }
                                    return !0;
                                }
                            } else if (o = m(o, a, l, h)) return !0;
                        } else s++;
                        var z, q;
                    }
                    for (var h = a.length > 0 ? a.shift() : 0; h < n.matches.length; h++) if (!0 !== n.matches[h].isQuantifier) {
                        var g = d(n.matches[h], [ h ].concat(o), l);
                        if (g && s === t) return g;
                        if (s > t) break;
                    }
                }
                if (t > -1) {
                    if (n === i) {
                        for (var d, h = t - 1; (d = E().validPositions[h] || E().tests[h]) === i && h > -1; ) h--;
                        d !== i && h > -1 && (l = function(t, n) {
                            var a = [];
                            return e.isArray(n) || (n = [ n ]), n.length > 0 && (n[0].alternation === i ? 0 === (a = _(t, n.slice()).locator.slice()).length && (a = n[0].locator.slice()) : e.each(n, function(e, t) {
                                if ("" !== t.def) if (0 === a.length) a = t.locator.slice(); else for (var n = 0; n < a.length; n++) t.locator[n] && -1 === a[n].toString().indexOf(t.locator[n]) && (a[n] += "," + t.locator[n]);
                            })), a;
                        }(h, d), f = l.join(""), s = h);
                    }
                    if (E().tests[t] && E().tests[t][0].cd === f) return E().tests[t];
                    for (var g = l.shift(); g < o.length; g++) {
                        if (m(o[g], l, [ g ]) && s === t || s > t) break;
                    }
                }
                return (0 === u.length || c) && u.push({
                    match: {
                        fn: null,
                        optionality: !1,
                        casing: null,
                        def: "",
                        placeholder: ""
                    },
                    locator: [],
                    mloc: {},
                    cd: f
                }), n !== i && E().tests[t] ? e.extend(!0, [], u) : (E().tests[t] = e.extend(!0, [], u),
                    E().tests[t]);
            }
            function N() {
                return E()._buffer === i && (E()._buffer = C(!1, 1), E().buffer === i && (E().buffer = E()._buffer.slice())),
                    E()._buffer;
            }
            function G(e) {
                return E().buffer !== i && !0 !== e || (E().buffer = C(!0, M(), !0)), E().buffer;
            }
            function I(e, t, n) {
                var a, r;
                if (!0 === e) w(), e = 0, t = n.length; else for (a = e; a < t; a++) delete E().validPositions[a];
                for (r = e, a = e; a < t; a++) if (w(!0), n[a] !== p.skipOptionalPartCharacter) {
                    var o = H(r, n[a], !0, !0);
                    !1 !== o && (w(!0), r = o.caret !== i ? o.caret : o.pos + 1);
                }
            }
            function B(t, n, a) {
                for (var r, o = p.greedy ? n : n.slice(0, 1), s = !1, l = a !== i ? a.split(",") : [], u = 0; u < l.length; u++) -1 !== (r = t.indexOf(l[u])) && t.splice(r, 1);
                for (var c = 0; c < t.length; c++) if (-1 !== e.inArray(t[c], o)) {
                    s = !0;
                    break;
                }
                return s;
            }
            function L(t, n, a, r, o) {
                var s, l, u, c, p, f, m, d = e.extend(!0, {}, E().validPositions), h = !1, g = o !== i ? o : M();
                if (-1 === g && o === i) l = (c = F(s = 0)).alternation; else for (;g >= 0; g--) if ((u = E().validPositions[g]) && u.alternation !== i) {
                    if (c && c.locator[u.alternation] !== u.locator[u.alternation]) break;
                    s = g, l = E().validPositions[s].alternation, c = u;
                }
                if (l !== i) {
                    m = parseInt(s), E().excludes[m] = E().excludes[m] || [], !0 !== t && E().excludes[m].push(D(c));
                    var v = [], k = 0;
                    for (p = m; p < M(i, !0) + 1; p++) (f = E().validPositions[p]) && !0 !== f.generatedInput ? v.push(f.input) : p < t && k++,
                        delete E().validPositions[p];
                    for (;E().excludes[m] && E().excludes[m].length < 10; ) {
                        var y = -1 * k, b = v.slice();
                        for (E().tests[m] = i, w(!0), h = !0; b.length > 0; ) {
                            var x = b.shift();
                            if (!(h = H(M(i, !0) + 1, x, !1, r, !0))) break;
                        }
                        if (h && n !== i) {
                            var P = M(t) + 1;
                            for (p = m; p < M() + 1; p++) ((f = E().validPositions[p]) === i || null == f.match.fn) && p < t + y && y++;
                            h = H((t += y) > P ? P : t, n, a, r, !0);
                        }
                        if (h) break;
                        if (w(), c = F(m), E().validPositions = e.extend(!0, {}, d), !E().excludes[m]) {
                            h = L(t, n, a, r, m - 1);
                            break;
                        }
                        var S = D(c);
                        if (-1 !== E().excludes[m].indexOf(S)) {
                            h = L(t, n, a, r, m - 1);
                            break;
                        }
                        for (E().excludes[m].push(S), p = m; p < M(i, !0) + 1; p++) delete E().validPositions[p];
                    }
                }
                return E().excludes[m] = i, h;
            }
            function H(t, n, a, r, o, s) {
                function l(e) {
                    return b ? e.begin - e.end > 1 || e.begin - e.end == 1 : e.end - e.begin > 1 || e.end - e.begin == 1;
                }
                a = !0 === a;
                var c = t;
                function f(n, a, o) {
                    var s = !1;
                    return e.each(R(n), function(c, f) {
                        var m = f.match;
                        if (G(!0), !1 !== (s = null != m.fn ? m.fn.test(a, E(), n, o, p, l(t)) : (a === m.def || a === p.skipOptionalPartCharacter) && "" !== m.def && {
                            c: W(n, m, !0) || m.def,
                            pos: n
                        })) {
                            var d = s.c !== i ? s.c : a, h = n;
                            return d = d === p.skipOptionalPartCharacter && null === m.fn ? W(n, m, !0) || m.def : d,
                            s.remove !== i && (e.isArray(s.remove) || (s.remove = [ s.remove ]), e.each(s.remove.sort(function(e, t) {
                                return t - e;
                            }), function(e, t) {
                                K({
                                    begin: t,
                                    end: t + 1
                                });
                            })), s.insert !== i && (e.isArray(s.insert) || (s.insert = [ s.insert ]), e.each(s.insert.sort(function(e, t) {
                                return e - t;
                            }), function(e, t) {
                                H(t.pos, t.c, !0, r);
                            })), !0 !== s && s.pos !== i && s.pos !== n && (h = s.pos), (!0 === s || s.pos !== i || s.c !== i) && (K(t, e.extend({}, f, {
                                input: function(t, n, i) {
                                    switch (p.casing || n.casing) {
                                        case "upper":
                                            t = t.toUpperCase();
                                            break;

                                        case "lower":
                                            t = t.toLowerCase();
                                            break;

                                        case "title":
                                            var a = E().validPositions[i - 1];
                                            t = 0 === i || a && a.input === String.fromCharCode(u.keyCode.SPACE) ? t.toUpperCase() : t.toLowerCase();
                                            break;

                                        default:
                                            if (e.isFunction(p.casing)) {
                                                var r = Array.prototype.slice.call(arguments);
                                                r.push(E().validPositions), t = p.casing.apply(this, r);
                                            }
                                    }
                                    return t;
                                }(d, m, h)
                            }), r, h) || (s = !1), !1);
                        }
                    }), s;
                }
                t.begin !== i && (c = b ? t.end : t.begin);
                var m = !0, d = e.extend(!0, {}, E().validPositions);
                if (e.isFunction(p.preValidation) && !a && !0 !== r && !0 !== s && (m = p.preValidation(G(), c, n, l(t), p, E())),
                !0 === m) {
                    if (V(i, c, !0), (g === i || c < g) && (m = f(c, n, a), (!a || !0 === r) && !1 === m && !0 !== s)) {
                        var h = E().validPositions[c];
                        if (!h || null !== h.match.fn || h.match.def !== n && n !== p.skipOptionalPartCharacter) {
                            if ((p.insertMode || E().validPositions[z(c)] === i) && !U(c, !0)) for (var v = c + 1, k = z(c); v <= k; v++) if (!1 !== (m = f(v, n, a))) {
                                m = V(c, m.pos !== i ? m.pos : v) || m, c = v;
                                break;
                            }
                        } else m = {
                            caret: z(c)
                        };
                    }
                    !1 !== m || !1 === p.keepStatic || null != p.regex && !ae(G()) || a || !0 === o || (m = L(c, n, a, r)),
                    !0 === m && (m = {
                        pos: c
                    });
                }
                if (e.isFunction(p.postValidation) && !1 !== m && !a && !0 !== r && !0 !== s) {
                    var y = p.postValidation(G(!0), m, p);
                    if (y !== i) {
                        if (y.refreshFromBuffer && y.buffer) {
                            var x = y.refreshFromBuffer;
                            I(!0 === x ? x : x.start, x.end, y.buffer);
                        }
                        m = !0 === y ? m : y;
                    }
                }
                return m && m.pos === i && (m.pos = c), !1 !== m && !0 !== s || (w(!0), E().validPositions = e.extend(!0, {}, d)),
                    m;
            }
            function V(t, n, a) {
                var r;
                if (t === i) for (t = n - 1; t > 0 && !E().validPositions[t]; t--) ;
                for (var o = t; o < n; o++) if (E().validPositions[o] === i && !U(o, !0)) {
                    if (0 == o ? F(o) : E().validPositions[o - 1]) {
                        var l = R(o).slice();
                        "" === l[l.length - 1].match.def && l.pop();
                        var u = _(o, l);
                        if ((u = e.extend({}, u, {
                            input: W(o, u.match, !0) || u.match.def
                        })).generatedInput = !0, K(o, u, !0), !0 !== a) {
                            var c = E().validPositions[n].input;
                            E().validPositions[n] = i, r = H(n, c, !0, !0);
                        }
                    }
                }
                return r;
            }
            function K(t, n, a, r) {
                function o(e, t, n) {
                    var a = t[e];
                    if (a !== i && (null === a.match.fn && !0 !== a.match.optionality || a.input === p.radixPoint)) {
                        var r = n.begin <= e - 1 ? t[e - 1] && null === t[e - 1].match.fn && t[e - 1] : t[e - 1], o = n.end > e + 1 ? t[e + 1] && null === t[e + 1].match.fn && t[e + 1] : t[e + 1];
                        return r && o;
                    }
                    return !1;
                }
                var s = t.begin !== i ? t.begin : t, l = t.end !== i ? t.end : t;
                if (t.begin > t.end && (s = t.end, l = t.begin), r = r !== i ? r : s, s !== l || p.insertMode && E().validPositions[r] !== i && a === i) {
                    var u = e.extend(!0, {}, E().validPositions), c = M(i, !0);
                    for (E().p = s, g = c; g >= s; g--) E().validPositions[g] && "+" === E().validPositions[g].match.nativeDef && (p.isNegative = !1),
                        delete E().validPositions[g];
                    var f = !0, m = r, d = (E().validPositions, !1), h = m, g = m;
                    for (n && (E().validPositions[r] = e.extend(!0, {}, n), h++, m++, s < l && g++); g <= c; g++) {
                        var v = u[g];
                        if (v !== i && (g >= l || g >= s && !0 !== v.generatedInput && o(g, u, {
                            begin: s,
                            end: l
                        }))) {
                            for (;"" !== F(h).match.def; ) {
                                if (!1 === d && u[h] && u[h].match.nativeDef === v.match.nativeDef) E().validPositions[h] = e.extend(!0, {}, u[h]),
                                    E().validPositions[h].input = v.input, V(i, h, !0), m = h + 1, f = !0; else if (T(h, v.match.def)) {
                                    var k = H(h, v.input, !0, !0);
                                    f = !1 !== k, m = k.caret || k.insert ? M() : h + 1, d = !0;
                                } else if (!(f = !0 === v.generatedInput || v.input === p.radixPoint && !0 === p.numericInput) && "" === F(h).match.def) break;
                                if (f) break;
                                h++;
                            }
                            "" == F(h).match.def && (f = !1), h = m;
                        }
                        if (!f) break;
                    }
                    if (!f) return E().validPositions = e.extend(!0, {}, u), w(!0), !1;
                } else n && (E().validPositions[r] = e.extend(!0, {}, n));
                return w(!0), !0;
            }
            function U(e, t) {
                var n = j(e).match;
                if ("" === n.def && (n = F(e).match), null != n.fn) return n.fn;
                if (!0 !== t && e > -1) {
                    var i = R(e);
                    return i.length > 1 + ("" === i[i.length - 1].match.def ? 1 : 0);
                }
                return !1;
            }
            function z(e, t) {
                for (var n = e + 1; "" !== F(n).match.def && (!0 === t && (!0 !== F(n).match.newBlockMarker || !U(n)) || !0 !== t && !U(n)); ) n++;
                return n;
            }
            function q(e, t) {
                var n, i = e;
                if (i <= 0) return 0;
                for (;--i > 0 && (!0 === t && !0 !== F(i).match.newBlockMarker || !0 !== t && !U(i) && ((n = R(i)).length < 2 || 2 === n.length && "" === n[1].match.def)); ) ;
                return i;
            }
            function Q(t, n, a, r, o) {
                if (r && e.isFunction(p.onBeforeWrite)) {
                    var s = p.onBeforeWrite.call(k, r, n, a, p);
                    if (s) {
                        if (s.refreshFromBuffer) {
                            var l = s.refreshFromBuffer;
                            I(!0 === l ? l : l.start, l.end, s.buffer || n), n = G(!0);
                        }
                        a !== i && (a = s.caret !== i ? s.caret : a);
                    }
                }
                if (t !== i && (t.inputmask._valueSet(n.join("")), a === i || r !== i && "blur" === r.type ? se(t, a, 0 === n.length) : te(t, a),
                !0 === o)) {
                    var u = e(t), c = t.inputmask._valueGet();
                    P = !0, u.trigger("input"), setTimeout(function() {
                        c === N().join("") ? u.trigger("cleared") : !0 === ae(n) && u.trigger("complete");
                    }, 0);
                }
            }
            function W(t, n, a) {
                if ((n = n || F(t).match).placeholder !== i || !0 === a) return e.isFunction(n.placeholder) ? n.placeholder(p) : n.placeholder;
                if (null === n.fn) {
                    if (t > -1 && E().validPositions[t] === i) {
                        var r, o = R(t), s = [];
                        if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0)) for (var l = 0; l < o.length; l++) if (!0 !== o[l].match.optionality && !0 !== o[l].match.optionalQuantifier && (null === o[l].match.fn || r === i || !1 !== o[l].match.fn.test(r.match.def, E(), t, !0, p)) && (s.push(o[l]),
                        null === o[l].match.fn && (r = o[l]), s.length > 1 && /[0-9a-bA-Z]/.test(s[0].match.def))) return p.placeholder.charAt(t % p.placeholder.length);
                    }
                    return n.def;
                }
                return p.placeholder.charAt(t % p.placeholder.length);
            }
            var $, Z = {
                on: function(t, n, a) {
                    var o = function(t) {
                        var n = this;
                        if (n.inputmask === i && "FORM" !== this.nodeName) {
                            var o = e.data(n, "_inputmask_opts");
                            o ? new u(o).mask(n) : Z.off(n);
                        } else {
                            if ("setvalue" === t.type || "FORM" === this.nodeName || !(n.disabled || n.readOnly && !("keydown" === t.type && t.ctrlKey && 67 === t.keyCode || !1 === p.tabThrough && t.keyCode === u.keyCode.TAB))) {
                                switch (t.type) {
                                    case "input":
                                        if (!0 === P) return P = !1, t.preventDefault();
                                        if (r) {
                                            var c = arguments;
                                            return setTimeout(function() {
                                                a.apply(n, c), te(n, n.inputmask.caretPos, i, !0);
                                            }, 0), !1;
                                        }
                                        break;

                                    case "keydown":
                                        x = !1, P = !1;
                                        break;

                                    case "keypress":
                                        if (!0 === x) return t.preventDefault();
                                        x = !0;
                                        break;

                                    case "click":
                                        if (s || l) {
                                            c = arguments;
                                            return setTimeout(function() {
                                                a.apply(n, c);
                                            }, 0), !1;
                                        }
                                }
                                var f = a.apply(n, arguments);
                                return !1 === f && (t.preventDefault(), t.stopPropagation()), f;
                            }
                            t.preventDefault();
                        }
                    };
                    t.inputmask.events[n] = t.inputmask.events[n] || [], t.inputmask.events[n].push(o),
                        -1 !== e.inArray(n, [ "submit", "reset" ]) ? null !== t.form && e(t.form).on(n, o) : e(t).on(n, o);
                },
                off: function(t, n) {
                    var i;
                    t.inputmask && t.inputmask.events && (n ? (i = [])[n] = t.inputmask.events[n] : i = t.inputmask.events,
                        e.each(i, function(n, i) {
                            for (;i.length > 0; ) {
                                var a = i.pop();
                                -1 !== e.inArray(n, [ "submit", "reset" ]) ? null !== t.form && e(t.form).off(n, a) : e(t).off(n, a);
                            }
                            delete t.inputmask.events[n];
                        }));
                }
            }, J = {
                keydownEvent: function(t) {
                    var n = this, i = e(n), a = t.keyCode, r = te(n);
                    if (a === u.keyCode.BACKSPACE || a === u.keyCode.DELETE || l && a === u.keyCode.BACKSPACE_SAFARI || t.ctrlKey && a === u.keyCode.X && !f("cut")) t.preventDefault(),
                        re(0, a, r), Q(n, G(!0), E().p, t, n.inputmask._valueGet() !== G().join("")); else if (a === u.keyCode.END || a === u.keyCode.PAGE_DOWN) {
                        t.preventDefault();
                        var o = z(M());
                        p.insertMode || o !== E().maskLength || t.shiftKey || o--, te(n, t.shiftKey ? r.begin : o, o, !0);
                    } else a === u.keyCode.HOME && !t.shiftKey || a === u.keyCode.PAGE_UP ? (t.preventDefault(),
                        te(n, 0, t.shiftKey ? r.begin : 0, !0)) : (p.undoOnEscape && a === u.keyCode.ESCAPE || 90 === a && t.ctrlKey) && !0 !== t.altKey ? (Y(n, !0, !1, d.split("")),
                        i.trigger("click")) : a !== u.keyCode.INSERT || t.shiftKey || t.ctrlKey ? !0 === p.tabThrough && a === u.keyCode.TAB ? (!0 === t.shiftKey ? (null === F(r.begin).match.fn && (r.begin = z(r.begin)),
                        r.end = q(r.begin, !0), r.begin = q(r.end, !0)) : (r.begin = z(r.begin, !0), r.end = z(r.begin, !0),
                    r.end < E().maskLength && r.end--), r.begin < E().maskLength && (t.preventDefault(),
                        te(n, r.begin, r.end))) : t.shiftKey || !1 === p.insertMode && (a === u.keyCode.RIGHT ? setTimeout(function() {
                        var e = te(n);
                        te(n, e.begin);
                    }, 0) : a === u.keyCode.LEFT && setTimeout(function() {
                        var e = te(n);
                        te(n, b ? e.begin + 1 : e.begin - 1);
                    }, 0)) : (p.insertMode = l || !p.insertMode, te(n, p.insertMode || r.begin !== E().maskLength ? r.begin : r.begin - 1));
                    p.onKeyDown.call(this, t, G(), te(n).begin, p), S = -1 !== e.inArray(a, p.ignorables);
                },
                keypressEvent: function(t, n, a, r, o) {
                    var s = this, l = e(s), c = t.which || t.charCode || t.keyCode;
                    if (!(!0 === n || t.ctrlKey && t.altKey) && (t.ctrlKey || t.metaKey || S)) return c === u.keyCode.ENTER && d !== G().join("") && (d = G().join(""),
                        setTimeout(function() {
                            l.trigger("change");
                        }, 0)), !0;
                    if (c) {
                        46 === c && !1 === t.shiftKey && "" !== p.radixPoint && (c = p.radixPoint.charCodeAt(0));
                        var f, m = n ? {
                            begin: o,
                            end: o
                        } : te(s), h = String.fromCharCode(c), g = 0;
                        if (p._radixDance && p.numericInput) {
                            var v = G().indexOf(p.radixPoint.charAt(0)) + 1;
                            m.begin <= v && (c === p.radixPoint.charCodeAt(0) && (g = 1), m.begin -= 1, m.end -= 1);
                        }
                        E().writeOutBuffer = !0;
                        var k = H(m, h, r);
                        if (!1 !== k && (w(!0), f = k.caret !== i ? k.caret : z(k.pos.begin ? k.pos.begin : k.pos),
                            E().p = f), f = (p.numericInput && k.caret === i ? q(f) : f) + g, !1 !== a && (setTimeout(function() {
                            p.onKeyValidation.call(s, c, k, p);
                        }, 0), E().writeOutBuffer && !1 !== k)) {
                            var y = G();
                            Q(s, y, f, t, !0 !== n);
                        }
                        if (t.preventDefault(), n) return !1 !== k && (k.forwardPosition = f), k;
                    }
                },
                pasteEvent: function(n) {
                    var i, a = n.originalEvent || n, r = (e(this), this.inputmask._valueGet(!0)), o = te(this);
                    b && (i = o.end, o.end = o.begin, o.begin = i);
                    var s = r.substr(0, o.begin), l = r.substr(o.end, r.length);
                    if (s === (b ? N().reverse() : N()).slice(0, o.begin).join("") && (s = ""), l === (b ? N().reverse() : N()).slice(o.end).join("") && (l = ""),
                    t.clipboardData && t.clipboardData.getData) r = s + t.clipboardData.getData("Text") + l; else {
                        if (!a.clipboardData || !a.clipboardData.getData) return !0;
                        r = s + a.clipboardData.getData("text/plain") + l;
                    }
                    var u = r;
                    if (e.isFunction(p.onBeforePaste)) {
                        if (!1 === (u = p.onBeforePaste.call(k, r, p))) return n.preventDefault();
                        u || (u = r);
                    }
                    return Y(this, !1, !1, u.toString().split("")), Q(this, G(), z(M()), n, d !== G().join("")),
                        n.preventDefault();
                },
                inputFallBackEvent: function(t) {
                    var n = this, i = n.inputmask._valueGet();
                    if (G().join("") !== i) {
                        var a = te(n);
                        if (i = function(e, t, n) {
                            if (s) {
                                var i = t.replace(G().join(""), "");
                                if (1 === i.length) {
                                    var a = t.split("");
                                    a.splice(n.begin, 0, i), t = a.join("");
                                }
                            }
                            return t;
                        }(0, i = function(e, t, n) {
                            return "." === t.charAt(n.begin - 1) && "" !== p.radixPoint && ((t = t.split(""))[n.begin - 1] = p.radixPoint.charAt(0),
                                t = t.join("")), t;
                        }(0, i, a), a), G().join("") !== i) {
                            var r = G().join(""), o = !p.numericInput && i.length > r.length ? -1 : 0, l = i.substr(0, a.begin), c = i.substr(a.begin), f = r.substr(0, a.begin + o), m = r.substr(a.begin + o), d = a, h = "", g = !1;
                            if (l !== f) {
                                for (var v = (g = l.length >= f.length) ? l.length : f.length, k = 0; l.charAt(k) === f.charAt(k) && k < v; k++) ;
                                g && (0 === o && (d.begin = k), h += l.slice(k, d.end));
                            }
                            if (c !== m && (c.length > m.length ? h += c.slice(0, 1) : c.length < m.length && (d.end += m.length - c.length,
                            g || "" === p.radixPoint || "" !== c || l.charAt(d.begin + o - 1) !== p.radixPoint || (d.begin--,
                                h = p.radixPoint))), Q(n, G(), {
                                begin: d.begin + o,
                                end: d.end + o
                            }), h.length > 0) e.each(h.split(""), function(t, i) {
                                var a = new e.Event("keypress");
                                a.which = i.charCodeAt(0), S = !1, J.keypressEvent.call(n, a);
                            }); else {
                                d.begin === d.end - 1 && (d.begin = q(d.begin + 1), d.begin === d.end - 1 ? te(n, d.begin) : te(n, d.begin, d.end));
                                var y = new e.Event("keydown");
                                y.keyCode = p.numericInput ? u.keyCode.BACKSPACE : u.keyCode.DELETE, J.keydownEvent.call(n, y),
                                !1 === p.insertMode && te(n, te(n).begin - 1);
                            }
                            t.preventDefault();
                        }
                    }
                },
                beforeInputEvent: function(t) {
                    if (t.cancelable) {
                        var n = this;
                        switch (t.inputType) {
                            case "insertText":
                                return e.each(t.data.split(""), function(t, i) {
                                    var a = new e.Event("keypress");
                                    a.which = i.charCodeAt(0), S = !1, J.keypressEvent.call(n, a);
                                }), t.preventDefault();

                            case "deleteContentBackward":
                                return (i = new e.Event("keydown")).keyCode = u.keyCode.BACKSPACE, J.keydownEvent.call(n, i),
                                    t.preventDefault();

                            case "deleteContentForward":
                                var i;
                                return (i = new e.Event("keydown")).keyCode = u.keyCode.DELETE, J.keydownEvent.call(n, i),
                                    t.preventDefault();
                        }
                    }
                },
                setValueEvent: function(t) {
                    this.inputmask.refreshValue = !1;
                    var n = (n = t && t.detail ? t.detail[0] : arguments[1]) || this.inputmask._valueGet(!0);
                    e.isFunction(p.onBeforeMask) && (n = p.onBeforeMask.call(k, n, p) || n), Y(this, !0, !1, n = n.split("")),
                        d = G().join(""), (p.clearMaskOnLostFocus || p.clearIncomplete) && this.inputmask._valueGet() === N().join("") && this.inputmask._valueSet("");
                },
                focusEvent: function(e) {
                    var t = this.inputmask._valueGet();
                    p.showMaskOnFocus && (!p.showMaskOnHover || p.showMaskOnHover && "" === t) && (this.inputmask._valueGet() !== G().join("") ? Q(this, G(), z(M())) : !1 === A && te(this, z(M()))),
                    !0 === p.positionCaretOnTab && !1 === A && J.clickEvent.apply(this, [ e, !0 ]),
                        d = G().join("");
                },
                mouseleaveEvent: function(e) {
                    if (A = !1, p.clearMaskOnLostFocus && n.activeElement !== this) {
                        var t = G().slice(), i = this.inputmask._valueGet();
                        i !== this.getAttribute("placeholder") && "" !== i && (-1 === M() && i === N().join("") ? t = [] : ie(t),
                            Q(this, t));
                    }
                },
                clickEvent: function(t, a) {
                    var r = this;
                    setTimeout(function() {
                        if (n.activeElement === r) {
                            var t = te(r);
                            if (a && (b ? t.end = t.begin : t.begin = t.end), t.begin === t.end) switch (p.positionCaretOnClick) {
                                case "none":
                                    break;

                                case "select":
                                    te(r, 0, G().length);
                                    break;

                                case "ignore":
                                    te(r, z(M()));
                                    break;

                                case "radixFocus":
                                    if (function(t) {
                                        if ("" !== p.radixPoint) {
                                            var n = E().validPositions;
                                            if (n[t] === i || n[t].input === W(t)) {
                                                if (t < z(-1)) return !0;
                                                var a = e.inArray(p.radixPoint, G());
                                                if (-1 !== a) {
                                                    for (var r in n) if (a < r && n[r].input !== W(r)) return !1;
                                                    return !0;
                                                }
                                            }
                                        }
                                        return !1;
                                    }(t.begin)) {
                                        var o = G().join("").indexOf(p.radixPoint);
                                        te(r, p.numericInput ? z(o) : o);
                                        break;
                                    }

                                default:
                                    var s = t.begin, l = M(s, !0), u = z(l);
                                    if (s < u) te(r, U(s, !0) || U(s - 1, !0) ? s : z(s)); else {
                                        var c = E().validPositions[l], f = j(u, c ? c.match.locator : i, c), m = W(u, f.match);
                                        if ("" !== m && G()[u] !== m && !0 !== f.match.optionalQuantifier && !0 !== f.match.newBlockMarker || !U(u, p.keepStatic) && f.match.def === m) {
                                            var d = z(u);
                                            (s >= d || s === u) && (u = d);
                                        }
                                        te(r, u);
                                    }
                            }
                        }
                    }, 0);
                },
                cutEvent: function(i) {
                    e(this);
                    var a = te(this), r = i.originalEvent || i, o = t.clipboardData || r.clipboardData, s = b ? G().slice(a.end, a.begin) : G().slice(a.begin, a.end);
                    o.setData("text", b ? s.reverse().join("") : s.join("")), n.execCommand && n.execCommand("copy"),
                        re(0, u.keyCode.DELETE, a), Q(this, G(), E().p, i, d !== G().join(""));
                },
                blurEvent: function(t) {
                    var n = e(this);
                    if (this.inputmask) {
                        var a = this.inputmask._valueGet(), r = G().slice();
                        "" === a && v === i || (p.clearMaskOnLostFocus && (-1 === M() && a === N().join("") ? r = [] : ie(r)),
                        !1 === ae(r) && (setTimeout(function() {
                            n.trigger("incomplete");
                        }, 0), p.clearIncomplete && (w(), r = p.clearMaskOnLostFocus ? [] : N().slice())),
                            Q(this, r, i, t)), d !== G().join("") && (d = r.join(""), n.trigger("change"));
                    }
                },
                mouseenterEvent: function(e) {
                    A = !0, n.activeElement !== this && p.showMaskOnHover && this.inputmask._valueGet() !== G().join("") && Q(this, G());
                },
                submitEvent: function(e) {
                    d !== G().join("") && h.trigger("change"), p.clearMaskOnLostFocus && -1 === M() && y.inputmask._valueGet && y.inputmask._valueGet() === N().join("") && y.inputmask._valueSet(""),
                    p.clearIncomplete && !1 === ae(G()) && y.inputmask._valueSet(""), p.removeMaskOnSubmit && (y.inputmask._valueSet(y.inputmask.unmaskedvalue(), !0),
                        setTimeout(function() {
                            Q(y, G());
                        }, 0));
                },
                resetEvent: function(e) {
                    y.inputmask.refreshValue = !0, setTimeout(function() {
                        h.trigger("setvalue");
                    }, 0);
                }
            };
            function Y(t, n, a, r, o) {
                var s = this || t.inputmask, l = r.slice(), c = "", f = -1, m = i;
                if (w(), a || !0 === p.autoUnmask) f = z(f); else {
                    var d = N().slice(0, z(-1)).join(""), h = l.join("").match(new RegExp("^" + u.escapeRegex(d), "g"));
                    h && h.length > 0 && (l.splice(0, h.length * d.length), f = z(f));
                }
                -1 === f ? (E().p = z(f), f = 0) : E().p = f, s.caretPos = {
                    begin: f
                }, e.each(l, function(n, r) {
                    if (r !== i) if (E().validPositions[n] === i && l[n] === W(n) && U(n, !0) && !1 === H(n, l[n], !0, i, i, !0)) E().p++; else {
                        var o = new e.Event("_checkval");
                        o.which = r.charCodeAt(0), c += r;
                        var u = M(i, !0);
                        !function(e, t) {
                            return -1 !== C(!0, 0, !1).slice(e, z(e)).join("").replace(/'/g, "").indexOf(t) && !U(e) && (F(e).match.nativeDef === t.charAt(0) || null === F(e).match.fn && F(e).match.nativeDef === "'" + t.charAt(0) || " " === F(e).match.nativeDef && (F(e + 1).match.nativeDef === t.charAt(0) || null === F(e + 1).match.fn && F(e + 1).match.nativeDef === "'" + t.charAt(0)));
                        }(f, c) ? (m = J.keypressEvent.call(t, o, !0, !1, a, s.caretPos.begin)) && (f = s.caretPos.begin + 1,
                            c = "") : m = J.keypressEvent.call(t, o, !0, !1, a, u + 1), m && (Q(i, G(), m.forwardPosition, o, !1),
                            s.caretPos = {
                                begin: m.forwardPosition,
                                end: m.forwardPosition
                            });
                    }
                }), n && Q(t, G(), m ? m.forwardPosition : i, o || new e.Event("checkval"), o && "input" === o.type);
            }
            function X(t) {
                if (t) {
                    if (t.inputmask === i) return t.value;
                    t.inputmask && t.inputmask.refreshValue && J.setValueEvent.call(t);
                }
                var n = [], a = E().validPositions;
                for (var r in a) a[r].match && null != a[r].match.fn && n.push(a[r].input);
                var o = 0 === n.length ? "" : (b ? n.reverse() : n).join("");
                if (e.isFunction(p.onUnMask)) {
                    var s = (b ? G().slice().reverse() : G()).join("");
                    o = p.onUnMask.call(k, s, o, p);
                }
                return o;
            }
            function ee(e) {
                return !b || "number" != typeof e || p.greedy && "" === p.placeholder || !y || (e = y.inputmask._valueGet().length - e),
                    e;
            }
            function te(a, r, o, s) {
                var l;
                if (r === i) return a.setSelectionRange ? (r = a.selectionStart, o = a.selectionEnd) : t.getSelection ? (l = t.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== a && l.commonAncestorContainer !== a || (r = l.startOffset,
                    o = l.endOffset) : n.selection && n.selection.createRange && (o = (r = 0 - (l = n.selection.createRange()).duplicate().moveStart("character", -a.inputmask._valueGet().length)) + l.text.length),
                    {
                        begin: s ? r : ee(r),
                        end: s ? o : ee(o)
                    };
                if (e.isArray(r) && (o = b ? r[0] : r[1], r = b ? r[1] : r[0]), r.begin !== i && (o = b ? r.begin : r.end,
                    r = b ? r.end : r.begin), "number" == typeof r) {
                    r = s ? r : ee(r), o = "number" == typeof (o = s ? o : ee(o)) ? o : r;
                    var u = parseInt(((a.ownerDocument.defaultView || t).getComputedStyle ? (a.ownerDocument.defaultView || t).getComputedStyle(a, null) : a.currentStyle).fontSize) * o;
                    if (a.scrollLeft = u > a.scrollWidth ? u : 0, !1 === p.insertMode && r === o && o++,
                        a.inputmask.caretPos = {
                            begin: r,
                            end: o
                        }, a.setSelectionRange) a.selectionStart = r, a.selectionEnd = o; else if (t.getSelection) {
                        if (l = n.createRange(), a.firstChild === i || null === a.firstChild) {
                            var c = n.createTextNode("");
                            a.appendChild(c);
                        }
                        l.setStart(a.firstChild, r < a.inputmask._valueGet().length ? r : a.inputmask._valueGet().length),
                            l.setEnd(a.firstChild, o < a.inputmask._valueGet().length ? o : a.inputmask._valueGet().length),
                            l.collapse(!0);
                        var f = t.getSelection();
                        f.removeAllRanges(), f.addRange(l);
                    } else a.createTextRange && ((l = a.createTextRange()).collapse(!0), l.moveEnd("character", o),
                        l.moveStart("character", r), l.select());
                    se(a, {
                        begin: r,
                        end: o
                    });
                }
            }
            function ne(t) {
                var n, a, r = C(!0, M(), !0, !0), o = r.length, s = M(), l = {}, u = E().validPositions[s], c = u !== i ? u.locator.slice() : i;
                for (n = s + 1; n < r.length; n++) c = (a = j(n, c, n - 1)).locator.slice(), l[n] = e.extend(!0, {}, a);
                var p = u && u.alternation !== i ? u.locator[u.alternation] : i;
                for (n = o - 1; n > s && ((a = l[n]).match.optionality || a.match.optionalQuantifier && a.match.newBlockMarker || p && (p !== l[n].locator[u.alternation] && null != a.match.fn || null === a.match.fn && a.locator[u.alternation] && B(a.locator[u.alternation].toString().split(","), p.toString().split(",")) && "" !== R(n)[0].def)) && r[n] === W(n, a.match); n--) o--;
                return t ? {
                    l: o,
                    def: l[o] ? l[o].match : i
                } : o;
            }
            function ie(e) {
                e.length = 0;
                for (var t, n = C(!0, 0, !0, i, !0); (t = n.shift()) !== i; ) e.push(t);
                return e;
            }
            function ae(t) {
                if (e.isFunction(p.isComplete)) return p.isComplete(t, p);
                if ("*" === p.repeat) return i;
                var n = !1, a = ne(!0), r = q(a.l);
                if (a.def === i || a.def.newBlockMarker || a.def.optionality || a.def.optionalQuantifier) {
                    n = !0;
                    for (var o = 0; o <= r; o++) {
                        var s = j(o).match;
                        if (null !== s.fn && E().validPositions[o] === i && !0 !== s.optionality && !0 !== s.optionalQuantifier || null === s.fn && t[o] !== W(o, s)) {
                            n = !1;
                            break;
                        }
                    }
                }
                return n;
            }
            function re(e, t, n, a, r) {
                if ((p.numericInput || b) && (t === u.keyCode.BACKSPACE ? t = u.keyCode.DELETE : t === u.keyCode.DELETE && (t = u.keyCode.BACKSPACE),
                    b)) {
                    var o = n.end;
                    n.end = n.begin, n.begin = o;
                }
                if (t === u.keyCode.BACKSPACE && (n.end - n.begin < 1 || !1 === p.insertMode) ? (n.begin = q(n.begin),
                E().validPositions[n.begin] !== i && E().validPositions[n.begin].input === p.groupSeparator && n.begin--,
                !1 === p.insertMode && n.end !== E().maskLength && n.end--) : t === u.keyCode.DELETE && n.begin === n.end && (n.end = U(n.end, !0) && E().validPositions[n.end] && E().validPositions[n.end].input !== p.radixPoint ? n.end + 1 : z(n.end) + 1,
                E().validPositions[n.begin] !== i && E().validPositions[n.begin].input === p.groupSeparator && n.end++),
                    K(n), !0 !== a && !1 !== p.keepStatic || null !== p.regex) {
                    var s = L(!0);
                    if (s) {
                        var l = s.caret !== i ? s.caret : s.pos ? z(s.pos.begin ? s.pos.begin : s.pos) : M(-1, !0);
                        (t !== u.keyCode.DELETE || n.begin > l) && n.begin;
                    }
                }
                var c = M(n.begin, !0);
                if (c < n.begin || -1 === n.begin) E().p = z(c); else if (!0 !== a && (E().p = n.begin,
                !0 !== r)) for (;E().p < c && E().validPositions[E().p] === i; ) E().p++;
            }
            function oe(i) {
                var a = (i.ownerDocument.defaultView || t).getComputedStyle(i, null), r = n.createElement("div");
                r.style.width = a.width, r.style.textAlign = a.textAlign, v = n.createElement("div"),
                    i.inputmask.colorMask = v, v.className = "im-colormask", i.parentNode.insertBefore(v, i),
                    i.parentNode.removeChild(i), v.appendChild(i), v.appendChild(r), i.style.left = r.offsetLeft + "px",
                    e(v).on("mouseleave", function(e) {
                        return J.mouseleaveEvent.call(i, [ e ]);
                    }), e(v).on("mouseenter", function(e) {
                    return J.mouseenterEvent.call(i, [ e ]);
                }), e(v).on("click", function(e) {
                    return te(i, function(e) {
                        var t, r = n.createElement("span");
                        for (var o in a) isNaN(o) && -1 !== o.indexOf("font") && (r.style[o] = a[o]);
                        r.style.textTransform = a.textTransform, r.style.letterSpacing = a.letterSpacing,
                            r.style.position = "absolute", r.style.height = "auto", r.style.width = "auto",
                            r.style.visibility = "hidden", r.style.whiteSpace = "nowrap", n.body.appendChild(r);
                        var s, l = i.inputmask._valueGet(), u = 0;
                        for (t = 0, s = l.length; t <= s; t++) {
                            if (r.innerHTML += l.charAt(t) || "_", r.offsetWidth >= e) {
                                var c = e - u, p = r.offsetWidth - e;
                                r.innerHTML = l.charAt(t), t = (c -= r.offsetWidth / 3) < p ? t - 1 : t;
                                break;
                            }
                            u = r.offsetWidth;
                        }
                        return n.body.removeChild(r), t;
                    }(e.clientX)), J.clickEvent.call(i, [ e ]);
                }), e(i).on("keydown", function(e) {
                    e.shiftKey || !1 === p.insertMode || setTimeout(function() {
                        se(i);
                    }, 0);
                });
            }
            function se(e, t, a) {
                var r, o, s, l = [], u = !1, c = 0;
                function f(e) {
                    if (e === i && (e = ""), u || null !== r.fn && o.input !== i) if (u && (null !== r.fn && o.input !== i || "" === r.def)) {
                        u = !1;
                        var t = l.length;
                        l[t - 1] = l[t - 1] + "</span>", l.push(e);
                    } else l.push(e); else u = !0, l.push("<span class='im-static'>" + e);
                }
                if (v !== i) {
                    var m = G();
                    if (t === i ? t = te(e) : t.begin === i && (t = {
                        begin: t,
                        end: t
                    }), !0 !== a) {
                        var d = M();
                        do {
                            E().validPositions[c] ? (o = E().validPositions[c], r = o.match, s = o.locator.slice(),
                                f(m[c])) : (o = j(c, s, c - 1), r = o.match, s = o.locator.slice(), !1 === p.jitMasking || c < d || "number" == typeof p.jitMasking && isFinite(p.jitMasking) && p.jitMasking > c ? f(W(c, r)) : u = !1),
                                c++;
                        } while ((g === i || c < g) && (null !== r.fn || "" !== r.def) || d > c || u);
                        u && f(), n.activeElement === e && (l.splice(t.begin, 0, t.begin === t.end || t.end > E().maskLength ? '<mark class="im-caret" style="border-right-width: 1px;border-right-style: solid;">' : '<mark class="im-caret-select">'),
                            l.splice(t.end + 1, 0, "</mark>"));
                    }
                    var h = v.getElementsByTagName("div")[0];
                    h.innerHTML = l.join(""), e.inputmask.positionColorMask(e, h);
                }
            }
            if (u.prototype.positionColorMask = function(e, t) {
                e.style.left = t.offsetLeft + "px";
            }, a !== i) switch (a.action) {
                case "isComplete":
                    return y = a.el, ae(G());

                case "unmaskedvalue":
                    return y !== i && a.value === i || ($ = a.value, $ = (e.isFunction(p.onBeforeMask) && p.onBeforeMask.call(k, $, p) || $).split(""),
                        Y.call(this, i, !1, !1, $), e.isFunction(p.onBeforeWrite) && p.onBeforeWrite.call(k, i, G(), 0, p)),
                        X(y);

                case "mask":
                    !function(t) {
                        Z.off(t);
                        var a = function(t, a) {
                            var r = t.getAttribute("type"), s = "INPUT" === t.tagName && -1 !== e.inArray(r, a.supportsInputType) || t.isContentEditable || "TEXTAREA" === t.tagName;
                            if (!s) if ("INPUT" === t.tagName) {
                                var l = n.createElement("input");
                                l.setAttribute("type", r), s = "text" === l.type, l = null;
                            } else s = "partial";
                            return !1 !== s ? function(t) {
                                var r, s;
                                function l() {
                                    return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== M() || !0 !== a.nullable ? n.activeElement === this && a.clearMaskOnLostFocus ? (b ? ie(G().slice()).reverse() : ie(G().slice())).join("") : r.call(this) : "" : r.call(this);
                                }
                                function u(t) {
                                    s.call(this, t), this.inputmask && e(this).trigger("setvalue", [ t ]);
                                }
                                if (!t.inputmask.__valueGet) {
                                    if (!0 !== a.noValuePatching) {
                                        if (Object.getOwnPropertyDescriptor) {
                                            "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === o("test".__proto__) ? function(e) {
                                                return e.__proto__;
                                            } : function(e) {
                                                return e.constructor.prototype;
                                            });
                                            var c = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : i;
                                            c && c.get && c.set ? (r = c.get, s = c.set, Object.defineProperty(t, "value", {
                                                get: l,
                                                set: u,
                                                configurable: !0
                                            })) : "INPUT" !== t.tagName && (r = function() {
                                                return this.textContent;
                                            }, s = function(e) {
                                                this.textContent = e;
                                            }, Object.defineProperty(t, "value", {
                                                get: l,
                                                set: u,
                                                configurable: !0
                                            }));
                                        } else n.__lookupGetter__ && t.__lookupGetter__("value") && (r = t.__lookupGetter__("value"),
                                            s = t.__lookupSetter__("value"), t.__defineGetter__("value", l), t.__defineSetter__("value", u));
                                        t.inputmask.__valueGet = r, t.inputmask.__valueSet = s;
                                    }
                                    t.inputmask._valueGet = function(e) {
                                        return b && !0 !== e ? r.call(this.el).split("").reverse().join("") : r.call(this.el);
                                    }, t.inputmask._valueSet = function(e, t) {
                                        s.call(this.el, null === e || e === i ? "" : !0 !== t && b ? e.split("").reverse().join("") : e);
                                    }, r === i && (r = function() {
                                        return this.value;
                                    }, s = function(e) {
                                        this.value = e;
                                    }, function(t) {
                                        if (e.valHooks && (e.valHooks[t] === i || !0 !== e.valHooks[t].inputmaskpatch)) {
                                            var n = e.valHooks[t] && e.valHooks[t].get ? e.valHooks[t].get : function(e) {
                                                return e.value;
                                            }, r = e.valHooks[t] && e.valHooks[t].set ? e.valHooks[t].set : function(e, t) {
                                                return e.value = t, e;
                                            };
                                            e.valHooks[t] = {
                                                get: function(e) {
                                                    if (e.inputmask) {
                                                        if (e.inputmask.opts.autoUnmask) return e.inputmask.unmaskedvalue();
                                                        var t = n(e);
                                                        return -1 !== M(i, i, e.inputmask.maskset.validPositions) || !0 !== a.nullable ? t : "";
                                                    }
                                                    return n(e);
                                                },
                                                set: function(t, n) {
                                                    var i, a = e(t);
                                                    return i = r(t, n), t.inputmask && a.trigger("setvalue", [ n ]), i;
                                                },
                                                inputmaskpatch: !0
                                            };
                                        }
                                    }(t.type), function(t) {
                                        Z.on(t, "mouseenter", function(t) {
                                            var n = e(this);
                                            this.inputmask._valueGet() !== G().join("") && n.trigger("setvalue");
                                        });
                                    }(t));
                                }
                            }(t) : t.inputmask = i, s;
                        }(t, p);
                        if (!1 !== a && (h = e(y = t), -1 === (g = y !== i ? y.maxLength : i) && (g = i),
                        !0 === p.colorMask && oe(y), r && ("inputmode" in y && (y.inputmode = p.inputmode,
                            y.setAttribute("inputmode", p.inputmode)), !0 === p.disablePredictiveText && ("autocorrect" in y ? y.autocorrect = !1 : (!0 !== p.colorMask && oe(y),
                            y.type = "password"))), !0 === a && (Z.on(y, "submit", J.submitEvent), Z.on(y, "reset", J.resetEvent),
                            Z.on(y, "blur", J.blurEvent), Z.on(y, "focus", J.focusEvent), !0 !== p.colorMask && (Z.on(y, "click", J.clickEvent),
                            Z.on(y, "mouseleave", J.mouseleaveEvent), Z.on(y, "mouseenter", J.mouseenterEvent)),
                            Z.on(y, "paste", J.pasteEvent), Z.on(y, "cut", J.cutEvent), Z.on(y, "complete", p.oncomplete),
                            Z.on(y, "incomplete", p.onincomplete), Z.on(y, "cleared", p.oncleared), r || !0 === p.inputEventOnly ? y.removeAttribute("maxLength") : (Z.on(y, "keydown", J.keydownEvent),
                            Z.on(y, "keypress", J.keypressEvent)), Z.on(y, "input", J.inputFallBackEvent), Z.on(y, "beforeinput", J.beforeInputEvent)),
                            Z.on(y, "setvalue", J.setValueEvent), d = N().join(""), "" !== y.inputmask._valueGet(!0) || !1 === p.clearMaskOnLostFocus || n.activeElement === y)) {
                            var s = e.isFunction(p.onBeforeMask) && p.onBeforeMask.call(k, y.inputmask._valueGet(!0), p) || y.inputmask._valueGet(!0);
                            "" !== s && Y(y, !0, !1, s.split(""));
                            var l = G().slice();
                            d = l.join(""), !1 === ae(l) && p.clearIncomplete && w(), p.clearMaskOnLostFocus && n.activeElement !== y && (-1 === M() ? l = [] : ie(l)),
                            (!1 === p.clearMaskOnLostFocus || p.showMaskOnFocus && n.activeElement === y || "" !== y.inputmask._valueGet(!0)) && Q(y, l),
                            n.activeElement === y && te(y, z(M()));
                        }
                    }(y);
                    break;

                case "format":
                    return $ = (e.isFunction(p.onBeforeMask) && p.onBeforeMask.call(k, a.value, p) || a.value).split(""),
                        Y.call(this, i, !0, !1, $), a.metadata ? {
                        value: b ? G().slice().reverse().join("") : G().join(""),
                        metadata: m.call(this, {
                            action: "getmetadata"
                        }, c, p)
                    } : b ? G().slice().reverse().join("") : G().join("");

                case "isValid":
                    a.value ? ($ = a.value.split(""), Y.call(this, i, !0, !0, $)) : a.value = G().join("");
                    for (var le = G(), ue = ne(), ce = le.length - 1; ce > ue && !U(ce); ce--) ;
                    return le.splice(ue, ce + 1 - ue), ae(le) && a.value === G().join("");

                case "getemptymask":
                    return N().join("");

                case "remove":
                    return y && y.inputmask && (e.data(y, "_inputmask_opts", null), h = e(y), y.inputmask._valueSet(p.autoUnmask ? X(y) : y.inputmask._valueGet(!0)),
                        Z.off(y), y.inputmask.colorMask && ((v = y.inputmask.colorMask).removeChild(y),
                        v.parentNode.insertBefore(y, v), v.parentNode.removeChild(v)), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(y), "value") && y.inputmask.__valueGet && Object.defineProperty(y, "value", {
                        get: y.inputmask.__valueGet,
                        set: y.inputmask.__valueSet,
                        configurable: !0
                    }) : n.__lookupGetter__ && y.__lookupGetter__("value") && y.inputmask.__valueGet && (y.__defineGetter__("value", y.inputmask.__valueGet),
                        y.__defineSetter__("value", y.inputmask.__valueSet)), y.inputmask = i), y;

                case "getmetadata":
                    if (e.isArray(c.metadata)) {
                        var pe = C(!0, 0, !1).join("");
                        return e.each(c.metadata, function(e, t) {
                            if (t.mask === pe) return pe = t, !1;
                        }), pe;
                    }
                    return c.metadata;
            }
        }
        return u.prototype = {
            dataAttribute: "data-inputmask",
            defaults: {
                placeholder: "_",
                optionalmarker: [ "[", "]" ],
                quantifiermarker: [ "{", "}" ],
                groupmarker: [ "(", ")" ],
                alternatormarker: "|",
                escapeChar: "\\",
                mask: null,
                regex: null,
                oncomplete: e.noop,
                onincomplete: e.noop,
                oncleared: e.noop,
                repeat: 0,
                greedy: !1,
                autoUnmask: !1,
                removeMaskOnSubmit: !1,
                clearMaskOnLostFocus: !0,
                insertMode: !0,
                clearIncomplete: !1,
                alias: null,
                onKeyDown: e.noop,
                onBeforeMask: null,
                onBeforePaste: function(t, n) {
                    return e.isFunction(n.onBeforeMask) ? n.onBeforeMask.call(this, t, n) : t;
                },
                onBeforeWrite: null,
                onUnMask: null,
                showMaskOnFocus: !0,
                showMaskOnHover: !0,
                onKeyValidation: e.noop,
                skipOptionalPartCharacter: " ",
                numericInput: !1,
                rightAlign: !1,
                undoOnEscape: !0,
                radixPoint: "",
                _radixDance: !1,
                groupSeparator: "",
                keepStatic: null,
                positionCaretOnTab: !0,
                tabThrough: !1,
                supportsInputType: [ "text", "tel", "password", "search" ],
                ignorables: [ 8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229 ],
                isComplete: null,
                preValidation: null,
                postValidation: null,
                staticDefinitionSymbol: i,
                jitMasking: !1,
                nullable: !0,
                inputEventOnly: !1,
                noValuePatching: !1,
                positionCaretOnClick: "lvp",
                casing: null,
                inputmode: "verbatim",
                colorMask: !1,
                disablePredictiveText: !1,
                importDataAttributes: !0
            },
            definitions: {
                9: {
                    validator: "[0-9１-９]",
                    definitionSymbol: "*"
                },
                a: {
                    validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                    definitionSymbol: "*"
                },
                "*": {
                    validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ]"
                }
            },
            aliases: {},
            masksCache: {},
            mask: function(a) {
                var r = this;
                return "string" == typeof a && (a = n.getElementById(a) || n.querySelectorAll(a)),
                    a = a.nodeName ? [ a ] : a, e.each(a, function(n, a) {
                    var o = e.extend(!0, {}, r.opts);
                    if (function(n, a, r, o) {
                        if (!0 === a.importDataAttributes) {
                            var s, l, u, p, f = function(e, a) {
                                null !== (a = a !== i ? a : n.getAttribute(o + "-" + e)) && ("string" == typeof a && (0 === e.indexOf("on") ? a = t[a] : "false" === a ? a = !1 : "true" === a && (a = !0)),
                                    r[e] = a);
                            }, m = n.getAttribute(o);
                            if (m && "" !== m && (m = m.replace(/'/g, '"'), l = JSON.parse("{" + m + "}")),
                                l) for (p in u = i, l) if ("alias" === p.toLowerCase()) {
                                u = l[p];
                                break;
                            }
                            for (s in f("alias", u), r.alias && c(r.alias, r, a), a) {
                                if (l) for (p in u = i, l) if (p.toLowerCase() === s.toLowerCase()) {
                                    u = l[p];
                                    break;
                                }
                                f(s, u);
                            }
                        }
                        return e.extend(!0, a, r), ("rtl" === n.dir || a.rightAlign) && (n.style.textAlign = "right"),
                        ("rtl" === n.dir || a.numericInput) && (n.dir = "ltr", n.removeAttribute("dir"),
                            a.isRTL = !0), Object.keys(r).length;
                    }(a, o, e.extend(!0, {}, r.userOptions), r.dataAttribute)) {
                        var s = p(o, r.noMasksCache);
                        s !== i && (a.inputmask !== i && (a.inputmask.opts.autoUnmask = !0, a.inputmask.remove()),
                            a.inputmask = new u(i, i, !0), a.inputmask.opts = o, a.inputmask.noMasksCache = r.noMasksCache,
                            a.inputmask.userOptions = e.extend(!0, {}, r.userOptions), a.inputmask.isRTL = o.isRTL || o.numericInput,
                            a.inputmask.el = a, a.inputmask.maskset = s, e.data(a, "_inputmask_opts", o), m.call(a.inputmask, {
                            action: "mask"
                        }));
                    }
                }), a && a[0] && a[0].inputmask || this;
            },
            option: function(t, n) {
                return "string" == typeof t ? this.opts[t] : "object" === (void 0 === t ? "undefined" : o(t)) ? (e.extend(this.userOptions, t),
                this.el && !0 !== n && this.mask(this.el), this) : void 0;
            },
            unmaskedvalue: function(e) {
                return this.maskset = this.maskset || p(this.opts, this.noMasksCache), m.call(this, {
                    action: "unmaskedvalue",
                    value: e
                });
            },
            remove: function() {
                return m.call(this, {
                    action: "remove"
                });
            },
            getemptymask: function() {
                return this.maskset = this.maskset || p(this.opts, this.noMasksCache), m.call(this, {
                    action: "getemptymask"
                });
            },
            hasMaskedValue: function() {
                return !this.opts.autoUnmask;
            },
            isComplete: function() {
                return this.maskset = this.maskset || p(this.opts, this.noMasksCache), m.call(this, {
                    action: "isComplete"
                });
            },
            getmetadata: function() {
                return this.maskset = this.maskset || p(this.opts, this.noMasksCache), m.call(this, {
                    action: "getmetadata"
                });
            },
            isValid: function(e) {
                return this.maskset = this.maskset || p(this.opts, this.noMasksCache), m.call(this, {
                    action: "isValid",
                    value: e
                });
            },
            format: function(e, t) {
                return this.maskset = this.maskset || p(this.opts, this.noMasksCache), m.call(this, {
                    action: "format",
                    value: e,
                    metadata: t
                });
            },
            setValue: function(t) {
                this.el && e(this.el).trigger("setvalue", [ t ]);
            },
            analyseMask: function(t, n, a) {
                var r, o, s, l, c, p, f = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?(?:\|[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g, m = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, d = !1, h = new k(), g = [], v = [];
                function k(e, t, n, i) {
                    this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1,
                        this.isOptional = t || !1, this.isQuantifier = n || !1, this.isAlternator = i || !1,
                        this.quantifier = {
                            min: 1,
                            max: 1
                        };
                }
                function y(t, r, o) {
                    o = o !== i ? o : t.matches.length;
                    var s = t.matches[o - 1];
                    if (n) 0 === r.indexOf("[") || d && /\\d|\\s|\\w]/i.test(r) || "." === r ? t.matches.splice(o++, 0, {
                        fn: new RegExp(r, a.casing ? "i" : ""),
                        optionality: !1,
                        newBlockMarker: s === i ? "master" : s.def !== r,
                        casing: null,
                        def: r,
                        placeholder: i,
                        nativeDef: r
                    }) : (d && (r = r[r.length - 1]), e.each(r.split(""), function(e, n) {
                        s = t.matches[o - 1], t.matches.splice(o++, 0, {
                            fn: null,
                            optionality: !1,
                            newBlockMarker: s === i ? "master" : s.def !== n && null !== s.fn,
                            casing: null,
                            def: a.staticDefinitionSymbol || n,
                            placeholder: a.staticDefinitionSymbol !== i ? n : i,
                            nativeDef: (d ? "'" : "") + n
                        });
                    })), d = !1; else {
                        var l = (a.definitions ? a.definitions[r] : i) || u.prototype.definitions[r];
                        l && !d ? t.matches.splice(o++, 0, {
                            fn: l.validator ? "string" == typeof l.validator ? new RegExp(l.validator, a.casing ? "i" : "") : new function() {
                                this.test = l.validator;
                            }() : new RegExp("."),
                            optionality: !1,
                            newBlockMarker: s === i ? "master" : s.def !== (l.definitionSymbol || r),
                            casing: l.casing,
                            def: l.definitionSymbol || r,
                            placeholder: l.placeholder,
                            nativeDef: r
                        }) : (t.matches.splice(o++, 0, {
                            fn: null,
                            optionality: !1,
                            newBlockMarker: s === i ? "master" : s.def !== r && null !== s.fn,
                            casing: null,
                            def: a.staticDefinitionSymbol || r,
                            placeholder: a.staticDefinitionSymbol !== i ? r : i,
                            nativeDef: (d ? "'" : "") + r
                        }), d = !1);
                    }
                }
                function b() {
                    if (g.length > 0) {
                        if (y(l = g[g.length - 1], o), l.isAlternator) {
                            c = g.pop();
                            for (var e = 0; e < c.matches.length; e++) c.matches[e].isGroup && (c.matches[e].isGroup = !1);
                            g.length > 0 ? (l = g[g.length - 1]).matches.push(c) : h.matches.push(c);
                        }
                    } else y(h, o);
                }
                function x(e) {
                    var t = new k(!0);
                    return t.openGroup = !1, t.matches = e, t;
                }
                for (n && (a.optionalmarker[0] = i, a.optionalmarker[1] = i); r = n ? m.exec(t) : f.exec(t); ) {
                    if (o = r[0], n) switch (o.charAt(0)) {
                        case "?":
                            o = "{0,1}";
                            break;

                        case "+":
                        case "*":
                            o = "{" + o + "}";
                    }
                    if (d) b(); else switch (o.charAt(0)) {
                        case "(?=":
                        case "(?!":
                        case "(?<=":
                        case "(?<!":
                            break;

                        case a.escapeChar:
                            d = !0, n && b();
                            break;

                        case a.optionalmarker[1]:
                        case a.groupmarker[1]:
                            if ((s = g.pop()).openGroup = !1, s !== i) if (g.length > 0) {
                                if ((l = g[g.length - 1]).matches.push(s), l.isAlternator) {
                                    c = g.pop();
                                    for (var P = 0; P < c.matches.length; P++) c.matches[P].isGroup = !1, c.matches[P].alternatorGroup = !1;
                                    g.length > 0 ? (l = g[g.length - 1]).matches.push(c) : h.matches.push(c);
                                }
                            } else h.matches.push(s); else b();
                            break;

                        case a.optionalmarker[0]:
                            g.push(new k(!1, !0));
                            break;

                        case a.groupmarker[0]:
                            g.push(new k(!0));
                            break;

                        case a.quantifiermarker[0]:
                            var S = new k(!1, !1, !0), A = (o = o.replace(/[{}]/g, "")).split("|"), C = A[0].split(","), E = isNaN(C[0]) ? C[0] : parseInt(C[0]), w = 1 === C.length ? E : isNaN(C[1]) ? C[1] : parseInt(C[1]);
                            "*" !== E && "+" !== E || (E = "*" === w ? 0 : 1), S.quantifier = {
                                min: E,
                                max: w,
                                jit: A[1]
                            };
                            var M = g.length > 0 ? g[g.length - 1].matches : h.matches;
                            if ((r = M.pop()).isAlternator) {
                                M.push(r), M = r.matches;
                                var D = new k(!0), O = M.pop();
                                M.push(D), M = D.matches, r = O;
                            }
                            r.isGroup || (r = x([ r ])), M.push(r), M.push(S);
                            break;

                        case a.alternatormarker:
                            var _ = function(e) {
                                var t = e.pop();
                                return t.isQuantifier && (t = x([ e.pop(), t ])), t;
                            };
                            if (g.length > 0) {
                                var j = (l = g[g.length - 1]).matches[l.matches.length - 1];
                                p = l.openGroup && (j.matches === i || !1 === j.isGroup && !1 === j.isAlternator) ? g.pop() : _(l.matches);
                            } else p = _(h.matches);
                            if (p.isAlternator) g.push(p); else if (p.alternatorGroup ? (c = g.pop(), p.alternatorGroup = !1) : c = new k(!1, !1, !1, !0),
                                c.matches.push(p), g.push(c), p.openGroup) {
                                p.openGroup = !1;
                                var F = new k(!0);
                                F.alternatorGroup = !0, g.push(F);
                            }
                            break;

                        default:
                            b();
                    }
                }
                for (;g.length > 0; ) s = g.pop(), h.matches.push(s);
                return h.matches.length > 0 && (function t(r) {
                    r && r.matches && e.each(r.matches, function(e, o) {
                        var s = r.matches[e + 1];
                        (s === i || s.matches === i || !1 === s.isQuantifier) && o && o.isGroup && (o.isGroup = !1,
                        n || (y(o, a.groupmarker[0], 0), !0 !== o.openGroup && y(o, a.groupmarker[1]))),
                            t(o);
                    });
                }(h), v.push(h)), (a.numericInput || a.isRTL) && function e(t) {
                    for (var n in t.matches = t.matches.reverse(), t.matches) if (t.matches.hasOwnProperty(n)) {
                        var r = parseInt(n);
                        if (t.matches[n].isQuantifier && t.matches[r + 1] && t.matches[r + 1].isGroup) {
                            var o = t.matches[n];
                            t.matches.splice(n, 1), t.matches.splice(r + 1, 0, o);
                        }
                        t.matches[n].matches !== i ? t.matches[n] = e(t.matches[n]) : t.matches[n] = ((s = t.matches[n]) === a.optionalmarker[0] ? s = a.optionalmarker[1] : s === a.optionalmarker[1] ? s = a.optionalmarker[0] : s === a.groupmarker[0] ? s = a.groupmarker[1] : s === a.groupmarker[1] && (s = a.groupmarker[0]),
                            s);
                    }
                    var s;
                    return t;
                }(v[0]), v;
            }
        }, u.extendDefaults = function(t) {
            e.extend(!0, u.prototype.defaults, t);
        }, u.extendDefinitions = function(t) {
            e.extend(!0, u.prototype.definitions, t);
        }, u.extendAliases = function(t) {
            e.extend(!0, u.prototype.aliases, t);
        }, u.format = function(e, t, n) {
            return u(t).format(e, n);
        }, u.unmask = function(e, t) {
            return u(t).unmaskedvalue(e);
        }, u.isValid = function(e, t) {
            return u(t).isValid(e);
        }, u.remove = function(t) {
            "string" == typeof t && (t = n.getElementById(t) || n.querySelectorAll(t)), t = t.nodeName ? [ t ] : t,
                e.each(t, function(e, t) {
                    t.inputmask && t.inputmask.remove();
                });
        }, u.setValue = function(t, i) {
            "string" == typeof t && (t = n.getElementById(t) || n.querySelectorAll(t)), t = t.nodeName ? [ t ] : t,
                e.each(t, function(t, n) {
                    n.inputmask ? n.inputmask.setValue(i) : e(n).trigger("setvalue", [ i ]);
                });
        }, u.escapeRegex = function(e) {
            return e.replace(new RegExp("(\\" + [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ].join("|\\") + ")", "gim"), "\\$1");
        }, u.keyCode = {
            BACKSPACE: 8,
            BACKSPACE_SAFARI: 127,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            X: 88,
            CONTROL: 17
        }, u;
    }) ? i.apply(t, a) : i) || (e.exports = r);
}, function(e, t, n) {
    "use strict";
    var i, a, r;
    "function" == typeof Symbol && Symbol.iterator, a = [ n(2) ], void 0 === (r = "function" == typeof (i = function(e) {
        return e;
    }) ? i.apply(t, a) : i) || (e.exports = r);
}, function(e, t) {
    e.exports = jQuery;
}, function(e, t, n) {
    "use strict";
    var i, a, r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    a = [ n(2), n(0) ], void 0 === (r = "function" == typeof (i = function(e, t) {
        return void 0 === e.fn.inputmask && (e.fn.inputmask = function(n, i) {
            var a, r = this[0];
            if (void 0 === i && (i = {}), "string" == typeof n) switch (n) {
                case "unmaskedvalue":
                    return r && r.inputmask ? r.inputmask.unmaskedvalue() : e(r).val();

                case "remove":
                    return this.each(function() {
                        this.inputmask && this.inputmask.remove();
                    });

                case "getemptymask":
                    return r && r.inputmask ? r.inputmask.getemptymask() : "";

                case "hasMaskedValue":
                    return !(!r || !r.inputmask) && r.inputmask.hasMaskedValue();

                case "isComplete":
                    return !r || !r.inputmask || r.inputmask.isComplete();

                case "getmetadata":
                    return r && r.inputmask ? r.inputmask.getmetadata() : void 0;

                case "setvalue":
                    t.setValue(r, i);
                    break;

                case "option":
                    if ("string" != typeof i) return this.each(function() {
                        if (void 0 !== this.inputmask) return this.inputmask.option(i);
                    });
                    if (r && void 0 !== r.inputmask) return r.inputmask.option(i);
                    break;

                default:
                    return i.alias = n, a = new t(i), this.each(function() {
                        a.mask(this);
                    });
            } else {
                if ("object" == (void 0 === n ? "undefined" : o(n))) return a = new t(n), void 0 === n.mask && void 0 === n.alias ? this.each(function() {
                    if (void 0 !== this.inputmask) return this.inputmask.option(n);
                    a.mask(this);
                }) : this.each(function() {
                    a.mask(this);
                });
                if (void 0 === n) return this.each(function() {
                    (a = new t(i)).mask(this);
                });
            }
        }), e.fn.inputmask;
    }) ? i.apply(t, a) : i) || (e.exports = r);
}, function(e, t, n) {
    "use strict";
    var i, a, r;
    "function" == typeof Symbol && Symbol.iterator, a = [ n(1), n(0) ], void 0 === (r = "function" == typeof (i = function(e, t) {
        function n(e, t) {
            var n = (e.mask || e).replace(/#/g, "0").replace(/\)/, "0").replace(/[+()#-]/g, ""), i = (t.mask || t).replace(/#/g, "0").replace(/\)/, "0").replace(/[+()#-]/g, "");
            return n.localeCompare(i);
        }
        var i = t.prototype.analyseMask;
        return t.prototype.analyseMask = function(t, n, a) {
            var r = {};
            return a.phoneCodes && (a.phoneCodes && a.phoneCodes.length > 1e3 && (function e(n, i, a) {
                i = i || "", a = a || r, "" !== i && (a[i] = {});
                for (var o = "", s = a[i] || a, l = n.length - 1; l >= 0; l--) s[o = (t = n[l].mask || n[l]).substr(0, 1)] = s[o] || [],
                    s[o].unshift(t.substr(1)), n.splice(l, 1);
                for (var u in s) s[u].length > 500 && e(s[u].slice(), u, s);
            }((t = t.substr(1, t.length - 2)).split(a.groupmarker[1] + a.alternatormarker + a.groupmarker[0])),
                t = function t(n) {
                    var i = "", r = [];
                    for (var o in n) e.isArray(n[o]) ? 1 === n[o].length ? r.push(o + n[o]) : r.push(o + a.groupmarker[0] + n[o].join(a.groupmarker[1] + a.alternatormarker + a.groupmarker[0]) + a.groupmarker[1]) : r.push(o + t(n[o]));
                    return 1 === r.length ? i += r[0] : i += a.groupmarker[0] + r.join(a.groupmarker[1] + a.alternatormarker + a.groupmarker[0]) + a.groupmarker[1],
                        i;
                }(r)), t = t.replace(/9/g, "\\9")), i.call(this, t, n, a);
        }, t.extendAliases({
            abstractphone: {
                groupmarker: [ "<", ">" ],
                countrycode: "",
                phoneCodes: [],
                keepStatic: "auto",
                mask: function(e) {
                    return e.definitions = {
                        "#": t.prototype.definitions[9]
                    }, e.phoneCodes.sort(n);
                },
                onBeforeMask: function(e, t) {
                    var n = e.replace(/^0{1,2}/, "").replace(/[\s]/g, "");
                    return (n.indexOf(t.countrycode) > 1 || -1 === n.indexOf(t.countrycode)) && (n = "+" + t.countrycode + n),
                        n;
                },
                onUnMask: function(e, t, n) {
                    return e.replace(/[()#-]/g, "");
                },
                inputmode: "tel"
            }
        }), t;
    }) ? i.apply(t, a) : i) || (e.exports = r);
}, function(e, t, n) {
    "use strict";
    var i, a, r;
    "function" == typeof Symbol && Symbol.iterator, a = [ n(1), n(0) ], void 0 === (r = "function" == typeof (i = function(e, t, n) {
        function i(e, n) {
            for (var i = "", a = 0; a < e.length; a++) t.prototype.definitions[e.charAt(a)] || n.definitions[e.charAt(a)] || n.optionalmarker.start === e.charAt(a) || n.optionalmarker.end === e.charAt(a) || n.quantifiermarker.start === e.charAt(a) || n.quantifiermarker.end === e.charAt(a) || n.groupmarker.start === e.charAt(a) || n.groupmarker.end === e.charAt(a) || n.alternatormarker === e.charAt(a) ? i += "\\" + e.charAt(a) : i += e.charAt(a);
            return i;
        }
        return t.extendAliases({
            numeric: {
                mask: function(e) {
                    if (0 !== e.repeat && isNaN(e.integerDigits) && (e.integerDigits = e.repeat), e.repeat = 0,
                    e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""),
                    " " === e.groupSeparator && (e.skipOptionalPartCharacter = n), e.autoGroup = e.autoGroup && "" !== e.groupSeparator,
                    e.autoGroup && ("string" == typeof e.groupSize && isFinite(e.groupSize) && (e.groupSize = parseInt(e.groupSize)),
                        isFinite(e.integerDigits))) {
                        var t = Math.floor(e.integerDigits / e.groupSize), a = e.integerDigits % e.groupSize;
                        e.integerDigits = parseInt(e.integerDigits) + (0 === a ? t - 1 : t), e.integerDigits < 1 && (e.integerDigits = "*");
                    }
                    e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && !1 === e.integerOptional && (e.positionCaretOnClick = "lvp"),
                        e.definitions[";"] = e.definitions["~"], e.definitions[";"].definitionSymbol = "~",
                    !0 === e.numericInput && (e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick,
                        e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e.decimalProtect = !1);
                    var r = "[+]";
                    if (r += i(e.prefix, e), !0 === e.integerOptional ? r += "~{1," + e.integerDigits + "}" : r += "~{" + e.integerDigits + "}",
                    e.digits !== n) {
                        var o = e.decimalProtect ? ":" : e.radixPoint, s = e.digits.toString().split(",");
                        isFinite(s[0]) && s[1] && isFinite(s[1]) ? r += o + ";{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional ? r += "[" + o + ";{1," + e.digits + "}]" : r += o + ";{" + e.digits + "}");
                    }
                    return r += i(e.suffix, e), r += "[-]", e.greedy = !1, r;
                },
                placeholder: "",
                greedy: !1,
                digits: "*",
                digitsOptional: !0,
                enforceDigitsOnBlur: !1,
                radixPoint: ".",
                positionCaretOnClick: "radixFocus",
                groupSize: 3,
                groupSeparator: "",
                autoGroup: !1,
                allowMinus: !0,
                negationSymbol: {
                    front: "-",
                    back: ""
                },
                integerDigits: "+",
                integerOptional: !0,
                prefix: "",
                suffix: "",
                rightAlign: !0,
                decimalProtect: !0,
                min: null,
                max: null,
                step: 1,
                insertMode: !0,
                autoUnmask: !1,
                unmaskAsNumber: !1,
                inputmode: "numeric",
                preValidation: function(t, i, a, r, o, s) {
                    if ("-" === a || a === o.negationSymbol.front) return !0 === o.allowMinus && (o.isNegative = o.isNegative === n || !o.isNegative,
                    "" === t.join("") || {
                        caret: i,
                        dopost: !0
                    });
                    if (!1 === r && a === o.radixPoint && o.digits !== n && (isNaN(o.digits) || parseInt(o.digits) > 0)) {
                        var l = e.inArray(o.radixPoint, t);
                        if (-1 !== l && s.validPositions[l] !== n) return !0 === o.numericInput ? i === l : {
                            caret: l + 1
                        };
                    }
                    return !0;
                },
                postValidation: function(i, a, r) {
                    var o = r.suffix.split(""), s = r.prefix.split("");
                    if (a.pos === n && a.caret !== n && !0 !== a.dopost) return a;
                    var l = a.caret !== n ? a.caret : a.pos, u = i.slice();
                    r.numericInput && (l = u.length - l - 1, u = u.reverse());
                    var c = u[l];
                    if (c === r.groupSeparator && (c = u[l += 1]), l === u.length - r.suffix.length - 1 && c === r.radixPoint) return a;
                    c !== n && c !== r.radixPoint && c !== r.negationSymbol.front && c !== r.negationSymbol.back && (u[l] = "?",
                        r.prefix.length > 0 && l >= (!1 === r.isNegative ? 1 : 0) && l < r.prefix.length - 1 + (!1 === r.isNegative ? 1 : 0) ? s[l - (!1 === r.isNegative ? 1 : 0)] = "?" : r.suffix.length > 0 && l >= u.length - r.suffix.length - (!1 === r.isNegative ? 1 : 0) && (o[l - (u.length - r.suffix.length - (!1 === r.isNegative ? 1 : 0))] = "?")),
                        s = s.join(""), o = o.join("");
                    var p = u.join("").replace(s, "");
                    if (p = (p = (p = (p = p.replace(o, "")).replace(new RegExp(t.escapeRegex(r.groupSeparator), "g"), "")).replace(new RegExp("[-" + t.escapeRegex(r.negationSymbol.front) + "]", "g"), "")).replace(new RegExp(t.escapeRegex(r.negationSymbol.back) + "$"), ""),
                    isNaN(r.placeholder) && (p = p.replace(new RegExp(t.escapeRegex(r.placeholder), "g"), "")),
                    p.length > 1 && 1 !== p.indexOf(r.radixPoint) && ("0" === c && (p = p.replace(/^\?/g, "")),
                        p = p.replace(/^0/g, "")), p.charAt(0) === r.radixPoint && "" !== r.radixPoint && !0 !== r.numericInput && (p = "0" + p),
                    "" !== p) {
                        if (p = p.split(""), (!r.digitsOptional || r.enforceDigitsOnBlur && "blur" === a.event) && isFinite(r.digits)) {
                            var f = e.inArray(r.radixPoint, p), m = e.inArray(r.radixPoint, u);
                            -1 === f && (p.push(r.radixPoint), f = p.length - 1);
                            for (var d = 1; d <= r.digits; d++) r.digitsOptional && (!r.enforceDigitsOnBlur || "blur" !== a.event) || p[f + d] !== n && p[f + d] !== r.placeholder.charAt(0) ? -1 !== m && u[m + d] !== n && (p[f + d] = p[f + d] || u[m + d]) : p[f + d] = a.placeholder || r.placeholder.charAt(0);
                        }
                        if (!0 !== r.autoGroup || "" === r.groupSeparator || c === r.radixPoint && a.pos === n && !a.dopost) p = p.join(""); else {
                            var h = p[p.length - 1] === r.radixPoint && a.c === r.radixPoint;
                            p = t(function(e, t) {
                                var n = "";
                                if (n += "(" + t.groupSeparator + "*{" + t.groupSize + "}){*}", "" !== t.radixPoint) {
                                    var i = e.join("").split(t.radixPoint);
                                    i[1] && (n += t.radixPoint + "*{" + i[1].match(/^\d*\??\d*/)[0].length + "}");
                                }
                                return n;
                            }(p, r), {
                                numericInput: !0,
                                jitMasking: !0,
                                definitions: {
                                    "*": {
                                        validator: "[0-9?]",
                                        cardinality: 1
                                    }
                                }
                            }).format(p.join("")), h && (p += r.radixPoint), p.charAt(0) === r.groupSeparator && p.substr(1);
                        }
                    }
                    if (r.isNegative && "blur" === a.event && (r.isNegative = "0" !== p), p = s + p,
                        p += o, r.isNegative && (p = r.negationSymbol.front + p, p += r.negationSymbol.back),
                        p = p.split(""), c !== n) if (c !== r.radixPoint && c !== r.negationSymbol.front && c !== r.negationSymbol.back) (l = e.inArray("?", p)) > -1 ? p[l] = c : l = a.caret || 0; else if (c === r.radixPoint || c === r.negationSymbol.front || c === r.negationSymbol.back) {
                        var g = e.inArray(c, p);
                        -1 !== g && (l = g);
                    }
                    r.numericInput && (l = p.length - l - 1, p = p.reverse());
                    var v = {
                        caret: c === n || a.pos !== n ? l + (r.numericInput ? -1 : 1) : l,
                        buffer: p,
                        refreshFromBuffer: a.dopost || i.join("") !== p.join("")
                    };
                    return v.refreshFromBuffer ? v : a;
                },
                onBeforeWrite: function(i, a, r, o) {
                    if (i) switch (i.type) {
                        case "keydown":
                            return o.postValidation(a, {
                                caret: r,
                                dopost: !0
                            }, o);

                        case "blur":
                        case "checkval":
                            var s;
                            if (function(e) {
                                e.parseMinMaxOptions === n && (null !== e.min && (e.min = e.min.toString().replace(new RegExp(t.escapeRegex(e.groupSeparator), "g"), ""),
                                "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), e.min = isFinite(e.min) ? parseFloat(e.min) : NaN,
                                isNaN(e.min) && (e.min = Number.MIN_VALUE)), null !== e.max && (e.max = e.max.toString().replace(new RegExp(t.escapeRegex(e.groupSeparator), "g"), ""),
                                "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN,
                                isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done");
                            }(o), null !== o.min || null !== o.max) {
                                if (s = o.onUnMask(a.join(""), n, e.extend({}, o, {
                                    unmaskAsNumber: !0
                                })), null !== o.min && s < o.min) return o.isNegative = o.min < 0, o.postValidation(o.min.toString().replace(".", o.radixPoint).split(""), {
                                    caret: r,
                                    dopost: !0,
                                    placeholder: "0"
                                }, o);
                                if (null !== o.max && s > o.max) return o.isNegative = o.max < 0, o.postValidation(o.max.toString().replace(".", o.radixPoint).split(""), {
                                    caret: r,
                                    dopost: !0,
                                    placeholder: "0"
                                }, o);
                            }
                            return o.postValidation(a, {
                                caret: r,
                                placeholder: "0",
                                event: "blur"
                            }, o);

                        case "_checkval":
                            return {
                                caret: r
                            };
                    }
                },
                regex: {
                    integerPart: function(e, n) {
                        return n ? new RegExp("[" + t.escapeRegex(e.negationSymbol.front) + "+]?") : new RegExp("[" + t.escapeRegex(e.negationSymbol.front) + "+]?\\d+");
                    },
                    integerNPart: function(e) {
                        return new RegExp("[\\d" + t.escapeRegex(e.groupSeparator) + t.escapeRegex(e.placeholder.charAt(0)) + "]+");
                    }
                },
                definitions: {
                    "~": {
                        validator: function(e, i, a, r, o, s) {
                            var l;
                            if ("k" === e || "m" === e) {
                                l = {
                                    insert: [],
                                    c: 0
                                };
                                for (var u = 0, c = "k" === e ? 2 : 5; u < c; u++) l.insert.push({
                                    pos: a + u,
                                    c: 0
                                });
                                return l.pos = a + c, l;
                            }
                            if (!0 === (l = r ? new RegExp("[0-9" + t.escapeRegex(o.groupSeparator) + "]").test(e) : new RegExp("[0-9]").test(e))) {
                                if (!0 !== o.numericInput && i.validPositions[a] !== n && "~" === i.validPositions[a].match.def && !s) {
                                    var p = i.buffer.join(""), f = (p = (p = p.replace(new RegExp("[-" + t.escapeRegex(o.negationSymbol.front) + "]", "g"), "")).replace(new RegExp(t.escapeRegex(o.negationSymbol.back) + "$"), "")).split(o.radixPoint);
                                    f.length > 1 && (f[1] = f[1].replace(/0/g, o.placeholder.charAt(0))), "0" === f[0] && (f[0] = f[0].replace(/0/g, o.placeholder.charAt(0))),
                                        p = f[0] + o.radixPoint + f[1] || "";
                                    var m = i._buffer.join("");
                                    for (p === o.radixPoint && (p = m); null === p.match(t.escapeRegex(m) + "$"); ) m = m.slice(1);
                                    l = (p = (p = p.replace(m, "")).split(""))[a] === n ? {
                                        pos: a,
                                        remove: a
                                    } : {
                                        pos: a
                                    };
                                }
                            } else r || e !== o.radixPoint || i.validPositions[a - 1] !== n || (l = {
                                insert: {
                                    pos: a,
                                    c: 0
                                },
                                pos: a + 1
                            });
                            return l;
                        },
                        cardinality: 1
                    },
                    "+": {
                        validator: function(e, t, n, i, a) {
                            return a.allowMinus && ("-" === e || e === a.negationSymbol.front);
                        },
                        cardinality: 1,
                        placeholder: ""
                    },
                    "-": {
                        validator: function(e, t, n, i, a) {
                            return a.allowMinus && e === a.negationSymbol.back;
                        },
                        cardinality: 1,
                        placeholder: ""
                    },
                    ":": {
                        validator: function(e, n, i, a, r) {
                            var o = "[" + t.escapeRegex(r.radixPoint) + "]", s = new RegExp(o).test(e);
                            return s && n.validPositions[i] && n.validPositions[i].match.placeholder === r.radixPoint && (s = {
                                caret: i + 1
                            }), s;
                        },
                        cardinality: 1,
                        placeholder: function(e) {
                            return e.radixPoint;
                        }
                    }
                },
                onUnMask: function(e, n, i) {
                    if ("" === n && !0 === i.nullable) return n;
                    var a = e.replace(i.prefix, "");
                    return a = (a = a.replace(i.suffix, "")).replace(new RegExp(t.escapeRegex(i.groupSeparator), "g"), ""),
                    "" !== i.placeholder.charAt(0) && (a = a.replace(new RegExp(i.placeholder.charAt(0), "g"), "0")),
                        i.unmaskAsNumber ? ("" !== i.radixPoint && -1 !== a.indexOf(i.radixPoint) && (a = a.replace(t.escapeRegex.call(this, i.radixPoint), ".")),
                            a = (a = a.replace(new RegExp("^" + t.escapeRegex(i.negationSymbol.front)), "-")).replace(new RegExp(t.escapeRegex(i.negationSymbol.back) + "$"), ""),
                            Number(a)) : a;
                },
                isComplete: function(e, n) {
                    var i = (n.numericInput ? e.slice().reverse() : e).join("");
                    return i = (i = (i = (i = (i = i.replace(new RegExp("^" + t.escapeRegex(n.negationSymbol.front)), "-")).replace(new RegExp(t.escapeRegex(n.negationSymbol.back) + "$"), "")).replace(n.prefix, "")).replace(n.suffix, "")).replace(new RegExp(t.escapeRegex(n.groupSeparator) + "([0-9]{3})", "g"), "$1"),
                    "," === n.radixPoint && (i = i.replace(t.escapeRegex(n.radixPoint), ".")), isFinite(i);
                },
                onBeforeMask: function(i, a) {
                    if (a.isNegative = n, "number" == typeof i && "" !== a.radixPoint && (i = i.toString().replace(".", a.radixPoint)),
                        i = i.toString().charAt(i.length - 1) === a.radixPoint ? i.toString().substr(0, i.length - 1) : i.toString(),
                    "" !== a.radixPoint && isFinite(i)) {
                        var r = i.split("."), o = "" !== a.groupSeparator ? parseInt(a.groupSize) : 0;
                        2 === r.length && (r[0].length > o || r[1].length > o || r[0].length <= o && r[1].length < o) && (i = i.replace(".", a.radixPoint));
                    }
                    var s = i.match(/,/g), l = i.match(/\./g);
                    if (i = l && s ? l.length > s.length ? (i = i.replace(/\./g, "")).replace(",", a.radixPoint) : s.length > l.length ? (i = i.replace(/,/g, "")).replace(".", a.radixPoint) : i.indexOf(".") < i.indexOf(",") ? i.replace(/\./g, "") : i.replace(/,/g, "") : i.replace(new RegExp(t.escapeRegex(a.groupSeparator), "g"), ""),
                    0 === a.digits && (-1 !== i.indexOf(".") ? i = i.substring(0, i.indexOf(".")) : -1 !== i.indexOf(",") && (i = i.substring(0, i.indexOf(",")))),
                    "" !== a.radixPoint && isFinite(a.digits) && -1 !== i.indexOf(a.radixPoint)) {
                        var u = i.split(a.radixPoint)[1].match(new RegExp("\\d*"))[0];
                        if (parseInt(a.digits) < u.toString().length) {
                            var c = Math.pow(10, parseInt(a.digits));
                            i = i.replace(t.escapeRegex(a.radixPoint), "."), i = (i = Math.round(parseFloat(i) * c) / c).toString().replace(".", a.radixPoint);
                        }
                    }
                    return function(t, n) {
                        if (n.numericInput) {
                            var i = e.inArray(n.radixPoint, t);
                            -1 === i && (t.push(n.radixPoint), i = t.length - 1);
                            for (var a = 1; a <= n.digits; a++) t[i + a] = t[i + a] || "0";
                        }
                        return t;
                    }(i.toString().split(""), a).join("");
                },
                onKeyDown: function(n, i, a, r) {
                    var o = e(this);
                    if (n.ctrlKey) switch (n.keyCode) {
                        case t.keyCode.UP:
                            o.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(r.step)), o.trigger("setvalue");
                            break;

                        case t.keyCode.DOWN:
                            o.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(r.step)), o.trigger("setvalue");
                    }
                }
            },
            currency: {
                prefix: "$ ",
                groupSeparator: ",",
                alias: "numeric",
                placeholder: "0",
                autoGroup: !0,
                digits: 2,
                digitsOptional: !1,
                clearMaskOnLostFocus: !1
            },
            decimal: {
                alias: "numeric"
            },
            integer: {
                alias: "numeric",
                digits: 0,
                radixPoint: ""
            },
            percentage: {
                alias: "numeric",
                digits: 2,
                digitsOptional: !0,
                radixPoint: ".",
                placeholder: "0",
                autoGroup: !1,
                min: 0,
                max: 100,
                suffix: " %",
                allowMinus: !1
            }
        }), t;
    }) ? i.apply(t, a) : i) || (e.exports = r);
}, function(e, t, n) {
    "use strict";
    var i, a, r;
    "function" == typeof Symbol && Symbol.iterator, a = [ n(1), n(0) ], void 0 === (r = "function" == typeof (i = function(e, t) {
        return t.extendDefinitions({
            A: {
                validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                casing: "upper"
            },
            "&": {
                validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
                casing: "upper"
            },
            "#": {
                validator: "[0-9A-Fa-f]",
                casing: "upper"
            }
        }), t.extendAliases({
            cssunit: {
                regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
            },
            url: {
                regex: "(https?|ftp)//.*",
                autoUnmask: !1
            },
            ip: {
                mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
                definitions: {
                    i: {
                        validator: function(e, t, n, i, a) {
                            return n - 1 > -1 && "." !== t.buffer[n - 1] ? (e = t.buffer[n - 1] + e, e = n - 2 > -1 && "." !== t.buffer[n - 2] ? t.buffer[n - 2] + e : "0" + e) : e = "00" + e,
                                new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(e);
                        }
                    }
                },
                onUnMask: function(e, t, n) {
                    return e;
                },
                inputmode: "numeric"
            },
            email: {
                mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                greedy: !1,
                casing: "lower",
                onBeforePaste: function(e, t) {
                    return (e = e.toLowerCase()).replace("mailto:", "");
                },
                definitions: {
                    "*": {
                        validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"
                    },
                    "-": {
                        validator: "[0-9A-Za-z-]"
                    }
                },
                onUnMask: function(e, t, n) {
                    return e;
                },
                inputmode: "email"
            },
            mac: {
                mask: "##:##:##:##:##:##"
            },
            vin: {
                mask: "V{13}9{4}",
                definitions: {
                    V: {
                        validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                        casing: "upper"
                    }
                },
                clearIncomplete: !0,
                autoUnmask: !0
            }
        }), t;
    }) ? i.apply(t, a) : i) || (e.exports = r);
}, function(e, t, n) {
    "use strict";
    var i;
    "function" == typeof Symbol && Symbol.iterator, void 0 === (i = function() {
        return document;
    }.call(t, n, t, e)) || (e.exports = i);
}, function(e, t, n) {
    "use strict";
    var i;
    "function" == typeof Symbol && Symbol.iterator, void 0 === (i = function() {
        return window;
    }.call(t, n, t, e)) || (e.exports = i);
}, function(e, t, n) {
    "use strict";
    var i, a, r;
    "function" == typeof Symbol && Symbol.iterator, a = [ n(1), n(0) ], void 0 === (r = "function" == typeof (i = function(e, t) {
        var n = {
            d: [ "[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate ],
            dd: [ "0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                return o(Date.prototype.getDate.call(this), 2);
            } ],
            ddd: [ "" ],
            dddd: [ "" ],
            m: [ "[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
                return Date.prototype.getMonth.call(this) + 1;
            } ],
            mm: [ "0[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
                return o(Date.prototype.getMonth.call(this) + 1, 2);
            } ],
            mmm: [ "" ],
            mmmm: [ "" ],
            yy: [ "[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                return o(Date.prototype.getFullYear.call(this), 2);
            } ],
            yyyy: [ "[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                return o(Date.prototype.getFullYear.call(this), 4);
            } ],
            h: [ "[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
            hh: [ "0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                return o(Date.prototype.getHours.call(this), 2);
            } ],
            hhh: [ "[0-9]+", Date.prototype.setHours, "hours", Date.prototype.getHours ],
            H: [ "1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
            HH: [ "[01][0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                return o(Date.prototype.getHours.call(this), 2);
            } ],
            HHH: [ "[0-9]+", Date.prototype.setHours, "hours", Date.prototype.getHours ],
            M: [ "[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes ],
            MM: [ "[0-5][0-9]", Date.prototype.setMinutes, "minutes", function() {
                return o(Date.prototype.getMinutes.call(this), 2);
            } ],
            s: [ "[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds ],
            ss: [ "[0-5][0-9]", Date.prototype.setSeconds, "seconds", function() {
                return o(Date.prototype.getSeconds.call(this), 2);
            } ],
            l: [ "[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                return o(Date.prototype.getMilliseconds.call(this), 3);
            } ],
            L: [ "[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                return o(Date.prototype.getMilliseconds.call(this), 2);
            } ],
            t: [ "[ap]" ],
            tt: [ "[ap]m" ],
            T: [ "[AP]" ],
            TT: [ "[AP]M" ],
            Z: [ "" ],
            o: [ "" ],
            S: [ "" ]
        }, i = {
            isoDate: "yyyy-mm-dd",
            isoTime: "HH:MM:ss",
            isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
            isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
        };
        function a(e) {
            if (!e.tokenizer) {
                var t = [];
                for (var i in n) -1 === t.indexOf(i[0]) && t.push(i[0]);
                e.tokenizer = "(" + t.join("+|") + ")+?|.", e.tokenizer = new RegExp(e.tokenizer, "g");
            }
            return e.tokenizer;
        }
        function r(e, i, r) {
            for (var o, s = ""; o = a(r).exec(e); ) if (void 0 === i) if (n[o[0]]) s += "(" + n[o[0]][0] + ")"; else switch (o[0]) {
                case "[":
                    s += "(";
                    break;

                case "]":
                    s += ")?";
                    break;

                default:
                    s += t.escapeRegex(o[0]);
            } else if (n[o[0]]) {
                s += n[o[0]][3].call(i.date);
            } else s += o[0];
            return s;
        }
        function o(e, t) {
            for (e = String(e), t = t || 2; e.length < t; ) e = "0" + e;
            return e;
        }
        function s(e, t, i) {
            var r, o, s, l, u = {
                date: new Date(1, 0, 1)
            }, c = e;
            function f(e, t, n) {
                e[r] = function(e) {
                    var t;
                    if (i.min && i.min[r] || i.max && i.max[r]) {
                        var n = i.min && i.min[r] || i.max[r], a = i.max && i.max[r] || i.min[r];
                        for (t = e.replace(/[^0-9]/g, ""), t += (n.indexOf(t) < a.indexOf(t) ? a : n).toString().substr(t.length); !new RegExp(l).test(t); ) t--;
                    } else t = e.replace(/[^0-9]/g, "0");
                    return t;
                }(t), e["raw" + r] = t, void 0 !== s && s.call(e.date, "month" == r ? parseInt(e[r]) - 1 : e[r]);
            }
            if ("string" == typeof c) {
                for (;o = a(i).exec(t); ) {
                    var m = c.slice(0, o[0].length);
                    n.hasOwnProperty(o[0]) && (l = n[o[0]][0], r = n[o[0]][2], s = n[o[0]][1], f(u, m)),
                        c = c.slice(m.length);
                }
                return u;
            }
        }
        return t.extendAliases({
            datetime: {
                mask: function(e) {
                    return n.S = e.i18n.ordinalSuffix.join("|"), e.inputFormat = i[e.inputFormat] || e.inputFormat,
                        e.displayFormat = i[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = i[e.outputFormat] || e.outputFormat || e.inputFormat,
                        e.placeholder = "" !== e.placeholder ? e.placeholder : e.inputFormat.replace(/[\[\]]/, ""),
                        e.min = s(e.min, e.inputFormat, e), e.max = s(e.max, e.inputFormat, e), e.regex = r(e.inputFormat, void 0, e),
                        null;
                },
                placeholder: "",
                inputFormat: "isoDateTime",
                displayFormat: void 0,
                outputFormat: void 0,
                min: null,
                max: null,
                i18n: {
                    dayNames: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                    monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                    ordinalSuffix: [ "st", "nd", "rd", "th" ]
                },
                postValidation: function(e, t, n) {
                    var i = t, a = s(e.join(""), n.inputFormat, n);
                    return i && a.date.getTime() == a.date.getTime() && (i = (i = function(e, t) {
                        return (!isFinite(e.rawday) || "29" == e.day && !isFinite(e.rawyear) || new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day) && t;
                    }(a, i)) && function(e, t) {
                        var n = !0;
                        if (t.min) {
                            if (e.rawyear) {
                                var i = e.rawyear.replace(/[^0-9]/g, "");
                                n = t.min.year.substr(0, i.length) <= i;
                            }
                            e.year === e.rawyear && t.min.date.getTime() == t.min.date.getTime() && (n = t.min.date.getTime() <= e.date.getTime());
                        }
                        return n && t.max && t.max.date.getTime() == t.max.date.getTime() && (n = t.max.date.getTime() >= e.date.getTime()),
                            n;
                    }(a, n)), i;
                },
                onKeyDown: function(n, i, r, s) {
                    if (n.ctrlKey && n.keyCode === t.keyCode.RIGHT) {
                        for (var l, u = new Date(), c = ""; l = a(s).exec(s.inputFormat); ) "d" === l[0].charAt(0) ? c += o(u.getDate(), l[0].length) : "m" === l[0].charAt(0) ? c += o(u.getMonth() + 1, l[0].length) : "yyyy" === l[0] ? c += u.getFullYear().toString() : "y" === l[0].charAt(0) && (c += o(u.getYear(), l[0].length));
                        this.inputmask._valueSet(c), e(this).trigger("setvalue");
                    }
                },
                onUnMask: function(e, t, n) {
                    return r(n.outputFormat, s(e, n.inputFormat, n), n);
                },
                casing: function(e, t, n, i) {
                    return 0 == t.nativeDef.indexOf("[ap]") ? e.toLowerCase() : 0 == t.nativeDef.indexOf("[AP]") ? e.toUpperCase() : e;
                },
                insertMode: !1
            }
        }), t;
    }) ? i.apply(t, a) : i) || (e.exports = r);
}, function(e, t, n) {
    "use strict";
    n(9), n(6), n(5), n(4);
    var i = o(n(0)), a = o(n(1)), r = o(n(2));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    a.default === r.default && n(3), window.Inputmask = i.default;
} ]);