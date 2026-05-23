function Le(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Rn(r, e) {
  r.prototype = Object.create(e.prototype), r.prototype.constructor = r, r.__proto__ = e;
}
var pe = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Ut = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, mi, Q, U, ye = 1e8, z = 1 / ye, Ja = Math.PI * 2, eo = Ja / 4, to = 0, In = Math.sqrt, ao = Math.cos, io = Math.sin, $ = function(e) {
  return typeof e == "string";
}, Y = function(e) {
  return typeof e == "function";
}, ze = function(e) {
  return typeof e == "number";
}, fi = function(e) {
  return typeof e > "u";
}, Me = function(e) {
  return typeof e == "object";
}, ie = function(e) {
  return e !== !1;
}, wi = function() {
  return typeof window < "u";
}, ea = function(e) {
  return Y(e) || $(e);
}, Ln = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, ee = Array.isArray, no = /random\([^)]+\)/g, ro = /,\s*/g, Oi = /(?:-?\.?\d|\.)+/gi, Dn = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, ft = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Ma = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Nn = /[+-]=-?[.\d]+/, oo = /[^,'"\[\]\s]+/gi, so = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, W, Se, ei, bi, ge = {}, ha = {}, qn, On = function(e) {
  return (ha = kt(e, ge)) && se;
}, yi = function(e, t) {
  return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, Gt = function(e, t) {
  return !t && console.warn(e);
}, Bn = function(e, t) {
  return e && (ge[e] = t) && ha && (ha[e] = t) || ge;
}, Wt = function() {
  return 0;
}, lo = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, la = {
  suppressEvents: !0,
  kill: !1
}, co = {
  suppressEvents: !0
}, _i = {}, Xe = [], ti = {}, zn, ce = {}, Pa = {}, Bi = 30, ca = [], xi = "", vi = function(e) {
  var t = e[0], a, i;
  if (Me(t) || Y(t) || (e = [e]), !(a = (t._gsap || {}).harness)) {
    for (i = ca.length; i-- && !ca[i].targetTest(t); )
      ;
    a = ca[i];
  }
  for (i = e.length; i--; )
    e[i] && (e[i]._gsap || (e[i]._gsap = new sr(e[i], a))) || e.splice(i, 1);
  return e;
}, lt = function(e) {
  return e._gsap || vi(_e(e))[0]._gsap;
}, Fn = function(e, t, a) {
  return (a = e[t]) && Y(a) ? e[t]() : fi(a) && e.getAttribute && e.getAttribute(t) || a;
}, ne = function(e, t) {
  return (e = e.split(",")).forEach(t) || e;
}, j = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, G = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, bt = function(e, t) {
  var a = t.charAt(0), i = parseFloat(t.substr(2));
  return e = parseFloat(e), a === "+" ? e + i : a === "-" ? e - i : a === "*" ? e * i : e / i;
}, uo = function(e, t) {
  for (var a = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < a; )
    ;
  return i < a;
}, pa = function() {
  var e = Xe.length, t = Xe.slice(0), a, i;
  for (ti = {}, Xe.length = 0, a = 0; a < e; a++)
    i = t[a], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, ki = function(e) {
  return !!(e._initted || e._startAt || e.add);
}, Hn = function(e, t, a, i) {
  Xe.length && !Q && pa(), e.render(t, a, !!(Q && t < 0 && ki(e))), Xe.length && !Q && pa();
}, Un = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match(oo).length < 2 ? t : $(e) ? e.trim() : e;
}, Gn = function(e) {
  return e;
}, me = function(e, t) {
  for (var a in t)
    a in e || (e[a] = t[a]);
  return e;
}, ho = function(e) {
  return function(t, a) {
    for (var i in a)
      i in t || i === "duration" && e || i === "ease" || (t[i] = a[i]);
  };
}, kt = function(e, t) {
  for (var a in t)
    e[a] = t[a];
  return e;
}, zi = function r(e, t) {
  for (var a in t)
    a !== "__proto__" && a !== "constructor" && a !== "prototype" && (e[a] = Me(t[a]) ? r(e[a] || (e[a] = {}), t[a]) : t[a]);
  return e;
}, ga = function(e, t) {
  var a = {}, i;
  for (i in e)
    i in t || (a[i] = e[i]);
  return a;
}, Bt = function(e) {
  var t = e.parent || W, a = e.keyframes ? ho(ee(e.keyframes)) : me;
  if (ie(e.inherit))
    for (; t; )
      a(e, t.vars.defaults), t = t.parent || t._dp;
  return e;
}, po = function(e, t) {
  for (var a = e.length, i = a === t.length; i && a-- && e[a] === t[a]; )
    ;
  return a < 0;
}, Wn = function(e, t, a, i, n) {
  var o = e[i], s;
  if (n)
    for (s = t[n]; o && o[n] > s; )
      o = o._prev;
  return o ? (t._next = o._next, o._next = t) : (t._next = e[a], e[a] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = o, t.parent = t._dp = e, t;
}, xa = function(e, t, a, i) {
  a === void 0 && (a = "_first"), i === void 0 && (i = "_last");
  var n = t._prev, o = t._next;
  n ? n._next = o : e[a] === t && (e[a] = o), o ? o._prev = n : e[i] === t && (e[i] = n), t._next = t._prev = t.parent = null;
}, Qe = function(e, t) {
  e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, ct = function(e, t) {
  if (e && (!t || t._end > e._dur || t._start < 0))
    for (var a = e; a; )
      a._dirty = 1, a = a.parent;
  return e;
}, go = function(e) {
  for (var t = e.parent; t && t.parent; )
    t._dirty = 1, t.totalDuration(), t = t.parent;
  return e;
}, ai = function(e, t, a, i) {
  return e._startAt && (Q ? e._startAt.revert(la) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, i));
}, mo = function r(e) {
  return !e || e._ts && r(e.parent);
}, Fi = function(e) {
  return e._repeat ? At(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, At = function(e, t) {
  var a = Math.floor(e = G(e / t));
  return e && a === e ? a - 1 : a;
}, ma = function(e, t) {
  return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, va = function(e) {
  return e._end = G(e._start + (e._tDur / Math.abs(e._ts || e._rts || z) || 0));
}, ka = function(e, t) {
  var a = e._dp;
  return a && a.smoothChildTiming && e._ts && (e._start = G(a._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), va(e), a._dirty || ct(a, e)), e;
}, Vn = function(e, t) {
  var a;
  if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (a = ma(e.rawTime(), t), (!t._dur || Jt(0, t.totalDuration(), a) - t._tTime > z) && t.render(a, !0)), ct(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (a = e; a._dp; )
        a.rawTime() >= 0 && a.totalTime(a._tTime), a = a._dp;
    e._zTime = -z;
  }
}, Ce = function(e, t, a, i) {
  return t.parent && Qe(t), t._start = G((ze(a) ? a : a || e !== W ? be(e, a, t) : e._time) + t._delay), t._end = G(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Wn(e, t, "_first", "_last", e._sort ? "_start" : 0), ii(t) || (e._recent = t), i || Vn(e, t), e._ts < 0 && ka(e, e._tTime), e;
}, Yn = function(e, t) {
  return (ge.ScrollTrigger || yi("scrollTrigger", t)) && ge.ScrollTrigger.create(t, e);
}, jn = function(e, t, a, i, n) {
  if (Si(e, t, n), !e._initted)
    return 1;
  if (!a && e._pt && !Q && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && zn !== de.frame)
    return Xe.push(e), e._lazy = [n, i], 1;
}, fo = function r(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || r(t));
}, ii = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, wo = function(e, t, a, i) {
  var n = e.ratio, o = t < 0 || !t && (!e._start && fo(e) && !(!e._initted && ii(e)) || (e._ts < 0 || e._dp._ts < 0) && !ii(e)) ? 0 : 1, s = e._rDelay, l = 0, c, d, u;
  if (s && e._repeat && (l = Jt(0, e._tDur, t), d = At(l, s), e._yoyo && d & 1 && (o = 1 - o), d !== At(e._tTime, s) && (n = 1 - o, e.vars.repeatRefresh && e._initted && e.invalidate())), o !== n || Q || i || e._zTime === z || !t && e._zTime) {
    if (!e._initted && jn(e, t, i, a, l))
      return;
    for (u = e._zTime, e._zTime = t || (a ? z : 0), a || (a = t && !u), e.ratio = o, e._from && (o = 1 - o), e._time = 0, e._tTime = l, c = e._pt; c; )
      c.r(o, c.d), c = c._next;
    t < 0 && ai(e, t, a, !0), e._onUpdate && !a && ue(e, "onUpdate"), l && e._repeat && !a && e.parent && ue(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === o && (o && Qe(e, 1), !a && !Q && (ue(e, o ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else e._zTime || (e._zTime = t);
}, bo = function(e, t, a) {
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
}, St = function(e, t, a, i) {
  var n = e._repeat, o = G(t) || 0, s = e._tTime / e._tDur;
  return s && !i && (e._time *= o / e._dur), e._dur = o, e._tDur = n ? n < 0 ? 1e10 : G(o * (n + 1) + e._rDelay * n) : o, s > 0 && !i && ka(e, e._tTime = e._tDur * s), e.parent && va(e), a || ct(e.parent, e), e;
}, Hi = function(e) {
  return e instanceof ae ? ct(e) : St(e, e._dur);
}, yo = {
  _start: 0,
  endTime: Wt,
  totalDuration: Wt
}, be = function r(e, t, a) {
  var i = e.labels, n = e._recent || yo, o = e.duration() >= ye ? n.endTime(!1) : e._dur, s, l, c;
  return $(t) && (isNaN(t) || t in i) ? (l = t.charAt(0), c = t.substr(-1) === "%", s = t.indexOf("="), l === "<" || l === ">" ? (s >= 0 && (t = t.replace(/=/, "")), (l === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (c ? (s < 0 ? n : a).totalDuration() / 100 : 1)) : s < 0 ? (t in i || (i[t] = o), i[t]) : (l = parseFloat(t.charAt(s - 1) + t.substr(s + 1)), c && a && (l = l / 100 * (ee(a) ? a[0] : a).totalDuration()), s > 1 ? r(e, t.substr(0, s - 1), a) + l : o + l)) : t == null ? o : +t;
}, zt = function(e, t, a) {
  var i = ze(t[1]), n = (i ? 2 : 1) + (e < 2 ? 0 : 1), o = t[n], s, l;
  if (i && (o.duration = t[1]), o.parent = a, e) {
    for (s = o, l = a; l && !("immediateRender" in s); )
      s = l.vars.defaults || {}, l = ie(l.vars.inherit) && l.parent;
    o.immediateRender = ie(s.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[n - 1];
  }
  return new X(t[0], o, t[n + 1]);
}, Je = function(e, t) {
  return e || e === 0 ? t(e) : t;
}, Jt = function(e, t, a) {
  return a < e ? e : a > t ? t : a;
}, J = function(e, t) {
  return !$(e) || !(t = so.exec(e)) ? "" : t[1];
}, _o = function(e, t, a) {
  return Je(a, function(i) {
    return Jt(e, t, i);
  });
}, ni = [].slice, Xn = function(e, t) {
  return e && Me(e) && "length" in e && (!t && !e.length || e.length - 1 in e && Me(e[0])) && !e.nodeType && e !== Se;
}, xo = function(e, t, a) {
  return a === void 0 && (a = []), e.forEach(function(i) {
    var n;
    return $(i) && !t || Xn(i, 1) ? (n = a).push.apply(n, _e(i)) : a.push(i);
  }) || a;
}, _e = function(e, t, a) {
  return U && !t && U.selector ? U.selector(e) : $(e) && !a && (ei || !Ct()) ? ni.call((t || bi).querySelectorAll(e), 0) : ee(e) ? xo(e, a) : Xn(e) ? ni.call(e, 0) : e ? [e] : [];
}, ri = function(e) {
  return e = _e(e)[0] || Gt("Invalid scope") || {}, function(t) {
    var a = e.current || e.nativeElement || e;
    return _e(t, a.querySelectorAll ? a : a === e ? Gt("Invalid scope") || bi.createElement("div") : e);
  };
}, $n = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, Qn = function(e) {
  if (Y(e))
    return e;
  var t = Me(e) ? e : {
    each: e
  }, a = dt(t.ease), i = t.from || 0, n = parseFloat(t.base) || 0, o = {}, s = i > 0 && i < 1, l = isNaN(i) || s, c = t.axis, d = i, u = i;
  return $(i) ? d = u = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !s && l && (d = i[0], u = i[1]), function(g, p, f) {
    var h = (f || t).length, w = o[h], b, y, x, v, _, T, k, C, A;
    if (!w) {
      if (A = t.grid === "auto" ? 0 : (t.grid || [1, ye])[1], !A) {
        for (k = -ye; k < (k = f[A++].getBoundingClientRect().left) && A < h; )
          ;
        A < h && A--;
      }
      for (w = o[h] = [], b = l ? Math.min(A, h) * d - 0.5 : i % A, y = A === ye ? 0 : l ? h * u / A - 0.5 : i / A | 0, k = 0, C = ye, T = 0; T < h; T++)
        x = T % A - b, v = y - (T / A | 0), w[T] = _ = c ? Math.abs(c === "y" ? v : x) : In(x * x + v * v), _ > k && (k = _), _ < C && (C = _);
      i === "random" && $n(w), w.max = k - C, w.min = C, w.v = h = (parseFloat(t.amount) || parseFloat(t.each) * (A > h ? h - 1 : c ? c === "y" ? h / A : A : Math.max(A, h / A)) || 0) * (i === "edges" ? -1 : 1), w.b = h < 0 ? n - h : n, w.u = J(t.amount || t.each) || 0, a = a && h < 0 ? Do(a) : a;
    }
    return h = (w[g] - w.min) / w.max || 0, G(w.b + (a ? a(h) : h) * w.v) + w.u;
  };
}, oi = function(e) {
  var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(a) {
    var i = G(Math.round(parseFloat(a) / e) * e * t);
    return (i - i % 1) / t + (ze(a) ? 0 : J(a));
  };
}, Kn = function(e, t) {
  var a = ee(e), i, n;
  return !a && Me(e) && (i = a = e.radius || ye, e.values ? (e = _e(e.values), (n = !ze(e[0])) && (i *= i)) : e = oi(e.increment)), Je(t, a ? Y(e) ? function(o) {
    return n = e(o), Math.abs(n - o) <= i ? n : o;
  } : function(o) {
    for (var s = parseFloat(n ? o.x : o), l = parseFloat(n ? o.y : 0), c = ye, d = 0, u = e.length, g, p; u--; )
      n ? (g = e[u].x - s, p = e[u].y - l, g = g * g + p * p) : g = Math.abs(e[u] - s), g < c && (c = g, d = u);
    return d = !i || c <= i ? e[d] : o, n || d === o || ze(o) ? d : d + J(o);
  } : oi(e));
}, Zn = function(e, t, a, i) {
  return Je(ee(e) ? !t : a === !0 ? !!(a = 0) : !i, function() {
    return ee(e) ? e[~~(Math.random() * e.length)] : (a = a || 1e-5) && (i = a < 1 ? Math.pow(10, (a + "").length - 2) : 1) && Math.floor(Math.round((e - a / 2 + Math.random() * (t - e + a * 0.99)) / a) * a * i) / i;
  });
}, vo = function() {
  for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
    t[a] = arguments[a];
  return function(i) {
    return t.reduce(function(n, o) {
      return o(n);
    }, i);
  };
}, ko = function(e, t) {
  return function(a) {
    return e(parseFloat(a)) + (t || J(a));
  };
}, Ao = function(e, t, a) {
  return er(e, t, 0, 1, a);
}, Jn = function(e, t, a) {
  return Je(a, function(i) {
    return e[~~t(i)];
  });
}, So = function r(e, t, a) {
  var i = t - e;
  return ee(e) ? Jn(e, r(0, e.length), t) : Je(a, function(n) {
    return (i + (n - e) % i) % i + e;
  });
}, Co = function r(e, t, a) {
  var i = t - e, n = i * 2;
  return ee(e) ? Jn(e, r(0, e.length - 1), t) : Je(a, function(o) {
    return o = (n + (o - e) % n) % n || 0, e + (o > i ? n - o : o);
  });
}, Vt = function(e) {
  return e.replace(no, function(t) {
    var a = t.indexOf("[") + 1, i = t.substring(a || 7, a ? t.indexOf("]") : t.length - 1).split(ro);
    return Zn(a ? i : +i[0], a ? 0 : +i[1], +i[2] || 1e-5);
  });
}, er = function(e, t, a, i, n) {
  var o = t - e, s = i - a;
  return Je(n, function(l) {
    return a + ((l - e) / o * s || 0);
  });
}, To = function r(e, t, a, i) {
  var n = isNaN(e + t) ? 0 : function(p) {
    return (1 - p) * e + p * t;
  };
  if (!n) {
    var o = $(e), s = {}, l, c, d, u, g;
    if (a === !0 && (i = 1) && (a = null), o)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (ee(e) && !ee(t)) {
      for (d = [], u = e.length, g = u - 2, c = 1; c < u; c++)
        d.push(r(e[c - 1], e[c]));
      u--, n = function(f) {
        f *= u;
        var h = Math.min(g, ~~f);
        return d[h](f - h);
      }, a = t;
    } else i || (e = kt(ee(e) ? [] : {}, e));
    if (!d) {
      for (l in t)
        Ai.call(s, e, l, "get", t[l]);
      n = function(f) {
        return Ei(f, s) || (o ? e.p : e);
      };
    }
  }
  return Je(a, n);
}, Ui = function(e, t, a) {
  var i = e.labels, n = ye, o, s, l;
  for (o in i)
    s = i[o] - t, s < 0 == !!a && s && n > (s = Math.abs(s)) && (l = o, n = s);
  return l;
}, ue = function(e, t, a) {
  var i = e.vars, n = i[t], o = U, s = e._ctx, l, c, d;
  if (n)
    return l = i[t + "Params"], c = i.callbackScope || e, a && Xe.length && pa(), s && (U = s), d = l ? n.apply(c, l) : n.call(c), U = o, d;
}, Lt = function(e) {
  return Qe(e), e.scrollTrigger && e.scrollTrigger.kill(!!Q), e.progress() < 1 && ue(e, "onInterrupt"), e;
}, wt, tr = [], ar = function(e) {
  if (e)
    if (e = !e.name && e.default || e, wi() || e.headless) {
      var t = e.name, a = Y(e), i = t && !a && e.init ? function() {
        this._props = [];
      } : e, n = {
        init: Wt,
        render: Ei,
        add: Ai,
        kill: Wo,
        modifier: Go,
        rawVars: 0
      }, o = {
        targetTest: 0,
        get: 0,
        getSetter: Ti,
        aliases: {},
        register: 0
      };
      if (Ct(), e !== i) {
        if (ce[t])
          return;
        me(i, me(ga(e, n), o)), kt(i.prototype, kt(n, ga(e, o))), ce[i.prop = t] = i, e.targetTest && (ca.push(i), _i[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      Bn(t, i), e.register && e.register(se, i, re);
    } else
      tr.push(e);
}, B = 255, Dt = {
  aqua: [0, B, B],
  lime: [0, B, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, B],
  navy: [0, 0, 128],
  white: [B, B, B],
  olive: [128, 128, 0],
  yellow: [B, B, 0],
  orange: [B, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [B, 0, 0],
  pink: [B, 192, 203],
  cyan: [0, B, B],
  transparent: [B, B, B, 0]
}, Ra = function(e, t, a) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (a - t) * e * 6 : e < 0.5 ? a : e * 3 < 2 ? t + (a - t) * (2 / 3 - e) * 6 : t) * B + 0.5 | 0;
}, ir = function(e, t, a) {
  var i = e ? ze(e) ? [e >> 16, e >> 8 & B, e & B] : 0 : Dt.black, n, o, s, l, c, d, u, g, p, f;
  if (!i) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Dt[e])
      i = Dt[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (n = e.charAt(1), o = e.charAt(2), s = e.charAt(3), e = "#" + n + n + o + o + s + s + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & B, i & B, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & B, e & B];
    } else if (e.substr(0, 3) === "hsl") {
      if (i = f = e.match(Oi), !t)
        l = +i[0] % 360 / 360, c = +i[1] / 100, d = +i[2] / 100, o = d <= 0.5 ? d * (c + 1) : d + c - d * c, n = d * 2 - o, i.length > 3 && (i[3] *= 1), i[0] = Ra(l + 1 / 3, n, o), i[1] = Ra(l, n, o), i[2] = Ra(l - 1 / 3, n, o);
      else if (~e.indexOf("="))
        return i = e.match(Dn), a && i.length < 4 && (i[3] = 1), i;
    } else
      i = e.match(Oi) || Dt.transparent;
    i = i.map(Number);
  }
  return t && !f && (n = i[0] / B, o = i[1] / B, s = i[2] / B, u = Math.max(n, o, s), g = Math.min(n, o, s), d = (u + g) / 2, u === g ? l = c = 0 : (p = u - g, c = d > 0.5 ? p / (2 - u - g) : p / (u + g), l = u === n ? (o - s) / p + (o < s ? 6 : 0) : u === o ? (s - n) / p + 2 : (n - o) / p + 4, l *= 60), i[0] = ~~(l + 0.5), i[1] = ~~(c * 100 + 0.5), i[2] = ~~(d * 100 + 0.5)), a && i.length < 4 && (i[3] = 1), i;
}, nr = function(e) {
  var t = [], a = [], i = -1;
  return e.split($e).forEach(function(n) {
    var o = n.match(ft) || [];
    t.push.apply(t, o), a.push(i += o.length + 1);
  }), t.c = a, t;
}, Gi = function(e, t, a) {
  var i = "", n = (e + i).match($e), o = t ? "hsla(" : "rgba(", s = 0, l, c, d, u;
  if (!n)
    return e;
  if (n = n.map(function(g) {
    return (g = ir(g, t, 1)) && o + (t ? g[0] + "," + g[1] + "%," + g[2] + "%," + g[3] : g.join(",")) + ")";
  }), a && (d = nr(e), l = a.c, l.join(i) !== d.c.join(i)))
    for (c = e.replace($e, "1").split(ft), u = c.length - 1; s < u; s++)
      i += c[s] + (~l.indexOf(s) ? n.shift() || o + "0,0,0,0)" : (d.length ? d : n.length ? n : a).shift());
  if (!c)
    for (c = e.split($e), u = c.length - 1; s < u; s++)
      i += c[s] + n[s];
  return i + c[u];
}, $e = (function() {
  var r = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in Dt)
    r += "|" + e + "\\b";
  return new RegExp(r + ")", "gi");
})(), Eo = /hsl[a]?\(/, rr = function(e) {
  var t = e.join(" "), a;
  if ($e.lastIndex = 0, $e.test(t))
    return a = Eo.test(t), e[1] = Gi(e[1], a), e[0] = Gi(e[0], a, nr(e[1])), !0;
}, Yt, de = (function() {
  var r = Date.now, e = 500, t = 33, a = r(), i = a, n = 1e3 / 240, o = n, s = [], l, c, d, u, g, p, f = function h(w) {
    var b = r() - i, y = w === !0, x, v, _, T;
    if ((b > e || b < 0) && (a += b - t), i += b, _ = i - a, x = _ - o, (x > 0 || y) && (T = ++u.frame, g = _ - u.time * 1e3, u.time = _ = _ / 1e3, o += x + (x >= n ? 4 : n - x), v = 1), y || (l = c(h)), v)
      for (p = 0; p < s.length; p++)
        s[p](_, g, T, w);
  };
  return u = {
    time: 0,
    frame: 0,
    tick: function() {
      f(!0);
    },
    deltaRatio: function(w) {
      return g / (1e3 / (w || 60));
    },
    wake: function() {
      qn && (!ei && wi() && (Se = ei = window, bi = Se.document || {}, ge.gsap = se, (Se.gsapVersions || (Se.gsapVersions = [])).push(se.version), On(ha || Se.GreenSockGlobals || !Se.gsap && Se || {}), tr.forEach(ar)), d = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && u.sleep(), c = d || function(w) {
        return setTimeout(w, o - u.time * 1e3 + 1 | 0);
      }, Yt = 1, f(2));
    },
    sleep: function() {
      (d ? cancelAnimationFrame : clearTimeout)(l), Yt = 0, c = Wt;
    },
    lagSmoothing: function(w, b) {
      e = w || 1 / 0, t = Math.min(b || 33, e);
    },
    fps: function(w) {
      n = 1e3 / (w || 240), o = u.time * 1e3 + n;
    },
    add: function(w, b, y) {
      var x = b ? function(v, _, T, k) {
        w(v, _, T, k), u.remove(x);
      } : w;
      return u.remove(w), s[y ? "unshift" : "push"](x), Ct(), x;
    },
    remove: function(w, b) {
      ~(b = s.indexOf(w)) && s.splice(b, 1) && p >= b && p--;
    },
    _listeners: s
  }, u;
})(), Ct = function() {
  return !Yt && de.wake();
}, R = {}, Mo = /^[\d.\-M][\d.\-,\s]/, Po = /["']/g, Ro = function(e) {
  for (var t = {}, a = e.substr(1, e.length - 3).split(":"), i = a[0], n = 1, o = a.length, s, l, c; n < o; n++)
    l = a[n], s = n !== o - 1 ? l.lastIndexOf(",") : l.length, c = l.substr(0, s), t[i] = isNaN(c) ? c.replace(Po, "").trim() : +c, i = l.substr(s + 1).trim();
  return t;
}, Io = function(e) {
  var t = e.indexOf("(") + 1, a = e.indexOf(")"), i = e.indexOf("(", t);
  return e.substring(t, ~i && i < a ? e.indexOf(")", a + 1) : a);
}, Lo = function(e) {
  var t = (e + "").split("("), a = R[t[0]];
  return a && t.length > 1 && a.config ? a.config.apply(null, ~e.indexOf("{") ? [Ro(t[1])] : Io(e).split(",").map(Un)) : R._CE && Mo.test(e) ? R._CE("", e) : a;
}, Do = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, dt = function(e, t) {
  return e && (Y(e) ? e : R[e] || Lo(e)) || t;
}, ht = function(e, t, a, i) {
  a === void 0 && (a = function(l) {
    return 1 - t(1 - l);
  }), i === void 0 && (i = function(l) {
    return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
  });
  var n = {
    easeIn: t,
    easeOut: a,
    easeInOut: i
  }, o;
  return ne(e, function(s) {
    R[s] = ge[s] = n, R[o = s.toLowerCase()] = a;
    for (var l in n)
      R[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = R[s + "." + l] = n[l];
  }), n;
}, or = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, Ia = function r(e, t, a) {
  var i = t >= 1 ? t : 1, n = (a || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), o = n / Ja * (Math.asin(1 / i) || 0), s = function(d) {
    return d === 1 ? 1 : i * Math.pow(2, -10 * d) * io((d - o) * n) + 1;
  }, l = e === "out" ? s : e === "in" ? function(c) {
    return 1 - s(1 - c);
  } : or(s);
  return n = Ja / n, l.config = function(c, d) {
    return r(e, c, d);
  }, l;
}, La = function r(e, t) {
  t === void 0 && (t = 1.70158);
  var a = function(o) {
    return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
  }, i = e === "out" ? a : e === "in" ? function(n) {
    return 1 - a(1 - n);
  } : or(a);
  return i.config = function(n) {
    return r(e, n);
  }, i;
};
ne("Linear,Quad,Cubic,Quart,Quint,Strong", function(r, e) {
  var t = e < 5 ? e + 1 : e;
  ht(r + ",Power" + (t - 1), e ? function(a) {
    return Math.pow(a, t);
  } : function(a) {
    return a;
  }, function(a) {
    return 1 - Math.pow(1 - a, t);
  }, function(a) {
    return a < 0.5 ? Math.pow(a * 2, t) / 2 : 1 - Math.pow((1 - a) * 2, t) / 2;
  });
});
R.Linear.easeNone = R.none = R.Linear.easeIn;
ht("Elastic", Ia("in"), Ia("out"), Ia());
(function(r, e) {
  var t = 1 / e, a = 2 * t, i = 2.5 * t, n = function(s) {
    return s < t ? r * s * s : s < a ? r * Math.pow(s - 1.5 / e, 2) + 0.75 : s < i ? r * (s -= 2.25 / e) * s + 0.9375 : r * Math.pow(s - 2.625 / e, 2) + 0.984375;
  };
  ht("Bounce", function(o) {
    return 1 - n(1 - o);
  }, n);
})(7.5625, 2.75);
ht("Expo", function(r) {
  return Math.pow(2, 10 * (r - 1)) * r + r * r * r * r * r * r * (1 - r);
});
ht("Circ", function(r) {
  return -(In(1 - r * r) - 1);
});
ht("Sine", function(r) {
  return r === 1 ? 1 : -ao(r * eo) + 1;
});
ht("Back", La("in"), La("out"), La());
R.SteppedEase = R.steps = ge.SteppedEase = {
  config: function(e, t) {
    e === void 0 && (e = 1);
    var a = 1 / e, i = e + (t ? 0 : 1), n = t ? 1 : 0, o = 1 - z;
    return function(s) {
      return ((i * Jt(0, o, s) | 0) + n) * a;
    };
  }
};
Ut.ease = R["quad.out"];
ne("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(r) {
  return xi += r + "," + r + "Params,";
});
var sr = function(e, t) {
  this.id = to++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : Fn, this.set = t ? t.getSetter : Ti;
}, jt = /* @__PURE__ */ (function() {
  function r(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, St(this, +t.duration, 1, 1), this.data = t.data, U && (this._ctx = U, U.data.push(this)), Yt || de.wake();
  }
  var e = r.prototype;
  return e.delay = function(a) {
    return a || a === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + a - this._delay), this._delay = a, this) : this._delay;
  }, e.duration = function(a) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? a + (a + this._rDelay) * this._repeat : a) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(a) {
    return arguments.length ? (this._dirty = 0, St(this, this._repeat < 0 ? a : (a - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(a, i) {
    if (Ct(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (ka(this, a), !n._dp || n.parent || Vn(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && a < this._tDur || this._ts < 0 && a > 0 || !this._tDur && !a) && Ce(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== a || !this._dur && !i || this._initted && Math.abs(this._zTime) === z || !this._initted && this._dur && a || !a && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = a), Hn(this, a, i)), this;
  }, e.time = function(a, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), a + Fi(this)) % (this._dur + this._rDelay) || (a ? this._dur : 0), i) : this._time;
  }, e.totalProgress = function(a, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * a, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, e.progress = function(a, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - a : a) + Fi(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(a, i) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (a - 1) * n, i) : this._repeat ? At(this._tTime, n) + 1 : 1;
  }, e.timeScale = function(a, i) {
    if (!arguments.length)
      return this._rts === -z ? 0 : this._rts;
    if (this._rts === a)
      return this;
    var n = this.parent && this._ts ? ma(this.parent._time, this) : this._tTime;
    return this._rts = +a || 0, this._ts = this._ps || a === -z ? 0 : this._rts, this.totalTime(Jt(-Math.abs(this._delay), this.totalDuration(), n), i !== !1), va(this), go(this);
  }, e.paused = function(a) {
    return arguments.length ? (this._ps !== a && (this._ps = a, a ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ct(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== z && (this._tTime -= z)))), this) : this._ps;
  }, e.startTime = function(a) {
    if (arguments.length) {
      this._start = G(a);
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && Ce(i, this, this._start - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(a) {
    return this._start + (ie(a) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(a) {
    var i = this.parent || this._dp;
    return i ? a && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ma(i.rawTime(a), this) : this._tTime : this._tTime;
  }, e.revert = function(a) {
    a === void 0 && (a = co);
    var i = Q;
    return Q = a, ki(this) && (this.timeline && this.timeline.revert(a), this.totalTime(-0.01, a.suppressEvents)), this.data !== "nested" && a.kill !== !1 && this.kill(), Q = i, this;
  }, e.globalTime = function(a) {
    for (var i = this, n = arguments.length ? a : i.rawTime(); i; )
      n = i._start + n / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(a) : n;
  }, e.repeat = function(a) {
    return arguments.length ? (this._repeat = a === 1 / 0 ? -2 : a, Hi(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(a) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = a, Hi(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(a) {
    return arguments.length ? (this._yoyo = a, this) : this._yoyo;
  }, e.seek = function(a, i) {
    return this.totalTime(be(this, a), ie(i));
  }, e.restart = function(a, i) {
    return this.play().totalTime(a ? -this._delay : 0, ie(i)), this._dur || (this._zTime = -z), this;
  }, e.play = function(a, i) {
    return a != null && this.seek(a, i), this.reversed(!1).paused(!1);
  }, e.reverse = function(a, i) {
    return a != null && this.seek(a || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, e.pause = function(a, i) {
    return a != null && this.seek(a, i), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(a) {
    return arguments.length ? (!!a !== this.reversed() && this.timeScale(-this._rts || (a ? -z : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -z, this;
  }, e.isActive = function() {
    var a = this.parent || this._dp, i = this._start, n;
    return !!(!a || this._ts && this._initted && a.isActive() && (n = a.rawTime(!0)) >= i && n < this.endTime(!0) - z);
  }, e.eventCallback = function(a, i, n) {
    var o = this.vars;
    return arguments.length > 1 ? (i ? (o[a] = i, n && (o[a + "Params"] = n), a === "onUpdate" && (this._onUpdate = i)) : delete o[a], this) : o[a];
  }, e.then = function(a) {
    var i = this, n = i._prom;
    return new Promise(function(o) {
      var s = Y(a) ? a : Gn, l = function() {
        var d = i.then;
        i.then = null, n && n(), Y(s) && (s = s(i)) && (s.then || s === i) && (i.then = d), o(s), i.then = d;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? l() : i._prom = l;
    });
  }, e.kill = function() {
    Lt(this);
  }, r;
})();
me(jt.prototype, {
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
  _zTime: -z,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var ae = /* @__PURE__ */ (function(r) {
  Rn(e, r);
  function e(a, i) {
    var n;
    return a === void 0 && (a = {}), n = r.call(this, a) || this, n.labels = {}, n.smoothChildTiming = !!a.smoothChildTiming, n.autoRemoveChildren = !!a.autoRemoveChildren, n._sort = ie(a.sortChildren), W && Ce(a.parent || W, Le(n), i), a.reversed && n.reverse(), a.paused && n.paused(!0), a.scrollTrigger && Yn(Le(n), a.scrollTrigger), n;
  }
  var t = e.prototype;
  return t.to = function(i, n, o) {
    return zt(0, arguments, this), this;
  }, t.from = function(i, n, o) {
    return zt(1, arguments, this), this;
  }, t.fromTo = function(i, n, o, s) {
    return zt(2, arguments, this), this;
  }, t.set = function(i, n, o) {
    return n.duration = 0, n.parent = this, Bt(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new X(i, n, be(this, o), 1), this;
  }, t.call = function(i, n, o) {
    return Ce(this, X.delayedCall(0, i, n), o);
  }, t.staggerTo = function(i, n, o, s, l, c, d) {
    return o.duration = n, o.stagger = o.stagger || s, o.onComplete = c, o.onCompleteParams = d, o.parent = this, new X(i, o, be(this, l)), this;
  }, t.staggerFrom = function(i, n, o, s, l, c, d) {
    return o.runBackwards = 1, Bt(o).immediateRender = ie(o.immediateRender), this.staggerTo(i, n, o, s, l, c, d);
  }, t.staggerFromTo = function(i, n, o, s, l, c, d, u) {
    return s.startAt = o, Bt(s).immediateRender = ie(s.immediateRender), this.staggerTo(i, n, s, l, c, d, u);
  }, t.render = function(i, n, o) {
    var s = this._time, l = this._dirty ? this.totalDuration() : this._tDur, c = this._dur, d = i <= 0 ? 0 : G(i), u = this._zTime < 0 != i < 0 && (this._initted || !c), g, p, f, h, w, b, y, x, v, _, T, k;
    if (this !== W && d > l && i >= 0 && (d = l), d !== this._tTime || o || u) {
      if (s !== this._time && c && (d += this._time - s, i += this._time - s), g = d, v = this._start, x = this._ts, b = !x, u && (c || (s = this._zTime), (i || !n) && (this._zTime = i)), this._repeat) {
        if (T = this._yoyo, w = c + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(w * 100 + i, n, o);
        if (g = G(d % w), d === l ? (h = this._repeat, g = c) : (_ = G(d / w), h = ~~_, h && h === _ && (g = c, h--), g > c && (g = c)), _ = At(this._tTime, w), !s && this._tTime && _ !== h && this._tTime - _ * w - this._dur <= 0 && (_ = h), T && h & 1 && (g = c - g, k = 1), h !== _ && !this._lock) {
          var C = T && _ & 1, A = C === (T && h & 1);
          if (h < _ && (C = !C), s = C ? 0 : d % c ? c : d, this._lock = 1, this.render(s || (k ? 0 : G(h * w)), n, !c)._lock = 0, this._tTime = d, !n && this.parent && ue(this, "onRepeat"), this.vars.repeatRefresh && !k && (this.invalidate()._lock = 1, _ = h), s && s !== this._time || b !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (c = this._dur, l = this._tDur, A && (this._lock = 2, s = C ? c : -1e-4, this.render(s, !0), this.vars.repeatRefresh && !k && this.invalidate()), this._lock = 0, !this._ts && !b)
            return this;
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (y = bo(this, G(s), G(g)), y && (d -= g - (g = y._start))), this._tTime = d, this._time = g, this._act = !!x, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, s = 0), !s && d && c && !n && !_ && (ue(this, "onStart"), this._tTime !== d))
        return this;
      if (g >= s && i >= 0)
        for (p = this._first; p; ) {
          if (f = p._next, (p._act || g >= p._start) && p._ts && y !== p) {
            if (p.parent !== this)
              return this.render(i, n, o);
            if (p.render(p._ts > 0 ? (g - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (g - p._start) * p._ts, n, o), g !== this._time || !this._ts && !b) {
              y = 0, f && (d += this._zTime = -z);
              break;
            }
          }
          p = f;
        }
      else {
        p = this._last;
        for (var E = i < 0 ? i : g; p; ) {
          if (f = p._prev, (p._act || E <= p._end) && p._ts && y !== p) {
            if (p.parent !== this)
              return this.render(i, n, o);
            if (p.render(p._ts > 0 ? (E - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (E - p._start) * p._ts, n, o || Q && ki(p)), g !== this._time || !this._ts && !b) {
              y = 0, f && (d += this._zTime = E ? -z : z);
              break;
            }
          }
          p = f;
        }
      }
      if (y && !n && (this.pause(), y.render(g >= s ? 0 : -z)._zTime = g >= s ? 1 : -1, this._ts))
        return this._start = v, va(this), this.render(i, n, o);
      this._onUpdate && !n && ue(this, "onUpdate", !0), (d === l && this._tTime >= this.totalDuration() || !d && s) && (v === this._start || Math.abs(x) !== Math.abs(this._ts)) && (this._lock || ((i || !c) && (d === l && this._ts > 0 || !d && this._ts < 0) && Qe(this, 1), !n && !(i < 0 && !s) && (d || s || !l) && (ue(this, d === l && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(i, n) {
    var o = this;
    if (ze(n) || (n = be(this, n, i)), !(i instanceof jt)) {
      if (ee(i))
        return i.forEach(function(s) {
          return o.add(s, n);
        }), this;
      if ($(i))
        return this.addLabel(i, n);
      if (Y(i))
        i = X.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? Ce(this, i, n) : this;
  }, t.getChildren = function(i, n, o, s) {
    i === void 0 && (i = !0), n === void 0 && (n = !0), o === void 0 && (o = !0), s === void 0 && (s = -ye);
    for (var l = [], c = this._first; c; )
      c._start >= s && (c instanceof X ? n && l.push(c) : (o && l.push(c), i && l.push.apply(l, c.getChildren(!0, n, o)))), c = c._next;
    return l;
  }, t.getById = function(i) {
    for (var n = this.getChildren(1, 1, 1), o = n.length; o--; )
      if (n[o].vars.id === i)
        return n[o];
  }, t.remove = function(i) {
    return $(i) ? this.removeLabel(i) : Y(i) ? this.killTweensOf(i) : (i.parent === this && xa(this, i), i === this._recent && (this._recent = this._last), ct(this));
  }, t.totalTime = function(i, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = G(de.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), r.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime;
  }, t.addLabel = function(i, n) {
    return this.labels[i] = be(this, n), this;
  }, t.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, t.addPause = function(i, n, o) {
    var s = X.delayedCall(0, n || Wt, o);
    return s.data = "isPause", this._hasPause = 1, Ce(this, s, be(this, i));
  }, t.removePause = function(i) {
    var n = this._first;
    for (i = be(this, i); n; )
      n._start === i && n.data === "isPause" && Qe(n), n = n._next;
  }, t.killTweensOf = function(i, n, o) {
    for (var s = this.getTweensOf(i, o), l = s.length; l--; )
      We !== s[l] && s[l].kill(i, n);
    return this;
  }, t.getTweensOf = function(i, n) {
    for (var o = [], s = _e(i), l = this._first, c = ze(n), d; l; )
      l instanceof X ? uo(l._targets, s) && (c ? (!We || l._initted && l._ts) && l.globalTime(0) <= n && l.globalTime(l.totalDuration()) > n : !n || l.isActive()) && o.push(l) : (d = l.getTweensOf(s, n)).length && o.push.apply(o, d), l = l._next;
    return o;
  }, t.tweenTo = function(i, n) {
    n = n || {};
    var o = this, s = be(o, i), l = n, c = l.startAt, d = l.onStart, u = l.onStartParams, g = l.immediateRender, p, f = X.to(o, me({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: s,
      overwrite: "auto",
      duration: n.duration || Math.abs((s - (c && "time" in c ? c.time : o._time)) / o.timeScale()) || z,
      onStart: function() {
        if (o.pause(), !p) {
          var w = n.duration || Math.abs((s - (c && "time" in c ? c.time : o._time)) / o.timeScale());
          f._dur !== w && St(f, w, 0, 1).render(f._time, !0, !0), p = 1;
        }
        d && d.apply(f, u || []);
      }
    }, n));
    return g ? f.render(0) : f;
  }, t.tweenFromTo = function(i, n, o) {
    return this.tweenTo(n, me({
      startAt: {
        time: be(this, i)
      }
    }, o));
  }, t.recent = function() {
    return this._recent;
  }, t.nextLabel = function(i) {
    return i === void 0 && (i = this._time), Ui(this, be(this, i));
  }, t.previousLabel = function(i) {
    return i === void 0 && (i = this._time), Ui(this, be(this, i), 1);
  }, t.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + z);
  }, t.shiftChildren = function(i, n, o) {
    o === void 0 && (o = 0);
    var s = this._first, l = this.labels, c;
    for (i = G(i); s; )
      s._start >= o && (s._start += i, s._end += i), s = s._next;
    if (n)
      for (c in l)
        l[c] >= o && (l[c] += i);
    return ct(this);
  }, t.invalidate = function(i) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(i), n = n._next;
    return r.prototype.invalidate.call(this, i);
  }, t.clear = function(i) {
    i === void 0 && (i = !0);
    for (var n = this._first, o; n; )
      o = n._next, this.remove(n), n = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), ct(this);
  }, t.totalDuration = function(i) {
    var n = 0, o = this, s = o._last, l = ye, c, d, u;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
    if (o._dirty) {
      for (u = o.parent; s; )
        c = s._prev, s._dirty && s.totalDuration(), d = s._start, d > l && o._sort && s._ts && !o._lock ? (o._lock = 1, Ce(o, s, d - s._delay, 1)._lock = 0) : l = d, d < 0 && s._ts && (n -= d, (!u && !o._dp || u && u.smoothChildTiming) && (o._start += G(d / o._ts), o._time -= d, o._tTime -= d), o.shiftChildren(-d, !1, -1 / 0), l = 0), s._end > n && s._ts && (n = s._end), s = c;
      St(o, o === W && o._time > n ? o._time : n, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, e.updateRoot = function(i) {
    if (W._ts && (Hn(W, ma(i, W)), zn = de.frame), de.frame >= Bi) {
      Bi += pe.autoSleep || 120;
      var n = W._first;
      if ((!n || !n._ts) && pe.autoSleep && de._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || de.sleep();
      }
    }
  }, e;
})(jt);
me(ae.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var No = function(e, t, a, i, n, o, s) {
  var l = new re(this._pt, e, t, 0, 1, pr, null, n), c = 0, d = 0, u, g, p, f, h, w, b, y;
  for (l.b = a, l.e = i, a += "", i += "", (b = ~i.indexOf("random(")) && (i = Vt(i)), o && (y = [a, i], o(y, e, t), a = y[0], i = y[1]), g = a.match(Ma) || []; u = Ma.exec(i); )
    f = u[0], h = i.substring(c, u.index), p ? p = (p + 1) % 5 : h.substr(-5) === "rgba(" && (p = 1), f !== g[d++] && (w = parseFloat(g[d - 1]) || 0, l._pt = {
      _next: l._pt,
      p: h || d === 1 ? h : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: w,
      c: f.charAt(1) === "=" ? bt(w, f) - w : parseFloat(f) - w,
      m: p && p < 4 ? Math.round : 0
    }, c = Ma.lastIndex);
  return l.c = c < i.length ? i.substring(c, i.length) : "", l.fp = s, (Nn.test(i) || b) && (l.e = 0), this._pt = l, l;
}, Ai = function(e, t, a, i, n, o, s, l, c, d) {
  Y(i) && (i = i(n || 0, e, o));
  var u = e[t], g = a !== "get" ? a : Y(u) ? c ? e[t.indexOf("set") || !Y(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](c) : e[t]() : u, p = Y(u) ? c ? Fo : ur : Ci, f;
  if ($(i) && (~i.indexOf("random(") && (i = Vt(i)), i.charAt(1) === "=" && (f = bt(g, i) + (J(g) || 0), (f || f === 0) && (i = f))), !d || g !== i || si)
    return !isNaN(g * i) && i !== "" ? (f = new re(this._pt, e, t, +g || 0, i - (g || 0), typeof u == "boolean" ? Uo : hr, 0, p), c && (f.fp = c), s && f.modifier(s, this, e), this._pt = f) : (!u && !(t in e) && yi(t, i), No.call(this, e, t, g, i, p, l || pe.stringFilter, c));
}, qo = function(e, t, a, i, n) {
  if (Y(e) && (e = Ft(e, n, t, a, i)), !Me(e) || e.style && e.nodeType || ee(e) || Ln(e))
    return $(e) ? Ft(e, n, t, a, i) : e;
  var o = {}, s;
  for (s in e)
    o[s] = Ft(e[s], n, t, a, i);
  return o;
}, lr = function(e, t, a, i, n, o) {
  var s, l, c, d;
  if (ce[e] && (s = new ce[e]()).init(n, s.rawVars ? t[e] : qo(t[e], i, n, o, a), a, i, o) !== !1 && (a._pt = l = new re(a._pt, n, e, 0, 1, s.render, s, 0, s.priority), a !== wt))
    for (c = a._ptLookup[a._targets.indexOf(n)], d = s._props.length; d--; )
      c[s._props[d]] = l;
  return s;
}, We, si, Si = function r(e, t, a) {
  var i = e.vars, n = i.ease, o = i.startAt, s = i.immediateRender, l = i.lazy, c = i.onUpdate, d = i.runBackwards, u = i.yoyoEase, g = i.keyframes, p = i.autoRevert, f = e._dur, h = e._startAt, w = e._targets, b = e.parent, y = b && b.data === "nested" ? b.vars.targets : w, x = e._overwrite === "auto" && !mi, v = e.timeline, _ = i.easeReverse || u, T, k, C, A, E, F, O, L, I, N, P, H, K;
  if (v && (!g || !n) && (n = "none"), e._ease = dt(n, Ut.ease), e._rEase = _ && (dt(_) || e._ease), e._from = !v && !!i.runBackwards, e._from && (e.ratio = 1), !v || g && !i.stagger) {
    if (L = w[0] ? lt(w[0]).harness : 0, H = L && i[L.prop], T = ga(i, _i), h && (h._zTime < 0 && h.progress(1), t < 0 && d && s && !p ? h.render(-1, !0) : h.revert(d && f ? la : lo), h._lazy = 0), o) {
      if (Qe(e._startAt = X.set(w, me({
        data: "isStart",
        overwrite: !1,
        parent: b,
        immediateRender: !0,
        lazy: !h && ie(l),
        startAt: null,
        delay: 0,
        onUpdate: c && function() {
          return ue(e, "onUpdate");
        },
        stagger: 0
      }, o))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Q || !s && !p) && e._startAt.revert(la), s && f && t <= 0 && a <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (d && f && !h) {
      if (t && (s = !1), C = me({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: s && !h && ie(l),
        immediateRender: s,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: b
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, T), H && (C[L.prop] = H), Qe(e._startAt = X.set(w, C)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Q ? e._startAt.revert(la) : e._startAt.render(-1, !0)), e._zTime = t, !s)
        r(e._startAt, z, z);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, l = f && ie(l) || l && !f, k = 0; k < w.length; k++) {
      if (E = w[k], O = E._gsap || vi(w)[k]._gsap, e._ptLookup[k] = N = {}, ti[O.id] && Xe.length && pa(), P = y === w ? k : y.indexOf(E), L && (I = new L()).init(E, H || T, e, P, y) !== !1 && (e._pt = A = new re(e._pt, E, I.name, 0, 1, I.render, I, 0, I.priority), I._props.forEach(function(Pe) {
        N[Pe] = A;
      }), I.priority && (F = 1)), !L || H)
        for (C in T)
          ce[C] && (I = lr(C, T, e, P, E, y)) ? I.priority && (F = 1) : N[C] = A = Ai.call(e, E, C, "get", T[C], P, y, 0, i.stringFilter);
      e._op && e._op[k] && e.kill(E, e._op[k]), x && e._pt && (We = e, W.killTweensOf(E, N, e.globalTime(t)), K = !e.parent, We = 0), e._pt && l && (ti[O.id] = 1);
    }
    F && gr(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = c, e._initted = (!e._op || e._pt) && !K, g && t <= 0 && v.render(ye, !0, !0);
}, Oo = function(e, t, a, i, n, o, s, l) {
  var c = (e._pt && e._ptCache || (e._ptCache = {}))[t], d, u, g, p;
  if (!c)
    for (c = e._ptCache[t] = [], g = e._ptLookup, p = e._targets.length; p--; ) {
      if (d = g[p][t], d && d.d && d.d._pt)
        for (d = d.d._pt; d && d.p !== t && d.fp !== t; )
          d = d._next;
      if (!d)
        return si = 1, e.vars[t] = "+=0", Si(e, s), si = 0, l ? Gt(t + " not eligible for reset. Try splitting into individual properties") : 1;
      c.push(d);
    }
  for (p = c.length; p--; )
    u = c[p], d = u._pt || u, d.s = (i || i === 0) && !n ? i : d.s + (i || 0) + o * d.c, d.c = a - d.s, u.e && (u.e = j(a) + J(u.e)), u.b && (u.b = d.s + J(u.b));
}, Bo = function(e, t) {
  var a = e[0] ? lt(e[0]).harness : 0, i = a && a.aliases, n, o, s, l;
  if (!i)
    return t;
  n = kt({}, t);
  for (o in i)
    if (o in n)
      for (l = i[o].split(","), s = l.length; s--; )
        n[l[s]] = n[o];
  return n;
}, zo = function(e, t, a, i) {
  var n = t.ease || i || "power1.inOut", o, s;
  if (ee(t))
    s = a[e] || (a[e] = []), t.forEach(function(l, c) {
      return s.push({
        t: c / (t.length - 1) * 100,
        v: l,
        e: n
      });
    });
  else
    for (o in t)
      s = a[o] || (a[o] = []), o === "ease" || s.push({
        t: parseFloat(e),
        v: t[o],
        e: n
      });
}, Ft = function(e, t, a, i, n) {
  return Y(e) ? e.call(t, a, i, n) : $(e) && ~e.indexOf("random(") ? Vt(e) : e;
}, cr = xi + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", dr = {};
ne(cr + ",id,stagger,delay,duration,paused,scrollTrigger", function(r) {
  return dr[r] = 1;
});
var X = /* @__PURE__ */ (function(r) {
  Rn(e, r);
  function e(a, i, n, o) {
    var s;
    typeof i == "number" && (n.duration = i, i = n, n = null), s = r.call(this, o ? i : Bt(i)) || this;
    var l = s.vars, c = l.duration, d = l.delay, u = l.immediateRender, g = l.stagger, p = l.overwrite, f = l.keyframes, h = l.defaults, w = l.scrollTrigger, b = i.parent || W, y = (ee(a) || Ln(a) ? ze(a[0]) : "length" in i) ? [a] : _e(a), x, v, _, T, k, C, A, E;
    if (s._targets = y.length ? vi(y) : Gt("GSAP target " + a + " not found. https://gsap.com", !pe.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = p, f || g || ea(c) || ea(d)) {
      i = s.vars;
      var F = i.easeReverse || i.yoyoEase;
      if (x = s.timeline = new ae({
        data: "nested",
        defaults: h || {},
        targets: b && b.data === "nested" ? b.vars.targets : y
      }), x.kill(), x.parent = x._dp = Le(s), x._start = 0, g || ea(c) || ea(d)) {
        if (T = y.length, A = g && Qn(g), Me(g))
          for (k in g)
            ~cr.indexOf(k) && (E || (E = {}), E[k] = g[k]);
        for (v = 0; v < T; v++)
          _ = ga(i, dr), _.stagger = 0, F && (_.easeReverse = F), E && kt(_, E), C = y[v], _.duration = +Ft(c, Le(s), v, C, y), _.delay = (+Ft(d, Le(s), v, C, y) || 0) - s._delay, !g && T === 1 && _.delay && (s._delay = d = _.delay, s._start += d, _.delay = 0), x.to(C, _, A ? A(v, C, y) : 0), x._ease = R.none;
        x.duration() ? c = d = 0 : s.timeline = 0;
      } else if (f) {
        Bt(me(x.vars.defaults, {
          ease: "none"
        })), x._ease = dt(f.ease || i.ease || "none");
        var O = 0, L, I, N;
        if (ee(f))
          f.forEach(function(P) {
            return x.to(y, P, ">");
          }), x.duration();
        else {
          _ = {};
          for (k in f)
            k === "ease" || k === "easeEach" || zo(k, f[k], _, f.easeEach);
          for (k in _)
            for (L = _[k].sort(function(P, H) {
              return P.t - H.t;
            }), O = 0, v = 0; v < L.length; v++)
              I = L[v], N = {
                ease: I.e,
                duration: (I.t - (v ? L[v - 1].t : 0)) / 100 * c
              }, N[k] = I.v, x.to(y, N, O), O += N.duration;
          x.duration() < c && x.to({}, {
            duration: c - x.duration()
          });
        }
      }
      c || s.duration(c = x.duration());
    } else
      s.timeline = 0;
    return p === !0 && !mi && (We = Le(s), W.killTweensOf(y), We = 0), Ce(b, Le(s), n), i.reversed && s.reverse(), i.paused && s.paused(!0), (u || !c && !f && s._start === G(b._time) && ie(u) && mo(Le(s)) && b.data !== "nested") && (s._tTime = -z, s.render(Math.max(0, -d) || 0)), w && Yn(Le(s), w), s;
  }
  var t = e.prototype;
  return t.render = function(i, n, o) {
    var s = this._time, l = this._tDur, c = this._dur, d = i < 0, u = i > l - z && !d ? l : i < z ? 0 : i, g, p, f, h, w, b, y, x;
    if (!c)
      wo(this, i, n, o);
    else if (u !== this._tTime || !i || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== d || this._lazy) {
      if (g = u, x = this.timeline, this._repeat) {
        if (h = c + this._rDelay, this._repeat < -1 && d)
          return this.totalTime(h * 100 + i, n, o);
        if (g = G(u % h), u === l ? (f = this._repeat, g = c) : (w = G(u / h), f = ~~w, f && f === w ? (g = c, f--) : g > c && (g = c)), b = this._yoyo && f & 1, b && (g = c - g), w = At(this._tTime, h), g === s && !o && this._initted && f === w)
          return this._tTime = u, this;
        f !== w && this.vars.repeatRefresh && !b && !this._lock && g !== h && this._initted && (this._lock = o = 1, this.render(G(h * f), !0).invalidate()._lock = 0);
      }
      if (!this._initted) {
        if (jn(this, d ? i : g, o, n, u))
          return this._tTime = 0, this;
        if (s !== this._time && !(o && this.vars.repeatRefresh && f !== w))
          return this;
        if (c !== this._dur)
          return this.render(i, n, o);
      }
      if (this._rEase) {
        var v = g < s;
        if (v !== this._inv) {
          var _ = v ? s : c - s;
          this._inv = v, this._from && (this.ratio = 1 - this.ratio), this._invRatio = this.ratio, this._invTime = s, this._invRecip = _ ? (v ? -1 : 1) / _ : 0, this._invScale = v ? -this.ratio : 1 - this.ratio, this._invEase = v ? this._rEase : this._ease;
        }
        this.ratio = y = this._invRatio + this._invScale * this._invEase((g - this._invTime) * this._invRecip);
      } else
        this.ratio = y = this._ease(g / c);
      if (this._from && (this.ratio = y = 1 - y), this._tTime = u, this._time = g, !this._act && this._ts && (this._act = 1, this._lazy = 0), !s && u && !n && !w && (ue(this, "onStart"), this._tTime !== u))
        return this;
      for (p = this._pt; p; )
        p.r(y, p.d), p = p._next;
      x && x.render(i < 0 ? i : x._dur * x._ease(g / this._dur), n, o) || this._startAt && (this._zTime = i), this._onUpdate && !n && (d && ai(this, i, n, o), ue(this, "onUpdate")), this._repeat && f !== w && this.vars.onRepeat && !n && this.parent && ue(this, "onRepeat"), (u === this._tDur || !u) && this._tTime === u && (d && !this._onUpdate && ai(this, i, !0, !0), (i || !c) && (u === this._tDur && this._ts > 0 || !u && this._ts < 0) && Qe(this, 1), !n && !(d && !s) && (u || s || b) && (ue(this, u === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), r.prototype.invalidate.call(this, i);
  }, t.resetTo = function(i, n, o, s, l) {
    Yt || de.wake(), this._ts || this.play();
    var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts), d;
    return this._initted || Si(this, c), d = this._ease(c / this._dur), Oo(this, i, n, o, s, d, c, l) ? this.resetTo(i, n, o, s, 1) : (ka(this, 0), this.parent || Wn(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(i, n) {
    if (n === void 0 && (n = "all"), !i && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? Lt(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Q), this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, n, We && We.vars.overwrite !== !0)._first || Lt(this), this.parent && o !== this.timeline.totalDuration() && St(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var s = this._targets, l = i ? _e(i) : s, c = this._ptLookup, d = this._pt, u, g, p, f, h, w, b;
    if ((!n || n === "all") && po(s, l))
      return n === "all" && (this._pt = 0), Lt(this);
    for (u = this._op = this._op || [], n !== "all" && ($(n) && (h = {}, ne(n, function(y) {
      return h[y] = 1;
    }), n = h), n = Bo(s, n)), b = s.length; b--; )
      if (~l.indexOf(s[b])) {
        g = c[b], n === "all" ? (u[b] = n, f = g, p = {}) : (p = u[b] = u[b] || {}, f = n);
        for (h in f)
          w = g && g[h], w && ((!("kill" in w.d) || w.d.kill(h) === !0) && xa(this, w, "_pt"), delete g[h]), p !== "all" && (p[h] = 1);
      }
    return this._initted && !this._pt && d && Lt(this), this;
  }, e.to = function(i, n) {
    return new e(i, n, arguments[2]);
  }, e.from = function(i, n) {
    return zt(1, arguments);
  }, e.delayedCall = function(i, n, o, s) {
    return new e(n, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: n,
      onReverseComplete: n,
      onCompleteParams: o,
      onReverseCompleteParams: o,
      callbackScope: s
    });
  }, e.fromTo = function(i, n, o) {
    return zt(2, arguments);
  }, e.set = function(i, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(i, n);
  }, e.killTweensOf = function(i, n, o) {
    return W.killTweensOf(i, n, o);
  }, e;
})(jt);
me(X.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
ne("staggerTo,staggerFrom,staggerFromTo", function(r) {
  X[r] = function() {
    var e = new ae(), t = ni.call(arguments, 0);
    return t.splice(r === "staggerFromTo" ? 5 : 4, 0, 0), e[r].apply(e, t);
  };
});
var Ci = function(e, t, a) {
  return e[t] = a;
}, ur = function(e, t, a) {
  return e[t](a);
}, Fo = function(e, t, a, i) {
  return e[t](i.fp, a);
}, Ho = function(e, t, a) {
  return e.setAttribute(t, a);
}, Ti = function(e, t) {
  return Y(e[t]) ? ur : fi(e[t]) && e.setAttribute ? Ho : Ci;
}, hr = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, Uo = function(e, t) {
  return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, pr = function(e, t) {
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
}, Ei = function(e, t) {
  for (var a = t._pt; a; )
    a.r(e, a.d), a = a._next;
}, Go = function(e, t, a, i) {
  for (var n = this._pt, o; n; )
    o = n._next, n.p === i && n.modifier(e, t, a), n = o;
}, Wo = function(e) {
  for (var t = this._pt, a, i; t; )
    i = t._next, t.p === e && !t.op || t.op === e ? xa(this, t, "_pt") : t.dep || (a = 1), t = i;
  return !a;
}, Vo = function(e, t, a, i) {
  i.mSet(e, t, i.m.call(i.tween, a, i.mt), i);
}, gr = function(e) {
  for (var t = e._pt, a, i, n, o; t; ) {
    for (a = t._next, i = n; i && i.pr > t.pr; )
      i = i._next;
    (t._prev = i ? i._prev : o) ? t._prev._next = t : n = t, (t._next = i) ? i._prev = t : o = t, t = a;
  }
  e._pt = n;
}, re = /* @__PURE__ */ (function() {
  function r(t, a, i, n, o, s, l, c, d) {
    this.t = a, this.s = n, this.c = o, this.p = i, this.r = s || hr, this.d = l || this, this.set = c || Ci, this.pr = d || 0, this._next = t, t && (t._prev = this);
  }
  var e = r.prototype;
  return e.modifier = function(a, i, n) {
    this.mSet = this.mSet || this.set, this.set = Vo, this.m = a, this.mt = n, this.tween = i;
  }, r;
})();
ne(xi + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(r) {
  return _i[r] = 1;
});
ge.TweenMax = ge.TweenLite = X;
ge.TimelineLite = ge.TimelineMax = ae;
W = new ae({
  sortChildren: !1,
  defaults: Ut,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
pe.stringFilter = rr;
var ut = [], da = {}, Yo = [], Wi = 0, jo = 0, Da = function(e) {
  return (da[e] || Yo).map(function(t) {
    return t();
  });
}, li = function() {
  var e = Date.now(), t = [];
  e - Wi > 2 && (Da("matchMediaInit"), ut.forEach(function(a) {
    var i = a.queries, n = a.conditions, o, s, l, c;
    for (s in i)
      o = Se.matchMedia(i[s]).matches, o && (l = 1), o !== n[s] && (n[s] = o, c = 1);
    c && (a.revert(), l && t.push(a));
  }), Da("matchMediaRevert"), t.forEach(function(a) {
    return a.onMatch(a, function(i) {
      return a.add(null, i);
    });
  }), Wi = e, Da("matchMedia"));
}, mr = /* @__PURE__ */ (function() {
  function r(t, a) {
    this.selector = a && ri(a), this.data = [], this._r = [], this.isReverted = !1, this.id = jo++, t && this.add(t);
  }
  var e = r.prototype;
  return e.add = function(a, i, n) {
    Y(a) && (n = i, i = a, a = Y);
    var o = this, s = function() {
      var c = U, d = o.selector, u;
      return c && c !== o && c.data.push(o), n && (o.selector = ri(n)), U = o, u = i.apply(o, arguments), Y(u) && o._r.push(u), U = c, o.selector = d, o.isReverted = !1, u;
    };
    return o.last = s, a === Y ? s(o, function(l) {
      return o.add(null, l);
    }) : a ? o[a] = s : s;
  }, e.ignore = function(a) {
    var i = U;
    U = null, a(this), U = i;
  }, e.getTweens = function() {
    var a = [];
    return this.data.forEach(function(i) {
      return i instanceof r ? a.push.apply(a, i.getTweens()) : i instanceof X && !(i.parent && i.parent.data === "nested") && a.push(i);
    }), a;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(a, i) {
    var n = this;
    if (a ? (function() {
      for (var s = n.getTweens(), l = n.data.length, c; l--; )
        c = n.data[l], c.data === "isFlip" && (c.revert(), c.getChildren(!0, !0, !1).forEach(function(d) {
          return s.splice(s.indexOf(d), 1);
        }));
      for (s.map(function(d) {
        return {
          g: d._dur || d._delay || d._sat && !d._sat.vars.immediateRender ? d.globalTime(0) : -1 / 0,
          t: d
        };
      }).sort(function(d, u) {
        return u.g - d.g || -1 / 0;
      }).forEach(function(d) {
        return d.t.revert(a);
      }), l = n.data.length; l--; )
        c = n.data[l], c instanceof ae ? c.data !== "nested" && (c.scrollTrigger && c.scrollTrigger.revert(), c.kill()) : !(c instanceof X) && c.revert && c.revert(a);
      n._r.forEach(function(d) {
        return d(a, n);
      }), n.isReverted = !0;
    })() : this.data.forEach(function(s) {
      return s.kill && s.kill();
    }), this.clear(), i)
      for (var o = ut.length; o--; )
        ut[o].id === this.id && ut.splice(o, 1);
  }, e.revert = function(a) {
    this.kill(a || {});
  }, r;
})(), Xo = /* @__PURE__ */ (function() {
  function r(t) {
    this.contexts = [], this.scope = t, U && U.data.push(this);
  }
  var e = r.prototype;
  return e.add = function(a, i, n) {
    Me(a) || (a = {
      matches: a
    });
    var o = new mr(0, n || this.scope), s = o.conditions = {}, l, c, d;
    U && !o.selector && (o.selector = U.selector), this.contexts.push(o), i = o.add("onMatch", i), o.queries = a;
    for (c in a)
      c === "all" ? d = 1 : (l = Se.matchMedia(a[c]), l && (ut.indexOf(o) < 0 && ut.push(o), (s[c] = l.matches) && (d = 1), l.addListener ? l.addListener(li) : l.addEventListener("change", li)));
    return d && i(o, function(u) {
      return o.add(null, u);
    }), this;
  }, e.revert = function(a) {
    this.kill(a || {});
  }, e.kill = function(a) {
    this.contexts.forEach(function(i) {
      return i.kill(a, !0);
    });
  }, r;
})(), fa = {
  registerPlugin: function() {
    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
      t[a] = arguments[a];
    t.forEach(function(i) {
      return ar(i);
    });
  },
  timeline: function(e) {
    return new ae(e);
  },
  getTweensOf: function(e, t) {
    return W.getTweensOf(e, t);
  },
  getProperty: function(e, t, a, i) {
    $(e) && (e = _e(e)[0]);
    var n = lt(e || {}).get, o = a ? Gn : Un;
    return a === "native" && (a = ""), e && (t ? o((ce[t] && ce[t].get || n)(e, t, a, i)) : function(s, l, c) {
      return o((ce[s] && ce[s].get || n)(e, s, l, c));
    });
  },
  quickSetter: function(e, t, a) {
    if (e = _e(e), e.length > 1) {
      var i = e.map(function(d) {
        return se.quickSetter(d, t, a);
      }), n = i.length;
      return function(d) {
        for (var u = n; u--; )
          i[u](d);
      };
    }
    e = e[0] || {};
    var o = ce[t], s = lt(e), l = s.harness && (s.harness.aliases || {})[t] || t, c = o ? function(d) {
      var u = new o();
      wt._pt = 0, u.init(e, a ? d + a : d, wt, 0, [e]), u.render(1, u), wt._pt && Ei(1, wt);
    } : s.set(e, l);
    return o ? c : function(d) {
      return c(e, l, a ? d + a : d, s, 1);
    };
  },
  quickTo: function(e, t, a) {
    var i, n = se.to(e, me((i = {}, i[t] = "+=0.1", i.paused = !0, i.stagger = 0, i), a || {})), o = function(l, c, d) {
      return n.resetTo(t, l, c, d);
    };
    return o.tween = n, o;
  },
  isTweening: function(e) {
    return W.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = dt(e.ease, Ut.ease)), zi(Ut, e || {});
  },
  config: function(e) {
    return zi(pe, e || {});
  },
  registerEffect: function(e) {
    var t = e.name, a = e.effect, i = e.plugins, n = e.defaults, o = e.extendTimeline;
    (i || "").split(",").forEach(function(s) {
      return s && !ce[s] && !ge[s] && Gt(t + " effect requires " + s + " plugin.");
    }), Pa[t] = function(s, l, c) {
      return a(_e(s), me(l || {}, n), c);
    }, o && (ae.prototype[t] = function(s, l, c) {
      return this.add(Pa[t](s, Me(l) ? l : (c = l) && {}, this), c);
    });
  },
  registerEase: function(e, t) {
    R[e] = dt(t);
  },
  parseEase: function(e, t) {
    return arguments.length ? dt(e, t) : R;
  },
  getById: function(e) {
    return W.getById(e);
  },
  exportRoot: function(e, t) {
    e === void 0 && (e = {});
    var a = new ae(e), i, n;
    for (a.smoothChildTiming = ie(e.smoothChildTiming), W.remove(a), a._dp = 0, a._time = a._tTime = W._time, i = W._first; i; )
      n = i._next, (t || !(!i._dur && i instanceof X && i.vars.onComplete === i._targets[0])) && Ce(a, i, i._start - i._delay), i = n;
    return Ce(W, a, 0), a;
  },
  context: function(e, t) {
    return e ? new mr(e, t) : U;
  },
  matchMedia: function(e) {
    return new Xo(e);
  },
  matchMediaRefresh: function() {
    return ut.forEach(function(e) {
      var t = e.conditions, a, i;
      for (i in t)
        t[i] && (t[i] = !1, a = 1);
      a && e.revert();
    }) || li();
  },
  addEventListener: function(e, t) {
    var a = da[e] || (da[e] = []);
    ~a.indexOf(t) || a.push(t);
  },
  removeEventListener: function(e, t) {
    var a = da[e], i = a && a.indexOf(t);
    i >= 0 && a.splice(i, 1);
  },
  utils: {
    wrap: So,
    wrapYoyo: Co,
    distribute: Qn,
    random: Zn,
    snap: Kn,
    normalize: Ao,
    getUnit: J,
    clamp: _o,
    splitColor: ir,
    toArray: _e,
    selector: ri,
    mapRange: er,
    pipe: vo,
    unitize: ko,
    interpolate: To,
    shuffle: $n
  },
  install: On,
  effects: Pa,
  ticker: de,
  updateRoot: ae.updateRoot,
  plugins: ce,
  globalTimeline: W,
  core: {
    PropTween: re,
    globals: Bn,
    Tween: X,
    Timeline: ae,
    Animation: jt,
    getCache: lt,
    _removeLinkedListItem: xa,
    reverting: function() {
      return Q;
    },
    context: function(e) {
      return e && U && (U.data.push(e), e._ctx = U), U;
    },
    suppressOverwrites: function(e) {
      return mi = e;
    }
  }
};
ne("to,from,fromTo,delayedCall,set,killTweensOf", function(r) {
  return fa[r] = X[r];
});
de.add(ae.updateRoot);
wt = fa.to({}, {
  duration: 0
});
var $o = function(e, t) {
  for (var a = e._pt; a && a.p !== t && a.op !== t && a.fp !== t; )
    a = a._next;
  return a;
}, Qo = function(e, t) {
  var a = e._targets, i, n, o;
  for (i in t)
    for (n = a.length; n--; )
      o = e._ptLookup[n][i], o && (o = o.d) && (o._pt && (o = $o(o, i)), o && o.modifier && o.modifier(t[i], e, a[n], i));
}, Na = function(e, t) {
  return {
    name: e,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, n, o) {
      o._onInit = function(s) {
        var l, c;
        if ($(n) && (l = {}, ne(n, function(d) {
          return l[d] = 1;
        }), n = l), t) {
          l = {};
          for (c in n)
            l[c] = t(n[c]);
          n = l;
        }
        Qo(s, n);
      };
    }
  };
}, se = fa.registerPlugin({
  name: "attr",
  init: function(e, t, a, i, n) {
    var o, s, l;
    this.tween = a;
    for (o in t)
      l = e.getAttribute(o) || "", s = this.add(e, "setAttribute", (l || 0) + "", t[o], i, n, 0, 0, o), s.op = o, s.b = l, this._props.push(o);
  },
  render: function(e, t) {
    for (var a = t._pt; a; )
      Q ? a.set(a.t, a.p, a.b, a) : a.r(e, a.d), a = a._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(e, t) {
    for (var a = t.length; a--; )
      this.add(e, a, e[a] || 0, t[a], 0, 0, 0, 0, 0, 1);
  }
}, Na("roundProps", oi), Na("modifiers"), Na("snap", Kn)) || fa;
X.version = ae.version = se.version = "3.15.0";
qn = 1;
wi() && Ct();
R.Power0;
R.Power1;
R.Power2;
R.Power3;
R.Power4;
R.Linear;
R.Quad;
R.Cubic;
R.Quart;
R.Quint;
R.Strong;
R.Elastic;
R.Back;
R.SteppedEase;
R.Bounce;
R.Sine;
R.Expo;
R.Circ;
var Vi, Ve, yt, Mi, st, Yi, Pi, Ko = function() {
  return typeof window < "u";
}, Fe = {}, ot = 180 / Math.PI, _t = Math.PI / 180, pt = Math.atan2, ji = 1e8, Ri = /([A-Z])/g, Zo = /(left|right|width|margin|padding|x)/i, Jo = /[\s,\(]\S/, Ee = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, ci = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, es = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, ts = function(e, t) {
  return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, as = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, is = function(e, t) {
  var a = t.s + t.c * e;
  t.set(t.t, t.p, ~~(a + (a < 0 ? -0.5 : 0.5)) + t.u, t);
}, fr = function(e, t) {
  return t.set(t.t, t.p, e ? t.e : t.b, t);
}, wr = function(e, t) {
  return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
}, ns = function(e, t, a) {
  return e.style[t] = a;
}, rs = function(e, t, a) {
  return e.style.setProperty(t, a);
}, os = function(e, t, a) {
  return e._gsap[t] = a;
}, ss = function(e, t, a) {
  return e._gsap.scaleX = e._gsap.scaleY = a;
}, ls = function(e, t, a, i, n) {
  var o = e._gsap;
  o.scaleX = o.scaleY = a, o.renderTransform(n, o);
}, cs = function(e, t, a, i, n) {
  var o = e._gsap;
  o[t] = a, o.renderTransform(n, o);
}, V = "transform", oe = V + "Origin", ds = function r(e, t) {
  var a = this, i = this.target, n = i.style, o = i._gsap;
  if (e in Fe && n) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = Ee[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(s) {
        return a.tfm[s] = Ne(i, s);
      }) : this.tfm[e] = o.x ? o[e] : Ne(i, e), e === oe && (this.tfm.zOrigin = o.zOrigin);
    else
      return Ee.transform.split(",").forEach(function(s) {
        return r.call(a, s, t);
      });
    if (this.props.indexOf(V) >= 0)
      return;
    o.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(oe, t, "")), e = V;
  }
  (n || t) && this.props.push(e, t, n[e]);
}, br = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, us = function() {
  var e = this.props, t = this.target, a = t.style, i = t._gsap, n, o;
  for (n = 0; n < e.length; n += 3)
    e[n + 1] ? e[n + 1] === 2 ? t[e[n]](e[n + 2]) : t[e[n]] = e[n + 2] : e[n + 2] ? a[e[n]] = e[n + 2] : a.removeProperty(e[n].substr(0, 2) === "--" ? e[n] : e[n].replace(Ri, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      i[o] = this.tfm[o];
    i.svg && (i.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), n = Pi(), (!n || !n.isStart) && !a[V] && (br(a), i.zOrigin && a[oe] && (a[oe] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, yr = function(e, t) {
  var a = {
    target: e,
    props: [],
    revert: us,
    save: ds
  };
  return e._gsap || se.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(i) {
    return a.save(i);
  }), a;
}, _r, di = function(e, t) {
  var a = Ve.createElementNS ? Ve.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Ve.createElement(e);
  return a && a.style ? a : Ve.createElement(e);
}, he = function r(e, t, a) {
  var i = getComputedStyle(e);
  return i[t] || i.getPropertyValue(t.replace(Ri, "-$1").toLowerCase()) || i.getPropertyValue(t) || !a && r(e, Tt(t) || t, 1) || "";
}, Xi = "O,Moz,ms,Ms,Webkit".split(","), Tt = function(e, t, a) {
  var i = t || st, n = i.style, o = 5;
  if (e in n && !a)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(Xi[o] + e in n); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Xi[o] : "") + e;
}, ui = function() {
  Ko() && window.document && (Vi = window, Ve = Vi.document, yt = Ve.documentElement, st = di("div") || {
    style: {}
  }, di("div"), V = Tt(V), oe = V + "Origin", st.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", _r = !!Tt("perspective"), Pi = se.core.reverting, Mi = 1);
}, $i = function(e) {
  var t = e.ownerSVGElement, a = di("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = e.cloneNode(!0), n;
  i.style.display = "block", a.appendChild(i), yt.appendChild(a);
  try {
    n = i.getBBox();
  } catch {
  }
  return a.removeChild(i), yt.removeChild(a), n;
}, Qi = function(e, t) {
  for (var a = t.length; a--; )
    if (e.hasAttribute(t[a]))
      return e.getAttribute(t[a]);
}, xr = function(e) {
  var t, a;
  try {
    t = e.getBBox();
  } catch {
    t = $i(e), a = 1;
  }
  return t && (t.width || t.height) || a || (t = $i(e)), t && !t.width && !t.x && !t.y ? {
    x: +Qi(e, ["x", "cx", "x1"]) || 0,
    y: +Qi(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : t;
}, vr = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && xr(e));
}, Ke = function(e, t) {
  if (t) {
    var a = e.style, i;
    t in Fe && t !== oe && (t = V), a.removeProperty ? (i = t.substr(0, 2), (i === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), a.removeProperty(i === "--" ? t : t.replace(Ri, "-$1").toLowerCase())) : a.removeAttribute(t);
  }
}, Ye = function(e, t, a, i, n, o) {
  var s = new re(e._pt, t, a, 0, 1, o ? wr : fr);
  return e._pt = s, s.b = i, s.e = n, e._props.push(a), s;
}, Ki = {
  deg: 1,
  rad: 1,
  turn: 1
}, hs = {
  grid: 1,
  flex: 1
}, Ze = function r(e, t, a, i) {
  var n = parseFloat(a) || 0, o = (a + "").trim().substr((n + "").length) || "px", s = st.style, l = Zo.test(t), c = e.tagName.toLowerCase() === "svg", d = (c ? "client" : "offset") + (l ? "Width" : "Height"), u = 100, g = i === "px", p = i === "%", f, h, w, b;
  if (i === o || !n || Ki[i] || Ki[o])
    return n;
  if (o !== "px" && !g && (n = r(e, t, a, "px")), b = e.getCTM && vr(e), (p || o === "%") && (Fe[t] || ~t.indexOf("adius")))
    return f = b ? e.getBBox()[l ? "width" : "height"] : e[d], j(p ? n / f * u : n / 100 * f);
  if (s[l ? "width" : "height"] = u + (g ? o : i), h = i !== "rem" && ~t.indexOf("adius") || i === "em" && e.appendChild && !c ? e : e.parentNode, b && (h = (e.ownerSVGElement || {}).parentNode), (!h || h === Ve || !h.appendChild) && (h = Ve.body), w = h._gsap, w && p && w.width && l && w.time === de.time && !w.uncache)
    return j(n / w.width * u);
  if (p && (t === "height" || t === "width")) {
    var y = e.style[t];
    e.style[t] = u + i, f = e[d], y ? e.style[t] = y : Ke(e, t);
  } else
    (p || o === "%") && !hs[he(h, "display")] && (s.position = he(e, "position")), h === e && (s.position = "static"), h.appendChild(st), f = st[d], h.removeChild(st), s.position = "absolute";
  return l && p && (w = lt(h), w.time = de.time, w.width = h[d]), j(g ? f * n / u : f && n ? u / f * n : 0);
}, Ne = function(e, t, a, i) {
  var n;
  return Mi || ui(), t in Ee && t !== "transform" && (t = Ee[t], ~t.indexOf(",") && (t = t.split(",")[0])), Fe[t] && t !== "transform" ? (n = $t(e, i), n = t !== "transformOrigin" ? n[t] : n.svg ? n.origin : ba(he(e, oe)) + " " + n.zOrigin + "px") : (n = e.style[t], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = wa[t] && wa[t](e, t, a) || he(e, t) || Fn(e, t) || (t === "opacity" ? 1 : 0))), a && !~(n + "").trim().indexOf(" ") ? Ze(e, t, n, a) + a : n;
}, ps = function(e, t, a, i) {
  if (!a || a === "none") {
    var n = Tt(t, e, 1), o = n && he(e, n, 1);
    o && o !== a ? (t = n, a = o) : t === "borderColor" && (a = he(e, "borderTopColor"));
  }
  var s = new re(this._pt, e.style, t, 0, 1, pr), l = 0, c = 0, d, u, g, p, f, h, w, b, y, x, v, _;
  if (s.b = a, s.e = i, a += "", i += "", i.substring(0, 6) === "var(--" && (i = he(e, i.substring(4, i.indexOf(")")))), i === "auto" && (h = e.style[t], e.style[t] = i, i = he(e, t) || i, h ? e.style[t] = h : Ke(e, t)), d = [a, i], rr(d), a = d[0], i = d[1], g = a.match(ft) || [], _ = i.match(ft) || [], _.length) {
    for (; u = ft.exec(i); )
      w = u[0], y = i.substring(l, u.index), f ? f = (f + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (f = 1), w !== (h = g[c++] || "") && (p = parseFloat(h) || 0, v = h.substr((p + "").length), w.charAt(1) === "=" && (w = bt(p, w) + v), b = parseFloat(w), x = w.substr((b + "").length), l = ft.lastIndex - x.length, x || (x = x || pe.units[t] || v, l === i.length && (i += x, s.e += x)), v !== x && (p = Ze(e, t, h, x) || 0), s._pt = {
        _next: s._pt,
        p: y || c === 1 ? y : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: p,
        c: b - p,
        m: f && f < 4 || t === "zIndex" ? Math.round : 0
      });
    s.c = l < i.length ? i.substring(l, i.length) : "";
  } else
    s.r = t === "display" && i === "none" ? wr : fr;
  return Nn.test(i) && (s.e = 0), this._pt = s, s;
}, Zi = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, gs = function(e) {
  var t = e.split(" "), a = t[0], i = t[1] || "50%";
  return (a === "top" || a === "bottom" || i === "left" || i === "right") && (e = a, a = i, i = e), t[0] = Zi[a] || a, t[1] = Zi[i] || i, t.join(" ");
}, ms = function(e, t) {
  if (t.tween && t.tween._time === t.tween._dur) {
    var a = t.t, i = a.style, n = t.u, o = a._gsap, s, l, c;
    if (n === "all" || n === !0)
      i.cssText = "", l = 1;
    else
      for (n = n.split(","), c = n.length; --c > -1; )
        s = n[c], Fe[s] && (l = 1, s = s === "transformOrigin" ? oe : V), Ke(a, s);
    l && (Ke(a, V), o && (o.svg && a.removeAttribute("transform"), i.scale = i.rotate = i.translate = "none", $t(a, 1), o.uncache = 1, br(i)));
  }
}, wa = {
  clearProps: function(e, t, a, i, n) {
    if (n.data !== "isFromStart") {
      var o = e._pt = new re(e._pt, t, a, 0, 0, ms);
      return o.u = i, o.pr = -10, o.tween = n, e._props.push(a), 1;
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
}, Xt = [1, 0, 0, 1, 0, 0], kr = {}, Ar = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, Ji = function(e) {
  var t = he(e, V);
  return Ar(t) ? Xt : t.substr(7).match(Dn).map(j);
}, Ii = function(e, t) {
  var a = e._gsap || lt(e), i = e.style, n = Ji(e), o, s, l, c;
  return a.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, n = [l.a, l.b, l.c, l.d, l.e, l.f], n.join(",") === "1,0,0,1,0,0" ? Xt : n) : (n === Xt && !e.offsetParent && e !== yt && !a.svg && (l = i.display, i.display = "block", o = e.parentNode, (!o || !e.offsetParent && !e.getBoundingClientRect().width) && (c = 1, s = e.nextElementSibling, yt.appendChild(e)), n = Ji(e), l ? i.display = l : Ke(e, "display"), c && (s ? o.insertBefore(e, s) : o ? o.appendChild(e) : yt.removeChild(e))), t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, hi = function(e, t, a, i, n, o) {
  var s = e._gsap, l = n || Ii(e, !0), c = s.xOrigin || 0, d = s.yOrigin || 0, u = s.xOffset || 0, g = s.yOffset || 0, p = l[0], f = l[1], h = l[2], w = l[3], b = l[4], y = l[5], x = t.split(" "), v = parseFloat(x[0]) || 0, _ = parseFloat(x[1]) || 0, T, k, C, A;
  a ? l !== Xt && (k = p * w - f * h) && (C = v * (w / k) + _ * (-h / k) + (h * y - w * b) / k, A = v * (-f / k) + _ * (p / k) - (p * y - f * b) / k, v = C, _ = A) : (T = xr(e), v = T.x + (~x[0].indexOf("%") ? v / 100 * T.width : v), _ = T.y + (~(x[1] || x[0]).indexOf("%") ? _ / 100 * T.height : _)), i || i !== !1 && s.smooth ? (b = v - c, y = _ - d, s.xOffset = u + (b * p + y * h) - b, s.yOffset = g + (b * f + y * w) - y) : s.xOffset = s.yOffset = 0, s.xOrigin = v, s.yOrigin = _, s.smooth = !!i, s.origin = t, s.originIsAbsolute = !!a, e.style[oe] = "0px 0px", o && (Ye(o, s, "xOrigin", c, v), Ye(o, s, "yOrigin", d, _), Ye(o, s, "xOffset", u, s.xOffset), Ye(o, s, "yOffset", g, s.yOffset)), e.setAttribute("data-svg-origin", v + " " + _);
}, $t = function(e, t) {
  var a = e._gsap || new sr(e);
  if ("x" in a && !t && !a.uncache)
    return a;
  var i = e.style, n = a.scaleX < 0, o = "px", s = "deg", l = getComputedStyle(e), c = he(e, oe) || "0", d, u, g, p, f, h, w, b, y, x, v, _, T, k, C, A, E, F, O, L, I, N, P, H, K, Pe, ve, Et, et, qi, Re, tt;
  return d = u = g = h = w = b = y = x = v = 0, p = f = 1, a.svg = !!(e.getCTM && vr(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[V] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[V] !== "none" ? l[V] : "")), i.scale = i.rotate = i.translate = "none"), k = Ii(e, a.svg), a.svg && (a.uncache ? (K = e.getBBox(), c = a.xOrigin - K.x + "px " + (a.yOrigin - K.y) + "px", H = "") : H = !t && e.getAttribute("data-svg-origin"), hi(e, H || c, !!H || a.originIsAbsolute, a.smooth !== !1, k)), _ = a.xOrigin || 0, T = a.yOrigin || 0, k !== Xt && (F = k[0], O = k[1], L = k[2], I = k[3], d = N = k[4], u = P = k[5], k.length === 6 ? (p = Math.sqrt(F * F + O * O), f = Math.sqrt(I * I + L * L), h = F || O ? pt(O, F) * ot : 0, y = L || I ? pt(L, I) * ot + h : 0, y && (f *= Math.abs(Math.cos(y * _t))), a.svg && (d -= _ - (_ * F + T * L), u -= T - (_ * O + T * I))) : (tt = k[6], qi = k[7], ve = k[8], Et = k[9], et = k[10], Re = k[11], d = k[12], u = k[13], g = k[14], C = pt(tt, et), w = C * ot, C && (A = Math.cos(-C), E = Math.sin(-C), H = N * A + ve * E, K = P * A + Et * E, Pe = tt * A + et * E, ve = N * -E + ve * A, Et = P * -E + Et * A, et = tt * -E + et * A, Re = qi * -E + Re * A, N = H, P = K, tt = Pe), C = pt(-L, et), b = C * ot, C && (A = Math.cos(-C), E = Math.sin(-C), H = F * A - ve * E, K = O * A - Et * E, Pe = L * A - et * E, Re = I * E + Re * A, F = H, O = K, L = Pe), C = pt(O, F), h = C * ot, C && (A = Math.cos(C), E = Math.sin(C), H = F * A + O * E, K = N * A + P * E, O = O * A - F * E, P = P * A - N * E, F = H, N = K), w && Math.abs(w) + Math.abs(h) > 359.9 && (w = h = 0, b = 180 - b), p = j(Math.sqrt(F * F + O * O + L * L)), f = j(Math.sqrt(P * P + tt * tt)), C = pt(N, P), y = Math.abs(C) > 2e-4 ? C * ot : 0, v = Re ? 1 / (Re < 0 ? -Re : Re) : 0), a.svg && (H = e.getAttribute("transform"), a.forceCSS = e.setAttribute("transform", "") || !Ar(he(e, V)), H && e.setAttribute("transform", H))), Math.abs(y) > 90 && Math.abs(y) < 270 && (n ? (p *= -1, y += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (f *= -1, y += y <= 0 ? 180 : -180)), t = t || a.uncache, a.x = d - ((a.xPercent = d && (!t && a.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-d) ? -50 : 0))) ? e.offsetWidth * a.xPercent / 100 : 0) + o, a.y = u - ((a.yPercent = u && (!t && a.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetHeight * a.yPercent / 100 : 0) + o, a.z = g + o, a.scaleX = j(p), a.scaleY = j(f), a.rotation = j(h) + s, a.rotationX = j(w) + s, a.rotationY = j(b) + s, a.skewX = y + s, a.skewY = x + s, a.transformPerspective = v + o, (a.zOrigin = parseFloat(c.split(" ")[2]) || !t && a.zOrigin || 0) && (i[oe] = ba(c)), a.xOffset = a.yOffset = 0, a.force3D = pe.force3D, a.renderTransform = a.svg ? ws : _r ? Sr : fs, a.uncache = 0, a;
}, ba = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, qa = function(e, t, a) {
  var i = J(t);
  return j(parseFloat(t) + parseFloat(Ze(e, "x", a + "px", i))) + i;
}, fs = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Sr(e, t);
}, at = "0deg", Mt = "0px", it = ") ", Sr = function(e, t) {
  var a = t || this, i = a.xPercent, n = a.yPercent, o = a.x, s = a.y, l = a.z, c = a.rotation, d = a.rotationY, u = a.rotationX, g = a.skewX, p = a.skewY, f = a.scaleX, h = a.scaleY, w = a.transformPerspective, b = a.force3D, y = a.target, x = a.zOrigin, v = "", _ = b === "auto" && e && e !== 1 || b === !0;
  if (x && (u !== at || d !== at)) {
    var T = parseFloat(d) * _t, k = Math.sin(T), C = Math.cos(T), A;
    T = parseFloat(u) * _t, A = Math.cos(T), o = qa(y, o, k * A * -x), s = qa(y, s, -Math.sin(T) * -x), l = qa(y, l, C * A * -x + x);
  }
  w !== Mt && (v += "perspective(" + w + it), (i || n) && (v += "translate(" + i + "%, " + n + "%) "), (_ || o !== Mt || s !== Mt || l !== Mt) && (v += l !== Mt || _ ? "translate3d(" + o + ", " + s + ", " + l + ") " : "translate(" + o + ", " + s + it), c !== at && (v += "rotate(" + c + it), d !== at && (v += "rotateY(" + d + it), u !== at && (v += "rotateX(" + u + it), (g !== at || p !== at) && (v += "skew(" + g + ", " + p + it), (f !== 1 || h !== 1) && (v += "scale(" + f + ", " + h + it), y.style[V] = v || "translate(0, 0)";
}, ws = function(e, t) {
  var a = t || this, i = a.xPercent, n = a.yPercent, o = a.x, s = a.y, l = a.rotation, c = a.skewX, d = a.skewY, u = a.scaleX, g = a.scaleY, p = a.target, f = a.xOrigin, h = a.yOrigin, w = a.xOffset, b = a.yOffset, y = a.forceCSS, x = parseFloat(o), v = parseFloat(s), _, T, k, C, A;
  l = parseFloat(l), c = parseFloat(c), d = parseFloat(d), d && (d = parseFloat(d), c += d, l += d), l || c ? (l *= _t, c *= _t, _ = Math.cos(l) * u, T = Math.sin(l) * u, k = Math.sin(l - c) * -g, C = Math.cos(l - c) * g, c && (d *= _t, A = Math.tan(c - d), A = Math.sqrt(1 + A * A), k *= A, C *= A, d && (A = Math.tan(d), A = Math.sqrt(1 + A * A), _ *= A, T *= A)), _ = j(_), T = j(T), k = j(k), C = j(C)) : (_ = u, C = g, T = k = 0), (x && !~(o + "").indexOf("px") || v && !~(s + "").indexOf("px")) && (x = Ze(p, "x", o, "px"), v = Ze(p, "y", s, "px")), (f || h || w || b) && (x = j(x + f - (f * _ + h * k) + w), v = j(v + h - (f * T + h * C) + b)), (i || n) && (A = p.getBBox(), x = j(x + i / 100 * A.width), v = j(v + n / 100 * A.height)), A = "matrix(" + _ + "," + T + "," + k + "," + C + "," + x + "," + v + ")", p.setAttribute("transform", A), y && (p.style[V] = A);
}, bs = function(e, t, a, i, n) {
  var o = 360, s = $(n), l = parseFloat(n) * (s && ~n.indexOf("rad") ? ot : 1), c = l - i, d = i + c + "deg", u, g;
  return s && (u = n.split("_")[1], u === "short" && (c %= o, c !== c % (o / 2) && (c += c < 0 ? o : -o)), u === "cw" && c < 0 ? c = (c + o * ji) % o - ~~(c / o) * o : u === "ccw" && c > 0 && (c = (c - o * ji) % o - ~~(c / o) * o)), e._pt = g = new re(e._pt, t, a, i, c, es), g.e = d, g.u = "deg", e._props.push(a), g;
}, en = function(e, t) {
  for (var a in t)
    e[a] = t[a];
  return e;
}, ys = function(e, t, a) {
  var i = en({}, a._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", o = a.style, s, l, c, d, u, g, p, f;
  i.svg ? (c = a.getAttribute("transform"), a.setAttribute("transform", ""), o[V] = t, s = $t(a, 1), Ke(a, V), a.setAttribute("transform", c)) : (c = getComputedStyle(a)[V], o[V] = t, s = $t(a, 1), o[V] = c);
  for (l in Fe)
    c = i[l], d = s[l], c !== d && n.indexOf(l) < 0 && (p = J(c), f = J(d), u = p !== f ? Ze(a, l, c, f) : parseFloat(c), g = parseFloat(d), e._pt = new re(e._pt, s, l, u, g - u, ci), e._pt.u = f || 0, e._props.push(l));
  en(s, i);
};
ne("padding,margin,Width,Radius", function(r, e) {
  var t = "Top", a = "Right", i = "Bottom", n = "Left", o = (e < 3 ? [t, a, i, n] : [t + n, t + a, i + a, i + n]).map(function(s) {
    return e < 2 ? r + s : "border" + s + r;
  });
  wa[e > 1 ? "border" + r : r] = function(s, l, c, d, u) {
    var g, p;
    if (arguments.length < 4)
      return g = o.map(function(f) {
        return Ne(s, f, c);
      }), p = g.join(" "), p.split(g[0]).length === 5 ? g[0] : p;
    g = (d + "").split(" "), p = {}, o.forEach(function(f, h) {
      return p[f] = g[h] = g[h] || g[(h - 1) / 2 | 0];
    }), s.init(l, p, u);
  };
});
var Cr = {
  name: "css",
  register: ui,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, a, i, n) {
    var o = this._props, s = e.style, l = a.vars.startAt, c, d, u, g, p, f, h, w, b, y, x, v, _, T, k, C, A;
    Mi || ui(), this.styles = this.styles || yr(e), C = this.styles.props, this.tween = a;
    for (h in t)
      if (h !== "autoRound" && (d = t[h], !(ce[h] && lr(h, t, a, i, e, n)))) {
        if (p = typeof d, f = wa[h], p === "function" && (d = d.call(a, i, e, n), p = typeof d), p === "string" && ~d.indexOf("random(") && (d = Vt(d)), f)
          f(this, e, h, d, a) && (k = 1);
        else if (h.substr(0, 2) === "--")
          c = (getComputedStyle(e).getPropertyValue(h) + "").trim(), d += "", $e.lastIndex = 0, $e.test(c) || (w = J(c), b = J(d), b ? w !== b && (c = Ze(e, h, c, b) + b) : w && (d += w)), this.add(s, "setProperty", c, d, i, n, 0, 0, h), o.push(h), C.push(h, 0, s[h]);
        else if (p !== "undefined") {
          if (l && h in l ? (c = typeof l[h] == "function" ? l[h].call(a, i, e, n) : l[h], $(c) && ~c.indexOf("random(") && (c = Vt(c)), J(c + "") || c === "auto" || (c += pe.units[h] || J(Ne(e, h)) || ""), (c + "").charAt(1) === "=" && (c = Ne(e, h))) : c = Ne(e, h), g = parseFloat(c), y = p === "string" && d.charAt(1) === "=" && d.substr(0, 2), y && (d = d.substr(2)), u = parseFloat(d), h in Ee && (h === "autoAlpha" && (g === 1 && Ne(e, "visibility") === "hidden" && u && (g = 0), C.push("visibility", 0, s.visibility), Ye(this, s, "visibility", g ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), h !== "scale" && h !== "transform" && (h = Ee[h], ~h.indexOf(",") && (h = h.split(",")[0]))), x = h in Fe, x) {
            if (this.styles.save(h), A = d, p === "string" && d.substring(0, 6) === "var(--") {
              if (d = he(e, d.substring(4, d.indexOf(")"))), d.substring(0, 5) === "calc(") {
                var E = e.style.perspective;
                e.style.perspective = d, d = he(e, "perspective"), E ? e.style.perspective = E : Ke(e, "perspective");
              }
              u = parseFloat(d);
            }
            if (v || (_ = e._gsap, _.renderTransform && !t.parseTransform || $t(e, t.parseTransform), T = t.smoothOrigin !== !1 && _.smooth, v = this._pt = new re(this._pt, s, V, 0, 1, _.renderTransform, _, 0, -1), v.dep = 1), h === "scale")
              this._pt = new re(this._pt, _, "scaleY", _.scaleY, (y ? bt(_.scaleY, y + u) : u) - _.scaleY || 0, ci), this._pt.u = 0, o.push("scaleY", h), h += "X";
            else if (h === "transformOrigin") {
              C.push(oe, 0, s[oe]), d = gs(d), _.svg ? hi(e, d, 0, T, 0, this) : (b = parseFloat(d.split(" ")[2]) || 0, b !== _.zOrigin && Ye(this, _, "zOrigin", _.zOrigin, b), Ye(this, s, h, ba(c), ba(d)));
              continue;
            } else if (h === "svgOrigin") {
              hi(e, d, 1, T, 0, this);
              continue;
            } else if (h in kr) {
              bs(this, _, h, g, y ? bt(g, y + d) : d);
              continue;
            } else if (h === "smoothOrigin") {
              Ye(this, _, "smooth", _.smooth, d);
              continue;
            } else if (h === "force3D") {
              _[h] = d;
              continue;
            } else if (h === "transform") {
              ys(this, d, e);
              continue;
            }
          } else h in s || (h = Tt(h) || h);
          if (x || (u || u === 0) && (g || g === 0) && !Jo.test(d) && h in s)
            w = (c + "").substr((g + "").length), u || (u = 0), b = J(d) || (h in pe.units ? pe.units[h] : w), w !== b && (g = Ze(e, h, c, b)), this._pt = new re(this._pt, x ? _ : s, h, g, (y ? bt(g, y + u) : u) - g, !x && (b === "px" || h === "zIndex") && t.autoRound !== !1 ? is : ci), this._pt.u = b || 0, x && A !== d ? (this._pt.b = c, this._pt.e = A, this._pt.r = as) : w !== b && b !== "%" && (this._pt.b = c, this._pt.r = ts);
          else if (h in s)
            ps.call(this, e, h, c, y ? y + d : d);
          else if (h in e)
            this.add(e, h, c || e[h], y ? y + d : d, i, n);
          else if (h !== "parseTransform") {
            yi(h, d);
            continue;
          }
          x || (h in s ? C.push(h, 0, s[h]) : typeof e[h] == "function" ? C.push(h, 2, e[h]()) : C.push(h, 1, c || e[h])), o.push(h);
        }
      }
    k && gr(this);
  },
  render: function(e, t) {
    if (t.tween._time || !Pi())
      for (var a = t._pt; a; )
        a.r(e, a.d), a = a._next;
    else
      t.styles.revert();
  },
  get: Ne,
  aliases: Ee,
  getSetter: function(e, t, a) {
    var i = Ee[t];
    return i && i.indexOf(",") < 0 && (t = i), t in Fe && t !== oe && (e._gsap.x || Ne(e, "x")) ? a && Yi === a ? t === "scale" ? ss : os : (Yi = a || {}) && (t === "scale" ? ls : cs) : e.style && !fi(e.style[t]) ? ns : ~t.indexOf("-") ? rs : Ti(e, t);
  },
  core: {
    _removeProperty: Ke,
    _getMatrix: Ii
  }
};
se.utils.checkPrefix = Tt;
se.core.getStyleSaver = yr;
(function(r, e, t, a) {
  var i = ne(r + "," + e + "," + t, function(n) {
    Fe[n] = 1;
  });
  ne(e, function(n) {
    pe.units[n] = "deg", kr[n] = 1;
  }), Ee[i[13]] = r + "," + e, ne(a, function(n) {
    var o = n.split(":");
    Ee[o[1]] = i[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
ne("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(r) {
  pe.units[r] = "px";
});
se.registerPlugin(Cr);
var m = se.registerPlugin(Cr) || se;
m.core.Tween;
const De = "Thinking", Ht = "Show more", ua = "Show less";
function Li(r, e) {
  const t = r.toLowerCase();
  return t.includes("source") || t.includes("data") ? "Searching across company records, contact databases, technographics, commerce signals, and local business indexes to find matches." : t.includes("competitor") || t.includes("positioning") ? "Comparing the business context against known market alternatives, displacement angles, objections, and differentiation claims." : t.includes("messaging") || t.includes("proof") ? "Extracting repeatable claims, customer proof, pain language, and credible hooks that can become outbound strategy." : t.includes("pylon") ? "Reading the uploaded business context to identify category language, buyer pains, competitive traps, and GTM opportunities." : t.includes("company") ? "Reviewing public company information, website copy, firmographics, and recent external signals to understand the account context." : t.includes("icp") || t.includes("buyer") ? "Mapping personas, buying committees, seniority, department ownership, and account-fit signals from the available evidence." : t.includes("blog") ? "Reading launch notes, blog posts, category language, and positioning themes to infer the strongest outreach angles." : t.includes("career") || t.includes("hiring") ? "Checking careers pages, new roles, team growth, and hiring language to understand near-term operating priorities." : t.includes("gtm") ? "Connecting signal strength, audience fit, and likely urgency to decide which outbound motion is most likely to convert." : t.includes("funding") || t.includes("round") ? "Reviewing recent funding announcements, raise dates, investor notes, and company updates from the past three months." : t.includes("transcript") || t.includes("notes") ? "Extracting CRM fields, next steps, risk language, and owner context from the conversation transcript." : t.includes("logs") || t.includes("auth") ? "Inspecting connector logs, authentication events, permission changes, and recent workspace activity." : t.includes("account") || t.includes("signals") ? "Combining account history with public source changes and recent activity to prepare a concise research brief." : e % 2 === 0 ? "Inspecting relevant records, comparing source confidence, and filtering out low-quality matches before returning results." : "Cross-checking the strongest evidence across sources so the final answer only includes useful, defensible results.";
}
function Aa(r) {
  return r <= 1 ? "4m 12s" : r <= 3 ? "4m 20s" : "4m 50s";
}
function _s(r) {
  const e = r.trim().toLowerCase(), t = e.match(/(\d+(?:\.\d+)?)\s*m/), a = e.match(/(\d+(?:\.\d+)?)\s*s/);
  let i = 0, n = !1;
  if (t && (i += Number(t[1]) * 60, n = !0), a && (i += Number(a[1]), n = !0), !n) {
    const o = Number(e);
    return Number.isFinite(o) ? Math.max(0, o) : null;
  }
  return Number.isFinite(i) ? Math.max(0, i) : null;
}
function ta(r) {
  const e = Math.max(0, Math.floor(r)), t = Math.floor(e / 60), a = e % 60;
  return t > 0 ? `${t}m ${a}s` : `${a}s`;
}
function xs(r, e, t, a = {}) {
  const i = _s(t);
  if (i === null) {
    e.textContent = t;
    return;
  }
  if (e.textContent = "0s", a.reducedMotion || i <= 0) {
    e.textContent = ta(i);
    return;
  }
  const n = r.duration();
  if (n <= 0) {
    e.textContent = ta(i);
    return;
  }
  const o = { seconds: 0 };
  r.to(
    o,
    {
      seconds: i,
      duration: n,
      ease: "none",
      onUpdate: () => {
        e.textContent = ta(o.seconds);
      },
      onComplete: () => {
        e.textContent = ta(i);
      },
      onReverseComplete: () => {
        e.textContent = "0s";
      }
    },
    0
  );
}
const D = "https://i.pravatar.cc/96", vs = {
  "andre park": `${D}?img=52`,
  "ava garcia": `${D}?img=46`,
  "chadley dupre": `${D}?img=59`,
  "chandler bree": `${D}?img=11`,
  "clara wong": `${D}?img=32`,
  "david kim": `${D}?img=33`,
  "ellen nelle": `${D}?img=47`,
  "evan brooks": `${D}?img=8`,
  "fatima ali": `${D}?img=45`,
  "jamie chen": `${D}?img=12`,
  "jules meyer": `${D}?img=14`,
  "leo martin": `${D}?img=56`,
  "liam price": `${D}?img=6`,
  "marcus reed": `${D}?img=53`,
  "maya patel": `${D}?img=5`,
  "miles kibble iii": `${D}?img=15`,
  "miles kibbles iii": `${D}?img=15`,
  "mr kibbles iii": `${D}?img=15`,
  "natalie dank": `${D}?img=49`,
  "nina kapoor": `${D}?img=31`,
  "noah singh": `${D}?img=4`,
  "owen lee": `${D}?img=7`,
  "patrick bateman": `${D}?img=68`,
  "priya rao": `${D}?img=21`,
  "rachel cho": `${D}?img=44`,
  "sam hollis": `${D}?img=13`,
  "sara nelson": `${D}?img=41`,
  "zoe carter": `${D}?img=23`
};
function Tr(r) {
  return r.trim().toLowerCase().replace(/\s+/g, " ");
}
function ks(r) {
  const e = Tr(r).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return e ? `${D}?u=${encodeURIComponent(e)}` : "";
}
function Sa(r, e) {
  const t = Tr(r), a = e?.trim() || void 0;
  return vs[t] ?? a ?? ks(r);
}
const Er = `
<svg viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  <path d="M5.71835 3.84074V0H0V5.12789C0 7.97387 2.13981 10.9988 6.10463 10.9988H8.4998V5.49938L7.40298 5.48406C6.46808 5.4708 5.71706 4.7386 5.71706 3.8395L5.71835 3.84074Z" fill="currentColor"/>
  <path d="M11.2814 7.15899V10.9997H16.9998V5.87225C16.9998 3.02586 14.86 0.000976562 10.8952 0.000976562H8.5V5.50036L9.59682 5.51568C10.5317 5.52893 11.2827 6.26113 11.2827 7.16023L11.2814 7.15899Z" fill="currentColor"/>
</svg>`;
function As(r) {
  const e = document.createElement("template");
  e.innerHTML = Er.trim();
  const t = e.content.firstElementChild;
  return t.classList.add(r), t;
}
const Ss = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66">
<path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"/>
<path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"/>
<path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"/>
<path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92"/>
<path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"/>
</svg>`, Cs = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="60 90.4 570.02 539.67">
<defs>
<linearGradient id="linear0" gradientUnits="userSpaceOnUse" x1="9.98908" y1="22.364901" x2="30.932199" y2="9.37495" gradientTransform="matrix(15,0,0,15,0,0)">
<stop offset="0" style="stop-color:rgb(12.54902%,65.490196%,98.039216%);stop-opacity:1;"/>
<stop offset="0.4" style="stop-color:rgb(23.137255%,83.529412%,100%);stop-opacity:1;"/>
<stop offset="1" style="stop-color:rgb(76.862745%,69.019608%,100%);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="linear1" gradientUnits="userSpaceOnUse" x1="17.197201" y1="26.7945" x2="28.856199" y2="8.12575" gradientTransform="matrix(15,0,0,15,0,0)">
<stop offset="0" style="stop-color:rgb(8.627451%,35.294118%,85.098039%);stop-opacity:1;"/>
<stop offset="0.5008" style="stop-color:rgb(9.411765%,50.196078%,89.803922%);stop-opacity:1;"/>
<stop offset="1" style="stop-color:rgb(52.156863%,52.941176%,100%);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="linear2" gradientUnits="userSpaceOnUse" x1="25.7005" y1="27.048401" x2="12.7563" y2="16.501301" gradientTransform="matrix(15,0,0,15,0,0)">
<stop offset="0.236946" style="stop-color:rgb(26.666667%,54.117647%,100%);stop-opacity:0;"/>
<stop offset="0.792113" style="stop-color:rgb(0%,19.607843%,69.411765%);stop-opacity:0.2;"/>
</linearGradient>
<linearGradient id="linear3" gradientUnits="userSpaceOnUse" x1="24.0534" y1="31.1099" x2="44.509998" y2="18.0177" gradientTransform="matrix(15,0,0,15,0,0)">
<stop offset="0" style="stop-color:rgb(10.196078%,26.27451%,65.098039%);stop-opacity:1;"/>
<stop offset="0.492267" style="stop-color:rgb(12.54902%,32.156863%,79.607843%);stop-opacity:1;"/>
<stop offset="1" style="stop-color:rgb(37.254902%,12.54902%,79.607843%);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="linear4" gradientUnits="userSpaceOnUse" x1="29.8281" y1="30.327299" x2="17.397499" y2="19.570801" gradientTransform="matrix(15,0,0,15,0,0)">
<stop offset="0" style="stop-color:rgb(0%,27.058824%,72.54902%);stop-opacity:0;"/>
<stop offset="0.669859" style="stop-color:rgb(5.098039%,12.156863%,41.176471%);stop-opacity:0.2;"/>
</linearGradient>
<radialGradient id="radial0" gradientUnits="userSpaceOnUse" cx="0" cy="0" fx="0" fy="0" r="1" gradientTransform="matrix(0.000000000000024802,-405.040512,438.393002,0.000000000000026844,360.027008,102.268202)">
<stop offset="0.568182" style="stop-color:rgb(15.294118%,37.254902%,94.117647%);stop-opacity:0;"/>
<stop offset="0.992424" style="stop-color:rgb(0%,12.941176%,46.666667%);stop-opacity:1;"/>
</radialGradient>
<linearGradient id="linear5" gradientUnits="userSpaceOnUse" x1="41.998001" y1="29.9431" x2="23.8517" y2="29.9431" gradientTransform="matrix(15,0,0,15,0,0)">
<stop offset="0" style="stop-color:rgb(30.196078%,76.862745%,100%);stop-opacity:1;"/>
<stop offset="0.196145" style="stop-color:rgb(5.882353%,68.627451%,100%);stop-opacity:1;"/>
</linearGradient>
<radialGradient id="radial1" gradientUnits="userSpaceOnUse" cx="0" cy="0" fx="0" fy="0" r="1" gradientTransform="matrix(122.73959,-122.73959,122.73959,122.73959,421.392002,568.675518)">
<stop offset="0.259477" style="stop-color:rgb(0%,37.647059%,81.960784%);stop-opacity:0.4;"/>
<stop offset="0.908166" style="stop-color:rgb(1.176471%,51.372549%,94.509804%);stop-opacity:0;"/>
</radialGradient>
<radialGradient id="radial2" gradientUnits="userSpaceOnUse" cx="0" cy="0" fx="0" fy="0" r="1" gradientTransform="matrix(357.407022,-468.445926,423.594568,323.187085,159.471002,697.080002)">
<stop offset="0.732317" style="stop-color:rgb(95.686275%,65.490196%,96.862745%);stop-opacity:0;"/>
<stop offset="1" style="stop-color:rgb(95.686275%,65.490196%,96.862745%);stop-opacity:0.501961;"/>
</radialGradient>
<radialGradient id="radial3" gradientUnits="userSpaceOnUse" cx="0" cy="0" fx="0" fy="0" r="1" gradientTransform="matrix(-170.860868,259.725406,-674.018133,-443.404152,278.562012,412.978506)">
<stop offset="0" style="stop-color:rgb(28.627451%,87.058824%,100%);stop-opacity:1;"/>
<stop offset="0.724349" style="stop-color:rgb(16.078431%,76.470588%,100%);stop-opacity:1;"/>
</radialGradient>
<linearGradient id="linear6" gradientUnits="userSpaceOnUse" x1="3.45756" y1="37.872299" x2="20.9291" y2="37.859699" gradientTransform="matrix(15,0,0,15,0,0)">
<stop offset="0.205882" style="stop-color:rgb(42.352941%,87.843137%,100%);stop-opacity:1;"/>
<stop offset="0.535" style="stop-color:rgb(31.372549%,83.529412%,100%);stop-opacity:0;"/>
</linearGradient>
<radialGradient id="radial4" gradientUnits="userSpaceOnUse" cx="0" cy="0" fx="0" fy="0" r="1" gradientTransform="matrix(215.76719,230.769125,-230.769125,215.76719,59.143649,354.231005)">
<stop offset="0.038877" style="stop-color:rgb(0%,56.862745%,100%);stop-opacity:1;"/>
<stop offset="0.919119" style="stop-color:rgb(9.411765%,23.921569%,67.843137%);stop-opacity:1;"/>
</radialGradient>
<radialGradient id="radial5" gradientUnits="userSpaceOnUse" cx="0" cy="0" fx="0" fy="0" r="1" gradientTransform="matrix(0.000000000000010287,167.999997,-193.782005,0.000000000000011866,180,491.158504)">
<stop offset="0.557796" style="stop-color:rgb(5.882353%,64.705882%,96.862745%);stop-opacity:0;"/>
<stop offset="1" style="stop-color:rgb(45.490196%,77.647059%,100%);stop-opacity:0.501961;"/>
</radialGradient>
</defs>
<g id="surface1">
<path style=" stroke:none;fill-rule:nonzero;fill:url(#linear0);" d="M 463.984375 140.144531 L 119.636719 358.414062 L 90.023438 311.695312 L 90.023438 271.4375 C 90.023438 256.78125 97.445312 243.121094 109.742188 235.144531 L 309.910156 105.257812 C 340.40625 85.46875 379.6875 85.464844 410.1875 105.25 Z M 463.984375 140.144531 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:url(#linear1);" d="M 407.101562 103.339844 C 408.136719 103.953125 409.164062 104.59375 410.183594 105.253906 L 566.398438 206.585938 L 179.0625 452.105469 L 119.625 358.335938 L 403.894531 177.800781 C 430.820312 160.699219 432 122.230469 407.101562 103.339844 Z M 407.101562 103.339844 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:url(#linear2);" d="M 407.101562 103.339844 C 408.136719 103.953125 409.164062 104.59375 410.183594 105.253906 L 566.398438 206.585938 L 179.0625 452.105469 L 119.625 358.335938 L 403.894531 177.800781 C 430.820312 160.699219 432 122.230469 407.101562 103.339844 Z M 407.101562 103.339844 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:url(#linear3);" d="M 333.601562 498.988281 L 179.066406 452.109375 L 507.628906 243.835938 C 535.300781 226.296875 535.230469 185.898438 507.496094 168.457031 L 506.015625 167.527344 L 510.277344 170.175781 L 610.273438 235.042969 C 622.574219 243.019531 629.996094 256.683594 629.996094 271.34375 L 629.996094 310.304688 Z M 333.601562 498.988281 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:url(#linear4);" d="M 333.601562 498.988281 L 179.066406 452.109375 L 507.628906 243.835938 C 535.300781 226.296875 535.230469 185.898438 507.496094 168.457031 L 506.015625 167.527344 L 510.277344 170.175781 L 610.273438 235.042969 C 622.574219 243.019531 629.996094 256.683594 629.996094 271.34375 L 629.996094 310.304688 Z M 333.601562 498.988281 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:url(#radial0);" d="M 410.1875 105.25 C 379.6875 85.464844 340.40625 85.46875 309.90625 105.257812 L 109.742188 235.144531 C 97.445312 243.121094 90.023438 256.78125 90.023438 271.4375 L 90.023438 273.40625 C 90.507812 288.121094 98.25 301.679688 110.757812 309.566406 L 359.644531 466.476562 L 609.160156 309.804688 C 622.121094 301.667969 629.984375 287.441406 629.984375 272.140625 L 629.984375 310.308594 L 629.992188 271.34375 C 629.992188 256.683594 622.566406 243.023438 610.269531 235.042969 Z M 410.1875 105.25 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:url(#linear5);" d="M 315.769531 630.050781 L 536.21875 630.050781 C 587.996094 630.050781 629.96875 588.078125 629.96875 536.300781 L 629.96875 272.140625 C 629.96875 287.441406 622.105469 301.667969 609.148438 309.804688 L 281.242188 515.695312 C 263.554688 526.804688 252.820312 546.222656 252.820312 567.109375 C 252.824219 601.871094 281.003906 630.050781 315.769531 630.050781 Z M 315.769531 630.050781 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:url(#radial1);" d="M 315.769531 630.050781 L 536.21875 630.050781 C 587.996094 630.050781 629.96875 588.078125 629.96875 536.300781 L 629.96875 272.140625 C 629.96875 287.441406 622.105469 301.667969 609.148438 309.804688 L 281.242188 515.695312 C 263.554688 526.804688 252.820312 546.222656 252.820312 567.109375 C 252.824219 601.871094 281.003906 630.050781 315.769531 630.050781 Z M 315.769531 630.050781 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:url(#radial2);" d="M 315.769531 630.050781 L 536.21875 630.050781 C 587.996094 630.050781 629.96875 588.078125 629.96875 536.300781 L 629.96875 272.140625 C 629.96875 287.441406 622.105469 301.667969 609.148438 309.804688 L 281.242188 515.695312 C 263.554688 526.804688 252.820312 546.222656 252.820312 567.109375 C 252.824219 601.871094 281.003906 630.050781 315.769531 630.050781 Z M 315.769531 630.050781 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:url(#radial3);" d="M 405.402344 630.035156 L 183.738281 630.035156 C 131.960938 630.035156 89.988281 588.0625 89.988281 536.285156 L 89.988281 271.945312 C 89.988281 287.21875 97.824219 301.421875 110.742188 309.566406 L 438.324219 516.085938 C 456.257812 527.390625 467.132812 547.113281 467.132812 568.3125 C 467.128906 602.402344 439.492188 630.035156 405.402344 630.035156 Z M 405.402344 630.035156 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:url(#linear6);" d="M 405.402344 630.035156 L 183.738281 630.035156 C 131.960938 630.035156 89.988281 588.0625 89.988281 536.285156 L 89.988281 271.945312 C 89.988281 287.21875 97.824219 301.421875 110.742188 309.566406 L 438.324219 516.085938 C 456.257812 527.390625 467.132812 547.113281 467.132812 568.3125 C 467.128906 602.402344 439.492188 630.035156 405.402344 630.035156 Z M 405.402344 630.035156 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:url(#radial4);" d="M 108.75 345 L 251.25 345 C 278.175781 345 300 366.824219 300 393.75 L 300 536.25 C 300 563.175781 278.175781 585 251.25 585 L 108.75 585 C 81.824219 585 60 563.175781 60 536.25 L 60 393.75 C 60 366.824219 81.824219 345 108.75 345 Z M 108.75 345 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:url(#radial5);" d="M 108.75 345 L 251.25 345 C 278.175781 345 300 366.824219 300 393.75 L 300 536.25 C 300 563.175781 278.175781 585 251.25 585 L 108.75 585 C 81.824219 585 60 563.175781 60 536.25 L 60 393.75 C 60 366.824219 81.824219 345 108.75 345 Z M 108.75 345 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 179.386719 534 C 159.539062 534 143.25 527.789062 130.511719 515.375 C 117.773438 502.960938 111.402344 486.757812 111.402344 466.769531 C 111.402344 445.660156 117.867188 428.589844 130.796875 415.550781 C 143.730469 402.515625 160.660156 396 181.59375 396 C 201.375 396 217.472656 402.238281 229.890625 414.714844 C 242.375 427.191406 248.617188 443.644531 248.617188 464.066406 C 248.617188 485.050781 242.148438 501.964844 229.21875 514.816406 C 216.351562 527.605469 199.742188 534 179.386719 534 Z M 179.960938 507.648438 C 190.777344 507.648438 199.484375 503.953125 206.078125 496.566406 C 212.671875 489.179688 215.96875 478.902344 215.96875 465.742188 C 215.96875 452.023438 212.765625 441.347656 206.367188 433.710938 C 199.964844 426.074219 191.417969 422.257812 180.730469 422.257812 C 169.71875 422.257812 160.851562 426.199219 154.132812 434.082031 C 147.410156 441.90625 144.050781 452.273438 144.050781 465.183594 C 144.050781 478.285156 147.410156 488.652344 154.132812 496.285156 C 160.851562 503.859375 169.460938 507.648438 179.960938 507.648438 Z M 179.960938 507.648438 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 179.332031 535.847656 C 159.5625 535.847656 143.332031 529.472656 130.640625 516.71875 C 117.953125 503.964844 111.605469 487.320312 111.605469 466.789062 C 111.605469 445.105469 118.046875 427.570312 130.929688 414.179688 C 143.8125 400.785156 160.679688 394.089844 181.53125 394.089844 C 201.234375 394.089844 217.273438 400.5 229.644531 413.316406 C 242.082031 426.136719 248.296875 443.035156 248.296875 464.015625 C 248.296875 485.566406 241.855469 502.945312 228.976562 516.144531 C 216.15625 529.28125 199.609375 535.847656 179.332031 535.847656 Z M 179.902344 508.78125 C 190.679688 508.78125 199.355469 504.984375 205.921875 497.398438 C 212.492188 489.808594 215.773438 479.253906 215.773438 465.734375 C 215.773438 451.640625 212.585938 440.675781 206.210938 432.832031 C 199.832031 424.988281 191.320312 421.066406 180.671875 421.066406 C 169.699219 421.066406 160.867188 425.113281 154.171875 433.214844 C 147.476562 441.246094 144.128906 451.898438 144.128906 465.160156 C 144.128906 478.617188 147.476562 489.265625 154.171875 497.109375 C 160.867188 504.890625 169.445312 508.78125 179.902344 508.78125 Z M 179.902344 508.78125 "/>
</g>
</svg>`;
function Mr(r) {
  return Math.max(0, Math.floor((r.sequences.length - 1) / 2));
}
function Pr(r, e) {
  const t = Mr(r), a = [];
  for (let i = t + 1; i < r.sequences.length && a.length < e; i += 1)
    a.push(i);
  for (let i = t - 1; i >= 0 && a.length < e; i -= 1)
    a.push(i);
  for (; a.length < e; ) a.push(t);
  return a;
}
const Ts = [
  "wa-message--component",
  ...[
    "table",
    "enrichment",
    "thinking",
    "result",
    "strategy",
    "sources",
    "mailbox",
    "style",
    "proximity",
    "game",
    "sequence",
    "drop",
    "file"
  ].map(
    (r) => `wa-message--${r}`
  )
], Es = 1.28, S = (r) => Number((r * Es).toFixed(3)), Ms = [2, 3, 2], te = {
  pressDuration: S(0.09),
  releaseDuration: S(0.2),
  loadingHoldDuration: S(0.78),
  successHoldDuration: S(0.12),
  learningRevealDuration: S(0.34),
  detailSwapDuration: 0.16,
  readyPopUpDuration: 0.12,
  readyPopSettleDuration: 0.22,
  settleHold: S(0.24)
}, tn = "Learning your style", Ps = "Voice calibrated", an = "73 tone & tactic rules defined", Oa = [
  { detail: "Analyzing vocabulary", progress: 31, duration: 1.05, hold: 0.38 },
  { detail: "Investigating wins", progress: 64, duration: 1.2, hold: 0.46 },
  { detail: "Figuring out your voice", progress: 100, duration: 1.15, hold: 0.76 }
], Rs = {
  gmail: un(Ss),
  outlook: un(Cs)
}, Is = [
  82,
  86,
  94,
  74,
  76,
  90,
  68,
  70,
  46,
  18,
  12,
  8,
  28,
  54,
  38,
  0,
  4
], Ls = /* @__PURE__ */ new Set([5, 8, 10, 16]), Ds = [
  "M9.62137 135.631C9.62137 135.631 -4.10678 106.019 7.70875 69.6796",
  "M11.3787 60.2136C11.3787 60.2136 34.0777 2.91262 102.427 2.91262",
  "M197.058 103.718C197.058 103.718 200.942 20.068 113.252 3.7767",
  "M19.5631 158.35C21.2233 151.262 23.0582 140.369 22.3107 127.116C21.7184 116.583 20.0097 113.913 19.5145 104.777C19.2621 100.029 18.5437 83.4757 26.4951 65.9126C34.9709 47.1845 49.0971 36.6311 56.398 31.9612",
  "M66.1456 26.6117C71.4369 24.1359 96.4369 13.1262 126.097 23.0971C153.777 32.3981 167.068 53.7573 170.777 60.3301C177.078 71.4757 179.175 85.0583 181.252 95.932C182.883 104.495 183.68 111.757 184.087 116.922",
  "M184.427 150.524C184.515 142.883 184.602 135.243 184.699 127.602",
  "M30.6699 171.767C33.8641 164.67 37.8835 153.573 38.5923 139.67C39.3107 125.777 36.0777 121.699 35.7961 107.32C35.5631 95.5631 35.233 78.5534 45.5728 62.8738C58.4369 43.3689 79.8253 38.0291 85.602 36.8155C101.301 33.4951 114.262 36.7864 120.437 38.8058",
  "M129.709 42.7379C136.136 46.2524 146.456 53.0777 154.252 65.2136C160.437 74.8447 162.097 83.2524 165.194 98.9515C166.748 106.845 169.301 122.456 168.689 142.699C168.282 156.039 166.621 167.204 165.029 175.35",
  "M43.165 182.466C44.8738 178.65 46.5728 174.388 48.1456 169.699C49.6602 165.184 50.8349 160.922 51.7476 156.981",
  "M54.1068 146.456C54.6699 142.476 55.2718 136.388 54.8932 128.971C54.4951 121.262 53.3592 118.146 52.5631 110.359C51.7184 102.019 51.0194 95.1553 52.5631 87.7864C55.9126 71.7573 67.9806 62.1845 69.7864 60.7961C82.5631 50.9515 96.1942 50.9612 100.039 51.0194C111.505 51.2039 119.767 55.4078 122.379 56.835C131.981 62.0971 137.282 69.3495 139.583 72.9612",
  "M88.7087 199.709C89.8447 196.689 90.9903 193.67 92.1262 190.641C93.2816 187.573 94.4272 184.515 95.5728 181.456",
  "M105.913 199.777C108.777 192.884 111.67 184.68 114 175.282C116.466 165.34 117.767 156.282 118.417 148.524",
  "M124.214 196.961C127.447 188.175 130.951 176.689 133.311 162.951C136.252 145.816 136.068 132.913 135.874 122.233C135.388 96.6602 131.485 89.068 129.825 86.1651C127.748 82.5243 123.583 75.4466 114.932 71.0388C106.845 66.9223 99.2136 67.3592 97.0097 67.5437C91.9806 67.9806 88.0582 69.4951 85.6019 70.6602",
  "M144.515 188.553C148.485 174.864 152.505 155.534 152.388 132.233C152.291 112.165 149.175 95.2427 145.854 82.6019",
  "M77.6602 76.1553C73.8544 79.6117 68.8738 85.2524 67.2233 93.1456C65.4466 101.621 68.7087 107.049 70.4854 118.282C72.1359 128.767 71.2913 136.621 70.2524 146.204C69.1748 156.126 66.1553 171.942 56.5631 190.359",
  "M71.9224 196.039C76.0777 187.456 80.7088 175.825 83.7476 161.553C85.7767 152.019 88.4078 139.67 87.0097 125.252C86.4758 119.748 86.233 114.223 85.6117 108.728C84.4758 98.699 83.6214 95.9418 85.3787 92.2039C87.5728 87.5243 92.5437 84.0874 97.9418 83.3592C105.107 82.3981 111.67 86.4078 114.466 91.2718C114.913 92.0485 115.398 93.0874 116.563 99.6505C117.583 105.417 118.126 108.476 118.66 114.311C119.184 120.039 119.651 127.816 119.505 137.311",
  "M98.1747 172.204C100.495 161.476 102.466 148.019 102.592 132.466C102.709 118.631 101.34 106.495 99.5631 96.5437"
], Ns = {
  duration: S(0.44),
  ease: "back.out(1.7)"
}, nn = {
  startOverlap: "-=0.08",
  charsPerSecond: 54,
  minDuration: 0.36,
  maxDuration: 1.55
}, xt = {
  startOverlap: "-=0.08",
  charsPerSecond: 86,
  labelCharsPerSecond: 72,
  minDuration: 0.28,
  maxDuration: 1.1
}, qs = {
  charsPerSecond: xt.labelCharsPerSecond,
  minDuration: xt.minDuration,
  maxDuration: xt.maxDuration
}, Os = {
  charsPerSecond: 62,
  minDuration: 0.18,
  maxDuration: 0.42
}, rn = {
  detailOffsetY: -4,
  duration: S(0.24)
}, ke = {
  duration: S(0.34),
  returnDuration: S(0.38),
  ease: "power2.inOut"
}, Ba = {
  y: -4,
  duration: S(0.26),
  ease: "power2.inOut"
}, za = {
  templateHold: S(0.54),
  progressDuration: S(3.9),
  finalHold: S(0.34)
}, fe = {
  compactWidth: 96,
  compactHeight: 30,
  collapsedWidth: 0,
  collapsedHeight: 0,
  showDuration: S(0.42),
  hideDuration: S(0.32),
  contentShowDelay: S(0.1),
  contentHideDuration: S(0.1),
  showEase: "expo.out",
  hideEase: "power3.in",
  contentEase: "power2.out",
  threadGap: 44
}, Bs = "left,right,bottom,width,height,minHeight,paddingTop,paddingRight,paddingBottom,paddingLeft,borderWidth,gap", Fa = {
  paddingTop: "",
  paddingRight: "",
  paddingBottom: "",
  paddingLeft: "",
  borderWidth: "",
  gap: ""
}, Pt = {
  scrollOutRatio: 1.02,
  minScrollOut: 420,
  duration: S(0.58),
  threadOverlap: "-=0.36"
}, Ha = {
  duration: S(0.68),
  ease: "power3.inOut",
  targetColor: "#67635f"
}, on = 110, He = {
  revealDuration: S(0.42),
  revealEase: "power3.inOut",
  followDuration: S(0.24),
  followEase: "power2.out"
}, nt = {
  scrollDistance: 160,
  offsetY: 78,
  scrollDuration: S(0.36),
  contentDuration: S(0.42),
  contentDelay: 0.04,
  contentEase: "power3.in",
  stagger: 0.015
}, Ie = {
  threadY: -176,
  threadOpacity: 0,
  revealDuration: S(0.62),
  revealEase: "power3.inOut",
  cardDuration: S(0.28)
}, zs = 4, Fs = [
  ["CRM", "Core Data", "Ad Intelligence"],
  ["Web Intent", "Product Analytics", "SMB Data", "Ecommerce"],
  ["Enrichment", "Company / Fundraising", "Tech Stack"],
  ["Web / SEO", "Relationships", "And more"]
], Ua = {
  contentWidth: 1881,
  height: 1280
}, Hs = 96, sn = ".wa-cursor-file, .wa-file-landing-clone, .wa-file-landing-label, .wa-csv-drop, .wa-signup-logo-transfer", ln = "[data-marketing-data-sources-grid]", cn = "[data-data-table]", Rt = "[data-table-action]", dn = "[data-table-page-button]", Us = "[data-table-page-range]", Ga = {
  offscreenMargin: 280,
  pullInDuration: S(0.38),
  pullInEase: "power3.out"
}, we = {
  duration: S(0.54),
  stagger: 0.055,
  ease: "power3.inOut",
  rotations: [2, -5, 6, -8],
  detailStart: 0.42,
  detailSpan: 0.34,
  shadowY: 16,
  shadowBlur: 28,
  shadowAlpha: 0.18
}, Ae = {
  tableRow: {
    from: { autoAlpha: 0, y: 7 },
    to: {
      autoAlpha: 1,
      y: 0,
      duration: S(0.24),
      ease: "power2.out",
      stagger: 0.045
    }
  },
  compactRow: {
    from: { autoAlpha: 0, y: 6 },
    to: {
      autoAlpha: 1,
      y: 0,
      duration: S(0.2),
      ease: "power2.out",
      stagger: 0.045
    }
  },
  softRow: {
    from: { autoAlpha: 0, y: 7 },
    to: {
      autoAlpha: 1,
      y: 0,
      duration: S(0.24),
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
      duration: S(0.28),
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
      duration: S(0.24),
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
      duration: S(0.44),
      ease: "back.out(1.35)",
      stagger: 0.16
    }
  },
  waterfallRow: {
    from: { autoAlpha: 0, y: 6 },
    to: {
      autoAlpha: 1,
      y: 0,
      duration: S(0.22),
      ease: "power2.out",
      stagger: 0.045
    },
    position: "-=0.18"
  }
};
class Gs {
  constructor(e) {
    this.root = e, this.chatShell = this.required("[data-chat-shell]"), this.chatBody = this.required(".wa-chat-shell__body"), this.thread = this.required("[data-chat-thread]"), this.composer = this.required("[data-chat-input]"), this.composerText = this.required("[data-composer-text]"), this.composerContents = Array.from(this.composer.children).filter(
      (t) => t instanceof HTMLElement
    ), this.tableControlTooltip = this.createDataTableFloatingTooltip(), this.chatShell.append(this.tableControlTooltip), this.chatShell.addEventListener("pointerover", this.handleDataTableControlPointerOver), this.chatShell.addEventListener("pointerout", this.handleDataTableControlPointerOut), this.chatShell.addEventListener("click", this.handleDataTableControlClick), this.signupScene = this.required("[data-signup-scene]"), this.signupLogo = this.required("[data-signup-logo-target]"), this.signupEmail = this.required("[data-signup-email]"), this.signupSubmit = this.required("[data-signup-submit]"), this.status = this.root.querySelector("[data-chat-status]"), this.prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? !1, this.removeElements("[data-thinking], [data-research-steps], [data-result-grid]"), this.removeElements(sn), this.clearMarketingPanels();
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
  signupLogo;
  signupEmail;
  signupSubmit;
  status;
  messagePool = [];
  messageBodies = /* @__PURE__ */ new WeakMap();
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
  transferSignupLogoOnNextThinking = !1;
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
    const i = t.closest(cn)?.dataset.dataTable, n = Number(t.dataset.tablePageButton);
    if (!i || !Number.isFinite(n)) return;
    e.preventDefault(), this.activeTablePageTimelines.get(i)?.kill();
    const o = this.dataTablePage(i, n, { updateExpected: !1 });
    this.activeTablePageTimelines.set(i, o), o.eventCallback("onComplete", () => {
      this.activeTablePageTimelines.get(i) === o && this.activeTablePageTimelines.delete(i), this.showTooltipForDataTableControl(t);
    });
  };
  reset() {
    this.cancelScheduledScroll(), this.scrollTween?.kill(), this.scrollTween = null, this.clearTransientElements(), this.clearMarketingPanels(), this.messageIndex = 0, this.cardIndex = 0, this.composerText.textContent = "", m.killTweensOf([this.composer, this.composerText, ...this.composerContents, this.thread]), this.clearDataTableState(), this.transferSignupLogoOnNextThinking = !1, this.signupEmail.textContent = "", this.setSignupEmailFilled(!1), this.status?.replaceChildren(document.createTextNode("Ready")), this.clearCustomResults(), this.thread.scrollTop = 0, m.set(this.thread, {
      clearProps: "maxHeight,minHeight,paddingTop,paddingBottom,borderWidth"
    }), m.set(this.signupScene, { autoAlpha: 0, y: 0, scale: 1, display: "none" }), m.set([this.signupLogo, this.signupSubmit], { clearProps: "transform,opacity,visibility" }), m.set(this.thread, {
      autoAlpha: 1,
      y: 0,
      display: ""
    }), this.resetComposerPresentation();
    for (const e of this.messagePool)
      e.style.display = "none";
    for (const e of this.cardPool)
      e.style.display = "none";
  }
  destroy() {
    this.chatShell.removeEventListener("pointerover", this.handleDataTableControlPointerOver), this.chatShell.removeEventListener("pointerout", this.handleDataTableControlPointerOut), this.chatShell.removeEventListener("click", this.handleDataTableControlClick), this.clearDataTableState();
  }
  prepareStoryStart() {
    this.resetComposerPresentation();
  }
  animateStorySwitchExit() {
    const e = this.getStorySwitchExitTargets(), t = m.timeline();
    if (this.stopScrollMotion(), !e.length)
      return t.to({}, { duration: 1e-3 });
    const a = this.getThreadBottomScrollTarget(), i = Math.min(a, this.thread.scrollTop + nt.scrollDistance);
    return m.killTweensOf(e), i > this.thread.scrollTop + 0.5 && t.to(
      this.thread,
      {
        scrollTop: i,
        duration: nt.scrollDuration,
        ease: "power2.inOut",
        overwrite: "auto"
      },
      0
    ), t.to(
      e,
      {
        y: `-=${nt.offsetY}`,
        autoAlpha: 0,
        duration: nt.contentDuration,
        ease: nt.contentEase,
        stagger: nt.stagger,
        overwrite: "auto"
      },
      nt.contentDelay
    ), t;
  }
  setStatus(e) {
    const t = m.timeline();
    return this.status && t.to(this.status, {
      autoAlpha: 0,
      y: -3,
      duration: S(0.12),
      ease: "power1.out"
    }).call(() => {
      this.status && (this.status.textContent = e);
    }).to(this.status, {
      autoAlpha: 1,
      y: 0,
      duration: S(0.18),
      ease: "power2.out"
    }), t;
  }
  prepareSignup(e = "") {
    this.signupEmail.textContent = e, this.setSignupEmailFilled(!!e), m.set(this.signupScene, {
      display: "grid",
      autoAlpha: 1,
      y: 0,
      scale: 1,
      pointerEvents: "auto"
    }), m.set([this.signupLogo, this.signupSubmit], { clearProps: "transform,opacity,visibility" }), m.set([this.thread, this.composer], {
      autoAlpha: 0,
      y: 34
    }), m.set(this.composer, this.getComposerHiddenVars()), m.set(this.composerContents, this.getComposerContentsHiddenVars()), this.setComposerVisibleState(!1);
  }
  setSignupEmailFilled(e) {
    this.signupScene.dataset.signupFilled = String(e), e || delete this.signupScene.dataset.signupSubmitted;
  }
  typeComposer(e, t = 1.1) {
    const a = { count: 0 }, i = m.timeline();
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
    return m.timeline().to(this.composerText, {
      autoAlpha: 0,
      y: -9,
      duration: S(0.18),
      ease: "power2.out",
      overwrite: "auto"
    });
  }
  setComposerFocus(e) {
    return m.timeline().to(
      {},
      {
        duration: 1e-3,
        onStart: () => this.setComposerFocusState(e)
      }
    );
  }
  showComposer() {
    const e = m.timeline(), t = this.measureComposerFullFrame(), a = this.getComposerCompactFrame(t);
    return e.set(this.composer, {
      ...this.getComposerHiddenVars(),
      ...Fa,
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
      paddingBottom: () => Math.max(on, this.getComposerThreadInsetForFrame(t))
    }, 0).call(() => this.pinThreadToBottom(), void 0, 0).to(this.composer, {
      left: t.left,
      bottom: t.bottom,
      width: t.width,
      height: t.height,
      minHeight: t.height,
      duration: fe.showDuration,
      ease: fe.showEase,
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
      duration: S(0.18),
      ease: fe.contentEase,
      overwrite: "auto"
    }, fe.contentShowDelay).call(() => this.pinThreadToBottom()), e;
  }
  hideComposer() {
    const e = this.measureComposerFullFrame(), t = this.getComposerCollapsedFrame(e);
    return m.timeline().set(this.composer, {
      ...Fa,
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
      duration: fe.contentHideDuration,
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
      duration: fe.hideDuration,
      ease: fe.hideEase,
      force3D: !0,
      autoRound: !1,
      overwrite: "auto",
      onStart: () => {
        this.setComposerFocusState(!1), this.setComposerVisibleState(!1);
      },
      onComplete: () => {
        m.set(this.composerContents, { visibility: "hidden" }), m.set(this.composer, {
          visibility: "hidden"
        }), m.set(this.thread, { paddingBottom: on }), this.pinThreadToBottom();
      }
    }, 0);
  }
  clearComposer() {
    return m.timeline().call(() => {
      this.composerText.textContent = "", m.set(this.composerText, { autoAlpha: 1, y: 0 });
    });
  }
  resetComposerPresentation() {
    this.setComposerFocusState(!1), this.setComposerVisibleState(!1), m.set(this.composer, this.getComposerHiddenVars()), m.set(this.composerContents, this.getComposerContentsHiddenVars()), m.set(this.composerText, { autoAlpha: 1, y: 0 });
  }
  clearDataTableState() {
    this.activeTablePageTimelines.forEach((e) => e.kill()), this.activeTablePageTimelines.clear(), this.expectedDataTablePages.clear(), this.hideDataTableControlTooltip();
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
      ...Fa
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
    return Math.ceil(i + fe.threadGap);
  }
  measureComposerFullFrame() {
    m.set(this.composer, { clearProps: Bs });
    const e = this.chatShell.getBoundingClientRect(), t = this.composer.getBoundingClientRect();
    return {
      left: t.left - e.left,
      bottom: e.bottom - t.bottom,
      width: t.width,
      height: t.height
    };
  }
  getComposerCompactFrame(e) {
    const t = Math.min(fe.compactWidth, e.width), a = Math.min(fe.compactHeight, e.height);
    return {
      left: e.left + (e.width - t) / 2,
      bottom: e.bottom + (e.height - a) / 2,
      width: t,
      height: a
    };
  }
  getComposerCollapsedFrame(e) {
    const t = fe.collapsedWidth, a = fe.collapsedHeight;
    return {
      left: e.left + (e.width - t) / 2,
      bottom: e.bottom + (e.height - a) / 2,
      width: t,
      height: a
    };
  }
  showSignup(e = "") {
    return m.timeline().call(() => {
      this.signupEmail.textContent = e, this.setSignupEmailFilled(!!e);
    }).set(this.signupScene, {
      display: "grid",
      autoAlpha: 1,
      y: 0,
      scale: 1,
      pointerEvents: "auto"
    }).set([this.signupLogo, this.signupSubmit], { clearProps: "transform,opacity,visibility" }).set(this.thread, {
      autoAlpha: 0,
      y: 34
    }).set(this.composer, this.getComposerHiddenVars()).set(this.composerContents, this.getComposerContentsHiddenVars()).call(() => this.setComposerVisibleState(!1));
  }
  typeSignupEmail(e, t = 0.86) {
    const a = { count: 0 };
    return m.timeline().call(() => {
      this.signupEmail.textContent = "", this.setSignupEmailFilled(!1);
    }).to(a, {
      count: e.length,
      duration: t,
      ease: "none",
      onUpdate: () => {
        const i = e.slice(0, Math.round(a.count));
        this.signupEmail.textContent = i, this.setSignupEmailFilled(!!i);
      }
    });
  }
  submitSignup() {
    return m.timeline().call(() => {
      this.signupScene.dataset.signupSubmitted = "true";
    }).to(this.signupSubmit, {
      scale: 0.9,
      duration: S(0.08),
      ease: "power2.out"
    }).to(this.signupSubmit, {
      scale: 1,
      duration: S(0.2),
      ease: "back.out(3.2)"
    });
  }
  transferSignupLogoToNextThinking() {
    return this.transferSignupLogoOnNextThinking = !0, m.timeline();
  }
  transitionSignupToChat() {
    return m.timeline().to(this.signupScene, {
      y: () => this.getSignupScrollOutDistance(),
      autoAlpha: 1,
      scale: 1,
      duration: Pt.duration,
      ease: "power3.inOut"
    }).to(this.signupScene, {
      autoAlpha: 0,
      duration: S(0.08),
      ease: "power1.out"
    }, ">-0.08").set(this.signupScene, { pointerEvents: "none" }).fromTo(
      this.thread,
      { autoAlpha: 0, y: 42 },
      {
        autoAlpha: 1,
        y: 0,
        duration: Pt.duration,
        ease: "power3.out"
      },
      Pt.threadOverlap
    ).set(this.composer, this.getComposerHiddenVars()).set(this.composerContents, this.getComposerContentsHiddenVars()).call(() => this.setComposerVisibleState(!1));
  }
  getSignupScrollOutDistance() {
    const e = this.signupScene.getBoundingClientRect().height;
    return -Math.max(Pt.minScrollOut, Math.round(e * Pt.scrollOutRatio));
  }
  stopScrollMotion() {
    this.cancelScheduledScroll(), this.scrollTween?.kill(), this.scrollTween = null;
  }
  prepareForChatHistoryPause() {
    m.killTweensOf(this.tableControlTooltip), this.hideDataTableControlTooltip();
  }
  scrollToLive(e = He.followDuration) {
    this.stopScrollMotion();
    const t = this.getThreadBottomScrollTarget();
    if (this.prefersReducedMotion || Math.abs(this.thread.scrollTop - t) < 1) {
      this.thread.scrollTop = t;
      return;
    }
    this.scrollTween = m.to(this.thread, {
      scrollTop: t,
      duration: e,
      ease: He.followEase,
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
    const t = this.claimMessage("assistant", ""), a = t.querySelector("[data-message-body]"), i = m.timeline().add(this.revealMessage(t));
    return a ? i.add(
      this.streamText(a, e, {
        duration: this.getStreamDuration(e, nn),
        targetForScroll: t
      }),
      nn.startOverlap
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
    const t = this.createDataTable(e), a = e.scrollAnchor === "previous-message" ? this.getLastMessageBody() : null;
    return this.revealComponentItems("table", t, ".wa-data-table__row", Ae.tableRow, a);
  }
  dataTablePage(e, t, a = {}) {
    const i = m.timeline(), n = { value: 0 }, o = { value: 0 }, s = a.updateExpected ?? !0, l = {
      canSwitch: !1,
      table: null,
      currentRows: [],
      targetRows: [],
      buttons: [],
      range: null
    };
    return i.to(n, {
      value: 1,
      duration: S(0.14),
      ease: "power1.out",
      onStart: () => {
        l.table = this.findDataTable(e), s && this.expectedDataTablePages.set(e, t), l.currentRows = l.table ? this.getVisibleDataTableRows(l.table) : [], l.targetRows = l.table ? this.queryElements(l.table, `.wa-data-table__row[data-page="${t}"]`) : [], l.buttons = l.table ? this.queryElements(l.table, dn) : [], l.targetButton = l.buttons.find((c) => Number(c.dataset.tablePageButton) === t), l.range = l.table?.querySelector(Us) ?? null, l.canSwitch = !!(l.table && l.targetRows.length && l.table.dataset.activePage !== String(t)), l.canSwitch && m.set(l.currentRows, { autoAlpha: 1, y: 0 });
      },
      onUpdate: () => {
        if (!l.canSwitch) return;
        const c = n.value, d = this.interpolate(0, -4, c);
        l.currentRows.forEach((u) => {
          u.style.opacity = String(1 - c), u.style.visibility = c > 0.98 ? "hidden" : "visible", u.style.transform = `translate3d(0, ${d}px, 0)`;
        });
      }
    }).call(() => {
      !l.table || !l.canSwitch || (l.table.dataset.activePage = String(t), l.currentRows.forEach((c) => {
        c.style.display = "none";
      }), l.targetRows.forEach((c) => {
        c.style.display = "grid";
      }), l.buttons.forEach((c) => {
        const d = Number(c.dataset.tablePageButton) === t;
        c.dataset.active = String(d), c.setAttribute("aria-current", d ? "page" : "false");
      }), l.range && l.targetButton?.dataset.pageRange && (l.range.textContent = l.targetButton.dataset.pageRange), m.set(l.targetRows, { autoAlpha: 0, y: 6 }));
    }).to(o, {
      value: 1,
      duration: S(0.2),
      ease: "power2.out",
      onStart: () => {
        o.value = 0;
      },
      onUpdate: () => {
        if (!l.canSwitch) return;
        const c = o.value, d = this.interpolate(6, 0, c);
        l.targetRows.forEach((u) => {
          u.style.opacity = String(c), u.style.visibility = c > 0 ? "visible" : "hidden", u.style.transform = `translate3d(0, ${d}px, 0)`;
        });
      },
      onComplete: () => {
        l.canSwitch && m.set(l.targetRows, { autoAlpha: 1, y: 0 });
      }
    }), i;
  }
  getDataTablePageRestores() {
    const e = [];
    return this.expectedDataTablePages.forEach((t, a) => {
      const i = this.findDataTable(a), n = Number(i?.dataset.activePage), o = i?.querySelector(`[data-table-page-button="${t}"]`);
      !i || !o || !Number.isFinite(n) || n === t || e.push({
        tableId: a,
        currentPage: n,
        expectedPage: t,
        target: o
      });
    }), e;
  }
  dataTableActionTooltip(e, t, a) {
    return m.timeline().call(() => {
      const i = this.findDataTable(e);
      if (!i) {
        this.hideDataTableControlTooltip();
        return;
      }
      const n = this.queryElements(i, Rt);
      n.forEach((l) => {
        const c = l.dataset.tableAction === t && a;
        l.dataset.tooltipVisible = String(c);
      });
      const o = a ? n.find((l) => l.dataset.tableAction === t) : void 0;
      if (!o) {
        this.hideDataTableControlTooltip();
        return;
      }
      const s = this.getDataTableControlTooltipText(o);
      if (!s) {
        this.hideDataTableControlTooltip();
        return;
      }
      this.showDataTableControlTooltip(o, s);
    });
  }
  enrichmentPanel(e) {
    const t = this.createEnrichmentPanel(e), a = this.revealComponentItems("enrichment", t, ".wa-waterfall-row", Ae.waterfallRow), i = t.querySelector(".wa-thinking__elapsed"), n = t.querySelector(".wa-thinking__glyph");
    return i && this.addThinkingElapsedTimer(a, i, i.dataset.elapsedTarget ?? "4m 20s"), a.call(() => this.setLocalLogoMode(n, "thinking"), void 0, 0), a.call(() => this.setLocalLogoMode(n, "done")), a;
  }
  strategyPlans(e) {
    const t = e.map((s) => this.createStrategyPlan(s)), a = document.createElement("div"), i = t.flatMap((s) => this.queryElements(s, ".wa-strategy-plan__bullets li")), n = this.getLastMessageBody();
    a.className = "wa-result-grid has-strategy-plans", a.dataset.strategyPlans = e.map((s) => s.id).join(" "), a.append(...t), m.set(i, { autoAlpha: 0, y: 5 });
    const o = this.claimComponentMessage("strategy", a);
    return this.revealPreparedItems(
      o,
      t,
      Ae.strategyCard,
      n,
      zs
    ).to(
      i,
      {
        autoAlpha: 1,
        y: 0,
        duration: S(0.24),
        ease: "power2.out",
        stagger: 0.035
      },
      "-=0.22"
    );
  }
  strategyPlanHover(e, t) {
    return m.timeline().call(() => {
      const a = this.root.querySelector(e), i = a?.closest("[data-strategy-plans]");
      (i ? this.queryElements(i, ".wa-strategy-plan") : []).forEach((o) => o.toggleAttribute("data-cursor-hover", t && o === a));
    });
  }
  dataSourcesGrid(e) {
    const t = this.createDataSourcesGrid(e);
    return this.revealComponentItems("sources", t, ".wa-data-source-card", Ae.smallCard);
  }
  marketingDataSourcesGrid(e) {
    const t = this.createMarketingDataSourcesGrid(e), a = this.queryElements(t, ".wa-data-vendor-logo"), i = this.queryElements(t, ".wa-data-source-group"), n = t.querySelector(".wa-data-source-grid__header"), o = this.compactElements(n, ...i, ...a);
    return m.timeline().call(() => {
      this.clearMarketingPanels(), this.stopScrollMotion(), this.chatBody.append(t);
    }).set(t, {
      autoAlpha: 0,
      y: 72,
      scale: 0.985,
      transformOrigin: "center bottom"
    }).set(o, {
      autoAlpha: 0,
      y: 12
    }).to(
      this.thread,
      {
        scrollTop: () => this.getThreadBottomScrollTarget(),
        duration: Ie.revealDuration,
        ease: Ie.revealEase,
        overwrite: "auto"
      },
      0
    ).to(
      this.thread,
      {
        y: Ie.threadY,
        autoAlpha: Ie.threadOpacity,
        duration: Ie.revealDuration,
        ease: Ie.revealEase,
        overwrite: "auto"
      },
      0.04
    ).to(
      t,
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: Ie.revealDuration,
        ease: Ie.revealEase
      },
      0.16
    ).to(
      n,
      {
        autoAlpha: 1,
        y: 0,
        duration: S(0.28),
        ease: "power2.out"
      },
      0.28
    ).to(
      i,
      {
        autoAlpha: 1,
        y: 0,
        duration: S(0.3),
        ease: "power2.out",
        stagger: 0.04
      },
      0.36
    ).to(
      a,
      {
        autoAlpha: 1,
        y: 0,
        duration: Ie.cardDuration,
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
      Ae.softRow
    );
  }
  proximityLeadList(e) {
    const t = this.createProximityLeadList(e);
    return this.revealComponentItems("table", t, ".wa-data-table__row", Ae.tableRow);
  }
  mailboxConnection(e) {
    const t = this.createMailboxConnection(e), a = this.compactElements(
      t.querySelector(".wa-mailbox-connection__card")
    );
    return this.revealComponentItems("mailbox", t, a, {
      from: { autoAlpha: 0, y: 10, scale: 0.99 },
      to: {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: S(0.28),
        ease: "power2.out",
        stagger: 0.045
      },
      position: "-=0.2"
    });
  }
  connectMailbox(e) {
    const t = this.root.querySelector(
      `[data-mailbox-connection="${this.escapeSelectorValue(e)}"]`
    ), a = t?.querySelector("[data-mailbox-connect]"), i = t?.querySelector("[data-mailbox-learning]"), n = t ? Array.from(t.querySelectorAll("[data-mailbox-thumbprint-path]")) : [], o = t?.querySelector("[data-mailbox-learning-progress]"), s = t?.querySelector(".wa-mailbox-learning__title"), l = t?.querySelector("[data-mailbox-learning-title-text]") ?? s, c = t?.querySelector("[data-mailbox-learning-ready-chevron]"), d = t?.querySelector(".wa-mailbox-learning__detail"), u = t?.querySelector(".wa-mailbox-learning__thumbprint"), g = t ? this.queryElements(t, ".wa-mailbox-connection__signal") : [], p = m.timeline();
    if (!t || !a || !i || !l || !d || !u || !n.length || !o) return p;
    const f = { value: 0 };
    return p.call(() => {
      t.dataset.mailboxState = "loading", a.disabled = !0, a.setAttribute("aria-busy", "true"), a.setAttribute("aria-label", a.dataset.mailboxLoadingLabel ?? "Connecting"), i.dataset.mailboxLearningState = "idle", l.textContent = tn, d.textContent = Oa[0].detail, m.set(i, { display: "none", autoAlpha: 0, y: 8, scale: 0.992 }), this.updateMailboxThumbprintFill(n, 0), m.set(o, { scaleX: 0, transformOrigin: "left center" }), m.set(u, { scale: 1, transformOrigin: "center center" }), m.set(this.compactElements(c), { autoAlpha: 0, y: -1, scale: 0.9 });
    }).to(a, {
      scale: 0.985,
      duration: te.pressDuration,
      ease: "power2.out"
    }).to(a, {
      scale: 1,
      duration: te.releaseDuration,
      ease: "back.out(2.6)"
    }).to({}, { duration: te.loadingHoldDuration }).call(() => {
      t.dataset.mailboxState = "connected", a.disabled = !0, a.removeAttribute("aria-busy"), a.setAttribute("aria-label", a.dataset.mailboxConnectedLabel ?? "Connected"), i.dataset.mailboxLearningState = "loading";
    }).to({}, { duration: te.successHoldDuration }).set(i, { display: "grid", height: "auto" }, "-=0.04").fromTo(
      i,
      { autoAlpha: 0, y: 8, scale: 0.992 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: te.learningRevealDuration,
        ease: "power2.out"
      },
      "-=0.02"
    ).fromTo(
      this.compactElements(l, d),
      { autoAlpha: 0, y: 5 },
      {
        autoAlpha: 1,
        y: 0,
        duration: S(0.22),
        ease: "power2.out",
        stagger: 0.04
      },
      "<+=0.07"
    ), Oa.forEach((h, w) => {
      w > 0 && p.to(d, {
        autoAlpha: 0,
        y: -3,
        duration: te.detailSwapDuration,
        ease: "power1.in"
      }).call(() => {
        d.textContent = h.detail;
      }).fromTo(
        d,
        { autoAlpha: 0, y: 4 },
        {
          autoAlpha: 1,
          y: 0,
          duration: te.detailSwapDuration,
          ease: "power2.out"
        }
      ), p.to(
        f,
        {
          value: h.progress,
          duration: h.duration,
          ease: "power2.inOut",
          onUpdate: () => this.updateMailboxThumbprintFill(n, f.value)
        },
        w === 0 ? "-=0.04" : void 0
      ).to(
        o,
        {
          scaleX: h.progress / 100,
          duration: h.duration,
          ease: "power2.inOut"
        },
        "<"
      ).to({}, { duration: h.hold });
    }), p.to(d, {
      autoAlpha: 0,
      y: -3,
      duration: te.detailSwapDuration,
      ease: "power1.in"
    }).to(l, {
      autoAlpha: 0,
      y: -3,
      duration: te.detailSwapDuration,
      ease: "power1.in"
    }, "<").call(() => {
      i.dataset.mailboxLearningState = "ready", l.textContent = Ps, d.textContent = i.dataset.mailboxLearningReadyDetail ?? an;
    }).fromTo(
      l,
      { autoAlpha: 0, y: 4 },
      {
        autoAlpha: 1,
        y: 0,
        duration: te.detailSwapDuration,
        ease: "power2.out"
      }
    ).fromTo(
      d,
      { autoAlpha: 0, y: 4 },
      {
        autoAlpha: 1,
        y: 0,
        duration: te.detailSwapDuration,
        ease: "power2.out"
      },
      "<+=0.03"
    ).fromTo(
      this.compactElements(c),
      { autoAlpha: 0, y: -1, scale: 0.9 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: te.detailSwapDuration,
        ease: "power2.out"
      },
      "<"
    ).to(
      u,
      {
        scale: 1.16,
        duration: te.readyPopUpDuration,
        ease: "power2.out"
      },
      "<"
    ).to(u, {
      scale: 1,
      duration: te.readyPopSettleDuration,
      ease: "back.out(3)"
    }), g.length && p.to(
      g,
      {
        autoAlpha: 1,
        y: 0,
        duration: S(0.18),
        ease: "power2.out",
        stagger: 0.035
      },
      "<+=0.38"
    ), p.to({}, { duration: te.settleHold }), p;
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
        duration: S(0.32),
        ease: "power2.out",
        stagger: 0.05
      },
      position: "-=0.2"
    });
  }
  swipePersonalizationCard(e, t, a) {
    const i = this.root.querySelector(
      `[data-personalization-swipe-game="${this.escapeSelectorValue(e)}"]`
    ), n = i?.querySelector(`[data-swipe-card="${this.escapeSelectorValue(t)}"]`), o = this.getSwipeCards(i), s = n ? o.indexOf(n) : -1, l = o[s + 1], c = a === "use" ? 1 : -1, d = i?.querySelector(`[data-swipe-action="${a}"]`), u = i?.querySelector("[data-swipe-complete]"), g = i?.querySelector(".wa-swipe-game__actions"), p = m.timeline();
    return !i || !n || s < 0 || (p.call(() => {
      i.dataset.swipeDecision = a, d && (d.dataset.active = "true");
    }).to(
      d ?? {},
      {
        scale: 0.92,
        duration: S(0.08),
        ease: "power2.out"
      },
      0
    ).to(
      d ?? {},
      {
        scale: 1,
        duration: S(0.18),
        ease: "back.out(2)"
      },
      S(0.1)
    ).to(
      n,
      {
        x: c * 520,
        y: s % 2 === 0 ? -28 : 24,
        rotation: c * (16 + s * 2),
        autoAlpha: 0,
        duration: S(0.5),
        ease: "power3.in",
        force3D: !0
      },
      0.08
    ).call(
      () => {
        delete i.dataset.swipeDecision, d && delete d.dataset.active, n.dataset.swipeState = "done", m.set(n, { display: "none" }), this.layoutSwipeGameCards(i, s + 1);
      },
      void 0,
      "-=0.12"
    ), l ? p.fromTo(
      l,
      {
        x: -c * 18,
        y: 10,
        scale: 0.965,
        rotation: -c * 1.5,
        autoAlpha: 0.74
      },
      {
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
        autoAlpha: 1,
        duration: S(0.28),
        ease: "power2.out",
        force3D: !0
      },
      "-=0.2"
    ) : u && g && p.to(
      g,
      {
        autoAlpha: 0,
        y: 8,
        duration: S(0.18),
        ease: "power2.out"
      },
      "-=0.16"
    ).to(
      u,
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: S(0.28),
        ease: "back.out(1.55)"
      },
      "-=0.06"
    )), p;
  }
  sequenceEngagement(e) {
    const t = this.createSequenceEngagement(e), a = Number(t.dataset.activeSequenceIndex ?? "0");
    return this.revealComponentItems(
      "sequence",
      t,
      ".wa-sequence-person-card, .wa-sequence-card, .wa-sequence-step, .wa-sequence-wait, .wa-sequence-copy-panel, .wa-engage-channel, .wa-sequence-kickoff",
      Ae.stackCard
    ).call(() => this.setSequencePersonRailPosition(t, a), void 0, 0.01).call(() => this.clearSequencePersonCardMotionStyles(t));
  }
  sequenceBuildThinking(e) {
    const t = this.createSequenceThinkingStep(e.templateLabel, e.template, 0), a = e.tracks.map(
      (u, g) => this.createSequenceThinkingStep(u.label, u.detail, g + 1, e.total)
    ), i = [t, ...a], n = this.getThinkingElapsed(3), o = this.claimThinkingMessage(i, n), s = { value: 1 }, l = a.map((u) => ({
      label: u.querySelector(".wa-sequence-thinking-progress__count"),
      bar: u.querySelector(".wa-sequence-thinking-progress__bar span")
    })), c = l.flatMap((u) => u.bar ? [u.bar] : []);
    o.message.querySelector(".wa-thinking-block").dataset.sequenceThinking = e.id;
    const d = m.timeline().call(() => {
      this.prepareThinkingMessage(o, i, 10), m.set(c, {
        scaleX: 1 / Math.max(1, e.total),
        transformOrigin: "left center"
      });
    }).add(this.revealMessage(o.message)).add(this.revealThinkingHeader(o, 0.24)).call(() => {
      t.dataset.stepState = "current", m.set(t, { display: "grid" });
    }).add(this.moveThinkingLogoToStep(o, t), "<");
    return this.addThinkingStepReveal(d, t, { position: "<" }), d.to({}, { duration: za.templateHold }).add(this.foldThinkingStep(t)).call(() => {
      a.forEach((u) => {
        u.dataset.stepState = "current", m.set(u, { display: "grid" });
      });
    }, void 0, "+=0.1").add(this.moveThinkingLogoToStep(o, a[0]), "<").to(a, {
      autoAlpha: 1,
      y: 0,
      duration: S(0.3),
      ease: "power2.out",
      stagger: 0.04
    }, "<"), this.addThinkingStepStreams(d, a), d.to(s, {
      value: e.total,
      duration: za.progressDuration,
      ease: "power1.inOut",
      onUpdate: () => {
        const u = Math.max(1, Math.round(s.value)), g = u / Math.max(1, e.total);
        l.forEach(({ label: p, bar: f }) => {
          p && (p.textContent = `${u}/${e.total}`), f && m.set(f, { scaleX: g });
        }), this.requestMessageScroll(o.message);
      }
    }, "+=0.14").to({}, { duration: za.finalHold }), a.forEach((u, g) => {
      d.add(this.foldThinkingStep(u), g === 0 ? void 0 : "<");
    }), d.add(this.collapseThinkingToHeader(o, i)), this.addThinkingElapsedTimer(d, o.elapsed, n), d;
  }
  sequencePerson(e, t) {
    const a = this.findSequenceEngagement(e), i = m.timeline();
    if (!a) return i;
    const n = this.queryElements(a, "[data-sequence-card]"), o = this.getSequenceDisplayCard(a), s = n.find((d) => Number(d.dataset.sequenceIndex) === t), l = Number(a.dataset.activeSequenceIndex ?? "0");
    if (!s || !o || l === t)
      return this.setActiveSequencePerson(a, t, !0), i;
    const c = this.getSequenceTransitionTargets(o);
    return i.to(c, {
      autoAlpha: 0,
      y: -3,
      duration: S(0.14),
      ease: "power2.in",
      stagger: 0.012
    }).call(() => {
      this.setActiveSequencePerson(a, t, !0), m.set(c, { y: 4 });
    }).to(c, {
      autoAlpha: 1,
      y: 0,
      duration: S(0.24),
      ease: "power2.out",
      stagger: 0.014
    }), i;
  }
  sequenceKickoff(e) {
    return m.timeline().call(() => {
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
  prepareCursorFile(e, t, a = "CSV", i = []) {
    const n = this.createCursorFile(e, a, i);
    let o = null, s = { x: 0, y: 0 };
    const l = () => {
      o?.(), o = null, m.killTweensOf(s);
    };
    return this.registerTransientElement(n, () => {
      l();
    }), {
      el: n,
      startFollow: () => m.timeline().call(() => {
        o?.(), t.beginDragPayload();
        const c = this.getCursorFileEntryOffset(n, t);
        s.x = c.x, s.y = c.y, o = this.followCursorWithFile(n, t, s);
      }).set(n, {
        autoAlpha: 1,
        scale: 1
      }, 0).to(s, {
        x: 0,
        y: 0,
        duration: Ga.pullInDuration,
        ease: Ga.pullInEase
      }, 0),
      stopFollow: () => m.timeline().call(l).to(n, {
        autoAlpha: 0,
        scale: 0.92,
        duration: S(0.18),
        ease: "power2.in"
      }),
      landAsUploadedFile: (c, d = "CSV uploaded") => m.timeline().call(l).add(t.releaseDragPayload(), 0).add(this.uploadedFileMessageFromCursorFile(n, c, d), 0),
      landAsUploadedFiles: (c) => m.timeline().call(l).add(t.releaseDragPayload(), 0).add(this.uploadedFilesMessageFromCursorFile(n, c), 0)
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
      duration: S(0.26),
      ease: "back.out(1.6)"
    });
  }
  uploadedFileMessageFromCursorFile(e, t, a = "CSV uploaded") {
    const i = this.createUploadedFile(t, a), n = this.claimUserComponentMessage("file", i);
    return this.revealDroppedFilesMessage(e, n, [i]);
  }
  uploadedFilesMessage(e) {
    const t = this.createUploadedFiles(e);
    return this.revealUserComponentItems("file", t, ".wa-uploaded-file", {
      ...Ae.compactRow,
      from: { ...Ae.compactRow.from, scale: 0.99 },
      to: { ...Ae.compactRow.to, scale: 1 },
      position: "-=0.24"
    });
  }
  uploadedFilesMessageFromCursorFile(e, t) {
    const a = this.createUploadedFiles(t), i = this.claimUserComponentMessage("file", a), n = this.queryElements(a, ".wa-uploaded-file"), o = this.queryElements(a, ".wa-uploaded-files__summary");
    return this.revealDroppedFilesMessage(e, i, n, o, {
      landingLabel: `You uploaded ${t.length} files`
    });
  }
  pulse(e) {
    const t = typeof e == "string" ? this.root.querySelector(e) : e, a = m.timeline();
    return t && a.to(t, {
      scale: 1.025,
      duration: S(0.14),
      ease: "power2.out"
    }).to(t, {
      scale: 1,
      duration: S(0.28),
      ease: "elastic.out(1, 0.55)"
    }), a;
  }
  revealDroppedFilesMessage(e, t, a, i = [], n = {}) {
    const o = [...a, ...i];
    let s = [], l = null;
    const c = { value: 0 };
    let d = 0;
    return !a.length || !e.isConnected ? this.revealMessageWithChildren(t, o, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: S(0.24),
      ease: "power2.out",
      stagger: we.stagger
    }) : (m.set(o, { autoAlpha: 0, y: 0, scale: 1 }), m.timeline().call(() => {
      const u = this.thread.scrollTop;
      this.scrollTween?.kill(), this.scrollTween = null, t.style.display = "grid", m.set(t, {
        opacity: 1,
        visibility: "hidden",
        y: 0,
        scale: 1,
        transformOrigin: "right center"
      }), d = this.getMessageScrollTarget(t), this.thread.scrollTop = d, s = this.createFileLandingClones(e, a), this.thread.scrollTop = u, l = this.createFileLandingLabel(n.landingLabel, s), m.set(e, { autoAlpha: 0 });
    }).to(
      this.thread,
      {
        scrollTop: () => d,
        duration: we.duration,
        ease: we.ease,
        overwrite: "auto"
      },
      0
    ).to(
      c,
      {
        value: 1,
        duration: we.duration,
        ease: we.ease,
        onUpdate: () => {
          this.renderFileLandingClones(s, c.value), this.renderFileLandingLabel(l, c.value);
        }
      },
      0
    ).to(
      i,
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: S(0.16),
        ease: "power1.out",
        stagger: we.stagger
      },
      `-=${S(0.16)}`
    ).call(() => {
      this.renderFileLandingClones(s, 1), this.renderFileLandingLabel(l, 1), this.thread.scrollTop = d, m.set(o, { autoAlpha: 1, y: 0, scale: 1 }), m.set(t, { opacity: 1, visibility: "visible" }), s.forEach((u) => u.el.remove()), l?.el.remove(), e.remove();
    }));
  }
  createFileLandingClones(e, t) {
    const a = this.getCursorFileCards(e), i = this.chatBody;
    return t.map((n, o) => {
      const s = a[Math.min(o, a.length - 1)], l = s.getBoundingClientRect(), c = n.getBoundingClientRect(), d = this.getElementLocalRect(l, i), u = this.getElementLocalRect(c, i), g = n.cloneNode(!0), p = this.getCursorFileCardRotation(o, a.length), f = c.width ? l.width / c.width : 1, h = c.height ? l.height / c.height : 1, w = window.getComputedStyle(s), b = window.getComputedStyle(n), y = this.parseCssColor(w.backgroundColor) ?? { r: 255, g: 255, b: 249, a: 0.96 }, x = this.parseCssColor(b.backgroundColor) ?? y, v = this.parseCssColor(w.borderTopColor) ?? { r: 23, g: 23, b: 20, a: 0.12 }, _ = this.parseCssColor(b.borderTopColor) ?? v, T = this.queryElements(g, ".wa-uploaded-file__body span");
      return g.classList.add("wa-file-landing-clone"), g.dataset.fileLandingClone = "", i.append(g), m.set(g, {
        position: "absolute",
        zIndex: 21,
        top: 0,
        left: 0,
        width: c.width,
        height: c.height,
        x: d.left,
        y: d.top,
        scaleX: f,
        scaleY: h,
        rotation: p,
        transformOrigin: "left top",
        pointerEvents: "none",
        margin: 0,
        autoAlpha: 1,
        visibility: "visible",
        backgroundColor: this.formatRgba(y),
        borderColor: this.formatRgba(v),
        borderStyle: w.borderTopStyle === "none" ? "solid" : w.borderTopStyle,
        borderWidth: w.borderTopWidth || "1px",
        boxShadow: this.getFileLandingShadow(0)
      }), m.set(T, { autoAlpha: 0, y: -3 }), {
        el: g,
        startX: d.left,
        startY: d.top,
        startWidth: l.width,
        startHeight: l.height,
        endX: u.left,
        endY: u.top,
        endWidth: c.width,
        endHeight: c.height,
        startScaleX: f,
        startScaleY: h,
        startRotation: p,
        startBackground: y,
        endBackground: x,
        startBorderColor: v,
        endBorderColor: _,
        detailEls: T,
        setX: m.quickSetter(g, "x", "px"),
        setY: m.quickSetter(g, "y", "px"),
        setScaleX: m.quickSetter(g, "scaleX"),
        setScaleY: m.quickSetter(g, "scaleY"),
        setRotation: m.quickSetter(g, "rotation", "deg"),
        setBackgroundColor: m.quickSetter(g, "backgroundColor"),
        setBorderColor: m.quickSetter(g, "borderColor")
      };
    });
  }
  renderFileLandingClones(e, t) {
    for (const a of e) {
      const i = Nt(
        (t - we.detailStart) / we.detailSpan
      );
      if (a.setX(this.interpolate(a.startX, a.endX, t)), a.setY(this.interpolate(a.startY, a.endY, t)), a.setScaleX(this.interpolate(a.startScaleX, 1, t)), a.setScaleY(this.interpolate(a.startScaleY, 1, t)), a.setRotation(this.interpolate(a.startRotation, 0, t)), a.setBackgroundColor(this.interpolateRgba(a.startBackground, a.endBackground, t)), a.setBorderColor(this.interpolateRgba(a.startBorderColor, a.endBorderColor, t)), a.el.style.boxShadow = this.getFileLandingShadow(t), a.detailEls.length) {
        const n = this.interpolate(-3, 0, i);
        a.detailEls.forEach((o) => {
          o.style.opacity = String(i), o.style.visibility = i > 0 ? "visible" : "hidden", o.style.transform = `translate3d(0, ${n}px, 0)`;
        });
      }
    }
  }
  createFileLandingLabel(e, t) {
    if (!e || !t.length) return null;
    const a = document.createElement("div");
    a.className = "wa-file-landing-label", a.textContent = e, this.chatBody.append(a), m.set(a, {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 22,
      pointerEvents: "none",
      opacity: 0,
      visibility: "visible",
      x: 0,
      y: 0
    });
    const i = a.offsetWidth, n = a.offsetHeight, o = 9, s = this.getFileLandingCloneBounds(t, "start"), l = this.getFileLandingCloneBounds(t, "end"), c = s.left + s.width / 2 - i / 2, d = l.left + l.width / 2 - i / 2;
    return {
      el: a,
      startX: c,
      startY: s.top - n - o,
      endX: d,
      endY: l.top - n - o,
      setX: m.quickSetter(a, "x", "px"),
      setY: m.quickSetter(a, "y", "px"),
      setOpacity: m.quickSetter(a, "opacity")
    };
  }
  renderFileLandingLabel(e, t) {
    if (!e) return;
    const a = Nt(t / 0.16), i = Nt((1 - t) / 0.16);
    e.setX(this.interpolate(e.startX, e.endX, t)), e.setY(this.interpolate(e.startY, e.endY, t)), e.setOpacity(Math.min(a, i));
  }
  getFileLandingCloneBounds(e, t) {
    const a = e.map((p) => t === "start" ? p.startX : p.endX), i = e.map((p) => t === "start" ? p.startY : p.endY), n = e.map((p) => t === "start" ? p.startWidth : p.endWidth), o = e.map((p) => t === "start" ? p.startHeight : p.endHeight), s = e.map((p, f) => a[f] + n[f]), l = e.map((p, f) => i[f] + o[f]), c = Math.min(...a), d = Math.min(...i), u = Math.max(...s), g = Math.max(...l);
    return {
      left: c,
      top: d,
      width: u - c,
      height: g - d
    };
  }
  getCursorFileCards(e) {
    const t = Array.from(e.querySelectorAll(".wa-cursor-file__card"));
    return t.length ? t : [e];
  }
  getCursorFileCardRotation(e, t) {
    return t > 1 ? we.rotations[e] ?? 0 : 0;
  }
  getElementLocalRect(e, t) {
    const a = t.getBoundingClientRect();
    return {
      left: e.left - a.left,
      top: e.top - a.top
    };
  }
  interpolate(e, t, a) {
    return e + (t - e) * a;
  }
  parseCssColor(e) {
    const t = this.parseOklchColor(e);
    if (t) return t;
    const a = e.match(/[\d.]+/g);
    return !a || a.length < 3 ? null : {
      r: Number(a[0]),
      g: Number(a[1]),
      b: Number(a[2]),
      a: a[3] === void 0 ? 1 : Number(a[3])
    };
  }
  parseOklchColor(e) {
    const t = e.match(/oklch\((.*)\)/i);
    if (!t) return null;
    const [a, i] = t[1].split("/"), n = a.trim().split(/\s+/);
    if (n.length < 3) return null;
    const o = this.parseCssColorComponent(n[0], 1), s = Number(n[1]), l = Number.parseFloat(n[2]), c = i ? this.parseCssColorComponent(i.trim(), 1) : 1;
    if (![o, s, l, c].every(Number.isFinite)) return null;
    const d = l * Math.PI / 180, u = s * Math.cos(d), g = s * Math.sin(d), p = o + 0.3963377774 * u + 0.2158037573 * g, f = o - 0.1055613458 * u - 0.0638541728 * g, h = o - 0.0894841775 * u - 1.291485548 * g, w = p ** 3, b = f ** 3, y = h ** 3, x = 4.0767416621 * w - 3.3077115913 * b + 0.2309699292 * y, v = -1.2684380046 * w + 2.6097574011 * b - 0.3413193965 * y, _ = -0.0041960863 * w - 0.7034186147 * b + 1.707614701 * y;
    return {
      r: this.oklchLinearToSrgb(x) * 255,
      g: this.oklchLinearToSrgb(v) * 255,
      b: this.oklchLinearToSrgb(_) * 255,
      a: Nt(c)
    };
  }
  parseCssColorComponent(e, t) {
    return e.endsWith("%") ? Number.parseFloat(e) / 100 * t : Number(e);
  }
  oklchLinearToSrgb(e) {
    const t = Math.min(1, Math.max(0, e)), a = t <= 31308e-7 ? 12.92 * t : 1.055 * t ** (1 / 2.4) - 0.055;
    return Math.min(1, Math.max(0, a));
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
    return `0 ${this.interpolate(we.shadowY, 0, e).toFixed(2)}px ${this.interpolate(
      we.shadowBlur,
      0,
      e
    ).toFixed(2)}px rgba(23, 23, 20, ${(we.shadowAlpha * t).toFixed(3)})`;
  }
  revealMessageWithChildren(e, t, a, i = "-=0.22", n = null, o = 0) {
    return m.timeline().add(this.revealMessage(e, n, o)).call(() => this.setMotionHints(t), void 0, i).to(t, a, i).call(() => this.clearMotionHints(t));
  }
  revealMessageWithChildFrom(e, t, a, i, n = "-=0.22") {
    return m.timeline().add(this.revealMessage(e)).call(() => this.setMotionHints(t), void 0, n).fromTo(
      t,
      a,
      i,
      n
    ).call(() => this.clearMotionHints(t));
  }
  revealComponentItems(e, t, a, i, n = null) {
    const o = this.claimComponentMessage(e, t);
    return this.revealPreparedItems(o, this.resolveRevealTargets(t, a), i, n);
  }
  revealUserComponentItems(e, t, a, i) {
    const n = this.claimUserComponentMessage(e, t);
    return this.revealPreparedItems(n, this.resolveRevealTargets(t, a), i);
  }
  resolveRevealTargets(e, t) {
    return typeof t == "string" ? this.queryElements(e, t) : t;
  }
  revealPreparedItems(e, t, a, i = null, n = 0) {
    return t.length && m.set(t, { ...a.from }), this.revealMessageWithChildren(
      e,
      t,
      { ...a.to },
      a.position,
      i,
      n
    ).call(
      () => this.animateMessageScrollIntoView(e, He.followDuration, i, n),
      void 0,
      "+=0.02"
    );
  }
  revealMessage(e, t = null, a = 0) {
    let i = 0;
    return m.timeline().call(() => {
      this.scrollTween?.kill(), this.scrollTween = null, e.style.display = "grid", this.setMotionHints(e), this.composerVisible && this.pinThreadToBottom(), i = this.getMessageScrollTarget(e, t, a);
    }).to(
      this.thread,
      {
        scrollTop: () => i,
        duration: He.revealDuration,
        ease: He.revealEase,
        overwrite: "auto"
      },
      0
    ).to(e, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      ...Ns
    }, 0.04).call(() => this.clearMotionHints(e));
  }
  setMotionHints(e, t = "transform, opacity") {
    m.set(e, { willChange: t });
  }
  clearMotionHints(e) {
    m.set(e, { willChange: "auto" });
  }
  claimMessage(e, t) {
    const { message: a, body: i } = this.claimMessageShell(
      e,
      e,
      e === "user" ? "right center" : "left center"
    );
    return i.replaceChildren(document.createTextNode(t)), a;
  }
  claimComponentMessage(e, t) {
    const { message: a, body: i } = this.claimMessageShell("assistant", "assistant-component", "left center");
    return a.classList.add("wa-message--component", `wa-message--${e}`), i.replaceChildren(t), a;
  }
  claimUserComponentMessage(e, t) {
    const { message: a, body: i } = this.claimMessageShell("user", "user", "right center");
    return a.classList.add("wa-message--component", `wa-message--${e}`), i.replaceChildren(t), a;
  }
  claimMessageShell(e, t, a) {
    const i = this.messageIndex, n = this.messagePool[i] ?? this.createMessage(i), o = this.getMessageBody(n);
    return this.messageIndex += 1, n.dataset.messageRole = e, n.dataset.messageId = `${t}-${i}`, this.resetMessageClasses(n), n.classList.toggle("wa-message--first-active", i === 0), n.style.display = "none", delete o.dataset.streaming, o.replaceChildren(), this.thread.append(n), m.set(n, {
      autoAlpha: 0,
      y: 16,
      scale: 0.985,
      transformOrigin: a
    }), { message: n, body: o, index: i };
  }
  resetMessageClasses(e) {
    e.classList.remove(...Ts), e.classList.remove("wa-message--first-active");
  }
  createCsvDropArea(e = {}) {
    const t = document.createElement("article");
    t.className = "wa-csv-drop", t.dataset.csvDropArea = "", t.dataset.dropState = "idle";
    const a = document.createElement("span");
    a.className = "wa-csv-drop__copy";
    const i = document.createElement("strong");
    i.textContent = e.title ?? "Drop CSV to clean audience data";
    const n = document.createElement("span");
    return n.textContent = e.detail ?? "Accepts webinar exports, event lists, and messy attendee spreadsheets.", a.append(i, n), t.append(a), t;
  }
  revealCsvDropArea(e) {
    return m.timeline().to(
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
    return m.timeline().to(
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
          }, i = () => m.ticker.remove(a);
          this.dropRevealWatchers.set(e, i), m.ticker.add(a);
        }
      }
    );
  }
  activateCsvDropArea(e) {
    return m.timeline().to(
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
    return m.timeline().to(
      {},
      {
        duration: 1e-3,
        onStart: () => {
          e.dataset.dropState = "complete", e.dataset.dropComplete = "true", this.clearDropRevealWatcher(e), m.killTweensOf(e), m.set(e, { autoAlpha: 0 }), e.remove();
        }
      }
    );
  }
  showCsvDropArea(e, t) {
    e.dataset.dropComplete !== "true" && ((t || !e.dataset.dropState) && (e.dataset.dropState = "idle"), e.isConnected || this.chatShell.append(e), m.set(e, {
      autoAlpha: 1,
      transformOrigin: "center center"
    }));
  }
  clearDropRevealWatcher(e) {
    const t = this.dropRevealWatchers.get(e);
    t && (t(), this.dropRevealWatchers.delete(e));
  }
  isCursorInsideChatShell(e) {
    const t = e.readPosition(), a = this.root.getBoundingClientRect(), i = this.chatShell.getBoundingClientRect(), n = {
      x: a.left + t.x,
      y: a.top + t.y
    };
    return n.x >= i.left && n.x <= i.right && n.y >= i.top && n.y <= i.bottom;
  }
  createCursorFile(e, t = "CSV", a = []) {
    const i = document.createElement("div");
    i.className = "wa-cursor-file", i.setAttribute("aria-hidden", "true");
    const n = this.getCursorFileStackCount(e, a);
    return n > 1 ? (i.classList.add("wa-cursor-file--stack"), i.append(...this.createCursorFileStack(e, t, n, a))) : i.append(this.createCursorFileCard(e, t)), this.root.append(i), m.set(i, { autoAlpha: 0, scale: 0.88, x: -120, y: -120 }), i;
  }
  followCursorWithFile(e, t, a) {
    const i = e.offsetWidth || 154, n = e.offsetHeight || 42, o = m.quickSetter(e, "x", "px"), s = m.quickSetter(e, "y", "px"), l = { x: -120, y: -120 }, c = () => {
      const d = t.readPosition(), u = d.x - i * 0.5 + a.x, g = d.y - n * 0.5 + a.y;
      t.el.dataset.cursorMode !== "drag" && t.setMode("drag"), u !== l.x && (l.x = u, o(u)), g !== l.y && (l.y = g, s(g));
    };
    return c(), m.ticker.add(c), () => m.ticker.remove(c);
  }
  getCursorFileEntryOffset(e, t) {
    const a = e.offsetWidth || 154, i = t.readPosition(), n = this.root.getBoundingClientRect(), o = window.innerWidth - n.left, s = i.x - a * 0.5, l = o + Ga.offscreenMargin;
    return {
      x: Math.max(0, l - s),
      y: 0
    };
  }
  getCursorFileStackCount(e, t = []) {
    if (t.length > 1) return Math.max(1, Math.min(4, t.length));
    const a = e.match(/^(\d+)\s+/);
    return a ? Math.max(1, Math.min(4, Number(a[1]))) : 1;
  }
  createCursorFileStack(e, t, a, i = []) {
    return this.getCursorFileStackItems(e, t, a, i).map((o) => {
      const s = this.createCursorFileCard(o.name, o.type);
      return s.classList.add("wa-cursor-file__card--stacked"), s;
    });
  }
  getCursorFileStackItems(e, t, a, i = []) {
    return i.length ? i.slice(0, a).map((n) => ({
      name: n.name,
      type: n.type
    })) : e.toLowerCase().includes("context") ? [
      { name: "battlecards.pdf", type: "PDF" },
      { name: "positioning-memo.docx", type: "DOC" },
      { name: "icp-context.md", type: "MD" },
      { name: "outbound-playbook.pdf", type: "PDF" }
    ].slice(0, a) : Array.from({ length: a }, (n, o) => ({
      name: o === 0 ? e : `File ${o + 1}`,
      type: t
    }));
  }
  createCursorFileCard(e, t) {
    const a = this.getFileDisplayType(e, t), i = document.createElement("span");
    i.className = "wa-cursor-file__card", i.dataset.fileTone = this.getFileTone(a);
    const n = document.createElement("span");
    n.className = "wa-cursor-file__icon", n.textContent = a;
    const o = document.createElement("span");
    return o.className = "wa-cursor-file__name", o.textContent = e, i.append(n, o), i;
  }
  createUploadedFile(e, t, a) {
    const i = this.getFileDisplayType(e, a), n = document.createElement("div");
    n.className = "wa-uploaded-file", n.dataset.fileTone = this.getFileTone(i);
    const o = document.createElement("span");
    o.className = "wa-uploaded-file__icon", o.textContent = i;
    const s = document.createElement("span");
    s.className = "wa-uploaded-file__body";
    const l = document.createElement("strong");
    l.textContent = e;
    const c = document.createElement("span");
    return c.textContent = t, s.append(l, c), n.append(o, s), n;
  }
  createUploadedFiles(e) {
    const t = document.createElement("div");
    t.className = "wa-uploaded-files", t.dataset.uploadedFileCount = String(e.length);
    const a = document.createElement("div");
    return a.className = "wa-uploaded-files__list", e.forEach((i) => {
      const n = this.createUploadedFile(i.name, i.detail, i.type);
      a.append(n);
    }), t.append(a), t;
  }
  getFileDisplayType(e, t) {
    const a = t?.trim().replace(/^\./, "");
    if (a) return a.toUpperCase();
    const i = e.trim().split(".").pop();
    return i && i !== e ? i.toUpperCase() : "FILE";
  }
  getFileTone(e) {
    const t = e.toLowerCase();
    return t === "csv" || t === "xls" || t === "xlsx" ? "spreadsheet" : t === "pdf" ? "pdf" : t === "doc" || t === "docx" ? "doc" : t === "txt" || t === "md" ? "text" : t === "ppt" || t === "pptx" ? "ppt" : "default";
  }
  streamThinkingHeader(e) {
    return this.streamThinkingChild(e, ".wa-thinking__title", Os);
  }
  streamThinkingStepLabel(e) {
    return this.streamThinkingChild(e, ".wa-research-step__label", qs);
  }
  streamThinkingStepDetail(e) {
    return this.streamThinkingChild(e, ".wa-research-step__detail", xt);
  }
  streamThinkingChild(e, t, a) {
    const i = e.querySelector(t), n = i?.dataset.fullText ?? i?.textContent ?? "";
    return !i || !n ? m.timeline() : this.streamText(i, n, {
      duration: this.getStreamDuration(n, a),
      targetForScroll: this.getMessageScrollTargetElement(e)
    });
  }
  streamText(e, t, a) {
    const i = { count: 0 };
    let n = -1;
    return m.timeline().call(() => {
      e.dataset.streaming = "true", e.textContent = "", n = 0;
    }).to(i, {
      count: t.length,
      duration: a.duration,
      ease: "none",
      onUpdate: () => {
        const o = Math.round(i.count);
        o !== n && (n = o, e.textContent = t.slice(0, o), this.requestMessageScroll(a.targetForScroll));
      }
    }).call(() => {
      e.textContent = t, delete e.dataset.streaming, this.cancelScheduledScroll(), this.animateMessageScrollIntoView(a.targetForScroll, He.followDuration * 0.7);
    });
  }
  foldThinkingStep(e) {
    const t = e.querySelectorAll(
      ".wa-research-step__detail, .wa-sequence-thinking-progress"
    );
    return m.timeline().to(t, {
      autoAlpha: 0,
      y: rn.detailOffsetY,
      scaleY: 0.96,
      transformOrigin: "left top",
      duration: rn.duration,
      ease: "power2.inOut"
    }).call(() => {
      e.dataset.stepState = "complete", this.animateMessageScrollIntoView(this.getMessageScrollTargetElement(e));
    });
  }
  getMessageScrollTargetElement(e) {
    return e.closest(".wa-message") ?? e;
  }
  prepareThinkingMessage(e, t, a) {
    t.forEach((i) => {
      i.dataset.stepState = "pending";
    }), m.set(e.header, { autoAlpha: 0, y: 5 }), m.set(e.traveler, { autoAlpha: 0, x: 0, y: 0 }), m.set(e.steps, { display: "grid", autoAlpha: 1, y: 0 }), e.title.dataset.thinkingActive = "true", this.resetThinkingGuide(e), m.set(t, { autoAlpha: 0, y: a, display: "none" });
  }
  revealThinkingHeader(e, t) {
    return this.consumeSignupLogoTransfer() ? this.revealThinkingHeaderFromSignupLogo(e, t) : m.timeline().to(e.header, {
      autoAlpha: 1,
      y: 0,
      duration: S(t),
      ease: "power2.out"
    }).call(() => this.snapThinkingLogoTo(e, e.headerGlyph)).to(e.traveler, {
      autoAlpha: 1,
      duration: S(0.12),
      ease: "power2.out"
    }, "<").add(this.streamThinkingHeader(e.header), "-=0.08");
  }
  revealThinkingHeaderFromSignupLogo(e, t) {
    let a = null;
    const i = { value: 0 };
    return m.timeline().call(() => {
      a = this.createSignupLogoTransfer(e.headerGlyph), m.set(this.signupLogo, { autoAlpha: 0 }), m.set(e.header, { autoAlpha: 1, y: 0 }), m.set(e.traveler, { autoAlpha: 0 }), this.snapThinkingLogoTo(e, e.headerGlyph);
    }).add(this.streamThinkingHeader(e.header), S(Math.min(t, 0.16))).to(i, {
      value: 1,
      duration: Ha.duration,
      ease: Ha.ease,
      overwrite: "auto",
      onUpdate: () => this.renderSignupLogoTransfer(a, i.value)
    }, 0).call(() => {
      this.renderSignupLogoTransfer(a, 1), this.snapThinkingLogoTo(e, e.headerGlyph), m.set(e.traveler, { autoAlpha: 1 }), a?.el.remove();
    });
  }
  consumeSignupLogoTransfer() {
    const e = this.transferSignupLogoOnNextThinking;
    if (this.transferSignupLogoOnNextThinking = !1, !e || !this.signupLogo.isConnected) return !1;
    const t = this.signupLogo.getBoundingClientRect();
    return t.width > 0 && t.height > 0;
  }
  createSignupLogoTransfer(e) {
    const t = this.signupLogo.getBoundingClientRect(), a = this.getElementLocalRect(t, this.chatBody), i = this.signupLogo.cloneNode(!0);
    return i.className = "wa-signup-logo-transfer", i.removeAttribute("data-signup-logo-target"), i.setAttribute("aria-hidden", "true"), this.chatBody.append(i), m.set(i, {
      width: t.width,
      height: t.height,
      x: a.left,
      y: a.top,
      color: getComputedStyle(this.signupLogo).color,
      autoAlpha: 1
    }), m.set(e, { autoAlpha: 1 }), {
      el: i,
      startX: a.left,
      startY: a.top,
      startWidth: t.width,
      startHeight: t.height,
      target: e,
      setX: m.quickSetter(i, "x", "px"),
      setY: m.quickSetter(i, "y", "px"),
      setWidth: m.quickSetter(i, "width", "px"),
      setHeight: m.quickSetter(i, "height", "px")
    };
  }
  renderSignupLogoTransfer(e, t) {
    if (!e) return;
    const a = e.target.getBoundingClientRect(), i = this.getElementLocalRect(a, this.chatBody), n = Rr(t);
    e.setX(this.interpolate(e.startX, i.left, n)), e.setY(this.interpolate(e.startY, i.top, n)), e.setWidth(this.interpolate(e.startWidth, a.width, n)), e.setHeight(this.interpolate(e.startHeight, a.height, n)), m.set(e.el, {
      color: t > 0.78 ? Ha.targetColor : getComputedStyle(this.signupLogo).color
    });
  }
  addThinkingStepReveal(e, t, a = {}) {
    return e.to(
      t,
      {
        autoAlpha: 1,
        y: 0,
        duration: S(0.26),
        ease: "power2.out"
      },
      a.position ?? "<"
    ).add(this.streamThinkingStepLabel(t), xt.startOverlap).add(this.streamThinkingStepDetail(t), "-=0.02");
  }
  createThinkingStepReveal(e) {
    return this.addThinkingStepReveal(m.timeline(), e, { position: 0 });
  }
  addThinkingStepStreams(e, t) {
    t.forEach((a, i) => {
      e.add(this.streamThinkingStepLabel(a), i === 0 ? xt.startOverlap : "<");
    }), t.forEach((a, i) => {
      e.add(this.streamThinkingStepDetail(a), i === 0 ? "-=0.02" : "<");
    });
  }
  markThinkingStepsComplete(e) {
    e.forEach((t) => {
      t.dataset.stepState = "complete";
    });
  }
  getThinkingLogoTargetPosition(e, t, a) {
    const n = (e.message.querySelector(".wa-thinking-block") ?? e.message).getBoundingClientRect(), o = t.getBoundingClientRect(), s = e.traveler.offsetWidth || e.headerGlyph.offsetWidth || 18, l = e.traveler.offsetHeight || e.headerGlyph.offsetHeight || 11, c = a && Number(m.getProperty(a, "x")) || 0, d = a && Number(m.getProperty(a, "y")) || 0;
    return {
      x: o.left - n.left + (o.width - s) / 2 - c,
      y: o.top - n.top + (o.height - l) / 2 - d
    };
  }
  snapThinkingLogoTo(e, t) {
    const a = this.getThinkingLogoTargetPosition(e, t);
    m.set(e.traveler, a);
  }
  moveThinkingLogoTo(e, t, a = ke.duration, i) {
    return m.timeline().to(e.traveler, {
      x: () => this.getThinkingLogoTargetPosition(e, t, i).x,
      y: () => this.getThinkingLogoTargetPosition(e, t, i).y,
      duration: a,
      ease: ke.ease,
      overwrite: "auto"
    });
  }
  getThinkingGuideStart(e) {
    const t = getComputedStyle(e.steps).getPropertyValue("--wa-thinking-guide-top"), a = Number.parseFloat(t);
    return Number.isFinite(a) ? a : 0;
  }
  resetThinkingGuide(e) {
    e.steps.style.setProperty("--wa-thinking-guide-end", `${this.getThinkingGuideStart(e)}px`);
  }
  getThinkingGuideTargetPosition(e, t, a) {
    const i = e.steps.getBoundingClientRect(), n = t.getBoundingClientRect(), o = a && Number(m.getProperty(a, "y")) || 0, s = n.top - i.top + n.height / 2 - o;
    return Math.max(this.getThinkingGuideStart(e), s);
  }
  moveThinkingGuideTo(e, t, a = ke.duration, i) {
    return m.timeline().to(e.steps, {
      "--wa-thinking-guide-end": () => `${this.getThinkingGuideTargetPosition(e, t, i)}px`,
      duration: a,
      ease: ke.ease,
      overwrite: "auto"
    });
  }
  moveThinkingGuideToStart(e, t = ke.returnDuration) {
    return m.timeline().to(e.steps, {
      "--wa-thinking-guide-end": () => `${this.getThinkingGuideStart(e)}px`,
      duration: t,
      ease: ke.ease,
      overwrite: "auto"
    });
  }
  moveThinkingLogoToStep(e, t) {
    const a = t?.querySelector(".wa-research-step__marker");
    return a ? m.timeline().add(this.moveThinkingLogoTo(e, a, ke.duration, t), 0).add(this.moveThinkingGuideTo(e, a, ke.duration, t), 0) : m.timeline();
  }
  collapseThinkingToHeader(e, t) {
    return m.timeline().call(() => {
      this.markThinkingStepsComplete(t), this.setLocalLogoMode(e.traveler, "done"), m.set(e.steps, {
        height: e.steps.offsetHeight,
        overflow: "hidden"
      });
    }).add(this.moveThinkingLogoTo(e, e.headerGlyph, ke.returnDuration), 0).add(this.moveThinkingGuideToStart(e, ke.returnDuration), 0).to(e.steps, {
      autoAlpha: 0,
      y: Ba.y,
      height: 0,
      duration: Ba.duration,
      ease: Ba.ease,
      onComplete: () => this.setThinkingHeaderCollapsed(e),
      onReverseComplete: () => this.setThinkingHeaderActive(e)
    }, 0).call(() => {
      m.set(e.steps, {
        display: "none",
        height: "",
        overflow: "",
        y: 0
      }), this.animateMessageScrollIntoView(e.message);
    });
  }
  getActiveThinkingTitle(e = De) {
    const t = e.trim() || De;
    return /^thinking(?:\.\.\.)?$/i.test(t) ? "Thinking..." : t;
  }
  setThinkingHeaderActive(e) {
    const t = this.getActiveThinkingTitle(e.title.dataset.activeText);
    e.title.dataset.fullText = t, e.title.textContent = t, e.title.dataset.thinkingActive = "true", delete e.title.dataset.streaming, m.set(e.elapsed, { display: "", autoAlpha: 1 });
  }
  setThinkingHeaderCollapsed(e) {
    const t = e.elapsed.dataset.elapsedTarget || e.elapsed.textContent?.trim() || "", a = t ? `Thought for ${t}` : "Thought";
    e.title.dataset.fullText = a, e.title.textContent = a, delete e.title.dataset.thinkingActive, delete e.title.dataset.streaming, m.set(e.elapsed, { display: "none" });
  }
  runThinkingSequence(e, t) {
    const a = m.timeline(), i = e.items.map((s, l) => this.createThinkingStep(s, l)), n = e.elapsed ?? this.getThinkingElapsed(e.items.length), o = this.claimThinkingMessage(i, n, e.title);
    return a.call(() => this.prepareThinkingMessage(o, i, t.itemStartY)).add(this.revealMessage(o.message)).add(this.revealThinkingHeader(o, t.headerDuration)), e.items.forEach((s, l) => {
      const c = i[l], d = l === 0 ? "+=0" : `+=${t.hold}`;
      a.call(() => this.activateThinkingStep(i, l), void 0, d).add(this.moveThinkingLogoToStep(o, c), "<").add(this.createThinkingStepReveal(c), "<").to({}, { duration: t.afterStepHold }).add(this.foldThinkingStep(c));
    }), a.add(this.collapseThinkingToHeader(o, i), `+=${t.finalHold}`), this.addThinkingElapsedTimer(a, o.elapsed, n), a;
  }
  activateThinkingStep(e, t) {
    e.forEach((a, i) => {
      i > t && (a.dataset.stepState = "pending", m.set(a, { display: "none" })), i === t && (a.dataset.stepState = "current", m.set(a, { display: "grid" }));
    });
  }
  getStreamDuration(e, t) {
    return this.prefersReducedMotion ? 0.01 : Math.min(t.maxDuration, Math.max(t.minDuration, e.length / t.charsPerSecond));
  }
  claimThinkingMessage(e, t, a = De) {
    const i = document.createElement("div");
    i.className = "wa-thinking-block";
    const n = document.createElement("div");
    n.className = "wa-thinking";
    const o = this.createThinkingLogo();
    o.dataset.logoRole = "shadow";
    const s = this.createThinkingLogo("wa-thinking-logo-traveler"), l = document.createElement("span"), c = this.getActiveThinkingTitle(a);
    l.className = "wa-thinking__title", l.dataset.activeText = a, l.dataset.fullText = c, l.dataset.thinkingActive = "true", l.textContent = "";
    const d = document.createElement("span");
    d.className = "wa-thinking__elapsed", d.dataset.elapsedTarget = t, d.textContent = "0s";
    const u = document.createElement("div");
    return u.className = "wa-research-steps", u.dataset.researchSteps = "", u.append(...e), n.append(o, l, d), i.append(n, u, s), {
      message: this.claimComponentMessage("thinking", i),
      header: n,
      headerGlyph: o,
      title: l,
      traveler: s,
      elapsed: d,
      steps: u
    };
  }
  addThinkingElapsedTimer(e, t, a) {
    xs(e, t, a, { reducedMotion: this.prefersReducedMotion });
  }
  createThinkingLogo(e = "wa-thinking__glyph") {
    const t = document.createElement("span");
    return t.className = e, t.dataset.logoMode = "thinking", t.setAttribute("aria-hidden", "true"), t.append(As("wa-thinking__logo-mark")), t;
  }
  setLocalLogoMode(e, t) {
    e && (e.dataset.logoMode = t);
  }
  createMessage(e) {
    const t = document.createElement("div");
    t.className = "wa-message", t.dataset.messageId = `message-${e}`;
    const a = document.createElement("div");
    a.className = "wa-message__avatar";
    const i = document.createElement("div");
    return i.className = "wa-message__body", i.dataset.messageBody = "", t.append(a, i), this.messagePool[e] = t, this.messageBodies.set(t, i), t;
  }
  getMessageBody(e) {
    const t = this.messageBodies.get(e);
    if (t) return t;
    const a = e.querySelector("[data-message-body]");
    if (!a) throw new Error("ChatActor: message body missing");
    return this.messageBodies.set(e, a), a;
  }
  getLastMessageBody() {
    const e = this.messagePool[this.messageIndex - 1];
    return e ? this.getMessageBody(e) : null;
  }
  createThinkingStep(e, t) {
    const a = document.createElement("div");
    a.className = "wa-research-step", a.dataset.researchStep = String(t), a.dataset.stepState = t === 0 ? "current" : "complete";
    const i = document.createElement("span");
    i.className = "wa-research-step__marker", i.setAttribute("aria-hidden", "true");
    const n = document.createElement("span");
    n.className = "wa-research-step__body";
    const o = document.createElement("span");
    o.className = "wa-research-step__label-row";
    const s = document.createElement("span");
    s.className = "wa-research-step__label", s.dataset.fullText = e.label, s.textContent = "";
    const l = document.createElement("span");
    l.className = "wa-research-step__detail", l.dataset.fullText = e.detail, l.textContent = "";
    const c = document.createElement("span");
    return c.className = "wa-research-step__chevron", c.setAttribute("aria-hidden", "true"), o.append(s, c), n.append(o, l), a.append(i, n), a;
  }
  getThinkingDetail(e, t) {
    return Li(e, t);
  }
  getThinkingElapsed(e) {
    return Aa(e);
  }
  normalizeThinkingInput(e) {
    if (this.isThinkingStateConfig(e)) {
      const a = e.items.map((i, n) => this.normalizeThinkingItem(i, n));
      return {
        title: e.title || De,
        elapsed: e.elapsed,
        items: a.length ? a : [this.normalizeThinkingItem(De, 0)]
      };
    }
    const t = (Array.isArray(e) ? e : [e]).map(
      (a, i) => this.normalizeThinkingItem(a, i)
    );
    return {
      title: De,
      items: t.length ? t : [this.normalizeThinkingItem(De, 0)]
    };
  }
  normalizeThinkingItem(e, t) {
    const a = typeof e == "string" ? e : e.label;
    return {
      label: a,
      detail: typeof e == "string" ? this.getThinkingDetail(a, t) : e.detail || this.getThinkingDetail(a, t),
      disclosure: typeof e == "string" ? t === 0 ? Ht : ua : e.disclosure || (t === 0 ? Ht : ua)
    };
  }
  isThinkingStateConfig(e) {
    return !!(e && typeof e == "object" && !Array.isArray(e) && "items" in e);
  }
  createSectionHeader(e, t, a, i) {
    const n = document.createElement("div");
    n.className = `${e}__header`;
    const o = document.createElement("h3");
    if (o.className = `${e}__title`, o.textContent = t, n.append(o), i && n.append(i), a) {
      const s = document.createElement("p");
      s.className = `${e}__subtitle`, s.textContent = a, n.append(s);
    }
    return n;
  }
  claimCard(e) {
    const t = this.cardIndex, a = this.cardPool[t] ?? this.createCard(t), i = a.querySelector("[data-result-kicker]"), n = a.querySelector("[data-result-title]"), o = a.querySelector("[data-result-body]"), s = a.querySelector("[data-result-rows]"), l = a.querySelector("[data-result-actions]");
    return this.cardIndex += 1, a.dataset.resultCard = e.id, a.style.display = "none", i && (i.textContent = e.kicker ?? "Result"), n && (n.textContent = e.title), o && (o.textContent = e.body ?? ""), s?.replaceChildren(
      ...(e.rows ?? []).map((c, d) => {
        const u = document.createElement("li");
        u.className = "wa-result-row", u.dataset.resultRow = `${e.id}-${d}`, u.dataset.tone = c.tone ?? "neutral";
        const g = document.createElement("span");
        g.textContent = c.label;
        const p = document.createElement("strong");
        return p.textContent = c.value, u.append(g, p), u;
      })
    ), l?.replaceChildren(
      ...(e.actions ?? []).map((c) => {
        const d = document.createElement("button");
        return d.className = "wa-result-action", d.type = "button", d.textContent = c.label, d.dataset.resultAction = c.targetId, d;
      })
    ), m.set(a, {
      autoAlpha: 0,
      y: 18,
      scale: 0.985,
      transformOrigin: "center top"
    }), m.set(a.querySelectorAll(".wa-result-row, .wa-result-action"), {
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
    t.className = "wa-data-table", t.dataset.dataTable = e.id, t.dataset.tableVariant = e.variant ?? "default", t.dataset.columnCount = String(e.columns.length), t.dataset.activePage = String(i), e.scrollAlign && (t.dataset.scrollAlign = e.scrollAlign), this.expectedDataTablePages.set(e.id, i), t.style.setProperty(
      "--wa-data-table-columns",
      e.columns.map((c) => c.width ?? "minmax(0, 1fr)").join(" ")
    );
    const n = document.createElement("div");
    n.className = "wa-data-table__header";
    const o = document.createElement("div");
    o.className = "wa-data-table__meta", o.textContent = e.eyebrow ?? "Data marketplace";
    const s = document.createElement("h3");
    if (s.className = "wa-data-table__title", s.textContent = e.title, n.append(o, s), e.count) {
      const c = document.createElement("span");
      c.className = "wa-data-table__count", c.textContent = e.count, n.append(c);
    }
    const l = document.createElement("div");
    l.className = "wa-data-table__grid", l.append(this.createDataTableRow("header", e.columns, {}, e.id));
    for (const c of a)
      for (const d of c.rows) {
        const u = this.createDataTableRow(d.id, e.columns, d.values, e.id, c.page);
        c.page !== i && (u.style.display = "none", m.set(u, { autoAlpha: 0, y: 6 })), l.append(u);
      }
    return t.append(n, l), (e.actions?.length || e.pagination) && t.append(this.createDataTableFooter(e, a, i)), t;
  }
  createDataTableRow(e, t, a, i, n) {
    const o = document.createElement("div");
    o.className = "wa-data-table__row", o.dataset.tableRow = e;
    const s = e === "header";
    s && (o.dataset.header = "true"), !s && a.source && (o.dataset.source = a.source), !s && n !== void 0 && (o.dataset.page = String(n));
    for (const l of t) {
      const c = document.createElement(s ? "strong" : "span");
      if (c.className = "wa-data-table__cell", c.dataset.columnKey = l.key, s)
        c.textContent = l.label;
      else if (l.key === "name" || l.key === "contact")
        c.append(this.createDataTablePerson(a, a[l.key] ?? ""));
      else if (l.key === "mutualConnection")
        c.append(this.createDataTablePerson(a, a[l.key] ?? "", {
          detailKey: "mutualConnectionDetail",
          avatarToneKey: "mutualConnectionAvatarTone",
          avatarUrlKey: "mutualConnectionAvatarUrl",
          avatarKey: "mutualConnectionAvatar",
          sourceKey: "mutualConnectionSource"
        })), a.mutualConnectionBadge && c.append(this.createDataTableCellBadge(a.mutualConnectionBadge));
      else {
        const d = a[l.key] ?? "", u = document.createElement("span");
        u.className = "wa-data-table__cell-text", u.textContent = d || "-", c.append(u), d || (c.dataset.empty = "true");
      }
      o.append(c);
    }
    if (s) {
      const l = document.createElement("button");
      l.className = "wa-data-table__add", l.type = "button", l.tabIndex = -1, l.setAttribute("aria-label", `Add row to ${i}`), l.append(this.createDataTableAddIcon()), o.append(l);
    }
    return o;
  }
  createDataTableAddIcon() {
    const e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    e.classList.add("wa-data-table__add-icon"), e.setAttribute("width", "16"), e.setAttribute("height", "16"), e.setAttribute("viewBox", "0 0 24 24"), e.setAttribute("aria-hidden", "true"), e.setAttribute("focusable", "false");
    for (const t of ["M12 5v14", "M5 12h14"]) {
      const a = document.createElementNS("http://www.w3.org/2000/svg", "path");
      a.setAttribute("d", t), e.append(a);
    }
    return e;
  }
  createDataTableCellBadge(e) {
    const t = document.createElement("span");
    return t.className = "wa-data-table-cell-badge", t.textContent = e, t;
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
      const n = document.createElement("div");
      n.className = "wa-data-table__actions";
      for (const o of e.actions)
        n.append(this.createDataTableAction(e.id, o));
      i.append(n);
    }
    if (e.pagination) {
      const n = document.createElement("div");
      n.className = "wa-data-table__pagination";
      const o = t.find((c) => c.page === a)?.range ?? t[0]?.range ?? "", s = document.createElement("span");
      s.className = "wa-data-table__range", s.dataset.tablePageRange = "", s.textContent = o;
      const l = document.createElement("span");
      l.className = "wa-data-table__page-controls";
      for (const c of t) {
        const d = document.createElement("button"), u = c.page === a;
        d.className = "wa-data-table__page-button", d.type = "button", d.tabIndex = -1, d.dataset.tablePageButton = String(c.page), d.dataset.pageRange = c.range, d.dataset.active = String(u), d.setAttribute("aria-label", `Show page ${c.page}`), d.setAttribute("aria-current", u ? "page" : "false"), d.textContent = String(c.page), l.append(d);
      }
      n.append(s, l), i.append(n);
    }
    return i;
  }
  createDataTableAction(e, t) {
    const a = document.createElement("button");
    a.className = "wa-data-table-action", a.type = "button", a.tabIndex = -1, a.dataset.tableAction = t.id, a.dataset.tableActionTable = e, a.dataset.actionVariant = t.variant ?? "secondary", a.dataset.tooltipVisible = "false", a.setAttribute("aria-label", t.tooltip ?? t.label);
    const i = document.createElement("span");
    if (i.className = "wa-data-table-action__label", i.textContent = t.label, a.append(this.createDataTableActionIcon(t.icon ?? "email"), i), t.badge) {
      a.dataset.tooltipBadge = t.badge;
      const n = document.createElement("span");
      n.className = "wa-data-table-action__badge", n.textContent = t.badge, a.append(n);
    }
    if (t.tooltip) {
      const n = document.createElement("span");
      n.className = "wa-data-table-action__tooltip", n.textContent = t.tooltip, a.append(n);
    }
    return a;
  }
  createDataTableActionIcon(e) {
    const t = document.createElementNS("http://www.w3.org/2000/svg", "svg"), a = e === "dialer" ? [
      "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2",
      "M15 7a2 2 0 0 1 2 2",
      "M15 3a6 6 0 0 1 6 6"
    ] : [
      "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",
      "M3 7l9 6l9 -6"
    ];
    t.classList.add("wa-data-table-action__icon"), t.setAttribute("width", "16"), t.setAttribute("height", "16"), t.setAttribute("viewBox", "0 0 24 24"), t.setAttribute("aria-hidden", "true"), t.setAttribute("focusable", "false");
    for (const i of a) {
      const n = document.createElementNS("http://www.w3.org/2000/svg", "path");
      n.setAttribute("d", i), t.append(n);
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
    const a = this.chatShell.getBoundingClientRect(), i = e.getBoundingClientRect(), n = i.left - a.left + i.width * 0.5, o = i.top - a.top - 7, s = document.createElement("span"), l = e.dataset.tooltipBadge?.trim();
    if (s.className = "wa-data-table-floating-tooltip__label", s.textContent = t, this.tableControlTooltip.replaceChildren(s), l) {
      const c = document.createElement("span");
      c.className = "wa-data-table-floating-tooltip__badge", c.textContent = l, this.tableControlTooltip.append(c);
    }
    this.tableControlTooltip.dataset.hasBadge = String(!!l), this.tableControlTooltip.dataset.visible = "true", m.set(this.tableControlTooltip, {
      x: n,
      y: o,
      xPercent: -50,
      yPercent: -100
    });
  }
  hideDataTableControlTooltip() {
    this.tableControlTooltip.dataset.visible = "false", this.tableControlTooltip.dataset.hasBadge = "false", this.queryElements(this.chatShell, Rt).forEach((e) => {
      e.dataset.tooltipVisible = "false";
    });
  }
  setDataTableControlTooltipVisible(e) {
    const t = e.closest(cn);
    (t ? this.queryElements(t, Rt) : this.queryElements(this.chatShell, Rt)).forEach((i) => {
      i.dataset.tooltipVisible = String(i === e);
    });
  }
  getDataTableControlTooltipText(e) {
    return e.querySelector(".wa-data-table-action__tooltip")?.textContent?.trim() || e.dataset.tooltip || e.getAttribute("aria-label") || "";
  }
  findDataTableControl(e) {
    return e instanceof Element ? e.closest(Rt) : null;
  }
  findDataTablePageButton(e) {
    return e instanceof Element ? e.closest(dn) : null;
  }
  findDataTable(e) {
    return this.root.querySelector(`[data-data-table="${this.escapeSelectorValue(e)}"]`);
  }
  getVisibleDataTableRows(e) {
    const t = [];
    for (const a of e.querySelectorAll(".wa-data-table__row[data-page]"))
      a.style.display !== "none" && t.push(a);
    return t;
  }
  createDataTablePerson(e, t, a = {}) {
    const i = document.createElement("span");
    i.className = "wa-data-table-person";
    const n = document.createElement("span");
    n.className = "wa-data-table-person__avatar-wrap";
    const o = document.createElement("span");
    o.className = "wa-data-table-person__avatar", o.dataset.avatarTone = e[a.avatarToneKey ?? "avatarTone"] ?? "1", this.setProfileAvatar(
      o,
      t,
      e[a.avatarUrlKey ?? "avatarUrl"],
      e[a.avatarKey ?? "avatar"]
    );
    const s = document.createElement("span");
    s.className = "wa-data-table-person__source", s.dataset.source = e[a.sourceKey ?? "source"] ?? "default", s.setAttribute("aria-hidden", "true");
    const l = document.createElement("span");
    l.className = "wa-data-table-person__name", l.textContent = t || "-", n.append(o, s);
    const c = document.createElement("span");
    c.className = "wa-data-table-person__copy", c.append(l);
    const d = e[a.detailKey ?? "prospectDetail"] || e.personDetail || "";
    if (d) {
      const u = document.createElement("span");
      u.className = "wa-data-table-person__detail", u.textContent = d, c.append(u);
    }
    return i.append(n, c), i;
  }
  getInitials(e) {
    return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
  }
  setProfileAvatar(e, t, a, i) {
    const n = Sa(t, a);
    if (e.replaceChildren(), e.dataset.hasPhoto = String(!!n), !n) {
      e.textContent = i ?? this.getInitials(t);
      return;
    }
    const o = document.createElement("img");
    o.alt = "", o.decoding = "async", o.loading = "lazy", o.referrerPolicy = "no-referrer", o.src = n, o.addEventListener("error", () => {
      e.contains(o) && (e.dataset.hasPhoto = "false", e.textContent = i ?? this.getInitials(t));
    }, { once: !0 }), e.append(o);
  }
  createEnrichmentPanel(e) {
    const t = document.createElement("article");
    t.className = "wa-enrichment-panel wa-waterfall-thinking", t.dataset.enrichmentPanel = e.id;
    const a = document.createElement("div");
    a.className = "wa-enrichment-panel__header";
    const i = this.createThinkingLogo(), n = document.createElement("span");
    n.className = "wa-thinking__title", n.textContent = "Enriching";
    const o = document.createElement("span");
    o.className = "wa-thinking__elapsed", o.dataset.elapsedTarget = "4m 20s", o.textContent = "0s", a.append(i, n, o);
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
    const n = document.createElement("span");
    n.className = "wa-waterfall-row__status", n.setAttribute("aria-hidden", "true");
    const o = document.createElement("span");
    o.className = "wa-waterfall-row__label", o.textContent = e;
    const s = document.createElement("span");
    return s.className = "wa-waterfall-row__chips", s.append(
      ...a.map((l) => {
        const c = document.createElement("span");
        return c.className = "wa-waterfall-chip", c.dataset.stepState = l.state, c.textContent = l.label, c;
      })
    ), i.append(n, o, s), i;
  }
  createStrategyPlan(e) {
    const t = document.createElement("article");
    t.className = "wa-strategy-plan", t.dataset.strategyPlan = e.id;
    const a = document.createElement("div");
    a.className = "wa-strategy-plan__surface";
    const i = document.createElement("h3");
    i.className = "wa-strategy-plan__title", i.textContent = e.title;
    const n = document.createElement("ul");
    n.className = "wa-strategy-plan__bullets";
    for (const o of this.getStrategyPlanBullets(e)) {
      const s = document.createElement("li");
      s.textContent = o, n.append(s);
    }
    return a.append(i, n), t.append(a), t;
  }
  getStrategyPlanBullets(e) {
    return e.bullets?.length ? e.bullets : e.summary ? e.summary.split(/\n+/).map((t) => t.trim()).filter(Boolean) : [e.audience, e.motion, e.proof].filter((t) => !!t);
  }
  createDataSourcesGrid(e) {
    const t = document.createElement("section");
    t.className = "wa-data-source-grid", t.dataset.dataSourcesGrid = e.id;
    const a = this.createSectionHeader("wa-data-source-grid", e.title, e.subtitle), i = document.createElement("div");
    return i.className = "wa-data-source-grid__list", e.sources.forEach((n) => {
      i.append(this.createDataSourceCard(n));
    }), t.append(a, i), t;
  }
  createMarketingDataSourcesGrid(e) {
    const t = this.createDataSourcesGrid(e), a = document.createElement("div"), i = document.createElement("div"), n = t.querySelector(".wa-data-source-grid__header"), o = this.groupDataSources(e.sources);
    return t.classList.add("wa-data-source-grid--marketing"), t.dataset.marketingDataSourcesGrid = e.id, a.className = "wa-data-source-grid__scale", i.className = "wa-data-source-grid__groups", Fs.forEach((s) => {
      const l = document.createElement("div");
      l.className = "wa-data-source-grid__column", s.forEach((c) => {
        const d = o.find((u) => u.category === c);
        d && l.append(this.createMarketingDataSourceGroup(d));
      }), i.append(l);
    }), a.replaceChildren(...this.compactElements(n, i)), t.replaceChildren(a), this.setMarketingDataGridScale(t), t;
  }
  setMarketingDataGridScale(e) {
    const t = this.chatBody.getBoundingClientRect(), a = getComputedStyle(this.chatBody), i = Number.parseFloat(a.paddingLeft) || 0, n = Number.parseFloat(a.paddingRight) || i, o = Math.max(0, t.width - i - n) / Ua.contentWidth, s = Math.max(0, t.height) / Ua.height, l = Math.min(o || 1, s || 1), c = l > 0 ? i / l : 0, d = l > 0 ? n / l : c, u = Ua.contentWidth + c + d;
    e.style.setProperty("--wa-data-grid-scale", String(l)), e.style.setProperty("--wa-data-grid-artboard-width", `${u}px`), e.style.setProperty("--wa-data-grid-gutter-left", `${c}px`), e.style.setProperty("--wa-data-grid-gutter-right", `${d}px`);
  }
  createMarketingDataSourceGroup(e) {
    const t = document.createElement("section"), a = document.createElement("h4"), i = document.createElement("div");
    return t.className = "wa-data-source-group", t.dataset.sourceGroup = this.slugChannelName(e.category), a.className = "wa-data-source-group__title", a.textContent = e.category, i.className = "wa-data-source-grid__list", i.classList.add(`wa-data-source-grid__list--count-${e.sources.length}`), e.sources.forEach((n) => {
      i.append(this.createDataVendorLogo(n));
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
      const n = i.category ?? "Data partners";
      let o = a.get(n);
      o || (o = { category: n, sources: [] }, a.set(n, o), t.push(o)), o.sources.push(i);
    }), t;
  }
  createDataSourceCard(e) {
    const t = document.createElement("article");
    t.className = "wa-data-source-card", t.dataset.dataSource = e.id;
    const a = document.createElement("span");
    a.className = "wa-data-source-card__icon", a.setAttribute("aria-hidden", "true");
    const i = document.createElement("span");
    i.className = "wa-data-source-card__copy";
    const n = document.createElement("strong");
    n.textContent = e.name;
    const o = document.createElement("span");
    return o.textContent = e.detail, i.append(n, o), t.append(a, i), t;
  }
  createOutreachStyleProfile(e) {
    const t = document.createElement("section");
    t.className = "wa-style-profile", t.dataset.styleProfile = e.id;
    const a = this.createSectionHeader("wa-style-profile", e.title, e.subtitle), i = document.createElement("div");
    if (i.className = "wa-style-profile__rows", e.signals.forEach((n) => {
      const o = document.createElement("div");
      o.className = "wa-style-profile__row";
      const s = document.createElement("span");
      s.textContent = n.label;
      const l = document.createElement("strong");
      l.textContent = n.value, o.append(s, l), i.append(o);
    }), t.append(a, i), e.examples?.length) {
      const n = document.createElement("div");
      n.className = "wa-style-profile__examples", e.examples.forEach((o) => {
        const s = document.createElement("blockquote");
        s.className = "wa-style-profile__example", s.textContent = o, n.append(s);
      }), t.append(n);
    }
    return t;
  }
  createMailboxConnection(e) {
    const t = document.createElement("section");
    t.className = "wa-mailbox-connection", t.dataset.mailboxConnection = e.id, t.dataset.mailboxState = "idle";
    const a = document.createElement("div");
    a.className = "wa-mailbox-connection__card";
    const i = document.createElement("span");
    i.className = "wa-mailbox-connection__copy";
    const n = document.createElement("h3");
    if (n.className = "wa-mailbox-connection__title", n.textContent = e.title, e.subtitle) {
      const b = document.createElement("p");
      b.className = "wa-mailbox-connection__subtitle", b.textContent = e.subtitle, i.append(n, b);
    } else
      i.append(n);
    const o = document.createElement("div");
    o.className = "wa-mailbox-connection__actions";
    const s = this.createMailboxProviderButton({
      id: e.id,
      icon: "gmail",
      label: Wa("gmail", e.ctaLabel),
      loadingLabel: Va(e.loadingLabel, "Connecting"),
      connectedLabel: Wa("gmail", e.status, "connected"),
      isPrimary: !0
    }), l = this.createMailboxProviderButton({
      icon: "outlook",
      label: Wa("outlook", e.secondaryCtaLabel)
    });
    o.append(s, l), a.append(i, o);
    const c = document.createElement("div");
    c.className = "wa-mailbox-learning", c.dataset.mailboxLearning = "", c.dataset.mailboxLearningReadyDetail = e.learningReadyDetail ?? an;
    const d = document.createElement("div");
    d.className = "wa-mailbox-learning__thumbprint", d.append(this.createMailboxThumbprint(e.id));
    const u = document.createElement("h4");
    u.className = "wa-mailbox-learning__title";
    const g = document.createElement("span");
    g.dataset.mailboxLearningTitleText = "", g.textContent = e.learningTitle ?? tn;
    const p = document.createElement("span");
    p.className = "wa-mailbox-learning__ready-chevron", p.dataset.mailboxLearningReadyChevron = "", p.setAttribute("aria-hidden", "true"), u.append(g, p);
    const f = document.createElement("p");
    f.className = "wa-mailbox-learning__detail", f.textContent = e.learningDetail ?? Oa[0].detail;
    const h = document.createElement("div");
    h.className = "wa-mailbox-learning__progress";
    const w = document.createElement("span");
    return w.dataset.mailboxLearningProgress = "", h.append(w), c.append(d, u, h, f), t.append(a, c), t;
  }
  createMailboxProviderButton(e) {
    const t = document.createElement("button");
    t.className = "wa-mailbox-connection__button", t.type = "button", t.setAttribute("aria-label", e.label), e.isPrimary && e.id && (t.dataset.mailboxConnect = e.id, t.dataset.mailboxLoadingLabel = Va(e.loadingLabel, "Connecting"), t.dataset.mailboxConnectedLabel = e.connectedLabel ?? "Gmail");
    const a = this.createMailboxProviderIcon(e.icon), i = document.createElement("span");
    i.className = "wa-mailbox-connection__button-copy";
    const n = document.createElement("span");
    if (n.className = e.isPrimary ? "wa-mailbox-connection__button-label" : "wa-mailbox-connection__provider-label", e.isPrimary && (n.dataset.mailboxButtonLabel = "idle", n.setAttribute("aria-hidden", "true")), n.textContent = e.label, i.append(n), e.isPrimary) {
      const s = document.createElement("span");
      s.className = "wa-mailbox-connection__button-label", s.dataset.mailboxButtonLabel = "loading", s.setAttribute("aria-hidden", "true"), s.textContent = Va(e.loadingLabel, "Connecting");
      const l = document.createElement("span"), c = document.createElementNS("http://www.w3.org/2000/svg", "svg"), d = document.createElementNS("http://www.w3.org/2000/svg", "path"), u = document.createElement("span");
      l.className = "wa-mailbox-connection__button-label", l.dataset.mailboxButtonLabel = "connected", l.setAttribute("aria-hidden", "true"), c.classList.add("wa-mailbox-connection__connected-icon"), c.setAttribute("width", "16"), c.setAttribute("height", "16"), c.setAttribute("viewBox", "0 0 24 24"), c.setAttribute("aria-hidden", "true"), c.setAttribute("focusable", "false"), d.setAttribute("d", "M5 12l5 5l10 -10"), c.append(d), u.textContent = e.connectedLabel ?? "Gmail", l.append(c, u), i.append(s, l);
    }
    const o = document.createElement("span");
    return o.className = "wa-mailbox-connection__spinner", o.setAttribute("aria-hidden", "true"), t.append(a, i, o), t;
  }
  createMailboxProviderIcon(e) {
    const t = document.createElement("img");
    return t.className = "wa-mailbox-connection__provider-icon", t.src = Rs[e], t.alt = "", t.decoding = "async", t.loading = "eager", t.setAttribute("aria-hidden", "true"), t;
  }
  createMailboxThumbprint(e) {
    const t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    return t.classList.add("wa-mailbox-thumbprint"), t.dataset.mailboxThumbprint = e, t.setAttribute("viewBox", "0 0 200 203"), t.setAttribute("aria-hidden", "true"), t.setAttribute("focusable", "false"), t.append(
      this.createMailboxThumbprintGroup("wa-mailbox-thumbprint__base"),
      this.createMailboxThumbprintGroup("wa-mailbox-thumbprint__fill", !0)
    ), t;
  }
  createMailboxThumbprintGroup(e, t = !1) {
    const a = document.createElementNS("http://www.w3.org/2000/svg", "g");
    return a.classList.add(e), Ds.forEach((i, n) => {
      const o = document.createElementNS("http://www.w3.org/2000/svg", "path");
      o.setAttribute("d", i), o.setAttribute("fill", "none"), o.setAttribute("stroke-linecap", "round"), o.setAttribute("stroke-miterlimit", "10"), t && (o.dataset.mailboxThumbprintPath = String(n), o.setAttribute("pathLength", "100"), o.setAttribute("stroke-dasharray", "0 100"), o.setAttribute("stroke-dashoffset", "0")), a.append(o);
    }), a;
  }
  updateMailboxThumbprintFill(e, t) {
    e.forEach((a, i) => {
      const n = Ws(i, t);
      if (n <= 0) {
        a.setAttribute("stroke-dasharray", "0 100");
        return;
      }
      a.setAttribute("stroke-dasharray", n >= 100 ? "100 0" : `${n} 100`);
    });
  }
  createProximityLeadList(e) {
    const t = this.createDataTable({
      id: e.id,
      title: e.title,
      eyebrow: "ranked leads",
      count: `${e.leads.length} leads`,
      columns: [
        { key: "name", label: "Prospect", width: "1.18fr" },
        { key: "company", label: "Company", width: "0.88fr" },
        { key: "connection", label: "Connection", width: "2.05fr" }
      ],
      rows: e.leads.map((a) => ({
        id: `proximity-${a.rank}`,
        values: {
          name: a.name,
          prospectDetail: a.title,
          company: a.company,
          connection: this.formatLeadConnection(a),
          source: "signal",
          avatarTone: a.rank,
          avatarUrl: a.avatarUrl ?? "",
          score: a.score
        }
      }))
    });
    return t.classList.add("wa-data-table--proximity"), t.dataset.proximityList = e.id, t;
  }
  formatLeadConnection(e) {
    const t = e.personalization.trim(), a = e.proximity.trim();
    return a ? t ? `${a}: ${t}` : a : t;
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
    const n = document.createElement("p");
    n.className = "wa-swipe-game__prompt", n.textContent = e.prompt ?? "Swipe toward the personalization you would use.";
    const o = document.createElement("div");
    o.className = "wa-swipe-game__axis";
    const s = document.createElement("span");
    s.textContent = e.labels?.avoid ?? "Never me";
    const l = document.createElement("span");
    l.dataset.swipeProgress = "";
    const c = document.createElement("span");
    c.textContent = e.labels?.use ?? "I'd use it", o.append(s, l, c);
    const d = document.createElement("div");
    d.className = "wa-swipe-game__stack";
    const u = document.createElement("div");
    u.className = "wa-swipe-game__glow", u.setAttribute("aria-hidden", "true"), d.append(u), e.signals.forEach((f, h) => {
      const w = document.createElement("article");
      w.className = "wa-swipe-card", w.dataset.swipeCard = f.id, w.dataset.swipeDecision = f.decision, w.dataset.cardIndex = String(h);
      const b = document.createElement("strong");
      b.className = "wa-swipe-card__label", b.textContent = f.label;
      const y = document.createElement("span");
      y.className = "wa-swipe-card__detail", y.textContent = f.detail, w.append(b, y), d.append(w);
    });
    const g = document.createElement("div");
    g.className = "wa-swipe-game__complete", g.dataset.swipeComplete = "", g.textContent = e.completeLabel ?? `${e.signals.length} choices captured`, d.append(g), m.set(g, { autoAlpha: 0, y: 12, scale: 0.96 });
    const p = document.createElement("div");
    return p.className = "wa-swipe-game__actions", p.append(
      this.createSwipeActionButton("avoid", e.labels?.avoid ?? "Never me"),
      this.createSwipeActionButton("use", e.labels?.use ?? "I'd use it")
    ), t.append(a, n, o, d, p), this.updateSwipeGameProgress(t, 0), t;
  }
  createSwipeActionButton(e, t) {
    const a = document.createElement("button");
    return a.className = "wa-swipe-game__action", a.type = "button", a.tabIndex = -1, a.dataset.swipeAction = e, a.setAttribute("aria-label", t), a;
  }
  layoutSwipeGameCards(e, t) {
    const a = this.getSwipeCards(e);
    a.forEach((i, n) => {
      const o = n - t, s = o >= 0 && o < 3;
      i.dataset.swipeState = o === 0 ? "active" : o > 0 ? "queued" : "done", m.set(i, {
        display: o >= 0 ? "grid" : "none",
        x: 0,
        y: Math.max(0, o) * 8,
        scale: 1 - Math.max(0, o) * 0.035,
        rotation: o === 1 ? -1.15 : o === 2 ? 1.05 : 0,
        autoAlpha: s ? 1 - Math.max(0, o) * 0.18 : 0,
        zIndex: a.length - n,
        transformOrigin: "center center",
        force3D: !0
      });
    }), this.updateSwipeGameProgress(e, t);
  }
  updateSwipeGameProgress(e, t) {
    const a = e.querySelector("[data-swipe-progress]"), i = this.getSwipeCards(e).length, n = Math.min(t + 1, i);
    a && (a.textContent = `${n}/${i}`);
  }
  createSequenceEngagement(e) {
    const t = document.createElement("section"), a = Mr(e);
    t.className = "wa-sequence-engagement", t.dataset.sequenceEngagement = e.id, t.dataset.peopleCount = e.peopleCount, t.dataset.activeSequenceIndex = String(a);
    const i = document.createElement("span");
    i.className = "wa-sequence-engagement__count", i.dataset.sequenceCount = "", i.textContent = e.sequences.some((p) => p.steps?.length) ? this.getSequenceCountLabel(a, e.peopleCount) : e.peopleCount;
    const n = this.createSectionHeader("wa-sequence-engagement", e.title, e.subtitle, i), o = document.createElement("div");
    o.className = "wa-sequence-engagement__sequences";
    const s = e.sequences.some((p) => p.steps?.length);
    let l = null;
    if (s) {
      const p = document.createElement("div");
      p.className = "wa-sequence-people", p.dataset.sequencePeopleRail = e.id, p.setAttribute("aria-label", "Sequence people"), e.sequences.forEach((f, h) => {
        const w = document.createElement("button"), b = document.createElement("span"), y = document.createElement("span"), x = document.createElement("strong"), v = document.createElement("span");
        w.className = "wa-sequence-person-card", w.type = "button", w.tabIndex = -1, w.dataset.sequencePersonCard = `${e.id}:${h}`, w.dataset.sequencePersonIndex = String(h), w.dataset.active = String(h === a), w.setAttribute("aria-pressed", String(h === a)), w.setAttribute("aria-label", `Preview sequence for ${f.name}`), w.addEventListener("click", () => {
          this.sequencePerson(e.id, h).play();
        }), b.className = "wa-sequence-person-card__avatar", b.dataset.avatarTone = String(h % 9 + 1), this.setProfileAvatar(b, f.name, f.avatarUrl), y.className = "wa-sequence-person-card__copy", x.textContent = f.name, v.textContent = [f.title, f.company].filter(Boolean).join(", "), y.append(x, v), w.append(b, y), p.append(w);
      }), l = p;
    }
    e.sequences.forEach((p, f) => {
      const h = document.createElement("article");
      h.className = "wa-sequence-card", h.dataset.sequenceCard = `${e.id}:${f}`, h.dataset.sequenceIndex = String(f), h.dataset.active = String(f === a), h.dataset.sequenceName = p.name, h.dataset.sequenceMeta = [p.title, p.company].filter(Boolean).join(", "), h.dataset.sequenceTemplateName = p.name, h.dataset.sequenceTemplateMeta = [p.title, p.company].filter(Boolean).join(", "), h.dataset.sequenceTemplateAvatarUrl = p.avatarUrl ?? "", f !== a && (h.style.display = "none", m.set(h, { autoAlpha: 0, y: 8 }));
      const w = document.createElement("div");
      w.className = "wa-sequence-card__top";
      const b = document.createElement("span");
      b.className = "wa-sequence-card__identity";
      const y = document.createElement("strong");
      y.textContent = p.name;
      const x = document.createElement("span");
      x.textContent = [p.title, p.company].filter(Boolean).join(", "), b.append(y, x);
      const v = document.createElement("span");
      v.className = "wa-sequence-card__label", v.textContent = p.signal ?? "Personalized", w.append(b, v);
      const _ = document.createElement("p");
      _.className = "wa-sequence-card__subject", _.textContent = p.subject;
      const T = document.createElement("p");
      T.className = "wa-sequence-card__personalization", T.textContent = p.personalization;
      const k = p.steps;
      if (k?.length) {
        const C = document.createElement("div"), A = k[0], E = document.createElement("div"), F = document.createElement("span"), O = document.createElement("strong"), L = document.createElement("p");
        C.className = "wa-sequence-steps", k.forEach((I, N) => {
          const P = document.createElement("button"), H = document.createElement("span"), K = document.createElement("span"), Pe = document.createElement("strong"), ve = this.getSequenceStepWaitDays(I, N, k.length);
          P.className = "wa-sequence-step", P.type = "button", P.tabIndex = -1, P.dataset.stepIndex = String(N), P.dataset.stepOpen = String(N === 0), P.dataset.stepSelected = String(N === 0), P.dataset.channel = this.slugChannelName(I.channel), P.dataset.stepSubject = N === 0 ? p.subject : I.label, P.dataset.stepBody = this.getSequenceStepCopy(p, I), P.dataset.stepTemplateChannel = I.channel, P.dataset.stepTemplateLabel = I.label, P.dataset.stepTemplateSubject = N === 0 ? p.subject : I.label, P.dataset.stepTemplateBody = this.getSequenceStepCopy(p, I), ve && (P.dataset.waitDays = String(ve), P.dataset.stepTemplateWaitDays = String(ve)), P.setAttribute("aria-pressed", String(N === 0)), P.addEventListener("click", () => {
            this.selectSequenceStep(h, N);
          }), H.className = "wa-sequence-step__channel", H.textContent = this.formatSequenceChannelLabel(I.channel), K.className = "wa-sequence-step__copy", Pe.textContent = I.label, K.append(Pe), P.append(H, K), C.append(P), ve && C.append(this.createSequenceWaitRow(ve, N));
        }), E.className = "wa-sequence-copy-panel", E.dataset.sequenceCopyPanel = "", F.className = "wa-sequence-copy-panel__meta", F.dataset.sequenceCopyMeta = "", F.textContent = A ? `${A.channel} 1` : "Email", O.className = "wa-sequence-copy-panel__subject", O.dataset.sequenceCopySubject = "", O.textContent = p.subject, L.className = "wa-sequence-copy-panel__body", L.dataset.sequenceCopyBody = "", L.textContent = A ? this.getSequenceStepCopy(p, A) : p.personalization, E.append(F, O, L), h.append(C, E);
      } else
        h.append(w, _, T);
      o.append(h);
    });
    const c = document.createElement("div");
    c.className = "wa-engage-channels", e.channels.forEach((p) => {
      const f = document.createElement("button");
      f.className = "wa-engage-channel", f.type = "button", f.tabIndex = -1;
      const h = document.createElement("span");
      h.className = "wa-engage-channel__copy";
      const w = document.createElement("strong");
      w.textContent = p.label;
      const b = document.createElement("span");
      if (b.textContent = p.detail, h.append(w, b), f.append(h), p.badge) {
        const y = document.createElement("span");
        y.className = "wa-engage-channel__badge", y.textContent = p.badge, f.dataset.badge = p.badge.toLowerCase(), f.append(y);
      }
      c.append(f);
    });
    const d = document.createElement("button"), u = document.createElement("span"), g = document.createElement("span");
    return d.className = "wa-sequence-kickoff", d.type = "button", d.tabIndex = -1, d.dataset.sequenceKickoff = e.id, d.setAttribute("aria-label", e.launchLabel ?? "kick off sequence"), u.className = "wa-sequence-kickoff__label", u.textContent = e.launchLabel ?? "kick off sequence", g.className = "wa-sequence-kickoff__detail", g.textContent = `Launch tailored touches for ${e.peopleCount}`, d.append(u, g), d.addEventListener("click", () => {
      this.sequenceKickoff(e.id).play();
    }), s ? t.append(...this.compactElements(n, l, o, d)) : t.append(n, o, c), t;
  }
  createSequenceThinkingStep(e, t, a, i) {
    const n = this.createThinkingStep(
      {
        label: e,
        detail: t,
        disclosure: a === 0 ? Ht : ua
      },
      a
    );
    n.querySelector(".wa-research-step__detail");
    const o = n.querySelector(".wa-research-step__body");
    if (typeof i == "number" && o) {
      const s = document.createElement("span"), l = document.createElement("span"), c = document.createElement("span"), d = document.createElement("span");
      s.className = "wa-sequence-thinking-progress", s.dataset.sequenceThinkingTrack = e, l.className = "wa-sequence-thinking-progress__count", l.textContent = `1/${i}`, c.className = "wa-sequence-thinking-progress__bar", d.setAttribute("aria-hidden", "true"), c.append(d), s.append(l, c), o.append(s);
    }
    return n;
  }
  findSequenceEngagement(e) {
    return this.queryElements(this.root, "[data-sequence-engagement]").find((t) => t.dataset.sequenceEngagement === e) ?? null;
  }
  clearSequencePersonCardMotionStyles(e) {
    const t = this.queryElements(e, "[data-sequence-person-card]");
    m.set(t, { clearProps: "opacity,visibility" });
  }
  createSequenceWaitRow(e, t) {
    const a = document.createElement("div"), i = document.createElement("span");
    return a.className = "wa-sequence-wait", a.dataset.sequenceWaitIndex = String(t), a.dataset.waitDays = String(e), i.className = "wa-sequence-wait__label", i.textContent = this.formatSequenceWaitLabel(e), a.append(i), a;
  }
  getSequenceStepWaitDays(e, t, a) {
    return t >= a - 1 ? null : e.waitDays ?? Ms[t] ?? 1;
  }
  formatSequenceWaitLabel(e) {
    return `wait ${e} ${e === 1 ? "day" : "days"}`;
  }
  formatSequenceChannelLabel(e) {
    const t = e.trim().toLowerCase();
    return t.includes("email") ? "Email" : t.includes("linkedin") || t.includes("social") ? "Social" : t.includes("call") || t.includes("dial") ? "Call" : e.trim() || "Step";
  }
  setActiveSequencePerson(e, t, a = !1) {
    const i = this.queryElements(e, "[data-sequence-card]"), n = this.queryElements(e, "[data-sequence-person-card]"), o = e.querySelector("[data-sequence-count]"), s = this.getSequenceDisplayCard(e), l = this.getSequenceTemplateCard(e, t);
    !s || !l || (i.forEach((c) => {
      const d = c === s;
      c.dataset.active = String(d), c.style.display = d ? "grid" : "none", m.set(c, { autoAlpha: d ? 1 : 0, y: 0 });
    }), e.dataset.activeSequenceIndex = String(t), this.applySequenceTemplateToDisplayCard(e, s, l, t), n.forEach((c) => {
      const d = Number(c.dataset.sequencePersonIndex) === t;
      c.dataset.active = String(d), c.setAttribute("aria-pressed", String(d));
    }), o && (o.textContent = this.getSequenceCountLabel(t, e.dataset.peopleCount ?? "")), a && this.centerSequencePersonCard(e, t));
  }
  centerSequencePersonCard(e, t) {
    const a = e.querySelector("[data-sequence-people-rail]"), i = a?.querySelector(`[data-sequence-person-index="${t}"]`);
    if (!a || !i) return;
    const n = this.getSequencePersonRailScrollTarget(a, i);
    if (this.prefersReducedMotion || Math.abs(a.scrollLeft - n) < 1) {
      a.scrollLeft = n;
      return;
    }
    m.to(a, {
      scrollLeft: n,
      duration: S(0.34),
      ease: "power2.out",
      overwrite: "auto"
    });
  }
  setSequencePersonRailPosition(e, t) {
    const a = e.querySelector("[data-sequence-people-rail]"), i = a?.querySelector(`[data-sequence-person-index="${t}"]`);
    !a || !i || (a.scrollLeft = this.getSequencePersonRailScrollTarget(a, i));
  }
  getSequencePersonRailScrollTarget(e, t) {
    const a = Math.max(0, e.scrollWidth - e.clientWidth);
    return Math.min(a, Math.max(0, t.offsetLeft - (e.clientWidth - t.offsetWidth) / 2));
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
  getSequenceTransitionTargets(e) {
    return this.compactElements(
      ...this.queryElements(e, ".wa-sequence-step__copy strong"),
      e.querySelector("[data-sequence-copy-meta]"),
      e.querySelector("[data-sequence-copy-subject]"),
      e.querySelector("[data-sequence-copy-body]")
    );
  }
  applySequenceTemplateToDisplayCard(e, t, a, i) {
    const n = this.getSelectedSequenceStepIndex(t), o = this.queryElements(t, ".wa-sequence-step"), s = this.queryElements(t, ".wa-sequence-wait"), l = this.queryElements(a, ".wa-sequence-step");
    t.dataset.sequenceName = a.dataset.sequenceTemplateName ?? a.dataset.sequenceName ?? "", t.dataset.sequenceMeta = a.dataset.sequenceTemplateMeta ?? a.dataset.sequenceMeta ?? "", o.forEach((c, d) => {
      const u = l[d], g = c.querySelector(".wa-sequence-step__channel"), p = c.querySelector(".wa-sequence-step__copy strong");
      if (!u) return;
      c.dataset.channel = u.dataset.channel ?? "", c.dataset.stepSubject = u.dataset.stepTemplateSubject ?? u.dataset.stepSubject ?? "", c.dataset.stepBody = u.dataset.stepTemplateBody ?? u.dataset.stepBody ?? "", c.dataset.waitDays = u.dataset.stepTemplateWaitDays ?? u.dataset.waitDays ?? "", g && (g.textContent = this.formatSequenceChannelLabel(u.dataset.stepTemplateChannel ?? g.textContent ?? "")), p && (p.textContent = u.dataset.stepTemplateLabel ?? p.textContent);
      const f = s[d], h = Number(c.dataset.waitDays), w = f?.querySelector(".wa-sequence-wait__label");
      f && (f.style.display = Number.isFinite(h) && h > 0 ? "grid" : "none", f.dataset.waitDays = String(h)), w && Number.isFinite(h) && h > 0 && (w.textContent = this.formatSequenceWaitLabel(h));
    }), e.dataset.activeSequenceIndex = String(i), this.selectSequenceStep(t, Math.min(n, Math.max(0, o.length - 1)));
  }
  selectSequenceStep(e, t) {
    const a = this.queryElements(e, ".wa-sequence-step"), i = a.find((c) => Number(c.dataset.stepIndex) === t) ?? a[0], n = e.querySelector("[data-sequence-copy-meta]"), o = e.querySelector("[data-sequence-copy-subject]"), s = e.querySelector("[data-sequence-copy-body]"), l = i?.querySelector(".wa-sequence-step__channel")?.textContent?.trim() ?? "email";
    a.forEach((c) => {
      const d = c === i;
      c.dataset.stepSelected = String(d), c.dataset.stepOpen = String(d), c.setAttribute("aria-pressed", String(d));
    }), n && (n.textContent = `${l} ${t + 1}`), o && (o.textContent = i?.dataset.stepSubject ?? ""), s && (s.textContent = i?.dataset.stepBody ?? "");
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
  slugChannelName(e) {
    return e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }
  revealCard(e) {
    const t = this.claimComponentMessage("result", e), a = e.querySelectorAll(".wa-result-row, .wa-result-action");
    return m.timeline().call(() => {
      e.style.display = "grid";
    }).add(this.revealMessageWithChildren(t, e, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: S(0.48),
      ease: "back.out(1.45)"
    }), 0).to(
      a,
      {
        autoAlpha: 1,
        y: 0,
        duration: S(0.32),
        ease: "power2.out",
        stagger: 0.06
      },
      "-=0.22"
    );
  }
  highlightCardTarget(e, t) {
    const a = typeof t == "string" ? e.querySelector(t) : t ?? e.querySelector(".wa-result-row, .wa-result-action") ?? e, i = m.timeline();
    return a && i.to(a, {
      backgroundColor: "rgba(213, 255, 79, 0.22)",
      scale: 1.018,
      duration: S(0.16),
      ease: "power2.out"
    }).to(a, {
      backgroundColor: "rgba(255, 255, 255, 0)",
      scale: 1,
      duration: S(0.42),
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
    const t = [];
    for (const a of e)
      a && t.push(a);
    return t;
  }
  getSwipeCards(e) {
    return e ? this.queryElements(e, "[data-swipe-card]") : [];
  }
  escapeSelectorValue(e) {
    return typeof CSS < "u" && "escape" in CSS ? CSS.escape(e) : e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  }
  clearCustomResults() {
    this.removeElements(
      "[data-result-grid] .wa-strategy-plan, [data-result-grid] .wa-data-table, [data-result-grid] .wa-enrichment-panel"
    );
  }
  clearMarketingPanels() {
    this.removeElements(ln);
  }
  getStorySwitchExitTargets() {
    return this.compactElements(
      this.isVisibleForStorySwitchExit(this.thread) ? this.thread : null,
      this.composerVisible && this.isVisibleForStorySwitchExit(this.composer) ? this.composer : null,
      this.isVisibleForStorySwitchExit(this.signupScene) ? this.signupScene : null,
      ...this.queryElements(this.chatBody, ln).filter(
        (e) => this.isVisibleForStorySwitchExit(e)
      )
    );
  }
  isVisibleForStorySwitchExit(e) {
    const t = window.getComputedStyle(e);
    if (t.display === "none" || t.visibility === "hidden" || (Number.parseFloat(t.opacity) || 0) <= 0.01) return !1;
    const a = e.getBoundingClientRect();
    return a.width > 0 && a.height > 0;
  }
  registerTransientElement(e, t) {
    this.transientCleanups.push(() => {
      t?.(), m.killTweensOf(e), e.remove();
    });
  }
  clearTransientElements() {
    for (const e of this.transientCleanups) e();
    this.transientCleanups = [], this.removeElements(sn);
  }
  removeElements(e) {
    this.root.querySelectorAll(e).forEach((t) => {
      m.killTweensOf(t), t.remove();
    });
  }
  getMessageScrollTarget(e, t = null, a = 0) {
    const i = t ? this.getAlignedElementScrollTarget(t, a) : this.getAlignedMessageScrollTarget(e);
    if (i !== null) return i;
    const n = e.offsetTop + e.offsetHeight + this.getThreadBottomPadding() - this.thread.clientHeight;
    return this.composerVisible ? Math.max(0, n, this.getThreadBottomScrollTarget()) : Math.max(0, n);
  }
  getAlignedMessageScrollTarget(e) {
    const t = e.matches('[data-scroll-align="equal-inset"]') ? e : e.querySelector('[data-scroll-align="equal-inset"]');
    return t ? this.getAlignedElementScrollTarget(t) : null;
  }
  getAlignedElementScrollTarget(e, t = 0) {
    const a = this.getElementSideInset(e), i = this.getElementOffsetTopWithinThread(e) - a + t;
    return Math.min(Math.max(0, i), this.getThreadBottomScrollTarget());
  }
  getElementSideInset(e) {
    const t = e.getBoundingClientRect(), a = this.chatBody.getBoundingClientRect(), i = Number.parseFloat(getComputedStyle(this.chatBody).paddingLeft) || 0, n = t.left - a.left;
    return Math.max(0, Number.isFinite(n) ? n : i);
  }
  getElementOffsetTopWithinThread(e) {
    let t = 0, a = e;
    for (; a && a !== this.thread; )
      t += a.offsetTop, a = a.offsetParent;
    if (a === this.thread) return t;
    const i = e.getBoundingClientRect(), n = this.thread.getBoundingClientRect();
    return this.thread.scrollTop + i.top - n.top;
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
  animateMessageScrollIntoView(e, t = He.followDuration, a = null, i = 0) {
    const n = this.getMessageScrollTarget(e, a, i);
    if (this.prefersReducedMotion || Math.abs(this.thread.scrollTop - n) < 1) {
      this.thread.scrollTop = n;
      return;
    }
    this.scrollTween?.kill(), this.scrollTween = m.to(this.thread, {
      scrollTop: n,
      duration: t,
      ease: He.followEase,
      overwrite: "auto",
      onComplete: () => {
        this.scrollTween = null;
      }
    });
  }
  requestMessageScroll(e) {
    const t = performance.now();
    this.scheduledScrollMessage = e, !(t - this.lastStreamScrollAt < Hs) && (this.scheduledScrollFrame || (this.lastStreamScrollAt = t, this.scheduledScrollFrame = window.requestAnimationFrame(() => {
      const a = this.scheduledScrollMessage;
      this.scheduledScrollFrame = 0, this.scheduledScrollMessage = null, a?.isConnected && this.animateMessageScrollIntoView(a);
    })));
  }
  cancelScheduledScroll() {
    this.scheduledScrollFrame && (window.cancelAnimationFrame(this.scheduledScrollFrame), this.scheduledScrollFrame = 0, this.scheduledScrollMessage = null, this.lastStreamScrollAt = 0);
  }
}
function Nt(r) {
  return Math.min(1, Math.max(0, r));
}
function Rr(r) {
  const e = Nt(r);
  return e * e * (3 - 2 * e);
}
function un(r) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(r)}`;
}
function Wa(r, e, t = "idle") {
  const a = r === "gmail" ? "Gmail" : "Outlook", i = e?.trim();
  if (!i) return t === "connected" ? "Connected" : a;
  const n = a.toLowerCase(), o = i.toLowerCase().replace(/\s+/g, " "), s = /* @__PURE__ */ new Set([
    n,
    `connect ${n}`,
    `${n} connected`,
    `connected ${n}`
  ]);
  return t === "connected" && (s.has(o) || o === "connected") ? "Connected" : s.has(o) ? a : i;
}
function Va(r, e) {
  const t = r?.trim();
  return t ? t.toLowerCase() === e.toLowerCase() ? e : t : e;
}
function Ws(r, e) {
  const t = Is[r] ?? 0, a = 24 + r * 11 % 8, i = Math.min(100, t + a), n = Rr((e - t) / (i - t));
  if (n <= 0) return 0;
  const o = Ls.has(r) ? 20 : 12;
  return Math.round(o + n * (100 - o));
}
function Vs(r, e) {
  return Math.hypot(e.x - r.x, e.y - r.y);
}
function qt(r, e, t) {
  return Math.min(t, Math.max(e, r));
}
function hn(r, e, t, a, i) {
  const n = 1 - i, o = i * i, s = n * n, l = s * n, c = o * i;
  return {
    x: l * r.x + 3 * s * i * e.x + 3 * n * o * t.x + c * a.x,
    y: l * r.y + 3 * s * i * e.y + 3 * n * o * t.y + c * a.y
  };
}
function Ys(r) {
  let e = 2166136261;
  for (let t = 0; t < r.length; t += 1)
    e ^= r.charCodeAt(t), e = Math.imul(e, 16777619);
  return e >>> 0;
}
function Ir(r) {
  let e = Ys(r) || 1;
  return () => {
    e += 1831565813;
    let t = e;
    return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
const js = {
  slow: 560,
  normal: 860,
  quick: 1220
}, Xs = {
  entry: 1.08,
  hover: 0.96,
  click: 0.9,
  drag: 1.18,
  text: 1.04,
  exit: 1
}, $s = 1.24;
function aa(r, e, t) {
  const a = Ir(t.seed), i = Vs(r, e), n = t.speed ?? "normal", o = t.intent ?? "hover";
  if (t.reducedMotion || i < 2)
    return {
      start: r,
      c1: r,
      c2: e,
      end: e,
      duration: t.reducedMotion ? 0.12 : 0.08
    };
  const s = e.x - r.x, l = e.y - r.y, c = s / i, d = l / i, u = -d, g = c, p = a() > 0.5 ? 1 : -1, f = t.curve ?? 1, w = qt(i * (o === "drag" ? 0.1 : o === "click" ? 0.17 : 0.22) * f, 18, 150) * p * (0.72 + a() * 0.44), b = i / js[n] + 0.16, y = qt(b * Xs[o] * $s, 0.3, 1.66), x = t.overshoot === !1 || i < 120 ? 0 : typeof t.overshoot == "number" ? t.overshoot : qt(i * 0.026, 4, 18), v = x > 0 ? {
    x: e.x + c * x,
    y: e.y + d * x
  } : e, _ = {
    x: r.x + s * (0.25 + a() * 0.08) + u * w,
    y: r.y + l * (0.25 + a() * 0.08) + g * w
  }, T = {
    x: r.x + s * (0.68 + a() * 0.12) - u * w * 0.42,
    y: r.y + l * (0.68 + a() * 0.12) - g * w * 0.42
  }, k = t.settle !== !1 && x > 0;
  return {
    start: r,
    c1: _,
    c2: T,
    end: v,
    duration: k ? y * 0.86 : y,
    settle: k ? {
      start: v,
      c1: {
        x: v.x - c * x * 0.45 + u * w * 0.04,
        y: v.y - d * x * 0.45 + g * w * 0.04
      },
      c2: {
        x: e.x + c * x * 0.16,
        y: e.y + d * x * 0.16
      },
      end: e,
      duration: qt(y * 0.18, 0.1, 0.24)
    } : void 0
  };
}
const Ya = "button, a, [role='button'], [data-send-button], [data-result-action]", ja = "[data-chat-input][data-visible='true'], [data-signup-field], input, textarea, [contenteditable='true']", Xa = {
  delay: 0.42,
  returnDuration: 0.18,
  segments: [
    { x: 1.6, y: -2.4, rotation: 0.28, duration: 1.55 },
    { x: -1.2, y: -3.1, rotation: -0.18, duration: 1.9 },
    { x: 0.8, y: -1.2, rotation: 0.16, duration: 1.45 },
    { x: 0, y: 0, rotation: 0, duration: 1.7 }
  ]
}, ia = {
  outsideOffset: 24,
  topRatio: 0.3,
  minTopInset: 74,
  maxTopInset: 190
}, Qs = -135, Ks = 0.34;
class Zs {
  constructor(e, t, a = {}) {
    this.root = e, this.resolver = t, this.options = a, this.el = this.root.querySelector("[data-cursor]") ?? this.createElement(), this.floatLayer = this.ensureFloatLayer(), this.setX = m.quickSetter(this.el, "x", "px"), this.setY = m.quickSetter(this.el, "y", "px"), this.setRotation = m.quickSetter(this.el, "rotation", "deg");
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
  payloadDragActive = !1;
  modeTargetsDirty = !0;
  pointerTargets = [];
  textTargets = [];
  targetObserver = null;
  lastModeSyncAt = 0;
  lastModeSyncPoint = { x: Number.NaN, y: Number.NaN };
  modeWatchFrame = 0;
  chatShell = null;
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
    this.stopIdleFloat(!0), this.modeOverride = "default", this.setMode("default"), this.el.dataset.cursorMimicking = "true", m.killTweensOf(this.el), m.set(this.el, { autoAlpha: 1, scale: 1 });
  }
  mimicViewportPoint(e, t = 0.42, a = e) {
    const i = this.root.getBoundingClientRect(), n = {
      x: e.x - i.left,
      y: e.y - i.top
    }, o = {
      x: a.x - i.left,
      y: a.y - i.top
    }, s = {
      x: this.currentPosition.x + (n.x - this.currentPosition.x) * t,
      y: this.currentPosition.y + (n.y - this.currentPosition.y) * t
    };
    this.modeOverride = "default", this.currentPosition = s, this.plannedPosition = { ...s }, this.renderPosition(s), this.setMode("default"), this.renderMimicRotation(s, o);
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
    const a = t.label ?? `move-${this.moveIndex}`, i = t.mode ?? "default", n = `${this.storyId}:${a}:${this.resolver.getBreakpoint()}`, o = this.resolver.resolve(e, n), s = { ...this.plannedPosition }, l = aa(s, o, {
      seed: n,
      intent: t.intent,
      speed: t.speed,
      curve: t.curve,
      overshoot: t.overshoot,
      settle: t.settle,
      reducedMotion: this.options.reducedMotion
    }), c = m.timeline();
    let d = null;
    return this.moveIndex += 1, this.plannedPosition = { ...o }, c.call(() => {
      this.stopIdleFloat(), this.resetRotation();
    }, void 0, 0), c.set(this.el, { autoAlpha: 1 }, 0), c.call(() => {
      this.modeOverride = i === "drag" ? "drag" : null, this.modeOverride ? this.setMode(this.modeOverride) : this.syncModeToPoint(this.currentPosition);
    }, void 0, 0), c.add(
      this.pathTweenFromFactory(
        () => {
          this.resolver.refresh();
          const u = this.resolver.resolve(e, n);
          return d = aa(this.currentPosition, u, {
            seed: n,
            intent: t.intent,
            speed: t.speed,
            curve: t.curve,
            overshoot: t.overshoot,
            settle: t.settle,
            reducedMotion: this.options.reducedMotion
          }), this.plannedPosition = { ...u }, d;
        },
        l.duration
      )
    ), l.settle && c.add(
      this.pathTweenFromFactory(
        () => d?.settle ?? {
          start: this.currentPosition,
          c1: this.currentPosition,
          c2: this.currentPosition,
          end: this.currentPosition,
          duration: 0.01
        },
        l.settle.duration,
        "power2.out"
      )
    ), t.preserveMode || c.call(() => {
      this.modeOverride = null, this.syncModeToPoint(this.currentPosition), this.queueIdleFloat();
    }), c;
  }
  parkForChatHistory() {
    const e = `history-park-${this.moveIndex}`, t = `${this.storyId}:${e}:${this.resolver.getBreakpoint()}`, a = { ...this.currentPosition }, i = this.resolveHistoryParkPoint(), n = aa(a, i, {
      seed: t,
      intent: "hover",
      speed: "quick",
      overshoot: !1,
      settle: !1,
      reducedMotion: this.options.reducedMotion
    }), o = m.timeline();
    return this.moveIndex += 1, this.plannedPosition = { ...i }, o.call(() => {
      this.stopIdleFloat(!0), m.killTweensOf([this.el, this.floatLayer]), this.resetRotation(!0), this.modeOverride = "default", this.setMode("default");
    }, void 0, 0), o.add(
      this.pathTweenFromFactory(
        () => this.createHistoryParkPlan(t),
        n.duration,
        "sine.inOut"
      )
    ), o.call(() => {
      this.modeOverride = null, this.syncModeToPoint(this.currentPosition), this.queueIdleFloat();
    }), o;
  }
  scanAcross(e, t = {}) {
    const a = t.label ?? `scan-${this.moveIndex}`, i = m.timeline();
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
    const t = m.timeline();
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
  beginDragPayload() {
    const e = this.payloadDragActive;
    this.payloadDragActive = !0, this.stopIdleFloat(), this.modeOverride = "drag", this.setMode("drag"), !e && m.to(this.el, {
      scale: 0.9,
      duration: this.options.reducedMotion ? 0.04 : 0.16,
      ease: "power2.out",
      overwrite: "auto"
    });
  }
  releaseDragPayload() {
    return m.timeline().call(() => {
      this.payloadDragActive = !1, this.stopIdleFloat(), this.modeOverride = "release", this.setMode("release");
    }).to(this.el, {
      scale: 1.04,
      duration: this.options.reducedMotion ? 0.03 : 0.1,
      ease: "power2.out",
      overwrite: "auto"
    }).to(this.el, {
      scale: 1,
      duration: this.options.reducedMotion ? 0.05 : 0.18,
      ease: "back.out(2.5)",
      overwrite: "auto"
    }).call(() => {
      this.modeOverride = null, this.syncModeToPoint(this.currentPosition), this.queueIdleFloat();
    });
  }
  dragTo(e, t = {}) {
    const a = m.timeline();
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
    this.stopIdleFloat(!0), this.modeOverride = null, this.payloadDragActive = !1, delete this.el.dataset.cursorMimicking, m.killTweensOf(this.el), m.set(this.el, { scale: 1 }), this.resetRotation(!0), this.syncModeToPoint(this.currentPosition), this.queueIdleFloat();
  }
  pathTween(e, t, a, i, n, o = "power2.inOut") {
    const s = { t: 0 };
    return m.fromTo(
      s,
      { t: 0 },
      {
        t: 1,
        duration: n,
        ease: o,
        onUpdate: () => {
          const l = hn(e, t, a, i, s.t);
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
    let n = null;
    return m.fromTo(
      i,
      { t: 0 },
      {
        t: 1,
        duration: t,
        ease: a,
        onStart: () => {
          i.t = 0, n = e();
        },
        onUpdate: () => {
          if (!n) return;
          const o = hn(n.start, n.c1, n.c2, n.end, i.t);
          this.currentPosition = o, this.renderPosition(o), this.modeOverride || this.maybeSyncModeToPoint(o);
        },
        onComplete: () => {
          n && (this.currentPosition = { ...n.end }, this.plannedPosition = { ...n.end }, this.renderPosition(n.end), this.modeOverride || this.syncModeToPoint(n.end));
        }
      }
    );
  }
  createHistoryParkPlan(e) {
    this.resolver.refresh();
    const t = this.resolveHistoryParkPoint(), a = aa(this.currentPosition, t, {
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
    const e = this.root.getBoundingClientRect(), t = this.getChatShellRect();
    if (!t) return { ...this.currentPosition };
    const a = qt(
      t.height * ia.topRatio,
      ia.minTopInset,
      ia.maxTopInset
    );
    return {
      x: t.right - e.left + ia.outsideOffset,
      y: t.top - e.top + a
    };
  }
  pointTweenFromFactory(e, t, a = "power2.inOut") {
    const i = { t: 0 };
    let n = { ...this.currentPosition }, o = { ...this.currentPosition };
    return m.fromTo(i, { t: 0 }, {
      t: 1,
      duration: t,
      ease: a,
      onStart: () => {
        i.t = 0, n = { ...this.currentPosition }, o = e();
      },
      onUpdate: () => {
        const s = {
          x: n.x + (o.x - n.x) * i.t,
          y: n.y + (o.y - n.y) * i.t
        };
        this.currentPosition = s, this.renderPosition(s);
      },
      onComplete: () => {
        this.currentPosition = { ...o }, this.plannedPosition = { ...this.currentPosition }, this.renderPosition(this.currentPosition);
      }
    });
  }
  resolveScanPath(e, t, a = "first") {
    const i = { ...this.currentPosition }, n = this.resolveScanPoint(e, `${t}:start`, "start", a), o = this.resolveScanPoint(e, `${t}:end`, "end", a);
    return {
      start: i,
      c1: gn(i, n, 0.64),
      c2: gn(n, o, 0.42),
      end: o
    };
  }
  resolveScanPoint(e, t, a, i = "first") {
    const n = typeof e == "string" ? this.findVisibleScanElement(e, i) : e;
    if (!n) return this.currentPosition;
    this.resolver.refresh();
    const o = this.seededScanRandom(t), s = this.root.getBoundingClientRect(), l = n.getBoundingClientRect(), c = this.getChatShellRect(), d = c ? Math.max(l.left, c.left + 18) : l.left, u = c ? Math.min(l.right, c.right - 18) : l.right, g = c ? Math.max(l.top, c.top + 58) : l.top, p = c ? Math.min(l.bottom, c.bottom - 34) : l.bottom, f = Math.max(1, u - d), h = Math.max(1, p - g), w = a === "start" ? 0.16 + o() * 0.08 : 0.76 + o() * 0.12, b = 0.34 + o() * 0.32;
    return {
      x: d - s.left + f * w,
      y: g - s.top + h * b
    };
  }
  findVisibleScanElement(e, t = "first") {
    const a = this.root.querySelectorAll(e);
    if (t === "last") {
      for (let i = a.length - 1; i >= 0; i -= 1) {
        const n = a.item(i);
        if (n && this.isVisibleScanElement(n)) return n;
      }
      return null;
    }
    for (const i of a)
      if (this.isVisibleScanElement(i)) return i;
    return null;
  }
  isVisibleScanElement(e) {
    return !!this.getVisibleRect(e);
  }
  getVisibleRect(e) {
    const t = window.getComputedStyle(e);
    if (t.display === "none" || t.visibility === "hidden" || Number(t.opacity) <= 0.01) return null;
    const a = e.getBoundingClientRect();
    return a.width > 0 && a.height > 0 ? a : null;
  }
  getChatShell() {
    return this.chatShell?.isConnected ? this.chatShell : (this.chatShell = this.root.querySelector("[data-chat-shell]"), this.chatShell);
  }
  getChatShellRect() {
    return this.getChatShell()?.getBoundingClientRect() ?? null;
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
    const n = Math.atan2(i, a) * 180 / Math.PI, o = Js(n - Qs), s = this.rotationState + el(this.rotationState, o) * Ks;
    this.renderRotation(s);
  }
  resetRotation(e = !1) {
    if (m.killTweensOf(this.el, "rotation"), e || this.options.reducedMotion) {
      this.renderRotation(0);
      return;
    }
    m.to(this.el, {
      rotation: 0,
      duration: 0.16,
      ease: "power2.out",
      overwrite: "auto",
      onUpdate: () => {
        this.rotationState = Number(m.getProperty(this.el, "rotation")) || 0;
      },
      onComplete: () => {
        this.rotationState = 0;
      }
    });
  }
  renderRotation(e) {
    Math.abs(e - this.rotationState) < 0.1 || (this.rotationState = e, this.setRotation(e));
  }
  queueIdleFloat(e = Xa.delay) {
    this.options.reducedMotion || (this.idleFloatDelay?.kill(), this.idleFloatDelay = m.delayedCall(e, () => this.startIdleFloat()));
  }
  startIdleFloat() {
    if (this.options.reducedMotion || this.idleFloat?.isActive()) return;
    m.killTweensOf(this.floatLayer);
    const e = m.timeline({ repeat: -1 });
    for (const t of Xa.segments)
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
      m.set(this.floatLayer, { x: 0, y: 0, rotation: 0 });
      return;
    }
    m.to(this.floatLayer, {
      x: 0,
      y: 0,
      rotation: 0,
      duration: Xa.returnDuration,
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
    if (this.payloadDragActive) {
      this.modeOverride = "drag", this.mode !== "drag" && this.setMode("drag");
      return;
    }
    const t = this.getModeForPoint(e);
    t !== this.mode && this.setMode(t);
  }
  getModeForPoint(e) {
    const t = this.root.getBoundingClientRect(), a = {
      x: t.left + e.x,
      y: t.top + e.y
    }, i = a.x >= 0 && a.x <= window.innerWidth && a.y >= 0 && a.y <= window.innerHeight ? document.elementFromPoint(a.x, a.y) : null, n = this.getModeForElement(i);
    return n !== "default" ? n : this.getModeForLocalPoint(e, t);
  }
  getModeForElement(e) {
    return e ? e.closest(Ya) ? "pointer" : e.closest(ja) ? "text" : "default" : "default";
  }
  getModeForLocalPoint(e, t) {
    return this.refreshModeTargetCache(), this.findLocalHit(this.pointerTargets, e, t, Ya) ? "pointer" : this.findLocalHit(this.textTargets, e, t, ja) ? "text" : "default";
  }
  findLocalHit(e, t, a, i) {
    for (const n of e) {
      if (!n.matches(i)) continue;
      const o = this.getVisibleRect(n);
      if (!o) continue;
      const s = o.left - a.left, l = o.right - a.left, c = o.top - a.top, d = o.bottom - a.top;
      if (t.x >= s && t.x <= l && t.y >= c && t.y <= d) return n;
    }
    return null;
  }
  refreshModeTargetCache() {
    this.modeTargetsDirty && (this.pointerTargets = Array.from(this.root.querySelectorAll(Ya)).reverse(), this.textTargets = Array.from(this.root.querySelectorAll(ja)).reverse(), this.modeTargetsDirty = !1);
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
    return a.className = "wa-cursor__glyph", a.append(pn()), t.append(a), e.append(t), this.root.append(e), e;
  }
  ensureFloatLayer() {
    const e = this.el.querySelector("[data-cursor-float]");
    if (e) return e;
    const t = this.el.querySelector(".wa-cursor__glyph") ?? document.createElement("div");
    t.classList.contains("wa-cursor__glyph") || (t.className = "wa-cursor__glyph"), t.querySelector(".wa-cursor__mimic-head") || t.append(pn());
    const a = document.createElement("div");
    return a.className = "wa-cursor__float", a.dataset.cursorFloat = "", a.append(t), this.el.append(a), a;
  }
}
function pn() {
  const r = document.createDocumentFragment(), e = document.createElement("span"), t = document.createElement("span");
  return e.className = "wa-cursor__mimic-tail", t.className = "wa-cursor__mimic-head", e.setAttribute("aria-hidden", "true"), t.setAttribute("aria-hidden", "true"), r.append(e, t), r;
}
function gn(r, e, t) {
  return {
    x: r.x + (e.x - r.x) * t,
    y: r.y + (e.y - r.y) * t
  };
}
function Js(r) {
  return (r % 360 + 360) % 360;
}
function el(r, e) {
  return (e - r + 540) % 360 - 180;
}
const mn = /* @__PURE__ */ new Set();
function fn(r, e) {
  r.length && (wn(r[e]), wn(r[(e + 1) % r.length]));
}
function wn(r) {
  if (r?.assetUrls?.length)
    for (const e of r.assetUrls) al(e);
}
function Ot(r) {
  const e = /* @__PURE__ */ new Set(), t = (a) => tl(e, a.values);
  return r.rows.forEach(t), r.pagination?.pages.forEach((a) => a.rows.forEach(t)), [...e];
}
function Lr(r) {
  return r.sources.map((e) => e.logoSrc).filter(Qt);
}
function Dr(r) {
  return r.leads.map((e) => Sa(e.name, e.avatarUrl)).filter(Qt);
}
function Nr(r) {
  return r.sequences.map((e) => Sa(e.name, e.avatarUrl)).filter(Qt);
}
function tl(r, e) {
  for (const t of ["avatarUrl", "mutualConnectionAvatarUrl"])
    Qt(e[t]) && r.add(e[t]);
  for (const t of ["name", "contact", "prospect", "fullName", "mutualConnection", "connector"]) {
    const a = e[t];
    if (!a) continue;
    const i = t === "mutualConnection" || t === "connector" ? e.mutualConnectionAvatarUrl : e.avatarUrl, n = Sa(a, i);
    Qt(n) && r.add(n);
  }
}
function al(r) {
  if (typeof document > "u" || typeof Image > "u") return;
  const e = nl(r);
  if (!e || mn.has(e)) return;
  mn.add(e), il(e);
  const t = new Image();
  t.decoding = "async", t.loading = "eager", t.src = e, t.decode?.().catch(() => {
  });
}
function il(r) {
  if (Array.from(document.head.querySelectorAll('link[rel="preload"][as="image"]')).some((a) => a.href === r)) return;
  const t = document.createElement("link");
  t.rel = "preload", t.as = "image", t.href = r, document.head.append(t);
}
function nl(r) {
  try {
    return new URL(r, document.baseURI).href;
  } catch {
    return null;
  }
}
function Qt(r) {
  return typeof r == "string" && r.trim().length > 0;
}
const M = {
  typeShort: 0.92,
  typeMedium: 1.16,
  typeLong: 1.34,
  thinkingShort: 0.92,
  thinkingMedium: 1.3,
  beat: 0.26
};
function $a(r) {
  return typeof r == "number" ? { x: r, y: 0 } : r;
}
function q(r, e, t = {}, a = !0) {
  return {
    desktop: { target: r, anchor: e, offset: $a(t.desktop), humanOffset: a },
    tablet: { target: r, anchor: e, offset: $a(t.tablet), humanOffset: a },
    mobile: { target: r, anchor: e, offset: $a(t.mobile), humanOffset: a }
  };
}
const ya = {
  hitGroundRunning: q("[data-chat-input]", "center", { desktop: -72, tablet: -68, mobile: -54 }),
  dataMarketplace: q("[data-chat-input]", "center", { desktop: -54, tablet: -52, mobile: -44 }),
  crmUpdate: q("[data-chat-input]", "center", { desktop: -42, tablet: -46, mobile: -36 }),
  researchBrief: q("[data-chat-input]", "center", { desktop: -70, tablet: -62, mobile: -50 }),
  supportResolution: q("[data-chat-input]", "center", { desktop: -62, tablet: -58, mobile: -46 })
}, qr = q("[data-signup-field]", "center", {
  desktop: -74,
  tablet: -66,
  mobile: -48
}), Or = q("[data-signup-submit]", "center"), rl = q("[data-send-button]", "center"), Di = {
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
}, ol = 2.8, sl = 42, ll = 2, cl = 3, _a = "[data-chat-shell] [data-chat-thread]", dl = `${_a} [data-message-role="assistant"]:not(.wa-message--component) [data-message-body]`, ul = `${_a} [data-message-role="assistant"].wa-message--thinking .wa-research-step[data-step-state="current"] .wa-research-step__body, ${_a} [data-message-role="assistant"].wa-message--thinking .wa-research-step[data-step-state="complete"] .wa-research-step__label`, pi = 0.24, Br = 0.3, Oe = {
  right: { target: "[data-chat-shell]", anchor: "right", outside: "right" },
  bottomRight: { target: "[data-chat-shell]", anchor: "bottomRight", outside: "bottom" }
};
function je(r = Oe.right, e) {
  return {
    kind: "cursorMove",
    target: r,
    options: { intent: "exit", label: "exit" },
    at: e
  };
}
function Te(r, e) {
  const t = Ca(r), a = yl();
  for (const [i, n] of e.entries())
    hl(t, r, n, i, a);
  return Ta(t);
}
function hl(r, e, t, a, i) {
  switch (t.kind) {
    case "prompt":
      r.add(xl(e, t), t.at);
      return;
    case "status":
      r.add(e.chat.setStatus(t.text), t.at);
      return;
    case "cursorClick":
      r.add(e.cursor.click(t.nextMode), t.at);
      return;
    case "typeSignupEmail":
      r.add(e.chat.typeSignupEmail(t.email, t.duration), t.at);
      return;
    case "transitionSignupToChat":
      r.add(e.chat.transitionSignupToChat(), t.at);
      return;
    case "assistant":
      r.add(e.chat.assistantMessage(t.text), t.at), bl(r, e, i, {
        kind: "assistant",
        key: t.text,
        text: t.text,
        selector: dl,
        label: `assistant-${gi(t.text)}`,
        stepIndex: a
      });
      return;
    case "thinking": {
      const n = pl(t), o = n.items.map((s) => s.label);
      t.statusBefore && r.add(e.chat.setStatus(t.statusBefore), t.at), r.add(e.chat.thinkingState(n, t.hold), t.statusBefore ? void 0 : t.at), wl(r, e, i, t.hold, o.length, o.join("|"), a);
      return;
    }
    case "dataTable":
      It(
        r,
        e,
        e.chat.dataTable(t.config),
        t.at,
        mt(`[data-data-table="${qe(t.config.id)}"]`),
        `table-${t.config.id}`
      );
      return;
    case "enrichmentPanel":
      It(
        r,
        e,
        e.chat.enrichmentPanel(t.config),
        t.at,
        mt(`[data-enrichment-panel="${qe(t.config.id)}"]`),
        `enrichment-${t.config.id}`
      );
      return;
    case "strategyPlans":
      {
        const n = mt(`[data-strategy-plans~="${qe(t.plans[0]?.id ?? "strategy")}"]`);
        r.add(e.chat.strategyPlans(t.plans), t.at), r.add(fl(e, n, t.plans), "+=0.06");
      }
      return;
    case "dataSourcesGrid":
      It(
        r,
        e,
        e.chat.dataSourcesGrid(t.config),
        t.at,
        mt(`[data-data-sources-grid="${qe(t.config.id)}"]`),
        `sources-${t.config.id}`
      );
      return;
    case "marketingDataSourcesGrid":
      It(
        r,
        e,
        e.chat.marketingDataSourcesGrid(t.config),
        t.at,
        `[data-marketing-data-sources-grid="${qe(t.config.id)}"]`,
        `marketing-sources-${t.config.id}`
      );
      return;
    case "personalizationSwipeGame":
      gl(r, e, t.config, t.at);
      return;
    case "sequenceEngagement":
      It(
        r,
        e,
        e.chat.sequenceEngagement(t.config),
        t.at,
        mt(`[data-sequence-engagement="${qe(t.config.id)}"]`),
        `sequence-${t.config.id}`
      );
      return;
    case "cursorMove":
      r.add(e.cursor.moveTo(t.target, t.options), t.at);
      return;
    case "cursorDrag":
      r.add(e.cursor.dragTo(t.target, t.options), t.at);
      return;
    case "custom":
      r.add(t.build(e), t.at);
      return;
  }
}
function pl(r) {
  return "thinking" in r && r.thinking ? r.thinking : Array.isArray(r.steps) ? { items: r.steps.map(bn) } : { items: [bn(r.label ?? "")] };
}
function bn(r) {
  return typeof r == "string" ? { label: r } : r;
}
function It(r, e, t, a, i, n) {
  r.add(t, a), r.add(ml(e, i, n), "+=0.06");
}
function gl(r, e, t, a) {
  const i = mt(
    `[data-personalization-swipe-game="${qe(t.id)}"]`
  );
  r.add(e.chat.personalizationSwipeGame(t), a), t.signals.forEach((n, o) => {
    const s = `${i} [data-swipe-card="${qe(n.id)}"]`, l = n.decision === "use" ? 1 : -1, c = n.decision === "use" ? "right" : "left", d = q(s, c, {
      desktop: { x: l * 154, y: o % 2 === 0 ? -18 : 16 },
      tablet: { x: l * 132, y: o % 2 === 0 ? -14 : 14 },
      mobile: { x: l * 86, y: o % 2 === 0 ? -10 : 10 }
    }, !1);
    r.add(
      e.cursor.moveTo(q(s, "center", {}, !1), {
        intent: "hover",
        mode: "default",
        speed: o === 0 ? "normal" : "quick",
        overshoot: !1,
        settle: !1,
        label: `swipe-card-${n.id}-center`
      }),
      o === 0 ? "+=0.2" : "+=0.12"
    ), r.add(
      e.cursor.dragTo(d, {
        speed: "slow",
        releaseHold: 0.08,
        label: `swipe-card-${n.id}-${n.decision}`
      }),
      "-=0.02"
    ), r.add(e.chat.swipePersonalizationCard(t.id, n.id, n.decision), "<+=0.2");
  }), r.add(
    e.cursor.moveTo(Di, {
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
function ml(r, e, t) {
  const a = Ca(r).add(r.cursor.scanAcross(e, { label: t }));
  return Ta(a);
}
function fl(r, e, t) {
  const a = Ca(r);
  return t.forEach((i, n) => {
    const o = `${e} [data-strategy-plan="${qe(i.id)}"]`;
    a.add(
      r.cursor.scanAcross(o, {
        duration: n === 0 ? 0.42 : 0.34,
        label: `strategy-card-${i.id}`
      }),
      n === 0 ? 0 : "+=0.03"
    ), a.add(r.chat.strategyPlanHover(o, !0), "<+=0.08"), a.add(r.chat.strategyPlanHover(o, !1), "-=0.04");
  }), Ta(a);
}
function wl(r, e, t, a = M.thinkingShort, i = 1, n = "thinking", o = 0) {
  const s = a * Math.max(1, i), l = i >= 3 && zr(e, t, {
    kind: "thinking",
    key: n,
    text: n,
    stepIndex: o,
    minChars: 16
  });
  l && r.add(
    e.cursor.scanAcross(ul, {
      label: `thinking-skim-${gi(n)}`,
      match: "last",
      duration: 0.72
    }),
    "<+=0.58"
  ), !(s < ol) && r.add(
    e.cursor.moveTo(Di, {
      intent: "hover",
      mode: "default",
      speed: "slow",
      overshoot: !1,
      settle: !1,
      label: `thinking-idle-${gi(n)}`
    }),
    l ? "+=0.08" : "<+=0.08"
  );
}
function bl(r, e, t, a) {
  zr(e, t, a) && r.add(
    e.cursor.scanAcross(a.selector, {
      label: `text-skim-${a.label}`,
      match: "last",
      duration: 0.68
    }),
    "+=0.04"
  );
}
function yl() {
  return {
    textCandidateCount: 0,
    textSkimCount: 0,
    lastTextSkimStep: Number.NEGATIVE_INFINITY
  };
}
function zr(r, e, t) {
  const a = t.text.trim(), i = t.minChars ?? sl;
  if (a.length < i || e.textSkimCount >= cl) return !1;
  const n = e.textCandidateCount;
  e.textCandidateCount += 1;
  const o = e.textSkimCount === 0, s = t.stepIndex - e.lastTextSkimStep >= ll, l = _l(`${r.story.id}:${t.kind}:${n}:${t.key}`), c = n > 0 && n % 3 === 0, d = o || s && (l >= 0.58 || c);
  return d && (e.textSkimCount += 1, e.lastTextSkimStep = t.stepIndex), d;
}
function _l(r) {
  let e = 2166136261;
  for (let a = 0; a < r.length; a += 1)
    e ^= r.charCodeAt(a), e = Math.imul(e, 16777619);
  e += 1831565813;
  let t = e;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function qe(r) {
  return r.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function mt(r) {
  return `${_a} ${r}`;
}
function gi(r) {
  return r.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 36) || "state";
}
function xl(r, e) {
  const t = Ca(r);
  return e.statusBefore && t.add(r.chat.setStatus(e.statusBefore)), t.add(r.chat.showComposer(), e.statusBefore ? "-=0.02" : void 0), e.fromEntry || t.add(
    r.cursor.moveTo(e.focusTarget ?? r.story.entry, {
      mode: "text",
      intent: "text",
      speed: "normal",
      label: `focus-${e.sendLabel}`
    }),
    "-=0.18"
  ), t.add(r.cursor.click("text"), "-=0.02").add(r.chat.setComposerFocus(!0), "-=0.14").add(r.chat.typeComposer(e.text, e.duration ?? M.typeMedium)).add(
    r.cursor.moveTo(rl, {
      mode: "pointer",
      intent: "click",
      speed: "quick",
      label: e.sendLabel
    }),
    "-=0.16"
  ).add(r.cursor.click()).add(r.chat.setComposerFocus(!1), "-=0.08").add(r.chat.sendComposerText(), "-=0.06").add(r.chat.userMessage(e.text), "-=0.12").add(r.chat.hideComposer(), "<").add(r.chat.clearComposer()).add(
    r.cursor.moveTo(Di, {
      intent: "hover",
      mode: "default",
      speed: "slow",
      overshoot: !1,
      settle: !1,
      label: `post-interaction-${e.sendLabel}`
    }),
    "-=0.12"
  ), e.statusAfter && t.add(r.chat.setStatus(e.statusAfter), "<"), Ta(t);
}
function Ca(r) {
  const e = r.timeline();
  return e.pause(0), e;
}
function Ta(r) {
  return r.paused(!1), r;
}
const vl = {
  desktop: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 180, y: -74 }, humanOffset: !1 },
  tablet: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 144, y: -58 }, humanOffset: !1 },
  mobile: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 96, y: -42 }, humanOffset: !1 }
};
function kl(r, e) {
  const t = new Map(r.map((a) => [a.id, a]));
  return e.map((a) => {
    const i = t.get(a.id);
    return i ? Al(i, a) : a;
  });
}
function Al(r, e) {
  return {
    ...e,
    label: r.label,
    navLabel: r.label,
    navDescription: r.summary || e.navDescription,
    summary: r.summary || e.summary,
    assetUrls: Sl(r),
    entry: Cl(r.id, e),
    entryLeadTime: Tl(r.id, e),
    prepare: r.id === "hit-ground-running" ? (t) => t.chat.prepareSignup() : e.prepare,
    build: (t) => El(t, r, e)
  };
}
function Sl(r) {
  const e = /* @__PURE__ */ new Set();
  for (const t of r.steps) {
    if (t.kind !== "component" || !t.component) continue;
    const a = t.component;
    a.kind === "table" && Ot(Kt(a, `${r.id}-${t.id}`)).forEach((i) => e.add(i)), a.kind === "dataSources" && Lr(Ur(a)).forEach((i) => e.add(i)), a.kind === "proximityList" && Dr(Yr(a)).forEach((i) => e.add(i)), a.kind === "sequenceEngagement" && Nr(Ni(a, `${r.id}-${t.id}`)).forEach((i) => e.add(i));
  }
  return [...e];
}
function Cl(r, e) {
  return r === "hit-ground-running" ? qr : r === "data-marketplace" ? ya.dataMarketplace : r === "research-brief" ? ya.researchBrief : e.entry;
}
function Tl(r, e) {
  return r === "hit-ground-running" ? Br : r === "data-marketplace" || r === "research-brief" ? pi : e.entryLeadTime;
}
function El(r, e, t) {
  if (e.id === "hit-ground-running") return Ml(r, e);
  if (e.id === "crm-update") return Pl(r, e);
  if (e.id === "research-brief") return Rl(r, e);
  if (e.id === "csv-import-cleanup") return Il(r, e);
  const a = ql(e);
  return a.length ? Te(r, [...a, je(Oe.bottomRight, "+=0.18")]) : t.build(r);
}
function Ml(r, e) {
  const t = Be(e, "status"), a = Be(e, "user"), i = Be(e, "thinking"), n = Be(e, "assistant"), o = Zt(e, "strategyCards");
  return Te(r, [
    { kind: "status", text: t?.text || "Sign up" },
    { kind: "cursorClick", nextMode: "text", at: "-=0.04" },
    { kind: "typeSignupEmail", email: a?.text || "joel@vercel.com", duration: M.typeShort },
    {
      kind: "cursorMove",
      target: Or,
      options: { mode: "pointer", intent: "click", speed: "quick", label: "signup-submit" },
      at: "-=0.04"
    },
    { kind: "cursorClick", nextMode: "default", at: "-=0.03" },
    { kind: "custom", build: () => r.chat.submitSignup(), at: "<" },
    { kind: "status", text: "Building workspace", at: "-=0.08" },
    { kind: "custom", build: () => r.chat.transferSignupLogoToNextThinking(), at: "<" },
    { kind: "transitionSignupToChat", at: `+=${M.beat}` },
    ...i ? [{ kind: "status", text: i.text || "Researching", at: "<" }] : [],
    ...i ? [Ea(i, { hold: 0.46, at: "<" })] : [],
    ...n ? [{ kind: "assistant", text: n.text }] : [],
    ...o ? [{ kind: "status", text: "Game plans ready", at: "<" }] : [],
    ...o ? [{ kind: "strategyPlans", plans: Hr(o.component), at: "-=0.08" }] : [],
    je(Oe.right, "+=0.18")
  ]);
}
function Pl(r, e) {
  const t = Zt(e, "mailboxConnection"), a = Zt(e, "uploadedFiles"), i = [];
  if (t && Vr(i, Wr(t.component)), a) {
    const n = Gr(a.component), o = r.chat.prepareCsvDropArea({
      title: a.component.title,
      detail: n.map((d) => d.name).join(", ")
    }), s = n.length > 1 ? `${n.length} context files` : n[0]?.name ?? a.text, l = r.chat.prepareCursorFile(s, r.cursor, n[0]?.type ?? "DOC", n), c = q("[data-chat-shell]", "center", {
      desktop: { x: 0, y: 74 },
      tablet: { x: 0, y: 64 },
      mobile: { x: 0, y: 56 }
    });
    i.push(
      { kind: "status", text: "waiting for context" },
      {
        kind: "cursorMove",
        target: vl,
        options: {
          mode: "default",
          intent: "exit",
          speed: "slow",
          overshoot: !1,
          settle: !0,
          label: "context-file-pickup"
        },
        at: "+=0.08"
      },
      { kind: "custom", build: () => l.startFollow(), at: "+=0.02" },
      { kind: "custom", build: () => o.revealWhenCursorEnters(r.cursor), at: "<" },
      {
        kind: "cursorMove",
        target: c,
        options: {
          mode: "drag",
          intent: "drag",
          speed: "slow",
          overshoot: !1,
          settle: !0,
          preserveMode: !0,
          label: "drag-context-files"
        },
        at: "<"
      },
      { kind: "custom", build: () => o.activate(), at: "<+=0.02" },
      { kind: "custom", build: () => r.timeline().to({}, { duration: M.beat }) },
      { kind: "custom", build: () => o.complete() },
      { kind: "custom", build: () => l.landAsUploadedFiles(n), at: "<" }
    );
  }
  for (const n of e.steps)
    n === t || n === a || Fr(i, e.id, n);
  return i.push(je(Oe.bottomRight, "+=0.16")), Te(r, i);
}
function Rl(r, e) {
  const t = Be(e, "user"), a = Zt(e, "table"), i = Be(e, "thinking"), n = Zt(e, "sequenceEngagement"), o = a ? Kt(a.component, "website-visitors-sales") : null, s = n ? Ni(n.component, "visitor-outreach-sequences") : null, l = [];
  if (t && l.push({
    kind: "prompt",
    text: t.text,
    duration: jr(t.text),
    sendLabel: "send-visitor-sales-list",
    statusBefore: "finding visitors",
    statusAfter: "building visitor list",
    fromEntry: !0
  }), o && l.push({ kind: "dataTable", config: o, at: "-=0.02" }), o?.pagination && o.pagination.pages.length > 1) {
    const c = q(
      '[data-data-table="website-visitors-sales"] [data-table-page-button="2"]',
      "center"
    ), d = q(
      '[data-data-table="website-visitors-sales"] [data-table-action="power-dialer"]',
      "center",
      { desktop: { x: 5, y: 0 }, tablet: { x: 4, y: 0 }, mobile: { x: 3, y: 0 } },
      !1
    ), u = q(
      '[data-data-table="website-visitors-sales"] [data-table-action="email-sequence"]',
      "center",
      {},
      !1
    );
    l.push(
      {
        kind: "cursorMove",
        target: c,
        options: { mode: "pointer", intent: "click", speed: "normal", label: "open-visitor-page-2" },
        at: "+=0.2"
      },
      { kind: "cursorClick", at: "-=0.02" },
      { kind: "custom", build: () => r.chat.dataTablePage("website-visitors-sales", 2), at: "-=0.03" },
      { kind: "status", text: "ready to engage", at: "+=0.1" },
      { kind: "custom", build: () => r.timeline().to({}, { duration: M.beat + 0.58 }) },
      {
        kind: "cursorMove",
        target: d,
        options: { mode: "pointer", intent: "hover", speed: "slow", label: "hover-power-dialer" },
        at: "+=0.42"
      },
      { kind: "custom", build: () => r.chat.dataTableActionTooltip("website-visitors-sales", "power-dialer", !0) },
      { kind: "custom", build: () => r.timeline().to({}, { duration: M.beat + 1 }), at: "+=0.12" },
      { kind: "custom", build: () => r.chat.dataTableActionTooltip("website-visitors-sales", "power-dialer", !1) },
      {
        kind: "cursorMove",
        target: u,
        options: { mode: "pointer", intent: "hover", speed: "slow", label: "hover-email-sequence" }
      },
      { kind: "custom", build: () => r.chat.dataTableActionTooltip("website-visitors-sales", "email-sequence", !0) },
      { kind: "cursorClick", at: "+=0.18" },
      { kind: "custom", build: () => r.chat.dataTableActionTooltip("website-visitors-sales", "email-sequence", !1), at: "<+=0.02" },
      { kind: "status", text: "building outreach sequence", at: "<" }
    );
  }
  if (i && l.push(Ea(i, { hold: M.thinkingMedium, at: "+=0.06" })), s) {
    const [c, d] = Pr(s, 2), u = q(
      `[data-sequence-person-card="visitor-outreach-sequences:${c}"]`,
      "center"
    ), g = q(
      `[data-sequence-person-card="visitor-outreach-sequences:${d}"]`,
      "center"
    ), p = q(
      '[data-sequence-kickoff="visitor-outreach-sequences"]',
      "center"
    );
    l.push(
      { kind: "sequenceEngagement", config: s, at: "-=0.02" },
      { kind: "custom", build: () => r.timeline().to({}, { duration: M.beat + 0.24 }), at: "+=0.04" },
      {
        kind: "cursorMove",
        target: u,
        options: { mode: "pointer", intent: "click", speed: "normal", label: "preview-second-sequence" }
      },
      { kind: "cursorClick", at: "-=0.02" },
      { kind: "custom", build: () => r.chat.sequencePerson("visitor-outreach-sequences", c), at: "-=0.03" },
      { kind: "custom", build: () => r.timeline().to({}, { duration: M.beat + 0.24 }), at: "+=0.04" },
      {
        kind: "cursorMove",
        target: g,
        options: { mode: "pointer", intent: "click", speed: "normal", label: "preview-third-sequence" }
      },
      { kind: "cursorClick", at: "-=0.02" },
      { kind: "custom", build: () => r.chat.sequencePerson("visitor-outreach-sequences", d), at: "-=0.03" },
      { kind: "custom", build: () => r.timeline().to({}, { duration: M.beat + 0.28 }), at: "+=0.04" },
      {
        kind: "cursorMove",
        target: p,
        options: { mode: "pointer", intent: "click", speed: "normal", label: "kickoff-visitor-sequence" }
      },
      { kind: "cursorClick", at: "-=0.02" },
      { kind: "custom", build: () => r.chat.sequenceKickoff("visitor-outreach-sequences"), at: "-=0.04" },
      { kind: "status", text: "sequence kicked off", at: "<" }
    );
  }
  return Te(r, l);
}
function Il(r, e) {
  const t = Be(e, "file"), a = Be(e, "thinking"), i = Be(e, "assistant"), n = e.steps.filter(
    (f) => f.kind === "component" && f.component?.kind === "table"
  ), o = a ? e.steps.indexOf(a) : -1, s = n.find((f) => o >= 0 && e.steps.indexOf(f) < o), l = [...n].reverse().find((f) => f !== s), c = t?.text || "may_webinar_attendees.csv", d = Ll(t, s?.component ?? l?.component), u = r.chat.prepareCsvDropArea(), g = r.chat.prepareCursorFile(c, r.cursor), p = q("[data-chat-shell]", "center", {
    desktop: { x: 0, y: 82 },
    tablet: { x: 0, y: 72 },
    mobile: { x: 0, y: 64 }
  });
  return Te(r, [
    { kind: "status", text: "waiting for CSV" },
    { kind: "custom", build: () => g.startFollow(), at: "+=0.04" },
    { kind: "custom", build: () => u.revealWhenCursorEnters(r.cursor), at: "<" },
    {
      kind: "cursorMove",
      target: p,
      options: {
        mode: "drag",
        intent: "drag",
        speed: "slow",
        overshoot: !1,
        settle: !0,
        preserveMode: !0,
        label: "drag-webinar-csv"
      },
      at: "<"
    },
    { kind: "custom", build: () => u.activate(), at: "<+=0.02" },
    { kind: "custom", build: () => r.timeline().to({}, { duration: M.beat }) },
    { kind: "custom", build: () => u.complete() },
    { kind: "custom", build: () => g.landAsUploadedFile(c, d), at: "<" },
    ...s ? [{ kind: "dataTable", config: Kt(s.component, "raw-webinar-attendees"), at: "+=0.08" }] : [],
    { kind: "status", text: "Cleaning CSV", at: "<" },
    ...a ? [Ea(a, { hold: 0.34, at: `+=${M.beat}` })] : [],
    ...i ? [{ kind: "assistant", text: i.text }] : [],
    ...l ? [{ kind: "dataTable", config: Hl(Kt(l.component, "cleaned-webinar-attendees")), at: "-=0.04" }] : [],
    je(Oe.bottomRight, "+=0.18")
  ]);
}
function Ll(r, e) {
  const t = Dl(e);
  if (t) return t;
  const a = r?.note?.trim();
  return !a || Nl(a) ? "CSV uploaded" : a;
}
function Dl(r) {
  if (!r || r.kind !== "table") return null;
  const e = r.count?.trim();
  if (e) return e;
  const t = r.rows.length;
  return t <= 0 ? null : `${t} ${t === 1 ? "record" : "records"}`;
}
function Nl(r) {
  return /user-side message|after release|drop overlay|appears as/i.test(r);
}
function ql(r) {
  const e = [], t = r.id === "data-marketplace" ? Ol(r.steps) : r.steps;
  let a = 0;
  for (const i of t)
    a += i.kind === "user" ? 1 : 0, Fr(e, r.id, i, a === 1);
  return e;
}
function Ol(r) {
  const e = [];
  let t = 0;
  for (; t < r.length; ) {
    const a = r[t];
    if (a.kind !== "thinking") {
      e.push(a), t += 1;
      continue;
    }
    const i = [];
    for (; t < r.length && r[t].kind === "thinking"; )
      i.push(r[t]), t += 1;
    e.push(i.length > 1 ? Bl(i) : a);
  }
  return e;
}
function Bl(r) {
  const e = r[0], a = r.flatMap(
    (i) => i.thinking?.items.length ? i.thinking.items : [{
      label: i.text || "Thinking",
      detail: i.note || "",
      disclosure: ""
    }]
  ).filter((i) => i.label.trim()).map((i, n) => ({
    label: i.label,
    detail: i.detail,
    disclosure: i.disclosure || (n === 0 ? "Show more" : "Show less")
  }));
  return {
    ...e,
    text: a[0]?.label || e.text,
    note: a[0]?.detail || e.note,
    thinking: {
      title: e.thinking?.title || "Thinking",
      elapsed: Aa(a.length),
      items: a
    }
  };
}
function Fr(r, e, t, a = !1) {
  if (t.kind === "status" && t.text) {
    r.push({ kind: "status", text: t.text });
    return;
  }
  if (t.kind === "user" && t.text) {
    r.push({
      kind: "prompt",
      text: t.text,
      duration: jr(t.text),
      sendLabel: `send-${le(e)}-${r.length}`,
      fromEntry: a,
      statusAfter: t.note || void 0,
      at: a ? void 0 : `+=${M.beat}`
    });
    return;
  }
  if (t.kind === "assistant" && t.text) {
    r.push({ kind: "assistant", text: t.text, at: "+=0.08" });
    return;
  }
  if (t.kind === "thinking") {
    r.push(Ea(t, { hold: M.thinkingMedium }));
    return;
  }
  if (t.kind === "file" && t.text) {
    r.push({ kind: "custom", build: (i) => i.chat.uploadedFileMessage(t.text, t.note || "uploaded") });
    return;
  }
  t.kind !== "component" || !t.component || zl(r, e, t);
}
function zl(r, e, t) {
  const a = t.component;
  if (a.kind === "table") {
    const i = Kt(a, `${e}-${t.id}`);
    Gl(e, t, i) && (i.scrollAlign = "equal-inset"), r.push({ kind: "dataTable", config: i, at: "-=0.04" });
    return;
  }
  if (a.kind === "strategyCards") {
    r.push({ kind: "strategyPlans", plans: Hr(a), at: "-=0.04" });
    return;
  }
  if (a.kind === "enrichment") {
    r.push({ kind: "enrichmentPanel", config: Ql(a), at: "+=0.12" });
    return;
  }
  if (a.kind === "dataSources") {
    const i = Ur(a);
    r.push({
      kind: e === "data-marketplace" ? "marketingDataSourcesGrid" : "dataSourcesGrid",
      config: i,
      at: e === "data-marketplace" ? "+=0.44" : "-=0.04"
    });
    return;
  }
  if (a.kind === "uploadedFiles") {
    r.push({ kind: "custom", build: (i) => i.chat.uploadedFilesMessage(Gr(a)), at: "-=0.04" });
    return;
  }
  if (a.kind === "mailboxConnection") {
    Vr(r, Wr(a));
    return;
  }
  if (a.kind === "styleProfile") {
    r.push({ kind: "custom", build: (i) => i.chat.outreachStyleProfile(Kl(a)), at: "-=0.02" });
    return;
  }
  if (a.kind === "proximityList") {
    r.push({ kind: "custom", build: (i) => i.chat.proximityLeadList(Yr(a)), at: "-=0.04" });
    return;
  }
  if (a.kind === "personalizationSwipeGame") {
    r.push({ kind: "personalizationSwipeGame", config: Zl(a), at: "+=0.06" });
    return;
  }
  if (a.kind === "sequenceEngagement") {
    r.push({ kind: "sequenceEngagement", config: Ni(a, `${e}-${t.id}`), at: "-=0.02" });
    return;
  }
  r.push({ kind: "assistant", text: [a.title, ...a.items].filter(Boolean).join(`
`) });
}
function Ea(r, e = {}) {
  return {
    kind: "thinking",
    thinking: Fl(r.thinking, r.text, r.note),
    hold: e.hold,
    at: e.at
  };
}
function Fl(r, e, t) {
  return r?.items.length ? {
    title: r.title,
    elapsed: r.elapsed,
    items: r.items.map((a) => ({
      label: a.label,
      detail: a.detail,
      disclosure: a.disclosure
    }))
  } : {
    items: [
      {
        label: e || "Thinking",
        detail: t || void 0
      }
    ]
  };
}
function Kt(r, e) {
  const t = Wl(r.columns), a = r.rows.filter((o) => o.some((s) => s.trim())).map((o, s) => Yl(o, t, s)), i = r.pagination?.pageSize ?? Ul(r.pagination?.ranges) ?? Math.min(10, a.length || 10), n = r.pagination?.ranges.map((o, s) => ({
    page: s + 1,
    range: o,
    rows: a.slice(s * i, (s + 1) * i)
  })).filter((o) => o.rows.length) ?? [];
  return {
    id: e === "website-visitors-sales" ? e : le(r.title || e),
    title: r.title,
    eyebrow: r.eyebrow,
    count: r.count,
    variant: t.variant ?? Jl(r),
    columns: t.columns,
    rows: n[0]?.rows ?? a,
    actions: r.actions?.map($l),
    pagination: n.length > 1 ? {
      pageSize: i,
      totalRows: ec(r, a.length),
      activePage: 1,
      pages: n
    } : void 0
  };
}
function Hl(r) {
  return {
    ...r,
    scrollAnchor: "previous-message"
  };
}
function Ul(r) {
  const t = r?.[0]?.match(/^\s*(\d+)\s*[-–]\s*(\d+)/);
  if (!t) return null;
  const a = Number(t[1]), n = Number(t[2]) - a + 1;
  return Number.isFinite(n) && n > 0 ? n : null;
}
function Gl(r, e, t) {
  return r !== "data-marketplace" ? !1 : e.id === "data-marketplace-step-3" || le(t.title) === "new-hires-at-dev-tool-companies";
}
function Wl(r) {
  const e = r.findIndex((o) => o.trim().toLowerCase() === "name"), t = e >= 0 ? r.findIndex((o, s) => s > e && /^role\b/i.test(o.trim())) : -1, a = e >= 0 && t >= 0, i = r.map((o, s) => s).filter((o) => o !== t), n = i.map((o) => {
    const s = r[o] || `Column ${o + 1}`;
    return a && o === e ? {
      key: "name",
      label: "Prospect",
      width: "minmax(220px,0.95fr)"
    } : a && /^via\s+connector\b/i.test(s.trim()) ? {
      key: "mutualConnection",
      label: "Best connection",
      width: "minmax(0,1.3fr)"
    } : {
      key: le(s || `column-${o + 1}`),
      label: s,
      width: Vl(s, a)
    };
  });
  return {
    columns: n,
    sourceIndexes: i,
    foldedRoleIndex: a ? t : void 0,
    mutualConnectionKey: n.some((o) => o.key === "mutualConnection") ? "mutualConnection" : void 0,
    variant: n.some((o) => o.key === "mutualConnection") ? "connections" : void 0
  };
}
function Vl(r, e) {
  const t = r.toLowerCase();
  if (t === "email") return "max-content";
  if (e)
    return t.includes("connector") || t.includes("connection") ? "minmax(170px,0.78fr)" : t.includes("email") ? "minmax(190px,0.95fr)" : t.includes("mobile") ? "minmax(150px,0.72fr)" : "minmax(130px,1fr)";
}
function Yl(r, e, t) {
  const a = {};
  if (e.columns.forEach((i, n) => {
    a[i.key] = r[e.sourceIndexes[n]] ?? "";
  }), e.foldedRoleIndex !== void 0 && (a.prospectDetail = r[e.foldedRoleIndex] ?? ""), e.mutualConnectionKey) {
    const i = Xl(a[e.mutualConnectionKey] ?? ""), n = jl(t);
    a[e.mutualConnectionKey] = i.name, a.mutualConnectionDetail = i.title, a.mutualConnectionContext = i.context, i.name && n && (a.mutualConnectionBadge = n);
  }
  return {
    id: `${le(r[0] || "row")}-${t + 1}`,
    values: a
  };
}
function jl(r) {
  const e = [2, 3, 7, null, 1, 12, 4, 5, null, 8, 6, 10], t = e[r % e.length];
  return t === null ? null : `+${t} more`;
}
function Xl(r) {
  const [e = "", t = ""] = r.split(/\s+[—–]\s+/, 2), a = e.trim().match(/^(.+?)(?:\s*\((.+)\))?$/);
  return {
    name: a?.[1]?.trim() || r.trim(),
    title: a?.[2]?.trim() || "",
    context: t.trim()
  };
}
function $l(r) {
  const e = r.label.toLowerCase().includes("dial") ? "power-dialer" : "email-sequence";
  return {
    id: e,
    label: e === "power-dialer" ? "Power dial" : "Outreach sequence",
    icon: e === "power-dialer" ? "dialer" : "email",
    tooltip: r.tooltip,
    badge: r.badge || void 0
  };
}
function Hr(r) {
  return r.cards.map((e, t) => ({
    id: le(e.label || e.title || `strategy-${t + 1}`),
    label: e.label,
    title: e.title,
    summary: e.summary,
    bullets: e.summary.split(/\n+/).map((a) => a.trim()).filter(Boolean)
  }));
}
function Ql(r) {
  return {
    id: le(r.title || "enrichment"),
    title: r.title,
    subtitle: r.subtitle,
    modeLabel: "Balanced",
    fields: r.fields
  };
}
function Ur(r) {
  return {
    id: le(r.title || "data-sources"),
    title: r.title,
    subtitle: r.subtitle,
    sources: r.sources.map((e, t) => ({
      id: le(e.name || `source-${t + 1}`),
      category: e.category,
      name: e.name,
      detail: e.detail,
      logoSrc: e.logoSrc
    }))
  };
}
function Gr(r) {
  return r.files.map((e) => ({
    name: e.name,
    detail: e.detail,
    type: e.type
  }));
}
function Wr(r) {
  return {
    id: le(r.title || "mailbox-connection"),
    title: r.title,
    subtitle: r.subtitle,
    provider: r.provider,
    account: r.account,
    status: r.status,
    ctaLabel: r.ctaLabel,
    secondaryCtaLabel: r.secondaryCtaLabel,
    loadingLabel: r.loadingLabel,
    learningTitle: r.learningTitle,
    learningDetail: r.learningDetail,
    learningReadyDetail: r.learningReadyDetail,
    signals: r.signals
  };
}
function Vr(r, e) {
  const t = q(
    `[data-mailbox-connect="${e.id}"]`,
    "center",
    {
      desktop: { x: 2, y: 0 },
      tablet: { x: 1, y: 0 },
      mobile: { x: 0, y: 0 }
    },
    !1
  );
  r.push(
    { kind: "status", text: "connect mailbox" },
    {
      kind: "custom",
      build: (a) => a.chat.mailboxConnection(e),
      at: "+=0.04"
    },
    {
      kind: "custom",
      build: (a) => a.cursor.scanAcross(`[data-mailbox-connection="${e.id}"]`, {
        label: `mailbox-cta-skim-${e.id}`,
        duration: 0.68
      }),
      at: "+=0.16"
    },
    {
      kind: "cursorMove",
      target: t,
      options: {
        mode: "pointer",
        intent: "hover",
        speed: "normal",
        overshoot: !1,
        settle: !0,
        label: `mailbox-connect-${e.id}`
      },
      at: "+=0.08"
    },
    { kind: "cursorClick", at: "-=0.02" },
    {
      kind: "custom",
      build: (a) => a.chat.connectMailbox(e.id),
      at: "<+=0.08"
    }
  );
}
function Kl(r) {
  return {
    id: le(r.title || "style-profile"),
    title: r.title,
    subtitle: r.subtitle,
    signals: r.signals,
    examples: r.examples
  };
}
function Yr(r) {
  return {
    id: le(r.title || "proximity-list"),
    title: r.title,
    subtitle: r.subtitle,
    leads: r.leads
  };
}
function Zl(r) {
  return {
    id: le(r.title || "personalization-swipe"),
    title: r.title,
    subtitle: r.subtitle,
    prompt: r.prompt,
    labels: { avoid: "avoid", use: "use" },
    completeLabel: "personalization rules learned",
    signals: r.signals.map((e, t) => ({
      id: le(e.label || `signal-${t + 1}`),
      label: e.label,
      detail: e.detail,
      decision: e.decision
    }))
  };
}
function Ni(r, e) {
  return {
    id: e,
    title: r.title,
    subtitle: r.subtitle,
    peopleCount: r.peopleCount,
    launchLabel: r.launchLabel,
    sequences: r.sequences.map((t) => ({
      ...t,
      steps: t.steps?.map((a) => ({
        ...a,
        waitDays: a.waitDays ? Number(a.waitDays) : void 0
      }))
    })),
    channels: r.channels.map((t) => ({
      label: t.label,
      detail: t.detail,
      badge: t.badge || void 0
    }))
  };
}
function Be(r, e) {
  return r.steps.find((t) => t.kind === e);
}
function Zt(r, e) {
  return r.steps.find(
    (t) => t.kind === "component" && t.component?.kind === e
  );
}
function jr(r) {
  return r.length > 72 ? M.typeLong : r.length > 38 ? M.typeMedium : M.typeShort;
}
function Jl(r) {
  const e = `${r.title} ${r.eyebrow ?? ""}`.toLowerCase();
  if (e.includes("enrich")) return "enriched";
  if (e.includes("filter") || e.includes("raised")) return "filtered";
}
function ec(r, e) {
  const t = r.pagination?.ranges ?? [], i = t[t.length - 1]?.match(/of\s+(\d+)/i);
  return i ? Number(i[1]) : e;
}
function le(r) {
  return r.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "item";
}
const tc = [
  "Researching the company profile",
  "Learning the ICP and buyer roles",
  "Reading blog posts for positioning",
  "Scanning careers pages for priorities",
  "Mapping current GTM signals"
], ac = [
  {
    id: "founder-signal",
    label: "Idea one",
    title: "Target DevOps teams outgrowing AWS complexity",
    bullets: [
      "I'll find mid-market SaaS companies with heavy AWS footprints and hiring DevOps",
      "I'll run a 3-step email + LinkedIn sequence using the Notion infra efficiency angle"
    ]
  },
  {
    id: "revops-consolidation",
    label: "Idea two",
    title: "Intercept AI teams burning cycles on LLM infra",
    bullets: [
      "I'll identify companies building AI products, showing LLM/ML engineering hiring signals",
      "I'll craft a sequence leading with AI infra complexity pain and Vercel AI SDK as the path"
    ]
  },
  {
    id: "pipeline-acceleration",
    label: "Idea three",
    title: "Hit e-commerce teams before peak season",
    bullets: [
      "I'll find ecom and DTC brands with 50+ engineers and upcoming high-traffic events",
      "I'll lead with PAIGE's Black Friday results in a short sequence timed to pre-peak urgency"
    ]
  }
], Xr = [
  { key: "name", label: "Name", width: "1.45fr" },
  { key: "company", label: "Company", width: "1fr" },
  { key: "title", label: "Title", width: "1.45fr" }
], ic = [
  { key: "name", label: "Prospect", width: "minmax(220px,0.95fr)" },
  { key: "email", label: "Work email", width: "minmax(190px,0.95fr)" },
  { key: "number", label: "Mobile", width: "minmax(150px,0.72fr)" },
  { key: "connector", label: "Connector", width: "minmax(170px,0.78fr)" }
], yn = {
  id: "dev-tool-new-hires",
  title: "New hires at dev-tool companies",
  eyebrow: "Natural language search",
  count: "8 records",
  scrollAlign: "equal-inset",
  columns: Xr,
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
    }
  ]
}, _n = {
  id: "recently-funded-dev-tools",
  title: "Raised in the past three months",
  eyebrow: "Filtered results",
  count: "3 records",
  variant: "filtered",
  columns: Xr,
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
}, nc = {
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
}, xn = {
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
}, vn = {
  id: "enriched-dev-tool-contacts",
  title: "Enriched contacts",
  eyebrow: "ready to engage",
  count: "4 contacts",
  variant: "enriched",
  columns: ic,
  rows: [
    {
      id: "jamie-chen",
      values: {
        name: "Jamie Chen",
        prospectDetail: "VP of Sales at Ramp",
        email: "jamie@ramp.com",
        number: "+1 (628) 240-2744",
        connector: "Priya Shah (Unify)",
        avatarTone: "1",
        avatarUrl: "https://i.pravatar.cc/64?img=12",
        source: "signal"
      }
    },
    {
      id: "andre-park",
      values: {
        name: "Andre Park",
        prospectDetail: "Head of Growth at Ramp",
        email: "andre@ramp.com",
        number: "+1 (210) 555-2341",
        connector: "Marco Liu (Unify)",
        avatarTone: "2",
        avatarUrl: "https://i.pravatar.cc/64?img=52",
        source: "signal"
      }
    },
    {
      id: "david-kim",
      values: {
        name: "David Kim",
        prospectDetail: "Head of Revenue at Ramp",
        email: "david@ramp.com",
        number: "+1 (628) 230-9962",
        connector: "Dev Singh (Unify)",
        avatarTone: "3",
        avatarUrl: "https://i.pravatar.cc/64?img=33",
        source: "signal"
      }
    },
    {
      id: "chandler-bree",
      values: {
        name: "Chandler Bree",
        prospectDetail: "VP of Sales at Square",
        email: "jamie@ramp.com",
        number: "+1 (628) 240-2744",
        connector: "Jenna Park (Unify)",
        avatarTone: "4",
        avatarUrl: "https://i.pravatar.cc/64?img=11",
        source: "database"
      }
    }
  ]
}, kn = [
  {
    name: "battlecards.pdf",
    detail: "Competitors, traps, objections, displacement plays",
    type: "PDF"
  },
  {
    name: "positioning-memo.docx",
    detail: "Category narrative, buyer pains, proof points",
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
], gt = {
  id: "gmail-mailbox-connection",
  title: "Connect a mailbox",
  subtitle: "Unify will recent emails, replies, and meeting context to learn how you actually communicate",
  provider: "Gmail",
  account: "joel@unifygtm.com",
  status: "Connected",
  ctaLabel: "Gmail",
  secondaryCtaLabel: "Outlook",
  loadingLabel: "Connecting",
  learningTitle: "Learning your style",
  learningDetail: "Analyzing vocabulary...",
  learningReadyDetail: "73 tone & tactic rules defined",
  signals: ["sent emails", "reply patterns", "calendar context", "signature and tone"]
}, rc = {
  id: "pylon-business-report",
  title: "Pylon business report",
  subtitle: "What Unify learned from the uploaded business context.",
  signals: [
    {
      label: "Messaging strategy",
      value: "Lead with support-led growth: turn customer conversations into expansion, retention, and renewal signals."
    },
    {
      label: "Positioning",
      value: "Frame Pylon as the customer intelligence layer for modern B2B teams, not another inbox or ticket queue."
    },
    {
      label: "Competitors",
      value: "Against Intercom and Zendesk, emphasize account visibility, CRM-native handoffs, and revenue-ready workflows."
    },
    {
      label: "Best-fit ICP",
      value: "Series A-C B2B SaaS with complex accounts, high-value customers, and support data trapped outside GTM workflows."
    }
  ],
  examples: [
    "Run expansion plays from support signals: stalled onboarding, repeated feature requests, and renewal risk.",
    "Position against ticketing systems by showing how customer context becomes sales action, not just case resolution.",
    "Avoid generic AI-agent language; anchor the pitch in account visibility, handoffs, and revenue moments."
  ]
}, An = {
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
}, Qa = {
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
    },
    {
      name: "Andre Park",
      company: "Ramp",
      title: "Head of Sales",
      signal: "Demo page",
      subject: "Ramp’s demo-page visit",
      personalization: "Andre viewed the demo page while Ramp is hiring growth roles, so the sequence ties intent to faster account prioritization.",
      steps: [
        {
          channel: "email",
          label: "open with demo intent",
          body: "Reference the demo visit and ask whether the team is looking for cleaner signals before expanding outbound coverage."
        },
        {
          channel: "linkedin",
          label: "share the angle",
          body: "Mention that Unify can turn page intent into researched account clusters without stitching tabs together."
        },
        {
          channel: "email",
          label: "send the account cut",
          body: "Offer a small list of accounts showing hiring, tech stack, and funding signals in one view."
        },
        {
          channel: "call",
          label: "ask about timing",
          body: "Open by asking whether demo research is tied to a current sales expansion push."
        }
      ]
    },
    {
      name: "Jamie Chen",
      company: "Square",
      title: "VP Sales",
      signal: "ROI calculator",
      subject: "Square’s ROI-calculator research",
      personalization: "Jamie used the ROI calculator, so the outreach leads with measurable pipeline coverage and better list quality.",
      steps: [
        {
          channel: "email",
          label: "lead with ROI",
          body: "Connect the calculator visit to the cost of fragmented data and suggest a quick account-quality benchmark."
        },
        {
          channel: "linkedin",
          label: "use one proof point",
          body: "Share a short proof point about teams consolidating research, enrichment, and sequencing in Unify."
        },
        {
          channel: "email",
          label: "offer benchmark",
          body: "Offer to compare one existing target segment against Unify’s combined intent and company data."
        },
        {
          channel: "call",
          label: "qualify the metric",
          body: "Ask whether Square is optimizing for more contacts, better account fit, or higher rep throughput."
        }
      ]
    },
    {
      name: "Nina Kapoor",
      company: "Mercury",
      title: "Sales Director",
      signal: "Security page",
      subject: "Mercury’s security-page research",
      personalization: "Nina looked at security content, so the sequence keeps the value prop practical and trust-forward.",
      steps: [
        {
          channel: "email",
          label: "acknowledge trust",
          body: "Reference the security-page visit and frame Unify as a controlled way to operationalize external data."
        },
        {
          channel: "linkedin",
          label: "ask the process question",
          body: "Ask how Mercury currently reviews new data sources before putting them into outbound workflows."
        },
        {
          channel: "email",
          label: "show governance",
          body: "Send a short overview of how Unify routes data work while keeping reps inside one system."
        },
        {
          channel: "call",
          label: "surface blocker",
          body: "Ask whether security review or data quality is the larger barrier to using richer GTM data."
        }
      ]
    },
    {
      name: "David Kim",
      company: "Stripe",
      title: "Revenue Lead",
      signal: "Docs",
      subject: "Stripe’s docs-led research",
      personalization: "David came through docs, so the campaign assumes a hands-on evaluation and emphasizes workflow depth.",
      steps: [
        {
          channel: "email",
          label: "start technical",
          body: "Reference the docs visit and offer to show how Unify turns natural language into complete GTM workflows."
        },
        {
          channel: "linkedin",
          label: "ask about workflow",
          body: "Ask whether Stripe’s team is trying to automate research, enrichment, or sequencing first."
        },
        {
          channel: "email",
          label: "share workflow map",
          body: "Send a compact workflow map from prompt to table to sequence, using a Stripe-like target segment."
        },
        {
          channel: "call",
          label: "probe use case",
          body: "Ask whether the team wants rep-assist workflows or fully agentic list building."
        }
      ]
    },
    {
      name: "Sam Hollis",
      company: "Apollo",
      title: "VP Sales",
      signal: "Comparison",
      subject: "Apollo’s comparison-page visit",
      personalization: "Sam viewed comparison content, so the outreach contrasts Unify’s unified workflow against point-tool switching.",
      steps: [
        {
          channel: "email",
          label: "frame the comparison",
          body: "Acknowledge the comparison visit and focus on reducing tab switching across data, enrichment, and engagement."
        },
        {
          channel: "linkedin",
          label: "ask what matters",
          body: "Ask whether the buying criteria is coverage, workflow speed, or personalization quality."
        },
        {
          channel: "email",
          label: "offer side-by-side",
          body: "Offer a short side-by-side showing how one sales request becomes a researched sequence in Unify."
        },
        {
          channel: "call",
          label: "qualify priority",
          body: "Ask which workflow currently takes reps out of their selling motion most often."
        }
      ]
    },
    {
      name: "Rachel Cho",
      company: "Retool",
      title: "Head of Sales",
      signal: "Pricing page",
      subject: "Retool’s pricing-page intent",
      personalization: "Rachel viewed pricing during a sales hiring push, so the sequence connects team scaling to better prospecting systems.",
      steps: [
        {
          channel: "email",
          label: "tie to scaling",
          body: "Mention pricing interest and hiring signals, then ask if list building is becoming a rep-capacity bottleneck."
        },
        {
          channel: "linkedin",
          label: "share focused proof",
          body: "Point to teams using Unify to build smaller, higher-fit lists instead of expanding generic coverage."
        },
        {
          channel: "email",
          label: "send a sample segment",
          body: "Offer a sample segment with account fit, contacts, and ready-to-send messaging angles."
        },
        {
          channel: "call",
          label: "ask about handoff",
          body: "Ask how Retool currently hands intent signals from marketing to sales."
        }
      ]
    },
    {
      name: "Owen Lee",
      company: "Linear",
      title: "Sales Lead",
      signal: "Demo page",
      subject: "Linear’s demo-page research",
      personalization: "Owen visited the demo page, so the sequence stays crisp and shows a concrete workflow rather than a broad pitch.",
      steps: [
        {
          channel: "email",
          label: "keep it direct",
          body: "Reference the demo visit and offer one example of Unify building a clean account list from messy GTM signals."
        },
        {
          channel: "linkedin",
          label: "ask one thing",
          body: "Ask whether Linear’s sales team is prioritizing outbound efficiency or better personalization this quarter."
        },
        {
          channel: "email",
          label: "show a concrete play",
          body: "Send a specific play for identifying software teams expanding support or sales operations."
        },
        {
          channel: "call",
          label: "connect to timing",
          body: "Ask if the demo research is connected to an active evaluation window."
        }
      ]
    }
  ],
  channels: []
}, oc = {
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
}, sc = [
  { key: "name", label: "Name", width: "1.2fr" },
  { key: "company", label: "Company", width: "0.95fr" },
  { key: "title", label: "Title", width: "1.15fr" },
  { key: "visit", label: "Last visit", width: "0.86fr" },
  { key: "signal", label: "Signal", width: "1.18fr" }
], Sn = [
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
], lc = [
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
], Cn = {
  id: "website-visitors-sales",
  title: "Recent website visitors",
  eyebrow: "Visitor intent",
  count: "50 sales leaders",
  variant: "filtered",
  columns: sc,
  rows: Sn,
  pagination: {
    pageSize: 10,
    totalRows: 50,
    activePage: 1,
    pages: [
      { page: 1, range: "1-10 of 50 people", rows: Sn },
      { page: 2, range: "11-20 of 50 people", rows: lc }
    ]
  },
  actions: [
    {
      id: "power-dialer",
      label: "Power dial",
      icon: "dialer",
      tooltip: "Start power dialing",
      badge: "Coming soon",
      variant: "primary"
    },
    {
      id: "email-sequence",
      label: "Outreach sequence",
      icon: "email",
      tooltip: "Build outreach sequence",
      variant: "secondary"
    }
  ]
}, Ka = [
  {
    id: "raw-maya-rodriguez",
    values: {
      rawName: "Maya R.",
      rawEmail: "MAYA.RODRIGUEZ@NorthStar.ai ",
      company: "northstar ai"
    }
  },
  {
    id: "raw-ethan-cho",
    values: {
      rawName: "Ethan / Cho",
      rawEmail: "ethan.cho@gmail.com",
      company: "Clearbit Inc."
    }
  },
  {
    id: "raw-priya-shah",
    values: {
      rawName: "Priya Shah",
      rawEmail: "priya.shah+webinar@orbitgrid.com",
      company: "Orbitgrid"
    }
  },
  {
    id: "raw-lucas-meyer",
    values: {
      rawName: "Lucas",
      rawEmail: "",
      company: "Ramp"
    }
  },
  {
    id: "raw-nina-kapoor",
    values: {
      rawName: "N. Kapoor",
      rawEmail: "nina@yahoo.com",
      company: "Mercury"
    }
  },
  {
    id: "raw-sam-hollis",
    values: {
      rawName: "sam hollis",
      rawEmail: "sam.hollis@apollo.io",
      company: "Apollo.io"
    }
  },
  {
    id: "raw-anna-li",
    values: {
      rawName: "Anna Li",
      rawEmail: "",
      company: "Linear"
    }
  },
  {
    id: "raw-devon-park",
    values: {
      rawName: "Devon Park",
      rawEmail: "devon.park@brex.com",
      company: "Brex"
    }
  },
  {
    id: "raw-rachel-cho",
    values: {
      rawName: "Rachel C.",
      rawEmail: "rcho@figma.com",
      company: "Figma"
    }
  },
  {
    id: "raw-owen-lee",
    values: {
      rawName: "Owen Lee",
      rawEmail: "owen.lee@icloud.com",
      company: "Notion"
    }
  },
  {
    id: "raw-clara-wong",
    values: {
      rawName: "Clara Wong",
      rawEmail: "clara.wong@brightlayer.com",
      company: "Bright Layer"
    }
  },
  {
    id: "raw-maya-rodriguez-duplicate",
    values: {
      rawName: "Maya Rodriguez",
      rawEmail: "maya.rodriguez@northstar.ai",
      company: "Northstar AI"
    }
  }
], cc = {
  id: "raw-webinar-attendees",
  title: "Raw webinar attendees",
  eyebrow: "CSV import",
  count: "54 records",
  variant: "default",
  columns: [
    { key: "rawName", label: "Name", width: "minmax(130px,0.85fr)" },
    { key: "rawEmail", label: "Email", width: "max-content" },
    { key: "company", label: "Company", width: "minmax(120px,0.8fr)" }
  ],
  rows: Ka,
  pagination: {
    pageSize: 6,
    totalRows: 54,
    activePage: 1,
    pages: [
      { page: 1, range: "1-6 of 54 records", rows: Ka.slice(0, 6) },
      { page: 2, range: "7-12 of 54 records", rows: Ka.slice(6, 12) }
    ]
  }
}, dc = {
  id: "clean-webinar-attendees",
  title: "Cleaned webinar attendees",
  eyebrow: "CSV cleanup",
  count: "54 records",
  variant: "filtered",
  scrollAnchor: "previous-message",
  columns: [
    { key: "fullName", label: "Full name", width: "1.25fr" },
    { key: "email", label: "Email", width: "max-content" },
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
}, $r = [
  {
    id: "hit-ground-running",
    label: "Hit the ground running",
    navLabel: "Hit the ground running",
    navDescription: "Unify understands your business like you do. Use the latest frontier models to identify your next campaign ideas.",
    eyebrow: "Business onboarding",
    summary: "The assistant learns the company, researches public signals, and returns three GTM plays.",
    entry: qr,
    entryLeadTime: Br,
    prepare: (r) => {
      r.chat.prepareSignup();
    },
    build: (r) => Te(r, [
      { kind: "status", text: "Sign up" },
      { kind: "cursorClick", nextMode: "text", at: "-=0.04" },
      { kind: "typeSignupEmail", email: "joel@vercel.com", duration: M.typeShort },
      {
        kind: "cursorMove",
        target: Or,
        options: { mode: "pointer", intent: "click", speed: "quick", label: "signup-submit" },
        at: "-=0.04"
      },
      { kind: "cursorClick", nextMode: "default", at: "-=0.03" },
      { kind: "custom", build: () => r.chat.submitSignup(), at: "<" },
      { kind: "status", text: "Building workspace", at: "-=0.08" },
      { kind: "custom", build: () => r.chat.transferSignupLogoToNextThinking(), at: "<" },
      { kind: "transitionSignupToChat", at: `+=${M.beat}` },
      { kind: "status", text: "Researching Vercel", at: "<" },
      { kind: "thinking", steps: tc, hold: 0.46, at: "<" },
      { kind: "assistant", text: "Here are some ideas I can put into action for you:" },
      { kind: "status", text: "Game plans ready", at: "<" },
      { kind: "strategyPlans", plans: ac, at: "-=0.08" },
      je(Oe.right, "+=0.18")
    ])
  },
  {
    id: "data-marketplace",
    label: "100+ data sources at your fingertips",
    navLabel: "100+ data sources at your fingertips",
    navDescription: "A one-stop shop for your data needs, B2B contacts and companies, e-commerce, local businesses, technographics, and more in a single natural language search.",
    eyebrow: "Data marketplace",
    summary: "The assistant searches, filters, and enriches B2B company and contact data.",
    assetUrls: [
      ...Ot(yn),
      ...Ot(_n),
      ...Ot(vn),
      ...Lr(xn)
    ],
    entry: ya.dataMarketplace,
    entryLeadTime: pi,
    build: (r) => Te(r, [
      {
        kind: "prompt",
        text: "Show me new hires at dev-tool companies with 50+ employees.",
        duration: M.typeLong,
        sendLabel: "send-data-search",
        statusBefore: "Searching data",
        statusAfter: "Searching 100+ sources",
        fromEntry: !0
      },
      {
        kind: "thinking",
        label: "Searching hiring signals, headcount, and company data",
        hold: M.thinkingMedium
      },
      { kind: "dataTable", config: yn, at: "-=0.04" },
      {
        kind: "prompt",
        text: "Filter to the ones that have raised in the past three months.",
        duration: M.typeMedium,
        sendLabel: "send-data-filter",
        statusAfter: "Filtering by funding",
        at: `+=${M.beat}`
      },
      {
        kind: "thinking",
        label: "Checking rounds announced since February 2026",
        hold: M.thinkingShort
      },
      { kind: "dataTable", config: _n, at: "-=0.04" },
      {
        kind: "prompt",
        text: "Okay, enrich these contacts.",
        duration: M.typeShort,
        sendLabel: "send-enrich-contacts",
        statusAfter: "Preparing enrichment",
        at: `+=${M.beat}`
      },
      { kind: "enrichmentPanel", config: nc, at: "+=0.12" },
      { kind: "status", text: "Contacts enriched", at: "+=0.86" },
      { kind: "dataTable", config: vn, at: "-=0.02" },
      { kind: "marketingDataSourcesGrid", config: xn, at: "+=0.44" },
      je(Oe.bottomRight, "+=3")
    ])
  },
  {
    id: "crm-update",
    label: "Agent that knows you",
    navLabel: "An agent that knows you",
    eyebrow: "Context learning",
    summary: "The assistant learns your sales context, protects ICP fit, and ranks leads by relationship proximity.",
    assetUrls: Dr(An),
    entry: {
      desktop: { target: "[data-chat-shell]", anchor: "right", offset: { x: -48, y: 168 } },
      tablet: { target: "[data-chat-shell]", anchor: "right", offset: { x: -44, y: 144 } },
      mobile: { target: "[data-chat-shell]", anchor: "right", offset: { x: -36, y: 112 } }
    },
    entryLeadTime: 0.18,
    build: (r) => {
      const e = r.chat.prepareCsvDropArea({
        title: "Drop business context files",
        detail: "Battle cards, playbooks, ICP notes, voice docs, and messaging context."
      }), t = r.chat.prepareCursorFile("4 context files", r.cursor, "DOC", kn), a = q(
        `[data-mailbox-connect="${gt.id}"]`,
        "center",
        {
          desktop: { x: 2, y: 0 },
          tablet: { x: 1, y: 0 },
          mobile: { x: 0, y: 0 }
        },
        !1
      ), i = {
        desktop: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 180, y: -74 }, humanOffset: !1 },
        tablet: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 144, y: -58 }, humanOffset: !1 },
        mobile: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 96, y: -42 }, humanOffset: !1 }
      }, n = q("[data-chat-shell]", "center", {
        desktop: { x: 0, y: 74 },
        tablet: { x: 0, y: 64 },
        mobile: { x: 0, y: 56 }
      });
      return Te(r, [
        { kind: "status", text: "connect mailbox" },
        { kind: "custom", build: () => r.chat.mailboxConnection(gt), at: "+=0.04" },
        {
          kind: "custom",
          build: () => r.cursor.scanAcross(`[data-mailbox-connection="${gt.id}"]`, {
            label: `mailbox-cta-skim-${gt.id}`,
            duration: 0.68
          }),
          at: "+=0.16"
        },
        {
          kind: "cursorMove",
          target: a,
          options: {
            mode: "pointer",
            intent: "hover",
            speed: "normal",
            overshoot: !1,
            settle: !0,
            label: `mailbox-connect-${gt.id}`
          },
          at: "+=0.08"
        },
        { kind: "cursorClick", at: "-=0.02" },
        { kind: "custom", build: () => r.chat.connectMailbox(gt.id), at: "<+=0.08" },
        { kind: "status", text: "waiting for context", at: `+=${M.beat}` },
        {
          kind: "cursorMove",
          target: i,
          options: {
            mode: "default",
            intent: "exit",
            speed: "slow",
            overshoot: !1,
            settle: !0,
            label: "context-file-pickup"
          },
          at: "+=0.08"
        },
        { kind: "custom", build: () => t.startFollow(), at: "+=0.02" },
        { kind: "custom", build: () => e.revealWhenCursorEnters(r.cursor), at: "<" },
        {
          kind: "cursorMove",
          target: n,
          options: {
            mode: "drag",
            intent: "drag",
            speed: "slow",
            overshoot: !1,
            settle: !0,
            preserveMode: !0,
            label: "drag-context-files"
          },
          at: "<"
        },
        { kind: "custom", build: () => e.activate(), at: "<+=0.02" },
        { kind: "custom", build: () => r.timeline().to({}, { duration: M.beat }) },
        { kind: "custom", build: () => e.complete() },
        { kind: "custom", build: () => t.landAsUploadedFiles(kn), at: "<" },
        { kind: "status", text: "Learning Pylon's business", at: "<" },
        {
          kind: "thinking",
          steps: [
            "Reading Pylon battle cards and market notes",
            "Mapping competitors and positioning",
            "Extracting messaging pillars and proof points",
            "Summarizing ICP fit and GTM angles"
          ],
          hold: 0.24,
          at: `+=${M.beat}`
        },
        { kind: "custom", build: () => r.chat.outreachStyleProfile(rc), at: "-=0.02" },
        {
          kind: "prompt",
          text: "Write a sequence for consumer fintech founders.",
          duration: M.typeShort,
          sendLabel: "send-bad-icp-request",
          statusAfter: "Checking ICP fit",
          at: `+=${M.beat}`
        },
        { kind: "assistant", text: "Are you sure? this doesn't fit your ICP", at: "+=0.08" },
        {
          kind: "prompt",
          text: "Okay, generate leads ranked by how personally connected they are to us.",
          duration: M.typeMedium,
          sendLabel: "send-proximity-list",
          statusAfter: "Ranking proximity",
          at: `+=${M.beat}`
        },
        {
          kind: "thinking",
          label: "Scoring shared schools, fields of study, mutual contacts, and warm signals",
          hold: M.thinkingMedium
        },
        { kind: "custom", build: () => r.chat.proximityLeadList(An), at: "-=0.04" },
        je(Oe.bottomRight, "+=0.16")
      ]);
    }
  },
  {
    id: "research-brief",
    label: "Zero effort engagement",
    navLabel: "Zero effort engagement, built in",
    eyebrow: "Engagement engine",
    summary: "The assistant turns website visitor intent into a paginated list and engagement actions.",
    assetUrls: [
      ...Ot(Cn),
      ...Nr(Qa)
    ],
    entry: ya.researchBrief,
    entryLeadTime: pi,
    build: (r) => {
      const e = q(
        '[data-data-table="website-visitors-sales"] [data-table-page-button="2"]',
        "center"
      ), t = q(
        '[data-data-table="website-visitors-sales"] [data-table-action="power-dialer"]',
        "center",
        { desktop: { x: 5, y: 0 }, tablet: { x: 4, y: 0 }, mobile: { x: 3, y: 0 } },
        !1
      ), a = q(
        '[data-data-table="website-visitors-sales"] [data-table-action="email-sequence"]',
        "center",
        {},
        !1
      ), [i, n] = Pr(Qa, 2), o = q(
        `[data-sequence-person-card="visitor-outreach-sequences:${i}"]`,
        "center"
      ), s = q(
        `[data-sequence-person-card="visitor-outreach-sequences:${n}"]`,
        "center"
      ), l = q(
        '[data-sequence-kickoff="visitor-outreach-sequences"]',
        "center"
      );
      return Te(r, [
        {
          kind: "prompt",
          text: "Show me 50 sales leaders that have recently visited my website.",
          duration: M.typeLong,
          sendLabel: "send-visitor-sales-list",
          statusBefore: "finding visitors",
          statusAfter: "building visitor list",
          fromEntry: !0
        },
        { kind: "dataTable", config: Cn, at: "-=0.02" },
        {
          kind: "cursorMove",
          target: e,
          options: { mode: "pointer", intent: "click", speed: "normal", label: "open-visitor-page-2" },
          at: "+=0.2"
        },
        { kind: "cursorClick", at: "-=0.02" },
        { kind: "custom", build: () => r.chat.dataTablePage("website-visitors-sales", 2), at: "-=0.03" },
        { kind: "status", text: "ready to engage", at: "+=0.1" },
        {
          kind: "custom",
          build: () => r.timeline().to({}, { duration: M.beat + 0.58 })
        },
        {
          kind: "cursorMove",
          target: t,
          options: { mode: "pointer", intent: "hover", speed: "slow", label: "hover-power-dialer" },
          at: "+=0.42"
        },
        { kind: "custom", build: () => r.chat.dataTableActionTooltip("website-visitors-sales", "power-dialer", !0) },
        { kind: "custom", build: () => r.timeline().to({}, { duration: M.beat + 1 }), at: "+=0.12" },
        { kind: "custom", build: () => r.chat.dataTableActionTooltip("website-visitors-sales", "power-dialer", !1) },
        {
          kind: "cursorMove",
          target: a,
          options: { mode: "pointer", intent: "hover", speed: "slow", label: "hover-email-sequence" }
        },
        { kind: "custom", build: () => r.chat.dataTableActionTooltip("website-visitors-sales", "email-sequence", !0) },
        { kind: "cursorClick", at: "+=0.18" },
        { kind: "custom", build: () => r.chat.dataTableActionTooltip("website-visitors-sales", "email-sequence", !1), at: "<+=0.02" },
        { kind: "status", text: "building outreach sequence", at: "<" },
        { kind: "custom", build: () => r.chat.sequenceBuildThinking(oc), at: "+=0.06" },
        { kind: "sequenceEngagement", config: Qa, at: "-=0.02" },
        { kind: "custom", build: () => r.timeline().to({}, { duration: M.beat + 0.24 }), at: "+=0.04" },
        {
          kind: "cursorMove",
          target: o,
          options: { mode: "pointer", intent: "click", speed: "normal", label: "preview-next-sequence" }
        },
        { kind: "cursorClick", at: "-=0.02" },
        { kind: "custom", build: () => r.chat.sequencePerson("visitor-outreach-sequences", i), at: "-=0.03" },
        { kind: "custom", build: () => r.timeline().to({}, { duration: M.beat + 0.24 }), at: "+=0.04" },
        {
          kind: "cursorMove",
          target: s,
          options: { mode: "pointer", intent: "click", speed: "normal", label: "preview-following-sequence" }
        },
        { kind: "cursorClick", at: "-=0.02" },
        { kind: "custom", build: () => r.chat.sequencePerson("visitor-outreach-sequences", n), at: "-=0.03" },
        { kind: "custom", build: () => r.timeline().to({}, { duration: M.beat + 0.28 }), at: "+=0.04" },
        {
          kind: "cursorMove",
          target: l,
          options: { mode: "pointer", intent: "click", speed: "normal", label: "kickoff-visitor-sequence" }
        },
        { kind: "cursorClick", at: "-=0.02" },
        { kind: "custom", build: () => r.chat.sequenceKickoff("visitor-outreach-sequences"), at: "-=0.04" },
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
    build: (r) => {
      const e = r.chat.prepareCsvDropArea(), t = r.chat.prepareCursorFile("may_webinar_attendees.csv", r.cursor), a = q("[data-chat-shell]", "center", {
        desktop: { x: 0, y: 82 },
        tablet: { x: 0, y: 72 },
        mobile: { x: 0, y: 64 }
      });
      return Te(r, [
        { kind: "status", text: "waiting for CSV" },
        { kind: "custom", build: () => t.startFollow(), at: "+=0.04" },
        { kind: "custom", build: () => e.revealWhenCursorEnters(r.cursor), at: "<" },
        {
          kind: "cursorMove",
          target: a,
          options: {
            mode: "drag",
            intent: "drag",
            speed: "slow",
            overshoot: !1,
            settle: !0,
            preserveMode: !0,
            label: "drag-webinar-csv"
          },
          at: "<"
        },
        { kind: "custom", build: () => e.activate(), at: "<+=0.02" },
        { kind: "custom", build: () => r.timeline().to({}, { duration: M.beat }) },
        { kind: "custom", build: () => e.complete() },
        { kind: "custom", build: () => t.landAsUploadedFile("may_webinar_attendees.csv", "54 records"), at: "<" },
        { kind: "dataTable", config: cc, at: "+=0.08" },
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
          at: `+=${M.beat}`
        },
        { kind: "assistant", text: "I cleaned the attendee list and normalized the fields that matter for routing and follow-up." },
        { kind: "dataTable", config: dc, at: "-=0.04" },
        je(Oe.bottomRight, "+=0.18")
      ]);
    }
  }
], na = {
  radius: 48,
  sampleWindowMs: 900,
  minTravel: 34,
  minAxisReversals: 1
}, rt = {
  sampleWindowMs: 960,
  minDurationMs: 620,
  minTravel: 480,
  minAxisReversals: 6,
  minAverageSpeed: 0.54,
  minTravelToNetRatio: 2.55,
  maxNetDistance: 165
}, Z = {
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
}, Ue = {
  smoothing: 0.22,
  orbitMs: 1620,
  bobMs: 690,
  radiusX: 76,
  radiusY: 42,
  bobY: 10,
  minPointerDistance: 56,
  viewportInset: 14
}, ra = {
  durationMs: 920,
  pointIntervalMs: 155,
  radius: 24,
  smoothing: 0.2
}, Za = {
  durationMs: 980,
  amplitude: 18,
  arriveDistance: 3.5
};
class uc {
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
  playStartedAt = 0;
  playPhase = 0;
  lastPointer = null;
  trailDirection = { x: -0.94, y: 0.34 };
  velocity = { x: 0, y: 0 };
  frame = 0;
  lastMoveAt = 0;
  chatShell = null;
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
      this.mode === "follow" ? (this.updateFollowTarget(t), this.lastMoveAt = a, this.trackDismissShake(t, a), this.hasDismissShake() && this.startReturnAfterPause(0)) : this.mode === "play" ? this.pointer && Ge(t, this.pointer) < 3 ? this.pointer = t : this.resumeFollowing(t) : this.mode === "sniff" && this.isPointNearStoryCursor(t, Z.reengageRadius) && this.resumeFollowing(t), this.scheduleFollow();
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
    this.active && (this.active = !1, this.mode = "idle", this.target = null, this.pointer = null, this.sniffAnchor = null, this.returnStart = null, this.returnStartedAt = 0, this.playStartedAt = 0, this.playPhase = 0, this.lastPointer = null, this.velocity = { x: 0, y: 0 }, this.dismissSamples = [], delete this.root.dataset.cursorMimicking, window.cancelAnimationFrame(this.frame), this.frame = 0, this.cursor.endMimicControl());
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
      this.updateSniffTarget(e), this.target && this.cursor.mimicViewportPoint(this.target, ra.smoothing, this.target), e - this.sniffStartedAt >= ra.durationMs && this.startReturnAfterPause(), this.scheduleFollow();
      return;
    }
    if (this.mode === "play") {
      if (!this.pointer) {
        this.startReturnAfterPause();
        return;
      }
      this.updatePlayTarget(e), this.target && this.cursor.mimicViewportPoint(this.target, Ue.smoothing, this.pointer), this.scheduleFollow();
      return;
    }
    if (this.mode === "return") {
      const t = this.getReturnHomePoint(), a = hc((e - this.returnStartedAt) / Za.durationMs), i = this.getReturnWavePoint(a, t), n = this.getReturnWavePoint(Math.min(1, a + 0.035), t);
      if (this.target = t, this.cursor.mimicViewportPoint(i, 1, a < 1 ? n : t), a >= 1 || Ge(this.getCursorViewportPoint(), t) <= Za.arriveDistance) {
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
      if (e - this.lastMoveAt > Z.idleTimeoutMs) {
        this.startPlayfulIdle(e);
        return;
      }
      this.applyMomentum(e), this.cursor.mimicViewportPoint(this.target, Z.smoothing, this.pointer ?? this.target), this.scheduleFollow();
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
      }, this.velocity = wc(a, Z.maxMomentumStep));
    }
    const t = {
      x: e.x - this.trailDirection.x * Z.trailDistance,
      y: e.y - this.trailDirection.y * Z.trailDistance
    };
    Ge(e, t) < Z.minPointerDistance && (t.x = e.x - this.trailDirection.x * Z.minPointerDistance, t.y = e.y - this.trailDirection.y * Z.minPointerDistance), this.target = t, this.pointer = e, this.lastPointer = e;
  }
  startPlayfulIdle(e) {
    if (!this.active || !this.pointer) return;
    const t = this.getCursorViewportPoint();
    this.mode = "play", this.playStartedAt = e, this.playPhase = Math.atan2(t.y - this.pointer.y, t.x - this.pointer.x), this.velocity = { x: 0, y: 0 }, this.dismissSamples = [], this.scheduleFollow();
  }
  updatePlayTarget(e) {
    if (!this.pointer) return;
    const t = e - this.playStartedAt, a = this.playPhase + t / Ue.orbitMs * Math.PI * 2, i = Math.sin(t / Ue.bobMs * Math.PI * 2), n = {
      x: this.pointer.x + Math.cos(a) * Ue.radiusX,
      y: this.pointer.y + Math.sin(a * 1.28) * Ue.radiusY + i * Ue.bobY
    };
    this.target = gc(n, this.pointer, Ue.minPointerDistance, Ue.viewportInset);
  }
  resumeFollowing(e) {
    this.mode = "follow", this.sniffAnchor = null, this.nextSniffAt = 0, this.sniffIndex = 0, this.playStartedAt = 0, this.playPhase = 0, this.returnAt = 0, this.lastPointer = e, this.updateFollowTarget(e), this.dismissSamples = [], this.lastMoveAt = performance.now();
  }
  startSniffing() {
    if (!this.active || this.mode === "sniff" || this.mode === "return" || this.mode === "returnWait") return;
    const e = performance.now();
    this.mode = "sniff", this.sniffAnchor = this.getCursorViewportPoint(), this.sniffStartedAt = e, this.nextSniffAt = 0, this.sniffIndex = 0, this.playStartedAt = 0, this.playPhase = 0, this.pointer = null, this.velocity = { x: 0, y: 0 }, this.dismissSamples = [], this.scheduleFollow();
  }
  updateSniffTarget(e) {
    if (this.sniffAnchor || (this.sniffAnchor = this.getCursorViewportPoint()), this.target && e < this.nextSniffAt) return;
    const t = this.sniffIndex, a = t * 1.92, i = ra.radius * (t % 2 === 0 ? 1 : 0.58);
    this.target = {
      x: this.sniffAnchor.x + Math.cos(a) * i,
      y: this.sniffAnchor.y + Math.sin(a) * i * 0.62
    }, this.sniffIndex += 1, this.nextSniffAt = e + ra.pointIntervalMs;
  }
  applyMomentum(e) {
    !this.target || e - this.lastMoveAt < 48 || Math.hypot(this.velocity.x, this.velocity.y) < Z.minMomentum || (this.target = {
      x: this.target.x + this.velocity.x * Z.momentumScale,
      y: this.target.y + this.velocity.y * Z.momentumScale
    }, this.velocity = {
      x: this.velocity.x * Z.momentumDecay,
      y: this.velocity.y * Z.momentumDecay
    });
  }
  startReturnAfterPause(e = Z.returnDelayMs) {
    this.active && (this.mode = "returnWait", this.target = null, this.pointer = null, this.lastPointer = null, this.returnStart = null, this.returnStartedAt = 0, this.playStartedAt = 0, this.playPhase = 0, this.velocity = { x: 0, y: 0 }, this.dismissSamples = [], window.cancelAnimationFrame(this.frame), this.frame = 0, this.returnAt = performance.now() + e, this.scheduleFollow());
  }
  beginReturn(e) {
    const t = this.getCursorViewportPoint(), a = this.getReturnHomePoint();
    this.mode = "return", this.returnStart = t, this.returnStartedAt = e, this.returnWaveDirection = a.y >= t.y ? 1 : -1, this.target = a;
  }
  getReturnHomePoint() {
    return this.cursor.getHistoryParkViewportPoint();
  }
  getReturnWavePoint(e, t) {
    const a = this.returnStart ?? this.getCursorViewportPoint(), i = pc(e), n = t.x - a.x, o = t.y - a.y, s = Math.hypot(n, o), l = {
      x: a.x + n * i,
      y: a.y + o * i
    };
    if (s < 1) return l;
    const c = Math.sin(Math.PI * e), d = Math.sin(Math.PI * 2 * e) * c * Za.amplitude * this.returnWaveDirection;
    return {
      x: l.x - o / s * d,
      y: l.y + n / s * d
    };
  }
  completeReturn() {
    this.active = !1, this.mode = "idle", this.target = null, this.pointer = null, this.sniffAnchor = null, this.returnStart = null, this.returnStartedAt = 0, this.playStartedAt = 0, this.playPhase = 0, this.lastPointer = null, this.velocity = { x: 0, y: 0 }, this.dismissSamples = [], delete this.root.dataset.cursorMimicking, window.cancelAnimationFrame(this.frame), this.frame = 0, this.cursor.endMimicControl();
  }
  isCursorTooFarFromBrowser() {
    const e = this.getChatShell()?.getBoundingClientRect();
    if (!e) return !1;
    const t = this.root.getBoundingClientRect(), a = this.cursor.readPosition(), i = {
      x: t.left + a.x,
      y: t.top + a.y
    };
    return fc(i, e) > Z.maxBrowserDistance;
  }
  getChatShell() {
    return this.chatShell?.isConnected ? this.chatShell : (this.chatShell = this.root.querySelector("[data-chat-shell]"), this.chatShell);
  }
  isPointNearStoryCursor(e, t = na.radius) {
    const a = this.root.getBoundingClientRect(), i = this.cursor.readPosition(), n = {
      x: a.left + i.x,
      y: a.top + i.y
    };
    return Ge(e, n) <= t;
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
    this.pruneSampleList(this.samples, e, na.sampleWindowMs);
  }
  trackDismissShake(e, t) {
    this.dismissSamples.push({ ...e, time: t }), this.pruneSampleList(this.dismissSamples, t, rt.sampleWindowMs);
  }
  pruneSampleList(e, t, a) {
    let i = 0;
    for (; i < e.length && t - e[i].time > a; )
      i += 1;
    i > 0 && e.splice(0, i);
  }
  hasMimicGesture() {
    return this.samples.length < 4 ? !1 : this.samples.reduce((t, a, i) => {
      const n = this.samples[i - 1];
      return n ? t + Ge(a, n) : t;
    }, 0) >= na.minTravel && this.countAxisReversals(this.samples) >= na.minAxisReversals;
  }
  hasDismissShake() {
    if (this.dismissSamples.length < 6) return !1;
    for (let e = 0; e <= this.dismissSamples.length - 6; e += 1)
      if (this.isDismissShakeWindow(this.dismissSamples.slice(e))) return !0;
    return !1;
  }
  isDismissShakeWindow(e) {
    const t = e[0], a = e[e.length - 1], i = Math.max(1, a.time - t.time), n = e.reduce((l, c, d) => {
      const u = e[d - 1];
      return u ? l + Ge(c, u) : l;
    }, 0), o = Ge(t, a), s = n / Math.max(o, 1);
    return i >= rt.minDurationMs && n >= rt.minTravel && o <= rt.maxNetDistance && n / i >= rt.minAverageSpeed && s >= rt.minTravelToNetRatio && this.countAxisReversals(e) >= rt.minAxisReversals;
  }
  countAxisReversals(e) {
    let t = 0, a = 0, i = 0;
    for (let n = 1; n < e.length; n += 1) {
      const o = e[n - 1], s = e[n], l = Mn(s.x - o.x), c = Mn(s.y - o.y);
      l && a && l !== a && (t += 1), c && i && c !== i && (t += 1), l && (a = l), c && (i = c);
    }
    return t;
  }
}
function Ge(r, e) {
  return Math.hypot(e.x - r.x, e.y - r.y);
}
function hc(r) {
  return Math.min(1, Math.max(0, r));
}
function Tn(r, e, t) {
  return Math.min(t, Math.max(e, r));
}
function pc(r) {
  return -(Math.cos(Math.PI * r) - 1) / 2;
}
function En(r, e) {
  return {
    x: Tn(r.x, e, window.innerWidth - e),
    y: Tn(r.y, e, window.innerHeight - e)
  };
}
function gc(r, e, t, a) {
  const i = En(mc(r, e, t), a);
  if (Ge(i, e) >= t * 0.86) return i;
  const n = {
    x: window.innerWidth / 2 - e.x,
    y: window.innerHeight / 2 - e.y
  }, o = Math.hypot(n.x, n.y) || 1;
  return En({
    x: e.x + n.x / o * t,
    y: e.y + n.y / o * t
  }, a);
}
function mc(r, e, t) {
  const a = r.x - e.x, i = r.y - e.y, n = Math.hypot(a, i);
  if (n >= t) return r;
  const o = -Math.PI * 0.28, s = n > 0.01 ? a / n : Math.cos(o), l = n > 0.01 ? i / n : Math.sin(o);
  return {
    x: e.x + s * t,
    y: e.y + l * t
  };
}
function fc(r, e) {
  const t = Math.max(e.left - r.x, 0, r.x - e.right), a = Math.max(e.top - r.y, 0, r.y - e.bottom);
  return Math.hypot(t, a);
}
function wc(r, e) {
  const t = Math.hypot(r.x, r.y);
  return t <= e || t === 0 ? r : {
    x: r.x / t * e,
    y: r.y / t * e
  };
}
function Mn(r) {
  return Math.abs(r) < 2 ? 0 : Math.sign(r);
}
const Pn = {
  minPixelDelta: 0.5
};
class bc {
  constructor(e, t, a, i, n, o) {
    this.root = e, this.stories = t, this.resolver = a, this.cursor = i, this.chat = n, this.options = o, this.storyProgress = this.stories.map(() => 0), this.pausedCursorMimic = new uc(this.root, this.cursor, {
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
  storySwitchTimeline = null;
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
  storyTabListeners = [];
  storyProgressScrub = null;
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
    const t = m.timeline({
      onComplete: () => {
        this.resumeRestoreTimeline = null, this.playing && this.activeTimeline?.play();
      }
    });
    return e.forEach((a, i) => {
      const n = i === 0 ? 0 : ">";
      t.add(this.buildDataTablePageRestore(a), n);
    }), this.resumeRestoreTimeline = t, !0;
  }
  buildDataTablePageRestore(e) {
    const t = m.timeline();
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
  updateStories(e, t = {}) {
    if (!e.length) return;
    const a = this.stories[this.activeIndex]?.id, i = this.stories, n = new Map(this.stories.map((c, d) => [c.id, this.storyProgress[d] ?? 0])), o = this.cursor.getPosition(), s = this.playing, l = yc(i, e);
    if (this.stories = e, this.storyProgress = this.stories.map((c) => n.get(c.id) ?? 0), this.activeIndex = Math.max(0, this.resolveStoryIndex(a ?? this.stories[0].id)), l && this.renderStoryTabs(), t.restartActive) {
      this.stopTimeline(), this.setHistoryPaused(!1), this.rebuildActiveStoryTimeline(this.activeIndex, o), this.playing = s || this.options.autoplay, this.updatePlayButton(), this.playing && this.activeTimeline?.play();
      return;
    }
    this.updateStoryMeta(), this.updateAllTabProgress(), fn(this.stories, this.activeIndex);
  }
  goTo(e) {
    const t = this.resolveStoryIndex(e);
    t < 0 || !this.stories[t] || this.transitionToStory(t);
  }
  transitionToStory(e) {
    const t = this.cursor.getPosition(), a = !!this.activeTimeline;
    if (this.storyProgress[e] = 0, this.storySwitchTimeline?.kill(), this.storySwitchTimeline = null, this.stopTimeline(), this.setHistoryPaused(!1), !a) {
      this.activateStory(e, t);
      return;
    }
    this.playing = !1, this.updatePlayButton(), this.storySwitchTimeline = m.timeline({
      onComplete: () => {
        this.storySwitchTimeline = null, this.activateStory(e, t);
      }
    }), this.storySwitchTimeline.add(this.chat.animateStorySwitchExit());
  }
  activateStory(e, t) {
    this.rebuildActiveStoryTimeline(e, t), this.playing = this.options.autoplay, this.updatePlayButton(), this.options.onStoryChange?.(this.stories[this.activeIndex], this.activeIndex), this.options.autoplay && this.activeTimeline?.play();
  }
  destroy() {
    this.storySwitchTimeline?.kill(), this.storySwitchTimeline = null, this.stopTimeline(), this.pausedCursorMimic?.destroy(), this.resizeObserver?.disconnect(), window.clearTimeout(this.resizeTimer), this.clearStoryTabListeners();
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
      timeline: () => m.timeline()
    };
    a.prepare?.(i), this.resolver.refresh();
    const n = m.timeline({
      paused: !0,
      onUpdate: () => this.updateProgress(),
      onComplete: () => this.handleComplete()
    }), o = this.cursor.moveTo(a.entry, {
      mode: "text",
      intent: "entry",
      speed: "normal",
      label: "story-entry"
    }), s = a.build(i), l = a.entryLeadTime ?? 0.24;
    return n.add(o, 0), s.pause(0), n.add(s, Math.max(0, o.duration() - l)), s.paused(!1), this.chat.prepareStoryStart(), n;
  }
  rebuildActiveStoryTimeline(e, t, a = 0) {
    this.activeIndex = e, fn(this.stories, this.activeIndex), this.activeTimeline = this.buildTimeline(this.activeIndex, t), this.activeTimeline.progress(a).pause(), this.updateStoryMeta(), this.updateProgress();
  }
  stopTimeline() {
    this.autoAdvance?.kill(), this.seekTween?.kill(), this.resumeRestoreTimeline?.kill(), this.resumeRestoreTimeline = null, this.cancelHistoryParkMotion(), this.pausedCursorMimic?.setPaused(!1), this.activeTimeline?.kill(), this.activeTimeline = null, this.cursor.resetInteraction();
  }
  handleComplete() {
    const e = this.playing;
    this.playing = !1, this.updatePlayButton(), !(!this.options.autoplay || !e) && (!this.options.loop && this.activeIndex === this.stories.length - 1 || (this.autoAdvance?.kill(), this.autoAdvance = m.delayedCall(this.options.autoAdvanceDelay, () => this.next())));
  }
  seekTo(e, t = 0.28) {
    if (!this.activeTimeline) return;
    const a = this.playing;
    this.autoAdvance?.kill(), this.seekTween?.kill(), this.setHistoryPaused(!1), this.chat.stopScrollMotion();
    const i = oa(e), n = this.activeTimeline.duration();
    this.playing = a, this.seekTween = m.to(this.activeTimeline, {
      time: n * i,
      duration: t,
      ease: "power2.out",
      overwrite: !0,
      onUpdate: () => this.updateProgress(),
      onComplete: () => {
        a && this.activeTimeline?.play(), this.updatePlayButton();
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
    this.renderStoryTabs(), this.scrubber = this.root.querySelector("[data-story-scrubber]"), this.playButton = this.root.querySelector("[data-toggle-play]"), this.resumeButton = this.root.querySelector("[data-history-resume]"), this.on("[data-prev-story]", "click", () => this.previous()), this.on("[data-next-story]", "click", () => this.next()), this.on("[data-toggle-play]", "click", () => {
      this.playing ? this.pause() : this.play();
    }), this.on("[data-history-resume]", "click", () => this.play()), this.on("[data-story-scrubber]", "input", (e) => {
      const t = e.currentTarget;
      this.seekTo(Number(t.value) / 1e3);
    }), this.attachChatHistoryScroll();
  }
  createStoryTab(e, t) {
    const a = document.createElement("button");
    a.className = "wa-story-tab", a.type = "button", a.dataset.storyTab = e.id, a.style.setProperty("--wa-tab-progress", "0"), a.setAttribute("aria-pressed", "false");
    const i = (c) => {
      if ((c.target instanceof Element ? c.target : null)?.closest(".wa-story-tab__marker")) {
        c.preventDefault();
        return;
      }
      this.goTo(t);
    };
    a.addEventListener("click", i), this.storyTabListeners.push(() => a.removeEventListener("click", i));
    const n = document.createElement("span");
    n.className = "wa-story-tab__marker", n.setAttribute("aria-hidden", "true");
    const o = (c) => this.beginStoryProgressScrub(c, t, n);
    n.addEventListener("pointerdown", o), this.storyTabListeners.push(() => n.removeEventListener("pointerdown", o));
    const s = document.createElement("span");
    s.className = "wa-story-tab__body";
    const l = document.createElement("span");
    if (l.className = "wa-story-tab__title", l.textContent = e.navLabel ?? e.label, s.append(l), e.navDescription) {
      const c = document.createElement("span");
      c.className = "wa-story-tab__description", c.textContent = e.navDescription, s.append(c);
    }
    return a.append(n, s), a;
  }
  renderStoryTabs() {
    const e = this.root.querySelector("[data-story-tabs]");
    if (this.clearStoryTabListeners(), !e) {
      this.storyTabButtons = [];
      return;
    }
    this.storyTabButtons = this.stories.map((t, a) => this.createStoryTab(t, a)), e.replaceChildren(...this.storyTabButtons), this.updateAllTabProgress();
  }
  clearStoryTabListeners() {
    this.endStoryProgressScrub(!1);
    for (const e of this.storyTabListeners) e();
    this.storyTabListeners = [];
  }
  beginStoryProgressScrub(e, t, a) {
    e.preventDefault(), e.stopPropagation(), this.endStoryProgressScrub(!1);
    const i = this.playing, n = (c) => {
      c.pointerId === e.pointerId && (c.preventDefault(), this.scrubStoryProgress(t, a, c.clientY));
    }, o = (c) => {
      c.pointerId === e.pointerId && (c.preventDefault(), this.endStoryProgressScrub(!0));
    }, s = () => {
      window.removeEventListener("pointermove", n), window.removeEventListener("pointerup", o), window.removeEventListener("pointercancel", o);
    }, l = a.getBoundingClientRect();
    this.storyProgressScrub = {
      storyIndex: t,
      wasPlaying: i,
      pointerId: e.pointerId,
      marker: a,
      trackTop: l.top,
      trackHeight: l.height,
      removeListeners: s
    }, a.dataset.scrubbing = "true", window.addEventListener("pointermove", n, { passive: !1 }), window.addEventListener("pointerup", o, { passive: !1 }), window.addEventListener("pointercancel", o, { passive: !1 }), this.scrubStoryProgress(t, a, e.clientY);
  }
  scrubStoryProgress(e, t, a) {
    const i = this.getMarkerProgress(t, a, this.storyProgressScrub);
    this.activateStoryForProgressScrub(e), this.setActiveTimelineProgress(i);
  }
  activateStoryForProgressScrub(e) {
    if (e === this.activeIndex && this.activeTimeline) {
      this.prepareActiveTimelineForProgressScrub();
      return;
    }
    const t = this.cursor.getPosition(), a = this.storyProgressScrub?.wasPlaying ?? this.playing;
    this.stopTimeline(), this.activeIndex = e, this.activeTimeline = this.buildTimeline(this.activeIndex, t), this.playing = a, this.updateStoryMeta(), this.options.onStoryChange?.(this.stories[this.activeIndex], this.activeIndex), this.prepareActiveTimelineForProgressScrub();
  }
  prepareActiveTimelineForProgressScrub() {
    this.autoAdvance?.kill(), this.seekTween?.kill(), this.resumeRestoreTimeline?.kill(), this.resumeRestoreTimeline = null, this.setHistoryPaused(!1), this.chat.stopScrollMotion(), this.activeTimeline?.pause(), this.updatePlayButton();
  }
  setActiveTimelineProgress(e) {
    this.activeTimeline && (this.activeTimeline.progress(oa(e)).pause(), this.updateProgress());
  }
  endStoryProgressScrub(e) {
    const t = this.storyProgressScrub;
    t && (t.removeListeners(), t.marker.removeAttribute("data-scrubbing"), this.storyProgressScrub = null, this.playing = e ? t.wasPlaying : this.playing, e && t.wasPlaying ? this.activeTimeline?.play() : this.activeTimeline?.pause(), this.updatePlayButton());
  }
  getMarkerProgress(e, t, a = null) {
    if (a?.marker === e && a.trackHeight > 0)
      return oa((t - a.trackTop) / a.trackHeight);
    const i = e.getBoundingClientRect();
    return i.height <= 0 ? 0 : oa((t - i.top) / i.height);
  }
  attachChatHistoryScroll() {
    const e = this.root.querySelector("[data-chat-shell]"), t = this.root.querySelector("[data-chat-thread]");
    if (!e || !t) return;
    const a = (i) => {
      if (!this.activeTimeline || Math.abs(i.deltaX) > Math.abs(i.deltaY)) return;
      const n = this.getWheelPixelDelta(i);
      if (Math.abs(n) < Pn.minPixelDelta) return;
      const o = this.getThreadMaxScroll(t);
      if (o <= 0 || !(n < 0 || this.historyPaused)) return;
      const l = Qr(t.scrollTop + n, 0, o);
      if (!(Math.abs(l - t.scrollTop) >= 0.5)) return;
      const d = Math.max(0, n - (o - t.scrollTop));
      i.preventDefault(), this.pauseForChatHistory(), t.scrollTop = l, d >= Pn.minPixelDelta && window.scrollBy({ top: d, left: 0, behavior: "auto" });
    };
    e.addEventListener("wheel", a, { passive: !1 }), this.listeners.push(() => e.removeEventListener("wheel", a));
  }
  getWheelPixelDelta(e) {
    return e.deltaMode === WheelEvent.DOM_DELTA_LINE ? e.deltaY * 16 : e.deltaMode === WheelEvent.DOM_DELTA_PAGE ? e.deltaY * window.innerHeight : e.deltaY;
  }
  pauseForChatHistory() {
    this.historyPaused || (this.playing = !1, this.autoAdvance?.kill(), this.seekTween?.kill(), this.activeTimeline?.pause(), this.chat.stopScrollMotion(), this.chat.prepareForChatHistoryPause(), this.cancelHistoryParkMotion(), this.historyParkTimeline = this.cursor.parkForChatHistory(), this.setHistoryPaused(!0), this.updatePlayButton());
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
    this.stopTimeline(), this.rebuildActiveStoryTimeline(this.activeIndex, a, e), t && this.play();
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
function Qr(r, e, t) {
  return Math.min(t, Math.max(e, r));
}
function oa(r) {
  return Qr(r, 0, 1);
}
function yc(r, e) {
  return r.length !== e.length ? !0 : e.some((t, a) => {
    const i = r[a];
    return !i || i.id !== t.id || i.label !== t.label || i.navLabel !== t.navLabel || i.navDescription !== t.navDescription;
  });
}
const sa = ["mobile", "tablet", "desktop", "wide"];
class _c {
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
    const n = this.findElement(a.target);
    if (!n)
      return this.resolveFallbackPoint(a, i);
    const o = n.getBoundingClientRect();
    let s = this.anchorPoint(o, a.anchor ?? "center");
    if (s = {
      x: s.x - i.left,
      y: s.y - i.top
    }, a.outside && (s = this.outsidePoint(s, o, i, a.outside)), a.humanOffset) {
      const l = Ir(t), c = Math.min(o.width * 0.18, 18), d = Math.min(o.height * 0.18, 14);
      s.x += (l() - 0.5) * c, s.y += (l() - 0.5) * d;
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
      const t = this.getBreakpoint(), a = sa.indexOf(t), i = [
        t,
        ...sa.slice(0, a).reverse(),
        ...sa.slice(a + 1)
      ];
      for (const n of i)
        if (e[n]) return e[n];
      return {};
    }
    return e;
  }
  isBreakpointMap(e) {
    return sa.some((t) => t in e);
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
    const n = t.left - a.left, o = t.right - a.left, s = t.top - a.top, l = t.bottom - a.top;
    switch (i) {
      case "left":
        return { ...e, x: n - 42 };
      case "right":
        return { ...e, x: o + 42 };
      case "top":
        return { ...e, y: s - 42 };
      case "bottom":
        return { ...e, y: l + 42 };
      default:
        return e;
    }
  }
}
const xc = 3, vc = /* @__PURE__ */ new Set([
  "user",
  "assistant",
  "thinking",
  "component",
  "cursor",
  "status",
  "file"
]);
function kc(r) {
  if (!vt(r) || !Array.isArray(r.stories)) return null;
  const e = typeof r.schemaVersion == "number" ? r.schemaVersion : 1, t = r.stories.map((a) => Cc(a)).filter((a) => !!a);
  return t.length ? { schemaVersion: e, stories: t } : null;
}
function Ac(r) {
  return vc.has(r);
}
function Sc(r) {
  return typeof structuredClone == "function" ? structuredClone(r) : JSON.parse(JSON.stringify(r));
}
function vt(r) {
  return !!(r && typeof r == "object" && !Array.isArray(r));
}
function Cc(r) {
  if (!vt(r) || !Array.isArray(r.steps)) return null;
  const e = xe(r.id), t = xe(r.label), a = xe(r.summary), i = r.steps.map((n) => Tc(n)).filter((n) => !!n);
  return !e || !t || !i.length ? null : {
    id: e,
    label: t,
    summary: a ?? "",
    steps: i
  };
}
function Tc(r) {
  if (!vt(r)) return null;
  const e = xe(r.id), t = xe(r.kind), a = xe(r.text), i = xe(r.note);
  return !e || !t || !Ac(t) ? null : {
    id: e,
    kind: t,
    text: a ?? "",
    note: i ?? "",
    thinking: vt(r.thinking) ? Ec(r.thinking, a ?? "", i ?? "") : t === "thinking" ? Kr(a ?? "", i ?? "") : void 0,
    component: vt(r.component) ? Sc(r.component) : void 0
  };
}
function Ec(r, e, t) {
  const i = (Array.isArray(r.items) ? r.items : []).map((n, o) => Mc(n, o)).filter((n) => !!n);
  return i.length ? {
    title: xe(r.title) ?? De,
    elapsed: xe(r.elapsed) ?? Aa(i.length),
    items: i
  } : Kr(e, t);
}
function Mc(r, e) {
  if (!vt(r)) return null;
  const t = xe(r.label);
  return t ? {
    label: t,
    detail: xe(r.detail) ?? Li(t, e),
    disclosure: xe(r.disclosure) ?? (e === 0 ? Ht : ua)
  } : null;
}
function Kr(r, e = "") {
  return {
    title: De,
    elapsed: Aa(1),
    items: [
      {
        label: r || "Thinking",
        detail: e || Li(r || "Thinking", 0),
        disclosure: Ht
      }
    ]
  };
}
function xe(r) {
  return typeof r == "string" ? r : null;
}
async function Pc(r, e) {
  try {
    const t = await fetch(r, {
      method: "GET",
      cache: "no-store",
      headers: { Accept: "application/json" }
    });
    if (!t.ok) return;
    const a = kc(await t.json());
    if (!a || a.schemaVersion !== xc) return;
    e(a.stories, { source: "load" });
  } catch {
  }
}
function Rc(r) {
  r.classList.add("wa-section"), !r.querySelector("[data-chat-shell]") && (r.innerHTML = `
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
          <button class="wa-control-button" type="button" data-prev-story aria-label="Previous story">
            <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
              <path d="M10 3.5 5.5 8l4.5 4.5"></path>
            </svg>
          </button>
          <button class="wa-control-button" type="button" data-toggle-play aria-label="Pause animation">Pause</button>
          <button class="wa-control-button" type="button" data-next-story aria-label="Next story">
            <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
              <path d="m6 3.5 4.5 4.5L6 12.5"></path>
            </svg>
          </button>
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
                <span class="wa-signup-scene__logo" data-signup-logo-target aria-hidden="true">${Er}</span>
                <h3 class="wa-signup-scene__title">Sign up</h3>
                <div class="wa-signup-field" data-signup-field>
                  <span data-signup-email></span>
                  <button class="wa-signup-field__submit" type="button" data-signup-submit aria-label="Sign in">
                    <svg class="wa-signup-field__submit-icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d="M12 5l0 14"></path>
                      <path d="M18 13l-6 6"></path>
                      <path d="M6 13l6 6"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div class="wa-thread" data-chat-thread></div>
            </div>

            <div class="wa-composer" data-chat-input>
              <span class="wa-composer__placeholder" data-composer-text></span>
              <div class="wa-composer__controls">
                <span class="wa-composer__select" aria-hidden="true">
                  GPT 5.5
                  <svg class="wa-composer__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M6 9l6 6l6 -6"></path>
                  </svg>
                </span>
                <span class="wa-composer__select" aria-hidden="true">
                  High
                  <svg class="wa-composer__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M6 9l6 6l6 -6"></path>
                  </svg>
                </span>
                <button class="wa-composer__send" type="button" data-send-button aria-label="Send message">
                  <svg class="wa-composer__send-icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M12 5l0 14"></path>
                    <path d="M18 11l-6 -6"></path>
                    <path d="M6 11l6 -6"></path>
                  </svg>
                </button>
              </div>
            </div>

            <button class="wa-history-resume" type="button" data-history-resume aria-hidden="true" tabindex="-1">
              <span class="wa-history-resume__icon" aria-hidden="true">
                <svg class="wa-history-resume__svg" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M7 4v16l13 -8z"></path>
                </svg>
              </span>
              <span>Continue playing</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `);
}
function Ic(r, e = {}) {
  Rc(r);
  const t = e.stories?.length ? e.stories : $r, a = e.builderDraftEndpoint ?? "/api/story-draft", i = e.reducedMotion ?? window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? !1, n = new _c(r), o = new Gs(r), s = new Zs(r, n, { reducedMotion: i }), l = new bc(r, t, n, s, o, {
    autoplay: e.autoplay ?? !0,
    loop: e.loop ?? !0,
    autoAdvanceDelay: e.autoAdvanceDelay ?? 3.2,
    initialStory: e.initialStory ?? 0,
    onStoryChange: e.onStoryChange
  }), c = (d, u = {}) => {
    l.updateStories(kl(d, t), {
      restartActive: u.source === "load"
    });
  };
  return l.mount(), a && Pc(a, c), {
    play: l.play.bind(l),
    pause: l.pause.bind(l),
    next: l.next.bind(l),
    previous: l.previous.bind(l),
    goTo: l.goTo.bind(l),
    getState: l.getState.bind(l),
    destroy: () => {
      l.destroy(), o.destroy(), s.destroy();
    }
  };
}
function Lc(r, e) {
  const t = document.getElementById(r);
  if (t instanceof HTMLStyleElement) {
    t.textContent !== e && (t.textContent = e);
    return;
  }
  const a = document.createElement("style");
  a.id = r, a.textContent = e, document.head.append(a);
}
const Dc = `:root{--wa-page-bg: #fffff9}html,body{margin:0;background:var(--wa-page-bg)}.wa-section,.wa-section *{box-sizing:border-box}.wa-section,.wa-section[data-theme=light]{--wa-font-sans: "Saans", "Avenir Next", Helvetica, sans-serif;--wa-font-feature: "Feature Text", Georgia, serif;--wa-bg: #fffff9;--wa-panel: #fffff9;--wa-panel-transparent: rgba(255, 255, 249, 0);--wa-ink: #252521;--wa-muted: #11110f;--wa-soft: #dcdcd4;--wa-browser-line: #d7d7cf;--wa-orange: #f23b0a;--wa-red: #f16055;--wa-yellow: #f6ba42;--wa-green: #58bd59;--wa-color-bg: var(--wa-bg);--wa-color-panel: var(--wa-panel);--wa-color-text: var(--wa-ink);--wa-color-heading: var(--wa-ink);--wa-color-heading-strong: #070707;--wa-color-copy: #171714;--wa-color-muted: #5e5c56;--wa-color-accent: var(--wa-orange);--wa-color-inverse: #fffff9;--wa-color-dark-surface: #171714;--wa-color-soft-surface: #f5f4ed;--wa-color-user-message: #ecebe5;--wa-color-input-line: #d9d8d1;--wa-color-positive: #177947;--wa-color-warning: #b44927;--wa-line-08: rgba(23, 23, 20, .08);--wa-line-10: rgba(23, 23, 20, .1);--wa-line-12: rgba(23, 23, 20, .12);--wa-line-16: rgba(23, 23, 20, .16);--wa-line-20: rgba(23, 23, 20, .2);--wa-placeholder: rgba(23, 23, 20, .38);--wa-browser-bar-bg: rgba(255, 255, 249, .96);--wa-window-highlight: rgba(255, 255, 255, .86);--wa-window-hairline: rgba(0, 0, 0, .03);--wa-card-accent-bg: rgba(242, 59, 10, .13);--wa-row-bg: rgba(245, 244, 237, .82);--wa-cursor-shadow: rgba(0, 0, 0, .12);--wa-media-warm-1: rgba(255, 139, 77, .32);--wa-media-warm-2: rgba(58, 20, 18, .78);--wa-media-warm-3: rgba(8, 6, 6, .24);--wa-media-warm-4: rgba(131, 49, 38, .86);--wa-media-line: rgba(255, 255, 249, .1);--wa-media-base-1: #1a0908;--wa-media-base-2: #6b2820;--wa-media-base-3: #24100d;--wa-media-shadow: 0 44px 96px rgba(24, 20, 16, .18);--wa-window-shadow: 0 52px 42px rgba(31, 30, 26, .22);--wa-card-shadow: 0 10px 28px rgba(23, 23, 20, .08);--wa-section-padding: 126px 32px 140px;--wa-content-max: 1400px;--wa-copy-max: 1100px;--wa-left-column: minmax(420px, 570px);--wa-right-column: minmax(560px, 660px);--wa-column-gap: 116px;--wa-row-gap: 82px;--wa-stage-width: 660px;--wa-stage-min-height: 650px;--wa-media-width: 418px;--wa-media-height: 720px;--wa-window-width: 590px;--wa-window-height: 530px;--wa-chat-x-padding: 24px;--wa-chat-entry-gap: 16px;--wa-chat-top-fade: calc(var(--wa-chat-x-padding) + 4px);--wa-chat-bottom-clearance: 110px;--wa-chat-first-entry-offset: var(--wa-chat-x-padding);--wa-ai-message-max-width: 540px;--wa-user-message-max-width: 360px;--wa-chat-message-weight: 430;--wa-chat-thinking-header-weight: 430;--wa-chat-thinking-weight: 400;--wa-chat-detail-weight: 400;--wa-thinking-logo-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 11'%3E%3Cpath fill='black' d='M5.71835 3.84074V0H0V5.12789C0 7.97387 2.13981 10.9988 6.10463 10.9988H8.4998V5.49938L7.40298 5.48406C6.46808 5.4708 5.71706 4.7386 5.71706 3.8395L5.71835 3.84074Z'/%3E%3Cpath fill='black' d='M11.2814 7.15899V10.9997H16.9998V5.87225C16.9998 3.02586 14.86 0.000976562 10.8952 0.000976562H8.5V5.50036L9.59682 5.51568C10.5317 5.52893 11.2827 6.26113 11.2827 7.16023L11.2814 7.15899Z'/%3E%3C/svg%3E");--wa-composer-side-inset: -21px;--wa-composer-bottom-outset: -21px;--wa-composer-height: 102px;--wa-composer-send-size: 36px;--wa-history-resume-height: 42px;--wa-history-resume-y-offset: 44px;--wa-cursor-default-width: 14px;--wa-cursor-default-height: 23px;--wa-title-size: clamp(38px, 3vw, 54px);--wa-title-line-height: 1.12;--wa-feature-title-size: clamp(25px, 1.7vw, 34px);--wa-feature-copy-size: clamp(16px, 1vw, 20px);--wa-radius-sm: 8px;--wa-radius-window: 18px;--wa-story-progress: 0;--wa-cursor-arrow-head: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAYAAADeB1slAAABP0lEQVR42t3XwXGEIBQG4NeBR49uB6QDSqAEtgPSAXvMzXTglpAOSAeWgB2wHbwMGTQq7gL6vOSfQR2HeZ+IOgiICIh4QcS3cEza/OaKf/k6A/jGZe6nANZadM6RIxPAOUfGGDmyAACAHIkAamQToESeAlTIS4ACSQJHkSzgCJIN7EWKgD1IMVCK7AJKkN1ALnIIyEEOAymEBNhAPskB33yNkMcpAPyWm0IPaK1pRmCMwURu2UBd19E5KeWzwo958SQghMBhGGArzrljX9PZVYKUMgK01mWAUmoq3rbt4mkwxkRA0zTZwPtYyU9e3/fz4h9jR8ZYhHRdlwVAeL3Xuc47+mLrcM6zAQir61sY0WXd0U9qVVURYq3NBpJNKRUB/gEgA/zVlt6m4oWUEOK8EYxzMSJ+n3rh4Izfpv8F/ADB/dNnKnKg1wAAAABJRU5ErkJggg==);--wa-cursor-arrow-tail: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAYAAADeB1slAAABSUlEQVR42t3X3XGEIBAHcDrw3nw0HVAC6YASSAekA+3AdOB1wnWgHWAHXAdkljkyRPxAFvOQnXF8UP8/XHAGibWWXHmQ/wNorYkx5jqAMUYopcWRXwBUaSQCSiOrQElkEyiF7AIlkEMAiyQBGCQZyEVOATnIaeAskgWcQbKBVAQFpCBo4AgpAuwhxQAoyLgUgCoF2LWjbVv7qmcu4IKUUvagumSgruto1EKIreBnGH4IcM7JPM+r7TDG+NCPrA9NCOGvuRHv9PuRBEgpf8L7vg9vcj1fAk3ThK15S9rZKaXIOI7Lm1xRSiNkGAZ/+Y7ZOsLDLmwJMMbCyb3lAu+QAJNaVVWEaK098onZ/E6QIKWMgGDJPjAALEU32p02Wez2HfpsOedbbzBhgc7PhUfgHHxwHRa4+blYqQmzipbI3bfrFfy1Ff4nv1DfGYDdsG+uObgAAAAASUVORK5CYII=);--wa-cursor-arrow: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAYAAADeB1slAAABXElEQVRIx7XWTZWDMBAA4DigN47UAeuAdYAEcEAdwHFv1AGVsA7AATgAB9RBlulL2AAhv8O8N23awnzNHy+EUkqWvC/5xdqoCS85/Y/fK4CObuN1CTCOI53nGR1ZgSRJaBzH6MgGIMtHbOQAYCNSABM5BbAQJYCBaAFfxAjwQYwBV8QKcEGsAVvECbBBnAFTxAswQbwBHYICSJAnOgAJNVi8LwHIp9wa+EBZljg9aNuWaqIyBsIwPHyXZdlZ4bdYXAukaUqnaZLCworJnR4V4r+EtmK8OyOgKIr15rquN/2GMd8DURSJl9xVwEMs1Pe9eOMPb8BG2iNN0xg97Ai7YB+5+BsU02ysmwog7HRdsR6JXf6GCjCpQRAcEDhysnjoAFUO+3mSLIbOB8j5AVkxTNQHIGycP3vjpAeDL1DxueAIvAsbrvIFbnwuJDGYrCJT5MWHixV+nhV3AazzD2y9OM7DgeyVAAAAAElFTkSuQmCC);--wa-cursor-hand: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABY2lDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokX2QsUvDUBDGv1aloHUQHRwcMolDlJIKuji0FURxCFXB6pS+pqmQxkeSIgU3/4GC/4EKzm4Whzo6OAiik+jm5KTgouV5L4mkInqP435877vjOCA5bnBu9wOoO75bXMorm6UtJfWMBL0gDObxnK6vSv6uP+P9PvTeTstZv///jcGK6TGqn5QZxl0fSKjE+p7PJe8Tj7m0FHFLshXyieRyyOeBZ71YIL4mVljNqBC/EKvlHt3q4brdYNEOcvu06WysyTmUE1jEDjxw2DDQhAId2T/8s4G/gF1yN+FSn4UafOrJkSInmMTLcMAwA5VYQ4ZSk3eO7ncX3U+NtYMnYKEjhLiItZUOcDZHJ2vH2tQ8MDIEXLW54RqB1EeZrFaB11NguASM3lDPtlfNauH26Tww8CjE2ySQOgS6LSE+joToHlPzA3DpfAEDp2ITpJYOWwAAAARjSUNQDA0AAW4D4+8AAACyZVhJZk1NACoAAAAIAAQBMQACAAAAGAAAAD4BMgACAAAAGgAAAFYBOwACAAAAIwAAAHCHaQAEAAAAAQAAAJQAAAAAQWRvYmUgUERGIGxpYnJhcnkgMTcuMDAAMjAyNS0wMi0xNCAwNTo0MTo0NCArMDAwMABBZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAAAljtskAAACQGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDxkYzpjcmVhdG9yPgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaT5BZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC9kYzpjcmVhdG9yPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBERiBsaWJyYXJ5IDE3LjAwPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgp5+ZGuAAACK0lEQVRYCWNgGAWjITAaAkMwBHKBbv4ExCeBWIhS9zOTYcDuHz9+vH779u23M2fO/AHqP0OGGXAtLHAW8Qw+dnZ2Ni0trSdALXzEa8Oukgm7MP1EKXWAINCpcpQ4lyIHCAsLp4mIiJwHOqAciNWAmJVUxxDrAGWgwezohq9bt+7S7du3nzIzM7eqqKjsBcofB2JQqBANiHHALCkpqWNsbGygbIfhCA4gMDIyugt0iIyBgYEAExPTa6C6xUDMSIwriHGA8507d96vWrXqPdDACKihjJaWlkyqqqpcQAtZgG74CxIXEhL68eLFi4umpqZmQK4/VC3F1OJDhw4d+Pfv3zteXt6jQNP+A8F3EAEDQLk3IDbQoceB1MdNmzbtB6rrpdhmqAEeTk5Ol0EWdHZ2HsTmAJAcMjh16tQhoLpF1HIAqLB6+evXrwe/f/9+PHny5APIlmFjA0tIkANA6YBqYPKaNWv2Y7MMm9jevXsPAG2eQYztxCRCkDlL6+rqFID0fxCHELh79y5I3TNC6kiVv/T48eNT2HyMLgbMlreBhruRagEh9YE6Ojr3gJZ9QrcQmf/o0aMTQIMeAzEzIQPJkZ/v4+Nz4e/fvy+RLYWxgVX0BVFRUVBB5EqO4cToAfmqn4+P70Nra+uhixcvHr53797xI0eOHExISDgFLJLfAuUDiTEIpoao4hKmGInWBLKjgFgfiDmB+DkQg+qB5UD8AYhHwWgIjIYA0SEAALLUdbtDe5+9AAAAAElFTkSuQmCC);--wa-cursor-ibeam: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAYAAAArdgcFAAABY2lDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokX2QsUvDUBDGv1aloHUQHRwcMolDlJIKuji0FURxCFXB6pS+pqmQxkeSIgU3/4GC/4EKzm4Whzo6OAiik+jm5KTgouV5L4mkInqP435877vjOCA5bnBu9wOoO75bXMorm6UtJfWMBL0gDObxnK6vSv6uP+P9PvTeTstZv///jcGK6TGqn5QZxl0fSKjE+p7PJe8Tj7m0FHFLshXyieRyyOeBZ71YIL4mVljNqBC/EKvlHt3q4brdYNEOcvu06WysyTmUE1jEDjxw2DDQhAId2T/8s4G/gF1yN+FSn4UafOrJkSInmMTLcMAwA5VYQ4ZSk3eO7ncX3U+NtYMnYKEjhLiItZUOcDZHJ2vH2tQ8MDIEXLW54RqB1EeZrFaB11NguASM3lDPtlfNauH26Tww8CjE2ySQOgS6LSE+joToHlPzA3DpfAEDp2ITpJYOWwAAAARjSUNQDA0AAW4D4+8AAACyZVhJZk1NACoAAAAIAAQBMQACAAAAGAAAAD4BMgACAAAAGgAAAFYBOwACAAAAIwAAAHCHaQAEAAAAAQAAAJQAAAAAQWRvYmUgUERGIGxpYnJhcnkgMTcuMDAAMjAyNS0wMi0yMSAyMjo0Nzo0MyArMDAwMABBZG9iZSBJbGx1c3RyYXRvciAyOS4wIChNYWNpbnRvc2gpAAAAAqACAAQAAAABAAAAF6ADAAQAAAABAAAAFgAAAABjOXNcAAACQGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDxkYzpjcmVhdG9yPgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaT5BZG9iZSBJbGx1c3RyYXRvciAyOS4wIChNYWNpbnRvc2gpPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC9kYzpjcmVhdG9yPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBERiBsaWJyYXJ5IDE3LjAwPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpTAn2BAAABF0lEQVQ4Ee2Vu26DQBBF7QjnL2KIW+iAys7DXwRtksofB/QUPGpHiiMBFbiDmztWIjkysjBbpIiRrnZnd+bsMtLsTCZ/+QEwqAdqJveQkVpSc6V7EXDfNM0+DEN0XbejvWnbdhcEAeq63tM2Rh/A4Oc0TWGaJlzXRRzHcBwHlmUhyzJu40kFPiXgjXr3PA+apsH3fYFuqdfR4ONAgvSiKMA1lGUp8LvjfeW5EAX+PQ7i3QzyGul0hfcm7pqW/5gWVqXOsj/8elVVUqbq5U/IuYfrpTfRQxcJXydJ8uvJtW378OTmec5tPA5lnfgxeCFNIYoiaRYftKVZfIrNJtLQNk6CLlkgQKekrf20uVvOV5Ram7vkEn2+X1iD5YNPxBZmAAAAAElFTkSuQmCC);--wa-cursor-openhand: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABY2lDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokX2QsUvDUBDGv1aloHUQHRwcMolDlJIKuji0FURxCFXB6pS+pqmQxkeSIgU3/4GC/4EKzm4Whzo6OAiik+jm5KTgouV5L4mkInqP435877vjOCA5bnBu9wOoO75bXMorm6UtJfWMBL0gDObxnK6vSv6uP+P9PvTeTstZv///jcGK6TGqn5QZxl0fSKjE+p7PJe8Tj7m0FHFLshXyieRyyOeBZ71YIL4mVljNqBC/EKvlHt3q4brdYNEOcvu06WysyTmUE1jEDjxw2DDQhAId2T/8s4G/gF1yN+FSn4UafOrJkSInmMTLcMAwA5VYQ4ZSk3eO7ncX3U+NtYMnYKEjhLiItZUOcDZHJ2vH2tQ8MDIEXLW54RqB1EeZrFaB11NguASM3lDPtlfNauH26Tww8CjE2ySQOgS6LSE+joToHlPzA3DpfAEDp2ITpJYOWwAAAARjSUNQDA0AAW4D4+8AAACyZVhJZk1NACoAAAAIAAQBMQACAAAAGAAAAD4BMgACAAAAGgAAAFYBOwACAAAAIwAAAHCHaQAEAAAAAQAAAJQAAAAAQWRvYmUgUERGIGxpYnJhcnkgMTcuMDAAMjAyNS0wMi0yMCAxNzoyNTozNyArMDAwMABBZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAAA8V+2fAAACQGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDxkYzpjcmVhdG9yPgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaT5BZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC9kYzpjcmVhdG9yPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBERiBsaWJyYXJ5IDE3LjAwPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgp5+ZGuAAACyElEQVRYCe2Vy2saURTG76hoxvcjLYSWLoKRarVIA6HZFUtJa3bBdFdcSFYuusqi4Lalu4p05cb2P1C6KCW07qQkCKkv3IgurNESBRPHKb5uvxlqcRGswUmh4IWDM3Ou5/vd7547Q8hiLBxYOPCfO2AH/0OE7F+tQw4hN0KDeKBWqzurq6tnOp3uHe6XEdsIA+JqBoQ+ILoQPpHJZG9CodCoXC5T3LdYlj1xOBxt5EtQV8xKcCnrOI57XK1WWY/Hox2NRj6NRsMoFArS7XZNcILN5/N6wFyD+I0rAcDqGrVajWxtbWkhcJNhGEIpFbU2NzdVw+GQnJ6eqgEWB0gDiUd/A7mUAyqVqlAsFsnGxoZYVwCAE+L1+vr6UqlUIoCQ7+zs2MPh8HWz2fxKCgAlitxGyDqdzlcAULfbTeRy+RB98McBl8tFCoWCqLe/v68ymUwEgM15AZb0en0R+3toMBhS2Otvx8fHnFKpJHa7nZ90wOl0EvTACHM7Akwmkxm22+3DeQGs2MtlWKtbW1u7g2LObDY7EIp6vV4WFhPkCcQpAEkulxsEAgFWyB8dHXGDwSAvXM8zFDheLayGoiBFE/7A/U803oUjlUrRVqsl5lZWVtoQds0jLv4Xdr/c29vjhao+n4/DQ9poNC4EGD/keZ6iP/qYq5obAAVuYdU8GpDW63UaDAZ7gsC0kU6nqVar/S6FuFgD1n+ORqOjaaKTuVgsRtG8nyQDQKFtq9V6Niky7drv9wtb9UJKAAZvt3I8Hp+mK+Z6vZ7QrF2I35USQKj1xGKxcM1mcypEJBIZAjYttbhYD8341maznVcqlQshDg4OKF7Xgv33ZgVgZp34ex6DY/ka6s93d3cH+CpqjEYjwbEkiUTiPJlMMv1+/ynmfpy17mUBxnWFb8MzWH0f512HD1ADr+kvePYe0RpPWvwuHFg4MIsDvwAylvevmzFHiwAAAABJRU5ErkJggg==);--wa-cursor-closedhand: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABY2lDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokX2QsUvDUBDGv1aloHUQHRwcMolDlJIKuji0FURxCFXB6pS+pqmQxkeSIgU3/4GC/4EKzm4Whzo6OAiik+jm5KTgouV5L4mkInqP435877vjOCA5bnBu9wOoO75bXMorm6UtJfWMBL0gDObxnK6vSv6uP+P9PvTeTstZv///jcGK6TGqn5QZxl0fSKjE+p7PJe8Tj7m0FHFLshXyieRyyOeBZ71YIL4mVljNqBC/EKvlHt3q4brdYNEOcvu06WysyTmUE1jEDjxw2DDQhAId2T/8s4G/gF1yN+FSn4UafOrJkSInmMTLcMAwA5VYQ4ZSk3eO7ncX3U+NtYMnYKEjhLiItZUOcDZHJ2vH2tQ8MDIEXLW54RqB1EeZrFaB11NguASM3lDPtlfNauH26Tww8CjE2ySQOgS6LSE+joToHlPzA3DpfAEDp2ITpJYOWwAAAARjSUNQDA0AAW4D4+8AAACyZVhJZk1NACoAAAAIAAQBMQACAAAAGAAAAD4BMgACAAAAGgAAAFYBOwACAAAAIwAAAHCHaQAEAAAAAQAAAJQAAAAAQWRvYmUgUERGIGxpYnJhcnkgMTcuMDAAMjAyNS0wMi0yMCAxNzoxODoxNyArMDAwMABBZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAAALcJCvAAACQGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDxkYzpjcmVhdG9yPgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaT5BZG9iZSBJbGx1c3RyYXRvciAyOS4zIChNYWNpbnRvc2gpPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC9kYzpjcmVhdG9yPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBERiBsaWJyYXJ5IDE3LjAwPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgp5+ZGuAAAB5ElEQVRYCe1UP2vqUBy9Jv6NURAe2FE7CuKbpG46tltxcHhDR7+CSFf3fgChS6lTcXEUVCgoCNKxRazDez6KiLymNCYx5vakaCltaW5Ly1vuD37k5ubcc07OvQkhvHgCPAGeAE+AJ/CfExA/ob+NNQdoTyQSOQyHwxXTNIXVarWFuR30FdpEf0v5AoHATT6fv/f5fItUKqW0223q9Xr1WCympNPpO1mWz75FGaQhdBHCGkWVSiWtXC7r9jiTyejNZpP2ej0qCIIBQ4rf7z/+SiMyCH9D6BYJrIbDoa37qlqtFk0kEnq/36cwqsOA9FUm9pPJ5D9bMZfLmbVa7ZX4ywmPx2MbEJwMuJ0A6+c/UNQeVyoVMRqNvrtsPp8TURSN5XJpvQvEQ1YDs8lk8siFbXDiJIPBgGCrrjVNc8Q6RrRmuBiNRrKiKI6ENgBnwVRV9ZwJzArCIbysVqvWy71+6z4ej9tOd1m5WXH7oVBInc1mb2k+zdXrdSpJ0h+Qsm4vqz4h+L5P8XZ34/H4SfD5oNvt0mAwqIJxj5XVxQpc4wSc7iOXy1UsFApmNpuV8Ocj0+mUNBoNpdPpuA3DKAJ7wsr7UQMb3p8Y/MJJT+PPF7As6+9isehgroa+2YD4lSfAE2BJ4AH/finPJ7GZOAAAAABJRU5ErkJggg==);position:relative;isolation:isolate;min-height:100svh;overflow:hidden;padding:var(--wa-section-padding);color:var(--wa-color-text);font-family:var(--wa-font-sans);letter-spacing:0;background:var(--wa-bg)}.wa-section[data-theme=dark]{--wa-bg: #10100d;--wa-panel: #191914;--wa-panel-transparent: rgba(25, 25, 20, 0);--wa-ink: #f7f4ea;--wa-muted: #f7f4ea;--wa-soft: #49473f;--wa-browser-line: #3d3b34;--wa-color-bg: var(--wa-bg);--wa-color-panel: var(--wa-panel);--wa-color-text: var(--wa-ink);--wa-color-heading: var(--wa-ink);--wa-color-heading-strong: #fffdf3;--wa-color-copy: #d9d4c8;--wa-color-muted: #aaa396;--wa-color-inverse: #10100d;--wa-color-dark-surface: #f7f4ea;--wa-color-soft-surface: #25241f;--wa-color-input-line: #504d45;--wa-line-08: rgba(255, 253, 243, .08);--wa-line-10: rgba(255, 253, 243, .1);--wa-line-12: rgba(255, 253, 243, .12);--wa-line-16: rgba(255, 253, 243, .16);--wa-line-20: rgba(255, 253, 243, .2);--wa-placeholder: rgba(255, 253, 243, .38);--wa-browser-bar-bg: rgba(25, 25, 20, .96);--wa-window-highlight: rgba(255, 253, 243, .08);--wa-window-hairline: rgba(0, 0, 0, .24);--wa-card-accent-bg: rgba(242, 59, 10, .2);--wa-row-bg: rgba(255, 253, 243, .06);--wa-media-shadow: 0 44px 96px rgba(0, 0, 0, .38);--wa-window-shadow: 0 52px 42px rgba(0, 0, 0, .42);--wa-card-shadow: 0 10px 28px rgba(0, 0, 0, .24)}@media(prefers-color-scheme:dark){.wa-section[data-theme=system]{--wa-bg: #10100d;--wa-panel: #191914;--wa-panel-transparent: rgba(25, 25, 20, 0);--wa-ink: #f7f4ea;--wa-muted: #f7f4ea;--wa-soft: #49473f;--wa-browser-line: #3d3b34;--wa-color-bg: var(--wa-bg);--wa-color-panel: var(--wa-panel);--wa-color-text: var(--wa-ink);--wa-color-heading: var(--wa-ink);--wa-color-heading-strong: #fffdf3;--wa-color-copy: #d9d4c8;--wa-color-muted: #aaa396;--wa-color-inverse: #10100d;--wa-color-dark-surface: #f7f4ea;--wa-color-soft-surface: #25241f;--wa-color-user-message: #2d2b26;--wa-color-input-line: #504d45;--wa-line-08: rgba(255, 253, 243, .08);--wa-line-10: rgba(255, 253, 243, .1);--wa-line-12: rgba(255, 253, 243, .12);--wa-line-16: rgba(255, 253, 243, .16);--wa-line-20: rgba(255, 253, 243, .2);--wa-placeholder: rgba(255, 253, 243, .38);--wa-browser-bar-bg: rgba(25, 25, 20, .96);--wa-window-highlight: rgba(255, 253, 243, .08);--wa-window-hairline: rgba(0, 0, 0, .24);--wa-card-accent-bg: rgba(242, 59, 10, .2);--wa-row-bg: rgba(255, 253, 243, .06);--wa-media-shadow: 0 44px 96px rgba(0, 0, 0, .38);--wa-window-shadow: 0 52px 42px rgba(0, 0, 0, .42);--wa-card-shadow: 0 10px 28px rgba(0, 0, 0, .24)}}.wa-section button,.wa-section input,.wa-section textarea,.wa-section select{font:inherit}.wa-section textarea{resize:none}.wa-section__inner{position:relative;z-index:1;display:grid;grid-template-columns:var(--wa-left-column) var(--wa-right-column);grid-template-rows:auto auto;column-gap:var(--wa-column-gap);row-gap:var(--wa-row-gap);align-items:start;width:min(var(--wa-content-max),100%);margin:0 auto}.wa-copy{grid-column:1 / -1;max-width:var(--wa-copy-max)}.wa-copy__title{display:block;margin:0;color:var(--wa-color-heading);font-family:var(--wa-font-sans);font-size:var(--wa-title-size);line-height:var(--wa-title-line-height);font-weight:520;letter-spacing:0}.wa-copy__title>span{display:block}.wa-copy__title em{color:var(--wa-orange);font-style:normal}.wa-story-controls{grid-column:1;grid-row:2;display:grid;gap:22px;padding-top:4px}.wa-story-tabs{display:grid;gap:33px}.wa-story-tab{--wa-tab-progress: 0;display:grid;grid-template-columns:4px minmax(0,1fr);gap:30px;align-items:start;width:100%;min-height:80px;padding:0;border:0;color:var(--wa-color-heading-strong);background:transparent;text-align:left;cursor:pointer}.wa-story-tab__marker{position:relative;display:block;width:4px;min-height:80px;overflow:hidden;background:var(--wa-soft);cursor:ns-resize;touch-action:none}.wa-story-tab__marker:before{content:"";position:absolute;inset:0;background:var(--wa-soft);transform:scaleY(var(--wa-tab-progress));transform-origin:top;transition:transform .12s linear}.wa-story-tab__marker:after{content:"";position:absolute;inset:0 -8px}.wa-story-tab.is-active .wa-story-tab__marker:before{background:var(--wa-color-accent)}.wa-story-tab__marker[data-scrubbing=true]:before{transition:none}.wa-story-tab__body{display:grid;gap:24px;padding-top:18px}.wa-story-tab__title{color:var(--wa-color-heading-strong);font-size:var(--wa-feature-title-size);line-height:1.08;font-weight:520;letter-spacing:0}.wa-story-tab__description{max-width:520px;color:var(--wa-color-copy);font-size:var(--wa-feature-copy-size);line-height:1.25;font-weight:450}.wa-story-tab:not(.is-active) .wa-story-tab__description{display:none}.wa-controls-row{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}.wa-control-button svg{display:block;width:16px;height:16px;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;fill:none}.wa-stage{position:relative;grid-column:2;grid-row:2;width:var(--wa-stage-width);min-height:var(--wa-stage-min-height)}.wa-stage__media{position:absolute;top:-38px;right:-128px;width:var(--wa-media-width);height:var(--wa-media-height);border-radius:3px;background:linear-gradient(66deg,var(--wa-media-warm-1),transparent 24%),linear-gradient(124deg,var(--wa-media-warm-2),var(--wa-media-warm-3) 42%,var(--wa-media-warm-4)),repeating-linear-gradient(114deg,var(--wa-media-line) 0 2px,transparent 2px 46px),linear-gradient(18deg,var(--wa-media-base-1),var(--wa-media-base-2) 58%,var(--wa-media-base-3));box-shadow:var(--wa-media-shadow);opacity:.84;pointer-events:none}.wa-window{position:relative;z-index:2;width:var(--wa-window-width);margin:108px 0 0 155px;border-radius:var(--wa-radius-window);box-shadow:var(--wa-window-shadow)}.wa-chat-shell{position:relative;display:grid;grid-template-rows:auto minmax(0,1fr);height:var(--wa-window-height);overflow:visible;border:1px solid var(--wa-browser-line);border-radius:var(--wa-radius-window);background:var(--wa-panel);background-clip:padding-box;box-shadow:0 1px 0 var(--wa-window-highlight) inset,0 0 0 1px var(--wa-window-hairline)}.wa-chat-shell__bar{--wa-browser-tab-left: 90px;--wa-browser-tab-width: 100px;position:relative;display:flex;align-items:center;height:48px;padding:0 18px;border-bottom:0;border-radius:calc(var(--wa-radius-window) - 1px) calc(var(--wa-radius-window) - 1px) 0 0;background:var(--wa-browser-bar-bg);overflow:hidden}.wa-chat-shell__bar:after{content:"";position:absolute;right:0;bottom:0;left:0;height:1px;background:linear-gradient(to right,var(--wa-browser-line) 0,var(--wa-browser-line) var(--wa-browser-tab-left),transparent var(--wa-browser-tab-left),transparent calc(var(--wa-browser-tab-left) + var(--wa-browser-tab-width)),var(--wa-browser-line) calc(var(--wa-browser-tab-left) + var(--wa-browser-tab-width)),var(--wa-browser-line) 100%);pointer-events:none}.wa-chat-shell__lights{display:flex;gap:8px;align-items:center}.wa-chat-shell__lights span{width:12px;height:12px;border-radius:999px;background:var(--wa-red)}.wa-chat-shell__lights span:nth-child(2){background:var(--wa-yellow)}.wa-chat-shell__lights span:nth-child(3){background:var(--wa-green)}.wa-chat-shell__tab{position:absolute;left:var(--wa-browser-tab-left);bottom:-1px;display:inline-flex;align-items:center;gap:9px;height:36px;min-width:100px;padding:0 13px;border:1px solid var(--wa-browser-line);border-bottom:0;border-radius:8px 8px 0 0;background:var(--wa-panel)}.wa-chat-shell__mark{display:block;flex:0 0 auto;width:18px;height:11px}.wa-chat-shell__title{color:var(--wa-color-text);font-size:16px;line-height:1;font-weight:560}.wa-chat-shell__body{position:relative;display:grid;grid-template-rows:minmax(0,1fr);align-content:stretch;gap:0;min-height:0;padding:0 var(--wa-chat-x-padding);overflow:hidden;border-radius:0 0 calc(var(--wa-radius-window) - 1px) calc(var(--wa-radius-window) - 1px);background:var(--wa-panel);background-clip:padding-box}.wa-chat-shell__body:before{content:"";position:absolute;z-index:1;top:0;right:0;left:0;height:var(--wa-chat-top-fade);background:linear-gradient(to bottom,var(--wa-panel) 0,var(--wa-panel-transparent) 100%);pointer-events:none}.wa-signup-scene{position:absolute;inset:0;z-index:0;display:grid;align-content:center;justify-items:center;gap:12px;min-height:0;padding-bottom:0;color:var(--wa-ink)}.wa-signup-scene__logo{display:block;width:clamp(34px,3.2vw,42px);aspect-ratio:18 / 11;margin-bottom:-2px;color:#77736c;pointer-events:none}.wa-signup-scene__logo svg{display:block;width:100%;height:100%}.wa-signup-scene__title{margin:0 0 18px;color:#77736c;font-family:var(--wa-font-feature);font-size:clamp(26px,2.8vw,34px);line-height:1;font-weight:520;letter-spacing:0}.wa-signup-field{display:grid;grid-template-columns:minmax(0,1fr) 38px;align-items:center;gap:10px;width:min(360px,72%);min-height:56px;padding:0 9px 0 17px;overflow:hidden;border:1px solid #d5d2ca;border-radius:15px;color:var(--wa-ink);background:#fffffa;box-shadow:0 12px 24px #1717141f;font-size:16px;line-height:1.2;font-weight:410;white-space:nowrap}.wa-signup-field [data-signup-email]:empty:before{content:"email@work.com";color:#aaa89e}.wa-signup-field [data-signup-email]:after{content:"";display:inline-block;width:1px;height:17px;margin-left:1px;background:currentColor;transform:translateY(3px);animation:wa-caret .92s steps(1,end) infinite}.wa-signup-field__submit{display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;padding:0;border:0;border-radius:999px;color:#fffffa;background:#aaa89e;cursor:default}.wa-signup-scene[data-signup-filled=true] .wa-signup-field__submit,.wa-signup-scene[data-signup-submitted=true] .wa-signup-field__submit{background:#11110f}.wa-signup-field__submit-icon{display:block;width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.wa-signup-logo-transfer{position:absolute;top:0;left:0;z-index:7;display:block;pointer-events:none;transform-origin:left top}.wa-signup-logo-transfer svg{display:block;width:100%;height:100%}.wa-thread{position:relative;z-index:0;display:grid;gap:var(--wa-chat-entry-gap);align-content:start;height:100%;min-height:0;max-height:none;padding-bottom:var(--wa-chat-bottom-clearance);overflow:hidden;overscroll-behavior:auto}.wa-thread>.wa-message:first-child,.wa-message--first-active{margin-top:var(--wa-chat-first-entry-offset)}.wa-section[data-active-story=data-marketplace] .wa-thread{min-height:0;max-height:none}.wa-section[data-active-story=data-marketplace] .wa-result-grid{display:none}.wa-message{display:grid;grid-template-columns:minmax(0,max-content);gap:0;align-items:end;max-width:90%}.wa-message[data-message-role=user]{justify-self:end;grid-template-columns:minmax(0,max-content)}.wa-message[data-message-role=assistant]:not(.wa-message--component){width:min(100%,var(--wa-ai-message-max-width));grid-template-columns:minmax(0,1fr)}.wa-message[data-message-role=assistant]:not(.wa-message--component) .wa-message__body{padding-right:0;padding-left:0}.wa-message__avatar{display:none;width:24px;height:24px;border:1px solid var(--wa-line-10);border-radius:7px;background:var(--wa-color-dark-surface)}.wa-message[data-message-role=user] .wa-message__avatar{grid-column:2;background:var(--wa-orange)}.wa-message__body{width:100%;max-width:var(--wa-ai-message-max-width);padding:10px 12px;border:0;border-radius:8px;color:var(--wa-ink);background:transparent;font-size:16px;line-height:1.35;font-weight:var(--wa-chat-message-weight);overflow-wrap:anywhere}.wa-message[data-message-role=user] .wa-message__body{grid-column:1;grid-row:1;width:auto;max-width:var(--wa-user-message-max-width);background:var(--wa-color-user-message);color:var(--wa-ink)}.wa-message[data-message-role=assistant] .wa-message__body[data-streaming=true]:after{content:"";display:inline-block;width:1px;height:1em;margin-left:2px;background:currentColor;vertical-align:-.14em;animation:wa-caret .92s steps(1,end) infinite}.wa-message--component{grid-template-columns:minmax(0,1fr);width:100%;max-width:100%;align-items:start}.wa-message--component .wa-message__avatar{margin-top:0}.wa-message--component .wa-message__body{width:100%;max-width:none;padding:0;border:0;background:transparent;overflow:visible}.wa-message--file{width:auto;max-width:90%;justify-self:end}.wa-message--file .wa-message__body{width:auto;max-width:none;justify-self:end;padding:0;background:transparent}.wa-message[data-message-role=user].wa-message--file .wa-message__body{max-width:none;background:transparent}.wa-thinking-block{--wa-thinking-icon-column: 18px;--wa-thinking-column-gap: 8px;--wa-thinking-guide-top: -9px;position:relative;display:grid;align-content:start;align-items:start;justify-items:start;gap:11px;min-width:0}.wa-thinking{display:inline-grid;grid-template-columns:var(--wa-thinking-icon-column) auto auto;align-items:center;justify-content:start;gap:var(--wa-thinking-column-gap);justify-self:start;min-height:18px;padding:0;color:#57544f;background:transparent;font-size:14px;line-height:1;font-weight:var(--wa-chat-thinking-header-weight)}.wa-thinking__glyph{position:relative;display:inline-block;width:18px;height:11px;opacity:1;color:#67635f;transform-origin:center}.wa-thinking__glyph:after,.wa-thinking-logo-traveler:after{content:"";position:absolute;inset:0;display:block;width:18px;height:11px;opacity:0;background:linear-gradient(100deg,#67635f 0% 30%,#f23b0a 48%,#c8c3bb 58%,#67635f 74% 100%);background-position:120% 50%;background-size:260% 100%;pointer-events:none;-webkit-mask:var(--wa-thinking-logo-mask) center / 18px 11px no-repeat;mask:var(--wa-thinking-logo-mask) center / 18px 11px no-repeat}.wa-thinking__glyph[data-logo-role=shadow]{color:#c8c3bb;opacity:.88}.wa-thinking-logo-traveler{position:absolute;top:0;left:0;z-index:4;display:inline-block;width:18px;height:11px;color:#67635f;pointer-events:none;transform-origin:center}.wa-thinking__logo-mark{display:block;width:18px;height:11px;overflow:visible}.wa-thinking__glyph[data-logo-mode=thinking]:not([data-logo-role=shadow]) .wa-thinking__logo-mark,.wa-thinking-logo-traveler[data-logo-mode=thinking] .wa-thinking__logo-mark{opacity:0}.wa-thinking__glyph[data-logo-mode=thinking]:not([data-logo-role=shadow]):after,.wa-thinking-logo-traveler[data-logo-mode=thinking]:after{opacity:1;animation:wa-thinking-logo-gradient 1.28s linear infinite}.wa-thinking__glyph[data-logo-mode=done]:not([data-logo-role=shadow]),.wa-thinking-logo-traveler[data-logo-mode=done]{opacity:.72}.wa-thinking__title{color:#57544f}.wa-thinking__elapsed{margin-left:5px;color:#8e8a83;font-size:14px;font-weight:var(--wa-chat-thinking-weight)}.wa-research-steps{--wa-thinking-guide-end: var(--wa-thinking-guide-top);position:relative;display:grid;align-content:start;gap:11px;max-height:none;overflow:visible;padding:1px 0 0}.wa-research-steps:before{content:"";position:absolute;top:var(--wa-thinking-guide-top);left:calc(var(--wa-thinking-icon-column) / 2);width:1px;height:max(0px,calc(var(--wa-thinking-guide-end) - var(--wa-thinking-guide-top)));background:#e4ded6}.wa-research-step{--wa-step-progress: 0;position:relative;display:grid;grid-template-columns:var(--wa-thinking-icon-column) minmax(0,1fr);align-content:start;gap:var(--wa-thinking-column-gap);align-items:start;min-height:58px;overflow:visible;padding:0;color:#56534f;background:transparent;font-size:14px;line-height:1.24;font-weight:var(--wa-chat-thinking-weight)}.wa-research-step[data-step-state=complete]{min-height:20px;align-items:start}.wa-research-step__marker{position:relative;z-index:1;justify-self:center;width:12px;height:12px;margin-top:2px;background:var(--wa-panel)}.wa-research-step__marker:before,.wa-research-step__marker:after{content:"";position:absolute}.wa-research-step__marker:before{top:4px;left:4px;width:4px;height:4px;border-radius:999px;background:#9d9890;opacity:0;transform:scale(.74);transition:opacity .16s ease,transform .18s ease}.wa-research-step[data-step-state=complete] .wa-research-step__marker:before{opacity:1;transform:scale(1)}.wa-research-step[data-step-state=failed] .wa-research-step__marker:before{opacity:1;background:#e1544c;transform:scale(1)}.wa-research-step__body{position:relative;z-index:1;display:grid;align-content:start;gap:4px;min-width:0}.wa-research-step__label-row{display:inline-flex;gap:var(--wa-thinking-column-gap);align-items:center;justify-self:start;max-width:100%;min-width:0}.wa-research-step__label{min-width:0;color:#55514d;font-size:14px;line-height:1.18;font-weight:var(--wa-chat-thinking-weight);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wa-research-step__detail{display:-webkit-box;min-width:0;margin-top:2px;overflow:hidden;color:#86817a;font-size:13px;line-height:1.38;font-weight:var(--wa-chat-detail-weight);white-space:normal;-webkit-box-orient:vertical;-webkit-line-clamp:2}.wa-sequence-thinking-progress{display:grid;grid-template-columns:auto minmax(0,1fr);gap:8px;align-items:center;min-width:0;padding-top:2px}.wa-sequence-thinking-progress__count{color:#8e8a83;font-size:10px;line-height:1;font-weight:560;font-variant-numeric:tabular-nums}.wa-sequence-thinking-progress__bar{display:block;height:4px;overflow:hidden;border-radius:999px;background:#e4ded6}.wa-sequence-thinking-progress__bar span{display:block;width:100%;height:100%;border-radius:inherit;background:#57544f;transform:scaleX(.02);transform-origin:left center}.wa-thinking__title[data-thinking-active=true],.wa-thinking__title[data-streaming=true],.wa-research-step__label[data-streaming=true]{color:transparent;background:linear-gradient(105deg,#55514d 0% 30%,#9d9890 46%,#2f2e2a 58%,#55514d 74% 100%);background-size:220% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:wa-text-shimmer 1.35s ease-in-out infinite}.wa-thinking__title[data-streaming=true]:after,.wa-research-step__label[data-streaming=true]:after,.wa-research-step__detail[data-streaming=true]:after{content:"";display:inline-block;width:1px;height:1em;margin-left:2px;background:#55514d;vertical-align:-.12em;animation:wa-caret .92s steps(1,end) infinite}.wa-research-step__detail[data-streaming=true]:after{background:#86817a}.wa-research-step[data-step-state=complete] .wa-research-step__body{gap:0}.wa-research-step[data-step-state=complete] .wa-research-step__detail{display:none}.wa-research-step__chevron{position:relative;z-index:1;flex:0 0 8px;width:8px;height:14px;margin-top:0}.wa-research-step__chevron:before{content:"";position:absolute;top:3px;left:1px;width:5px;height:5px;border-top:1px solid #aaa59d;border-right:1px solid #aaa59d;transform:rotate(45deg);transition:top .16s ease,transform .16s ease}.wa-research-step[data-step-state=complete] .wa-research-step__chevron:before{top:2px;transform:rotate(135deg)}.wa-result-grid{display:grid;grid-template-columns:minmax(0,1fr);gap:9px;min-height:0}.wa-result-grid.has-strategy-plans{grid-template-columns:minmax(0,1fr);gap:14px}.wa-result-grid.has-data-table,.wa-result-grid.has-enrichment-panel{grid-template-columns:minmax(0,1fr)}.wa-csv-drop{position:absolute;inset:58px 10px 10px;z-index:2;display:grid;grid-template-columns:minmax(0,1fr);place-items:center;gap:14px;padding:32px;overflow:hidden;border:1px dashed rgba(242,59,10,.48);border-radius:12px;color:#514e49;background:#fffff9e6;box-shadow:inset 0 0 0 999px #fffff938;pointer-events:none}.wa-csv-drop[data-drop-state=active]{border-color:var(--wa-orange);background-color:#fff9f2eb;box-shadow:inset 0 0 0 999px #f23b0a0d}.wa-csv-drop[data-drop-state=complete]{border-style:solid;border-color:#27944352;background:#fffff9e6}.wa-csv-drop__copy{display:grid;gap:5px;min-width:0;justify-items:center;text-align:center}.wa-csv-drop__copy strong{color:#11110f;font-size:18px;line-height:1.12;font-weight:620}.wa-csv-drop__copy span{color:#7b766f;font-size:13px;line-height:1.24;font-weight:460}.wa-cursor-file{position:absolute;top:0;left:0;z-index:19;width:max-content;pointer-events:none}.wa-file-landing-clone{box-sizing:border-box}.wa-file-landing-label{color:#5e5c55;font-size:12px;line-height:1;font-weight:540;white-space:nowrap}.wa-cursor-file__card,.wa-uploaded-file{--wa-file-color: #916135;--wa-file-bg: #fdf8f2;--wa-file-border: #dedbd3}.wa-cursor-file__card{display:inline-grid;grid-template-columns:34px minmax(0,1fr);gap:8px;align-items:center;width:292px;min-height:52px;padding:8px 12px 8px 8px;border:1px solid var(--wa-file-border, #dedbd3);border-radius:8px;color:#171714;background:#fffff9f5;box-shadow:0 16px 28px #1717142e}.wa-cursor-file--stack{width:252px;height:96px}.wa-cursor-file--stack .wa-cursor-file__card{position:absolute;top:0;left:0;width:230px;transform-origin:18px 28px}.wa-cursor-file--stack .wa-cursor-file__card:nth-child(1){z-index:4;transform:translate(1px) rotate(2deg)}.wa-cursor-file--stack .wa-cursor-file__card:nth-child(2){z-index:3;transform:translate(8px,8px) rotate(-5deg)}.wa-cursor-file--stack .wa-cursor-file__card:nth-child(3){z-index:2;transform:translate(-7px,15px) rotate(6deg)}.wa-cursor-file--stack .wa-cursor-file__card:nth-child(4){z-index:1;transform:translate(5px,23px) rotate(-8deg)}.wa-cursor-file__icon,.wa-uploaded-file__icon{display:inline-flex;align-items:center;justify-content:center;border-radius:5px;color:var(--wa-file-color, #916135);background:var(--wa-file-bg, #faf1e8);font-size:9px;line-height:1;font-weight:760}.wa-cursor-file__icon{width:34px;height:34px}.wa-cursor-file__card[data-file-tone=spreadsheet],.wa-uploaded-file[data-file-tone=spreadsheet]{--wa-file-color: #2a8050;--wa-file-bg: #f7fcf8}.wa-cursor-file__card[data-file-tone=pdf],.wa-uploaded-file[data-file-tone=pdf]{--wa-file-color: #c04436;--wa-file-bg: #fff7f6}.wa-cursor-file__card[data-file-tone=doc],.wa-uploaded-file[data-file-tone=doc]{--wa-file-color: #2c66d8;--wa-file-bg: #f7faff}.wa-cursor-file__card[data-file-tone=text],.wa-uploaded-file[data-file-tone=text]{--wa-file-color: #6f6a63;--wa-file-bg: #faf9f6}.wa-cursor-file__card[data-file-tone=ppt],.wa-uploaded-file[data-file-tone=ppt]{--wa-file-color: #b5671c;--wa-file-bg: #fff9f1}@supports (color: oklch(.5 .1 120)){.wa-cursor-file__card,.wa-uploaded-file{--wa-file-color: oklch(.49 .105 55);--wa-file-bg: oklch(.986 .012 65);--wa-file-border: oklch(.88 .008 80)}.wa-cursor-file__card[data-file-tone=spreadsheet],.wa-uploaded-file[data-file-tone=spreadsheet]{--wa-file-color: oklch(.51 .12 150);--wa-file-bg: oklch(.986 .014 150)}.wa-cursor-file__card[data-file-tone=pdf],.wa-uploaded-file[data-file-tone=pdf]{--wa-file-color: oklch(.52 .15 29);--wa-file-bg: oklch(.986 .014 29)}.wa-cursor-file__card[data-file-tone=doc],.wa-uploaded-file[data-file-tone=doc]{--wa-file-color: oklch(.52 .145 257);--wa-file-bg: oklch(.986 .013 257)}.wa-cursor-file__card[data-file-tone=text],.wa-uploaded-file[data-file-tone=text]{--wa-file-color: oklch(.52 .018 82);--wa-file-bg: oklch(.982 .004 82)}.wa-cursor-file__card[data-file-tone=ppt],.wa-uploaded-file[data-file-tone=ppt]{--wa-file-color: oklch(.56 .13 57);--wa-file-bg: oklch(.986 .016 64)}}.wa-cursor-file__name{min-width:0;overflow:hidden;font-size:11px;line-height:1;font-weight:560;text-overflow:ellipsis;white-space:nowrap}.wa-uploaded-file{display:inline-grid;grid-template-columns:34px minmax(0,1fr);gap:9px;align-items:center;min-width:292px;max-width:340px;min-height:52px;padding:8px 12px 8px 8px;border:1px solid var(--wa-file-border, #dedbd3);border-radius:8px;color:var(--wa-ink);background:#faf9f4}.wa-uploaded-file__icon{width:34px;height:34px}.wa-uploaded-file__body{display:grid;gap:3px;min-width:0}.wa-uploaded-file__body strong,.wa-uploaded-file__body span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wa-uploaded-file__body strong{font-size:12px;line-height:1.1;font-weight:620}.wa-uploaded-file__body span{color:#716d66;font-size:10px;line-height:1;font-weight:460}.wa-uploaded-files{display:grid;gap:8px;justify-items:end}.wa-uploaded-files[data-uploaded-file-count="4"]{--wa-uploaded-file-target-width: 230px;width:min(467px,calc(100vw - 72px));max-width:100%}.wa-uploaded-files__summary{color:#716d66;font-size:10.5px;line-height:1;font-weight:520}.wa-uploaded-files__list{display:grid;gap:7px;justify-items:end}.wa-uploaded-files[data-uploaded-file-count="4"] .wa-uploaded-files__list{width:100%;grid-template-columns:repeat(2,minmax(0,var(--wa-uploaded-file-target-width)));justify-content:end;justify-items:stretch}.wa-uploaded-files[data-uploaded-file-count="4"] .wa-uploaded-file{width:100%;min-width:0;max-width:none}.wa-data-table{--wa-data-table-scroll-width: 100%;display:grid;gap:0;min-width:0;padding:0;overflow:visible;border:0;border-radius:0;background:transparent;box-shadow:none;color:#050505}.wa-data-table__header{display:none;grid-template-columns:minmax(0,1fr) auto;gap:4px 10px;align-items:end}.wa-data-table__meta{grid-column:1 / -1;color:var(--wa-color-accent);font-size:10px;line-height:1;font-weight:760;letter-spacing:0;text-transform:uppercase}.wa-data-table__title{min-width:0;margin:0;color:var(--wa-ink);font-size:14px;line-height:1.08;font-weight:720;letter-spacing:0}.wa-data-table__count{color:var(--wa-color-muted);font-size:10px;line-height:1;font-weight:680;white-space:nowrap}.wa-data-table__grid{position:relative;display:grid;min-width:0;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scrollbar-width:thin;scrollbar-color:rgba(17,17,15,.22) transparent;border:1px solid #eee6df;border-radius:8px;background:var(--wa-color-panel);-webkit-overflow-scrolling:touch}.wa-data-table__grid::-webkit-scrollbar{height:6px}.wa-data-table__grid::-webkit-scrollbar-track{background:transparent}.wa-data-table__grid::-webkit-scrollbar-thumb{border-radius:999px;background:#11110f33}.wa-data-table__row{position:relative;display:grid;grid-template-columns:var(--wa-data-table-columns);width:max(100%,var(--wa-data-table-scroll-width));min-width:max(100%,var(--wa-data-table-scroll-width));min-height:27px;border-top:1px solid #eee6df;background:var(--wa-color-panel)}.wa-data-table[data-column-count="3"]{--wa-data-table-scroll-width: 560px}.wa-data-table[data-column-count="2"]{--wa-data-table-scroll-width: 620px}.wa-data-table[data-table-variant=connections]{--wa-data-table-scroll-width: 100%}.wa-data-table[data-column-count="4"]{--wa-data-table-scroll-width: 680px}.wa-data-table[data-column-count="5"]{--wa-data-table-scroll-width: 860px}.wa-data-table[data-table-variant=enriched]{--wa-data-table-scroll-width: 760px}.wa-data-table__row:first-child{border-top:0}.wa-data-table__row[data-header=true]{min-height:34px;background:var(--wa-color-panel)}.wa-data-table__cell{display:flex;align-items:center;min-width:0;padding:6px 8px;overflow:visible;border-left:0;color:#555452;font-size:14px;line-height:1.14;font-weight:500;overflow-wrap:anywhere;white-space:normal}.wa-data-table__cell:first-child{border-left:0}.wa-data-table__row[data-header=true] .wa-data-table__cell{grid-row:1;align-items:center;padding:9px 10px 8px;color:#555452;font-size:14px;line-height:1.08;font-weight:560;text-transform:none}.wa-data-table__row[data-header=true] .wa-data-table__cell:nth-of-type(1){grid-column:1}.wa-data-table__row[data-header=true] .wa-data-table__cell:nth-of-type(2){grid-column:2}.wa-data-table__row[data-header=true] .wa-data-table__cell:nth-of-type(3){grid-column:3}.wa-data-table__row[data-header=true] .wa-data-table__cell:nth-of-type(4){grid-column:4}.wa-data-table__row[data-header=true] .wa-data-table__cell:nth-of-type(5){grid-column:5}.wa-data-table__row[data-header=true] .wa-data-table__cell:nth-of-type(6){grid-column:6}.wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=name],.wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=contact],.wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=mutualConnection]{padding-left:8px}.wa-data-table__row[data-header=true] .wa-data-table__cell:last-of-type{padding-right:48px}.wa-section .wa-data-table__add{position:sticky;z-index:2;grid-column:1 / -1;grid-row:1;align-self:center;justify-self:end;right:3px;display:inline-flex;align-items:center;justify-content:center;width:28px;height:26px;padding:0 0 1px;border:1px solid #eee6df;border-radius:4px;color:#050505;background:#fffffb;box-shadow:0 1px 1px #17171405;line-height:0}.wa-data-table__add-icon{display:block;width:16px;height:16px;fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.wa-data-table__cell-text{display:block;min-width:0;margin-top:0}.wa-data-table__footer{display:flex;align-items:center;justify-content:space-between;gap:8px;min-width:0;padding-top:8px}.wa-data-table__actions{display:flex;align-items:center;gap:7px;min-width:0}.wa-data-table-action{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:6px;min-width:0;min-height:32px;padding:0 10px;border:1px solid #ded9d2;border-radius:6px;color:#555452;background:transparent;font:inherit;box-shadow:0 1px 1px #17171408;cursor:pointer;white-space:nowrap}.wa-data-table-action[data-action-variant=primary]{border-color:#ded9d2;color:#555452;background:transparent}.wa-data-table-action__icon{display:block;width:16px;height:16px;flex:0 0 16px;fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.wa-data-table-action__label{display:inline-block;font-size:11px;line-height:1;font-weight:520}.wa-data-table-action__badge{position:absolute;top:-5px;right:-5px;display:none;align-items:center;min-height:15px;padding:0 5px;border-radius:999px;color:#11110f;background:var(--wa-orange);font-size:8px;line-height:1;font-weight:680}.wa-data-table-action__tooltip{display:none}.wa-data-table-floating-tooltip{position:absolute;z-index:7;top:0;left:0;display:inline-flex;align-items:center;justify-content:center;min-height:29px;padding:0 11px;border-radius:6px;color:#fffffb;background:#11110f;box-shadow:0 8px 20px #1717142e;font-size:11px;line-height:1;font-weight:580;pointer-events:none;white-space:nowrap;opacity:0;visibility:hidden;transition:opacity .12s ease,visibility .12s ease}.wa-data-table-floating-tooltip[data-has-badge=true]{flex-direction:column;align-items:flex-start;min-height:50px;padding:8px 10px;gap:6px}.wa-data-table-floating-tooltip[data-visible=true]{opacity:1;visibility:visible}.wa-section[data-chat-history-paused=true] .wa-data-table-floating-tooltip{opacity:0;visibility:hidden}.wa-data-table-floating-tooltip__label{display:block}.wa-data-table-floating-tooltip__badge{display:inline-flex;align-items:center;min-height:15px;padding:0 6px;border-radius:999px;color:#11110f;background:#fffffb;font-size:8px;line-height:1;font-weight:650}.wa-data-table__pagination{display:inline-flex;align-items:center;justify-content:end;gap:7px;min-width:0;color:#716d66;font-size:9.5px;line-height:1;font-weight:500}.wa-data-table__range{white-space:nowrap}.wa-data-table__page-controls{display:inline-flex;align-items:center;gap:3px}.wa-data-table__page-button{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;padding:0;border:1px solid #ded9d2;border-radius:5px;color:#555452;background:#fffffb;font-size:9px;line-height:1;font-weight:560;cursor:pointer}.wa-data-table-action:hover,.wa-data-table-action[data-tooltip-visible=true],.wa-data-table__page-button:hover,.wa-data-table__page-button[data-tooltip-visible=true]{border-color:#bdb7ae;color:#11110f}.wa-data-table__page-button[data-active=true]{border-color:#11110f;color:#fffffb;background:#11110f}.wa-data-table__cell[data-column-key=name],.wa-data-table__cell[data-column-key=contact],.wa-data-table__cell[data-column-key=mutualConnection]{overflow:visible;color:#050505;font-weight:400;white-space:nowrap}.wa-data-table__cell[data-column-key=email],.wa-data-table__cell[data-column-key=number],.wa-data-table__cell[data-column-key=work-email],.wa-data-table__cell[data-column-key=mobile]{color:#565553}.wa-data-table__cell[data-column-key=email] .wa-data-table__cell-text,.wa-data-table__cell[data-column-key=work-email] .wa-data-table__cell-text{overflow-wrap:normal;white-space:nowrap}.wa-data-table[data-table-variant=enriched] .wa-data-table__cell[data-column-key=email],.wa-data-table[data-table-variant=enriched] .wa-data-table__cell[data-column-key=number],.wa-data-table[data-table-variant=enriched] .wa-data-table__cell[data-column-key=work-email],.wa-data-table[data-table-variant=enriched] .wa-data-table__cell[data-column-key=mobile]{color:#0c6f66}.wa-data-table[data-table-variant=enriched] .wa-data-table__cell[data-column-key=email] .wa-data-table__cell-text,.wa-data-table[data-table-variant=enriched] .wa-data-table__cell[data-column-key=number] .wa-data-table__cell-text,.wa-data-table[data-table-variant=enriched] .wa-data-table__cell[data-column-key=work-email] .wa-data-table__cell-text,.wa-data-table[data-table-variant=enriched] .wa-data-table__cell[data-column-key=mobile] .wa-data-table__cell-text{display:inline-flex;align-items:center;width:fit-content;max-width:100%;min-height:22px;padding:2px 6px;border-radius:5px;background:#0e9c901f;color:#0c6f66}.wa-data-table[data-table-variant=enriched] .wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=email],.wa-data-table[data-table-variant=enriched] .wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=number],.wa-data-table[data-table-variant=enriched] .wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=work-email],.wa-data-table[data-table-variant=enriched] .wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=mobile]{color:#147970}.wa-data-table--proximity .wa-data-table__row:not([data-header=true]){min-height:38px}.wa-data-table--proximity .wa-data-table__cell[data-column-key=connection]{color:var(--wa-ink);font-size:10.6px;line-height:1.2}.wa-data-table[data-table-variant=connections] .wa-data-table__grid{overflow-x:hidden}.wa-data-table[data-table-variant=connections] .wa-data-table__cell{overflow:hidden}.wa-data-table[data-table-variant=connections] .wa-data-table__cell[data-column-key=mutualConnection]:not(:empty){align-items:center;gap:8px}.wa-data-table[data-table-variant=connections] .wa-data-table__cell[data-column-key=mutualConnection] .wa-data-table-person{flex:1 1 auto;width:auto}.wa-data-table[data-table-variant=connections] .wa-data-table-person__name,.wa-data-table[data-table-variant=connections] .wa-data-table-person__detail{overflow:hidden;text-overflow:ellipsis}.wa-data-table-cell-badge{display:inline-flex;flex:0 0 auto;align-items:center;justify-content:center;min-height:20px;padding:0;border:0;border-radius:0;color:#706c66;background:transparent;font-size:12px;line-height:1;font-weight:430;white-space:nowrap}.wa-data-table__cell[data-empty=true]{color:#aaa7a2}.wa-data-table-person{display:grid;grid-template-columns:25px minmax(0,1fr);gap:7px;align-items:center;width:100%;min-width:0;overflow:visible}.wa-data-table-person__avatar-wrap{position:relative;display:block;width:25px;height:25px}.wa-data-table-person__avatar{display:inline-flex;align-items:center;justify-content:center;width:25px;height:25px;overflow:hidden;border:1px solid #d8d8d8;border-radius:999px;color:#1a1a18;background:linear-gradient(145deg,#d8dee8,#aeb7c5);font-size:8px;font-weight:700;letter-spacing:0}.wa-data-table-person__avatar img{display:block;width:100%;height:100%;object-fit:cover}.wa-data-table-person__avatar[data-avatar-tone="2"]{background:linear-gradient(145deg,#cde3d5,#7ea88f)}.wa-data-table-person__avatar[data-avatar-tone="3"]{background:linear-gradient(145deg,#9edff0,#27718b)}.wa-data-table-person__avatar[data-avatar-tone="4"]{background:linear-gradient(145deg,#f4f0eb,#b6b0a9)}.wa-data-table-person__avatar[data-avatar-tone="5"]{background:linear-gradient(145deg,#443f45,#141416);color:#fffff9}.wa-data-table-person__avatar[data-avatar-tone="6"]{background:linear-gradient(145deg,#bdeef4,#1590a8)}.wa-data-table-person__avatar[data-avatar-tone="7"]{background:linear-gradient(145deg,#f3f1dd,#a8d7f0)}.wa-data-table-person__avatar[data-avatar-tone="8"]{background:linear-gradient(145deg,#0992db,#055c9b);color:#fffff9}.wa-data-table-person__avatar[data-avatar-tone="9"]{background:linear-gradient(145deg,#cfc8b8,#39322b);color:#fffff9}.wa-data-table-person__source{position:absolute;right:0;bottom:0;width:12px;height:12px;border:1.5px solid var(--wa-color-panel);border-radius:999px;background:#ddff1c}.wa-data-table-person__source:before,.wa-data-table-person__source:after{content:"";position:absolute;background:#050505}.wa-data-table-person__source[data-source=signal]:before{right:3px;bottom:2px;width:6px;height:2px;border-radius:999px;transform:rotate(-34deg)}.wa-data-table-person__source[data-source=signal]:after{right:2px;bottom:5px;width:2px;height:5px;border-radius:999px;transform:rotate(12deg)}.wa-data-table-person__source[data-source=database]{border-radius:4px;background:#1f1f1f}.wa-data-table-person__source[data-source=database]:before{top:3px;left:3px;width:5px;height:5px;border:1.5px solid #fffff9;border-radius:2px;background:transparent}.wa-data-table-person__source[data-source=database]:after{display:none}.wa-data-table-person__source[data-source=engage]{border-radius:4px 7px 7px 4px;background:#6043ff}.wa-data-table-person__source[data-source=engage]:before{top:4px;left:3px;width:7px;height:4px;border-radius:1px;background:#fffff9;transform:rotate(-8deg)}.wa-data-table-person__source[data-source=engage]:after{display:none}.wa-data-table-person__copy{display:grid;align-content:start;gap:2px;min-width:0;margin-top:0}.wa-data-table-person__name{min-width:0;margin-top:0;overflow:visible;color:#050505;font-size:14px;line-height:1.05;font-weight:400;overflow-wrap:normal;text-overflow:clip;white-space:nowrap}.wa-data-table-person__detail{min-width:0;overflow:hidden;color:#67635f;font-size:12px;line-height:1.12;font-weight:400;text-overflow:ellipsis;white-space:nowrap}.wa-enrichment-panel{--wa-step-progress: 0;display:grid;gap:11px;min-width:0;max-width:420px;overflow:visible;border:0;border-radius:0;background:transparent;box-shadow:none;color:#56534f}.wa-enrichment-panel__header{display:inline-grid;grid-template-columns:12px auto auto;gap:8px;align-items:center;justify-content:start;min-height:18px;padding:0;border:0;color:#57544f;background:transparent;font-size:14px;line-height:1;font-weight:var(--wa-chat-thinking-header-weight)}.wa-waterfall-rows{position:relative;display:grid;gap:9px;padding:1px 0 0}.wa-waterfall-rows:before{content:"";position:absolute;top:9px;bottom:9px;left:6px;width:1px;background:#e4ded6}.wa-waterfall-row{position:relative;display:grid;grid-template-columns:12px auto minmax(0,1fr);gap:8px;align-items:center;min-height:27px;color:#56534f;font-size:14px;line-height:1;font-weight:var(--wa-chat-thinking-weight);white-space:nowrap}.wa-waterfall-row__status{position:relative;z-index:1;width:12px;height:12px;background:var(--wa-panel)}.wa-waterfall-row__status:before,.wa-waterfall-row__status:after{content:"";position:absolute}.wa-waterfall-row__status:before{top:4px;left:4px;width:4px;height:4px;border-radius:999px;background:#9d9890}.wa-waterfall-row[data-step-state=complete] .wa-waterfall-row__status:before{top:3px;left:2px;width:8px;height:4px;border-bottom:1.4px solid #279443;border-left:1.4px solid #279443;border-radius:0;background:transparent;transform:rotate(-45deg)}.wa-waterfall-row[data-step-state=failed] .wa-waterfall-row__status:before,.wa-waterfall-row[data-step-state=failed] .wa-waterfall-row__status:after{top:6px;left:2px;width:9px;height:1.4px;border-radius:999px;background:#e1544c}.wa-waterfall-row[data-step-state=failed] .wa-waterfall-row__status:before{transform:rotate(45deg)}.wa-waterfall-row[data-step-state=failed] .wa-waterfall-row__status:after{transform:rotate(-45deg)}.wa-waterfall-row__label{min-width:104px;overflow:hidden;color:#56534f;text-overflow:ellipsis}.wa-waterfall-row__chips{display:inline-flex;align-items:center;gap:6px;min-width:0;overflow:hidden}.wa-waterfall-chip{position:relative;display:inline-flex;align-items:center;gap:4px;max-width:86px;min-height:17px;padding:2px 6px 2px 15px;overflow:hidden;border:1px solid #ebe5dc;border-radius:3px;color:#7c7770;background:#fbfaf3;font-size:10px;line-height:1;text-overflow:ellipsis}.wa-waterfall-chip:before,.wa-waterfall-chip:after{content:"";position:absolute}.wa-waterfall-chip:before{top:7px;left:6px;width:4px;height:4px;border-radius:999px;background:#a49f98}.wa-waterfall-chip[data-step-state=complete]:before{top:6px;left:5px;width:7px;height:3.5px;border-bottom:1.2px solid #279443;border-left:1.2px solid #279443;border-radius:0;background:transparent;transform:rotate(-45deg)}.wa-waterfall-chip[data-step-state=failed]{color:#a94f48}.wa-waterfall-chip[data-step-state=failed]:before,.wa-waterfall-chip[data-step-state=failed]:after{top:8px;left:5px;width:7px;height:1.2px;border-radius:999px;background:#e1544c}.wa-waterfall-chip[data-step-state=failed]:before{transform:rotate(45deg)}.wa-waterfall-chip[data-step-state=failed]:after{transform:rotate(-45deg)}.wa-result-card{display:grid;gap:8px;padding:12px;border:1px solid var(--wa-line-12);border-radius:var(--wa-radius-sm);background:linear-gradient(90deg,var(--wa-card-accent-bg),transparent 42%),var(--wa-color-panel);box-shadow:var(--wa-card-shadow)}.wa-result-card__topline{color:var(--wa-color-accent);font-size:11px;line-height:1.1;font-weight:720;letter-spacing:0;text-transform:uppercase}.wa-result-card__title{margin:0;color:var(--wa-ink);font-size:16px;line-height:1.1;font-weight:700;letter-spacing:0}.wa-result-card__body{margin:0;color:var(--wa-color-muted);font-size:12px;line-height:1.32;font-weight:460}.wa-result-card__rows{display:grid;gap:6px;padding:0;margin:0;list-style:none}.wa-result-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px;align-items:center;min-height:30px;padding:7px 9px;border:1px solid var(--wa-line-08);border-radius:var(--wa-radius-sm);color:var(--wa-color-muted);background:var(--wa-row-bg);font-size:12px}.wa-result-row strong{color:var(--wa-ink);font-weight:680;white-space:nowrap}.wa-result-row[data-tone=positive] strong{color:var(--wa-color-positive)}.wa-result-row[data-tone=warning] strong{color:var(--wa-color-warning)}.wa-result-row[data-tone=accent] strong{color:var(--wa-color-accent)}.wa-result-card__actions{display:flex;gap:8px;flex-wrap:wrap}.wa-result-action{display:inline-flex;align-items:center;justify-content:center;min-width:122px;height:34px;padding:0 11px;border:1px solid var(--wa-line-16);border-radius:var(--wa-radius-sm);color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);font-size:12px;font-weight:680;cursor:default;white-space:nowrap}.wa-strategy-plan{--wa-strategy-hover-scale: 1.035;--wa-strategy-hover-border: #c8c3bb;display:block;min-height:0;overflow:visible}.wa-strategy-plan__surface{display:grid;align-content:start;gap:10px;width:100%;min-height:0;padding:16px 18px 16px 20px;border:1px solid #dfddd5;border-radius:7px;background:#fffffa;box-shadow:0 7px 18px #1717140e;transform:scale(1) translateZ(0);transform-origin:center;transition:transform 125ms cubic-bezier(.2,.92,.18,1),border-color .12s ease,background-color .12s ease,box-shadow .14s ease}.wa-strategy-plan:hover .wa-strategy-plan__surface,.wa-strategy-plan[data-cursor-hover] .wa-strategy-plan__surface{border-color:var(--wa-strategy-hover-border);background:#fffffe;box-shadow:0 10px 24px #17171414;transform:scale(var(--wa-strategy-hover-scale)) translateZ(0)}.wa-strategy-plan__title{margin:0;color:#252521;font-family:var(--wa-font-feature);font-size:16px;line-height:1.18;font-weight:400;letter-spacing:0}.wa-strategy-plan__bullets{display:grid;gap:5px;margin:0;padding-left:14px;color:#5e5c55;font-family:var(--wa-font-sans);font-size:12px;line-height:1.34;font-weight:560;letter-spacing:0}.wa-strategy-plan__bullets li{padding-left:2px;white-space:nowrap}.wa-data-source-grid{display:grid;gap:10px;width:min(100%,520px);min-width:0;padding:2px 0}.wa-data-source-grid__header{display:grid;gap:3px}.wa-data-source-grid__title{margin:0;color:var(--wa-ink);font-size:15px;line-height:1.12;font-weight:560;letter-spacing:0}.wa-data-source-grid__subtitle{max-width:430px;margin:0;color:var(--wa-color-muted);font-size:11.5px;line-height:1.26;font-weight:410}.wa-data-source-grid__list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;min-width:0}.wa-data-source-card{display:grid;grid-template-columns:18px minmax(0,1fr);gap:8px;align-items:start;min-width:0;min-height:68px;padding:9px 10px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel);box-shadow:0 8px 18px #1717140a}.wa-data-source-card__icon{position:relative;width:18px;height:18px;margin-top:1px;border:1px solid var(--wa-line-16);border-radius:6px;background:var(--wa-color-soft-surface)}.wa-data-source-card__icon:before,.wa-data-source-card__icon:after{content:"";position:absolute;border-radius:999px;background:var(--wa-color-accent)}.wa-data-source-card__icon:before{top:5px;left:5px;width:6px;height:6px}.wa-data-source-card__icon:after{right:4px;bottom:4px;width:3px;height:3px}.wa-data-source-card__copy{display:grid;gap:3px;min-width:0}.wa-data-source-card__copy strong{color:var(--wa-ink);font-size:12.5px;line-height:1.12;font-weight:570}.wa-data-source-card__copy span{color:var(--wa-color-muted);font-size:10.5px;line-height:1.22;font-weight:410}.wa-data-source-grid--marketing{position:absolute;z-index:2;top:0;bottom:0;left:0;width:100%;max-width:none;padding:0;overflow:visible;pointer-events:none}.wa-data-source-grid--marketing .wa-data-source-grid__scale{display:grid;grid-template-rows:auto auto;align-content:start;gap:68px;width:var(--wa-data-grid-artboard-width, 2048px);height:1280px;padding:80px var(--wa-data-grid-gutter-right, 87px) 0 var(--wa-data-grid-gutter-left, 87px);transform:scale(var(--wa-data-grid-scale, .2880859375));transform-origin:top left}.wa-data-source-grid--marketing .wa-data-source-grid__header{gap:0;max-width:none}.wa-data-source-grid--marketing .wa-data-source-grid__title{font-size:64px;line-height:1.05;font-weight:520;letter-spacing:0;white-space:nowrap}.wa-data-source-grid--marketing .wa-data-source-grid__subtitle{display:none}.wa-data-source-grid__groups{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px 26px;min-height:0;min-width:0}.wa-data-source-grid--marketing .wa-data-source-grid__groups{grid-template-columns:repeat(4,438px);gap:43px;align-items:start}.wa-data-source-grid__column{display:grid;align-content:start;gap:14px;min-width:0}.wa-data-source-grid--marketing .wa-data-source-grid__column{gap:34px;width:438px}.wa-data-source-group{display:grid;align-content:start;gap:9px;min-width:0;padding:0;border:0;border-radius:0;background:transparent}.wa-data-source-group__title{margin:0;color:#5e5d59;font-size:clamp(13px,1.15vw,18px);line-height:1.05;font-weight:530;letter-spacing:0;text-align:left;text-transform:none}.wa-data-source-grid--marketing .wa-data-source-group{gap:14px}.wa-data-source-grid--marketing .wa-data-source-group__title{font-size:36px;line-height:1.05;font-weight:520}.wa-data-source-grid--marketing .wa-data-source-grid__list{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;width:438px;gap:24px;min-height:0;padding:32px 35px;border-radius:7px;background:#e9e9e9}.wa-data-source-grid--marketing .wa-data-source-grid__list--count-2{min-height:186px}.wa-data-source-grid--marketing .wa-data-source-grid__list--count-3{min-height:238px}.wa-data-vendor-logo{display:inline-flex;align-items:center;justify-content:flex-start;width:100%;min-width:0;height:auto;min-height:0;max-width:100%;color:#000;opacity:1}.wa-data-vendor-logo--image{opacity:1}.wa-data-vendor-logo__mark{display:flex;align-items:center;justify-content:center;width:100%;height:100%;max-width:100%;overflow:hidden;color:currentColor;font-size:clamp(18px,2.1vw,36px);line-height:1;font-weight:560;letter-spacing:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;transform:scale(var(--wa-logo-scale, 1));transform-origin:center}.wa-data-vendor-logo__image{display:block;width:auto;height:auto;max-width:100%;max-height:34px;object-fit:contain;object-position:left center;filter:brightness(0) saturate(100%);transform:scale(var(--wa-logo-scale, 1));transform-origin:left center;-webkit-user-select:none;user-select:none}.wa-data-source-grid--marketing .wa-data-vendor-logo{width:max-content;max-width:none}.wa-data-source-grid--marketing .wa-data-vendor-logo__mark{width:max-content;max-width:none;font-size:48px;transform:none;transform-origin:left center}.wa-data-source-grid--marketing .wa-data-vendor-logo__image{width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;transform:none!important}.wa-mini-game,.wa-mailbox-connection,.wa-style-profile,.wa-proximity-list,.wa-sequence-engagement{display:grid;gap:10px;width:min(100%,540px);min-width:0}.wa-sequence-engagement{width:min(100%,560px)}.wa-mini-game__header,.wa-mailbox-connection__header,.wa-style-profile__header,.wa-proximity-list__header,.wa-sequence-engagement__header{display:grid;gap:3px}.wa-mini-game__eyebrow{color:var(--wa-color-muted);font-size:9px;line-height:1;font-weight:680;text-transform:uppercase}.wa-mini-game__title,.wa-mailbox-connection__title,.wa-style-profile__title,.wa-proximity-list__title,.wa-sequence-engagement__title{margin:0;color:var(--wa-ink);font-size:15px;line-height:1.12;font-weight:560;letter-spacing:0}.wa-mini-game__subtitle,.wa-mailbox-connection__subtitle,.wa-style-profile__subtitle,.wa-proximity-list__subtitle,.wa-sequence-engagement__subtitle{margin:0;color:var(--wa-color-muted);font-size:11.5px;line-height:1.26;font-weight:410}.wa-mailbox-connection{gap:15px}.wa-mailbox-connection__card{display:grid;grid-template-columns:minmax(0,1fr) 124px;gap:14px;align-items:center;min-width:0;padding:14px 14px 14px 16px;border:1px solid #d9d7d0;border-radius:12px;background:#f7f6f0;box-shadow:inset 0 0 0 1px #fffff96b}.wa-mailbox-connection__copy{display:grid;gap:15px;min-width:0}.wa-mailbox-connection__title{font-size:20px;line-height:1.08;font-weight:560}.wa-mailbox-connection__subtitle{max-width:310px;color:#11110f;font-size:14px;line-height:1.28;font-weight:400}.wa-mailbox-connection__actions{display:grid;gap:9px;justify-self:end;width:124px;min-width:0}.wa-mailbox-connection__button{position:relative;isolation:isolate;display:grid;grid-template-columns:20px max-content;align-items:center;justify-content:center;gap:8px;width:100%;min-width:0;min-height:40px;padding:0 10px;border:1px solid #d6d5cf;border-radius:5px;color:#080807;background:#fffff9;font:inherit;font-size:15.5px;line-height:1;font-weight:430;letter-spacing:0;cursor:default;overflow:visible;transform:translateZ(0)}.wa-mailbox-connection__button:before,.wa-mailbox-connection__button:after{content:"";position:absolute;pointer-events:none;opacity:0}.wa-mailbox-connection__button:before{inset:-1px;z-index:0;border-radius:inherit;background:radial-gradient(circle at 50% 50%,rgba(234,67,53,.82),transparent 34%),linear-gradient(90deg,#ea433500,#ea433566,#ea433500);background-position:0% 50%,0% 50%;background-size:220% 100%,220% 100%;filter:blur(7px)}.wa-mailbox-connection__button:after{inset:0;z-index:1;border-radius:inherit;padding:1px;background:radial-gradient(circle at 50% 50%,rgba(234,67,53,.95),rgba(234,67,53,.26) 34%,transparent 54%),linear-gradient(90deg,transparent,rgba(234,67,53,.52),transparent);background-position:0% 50%,0% 50%;background-size:220% 100%,220% 100%;-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask-composite:exclude}.wa-mailbox-connection__button>*{position:relative;z-index:2}.wa-mailbox-connection__button:disabled{opacity:1;pointer-events:none}.wa-mailbox-connection__provider-icon{display:block;width:20px;height:20px;flex-shrink:0;object-fit:contain}.wa-mailbox-connection__button-copy{display:grid;width:max-content;min-width:0;align-items:center}.wa-mailbox-connection__provider-label,.wa-mailbox-connection__button-label{grid-area:1 / 1;display:block;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;transition:opacity .18s ease,transform .18s ease}.wa-mailbox-connection__button-label[data-mailbox-button-label=loading],.wa-mailbox-connection__button-label[data-mailbox-button-label=connected],.wa-mailbox-connection__spinner{display:none;opacity:0;transform:translateY(5px)}.wa-mailbox-connection[data-mailbox-state=loading] [data-mailbox-connect] .wa-mailbox-connection__button-label[data-mailbox-button-label=idle],.wa-mailbox-connection[data-mailbox-state=connected] [data-mailbox-connect] .wa-mailbox-connection__button-label[data-mailbox-button-label=idle]{display:none;opacity:0;transform:translateY(-5px)}.wa-mailbox-connection[data-mailbox-state=loading] [data-mailbox-connect] .wa-mailbox-connection__button-label[data-mailbox-button-label=loading],.wa-mailbox-connection[data-mailbox-state=connected] [data-mailbox-connect] .wa-mailbox-connection__button-label[data-mailbox-button-label=connected]{display:block;opacity:1;transform:translateY(0)}.wa-mailbox-connection[data-mailbox-state=connected] [data-mailbox-connect] .wa-mailbox-connection__button-label[data-mailbox-button-label=connected]{display:inline-flex;align-items:center;gap:4px}.wa-mailbox-connection__connected-icon{display:block;width:16px;height:16px;color:currentColor;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:0 0 16px}.wa-mailbox-connection[data-mailbox-state=loading] [data-mailbox-connect]{grid-template-columns:max-content;border-color:#ea433561}.wa-mailbox-connection[data-mailbox-state=loading] [data-mailbox-connect]:before{opacity:0;animation:none}.wa-mailbox-connection[data-mailbox-state=loading] [data-mailbox-connect]:after{opacity:1;animation:wa-mailbox-gmail-radiate 1.16s ease-in-out infinite}.wa-mailbox-connection[data-mailbox-state=loading] [data-mailbox-connect] .wa-mailbox-connection__provider-icon,.wa-mailbox-connection[data-mailbox-state=loading] [data-mailbox-connect] .wa-mailbox-connection__spinner{display:none}.wa-mailbox-connection[data-mailbox-state=connected] [data-mailbox-connect]{grid-template-columns:max-content;color:#aaa59d;border-color:#17171424;background:transparent;box-shadow:none}.wa-mailbox-connection[data-mailbox-state=connected] [data-mailbox-connect] .wa-mailbox-connection__provider-icon{display:none}.wa-mailbox-connection__spinner{position:absolute;right:9px;width:12px;height:12px;border:1.5px solid rgba(17,17,15,.18);border-top-color:currentColor;border-radius:999px;animation:wa-spin .76s linear infinite}.wa-mailbox-learning{display:none;grid-template-columns:44px max-content minmax(90px,1fr);grid-template-rows:auto auto;grid-template-areas:"thumb title progress" "thumb detail detail";align-items:center;gap:5px 14px;padding:0;color:#5f5b55;background:transparent}.wa-mailbox-learning__thumbprint{grid-area:thumb;display:grid;place-items:center;width:44px;height:44px;background:transparent}.wa-mailbox-learning__title{grid-area:title;display:inline-flex;align-items:center;gap:6px;margin:0;color:#5b5752;font-size:14px;line-height:1;font-weight:560;white-space:nowrap}.wa-mailbox-learning__ready-chevron{position:relative;top:-1px;display:inline-block;width:9px;height:9px;color:currentColor;opacity:0;transform-origin:center}.wa-mailbox-learning__ready-chevron:before{content:"";position:absolute;top:0;left:1px;width:6px;height:6px;border-right:1.5px solid currentColor;border-bottom:1.5px solid currentColor;transform:rotate(45deg)}.wa-mailbox-learning[data-mailbox-learning-state=ready] .wa-mailbox-learning__title{color:#11110f}.wa-mailbox-learning[data-mailbox-learning-state=ready] .wa-mailbox-learning__progress{display:none}.wa-mailbox-learning__detail{grid-area:detail;margin:0;color:#8b867e;font-size:13px;line-height:1.15;font-weight:400}.wa-mailbox-thumbprint{width:36px;height:36px;overflow:visible;color:#11110f}.wa-mailbox-thumbprint__base path,.wa-mailbox-thumbprint__fill path{stroke-width:5.4}.wa-mailbox-thumbprint__base path{stroke:color-mix(in srgb,currentColor 14%,transparent)}.wa-mailbox-thumbprint__fill path{stroke:currentColor}.wa-mailbox-learning__progress{grid-area:progress;height:4px;overflow:hidden;border-radius:999px;background:#dfddd6}.wa-mailbox-learning__progress span{display:block;width:100%;height:100%;border-radius:inherit;background:#5f5b55;transform:scaleX(0);transform-origin:left center}.wa-swipe-game{gap:9px;max-width:520px}.wa-swipe-game__prompt{margin:0;color:var(--wa-ink);font-size:12px;line-height:1.28;font-weight:430}.wa-swipe-game__axis{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;color:var(--wa-color-muted);font-size:10px;line-height:1;font-weight:520}.wa-swipe-game__axis span:first-child{color:#7f1d1d94}.wa-swipe-game__axis span:nth-child(2){color:var(--wa-color-muted);font-variant-numeric:tabular-nums}.wa-swipe-game__axis span:last-child{justify-self:end;color:#1665349e}.wa-swipe-game__stack{position:relative;height:184px;overflow:visible}.wa-swipe-game__glow{position:absolute;inset:12px -18px 0;z-index:0;border-radius:999px;background:linear-gradient(90deg,rgba(127,29,29,.055),transparent 42%,transparent 58%,rgba(22,101,52,.065));filter:blur(22px);pointer-events:none}.wa-swipe-card,.wa-swipe-game__complete{position:absolute;inset:0;display:grid;align-content:center;justify-items:center;min-width:0;border:1px solid rgba(228,228,231,.82);border-radius:21px;background:#fafafa;text-align:center;box-shadow:0 18px 45px #00000014}.wa-swipe-card{gap:13px;padding:22px 26px}.wa-swipe-game[data-swipe-decision=avoid] .wa-swipe-card[data-swipe-state=active]{border-color:#d298989e;background:linear-gradient(135deg,#f8f1f1,#fafafa 68%);box-shadow:-22px 28px 70px #7f1d1d1f}.wa-swipe-game[data-swipe-decision=use] .wa-swipe-card[data-swipe-state=active]{border-color:#8eb79da3;background:linear-gradient(135deg,#fafafa 32%,#f0f7f2);box-shadow:22px 28px 70px #1665341f}.wa-swipe-card__label{max-width:360px;color:var(--wa-ink);font-size:20px;line-height:1.05;font-weight:580;letter-spacing:0}.wa-swipe-card__detail{max-width:340px;color:var(--wa-color-muted);font-size:11.5px;line-height:1.35;font-weight:410}.wa-swipe-game__actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;max-width:420px}.wa-swipe-game__action{position:relative;display:inline-flex;align-items:center;justify-content:center;min-height:38px;border:1px solid var(--wa-line-12);border-radius:999px;background:var(--wa-panel);cursor:default}.wa-swipe-game__action:before,.wa-swipe-game__action:after{content:"";position:absolute;display:block}.wa-swipe-game__action[data-swipe-action=avoid]{border-color:#d298987a;background:#f8f1f1e6}.wa-swipe-game__action[data-swipe-action=avoid]:before,.wa-swipe-game__action[data-swipe-action=avoid]:after{width:14px;height:1.5px;border-radius:999px;background:#ba4d4d}.wa-swipe-game__action[data-swipe-action=avoid]:before{transform:rotate(45deg)}.wa-swipe-game__action[data-swipe-action=avoid]:after{transform:rotate(-45deg)}.wa-swipe-game__action[data-swipe-action=use]{border-color:#8eb79d80;background:#f0f7f2f2}.wa-swipe-game__action[data-swipe-action=use]:before{width:13px;height:7px;border-bottom:1.7px solid #2f8f4d;border-left:1.7px solid #2f8f4d;transform:translateY(-1px) rotate(-45deg)}.wa-swipe-game__action[data-active=true]{border-color:var(--wa-ink)}.wa-swipe-game__complete{z-index:10;color:var(--wa-ink);font-size:17px;line-height:1.1;font-weight:560}.wa-sequence-engagement__header{grid-template-columns:minmax(0,1fr) auto;align-items:start}.wa-sequence-engagement__subtitle{grid-column:1 / -1}.wa-sequence-engagement__count{display:inline-flex;align-items:center;min-height:23px;padding:0 9px;border-radius:999px;color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);font-size:10px;line-height:1;font-weight:680;white-space:nowrap}.wa-style-profile__rows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}.wa-style-profile__row{display:grid;gap:4px;min-height:54px;padding:9px 10px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel)}.wa-style-profile__row span{color:var(--wa-color-muted);font-size:9.5px;line-height:1;font-weight:660;text-transform:uppercase}.wa-style-profile__row strong{color:var(--wa-ink);font-size:12px;line-height:1.2;font-weight:520}.wa-style-profile__examples{display:grid;gap:6px}.wa-style-profile__example{margin:0;padding:9px 11px;border-left:2px solid var(--wa-color-accent);color:var(--wa-ink);background:var(--wa-row-bg);font-size:11px;line-height:1.25;font-weight:430}.wa-proximity-list__rows{display:grid;gap:7px}.wa-proximity-lead{display:grid;grid-template-columns:30px minmax(0,1fr);gap:9px;min-width:0;padding:9px 10px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel);box-shadow:0 8px 18px #1717140a}.wa-proximity-lead__rank{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:999px;color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);font-size:11px;line-height:1;font-weight:660}.wa-proximity-lead__body{display:grid;gap:5px;min-width:0}.wa-proximity-lead__top{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:start}.wa-proximity-lead__identity{display:grid;gap:2px;min-width:0}.wa-proximity-lead__identity strong{color:var(--wa-ink);font-size:12.5px;line-height:1.1;font-weight:570}.wa-proximity-lead__identity span{color:var(--wa-color-muted);font-size:10px;line-height:1.1;font-weight:410}.wa-proximity-lead__score{color:var(--wa-color-accent);font-size:11px;line-height:1;font-weight:680}.wa-proximity-lead__personalization{margin:0;color:var(--wa-ink);font-size:11px;line-height:1.22;font-weight:430}.wa-proximity-lead__proximity{color:var(--wa-color-muted);font-size:9.5px;line-height:1;font-weight:620;text-transform:uppercase}.wa-sequence-engagement__sequences{display:grid;gap:10px}.wa-sequence-people{--wa-sequence-person-card-min-width: 112px;position:relative;isolation:isolate;display:flex;gap:4px;align-items:end;width:100%;max-width:100%;margin:0;padding:3px max(16px,calc(50% - var(--wa-sequence-person-card-min-width) / 2)) 0;overflow-x:auto;overflow-y:visible;scroll-snap-type:x mandatory;scroll-padding-inline:max(16px,calc(50% - var(--wa-sequence-person-card-min-width) / 2));scrollbar-width:none;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 34px,#000 calc(100% - 34px),transparent 100%);mask-image:linear-gradient(to right,transparent 0,#000 34px,#000 calc(100% - 34px),transparent 100%)}.wa-sequence-people:after{content:"";position:absolute;right:0;bottom:0;left:0;z-index:2;height:1px;background:linear-gradient(90deg,transparent,rgba(17,17,15,.16) 34px,rgba(17,17,15,.16) calc(100% - 34px),transparent);pointer-events:none}.wa-sequence-people::-webkit-scrollbar{display:none}.wa-sequence-person-card{position:relative;z-index:1;display:grid;flex:0 0 auto;grid-template-columns:28px max-content;gap:8px;align-items:center;width:max-content;min-width:var(--wa-sequence-person-card-min-width);min-height:46px;padding:8px 10px 9px;border:1px solid var(--wa-line-08);border-bottom:0;border-radius:9px 9px 0 0;color:var(--wa-ink);background:color-mix(in srgb,var(--wa-panel) 82%,#f1f0eb);font:inherit;text-align:left;opacity:.66;cursor:pointer;scroll-snap-align:center;transform:none;transform-origin:center;transition:border-color .16s ease,background .16s ease,box-shadow .16s ease,opacity .16s ease,transform .18s cubic-bezier(.2,.8,.2,1)}.wa-sequence-person-card:is(:hover,[data-active=true]){border-color:#11110f33;background:var(--wa-panel);opacity:1}.wa-sequence-person-card[data-active=true]{z-index:3;border-color:#11110f3d;box-shadow:none}.wa-sequence-person-card[data-active=true]:after{content:"";position:absolute;right:-1px;bottom:-1px;left:-1px;height:2px;background:var(--wa-panel);pointer-events:none}.wa-sequence-person-card__avatar{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;overflow:hidden;border:1px solid rgba(17,17,15,.08);border-radius:999px;color:#11110f;background:#e8f3ff;font-size:10px;line-height:1;font-weight:620}.wa-sequence-person-card__avatar img{display:block;width:100%;height:100%;object-fit:cover}.wa-sequence-person-card__avatar[data-avatar-tone="2"]{background:#f1eadf}.wa-sequence-person-card__avatar[data-avatar-tone="3"]{background:#e9f5e6}.wa-sequence-person-card__avatar[data-avatar-tone="4"]{background:#f4e8ec}.wa-sequence-person-card__avatar[data-avatar-tone="5"]{background:#e8f1f0}.wa-sequence-person-card__avatar[data-avatar-tone="6"]{background:#f1ede7}.wa-sequence-person-card__avatar[data-avatar-tone="7"]{background:#e9edf5}.wa-sequence-person-card__avatar[data-avatar-tone="8"]{background:#f2eeee}.wa-sequence-person-card__avatar[data-avatar-tone="9"]{background:#edf3e8}.wa-sequence-person-card__copy{display:grid;gap:2px;width:max-content;min-width:0}.wa-sequence-person-card__copy strong{overflow:visible;color:var(--wa-ink);font-size:12px;line-height:1.1;font-weight:560;text-overflow:clip;white-space:nowrap}.wa-sequence-person-card__copy span{overflow:visible;color:var(--wa-color-muted);font-size:10px;line-height:1.12;font-weight:410;text-overflow:clip;white-space:nowrap}.wa-sequence-card{display:grid;grid-template-columns:minmax(146px,.76fr) minmax(0,1.24fr);gap:10px;align-items:stretch;min-width:0;padding:0;border:0;background:transparent;box-shadow:none}.wa-sequence-card__top{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:start}.wa-sequence-card__identity{display:grid;gap:2px;min-width:0}.wa-sequence-card__identity strong{color:var(--wa-ink);font-size:12.5px;line-height:1.1;font-weight:570}.wa-sequence-card__identity span,.wa-sequence-card__personalization{color:var(--wa-color-muted);font-size:10.5px;line-height:1.22;font-weight:410}.wa-sequence-card__label{color:var(--wa-color-accent);font-size:9.5px;line-height:1;font-weight:680;text-transform:uppercase}.wa-sequence-card__subject{margin:0;color:var(--wa-ink);font-size:12px;line-height:1.18;font-weight:540}.wa-sequence-card__personalization{margin:0}.wa-sequence-steps{display:grid;align-content:start;gap:5px;min-width:0;margin:0}.wa-sequence-step{position:relative;display:grid;grid-template-columns:42px minmax(0,1fr);gap:7px;align-items:center;width:100%;min-height:38px;padding:7px 8px;border:1px solid var(--wa-line-08);border-radius:var(--wa-radius-sm);color:var(--wa-ink);background:var(--wa-panel);font:inherit;text-align:left;cursor:pointer}.wa-sequence-step__channel{display:inline-flex;align-items:center;justify-content:start;min-height:0;padding:0;border-radius:0;color:var(--wa-color-muted);background:transparent;font-size:8.5px;line-height:1;font-weight:520;text-transform:none}.wa-sequence-step[data-channel=linkedin] .wa-sequence-step__channel,.wa-sequence-step[data-channel=call] .wa-sequence-step__channel{color:var(--wa-color-muted);background:transparent}.wa-sequence-step__copy{display:grid;min-width:0}.wa-sequence-step__copy strong{color:var(--wa-ink);font-size:11px;line-height:1.12;font-weight:560;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wa-sequence-step__copy span{color:var(--wa-color-muted);font-size:10px;line-height:1.22;font-weight:410}.wa-sequence-step[data-step-open=false]{align-items:center;padding-top:6px;padding-bottom:6px}.wa-sequence-step[data-step-selected=true]{border-color:#11110fb8;background:#fffff9}.wa-sequence-step[data-step-open=false] .wa-sequence-step__copy span{display:none}.wa-sequence-wait{display:grid;grid-template-columns:42px minmax(0,1fr);gap:7px;align-items:center;min-height:18px;padding:0 8px;color:var(--wa-color-muted);font-size:9.5px;line-height:1;font-weight:560;letter-spacing:0}.wa-sequence-wait:before{content:"";justify-self:center;width:1px;height:14px;border-radius:999px;background:var(--wa-line-10)}.wa-sequence-wait__label{white-space:nowrap}.wa-sequence-copy-panel{display:grid;align-content:start;gap:7px;min-width:0;min-height:180px;padding:11px 12px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);background:var(--wa-panel)}.wa-sequence-copy-panel__meta{color:var(--wa-color-muted);font-size:9px;line-height:1;font-weight:650;text-transform:uppercase}.wa-sequence-copy-panel__subject{color:var(--wa-ink);font-size:12px;line-height:1.16;font-weight:560}.wa-sequence-copy-panel__body{margin:0;color:var(--wa-ink);font-size:10.5px;line-height:1.32;font-weight:410;white-space:pre-line}.wa-engage-channels{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:7px}.wa-engage-channel{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:7px;align-items:start;min-width:0;min-height:58px;padding:9px 10px;border:1px solid var(--wa-line-10);border-radius:var(--wa-radius-sm);color:var(--wa-ink);background:var(--wa-row-bg);font:inherit;text-align:left}.wa-engage-channel__copy{display:grid;gap:3px;min-width:0}.wa-engage-channel__copy strong{color:var(--wa-ink);font-size:11px;line-height:1.1;font-weight:570}.wa-engage-channel__copy span{color:var(--wa-color-muted);font-size:9.5px;line-height:1.16;font-weight:410}.wa-engage-channel__badge{display:inline-flex;align-items:center;min-height:17px;padding:0 6px;border-radius:999px;color:var(--wa-color-inverse);background:var(--wa-color-accent);font-size:8px;line-height:1;font-weight:740;text-transform:uppercase;white-space:nowrap}.wa-sequence-kickoff{display:grid;gap:3px;justify-items:start;justify-self:end;width:auto;min-width:0;min-height:36px;padding:7px 10px;border:1px solid var(--wa-ink);border-radius:var(--wa-radius-sm);color:var(--wa-color-inverse);background:var(--wa-ink);font:inherit;text-align:left;cursor:pointer;box-shadow:0 10px 22px #1717141f}.wa-sequence-kickoff__label{font-size:11px;line-height:1.05;font-weight:580}.wa-sequence-kickoff__detail{color:#fffffbb8;font-size:8.5px;line-height:1.15;font-weight:410}.wa-sequence-kickoff[data-launched=true]{border-color:var(--wa-color-accent);color:var(--wa-ink);background:var(--wa-color-accent)}.wa-sequence-kickoff[data-launched=true] .wa-sequence-kickoff__detail{color:#11110f9e}.wa-composer{position:absolute;right:var(--wa-composer-side-inset);bottom:var(--wa-composer-bottom-outset);left:var(--wa-composer-side-inset);z-index:3;display:grid;grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr) auto;gap:8px;align-items:stretch;height:var(--wa-composer-height);min-height:0;padding:18px 10px 10px 20px;margin:0;overflow:hidden;border:1px solid var(--wa-color-input-line);border-radius:17px;background:var(--wa-panel);box-shadow:0 48px 88px #05050457,0 18px 38px #0505042e,0 1px #ffffffbd inset;transform-origin:center center;contain:layout paint style;backface-visibility:hidden;transition:border-color .14s ease,box-shadow .14s ease}.wa-composer[data-visible=false]{pointer-events:none}.wa-composer__placeholder{display:flex;grid-row:1;align-items:flex-start;align-self:start;min-width:0;min-height:20px;padding:0;overflow:hidden;border:0;border-radius:0;color:var(--wa-ink);background:transparent;font-size:16px;line-height:1.18;font-weight:400;overflow-wrap:anywhere;white-space:normal}.wa-composer__placeholder:empty:before{content:"Ask anything...";color:var(--wa-placeholder)}.wa-composer__controls{display:inline-flex;grid-row:2;align-items:center;justify-self:end;gap:12px;min-width:0}.wa-composer__select{display:inline-flex;align-items:center;gap:5px;color:#74726a;font-size:12px;line-height:1;font-weight:410;white-space:nowrap}.wa-composer__chevron{display:block;width:16px;height:16px;flex:0 0 auto;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.wa-composer__send{display:inline-flex;align-items:center;justify-content:center;width:var(--wa-composer-send-size);min-width:var(--wa-composer-send-size);height:var(--wa-composer-send-size);padding:0;border:0;border-radius:999px;color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);line-height:1;cursor:default;white-space:nowrap}.wa-composer__send-icon{display:block;width:16px;height:16px;flex:0 0 auto;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.wa-composer__placeholder:empty~.wa-composer__controls .wa-composer__send{background:#aaa89e}.wa-history-resume{position:absolute;right:auto;bottom:calc(var(--wa-composer-bottom-outset) + var(--wa-composer-height) - var(--wa-history-resume-height) - var(--wa-history-resume-y-offset));left:50%;z-index:5;display:inline-flex;align-items:center;gap:10px;min-height:var(--wa-history-resume-height);padding:0 18px 0 12px;border:1px solid var(--wa-line-12);border-radius:999px;color:var(--wa-color-heading-strong);background:#fffff9f5;box-shadow:0 22px 48px #17171433,0 8px 18px #1717141a,0 1px #ffffffbd inset;font:inherit;font-size:13px;line-height:1;font-weight:520;letter-spacing:0;cursor:default;opacity:0;pointer-events:none;transform:translate(-50%,6px) scale(.98);transition:opacity .16s ease,transform .18s ease}.wa-section[data-chat-history-paused=true] .wa-history-resume{opacity:1;pointer-events:auto;transform:translate(-50%) scale(1)}.wa-history-resume__icon{position:relative;display:grid;place-items:center;width:24px;height:24px;border-radius:999px;color:var(--wa-color-inverse);background:var(--wa-color-dark-surface);font-size:0;line-height:0}.wa-history-resume__svg{display:block;width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.wa-stage__eyebrow,.wa-stage__label,.wa-stage__status{display:none}.wa-cursor{position:absolute;top:0;left:0;z-index:20;width:1px;height:1px;pointer-events:none;transform:translateZ(0);transform-origin:0 0;backface-visibility:hidden}.wa-cursor__float{position:absolute;top:0;left:0;width:1px;height:1px;transform-origin:0 0;backface-visibility:hidden}.wa-cursor__glyph{position:absolute;top:0;left:0;width:var(--wa-cursor-default-width);height:var(--wa-cursor-default-height);background-image:var(--wa-cursor-arrow);background-repeat:no-repeat;background-position:0 0;background-size:100% 100%;transform:translate(0);transform-origin:0 0;backface-visibility:hidden;filter:drop-shadow(0 2px 3px var(--wa-cursor-shadow))}.wa-cursor__glyph:before,.wa-cursor__glyph:after{content:"";position:absolute;opacity:0;top:0;left:0;width:var(--wa-cursor-default-width);height:var(--wa-cursor-default-height);background-repeat:no-repeat;background-position:0 0;background-size:100% 100%;pointer-events:none}.wa-cursor__mimic-head,.wa-cursor__mimic-tail{position:absolute;inset:0;display:none;width:100%;height:100%;background-repeat:no-repeat;background-position:0 0;background-size:100% 100%;pointer-events:none;transform-origin:6px 13.25px;backface-visibility:hidden}.wa-cursor__mimic-head{z-index:2;background-image:var(--wa-cursor-arrow-head)}.wa-cursor__mimic-tail{z-index:1;background-image:var(--wa-cursor-arrow-tail)}.wa-cursor[data-cursor-mimicking=true][data-cursor-mode=default] .wa-cursor__glyph{background-image:none}.wa-cursor[data-cursor-mimicking=true][data-cursor-mode=default] .wa-cursor__mimic-head,.wa-cursor[data-cursor-mimicking=true][data-cursor-mode=default] .wa-cursor__mimic-tail{display:block}.wa-cursor[data-cursor-mimicking=true][data-cursor-mode=default] .wa-cursor__mimic-tail{animation:wa-cursor-tail-wag 245ms infinite}.wa-cursor[data-cursor-mode=pointer] .wa-cursor__glyph,.wa-cursor[data-cursor-mode=click] .wa-cursor__glyph{width:32px;height:32px;background-image:var(--wa-cursor-hand);transform:translate(-10px,-1px)}.wa-cursor[data-cursor-mode=drag] .wa-cursor__glyph{width:32px;height:32px;background-image:var(--wa-cursor-closedhand);transform:translate(-16px,-16px)}.wa-cursor[data-cursor-mode=release] .wa-cursor__glyph{width:32px;height:32px;background-image:var(--wa-cursor-openhand);transform:translate(-16px,-16px)}.wa-cursor[data-cursor-mode=text] .wa-cursor__glyph{width:23px;height:22px;background-image:var(--wa-cursor-ibeam);transform:translate(-11px,-11px)}@keyframes wa-cursor-tail-wag{0%,to{animation-timing-function:cubic-bezier(.16,.88,.24,1);transform:translateZ(0) rotate(-1deg) skew(0)}24%{animation-timing-function:cubic-bezier(.16,0,.24,1);transform:translate3d(.22px,0,0) rotate(9.5deg) skew(1.65deg)}38%{animation-timing-function:cubic-bezier(.16,.88,.24,1);transform:translate3d(.08px,0,0) rotate(3.6deg) skew(.65deg)}64%{animation-timing-function:cubic-bezier(.2,0,.24,1);transform:translate3d(-.2px,0,0) rotate(-8.5deg) skew(-1.5deg)}}@keyframes wa-thinking-logo-gradient{0%{background-position:120% 50%}to{background-position:-120% 50%}}@keyframes wa-mailbox-gmail-radiate{0%{background-position:0% 50%,0% 50%}50%{background-position:100% 50%,100% 50%}to{background-position:0% 50%,0% 50%}}@keyframes wa-mailbox-gmail-pulse{0%,to{transform:scale(.98)}50%{transform:scale(1.08)}}@keyframes wa-dot{0%,80%,to{opacity:.28;transform:translateY(0)}40%{opacity:1;transform:translateY(-3px)}}@keyframes wa-spin{to{transform:rotate(360deg)}}@keyframes wa-caret{0%,45%{opacity:1}46%,to{opacity:0}}@keyframes wa-text-shimmer{0%{background-position:100% 0}62%,to{background-position:0% 0}}@media(max-width:1180px){.wa-section{padding:82px 24px 96px}.wa-section__inner{grid-template-columns:1fr;grid-template-rows:auto auto auto;row-gap:28px}.wa-copy{max-width:880px}.wa-story-controls,.wa-stage{grid-column:1}.wa-story-controls{grid-template-columns:minmax(0,1fr) auto;align-items:center;width:min(660px,100%);justify-self:center;gap:14px;padding-top:0}.wa-story-tabs{min-width:0;gap:0}.wa-story-tab{display:none}.wa-story-tab.is-active{display:grid;grid-template-columns:4px minmax(0,1fr);min-height:36px;gap:12px;align-items:center}.wa-story-tab.is-active .wa-story-tab__marker{min-height:36px}.wa-story-tab__body{min-width:0;gap:0;padding-top:0}.wa-story-tab__title{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:24px;line-height:1.08}.wa-story-tab__description{display:none}.wa-controls-row{position:static;display:inline-flex;align-items:center;justify-content:flex-end;gap:8px;width:auto;height:auto;overflow:visible;clip:auto;clip-path:none;white-space:normal}.wa-controls-row [data-toggle-play],.wa-controls-row .wa-scrubber{display:none}.wa-control-button{display:grid;place-items:center;width:34px;height:34px;padding:0;border:1px solid var(--wa-line-12);border-radius:999px;color:var(--wa-color-heading-strong);background:#fffff9c2;box-shadow:0 8px 22px #17171414;cursor:pointer}.wa-control-button:hover{border-color:var(--wa-line-20);background:#fffff9f0}.wa-control-button:focus-visible{outline:2px solid var(--wa-color-accent);outline-offset:3px}.wa-stage{grid-row:3;width:min(660px,100%);justify-self:center}.wa-stage__media{right:0}.wa-window{margin-left:auto;margin-right:auto}}@media(max-width:760px){.wa-section{--wa-chat-x-padding: 12px;--wa-composer-side-inset: -21px;--wa-composer-bottom-outset: -21px;--wa-composer-height: 88px;--wa-composer-send-size: 32px;--wa-history-resume-height: 40px;padding:54px 18px 72px}.wa-section__inner{row-gap:24px}.wa-copy__title{font-size:clamp(36px,11vw,48px);line-height:1.05}.wa-story-tabs{gap:0}.wa-story-tab{gap:12px;min-height:36px}.wa-story-tab__marker{min-height:36px}.wa-story-tab__body{gap:0;padding-top:0}.wa-story-tab__title{font-size:21px}.wa-story-tab__description{font-size:15px}.wa-stage{width:100%;min-height:560px}.wa-stage__media{top:-22px;right:0;width:58vw;min-width:220px;height:570px}.wa-window{width:min(100%,590px);margin:82px 0 0}.wa-chat-shell{height:520px;border-radius:16px}.wa-chat-shell__body{gap:0}.wa-thread{--wa-chat-entry-gap: 14px}.wa-thread{min-height:0;max-height:none}.wa-message{max-width:96%}.wa-message__body{max-width:min(var(--wa-ai-message-max-width),340px);font-size:13px}.wa-message[data-message-role=user] .wa-message__body{max-width:min(var(--wa-user-message-max-width),280px)}.wa-result-row{grid-template-columns:1fr;gap:4px}.wa-result-row strong{white-space:normal}.wa-signup-scene{gap:10px;padding-bottom:0}.wa-signup-scene__title{margin-bottom:16px;font-size:26px}.wa-signup-field{grid-template-columns:minmax(0,1fr) 36px;gap:9px;width:min(320px,86%);min-height:54px;padding:0 8px 0 15px;border-radius:14px;font-size:16px}.wa-signup-field__submit{width:36px;height:36px}.wa-signup-field__submit-icon{width:16px;height:16px}.wa-research-step{min-height:64px;gap:8px;padding-left:0}.wa-research-step__label{font-size:14px}.wa-research-step__detail{font-size:13px}.wa-data-source-grid__column{gap:11px}.wa-data-source-grid--marketing .wa-data-source-grid__column{gap:34px}.wa-data-source-grid__list,.wa-engage-channels,.wa-style-profile__rows,.wa-swipe-game__actions,.wa-sequence-card{grid-template-columns:minmax(0,1fr)}.wa-sequence-copy-panel{min-height:140px}.wa-sequence-step{grid-template-columns:minmax(0,1fr)}.wa-sequence-step__channel{justify-self:start;padding:0}.wa-sequence-wait{grid-template-columns:minmax(0,1fr);min-height:16px;padding:0 8px}.wa-sequence-wait:before{display:none}.wa-sequence-people{--wa-sequence-person-card-min-width: 104px;padding-inline:max(14px,calc(50% - var(--wa-sequence-person-card-min-width) / 2));scroll-padding-inline:max(14px,calc(50% - var(--wa-sequence-person-card-min-width) / 2))}.wa-sequence-person-card{grid-template-columns:24px max-content;gap:7px;min-height:42px;padding:7px 9px 8px}.wa-sequence-person-card__avatar{width:24px;height:24px}.wa-data-table{gap:0;padding:0}.wa-data-table__title{font-size:12px}.wa-data-table__count{font-size:9px}.wa-data-table__row{min-height:24px}.wa-data-table__row[data-header=true]{min-height:22px}.wa-data-table__cell{padding:5px 4px;font-size:8.5px;line-height:1.12}.wa-data-table__row[data-header=true] .wa-data-table__cell{font-size:9px}.wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=name],.wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=contact],.wa-data-table__row[data-header=true] .wa-data-table__cell[data-column-key=mutualConnection]{padding-left:4px}.wa-data-table__row[data-header=true] .wa-data-table__cell:last-of-type{padding-right:26px}.wa-section .wa-data-table__add{right:2px;width:22px;height:20px;border-radius:4px;font-size:15px}.wa-data-table__footer{align-items:start;gap:6px;padding-top:6px}.wa-data-table__actions{gap:5px}.wa-data-table-action{min-height:28px;padding:0 8px;border-radius:5px}.wa-data-table-action__icon{width:16px;height:16px}.wa-data-table-action__label{font-size:10px}.wa-data-table-action__badge{min-height:12px;padding:0 4px;font-size:6.5px}.wa-data-table-floating-tooltip{min-height:25px;padding:0 9px;font-size:9.5px}.wa-data-table-floating-tooltip[data-has-badge=true]{min-height:43px;padding:7px 9px;gap:5px}.wa-data-table-floating-tooltip__badge{min-height:13px;padding:0 5px;font-size:7px}.wa-data-table__pagination{gap:4px;font-size:7.5px}.wa-data-table__page-controls{gap:2px}.wa-data-table__page-button{width:17px;height:17px;border-radius:4px;font-size:7.5px}.wa-data-table-person{grid-template-columns:20px minmax(0,1fr);gap:4px}.wa-data-table-person__copy{gap:1px;margin-top:0}.wa-data-table-person__avatar-wrap,.wa-data-table-person__avatar{width:20px;height:20px}.wa-data-table-person__source{right:0;bottom:0;width:10px;height:10px}.wa-data-table-person__source[data-source=signal]:before{right:2px;bottom:2px;width:5px}.wa-data-table-person__source[data-source=signal]:after{right:1px;bottom:4px;height:4px}.wa-data-table-person__source[data-source=database]:before{top:2px;left:2px}.wa-data-table-person__source[data-source=engage]:before{top:3px;left:2px;width:6px}.wa-data-table-person__name{font-size:9px;line-height:1.03}.wa-data-table-person__detail{font-size:7.5px;line-height:1.04}.wa-data-table[data-table-variant=connections] .wa-data-table__cell[data-column-key=mutualConnection]:not(:empty){gap:4px}.wa-data-table-cell-badge{min-height:14px;padding:0;font-size:7px}.wa-mailbox-connection__card{grid-template-columns:minmax(0,1fr);gap:12px;padding:12px;border-radius:10px}.wa-mailbox-connection__copy{gap:9px}.wa-mailbox-connection__actions{justify-self:end;width:min(124px,100%)}.wa-mailbox-connection__title{font-size:16px}.wa-mailbox-connection__subtitle{max-width:none;font-size:12.5px}.wa-mailbox-connection__button{min-height:36px;font-size:12.5px;padding:0 9px}.wa-mailbox-learning{grid-template-columns:36px max-content minmax(48px,1fr);gap:4px 10px}.wa-mailbox-learning__thumbprint{width:36px;height:36px}.wa-mailbox-thumbprint{width:30px;height:30px}.wa-mailbox-learning__title{font-size:14px}.wa-mailbox-learning__detail{font-size:13px}.wa-enrichment-panel{gap:9px;max-width:100%}.wa-enrichment-panel__header{grid-template-columns:12px auto auto;gap:8px;padding:0;font-size:14px}.wa-waterfall-rows{gap:7px}.wa-waterfall-row{grid-template-columns:12px minmax(82px,auto) minmax(0,1fr);gap:8px;min-height:27px;font-size:14px}.wa-waterfall-chip{max-width:72px;padding-right:5px;font-size:8.5px}.wa-swipe-game{max-width:100%}.wa-swipe-game__stack{height:168px}.wa-swipe-card{padding:18px 16px}.wa-swipe-card__label{font-size:16px}.wa-swipe-card__detail{font-size:10.5px}.wa-composer{grid-template-columns:minmax(0,1fr);height:var(--wa-composer-height);padding:14px 9px 9px 14px;border-radius:15px}.wa-composer__placeholder{min-height:22px;font-size:16px}.wa-composer__controls{gap:10px}.wa-composer__select{gap:4px;font-size:11px}.wa-composer__send{width:var(--wa-composer-send-size);min-width:var(--wa-composer-send-size);height:var(--wa-composer-send-size);padding:0}}@media(prefers-reduced-motion:reduce){.wa-section *,.wa-section *:before,.wa-section *:after{animation-duration:.001ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important}}`, Nc = "chatbot-stories-runtime-styles";
function Zr() {
  Lc(Nc, Dc);
}
function qc(r) {
  if (r instanceof HTMLElement) return r;
  const e = document.querySelector(r);
  if (!e)
    throw new Error(`ChatbotStories: root element not found for selector "${r}"`);
  return e;
}
function Jr(r = "[data-chatbot-stories]", e = {}) {
  return e.injectStyles !== !1 && Zr(), Ic(qc(r), e);
}
const Oc = {
  init: Jr,
  defaultStories: $r
};
if (typeof window < "u") {
  window.ChatbotStories = Oc;
  const r = () => {
    document.querySelector("[data-chatbot-stories][data-auto-init]") && Zr(), document.querySelectorAll("[data-chatbot-stories][data-auto-init]").forEach((e) => {
      e.dataset.chatbotStoriesMounted || (e.dataset.chatbotStoriesMounted = "true", Jr(e));
    });
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", r, { once: !0 }) : r();
}
export {
  $r as defaultStories,
  Jr as init
};
