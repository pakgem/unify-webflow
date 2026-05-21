function Te(s) {
  if (s === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s;
}
function Ji(s, e) {
  s.prototype = Object.create(e.prototype), s.prototype.constructor = s, s.__proto__ = e;
}
var ce = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, zt = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, ja, X, B, we = 1e8, q = 1 / we, Ia = Math.PI * 2, $r = Ia / 4, en = 0, Qi = Math.sqrt, tn = Math.cos, an = Math.sin, Y = function(e) {
  return typeof e == "string";
}, G = function(e) {
  return typeof e == "function";
}, Pe = function(e) {
  return typeof e == "number";
}, Ya = function(e) {
  return typeof e > "u";
}, Ae = function(e) {
  return typeof e == "object";
}, te = function(e) {
  return e !== !1;
}, Xa = function() {
  return typeof window < "u";
}, jt = function(e) {
  return G(e) || Y(e);
}, Ki = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Z = Array.isArray, rn = /random\([^)]+\)/g, nn = /,\s*/g, mi = /(?:-?\.?\d|\.)+/gi, Zi = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, pt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, ma = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, $i = /[+-]=-?[.\d]+/, sn = /[^,'"\[\]\s]+/gi, on = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, V, xe, Ma, Ja, ue = {}, aa = {}, er, tr = function(e) {
  return (aa = wt(e, ue)) && ne;
}, Qa = function(e, t) {
  return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, Lt = function(e, t) {
  return !t && console.warn(e);
}, ar = function(e, t) {
  return e && (ue[e] = t) && aa && (aa[e] = t) || ue;
}, Bt = function() {
  return 0;
}, ln = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, $t = {
  suppressEvents: !0,
  kill: !1
}, dn = {
  suppressEvents: !0
}, Ka = {}, Oe = [], Ra = {}, ir, se = {}, ga = {}, gi = 30, ea = [], Za = "", $a = function(e) {
  var t = e[0], a, i;
  if (Ae(t) || G(t) || (e = [e]), !(a = (t._gsap || {}).harness)) {
    for (i = ea.length; i-- && !ea[i].targetTest(t); )
      ;
    a = ea[i];
  }
  for (i = e.length; i--; )
    e[i] && (e[i]._gsap || (e[i]._gsap = new kr(e[i], a))) || e.splice(i, 1);
  return e;
}, tt = function(e) {
  return e._gsap || $a(be(e))[0]._gsap;
}, rr = function(e, t, a) {
  return (a = e[t]) && G(a) ? e[t]() : Ya(a) && e.getAttribute && e.getAttribute(t) || a;
}, ae = function(e, t) {
  return (e = e.split(",")).forEach(t) || e;
}, U = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, H = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, mt = function(e, t) {
  var a = t.charAt(0), i = parseFloat(t.substr(2));
  return e = parseFloat(e), a === "+" ? e + i : a === "-" ? e - i : a === "*" ? e * i : e / i;
}, cn = function(e, t) {
  for (var a = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < a; )
    ;
  return i < a;
}, ia = function() {
  var e = Oe.length, t = Oe.slice(0), a, i;
  for (Ra = {}, Oe.length = 0, a = 0; a < e; a++)
    i = t[a], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, ei = function(e) {
  return !!(e._initted || e._startAt || e.add);
}, nr = function(e, t, a, i) {
  Oe.length && !X && ia(), e.render(t, a, !!(X && t < 0 && ei(e))), Oe.length && !X && ia();
}, sr = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match(sn).length < 2 ? t : Y(e) ? e.trim() : e;
}, or = function(e) {
  return e;
}, pe = function(e, t) {
  for (var a in t)
    a in e || (e[a] = t[a]);
  return e;
}, un = function(e) {
  return function(t, a) {
    for (var i in a)
      i in t || i === "duration" && e || i === "ease" || (t[i] = a[i]);
  };
}, wt = function(e, t) {
  for (var a in t)
    e[a] = t[a];
  return e;
}, fi = function s(e, t) {
  for (var a in t)
    a !== "__proto__" && a !== "constructor" && a !== "prototype" && (e[a] = Ae(t[a]) ? s(e[a] || (e[a] = {}), t[a]) : t[a]);
  return e;
}, ra = function(e, t) {
  var a = {}, i;
  for (i in e)
    i in t || (a[i] = e[i]);
  return a;
}, Dt = function(e) {
  var t = e.parent || V, a = e.keyframes ? un(Z(e.keyframes)) : pe;
  if (te(e.inherit))
    for (; t; )
      a(e, t.vars.defaults), t = t.parent || t._dp;
  return e;
}, pn = function(e, t) {
  for (var a = e.length, i = a === t.length; i && a-- && e[a] === t[a]; )
    ;
  return a < 0;
}, lr = function(e, t, a, i, r) {
  var n = e[i], o;
  if (r)
    for (o = t[r]; n && n[r] > o; )
      n = n._prev;
  return n ? (t._next = n._next, n._next = t) : (t._next = e[a], e[a] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = n, t.parent = t._dp = e, t;
}, ca = function(e, t, a, i) {
  a === void 0 && (a = "_first"), i === void 0 && (i = "_last");
  var r = t._prev, n = t._next;
  r ? r._next = n : e[a] === t && (e[a] = n), n ? n._prev = r : e[i] === t && (e[i] = r), t._next = t._prev = t.parent = null;
}, Be = function(e, t) {
  e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, at = function(e, t) {
  if (e && (!t || t._end > e._dur || t._start < 0))
    for (var a = e; a; )
      a._dirty = 1, a = a.parent;
  return e;
}, hn = function(e) {
  for (var t = e.parent; t && t.parent; )
    t._dirty = 1, t.totalDuration(), t = t.parent;
  return e;
}, Na = function(e, t, a, i) {
  return e._startAt && (X ? e._startAt.revert($t) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, i));
}, mn = function s(e) {
  return !e || e._ts && s(e.parent);
}, wi = function(e) {
  return e._repeat ? bt(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, bt = function(e, t) {
  var a = Math.floor(e = H(e / t));
  return e && a === e ? a - 1 : a;
}, na = function(e, t) {
  return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, ua = function(e) {
  return e._end = H(e._start + (e._tDur / Math.abs(e._ts || e._rts || q) || 0));
}, pa = function(e, t) {
  var a = e._dp;
  return a && a.smoothChildTiming && e._ts && (e._start = H(a._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), ua(e), a._dirty || at(a, e)), e;
}, dr = function(e, t) {
  var a;
  if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (a = na(e.rawTime(), t), (!t._dur || Ut(0, t.totalDuration(), a) - t._tTime > q) && t.render(a, !0)), at(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (a = e; a._dp; )
        a.rawTime() >= 0 && a.totalTime(a._tTime), a = a._dp;
    e._zTime = -q;
  }
}, ve = function(e, t, a, i) {
  return t.parent && Be(t), t._start = H((Pe(a) ? a : a || e !== V ? fe(e, a, t) : e._time) + t._delay), t._end = H(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), lr(e, t, "_first", "_last", e._sort ? "_start" : 0), Da(t) || (e._recent = t), i || dr(e, t), e._ts < 0 && pa(e, e._tTime), e;
}, cr = function(e, t) {
  return (ue.ScrollTrigger || Qa("scrollTrigger", t)) && ue.ScrollTrigger.create(t, e);
}, ur = function(e, t, a, i, r) {
  if (ai(e, t, r), !e._initted)
    return 1;
  if (!a && e._pt && !X && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && ir !== oe.frame)
    return Oe.push(e), e._lazy = [r, i], 1;
}, gn = function s(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || s(t));
}, Da = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, fn = function(e, t, a, i) {
  var r = e.ratio, n = t < 0 || !t && (!e._start && gn(e) && !(!e._initted && Da(e)) || (e._ts < 0 || e._dp._ts < 0) && !Da(e)) ? 0 : 1, o = e._rDelay, l = 0, d, c, u;
  if (o && e._repeat && (l = Ut(0, e._tDur, t), c = bt(l, o), e._yoyo && c & 1 && (n = 1 - n), c !== bt(e._tTime, o) && (r = 1 - n, e.vars.repeatRefresh && e._initted && e.invalidate())), n !== r || X || i || e._zTime === q || !t && e._zTime) {
    if (!e._initted && ur(e, t, i, a, l))
      return;
    for (u = e._zTime, e._zTime = t || (a ? q : 0), a || (a = t && !u), e.ratio = n, e._from && (n = 1 - n), e._time = 0, e._tTime = l, d = e._pt; d; )
      d.r(n, d.d), d = d._next;
    t < 0 && Na(e, t, a, !0), e._onUpdate && !a && le(e, "onUpdate"), l && e._repeat && !a && e.parent && le(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === n && (n && Be(e, 1), !a && !X && (le(e, n ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else e._zTime || (e._zTime = t);
}, wn = function(e, t, a) {
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
}, _t = function(e, t, a, i) {
  var r = e._repeat, n = H(t) || 0, o = e._tTime / e._tDur;
  return o && !i && (e._time *= n / e._dur), e._dur = n, e._tDur = r ? r < 0 ? 1e10 : H(n * (r + 1) + e._rDelay * r) : n, o > 0 && !i && pa(e, e._tTime = e._tDur * o), e.parent && ua(e), a || at(e.parent, e), e;
}, bi = function(e) {
  return e instanceof ee ? at(e) : _t(e, e._dur);
}, bn = {
  _start: 0,
  endTime: Bt,
  totalDuration: Bt
}, fe = function s(e, t, a) {
  var i = e.labels, r = e._recent || bn, n = e.duration() >= we ? r.endTime(!1) : e._dur, o, l, d;
  return Y(t) && (isNaN(t) || t in i) ? (l = t.charAt(0), d = t.substr(-1) === "%", o = t.indexOf("="), l === "<" || l === ">" ? (o >= 0 && (t = t.replace(/=/, "")), (l === "<" ? r._start : r.endTime(r._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (d ? (o < 0 ? r : a).totalDuration() / 100 : 1)) : o < 0 ? (t in i || (i[t] = n), i[t]) : (l = parseFloat(t.charAt(o - 1) + t.substr(o + 1)), d && a && (l = l / 100 * (Z(a) ? a[0] : a).totalDuration()), o > 1 ? s(e, t.substr(0, o - 1), a) + l : n + l)) : t == null ? n : +t;
}, qt = function(e, t, a) {
  var i = Pe(t[1]), r = (i ? 2 : 1) + (e < 2 ? 0 : 1), n = t[r], o, l;
  if (i && (n.duration = t[1]), n.parent = a, e) {
    for (o = n, l = a; l && !("immediateRender" in o); )
      o = l.vars.defaults || {}, l = te(l.vars.inherit) && l.parent;
    n.immediateRender = te(o.immediateRender), e < 2 ? n.runBackwards = 1 : n.startAt = t[r - 1];
  }
  return new j(t[0], n, t[r + 1]);
}, Ve = function(e, t) {
  return e || e === 0 ? t(e) : t;
}, Ut = function(e, t, a) {
  return a < e ? e : a > t ? t : a;
}, K = function(e, t) {
  return !Y(e) || !(t = on.exec(e)) ? "" : t[1];
}, _n = function(e, t, a) {
  return Ve(a, function(i) {
    return Ut(e, t, i);
  });
}, qa = [].slice, pr = function(e, t) {
  return e && Ae(e) && "length" in e && (!t && !e.length || e.length - 1 in e && Ae(e[0])) && !e.nodeType && e !== xe;
}, yn = function(e, t, a) {
  return a === void 0 && (a = []), e.forEach(function(i) {
    var r;
    return Y(i) && !t || pr(i, 1) ? (r = a).push.apply(r, be(i)) : a.push(i);
  }) || a;
}, be = function(e, t, a) {
  return B && !t && B.selector ? B.selector(e) : Y(e) && !a && (Ma || !yt()) ? qa.call((t || Ja).querySelectorAll(e), 0) : Z(e) ? yn(e, a) : pr(e) ? qa.call(e, 0) : e ? [e] : [];
}, Oa = function(e) {
  return e = be(e)[0] || Lt("Invalid scope") || {}, function(t) {
    var a = e.current || e.nativeElement || e;
    return be(t, a.querySelectorAll ? a : a === e ? Lt("Invalid scope") || Ja.createElement("div") : e);
  };
}, hr = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, mr = function(e) {
  if (G(e))
    return e;
  var t = Ae(e) ? e : {
    each: e
  }, a = it(t.ease), i = t.from || 0, r = parseFloat(t.base) || 0, n = {}, o = i > 0 && i < 1, l = isNaN(i) || o, d = t.axis, c = i, u = i;
  return Y(i) ? c = u = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !o && l && (c = i[0], u = i[1]), function(p, m, g) {
    var h = (g || t).length, f = n[h], b, _, x, v, y, C, S, k, A;
    if (!f) {
      if (A = t.grid === "auto" ? 0 : (t.grid || [1, we])[1], !A) {
        for (S = -we; S < (S = g[A++].getBoundingClientRect().left) && A < h; )
          ;
        A < h && A--;
      }
      for (f = n[h] = [], b = l ? Math.min(A, h) * c - 0.5 : i % A, _ = A === we ? 0 : l ? h * u / A - 0.5 : i / A | 0, S = 0, k = we, C = 0; C < h; C++)
        x = C % A - b, v = _ - (C / A | 0), f[C] = y = d ? Math.abs(d === "y" ? v : x) : Qi(x * x + v * v), y > S && (S = y), y < k && (k = y);
      i === "random" && hr(f), f.max = S - k, f.min = k, f.v = h = (parseFloat(t.amount) || parseFloat(t.each) * (A > h ? h - 1 : d ? d === "y" ? h / A : A : Math.max(A, h / A)) || 0) * (i === "edges" ? -1 : 1), f.b = h < 0 ? r - h : r, f.u = K(t.amount || t.each) || 0, a = a && h < 0 ? Nn(a) : a;
    }
    return h = (f[p] - f.min) / f.max || 0, H(f.b + (a ? a(h) : h) * f.v) + f.u;
  };
}, za = function(e) {
  var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(a) {
    var i = H(Math.round(parseFloat(a) / e) * e * t);
    return (i - i % 1) / t + (Pe(a) ? 0 : K(a));
  };
}, gr = function(e, t) {
  var a = Z(e), i, r;
  return !a && Ae(e) && (i = a = e.radius || we, e.values ? (e = be(e.values), (r = !Pe(e[0])) && (i *= i)) : e = za(e.increment)), Ve(t, a ? G(e) ? function(n) {
    return r = e(n), Math.abs(r - n) <= i ? r : n;
  } : function(n) {
    for (var o = parseFloat(r ? n.x : n), l = parseFloat(r ? n.y : 0), d = we, c = 0, u = e.length, p, m; u--; )
      r ? (p = e[u].x - o, m = e[u].y - l, p = p * p + m * m) : p = Math.abs(e[u] - o), p < d && (d = p, c = u);
    return c = !i || d <= i ? e[c] : n, r || c === n || Pe(n) ? c : c + K(n);
  } : za(e));
}, fr = function(e, t, a, i) {
  return Ve(Z(e) ? !t : a === !0 ? !!(a = 0) : !i, function() {
    return Z(e) ? e[~~(Math.random() * e.length)] : (a = a || 1e-5) && (i = a < 1 ? Math.pow(10, (a + "").length - 2) : 1) && Math.floor(Math.round((e - a / 2 + Math.random() * (t - e + a * 0.99)) / a) * a * i) / i;
  });
}, xn = function() {
  for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
    t[a] = arguments[a];
  return function(i) {
    return t.reduce(function(r, n) {
      return n(r);
    }, i);
  };
}, vn = function(e, t) {
  return function(a) {
    return e(parseFloat(a)) + (t || K(a));
  };
}, Sn = function(e, t, a) {
  return br(e, t, 0, 1, a);
}, wr = function(e, t, a) {
  return Ve(a, function(i) {
    return e[~~t(i)];
  });
}, An = function s(e, t, a) {
  var i = t - e;
  return Z(e) ? wr(e, s(0, e.length), t) : Ve(a, function(r) {
    return (i + (r - e) % i) % i + e;
  });
}, kn = function s(e, t, a) {
  var i = t - e, r = i * 2;
  return Z(e) ? wr(e, s(0, e.length - 1), t) : Ve(a, function(n) {
    return n = (r + (n - e) % r) % r || 0, e + (n > i ? r - n : n);
  });
}, Ft = function(e) {
  return e.replace(rn, function(t) {
    var a = t.indexOf("[") + 1, i = t.substring(a || 7, a ? t.indexOf("]") : t.length - 1).split(nn);
    return fr(a ? i : +i[0], a ? 0 : +i[1], +i[2] || 1e-5);
  });
}, br = function(e, t, a, i, r) {
  var n = t - e, o = i - a;
  return Ve(r, function(l) {
    return a + ((l - e) / n * o || 0);
  });
}, Cn = function s(e, t, a, i) {
  var r = isNaN(e + t) ? 0 : function(m) {
    return (1 - m) * e + m * t;
  };
  if (!r) {
    var n = Y(e), o = {}, l, d, c, u, p;
    if (a === !0 && (i = 1) && (a = null), n)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (Z(e) && !Z(t)) {
      for (c = [], u = e.length, p = u - 2, d = 1; d < u; d++)
        c.push(s(e[d - 1], e[d]));
      u--, r = function(g) {
        g *= u;
        var h = Math.min(p, ~~g);
        return c[h](g - h);
      }, a = t;
    } else i || (e = wt(Z(e) ? [] : {}, e));
    if (!c) {
      for (l in t)
        ti.call(o, e, l, "get", t[l]);
      r = function(g) {
        return ni(g, o) || (n ? e.p : e);
      };
    }
  }
  return Ve(a, r);
}, _i = function(e, t, a) {
  var i = e.labels, r = we, n, o, l;
  for (n in i)
    o = i[n] - t, o < 0 == !!a && o && r > (o = Math.abs(o)) && (l = n, r = o);
  return l;
}, le = function(e, t, a) {
  var i = e.vars, r = i[t], n = B, o = e._ctx, l, d, c;
  if (r)
    return l = i[t + "Params"], d = i.callbackScope || e, a && Oe.length && ia(), o && (B = o), c = l ? r.apply(d, l) : r.call(d), B = n, c;
}, It = function(e) {
  return Be(e), e.scrollTrigger && e.scrollTrigger.kill(!!X), e.progress() < 1 && le(e, "onInterrupt"), e;
}, ht, _r = [], yr = function(e) {
  if (e)
    if (e = !e.name && e.default || e, Xa() || e.headless) {
      var t = e.name, a = G(e), i = t && !a && e.init ? function() {
        this._props = [];
      } : e, r = {
        init: Bt,
        render: ni,
        add: ti,
        kill: Wn,
        modifier: Vn,
        rawVars: 0
      }, n = {
        targetTest: 0,
        get: 0,
        getSetter: ri,
        aliases: {},
        register: 0
      };
      if (yt(), e !== i) {
        if (se[t])
          return;
        pe(i, pe(ra(e, r), n)), wt(i.prototype, wt(r, ra(e, n))), se[i.prop = t] = i, e.targetTest && (ea.push(i), Ka[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      ar(t, i), e.register && e.register(ne, i, ie);
    } else
      _r.push(e);
}, D = 255, Mt = {
  aqua: [0, D, D],
  lime: [0, D, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, D],
  navy: [0, 0, 128],
  white: [D, D, D],
  olive: [128, 128, 0],
  yellow: [D, D, 0],
  orange: [D, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [D, 0, 0],
  pink: [D, 192, 203],
  cyan: [0, D, D],
  transparent: [D, D, D, 0]
}, fa = function(e, t, a) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (a - t) * e * 6 : e < 0.5 ? a : e * 3 < 2 ? t + (a - t) * (2 / 3 - e) * 6 : t) * D + 0.5 | 0;
}, xr = function(e, t, a) {
  var i = e ? Pe(e) ? [e >> 16, e >> 8 & D, e & D] : 0 : Mt.black, r, n, o, l, d, c, u, p, m, g;
  if (!i) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Mt[e])
      i = Mt[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (r = e.charAt(1), n = e.charAt(2), o = e.charAt(3), e = "#" + r + r + n + n + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & D, i & D, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & D, e & D];
    } else if (e.substr(0, 3) === "hsl") {
      if (i = g = e.match(mi), !t)
        l = +i[0] % 360 / 360, d = +i[1] / 100, c = +i[2] / 100, n = c <= 0.5 ? c * (d + 1) : c + d - c * d, r = c * 2 - n, i.length > 3 && (i[3] *= 1), i[0] = fa(l + 1 / 3, r, n), i[1] = fa(l, r, n), i[2] = fa(l - 1 / 3, r, n);
      else if (~e.indexOf("="))
        return i = e.match(Zi), a && i.length < 4 && (i[3] = 1), i;
    } else
      i = e.match(mi) || Mt.transparent;
    i = i.map(Number);
  }
  return t && !g && (r = i[0] / D, n = i[1] / D, o = i[2] / D, u = Math.max(r, n, o), p = Math.min(r, n, o), c = (u + p) / 2, u === p ? l = d = 0 : (m = u - p, d = c > 0.5 ? m / (2 - u - p) : m / (u + p), l = u === r ? (n - o) / m + (n < o ? 6 : 0) : u === n ? (o - r) / m + 2 : (r - n) / m + 4, l *= 60), i[0] = ~~(l + 0.5), i[1] = ~~(d * 100 + 0.5), i[2] = ~~(c * 100 + 0.5)), a && i.length < 4 && (i[3] = 1), i;
}, vr = function(e) {
  var t = [], a = [], i = -1;
  return e.split(ze).forEach(function(r) {
    var n = r.match(pt) || [];
    t.push.apply(t, n), a.push(i += n.length + 1);
  }), t.c = a, t;
}, yi = function(e, t, a) {
  var i = "", r = (e + i).match(ze), n = t ? "hsla(" : "rgba(", o = 0, l, d, c, u;
  if (!r)
    return e;
  if (r = r.map(function(p) {
    return (p = xr(p, t, 1)) && n + (t ? p[0] + "," + p[1] + "%," + p[2] + "%," + p[3] : p.join(",")) + ")";
  }), a && (c = vr(e), l = a.c, l.join(i) !== c.c.join(i)))
    for (d = e.replace(ze, "1").split(pt), u = d.length - 1; o < u; o++)
      i += d[o] + (~l.indexOf(o) ? r.shift() || n + "0,0,0,0)" : (c.length ? c : r.length ? r : a).shift());
  if (!d)
    for (d = e.split(ze), u = d.length - 1; o < u; o++)
      i += d[o] + r[o];
  return i + d[u];
}, ze = (function() {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in Mt)
    s += "|" + e + "\\b";
  return new RegExp(s + ")", "gi");
})(), Tn = /hsl[a]?\(/, Sr = function(e) {
  var t = e.join(" "), a;
  if (ze.lastIndex = 0, ze.test(t))
    return a = Tn.test(t), e[1] = yi(e[1], a), e[0] = yi(e[0], a, vr(e[1])), !0;
}, Ht, oe = (function() {
  var s = Date.now, e = 500, t = 33, a = s(), i = a, r = 1e3 / 240, n = r, o = [], l, d, c, u, p, m, g = function h(f) {
    var b = s() - i, _ = f === !0, x, v, y, C;
    if ((b > e || b < 0) && (a += b - t), i += b, y = i - a, x = y - n, (x > 0 || _) && (C = ++u.frame, p = y - u.time * 1e3, u.time = y = y / 1e3, n += x + (x >= r ? 4 : r - x), v = 1), _ || (l = d(h)), v)
      for (m = 0; m < o.length; m++)
        o[m](y, p, C, f);
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
      er && (!Ma && Xa() && (xe = Ma = window, Ja = xe.document || {}, ue.gsap = ne, (xe.gsapVersions || (xe.gsapVersions = [])).push(ne.version), tr(aa || xe.GreenSockGlobals || !xe.gsap && xe || {}), _r.forEach(yr)), c = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && u.sleep(), d = c || function(f) {
        return setTimeout(f, n - u.time * 1e3 + 1 | 0);
      }, Ht = 1, g(2));
    },
    sleep: function() {
      (c ? cancelAnimationFrame : clearTimeout)(l), Ht = 0, d = Bt;
    },
    lagSmoothing: function(f, b) {
      e = f || 1 / 0, t = Math.min(b || 33, e);
    },
    fps: function(f) {
      r = 1e3 / (f || 240), n = u.time * 1e3 + r;
    },
    add: function(f, b, _) {
      var x = b ? function(v, y, C, S) {
        f(v, y, C, S), u.remove(x);
      } : f;
      return u.remove(f), o[_ ? "unshift" : "push"](x), yt(), x;
    },
    remove: function(f, b) {
      ~(b = o.indexOf(f)) && o.splice(b, 1) && m >= b && m--;
    },
    _listeners: o
  }, u;
})(), yt = function() {
  return !Ht && oe.wake();
}, M = {}, En = /^[\d.\-M][\d.\-,\s]/, Pn = /["']/g, In = function(e) {
  for (var t = {}, a = e.substr(1, e.length - 3).split(":"), i = a[0], r = 1, n = a.length, o, l, d; r < n; r++)
    l = a[r], o = r !== n - 1 ? l.lastIndexOf(",") : l.length, d = l.substr(0, o), t[i] = isNaN(d) ? d.replace(Pn, "").trim() : +d, i = l.substr(o + 1).trim();
  return t;
}, Mn = function(e) {
  var t = e.indexOf("(") + 1, a = e.indexOf(")"), i = e.indexOf("(", t);
  return e.substring(t, ~i && i < a ? e.indexOf(")", a + 1) : a);
}, Rn = function(e) {
  var t = (e + "").split("("), a = M[t[0]];
  return a && t.length > 1 && a.config ? a.config.apply(null, ~e.indexOf("{") ? [In(t[1])] : Mn(e).split(",").map(sr)) : M._CE && En.test(e) ? M._CE("", e) : a;
}, Nn = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, it = function(e, t) {
  return e && (G(e) ? e : M[e] || Rn(e)) || t;
}, ot = function(e, t, a, i) {
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
  return ae(e, function(o) {
    M[o] = ue[o] = r, M[n = o.toLowerCase()] = a;
    for (var l in r)
      M[n + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = M[o + "." + l] = r[l];
  }), r;
}, Ar = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, wa = function s(e, t, a) {
  var i = t >= 1 ? t : 1, r = (a || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), n = r / Ia * (Math.asin(1 / i) || 0), o = function(c) {
    return c === 1 ? 1 : i * Math.pow(2, -10 * c) * an((c - n) * r) + 1;
  }, l = e === "out" ? o : e === "in" ? function(d) {
    return 1 - o(1 - d);
  } : Ar(o);
  return r = Ia / r, l.config = function(d, c) {
    return s(e, d, c);
  }, l;
}, ba = function s(e, t) {
  t === void 0 && (t = 1.70158);
  var a = function(n) {
    return n ? --n * n * ((t + 1) * n + t) + 1 : 0;
  }, i = e === "out" ? a : e === "in" ? function(r) {
    return 1 - a(1 - r);
  } : Ar(a);
  return i.config = function(r) {
    return s(e, r);
  }, i;
};
ae("Linear,Quad,Cubic,Quart,Quint,Strong", function(s, e) {
  var t = e < 5 ? e + 1 : e;
  ot(s + ",Power" + (t - 1), e ? function(a) {
    return Math.pow(a, t);
  } : function(a) {
    return a;
  }, function(a) {
    return 1 - Math.pow(1 - a, t);
  }, function(a) {
    return a < 0.5 ? Math.pow(a * 2, t) / 2 : 1 - Math.pow((1 - a) * 2, t) / 2;
  });
});
M.Linear.easeNone = M.none = M.Linear.easeIn;
ot("Elastic", wa("in"), wa("out"), wa());
(function(s, e) {
  var t = 1 / e, a = 2 * t, i = 2.5 * t, r = function(o) {
    return o < t ? s * o * o : o < a ? s * Math.pow(o - 1.5 / e, 2) + 0.75 : o < i ? s * (o -= 2.25 / e) * o + 0.9375 : s * Math.pow(o - 2.625 / e, 2) + 0.984375;
  };
  ot("Bounce", function(n) {
    return 1 - r(1 - n);
  }, r);
})(7.5625, 2.75);
ot("Expo", function(s) {
  return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s);
});
ot("Circ", function(s) {
  return -(Qi(1 - s * s) - 1);
});
ot("Sine", function(s) {
  return s === 1 ? 1 : -tn(s * $r) + 1;
});
ot("Back", ba("in"), ba("out"), ba());
M.SteppedEase = M.steps = ue.SteppedEase = {
  config: function(e, t) {
    e === void 0 && (e = 1);
    var a = 1 / e, i = e + (t ? 0 : 1), r = t ? 1 : 0, n = 1 - q;
    return function(o) {
      return ((i * Ut(0, n, o) | 0) + r) * a;
    };
  }
};
zt.ease = M["quad.out"];
ae("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(s) {
  return Za += s + "," + s + "Params,";
});
var kr = function(e, t) {
  this.id = en++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : rr, this.set = t ? t.getSetter : ri;
}, Vt = /* @__PURE__ */ (function() {
  function s(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, _t(this, +t.duration, 1, 1), this.data = t.data, B && (this._ctx = B, B.data.push(this)), Ht || oe.wake();
  }
  var e = s.prototype;
  return e.delay = function(a) {
    return a || a === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + a - this._delay), this._delay = a, this) : this._delay;
  }, e.duration = function(a) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? a + (a + this._rDelay) * this._repeat : a) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(a) {
    return arguments.length ? (this._dirty = 0, _t(this, this._repeat < 0 ? a : (a - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(a, i) {
    if (yt(), !arguments.length)
      return this._tTime;
    var r = this._dp;
    if (r && r.smoothChildTiming && this._ts) {
      for (pa(this, a), !r._dp || r.parent || dr(r, this); r && r.parent; )
        r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && a < this._tDur || this._ts < 0 && a > 0 || !this._tDur && !a) && ve(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== a || !this._dur && !i || this._initted && Math.abs(this._zTime) === q || !this._initted && this._dur && a || !a && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = a), nr(this, a, i)), this;
  }, e.time = function(a, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), a + wi(this)) % (this._dur + this._rDelay) || (a ? this._dur : 0), i) : this._time;
  }, e.totalProgress = function(a, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * a, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, e.progress = function(a, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - a : a) + wi(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(a, i) {
    var r = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (a - 1) * r, i) : this._repeat ? bt(this._tTime, r) + 1 : 1;
  }, e.timeScale = function(a, i) {
    if (!arguments.length)
      return this._rts === -q ? 0 : this._rts;
    if (this._rts === a)
      return this;
    var r = this.parent && this._ts ? na(this.parent._time, this) : this._tTime;
    return this._rts = +a || 0, this._ts = this._ps || a === -q ? 0 : this._rts, this.totalTime(Ut(-Math.abs(this._delay), this.totalDuration(), r), i !== !1), ua(this), hn(this);
  }, e.paused = function(a) {
    return arguments.length ? (this._ps !== a && (this._ps = a, a ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (yt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== q && (this._tTime -= q)))), this) : this._ps;
  }, e.startTime = function(a) {
    if (arguments.length) {
      this._start = H(a);
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && ve(i, this, this._start - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(a) {
    return this._start + (te(a) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(a) {
    var i = this.parent || this._dp;
    return i ? a && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? na(i.rawTime(a), this) : this._tTime : this._tTime;
  }, e.revert = function(a) {
    a === void 0 && (a = dn);
    var i = X;
    return X = a, ei(this) && (this.timeline && this.timeline.revert(a), this.totalTime(-0.01, a.suppressEvents)), this.data !== "nested" && a.kill !== !1 && this.kill(), X = i, this;
  }, e.globalTime = function(a) {
    for (var i = this, r = arguments.length ? a : i.rawTime(); i; )
      r = i._start + r / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(a) : r;
  }, e.repeat = function(a) {
    return arguments.length ? (this._repeat = a === 1 / 0 ? -2 : a, bi(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(a) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = a, bi(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(a) {
    return arguments.length ? (this._yoyo = a, this) : this._yoyo;
  }, e.seek = function(a, i) {
    return this.totalTime(fe(this, a), te(i));
  }, e.restart = function(a, i) {
    return this.play().totalTime(a ? -this._delay : 0, te(i)), this._dur || (this._zTime = -q), this;
  }, e.play = function(a, i) {
    return a != null && this.seek(a, i), this.reversed(!1).paused(!1);
  }, e.reverse = function(a, i) {
    return a != null && this.seek(a || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, e.pause = function(a, i) {
    return a != null && this.seek(a, i), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(a) {
    return arguments.length ? (!!a !== this.reversed() && this.timeScale(-this._rts || (a ? -q : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -q, this;
  }, e.isActive = function() {
    var a = this.parent || this._dp, i = this._start, r;
    return !!(!a || this._ts && this._initted && a.isActive() && (r = a.rawTime(!0)) >= i && r < this.endTime(!0) - q);
  }, e.eventCallback = function(a, i, r) {
    var n = this.vars;
    return arguments.length > 1 ? (i ? (n[a] = i, r && (n[a + "Params"] = r), a === "onUpdate" && (this._onUpdate = i)) : delete n[a], this) : n[a];
  }, e.then = function(a) {
    var i = this, r = i._prom;
    return new Promise(function(n) {
      var o = G(a) ? a : or, l = function() {
        var c = i.then;
        i.then = null, r && r(), G(o) && (o = o(i)) && (o.then || o === i) && (i.then = c), n(o), i.then = c;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? l() : i._prom = l;
    });
  }, e.kill = function() {
    It(this);
  }, s;
})();
pe(Vt.prototype, {
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
  _zTime: -q,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var ee = /* @__PURE__ */ (function(s) {
  Ji(e, s);
  function e(a, i) {
    var r;
    return a === void 0 && (a = {}), r = s.call(this, a) || this, r.labels = {}, r.smoothChildTiming = !!a.smoothChildTiming, r.autoRemoveChildren = !!a.autoRemoveChildren, r._sort = te(a.sortChildren), V && ve(a.parent || V, Te(r), i), a.reversed && r.reverse(), a.paused && r.paused(!0), a.scrollTrigger && cr(Te(r), a.scrollTrigger), r;
  }
  var t = e.prototype;
  return t.to = function(i, r, n) {
    return qt(0, arguments, this), this;
  }, t.from = function(i, r, n) {
    return qt(1, arguments, this), this;
  }, t.fromTo = function(i, r, n, o) {
    return qt(2, arguments, this), this;
  }, t.set = function(i, r, n) {
    return r.duration = 0, r.parent = this, Dt(r).repeatDelay || (r.repeat = 0), r.immediateRender = !!r.immediateRender, new j(i, r, fe(this, n), 1), this;
  }, t.call = function(i, r, n) {
    return ve(this, j.delayedCall(0, i, r), n);
  }, t.staggerTo = function(i, r, n, o, l, d, c) {
    return n.duration = r, n.stagger = n.stagger || o, n.onComplete = d, n.onCompleteParams = c, n.parent = this, new j(i, n, fe(this, l)), this;
  }, t.staggerFrom = function(i, r, n, o, l, d, c) {
    return n.runBackwards = 1, Dt(n).immediateRender = te(n.immediateRender), this.staggerTo(i, r, n, o, l, d, c);
  }, t.staggerFromTo = function(i, r, n, o, l, d, c, u) {
    return o.startAt = n, Dt(o).immediateRender = te(o.immediateRender), this.staggerTo(i, r, o, l, d, c, u);
  }, t.render = function(i, r, n) {
    var o = this._time, l = this._dirty ? this.totalDuration() : this._tDur, d = this._dur, c = i <= 0 ? 0 : H(i), u = this._zTime < 0 != i < 0 && (this._initted || !d), p, m, g, h, f, b, _, x, v, y, C, S;
    if (this !== V && c > l && i >= 0 && (c = l), c !== this._tTime || n || u) {
      if (o !== this._time && d && (c += this._time - o, i += this._time - o), p = c, v = this._start, x = this._ts, b = !x, u && (d || (o = this._zTime), (i || !r) && (this._zTime = i)), this._repeat) {
        if (C = this._yoyo, f = d + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(f * 100 + i, r, n);
        if (p = H(c % f), c === l ? (h = this._repeat, p = d) : (y = H(c / f), h = ~~y, h && h === y && (p = d, h--), p > d && (p = d)), y = bt(this._tTime, f), !o && this._tTime && y !== h && this._tTime - y * f - this._dur <= 0 && (y = h), C && h & 1 && (p = d - p, S = 1), h !== y && !this._lock) {
          var k = C && y & 1, A = k === (C && h & 1);
          if (h < y && (k = !k), o = k ? 0 : c % d ? d : c, this._lock = 1, this.render(o || (S ? 0 : H(h * f)), r, !d)._lock = 0, this._tTime = c, !r && this.parent && le(this, "onRepeat"), this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1, y = h), o && o !== this._time || b !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (d = this._dur, l = this._tDur, A && (this._lock = 2, o = k ? d : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !S && this.invalidate()), this._lock = 0, !this._ts && !b)
            return this;
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (_ = wn(this, H(o), H(p)), _ && (c -= p - (p = _._start))), this._tTime = c, this._time = p, this._act = !!x, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, o = 0), !o && c && d && !r && !y && (le(this, "onStart"), this._tTime !== c))
        return this;
      if (p >= o && i >= 0)
        for (m = this._first; m; ) {
          if (g = m._next, (m._act || p >= m._start) && m._ts && _ !== m) {
            if (m.parent !== this)
              return this.render(i, r, n);
            if (m.render(m._ts > 0 ? (p - m._start) * m._ts : (m._dirty ? m.totalDuration() : m._tDur) + (p - m._start) * m._ts, r, n), p !== this._time || !this._ts && !b) {
              _ = 0, g && (c += this._zTime = -q);
              break;
            }
          }
          m = g;
        }
      else {
        m = this._last;
        for (var E = i < 0 ? i : p; m; ) {
          if (g = m._prev, (m._act || E <= m._end) && m._ts && _ !== m) {
            if (m.parent !== this)
              return this.render(i, r, n);
            if (m.render(m._ts > 0 ? (E - m._start) * m._ts : (m._dirty ? m.totalDuration() : m._tDur) + (E - m._start) * m._ts, r, n || X && ei(m)), p !== this._time || !this._ts && !b) {
              _ = 0, g && (c += this._zTime = E ? -q : q);
              break;
            }
          }
          m = g;
        }
      }
      if (_ && !r && (this.pause(), _.render(p >= o ? 0 : -q)._zTime = p >= o ? 1 : -1, this._ts))
        return this._start = v, ua(this), this.render(i, r, n);
      this._onUpdate && !r && le(this, "onUpdate", !0), (c === l && this._tTime >= this.totalDuration() || !c && o) && (v === this._start || Math.abs(x) !== Math.abs(this._ts)) && (this._lock || ((i || !d) && (c === l && this._ts > 0 || !c && this._ts < 0) && Be(this, 1), !r && !(i < 0 && !o) && (c || o || !l) && (le(this, c === l && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(i, r) {
    var n = this;
    if (Pe(r) || (r = fe(this, r, i)), !(i instanceof Vt)) {
      if (Z(i))
        return i.forEach(function(o) {
          return n.add(o, r);
        }), this;
      if (Y(i))
        return this.addLabel(i, r);
      if (G(i))
        i = j.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? ve(this, i, r) : this;
  }, t.getChildren = function(i, r, n, o) {
    i === void 0 && (i = !0), r === void 0 && (r = !0), n === void 0 && (n = !0), o === void 0 && (o = -we);
    for (var l = [], d = this._first; d; )
      d._start >= o && (d instanceof j ? r && l.push(d) : (n && l.push(d), i && l.push.apply(l, d.getChildren(!0, r, n)))), d = d._next;
    return l;
  }, t.getById = function(i) {
    for (var r = this.getChildren(1, 1, 1), n = r.length; n--; )
      if (r[n].vars.id === i)
        return r[n];
  }, t.remove = function(i) {
    return Y(i) ? this.removeLabel(i) : G(i) ? this.killTweensOf(i) : (i.parent === this && ca(this, i), i === this._recent && (this._recent = this._last), at(this));
  }, t.totalTime = function(i, r) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = H(oe.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), s.prototype.totalTime.call(this, i, r), this._forcing = 0, this) : this._tTime;
  }, t.addLabel = function(i, r) {
    return this.labels[i] = fe(this, r), this;
  }, t.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, t.addPause = function(i, r, n) {
    var o = j.delayedCall(0, r || Bt, n);
    return o.data = "isPause", this._hasPause = 1, ve(this, o, fe(this, i));
  }, t.removePause = function(i) {
    var r = this._first;
    for (i = fe(this, i); r; )
      r._start === i && r.data === "isPause" && Be(r), r = r._next;
  }, t.killTweensOf = function(i, r, n) {
    for (var o = this.getTweensOf(i, n), l = o.length; l--; )
      Ne !== o[l] && o[l].kill(i, r);
    return this;
  }, t.getTweensOf = function(i, r) {
    for (var n = [], o = be(i), l = this._first, d = Pe(r), c; l; )
      l instanceof j ? cn(l._targets, o) && (d ? (!Ne || l._initted && l._ts) && l.globalTime(0) <= r && l.globalTime(l.totalDuration()) > r : !r || l.isActive()) && n.push(l) : (c = l.getTweensOf(o, r)).length && n.push.apply(n, c), l = l._next;
    return n;
  }, t.tweenTo = function(i, r) {
    r = r || {};
    var n = this, o = fe(n, i), l = r, d = l.startAt, c = l.onStart, u = l.onStartParams, p = l.immediateRender, m, g = j.to(n, pe({
      ease: r.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: o,
      overwrite: "auto",
      duration: r.duration || Math.abs((o - (d && "time" in d ? d.time : n._time)) / n.timeScale()) || q,
      onStart: function() {
        if (n.pause(), !m) {
          var f = r.duration || Math.abs((o - (d && "time" in d ? d.time : n._time)) / n.timeScale());
          g._dur !== f && _t(g, f, 0, 1).render(g._time, !0, !0), m = 1;
        }
        c && c.apply(g, u || []);
      }
    }, r));
    return p ? g.render(0) : g;
  }, t.tweenFromTo = function(i, r, n) {
    return this.tweenTo(r, pe({
      startAt: {
        time: fe(this, i)
      }
    }, n));
  }, t.recent = function() {
    return this._recent;
  }, t.nextLabel = function(i) {
    return i === void 0 && (i = this._time), _i(this, fe(this, i));
  }, t.previousLabel = function(i) {
    return i === void 0 && (i = this._time), _i(this, fe(this, i), 1);
  }, t.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + q);
  }, t.shiftChildren = function(i, r, n) {
    n === void 0 && (n = 0);
    var o = this._first, l = this.labels, d;
    for (i = H(i); o; )
      o._start >= n && (o._start += i, o._end += i), o = o._next;
    if (r)
      for (d in l)
        l[d] >= n && (l[d] += i);
    return at(this);
  }, t.invalidate = function(i) {
    var r = this._first;
    for (this._lock = 0; r; )
      r.invalidate(i), r = r._next;
    return s.prototype.invalidate.call(this, i);
  }, t.clear = function(i) {
    i === void 0 && (i = !0);
    for (var r = this._first, n; r; )
      n = r._next, this.remove(r), r = n;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), at(this);
  }, t.totalDuration = function(i) {
    var r = 0, n = this, o = n._last, l = we, d, c, u;
    if (arguments.length)
      return n.timeScale((n._repeat < 0 ? n.duration() : n.totalDuration()) / (n.reversed() ? -i : i));
    if (n._dirty) {
      for (u = n.parent; o; )
        d = o._prev, o._dirty && o.totalDuration(), c = o._start, c > l && n._sort && o._ts && !n._lock ? (n._lock = 1, ve(n, o, c - o._delay, 1)._lock = 0) : l = c, c < 0 && o._ts && (r -= c, (!u && !n._dp || u && u.smoothChildTiming) && (n._start += H(c / n._ts), n._time -= c, n._tTime -= c), n.shiftChildren(-c, !1, -1 / 0), l = 0), o._end > r && o._ts && (r = o._end), o = d;
      _t(n, n === V && n._time > r ? n._time : r, 1, 1), n._dirty = 0;
    }
    return n._tDur;
  }, e.updateRoot = function(i) {
    if (V._ts && (nr(V, na(i, V)), ir = oe.frame), oe.frame >= gi) {
      gi += ce.autoSleep || 120;
      var r = V._first;
      if ((!r || !r._ts) && ce.autoSleep && oe._listeners.length < 2) {
        for (; r && !r._ts; )
          r = r._next;
        r || oe.sleep();
      }
    }
  }, e;
})(Vt);
pe(ee.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Dn = function(e, t, a, i, r, n, o) {
  var l = new ie(this._pt, e, t, 0, 1, Mr, null, r), d = 0, c = 0, u, p, m, g, h, f, b, _;
  for (l.b = a, l.e = i, a += "", i += "", (b = ~i.indexOf("random(")) && (i = Ft(i)), n && (_ = [a, i], n(_, e, t), a = _[0], i = _[1]), p = a.match(ma) || []; u = ma.exec(i); )
    g = u[0], h = i.substring(d, u.index), m ? m = (m + 1) % 5 : h.substr(-5) === "rgba(" && (m = 1), g !== p[c++] && (f = parseFloat(p[c - 1]) || 0, l._pt = {
      _next: l._pt,
      p: h || c === 1 ? h : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: f,
      c: g.charAt(1) === "=" ? mt(f, g) - f : parseFloat(g) - f,
      m: m && m < 4 ? Math.round : 0
    }, d = ma.lastIndex);
  return l.c = d < i.length ? i.substring(d, i.length) : "", l.fp = o, ($i.test(i) || b) && (l.e = 0), this._pt = l, l;
}, ti = function(e, t, a, i, r, n, o, l, d, c) {
  G(i) && (i = i(r || 0, e, n));
  var u = e[t], p = a !== "get" ? a : G(u) ? d ? e[t.indexOf("set") || !G(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](d) : e[t]() : u, m = G(u) ? d ? Bn : Pr : ii, g;
  if (Y(i) && (~i.indexOf("random(") && (i = Ft(i)), i.charAt(1) === "=" && (g = mt(p, i) + (K(p) || 0), (g || g === 0) && (i = g))), !c || p !== i || La)
    return !isNaN(p * i) && i !== "" ? (g = new ie(this._pt, e, t, +p || 0, i - (p || 0), typeof u == "boolean" ? Hn : Ir, 0, m), d && (g.fp = d), o && g.modifier(o, this, e), this._pt = g) : (!u && !(t in e) && Qa(t, i), Dn.call(this, e, t, p, i, m, l || ce.stringFilter, d));
}, qn = function(e, t, a, i, r) {
  if (G(e) && (e = Ot(e, r, t, a, i)), !Ae(e) || e.style && e.nodeType || Z(e) || Ki(e))
    return Y(e) ? Ot(e, r, t, a, i) : e;
  var n = {}, o;
  for (o in e)
    n[o] = Ot(e[o], r, t, a, i);
  return n;
}, Cr = function(e, t, a, i, r, n) {
  var o, l, d, c;
  if (se[e] && (o = new se[e]()).init(r, o.rawVars ? t[e] : qn(t[e], i, r, n, a), a, i, n) !== !1 && (a._pt = l = new ie(a._pt, r, e, 0, 1, o.render, o, 0, o.priority), a !== ht))
    for (d = a._ptLookup[a._targets.indexOf(r)], c = o._props.length; c--; )
      d[o._props[c]] = l;
  return o;
}, Ne, La, ai = function s(e, t, a) {
  var i = e.vars, r = i.ease, n = i.startAt, o = i.immediateRender, l = i.lazy, d = i.onUpdate, c = i.runBackwards, u = i.yoyoEase, p = i.keyframes, m = i.autoRevert, g = e._dur, h = e._startAt, f = e._targets, b = e.parent, _ = b && b.data === "nested" ? b.vars.targets : f, x = e._overwrite === "auto" && !ja, v = e.timeline, y = i.easeReverse || u, C, S, k, A, E, O, N, I, R, P, F, z, $;
  if (v && (!p || !r) && (r = "none"), e._ease = it(r, zt.ease), e._rEase = y && (it(y) || e._ease), e._from = !v && !!i.runBackwards, e._from && (e.ratio = 1), !v || p && !i.stagger) {
    if (I = f[0] ? tt(f[0]).harness : 0, z = I && i[I.prop], C = ra(i, Ka), h && (h._zTime < 0 && h.progress(1), t < 0 && c && o && !m ? h.render(-1, !0) : h.revert(c && g ? $t : ln), h._lazy = 0), n) {
      if (Be(e._startAt = j.set(f, pe({
        data: "isStart",
        overwrite: !1,
        parent: b,
        immediateRender: !0,
        lazy: !h && te(l),
        startAt: null,
        delay: 0,
        onUpdate: d && function() {
          return le(e, "onUpdate");
        },
        stagger: 0
      }, n))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (X || !o && !m) && e._startAt.revert($t), o && g && t <= 0 && a <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (c && g && !h) {
      if (t && (o = !1), k = pe({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: o && !h && te(l),
        immediateRender: o,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: b
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, C), z && (k[I.prop] = z), Be(e._startAt = j.set(f, k)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (X ? e._startAt.revert($t) : e._startAt.render(-1, !0)), e._zTime = t, !o)
        s(e._startAt, q, q);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, l = g && te(l) || l && !g, S = 0; S < f.length; S++) {
      if (E = f[S], N = E._gsap || $a(f)[S]._gsap, e._ptLookup[S] = P = {}, Ra[N.id] && Oe.length && ia(), F = _ === f ? S : _.indexOf(E), I && (R = new I()).init(E, z || C, e, F, _) !== !1 && (e._pt = A = new ie(e._pt, E, R.name, 0, 1, R.render, R, 0, R.priority), R._props.forEach(function(he) {
        P[he] = A;
      }), R.priority && (O = 1)), !I || z)
        for (k in C)
          se[k] && (R = Cr(k, C, e, F, E, _)) ? R.priority && (O = 1) : P[k] = A = ti.call(e, E, k, "get", C[k], F, _, 0, i.stringFilter);
      e._op && e._op[S] && e.kill(E, e._op[S]), x && e._pt && (Ne = e, V.killTweensOf(E, P, e.globalTime(t)), $ = !e.parent, Ne = 0), e._pt && l && (Ra[N.id] = 1);
    }
    O && Rr(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = d, e._initted = (!e._op || e._pt) && !$, p && t <= 0 && v.render(we, !0, !0);
}, On = function(e, t, a, i, r, n, o, l) {
  var d = (e._pt && e._ptCache || (e._ptCache = {}))[t], c, u, p, m;
  if (!d)
    for (d = e._ptCache[t] = [], p = e._ptLookup, m = e._targets.length; m--; ) {
      if (c = p[m][t], c && c.d && c.d._pt)
        for (c = c.d._pt; c && c.p !== t && c.fp !== t; )
          c = c._next;
      if (!c)
        return La = 1, e.vars[t] = "+=0", ai(e, o), La = 0, l ? Lt(t + " not eligible for reset. Try splitting into individual properties") : 1;
      d.push(c);
    }
  for (m = d.length; m--; )
    u = d[m], c = u._pt || u, c.s = (i || i === 0) && !r ? i : c.s + (i || 0) + n * c.c, c.c = a - c.s, u.e && (u.e = U(a) + K(u.e)), u.b && (u.b = c.s + K(u.b));
}, zn = function(e, t) {
  var a = e[0] ? tt(e[0]).harness : 0, i = a && a.aliases, r, n, o, l;
  if (!i)
    return t;
  r = wt({}, t);
  for (n in i)
    if (n in r)
      for (l = i[n].split(","), o = l.length; o--; )
        r[l[o]] = r[n];
  return r;
}, Ln = function(e, t, a, i) {
  var r = t.ease || i || "power1.inOut", n, o;
  if (Z(t))
    o = a[e] || (a[e] = []), t.forEach(function(l, d) {
      return o.push({
        t: d / (t.length - 1) * 100,
        v: l,
        e: r
      });
    });
  else
    for (n in t)
      o = a[n] || (a[n] = []), n === "ease" || o.push({
        t: parseFloat(e),
        v: t[n],
        e: r
      });
}, Ot = function(e, t, a, i, r) {
  return G(e) ? e.call(t, a, i, r) : Y(e) && ~e.indexOf("random(") ? Ft(e) : e;
}, Tr = Za + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", Er = {};
ae(Tr + ",id,stagger,delay,duration,paused,scrollTrigger", function(s) {
  return Er[s] = 1;
});
var j = /* @__PURE__ */ (function(s) {
  Ji(e, s);
  function e(a, i, r, n) {
    var o;
    typeof i == "number" && (r.duration = i, i = r, r = null), o = s.call(this, n ? i : Dt(i)) || this;
    var l = o.vars, d = l.duration, c = l.delay, u = l.immediateRender, p = l.stagger, m = l.overwrite, g = l.keyframes, h = l.defaults, f = l.scrollTrigger, b = i.parent || V, _ = (Z(a) || Ki(a) ? Pe(a[0]) : "length" in i) ? [a] : be(a), x, v, y, C, S, k, A, E;
    if (o._targets = _.length ? $a(_) : Lt("GSAP target " + a + " not found. https://gsap.com", !ce.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = m, g || p || jt(d) || jt(c)) {
      i = o.vars;
      var O = i.easeReverse || i.yoyoEase;
      if (x = o.timeline = new ee({
        data: "nested",
        defaults: h || {},
        targets: b && b.data === "nested" ? b.vars.targets : _
      }), x.kill(), x.parent = x._dp = Te(o), x._start = 0, p || jt(d) || jt(c)) {
        if (C = _.length, A = p && mr(p), Ae(p))
          for (S in p)
            ~Tr.indexOf(S) && (E || (E = {}), E[S] = p[S]);
        for (v = 0; v < C; v++)
          y = ra(i, Er), y.stagger = 0, O && (y.easeReverse = O), E && wt(y, E), k = _[v], y.duration = +Ot(d, Te(o), v, k, _), y.delay = (+Ot(c, Te(o), v, k, _) || 0) - o._delay, !p && C === 1 && y.delay && (o._delay = c = y.delay, o._start += c, y.delay = 0), x.to(k, y, A ? A(v, k, _) : 0), x._ease = M.none;
        x.duration() ? d = c = 0 : o.timeline = 0;
      } else if (g) {
        Dt(pe(x.vars.defaults, {
          ease: "none"
        })), x._ease = it(g.ease || i.ease || "none");
        var N = 0, I, R, P;
        if (Z(g))
          g.forEach(function(F) {
            return x.to(_, F, ">");
          }), x.duration();
        else {
          y = {};
          for (S in g)
            S === "ease" || S === "easeEach" || Ln(S, g[S], y, g.easeEach);
          for (S in y)
            for (I = y[S].sort(function(F, z) {
              return F.t - z.t;
            }), N = 0, v = 0; v < I.length; v++)
              R = I[v], P = {
                ease: R.e,
                duration: (R.t - (v ? I[v - 1].t : 0)) / 100 * d
              }, P[S] = R.v, x.to(_, P, N), N += P.duration;
          x.duration() < d && x.to({}, {
            duration: d - x.duration()
          });
        }
      }
      d || o.duration(d = x.duration());
    } else
      o.timeline = 0;
    return m === !0 && !ja && (Ne = Te(o), V.killTweensOf(_), Ne = 0), ve(b, Te(o), r), i.reversed && o.reverse(), i.paused && o.paused(!0), (u || !d && !g && o._start === H(b._time) && te(u) && mn(Te(o)) && b.data !== "nested") && (o._tTime = -q, o.render(Math.max(0, -c) || 0)), f && cr(Te(o), f), o;
  }
  var t = e.prototype;
  return t.render = function(i, r, n) {
    var o = this._time, l = this._tDur, d = this._dur, c = i < 0, u = i > l - q && !c ? l : i < q ? 0 : i, p, m, g, h, f, b, _, x;
    if (!d)
      fn(this, i, r, n);
    else if (u !== this._tTime || !i || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c || this._lazy) {
      if (p = u, x = this.timeline, this._repeat) {
        if (h = d + this._rDelay, this._repeat < -1 && c)
          return this.totalTime(h * 100 + i, r, n);
        if (p = H(u % h), u === l ? (g = this._repeat, p = d) : (f = H(u / h), g = ~~f, g && g === f ? (p = d, g--) : p > d && (p = d)), b = this._yoyo && g & 1, b && (p = d - p), f = bt(this._tTime, h), p === o && !n && this._initted && g === f)
          return this._tTime = u, this;
        g !== f && this.vars.repeatRefresh && !b && !this._lock && p !== h && this._initted && (this._lock = n = 1, this.render(H(h * g), !0).invalidate()._lock = 0);
      }
      if (!this._initted) {
        if (ur(this, c ? i : p, n, r, u))
          return this._tTime = 0, this;
        if (o !== this._time && !(n && this.vars.repeatRefresh && g !== f))
          return this;
        if (d !== this._dur)
          return this.render(i, r, n);
      }
      if (this._rEase) {
        var v = p < o;
        if (v !== this._inv) {
          var y = v ? o : d - o;
          this._inv = v, this._from && (this.ratio = 1 - this.ratio), this._invRatio = this.ratio, this._invTime = o, this._invRecip = y ? (v ? -1 : 1) / y : 0, this._invScale = v ? -this.ratio : 1 - this.ratio, this._invEase = v ? this._rEase : this._ease;
        }
        this.ratio = _ = this._invRatio + this._invScale * this._invEase((p - this._invTime) * this._invRecip);
      } else
        this.ratio = _ = this._ease(p / d);
      if (this._from && (this.ratio = _ = 1 - _), this._tTime = u, this._time = p, !this._act && this._ts && (this._act = 1, this._lazy = 0), !o && u && !r && !f && (le(this, "onStart"), this._tTime !== u))
        return this;
      for (m = this._pt; m; )
        m.r(_, m.d), m = m._next;
      x && x.render(i < 0 ? i : x._dur * x._ease(p / this._dur), r, n) || this._startAt && (this._zTime = i), this._onUpdate && !r && (c && Na(this, i, r, n), le(this, "onUpdate")), this._repeat && g !== f && this.vars.onRepeat && !r && this.parent && le(this, "onRepeat"), (u === this._tDur || !u) && this._tTime === u && (c && !this._onUpdate && Na(this, i, !0, !0), (i || !d) && (u === this._tDur && this._ts > 0 || !u && this._ts < 0) && Be(this, 1), !r && !(c && !o) && (u || o || b) && (le(this, u === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), s.prototype.invalidate.call(this, i);
  }, t.resetTo = function(i, r, n, o, l) {
    Ht || oe.wake(), this._ts || this.play();
    var d = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
    return this._initted || ai(this, d), c = this._ease(d / this._dur), On(this, i, r, n, o, c, d, l) ? this.resetTo(i, r, n, o, 1) : (pa(this, 0), this.parent || lr(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(i, r) {
    if (r === void 0 && (r = "all"), !i && (!r || r === "all"))
      return this._lazy = this._pt = 0, this.parent ? It(this) : this.scrollTrigger && this.scrollTrigger.kill(!!X), this;
    if (this.timeline) {
      var n = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, r, Ne && Ne.vars.overwrite !== !0)._first || It(this), this.parent && n !== this.timeline.totalDuration() && _t(this, this._dur * this.timeline._tDur / n, 0, 1), this;
    }
    var o = this._targets, l = i ? be(i) : o, d = this._ptLookup, c = this._pt, u, p, m, g, h, f, b;
    if ((!r || r === "all") && pn(o, l))
      return r === "all" && (this._pt = 0), It(this);
    for (u = this._op = this._op || [], r !== "all" && (Y(r) && (h = {}, ae(r, function(_) {
      return h[_] = 1;
    }), r = h), r = zn(o, r)), b = o.length; b--; )
      if (~l.indexOf(o[b])) {
        p = d[b], r === "all" ? (u[b] = r, g = p, m = {}) : (m = u[b] = u[b] || {}, g = r);
        for (h in g)
          f = p && p[h], f && ((!("kill" in f.d) || f.d.kill(h) === !0) && ca(this, f, "_pt"), delete p[h]), m !== "all" && (m[h] = 1);
      }
    return this._initted && !this._pt && c && It(this), this;
  }, e.to = function(i, r) {
    return new e(i, r, arguments[2]);
  }, e.from = function(i, r) {
    return qt(1, arguments);
  }, e.delayedCall = function(i, r, n, o) {
    return new e(r, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: r,
      onReverseComplete: r,
      onCompleteParams: n,
      onReverseCompleteParams: n,
      callbackScope: o
    });
  }, e.fromTo = function(i, r, n) {
    return qt(2, arguments);
  }, e.set = function(i, r) {
    return r.duration = 0, r.repeatDelay || (r.repeat = 0), new e(i, r);
  }, e.killTweensOf = function(i, r, n) {
    return V.killTweensOf(i, r, n);
  }, e;
})(Vt);
pe(j.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
ae("staggerTo,staggerFrom,staggerFromTo", function(s) {
  j[s] = function() {
    var e = new ee(), t = qa.call(arguments, 0);
    return t.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), e[s].apply(e, t);
  };
});
var ii = function(e, t, a) {
  return e[t] = a;
}, Pr = function(e, t, a) {
  return e[t](a);
}, Bn = function(e, t, a, i) {
  return e[t](i.fp, a);
}, Fn = function(e, t, a) {
  return e.setAttribute(t, a);
}, ri = function(e, t) {
  return G(e[t]) ? Pr : Ya(e[t]) && e.setAttribute ? Fn : ii;
}, Ir = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, Hn = function(e, t) {
  return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, Mr = function(e, t) {
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
}, ni = function(e, t) {
  for (var a = t._pt; a; )
    a.r(e, a.d), a = a._next;
}, Vn = function(e, t, a, i) {
  for (var r = this._pt, n; r; )
    n = r._next, r.p === i && r.modifier(e, t, a), r = n;
}, Wn = function(e) {
  for (var t = this._pt, a, i; t; )
    i = t._next, t.p === e && !t.op || t.op === e ? ca(this, t, "_pt") : t.dep || (a = 1), t = i;
  return !a;
}, Gn = function(e, t, a, i) {
  i.mSet(e, t, i.m.call(i.tween, a, i.mt), i);
}, Rr = function(e) {
  for (var t = e._pt, a, i, r, n; t; ) {
    for (a = t._next, i = r; i && i.pr > t.pr; )
      i = i._next;
    (t._prev = i ? i._prev : n) ? t._prev._next = t : r = t, (t._next = i) ? i._prev = t : n = t, t = a;
  }
  e._pt = r;
}, ie = /* @__PURE__ */ (function() {
  function s(t, a, i, r, n, o, l, d, c) {
    this.t = a, this.s = r, this.c = n, this.p = i, this.r = o || Ir, this.d = l || this, this.set = d || ii, this.pr = c || 0, this._next = t, t && (t._prev = this);
  }
  var e = s.prototype;
  return e.modifier = function(a, i, r) {
    this.mSet = this.mSet || this.set, this.set = Gn, this.m = a, this.mt = r, this.tween = i;
  }, s;
})();
ae(Za + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(s) {
  return Ka[s] = 1;
});
ue.TweenMax = ue.TweenLite = j;
ue.TimelineLite = ue.TimelineMax = ee;
V = new ee({
  sortChildren: !1,
  defaults: zt,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
ce.stringFilter = Sr;
var rt = [], ta = {}, Un = [], xi = 0, jn = 0, _a = function(e) {
  return (ta[e] || Un).map(function(t) {
    return t();
  });
}, Ba = function() {
  var e = Date.now(), t = [];
  e - xi > 2 && (_a("matchMediaInit"), rt.forEach(function(a) {
    var i = a.queries, r = a.conditions, n, o, l, d;
    for (o in i)
      n = xe.matchMedia(i[o]).matches, n && (l = 1), n !== r[o] && (r[o] = n, d = 1);
    d && (a.revert(), l && t.push(a));
  }), _a("matchMediaRevert"), t.forEach(function(a) {
    return a.onMatch(a, function(i) {
      return a.add(null, i);
    });
  }), xi = e, _a("matchMedia"));
}, Nr = /* @__PURE__ */ (function() {
  function s(t, a) {
    this.selector = a && Oa(a), this.data = [], this._r = [], this.isReverted = !1, this.id = jn++, t && this.add(t);
  }
  var e = s.prototype;
  return e.add = function(a, i, r) {
    G(a) && (r = i, i = a, a = G);
    var n = this, o = function() {
      var d = B, c = n.selector, u;
      return d && d !== n && d.data.push(n), r && (n.selector = Oa(r)), B = n, u = i.apply(n, arguments), G(u) && n._r.push(u), B = d, n.selector = c, n.isReverted = !1, u;
    };
    return n.last = o, a === G ? o(n, function(l) {
      return n.add(null, l);
    }) : a ? n[a] = o : o;
  }, e.ignore = function(a) {
    var i = B;
    B = null, a(this), B = i;
  }, e.getTweens = function() {
    var a = [];
    return this.data.forEach(function(i) {
      return i instanceof s ? a.push.apply(a, i.getTweens()) : i instanceof j && !(i.parent && i.parent.data === "nested") && a.push(i);
    }), a;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(a, i) {
    var r = this;
    if (a ? (function() {
      for (var o = r.getTweens(), l = r.data.length, d; l--; )
        d = r.data[l], d.data === "isFlip" && (d.revert(), d.getChildren(!0, !0, !1).forEach(function(c) {
          return o.splice(o.indexOf(c), 1);
        }));
      for (o.map(function(c) {
        return {
          g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0,
          t: c
        };
      }).sort(function(c, u) {
        return u.g - c.g || -1 / 0;
      }).forEach(function(c) {
        return c.t.revert(a);
      }), l = r.data.length; l--; )
        d = r.data[l], d instanceof ee ? d.data !== "nested" && (d.scrollTrigger && d.scrollTrigger.revert(), d.kill()) : !(d instanceof j) && d.revert && d.revert(a);
      r._r.forEach(function(c) {
        return c(a, r);
      }), r.isReverted = !0;
    })() : this.data.forEach(function(o) {
      return o.kill && o.kill();
    }), this.clear(), i)
      for (var n = rt.length; n--; )
        rt[n].id === this.id && rt.splice(n, 1);
  }, e.revert = function(a) {
    this.kill(a || {});
  }, s;
})(), Yn = /* @__PURE__ */ (function() {
  function s(t) {
    this.contexts = [], this.scope = t, B && B.data.push(this);
  }
  var e = s.prototype;
  return e.add = function(a, i, r) {
    Ae(a) || (a = {
      matches: a
    });
    var n = new Nr(0, r || this.scope), o = n.conditions = {}, l, d, c;
    B && !n.selector && (n.selector = B.selector), this.contexts.push(n), i = n.add("onMatch", i), n.queries = a;
    for (d in a)
      d === "all" ? c = 1 : (l = xe.matchMedia(a[d]), l && (rt.indexOf(n) < 0 && rt.push(n), (o[d] = l.matches) && (c = 1), l.addListener ? l.addListener(Ba) : l.addEventListener("change", Ba)));
    return c && i(n, function(u) {
      return n.add(null, u);
    }), this;
  }, e.revert = function(a) {
    this.kill(a || {});
  }, e.kill = function(a) {
    this.contexts.forEach(function(i) {
      return i.kill(a, !0);
    });
  }, s;
})(), sa = {
  registerPlugin: function() {
    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
      t[a] = arguments[a];
    t.forEach(function(i) {
      return yr(i);
    });
  },
  timeline: function(e) {
    return new ee(e);
  },
  getTweensOf: function(e, t) {
    return V.getTweensOf(e, t);
  },
  getProperty: function(e, t, a, i) {
    Y(e) && (e = be(e)[0]);
    var r = tt(e || {}).get, n = a ? or : sr;
    return a === "native" && (a = ""), e && (t ? n((se[t] && se[t].get || r)(e, t, a, i)) : function(o, l, d) {
      return n((se[o] && se[o].get || r)(e, o, l, d));
    });
  },
  quickSetter: function(e, t, a) {
    if (e = be(e), e.length > 1) {
      var i = e.map(function(c) {
        return ne.quickSetter(c, t, a);
      }), r = i.length;
      return function(c) {
        for (var u = r; u--; )
          i[u](c);
      };
    }
    e = e[0] || {};
    var n = se[t], o = tt(e), l = o.harness && (o.harness.aliases || {})[t] || t, d = n ? function(c) {
      var u = new n();
      ht._pt = 0, u.init(e, a ? c + a : c, ht, 0, [e]), u.render(1, u), ht._pt && ni(1, ht);
    } : o.set(e, l);
    return n ? d : function(c) {
      return d(e, l, a ? c + a : c, o, 1);
    };
  },
  quickTo: function(e, t, a) {
    var i, r = ne.to(e, pe((i = {}, i[t] = "+=0.1", i.paused = !0, i.stagger = 0, i), a || {})), n = function(l, d, c) {
      return r.resetTo(t, l, d, c);
    };
    return n.tween = r, n;
  },
  isTweening: function(e) {
    return V.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = it(e.ease, zt.ease)), fi(zt, e || {});
  },
  config: function(e) {
    return fi(ce, e || {});
  },
  registerEffect: function(e) {
    var t = e.name, a = e.effect, i = e.plugins, r = e.defaults, n = e.extendTimeline;
    (i || "").split(",").forEach(function(o) {
      return o && !se[o] && !ue[o] && Lt(t + " effect requires " + o + " plugin.");
    }), ga[t] = function(o, l, d) {
      return a(be(o), pe(l || {}, r), d);
    }, n && (ee.prototype[t] = function(o, l, d) {
      return this.add(ga[t](o, Ae(l) ? l : (d = l) && {}, this), d);
    });
  },
  registerEase: function(e, t) {
    M[e] = it(t);
  },
  parseEase: function(e, t) {
    return arguments.length ? it(e, t) : M;
  },
  getById: function(e) {
    return V.getById(e);
  },
  exportRoot: function(e, t) {
    e === void 0 && (e = {});
    var a = new ee(e), i, r;
    for (a.smoothChildTiming = te(e.smoothChildTiming), V.remove(a), a._dp = 0, a._time = a._tTime = V._time, i = V._first; i; )
      r = i._next, (t || !(!i._dur && i instanceof j && i.vars.onComplete === i._targets[0])) && ve(a, i, i._start - i._delay), i = r;
    return ve(V, a, 0), a;
  },
  context: function(e, t) {
    return e ? new Nr(e, t) : B;
  },
  matchMedia: function(e) {
    return new Yn(e);
  },
  matchMediaRefresh: function() {
    return rt.forEach(function(e) {
      var t = e.conditions, a, i;
      for (i in t)
        t[i] && (t[i] = !1, a = 1);
      a && e.revert();
    }) || Ba();
  },
  addEventListener: function(e, t) {
    var a = ta[e] || (ta[e] = []);
    ~a.indexOf(t) || a.push(t);
  },
  removeEventListener: function(e, t) {
    var a = ta[e], i = a && a.indexOf(t);
    i >= 0 && a.splice(i, 1);
  },
  utils: {
    wrap: An,
    wrapYoyo: kn,
    distribute: mr,
    random: fr,
    snap: gr,
    normalize: Sn,
    getUnit: K,
    clamp: _n,
    splitColor: xr,
    toArray: be,
    selector: Oa,
    mapRange: br,
    pipe: xn,
    unitize: vn,
    interpolate: Cn,
    shuffle: hr
  },
  install: tr,
  effects: ga,
  ticker: oe,
  updateRoot: ee.updateRoot,
  plugins: se,
  globalTimeline: V,
  core: {
    PropTween: ie,
    globals: ar,
    Tween: j,
    Timeline: ee,
    Animation: Vt,
    getCache: tt,
    _removeLinkedListItem: ca,
    reverting: function() {
      return X;
    },
    context: function(e) {
      return e && B && (B.data.push(e), e._ctx = B), B;
    },
    suppressOverwrites: function(e) {
      return ja = e;
    }
  }
};
ae("to,from,fromTo,delayedCall,set,killTweensOf", function(s) {
  return sa[s] = j[s];
});
oe.add(ee.updateRoot);
ht = sa.to({}, {
  duration: 0
});
var Xn = function(e, t) {
  for (var a = e._pt; a && a.p !== t && a.op !== t && a.fp !== t; )
    a = a._next;
  return a;
}, Jn = function(e, t) {
  var a = e._targets, i, r, n;
  for (i in t)
    for (r = a.length; r--; )
      n = e._ptLookup[r][i], n && (n = n.d) && (n._pt && (n = Xn(n, i)), n && n.modifier && n.modifier(t[i], e, a[r], i));
}, ya = function(e, t) {
  return {
    name: e,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, r, n) {
      n._onInit = function(o) {
        var l, d;
        if (Y(r) && (l = {}, ae(r, function(c) {
          return l[c] = 1;
        }), r = l), t) {
          l = {};
          for (d in r)
            l[d] = t(r[d]);
          r = l;
        }
        Jn(o, r);
      };
    }
  };
}, ne = sa.registerPlugin({
  name: "attr",
  init: function(e, t, a, i, r) {
    var n, o, l;
    this.tween = a;
    for (n in t)
      l = e.getAttribute(n) || "", o = this.add(e, "setAttribute", (l || 0) + "", t[n], i, r, 0, 0, n), o.op = n, o.b = l, this._props.push(n);
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
}, ya("roundProps", za), ya("modifiers"), ya("snap", gr)) || sa;
j.version = ee.version = ne.version = "3.15.0";
er = 1;
Xa() && yt();
M.Power0;
M.Power1;
M.Power2;
M.Power3;
M.Power4;
M.Linear;
M.Quad;
M.Cubic;
M.Quart;
M.Quint;
M.Strong;
M.Elastic;
M.Back;
M.SteppedEase;
M.Bounce;
M.Sine;
M.Expo;
M.Circ;
var vi, De, gt, si, $e, Si, oi, Qn = function() {
  return typeof window < "u";
}, Ie = {}, Ke = 180 / Math.PI, ft = Math.PI / 180, lt = Math.atan2, Ai = 1e8, li = /([A-Z])/g, Kn = /(left|right|width|margin|padding|x)/i, Zn = /[\s,\(]\S/, Se = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Fa = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, $n = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, es = function(e, t) {
  return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, ts = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, as = function(e, t) {
  var a = t.s + t.c * e;
  t.set(t.t, t.p, ~~(a + (a < 0 ? -0.5 : 0.5)) + t.u, t);
}, Dr = function(e, t) {
  return t.set(t.t, t.p, e ? t.e : t.b, t);
}, qr = function(e, t) {
  return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
}, is = function(e, t, a) {
  return e.style[t] = a;
}, rs = function(e, t, a) {
  return e.style.setProperty(t, a);
}, ns = function(e, t, a) {
  return e._gsap[t] = a;
}, ss = function(e, t, a) {
  return e._gsap.scaleX = e._gsap.scaleY = a;
}, os = function(e, t, a, i, r) {
  var n = e._gsap;
  n.scaleX = n.scaleY = a, n.renderTransform(r, n);
}, ls = function(e, t, a, i, r) {
  var n = e._gsap;
  n[t] = a, n.renderTransform(r, n);
}, W = "transform", re = W + "Origin", ds = function s(e, t) {
  var a = this, i = this.target, r = i.style, n = i._gsap;
  if (e in Ie && r) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = Se[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(o) {
        return a.tfm[o] = Ee(i, o);
      }) : this.tfm[e] = n.x ? n[e] : Ee(i, e), e === re && (this.tfm.zOrigin = n.zOrigin);
    else
      return Se.transform.split(",").forEach(function(o) {
        return s.call(a, o, t);
      });
    if (this.props.indexOf(W) >= 0)
      return;
    n.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(re, t, "")), e = W;
  }
  (r || t) && this.props.push(e, t, r[e]);
}, Or = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, cs = function() {
  var e = this.props, t = this.target, a = t.style, i = t._gsap, r, n;
  for (r = 0; r < e.length; r += 3)
    e[r + 1] ? e[r + 1] === 2 ? t[e[r]](e[r + 2]) : t[e[r]] = e[r + 2] : e[r + 2] ? a[e[r]] = e[r + 2] : a.removeProperty(e[r].substr(0, 2) === "--" ? e[r] : e[r].replace(li, "-$1").toLowerCase());
  if (this.tfm) {
    for (n in this.tfm)
      i[n] = this.tfm[n];
    i.svg && (i.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), r = oi(), (!r || !r.isStart) && !a[W] && (Or(a), i.zOrigin && a[re] && (a[re] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, zr = function(e, t) {
  var a = {
    target: e,
    props: [],
    revert: cs,
    save: ds
  };
  return e._gsap || ne.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(i) {
    return a.save(i);
  }), a;
}, Lr, Ha = function(e, t) {
  var a = De.createElementNS ? De.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : De.createElement(e);
  return a && a.style ? a : De.createElement(e);
}, de = function s(e, t, a) {
  var i = getComputedStyle(e);
  return i[t] || i.getPropertyValue(t.replace(li, "-$1").toLowerCase()) || i.getPropertyValue(t) || !a && s(e, xt(t) || t, 1) || "";
}, ki = "O,Moz,ms,Ms,Webkit".split(","), xt = function(e, t, a) {
  var i = t || $e, r = i.style, n = 5;
  if (e in r && !a)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); n-- && !(ki[n] + e in r); )
    ;
  return n < 0 ? null : (n === 3 ? "ms" : n >= 0 ? ki[n] : "") + e;
}, Va = function() {
  Qn() && window.document && (vi = window, De = vi.document, gt = De.documentElement, $e = Ha("div") || {
    style: {}
  }, Ha("div"), W = xt(W), re = W + "Origin", $e.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Lr = !!xt("perspective"), oi = ne.core.reverting, si = 1);
}, Ci = function(e) {
  var t = e.ownerSVGElement, a = Ha("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = e.cloneNode(!0), r;
  i.style.display = "block", a.appendChild(i), gt.appendChild(a);
  try {
    r = i.getBBox();
  } catch {
  }
  return a.removeChild(i), gt.removeChild(a), r;
}, Ti = function(e, t) {
  for (var a = t.length; a--; )
    if (e.hasAttribute(t[a]))
      return e.getAttribute(t[a]);
}, Br = function(e) {
  var t, a;
  try {
    t = e.getBBox();
  } catch {
    t = Ci(e), a = 1;
  }
  return t && (t.width || t.height) || a || (t = Ci(e)), t && !t.width && !t.x && !t.y ? {
    x: +Ti(e, ["x", "cx", "x1"]) || 0,
    y: +Ti(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : t;
}, Fr = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Br(e));
}, Fe = function(e, t) {
  if (t) {
    var a = e.style, i;
    t in Ie && t !== re && (t = W), a.removeProperty ? (i = t.substr(0, 2), (i === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), a.removeProperty(i === "--" ? t : t.replace(li, "-$1").toLowerCase())) : a.removeAttribute(t);
  }
}, qe = function(e, t, a, i, r, n) {
  var o = new ie(e._pt, t, a, 0, 1, n ? qr : Dr);
  return e._pt = o, o.b = i, o.e = r, e._props.push(a), o;
}, Ei = {
  deg: 1,
  rad: 1,
  turn: 1
}, us = {
  grid: 1,
  flex: 1
}, He = function s(e, t, a, i) {
  var r = parseFloat(a) || 0, n = (a + "").trim().substr((r + "").length) || "px", o = $e.style, l = Kn.test(t), d = e.tagName.toLowerCase() === "svg", c = (d ? "client" : "offset") + (l ? "Width" : "Height"), u = 100, p = i === "px", m = i === "%", g, h, f, b;
  if (i === n || !r || Ei[i] || Ei[n])
    return r;
  if (n !== "px" && !p && (r = s(e, t, a, "px")), b = e.getCTM && Fr(e), (m || n === "%") && (Ie[t] || ~t.indexOf("adius")))
    return g = b ? e.getBBox()[l ? "width" : "height"] : e[c], U(m ? r / g * u : r / 100 * g);
  if (o[l ? "width" : "height"] = u + (p ? n : i), h = i !== "rem" && ~t.indexOf("adius") || i === "em" && e.appendChild && !d ? e : e.parentNode, b && (h = (e.ownerSVGElement || {}).parentNode), (!h || h === De || !h.appendChild) && (h = De.body), f = h._gsap, f && m && f.width && l && f.time === oe.time && !f.uncache)
    return U(r / f.width * u);
  if (m && (t === "height" || t === "width")) {
    var _ = e.style[t];
    e.style[t] = u + i, g = e[c], _ ? e.style[t] = _ : Fe(e, t);
  } else
    (m || n === "%") && !us[de(h, "display")] && (o.position = de(e, "position")), h === e && (o.position = "static"), h.appendChild($e), g = $e[c], h.removeChild($e), o.position = "absolute";
  return l && m && (f = tt(h), f.time = oe.time, f.width = h[c]), U(p ? g * r / u : g && r ? u / g * r : 0);
}, Ee = function(e, t, a, i) {
  var r;
  return si || Va(), t in Se && t !== "transform" && (t = Se[t], ~t.indexOf(",") && (t = t.split(",")[0])), Ie[t] && t !== "transform" ? (r = Gt(e, i), r = t !== "transformOrigin" ? r[t] : r.svg ? r.origin : la(de(e, re)) + " " + r.zOrigin + "px") : (r = e.style[t], (!r || r === "auto" || i || ~(r + "").indexOf("calc(")) && (r = oa[t] && oa[t](e, t, a) || de(e, t) || rr(e, t) || (t === "opacity" ? 1 : 0))), a && !~(r + "").trim().indexOf(" ") ? He(e, t, r, a) + a : r;
}, ps = function(e, t, a, i) {
  if (!a || a === "none") {
    var r = xt(t, e, 1), n = r && de(e, r, 1);
    n && n !== a ? (t = r, a = n) : t === "borderColor" && (a = de(e, "borderTopColor"));
  }
  var o = new ie(this._pt, e.style, t, 0, 1, Mr), l = 0, d = 0, c, u, p, m, g, h, f, b, _, x, v, y;
  if (o.b = a, o.e = i, a += "", i += "", i.substring(0, 6) === "var(--" && (i = de(e, i.substring(4, i.indexOf(")")))), i === "auto" && (h = e.style[t], e.style[t] = i, i = de(e, t) || i, h ? e.style[t] = h : Fe(e, t)), c = [a, i], Sr(c), a = c[0], i = c[1], p = a.match(pt) || [], y = i.match(pt) || [], y.length) {
    for (; u = pt.exec(i); )
      f = u[0], _ = i.substring(l, u.index), g ? g = (g + 1) % 5 : (_.substr(-5) === "rgba(" || _.substr(-5) === "hsla(") && (g = 1), f !== (h = p[d++] || "") && (m = parseFloat(h) || 0, v = h.substr((m + "").length), f.charAt(1) === "=" && (f = mt(m, f) + v), b = parseFloat(f), x = f.substr((b + "").length), l = pt.lastIndex - x.length, x || (x = x || ce.units[t] || v, l === i.length && (i += x, o.e += x)), v !== x && (m = He(e, t, h, x) || 0), o._pt = {
        _next: o._pt,
        p: _ || d === 1 ? _ : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: m,
        c: b - m,
        m: g && g < 4 || t === "zIndex" ? Math.round : 0
      });
    o.c = l < i.length ? i.substring(l, i.length) : "";
  } else
    o.r = t === "display" && i === "none" ? qr : Dr;
  return $i.test(i) && (o.e = 0), this._pt = o, o;
}, Pi = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, hs = function(e) {
  var t = e.split(" "), a = t[0], i = t[1] || "50%";
  return (a === "top" || a === "bottom" || i === "left" || i === "right") && (e = a, a = i, i = e), t[0] = Pi[a] || a, t[1] = Pi[i] || i, t.join(" ");
}, ms = function(e, t) {
  if (t.tween && t.tween._time === t.tween._dur) {
    var a = t.t, i = a.style, r = t.u, n = a._gsap, o, l, d;
    if (r === "all" || r === !0)
      i.cssText = "", l = 1;
    else
      for (r = r.split(","), d = r.length; --d > -1; )
        o = r[d], Ie[o] && (l = 1, o = o === "transformOrigin" ? re : W), Fe(a, o);
    l && (Fe(a, W), n && (n.svg && a.removeAttribute("transform"), i.scale = i.rotate = i.translate = "none", Gt(a, 1), n.uncache = 1, Or(i)));
  }
}, oa = {
  clearProps: function(e, t, a, i, r) {
    if (r.data !== "isFromStart") {
      var n = e._pt = new ie(e._pt, t, a, 0, 0, ms);
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
}, Wt = [1, 0, 0, 1, 0, 0], Hr = {}, Vr = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, Ii = function(e) {
  var t = de(e, W);
  return Vr(t) ? Wt : t.substr(7).match(Zi).map(U);
}, di = function(e, t) {
  var a = e._gsap || tt(e), i = e.style, r = Ii(e), n, o, l, d;
  return a.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, r = [l.a, l.b, l.c, l.d, l.e, l.f], r.join(",") === "1,0,0,1,0,0" ? Wt : r) : (r === Wt && !e.offsetParent && e !== gt && !a.svg && (l = i.display, i.display = "block", n = e.parentNode, (!n || !e.offsetParent && !e.getBoundingClientRect().width) && (d = 1, o = e.nextElementSibling, gt.appendChild(e)), r = Ii(e), l ? i.display = l : Fe(e, "display"), d && (o ? n.insertBefore(e, o) : n ? n.appendChild(e) : gt.removeChild(e))), t && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r);
}, Wa = function(e, t, a, i, r, n) {
  var o = e._gsap, l = r || di(e, !0), d = o.xOrigin || 0, c = o.yOrigin || 0, u = o.xOffset || 0, p = o.yOffset || 0, m = l[0], g = l[1], h = l[2], f = l[3], b = l[4], _ = l[5], x = t.split(" "), v = parseFloat(x[0]) || 0, y = parseFloat(x[1]) || 0, C, S, k, A;
  a ? l !== Wt && (S = m * f - g * h) && (k = v * (f / S) + y * (-h / S) + (h * _ - f * b) / S, A = v * (-g / S) + y * (m / S) - (m * _ - g * b) / S, v = k, y = A) : (C = Br(e), v = C.x + (~x[0].indexOf("%") ? v / 100 * C.width : v), y = C.y + (~(x[1] || x[0]).indexOf("%") ? y / 100 * C.height : y)), i || i !== !1 && o.smooth ? (b = v - d, _ = y - c, o.xOffset = u + (b * m + _ * h) - b, o.yOffset = p + (b * g + _ * f) - _) : o.xOffset = o.yOffset = 0, o.xOrigin = v, o.yOrigin = y, o.smooth = !!i, o.origin = t, o.originIsAbsolute = !!a, e.style[re] = "0px 0px", n && (qe(n, o, "xOrigin", d, v), qe(n, o, "yOrigin", c, y), qe(n, o, "xOffset", u, o.xOffset), qe(n, o, "yOffset", p, o.yOffset)), e.setAttribute("data-svg-origin", v + " " + y);
}, Gt = function(e, t) {
  var a = e._gsap || new kr(e);
  if ("x" in a && !t && !a.uncache)
    return a;
  var i = e.style, r = a.scaleX < 0, n = "px", o = "deg", l = getComputedStyle(e), d = de(e, re) || "0", c, u, p, m, g, h, f, b, _, x, v, y, C, S, k, A, E, O, N, I, R, P, F, z, $, he, At, kt, We, hi, ke, Ge;
  return c = u = p = h = f = b = _ = x = v = 0, m = g = 1, a.svg = !!(e.getCTM && Fr(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[W] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[W] !== "none" ? l[W] : "")), i.scale = i.rotate = i.translate = "none"), S = di(e, a.svg), a.svg && (a.uncache ? ($ = e.getBBox(), d = a.xOrigin - $.x + "px " + (a.yOrigin - $.y) + "px", z = "") : z = !t && e.getAttribute("data-svg-origin"), Wa(e, z || d, !!z || a.originIsAbsolute, a.smooth !== !1, S)), y = a.xOrigin || 0, C = a.yOrigin || 0, S !== Wt && (O = S[0], N = S[1], I = S[2], R = S[3], c = P = S[4], u = F = S[5], S.length === 6 ? (m = Math.sqrt(O * O + N * N), g = Math.sqrt(R * R + I * I), h = O || N ? lt(N, O) * Ke : 0, _ = I || R ? lt(I, R) * Ke + h : 0, _ && (g *= Math.abs(Math.cos(_ * ft))), a.svg && (c -= y - (y * O + C * I), u -= C - (y * N + C * R))) : (Ge = S[6], hi = S[7], At = S[8], kt = S[9], We = S[10], ke = S[11], c = S[12], u = S[13], p = S[14], k = lt(Ge, We), f = k * Ke, k && (A = Math.cos(-k), E = Math.sin(-k), z = P * A + At * E, $ = F * A + kt * E, he = Ge * A + We * E, At = P * -E + At * A, kt = F * -E + kt * A, We = Ge * -E + We * A, ke = hi * -E + ke * A, P = z, F = $, Ge = he), k = lt(-I, We), b = k * Ke, k && (A = Math.cos(-k), E = Math.sin(-k), z = O * A - At * E, $ = N * A - kt * E, he = I * A - We * E, ke = R * E + ke * A, O = z, N = $, I = he), k = lt(N, O), h = k * Ke, k && (A = Math.cos(k), E = Math.sin(k), z = O * A + N * E, $ = P * A + F * E, N = N * A - O * E, F = F * A - P * E, O = z, P = $), f && Math.abs(f) + Math.abs(h) > 359.9 && (f = h = 0, b = 180 - b), m = U(Math.sqrt(O * O + N * N + I * I)), g = U(Math.sqrt(F * F + Ge * Ge)), k = lt(P, F), _ = Math.abs(k) > 2e-4 ? k * Ke : 0, v = ke ? 1 / (ke < 0 ? -ke : ke) : 0), a.svg && (z = e.getAttribute("transform"), a.forceCSS = e.setAttribute("transform", "") || !Vr(de(e, W)), z && e.setAttribute("transform", z))), Math.abs(_) > 90 && Math.abs(_) < 270 && (r ? (m *= -1, _ += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (g *= -1, _ += _ <= 0 ? 180 : -180)), t = t || a.uncache, a.x = c - ((a.xPercent = c && (!t && a.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * a.xPercent / 100 : 0) + n, a.y = u - ((a.yPercent = u && (!t && a.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetHeight * a.yPercent / 100 : 0) + n, a.z = p + n, a.scaleX = U(m), a.scaleY = U(g), a.rotation = U(h) + o, a.rotationX = U(f) + o, a.rotationY = U(b) + o, a.skewX = _ + o, a.skewY = x + o, a.transformPerspective = v + n, (a.zOrigin = parseFloat(d.split(" ")[2]) || !t && a.zOrigin || 0) && (i[re] = la(d)), a.xOffset = a.yOffset = 0, a.force3D = ce.force3D, a.renderTransform = a.svg ? fs : Lr ? Wr : gs, a.uncache = 0, a;
}, la = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, xa = function(e, t, a) {
  var i = K(t);
  return U(parseFloat(t) + parseFloat(He(e, "x", a + "px", i))) + i;
}, gs = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Wr(e, t);
}, Ue = "0deg", Ct = "0px", je = ") ", Wr = function(e, t) {
  var a = t || this, i = a.xPercent, r = a.yPercent, n = a.x, o = a.y, l = a.z, d = a.rotation, c = a.rotationY, u = a.rotationX, p = a.skewX, m = a.skewY, g = a.scaleX, h = a.scaleY, f = a.transformPerspective, b = a.force3D, _ = a.target, x = a.zOrigin, v = "", y = b === "auto" && e && e !== 1 || b === !0;
  if (x && (u !== Ue || c !== Ue)) {
    var C = parseFloat(c) * ft, S = Math.sin(C), k = Math.cos(C), A;
    C = parseFloat(u) * ft, A = Math.cos(C), n = xa(_, n, S * A * -x), o = xa(_, o, -Math.sin(C) * -x), l = xa(_, l, k * A * -x + x);
  }
  f !== Ct && (v += "perspective(" + f + je), (i || r) && (v += "translate(" + i + "%, " + r + "%) "), (y || n !== Ct || o !== Ct || l !== Ct) && (v += l !== Ct || y ? "translate3d(" + n + ", " + o + ", " + l + ") " : "translate(" + n + ", " + o + je), d !== Ue && (v += "rotate(" + d + je), c !== Ue && (v += "rotateY(" + c + je), u !== Ue && (v += "rotateX(" + u + je), (p !== Ue || m !== Ue) && (v += "skew(" + p + ", " + m + je), (g !== 1 || h !== 1) && (v += "scale(" + g + ", " + h + je), _.style[W] = v || "translate(0, 0)";
}, fs = function(e, t) {
  var a = t || this, i = a.xPercent, r = a.yPercent, n = a.x, o = a.y, l = a.rotation, d = a.skewX, c = a.skewY, u = a.scaleX, p = a.scaleY, m = a.target, g = a.xOrigin, h = a.yOrigin, f = a.xOffset, b = a.yOffset, _ = a.forceCSS, x = parseFloat(n), v = parseFloat(o), y, C, S, k, A;
  l = parseFloat(l), d = parseFloat(d), c = parseFloat(c), c && (c = parseFloat(c), d += c, l += c), l || d ? (l *= ft, d *= ft, y = Math.cos(l) * u, C = Math.sin(l) * u, S = Math.sin(l - d) * -p, k = Math.cos(l - d) * p, d && (c *= ft, A = Math.tan(d - c), A = Math.sqrt(1 + A * A), S *= A, k *= A, c && (A = Math.tan(c), A = Math.sqrt(1 + A * A), y *= A, C *= A)), y = U(y), C = U(C), S = U(S), k = U(k)) : (y = u, k = p, C = S = 0), (x && !~(n + "").indexOf("px") || v && !~(o + "").indexOf("px")) && (x = He(m, "x", n, "px"), v = He(m, "y", o, "px")), (g || h || f || b) && (x = U(x + g - (g * y + h * S) + f), v = U(v + h - (g * C + h * k) + b)), (i || r) && (A = m.getBBox(), x = U(x + i / 100 * A.width), v = U(v + r / 100 * A.height)), A = "matrix(" + y + "," + C + "," + S + "," + k + "," + x + "," + v + ")", m.setAttribute("transform", A), _ && (m.style[W] = A);
}, ws = function(e, t, a, i, r) {
  var n = 360, o = Y(r), l = parseFloat(r) * (o && ~r.indexOf("rad") ? Ke : 1), d = l - i, c = i + d + "deg", u, p;
  return o && (u = r.split("_")[1], u === "short" && (d %= n, d !== d % (n / 2) && (d += d < 0 ? n : -n)), u === "cw" && d < 0 ? d = (d + n * Ai) % n - ~~(d / n) * n : u === "ccw" && d > 0 && (d = (d - n * Ai) % n - ~~(d / n) * n)), e._pt = p = new ie(e._pt, t, a, i, d, $n), p.e = c, p.u = "deg", e._props.push(a), p;
}, Mi = function(e, t) {
  for (var a in t)
    e[a] = t[a];
  return e;
}, bs = function(e, t, a) {
  var i = Mi({}, a._gsap), r = "perspective,force3D,transformOrigin,svgOrigin", n = a.style, o, l, d, c, u, p, m, g;
  i.svg ? (d = a.getAttribute("transform"), a.setAttribute("transform", ""), n[W] = t, o = Gt(a, 1), Fe(a, W), a.setAttribute("transform", d)) : (d = getComputedStyle(a)[W], n[W] = t, o = Gt(a, 1), n[W] = d);
  for (l in Ie)
    d = i[l], c = o[l], d !== c && r.indexOf(l) < 0 && (m = K(d), g = K(c), u = m !== g ? He(a, l, d, g) : parseFloat(d), p = parseFloat(c), e._pt = new ie(e._pt, o, l, u, p - u, Fa), e._pt.u = g || 0, e._props.push(l));
  Mi(o, i);
};
ae("padding,margin,Width,Radius", function(s, e) {
  var t = "Top", a = "Right", i = "Bottom", r = "Left", n = (e < 3 ? [t, a, i, r] : [t + r, t + a, i + a, i + r]).map(function(o) {
    return e < 2 ? s + o : "border" + o + s;
  });
  oa[e > 1 ? "border" + s : s] = function(o, l, d, c, u) {
    var p, m;
    if (arguments.length < 4)
      return p = n.map(function(g) {
        return Ee(o, g, d);
      }), m = p.join(" "), m.split(p[0]).length === 5 ? p[0] : m;
    p = (c + "").split(" "), m = {}, n.forEach(function(g, h) {
      return m[g] = p[h] = p[h] || p[(h - 1) / 2 | 0];
    }), o.init(l, m, u);
  };
});
var Gr = {
  name: "css",
  register: Va,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, a, i, r) {
    var n = this._props, o = e.style, l = a.vars.startAt, d, c, u, p, m, g, h, f, b, _, x, v, y, C, S, k, A;
    si || Va(), this.styles = this.styles || zr(e), k = this.styles.props, this.tween = a;
    for (h in t)
      if (h !== "autoRound" && (c = t[h], !(se[h] && Cr(h, t, a, i, e, r)))) {
        if (m = typeof c, g = oa[h], m === "function" && (c = c.call(a, i, e, r), m = typeof c), m === "string" && ~c.indexOf("random(") && (c = Ft(c)), g)
          g(this, e, h, c, a) && (S = 1);
        else if (h.substr(0, 2) === "--")
          d = (getComputedStyle(e).getPropertyValue(h) + "").trim(), c += "", ze.lastIndex = 0, ze.test(d) || (f = K(d), b = K(c), b ? f !== b && (d = He(e, h, d, b) + b) : f && (c += f)), this.add(o, "setProperty", d, c, i, r, 0, 0, h), n.push(h), k.push(h, 0, o[h]);
        else if (m !== "undefined") {
          if (l && h in l ? (d = typeof l[h] == "function" ? l[h].call(a, i, e, r) : l[h], Y(d) && ~d.indexOf("random(") && (d = Ft(d)), K(d + "") || d === "auto" || (d += ce.units[h] || K(Ee(e, h)) || ""), (d + "").charAt(1) === "=" && (d = Ee(e, h))) : d = Ee(e, h), p = parseFloat(d), _ = m === "string" && c.charAt(1) === "=" && c.substr(0, 2), _ && (c = c.substr(2)), u = parseFloat(c), h in Se && (h === "autoAlpha" && (p === 1 && Ee(e, "visibility") === "hidden" && u && (p = 0), k.push("visibility", 0, o.visibility), qe(this, o, "visibility", p ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), h !== "scale" && h !== "transform" && (h = Se[h], ~h.indexOf(",") && (h = h.split(",")[0]))), x = h in Ie, x) {
            if (this.styles.save(h), A = c, m === "string" && c.substring(0, 6) === "var(--") {
              if (c = de(e, c.substring(4, c.indexOf(")"))), c.substring(0, 5) === "calc(") {
                var E = e.style.perspective;
                e.style.perspective = c, c = de(e, "perspective"), E ? e.style.perspective = E : Fe(e, "perspective");
              }
              u = parseFloat(c);
            }
            if (v || (y = e._gsap, y.renderTransform && !t.parseTransform || Gt(e, t.parseTransform), C = t.smoothOrigin !== !1 && y.smooth, v = this._pt = new ie(this._pt, o, W, 0, 1, y.renderTransform, y, 0, -1), v.dep = 1), h === "scale")
              this._pt = new ie(this._pt, y, "scaleY", y.scaleY, (_ ? mt(y.scaleY, _ + u) : u) - y.scaleY || 0, Fa), this._pt.u = 0, n.push("scaleY", h), h += "X";
            else if (h === "transformOrigin") {
              k.push(re, 0, o[re]), c = hs(c), y.svg ? Wa(e, c, 0, C, 0, this) : (b = parseFloat(c.split(" ")[2]) || 0, b !== y.zOrigin && qe(this, y, "zOrigin", y.zOrigin, b), qe(this, o, h, la(d), la(c)));
              continue;
            } else if (h === "svgOrigin") {
              Wa(e, c, 1, C, 0, this);
              continue;
            } else if (h in Hr) {
              ws(this, y, h, p, _ ? mt(p, _ + c) : c);
              continue;
            } else if (h === "smoothOrigin") {
              qe(this, y, "smooth", y.smooth, c);
              continue;
            } else if (h === "force3D") {
              y[h] = c;
              continue;
            } else if (h === "transform") {
              bs(this, c, e);
              continue;
            }
          } else h in o || (h = xt(h) || h);
          if (x || (u || u === 0) && (p || p === 0) && !Zn.test(c) && h in o)
            f = (d + "").substr((p + "").length), u || (u = 0), b = K(c) || (h in ce.units ? ce.units[h] : f), f !== b && (p = He(e, h, d, b)), this._pt = new ie(this._pt, x ? y : o, h, p, (_ ? mt(p, _ + u) : u) - p, !x && (b === "px" || h === "zIndex") && t.autoRound !== !1 ? as : Fa), this._pt.u = b || 0, x && A !== c ? (this._pt.b = d, this._pt.e = A, this._pt.r = ts) : f !== b && b !== "%" && (this._pt.b = d, this._pt.r = es);
          else if (h in o)
            ps.call(this, e, h, d, _ ? _ + c : c);
          else if (h in e)
            this.add(e, h, d || e[h], _ ? _ + c : c, i, r);
          else if (h !== "parseTransform") {
            Qa(h, c);
            continue;
          }
          x || (h in o ? k.push(h, 0, o[h]) : typeof e[h] == "function" ? k.push(h, 2, e[h]()) : k.push(h, 1, d || e[h])), n.push(h);
        }
      }
    S && Rr(this);
  },
  render: function(e, t) {
    if (t.tween._time || !oi())
      for (var a = t._pt; a; )
        a.r(e, a.d), a = a._next;
    else
      t.styles.revert();
  },
  get: Ee,
  aliases: Se,
  getSetter: function(e, t, a) {
    var i = Se[t];
    return i && i.indexOf(",") < 0 && (t = i), t in Ie && t !== re && (e._gsap.x || Ee(e, "x")) ? a && Si === a ? t === "scale" ? ss : ns : (Si = a || {}) && (t === "scale" ? os : ls) : e.style && !Ya(e.style[t]) ? is : ~t.indexOf("-") ? rs : ri(e, t);
  },
  core: {
    _removeProperty: Fe,
    _getMatrix: di
  }
};
ne.utils.checkPrefix = xt;
ne.core.getStyleSaver = zr;
(function(s, e, t, a) {
  var i = ae(s + "," + e + "," + t, function(r) {
    Ie[r] = 1;
  });
  ae(e, function(r) {
    ce.units[r] = "deg", Hr[r] = 1;
  }), Se[i[13]] = s + "," + e, ae(a, function(r) {
    var n = r.split(":");
    Se[n[1]] = i[n[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
ae("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(s) {
  ce.units[s] = "px";
});
ne.registerPlugin(Gr);
var w = ne.registerPlugin(Gr) || ne;
w.core.Tween;
const Re = "Thinking", Le = "Show more", nt = "Show less";
function Ur(s) {
  return s.map((e, t) => ({
    label: e,
    detail: St(e, t),
    disclosure: t === 0 ? Le : nt
  }));
}
function St(s, e) {
  const t = s.toLowerCase();
  return t.includes("source") || t.includes("data") ? "Searching across company records, contact databases, technographics, commerce signals, and local business indexes to find matches." : t.includes("company") ? "Reviewing public company information, website copy, firmographics, and recent external signals to understand the account context." : t.includes("icp") || t.includes("buyer") ? "Mapping personas, buying committees, seniority, department ownership, and account-fit signals from the available evidence." : t.includes("blog") ? "Reading launch notes, blog posts, category language, and positioning themes to infer the strongest outreach angles." : t.includes("career") || t.includes("hiring") ? "Checking careers pages, new roles, team growth, and hiring language to understand near-term operating priorities." : t.includes("gtm") ? "Connecting signal strength, audience fit, and likely urgency to decide which outbound motion is most likely to convert." : t.includes("funding") || t.includes("round") ? "Reviewing recent funding announcements, raise dates, investor notes, and company updates from the past three months." : t.includes("transcript") || t.includes("notes") ? "Extracting CRM fields, next steps, risk language, and owner context from the conversation transcript." : t.includes("logs") || t.includes("auth") ? "Inspecting connector logs, authentication events, permission changes, and recent workspace activity." : t.includes("account") || t.includes("signals") ? "Combining account history with public source changes and recent activity to prepare a concise research brief." : e % 2 === 0 ? "Inspecting relevant records, comparing source confidence, and filtering out low-quality matches before returning results." : "Cross-checking the strongest evidence across sources so the final answer only includes useful, defensible results.";
}
function ha(s) {
  return s <= 1 ? "4m 12s" : s <= 3 ? "4m 20s" : "4m 50s";
}
const _s = [
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
    (s) => `wa-message--${s}`
  )
], ys = 1.28, T = (s) => Number((s * ys).toFixed(3)), xs = [2, 3, 2], vs = {
  duration: T(0.44),
  ease: "back.out(1.7)"
}, Ri = {
  startOverlap: "-=0.08",
  charsPerSecond: 54,
  minDuration: 0.36,
  maxDuration: 1.55
}, et = {
  startOverlap: "-=0.08",
  charsPerSecond: 86,
  labelCharsPerSecond: 72,
  minDuration: 0.28,
  maxDuration: 1.1
}, Ss = {
  charsPerSecond: et.labelCharsPerSecond,
  minDuration: et.minDuration,
  maxDuration: et.maxDuration
}, As = {
  charsPerSecond: 62,
  minDuration: 0.18,
  maxDuration: 0.42
}, Ni = {
  detailOffsetY: -4,
  duration: T(0.24)
}, me = {
  compactWidth: 96,
  compactHeight: 30,
  collapsedWidth: 0,
  collapsedHeight: 0,
  showDuration: T(0.42),
  hideDuration: T(0.32),
  contentShowDelay: T(0.1),
  contentHideDuration: T(0.1),
  showEase: "expo.out",
  hideEase: "power3.in",
  contentEase: "power2.out",
  threadGap: 44
}, ks = "left,right,bottom,width,height,minHeight,paddingTop,paddingRight,paddingBottom,paddingLeft,borderWidth,gap", va = {
  paddingTop: "",
  paddingRight: "",
  paddingBottom: "",
  paddingLeft: "",
  borderWidth: "",
  gap: ""
}, Tt = {
  scrollOutRatio: 0.74,
  minScrollOut: 280,
  duration: T(0.58),
  threadOverlap: "-=0.36"
}, Di = 110, Ye = {
  revealDuration: T(0.42),
  revealEase: "power3.inOut",
  followDuration: T(0.24),
  followEase: "power2.out"
}, Ce = {
  threadY: -176,
  threadOpacity: 0,
  revealDuration: T(0.62),
  revealEase: "power3.inOut",
  cardDuration: T(0.28)
}, Cs = [
  ["CRM", "Core Data", "Ad Intelligence"],
  ["Web Intent", "Product Analytics", "SMB Data", "Ecommerce"],
  ["Enrichment", "Company / Fundraising", "Tech Stack"],
  ["Web / SEO", "Relationships", "And more"]
], Ts = 96, qi = ".wa-cursor-file, .wa-file-landing-clone, .wa-csv-drop", Es = "[data-marketing-data-sources-grid]", Sa = {
  offscreenMargin: 96,
  pullInDuration: T(0.38),
  pullInEase: "power3.out"
}, ge = {
  duration: T(0.54),
  stagger: 0.055,
  ease: "power3.inOut",
  rotations: [2, -5, 6, -8],
  detailStart: 0.42,
  detailSpan: 0.34,
  shadowY: 16,
  shadowBlur: 28,
  shadowAlpha: 0.18
}, ye = {
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
class Ps {
  constructor(e) {
    this.root = e, this.chatShell = this.required("[data-chat-shell]"), this.chatBody = this.required(".wa-chat-shell__body"), this.thread = this.required("[data-chat-thread]"), this.composer = this.required("[data-chat-input]"), this.composerText = this.required("[data-composer-text]"), this.composerContents = Array.from(this.composer.children).filter(
      (t) => t instanceof HTMLElement
    ), this.tableControlTooltip = this.createDataTableFloatingTooltip(), this.chatShell.append(this.tableControlTooltip), this.chatShell.addEventListener("pointerover", this.handleDataTableControlPointerOver), this.chatShell.addEventListener("pointerout", this.handleDataTableControlPointerOut), this.chatShell.addEventListener("click", this.handleDataTableControlClick), this.signupScene = this.required("[data-signup-scene]"), this.signupEmail = this.required("[data-signup-email]"), this.status = this.root.querySelector("[data-chat-status]"), this.prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? !1, this.root.querySelectorAll("[data-thinking], [data-research-steps], [data-result-grid]").forEach((t) => {
      t.remove();
    }), this.root.querySelectorAll(qi).forEach((t) => {
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
    this.cancelScheduledScroll(), this.scrollTween?.kill(), this.scrollTween = null, this.clearTransientElements(), this.clearMarketingPanels(), this.messageIndex = 0, this.cardIndex = 0, this.composerText.textContent = "", w.killTweensOf([this.composer, this.composerText, ...this.composerContents, this.thread]), this.setComposerFocusState(!1), this.setComposerVisibleState(!1), this.activeTablePageTimelines.forEach((e) => e.kill()), this.activeTablePageTimelines.clear(), this.expectedDataTablePages.clear(), this.hideDataTableControlTooltip(), this.signupEmail.textContent = "", this.status?.replaceChildren(document.createTextNode("Ready")), this.clearCustomResults(), this.thread.scrollTop = 0, w.set(this.thread, {
      clearProps: "maxHeight,minHeight,paddingTop,paddingBottom,borderWidth"
    }), w.set(this.signupScene, { autoAlpha: 0, y: 0, scale: 1, display: "none" }), w.set(this.thread, {
      autoAlpha: 1,
      y: 0,
      display: ""
    }), w.set(this.composer, this.getComposerHiddenVars()), w.set(this.composerContents, this.getComposerContentsHiddenVars()), w.set(this.composerText, { autoAlpha: 1, y: 0 });
    for (const e of this.messagePool)
      e.style.display = "none";
    for (const e of this.cardPool)
      e.style.display = "none";
  }
  destroy() {
    this.chatShell.removeEventListener("pointerover", this.handleDataTableControlPointerOver), this.chatShell.removeEventListener("pointerout", this.handleDataTableControlPointerOut), this.chatShell.removeEventListener("click", this.handleDataTableControlClick), this.activeTablePageTimelines.forEach((e) => e.kill()), this.activeTablePageTimelines.clear();
  }
  prepareStoryStart() {
    this.setComposerFocusState(!1), this.setComposerVisibleState(!1), w.set(this.composer, this.getComposerHiddenVars()), w.set(this.composerContents, this.getComposerContentsHiddenVars()), w.set(this.composerText, { autoAlpha: 1, y: 0 });
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
    }), w.set(this.composer, this.getComposerHiddenVars()), w.set(this.composerContents, this.getComposerContentsHiddenVars()), this.setComposerVisibleState(!1);
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
    const e = w.timeline(), t = this.measureComposerFullFrame(), a = this.getComposerCompactFrame(t);
    return e.set(this.composer, {
      ...this.getComposerHiddenVars(),
      ...va,
      display: "grid",
      visibility: "visible",
      left: a.left,
      right: "auto",
      bottom: a.bottom,
      width: a.width,
      height: a.height,
      minHeight: a.height
    }).set(this.composerContents, {
      visibility: "visible",
      opacity: 0,
      y: 0
    }).call(() => this.setComposerVisibleState(!0)).set(this.thread, {
      paddingBottom: () => Math.max(Di, this.getComposerThreadInsetForFrame(t))
    }, 0).call(() => this.pinThreadToBottom(), void 0, 0).to(this.composer, {
      left: t.left,
      bottom: t.bottom,
      width: t.width,
      height: t.height,
      minHeight: t.height,
      duration: me.showDuration,
      ease: me.showEase,
      force3D: !0,
      autoRound: !1,
      overwrite: "auto",
      onUpdate: () => {
        this.composerVisible || this.setComposerVisibleState(!0);
      },
      onComplete: () => {
        this.composerVisible || this.setComposerVisibleState(!0);
      }
    }, 0).to(this.composerContents, {
      opacity: 1,
      duration: T(0.18),
      ease: me.contentEase,
      overwrite: "auto"
    }, me.contentShowDelay).call(() => this.pinThreadToBottom()), e;
  }
  hideComposer() {
    const e = this.measureComposerFullFrame(), t = this.getComposerCollapsedFrame(e);
    return w.timeline().set(this.composer, {
      ...va,
      left: e.left,
      right: "auto",
      bottom: e.bottom,
      width: e.width,
      height: e.height,
      minHeight: e.height,
      y: 0,
      scaleX: 1,
      scaleY: 1
    }).to(this.composerContents, {
      opacity: 0,
      duration: me.contentHideDuration,
      ease: "power2.out",
      overwrite: "auto"
    }, 0).to(this.composer, {
      left: t.left,
      bottom: t.bottom,
      width: t.width,
      height: t.height,
      minHeight: t.height,
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      borderWidth: 0,
      gap: 0,
      opacity: 1,
      duration: me.hideDuration,
      ease: me.hideEase,
      force3D: !0,
      autoRound: !1,
      overwrite: "auto",
      onStart: () => {
        this.setComposerFocusState(!1), this.setComposerVisibleState(!1);
      },
      onComplete: () => {
        w.set(this.composerContents, { visibility: "hidden" }), w.set(this.composer, {
          visibility: "hidden"
        }), w.set(this.thread, { paddingBottom: Di }), this.pinThreadToBottom();
      }
    }, 0);
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
      y: 0,
      scaleX: 1,
      scaleY: 1,
      display: "",
      left: "",
      right: "",
      bottom: "",
      width: "",
      height: "",
      minHeight: "",
      ...va
    };
  }
  getComposerContentsHiddenVars() {
    return {
      visibility: "hidden",
      opacity: 0,
      y: 0
    };
  }
  getComposerThreadInsetForFrame(e) {
    const t = this.chatShell.clientHeight - e.bottom - e.height, a = this.thread.offsetTop + this.thread.clientHeight, i = Math.max(0, a - t);
    return Math.ceil(i + me.threadGap);
  }
  measureComposerFullFrame() {
    w.set(this.composer, { clearProps: ks });
    const e = this.chatShell.getBoundingClientRect(), t = this.composer.getBoundingClientRect();
    return {
      left: t.left - e.left,
      bottom: e.bottom - t.bottom,
      width: t.width,
      height: t.height
    };
  }
  getComposerCompactFrame(e) {
    const t = Math.min(me.compactWidth, e.width), a = Math.min(me.compactHeight, e.height);
    return {
      left: e.left + (e.width - t) / 2,
      bottom: e.bottom + (e.height - a) / 2,
      width: t,
      height: a
    };
  }
  getComposerCollapsedFrame(e) {
    const t = me.collapsedWidth, a = me.collapsedHeight;
    return {
      left: e.left + (e.width - t) / 2,
      bottom: e.bottom + (e.height - a) / 2,
      width: t,
      height: a
    };
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
    }).set(this.composer, this.getComposerHiddenVars()).set(this.composerContents, this.getComposerContentsHiddenVars()).call(() => this.setComposerVisibleState(!1));
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
      duration: Tt.duration,
      ease: "power3.inOut"
    }).set(this.signupScene, { pointerEvents: "none" }).fromTo(
      this.thread,
      { autoAlpha: 0, y: 42 },
      {
        autoAlpha: 1,
        y: 0,
        duration: Tt.duration,
        ease: "power3.out"
      },
      Tt.threadOverlap
    ).set(this.composer, this.getComposerHiddenVars()).set(this.composerContents, this.getComposerContentsHiddenVars()).call(() => this.setComposerVisibleState(!1));
  }
  getSignupScrollOutDistance() {
    const e = this.signupScene.getBoundingClientRect().height;
    return -Math.max(Tt.minScrollOut, Math.round(e * Tt.scrollOutRatio));
  }
  stopScrollMotion() {
    this.cancelScheduledScroll(), this.scrollTween?.kill(), this.scrollTween = null;
  }
  scrollToLive(e = Ye.followDuration) {
    this.stopScrollMotion();
    const t = this.getThreadBottomScrollTarget();
    if (this.prefersReducedMotion || Math.abs(this.thread.scrollTop - t) < 1) {
      this.thread.scrollTop = t;
      return;
    }
    this.scrollTween = w.to(this.thread, {
      scrollTop: t,
      duration: e,
      ease: Ye.followEase,
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
        duration: this.getStreamDuration(e, Ri),
        targetForScroll: t
      }),
      Ri.startOverlap
    ) : i;
  }
  thinkingState(e, t = 1.1) {
    const a = this.normalizeThinkingInput(e), i = a.items.length > 1;
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
    return this.revealComponentItems("table", t, ".wa-data-table__row", ye.tableRow);
  }
  dataTablePage(e, t, a = {}) {
    const i = w.timeline(), r = { value: 0 }, n = { value: 0 }, o = a.updateExpected ?? !0, l = {
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
        l.table = this.findDataTable(e), o && this.expectedDataTablePages.set(e, t), l.currentRows = l.table ? this.getVisibleDataTableRows(l.table) : [], l.targetRows = l.table ? this.queryElements(l.table, `.wa-data-table__row[data-page="${t}"]`) : [], l.buttons = l.table ? this.queryElements(l.table, "[data-table-page-button]") : [], l.targetButton = l.buttons.find((d) => Number(d.dataset.tablePageButton) === t), l.range = l.table?.querySelector("[data-table-page-range]") ?? null, l.canSwitch = !!(l.table && l.targetRows.length && l.table.dataset.activePage !== String(t)), l.canSwitch && w.set(l.currentRows, { autoAlpha: 1, y: 0 });
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
      const o = this.getDataTableControlTooltipText(n);
      if (!o) {
        this.hideDataTableControlTooltip();
        return;
      }
      this.showDataTableControlTooltip(n, o);
    });
  }
  enrichmentPanel(e) {
    const t = this.createEnrichmentPanel(e);
    return this.revealComponentItems("enrichment", t, ".wa-waterfall-row", ye.waterfallRow);
  }
  strategyPlans(e) {
    const t = e.map((r) => this.createStrategyPlan(r)), a = document.createElement("div"), i = t.flatMap((r) => this.queryElements(r, ".wa-strategy-plan__summary"));
    return a.className = "wa-result-grid has-strategy-plans", a.dataset.strategyPlans = e.map((r) => r.id).join(" "), a.append(...t), w.set(i, { autoAlpha: 0, y: 8 }), this.revealComponentItems("strategy", a, t, ye.strategyCard).to(
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
    return this.revealComponentItems("sources", t, ".wa-data-source-card", ye.smallCard);
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
        duration: Ce.revealDuration,
        ease: Ce.revealEase,
        overwrite: "auto"
      },
      0
    ).to(
      this.thread,
      {
        y: Ce.threadY,
        autoAlpha: Ce.threadOpacity,
        duration: Ce.revealDuration,
        ease: Ce.revealEase,
        overwrite: "auto"
      },
      0.04
    ).to(
      t,
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: Ce.revealDuration,
        ease: Ce.revealEase
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
        duration: Ce.cardDuration,
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
      ye.softRow
    );
  }
  proximityLeadList(e) {
    const t = this.createProximityLeadList(e);
    return this.revealComponentItems("proximity", t, ".wa-proximity-lead", {
      ...ye.stackCard,
      to: { ...ye.stackCard.to, duration: T(0.25), stagger: 0.06 }
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
    ), r = i?.querySelector(`[data-swipe-card="${this.escapeSelectorValue(t)}"]`), n = this.getSwipeCards(i), o = r ? n.indexOf(r) : -1, l = n[o + 1], d = a === "use" ? 1 : -1, c = i?.querySelector(`[data-swipe-action="${a}"]`), u = i?.querySelector("[data-swipe-complete]"), p = i?.querySelector(".wa-swipe-game__actions"), m = w.timeline();
    return !i || !r || o < 0 || (m.call(() => {
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
        y: o % 2 === 0 ? -28 : 24,
        rotation: d * (16 + o * 2),
        autoAlpha: 0,
        duration: T(0.5),
        ease: "power3.in",
        force3D: !0
      },
      0.08
    ).call(
      () => {
        delete i.dataset.swipeDecision, c && delete c.dataset.active, r.dataset.swipeState = "done", w.set(r, { display: "none" }), this.layoutSwipeGameCards(i, o + 1);
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
      ".wa-sequence-person-button, .wa-sequence-card, .wa-sequence-step, .wa-sequence-wait, .wa-sequence-copy-panel, .wa-engage-channel, .wa-sequence-kickoff",
      ye.stackCard
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
    const o = w.timeline().add(this.revealMessage(i.message)).to(i.header, {
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
    }, "<").add(this.streamThinkingStepLabel(t), et.startOverlap).add(this.streamThinkingStepDetail(t), "-=0.02").to({}, { duration: T(0.54) }).add(this.foldThinkingStep(t)).call(() => {
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
      o.add(this.streamThinkingStepLabel(l), d === 0 ? et.startOverlap : "<");
    }), a.forEach((l, d) => {
      o.add(this.streamThinkingStepDetail(l), d === 0 ? "-=0.02" : "<");
    }), o.to(r, {
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
      o.add(this.foldThinkingStep(l), d === 0 ? void 0 : "<");
    }), o.call(() => {
      a.forEach((l) => {
        l.dataset.stepState = "complete";
      }), this.animateMessageScrollIntoView(i.message);
    });
  }
  sequencePerson(e, t) {
    const a = this.findSequenceEngagement(e), i = w.timeline();
    if (!a) return i;
    const r = this.queryElements(a, "[data-sequence-card]"), n = this.queryElements(a, "[data-sequence-person-button]"), o = a.querySelector("[data-sequence-count]"), l = this.getSequenceDisplayCard(a), d = r.find((p) => Number(p.dataset.sequenceIndex) === t), c = Number(a.dataset.activeSequenceIndex ?? "0");
    if (!d || !l || c === t)
      return this.setActiveSequencePerson(a, t), i;
    const u = this.getSequenceTransitionTargets(a, l);
    return i.to(u, {
      autoAlpha: 0,
      y: -3,
      duration: T(0.14),
      ease: "power2.in",
      stagger: 0.012
    }).call(() => {
      r.forEach((p) => {
        const m = p === l;
        p.dataset.active = String(m), p.style.display = m ? "grid" : "none";
      }), a.dataset.activeSequenceIndex = String(t), this.applySequenceTemplateToDisplayCard(a, l, d, t), n.forEach((p) => {
        p.dataset.currentIndex = String(t);
      }), o && (o.textContent = this.getSequenceCountLabel(t, a.dataset.peopleCount ?? "")), this.updateSequencePersonIdentity(a, t), w.set(u, { y: 4 });
    }).to(u, {
      autoAlpha: 1,
      y: 0,
      duration: T(0.24),
      ease: "power2.out",
      stagger: 0.014
    }).call(() => this.animateMessageScrollIntoView(a.closest(".wa-message") ?? a)), i;
  }
  sequenceKickoff(e) {
    return w.timeline().call(() => {
      const t = this.findSequenceEngagement(e), a = t?.querySelector("[data-sequence-kickoff]"), i = a?.querySelector(".wa-sequence-kickoff__label");
      !t || !a || (t.dataset.sequenceLaunched = "true", a.dataset.launched = "true", i && (i.textContent = "sequence kicked off"));
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
    const o = () => {
      r?.(), r = null, w.killTweensOf(n);
    };
    return this.registerTransientElement(i, () => {
      o();
    }), {
      el: i,
      startFollow: () => w.timeline().call(() => {
        r?.(), n = this.getCursorFileEntryOffset(i, t), r = this.followCursorWithFile(i, t, n);
      }).to(n, {
        x: 0,
        y: 0,
        duration: Sa.pullInDuration,
        ease: Sa.pullInEase
      }, 0).to(i, {
        autoAlpha: 1,
        scale: 1,
        duration: T(0.24),
        ease: "back.out(1.9)"
      }, 0.04),
      stopFollow: () => w.timeline().call(o).to(i, {
        autoAlpha: 0,
        scale: 0.92,
        duration: T(0.18),
        ease: "power2.in"
      }),
      landAsUploadedFile: (l, d = "CSV uploaded") => w.timeline().call(o).add(this.uploadedFileMessageFromCursorFile(i, l, d)),
      landAsUploadedFiles: (l) => w.timeline().call(o).add(this.uploadedFilesMessageFromCursorFile(i, l))
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
      ...ye.compactRow,
      from: { ...ye.compactRow.from, scale: 0.99 },
      to: { ...ye.compactRow.to, scale: 1 },
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
    const o = { value: 0 };
    let l = 0;
    return !a.length || !e.isConnected ? this.revealMessageWithChildren(t, r, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: T(0.24),
      ease: "power2.out",
      stagger: ge.stagger
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
        duration: ge.duration,
        ease: ge.ease,
        overwrite: "auto"
      },
      0
    ).to(
      o,
      {
        value: 1,
        duration: ge.duration,
        ease: ge.ease,
        onUpdate: () => this.renderFileLandingClones(n, o.value)
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
        stagger: ge.stagger
      },
      `-=${T(0.16)}`
    ).call(() => {
      this.renderFileLandingClones(n, 1), w.set(r, { autoAlpha: 1, y: 0, scale: 1 }), w.set(t, { opacity: 1, visibility: "visible" }), n.forEach((d) => d.el.remove()), e.remove(), this.animateMessageScrollIntoView(t);
    }));
  }
  createFileLandingClones(e, t) {
    const a = this.getCursorFileCards(e);
    return t.map((i, r) => {
      const n = a[Math.min(r, a.length - 1)], o = n.getBoundingClientRect(), l = i.getBoundingClientRect(), d = this.getRootLocalRect(o), c = i.cloneNode(!0), u = this.getCursorFileCardRotation(r, a.length), p = window.getComputedStyle(n), m = window.getComputedStyle(i), g = this.parseCssColor(p.backgroundColor) ?? { r: 255, g: 255, b: 249, a: 0.96 }, h = this.parseCssColor(m.backgroundColor) ?? g, f = this.parseCssColor(p.borderTopColor) ?? { r: 23, g: 23, b: 20, a: 0.12 }, b = this.queryElements(c, ".wa-uploaded-file__body span");
      return c.classList.add("wa-file-landing-clone"), c.dataset.fileLandingClone = "", this.root.append(c), w.set(c, {
        position: "absolute",
        zIndex: 21,
        top: 0,
        left: 0,
        width: l.width,
        height: l.height,
        x: d.left,
        y: d.top,
        scaleX: o.width / Math.max(1, l.width),
        scaleY: o.height / Math.max(1, l.height),
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
        startScaleX: o.width / Math.max(1, l.width),
        startScaleY: o.height / Math.max(1, l.height),
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
      const r = i.target.getBoundingClientRect(), n = r.left - a.left, o = r.top - a.top, l = Is(
        (t - ge.detailStart) / ge.detailSpan
      );
      if (i.setX(this.interpolate(i.startX, n, t)), i.setY(this.interpolate(i.startY, o, t)), i.setScaleX(this.interpolate(i.startScaleX, 1, t)), i.setScaleY(this.interpolate(i.startScaleY, 1, t)), i.setRotation(this.interpolate(i.startRotation, 0, t)), i.setBackgroundColor(this.interpolateRgba(i.startBackground, i.endBackground, t)), i.setBorderColor(this.interpolateRgba(i.startBorderColor, {
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
    return t > 1 ? ge.rotations[e] ?? 0 : 0;
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
    return `0 ${this.interpolate(ge.shadowY, 0, e).toFixed(2)}px ${this.interpolate(
      ge.shadowBlur,
      0,
      e
    ).toFixed(2)}px rgba(23, 23, 20, ${(ge.shadowAlpha * t).toFixed(3)})`;
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
        duration: Ye.revealDuration,
        ease: Ye.revealEase,
        overwrite: "auto"
      },
      0
    ).to(e, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      ...vs
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
    e.classList.remove(..._s), e.classList.remove("wa-message--first-active");
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
    const i = e.offsetWidth || 154, r = e.offsetHeight || 42, n = w.quickSetter(e, "x", "px"), o = w.quickSetter(e, "y", "px"), l = { x: -120, y: -120 }, d = () => {
      const c = t.readPosition(), u = c.x - i * 0.5 + a.x, p = c.y - r * 0.5 + a.y;
      u !== l.x && (l.x = u, n(u)), p !== l.y && (l.y = p, o(p));
    };
    return d(), w.ticker.add(d), () => w.ticker.remove(d);
  }
  getCursorFileEntryOffset(e, t) {
    const a = e.offsetWidth || 154, i = t.readPosition(), r = this.root.getBoundingClientRect().width || window.innerWidth, n = i.x + a * 0.5, o = r + Sa.offscreenMargin;
    return {
      x: Math.max(0, o - n),
      y: 0
    };
  }
  getCursorFileStackCount(e) {
    const t = e.match(/^(\d+)\s+/);
    return t ? Math.max(1, Math.min(4, Number(t[1]))) : 1;
  }
  createCursorFileStack(e, t, a) {
    return this.getCursorFileStackLabels(e, a).map((r, n) => {
      const o = this.createCursorFileCard(r, t);
      return o.classList.add("wa-cursor-file__card--stacked"), o;
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
    const o = document.createElement("span");
    return o.textContent = t, r.append(n, o), a.append(i, r), a;
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
      duration: this.getStreamDuration(a, As),
      targetForScroll: e.closest(".wa-message") ?? e
    });
  }
  streamThinkingStepLabel(e) {
    const t = e.querySelector(".wa-research-step__label"), a = t?.dataset.fullText ?? t?.textContent ?? "";
    return !t || !a ? w.timeline() : this.streamText(t, a, {
      duration: this.getStreamDuration(a, Ss),
      targetForScroll: e.closest(".wa-message") ?? e
    });
  }
  streamThinkingStepDetail(e) {
    const t = e.querySelector(".wa-research-step__detail"), a = t?.dataset.fullText ?? "";
    return !t || !a ? w.timeline() : this.streamText(t, a, {
      duration: this.getStreamDuration(a, et),
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
      e.textContent = t, delete e.dataset.streaming, this.cancelScheduledScroll(), this.animateMessageScrollIntoView(a.targetForScroll, Ye.followDuration * 0.7);
    });
  }
  foldThinkingStep(e) {
    const t = e.querySelectorAll(
      ".wa-research-step__detail, .wa-sequence-thinking-progress, .wa-research-step__disclosure, .wa-research-step__chevron"
    );
    return w.timeline().to(t, {
      autoAlpha: 0,
      y: Ni.detailOffsetY,
      scaleY: 0.96,
      transformOrigin: "left top",
      duration: Ni.duration,
      ease: "power2.inOut"
    }).call(() => {
      e.dataset.stepState = "complete", this.animateMessageScrollIntoView(e.closest(".wa-message") ?? e);
    });
  }
  runThinkingSequence(e, t) {
    const a = w.timeline(), i = e.items.map((n, o) => this.createThinkingStep(n, o)), r = this.claimThinkingMessage(
      i,
      e.elapsed ?? this.getThinkingElapsed(e.items.length),
      e.title
    );
    return a.call(() => {
      i.forEach((n) => {
        n.dataset.stepState = "pending";
      }), w.set(r.header, { autoAlpha: 0, y: 5 }), w.set(r.steps, { display: "grid", autoAlpha: 1, y: 0 }), w.set(i, { autoAlpha: 0, y: t.itemStartY, display: "none" });
    }).add(this.revealMessage(r.message)).to(r.header, {
      autoAlpha: 1,
      y: 0,
      duration: T(t.headerDuration),
      ease: "power2.out"
    }).add(this.streamThinkingHeader(r.header), "-=0.08"), e.items.forEach((n, o) => {
      const l = i[o], d = o === 0 ? "+=0" : `+=${t.hold}`;
      a.call(() => this.activateThinkingStep(i, o), void 0, d).to(
        l,
        {
          autoAlpha: 1,
          y: 0,
          duration: T(0.26),
          ease: "power2.out"
        },
        "<"
      ).add(this.streamThinkingStepLabel(l), et.startOverlap).add(this.streamThinkingStepDetail(l), "-=0.02").to({}, { duration: t.afterStepHold }).add(this.foldThinkingStep(l));
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
  claimThinkingMessage(e, t, a = Re) {
    const i = document.createElement("div");
    i.className = "wa-thinking-block";
    const r = document.createElement("div");
    r.className = "wa-thinking";
    const n = document.createElement("span");
    n.className = "wa-thinking__glyph", n.setAttribute("aria-hidden", "true");
    const o = document.createElement("span");
    o.className = "wa-thinking__title", o.dataset.fullText = a, o.textContent = "";
    const l = document.createElement("span");
    l.className = "wa-thinking__elapsed", l.textContent = t;
    const d = document.createElement("div");
    return d.className = "wa-research-steps", d.dataset.researchSteps = "", d.append(...e), r.append(n, o, l), i.append(r, d), {
      message: this.claimComponentMessage("thinking", i),
      header: r,
      steps: d
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
    n.className = "wa-research-step__label", n.dataset.fullText = e.label, n.textContent = "";
    const o = document.createElement("span");
    o.className = "wa-research-step__detail", o.dataset.fullText = e.detail, o.textContent = "";
    const l = document.createElement("span");
    l.className = "wa-research-step__disclosure", l.textContent = e.disclosure;
    const d = document.createElement("span");
    return d.className = "wa-research-step__chevron", d.setAttribute("aria-hidden", "true"), r.append(n, o, l), a.append(i, r, d), a;
  }
  getThinkingDetail(e, t) {
    return St(e, t);
  }
  getThinkingElapsed(e) {
    return ha(e);
  }
  normalizeThinkingInput(e) {
    if (this.isThinkingStateConfig(e)) {
      const a = e.items.map((i, r) => this.normalizeThinkingItem(i, r));
      return {
        title: e.title || Re,
        elapsed: e.elapsed,
        items: a.length ? a : [this.normalizeThinkingItem(Re, 0)]
      };
    }
    const t = (Array.isArray(e) ? e : [e]).map(
      (a, i) => this.normalizeThinkingItem(a, i)
    );
    return {
      title: Re,
      items: t.length ? t : [this.normalizeThinkingItem(Re, 0)]
    };
  }
  normalizeThinkingItem(e, t) {
    const a = typeof e == "string" ? e : e.label;
    return {
      label: a,
      detail: typeof e == "string" ? this.getThinkingDetail(a, t) : e.detail || this.getThinkingDetail(a, t),
      disclosure: typeof e == "string" ? t === 0 ? Le : nt : e.disclosure || (t === 0 ? Le : nt)
    };
  }
  isThinkingStateConfig(e) {
    return !!(e && typeof e == "object" && !Array.isArray(e) && "items" in e);
  }
  createSectionHeader(e, t, a, i) {
    const r = document.createElement("div");
    r.className = `${e}__header`;
    const n = document.createElement("h3");
    if (n.className = `${e}__title`, n.textContent = t, r.append(n), i && r.append(i), a) {
      const o = document.createElement("p");
      o.className = `${e}__subtitle`, o.textContent = a, r.append(o);
    }
    return r;
  }
  claimCard(e) {
    const t = this.cardIndex, a = this.cardPool[t] ?? this.createCard(t), i = a.querySelector("[data-result-kicker]"), r = a.querySelector("[data-result-title]"), n = a.querySelector("[data-result-body]"), o = a.querySelector("[data-result-rows]"), l = a.querySelector("[data-result-actions]");
    return this.cardIndex += 1, a.dataset.resultCard = e.id, a.style.display = "none", i && (i.textContent = e.kicker ?? "Result"), r && (r.textContent = e.title), n && (n.textContent = e.body ?? ""), o?.replaceChildren(
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
    const o = document.createElement("h3");
    if (o.className = "wa-data-table__title", o.textContent = e.title, r.append(n, o), e.count) {
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
    const o = e === "header";
    o && (n.dataset.header = "true"), !o && a.source && (n.dataset.source = a.source), !o && r !== void 0 && (n.dataset.page = String(r));
    for (const l of t) {
      const d = document.createElement(o ? "strong" : "span");
      if (d.className = "wa-data-table__cell", d.dataset.columnKey = l.key, o)
        d.textContent = l.label;
      else if (l.key === "name" || l.key === "contact")
        d.append(this.createDataTablePerson(a, a[l.key] ?? ""));
      else {
        const c = a[l.key] ?? "";
        d.textContent = c || "-", c || (d.dataset.empty = "true");
      }
      n.append(d);
    }
    if (o) {
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
      const n = t.find((d) => d.page === a)?.range ?? t[0]?.range ?? "", o = document.createElement("span");
      o.className = "wa-data-table__range", o.dataset.tablePageRange = "", o.textContent = n;
      const l = document.createElement("span");
      l.className = "wa-data-table__page-controls";
      for (const d of t) {
        const c = document.createElement("button"), u = d.page === a;
        c.className = "wa-data-table__page-button", c.type = "button", c.tabIndex = -1, c.dataset.tablePageButton = String(d.page), c.dataset.pageRange = d.range, c.dataset.active = String(u), c.setAttribute("aria-label", `Show page ${d.page}`), c.setAttribute("aria-current", u ? "page" : "false"), c.textContent = String(d.page), l.append(c);
      }
      r.append(o, l), i.append(r);
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
    const a = this.chatShell.getBoundingClientRect(), i = e.getBoundingClientRect(), r = i.left - a.left + i.width * 0.5, n = i.top - a.top - 7, o = document.createElement("span"), l = e.dataset.tooltipBadge?.trim();
    if (o.className = "wa-data-table-floating-tooltip__label", o.textContent = t, this.tableControlTooltip.replaceChildren(o), l) {
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
    const o = document.createElement("span");
    return o.className = "wa-data-table-person__name", o.textContent = t || "-", i.append(r, n), a.append(i, o), a;
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
    const o = document.createElement("div");
    return o.className = "wa-waterfall-rows", o.append(
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
    ), t.append(a, o), t;
  }
  createWaterfallRow(e, t, a) {
    const i = document.createElement("div");
    i.className = "wa-waterfall-row", i.dataset.stepState = t;
    const r = document.createElement("span");
    r.className = "wa-waterfall-row__status", r.setAttribute("aria-hidden", "true");
    const n = document.createElement("span");
    n.className = "wa-waterfall-row__label", n.textContent = e;
    const o = document.createElement("span");
    return o.className = "wa-waterfall-row__chips", o.append(
      ...a.map((l) => {
        const d = document.createElement("span");
        return d.className = "wa-waterfall-chip", d.dataset.stepState = l.state, d.textContent = l.label, d;
      })
    ), i.append(r, n, o), i;
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
    const t = this.createDataSourcesGrid(e), a = document.createElement("div"), i = t.querySelector(".wa-data-source-grid__header"), r = this.groupDataSources(e.sources);
    return t.classList.add("wa-data-source-grid--marketing"), t.dataset.marketingDataSourcesGrid = e.id, a.className = "wa-data-source-grid__groups", Cs.forEach((n) => {
      const o = document.createElement("div");
      o.className = "wa-data-source-grid__column", n.forEach((l) => {
        const d = r.find((c) => c.category === l);
        d && o.append(this.createMarketingDataSourceGroup(d));
      }), a.append(o);
    }), t.replaceChildren(...this.compactElements(i, a)), t;
  }
  createMarketingDataSourceGroup(e) {
    const t = document.createElement("section"), a = document.createElement("h4"), i = document.createElement("div");
    return t.className = "wa-data-source-group", t.dataset.sourceGroup = this.slugChannelName(e.category), a.className = "wa-data-source-group__title", a.textContent = e.category, i.className = "wa-data-source-grid__list", e.sources.forEach((r) => {
      i.append(this.createDataVendorLogo(r));
    }), t.append(a, i), t;
  }
  createDataVendorLogo(e) {
    const t = document.createElement("span");
    t.className = "wa-data-vendor-logo", t.dataset.vendorLogo = e.id, t.title = e.detail, t.style.setProperty("--wa-logo-scale", String(e.logoScale ?? 1));
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
      const o = document.createElement("span");
      o.textContent = r.label;
      const l = document.createElement("strong");
      l.textContent = r.value, n.append(o, l), i.append(n);
    }), t.append(a, i), e.examples?.length) {
      const r = document.createElement("div");
      r.className = "wa-style-profile__examples", e.examples.forEach((n) => {
        const o = document.createElement("blockquote");
        o.className = "wa-style-profile__example", o.textContent = n, r.append(o);
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
      const o = document.createElement("span");
      o.className = "wa-proximity-lead__rank", o.textContent = r.rank;
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
      h.className = "wa-proximity-lead__proximity", h.textContent = r.proximity, l.append(d, g, h), n.append(o, l), i.append(n);
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
    const o = document.createElement("span");
    o.textContent = e.labels?.avoid ?? "Never me";
    const l = document.createElement("span");
    l.dataset.swipeProgress = "";
    const d = document.createElement("span");
    d.textContent = e.labels?.use ?? "I'd use it", n.append(o, l, d);
    const c = document.createElement("div");
    c.className = "wa-swipe-game__stack";
    const u = document.createElement("div");
    u.className = "wa-swipe-game__glow", u.setAttribute("aria-hidden", "true"), c.append(u), e.signals.forEach((g, h) => {
      const f = document.createElement("article");
      f.className = "wa-swipe-card", f.dataset.swipeCard = g.id, f.dataset.swipeDecision = g.decision, f.dataset.cardIndex = String(h);
      const b = document.createElement("strong");
      b.className = "wa-swipe-card__label", b.textContent = g.label;
      const _ = document.createElement("span");
      _.className = "wa-swipe-card__detail", _.textContent = g.detail, f.append(b, _), c.append(f);
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
      const n = r - t, o = n >= 0 && n < 3;
      i.dataset.swipeState = n === 0 ? "active" : n > 0 ? "queued" : "done", w.set(i, {
        display: n >= 0 ? "grid" : "none",
        x: 0,
        y: Math.max(0, n) * 8,
        scale: 1 - Math.max(0, n) * 0.035,
        rotation: n === 1 ? -1.15 : n === 2 ? 1.05 : 0,
        autoAlpha: o ? 1 - Math.max(0, n) * 0.18 : 0,
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
    t.className = "wa-sequence-engagement", t.dataset.sequenceEngagement = e.id, t.dataset.peopleCount = e.peopleCount, t.dataset.activeSequenceIndex = "0";
    const a = document.createElement("span");
    a.className = "wa-sequence-engagement__count", a.dataset.sequenceCount = "", a.textContent = e.sequences.some((p) => p.steps?.length) ? this.getSequenceCountLabel(0, e.peopleCount) : e.peopleCount;
    const i = this.createSectionHeader("wa-sequence-engagement", e.title, e.subtitle, a), r = document.createElement("div");
    r.className = "wa-sequence-engagement__sequences";
    const n = e.sequences.some((p) => p.steps?.length);
    let o = null;
    if (n) {
      o = document.createElement("div"), o.className = "wa-sequence-people", o.setAttribute("aria-label", "Sequence people");
      const p = document.createElement("button"), m = document.createElement("div"), g = document.createElement("span"), h = document.createElement("span"), f = document.createElement("span"), b = document.createElement("strong"), _ = document.createElement("span"), x = document.createElement("div"), v = document.createElement("button"), y = e.sequences[0];
      p.className = "wa-sequence-person-button", p.type = "button", p.tabIndex = -1, p.dataset.sequencePersonButton = `${e.id}:prev`, p.dataset.direction = "prev", p.dataset.currentIndex = "0", p.setAttribute("aria-label", "Previous person"), p.textContent = "‹", p.addEventListener("click", () => {
        const S = (Number(p.dataset.currentIndex ?? "0") - 1 + e.sequences.length) % e.sequences.length;
        this.sequencePerson(e.id, S).play();
      }), m.className = "wa-sequence-person-current", g.className = "wa-sequence-person-current__avatar", g.dataset.avatarTone = "1", h.textContent = this.getInitials(y?.name ?? ""), g.append(h), f.className = "wa-sequence-person-current__copy", b.textContent = y?.name ?? "", _.textContent = [y?.title, y?.company].filter(Boolean).join(", "), f.append(b, _), m.append(g, f), v.className = "wa-sequence-person-button", v.type = "button", v.tabIndex = -1, v.dataset.sequencePersonButton = `${e.id}:next`, v.dataset.direction = "next", v.dataset.currentIndex = "0", v.setAttribute("aria-label", "Next person"), v.textContent = "›", v.addEventListener("click", () => {
        const S = (Number(v.dataset.currentIndex ?? "0") + 1) % e.sequences.length;
        this.sequencePerson(e.id, S).play();
      }), x.className = "wa-sequence-person-actions", x.append(p, v), o.append(m, x);
    }
    e.sequences.forEach((p, m) => {
      const g = document.createElement("article");
      g.className = "wa-sequence-card", g.dataset.sequenceCard = `${e.id}:${m}`, g.dataset.sequenceIndex = String(m), g.dataset.active = String(m === 0), g.dataset.sequenceName = p.name, g.dataset.sequenceMeta = [p.title, p.company].filter(Boolean).join(", "), g.dataset.sequenceTemplateName = p.name, g.dataset.sequenceTemplateMeta = [p.title, p.company].filter(Boolean).join(", "), m !== 0 && (g.style.display = "none", w.set(g, { autoAlpha: 0, y: 8 }));
      const h = document.createElement("div");
      h.className = "wa-sequence-card__top";
      const f = document.createElement("span");
      f.className = "wa-sequence-card__identity";
      const b = document.createElement("strong");
      b.textContent = p.name;
      const _ = document.createElement("span");
      _.textContent = [p.title, p.company].filter(Boolean).join(", "), f.append(b, _);
      const x = document.createElement("span");
      x.className = "wa-sequence-card__label", x.textContent = p.signal ?? "Personalized", h.append(f, x);
      const v = document.createElement("p");
      v.className = "wa-sequence-card__subject", v.textContent = p.subject;
      const y = document.createElement("p");
      y.className = "wa-sequence-card__personalization", y.textContent = p.personalization;
      const C = p.steps;
      if (C?.length) {
        const S = document.createElement("div"), k = C[0], A = document.createElement("div"), E = document.createElement("span"), O = document.createElement("strong"), N = document.createElement("p");
        S.className = "wa-sequence-steps", C.forEach((I, R) => {
          const P = document.createElement("button"), F = document.createElement("span"), z = document.createElement("span"), $ = document.createElement("strong"), he = this.getSequenceStepWaitDays(I, R, C.length);
          P.className = "wa-sequence-step", P.type = "button", P.tabIndex = -1, P.dataset.stepIndex = String(R), P.dataset.stepOpen = String(R === 0), P.dataset.stepSelected = String(R === 0), P.dataset.channel = this.slugChannelName(I.channel), P.dataset.stepSubject = R === 0 ? p.subject : I.label, P.dataset.stepBody = this.getSequenceStepCopy(p, I), P.dataset.stepTemplateChannel = I.channel, P.dataset.stepTemplateLabel = I.label, P.dataset.stepTemplateSubject = R === 0 ? p.subject : I.label, P.dataset.stepTemplateBody = this.getSequenceStepCopy(p, I), he && (P.dataset.waitDays = String(he), P.dataset.stepTemplateWaitDays = String(he)), P.setAttribute("aria-pressed", String(R === 0)), P.addEventListener("click", () => {
            this.selectSequenceStep(g, R);
          }), F.className = "wa-sequence-step__channel", F.textContent = I.channel, z.className = "wa-sequence-step__copy", $.textContent = I.label, z.append($), P.append(F, z), S.append(P), he && S.append(this.createSequenceWaitRow(he, R));
        }), A.className = "wa-sequence-copy-panel", A.dataset.sequenceCopyPanel = "", E.className = "wa-sequence-copy-panel__meta", E.dataset.sequenceCopyMeta = "", E.textContent = k ? `${k.channel} 1` : "Email", O.className = "wa-sequence-copy-panel__subject", O.dataset.sequenceCopySubject = "", O.textContent = p.subject, N.className = "wa-sequence-copy-panel__body", N.dataset.sequenceCopyBody = "", N.textContent = k ? this.getSequenceStepCopy(p, k) : p.personalization, A.append(E, O, N), g.append(S, A);
      } else
        g.append(h, v, y);
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
    return d.className = "wa-sequence-kickoff", d.type = "button", d.tabIndex = -1, d.dataset.sequenceKickoff = e.id, d.setAttribute("aria-label", e.launchLabel ?? "kick off sequence"), c.className = "wa-sequence-kickoff__label", c.textContent = e.launchLabel ?? "kick off sequence", u.className = "wa-sequence-kickoff__detail", u.textContent = `Launch tailored touches for ${e.peopleCount}`, d.append(c, u), d.addEventListener("click", () => {
      this.sequenceKickoff(e.id).play();
    }), n ? t.append(...this.compactElements(i, o, r, d)) : t.append(i, r, l), t;
  }
  createSequenceThinkingStep(e, t, a, i) {
    const r = this.createThinkingStep(
      {
        label: e,
        detail: t,
        disclosure: a === 0 ? Le : nt
      },
      a
    );
    r.querySelector(".wa-research-step__detail");
    const n = r.querySelector(".wa-research-step__body");
    if (typeof i == "number" && n) {
      const o = document.createElement("span"), l = document.createElement("span"), d = document.createElement("span"), c = document.createElement("span");
      o.className = "wa-sequence-thinking-progress", o.dataset.sequenceThinkingTrack = e, l.className = "wa-sequence-thinking-progress__count", l.textContent = `1/${i}`, d.className = "wa-sequence-thinking-progress__bar", c.setAttribute("aria-hidden", "true"), d.append(c), o.append(l, d), n.append(o);
    }
    return r;
  }
  findSequenceEngagement(e) {
    return this.queryElements(this.root, "[data-sequence-engagement]").find((t) => t.dataset.sequenceEngagement === e) ?? null;
  }
  createSequenceWaitRow(e, t) {
    const a = document.createElement("div"), i = document.createElement("span");
    return a.className = "wa-sequence-wait", a.dataset.sequenceWaitIndex = String(t), a.dataset.waitDays = String(e), i.className = "wa-sequence-wait__label", i.textContent = this.formatSequenceWaitLabel(e), a.append(i), a;
  }
  getSequenceStepWaitDays(e, t, a) {
    return t >= a - 1 ? null : e.waitDays ?? xs[t] ?? 1;
  }
  formatSequenceWaitLabel(e) {
    return `wait ${e} ${e === 1 ? "day" : "days"}`;
  }
  setActiveSequencePerson(e, t) {
    const a = this.queryElements(e, "[data-sequence-card]"), i = this.queryElements(e, "[data-sequence-person-button]"), r = e.querySelector("[data-sequence-count]"), n = this.getSequenceDisplayCard(e), o = this.getSequenceTemplateCard(e, t);
    !n || !o || (a.forEach((l) => {
      const d = l === n;
      l.dataset.active = String(d), l.style.display = d ? "grid" : "none", w.set(l, { autoAlpha: d ? 1 : 0, y: 0 });
    }), e.dataset.activeSequenceIndex = String(t), this.applySequenceTemplateToDisplayCard(e, n, o, t), i.forEach((l) => {
      l.dataset.currentIndex = String(t);
    }), r && (r.textContent = this.getSequenceCountLabel(t, e.dataset.peopleCount ?? "")), this.updateSequencePersonIdentity(e, t));
  }
  getSequenceCountLabel(e, t) {
    const a = t.match(/\d+/)?.[0] ?? t;
    return `${e + 1}/${a}`;
  }
  getSequenceDisplayCard(e) {
    const t = this.queryElements(e, "[data-sequence-card]");
    return t.find((i) => i.dataset.active === "true" && i.style.display !== "none") ?? t[0] ?? null;
  }
  getSequenceTemplateCard(e, t) {
    return this.queryElements(e, "[data-sequence-card]").find((a) => Number(a.dataset.sequenceIndex) === t) ?? null;
  }
  getSelectedSequenceStepIndex(e) {
    const t = e.querySelector('.wa-sequence-step[data-step-selected="true"]');
    return Number(t?.dataset.stepIndex ?? "0");
  }
  getSequenceTransitionTargets(e, t) {
    return this.compactElements(
      e.querySelector(".wa-sequence-person-current__avatar span"),
      e.querySelector(".wa-sequence-person-current__copy strong"),
      e.querySelector(".wa-sequence-person-current__copy span"),
      ...this.queryElements(t, ".wa-sequence-step__copy strong"),
      t.querySelector("[data-sequence-copy-meta]"),
      t.querySelector("[data-sequence-copy-subject]"),
      t.querySelector("[data-sequence-copy-body]")
    );
  }
  applySequenceTemplateToDisplayCard(e, t, a, i) {
    const r = this.getSelectedSequenceStepIndex(t), n = this.queryElements(t, ".wa-sequence-step"), o = this.queryElements(t, ".wa-sequence-wait"), l = this.queryElements(a, ".wa-sequence-step");
    t.dataset.sequenceName = a.dataset.sequenceTemplateName ?? a.dataset.sequenceName ?? "", t.dataset.sequenceMeta = a.dataset.sequenceTemplateMeta ?? a.dataset.sequenceMeta ?? "", n.forEach((d, c) => {
      const u = l[c], p = d.querySelector(".wa-sequence-step__channel"), m = d.querySelector(".wa-sequence-step__copy strong");
      if (!u) return;
      d.dataset.channel = u.dataset.channel ?? "", d.dataset.stepSubject = u.dataset.stepTemplateSubject ?? u.dataset.stepSubject ?? "", d.dataset.stepBody = u.dataset.stepTemplateBody ?? u.dataset.stepBody ?? "", d.dataset.waitDays = u.dataset.stepTemplateWaitDays ?? u.dataset.waitDays ?? "", p && (p.textContent = u.dataset.stepTemplateChannel ?? p.textContent), m && (m.textContent = u.dataset.stepTemplateLabel ?? m.textContent);
      const g = o[c], h = Number(d.dataset.waitDays), f = g?.querySelector(".wa-sequence-wait__label");
      g && (g.style.display = Number.isFinite(h) && h > 0 ? "grid" : "none", g.dataset.waitDays = String(h)), f && Number.isFinite(h) && h > 0 && (f.textContent = this.formatSequenceWaitLabel(h));
    }), e.dataset.activeSequenceIndex = String(i), this.selectSequenceStep(t, Math.min(r, Math.max(0, n.length - 1)));
  }
  selectSequenceStep(e, t) {
    const a = this.queryElements(e, ".wa-sequence-step"), i = a.find((d) => Number(d.dataset.stepIndex) === t) ?? a[0], r = e.querySelector("[data-sequence-copy-meta]"), n = e.querySelector("[data-sequence-copy-subject]"), o = e.querySelector("[data-sequence-copy-body]"), l = i?.querySelector(".wa-sequence-step__channel")?.textContent?.trim() ?? "email";
    a.forEach((d) => {
      const c = d === i;
      d.dataset.stepSelected = String(c), d.dataset.stepOpen = String(c), d.setAttribute("aria-pressed", String(c));
    }), r && (r.textContent = `${l} ${t + 1}`), n && (n.textContent = i?.dataset.stepSubject ?? ""), o && (o.textContent = i?.dataset.stepBody ?? "");
  }
  getSequenceStepCopy(e, t) {
    const a = e.name.split(" ")[0] ?? e.name;
    return this.slugChannelName(t.channel) !== "email" ? t.body : [
      `Hi ${a},`,
      e.personalization,
      t.body,
      "Worth sending over a quick example?"
    ].join(`

`);
  }
  updateSequencePersonIdentity(e, t) {
    const a = this.getSequenceTemplateCard(e, t), i = a?.dataset.sequenceTemplateName ?? a?.dataset.sequenceName ?? a?.querySelector(".wa-sequence-card__identity strong")?.textContent ?? "", r = a?.dataset.sequenceTemplateMeta ?? a?.dataset.sequenceMeta ?? a?.querySelector(".wa-sequence-card__identity span")?.textContent ?? "", n = e.querySelector(".wa-sequence-person-current__avatar"), o = n?.querySelector("span"), l = e.querySelector(".wa-sequence-person-current__copy strong"), d = e.querySelector(".wa-sequence-person-current__copy span");
    n && (n.dataset.avatarTone = String(t % 6 + 1)), o && (o.textContent = this.getInitials(i)), l && (l.textContent = i), d && (d.textContent = r);
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
    this.root.querySelectorAll(Es).forEach((e) => {
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
    this.transientCleanups = [], this.root.querySelectorAll(qi).forEach((e) => {
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
  animateMessageScrollIntoView(e, t = Ye.followDuration) {
    const a = this.getMessageScrollTarget(e);
    if (this.prefersReducedMotion || Math.abs(this.thread.scrollTop - a) < 1) {
      this.thread.scrollTop = a;
      return;
    }
    this.scrollTween?.kill(), this.scrollTween = w.to(this.thread, {
      scrollTop: a,
      duration: t,
      ease: Ye.followEase,
      overwrite: "auto",
      onComplete: () => {
        this.scrollTween = null;
      }
    });
  }
  requestMessageScroll(e) {
    const t = performance.now();
    this.scheduledScrollMessage = e, !(t - this.lastStreamScrollAt < Ts) && (this.scheduledScrollFrame || (this.lastStreamScrollAt = t, this.scheduledScrollFrame = window.requestAnimationFrame(() => {
      const a = this.scheduledScrollMessage;
      this.scheduledScrollFrame = 0, this.scheduledScrollMessage = null, a?.isConnected && this.animateMessageScrollIntoView(a);
    })));
  }
  cancelScheduledScroll() {
    this.scheduledScrollFrame && (window.cancelAnimationFrame(this.scheduledScrollFrame), this.scheduledScrollFrame = 0, this.scheduledScrollMessage = null, this.lastStreamScrollAt = 0);
  }
}
function Is(s) {
  return Math.min(1, Math.max(0, s));
}
function Ms(s, e) {
  return Math.hypot(e.x - s.x, e.y - s.y);
}
function Rt(s, e, t) {
  return Math.min(t, Math.max(e, s));
}
function Oi(s, e, t, a, i) {
  const r = 1 - i, n = i * i, o = r * r, l = o * r, d = n * i;
  return {
    x: l * s.x + 3 * o * i * e.x + 3 * r * n * t.x + d * a.x,
    y: l * s.y + 3 * o * i * e.y + 3 * r * n * t.y + d * a.y
  };
}
function Rs(s) {
  let e = 2166136261;
  for (let t = 0; t < s.length; t += 1)
    e ^= s.charCodeAt(t), e = Math.imul(e, 16777619);
  return e >>> 0;
}
function jr(s) {
  let e = Rs(s) || 1;
  return () => {
    e += 1831565813;
    let t = e;
    return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
const Ns = {
  slow: 560,
  normal: 860,
  quick: 1220
}, Ds = {
  entry: 1.08,
  hover: 0.96,
  click: 0.9,
  drag: 1.18,
  text: 1.04,
  exit: 1
}, qs = 1.24;
function Yt(s, e, t) {
  const a = jr(t.seed), i = Ms(s, e), r = t.speed ?? "normal", n = t.intent ?? "hover";
  if (t.reducedMotion || i < 2)
    return {
      start: s,
      c1: s,
      c2: e,
      end: e,
      duration: t.reducedMotion ? 0.12 : 0.08
    };
  const o = e.x - s.x, l = e.y - s.y, d = o / i, c = l / i, u = -c, p = d, m = a() > 0.5 ? 1 : -1, g = t.curve ?? 1, f = Rt(i * (n === "drag" ? 0.1 : n === "click" ? 0.17 : 0.22) * g, 18, 150) * m * (0.72 + a() * 0.44), b = i / Ns[r] + 0.16, _ = Rt(b * Ds[n] * qs, 0.3, 1.66), x = t.overshoot === !1 || i < 120 ? 0 : typeof t.overshoot == "number" ? t.overshoot : Rt(i * 0.026, 4, 18), v = x > 0 ? {
    x: e.x + d * x,
    y: e.y + c * x
  } : e, y = {
    x: s.x + o * (0.25 + a() * 0.08) + u * f,
    y: s.y + l * (0.25 + a() * 0.08) + p * f
  }, C = {
    x: s.x + o * (0.68 + a() * 0.12) - u * f * 0.42,
    y: s.y + l * (0.68 + a() * 0.12) - p * f * 0.42
  }, S = t.settle !== !1 && x > 0;
  return {
    start: s,
    c1: y,
    c2: C,
    end: v,
    duration: S ? _ * 0.86 : _,
    settle: S ? {
      start: v,
      c1: {
        x: v.x - d * x * 0.45 + u * f * 0.04,
        y: v.y - c * x * 0.45 + p * f * 0.04
      },
      c2: {
        x: e.x + d * x * 0.16,
        y: e.y + c * x * 0.16
      },
      end: e,
      duration: Rt(_ * 0.18, 0.1, 0.24)
    } : void 0
  };
}
const Aa = "button, a, [role='button'], [data-send-button], [data-result-action]", ka = "[data-chat-input][data-visible='true'], [data-signup-field], input, textarea, [contenteditable='true']", Ca = {
  delay: 0.42,
  returnDuration: 0.18,
  segments: [
    { x: 1.6, y: -2.4, rotation: 0.28, duration: 1.55 },
    { x: -1.2, y: -3.1, rotation: -0.18, duration: 1.9 },
    { x: 0.8, y: -1.2, rotation: 0.16, duration: 1.45 },
    { x: 0, y: 0, rotation: 0, duration: 1.7 }
  ]
}, Xt = {
  outsideOffset: 24,
  topRatio: 0.3,
  minTopInset: 74,
  maxTopInset: 190
}, Os = -135, zs = 0.34;
class Ls {
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
    }, o = {
      x: this.currentPosition.x + (r.x - this.currentPosition.x) * t,
      y: this.currentPosition.y + (r.y - this.currentPosition.y) * t
    };
    this.modeOverride = "default", this.currentPosition = o, this.plannedPosition = { ...o }, this.renderPosition(o), this.setMode("default"), this.renderMimicRotation(o, n);
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
    const a = t.label ?? `move-${this.moveIndex}`, i = t.mode ?? "default", r = `${this.storyId}:${a}:${this.resolver.getBreakpoint()}`, n = this.resolver.resolve(e, r), o = { ...this.plannedPosition }, l = Yt(o, n, {
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
          return c = Yt(this.currentPosition, u, {
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
    const e = `history-park-${this.moveIndex}`, t = `${this.storyId}:${e}:${this.resolver.getBreakpoint()}`, a = { ...this.currentPosition }, i = this.resolveHistoryParkPoint(), r = Yt(a, i, {
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
    const o = { t: 0 };
    return w.fromTo(
      o,
      { t: 0 },
      {
        t: 1,
        duration: r,
        ease: n,
        onUpdate: () => {
          const l = Oi(e, t, a, i, o.t);
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
          const n = Oi(r.start, r.c1, r.c2, r.end, i.t);
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
    const t = this.resolveHistoryParkPoint(), a = Yt(this.currentPosition, t, {
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
    const a = Rt(
      t.height * Xt.topRatio,
      Xt.minTopInset,
      Xt.maxTopInset
    );
    return {
      x: t.right - e.left + Xt.outsideOffset,
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
        const o = {
          x: r.x + (n.x - r.x) * i.t,
          y: r.y + (n.y - r.y) * i.t
        };
        this.currentPosition = o, this.renderPosition(o);
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
      c1: Li(i, r, 0.64),
      c2: Li(r, n, 0.42),
      end: n
    };
  }
  resolveScanPoint(e, t, a, i = "first") {
    const r = typeof e == "string" ? this.findVisibleScanElement(e, i) : e;
    if (!r) return this.currentPosition;
    this.resolver.refresh();
    const n = this.seededScanRandom(t), o = this.root.getBoundingClientRect(), l = r.getBoundingClientRect(), d = this.root.querySelector("[data-chat-shell]")?.getBoundingClientRect(), c = d ? Math.max(l.left, d.left + 18) : l.left, u = d ? Math.min(l.right, d.right - 18) : l.right, p = d ? Math.max(l.top, d.top + 58) : l.top, m = d ? Math.min(l.bottom, d.bottom - 34) : l.bottom, g = Math.max(1, u - c), h = Math.max(1, m - p), f = a === "start" ? 0.16 + n() * 0.08 : 0.76 + n() * 0.12, b = 0.34 + n() * 0.32;
    return {
      x: c - o.left + g * f,
      y: p - o.top + h * b
    };
  }
  findVisibleScanElement(e, t = "first") {
    const i = Array.from(this.root.querySelectorAll(e)).filter((r) => {
      const n = window.getComputedStyle(r), o = r.getBoundingClientRect();
      return n.display !== "none" && n.visibility !== "hidden" && Number(n.opacity) > 0.01 && o.width > 0 && o.height > 0;
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
    const r = Math.atan2(i, a) * 180 / Math.PI, n = Bs(r - Os), o = this.rotationState + Fs(this.rotationState, n) * zs;
    this.renderRotation(o);
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
  queueIdleFloat(e = Ca.delay) {
    this.options.reducedMotion || (this.idleFloatDelay?.kill(), this.idleFloatDelay = w.delayedCall(e, () => this.startIdleFloat()));
  }
  startIdleFloat() {
    if (this.options.reducedMotion || this.idleFloat?.isActive()) return;
    w.killTweensOf(this.floatLayer);
    const e = w.timeline({ repeat: -1 });
    for (const t of Ca.segments)
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
      duration: Ca.returnDuration,
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
    return e ? e.closest(Aa) ? "pointer" : e.closest(ka) ? "text" : "default" : "default";
  }
  getModeForLocalPoint(e, t) {
    return this.refreshModeTargetCache(), this.findLocalHit(this.pointerTargets, e, t, Aa) ? "pointer" : this.findLocalHit(this.textTargets, e, t, ka) ? "text" : "default";
  }
  findLocalHit(e, t, a, i) {
    return e.find((r) => {
      if (!r.matches(i)) return !1;
      const n = window.getComputedStyle(r);
      if (n.display === "none" || n.visibility === "hidden" || Number(n.opacity) < 0.01) return !1;
      const o = r.getBoundingClientRect();
      if (o.width <= 0 || o.height <= 0) return !1;
      const l = o.left - a.left, d = o.right - a.left, c = o.top - a.top, u = o.bottom - a.top;
      return t.x >= l && t.x <= d && t.y >= c && t.y <= u;
    }) ?? null;
  }
  refreshModeTargetCache() {
    this.modeTargetsDirty && (this.pointerTargets = Array.from(this.root.querySelectorAll(Aa)).reverse(), this.textTargets = Array.from(this.root.querySelectorAll(ka)).reverse(), this.modeTargetsDirty = !1);
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
    return a.className = "wa-cursor__glyph", a.append(zi()), t.append(a), e.append(t), this.root.append(e), e;
  }
  ensureFloatLayer() {
    const e = this.el.querySelector("[data-cursor-float]");
    if (e) return e;
    const t = this.el.querySelector(".wa-cursor__glyph") ?? document.createElement("div");
    t.classList.contains("wa-cursor__glyph") || (t.className = "wa-cursor__glyph"), t.querySelector(".wa-cursor__mimic-head") || t.append(zi());
    const a = document.createElement("div");
    return a.className = "wa-cursor__float", a.dataset.cursorFloat = "", a.append(t), this.el.append(a), a;
  }
}
function zi() {
  const s = document.createDocumentFragment(), e = document.createElement("span"), t = document.createElement("span");
  return e.className = "wa-cursor__mimic-tail", t.className = "wa-cursor__mimic-head", e.setAttribute("aria-hidden", "true"), t.setAttribute("aria-hidden", "true"), s.append(e, t), s;
}
function Li(s, e, t) {
  return {
    x: s.x + (e.x - s.x) * t,
    y: s.y + (e.y - s.y) * t
  };
}
function Bs(s) {
  return (s % 360 + 360) % 360;
}
function Fs(s, e) {
  return (e - s + 540) % 360 - 180;
}
const Ze = {
  user: "User",
  assistant: "AI",
  thinking: "Thinking",
  component: "Component",
  cursor: "Cursor",
  status: "State",
  file: "File"
}, Hs = ["user", "assistant", "thinking", "component", "cursor", "file"], Vs = "/api/story-draft", Ws = 800, Et = 3;
class Gs {
  constructor(e, t, a = {}) {
    this.root = e, this.sourceStories = t, this.options = a, this.stories = Bi(t), this.selectedStepId = this.stories[0]?.steps[0]?.id ?? null, this.draftEndpoint = a.draftEndpoint ?? Vs, this.draftAutoSave = a.draftAutoSave ?? !0;
  }
  root;
  sourceStories;
  options;
  refs = null;
  stories;
  activeStoryIndex = 0;
  selectedStepId = null;
  listeners = [];
  draggedStepId = null;
  copyResetTimer = null;
  saveTimer = null;
  loadingRemoteDraft = !1;
  pendingSaveAfterLoad = !1;
  draftEndpoint;
  draftAutoSave;
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
    }, this.attachEvents(), this.render(), this.loadRemoteDraft());
  }
  destroy() {
    for (const e of this.listeners) e();
    this.listeners = [], this.copyResetTimer !== null && window.clearTimeout(this.copyResetTimer), this.copyResetTimer = null, this.saveTimer !== null && window.clearTimeout(this.saveTimer), this.saveTimer = null;
  }
  attachEvents() {
    const e = this.refs;
    e && (this.on(e.tabs, "click", (t) => {
      const a = Ta(t.target, "[data-builder-story-tab]");
      a && this.selectStory(Number(a.dataset.builderStoryTab));
    }), this.on(e.addRail, "click", (t) => {
      const i = Ta(t.target, "[data-builder-add]")?.dataset.builderAdd;
      !i || !Ga(i) || this.addStep(i);
    }), this.on(e.copyJson, "click", () => {
      this.copyExportJson();
    }), this.on(e.thread, "click", (t) => {
      const a = Ta(t.target, "[data-builder-action]");
      if (a) {
        this.handleStepAction(a);
        return;
      }
      const i = t.target?.closest("[data-builder-step]");
      i?.dataset.builderStep && this.selectStep(i.dataset.builderStep, { renderThread: !1 });
    }), this.on(e.thread, "input", (t) => {
      const a = t.target?.closest("[data-builder-thinking-field]");
      if (a) {
        this.handleThinkingInput(a), a instanceof HTMLTextAreaElement && this.autoSize(a);
        return;
      }
      const i = t.target?.closest("[data-builder-component-field]");
      if (i) {
        this.handleComponentInput(i), i instanceof HTMLTextAreaElement && this.autoSize(i);
        return;
      }
      const r = t.target?.closest("[data-builder-step-field]");
      if (!r) return;
      const n = r.dataset.builderStepField;
      n && (this.updateStep(n, { text: r.value }, { renderThread: !1 }), this.autoSize(r));
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
      const o = document.createElement("span");
      return o.className = "wa-builder-tab__count", o.textContent = `${a.steps.length} messages`, r.append(n, o), r;
    });
    e.tabs.replaceChildren(...t);
  }
  renderAddRail() {
    const e = this.refs;
    if (!e || e.addRail.childElementCount) return;
    const t = Hs.map((a) => {
      const i = document.createElement("button");
      return i.className = "wa-builder-add-button", i.type = "button", i.dataset.builderAdd = a, i.textContent = `+ ${Ze[a]}`, i;
    });
    e.addRail.replaceChildren(...t);
  }
  renderThread() {
    const e = this.refs;
    if (!e) return;
    const t = this.activeStory, a = t.steps.map(
      (i, r) => this.createStepNode(i, r, t.steps.length, t.steps[r - 1]?.kind)
    );
    e.thread.replaceChildren(...a), e.thread.querySelectorAll("[data-builder-step-field], [data-builder-thinking-field]").forEach((i) => {
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
      const o = document.createElement("span");
      o.className = "wa-builder-field__label", o.textContent = "Selected message";
      const l = document.createElement("select");
      l.className = "wa-builder-field__control", l.dataset.builderPanelSelect = "step-kind";
      for (const d of Object.keys(Ze)) {
        const c = document.createElement("option");
        c.value = d, c.textContent = Ze[d], c.selected = a.kind === d, l.append(c);
      }
      n.append(o, l), i.append(
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
    e && (e.export.value = JSON.stringify({
      schemaVersion: Et,
      stories: this.stories
    }, null, 2), this.autoSize(e.export));
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
    const o = document.createElement("div");
    o.className = "wa-message__avatar";
    const l = document.createElement("div");
    return l.className = "wa-message__body wa-builder-message__body", l.dataset.messageBody = "", l.append(this.createStepBody(e, i === "thinking")), n.append(o, l), r.append(n, this.createStepToolbar(e, a)), r;
  }
  createStepBody(e, t = !1) {
    if (e.kind === "thinking") return this.createThinkingBody(e, t);
    if (e.kind === "component") return this.createComponentBody(e);
    if (e.kind === "cursor") return this.createCursorBody(e);
    if (e.kind === "file") return this.createFileBody(e);
    const a = document.createElement("div");
    a.className = "wa-builder-bubble";
    const i = document.createElement("span");
    return i.className = "wa-builder-step__kind", i.textContent = Ze[e.kind], a.append(i, this.createInlineTextarea(e)), a;
  }
  createThinkingBody(e, t = !1) {
    e.thinking ??= vt(e.text, e.note);
    const a = document.createElement("div");
    a.className = "wa-thinking-block wa-builder-thinking";
    const i = document.createElement("div");
    i.className = "wa-thinking";
    const r = document.createElement("span");
    r.className = "wa-thinking__glyph", r.setAttribute("aria-hidden", "true");
    const n = document.createElement("span");
    n.className = "wa-thinking__title", n.append(
      this.createThinkingInput(e.id, "title", e.thinking.title, {
        className: "wa-builder-thinking__header-input"
      })
    );
    const o = document.createElement("span");
    o.className = "wa-thinking__elapsed", o.append(
      this.createThinkingInput(e.id, "elapsed", e.thinking.elapsed, {
        className: "wa-builder-thinking__elapsed-input"
      })
    );
    const l = document.createElement("div");
    return l.className = "wa-research-steps", e.thinking.items.forEach((d, c) => {
      const u = document.createElement("div");
      u.className = "wa-research-step wa-builder-research-step", u.dataset.stepState = "current";
      const p = document.createElement("span");
      p.className = "wa-research-step__check", p.setAttribute("aria-hidden", "true");
      const m = document.createElement("div");
      m.className = "wa-research-step__body";
      const g = document.createElement("div");
      g.className = "wa-research-step__label", g.append(
        this.createThinkingField(e.id, "label", d.label, {
          itemIndex: c,
          className: "wa-builder-step__textarea wa-builder-thinking__label-input"
        })
      );
      const h = document.createElement("div");
      h.className = "wa-research-step__detail", h.append(
        this.createThinkingField(e.id, "detail", d.detail, {
          itemIndex: c,
          className: "wa-builder-thinking__detail-input"
        })
      );
      const f = document.createElement("div");
      f.className = "wa-research-step__disclosure wa-builder-thinking__disclosure", f.append(
        this.createThinkingInput(e.id, "disclosure", d.disclosure, {
          itemIndex: c,
          className: "wa-builder-thinking__disclosure-input"
        })
      ), m.append(g, h, f), u.append(p, m), l.append(u);
    }), i.append(r, n, o), t ? (a.dataset.thinkingHeaderSuppressed = "true", a.append(l)) : a.append(i, l), a;
  }
  createComponentBody(e) {
    if (e.component ??= Js(e.text), e.component.kind === "table") return this.createTableComponentBody(e, e.component);
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
    return n.className = "wa-builder-component-list", e.component.items.forEach((o, l) => {
      n.append(
        this.createComponentField(e.id, "item", o, {
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
    }), o = this.createComponentInput(e.id, "eyebrow", t.eyebrow ?? "", {
      className: "wa-builder-table-editor__meta"
    }), l = this.createComponentInput(e.id, "count", t.count ?? "", {
      className: "wa-builder-table-editor__meta"
    }), d = document.createElement("div");
    d.className = "wa-builder-table-editor", d.style.setProperty("--wa-builder-table-columns", `repeat(${t.columns.length}, minmax(112px, 1fr))`);
    const c = document.createElement("div");
    c.className = "wa-builder-table-editor__row", c.dataset.header = "true", t.columns.forEach((p, m) => {
      c.append(
        this.createComponentInput(e.id, "column", p, {
          columnIndex: m,
          className: "wa-builder-table-editor__cell"
        })
      );
    }), d.append(c), t.rows.forEach((p, m) => {
      const g = document.createElement("div");
      g.className = "wa-builder-table-editor__row", t.columns.forEach((h, f) => {
        g.append(
          this.createComponentInput(e.id, "cell", p[f] ?? "", {
            rowIndex: m,
            columnIndex: f,
            className: "wa-builder-table-editor__cell"
          })
        );
      }), d.append(g);
    });
    const u = document.createElement("div");
    return u.className = "wa-builder-table-editor__footer-fields", t.actions?.forEach((p, m) => {
      const g = document.createElement("div");
      g.className = "wa-builder-table-editor__action-row", g.append(
        this.createComponentInput(e.id, "actionLabel", p.label, {
          itemIndex: m,
          className: "wa-builder-table-editor__cell"
        }),
        this.createComponentInput(e.id, "actionTooltip", p.tooltip, {
          itemIndex: m,
          className: "wa-builder-table-editor__cell"
        }),
        this.createComponentInput(e.id, "actionBadge", p.badge, {
          itemIndex: m,
          className: "wa-builder-table-editor__cell"
        })
      ), u.append(g);
    }), t.pagination?.ranges.forEach((p, m) => {
      u.append(
        this.createComponentInput(e.id, "pageRange", p, {
          itemIndex: m,
          className: "wa-builder-table-editor__meta"
        })
      );
    }), i.append(r, n, o, l, d, u), a.append(i), a;
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
    }), o = document.createElement("div");
    return o.className = "wa-builder-strategy-editor", t.cards.forEach((l, d) => {
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
      ), o.append(c);
    }), i.append(r, n, o), a.append(i), a;
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
    }), o = this.createComponentField(e.id, "subtitle", t.subtitle, {
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
    }), i.append(r, n, o, l), a.append(i), a;
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
    }), o = this.createComponentField(e.id, "subtitle", t.subtitle, {
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
    }), i.append(r, n, o, l), a.append(i), a;
  }
  createUploadedFilesComponentBody(e, t) {
    const a = this.createStructuredComponentCard("Files"), i = a.querySelector(".wa-builder-component-card__content"), r = this.createComponentField(e.id, "title", t.title, {
      className: "wa-builder-component-card__title"
    }), n = document.createElement("div");
    return n.className = "wa-builder-file-list-editor", t.files.forEach((o, l) => {
      const d = document.createElement("div");
      d.className = "wa-builder-file-list-editor__card", d.append(
        this.createComponentInput(e.id, "fileType", o.type, {
          itemIndex: l,
          className: "wa-builder-file-list-editor__type"
        }),
        this.createComponentInput(e.id, "fileName", o.name, {
          itemIndex: l,
          className: "wa-builder-file-list-editor__name"
        }),
        this.createComponentField(e.id, "fileDetail", o.detail, {
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
    }), o = document.createElement("div");
    o.className = "wa-builder-style-profile-editor", t.signals.forEach((d, c) => {
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
      ), o.append(u);
    });
    const l = document.createElement("div");
    return l.className = "wa-builder-style-profile-editor__examples", t.examples.forEach((d, c) => {
      l.append(
        this.createComponentField(e.id, "styleExample", d, {
          itemIndex: c,
          className: "wa-builder-style-profile-editor__example"
        })
      );
    }), i.append(r, n, o, l), a;
  }
  createProximityListComponentBody(e, t) {
    const a = this.createStructuredComponentCard("Proximity list"), i = a.querySelector(".wa-builder-component-card__content"), r = this.createComponentField(e.id, "title", t.title, {
      className: "wa-builder-component-card__title"
    }), n = this.createComponentField(e.id, "subtitle", t.subtitle, {
      className: "wa-builder-component-card__subtitle"
    }), o = document.createElement("div");
    return o.className = "wa-builder-proximity-editor", t.leads.forEach((l, d) => {
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
      ), o.append(c);
    }), i.append(r, n, o), a;
  }
  createPersonalizationSwipeComponentBody(e, t) {
    const a = this.createStructuredComponentCard("Personalization swipe game"), i = a.querySelector(".wa-builder-component-card__content"), r = this.createComponentField(e.id, "title", t.title, {
      className: "wa-builder-component-card__title"
    }), n = this.createComponentField(e.id, "subtitle", t.subtitle, {
      className: "wa-builder-component-card__subtitle"
    }), o = this.createComponentField(e.id, "prompt", t.prompt, {
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
    }), i.append(r, n, o, l), a;
  }
  createSequenceEngagementComponentBody(e, t) {
    const a = this.createStructuredComponentCard("Sequence engagement"), i = a.querySelector(".wa-builder-component-card__content"), r = this.createComponentField(e.id, "title", t.title, {
      className: "wa-builder-component-card__title"
    }), n = this.createComponentField(e.id, "subtitle", t.subtitle, {
      className: "wa-builder-component-card__subtitle"
    }), o = this.createComponentInput(e.id, "peopleCount", t.peopleCount, {
      className: "wa-builder-sequence-editor__count"
    }), l = this.createComponentInput(e.id, "launchLabel", t.launchLabel ?? "", {
      className: "wa-builder-sequence-editor__count"
    }), d = document.createElement("div");
    d.className = "wa-builder-sequence-editor", t.sequences.forEach((u, p) => {
      const m = document.createElement("div");
      m.className = "wa-builder-sequence-editor__card", m.append(
        this.createComponentInput(e.id, "sequenceName", u.name, {
          itemIndex: p,
          className: "wa-builder-sequence-editor__name"
        }),
        this.createComponentInput(e.id, "sequenceCompany", u.company, {
          itemIndex: p,
          className: "wa-builder-sequence-editor__company"
        }),
        this.createComponentInput(e.id, "sequenceTitle", u.title ?? "", {
          itemIndex: p,
          className: "wa-builder-sequence-editor__company"
        }),
        this.createComponentInput(e.id, "sequenceSignal", u.signal ?? "", {
          itemIndex: p,
          className: "wa-builder-sequence-editor__subject"
        }),
        this.createComponentInput(e.id, "sequenceSubject", u.subject, {
          itemIndex: p,
          className: "wa-builder-sequence-editor__subject"
        }),
        this.createComponentField(e.id, "sequencePersonalization", u.personalization, {
          itemIndex: p,
          className: "wa-builder-sequence-editor__personalization"
        })
      ), u.steps?.forEach((g, h) => {
        m.append(
          this.createComponentInput(e.id, "sequenceStepChannel", g.channel, {
            itemIndex: p,
            fieldIndex: h,
            className: "wa-builder-sequence-editor__subject"
          }),
          this.createComponentInput(e.id, "sequenceStepLabel", g.label, {
            itemIndex: p,
            fieldIndex: h,
            className: "wa-builder-sequence-editor__subject"
          }),
          this.createComponentField(e.id, "sequenceStepBody", g.body, {
            itemIndex: p,
            fieldIndex: h,
            className: "wa-builder-sequence-editor__personalization"
          }),
          this.createComponentInput(e.id, "sequenceStepWaitDays", g.waitDays ?? "", {
            itemIndex: p,
            fieldIndex: h,
            className: "wa-builder-sequence-editor__count"
          })
        );
      }), d.append(m);
    });
    const c = document.createElement("div");
    return c.className = "wa-builder-channel-editor", t.channels.forEach((u, p) => {
      const m = document.createElement("div");
      m.className = "wa-builder-channel-editor__card", m.append(
        this.createComponentInput(e.id, "channelLabel", u.label, {
          itemIndex: p,
          className: "wa-builder-channel-editor__label"
        }),
        this.createComponentInput(e.id, "channelBadge", u.badge, {
          itemIndex: p,
          className: "wa-builder-channel-editor__badge"
        }),
        this.createComponentField(e.id, "channelDetail", u.detail, {
          itemIndex: p,
          className: "wa-builder-channel-editor__detail"
        })
      ), c.append(m);
    }), i.append(r, n, o, l, d, c), a;
  }
  createStructuredComponentCard(e) {
    const t = document.createElement("div");
    t.className = "wa-builder-component-card";
    const a = document.createElement("div");
    a.className = "wa-builder-component-card__content";
    const i = document.createElement("span");
    return i.className = "wa-builder-step__kind", i.textContent = e, a.append(i), t.append(a), t;
  }
  createThinkingField(e, t, a, i) {
    const r = document.createElement("textarea");
    return r.className = i.className, r.dataset.builderThinkingField = t, r.dataset.builderThinkingStep = e, r.value = a, r.rows = 1, r.spellcheck = !0, i.itemIndex !== void 0 && (r.dataset.builderThinkingItem = String(i.itemIndex)), r;
  }
  createThinkingInput(e, t, a, i) {
    const r = document.createElement("input");
    return r.className = i.className, r.dataset.builderThinkingField = t, r.dataset.builderThinkingStep = e, r.value = a, r.type = "text", r.spellcheck = !0, i.itemIndex !== void 0 && (r.dataset.builderThinkingItem = String(i.itemIndex)), r;
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
    return t.className = "wa-builder-step__textarea", t.dataset.builderStepField = e.id, t.value = e.text, t.rows = 1, t.spellcheck = !0, t.setAttribute("aria-label", `${Ze[e.kind]} message text`), t;
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
    return t.className = "wa-builder-step__action wa-builder-step__drag", t.type = "button", t.draggable = !0, t.dataset.builderDragHandle = e, t.setAttribute("aria-label", "Drag to reorder message"), t.append(Hi("grip")), t;
  }
  createActionButton(e, t, a, i, r = !1) {
    const n = document.createElement("button");
    return n.className = "wa-builder-step__action", n.type = "button", n.dataset.builderAction = t, n.dataset.builderActionStep = e, n.disabled = r, n.setAttribute("aria-label", a), n.append(Hi(i)), n;
  }
  createField(e, t, a, i) {
    const r = document.createElement("label");
    r.className = "wa-builder-field";
    const n = document.createElement("span");
    n.className = "wa-builder-field__label", n.textContent = e;
    const o = t === "textarea" ? document.createElement("textarea") : document.createElement("input");
    return o.className = "wa-builder-field__control", o.dataset.builderPanelInput = a, o.value = i, o instanceof HTMLInputElement && (o.type = t === "color" ? "color" : "text"), o instanceof HTMLTextAreaElement && (o.rows = 2), r.append(n, o), r;
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
    const t = js(e, Xs(e), ""), a = this.activeStory.steps, i = a.findIndex((n) => n.id === this.selectedStepId), r = i >= 0 ? i + 1 : a.length;
    a.splice(r, 0, t), this.selectedStepId = t.id, this.render(), this.emitChange(`Added ${Ze[e]} message`);
  }
  updateStep(e, t, a = {}) {
    const i = this.activeStory.steps.find((r) => r.id === e);
    i && (Object.assign(i, t), i.kind === "thinking" && oo(i, t), this.renderExport(), this.emitChange("Draft updated", !1), a.renderThread !== !1 && (this.renderThread(), this.renderPanel()));
  }
  handleStepAction(e) {
    const t = e.dataset.builderAction, a = e.dataset.builderActionStep;
    if (!t || !a) return;
    const i = this.activeStory.steps, r = i.findIndex((n) => n.id === a);
    r < 0 || (t === "duplicate" && (i.splice(r + 1, 0, po(i[r])), this.selectedStepId = i[r + 1]?.id ?? a), t === "delete" && i.length > 1 && (i.splice(r, 1), this.selectedStepId = i[Math.min(r, i.length - 1)]?.id ?? null), this.render(), this.emitChange("Draft updated"));
  }
  handleDragStart(e) {
    const t = e.target, a = t?.closest("[data-builder-step]");
    if (!a?.dataset.builderStep) {
      e.preventDefault();
      return;
    }
    if (yo(t) && !t?.closest("[data-builder-drag-handle]")) {
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
    let o = t ? i.findIndex((l) => l.id === t) : i.length;
    o < 0 && (o = i.length), a === "after" && (o += 1), i.splice(Math.min(o, i.length), 0, n), this.selectedStepId = n.id, this.render(), this.emitChange("Reordered message");
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
  handleThinkingInput(e) {
    const t = e.dataset.builderThinkingStep, a = e.dataset.builderThinkingField, i = Je(e.dataset.builderThinkingItem), r = t ? this.activeStory.steps.find((n) => n.id === t) : null;
    !r || !a || (r.thinking ??= vt(r.text, r.note), no(r.thinking, a, e.value, i), so(r), this.selectedStepId === r.id && (this.syncPanelStepText(r.text), this.syncPanelStepNote(r.note)), this.renderExport(), this.emitChange("Thinking updated", !1));
  }
  handleComponentInput(e) {
    const t = e.dataset.builderComponentStep, a = e.dataset.builderComponentField, i = t ? this.activeStory.steps.find((r) => r.id === t) : null;
    !i?.component || !a || (co(i.component, a, e.value, {
      rowIndex: Je(e.dataset.builderComponentRow),
      columnIndex: Je(e.dataset.builderComponentColumn),
      cardIndex: Je(e.dataset.builderComponentCard),
      fieldIndex: Je(e.dataset.builderComponentGroup),
      itemIndex: Je(e.dataset.builderComponentItem)
    }), i.text = uo(i.component), this.selectedStepId === i.id && this.syncPanelStepText(i.text), this.renderExport(), this.emitChange("Component updated", !1));
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
          this.updateStep(this.selectedStep.id, { text: e.value }, { renderThread: !1 }), this.selectedStep.kind === "thinking" ? this.syncThreadThinking(this.selectedStep) : this.syncThreadStepText(this.selectedStep.id, e.value), this.autoSize(e);
          return;
        }
        t === "step-note" && (this.updateStep(this.selectedStep.id, { note: e.value }, { renderThread: !1 }), this.selectedStep.kind === "thinking" && this.syncThreadThinking(this.selectedStep), this.autoSize(e));
      }
    }
  }
  handlePanelSelect(e) {
    e.dataset.builderPanelSelect !== "step-kind" || !this.selectedStep || !Ga(e.value) || this.updateStep(this.selectedStep.id, { kind: e.value });
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
  syncThreadThinking(e) {
    const t = this.refs;
    !t || !e.thinking || t.thread.querySelectorAll(
      `[data-builder-thinking-step="${e.id}"]`
    ).forEach((a) => {
      const i = a.dataset.builderThinkingField, r = Je(a.dataset.builderThinkingItem), n = lo(e.thinking, i, r);
      n === null || a.value === n || (a.value = n, a instanceof HTMLTextAreaElement && this.autoSize(a));
    });
  }
  syncPanelStepText(e) {
    const t = this.refs;
    if (!t) return;
    const a = t.panel.querySelector("[data-builder-panel-input='step-text']");
    !a || a.value === e || (a.value = e, this.autoSize(a));
  }
  syncPanelStepNote(e) {
    const t = this.refs;
    if (!t) return;
    const a = t.panel.querySelector("[data-builder-panel-input='step-note']");
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
    ), this.queueRemoteSave());
  }
  async loadRemoteDraft() {
    if (this.draftEndpoint) {
      this.loadingRemoteDraft = !0, this.setStatus("loading draft");
      try {
        const e = await fetch(this.draftEndpoint, {
          method: "GET",
          cache: "no-store",
          headers: { Accept: "application/json" }
        });
        if (e.status === 404) {
          const r = await go(e);
          if (st(r) && r.error === "not_found") {
            this.setStatus("seeding blob draft"), this.loadingRemoteDraft = !1, this.queueRemoteSave();
            return;
          }
          throw new Error("draft endpoint unavailable");
        }
        if (!e.ok)
          throw new Error(`draft load failed with ${e.status}`);
        const t = await e.json(), a = mo(t), i = a?.stories;
        if (!a || !i?.length)
          throw new Error("draft payload did not include stories");
        this.stories = a.schemaVersion === Et ? i : Bi(this.sourceStories), this.activeStoryIndex = Math.min(this.activeStoryIndex, Math.max(0, this.stories.length - 1)), this.selectedStepId = this.activeStory.steps[0]?.id ?? null, this.render(), this.setStatus(a.schemaVersion === Et ? "draft loaded" : "draft upgraded"), a.schemaVersion !== Et && this.queueRemoteSave();
      } catch {
        this.setStatus("remote draft unavailable; using local draft");
      } finally {
        this.loadingRemoteDraft = !1, this.pendingSaveAfterLoad && (this.pendingSaveAfterLoad = !1, this.queueRemoteSave());
      }
    }
  }
  queueRemoteSave() {
    if (!(!this.draftEndpoint || !this.draftAutoSave)) {
      if (this.loadingRemoteDraft) {
        this.pendingSaveAfterLoad = !0;
        return;
      }
      this.saveTimer !== null && window.clearTimeout(this.saveTimer), this.saveTimer = window.setTimeout(() => {
        this.saveTimer = null, this.saveRemoteDraft();
      }, Ws);
    }
  }
  async saveRemoteDraft() {
    if (this.draftEndpoint)
      try {
        const e = await fetch(this.draftEndpoint, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...xo()
          },
          body: JSON.stringify({
            schemaVersion: Et,
            stories: this.stories
          })
        });
        if (!e.ok)
          throw new Error(`draft save failed with ${e.status}`);
        this.setStatus("draft saved");
      } catch {
        this.setStatus("could not save draft");
      }
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
function Bi(s) {
  return s.map((e) => ({
    id: e.id,
    label: e.navLabel ?? e.label,
    summary: e.navDescription ?? e.summary,
    steps: Us(e.id, e.summary)
  }));
}
function Us(s, e) {
  return ({
    "hit-ground-running": [
      { kind: "status", text: "Sign up", note: "Start in the browser sign-up screen." },
      { kind: "user", text: "joel@acme.co", note: "Typed into the sign-up field." },
      Xe([
        "Researching the company profile",
        "Learning the ICP and buyer roles",
        "Reading blog posts for positioning",
        "Scanning careers pages for priorities",
        "Mapping current GTM signals"
      ]),
      { kind: "assistant", text: "I found three GTM paths worth testing first.", note: "" },
      {
        kind: "component",
        text: "Three compact GTM strategy cards",
        note: "Founder-led signal capture, RevOps consolidation, and pipeline acceleration.",
        component: Ks()
      }
    ],
    "data-marketplace": [
      { kind: "user", text: "Show me new hires at dev-tool companies with 50+ employees.", note: "" },
      Xe(["Searching hiring signals, headcount, and company data"]),
      {
        kind: "component",
        text: "Table: New hires at dev-tool companies",
        note: "No chrome around the table.",
        component: Fi("New hires at dev-tool companies", [
          ["Jamie Chen", "Ramp", "VP of Sales"],
          ["Andre Park", "Ramp", "Head of Growth"],
          ["David Kim", "Ramp", "Head of Revenue"],
          ["Chandler Bree", "Square", "VP of Sales"],
          ["Ellen Nelle", "Square", "Growth Engineer"],
          ["Chadley Dupre", "Square", "Head of Revops"],
          ["Patrick Bateman", "Stripe", "COO"],
          ["Miles Kibble III", "Stripe", "Head of Chaos"],
          ["Natalie Dank", "Stripe", "Money Manager"]
        ], { eyebrow: "Natural language search", count: "9 records" })
      },
      { kind: "user", text: "Filter to the ones that have raised in the past three months.", note: "" },
      Xe(["Checking rounds announced since February 2026"]),
      {
        kind: "component",
        text: "Table: Raised in the past three months",
        note: "A smaller table appears after the filter message.",
        component: Fi("Raised in the past three months", [
          ["Jamie Chen", "Ramp", "VP of Sales"],
          ["Andre Park", "Ramp", "Head of Growth"],
          ["David Kim", "Ramp", "Head of Revenue"],
          ["Patrick Bateman", "Stripe", "COO"]
        ], { eyebrow: "Filtered results", count: "3 records" })
      },
      { kind: "user", text: "Okay, enrich these contacts.", note: "" },
      {
        kind: "component",
        text: "Enrichment waterfall",
        note: "Business emails and mobile phones.",
        component: Zs()
      },
      {
        kind: "component",
        text: "Enriched table with emails and phone numbers",
        note: "",
        component: {
          kind: "table",
          title: "Enriched contacts",
          eyebrow: "ready to engage",
          count: "3 contacts",
          columns: ["Name", "Company", "Title", "Email", "Number"],
          rows: [
            ["Jamie Chen", "Ramp", "VP of Sales", "jamie@ramp.com", "+1 (628) 240-2744"],
            ["Andre Park", "Ramp", "Head of Growth", "andre@ramp.com", "+1 (210) 555-2341"],
            ["David Kim", "Ramp", "Head of Revenue", "david@ramp.com", "+1 (628) 230-9962"],
            ["Chandler Bree", "Square", "VP of Sales", "jamie@ramp.com", "+1 (628) 240-2744"],
            ["Ellen Nelle", "Square", "Growth Engineer", "andre@ramp.com", "+1 (210) 555-2341"],
            ["Chadley Dupre", "Square", "Head of Revops", "david@ramp.com", "+1 (628) 230-9962"],
            ["Patrick Bateman", "Stripe", "COO", "jamie@ramp.com", "+1 (628) 240-2744"],
            ["Miles Kibble III", "Stripe", "Head of Chaos", "andre@ramp.com", "+1 (210) 555-2341"],
            ["Natalie Dank", "Stripe", "Money Manager", "david@ramp.com", "+1 (628) 230-9962"]
          ]
        }
      },
      {
        kind: "component",
        text: "Grid: specific vendor partners",
        note: "Marketing page grid of vendor partners grouped by data area.",
        component: $s()
      }
    ],
    "crm-update": [
      {
        kind: "component",
        text: "Uploaded business context files",
        note: "Dragged in as a bundle before the agent learns the business.",
        component: eo()
      },
      Xe([
        "Reading battle cards and competitive traps",
        "Extracting voice and tone rules",
        "Learning ICP disqualifiers",
        "Mapping playbook CTAs and objection handling"
      ]),
      {
        kind: "component",
        text: "Learned outreach style",
        note: "Shows the style and qualification rules the AI learned.",
        component: to()
      },
      {
        kind: "component",
        text: "Personalization swipe mini game",
        note: "Swipe cards to teach which personalization patterns sound like Joel.",
        component: ao()
      },
      { kind: "user", text: "Write a sequence for consumer fintech founders.", note: "This is intentionally outside the learned ICP." },
      { kind: "assistant", text: "Are you sure? this doesn't fit your ICP", note: "Guardrail response based on the uploaded context." },
      { kind: "user", text: "Okay, generate leads ranked by how personally connected they are to us.", note: "" },
      Xe(["Scoring shared schools, fields of study, mutual contacts, and warm signals"]),
      {
        kind: "component",
        text: "Ranked leads with proximity fields",
        note: "Personalization is ranked by relationship proximity.",
        component: io()
      }
    ],
    "research-brief": [
      { kind: "user", text: "Show me 50 sales leaders that have recently visited my website.", note: "" },
      {
        kind: "component",
        text: "Table: Recent website visitors",
        note: "Shows 10 rows at a time with pagination, power dialer, and outreach sequence actions.",
        component: Qs("Recent website visitors", [
          ["Maya Patel", "OrbitGrid", "VP Sales", "12m ago", "Pricing page"],
          ["Evan Brooks", "Northstar Dev", "Head of Sales", "18m ago", "Integrations"],
          ["Clara Wong", "BrightLayer", "VP Revenue", "27m ago", "Case study"],
          ["Andre Park", "Ramp", "Head of Sales", "33m ago", "Demo page"],
          ["Jamie Chen", "Square", "VP Sales", "42m ago", "ROI calculator"],
          ["Nina Kapoor", "Mercury", "Sales Director", "51m ago", "Security page"],
          ["David Kim", "Stripe", "Revenue Lead", "1h ago", "Docs"],
          ["Sam Hollis", "Apollo", "VP Sales", "1h ago", "Comparison"],
          ["Rachel Cho", "Retool", "Head of Sales", "2h ago", "Pricing page"],
          ["Owen Lee", "Linear", "Sales Lead", "2h ago", "Demo page"],
          ["Fatima Ali", "Vercel", "VP Sales", "2h ago", "Enterprise"],
          ["Leo Martin", "Hex", "Head of Sales", "3h ago", "Blog"],
          ["Priya Rao", "Census", "Sales Director", "3h ago", "Demo page"],
          ["Jules Meyer", "Notion", "VP Sales", "4h ago", "Integrations"],
          ["Marcus Reed", "Figma", "Revenue Lead", "4h ago", "Pricing page"],
          ["Zoe Carter", "Rippling", "Head of Sales", "5h ago", "Case study"],
          ["Liam Price", "Webflow", "VP Sales", "5h ago", "Security page"],
          ["Sara Nelson", "Airtable", "Sales Lead", "6h ago", "Comparison"],
          ["Noah Singh", "dbt Labs", "Head of Sales", "6h ago", "ROI calculator"],
          ["Ava Garcia", "Gusto", "VP Revenue", "7h ago", "Demo page"]
        ])
      },
      { kind: "cursor", text: "Cursor clicks page 2, hovers the dialer icon, then clicks the email icon.", note: "Dialer tooltip reads “Start power dialing” with a “Coming soon” badge; email tooltip reads “Build outreach sequence.”" },
      Xe(
        [
          "generating sequence template from company offering",
          "researching companies",
          "researching people"
        ],
        {
          "generating sequence template from company offering": "Using Unify’s offering, visitor intent, role-specific pain, relevant proof, and a low-friction CTA.",
          "researching companies": "Reading firmographics, page intent, recent hiring, and relevant account signals.",
          "researching people": "Checking role, seniority, likely ownership, and channel-specific personalization angles."
        }
      ),
      {
        kind: "component",
        text: "Personalized sequence preview",
        note: "Switch between people to inspect tailored email, LinkedIn, email, and call steps before kickoff.",
        component: ro()
      }
    ],
    "csv-import-cleanup": [
      { kind: "cursor", text: "Cursor exits right and drags a CSV into the browser.", note: "Drop overlay appears as soon as the file enters." },
      { kind: "file", text: "webinar_attendees.csv", note: "File appears as a user-side message after release." },
      Xe([
        "Parsing webinar attendee CSV",
        "Normalizing email addresses",
        "Combining first and last name fields",
        "Removing duplicates and empty rows"
      ]),
      { kind: "assistant", text: "I cleaned the attendee list and normalized the fields that matter for routing and follow-up.", note: "" },
      {
        kind: "component",
        text: "Clean attendee table",
        note: "Shows normalized emails and full names.",
        component: {
          kind: "table",
          title: "Cleaned webinar attendees",
          eyebrow: "CSV cleanup",
          count: "6 normalized records",
          columns: ["Full name", "Email", "Company", "Status"],
          rows: [
            ["Maya Rodriguez", "maya.rodriguez@northstar.ai", "Northstar AI", "Normalized"],
            ["Ethan Cho", "ethan.cho@clearbit.dev", "Clearbit", "Normalized"],
            ["Priya Shah", "priya.shah@orbitgrid.com", "OrbitGrid", "Deduped"],
            ["Lucas Meyer", "lucas.meyer@ramp.com", "Ramp", "Fixed case"],
            ["Nina Kapoor", "nina.kapoor@mercury.com", "Mercury", "Filled name"],
            ["Sam Hollis", "sam.hollis@apollo.io", "Apollo", "Normalized"]
          ]
        }
      }
    ]
  }[s] ?? [{ kind: "assistant", text: e, note: "" }]).map((i, r) => ({
    ...i,
    id: `${s}-step-${r + 1}`
  }));
}
function js(s, e, t) {
  const a = {
    id: Yr("step"),
    kind: s,
    text: e,
    note: t
  };
  return s === "thinking" && (a.thinking = vt(e, t)), a;
}
function vt(s, e = "") {
  const t = Ur([s || "Thinking"]).map((a, i) => ({
    label: a.label,
    detail: e || a.detail || St(a.label, i),
    disclosure: a.disclosure || (i === 0 ? Le : nt)
  }));
  return {
    title: Re,
    elapsed: ha(t.length),
    items: t
  };
}
function Ys(s, e = {}) {
  const t = Ur(s).map((a, i) => ({
    label: a.label,
    detail: e[a.label] || a.detail || St(a.label, i),
    disclosure: a.disclosure || (i === 0 ? Le : nt)
  }));
  return {
    title: Re,
    elapsed: ha(t.length),
    items: t
  };
}
function Xs(s) {
  return {
    user: "Ask the assistant to transform the current result.",
    assistant: "The assistant responds with the next useful result.",
    thinking: "Researching the next signal",
    component: "Visual result component",
    cursor: "Move cursor to the next interaction target.",
    status: "Update state",
    file: "uploaded_file.csv"
  }[s];
}
function Xe(s, e = {}) {
  const t = Ys(s, e), a = t.items[0];
  return {
    kind: "thinking",
    text: a?.label ?? "",
    note: a?.detail ?? "",
    thinking: t
  };
}
function Js(s) {
  return {
    kind: "generic",
    title: s,
    items: ["Primary result", "Supporting detail", "Next action"]
  };
}
function Fi(s, e, t = {}) {
  return {
    kind: "table",
    title: s,
    ...t,
    columns: ["Name", "Company", "Title"],
    rows: e
  };
}
function Qs(s, e) {
  return {
    kind: "table",
    title: s,
    eyebrow: "Visitor intent",
    count: "50 sales leaders",
    columns: ["Name", "Company", "Title", "Last visit", "Signal"],
    rows: e,
    actions: [
      {
        label: "Power dialer",
        tooltip: "Start power dialing",
        badge: "Coming soon"
      },
      {
        label: "Create outreach sequence",
        tooltip: "Build outreach sequence",
        badge: ""
      }
    ],
    pagination: {
      ranges: ["1-10 of 50 people", "11-20 of 50 people"]
    }
  };
}
function Ks() {
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
        summary: "lead with a data-quality audit for teams already showing CRM cleanup pain, then turn the gaps into a consolidation case."
      },
      {
        label: "Strategy three",
        title: "Pipeline acceleration sprint",
        summary: "Package the strongest buyer and account signals into a short sprint for sales leaders who need near-term pipeline movement."
      }
    ]
  };
}
function Zs() {
  return {
    kind: "enrichment",
    title: "Enriching",
    subtitle: "4m 20s",
    fields: [
      {
        title: "Work email",
        steps: ["Apollo", "ZoomInfo"]
      },
      {
        title: "Mobile number",
        steps: ["Apollo", "FullEnrich"]
      },
      {
        title: "LinkedIn",
        steps: ["Apollo", "ZoomInfo"]
      },
      {
        title: "Title",
        steps: ["Apollo", "ZoomInfo", "FullEnrich"]
      }
    ]
  };
}
function $s() {
  return {
    kind: "dataSources",
    title: "Ask complex questions across diverse data sets",
    subtitle: "Unify routes each search across the right partner sources for the job.",
    sources: [
      {
        category: "CRM",
        name: "HubSpot",
        detail: "CRM, marketing, and sales engagement records.",
        logoSrc: "/data-logos/HubSpot.svg"
      },
      {
        category: "CRM",
        name: "Salesforce",
        detail: "CRM account, contact, and activity data.",
        logoSrc: "/data-logos/Salesforce.svg"
      },
      {
        category: "Core Data",
        name: "5x5",
        detail: "On-premise company and contact datasets.",
        logoSrc: "/data-logos/5x5.svg"
      },
      {
        category: "Core Data",
        name: "MixRank",
        detail: "Company, app, and advertising intelligence.",
        logoSrc: "/data-logos/mixrank.svg"
      },
      {
        category: "Core Data",
        name: "People Data Labs",
        detail: "People and company records for core B2B coverage.",
        logoSrc: "/data-logos/People%20Data%20Labs.svg"
      },
      {
        category: "Ad Intelligence",
        name: "Adyntel",
        detail: "Ad spend, messaging, and competitive advertising signals.",
        logoSrc: "/data-logos/Adyntel.svg"
      },
      {
        category: "Ad Intelligence",
        name: "Adbeat",
        detail: "Digital ad creatives, publishers, and campaign intelligence.",
        logoSrc: "/data-logos/Adbeat.svg"
      },
      {
        category: "Ad Intelligence",
        name: "Upriver",
        detail: "Ad strategy and competitive demand generation signals.",
        logoSrc: "/data-logos/UpRiver.svg"
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
        category: "SMB Data",
        name: "OpenMart",
        detail: "Small business discovery and merchant data.",
        logoSrc: "/data-logos/OpenMart.svg"
      },
      {
        category: "Ecommerce",
        name: "Store Leads",
        detail: "E-commerce stores, platforms, categories, and growth signals.",
        logoSrc: "/data-logos/Store%20Leads.svg"
      },
      {
        category: "Enrichment",
        name: "Ramp",
        detail: "Financial and business context enrichment.",
        logoSrc: "/data-logos/Ramp.svg"
      },
      {
        category: "Enrichment",
        name: "FullEnrich",
        detail: "Email and phone enrichment across multiple providers.",
        logoSrc: "/data-logos/FullEnrich.svg"
      },
      {
        category: "Company / Fundraising",
        name: "Ocean.io",
        detail: "Company lookalikes, segments, and account discovery.",
        logoSrc: "/data-logos/Oceanio.svg"
      },
      {
        category: "Company / Fundraising",
        name: "Harmonic",
        detail: "Startup company signals, growth, and fundraising data.",
        logoSrc: "/data-logos/Harmonic.svg"
      },
      {
        category: "Tech Stack",
        name: "Theirstack",
        detail: "Technology install, job-posting, and stack signals.",
        logoSrc: "/data-logos/TheirStack.svg"
      },
      {
        category: "Tech Stack",
        name: "PredictLeads",
        detail: "Hiring, technology, product, and business event signals.",
        logoSrc: "/data-logos/PredictLeads.svg"
      },
      {
        category: "Tech Stack",
        name: "BuiltWith",
        detail: "Installed tools, web stack, pixels, and infrastructure data.",
        logoSrc: "/data-logos/Built%20With.svg"
      },
      {
        category: "Web / SEO",
        name: "Serpstat",
        detail: "SEO, PPC, and content intelligence.",
        logoSrc: "/data-logos/Serpstat.svg"
      },
      {
        category: "Web / SEO",
        name: "SE Ranking",
        detail: "Search visibility, keyword, and competitor SEO data.",
        logoSrc: "/data-logos/SE%20Ranking.svg"
      },
      {
        category: "Relationships",
        name: "LinkedIn",
        detail: "Professional relationship and profile context.",
        logoSrc: "/data-logos/LinkedIn.png"
      },
      {
        category: "Relationships",
        name: "The Swarm",
        detail: "Network, relationship, and warm-introduction context.",
        logoSrc: "/data-logos/The%20Swarm.svg"
      },
      {
        category: "And more",
        name: "Trigify",
        detail: "Social buying signals and engagement events.",
        logoSrc: "/data-logos/Trigify.svg"
      },
      {
        category: "And more",
        name: "ZeroBounce",
        detail: "Email validation and deliverability checks.",
        logoSrc: "/data-logos/zerobounce.svg"
      },
      {
        category: "And more",
        name: "BuyerCaddy",
        detail: "Buyer tracking and sales workflow support.",
        logoSrc: "/data-logos/BuyerCaddy.svg"
      }
    ]
  };
}
function eo() {
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
function to() {
  return {
    kind: "styleProfile",
    title: "Learned outreach style",
    subtitle: "The agent extracts how your team writes, qualifies, and earns replies.",
    signals: [
      { label: "Voice", value: "Plainspoken, specific, no inflated urgency" },
      { label: "CTA", value: "Low-friction question before calendar asks" },
      { label: "proof", value: "lead with trigger + relevant customer pattern" },
      { label: "Guardrail", value: "Rejects weak ICP fit before drafting" }
    ],
    examples: [
      "Keep the opener grounded in a real business trigger.",
      "Avoid generic automation language unless the account shows ops pain."
    ]
  };
}
function ao() {
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
function io() {
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
function ro() {
  return {
    kind: "sequenceEngagement",
    title: "Personalized sequence preview",
    subtitle: "Each visitor gets a channel plan based on company fit, page intent, and the person’s role.",
    peopleCount: "50 people",
    launchLabel: "kick off sequence",
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
            channel: "email",
            label: "lead with the trigger",
            body: "Mention the pricing visit and RevOps hiring pattern; ask if their team is evaluating ways to source better-fit accounts.",
            waitDays: "2"
          },
          {
            channel: "linkedin",
            label: "light proof",
            body: "Reference a similar sales team using Unify to turn inbound intent into researched outbound lists.",
            waitDays: "3"
          },
          {
            channel: "email",
            label: "offer the play",
            body: "Send a short teardown of three accounts showing why they match OrbitGrid’s current motion.",
            waitDays: "2"
          },
          {
            channel: "call",
            label: "use context",
            body: "Open with the pricing visit and ask whether pipeline quality or source coverage is the bigger gap.",
            waitDays: ""
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
            channel: "email",
            label: "anchor to integrations",
            body: "Point to their integrations-page visit and the likely need to prioritize partner-fit accounts.",
            waitDays: "2"
          },
          {
            channel: "linkedin",
            label: "ask a narrow question",
            body: "Ask whether partner signals are already part of Northstar Dev’s outbound scoring.",
            waitDays: "3"
          },
          {
            channel: "email",
            label: "show the workflow",
            body: "Share how Unify can pull partner usage, firmographics, and contact data into one sequence-ready list.",
            waitDays: "2"
          },
          {
            channel: "call",
            label: "reference the path",
            body: "Mention the integrations research and ask if sales is prioritizing ecosystem-led campaigns this quarter.",
            waitDays: ""
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
            channel: "email",
            label: "mirror the proof",
            body: "Reference the case study visit and connect it to finding more accounts that match the same buying pattern.",
            waitDays: "2"
          },
          {
            channel: "linkedin",
            label: "share a takeaway",
            body: "Send one concise observation about BrightLayer’s likely expansion motion based on the page viewed.",
            waitDays: "3"
          },
          {
            channel: "email",
            label: "personalized follow-up",
            body: "Offer a mini list of 10 lookalike companies with the reason each one matches BrightLayer’s best-fit segment.",
            waitDays: "2"
          },
          {
            channel: "call",
            label: "ask for fit",
            body: "Ask whether revenue is looking for more accounts like the case-study customer or a new adjacent segment.",
            waitDays: ""
          }
        ]
      }
    ],
    channels: []
  };
}
function no(s, e, t, a) {
  if (e === "title" && (s.title = t), e === "elapsed" && (s.elapsed = t), a === null) return;
  const i = s.items[a];
  i && (e === "label" && (i.label = t), e === "detail" && (i.detail = t), e === "disclosure" && (i.disclosure = t));
}
function so(s) {
  if (!s.thinking) return;
  const e = s.thinking.items[0];
  s.text = e?.label ?? "", s.note = e?.detail ?? "";
}
function oo(s, e) {
  s.kind === "thinking" && (s.thinking ??= vt(s.text, s.note), s.thinking.items[0] ??= {
    label: s.text,
    detail: s.note || St(s.text, 0),
    disclosure: Le
  }, e.text !== void 0 && (s.thinking.items[0].label = e.text), e.note !== void 0 && (s.thinking.items[0].detail = e.note));
}
function lo(s, e, t) {
  if (e === "title") return s.title;
  if (e === "elapsed") return s.elapsed;
  if (t === null) return null;
  const a = s.items[t];
  return a ? e === "label" ? a.label : e === "detail" ? a.detail : e === "disclosure" ? a.disclosure : null : null;
}
function co(s, e, t, a) {
  if (e === "title" && (s.title = t), s.kind === "generic" && e === "item" && a.itemIndex !== null && (s.items[a.itemIndex] = t), s.kind === "dataSources" && (e === "subtitle" && (s.subtitle = t), a.itemIndex !== null)) {
    const i = s.sources[a.itemIndex];
    if (!i) return;
    e === "sourceCategory" && (i.category = t), e === "sourceName" && (i.name = t), e === "sourceDetail" && (i.detail = t);
  }
  if (s.kind === "uploadedFiles" && a.itemIndex !== null) {
    const i = s.files[a.itemIndex];
    if (!i) return;
    e === "fileType" && (i.type = t), e === "fileName" && (i.name = t), e === "fileDetail" && (i.detail = t);
  }
  if (s.kind === "styleProfile" && (e === "subtitle" && (s.subtitle = t), a.itemIndex !== null)) {
    const i = s.signals[a.itemIndex];
    i && (e === "signalLabel" && (i.label = t), e === "signalValue" && (i.value = t)), e === "styleExample" && (s.examples[a.itemIndex] = t);
  }
  if (s.kind === "proximityList" && (e === "subtitle" && (s.subtitle = t), a.itemIndex !== null)) {
    const i = s.leads[a.itemIndex];
    if (!i) return;
    e === "leadRank" && (i.rank = t), e === "leadScore" && (i.score = t), e === "leadName" && (i.name = t), e === "leadCompany" && (i.company = t), e === "leadTitle" && (i.title = t), e === "leadProximity" && (i.proximity = t), e === "leadPersonalization" && (i.personalization = t);
  }
  if (s.kind === "personalizationSwipeGame" && (e === "subtitle" && (s.subtitle = t), e === "prompt" && (s.prompt = t), a.itemIndex !== null)) {
    const i = s.signals[a.itemIndex];
    if (!i) return;
    e === "swipeDecision" && (i.decision = t === "avoid" ? "avoid" : "use"), e === "swipeLabel" && (i.label = t), e === "swipeDetail" && (i.detail = t);
  }
  if (s.kind === "sequenceEngagement" && (e === "subtitle" && (s.subtitle = t), e === "peopleCount" && (s.peopleCount = t), e === "launchLabel" && (s.launchLabel = t), a.itemIndex !== null)) {
    const i = s.sequences[a.itemIndex];
    if (i) {
      e === "sequenceName" && (i.name = t), e === "sequenceCompany" && (i.company = t), e === "sequenceTitle" && (i.title = t), e === "sequenceSignal" && (i.signal = t), e === "sequenceSubject" && (i.subject = t), e === "sequencePersonalization" && (i.personalization = t);
      const n = a.fieldIndex !== null ? i.steps?.[a.fieldIndex] : null;
      n && (e === "sequenceStepChannel" && (n.channel = t), e === "sequenceStepLabel" && (n.label = t), e === "sequenceStepBody" && (n.body = t), e === "sequenceStepWaitDays" && (n.waitDays = t));
    }
    const r = s.channels[a.itemIndex];
    r && (e === "channelLabel" && (r.label = t), e === "channelDetail" && (r.detail = t), e === "channelBadge" && (r.badge = t));
  }
  if (s.kind === "table" && (e === "eyebrow" && (s.eyebrow = t), e === "count" && (s.count = t), e === "column" && a.columnIndex !== null && (s.columns[a.columnIndex] = t), e === "cell" && a.rowIndex !== null && a.columnIndex !== null && (s.rows[a.rowIndex] ??= [], s.rows[a.rowIndex][a.columnIndex] = t), a.itemIndex !== null)) {
    const i = s.actions?.[a.itemIndex];
    i && (e === "actionLabel" && (i.label = t), e === "actionTooltip" && (i.tooltip = t), e === "actionBadge" && (i.badge = t)), e === "pageRange" && s.pagination && (s.pagination.ranges[a.itemIndex] = t);
  }
  if (s.kind === "strategyCards" && a.cardIndex !== null) {
    const i = s.cards[a.cardIndex];
    if (!i) return;
    e === "cardLabel" && (i.label = t), e === "cardTitle" && (i.title = t), e === "cardSummary" && (i.summary = t);
  }
  if (s.kind === "enrichment") {
    if (e === "subtitle" && (s.subtitle = t), e === "fieldTitle" && a.fieldIndex !== null) {
      const i = s.fields[a.fieldIndex];
      i && (i.title = t);
    }
    if (e === "fieldStep" && a.fieldIndex !== null && a.itemIndex !== null) {
      const i = s.fields[a.fieldIndex];
      i && (i.steps[a.itemIndex] = t);
    }
  }
}
function uo(s) {
  return s.kind === "table" ? `Table: ${s.title}` : (s.kind === "strategyCards" || s.kind === "enrichment" || s.kind === "dataSources" || s.kind === "uploadedFiles" || s.kind === "styleProfile" || s.kind === "proximityList" || s.kind === "personalizationSwipeGame" || s.kind === "sequenceEngagement", s.title);
}
function po(s) {
  return {
    ...s,
    id: Yr("step"),
    component: s.component ? ho(s.component) : void 0
  };
}
function ho(s) {
  return JSON.parse(JSON.stringify(s));
}
function mo(s) {
  if (!st(s) || !Array.isArray(s.stories)) return null;
  const e = typeof s.schemaVersion == "number" ? s.schemaVersion : 1, t = s.stories.map((a) => fo(a)).filter((a) => !!a);
  return t.length ? { schemaVersion: e, stories: t } : null;
}
async function go(s) {
  try {
    return await s.clone().json();
  } catch {
    return null;
  }
}
function fo(s) {
  if (!st(s) || !Array.isArray(s.steps)) return null;
  const e = _e(s.id), t = _e(s.label), a = _e(s.summary), i = s.steps.map((r) => wo(r)).filter((r) => !!r);
  return !e || !t || !i.length ? null : {
    id: e,
    label: t,
    summary: a ?? "",
    steps: i
  };
}
function wo(s) {
  if (!st(s)) return null;
  const e = _e(s.id), t = _e(s.kind), a = _e(s.text), i = _e(s.note);
  return !e || !t || !Ga(t) ? null : {
    id: e,
    kind: t,
    text: a ?? "",
    note: i ?? "",
    thinking: st(s.thinking) ? bo(s.thinking, a ?? "", i ?? "") : t === "thinking" ? vt(a ?? "", i ?? "") : void 0,
    component: st(s.component) ? JSON.parse(JSON.stringify(s.component)) : void 0
  };
}
function bo(s, e, t) {
  const i = (Array.isArray(s.items) ? s.items : []).map((r, n) => _o(r, n)).filter((r) => !!r);
  return i.length ? {
    title: _e(s.title) ?? Re,
    elapsed: _e(s.elapsed) ?? ha(i.length),
    items: i
  } : vt(e, t);
}
function _o(s, e) {
  if (!st(s)) return null;
  const t = _e(s.label);
  return t ? {
    label: t,
    detail: _e(s.detail) ?? St(t, e),
    disclosure: _e(s.disclosure) ?? (e === 0 ? Le : nt)
  } : null;
}
function st(s) {
  return !!(s && typeof s == "object" && !Array.isArray(s));
}
function _e(s) {
  return typeof s == "string" ? s : null;
}
function Je(s) {
  if (s === void 0) return null;
  const e = Number(s);
  return Number.isFinite(e) ? e : null;
}
function Yr(s) {
  return typeof crypto < "u" && "randomUUID" in crypto ? `${s}-${crypto.randomUUID()}` : `${s}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
function Ta(s, e) {
  return s instanceof Element ? s.closest(e) : null;
}
function yo(s) {
  return !!s?.closest("textarea, input, select, button, [contenteditable='true']");
}
function Ga(s) {
  return s in Ze;
}
function xo() {
  const s = vo();
  return s ? { "x-story-draft-token": s } : {};
}
function vo() {
  try {
    return window.localStorage.getItem("storyDraftWriteToken");
  } catch {
    return null;
  }
}
function Hi(s) {
  const e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  if (e.setAttribute("viewBox", "0 0 20 20"), e.setAttribute("aria-hidden", "true"), e.setAttribute("focusable", "false"), s === "copy" && Vi(e, "M7 7.5h8v8H7z M5 13H4.5a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1H12a1 1 0 0 1 1 1V5"), s === "x" && Vi(e, "M5.5 5.5l9 9 M14.5 5.5l-9 9"), s === "grip")
    for (const t of [7, 13])
      for (const a of [5, 10, 15]) {
        const i = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        i.setAttribute("cx", String(t)), i.setAttribute("cy", String(a)), i.setAttribute("r", "1.25"), i.setAttribute("fill", "currentColor"), e.append(i);
      }
  return e;
}
function Vi(s, e) {
  const t = document.createElementNS("http://www.w3.org/2000/svg", "path");
  t.setAttribute("d", e), t.setAttribute("fill", "none"), t.setAttribute("stroke", "currentColor"), t.setAttribute("stroke-width", "1.7"), t.setAttribute("stroke-linecap", "round"), t.setAttribute("stroke-linejoin", "round"), s.append(t);
}
const L = {
  typeShort: 0.92,
  typeMedium: 1.16,
  typeLong: 1.34,
  thinkingShort: 0.92,
  thinkingMedium: 1.3,
  beat: 0.26
};
function Ea(s) {
  return typeof s == "number" ? { x: s, y: 0 } : s;
}
function Q(s, e, t = {}, a = !0) {
  return {
    desktop: { target: s, anchor: e, offset: Ea(t.desktop), humanOffset: a },
    tablet: { target: s, anchor: e, offset: Ea(t.tablet), humanOffset: a },
    mobile: { target: s, anchor: e, offset: Ea(t.mobile), humanOffset: a }
  };
}
const Wi = {
  hitGroundRunning: Q("[data-chat-input]", "center", { desktop: -72, tablet: -68, mobile: -54 }),
  dataMarketplace: Q("[data-chat-input]", "center", { desktop: -54, tablet: -52, mobile: -44 }),
  crmUpdate: Q("[data-chat-input]", "center", { desktop: -42, tablet: -46, mobile: -36 }),
  researchBrief: Q("[data-chat-input]", "center", { desktop: -70, tablet: -62, mobile: -50 }),
  supportResolution: Q("[data-chat-input]", "center", { desktop: -62, tablet: -58, mobile: -46 })
}, So = Q("[data-signup-field]", "center", {
  desktop: -74,
  tablet: -66,
  mobile: -48
}), Ao = Q("[data-send-button]", "center"), ci = {
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
}, ko = 2.8, Co = 42, To = 2, Eo = 3, da = "[data-chat-shell] [data-chat-thread]", Po = `${da} [data-message-role="assistant"]:not(.wa-message--component) [data-message-body]`, Io = `${da} [data-message-role="assistant"].wa-message--thinking .wa-research-step[data-step-state="current"] .wa-research-step__body, ${da} [data-message-role="assistant"].wa-message--thinking .wa-research-step[data-step-state="complete"] .wa-research-step__label`, Gi = 0.24, Mo = 0.3, Nt = {
  right: { target: "[data-chat-shell]", anchor: "right", outside: "right" },
  bottomRight: { target: "[data-chat-shell]", anchor: "bottomRight", outside: "bottom" }
};
function Jt(s = Nt.right, e) {
  return {
    kind: "cursorMove",
    target: s,
    options: { intent: "exit", label: "exit" },
    at: e
  };
}
function Pt(s, e) {
  const t = ui(s), a = Lo();
  for (const [i, r] of e.entries())
    Ro(t, s, r, i, a);
  return pi(t);
}
function Ro(s, e, t, a, i) {
  switch (t.kind) {
    case "prompt":
      s.add(Fo(e, t), t.at);
      return;
    case "status":
      s.add(e.chat.setStatus(t.text), t.at);
      return;
    case "cursorClick":
      s.add(e.cursor.click(t.nextMode), t.at);
      return;
    case "typeSignupEmail":
      s.add(e.chat.typeSignupEmail(t.email, t.duration), t.at);
      return;
    case "transitionSignupToChat":
      s.add(e.chat.transitionSignupToChat(), t.at);
      return;
    case "assistant":
      s.add(e.chat.assistantMessage(t.text), t.at), zo(s, e, i, {
        kind: "assistant",
        key: t.text,
        text: t.text,
        selector: Po,
        label: `assistant-${Ua(t.text)}`,
        stepIndex: a
      });
      return;
    case "thinking": {
      const r = No(t), n = r.items.map((o) => o.label);
      t.statusBefore && s.add(e.chat.setStatus(t.statusBefore), t.at), s.add(e.chat.thinkingState(r, t.hold), t.statusBefore ? void 0 : t.at), Oo(s, e, i, t.hold, n.length, n.join("|"), a);
      return;
    }
    case "dataTable":
      dt(
        s,
        e,
        e.chat.dataTable(t.config),
        t.at,
        ut(`[data-data-table="${Me(t.config.id)}"]`),
        `table-${t.config.id}`
      );
      return;
    case "enrichmentPanel":
      dt(
        s,
        e,
        e.chat.enrichmentPanel(t.config),
        t.at,
        ut(`[data-enrichment-panel="${Me(t.config.id)}"]`),
        `enrichment-${t.config.id}`
      );
      return;
    case "strategyPlans":
      dt(
        s,
        e,
        e.chat.strategyPlans(t.plans),
        t.at,
        ut(`[data-strategy-plans~="${Me(t.plans[0]?.id ?? "strategy")}"]`),
        `strategy-${t.plans[0]?.id ?? "plans"}`
      );
      return;
    case "dataSourcesGrid":
      dt(
        s,
        e,
        e.chat.dataSourcesGrid(t.config),
        t.at,
        ut(`[data-data-sources-grid="${Me(t.config.id)}"]`),
        `sources-${t.config.id}`
      );
      return;
    case "marketingDataSourcesGrid":
      dt(
        s,
        e,
        e.chat.marketingDataSourcesGrid(t.config),
        t.at,
        `[data-marketing-data-sources-grid="${Me(t.config.id)}"]`,
        `marketing-sources-${t.config.id}`
      );
      return;
    case "personalizationSwipeGame":
      Do(s, e, t.config, t.at);
      return;
    case "sequenceEngagement":
      dt(
        s,
        e,
        e.chat.sequenceEngagement(t.config),
        t.at,
        ut(`[data-sequence-engagement="${Me(t.config.id)}"]`),
        `sequence-${t.config.id}`
      );
      return;
    case "cursorMove":
      s.add(e.cursor.moveTo(t.target, t.options), t.at);
      return;
    case "cursorDrag":
      s.add(e.cursor.dragTo(t.target, t.options), t.at);
      return;
    case "custom":
      s.add(t.build(e), t.at);
      return;
  }
}
function No(s) {
  return "thinking" in s && s.thinking ? s.thinking : Array.isArray(s.steps) ? { items: s.steps.map(Ui) } : { items: [Ui(s.label ?? "")] };
}
function Ui(s) {
  return typeof s == "string" ? { label: s } : s;
}
function dt(s, e, t, a, i, r) {
  s.add(t, a), s.add(qo(e, i, r), "+=0.06");
}
function Do(s, e, t, a) {
  const i = ut(
    `[data-personalization-swipe-game="${Me(t.id)}"]`
  );
  s.add(e.chat.personalizationSwipeGame(t), a), t.signals.forEach((r, n) => {
    const o = `${i} [data-swipe-card="${Me(r.id)}"]`, l = r.decision === "use" ? 1 : -1, d = r.decision === "use" ? "right" : "left", c = Q(o, d, {
      desktop: { x: l * 154, y: n % 2 === 0 ? -18 : 16 },
      tablet: { x: l * 132, y: n % 2 === 0 ? -14 : 14 },
      mobile: { x: l * 86, y: n % 2 === 0 ? -10 : 10 }
    }, !1);
    s.add(
      e.cursor.moveTo(Q(o, "center", {}, !1), {
        intent: "hover",
        mode: "default",
        speed: n === 0 ? "normal" : "quick",
        overshoot: !1,
        settle: !1,
        label: `swipe-card-${r.id}-center`
      }),
      n === 0 ? "+=0.2" : "+=0.12"
    ), s.add(
      e.cursor.dragTo(c, {
        speed: "slow",
        releaseHold: 0.08,
        label: `swipe-card-${r.id}-${r.decision}`
      }),
      "-=0.02"
    ), s.add(e.chat.swipePersonalizationCard(t.id, r.id, r.decision), "<+=0.2");
  }), s.add(
    e.cursor.moveTo(ci, {
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
function qo(s, e, t) {
  const a = ui(s).add(s.cursor.scanAcross(e, { label: t }));
  return pi(a);
}
function Oo(s, e, t, a = L.thinkingShort, i = 1, r = "thinking", n = 0) {
  const o = a * Math.max(1, i), l = i >= 3 && Xr(e, t, {
    kind: "thinking",
    key: r,
    text: r,
    stepIndex: n,
    minChars: 16
  });
  l && s.add(
    e.cursor.scanAcross(Io, {
      label: `thinking-skim-${Ua(r)}`,
      match: "last",
      duration: 0.72
    }),
    "<+=0.58"
  ), !(o < ko) && s.add(
    e.cursor.moveTo(ci, {
      intent: "hover",
      mode: "default",
      speed: "slow",
      overshoot: !1,
      settle: !1,
      label: `thinking-idle-${Ua(r)}`
    }),
    l ? "+=0.08" : "<+=0.08"
  );
}
function zo(s, e, t, a) {
  Xr(e, t, a) && s.add(
    e.cursor.scanAcross(a.selector, {
      label: `text-skim-${a.label}`,
      match: "last",
      duration: 0.68
    }),
    "+=0.04"
  );
}
function Lo() {
  return {
    textCandidateCount: 0,
    textSkimCount: 0,
    lastTextSkimStep: Number.NEGATIVE_INFINITY
  };
}
function Xr(s, e, t) {
  const a = t.text.trim(), i = t.minChars ?? Co;
  if (a.length < i || e.textSkimCount >= Eo) return !1;
  const r = e.textCandidateCount;
  e.textCandidateCount += 1;
  const n = e.textSkimCount === 0, o = t.stepIndex - e.lastTextSkimStep >= To, l = Bo(`${s.story.id}:${t.kind}:${r}:${t.key}`), d = r > 0 && r % 3 === 0, c = n || o && (l >= 0.58 || d);
  return c && (e.textSkimCount += 1, e.lastTextSkimStep = t.stepIndex), c;
}
function Bo(s) {
  let e = 2166136261;
  for (let a = 0; a < s.length; a += 1)
    e ^= s.charCodeAt(a), e = Math.imul(e, 16777619);
  e += 1831565813;
  let t = e;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Me(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function ut(s) {
  return `${da} ${s}`;
}
function Ua(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 36) || "state";
}
function Fo(s, e) {
  const t = ui(s);
  return e.statusBefore && t.add(s.chat.setStatus(e.statusBefore)), t.add(s.chat.showComposer(), e.statusBefore ? "-=0.02" : void 0), e.fromEntry || t.add(
    s.cursor.moveTo(e.focusTarget ?? s.story.entry, {
      mode: "text",
      intent: "text",
      speed: "normal",
      label: `focus-${e.sendLabel}`
    }),
    "-=0.18"
  ), t.add(s.cursor.click("text"), "-=0.02").add(s.chat.setComposerFocus(!0), "-=0.14").add(s.chat.typeComposer(e.text, e.duration ?? L.typeMedium)).add(
    s.cursor.moveTo(Ao, {
      mode: "pointer",
      intent: "click",
      speed: "quick",
      label: e.sendLabel
    }),
    "-=0.16"
  ).add(s.cursor.click()).add(s.chat.setComposerFocus(!1), "-=0.08").add(s.chat.sendComposerText(), "-=0.06").add(s.chat.userMessage(e.text), "-=0.12").add(s.chat.hideComposer(), "-=0.05").add(s.chat.clearComposer()).add(
    s.cursor.moveTo(ci, {
      intent: "hover",
      mode: "default",
      speed: "slow",
      overshoot: !1,
      settle: !1,
      label: `post-interaction-${e.sendLabel}`
    }),
    "-=0.12"
  ), e.statusAfter && t.add(s.chat.setStatus(e.statusAfter), "<"), pi(t);
}
function ui(s) {
  const e = s.timeline();
  return e.pause(0), e;
}
function pi(s) {
  return s.paused(!1), s;
}
const Ho = [
  "Researching the company profile",
  "Learning the ICP and buyer roles",
  "Reading blog posts for positioning",
  "Scanning careers pages for priorities",
  "Mapping current GTM signals"
], Vo = [
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
    summary: "lead with a data-quality audit for teams already showing CRM cleanup pain, then turn the gaps into a consolidation case."
  },
  {
    id: "pipeline-acceleration",
    label: "Strategy three",
    title: "Pipeline acceleration sprint",
    summary: "Package the strongest buyer and account signals into a short sprint for sales leaders who need near-term pipeline movement."
  }
], Jr = [
  { key: "name", label: "Name", width: "1.45fr" },
  { key: "company", label: "Company", width: "1fr" },
  { key: "title", label: "Title", width: "1.45fr" }
], Wo = [
  { key: "name", label: "Name", width: "1.55fr" },
  { key: "company", label: "Company", width: "0.9fr" },
  { key: "title", label: "Title", width: "1.35fr" },
  { key: "email", label: "Email", width: "1.28fr" },
  { key: "number", label: "Number", width: "1.48fr" }
], Go = {
  id: "dev-tool-new-hires",
  title: "New hires at dev-tool companies",
  eyebrow: "Natural language search",
  count: "9 records",
  columns: Jr,
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
}, Uo = {
  id: "recently-funded-dev-tools",
  title: "Raised in the past three months",
  eyebrow: "Filtered results",
  count: "3 records",
  variant: "filtered",
  columns: Jr,
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
}, jo = {
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
}, Yo = {
  id: "data-marketplace-sources",
  title: "Ask complex questions across diverse data sets",
  subtitle: "Unify routes each search across the right partner sources for the job.",
  sources: [
    {
      id: "hubspot",
      category: "CRM",
      name: "HubSpot",
      detail: "CRM, marketing, and sales engagement records.",
      logoSrc: "/data-logos/HubSpot.svg"
    },
    {
      id: "salesforce",
      category: "CRM",
      name: "Salesforce",
      detail: "CRM account, contact, and activity data.",
      logoSrc: "/data-logos/Salesforce.svg"
    },
    {
      id: "5x5",
      category: "Core Data",
      name: "Five by Five",
      detail: "On-premise company and contact datasets.",
      logoSrc: "/data-logos/5x5.svg"
    },
    {
      id: "mixrank",
      category: "Core Data",
      name: "MixRank",
      detail: "Company, app, and advertising intelligence.",
      logoSrc: "/data-logos/mixrank.svg"
    },
    {
      id: "pdl",
      category: "Core Data",
      name: "People Data Labs",
      detail: "People and company records for core B2B coverage.",
      logoSrc: "/data-logos/People%20Data%20Labs.svg"
    },
    {
      id: "adyntel",
      category: "Ad Intelligence",
      name: "Adyntel",
      detail: "Ad spend, messaging, and competitive advertising signals.",
      logoSrc: "/data-logos/Adyntel.svg"
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
      name: "Upriver",
      detail: "Ad strategy and competitive demand generation signals.",
      logoSrc: "/data-logos/UpRiver.svg"
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
      logoSrc: "/data-logos/Store%20Leads.svg"
    },
    {
      id: "ramp",
      category: "Enrichment",
      name: "Ramp",
      detail: "Financial and business context enrichment.",
      logoSrc: "/data-logos/Ramp.svg"
    },
    {
      id: "fullenrich",
      category: "Enrichment",
      name: "FullEnrich",
      detail: "Email and phone enrichment across multiple providers.",
      logoSrc: "/data-logos/FullEnrich.svg"
    },
    {
      id: "ocean-io",
      category: "Company / Fundraising",
      name: "Ocean.io",
      detail: "Company lookalikes, segments, and account discovery.",
      logoSrc: "/data-logos/Oceanio.svg"
    },
    {
      id: "harmonic",
      category: "Company / Fundraising",
      name: "Harmonic",
      detail: "Startup company signals, growth, and fundraising data.",
      logoSrc: "/data-logos/Harmonic.svg"
    },
    {
      id: "theirstack",
      category: "Tech Stack",
      name: "Theirstack",
      detail: "Technology install, job-posting, and stack signals.",
      logoSrc: "/data-logos/TheirStack.svg"
    },
    {
      id: "predictleads",
      category: "Tech Stack",
      name: "PredictLeads",
      detail: "Hiring, technology, product, and business event signals.",
      logoSrc: "/data-logos/PredictLeads.svg"
    },
    {
      id: "builtwith",
      category: "Tech Stack",
      name: "BuiltWith",
      detail: "Installed tools, web stack, pixels, and infrastructure data.",
      logoSrc: "/data-logos/Built%20With.svg"
    },
    {
      id: "serpstat",
      category: "Web / SEO",
      name: "Serpstat",
      detail: "SEO, PPC, and content intelligence.",
      logoSrc: "/data-logos/Serpstat.svg"
    },
    {
      id: "se-ranking",
      category: "Web / SEO",
      name: "SE Ranking",
      detail: "Search visibility, keyword, and competitor SEO data.",
      logoSrc: "/data-logos/SE%20Ranking.svg"
    },
    {
      id: "linkedin",
      category: "Relationships",
      name: "LinkedIn",
      detail: "Professional relationship and profile context.",
      logoSrc: "/data-logos/LinkedIn.png"
    },
    {
      id: "the-swarm",
      category: "Relationships",
      name: "The Swarm",
      detail: "Network, relationship, and warm-introduction context.",
      logoSrc: "/data-logos/The%20Swarm.svg"
    },
    {
      id: "trigify",
      category: "And more",
      name: "Trigify",
      detail: "Social buying signals and engagement events.",
      logoSrc: "/data-logos/Trigify.svg"
    },
    {
      id: "zerobounce",
      category: "And more",
      name: "ZeroBounce",
      detail: "Email validation and deliverability checks.",
      logoSrc: "/data-logos/zerobounce.svg"
    },
    {
      id: "buyercaddy",
      category: "And more",
      name: "BuyerCaddy",
      detail: "Buyer tracking and sales workflow support.",
      logoSrc: "/data-logos/BuyerCaddy.svg"
    }
  ]
}, Xo = {
  id: "enriched-dev-tool-contacts",
  title: "Enriched contacts",
  eyebrow: "ready to engage",
  count: "3 contacts",
  variant: "enriched",
  columns: Wo,
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
}, Jo = [
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
], Qo = {
  id: "learned-outreach-style",
  title: "Learned outreach style",
  subtitle: "The agent extracts how your team writes, qualifies, and earns replies.",
  signals: [
    { label: "Voice", value: "Plainspoken, specific, no inflated urgency" },
    { label: "CTA", value: "Low-friction question before calendar asks" },
    { label: "proof", value: "lead with trigger + relevant customer pattern" },
    { label: "Guardrail", value: "Rejects weak ICP fit before drafting" }
  ],
  examples: [
    "Keep the opener grounded in a real business trigger.",
    "Avoid generic automation language unless the account shows ops pain."
  ]
}, Ko = {
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
}, Zo = {
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
}, $o = {
  id: "visitor-outreach-sequences",
  title: "Personalized sequence preview",
  subtitle: "Each visitor gets a channel plan based on company fit, page intent, and the person’s role.",
  peopleCount: "50 people",
  launchLabel: "kick off sequence",
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
          channel: "email",
          label: "lead with the trigger",
          body: "Mention the pricing visit and RevOps hiring pattern; ask if their team is evaluating ways to source better-fit accounts."
        },
        {
          channel: "linkedin",
          label: "light proof",
          body: "Reference a similar sales team using Unify to turn inbound intent into researched outbound lists."
        },
        {
          channel: "email",
          label: "offer the play",
          body: "Send a short teardown of three accounts showing why they match OrbitGrid’s current motion."
        },
        {
          channel: "call",
          label: "use context",
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
          channel: "email",
          label: "anchor to integrations",
          body: "Point to their integrations-page visit and the likely need to prioritize partner-fit accounts."
        },
        {
          channel: "linkedin",
          label: "ask a narrow question",
          body: "Ask whether partner signals are already part of Northstar Dev’s outbound scoring."
        },
        {
          channel: "email",
          label: "show the workflow",
          body: "Share how Unify can pull partner usage, firmographics, and contact data into one sequence-ready list."
        },
        {
          channel: "call",
          label: "reference the path",
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
          channel: "email",
          label: "mirror the proof",
          body: "Reference the case study visit and connect it to finding more accounts that match the same buying pattern."
        },
        {
          channel: "linkedin",
          label: "share a takeaway",
          body: "Send one concise observation about BrightLayer’s likely expansion motion based on the page viewed."
        },
        {
          channel: "email",
          label: "personalized follow-up",
          body: "Offer a mini list of 10 lookalike companies with the reason each one matches BrightLayer’s best-fit segment."
        },
        {
          channel: "call",
          label: "ask for fit",
          body: "Ask whether revenue is looking for more accounts like the case-study customer or a new adjacent segment."
        }
      ]
    }
  ],
  channels: []
}, el = {
  id: "visitor-sequence-build",
  title: "building outbound sequence",
  subtitle: "Using Unify’s offering, visitor intent, and role-level context to draft the campaign.",
  templateLabel: "generating sequence template from company offering",
  template: "Using Unify’s offering, visitor intent, role-specific pain, relevant proof, and a low-friction CTA.",
  total: 50,
  tracks: [
    {
      id: "companies",
      label: "researching companies",
      detail: "Reading firmographics, page intent, recent hiring, and relevant account signals."
    },
    {
      id: "people",
      label: "researching people",
      detail: "Checking role, seniority, likely ownership, and channel-specific personalization angles."
    }
  ]
}, tl = [
  { key: "name", label: "Name", width: "1.2fr" },
  { key: "company", label: "Company", width: "0.95fr" },
  { key: "title", label: "Title", width: "1.15fr" },
  { key: "visit", label: "Last visit", width: "0.86fr" },
  { key: "signal", label: "Signal", width: "1.18fr" }
], ji = [
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
], al = [
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
], il = {
  id: "website-visitors-sales",
  title: "Recent website visitors",
  eyebrow: "Visitor intent",
  count: "50 sales leaders",
  variant: "filtered",
  columns: tl,
  rows: ji,
  pagination: {
    pageSize: 10,
    totalRows: 50,
    activePage: 1,
    pages: [
      { page: 1, range: "1-10 of 50 people", rows: ji },
      { page: 2, range: "11-20 of 50 people", rows: al }
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
}, rl = {
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
}, Qr = [
  {
    id: "hit-ground-running",
    label: "Hit the ground running",
    navLabel: "Hit the ground running",
    navDescription: "Unify understands your business like you do. Use the latest frontier models to identify your next campaign ideas.",
    eyebrow: "Business onboarding",
    summary: "The assistant learns the company, researches public signals, and returns three GTM plays.",
    entry: So,
    entryLeadTime: Mo,
    prepare: (s) => {
      s.chat.prepareSignup();
    },
    build: (s) => Pt(s, [
      { kind: "status", text: "Sign up" },
      { kind: "cursorClick", nextMode: "text", at: "-=0.04" },
      { kind: "typeSignupEmail", email: "joel@acme.co", duration: L.typeShort },
      { kind: "status", text: "Building workspace", at: "-=0.16" },
      { kind: "transitionSignupToChat", at: `+=${L.beat}` },
      { kind: "status", text: "Researching Acme", at: "<" },
      { kind: "thinking", steps: Ho, hold: 0.46, at: "+=0.04" },
      { kind: "assistant", text: "I found three GTM paths worth testing first." },
      { kind: "status", text: "Game plans ready", at: "<" },
      { kind: "strategyPlans", plans: Vo, at: "-=0.08" },
      Jt(Nt.right, "+=0.18")
    ])
  },
  {
    id: "data-marketplace",
    label: "100+ data sources at your fingertips",
    navLabel: "100+ data sources at your fingertips",
    navDescription: "A one-stop shop for your data needs, B2B contacts and companies, e-commerce, local businesses, technographics, and more in a single natural language search.",
    eyebrow: "Data marketplace",
    summary: "The assistant searches, filters, and enriches B2B company and contact data.",
    entry: Wi.dataMarketplace,
    entryLeadTime: Gi,
    build: (s) => Pt(s, [
      {
        kind: "prompt",
        text: "Show me new hires at dev-tool companies with 50+ employees.",
        duration: L.typeLong,
        sendLabel: "send-data-search",
        statusBefore: "Searching data",
        statusAfter: "Searching 100+ sources",
        fromEntry: !0
      },
      {
        kind: "thinking",
        label: "Searching hiring signals, headcount, and company data",
        hold: L.thinkingMedium
      },
      { kind: "dataTable", config: Go, at: "-=0.04" },
      {
        kind: "prompt",
        text: "Filter to the ones that have raised in the past three months.",
        duration: L.typeMedium,
        sendLabel: "send-data-filter",
        statusAfter: "Filtering by funding",
        at: `+=${L.beat}`
      },
      {
        kind: "thinking",
        label: "Checking rounds announced since February 2026",
        hold: L.thinkingShort
      },
      { kind: "dataTable", config: Uo, at: "-=0.04" },
      {
        kind: "prompt",
        text: "Okay, enrich these contacts.",
        duration: L.typeShort,
        sendLabel: "send-enrich-contacts",
        statusAfter: "Preparing enrichment",
        at: `+=${L.beat}`
      },
      { kind: "enrichmentPanel", config: jo, at: "+=0.12" },
      { kind: "status", text: "Contacts enriched", at: "+=0.86" },
      { kind: "dataTable", config: Xo, at: "-=0.02" },
      { kind: "marketingDataSourcesGrid", config: Yo, at: "+=0.44" },
      Jt(Nt.bottomRight, "+=3")
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
    build: (s) => {
      const e = s.chat.prepareCsvDropArea({
        title: "Drop business context files",
        detail: "Battle cards, playbooks, ICP notes, voice docs, and messaging context."
      }), t = s.chat.prepareCursorFile("4 context files", s.cursor, "DOC"), a = Q("[data-chat-shell]", "center", {
        desktop: { x: 0, y: 74 },
        tablet: { x: 0, y: 64 },
        mobile: { x: 0, y: 56 }
      });
      return Pt(s, [
        { kind: "status", text: "waiting for context" },
        { kind: "custom", build: () => t.startFollow(), at: "+=0.04" },
        { kind: "custom", build: () => e.revealWhenCursorEnters(s.cursor), at: "<" },
        {
          kind: "cursorDrag",
          target: a,
          options: { mode: "drag", speed: "slow", releaseHold: 0.34, label: "drag-context-files" },
          at: "<+=0.1"
        },
        { kind: "custom", build: () => e.activate(), at: "<+=0.02" },
        { kind: "custom", build: () => e.complete(), at: "-=0.18" },
        { kind: "custom", build: () => t.landAsUploadedFiles(Jo), at: "<" },
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
          at: `+=${L.beat}`
        },
        { kind: "custom", build: () => s.chat.outreachStyleProfile(Qo), at: "-=0.02" },
        {
          kind: "assistant",
          text: "Before drafting, I’ll calibrate which personalization patterns sound like you.",
          at: `+=${L.beat}`
        },
        {
          kind: "personalizationSwipeGame",
          config: Ko,
          at: "+=0.06"
        },
        { kind: "status", text: "Personalization rules learned", at: "+=0.12" },
        {
          kind: "prompt",
          text: "Write a sequence for consumer fintech founders.",
          duration: L.typeShort,
          sendLabel: "send-bad-icp-request",
          statusAfter: "Checking ICP fit",
          at: `+=${L.beat}`
        },
        { kind: "assistant", text: "Are you sure? this doesn't fit your ICP", at: "+=0.08" },
        {
          kind: "prompt",
          text: "Okay, generate leads ranked by how personally connected they are to us.",
          duration: L.typeMedium,
          sendLabel: "send-proximity-list",
          statusAfter: "Ranking proximity",
          at: `+=${L.beat}`
        },
        {
          kind: "thinking",
          label: "Scoring shared schools, fields of study, mutual contacts, and warm signals",
          hold: L.thinkingMedium
        },
        { kind: "custom", build: () => s.chat.proximityLeadList(Zo), at: "-=0.04" },
        Jt(Nt.bottomRight, "+=0.16")
      ]);
    }
  },
  {
    id: "research-brief",
    label: "Zero effort engagement",
    navLabel: "Zero effort engagement, built in",
    eyebrow: "Engagement engine",
    summary: "The assistant turns website visitor intent into a paginated list and engagement actions.",
    entry: Wi.researchBrief,
    entryLeadTime: Gi,
    build: (s) => {
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
      return Pt(s, [
        {
          kind: "prompt",
          text: "Show me 50 sales leaders that have recently visited my website.",
          duration: L.typeLong,
          sendLabel: "send-visitor-sales-list",
          statusBefore: "finding visitors",
          statusAfter: "building visitor list",
          fromEntry: !0
        },
        { kind: "dataTable", config: il, at: "-=0.02" },
        {
          kind: "cursorMove",
          target: e,
          options: { mode: "pointer", intent: "click", speed: "normal", label: "open-visitor-page-2" },
          at: "+=0.2"
        },
        { kind: "cursorClick", at: "-=0.02" },
        { kind: "custom", build: () => s.chat.dataTablePage("website-visitors-sales", 2), at: "-=0.03" },
        { kind: "status", text: "ready to engage", at: "+=0.1" },
        {
          kind: "custom",
          build: () => s.timeline().to({}, { duration: L.beat + 0.58 })
        },
        {
          kind: "cursorMove",
          target: t,
          options: { mode: "pointer", intent: "hover", speed: "slow", label: "hover-power-dialer" },
          at: "+=0.42"
        },
        { kind: "custom", build: () => s.chat.dataTableActionTooltip("website-visitors-sales", "power-dialer", !0) },
        { kind: "custom", build: () => s.timeline().to({}, { duration: L.beat + 1 }), at: "+=0.12" },
        { kind: "custom", build: () => s.chat.dataTableActionTooltip("website-visitors-sales", "power-dialer", !1), at: "<" },
        {
          kind: "cursorMove",
          target: a,
          options: { mode: "pointer", intent: "hover", speed: "slow", label: "hover-email-sequence" }
        },
        { kind: "custom", build: () => s.chat.dataTableActionTooltip("website-visitors-sales", "email-sequence", !0) },
        { kind: "cursorClick", at: "+=0.18" },
        { kind: "custom", build: () => s.chat.dataTableActionTooltip("website-visitors-sales", "email-sequence", !1), at: "<+=0.02" },
        { kind: "status", text: "building outreach sequence", at: "<" },
        { kind: "custom", build: () => s.chat.sequenceBuildThinking(el), at: "+=0.06" },
        { kind: "sequenceEngagement", config: $o, at: "-=0.02" },
        { kind: "custom", build: () => s.timeline().to({}, { duration: L.beat + 0.24 }), at: "+=0.04" },
        {
          kind: "cursorMove",
          target: i,
          options: { mode: "pointer", intent: "click", speed: "normal", label: "preview-evan-sequence" }
        },
        { kind: "cursorClick", at: "-=0.02" },
        { kind: "custom", build: () => s.chat.sequencePerson("visitor-outreach-sequences", 1), at: "-=0.03" },
        { kind: "custom", build: () => s.timeline().to({}, { duration: L.beat + 0.24 }), at: "+=0.04" },
        {
          kind: "cursorMove",
          target: i,
          options: { mode: "pointer", intent: "click", speed: "normal", label: "preview-clara-sequence" }
        },
        { kind: "cursorClick", at: "-=0.02" },
        { kind: "custom", build: () => s.chat.sequencePerson("visitor-outreach-sequences", 2), at: "-=0.03" },
        { kind: "custom", build: () => s.timeline().to({}, { duration: L.beat + 0.28 }), at: "+=0.04" },
        {
          kind: "cursorMove",
          target: r,
          options: { mode: "pointer", intent: "click", speed: "normal", label: "kickoff-visitor-sequence" }
        },
        { kind: "cursorClick", at: "-=0.02" },
        { kind: "custom", build: () => s.chat.sequenceKickoff("visitor-outreach-sequences"), at: "-=0.04" },
        { kind: "status", text: "sequence kicked off", at: "<" }
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
    build: (s) => {
      const e = s.chat.prepareCsvDropArea(), t = s.chat.prepareCursorFile("webinar_attendees.csv", s.cursor), a = Q("[data-chat-shell]", "center", {
        desktop: { x: 0, y: 82 },
        tablet: { x: 0, y: 72 },
        mobile: { x: 0, y: 64 }
      });
      return Pt(s, [
        { kind: "status", text: "waiting for CSV" },
        { kind: "custom", build: () => t.startFollow(), at: "+=0.04" },
        { kind: "custom", build: () => e.revealWhenCursorEnters(s.cursor), at: "<" },
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
          at: `+=${L.beat}`
        },
        { kind: "assistant", text: "I cleaned the attendee list and normalized the fields that matter for routing and follow-up." },
        { kind: "dataTable", config: rl, at: "-=0.04" },
        Jt(Nt.bottomRight, "+=0.18")
      ]);
    }
  }
], Qt = {
  radius: 48,
  sampleWindowMs: 900,
  minTravel: 34,
  minAxisReversals: 1
}, Qe = {
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
}, Kt = {
  durationMs: 920,
  pointIntervalMs: 155,
  radius: 24,
  smoothing: 0.2
}, Pa = {
  durationMs: 980,
  amplitude: 18,
  arriveDistance: 3.5
};
class nl {
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
      this.updateSniffTarget(e), this.target && this.cursor.mimicViewportPoint(this.target, Kt.smoothing, this.target), e - this.sniffStartedAt >= Kt.durationMs && this.startReturnAfterPause(), this.scheduleFollow();
      return;
    }
    if (this.mode === "return") {
      const t = this.getReturnHomePoint(), a = sl((e - this.returnStartedAt) / Pa.durationMs), i = this.getReturnWavePoint(a, t), r = this.getReturnWavePoint(Math.min(1, a + 0.035), t);
      if (this.target = t, this.cursor.mimicViewportPoint(i, 1, a < 1 ? r : t), a >= 1 || ct(this.getCursorViewportPoint(), t) <= Pa.arriveDistance) {
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
      }, this.velocity = dl(a, J.maxMomentumStep));
    }
    const t = {
      x: e.x - this.trailDirection.x * J.trailDistance,
      y: e.y - this.trailDirection.y * J.trailDistance
    };
    ct(e, t) < J.minPointerDistance && (t.x = e.x - this.trailDirection.x * J.minPointerDistance, t.y = e.y - this.trailDirection.y * J.minPointerDistance), this.target = t, this.pointer = e, this.lastPointer = e;
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
    const t = this.sniffIndex, a = t * 1.92, i = Kt.radius * (t % 2 === 0 ? 1 : 0.58);
    this.target = {
      x: this.sniffAnchor.x + Math.cos(a) * i,
      y: this.sniffAnchor.y + Math.sin(a) * i * 0.62
    }, this.sniffIndex += 1, this.nextSniffAt = e + Kt.pointIntervalMs;
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
    const a = this.returnStart ?? this.getCursorViewportPoint(), i = ol(e), r = t.x - a.x, n = t.y - a.y, o = Math.hypot(r, n), l = {
      x: a.x + r * i,
      y: a.y + n * i
    };
    if (o < 1) return l;
    const d = Math.sin(Math.PI * e), c = Math.sin(Math.PI * 2 * e) * d * Pa.amplitude * this.returnWaveDirection;
    return {
      x: l.x - n / o * c,
      y: l.y + r / o * c
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
    return ll(i, e) > J.maxBrowserDistance;
  }
  isPointNearStoryCursor(e, t = Qt.radius) {
    const a = this.root.getBoundingClientRect(), i = this.cursor.readPosition(), r = {
      x: a.left + i.x,
      y: a.top + i.y
    };
    return ct(e, r) <= t;
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
    this.samples = this.samples.filter((t) => e - t.time <= Qt.sampleWindowMs);
  }
  trackDismissShake(e, t) {
    this.dismissSamples.push({ ...e, time: t }), this.dismissSamples = this.dismissSamples.filter((a) => t - a.time <= Qe.sampleWindowMs);
  }
  hasMimicGesture() {
    return this.samples.length < 4 ? !1 : this.samples.reduce((t, a, i) => {
      const r = this.samples[i - 1];
      return r ? t + ct(a, r) : t;
    }, 0) >= Qt.minTravel && this.countAxisReversals(this.samples) >= Qt.minAxisReversals;
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
      return u ? l + ct(d, u) : l;
    }, 0), n = ct(t, a), o = r / Math.max(n, 1);
    return i >= Qe.minDurationMs && r >= Qe.minTravel && n <= Qe.maxNetDistance && r / i >= Qe.minAverageSpeed && o >= Qe.minTravelToNetRatio && this.countAxisReversals(e) >= Qe.minAxisReversals;
  }
  countAxisReversals(e) {
    let t = 0, a = 0, i = 0;
    for (let r = 1; r < e.length; r += 1) {
      const n = e[r - 1], o = e[r], l = Yi(o.x - n.x), d = Yi(o.y - n.y);
      l && a && l !== a && (t += 1), d && i && d !== i && (t += 1), l && (a = l), d && (i = d);
    }
    return t;
  }
}
function ct(s, e) {
  return Math.hypot(e.x - s.x, e.y - s.y);
}
function sl(s) {
  return Math.min(1, Math.max(0, s));
}
function ol(s) {
  return -(Math.cos(Math.PI * s) - 1) / 2;
}
function ll(s, e) {
  const t = Math.max(e.left - s.x, 0, s.x - e.right), a = Math.max(e.top - s.y, 0, s.y - e.bottom);
  return Math.hypot(t, a);
}
function dl(s, e) {
  const t = Math.hypot(s.x, s.y);
  return t <= e || t === 0 ? s : {
    x: s.x / t * e,
    y: s.y / t * e
  };
}
function Yi(s) {
  return Math.abs(s) < 2 ? 0 : Math.sign(s);
}
const cl = {
  minPixelDelta: 0.5
};
class ul {
  constructor(e, t, a, i, r, n) {
    this.root = e, this.stories = t, this.resolver = a, this.cursor = i, this.chat = r, this.options = n, this.storyProgress = this.stories.map(() => 0), this.pausedCursorMimic = new nl(this.root, this.cursor, {
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
    }), o = a.build(i), l = a.entryLeadTime ?? 0.24;
    return r.add(n, 0), o.pause(0), r.add(o, Math.max(0, n.duration() - l)), o.paused(!1), this.chat.prepareStoryStart(), r;
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
    const a = pl(e), i = this.activeTimeline.duration();
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
    const o = document.createElement("span");
    if (o.className = "wa-story-tab__title", o.textContent = e.navLabel ?? e.label, n.append(o), e.navDescription) {
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
      if (Math.abs(r) < cl.minPixelDelta) return;
      const n = this.getThreadMaxScroll(t);
      if (n <= 0 || !(r < 0 || this.historyPaused)) return;
      const l = Kr(t.scrollTop + r, 0, n);
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
function Kr(s, e, t) {
  return Math.min(t, Math.max(e, s));
}
function pl(s) {
  return Kr(s, 0, 1);
}
const Zt = ["mobile", "tablet", "desktop", "wide"];
class hl {
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
    let o = this.anchorPoint(n, a.anchor ?? "center");
    if (o = {
      x: o.x - i.left,
      y: o.y - i.top
    }, a.outside && (o = this.outsidePoint(o, n, i, a.outside)), a.humanOffset) {
      const l = jr(t), d = Math.min(n.width * 0.18, 18), c = Math.min(n.height * 0.18, 14);
      o.x += (l() - 0.5) * d, o.y += (l() - 0.5) * c;
    }
    return {
      x: o.x + (a.offset?.x ?? 0),
      y: o.y + (a.offset?.y ?? 0)
    };
  }
  getRootRect() {
    return this.rootRect || this.refresh(), this.rootRect;
  }
  pickTarget(e) {
    if (this.isBreakpointMap(e)) {
      const t = this.getBreakpoint(), a = Zt.indexOf(t), i = [
        t,
        ...Zt.slice(0, a).reverse(),
        ...Zt.slice(a + 1)
      ];
      for (const r of i)
        if (e[r]) return e[r];
      return {};
    }
    return e;
  }
  isBreakpointMap(e) {
    return Zt.some((t) => t in e);
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
    const r = t.left - a.left, n = t.right - a.left, o = t.top - a.top, l = t.bottom - a.top;
    switch (i) {
      case "left":
        return { ...e, x: r - 42 };
      case "right":
        return { ...e, x: n + 42 };
      case "top":
        return { ...e, y: o - 42 };
      case "bottom":
        return { ...e, y: l + 42 };
      default:
        return e;
    }
  }
}
function ml(s, e = {}) {
  if (s.classList.add("wa-section"), s.querySelector("[data-chat-shell]")) return;
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
  s.innerHTML = `
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
                <svg class="wa-signup-scene__logo" width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                  <path d="M5.71835 3.84074V0H0V5.12789C0 7.97387 2.13981 10.9988 6.10463 10.9988H8.4998V5.49938L7.40298 5.48406C6.46808 5.4708 5.71706 4.7386 5.71706 3.8395L5.71835 3.84074Z" fill="#FE3C01"/>
                  <path d="M11.2814 7.15899V10.9997H16.9998V5.87225C16.9998 3.02586 14.86 0.000976562 10.8952 0.000976562H8.5V5.50036L9.59682 5.51568C10.5317 5.52893 11.2827 6.26113 11.2827 7.16023L11.2814 7.15899Z" fill="#FE3C01"/>
                </svg>
                <h3 class="wa-signup-scene__title">sign up</h3>
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
function gl(s, e = {}) {
  ml(s, { showBuilder: e.showBuilder !== !1 });
  const t = e.stories?.length ? e.stories : Qr, a = new hl(s), i = new Ps(s), r = new Ls(s, a, {
    reducedMotion: e.reducedMotion ?? window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? !1
  }), n = new ul(s, t, a, r, i, {
    autoplay: e.autoplay ?? !0,
    loop: e.loop ?? !0,
    autoAdvanceDelay: e.autoAdvanceDelay ?? 3.2,
    initialStory: e.initialStory ?? 0,
    onStoryChange: e.onStoryChange
  }), o = n.destroy.bind(n), l = e.showBuilder === !1 ? null : new Gs(s, t, {
    onStorySelect: (d) => n.goTo(d),
    draftEndpoint: e.builderDraftEndpoint,
    draftAutoSave: e.builderDraftAutoSave
  });
  return n.mount(), l?.mount(), {
    play: n.play.bind(n),
    pause: n.pause.bind(n),
    next: n.next.bind(n),
    previous: n.previous.bind(n),
    goTo: n.goTo.bind(n),
    getState: n.getState.bind(n),
    destroy: () => {
      l?.destroy(), o(), i.destroy(), r.destroy();
    }
  };
}
const fl = ':root{--wa-page-bg: #fffff9}html,body{margin:0;background:var(--wa-page-bg)}.wa-section,.wa-section *{box-sizing:border-box}.wa-section,.wa-section[data-theme=light]{--wa-font-sans: "Saans", "Avenir Next", Helvetica, sans-serif;--wa-font-feature: "Feature Text", Georgia, serif;--wa-bg: #fffff9;--wa-panel: #fffff9;--wa-panel-transparent: rgba(255, 255, 249, 0);--wa-ink: #252521;--wa-muted: #11110f;--wa-soft: #dcdcd4;--wa-browser-line: #d7d7cf;--wa-orange: #f23b0a;--wa-red: #f16055;--wa-yellow: #f6ba42;--wa-green: #58bd59;--wa-color-bg: var(--wa-bg);--wa-color-panel: var(--wa-panel);--wa-color-text: var(--wa-ink);--wa-color-heading: var(--wa-ink);--wa-color-heading-strong: #070707;--wa-color-copy: #171714;--wa-color-muted: #5e5c56;--wa-color-accent: var(--wa-orange);--wa-color-inverse: #fffff9;--wa-color-dark-surface: #171714;--wa-color-soft-surface: #f5f4ed;--wa-color-user-message: #ecebe5;--wa-color-input-line: #d9d8d1;--wa-color-positive: #177947;--wa-color-warning: #b44927;--wa-line-08: rgba(23, 23, 20, .08);--wa-line-10: rgba(23, 23, 20, .1);--wa-line-12: rgba(23, 23, 20, .12);--wa-line-16: rgba(23, 23, 20, .16);--wa-line-20: rgba(23, 23, 20, .2);--wa-placeholder: rgba(23, 23, 20, .38);--wa-browser-bar-bg: rgba(255, 255, 249, .96);--wa-window-highlight: rgba(255, 255, 255, .86);--wa-window-hairline: rgba(0, 0, 0, .03);--wa-card-accent-bg: rgba(242, 59, 10, .13);--wa-row-bg: rgba(245, 244, 237, .82);--wa-cursor-shadow: rgba(0, 0, 0, .12);--wa-media-warm-1: rgba(255, 139, 77, .32);--wa-media-warm-2: rgba(58, 20, 18, .78);--wa-media-warm-3: rgba(8, 6, 6, .24);--wa-media-warm-4: rgba(131, 49, 38, .86);--wa-media-line: rgba(255, 255, 249, .1);--wa-media-base-1: #1a0908;--wa-media-base-2: #6b2820;--wa-media-base-3: #24100d;--wa-media-shadow: 0 44px 96px rgba(24, 20, 16, .18);--wa-window-shadow: 0 52px 42px rgba(31, 30, 26, .22);--wa-card-shadow: 0 10px 28px rgba(23, 23, 20, .08);--wa-section-padding: 126px 32px 140px;--wa-content-max: 1400px;--wa-copy-max: 1100px;--wa-left-column: minmax(420px, 570px);--wa-right-column: minmax(560px, 660px);--wa-column-gap: 116px;--wa-row-gap: 82px;--wa-stage-width: 660px;--wa-stage-min-height: 650px;--wa-media-width: 418px;--wa-media-height: 720px;--wa-window-width: 590px;--wa-window-height: 530px;--wa-chat-x-padding: 19px;--wa-chat-entry-gap: 16px;--wa-chat-top-fade: 56px;--wa-chat-bottom-clearance: 110px;--wa-chat-first-entry-offset: calc(var(--wa-chat-top-fade) + 18px);--wa-ai-message-max-width: 540px;--wa-user-message-max-width: 360px;--wa-chat-message-weight: 430;--wa-chat-thinking-weight: 440;--wa-chat-detail-weight: 410;--wa-composer-outset-x: 34px;--wa-composer-bottom-outset: 24px;--wa-composer-height: 56px;--wa-composer-send-size: 40px;--wa-history-resume-height: 42px;--wa-cursor-default-width: 14px;--wa-cursor-default-height: 23px;--wa-title-size: clamp(38px, 3vw, 54px);--wa-title-line-height: 1.12;--wa-feature-title-size: clamp(25px, 1.7vw, 34px);--wa-feature-copy-size: clamp(16px, 1vw, 20px);--wa-radius-sm: 8px;--wa-radius-window: 18px;--wa-story-progress: 0;--wa-cursor-arrow-head: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAYAAADeB1slAAABP0lEQVR42t3XwXGEIBQG4NeBR49uB6QDSqAEtgPSAXvMzXTglpAOSAeWgB2wHbwMGTQq7gL6vOSfQR2HeZ+IOgiICIh4QcS3cEza/OaKf/k6A/jGZe6nANZadM6RIxPAOUfGGDmyAACAHIkAamQToESeAlTIS4ACSQJHkSzgCJIN7EWKgD1IMVCK7AJKkN1ALnIIyEEOAymEBNhAPskB33yNkMcpAPyWm0IPaK1pRmCMwURu2UBd19E5KeWzwo958SQghMBhGGArzrljX9PZVYKUMgK01mWAUmoq3rbt4mkwxkRA0zTZwPtYyU9e3/fz4h9jR8ZYhHRdlwVAeL3Xuc47+mLrcM6zAQir61sY0WXd0U9qVVURYq3NBpJNKRUB/gEgA/zVlt6m4oWUEOK8EYxzMSJ+n3rh4Izfpv8F/ADB/dNnKnKg1wAAAABJRU5ErkJggg==);--wa-cursor-arrow-tail: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAYAAADeB1slAAABSUlEQVR42t3X3XGEIBAHcDrw3nw0HVAC6YASSAekA+3AdOB1wnWgHWAHXAdkljkyRPxAFvOQnXF8UP8/XHAGibWWXHmQ/wNorYkx5jqAMUYopcWRXwBUaSQCSiOrQElkEyiF7AIlkEMAiyQBGCQZyEVOATnIaeAskgWcQbKBVAQFpCBo4AgpAuwhxQAoyLgUgCoF2LWjbVv7qmcu4IKUUvagumSgruto1EKIreBnGH4IcM7JPM+r7TDG+NCPrA9NCOGvuRHv9PuRBEgpf8L7vg9vcj1fAk3ThK15S9rZKaXIOI7Lm1xRSiNkGAZ/+Y7ZOsLDLmwJMMbCyb3lAu+QAJNaVVWEaK098onZ/E6QIKWMgGDJPjAALEU32p02Wez2HfpsOedbbzBhgc7PhUfgHHxwHRa4+blYqQmzipbI3bfrFfy1Ff4nv1DfGYDdsG+uObgAAAAASUVORK5CYII=);--wa-cursor-arrow: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAYAAADeB1slAAABXElEQVRIx7XWTZWDMBAA4DigN47UAeuAdYAEcEAdwHFv1AGVsA7AATgAB9RBlulL2AAhv8O8N23awnzNHy+EUkqWvC/5xdqoCS85/Y/fK4CObuN1CTCOI53nGR1ZgSRJaBzH6MgGIMtHbOQAYCNSABM5BbAQJYCBaAFfxAjwQYwBV8QKcEGsAVvECbBBnAFTxAswQbwBHYICSJAnOgAJNVi8LwHIp9wa+EBZljg9aNuWaqIyBsIwPHyXZdlZ4bdYXAukaUqnaZLCworJnR4V4r+EtmK8OyOgKIr15rquN/2GMd8DURSJl9xVwEMs1Pe9eOMPb8BG2iNN0xg97Ai7YB+5+BsU02ysmwog7HRdsR6JXf6GCjCpQRAcEDhysnjoAFUO+3mSLIbOB8j5AVkxTNQHIGycP3vjpAeDL1DxueAIvAsbrvIFbnwuJDGYrCJT5MWHixV+nhV3AazzD2y9OM7DgeyVAAAAAElFTkSuQmCC);--wa-cursor-hand: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABY2lDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokX2QsUvDUBDGv1aloHUQHRwcMolDlJIKuji0FURxCFXB6pS+pqmQxkeSIgU3/4GC/4EKzm4Whzo6OAiik+jm5KTgouV5L4mkInqP435877vjOCA5bnBu9wOoO75bXMorm6UtJfWMBL0gDObxnK6vSv6uP+P9PvTeTstZv///jcGK6TGqn5QZxl0fSKjE+p7PJe8Tj7m0FHFLshXyieRyyOeBZ71YIL4mVljNqBC/EKvlHt3q4brdYNEOcvu06WysyTmUE1jEDjxw2DDQhAId2T/8s4G/gF1yN+FSn4UafOrJkSInmMTLcMAwA5VYQ4ZSk3eO7ncX3U+NtYMnYKEjhLiItZUOcDZHJ2vH2tQ8MDIEXLW54RqB1EeZrFaB11NguASM3lDPtlfNauH26Tww8CjE2ySQOgS6LSE+joToHlPzA3DpfAEDp2ITpJYOWwAAAARjSUNQDA0AAW4D4+8AAACyZVhJZk1NACoAAAAIAAQBMQACAAAAGAAAAD4BMgACAAAAGgAAAFYBOwACAAAAIwAAAHCHaQAEAAAAAQAAAJQAAAAAQWRvYmUgUERGIGxpYnJhcnkgMTcuMDAAMjAyNS0wMi0xNCAwNTo0MTo0NCArMDAwMABBZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAAAljtskAAACQGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDxkYzpjcmVhdG9yPgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaT5BZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC9kYzpjcmVhdG9yPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBERiBsaWJyYXJ5IDE3LjAwPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgp5+ZGuAAACK0lEQVRYCWNgGAWjITAaAkMwBHKBbv4ExCeBWIhS9zOTYcDuHz9+vH779u23M2fO/AHqP0OGGXAtLHAW8Qw+dnZ2Ni0trSdALXzEa8Oukgm7MP1EKXWAINCpcpQ4lyIHCAsLp4mIiJwHOqAciNWAmJVUxxDrAGWgwezohq9bt+7S7du3nzIzM7eqqKjsBcofB2JQqBANiHHALCkpqWNsbGygbIfhCA4gMDIyugt0iIyBgYEAExPTa6C6xUDMSIwriHGA8507d96vWrXqPdDACKihjJaWlkyqqqpcQAtZgG74CxIXEhL68eLFi4umpqZmQK4/VC3F1OJDhw4d+Pfv3zteXt6jQNP+A8F3EAEDQLk3IDbQoceB1MdNmzbtB6rrpdhmqAEeTk5Ol0EWdHZ2HsTmAJAcMjh16tQhoLpF1HIAqLB6+evXrwe/f/9+PHny5APIlmFjA0tIkANA6YBqYPKaNWv2Y7MMm9jevXsPAG2eQYztxCRCkDlL6+rqFID0fxCHELh79y5I3TNC6kiVv/T48eNT2HyMLgbMlreBhruRagEh9YE6Ojr3gJZ9QrcQmf/o0aMTQIMeAzEzIQPJkZ/v4+Nz4e/fvy+RLYWxgVX0BVFRUVBB5EqO4cToAfmqn4+P70Nra+uhixcvHr53797xI0eOHExISDgFLJLfAuUDiTEIpoao4hKmGInWBLKjgFgfiDmB+DkQg+qB5UD8AYhHwWgIjIYA0SEAALLUdbtDe5+9AAAAAElFTkSuQmCC);--wa-cursor-ibeam: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAYAAAArdgcFAAABY2lDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokX2QsUvDUBDGv1aloHUQHRwcMolDlJIKuji0FURxCFXB6pS+pqmQxkeSIgU3/4GC/4EKzm4Whzo6OAiik+jm5KTgouV5L4mkInqP435877vjOCA5bnBu9wOoO75bXMorm6UtJfWMBL0gDObxnK6vSv6uP+P9PvTeTstZv///jcGK6TGqn5QZxl0fSKjE+p7PJe8Tj7m0FHFLshXyieRyyOeBZ71YIL4mVljNqBC/EKvlHt3q4brdYNEOcvu06WysyTmUE1jEDjxw2DDQhAId2T/8s4G/gF1yN+FSn4UafOrJkSInmMTLcMAwA5VYQ4ZSk3eO7ncX3U+NtYMnYKEjhLiItZUOcDZHJ2vH2tQ8MDIEXLW54RqB1EeZrFaB11NguASM3lDPtlfNauH26Tww8CjE2ySQOgS6LSE+joToHlPzA3DpfAEDp2ITpJYOWwAAAARjSUNQDA0AAW4D4+8AAACyZVhJZk1NACoAAAAIAAQBMQACAAAAGAAAAD4BMgACAAAAGgAAAFYBOwACAAAAIwAAAHCHaQAEAAAAAQAAAJQAAAAAQWRvYmUgUERGIGxpYnJhcnkgMTcuMDAAMjAyNS0wMi0yMSAyMjo0Nzo0MyArMDAwMABBZG9iZSBJbGx1c3RyYXRvciAyOS4wIChNYWNpbnRvc2gpAAAAAqACAAQAAAABAAAAF6ADAAQAAAABAAAAFgAAAABjOXNcAAACQGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDxkYzpjcmVhdG9yPgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaT5BZG9iZSBJbGx1c3RyYXRvciAyOS4wIChNYWNpbnRvc2gpPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC9kYzpjcmVhdG9yPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBERiBsaWJyYXJ5IDE3LjAwPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpTAn2BAAABF0lEQVQ4Ee2Vu26DQBBF7QjnL2KIW+iAys7DXwRtksofB/QUPGpHiiMBFbiDmztWIjkysjBbpIiRrnZnd+bsMtLsTCZ/+QEwqAdqJveQkVpSc6V7EXDfNM0+DEN0XbejvWnbdhcEAeq63tM2Rh/A4Oc0TWGaJlzXRRzHcBwHlmUhyzJu40kFPiXgjXr3PA+apsH3fYFuqdfR4ONAgvSiKMA1lGUp8LvjfeW5EAX+PQ7i3QzyGul0hfcm7pqW/5gWVqXOsj/8elVVUqbq5U/IuYfrpTfRQxcJXydJ8uvJtW378OTmec5tPA5lnfgxeCFNIYoiaRYftKVZfIrNJtLQNk6CLlkgQKekrf20uVvOV5Ram7vkEn2+X1iD5YNPxBZmAAAAAElFTkSuQmCC);--wa-cursor-openhand: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABY2lDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokX2QsUvDUBDGv1aloHUQHRwcMolDlJIKuji0FURxCFXB6pS+pqmQxkeSIgU3/4GC/4EKzm4Whzo6OAiik+jm5KTgouV5L4mkInqP435877vjOCA5bnBu9wOoO75bXMorm6UtJfWMBL0gDObxnK6vSv6uP+P9PvTeTstZv///jcGK6TGqn5QZxl0fSKjE+p7PJe8Tj7m0FHFLshXyieRyyOeBZ71YIL4mVljNqBC/EKvlHt3q4brdYNEOcvu06WysyTmUE1jEDjxw2DDQhAId2T/8s4G/gF1yN+FSn4UafOrJkSInmMTLcMAwA5VYQ4ZSk3eO7ncX3U+NtYMnYKEjhLiItZUOcDZHJ2vH2tQ8MDIEXLW54RqB1EeZrFaB11NguASM3lDPtlfNauH26Tww8CjE2ySQOgS6LSE+joToHlPzA3DpfAEDp2ITpJYOWwAAAARjSUNQDA0AAW4D4+8AAACyZVhJZk1NACoAAAAIAAQBMQACAAAAGAAAAD4BMgACAAAAGgAAAFYBOwACAAAAIwAAAHCHaQAEAAAAAQAAAJQAAAAAQWRvYmUgUERGIGxpYnJhcnkgMTcuMDAAMjAyNS0wMi0yMCAxNzoyNTozNyArMDAwMABBZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAAA8V+2fAAACQGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDxkYzpjcmVhdG9yPgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaT5BZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC9kYzpjcmVhdG9yPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBERiBsaWJyYXJ5IDE3LjAwPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgp5+ZGuAAACyElEQVRYCe2Vy2saURTG76hoxvcjLYSWLoKRarVIA6HZFUtJa3bBdFdcSFYuusqi4Lalu4p05cb2P1C6KCW07qQkCKkv3IgurNESBRPHKb5uvxlqcRGswUmh4IWDM3Ou5/vd7547Q8hiLBxYOPCfO2AH/0OE7F+tQw4hN0KDeKBWqzurq6tnOp3uHe6XEdsIA+JqBoQ+ILoQPpHJZG9CodCoXC5T3LdYlj1xOBxt5EtQV8xKcCnrOI57XK1WWY/Hox2NRj6NRsMoFArS7XZNcILN5/N6wFyD+I0rAcDqGrVajWxtbWkhcJNhGEIpFbU2NzdVw+GQnJ6eqgEWB0gDiUd/A7mUAyqVqlAsFsnGxoZYVwCAE+L1+vr6UqlUIoCQ7+zs2MPh8HWz2fxKCgAlitxGyDqdzlcAULfbTeRy+RB98McBl8tFCoWCqLe/v68ymUwEgM15AZb0en0R+3toMBhS2Otvx8fHnFKpJHa7nZ90wOl0EvTACHM7Akwmkxm22+3DeQGs2MtlWKtbW1u7g2LObDY7EIp6vV4WFhPkCcQpAEkulxsEAgFWyB8dHXGDwSAvXM8zFDheLayGoiBFE/7A/U803oUjlUrRVqsl5lZWVtoQds0jLv4Xdr/c29vjhao+n4/DQ9poNC4EGD/keZ6iP/qYq5obAAVuYdU8GpDW63UaDAZ7gsC0kU6nqVar/S6FuFgD1n+ORqOjaaKTuVgsRtG8nyQDQKFtq9V6Niky7drv9wtb9UJKAAZvt3I8Hp+mK+Z6vZ7QrF2I35USQKj1xGKxcM1mcypEJBIZAjYttbhYD8341maznVcqlQshDg4OKF7Xgv33ZgVgZp34ex6DY/ka6s93d3cH+CpqjEYjwbEkiUTiPJlMMv1+/ynmfpy17mUBxnWFb8MzWH0f512HD1ADr+kvePYe0RpPWvwuHFg4MIsDvwAylvevmzFHiwAAAABJRU5ErkJggg==);--wa-cursor-closedhand: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABY2lDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokX2QsUvDUBDGv1aloHUQHRwcMolDlJIKuji0FURxCFXB6pS+pqmQxkeSIgU3/4GC/4EKzm4Whzo6OAiik+jm5KTgouV5L4mkInqP435877vjOCA5bnBu9wOoO75bXMorm6UtJfWMBL0gDObxnK6vSv6uP+P9PvTeTstZv///jcGK6TGqn5QZxl0fSKjE+p7PJe8Tj7m0FHFLshXyieRyyOeBZ71YIL4mVljNqBC/EKvlHt3q4brdYNEOcvu06WysyTmUE1jEDjxw2DDQhAId2T/8s4G/gF1yN+FSn4UafOrJkSInmMTLcMAwA5VYQ4ZSk3eO7ncX3U+NtYMnYKEjhLiItZUOcDZHJ2vH2tQ8MDIEXLW54RqB1EeZrFaB11NguASM3lDPtlfNauH26Tww8CjE2ySQOgS6LSE+joToHlPzA3DpfAEDp2ITpJYOWwAAAARjSUNQDA0AAW4D4+8AAACyZVhJZk1NACoAAAAIAAQBMQACAAAAGAAAAD4BMgACAAAAGgAAAFYBOwACAAAAIwAAAHCHaQAEAAAAAQAAAJQAAAAAQWRvYmUgUERGIGxpYnJhcnkgMTcuMDAAMjAyNS0wMi0yMCAxNzoxODoxNyArMDAwMABBZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAAALcJCvAAACQGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDxkYzpjcmVhdG9yPgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaT5BZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC9kYzpjcmVhdG9yPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBERiBsaWJyYXJ5IDE3LjAwPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgp5+ZGuAAAB5ElEQVRYCe1UP2vqUBy9Jv6NURAe2FE7CuKbpG46tltxcHhDR7+CSFf3fgChS6lTcXEUVCgoCNKxRazDez6KiLymNCYx5vakaCltaW5Ly1vuD37k5ubcc07OvQkhvHgCPAGeAE+AJ/CfExA/ob+NNQdoTyQSOQyHwxXTNIXVarWFuR30FdpEf0v5AoHATT6fv/f5fItUKqW0223q9Xr1WCympNPpO1mWz75FGaQhdBHCGkWVSiWtXC7r9jiTyejNZpP2ej0qCIIBQ4rf7z/+SiMyCH9D6BYJrIbDoa37qlqtFk0kEnq/36cwqsOA9FUm9pPJ5D9bMZfLmbVa7ZX4ywmPx2MbEJwMuJ0A6+c/UNQeVyoVMRqNvrtsPp8TURSN5XJpvQvEQ1YDs8lk8siFbXDiJIPBgGCrrjVNc8Q6RrRmuBiNRrKiKI6ENgBnwVRV9ZwJzArCIbysVqvWy71+6z4ej9tOd1m5WXH7oVBInc1mb2k+zdXrdSpJ0h+Qsm4vqz4h+L5P8XZ34/H4SfD5oNvt0mAwqIJxj5XVxQpc4wSc7iOXy1UsFApmNpuV8Ocj0+mUNBoNpdPpuA3DKAJ7wsr7UQMb3p8Y/MJJT+PPF7As6+9isehgroa+2YD4lSfAE2BJ4AH/finPJ7GZOAAAAABJRU5ErkJggg==);position:relative;isolation:isolate;min-height:100svh;overflow:hidden;padding:var(--wa-section-padding);color:var(--wa-color-text);font-family:var(--wa-font-sans);letter-spacing:0;background:var(--wa-bg)}.wa-section[data-theme=dark]{--wa-bg: #10100d;--wa-panel: #191914;--wa-panel-transparent: rgba(25, 25, 20, 0);--wa-ink: #f7f4ea;--wa-muted: #f7f4ea;--wa-soft: #49473f;--wa-browser-line: #3d3b34;--wa-color-bg: var(--wa-bg);--wa-color-panel: var(--wa-panel);--wa-color-text: var(--wa-ink);--wa-color-heading: var(--wa-ink);--wa-color-heading-strong: #fffdf3;--wa-color-copy: #d9d4c8;--wa-color-muted: #aaa396;--wa-color-inverse: #10100d;--wa-color-dark-surface: #f7f4ea;--wa-color-soft-surface: #25241f;--wa-color-input-line: #504d45;--wa-line-08: rgba(255, 253, 243, .08);--wa-line-10: rgba(255, 253, 243, .1);--wa-line-12: rgba(255, 253, 243, .12);--wa-line-16: rgba(255, 253, 243, .16);--wa-line-20: rgba(255, 253, 243, .2);--wa-placeholder: rgba(255, 253, 243, .38);--wa-browser-bar-bg: rgba(25, 25, 20, .96);--wa-window-highlight: rgba(255, 253, 243, .08);--wa-window-hairline: rgba(0, 0, 0, .24);--wa-card-accent-bg: rgba(242, 59, 10, .2);--wa-row-bg: rgba(255, 253, 243, .06);--wa-media-shadow: 0 44px 96px rgba(0, 0, 0, .38);--wa-window-shadow: 0 52px 42px rgba(0, 0, 0, .42);--wa-card-shadow: 0 10px 28px rgba(0, 0, 0, .24)}@media(prefers-color-scheme:dark){.wa-section[data-theme=system]{--wa-bg: #10100d;--wa-panel: #191914;--wa-panel-transparent: rgba(25, 25, 20, 0);--wa-ink: #f7f4ea;--wa-muted: #f7f4ea;--wa-soft: #49473f;--wa-browser-line: #3d3b34;--wa-color-bg: var(--wa-bg);--wa-color-panel: var(--wa-panel);--wa-color-text: var(--wa-ink);--wa-color-heading: var(--wa-ink);--wa-color-heading-strong: #fffdf3;--wa-color-copy: #d9d4c8;--wa-color-muted: #aaa396;--wa-color-inverse: #10100d;--wa-color-dark-surface: #f7f4ea;--wa-color-soft-surface: #25241f;--wa-color-user-message: #2d2b26;--wa-color-input-line: #504d45;--wa-line-08: rgba(255, 253, 243, .08);--wa-line-10: rgba(255, 253, 243, .1);--wa-line-12: rgba(255, 253, 243, .12);--wa-line-16: rgba(255, 253, 243, .16);--wa-line-20: rgba(255, 253, 243, .2);--wa-placeholder: rgba(255, 253, 243, .38);--wa-browser-bar-bg: rgba(25, 25, 20, .96);--wa-window-highlight: rgba(255, 253, 243, .08);--wa-window-hairline: rgba(0, 0, 0, .24);--wa-card-accent-bg: rgba(242, 59, 10, .2);--wa-row-bg: rgba(255, 253, 243, .06);--wa-media-shadow: 0 44px 96px rgba(0, 0, 0, .38);--wa-window-shadow: 0 52px 42px rgba(0, 0, 0, .42);--wa-card-shadow: 0 10px 28px rgba(0, 0, 0, .24)}}.wa-section button,.wa-section input,.wa-section textarea,.wa-section select{font:inherit}.wa-section textarea{resize:none}.wa-section__inner{position:relative;z-index:1;display:grid;grid-template-columns:var(--wa-left-column) var(--wa-right-column);grid-template-rows:auto auto;column-gap:var(--wa-column-gap);row-gap:var(--wa-row-gap);align-items:start;width:min(var(--wa-content-max),100%);margin:0 auto}.wa-copy{grid-column:1 / -1;max-width:var(--wa-copy-max)}.wa-copy__title{display:block;margin:0;color:var(--wa-color-heading);font-family:var(--wa-font-sans);font-size:var(--wa-title-size);line-height:var(--wa-title-line-height);font-weight:520;letter-spacing:0}.wa-copy__title>span{display:block}.wa-copy__title em{color:var(--wa-orange);font-style:normal}.wa-story-controls{grid-column:1;grid-row:2;display:grid;gap:22px;padding-top:4px}.wa-story-tabs{display:grid;gap:33px}.wa-story-tab{--wa-tab-progress: 0;display:grid;grid-template-columns:4px minmax(0,1fr);gap:30px;align-items:start;width:100%;min-height:80px;padding:0;border:0;color:var(--wa-color-heading-strong);background:transparent;text-align:left;cursor:pointer}.wa-story-tab__marker{position:relative;display:block;width:4px;min-height:80px;overflow:hidden;background:var(--wa-soft)}.wa-story-tab__marker:before{content:"";position:absolute;inset:0;background:var(--wa-soft);transform:scaleY(var(--wa-tab-progress));transform-origin:top;transition:transform .12s linear;will-change:transform}.wa-story-tab.is-active .wa-story-tab__marker:before{background:var(--wa-color-accent)}.wa-story-tab__body{display:grid;gap:24px;padding-top:18px}.wa-story-tab__title{color:var(--wa-color-heading-strong);font-size:var(--wa-feature-title-size);line-height:1.08;font-weight:520;letter-spacing:0}.wa-story-tab__description{max-width:520px;color:var(--wa-color-copy);font-size:var(--wa-feature-copy-size);line-height:1.25;font-weight:450}.wa-story-tab:not(.is-active) .wa-story-tab__description{display:none}.wa-controls-row{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}.wa-stage{position:relative;grid-column:2;grid-row:2;width:var(--wa-stage-width);min-height:var(--wa-stage-min-height)}.wa-stage__media{position:absolute;top:-38px;right:-128px;width:var(--wa-media-width);height:var(--wa-media-height);border-radius:3px;background:linear-gradient(66deg,var(--wa-media-warm-1),transparent 24%),linear-gradient(124deg,var(--wa-media-warm-2),var(--wa-media-warm-3) 42%,var(--wa-media-warm-4)),repeating-linear-gradient(114deg,var(--wa-media-line) 0 2px,transparent 2px 46px),linear-gradient(18deg,var(--wa-media-base-1),var(--wa-media-base-2) 58%,var(--wa-media-base-3));box-shadow:var(--wa-media-shadow);opacity:.84;pointer-events:none}.wa-window{position:relative;z-index:2;width:var(--wa-window-width);margin:108px 0 0 155px;border-radius:var(--wa-radius-window);box-shadow:var(--wa-window-shadow)}.wa-chat-shell{position:relative;display:grid;grid-template-rows:auto minmax(0,1fr);height:var(--wa-window-height);overflow:visible;border:1px solid var(--wa-browser-line);border-radius:var(--wa-radius-window);background:var(--wa-panel);background-clip:padding-box;box-shadow:0 1px 0 var(--wa-window-highlight) inset,0 0 0 1px var(--wa-window-hairline)}.wa-chat-shell__bar{--wa-browser-tab-left: 90px;--wa-browser-tab-width: 100px;position:relative;display:flex;align-items:center;height:48px;padding:0 18px;border-bottom:0;border-radius:calc(var(--wa-radius-window) - 1px) calc(var(--wa-radius-window) - 1px) 0 0;background:var(--wa-browser-bar-bg);overflow:hidden}.wa-chat-shell__bar:after{content:"";position:absolute;right:0;bottom:0;left:0;height:1px;background:linear-gradient(to right,var(--wa-browser-line) 0,var(--wa-browser-line) var(--wa-browser-tab-left),transparent var(--wa-browser-tab-left),transparent calc(var(--wa-browser-tab-left) + var(--wa-browser-tab-width)),var(--wa-browser-line) calc(var(--wa-browser-tab-left) + var(--wa-browser-tab-width)),var(--wa-browser-line) 100%);pointer-events:none}.wa-chat-shell__lights{display:flex;gap:8px;align-items:center}.wa-chat-shell__lights span{width:12px;height:12px;border-radius:999px;background:var(--wa-red)}.wa-chat-shell__lights span:nth-child(2){background:var(--wa-yellow)}.wa-chat-shell__lights span:nth-child(3){background:var(--wa-green)}.wa-chat-shell__tab{position:absolute;left:var(--wa-browser-tab-left);bottom:-1px;display:inline-flex;align-items:center;gap:9px;height:36px;min-width:100px;padding:0 13px;border:1px solid var(--wa-browser-line);border-bottom:0;border-radius:8px 8px 0 0;background:var(--wa-panel)}.wa-chat-shell__mark{display:block;flex:0 0 auto;width:18px;height:11px}.wa-chat-shell__title{color:var(--wa-color-text);font-size:14px;line-height:1;font-weight:620}.wa-chat-shell__body{position:relative;display:grid;grid-template-rows:minmax(0,1fr);align-content:stretch;gap:0;min-height:0;padding:0 var(--wa-chat-x-padding);overflow:hidden;border-radius:0 0 calc(var(--wa-radius-window) - 1px) calc(var(--wa-radius-window) - 1px);background:var(--wa-panel);background-clip:padding-box}.wa-chat-shell__body:before{content:"";position:absolute;z-index:1;top:0;right:0;left:0;height:var(--wa-chat-top-fade);background:linear-gradient(to bottom,var(--wa-panel) 0,var(--wa-panel-transparent) 100%);pointer-events:none}.wa-signup-scene{position:absolute;inset:0;z-index:0;display:grid;align-content:center;justify-items:center;gap:20px;min-height:0;padding-bottom:0;color:var(--wa-ink);will-change:transform,opacity}.wa-signup-scene__logo{display:block;width:clamp(70px,8.4vw,96px);height:auto;margin-bottom:4px}.wa-signup-scene__title{margin:0;color:var(--wa-ink);font-family:var(--wa-font-feature);font-size:23px;line-height:1;font-weight:620;letter-spacing:0}.wa-signup-field{display:flex;align-items:center;width:min(292px,82%);min-height:48px;padding:0 14px;overflow:hidden;border:1px solid var(--wa-color-input-line);border-radius:var(--wa-radius-sm);color:var(--wa-ink);background:var(--wa-color-panel);font-size:14px;line-height:1;font-weight:460;white-space:nowrap}.wa-signup-field [data-signup-email]:empty:before{content:"you@company.com";color:var(--wa-placeholder)}.wa-signup-field [data-signup-email]:after{content:"";display:inline-block;width:1px;height:17px;margin-left:1px;background:currentColor;transform:translateY(3px);animation:wa-caret .92s steps(1,end) infinite}.wa-thread{position:relative;z-index:0;display:grid;gap:var(--wa-chat-entry-gap);align-content:start;height:100%;min-height:0;max-height:none;padding-bottom:var(--wa-chat-bottom-clearance);overflow:hidden;overscroll-behavior:contain}.wa-thread>.wa-message:first-child,.wa-message--first-active{margin-top:var(--wa-chat-first-entry-offset)}.wa-section[data-active-story=data-marketplace] .wa-thread{min-height:0;max-height:none}.wa-section[data-active-story=data-marketplace] .wa-result-grid{display:none}.wa-message{display:grid;grid-template-columns:minmax(0,max-content);gap:0;align-items:end;max-width:90%;will-change:transform,opacity}.wa-message[data-message-role=user]{justify-self:end;grid-template-columns:minmax(0,max-content)}.wa-message[data-message-role=assistant]:not(.wa-message--component){width:min(100%,var(--wa-ai-message-max-width));grid-template-columns:minmax(0,1fr)}.wa-message__avatar{display:none;width:24px;height:24px;border:1px solid var(--wa-line-10);border-radius:7px;background:var(--wa-color-dark-surface)}.wa-message[data-message-role=user] .wa-message__avatar{grid-column:2;background:var(--wa-orange)}.wa-message__body{width:100%;max-width:var(--wa-ai-message-max-width);padding:10px 12px;border:0;border-radius:8px;color:var(--wa-ink);background:transparent;font-size:13px;line-height:1.35;font-weight:var(--wa-chat-message-weight);overflow-wrap:anywhere}.wa-message[data-message-role=user] .wa-message__body{grid-column:1;grid-row:1;width:auto;max-width:var(--wa-user-message-max-width);background:var(--wa-color-user-message);color:var(--wa-ink)}.wa-message[data-message-role=assistant] .wa-message__body[data-streaming=true]:after{content:"";display:inline-block;width:1px;height:1em;margin-left:2px;background:currentColor;vertical-align:-.14em;animation:wa-caret .92s steps(1,end) infinite}.wa-message--component{grid-template-columns:minmax(0,1fr);width:100%;max-width:100%;align-items:start}.wa-message--component .wa-message__avatar{margin-top:0}.wa-message--component .wa-message__body{width:100%;max-width:none;padding:0;border:0;background:transparent;overflow:visible}.wa-message--file{width:auto;max-width:90%;justify-self:end}.wa-message--file .wa-message__body{width:auto;justify-self:end;padding:0;background:transparent}.wa-message[data-message-role=user].wa-message--file .wa-message__body{background:transparent}.wa-thinking-block{display:grid;align-content:start;align-items:start;justify-items:start;gap:11px;min-width:0}.wa-thinking{display:inline-grid;grid-template-columns:12px auto auto;align-items:center;justify-content:start;gap:6px;justify-self:start;min-height:18px;padding:0;color:#57544f;background:transparent;font-size:13px;line-height:1;font-weight:var(--wa-chat-thinking-weight);will-change:transform,opacity}.wa-thinking__glyph{position:relative;display:inline-block;width:11px;height:11px;opacity:.82;background-image:radial-gradient(circle at center,currentColor 1.1px,transparent 1.2px);background-position:0 0;background-size:4px 4px}.wa-thinking__title{color:#57544f}.wa-thinking__elapsed{margin-left:5px;color:#8e8a83;font-size:11px;font-weight:480}.wa-research-steps{position:relative;display:grid;align-content:start;gap:11px;max-height:none;overflow:visible;padding:1px 0 0 3px}.wa-research-steps:before{content:"";position:absolute;top:9px;bottom:9px;left:8px;width:1px;background:#e4ded6}.wa-research-step{--wa-step-progress: 0;position:relative;display:grid;grid-template-columns:13px minmax(0,1fr) 9px;align-content:start;gap:8px;align-items:start;min-height:58px;overflow:visible;padding:0;color:#56534f;background:transparent;font-size:13px;line-height:1.24;font-weight:var(--wa-chat-thinking-weight);will-change:transform,opacity}.wa-research-step[data-step-state=complete]{min-height:20px;align-items:start}.wa-research-step__check{position:relative;z-index:1;width:12px;height:12px;margin-top:2px;background:var(--wa-panel)}.wa-research-step__check:before,.wa-research-step__check:after{content:"";position:absolute}.wa-research-step__check:before{top:4px;left:4px;width:4px;height:4px;border-radius:999px;background:#9d9890}.wa-research-step[data-step-state=complete] .wa-research-step__check:before{top:3px;left:2px;width:8px;height:4px;border-bottom:1.4px solid #279443;border-left:1.4px solid #279443;border-radius:0;background:transparent;transform:rotate(-45deg)}.wa-research-step[data-step-state=failed] .wa-research-step__check:before,.wa-research-step[data-step-state=failed] .wa-research-step__check:after{top:6px;left:2px;width:9px;height:1.4px;border-radius:999px;background:#e1544c}.wa-research-step[data-step-state=failed] .wa-research-step__check:before{transform:rotate(45deg)}.wa-research-step[data-step-state=failed] .wa-research-step__check:after{transform:rotate(-45deg)}.wa-research-step__body{position:relative;z-index:1;display:grid;align-content:start;gap:4px;min-width:0}.wa-research-step__label{min-width:0;color:#55514d;font-size:13px;line-height:1.18;font-weight:var(--wa-chat-thinking-weight);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wa-research-step__detail{display:-webkit-box;min-width:0;overflow:hidden;color:#86817a;font-size:11px;line-height:1.28;font-weight:var(--wa-chat-detail-weight);white-space:normal;-webkit-box-orient:vertical;-webkit-line-clamp:2}.wa-sequence-thinking-progress{display:grid;grid-template-columns:auto minmax(0,1fr);gap:8px;align-items:center;min-width:0;padding-top:2px}.wa-sequence-thinking-progress__count{color:#8e8a83;font-size:10px;line-height:1;font-weight:560;font-variant-numeric:tabular-nums}.wa-sequence-thinking-progress__bar{display:block;height:4px;overflow:hidden;border-radius:999px;background:#e4ded6}.wa-sequence-thinking-progress__bar span{display:block;width:100%;height:100%;border-radius:inherit;background:#57544f;transform:scaleX(.02);transform-origin:left center;will-change:transform}.wa-thinking__title[data-streaming=true],.wa-research-step__label[data-streaming=true]{color:transparent;background:linear-gradient(105deg,#55514d 0% 30%,#9d9890 46%,#2f2e2a 58%,#55514d 74% 100%);background-size:220% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:wa-text-shimmer 1.35s ease-in-out infinite}.wa-thinking__title[data-streaming=true]:after,.wa-research-step__label[data-streaming=true]:after,.wa-research-step__detail[data-streaming=true]:after{content:"";display:inline-block;width:1px;height:1em;margin-left:2px;background:#55514d;vertical-align:-.12em;animation:wa-caret .92s steps(1,end) infinite}.wa-research-step__detail[data-streaming=true]:after{background:#86817a}.wa-research-step[data-step-state=complete] .wa-research-step__body{gap:0}.wa-research-step[data-step-state=complete] .wa-research-step__detail,.wa-research-step[data-step-state=complete] .wa-research-step__disclosure,.wa-research-step[data-step-state=complete] .wa-research-step__chevron{display:none}.wa-research-step__disclosure{display:inline-flex;align-items:center;justify-self:start;gap:3px;margin-top:2px;color:#7f7a73;font-size:10px;line-height:1;font-weight:var(--wa-chat-detail-weight)}.wa-research-step__disclosure:after{content:"";width:4px;height:4px;border-right:1px solid currentColor;border-bottom:1px solid currentColor;transform:translateY(-1px) rotate(45deg)}.wa-research-step:nth-child(n+2) .wa-research-step__disclosure:after{transform:translateY(1px) rotate(225deg)}.wa-research-step__chevron{position:relative;z-index:1;width:8px;height:14px;margin-top:1px}.wa-research-step__chevron:before{content:"";position:absolute;top:3px;left:1px;width:5px;height:5px;border-top:1px solid #aaa59d;border-right:1px solid #aaa59d;transform:rotate(45deg)}.wa-result-grid{display:grid;grid-template-columns:minmax(0,1fr);gap:9px;min-height:0}.wa-result-grid.has-strategy-plans{grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.wa-result-grid.has-data-table,.wa-result-grid.has-enrichment-panel{grid-template-columns:minmax(0,1fr)}.wa-csv-drop{position:absolute;inset:58px 10px 10px;z-index:2;display:grid;grid-template-columns:minmax(0,1fr);place-items:center;gap:14px;padding:32px;overflow:hidden;border:1px dashed rgba(242,59,10,.48);border-radius:12px;color:#514e49;background:#fffff9e6;box-shadow:inset 0 0 0 999px #fffff938;pointer-events:none}.wa-csv-drop[data-drop-state=active]{border-color:var(--wa-orange);background-color:#fff9f2eb;box-shadow:inset 0 0 0 999px #f23b0a0d}.wa-csv-drop[data-drop-state=complete]{border-style:solid;border-color:#27944352;background:#fffff9e6}.wa-csv-drop__copy{display:grid;gap:5px;min-width:0;justify-items:center;text-align:center}.wa-csv-drop__copy strong{color:#11110f;font-size:18px;line-height:1.12;font-weight:620}.wa-csv-drop__copy span{color:#7b766f;font-size:13px;line-height:1.24;font-weight:460}.wa-cursor-file{position:absolute;top:0;left:0;z-index:19;width:max-content;pointer-events:none;will-change:transform,opacity}.wa-file-landing-clone{box-sizing:border-box;will-change:transform}.wa-cursor-file__card{display:inline-grid;grid-template-columns:30px minmax(0,auto);gap:8px;align-items:center;max-width:190px;min-height:42px;padding:6px 10px 6px 6px;border:1px solid rgba(23,23,20,.12);border-radius:8px;color:#171714;background:#fffff9f5;box-shadow:0 16px 28px #1717142e}.wa-cursor-file--stack{width:190px;height:72px}.wa-cursor-file--stack .wa-cursor-file__card{position:absolute;top:0;left:0;width:172px;transform-origin:18px 28px}.wa-cursor-file--stack .wa-cursor-file__card:nth-child(1){z-index:4;transform:translate(1px) rotate(2deg)}.wa-cursor-file--stack .wa-cursor-file__card:nth-child(2){z-index:3;transform:translate(8px,8px) rotate(-5deg)}.wa-cursor-file--stack .wa-cursor-file__card:nth-child(3){z-index:2;transform:translate(-7px,15px) rotate(6deg)}.wa-cursor-file--stack .wa-cursor-file__card:nth-child(4){z-index:1;transform:translate(5px,23px) rotate(-8deg)}.wa-cursor-file__icon,.wa-uploaded-file__icon{display:inline-flex;align-items:center;justify-content:center;border-radius:5px;color:var(--wa-orange);background:#f23b0a1a;font-size:9px;line-height:1;font-weight:760}.wa-cursor-file__icon{width:30px;height:30px}.wa-cursor-file__name{min-width:0;overflow:hidden;font-size:11px;line-height:1;font-weight:560;text-overflow:ellipsis;white-space:nowrap}.wa-uploaded-file{display:inline-grid;grid-template-columns:34px minmax(0,1fr);gap:9px;align-items:center;min-width:226px;max-width:280px;min-height:50px;padding:8px 12px 8px 8px;border-radius:8px;color:var(--wa-ink);background:var(--wa-color-user-message)}.wa-uploaded-file__icon{width:34px;height:34px}.wa-uploaded-file__body{display:grid;gap:3px;min-width:0}.wa-uploaded-file__body strong,.wa-uploaded-file__body span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wa-uploaded-file__body strong{font-size:12px;line-height:1.1;font-weight:620}.wa-uploaded-file__body span{color:#716d66;font-size:10px;line-height:1;font-weight:460}.wa-uploaded-files{display:grid;gap:8px;justify-items:end}.wa-uploaded-files__summary{color:#716d66;font-size:10.5px;line-height:1;font-weight:520}.wa-uploaded-files__list{display:grid;gap:7px;justify-items:end}.wa-data-table{display:grid;gap:0;min-width:0;padding:0;overflow:visible;border:0;border-radius:0;background:transparent;box-shadow:none;color:#050505;will-change:transform,opacity}.wa-data-table__header{display:none;grid-template-columns:minmax(0,1fr) auto;gap:4px 10px;align-items:end}.wa-data-table__meta{grid-column:1 / -1;color:var(--wa-color-accent);font-size:10px;line-height:1;font-weight:760;letter-spacing:0;text-transform:uppercase}.wa-data-table__title{min-width:0;margin:0;color:var(--wa-ink);font-size:14px;line-height:1.08;font-weight:720;letter-spacing:0}.wa-data-table__count{color:var(--wa-color-muted);font-size:10px;line-height:1;font-weight:680;white-space:nowrap}.wa-data-table__grid{position:relative;display:grid;min-width:0;overflow:hidden;border:1px solid #eee6df;border-radius:5px;background:var(--wa-color-panel)}.wa-data-table__row{position:relative;display:grid;grid-template-columns:var(--wa-data-table-columns);min-width:0;min-height:27px;border-top:1px solid #eee6df;background:var(--wa-color-panel);will-change:transform,opacity}.wa-data-table__row:first-child{border-top:0}.wa-data-table__row[data-header=true]{min-height:25px;background:var(--wa-color-panel)}.wa-data-table__cell{display:flex;align-items:center;min-width:0;padding:0 8px;overflow:visible;border-left:0;color:#555452;font-size:10px;line-height:1.08;font-weight:500;overflow-wrap:anywhere;white-space:normal}.wa-data-table__cell:first-child{border-left:0}.wa-data-table__row[data-header=true] .wa-data-table__cell{color:#555452;font-size:11px;line-height:1;font-weight:560;text-transform:none}.wa-data-table__row[data-header=true] .wa-data-table__cell:last-of-type{padding-right:34px}.wa-data-table__add{position:absolute;top:4px;right:5px;display:inline-flex;align-items:center;justify-content:center;width:22px;height:18px;padding:0 0 1px;border:1px solid #eee6df;border-radius:5px;color:#050505;background:#fffffb;box-shadow:0 1px 1px #17171405;font-size:14px;line-height:1;font-weight:680}.wa-data-table__footer{display:flex;align-items:center;justify-content:space-between;gap:8px;min-width:0;padding-top:8px}.wa-data-table__actions{display:flex;align-items:center;gap:6px;min-width:0}.wa-data-table-action{position:relative;display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border:1px solid #ded9d2;border-radius:5px;color:#555452;background:transparent;box-shadow:0 1px 1px #17171408;cursor:pointer}.wa-data-table-action[data-action-variant=primary]{border-color:#ded9d2;color:#555452;background:transparent}.wa-data-table-action__icon{display:block;width:14px;height:14px;fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.8}.wa-data-table-action__badge{position:absolute;top:-5px;right:-5px;display:none;align-items:center;min-height:15px;padding:0 5px;border-radius:999px;color:#11110f;background:var(--wa-orange);font-size:8px;line-height:1;font-weight:680}.wa-data-table-action__tooltip{display:none}.wa-data-table-floating-tooltip{position:absolute;z-index:7;top:0;left:0;display:inline-flex;align-items:center;justify-content:center;min-height:29px;padding:0 11px;border-radius:6px;color:#fffffb;background:#11110f;box-shadow:0 8px 20px #1717142e;font-size:11px;line-height:1;font-weight:580;pointer-events:none;white-space:nowrap;opacity:0;visibility:hidden;transition:opacity .12s ease,visibility .12s ease}.wa-data-table-floating-tooltip[data-has-badge=true]{flex-direction:column;align-items:flex-start;min-height:50px;padding:8px 10px;gap:6px}.wa-data-table-floating-tooltip[data-visible=true]{opacity:1;visibility:visible}.wa-data-table-floating-tooltip__label{display:block}.wa-data-table-floating-tooltip__badge{display:inline-flex;align-items:center;min-height:15px;padding:0 6px;border-radius:999px;color:#11110f;background:#fffffb;font-size:8px;line-height:1;font-weight:650}.wa-data-table__pagination{display:inline-flex;align-items:center;justify-content:end;gap:7px;min-width:0;color:#716d66;font-size:9.5px;line-height:1;font-weight:500}.wa-data-table__range{white-space:nowrap}.wa-data-table__page-controls{display:inline-flex;align-items:center;gap:3px}.wa-data-table__page-button{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;padding:0;border:1px solid #ded9d2;border-radius:5px;color:#555452;background:#fffffb;font-size:9px;line-height:1;font-weight:560;cursor:pointer}.wa-data-table-action:hover,.wa-data-table-action[data-tooltip-visible=true],.wa-data-table__page-button:hover,.wa-data-table__page-button[data-tooltip-visible=true]{border-color:#bdb7ae;color:#11110f}.wa-data-table__page-button[data-active=true]{border-color:#11110f;color:#fffffb;background:#11110f}.wa-data-table__cell[data-column-key=name],.wa-data-table__cell[data-column-key=contact]{overflow:hidden;color:#050505;font-weight:520;white-space:nowrap}.wa-data-table__cell[data-column-key=email],.wa-data-table__cell[data-column-key=number]{color:#565553}.wa-data-table__cell[data-empty=true]{color:#aaa7a2}.wa-data-table-person{display:grid;grid-template-columns:25px minmax(0,1fr);gap:7px;align-items:center;width:100%;min-width:0;overflow:hidden}.wa-data-table-person__avatar-wrap{position:relative;display:block;width:25px;height:25px}.wa-data-table-person__avatar{display:inline-flex;align-items:center;justify-content:center;width:25px;height:25px;overflow:hidden;border:1px solid #d8d8d8;border-radius:999px;color:#1a1a18;background:linear-gradient(145deg,#d8dee8,#aeb7c5);font-size:8px;font-weight:700;letter-spacing:0}.wa-data-table-person__avatar img{display:block;width:100%;height:100%;object-fit:cover}.wa-data-table-person__avatar[data-avatar-tone="2"]{background:linear-gradient(145deg,#cde3d5,#7ea88f)}.wa-data-table-person__avatar[data-avatar-tone="3"]{background:linear-gradient(145deg,#9edff0,#27718b)}.wa-data-table-person__avatar[data-avatar-tone="4"]{background:linear-gradient(145deg,#f4f0eb,#b6b0a9)}.wa-data-table-person__avatar[data-avatar-tone="5"]{background:linear-gradient(145deg,#443f45,#141416);color:#fffff9}.wa-data-table-person__avatar[data-avatar-tone="6"]{background:linear-gradient(145deg,#bdeef4,#1590a8)}.wa-data-table-person__avatar[data-avatar-tone="7"]{background:linear-gradient(145deg,#f3f1dd,#a8d7f0)}.wa-data-table-person__avatar[data-avatar-tone="8"]{background:linear-gradient(145deg,#0992db,#055c9b);color:#fffff9}.wa-data-table-person__avatar[data-avatar-tone="9"]{background:linear-gradient(145deg,#cfc8b8,#39322b);color:#fffff9}.wa-data-table-person__source{position:absolute;right:0;bottom:0;width:12px;height:12px;border:1.5px solid var(--wa-color-panel);border-radius:999px;background:#ddff1c}.wa-data-table-person__source:before,.wa-data-table-person__source:after{content:"";position:absolute;background:#050505}.wa-data-table-person__source[data-source=signal]:before{right:3px;bottom:2px;width:6px;height:2px;border-radius:999px;transform:rotate(-34deg)}.wa-data-table-person__source[data-source=signal]:after{right:2px;bottom:5px;width:2px;height:5px;border-radius:999px;transform:rotate(12deg)}.wa-data-table-person__source[data-source=database]{border-radius:4px;background:#1f1f1f}.wa-data-table-person__source[data-source=database]:before{top:3px;left:3px;width:5px;height:5px;border:1.5px solid #fffff9;border-radius:2px;background:transparent}.wa-data-table-person__source[data-source=database]:after{display:none}.wa-data-table-person__source[data-source=engage]{border-radius:4px 7px 7px 4px;background:#6043ff}.wa-data-table-person__source[data-source=engage]:before{top:4px;left:3px;width:7px;height:4px;border-radius:1px;background:#fffff9;transform:rotate(-8deg)}.wa-data-table-person__source[data-source=engage]:after{display:none}.wa-data-table-person__name{min-width:0;overflow:hidden;color:#050505;font-size:10px;line-height:1.05;font-weight:520;overflow-wrap:normal;text-overflow:ellipsis;white-space:nowrap}.wa-enrichment-panel{--wa-step-progress: 0;display:grid;gap:11px;min-width:0;max-width:420px;overflow:visible;border:0;border-radius:0;background:transparent;box-shadow:none;color:#56534f;will-change:transform,opacity}.wa-enrichment-panel__header{display:inline-grid;grid-template-columns:12px auto auto;gap:6px;align-items:center;justify-content:start;min-height:18px;padding:0;border:0;color:#57544f;background:transparent;font-size:13px;line-height:1;font-weight:520}.wa-waterfall-rows{position:relative;display:grid;gap:9px;padding:1px 0 0 3px}.wa-waterfall-rows:before{content:"";position:absolute;top:9px;bottom:9px;left:8px;width:1px;background:#e4ded6}.wa-waterfall-row{position:relative;display:grid;grid-template-columns:13px auto minmax(0,1fr);gap:8px;align-items:center;min-height:27px;color:#56534f;font-size:13px;line-height:1;font-weight:500;white-space:nowrap;will-change:transform,opacity}.wa-waterfall-row__status{position:relative;z-index:1;width:12px;height:12px;background:var(--wa-panel)}.wa-waterfall-row__status:before,.wa-waterfall-row__status:after{content:"";position:absolute}.wa-waterfall-row__status:before{top:4px;left:4px;width:4px;height:4px;border-radius:999px;background:#9d9890}.wa-waterfall-row[data-step-state=complete] .wa-waterfall-row__status:before{top:3px;left:2px;width:8px;height:4px;border-bottom:1.4px solid #279443;border-left:1.4px solid #279443;border-radius:0;background:transparent;transform:rotate(-45deg)}.wa-waterfall-row[data-step-state=failed] .wa-waterfall-row__status:before,.wa-waterfall-row[data-step-state=failed] .wa-waterfall-row__status:after{top:6px;left:2px;width:9px;height:1.4px;border-radius:999px;background:#e1544c}.wa-waterfall-row[data-step-state=failed] .wa-waterfall-row__status:before{transform:rotate(45deg)}.wa-waterfall-row[data-step-state=failed] .wa-waterfall-row__status:after{transform:rotate(-45deg)}.wa-waterfall-row__label{min-width:104px;overflow:hidden;color:#56534f;text-overflow:ellipsis}.wa-waterfall-row__chips{display:inline-flex;align-items:center;gap:6px;min-width:0;overflow:hidden}.wa-waterfall-chip{position:relative;display:inline-flex;align-items:center;gap:4px;max-width:86px;min-height:17px;padding:2px 6px 2px 15px;overflow:hidden;border:1px solid #ebe5dc;border-radius:3px;color:#7c7770;background:#fbfaf3;font-size:10px;line-height:1;text-overflow:ellipsis}.wa-waterfall-chip:before,.wa-waterfall-chip:after{content:"";position:absolute}.wa-waterfall-chip:before{top:7px;left:6px;width:4px;height:4px;border-radius:999px;background:#a49f98}.wa-waterfall-chip[data-step-state=complete]:before{top:6px;left:5px;width:7px;height:3.5px;border-bottom:1.2px solid #279443;border-left:1.2px solid #279443;border-radius:0;background:transparent;transform:rotate(-45deg)}.wa-waterfall-chip[data-step-state=failed]{color:#a94f48}.wa-waterfall-chip[data-step-state=failed]:before,.wa-waterfall-chip[data-step-state=failed]:after{top:8px;left:5px;width:7px;height:1.2px;border-radius:999px;background:#e1544c}.wa-waterfall-chip[data-step-state=failed]:before{transform:rotate(45deg)}.wa-waterfall-chip[data-step-state=failed]:after{transform:rotate(-45deg)}.wa-result-card{display:grid;gap:8px;padding:12px;border:1px solid var(--wa-line-12);border-radius:var(--wa-radius-sm);background:linear-gradient(90deg,var(--wa-card-accent-bg),transparent 42%),var(--wa-color-panel);box-shadow:var(--wa-card-shadow);will-change:transform,opacity}.wa-result-card__topline{color:var(--wa-color-accent);font-size:11px;line-height:1.1;font-weight:720;letter-spacing:0;text-transform:uppercase}.wa-result-card__title{margin:0;color:var(--wa-ink);font-size:16px;line-height:1.1;font-weight:700;letter-spacing:0}.wa-result-card__body{margin:0;color:var(--wa-color-muted);font-size:12px;line-height:1.32;font-weight:460}.wa-result-card__rows{display:grid;gap:6px;padding:0;margin:0;list-style:none}.wa-result-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px;align-items:center;min-height:30px;padding:7px 9px;border:1px solid var(--wa-line-08);border-radius:var(--wa-radius-sm);color:var(--wa-color-muted);background:var(--wa-row-bg);font-size:12px;will-change:transform,opacity}.wa-result-row strong{color:var(--wa-ink);font-weight:680;white-space:nowrap}.wa-result-row[data-tone=positive] strong{color:var(--wa-color-positive)}.wa-result-row[data-tone=warning] strong{color:var(--wa-color-warning)}.wa-result-row[data-tone=accent] strong{color:var(--wa-color-accent)}.wa-result-card__actions{display:flex;gap:8px;flex-wrap:wrap}.wa-result-action{display:inline-flex;align-items:center;justify-content:center;min-width:122px;height:34px;padding:0 11px;border:1px solid var(--wa-line-16);border-radius:var(--wa-radius-sm);color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);font-size:12px;font-weight:680;cursor:default;white-space:nowrap;will-change:transform,opacity}.wa-strategy-plan{display:grid;align-content:start;gap:8px;min-height:124px;padding:11px;border:1px solid var(--wa-line-12);border-radius:var(--wa-radius-sm);background:var(--wa-color-panel);box-shadow:var(--wa-card-shadow);will-change:transform,opacity}.wa-strategy-plan__label{color:var(--wa-color-muted);font-size:10px;line-height:1;font-weight:560;letter-spacing:0;text-transform:uppercase}.wa-strategy-plan__title{min-height:34px;margin:0;color:var(--wa-ink);font-size:13px;line-height:1.08;font-weight:560;letter-spacing:0}.wa-strategy-plan__summary{margin:0;padding-top:3px;color:var(--wa-color-muted);font-size:11.5px;line-height:1.24;font-weight:420;text-transform:none;will-change:transform,opacity}.wa-data-source-grid{display:grid;gap:10px;width:min(100%,520px);min-width:0;padding:2px 0}.wa-data-source-grid__header{display:grid;gap:3px}.wa-data-source-grid__title{margin:0;color:var(--wa-ink);font-size:15px;line-height:1.12;font-weight:560;letter-spacing:0}.wa-data-source-grid__subtitle{max-width:430px;margin:0;color:var(--wa-color-muted);font-size:11.5px;line-height:1.26;font-weight:410}.wa-data-source-grid__list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;min-width:0}.wa-data-source-card{display:grid;grid-template-columns:18px minmax(0,1fr);gap:8px;align-items:start;min-width:0;min-height:68px;padding:9px 10px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel);box-shadow:0 8px 18px #1717140a;will-change:transform,opacity}.wa-data-source-card__icon{position:relative;width:18px;height:18px;margin-top:1px;border:1px solid var(--wa-line-16);border-radius:6px;background:var(--wa-color-soft-surface)}.wa-data-source-card__icon:before,.wa-data-source-card__icon:after{content:"";position:absolute;border-radius:999px;background:var(--wa-color-accent)}.wa-data-source-card__icon:before{top:5px;left:5px;width:6px;height:6px}.wa-data-source-card__icon:after{right:4px;bottom:4px;width:3px;height:3px}.wa-data-source-card__copy{display:grid;gap:3px;min-width:0}.wa-data-source-card__copy strong{color:var(--wa-ink);font-size:12.5px;line-height:1.12;font-weight:570}.wa-data-source-card__copy span{color:var(--wa-color-muted);font-size:10.5px;line-height:1.22;font-weight:410}.wa-data-source-grid--marketing{position:absolute;z-index:2;inset:calc(var(--wa-chat-top-fade) + 8px) 30px 26px;align-content:start;width:auto;max-width:none;gap:24px;padding:0;overflow:visible;pointer-events:none}.wa-data-source-grid--marketing .wa-data-source-grid__header{gap:0;max-width:none}.wa-data-source-grid--marketing .wa-data-source-grid__title{font-size:clamp(26px,3vw,48px);line-height:1.02;font-weight:540;letter-spacing:0}.wa-data-source-grid--marketing .wa-data-source-grid__subtitle{display:none}.wa-data-source-grid__groups{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px 26px;min-height:0;min-width:0}.wa-data-source-grid--marketing .wa-data-source-grid__groups{grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;align-items:start}.wa-data-source-grid__column{display:grid;align-content:start;gap:14px;min-width:0}.wa-data-source-group{display:grid;align-content:start;gap:9px;min-width:0;padding:0;border:0;border-radius:0;background:transparent}.wa-data-source-group__title{margin:0;color:#5e5d59;font-size:clamp(13px,1.15vw,18px);line-height:1.05;font-weight:530;letter-spacing:0;text-align:left;text-transform:none}.wa-data-source-grid--marketing .wa-data-source-grid__list{display:grid;grid-template-columns:minmax(0,1fr);align-content:center;justify-items:start;gap:9px;min-height:68px;padding:12px 14px;border-radius:6px;background:#e9e9e9}.wa-data-vendor-logo{display:inline-flex;align-items:center;justify-content:flex-start;width:100%;min-width:0;height:auto;min-height:0;max-width:100%;color:#000;opacity:1;will-change:transform,opacity}.wa-data-vendor-logo--image{opacity:1}.wa-data-vendor-logo__mark{display:flex;align-items:center;justify-content:center;width:100%;height:100%;max-width:100%;overflow:hidden;color:currentColor;font-size:clamp(18px,2.1vw,36px);line-height:1;font-weight:560;letter-spacing:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;transform:scale(var(--wa-logo-scale, 1));transform-origin:center}.wa-data-vendor-logo__image{display:block;width:auto;height:auto;max-width:100%;max-height:34px;object-fit:contain;object-position:left center;filter:brightness(0) saturate(100%);transform:scale(var(--wa-logo-scale, 1));transform-origin:left center;-webkit-user-select:none;user-select:none}.wa-mini-game,.wa-style-profile,.wa-proximity-list,.wa-sequence-engagement{display:grid;gap:10px;width:min(100%,540px);min-width:0}.wa-sequence-engagement{width:min(100%,560px)}.wa-mini-game__header,.wa-style-profile__header,.wa-proximity-list__header,.wa-sequence-engagement__header{display:grid;gap:3px}.wa-mini-game__eyebrow{color:var(--wa-color-muted);font-size:9px;line-height:1;font-weight:680;text-transform:uppercase}.wa-mini-game__title,.wa-style-profile__title,.wa-proximity-list__title,.wa-sequence-engagement__title{margin:0;color:var(--wa-ink);font-size:15px;line-height:1.12;font-weight:560;letter-spacing:0}.wa-mini-game__subtitle,.wa-style-profile__subtitle,.wa-proximity-list__subtitle,.wa-sequence-engagement__subtitle{margin:0;color:var(--wa-color-muted);font-size:11.5px;line-height:1.26;font-weight:410}.wa-swipe-game{gap:9px;max-width:520px}.wa-swipe-game__prompt{margin:0;color:var(--wa-ink);font-size:12px;line-height:1.28;font-weight:430}.wa-swipe-game__axis{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;color:var(--wa-color-muted);font-size:10px;line-height:1;font-weight:520}.wa-swipe-game__axis span:first-child{color:#7f1d1d94}.wa-swipe-game__axis span:nth-child(2){color:var(--wa-color-muted);font-variant-numeric:tabular-nums}.wa-swipe-game__axis span:last-child{justify-self:end;color:#1665349e}.wa-swipe-game__stack{position:relative;height:184px;overflow:visible}.wa-swipe-game__glow{position:absolute;inset:12px -18px 0;z-index:0;border-radius:999px;background:linear-gradient(90deg,rgba(127,29,29,.055),transparent 42%,transparent 58%,rgba(22,101,52,.065));filter:blur(22px);pointer-events:none}.wa-swipe-card,.wa-swipe-game__complete{position:absolute;inset:0;display:grid;align-content:center;justify-items:center;min-width:0;border:1px solid rgba(228,228,231,.82);border-radius:21px;background:#fafafa;text-align:center;box-shadow:0 18px 45px #00000014;will-change:transform,opacity}.wa-swipe-card{gap:13px;padding:22px 26px}.wa-swipe-game[data-swipe-decision=avoid] .wa-swipe-card[data-swipe-state=active]{border-color:#d298989e;background:linear-gradient(135deg,#f8f1f1,#fafafa 68%);box-shadow:-22px 28px 70px #7f1d1d1f}.wa-swipe-game[data-swipe-decision=use] .wa-swipe-card[data-swipe-state=active]{border-color:#8eb79da3;background:linear-gradient(135deg,#fafafa 32%,#f0f7f2);box-shadow:22px 28px 70px #1665341f}.wa-swipe-card__label{max-width:360px;color:var(--wa-ink);font-size:20px;line-height:1.05;font-weight:580;letter-spacing:0}.wa-swipe-card__detail{max-width:340px;color:var(--wa-color-muted);font-size:11.5px;line-height:1.35;font-weight:410}.wa-swipe-game__actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;max-width:420px;will-change:transform,opacity}.wa-swipe-game__action{position:relative;display:inline-flex;align-items:center;justify-content:center;min-height:38px;border:1px solid var(--wa-line-12);border-radius:999px;background:var(--wa-panel);cursor:default;will-change:transform}.wa-swipe-game__action:before,.wa-swipe-game__action:after{content:"";position:absolute;display:block}.wa-swipe-game__action[data-swipe-action=avoid]{border-color:#d298987a;background:#f8f1f1e6}.wa-swipe-game__action[data-swipe-action=avoid]:before,.wa-swipe-game__action[data-swipe-action=avoid]:after{width:14px;height:1.5px;border-radius:999px;background:#ba4d4d}.wa-swipe-game__action[data-swipe-action=avoid]:before{transform:rotate(45deg)}.wa-swipe-game__action[data-swipe-action=avoid]:after{transform:rotate(-45deg)}.wa-swipe-game__action[data-swipe-action=use]{border-color:#8eb79d80;background:#f0f7f2f2}.wa-swipe-game__action[data-swipe-action=use]:before{width:13px;height:7px;border-bottom:1.7px solid #2f8f4d;border-left:1.7px solid #2f8f4d;transform:translateY(-1px) rotate(-45deg)}.wa-swipe-game__action[data-active=true]{border-color:var(--wa-ink)}.wa-swipe-game__complete{z-index:10;color:var(--wa-ink);font-size:17px;line-height:1.1;font-weight:560}.wa-sequence-engagement__header{grid-template-columns:minmax(0,1fr) auto;align-items:start}.wa-sequence-engagement__subtitle{grid-column:1 / -1}.wa-sequence-engagement__count{display:inline-flex;align-items:center;min-height:23px;padding:0 9px;border-radius:999px;color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);font-size:10px;line-height:1;font-weight:680;white-space:nowrap}.wa-style-profile__rows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}.wa-style-profile__row{display:grid;gap:4px;min-height:54px;padding:9px 10px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel);will-change:transform,opacity}.wa-style-profile__row span{color:var(--wa-color-muted);font-size:9.5px;line-height:1;font-weight:660;text-transform:uppercase}.wa-style-profile__row strong{color:var(--wa-ink);font-size:12px;line-height:1.2;font-weight:520}.wa-style-profile__examples{display:grid;gap:6px}.wa-style-profile__example{margin:0;padding:9px 11px;border-left:2px solid var(--wa-color-accent);color:var(--wa-ink);background:var(--wa-row-bg);font-size:11px;line-height:1.25;font-weight:430;will-change:transform,opacity}.wa-proximity-list__rows{display:grid;gap:7px}.wa-proximity-lead{display:grid;grid-template-columns:30px minmax(0,1fr);gap:9px;min-width:0;padding:9px 10px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel);box-shadow:0 8px 18px #1717140a;will-change:transform,opacity}.wa-proximity-lead__rank{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:999px;color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);font-size:11px;line-height:1;font-weight:660}.wa-proximity-lead__body{display:grid;gap:5px;min-width:0}.wa-proximity-lead__top{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:start}.wa-proximity-lead__identity{display:grid;gap:2px;min-width:0}.wa-proximity-lead__identity strong{color:var(--wa-ink);font-size:12.5px;line-height:1.1;font-weight:570}.wa-proximity-lead__identity span{color:var(--wa-color-muted);font-size:10px;line-height:1.1;font-weight:410}.wa-proximity-lead__score{color:var(--wa-color-accent);font-size:11px;line-height:1;font-weight:680}.wa-proximity-lead__personalization{margin:0;color:var(--wa-ink);font-size:11px;line-height:1.22;font-weight:430}.wa-proximity-lead__proximity{color:var(--wa-color-muted);font-size:9.5px;line-height:1;font-weight:620;text-transform:uppercase}.wa-sequence-engagement__sequences{display:grid;gap:10px}.wa-sequence-people{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px;align-items:center;max-width:340px}.wa-sequence-person-actions{display:inline-flex;gap:5px;justify-self:end}.wa-sequence-person-button{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;padding:0;border:1px solid var(--wa-line-10);border-radius:6px;color:var(--wa-ink);background:var(--wa-panel);font:inherit;font-size:15px;line-height:1;font-weight:460;cursor:pointer}.wa-sequence-person-current{display:grid;grid-template-columns:28px minmax(0,1fr);gap:8px;align-items:center;min-width:0}.wa-sequence-person-current__avatar{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;overflow:hidden;border:1px solid rgba(17,17,15,.08);border-radius:999px;color:#11110f;background:#e8f3ff;font-size:10px;line-height:1;font-weight:620}.wa-sequence-person-current__avatar[data-avatar-tone="2"]{background:#f1eadf}.wa-sequence-person-current__avatar[data-avatar-tone="3"]{background:#e9f5e6}.wa-sequence-person-current__copy{display:grid;gap:2px;min-width:0}.wa-sequence-person-current__copy strong{overflow:hidden;color:var(--wa-ink);font-size:12px;line-height:1.1;font-weight:560;text-overflow:ellipsis;white-space:nowrap}.wa-sequence-person-current__copy span{overflow:hidden;color:var(--wa-color-muted);font-size:10px;line-height:1.12;font-weight:410;text-overflow:ellipsis;white-space:nowrap}.wa-sequence-card{display:grid;grid-template-columns:minmax(146px,.76fr) minmax(0,1.24fr);gap:10px;align-items:stretch;min-width:0;padding:0;border:0;background:transparent;box-shadow:none;will-change:transform,opacity}.wa-sequence-card__top{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:start}.wa-sequence-card__identity{display:grid;gap:2px;min-width:0}.wa-sequence-card__identity strong{color:var(--wa-ink);font-size:12.5px;line-height:1.1;font-weight:570}.wa-sequence-card__identity span,.wa-sequence-card__personalization{color:var(--wa-color-muted);font-size:10.5px;line-height:1.22;font-weight:410}.wa-sequence-card__label{color:var(--wa-color-accent);font-size:9.5px;line-height:1;font-weight:680;text-transform:uppercase}.wa-sequence-card__subject{margin:0;color:var(--wa-ink);font-size:12px;line-height:1.18;font-weight:540}.wa-sequence-card__personalization{margin:0}.wa-sequence-steps{display:grid;align-content:start;gap:5px;min-width:0;margin:0}.wa-sequence-step{position:relative;display:grid;grid-template-columns:48px minmax(0,1fr);gap:7px;align-items:center;width:100%;min-height:38px;padding:7px 8px;border:1px solid var(--wa-line-08);border-radius:var(--wa-radius-sm);color:var(--wa-ink);background:var(--wa-panel);font:inherit;text-align:left;cursor:pointer}.wa-sequence-step__channel{display:inline-flex;align-items:center;justify-content:center;min-height:16px;padding:0 4px;border-radius:4px;color:var(--wa-color-inverse);background:#6f6a62;font-size:7.5px;line-height:1;font-weight:680;text-transform:uppercase}.wa-sequence-step[data-channel=linkedin] .wa-sequence-step__channel{background:#0a66c2}.wa-sequence-step[data-channel=call] .wa-sequence-step__channel{background:#2f7d4f}.wa-sequence-step__copy{display:grid;min-width:0}.wa-sequence-step__copy strong{color:var(--wa-ink);font-size:10px;line-height:1.12;font-weight:560;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wa-sequence-step__copy span{color:var(--wa-color-muted);font-size:10px;line-height:1.22;font-weight:410}.wa-sequence-step[data-step-open=false]{align-items:center;padding-top:6px;padding-bottom:6px}.wa-sequence-step[data-step-selected=true]{border-color:#11110fb8;background:#fffff9}.wa-sequence-step[data-step-open=false] .wa-sequence-step__copy span{display:none}.wa-sequence-wait{display:grid;grid-template-columns:48px minmax(0,1fr);gap:7px;align-items:center;min-height:18px;padding:0 8px;color:var(--wa-color-muted);font-size:8.5px;line-height:1;font-weight:560;letter-spacing:0;text-transform:uppercase}.wa-sequence-wait:before{content:"";justify-self:center;width:1px;height:14px;border-radius:999px;background:var(--wa-line-10)}.wa-sequence-wait__label{white-space:nowrap}.wa-sequence-copy-panel{display:grid;align-content:start;gap:7px;min-width:0;min-height:180px;padding:11px 12px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel)}.wa-sequence-copy-panel__meta{color:var(--wa-color-muted);font-size:9px;line-height:1;font-weight:650;text-transform:uppercase}.wa-sequence-copy-panel__subject{color:var(--wa-ink);font-size:12px;line-height:1.16;font-weight:560}.wa-sequence-copy-panel__body{margin:0;color:var(--wa-ink);font-size:10.5px;line-height:1.32;font-weight:410;white-space:pre-line}.wa-engage-channels{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:7px}.wa-engage-channel{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:7px;align-items:start;min-width:0;min-height:58px;padding:9px 10px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);color:var(--wa-ink);background:var(--wa-row-bg);font:inherit;text-align:left;will-change:transform,opacity}.wa-engage-channel__copy{display:grid;gap:3px;min-width:0}.wa-engage-channel__copy strong{color:var(--wa-ink);font-size:11px;line-height:1.1;font-weight:570}.wa-engage-channel__copy span{color:var(--wa-color-muted);font-size:9.5px;line-height:1.16;font-weight:410}.wa-engage-channel__badge{display:inline-flex;align-items:center;min-height:17px;padding:0 6px;border-radius:999px;color:var(--wa-color-inverse);background:var(--wa-color-accent);font-size:8px;line-height:1;font-weight:740;text-transform:uppercase;white-space:nowrap}.wa-sequence-kickoff{display:grid;gap:3px;justify-items:start;justify-self:end;width:auto;min-width:0;min-height:36px;padding:7px 10px;border:1px solid var(--wa-ink);border-radius:var(--wa-radius-sm);color:var(--wa-color-inverse);background:var(--wa-ink);font:inherit;text-align:left;cursor:pointer;box-shadow:0 10px 22px #1717141f;will-change:transform,opacity}.wa-sequence-kickoff__label{font-size:11px;line-height:1.05;font-weight:580}.wa-sequence-kickoff__detail{color:#fffffbb8;font-size:8.5px;line-height:1.15;font-weight:410}.wa-sequence-kickoff[data-launched=true]{border-color:var(--wa-color-accent);color:var(--wa-ink);background:var(--wa-color-accent)}.wa-sequence-kickoff[data-launched=true] .wa-sequence-kickoff__detail{color:#11110f9e}.wa-composer{position:absolute;right:calc(var(--wa-chat-x-padding) - var(--wa-composer-outset-x));bottom:var(--wa-composer-bottom-outset);left:calc(var(--wa-chat-x-padding) - var(--wa-composer-outset-x));z-index:3;display:grid;grid-template-columns:minmax(0,1fr) var(--wa-composer-send-size);gap:10px;align-items:center;height:var(--wa-composer-height);min-height:0;padding:6px 8px 6px 18px;margin:0;overflow:hidden;border:1px solid var(--wa-color-input-line);border-radius:999px;background:var(--wa-panel);box-shadow:0 18px 34px #1717141f,0 1px #ffffffbd inset;transform-origin:center center;contain:layout paint style;backface-visibility:hidden;transition:border-color .14s ease,box-shadow .14s ease;will-change:left,bottom,width,height,padding,border-width,gap}.wa-composer[data-visible=false]{pointer-events:none}.wa-composer[data-focused=true]{border-color:var(--wa-orange);box-shadow:0 18px 34px #1717141f,0 1px #ffffffbd inset}.wa-composer__placeholder{display:flex;align-items:center;min-width:0;min-height:38px;padding:0;overflow:hidden;border:0;border-radius:0;color:var(--wa-ink);background:transparent;font-size:14px;font-weight:460;text-overflow:ellipsis;white-space:nowrap}.wa-composer__placeholder:empty:before{content:"Ask the assistant...";color:var(--wa-placeholder)}.wa-composer__send{display:inline-flex;align-items:center;justify-content:center;width:var(--wa-composer-send-size);min-width:var(--wa-composer-send-size);height:var(--wa-composer-send-size);padding:0 0 2px;border:0;border-radius:999px;color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);font-size:18px;line-height:1;font-weight:680;cursor:default;white-space:nowrap}.wa-history-resume{position:absolute;right:auto;bottom:calc(var(--wa-composer-bottom-outset) + var(--wa-composer-height) - var(--wa-history-resume-height));left:50%;z-index:5;display:inline-flex;align-items:center;gap:10px;min-height:var(--wa-history-resume-height);padding:0 18px 0 12px;border:1px solid var(--wa-line-12);border-radius:999px;color:var(--wa-color-heading-strong);background:#fffff9f5;box-shadow:0 22px 48px #17171433,0 8px 18px #1717141a,0 1px #ffffffbd inset;font:inherit;font-size:13px;line-height:1;font-weight:520;letter-spacing:0;cursor:default;opacity:0;pointer-events:none;transform:translate(-50%,6px) scale(.98);transition:opacity .16s ease,transform .18s ease}.wa-section[data-chat-history-paused=true] .wa-history-resume{opacity:1;pointer-events:auto;transform:translate(-50%) scale(1)}.wa-history-resume__icon{position:relative;display:grid;place-items:center;width:24px;height:24px;border-radius:999px;color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);font-size:0;line-height:0}.wa-history-resume__icon:before{content:"";position:absolute;top:50%;left:50%;width:0;height:0;transform:translate(-34%,-40%);border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:7px solid currentColor}.wa-stage__eyebrow,.wa-stage__label,.wa-stage__status{display:none}.wa-builder{position:relative;grid-column:1 / -1;justify-self:center;display:grid;gap:24px;width:min(var(--wa-window-width),calc(100vw - 36px));margin-top:12px;padding-top:58px;border-top:1px solid var(--wa-line-10)}.wa-builder__header{display:grid;grid-template-columns:minmax(0,1fr);gap:12px;align-items:start}.wa-builder__eyebrow{margin:0 0 10px;color:var(--wa-color-accent);font-size:12px;line-height:1;font-weight:640;letter-spacing:.02em;text-transform:uppercase}.wa-builder__title{max-width:780px;margin:0;color:var(--wa-color-heading);font-size:clamp(31px,2.25vw,42px);line-height:1.04;font-weight:520;letter-spacing:0}.wa-builder__lede{margin:0;color:var(--wa-color-muted);font-size:15px;line-height:1.35;font-weight:430}.wa-builder__tabs{display:grid;grid-template-columns:minmax(0,1fr);gap:8px}.wa-builder-tab{display:grid;gap:4px;width:100%;min-width:0;padding:12px 14px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);color:var(--wa-color-text);background:var(--wa-panel);cursor:default;text-align:left}.wa-builder-tab.is-active{border-color:var(--wa-color-accent);background:var(--wa-card-accent-bg);box-shadow:inset 3px 0 0 var(--wa-color-accent)}.wa-builder-tab__title{min-width:0;overflow:hidden;color:var(--wa-color-heading-strong);font-size:14px;line-height:1.12;font-weight:540;text-overflow:ellipsis;white-space:nowrap}.wa-builder-tab__count{color:var(--wa-color-muted);font-size:11px;line-height:1;font-weight:430}.wa-builder__layout{display:grid;grid-template-columns:minmax(0,1fr);gap:18px;align-items:start}.wa-builder__workspace{display:grid;gap:14px;min-width:0}.wa-builder__add-rail{display:grid;grid-template-columns:minmax(0,1fr);gap:8px}.wa-builder-add-button{width:100%;min-height:34px;padding:0 12px;border:1px solid var(--wa-line-12);border-radius:999px;color:var(--wa-color-text);background:var(--wa-panel);font-size:12px;line-height:1;font-weight:500;cursor:default;white-space:nowrap}.wa-builder-add-button:hover{border-color:var(--wa-line-20);background:var(--wa-color-soft-surface)}.wa-builder__thread{display:grid;gap:20px;align-content:start;min-height:560px;max-height:720px;min-width:0;padding:30px;overflow:auto;border:1px solid var(--wa-line-10);border-radius:14px;background:linear-gradient(to bottom,var(--wa-panel),var(--wa-row-bg)),radial-gradient(circle at top left,var(--wa-card-accent-bg),transparent 36%)}.wa-builder-step{display:grid;gap:7px;min-width:0}.wa-builder-step .wa-message{width:100%;max-width:100%;justify-self:stretch}.wa-builder-step[data-builder-kind=assistant] .wa-message,.wa-builder-step[data-builder-kind=status] .wa-message,.wa-builder-step[data-builder-kind=cursor] .wa-message{width:min(100%,680px);max-width:100%;grid-template-columns:minmax(0,1fr)}.wa-builder-step[data-builder-kind=user],.wa-builder-step[data-builder-kind=file]{justify-items:stretch}.wa-builder-step[data-builder-kind=component] .wa-message,.wa-builder-step[data-builder-kind=thinking] .wa-message{width:min(100%,1080px);max-width:100%}.wa-builder-step[data-builder-kind=assistant] .wa-message__body,.wa-builder-step[data-builder-kind=status] .wa-message__body,.wa-builder-step[data-builder-kind=cursor] .wa-message__body,.wa-builder-step[data-builder-kind=component] .wa-message__body,.wa-builder-step[data-builder-kind=thinking] .wa-message__body{width:100%}.wa-builder-step.is-selected .wa-message__body{outline:1px solid var(--wa-color-accent);outline-offset:3px}.wa-builder-step.is-dragging{opacity:.42}.wa-builder-step.is-drop-before,.wa-builder-step.is-drop-after{position:relative}.wa-builder-step.is-drop-before:before,.wa-builder-step.is-drop-after:after{content:"";display:block;height:2px;border-radius:999px;background:var(--wa-color-accent)}.wa-builder-step.is-drop-before:before{margin-bottom:10px}.wa-builder-step.is-drop-after:after{margin-top:10px}.wa-builder-message__body{max-width:none}.wa-builder-bubble{display:grid;gap:7px;min-width:0}.wa-builder-step__kind{display:inline-flex;width:max-content;max-width:100%;color:var(--wa-color-muted);font-size:10px;line-height:1;font-weight:640;letter-spacing:.02em;text-transform:uppercase}.wa-builder-step__textarea{display:block;width:100%;min-height:19px;padding:0;overflow:hidden;border:0;color:inherit;background:transparent;font-size:inherit;line-height:inherit;font-weight:inherit;letter-spacing:0;outline:0}.wa-builder-step__textarea::selection{background:var(--wa-card-accent-bg)}.wa-builder-step__toolbar{display:flex;gap:6px;justify-content:flex-start;padding-left:3px;opacity:0;transform:translateY(-2px);transition:opacity .14s ease,transform .14s ease}.wa-builder-step[data-builder-kind=user] .wa-builder-step__toolbar,.wa-builder-step[data-builder-kind=file] .wa-builder-step__toolbar{justify-content:flex-end;padding-right:3px;padding-left:0}.wa-builder-step:hover .wa-builder-step__toolbar,.wa-builder-step:focus-within .wa-builder-step__toolbar,.wa-builder-step.is-selected .wa-builder-step__toolbar{opacity:1;transform:translateY(0)}.wa-builder-step__action{display:inline-flex;align-items:center;justify-content:center;width:28px;min-width:28px;height:28px;padding:0;border:1px solid var(--wa-line-10);border-radius:999px;color:var(--wa-color-muted);background:var(--wa-panel);font-size:10px;line-height:1;font-weight:560;cursor:default;white-space:nowrap}.wa-builder-step__action svg{display:block;width:15px;height:15px}.wa-builder-step__drag{cursor:grab}.wa-builder-step__drag:active{cursor:grabbing}.wa-builder-step__action:disabled{opacity:.34}.wa-builder-step__action:not(:disabled):hover{color:var(--wa-color-text);border-color:var(--wa-line-20)}.wa-builder-thinking{gap:10px;width:100%}.wa-builder-thinking[data-thinking-header-suppressed=true]{padding-top:0}.wa-builder-research-step{min-height:64px}.wa-builder-research-step .wa-builder-step__textarea{color:var(--wa-ink);font-weight:var(--wa-chat-thinking-weight)}.wa-builder-thinking__header-input,.wa-builder-thinking__elapsed-input,.wa-builder-thinking__detail-input,.wa-builder-thinking__disclosure-input{width:100%;min-width:0;border:0;color:inherit;background:transparent;font:inherit;letter-spacing:0;outline:0}.wa-builder-thinking__header-input{min-width:86px}.wa-builder-thinking__elapsed-input{width:62px}.wa-builder-thinking__detail-input{color:var(--wa-color-muted);font-size:inherit;line-height:inherit;font-weight:inherit;resize:none}.wa-builder-thinking__disclosure{margin-top:3px}.wa-builder-thinking__disclosure-input{color:var(--wa-color-muted);font-size:12px;line-height:1.1;font-weight:560}.wa-builder-component-card{display:grid;width:100%;min-height:96px;padding:16px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-row-bg)}.wa-builder-component-card__content{display:grid;gap:12px;align-content:start;min-width:0}.wa-builder-component-card__title,.wa-builder-component-card__subtitle,.wa-builder-component-list__item,.wa-builder-table-editor__meta,.wa-builder-table-editor__cell,.wa-builder-strategy-editor input,.wa-builder-strategy-editor textarea,.wa-builder-enrichment-editor input,.wa-builder-data-sources-editor input,.wa-builder-data-sources-editor textarea,.wa-builder-file-list-editor input,.wa-builder-file-list-editor textarea,.wa-builder-style-profile-editor input,.wa-builder-style-profile-editor textarea,.wa-builder-proximity-editor input,.wa-builder-proximity-editor textarea,.wa-builder-swipe-game-editor input,.wa-builder-swipe-game-editor textarea,.wa-builder-sequence-editor input,.wa-builder-sequence-editor textarea,.wa-builder-channel-editor input,.wa-builder-channel-editor textarea,.wa-builder-sequence-editor__count{width:100%;min-width:0;border:0;color:var(--wa-color-text);background:transparent;font:inherit;letter-spacing:0;outline:0}.wa-builder-component-card__title{min-height:28px;color:var(--wa-color-heading-strong);font-size:20px;line-height:1.12;font-weight:520}.wa-builder-component-card__subtitle{min-height:19px;color:var(--wa-color-muted);font-size:13px;line-height:1.3;font-weight:430}.wa-builder-component-list{display:grid;gap:8px}.wa-builder-component-list__item{min-height:32px;padding:7px 10px;border:1px solid var(--wa-line-08);border-radius:var(--wa-radius-sm);background:var(--wa-panel);font-size:13px;line-height:1.25}.wa-builder-table-editor{display:grid;gap:0;min-width:0;overflow:auto;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel)}.wa-builder-table-editor__row{display:grid;grid-template-columns:var(--wa-builder-table-columns);min-width:max-content;border-bottom:1px solid var(--wa-line-08)}.wa-builder-table-editor__row:last-child{border-bottom:0}.wa-builder-table-editor__row[data-header=true]{background:var(--wa-row-bg)}.wa-builder-table-editor__cell{min-height:38px;padding:10px 12px;border-right:1px solid var(--wa-line-08);font-size:13px;line-height:1.15}.wa-builder-table-editor__cell:last-child{border-right:0}.wa-builder-table-editor__row[data-header=true] .wa-builder-table-editor__cell{color:var(--wa-color-muted);font-weight:560}.wa-builder-table-editor__meta{min-height:20px;color:var(--wa-color-muted);font-size:12px;line-height:1.2;font-weight:480}.wa-builder-table-editor__footer-fields{display:grid;gap:8px}.wa-builder-table-editor__action-row{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));overflow:hidden;border:1px solid var(--wa-line-08);border-radius:var(--wa-radius-sm);background:var(--wa-panel)}.wa-builder-strategy-editor{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.wa-builder-strategy-editor__card{display:grid;gap:9px;min-width:0;padding:12px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel)}.wa-builder-strategy-editor__label{color:var(--wa-color-accent);font-size:10px;line-height:1;font-weight:700;text-transform:uppercase}.wa-builder-strategy-editor__title{min-height:37px;color:var(--wa-color-heading-strong);font-size:15px;line-height:1.15;font-weight:540}.wa-builder-strategy-editor__summary{min-height:76px;color:var(--wa-color-text);font-size:12.5px;line-height:1.25;font-weight:450}.wa-builder-enrichment-editor{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.wa-builder-enrichment-editor__group{display:grid;gap:7px;padding:12px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel)}.wa-builder-enrichment-editor__title{min-height:26px;color:var(--wa-color-heading-strong);font-size:14px;line-height:1.1;font-weight:520}.wa-builder-enrichment-editor__step{min-height:28px;padding:6px 8px;border:1px solid var(--wa-line-08);border-radius:6px;color:var(--wa-color-text);background:var(--wa-row-bg);font-size:12px;line-height:1}.wa-builder-data-sources-editor{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.wa-builder-data-sources-editor__card{display:grid;gap:7px;min-width:0;padding:12px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel)}.wa-builder-data-sources-editor__category{min-height:18px;color:var(--wa-color-accent);font-size:10px;line-height:1;font-weight:680;text-transform:uppercase}.wa-builder-data-sources-editor__name{min-height:20px;color:var(--wa-color-heading-strong);font-size:14px;line-height:1.15;font-weight:560}.wa-builder-data-sources-editor__detail{min-height:48px;color:var(--wa-color-muted);font-size:12px;line-height:1.24;font-weight:430}.wa-builder-file-list-editor,.wa-builder-style-profile-editor,.wa-builder-style-profile-editor__examples,.wa-builder-proximity-editor,.wa-builder-swipe-game-editor,.wa-builder-sequence-editor,.wa-builder-channel-editor{display:grid;gap:10px}.wa-builder-file-list-editor__card,.wa-builder-style-profile-editor__row,.wa-builder-proximity-editor__row,.wa-builder-swipe-game-editor__row,.wa-builder-sequence-editor__card,.wa-builder-channel-editor__card{display:grid;gap:7px;min-width:0;padding:12px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel)}.wa-builder-file-list-editor__card{grid-template-columns:46px minmax(0,1fr)}.wa-builder-file-list-editor__detail{grid-column:1 / -1}.wa-builder-file-list-editor__type,.wa-builder-proximity-editor__rank,.wa-builder-proximity-editor__score,.wa-builder-swipe-game-editor__decision,.wa-builder-sequence-editor__count,.wa-builder-channel-editor__badge{color:var(--wa-color-accent);font-size:11px;line-height:1.1;font-weight:700;text-transform:uppercase}.wa-builder-file-list-editor__name,.wa-builder-style-profile-editor__value,.wa-builder-proximity-editor__name,.wa-builder-swipe-game-editor__label,.wa-builder-sequence-editor__name,.wa-builder-channel-editor__label{color:var(--wa-color-heading-strong);font-size:14px;line-height:1.16;font-weight:560}.wa-builder-file-list-editor__detail,.wa-builder-style-profile-editor__example,.wa-builder-proximity-editor__personalization,.wa-builder-swipe-game-editor__detail,.wa-builder-sequence-editor__personalization,.wa-builder-channel-editor__detail{min-height:44px;color:var(--wa-color-muted);font-size:12px;line-height:1.24;font-weight:430}.wa-builder-style-profile-editor{grid-template-columns:repeat(2,minmax(0,1fr))}.wa-builder-style-profile-editor__label,.wa-builder-proximity-editor__company,.wa-builder-proximity-editor__title,.wa-builder-proximity-editor__proximity,.wa-builder-swipe-game-editor__decision,.wa-builder-sequence-editor__company{color:var(--wa-color-muted);font-size:11px;line-height:1.12;font-weight:520}.wa-builder-proximity-editor__row{grid-template-columns:42px 42px repeat(3,minmax(0,1fr))}.wa-builder-proximity-editor__proximity,.wa-builder-proximity-editor__personalization,.wa-builder-swipe-game-editor__detail{grid-column:1 / -1}.wa-builder-swipe-game-editor__row{grid-template-columns:72px minmax(0,1fr)}.wa-builder-sequence-editor{grid-template-columns:repeat(3,minmax(0,1fr))}.wa-builder-sequence-editor__card{align-content:start}.wa-builder-sequence-editor__subject{color:var(--wa-color-text);font-size:12px;line-height:1.18;font-weight:520}.wa-builder-channel-editor{grid-template-columns:repeat(3,minmax(0,1fr))}.wa-builder-channel-editor__card{grid-template-columns:minmax(0,1fr) 58px}.wa-builder-channel-editor__detail{grid-column:1 / -1}.wa-builder-cursor-line{display:grid;grid-template-columns:18px minmax(0,1fr);gap:10px;align-items:start}.wa-builder-cursor-line__cursor{display:block;width:14px;height:23px;background:var(--wa-cursor-arrow) 0 0 / 14px 23px no-repeat}.wa-builder-file-pill{display:grid;grid-template-columns:42px minmax(0,1fr);gap:10px;align-items:center}.wa-builder-file-pill__icon{display:inline-flex;align-items:center;justify-content:center;width:42px;height:32px;border-radius:8px;color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);font-size:10px;line-height:1;font-weight:680}.wa-builder__side{position:static;display:grid;grid-template-columns:minmax(0,1fr);gap:14px;width:100%;min-width:0}.wa-builder__panel,.wa-builder-export{display:grid;gap:14px;padding:16px;border:1px solid var(--wa-line-10);border-radius:14px;background:var(--wa-panel)}.wa-builder-panel__divider{height:1px;margin:2px 0;background:var(--wa-line-10)}.wa-builder-panel__empty{margin:0;color:var(--wa-color-muted);font-size:13px;line-height:1.32}.wa-builder-field{display:grid;gap:7px;min-width:0}.wa-builder-field__label,.wa-builder-export__label{color:var(--wa-color-muted);font-size:11px;line-height:1;font-weight:620;letter-spacing:.02em;text-transform:uppercase}.wa-builder-export__header{display:flex;gap:12px;align-items:center;justify-content:space-between;min-width:0}.wa-builder-export__copy{display:inline-flex;gap:6px;align-items:center;justify-content:center;min-height:28px;padding:0 10px;border:1px solid var(--wa-line-10);border-radius:999px;color:var(--wa-color-text);background:var(--wa-panel);font-size:12px;line-height:1;font-weight:520;cursor:default;white-space:nowrap}.wa-builder-export__copy svg{display:block;width:14px;height:14px}.wa-builder-export__copy path{fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}.wa-builder-export__copy:hover{border-color:var(--wa-line-20);background:var(--wa-color-soft-surface)}.wa-builder-export__copy[data-copy-state=copied]{color:var(--wa-color-inverse);border-color:var(--wa-color-heading-strong);background:var(--wa-color-heading-strong)}.wa-builder-field__control,.wa-builder-export__textarea{width:100%;min-width:0;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);color:var(--wa-color-text);background:var(--wa-panel);font-size:13px;line-height:1.32;font-weight:430;outline:0}.wa-builder-field__control{min-height:38px;padding:10px}.wa-builder-field__control[type=color]{height:42px;padding:5px}.wa-builder-field__control:focus,.wa-builder-export__textarea:focus{border-color:var(--wa-color-accent);box-shadow:0 0 0 3px var(--wa-card-accent-bg)}.wa-builder-export__textarea{min-height:172px;max-height:320px;padding:12px;overflow:auto;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:11px;white-space:pre}.wa-builder__status{margin:0;color:var(--wa-color-muted);font-size:12px;line-height:1.25;font-weight:430}.wa-cursor{position:absolute;top:0;left:0;z-index:20;width:1px;height:1px;pointer-events:none;transform:translateZ(0);transform-origin:0 0;backface-visibility:hidden;will-change:transform,opacity}.wa-cursor__float{position:absolute;top:0;left:0;width:1px;height:1px;transform-origin:0 0;backface-visibility:hidden;will-change:transform}.wa-cursor__glyph{position:absolute;top:0;left:0;width:var(--wa-cursor-default-width);height:var(--wa-cursor-default-height);background-image:var(--wa-cursor-arrow);background-repeat:no-repeat;background-position:0 0;background-size:100% 100%;transform:translate(0);transform-origin:0 0;backface-visibility:hidden;filter:drop-shadow(0 2px 3px var(--wa-cursor-shadow));will-change:transform}.wa-cursor__glyph:before,.wa-cursor__glyph:after{content:"";position:absolute;opacity:0;top:0;left:0;width:var(--wa-cursor-default-width);height:var(--wa-cursor-default-height);background-repeat:no-repeat;background-position:0 0;background-size:100% 100%;pointer-events:none}.wa-cursor__mimic-head,.wa-cursor__mimic-tail{position:absolute;inset:0;display:none;width:100%;height:100%;background-repeat:no-repeat;background-position:0 0;background-size:100% 100%;pointer-events:none;transform-origin:6px 13.25px;backface-visibility:hidden;will-change:transform}.wa-cursor__mimic-head{z-index:2;background-image:var(--wa-cursor-arrow-head)}.wa-cursor__mimic-tail{z-index:1;background-image:var(--wa-cursor-arrow-tail)}.wa-cursor[data-cursor-mimicking=true][data-cursor-mode=default] .wa-cursor__glyph{background-image:none}.wa-cursor[data-cursor-mimicking=true][data-cursor-mode=default] .wa-cursor__mimic-head,.wa-cursor[data-cursor-mimicking=true][data-cursor-mode=default] .wa-cursor__mimic-tail{display:block}.wa-cursor[data-cursor-mimicking=true][data-cursor-mode=default] .wa-cursor__mimic-tail{animation:wa-cursor-tail-wag 245ms infinite}.wa-cursor[data-cursor-mode=pointer] .wa-cursor__glyph,.wa-cursor[data-cursor-mode=click] .wa-cursor__glyph{width:32px;height:32px;background-image:var(--wa-cursor-hand);transform:translate(-10px,-1px)}.wa-cursor[data-cursor-mode=drag] .wa-cursor__glyph{width:32px;height:32px;background-image:var(--wa-cursor-closedhand);transform:translate(-16px,-16px)}.wa-cursor[data-cursor-mode=release] .wa-cursor__glyph{width:32px;height:32px;background-image:var(--wa-cursor-openhand);transform:translate(-16px,-16px)}.wa-cursor[data-cursor-mode=text] .wa-cursor__glyph{width:23px;height:22px;background-image:var(--wa-cursor-ibeam);transform:translate(-11px,-11px)}@keyframes wa-cursor-tail-wag{0%,to{animation-timing-function:cubic-bezier(.16,.88,.24,1);transform:translateZ(0) rotate(-1deg) skew(0)}24%{animation-timing-function:cubic-bezier(.16,0,.24,1);transform:translate3d(.22px,0,0) rotate(9.5deg) skew(1.65deg)}38%{animation-timing-function:cubic-bezier(.16,.88,.24,1);transform:translate3d(.08px,0,0) rotate(3.6deg) skew(.65deg)}64%{animation-timing-function:cubic-bezier(.2,0,.24,1);transform:translate3d(-.2px,0,0) rotate(-8.5deg) skew(-1.5deg)}}@keyframes wa-dot{0%,80%,to{opacity:.28;transform:translateY(0)}40%{opacity:1;transform:translateY(-3px)}}@keyframes wa-caret{0%,45%{opacity:1}46%,to{opacity:0}}@keyframes wa-text-shimmer{0%{background-position:100% 0}62%,to{background-position:0% 0}}@media(max-width:1180px){.wa-section{padding:82px 24px 96px}.wa-section__inner{grid-template-columns:1fr;row-gap:56px}.wa-copy{max-width:880px}.wa-story-controls,.wa-stage{grid-column:1}.wa-stage{width:min(660px,100%);justify-self:center}.wa-stage__media{right:0}.wa-window{margin-left:auto;margin-right:auto}.wa-builder__header,.wa-builder__layout{grid-template-columns:1fr}.wa-builder__side{position:static;grid-template-columns:minmax(0,1fr);align-items:start}.wa-builder__status{grid-column:1 / -1}}@media(max-width:760px){.wa-section{--wa-chat-x-padding: 6px;--wa-chat-first-entry-offset: calc(var(--wa-chat-top-fade) + 12px);--wa-composer-outset-x: 14px;--wa-composer-bottom-outset: 18px;--wa-composer-height: 50px;--wa-composer-send-size: 36px;--wa-history-resume-height: 40px;padding:54px 18px 72px}.wa-section__inner{row-gap:40px}.wa-copy__title{font-size:clamp(36px,11vw,48px);line-height:1.05}.wa-story-tabs{gap:22px}.wa-story-tab{gap:18px;min-height:64px}.wa-story-tab__marker{min-height:64px}.wa-story-tab__body{gap:13px;padding-top:9px}.wa-story-tab__title{font-size:24px}.wa-story-tab__description{font-size:15px}.wa-builder{gap:18px;padding-top:40px}.wa-builder__header{gap:16px}.wa-builder__title{font-size:clamp(28px,9vw,36px)}.wa-builder__lede{font-size:14px}.wa-builder-tab{flex:1 1 100%;min-width:0}.wa-builder__thread{min-height:500px;max-height:660px;padding:18px}.wa-builder-step .wa-message{max-width:100%}.wa-builder-step[data-builder-kind=component] .wa-message,.wa-builder-step[data-builder-kind=thinking] .wa-message{width:100%}.wa-builder-step__toolbar{opacity:1;transform:none}.wa-builder-component-card,.wa-builder-file-pill{grid-template-columns:1fr}.wa-builder-cursor-line{grid-template-columns:16px minmax(0,1fr)}.wa-builder__side{grid-template-columns:1fr}.wa-stage{width:100%;min-height:560px}.wa-stage__media{top:-22px;right:0;width:58vw;min-width:220px;height:570px}.wa-window{width:min(100%,590px);margin:82px 0 0}.wa-chat-shell{height:520px;border-radius:16px}.wa-chat-shell__body{gap:0}.wa-thread{--wa-chat-entry-gap: 14px}.wa-thread{min-height:0;max-height:none}.wa-message{max-width:96%}.wa-message__body{max-width:min(var(--wa-ai-message-max-width),340px);font-size:13px}.wa-message[data-message-role=user] .wa-message__body{max-width:min(var(--wa-user-message-max-width),280px)}.wa-result-row{grid-template-columns:1fr;gap:4px}.wa-result-row strong{white-space:normal}.wa-signup-scene{padding-bottom:4px}.wa-signup-field{width:min(292px,88%)}.wa-research-step{min-height:52px;gap:7px;padding-left:0}.wa-research-step__label{font-size:12px}.wa-research-step__detail{font-size:10px}.wa-result-grid.has-strategy-plans{grid-template-columns:minmax(0,1fr);gap:7px}.wa-data-source-grid--marketing{inset:calc(var(--wa-chat-top-fade) - 4px) 16px 18px;gap:14px}.wa-data-source-grid--marketing .wa-data-source-grid__title{font-size:18px}.wa-data-source-grid--marketing .wa-data-source-grid__groups{grid-template-columns:repeat(2,minmax(0,1fr));gap:11px 10px}.wa-data-source-grid__column{gap:11px}.wa-data-source-grid--marketing .wa-data-source-group{gap:6px;padding:0}.wa-data-source-grid--marketing .wa-data-source-group__title{font-size:11px}.wa-data-source-grid--marketing .wa-data-source-grid__list{grid-template-columns:minmax(0,1fr);gap:6px;min-height:54px;padding:10px 12px}.wa-data-source-grid--marketing .wa-data-vendor-logo{height:auto;min-height:0}.wa-data-source-grid--marketing .wa-data-vendor-logo__mark{font-size:11px}.wa-data-source-grid--marketing .wa-data-vendor-logo__image{max-height:19px}.wa-data-source-grid__list,.wa-engage-channels,.wa-style-profile__rows,.wa-swipe-game__actions,.wa-builder-data-sources-editor,.wa-builder-style-profile-editor,.wa-builder-proximity-editor__row,.wa-builder-swipe-game-editor__row,.wa-builder-sequence-editor,.wa-builder-channel-editor,.wa-sequence-card{grid-template-columns:minmax(0,1fr)}.wa-sequence-copy-panel{min-height:140px}.wa-sequence-step{grid-template-columns:minmax(0,1fr)}.wa-sequence-step__channel{justify-self:start;padding:0 8px}.wa-sequence-wait{grid-template-columns:minmax(0,1fr);min-height:16px;padding:0 8px}.wa-sequence-wait:before{display:none}.wa-sequence-person-button{width:22px;height:22px;padding:0;font-size:13px}.wa-data-table{gap:0;padding:0}.wa-data-table__title{font-size:12px}.wa-data-table__count{font-size:9px}.wa-data-table__row{min-height:24px}.wa-data-table__row[data-header=true]{min-height:22px}.wa-data-table__cell{padding:0 4px;font-size:7.5px;line-height:1.06}.wa-data-table__row[data-header=true] .wa-data-table__cell{font-size:8px}.wa-data-table__row[data-header=true] .wa-data-table__cell:last-of-type{padding-right:26px}.wa-data-table__add{top:3px;right:4px;width:18px;height:16px;border-radius:4px;font-size:12px}.wa-data-table__footer{align-items:start;gap:6px;padding-top:6px}.wa-data-table__actions{gap:4px}.wa-data-table-action{width:22px;height:22px;padding:0;border-radius:4px}.wa-data-table-action__icon{width:12px;height:12px}.wa-data-table-action__badge{min-height:12px;padding:0 4px;font-size:6.5px}.wa-data-table-floating-tooltip{min-height:25px;padding:0 9px;font-size:9.5px}.wa-data-table-floating-tooltip[data-has-badge=true]{min-height:43px;padding:7px 9px;gap:5px}.wa-data-table-floating-tooltip__badge{min-height:13px;padding:0 5px;font-size:7px}.wa-data-table__pagination{gap:4px;font-size:7.5px}.wa-data-table__page-controls{gap:2px}.wa-data-table__page-button{width:17px;height:17px;border-radius:4px;font-size:7.5px}.wa-data-table-person{grid-template-columns:20px minmax(0,1fr);gap:4px}.wa-data-table-person__avatar-wrap,.wa-data-table-person__avatar{width:20px;height:20px}.wa-data-table-person__source{right:0;bottom:0;width:10px;height:10px}.wa-data-table-person__source[data-source=signal]:before{right:2px;bottom:2px;width:5px}.wa-data-table-person__source[data-source=signal]:after{right:1px;bottom:4px;height:4px}.wa-data-table-person__source[data-source=database]:before{top:2px;left:2px}.wa-data-table-person__source[data-source=engage]:before{top:3px;left:2px;width:6px}.wa-data-table-person__name{font-size:8px;line-height:1.03}.wa-enrichment-panel{gap:9px;max-width:100%}.wa-enrichment-panel__header{grid-template-columns:12px auto auto;gap:6px;padding:0;font-size:12px}.wa-waterfall-rows{gap:7px}.wa-waterfall-row{grid-template-columns:13px minmax(82px,auto) minmax(0,1fr);gap:6px;min-height:24px;font-size:11px}.wa-waterfall-chip{max-width:72px;padding-right:5px;font-size:8.5px}.wa-strategy-plan{min-height:112px;gap:5px;padding:9px}.wa-strategy-plan__title{min-height:0;font-size:12px}.wa-strategy-plan__summary{font-size:11px}.wa-swipe-game{max-width:100%}.wa-swipe-game__stack{height:168px}.wa-swipe-card{padding:18px 16px}.wa-swipe-card__label{font-size:16px}.wa-swipe-card__detail{font-size:10.5px}.wa-composer{grid-template-columns:minmax(0,1fr) var(--wa-composer-send-size);height:var(--wa-composer-height);padding:6px 8px 6px 15px}.wa-composer__placeholder{min-height:34px;font-size:13px}.wa-composer__send{width:var(--wa-composer-send-size);min-width:var(--wa-composer-send-size);height:var(--wa-composer-send-size);padding:0 0 2px}}@media(prefers-reduced-motion:reduce){.wa-section *,.wa-section *:before,.wa-section *:after{animation-duration:.001ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important}}', Xi = "chatbot-stories-styles";
function wl() {
  if (document.getElementById(Xi)) return;
  const s = document.createElement("style");
  s.id = Xi, s.textContent = fl, document.head.append(s);
}
function bl(s) {
  if (s instanceof HTMLElement) return s;
  const e = document.querySelector(s);
  if (!e)
    throw new Error(`ChatbotStories: root element not found for selector "${s}"`);
  return e;
}
function Zr(s = "[data-chatbot-stories]", e = {}) {
  return e.injectStyles !== !1 && wl(), gl(bl(s), e);
}
const _l = {
  init: Zr,
  defaultStories: Qr
};
if (typeof window < "u") {
  window.ChatbotStories = _l;
  const s = () => {
    document.querySelectorAll("[data-chatbot-stories][data-auto-init]").forEach((e) => {
      e.dataset.chatbotStoriesMounted || (e.dataset.chatbotStoriesMounted = "true", Zr(e));
    });
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", s, { once: !0 }) : s();
}
export {
  Qr as defaultStories,
  Zr as init
};
