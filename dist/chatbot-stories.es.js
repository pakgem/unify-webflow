function ke(o) {
  if (o === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o;
}
function qi(o, e) {
  o.prototype = Object.create(e.prototype), o.prototype.constructor = o, o.__proto__ = e;
}
var de = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Et = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Da, X, q, ge = 1e8, R = 1 / ge, _a = Math.PI * 2, Lr = _a / 4, Fr = 0, zi = Math.sqrt, Hr = Math.cos, Wr = Math.sin, j = function(e) {
  return typeof e == "string";
}, H = function(e) {
  return typeof e == "function";
}, Te = function(e) {
  return typeof e == "number";
}, Oa = function(e) {
  return typeof e > "u";
}, ve = function(e) {
  return typeof e == "object";
}, ee = function(e) {
  return e !== !1;
}, qa = function() {
  return typeof window < "u";
}, zt = function(e) {
  return H(e) || j(e);
}, Bi = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Z = Array.isArray, Gr = /random\([^)]+\)/g, Ur = /,\s*/g, ai = /(?:-?\.?\d|\.)+/gi, Li = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, nt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, ra = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Fi = /[+-]=-?[.\d]+/, Vr = /[^,'"\[\]\s]+/gi, Yr = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, B, _e, ya, za, ce = {}, jt = {}, Hi, Wi = function(e) {
  return (jt = ct(e, ce)) && re;
}, Ba = function(e, t) {
  return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, Pt = function(e, t) {
  return !t && console.warn(e);
}, Gi = function(e, t) {
  return e && (ce[e] = t) && jt && (jt[e] = t) || ce;
}, It = function() {
  return 0;
}, jr = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Ut = {
  suppressEvents: !0,
  kill: !1
}, Xr = {
  suppressEvents: !0
}, La = {}, Ne = [], xa = {}, Ui, ne = {}, na = {}, ii = 30, Vt = [], Fa = "", Ha = function(e) {
  var t = e[0], a, i;
  if (ve(t) || H(t) || (e = [e]), !(a = (t._gsap || {}).harness)) {
    for (i = Vt.length; i-- && !Vt[i].targetTest(t); )
      ;
    a = Vt[i];
  }
  for (i = e.length; i--; )
    e[i] && (e[i]._gsap || (e[i]._gsap = new pr(e[i], a))) || e.splice(i, 1);
  return e;
}, Je = function(e) {
  return e._gsap || Ha(fe(e))[0]._gsap;
}, Vi = function(e, t, a) {
  return (a = e[t]) && H(a) ? e[t]() : Oa(a) && e.getAttribute && e.getAttribute(t) || a;
}, te = function(e, t) {
  return (e = e.split(",")).forEach(t) || e;
}, G = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, z = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, ot = function(e, t) {
  var a = t.charAt(0), i = parseFloat(t.substr(2));
  return e = parseFloat(e), a === "+" ? e + i : a === "-" ? e - i : a === "*" ? e * i : e / i;
}, Jr = function(e, t) {
  for (var a = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < a; )
    ;
  return i < a;
}, Xt = function() {
  var e = Ne.length, t = Ne.slice(0), a, i;
  for (xa = {}, Ne.length = 0, a = 0; a < e; a++)
    i = t[a], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, Wa = function(e) {
  return !!(e._initted || e._startAt || e.add);
}, Yi = function(e, t, a, i) {
  Ne.length && !X && Xt(), e.render(t, a, !!(X && t < 0 && Wa(e))), Ne.length && !X && Xt();
}, ji = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match(Vr).length < 2 ? t : j(e) ? e.trim() : e;
}, Xi = function(e) {
  return e;
}, ue = function(e, t) {
  for (var a in t)
    a in e || (e[a] = t[a]);
  return e;
}, Qr = function(e) {
  return function(t, a) {
    for (var i in a)
      i in t || i === "duration" && e || i === "ease" || (t[i] = a[i]);
  };
}, ct = function(e, t) {
  for (var a in t)
    e[a] = t[a];
  return e;
}, ri = function o(e, t) {
  for (var a in t)
    a !== "__proto__" && a !== "constructor" && a !== "prototype" && (e[a] = ve(t[a]) ? o(e[a] || (e[a] = {}), t[a]) : t[a]);
  return e;
}, Jt = function(e, t) {
  var a = {}, i;
  for (i in e)
    i in t || (a[i] = e[i]);
  return a;
}, kt = function(e) {
  var t = e.parent || B, a = e.keyframes ? Qr(Z(e.keyframes)) : ue;
  if (ee(e.inherit))
    for (; t; )
      a(e, t.vars.defaults), t = t.parent || t._dp;
  return e;
}, Kr = function(e, t) {
  for (var a = e.length, i = a === t.length; i && a-- && e[a] === t[a]; )
    ;
  return a < 0;
}, Ji = function(e, t, a, i, r) {
  var n = e[i], s;
  if (r)
    for (s = t[r]; n && n[r] > s; )
      n = n._prev;
  return n ? (t._next = n._next, n._next = t) : (t._next = e[a], e[a] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = n, t.parent = t._dp = e, t;
}, ta = function(e, t, a, i) {
  a === void 0 && (a = "_first"), i === void 0 && (i = "_last");
  var r = t._prev, n = t._next;
  r ? r._next = n : e[a] === t && (e[a] = n), n ? n._prev = r : e[i] === t && (e[i] = r), t._next = t._prev = t.parent = null;
}, Oe = function(e, t) {
  e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, Qe = function(e, t) {
  if (e && (!t || t._end > e._dur || t._start < 0))
    for (var a = e; a; )
      a._dirty = 1, a = a.parent;
  return e;
}, Zr = function(e) {
  for (var t = e.parent; t && t.parent; )
    t._dirty = 1, t.totalDuration(), t = t.parent;
  return e;
}, va = function(e, t, a, i) {
  return e._startAt && (X ? e._startAt.revert(Ut) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, i));
}, $r = function o(e) {
  return !e || e._ts && o(e.parent);
}, ni = function(e) {
  return e._repeat ? ut(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, ut = function(e, t) {
  var a = Math.floor(e = z(e / t));
  return e && a === e ? a - 1 : a;
}, Qt = function(e, t) {
  return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, aa = function(e) {
  return e._end = z(e._start + (e._tDur / Math.abs(e._ts || e._rts || R) || 0));
}, ia = function(e, t) {
  var a = e._dp;
  return a && a.smoothChildTiming && e._ts && (e._start = z(a._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), aa(e), a._dirty || Qe(a, e)), e;
}, Qi = function(e, t) {
  var a;
  if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (a = Qt(e.rawTime(), t), (!t._dur || qt(0, t.totalDuration(), a) - t._tTime > R) && t.render(a, !0)), Qe(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (a = e; a._dp; )
        a.rawTime() >= 0 && a.totalTime(a._tTime), a = a._dp;
    e._zTime = -R;
  }
}, ye = function(e, t, a, i) {
  return t.parent && Oe(t), t._start = z((Te(a) ? a : a || e !== B ? me(e, a, t) : e._time) + t._delay), t._end = z(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Ji(e, t, "_first", "_last", e._sort ? "_start" : 0), Aa(t) || (e._recent = t), i || Qi(e, t), e._ts < 0 && ia(e, e._tTime), e;
}, Ki = function(e, t) {
  return (ce.ScrollTrigger || Ba("scrollTrigger", t)) && ce.ScrollTrigger.create(t, e);
}, Zi = function(e, t, a, i, r) {
  if (Ua(e, t, r), !e._initted)
    return 1;
  if (!a && e._pt && !X && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Ui !== se.frame)
    return Ne.push(e), e._lazy = [r, i], 1;
}, en = function o(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || o(t));
}, Aa = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, tn = function(e, t, a, i) {
  var r = e.ratio, n = t < 0 || !t && (!e._start && en(e) && !(!e._initted && Aa(e)) || (e._ts < 0 || e._dp._ts < 0) && !Aa(e)) ? 0 : 1, s = e._rDelay, l = 0, d, c, u;
  if (s && e._repeat && (l = qt(0, e._tDur, t), c = ut(l, s), e._yoyo && c & 1 && (n = 1 - n), c !== ut(e._tTime, s) && (r = 1 - n, e.vars.repeatRefresh && e._initted && e.invalidate())), n !== r || X || i || e._zTime === R || !t && e._zTime) {
    if (!e._initted && Zi(e, t, i, a, l))
      return;
    for (u = e._zTime, e._zTime = t || (a ? R : 0), a || (a = t && !u), e.ratio = n, e._from && (n = 1 - n), e._time = 0, e._tTime = l, d = e._pt; d; )
      d.r(n, d.d), d = d._next;
    t < 0 && va(e, t, a, !0), e._onUpdate && !a && oe(e, "onUpdate"), l && e._repeat && !a && e.parent && oe(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === n && (n && Oe(e, 1), !a && !X && (oe(e, n ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else e._zTime || (e._zTime = t);
}, an = function(e, t, a) {
  var i;
  if (a > t)
    for (i = e._first; i && i._start <= a; ) {
      if (i.data === "isPause" && i._start > t)
        return i;
      i = i._next;
    }
  else
    for (i = e._last; i && i._start >= a; ) {
      if (i.data === "isPause" && i._start < t)
        return i;
      i = i._prev;
    }
}, pt = function(e, t, a, i) {
  var r = e._repeat, n = z(t) || 0, s = e._tTime / e._tDur;
  return s && !i && (e._time *= n / e._dur), e._dur = n, e._tDur = r ? r < 0 ? 1e10 : z(n * (r + 1) + e._rDelay * r) : n, s > 0 && !i && ia(e, e._tTime = e._tDur * s), e.parent && aa(e), a || Qe(e.parent, e), e;
}, si = function(e) {
  return e instanceof $ ? Qe(e) : pt(e, e._dur);
}, rn = {
  _start: 0,
  endTime: It,
  totalDuration: It
}, me = function o(e, t, a) {
  var i = e.labels, r = e._recent || rn, n = e.duration() >= ge ? r.endTime(!1) : e._dur, s, l, d;
  return j(t) && (isNaN(t) || t in i) ? (l = t.charAt(0), d = t.substr(-1) === "%", s = t.indexOf("="), l === "<" || l === ">" ? (s >= 0 && (t = t.replace(/=/, "")), (l === "<" ? r._start : r.endTime(r._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (d ? (s < 0 ? r : a).totalDuration() / 100 : 1)) : s < 0 ? (t in i || (i[t] = n), i[t]) : (l = parseFloat(t.charAt(s - 1) + t.substr(s + 1)), d && a && (l = l / 100 * (Z(a) ? a[0] : a).totalDuration()), s > 1 ? o(e, t.substr(0, s - 1), a) + l : n + l)) : t == null ? n : +t;
}, Ct = function(e, t, a) {
  var i = Te(t[1]), r = (i ? 2 : 1) + (e < 2 ? 0 : 1), n = t[r], s, l;
  if (i && (n.duration = t[1]), n.parent = a, e) {
    for (s = n, l = a; l && !("immediateRender" in s); )
      s = l.vars.defaults || {}, l = ee(l.vars.inherit) && l.parent;
    n.immediateRender = ee(s.immediateRender), e < 2 ? n.runBackwards = 1 : n.startAt = t[r - 1];
  }
  return new U(t[0], n, t[r + 1]);
}, Be = function(e, t) {
  return e || e === 0 ? t(e) : t;
}, qt = function(e, t, a) {
  return a < e ? e : a > t ? t : a;
}, K = function(e, t) {
  return !j(e) || !(t = Yr.exec(e)) ? "" : t[1];
}, nn = function(e, t, a) {
  return Be(a, function(i) {
    return qt(e, t, i);
  });
}, Sa = [].slice, $i = function(e, t) {
  return e && ve(e) && "length" in e && (!t && !e.length || e.length - 1 in e && ve(e[0])) && !e.nodeType && e !== _e;
}, sn = function(e, t, a) {
  return a === void 0 && (a = []), e.forEach(function(i) {
    var r;
    return j(i) && !t || $i(i, 1) ? (r = a).push.apply(r, fe(i)) : a.push(i);
  }) || a;
}, fe = function(e, t, a) {
  return q && !t && q.selector ? q.selector(e) : j(e) && !a && (ya || !ht()) ? Sa.call((t || za).querySelectorAll(e), 0) : Z(e) ? sn(e, a) : $i(e) ? Sa.call(e, 0) : e ? [e] : [];
}, ka = function(e) {
  return e = fe(e)[0] || Pt("Invalid scope") || {}, function(t) {
    var a = e.current || e.nativeElement || e;
    return fe(t, a.querySelectorAll ? a : a === e ? Pt("Invalid scope") || za.createElement("div") : e);
  };
}, er = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, tr = function(e) {
  if (H(e))
    return e;
  var t = ve(e) ? e : {
    each: e
  }, a = Ke(t.ease), i = t.from || 0, r = parseFloat(t.base) || 0, n = {}, s = i > 0 && i < 1, l = isNaN(i) || s, d = t.axis, c = i, u = i;
  return j(i) ? c = u = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !s && l && (c = i[0], u = i[1]), function(p, m, g) {
    var h = (g || t).length, f = n[h], b, y, _, v, x, C, A, k, S;
    if (!f) {
      if (S = t.grid === "auto" ? 0 : (t.grid || [1, ge])[1], !S) {
        for (A = -ge; A < (A = g[S++].getBoundingClientRect().left) && S < h; )
          ;
        S < h && S--;
      }
      for (f = n[h] = [], b = l ? Math.min(S, h) * c - 0.5 : i % S, y = S === ge ? 0 : l ? h * u / S - 0.5 : i / S | 0, A = 0, k = ge, C = 0; C < h; C++)
        _ = C % S - b, v = y - (C / S | 0), f[C] = x = d ? Math.abs(d === "y" ? v : _) : zi(_ * _ + v * v), x > A && (A = x), x < k && (k = x);
      i === "random" && er(f), f.max = A - k, f.min = k, f.v = h = (parseFloat(t.amount) || parseFloat(t.each) * (S > h ? h - 1 : d ? d === "y" ? h / S : S : Math.max(S, h / S)) || 0) * (i === "edges" ? -1 : 1), f.b = h < 0 ? r - h : r, f.u = K(t.amount || t.each) || 0, a = a && h < 0 ? _n(a) : a;
    }
    return h = (f[p] - f.min) / f.max || 0, z(f.b + (a ? a(h) : h) * f.v) + f.u;
  };
}, Ca = function(e) {
  var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(a) {
    var i = z(Math.round(parseFloat(a) / e) * e * t);
    return (i - i % 1) / t + (Te(a) ? 0 : K(a));
  };
}, ar = function(e, t) {
  var a = Z(e), i, r;
  return !a && ve(e) && (i = a = e.radius || ge, e.values ? (e = fe(e.values), (r = !Te(e[0])) && (i *= i)) : e = Ca(e.increment)), Be(t, a ? H(e) ? function(n) {
    return r = e(n), Math.abs(r - n) <= i ? r : n;
  } : function(n) {
    for (var s = parseFloat(r ? n.x : n), l = parseFloat(r ? n.y : 0), d = ge, c = 0, u = e.length, p, m; u--; )
      r ? (p = e[u].x - s, m = e[u].y - l, p = p * p + m * m) : p = Math.abs(e[u] - s), p < d && (d = p, c = u);
    return c = !i || d <= i ? e[c] : n, r || c === n || Te(n) ? c : c + K(n);
  } : Ca(e));
}, ir = function(e, t, a, i) {
  return Be(Z(e) ? !t : a === !0 ? !!(a = 0) : !i, function() {
    return Z(e) ? e[~~(Math.random() * e.length)] : (a = a || 1e-5) && (i = a < 1 ? Math.pow(10, (a + "").length - 2) : 1) && Math.floor(Math.round((e - a / 2 + Math.random() * (t - e + a * 0.99)) / a) * a * i) / i;
  });
}, on = function() {
  for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
    t[a] = arguments[a];
  return function(i) {
    return t.reduce(function(r, n) {
      return n(r);
    }, i);
  };
}, ln = function(e, t) {
  return function(a) {
    return e(parseFloat(a)) + (t || K(a));
  };
}, dn = function(e, t, a) {
  return nr(e, t, 0, 1, a);
}, rr = function(e, t, a) {
  return Be(a, function(i) {
    return e[~~t(i)];
  });
}, cn = function o(e, t, a) {
  var i = t - e;
  return Z(e) ? rr(e, o(0, e.length), t) : Be(a, function(r) {
    return (i + (r - e) % i) % i + e;
  });
}, un = function o(e, t, a) {
  var i = t - e, r = i * 2;
  return Z(e) ? rr(e, o(0, e.length - 1), t) : Be(a, function(n) {
    return n = (r + (n - e) % r) % r || 0, e + (n > i ? r - n : n);
  });
}, Mt = function(e) {
  return e.replace(Gr, function(t) {
    var a = t.indexOf("[") + 1, i = t.substring(a || 7, a ? t.indexOf("]") : t.length - 1).split(Ur);
    return ir(a ? i : +i[0], a ? 0 : +i[1], +i[2] || 1e-5);
  });
}, nr = function(e, t, a, i, r) {
  var n = t - e, s = i - a;
  return Be(r, function(l) {
    return a + ((l - e) / n * s || 0);
  });
}, pn = function o(e, t, a, i) {
  var r = isNaN(e + t) ? 0 : function(m) {
    return (1 - m) * e + m * t;
  };
  if (!r) {
    var n = j(e), s = {}, l, d, c, u, p;
    if (a === !0 && (i = 1) && (a = null), n)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (Z(e) && !Z(t)) {
      for (c = [], u = e.length, p = u - 2, d = 1; d < u; d++)
        c.push(o(e[d - 1], e[d]));
      u--, r = function(g) {
        g *= u;
        var h = Math.min(p, ~~g);
        return c[h](g - h);
      }, a = t;
    } else i || (e = ct(Z(e) ? [] : {}, e));
    if (!c) {
      for (l in t)
        Ga.call(s, e, l, "get", t[l]);
      r = function(g) {
        return ja(g, s) || (n ? e.p : e);
      };
    }
  }
  return Be(a, r);
}, oi = function(e, t, a) {
  var i = e.labels, r = ge, n, s, l;
  for (n in i)
    s = i[n] - t, s < 0 == !!a && s && r > (s = Math.abs(s)) && (l = n, r = s);
  return l;
}, oe = function(e, t, a) {
  var i = e.vars, r = i[t], n = q, s = e._ctx, l, d, c;
  if (r)
    return l = i[t + "Params"], d = i.callbackScope || e, a && Ne.length && Xt(), s && (q = s), c = l ? r.apply(d, l) : r.call(d), q = n, c;
}, xt = function(e) {
  return Oe(e), e.scrollTrigger && e.scrollTrigger.kill(!!X), e.progress() < 1 && oe(e, "onInterrupt"), e;
}, st, sr = [], or = function(e) {
  if (e)
    if (e = !e.name && e.default || e, qa() || e.headless) {
      var t = e.name, a = H(e), i = t && !a && e.init ? function() {
        this._props = [];
      } : e, r = {
        init: It,
        render: ja,
        add: Ga,
        kill: Pn,
        modifier: En,
        rawVars: 0
      }, n = {
        targetTest: 0,
        get: 0,
        getSetter: Ya,
        aliases: {},
        register: 0
      };
      if (ht(), e !== i) {
        if (ne[t])
          return;
        ue(i, ue(Jt(e, r), n)), ct(i.prototype, ct(r, Jt(e, n))), ne[i.prop = t] = i, e.targetTest && (Vt.push(i), La[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      Gi(t, i), e.register && e.register(re, i, ae);
    } else
      sr.push(e);
}, M = 255, vt = {
  aqua: [0, M, M],
  lime: [0, M, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, M],
  navy: [0, 0, 128],
  white: [M, M, M],
  olive: [128, 128, 0],
  yellow: [M, M, 0],
  orange: [M, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [M, 0, 0],
  pink: [M, 192, 203],
  cyan: [0, M, M],
  transparent: [M, M, M, 0]
}, sa = function(e, t, a) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (a - t) * e * 6 : e < 0.5 ? a : e * 3 < 2 ? t + (a - t) * (2 / 3 - e) * 6 : t) * M + 0.5 | 0;
}, lr = function(e, t, a) {
  var i = e ? Te(e) ? [e >> 16, e >> 8 & M, e & M] : 0 : vt.black, r, n, s, l, d, c, u, p, m, g;
  if (!i) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), vt[e])
      i = vt[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (r = e.charAt(1), n = e.charAt(2), s = e.charAt(3), e = "#" + r + r + n + n + s + s + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & M, i & M, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & M, e & M];
    } else if (e.substr(0, 3) === "hsl") {
      if (i = g = e.match(ai), !t)
        l = +i[0] % 360 / 360, d = +i[1] / 100, c = +i[2] / 100, n = c <= 0.5 ? c * (d + 1) : c + d - c * d, r = c * 2 - n, i.length > 3 && (i[3] *= 1), i[0] = sa(l + 1 / 3, r, n), i[1] = sa(l, r, n), i[2] = sa(l - 1 / 3, r, n);
      else if (~e.indexOf("="))
        return i = e.match(Li), a && i.length < 4 && (i[3] = 1), i;
    } else
      i = e.match(ai) || vt.transparent;
    i = i.map(Number);
  }
  return t && !g && (r = i[0] / M, n = i[1] / M, s = i[2] / M, u = Math.max(r, n, s), p = Math.min(r, n, s), c = (u + p) / 2, u === p ? l = d = 0 : (m = u - p, d = c > 0.5 ? m / (2 - u - p) : m / (u + p), l = u === r ? (n - s) / m + (n < s ? 6 : 0) : u === n ? (s - r) / m + 2 : (r - n) / m + 4, l *= 60), i[0] = ~~(l + 0.5), i[1] = ~~(d * 100 + 0.5), i[2] = ~~(c * 100 + 0.5)), a && i.length < 4 && (i[3] = 1), i;
}, dr = function(e) {
  var t = [], a = [], i = -1;
  return e.split(De).forEach(function(r) {
    var n = r.match(nt) || [];
    t.push.apply(t, n), a.push(i += n.length + 1);
  }), t.c = a, t;
}, li = function(e, t, a) {
  var i = "", r = (e + i).match(De), n = t ? "hsla(" : "rgba(", s = 0, l, d, c, u;
  if (!r)
    return e;
  if (r = r.map(function(p) {
    return (p = lr(p, t, 1)) && n + (t ? p[0] + "," + p[1] + "%," + p[2] + "%," + p[3] : p.join(",")) + ")";
  }), a && (c = dr(e), l = a.c, l.join(i) !== c.c.join(i)))
    for (d = e.replace(De, "1").split(nt), u = d.length - 1; s < u; s++)
      i += d[s] + (~l.indexOf(s) ? r.shift() || n + "0,0,0,0)" : (c.length ? c : r.length ? r : a).shift());
  if (!d)
    for (d = e.split(De), u = d.length - 1; s < u; s++)
      i += d[s] + r[s];
  return i + d[u];
}, De = (function() {
  var o = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in vt)
    o += "|" + e + "\\b";
  return new RegExp(o + ")", "gi");
})(), hn = /hsl[a]?\(/, cr = function(e) {
  var t = e.join(" "), a;
  if (De.lastIndex = 0, De.test(t))
    return a = hn.test(t), e[1] = li(e[1], a), e[0] = li(e[0], a, dr(e[1])), !0;
}, Rt, se = (function() {
  var o = Date.now, e = 500, t = 33, a = o(), i = a, r = 1e3 / 240, n = r, s = [], l, d, c, u, p, m, g = function h(f) {
    var b = o() - i, y = f === !0, _, v, x, C;
    if ((b > e || b < 0) && (a += b - t), i += b, x = i - a, _ = x - n, (_ > 0 || y) && (C = ++u.frame, p = x - u.time * 1e3, u.time = x = x / 1e3, n += _ + (_ >= r ? 4 : r - _), v = 1), y || (l = d(h)), v)
      for (m = 0; m < s.length; m++)
        s[m](x, p, C, f);
  };
  return u = {
    time: 0,
    frame: 0,
    tick: function() {
      g(!0);
    },
    deltaRatio: function(f) {
      return p / (1e3 / (f || 60));
    },
    wake: function() {
      Hi && (!ya && qa() && (_e = ya = window, za = _e.document || {}, ce.gsap = re, (_e.gsapVersions || (_e.gsapVersions = [])).push(re.version), Wi(jt || _e.GreenSockGlobals || !_e.gsap && _e || {}), sr.forEach(or)), c = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && u.sleep(), d = c || function(f) {
        return setTimeout(f, n - u.time * 1e3 + 1 | 0);
      }, Rt = 1, g(2));
    },
    sleep: function() {
      (c ? cancelAnimationFrame : clearTimeout)(l), Rt = 0, d = It;
    },
    lagSmoothing: function(f, b) {
      e = f || 1 / 0, t = Math.min(b || 33, e);
    },
    fps: function(f) {
      r = 1e3 / (f || 240), n = u.time * 1e3 + r;
    },
    add: function(f, b, y) {
      var _ = b ? function(v, x, C, A) {
        f(v, x, C, A), u.remove(_);
      } : f;
      return u.remove(f), s[y ? "unshift" : "push"](_), ht(), _;
    },
    remove: function(f, b) {
      ~(b = s.indexOf(f)) && s.splice(b, 1) && m >= b && m--;
    },
    _listeners: s
  }, u;
})(), ht = function() {
  return !Rt && se.wake();
}, P = {}, mn = /^[\d.\-M][\d.\-,\s]/, gn = /["']/g, fn = function(e) {
  for (var t = {}, a = e.substr(1, e.length - 3).split(":"), i = a[0], r = 1, n = a.length, s, l, d; r < n; r++)
    l = a[r], s = r !== n - 1 ? l.lastIndexOf(",") : l.length, d = l.substr(0, s), t[i] = isNaN(d) ? d.replace(gn, "").trim() : +d, i = l.substr(s + 1).trim();
  return t;
}, wn = function(e) {
  var t = e.indexOf("(") + 1, a = e.indexOf(")"), i = e.indexOf("(", t);
  return e.substring(t, ~i && i < a ? e.indexOf(")", a + 1) : a);
}, bn = function(e) {
  var t = (e + "").split("("), a = P[t[0]];
  return a && t.length > 1 && a.config ? a.config.apply(null, ~e.indexOf("{") ? [fn(t[1])] : wn(e).split(",").map(ji)) : P._CE && mn.test(e) ? P._CE("", e) : a;
}, _n = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, Ke = function(e, t) {
  return e && (H(e) ? e : P[e] || bn(e)) || t;
}, $e = function(e, t, a, i) {
  a === void 0 && (a = function(l) {
    return 1 - t(1 - l);
  }), i === void 0 && (i = function(l) {
    return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
  });
  var r = {
    easeIn: t,
    easeOut: a,
    easeInOut: i
  }, n;
  return te(e, function(s) {
    P[s] = ce[s] = r, P[n = s.toLowerCase()] = a;
    for (var l in r)
      P[n + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = P[s + "." + l] = r[l];
  }), r;
}, ur = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, oa = function o(e, t, a) {
  var i = t >= 1 ? t : 1, r = (a || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), n = r / _a * (Math.asin(1 / i) || 0), s = function(c) {
    return c === 1 ? 1 : i * Math.pow(2, -10 * c) * Wr((c - n) * r) + 1;
  }, l = e === "out" ? s : e === "in" ? function(d) {
    return 1 - s(1 - d);
  } : ur(s);
  return r = _a / r, l.config = function(d, c) {
    return o(e, d, c);
  }, l;
}, la = function o(e, t) {
  t === void 0 && (t = 1.70158);
  var a = function(n) {
    return n ? --n * n * ((t + 1) * n + t) + 1 : 0;
  }, i = e === "out" ? a : e === "in" ? function(r) {
    return 1 - a(1 - r);
  } : ur(a);
  return i.config = function(r) {
    return o(e, r);
  }, i;
};
te("Linear,Quad,Cubic,Quart,Quint,Strong", function(o, e) {
  var t = e < 5 ? e + 1 : e;
  $e(o + ",Power" + (t - 1), e ? function(a) {
    return Math.pow(a, t);
  } : function(a) {
    return a;
  }, function(a) {
    return 1 - Math.pow(1 - a, t);
  }, function(a) {
    return a < 0.5 ? Math.pow(a * 2, t) / 2 : 1 - Math.pow((1 - a) * 2, t) / 2;
  });
});
P.Linear.easeNone = P.none = P.Linear.easeIn;
$e("Elastic", oa("in"), oa("out"), oa());
(function(o, e) {
  var t = 1 / e, a = 2 * t, i = 2.5 * t, r = function(s) {
    return s < t ? o * s * s : s < a ? o * Math.pow(s - 1.5 / e, 2) + 0.75 : s < i ? o * (s -= 2.25 / e) * s + 0.9375 : o * Math.pow(s - 2.625 / e, 2) + 0.984375;
  };
  $e("Bounce", function(n) {
    return 1 - r(1 - n);
  }, r);
})(7.5625, 2.75);
$e("Expo", function(o) {
  return Math.pow(2, 10 * (o - 1)) * o + o * o * o * o * o * o * (1 - o);
});
$e("Circ", function(o) {
  return -(zi(1 - o * o) - 1);
});
$e("Sine", function(o) {
  return o === 1 ? 1 : -Hr(o * Lr) + 1;
});
$e("Back", la("in"), la("out"), la());
P.SteppedEase = P.steps = ce.SteppedEase = {
  config: function(e, t) {
    e === void 0 && (e = 1);
    var a = 1 / e, i = e + (t ? 0 : 1), r = t ? 1 : 0, n = 1 - R;
    return function(s) {
      return ((i * qt(0, n, s) | 0) + r) * a;
    };
  }
};
Et.ease = P["quad.out"];
te("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(o) {
  return Fa += o + "," + o + "Params,";
});
var pr = function(e, t) {
  this.id = Fr++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : Vi, this.set = t ? t.getSetter : Ya;
}, Nt = /* @__PURE__ */ (function() {
  function o(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, pt(this, +t.duration, 1, 1), this.data = t.data, q && (this._ctx = q, q.data.push(this)), Rt || se.wake();
  }
  var e = o.prototype;
  return e.delay = function(a) {
    return a || a === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + a - this._delay), this._delay = a, this) : this._delay;
  }, e.duration = function(a) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? a + (a + this._rDelay) * this._repeat : a) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(a) {
    return arguments.length ? (this._dirty = 0, pt(this, this._repeat < 0 ? a : (a - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(a, i) {
    if (ht(), !arguments.length)
      return this._tTime;
    var r = this._dp;
    if (r && r.smoothChildTiming && this._ts) {
      for (ia(this, a), !r._dp || r.parent || Qi(r, this); r && r.parent; )
        r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && a < this._tDur || this._ts < 0 && a > 0 || !this._tDur && !a) && ye(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== a || !this._dur && !i || this._initted && Math.abs(this._zTime) === R || !this._initted && this._dur && a || !a && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = a), Yi(this, a, i)), this;
  }, e.time = function(a, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), a + ni(this)) % (this._dur + this._rDelay) || (a ? this._dur : 0), i) : this._time;
  }, e.totalProgress = function(a, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * a, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, e.progress = function(a, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - a : a) + ni(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(a, i) {
    var r = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (a - 1) * r, i) : this._repeat ? ut(this._tTime, r) + 1 : 1;
  }, e.timeScale = function(a, i) {
    if (!arguments.length)
      return this._rts === -R ? 0 : this._rts;
    if (this._rts === a)
      return this;
    var r = this.parent && this._ts ? Qt(this.parent._time, this) : this._tTime;
    return this._rts = +a || 0, this._ts = this._ps || a === -R ? 0 : this._rts, this.totalTime(qt(-Math.abs(this._delay), this.totalDuration(), r), i !== !1), aa(this), Zr(this);
  }, e.paused = function(a) {
    return arguments.length ? (this._ps !== a && (this._ps = a, a ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (ht(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== R && (this._tTime -= R)))), this) : this._ps;
  }, e.startTime = function(a) {
    if (arguments.length) {
      this._start = z(a);
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && ye(i, this, this._start - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(a) {
    return this._start + (ee(a) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(a) {
    var i = this.parent || this._dp;
    return i ? a && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Qt(i.rawTime(a), this) : this._tTime : this._tTime;
  }, e.revert = function(a) {
    a === void 0 && (a = Xr);
    var i = X;
    return X = a, Wa(this) && (this.timeline && this.timeline.revert(a), this.totalTime(-0.01, a.suppressEvents)), this.data !== "nested" && a.kill !== !1 && this.kill(), X = i, this;
  }, e.globalTime = function(a) {
    for (var i = this, r = arguments.length ? a : i.rawTime(); i; )
      r = i._start + r / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(a) : r;
  }, e.repeat = function(a) {
    return arguments.length ? (this._repeat = a === 1 / 0 ? -2 : a, si(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(a) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = a, si(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(a) {
    return arguments.length ? (this._yoyo = a, this) : this._yoyo;
  }, e.seek = function(a, i) {
    return this.totalTime(me(this, a), ee(i));
  }, e.restart = function(a, i) {
    return this.play().totalTime(a ? -this._delay : 0, ee(i)), this._dur || (this._zTime = -R), this;
  }, e.play = function(a, i) {
    return a != null && this.seek(a, i), this.reversed(!1).paused(!1);
  }, e.reverse = function(a, i) {
    return a != null && this.seek(a || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, e.pause = function(a, i) {
    return a != null && this.seek(a, i), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(a) {
    return arguments.length ? (!!a !== this.reversed() && this.timeScale(-this._rts || (a ? -R : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -R, this;
  }, e.isActive = function() {
    var a = this.parent || this._dp, i = this._start, r;
    return !!(!a || this._ts && this._initted && a.isActive() && (r = a.rawTime(!0)) >= i && r < this.endTime(!0) - R);
  }, e.eventCallback = function(a, i, r) {
    var n = this.vars;
    return arguments.length > 1 ? (i ? (n[a] = i, r && (n[a + "Params"] = r), a === "onUpdate" && (this._onUpdate = i)) : delete n[a], this) : n[a];
  }, e.then = function(a) {
    var i = this, r = i._prom;
    return new Promise(function(n) {
      var s = H(a) ? a : Xi, l = function() {
        var c = i.then;
        i.then = null, r && r(), H(s) && (s = s(i)) && (s.then || s === i) && (i.then = c), n(s), i.then = c;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? l() : i._prom = l;
    });
  }, e.kill = function() {
    xt(this);
  }, o;
})();
ue(Nt.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -R,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var $ = /* @__PURE__ */ (function(o) {
  qi(e, o);
  function e(a, i) {
    var r;
    return a === void 0 && (a = {}), r = o.call(this, a) || this, r.labels = {}, r.smoothChildTiming = !!a.smoothChildTiming, r.autoRemoveChildren = !!a.autoRemoveChildren, r._sort = ee(a.sortChildren), B && ye(a.parent || B, ke(r), i), a.reversed && r.reverse(), a.paused && r.paused(!0), a.scrollTrigger && Ki(ke(r), a.scrollTrigger), r;
  }
  var t = e.prototype;
  return t.to = function(i, r, n) {
    return Ct(0, arguments, this), this;
  }, t.from = function(i, r, n) {
    return Ct(1, arguments, this), this;
  }, t.fromTo = function(i, r, n, s) {
    return Ct(2, arguments, this), this;
  }, t.set = function(i, r, n) {
    return r.duration = 0, r.parent = this, kt(r).repeatDelay || (r.repeat = 0), r.immediateRender = !!r.immediateRender, new U(i, r, me(this, n), 1), this;
  }, t.call = function(i, r, n) {
    return ye(this, U.delayedCall(0, i, r), n);
  }, t.staggerTo = function(i, r, n, s, l, d, c) {
    return n.duration = r, n.stagger = n.stagger || s, n.onComplete = d, n.onCompleteParams = c, n.parent = this, new U(i, n, me(this, l)), this;
  }, t.staggerFrom = function(i, r, n, s, l, d, c) {
    return n.runBackwards = 1, kt(n).immediateRender = ee(n.immediateRender), this.staggerTo(i, r, n, s, l, d, c);
  }, t.staggerFromTo = function(i, r, n, s, l, d, c, u) {
    return s.startAt = n, kt(s).immediateRender = ee(s.immediateRender), this.staggerTo(i, r, s, l, d, c, u);
  }, t.render = function(i, r, n) {
    var s = this._time, l = this._dirty ? this.totalDuration() : this._tDur, d = this._dur, c = i <= 0 ? 0 : z(i), u = this._zTime < 0 != i < 0 && (this._initted || !d), p, m, g, h, f, b, y, _, v, x, C, A;
    if (this !== B && c > l && i >= 0 && (c = l), c !== this._tTime || n || u) {
      if (s !== this._time && d && (c += this._time - s, i += this._time - s), p = c, v = this._start, _ = this._ts, b = !_, u && (d || (s = this._zTime), (i || !r) && (this._zTime = i)), this._repeat) {
        if (C = this._yoyo, f = d + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(f * 100 + i, r, n);
        if (p = z(c % f), c === l ? (h = this._repeat, p = d) : (x = z(c / f), h = ~~x, h && h === x && (p = d, h--), p > d && (p = d)), x = ut(this._tTime, f), !s && this._tTime && x !== h && this._tTime - x * f - this._dur <= 0 && (x = h), C && h & 1 && (p = d - p, A = 1), h !== x && !this._lock) {
          var k = C && x & 1, S = k === (C && h & 1);
          if (h < x && (k = !k), s = k ? 0 : c % d ? d : c, this._lock = 1, this.render(s || (A ? 0 : z(h * f)), r, !d)._lock = 0, this._tTime = c, !r && this.parent && oe(this, "onRepeat"), this.vars.repeatRefresh && !A && (this.invalidate()._lock = 1, x = h), s && s !== this._time || b !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (d = this._dur, l = this._tDur, S && (this._lock = 2, s = k ? d : -1e-4, this.render(s, !0), this.vars.repeatRefresh && !A && this.invalidate()), this._lock = 0, !this._ts && !b)
            return this;
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (y = an(this, z(s), z(p)), y && (c -= p - (p = y._start))), this._tTime = c, this._time = p, this._act = !!_, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, s = 0), !s && c && d && !r && !x && (oe(this, "onStart"), this._tTime !== c))
        return this;
      if (p >= s && i >= 0)
        for (m = this._first; m; ) {
          if (g = m._next, (m._act || p >= m._start) && m._ts && y !== m) {
            if (m.parent !== this)
              return this.render(i, r, n);
            if (m.render(m._ts > 0 ? (p - m._start) * m._ts : (m._dirty ? m.totalDuration() : m._tDur) + (p - m._start) * m._ts, r, n), p !== this._time || !this._ts && !b) {
              y = 0, g && (c += this._zTime = -R);
              break;
            }
          }
          m = g;
        }
      else {
        m = this._last;
        for (var E = i < 0 ? i : p; m; ) {
          if (g = m._prev, (m._act || E <= m._end) && m._ts && y !== m) {
            if (m.parent !== this)
              return this.render(i, r, n);
            if (m.render(m._ts > 0 ? (E - m._start) * m._ts : (m._dirty ? m.totalDuration() : m._tDur) + (E - m._start) * m._ts, r, n || X && Wa(m)), p !== this._time || !this._ts && !b) {
              y = 0, g && (c += this._zTime = E ? -R : R);
              break;
            }
          }
          m = g;
        }
      }
      if (y && !r && (this.pause(), y.render(p >= s ? 0 : -R)._zTime = p >= s ? 1 : -1, this._ts))
        return this._start = v, aa(this), this.render(i, r, n);
      this._onUpdate && !r && oe(this, "onUpdate", !0), (c === l && this._tTime >= this.totalDuration() || !c && s) && (v === this._start || Math.abs(_) !== Math.abs(this._ts)) && (this._lock || ((i || !d) && (c === l && this._ts > 0 || !c && this._ts < 0) && Oe(this, 1), !r && !(i < 0 && !s) && (c || s || !l) && (oe(this, c === l && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(i, r) {
    var n = this;
    if (Te(r) || (r = me(this, r, i)), !(i instanceof Nt)) {
      if (Z(i))
        return i.forEach(function(s) {
          return n.add(s, r);
        }), this;
      if (j(i))
        return this.addLabel(i, r);
      if (H(i))
        i = U.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? ye(this, i, r) : this;
  }, t.getChildren = function(i, r, n, s) {
    i === void 0 && (i = !0), r === void 0 && (r = !0), n === void 0 && (n = !0), s === void 0 && (s = -ge);
    for (var l = [], d = this._first; d; )
      d._start >= s && (d instanceof U ? r && l.push(d) : (n && l.push(d), i && l.push.apply(l, d.getChildren(!0, r, n)))), d = d._next;
    return l;
  }, t.getById = function(i) {
    for (var r = this.getChildren(1, 1, 1), n = r.length; n--; )
      if (r[n].vars.id === i)
        return r[n];
  }, t.remove = function(i) {
    return j(i) ? this.removeLabel(i) : H(i) ? this.killTweensOf(i) : (i.parent === this && ta(this, i), i === this._recent && (this._recent = this._last), Qe(this));
  }, t.totalTime = function(i, r) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = z(se.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), o.prototype.totalTime.call(this, i, r), this._forcing = 0, this) : this._tTime;
  }, t.addLabel = function(i, r) {
    return this.labels[i] = me(this, r), this;
  }, t.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, t.addPause = function(i, r, n) {
    var s = U.delayedCall(0, r || It, n);
    return s.data = "isPause", this._hasPause = 1, ye(this, s, me(this, i));
  }, t.removePause = function(i) {
    var r = this._first;
    for (i = me(this, i); r; )
      r._start === i && r.data === "isPause" && Oe(r), r = r._next;
  }, t.killTweensOf = function(i, r, n) {
    for (var s = this.getTweensOf(i, n), l = s.length; l--; )
      Ie !== s[l] && s[l].kill(i, r);
    return this;
  }, t.getTweensOf = function(i, r) {
    for (var n = [], s = fe(i), l = this._first, d = Te(r), c; l; )
      l instanceof U ? Jr(l._targets, s) && (d ? (!Ie || l._initted && l._ts) && l.globalTime(0) <= r && l.globalTime(l.totalDuration()) > r : !r || l.isActive()) && n.push(l) : (c = l.getTweensOf(s, r)).length && n.push.apply(n, c), l = l._next;
    return n;
  }, t.tweenTo = function(i, r) {
    r = r || {};
    var n = this, s = me(n, i), l = r, d = l.startAt, c = l.onStart, u = l.onStartParams, p = l.immediateRender, m, g = U.to(n, ue({
      ease: r.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: s,
      overwrite: "auto",
      duration: r.duration || Math.abs((s - (d && "time" in d ? d.time : n._time)) / n.timeScale()) || R,
      onStart: function() {
        if (n.pause(), !m) {
          var f = r.duration || Math.abs((s - (d && "time" in d ? d.time : n._time)) / n.timeScale());
          g._dur !== f && pt(g, f, 0, 1).render(g._time, !0, !0), m = 1;
        }
        c && c.apply(g, u || []);
      }
    }, r));
    return p ? g.render(0) : g;
  }, t.tweenFromTo = function(i, r, n) {
    return this.tweenTo(r, ue({
      startAt: {
        time: me(this, i)
      }
    }, n));
  }, t.recent = function() {
    return this._recent;
  }, t.nextLabel = function(i) {
    return i === void 0 && (i = this._time), oi(this, me(this, i));
  }, t.previousLabel = function(i) {
    return i === void 0 && (i = this._time), oi(this, me(this, i), 1);
  }, t.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + R);
  }, t.shiftChildren = function(i, r, n) {
    n === void 0 && (n = 0);
    var s = this._first, l = this.labels, d;
    for (i = z(i); s; )
      s._start >= n && (s._start += i, s._end += i), s = s._next;
    if (r)
      for (d in l)
        l[d] >= n && (l[d] += i);
    return Qe(this);
  }, t.invalidate = function(i) {
    var r = this._first;
    for (this._lock = 0; r; )
      r.invalidate(i), r = r._next;
    return o.prototype.invalidate.call(this, i);
  }, t.clear = function(i) {
    i === void 0 && (i = !0);
    for (var r = this._first, n; r; )
      n = r._next, this.remove(r), r = n;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Qe(this);
  }, t.totalDuration = function(i) {
    var r = 0, n = this, s = n._last, l = ge, d, c, u;
    if (arguments.length)
      return n.timeScale((n._repeat < 0 ? n.duration() : n.totalDuration()) / (n.reversed() ? -i : i));
    if (n._dirty) {
      for (u = n.parent; s; )
        d = s._prev, s._dirty && s.totalDuration(), c = s._start, c > l && n._sort && s._ts && !n._lock ? (n._lock = 1, ye(n, s, c - s._delay, 1)._lock = 0) : l = c, c < 0 && s._ts && (r -= c, (!u && !n._dp || u && u.smoothChildTiming) && (n._start += z(c / n._ts), n._time -= c, n._tTime -= c), n.shiftChildren(-c, !1, -1 / 0), l = 0), s._end > r && s._ts && (r = s._end), s = d;
      pt(n, n === B && n._time > r ? n._time : r, 1, 1), n._dirty = 0;
    }
    return n._tDur;
  }, e.updateRoot = function(i) {
    if (B._ts && (Yi(B, Qt(i, B)), Ui = se.frame), se.frame >= ii) {
      ii += de.autoSleep || 120;
      var r = B._first;
      if ((!r || !r._ts) && de.autoSleep && se._listeners.length < 2) {
        for (; r && !r._ts; )
          r = r._next;
        r || se.sleep();
      }
    }
  }, e;
})(Nt);
ue($.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var yn = function(e, t, a, i, r, n, s) {
  var l = new ae(this._pt, e, t, 0, 1, br, null, r), d = 0, c = 0, u, p, m, g, h, f, b, y;
  for (l.b = a, l.e = i, a += "", i += "", (b = ~i.indexOf("random(")) && (i = Mt(i)), n && (y = [a, i], n(y, e, t), a = y[0], i = y[1]), p = a.match(ra) || []; u = ra.exec(i); )
    g = u[0], h = i.substring(d, u.index), m ? m = (m + 1) % 5 : h.substr(-5) === "rgba(" && (m = 1), g !== p[c++] && (f = parseFloat(p[c - 1]) || 0, l._pt = {
      _next: l._pt,
      p: h || c === 1 ? h : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: f,
      c: g.charAt(1) === "=" ? ot(f, g) - f : parseFloat(g) - f,
      m: m && m < 4 ? Math.round : 0
    }, d = ra.lastIndex);
  return l.c = d < i.length ? i.substring(d, i.length) : "", l.fp = s, (Fi.test(i) || b) && (l.e = 0), this._pt = l, l;
}, Ga = function(e, t, a, i, r, n, s, l, d, c) {
  H(i) && (i = i(r || 0, e, n));
  var u = e[t], p = a !== "get" ? a : H(u) ? d ? e[t.indexOf("set") || !H(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](d) : e[t]() : u, m = H(u) ? d ? kn : fr : Va, g;
  if (j(i) && (~i.indexOf("random(") && (i = Mt(i)), i.charAt(1) === "=" && (g = ot(p, i) + (K(p) || 0), (g || g === 0) && (i = g))), !c || p !== i || Ta)
    return !isNaN(p * i) && i !== "" ? (g = new ae(this._pt, e, t, +p || 0, i - (p || 0), typeof u == "boolean" ? Tn : wr, 0, m), d && (g.fp = d), s && g.modifier(s, this, e), this._pt = g) : (!u && !(t in e) && Ba(t, i), yn.call(this, e, t, p, i, m, l || de.stringFilter, d));
}, xn = function(e, t, a, i, r) {
  if (H(e) && (e = Tt(e, r, t, a, i)), !ve(e) || e.style && e.nodeType || Z(e) || Bi(e))
    return j(e) ? Tt(e, r, t, a, i) : e;
  var n = {}, s;
  for (s in e)
    n[s] = Tt(e[s], r, t, a, i);
  return n;
}, hr = function(e, t, a, i, r, n) {
  var s, l, d, c;
  if (ne[e] && (s = new ne[e]()).init(r, s.rawVars ? t[e] : xn(t[e], i, r, n, a), a, i, n) !== !1 && (a._pt = l = new ae(a._pt, r, e, 0, 1, s.render, s, 0, s.priority), a !== st))
    for (d = a._ptLookup[a._targets.indexOf(r)], c = s._props.length; c--; )
      d[s._props[c]] = l;
  return s;
}, Ie, Ta, Ua = function o(e, t, a) {
  var i = e.vars, r = i.ease, n = i.startAt, s = i.immediateRender, l = i.lazy, d = i.onUpdate, c = i.runBackwards, u = i.yoyoEase, p = i.keyframes, m = i.autoRevert, g = e._dur, h = e._startAt, f = e._targets, b = e.parent, y = b && b.data === "nested" ? b.vars.targets : f, _ = e._overwrite === "auto" && !Da, v = e.timeline, x = i.easeReverse || u, C, A, k, S, E, N, D, I, F, Y, V, W, pe;
  if (v && (!p || !r) && (r = "none"), e._ease = Ke(r, Et.ease), e._rEase = x && (Ke(x) || e._ease), e._from = !v && !!i.runBackwards, e._from && (e.ratio = 1), !v || p && !i.stagger) {
    if (I = f[0] ? Je(f[0]).harness : 0, W = I && i[I.prop], C = Jt(i, La), h && (h._zTime < 0 && h.progress(1), t < 0 && c && s && !m ? h.render(-1, !0) : h.revert(c && g ? Ut : jr), h._lazy = 0), n) {
      if (Oe(e._startAt = U.set(f, ue({
        data: "isStart",
        overwrite: !1,
        parent: b,
        immediateRender: !0,
        lazy: !h && ee(l),
        startAt: null,
        delay: 0,
        onUpdate: d && function() {
          return oe(e, "onUpdate");
        },
        stagger: 0
      }, n))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (X || !s && !m) && e._startAt.revert(Ut), s && g && t <= 0 && a <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (c && g && !h) {
      if (t && (s = !1), k = ue({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: s && !h && ee(l),
        immediateRender: s,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: b
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, C), W && (k[I.prop] = W), Oe(e._startAt = U.set(f, k)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (X ? e._startAt.revert(Ut) : e._startAt.render(-1, !0)), e._zTime = t, !s)
        o(e._startAt, R, R);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, l = g && ee(l) || l && !g, A = 0; A < f.length; A++) {
      if (E = f[A], D = E._gsap || Ha(f)[A]._gsap, e._ptLookup[A] = Y = {}, xa[D.id] && Ne.length && Xt(), V = y === f ? A : y.indexOf(E), I && (F = new I()).init(E, W || C, e, V, y) !== !1 && (e._pt = S = new ae(e._pt, E, F.name, 0, 1, F.render, F, 0, F.priority), F._props.forEach(function(et) {
        Y[et] = S;
      }), F.priority && (N = 1)), !I || W)
        for (k in C)
          ne[k] && (F = hr(k, C, e, V, E, y)) ? F.priority && (N = 1) : Y[k] = S = Ga.call(e, E, k, "get", C[k], V, y, 0, i.stringFilter);
      e._op && e._op[A] && e.kill(E, e._op[A]), _ && e._pt && (Ie = e, B.killTweensOf(E, Y, e.globalTime(t)), pe = !e.parent, Ie = 0), e._pt && l && (xa[D.id] = 1);
    }
    N && _r(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = d, e._initted = (!e._op || e._pt) && !pe, p && t <= 0 && v.render(ge, !0, !0);
}, vn = function(e, t, a, i, r, n, s, l) {
  var d = (e._pt && e._ptCache || (e._ptCache = {}))[t], c, u, p, m;
  if (!d)
    for (d = e._ptCache[t] = [], p = e._ptLookup, m = e._targets.length; m--; ) {
      if (c = p[m][t], c && c.d && c.d._pt)
        for (c = c.d._pt; c && c.p !== t && c.fp !== t; )
          c = c._next;
      if (!c)
        return Ta = 1, e.vars[t] = "+=0", Ua(e, s), Ta = 0, l ? Pt(t + " not eligible for reset. Try splitting into individual properties") : 1;
      d.push(c);
    }
  for (m = d.length; m--; )
    u = d[m], c = u._pt || u, c.s = (i || i === 0) && !r ? i : c.s + (i || 0) + n * c.c, c.c = a - c.s, u.e && (u.e = G(a) + K(u.e)), u.b && (u.b = c.s + K(u.b));
}, An = function(e, t) {
  var a = e[0] ? Je(e[0]).harness : 0, i = a && a.aliases, r, n, s, l;
  if (!i)
    return t;
  r = ct({}, t);
  for (n in i)
    if (n in r)
      for (l = i[n].split(","), s = l.length; s--; )
        r[l[s]] = r[n];
  return r;
}, Sn = function(e, t, a, i) {
  var r = t.ease || i || "power1.inOut", n, s;
  if (Z(t))
    s = a[e] || (a[e] = []), t.forEach(function(l, d) {
      return s.push({
        t: d / (t.length - 1) * 100,
        v: l,
        e: r
      });
    });
  else
    for (n in t)
      s = a[n] || (a[n] = []), n === "ease" || s.push({
        t: parseFloat(e),
        v: t[n],
        e: r
      });
}, Tt = function(e, t, a, i, r) {
  return H(e) ? e.call(t, a, i, r) : j(e) && ~e.indexOf("random(") ? Mt(e) : e;
}, mr = Fa + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", gr = {};
te(mr + ",id,stagger,delay,duration,paused,scrollTrigger", function(o) {
  return gr[o] = 1;
});
var U = /* @__PURE__ */ (function(o) {
  qi(e, o);
  function e(a, i, r, n) {
    var s;
    typeof i == "number" && (r.duration = i, i = r, r = null), s = o.call(this, n ? i : kt(i)) || this;
    var l = s.vars, d = l.duration, c = l.delay, u = l.immediateRender, p = l.stagger, m = l.overwrite, g = l.keyframes, h = l.defaults, f = l.scrollTrigger, b = i.parent || B, y = (Z(a) || Bi(a) ? Te(a[0]) : "length" in i) ? [a] : fe(a), _, v, x, C, A, k, S, E;
    if (s._targets = y.length ? Ha(y) : Pt("GSAP target " + a + " not found. https://gsap.com", !de.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = m, g || p || zt(d) || zt(c)) {
      i = s.vars;
      var N = i.easeReverse || i.yoyoEase;
      if (_ = s.timeline = new $({
        data: "nested",
        defaults: h || {},
        targets: b && b.data === "nested" ? b.vars.targets : y
      }), _.kill(), _.parent = _._dp = ke(s), _._start = 0, p || zt(d) || zt(c)) {
        if (C = y.length, S = p && tr(p), ve(p))
          for (A in p)
            ~mr.indexOf(A) && (E || (E = {}), E[A] = p[A]);
        for (v = 0; v < C; v++)
          x = Jt(i, gr), x.stagger = 0, N && (x.easeReverse = N), E && ct(x, E), k = y[v], x.duration = +Tt(d, ke(s), v, k, y), x.delay = (+Tt(c, ke(s), v, k, y) || 0) - s._delay, !p && C === 1 && x.delay && (s._delay = c = x.delay, s._start += c, x.delay = 0), _.to(k, x, S ? S(v, k, y) : 0), _._ease = P.none;
        _.duration() ? d = c = 0 : s.timeline = 0;
      } else if (g) {
        kt(ue(_.vars.defaults, {
          ease: "none"
        })), _._ease = Ke(g.ease || i.ease || "none");
        var D = 0, I, F, Y;
        if (Z(g))
          g.forEach(function(V) {
            return _.to(y, V, ">");
          }), _.duration();
        else {
          x = {};
          for (A in g)
            A === "ease" || A === "easeEach" || Sn(A, g[A], x, g.easeEach);
          for (A in x)
            for (I = x[A].sort(function(V, W) {
              return V.t - W.t;
            }), D = 0, v = 0; v < I.length; v++)
              F = I[v], Y = {
                ease: F.e,
                duration: (F.t - (v ? I[v - 1].t : 0)) / 100 * d
              }, Y[A] = F.v, _.to(y, Y, D), D += Y.duration;
          _.duration() < d && _.to({}, {
            duration: d - _.duration()
          });
        }
      }
      d || s.duration(d = _.duration());
    } else
      s.timeline = 0;
    return m === !0 && !Da && (Ie = ke(s), B.killTweensOf(y), Ie = 0), ye(b, ke(s), r), i.reversed && s.reverse(), i.paused && s.paused(!0), (u || !d && !g && s._start === z(b._time) && ee(u) && $r(ke(s)) && b.data !== "nested") && (s._tTime = -R, s.render(Math.max(0, -c) || 0)), f && Ki(ke(s), f), s;
  }
  var t = e.prototype;
  return t.render = function(i, r, n) {
    var s = this._time, l = this._tDur, d = this._dur, c = i < 0, u = i > l - R && !c ? l : i < R ? 0 : i, p, m, g, h, f, b, y, _;
    if (!d)
      tn(this, i, r, n);
    else if (u !== this._tTime || !i || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c || this._lazy) {
      if (p = u, _ = this.timeline, this._repeat) {
        if (h = d + this._rDelay, this._repeat < -1 && c)
          return this.totalTime(h * 100 + i, r, n);
        if (p = z(u % h), u === l ? (g = this._repeat, p = d) : (f = z(u / h), g = ~~f, g && g === f ? (p = d, g--) : p > d && (p = d)), b = this._yoyo && g & 1, b && (p = d - p), f = ut(this._tTime, h), p === s && !n && this._initted && g === f)
          return this._tTime = u, this;
        g !== f && this.vars.repeatRefresh && !b && !this._lock && p !== h && this._initted && (this._lock = n = 1, this.render(z(h * g), !0).invalidate()._lock = 0);
      }
      if (!this._initted) {
        if (Zi(this, c ? i : p, n, r, u))
          return this._tTime = 0, this;
        if (s !== this._time && !(n && this.vars.repeatRefresh && g !== f))
          return this;
        if (d !== this._dur)
          return this.render(i, r, n);
      }
      if (this._rEase) {
        var v = p < s;
        if (v !== this._inv) {
          var x = v ? s : d - s;
          this._inv = v, this._from && (this.ratio = 1 - this.ratio), this._invRatio = this.ratio, this._invTime = s, this._invRecip = x ? (v ? -1 : 1) / x : 0, this._invScale = v ? -this.ratio : 1 - this.ratio, this._invEase = v ? this._rEase : this._ease;
        }
        this.ratio = y = this._invRatio + this._invScale * this._invEase((p - this._invTime) * this._invRecip);
      } else
        this.ratio = y = this._ease(p / d);
      if (this._from && (this.ratio = y = 1 - y), this._tTime = u, this._time = p, !this._act && this._ts && (this._act = 1, this._lazy = 0), !s && u && !r && !f && (oe(this, "onStart"), this._tTime !== u))
        return this;
      for (m = this._pt; m; )
        m.r(y, m.d), m = m._next;
      _ && _.render(i < 0 ? i : _._dur * _._ease(p / this._dur), r, n) || this._startAt && (this._zTime = i), this._onUpdate && !r && (c && va(this, i, r, n), oe(this, "onUpdate")), this._repeat && g !== f && this.vars.onRepeat && !r && this.parent && oe(this, "onRepeat"), (u === this._tDur || !u) && this._tTime === u && (c && !this._onUpdate && va(this, i, !0, !0), (i || !d) && (u === this._tDur && this._ts > 0 || !u && this._ts < 0) && Oe(this, 1), !r && !(c && !s) && (u || s || b) && (oe(this, u === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), o.prototype.invalidate.call(this, i);
  }, t.resetTo = function(i, r, n, s, l) {
    Rt || se.wake(), this._ts || this.play();
    var d = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
    return this._initted || Ua(this, d), c = this._ease(d / this._dur), vn(this, i, r, n, s, c, d, l) ? this.resetTo(i, r, n, s, 1) : (ia(this, 0), this.parent || Ji(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(i, r) {
    if (r === void 0 && (r = "all"), !i && (!r || r === "all"))
      return this._lazy = this._pt = 0, this.parent ? xt(this) : this.scrollTrigger && this.scrollTrigger.kill(!!X), this;
    if (this.timeline) {
      var n = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, r, Ie && Ie.vars.overwrite !== !0)._first || xt(this), this.parent && n !== this.timeline.totalDuration() && pt(this, this._dur * this.timeline._tDur / n, 0, 1), this;
    }
    var s = this._targets, l = i ? fe(i) : s, d = this._ptLookup, c = this._pt, u, p, m, g, h, f, b;
    if ((!r || r === "all") && Kr(s, l))
      return r === "all" && (this._pt = 0), xt(this);
    for (u = this._op = this._op || [], r !== "all" && (j(r) && (h = {}, te(r, function(y) {
      return h[y] = 1;
    }), r = h), r = An(s, r)), b = s.length; b--; )
      if (~l.indexOf(s[b])) {
        p = d[b], r === "all" ? (u[b] = r, g = p, m = {}) : (m = u[b] = u[b] || {}, g = r);
        for (h in g)
          f = p && p[h], f && ((!("kill" in f.d) || f.d.kill(h) === !0) && ta(this, f, "_pt"), delete p[h]), m !== "all" && (m[h] = 1);
      }
    return this._initted && !this._pt && c && xt(this), this;
  }, e.to = function(i, r) {
    return new e(i, r, arguments[2]);
  }, e.from = function(i, r) {
    return Ct(1, arguments);
  }, e.delayedCall = function(i, r, n, s) {
    return new e(r, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: r,
      onReverseComplete: r,
      onCompleteParams: n,
      onReverseCompleteParams: n,
      callbackScope: s
    });
  }, e.fromTo = function(i, r, n) {
    return Ct(2, arguments);
  }, e.set = function(i, r) {
    return r.duration = 0, r.repeatDelay || (r.repeat = 0), new e(i, r);
  }, e.killTweensOf = function(i, r, n) {
    return B.killTweensOf(i, r, n);
  }, e;
})(Nt);
ue(U.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
te("staggerTo,staggerFrom,staggerFromTo", function(o) {
  U[o] = function() {
    var e = new $(), t = Sa.call(arguments, 0);
    return t.splice(o === "staggerFromTo" ? 5 : 4, 0, 0), e[o].apply(e, t);
  };
});
var Va = function(e, t, a) {
  return e[t] = a;
}, fr = function(e, t, a) {
  return e[t](a);
}, kn = function(e, t, a, i) {
  return e[t](i.fp, a);
}, Cn = function(e, t, a) {
  return e.setAttribute(t, a);
}, Ya = function(e, t) {
  return H(e[t]) ? fr : Oa(e[t]) && e.setAttribute ? Cn : Va;
}, wr = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, Tn = function(e, t) {
  return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, br = function(e, t) {
  var a = t._pt, i = "";
  if (!e && t.b)
    i = t.b;
  else if (e === 1 && t.e)
    i = t.e;
  else {
    for (; a; )
      i = a.p + (a.m ? a.m(a.s + a.c * e) : Math.round((a.s + a.c * e) * 1e4) / 1e4) + i, a = a._next;
    i += t.c;
  }
  t.set(t.t, t.p, i, t);
}, ja = function(e, t) {
  for (var a = t._pt; a; )
    a.r(e, a.d), a = a._next;
}, En = function(e, t, a, i) {
  for (var r = this._pt, n; r; )
    n = r._next, r.p === i && r.modifier(e, t, a), r = n;
}, Pn = function(e) {
  for (var t = this._pt, a, i; t; )
    i = t._next, t.p === e && !t.op || t.op === e ? ta(this, t, "_pt") : t.dep || (a = 1), t = i;
  return !a;
}, In = function(e, t, a, i) {
  i.mSet(e, t, i.m.call(i.tween, a, i.mt), i);
}, _r = function(e) {
  for (var t = e._pt, a, i, r, n; t; ) {
    for (a = t._next, i = r; i && i.pr > t.pr; )
      i = i._next;
    (t._prev = i ? i._prev : n) ? t._prev._next = t : r = t, (t._next = i) ? i._prev = t : n = t, t = a;
  }
  e._pt = r;
}, ae = /* @__PURE__ */ (function() {
  function o(t, a, i, r, n, s, l, d, c) {
    this.t = a, this.s = r, this.c = n, this.p = i, this.r = s || wr, this.d = l || this, this.set = d || Va, this.pr = c || 0, this._next = t, t && (t._prev = this);
  }
  var e = o.prototype;
  return e.modifier = function(a, i, r) {
    this.mSet = this.mSet || this.set, this.set = In, this.m = a, this.mt = r, this.tween = i;
  }, o;
})();
te(Fa + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(o) {
  return La[o] = 1;
});
ce.TweenMax = ce.TweenLite = U;
ce.TimelineLite = ce.TimelineMax = $;
B = new $({
  sortChildren: !1,
  defaults: Et,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
de.stringFilter = cr;
var Ze = [], Yt = {}, Mn = [], di = 0, Rn = 0, da = function(e) {
  return (Yt[e] || Mn).map(function(t) {
    return t();
  });
}, Ea = function() {
  var e = Date.now(), t = [];
  e - di > 2 && (da("matchMediaInit"), Ze.forEach(function(a) {
    var i = a.queries, r = a.conditions, n, s, l, d;
    for (s in i)
      n = _e.matchMedia(i[s]).matches, n && (l = 1), n !== r[s] && (r[s] = n, d = 1);
    d && (a.revert(), l && t.push(a));
  }), da("matchMediaRevert"), t.forEach(function(a) {
    return a.onMatch(a, function(i) {
      return a.add(null, i);
    });
  }), di = e, da("matchMedia"));
}, yr = /* @__PURE__ */ (function() {
  function o(t, a) {
    this.selector = a && ka(a), this.data = [], this._r = [], this.isReverted = !1, this.id = Rn++, t && this.add(t);
  }
  var e = o.prototype;
  return e.add = function(a, i, r) {
    H(a) && (r = i, i = a, a = H);
    var n = this, s = function() {
      var d = q, c = n.selector, u;
      return d && d !== n && d.data.push(n), r && (n.selector = ka(r)), q = n, u = i.apply(n, arguments), H(u) && n._r.push(u), q = d, n.selector = c, n.isReverted = !1, u;
    };
    return n.last = s, a === H ? s(n, function(l) {
      return n.add(null, l);
    }) : a ? n[a] = s : s;
  }, e.ignore = function(a) {
    var i = q;
    q = null, a(this), q = i;
  }, e.getTweens = function() {
    var a = [];
    return this.data.forEach(function(i) {
      return i instanceof o ? a.push.apply(a, i.getTweens()) : i instanceof U && !(i.parent && i.parent.data === "nested") && a.push(i);
    }), a;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(a, i) {
    var r = this;
    if (a ? (function() {
      for (var s = r.getTweens(), l = r.data.length, d; l--; )
        d = r.data[l], d.data === "isFlip" && (d.revert(), d.getChildren(!0, !0, !1).forEach(function(c) {
          return s.splice(s.indexOf(c), 1);
        }));
      for (s.map(function(c) {
        return {
          g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0,
          t: c
        };
      }).sort(function(c, u) {
        return u.g - c.g || -1 / 0;
      }).forEach(function(c) {
        return c.t.revert(a);
      }), l = r.data.length; l--; )
        d = r.data[l], d instanceof $ ? d.data !== "nested" && (d.scrollTrigger && d.scrollTrigger.revert(), d.kill()) : !(d instanceof U) && d.revert && d.revert(a);
      r._r.forEach(function(c) {
        return c(a, r);
      }), r.isReverted = !0;
    })() : this.data.forEach(function(s) {
      return s.kill && s.kill();
    }), this.clear(), i)
      for (var n = Ze.length; n--; )
        Ze[n].id === this.id && Ze.splice(n, 1);
  }, e.revert = function(a) {
    this.kill(a || {});
  }, o;
})(), Nn = /* @__PURE__ */ (function() {
  function o(t) {
    this.contexts = [], this.scope = t, q && q.data.push(this);
  }
  var e = o.prototype;
  return e.add = function(a, i, r) {
    ve(a) || (a = {
      matches: a
    });
    var n = new yr(0, r || this.scope), s = n.conditions = {}, l, d, c;
    q && !n.selector && (n.selector = q.selector), this.contexts.push(n), i = n.add("onMatch", i), n.queries = a;
    for (d in a)
      d === "all" ? c = 1 : (l = _e.matchMedia(a[d]), l && (Ze.indexOf(n) < 0 && Ze.push(n), (s[d] = l.matches) && (c = 1), l.addListener ? l.addListener(Ea) : l.addEventListener("change", Ea)));
    return c && i(n, function(u) {
      return n.add(null, u);
    }), this;
  }, e.revert = function(a) {
    this.kill(a || {});
  }, e.kill = function(a) {
    this.contexts.forEach(function(i) {
      return i.kill(a, !0);
    });
  }, o;
})(), Kt = {
  registerPlugin: function() {
    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
      t[a] = arguments[a];
    t.forEach(function(i) {
      return or(i);
    });
  },
  timeline: function(e) {
    return new $(e);
  },
  getTweensOf: function(e, t) {
    return B.getTweensOf(e, t);
  },
  getProperty: function(e, t, a, i) {
    j(e) && (e = fe(e)[0]);
    var r = Je(e || {}).get, n = a ? Xi : ji;
    return a === "native" && (a = ""), e && (t ? n((ne[t] && ne[t].get || r)(e, t, a, i)) : function(s, l, d) {
      return n((ne[s] && ne[s].get || r)(e, s, l, d));
    });
  },
  quickSetter: function(e, t, a) {
    if (e = fe(e), e.length > 1) {
      var i = e.map(function(c) {
        return re.quickSetter(c, t, a);
      }), r = i.length;
      return function(c) {
        for (var u = r; u--; )
          i[u](c);
      };
    }
    e = e[0] || {};
    var n = ne[t], s = Je(e), l = s.harness && (s.harness.aliases || {})[t] || t, d = n ? function(c) {
      var u = new n();
      st._pt = 0, u.init(e, a ? c + a : c, st, 0, [e]), u.render(1, u), st._pt && ja(1, st);
    } : s.set(e, l);
    return n ? d : function(c) {
      return d(e, l, a ? c + a : c, s, 1);
    };
  },
  quickTo: function(e, t, a) {
    var i, r = re.to(e, ue((i = {}, i[t] = "+=0.1", i.paused = !0, i.stagger = 0, i), a || {})), n = function(l, d, c) {
      return r.resetTo(t, l, d, c);
    };
    return n.tween = r, n;
  },
  isTweening: function(e) {
    return B.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = Ke(e.ease, Et.ease)), ri(Et, e || {});
  },
  config: function(e) {
    return ri(de, e || {});
  },
  registerEffect: function(e) {
    var t = e.name, a = e.effect, i = e.plugins, r = e.defaults, n = e.extendTimeline;
    (i || "").split(",").forEach(function(s) {
      return s && !ne[s] && !ce[s] && Pt(t + " effect requires " + s + " plugin.");
    }), na[t] = function(s, l, d) {
      return a(fe(s), ue(l || {}, r), d);
    }, n && ($.prototype[t] = function(s, l, d) {
      return this.add(na[t](s, ve(l) ? l : (d = l) && {}, this), d);
    });
  },
  registerEase: function(e, t) {
    P[e] = Ke(t);
  },
  parseEase: function(e, t) {
    return arguments.length ? Ke(e, t) : P;
  },
  getById: function(e) {
    return B.getById(e);
  },
  exportRoot: function(e, t) {
    e === void 0 && (e = {});
    var a = new $(e), i, r;
    for (a.smoothChildTiming = ee(e.smoothChildTiming), B.remove(a), a._dp = 0, a._time = a._tTime = B._time, i = B._first; i; )
      r = i._next, (t || !(!i._dur && i instanceof U && i.vars.onComplete === i._targets[0])) && ye(a, i, i._start - i._delay), i = r;
    return ye(B, a, 0), a;
  },
  context: function(e, t) {
    return e ? new yr(e, t) : q;
  },
  matchMedia: function(e) {
    return new Nn(e);
  },
  matchMediaRefresh: function() {
    return Ze.forEach(function(e) {
      var t = e.conditions, a, i;
      for (i in t)
        t[i] && (t[i] = !1, a = 1);
      a && e.revert();
    }) || Ea();
  },
  addEventListener: function(e, t) {
    var a = Yt[e] || (Yt[e] = []);
    ~a.indexOf(t) || a.push(t);
  },
  removeEventListener: function(e, t) {
    var a = Yt[e], i = a && a.indexOf(t);
    i >= 0 && a.splice(i, 1);
  },
  utils: {
    wrap: cn,
    wrapYoyo: un,
    distribute: tr,
    random: ir,
    snap: ar,
    normalize: dn,
    getUnit: K,
    clamp: nn,
    splitColor: lr,
    toArray: fe,
    selector: ka,
    mapRange: nr,
    pipe: on,
    unitize: ln,
    interpolate: pn,
    shuffle: er
  },
  install: Wi,
  effects: na,
  ticker: se,
  updateRoot: $.updateRoot,
  plugins: ne,
  globalTimeline: B,
  core: {
    PropTween: ae,
    globals: Gi,
    Tween: U,
    Timeline: $,
    Animation: Nt,
    getCache: Je,
    _removeLinkedListItem: ta,
    reverting: function() {
      return X;
    },
    context: function(e) {
      return e && q && (q.data.push(e), e._ctx = q), q;
    },
    suppressOverwrites: function(e) {
      return Da = e;
    }
  }
};
te("to,from,fromTo,delayedCall,set,killTweensOf", function(o) {
  return Kt[o] = U[o];
});
se.add($.updateRoot);
st = Kt.to({}, {
  duration: 0
});
var Dn = function(e, t) {
  for (var a = e._pt; a && a.p !== t && a.op !== t && a.fp !== t; )
    a = a._next;
  return a;
}, On = function(e, t) {
  var a = e._targets, i, r, n;
  for (i in t)
    for (r = a.length; r--; )
      n = e._ptLookup[r][i], n && (n = n.d) && (n._pt && (n = Dn(n, i)), n && n.modifier && n.modifier(t[i], e, a[r], i));
}, ca = function(e, t) {
  return {
    name: e,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, r, n) {
      n._onInit = function(s) {
        var l, d;
        if (j(r) && (l = {}, te(r, function(c) {
          return l[c] = 1;
        }), r = l), t) {
          l = {};
          for (d in r)
            l[d] = t(r[d]);
          r = l;
        }
        On(s, r);
      };
    }
  };
}, re = Kt.registerPlugin({
  name: "attr",
  init: function(e, t, a, i, r) {
    var n, s, l;
    this.tween = a;
    for (n in t)
      l = e.getAttribute(n) || "", s = this.add(e, "setAttribute", (l || 0) + "", t[n], i, r, 0, 0, n), s.op = n, s.b = l, this._props.push(n);
  },
  render: function(e, t) {
    for (var a = t._pt; a; )
      X ? a.set(a.t, a.p, a.b, a) : a.r(e, a.d), a = a._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(e, t) {
    for (var a = t.length; a--; )
      this.add(e, a, e[a] || 0, t[a], 0, 0, 0, 0, 0, 1);
  }
}, ca("roundProps", Ca), ca("modifiers"), ca("snap", ar)) || Kt;
U.version = $.version = re.version = "3.15.0";
Hi = 1;
qa() && ht();
P.Power0;
P.Power1;
P.Power2;
P.Power3;
P.Power4;
P.Linear;
P.Quad;
P.Cubic;
P.Quart;
P.Quint;
P.Strong;
P.Elastic;
P.Back;
P.SteppedEase;
P.Bounce;
P.Sine;
P.Expo;
P.Circ;
var ci, Me, lt, Xa, je, ui, Ja, qn = function() {
  return typeof window < "u";
}, Ee = {}, Ve = 180 / Math.PI, dt = Math.PI / 180, tt = Math.atan2, pi = 1e8, Qa = /([A-Z])/g, zn = /(left|right|width|margin|padding|x)/i, Bn = /[\s,\(]\S/, xe = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Pa = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, Ln = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, Fn = function(e, t) {
  return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, Hn = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, Wn = function(e, t) {
  var a = t.s + t.c * e;
  t.set(t.t, t.p, ~~(a + (a < 0 ? -0.5 : 0.5)) + t.u, t);
}, xr = function(e, t) {
  return t.set(t.t, t.p, e ? t.e : t.b, t);
}, vr = function(e, t) {
  return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
}, Gn = function(e, t, a) {
  return e.style[t] = a;
}, Un = function(e, t, a) {
  return e.style.setProperty(t, a);
}, Vn = function(e, t, a) {
  return e._gsap[t] = a;
}, Yn = function(e, t, a) {
  return e._gsap.scaleX = e._gsap.scaleY = a;
}, jn = function(e, t, a, i, r) {
  var n = e._gsap;
  n.scaleX = n.scaleY = a, n.renderTransform(r, n);
}, Xn = function(e, t, a, i, r) {
  var n = e._gsap;
  n[t] = a, n.renderTransform(r, n);
}, L = "transform", ie = L + "Origin", Jn = function o(e, t) {
  var a = this, i = this.target, r = i.style, n = i._gsap;
  if (e in Ee && r) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = xe[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(s) {
        return a.tfm[s] = Ce(i, s);
      }) : this.tfm[e] = n.x ? n[e] : Ce(i, e), e === ie && (this.tfm.zOrigin = n.zOrigin);
    else
      return xe.transform.split(",").forEach(function(s) {
        return o.call(a, s, t);
      });
    if (this.props.indexOf(L) >= 0)
      return;
    n.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(ie, t, "")), e = L;
  }
  (r || t) && this.props.push(e, t, r[e]);
}, Ar = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, Qn = function() {
  var e = this.props, t = this.target, a = t.style, i = t._gsap, r, n;
  for (r = 0; r < e.length; r += 3)
    e[r + 1] ? e[r + 1] === 2 ? t[e[r]](e[r + 2]) : t[e[r]] = e[r + 2] : e[r + 2] ? a[e[r]] = e[r + 2] : a.removeProperty(e[r].substr(0, 2) === "--" ? e[r] : e[r].replace(Qa, "-$1").toLowerCase());
  if (this.tfm) {
    for (n in this.tfm)
      i[n] = this.tfm[n];
    i.svg && (i.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), r = Ja(), (!r || !r.isStart) && !a[L] && (Ar(a), i.zOrigin && a[ie] && (a[ie] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, Sr = function(e, t) {
  var a = {
    target: e,
    props: [],
    revert: Qn,
    save: Jn
  };
  return e._gsap || re.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(i) {
    return a.save(i);
  }), a;
}, kr, Ia = function(e, t) {
  var a = Me.createElementNS ? Me.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Me.createElement(e);
  return a && a.style ? a : Me.createElement(e);
}, le = function o(e, t, a) {
  var i = getComputedStyle(e);
  return i[t] || i.getPropertyValue(t.replace(Qa, "-$1").toLowerCase()) || i.getPropertyValue(t) || !a && o(e, mt(t) || t, 1) || "";
}, hi = "O,Moz,ms,Ms,Webkit".split(","), mt = function(e, t, a) {
  var i = t || je, r = i.style, n = 5;
  if (e in r && !a)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); n-- && !(hi[n] + e in r); )
    ;
  return n < 0 ? null : (n === 3 ? "ms" : n >= 0 ? hi[n] : "") + e;
}, Ma = function() {
  qn() && window.document && (ci = window, Me = ci.document, lt = Me.documentElement, je = Ia("div") || {
    style: {}
  }, Ia("div"), L = mt(L), ie = L + "Origin", je.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", kr = !!mt("perspective"), Ja = re.core.reverting, Xa = 1);
}, mi = function(e) {
  var t = e.ownerSVGElement, a = Ia("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = e.cloneNode(!0), r;
  i.style.display = "block", a.appendChild(i), lt.appendChild(a);
  try {
    r = i.getBBox();
  } catch {
  }
  return a.removeChild(i), lt.removeChild(a), r;
}, gi = function(e, t) {
  for (var a = t.length; a--; )
    if (e.hasAttribute(t[a]))
      return e.getAttribute(t[a]);
}, Cr = function(e) {
  var t, a;
  try {
    t = e.getBBox();
  } catch {
    t = mi(e), a = 1;
  }
  return t && (t.width || t.height) || a || (t = mi(e)), t && !t.width && !t.x && !t.y ? {
    x: +gi(e, ["x", "cx", "x1"]) || 0,
    y: +gi(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : t;
}, Tr = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Cr(e));
}, qe = function(e, t) {
  if (t) {
    var a = e.style, i;
    t in Ee && t !== ie && (t = L), a.removeProperty ? (i = t.substr(0, 2), (i === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), a.removeProperty(i === "--" ? t : t.replace(Qa, "-$1").toLowerCase())) : a.removeAttribute(t);
  }
}, Re = function(e, t, a, i, r, n) {
  var s = new ae(e._pt, t, a, 0, 1, n ? vr : xr);
  return e._pt = s, s.b = i, s.e = r, e._props.push(a), s;
}, fi = {
  deg: 1,
  rad: 1,
  turn: 1
}, Kn = {
  grid: 1,
  flex: 1
}, ze = function o(e, t, a, i) {
  var r = parseFloat(a) || 0, n = (a + "").trim().substr((r + "").length) || "px", s = je.style, l = zn.test(t), d = e.tagName.toLowerCase() === "svg", c = (d ? "client" : "offset") + (l ? "Width" : "Height"), u = 100, p = i === "px", m = i === "%", g, h, f, b;
  if (i === n || !r || fi[i] || fi[n])
    return r;
  if (n !== "px" && !p && (r = o(e, t, a, "px")), b = e.getCTM && Tr(e), (m || n === "%") && (Ee[t] || ~t.indexOf("adius")))
    return g = b ? e.getBBox()[l ? "width" : "height"] : e[c], G(m ? r / g * u : r / 100 * g);
  if (s[l ? "width" : "height"] = u + (p ? n : i), h = i !== "rem" && ~t.indexOf("adius") || i === "em" && e.appendChild && !d ? e : e.parentNode, b && (h = (e.ownerSVGElement || {}).parentNode), (!h || h === Me || !h.appendChild) && (h = Me.body), f = h._gsap, f && m && f.width && l && f.time === se.time && !f.uncache)
    return G(r / f.width * u);
  if (m && (t === "height" || t === "width")) {
    var y = e.style[t];
    e.style[t] = u + i, g = e[c], y ? e.style[t] = y : qe(e, t);
  } else
    (m || n === "%") && !Kn[le(h, "display")] && (s.position = le(e, "position")), h === e && (s.position = "static"), h.appendChild(je), g = je[c], h.removeChild(je), s.position = "absolute";
  return l && m && (f = Je(h), f.time = se.time, f.width = h[c]), G(p ? g * r / u : g && r ? u / g * r : 0);
}, Ce = function(e, t, a, i) {
  var r;
  return Xa || Ma(), t in xe && t !== "transform" && (t = xe[t], ~t.indexOf(",") && (t = t.split(",")[0])), Ee[t] && t !== "transform" ? (r = Ot(e, i), r = t !== "transformOrigin" ? r[t] : r.svg ? r.origin : $t(le(e, ie)) + " " + r.zOrigin + "px") : (r = e.style[t], (!r || r === "auto" || i || ~(r + "").indexOf("calc(")) && (r = Zt[t] && Zt[t](e, t, a) || le(e, t) || Vi(e, t) || (t === "opacity" ? 1 : 0))), a && !~(r + "").trim().indexOf(" ") ? ze(e, t, r, a) + a : r;
}, Zn = function(e, t, a, i) {
  if (!a || a === "none") {
    var r = mt(t, e, 1), n = r && le(e, r, 1);
    n && n !== a ? (t = r, a = n) : t === "borderColor" && (a = le(e, "borderTopColor"));
  }
  var s = new ae(this._pt, e.style, t, 0, 1, br), l = 0, d = 0, c, u, p, m, g, h, f, b, y, _, v, x;
  if (s.b = a, s.e = i, a += "", i += "", i.substring(0, 6) === "var(--" && (i = le(e, i.substring(4, i.indexOf(")")))), i === "auto" && (h = e.style[t], e.style[t] = i, i = le(e, t) || i, h ? e.style[t] = h : qe(e, t)), c = [a, i], cr(c), a = c[0], i = c[1], p = a.match(nt) || [], x = i.match(nt) || [], x.length) {
    for (; u = nt.exec(i); )
      f = u[0], y = i.substring(l, u.index), g ? g = (g + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (g = 1), f !== (h = p[d++] || "") && (m = parseFloat(h) || 0, v = h.substr((m + "").length), f.charAt(1) === "=" && (f = ot(m, f) + v), b = parseFloat(f), _ = f.substr((b + "").length), l = nt.lastIndex - _.length, _ || (_ = _ || de.units[t] || v, l === i.length && (i += _, s.e += _)), v !== _ && (m = ze(e, t, h, _) || 0), s._pt = {
        _next: s._pt,
        p: y || d === 1 ? y : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: m,
        c: b - m,
        m: g && g < 4 || t === "zIndex" ? Math.round : 0
      });
    s.c = l < i.length ? i.substring(l, i.length) : "";
  } else
    s.r = t === "display" && i === "none" ? vr : xr;
  return Fi.test(i) && (s.e = 0), this._pt = s, s;
}, wi = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, $n = function(e) {
  var t = e.split(" "), a = t[0], i = t[1] || "50%";
  return (a === "top" || a === "bottom" || i === "left" || i === "right") && (e = a, a = i, i = e), t[0] = wi[a] || a, t[1] = wi[i] || i, t.join(" ");
}, es = function(e, t) {
  if (t.tween && t.tween._time === t.tween._dur) {
    var a = t.t, i = a.style, r = t.u, n = a._gsap, s, l, d;
    if (r === "all" || r === !0)
      i.cssText = "", l = 1;
    else
      for (r = r.split(","), d = r.length; --d > -1; )
        s = r[d], Ee[s] && (l = 1, s = s === "transformOrigin" ? ie : L), qe(a, s);
    l && (qe(a, L), n && (n.svg && a.removeAttribute("transform"), i.scale = i.rotate = i.translate = "none", Ot(a, 1), n.uncache = 1, Ar(i)));
  }
}, Zt = {
  clearProps: function(e, t, a, i, r) {
    if (r.data !== "isFromStart") {
      var n = e._pt = new ae(e._pt, t, a, 0, 0, es);
      return n.u = i, n.pr = -10, n.tween = r, e._props.push(a), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, Dt = [1, 0, 0, 1, 0, 0], Er = {}, Pr = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, bi = function(e) {
  var t = le(e, L);
  return Pr(t) ? Dt : t.substr(7).match(Li).map(G);
}, Ka = function(e, t) {
  var a = e._gsap || Je(e), i = e.style, r = bi(e), n, s, l, d;
  return a.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, r = [l.a, l.b, l.c, l.d, l.e, l.f], r.join(",") === "1,0,0,1,0,0" ? Dt : r) : (r === Dt && !e.offsetParent && e !== lt && !a.svg && (l = i.display, i.display = "block", n = e.parentNode, (!n || !e.offsetParent && !e.getBoundingClientRect().width) && (d = 1, s = e.nextElementSibling, lt.appendChild(e)), r = bi(e), l ? i.display = l : qe(e, "display"), d && (s ? n.insertBefore(e, s) : n ? n.appendChild(e) : lt.removeChild(e))), t && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r);
}, Ra = function(e, t, a, i, r, n) {
  var s = e._gsap, l = r || Ka(e, !0), d = s.xOrigin || 0, c = s.yOrigin || 0, u = s.xOffset || 0, p = s.yOffset || 0, m = l[0], g = l[1], h = l[2], f = l[3], b = l[4], y = l[5], _ = t.split(" "), v = parseFloat(_[0]) || 0, x = parseFloat(_[1]) || 0, C, A, k, S;
  a ? l !== Dt && (A = m * f - g * h) && (k = v * (f / A) + x * (-h / A) + (h * y - f * b) / A, S = v * (-g / A) + x * (m / A) - (m * y - g * b) / A, v = k, x = S) : (C = Cr(e), v = C.x + (~_[0].indexOf("%") ? v / 100 * C.width : v), x = C.y + (~(_[1] || _[0]).indexOf("%") ? x / 100 * C.height : x)), i || i !== !1 && s.smooth ? (b = v - d, y = x - c, s.xOffset = u + (b * m + y * h) - b, s.yOffset = p + (b * g + y * f) - y) : s.xOffset = s.yOffset = 0, s.xOrigin = v, s.yOrigin = x, s.smooth = !!i, s.origin = t, s.originIsAbsolute = !!a, e.style[ie] = "0px 0px", n && (Re(n, s, "xOrigin", d, v), Re(n, s, "yOrigin", c, x), Re(n, s, "xOffset", u, s.xOffset), Re(n, s, "yOffset", p, s.yOffset)), e.setAttribute("data-svg-origin", v + " " + x);
}, Ot = function(e, t) {
  var a = e._gsap || new pr(e);
  if ("x" in a && !t && !a.uncache)
    return a;
  var i = e.style, r = a.scaleX < 0, n = "px", s = "deg", l = getComputedStyle(e), d = le(e, ie) || "0", c, u, p, m, g, h, f, b, y, _, v, x, C, A, k, S, E, N, D, I, F, Y, V, W, pe, et, gt, ft, Le, ti, Ae, Fe;
  return c = u = p = h = f = b = y = _ = v = 0, m = g = 1, a.svg = !!(e.getCTM && Tr(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[L] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[L] !== "none" ? l[L] : "")), i.scale = i.rotate = i.translate = "none"), A = Ka(e, a.svg), a.svg && (a.uncache ? (pe = e.getBBox(), d = a.xOrigin - pe.x + "px " + (a.yOrigin - pe.y) + "px", W = "") : W = !t && e.getAttribute("data-svg-origin"), Ra(e, W || d, !!W || a.originIsAbsolute, a.smooth !== !1, A)), x = a.xOrigin || 0, C = a.yOrigin || 0, A !== Dt && (N = A[0], D = A[1], I = A[2], F = A[3], c = Y = A[4], u = V = A[5], A.length === 6 ? (m = Math.sqrt(N * N + D * D), g = Math.sqrt(F * F + I * I), h = N || D ? tt(D, N) * Ve : 0, y = I || F ? tt(I, F) * Ve + h : 0, y && (g *= Math.abs(Math.cos(y * dt))), a.svg && (c -= x - (x * N + C * I), u -= C - (x * D + C * F))) : (Fe = A[6], ti = A[7], gt = A[8], ft = A[9], Le = A[10], Ae = A[11], c = A[12], u = A[13], p = A[14], k = tt(Fe, Le), f = k * Ve, k && (S = Math.cos(-k), E = Math.sin(-k), W = Y * S + gt * E, pe = V * S + ft * E, et = Fe * S + Le * E, gt = Y * -E + gt * S, ft = V * -E + ft * S, Le = Fe * -E + Le * S, Ae = ti * -E + Ae * S, Y = W, V = pe, Fe = et), k = tt(-I, Le), b = k * Ve, k && (S = Math.cos(-k), E = Math.sin(-k), W = N * S - gt * E, pe = D * S - ft * E, et = I * S - Le * E, Ae = F * E + Ae * S, N = W, D = pe, I = et), k = tt(D, N), h = k * Ve, k && (S = Math.cos(k), E = Math.sin(k), W = N * S + D * E, pe = Y * S + V * E, D = D * S - N * E, V = V * S - Y * E, N = W, Y = pe), f && Math.abs(f) + Math.abs(h) > 359.9 && (f = h = 0, b = 180 - b), m = G(Math.sqrt(N * N + D * D + I * I)), g = G(Math.sqrt(V * V + Fe * Fe)), k = tt(Y, V), y = Math.abs(k) > 2e-4 ? k * Ve : 0, v = Ae ? 1 / (Ae < 0 ? -Ae : Ae) : 0), a.svg && (W = e.getAttribute("transform"), a.forceCSS = e.setAttribute("transform", "") || !Pr(le(e, L)), W && e.setAttribute("transform", W))), Math.abs(y) > 90 && Math.abs(y) < 270 && (r ? (m *= -1, y += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (g *= -1, y += y <= 0 ? 180 : -180)), t = t || a.uncache, a.x = c - ((a.xPercent = c && (!t && a.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * a.xPercent / 100 : 0) + n, a.y = u - ((a.yPercent = u && (!t && a.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetHeight * a.yPercent / 100 : 0) + n, a.z = p + n, a.scaleX = G(m), a.scaleY = G(g), a.rotation = G(h) + s, a.rotationX = G(f) + s, a.rotationY = G(b) + s, a.skewX = y + s, a.skewY = _ + s, a.transformPerspective = v + n, (a.zOrigin = parseFloat(d.split(" ")[2]) || !t && a.zOrigin || 0) && (i[ie] = $t(d)), a.xOffset = a.yOffset = 0, a.force3D = de.force3D, a.renderTransform = a.svg ? as : kr ? Ir : ts, a.uncache = 0, a;
}, $t = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, ua = function(e, t, a) {
  var i = K(t);
  return G(parseFloat(t) + parseFloat(ze(e, "x", a + "px", i))) + i;
}, ts = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Ir(e, t);
}, He = "0deg", wt = "0px", We = ") ", Ir = function(e, t) {
  var a = t || this, i = a.xPercent, r = a.yPercent, n = a.x, s = a.y, l = a.z, d = a.rotation, c = a.rotationY, u = a.rotationX, p = a.skewX, m = a.skewY, g = a.scaleX, h = a.scaleY, f = a.transformPerspective, b = a.force3D, y = a.target, _ = a.zOrigin, v = "", x = b === "auto" && e && e !== 1 || b === !0;
  if (_ && (u !== He || c !== He)) {
    var C = parseFloat(c) * dt, A = Math.sin(C), k = Math.cos(C), S;
    C = parseFloat(u) * dt, S = Math.cos(C), n = ua(y, n, A * S * -_), s = ua(y, s, -Math.sin(C) * -_), l = ua(y, l, k * S * -_ + _);
  }
  f !== wt && (v += "perspective(" + f + We), (i || r) && (v += "translate(" + i + "%, " + r + "%) "), (x || n !== wt || s !== wt || l !== wt) && (v += l !== wt || x ? "translate3d(" + n + ", " + s + ", " + l + ") " : "translate(" + n + ", " + s + We), d !== He && (v += "rotate(" + d + We), c !== He && (v += "rotateY(" + c + We), u !== He && (v += "rotateX(" + u + We), (p !== He || m !== He) && (v += "skew(" + p + ", " + m + We), (g !== 1 || h !== 1) && (v += "scale(" + g + ", " + h + We), y.style[L] = v || "translate(0, 0)";
}, as = function(e, t) {
  var a = t || this, i = a.xPercent, r = a.yPercent, n = a.x, s = a.y, l = a.rotation, d = a.skewX, c = a.skewY, u = a.scaleX, p = a.scaleY, m = a.target, g = a.xOrigin, h = a.yOrigin, f = a.xOffset, b = a.yOffset, y = a.forceCSS, _ = parseFloat(n), v = parseFloat(s), x, C, A, k, S;
  l = parseFloat(l), d = parseFloat(d), c = parseFloat(c), c && (c = parseFloat(c), d += c, l += c), l || d ? (l *= dt, d *= dt, x = Math.cos(l) * u, C = Math.sin(l) * u, A = Math.sin(l - d) * -p, k = Math.cos(l - d) * p, d && (c *= dt, S = Math.tan(d - c), S = Math.sqrt(1 + S * S), A *= S, k *= S, c && (S = Math.tan(c), S = Math.sqrt(1 + S * S), x *= S, C *= S)), x = G(x), C = G(C), A = G(A), k = G(k)) : (x = u, k = p, C = A = 0), (_ && !~(n + "").indexOf("px") || v && !~(s + "").indexOf("px")) && (_ = ze(m, "x", n, "px"), v = ze(m, "y", s, "px")), (g || h || f || b) && (_ = G(_ + g - (g * x + h * A) + f), v = G(v + h - (g * C + h * k) + b)), (i || r) && (S = m.getBBox(), _ = G(_ + i / 100 * S.width), v = G(v + r / 100 * S.height)), S = "matrix(" + x + "," + C + "," + A + "," + k + "," + _ + "," + v + ")", m.setAttribute("transform", S), y && (m.style[L] = S);
}, is = function(e, t, a, i, r) {
  var n = 360, s = j(r), l = parseFloat(r) * (s && ~r.indexOf("rad") ? Ve : 1), d = l - i, c = i + d + "deg", u, p;
  return s && (u = r.split("_")[1], u === "short" && (d %= n, d !== d % (n / 2) && (d += d < 0 ? n : -n)), u === "cw" && d < 0 ? d = (d + n * pi) % n - ~~(d / n) * n : u === "ccw" && d > 0 && (d = (d - n * pi) % n - ~~(d / n) * n)), e._pt = p = new ae(e._pt, t, a, i, d, Ln), p.e = c, p.u = "deg", e._props.push(a), p;
}, _i = function(e, t) {
  for (var a in t)
    e[a] = t[a];
  return e;
}, rs = function(e, t, a) {
  var i = _i({}, a._gsap), r = "perspective,force3D,transformOrigin,svgOrigin", n = a.style, s, l, d, c, u, p, m, g;
  i.svg ? (d = a.getAttribute("transform"), a.setAttribute("transform", ""), n[L] = t, s = Ot(a, 1), qe(a, L), a.setAttribute("transform", d)) : (d = getComputedStyle(a)[L], n[L] = t, s = Ot(a, 1), n[L] = d);
  for (l in Ee)
    d = i[l], c = s[l], d !== c && r.indexOf(l) < 0 && (m = K(d), g = K(c), u = m !== g ? ze(a, l, d, g) : parseFloat(d), p = parseFloat(c), e._pt = new ae(e._pt, s, l, u, p - u, Pa), e._pt.u = g || 0, e._props.push(l));
  _i(s, i);
};
te("padding,margin,Width,Radius", function(o, e) {
  var t = "Top", a = "Right", i = "Bottom", r = "Left", n = (e < 3 ? [t, a, i, r] : [t + r, t + a, i + a, i + r]).map(function(s) {
    return e < 2 ? o + s : "border" + s + o;
  });
  Zt[e > 1 ? "border" + o : o] = function(s, l, d, c, u) {
    var p, m;
    if (arguments.length < 4)
      return p = n.map(function(g) {
        return Ce(s, g, d);
      }), m = p.join(" "), m.split(p[0]).length === 5 ? p[0] : m;
    p = (c + "").split(" "), m = {}, n.forEach(function(g, h) {
      return m[g] = p[h] = p[h] || p[(h - 1) / 2 | 0];
    }), s.init(l, m, u);
  };
});
var Mr = {
  name: "css",
  register: Ma,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, a, i, r) {
    var n = this._props, s = e.style, l = a.vars.startAt, d, c, u, p, m, g, h, f, b, y, _, v, x, C, A, k, S;
    Xa || Ma(), this.styles = this.styles || Sr(e), k = this.styles.props, this.tween = a;
    for (h in t)
      if (h !== "autoRound" && (c = t[h], !(ne[h] && hr(h, t, a, i, e, r)))) {
        if (m = typeof c, g = Zt[h], m === "function" && (c = c.call(a, i, e, r), m = typeof c), m === "string" && ~c.indexOf("random(") && (c = Mt(c)), g)
          g(this, e, h, c, a) && (A = 1);
        else if (h.substr(0, 2) === "--")
          d = (getComputedStyle(e).getPropertyValue(h) + "").trim(), c += "", De.lastIndex = 0, De.test(d) || (f = K(d), b = K(c), b ? f !== b && (d = ze(e, h, d, b) + b) : f && (c += f)), this.add(s, "setProperty", d, c, i, r, 0, 0, h), n.push(h), k.push(h, 0, s[h]);
        else if (m !== "undefined") {
          if (l && h in l ? (d = typeof l[h] == "function" ? l[h].call(a, i, e, r) : l[h], j(d) && ~d.indexOf("random(") && (d = Mt(d)), K(d + "") || d === "auto" || (d += de.units[h] || K(Ce(e, h)) || ""), (d + "").charAt(1) === "=" && (d = Ce(e, h))) : d = Ce(e, h), p = parseFloat(d), y = m === "string" && c.charAt(1) === "=" && c.substr(0, 2), y && (c = c.substr(2)), u = parseFloat(c), h in xe && (h === "autoAlpha" && (p === 1 && Ce(e, "visibility") === "hidden" && u && (p = 0), k.push("visibility", 0, s.visibility), Re(this, s, "visibility", p ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), h !== "scale" && h !== "transform" && (h = xe[h], ~h.indexOf(",") && (h = h.split(",")[0]))), _ = h in Ee, _) {
            if (this.styles.save(h), S = c, m === "string" && c.substring(0, 6) === "var(--") {
              if (c = le(e, c.substring(4, c.indexOf(")"))), c.substring(0, 5) === "calc(") {
                var E = e.style.perspective;
                e.style.perspective = c, c = le(e, "perspective"), E ? e.style.perspective = E : qe(e, "perspective");
              }
              u = parseFloat(c);
            }
            if (v || (x = e._gsap, x.renderTransform && !t.parseTransform || Ot(e, t.parseTransform), C = t.smoothOrigin !== !1 && x.smooth, v = this._pt = new ae(this._pt, s, L, 0, 1, x.renderTransform, x, 0, -1), v.dep = 1), h === "scale")
              this._pt = new ae(this._pt, x, "scaleY", x.scaleY, (y ? ot(x.scaleY, y + u) : u) - x.scaleY || 0, Pa), this._pt.u = 0, n.push("scaleY", h), h += "X";
            else if (h === "transformOrigin") {
              k.push(ie, 0, s[ie]), c = $n(c), x.svg ? Ra(e, c, 0, C, 0, this) : (b = parseFloat(c.split(" ")[2]) || 0, b !== x.zOrigin && Re(this, x, "zOrigin", x.zOrigin, b), Re(this, s, h, $t(d), $t(c)));
              continue;
            } else if (h === "svgOrigin") {
              Ra(e, c, 1, C, 0, this);
              continue;
            } else if (h in Er) {
              is(this, x, h, p, y ? ot(p, y + c) : c);
              continue;
            } else if (h === "smoothOrigin") {
              Re(this, x, "smooth", x.smooth, c);
              continue;
            } else if (h === "force3D") {
              x[h] = c;
              continue;
            } else if (h === "transform") {
              rs(this, c, e);
              continue;
            }
          } else h in s || (h = mt(h) || h);
          if (_ || (u || u === 0) && (p || p === 0) && !Bn.test(c) && h in s)
            f = (d + "").substr((p + "").length), u || (u = 0), b = K(c) || (h in de.units ? de.units[h] : f), f !== b && (p = ze(e, h, d, b)), this._pt = new ae(this._pt, _ ? x : s, h, p, (y ? ot(p, y + u) : u) - p, !_ && (b === "px" || h === "zIndex") && t.autoRound !== !1 ? Wn : Pa), this._pt.u = b || 0, _ && S !== c ? (this._pt.b = d, this._pt.e = S, this._pt.r = Hn) : f !== b && b !== "%" && (this._pt.b = d, this._pt.r = Fn);
          else if (h in s)
            Zn.call(this, e, h, d, y ? y + c : c);
          else if (h in e)
            this.add(e, h, d || e[h], y ? y + c : c, i, r);
          else if (h !== "parseTransform") {
            Ba(h, c);
            continue;
          }
          _ || (h in s ? k.push(h, 0, s[h]) : typeof e[h] == "function" ? k.push(h, 2, e[h]()) : k.push(h, 1, d || e[h])), n.push(h);
        }
      }
    A && _r(this);
  },
  render: function(e, t) {
    if (t.tween._time || !Ja())
      for (var a = t._pt; a; )
        a.r(e, a.d), a = a._next;
    else
      t.styles.revert();
  },
  get: Ce,
  aliases: xe,
  getSetter: function(e, t, a) {
    var i = xe[t];
    return i && i.indexOf(",") < 0 && (t = i), t in Ee && t !== ie && (e._gsap.x || Ce(e, "x")) ? a && ui === a ? t === "scale" ? Yn : Vn : (ui = a || {}) && (t === "scale" ? jn : Xn) : e.style && !Oa(e.style[t]) ? Gn : ~t.indexOf("-") ? Un : Ya(e, t);
  },
  core: {
    _removeProperty: qe,
    _getMatrix: Ka
  }
};
re.utils.checkPrefix = mt;
re.core.getStyleSaver = Sr;
(function(o, e, t, a) {
  var i = te(o + "," + e + "," + t, function(r) {
    Ee[r] = 1;
  });
  te(e, function(r) {
    de.units[r] = "deg", Er[r] = 1;
  }), xe[i[13]] = o + "," + e, te(a, function(r) {
    var n = r.split(":");
    xe[n[1]] = i[n[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
te("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(o) {
  de.units[o] = "px";
});
re.registerPlugin(Mr);
var w = re.registerPlugin(Mr) || re;
w.core.Tween;
const ns = [
  "wa-message--component",
  ...[
    "table",
    "enrichment",
    "thinking",
    "result",
    "strategy",
    "sources",
    "style",
    "proximity",
    "game",
    "sequence",
    "drop",
    "file"
  ].map(
    (o) => `wa-message--${o}`
  )
], ss = 1.28, T = (o) => Number((o * ss).toFixed(3)), os = {
  duration: T(0.44),
  ease: "back.out(1.7)"
}, yi = {
  startOverlap: "-=0.08",
  charsPerSecond: 54,
  minDuration: 0.36,
  maxDuration: 1.55
}, Xe = {
  startOverlap: "-=0.08",
  charsPerSecond: 86,
  labelCharsPerSecond: 72,
  minDuration: 0.28,
  maxDuration: 1.1
}, ls = {
  charsPerSecond: Xe.labelCharsPerSecond,
  minDuration: Xe.minDuration,
  maxDuration: Xe.maxDuration
}, ds = {
  charsPerSecond: 62,
  minDuration: 0.18,
  maxDuration: 0.42
}, xi = {
  detailOffsetY: -4,
  duration: T(0.24)
}, we = {
  hiddenY: 0,
  hiddenScaleX: 0.58,
  hiddenScaleY: 0.58,
  showDuration: T(0.3),
  hideDuration: T(0.36),
  threadGap: 44
}, bt = {
  scrollOutRatio: 0.74,
  minScrollOut: 280,
  duration: T(0.58),
  threadOverlap: "-=0.36"
}, vi = 110, Ge = {
  revealDuration: T(0.42),
  revealEase: "power3.inOut",
  followDuration: T(0.24),
  followEase: "power2.out"
}, Se = {
  threadY: -176,
  threadOpacity: 0,
  revealDuration: T(0.62),
  revealEase: "power3.inOut",
  cardDuration: T(0.28)
}, cs = 96, Ai = ".wa-cursor-file, .wa-file-landing-clone, .wa-csv-drop", us = "[data-marketing-data-sources-grid]", pa = {
  offscreenMargin: 96,
  pullInDuration: T(0.38),
  pullInEase: "power3.out"
}, he = {
  duration: T(0.54),
  stagger: 0.055,
  ease: "power3.inOut",
  rotations: [2, -5, 6, -8],
  detailStart: 0.42,
  detailSpan: 0.34,
  shadowY: 16,
  shadowBlur: 28,
  shadowAlpha: 0.18
}, be = {
  tableRow: {
    from: { autoAlpha: 0, y: 7 },
    to: {
      autoAlpha: 1,
      y: 0,
      duration: T(0.24),
      ease: "power2.out",
      stagger: 0.045
    }
  },
  compactRow: {
    from: { autoAlpha: 0, y: 6 },
    to: {
      autoAlpha: 1,
      y: 0,
      duration: T(0.2),
      ease: "power2.out",
      stagger: 0.045
    }
  },
  softRow: {
    from: { autoAlpha: 0, y: 7 },
    to: {
      autoAlpha: 1,
      y: 0,
      duration: T(0.24),
      ease: "power2.out",
      stagger: 0.045
    }
  },
  smallCard: {
    from: {
      autoAlpha: 0,
      y: 12,
      scale: 0.985,
      transformOrigin: "center top"
    },
    to: {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: T(0.28),
      ease: "power2.out",
      stagger: 0.05
    }
  },
  stackCard: {
    from: { autoAlpha: 0, y: 9, scale: 0.99 },
    to: {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: T(0.24),
      ease: "power2.out",
      stagger: 0.05
    }
  },
  strategyCard: {
    from: {
      autoAlpha: 0,
      y: 20,
      scale: 0.985,
      transformOrigin: "center top"
    },
    to: {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: T(0.44),
      ease: "back.out(1.35)",
      stagger: 0.16
    }
  },
  waterfallRow: {
    from: { autoAlpha: 0, y: 6 },
    to: {
      autoAlpha: 1,
      y: 0,
      duration: T(0.22),
      ease: "power2.out",
      stagger: 0.045
    },
    position: "-=0.18"
  }
};
class ps {
  constructor(e) {
    this.root = e, this.chatShell = this.required("[data-chat-shell]"), this.chatBody = this.required(".wa-chat-shell__body"), this.thread = this.required("[data-chat-thread]"), this.composer = this.required("[data-chat-input]"), this.composerText = this.required("[data-composer-text]"), this.composerContents = Array.from(this.composer.children).filter(
      (t) => t instanceof HTMLElement
    ), this.tableControlTooltip = this.createDataTableFloatingTooltip(), this.chatShell.append(this.tableControlTooltip), this.chatShell.addEventListener("pointerover", this.handleDataTableControlPointerOver), this.chatShell.addEventListener("pointerout", this.handleDataTableControlPointerOut), this.chatShell.addEventListener("click", this.handleDataTableControlClick), this.signupScene = this.required("[data-signup-scene]"), this.signupEmail = this.required("[data-signup-email]"), this.status = this.root.querySelector("[data-chat-status]"), this.prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? !1, this.root.querySelectorAll("[data-thinking], [data-research-steps], [data-result-grid]").forEach((t) => {
      t.remove();
    }), this.root.querySelectorAll(Ai).forEach((t) => {
      t.remove();
    }), this.clearMarketingPanels();
  }
  root;
  chatShell;
  chatBody;
  thread;
  composerText;
  composer;
  composerContents = [];
  tableControlTooltip;
  signupScene;
  signupEmail;
  status;
  messagePool = [];
  cardPool = [];
  transientCleanups = [];
  messageIndex = 0;
  cardIndex = 0;
  scheduledScrollFrame = 0;
  scheduledScrollMessage = null;
  scrollTween = null;
  dropRevealWatchers = /* @__PURE__ */ new WeakMap();
  lastStreamScrollAt = 0;
  prefersReducedMotion = !1;
  composerVisible = !1;
  activeTablePageTimelines = /* @__PURE__ */ new Map();
  expectedDataTablePages = /* @__PURE__ */ new Map();
  handleDataTableControlPointerOver = (e) => {
    const t = this.findDataTableControl(e.target);
    t && this.showTooltipForDataTableControl(t);
  };
  handleDataTableControlPointerOut = (e) => {
    const t = this.findDataTableControl(e.target), a = e.relatedTarget;
    t && (a instanceof Node && t.contains(a) || this.hideDataTableControlTooltip());
  };
  handleDataTableControlClick = (e) => {
    const t = this.findDataTablePageButton(e.target);
    if (!t) return;
    const i = t.closest("[data-data-table]")?.dataset.dataTable, r = Number(t.dataset.tablePageButton);
    if (!i || !Number.isFinite(r)) return;
    e.preventDefault(), this.activeTablePageTimelines.get(i)?.kill();
    const n = this.dataTablePage(i, r, { updateExpected: !1 });
    this.activeTablePageTimelines.set(i, n), n.eventCallback("onComplete", () => {
      this.activeTablePageTimelines.get(i) === n && this.activeTablePageTimelines.delete(i), this.showTooltipForDataTableControl(t);
    });
  };
  reset() {
    this.cancelScheduledScroll(), this.scrollTween?.kill(), this.scrollTween = null, this.clearTransientElements(), this.clearMarketingPanels(), this.messageIndex = 0, this.cardIndex = 0, this.composerText.textContent = "", w.killTweensOf([this.composer, this.composerText, this.thread]), this.setComposerFocusState(!1), this.setComposerVisibleState(!1), this.activeTablePageTimelines.forEach((e) => e.kill()), this.activeTablePageTimelines.clear(), this.expectedDataTablePages.clear(), this.hideDataTableControlTooltip(), this.signupEmail.textContent = "", this.status?.replaceChildren(document.createTextNode("Ready")), this.clearCustomResults(), this.thread.scrollTop = 0, w.set(this.thread, {
      clearProps: "maxHeight,minHeight,paddingTop,paddingBottom,borderWidth"
    }), w.set(this.signupScene, { autoAlpha: 0, y: 0, scale: 1, display: "none" }), w.set(this.thread, {
      autoAlpha: 1,
      y: 0,
      display: ""
    }), w.set(this.composer, this.getComposerHiddenVars()), w.set(this.composerText, { autoAlpha: 1, y: 0 });
    for (const e of this.messagePool)
      e.style.display = "none";
    for (const e of this.cardPool)
      e.style.display = "none";
  }
  destroy() {
    this.chatShell.removeEventListener("pointerover", this.handleDataTableControlPointerOver), this.chatShell.removeEventListener("pointerout", this.handleDataTableControlPointerOut), this.chatShell.removeEventListener("click", this.handleDataTableControlClick), this.activeTablePageTimelines.forEach((e) => e.kill()), this.activeTablePageTimelines.clear();
  }
  prepareStoryStart() {
    this.setComposerFocusState(!1), this.setComposerVisibleState(!1), w.set(this.composer, this.getComposerHiddenVars()), w.set(this.composerText, { autoAlpha: 1, y: 0 });
  }
  setStatus(e) {
    const t = w.timeline();
    return this.status && t.to(this.status, {
      autoAlpha: 0,
      y: -3,
      duration: T(0.12),
      ease: "power1.out"
    }).call(() => {
      this.status && (this.status.textContent = e);
    }).to(this.status, {
      autoAlpha: 1,
      y: 0,
      duration: T(0.18),
      ease: "power2.out"
    }), t;
  }
  prepareSignup(e = "") {
    this.signupEmail.textContent = e, w.set(this.signupScene, {
      display: "grid",
      autoAlpha: 1,
      y: 0,
      scale: 1,
      pointerEvents: "auto"
    }), w.set([this.thread, this.composer], {
      autoAlpha: 0,
      y: 34
    }), w.set(this.composer, this.getComposerHiddenVars()), this.setComposerVisibleState(!1);
  }
  typeComposer(e, t = 1.1) {
    const a = { count: 0 }, i = w.timeline();
    return i.call(() => {
      this.composerText.textContent = "";
    }).to(a, {
      count: e.length,
      duration: t,
      ease: "none",
      onUpdate: () => {
        this.composerText.textContent = e.slice(0, Math.round(a.count));
      }
    }), i;
  }
  sendComposerText() {
    return w.timeline().to(this.composerText, {
      autoAlpha: 0,
      y: -9,
      duration: T(0.18),
      ease: "power2.out",
      overwrite: "auto"
    });
  }
  setComposerFocus(e) {
    return w.timeline().to(
      {},
      {
        duration: 1e-3,
        onStart: () => this.setComposerFocusState(e)
      }
    );
  }
  showComposer() {
    const e = w.timeline();
    return e.to(this.composer, {
      y: 0,
      scaleX: 1,
      scaleY: 1,
      visibility: "visible",
      duration: we.showDuration,
      ease: "power3.out",
      force3D: !0,
      overwrite: "auto",
      onStart: () => {
        this.setComposerVisibleState(!0), w.set(this.composerContents, {
          visibility: "visible",
          opacity: 1,
          clearProps: "transform"
        }), w.set(this.composer, {
          display: "grid",
          opacity: 1,
          visibility: "visible",
          transformOrigin: "center center"
        });
      },
      onUpdate: () => {
        this.composerVisible || this.setComposerVisibleState(!0);
      },
      onComplete: () => {
        this.composerVisible || this.setComposerVisibleState(!0);
      }
    }).to(
      this.thread,
      {
        paddingBottom: () => Math.max(vi, this.getComposerThreadInset()),
        duration: we.showDuration,
        ease: "power3.out",
        overwrite: "auto",
        onUpdate: () => this.pinThreadToBottom(),
        onComplete: () => this.pinThreadToBottom()
      },
      0
    ), e;
  }
  hideComposer() {
    return w.timeline().to(this.composer, {
      y: we.hiddenY,
      scaleX: we.hiddenScaleX,
      scaleY: we.hiddenScaleY,
      opacity: 1,
      duration: we.hideDuration,
      ease: "sine.inOut",
      force3D: !0,
      overwrite: "auto",
      onStart: () => {
        this.setComposerFocusState(!1), this.setComposerVisibleState(!1);
      },
      onComplete: () => {
        w.set(this.composerContents, { visibility: "hidden" }), w.set(this.composer, { visibility: "hidden" });
      }
    }).to(
      this.thread,
      {
        paddingBottom: vi,
        duration: we.hideDuration,
        ease: "sine.inOut",
        overwrite: "auto",
        onUpdate: () => this.pinThreadToBottom(),
        onComplete: () => this.pinThreadToBottom()
      },
      0
    );
  }
  clearComposer() {
    return w.timeline().call(() => {
      this.composerText.textContent = "", w.set(this.composerText, { autoAlpha: 1, y: 0 });
    });
  }
  setComposerFocusState(e) {
    this.composer.dataset.focused = String(e);
  }
  setComposerVisibleState(e) {
    this.composerVisible = e, this.composer.dataset.visible = String(e), this.composer.setAttribute("aria-hidden", String(!e));
  }
  getComposerHiddenVars() {
    return {
      opacity: 1,
      visibility: "hidden",
      y: we.hiddenY,
      scaleX: we.hiddenScaleX,
      scaleY: we.hiddenScaleY,
      display: "",
      transformOrigin: "center center"
    };
  }
  getComposerThreadInset() {
    const e = this.composer.getBoundingClientRect(), t = this.thread.getBoundingClientRect(), a = Math.max(0, t.bottom - e.top);
    return Math.ceil(a + we.threadGap);
  }
  showSignup(e = "") {
    return w.timeline().call(() => {
      this.signupEmail.textContent = e;
    }).set(this.signupScene, {
      display: "grid",
      autoAlpha: 1,
      y: 0,
      scale: 1,
      pointerEvents: "auto"
    }).set(this.thread, {
      autoAlpha: 0,
      y: 34
    }).set(this.composer, this.getComposerHiddenVars()).call(() => this.setComposerVisibleState(!1));
  }
  typeSignupEmail(e, t = 0.86) {
    const a = { count: 0 };
    return w.timeline().call(() => {
      this.signupEmail.textContent = "";
    }).to(a, {
      count: e.length,
      duration: t,
      ease: "none",
      onUpdate: () => {
        this.signupEmail.textContent = e.slice(0, Math.round(a.count));
      }
    });
  }
  transitionSignupToChat() {
    return w.timeline().to(this.signupScene, {
      y: () => this.getSignupScrollOutDistance(),
      autoAlpha: 1,
      scale: 1,
      duration: bt.duration,
      ease: "power3.inOut"
    }).set(this.signupScene, { pointerEvents: "none" }).fromTo(
      this.thread,
      { autoAlpha: 0, y: 42 },
      {
        autoAlpha: 1,
        y: 0,
        duration: bt.duration,
        ease: "power3.out"
      },
      bt.threadOverlap
    ).set(this.composer, this.getComposerHiddenVars()).call(() => this.setComposerVisibleState(!1));
  }
  getSignupScrollOutDistance() {
    const e = this.signupScene.getBoundingClientRect().height;
    return -Math.max(bt.minScrollOut, Math.round(e * bt.scrollOutRatio));
  }
  stopScrollMotion() {
    this.cancelScheduledScroll(), this.scrollTween?.kill(), this.scrollTween = null;
  }
  scrollToLive(e = Ge.followDuration) {
    this.stopScrollMotion();
    const t = this.getThreadBottomScrollTarget();
    if (this.prefersReducedMotion || Math.abs(this.thread.scrollTop - t) < 1) {
      this.thread.scrollTop = t;
      return;
    }
    this.scrollTween = w.to(this.thread, {
      scrollTop: t,
      duration: e,
      ease: Ge.followEase,
      overwrite: "auto",
      onComplete: () => {
        this.scrollTween = null;
      }
    });
  }
  userMessage(e) {
    const t = this.claimMessage("user", e);
    return this.revealMessage(t);
  }
  assistantMessage(e) {
    const t = this.claimMessage("assistant", ""), a = t.querySelector("[data-message-body]"), i = w.timeline().add(this.revealMessage(t));
    return a ? i.add(
      this.streamText(a, e, {
        duration: this.getStreamDuration(e, yi),
        targetForScroll: t
      }),
      yi.startOverlap
    ) : i;
  }
  thinkingState(e, t = 1.1) {
    const a = Array.isArray(e) ? e : [e], i = a.length > 1;
    return this.runThinkingSequence(a, {
      hold: t,
      itemStartY: i ? 10 : 6,
      headerDuration: i ? 0.24 : 0.28,
      afterStepHold: i ? t * 0.45 : t,
      finalHold: i ? t * 0.35 : 0
    });
  }
  prepareResultCard(e) {
    const t = this.claimCard(e);
    return {
      el: t,
      reveal: () => this.revealCard(t),
      highlight: (a) => this.highlightCardTarget(t, a)
    };
  }
  dataTable(e) {
    const t = this.createDataTable(e);
    return this.revealComponentItems("table", t, ".wa-data-table__row", be.tableRow);
  }
  dataTablePage(e, t, a = {}) {
    const i = w.timeline(), r = { value: 0 }, n = { value: 0 }, s = a.updateExpected ?? !0, l = {
      canSwitch: !1,
      table: null,
      currentRows: [],
      targetRows: [],
      buttons: [],
      range: null
    };
    return i.to(r, {
      value: 1,
      duration: T(0.14),
      ease: "power1.out",
      onStart: () => {
        l.table = this.findDataTable(e), s && this.expectedDataTablePages.set(e, t), l.currentRows = l.table ? this.getVisibleDataTableRows(l.table) : [], l.targetRows = l.table ? this.queryElements(l.table, `.wa-data-table__row[data-page="${t}"]`) : [], l.buttons = l.table ? this.queryElements(l.table, "[data-table-page-button]") : [], l.targetButton = l.buttons.find((d) => Number(d.dataset.tablePageButton) === t), l.range = l.table?.querySelector("[data-table-page-range]") ?? null, l.canSwitch = !!(l.table && l.targetRows.length && l.table.dataset.activePage !== String(t)), l.canSwitch && w.set(l.currentRows, { autoAlpha: 1, y: 0 });
      },
      onUpdate: () => {
        if (!l.canSwitch) return;
        const d = r.value, c = this.interpolate(0, -4, d);
        l.currentRows.forEach((u) => {
          u.style.opacity = String(1 - d), u.style.visibility = d > 0.98 ? "hidden" : "visible", u.style.transform = `translate3d(0, ${c}px, 0)`;
        });
      }
    }).call(() => {
      !l.table || !l.canSwitch || (l.table.dataset.activePage = String(t), l.currentRows.forEach((d) => {
        d.style.display = "none";
      }), l.targetRows.forEach((d) => {
        d.style.display = "grid";
      }), l.buttons.forEach((d) => {
        const c = Number(d.dataset.tablePageButton) === t;
        d.dataset.active = String(c), d.setAttribute("aria-current", c ? "page" : "false");
      }), l.range && l.targetButton?.dataset.pageRange && (l.range.textContent = l.targetButton.dataset.pageRange), w.set(l.targetRows, { autoAlpha: 0, y: 6 }));
    }).to(n, {
      value: 1,
      duration: T(0.2),
      ease: "power2.out",
      onStart: () => {
        n.value = 0;
      },
      onUpdate: () => {
        if (!l.canSwitch) return;
        const d = n.value, c = this.interpolate(6, 0, d);
        l.targetRows.forEach((u) => {
          u.style.opacity = String(d), u.style.visibility = d > 0 ? "visible" : "hidden", u.style.transform = `translate3d(0, ${c}px, 0)`;
        });
      },
      onComplete: () => {
        l.canSwitch && w.set(l.targetRows, { autoAlpha: 1, y: 0 });
      }
    }), i;
  }
  getDataTablePageRestores() {
    const e = [];
    return this.expectedDataTablePages.forEach((t, a) => {
      const i = this.findDataTable(a), r = Number(i?.dataset.activePage), n = i?.querySelector(`[data-table-page-button="${t}"]`);
      !i || !n || !Number.isFinite(r) || r === t || e.push({
        tableId: a,
        currentPage: r,
        expectedPage: t,
        target: n
      });
    }), e;
  }
  dataTableActionTooltip(e, t, a) {
    return w.timeline().call(() => {
      const i = this.findDataTable(e);
      if (!i) {
        this.hideDataTableControlTooltip();
        return;
      }
      const r = this.queryElements(i, "[data-table-action]");
      r.forEach((l) => {
        const d = l.dataset.tableAction === t && a;
        l.dataset.tooltipVisible = String(d);
      });
      const n = a ? r.find((l) => l.dataset.tableAction === t) : void 0;
      if (!n) {
        this.hideDataTableControlTooltip();
        return;
      }
      const s = this.getDataTableControlTooltipText(n);
      if (!s) {
        this.hideDataTableControlTooltip();
        return;
      }
      this.showDataTableControlTooltip(n, s);
    });
  }
  enrichmentPanel(e) {
    const t = this.createEnrichmentPanel(e);
    return this.revealComponentItems("enrichment", t, ".wa-waterfall-row", be.waterfallRow);
  }
  strategyPlans(e) {
    const t = e.map((r) => this.createStrategyPlan(r)), a = document.createElement("div"), i = t.flatMap((r) => this.queryElements(r, ".wa-strategy-plan__summary"));
    return a.className = "wa-result-grid has-strategy-plans", a.dataset.strategyPlans = e.map((r) => r.id).join(" "), a.append(...t), w.set(i, { autoAlpha: 0, y: 8 }), this.revealComponentItems("strategy", a, t, be.strategyCard).to(
      i,
      {
        autoAlpha: 1,
        y: 0,
        duration: T(0.24),
        ease: "power2.out",
        stagger: 0.035
      },
      "-=0.22"
    );
  }
  dataSourcesGrid(e) {
    const t = this.createDataSourcesGrid(e);
    return this.revealComponentItems("sources", t, ".wa-data-source-card", be.smallCard);
  }
  marketingDataSourcesGrid(e) {
    const t = this.createMarketingDataSourcesGrid(e), a = this.queryElements(t, ".wa-data-vendor-logo"), i = this.queryElements(t, ".wa-data-source-group"), r = t.querySelector(".wa-data-source-grid__header"), n = this.compactElements(r, ...i, ...a);
    return w.timeline().call(() => {
      this.clearMarketingPanels(), this.stopScrollMotion(), this.chatBody.append(t);
    }).set(t, {
      autoAlpha: 0,
      y: 72,
      scale: 0.985,
      transformOrigin: "center bottom"
    }).set(n, {
      autoAlpha: 0,
      y: 12
    }).to(
      this.thread,
      {
        scrollTop: () => this.getThreadBottomScrollTarget(),
        duration: Se.revealDuration,
        ease: Se.revealEase,
        overwrite: "auto"
      },
      0
    ).to(
      this.thread,
      {
        y: Se.threadY,
        autoAlpha: Se.threadOpacity,
        duration: Se.revealDuration,
        ease: Se.revealEase,
        overwrite: "auto"
      },
      0.04
    ).to(
      t,
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: Se.revealDuration,
        ease: Se.revealEase
      },
      0.16
    ).to(
      r,
      {
        autoAlpha: 1,
        y: 0,
        duration: T(0.28),
        ease: "power2.out"
      },
      0.28
    ).to(
      i,
      {
        autoAlpha: 1,
        y: 0,
        duration: T(0.3),
        ease: "power2.out",
        stagger: 0.04
      },
      0.36
    ).to(
      a,
      {
        autoAlpha: 1,
        y: 0,
        duration: Se.cardDuration,
        ease: "power2.out",
        stagger: 0.025
      },
      0.42
    );
  }
  outreachStyleProfile(e) {
    const t = this.createOutreachStyleProfile(e);
    return this.revealComponentItems(
      "style",
      t,
      ".wa-style-profile__row, .wa-style-profile__example",
      be.softRow
    );
  }
  proximityLeadList(e) {
    const t = this.createProximityLeadList(e);
    return this.revealComponentItems("proximity", t, ".wa-proximity-lead", {
      ...be.stackCard,
      to: { ...be.stackCard.to, duration: T(0.25), stagger: 0.06 }
    });
  }
  personalizationSwipeGame(e) {
    const t = this.createPersonalizationSwipeGame(e), a = this.compactElements(
      ...this.queryElements(t, ".wa-mini-game__header, .wa-swipe-game__prompt, .wa-swipe-game__axis"),
      t.querySelector(".wa-swipe-game__stack"),
      t.querySelector(".wa-swipe-game__actions")
    );
    return this.layoutSwipeGameCards(t, 0), this.revealComponentItems("game", t, a, {
      from: { autoAlpha: 0, y: 12, scale: 0.985 },
      to: {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: T(0.32),
        ease: "power2.out",
        stagger: 0.05
      },
      position: "-=0.2"
    });
  }
  swipePersonalizationCard(e, t, a) {
    const i = this.root.querySelector(
      `[data-personalization-swipe-game="${this.escapeSelectorValue(e)}"]`
    ), r = i?.querySelector(`[data-swipe-card="${this.escapeSelectorValue(t)}"]`), n = this.getSwipeCards(i), s = r ? n.indexOf(r) : -1, l = n[s + 1], d = a === "use" ? 1 : -1, c = i?.querySelector(`[data-swipe-action="${a}"]`), u = i?.querySelector("[data-swipe-complete]"), p = i?.querySelector(".wa-swipe-game__actions"), m = w.timeline();
    return !i || !r || s < 0 || (m.call(() => {
      i.dataset.swipeDecision = a, c && (c.dataset.active = "true");
    }).to(
      c ?? {},
      {
        scale: 0.92,
        duration: T(0.08),
        ease: "power2.out"
      },
      0
    ).to(
      c ?? {},
      {
        scale: 1,
        duration: T(0.18),
        ease: "back.out(2)"
      },
      T(0.1)
    ).to(
      r,
      {
        x: d * 520,
        y: s % 2 === 0 ? -28 : 24,
        rotation: d * (16 + s * 2),
        autoAlpha: 0,
        duration: T(0.5),
        ease: "power3.in",
        force3D: !0
      },
      0.08
    ).call(
      () => {
        delete i.dataset.swipeDecision, c && delete c.dataset.active, r.dataset.swipeState = "done", w.set(r, { display: "none" }), this.layoutSwipeGameCards(i, s + 1);
      },
      void 0,
      "-=0.12"
    ), l ? m.fromTo(
      l,
      {
        x: -d * 18,
        y: 10,
        scale: 0.965,
        rotation: -d * 1.5,
        autoAlpha: 0.74
      },
      {
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
        autoAlpha: 1,
        duration: T(0.28),
        ease: "power2.out",
        force3D: !0
      },
      "-=0.2"
    ) : u && p && m.to(
      p,
      {
        autoAlpha: 0,
        y: 8,
        duration: T(0.18),
        ease: "power2.out"
      },
      "-=0.16"
    ).to(
      u,
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: T(0.28),
        ease: "back.out(1.55)"
      },
      "-=0.06"
    )), m;
  }
  sequenceEngagement(e) {
    const t = this.createSequenceEngagement(e);
    return this.revealComponentItems(
      "sequence",
      t,
      ".wa-sequence-person-button, .wa-sequence-card, .wa-sequence-step, .wa-engage-channel, .wa-sequence-kickoff",
      be.stackCard
    );
  }
  sequenceBuildThinking(e) {
    const t = this.createSequenceThinkingStep(e.templateLabel, e.template, 0), a = e.tracks.map(
      (l, d) => this.createSequenceThinkingStep(l.label, l.detail, d + 1, e.total)
    ), i = this.claimThinkingMessage([t, ...a], this.getThinkingElapsed(3)), r = { value: 1 }, n = a.map((l) => l.querySelector(".wa-sequence-thinking-progress__bar span")).filter((l) => !!l);
    i.message.querySelector(".wa-thinking-block").dataset.sequenceThinking = e.id, w.set(i.header, { autoAlpha: 0, y: 5 }), w.set(i.steps, { display: "grid", autoAlpha: 1, y: 0 }), w.set([t, ...a], { autoAlpha: 0, y: 10, display: "none" }), w.set(n, {
      scaleX: 1 / Math.max(1, e.total),
      transformOrigin: "left center"
    });
    const s = w.timeline().add(this.revealMessage(i.message)).to(i.header, {
      autoAlpha: 1,
      y: 0,
      duration: T(0.24),
      ease: "power2.out"
    }).add(this.streamThinkingHeader(i.header), "-=0.08").call(() => {
      t.dataset.stepState = "current", w.set(t, { display: "grid" });
    }).to(t, {
      autoAlpha: 1,
      y: 0,
      duration: T(0.26),
      ease: "power2.out"
    }, "<").add(this.streamThinkingStepLabel(t), Xe.startOverlap).add(this.streamThinkingStepDetail(t), "-=0.02").to({}, { duration: T(0.54) }).add(this.foldThinkingStep(t)).call(() => {
      a.forEach((l) => {
        l.dataset.stepState = "current", w.set(l, { display: "grid" });
      });
    }, void 0, "+=0.1").to(a, {
      autoAlpha: 1,
      y: 0,
      duration: T(0.3),
      ease: "power2.out",
      stagger: 0.04
    }, "<");
    return a.forEach((l, d) => {
      s.add(this.streamThinkingStepLabel(l), d === 0 ? Xe.startOverlap : "<");
    }), a.forEach((l, d) => {
      s.add(this.streamThinkingStepDetail(l), d === 0 ? "-=0.02" : "<");
    }), s.to(r, {
      value: e.total,
      duration: T(3.9),
      ease: "power1.inOut",
      onUpdate: () => {
        const l = Math.max(1, Math.round(r.value)), d = l / Math.max(1, e.total);
        a.forEach((c) => {
          const u = c.querySelector(".wa-sequence-thinking-progress__count"), p = c.querySelector(".wa-sequence-thinking-progress__bar span");
          u && (u.textContent = `${l}/${e.total}`), p && w.set(p, { scaleX: d });
        }), this.requestMessageScroll(i.message);
      }
    }, "+=0.14").to({}, { duration: T(0.34) }), a.forEach((l, d) => {
      s.add(this.foldThinkingStep(l), d === 0 ? void 0 : "<");
    }), s.call(() => {
      a.forEach((l) => {
        l.dataset.stepState = "complete";
      }), this.animateMessageScrollIntoView(i.message);
    });
  }
  sequencePerson(e, t) {
    const a = this.findSequenceEngagement(e), i = w.timeline();
    if (!a) return i;
    const r = this.queryElements(a, "[data-sequence-card]"), n = this.queryElements(a, "[data-sequence-person-button]"), s = a.querySelector("[data-sequence-count]"), l = r.find((c) => c.dataset.active === "true"), d = r.find((c) => Number(c.dataset.sequenceIndex) === t);
    return !d || l === d ? (this.setActiveSequencePerson(a, t), i) : (i.to(l ?? [], {
      autoAlpha: 0,
      y: -6,
      duration: T(0.16),
      ease: "power2.in"
    }).call(() => {
      r.forEach((c) => {
        const u = c === d;
        c.dataset.active = String(u), c.style.display = u ? "grid" : "none";
      }), n.forEach((c) => {
        c.dataset.currentIndex = String(t);
      }), s && (s.textContent = this.getSequenceCountLabel(t, a.dataset.peopleCount ?? "")), this.updateSequencePersonIdentity(a, t), w.set(d, { autoAlpha: 0, y: 8 });
    }).to(d, {
      autoAlpha: 1,
      y: 0,
      duration: T(0.28),
      ease: "power2.out"
    }).call(() => this.animateMessageScrollIntoView(a.closest(".wa-message") ?? a)), i);
  }
  sequenceKickoff(e) {
    return w.timeline().call(() => {
      const t = this.findSequenceEngagement(e), a = t?.querySelector("[data-sequence-kickoff]"), i = a?.querySelector(".wa-sequence-kickoff__label");
      !t || !a || (t.dataset.sequenceLaunched = "true", a.dataset.launched = "true", i && (i.textContent = "Sequence kicked off"));
    });
  }
  prepareCsvDropArea(e = {}) {
    const t = this.createCsvDropArea(e);
    return this.registerTransientElement(t, () => this.clearDropRevealWatcher(t)), {
      el: t,
      reveal: () => this.revealCsvDropArea(t),
      revealWhenCursorEnters: (a) => this.revealCsvDropAreaWhenCursorEnters(t, a),
      activate: () => this.activateCsvDropArea(t),
      complete: () => this.completeCsvDropArea(t)
    };
  }
  prepareCursorFile(e, t, a = "CSV") {
    const i = this.createCursorFile(e, a);
    let r = null, n = { x: 0, y: 0 };
    const s = () => {
      r?.(), r = null, w.killTweensOf(n);
    };
    return this.registerTransientElement(i, () => {
      s();
    }), {
      el: i,
      startFollow: () => w.timeline().call(() => {
        r?.(), n = this.getCursorFileEntryOffset(i, t), r = this.followCursorWithFile(i, t, n);
      }).to(n, {
        x: 0,
        y: 0,
        duration: pa.pullInDuration,
        ease: pa.pullInEase
      }, 0).to(i, {
        autoAlpha: 1,
        scale: 1,
        duration: T(0.24),
        ease: "back.out(1.9)"
      }, 0.04),
      stopFollow: () => w.timeline().call(s).to(i, {
        autoAlpha: 0,
        scale: 0.92,
        duration: T(0.18),
        ease: "power2.in"
      }),
      landAsUploadedFile: (l, d = "CSV uploaded") => w.timeline().call(s).add(this.uploadedFileMessageFromCursorFile(i, l, d)),
      landAsUploadedFiles: (l) => w.timeline().call(s).add(this.uploadedFilesMessageFromCursorFile(i, l))
    };
  }
  uploadedFileMessage(e, t = "CSV uploaded") {
    const a = this.createUploadedFile(e, t), i = this.claimUserComponentMessage("file", a);
    return this.revealMessageWithChildFrom(i, a, {
      autoAlpha: 0,
      y: 8,
      scale: 0.98
    }, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: T(0.26),
      ease: "back.out(1.6)"
    });
  }
  uploadedFileMessageFromCursorFile(e, t, a = "CSV uploaded") {
    const i = this.createUploadedFile(t, a), r = this.claimUserComponentMessage("file", i);
    return this.revealDroppedFilesMessage(e, r, [i]);
  }
  uploadedFilesMessage(e) {
    const t = this.createUploadedFiles(e);
    return this.revealUserComponentItems("file", t, ".wa-uploaded-file", {
      ...be.compactRow,
      from: { ...be.compactRow.from, scale: 0.99 },
      to: { ...be.compactRow.to, scale: 1 },
      position: "-=0.24"
    });
  }
  uploadedFilesMessageFromCursorFile(e, t) {
    const a = this.createUploadedFiles(t), i = this.claimUserComponentMessage("file", a), r = this.queryElements(a, ".wa-uploaded-file"), n = this.queryElements(a, ".wa-uploaded-files__summary");
    return this.revealDroppedFilesMessage(e, i, r, n);
  }
  pulse(e) {
    const t = typeof e == "string" ? this.root.querySelector(e) : e, a = w.timeline();
    return t && a.to(t, {
      scale: 1.025,
      duration: T(0.14),
      ease: "power2.out"
    }).to(t, {
      scale: 1,
      duration: T(0.28),
      ease: "elastic.out(1, 0.55)"
    }), a;
  }
  revealDroppedFilesMessage(e, t, a, i = []) {
    const r = [...a, ...i];
    let n = [];
    const s = { value: 0 };
    let l = 0;
    return !a.length || !e.isConnected ? this.revealMessageWithChildren(t, r, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: T(0.24),
      ease: "power2.out",
      stagger: he.stagger
    }) : (w.set(r, { autoAlpha: 0, y: 0, scale: 1 }), w.timeline().call(() => {
      this.scrollTween?.kill(), this.scrollTween = null, t.style.display = "grid", w.set(t, {
        opacity: 1,
        visibility: "hidden",
        y: 0,
        scale: 1,
        transformOrigin: "right center"
      }), n = this.createFileLandingClones(e, a), w.set(e, { autoAlpha: 0 }), l = this.getMessageScrollTarget(t);
    }).to(
      this.thread,
      {
        scrollTop: () => l,
        duration: he.duration,
        ease: he.ease,
        overwrite: "auto"
      },
      0
    ).to(
      s,
      {
        value: 1,
        duration: he.duration,
        ease: he.ease,
        onUpdate: () => this.renderFileLandingClones(n, s.value)
      },
      0
    ).to(
      i,
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: T(0.16),
        ease: "power1.out",
        stagger: he.stagger
      },
      `-=${T(0.16)}`
    ).call(() => {
      this.renderFileLandingClones(n, 1), w.set(r, { autoAlpha: 1, y: 0, scale: 1 }), w.set(t, { opacity: 1, visibility: "visible" }), n.forEach((d) => d.el.remove()), e.remove(), this.animateMessageScrollIntoView(t);
    }));
  }
  createFileLandingClones(e, t) {
    const a = this.getCursorFileCards(e);
    return t.map((i, r) => {
      const n = a[Math.min(r, a.length - 1)], s = n.getBoundingClientRect(), l = i.getBoundingClientRect(), d = this.getRootLocalRect(s), c = i.cloneNode(!0), u = this.getCursorFileCardRotation(r, a.length), p = window.getComputedStyle(n), m = window.getComputedStyle(i), g = this.parseCssColor(p.backgroundColor) ?? { r: 255, g: 255, b: 249, a: 0.96 }, h = this.parseCssColor(m.backgroundColor) ?? g, f = this.parseCssColor(p.borderTopColor) ?? { r: 23, g: 23, b: 20, a: 0.12 }, b = this.queryElements(c, ".wa-uploaded-file__body span");
      return c.classList.add("wa-file-landing-clone"), c.dataset.fileLandingClone = "", this.root.append(c), w.set(c, {
        position: "absolute",
        zIndex: 21,
        top: 0,
        left: 0,
        width: l.width,
        height: l.height,
        x: d.left,
        y: d.top,
        scaleX: s.width / Math.max(1, l.width),
        scaleY: s.height / Math.max(1, l.height),
        rotation: u,
        transformOrigin: "left top",
        pointerEvents: "none",
        margin: 0,
        autoAlpha: 1,
        visibility: "visible",
        backgroundColor: this.formatRgba(g),
        borderColor: this.formatRgba(f),
        borderStyle: p.borderTopStyle === "none" ? "solid" : p.borderTopStyle,
        borderWidth: p.borderTopWidth || "1px",
        boxShadow: this.getFileLandingShadow(0)
      }), w.set(b, { autoAlpha: 0, y: -3 }), {
        el: c,
        target: i,
        startX: d.left,
        startY: d.top,
        startScaleX: s.width / Math.max(1, l.width),
        startScaleY: s.height / Math.max(1, l.height),
        startRotation: u,
        startBackground: g,
        endBackground: h,
        startBorderColor: f,
        detailEls: b,
        setX: w.quickSetter(c, "x", "px"),
        setY: w.quickSetter(c, "y", "px"),
        setScaleX: w.quickSetter(c, "scaleX"),
        setScaleY: w.quickSetter(c, "scaleY"),
        setRotation: w.quickSetter(c, "rotation", "deg"),
        setBackgroundColor: w.quickSetter(c, "backgroundColor"),
        setBorderColor: w.quickSetter(c, "borderColor")
      };
    });
  }
  renderFileLandingClones(e, t) {
    const a = this.root.getBoundingClientRect();
    for (const i of e) {
      const r = i.target.getBoundingClientRect(), n = r.left - a.left, s = r.top - a.top, l = hs(
        (t - he.detailStart) / he.detailSpan
      );
      if (i.setX(this.interpolate(i.startX, n, t)), i.setY(this.interpolate(i.startY, s, t)), i.setScaleX(this.interpolate(i.startScaleX, 1, t)), i.setScaleY(this.interpolate(i.startScaleY, 1, t)), i.setRotation(this.interpolate(i.startRotation, 0, t)), i.setBackgroundColor(this.interpolateRgba(i.startBackground, i.endBackground, t)), i.setBorderColor(this.interpolateRgba(i.startBorderColor, {
        ...i.startBorderColor,
        a: 0
      }, t)), i.el.style.boxShadow = this.getFileLandingShadow(t), i.detailEls.length) {
        const d = this.interpolate(-3, 0, l);
        i.detailEls.forEach((c) => {
          c.style.opacity = String(l), c.style.visibility = l > 0 ? "visible" : "hidden", c.style.transform = `translate3d(0, ${d}px, 0)`;
        });
      }
    }
  }
  getCursorFileCards(e) {
    const t = Array.from(e.querySelectorAll(".wa-cursor-file__card"));
    return t.length ? t : [e];
  }
  getCursorFileCardRotation(e, t) {
    return t > 1 ? he.rotations[e] ?? 0 : 0;
  }
  getRootLocalRect(e) {
    const t = this.root.getBoundingClientRect();
    return {
      left: e.left - t.left,
      top: e.top - t.top
    };
  }
  interpolate(e, t, a) {
    return e + (t - e) * a;
  }
  parseCssColor(e) {
    const t = e.match(/[\d.]+/g);
    return !t || t.length < 3 ? null : {
      r: Number(t[0]),
      g: Number(t[1]),
      b: Number(t[2]),
      a: t[3] === void 0 ? 1 : Number(t[3])
    };
  }
  interpolateRgba(e, t, a) {
    return this.formatRgba({
      r: this.interpolate(e.r, t.r, a),
      g: this.interpolate(e.g, t.g, a),
      b: this.interpolate(e.b, t.b, a),
      a: this.interpolate(e.a, t.a, a)
    });
  }
  formatRgba(e) {
    return `rgba(${Math.round(e.r)}, ${Math.round(e.g)}, ${Math.round(e.b)}, ${e.a.toFixed(3)})`;
  }
  getFileLandingShadow(e) {
    const t = 1 - e;
    return `0 ${this.interpolate(he.shadowY, 0, e).toFixed(2)}px ${this.interpolate(
      he.shadowBlur,
      0,
      e
    ).toFixed(2)}px rgba(23, 23, 20, ${(he.shadowAlpha * t).toFixed(3)})`;
  }
  revealMessageWithChildren(e, t, a, i = "-=0.22") {
    return w.timeline().add(this.revealMessage(e)).to(t, a, i);
  }
  revealMessageWithChildFrom(e, t, a, i, r = "-=0.22") {
    return w.timeline().add(this.revealMessage(e)).fromTo(
      t,
      a,
      i,
      r
    );
  }
  revealComponentItems(e, t, a, i) {
    const r = this.claimComponentMessage(e, t);
    return this.revealPreparedItems(r, this.resolveRevealTargets(t, a), i);
  }
  revealUserComponentItems(e, t, a, i) {
    const r = this.claimUserComponentMessage(e, t);
    return this.revealPreparedItems(r, this.resolveRevealTargets(t, a), i);
  }
  resolveRevealTargets(e, t) {
    return typeof t == "string" ? this.queryElements(e, t) : t;
  }
  revealPreparedItems(e, t, a) {
    return t.length && w.set(t, { ...a.from }), this.revealMessageWithChildren(e, t, { ...a.to }, a.position).call(
      () => this.animateMessageScrollIntoView(e),
      void 0,
      "+=0.02"
    );
  }
  revealMessage(e) {
    let t = 0;
    return w.timeline().call(() => {
      this.scrollTween?.kill(), this.scrollTween = null, e.style.display = "grid", this.composerVisible && this.pinThreadToBottom(), t = this.getMessageScrollTarget(e);
    }).to(
      this.thread,
      {
        scrollTop: () => t,
        duration: Ge.revealDuration,
        ease: Ge.revealEase,
        overwrite: "auto"
      },
      0
    ).to(e, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      ...os
    }, 0.04);
  }
  claimMessage(e, t) {
    const a = this.messageIndex, i = this.messagePool[a] ?? this.createMessage(a), r = i.querySelector("[data-message-body]");
    return this.messageIndex += 1, i.dataset.messageRole = e, i.dataset.messageId = `${e}-${a}`, this.resetMessageClasses(i), i.classList.toggle("wa-message--first-active", a === 0), i.style.display = "none", r && (delete r.dataset.streaming, r.replaceChildren(document.createTextNode(t))), this.thread.append(i), w.set(i, {
      autoAlpha: 0,
      y: 16,
      scale: 0.985,
      transformOrigin: e === "user" ? "right center" : "left center"
    }), i;
  }
  claimComponentMessage(e, t) {
    const a = this.messageIndex, i = this.messagePool[a] ?? this.createMessage(a), r = i.querySelector("[data-message-body]");
    return this.messageIndex += 1, i.dataset.messageRole = "assistant", i.dataset.messageId = `assistant-component-${a}`, this.resetMessageClasses(i), i.classList.toggle("wa-message--first-active", a === 0), i.classList.add("wa-message--component", `wa-message--${e}`), i.style.display = "none", r && (delete r.dataset.streaming, r.replaceChildren(t)), this.thread.append(i), w.set(i, {
      autoAlpha: 0,
      y: 16,
      scale: 0.985,
      transformOrigin: "left center"
    }), i;
  }
  claimUserComponentMessage(e, t) {
    const a = this.claimMessage("user", ""), i = a.querySelector("[data-message-body]");
    return a.classList.add("wa-message--component", `wa-message--${e}`), i?.replaceChildren(t), a;
  }
  resetMessageClasses(e) {
    e.classList.remove(...ns), e.classList.remove("wa-message--first-active");
  }
  createCsvDropArea(e = {}) {
    const t = document.createElement("article");
    t.className = "wa-csv-drop", t.dataset.csvDropArea = "", t.dataset.dropState = "idle";
    const a = document.createElement("span");
    a.className = "wa-csv-drop__copy";
    const i = document.createElement("strong");
    i.textContent = e.title ?? "Drop CSV to clean audience data";
    const r = document.createElement("span");
    return r.textContent = e.detail ?? "Accepts webinar exports, event lists, and messy attendee spreadsheets.", a.append(i, r), t.append(a), t;
  }
  revealCsvDropArea(e) {
    return w.timeline().to(
      {},
      {
        duration: 1e-3,
        onStart: () => {
          this.showCsvDropArea(e, !0);
        }
      }
    );
  }
  revealCsvDropAreaWhenCursorEnters(e, t) {
    return w.timeline().to(
      {},
      {
        duration: 1e-3,
        onStart: () => {
          if (this.clearDropRevealWatcher(e), e.dataset.dropComplete === "true") return;
          if (this.isCursorInsideChatShell(t)) {
            this.showCsvDropArea(e, !1);
            return;
          }
          const a = () => {
            if (e.dataset.dropComplete === "true") {
              this.clearDropRevealWatcher(e);
              return;
            }
            this.isCursorInsideChatShell(t) && (this.clearDropRevealWatcher(e), this.showCsvDropArea(e, !1));
          }, i = () => w.ticker.remove(a);
          this.dropRevealWatchers.set(e, i), w.ticker.add(a);
        }
      }
    );
  }
  activateCsvDropArea(e) {
    return w.timeline().to(
      {},
      {
        duration: 1e-3,
        onStart: () => {
          e.dataset.dropState = "active";
        }
      }
    );
  }
  completeCsvDropArea(e) {
    return w.timeline().to(
      {},
      {
        duration: 1e-3,
        onStart: () => {
          e.dataset.dropState = "complete", e.dataset.dropComplete = "true", this.clearDropRevealWatcher(e), w.killTweensOf(e), w.set(e, { autoAlpha: 0 }), e.remove();
        }
      }
    );
  }
  showCsvDropArea(e, t) {
    e.dataset.dropComplete !== "true" && ((t || !e.dataset.dropState) && (e.dataset.dropState = "idle"), e.isConnected || this.chatShell.append(e), w.set(e, {
      autoAlpha: 1,
      transformOrigin: "center center"
    }));
  }
  clearDropRevealWatcher(e) {
    const t = this.dropRevealWatchers.get(e);
    t && (t(), this.dropRevealWatchers.delete(e));
  }
  isCursorInsideChatShell(e) {
    const t = e.readPosition(), a = this.root.getBoundingClientRect(), i = this.chatShell.getBoundingClientRect(), r = {
      x: a.left + t.x,
      y: a.top + t.y
    };
    return r.x >= i.left && r.x <= i.right && r.y >= i.top && r.y <= i.bottom;
  }
  createCursorFile(e, t = "CSV") {
    const a = document.createElement("div");
    a.className = "wa-cursor-file", a.setAttribute("aria-hidden", "true");
    const i = this.getCursorFileStackCount(e);
    return i > 1 ? (a.classList.add("wa-cursor-file--stack"), a.append(...this.createCursorFileStack(e, t, i))) : a.append(this.createCursorFileCard(e, t)), this.root.append(a), w.set(a, { autoAlpha: 0, scale: 0.88, x: -120, y: -120 }), a;
  }
  followCursorWithFile(e, t, a) {
    const i = e.offsetWidth || 154, r = e.offsetHeight || 42, n = w.quickSetter(e, "x", "px"), s = w.quickSetter(e, "y", "px"), l = { x: -120, y: -120 }, d = () => {
      const c = t.readPosition(), u = c.x - i * 0.5 + a.x, p = c.y - r * 0.5 + a.y;
      u !== l.x && (l.x = u, n(u)), p !== l.y && (l.y = p, s(p));
    };
    return d(), w.ticker.add(d), () => w.ticker.remove(d);
  }
  getCursorFileEntryOffset(e, t) {
    const a = e.offsetWidth || 154, i = t.readPosition(), r = this.root.getBoundingClientRect().width || window.innerWidth, n = i.x + a * 0.5, s = r + pa.offscreenMargin;
    return {
      x: Math.max(0, s - n),
      y: 0
    };
  }
  getCursorFileStackCount(e) {
    const t = e.match(/^(\d+)\s+/);
    return t ? Math.max(1, Math.min(4, Number(t[1]))) : 1;
  }
  createCursorFileStack(e, t, a) {
    return this.getCursorFileStackLabels(e, a).map((r, n) => {
      const s = this.createCursorFileCard(r, t);
      return s.classList.add("wa-cursor-file__card--stacked"), s;
    });
  }
  getCursorFileStackLabels(e, t) {
    return e.toLowerCase().includes("context") ? ["Battle cards", "ICP notes", "Voice doc", "Playbook"].slice(0, t) : Array.from({ length: t }, (a, i) => i === 0 ? e : `File ${i + 1}`);
  }
  createCursorFileCard(e, t) {
    const a = document.createElement("span");
    a.className = "wa-cursor-file__card";
    const i = document.createElement("span");
    i.className = "wa-cursor-file__icon", i.textContent = t;
    const r = document.createElement("span");
    return r.className = "wa-cursor-file__name", r.textContent = e, a.append(i, r), a;
  }
  createUploadedFile(e, t) {
    const a = document.createElement("div");
    a.className = "wa-uploaded-file";
    const i = document.createElement("span");
    i.className = "wa-uploaded-file__icon", i.textContent = "CSV";
    const r = document.createElement("span");
    r.className = "wa-uploaded-file__body";
    const n = document.createElement("strong");
    n.textContent = e;
    const s = document.createElement("span");
    return s.textContent = t, r.append(n, s), a.append(i, r), a;
  }
  createUploadedFiles(e) {
    const t = document.createElement("div");
    t.className = "wa-uploaded-files";
    const a = document.createElement("div");
    return a.className = "wa-uploaded-files__list", e.forEach((i) => {
      const r = this.createUploadedFile(i.name, i.detail), n = r.querySelector(".wa-uploaded-file__icon");
      n && (n.textContent = i.type ?? "DOC"), a.append(r);
    }), t.append(a), t;
  }
  streamThinkingHeader(e) {
    const t = e.querySelector(".wa-thinking__title"), a = t?.dataset.fullText ?? t?.textContent ?? "";
    return !t || !a ? w.timeline() : this.streamText(t, a, {
      duration: this.getStreamDuration(a, ds),
      targetForScroll: e.closest(".wa-message") ?? e
    });
  }
  streamThinkingStepLabel(e) {
    const t = e.querySelector(".wa-research-step__label"), a = t?.dataset.fullText ?? t?.textContent ?? "";
    return !t || !a ? w.timeline() : this.streamText(t, a, {
      duration: this.getStreamDuration(a, ls),
      targetForScroll: e.closest(".wa-message") ?? e
    });
  }
  streamThinkingStepDetail(e) {
    const t = e.querySelector(".wa-research-step__detail"), a = t?.dataset.fullText ?? "";
    return !t || !a ? w.timeline() : this.streamText(t, a, {
      duration: this.getStreamDuration(a, Xe),
      targetForScroll: e.closest(".wa-message") ?? e
    });
  }
  streamText(e, t, a) {
    const i = { count: 0 };
    let r = -1;
    return w.timeline().call(() => {
      e.dataset.streaming = "true", e.textContent = "", r = 0;
    }).to(i, {
      count: t.length,
      duration: a.duration,
      ease: "none",
      onUpdate: () => {
        const n = Math.round(i.count);
        n !== r && (r = n, e.textContent = t.slice(0, n), this.requestMessageScroll(a.targetForScroll));
      }
    }).call(() => {
      e.textContent = t, delete e.dataset.streaming, this.cancelScheduledScroll(), this.animateMessageScrollIntoView(a.targetForScroll, Ge.followDuration * 0.7);
    });
  }
  foldThinkingStep(e) {
    const t = e.querySelectorAll(
      ".wa-research-step__detail, .wa-sequence-thinking-progress, .wa-research-step__disclosure, .wa-research-step__chevron"
    );
    return w.timeline().to(t, {
      autoAlpha: 0,
      y: xi.detailOffsetY,
      scaleY: 0.96,
      transformOrigin: "left top",
      duration: xi.duration,
      ease: "power2.inOut"
    }).call(() => {
      e.dataset.stepState = "complete", this.animateMessageScrollIntoView(e.closest(".wa-message") ?? e);
    });
  }
  runThinkingSequence(e, t) {
    const a = w.timeline(), i = e.map((n, s) => this.createThinkingStep(n, s)), r = this.claimThinkingMessage(i, this.getThinkingElapsed(e.length));
    return a.call(() => {
      i.forEach((n) => {
        n.dataset.stepState = "pending";
      }), w.set(r.header, { autoAlpha: 0, y: 5 }), w.set(r.steps, { display: "grid", autoAlpha: 1, y: 0 }), w.set(i, { autoAlpha: 0, y: t.itemStartY, display: "none" });
    }).add(this.revealMessage(r.message)).to(r.header, {
      autoAlpha: 1,
      y: 0,
      duration: T(t.headerDuration),
      ease: "power2.out"
    }).add(this.streamThinkingHeader(r.header), "-=0.08"), e.forEach((n, s) => {
      const l = i[s], d = s === 0 ? "+=0" : `+=${t.hold}`;
      a.call(() => this.activateThinkingStep(i, s), void 0, d).to(
        l,
        {
          autoAlpha: 1,
          y: 0,
          duration: T(0.26),
          ease: "power2.out"
        },
        "<"
      ).add(this.streamThinkingStepLabel(l), Xe.startOverlap).add(this.streamThinkingStepDetail(l), "-=0.02").to({}, { duration: t.afterStepHold }).add(this.foldThinkingStep(l));
    }), a.call(() => {
      i.forEach((n) => {
        n.dataset.stepState = "complete";
      });
    }, void 0, `+=${t.finalHold}`);
  }
  activateThinkingStep(e, t) {
    e.forEach((a, i) => {
      i > t && (a.dataset.stepState = "pending", w.set(a, { display: "none" })), i === t && (a.dataset.stepState = "current", w.set(a, { display: "grid" }));
    });
  }
  getStreamDuration(e, t) {
    return this.prefersReducedMotion ? 0.01 : Math.min(t.maxDuration, Math.max(t.minDuration, e.length / t.charsPerSecond));
  }
  claimThinkingMessage(e, t) {
    const a = document.createElement("div");
    a.className = "wa-thinking-block";
    const i = document.createElement("div");
    i.className = "wa-thinking";
    const r = document.createElement("span");
    r.className = "wa-thinking__glyph", r.setAttribute("aria-hidden", "true");
    const n = document.createElement("span");
    n.className = "wa-thinking__title", n.dataset.fullText = "Thinking", n.textContent = "";
    const s = document.createElement("span");
    s.className = "wa-thinking__elapsed", s.textContent = t;
    const l = document.createElement("div");
    return l.className = "wa-research-steps", l.dataset.researchSteps = "", l.append(...e), i.append(r, n, s), a.append(i, l), {
      message: this.claimComponentMessage("thinking", a),
      header: i,
      steps: l
    };
  }
  createMessage(e) {
    const t = document.createElement("div");
    t.className = "wa-message", t.dataset.messageId = `message-${e}`;
    const a = document.createElement("div");
    a.className = "wa-message__avatar";
    const i = document.createElement("div");
    return i.className = "wa-message__body", i.dataset.messageBody = "", t.append(a, i), this.messagePool[e] = t, t;
  }
  createThinkingStep(e, t) {
    const a = document.createElement("div");
    a.className = "wa-research-step", a.dataset.researchStep = String(t), a.dataset.stepState = t === 0 ? "current" : "complete";
    const i = document.createElement("span");
    i.className = "wa-research-step__check", i.setAttribute("aria-hidden", "true");
    const r = document.createElement("span");
    r.className = "wa-research-step__body";
    const n = document.createElement("span");
    n.className = "wa-research-step__label", n.dataset.fullText = e, n.textContent = "";
    const s = document.createElement("span");
    s.className = "wa-research-step__detail", s.dataset.fullText = this.getThinkingDetail(e, t), s.textContent = "";
    const l = document.createElement("span");
    l.className = "wa-research-step__disclosure", l.textContent = t === 0 ? "Show more" : "Show less";
    const d = document.createElement("span");
    return d.className = "wa-research-step__chevron", d.setAttribute("aria-hidden", "true"), r.append(n, s, l), a.append(i, r, d), a;
  }
  getThinkingDetail(e, t) {
    const a = e.toLowerCase();
    return a.includes("source") || a.includes("data") ? "Searching across company records, contact databases, technographics, commerce signals, and local business indexes to find matches." : a.includes("company") ? "Reviewing public company information, website copy, firmographics, and recent external signals to understand the account context." : a.includes("icp") || a.includes("buyer") ? "Mapping personas, buying committees, seniority, department ownership, and account-fit signals from the available evidence." : a.includes("blog") ? "Reading launch notes, blog posts, category language, and positioning themes to infer the strongest outreach angles." : a.includes("career") || a.includes("hiring") ? "Checking careers pages, new roles, team growth, and hiring language to understand near-term operating priorities." : a.includes("gtm") ? "Connecting signal strength, audience fit, and likely urgency to decide which outbound motion is most likely to convert." : a.includes("funding") || a.includes("round") ? "Reviewing recent funding announcements, raise dates, investor notes, and company updates from the past three months." : a.includes("transcript") || a.includes("notes") ? "Extracting CRM fields, next steps, risk language, and owner context from the conversation transcript." : a.includes("logs") || a.includes("auth") ? "Inspecting connector logs, authentication events, permission changes, and recent workspace activity." : a.includes("account") || a.includes("signals") ? "Combining account history with public source changes and recent activity to prepare a concise research brief." : t % 2 === 0 ? "Inspecting relevant records, comparing source confidence, and filtering out low-quality matches before returning results." : "Cross-checking the strongest evidence across sources so the final answer only includes useful, defensible results.";
  }
  getThinkingElapsed(e) {
    return e <= 1 ? "4m 12s" : e <= 3 ? "4m 20s" : "4m 50s";
  }
  createSectionHeader(e, t, a, i) {
    const r = document.createElement("div");
    r.className = `${e}__header`;
    const n = document.createElement("h3");
    if (n.className = `${e}__title`, n.textContent = t, r.append(n), i && r.append(i), a) {
      const s = document.createElement("p");
      s.className = `${e}__subtitle`, s.textContent = a, r.append(s);
    }
    return r;
  }
  claimCard(e) {
    const t = this.cardIndex, a = this.cardPool[t] ?? this.createCard(t), i = a.querySelector("[data-result-kicker]"), r = a.querySelector("[data-result-title]"), n = a.querySelector("[data-result-body]"), s = a.querySelector("[data-result-rows]"), l = a.querySelector("[data-result-actions]");
    return this.cardIndex += 1, a.dataset.resultCard = e.id, a.style.display = "none", i && (i.textContent = e.kicker ?? "Result"), r && (r.textContent = e.title), n && (n.textContent = e.body ?? ""), s?.replaceChildren(
      ...(e.rows ?? []).map((d, c) => {
        const u = document.createElement("li");
        u.className = "wa-result-row", u.dataset.resultRow = `${e.id}-${c}`, u.dataset.tone = d.tone ?? "neutral";
        const p = document.createElement("span");
        p.textContent = d.label;
        const m = document.createElement("strong");
        return m.textContent = d.value, u.append(p, m), u;
      })
    ), l?.replaceChildren(
      ...(e.actions ?? []).map((d) => {
        const c = document.createElement("button");
        return c.className = "wa-result-action", c.type = "button", c.textContent = d.label, c.dataset.resultAction = d.targetId, c;
      })
    ), w.set(a, {
      autoAlpha: 0,
      y: 18,
      scale: 0.985,
      transformOrigin: "center top"
    }), w.set(a.querySelectorAll(".wa-result-row, .wa-result-action"), {
      autoAlpha: 0,
      y: 8
    }), a;
  }
  createCard(e) {
    const t = document.createElement("article");
    return t.className = "wa-result-card", t.dataset.resultCard = `result-${e}`, t.innerHTML = `
      <div class="wa-result-card__topline" data-result-kicker></div>
      <h3 class="wa-result-card__title" data-result-title></h3>
      <p class="wa-result-card__body" data-result-body></p>
      <ul class="wa-result-card__rows" data-result-rows></ul>
      <div class="wa-result-card__actions" data-result-actions></div>
    `, this.cardPool[e] = t, t;
  }
  createDataTable(e) {
    const t = document.createElement("article"), a = this.getDataTablePages(e), i = e.pagination?.activePage ?? a[0]?.page ?? 1;
    t.className = "wa-data-table", t.dataset.dataTable = e.id, t.dataset.tableVariant = e.variant ?? "default", t.dataset.columnCount = String(e.columns.length), t.dataset.activePage = String(i), this.expectedDataTablePages.set(e.id, i), t.style.setProperty(
      "--wa-data-table-columns",
      e.columns.map((d) => d.width ?? "minmax(0, 1fr)").join(" ")
    );
    const r = document.createElement("div");
    r.className = "wa-data-table__header";
    const n = document.createElement("div");
    n.className = "wa-data-table__meta", n.textContent = e.eyebrow ?? "Data marketplace";
    const s = document.createElement("h3");
    if (s.className = "wa-data-table__title", s.textContent = e.title, r.append(n, s), e.count) {
      const d = document.createElement("span");
      d.className = "wa-data-table__count", d.textContent = e.count, r.append(d);
    }
    const l = document.createElement("div");
    l.className = "wa-data-table__grid", l.append(this.createDataTableRow("header", e.columns, {}, e.id));
    for (const d of a)
      for (const c of d.rows) {
        const u = this.createDataTableRow(c.id, e.columns, c.values, e.id, d.page);
        d.page !== i && (u.style.display = "none", w.set(u, { autoAlpha: 0, y: 6 })), l.append(u);
      }
    return t.append(r, l), (e.actions?.length || e.pagination) && t.append(this.createDataTableFooter(e, a, i)), t;
  }
  createDataTableRow(e, t, a, i, r) {
    const n = document.createElement("div");
    n.className = "wa-data-table__row", n.dataset.tableRow = e;
    const s = e === "header";
    s && (n.dataset.header = "true"), !s && a.source && (n.dataset.source = a.source), !s && r !== void 0 && (n.dataset.page = String(r));
    for (const l of t) {
      const d = document.createElement(s ? "strong" : "span");
      if (d.className = "wa-data-table__cell", d.dataset.columnKey = l.key, s)
        d.textContent = l.label;
      else if (l.key === "name" || l.key === "contact")
        d.append(this.createDataTablePerson(a, a[l.key] ?? ""));
      else {
        const c = a[l.key] ?? "";
        d.textContent = c || "-", c || (d.dataset.empty = "true");
      }
      n.append(d);
    }
    if (s) {
      const l = document.createElement("button");
      l.className = "wa-data-table__add", l.type = "button", l.tabIndex = -1, l.setAttribute("aria-label", `Add row to ${i}`), l.textContent = "+", n.append(l);
    }
    return n;
  }
  getDataTablePages(e) {
    return e.pagination?.pages.length ? e.pagination.pages : [
      {
        page: 1,
        range: e.count ?? `${e.rows.length} records`,
        rows: e.rows
      }
    ];
  }
  createDataTableFooter(e, t, a) {
    const i = document.createElement("div");
    if (i.className = "wa-data-table__footer", e.actions?.length) {
      const r = document.createElement("div");
      r.className = "wa-data-table__actions";
      for (const n of e.actions)
        r.append(this.createDataTableAction(e.id, n));
      i.append(r);
    }
    if (e.pagination) {
      const r = document.createElement("div");
      r.className = "wa-data-table__pagination";
      const n = t.find((d) => d.page === a)?.range ?? t[0]?.range ?? "", s = document.createElement("span");
      s.className = "wa-data-table__range", s.dataset.tablePageRange = "", s.textContent = n;
      const l = document.createElement("span");
      l.className = "wa-data-table__page-controls";
      for (const d of t) {
        const c = document.createElement("button"), u = d.page === a;
        c.className = "wa-data-table__page-button", c.type = "button", c.tabIndex = -1, c.dataset.tablePageButton = String(d.page), c.dataset.pageRange = d.range, c.dataset.active = String(u), c.setAttribute("aria-label", `Show page ${d.page}`), c.setAttribute("aria-current", u ? "page" : "false"), c.textContent = String(d.page), l.append(c);
      }
      r.append(s, l), i.append(r);
    }
    return i;
  }
  createDataTableAction(e, t) {
    const a = document.createElement("button");
    if (a.className = "wa-data-table-action", a.type = "button", a.tabIndex = -1, a.dataset.tableAction = t.id, a.dataset.tableActionTable = e, a.dataset.actionVariant = t.variant ?? "secondary", a.dataset.tooltipVisible = "false", a.setAttribute("aria-label", t.tooltip ?? t.label), a.append(this.createDataTableActionIcon(t.icon ?? "email")), t.badge) {
      a.dataset.tooltipBadge = t.badge;
      const i = document.createElement("span");
      i.className = "wa-data-table-action__badge", i.textContent = t.badge, a.append(i);
    }
    if (t.tooltip) {
      const i = document.createElement("span");
      i.className = "wa-data-table-action__tooltip", i.textContent = t.tooltip, a.append(i);
    }
    return a;
  }
  createDataTableActionIcon(e) {
    const t = document.createElementNS("http://www.w3.org/2000/svg", "svg"), a = e === "dialer" ? [
      "M7.2 5.6c.5 4 2.7 6.2 6.2 7.2l1.9-1.9c.3-.3.7-.4 1.1-.2l3.1 1.2c.5.2.8.6.8 1.1v3.1c0 .7-.5 1.2-1.2 1.2C10 17.3 2.7 10 2.7 1.9 2.7 1.2 3.2.7 3.9.7H7c.5 0 .9.3 1.1.8l1.2 3.1c.1.4.1.8-.2 1.1L7.2 7.6"
    ] : [
      "M3.5 5.5h17v13h-17z",
      "m4.2 6.1 4.9 3.8a2.2 2.2 0 0 0 2.8 0l4.9-3.8"
    ];
    t.classList.add("wa-data-table-action__icon"), t.setAttribute("viewBox", "0 0 24 24"), t.setAttribute("aria-hidden", "true"), t.setAttribute("focusable", "false");
    for (const i of a) {
      const r = document.createElementNS("http://www.w3.org/2000/svg", "path");
      r.setAttribute("d", i), t.append(r);
    }
    return t;
  }
  createDataTableFloatingTooltip() {
    const e = document.createElement("span");
    return e.className = "wa-data-table-floating-tooltip", e.dataset.visible = "false", e.setAttribute("aria-hidden", "true"), e;
  }
  showTooltipForDataTableControl(e) {
    const t = this.getDataTableControlTooltipText(e);
    if (!t) {
      this.hideDataTableControlTooltip();
      return;
    }
    this.setDataTableControlTooltipVisible(e), this.showDataTableControlTooltip(e, t);
  }
  showDataTableControlTooltip(e, t) {
    const a = this.chatShell.getBoundingClientRect(), i = e.getBoundingClientRect(), r = i.left - a.left + i.width * 0.5, n = i.top - a.top - 7, s = document.createElement("span"), l = e.dataset.tooltipBadge?.trim();
    if (s.className = "wa-data-table-floating-tooltip__label", s.textContent = t, this.tableControlTooltip.replaceChildren(s), l) {
      const d = document.createElement("span");
      d.className = "wa-data-table-floating-tooltip__badge", d.textContent = l, this.tableControlTooltip.append(d);
    }
    this.tableControlTooltip.dataset.hasBadge = String(!!l), this.tableControlTooltip.dataset.visible = "true", w.set(this.tableControlTooltip, {
      x: r,
      y: n,
      xPercent: -50,
      yPercent: -100
    });
  }
  hideDataTableControlTooltip() {
    this.tableControlTooltip.dataset.visible = "false", this.tableControlTooltip.dataset.hasBadge = "false", this.queryElements(this.chatShell, "[data-table-action]").forEach((e) => {
      e.dataset.tooltipVisible = "false";
    });
  }
  setDataTableControlTooltipVisible(e) {
    const t = e.closest("[data-data-table]");
    (t ? this.queryElements(t, "[data-table-action]") : this.queryElements(this.chatShell, "[data-table-action]")).forEach((i) => {
      i.dataset.tooltipVisible = String(i === e);
    });
  }
  getDataTableControlTooltipText(e) {
    return e.querySelector(".wa-data-table-action__tooltip")?.textContent?.trim() || e.dataset.tooltip || e.getAttribute("aria-label") || "";
  }
  findDataTableControl(e) {
    return e instanceof Element ? e.closest("[data-table-action]") : null;
  }
  findDataTablePageButton(e) {
    return e instanceof Element ? e.closest("[data-table-page-button]") : null;
  }
  findDataTable(e) {
    return this.queryElements(this.root, "[data-data-table]").find((t) => t.dataset.dataTable === e) ?? null;
  }
  getVisibleDataTableRows(e) {
    return this.queryElements(e, ".wa-data-table__row[data-page]").filter((t) => t.style.display !== "none");
  }
  createDataTablePerson(e, t) {
    const a = document.createElement("span");
    a.className = "wa-data-table-person";
    const i = document.createElement("span");
    i.className = "wa-data-table-person__avatar-wrap";
    const r = document.createElement("span");
    if (r.className = "wa-data-table-person__avatar", r.dataset.avatarTone = e.avatarTone ?? "1", e.avatarUrl) {
      const l = document.createElement("img");
      l.alt = "", l.decoding = "async", l.loading = "lazy", l.referrerPolicy = "no-referrer", l.src = e.avatarUrl, r.append(l);
    } else
      r.textContent = e.avatar ?? this.getInitials(t);
    const n = document.createElement("span");
    n.className = "wa-data-table-person__source", n.dataset.source = e.source ?? "default", n.setAttribute("aria-hidden", "true");
    const s = document.createElement("span");
    return s.className = "wa-data-table-person__name", s.textContent = t || "-", i.append(r, n), a.append(i, s), a;
  }
  getInitials(e) {
    return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
  }
  createEnrichmentPanel(e) {
    const t = document.createElement("article");
    t.className = "wa-enrichment-panel wa-waterfall-thinking", t.dataset.enrichmentPanel = e.id;
    const a = document.createElement("div");
    a.className = "wa-enrichment-panel__header";
    const i = document.createElement("span");
    i.className = "wa-thinking__glyph", i.setAttribute("aria-hidden", "true");
    const r = document.createElement("span");
    r.className = "wa-thinking__title", r.textContent = "Enriching";
    const n = document.createElement("span");
    n.className = "wa-thinking__elapsed", n.textContent = "4m 20s", a.append(i, r, n);
    const s = document.createElement("div");
    return s.className = "wa-waterfall-rows", s.append(
      this.createWaterfallRow("Work email", "complete", [
        { label: "Apollo", state: "complete" },
        { label: "ZoomInfo", state: "failed" }
      ]),
      this.createWaterfallRow("Mobile number", "failed", [
        { label: "Apollo", state: "failed" },
        { label: "FullEnrich", state: "failed" }
      ]),
      this.createWaterfallRow("LinkedIn", "pending", [
        { label: "Apollo", state: "pending" },
        { label: "ZoomInfo", state: "pending" }
      ]),
      this.createWaterfallRow("Title", "pending", [
        { label: "Apollo", state: "pending" },
        { label: "ZoomInfo", state: "pending" },
        { label: "FullEnrich", state: "pending" }
      ])
    ), t.append(a, s), t;
  }
  createWaterfallRow(e, t, a) {
    const i = document.createElement("div");
    i.className = "wa-waterfall-row", i.dataset.stepState = t;
    const r = document.createElement("span");
    r.className = "wa-waterfall-row__status", r.setAttribute("aria-hidden", "true");
    const n = document.createElement("span");
    n.className = "wa-waterfall-row__label", n.textContent = e;
    const s = document.createElement("span");
    return s.className = "wa-waterfall-row__chips", s.append(
      ...a.map((l) => {
        const d = document.createElement("span");
        return d.className = "wa-waterfall-chip", d.dataset.stepState = l.state, d.textContent = l.label, d;
      })
    ), i.append(r, n, s), i;
  }
  createStrategyPlan(e) {
    const t = document.createElement("article");
    t.className = "wa-strategy-plan", t.dataset.strategyPlan = e.id;
    const a = document.createElement("div");
    a.className = "wa-strategy-plan__label", a.textContent = e.label;
    const i = document.createElement("h3");
    i.className = "wa-strategy-plan__title", i.textContent = e.title;
    const r = document.createElement("p");
    return r.className = "wa-strategy-plan__summary", r.textContent = this.getStrategyPlanSummary(e), t.append(a, i, r), t;
  }
  getStrategyPlanSummary(e) {
    return e.summary ? e.summary : [e.audience, e.motion, e.proof].filter(Boolean).join(". ");
  }
  createDataSourcesGrid(e) {
    const t = document.createElement("section");
    t.className = "wa-data-source-grid", t.dataset.dataSourcesGrid = e.id;
    const a = this.createSectionHeader("wa-data-source-grid", e.title, e.subtitle), i = document.createElement("div");
    return i.className = "wa-data-source-grid__list", e.sources.forEach((r) => {
      i.append(this.createDataSourceCard(r));
    }), t.append(a, i), t;
  }
  createMarketingDataSourcesGrid(e) {
    const t = this.createDataSourcesGrid(e), a = document.createElement("div"), i = t.querySelector(".wa-data-source-grid__header");
    t.classList.add("wa-data-source-grid--marketing"), t.dataset.marketingDataSourcesGrid = e.id, a.className = "wa-data-source-grid__groups";
    for (const r of this.groupDataSources(e.sources)) {
      const n = document.createElement("section"), s = document.createElement("h4"), l = document.createElement("div");
      n.className = "wa-data-source-group", s.className = "wa-data-source-group__title", s.textContent = r.category, l.className = "wa-data-source-grid__list", r.sources.forEach((d) => {
        l.append(this.createDataVendorLogo(d));
      }), n.append(s, l), a.append(n);
    }
    return t.replaceChildren(...this.compactElements(i, a)), t;
  }
  createDataVendorLogo(e) {
    const t = document.createElement("span");
    t.className = "wa-data-vendor-logo", t.dataset.vendorLogo = e.id, t.title = e.detail;
    const a = e.logoSrc ? document.createElement("img") : document.createElement("span");
    return e.logoSrc && a instanceof HTMLImageElement ? (t.classList.add("wa-data-vendor-logo--image"), a.className = "wa-data-vendor-logo__image", a.alt = e.name, a.decoding = "async", a.draggable = !1, a.loading = "lazy", a.src = e.logoSrc) : (a.className = "wa-data-vendor-logo__mark", a.textContent = e.name), t.append(a), t;
  }
  groupDataSources(e) {
    const t = [], a = /* @__PURE__ */ new Map();
    return e.forEach((i) => {
      const r = i.category ?? "Data partners";
      let n = a.get(r);
      n || (n = { category: r, sources: [] }, a.set(r, n), t.push(n)), n.sources.push(i);
    }), t;
  }
  createDataSourceCard(e) {
    const t = document.createElement("article");
    t.className = "wa-data-source-card", t.dataset.dataSource = e.id;
    const a = document.createElement("span");
    a.className = "wa-data-source-card__icon", a.setAttribute("aria-hidden", "true");
    const i = document.createElement("span");
    i.className = "wa-data-source-card__copy";
    const r = document.createElement("strong");
    r.textContent = e.name;
    const n = document.createElement("span");
    return n.textContent = e.detail, i.append(r, n), t.append(a, i), t;
  }
  createOutreachStyleProfile(e) {
    const t = document.createElement("section");
    t.className = "wa-style-profile", t.dataset.styleProfile = e.id;
    const a = this.createSectionHeader("wa-style-profile", e.title, e.subtitle), i = document.createElement("div");
    if (i.className = "wa-style-profile__rows", e.signals.forEach((r) => {
      const n = document.createElement("div");
      n.className = "wa-style-profile__row";
      const s = document.createElement("span");
      s.textContent = r.label;
      const l = document.createElement("strong");
      l.textContent = r.value, n.append(s, l), i.append(n);
    }), t.append(a, i), e.examples?.length) {
      const r = document.createElement("div");
      r.className = "wa-style-profile__examples", e.examples.forEach((n) => {
        const s = document.createElement("blockquote");
        s.className = "wa-style-profile__example", s.textContent = n, r.append(s);
      }), t.append(r);
    }
    return t;
  }
  createProximityLeadList(e) {
    const t = document.createElement("section");
    t.className = "wa-proximity-list", t.dataset.proximityList = e.id;
    const a = this.createSectionHeader("wa-proximity-list", e.title, e.subtitle), i = document.createElement("div");
    return i.className = "wa-proximity-list__rows", e.leads.forEach((r) => {
      const n = document.createElement("article");
      n.className = "wa-proximity-lead", n.dataset.proximityScore = r.score;
      const s = document.createElement("span");
      s.className = "wa-proximity-lead__rank", s.textContent = r.rank;
      const l = document.createElement("div");
      l.className = "wa-proximity-lead__body";
      const d = document.createElement("div");
      d.className = "wa-proximity-lead__top";
      const c = document.createElement("span");
      c.className = "wa-proximity-lead__identity";
      const u = document.createElement("strong");
      u.textContent = r.name;
      const p = document.createElement("span");
      p.textContent = `${r.title}, ${r.company}`, c.append(u, p);
      const m = document.createElement("span");
      m.className = "wa-proximity-lead__score", m.textContent = r.score, d.append(c, m);
      const g = document.createElement("p");
      g.className = "wa-proximity-lead__personalization", g.textContent = r.personalization;
      const h = document.createElement("span");
      h.className = "wa-proximity-lead__proximity", h.textContent = r.proximity, l.append(d, g, h), n.append(s, l), i.append(n);
    }), t.append(a, i), t;
  }
  createPersonalizationSwipeGame(e) {
    const t = document.createElement("section");
    t.className = "wa-mini-game wa-swipe-game", t.dataset.personalizationSwipeGame = e.id;
    const a = this.createSectionHeader(
      "wa-mini-game",
      e.title,
      e.subtitle ?? "Swipe to teach the agent which personalization patterns sound like you."
    ), i = document.createElement("span");
    i.className = "wa-mini-game__eyebrow", i.textContent = "Mini game", a.prepend(i);
    const r = document.createElement("p");
    r.className = "wa-swipe-game__prompt", r.textContent = e.prompt ?? "Swipe toward the personalization you would use.";
    const n = document.createElement("div");
    n.className = "wa-swipe-game__axis";
    const s = document.createElement("span");
    s.textContent = e.labels?.avoid ?? "Never me";
    const l = document.createElement("span");
    l.dataset.swipeProgress = "";
    const d = document.createElement("span");
    d.textContent = e.labels?.use ?? "I'd use it", n.append(s, l, d);
    const c = document.createElement("div");
    c.className = "wa-swipe-game__stack";
    const u = document.createElement("div");
    u.className = "wa-swipe-game__glow", u.setAttribute("aria-hidden", "true"), c.append(u), e.signals.forEach((g, h) => {
      const f = document.createElement("article");
      f.className = "wa-swipe-card", f.dataset.swipeCard = g.id, f.dataset.swipeDecision = g.decision, f.dataset.cardIndex = String(h);
      const b = document.createElement("strong");
      b.className = "wa-swipe-card__label", b.textContent = g.label;
      const y = document.createElement("span");
      y.className = "wa-swipe-card__detail", y.textContent = g.detail, f.append(b, y), c.append(f);
    });
    const p = document.createElement("div");
    p.className = "wa-swipe-game__complete", p.dataset.swipeComplete = "", p.textContent = e.completeLabel ?? `${e.signals.length} choices captured`, c.append(p), w.set(p, { autoAlpha: 0, y: 12, scale: 0.96 });
    const m = document.createElement("div");
    return m.className = "wa-swipe-game__actions", m.append(
      this.createSwipeActionButton("avoid", e.labels?.avoid ?? "Never me"),
      this.createSwipeActionButton("use", e.labels?.use ?? "I'd use it")
    ), t.append(a, r, n, c, m), this.updateSwipeGameProgress(t, 0), t;
  }
  createSwipeActionButton(e, t) {
    const a = document.createElement("button");
    return a.className = "wa-swipe-game__action", a.type = "button", a.tabIndex = -1, a.dataset.swipeAction = e, a.setAttribute("aria-label", t), a;
  }
  layoutSwipeGameCards(e, t) {
    const a = this.getSwipeCards(e);
    a.forEach((i, r) => {
      const n = r - t, s = n >= 0 && n < 3;
      i.dataset.swipeState = n === 0 ? "active" : n > 0 ? "queued" : "done", w.set(i, {
        display: n >= 0 ? "grid" : "none",
        x: 0,
        y: Math.max(0, n) * 8,
        scale: 1 - Math.max(0, n) * 0.035,
        rotation: n === 1 ? -1.15 : n === 2 ? 1.05 : 0,
        autoAlpha: s ? 1 - Math.max(0, n) * 0.18 : 0,
        zIndex: a.length - r,
        transformOrigin: "center center",
        force3D: !0
      });
    }), this.updateSwipeGameProgress(e, t);
  }
  updateSwipeGameProgress(e, t) {
    const a = e.querySelector("[data-swipe-progress]"), i = this.getSwipeCards(e).length, r = Math.min(t + 1, i);
    a && (a.textContent = `${r}/${i}`);
  }
  createSequenceEngagement(e) {
    const t = document.createElement("section");
    t.className = "wa-sequence-engagement", t.dataset.sequenceEngagement = e.id, t.dataset.peopleCount = e.peopleCount;
    const a = document.createElement("span");
    a.className = "wa-sequence-engagement__count", a.dataset.sequenceCount = "", a.textContent = e.sequences.some((p) => p.steps?.length) ? this.getSequenceCountLabel(0, e.peopleCount) : e.peopleCount;
    const i = this.createSectionHeader("wa-sequence-engagement", e.title, e.subtitle, a), r = document.createElement("div");
    r.className = "wa-sequence-engagement__sequences";
    const n = e.sequences.some((p) => p.steps?.length);
    let s = null;
    if (n) {
      s = document.createElement("div"), s.className = "wa-sequence-people", s.setAttribute("aria-label", "Sequence people");
      const p = document.createElement("button"), m = document.createElement("div"), g = document.createElement("span"), h = document.createElement("span"), f = document.createElement("span"), b = document.createElement("strong"), y = document.createElement("span"), _ = document.createElement("button"), v = e.sequences[0];
      p.className = "wa-sequence-person-button", p.type = "button", p.tabIndex = -1, p.dataset.sequencePersonButton = `${e.id}:prev`, p.dataset.direction = "prev", p.dataset.currentIndex = "0", p.setAttribute("aria-label", "Previous person"), p.textContent = "‹", p.addEventListener("click", () => {
        const C = (Number(p.dataset.currentIndex ?? "0") - 1 + e.sequences.length) % e.sequences.length;
        this.sequencePerson(e.id, C).play();
      }), m.className = "wa-sequence-person-current", g.className = "wa-sequence-person-current__avatar", g.dataset.avatarTone = "1", h.textContent = this.getInitials(v?.name ?? ""), g.append(h), f.className = "wa-sequence-person-current__copy", b.textContent = v?.name ?? "", y.textContent = [v?.title, v?.company].filter(Boolean).join(", "), f.append(b, y), m.append(g, f), _.className = "wa-sequence-person-button", _.type = "button", _.tabIndex = -1, _.dataset.sequencePersonButton = `${e.id}:next`, _.dataset.direction = "next", _.dataset.currentIndex = "0", _.setAttribute("aria-label", "Next person"), _.textContent = "›", _.addEventListener("click", () => {
        const C = (Number(_.dataset.currentIndex ?? "0") + 1) % e.sequences.length;
        this.sequencePerson(e.id, C).play();
      }), s.append(p, m, _);
    }
    e.sequences.forEach((p, m) => {
      const g = document.createElement("article");
      g.className = "wa-sequence-card", g.dataset.sequenceCard = `${e.id}:${m}`, g.dataset.sequenceIndex = String(m), g.dataset.active = String(m === 0), m !== 0 && (g.style.display = "none", w.set(g, { autoAlpha: 0, y: 8 }));
      const h = document.createElement("div");
      h.className = "wa-sequence-card__top";
      const f = document.createElement("span");
      f.className = "wa-sequence-card__identity";
      const b = document.createElement("strong");
      b.textContent = p.name;
      const y = document.createElement("span");
      y.textContent = [p.title, p.company].filter(Boolean).join(", "), f.append(b, y);
      const _ = document.createElement("span");
      _.className = "wa-sequence-card__label", _.textContent = p.signal ?? "Personalized", h.append(f, _);
      const v = document.createElement("p");
      v.className = "wa-sequence-card__subject", v.textContent = p.subject;
      const x = document.createElement("p");
      if (x.className = "wa-sequence-card__personalization", x.textContent = p.personalization, g.append(h, v, x), p.steps?.length) {
        const C = document.createElement("div");
        C.className = "wa-sequence-steps", p.steps.forEach((A, k) => {
          const S = document.createElement("div"), E = document.createElement("span"), N = document.createElement("span"), D = document.createElement("strong"), I = document.createElement("span");
          S.className = "wa-sequence-step", S.dataset.stepOpen = String(k === 0), S.dataset.channel = this.slugChannelName(A.channel), E.className = "wa-sequence-step__channel", E.textContent = A.channel, N.className = "wa-sequence-step__copy", D.textContent = A.label, I.textContent = A.body, N.append(D, I), S.append(E, N), C.append(S);
        }), g.append(C);
      }
      r.append(g);
    });
    const l = document.createElement("div");
    l.className = "wa-engage-channels", e.channels.forEach((p) => {
      const m = document.createElement("button");
      m.className = "wa-engage-channel", m.type = "button", m.tabIndex = -1;
      const g = document.createElement("span");
      g.className = "wa-engage-channel__copy";
      const h = document.createElement("strong");
      h.textContent = p.label;
      const f = document.createElement("span");
      if (f.textContent = p.detail, g.append(h, f), m.append(g), p.badge) {
        const b = document.createElement("span");
        b.className = "wa-engage-channel__badge", b.textContent = p.badge, m.dataset.badge = p.badge.toLowerCase(), m.append(b);
      }
      l.append(m);
    });
    const d = document.createElement("button"), c = document.createElement("span"), u = document.createElement("span");
    return d.className = "wa-sequence-kickoff", d.type = "button", d.tabIndex = -1, d.dataset.sequenceKickoff = e.id, d.setAttribute("aria-label", e.launchLabel ?? "Kick off sequence"), c.className = "wa-sequence-kickoff__label", c.textContent = e.launchLabel ?? "Kick off sequence", u.className = "wa-sequence-kickoff__detail", u.textContent = `Launch tailored touches for ${e.peopleCount}`, d.append(c, u), d.addEventListener("click", () => {
      this.sequenceKickoff(e.id).play();
    }), n ? t.append(...this.compactElements(i, s, r, d)) : t.append(i, r, l), t;
  }
  createSequenceThinkingStep(e, t, a, i) {
    const r = this.createThinkingStep(e, a), n = r.querySelector(".wa-research-step__detail"), s = r.querySelector(".wa-research-step__body");
    if (n && (n.dataset.fullText = t), typeof i == "number" && s) {
      const l = document.createElement("span"), d = document.createElement("span"), c = document.createElement("span"), u = document.createElement("span");
      l.className = "wa-sequence-thinking-progress", l.dataset.sequenceThinkingTrack = e, d.className = "wa-sequence-thinking-progress__count", d.textContent = `1/${i}`, c.className = "wa-sequence-thinking-progress__bar", u.setAttribute("aria-hidden", "true"), c.append(u), l.append(d, c), s.append(l);
    }
    return r;
  }
  findSequenceEngagement(e) {
    return this.queryElements(this.root, "[data-sequence-engagement]").find((t) => t.dataset.sequenceEngagement === e) ?? null;
  }
  setActiveSequencePerson(e, t) {
    const a = this.queryElements(e, "[data-sequence-card]"), i = this.queryElements(e, "[data-sequence-person-button]"), r = e.querySelector("[data-sequence-count]");
    a.forEach((n) => {
      const s = Number(n.dataset.sequenceIndex) === t;
      n.dataset.active = String(s), n.style.display = s ? "grid" : "none", w.set(n, { autoAlpha: s ? 1 : 0, y: 0 });
    }), i.forEach((n) => {
      n.dataset.currentIndex = String(t);
    }), r && (r.textContent = this.getSequenceCountLabel(t, e.dataset.peopleCount ?? "")), this.updateSequencePersonIdentity(e, t);
  }
  getSequenceCountLabel(e, t) {
    const a = t.match(/\d+/)?.[0] ?? t;
    return `${e + 1}/${a}`;
  }
  updateSequencePersonIdentity(e, t) {
    const a = this.queryElements(e, "[data-sequence-card]").find((c) => Number(c.dataset.sequenceIndex) === t), i = a?.querySelector(".wa-sequence-card__identity strong")?.textContent ?? "", r = a?.querySelector(".wa-sequence-card__identity span")?.textContent ?? "", n = e.querySelector(".wa-sequence-person-current__avatar"), s = n?.querySelector("span"), l = e.querySelector(".wa-sequence-person-current__copy strong"), d = e.querySelector(".wa-sequence-person-current__copy span");
    n && (n.dataset.avatarTone = String(t % 6 + 1)), s && (s.textContent = this.getInitials(i)), l && (l.textContent = i), d && (d.textContent = r);
  }
  slugChannelName(e) {
    return e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }
  revealCard(e) {
    const t = this.claimComponentMessage("result", e), a = e.querySelectorAll(".wa-result-row, .wa-result-action");
    return w.timeline().call(() => {
      e.style.display = "grid";
    }).add(this.revealMessageWithChildren(t, e, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: T(0.48),
      ease: "back.out(1.45)"
    }), 0).to(
      a,
      {
        autoAlpha: 1,
        y: 0,
        duration: T(0.32),
        ease: "power2.out",
        stagger: 0.06
      },
      "-=0.22"
    );
  }
  highlightCardTarget(e, t) {
    const a = typeof t == "string" ? e.querySelector(t) : t ?? e.querySelector(".wa-result-row, .wa-result-action") ?? e, i = w.timeline();
    return a && i.to(a, {
      backgroundColor: "rgba(213, 255, 79, 0.22)",
      scale: 1.018,
      duration: T(0.16),
      ease: "power2.out"
    }).to(a, {
      backgroundColor: "rgba(255, 255, 255, 0)",
      scale: 1,
      duration: T(0.42),
      ease: "power2.out"
    }), i;
  }
  required(e) {
    const t = this.root.querySelector(e);
    if (!t)
      throw new Error(`ChatbotStories: required element missing: ${e}`);
    return t;
  }
  queryElements(e, t) {
    return Array.from(e.querySelectorAll(t));
  }
  compactElements(...e) {
    return e.filter((t) => !!t);
  }
  getSwipeCards(e) {
    return e ? this.queryElements(e, "[data-swipe-card]") : [];
  }
  escapeSelectorValue(e) {
    return typeof CSS < "u" && "escape" in CSS ? CSS.escape(e) : e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  }
  clearCustomResults() {
    this.root.querySelectorAll("[data-result-grid] .wa-strategy-plan, [data-result-grid] .wa-data-table, [data-result-grid] .wa-enrichment-panel").forEach((e) => {
      e.remove();
    });
  }
  clearMarketingPanels() {
    this.root.querySelectorAll(us).forEach((e) => {
      w.killTweensOf(e), e.remove();
    });
  }
  registerTransientElement(e, t) {
    this.transientCleanups.push(() => {
      t?.(), w.killTweensOf(e), e.remove();
    });
  }
  clearTransientElements() {
    for (const e of this.transientCleanups) e();
    this.transientCleanups = [], this.root.querySelectorAll(Ai).forEach((e) => {
      w.killTweensOf(e), e.remove();
    });
  }
  getMessageScrollTarget(e) {
    const t = e.offsetTop + e.offsetHeight + this.getThreadBottomPadding() - this.thread.clientHeight;
    return this.composerVisible ? Math.max(0, t, this.getThreadBottomScrollTarget()) : Math.max(0, t);
  }
  getThreadBottomPadding() {
    return Number.parseFloat(getComputedStyle(this.thread).paddingBottom) || 0;
  }
  getThreadBottomScrollTarget() {
    return Math.max(0, this.thread.scrollHeight - this.thread.clientHeight);
  }
  pinThreadToBottom() {
    this.thread.scrollTop = this.getThreadBottomScrollTarget();
  }
  animateMessageScrollIntoView(e, t = Ge.followDuration) {
    const a = this.getMessageScrollTarget(e);
    if (this.prefersReducedMotion || Math.abs(this.thread.scrollTop - a) < 1) {
      this.thread.scrollTop = a;
      return;
    }
    this.scrollTween?.kill(), this.scrollTween = w.to(this.thread, {
      scrollTop: a,
      duration: t,
      ease: Ge.followEase,
      overwrite: "auto",
      onComplete: () => {
        this.scrollTween = null;
      }
    });
  }
  requestMessageScroll(e) {
    const t = performance.now();
    this.scheduledScrollMessage = e, !(t - this.lastStreamScrollAt < cs) && (this.scheduledScrollFrame || (this.lastStreamScrollAt = t, this.scheduledScrollFrame = window.requestAnimationFrame(() => {
      const a = this.scheduledScrollMessage;
      this.scheduledScrollFrame = 0, this.scheduledScrollMessage = null, a?.isConnected && this.animateMessageScrollIntoView(a);
    })));
  }
  cancelScheduledScroll() {
    this.scheduledScrollFrame && (window.cancelAnimationFrame(this.scheduledScrollFrame), this.scheduledScrollFrame = 0, this.scheduledScrollMessage = null, this.lastStreamScrollAt = 0);
  }
}
function hs(o) {
  return Math.min(1, Math.max(0, o));
}
function ms(o, e) {
  return Math.hypot(e.x - o.x, e.y - o.y);
}
function At(o, e, t) {
  return Math.min(t, Math.max(e, o));
}
function Si(o, e, t, a, i) {
  const r = 1 - i, n = i * i, s = r * r, l = s * r, d = n * i;
  return {
    x: l * o.x + 3 * s * i * e.x + 3 * r * n * t.x + d * a.x,
    y: l * o.y + 3 * s * i * e.y + 3 * r * n * t.y + d * a.y
  };
}
function gs(o) {
  let e = 2166136261;
  for (let t = 0; t < o.length; t += 1)
    e ^= o.charCodeAt(t), e = Math.imul(e, 16777619);
  return e >>> 0;
}
function Rr(o) {
  let e = gs(o) || 1;
  return () => {
    e += 1831565813;
    let t = e;
    return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
const fs = {
  slow: 560,
  normal: 860,
  quick: 1220
}, ws = {
  entry: 1.08,
  hover: 0.96,
  click: 0.9,
  drag: 1.18,
  text: 1.04,
  exit: 1
}, bs = 1.24;
function Bt(o, e, t) {
  const a = Rr(t.seed), i = ms(o, e), r = t.speed ?? "normal", n = t.intent ?? "hover";
  if (t.reducedMotion || i < 2)
    return {
      start: o,
      c1: o,
      c2: e,
      end: e,
      duration: t.reducedMotion ? 0.12 : 0.08
    };
  const s = e.x - o.x, l = e.y - o.y, d = s / i, c = l / i, u = -c, p = d, m = a() > 0.5 ? 1 : -1, g = t.curve ?? 1, f = At(i * (n === "drag" ? 0.1 : n === "click" ? 0.17 : 0.22) * g, 18, 150) * m * (0.72 + a() * 0.44), b = i / fs[r] + 0.16, y = At(b * ws[n] * bs, 0.3, 1.66), _ = t.overshoot === !1 || i < 120 ? 0 : typeof t.overshoot == "number" ? t.overshoot : At(i * 0.026, 4, 18), v = _ > 0 ? {
    x: e.x + d * _,
    y: e.y + c * _
  } : e, x = {
    x: o.x + s * (0.25 + a() * 0.08) + u * f,
    y: o.y + l * (0.25 + a() * 0.08) + p * f
  }, C = {
    x: o.x + s * (0.68 + a() * 0.12) - u * f * 0.42,
    y: o.y + l * (0.68 + a() * 0.12) - p * f * 0.42
  }, A = t.settle !== !1 && _ > 0;
  return {
    start: o,
    c1: x,
    c2: C,
    end: v,
    duration: A ? y * 0.86 : y,
    settle: A ? {
      start: v,
      c1: {
        x: v.x - d * _ * 0.45 + u * f * 0.04,
        y: v.y - c * _ * 0.45 + p * f * 0.04
      },
      c2: {
        x: e.x + d * _ * 0.16,
        y: e.y + c * _ * 0.16
      },
      end: e,
      duration: At(y * 0.18, 0.1, 0.24)
    } : void 0
  };
}
const ha = "button, a, [role='button'], [data-send-button], [data-result-action]", ma = "[data-chat-input][data-visible='true'], [data-signup-field], input, textarea, [contenteditable='true']", ga = {
  delay: 0.42,
  returnDuration: 0.18,
  segments: [
    { x: 1.6, y: -2.4, rotation: 0.28, duration: 1.55 },
    { x: -1.2, y: -3.1, rotation: -0.18, duration: 1.9 },
    { x: 0.8, y: -1.2, rotation: 0.16, duration: 1.45 },
    { x: 0, y: 0, rotation: 0, duration: 1.7 }
  ]
}, Lt = {
  outsideOffset: 24,
  topRatio: 0.3,
  minTopInset: 74,
  maxTopInset: 190
}, _s = -135, ys = 0.34;
class xs {
  constructor(e, t, a = {}) {
    this.root = e, this.resolver = t, this.options = a, this.el = this.root.querySelector("[data-cursor]") ?? this.createElement(), this.floatLayer = this.ensureFloatLayer(), this.setX = w.quickSetter(this.el, "x", "px"), this.setY = w.quickSetter(this.el, "y", "px"), this.setRotation = w.quickSetter(this.el, "rotation", "deg");
    const i = this.resolver.resolve({ target: "[data-chat-shell]", anchor: "center" }, "cursor:start");
    this.setPosition(i), this.setMode("default"), this.observeModeTargets(), this.queueIdleFloat();
  }
  root;
  resolver;
  options;
  el;
  floatLayer;
  setX;
  setY;
  setRotation;
  idleFloat = null;
  idleFloatDelay = null;
  transformState = { x: 0, y: 0 };
  rotationState = 0;
  plannedPosition = { x: 0, y: 0 };
  currentPosition = { x: 0, y: 0 };
  storyId = "story";
  moveIndex = 0;
  mode = "default";
  modeOverride = null;
  modeTargetsDirty = !0;
  pointerTargets = [];
  textTargets = [];
  targetObserver = null;
  lastModeSyncAt = 0;
  lastModeSyncPoint = { x: Number.NaN, y: Number.NaN };
  modeWatchFrame = 0;
  beginBuild(e, t) {
    this.storyId = t, this.moveIndex = 0, this.plannedPosition = { ...e };
  }
  getPosition() {
    return { ...this.currentPosition };
  }
  readPosition() {
    return this.currentPosition;
  }
  getHistoryParkViewportPoint() {
    const e = this.root.getBoundingClientRect(), t = this.resolveHistoryParkPoint();
    return {
      x: e.left + t.x,
      y: e.top + t.y
    };
  }
  beginMimicControl() {
    this.stopIdleFloat(!0), this.modeOverride = "default", this.setMode("default"), this.el.dataset.cursorMimicking = "true", w.killTweensOf(this.el), w.set(this.el, { autoAlpha: 1, scale: 1 });
  }
  mimicViewportPoint(e, t = 0.42, a = e) {
    const i = this.root.getBoundingClientRect(), r = {
      x: e.x - i.left,
      y: e.y - i.top
    }, n = {
      x: a.x - i.left,
      y: a.y - i.top
    }, s = {
      x: this.currentPosition.x + (r.x - this.currentPosition.x) * t,
      y: this.currentPosition.y + (r.y - this.currentPosition.y) * t
    };
    this.modeOverride = "default", this.currentPosition = s, this.plannedPosition = { ...s }, this.renderPosition(s), this.setMode("default"), this.renderMimicRotation(s, n);
  }
  endMimicControl() {
    this.modeOverride = null, delete this.el.dataset.cursorMimicking, this.resetRotation(), this.syncModeToPoint(this.currentPosition), this.queueIdleFloat();
  }
  setPosition(e) {
    this.currentPosition = { ...e }, this.plannedPosition = { ...e }, this.renderPosition(e);
  }
  setMode(e) {
    if (this.mode === e && this.el.dataset.cursorMode === e) {
      this.updateModeWatch();
      return;
    }
    this.mode = e, this.el.dataset.cursorMode = e, this.updateModeWatch();
  }
  moveTo(e, t = {}) {
    const a = t.label ?? `move-${this.moveIndex}`, i = t.mode ?? "default", r = `${this.storyId}:${a}:${this.resolver.getBreakpoint()}`, n = this.resolver.resolve(e, r), s = { ...this.plannedPosition }, l = Bt(s, n, {
      seed: r,
      intent: t.intent,
      speed: t.speed,
      curve: t.curve,
      overshoot: t.overshoot,
      settle: t.settle,
      reducedMotion: this.options.reducedMotion
    }), d = w.timeline();
    let c = null;
    return this.moveIndex += 1, this.plannedPosition = { ...n }, d.call(() => {
      this.stopIdleFloat(), this.resetRotation();
    }, void 0, 0), d.set(this.el, { autoAlpha: 1 }, 0), d.call(() => {
      this.modeOverride = i === "drag" ? "drag" : null, this.modeOverride ? this.setMode(this.modeOverride) : this.syncModeToPoint(this.currentPosition);
    }, void 0, 0), d.add(
      this.pathTweenFromFactory(
        () => {
          this.resolver.refresh();
          const u = this.resolver.resolve(e, r);
          return c = Bt(this.currentPosition, u, {
            seed: r,
            intent: t.intent,
            speed: t.speed,
            curve: t.curve,
            overshoot: t.overshoot,
            settle: t.settle,
            reducedMotion: this.options.reducedMotion
          }), this.plannedPosition = { ...u }, c;
        },
        l.duration
      )
    ), l.settle && d.add(
      this.pathTweenFromFactory(
        () => c?.settle ?? {
          start: this.currentPosition,
          c1: this.currentPosition,
          c2: this.currentPosition,
          end: this.currentPosition,
          duration: 0.01
        },
        l.settle.duration,
        "power2.out"
      )
    ), t.preserveMode || d.call(() => {
      this.modeOverride = null, this.syncModeToPoint(this.currentPosition), this.queueIdleFloat();
    }), d;
  }
  parkForChatHistory() {
    const e = `history-park-${this.moveIndex}`, t = `${this.storyId}:${e}:${this.resolver.getBreakpoint()}`, a = { ...this.currentPosition }, i = this.resolveHistoryParkPoint(), r = Bt(a, i, {
      seed: t,
      intent: "hover",
      speed: "quick",
      overshoot: !1,
      settle: !1,
      reducedMotion: this.options.reducedMotion
    }), n = w.timeline();
    return this.moveIndex += 1, this.plannedPosition = { ...i }, n.call(() => {
      this.stopIdleFloat(), this.modeOverride = null, this.setMode("default");
    }, void 0, 0), n.add(
      this.pathTweenFromFactory(
        () => this.createHistoryParkPlan(t),
        r.duration,
        "sine.inOut"
      )
    ), n.call(() => {
      this.modeOverride = null, this.syncModeToPoint(this.currentPosition), this.queueIdleFloat();
    }), n;
  }
  scanAcross(e, t = {}) {
    const a = t.label ?? `scan-${this.moveIndex}`, i = w.timeline();
    return this.moveIndex += 1, this.options.reducedMotion ? i.to({}, { duration: 0.08 }) : (i.call(() => {
      this.stopIdleFloat(), this.modeOverride = "default", this.setMode("default");
    }), i.add(
      this.pathTweenFromFactory(
        () => this.resolveScanPath(e, `${this.storyId}:${a}:scan`, t.match),
        t.duration ?? 0.78,
        "sine.inOut"
      )
    ).to({}, { duration: 0.08 }), i.call(() => {
      this.modeOverride = null, this.syncModeToPoint(this.currentPosition), this.queueIdleFloat();
    }), i);
  }
  click(e = "pointer") {
    const t = w.timeline();
    return t.call(() => {
      this.stopIdleFloat();
      const a = this.getModeForPoint(this.currentPosition) === "pointer";
      this.modeOverride = a ? "click" : null, a ? this.setMode("click") : this.syncModeToPoint(this.currentPosition);
    }, void 0, 0).to(this.el, {
      scale: 0.86,
      duration: this.options.reducedMotion ? 0.03 : 0.095,
      ease: "power2.out"
    }).to(this.el, {
      scale: 1,
      duration: this.options.reducedMotion ? 0.05 : 0.21,
      ease: "back.out(4)"
    }).call(() => {
      this.modeOverride = null, this.syncModeToPoint(this.currentPosition), this.queueIdleFloat();
    }), t;
  }
  dragTo(e, t = {}) {
    const a = w.timeline();
    return a.call(() => {
      this.stopIdleFloat(), this.modeOverride = "drag", this.setMode("drag");
    }).to(this.el, {
      scale: 0.9,
      duration: this.options.reducedMotion ? 0.04 : 0.16,
      ease: "power2.out"
    }).add(
      this.moveTo(e, {
        ...t,
        mode: "drag",
        intent: "drag",
        speed: t.speed ?? "slow",
        overshoot: !1,
        settle: !1,
        preserveMode: !0
      }),
      this.options.reducedMotion ? 0 : 0.03
    ).call(() => {
      this.modeOverride = "drag", this.setMode("drag");
    }).to({}, { duration: t.releaseHold ?? 0 }).call(() => {
      this.modeOverride = "release", this.setMode("release");
    }).to(this.el, {
      scale: 1.04,
      duration: this.options.reducedMotion ? 0.03 : 0.1,
      ease: "power2.out"
    }).to(this.el, {
      scale: 1,
      duration: this.options.reducedMotion ? 0.05 : 0.18,
      ease: "back.out(2.5)"
    }).call(() => {
      this.modeOverride = null, this.syncModeToPoint(this.currentPosition), this.queueIdleFloat();
    }), a;
  }
  destroy() {
    this.targetObserver?.disconnect(), this.stopModeWatch(), this.stopIdleFloat(), this.el.remove();
  }
  resetInteraction() {
    this.stopIdleFloat(!0), this.modeOverride = null, delete this.el.dataset.cursorMimicking, w.killTweensOf(this.el), w.set(this.el, { scale: 1 }), this.resetRotation(!0), this.syncModeToPoint(this.currentPosition), this.queueIdleFloat();
  }
  pathTween(e, t, a, i, r, n = "power2.inOut") {
    const s = { t: 0 };
    return w.fromTo(
      s,
      { t: 0 },
      {
        t: 1,
        duration: r,
        ease: n,
        onUpdate: () => {
          const l = Si(e, t, a, i, s.t);
          this.currentPosition = l, this.renderPosition(l), this.modeOverride || this.maybeSyncModeToPoint(l);
        },
        onComplete: () => {
          this.currentPosition = { ...i }, this.renderPosition(i), this.modeOverride || this.syncModeToPoint(i);
        }
      }
    );
  }
  pathTweenFromFactory(e, t, a = "power2.inOut") {
    const i = { t: 0 };
    let r = null;
    return w.fromTo(
      i,
      { t: 0 },
      {
        t: 1,
        duration: t,
        ease: a,
        onStart: () => {
          i.t = 0, r = e();
        },
        onUpdate: () => {
          if (!r) return;
          const n = Si(r.start, r.c1, r.c2, r.end, i.t);
          this.currentPosition = n, this.renderPosition(n), this.modeOverride || this.maybeSyncModeToPoint(n);
        },
        onComplete: () => {
          r && (this.currentPosition = { ...r.end }, this.plannedPosition = { ...r.end }, this.renderPosition(r.end), this.modeOverride || this.syncModeToPoint(r.end));
        }
      }
    );
  }
  createHistoryParkPlan(e) {
    this.resolver.refresh();
    const t = this.resolveHistoryParkPoint(), a = Bt(this.currentPosition, t, {
      seed: e,
      intent: "hover",
      speed: "quick",
      overshoot: !1,
      settle: !1,
      reducedMotion: this.options.reducedMotion
    });
    return this.plannedPosition = { ...t }, a;
  }
  resolveHistoryParkPoint() {
    const e = this.root.getBoundingClientRect(), t = this.root.querySelector("[data-chat-shell]")?.getBoundingClientRect();
    if (!t) return { ...this.currentPosition };
    const a = At(
      t.height * Lt.topRatio,
      Lt.minTopInset,
      Lt.maxTopInset
    );
    return {
      x: t.right - e.left + Lt.outsideOffset,
      y: t.top - e.top + a
    };
  }
  pointTweenFromFactory(e, t, a = "power2.inOut") {
    const i = { t: 0 };
    let r = { ...this.currentPosition }, n = { ...this.currentPosition };
    return w.fromTo(i, { t: 0 }, {
      t: 1,
      duration: t,
      ease: a,
      onStart: () => {
        i.t = 0, r = { ...this.currentPosition }, n = e();
      },
      onUpdate: () => {
        const s = {
          x: r.x + (n.x - r.x) * i.t,
          y: r.y + (n.y - r.y) * i.t
        };
        this.currentPosition = s, this.renderPosition(s);
      },
      onComplete: () => {
        this.currentPosition = { ...n }, this.plannedPosition = { ...this.currentPosition }, this.renderPosition(this.currentPosition);
      }
    });
  }
  resolveScanPath(e, t, a = "first") {
    const i = { ...this.currentPosition }, r = this.resolveScanPoint(e, `${t}:start`, "start", a), n = this.resolveScanPoint(e, `${t}:end`, "end", a);
    return {
      start: i,
      c1: Ci(i, r, 0.64),
      c2: Ci(r, n, 0.42),
      end: n
    };
  }
  resolveScanPoint(e, t, a, i = "first") {
    const r = typeof e == "string" ? this.findVisibleScanElement(e, i) : e;
    if (!r) return this.currentPosition;
    this.resolver.refresh();
    const n = this.seededScanRandom(t), s = this.root.getBoundingClientRect(), l = r.getBoundingClientRect(), d = this.root.querySelector("[data-chat-shell]")?.getBoundingClientRect(), c = d ? Math.max(l.left, d.left + 18) : l.left, u = d ? Math.min(l.right, d.right - 18) : l.right, p = d ? Math.max(l.top, d.top + 58) : l.top, m = d ? Math.min(l.bottom, d.bottom - 34) : l.bottom, g = Math.max(1, u - c), h = Math.max(1, m - p), f = a === "start" ? 0.16 + n() * 0.08 : 0.76 + n() * 0.12, b = 0.34 + n() * 0.32;
    return {
      x: c - s.left + g * f,
      y: p - s.top + h * b
    };
  }
  findVisibleScanElement(e, t = "first") {
    const i = Array.from(this.root.querySelectorAll(e)).filter((r) => {
      const n = window.getComputedStyle(r), s = r.getBoundingClientRect();
      return n.display !== "none" && n.visibility !== "hidden" && Number(n.opacity) > 0.01 && s.width > 0 && s.height > 0;
    });
    return t === "last" ? i[i.length - 1] ?? null : i[0] ?? null;
  }
  seededScanRandom(e) {
    let t = 2166136261;
    for (let a = 0; a < e.length; a += 1)
      t ^= e.charCodeAt(a), t = Math.imul(t, 16777619);
    return () => {
      t += 1831565813;
      let a = t;
      return a = Math.imul(a ^ a >>> 15, a | 1), a ^= a + Math.imul(a ^ a >>> 7, a | 61), ((a ^ a >>> 14) >>> 0) / 4294967296;
    };
  }
  renderPosition(e) {
    e.x !== this.transformState.x && (this.transformState.x = e.x, this.setX(e.x)), e.y !== this.transformState.y && (this.transformState.y = e.y, this.setY(e.y));
  }
  renderMimicRotation(e, t) {
    const a = t.x - e.x, i = t.y - e.y;
    if (a * a + i * i < 4) return;
    const r = Math.atan2(i, a) * 180 / Math.PI, n = vs(r - _s), s = this.rotationState + As(this.rotationState, n) * ys;
    this.renderRotation(s);
  }
  resetRotation(e = !1) {
    if (w.killTweensOf(this.el, "rotation"), e || this.options.reducedMotion) {
      this.renderRotation(0);
      return;
    }
    w.to(this.el, {
      rotation: 0,
      duration: 0.16,
      ease: "power2.out",
      overwrite: "auto",
      onUpdate: () => {
        this.rotationState = Number(w.getProperty(this.el, "rotation")) || 0;
      },
      onComplete: () => {
        this.rotationState = 0;
      }
    });
  }
  renderRotation(e) {
    Math.abs(e - this.rotationState) < 0.1 || (this.rotationState = e, this.setRotation(e));
  }
  queueIdleFloat(e = ga.delay) {
    this.options.reducedMotion || (this.idleFloatDelay?.kill(), this.idleFloatDelay = w.delayedCall(e, () => this.startIdleFloat()));
  }
  startIdleFloat() {
    if (this.options.reducedMotion || this.idleFloat?.isActive()) return;
    w.killTweensOf(this.floatLayer);
    const e = w.timeline({ repeat: -1 });
    for (const t of ga.segments)
      e.to(this.floatLayer, {
        x: t.x,
        y: t.y,
        rotation: t.rotation,
        duration: t.duration,
        ease: "sine.inOut"
      });
    this.idleFloat = e;
  }
  stopIdleFloat(e = !1) {
    if (this.idleFloatDelay?.kill(), this.idleFloatDelay = null, this.idleFloat?.kill(), this.idleFloat = null, e || this.options.reducedMotion) {
      w.set(this.floatLayer, { x: 0, y: 0, rotation: 0 });
      return;
    }
    w.to(this.floatLayer, {
      x: 0,
      y: 0,
      rotation: 0,
      duration: ga.returnDuration,
      ease: "power2.out",
      overwrite: "auto"
    });
  }
  maybeSyncModeToPoint(e) {
    const t = performance.now(), a = e.x - this.lastModeSyncPoint.x, i = e.y - this.lastModeSyncPoint.y;
    !(Number.isNaN(a) || a * a + i * i >= 576) && t - this.lastModeSyncAt < 72 || (this.lastModeSyncAt = t, this.lastModeSyncPoint = { ...e }, this.syncModeToPoint(e));
  }
  updateModeWatch() {
    if (this.mode !== "default" && !this.modeOverride) {
      this.scheduleModeWatch();
      return;
    }
    this.stopModeWatch();
  }
  scheduleModeWatch() {
    this.modeWatchFrame || (this.modeWatchFrame = window.requestAnimationFrame(this.watchModeTarget));
  }
  watchModeTarget = () => {
    this.modeWatchFrame = 0, !(this.modeOverride || this.mode === "default") && (this.syncModeToPoint(this.currentPosition), this.el.dataset.cursorMode !== "default" && !this.modeOverride && this.scheduleModeWatch());
  };
  stopModeWatch() {
    this.modeWatchFrame && (window.cancelAnimationFrame(this.modeWatchFrame), this.modeWatchFrame = 0);
  }
  syncModeToPoint(e) {
    const t = this.getModeForPoint(e);
    t !== this.mode && this.setMode(t);
  }
  getModeForPoint(e) {
    const t = this.root.getBoundingClientRect(), a = {
      x: t.left + e.x,
      y: t.top + e.y
    }, i = a.x >= 0 && a.x <= window.innerWidth && a.y >= 0 && a.y <= window.innerHeight ? document.elementFromPoint(a.x, a.y) : null, r = this.getModeForElement(i);
    return r !== "default" ? r : this.getModeForLocalPoint(e, t);
  }
  getModeForElement(e) {
    return e ? e.closest(ha) ? "pointer" : e.closest(ma) ? "text" : "default" : "default";
  }
  getModeForLocalPoint(e, t) {
    return this.refreshModeTargetCache(), this.findLocalHit(this.pointerTargets, e, t, ha) ? "pointer" : this.findLocalHit(this.textTargets, e, t, ma) ? "text" : "default";
  }
  findLocalHit(e, t, a, i) {
    return e.find((r) => {
      if (!r.matches(i)) return !1;
      const n = window.getComputedStyle(r);
      if (n.display === "none" || n.visibility === "hidden" || Number(n.opacity) < 0.01) return !1;
      const s = r.getBoundingClientRect();
      if (s.width <= 0 || s.height <= 0) return !1;
      const l = s.left - a.left, d = s.right - a.left, c = s.top - a.top, u = s.bottom - a.top;
      return t.x >= l && t.x <= d && t.y >= c && t.y <= u;
    }) ?? null;
  }
  refreshModeTargetCache() {
    this.modeTargetsDirty && (this.pointerTargets = Array.from(this.root.querySelectorAll(ha)).reverse(), this.textTargets = Array.from(this.root.querySelectorAll(ma)).reverse(), this.modeTargetsDirty = !1);
  }
  observeModeTargets() {
    "MutationObserver" in window && (this.targetObserver = new MutationObserver(() => {
      this.modeTargetsDirty = !0;
    }), this.targetObserver.observe(this.root, {
      attributes: !0,
      attributeFilter: ["class", "style", "data-visible"],
      childList: !0,
      subtree: !0
    }));
  }
  createElement() {
    const e = document.createElement("div");
    e.className = "wa-cursor", e.dataset.cursor = "", e.dataset.cursorMode = "default", e.setAttribute("aria-hidden", "true");
    const t = document.createElement("div");
    t.className = "wa-cursor__float", t.dataset.cursorFloat = "";
    const a = document.createElement("div");
    return a.className = "wa-cursor__glyph", a.append(ki()), t.append(a), e.append(t), this.root.append(e), e;
  }
  ensureFloatLayer() {
    const e = this.el.querySelector("[data-cursor-float]");
    if (e) return e;
    const t = this.el.querySelector(".wa-cursor__glyph") ?? document.createElement("div");
    t.classList.contains("wa-cursor__glyph") || (t.className = "wa-cursor__glyph"), t.querySelector(".wa-cursor__mimic-head") || t.append(ki());
    const a = document.createElement("div");
    return a.className = "wa-cursor__float", a.dataset.cursorFloat = "", a.append(t), this.el.append(a), a;
  }
}
function ki() {
  const o = document.createDocumentFragment(), e = document.createElement("span"), t = document.createElement("span");
  return e.className = "wa-cursor__mimic-tail", t.className = "wa-cursor__mimic-head", e.setAttribute("aria-hidden", "true"), t.setAttribute("aria-hidden", "true"), o.append(e, t), o;
}
function Ci(o, e, t) {
  return {
    x: o.x + (e.x - o.x) * t,
    y: o.y + (e.y - o.y) * t
  };
}
function vs(o) {
  return (o % 360 + 360) % 360;
}
function As(o, e) {
  return (e - o + 540) % 360 - 180;
}
const Ye = {
  user: "User",
  assistant: "AI",
  thinking: "Thinking",
  component: "Component",
  cursor: "Cursor",
  status: "State",
  file: "File"
}, Ss = ["user", "assistant", "thinking", "component", "cursor", "file"];
class ks {
  constructor(e, t, a = {}) {
    this.root = e, this.options = a, this.stories = Cs(t), this.selectedStepId = this.stories[0]?.steps[0]?.id ?? null;
  }
  root;
  options;
  refs = null;
  stories;
  activeStoryIndex = 0;
  selectedStepId = null;
  listeners = [];
  draggedStepId = null;
  copyResetTimer = null;
  mount() {
    const e = this.root.querySelector("[data-story-builder]");
    e && (this.refs = {
      shell: e,
      tabs: this.required(e, "[data-builder-tabs]"),
      thread: this.required(e, "[data-builder-thread]"),
      panel: this.required(e, "[data-builder-panel]"),
      export: this.required(e, "[data-builder-export]"),
      copyJson: this.required(e, "[data-builder-copy-json]"),
      addRail: this.required(e, "[data-builder-add-rail]"),
      status: this.required(e, "[data-builder-status]")
    }, this.attachEvents(), this.render());
  }
  destroy() {
    for (const e of this.listeners) e();
    this.listeners = [], this.copyResetTimer !== null && window.clearTimeout(this.copyResetTimer), this.copyResetTimer = null;
  }
  attachEvents() {
    const e = this.refs;
    e && (this.on(e.tabs, "click", (t) => {
      const a = fa(t.target, "[data-builder-story-tab]");
      a && this.selectStory(Number(a.dataset.builderStoryTab));
    }), this.on(e.addRail, "click", (t) => {
      const i = fa(t.target, "[data-builder-add]")?.dataset.builderAdd;
      !i || !Ei(i) || this.addStep(i);
    }), this.on(e.copyJson, "click", () => {
      this.copyExportJson();
    }), this.on(e.thread, "click", (t) => {
      const a = fa(t.target, "[data-builder-action]");
      if (a) {
        this.handleStepAction(a);
        return;
      }
      const i = t.target?.closest("[data-builder-step]");
      i?.dataset.builderStep && this.selectStep(i.dataset.builderStep, { renderThread: !1 });
    }), this.on(e.thread, "input", (t) => {
      const a = t.target?.closest("[data-builder-component-field]");
      if (a) {
        this.handleComponentInput(a), a instanceof HTMLTextAreaElement && this.autoSize(a);
        return;
      }
      const i = t.target?.closest("[data-builder-step-field]");
      if (!i) return;
      const r = i.dataset.builderStepField;
      r && (this.updateStep(r, { text: i.value }, { renderThread: !1 }), this.autoSize(i));
    }), this.on(e.thread, "dragstart", (t) => this.handleDragStart(t)), this.on(e.thread, "dragover", (t) => this.handleDragOver(t)), this.on(e.thread, "drop", (t) => this.handleDrop(t)), this.on(e.thread, "dragend", () => this.clearDragState()), this.on(e.thread, "dragleave", (t) => {
      e.thread.contains(t.relatedTarget) || this.clearDropMarkers();
    }), this.on(e.panel, "input", (t) => {
      const a = t.target;
      (a instanceof HTMLInputElement || a instanceof HTMLTextAreaElement) && this.handlePanelInput(a);
    }), this.on(e.panel, "change", (t) => {
      const a = t.target;
      a instanceof HTMLSelectElement && this.handlePanelSelect(a);
    }));
  }
  render() {
    this.renderTabs(), this.renderAddRail(), this.renderThread(), this.renderPanel(), this.renderExport();
  }
  renderTabs() {
    const e = this.refs;
    if (!e) return;
    const t = this.stories.map((a, i) => {
      const r = document.createElement("button");
      r.className = "wa-builder-tab", r.type = "button", r.dataset.builderStoryTab = String(i), r.classList.toggle("is-active", i === this.activeStoryIndex), r.setAttribute("aria-pressed", String(i === this.activeStoryIndex));
      const n = document.createElement("span");
      n.className = "wa-builder-tab__title", n.textContent = a.label;
      const s = document.createElement("span");
      return s.className = "wa-builder-tab__count", s.textContent = `${a.steps.length} messages`, r.append(n, s), r;
    });
    e.tabs.replaceChildren(...t);
  }
  renderAddRail() {
    const e = this.refs;
    if (!e || e.addRail.childElementCount) return;
    const t = Ss.map((a) => {
      const i = document.createElement("button");
      return i.className = "wa-builder-add-button", i.type = "button", i.dataset.builderAdd = a, i.textContent = `+ ${Ye[a]}`, i;
    });
    e.addRail.replaceChildren(...t);
  }
  renderThread() {
    const e = this.refs;
    if (!e) return;
    const t = this.activeStory, a = t.steps.map(
      (i, r) => this.createStepNode(i, r, t.steps.length, t.steps[r - 1]?.kind)
    );
    e.thread.replaceChildren(...a), e.thread.querySelectorAll("[data-builder-step-field]").forEach((i) => {
      this.autoSize(i);
    });
  }
  renderPanel() {
    const e = this.refs;
    if (!e) return;
    const t = this.activeStory, a = this.selectedStep, i = document.createDocumentFragment();
    i.append(
      this.createField("Story title", "input", "story-label", t.label),
      this.createField("Story summary", "textarea", "story-summary", t.summary)
    );
    const r = document.createElement("div");
    if (r.className = "wa-builder-panel__divider", i.append(r), a) {
      const n = document.createElement("label");
      n.className = "wa-builder-field";
      const s = document.createElement("span");
      s.className = "wa-builder-field__label", s.textContent = "Selected message";
      const l = document.createElement("select");
      l.className = "wa-builder-field__control", l.dataset.builderPanelSelect = "step-kind";
      for (const d of Object.keys(Ye)) {
        const c = document.createElement("option");
        c.value = d, c.textContent = Ye[d], c.selected = a.kind === d, l.append(c);
      }
      n.append(s, l), i.append(
        n,
        this.createField("Message text", "textarea", "step-text", a.text),
        this.createField("Internal note", "textarea", "step-note", a.note)
      );
    } else {
      const n = document.createElement("p");
      n.className = "wa-builder-panel__empty", n.textContent = "No message selected.", i.append(n);
    }
    e.panel.replaceChildren(i), e.panel.querySelectorAll("textarea").forEach((n) => this.autoSize(n));
  }
  renderExport() {
    const e = this.refs;
    e && (e.export.value = JSON.stringify({ stories: this.stories }, null, 2), this.autoSize(e.export));
  }
  async copyExportJson() {
    const e = this.refs;
    if (!e) return;
    const t = e.export.value;
    let a = !1;
    try {
      navigator.clipboard?.writeText && (await navigator.clipboard.writeText(t), a = !0);
    } catch {
      a = !1;
    }
    a || (a = this.copyWithFallback(t)), this.setCopyButtonState(a), this.setStatus(a ? "Story JSON copied" : "Could not copy Story JSON");
  }
  copyWithFallback(e) {
    const t = this.refs;
    if (!t) return !1;
    const a = document.createElement("textarea");
    a.value = e, a.readOnly = !0, a.tabIndex = -1, a.setAttribute("aria-hidden", "true"), a.style.position = "fixed", a.style.top = "0", a.style.left = "-9999px", a.style.width = "1px", a.style.height = "1px", a.style.opacity = "0", t.shell.append(a), a.select(), a.setSelectionRange(0, a.value.length);
    let i = !1;
    try {
      i = document.execCommand("copy");
    } catch {
      i = !1;
    }
    return a.remove(), i;
  }
  setCopyButtonState(e) {
    const t = this.refs;
    if (!t) return;
    const a = t.copyJson.querySelector("[data-builder-copy-label]");
    t.copyJson.dataset.copyState = e ? "copied" : "idle", a && (a.textContent = e ? "Copied" : "Copy"), this.copyResetTimer !== null && window.clearTimeout(this.copyResetTimer), this.copyResetTimer = window.setTimeout(() => {
      if (!this.refs) return;
      delete this.refs.copyJson.dataset.copyState;
      const i = this.refs.copyJson.querySelector("[data-builder-copy-label]");
      i && (i.textContent = "Copy"), this.copyResetTimer = null;
    }, 1400);
  }
  createStepNode(e, t, a, i) {
    const r = document.createElement("article");
    r.className = "wa-builder-step", r.dataset.builderStep = e.id, r.dataset.builderKind = e.kind, r.draggable = !0, r.setAttribute("aria-grabbed", "false"), r.classList.toggle("is-selected", e.id === this.selectedStepId);
    const n = document.createElement("div");
    n.className = "wa-message wa-builder-message", n.dataset.messageRole = e.kind === "user" || e.kind === "file" ? "user" : "assistant", (e.kind === "component" || e.kind === "thinking") && n.classList.add("wa-message--component");
    const s = document.createElement("div");
    s.className = "wa-message__avatar";
    const l = document.createElement("div");
    return l.className = "wa-message__body wa-builder-message__body", l.dataset.messageBody = "", l.append(this.createStepBody(e, i === "thinking")), n.append(s, l), r.append(n, this.createStepToolbar(e, a)), r;
  }
  createStepBody(e, t = !1) {
    if (e.kind === "thinking") return this.createThinkingBody(e, t);
    if (e.kind === "component") return this.createComponentBody(e);
    if (e.kind === "cursor") return this.createCursorBody(e);
    if (e.kind === "file") return this.createFileBody(e);
    const a = document.createElement("div");
    a.className = "wa-builder-bubble";
    const i = document.createElement("span");
    return i.className = "wa-builder-step__kind", i.textContent = Ye[e.kind], a.append(i, this.createInlineTextarea(e)), a;
  }
  createThinkingBody(e, t = !1) {
    const a = document.createElement("div");
    a.className = "wa-thinking-block wa-builder-thinking";
    const i = document.createElement("div");
    i.className = "wa-thinking";
    const r = document.createElement("span");
    r.className = "wa-thinking__glyph", r.setAttribute("aria-hidden", "true");
    const n = document.createElement("span");
    n.className = "wa-thinking__title", n.textContent = "Thinking";
    const s = document.createElement("span");
    s.className = "wa-thinking__elapsed", s.textContent = "4m 20s";
    const l = document.createElement("div");
    l.className = "wa-research-steps";
    const d = document.createElement("div");
    d.className = "wa-research-step wa-builder-research-step", d.dataset.stepState = "current";
    const c = document.createElement("span");
    c.className = "wa-research-step__check", c.setAttribute("aria-hidden", "true");
    const u = document.createElement("div");
    u.className = "wa-research-step__body";
    const p = document.createElement("div");
    p.className = "wa-research-step__label", p.append(this.createInlineTextarea(e));
    const m = document.createElement("div");
    return m.className = "wa-research-step__detail", m.textContent = e.note || "Add the evidence, source, or transformation this thinking step should reveal.", u.append(p, m), d.append(c, u), l.append(d), i.append(r, n, s), t ? (a.dataset.thinkingHeaderSuppressed = "true", a.append(l)) : a.append(i, l), a;
  }
  createComponentBody(e) {
    if (e.component ??= Is(e.text), e.component.kind === "table") return this.createTableComponentBody(e, e.component);
    if (e.component.kind === "strategyCards") return this.createStrategyComponentBody(e, e.component);
    if (e.component.kind === "enrichment") return this.createEnrichmentComponentBody(e, e.component);
    if (e.component.kind === "dataSources") return this.createDataSourcesComponentBody(e, e.component);
    if (e.component.kind === "uploadedFiles") return this.createUploadedFilesComponentBody(e, e.component);
    if (e.component.kind === "styleProfile") return this.createStyleProfileComponentBody(e, e.component);
    if (e.component.kind === "proximityList") return this.createProximityListComponentBody(e, e.component);
    if (e.component.kind === "personalizationSwipeGame")
      return this.createPersonalizationSwipeComponentBody(e, e.component);
    if (e.component.kind === "sequenceEngagement")
      return this.createSequenceEngagementComponentBody(e, e.component);
    const t = document.createElement("div");
    t.className = "wa-builder-component-card";
    const a = document.createElement("div");
    a.className = "wa-builder-component-card__content";
    const i = document.createElement("span");
    i.className = "wa-builder-step__kind", i.textContent = "Component";
    const r = this.createComponentField(e.id, "title", e.component.title, {
      className: "wa-builder-component-card__title"
    }), n = document.createElement("div");
    return n.className = "wa-builder-component-list", e.component.items.forEach((s, l) => {
      n.append(
        this.createComponentField(e.id, "item", s, {
          itemIndex: l,
          className: "wa-builder-component-list__item"
        })
      );
    }), a.append(i, r, n), t.append(a), t;
  }
  createTableComponentBody(e, t) {
    const a = document.createElement("div");
    a.className = "wa-builder-component-card wa-builder-component-card--table";
    const i = document.createElement("div");
    i.className = "wa-builder-component-card__content";
    const r = document.createElement("span");
    r.className = "wa-builder-step__kind", r.textContent = "Table";
    const n = this.createComponentField(e.id, "title", t.title, {
      className: "wa-builder-component-card__title"
    }), s = document.createElement("div");
    s.className = "wa-builder-table-editor", s.style.setProperty("--wa-builder-table-columns", `repeat(${t.columns.length}, minmax(112px, 1fr))`);
    const l = document.createElement("div");
    return l.className = "wa-builder-table-editor__row", l.dataset.header = "true", t.columns.forEach((d, c) => {
      l.append(
        this.createComponentInput(e.id, "column", d, {
          columnIndex: c,
          className: "wa-builder-table-editor__cell"
        })
      );
    }), s.append(l), t.rows.forEach((d, c) => {
      const u = document.createElement("div");
      u.className = "wa-builder-table-editor__row", t.columns.forEach((p, m) => {
        u.append(
          this.createComponentInput(e.id, "cell", d[m] ?? "", {
            rowIndex: c,
            columnIndex: m,
            className: "wa-builder-table-editor__cell"
          })
        );
      }), s.append(u);
    }), i.append(r, n, s), a.append(i), a;
  }
  createStrategyComponentBody(e, t) {
    const a = document.createElement("div");
    a.className = "wa-builder-component-card wa-builder-component-card--strategy";
    const i = document.createElement("div");
    i.className = "wa-builder-component-card__content";
    const r = document.createElement("span");
    r.className = "wa-builder-step__kind", r.textContent = "Strategy cards";
    const n = this.createComponentField(e.id, "title", t.title, {
      className: "wa-builder-component-card__title"
    }), s = document.createElement("div");
    return s.className = "wa-builder-strategy-editor", t.cards.forEach((l, d) => {
      const c = document.createElement("div");
      c.className = "wa-builder-strategy-editor__card", c.append(
        this.createComponentInput(e.id, "cardLabel", l.label, {
          cardIndex: d,
          className: "wa-builder-strategy-editor__label"
        }),
        this.createComponentField(e.id, "cardTitle", l.title, {
          cardIndex: d,
          className: "wa-builder-strategy-editor__title"
        }),
        this.createComponentField(e.id, "cardSummary", l.summary, {
          cardIndex: d,
          className: "wa-builder-strategy-editor__summary"
        })
      ), s.append(c);
    }), i.append(r, n, s), a.append(i), a;
  }
  createEnrichmentComponentBody(e, t) {
    const a = document.createElement("div");
    a.className = "wa-builder-component-card wa-builder-component-card--enrichment";
    const i = document.createElement("div");
    i.className = "wa-builder-component-card__content";
    const r = document.createElement("span");
    r.className = "wa-builder-step__kind", r.textContent = "Enrichment";
    const n = this.createComponentField(e.id, "title", t.title, {
      className: "wa-builder-component-card__title"
    }), s = this.createComponentField(e.id, "subtitle", t.subtitle, {
      className: "wa-builder-component-card__subtitle"
    }), l = document.createElement("div");
    return l.className = "wa-builder-enrichment-editor", t.fields.forEach((d, c) => {
      const u = document.createElement("div");
      u.className = "wa-builder-enrichment-editor__group", u.append(
        this.createComponentInput(e.id, "fieldTitle", d.title, {
          fieldIndex: c,
          className: "wa-builder-enrichment-editor__title"
        })
      ), d.steps.forEach((p, m) => {
        u.append(
          this.createComponentInput(e.id, "fieldStep", p, {
            fieldIndex: c,
            itemIndex: m,
            className: "wa-builder-enrichment-editor__step"
          })
        );
      }), l.append(u);
    }), i.append(r, n, s, l), a.append(i), a;
  }
  createDataSourcesComponentBody(e, t) {
    const a = document.createElement("div");
    a.className = "wa-builder-component-card wa-builder-component-card--sources";
    const i = document.createElement("div");
    i.className = "wa-builder-component-card__content";
    const r = document.createElement("span");
    r.className = "wa-builder-step__kind", r.textContent = "Data sources";
    const n = this.createComponentField(e.id, "title", t.title, {
      className: "wa-builder-component-card__title"
    }), s = this.createComponentField(e.id, "subtitle", t.subtitle, {
      className: "wa-builder-component-card__subtitle"
    }), l = document.createElement("div");
    return l.className = "wa-builder-data-sources-editor", t.sources.forEach((d, c) => {
      const u = document.createElement("div");
      u.className = "wa-builder-data-sources-editor__card", u.append(
        this.createComponentInput(e.id, "sourceCategory", d.category ?? "Data partners", {
          itemIndex: c,
          className: "wa-builder-data-sources-editor__category"
        }),
        this.createComponentInput(e.id, "sourceName", d.name, {
          itemIndex: c,
          className: "wa-builder-data-sources-editor__name"
        }),
        this.createComponentField(e.id, "sourceDetail", d.detail, {
          itemIndex: c,
          className: "wa-builder-data-sources-editor__detail"
        })
      ), l.append(u);
    }), i.append(r, n, s, l), a.append(i), a;
  }
  createUploadedFilesComponentBody(e, t) {
    const a = this.createStructuredComponentCard("Files"), i = a.querySelector(".wa-builder-component-card__content"), r = this.createComponentField(e.id, "title", t.title, {
      className: "wa-builder-component-card__title"
    }), n = document.createElement("div");
    return n.className = "wa-builder-file-list-editor", t.files.forEach((s, l) => {
      const d = document.createElement("div");
      d.className = "wa-builder-file-list-editor__card", d.append(
        this.createComponentInput(e.id, "fileType", s.type, {
          itemIndex: l,
          className: "wa-builder-file-list-editor__type"
        }),
        this.createComponentInput(e.id, "fileName", s.name, {
          itemIndex: l,
          className: "wa-builder-file-list-editor__name"
        }),
        this.createComponentField(e.id, "fileDetail", s.detail, {
          itemIndex: l,
          className: "wa-builder-file-list-editor__detail"
        })
      ), n.append(d);
    }), i.append(r, n), a;
  }
  createStyleProfileComponentBody(e, t) {
    const a = this.createStructuredComponentCard("Style profile"), i = a.querySelector(".wa-builder-component-card__content"), r = this.createComponentField(e.id, "title", t.title, {
      className: "wa-builder-component-card__title"
    }), n = this.createComponentField(e.id, "subtitle", t.subtitle, {
      className: "wa-builder-component-card__subtitle"
    }), s = document.createElement("div");
    s.className = "wa-builder-style-profile-editor", t.signals.forEach((d, c) => {
      const u = document.createElement("div");
      u.className = "wa-builder-style-profile-editor__row", u.append(
        this.createComponentInput(e.id, "signalLabel", d.label, {
          itemIndex: c,
          className: "wa-builder-style-profile-editor__label"
        }),
        this.createComponentField(e.id, "signalValue", d.value, {
          itemIndex: c,
          className: "wa-builder-style-profile-editor__value"
        })
      ), s.append(u);
    });
    const l = document.createElement("div");
    return l.className = "wa-builder-style-profile-editor__examples", t.examples.forEach((d, c) => {
      l.append(
        this.createComponentField(e.id, "styleExample", d, {
          itemIndex: c,
          className: "wa-builder-style-profile-editor__example"
        })
      );
    }), i.append(r, n, s, l), a;
  }
  createProximityListComponentBody(e, t) {
    const a = this.createStructuredComponentCard("Proximity list"), i = a.querySelector(".wa-builder-component-card__content"), r = this.createComponentField(e.id, "title", t.title, {
      className: "wa-builder-component-card__title"
    }), n = this.createComponentField(e.id, "subtitle", t.subtitle, {
      className: "wa-builder-component-card__subtitle"
    }), s = document.createElement("div");
    return s.className = "wa-builder-proximity-editor", t.leads.forEach((l, d) => {
      const c = document.createElement("div");
      c.className = "wa-builder-proximity-editor__row", c.append(
        this.createComponentInput(e.id, "leadRank", l.rank, {
          itemIndex: d,
          className: "wa-builder-proximity-editor__rank"
        }),
        this.createComponentInput(e.id, "leadScore", l.score, {
          itemIndex: d,
          className: "wa-builder-proximity-editor__score"
        }),
        this.createComponentInput(e.id, "leadName", l.name, {
          itemIndex: d,
          className: "wa-builder-proximity-editor__name"
        }),
        this.createComponentInput(e.id, "leadCompany", l.company, {
          itemIndex: d,
          className: "wa-builder-proximity-editor__company"
        }),
        this.createComponentInput(e.id, "leadTitle", l.title, {
          itemIndex: d,
          className: "wa-builder-proximity-editor__title"
        }),
        this.createComponentInput(e.id, "leadProximity", l.proximity, {
          itemIndex: d,
          className: "wa-builder-proximity-editor__proximity"
        }),
        this.createComponentField(e.id, "leadPersonalization", l.personalization, {
          itemIndex: d,
          className: "wa-builder-proximity-editor__personalization"
        })
      ), s.append(c);
    }), i.append(r, n, s), a;
  }
  createPersonalizationSwipeComponentBody(e, t) {
    const a = this.createStructuredComponentCard("Personalization swipe game"), i = a.querySelector(".wa-builder-component-card__content"), r = this.createComponentField(e.id, "title", t.title, {
      className: "wa-builder-component-card__title"
    }), n = this.createComponentField(e.id, "subtitle", t.subtitle, {
      className: "wa-builder-component-card__subtitle"
    }), s = this.createComponentField(e.id, "prompt", t.prompt, {
      className: "wa-builder-component-card__subtitle"
    }), l = document.createElement("div");
    return l.className = "wa-builder-swipe-game-editor", t.signals.forEach((d, c) => {
      const u = document.createElement("div");
      u.className = "wa-builder-swipe-game-editor__row", u.append(
        this.createComponentInput(e.id, "swipeDecision", d.decision, {
          itemIndex: c,
          className: "wa-builder-swipe-game-editor__decision"
        }),
        this.createComponentField(e.id, "swipeLabel", d.label, {
          itemIndex: c,
          className: "wa-builder-swipe-game-editor__label"
        }),
        this.createComponentField(e.id, "swipeDetail", d.detail, {
          itemIndex: c,
          className: "wa-builder-swipe-game-editor__detail"
        })
      ), l.append(u);
    }), i.append(r, n, s, l), a;
  }
  createSequenceEngagementComponentBody(e, t) {
    const a = this.createStructuredComponentCard("Sequence engagement"), i = a.querySelector(".wa-builder-component-card__content"), r = this.createComponentField(e.id, "title", t.title, {
      className: "wa-builder-component-card__title"
    }), n = this.createComponentField(e.id, "subtitle", t.subtitle, {
      className: "wa-builder-component-card__subtitle"
    }), s = this.createComponentInput(e.id, "peopleCount", t.peopleCount, {
      className: "wa-builder-sequence-editor__count"
    }), l = document.createElement("div");
    l.className = "wa-builder-sequence-editor", t.sequences.forEach((c, u) => {
      const p = document.createElement("div");
      p.className = "wa-builder-sequence-editor__card", p.append(
        this.createComponentInput(e.id, "sequenceName", c.name, {
          itemIndex: u,
          className: "wa-builder-sequence-editor__name"
        }),
        this.createComponentInput(e.id, "sequenceCompany", c.company, {
          itemIndex: u,
          className: "wa-builder-sequence-editor__company"
        }),
        this.createComponentInput(e.id, "sequenceSubject", c.subject, {
          itemIndex: u,
          className: "wa-builder-sequence-editor__subject"
        }),
        this.createComponentField(e.id, "sequencePersonalization", c.personalization, {
          itemIndex: u,
          className: "wa-builder-sequence-editor__personalization"
        })
      ), l.append(p);
    });
    const d = document.createElement("div");
    return d.className = "wa-builder-channel-editor", t.channels.forEach((c, u) => {
      const p = document.createElement("div");
      p.className = "wa-builder-channel-editor__card", p.append(
        this.createComponentInput(e.id, "channelLabel", c.label, {
          itemIndex: u,
          className: "wa-builder-channel-editor__label"
        }),
        this.createComponentInput(e.id, "channelBadge", c.badge, {
          itemIndex: u,
          className: "wa-builder-channel-editor__badge"
        }),
        this.createComponentField(e.id, "channelDetail", c.detail, {
          itemIndex: u,
          className: "wa-builder-channel-editor__detail"
        })
      ), d.append(p);
    }), i.append(r, n, s, l, d), a;
  }
  createStructuredComponentCard(e) {
    const t = document.createElement("div");
    t.className = "wa-builder-component-card";
    const a = document.createElement("div");
    a.className = "wa-builder-component-card__content";
    const i = document.createElement("span");
    return i.className = "wa-builder-step__kind", i.textContent = e, a.append(i), t.append(a), t;
  }
  createComponentField(e, t, a, i) {
    const r = document.createElement("textarea");
    return r.className = i.className, r.dataset.builderComponentField = t, r.dataset.builderComponentStep = e, r.value = a, r.rows = 1, r.spellcheck = !0, this.applyComponentIndexes(r, i), r;
  }
  createComponentInput(e, t, a, i) {
    const r = document.createElement("input");
    return r.className = i.className, r.dataset.builderComponentField = t, r.dataset.builderComponentStep = e, r.value = a, r.type = "text", r.spellcheck = !0, this.applyComponentIndexes(r, i), r;
  }
  applyComponentIndexes(e, t) {
    t.rowIndex !== void 0 && (e.dataset.builderComponentRow = String(t.rowIndex)), t.columnIndex !== void 0 && (e.dataset.builderComponentColumn = String(t.columnIndex)), t.cardIndex !== void 0 && (e.dataset.builderComponentCard = String(t.cardIndex)), t.fieldIndex !== void 0 && (e.dataset.builderComponentGroup = String(t.fieldIndex)), t.itemIndex !== void 0 && (e.dataset.builderComponentItem = String(t.itemIndex));
  }
  createCursorBody(e) {
    const t = document.createElement("div");
    t.className = "wa-builder-cursor-line";
    const a = document.createElement("span");
    return a.className = "wa-builder-cursor-line__cursor", a.setAttribute("aria-hidden", "true"), t.append(a, this.createInlineTextarea(e)), t;
  }
  createFileBody(e) {
    const t = document.createElement("div");
    t.className = "wa-builder-file-pill";
    const a = document.createElement("span");
    return a.className = "wa-builder-file-pill__icon", a.setAttribute("aria-hidden", "true"), a.textContent = "CSV", t.append(a, this.createInlineTextarea(e)), t;
  }
  createInlineTextarea(e) {
    const t = document.createElement("textarea");
    return t.className = "wa-builder-step__textarea", t.dataset.builderStepField = e.id, t.value = e.text, t.rows = 1, t.spellcheck = !0, t.setAttribute("aria-label", `${Ye[e.kind]} message text`), t;
  }
  createStepToolbar(e, t) {
    const a = document.createElement("div");
    return a.className = "wa-builder-step__toolbar", a.append(
      this.createDragHandle(e.id),
      this.createActionButton(e.id, "duplicate", "Duplicate message", "copy"),
      this.createActionButton(e.id, "delete", "Delete message", "x", t <= 1)
    ), a;
  }
  createDragHandle(e) {
    const t = document.createElement("button");
    return t.className = "wa-builder-step__action wa-builder-step__drag", t.type = "button", t.draggable = !0, t.dataset.builderDragHandle = e, t.setAttribute("aria-label", "Drag to reorder message"), t.append(Pi("grip")), t;
  }
  createActionButton(e, t, a, i, r = !1) {
    const n = document.createElement("button");
    return n.className = "wa-builder-step__action", n.type = "button", n.dataset.builderAction = t, n.dataset.builderActionStep = e, n.disabled = r, n.setAttribute("aria-label", a), n.append(Pi(i)), n;
  }
  createField(e, t, a, i) {
    const r = document.createElement("label");
    r.className = "wa-builder-field";
    const n = document.createElement("span");
    n.className = "wa-builder-field__label", n.textContent = e;
    const s = t === "textarea" ? document.createElement("textarea") : document.createElement("input");
    return s.className = "wa-builder-field__control", s.dataset.builderPanelInput = a, s.value = i, s instanceof HTMLInputElement && (s.type = t === "color" ? "color" : "text"), s instanceof HTMLTextAreaElement && (s.rows = 2), r.append(n, s), r;
  }
  selectStory(e) {
    this.stories[e] && (this.activeStoryIndex = e, this.selectedStepId = this.activeStory.steps[0]?.id ?? null, this.options.onStorySelect?.(this.activeStory.id), this.render(), this.setStatus(`Editing ${this.activeStory.label}`));
  }
  selectStep(e, t = {}) {
    this.activeStory.steps.some((a) => a.id === e) && (this.selectedStepId === e && t.renderThread === !1 || (this.selectedStepId = e, t.renderThread === !1 ? this.updateSelectedStepClass() : this.renderThread(), this.renderPanel()));
  }
  updateSelectedStepClass() {
    const e = this.refs;
    e && e.thread.querySelectorAll("[data-builder-step]").forEach((t) => {
      t.classList.toggle("is-selected", t.dataset.builderStep === this.selectedStepId);
    });
  }
  addStep(e) {
    const t = Es(e, Ps(e), ""), a = this.activeStory.steps, i = a.findIndex((n) => n.id === this.selectedStepId), r = i >= 0 ? i + 1 : a.length;
    a.splice(r, 0, t), this.selectedStepId = t.id, this.render(), this.emitChange(`Added ${Ye[e]} message`);
  }
  updateStep(e, t, a = {}) {
    const i = this.activeStory.steps.find((r) => r.id === e);
    i && (Object.assign(i, t), this.renderExport(), this.emitChange("Draft updated", !1), a.renderThread !== !1 && (this.renderThread(), this.renderPanel()));
  }
  handleStepAction(e) {
    const t = e.dataset.builderAction, a = e.dataset.builderActionStep;
    if (!t || !a) return;
    const i = this.activeStory.steps, r = i.findIndex((n) => n.id === a);
    r < 0 || (t === "duplicate" && (i.splice(r + 1, 0, Ws(i[r])), this.selectedStepId = i[r + 1]?.id ?? a), t === "delete" && i.length > 1 && (i.splice(r, 1), this.selectedStepId = i[Math.min(r, i.length - 1)]?.id ?? null), this.render(), this.emitChange("Draft updated"));
  }
  handleDragStart(e) {
    const t = e.target, a = t?.closest("[data-builder-step]");
    if (!a?.dataset.builderStep) {
      e.preventDefault();
      return;
    }
    if (Us(t) && !t?.closest("[data-builder-drag-handle]")) {
      e.preventDefault();
      return;
    }
    this.draggedStepId = a.dataset.builderStep, this.selectedStepId = this.draggedStepId, a.classList.add("is-dragging"), a.setAttribute("aria-grabbed", "true"), this.refs?.thread.setAttribute("data-builder-dragging", "true"), e.dataTransfer?.setData("text/plain", this.draggedStepId), e.dataTransfer && (e.dataTransfer.effectAllowed = "move");
  }
  handleDragOver(e) {
    if (!this.draggedStepId) return;
    e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "move");
    const t = e.target?.closest("[data-builder-step]");
    if (this.clearDropMarkers(), !t?.dataset.builderStep || t.dataset.builderStep === this.draggedStepId) return;
    const a = t.getBoundingClientRect(), i = e.clientY < a.top + a.height / 2 ? "before" : "after";
    t.classList.add(i === "before" ? "is-drop-before" : "is-drop-after");
  }
  handleDrop(e) {
    if (!this.draggedStepId) return;
    e.preventDefault();
    const t = e.target?.closest("[data-builder-step]"), a = t?.dataset.builderStep, i = t?.classList.contains("is-drop-before") ? "before" : "after";
    this.moveStep(this.draggedStepId, a ?? null, i), this.clearDragState();
  }
  moveStep(e, t, a) {
    const i = this.activeStory.steps, r = i.findIndex((l) => l.id === e);
    if (r < 0) return;
    const [n] = i.splice(r, 1);
    let s = t ? i.findIndex((l) => l.id === t) : i.length;
    s < 0 && (s = i.length), a === "after" && (s += 1), i.splice(Math.min(s, i.length), 0, n), this.selectedStepId = n.id, this.render(), this.emitChange("Reordered message");
  }
  clearDragState() {
    this.draggedStepId = null, this.refs?.thread.removeAttribute("data-builder-dragging"), this.clearDropMarkers(), this.refs?.thread.querySelectorAll("[data-builder-step]").forEach((e) => {
      e.classList.remove("is-dragging"), e.setAttribute("aria-grabbed", "false");
    });
  }
  clearDropMarkers() {
    this.refs?.thread.querySelectorAll(".is-drop-before, .is-drop-after").forEach((e) => {
      e.classList.remove("is-drop-before", "is-drop-after");
    });
  }
  handleComponentInput(e) {
    const t = e.dataset.builderComponentStep, a = e.dataset.builderComponentField, i = t ? this.activeStory.steps.find((r) => r.id === t) : null;
    !i?.component || !a || (Fs(i.component, a, e.value, {
      rowIndex: _t(e.dataset.builderComponentRow),
      columnIndex: _t(e.dataset.builderComponentColumn),
      cardIndex: _t(e.dataset.builderComponentCard),
      fieldIndex: _t(e.dataset.builderComponentGroup),
      itemIndex: _t(e.dataset.builderComponentItem)
    }), i.text = Hs(i.component), this.selectedStepId === i.id && this.syncPanelStepText(i.text), this.renderExport(), this.emitChange("Component updated", !1));
  }
  handlePanelInput(e) {
    const t = e.dataset.builderPanelInput;
    if (t) {
      if (t === "story-label") {
        this.activeStory.label = e.value, this.renderTabs(), this.renderExport(), this.emitChange("Story title updated", !1);
        return;
      }
      if (t === "story-summary") {
        this.activeStory.summary = e.value, this.autoSize(e), this.renderExport(), this.emitChange("Story summary updated", !1);
        return;
      }
      if (this.selectedStep) {
        if (t === "step-text") {
          this.updateStep(this.selectedStep.id, { text: e.value }, { renderThread: !1 }), this.syncThreadStepText(this.selectedStep.id, e.value), this.autoSize(e);
          return;
        }
        t === "step-note" && (this.updateStep(this.selectedStep.id, { note: e.value }, { renderThread: !1 }), this.autoSize(e));
      }
    }
  }
  handlePanelSelect(e) {
    e.dataset.builderPanelSelect !== "step-kind" || !this.selectedStep || !Ei(e.value) || this.updateStep(this.selectedStep.id, { kind: e.value });
  }
  setStatus(e) {
    const t = this.refs;
    t && (t.status.textContent = e);
  }
  syncThreadStepText(e, t) {
    const a = this.refs;
    if (!a) return;
    const i = Array.from(a.thread.querySelectorAll("[data-builder-step-field]")).find(
      (r) => r.dataset.builderStepField === e
    );
    !i || i.value === t || (i.value = t, this.autoSize(i));
  }
  syncPanelStepText(e) {
    const t = this.refs;
    if (!t) return;
    const a = t.panel.querySelector("[data-builder-panel-input='step-text']");
    !a || a.value === e || (a.value = e, this.autoSize(a));
  }
  emitChange(e, t = !0) {
    const a = this.refs;
    a && (t && this.setStatus(e), a.shell.dispatchEvent(
      new CustomEvent("chatbot-story-builder:change", {
        bubbles: !0,
        detail: {
          story: this.activeStory,
          stories: this.stories
        }
      })
    ));
  }
  autoSize(e) {
    e.style.height = "auto", e.style.height = `${e.scrollHeight}px`;
  }
  required(e, t) {
    const a = e.querySelector(t);
    if (!a)
      throw new Error(`StoryBuilder: missing required element "${t}"`);
    return a;
  }
  on(e, t, a) {
    e.addEventListener(t, a), this.listeners.push(() => e.removeEventListener(t, a));
  }
  get activeStory() {
    return this.stories[this.activeStoryIndex];
  }
  get selectedStep() {
    return this.activeStory.steps.find((e) => e.id === this.selectedStepId) ?? null;
  }
}
function Cs(o) {
  return o.map((e) => ({
    id: e.id,
    label: e.navLabel ?? e.label,
    summary: e.navDescription ?? e.summary,
    steps: Ts(e.id, e.summary)
  }));
}
function Ts(o, e) {
  return ({
    "hit-ground-running": [
      { kind: "status", text: "Sign up", note: "Start in the browser sign-up screen." },
      { kind: "user", text: "joel@acme.co", note: "Typed into the sign-up field." },
      { kind: "thinking", text: "Researching the company profile", note: "Read site copy, metadata, category, and recent announcements." },
      { kind: "thinking", text: "Learning the ICP and buyer roles", note: "Infer accounts, personas, and likely pains from public signals." },
      { kind: "thinking", text: "Reading blog posts and careers pages", note: "Find positioning themes and current priorities." },
      { kind: "assistant", text: "I found three go-to-market strategies worth testing first.", note: "" },
      {
        kind: "component",
        text: "Three compact GTM strategy cards",
        note: "Founder-led signal capture, RevOps consolidation, and pipeline acceleration.",
        component: Rs()
      }
    ],
    "data-marketplace": [
      { kind: "user", text: "Show me new hires at dev-tool companies with 50+ employees.", note: "" },
      { kind: "thinking", text: "Searching hiring signals across data sources", note: "Companies, contacts, jobs, LinkedIn, funding, and technographics." },
      {
        kind: "component",
        text: "Table: matching new hires",
        note: "No chrome around the table.",
        component: Ti("Matching new hires", [
          ["Jamie Chen", "Ramp", "VP of Sales"],
          ["Andre Park", "Ramp", "Head of Growth"],
          ["David Kim", "Ramp", "Head of Revenue"],
          ["Chandler Bree", "Square", "VP of Sales"],
          ["Ellen Nelle", "Square", "Growth Engineer"]
        ])
      },
      { kind: "user", text: "Filter to the ones that have raised in the past three months.", note: "" },
      { kind: "thinking", text: "Checking recent funding events", note: "Keep the earlier table visible above this transformation." },
      {
        kind: "component",
        text: "Table: recently funded matches",
        note: "A smaller table appears after the filter message.",
        component: Ti("Recently funded matches", [
          ["Jamie Chen", "Ramp", "VP of Sales"],
          ["Andre Park", "Ramp", "Head of Growth"],
          ["David Kim", "Ramp", "Head of Revenue"]
        ])
      },
      { kind: "user", text: "Okay, enrich these contacts.", note: "" },
      {
        kind: "component",
        text: "Enrichment waterfall",
        note: "Business emails and mobile phones.",
        component: Ns()
      },
      {
        kind: "component",
        text: "Enriched table with emails and phone numbers",
        note: "",
        component: {
          kind: "table",
          title: "Enriched contacts",
          columns: ["Name", "Company", "Title", "Email", "Number"],
          rows: [
            ["Jamie Chen", "Ramp", "VP of Sales", "jamie@ramp.com", "+1 (628) 240-2744"],
            ["Andre Park", "Ramp", "Head of Growth", "andre@ramp.com", "+1 (210) 555-2341"],
            ["David Kim", "Ramp", "Head of Revenue", "david@ramp.com", "+1 (628) 230-9962"]
          ]
        }
      },
      {
        kind: "component",
        text: "Grid: specific vendor partners",
        note: "Marketing page grid of vendor partners grouped by data area.",
        component: Ds()
      }
    ],
    "crm-update": [
      {
        kind: "component",
        text: "Uploaded business context files",
        note: "Dragged in as a bundle before the agent learns the business.",
        component: Os()
      },
      { kind: "thinking", text: "Reading battle cards and competitive traps", note: "Extract competitive positioning, landmines, and proof points." },
      { kind: "thinking", text: "Extracting voice and tone rules", note: "Learn phrasing, CTA patterns, and words to avoid." },
      { kind: "thinking", text: "Learning ICP disqualifiers", note: "Understand who the company should not sell to." },
      {
        kind: "component",
        text: "Learned outreach style",
        note: "Shows the style and qualification rules the AI learned.",
        component: qs()
      },
      {
        kind: "component",
        text: "Personalization swipe mini game",
        note: "Swipe cards to teach which personalization patterns sound like Joel.",
        component: zs()
      },
      { kind: "user", text: "Write a sequence for consumer fintech founders.", note: "This is intentionally outside the learned ICP." },
      { kind: "assistant", text: "Are you sure? this doesn't fit your ICP", note: "Guardrail response based on the uploaded context." },
      { kind: "user", text: "Okay, generate leads ranked by how personally connected they are to us.", note: "" },
      {
        kind: "component",
        text: "Ranked leads with proximity fields",
        note: "Personalization is ranked by relationship proximity.",
        component: Bs()
      }
    ],
    "research-brief": [
      { kind: "user", text: "Show me 50 sales leaders that have recently visited my website.", note: "" },
      {
        kind: "component",
        text: "Table: 50 recent website visitors",
        note: "Shows 10 rows at a time with pagination, power dialer, and outreach sequence actions.",
        component: Ms("50 recent website visitors", [
          ["Maya Patel", "OrbitGrid", "VP Sales", "12m ago", "Pricing page"],
          ["Evan Brooks", "Northstar Dev", "Head of Sales", "18m ago", "Integrations"],
          ["Clara Wong", "BrightLayer", "VP Revenue", "27m ago", "Case study"],
          ["Andre Park", "Ramp", "Head of Sales", "33m ago", "Demo page"],
          ["Jamie Chen", "Square", "VP Sales", "42m ago", "ROI calculator"],
          ["Nina Kapoor", "Mercury", "Sales Director", "51m ago", "Security page"],
          ["David Kim", "Stripe", "Revenue Lead", "1h ago", "Docs"],
          ["Sam Hollis", "Apollo", "VP Sales", "1h ago", "Comparison"],
          ["Rachel Cho", "Retool", "Head of Sales", "2h ago", "Pricing page"],
          ["Owen Lee", "Linear", "Sales Lead", "2h ago", "Demo page"]
        ])
      },
      { kind: "cursor", text: "Cursor clicks page 2, then page 1, hovers the dialer icon, then clicks the email icon.", note: "Dialer tooltip reads “Start power dialing” with a “Coming soon” badge; email tooltip reads “Build outreach sequence.”" },
      { kind: "thinking", text: "Generating a sequence template from the company offering", note: "Template uses trigger, role-specific pain, proof, and a low-friction CTA." },
      { kind: "thinking", text: "Researching companies and people 1/50", note: "Two progress tracks run simultaneously for account research and person research." },
      {
        kind: "component",
        text: "Personalized sequence preview",
        note: "Switch between people to inspect tailored email, LinkedIn, email, and call steps before kickoff.",
        component: Ls()
      }
    ],
    "csv-import-cleanup": [
      { kind: "cursor", text: "Cursor exits right and drags a CSV into the browser.", note: "Drop overlay appears as soon as the file enters." },
      { kind: "file", text: "webinar_attendees.csv", note: "File appears as a user-side message after release." },
      { kind: "thinking", text: "Analyzing imported rows", note: "Parse headers, remove junk rows, and infer schema." },
      { kind: "thinking", text: "Cleaning and normalizing contact fields", note: "Normalize email addresses, names, company fields, and duplicates." },
      {
        kind: "component",
        text: "Clean attendee table",
        note: "Shows normalized emails and full names.",
        component: {
          kind: "table",
          title: "Clean attendee table",
          columns: ["Full name", "Email", "Company", "Status"],
          rows: [
            ["Jamie Chen", "jamie@acme.co", "Acme", "Normalized"],
            ["Andre Park", "andre@northstar.dev", "Northstar", "Deduped"],
            ["David Kim", "david@brightlayer.io", "Brightlayer", "Validated"]
          ]
        }
      },
      { kind: "assistant", text: "The CSV is clean and ready to route into a campaign.", note: "" }
    ]
  }[o] ?? [{ kind: "assistant", text: e, note: "" }]).map((i, r) => ({
    ...i,
    id: `${o}-step-${r + 1}`
  }));
}
function Es(o, e, t) {
  return {
    id: Nr("step"),
    kind: o,
    text: e,
    note: t
  };
}
function Ps(o) {
  return {
    user: "Ask the assistant to transform the current result.",
    assistant: "The assistant responds with the next useful result.",
    thinking: "Researching the next signal",
    component: "Visual result component",
    cursor: "Move cursor to the next interaction target.",
    status: "Update state",
    file: "uploaded_file.csv"
  }[o];
}
function Is(o) {
  return {
    kind: "generic",
    title: o,
    items: ["Primary result", "Supporting detail", "Next action"]
  };
}
function Ti(o, e) {
  return {
    kind: "table",
    title: o,
    columns: ["Name", "Company", "Title"],
    rows: e
  };
}
function Ms(o, e) {
  return {
    kind: "table",
    title: o,
    columns: ["Name", "Company", "Title", "Last visit", "Signal"],
    rows: e
  };
}
function Rs() {
  return {
    kind: "strategyCards",
    title: "Three go-to-market strategies",
    cards: [
      {
        label: "Strategy one",
        title: "Founder-led signal capture",
        summary: "Use hiring, funding, and founder activity to catch seed teams right as they start building a repeatable sales motion."
      },
      {
        label: "Strategy two",
        title: "RevOps consolidation wedge",
        summary: "Lead with a data-quality audit for teams already showing CRM cleanup pain, then turn the gaps into a consolidation case."
      },
      {
        label: "Strategy three",
        title: "Pipeline acceleration sprint",
        summary: "Package the strongest buyer and account signals into a short sprint for sales leaders who need near-term pipeline movement."
      }
    ]
  };
}
function Ns() {
  return {
    kind: "enrichment",
    title: "I’m about to run an enrichment",
    subtitle: "Up to 84 credits could be spent across 2 fields on 14 records.",
    fields: [
      {
        title: "Business emails",
        steps: ["Unify Data", "5-Step Waterfall", "FullEnrich", "ZeroBounce"]
      },
      {
        title: "Mobile phones",
        steps: ["Unify Data", "5-Step Waterfall", "FullEnrich"]
      }
    ]
  };
}
function Ds() {
  return {
    kind: "dataSources",
    title: "Specific vendors by data area",
    subtitle: "Unify routes each search across the right partner sources for the job.",
    sources: [
      {
        category: "Core Data (on-prem)",
        name: "5x5",
        detail: "On-premise company and contact datasets.",
        logoSrc: "/data-logos/5x5.svg"
      },
      {
        category: "Core Data (on-prem)",
        name: "PDL",
        detail: "People and company records for core B2B coverage.",
        logoSrc: "/data-logos/PDL.png"
      },
      {
        category: "Core Data (on-prem)",
        name: "MixRank",
        detail: "Company, app, and advertising intelligence.",
        logoSrc: "/data-logos/MixRank.png"
      },
      {
        category: "Web Intent",
        name: "Snitcher",
        detail: "Website visitor identification and account intent.",
        logoSrc: "/data-logos/Snitcher.svg"
      },
      {
        category: "Web Intent",
        name: "Demandbase",
        detail: "Account identification and intent signals.",
        logoSrc: "/data-logos/Demandbase.svg"
      },
      {
        category: "Enrichment Waterfall",
        name: "Waterfall.io",
        detail: "Waterfall orchestration for enrichment coverage.",
        logoSrc: "/data-logos/Waterfall.svg"
      },
      {
        category: "Enrichment Waterfall",
        name: "FullEnrich",
        detail: "Email and phone enrichment across multiple providers."
      },
      {
        category: "CRM",
        name: "Salesforce",
        detail: "CRM account, contact, and activity data.",
        logoSrc: "/data-logos/Salesforce.svg"
      },
      {
        category: "CRM",
        name: "HubSpot",
        detail: "CRM, marketing, and sales engagement records.",
        logoSrc: "/data-logos/HubSpot.png"
      },
      {
        category: "Product Analytics",
        name: "PostHog",
        detail: "Product events, usage, and conversion behavior.",
        logoSrc: "/data-logos/PostHog.svg"
      },
      {
        category: "Product Analytics",
        name: "Segment",
        detail: "Customer event pipelines and audience traits.",
        logoSrc: "/data-logos/Segment.svg"
      },
      {
        category: "Company / Fundraising",
        name: "Harmonic",
        detail: "Startup company signals, growth, and fundraising data.",
        logoSrc: "/data-logos/Harmonic.svg"
      },
      {
        category: "Company / Fundraising",
        name: "Ocean.io",
        detail: "Company lookalikes, segments, and account discovery.",
        logoSrc: "/data-logos/Ocean_io.svg"
      },
      {
        category: "SMB Data",
        name: "OpenMart",
        detail: "Small business discovery and merchant data.",
        logoSrc: "/data-logos/OpenMart.svg"
      },
      {
        category: "Ecommerce",
        name: "Store Leads",
        detail: "E-commerce stores, platforms, categories, and growth signals.",
        logoSrc: "/data-logos/Store_Leads.png"
      },
      {
        category: "Ad Intelligence",
        name: "Adyntel",
        detail: "Ad spend, messaging, and competitive advertising signals.",
        logoSrc: "/data-logos/Adyntel.png"
      },
      {
        category: "Ad Intelligence",
        name: "Adbeat",
        detail: "Digital ad creatives, publishers, and campaign intelligence.",
        logoSrc: "/data-logos/Adbeat.svg"
      },
      {
        category: "Ad Intelligence",
        name: "UpRiver",
        detail: "Ad strategy and competitive demand generation signals.",
        logoSrc: "/data-logos/UpRiver.svg"
      },
      {
        category: "Web / SEO",
        name: "SE Ranking",
        detail: "Search visibility, keyword, and competitor SEO data."
      },
      {
        category: "Web / SEO",
        name: "Serpstat",
        detail: "SEO, PPC, and content intelligence.",
        logoSrc: "/data-logos/Serpstat.svg"
      },
      {
        category: "Tech Stack",
        name: "Theirstack",
        detail: "Technology install, job-posting, and stack signals.",
        logoSrc: "/data-logos/Theirstack.webp"
      },
      {
        category: "Tech Stack",
        name: "BuiltWith",
        detail: "Installed tools, web stack, pixels, and infrastructure data.",
        logoSrc: "/data-logos/BuiltWith.png"
      },
      {
        category: "Tech Stack",
        name: "PredictLeads",
        detail: "Hiring, technology, product, and business event signals.",
        logoSrc: "/data-logos/PredictLeads.png"
      },
      {
        category: "Social Signals",
        name: "Trigify",
        detail: "Social buying signals and engagement events.",
        logoSrc: "/data-logos/Trigify.svg"
      },
      {
        category: "Network & Relationships",
        name: "The Swarm",
        detail: "Network, relationship, and warm-introduction context.",
        logoSrc: "/data-logos/The_Swarm.svg"
      },
      {
        category: "Other Tools",
        name: "BuyerCaddy",
        detail: "Buyer tracking and sales workflow support.",
        logoSrc: "/data-logos/BuyerCaddy.png"
      },
      {
        category: "Other Tools",
        name: "ZeroBounce",
        detail: "Email validation and deliverability checks.",
        logoSrc: "/data-logos/ZeroBounce.png"
      }
    ]
  };
}
function Os() {
  return {
    kind: "uploadedFiles",
    title: "Business context files",
    files: [
      { name: "battlecards.pdf", detail: "Competitive traps, landmines, proof points", type: "PDF" },
      { name: "voice-and-tone.docx", detail: "Founder voice, pacing, taboo phrases", type: "DOC" },
      { name: "outbound-playbook.pdf", detail: "Sequences, objection handling, CTA rules", type: "PDF" },
      { name: "icp-context.md", detail: "Best-fit accounts, disqualifiers, buyer pains", type: "MD" }
    ]
  };
}
function qs() {
  return {
    kind: "styleProfile",
    title: "Learned outreach style",
    subtitle: "The agent extracts how your team writes, qualifies, and earns replies.",
    signals: [
      { label: "Voice", value: "Plainspoken, specific, no inflated urgency" },
      { label: "CTA", value: "Low-friction question before calendar asks" },
      { label: "Proof", value: "Lead with trigger + relevant customer pattern" },
      { label: "Guardrail", value: "Rejects weak ICP fit before drafting" }
    ],
    examples: [
      "Keep the opener grounded in a real business trigger.",
      "Avoid generic automation language unless the account shows ops pain."
    ]
  };
}
function zs() {
  return {
    kind: "personalizationSwipeGame",
    title: "Personalization preferences",
    subtitle: "A tiny game teaches the agent what should and should not show up in outreach.",
    prompt: "Swipe toward the personalization you would actually use.",
    signals: [
      {
        label: "{{reference something they recently posted}}",
        detail: "Use a real public post when it connects to the reason for reaching out.",
        decision: "use"
      },
      {
        label: "Hope the weather in {{city}} is treating you well",
        detail: "A location warm-up that adds words without adding context.",
        decision: "avoid"
      },
      {
        label: "{{mention a mutual connection}}",
        detail: "Useful when the shared contact creates a credible reason to compare notes.",
        decision: "use"
      }
    ]
  };
}
function Bs() {
  return {
    kind: "proximityList",
    title: "Ranked leads with proximity fields",
    subtitle: "Each lead gets a relationship-aware reason to personalize the first touch.",
    leads: [
      {
        rank: "01",
        name: "Maya Patel",
        company: "OrbitGrid",
        title: "VP Revenue",
        proximity: "Same school",
        personalization: "Hey, you went to the same school as Joel and both studied systems design.",
        score: "94"
      },
      {
        rank: "02",
        name: "Evan Brooks",
        company: "Northstar Dev",
        title: "Head of Growth",
        proximity: "Mutual connection",
        personalization: "You both know Priya Shah from the early PLG operators group.",
        score: "89"
      },
      {
        rank: "03",
        name: "Clara Wong",
        company: "BrightLayer",
        title: "RevOps Lead",
        proximity: "Shared background",
        personalization: "You both studied economics before moving into revenue operations.",
        score: "82"
      },
      {
        rank: "04",
        name: "Sam Hollis",
        company: "Apollo",
        title: "Growth Lead",
        proximity: "Warm signal",
        personalization: "They follow two of your customers and recently posted about data quality.",
        score: "76"
      }
    ]
  };
}
function Ls() {
  return {
    kind: "sequenceEngagement",
    title: "Personalized sequence preview",
    subtitle: "Each visitor gets a channel plan based on company fit, page intent, and role-level context.",
    peopleCount: "50 people",
    sequences: [
      {
        name: "Maya Patel",
        company: "OrbitGrid",
        subject: "OrbitGrid’s pricing-page interest",
        personalization: "Email → LinkedIn → email → call, tailored to pricing intent and RevOps hiring."
      },
      {
        name: "Evan Brooks",
        company: "Northstar Dev",
        subject: "Northstar Dev’s integration-led growth",
        personalization: "Email → LinkedIn → email → call, tailored to partner-fit account research."
      },
      {
        name: "Clara Wong",
        company: "BrightLayer",
        subject: "BrightLayer’s case-study research",
        personalization: "Email → LinkedIn → email → call, tailored to proof-seeking revenue leadership."
      }
    ],
    channels: [
      { label: "Kick off sequence", detail: "Launch tailored touches for 50 people", badge: "" }
    ]
  };
}
function Fs(o, e, t, a) {
  if (e === "title" && (o.title = t), o.kind === "generic" && e === "item" && a.itemIndex !== null && (o.items[a.itemIndex] = t), o.kind === "dataSources" && (e === "subtitle" && (o.subtitle = t), a.itemIndex !== null)) {
    const i = o.sources[a.itemIndex];
    if (!i) return;
    e === "sourceCategory" && (i.category = t), e === "sourceName" && (i.name = t), e === "sourceDetail" && (i.detail = t);
  }
  if (o.kind === "uploadedFiles" && a.itemIndex !== null) {
    const i = o.files[a.itemIndex];
    if (!i) return;
    e === "fileType" && (i.type = t), e === "fileName" && (i.name = t), e === "fileDetail" && (i.detail = t);
  }
  if (o.kind === "styleProfile" && (e === "subtitle" && (o.subtitle = t), a.itemIndex !== null)) {
    const i = o.signals[a.itemIndex];
    i && (e === "signalLabel" && (i.label = t), e === "signalValue" && (i.value = t)), e === "styleExample" && (o.examples[a.itemIndex] = t);
  }
  if (o.kind === "proximityList" && (e === "subtitle" && (o.subtitle = t), a.itemIndex !== null)) {
    const i = o.leads[a.itemIndex];
    if (!i) return;
    e === "leadRank" && (i.rank = t), e === "leadScore" && (i.score = t), e === "leadName" && (i.name = t), e === "leadCompany" && (i.company = t), e === "leadTitle" && (i.title = t), e === "leadProximity" && (i.proximity = t), e === "leadPersonalization" && (i.personalization = t);
  }
  if (o.kind === "personalizationSwipeGame" && (e === "subtitle" && (o.subtitle = t), e === "prompt" && (o.prompt = t), a.itemIndex !== null)) {
    const i = o.signals[a.itemIndex];
    if (!i) return;
    e === "swipeDecision" && (i.decision = t === "avoid" ? "avoid" : "use"), e === "swipeLabel" && (i.label = t), e === "swipeDetail" && (i.detail = t);
  }
  if (o.kind === "sequenceEngagement" && (e === "subtitle" && (o.subtitle = t), e === "peopleCount" && (o.peopleCount = t), a.itemIndex !== null)) {
    const i = o.sequences[a.itemIndex];
    i && (e === "sequenceName" && (i.name = t), e === "sequenceCompany" && (i.company = t), e === "sequenceSubject" && (i.subject = t), e === "sequencePersonalization" && (i.personalization = t));
    const r = o.channels[a.itemIndex];
    r && (e === "channelLabel" && (r.label = t), e === "channelDetail" && (r.detail = t), e === "channelBadge" && (r.badge = t));
  }
  if (o.kind === "table" && (e === "column" && a.columnIndex !== null && (o.columns[a.columnIndex] = t), e === "cell" && a.rowIndex !== null && a.columnIndex !== null && (o.rows[a.rowIndex] ??= [], o.rows[a.rowIndex][a.columnIndex] = t)), o.kind === "strategyCards" && a.cardIndex !== null) {
    const i = o.cards[a.cardIndex];
    if (!i) return;
    e === "cardLabel" && (i.label = t), e === "cardTitle" && (i.title = t), e === "cardSummary" && (i.summary = t);
  }
  if (o.kind === "enrichment") {
    if (e === "subtitle" && (o.subtitle = t), e === "fieldTitle" && a.fieldIndex !== null) {
      const i = o.fields[a.fieldIndex];
      i && (i.title = t);
    }
    if (e === "fieldStep" && a.fieldIndex !== null && a.itemIndex !== null) {
      const i = o.fields[a.fieldIndex];
      i && (i.steps[a.itemIndex] = t);
    }
  }
}
function Hs(o) {
  return o.kind === "table" ? `Table: ${o.title}` : (o.kind === "strategyCards" || o.kind === "enrichment" || o.kind === "dataSources" || o.kind === "uploadedFiles" || o.kind === "styleProfile" || o.kind === "proximityList" || o.kind === "personalizationSwipeGame" || o.kind === "sequenceEngagement", o.title);
}
function Ws(o) {
  return {
    ...o,
    id: Nr("step"),
    component: o.component ? Gs(o.component) : void 0
  };
}
function Gs(o) {
  return JSON.parse(JSON.stringify(o));
}
function _t(o) {
  if (o === void 0) return null;
  const e = Number(o);
  return Number.isFinite(e) ? e : null;
}
function Nr(o) {
  return typeof crypto < "u" && "randomUUID" in crypto ? `${o}-${crypto.randomUUID()}` : `${o}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
function fa(o, e) {
  return o instanceof Element ? o.closest(e) : null;
}
function Us(o) {
  return !!o?.closest("textarea, input, select, button, [contenteditable='true']");
}
function Ei(o) {
  return o in Ye;
}
function Pi(o) {
  const e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  if (e.setAttribute("viewBox", "0 0 20 20"), e.setAttribute("aria-hidden", "true"), e.setAttribute("focusable", "false"), o === "copy" && Ii(e, "M7 7.5h8v8H7z M5 13H4.5a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1H12a1 1 0 0 1 1 1V5"), o === "x" && Ii(e, "M5.5 5.5l9 9 M14.5 5.5l-9 9"), o === "grip")
    for (const t of [7, 13])
      for (const a of [5, 10, 15]) {
        const i = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        i.setAttribute("cx", String(t)), i.setAttribute("cy", String(a)), i.setAttribute("r", "1.25"), i.setAttribute("fill", "currentColor"), e.append(i);
      }
  return e;
}
function Ii(o, e) {
  const t = document.createElementNS("http://www.w3.org/2000/svg", "path");
  t.setAttribute("d", e), t.setAttribute("fill", "none"), t.setAttribute("stroke", "currentColor"), t.setAttribute("stroke-width", "1.7"), t.setAttribute("stroke-linecap", "round"), t.setAttribute("stroke-linejoin", "round"), o.append(t);
}
const O = {
  typeShort: 0.92,
  typeMedium: 1.16,
  typeLong: 1.34,
  thinkingShort: 0.92,
  thinkingMedium: 1.3,
  beat: 0.26
};
function wa(o) {
  return typeof o == "number" ? { x: o, y: 0 } : o;
}
function Q(o, e, t = {}, a = !0) {
  return {
    desktop: { target: o, anchor: e, offset: wa(t.desktop), humanOffset: a },
    tablet: { target: o, anchor: e, offset: wa(t.tablet), humanOffset: a },
    mobile: { target: o, anchor: e, offset: wa(t.mobile), humanOffset: a }
  };
}
const Mi = {
  hitGroundRunning: Q("[data-chat-input]", "center", { desktop: -72, tablet: -68, mobile: -54 }),
  dataMarketplace: Q("[data-chat-input]", "center", { desktop: -54, tablet: -52, mobile: -44 }),
  crmUpdate: Q("[data-chat-input]", "center", { desktop: -42, tablet: -46, mobile: -36 }),
  researchBrief: Q("[data-chat-input]", "center", { desktop: -70, tablet: -62, mobile: -50 }),
  supportResolution: Q("[data-chat-input]", "center", { desktop: -62, tablet: -58, mobile: -46 })
}, Vs = Q("[data-signup-field]", "center", {
  desktop: -74,
  tablet: -66,
  mobile: -48
}), Ys = Q("[data-send-button]", "center"), Za = {
  desktop: {
    target: "[data-chat-shell]",
    anchor: "right",
    offset: { x: -34, y: -138 },
    humanOffset: !0
  },
  tablet: {
    target: "[data-chat-shell]",
    anchor: "right",
    offset: { x: -30, y: -118 },
    humanOffset: !0
  },
  mobile: {
    target: "[data-chat-shell]",
    anchor: "right",
    offset: { x: -28, y: -96 },
    humanOffset: !0
  }
}, js = 2.8, Xs = 42, Js = 2, Qs = 3, ea = "[data-chat-shell] [data-chat-thread]", Ks = `${ea} [data-message-role="assistant"]:not(.wa-message--component) [data-message-body]`, Zs = `${ea} [data-message-role="assistant"].wa-message--thinking .wa-research-step[data-step-state="current"] .wa-research-step__body, ${ea} [data-message-role="assistant"].wa-message--thinking .wa-research-step[data-step-state="complete"] .wa-research-step__label`, Ri = 0.24, $s = 0.3, St = {
  right: { target: "[data-chat-shell]", anchor: "right", outside: "right" },
  bottomRight: { target: "[data-chat-shell]", anchor: "bottomRight", outside: "bottom" }
};
function Ft(o = St.right, e) {
  return {
    kind: "cursorMove",
    target: o,
    options: { intent: "exit", label: "exit" },
    at: e
  };
}
function yt(o, e) {
  const t = $a(o), a = so();
  for (const [i, r] of e.entries())
    eo(t, o, r, i, a);
  return ei(t);
}
function eo(o, e, t, a, i) {
  switch (t.kind) {
    case "prompt":
      o.add(lo(e, t), t.at);
      return;
    case "status":
      o.add(e.chat.setStatus(t.text), t.at);
      return;
    case "cursorClick":
      o.add(e.cursor.click(t.nextMode), t.at);
      return;
    case "typeSignupEmail":
      o.add(e.chat.typeSignupEmail(t.email, t.duration), t.at);
      return;
    case "transitionSignupToChat":
      o.add(e.chat.transitionSignupToChat(), t.at);
      return;
    case "assistant":
      o.add(e.chat.assistantMessage(t.text), t.at), no(o, e, i, {
        kind: "assistant",
        key: t.text,
        text: t.text,
        selector: Ks,
        label: `assistant-${Na(t.text)}`,
        stepIndex: a
      });
      return;
    case "thinking": {
      const r = to(t);
      t.statusBefore && o.add(e.chat.setStatus(t.statusBefore), t.at), o.add(e.chat.thinkingState(r, t.hold), t.statusBefore ? void 0 : t.at), ro(o, e, i, t.hold, r.length, r.join("|"), a);
      return;
    }
    case "dataTable":
      at(
        o,
        e,
        e.chat.dataTable(t.config),
        t.at,
        rt(`[data-data-table="${Pe(t.config.id)}"]`),
        `table-${t.config.id}`
      );
      return;
    case "enrichmentPanel":
      at(
        o,
        e,
        e.chat.enrichmentPanel(t.config),
        t.at,
        rt(`[data-enrichment-panel="${Pe(t.config.id)}"]`),
        `enrichment-${t.config.id}`
      );
      return;
    case "strategyPlans":
      at(
        o,
        e,
        e.chat.strategyPlans(t.plans),
        t.at,
        rt(`[data-strategy-plans~="${Pe(t.plans[0]?.id ?? "strategy")}"]`),
        `strategy-${t.plans[0]?.id ?? "plans"}`
      );
      return;
    case "dataSourcesGrid":
      at(
        o,
        e,
        e.chat.dataSourcesGrid(t.config),
        t.at,
        rt(`[data-data-sources-grid="${Pe(t.config.id)}"]`),
        `sources-${t.config.id}`
      );
      return;
    case "marketingDataSourcesGrid":
      at(
        o,
        e,
        e.chat.marketingDataSourcesGrid(t.config),
        t.at,
        `[data-marketing-data-sources-grid="${Pe(t.config.id)}"]`,
        `marketing-sources-${t.config.id}`
      );
      return;
    case "personalizationSwipeGame":
      ao(o, e, t.config, t.at);
      return;
    case "sequenceEngagement":
      at(
        o,
        e,
        e.chat.sequenceEngagement(t.config),
        t.at,
        rt(`[data-sequence-engagement="${Pe(t.config.id)}"]`),
        `sequence-${t.config.id}`
      );
      return;
    case "cursorMove":
      o.add(e.cursor.moveTo(t.target, t.options), t.at);
      return;
    case "cursorDrag":
      o.add(e.cursor.dragTo(t.target, t.options), t.at);
      return;
    case "custom":
      o.add(t.build(e), t.at);
      return;
  }
}
function to(o) {
  return Array.isArray(o.steps) ? o.steps : [o.label];
}
function at(o, e, t, a, i, r) {
  o.add(t, a), o.add(io(e, i, r), "+=0.06");
}
function ao(o, e, t, a) {
  const i = rt(
    `[data-personalization-swipe-game="${Pe(t.id)}"]`
  );
  o.add(e.chat.personalizationSwipeGame(t), a), t.signals.forEach((r, n) => {
    const s = `${i} [data-swipe-card="${Pe(r.id)}"]`, l = r.decision === "use" ? 1 : -1, d = r.decision === "use" ? "right" : "left", c = Q(s, d, {
      desktop: { x: l * 154, y: n % 2 === 0 ? -18 : 16 },
      tablet: { x: l * 132, y: n % 2 === 0 ? -14 : 14 },
      mobile: { x: l * 86, y: n % 2 === 0 ? -10 : 10 }
    }, !1);
    o.add(
      e.cursor.moveTo(Q(s, "center", {}, !1), {
        intent: "hover",
        mode: "default",
        speed: n === 0 ? "normal" : "quick",
        overshoot: !1,
        settle: !1,
        label: `swipe-card-${r.id}-center`
      }),
      n === 0 ? "+=0.2" : "+=0.12"
    ), o.add(
      e.cursor.dragTo(c, {
        speed: "slow",
        releaseHold: 0.08,
        label: `swipe-card-${r.id}-${r.decision}`
      }),
      "-=0.02"
    ), o.add(e.chat.swipePersonalizationCard(t.id, r.id, r.decision), "<+=0.2");
  }), o.add(
    e.cursor.moveTo(Za, {
      intent: "hover",
      mode: "default",
      speed: "slow",
      overshoot: !1,
      settle: !1,
      label: `swipe-game-complete-${t.id}`
    }),
    "+=0.08"
  );
}
function io(o, e, t) {
  const a = $a(o).add(o.cursor.scanAcross(e, { label: t }));
  return ei(a);
}
function ro(o, e, t, a = O.thinkingShort, i = 1, r = "thinking", n = 0) {
  const s = a * Math.max(1, i), l = i >= 3 && Dr(e, t, {
    kind: "thinking",
    key: r,
    text: r,
    stepIndex: n,
    minChars: 16
  });
  l && o.add(
    e.cursor.scanAcross(Zs, {
      label: `thinking-skim-${Na(r)}`,
      match: "last",
      duration: 0.72
    }),
    "<+=0.58"
  ), !(s < js) && o.add(
    e.cursor.moveTo(Za, {
      intent: "hover",
      mode: "default",
      speed: "slow",
      overshoot: !1,
      settle: !1,
      label: `thinking-idle-${Na(r)}`
    }),
    l ? "+=0.08" : "<+=0.08"
  );
}
function no(o, e, t, a) {
  Dr(e, t, a) && o.add(
    e.cursor.scanAcross(a.selector, {
      label: `text-skim-${a.label}`,
      match: "last",
      duration: 0.68
    }),
    "+=0.04"
  );
}
function so() {
  return {
    textCandidateCount: 0,
    textSkimCount: 0,
    lastTextSkimStep: Number.NEGATIVE_INFINITY
  };
}
function Dr(o, e, t) {
  const a = t.text.trim(), i = t.minChars ?? Xs;
  if (a.length < i || e.textSkimCount >= Qs) return !1;
  const r = e.textCandidateCount;
  e.textCandidateCount += 1;
  const n = e.textSkimCount === 0, s = t.stepIndex - e.lastTextSkimStep >= Js, l = oo(`${o.story.id}:${t.kind}:${r}:${t.key}`), d = r > 0 && r % 3 === 0, c = n || s && (l >= 0.58 || d);
  return c && (e.textSkimCount += 1, e.lastTextSkimStep = t.stepIndex), c;
}
function oo(o) {
  let e = 2166136261;
  for (let a = 0; a < o.length; a += 1)
    e ^= o.charCodeAt(a), e = Math.imul(e, 16777619);
  e += 1831565813;
  let t = e;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Pe(o) {
  return o.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function rt(o) {
  return `${ea} ${o}`;
}
function Na(o) {
  return o.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 36) || "state";
}
function lo(o, e) {
  const t = $a(o);
  return e.statusBefore && t.add(o.chat.setStatus(e.statusBefore)), t.add(o.chat.showComposer(), e.statusBefore ? "-=0.02" : void 0), e.fromEntry || t.add(
    o.cursor.moveTo(e.focusTarget ?? o.story.entry, {
      mode: "text",
      intent: "text",
      speed: "normal",
      label: `focus-${e.sendLabel}`
    }),
    "-=0.18"
  ), t.add(o.cursor.click("text"), "-=0.02").add(o.chat.setComposerFocus(!0), "-=0.14").add(o.chat.typeComposer(e.text, e.duration ?? O.typeMedium)).add(
    o.cursor.moveTo(Ys, {
      mode: "pointer",
      intent: "click",
      speed: "quick",
      label: e.sendLabel
    }),
    "-=0.16"
  ).add(o.cursor.click()).add(o.chat.setComposerFocus(!1), "-=0.08").add(o.chat.sendComposerText(), "-=0.06").add(o.chat.userMessage(e.text), "-=0.12").add(o.chat.hideComposer(), "-=0.05").add(o.chat.clearComposer()).add(
    o.cursor.moveTo(Za, {
      intent: "hover",
      mode: "default",
      speed: "slow",
      overshoot: !1,
      settle: !1,
      label: `post-interaction-${e.sendLabel}`
    }),
    "-=0.12"
  ), e.statusAfter && t.add(o.chat.setStatus(e.statusAfter), "<"), ei(t);
}
function $a(o) {
  const e = o.timeline();
  return e.pause(0), e;
}
function ei(o) {
  return o.paused(!1), o;
}
const co = [
  "Researching the company profile",
  "Learning the ICP and buyer roles",
  "Reading blog posts for positioning",
  "Scanning careers pages for priorities",
  "Mapping current GTM signals"
], uo = [
  {
    id: "founder-signal",
    label: "Strategy one",
    title: "Founder-led signal capture",
    summary: "Use hiring, funding, and founder activity to catch seed teams right as they start building a repeatable sales motion."
  },
  {
    id: "revops-consolidation",
    label: "Strategy two",
    title: "RevOps consolidation wedge",
    summary: "Lead with a data-quality audit for teams already showing CRM cleanup pain, then turn the gaps into a consolidation case."
  },
  {
    id: "pipeline-acceleration",
    label: "Strategy three",
    title: "Pipeline acceleration sprint",
    summary: "Package the strongest buyer and account signals into a short sprint for sales leaders who need near-term pipeline movement."
  }
], Or = [
  { key: "name", label: "Name", width: "1.45fr" },
  { key: "company", label: "Company", width: "1fr" },
  { key: "title", label: "Title", width: "1.45fr" }
], po = [
  { key: "name", label: "Name", width: "1.55fr" },
  { key: "company", label: "Company", width: "0.9fr" },
  { key: "title", label: "Title", width: "1.35fr" },
  { key: "email", label: "Email", width: "1.28fr" },
  { key: "number", label: "Number", width: "1.48fr" }
], ho = {
  id: "dev-tool-new-hires",
  title: "New hires at dev-tool companies",
  eyebrow: "Natural language search",
  count: "9 records",
  columns: Or,
  rows: [
    {
      id: "jamie-chen",
      values: {
        name: "Jamie Chen",
        company: "Ramp",
        title: "VP of Sales",
        avatarTone: "1",
        avatarUrl: "https://i.pravatar.cc/64?img=12",
        source: "signal"
      }
    },
    {
      id: "andre-park",
      values: {
        name: "Andre Park",
        company: "Ramp",
        title: "Head of Growth",
        avatarTone: "2",
        avatarUrl: "https://i.pravatar.cc/64?img=52",
        source: "signal"
      }
    },
    {
      id: "david-kim",
      values: {
        name: "David Kim",
        company: "Ramp",
        title: "Head of Revenue",
        avatarTone: "3",
        avatarUrl: "https://i.pravatar.cc/64?img=33",
        source: "signal"
      }
    },
    {
      id: "chandler-bree",
      values: {
        name: "Chandler Bree",
        company: "Square",
        title: "VP of Sales",
        avatarTone: "4",
        avatarUrl: "https://i.pravatar.cc/64?img=11",
        source: "database"
      }
    },
    {
      id: "ellen-nelle",
      values: {
        name: "Ellen Nelle",
        company: "Square",
        title: "Growth Engineer",
        avatarTone: "5",
        avatarUrl: "https://i.pravatar.cc/64?img=47",
        source: "database"
      }
    },
    {
      id: "chadley-dupre",
      values: {
        name: "Chadley Dupre",
        company: "Square",
        title: "Head of Revops",
        avatarTone: "6",
        avatarUrl: "https://i.pravatar.cc/64?img=59",
        source: "database"
      }
    },
    {
      id: "patrick-bateman",
      values: {
        name: "Patrick Bateman",
        company: "Stripe",
        title: "COO",
        avatarTone: "7",
        avatarUrl: "https://i.pravatar.cc/64?img=68",
        source: "engage"
      }
    },
    {
      id: "miles-kibble",
      values: {
        name: "Miles Kibble III",
        company: "Stripe",
        title: "Head of Chaos",
        avatarTone: "8",
        avatarUrl: "https://i.pravatar.cc/64?img=15",
        source: "engage"
      }
    },
    {
      id: "natalie-dank",
      values: {
        name: "Natalie Dank",
        company: "Stripe",
        title: "Money Manager",
        avatarTone: "9",
        avatarUrl: "https://i.pravatar.cc/64?img=49",
        source: "engage"
      }
    }
  ]
}, mo = {
  id: "recently-funded-dev-tools",
  title: "Raised in the past three months",
  eyebrow: "Filtered results",
  count: "3 records",
  variant: "filtered",
  columns: Or,
  rows: [
    {
      id: "jamie-chen",
      values: {
        name: "Jamie Chen",
        company: "Ramp",
        title: "VP of Sales",
        avatarTone: "1",
        avatarUrl: "https://i.pravatar.cc/64?img=12",
        source: "signal"
      }
    },
    {
      id: "andre-park",
      values: {
        name: "Andre Park",
        company: "Ramp",
        title: "Head of Growth",
        avatarTone: "2",
        avatarUrl: "https://i.pravatar.cc/64?img=52",
        source: "signal"
      }
    },
    {
      id: "david-kim",
      values: {
        name: "David Kim",
        company: "Ramp",
        title: "Head of Revenue",
        avatarTone: "3",
        avatarUrl: "https://i.pravatar.cc/64?img=33",
        source: "signal"
      }
    },
    {
      id: "patrick-bateman",
      values: {
        name: "Patrick Bateman",
        company: "Stripe",
        title: "COO",
        avatarTone: "7",
        avatarUrl: "https://i.pravatar.cc/64?img=68",
        source: "engage"
      }
    }
  ]
}, go = {
  id: "contact-enrichment",
  title: "I’m about to run an enrichment",
  subtitle: "Up to 84 credits could be spent across 2 fields on 14 records.",
  modeLabel: "Balanced",
  fields: [
    {
      title: "Business emails",
      steps: ["Unify Data", "5-Step Waterfall", "FullEnrich"]
    },
    {
      title: "Mobile phones",
      steps: ["Unify Data", "5-Step Waterfall", "FullEnrich"]
    }
  ]
}, fo = {
  id: "data-marketplace-sources",
  title: "Specific vendors by data area",
  subtitle: "Unify routes each search across the right partner sources for the job.",
  sources: [
    {
      id: "5x5",
      category: "Core Data (on-prem)",
      name: "5x5",
      detail: "On-premise company and contact datasets.",
      logoSrc: "/data-logos/5x5.svg"
    },
    {
      id: "pdl",
      category: "Core Data (on-prem)",
      name: "PDL",
      detail: "People and company records for core B2B coverage.",
      logoSrc: "/data-logos/PDL.png"
    },
    {
      id: "mixrank",
      category: "Core Data (on-prem)",
      name: "MixRank",
      detail: "Company, app, and advertising intelligence.",
      logoSrc: "/data-logos/MixRank.png"
    },
    {
      id: "snitcher",
      category: "Web Intent",
      name: "Snitcher",
      detail: "Website visitor identification and account intent.",
      logoSrc: "/data-logos/Snitcher.svg"
    },
    {
      id: "demandbase",
      category: "Web Intent",
      name: "Demandbase",
      detail: "Account identification and intent signals.",
      logoSrc: "/data-logos/Demandbase.svg"
    },
    {
      id: "waterfall-io",
      category: "Enrichment Waterfall",
      name: "Waterfall.io",
      detail: "Waterfall orchestration for enrichment coverage.",
      logoSrc: "/data-logos/Waterfall.svg"
    },
    {
      id: "fullenrich",
      category: "Enrichment Waterfall",
      name: "FullEnrich",
      detail: "Email and phone enrichment across multiple providers."
    },
    {
      id: "salesforce",
      category: "CRM",
      name: "Salesforce",
      detail: "CRM account, contact, and activity data.",
      logoSrc: "/data-logos/Salesforce.svg"
    },
    {
      id: "hubspot",
      category: "CRM",
      name: "HubSpot",
      detail: "CRM, marketing, and sales engagement records.",
      logoSrc: "/data-logos/HubSpot.png"
    },
    {
      id: "posthog",
      category: "Product Analytics",
      name: "PostHog",
      detail: "Product events, usage, and conversion behavior.",
      logoSrc: "/data-logos/PostHog.svg"
    },
    {
      id: "segment",
      category: "Product Analytics",
      name: "Segment",
      detail: "Customer event pipelines and audience traits.",
      logoSrc: "/data-logos/Segment.svg"
    },
    {
      id: "harmonic",
      category: "Company / Fundraising",
      name: "Harmonic",
      detail: "Startup company signals, growth, and fundraising data.",
      logoSrc: "/data-logos/Harmonic.svg"
    },
    {
      id: "ocean-io",
      category: "Company / Fundraising",
      name: "Ocean.io",
      detail: "Company lookalikes, segments, and account discovery.",
      logoSrc: "/data-logos/Ocean_io.svg"
    },
    {
      id: "openmart",
      category: "SMB Data",
      name: "OpenMart",
      detail: "Small business discovery and merchant data.",
      logoSrc: "/data-logos/OpenMart.svg"
    },
    {
      id: "store-leads",
      category: "Ecommerce",
      name: "Store Leads",
      detail: "E-commerce stores, platforms, categories, and growth signals.",
      logoSrc: "/data-logos/Store_Leads.png"
    },
    {
      id: "adyntel",
      category: "Ad Intelligence",
      name: "Adyntel",
      detail: "Ad spend, messaging, and competitive advertising signals.",
      logoSrc: "/data-logos/Adyntel.png"
    },
    {
      id: "adbeat",
      category: "Ad Intelligence",
      name: "Adbeat",
      detail: "Digital ad creatives, publishers, and campaign intelligence.",
      logoSrc: "/data-logos/Adbeat.svg"
    },
    {
      id: "upriver",
      category: "Ad Intelligence",
      name: "UpRiver",
      detail: "Ad strategy and competitive demand generation signals.",
      logoSrc: "/data-logos/UpRiver.svg"
    },
    {
      id: "se-ranking",
      category: "Web / SEO",
      name: "SE Ranking",
      detail: "Search visibility, keyword, and competitor SEO data."
    },
    {
      id: "serpstat",
      category: "Web / SEO",
      name: "Serpstat",
      detail: "SEO, PPC, and content intelligence.",
      logoSrc: "/data-logos/Serpstat.svg"
    },
    {
      id: "theirstack",
      category: "Tech Stack",
      name: "Theirstack",
      detail: "Technology install, job-posting, and stack signals.",
      logoSrc: "/data-logos/Theirstack.webp"
    },
    {
      id: "builtwith",
      category: "Tech Stack",
      name: "BuiltWith",
      detail: "Installed tools, web stack, pixels, and infrastructure data.",
      logoSrc: "/data-logos/BuiltWith.png"
    },
    {
      id: "predictleads",
      category: "Tech Stack",
      name: "PredictLeads",
      detail: "Hiring, technology, product, and business event signals.",
      logoSrc: "/data-logos/PredictLeads.png"
    },
    {
      id: "trigify",
      category: "Social Signals",
      name: "Trigify",
      detail: "Social buying signals and engagement events.",
      logoSrc: "/data-logos/Trigify.svg"
    },
    {
      id: "the-swarm",
      category: "Network & Relationships",
      name: "The Swarm",
      detail: "Network, relationship, and warm-introduction context.",
      logoSrc: "/data-logos/The_Swarm.svg"
    },
    {
      id: "buyercaddy",
      category: "Other Tools",
      name: "BuyerCaddy",
      detail: "Buyer tracking and sales workflow support.",
      logoSrc: "/data-logos/BuyerCaddy.png"
    },
    {
      id: "zerobounce",
      category: "Other Tools",
      name: "ZeroBounce",
      detail: "Email validation and deliverability checks.",
      logoSrc: "/data-logos/ZeroBounce.png"
    }
  ]
}, wo = {
  id: "enriched-dev-tool-contacts",
  title: "Enriched contacts",
  eyebrow: "Ready to engage",
  count: "3 contacts",
  variant: "enriched",
  columns: po,
  rows: [
    {
      id: "jamie-chen",
      values: {
        name: "Jamie Chen",
        company: "Ramp",
        title: "VP of Sales",
        email: "jamie@ramp.com",
        number: "+1 (628) 240-2744",
        avatarTone: "1",
        avatarUrl: "https://i.pravatar.cc/64?img=12",
        source: "signal"
      }
    },
    {
      id: "andre-park",
      values: {
        name: "Andre Park",
        company: "Ramp",
        title: "Head of Growth",
        email: "andre@ramp.com",
        number: "+1 (210) 555-2341",
        avatarTone: "2",
        avatarUrl: "https://i.pravatar.cc/64?img=52",
        source: "signal"
      }
    },
    {
      id: "david-kim",
      values: {
        name: "David Kim",
        company: "Ramp",
        title: "Head of Revenue",
        email: "david@ramp.com",
        number: "+1 (628) 230-9962",
        avatarTone: "3",
        avatarUrl: "https://i.pravatar.cc/64?img=33",
        source: "signal"
      }
    },
    {
      id: "chandler-bree",
      values: {
        name: "Chandler Bree",
        company: "Square",
        title: "VP of Sales",
        email: "jamie@ramp.com",
        number: "+1 (628) 240-2744",
        avatarTone: "4",
        avatarUrl: "https://i.pravatar.cc/64?img=11",
        source: "database"
      }
    },
    {
      id: "ellen-nelle",
      values: {
        name: "Ellen Nelle",
        company: "Square",
        title: "Growth Engineer",
        email: "andre@ramp.com",
        number: "+1 (210) 555-2341",
        avatarTone: "5",
        avatarUrl: "https://i.pravatar.cc/64?img=47",
        source: "database"
      }
    },
    {
      id: "chadley-dupre",
      values: {
        name: "Chadley Dupre",
        company: "Square",
        title: "Head of Revops",
        email: "david@ramp.com",
        number: "+1 (628) 230-9962",
        avatarTone: "6",
        avatarUrl: "https://i.pravatar.cc/64?img=59",
        source: "database"
      }
    },
    {
      id: "patrick-bateman",
      values: {
        name: "Patrick Bateman",
        company: "Stripe",
        title: "COO",
        email: "jamie@ramp.com",
        number: "+1 (628) 240-2744",
        avatarTone: "7",
        avatarUrl: "https://i.pravatar.cc/64?img=68",
        source: "engage"
      }
    },
    {
      id: "miles-kibble",
      values: {
        name: "Miles Kibble III",
        company: "Stripe",
        title: "Head of Chaos",
        email: "andre@ramp.com",
        number: "+1 (210) 555-2341",
        avatarTone: "8",
        avatarUrl: "https://i.pravatar.cc/64?img=15",
        source: "engage"
      }
    },
    {
      id: "natalie-dank",
      values: {
        name: "Natalie Dank",
        company: "Stripe",
        title: "Money Manager",
        email: "david@ramp.com",
        number: "+1 (628) 230-9962",
        avatarTone: "9",
        avatarUrl: "https://i.pravatar.cc/64?img=49",
        source: "engage"
      }
    }
  ]
}, bo = [
  {
    name: "battlecards.pdf",
    detail: "Competitive traps, landmines, proof points",
    type: "PDF"
  },
  {
    name: "voice-and-tone.docx",
    detail: "Founder voice, pacing, taboo phrases",
    type: "DOC"
  },
  {
    name: "outbound-playbook.pdf",
    detail: "Sequences, objection handling, CTA rules",
    type: "PDF"
  },
  {
    name: "icp-context.md",
    detail: "Best-fit accounts, disqualifiers, buyer pains",
    type: "MD"
  }
], _o = {
  id: "learned-outreach-style",
  title: "Learned outreach style",
  subtitle: "The agent extracts how your team writes, qualifies, and earns replies.",
  signals: [
    { label: "Voice", value: "Plainspoken, specific, no inflated urgency" },
    { label: "CTA", value: "Low-friction question before calendar asks" },
    { label: "Proof", value: "Lead with trigger + relevant customer pattern" },
    { label: "Guardrail", value: "Rejects weak ICP fit before drafting" }
  ],
  examples: [
    "Keep the opener grounded in a real business trigger.",
    "Avoid generic automation language unless the account shows ops pain."
  ]
}, yo = {
  id: "personalization-swipe-calibration",
  title: "Personalization preferences",
  subtitle: "A tiny game teaches the agent what should and should not show up in outreach.",
  prompt: "Swipe toward the personalization you would actually use.",
  labels: {
    avoid: "Never me",
    use: "I'd use it"
  },
  completeLabel: "3 personalization rules captured",
  signals: [
    {
      id: "recent-post-topic",
      label: "{{reference something they recently posted}}",
      detail: "Use a real public post when it connects to the reason for reaching out.",
      decision: "use"
    },
    {
      id: "local-weather",
      label: "Hope the weather in {{city}} is treating you well",
      detail: "A location warm-up that adds words without adding context.",
      decision: "avoid"
    },
    {
      id: "mutual-connection",
      label: "{{mention a mutual connection}}",
      detail: "Useful when the shared contact creates a credible reason to compare notes.",
      decision: "use"
    }
  ]
}, xo = {
  id: "personalized-lead-proximity",
  title: "Ranked leads with proximity fields",
  subtitle: "Each lead gets a relationship-aware reason to personalize the first touch.",
  leads: [
    {
      rank: "01",
      name: "Maya Patel",
      company: "OrbitGrid",
      title: "VP Revenue",
      proximity: "Same school",
      personalization: "Hey, you went to the same school as Joel and both studied systems design.",
      score: "94"
    },
    {
      rank: "02",
      name: "Evan Brooks",
      company: "Northstar Dev",
      title: "Head of Growth",
      proximity: "Mutual connection",
      personalization: "You both know Priya Shah from the early PLG operators group.",
      score: "89"
    },
    {
      rank: "03",
      name: "Clara Wong",
      company: "BrightLayer",
      title: "RevOps Lead",
      proximity: "Shared background",
      personalization: "You both studied economics before moving into revenue operations.",
      score: "82"
    },
    {
      rank: "04",
      name: "Sam Hollis",
      company: "Apollo",
      title: "Growth Lead",
      proximity: "Warm signal",
      personalization: "They follow two of your customers and recently posted about data quality.",
      score: "76"
    }
  ]
}, vo = {
  id: "visitor-outreach-sequences",
  title: "Personalized sequence preview",
  subtitle: "Each visitor gets a channel plan based on company fit, page intent, and the person’s role.",
  peopleCount: "50 people",
  launchLabel: "Kick off sequence",
  sequences: [
    {
      name: "Maya Patel",
      company: "OrbitGrid",
      title: "VP Sales",
      signal: "Pricing page",
      subject: "OrbitGrid’s pricing-page interest",
      personalization: "Maya viewed pricing after OrbitGrid added two RevOps roles, so the opener ties visitor intent to cleaner account research.",
      steps: [
        {
          channel: "Email",
          label: "Lead with the trigger",
          body: "Mention the pricing visit and RevOps hiring pattern; ask if their team is evaluating ways to source better-fit accounts."
        },
        {
          channel: "LinkedIn",
          label: "Light proof",
          body: "Reference a similar sales team using Unify to turn inbound intent into researched outbound lists."
        },
        {
          channel: "Email",
          label: "Offer the play",
          body: "Send a short teardown of three accounts showing why they match OrbitGrid’s current motion."
        },
        {
          channel: "Call",
          label: "Use context",
          body: "Open with the pricing visit and ask whether pipeline quality or source coverage is the bigger gap."
        }
      ]
    },
    {
      name: "Evan Brooks",
      company: "Northstar Dev",
      title: "Head of Sales",
      signal: "Integrations",
      subject: "Northstar Dev’s integration-led growth",
      personalization: "Evan came through integrations after Northstar Dev expanded sales leadership, so the sequence frames Unify as a way to find accounts already showing ecosystem fit.",
      steps: [
        {
          channel: "Email",
          label: "Anchor to integrations",
          body: "Point to their integrations-page visit and the likely need to prioritize partner-fit accounts."
        },
        {
          channel: "LinkedIn",
          label: "Ask a narrow question",
          body: "Ask whether partner signals are already part of Northstar Dev’s outbound scoring."
        },
        {
          channel: "Email",
          label: "Show the workflow",
          body: "Share how Unify can pull partner usage, firmographics, and contact data into one sequence-ready list."
        },
        {
          channel: "Call",
          label: "Reference the path",
          body: "Mention the integrations research and ask if sales is prioritizing ecosystem-led campaigns this quarter."
        }
      ]
    },
    {
      name: "Clara Wong",
      company: "BrightLayer",
      title: "VP Revenue",
      signal: "Case study",
      subject: "BrightLayer’s case-study research",
      personalization: "Clara read a customer story, so the sequence mirrors the proof format and offers a concise account-selection playbook.",
      steps: [
        {
          channel: "Email",
          label: "Mirror the proof",
          body: "Reference the case study visit and connect it to finding more accounts that match the same buying pattern."
        },
        {
          channel: "LinkedIn",
          label: "Share a takeaway",
          body: "Send one concise observation about BrightLayer’s likely expansion motion based on the page viewed."
        },
        {
          channel: "Email",
          label: "Personalized follow-up",
          body: "Offer a mini list of 10 lookalike companies with the reason each one matches BrightLayer’s best-fit segment."
        },
        {
          channel: "Call",
          label: "Ask for fit",
          body: "Ask whether revenue is looking for more accounts like the case-study customer or a new adjacent segment."
        }
      ]
    }
  ],
  channels: []
}, Ao = {
  id: "visitor-sequence-build",
  title: "Building outbound sequence",
  subtitle: "Using Unify’s offering, visitor intent, and role-level context to draft the campaign.",
  templateLabel: "Generating sequence template from company offering",
  template: "Using Unify’s offering, visitor intent, role-specific pain, relevant proof, and a low-friction CTA.",
  total: 50,
  tracks: [
    {
      id: "companies",
      label: "Researching companies",
      detail: "Reading firmographics, page intent, recent hiring, and relevant account signals."
    },
    {
      id: "people",
      label: "Researching people",
      detail: "Checking role, seniority, likely ownership, and channel-specific personalization angles."
    }
  ]
}, So = [
  { key: "name", label: "Name", width: "1.2fr" },
  { key: "company", label: "Company", width: "0.95fr" },
  { key: "title", label: "Title", width: "1.15fr" },
  { key: "visit", label: "Last visit", width: "0.86fr" },
  { key: "signal", label: "Signal", width: "1.18fr" }
], Ni = [
  { id: "maya-patel-visitor", values: { name: "Maya Patel", company: "OrbitGrid", title: "VP Sales", visit: "12m ago", signal: "Pricing page", source: "signal", avatarTone: "1" } },
  { id: "evan-brooks-visitor", values: { name: "Evan Brooks", company: "Northstar Dev", title: "Head of Sales", visit: "18m ago", signal: "Integrations", source: "signal", avatarTone: "2" } },
  { id: "clara-wong-visitor", values: { name: "Clara Wong", company: "BrightLayer", title: "VP Revenue", visit: "27m ago", signal: "Case study", source: "engage", avatarTone: "3" } },
  { id: "andre-park-visitor", values: { name: "Andre Park", company: "Ramp", title: "Head of Sales", visit: "33m ago", signal: "Demo page", source: "signal", avatarTone: "4" } },
  { id: "jamie-chen-visitor", values: { name: "Jamie Chen", company: "Square", title: "VP Sales", visit: "42m ago", signal: "ROI calculator", source: "signal", avatarTone: "5" } },
  { id: "nina-kapoor-visitor", values: { name: "Nina Kapoor", company: "Mercury", title: "Sales Director", visit: "51m ago", signal: "Security page", source: "database", avatarTone: "6" } },
  { id: "david-kim-visitor", values: { name: "David Kim", company: "Stripe", title: "Revenue Lead", visit: "1h ago", signal: "Docs", source: "engage", avatarTone: "7" } },
  { id: "sam-hollis-visitor", values: { name: "Sam Hollis", company: "Apollo", title: "VP Sales", visit: "1h ago", signal: "Comparison", source: "signal", avatarTone: "8" } },
  { id: "rachel-cho-visitor", values: { name: "Rachel Cho", company: "Retool", title: "Head of Sales", visit: "2h ago", signal: "Pricing page", source: "database", avatarTone: "9" } },
  { id: "owen-lee-visitor", values: { name: "Owen Lee", company: "Linear", title: "Sales Lead", visit: "2h ago", signal: "Demo page", source: "signal", avatarTone: "1" } }
], ko = [
  { id: "fatima-ali-visitor", values: { name: "Fatima Ali", company: "Vercel", title: "VP Sales", visit: "2h ago", signal: "Enterprise", source: "signal", avatarTone: "2" } },
  { id: "leo-martin-visitor", values: { name: "Leo Martin", company: "Hex", title: "Head of Sales", visit: "3h ago", signal: "Blog", source: "database", avatarTone: "3" } },
  { id: "priya-rao-visitor", values: { name: "Priya Rao", company: "Census", title: "Sales Director", visit: "3h ago", signal: "Demo page", source: "engage", avatarTone: "4" } },
  { id: "jules-meyer-visitor", values: { name: "Jules Meyer", company: "Notion", title: "VP Sales", visit: "4h ago", signal: "Integrations", source: "signal", avatarTone: "5" } },
  { id: "marcus-reed-visitor", values: { name: "Marcus Reed", company: "Figma", title: "Revenue Lead", visit: "4h ago", signal: "Pricing page", source: "signal", avatarTone: "6" } },
  { id: "zoe-carter-visitor", values: { name: "Zoe Carter", company: "Rippling", title: "Head of Sales", visit: "5h ago", signal: "Case study", source: "engage", avatarTone: "7" } },
  { id: "liam-price-visitor", values: { name: "Liam Price", company: "Webflow", title: "VP Sales", visit: "5h ago", signal: "Security page", source: "database", avatarTone: "8" } },
  { id: "sara-nelson-visitor", values: { name: "Sara Nelson", company: "Airtable", title: "Sales Lead", visit: "6h ago", signal: "Comparison", source: "signal", avatarTone: "9" } },
  { id: "noah-singh-visitor", values: { name: "Noah Singh", company: "dbt Labs", title: "Head of Sales", visit: "6h ago", signal: "ROI calculator", source: "signal", avatarTone: "1" } },
  { id: "ava-garcia-visitor", values: { name: "Ava Garcia", company: "Gusto", title: "VP Revenue", visit: "7h ago", signal: "Demo page", source: "engage", avatarTone: "2" } }
], Co = {
  id: "website-visitors-sales",
  title: "Recent website visitors",
  eyebrow: "Visitor intent",
  count: "50 sales leaders",
  variant: "filtered",
  columns: So,
  rows: Ni,
  pagination: {
    pageSize: 10,
    totalRows: 50,
    activePage: 1,
    pages: [
      { page: 1, range: "1-10 of 50 people", rows: Ni },
      { page: 2, range: "11-20 of 50 people", rows: ko }
    ]
  },
  actions: [
    {
      id: "power-dialer",
      label: "Power dialer",
      icon: "dialer",
      tooltip: "Start power dialing",
      badge: "Coming soon",
      variant: "primary"
    },
    {
      id: "email-sequence",
      label: "Create outreach sequence",
      icon: "email",
      tooltip: "Build outreach sequence",
      variant: "secondary"
    }
  ]
}, To = {
  id: "clean-webinar-attendees",
  title: "Cleaned webinar attendees",
  eyebrow: "CSV cleanup",
  count: "6 normalized records",
  variant: "filtered",
  columns: [
    { key: "fullName", label: "Full name", width: "1.25fr" },
    { key: "email", label: "Email", width: "1.55fr" },
    { key: "company", label: "Company", width: "1fr" },
    { key: "status", label: "Status", width: "0.85fr" }
  ],
  rows: [
    {
      id: "maya-rodriguez",
      values: {
        fullName: "Maya Rodriguez",
        email: "maya.rodriguez@northstar.ai",
        company: "Northstar AI",
        status: "Normalized"
      }
    },
    {
      id: "ethan-cho",
      values: {
        fullName: "Ethan Cho",
        email: "ethan.cho@clearbit.dev",
        company: "Clearbit",
        status: "Normalized"
      }
    },
    {
      id: "priya-shah",
      values: {
        fullName: "Priya Shah",
        email: "priya.shah@orbitgrid.com",
        company: "OrbitGrid",
        status: "Deduped"
      }
    },
    {
      id: "lucas-meyer",
      values: {
        fullName: "Lucas Meyer",
        email: "lucas.meyer@ramp.com",
        company: "Ramp",
        status: "Fixed case"
      }
    },
    {
      id: "nina-kapoor",
      values: {
        fullName: "Nina Kapoor",
        email: "nina.kapoor@mercury.com",
        company: "Mercury",
        status: "Filled name"
      }
    },
    {
      id: "sam-hollis",
      values: {
        fullName: "Sam Hollis",
        email: "sam.hollis@apollo.io",
        company: "Apollo",
        status: "Normalized"
      }
    }
  ]
}, qr = [
  {
    id: "hit-ground-running",
    label: "Hit the ground running",
    navLabel: "Hit the ground running",
    navDescription: "Unify understands your business like you do. Use the latest frontier models to identify your next campaign ideas.",
    eyebrow: "Business onboarding",
    summary: "The assistant learns the company, researches public signals, and returns three GTM plays.",
    entry: Vs,
    entryLeadTime: $s,
    prepare: (o) => {
      o.chat.prepareSignup();
    },
    build: (o) => yt(o, [
      { kind: "status", text: "Sign up" },
      { kind: "cursorClick", nextMode: "text", at: "-=0.04" },
      { kind: "typeSignupEmail", email: "joel@acme.co", duration: O.typeShort },
      { kind: "status", text: "Building workspace", at: "-=0.16" },
      { kind: "transitionSignupToChat", at: `+=${O.beat}` },
      { kind: "status", text: "Researching Acme", at: "<" },
      { kind: "thinking", steps: co, hold: 0.46, at: "+=0.04" },
      { kind: "assistant", text: "I found three GTM paths worth testing first." },
      { kind: "status", text: "Game plans ready", at: "<" },
      { kind: "strategyPlans", plans: uo, at: "-=0.08" },
      Ft(St.right, "+=0.18")
    ])
  },
  {
    id: "data-marketplace",
    label: "100+ data sources at your fingertips",
    navLabel: "100+ data sources at your fingertips",
    navDescription: "A one-stop shop for your data needs, B2B contacts and companies, e-commerce, local businesses, technographics, and more in a single natural language search.",
    eyebrow: "Data marketplace",
    summary: "The assistant searches, filters, and enriches B2B company and contact data.",
    entry: Mi.dataMarketplace,
    entryLeadTime: Ri,
    build: (o) => yt(o, [
      {
        kind: "prompt",
        text: "Show me new hires at dev-tool companies with 50+ employees.",
        duration: O.typeLong,
        sendLabel: "send-data-search",
        statusBefore: "Searching data",
        statusAfter: "Searching 100+ sources",
        fromEntry: !0
      },
      {
        kind: "thinking",
        label: "Searching hiring signals, headcount, and company data",
        hold: O.thinkingMedium
      },
      { kind: "dataTable", config: ho, at: "-=0.04" },
      {
        kind: "prompt",
        text: "Filter to the ones that have raised in the past three months.",
        duration: O.typeMedium,
        sendLabel: "send-data-filter",
        statusAfter: "Filtering by funding",
        at: `+=${O.beat}`
      },
      {
        kind: "thinking",
        label: "Checking rounds announced since February 2026",
        hold: O.thinkingShort
      },
      { kind: "dataTable", config: mo, at: "-=0.04" },
      {
        kind: "prompt",
        text: "Okay, enrich these contacts.",
        duration: O.typeShort,
        sendLabel: "send-enrich-contacts",
        statusAfter: "Preparing enrichment",
        at: `+=${O.beat}`
      },
      { kind: "enrichmentPanel", config: go, at: "+=0.12" },
      { kind: "status", text: "Contacts enriched", at: "+=0.86" },
      { kind: "dataTable", config: wo, at: "-=0.02" },
      { kind: "marketingDataSourcesGrid", config: fo, at: "+=0.44" },
      Ft(St.bottomRight, "+=3")
    ])
  },
  {
    id: "crm-update",
    label: "Agent that knows you",
    navLabel: "An agent that knows you",
    eyebrow: "Context learning",
    summary: "The assistant learns your sales context, protects ICP fit, and ranks leads by relationship proximity.",
    entry: {
      desktop: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 270, y: -68 } },
      tablet: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 224, y: -54 } },
      mobile: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 172, y: -42 } }
    },
    entryLeadTime: 0.18,
    build: (o) => {
      const e = o.chat.prepareCsvDropArea({
        title: "Drop business context files",
        detail: "Battle cards, playbooks, ICP notes, voice docs, and messaging context."
      }), t = o.chat.prepareCursorFile("4 context files", o.cursor, "DOC"), a = Q("[data-chat-shell]", "center", {
        desktop: { x: 0, y: 74 },
        tablet: { x: 0, y: 64 },
        mobile: { x: 0, y: 56 }
      });
      return yt(o, [
        { kind: "status", text: "Waiting for context" },
        { kind: "custom", build: () => t.startFollow(), at: "+=0.04" },
        { kind: "custom", build: () => e.revealWhenCursorEnters(o.cursor), at: "<" },
        {
          kind: "cursorDrag",
          target: a,
          options: { mode: "drag", speed: "slow", releaseHold: 0.34, label: "drag-context-files" },
          at: "<+=0.1"
        },
        { kind: "custom", build: () => e.activate(), at: "<+=0.02" },
        { kind: "custom", build: () => e.complete(), at: "-=0.18" },
        { kind: "custom", build: () => t.landAsUploadedFiles(bo), at: "<" },
        { kind: "status", text: "Learning outreach style", at: "<" },
        {
          kind: "thinking",
          steps: [
            "Reading battle cards and competitive traps",
            "Extracting voice and tone rules",
            "Learning ICP disqualifiers",
            "Mapping playbook CTAs and objection handling"
          ],
          hold: 0.24,
          at: `+=${O.beat}`
        },
        { kind: "custom", build: () => o.chat.outreachStyleProfile(_o), at: "-=0.02" },
        {
          kind: "assistant",
          text: "Before drafting, I’ll calibrate which personalization patterns sound like you.",
          at: `+=${O.beat}`
        },
        {
          kind: "personalizationSwipeGame",
          config: yo,
          at: "+=0.06"
        },
        { kind: "status", text: "Personalization rules learned", at: "+=0.12" },
        {
          kind: "prompt",
          text: "Write a sequence for consumer fintech founders.",
          duration: O.typeShort,
          sendLabel: "send-bad-icp-request",
          statusAfter: "Checking ICP fit",
          at: `+=${O.beat}`
        },
        { kind: "assistant", text: "Are you sure? this doesn't fit your ICP", at: "+=0.08" },
        {
          kind: "prompt",
          text: "Okay, generate leads ranked by how personally connected they are to us.",
          duration: O.typeMedium,
          sendLabel: "send-proximity-list",
          statusAfter: "Ranking proximity",
          at: `+=${O.beat}`
        },
        {
          kind: "thinking",
          label: "Scoring shared schools, fields of study, mutual contacts, and warm signals",
          hold: O.thinkingMedium
        },
        { kind: "custom", build: () => o.chat.proximityLeadList(xo), at: "-=0.04" },
        Ft(St.bottomRight, "+=0.16")
      ]);
    }
  },
  {
    id: "research-brief",
    label: "Zero effort engagement",
    navLabel: "Zero effort engagement, built in",
    eyebrow: "Engagement engine",
    summary: "The assistant turns website visitor intent into a paginated list and engagement actions.",
    entry: Mi.researchBrief,
    entryLeadTime: Ri,
    build: (o) => {
      const e = Q(
        '[data-data-table="website-visitors-sales"] [data-table-page-button="2"]',
        "center"
      ), t = Q(
        '[data-data-table="website-visitors-sales"] [data-table-action="power-dialer"]',
        "center",
        { desktop: { x: 5, y: 0 }, tablet: { x: 4, y: 0 }, mobile: { x: 3, y: 0 } },
        !1
      ), a = Q(
        '[data-data-table="website-visitors-sales"] [data-table-action="email-sequence"]',
        "center",
        {},
        !1
      ), i = Q(
        '[data-sequence-person-button="visitor-outreach-sequences:next"]',
        "center"
      ), r = Q(
        '[data-sequence-kickoff="visitor-outreach-sequences"]',
        "center"
      );
      return yt(o, [
        {
          kind: "prompt",
          text: "Show me 50 sales leaders that have recently visited my website.",
          duration: O.typeLong,
          sendLabel: "send-visitor-sales-list",
          statusBefore: "Finding visitors",
          statusAfter: "Building visitor list",
          fromEntry: !0
        },
        { kind: "dataTable", config: Co, at: "-=0.02" },
        {
          kind: "cursorMove",
          target: e,
          options: { mode: "pointer", intent: "click", speed: "normal", label: "open-visitor-page-2" },
          at: "+=0.2"
        },
        { kind: "cursorClick", at: "-=0.02" },
        { kind: "custom", build: () => o.chat.dataTablePage("website-visitors-sales", 2), at: "-=0.03" },
        { kind: "status", text: "Ready to engage", at: "+=0.1" },
        {
          kind: "custom",
          build: () => o.timeline().to({}, { duration: O.beat + 0.58 })
        },
        {
          kind: "cursorMove",
          target: t,
          options: { mode: "pointer", intent: "hover", speed: "slow", label: "hover-power-dialer" },
          at: "+=0.42"
        },
        { kind: "custom", build: () => o.chat.dataTableActionTooltip("website-visitors-sales", "power-dialer", !0) },
        { kind: "custom", build: () => o.timeline().to({}, { duration: O.beat + 1 }), at: "+=0.12" },
        { kind: "custom", build: () => o.chat.dataTableActionTooltip("website-visitors-sales", "power-dialer", !1), at: "<" },
        {
          kind: "cursorMove",
          target: a,
          options: { mode: "pointer", intent: "hover", speed: "slow", label: "hover-email-sequence" }
        },
        { kind: "custom", build: () => o.chat.dataTableActionTooltip("website-visitors-sales", "email-sequence", !0) },
        { kind: "cursorClick", at: "+=0.18" },
        { kind: "custom", build: () => o.chat.dataTableActionTooltip("website-visitors-sales", "email-sequence", !1), at: "<+=0.02" },
        { kind: "status", text: "Building outreach sequence", at: "<" },
        { kind: "custom", build: () => o.chat.sequenceBuildThinking(Ao), at: "+=0.06" },
        { kind: "sequenceEngagement", config: vo, at: "-=0.02" },
        { kind: "custom", build: () => o.timeline().to({}, { duration: O.beat + 0.24 }), at: "+=0.04" },
        {
          kind: "cursorMove",
          target: i,
          options: { mode: "pointer", intent: "click", speed: "normal", label: "preview-evan-sequence" }
        },
        { kind: "cursorClick", at: "-=0.02" },
        { kind: "custom", build: () => o.chat.sequencePerson("visitor-outreach-sequences", 1), at: "-=0.03" },
        { kind: "custom", build: () => o.timeline().to({}, { duration: O.beat + 0.24 }), at: "+=0.04" },
        {
          kind: "cursorMove",
          target: i,
          options: { mode: "pointer", intent: "click", speed: "normal", label: "preview-clara-sequence" }
        },
        { kind: "cursorClick", at: "-=0.02" },
        { kind: "custom", build: () => o.chat.sequencePerson("visitor-outreach-sequences", 2), at: "-=0.03" },
        { kind: "custom", build: () => o.timeline().to({}, { duration: O.beat + 0.28 }), at: "+=0.04" },
        {
          kind: "cursorMove",
          target: r,
          options: { mode: "pointer", intent: "click", speed: "normal", label: "kickoff-visitor-sequence" }
        },
        { kind: "cursorClick", at: "-=0.02" },
        { kind: "custom", build: () => o.chat.sequenceKickoff("visitor-outreach-sequences"), at: "-=0.04" },
        { kind: "status", text: "Sequence kicked off", at: "<" }
      ]);
    }
  },
  {
    id: "csv-import-cleanup",
    label: "CSV import cleanup",
    navLabel: "Made for the messiness of the real world",
    eyebrow: "CSV cleanup",
    summary: "The assistant accepts a messy CSV, cleans attendee fields, and returns a normalized table.",
    entry: {
      desktop: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 270, y: 70 } },
      tablet: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 224, y: 56 } },
      mobile: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 172, y: 42 } }
    },
    entryLeadTime: 0.18,
    build: (o) => {
      const e = o.chat.prepareCsvDropArea(), t = o.chat.prepareCursorFile("webinar_attendees.csv", o.cursor), a = Q("[data-chat-shell]", "center", {
        desktop: { x: 0, y: 82 },
        tablet: { x: 0, y: 72 },
        mobile: { x: 0, y: 64 }
      });
      return yt(o, [
        { kind: "status", text: "Waiting for CSV" },
        { kind: "custom", build: () => t.startFollow(), at: "+=0.04" },
        { kind: "custom", build: () => e.revealWhenCursorEnters(o.cursor), at: "<" },
        {
          kind: "cursorDrag",
          target: a,
          options: { mode: "drag", speed: "slow", releaseHold: 0.46, label: "drag-webinar-csv" },
          at: "<+=0.1"
        },
        { kind: "custom", build: () => e.activate(), at: "<+=0.02" },
        { kind: "custom", build: () => e.complete(), at: "-=0.24" },
        { kind: "custom", build: () => t.landAsUploadedFile("webinar_attendees.csv", "1,284 attendees"), at: "<" },
        { kind: "status", text: "Cleaning CSV", at: "<" },
        {
          kind: "thinking",
          steps: [
            "Parsing webinar attendee CSV",
            "Normalizing email addresses",
            "Combining first and last name fields",
            "Removing duplicates and empty rows"
          ],
          hold: 0.34,
          at: `+=${O.beat}`
        },
        { kind: "assistant", text: "I cleaned the attendee list and normalized the fields that matter for routing and follow-up." },
        { kind: "dataTable", config: To, at: "-=0.04" },
        Ft(St.bottomRight, "+=0.18")
      ]);
    }
  }
], Ht = {
  radius: 48,
  sampleWindowMs: 900,
  minTravel: 34,
  minAxisReversals: 1
}, Ue = {
  sampleWindowMs: 960,
  minDurationMs: 620,
  minTravel: 480,
  minAxisReversals: 6,
  minAverageSpeed: 0.54,
  minTravelToNetRatio: 2.55,
  maxNetDistance: 165
}, J = {
  smoothing: 0.22,
  trailDistance: 60,
  minPointerDistance: 44,
  momentumScale: 0.2,
  momentumDecay: 0.88,
  minMomentum: 0.35,
  maxMomentumStep: 18,
  idleTimeoutMs: 1800,
  reengageRadius: 84,
  maxBrowserDistance: 600,
  returnDelayMs: 320
}, Wt = {
  durationMs: 920,
  pointIntervalMs: 155,
  radius: 24,
  smoothing: 0.2
}, ba = {
  durationMs: 980,
  amplitude: 18,
  arriveDistance: 3.5
};
class Eo {
  constructor(e, t, a = {}) {
    this.root = e, this.cursor = t, this.options = a;
  }
  root;
  cursor;
  options;
  paused = !1;
  active = !1;
  mode = "idle";
  listening = !1;
  samples = [];
  dismissSamples = [];
  target = null;
  pointer = null;
  sniffAnchor = null;
  sniffStartedAt = 0;
  nextSniffAt = 0;
  sniffIndex = 0;
  returnAt = 0;
  returnStart = null;
  returnStartedAt = 0;
  returnWaveDirection = 1;
  lastPointer = null;
  trailDirection = { x: -0.94, y: 0.34 };
  velocity = { x: 0, y: 0 };
  frame = 0;
  lastMoveAt = 0;
  setPaused(e) {
    if (this.paused !== e) {
      if (this.paused = e, this.samples = [], this.dismissSamples = [], e) {
        this.listen();
        return;
      }
      this.stopMimicking(), this.unlisten();
    }
  }
  destroy() {
    this.setPaused(!1);
  }
  listen() {
    this.listening || (document.addEventListener("pointermove", this.handlePointerMove, { passive: !0 }), document.addEventListener("pointerleave", this.handlePointerLeave, { passive: !0 }), this.listening = !0);
  }
  unlisten() {
    this.listening && (document.removeEventListener("pointermove", this.handlePointerMove), document.removeEventListener("pointerleave", this.handlePointerLeave), this.listening = !1);
  }
  handlePointerMove = (e) => {
    if (!this.paused) return;
    const t = { x: e.clientX, y: e.clientY };
    if (!this.isPointInsideViewport(t)) {
      this.active && this.startSniffing(), this.samples = [], this.dismissSamples = [];
      return;
    }
    if (this.active) {
      const a = performance.now();
      this.mode === "follow" ? (this.updateFollowTarget(t), this.lastMoveAt = a, this.trackDismissShake(t, a), this.hasDismissShake() && this.startReturnAfterPause(0)) : this.mode === "sniff" && this.isPointNearStoryCursor(t, J.reengageRadius) && this.resumeFollowing(t), this.scheduleFollow();
      return;
    }
    if (!this.isPointNearStoryCursor(t)) {
      this.pruneSamples(performance.now());
      return;
    }
    this.samples.push({ ...t, time: performance.now() }), this.pruneSamples(performance.now()), this.hasMimicGesture() && this.startMimicking(t);
  };
  handlePointerLeave = () => {
    this.active && this.startSniffing(), this.samples = [], this.dismissSamples = [];
  };
  startMimicking(e) {
    this.active || (this.active = !0, this.mode = "follow", this.lastPointer = this.samples[this.samples.length - 2] ?? null, this.updateFollowTarget(e), this.lastMoveAt = performance.now(), this.samples = [], this.dismissSamples = [], this.root.dataset.cursorMimicking = "true", this.options.onMimicStart?.(), this.cursor.beginMimicControl(), this.scheduleFollow());
  }
  stopMimicking() {
    this.active && (this.active = !1, this.mode = "idle", this.target = null, this.pointer = null, this.sniffAnchor = null, this.returnStart = null, this.returnStartedAt = 0, this.lastPointer = null, this.velocity = { x: 0, y: 0 }, this.dismissSamples = [], delete this.root.dataset.cursorMimicking, window.cancelAnimationFrame(this.frame), this.frame = 0, this.cursor.endMimicControl());
  }
  scheduleFollow() {
    this.frame || !this.active || (this.frame = window.requestAnimationFrame(this.followPointer));
  }
  followPointer = () => {
    if (this.frame = 0, !this.active) return;
    const e = performance.now();
    if (this.mode === "returnWait") {
      e >= this.returnAt && this.beginReturn(e), this.scheduleFollow();
      return;
    }
    if (this.mode === "sniff") {
      this.updateSniffTarget(e), this.target && this.cursor.mimicViewportPoint(this.target, Wt.smoothing, this.target), e - this.sniffStartedAt >= Wt.durationMs && this.startReturnAfterPause(), this.scheduleFollow();
      return;
    }
    if (this.mode === "return") {
      const t = this.getReturnHomePoint(), a = Po((e - this.returnStartedAt) / ba.durationMs), i = this.getReturnWavePoint(a, t), r = this.getReturnWavePoint(Math.min(1, a + 0.035), t);
      if (this.target = t, this.cursor.mimicViewportPoint(i, 1, a < 1 ? r : t), a >= 1 || it(this.getCursorViewportPoint(), t) <= ba.arriveDistance) {
        this.cursor.mimicViewportPoint(t, 1, t), this.completeReturn();
        return;
      }
      this.scheduleFollow();
      return;
    }
    if (!(this.mode !== "follow" || !this.target)) {
      if (this.isCursorTooFarFromBrowser()) {
        this.startReturnAfterPause();
        return;
      }
      if (e - this.lastMoveAt > J.idleTimeoutMs) {
        this.stopMimicking();
        return;
      }
      this.applyMomentum(e), this.cursor.mimicViewportPoint(this.target, J.smoothing, this.pointer ?? this.target), this.scheduleFollow();
    }
  };
  updateFollowTarget(e) {
    if (!this.isPointInsideViewport(e)) {
      this.startSniffing();
      return;
    }
    if (this.lastPointer) {
      const a = {
        x: e.x - this.lastPointer.x,
        y: e.y - this.lastPointer.y
      }, i = Math.hypot(a.x, a.y);
      i > 1.5 && (this.trailDirection = {
        x: a.x / i,
        y: a.y / i
      }, this.velocity = Ro(a, J.maxMomentumStep));
    }
    const t = {
      x: e.x - this.trailDirection.x * J.trailDistance,
      y: e.y - this.trailDirection.y * J.trailDistance
    };
    it(e, t) < J.minPointerDistance && (t.x = e.x - this.trailDirection.x * J.minPointerDistance, t.y = e.y - this.trailDirection.y * J.minPointerDistance), this.target = t, this.pointer = e, this.lastPointer = e;
  }
  resumeFollowing(e) {
    this.mode = "follow", this.sniffAnchor = null, this.nextSniffAt = 0, this.sniffIndex = 0, this.returnAt = 0, this.lastPointer = e, this.updateFollowTarget(e), this.dismissSamples = [], this.lastMoveAt = performance.now();
  }
  startSniffing() {
    if (!this.active || this.mode === "sniff" || this.mode === "return" || this.mode === "returnWait") return;
    const e = performance.now();
    this.mode = "sniff", this.sniffAnchor = this.getCursorViewportPoint(), this.sniffStartedAt = e, this.nextSniffAt = 0, this.sniffIndex = 0, this.pointer = null, this.velocity = { x: 0, y: 0 }, this.dismissSamples = [], this.scheduleFollow();
  }
  updateSniffTarget(e) {
    if (this.sniffAnchor || (this.sniffAnchor = this.getCursorViewportPoint()), this.target && e < this.nextSniffAt) return;
    const t = this.sniffIndex, a = t * 1.92, i = Wt.radius * (t % 2 === 0 ? 1 : 0.58);
    this.target = {
      x: this.sniffAnchor.x + Math.cos(a) * i,
      y: this.sniffAnchor.y + Math.sin(a) * i * 0.62
    }, this.sniffIndex += 1, this.nextSniffAt = e + Wt.pointIntervalMs;
  }
  applyMomentum(e) {
    !this.target || e - this.lastMoveAt < 48 || Math.hypot(this.velocity.x, this.velocity.y) < J.minMomentum || (this.target = {
      x: this.target.x + this.velocity.x * J.momentumScale,
      y: this.target.y + this.velocity.y * J.momentumScale
    }, this.velocity = {
      x: this.velocity.x * J.momentumDecay,
      y: this.velocity.y * J.momentumDecay
    });
  }
  startReturnAfterPause(e = J.returnDelayMs) {
    this.active && (this.mode = "returnWait", this.target = null, this.pointer = null, this.lastPointer = null, this.returnStart = null, this.returnStartedAt = 0, this.velocity = { x: 0, y: 0 }, this.dismissSamples = [], window.cancelAnimationFrame(this.frame), this.frame = 0, this.returnAt = performance.now() + e, this.scheduleFollow());
  }
  beginReturn(e) {
    const t = this.getCursorViewportPoint(), a = this.getReturnHomePoint();
    this.mode = "return", this.returnStart = t, this.returnStartedAt = e, this.returnWaveDirection = a.y >= t.y ? 1 : -1, this.target = a;
  }
  getReturnHomePoint() {
    return this.cursor.getHistoryParkViewportPoint();
  }
  getReturnWavePoint(e, t) {
    const a = this.returnStart ?? this.getCursorViewportPoint(), i = Io(e), r = t.x - a.x, n = t.y - a.y, s = Math.hypot(r, n), l = {
      x: a.x + r * i,
      y: a.y + n * i
    };
    if (s < 1) return l;
    const d = Math.sin(Math.PI * e), c = Math.sin(Math.PI * 2 * e) * d * ba.amplitude * this.returnWaveDirection;
    return {
      x: l.x - n / s * c,
      y: l.y + r / s * c
    };
  }
  completeReturn() {
    this.active = !1, this.mode = "idle", this.target = null, this.pointer = null, this.sniffAnchor = null, this.returnStart = null, this.returnStartedAt = 0, this.lastPointer = null, this.velocity = { x: 0, y: 0 }, this.dismissSamples = [], delete this.root.dataset.cursorMimicking, window.cancelAnimationFrame(this.frame), this.frame = 0, this.cursor.endMimicControl();
  }
  isCursorTooFarFromBrowser() {
    const e = this.root.querySelector("[data-chat-shell]")?.getBoundingClientRect();
    if (!e) return !1;
    const t = this.root.getBoundingClientRect(), a = this.cursor.readPosition(), i = {
      x: t.left + a.x,
      y: t.top + a.y
    };
    return Mo(i, e) > J.maxBrowserDistance;
  }
  isPointNearStoryCursor(e, t = Ht.radius) {
    const a = this.root.getBoundingClientRect(), i = this.cursor.readPosition(), r = {
      x: a.left + i.x,
      y: a.top + i.y
    };
    return it(e, r) <= t;
  }
  isPointInsideViewport(e) {
    return e.x >= 0 && e.x <= window.innerWidth && e.y >= 0 && e.y <= window.innerHeight;
  }
  getCursorViewportPoint() {
    const e = this.root.getBoundingClientRect(), t = this.cursor.readPosition();
    return {
      x: e.left + t.x,
      y: e.top + t.y
    };
  }
  pruneSamples(e) {
    this.samples = this.samples.filter((t) => e - t.time <= Ht.sampleWindowMs);
  }
  trackDismissShake(e, t) {
    this.dismissSamples.push({ ...e, time: t }), this.dismissSamples = this.dismissSamples.filter((a) => t - a.time <= Ue.sampleWindowMs);
  }
  hasMimicGesture() {
    return this.samples.length < 4 ? !1 : this.samples.reduce((t, a, i) => {
      const r = this.samples[i - 1];
      return r ? t + it(a, r) : t;
    }, 0) >= Ht.minTravel && this.countAxisReversals(this.samples) >= Ht.minAxisReversals;
  }
  hasDismissShake() {
    if (this.dismissSamples.length < 6) return !1;
    for (let e = 0; e <= this.dismissSamples.length - 6; e += 1)
      if (this.isDismissShakeWindow(this.dismissSamples.slice(e))) return !0;
    return !1;
  }
  isDismissShakeWindow(e) {
    const t = e[0], a = e[e.length - 1], i = Math.max(1, a.time - t.time), r = e.reduce((l, d, c) => {
      const u = e[c - 1];
      return u ? l + it(d, u) : l;
    }, 0), n = it(t, a), s = r / Math.max(n, 1);
    return i >= Ue.minDurationMs && r >= Ue.minTravel && n <= Ue.maxNetDistance && r / i >= Ue.minAverageSpeed && s >= Ue.minTravelToNetRatio && this.countAxisReversals(e) >= Ue.minAxisReversals;
  }
  countAxisReversals(e) {
    let t = 0, a = 0, i = 0;
    for (let r = 1; r < e.length; r += 1) {
      const n = e[r - 1], s = e[r], l = Di(s.x - n.x), d = Di(s.y - n.y);
      l && a && l !== a && (t += 1), d && i && d !== i && (t += 1), l && (a = l), d && (i = d);
    }
    return t;
  }
}
function it(o, e) {
  return Math.hypot(e.x - o.x, e.y - o.y);
}
function Po(o) {
  return Math.min(1, Math.max(0, o));
}
function Io(o) {
  return -(Math.cos(Math.PI * o) - 1) / 2;
}
function Mo(o, e) {
  const t = Math.max(e.left - o.x, 0, o.x - e.right), a = Math.max(e.top - o.y, 0, o.y - e.bottom);
  return Math.hypot(t, a);
}
function Ro(o, e) {
  const t = Math.hypot(o.x, o.y);
  return t <= e || t === 0 ? o : {
    x: o.x / t * e,
    y: o.y / t * e
  };
}
function Di(o) {
  return Math.abs(o) < 2 ? 0 : Math.sign(o);
}
const No = {
  minPixelDelta: 0.5
};
class Do {
  constructor(e, t, a, i, r, n) {
    this.root = e, this.stories = t, this.resolver = a, this.cursor = i, this.chat = r, this.options = n, this.storyProgress = this.stories.map(() => 0), this.pausedCursorMimic = new Eo(this.root, this.cursor, {
      onMimicStart: () => this.cancelHistoryParkMotion()
    });
  }
  root;
  stories;
  resolver;
  cursor;
  chat;
  options;
  activeIndex = 0;
  activeTimeline = null;
  autoAdvance = null;
  seekTween = null;
  resumeRestoreTimeline = null;
  resizeObserver = null;
  resizeTimer = 0;
  observedWidth = 0;
  observedHeight = 0;
  listeners = [];
  storyProgress;
  historyParkTimeline = null;
  pausedCursorMimic = null;
  storyTabButtons = [];
  scrubber = null;
  playButton = null;
  resumeButton = null;
  playing = !1;
  historyPaused = !1;
  mount() {
    this.attachControls(), this.observeLayout(), this.goTo(this.options.initialStory ?? 0);
  }
  play() {
    const e = this.historyPaused;
    this.setHistoryPaused(!1), this.chat.scrollToLive(), this.playing = !0, this.updatePlayButton(), !(e && this.restoreDataTablePagesBeforePlay()) && this.activeTimeline?.play();
  }
  pause() {
    this.setHistoryPaused(!1), this.playing = !1, this.activeTimeline?.pause(), this.autoAdvance?.kill(), this.updatePlayButton(), this.resumeRestoreTimeline?.kill(), this.resumeRestoreTimeline = null;
  }
  restoreDataTablePagesBeforePlay() {
    if (!this.activeTimeline) return !1;
    const e = this.chat.getDataTablePageRestores();
    if (!e.length) return !1;
    const t = w.timeline({
      onComplete: () => {
        this.resumeRestoreTimeline = null, this.playing && this.activeTimeline?.play();
      }
    });
    return e.forEach((a, i) => {
      const r = i === 0 ? 0 : ">";
      t.add(this.buildDataTablePageRestore(a), r);
    }), this.resumeRestoreTimeline = t, !0;
  }
  buildDataTablePageRestore(e) {
    const t = w.timeline();
    return t.add(
      this.cursor.moveTo(
        { target: e.target, anchor: "center" },
        {
          mode: "pointer",
          intent: "click",
          speed: "quick",
          label: `restore-${e.tableId}-page-${e.expectedPage}`
        }
      )
    ).add(this.cursor.click(), "-=0.02").add(this.chat.dataTablePage(e.tableId, e.expectedPage, { updateExpected: !1 }), "-=0.03"), t;
  }
  next() {
    const e = this.activeIndex + 1;
    if (e >= this.stories.length) {
      this.options.loop && this.resetStoryProgress(), this.goTo(this.options.loop ? 0 : this.activeIndex);
      return;
    }
    this.goTo(e);
  }
  previous() {
    const e = this.activeIndex - 1;
    if (e < 0) {
      this.goTo(this.options.loop ? this.stories.length - 1 : this.activeIndex);
      return;
    }
    this.goTo(e);
  }
  goTo(e) {
    const t = this.resolveStoryIndex(e);
    if (t < 0 || !this.stories[t]) return;
    const a = this.cursor.getPosition();
    this.storyProgress[t] = 0, this.stopTimeline(), this.setHistoryPaused(!1), this.activeIndex = t, this.activeTimeline = this.buildTimeline(this.activeIndex, a), this.activeTimeline.progress(0), this.playing = this.options.autoplay, this.updateStoryMeta(), this.updateProgress(), this.updatePlayButton(), this.options.onStoryChange?.(this.stories[this.activeIndex], this.activeIndex), this.options.autoplay && this.activeTimeline.play();
  }
  destroy() {
    this.stopTimeline(), this.pausedCursorMimic?.destroy(), this.resizeObserver?.disconnect(), window.clearTimeout(this.resizeTimer);
    for (const e of this.listeners) e();
    this.listeners = [];
  }
  getState() {
    return {
      story: this.stories[this.activeIndex],
      index: this.activeIndex,
      progress: this.activeTimeline?.progress() ?? 0,
      playing: this.playing
    };
  }
  buildTimeline(e, t = this.cursor.getPosition()) {
    const a = this.stories[e];
    this.root.dataset.activeStory = a.id, this.chat.reset(), this.resolver.refresh(), this.cursor.beginBuild(t, a.id);
    const i = {
      root: this.root,
      story: a,
      resolver: this.resolver,
      cursor: this.cursor,
      chat: this.chat,
      timeline: () => w.timeline()
    };
    a.prepare?.(i), this.resolver.refresh();
    const r = w.timeline({
      paused: !0,
      onUpdate: () => this.updateProgress(),
      onComplete: () => this.handleComplete()
    }), n = this.cursor.moveTo(a.entry, {
      mode: "text",
      intent: "entry",
      speed: "normal",
      label: "story-entry"
    }), s = a.build(i), l = a.entryLeadTime ?? 0.24;
    return r.add(n, 0), s.pause(0), r.add(s, Math.max(0, n.duration() - l)), s.paused(!1), this.chat.prepareStoryStart(), r;
  }
  stopTimeline() {
    this.autoAdvance?.kill(), this.seekTween?.kill(), this.resumeRestoreTimeline?.kill(), this.resumeRestoreTimeline = null, this.cancelHistoryParkMotion(), this.pausedCursorMimic?.setPaused(!1), this.activeTimeline?.kill(), this.activeTimeline = null, this.cursor.resetInteraction();
  }
  handleComplete() {
    const e = this.playing;
    this.playing = !1, this.updatePlayButton(), !(!this.options.autoplay || !e) && (!this.options.loop && this.activeIndex === this.stories.length - 1 || (this.autoAdvance?.kill(), this.autoAdvance = w.delayedCall(this.options.autoAdvanceDelay, () => this.next())));
  }
  seekTo(e, t = 0.28) {
    if (!this.activeTimeline) return;
    this.autoAdvance?.kill(), this.seekTween?.kill(), this.playing = !1, this.setHistoryPaused(!1), this.chat.stopScrollMotion();
    const a = Oo(e), i = this.activeTimeline.duration();
    this.seekTween = w.to(this.activeTimeline, {
      time: i * a,
      duration: t,
      ease: "power2.out",
      overwrite: !0,
      onUpdate: () => this.updateProgress(),
      onComplete: () => {
        this.updatePlayButton();
      }
    }), this.activeTimeline.pause(), this.updatePlayButton();
  }
  updateStoryMeta() {
    const e = this.stories[this.activeIndex];
    this.setText("[data-story-eyebrow]", e.eyebrow), this.setText("[data-story-label]", e.label), this.setText("[data-story-title]", e.label), this.setText("[data-story-summary]", e.summary);
    for (const t of this.storyTabButtons) {
      const a = t.dataset.storyTab === e.id;
      t.classList.toggle("is-active", a), t.setAttribute("aria-pressed", String(a));
    }
  }
  updateProgress() {
    const e = this.activeTimeline?.progress() ?? 0;
    this.storyProgress[this.activeIndex] = e, this.root.style.setProperty("--wa-story-progress", e.toFixed(4)), this.updateTabProgress(this.activeIndex), this.scrubber && document.activeElement !== this.scrubber && (this.scrubber.value = String(Math.round(e * 1e3)));
  }
  updatePlayButton() {
    const e = this.playButton;
    e && (e.textContent = this.playing ? "Pause" : "Play", e.setAttribute("aria-label", this.playing ? "Pause animation" : "Play animation"));
  }
  attachControls() {
    const e = this.root.querySelector("[data-story-tabs]");
    e && (this.storyTabButtons = this.stories.map((t, a) => this.createStoryTab(t, a)), e.replaceChildren(
      ...this.storyTabButtons
    )), this.scrubber = this.root.querySelector("[data-story-scrubber]"), this.playButton = this.root.querySelector("[data-toggle-play]"), this.resumeButton = this.root.querySelector("[data-history-resume]"), this.on("[data-prev-story]", "click", () => this.previous()), this.on("[data-next-story]", "click", () => this.next()), this.on("[data-toggle-play]", "click", () => {
      this.playing ? this.pause() : this.play();
    }), this.on("[data-history-resume]", "click", () => this.play()), this.on("[data-story-scrubber]", "input", (t) => {
      const a = t.currentTarget;
      this.seekTo(Number(a.value) / 1e3);
    }), this.attachChatHistoryScroll();
  }
  createStoryTab(e, t) {
    const a = document.createElement("button");
    a.className = "wa-story-tab", a.type = "button", a.dataset.storyTab = e.id, a.style.setProperty("--wa-tab-progress", "0"), a.setAttribute("aria-pressed", "false");
    const i = () => this.goTo(t);
    a.addEventListener("click", i), this.listeners.push(() => a.removeEventListener("click", i));
    const r = document.createElement("span");
    r.className = "wa-story-tab__marker", r.setAttribute("aria-hidden", "true");
    const n = document.createElement("span");
    n.className = "wa-story-tab__body";
    const s = document.createElement("span");
    if (s.className = "wa-story-tab__title", s.textContent = e.navLabel ?? e.label, n.append(s), e.navDescription) {
      const l = document.createElement("span");
      l.className = "wa-story-tab__description", l.textContent = e.navDescription, n.append(l);
    }
    return a.append(r, n), a;
  }
  attachChatHistoryScroll() {
    const e = this.root.querySelector("[data-chat-shell]"), t = this.root.querySelector("[data-chat-thread]");
    if (!e || !t) return;
    const a = (i) => {
      if (!this.activeTimeline || Math.abs(i.deltaX) > Math.abs(i.deltaY)) return;
      const r = this.getWheelPixelDelta(i);
      if (Math.abs(r) < No.minPixelDelta) return;
      const n = this.getThreadMaxScroll(t);
      if (n <= 0 || !(r < 0 || this.historyPaused)) return;
      const l = zr(t.scrollTop + r, 0, n);
      Math.abs(l - t.scrollTop) >= 0.5 && (i.preventDefault(), this.pauseForChatHistory(), t.scrollTop = l);
    };
    e.addEventListener("wheel", a, { passive: !1 }), this.listeners.push(() => e.removeEventListener("wheel", a));
  }
  getWheelPixelDelta(e) {
    return e.deltaMode === WheelEvent.DOM_DELTA_LINE ? e.deltaY * 16 : e.deltaMode === WheelEvent.DOM_DELTA_PAGE ? e.deltaY * window.innerHeight : e.deltaY;
  }
  pauseForChatHistory() {
    this.historyPaused || (this.playing = !1, this.autoAdvance?.kill(), this.seekTween?.kill(), this.activeTimeline?.pause(), this.chat.stopScrollMotion(), this.cancelHistoryParkMotion(), this.historyParkTimeline = this.cursor.parkForChatHistory(), this.setHistoryPaused(!0), this.updatePlayButton());
  }
  setHistoryPaused(e) {
    e || (this.pausedCursorMimic?.setPaused(!1), this.cancelHistoryParkMotion()), this.historyPaused = e, this.root.dataset.chatHistoryPaused = String(e), this.pausedCursorMimic?.setPaused(e);
    const t = this.resumeButton;
    t && (t.setAttribute("aria-hidden", String(!e)), t.tabIndex = e ? 0 : -1);
  }
  cancelHistoryParkMotion() {
    this.historyParkTimeline?.kill(), this.historyParkTimeline = null;
  }
  getThreadMaxScroll(e) {
    return Math.max(0, e.scrollHeight - e.clientHeight);
  }
  observeLayout() {
    if (!("ResizeObserver" in window)) return;
    const e = this.root.getBoundingClientRect();
    this.observedWidth = e.width, this.observedHeight = e.height, this.resizeObserver = new ResizeObserver((t) => {
      const a = t[0]?.contentRect;
      !a || !this.didObservedSizeChange(a.width, a.height) || (window.clearTimeout(this.resizeTimer), this.resizeTimer = window.setTimeout(() => this.rebuildForResize(), 140));
    }), this.resizeObserver.observe(this.root);
  }
  didObservedSizeChange(e, t) {
    const a = Math.abs(e - this.observedWidth) > 1, i = Math.abs(t - this.observedHeight) > 1;
    return !a && !i ? !1 : (this.observedWidth = e, this.observedHeight = t, !0);
  }
  rebuildForResize() {
    if (!this.activeTimeline) return;
    const e = this.activeTimeline.progress(), t = this.playing, a = this.cursor.getPosition();
    this.stopTimeline(), this.activeTimeline = this.buildTimeline(this.activeIndex, a), this.activeTimeline.progress(e).pause(), this.updateStoryMeta(), this.updateProgress(), t && this.play();
  }
  updateAllTabProgress() {
    this.storyTabButtons.forEach((e, t) => {
      e.style.setProperty("--wa-tab-progress", this.storyProgress[t]?.toFixed(4) ?? "0");
    });
  }
  updateTabProgress(e) {
    const t = this.storyTabButtons[e];
    t && t.style.setProperty("--wa-tab-progress", this.storyProgress[e]?.toFixed(4) ?? "0");
  }
  resetStoryProgress() {
    this.storyProgress.fill(0), this.updateAllTabProgress();
  }
  resolveStoryIndex(e) {
    return typeof e == "number" ? e : this.stories.findIndex((t) => t.id === e);
  }
  setText(e, t) {
    const a = this.root.querySelector(e);
    a && (a.textContent = t);
  }
  on(e, t, a) {
    const i = this.root.querySelector(e);
    i && (i.addEventListener(t, a), this.listeners.push(() => i.removeEventListener(t, a)));
  }
}
function zr(o, e, t) {
  return Math.min(t, Math.max(e, o));
}
function Oo(o) {
  return zr(o, 0, 1);
}
const Gt = ["mobile", "tablet", "desktop", "wide"];
class qo {
  constructor(e) {
    this.root = e;
  }
  root;
  rootRect = null;
  refresh() {
    this.rootRect = this.root.getBoundingClientRect();
  }
  getBreakpoint() {
    const e = this.getRootRect().width;
    return e < 680 ? "mobile" : e < 980 ? "tablet" : e < 1280 ? "desktop" : "wide";
  }
  resolve(e, t = "target") {
    const a = this.pickTarget(e), i = this.getRootRect();
    if (typeof a.x == "number" && typeof a.y == "number" && !a.target)
      return {
        x: a.x + (a.offset?.x ?? 0),
        y: a.y + (a.offset?.y ?? 0)
      };
    const r = this.findElement(a.target);
    if (!r)
      return this.resolveFallbackPoint(a, i);
    const n = r.getBoundingClientRect();
    let s = this.anchorPoint(n, a.anchor ?? "center");
    if (s = {
      x: s.x - i.left,
      y: s.y - i.top
    }, a.outside && (s = this.outsidePoint(s, n, i, a.outside)), a.humanOffset) {
      const l = Rr(t), d = Math.min(n.width * 0.18, 18), c = Math.min(n.height * 0.18, 14);
      s.x += (l() - 0.5) * d, s.y += (l() - 0.5) * c;
    }
    return {
      x: s.x + (a.offset?.x ?? 0),
      y: s.y + (a.offset?.y ?? 0)
    };
  }
  getRootRect() {
    return this.rootRect || this.refresh(), this.rootRect;
  }
  pickTarget(e) {
    if (this.isBreakpointMap(e)) {
      const t = this.getBreakpoint(), a = Gt.indexOf(t), i = [
        t,
        ...Gt.slice(0, a).reverse(),
        ...Gt.slice(a + 1)
      ];
      for (const r of i)
        if (e[r]) return e[r];
      return {};
    }
    return e;
  }
  isBreakpointMap(e) {
    return Gt.some((t) => t in e);
  }
  findElement(e) {
    return e ? e instanceof HTMLElement ? e : this.root.querySelector(e) : this.getMotionFallbackElement();
  }
  getMotionFallbackElement() {
    return this.root.querySelector("[data-chat-shell]") ?? this.root.querySelector(".wa-stage") ?? this.root;
  }
  resolveFallbackPoint(e, t) {
    const a = this.getMotionFallbackElement().getBoundingClientRect();
    let i = this.anchorPoint(a, e.anchor ?? "center");
    return i = {
      x: i.x - t.left,
      y: i.y - t.top
    }, e.outside && (i = this.outsidePoint(i, a, t, e.outside)), {
      x: i.x + (e.offset?.x ?? 0),
      y: i.y + (e.offset?.y ?? 0)
    };
  }
  anchorPoint(e, t) {
    const a = e.left + e.width * 0.5, i = e.top + e.height * 0.5;
    switch (t) {
      case "topLeft":
        return { x: e.left, y: e.top };
      case "topRight":
        return { x: e.right, y: e.top };
      case "bottomLeft":
        return { x: e.left, y: e.bottom };
      case "bottomRight":
        return { x: e.right, y: e.bottom };
      case "left":
        return { x: e.left, y: i };
      case "right":
        return { x: e.right, y: i };
      case "top":
        return { x: a, y: e.top };
      case "bottom":
        return { x: a, y: e.bottom };
      default:
        return { x: a, y: i };
    }
  }
  outsidePoint(e, t, a, i) {
    const r = t.left - a.left, n = t.right - a.left, s = t.top - a.top, l = t.bottom - a.top;
    switch (i) {
      case "left":
        return { ...e, x: r - 42 };
      case "right":
        return { ...e, x: n + 42 };
      case "top":
        return { ...e, y: s - 42 };
      case "bottom":
        return { ...e, y: l + 42 };
      default:
        return e;
    }
  }
}
function zo(o, e = {}) {
  if (o.classList.add("wa-section"), o.querySelector("[data-chat-shell]")) return;
  const t = e.showBuilder === !1 ? "" : `
      <div class="wa-builder" data-story-builder>
        <div class="wa-builder__header">
          <div>
            <p class="wa-builder__eyebrow">Story builder</p>
            <h3 class="wa-builder__title">Homepage story draft</h3>
          </div>
        </div>

        <div class="wa-builder__tabs" data-builder-tabs aria-label="Builder stories"></div>

        <div class="wa-builder__layout">
          <div class="wa-builder__workspace">
            <div class="wa-builder__add-rail" data-builder-add-rail aria-label="Add message"></div>
            <div class="wa-builder__thread" data-builder-thread aria-label="Editable story chat"></div>
          </div>

          <aside class="wa-builder__side">
            <div class="wa-builder__panel" data-builder-panel aria-label="Story inspector"></div>
            <div class="wa-builder-export">
              <div class="wa-builder-export__header">
                <span class="wa-builder-export__label">Story JSON</span>
                <button class="wa-builder-export__copy" type="button" data-builder-copy-json aria-label="Copy story JSON">
                  <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                    <path d="M7 7.5h8v8H7z M5 13H4.5a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1H12a1 1 0 0 1 1 1V5"></path>
                  </svg>
                  <span data-builder-copy-label>Copy</span>
                </button>
              </div>
              <textarea class="wa-builder-export__textarea" data-builder-export spellcheck="false" aria-label="Story JSON export"></textarea>
            </div>
            <p class="wa-builder__status" data-builder-status>Draft ready</p>
          </aside>
        </div>
      </div>
    `;
  o.innerHTML = `
    <div class="wa-section__inner">
      <div class="wa-copy">
        <h2 class="wa-copy__title" aria-label="Escape tab hell with a unified platform for prospecting, researching, and sequencing, all backed by frontier AI models.">
          <span>Escape tab hell with a unified platform for</span>
          <span>
            <em>prospecting</em><span>, </span><em>researching</em><span>, and </span><em>sequencing</em>
          </span>
          <span>all backed by frontier AI models.</span>
        </h2>
      </div>

      <div class="wa-story-controls" data-story-controls>
        <div class="wa-story-tabs" data-story-tabs></div>
        <div class="wa-controls-row" aria-label="Animation controls">
          <button class="wa-control-button" type="button" data-prev-story aria-label="Previous story">Prev</button>
          <button class="wa-control-button" type="button" data-toggle-play aria-label="Pause animation">Pause</button>
          <button class="wa-control-button" type="button" data-next-story aria-label="Next story">Next</button>
          <input class="wa-scrubber" data-story-scrubber type="range" min="0" max="1000" value="0" aria-label="Story progress">
        </div>
      </div>

      <div class="wa-stage">
        <div class="wa-stage__media" aria-hidden="true"></div>
        <div class="wa-window">
          <div class="wa-chat-shell" data-chat-shell>
            <div class="wa-chat-shell__bar">
              <div class="wa-chat-shell__lights" aria-hidden="true">
                <span></span><span></span><span></span>
              </div>
              <div class="wa-chat-shell__tab">
                <svg class="wa-chat-shell__mark" width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                  <path d="M5.71835 3.84074V0H0V5.12789C0 7.97387 2.13981 10.9988 6.10463 10.9988H8.4998V5.49938L7.40298 5.48406C6.46808 5.4708 5.71706 4.7386 5.71706 3.8395L5.71835 3.84074Z" fill="#FE3C01"/>
                  <path d="M11.2814 7.15899V10.9997H16.9998V5.87225C16.9998 3.02586 14.86 0.000976562 10.8952 0.000976562H8.5V5.50036L9.59682 5.51568C10.5317 5.52893 11.2827 6.26113 11.2827 7.16023L11.2814 7.15899Z" fill="#FE3C01"/>
                </svg>
                <span class="wa-chat-shell__title">Unify</span>
              </div>
            </div>

            <div class="wa-chat-shell__body">
              <div class="wa-signup-scene" data-signup-scene>
                <h3 class="wa-signup-scene__title">Sign up</h3>
                <div class="wa-signup-field" data-signup-field>
                  <span data-signup-email></span>
                </div>
              </div>

              <div class="wa-thread" data-chat-thread></div>
            </div>

            <div class="wa-composer" data-chat-input>
              <span class="wa-composer__placeholder" data-composer-text></span>
              <button class="wa-composer__send" type="button" data-send-button aria-label="Send message">
                ↑
              </button>
            </div>

            <button class="wa-history-resume" type="button" data-history-resume aria-hidden="true" tabindex="-1">
              <span class="wa-history-resume__icon" aria-hidden="true">▶</span>
              <span>Continue playing</span>
            </button>
          </div>
        </div>
      </div>

      ${t}
    </div>
  `;
}
function Bo(o, e = {}) {
  zo(o, { showBuilder: e.showBuilder !== !1 });
  const t = e.stories?.length ? e.stories : qr, a = new qo(o), i = new ps(o), r = new xs(o, a, {
    reducedMotion: e.reducedMotion ?? window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? !1
  }), n = new Do(o, t, a, r, i, {
    autoplay: e.autoplay ?? !0,
    loop: e.loop ?? !0,
    autoAdvanceDelay: e.autoAdvanceDelay ?? 3.2,
    initialStory: e.initialStory ?? 0,
    onStoryChange: e.onStoryChange
  }), s = n.destroy.bind(n), l = e.showBuilder === !1 ? null : new ks(o, t, {
    onStorySelect: (d) => n.goTo(d)
  });
  return n.mount(), l?.mount(), {
    play: n.play.bind(n),
    pause: n.pause.bind(n),
    next: n.next.bind(n),
    previous: n.previous.bind(n),
    goTo: n.goTo.bind(n),
    getState: n.getState.bind(n),
    destroy: () => {
      l?.destroy(), s(), i.destroy(), r.destroy();
    }
  };
}
const Lo = ':root{--wa-page-bg: #fffff9}html,body{margin:0;background:var(--wa-page-bg)}.wa-section,.wa-section *{box-sizing:border-box}.wa-section,.wa-section[data-theme=light]{--wa-font-sans: "Saans", "Avenir Next", Helvetica, sans-serif;--wa-font-feature: "Feature Text", Georgia, serif;--wa-bg: #fffff9;--wa-panel: #fffff9;--wa-panel-transparent: rgba(255, 255, 249, 0);--wa-ink: #252521;--wa-muted: #11110f;--wa-soft: #dcdcd4;--wa-browser-line: #d7d7cf;--wa-orange: #f23b0a;--wa-red: #f16055;--wa-yellow: #f6ba42;--wa-green: #58bd59;--wa-color-bg: var(--wa-bg);--wa-color-panel: var(--wa-panel);--wa-color-text: var(--wa-ink);--wa-color-heading: var(--wa-ink);--wa-color-heading-strong: #070707;--wa-color-copy: #171714;--wa-color-muted: #5e5c56;--wa-color-accent: var(--wa-orange);--wa-color-inverse: #fffff9;--wa-color-dark-surface: #171714;--wa-color-soft-surface: #f5f4ed;--wa-color-user-message: #ecebe5;--wa-color-input-line: #d9d8d1;--wa-color-positive: #177947;--wa-color-warning: #b44927;--wa-line-08: rgba(23, 23, 20, .08);--wa-line-10: rgba(23, 23, 20, .1);--wa-line-12: rgba(23, 23, 20, .12);--wa-line-16: rgba(23, 23, 20, .16);--wa-line-20: rgba(23, 23, 20, .2);--wa-placeholder: rgba(23, 23, 20, .38);--wa-browser-bar-bg: rgba(255, 255, 249, .96);--wa-window-highlight: rgba(255, 255, 255, .86);--wa-window-hairline: rgba(0, 0, 0, .03);--wa-card-accent-bg: rgba(242, 59, 10, .13);--wa-row-bg: rgba(245, 244, 237, .82);--wa-cursor-shadow: rgba(0, 0, 0, .12);--wa-media-warm-1: rgba(255, 139, 77, .32);--wa-media-warm-2: rgba(58, 20, 18, .78);--wa-media-warm-3: rgba(8, 6, 6, .24);--wa-media-warm-4: rgba(131, 49, 38, .86);--wa-media-line: rgba(255, 255, 249, .1);--wa-media-base-1: #1a0908;--wa-media-base-2: #6b2820;--wa-media-base-3: #24100d;--wa-media-shadow: 0 44px 96px rgba(24, 20, 16, .18);--wa-window-shadow: 0 52px 42px rgba(31, 30, 26, .22);--wa-card-shadow: 0 10px 28px rgba(23, 23, 20, .08);--wa-section-padding: 126px 32px 140px;--wa-content-max: 1400px;--wa-copy-max: 1100px;--wa-left-column: minmax(420px, 570px);--wa-right-column: minmax(560px, 660px);--wa-column-gap: 116px;--wa-row-gap: 82px;--wa-stage-width: 660px;--wa-stage-min-height: 650px;--wa-media-width: 418px;--wa-media-height: 720px;--wa-window-width: 590px;--wa-window-height: 530px;--wa-chat-x-padding: 19px;--wa-chat-entry-gap: 16px;--wa-chat-top-fade: 56px;--wa-chat-bottom-clearance: 110px;--wa-chat-first-entry-offset: calc(var(--wa-chat-top-fade) + 18px);--wa-ai-message-max-width: 540px;--wa-user-message-max-width: 360px;--wa-chat-message-weight: 430;--wa-chat-thinking-weight: 440;--wa-chat-detail-weight: 410;--wa-composer-outset-x: 34px;--wa-composer-bottom-outset: 24px;--wa-composer-height: 56px;--wa-composer-send-size: 40px;--wa-history-resume-height: 42px;--wa-cursor-default-width: 14px;--wa-cursor-default-height: 23px;--wa-title-size: clamp(38px, 3vw, 54px);--wa-title-line-height: 1.12;--wa-feature-title-size: clamp(25px, 1.7vw, 34px);--wa-feature-copy-size: clamp(16px, 1vw, 20px);--wa-radius-sm: 8px;--wa-radius-window: 18px;--wa-story-progress: 0;--wa-cursor-arrow-head: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAYAAADeB1slAAABP0lEQVR42t3XwXGEIBQG4NeBR49uB6QDSqAEtgPSAXvMzXTglpAOSAeWgB2wHbwMGTQq7gL6vOSfQR2HeZ+IOgiICIh4QcS3cEza/OaKf/k6A/jGZe6nANZadM6RIxPAOUfGGDmyAACAHIkAamQToESeAlTIS4ACSQJHkSzgCJIN7EWKgD1IMVCK7AJKkN1ALnIIyEEOAymEBNhAPskB33yNkMcpAPyWm0IPaK1pRmCMwURu2UBd19E5KeWzwo958SQghMBhGGArzrljX9PZVYKUMgK01mWAUmoq3rbt4mkwxkRA0zTZwPtYyU9e3/fz4h9jR8ZYhHRdlwVAeL3Xuc47+mLrcM6zAQir61sY0WXd0U9qVVURYq3NBpJNKRUB/gEgA/zVlt6m4oWUEOK8EYxzMSJ+n3rh4Izfpv8F/ADB/dNnKnKg1wAAAABJRU5ErkJggg==);--wa-cursor-arrow-tail: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAYAAADeB1slAAABSUlEQVR42t3X3XGEIBAHcDrw3nw0HVAC6YASSAekA+3AdOB1wnWgHWAHXAdkljkyRPxAFvOQnXF8UP8/XHAGibWWXHmQ/wNorYkx5jqAMUYopcWRXwBUaSQCSiOrQElkEyiF7AIlkEMAiyQBGCQZyEVOATnIaeAskgWcQbKBVAQFpCBo4AgpAuwhxQAoyLgUgCoF2LWjbVv7qmcu4IKUUvagumSgruto1EKIreBnGH4IcM7JPM+r7TDG+NCPrA9NCOGvuRHv9PuRBEgpf8L7vg9vcj1fAk3ThK15S9rZKaXIOI7Lm1xRSiNkGAZ/+Y7ZOsLDLmwJMMbCyb3lAu+QAJNaVVWEaK098onZ/E6QIKWMgGDJPjAALEU32p02Wez2HfpsOedbbzBhgc7PhUfgHHxwHRa4+blYqQmzipbI3bfrFfy1Ff4nv1DfGYDdsG+uObgAAAAASUVORK5CYII=);--wa-cursor-arrow: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAYAAADeB1slAAABXElEQVRIx7XWTZWDMBAA4DigN47UAeuAdYAEcEAdwHFv1AGVsA7AATgAB9RBlulL2AAhv8O8N23awnzNHy+EUkqWvC/5xdqoCS85/Y/fK4CObuN1CTCOI53nGR1ZgSRJaBzH6MgGIMtHbOQAYCNSABM5BbAQJYCBaAFfxAjwQYwBV8QKcEGsAVvECbBBnAFTxAswQbwBHYICSJAnOgAJNVi8LwHIp9wa+EBZljg9aNuWaqIyBsIwPHyXZdlZ4bdYXAukaUqnaZLCworJnR4V4r+EtmK8OyOgKIr15rquN/2GMd8DURSJl9xVwEMs1Pe9eOMPb8BG2iNN0xg97Ai7YB+5+BsU02ysmwog7HRdsR6JXf6GCjCpQRAcEDhysnjoAFUO+3mSLIbOB8j5AVkxTNQHIGycP3vjpAeDL1DxueAIvAsbrvIFbnwuJDGYrCJT5MWHixV+nhV3AazzD2y9OM7DgeyVAAAAAElFTkSuQmCC);--wa-cursor-hand: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABY2lDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokX2QsUvDUBDGv1aloHUQHRwcMolDlJIKuji0FURxCFXB6pS+pqmQxkeSIgU3/4GC/4EKzm4Whzo6OAiik+jm5KTgouV5L4mkInqP435877vjOCA5bnBu9wOoO75bXMorm6UtJfWMBL0gDObxnK6vSv6uP+P9PvTeTstZv///jcGK6TGqn5QZxl0fSKjE+p7PJe8Tj7m0FHFLshXyieRyyOeBZ71YIL4mVljNqBC/EKvlHt3q4brdYNEOcvu06WysyTmUE1jEDjxw2DDQhAId2T/8s4G/gF1yN+FSn4UafOrJkSInmMTLcMAwA5VYQ4ZSk3eO7ncX3U+NtYMnYKEjhLiItZUOcDZHJ2vH2tQ8MDIEXLW54RqB1EeZrFaB11NguASM3lDPtlfNauH26Tww8CjE2ySQOgS6LSE+joToHlPzA3DpfAEDp2ITpJYOWwAAAARjSUNQDA0AAW4D4+8AAACyZVhJZk1NACoAAAAIAAQBMQACAAAAGAAAAD4BMgACAAAAGgAAAFYBOwACAAAAIwAAAHCHaQAEAAAAAQAAAJQAAAAAQWRvYmUgUERGIGxpYnJhcnkgMTcuMDAAMjAyNS0wMi0xNCAwNTo0MTo0NCArMDAwMABBZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAAAljtskAAACQGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDxkYzpjcmVhdG9yPgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaT5BZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC9kYzpjcmVhdG9yPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBERiBsaWJyYXJ5IDE3LjAwPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgp5+ZGuAAACK0lEQVRYCWNgGAWjITAaAkMwBHKBbv4ExCeBWIhS9zOTYcDuHz9+vH779u23M2fO/AHqP0OGGXAtLHAW8Qw+dnZ2Ni0trSdALXzEa8Oukgm7MP1EKXWAINCpcpQ4lyIHCAsLp4mIiJwHOqAciNWAmJVUxxDrAGWgwezohq9bt+7S7du3nzIzM7eqqKjsBcofB2JQqBANiHHALCkpqWNsbGygbIfhCA4gMDIyugt0iIyBgYEAExPTa6C6xUDMSIwriHGA8507d96vWrXqPdDACKihjJaWlkyqqqpcQAtZgG74CxIXEhL68eLFi4umpqZmQK4/VC3F1OJDhw4d+Pfv3zteXt6jQNP+A8F3EAEDQLk3IDbQoceB1MdNmzbtB6rrpdhmqAEeTk5Ol0EWdHZ2HsTmAJAcMjh16tQhoLpF1HIAqLB6+evXrwe/f/9+PHny5APIlmFjA0tIkANA6YBqYPKaNWv2Y7MMm9jevXsPAG2eQYztxCRCkDlL6+rqFID0fxCHELh79y5I3TNC6kiVv/T48eNT2HyMLgbMlreBhruRagEh9YE6Ojr3gJZ9QrcQmf/o0aMTQIMeAzEzIQPJkZ/v4+Nz4e/fvy+RLYWxgVX0BVFRUVBB5EqO4cToAfmqn4+P70Nra+uhixcvHr53797xI0eOHExISDgFLJLfAuUDiTEIpoao4hKmGInWBLKjgFgfiDmB+DkQg+qB5UD8AYhHwWgIjIYA0SEAALLUdbtDe5+9AAAAAElFTkSuQmCC);--wa-cursor-ibeam: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAYAAAArdgcFAAABY2lDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokX2QsUvDUBDGv1aloHUQHRwcMolDlJIKuji0FURxCFXB6pS+pqmQxkeSIgU3/4GC/4EKzm4Whzo6OAiik+jm5KTgouV5L4mkInqP435877vjOCA5bnBu9wOoO75bXMorm6UtJfWMBL0gDObxnK6vSv6uP+P9PvTeTstZv///jcGK6TGqn5QZxl0fSKjE+p7PJe8Tj7m0FHFLshXyieRyyOeBZ71YIL4mVljNqBC/EKvlHt3q4brdYNEOcvu06WysyTmUE1jEDjxw2DDQhAId2T/8s4G/gF1yN+FSn4UafOrJkSInmMTLcMAwA5VYQ4ZSk3eO7ncX3U+NtYMnYKEjhLiItZUOcDZHJ2vH2tQ8MDIEXLW54RqB1EeZrFaB11NguASM3lDPtlfNauH26Tww8CjE2ySQOgS6LSE+joToHlPzA3DpfAEDp2ITpJYOWwAAAARjSUNQDA0AAW4D4+8AAACyZVhJZk1NACoAAAAIAAQBMQACAAAAGAAAAD4BMgACAAAAGgAAAFYBOwACAAAAIwAAAHCHaQAEAAAAAQAAAJQAAAAAQWRvYmUgUERGIGxpYnJhcnkgMTcuMDAAMjAyNS0wMi0yMSAyMjo0Nzo0MyArMDAwMABBZG9iZSBJbGx1c3RyYXRvciAyOS4wIChNYWNpbnRvc2gpAAAAAqACAAQAAAABAAAAF6ADAAQAAAABAAAAFgAAAABjOXNcAAACQGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDxkYzpjcmVhdG9yPgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaT5BZG9iZSBJbGx1c3RyYXRvciAyOS4wIChNYWNpbnRvc2gpPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC9kYzpjcmVhdG9yPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBERiBsaWJyYXJ5IDE3LjAwPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpTAn2BAAABF0lEQVQ4Ee2Vu26DQBBF7QjnL2KIW+iAys7DXwRtksofB/QUPGpHiiMBFbiDmztWIjkysjBbpIiRrnZnd+bsMtLsTCZ/+QEwqAdqJveQkVpSc6V7EXDfNM0+DEN0XbejvWnbdhcEAeq63tM2Rh/A4Oc0TWGaJlzXRRzHcBwHlmUhyzJu40kFPiXgjXr3PA+apsH3fYFuqdfR4ONAgvSiKMA1lGUp8LvjfeW5EAX+PQ7i3QzyGul0hfcm7pqW/5gWVqXOsj/8elVVUqbq5U/IuYfrpTfRQxcJXydJ8uvJtW378OTmec5tPA5lnfgxeCFNIYoiaRYftKVZfIrNJtLQNk6CLlkgQKekrf20uVvOV5Ram7vkEn2+X1iD5YNPxBZmAAAAAElFTkSuQmCC);--wa-cursor-openhand: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABY2lDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokX2QsUvDUBDGv1aloHUQHRwcMolDlJIKuji0FURxCFXB6pS+pqmQxkeSIgU3/4GC/4EKzm4Whzo6OAiik+jm5KTgouV5L4mkInqP435877vjOCA5bnBu9wOoO75bXMorm6UtJfWMBL0gDObxnK6vSv6uP+P9PvTeTstZv///jcGK6TGqn5QZxl0fSKjE+p7PJe8Tj7m0FHFLshXyieRyyOeBZ71YIL4mVljNqBC/EKvlHt3q4brdYNEOcvu06WysyTmUE1jEDjxw2DDQhAId2T/8s4G/gF1yN+FSn4UafOrJkSInmMTLcMAwA5VYQ4ZSk3eO7ncX3U+NtYMnYKEjhLiItZUOcDZHJ2vH2tQ8MDIEXLW54RqB1EeZrFaB11NguASM3lDPtlfNauH26Tww8CjE2ySQOgS6LSE+joToHlPzA3DpfAEDp2ITpJYOWwAAAARjSUNQDA0AAW4D4+8AAACyZVhJZk1NACoAAAAIAAQBMQACAAAAGAAAAD4BMgACAAAAGgAAAFYBOwACAAAAIwAAAHCHaQAEAAAAAQAAAJQAAAAAQWRvYmUgUERGIGxpYnJhcnkgMTcuMDAAMjAyNS0wMi0yMCAxNzoyNTozNyArMDAwMABBZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAAA8V+2fAAACQGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDxkYzpjcmVhdG9yPgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaT5BZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC9kYzpjcmVhdG9yPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBERiBsaWJyYXJ5IDE3LjAwPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgp5+ZGuAAACyElEQVRYCe2Vy2saURTG76hoxvcjLYSWLoKRarVIA6HZFUtJa3bBdFdcSFYuusqi4Lalu4p05cb2P1C6KCW07qQkCKkv3IgurNESBRPHKb5uvxlqcRGswUmh4IWDM3Ou5/vd7547Q8hiLBxYOPCfO2AH/0OE7F+tQw4hN0KDeKBWqzurq6tnOp3uHe6XEdsIA+JqBoQ+ILoQPpHJZG9CodCoXC5T3LdYlj1xOBxt5EtQV8xKcCnrOI57XK1WWY/Hox2NRj6NRsMoFArS7XZNcILN5/N6wFyD+I0rAcDqGrVajWxtbWkhcJNhGEIpFbU2NzdVw+GQnJ6eqgEWB0gDiUd/A7mUAyqVqlAsFsnGxoZYVwCAE+L1+vr6UqlUIoCQ7+zs2MPh8HWz2fxKCgAlitxGyDqdzlcAULfbTeRy+RB98McBl8tFCoWCqLe/v68ymUwEgM15AZb0en0R+3toMBhS2Otvx8fHnFKpJHa7nZ90wOl0EvTACHM7Akwmkxm22+3DeQGs2MtlWKtbW1u7g2LObDY7EIp6vV4WFhPkCcQpAEkulxsEAgFWyB8dHXGDwSAvXM8zFDheLayGoiBFE/7A/U803oUjlUrRVqsl5lZWVtoQds0jLv4Xdr/c29vjhao+n4/DQ9poNC4EGD/keZ6iP/qYq5obAAVuYdU8GpDW63UaDAZ7gsC0kU6nqVar/S6FuFgD1n+ORqOjaaKTuVgsRtG8nyQDQKFtq9V6Niky7drv9wtb9UJKAAZvt3I8Hp+mK+Z6vZ7QrF2I35USQKj1xGKxcM1mcypEJBIZAjYttbhYD8341maznVcqlQshDg4OKF7Xgv33ZgVgZp34ex6DY/ka6s93d3cH+CpqjEYjwbEkiUTiPJlMMv1+/ynmfpy17mUBxnWFb8MzWH0f512HD1ADr+kvePYe0RpPWvwuHFg4MIsDvwAylvevmzFHiwAAAABJRU5ErkJggg==);--wa-cursor-closedhand: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABY2lDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokX2QsUvDUBDGv1aloHUQHRwcMolDlJIKuji0FURxCFXB6pS+pqmQxkeSIgU3/4GC/4EKzm4Whzo6OAiik+jm5KTgouV5L4mkInqP435877vjOCA5bnBu9wOoO75bXMorm6UtJfWMBL0gDObxnK6vSv6uP+P9PvTeTstZv///jcGK6TGqn5QZxl0fSKjE+p7PJe8Tj7m0FHFLshXyieRyyOeBZ71YIL4mVljNqBC/EKvlHt3q4brdYNEOcvu06WysyTmUE1jEDjxw2DDQhAId2T/8s4G/gF1yN+FSn4UafOrJkSInmMTLcMAwA5VYQ4ZSk3eO7ncX3U+NtYMnYKEjhLiItZUOcDZHJ2vH2tQ8MDIEXLW54RqB1EeZrFaB11NguASM3lDPtlfNauH26Tww8CjE2ySQOgS6LSE+joToHlPzA3DpfAEDp2ITpJYOWwAAAARjSUNQDA0AAW4D4+8AAACyZVhJZk1NACoAAAAIAAQBMQACAAAAGAAAAD4BMgACAAAAGgAAAFYBOwACAAAAIwAAAHCHaQAEAAAAAQAAAJQAAAAAQWRvYmUgUERGIGxpYnJhcnkgMTcuMDAAMjAyNS0wMi0yMCAxNzoxODoxNyArMDAwMABBZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAAALcJCvAAACQGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDxkYzpjcmVhdG9yPgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaT5BZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC9kYzpjcmVhdG9yPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBERiBsaWJyYXJ5IDE3LjAwPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgp5+ZGuAAAB5ElEQVRYCe1UP2vqUBy9Jv6NURAe2FE7CuKbpG46tltxcHhDR7+CSFf3fgChS6lTcXEUVCgoCNKxRazDez6KiLymNCYx5vakaCltaW5Ly1vuD37k5ubcc07OvQkhvHgCPAGeAE+AJ/CfExA/ob+NNQdoTyQSOQyHwxXTNIXVarWFuR30FdpEf0v5AoHATT6fv/f5fItUKqW0223q9Xr1WCympNPpO1mWz75FGaQhdBHCGkWVSiWtXC7r9jiTyejNZpP2ej0qCIIBQ4rf7z/+SiMyCH9D6BYJrIbDoa37qlqtFk0kEnq/36cwqsOA9FUm9pPJ5D9bMZfLmbVa7ZX4ywmPx2MbEJwMuJ0A6+c/UNQeVyoVMRqNvrtsPp8TURSN5XJpvQvEQ1YDs8lk8siFbXDiJIPBgGCrrjVNc8Q6RrRmuBiNRrKiKI6ENgBnwVRV9ZwJzArCIbysVqvWy71+6z4ej9tOd1m5WXH7oVBInc1mb2k+zdXrdSpJ0h+Qsm4vqz4h+L5P8XZ34/H4SfD5oNvt0mAwqIJxj5XVxQpc4wSc7iOXy1UsFApmNpuV8Ocj0+mUNBoNpdPpuA3DKAJ7wsr7UQMb3p8Y/MJJT+PPF7As6+9isehgroa+2YD4lSfAE2BJ4AH/finPJ7GZOAAAAABJRU5ErkJggg==);position:relative;isolation:isolate;min-height:100svh;overflow:hidden;padding:var(--wa-section-padding);color:var(--wa-color-text);font-family:var(--wa-font-sans);letter-spacing:0;background:var(--wa-bg)}.wa-section[data-theme=dark]{--wa-bg: #10100d;--wa-panel: #191914;--wa-panel-transparent: rgba(25, 25, 20, 0);--wa-ink: #f7f4ea;--wa-muted: #f7f4ea;--wa-soft: #49473f;--wa-browser-line: #3d3b34;--wa-color-bg: var(--wa-bg);--wa-color-panel: var(--wa-panel);--wa-color-text: var(--wa-ink);--wa-color-heading: var(--wa-ink);--wa-color-heading-strong: #fffdf3;--wa-color-copy: #d9d4c8;--wa-color-muted: #aaa396;--wa-color-inverse: #10100d;--wa-color-dark-surface: #f7f4ea;--wa-color-soft-surface: #25241f;--wa-color-input-line: #504d45;--wa-line-08: rgba(255, 253, 243, .08);--wa-line-10: rgba(255, 253, 243, .1);--wa-line-12: rgba(255, 253, 243, .12);--wa-line-16: rgba(255, 253, 243, .16);--wa-line-20: rgba(255, 253, 243, .2);--wa-placeholder: rgba(255, 253, 243, .38);--wa-browser-bar-bg: rgba(25, 25, 20, .96);--wa-window-highlight: rgba(255, 253, 243, .08);--wa-window-hairline: rgba(0, 0, 0, .24);--wa-card-accent-bg: rgba(242, 59, 10, .2);--wa-row-bg: rgba(255, 253, 243, .06);--wa-media-shadow: 0 44px 96px rgba(0, 0, 0, .38);--wa-window-shadow: 0 52px 42px rgba(0, 0, 0, .42);--wa-card-shadow: 0 10px 28px rgba(0, 0, 0, .24)}@media(prefers-color-scheme:dark){.wa-section[data-theme=system]{--wa-bg: #10100d;--wa-panel: #191914;--wa-panel-transparent: rgba(25, 25, 20, 0);--wa-ink: #f7f4ea;--wa-muted: #f7f4ea;--wa-soft: #49473f;--wa-browser-line: #3d3b34;--wa-color-bg: var(--wa-bg);--wa-color-panel: var(--wa-panel);--wa-color-text: var(--wa-ink);--wa-color-heading: var(--wa-ink);--wa-color-heading-strong: #fffdf3;--wa-color-copy: #d9d4c8;--wa-color-muted: #aaa396;--wa-color-inverse: #10100d;--wa-color-dark-surface: #f7f4ea;--wa-color-soft-surface: #25241f;--wa-color-user-message: #2d2b26;--wa-color-input-line: #504d45;--wa-line-08: rgba(255, 253, 243, .08);--wa-line-10: rgba(255, 253, 243, .1);--wa-line-12: rgba(255, 253, 243, .12);--wa-line-16: rgba(255, 253, 243, .16);--wa-line-20: rgba(255, 253, 243, .2);--wa-placeholder: rgba(255, 253, 243, .38);--wa-browser-bar-bg: rgba(25, 25, 20, .96);--wa-window-highlight: rgba(255, 253, 243, .08);--wa-window-hairline: rgba(0, 0, 0, .24);--wa-card-accent-bg: rgba(242, 59, 10, .2);--wa-row-bg: rgba(255, 253, 243, .06);--wa-media-shadow: 0 44px 96px rgba(0, 0, 0, .38);--wa-window-shadow: 0 52px 42px rgba(0, 0, 0, .42);--wa-card-shadow: 0 10px 28px rgba(0, 0, 0, .24)}}.wa-section button,.wa-section input,.wa-section textarea,.wa-section select{font:inherit}.wa-section textarea{resize:none}.wa-section__inner{position:relative;z-index:1;display:grid;grid-template-columns:var(--wa-left-column) var(--wa-right-column);grid-template-rows:auto auto;column-gap:var(--wa-column-gap);row-gap:var(--wa-row-gap);align-items:start;width:min(var(--wa-content-max),100%);margin:0 auto}.wa-copy{grid-column:1 / -1;max-width:var(--wa-copy-max)}.wa-copy__title{display:block;margin:0;color:var(--wa-color-heading);font-family:var(--wa-font-sans);font-size:var(--wa-title-size);line-height:var(--wa-title-line-height);font-weight:520;letter-spacing:0}.wa-copy__title>span{display:block}.wa-copy__title em{color:var(--wa-orange);font-style:normal}.wa-story-controls{grid-column:1;grid-row:2;display:grid;gap:22px;padding-top:4px}.wa-story-tabs{display:grid;gap:33px}.wa-story-tab{--wa-tab-progress: 0;display:grid;grid-template-columns:4px minmax(0,1fr);gap:30px;align-items:start;width:100%;min-height:80px;padding:0;border:0;color:var(--wa-color-heading-strong);background:transparent;text-align:left;cursor:pointer}.wa-story-tab__marker{position:relative;display:block;width:4px;min-height:80px;overflow:hidden;background:var(--wa-soft)}.wa-story-tab__marker:before{content:"";position:absolute;inset:0;background:var(--wa-soft);transform:scaleY(var(--wa-tab-progress));transform-origin:top;transition:transform .12s linear;will-change:transform}.wa-story-tab.is-active .wa-story-tab__marker:before{background:var(--wa-color-accent)}.wa-story-tab__body{display:grid;gap:24px;padding-top:18px}.wa-story-tab__title{color:var(--wa-color-heading-strong);font-size:var(--wa-feature-title-size);line-height:1.08;font-weight:520;letter-spacing:0}.wa-story-tab__description{max-width:520px;color:var(--wa-color-copy);font-size:var(--wa-feature-copy-size);line-height:1.25;font-weight:450}.wa-story-tab:not(.is-active) .wa-story-tab__description{display:none}.wa-controls-row{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}.wa-stage{position:relative;grid-column:2;grid-row:2;width:var(--wa-stage-width);min-height:var(--wa-stage-min-height)}.wa-stage__media{position:absolute;top:-38px;right:-128px;width:var(--wa-media-width);height:var(--wa-media-height);border-radius:3px;background:linear-gradient(66deg,var(--wa-media-warm-1),transparent 24%),linear-gradient(124deg,var(--wa-media-warm-2),var(--wa-media-warm-3) 42%,var(--wa-media-warm-4)),repeating-linear-gradient(114deg,var(--wa-media-line) 0 2px,transparent 2px 46px),linear-gradient(18deg,var(--wa-media-base-1),var(--wa-media-base-2) 58%,var(--wa-media-base-3));box-shadow:var(--wa-media-shadow);opacity:.84;pointer-events:none}.wa-window{position:relative;z-index:2;width:var(--wa-window-width);margin:108px 0 0 155px;border-radius:var(--wa-radius-window);box-shadow:var(--wa-window-shadow)}.wa-chat-shell{position:relative;display:grid;grid-template-rows:auto minmax(0,1fr);height:var(--wa-window-height);overflow:visible;border:1px solid var(--wa-browser-line);border-radius:var(--wa-radius-window);background:var(--wa-panel);background-clip:padding-box;box-shadow:0 1px 0 var(--wa-window-highlight) inset,0 0 0 1px var(--wa-window-hairline)}.wa-chat-shell__bar{--wa-browser-tab-left: 90px;--wa-browser-tab-width: 100px;position:relative;display:flex;align-items:center;height:48px;padding:0 18px;border-bottom:0;border-radius:calc(var(--wa-radius-window) - 1px) calc(var(--wa-radius-window) - 1px) 0 0;background:var(--wa-browser-bar-bg);overflow:hidden}.wa-chat-shell__bar:after{content:"";position:absolute;right:0;bottom:0;left:0;height:1px;background:linear-gradient(to right,var(--wa-browser-line) 0,var(--wa-browser-line) var(--wa-browser-tab-left),transparent var(--wa-browser-tab-left),transparent calc(var(--wa-browser-tab-left) + var(--wa-browser-tab-width)),var(--wa-browser-line) calc(var(--wa-browser-tab-left) + var(--wa-browser-tab-width)),var(--wa-browser-line) 100%);pointer-events:none}.wa-chat-shell__lights{display:flex;gap:8px;align-items:center}.wa-chat-shell__lights span{width:12px;height:12px;border-radius:999px;background:var(--wa-red)}.wa-chat-shell__lights span:nth-child(2){background:var(--wa-yellow)}.wa-chat-shell__lights span:nth-child(3){background:var(--wa-green)}.wa-chat-shell__tab{position:absolute;left:var(--wa-browser-tab-left);bottom:-1px;display:inline-flex;align-items:center;gap:9px;height:36px;min-width:100px;padding:0 13px;border:1px solid var(--wa-browser-line);border-bottom:0;border-radius:8px 8px 0 0;background:var(--wa-panel)}.wa-chat-shell__mark{display:block;flex:0 0 auto;width:18px;height:11px}.wa-chat-shell__title{color:var(--wa-color-text);font-size:14px;line-height:1;font-weight:620}.wa-chat-shell__body{position:relative;display:grid;grid-template-rows:minmax(0,1fr);align-content:stretch;gap:0;min-height:0;padding:0 var(--wa-chat-x-padding);overflow:hidden;border-radius:0 0 calc(var(--wa-radius-window) - 1px) calc(var(--wa-radius-window) - 1px);background:var(--wa-panel);background-clip:padding-box}.wa-chat-shell__body:before{content:"";position:absolute;z-index:1;top:0;right:0;left:0;height:var(--wa-chat-top-fade);background:linear-gradient(to bottom,var(--wa-panel) 0,var(--wa-panel-transparent) 100%);pointer-events:none}.wa-signup-scene{position:absolute;inset:0;z-index:0;display:grid;align-content:center;justify-items:center;gap:22px;min-height:0;padding-bottom:0;color:var(--wa-ink);will-change:transform,opacity}.wa-signup-scene__title{margin:0;color:var(--wa-ink);font-family:var(--wa-font-feature);font-size:23px;line-height:1;font-weight:620;letter-spacing:0}.wa-signup-field{display:flex;align-items:center;width:min(292px,82%);min-height:48px;padding:0 14px;overflow:hidden;border:1px solid var(--wa-color-input-line);border-radius:var(--wa-radius-sm);color:var(--wa-ink);background:var(--wa-color-panel);font-size:14px;line-height:1;font-weight:460;white-space:nowrap}.wa-signup-field [data-signup-email]:empty:before{content:"you@company.com";color:var(--wa-placeholder)}.wa-signup-field [data-signup-email]:after{content:"";display:inline-block;width:1px;height:17px;margin-left:1px;background:currentColor;transform:translateY(3px);animation:wa-caret .92s steps(1,end) infinite}.wa-thread{position:relative;z-index:0;display:grid;gap:var(--wa-chat-entry-gap);align-content:start;height:100%;min-height:0;max-height:none;padding-bottom:var(--wa-chat-bottom-clearance);overflow:hidden;overscroll-behavior:contain}.wa-thread>.wa-message:first-child,.wa-message--first-active{margin-top:var(--wa-chat-first-entry-offset)}.wa-section[data-active-story=data-marketplace] .wa-thread{min-height:0;max-height:none}.wa-section[data-active-story=data-marketplace] .wa-result-grid{display:none}.wa-message{display:grid;grid-template-columns:minmax(0,max-content);gap:0;align-items:end;max-width:90%;will-change:transform,opacity}.wa-message[data-message-role=user]{justify-self:end;grid-template-columns:minmax(0,max-content)}.wa-message[data-message-role=assistant]:not(.wa-message--component){width:min(100%,var(--wa-ai-message-max-width));grid-template-columns:minmax(0,1fr)}.wa-message__avatar{display:none;width:24px;height:24px;border:1px solid var(--wa-line-10);border-radius:7px;background:var(--wa-color-dark-surface)}.wa-message[data-message-role=user] .wa-message__avatar{grid-column:2;background:var(--wa-orange)}.wa-message__body{width:100%;max-width:var(--wa-ai-message-max-width);padding:10px 12px;border:0;border-radius:8px;color:var(--wa-ink);background:transparent;font-size:13px;line-height:1.35;font-weight:var(--wa-chat-message-weight);overflow-wrap:anywhere}.wa-message[data-message-role=user] .wa-message__body{grid-column:1;grid-row:1;width:auto;max-width:var(--wa-user-message-max-width);background:var(--wa-color-user-message);color:var(--wa-ink)}.wa-message[data-message-role=assistant] .wa-message__body[data-streaming=true]:after{content:"";display:inline-block;width:1px;height:1em;margin-left:2px;background:currentColor;vertical-align:-.14em;animation:wa-caret .92s steps(1,end) infinite}.wa-message--component{grid-template-columns:minmax(0,1fr);width:100%;max-width:100%;align-items:start}.wa-message--component .wa-message__avatar{margin-top:0}.wa-message--component .wa-message__body{width:100%;max-width:none;padding:0;border:0;background:transparent;overflow:visible}.wa-message--file{width:auto;max-width:90%;justify-self:end}.wa-message--file .wa-message__body{width:auto;justify-self:end;padding:0;background:transparent}.wa-message[data-message-role=user].wa-message--file .wa-message__body{background:transparent}.wa-thinking-block{display:grid;align-content:start;align-items:start;justify-items:start;gap:11px;min-width:0}.wa-thinking{display:inline-grid;grid-template-columns:12px auto auto;align-items:center;justify-content:start;gap:6px;justify-self:start;min-height:18px;padding:0;color:#57544f;background:transparent;font-size:13px;line-height:1;font-weight:var(--wa-chat-thinking-weight);will-change:transform,opacity}.wa-thinking__glyph{position:relative;display:inline-block;width:11px;height:11px;opacity:.82;background-image:radial-gradient(circle at center,currentColor 1.1px,transparent 1.2px);background-position:0 0;background-size:4px 4px}.wa-thinking__title{color:#57544f}.wa-thinking__elapsed{margin-left:5px;color:#8e8a83;font-size:11px;font-weight:480}.wa-research-steps{position:relative;display:grid;align-content:start;gap:11px;max-height:none;overflow:visible;padding:1px 0 0 3px}.wa-research-steps:before{content:"";position:absolute;top:9px;bottom:9px;left:8px;width:1px;background:#e4ded6}.wa-research-step{--wa-step-progress: 0;position:relative;display:grid;grid-template-columns:13px minmax(0,1fr) 9px;align-content:start;gap:8px;align-items:start;min-height:58px;overflow:visible;padding:0;color:#56534f;background:transparent;font-size:13px;line-height:1.24;font-weight:var(--wa-chat-thinking-weight);will-change:transform,opacity}.wa-research-step[data-step-state=complete]{min-height:20px;align-items:start}.wa-research-step__check{position:relative;z-index:1;width:12px;height:12px;margin-top:2px;background:var(--wa-panel)}.wa-research-step__check:before,.wa-research-step__check:after{content:"";position:absolute}.wa-research-step__check:before{top:4px;left:4px;width:4px;height:4px;border-radius:999px;background:#9d9890}.wa-research-step[data-step-state=complete] .wa-research-step__check:before{top:3px;left:2px;width:8px;height:4px;border-bottom:1.4px solid #279443;border-left:1.4px solid #279443;border-radius:0;background:transparent;transform:rotate(-45deg)}.wa-research-step[data-step-state=failed] .wa-research-step__check:before,.wa-research-step[data-step-state=failed] .wa-research-step__check:after{top:6px;left:2px;width:9px;height:1.4px;border-radius:999px;background:#e1544c}.wa-research-step[data-step-state=failed] .wa-research-step__check:before{transform:rotate(45deg)}.wa-research-step[data-step-state=failed] .wa-research-step__check:after{transform:rotate(-45deg)}.wa-research-step__body{position:relative;z-index:1;display:grid;align-content:start;gap:4px;min-width:0}.wa-research-step__label{min-width:0;color:#55514d;font-size:13px;line-height:1.18;font-weight:var(--wa-chat-thinking-weight);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wa-research-step__detail{display:-webkit-box;min-width:0;overflow:hidden;color:#86817a;font-size:11px;line-height:1.28;font-weight:var(--wa-chat-detail-weight);white-space:normal;-webkit-box-orient:vertical;-webkit-line-clamp:2}.wa-sequence-thinking-progress{display:grid;grid-template-columns:auto minmax(0,1fr);gap:8px;align-items:center;min-width:0;padding-top:2px}.wa-sequence-thinking-progress__count{color:#8e8a83;font-size:10px;line-height:1;font-weight:560;font-variant-numeric:tabular-nums}.wa-sequence-thinking-progress__bar{display:block;height:4px;overflow:hidden;border-radius:999px;background:#e4ded6}.wa-sequence-thinking-progress__bar span{display:block;width:100%;height:100%;border-radius:inherit;background:#57544f;transform:scaleX(.02);transform-origin:left center;will-change:transform}.wa-thinking__title[data-streaming=true],.wa-research-step__label[data-streaming=true]{color:transparent;background:linear-gradient(105deg,#55514d 0% 30%,#9d9890 46%,#2f2e2a 58%,#55514d 74% 100%);background-size:220% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:wa-text-shimmer 1.35s ease-in-out infinite}.wa-thinking__title[data-streaming=true]:after,.wa-research-step__label[data-streaming=true]:after,.wa-research-step__detail[data-streaming=true]:after{content:"";display:inline-block;width:1px;height:1em;margin-left:2px;background:#55514d;vertical-align:-.12em;animation:wa-caret .92s steps(1,end) infinite}.wa-research-step__detail[data-streaming=true]:after{background:#86817a}.wa-research-step[data-step-state=complete] .wa-research-step__body{gap:0}.wa-research-step[data-step-state=complete] .wa-research-step__detail,.wa-research-step[data-step-state=complete] .wa-research-step__disclosure,.wa-research-step[data-step-state=complete] .wa-research-step__chevron{display:none}.wa-research-step__disclosure{display:inline-flex;align-items:center;justify-self:start;gap:3px;margin-top:2px;color:#7f7a73;font-size:10px;line-height:1;font-weight:var(--wa-chat-detail-weight)}.wa-research-step__disclosure:after{content:"";width:4px;height:4px;border-right:1px solid currentColor;border-bottom:1px solid currentColor;transform:translateY(-1px) rotate(45deg)}.wa-research-step:nth-child(n+2) .wa-research-step__disclosure:after{transform:translateY(1px) rotate(225deg)}.wa-research-step__chevron{position:relative;z-index:1;width:8px;height:14px;margin-top:1px}.wa-research-step__chevron:before{content:"";position:absolute;top:3px;left:1px;width:5px;height:5px;border-top:1px solid #aaa59d;border-right:1px solid #aaa59d;transform:rotate(45deg)}.wa-result-grid{display:grid;grid-template-columns:minmax(0,1fr);gap:9px;min-height:0}.wa-result-grid.has-strategy-plans{grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.wa-result-grid.has-data-table,.wa-result-grid.has-enrichment-panel{grid-template-columns:minmax(0,1fr)}.wa-csv-drop{position:absolute;inset:58px 10px 10px;z-index:2;display:grid;grid-template-columns:minmax(0,1fr);place-items:center;gap:14px;padding:32px;overflow:hidden;border:1px dashed rgba(242,59,10,.48);border-radius:12px;color:#514e49;background:#fffff9e6;box-shadow:inset 0 0 0 999px #fffff938;pointer-events:none}.wa-csv-drop[data-drop-state=active]{border-color:var(--wa-orange);background-color:#fff9f2eb;box-shadow:inset 0 0 0 999px #f23b0a0d}.wa-csv-drop[data-drop-state=complete]{border-style:solid;border-color:#27944352;background:#fffff9e6}.wa-csv-drop__copy{display:grid;gap:5px;min-width:0;justify-items:center;text-align:center}.wa-csv-drop__copy strong{color:#11110f;font-size:18px;line-height:1.12;font-weight:620}.wa-csv-drop__copy span{color:#7b766f;font-size:13px;line-height:1.24;font-weight:460}.wa-cursor-file{position:absolute;top:0;left:0;z-index:19;width:max-content;pointer-events:none;will-change:transform,opacity}.wa-file-landing-clone{box-sizing:border-box;will-change:transform}.wa-cursor-file__card{display:inline-grid;grid-template-columns:30px minmax(0,auto);gap:8px;align-items:center;max-width:190px;min-height:42px;padding:6px 10px 6px 6px;border:1px solid rgba(23,23,20,.12);border-radius:8px;color:#171714;background:#fffff9f5;box-shadow:0 16px 28px #1717142e}.wa-cursor-file--stack{width:190px;height:72px}.wa-cursor-file--stack .wa-cursor-file__card{position:absolute;top:0;left:0;width:172px;transform-origin:18px 28px}.wa-cursor-file--stack .wa-cursor-file__card:nth-child(1){z-index:4;transform:translate(1px) rotate(2deg)}.wa-cursor-file--stack .wa-cursor-file__card:nth-child(2){z-index:3;transform:translate(8px,8px) rotate(-5deg)}.wa-cursor-file--stack .wa-cursor-file__card:nth-child(3){z-index:2;transform:translate(-7px,15px) rotate(6deg)}.wa-cursor-file--stack .wa-cursor-file__card:nth-child(4){z-index:1;transform:translate(5px,23px) rotate(-8deg)}.wa-cursor-file__icon,.wa-uploaded-file__icon{display:inline-flex;align-items:center;justify-content:center;border-radius:5px;color:var(--wa-orange);background:#f23b0a1a;font-size:9px;line-height:1;font-weight:760}.wa-cursor-file__icon{width:30px;height:30px}.wa-cursor-file__name{min-width:0;overflow:hidden;font-size:11px;line-height:1;font-weight:560;text-overflow:ellipsis;white-space:nowrap}.wa-uploaded-file{display:inline-grid;grid-template-columns:34px minmax(0,1fr);gap:9px;align-items:center;min-width:226px;max-width:280px;min-height:50px;padding:8px 12px 8px 8px;border-radius:8px;color:var(--wa-ink);background:var(--wa-color-user-message)}.wa-uploaded-file__icon{width:34px;height:34px}.wa-uploaded-file__body{display:grid;gap:3px;min-width:0}.wa-uploaded-file__body strong,.wa-uploaded-file__body span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wa-uploaded-file__body strong{font-size:12px;line-height:1.1;font-weight:620}.wa-uploaded-file__body span{color:#716d66;font-size:10px;line-height:1;font-weight:460}.wa-uploaded-files{display:grid;gap:8px;justify-items:end}.wa-uploaded-files__summary{color:#716d66;font-size:10.5px;line-height:1;font-weight:520}.wa-uploaded-files__list{display:grid;gap:7px;justify-items:end}.wa-data-table{display:grid;gap:0;min-width:0;padding:0;overflow:visible;border:0;border-radius:0;background:transparent;box-shadow:none;color:#050505;will-change:transform,opacity}.wa-data-table__header{display:none;grid-template-columns:minmax(0,1fr) auto;gap:4px 10px;align-items:end}.wa-data-table__meta{grid-column:1 / -1;color:var(--wa-color-accent);font-size:10px;line-height:1;font-weight:760;letter-spacing:0;text-transform:uppercase}.wa-data-table__title{min-width:0;margin:0;color:var(--wa-ink);font-size:14px;line-height:1.08;font-weight:720;letter-spacing:0}.wa-data-table__count{color:var(--wa-color-muted);font-size:10px;line-height:1;font-weight:680;white-space:nowrap}.wa-data-table__grid{position:relative;display:grid;min-width:0;overflow:hidden;border:1px solid #eee6df;border-radius:5px;background:var(--wa-color-panel)}.wa-data-table__row{position:relative;display:grid;grid-template-columns:var(--wa-data-table-columns);min-width:0;min-height:27px;border-top:1px solid #eee6df;background:var(--wa-color-panel);will-change:transform,opacity}.wa-data-table__row:first-child{border-top:0}.wa-data-table__row[data-header=true]{min-height:25px;background:var(--wa-color-panel)}.wa-data-table__cell{display:flex;align-items:center;min-width:0;padding:0 8px;overflow:visible;border-left:0;color:#555452;font-size:10px;line-height:1.08;font-weight:500;overflow-wrap:anywhere;white-space:normal}.wa-data-table__cell:first-child{border-left:0}.wa-data-table__row[data-header=true] .wa-data-table__cell{color:#555452;font-size:11px;line-height:1;font-weight:560;text-transform:none}.wa-data-table__row[data-header=true] .wa-data-table__cell:last-of-type{padding-right:34px}.wa-data-table__add{position:absolute;top:4px;right:5px;display:inline-flex;align-items:center;justify-content:center;width:22px;height:18px;padding:0 0 1px;border:1px solid #eee6df;border-radius:5px;color:#050505;background:#fffffb;box-shadow:0 1px 1px #17171405;font-size:14px;line-height:1;font-weight:680}.wa-data-table__footer{display:flex;align-items:center;justify-content:space-between;gap:8px;min-width:0;padding-top:8px}.wa-data-table__actions{display:flex;align-items:center;gap:6px;min-width:0}.wa-data-table-action{position:relative;display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border:1px solid #ded9d2;border-radius:5px;color:#555452;background:transparent;box-shadow:0 1px 1px #17171408;cursor:pointer}.wa-data-table-action[data-action-variant=primary]{border-color:#ded9d2;color:#555452;background:transparent}.wa-data-table-action__icon{display:block;width:14px;height:14px;fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.8}.wa-data-table-action__badge{position:absolute;top:-5px;right:-5px;display:none;align-items:center;min-height:15px;padding:0 5px;border-radius:999px;color:#11110f;background:var(--wa-orange);font-size:8px;line-height:1;font-weight:680}.wa-data-table-action__tooltip{display:none}.wa-data-table-floating-tooltip{position:absolute;z-index:7;top:0;left:0;display:inline-flex;align-items:center;justify-content:center;min-height:29px;padding:0 11px;border-radius:6px;color:#fffffb;background:#11110f;box-shadow:0 8px 20px #1717142e;font-size:11px;line-height:1;font-weight:580;pointer-events:none;white-space:nowrap;opacity:0;visibility:hidden;transition:opacity .12s ease,visibility .12s ease}.wa-data-table-floating-tooltip[data-has-badge=true]{flex-direction:column;align-items:flex-start;min-height:50px;padding:8px 10px;gap:6px}.wa-data-table-floating-tooltip[data-visible=true]{opacity:1;visibility:visible}.wa-data-table-floating-tooltip__label{display:block}.wa-data-table-floating-tooltip__badge{display:inline-flex;align-items:center;min-height:15px;padding:0 6px;border-radius:999px;color:#11110f;background:#fffffb;font-size:8px;line-height:1;font-weight:650}.wa-data-table__pagination{display:inline-flex;align-items:center;justify-content:end;gap:7px;min-width:0;color:#716d66;font-size:9.5px;line-height:1;font-weight:500}.wa-data-table__range{white-space:nowrap}.wa-data-table__page-controls{display:inline-flex;align-items:center;gap:3px}.wa-data-table__page-button{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;padding:0;border:1px solid #ded9d2;border-radius:5px;color:#555452;background:#fffffb;font-size:9px;line-height:1;font-weight:560;cursor:pointer}.wa-data-table-action:hover,.wa-data-table-action[data-tooltip-visible=true],.wa-data-table__page-button:hover,.wa-data-table__page-button[data-tooltip-visible=true]{border-color:#bdb7ae;color:#11110f}.wa-data-table__page-button[data-active=true]{border-color:#11110f;color:#fffffb;background:#11110f}.wa-data-table__cell[data-column-key=name],.wa-data-table__cell[data-column-key=contact]{overflow:hidden;color:#050505;font-weight:520;white-space:nowrap}.wa-data-table__cell[data-column-key=email],.wa-data-table__cell[data-column-key=number]{color:#565553}.wa-data-table__cell[data-empty=true]{color:#aaa7a2}.wa-data-table-person{display:grid;grid-template-columns:25px minmax(0,1fr);gap:7px;align-items:center;width:100%;min-width:0;overflow:hidden}.wa-data-table-person__avatar-wrap{position:relative;display:block;width:25px;height:25px}.wa-data-table-person__avatar{display:inline-flex;align-items:center;justify-content:center;width:25px;height:25px;overflow:hidden;border:1px solid #d8d8d8;border-radius:999px;color:#1a1a18;background:linear-gradient(145deg,#d8dee8,#aeb7c5);font-size:8px;font-weight:700;letter-spacing:0}.wa-data-table-person__avatar img{display:block;width:100%;height:100%;object-fit:cover}.wa-data-table-person__avatar[data-avatar-tone="2"]{background:linear-gradient(145deg,#cde3d5,#7ea88f)}.wa-data-table-person__avatar[data-avatar-tone="3"]{background:linear-gradient(145deg,#9edff0,#27718b)}.wa-data-table-person__avatar[data-avatar-tone="4"]{background:linear-gradient(145deg,#f4f0eb,#b6b0a9)}.wa-data-table-person__avatar[data-avatar-tone="5"]{background:linear-gradient(145deg,#443f45,#141416);color:#fffff9}.wa-data-table-person__avatar[data-avatar-tone="6"]{background:linear-gradient(145deg,#bdeef4,#1590a8)}.wa-data-table-person__avatar[data-avatar-tone="7"]{background:linear-gradient(145deg,#f3f1dd,#a8d7f0)}.wa-data-table-person__avatar[data-avatar-tone="8"]{background:linear-gradient(145deg,#0992db,#055c9b);color:#fffff9}.wa-data-table-person__avatar[data-avatar-tone="9"]{background:linear-gradient(145deg,#cfc8b8,#39322b);color:#fffff9}.wa-data-table-person__source{position:absolute;right:0;bottom:0;width:12px;height:12px;border:1.5px solid var(--wa-color-panel);border-radius:999px;background:#ddff1c}.wa-data-table-person__source:before,.wa-data-table-person__source:after{content:"";position:absolute;background:#050505}.wa-data-table-person__source[data-source=signal]:before{right:3px;bottom:2px;width:6px;height:2px;border-radius:999px;transform:rotate(-34deg)}.wa-data-table-person__source[data-source=signal]:after{right:2px;bottom:5px;width:2px;height:5px;border-radius:999px;transform:rotate(12deg)}.wa-data-table-person__source[data-source=database]{border-radius:4px;background:#1f1f1f}.wa-data-table-person__source[data-source=database]:before{top:3px;left:3px;width:5px;height:5px;border:1.5px solid #fffff9;border-radius:2px;background:transparent}.wa-data-table-person__source[data-source=database]:after{display:none}.wa-data-table-person__source[data-source=engage]{border-radius:4px 7px 7px 4px;background:#6043ff}.wa-data-table-person__source[data-source=engage]:before{top:4px;left:3px;width:7px;height:4px;border-radius:1px;background:#fffff9;transform:rotate(-8deg)}.wa-data-table-person__source[data-source=engage]:after{display:none}.wa-data-table-person__name{min-width:0;overflow:hidden;color:#050505;font-size:10px;line-height:1.05;font-weight:520;overflow-wrap:normal;text-overflow:ellipsis;white-space:nowrap}.wa-enrichment-panel{--wa-step-progress: 0;display:grid;gap:11px;min-width:0;max-width:420px;overflow:visible;border:0;border-radius:0;background:transparent;box-shadow:none;color:#56534f;will-change:transform,opacity}.wa-enrichment-panel__header{display:inline-grid;grid-template-columns:12px auto auto;gap:6px;align-items:center;justify-content:start;min-height:18px;padding:0;border:0;color:#57544f;background:transparent;font-size:13px;line-height:1;font-weight:520}.wa-waterfall-rows{position:relative;display:grid;gap:9px;padding:1px 0 0 3px}.wa-waterfall-rows:before{content:"";position:absolute;top:9px;bottom:9px;left:8px;width:1px;background:#e4ded6}.wa-waterfall-row{position:relative;display:grid;grid-template-columns:13px auto minmax(0,1fr);gap:8px;align-items:center;min-height:27px;color:#56534f;font-size:13px;line-height:1;font-weight:500;white-space:nowrap;will-change:transform,opacity}.wa-waterfall-row__status{position:relative;z-index:1;width:12px;height:12px;background:var(--wa-panel)}.wa-waterfall-row__status:before,.wa-waterfall-row__status:after{content:"";position:absolute}.wa-waterfall-row__status:before{top:4px;left:4px;width:4px;height:4px;border-radius:999px;background:#9d9890}.wa-waterfall-row[data-step-state=complete] .wa-waterfall-row__status:before{top:3px;left:2px;width:8px;height:4px;border-bottom:1.4px solid #279443;border-left:1.4px solid #279443;border-radius:0;background:transparent;transform:rotate(-45deg)}.wa-waterfall-row[data-step-state=failed] .wa-waterfall-row__status:before,.wa-waterfall-row[data-step-state=failed] .wa-waterfall-row__status:after{top:6px;left:2px;width:9px;height:1.4px;border-radius:999px;background:#e1544c}.wa-waterfall-row[data-step-state=failed] .wa-waterfall-row__status:before{transform:rotate(45deg)}.wa-waterfall-row[data-step-state=failed] .wa-waterfall-row__status:after{transform:rotate(-45deg)}.wa-waterfall-row__label{min-width:104px;overflow:hidden;color:#56534f;text-overflow:ellipsis}.wa-waterfall-row__chips{display:inline-flex;align-items:center;gap:6px;min-width:0;overflow:hidden}.wa-waterfall-chip{position:relative;display:inline-flex;align-items:center;gap:4px;max-width:86px;min-height:17px;padding:2px 6px 2px 15px;overflow:hidden;border:1px solid #ebe5dc;border-radius:3px;color:#7c7770;background:#fbfaf3;font-size:10px;line-height:1;text-overflow:ellipsis}.wa-waterfall-chip:before,.wa-waterfall-chip:after{content:"";position:absolute}.wa-waterfall-chip:before{top:7px;left:6px;width:4px;height:4px;border-radius:999px;background:#a49f98}.wa-waterfall-chip[data-step-state=complete]:before{top:6px;left:5px;width:7px;height:3.5px;border-bottom:1.2px solid #279443;border-left:1.2px solid #279443;border-radius:0;background:transparent;transform:rotate(-45deg)}.wa-waterfall-chip[data-step-state=failed]{color:#a94f48}.wa-waterfall-chip[data-step-state=failed]:before,.wa-waterfall-chip[data-step-state=failed]:after{top:8px;left:5px;width:7px;height:1.2px;border-radius:999px;background:#e1544c}.wa-waterfall-chip[data-step-state=failed]:before{transform:rotate(45deg)}.wa-waterfall-chip[data-step-state=failed]:after{transform:rotate(-45deg)}.wa-result-card{display:grid;gap:8px;padding:12px;border:1px solid var(--wa-line-12);border-radius:var(--wa-radius-sm);background:linear-gradient(90deg,var(--wa-card-accent-bg),transparent 42%),var(--wa-color-panel);box-shadow:var(--wa-card-shadow);will-change:transform,opacity}.wa-result-card__topline{color:var(--wa-color-accent);font-size:11px;line-height:1.1;font-weight:720;letter-spacing:0;text-transform:uppercase}.wa-result-card__title{margin:0;color:var(--wa-ink);font-size:16px;line-height:1.1;font-weight:700;letter-spacing:0}.wa-result-card__body{margin:0;color:var(--wa-color-muted);font-size:12px;line-height:1.32;font-weight:460}.wa-result-card__rows{display:grid;gap:6px;padding:0;margin:0;list-style:none}.wa-result-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px;align-items:center;min-height:30px;padding:7px 9px;border:1px solid var(--wa-line-08);border-radius:var(--wa-radius-sm);color:var(--wa-color-muted);background:var(--wa-row-bg);font-size:12px;will-change:transform,opacity}.wa-result-row strong{color:var(--wa-ink);font-weight:680;white-space:nowrap}.wa-result-row[data-tone=positive] strong{color:var(--wa-color-positive)}.wa-result-row[data-tone=warning] strong{color:var(--wa-color-warning)}.wa-result-row[data-tone=accent] strong{color:var(--wa-color-accent)}.wa-result-card__actions{display:flex;gap:8px;flex-wrap:wrap}.wa-result-action{display:inline-flex;align-items:center;justify-content:center;min-width:122px;height:34px;padding:0 11px;border:1px solid var(--wa-line-16);border-radius:var(--wa-radius-sm);color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);font-size:12px;font-weight:680;cursor:default;white-space:nowrap;will-change:transform,opacity}.wa-strategy-plan{display:grid;align-content:start;gap:8px;min-height:124px;padding:11px;border:1px solid var(--wa-line-12);border-radius:var(--wa-radius-sm);background:var(--wa-color-panel);box-shadow:var(--wa-card-shadow);will-change:transform,opacity}.wa-strategy-plan__label{color:var(--wa-color-muted);font-size:10px;line-height:1;font-weight:560;letter-spacing:0;text-transform:uppercase}.wa-strategy-plan__title{min-height:34px;margin:0;color:var(--wa-ink);font-size:13px;line-height:1.08;font-weight:560;letter-spacing:0}.wa-strategy-plan__summary{margin:0;padding-top:3px;color:var(--wa-color-muted);font-size:11.5px;line-height:1.24;font-weight:420;text-transform:none;will-change:transform,opacity}.wa-data-source-grid{display:grid;gap:10px;width:min(100%,520px);min-width:0;padding:2px 0}.wa-data-source-grid__header{display:grid;gap:3px}.wa-data-source-grid__title{margin:0;color:var(--wa-ink);font-size:15px;line-height:1.12;font-weight:560;letter-spacing:0}.wa-data-source-grid__subtitle{max-width:430px;margin:0;color:var(--wa-color-muted);font-size:11.5px;line-height:1.26;font-weight:410}.wa-data-source-grid__list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;min-width:0}.wa-data-source-card{display:grid;grid-template-columns:18px minmax(0,1fr);gap:8px;align-items:start;min-width:0;min-height:68px;padding:9px 10px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel);box-shadow:0 8px 18px #1717140a;will-change:transform,opacity}.wa-data-source-card__icon{position:relative;width:18px;height:18px;margin-top:1px;border:1px solid var(--wa-line-16);border-radius:6px;background:var(--wa-color-soft-surface)}.wa-data-source-card__icon:before,.wa-data-source-card__icon:after{content:"";position:absolute;border-radius:999px;background:var(--wa-color-accent)}.wa-data-source-card__icon:before{top:5px;left:5px;width:6px;height:6px}.wa-data-source-card__icon:after{right:4px;bottom:4px;width:3px;height:3px}.wa-data-source-card__copy{display:grid;gap:3px;min-width:0}.wa-data-source-card__copy strong{color:var(--wa-ink);font-size:12.5px;line-height:1.12;font-weight:570}.wa-data-source-card__copy span{color:var(--wa-color-muted);font-size:10.5px;line-height:1.22;font-weight:410}.wa-data-source-grid--marketing{position:absolute;z-index:2;inset:calc(var(--wa-chat-top-fade) - 8px) 26px 24px;align-content:start;width:auto;max-width:none;gap:16px;padding:0;overflow:visible;pointer-events:none}.wa-data-source-grid--marketing .wa-data-source-grid__header{gap:5px;max-width:460px}.wa-data-source-grid--marketing .wa-data-source-grid__title{font-size:19px;line-height:1.05;font-weight:540}.wa-data-source-grid--marketing .wa-data-source-grid__subtitle{max-width:420px;font-size:12px;line-height:1.24}.wa-data-source-grid__groups{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px 26px;min-height:0;min-width:0}.wa-data-source-grid--marketing .wa-data-source-grid__groups{grid-template-columns:repeat(3,minmax(0,1fr));gap:13px 20px}.wa-data-source-group{display:grid;align-content:start;gap:7px;min-width:0}.wa-data-source-group__title{margin:0;color:var(--wa-color-muted);font-size:8.8px;line-height:1;font-weight:680;letter-spacing:.02em;text-transform:uppercase}.wa-data-source-grid--marketing .wa-data-source-grid__list{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px 12px}.wa-data-vendor-logo{display:inline-flex;align-items:center;min-width:0;min-height:24px;color:var(--wa-ink);opacity:.86;will-change:transform,opacity}.wa-data-vendor-logo--image{opacity:.92}.wa-data-vendor-logo__mark{display:inline-block;max-width:100%;overflow:hidden;color:currentColor;font-size:13px;line-height:1;font-weight:560;letter-spacing:0;text-overflow:ellipsis;white-space:nowrap}.wa-data-vendor-logo__image{display:block;width:min(100%,96px);max-height:18px;object-fit:contain;object-position:left center;-webkit-user-select:none;user-select:none}.wa-mini-game,.wa-style-profile,.wa-proximity-list,.wa-sequence-engagement{display:grid;gap:10px;width:min(100%,540px);min-width:0}.wa-mini-game__header,.wa-style-profile__header,.wa-proximity-list__header,.wa-sequence-engagement__header{display:grid;gap:3px}.wa-mini-game__eyebrow{color:var(--wa-color-muted);font-size:9px;line-height:1;font-weight:680;text-transform:uppercase}.wa-mini-game__title,.wa-style-profile__title,.wa-proximity-list__title,.wa-sequence-engagement__title{margin:0;color:var(--wa-ink);font-size:15px;line-height:1.12;font-weight:560;letter-spacing:0}.wa-mini-game__subtitle,.wa-style-profile__subtitle,.wa-proximity-list__subtitle,.wa-sequence-engagement__subtitle{margin:0;color:var(--wa-color-muted);font-size:11.5px;line-height:1.26;font-weight:410}.wa-swipe-game{gap:9px;max-width:520px}.wa-swipe-game__prompt{margin:0;color:var(--wa-ink);font-size:12px;line-height:1.28;font-weight:430}.wa-swipe-game__axis{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;color:var(--wa-color-muted);font-size:10px;line-height:1;font-weight:520}.wa-swipe-game__axis span:first-child{color:#7f1d1d94}.wa-swipe-game__axis span:nth-child(2){color:var(--wa-color-muted);font-variant-numeric:tabular-nums}.wa-swipe-game__axis span:last-child{justify-self:end;color:#1665349e}.wa-swipe-game__stack{position:relative;height:184px;overflow:visible}.wa-swipe-game__glow{position:absolute;inset:12px -18px 0;z-index:0;border-radius:999px;background:linear-gradient(90deg,rgba(127,29,29,.055),transparent 42%,transparent 58%,rgba(22,101,52,.065));filter:blur(22px);pointer-events:none}.wa-swipe-card,.wa-swipe-game__complete{position:absolute;inset:0;display:grid;align-content:center;justify-items:center;min-width:0;border:1px solid rgba(228,228,231,.82);border-radius:21px;background:#fafafa;text-align:center;box-shadow:0 18px 45px #00000014;will-change:transform,opacity}.wa-swipe-card{gap:13px;padding:22px 26px}.wa-swipe-game[data-swipe-decision=avoid] .wa-swipe-card[data-swipe-state=active]{border-color:#d298989e;background:linear-gradient(135deg,#f8f1f1,#fafafa 68%);box-shadow:-22px 28px 70px #7f1d1d1f}.wa-swipe-game[data-swipe-decision=use] .wa-swipe-card[data-swipe-state=active]{border-color:#8eb79da3;background:linear-gradient(135deg,#fafafa 32%,#f0f7f2);box-shadow:22px 28px 70px #1665341f}.wa-swipe-card__label{max-width:360px;color:var(--wa-ink);font-size:20px;line-height:1.05;font-weight:580;letter-spacing:0}.wa-swipe-card__detail{max-width:340px;color:var(--wa-color-muted);font-size:11.5px;line-height:1.35;font-weight:410}.wa-swipe-game__actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;max-width:420px;will-change:transform,opacity}.wa-swipe-game__action{position:relative;display:inline-flex;align-items:center;justify-content:center;min-height:38px;border:1px solid var(--wa-line-12);border-radius:999px;background:var(--wa-panel);cursor:default;will-change:transform}.wa-swipe-game__action:before,.wa-swipe-game__action:after{content:"";position:absolute;display:block}.wa-swipe-game__action[data-swipe-action=avoid]{border-color:#d298987a;background:#f8f1f1e6}.wa-swipe-game__action[data-swipe-action=avoid]:before,.wa-swipe-game__action[data-swipe-action=avoid]:after{width:14px;height:1.5px;border-radius:999px;background:#ba4d4d}.wa-swipe-game__action[data-swipe-action=avoid]:before{transform:rotate(45deg)}.wa-swipe-game__action[data-swipe-action=avoid]:after{transform:rotate(-45deg)}.wa-swipe-game__action[data-swipe-action=use]{border-color:#8eb79d80;background:#f0f7f2f2}.wa-swipe-game__action[data-swipe-action=use]:before{width:13px;height:7px;border-bottom:1.7px solid #2f8f4d;border-left:1.7px solid #2f8f4d;transform:translateY(-1px) rotate(-45deg)}.wa-swipe-game__action[data-active=true]{border-color:var(--wa-ink)}.wa-swipe-game__complete{z-index:10;color:var(--wa-ink);font-size:17px;line-height:1.1;font-weight:560}.wa-sequence-engagement__header{grid-template-columns:minmax(0,1fr) auto;align-items:start}.wa-sequence-engagement__subtitle{grid-column:1 / -1}.wa-sequence-engagement__count{display:inline-flex;align-items:center;min-height:23px;padding:0 9px;border-radius:999px;color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);font-size:10px;line-height:1;font-weight:680;white-space:nowrap}.wa-style-profile__rows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}.wa-style-profile__row{display:grid;gap:4px;min-height:54px;padding:9px 10px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel);will-change:transform,opacity}.wa-style-profile__row span{color:var(--wa-color-muted);font-size:9.5px;line-height:1;font-weight:660;text-transform:uppercase}.wa-style-profile__row strong{color:var(--wa-ink);font-size:12px;line-height:1.2;font-weight:520}.wa-style-profile__examples{display:grid;gap:6px}.wa-style-profile__example{margin:0;padding:9px 11px;border-left:2px solid var(--wa-color-accent);color:var(--wa-ink);background:var(--wa-row-bg);font-size:11px;line-height:1.25;font-weight:430;will-change:transform,opacity}.wa-proximity-list__rows{display:grid;gap:7px}.wa-proximity-lead{display:grid;grid-template-columns:30px minmax(0,1fr);gap:9px;min-width:0;padding:9px 10px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel);box-shadow:0 8px 18px #1717140a;will-change:transform,opacity}.wa-proximity-lead__rank{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:999px;color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);font-size:11px;line-height:1;font-weight:660}.wa-proximity-lead__body{display:grid;gap:5px;min-width:0}.wa-proximity-lead__top{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:start}.wa-proximity-lead__identity{display:grid;gap:2px;min-width:0}.wa-proximity-lead__identity strong{color:var(--wa-ink);font-size:12.5px;line-height:1.1;font-weight:570}.wa-proximity-lead__identity span{color:var(--wa-color-muted);font-size:10px;line-height:1.1;font-weight:410}.wa-proximity-lead__score{color:var(--wa-color-accent);font-size:11px;line-height:1;font-weight:680}.wa-proximity-lead__personalization{margin:0;color:var(--wa-ink);font-size:11px;line-height:1.22;font-weight:430}.wa-proximity-lead__proximity{color:var(--wa-color-muted);font-size:9.5px;line-height:1;font-weight:620;text-transform:uppercase}.wa-sequence-engagement__sequences{display:grid;gap:8px}.wa-sequence-people{display:grid;grid-template-columns:24px minmax(0,1fr) 24px;gap:7px;align-items:center;max-width:280px}.wa-sequence-person-button{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;padding:0;border:1px solid var(--wa-line-10);border-radius:6px;color:var(--wa-ink);background:var(--wa-panel);font:inherit;font-size:15px;line-height:1;font-weight:460;cursor:pointer}.wa-sequence-person-current{display:grid;grid-template-columns:28px minmax(0,1fr);gap:8px;align-items:center;min-width:0}.wa-sequence-person-current__avatar{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;overflow:hidden;border:1px solid rgba(17,17,15,.08);border-radius:999px;color:#11110f;background:#e8f3ff;font-size:10px;line-height:1;font-weight:620}.wa-sequence-person-current__avatar[data-avatar-tone="2"]{background:#f1eadf}.wa-sequence-person-current__avatar[data-avatar-tone="3"]{background:#e9f5e6}.wa-sequence-person-current__copy{display:grid;gap:2px;min-width:0}.wa-sequence-person-current__copy strong{overflow:hidden;color:var(--wa-ink);font-size:12px;line-height:1.1;font-weight:560;text-overflow:ellipsis;white-space:nowrap}.wa-sequence-person-current__copy span{overflow:hidden;color:var(--wa-color-muted);font-size:10px;line-height:1.12;font-weight:410;text-overflow:ellipsis;white-space:nowrap}.wa-sequence-card{display:grid;gap:7px;min-width:0;padding:0;border:0;background:transparent;box-shadow:none;will-change:transform,opacity}.wa-sequence-card__top{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:start}.wa-sequence-card__identity{display:grid;gap:2px;min-width:0}.wa-sequence-card__identity strong{color:var(--wa-ink);font-size:12.5px;line-height:1.1;font-weight:570}.wa-sequence-card__identity span,.wa-sequence-card__personalization{color:var(--wa-color-muted);font-size:10.5px;line-height:1.22;font-weight:410}.wa-sequence-card__label{color:var(--wa-color-accent);font-size:9.5px;line-height:1;font-weight:680;text-transform:uppercase}.wa-sequence-card__subject{margin:0;color:var(--wa-ink);font-size:12px;line-height:1.18;font-weight:540}.wa-sequence-card__personalization{margin:0}.wa-sequence-steps{display:grid;gap:6px;margin-top:1px}.wa-sequence-step{display:grid;grid-template-columns:54px minmax(0,1fr);gap:8px;align-items:start;padding:8px 9px;border:1px solid var(--wa-line-08);border-radius:var(--wa-radius-sm);background:var(--wa-panel)}.wa-sequence-step__channel{display:inline-flex;align-items:center;justify-content:center;min-height:17px;padding:0 5px;border-radius:4px;color:var(--wa-color-inverse);background:#6f6a62;font-size:8px;line-height:1;font-weight:680;text-transform:uppercase}.wa-sequence-step[data-channel=linkedin] .wa-sequence-step__channel{background:#0a66c2}.wa-sequence-step[data-channel=call] .wa-sequence-step__channel{background:#2f7d4f}.wa-sequence-step__copy{display:grid;gap:2px;min-width:0}.wa-sequence-step__copy strong{color:var(--wa-ink);font-size:10.5px;line-height:1.12;font-weight:560}.wa-sequence-step__copy span{color:var(--wa-color-muted);font-size:10px;line-height:1.22;font-weight:410}.wa-sequence-step[data-step-open=false]{align-items:center;padding-top:6px;padding-bottom:6px}.wa-sequence-step[data-step-open=false] .wa-sequence-step__copy span{display:none}.wa-engage-channels{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:7px}.wa-engage-channel{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:7px;align-items:start;min-width:0;min-height:58px;padding:9px 10px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);color:var(--wa-ink);background:var(--wa-row-bg);font:inherit;text-align:left;will-change:transform,opacity}.wa-engage-channel__copy{display:grid;gap:3px;min-width:0}.wa-engage-channel__copy strong{color:var(--wa-ink);font-size:11px;line-height:1.1;font-weight:570}.wa-engage-channel__copy span{color:var(--wa-color-muted);font-size:9.5px;line-height:1.16;font-weight:410}.wa-engage-channel__badge{display:inline-flex;align-items:center;min-height:17px;padding:0 6px;border-radius:999px;color:var(--wa-color-inverse);background:var(--wa-color-accent);font-size:8px;line-height:1;font-weight:740;text-transform:uppercase;white-space:nowrap}.wa-sequence-kickoff{display:grid;gap:3px;justify-items:start;justify-self:start;width:auto;min-width:0;min-height:36px;padding:7px 10px;border:1px solid var(--wa-ink);border-radius:var(--wa-radius-sm);color:var(--wa-color-inverse);background:var(--wa-ink);font:inherit;text-align:left;cursor:pointer;box-shadow:0 10px 22px #1717141f;will-change:transform,opacity}.wa-sequence-kickoff__label{font-size:11px;line-height:1.05;font-weight:580}.wa-sequence-kickoff__detail{color:#fffffbb8;font-size:8.5px;line-height:1.15;font-weight:410}.wa-sequence-kickoff[data-launched=true]{border-color:var(--wa-color-accent);color:var(--wa-ink);background:var(--wa-color-accent)}.wa-sequence-kickoff[data-launched=true] .wa-sequence-kickoff__detail{color:#11110f9e}.wa-composer{position:absolute;right:calc(var(--wa-chat-x-padding) - var(--wa-composer-outset-x));bottom:var(--wa-composer-bottom-outset);left:calc(var(--wa-chat-x-padding) - var(--wa-composer-outset-x));z-index:3;display:grid;grid-template-columns:minmax(0,1fr) var(--wa-composer-send-size);gap:10px;align-items:center;min-height:var(--wa-composer-height);padding:6px 8px 6px 18px;margin:0;overflow:hidden;border:1px solid var(--wa-color-input-line);border-radius:999px;background:var(--wa-panel);box-shadow:0 18px 34px #1717141f,0 1px #ffffffbd inset;transform-origin:center center;backface-visibility:hidden;transition:border-color .14s ease,box-shadow .14s ease;will-change:transform}.wa-composer[data-visible=false]{pointer-events:none}.wa-composer[data-focused=true]{border-color:var(--wa-orange);box-shadow:0 18px 34px #1717141f,0 1px #ffffffbd inset}.wa-composer__placeholder{display:flex;align-items:center;min-width:0;min-height:38px;padding:0;overflow:hidden;border:0;border-radius:0;color:var(--wa-ink);background:transparent;font-size:14px;font-weight:460;text-overflow:ellipsis;white-space:nowrap}.wa-composer__placeholder:empty:before{content:"Ask the assistant...";color:var(--wa-placeholder)}.wa-composer__send{display:inline-flex;align-items:center;justify-content:center;width:var(--wa-composer-send-size);min-width:var(--wa-composer-send-size);height:var(--wa-composer-send-size);padding:0 0 2px;border:0;border-radius:999px;color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);font-size:18px;line-height:1;font-weight:680;cursor:default;white-space:nowrap}.wa-history-resume{position:absolute;right:auto;bottom:calc(var(--wa-composer-bottom-outset) + var(--wa-composer-height) - var(--wa-history-resume-height));left:50%;z-index:5;display:inline-flex;align-items:center;gap:10px;min-height:var(--wa-history-resume-height);padding:0 18px 0 12px;border:1px solid var(--wa-line-12);border-radius:999px;color:var(--wa-color-heading-strong);background:#fffff9f5;box-shadow:0 22px 48px #17171433,0 8px 18px #1717141a,0 1px #ffffffbd inset;font:inherit;font-size:13px;line-height:1;font-weight:520;letter-spacing:0;cursor:default;opacity:0;pointer-events:none;transform:translate(-50%,6px) scale(.98);transition:opacity .16s ease,transform .18s ease}.wa-section[data-chat-history-paused=true] .wa-history-resume{opacity:1;pointer-events:auto;transform:translate(-50%) scale(1)}.wa-history-resume__icon{position:relative;display:grid;place-items:center;width:24px;height:24px;border-radius:999px;color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);font-size:0;line-height:0}.wa-history-resume__icon:before{content:"";position:absolute;top:50%;left:50%;width:0;height:0;transform:translate(-34%,-40%);border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:7px solid currentColor}.wa-stage__eyebrow,.wa-stage__label,.wa-stage__status{display:none}.wa-builder{position:relative;grid-column:1 / -1;justify-self:center;display:grid;gap:24px;width:min(1680px,calc(100vw - 36px));margin-top:12px;padding-top:58px;border-top:1px solid var(--wa-line-10)}.wa-builder__header{display:grid;grid-template-columns:minmax(0,1fr) minmax(260px,430px);gap:28px;align-items:end}.wa-builder__eyebrow{margin:0 0 10px;color:var(--wa-color-accent);font-size:12px;line-height:1;font-weight:640;letter-spacing:.02em;text-transform:uppercase}.wa-builder__title{max-width:780px;margin:0;color:var(--wa-color-heading);font-size:clamp(31px,2.25vw,42px);line-height:1.04;font-weight:520;letter-spacing:0}.wa-builder__lede{margin:0;color:var(--wa-color-muted);font-size:15px;line-height:1.35;font-weight:430}.wa-builder__tabs{display:flex;flex-wrap:wrap;gap:8px}.wa-builder-tab{display:inline-grid;gap:4px;min-width:168px;padding:12px 14px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);color:var(--wa-color-text);background:var(--wa-panel);cursor:default;text-align:left}.wa-builder-tab.is-active{border-color:var(--wa-color-accent);background:var(--wa-card-accent-bg);box-shadow:inset 3px 0 0 var(--wa-color-accent)}.wa-builder-tab__title{min-width:0;overflow:hidden;color:var(--wa-color-heading-strong);font-size:14px;line-height:1.12;font-weight:540;text-overflow:ellipsis;white-space:nowrap}.wa-builder-tab__count{color:var(--wa-color-muted);font-size:11px;line-height:1;font-weight:430}.wa-builder__layout{display:grid;grid-template-columns:minmax(0,1fr) minmax(280px,320px);gap:28px;align-items:start}.wa-builder__workspace{display:grid;gap:14px;min-width:0}.wa-builder__add-rail{display:flex;flex-wrap:wrap;gap:8px}.wa-builder-add-button{min-height:34px;padding:0 12px;border:1px solid var(--wa-line-12);border-radius:999px;color:var(--wa-color-text);background:var(--wa-panel);font-size:12px;line-height:1;font-weight:500;cursor:default;white-space:nowrap}.wa-builder-add-button:hover{border-color:var(--wa-line-20);background:var(--wa-color-soft-surface)}.wa-builder__thread{display:grid;gap:20px;align-content:start;min-height:560px;max-height:720px;min-width:0;padding:30px;overflow:auto;border:1px solid var(--wa-line-10);border-radius:14px;background:linear-gradient(to bottom,var(--wa-panel),var(--wa-row-bg)),radial-gradient(circle at top left,var(--wa-card-accent-bg),transparent 36%)}.wa-builder-step{display:grid;gap:7px;min-width:0}.wa-builder-step .wa-message{max-width:min(88%,760px)}.wa-builder-step[data-builder-kind=assistant] .wa-message,.wa-builder-step[data-builder-kind=status] .wa-message,.wa-builder-step[data-builder-kind=cursor] .wa-message{width:min(100%,680px);max-width:100%;grid-template-columns:minmax(0,1fr)}.wa-builder-step[data-builder-kind=user],.wa-builder-step[data-builder-kind=file]{justify-items:end}.wa-builder-step[data-builder-kind=component] .wa-message,.wa-builder-step[data-builder-kind=thinking] .wa-message{width:min(100%,1080px);max-width:100%}.wa-builder-step[data-builder-kind=assistant] .wa-message__body,.wa-builder-step[data-builder-kind=status] .wa-message__body,.wa-builder-step[data-builder-kind=cursor] .wa-message__body,.wa-builder-step[data-builder-kind=component] .wa-message__body,.wa-builder-step[data-builder-kind=thinking] .wa-message__body{width:100%}.wa-builder-step.is-selected .wa-message__body{outline:1px solid var(--wa-color-accent);outline-offset:3px}.wa-builder-step.is-dragging{opacity:.42}.wa-builder-step.is-drop-before,.wa-builder-step.is-drop-after{position:relative}.wa-builder-step.is-drop-before:before,.wa-builder-step.is-drop-after:after{content:"";display:block;height:2px;border-radius:999px;background:var(--wa-color-accent)}.wa-builder-step.is-drop-before:before{margin-bottom:10px}.wa-builder-step.is-drop-after:after{margin-top:10px}.wa-builder-message__body{max-width:none}.wa-builder-bubble{display:grid;gap:7px;min-width:0}.wa-builder-step__kind{display:inline-flex;width:max-content;max-width:100%;color:var(--wa-color-muted);font-size:10px;line-height:1;font-weight:640;letter-spacing:.02em;text-transform:uppercase}.wa-builder-step__textarea{display:block;width:100%;min-height:19px;padding:0;overflow:hidden;border:0;color:inherit;background:transparent;font-size:inherit;line-height:inherit;font-weight:inherit;letter-spacing:0;outline:0}.wa-builder-step__textarea::selection{background:var(--wa-card-accent-bg)}.wa-builder-step__toolbar{display:flex;gap:6px;justify-content:flex-start;padding-left:3px;opacity:0;transform:translateY(-2px);transition:opacity .14s ease,transform .14s ease}.wa-builder-step[data-builder-kind=user] .wa-builder-step__toolbar,.wa-builder-step[data-builder-kind=file] .wa-builder-step__toolbar{justify-content:flex-end;padding-right:3px;padding-left:0}.wa-builder-step:hover .wa-builder-step__toolbar,.wa-builder-step:focus-within .wa-builder-step__toolbar,.wa-builder-step.is-selected .wa-builder-step__toolbar{opacity:1;transform:translateY(0)}.wa-builder-step__action{display:inline-flex;align-items:center;justify-content:center;width:28px;min-width:28px;height:28px;padding:0;border:1px solid var(--wa-line-10);border-radius:999px;color:var(--wa-color-muted);background:var(--wa-panel);font-size:10px;line-height:1;font-weight:560;cursor:default;white-space:nowrap}.wa-builder-step__action svg{display:block;width:15px;height:15px}.wa-builder-step__drag{cursor:grab}.wa-builder-step__drag:active{cursor:grabbing}.wa-builder-step__action:disabled{opacity:.34}.wa-builder-step__action:not(:disabled):hover{color:var(--wa-color-text);border-color:var(--wa-line-20)}.wa-builder-thinking{gap:10px;width:100%}.wa-builder-thinking[data-thinking-header-suppressed=true]{padding-top:0}.wa-builder-research-step{min-height:64px}.wa-builder-research-step .wa-builder-step__textarea{color:var(--wa-ink);font-weight:var(--wa-chat-thinking-weight)}.wa-builder-component-card{display:grid;width:100%;min-height:96px;padding:16px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-row-bg)}.wa-builder-component-card__content{display:grid;gap:12px;align-content:start;min-width:0}.wa-builder-component-card__title,.wa-builder-component-card__subtitle,.wa-builder-component-list__item,.wa-builder-table-editor__cell,.wa-builder-strategy-editor input,.wa-builder-strategy-editor textarea,.wa-builder-enrichment-editor input,.wa-builder-data-sources-editor input,.wa-builder-data-sources-editor textarea,.wa-builder-file-list-editor input,.wa-builder-file-list-editor textarea,.wa-builder-style-profile-editor input,.wa-builder-style-profile-editor textarea,.wa-builder-proximity-editor input,.wa-builder-proximity-editor textarea,.wa-builder-swipe-game-editor input,.wa-builder-swipe-game-editor textarea,.wa-builder-sequence-editor input,.wa-builder-sequence-editor textarea,.wa-builder-channel-editor input,.wa-builder-channel-editor textarea,.wa-builder-sequence-editor__count{width:100%;min-width:0;border:0;color:var(--wa-color-text);background:transparent;font:inherit;letter-spacing:0;outline:0}.wa-builder-component-card__title{min-height:28px;color:var(--wa-color-heading-strong);font-size:20px;line-height:1.12;font-weight:520}.wa-builder-component-card__subtitle{min-height:19px;color:var(--wa-color-muted);font-size:13px;line-height:1.3;font-weight:430}.wa-builder-component-list{display:grid;gap:8px}.wa-builder-component-list__item{min-height:32px;padding:7px 10px;border:1px solid var(--wa-line-08);border-radius:var(--wa-radius-sm);background:var(--wa-panel);font-size:13px;line-height:1.25}.wa-builder-table-editor{display:grid;gap:0;min-width:0;overflow:auto;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel)}.wa-builder-table-editor__row{display:grid;grid-template-columns:var(--wa-builder-table-columns);min-width:max-content;border-bottom:1px solid var(--wa-line-08)}.wa-builder-table-editor__row:last-child{border-bottom:0}.wa-builder-table-editor__row[data-header=true]{background:var(--wa-row-bg)}.wa-builder-table-editor__cell{min-height:38px;padding:10px 12px;border-right:1px solid var(--wa-line-08);font-size:13px;line-height:1.15}.wa-builder-table-editor__cell:last-child{border-right:0}.wa-builder-table-editor__row[data-header=true] .wa-builder-table-editor__cell{color:var(--wa-color-muted);font-weight:560}.wa-builder-strategy-editor{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.wa-builder-strategy-editor__card{display:grid;gap:9px;min-width:0;padding:12px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel)}.wa-builder-strategy-editor__label{color:var(--wa-color-accent);font-size:10px;line-height:1;font-weight:700;text-transform:uppercase}.wa-builder-strategy-editor__title{min-height:37px;color:var(--wa-color-heading-strong);font-size:15px;line-height:1.15;font-weight:540}.wa-builder-strategy-editor__summary{min-height:76px;color:var(--wa-color-text);font-size:12.5px;line-height:1.25;font-weight:450}.wa-builder-enrichment-editor{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.wa-builder-enrichment-editor__group{display:grid;gap:7px;padding:12px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel)}.wa-builder-enrichment-editor__title{min-height:26px;color:var(--wa-color-heading-strong);font-size:14px;line-height:1.1;font-weight:520}.wa-builder-enrichment-editor__step{min-height:28px;padding:6px 8px;border:1px solid var(--wa-line-08);border-radius:6px;color:var(--wa-color-text);background:var(--wa-row-bg);font-size:12px;line-height:1}.wa-builder-data-sources-editor{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.wa-builder-data-sources-editor__card{display:grid;gap:7px;min-width:0;padding:12px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel)}.wa-builder-data-sources-editor__category{min-height:18px;color:var(--wa-color-accent);font-size:10px;line-height:1;font-weight:680;text-transform:uppercase}.wa-builder-data-sources-editor__name{min-height:20px;color:var(--wa-color-heading-strong);font-size:14px;line-height:1.15;font-weight:560}.wa-builder-data-sources-editor__detail{min-height:48px;color:var(--wa-color-muted);font-size:12px;line-height:1.24;font-weight:430}.wa-builder-file-list-editor,.wa-builder-style-profile-editor,.wa-builder-style-profile-editor__examples,.wa-builder-proximity-editor,.wa-builder-swipe-game-editor,.wa-builder-sequence-editor,.wa-builder-channel-editor{display:grid;gap:10px}.wa-builder-file-list-editor__card,.wa-builder-style-profile-editor__row,.wa-builder-proximity-editor__row,.wa-builder-swipe-game-editor__row,.wa-builder-sequence-editor__card,.wa-builder-channel-editor__card{display:grid;gap:7px;min-width:0;padding:12px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel)}.wa-builder-file-list-editor__card{grid-template-columns:46px minmax(0,1fr)}.wa-builder-file-list-editor__detail{grid-column:1 / -1}.wa-builder-file-list-editor__type,.wa-builder-proximity-editor__rank,.wa-builder-proximity-editor__score,.wa-builder-swipe-game-editor__decision,.wa-builder-sequence-editor__count,.wa-builder-channel-editor__badge{color:var(--wa-color-accent);font-size:11px;line-height:1.1;font-weight:700;text-transform:uppercase}.wa-builder-file-list-editor__name,.wa-builder-style-profile-editor__value,.wa-builder-proximity-editor__name,.wa-builder-swipe-game-editor__label,.wa-builder-sequence-editor__name,.wa-builder-channel-editor__label{color:var(--wa-color-heading-strong);font-size:14px;line-height:1.16;font-weight:560}.wa-builder-file-list-editor__detail,.wa-builder-style-profile-editor__example,.wa-builder-proximity-editor__personalization,.wa-builder-swipe-game-editor__detail,.wa-builder-sequence-editor__personalization,.wa-builder-channel-editor__detail{min-height:44px;color:var(--wa-color-muted);font-size:12px;line-height:1.24;font-weight:430}.wa-builder-style-profile-editor{grid-template-columns:repeat(2,minmax(0,1fr))}.wa-builder-style-profile-editor__label,.wa-builder-proximity-editor__company,.wa-builder-proximity-editor__title,.wa-builder-proximity-editor__proximity,.wa-builder-swipe-game-editor__decision,.wa-builder-sequence-editor__company{color:var(--wa-color-muted);font-size:11px;line-height:1.12;font-weight:520}.wa-builder-proximity-editor__row{grid-template-columns:42px 42px repeat(3,minmax(0,1fr))}.wa-builder-proximity-editor__proximity,.wa-builder-proximity-editor__personalization,.wa-builder-swipe-game-editor__detail{grid-column:1 / -1}.wa-builder-swipe-game-editor__row{grid-template-columns:72px minmax(0,1fr)}.wa-builder-sequence-editor{grid-template-columns:repeat(3,minmax(0,1fr))}.wa-builder-sequence-editor__card{align-content:start}.wa-builder-sequence-editor__subject{color:var(--wa-color-text);font-size:12px;line-height:1.18;font-weight:520}.wa-builder-channel-editor{grid-template-columns:repeat(3,minmax(0,1fr))}.wa-builder-channel-editor__card{grid-template-columns:minmax(0,1fr) 58px}.wa-builder-channel-editor__detail{grid-column:1 / -1}.wa-builder-cursor-line{display:grid;grid-template-columns:18px minmax(0,1fr);gap:10px;align-items:start}.wa-builder-cursor-line__cursor{display:block;width:14px;height:23px;background:var(--wa-cursor-arrow) 0 0 / 14px 23px no-repeat}.wa-builder-file-pill{display:grid;grid-template-columns:42px minmax(0,1fr);gap:10px;align-items:center}.wa-builder-file-pill__icon{display:inline-flex;align-items:center;justify-content:center;width:42px;height:32px;border-radius:8px;color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);font-size:10px;line-height:1;font-weight:680}.wa-builder__side{position:sticky;top:22px;display:grid;gap:14px;min-width:0}.wa-builder__panel,.wa-builder-export{display:grid;gap:14px;padding:16px;border:1px solid var(--wa-line-10);border-radius:14px;background:var(--wa-panel)}.wa-builder-panel__divider{height:1px;margin:2px 0;background:var(--wa-line-10)}.wa-builder-panel__empty{margin:0;color:var(--wa-color-muted);font-size:13px;line-height:1.32}.wa-builder-field{display:grid;gap:7px;min-width:0}.wa-builder-field__label,.wa-builder-export__label{color:var(--wa-color-muted);font-size:11px;line-height:1;font-weight:620;letter-spacing:.02em;text-transform:uppercase}.wa-builder-export__header{display:flex;gap:12px;align-items:center;justify-content:space-between;min-width:0}.wa-builder-export__copy{display:inline-flex;gap:6px;align-items:center;justify-content:center;min-height:28px;padding:0 10px;border:1px solid var(--wa-line-10);border-radius:999px;color:var(--wa-color-text);background:var(--wa-panel);font-size:12px;line-height:1;font-weight:520;cursor:default;white-space:nowrap}.wa-builder-export__copy svg{display:block;width:14px;height:14px}.wa-builder-export__copy path{fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}.wa-builder-export__copy:hover{border-color:var(--wa-line-20);background:var(--wa-color-soft-surface)}.wa-builder-export__copy[data-copy-state=copied]{color:var(--wa-color-inverse);border-color:var(--wa-color-heading-strong);background:var(--wa-color-heading-strong)}.wa-builder-field__control,.wa-builder-export__textarea{width:100%;min-width:0;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);color:var(--wa-color-text);background:var(--wa-panel);font-size:13px;line-height:1.32;font-weight:430;outline:0}.wa-builder-field__control{min-height:38px;padding:10px}.wa-builder-field__control[type=color]{height:42px;padding:5px}.wa-builder-field__control:focus,.wa-builder-export__textarea:focus{border-color:var(--wa-color-accent);box-shadow:0 0 0 3px var(--wa-card-accent-bg)}.wa-builder-export__textarea{min-height:172px;max-height:320px;padding:12px;overflow:auto;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:11px;white-space:pre}.wa-builder__status{margin:0;color:var(--wa-color-muted);font-size:12px;line-height:1.25;font-weight:430}.wa-cursor{position:absolute;top:0;left:0;z-index:20;width:1px;height:1px;pointer-events:none;transform:translateZ(0);transform-origin:0 0;backface-visibility:hidden;will-change:transform,opacity}.wa-cursor__float{position:absolute;top:0;left:0;width:1px;height:1px;transform-origin:0 0;backface-visibility:hidden;will-change:transform}.wa-cursor__glyph{position:absolute;top:0;left:0;width:var(--wa-cursor-default-width);height:var(--wa-cursor-default-height);background-image:var(--wa-cursor-arrow);background-repeat:no-repeat;background-position:0 0;background-size:100% 100%;transform:translate(0);transform-origin:0 0;backface-visibility:hidden;filter:drop-shadow(0 2px 3px var(--wa-cursor-shadow));will-change:transform}.wa-cursor__glyph:before,.wa-cursor__glyph:after{content:"";position:absolute;opacity:0;top:0;left:0;width:var(--wa-cursor-default-width);height:var(--wa-cursor-default-height);background-repeat:no-repeat;background-position:0 0;background-size:100% 100%;pointer-events:none}.wa-cursor__mimic-head,.wa-cursor__mimic-tail{position:absolute;inset:0;display:none;width:100%;height:100%;background-repeat:no-repeat;background-position:0 0;background-size:100% 100%;pointer-events:none;transform-origin:6px 13.25px;backface-visibility:hidden;will-change:transform}.wa-cursor__mimic-head{z-index:2;background-image:var(--wa-cursor-arrow-head)}.wa-cursor__mimic-tail{z-index:1;background-image:var(--wa-cursor-arrow-tail)}.wa-cursor[data-cursor-mimicking=true][data-cursor-mode=default] .wa-cursor__glyph{background-image:none}.wa-cursor[data-cursor-mimicking=true][data-cursor-mode=default] .wa-cursor__mimic-head,.wa-cursor[data-cursor-mimicking=true][data-cursor-mode=default] .wa-cursor__mimic-tail{display:block}.wa-cursor[data-cursor-mimicking=true][data-cursor-mode=default] .wa-cursor__mimic-tail{animation:wa-cursor-tail-wag 245ms infinite}.wa-cursor[data-cursor-mode=pointer] .wa-cursor__glyph,.wa-cursor[data-cursor-mode=click] .wa-cursor__glyph{width:32px;height:32px;background-image:var(--wa-cursor-hand);transform:translate(-10px,-1px)}.wa-cursor[data-cursor-mode=drag] .wa-cursor__glyph{width:32px;height:32px;background-image:var(--wa-cursor-closedhand);transform:translate(-16px,-16px)}.wa-cursor[data-cursor-mode=release] .wa-cursor__glyph{width:32px;height:32px;background-image:var(--wa-cursor-openhand);transform:translate(-16px,-16px)}.wa-cursor[data-cursor-mode=text] .wa-cursor__glyph{width:23px;height:22px;background-image:var(--wa-cursor-ibeam);transform:translate(-11px,-11px)}@keyframes wa-cursor-tail-wag{0%,to{animation-timing-function:cubic-bezier(.16,.88,.24,1);transform:translateZ(0) rotate(-1deg) skew(0)}24%{animation-timing-function:cubic-bezier(.16,0,.24,1);transform:translate3d(.22px,0,0) rotate(9.5deg) skew(1.65deg)}38%{animation-timing-function:cubic-bezier(.16,.88,.24,1);transform:translate3d(.08px,0,0) rotate(3.6deg) skew(.65deg)}64%{animation-timing-function:cubic-bezier(.2,0,.24,1);transform:translate3d(-.2px,0,0) rotate(-8.5deg) skew(-1.5deg)}}@keyframes wa-dot{0%,80%,to{opacity:.28;transform:translateY(0)}40%{opacity:1;transform:translateY(-3px)}}@keyframes wa-caret{0%,45%{opacity:1}46%,to{opacity:0}}@keyframes wa-text-shimmer{0%{background-position:100% 0}62%,to{background-position:0% 0}}@media(max-width:1180px){.wa-section{padding:82px 24px 96px}.wa-section__inner{grid-template-columns:1fr;row-gap:56px}.wa-copy{max-width:880px}.wa-story-controls,.wa-stage{grid-column:1}.wa-stage{width:min(660px,100%);justify-self:center}.wa-stage__media{right:0}.wa-window{margin-left:auto;margin-right:auto}.wa-builder__header,.wa-builder__layout{grid-template-columns:1fr}.wa-builder__side{position:static;grid-template-columns:minmax(0,1fr) minmax(0,1fr);align-items:start}.wa-builder__status{grid-column:1 / -1}}@media(max-width:760px){.wa-section{--wa-chat-x-padding: 6px;--wa-chat-first-entry-offset: calc(var(--wa-chat-top-fade) + 12px);--wa-composer-outset-x: 14px;--wa-composer-bottom-outset: 18px;--wa-composer-height: 50px;--wa-composer-send-size: 36px;--wa-history-resume-height: 40px;padding:54px 18px 72px}.wa-section__inner{row-gap:40px}.wa-copy__title{font-size:clamp(36px,11vw,48px);line-height:1.05}.wa-story-tabs{gap:22px}.wa-story-tab{gap:18px;min-height:64px}.wa-story-tab__marker{min-height:64px}.wa-story-tab__body{gap:13px;padding-top:9px}.wa-story-tab__title{font-size:24px}.wa-story-tab__description{font-size:15px}.wa-builder{gap:18px;padding-top:40px}.wa-builder__header{gap:16px}.wa-builder__title{font-size:clamp(28px,9vw,36px)}.wa-builder__lede{font-size:14px}.wa-builder-tab{flex:1 1 100%;min-width:0}.wa-builder__thread{min-height:500px;max-height:660px;padding:18px}.wa-builder-step .wa-message{max-width:96%}.wa-builder-step[data-builder-kind=component] .wa-message,.wa-builder-step[data-builder-kind=thinking] .wa-message{width:100%}.wa-builder-step__toolbar{opacity:1;transform:none}.wa-builder-component-card,.wa-builder-file-pill{grid-template-columns:1fr}.wa-builder-cursor-line{grid-template-columns:16px minmax(0,1fr)}.wa-builder__side{grid-template-columns:1fr}.wa-stage{width:100%;min-height:560px}.wa-stage__media{top:-22px;right:0;width:58vw;min-width:220px;height:570px}.wa-window{width:min(100%,590px);margin:82px 0 0}.wa-chat-shell{height:520px;border-radius:16px}.wa-chat-shell__body{gap:0}.wa-thread{--wa-chat-entry-gap: 14px}.wa-thread{min-height:0;max-height:none}.wa-message{max-width:96%}.wa-message__body{max-width:min(var(--wa-ai-message-max-width),340px);font-size:13px}.wa-message[data-message-role=user] .wa-message__body{max-width:min(var(--wa-user-message-max-width),280px)}.wa-result-row{grid-template-columns:1fr;gap:4px}.wa-result-row strong{white-space:normal}.wa-signup-scene{padding-bottom:4px}.wa-signup-field{width:min(292px,88%)}.wa-research-step{min-height:52px;gap:7px;padding-left:0}.wa-research-step__label{font-size:12px}.wa-research-step__detail{font-size:10px}.wa-result-grid.has-strategy-plans{grid-template-columns:minmax(0,1fr);gap:7px}.wa-data-source-grid--marketing{inset:calc(var(--wa-chat-top-fade) - 8px) 16px 18px;gap:12px}.wa-data-source-grid--marketing .wa-data-source-grid__title{font-size:16px}.wa-data-source-grid--marketing .wa-data-source-grid__subtitle{font-size:10.5px}.wa-data-source-grid--marketing .wa-data-source-grid__groups{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px 12px}.wa-data-source-grid--marketing .wa-data-source-grid__list{grid-template-columns:repeat(2,minmax(0,1fr));gap:6px 8px}.wa-data-vendor-logo{min-height:20px}.wa-data-vendor-logo__image{max-height:14px}.wa-data-vendor-logo__mark{font-size:10.5px}.wa-data-source-grid__list,.wa-engage-channels,.wa-style-profile__rows,.wa-swipe-game__actions,.wa-builder-data-sources-editor,.wa-builder-style-profile-editor,.wa-builder-proximity-editor__row,.wa-builder-swipe-game-editor__row,.wa-builder-sequence-editor,.wa-builder-channel-editor,.wa-sequence-step{grid-template-columns:minmax(0,1fr)}.wa-sequence-step__channel{justify-self:start;padding:0 8px}.wa-sequence-person-button{width:22px;height:22px;padding:0;font-size:13px}.wa-data-table{gap:0;padding:0}.wa-data-table__title{font-size:12px}.wa-data-table__count{font-size:9px}.wa-data-table__row{min-height:24px}.wa-data-table__row[data-header=true]{min-height:22px}.wa-data-table__cell{padding:0 4px;font-size:7.5px;line-height:1.06}.wa-data-table__row[data-header=true] .wa-data-table__cell{font-size:8px}.wa-data-table__row[data-header=true] .wa-data-table__cell:last-of-type{padding-right:26px}.wa-data-table__add{top:3px;right:4px;width:18px;height:16px;border-radius:4px;font-size:12px}.wa-data-table__footer{align-items:start;gap:6px;padding-top:6px}.wa-data-table__actions{gap:4px}.wa-data-table-action{width:22px;height:22px;padding:0;border-radius:4px}.wa-data-table-action__icon{width:12px;height:12px}.wa-data-table-action__badge{min-height:12px;padding:0 4px;font-size:6.5px}.wa-data-table-floating-tooltip{min-height:25px;padding:0 9px;font-size:9.5px}.wa-data-table-floating-tooltip[data-has-badge=true]{min-height:43px;padding:7px 9px;gap:5px}.wa-data-table-floating-tooltip__badge{min-height:13px;padding:0 5px;font-size:7px}.wa-data-table__pagination{gap:4px;font-size:7.5px}.wa-data-table__page-controls{gap:2px}.wa-data-table__page-button{width:17px;height:17px;border-radius:4px;font-size:7.5px}.wa-data-table-person{grid-template-columns:20px minmax(0,1fr);gap:4px}.wa-data-table-person__avatar-wrap,.wa-data-table-person__avatar{width:20px;height:20px}.wa-data-table-person__source{right:0;bottom:0;width:10px;height:10px}.wa-data-table-person__source[data-source=signal]:before{right:2px;bottom:2px;width:5px}.wa-data-table-person__source[data-source=signal]:after{right:1px;bottom:4px;height:4px}.wa-data-table-person__source[data-source=database]:before{top:2px;left:2px}.wa-data-table-person__source[data-source=engage]:before{top:3px;left:2px;width:6px}.wa-data-table-person__name{font-size:8px;line-height:1.03}.wa-enrichment-panel{gap:9px;max-width:100%}.wa-enrichment-panel__header{grid-template-columns:12px auto auto;gap:6px;padding:0;font-size:12px}.wa-waterfall-rows{gap:7px}.wa-waterfall-row{grid-template-columns:13px minmax(82px,auto) minmax(0,1fr);gap:6px;min-height:24px;font-size:11px}.wa-waterfall-chip{max-width:72px;padding-right:5px;font-size:8.5px}.wa-strategy-plan{min-height:112px;gap:5px;padding:9px}.wa-strategy-plan__title{min-height:0;font-size:12px}.wa-strategy-plan__summary{font-size:11px}.wa-swipe-game{max-width:100%}.wa-swipe-game__stack{height:168px}.wa-swipe-card{padding:18px 16px}.wa-swipe-card__label{font-size:16px}.wa-swipe-card__detail{font-size:10.5px}.wa-composer{grid-template-columns:minmax(0,1fr) var(--wa-composer-send-size);min-height:var(--wa-composer-height);padding:6px 8px 6px 15px}.wa-composer__placeholder{min-height:34px;font-size:13px}.wa-composer__send{width:var(--wa-composer-send-size);min-width:var(--wa-composer-send-size);height:var(--wa-composer-send-size);padding:0 0 2px}}@media(prefers-reduced-motion:reduce){.wa-section *,.wa-section *:before,.wa-section *:after{animation-duration:.001ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important}}', Oi = "chatbot-stories-styles";
function Fo() {
  if (document.getElementById(Oi)) return;
  const o = document.createElement("style");
  o.id = Oi, o.textContent = Lo, document.head.append(o);
}
function Ho(o) {
  if (o instanceof HTMLElement) return o;
  const e = document.querySelector(o);
  if (!e)
    throw new Error(`ChatbotStories: root element not found for selector "${o}"`);
  return e;
}
function Br(o = "[data-chatbot-stories]", e = {}) {
  return e.injectStyles !== !1 && Fo(), Bo(Ho(o), e);
}
const Wo = {
  init: Br,
  defaultStories: qr
};
if (typeof window < "u") {
  window.ChatbotStories = Wo;
  const o = () => {
    document.querySelectorAll("[data-chatbot-stories][data-auto-init]").forEach((e) => {
      e.dataset.chatbotStoriesMounted || (e.dataset.chatbotStoriesMounted = "true", Br(e));
    });
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", o, { once: !0 }) : o();
}
export {
  qr as defaultStories,
  Br as init
};
